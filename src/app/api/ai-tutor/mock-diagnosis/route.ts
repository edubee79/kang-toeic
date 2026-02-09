import { NextResponse } from "next/server";
import { db } from "@/lib/firebase-admin";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { attemptData, studentName, userId } = body;

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: "API Key not configured" }, { status: 500 });
        }

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        // Prepare the prompt for a specific mock test attempt
        const prompt = `
당신은 20년 경력의 베테랑 토익 전문가 '강쌤'입니다. 
학생이 방금 수행한 토익 모의고사(또는 하프테스트) 결과를 바탕으로 정밀 진단 보고서를 작성하십시오.

[학생 및 시험 정보]
- 성함: ${studentName || "학생"}님
- 목표 점수: ${attemptData.targetGoal}점
- 이번 시험 총점: ${attemptData.overallScore}점 (LC: ${attemptData.lcScore}, RC: ${attemptData.rcScore})

[파트별 상세 기록]
${JSON.stringify(attemptData.partStats, null, 2)}

[RC 시간 배분 실전 기록]
${JSON.stringify(attemptData.rcTimeAnalysis, null, 2)}

[요청 사항]
위 데이터를 바탕으로 다음 구조에 따라 답변하십시오:

1. 📊 이번 시험 총평:
   - 목표 점수와 현재 점수의 간극을 분석하고, 오늘 시험에서 가장 칭찬할 점과 아쉬운 점을 한 가지씩 언급하세요.

2. 🔍 파트별 오답 논리 분석:
   - 데이터상 가장 오답이 집중된 파트와 유형을 짚어주세요. 
   - 왜 그 유형을 틀렸을지(예: 문법 기초 부족, 스키밍 실패, 어휘 혼동 등) 전문가로서 추론하여 설명하세요.

3. ⏱️ 실전 페이스 체크 (시간 관리):
   - RC 시간 분석 데이터를 바탕으로, 어느 파트에서 시간을 더 단축해야 하는지, 혹은 너무 서둘러서 정확도가 떨어졌는지 진단하세요.

4. 💊 다음 학습을 위한 긴급 처방:
   - 내일 당장 무엇을 공부해야 할지 구체적인 학습량과 파트를 제시하세요.

5. 🔥 강쌤의 독설과 격려:
   - 학생의 현재 상태에 맞는 따끔한 조언이나 따뜻한 격려로 마무리하세요.

[주의사항]
- 말투는 '하십시오체'를 사용하며, 신뢰감 있고 권위 있는 전문가의 어조를 유지하세요.
- 마크다운(Markdown) 형식을 사용하여 가독성을 높이십시오.
- 숫자를 적극 활용하여 분석의 신뢰도를 높이십시오.
`;

        // --- Gemini API Call with Retry Logic ---
        async function fetchWithRetry(url: string, options: any, retries = 4, backoff = 3000) {
            for (let i = 0; i < retries; i++) {
                try {
                    const response = await fetch(url, options);
                    const data = await response.json();

                    if (response.status === 429) {
                        if (i === retries - 1) throw new Error("AI 서버의 호출 한도가 일시적으로 초과되었습니다. 약 1분 후 다시 시도해주세요.");
                        console.warn(`[AI Mock] Rate limit hit. Retrying in ${backoff}ms... (${i + 1}/${retries})`);
                        await new Promise(resolve => setTimeout(resolve, backoff));
                        backoff *= 2;
                        continue;
                    }

                    if (data.error) throw new Error(data.error.message);
                    return data;
                } catch (err: any) {
                    if (i === retries - 1) throw err;
                    console.warn(`[AI Mock] Fetch attempt ${i + 1} failed: ${err.message}. Retrying...`);
                    await new Promise(resolve => setTimeout(resolve, backoff));
                }
            }
        }

        const data = await fetchWithRetry(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: prompt }]
                }]
            })
        });

        const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "데이터 분석 중 오류가 발생했습니다.";

        return NextResponse.json({ text: aiText });

    } catch (error: any) {
        console.error("Mock Diagnosis API Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
