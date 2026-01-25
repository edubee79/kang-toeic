/**
 * 📊 TOEIC Data Standardization Types
 * This file defines the strictly enforced IDs for all TOEIC question tags and classifications.
 * Total 160 standardized items.
 */

// --- LC: Listening Comprehension (60 Items) ---

/** Part 2: Question Type (12) */
export type LCP2Tag =
    | 'Who' | 'When' | 'Where' | 'Why' | 'How' | 'What'
    | 'YesNo' | 'Choice' | 'Statement' | 'Tag' | 'Negative' | 'Indirect';

/** Part 3: Context Type (15) */
export type LCP3ContextTag =
    | 'A1' | 'A2' | 'A3' | 'A4' | 'A5'  // 사내업무
    | 'B1' | 'B2' | 'B3' | 'B4'        // 고객지원
    | 'C1' | 'C2' | 'C3'              // 여행예약
    | 'D1' | 'D2' | 'D3';             // 시설시스템

/** Part 4: Context Type (24) */
export type LCP4ContextTag =
    | 'A1_announcement' | 'A2_ann' | 'A3_ann' | 'A4_ann' | 'A5_ann' // 공지안내
    | 'B1_company' | 'B2_company' | 'B3_company' | 'B4_company'    // 사내방송
    | 'C1_service' | 'C2_customer' | 'C3_membership' | 'C4_technical' // 서비스안내
    | 'D1_ads' | 'D2_ads' | 'D3_ads' | 'D4_ads'                    // 광고홍보
    | 'E1_trans' | 'E2_trans' | 'E3_travel' | 'E4_facility'        // 교통여행
    | 'F1_event' | 'F2_community' | 'F3_public';                   // 이벤트문화

/** Part 3/4: Question Type (9) */
export type LCP34QuestionTag =
    | 'DETAIL' | 'WHO_LOC' | 'WHAT_WHICH' | 'WHEN_TIME' | 'WHY_REASON'
    | 'HOW_METHOD' | 'ACTION_NEXT' | 'IMPLY_MEANING' | 'GRAPHIC';

// --- RC: Reading Comprehension (99 Items) ---

/** Part 5: Hyper-Detailed Classification (80 Items) */
export type RCP5Tag =
    // 1. Noun, Pronoun, Adj, Adv (20)
    | 'n1' | 'n2' | 'n3' | 'n4' | 'n5'
    | 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6'
    | 'a1' | 'a2' | 'a3' | 'a4' | 'a5' | 'a6'
    | 'av1' | 'av2' | 'av3'
    // 2. Verb and Verbals (24)
    | 'v1' | 'v2' | 'v3' | 'v4' | 'v5' | 'v6' | 'v7' | 'v8'
    | 'i1' | 'i2' | 'i3' | 'i4' | 'i5' | 'i6'
    | 'g1' | 'g2' | 'g3' | 'g4' | 'g5'
    | 'pa1' | 'pa2' | 'pa3' | 'pa4' | 'pa5'
    // 3. Clause, Conjunction, Special (32)
    | 'nc1' | 'nc2' | 'nc3' | 'nc4' | 'nc5'
    | 'ac1' | 'ac2' | 'ac3' | 'ac4' | 'ac5' | 'ac6'
    | 'c1' | 'c2' | 'c3' | 'c4' | 'c5'
    | 'pr1' | 'pr2' | 'pr3' | 'pr4' | 'pr5'
    | 'com1' | 'com2' | 'com3' | 'com4'
    | 's1' | 's2'
    | 'inv1' | 'inv2' | 'inv3' | 'inv4' | 'inv5'
    // 4. Vocabulary (4)
    | 'voc1' | 'voc2' | 'voc3' | 'voc4';

/** Part 6: Classification (3) */
export type RCP6Tag = 'P6_GRAMMAR' | 'P6_VOCABULARY' | 'P6_SENTENCE_INSERTION' | 'P6_CONNECTIVE';

/** Part 7: Question Classification (8) */
export type RCP7Tag =
    | 'P7_PURPOSE' | 'P7_DETAIL' | 'P7_NEGATIVE' | 'P7_INFERENCE'
    | 'P7_VOCABULARY' | 'P7_INSERTION' | 'P7_GRAPHIC' | 'P7_LOCATION'
    | 'P7_INTENTION' | 'P7_LINK';

