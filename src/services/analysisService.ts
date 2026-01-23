import { collection, query, where, orderBy, limit, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { getClassificationLabel } from '@/data/toeic/reading/part5/classification';
import { isActualTest, mapToPartKey } from '@/lib/filters/actualTestFilter';

export interface AnalysisResult {
    topWeakness: {
        label: string;
        code: string;
        count: number;
        percentage: number;
        message: string;
        status?: 'ACHIEVED' | 'WEAKNESS';
    } | null;
    lcHabit: {
        status: 'Excellent' | 'Good' | 'Fair' | 'Needs Improvement';
        message: string;
        count: number;
    };
    vocaStatus: {
        count: number;
        target: number;
        message: string;
    };
}

export const getWeaknessAnalysis = async (userId: string): Promise<AnalysisResult> => {
    try {
        // 1. Fetch User Profile for targets
        const userRef = doc(db, 'Winter_Users', userId);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.exists() ? userSnap.data() : {};

        // Use part1_test style or p5 style targets
        const targetP5 = userData.partTargets?.p5 || userData.partTargets?.part5_test || 24;

        // 2. Fetch Recent Results (for LC habit and Latest P5 score)
        const qRecent = query(
            collection(db, "Manager_Results"),
            where("studentId", "==", userId),
            orderBy("timestamp", "desc"),
            limit(30)
        );
        const snapshotRecent = await getDocs(qRecent);
        const recentResults = snapshotRecent.docs.map(d => ({ id: d.id, ...d.data() }));

        // 3. Evaluate Part 5 Achievement (Latest Actual Test)
        const p5Actuals = recentResults.filter(r => isActualTest(r) && mapToPartKey(r) === 'part5_test');
        const latestP5 = p5Actuals.length > 0 ? p5Actuals[0] : null;

        // Score calculation unified with dashboard logic
        const latestP5Score = latestP5 ? (latestP5.score <= (latestP5.total || 30) ? latestP5.score : Math.round((latestP5.score / 100) * (latestP5.total || 30))) : 0;

        let topWeakness = null;

        if (latestP5Score >= targetP5 && latestP5Score > 0) {
            // CASE A: Goal Achieved
            topWeakness = {
                label: "목표 달성",
                code: "GOAL_REACHED",
                count: 0,
                percentage: 100,
                status: 'ACHIEVED',
                message: `현재 P5 점수 ${latestP5Score}점으로 목표(${targetP5}개)를 달성하였습니다! 현재 목표 범위 내에서는 약점이 없습니다.`
            };
        } else {
            // CASE B: Below Target - Analyze ENTIRE history for real weakness
            const qAllP5 = query(
                collection(db, "Manager_Results"),
                where("studentId", "==", userId)
                // orderBy filtered client-side or assume many items are okay
            );
            const snapAll = await getDocs(qAllP5);

            const tagCounts: Record<string, number> = {};
            let totalWrong = 0;

            snapAll.docs.forEach(docSnap => {
                const r = docSnap.data();
                if (!isActualTest(r) || mapToPartKey(r) !== 'part5_test') return;

                if (r.incorrectQuestions && Array.isArray(r.incorrectQuestions)) {
                    r.incorrectQuestions.forEach((q: { classification: string }) => {
                        const code = q.classification || 'Unknown';
                        if (code !== 'Unknown') {
                            tagCounts[code] = (tagCounts[code] || 0) + 1;
                            totalWrong++;
                        }
                    });
                }
            });

            if (totalWrong > 0) {
                const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);
                const [topCode, topCount] = sortedTags[0];
                const label = getClassificationLabel(topCode) || topCode;
                const percentage = Math.round((topCount / totalWrong) * 100);

                let advice = `P5 ${label.replace('문법: ', '').replace('어휘: ', '')} 유형이 누적 오답 1위입니다.`;
                if (latestP5Score > 0) advice = `현재 P5 ${latestP5Score}개로 목표(${targetP5}개) 재탈환을 위해 ${advice}`;

                if (topCode.includes('POS')) advice += " 품사 자리 공식을 재점검하세요.";
                else if (topCode.includes('VERB')) advice += " 수/태/시제를 다시 확인하세요.";
                else if (topCode.includes('VOCAB')) advice += " 어휘 선택 연습량을 늘리세요.";

                topWeakness = {
                    label: label.replace('문법: ', '').replace('어휘: ', ''),
                    code: topCode,
                    count: topCount,
                    percentage,
                    status: 'WEAKNESS',
                    message: advice
                };
            } else {
                topWeakness = {
                    label: "데이터 분석 중",
                    code: "NONE",
                    count: 0,
                    percentage: 0,
                    message: latestP5Score === 0 ? "Part 5 실전 테스트 결과가 쌓이면 정밀 약점을 분석합니다." : "현재 분석할 오답 데이터가 없습니다."
                };
            }
        }

        // 4. LC Habit (From recent 30 items)
        const lcTests = recentResults.filter(r => isActualTest(r) && ['part1_test', 'part2_test', 'part3_test', 'part4_test'].includes(mapToPartKey(r)));
        const lcCount = lcTests.length;

        let lcStatus: 'Excellent' | 'Good' | 'Fair' | 'Needs Improvement' = 'Fair';
        let lcMessage = "LC 학습 빈도가 낮습니다. 매일 1회 실전 풀기를 권장합니다.";

        if (lcCount >= 5) {
            lcStatus = 'Excellent';
            lcMessage = "꾸준한 LC 학습 습관이 확인되었습니다! 쉐도잉을 통해 실전 감각을 유지하세요.";
        } else if (lcCount >= 3) {
            lcStatus = 'Good';
            lcMessage = "좋은 흐름입니다. Part 2/3 위주로 집중력을 더 높여보세요.";
        } else if (lcCount >= 1) {
            lcStatus = 'Fair';
            lcMessage = "안정적인 습관을 위해 주당 3회 이상의 실전 풀기가 필요합니다.";
        }

        // 5. Voca Status (From profile and results)
        // Here we can use profile data if available
        const vocaPassed = userData.passedVocaDays?.length || 0;

        return {
            topWeakness,
            lcHabit: {
                status: lcStatus,
                message: lcMessage,
                count: lcCount
            },
            vocaStatus: {
                count: vocaPassed,
                target: 30,
                message: `${vocaPassed}일차 공부 중입니다.`
            }
        };

    } catch (error) {
        console.error("Analysis Failed:", error);
        return {
            topWeakness: null,
            lcHabit: { status: 'Fair', message: "분석 중 오류가 발생했습니다.", count: 0 },
            vocaStatus: { count: 0, target: 30, message: "" }
        };
    }
};
