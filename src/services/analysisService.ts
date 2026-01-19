import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { getClassificationLabel } from '@/data/toeic/reading/part5/classification';

export interface AnalysisResult {
    topWeakness: {
        label: string;
        code: string;
        count: number;
        percentage: number;
        message: string;
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
        // 1. Fetch recent results (Last 30 items)
        const q = query(
            collection(db, "Manager_Results"),
            where("studentId", "==", userId),
            orderBy("timestamp", "desc"),
            limit(30)
        );
        const snapshot = await getDocs(q);
        const results = snapshot.docs.map(d => d.data());

        // 2. Part 5 Weakness Analysis
        const tagCounts: Record<string, number> = {};
        let totalWrong = 0;

        results.filter(r => r.type === 'part5_test' || r.unit?.includes('Part5')).forEach(r => {
            if (r.incorrectQuestions && Array.isArray(r.incorrectQuestions)) {
                r.incorrectQuestions.forEach((q: { classification: string }) => {
                    const code = q.classification || 'Unknown';
                    // Ignore 'Unknown' for authoritative analysis if possible, or count it.
                    if (code !== 'Unknown') {
                        tagCounts[code] = (tagCounts[code] || 0) + 1;
                        totalWrong++;
                    }
                });
            }
        });

        // Find top weakness
        let topWeakness = null;
        if (totalWrong > 0) {
            const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);
            const [topCode, topCount] = sortedTags[0];
            const label = getClassificationLabel(topCode);
            const percentage = Math.round((topCount / totalWrong) * 100);

            let advice = `${label} 유형에서 오답률이 가장 높습니다.`;
            if (topCode.includes('POS')) advice += " 품사 자리 찾기 공식을 다시 점검하세요.";
            else if (topCode.includes('VERB')) advice += " 동사의 수/태/시제를 꼼꼼히 확인하세요.";
            else if (topCode.includes('VOCAB')) advice += " 문맥에 맞는 어휘 선택 연습이 필요합니다.";
            else advice += " 해당 유형의 집중 공략이 필요합니다.";

            topWeakness = {
                label: label.replace('문법: ', '').replace('어휘: ', ''), // Simplify label
                code: topCode,
                count: topCount,
                percentage,
                message: advice
            };
        } else {
            // No wrong counting data found yet
            topWeakness = {
                label: "데이터 부족",
                code: "NONE",
                count: 0,
                percentage: 0,
                message: "아직 충분한 오답 데이터가 모이지 않았습니다."
            };
        }

        // 3. LC Learning Habit (Frequency)
        // Count unique days or attempts in last 10 items
        const lcTests = results.filter(r => r.type === 'part2_test' || r.type === 'part3_test' || r.type === 'part4_test' || (r.unit && r.unit.includes('LC')));
        const lcCount = lcTests.length;

        let lcStatus: 'Excellent' | 'Good' | 'Fair' | 'Needs Improvement' = 'Fair';
        let lcMessage = "LC 학습을 더 꾸준히 진행해보세요.";

        if (lcCount >= 5) {
            lcStatus = 'Excellent';
            lcMessage = "매우 훌륭한 청취 학습 습관을 가지고 계십니다! 쉐도잉을 병행하여 청취력을 극대화하세요.";
        } else if (lcCount >= 3) {
            lcStatus = 'Good';
            lcMessage = "안정적인 학습 흐름입니다. Part 3/4 비중을 조금 더 늘려보세요.";
        } else if (lcCount >= 1) {
            lcStatus = 'Fair';
            lcMessage = "LC 학습 빈도가 다소 낮습니다. 하루 1세트 풀기를 목표로 하세요.";
        } else {
            lcStatus = 'Needs Improvement';
            lcMessage = "최근 LC 학습 기록이 없습니다. 오늘 Part 2부터 시작해보는 건 어떨까요?";
        }

        // 4. Voca Status (Mock logic or real if stats provided, here defaulting to counting)
        const vocaCount = results.filter(r => r.type === 'voca').length; // This is strictly from logs, usually we prefer profile data.
        // We will assume the caller might pass profile stats, but here we return what we found in logs.

        return {
            topWeakness,
            lcHabit: {
                status: lcStatus,
                message: lcMessage,
                count: lcCount
            },
            vocaStatus: {
                count: vocaCount,
                target: 15,
                message: ""
            }
        };

    } catch (error) {
        console.error("Analysis Failed:", error);
        return {
            topWeakness: null,
            lcHabit: { status: 'Fair', message: "분석 중 오류가 발생했습니다.", count: 0 },
            vocaStatus: { count: 0, target: 15, message: "" }
        };
    }
};
