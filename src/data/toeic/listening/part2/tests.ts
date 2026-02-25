import { Part2TestSet } from './types';
import { test1Data as v3_t01 } from '../../v3/listening/part2/v3_p2_t01';
import { test2Data as v3_t02 } from '../../v3/listening/part2/v3_p2_t02';
import { test3Data as v3_t03 } from '../../v3/listening/part2/v3_p2_t03';
import { test4Data as v3_t04 } from '../../v3/listening/part2/v3_p2_t04';
import { test5Data as v3_t05 } from '../../v3/listening/part2/v3_p2_t05';
import { test6Data as v3_t06 } from '../../v3/listening/part2/v3_p2_t06';
import { test7Data as v3_t07 } from '../../v3/listening/part2/v3_p2_t07';
import { test8Data as v3_t08 } from '../../v3/listening/part2/v3_p2_t08';
import { test9Data as v3_t09 } from '../../v3/listening/part2/v3_p2_t09';
import { test10Data as v3_t10 } from '../../v3/listening/part2/v3_p2_t10';

import { test1Data as v4_t01 } from '../../v4/listening/part2/v4_p2_t01';
import { test2Data as v4_t02 } from '../../v4/listening/part2/v4_p2_t02';
import { test3Data as v4_t03 } from '../../v4/listening/part2/v4_p2_t03';
import { test4Data as v4_t04 } from '../../v4/listening/part2/v4_p2_t04';
import { test5Data as v4_t05 } from '../../v4/listening/part2/v4_p2_t05';
import { test6Data as v4_t06 } from '../../v4/listening/part2/v4_p2_t06';
import { test7Data as v4_t07 } from '../../v4/listening/part2/v4_p2_t07';
import { test8Data as v4_t08 } from '../../v4/listening/part2/v4_p2_t08';
import { test9Data as v4_t09 } from '../../v4/listening/part2/v4_p2_t09';
import { test10Data as v4_t10 } from '../../v4/listening/part2/v4_p2_t10';

export * from './types';

export interface Part2Test {
    vol: number;
    testId: number;
    questions: Part2TestSet;
}

export const part2RealTests: Part2Test[] = [
    // Volume 3 (Tests 1-10)
    { vol: 3, testId: 1, questions: v3_t01 },
    { vol: 3, testId: 2, questions: v3_t02 },
    { vol: 3, testId: 3, questions: v3_t03 },
    { vol: 3, testId: 4, questions: v3_t04 },
    { vol: 3, testId: 5, questions: v3_t05 },
    { vol: 3, testId: 6, questions: v3_t06 },
    { vol: 3, testId: 7, questions: v3_t07 },
    { vol: 3, testId: 8, questions: v3_t08 },
    { vol: 3, testId: 9, questions: v3_t09 },
    { vol: 3, testId: 10, questions: v3_t10 },
    // Volume 4 (Tests 1-5)
    { vol: 4, testId: 1, questions: v4_t01 },
    { vol: 4, testId: 2, questions: v4_t02 },
    { vol: 4, testId: 3, questions: v4_t03 },
    { vol: 4, testId: 4, questions: v4_t04 },
    { vol: 4, testId: 5, questions: v4_t05 },
    { vol: 4, testId: 6, questions: v4_t06 },
    { vol: 4, testId: 7, questions: v4_t07 },
    { vol: 4, testId: 8, questions: v4_t08 },
    { vol: 4, testId: 9, questions: v4_t09 },
    { vol: 4, testId: 10, questions: v4_t10 }
];
