// V3 Multi-Passage Tests
import { test1MultiData as v3_t1 } from '../../v3/reading/part7/multi/v3_p7_t01_multi';
import { test2MultiData as v3_t2 } from '../../v3/reading/part7/multi/v3_p7_t02_multi';
import { test3MultiData as v3_t3 } from '../../v3/reading/part7/multi/v3_p7_t03_multi';
import { test4MultiData as v3_t4 } from '../../v3/reading/part7/multi/v3_p7_t04_multi';
import { test5MultiData as v3_t5 } from '../../v3/reading/part7/multi/v3_p7_t05_multi';
import { test6MultiData as v3_t6 } from '../../v3/reading/part7/multi/v3_p7_t06_multi';
import { test7MultiData as v3_t7 } from '../../v3/reading/part7/multi/v3_p7_t07_multi';
import { test8MultiData as v3_t8 } from '../../v3/reading/part7/multi/v3_p7_t08_multi';


// V4 Multi-Passage Tests (1-10) - Double/Triple (Vol 4)
import { PracticeSet } from '../../v4/reading/part7/multi/types';
import { test1MultiData as v4_t1 } from '../../v4/reading/part7/multi/v4_p7_t01_multi';
import { test2MultiData as v4_t2 } from '../../v4/reading/part7/multi/v4_p7_t02_multi';
import { test3MultiData as v4_t3 } from '../../v4/reading/part7/multi/v4_p7_t03_multi';
import { test4MultiData as v4_t4 } from '../../v4/reading/part7/multi/v4_p7_t04_multi';
import { test5MultiData as v4_t5 } from '../../v4/reading/part7/multi/v4_p7_t05_multi';
import { test6MultiData as v4_t6 } from '../../v4/reading/part7/multi/v4_p7_t06_multi';
import { test7MultiData as v4_t7 } from '../../v4/reading/part7/multi/v4_p7_t07_multi';
import { test8MultiData as v4_t8 } from '../../v4/reading/part7/multi/v4_p7_t08_multi';
import { test9MultiData as v4_t9 } from '../../v4/reading/part7/multi/v4_p7_t09_multi';
import { test10MultiData as v4_t10 } from '../../v4/reading/part7/multi/v4_p7_t10_multi';

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
    // Volume 3
    v3: {
        test1: withMeta(v3_t1, 3, 1),
        test2: withMeta(v3_t2, 3, 2),
        test3: withMeta(v3_t3, 3, 3),
        test4: withMeta(v3_t4, 3, 4),
        test5: withMeta(v3_t5, 3, 5),
        test6: withMeta(v3_t6, 3, 6),
        test7: withMeta(v3_t7, 3, 7),
        test8: withMeta(v3_t8, 3, 8)
    },
    // Volume 4
    v4: {
        test1: withMeta(v4_t1, 4, 1),
        test2: withMeta(v4_t2, 4, 2),
        test3: withMeta(v4_t3, 4, 3),
        test4: withMeta(v4_t4, 4, 4),
        test5: withMeta(v4_t5, 4, 5),
        test6: withMeta(v4_t6, 4, 6),
        test7: withMeta(v4_t7, 4, 7),
        test8: withMeta(v4_t8, 4, 8),
        test9: withMeta(v4_t9, 4, 9),
        test10: withMeta(v4_t10, 4, 10)
    },
    // Backward Compatibility aliases (default to V4)
    test1: withMeta(v4_t1, 4, 1),
    test2: withMeta(v4_t2, 4, 2),
    test3: withMeta(v4_t3, 4, 3),
    test4: withMeta(v4_t4, 4, 4),
    test5: withMeta(v4_t5, 4, 5),
    test6: withMeta(v4_t6, 4, 6),
    test7: withMeta(v4_t7, 4, 7),
    test8: withMeta(v4_t8, 4, 8),
    test9: withMeta(v4_t9, 4, 9),
    test10: withMeta(v4_t10, 4, 10)
};

// Also export as an array if needed (flattened or structured)
export const part7MultiTestArray = [
    // V3
    part7MultiTestData.v3.test1,
    part7MultiTestData.v3.test2,
    part7MultiTestData.v3.test3,
    part7MultiTestData.v3.test4,
    part7MultiTestData.v3.test5,
    part7MultiTestData.v3.test6,
    part7MultiTestData.v3.test7,
    part7MultiTestData.v3.test8,

    // V4
    part7MultiTestData.v4.test1,
    part7MultiTestData.v4.test2,
    part7MultiTestData.v4.test3,
    part7MultiTestData.v4.test4,
    part7MultiTestData.v4.test5,
    part7MultiTestData.v4.test6,
    part7MultiTestData.v4.test7,
    part7MultiTestData.v4.test8,
    part7MultiTestData.v4.test9,
    part7MultiTestData.v4.test10
];

