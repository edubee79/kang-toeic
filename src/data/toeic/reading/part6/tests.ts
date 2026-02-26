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
import { test01Data as v4Test01 } from '../../v4/reading/part6/v4_p6_t01';
import { test02Data as v4Test02 } from '../../v4/reading/part6/v4_p6_t02';
import { test03Data as v4Test03 } from '../../v4/reading/part6/v4_p6_t03';
import { test04Data as v4Test04 } from '../../v4/reading/part6/v4_p6_t04';
import { test05Data as v4Test05 } from '../../v4/reading/part6/v4_p6_t05';
import { test06Data as v4Test06 } from '../../v4/reading/part6/v4_p6_t06';
import { test07Data as v4Test07 } from '../../v4/reading/part6/v4_p6_t07';
import { test08Data as v4Test08 } from '../../v4/reading/part6/v4_p6_t08';
import { test09Data as v4Test09 } from '../../v4/reading/part6/v4_p6_t09';
import { test10Data as v4Test10 } from '../../v4/reading/part6/v4_p6_t10';

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

    // Vol 4: Tests 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    withMeta(v4Test01, 4, 1, "Part 6 Vol 4 Test 1"),
    withMeta(v4Test02, 4, 2, "Part 6 Vol 4 Test 2"),
    withMeta(v4Test03, 4, 3, "Part 6 Vol 4 Test 3"),
    withMeta(v4Test04, 4, 4, "Part 6 Vol 4 Test 4"),
    withMeta(v4Test05, 4, 5, "Part 6 Vol 4 Test 5"),
    withMeta(v4Test06, 4, 6, "Part 6 Vol 4 Test 6"),
    withMeta(v4Test07, 4, 7, "Part 6 Vol 4 Test 7"),
    withMeta(v4Test08, 4, 8, "Part 6 Vol 4 Test 8"),
    withMeta(v4Test09, 4, 9, "Part 6 Vol 4 Test 9"),
    withMeta(v4Test10, 4, 10, "Part 6 Vol 4 Test 10")
];
