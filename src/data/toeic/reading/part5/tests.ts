import { Part5TestSet } from '../../v4/reading/part5/types';
import { part5RealTests as v3Tests } from '../../v3/reading/part5/tests';
import { test1Data } from '../../v4/reading/part5/v4_p5_t01';
import { test2Data } from '../../v4/reading/part5/v4_p5_t02';
import { test3Data } from '../../v4/reading/part5/v4_p5_t03';
import { test4Data } from '../../v4/reading/part5/v4_p5_t04';
import { test5Data } from '../../v4/reading/part5/v4_p5_t05';
import { test6Data } from '../../v4/reading/part5/v4_p5_t06';
import { test7Data } from '../../v4/reading/part5/v4_p5_t07';
import { test8Data } from '../../v4/reading/part5/v4_p5_t08';
import { test9Data } from '../../v4/reading/part5/v4_p5_t09';
import { test10Data } from '../../v4/reading/part5/v4_p5_t10';

export type { Part5TestSet, Part5TestQuestion } from '../../v4/reading/part5/types';

export const part5RealTests: Part5TestSet[] = [
    ...v3Tests,
    test1Data,
    test2Data,
    test3Data,
    test4Data,
    test5Data,
    test6Data,
    test7Data,
    test8Data,
    test9Data,
    test10Data
];

// Alias for backward compatibility
export const part5TestData = part5RealTests;

export function getQuestionsByIds(ids: string[]) {
    const allQuestions = part5RealTests.flatMap(test => test.questions);
    return ids.map(id => allQuestions.find(q => q.id === id)).filter((q): q is any => !!q);
}
