
import { test9Part1, test9Part2, test9Part3, test9Part4, test9Part5, test9Part6, test9Part7Single, test9Part7Multi } from '@/data/mock/set9_data';

export interface TestCorrectAnswers {
    [qId: string]: string;
}

export function getCorrectAnswersForTest9(): TestCorrectAnswers {
    const answers: TestCorrectAnswers = {};

    // Part 1
    test9Part1.forEach((q, i) => {
        answers[`p1_${i + 1}`] = q.correctAnswer;
    });

    // Part 2 (Index to Letter)
    const p2Letters = ['A', 'B', 'C'];
    test9Part2.forEach(q => {
        answers[`p2_${q.id}`] = p2Letters[q.correct];
    });

    // Part 3
    test9Part3.forEach(set => {
        set.questions.forEach((q: any) => {
            answers[q.id] = q.correctAnswer;
        });
    });

    // Part 4
    test9Part4.forEach(set => {
        set.questions.forEach((q: any) => {
            answers[q.id] = q.correctAnswer;
        });
    });

    // Part 5
    test9Part5.forEach(q => {
        answers[`q${q.id}`] = q.correctAnswer;
    });

    // Part 6
    test9Part6.forEach(set => {
        set.questions.forEach((q: any) => {
            answers[q.id] = q.correctAnswer;
        });
    });

    // Part 7 Single
    test9Part7Single.forEach(set => {
        set.questions.forEach((q: any) => {
            answers[q.id] = q.correctAnswer;
        });
    });

    // Part 7 Multi
    test9Part7Multi.forEach(set => {
        set.questions.forEach((q: any) => {
            answers[q.id] = q.answer;
        });
    });

    return answers;
}

import { test10Part1, test10Part2, test10Part3, test10Part4, test10Part5, test10Part6, test10Part7Single, test10Part7Multi } from '@/data/mock/set10_data';

export function getCorrectAnswersForTest10(): TestCorrectAnswers {
    const answers: TestCorrectAnswers = {};

    // Part 1
    test10Part1.forEach((q, i) => {
        answers[`p1_${i + 1}`] = q.correctAnswer;
    });

    // Part 2 (Index to Letter)
    const p2Letters = ['A', 'B', 'C'];
    test10Part2.forEach(q => {
        answers[`p2_${q.id}`] = p2Letters[q.correct];
    });

    // Part 3
    test10Part3.forEach(set => {
        set.questions.forEach((q: any) => {
            answers[q.id] = q.correctAnswer;
        });
    });

    // Part 4
    test10Part4.forEach(set => {
        set.questions.forEach((q: any) => {
            answers[q.id] = q.correctAnswer;
        });
    });

    // Part 5
    test10Part5.forEach(q => {
        answers[`q${q.id}`] = q.correctAnswer;
    });

    // Part 6
    test10Part6.forEach(set => {
        set.questions.forEach((q: any) => {
            answers[q.id] = q.correctAnswer;
        });
    });

    // Part 7 Single
    test10Part7Single.forEach(set => {
        set.questions.forEach((q: any) => {
            answers[q.id] = q.correctAnswer;
        });
    });

    // Part 7 Multi
    test10Part7Multi.forEach(set => {
        set.questions.forEach((q: any) => {
            answers[q.id] = q.answer;
        });
    });

    return answers;
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

export function calculateScaledScore(rawScore: number, type: 'LC' | 'RC'): number {
    const table = type === 'LC' ? LC_SCORE_TABLE : RC_SCORE_TABLE;
    if (table[rawScore]) return table[rawScore];

    // Interpolation for missing values in simplified table
    const keys = Object.keys(table).map(Number).sort((a, b) => b - a);
    for (const key of keys) {
        if (rawScore >= key) return table[key];
    }
    return 5;
}
