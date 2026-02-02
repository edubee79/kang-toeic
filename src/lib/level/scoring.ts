
import { half9aPart1, half9aPart2, half9aPart3, half9aPart4, half9aPart5, half9aPart6, half9aPart7Single, half9aPart7Multi } from '@/data/mock/half_set9_a';
import { half9bPart1, half9bPart2, half9bPart3, half9bPart4, half9bPart5, half9bPart6, half9bPart7Single, half9bPart7Multi } from '@/data/mock/half_set9_b';

export interface TestCorrectAnswers {
    [qId: string]: string;
}

export function getCorrectAnswersForLevel1(): TestCorrectAnswers {
    const answers: TestCorrectAnswers = {};

    half9aPart1.forEach(q => answers[q.id] = q.correctAnswer);
    half9aPart2.forEach(q => answers[q.id] = q.correctAnswer);
    half9aPart3.forEach(set => set.questions.forEach((q: any) => answers[q.id] = q.correctAnswer));
    half9aPart4.forEach(set => set.questions.forEach((q: any) => answers[q.id] = q.correctAnswer));
    half9aPart5.forEach(q => answers[q.id] = q.correctAnswer);
    half9aPart6.forEach(set => set.questions.forEach((q: any) => answers[q.id] = q.correctAnswer));
    half9aPart7Single.forEach(set => set.questions.forEach((q: any) => answers[q.id] = q.correctAnswer));
    half9aPart7Multi.forEach(set => set.questions.forEach((q: any) => answers[q.id] = q.correctAnswer || q.answer));

    return answers;
}

export function getCorrectAnswersForLevel2(): TestCorrectAnswers {
    const answers: TestCorrectAnswers = {};

    half9bPart1.forEach(q => answers[q.id] = q.correctAnswer);
    half9bPart2.forEach(q => answers[q.id] = q.correctAnswer);
    half9bPart3.forEach(set => set.questions.forEach((q: any) => answers[q.id] = q.correctAnswer));
    half9bPart4.forEach(set => set.questions.forEach((q: any) => answers[q.id] = q.correctAnswer));
    half9bPart5.forEach(q => answers[q.id] = q.correctAnswer);
    half9bPart6.forEach(set => set.questions.forEach((q: any) => answers[q.id] = q.correctAnswer));
    half9bPart7Single.forEach(set => set.questions.forEach((q: any) => answers[q.id] = q.correctAnswer));
    half9bPart7Multi.forEach(set => set.questions.forEach((q: any) => answers[q.id] = q.correctAnswer || q.answer));

    return answers;
}

export interface PartScore {
    correct: number;
    total: number;
}

export interface LevelScoreResult {
    totalScore: number;
    totalQuestions: number;
    correctCount: number;
    partScores: Record<string, PartScore>;
}

export function calculateLevelScore(
    testId: string,
    answers: Record<string, string>
): LevelScoreResult {
    const testIdKey = String(testId).toLowerCase();
    const isLevel1 = testIdKey.includes('9a') || testIdKey.includes('level1');
    const correctAnswers = isLevel1 ? getCorrectAnswersForLevel1() : getCorrectAnswersForLevel2();

    let correctCount = 0;
    const partStats: any = {
        p1: { correct: 0, total: 0 }, p2: { correct: 0, total: 0 },
        p3: { correct: 0, total: 0 }, p4: { correct: 0, total: 0 },
        p5: { correct: 0, total: 0 }, p6: { correct: 0, total: 0 },
        p7s: { correct: 0, total: 0 }, p7m: { correct: 0, total: 0 }
    };

    Object.entries(answers).forEach(([userQId, userAns]) => {
        if (!correctAnswers[userQId]) return;

        const isCorrect = userAns === correctAnswers[userQId];

        // ID based part mapping (Standardized)
        let pKey = "";
        if (userQId.startsWith('p1')) pKey = "p1";
        else if (userQId.startsWith('p2')) pKey = "p2";
        else if (userQId.startsWith('p3')) pKey = "p3";
        else if (userQId.startsWith('p4')) pKey = "p4";
        else if (userQId.startsWith('p5')) pKey = "p5";
        else if (userQId.startsWith('p6')) pKey = "p6";
        else if (userQId.startsWith('p7')) {
            const isSingle = half9aPart7Single.some(s => s.questions.some(q => q.id === userQId)) ||
                half9bPart7Single.some(s => s.questions.some(q => q.id === userQId));
            pKey = isSingle ? "p7s" : "p7m";
        }

        if (pKey && partStats[pKey]) {
            partStats[pKey].total++;
            if (isCorrect) {
                partStats[pKey].correct++;
                correctCount++;
            }
        }
    });

    const finalScore = correctCount * 10;

    partStats.p7 = {
        correct: partStats.p7s.correct + partStats.p7m.correct,
        total: partStats.p7s.total + partStats.p7m.total
    };

    const totalQuestions = Object.values(partStats).reduce((acc: number, curr: any) => acc + (curr.total || 0), 0) - (partStats.p7.total || 0);

    return {
        totalScore: finalScore,
        totalQuestions: totalQuestions,
        correctCount: correctCount,
        partScores: partStats
    };
}
