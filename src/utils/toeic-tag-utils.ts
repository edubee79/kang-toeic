import { TOEIC_TAG_REGISTRY, ToeicTag } from '@/types/toeic-standards';

export const getToeicTagLabel = (tag: string, part?: string): string => {
    // 1. Exact match
    const metadata = TOEIC_TAG_REGISTRY[tag as ToeicTag];
    if (metadata) return metadata.label;

    const cleanTag = tag.trim();

    // 2. Base Code extraction (e.g., "B4. 일반문의" -> "B4", "A1 (announcement_general)" -> "A1")
    // Match the first letter + numbers (optional underscores)
    const match = cleanTag.match(/^([A-Z]\d+)(?:_[a-z]+)?/i);

    if (match) {
        const baseCode = match[1].toUpperCase();

        // 3. For Part 4: Auto-map base codes to Part 4 specific keys (e.g., A1 -> A1_ann)
        if (part && (part.includes('p4') || part.includes('part4'))) {
            const possibleP4Keys = Object.keys(TOEIC_TAG_REGISTRY).filter(k => k.startsWith(`${baseCode}_`));
            if (possibleP4Keys.length > 0) {
                return TOEIC_TAG_REGISTRY[possibleP4Keys[0] as ToeicTag].label;
            }
        }

        // 4. Fallback: try direct baseCode match
        const fallbackMetadata = TOEIC_TAG_REGISTRY[baseCode as ToeicTag];
        if (fallbackMetadata) {
            return fallbackMetadata.label;
        }
    }

    // 5. Keep original if totally unmatchable
    return tag;
};
