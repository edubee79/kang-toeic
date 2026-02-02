
import { test9Part1, test9Part2, test9Part3, test9Part4, test9Part5, test9Part6, test9Part7Single, test9Part7Multi } from '@/data/mock/set9_data';

export interface TestCorrectAnswers {
    [qId: string]: string;
}

export function getCorrectAnswersForTest9(): TestCorrectAnswers {
    const answers: TestCorrectAnswers = {};

    test9Part1.forEach(q => answers[q.id] = q.correctAnswer);
    test9Part2.forEach(q => answers[q.id] = q.correctAnswer);
    test9Part3.forEach(set => set.questions.forEach((q: any) => answers[q.id] = q.correctAnswer));
    test9Part4.forEach(set => set.questions.forEach((q: any) => answers[q.id] = q.correctAnswer));
    test9Part5.forEach(q => answers[q.id] = q.correctAnswer);
    test9Part6.forEach(set => set.questions.forEach((q: any) => answers[q.id] = q.correctAnswer));
    test9Part7Single.forEach(set => set.questions.forEach((q: any) => answers[q.id] = q.correctAnswer));
    test9Part7Multi.forEach(set => set.questions.forEach((q: any) => answers[q.id] = q.correctAnswer || q.answer));

    return answers;
}

export function getQuestionClassificationsForTest9(): Record<string, string> {
    const classes: Record<string, string> = {};

    test9Part1.forEach(q => classes[q.id] = q.classification || 'P1');
    test9Part2.forEach(q => classes[q.id] = (q as any).classification || (q as any).questionType || 'Unknown');
    test9Part3.forEach(set => set.questions.forEach((q: any) => classes[q.id] = q.classification || q.questionType || (set as any).contextType || 'Unknown'));
    test9Part4.forEach(set => set.questions.forEach((q: any) => classes[q.id] = q.classification || q.questionType || (set as any).contextType || 'Unknown'));
    test9Part5.forEach(q => classes[q.id] = q.classification || 'Unknown');
    test9Part6.forEach(set => set.questions.forEach((q: any) => classes[q.id] = q.classification || (set as any).contextType || 'Unknown'));
    test9Part7Single.forEach(set => set.questions.forEach((q: any) => classes[q.id] = q.classification || (set as any).docType || 'Unknown'));
    test9Part7Multi.forEach(set => set.questions.forEach((q: any) => classes[q.id] = q.classification || (set as any).docType || 'Unknown'));

    return classes;
}

import { test10Part1, test10Part2, test10Part3, test10Part4, test10Part5, test10Part6, test10Part7Single, test10Part7Multi } from '@/data/mock/set10_data';

export function getCorrectAnswersForTest10(): TestCorrectAnswers {
    const answers: TestCorrectAnswers = {};

    test10Part1.forEach(q => answers[q.id] = q.correctAnswer);
    test10Part2.forEach(q => answers[q.id] = q.correctAnswer);
    test10Part3.forEach(set => set.questions.forEach((q: any) => answers[q.id] = q.correctAnswer));
    test10Part4.forEach(set => set.questions.forEach((q: any) => answers[q.id] = q.correctAnswer));
    test10Part5.forEach(q => answers[q.id] = q.correctAnswer);
    test10Part6.forEach(set => set.questions.forEach((q: any) => answers[q.id] = q.correctAnswer));
    test10Part7Single.forEach(set => set.questions.forEach((q: any) => answers[q.id] = q.correctAnswer));
    test10Part7Multi.forEach(set => set.questions.forEach((q: any) => answers[q.id] = q.correctAnswer || q.answer));

    return answers;
}

