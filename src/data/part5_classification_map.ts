export const PART5_CLASSIFICATION_MAP: Record<string, string> = {
    // 1. Grammar Questions
    // 1.1 Part of Speech
    "P5_POS_NOUN": "문법: 명사 자리",
    "P5_POS_ADJ": "문법: 형용사/분사 자리",
    "P5_POS_ADV": "문법: 부사 자리",
    "P5_POS_VERB": "문법: 동사 자리",

    // 1.2 Verb Forms
    "P5_VERB_TENSE": "문법: 동사 시제",
    "P5_VERB_VOICE": "문법: 능동태/수동태",
    "P5_VERB_AGREEMENT": "문법: 수 일치",

    // 1.3 Prepositions & Conjunctions
    "P5_PREP": "문법: 전치사",
    "P5_CONJ": "문법: 접속사",

    // 1.4 Pronouns
    "P5_PRONOUN": "문법: 대명사",

    // 1.5 Comparatives
    "P5_COMPARISON": "문법: 비교급/최상급",

    // 1.6 Infinitive/Gerund
    "P5_INFINITIVE_GERUND": "문법: To부정사/동명사",

    // 1.7 Relative Pronouns
    "P5_RELATIVE": "문법: 관계사",

    // 2. Vocabulary Questions
    "P5_VOCAB_NOUN": "어휘: 명사",
    "P5_VOCAB_VERB": "어휘: 동사",
    "P5_VOCAB_ADJ": "어휘: 형용사",
    "P5_VOCAB_ADV": "어휘: 부사",
    "P5_VOCAB_PHRASE": "어휘: 숙어/관용구",

    // Legacy Support (Optional, can be removed if fully migrated)
    "G_POS": "문법: 품사 (구형)",
    "G_VERB": "문법: 동사구 (구형)",
    "V_ADJ": "어휘: 형용사 (구형)",
    "V_NOUN": "어휘: 명사 (구형)",
    "V_VERB": "어휘: 동사 (구형)",
    "V_ADV": "어휘: 부사 (구형)",
    "G_CONJ": "문법: 접속사/전치사 (구형)"
};

export const getClassificationLabel = (code?: string) => {
    if (!code) return "유형 미분류";
    return PART5_CLASSIFICATION_MAP[code] || code;
};
