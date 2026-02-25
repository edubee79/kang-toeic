// V4 Multi-Passage Tests (1-10) - Double/Triple (Vol 4)
import { PracticeSet } from '../../v4/reading/part7/multi/types';
import { test1MultiData } from '../../v4/reading/part7/multi/v4_p7_t01_multi';
import { test2MultiData } from '../../v4/reading/part7/multi/v4_p7_t02_multi';
import { test3MultiData } from '../../v4/reading/part7/multi/v4_p7_t03_multi';
import { test4MultiData } from '../../v4/reading/part7/multi/v4_p7_t04_multi';
import { test5MultiData } from '../../v4/reading/part7/multi/v4_p7_t05_multi';
import { test6MultiData } from '../../v4/reading/part7/multi/v4_p7_t06_multi';
import { test7MultiData } from '../../v4/reading/part7/multi/v4_p7_t07_multi';
import { test8MultiData } from '../../v4/reading/part7/multi/v4_p7_t08_multi';
import { test9MultiData } from '../../v4/reading/part7/multi/v4_p7_t09_multi';
import { test10MultiData } from '../../v4/reading/part7/multi/v4_p7_t10_multi';

export type { PracticeSet, PracticePassage, PracticeQuestion } from '../../v4/reading/part7/multi/types';

// Helper to inject Vol/Test ID info into each item of the array
const withMeta = (sets: PracticeSet[], vol: number, testId: number): PracticeSet[] => {
    return sets.map(set => ({
        ...set,
        vol,
        testId: testId // Injecting testId for easier tracking
    } as PracticeSet & { testId?: number }));
};

export const part7MultiTestData = {
    test1: withMeta(test1MultiData, 4, 1),
    test2: withMeta(test2MultiData, 4, 2),
    test3: withMeta(test3MultiData, 4, 3),
    test4: withMeta(test4MultiData, 4, 4),
    test5: withMeta(test5MultiData, 4, 5),
    test6: withMeta(test6MultiData, 4, 6),
    test7: withMeta(test7MultiData, 4, 7),
    test8: withMeta(test8MultiData, 4, 8),
    test9: withMeta(test9MultiData, 4, 9),
    test10: withMeta(test10MultiData, 4, 10)
};

// Also export as an array if needed (flattened or structured)
// Keeping original structure logic
export const part7MultiTestArray = [
    part7MultiTestData.test1,
    part7MultiTestData.test2,
    part7MultiTestData.test3,
    part7MultiTestData.test4,
    part7MultiTestData.test5,
    part7MultiTestData.test6,
    part7MultiTestData.test7,
    part7MultiTestData.test8,
    part7MultiTestData.test9,
    part7MultiTestData.test10
];
