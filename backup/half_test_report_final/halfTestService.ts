import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getCorrectAnswersForTest9, getCorrectAnswersForTest10 } from '@/lib/mock/scoring';
import { half9aPart1, half9aPart2, half9aPart3, half9aPart4, half9aPart5, half9aPart6, half9aPart7 } from '@/data/mock/half_set9_a';

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

// 1. 한국어 매핑 라이브러리
const TAG_MAP: Record<string, string> = {
    // Part 5/6
    'P5_VOC_VERB': '동사 어휘', 'P5_POS_ADJ': '형용사 자리', 'P5_POS_NOUN': '명사 자리', 'P5_POS_ADV': '부사 자리',
    'P5_VOC_ADJ': '형용사 어휘', 'P5_VOC_NOUN': '명사 어휘', 'P5_PR_CASE': '대명사 격', 'P5_V_AGREE': '수 일치',
    'P5_V_VOICE': '능동/수동태', 'P5_PREP_PHRA': '전치사/숙어', 'P6_GRAMMAR': '문법 구조', 'P6_VOCABULARY': '장문 어휘',
    'P6_SENTENCE_INSERTION': '문장 삽입', 'P5_CONJ': '접속사/전치사',
    // Part 2
    'How': '의문사(How)', 'What': '의문사(What)', 'When': '의문사(When)', 'Where': '의문사(Where)', 'Who': '의문사(Who)', 'Why': '의문사(Why)',
    'YesNo': '일반 의문문', 'Choice': '선택 의문문', 'Statement': '평서문', 'Negative': '부정 의문문', 'Tag': '부가 의문문', 'Indirect': '우회적 답변',
    // Part 3/4/7 Question Types
    'MAIN_PURPOSE': '주제/목적 찾기', 'DETAIL': '세부 정보 파악', 'WHO_LOC': '인물/장소 추론', 'WHY_PROBLEM': '이유/문제점',
    'NEXT_ACTION': '향후 행동', 'IMPLIED_MEANING': '의도 파악', 'GRAPHIC': '시각 자료 분석'
};

