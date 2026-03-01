import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { HalfTestAnalysis, TimeLog } from './halfTestService';

// 실전 모의고사 (Full Test) 표준 풀이 시간 기준 (단위: 초) - 기준은 HalfTestService와 동일하게 유지
const TARGET_TIMES = {
    p5: 540,   // 9분
    p6: 420,   // 7분
    p7s: 1620, // 27분
    p7m: 1680  // 28분
};

export const UniversalTestService = {
    async analyzeAttempt(attemptId: string): Promise<HalfTestAnalysis | null> {
        const docRef = doc(db, 'MockTestAttempts', attemptId);
        const snapshot = await getDoc(docRef);
        if (!snapshot.exists()) return null;

        const data = snapshot.data();
        const logs = (data.timeLogs || { p5: 0, p6: 0, p7s: 0, p7m: 0 }) as TimeLog;
        const targetGoal = data.targetScore || 800; // 사용자 목표점수가 없으면 800점 기본값

        // 동적 채점 엔진이 담아준 실시간 파트별 점수
        // { p1: { correct: 2, total: 6 }, p2: ... }
        const partScores = data.partScores || {};

        // **[USER GOAL INTEGRATION]**
        let userPartTargets: any = null;
        if (data.userId) {
            try {
                const userSnap = await getDoc(doc(db, 'Winter_Users', data.userId));
                if (userSnap.exists()) {
                    userPartTargets = userSnap.data().partTargets;
                }
            } catch (e) {
                console.error("Failed to fetch user goals in Universal Service", e);
            }
        }

        let partGoals: Record<string, number>;
        if (userPartTargets) {
            partGoals = {
                p1: Math.round(userPartTargets.p1_goal || userPartTargets.p1 || 0),
                p2: Math.round(userPartTargets.p2_goal || userPartTargets.p2 || 0),
                p3: Math.round(userPartTargets.p3_goal || userPartTargets.p3 || 0),
                p4: Math.round(userPartTargets.p4_goal || userPartTargets.p4 || 0),
                p5: Math.round(userPartTargets.p5_goal || userPartTargets.p5 || 0),
                p6: Math.round(userPartTargets.p6_goal || userPartTargets.p6 || 0),
                p7s: Math.round(userPartTargets.p7s_goal || userPartTargets.p7s || 0),
                p7m: Math.round(userPartTargets.p7d_goal || userPartTargets.p7d || 0),
            };
        } else {
            partGoals = targetGoal >= 900 ?
                { p1: 6, p2: 26, p3: 34, p4: 28, p5: 24, p6: 14, p7s: 26, p7m: 28 } :
                { p1: 4, p2: 22, p3: 28, p4: 24, p5: 20, p6: 12, p7s: 22, p7m: 22 };
        }

        const partStats: Record<string, any> = {
            p1: { name: "Part 1", correct: 0, total: 6, target: partGoals.p1, wrongTags: [], wrongPassages: [], wrongQuestionNumbers: [], customCoaching: "분석 중", solution: "분석 중" },
            p2: { name: "Part 2", correct: 0, total: 25, target: partGoals.p2, wrongTags: [], wrongPassages: [], wrongQuestionNumbers: [], customCoaching: "분석 중", solution: "분석 중" },
            p3: { name: "Part 3", correct: 0, total: 39, target: partGoals.p3, wrongTags: [], wrongPassages: [], wrongQuestionNumbers: [], customCoaching: "분석 중", solution: "분석 중" },
            p4: { name: "Part 4", correct: 0, total: 30, target: partGoals.p4, wrongTags: [], wrongPassages: [], wrongQuestionNumbers: [], customCoaching: "분석 중", solution: "분석 중" },
            p5: { name: "Part 5", correct: 0, total: 30, target: partGoals.p5, wrongTags: [], wrongPassages: [], wrongQuestionNumbers: [], customCoaching: "분석 중", solution: "분석 중" },
            p6: { name: "Part 6", correct: 0, total: 16, target: partGoals.p6, wrongTags: [], wrongPassages: [], wrongQuestionNumbers: [], customCoaching: "분석 중", solution: "분석 중" },
            p7s: { name: "Part 7 (S)", correct: 0, total: 29, target: partGoals.p7s, wrongTags: [], wrongPassages: [], wrongQuestionNumbers: [], customCoaching: "분석 중", solution: "분석 중" },
            p7m: { name: "Part 7 (M)", correct: 0, total: 25, target: partGoals.p7m, wrongTags: [], wrongPassages: [], wrongQuestionNumbers: [], customCoaching: "분석 중", solution: "분석 중" },
        };

        let lcTotal = 0;
        let rcTotal = 0;

        // DB에 저장된 동적 partScores 객체를 순회하여 정답수를 복원합니다.
        Object.keys(partStats).forEach(partKey => {
            const pData = partScores[partKey];
            if (pData) {
                partStats[partKey].correct = pData.correct || 0;
                partStats[partKey].total = pData.total || partStats[partKey].total; // 커스텀 모의고사 문항수 반영

                // LC/RC 합산 (p7 합산방지는 여기서 필요없음. partScores에 분리되어 있음)
                if (['p1', 'p2', 'p3', 'p4'].includes(partKey)) {
                    lcTotal += pData.correct || 0;
                } else {
                    rcTotal += pData.correct || 0;
                }
            }
        });

        // 범용(Universal) 코칭 메시지 할당
        Object.keys(partStats).forEach(key => {
            const stat = partStats[key];
            const isAchieved = stat.correct >= stat.target;
            const gap = stat.target > stat.correct ? stat.target - stat.correct : 0;
            const correctRatio = stat.total > 0 ? (stat.correct / stat.total) : 0;

            if (isAchieved) {
                stat.customCoaching = `축하합니다! 원장님이 부여하신 ${stat.name} 목표를 완벽히 달성했습니다.`;
                stat.solution = "이 파트의 감각이 절정에 올랐습니다. 현재 페이스를 실전에서도 똑같이 유지하십시오.";
                return;
            }

            // 고정 데이터 태그가 없으므로 정답률(Gap) 기준으로 범용 AI 처방전 생성
            switch (key) {
                case 'p1':
                    stat.customCoaching = `Part 1 목표까지 ${gap}문젠가 부족합니다. 집중력을 100% 발휘하지 못했습니다.`;
                    stat.solution = "소거법은 필수입니다. 주어/동사/목적어 중 하나라도 틀리면 과감히 X 치는 손가락 반사신경을 기르세요.";
                    break;
                case 'p2':
                    stat.customCoaching = `의외의 복병 Part 2에서 ${gap}개를 잃었습니다. (정답률: ${Math.round(correctRatio * 100)}%)`;
                    stat.solution = "의문사(Where, When 등)는 무조건 맞히고, 우회적 답변이나 평서문에서 당황하지 않고 소거법으로 버텨야 합니다.";
                    break;
                case 'p3': case 'p4':
                    stat.customCoaching = `긴 체력이 요구되는 ${stat.name}에서 목표치 대비 ${gap}문제를 더 틀렸습니다.`;
                    stat.solution = "음원이 나오기 전에 3문제를 미리 스키밍(Skimming)하여 '무엇을 들을지' 머릿속에 타겟을 정조준해 둬야 놓치지 않습니다.";
                    break;
                case 'p5':
                    stat.customCoaching = `Part 5는 시간단축의 핵심입니다! 아직 목표 대비 ${gap}문제가 모자랍니다.`;
                    stat.solution = "어휘 문제인지 문법 문제인지 1초 만에 파악하세요. 해석이 필요 없는 문법 문제에서 낭비되는 시간을 없애야 합니다.";
                    break;
                case 'p6':
                    stat.customCoaching = `맥락파악의 중심 Part 6에서 ${gap}문제의 실점이 발생했습니다.`;
                    stat.solution = "주제 문장은 무조건 첫 단락에 있습니다. 문장 삽입 유형은 앞 문장의 시제와 지시어(This, It)를 물고 늘어지세요.";
                    break;
                case 'p7s': case 'p7m':
                    stat.customCoaching = `가장 배점이 높은 Part 7에서 전체 흐름을 놓쳤습니다. (부족: ${gap}개)`;
                    stat.solution = "지문을 처음부터 끝까지 읽는 것은 아마추어입니다. 문제의 키워드를 먼저 눈에 바르고, 그 키워드를 본문에서 숨은그림찾기 하듯 찾아가십시오.";
                    break;
            }
        });

        const rcParts = ['p5', 'p6', 'p7s', 'p7m'];
        const rcTimeAnalysis = rcParts.map(key => {
            const actual = logs[key as keyof TimeLog] || 0;
            const standardFull = (TARGET_TIMES as any)[key]; // 커스텀 풀 테스트 기준

            const reductionNeeded = Math.max(0, actual - standardFull);

            let level: 'RED' | 'YELLOW' | 'GREEN' = 'GREEN';
            let coaching = "";

            const ratio = actual / standardFull;

            if (ratio <= 1.0) {
                level = 'GREEN';
                coaching = "완벽한 모범적인 시간 안배입니다. 풀이 속도가 강쌤의 요구치에 정확히 부합합니다.";
            } else if (ratio <= 1.1) {
                level = 'GREEN';
                coaching = "무난한 속도이나, 실전 돌발 상황을 대비해 1~2분 정도 단축 연습을 권장합니다.";
            } else if (ratio <= 1.25) {
                level = 'YELLOW';
                coaching = "시간 안배에 경고등이 켜졌습니다. 모든 문장을 해석하려 하지 말고 핵심 키워드 중심의 스캐닝 연습이 필요합니다.";
            } else {
                level = 'RED';
                coaching = "시간 관리가 심각하게 무너졌습니다! 이 페이스라면 뒤쪽 지문을 다 찍게 됩니다. 정답 근거 찾기 훈련을 최우선으로 하세요.";
            }

            return {
                part: partStats[key].name,
                actualHalf: actual,
                estimateFull: actual, // 커스텀 풀 테스트 전용
                targetFull: standardFull,
                reductionNeeded,
                level,
                coachingText: coaching
            };
        });

        const lcTarget = (partGoals.p1 + partGoals.p2 + partGoals.p3 + partGoals.p4);
        const rcTarget = (partGoals.p5 + partGoals.p6 + partGoals.p7s + partGoals.p7m);

        // REALISTIC SCORE CALCULATION
        const calculateRealisticScore = (count: number, isLC: boolean) => {
            if (count === 0) return 5;
            let score;
            if (isLC) {
                score = Math.round(((count - 9) / 0.18) / 5) * 5;
            } else {
                score = Math.round(((count - 21) / 0.16) / 5) * 5;
            }
            return Math.max(5, Math.min(495, score));
        };

        // Custom/Universal Score is usually stored in DB already, but we recalculate for display
        const finalLcScore = calculateRealisticScore(lcTotal, true);
        const finalRcScore = calculateRealisticScore(rcTotal, false);

        return {
            overallScore: finalLcScore + finalRcScore,
            lcScore: finalLcScore,
            rcScore: finalRcScore,
            lcTarget: lcTarget,
            rcTarget: rcTarget,
            partStats,
            rcTimeAnalysis,
            targetGoal
        };
    }
};
