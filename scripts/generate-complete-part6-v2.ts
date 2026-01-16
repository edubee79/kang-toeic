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
    // If extraction provided specific text, use it
    if (q.text && q.text !== 'null' && q.text !== '') {
        return q.text;
    }

    // Check if it's likely a sentence insertion question based on option length
    const firstOption = q.options[0]?.text || '';
    if (firstOption.length > 50 || q.classification === 'P6_SENTENCE_INSERT') {
        return `Select the best sentence for the blank.`;
    }

    // Default for vocabulary/grammar
    return `Select the best word or phrase for the blank.`;
}

// Generate TypeScript code for a single test
function generateTestCode(testNum: number, data: any): string {
    const passages = data.passages.map((p: any, pIdx: number) => {
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

        const titleLine = p.title && p.title !== 'null' ? `\n                title: "${escapeString(p.title)}",` : '';

        return `{
                id: "${p.id}",
                type: "${p.type}",${titleLine}
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
async function generateCompleteFile() {
    console.log('📚 Generating complete rc_part6.ts file from v2 extractions...\n');

    const tests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const testCodes: string[] = [];

    for (const testNum of tests) {
        try {
            const passagesFile = `extracted_part6_test${testNum}_v2.json`;
            const answersFile = `extracted_part6_test${testNum}_answers_v2.json`;

            if (!fs.existsSync(passagesFile)) {
                console.log(`⚠️  Skipping Test ${testNum} - file not found: ${passagesFile}`);
                continue;
            }

            const passagesData = JSON.parse(fs.readFileSync(passagesFile, 'utf-8'));

            // Merge answers if available
            if (fs.existsSync(answersFile)) {
                const answersData = JSON.parse(fs.readFileSync(answersFile, 'utf-8'));
                const answerMap = new Map();

                answersData.answers.forEach((ans: any) => {
                    answerMap.set(ans.questionId, {
                        correctAnswer: ans.correctAnswer,
                        classification: ans.classification || "P6_VOCABULARY",
                        translation: ans.translation || "",
                        explanation: ans.explanation || ""
                    });
                });

                // Merge answers into passages
                passagesData.passages.forEach((passage: any) => {
                    passage.questions.forEach((q: any) => {
                        const answerInfo = answerMap.get(q.id);
                        if (answerInfo) {
                            q.correctAnswer = answerInfo.correctAnswer;
                            q.classification = answerInfo.classification;
                            q.translation = answerInfo.translation;
                            q.explanation = answerInfo.explanation;
                        }
                    });
                });
            }

            const testCode = generateTestCode(testNum, passagesData);
            testCodes.push(testCode);
            console.log(`✅ Generated Test ${testNum}`);

        } catch (error: any) {
            console.error(`❌ Error processing Test ${testNum}:`, error.message);
        }
    }

    // Generate complete file
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
${testCodes.join(',\n\n')}
];
`;

    fs.writeFileSync('src/data/rc_part6.ts', completeCode);
    console.log('\n✅ Complete rc_part6.ts generated!');
    console.log('💾 Saved to src/data/rc_part6.ts');
    console.log(`📊 Total: ${testCodes.length} tests integrated`);
}

generateCompleteFile();
