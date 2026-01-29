import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getCorrectAnswersForTest9, getCorrectAnswersForTest10 } from '@/lib/mock/scoring';
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

const TARGET_TIMES = {
    p5: 390, p6: 330, p7s: 750, p7m: 630
};

// 1. 한국어 매핑 라이브러리 (실전 데이터 9/10회차 모든 분류 코드 전수 수용)
const TAG_MAP: Record<string, string> = {
    // Part 2
    'How': '의문사(How) 정보', 'What': '의문사(What) 구체사항', 'When': '의문 시간/시점',
    'Where': '의문 장소/위치', 'Who': '의문 인물/대상', 'Why': '의문 이유/근거',
    'YesNo': '일반 의문문 응답', 'Choice': '선택 의문문 판단', 'Statement': '평서문 상황 맥락',
    'Indirect': '우회적/회피형 답변', 'Negative': '부정 의문문 확인', 'Tag': '부가 의문문',
    // Part 3/4/6/7 Core Type
    'DETAIL': '세부 사항 파악', 'WHO_LOC': '인물/장소/직업 추론', 'MAIN_PURPOSE': '전체 주제 및 목적',
    'WHY_PROBLEM': '이유 및 문제점 단서', 'NEXT_ACTION': '향후 행동/제안',
    'IMPLIED_MEANING': '숨은 의도 파악', 'IMPLY_MEANING': '의도 추론', 'GRAPHIC': '시각 자료 매칭',
    'VISUAL': '도표/시각자료 분석', 'INFERENCE': '문맥적 추론',
    // Part 5/6 Grammar (G_...)
    'G_POS': '필수 품사(명/형/부) 자리', 'G_CONJ': '접속사 및 전치사', 'G_VERB': '동사 시제 및 수 일치',
    'G_PR': '대명사 및 격', 'G_PREP': '전치사 관용구', 'G_COMP': '비교/최상급',
    // Part 5/6 Vocabulary (V_...)
    'V_VERB': '동사 어휘', 'V_NOUN': '명사 어휘', 'V_ADJ': '형용사 어휘', 'V_ADV': '부사 어휘',
    // Part 6/7 Specific
    'P6_GRAMMAR': '장문 문법 구조', 'P6_VOCABULARY': '장문 문맥 어휘', 'P6_SENTENCE_INSERTION': '문장 삽입',
    'P6_READING_COMPREHENSION': '지문 내용 이해', 'P7_PURPOSE': '지문 제작 목적',
    'P7_DETAIL': '명시적 세부 정보', 'P7_INFERENCE': '암시적 내용 추론', 'P7_VOCABULARY': '문맥상 유의어',
    'P7_SENTENCE_INSERTION': '문장 적절한 위치'
};

const PASSAGE_MAP: Record<string, string> = {
    'EMAIL': '이메일/서신', 'E-MAIL': '이메일', 'LETTER': '공식 편지', 'NOTICE': '공고문/안내',
    'ARTICLE': '기사/보도자료', 'MEMO': '회람/메모', 'ADVERTISEMENT': '광고/홍보',
    'ANNOUNCEMENT': '안내 방송/공지', 'WEB PAGE': '웹페이지/사이트', 'CHAT': '메신저 대화',
    'CHAT_MESSAGE': '실시간 채팅', 'FORM': '서식/양식/신청서', 'INVOICE': '송장/송수증',
    'SCHEDULE': '일정표/스케줄', 'LIST': '목록/리스트', 'TESTIMONIAL': '사용 후기/추천사',
    'Double': '연계 지문(Double)', 'Triple': '연계 지문(Triple)', 'DualPassage': '복합 지문'
};

