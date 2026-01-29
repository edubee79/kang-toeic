import { Part5TestSet } from './types';
import { test1Data } from './test1';
import { test2Data } from './test2';
import { test3Data } from './test3';
import { test4Data } from './test4';
import { test5Data } from './test5';
import { test6Data } from './test6';
import { test7Data } from './test7';
import { test8Data } from './test8';
import { test9Data } from './test9';
import { test10Data } from './test10';
import { test11Data } from './test11';
import { test12Data } from './test12';

export const part5TestData: Part5TestSet[] = [
    test1Data,
    test2Data,
    test3Data,
    test4Data,
    test5Data,
    test6Data,
    test7Data,
    test8Data,
    test9Data,
    test10Data,
    test11Data,
    test12Data,
];

/**
 * Utility functions for Weakness Analysis & Review
 */

export const getQuestionsByIds = (ids: string[]) => {
    const result: any[] = [];
    const idSet = new Set(ids);

    part5TestData.forEach(test => {
        test.questions.forEach(q => {
            if (idSet.has(q.id)) {
                result.push(q);
            }
        });
    });

    // Sort results to match input order if needed, but for now just return found questions
    return result;
};

export const findSimilarQuestions = (classification: string, excludeIds: string[], count: number = 3) => {
    const similar: any[] = [];
    const excludeSet = new Set(excludeIds);

    for (const test of part5TestData) {
        for (const q of test.questions) {
            if (q.classification === classification && !excludeSet.has(q.id)) {
                similar.push(q);
                if (similar.length >= count) return similar;
            }
        }
    }
    return similar;
};
