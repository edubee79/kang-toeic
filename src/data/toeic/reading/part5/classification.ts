const PART5_CLASSIFICATION_MAP: Record<string, string> = {
    // 1. 품사 및 문장 구조
    "P5_POS_NOUN": "문법: 명사 자리",
    "P5_POS_ADJ": "문법: 형용사 자리",
    "P5_POS_ADV": "문법: 부사 자리",
    "P5_POS_VERB": "문법: 동사 자리",

    // 2. 동사 형태
    "P5_V_AGREE": "문법: 주어-동사 수 일치",
    "P5_V_TENSE": "문법: 동사의 시제",
    "P5_V_VOICE": "문법: 능동태 vs 수동태",
    "P5_V_MODAL": "문법: 조동사 정복",

    // 3. 준동사
    "P5_NF_TO": "문법: To부정사 용법",
    "P5_NF_ING": "문법: 동명사 활용",
    "P5_NF_PART": "문법: 분사의 형용사적 수식",
    "P5_NF_PCONS": "문법: 분사구문",

    // 4. 대명사
    "P5_PR_CASE": "문법: 인칭대명사의 격",
    "P5_PR_SELF": "문법: 재귀대명사 및 관용구",
    "P5_PR_DEMO": "문법: 지시대명사",
    "P5_PR_INDEF": "문법: 부정대명사",

    // 5. 전치사
    "P5_PREP_TIME": "문법: 시간/시점 전치사",
    "P5_PREP_PLAC": "문법: 장소/위치 전치사",
    "P5_PREP_DIRC": "문법: 방향/수단 전치사",
    "P5_PREP_PHRA": "문법: 전치사 관용구",

    // 6. 접속사
    "P5_CONJ_NOUN": "문법: 명사절 접속사",
    "P5_CONJ_ADV": "문법: 부사절 접속사",
    "P5_CONJ_CORR": "문법: 상관 접속사",
    "P5_CONJ_COOR": "문법: 등위 접속사 및 병렬",

    // 7. 관계사
    "P5_REL_PR": "문법: 관계대명사",
    "P5_REL_ADV": "문법: 관계부사",

    // 8. 어휘
    "P5_VOC_NOUN": "어휘: 명사",
    "P5_VOC_VERB": "어휘: 동사",
    "P5_VOC_ADJ": "어휘: 형용사",
    "P5_VOC_ADV": "어휘: 부사",
    "P5_VOC_PHRA": "어휘: 관용어/숙어",

    // 9. 기타/심화
    "P5_COMPARIS": "문법: 비교/최상급",
    "P5_SPECIAL": "문법: 고득점 특수구문(도치/가정법)",
};

const TAG_ALIASES: Record<string, string> = {
    // Legacy Tags -> Standard Tags
    "P5_PRONOUN": "P5_PR_CASE",
    "pronoun": "P5_PR_CASE",
    "P5_VOCAB_ADJ": "P5_VOC_ADJ",
    "P5_VOCAB_NOUN": "P5_VOC_NOUN",
    "P5_VOCAB_VERB": "P5_VOC_VERB",
    "P5_VOCAB_ADV": "P5_VOC_ADV",
    "P5_PREP": "P5_PREP_PHRA",
    "prep": "P5_PREP_PHRA",
    "conj": "P5_CONJ_ADV",
    "P5_VERB_AGREEMENT": "P5_V_AGREE",
    "P5_VERB_VOICE": "P5_V_VOICE",
    "P5_V_AGREEMENT": "P5_V_AGREE",
    "P5_POS_ADJ": "P5_POS_ADJ",
    "P5_POS_NOUN": "P5_POS_NOUN",
    "P5_POS_ADV": "P5_POS_ADV",
    "P5_POS_VERB": "P5_POS_VERB",
};

const getClassificationLabel = (code?: string) => {
    if (!code) return "유형 미분류";

    // 1. Check if it's an alias
    const standardTag = TAG_ALIASES[code] || code;

    // 2. Resolve final label
    return PART5_CLASSIFICATION_MAP[standardTag] || standardTag;
};

export { PART5_CLASSIFICATION_MAP, TAG_ALIASES, getClassificationLabel };
