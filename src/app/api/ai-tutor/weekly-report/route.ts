/**
 * AI Weekly Report API - Version 1.1.0
 * Step 1: Context Memory Implementation
 * Added: Fetching previous report history to provide consistent feedback.
 */
import { NextResponse } from "next/server";
import { admin, db } from "@/lib/firebase-admin";
import { QuestionAssembler } from "@/lib/ai-tutor/questionAssembler";

export async function POST(req: Request) {
    try {
        if (!db) {
            return NextResponse.json({ error: "Firebase Admin not initialized" }, { status: 500 });
        }

        const body = await req.json();
        const { stats, goals, weakestTags, studentName, userId } = body;

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: "API Key not configured" }, { status: 500 });
        }

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        // --- Step 1: Context Memory - Fetch Previous Report ---
        let previousContext = "기존 분석 이력이 없습니다. 이번이 첫 번째 주간 리포트입니다.";
        if (userId) {
            const userDoc = await db.collection('Winter_Users').doc(userId).get();
            const userData = userDoc.data();
            if (userData?.latestWeeklyReport) {
                const prev = userData.latestWeeklyReport;
                previousContext = `
[지난주 AI 분석 및 처방 이력]
- 작성일: ${prev.createdAt}
- 지난주 예측 점수: ${prev.statsSummarized?.prediction || 'N/A'}
- 지난주 분석 내용 요약: 
${prev.content.substring(0, 1000)}... (생략됨)
                `;
            }
        }

        const prompt = `
당신은 20년 경력의 베테랑 토익 전문가 '강쌤'입니다. 
학생의 지난 1주일간의 학습 데이터를 분석하고, 특히 **지난주 분석 내용과 비교하여** 정밀 진단 리포트를 작성하십시오.

${previousContext}

[학생 정보]
- 성함: ${studentName || "학생"}님
- 현재 목표 점수: ${goals.targetScore}점 (LC: ${goals.targetLC}, RC: ${goals.targetRC})
- 현재 AI 예측 점수: ${goals.currentEst}점 (예측 점수 추이를 확인하세요)

[주간 학습 데이터 통계]
- 총 풀이 문항 수: ${stats.totalSolved}문항
- 파트별 상세 (최근 1주일):
${JSON.stringify(stats.parts, null, 2)}

[취약 유형 및 오답 패턴]
- 가장 많이 틀린 태그: ${JSON.stringify(weakestTags, null, 2)}

[요청 사항]
위 데이터와 지난주 이력을 바탕으로 다음 구조에 따라 답변하십시오:

1. 🎯 목표 달성 현황 진단:
   - 지난주와 비교하여 예측 점수가 얼마나 변했는지, 학습 페이스가 개선되었는지 분석하세요.
   - 학생의 이름을 부드럽게 언급하며 대화를 시작하세요.

2. 🔍 파트별 심층 분석 (원인 및 논리):
   - 지난주에 지적했던 취약점이 개선되었는지, 아니면 새로운 취약점이 발견되었는지 분석하세요.
   - 학생이 왜 이 문제를 틀리는지 문법적/심리적 원인을 AI 전문가로서 추론하여 설명하세요.

3. 📉 차주 정밀 목표 (Quantitative Goals):
   - **가장 중요한 섹션입니다.** 다음 주말 테스트(또는 연습)에서 달성해야 할 **구체적인 수치 목표**를 제시하십시오.
   - 예시: "현재 65%인 Part 2 정답률을 80%까지 끌어올리기", "Part 5에서 문법 오답을 3개 이내로 줄이기" 등.
   - 이를 통해 기대되는 차주 예상 점수도 함께 언급하십시오 (예: "다음 주에는 600점 돌파를 목표로 합시다").

4. 💊 다음 주 집중 처방전 (Action Plan):
   - 위 목표를 달성하기 위해 다음 주에 반드시 실천해야 할 구체적인 학습량과 방법을 제시하세요. (예: 특정 파트 시간 제한 훈련 등)

5. 🔥 강쌤의 한마디:
   - 지난주의 노력을 격려하거나, 부족한 점을 따끔하게 지적하며 신뢰감 있는 코멘트로 마무리하세요.

[주의사항]
- **막연한 격려보다는 데이터에 기반한 수치적 가이드라인**을 우선시하십시오.
- 말투는 '하십시오체'를 사용하며, 신뢰감 있고 권위 있는 전문가의 어조를 유지하세요.
- 불필요한 서론은 생략하고 마크다운(Markdown) 형식을 사용하여 가독성을 높이십시오.
- 숫자를 적극 활용하여 분석의 신뢰도를 높이십시오.
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

        const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "데이터 분석 중 오류가 발생했습니다.";

        // --- Persistence Logic ---
        if (userId) {
            console.log(`[AI Weekly Report] Saving report for user: ${userId}`);
            const userRef = db.collection('Winter_Users').doc(userId);

            // USE .set with merge: true to ensure it works even if the doc doesn't exist yet
            await userRef.set({
                latestWeeklyReport: {
                    content: aiText,
                    createdAt: new Date().toISOString(),
                    statsSummarized: {
                        totalSolved: stats.totalSolved,
                        prediction: goals.currentEst
                    }
                }
            }, { merge: true });

            // --- Assignment Logic ---
            const assignmentsRef = db.collection('Assignments');

            // ⚠️ Cleanup: Delete OLD AI assignments for this user before creating new ones
            try {
                const oldAiSnap = await assignmentsRef
                    .where('targetStudentId', '==', userId)
                    .where('isAiGenerated', '==', true)
                    .get();

                if (!oldAiSnap.empty) {
                    const batch = db.batch();
                    oldAiSnap.docs.forEach(doc => batch.delete(doc.ref));
                    await batch.commit();
                }
            } catch (cleanupError) {
                console.error("Cleanup old AI assignments error:", cleanupError);
            }

            // --- Step 3: Curriculum Assembly ---
            try {
                // Find top weak parts for Real Mode (Even Days)
                const weakParts = Object.entries(stats.parts)
                    .map(([part, s]: [string, any]) => ({
                        part,
                        accuracy: s.solved > 0 ? (s.correct / s.solved) * 100 : 100,
                        solved: s.solved
                    }))
                    .filter(p => p.solved > 0)
                    .sort((a, b) => a.accuracy - b.accuracy)
                    .map(p => p.part)
                    .slice(0, 3);

                // Default fallback if no weak parts found
                const finalWeakParts = weakParts.length > 0 ? weakParts : ['p2', 'p5', 'p7s'];

                const curriculum = await QuestionAssembler.assembleWeeklyCurriculum({
                    userId,
                    studentName: studentName || '학생',
                    courseType: '8week',
                    weakestTags: (weakestTags || []).slice(0, 4).map((t: any) => ({
                        tag: t.tag,
                        label: t.label,
                        count: t.incorrect
                    })),
                    weakestParts: finalWeakParts
                });

                const batch = db.batch();
                curriculum.forEach(assignment => {
                    const newDocRef = assignmentsRef.doc();
                    batch.set(newDocRef, assignment);
                });

                await batch.commit();
                console.log(`[AI Weekly Report] Successfully assembled 7-day curriculum for ${userId}`);

            } catch (asmError) {
                console.error("[AI Weekly Report] Assignment Assembly Failed:", asmError);
            }
        }

        return NextResponse.json({ text: aiText });

    } catch (error: any) {
        console.error("Weekly Analysis API Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
