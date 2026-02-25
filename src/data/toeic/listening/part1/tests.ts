import { Part1TestSet } from '../../v4/listening/types';

// V3 Data (Tests 1-10)
import { test1Data as v3_t1 } from '../../v3/listening/part1/v3_p1_t01';
import { test2Data as v3_t2 } from '../../v3/listening/part1/v3_p1_t02';
import { test3Data as v3_t3 } from '../../v3/listening/part1/v3_p1_t03';
import { test4Data as v3_t4 } from '../../v3/listening/part1/v3_p1_t04';
import { test5Data as v3_t5 } from '../../v3/listening/part1/v3_p1_t05';
import { test6Data as v3_t6 } from '../../v3/listening/part1/v3_p1_t06';
import { test7Data as v3_t7 } from '../../v3/listening/part1/v3_p1_t07';
import { test8Data as v3_t8 } from '../../v3/listening/part1/v3_p1_t08';
import { test9Data as v3_t9 } from '../../v3/listening/part1/v3_p1_t09';
import { test10Data as v3_t10 } from '../../v3/listening/part1/v3_p1_t10';

// V4 Data (Tests 1-10)
import { test1Data as v4_t1 } from '../../v4/listening/part1/v4_p1_t01';
import { test2Data as v4_t2 } from '../../v4/listening/part1/v4_p1_t02';
import { test3Data as v4_t3 } from '../../v4/listening/part1/v4_p1_t03';
import { test4Data as v4_t4 } from '../../v4/listening/part1/v4_p1_t04';
import { test5Data as v4_t5 } from '../../v4/listening/part1/v4_p1_t05';
import { test6Data as v4_t6 } from '../../v4/listening/part1/v4_p1_t06';
import { test7Data as v4_t7 } from '../../v4/listening/part1/v4_p1_t07';
import { test8Data as v4_t8 } from '../../v4/listening/part1/v4_p1_t08';
import { test9Data as v4_t9 } from '../../v4/listening/part1/v4_p1_t09';
import { test10Data as v4_t10 } from '../../v4/listening/part1/v4_p1_t10';

export type { Part1Question, Part1TestSet } from '../../v4/listening/types';

export interface Part1Test {
    vol: number;
    testId: number;
    questions: Part1TestSet;
}

export const part1RealTests: Part1Test[] = [
    // Volume 3 (1-10)
    { vol: 3, testId: 1, questions: v3_t1 },
    { vol: 3, testId: 2, questions: v3_t2 },
    { vol: 3, testId: 3, questions: v3_t3 },
    { vol: 3, testId: 4, questions: v3_t4 },
    { vol: 3, testId: 5, questions: v3_t5 },
    { vol: 3, testId: 6, questions: v3_t6 },
    { vol: 3, testId: 7, questions: v3_t7 },
    { vol: 3, testId: 8, questions: v3_t8 },
    { vol: 3, testId: 9, questions: v3_t9 },
    { vol: 3, testId: 10, questions: v3_t10 },
    // Volume 4 (1-10)
    { vol: 4, testId: 1, questions: v4_t1 },
    { vol: 4, testId: 2, questions: v4_t2 },
    { vol: 4, testId: 3, questions: v4_t3 },
    { vol: 4, testId: 4, questions: v4_t4 },
    { vol: 4, testId: 5, questions: v4_t5 },
    { vol: 4, testId: 6, questions: v4_t6 },
    { vol: 4, testId: 7, questions: v4_t7 },
    { vol: 4, testId: 8, questions: v4_t8 },
    { vol: 4, testId: 9, questions: v4_t9 },
    { vol: 4, testId: 10, questions: v4_t10 }
];
