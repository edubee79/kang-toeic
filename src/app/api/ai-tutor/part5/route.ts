import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { question, options, correctAnswer, selectedAnswer, userQuery, explanation } = body;

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: "API Key not configured" }, { status: 500 });
        }

        // Use 'gemini-2.0-flash' which is the best confirmed model in the list
        // and switch back to v1beta which we verified works for this key
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        const prompt = `
당신은 20년 경력의 베테랑 토익 강사이자 문법 전문가입니다. 
학생이 Part 5 문제를 풀고 복습하는 과정에서 질문을 던졌습니다. 

[문제 정보]
- 문장: ${question}
- 보기: ${JSON.stringify(options)}
- 정답: ${correctAnswer}
- 학생이 선택한 답: ${selectedAnswer || "선택하지 않음"}
- 기존 해설: ${explanation || "없음"}

[학생의 추가 질문]
"${userQuery || "이 문제가 왜 정답이 이렇고 오답은 왜 안되는지 자세히 설명해주세요."}"

답변은 한국어로, 초보자도 이해하기 쉽게 설명해줘.
1. 정답인 이유를 문법적 원리와 함께 명쾌하게 설명하세요.
2. 학생이 선택한 오답이 왜 틀렸는지(함정 포인트)를 짚어주세요.
3. 관련해서 토익에 자주 나오는 핵심 문법 포인트를 1가지만 정리해주세요.
4. 마크다운 형식을 사용하여 가독성 있게 답변하세요.
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

        if (data.error) {
            console.error("Gemini API Error details:", JSON.stringify(data.error));
            return NextResponse.json({
                error: "AI API Error",
                message: data.error.message
            }, { status: data.error.code || 500 });
        }

        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "정상적인 답변을 생성할 수 없습니다. 다시 시도해주세요.";
        return NextResponse.json({ text });

    } catch (error: any) {
        console.error("AI Tutor Route Error:", error);
        return NextResponse.json({
            error: "Failed to fetch AI response",
            message: error.message
        }, { status: 500 });
    }
}