/** RC Passage Group (8) */
export type RCPassageGroupTag =
    | 'P1_CORR' | 'P2_OFFI' | 'P3_MEDI' | 'P4_MARK'
    | 'P5_FORM' | 'P6_RULE' | 'P7_CONV' | 'P8_VISU';

/** Root TOEIC Tag Union */
export type ToeicTag =
    | LCP2Tag
    | LCP3ContextTag
    | LCP4ContextTag
    | LCP34QuestionTag
    | RCP5Tag
    | RCP6Tag
    | RCP7Tag
    | RCPassageGroupTag;

/** Metadata structure for each tag */
export interface ToeicTagMetadata {
    id: ToeicTag;
    label: string;
    description: string;
    category: 'LC_P2' | 'LC_P3_CTX' | 'LC_P4_CTX' | 'LC_P34_Q' | 'RC_P5' | 'RC_P6' | 'RC_P7' | 'RC_PSG';
}

/** 
 * Comprehensive Mapping of all 159 Standardized Tags
 * This is used by the analysis engine to provide Korean feedback.
 */
export const TOEIC_TAG_REGISTRY: Record<ToeicTag, { label: string, description: string }> = {
    // Part 2
    'Who': { label: '인물/직책 파악', description: '화자 및 대상의 이름/직위/부서 인지력' },
    'When': { label: '시점/기간 파악', description: '시간표, 날짜, 기간에 대한 청취 정확도' },
    'Where': { label: '장소/위치 파악', description: '행선지 및 위치 전치사구 파악 능력' },
    'Why': { label: '이유/목적 파악', description: '원인 및 의도에 대한 논리적 이해도' },
    'How': { label: '방법/수단 파악', description: '프로세스, 상태, 가격, 빈도 표현 숙지' },
    'What': { label: '구체정보 파악', description: '사물, 사건, 특정 주제에 대한 세부 인지' },
    'YesNo': { label: '일반 의문문 대응', description: '긍정/부정 질문에 대한 응답 적합성' },
    'Choice': { label: '선택 의문문 대응', description: '두 옵션 사이의 결정/회피 표현 판단' },
    'Statement': { label: '평서문 문맥 이해', description: '의견/사실 전달에 대한 적절한 맞장구' },
    'Tag': { label: '부가 의문문 확인', description: '사실 확인 및 동의 요청 청취력' },
    'Negative': { label: '부정 의문문 대응', description: '부정 질문에 대한 정확한 해석 및 응답력' },
    'Indirect': { label: '우회적 답변 대응', description: '제3의 간접 응답에 대한 유연한 대응 능력' },

    // Part 3 Context
    'A1': { label: '회의/일정', description: '사내 업무 일정 및 회의 관련 대화' },
    'A2': { label: '프로젝트', description: '업무 기획 및 프로젝트 진행 상황' },
    'A3': { label: '인사/근무', description: '채용, 승진, 퇴사 등 인사 관련 상담' },
    'A4': { label: '재무/비용', description: '예산 집행, 영수증 처리, 비용 정산' },
    'A5': { label: '교육/훈련', description: '신입사원 교육 및 직무 능력 개발' },
    'B1': { label: '고객불만', description: '고객의 불편 사항 접수 및 해결 과정' },
    'B2': { label: '주문/배송', description: '제품 주문 절차 및 배송 상태 확인' },
    'B3': { label: '환불/교환', description: '구매 취소 및 교환/환불 정책 안내' },
    'B4': { label: '일반문의', description: '영업 시간, 위치 등 일반적인 고객 편의 문의' },
    'C1': { label: '항공/교통', description: '비행기, 기차 등 예약 및 운행 정보' },
    'C2': { label: '호텔/숙박', description: '숙박 시설 예약 및 서비스 이용' },
    'C3': { label: '일정변경', description: '여행 스케줄 변경 및 예약 취소 대응' },
    'D1': { label: '기기고장', description: '사무용 기기 및 시설물 고장 신고' },
    'D2': { label: 'IT오류', description: '소프트웨어, 시스템 장애 및 복구 요청' },
    'D3': { label: '유지보수', description: '정기 점검 및 시설 유지 관리 업무' },

    // Part 4 Context
    'A1_announcement': { label: '일반공지', description: '시설 이용 및 일반 규칙 안내' },
    'A2_ann': { label: '일정변경', description: '행사나 프로그램의 시간/장소 변경 공지' },
    'A3_ann': { label: '시설이용', description: '공공장소나 회사의 시설 사용 지침' },
    'A4_ann': { label: '규정변경', description: '사내 규정 및 관련 법규 변경 안내' },
    'A5_ann': { label: '긴급안전', description: '화재, 점검 등 안전 관련 긴급 공지' },
    'B1_company': { label: '현황보고', description: '회사 실적 및 업무 진행률 보고' },
    'B2_company': { label: '관리자', description: '상급자의 지시 및 업무 브리핑' },
    'B3_company': { label: '사내교육', description: '사내 워크샵 및 직원 교육 프로그램' },
    'B4_company': { label: '절차설명', description: '새로운 업무 시스템이나 절차 안내' },
    'C1_service': { label: '사용법', description: '제품 및 서비스의 상세 사용 설명' },
    'C2_customer': { label: '행동지시', description: '고객이 취해야 할 다음 행동 안내' },
    'C3_membership': { label: '혜택설명', description: '회원 등급 및 포인트 혜택 상세 안내' },
    'C4_technical': { label: '기술지원', description: '기술적 문제 해결을 위한 단계별 가이드' },
    'D1_ads': { label: '제품광고', description: '신제품 출시 및 기능 홍보' },
    'D2_ads': { label: '행사홍보', description: '지역 축제, 세일 행사 등 이벤트 홍보' },
    'D3_ads': { label: '할인행사', description: '한정 기간 할인 및 특가 정보 안내' },
    'D4_ads': { label: '서비스홍보', description: '전문 서비스 및 브랜드 가치 홍보' },
    'E1_trans': { label: '교통시간', description: '버스, 열차, 선박 등의 정규 운행 시간' },
    'E2_trans': { label: '지연변경', description: '교통 수단의 지연, 취소 및 노선 변경' },
    'E3_travel': { label: '여행정보', description: '관광 명소 추천 및 현지 여행 팁' },
    'E4_facility': { label: '공공시설', description: '박물관, 공원 등 공공장소 이용 정보' },
    'F1_event': { label: '전시공연', description: '미술관 전시 및 음악 공연 일정 안내' },
    'F2_community': { label: '지역공지', description: '반상회, 지역 축제 등 지역 사회 소식' },
    'F3_public': { label: '공공서비스', description: '수도, 전기, 공공기관 이용 관련 공지' },

    // P3/4 QuestType
    'DETAIL': { label: '구체 정보 검색', description: '지문 내 명시된 팩트의 즉각적 포착' },
    'WHO_LOC': { label: '화자/장소 추론', description: '키워드를 통한 관련 인물 및 장소 파악' },
    'WHAT_WHICH': { label: '주제/목적 파악', description: '담화 전체의 흐름 및 핵심 주제 인지' },
    'WHEN_TIME': { label: '시점/기간 인지', description: '숫자 및 시간 관련 표현의 정확한 청취' },
    'WHY_REASON': { label: '이유/근거 분석', description: '특정 상황이 발생한 원인 파악' },
    'HOW_METHOD': { label: '방법/수단 이해', description: '행동의 방식이나 도구에 대한 인지' },
    'ACTION_NEXT': { label: '향후 행동 예측', description: '화자가 직후에 할 일에 대한 추론' },
    'IMPLY_MEANING': { label: '발화자 의도 추론', description: '문맥 속 숨은 의미(따옴표) 파악' },
    'GRAPHIC': { label: '시각 정보 매칭', description: '소리와 도표 정보의 동시 처리 능력' },

    // Part 5 - 1. Nouns etc
    'n1': { label: '명사 자리와 형태', description: '문장 내 주어/목적어 자리 명사 판단' },
    'n2': { label: '가산성과 수 일치', description: '가산/불가산 구분 및 동사 수 일치' },
    'n3': { label: '복합 명사 구조', description: '두 명사가 결합하여 하나의 명사가 되는 관용구' },
    'n4': { label: '사람 vs 사물 명사', description: '문맥에 따른 의미적 명사 구분' },
    'n5': { label: '특수 형태 명사', description: '동사와 형태가 같은 명사 등 주의가 필요한 유형' },
    'p1': { label: '인칭대명사 격', description: '주격, 소유격, 목적격 등 문장 내 역할 판단' },
    'p2': { label: '부정대명사 수 일치', description: 'Each, Some, None 등의 수 일치 규칙' },
    'p3': { label: '지시대명사 대상', description: 'That/Those 등이 지칭하는 대상 파악' },
    'p4': { label: '재귀대명사 용법', description: 'Self 형 대명사의 강조 및 재귀 용법' },
    'p5': { label: '단독 사용(own)', description: 'On one\'s own 등 소유 표현의 확장' },
    'p6': { label: '소유격 강조', description: '명사 앞 소유격을 강조하는 표현 판단' },
    'a1': { label: '명사 수식 형용사', description: '명사를 앞에서 한정하거나 수식하는 형용사' },
    'a2': { label: '2/5형식 보어 형용사', description: '동사 뒤에서 주어나 목적어를 보충하는 형용사' },
    'a3': { label: '분사형 형용사', description: 'Interested, Interesting 등 분사 형태의 형용사' },
    'a4': { label: '수량 형용사 일치', description: 'Many, Much 등 뒤에 오는 명사와 일치 여부' },
    'a5': { label: '형용사 숙어(eligible)', description: 'Be eligible for 등 특정 뒤따르는 전치사 매칭' },
    'a6': { label: '후치 수식 형용사', description: 'Available 등 명사 뒤에서 수식하는 특수 케이스' },
    'av1': { label: '부사 위치 판단', description: '문장 전체나 동사, 형용사 수식을 위한 위치' },
    'av2': { label: '형용사/부사 수식', description: '부사가 다른 부사나 형용사를 보강하는 구조' },
    'av3': { label: '빈도/접속부사 용법', description: 'Always, However 등 문맥 연결 및 빈도 표현' },

    // Part 5 - 2. Verbs
    'v1': { label: '주어-동사 수 일치', description: '주어의 단복수에 따른 동사 형태 일치' },
    'v2': { label: '동사 능동태/수동태', description: '주어의 의지에 따른 행위의 방향성 판단' },
    'v3': { label: '수동태 세부 형태', description: 'Be pp 뒤 전치사구나 수식어구 동반 패턴' },
    'v4': { label: '시점 부사-시제 일치', description: 'Since, Currently 등 단서 부사와 시제 일치' },
    'v5': { label: '당위/가정법 that절', description: 'Suggest/Insist that (should) do 구문' },
    'v6': { label: '조동사 뒤 원형', description: 'May, Can, Will 등 조동사 뒤 필수 원형' },
    'v7': { label: '자/타동사 구분', description: '목적어 유무에 따른 동사 성질 판단' },
    'v8': { label: '5형식 동사 패턴', description: 'Keep/Make/Find + O + OC 구조 이해' },
    'i1': { label: 'To부정사 명사적 용법', description: '문장 내 주어, 목적어 자리에 위치한 To v' },
    'i2': { label: '형용사적 용법', description: '명사 뒤에서 수식하는 To v' },
    'i3': { label: '부사적(목적) 용법', description: '~하기 위해서(In order to)의 의미 분석' },
    'i4': { label: 'To v vs ing 구분', description: '특정 동사가 목적어로 취하는 형태 판단' },
    'i5': { label: '의문사 + To v', description: 'How to do, What to do 등 구 형태의 명사 용법' },
    'i6': { label: '의미상 주어(for)', description: 'To부정사의 행위 주체를 명시하는 구조' },
    'g1': { label: '명사적 동명사', description: '전치사의 목적어로 사용된 -ing 형태' },
    'g2': { label: '동명사 vs 명사', description: '목적어 유무로 동명사와 명사 자리 구분' },
    'g3': { label: '-ing 명사 vs 동명사', description: 'Planning, Shipping 등 명사화된 단어 구분' },
    'g4': { label: '동명사 vs To부정사', description: '맥락에 따른 적절한 준동사 선택' },
    'g5': { label: '관용 동명사', description: 'Look forward to -ing 등 관용적 표현' },
    'pa1': { label: '명사 앞 분사 수식', description: 'Updated report 등 형용사화된 분사' },
    'pa2': { label: '명사 뒤 분사 수식', description: 'The people (who are) working... 형태 분석' },
    'pa3': { label: '보어 자리 분사', description: '감정 동사(Excited/Exciling) 등의 보어 역할' },
    'pa4': { label: '분사구문 구조', description: 'While doing, Doing... 주절과 연결된 분사' },
    'pa5': { label: '관용 분사', description: 'Providing that 등 접속사화된 분사 패턴' },

    // Part 5 - 3. Clauses etc
    'nc1': { label: 'That/What 명사절', description: '완전/불완전 여부에 따른 명사절 접속사' },
    'nc2': { label: 'Whether/If 명사절', description: '~인지 아닌지 의미를 갖는 목적어절' },
    'nc3': { label: '의문사절 구조', description: '간접 의문문 어순 및 의미 파악' },
    'nc4': { label: '복합관계사(whoever)', description: '전체 문장 내 격과 역할을 고려한 선택' },
    'nc5': { label: '의문사+To v 절', description: '명사 역할을 하는 압축된 의문사절' },
    'ac1': { label: '관계대명사 격 선택', description: '선행사 종류와 관계절 내 빈 자리 판단' },
    'ac2': { label: 'That vs Which', description: '제한적 용법 및 계속적 용법 구분' },
    'ac3': { label: '부분 표시(all of whom)', description: '부분 명사 뒤 관계대명사 대칭 일치' },
    'ac4': { label: '전치사 + 관계사', description: '관계절 뒤 전치사가 관계사 앞으로 이동한 형태' },
    'ac5': { label: '관계사 생략 구조', description: '목적격 관계대명사의 생략 및 문장 구조 분석' },
    'ac6': { label: '관계부사 vs 대명사', description: '뒷 문장의 성분 완결성 여부로 판단' },
    'c1': { label: '등위/병렬 구조', description: 'And, But, Or를 통한 문법적 대칭' },
    'c2': { label: '상관접속사', description: 'Both A and B, Not only A but also B 규칙' },
    'c3': { label: '종속(부사절) 접속사', description: 'Because, although 등 의미 연결 판단' },
    'c4': { label: '접속사 vs 전치사', description: '절을 수반하는지 명사구를 수반하는지 구분' },
    'c5': { label: '축약 분사 구문', description: '접속사가 살아있는 분사구문의 형태 이해' },
    'pr1': { label: '단순 전치사 의미', description: '장소, 시간, 방향 등 기본 전치사 해석' },
    'pr2': { label: '전치사 vs 접속부사', description: '문맥은 같으나 문법적 성질이 다른 어휘 구분' },
    'pr3': { label: '전치사 + 동명사구', description: '특정 전치사 뒤의 동명사 관용 표현' },
    'pr4': { label: '자동사+전치사 숙어', description: 'Reply to, Comply with 등 고정된 짝꿍' },
    'pr5': { label: '복합 전치사(due to)', description: '두 개 이상의 단어가 결합한 전치사구' },
    'com1': { label: '원급/비교급 구조', description: 'As...as, more...than 등 기본 비교 형태' },
    'com2': { label: '비교급 수식 부사', description: 'Much, Far, Even 등 비교급 강조 위치' },
    'com3': { label: '최상급 강조 용법', description: 'By far the best 등 최상급 보강 표현' },
    'com4': { label: '관용 비교 표현', description: 'The more... the more 등 관용 구문' },
    's1': { label: '가정법 시제 짝꿍', description: 'If...did, would do / If...had pp, would have pp' },
    's2': { label: '가정법 If 생략 도치', description: 'Should you have, Had I known 등 특수 구문' },
    'inv1': { label: '조건절 도치', description: '가정법 및 조건절의 If 생략 시 도치' },
    'inv2': { label: '부정어 도치', description: 'Never, Rarely 등 부정어 문두 도치' },
    'inv3': { label: '보어/부사구 도치', description: '강조를 위한 장소 부사구 및 보어 역전' },
    'inv4': { label: 'Only 도치', description: 'Only after, Only then 등으로 시작하는 절' },
    'inv5': { label: 'So/Neither 도치', description: '맞장구 표현에서의 주어 동사 도치' },

    // Part 5 - 4. Vocab
    'voc1': { label: '순수 의미 어휘', description: '단어의 정확한 사전적 정의와 활용' },
    'voc2': { label: '연어(Collocation)', description: '자주 함께 쓰이는 단어들의 조합' },
    'voc3': { label: '상황별 뉘앙스 구분', description: '비슷한 의미 중 문맥에 더 적절한 어휘 선택' },
    'voc4': { label: '고정 관용구(Idiom)', description: '개별 단어 의미를 넘어서는 고정 표현' },

    // Part 6
    'P6_GRAMMAR': { label: '문맥 일관 문법 판단', description: '지문 전체의 흐름을 고려한 시제/태 판단' },
    'P6_VOCABULARY': { label: '전체 맥락 어휘 추론', description: '문단 간 논리 연결을 고려한 최적 어휘' },
    'P6_SENTENCE_INSERTION': { label: '장문 삽입 논리성', description: '전후 문맥을 고려한 올바른 문장 위치' },
    'P6_CONNECTIVE': { label: '문맥 연결어구 판단', description: '문장과 문장을 잇는 부사/접속사 등의 논리적 연결어 선택' },

    // Part 7
    'P7_PURPOSE': { label: '글의 목적 및 핵심 취지', description: '발신 동기 및 글 전체가 지향하는 핵심 목표 파악' },
    'P7_DETAIL': { label: '명시적 사실 관계 확인', description: '지문에 기록된 객관적 팩트의 정확한 검색' },
    'P7_NEGATIVE': { label: '불일치 정보(NOT) 판별', description: '사실과 다른 내용을 가려내는 변별력' },
    'P7_INFERENCE': { label: '고난도 암시 내용 추론', description: '정황 증거만으로 유추 가능한 결론 도출' },
    'P7_VOCABULARY': { label: '문맥상 최적 유의어', description: '현재 문맥에 가장 적절한 동의어 치환 능력' },
    'P7_INSERTION': { label: '문장 내 최적 위치 선정', description: '지시어 등을 통한 문장의 기하학적 위치 판단' },
    'P7_GRAPHIC': { label: '시각 자료-텍스트 통합', description: '도표와 지문 연계를 통한 다각적 정보 분석' },
    'P7_LOCATION': { label: '정보 근거 위치 검색', description: '특정 답변의 증거가 위치한 단락 식별' },
    'P7_INTENTION': { label: '발화의도 정밀 분석', description: '채팅/메시지 내 특정 어구(" ")의 문맥적 의도 파악' },
    'P7_LINK': { label: '다중지문 연계 추론', description: '두 개 이상의 지문 정보를 결합하여 정답 도출' },

    // Passage Group
    'P1_CORR': { label: '서신/이메일 독해력', description: '편지 유형의 전형적 비즈니스 소통 구조 이해' },
    'P2_OFFI': { label: '공문/안내문 독해력', description: '공식 정보의 핵심 전달 사항 인지' },
    'P3_MEDI': { label: '기사/보고서 독해력', description: '사실 중심 텍스트의 전문 정보 해독' },
    'P4_MARK': { label: '홍보/광고/웹페이지', description: '마케팅 목적 지문의 세부 조건 파악' },
    'P5_FORM': { label: '비즈니스 양식/영수증', description: '영수증, 송장 등 정형화된 데이터의 신속 처리' },
    'P6_RULE': { label: '규정 및 지침서 독해', description: '지침서의 상세 조건부 문항 분석' },
    'P7_CONV': { label: '메시지/채팅 대화', description: '채팅 지문의 구어체 흐름 파악 실력' },
    'P8_VISU': { label: '도표 및 시각 자료 연계', description: '시각 정보를 통합하여 해석하는 실력' },
};