export function getQuestionClassificationsForTest10(): Record<string, string> {
    const classes: Record<string, string> = {};

    test10Part1.forEach(q => classes[q.id] = q.classification || 'P1');
    test10Part2.forEach(q => classes[q.id] = (q as any).classification || (q as any).questionType || 'Unknown');
    test10Part3.forEach(set => set.questions.forEach((q: any) => classes[q.id] = q.classification || q.questionType || (set as any).contextType || 'Unknown'));
    test10Part4.forEach(set => set.questions.forEach((q: any) => classes[q.id] = q.classification || q.questionType || (set as any).contextType || 'Unknown'));
    test10Part5.forEach(q => classes[q.id] = q.classification || 'Unknown');
    test10Part6.forEach(set => set.questions.forEach((q: any) => classes[q.id] = q.classification || (set as any).contextType || 'Unknown'));
    test10Part7Single.forEach(set => set.questions.forEach((q: any) => classes[q.id] = q.classification || (set as any).docType || 'Unknown'));
    test10Part7Multi.forEach(set => set.questions.forEach((q: any) => classes[q.id] = q.classification || (set as any).docType || 'Unknown'));

    return classes;
}

/**
 * Approximate TOEIC Score Conversion Table
 * Key: Number of correct answers (0-100)
 * Value: Scaled score (5-495)
 */
export const LC_SCORE_TABLE: Record<number, number> = {
    100: 495, 99: 495, 98: 495, 97: 495, 96: 495, 95: 490, 94: 485, 93: 480, 92: 475, 91: 470,
    90: 465, 89: 460, 88: 455, 87: 450, 86: 445, 85: 440, 84: 435, 83: 430, 82: 425, 81: 420,
    80: 415, 79: 410, 78: 405, 77: 400, 76: 395, 75: 390, 74: 385, 73: 380, 72: 375, 71: 370,
    70: 365, 69: 360, 68: 355, 67: 350, 66: 345, 65: 340, 64: 335, 63: 330, 62: 325, 61: 320,
    60: 315, 59: 310, 58: 305, 57: 300, 56: 295, 55: 290, 54: 285, 53: 280, 52: 275, 51: 270,
    50: 265, 45: 240, 40: 215, 35: 190, 30: 165, 25: 140, 20: 115, 15: 90, 10: 65, 5: 40, 0: 5
};

export const RC_SCORE_TABLE: Record<number, number> = {
    100: 495, 99: 495, 98: 490, 97: 485, 96: 480, 95: 475, 94: 470, 93: 465, 92: 460, 91: 455,
    90: 450, 89: 445, 88: 440, 87: 435, 86: 430, 85: 425, 84: 420, 83: 415, 82: 410, 81: 405,
    80: 400, 79: 395, 78: 390, 77: 385, 76: 380, 75: 375, 74: 370, 73: 365, 72: 360, 71: 355,
    70: 350, 69: 345, 68: 340, 67: 335, 66: 330, 65: 325, 64: 320, 63: 315, 62: 310, 61: 305,
    60: 300, 59: 295, 58: 290, 57: 285, 56: 280, 55: 275, 54: 270, 53: 265, 52: 260, 51: 255,
    50: 250, 45: 225, 40: 200, 35: 175, 30: 150, 25: 125, 20: 100, 15: 75, 10: 50, 5: 25, 0: 5
};

// --- SCORING ENGINE CORE ---

export interface PartScore {
    correct: number;
    total: number;
}

export interface MockScoreResult {
    totalScore: number;
    totalQuestions: number;
    correctCount: number;
    partScores: Record<string, PartScore>;
    isStandardized: boolean; // Indicates if matches were made using standard IDs or fuzzy matching
}

