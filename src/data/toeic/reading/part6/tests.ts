// V3 Tests (1-10) -> Vol 3
import { Part6TestSet } from '../../v3/reading/part6/types';
import { test1Data } from '../../v3/reading/part6/v3_p6_t01';
import { test2Data } from '../../v3/reading/part6/v3_p6_t02';
import { test3Data } from '../../v3/reading/part6/v3_p6_t03';
import { test4Data } from '../../v3/reading/part6/v3_p6_t04';
import { test5Data } from '../../v3/reading/part6/v3_p6_t05';
import { test6Data } from '../../v3/reading/part6/v3_p6_t06';
import { test7Data } from '../../v3/reading/part6/v3_p6_t07';
import { test8Data } from '../../v3/reading/part6/v3_p6_t08';
import { test9Data } from '../../v3/reading/part6/v3_p6_t09';
import { test10Data } from '../../v3/reading/part6/v3_p6_t10';

// V4 Tests (11) -> Vol 4 Test 10
import { test11Data } from '../../v4/reading/part6/v4_p6_t11';

export type { Part6TestSet, Part6Passage, Part6Question } from '../../v3/reading/part6/types';

// Helper to inject Vol/Test info safely
const withMeta = (data: Part6TestSet, vol: number, testId?: number, title?: string): Part6TestSet => ({
    ...data,
    vol,
    testId: testId || data.testId,
    title: title || data.title || `Part 6 Vol ${vol} Test ${testId || data.testId}`
});

export const part6TestData: Part6TestSet[] = [
    // Vol 3: Tests 1-10
    withMeta(test1Data, 3),
    withMeta(test2Data, 3),
    withMeta(test3Data, 3),
    withMeta(test4Data, 3),
    withMeta(test5Data, 3),
    withMeta(test6Data, 3),
    withMeta(test7Data, 3),
    withMeta(test8Data, 3),
    withMeta(test9Data, 3),
    withMeta(test10Data, 3),

    // Vol 4: Test 11 -> Test 10 (User Mapping)
    withMeta(test11Data, 4, 10, "Part 6 Vol 4 Test 10")
];