export const HalfTestService = {
    async analyzeAttempt(attemptId: string): Promise<HalfTestAnalysis | null> {
        const docRef = doc(db, 'MockTestAttempts', attemptId);
        const snapshot = await getDoc(docRef);
        if (!snapshot.exists()) return null;

        const data = snapshot.data();
        const logs = data.timeLogs as TimeLog;
        const userAnswers = data.answers as Record<string, string>;
        const targetGoal = data.targetScore || 800;
        const fullTestId = data.testId;
        const isA = fullTestId.includes('a');
        const isTest9 = fullTestId.includes('9');

        const testData = isA
            ? require('@/data/mock/half_set9_a')
            : require('@/data/mock/half_set9_b');

        const p1_source = isA ? testData.half9aPart1 : testData.half9bPart1;
        const p2_source = isA ? testData.half9aPart2 : testData.half9bPart2;
        const p3_source = isA ? testData.half9aPart3 : testData.half9bPart3;
        const p4_source = isA ? testData.half9aPart4 : testData.half9bPart4;
        const p5_source = isA ? testData.half9aPart5 : testData.half9bPart5;
        const p6_source = isA ? testData.half9aPart6 : testData.half9bPart6;
        const p7_source = isA ? testData.half9aPart7 : testData.half9bPart7;

        const correctAnswers = isTest9 ? getCorrectAnswersForTest9() : getCorrectAnswersForTest10();

        const partGoals: Record<string, number> = targetGoal >= 900 ?
            { p1: 3, p2: 13, p3: 17, p4: 14, p5: 12, p6: 7, p7s: 13, p7m: 14 } :
            { p1: 2, p2: 11, p3: 14, p4: 12, p5: 10, p6: 6, p7s: 11, p7m: 11 };

        const partStats: Record<string, any> = {
            p1: { name: "Part 1 (사진 묘사)", correct: 0, total: 3, target: partGoals.p1, wrongTags: [], wrongPassages: [], customCoaching: "", solution: "" },
            p2: { name: "Part 2 (질의 응답)", correct: 0, total: 14, target: partGoals.p2, wrongTags: [], wrongPassages: [], customCoaching: "", solution: "" },
            p3: { name: "Part 3 (짧은 대화)", correct: 0, total: 18, target: partGoals.p3, wrongTags: [], wrongPassages: [], customCoaching: "", solution: "" },
            p4: { name: "Part 4 (설명문)", correct: 0, total: 15, target: partGoals.p4, wrongTags: [], wrongPassages: [], customCoaching: "", solution: "" },
            p5: { name: "Part 5 (단문 공란)", correct: 0, total: 13, target: partGoals.p5, wrongTags: [], wrongPassages: [], customCoaching: "", solution: "" },
            p6: { name: "Part 6 (장문 공란)", correct: 0, total: 8, target: partGoals.p6, wrongTags: [], wrongPassages: [], customCoaching: "", solution: "" },
            p7s: { name: "Part 7 (단일 지문)", correct: 0, total: 14, target: partGoals.p7s, wrongTags: [], wrongPassages: [], customCoaching: "", solution: "" },
            p7m: { name: "Part 7 (다중 지문)", correct: 0, total: 15, target: partGoals.p7m, wrongTags: [], wrongPassages: [], customCoaching: "", solution: "" },
        };

        let lcTotal = 0;
        let rcTotal = 0;

        Object.entries(userAnswers).forEach(([qId, userAns]) => {
            let partKey = "";
            let qNum = 0;

            // 1. Standardized ID Format Check (pX-tY-qZ)
            if (qId.startsWith('p1')) partKey = "p1";
            else if (qId.startsWith('p2')) partKey = "p2";
            else if (qId.startsWith('p3')) partKey = "p3";
            else if (qId.startsWith('p4')) partKey = "p4";
            else if (qId.startsWith('p5')) partKey = "p5";
            else if (qId.startsWith('p6')) partKey = "p6";
            else if (qId.startsWith('p7')) {
                const match = qId.match(/-q(\d+)/);
                qNum = match ? parseInt(match[1]) : 0;
                partKey = qNum <= 175 ? "p7s" : "p7m";
            }
            else {
                // 2. Legacy Numeric Format Fallback (e.g., "1", "q101")
                qNum = parseInt(qId.replace(/[^0-9]/g, ''));
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
                    if (qData?.questionType) partStats.p2.wrongTags.push(TAG_MAP[qData.questionType] || qData.questionType);
                } else if (partKey === 'p3' || partKey === 'p4') {
                    const source = partKey === 'p3' ? p3_source : p4_source;
                    const set = source.find((s: any) => s.questions.some((q: any) => q.id === qId || parseInt(q.id.replace(/[^\d]/g, '')) === qNum));
                    if (set) {
                        partStats[partKey].wrongPassages.push(set.contextType || "비즈니스 상황");
                        const q = set.questions.find((q: any) => q.id === qId || parseInt(q.id.replace(/[^\d]/g, '')) === qNum);
                        if (q?.questionType) partStats[partKey].wrongTags.push(TAG_MAP[q.questionType] || q.questionType);
                    }
                } else if (partKey === 'p5') {
                    const qData = p5_source.find((q: any) => q.id === qId || parseInt(q.id.replace(/[^\d]/g, '')) === qNum);
                    if (qData?.classification) partStats.p5.wrongTags.push(TAG_MAP[qData.classification] || qData.classification);
                } else if (partKey === 'p6' || partKey.startsWith('p7')) {
                    const source = partKey === 'p6' ? p6_source : p7_source;
                    const cleanQid = qId.includes('-q') ? qId.split('-q')[1] : qId.replace(/[^\d]/g, '');
                    const set = source.find((s: any) => {
                        if (s.questions) return s.questions.some((q: any) => q.id === qId || q.id === cleanQid || String(q.id) === String(qNum));
                        if (s.passages) return s.passages.some((p: any) => p.id === cleanQid || String(p.id) === String(qNum));
                        return false;
                    });
                    if (set) {
                        const type = set.type || (set.passages?.[0]?.type);
                        partStats[partKey].wrongPassages.push(PASSAGE_MAP[type] || type);
                        const q = set.questions?.find((q: any) => q.id === qId || q.id === cleanQid || String(q.id) === String(qNum));
                        const cls = q?.classification || q?.questionType;
                        if (cls) partStats[partKey].wrongTags.push(TAG_MAP[cls] || cls);
                    }
                }
            }
        });

        // 2. 파트별 전문 코칭 라이브러리 (fallback 최소화 및 원본 데이터 유지 로직)
        Object.keys(partStats).forEach(key => {
            const stat = partStats[key];
            const cleanPassages = Array.from(new Set(stat.wrongPassages))
                .map((p: any) => p.replace(/^[A-Z][0-9]\.\s*/, '').trim())
                .filter(p => p !== 'Double' && p !== 'Triple') // UI 태그로 이미 있으므로 텍스트에선 제외
                .slice(0, 2);

            const cleanTags = Array.from(new Set(stat.wrongTags))
                .filter(t => !/^[A-Z][0-9]_/.test(t)) // 'A1_' 형태만 제거
                .slice(0, 2);

            const passageText = cleanPassages.length > 0 ? cleanPassages.join(', ') : '';
            const tagText = cleanTags.length > 0 ? cleanTags.join(', ') : '';

            if (stat.correct < stat.target) {
                switch (key) {
                    case 'p1':
                        stat.customCoaching = "주로 사진 속 사물과 인물의 동작을 나타내는 기초 생활영어 어휘 숙지가 부족하여 오답이 발생하고 있습니다.";
                        stat.solution = "빈출 사진별 필수 상황 어휘를 우선 암기하고, 확실한 오답을 먼저 지워나가는 소거법 연습을 병행하세요.";
                        break;
                    case 'p2':
                        const specificTags = tagText || "의문사와 상황 답변";
                        stat.customCoaching = `주로 ${specificTags} 관련 문항에서 오답률이 높습니다. 질문의 첫 마디와 동사의 핵심 동작을 놓치는 경우가 많습니다.`;
                        stat.solution = "의문사와 바로 뒤에 오는 동사의 시제, 주어에 집중하여 첫 3단어를 정확히 잡아내는 훈련을 반복하세요.";
                        break;
                    case 'p3': case 'p4':
                        stat.customCoaching = `주로 [${passageText || '비즈니스 실전'}] 관련 지문에서 오답이 높습니다. 문제 유형은 [${tagText || '전반적 정보 파악'}] 관련 문항의 오답률이 높은 편입니다.`;
                        stat.solution = "지문을 듣기 전 질문과 보기를 먼저 분석하여 정답이 나올 위치를 예측하고, 소리가 들릴 때 바로 마킹하는 연습이 필요합니다.";
                        break;
                    case 'p5':
                        stat.customCoaching = `문제 유형 중 [${tagText || '기초 문법 및 어휘'}] 관련 문항에서 취약점을 보이고 있습니다. 정확한 분석 없이 느낌으로 풀거나 어울림(Collocation)을 간과하고 있습니다.`;
                        stat.solution = "빈칸 앞뒤의 구조를 먼저 분석하여 품사 자리를 확정하고, 전치사나 명사와의 짝꿍 어휘를 덩어리로 암기하세요.";
                        break;
                    case 'p6': case 'p7s': case 'p7m':
                        stat.customCoaching = `주로 [${passageText || '정보 전달형'}] 지문에서 오답이 집중되고 있습니다. 문제 유형은 [${tagText || '문맥 파악 및 세부 정보'}] 문항에서 정보를 매칭하는 속도가 느려 오답이 발생합니다.`;
                        stat.solution = "지문을 고속으로 훑으며 키워드를 찾는 스캐닝 훈련과, 여러 문장에 흩어진 단서를 연결하여 답을 찾는 연습이 병행되어야 합니다.";
                        break;
                    default:
                        stat.customCoaching = "전반적인 파트 목표 정답 수에 미달했습니다. 취약 유형에 대한 집중 학습이 필요합니다.";
                        stat.solution = "오답 노트를 통해 틀린 이유를 정확히 분류하고, 유사 유형 문제를 반복 풀이하세요.";
                }
            } else {
                stat.customCoaching = "안정적인 목표 달성 페이스입니다. 실전에서 실수를 줄이는 정확도 향상에 집중하세요.";
                stat.solution = "실전에서의 페이스 유지를 위해 현재의 시간 안배 감각을 유지하며 고난도 문항을 선별 풀이하세요.";
            }
        });

        const rcParts = ['p5', 'p6', 'p7s', 'p7m'];
        const rcTimeAnalysis = rcParts.map(key => {
            const actual = logs[key as keyof TimeLog] || 0;
            const targetFull = (TARGET_TIMES as any)[key] * 2;
            const estimateFull = actual * 2;
            const reductionNeeded = Math.max(0, estimateFull - targetFull);

            let level: 'RED' | 'YELLOW' | 'GREEN' = 'GREEN';
            let coaching = "이상적인 시간 안배입니다. 정확도에 더 집중하세요.";

            if (reductionNeeded > 60) {
                level = 'RED';
                coaching = `현재 속도로는 실전에서 지문 2~3개를 아예 읽지 못합니다. 목표 달성을 위해 무조건 단축이 필요합니다.`;
            } else if (reductionNeeded > 0) {
                level = 'YELLOW';
                coaching = "불안정한 페이스입니다. 지문당 소요 시간을 조금 더 타이이트하게 가져가야 합니다.";
            }

            return { part: partStats[key].name, actualHalf: actual, estimateFull, targetFull, reductionNeeded, level, coachingText: coaching };
        });

        const lcTarget = (partGoals.p1 + partGoals.p2 + partGoals.p3 + partGoals.p4) * 10;
        const rcTarget = (partGoals.p5 + partGoals.p6 + partGoals.p7s + partGoals.p7m) * 10;

        return {
            overallScore: (lcTotal + rcTotal) * 10,
            lcScore: lcTotal * 10,
            rcScore: rcTotal * 10,
            lcTarget,
            rcTarget,
            partStats,
            rcTimeAnalysis,
            targetGoal
        };
    }
};
