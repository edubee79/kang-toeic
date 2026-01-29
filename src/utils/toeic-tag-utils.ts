import { TOEIC_TAG_REGISTRY, ToeicTag } from '@/types/toeic-standards';

export const getToeicTagLabel = (tag: string): string => {
    const metadata = TOEIC_TAG_REGISTRY[tag as ToeicTag];
    return metadata ? metadata.label : tag;
};
