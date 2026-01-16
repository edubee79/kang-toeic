export const Part6ClassificationMap: Record<string, string> = {
    // Structural / Logic
    "P6_SENTENCE_INSERT": "문장 삽입 (Sentence Insertion)",
    "P6_CONNECTION": "연결어 (Conjunctions/Adverbs)",

    // Grammar
    "P6_GRAMMAR_TENSE": "동사 시제/태 (Tense/Voice)",
    "P6_GRAMMAR_FORM": "품사 자리 (Parts of Speech)",
    "P6_GRAMMAR_PREP": "전치사 (Prepositions)",

    // Vocabulary
    "P6_VOCAB_CONTEXT": "문맥 어휘 (Contextual Vocabulary)",
    "P6_VOCAB_PHRASE": "관용구/숙어 (Phrases/Idioms)",
};

export function getPart6ClassificationLabel(code: string | undefined): string {
    if (!code) return "분류 없음";
    return Part6ClassificationMap[code] || code;
}
