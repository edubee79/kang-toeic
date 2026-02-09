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

        const currentDate = new Date().toISOString().split('T')[0];

        const prompt = `
당신은 20년 경력의 베테랑 토익 전문가 '강쌤'입니다. 
학생의 지난 1주일간의 학습 데이터를 분석하고, 특히 **지난주 분석 내용과 비교하여** 정밀 진단 리포트를 작성하십시오.

**[중요] 오늘 날짜: ${currentDate}**
리포트 제목에는 반드시 위 날짜를 사용하십시오. 다른 날짜로 변경하지 마십시오.

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

**중요**: Part 3/4의 경우, 위 태그는 "대화 상황"을 나타냅니다 (예: "A1. 회의 / 일정 조정").
학생이 특정 상황의 대화를 듣는 데 어려움을 겪고 있다는 의미입니다.
INFERENCE나 GRAPHIC 같은 특수 문제 유형은 예외적으로 문제 유형으로 표시됩니다.

[요청 사항]
리포트는 반드시 다음 제목으로 시작하십시오 (날짜 변경 금지):

# 토익 정밀진단 리포트 (${currentDate})

이후 다음 구조에 따라 답변하십시오:

1. 🎯 목표 달성 현황 진단:
   - 지난주와 비교하여 예측 점수가 얼마나 변했는지, 학습 페이스가 개선되었는지 분석하세요.
   - 학생의 이름을 부드러게 언급하며 대화를 시작하세요.

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
- **제목의 날짜는 절대 변경 금지: ${currentDate}만 사용하십시오.**
- **막연한 격려보다는 데이터에 기반한 수치적 가이드라인**을 우선시하십시오.
- 말투는 '하십시오체'를 사용하며, 신뢰감 있고 권위 있는 전문가의 어조를 유지하세요.
- 불필요한 서론은 생략하고 마크다운(Markdown) 형식을 사용하여 가독성을 높이십시오.
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
                        await new Promise(resolve => setTimeout(resolve, backoff));
                        backoff *= 2; // Exponential backoff
                        continue;
                    }

                    if (data.error) throw new Error(data.error.message);
                    return data;
                } catch (err: any) {
                    if (i === retries - 1) throw err;
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

        let aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "데이터 분석 중 오류가 발생했습니다.";

        // --- Assignment Logic ---
        if (userId) {
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
                        solved: s.solved,
                        current: s.correct || 0,
                        target: (body.targetStats && body.targetStats[part]) ? body.targetStats[part].target : 0
                    }))
                    .filter(p => p.solved > 0)
                    .filter(p => p.current < p.target)  // ✅ 목표 미달 파트만
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
                        count: t.incorrectCount || t.incorrect || 0,
                        part: t.part
                    })),
                    weakestParts: finalWeakParts
                });

                const batch = db.batch();
                curriculum.forEach(assignment => {
                    const newDocRef = assignmentsRef.doc();
                    batch.set(newDocRef, assignment);
                });

                await batch.commit();

                // Append assignment list to AI report for transparency
                const assignmentList = curriculum
                    .map(a => `- **Day ${a.dayOffset}**: ${a.title}`)
                    .join('\n');
                aiText += `\n\n---\n\n## 📋 이번 주 과제 목록\n\n${assignmentList}\n\n*위 과제는 AI 분석을 바탕으로 자동 생성되었습니다.*`;

            } catch (asmError) {
                console.error("[AI Weekly Report] Assignment Assembly Failed:", asmError);
            }

            // --- Persistence Logic (Save after assignment list is added) ---
            const userRef = db.collection('Winter_Users').doc(userId);
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

            // ✅ Update last report date in schedule
            try {
                const { updateLastReportDate } = await import('@/services/configService');
                await updateLastReportDate();
            } catch (scheduleError) {
                console.error("[AI Weekly Report] Failed to update schedule:", scheduleError);
            }
        }

        return NextResponse.json({ text: aiText });

    } catch (error: any) {
        console.error("Weekly Analysis API Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
