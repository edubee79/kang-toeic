import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { stats, goals, weakestTags, studentName } = body;

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: "API Key not configured" }, { status: 500 });
        }

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        const prompt = `
당신은 20년 경력의 베테랑 토익 전문가 '강쌤'입니다. 
학생의 지난 1주일간의 학습 데이터를 분석하여 정밀 진단 리포트를 작성하십시오.

[학생 정보]
- 성함: ${studentName || "학생"}님
- 현재 목표 점수: ${goals.targetScore}점 (LC: ${goals.targetLC}, RC: ${goals.targetRC})
- 현재 AI 예측 점수: ${goals.currentEst}점

[주간 학습 데이터 통계]
- 총 풀이 문항 수: ${stats.totalSolved}문항
- 파트별 상세 (최근 1주일):
${JSON.stringify(stats.parts, null, 2)}

[취약 유형 및 오답 패턴]
- 가장 많이 틀린 태그: ${JSON.stringify(weakestTags, null, 2)}

[요청 사항]
위 데이터를 바탕으로 다음 구조에 따라 답변하십시오:

1. 🎯 목표 달성 현황 진단:
   - 현재 예측 점수와 목표 점수 간의 거리를 분석하고, 현재 학습 페이스(문항 수)가 적절한지 냉철하게 평가하세요.
   - 학생의 이름을 부드럽게 언급하며 대화를 시작하세요.

2. 🔍 파트별 심층 분석 (원인 및 논리):
   - 취약 태그(예: 분사, 접속사 등)를 바탕으로 학생이 왜 이 문제를 틀리는지 문법적/심리적 원인을 AI 전문가로서 추론하여 설명하세요.
   - 단순히 "틀렸다"가 아니라 "이런 핵심 논리가 부족해서 함정에 빠지는 것 같다"는 식의 분석이 필요합니다.

3. 💊 다음 주 집중 처방전 (Action Plan):
   - 약점을 보완하기 위해 다음 주에 반드시 실천해야 할 구체적인 학습량과 방법을 제시하세요. (예: 특정 파트 시간 제한 훈련 등)

4. 🔥 강쌤의 한마디:
   - 따끔하지만 격려가 되는 짧고 강한 코멘트로 마무리하세요.

[주의사항]
- 말투는 '하십시오체'를 사용하며, 신뢰감 있고 권위 있는 전문가의 어조를 유지하세요.
- 불필요한 서론은 생략하고 마크다운(Markdown) 형식을 사용하여 가독성을 높이십시오.
- 숫자를 적극 활용하여 분석의 신뢰도를 높이십시오.
- 학생이 본인의 이름을 '관리자' 등으로 설정했을 경우, 그냥 '학생분' 또는 '토익커님'으로 자연스럽게 지칭하세요.
`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: prompt }]
                }]
            })
        });

        const data = await response.json();
        if (data.error) throw new Error(data.error.message);

        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "데이터 분석 중 오류가 발생했습니다. 다시 시도해주세요.";
        return NextResponse.json({ text });

    } catch (error: any) {
        console.error("Weekly Analysis API Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
