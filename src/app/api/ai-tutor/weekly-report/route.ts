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

        // --- Step 1: Context Memory - Enriched Statistical Comparison ---
        let previousContext = "기존 분석 이력이 없습니다. 이번이 첫 번째 주간 리포트입니다.";
        let pastStats = null;

        if (userId) {
            const userDoc = await db.collection('Winter_Users').doc(userId).get();
            const userData = userDoc.data();
            if (userData?.latestWeeklyReport) {
                const prev = userData.latestWeeklyReport;
                pastStats = prev.statsSummarized || null;
                previousContext = `
[지난주 학습 데이터 및 AI 진단 이력]
- 작성일: ${prev.createdAt}
- 지난주 AI 예측 점수: ${pastStats?.prediction || 'N/A'}점
- 지난주 총 풀이 문항: ${pastStats?.totalSolved || 0}문항
- 지난주 파트별 정답률 정보: ${JSON.stringify(pastStats?.partAccuracies || {}, null, 2)}
- 지난주 리포트 본문 핵심 요약: "${prev.content.substring(0, 500).replace(/\n/g, ' ')}"
(주의: 위 요약에 언급되지 않은 내용은 지난주에 언급되지 않은 것입니다. 가상의 과거를 지어내지 마십시오.)
                `;
            }
        }

        const currentDate = new Date().toISOString().split('T')[0];

        // Prepare current Part Accuracies for comparison and future saving
        const currentPartAccuracies: Record<string, number> = {};
        Object.entries(stats.parts).forEach(([part, s]: [string, any]) => {
            currentPartAccuracies[part] = s.solved > 0 ? Math.round((s.correct / s.solved) * 100) : 0;
        });

        // --- Tag Mapping Logic (INTERNAL CODES -> KOREAN LABELS) ---
        const { TOEIC_TAG_REGISTRY } = await import('@/types/toeic-standards');

        const mappedWeakestTags = (weakestTags || []).map((t: any) => {
            // Find standard registry entry
            const baseTag = (t.tag || '').split(' ')[0].split('(')[0].trim();
            const registryEntry = TOEIC_TAG_REGISTRY[baseTag as any] || TOEIC_TAG_REGISTRY[t.tag as any];

            // PRIORITY: Use the registry's clean Korean label if it exists
            const rawLabel = registryEntry ? registryEntry.label : t.label;

            // Aggressive cleaner for the UI/Report
            const cleaned = (rawLabel || '')
                .replace(/^[A-Z]\d[\d\w]*[\.\s\-:]+/i, '') // Remove A1. A1-
                .replace(/\(.*?\)/g, '')                   // Remove (voice_message)
                .replace(/\[.*?\]/g, '')                   // Remove [Day 1]
                .replace(/[a-z0-0]{2,}_[a-z0-0]{2,}/gi, '') // Remove snake_case_codes
                .replace(/\s+/g, ' ')
                .trim();

            const finalLabel = cleaned || rawLabel || t.tag;

            // Critical: Ensure Part 2 tags (Who, When...) are correctly mapped to 'p2'
            let part = t.part;
            if (!part) {
                const p2Tags = ['Who', 'When', 'Where', 'Why', 'How', 'What', 'YesNo', 'Choice', 'Statement', 'Tag', 'Negative', 'Indirect'];
                if (p2Tags.includes(baseTag)) part = 'p2';
            }

            return {
                tag: t.tag,
                label: finalLabel,
                description: registryEntry ? registryEntry.description : '',
                incorrectCount: t.incorrectCount || t.incorrect || 0,
                part: part
            };
        });

        // AI Prompt Data: Group by Part so the AI doesn't mix them up
        const tagsByPart: Record<string, any[]> = {};
        mappedWeakestTags.forEach(t => {
            const p = t.part || '기타';
            if (!tagsByPart[p]) tagsByPart[p] = [];
            tagsByPart[p].push({
                유형명: t.label,
                설명: t.description,
                오답수: t.incorrectCount
            });
        });

        const prompt = `
당신은 20년 경력의 베테랑 토익 전문가 '강쌤'입니다. 
학생의 1주일간 학습 데이터와 **지난주 데이터와의 수치적 비교**를 통해 [0-1-2 전략] 기반의 정밀 진단 리포트를 작성하십시오.

**[절대 원칙]**
1. **토익 만점은 990점입니다.** 어떤 경우에도 예측 점수나 지난주 점수가 990점을 넘는다고 말하지 마십시오. (1000점 등은 불가능함)
2. **과거 조작 금지**: 제공된 [지난주 학습 데이터 및 AI 진단 이력]에 명시된 사실만 언급하십시오. 지난주에 한 적 없는 조언을 마치 했던 것처럼 말하지 마십시오.
3. **코드 노출 금지**: 리포트 본문에서 "B3", "D2_ads", "voice_message" 같은 내부 코드를 절대 노출하지 마십시오. 반드시 함께 제공되는 'label' 명칭(예: "사내방송", "음성메시지 광고" 등)으로만 지칭하십시오.
4. **이상 데이터 대응**: 만약 이번 주 성적이 비정상적으로 급락(예: 990 -> 200)했다면, 이를 단순 실력 하락으로 치부하기보다 "테스트용 무성의 풀이" 또는 "번아웃/심각한 컨디션 난조"로 가정하고 격려와 페이스 회복을 권고하십시오.

**[오늘 날짜: ${currentDate}]**

${previousContext}

[학생 정보]
- 성함: ${studentName || "학생"}님
- 현재 목표 점수: ${goals.targetScore}점 (LC: ${goals.targetLC}, RC: ${goals.targetRC})
- 현재 AI 예측 점수: ${Math.min(990, goals.currentEst)}점

[금주 학습 데이터 통계 (Current)]
- 총 풀이 문항 수: ${stats.totalSolved}문항
- 파트별 상세 (최근 1주일):
${JSON.stringify(stats.parts, null, 2)}

[취약 파트별 오답 유형 (이 유형명으로만 분석하십시오)]
${JSON.stringify(tagsByPart, null, 2)}
(주의: 각 파트를 분석할 때 반드시 해당 파트에 속한 '유형명'만 언급하십시오. "A2", "D2", "voice_message" 같은 코드를 적는 것은 엄격히 금지됩니다.)

**[리포트 작성 지침 - 0-1-2 전략]**

# 토익 정밀진단 리포트 (${currentDate})

**Step 0. 주간 성취도 종합 평가 (Performance Audit)**
- 지난주와 이번 주의 **예측 점수(Max 990), 정답률, 문항 수**를 대조하여 학습 결과를 [상승 / 정체 / 하락] 중 하나로 판정하십시오.
- 데이터와 모순되는 비판은 금지합니다. 하락폭이 너무 크다면 데이터의 특수성을 언급하십시오.

**Step 1. 심층 원인 분석 및 중점 파트 선정 (Strategic Diagnosis)**
- 데이터 추이를 분석하여 다음 1주일간 개선이 시급한 **'딱 하나의 급소 파트'**를 선정하십시오.
- "B3", "D2" 등의 코드 대신 한글 레이블을 사용하여 원인을 분석하십시오.
- **현실적인 차주 목표**: 다음 주까지 달성해야 할 구체적 수치 목표를 제시하십시오.

**Step 2. 맞춤형 집중 처방 (Action Plan)**
- 우리 사이트 내 기능([AI 오답 드릴], [파트별 실전 연습], [쉐도잉 훈련]) 위주로 처방하십시오.

**강쌤의 한마디** (말투: 하십시오체)
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

        // --- Step 3: Analysis of AI Response and Curriculum Assembly ---
        if (userId) {
            const assignmentsRef = db.collection('Assignments');

            // Cleanup: Delete OLD AI assignments
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

            try {
                // AI의 답변에서 "중점 파트"를 추출하여 과제 생성에 반영 (예: "Part 5", "p5")
                const focusMatch = aiText.match(/Step 1\. .*?(Part|p)\s*([1-7])/i);
                let aiFocusPart = '';
                if (focusMatch) {
                    const pNum = focusMatch[2];
                    aiFocusPart = `p${pNum}`;
                    // Handle special cases for p7
                    if (aiFocusPart === 'p7') aiFocusPart = 'p7s';
                }

                // Find top weak parts for the curriculum (AI's choice first)
                let weakParts = Object.entries(stats.parts)
                    .map(([part, s]: [string, any]) => ({
                        part,
                        accuracy: s.solved > 0 ? (s.correct / s.solved) * 100 : 100,
                        current: s.correct || 0,
                        target: (body.targetStats && body.targetStats[part]) ? body.targetStats[part].target : 0
                    }))
                    .filter(p => p.part === aiFocusPart || (p.current < p.target))
                    .sort((a, b) => {
                        if (a.part === aiFocusPart) return -1;
                        if (b.part === aiFocusPart) return 1;
                        return a.accuracy - b.accuracy;
                    })
                    .map(p => p.part)
                    .slice(0, 3);

                const finalWeakParts = weakParts.length > 0 ? weakParts : ['p2', 'p5', 'p7s'];

                const curriculum = await QuestionAssembler.assembleWeeklyCurriculum({
                    userId,
                    studentName: studentName || '학생',
                    courseType: '8week',
                    weakestTags: mappedWeakestTags.slice(0, 4),
                    weakestParts: finalWeakParts
                });

                const batch = db.batch();
                curriculum.forEach(assignment => {
                    const newDocRef = assignmentsRef.doc();
                    batch.set(newDocRef, assignment);
                });

                await batch.commit();

                const assignmentList = curriculum
                    .map(a => `- **Day ${a.dayOffset}**: ${a.title}`)
                    .join('\n');
                aiText += `\n\n---\n\n## 📋 이번 주 과제 목록\n\n${assignmentList}\n\n*위 과제는 AI 분석(Step 1)을 바탕으로 자동 생성되었습니다.*`;

            } catch (asmError) {
                console.error("[AI Weekly Report] Assignment Assembly Failed:", asmError);
            }

            // --- Persistence Logic: Save with ENRICHED stats ---
            const userRef = db.collection('Winter_Users').doc(userId);
            await userRef.set({
                latestWeeklyReport: {
                    content: aiText,
                    createdAt: new Date().toISOString(),
                    statsSummarized: {
                        totalSolved: stats.totalSolved,
                        prediction: goals.currentEst,
                        partAccuracies: currentPartAccuracies // NEW: Save for next week's comparison
                    }
                }
            }, { merge: true });

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