const PASSAGE_MAP: Record<string, string> = {
    'EMAIL': '이메일', 'LETTER': '편지', 'NOTICE': '공고문', 'ARTICLE': '기사', 'MEMO': '회람/메모',
    'ADVERTISEMENT': '광고', 'ANNOUNCEMENT': '안내문', 'WEB PAGE': '웹페이지', 'CHAT': '채팅 메시지',
    'FORM': '서식/양식', 'INVOICE': '송장'
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
        const isTest9 = data.testId.includes('9');
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
            const qNum = parseInt(qId.replace(/[^0-9]/g, ''));
            const isCorrect = userAns === correctAnswers[qId];
            let partKey = "";
            if (qNum <= 6) partKey = "p1";
            else if (qNum <= 31) partKey = "p2";
            else if (qNum <= 70) partKey = "p3";
            else if (qNum <= 100) partKey = "p4";
            else if (qNum <= 130) partKey = "p5";
            else if (qNum <= 146) partKey = "p6";
            else if (qNum <= 175) partKey = "p7s";
            else partKey = "p7m";

            if (isCorrect) {
                partStats[partKey].correct++;
                if (qNum <= 100) lcTotal++; else rcTotal++;
            } else {
                // [정밀 분석 데이터 추출]
                if (partKey === 'p1') {
                    partStats.p1.wrongTags.push("생활영어 어휘");
                } else if (partKey === 'p2') {
                    const qData = half9aPart2.find(q => q.id === qNum);
                    if (qData?.questionType) partStats.p2.wrongTags.push(TAG_MAP[qData.questionType] || qData.questionType);
                } else if (partKey === 'p3' || partKey === 'p4') {
                    const source = partKey === 'p3' ? half9aPart3 : half9aPart4;
                    const set = source.find(s => s.questions.some(q => q.id === qId));
                    if (set) {
                        partStats[partKey].wrongPassages.push(set.contextType || "비즈니스 상황");
                        const q = set.questions.find(q => q.id === qId);
                        if (q?.questionType) partStats[partKey].wrongTags.push(TAG_MAP[q.questionType] || q.questionType);
                    }
                } else if (partKey === 'p5') {
                    const qData = half9aPart5.find(q => q.id === qId);
                    if (qData?.classification) partStats.p5.wrongTags.push(TAG_MAP[qData.classification] || qData.classification);
                } else if (partKey === 'p6' || partKey.startsWith('p7')) {
                    const source = partKey === 'p6' ? half9aPart6 : half9aPart7;
                    const cleanQid = qId.replace('q', '');
                    const set = source.find(s => s.questions ? s.questions.some(q => q.id === cleanQid) : (s.passages && s.passages.some(p => p.id === cleanQid)));
                    if (set) {
                        const type = set.type || (set.passages?.[0]?.type);
                        partStats[partKey].wrongPassages.push(PASSAGE_MAP[type] || type);
                        const q = set.questions?.find(q => q.id === cleanQid);
                        if (q?.classification || q?.questionType) partStats[partKey].wrongTags.push(TAG_MAP[q.classification || q.questionType] || (q.classification || q.questionType));
                    }
                }
            }
        });

        // 2. 파트별 전문 코칭 라이브러리 (서술형 문장 생성 구조)
        Object.keys(partStats).forEach(key => {
            const stat = partStats[key];
            // 1. 중복 제거 및 내부 기호(A1, D2 등) 제거 로직
            const cleanPassages = Array.from(new Set(stat.wrongPassages))
                .map((p: any) => p.replace(/^[A-Z][0-9]\.\s*/, '').trim()) // 'A1. ' 형태 제거
                .filter(p => !/^[A-Z0-9_-]+$/.test(p)) // 순수 영문/기호로만 된 코드 제외
                .slice(0, 2);

            const cleanTags = Array.from(new Set(stat.wrongTags))
                .filter(t => !/^[A-Z0-9_-]+$/.test(t)) // 'P5_VOC' 같은 코드 제외 (TAG_MAP에서 매핑 안 된 경우 대비)
                .slice(0, 2);

            const passageText = cleanPassages.join(', ');
            const tagText = cleanTags.join(', ');

            if (stat.correct < stat.target) {
                switch (key) {
                    case 'p1':
                        stat.customCoaching = "주로 사진 속 사물과 인물의 동작을 나타내는 기초 생활영어 어휘 숙지가 부족하여 오답이 발생하고 있습니다.";
                        stat.solution = "빈출 사진별 필수 상황 어휘를 우선 암기하고, 확실한 오답을 먼저 지워나가는 소거법 연습을 병행하세요.";
                        break;
                    case 'p2':
                        const isIndirect = stat.wrongTags.includes('우회적 답변');
                        const specificTags = tagText || "의문사와 동사 표현";
                        stat.customCoaching = `주로 ${specificTags} 관련 문항에서 오답률이 높습니다. ${isIndirect ? '정답이 바로 나오지 않는 회피형 답변에 취약한 상태입니다.' : '질문의 첫 마디와 동사 시제를 놓치는 경우가 많습니다.'}`;
                        stat.solution = isIndirect ? "직접적인 대답이 아닌 '제3의 답변' 패턴을 익히고 반드시 소거법으로 접근하세요." : "의문사와 바로 뒤에 오는 동사 시제에 집중하여 듣는 훈련을 반복하세요.";
                        break;
                    case 'p3': case 'p4':
                        stat.customCoaching = `주로 [${passageText || '비즈니스 일상'}] 관련 지문에서 오답이 높습니다. 문제 유형은 [${tagText || '세부 정보 파악'}] 관련 문항의 오답률이 높은 편입니다.`;
                        stat.solution = "지문 전체를 듣기 전 보기를 미리 읽는(Pre-reading) 습관을 기르고, 들으면서 정답을 바로 체크하는 타이밍 연습이 필요합니다.";
                        break;
                    case 'p5':
                        const isGrammar = stat.wrongTags.some(t => t.includes('자리') || t.includes('구조'));
                        stat.customCoaching = `문제 유형 중 [${tagText || '기초 구조'}] 관련 문항에서 취약점을 보이고 있습니다. ${isGrammar ? '문장의 뼈대를 못 보고 느낌으로 풀고 있습니다.' : '단어 뜻에만 의존하여 품사나 어울림을 놓치고 있습니다.'}`;
                        stat.solution = isGrammar ? "품사 자리 찾기와 기본 문장 성분 구조 분석을 통한 기초 문법 보완이 시급합니다." : "어휘 암기 시 짝꿍 전치사나 수식 관계를 통째로 외우는 '덩어리 학습'을 하세요.";
                        break;
                    case 'p6': case 'p7s': case 'p7m':
                        stat.customCoaching = `주로 [${passageText || '비즈니스 서신'}] 지문에서 오답이 집중되고 있습니다. 문제 유형은 [${tagText || '연계 추론/문맥 파악'}] 문항에서 정보를 매칭하는 속도가 느려 오답이 발생합니다.`;
                        stat.solution = "지문을 다 읽으려 하지 말고 질문의 키워드를 먼저 잡고 지문에서 찾아내는 '스캐닝' 훈련 및 연계 지문의 연결 고리 찾기에 집중하세요.";
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
