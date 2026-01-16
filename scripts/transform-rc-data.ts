
import * as fs from 'fs';
import * as path from 'path';

interface ExtractedQuestion {
    id: string;
    text: string;
    options: { label: string; text: string }[];
    classification?: string;
    testId: number;
}

interface TestSet {
    testId: number;
    title: string;
    questions: ExtractedQuestion[];
}

function main() {
    const inputPath = path.join(process.cwd(), 'rc_extracted_results.json');
    if (!fs.existsSync(inputPath)) {
        console.error('❌ rc_extracted_results.json not found!');
        process.exit(1);
    }

    const rawData = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
    const part5Questions: ExtractedQuestion[] = rawData.part5 || [];

    if (part5Questions.length === 0) {
        console.log('⚠️ No Part 5 questions found in extraction results.');
        return;
    }

    // Group by Test ID
    const grouped: Record<number, ExtractedQuestion[]> = {};

    // Sort by testId first, then by question ID
    part5Questions.forEach(q => {
        if (!grouped[q.testId]) grouped[q.testId] = [];
        grouped[q.testId].push(q);
    });

    const outputData: TestSet[] = [];

    // Process each group
    Object.keys(grouped).forEach(testIdStr => {
        const testId = Number(testIdStr);
        const questions = grouped[testId].sort((a, b) => {
            // Sort q101, q102...
            const numA = parseInt(a.id.replace(/\D/g, ''));
            const numB = parseInt(b.id.replace(/\D/g, ''));
            return numA - numB;
        });

        // Add correct answer placeholder (extractor doesn't know answers yet without answer key)
        // We will default to "A" or try to match if we processed the answer key PDF (we filtered it out).
        const finalQuestions = questions.map(q => ({
            ...q,
            correctAnswer: "A", // Placeholder
            explanation: "Explanation will be added later.",
            translation: "Translation will be added later."
        }));

        outputData.push({
            testId,
            title: `ETS TOEIC Vol.4 Test ${testId}`,
            questions: finalQuestions
        });
    });

    // Generate TypeScript file
    const tsContent = `export interface Part5TestQuestion {
    id: string;
    text: string;
    options: { label: string; text: string }[];
    correctAnswer: string;
    translation?: string;
    explanation?: string;
    type?: string;
}

export interface Part5TestSet {
    testId: number;
    title: string;
    questions: Part5TestQuestion[];
}

export const part5TestData: Part5TestSet[] = ${JSON.stringify(outputData, null, 4)};
`;

    fs.writeFileSync(path.join(process.cwd(), 'src/data/rc_part5_tests.ts'), tsContent, 'utf-8');
    console.log(`✅ Successfully generated src/data/rc_part5_tests.ts with ${part5Questions.length} questions.`);
}

main();
