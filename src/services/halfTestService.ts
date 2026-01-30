import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getCorrectAnswersForTest9, getCorrectAnswersForTest10, calculateScaledScore } from '@/lib/mock/scoring';
import { TOEIC_TAG_REGISTRY, ToeicTag } from '@/types/toeic-standards';
// 하드코딩된 임포트 제거 (분석 시점에 동적 로드)

export interface TimeLog {
    p5: number;
    p6: number;
    p7s: number;
    p7m: number;
}

export interface HalfTestAnalysis {
    overallScore: number;
    lcScore: number;
    rcScore: number;
    partStats: Record<string, {
        name: string;
        correct: number;
        total: number;
        target: number;
        wrongTags: string[];
        wrongPassages: string[];
        customCoaching: string;
        solution: string;
    }>;
    rcTimeAnalysis: {
        part: string;
        actualHalf: number;
        estimateFull: number;
        targetFull: number;
        reductionNeeded: number;
        level: 'RED' | 'YELLOW' | 'GREEN';
        coachingText: string;
    }[];
    targetGoal: number;
}

// 실전 모의고사 (Full Test) 표준 풀이 시간 기준 (단위: 초)
const TARGET_TIMES = {
    p5: 540,   // 9분
    p6: 420,   // 7분
    p7s: 1620, // 27분
    p7m: 1680  // 28분
};

/** 
 * 한국어 변환 헬퍼 함수
 * 원본 코드(G_POS, EMAIL 등)를 표준 라이브러리 기반 한국어로 변환
 */
const getLabel = (tag: string): string => {
    // 1. 표준 레지스트리 확인
    if ((TOEIC_TAG_REGISTRY as any)[tag]) {
        return (TOEIC_TAG_REGISTRY as any)[tag].label;
    }

    // 2. 파트 7 문서 유형 관용 변환 (EMAIL -> 서신/이메일)
    const DOC_MAP: Record<string, string> = {
        'EMAIL': '서신/이메일', 'ARTICLE': '기사/보고서', 'WEB_PAGE': '웹페이지',
        'ADVERTISEMENT': '홍보/광고', 'MEMO': '공지/메모', 'REVIEW': '사용 후기',
        'SCHEDULE': '일정표/스케줄', 'FORM': '서식/양식', 'POLICY': '규정/지침',
        'RESERVATION': '예약 확인서', 'LETTER': '편지/서신', 'DOUBLE': '연계 지문', 'TRIPLE': '다중 지문'
    };
    if (DOC_MAP[tag]) return DOC_MAP[tag];

    // 3. 레거시/비표준 태그 강제 매핑 (GIST, INFERENCE 등)
    const LEGACY_MAP: Record<string, string> = {
        'GIST': '주제 및 화자 추론',
        'INFERENCE': '화자/장소 추론', // 또는 '고난도 암시 내용 추론' (문맥에 따라 다름)
        'DETAIL': '구체 정보 검색',
        'WHO_LOC': '화자/장소 추론',
        'WHAT_WHICH': '주제/목적 파악',
        'WHEN_TIME': '시점/기간 인지',
        'WHY_REASON': '이유/근거 분석',
        'HOW_METHOD': '방법/수단 이해',
        'ACTION_NEXT': '향후 행동 예측',
        'IMPLY_MEANING': '발화자 의도 추론',
        'GRAPHIC': '시각 정보 매칭'
    };
    if (LEGACY_MAP[tag]) return LEGACY_MAP[tag];

    return tag; // 변환 실패 시 원본 코드 노출
};