export function calculateMockScore(
    testId: string,
    answers: Record<string, string>,
    isHalf: boolean = false
): MockScoreResult {
    const testIdKey = String(testId).toLowerCase();
    // Strictly handle Full Mock Tests 9 (Set 1) and 10 (Set 2)
    // Level tests like 9a, 9b are handled by levelScoring.ts
    const isTest9 = testIdKey === '9' || testIdKey.startsWith('full-9') || testIdKey.includes('test9');
    const isTest10 = testIdKey === '10' || testIdKey.startsWith('full-10') || testIdKey.includes('test10');

    if (!isTest9 && !isTest10) {
        console.warn('calculateMockScore called for non-mock test ID:', testId);
    }

    const correctAnswers = isTest9 ? getCorrectAnswersForTest9() : getCorrectAnswersForTest10();

    let correctCount = 0;
    let standardMatches = 0;
    const partStats: any = {
        p1: { correct: 0, total: 0 }, p2: { correct: 0, total: 0 },
        p3: { correct: 0, total: 0 }, p4: { correct: 0, total: 0 },
        p5: { correct: 0, total: 0 }, p6: { correct: 0, total: 0 },
        p7s: { correct: 0, total: 0 }, p7m: { correct: 0, total: 0 }
    };

    Object.entries(answers).forEach(([userQId, userAns]) => {
        // 1. Try Extracting Question Number (e.g., "1", "q1", "p1-t9-q1")
        const qNumMatch = userQId.match(/(\d+)$/);
        const qNum = qNumMatch ? parseInt(qNumMatch[1]) : 0;
        if (qNum === 0) return;

        // 2. Perform Intelligent Matching
        let correctAnswerValue = "";
        if (correctAnswers[userQId]) {
            correctAnswerValue = correctAnswers[userQId];
            standardMatches++;
        } else {
            // Fuzzy Match: Look for same number in the Master Answer Key
            const masterKey = Object.keys(correctAnswers).find(k => {
                const kMatch = k.match(/q(\d+)$/);
                return kMatch && parseInt(kMatch[1]) === qNum;
            });
            if (masterKey) correctAnswerValue = correctAnswers[masterKey];
        }

        if (!correctAnswerValue) return;
        const isCorrect = userAns === correctAnswerValue;

        // 3. Assign to TOEIC Part based on standard ranges
        let pKey = "";
        if (qNum <= 6) pKey = "p1";
        else if (qNum <= 31) pKey = "p2";
        else if (qNum <= 70) pKey = "p3";
        else if (qNum <= 100) pKey = "p4";
        else if (qNum <= 130) pKey = "p5";
        else if (qNum <= 146) pKey = "p6";
        else if (qNum <= 175) pKey = "p7s";
        else if (qNum <= 200) pKey = "p7m";

        if (pKey && partStats[pKey]) {
            partStats[pKey].total++;
            if (isCorrect) {
                partStats[pKey].correct++;
                correctCount++;
            }
        }
    });

    // 4. Score Calculation (Half vs Full)
    let finalScore = 0;
    if (isHalf) {
        // Half Test: Simple visualization (e.g., 50 Qs * 10 = 500 or just raw score)
        // Usually, 50 questions correctly answered = 500 points for Half
        finalScore = correctCount * 10;
    } else {
        // Full Test: Use Scaled TOEIC Tables
        const lcCorrect = partStats.p1.correct + partStats.p2.correct + partStats.p3.correct + partStats.p4.correct;
        const rcCorrect = partStats.p5.correct + partStats.p6.correct + (partStats.p7s.correct + partStats.p7m.correct);

        const lcScore = calculateScaledScore(lcCorrect, 'LC');
        const rcScore = calculateScaledScore(rcCorrect, 'RC');
        finalScore = lcScore + rcScore;
    }

    // Add unified P7 for legacy admin report consumption
    partStats.p7 = {
        correct: partStats.p7s.correct + partStats.p7m.correct,
        total: partStats.p7s.total + partStats.p7m.total
    };

    const totalQuestions = Object.values(partStats).reduce((acc: number, curr: any) => acc + curr.total, 0) - partStats.p7.total;

    return {
        totalScore: finalScore,
        totalQuestions: totalQuestions,
        correctCount: correctCount,
        partScores: partStats,
        isStandardized: standardMatches > 0 && standardMatches === Object.keys(answers).length
    };
}

export function calculateScaledScore(rawScore: number, type: 'LC' | 'RC'): number {
    const table = type === 'LC' ? LC_SCORE_TABLE : RC_SCORE_TABLE;

    // Exact match in table
    if (table[rawScore] !== undefined) return table[rawScore];

    // Simple interpolation/fallback for missing values in tables
    const keys = Object.keys(table).map(Number).sort((a, b) => b - a);
    for (const key of keys) {
        if (rawScore >= key) return table[key];
    }
    return 5;
}

