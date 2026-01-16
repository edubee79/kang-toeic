
import * as fs from 'fs';
import * as path from 'path';

interface ExtractedQuestion {
    id: string; // "q101"
    text: string;
    options: { label: string; text: string }[];
    classification?: string;
    testId: number;
}

interface ExtractedAnswer {
    id: string; // "q101" or "101"
    correctAnswer: string;
    translation?: string;
    explanation?: string;
}

interface TestAnswers {
    testId: number;
    answers: ExtractedAnswer[];
}

interface Part5TestSet {
    testId: number;
    title: string;
    questions: any[];
}

function main() {
    const questionsPath = path.join(process.cwd(), 'rc_extracted_results.json');
    const answersPath = path.join(process.cwd(), 'rc_answers_extracted.json');
    const outputPath = path.join(process.cwd(), 'src/data/rc_part5_tests.ts');

    if (!fs.existsSync(questionsPath) || !fs.existsSync(answersPath)) {
        console.error('❌ Missing input files (questions or answers json).');
        return;
    }

    const rawQuestionsData = JSON.parse(fs.readFileSync(questionsPath, 'utf-8'));
    const allQuestions: ExtractedQuestion[] = rawQuestionsData.part5 || [];

    const rawAnswersData: TestAnswers[] = JSON.parse(fs.readFileSync(answersPath, 'utf-8'));

    // Create a Lookup Map for Answers: TestId -> QuestionNum -> AnswerObj
    const answerMap: Record<number, Record<number, ExtractedAnswer>> = {};

    rawAnswersData.forEach(set => {
        if (!answerMap[set.testId]) answerMap[set.testId] = {};

        set.answers.forEach(ans => {
            // Normalize ID: "q101" -> 101, "101" -> 101
            const num = parseInt(ans.id.replace(/\D/g, ''));
            if (!isNaN(num)) {
                answerMap[set.testId][num] = ans;
            }
        });
    });

    // Group Questions by Test ID
    const groupedQuestions: Record<number, ExtractedQuestion[]> = {};
    allQuestions.forEach(q => {
        if (!groupedQuestions[q.testId]) groupedQuestions[q.testId] = [];
        groupedQuestions[q.testId].push(q);
    });

    const finalTestSets: Part5TestSet[] = [];

    // Process each Test
    Object.keys(groupedQuestions).forEach(testIdStr => {
        const testId = Number(testIdStr);
        // Sort questions 101-130
        const sortedQuestions = groupedQuestions[testId].sort((a, b) => {
            const numA = parseInt(a.id.replace(/\D/g, ''));
            const numB = parseInt(b.id.replace(/\D/g, ''));
            return numA - numB;
        });

        // Merge Answers
        const mergedQuestions = sortedQuestions.map(q => {
            const qNum = parseInt(q.id.replace(/\D/g, ''));
            const answerData = answerMap[testId]?.[qNum];

            return {
                id: q.id,
                text: q.text,
                options: q.options,
                classification: q.classification || "RC_VOCAB", // formatting fix
                testId: testId,
                correctAnswer: answerData?.correctAnswer?.toUpperCase().trim().charAt(0) || "A", // Default "A" if missing
                translation: answerData?.translation || "Translation unavailable.",
                explanation: answerData?.explanation || "Explanation unavailable."
            };
        });

        finalTestSets.push({
            testId,
            title: `Part 5 Real Test ${testId}`,
            questions: mergedQuestions
        });
    });

    // Sort Sets by TestID
    finalTestSets.sort((a, b) => a.testId - b.testId);

    // Generate TS File
    const tsContent = `export interface Part5TestQuestion {
    id: string;
    text: string;
    options: { label: string; text: string }[];
    correctAnswer: string;
    translation?: string;
    explanation?: string;
    type?: string; // classification
}

export interface Part5TestSet {
    testId: number;
    title: string;
    questions: Part5TestQuestion[];
}

export const part5TestData: Part5TestSet[] = ${JSON.stringify(finalTestSets, null, 4)};
`;

    fs.writeFileSync(outputPath, tsContent, 'utf-8');
    console.log(`✅ Merged and saved to ${outputPath}`);
    console.log(`   Total Tests: ${finalTestSets.length}`);
    finalTestSets.forEach(t => {
        const answeredCount = t.questions.filter(q => q.correctAnswer !== "A" && q.explanation !== "Explanation unavailable.").length;
        console.log(`   Test ${t.testId}: ${t.questions.length} questions (Matched Answers: ${answeredCount})`);
    });
}

main();
