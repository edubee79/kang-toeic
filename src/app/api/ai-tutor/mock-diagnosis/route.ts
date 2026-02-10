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
당신은 20년 경력의 대한민국 최고 토익 전문가 '강쌤'입니다. 
학생의 실제 시험 데이터를 분석하여, 학생이 '자신의 문제점과 해결책'을 명확히 이해할 수 있도록 날카로운 진단을 내리십시오.

[학생 및 시험 정보]
- 성함: ${studentName || "학생"}님
- 목표 점수: ${attemptData.targetGoal}점
- 이번 시험 총점: ${attemptData.overallScore}점 (LC: ${attemptData.lcScore}, RC: ${attemptData.rcScore})

[현장 데이터 (분석용)]
- 파트별 상세 현황: ${JSON.stringify(attemptData.partStats)}
- RC 시간 배분 결과: ${JSON.stringify(attemptData.rcTimeAnalysis)}

[필독: 답변 지침 (절대 엄수)]
1. 전문 용어 노출 금지: 'wrongTags', 'partStats', 'p1~p7', 'v1', 'nc1' 등의 내부 데이터 키값이나 기술적인 태그 식별자를 절대 답변에 포함하지 마십시오. 학생은 이런 암호를 이해할 수 없습니다.
2. 자연스러운 설명: 대신 "동사의 형태와 수 일치 문제", "이메일 지문의 세부 정보 파약", "Part 5 문법 파트"와 같이 사람이 이해할 수 있는 자연스러운 용어로 풀어서 설명하십시오.
3. 데이터 기반 추론: 데이터에 나타난 '숫자'와 '틀린 유형'의 상관관계를 강쌤의 노하우로 해석하십시오. (예: "Part 5 정답률은 높으나 RC 시간이 부족한 것은, 아는 문제를 너무 신중하게 풀다가 Part 7을 놓치고 있다는 증거입니다.")
4. 점수대별 맞춤 전략:
   - 600점 이하: 어휘력과 기초 문법 부재를 따끔하게 지적하고 단어 암기를 최우선으로 지시하십시오.
   - 600~850점: 정체기 탈출을 위한 '시간 관리'와 '버릴 문제 버리기' 전략을 강조하십시오.
   - 850점 이상: 단순 실수를 잡는 검토 습관과 고난도 패러프레이징 대응력을 주문하십시오.

[요청 구조]
마크다운을 사용하여 다음 4단계로 작성하십시오:
1. 📊 시험 총평 (목표 점수 대비 위치 및 총체적 진단)
2. 🔍 강쌤의 족집게 약점 분석 (데이터 너머의 본질적인 원인 파악 - '태그 번호' 언급 절대 금지)
3. 💊 다음 시험을 위한 긴급 처방 (구체적인 공부 우선순위와 실전 행동 강령)
4. 🔥 강쌤의 한마디 (권위 있지만 확실한 동기부여)

말투는 '하십시오체'를 사용하며, 20년 경력 전문가답게 품격 있고 날카로운 어조를 유지하십시오.
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