export const HalfTestService = {
    async analyzeAttempt(attemptId: string): Promise<HalfTestAnalysis | null> {
        const docRef = doc(db, 'MockTestAttempts', attemptId);
        const snapshot = await getDoc(docRef);
        if (!snapshot.exists()) return null;

        const data = snapshot.data();
        const logs = (data.timeLogs || { p5: 0, p6: 0, p7s: 0, p7m: 0 }) as TimeLog;
        const userAnswers = (data.answers || {}) as Record<string, string>;
        const targetGoal = data.targetScore || 800;
        const fullTestId = data.testId;
        const isFullTest = (fullTestId === '9' || fullTestId === 9 || fullTestId === '10' || fullTestId === 10);
        const isA = !isFullTest && fullTestId.includes('a');
        const isTest9 = String(fullTestId).includes('9');

        let p1_source, p2_source, p3_source, p4_source, p5_source, p6_source, p7_source;

        if (isFullTest) {
            const fullData = isTest9 ? require('@/data/mock/set9_data') : require('@/data/mock/set10_data');
            const prefix = isTest9 ? 'test9' : 'test10';
            p1_source = fullData[`${prefix}Part1`];
            p2_source = fullData[`${prefix}Part2`];
            p3_source = fullData[`${prefix}Part3`];
            p4_source = fullData[`${prefix}Part4`];
            p5_source = fullData[`${prefix}Part5`];
            p6_source = fullData[`${prefix}Part6`];
            p7_source = isTest9 ? [...fullData.test9Part7Single, ...fullData.test9Part7Multi] : [...fullData.test10Part7Single, ...fullData.test10Part7Multi];
        } else {
            const testData = isA
                ? require('@/data/mock/half_set9_a')
                : require('@/data/mock/half_set9_b');
            p1_source = isA ? testData.half9aPart1 : testData.half9bPart1;
            p2_source = isA ? testData.half9aPart2 : testData.half9bPart2;
            p3_source = isA ? testData.half9aPart3 : testData.half9bPart3;
            p4_source = isA ? testData.half9aPart4 : testData.half9bPart4;
            p5_source = isA ? testData.half9aPart5 : testData.half9bPart5;
            p6_source = isA ? testData.half9aPart6 : testData.half9bPart6;
            p7_source = isA ? testData.half9aPart7 : testData.half9bPart7;
        }

        const correctAnswers = isTest9 ? getCorrectAnswersForTest9() : getCorrectAnswersForTest10();

        // **[USER GOAL INTEGRATION]**
        // Fetch real-time part targets set by the user in the Study Room
        let userPartTargets: any = null;
        if (data.userId) {
            try {
                const userSnap = await getDoc(doc(db, 'Winter_Users', data.userId));
                if (userSnap.exists()) {
                    userPartTargets = userSnap.data().partTargets;
                }
            } catch (e) {
                console.error("Failed to fetch user goals", e);
            }
        }

        // 200문항인 경우 목표치를 2배 근사치로 조정
        const scale = isFullTest ? 2 : 1;
        let partGoals: Record<string, number>;

        if (userPartTargets) {
            // Use user-defined goals (Assume targets are based on 200-question Full Mock)
            // If it's a half-test, we divide by 2 to align with available questions
            const s = isFullTest ? 1 : 0.5;
            partGoals = {
                p1: Math.round((userPartTargets.p1_goal || userPartTargets.p1 || 0) * s),
                p2: Math.round((userPartTargets.p2_goal || userPartTargets.p2 || 0) * s),
                p3: Math.round((userPartTargets.p3_goal || userPartTargets.p3 || 0) * s),
                p4: Math.round((userPartTargets.p4_goal || userPartTargets.p4 || 0) * s),
                p5: Math.round((userPartTargets.p5_goal || userPartTargets.p5 || 0) * s),
                p6: Math.round((userPartTargets.p6_goal || userPartTargets.p6 || 0) * s),
                p7s: Math.round((userPartTargets.p7s_goal || userPartTargets.p7s || 0) * s),
                p7m: Math.round((userPartTargets.p7d_goal || userPartTargets.p7d || 0) * s),
            };
        } else {
            // Fallback to generic goals based on total targetScore
            partGoals = targetGoal >= 900 ?
                { p1: 3 * scale, p2: 13 * scale, p3: 17 * scale, p4: 14 * scale, p5: 12 * scale, p6: 7 * scale, p7s: 13 * scale, p7m: 14 * scale } :
                { p1: 2 * scale, p2: 11 * scale, p3: 14 * scale, p4: 12 * scale, p5: 10 * scale, p6: 6 * scale, p7s: 11 * scale, p7m: 11 * scale };
        }

        const partStats: Record<string, any> = {
            p1: { name: "Part 1", correct: 0, total: 3 * scale, target: partGoals.p1, wrongTags: [], wrongPassages: [], customCoaching: "", solution: "" },
            p2: { name: "Part 2", correct: 0, total: 12 * scale, target: partGoals.p2, wrongTags: [], wrongPassages: [], customCoaching: "", solution: "" },
            p3: { name: "Part 3", correct: 0, total: 19 * scale, target: partGoals.p3, wrongTags: [], wrongPassages: [], customCoaching: "", solution: "" },
            p4: { name: "Part 4", correct: 0, total: 15 * scale, target: partGoals.p4, wrongTags: [], wrongPassages: [], customCoaching: "", solution: "" },
            p5: { name: "Part 5", correct: 0, total: 15 * scale, target: partGoals.p5, wrongTags: [], wrongPassages: [], customCoaching: "", solution: "" },
            p6: { name: "Part 6", correct: 0, total: 8 * scale, target: partGoals.p6, wrongTags: [], wrongPassages: [], customCoaching: "", solution: "" },
            p7s: { name: "Part 7 (S)", correct: 0, total: 14 * scale, target: partGoals.p7s, wrongTags: [], wrongPassages: [], customCoaching: "", solution: "" },
            p7m: { name: "Part 7 (M)", correct: 0, total: 13 * scale, target: partGoals.p7m, wrongTags: [], wrongPassages: [], customCoaching: "", solution: "" },
        };

        let lcTotal = 0;
        let rcTotal = 0;

        Object.entries(userAnswers).forEach(([qId, userAns]) => {
            let partKey = "";
            let qNum = 0;

            // 1. Extract qNum correctly (e.g. "p5-t10-q101" -> 101)
            const parts = qId.split('-q');
            qNum = parts.length > 1 ? parseInt(parts[parts.length - 1]) : parseInt(qId.replace(/[^0-9]/g, ''));

            // 2. Identify Part Key
            if (qId.startsWith('p1')) partKey = "p1";
            else if (qId.startsWith('p2')) partKey = "p2";
            else if (qId.startsWith('p3')) partKey = "p3";
            else if (qId.startsWith('p4')) partKey = "p4";
            else if (qId.startsWith('p5')) partKey = "p5";
            else if (qId.startsWith('p6')) partKey = "p6";
            else if (qId.startsWith('p7')) {
                partKey = qNum <= 175 ? "p7s" : "p7m";
            }
            else {
                // Legacy Numeric Format Fallback
                if (qNum <= 6) partKey = "p1";
                else if (qNum <= 31) partKey = "p2";
                else if (qNum <= 70) partKey = "p3";
                else if (qNum <= 100) partKey = "p4";
                else if (qNum <= 130) partKey = "p5";
                else if (qNum <= 146) partKey = "p6";
                else if (qNum <= 175) partKey = "p7s";
                else partKey = "p7m";
            }

            const isCorrect = userAns === correctAnswers[qId];
            if (!partKey) return; // Prevent errors for unknown IDs

            // RC/LC classification for total score
            const isLC = partKey.startsWith('p1') || partKey.startsWith('p2') || partKey.startsWith('p3') || partKey.startsWith('p4');

            if (isCorrect) {
                partStats[partKey].correct++;
                if (isLC) lcTotal++; else rcTotal++;
            } else {
                // Wrong answer analysis - requires finding question data in source
                if (partKey === 'p1') {
                    partStats.p1.wrongTags.push("생활영어 어휘");
                } else if (partKey === 'p2') {
                    const qData = p2_source.find((q: any) => q.id === qId || String(q.questionNo) === String(qNum));
                    if (qData?.classification || qData?.questionType) {
                        const tag = qData.classification || qData.questionType;
                        partStats.p2.wrongTags.push(getLabel(tag));
                    }
                } else if (partKey === 'p3' || partKey === 'p4') {
                    const source = partKey === 'p3' ? p3_source : p4_source;
                    const set = source.find((s: any) => s.questions.some((q: any) => q.id === qId || parseInt(q.id.replace(/[^\d]/g, '')) === qNum));
                    if (set) {
                        if (set.contextType) partStats[partKey].wrongPassages.push(getLabel(set.contextType));
                        const q = set.questions.find((q: any) => q.id === qId || parseInt(q.id.replace(/[^\d]/g, '')) === qNum);
                        const cls = q?.classification || q?.questionType;
                        if (cls) partStats[partKey].wrongTags.push(getLabel(cls));
                    }
                } else if (partKey === 'p5') {
                    const qData = p5_source.find((q: any) => q.id === qId || parseInt(q.id.replace(/[^\d]/g, '')) === qNum);
                    if (qData?.classification) partStats.p5.wrongTags.push(getLabel(qData.classification));
                } else if (partKey === 'p6' || partKey.startsWith('p7')) {
                    const source = partKey === 'p6' ? p6_source : p7_source;
                    const cleanQid = qId.includes('-q') ? qId.split('-q')[1] : qId.replace(/[^\d]/g, '');
                    const set = source.find((s: any) => {
                        if (s.questions) return s.questions.some((q: any) => q.id === qId || q.id === cleanQid || String(q.id) === String(qNum));
                        return false;
                    });
                    if (set) {
                        // 표준화 데이터 우선 참조: docType 또는 passages[0].docType
                        const docT = set.docType || (set.passages?.[0]?.docType) || set.type;
                        if (docT) partStats[partKey].wrongPassages.push(getLabel(docT));
                        const q = set.questions?.find((q: any) => q.id === qId || q.id === cleanQid || String(q.id) === String(qNum));
                        const cls = q?.classification || q?.questionType;
                        if (cls) partStats[partKey].wrongTags.push(getLabel(cls));
                    }
                }
            }
        });

        // 2. 파트별 전문 코칭 라이브러리 (사용자 커스텀 로직 반영)
        Object.keys(partStats).forEach(key => {
            const stat = partStats[key];
            const isAchieved = stat.correct >= stat.target;

            if (isAchieved) {
                stat.customCoaching = `축하합니다! 직접 설정하신 ${stat.name} 목표를 달성했습니다.`;
                stat.solution = "현재의 실력을 유지할 수 있도록 꾸준한 감각 유지용 풀이를 병행하세요.";
                return;
            }

            // 오답 데이터 요약
            const getTopItems = (arr: string[], limit: number = 3) => {
                const counts = arr.reduce((acc: any, val) => { acc[val] = (acc[val] || 0) + 1; return acc; }, {});
                return Object.entries(counts).sort((a: any, b: any) => b[1] - a[1]).slice(0, limit).map(e => e[0]);
            };

            const topTags = getTopItems(stat.wrongTags, 3);
            const topPassages = getTopItems(stat.wrongPassages, 2);
            const gap = stat.target - stat.correct;

            switch (key) {
                case 'p1':
                    stat.customCoaching = `Part 1 목표에 ${gap}개가 부족합니다. 필수 동사와 다양한 상황별 필수 명사를 더 공부하세요.`;
                    stat.solution = "소거법은 사용하고 계신가요? 확실한 오답을 먼저 지워나가는 훈련이 병행되어야 합니다.";
                    break;
                case 'p2':
                    const firstTag = topTags[0] || "";
                    stat.customCoaching = `Part 2 목표에 ${gap}개가 부족합니다. 취약 유형 순위: ${topTags.slice(0, 2).join(', ')} 순으로 오답이 많습니다.`;

                    if (['Who', 'When', 'Where', 'What', 'How', 'Why'].includes(firstTag)) {
                        stat.solution = "의문사 의문문의 경우 각 의문사별 기초 답변 패턴에 대한 보충 공부가 필요합니다.";
                    } else if (['YesNo', 'Negative', 'Tag'].includes(firstTag)) {
                        stat.solution = "질문의 첫 단어(동사)의 행위에 대한 yes/no 답변입니다. 질문의 중심을 놓치신 건 아닌지 확인하세요!!";
                    } else if (firstTag === 'Indirect') {
                        stat.solution = "우회적인 표현은 소거법 사용 안 하시면 안 돼요!! 확실한 오답을 먼저 지워나가세요.";
                    } else if (firstTag === 'Choice') {
                        stat.solution = "선택의문문은 기본적인 선택지 구성에 대한 기초 공부가 필요합니다.";
                    } else {
                        stat.solution = "질문의 첫 3단어를 잡아내어 핵심 의도를 파악하는 훈련이 필요합니다.";
                    }
                    break;
                case 'p3': case 'p4':
                    const ctx = topPassages[0] || '[미분류 상황]';
                    const qType = topTags[0] || '[미분류 유형]';
                    stat.customCoaching = `자주 틀린 지문: [${ctx}]\n자주 틀린 유형: [${qType}]`;

                    let p34Solution = `${ctx} 상황의 대화에 대한 듣기 경험이 부족합니다. 꼭 복습해서 약한 상황에 대비하세요. `;
                    if (qType.includes('주제') || qType.includes('목적')) {
                        p34Solution += "to부정사나 want, need, would like to 등 목적 관련 표현을 놓친 건 없는지 확인하세요.";
                    } else if (qType.includes('화자') || qType.includes('장소')) {
                        p34Solution += "특정 직업이나 장소와 관련된 어휘 및 표현을 놓치고 있습니다.";
                    } else if (qType.includes('의도')) {
                        p34Solution += "문제의 문장 전 대사와 상황 파악에 집중하시고 보기까지 읽어보고 푸세요.";
                    } else if (qType.includes('다음에') || qType.includes('요청')) {
                        p34Solution += "가장 쉬운 유형입니다! will, should 등 앞으로 '~해야 해' 등의 표현이 나오면 정답이니 집중하세요.";
                    } else {
                        p34Solution += "스키밍을 통해 정답 후보를 미리 예상하는 훈련을 하세요.";
                    }
                    stat.solution = p34Solution;
                    break;
                case 'p5':
                    const totalWrong = stat.wrongTags.length;
                    const vocabCount = stat.wrongTags.filter((t: string) =>
                        t.toLowerCase().includes('voc') || t.includes('어휘') || t.includes('연어')
                    ).length;
                    const gramCount = totalWrong - vocabCount;

                    const vocRatio = totalWrong > 0 ? Math.round((vocabCount / totalWrong) * 100) : 0;
                    const gramRatio = totalWrong > 0 ? 100 - vocRatio : 0;

                    stat.customCoaching = `자주 틀린 문제유형: (문법 ${gramRatio}% / 어휘 ${vocRatio}%)\n${topTags[0] || '기초 파급'} 파트가 약합니다.`;
                    stat.solution = `기초문법의 [${topTags[0] || '해당'}] 파트 문제를 다시 한번 풀어보세요.`;
                    break;
                case 'p6':
                    const p6Doc = topPassages[0] || '[미확인 지문]';
                    const p6Type = topTags[0] || '[미확인 유형]';
                    stat.customCoaching = `자주 틀린 지문: [${p6Doc}]\n자주 틀린 유형: [${p6Type}]`;

                    let p6Sol = `지문 종류 오답 비율이 높습니다. `;
                    if (p6Type.includes('어휘')) p6Sol += "기초 어휘 공부에 집중하세요.";
                    else if (p6Type.includes('문법')) p6Sol += "파트 5의 기초 문법 부분이 취약합니다.";
                    else if (p6Type.includes('연결')) p6Sol += "연결어구 단어 뜻을 모르는지, 앞뒤 관계 해석 실수인지 파악해 보세요.";
                    else if (p6Type.includes('문장')) p6Sol += "앞뒤 문장에 연결되는 내용이나 단어를 확인하셨나요?";
                    else p6Sol += "질문의 키워드를 먼저 찾고 해당 지점으로 점프하여 읽으세요.";
                    stat.solution = p6Sol;
                    break;
                case 'p7s': case 'p7m':
                    const p7Doc = topPassages[0] || '[미확인 지문]';
                    const p7Type = topTags[0] || '[미확인 유형]';
                    stat.customCoaching = `지문 종류: [${p7Doc}]\n문제 종류: [${p7Type}]`;

                    let p7Sol = "";
                    if (p7Type.includes('주제') || p7Type.includes('목적')) {
                        p7Sol = "주제 목적은 언제나 첫 번째 단락에서 찾으세요. 첫 2문장 안에 나올 확률이 가장 높습니다.";
                    } else if (p7Type.includes('세부') || p7Type.includes('사실')) {
                        p7Sol = "문제의 키워드를 놓치신 겁니다. 패러프레이징(말바꾸기)을 확인하세요.";
                    } else if (p7Type.includes('문장넣기')) {
                        p7Sol = "문장에서 앞뒤 상황을 알 수 있는 지시어나 표현을 미리 찾고 확인하셨나요?";
                    } else if (p7Type.includes('요청') || p7Type.includes('명령')) {
                        p7Sol = "명령문에 관련된 표현들 위주로 정답이 들어가 있는 경우가 많아요.";
                    } else if (key === 'p7m') {
                        p7Sol = "첫 번째 지문을 아주 꼼꼼히 읽어야 정보가 겹치는 연계 부분을 쉽게 풀 수 있습니다.";
                    } else {
                        p7Sol = "지문의 핵심 키워드를 먼저 찾고 해당 지점으로 점프하여 읽는 연습이 필요합니다.";
                    }
                    stat.solution = p7Sol;
                    break;
            }
        });

        const rcParts = ['p5', 'p6', 'p7s', 'p7m'];
        const rcTimeAnalysis = rcParts.map(key => {
            const actual = logs[key as keyof TimeLog] || 0;
            const standardFull = (TARGET_TIMES as any)[key]; // 기준 시간 (초)

            // 만약 하프테스트라면 x2하여 실전 예상 시간 산출
            const estimateFull = isFullTest ? actual : actual * 2;
            const reductionNeeded = Math.max(0, estimateFull - standardFull);

            let level: 'RED' | 'YELLOW' | 'GREEN' = 'GREEN';
            let coaching = "";

            const ratio = estimateFull / standardFull;

            if (ratio <= 1.0) {
                level = 'GREEN';
                coaching = "완벽한 시간 안배입니다. 확보된 여유 시간을 고난도 문항 검토에 활용하여 정확도를 높이세요.";
            } else if (ratio <= 1.1) {
                level = 'GREEN'; // Slight over is still okay-ish but coaching is different
                coaching = "무난한 속도입니다. 다만, 실전 컨디션에 따라 시간이 부족할 수 있으니 1~2분 정도 단축 연습을 권장합니다.";
            } else if (ratio <= 1.25) {
                level = 'YELLOW';
                coaching = "지문 파악이 조금 늦습니다. 모든 문장을 읽기보다 핵심 키워드 위주로 정답을 찾는 스캐닝 연습이 필요합니다.";
            } else {
                level = 'RED';
                coaching = "시간 안배가 위험합니다. 실전에서는 지문 2~3개를 놓칠 확률이 매우 높으므로, 속도 향상을 최우선 과제로 삼으세요.";
            }

            return {
                part: partStats[key].name,
                actualHalf: actual,
                estimateFull,
                targetFull: standardFull,
                reductionNeeded,
                level,
                coachingText: coaching
            };
        });

        const lcTarget = (partGoals.p1 + partGoals.p2 + partGoals.p3 + partGoals.p4) * 10;
        const rcTarget = (partGoals.p5 + partGoals.p6 + partGoals.p7s + partGoals.p7m) * 10;

        const lcScaledValue = isFullTest ? calculateScaledScore(lcTotal, 'LC') : lcTotal * 10;
        const rcScaledValue = isFullTest ? calculateScaledScore(rcTotal, 'RC') : rcTotal * 10;

        return {
            overallScore: lcScaledValue + rcScaledValue,
            lcScore: lcScaledValue,
            rcScore: rcScaledValue,
            lcTarget: isFullTest ? (partGoals.p1 + partGoals.p2 + partGoals.p3 + partGoals.p4) : lcTarget,
            rcTarget: isFullTest ? (partGoals.p5 + partGoals.p6 + partGoals.p7s + partGoals.p7m) : rcTarget,
            partStats,
            rcTimeAnalysis,
            targetGoal
        };
    }
};
