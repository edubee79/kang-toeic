/**
 * Standardized Passage Types for RC Part 6 & 7
 * Maps raw data types to standardized codes for weakness analysis.
 */

export const RC_PASSAGE_TYPE_MAP: Record<string, string> = {
    // P1. Correspondence
    "EMAIL": "P1_EMAIL",
    "E-MAIL": "P1_EMAIL",
    "LETTER": "P1_LETTER",

    // P2. Official Documents
    "NOTICE": "P2_NOTICE",
    "ANNOUNCEMENT": "P2_ANNOUNCEMENT",
    "PRESS RELEASE": "P2_ANNOUNCEMENT",
    "PRESS_RELEASE": "P2_ANNOUNCEMENT",
    "MEMO": "P2_MEMO",

    // P3. Informative / Media
    "ARTICLE": "P3_ARTICLE",
    "REPORT": "P3_REPORT",
    "REVIEW": "P3_REVIEW",

    // P4. Marketing / Web
    "ADVERTISEMENT": "P4_AD",
    "WEB ADVERTISEMENT": "P4_AD",
    "AD": "P4_AD",
    "BROCHURE": "P4_AD",
    "WEBPAGE": "P4_WEB",
    "WEB PAGE": "P4_WEB",
    "INTRODUCTION": "P4_WEB",

    // P5. Business Forms & Records
    "FORM": "P5_FORM",
    "SURVEY": "P5_FORM",
    "SURVEY FORM": "P5_FORM",
    "RECEIPT": "P5_RECEIPT",
    "INVOICE": "P5_RECEIPT",
    "SCHEDULE": "P5_SCHEDULE",
    "ITINERARY": "P5_SCHEDULE",
    "PROGRAM": "P5_SCHEDULE",

    // P6. Rules & Instructions
    "INSTRUCTIONS": "P6_INSTRUCTION",
    "POLICY": "P6_POLICY",
    "MANUAL": "P6_INSTRUCTION",

    // P7. Conversations
    "TEXT_MESSAGE": "P7_TEXT",
    "TEXT MESSAGE": "P7_TEXT",
    "CHAT_MESSAGE": "P7_TEXT",
    "CHAT": "P7_TEXT",

    // P8. Graphics
    "CHART": "P8_CHART",
    "GRAPHIC": "P8_CHART",
    "INVITATION": "P5_FORM", // Categorize invitation under form/etc. Or give it a new category.
};

export function getStandardizedPassageType(rawType: string | undefined): string {
    if (!rawType) return "Unknown";
    const upper = rawType.toUpperCase();
    return RC_PASSAGE_TYPE_MAP[upper] || RC_PASSAGE_TYPE_MAP[rawType] || upper;
}

export function getPassageTypeLabel(code: string): string {
    const labels: Record<string, string> = {
        "P1_EMAIL": "이메일",
        "P1_LETTER": "편지",
        "P2_NOTICE": "공지",
        "P2_ANNOUNCEMENT": "공표/성명",
        "P2_MEMO": "메모",
        "P3_ARTICLE": "기사",
        "P3_REPORT": "보고서",
        "P3_REVIEW": "리뷰",
        "P4_AD": "광고",
        "P4_WEB": "웹페이지",
        "P5_FORM": "양식/설문",
        "P5_RECEIPT": "영수증/송장",
        "P5_SCHEDULE": "일정표",
        "P6_INSTRUCTION": "지침/매뉴얼",
        "P6_POLICY": "규정/방침",
        "P7_TEXT": "문자/메시지",
        "P8_CHART": "도표/그래픽",
    };
    return labels[code] || code;
}
