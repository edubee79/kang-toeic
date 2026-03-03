// V3 Test (1-2) - Single Passage (Vol 3)
import { test1Data as v3_test1Data } from '../../v3/reading/part7/single/v3_p7_t01';
import { test2Data as v3_test2Data } from '../../v3/reading/part7/single/v3_p7_t02';
import { test3Data as v3_test3Data } from '../../v3/reading/part7/single/v3_p7_t03';
import { test4Data as v3_test4Data } from '../../v3/reading/part7/single/v3_p7_t04';
import { test5Data as v3_test5Data } from '../../v3/reading/part7/single/v3_p7_t05';
import { test6Data as v3_test6Data } from '../../v3/reading/part7/single/v3_p7_t06';
import { test7Data as v3_test7Data } from '../../v3/reading/part7/single/v3_p7_t07';
import { test8Data as v3_test8Data } from '../../v3/reading/part7/single/v3_p7_t08';
import { test9Data as v3_test9Data } from '../../v3/reading/part7/single/v3_p7_t09';
import { test10Data as v3_test10Data } from '../../v3/reading/part7/single/v3_p7_t10';


// V4 Tests (1-10) - Single Passage (Vol 4)
import { Part7Test } from '../../v4/reading/part7/single/types';
import { test1Data } from '../../v4/reading/part7/single/v4_p7_t01';
import { test2Data } from '../../v4/reading/part7/single/v4_p7_t02';
import { test3Data } from '../../v4/reading/part7/single/v4_p7_t03';
import { test4Data } from '../../v4/reading/part7/single/v4_p7_t04';
import { test5Data } from '../../v4/reading/part7/single/v4_p7_t05';
import { test6Data } from '../../v4/reading/part7/single/v4_p7_t06';
import { test7Data } from '../../v4/reading/part7/single/v4_p7_t07';
import { test8Data } from '../../v4/reading/part7/single/v4_p7_t08';
import { test9Data } from '../../v4/reading/part7/single/v4_p7_t09';
import { test10Data } from '../../v4/reading/part7/single/v4_p7_t10';

export type { Part7Test, Part7Set, Part7Passage, Part7Question } from '../../v4/reading/part7/single/types';

// Helper to inject Vol info
const withVol = (data: Part7Test, vol: number): Part7Test => ({
    ...data,
    vol
});

export const part7TestData: Part7Test[] = [
    withVol(v3_test1Data, 3),
    withVol(v3_test2Data, 3),
    withVol(v3_test3Data, 3),
    withVol(v3_test4Data, 3),
    withVol(v3_test5Data, 3),
    withVol(v3_test6Data, 3),
    withVol(v3_test7Data, 3),
    withVol(v3_test8Data, 3),
    withVol(v3_test9Data, 3),
    withVol(v3_test10Data, 3),
    withVol(test1Data, 4),
    withVol(test2Data, 4),
    withVol(test3Data, 4),
    withVol(test4Data, 4),
    withVol(test5Data, 4),
    withVol(test6Data, 4),
    withVol(test7Data, 4),
    withVol(test8Data, 4),
    withVol(test9Data, 4),
    withVol(test10Data, 4)
];
