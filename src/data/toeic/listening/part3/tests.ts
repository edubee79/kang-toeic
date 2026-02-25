import { Part3Set } from '../../v3/listening/part3/types';
import { test1Data } from '../../v3/listening/part3/v3_p3_t01';
import { test2Data } from '../../v3/listening/part3/v3_p3_t02';
import { test3Data } from '../../v3/listening/part3/v3_p3_t03';
import { test4Data } from '../../v3/listening/part3/v3_p3_t04';
import { test5Data } from '../../v3/listening/part3/v3_p3_t05';
import { test6Data } from '../../v3/listening/part3/v3_p3_t06';
import { test7Data } from '../../v3/listening/part3/v3_p3_t07';
import { test8Data } from '../../v3/listening/part3/v3_p3_t08';
import { test9Data } from '../../v3/listening/part3/v3_p3_t09';
import { test10Data } from '../../v3/listening/part3/v3_p3_t10';

// Volume 4 Data
import { test1Data as v4_test1Data } from '../../v4/listening/part3/v4_p3_t01';
import { test2Data as v4_test2Data } from '../../v4/listening/part3/v4_p3_t02';
import { test3Data as v4_test3Data } from '../../v4/listening/part3/v4_p3_t03';
import { test4Data as v4_test4Data } from '../../v4/listening/part3/v4_p3_t04';
import { test5Data as v4_test5Data } from '../../v4/listening/part3/v4_p3_t05';
import { test6Data as v4_test6Data } from '../../v4/listening/part3/v4_p3_t06';
import { test7Data as v4_test7Data } from '../../v4/listening/part3/v4_p3_t07';
import { test8Data as v4_test8Data } from '../../v4/listening/part3/v4_p3_t08';
import { test9Data as v4_test9Data } from '../../v4/listening/part3/v4_p3_t09';
import { test10Data as v4_test10Data } from '../../v4/listening/part3/v4_p3_t10';

export type { Part3Set, Part3Question } from '../../v3/listening/part3/types';

export interface Part3Test {
    vol: number;
    testId: number;
    questions: Part3Set[];
}

export const part3RealTests: Part3Test[] = [
    // Volume 3
    { vol: 3, testId: 1, questions: test1Data },
    { vol: 3, testId: 2, questions: test2Data },
    { vol: 3, testId: 3, questions: test3Data },
    { vol: 3, testId: 4, questions: test4Data },
    { vol: 3, testId: 5, questions: test5Data },
    { vol: 3, testId: 6, questions: test6Data },
    { vol: 3, testId: 7, questions: test7Data },
    { vol: 3, testId: 8, questions: test8Data },
    { vol: 3, testId: 9, questions: test9Data },
    { vol: 3, testId: 10, questions: test10Data },

    // Volume 4
    { vol: 4, testId: 1, questions: v4_test1Data },
    { vol: 4, testId: 2, questions: v4_test2Data },
    { vol: 4, testId: 3, questions: v4_test3Data },
    { vol: 4, testId: 4, questions: v4_test4Data },
    { vol: 4, testId: 5, questions: v4_test5Data },
    { vol: 4, testId: 6, questions: v4_test6Data },
    { vol: 4, testId: 7, questions: v4_test7Data },
    { vol: 4, testId: 8, questions: v4_test8Data },
    { vol: 4, testId: 9, questions: v4_test9Data },
    { vol: 4, testId: 10, questions: v4_test10Data }
];
