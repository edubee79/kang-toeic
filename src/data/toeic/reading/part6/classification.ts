import { TOEIC_TAG_REGISTRY } from "../../../types/toeic-standards";

export const Part6ClassificationMap: Record<string, string> = {
    "P6_GRAMMAR": TOEIC_TAG_REGISTRY["P6_GRAMMAR"].label,
    "P6_VOCABULARY": TOEIC_TAG_REGISTRY["P6_VOCABULARY"].label,
    "P6_SENTENCE_INSERTION": TOEIC_TAG_REGISTRY["P6_SENTENCE_INSERTION"].label
};

export function getPart6ClassificationLabel(code: string | undefined): string {
    if (!code) return "분류 없음";
    return Part6ClassificationMap[code] || code;
}
