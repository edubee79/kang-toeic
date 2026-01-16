import * as fs from 'fs';

// Helper functions
function escapeString(str: string | null): string {
    if (!str || str === 'null') return '';
    return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '');
}

function escapeBackticks(str: string): string {
    return str.replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/\r/g, '');
}

function getQuestionText(q: any): string {
    if (q.text && q.text !== 'null' && q.text !== '') {
        return q.text;
    }
    const firstOption = q.options[0]?.text || '';
    if (firstOption.length > 50 || q.classification === 'P6_SENTENCE_INSERT') {
        return `Select the best sentence for the blank.`;
    }
    return `Select the best word or phrase for the blank.`;
}

// Generate TypeScript code for a single test
function generateTestCode(testNum: number, data: any): string {
    const passages = data.passages.map((p: any) => {
        const questions = p.questions.map((q: any) => {
            const questionText = getQuestionText(q);
            const options = q.options.map((opt: any) =>
                `{ label: "${opt.label}", text: "${escapeString(opt.text)}" }`
            ).join(',\n                            ');

            const translation = q.translation && q.translation !== "Korean translation of question" && q.translation !== ""
                ? `,\n                        translation: "${escapeString(q.translation)}"`
                : '';

            const explanation = q.explanation && q.explanation !== "Korean explanation of why this is correct" && q.explanation !== ""
                ? `,\n                        explanation: "${escapeString(q.explanation)}"`
                : '';

            return `{
                        id: "${q.id}",
                        text: "${escapeString(questionText)}",
                        options: [
                            ${options}
                        ],
                        correctAnswer: "${q.correctAnswer || 'A'}",
                        classification: "${q.classification || 'P6_VOCABULARY'}"${translation}${explanation}
                    }`;
        }).join(',\n                    ');

        const titleLine = p.title && p.title !== 'null' && p.title !== '' ? `\n                title: "${escapeString(p.title)}",` : '';
        const guidanceLine = p.guidance ? `\n                guidance: "${escapeString(p.guidance)}",` : '';

        return `{
                id: "${p.id}",
                type: "${p.type}",${guidanceLine}${titleLine}
                content: \`${escapeBackticks(p.content)}\`,
                questions: [
                    ${questions}
                ]
            }`;
    }).join(',\n            ');

    return `    {
        testId: ${testNum},
        title: "ETS TOEIC Vol 4 - Test ${testNum}",
        passages: [
            ${passages}
        ]
    }`;
}

// Main function
async function generateTestOne() {
    console.log('📚 Generating Part 6 Test 1 with upgraded layout...\n');

    const testNum = 1;
    const passagesFile = `extracted_part6_test${testNum}_v3.json`;
    const answersFile = `extracted_part6_test${testNum}_answers_v3.json`;

    if (!fs.existsSync(passagesFile)) {
        console.error(`❌ Error: ${passagesFile} not found`);
        return;
    }

    const passagesData = JSON.parse(fs.readFileSync(passagesFile, 'utf-8'));

    // Merge answers
    if (fs.existsSync(answersFile)) {
        const answersData = JSON.parse(fs.readFileSync(answersFile, 'utf-8'));
        const answerMap = new Map();
        answersData.answers.forEach((ans: any) => {
            answerMap.set(ans.questionId, ans);
        });
        passagesData.passages.forEach((p: any) => {
            p.questions.forEach((q: any) => {
                const ans = answerMap.get(q.id);
                if (ans) {
                    q.correctAnswer = ans.correctAnswer;
                    q.classification = ans.classification;
                }
            });
        });
    }

    const testCode = generateTestCode(testNum, passagesData);

    // Read the current file and replace ONLY Test 1
    const currentFileContent = fs.readFileSync('src/data/rc_part6.ts', 'utf-8');

    // Simple replacement for pilot: just overwrite the whole file content for now with just Test 1
    // In a real scenario we'd target the specific test, but since we are re-generating anyway:

    const completeCode = `export interface Part6Question {
    id: string;
    text: string;
    options: { label: string; text: string }[];
    correctAnswer: string;
    translation?: string;
    explanation?: string;
    classification?: string;
}

export interface Part6Passage {
    id: string;
    guidance?: string;
    type: "EMAIL" | "LETTER" | "NOTICE" | "ARTICLE" | "MEMO" | "ADVERTISEMENT" | "ANNOUNCEMENT";
    title?: string;
    content: string;
    questions: Part6Question[];
    translation?: string;
}

export interface Part6TestSet {
    testId: number;
    title: string;
    passages: Part6Passage[];
}

export const part6TestData: Part6TestSet[] = [
${testCode}
];
`;

    fs.writeFileSync('src/data/rc_part6.ts', completeCode);
    console.log('✅ Part 6 Test 1 upgraded and saved!');
}

generateTestOne();
