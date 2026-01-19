import * as fs from 'fs';
import * as path from 'path';

// Define the interface for the target file structure
interface Part1TestSet {
    testId: number;
    title: string;
    questions: any[];
}

const targetFile = 'src/data/toeic/listening/part1/tests.ts';
const generatedDir = 'src/data/generated';

// Helper to read JSON
const readJson = (path: string) => JSON.parse(fs.readFileSync(path, 'utf-8'));

// Main function
function integrateData() {
    console.log("🚀 Integrating Part 1 Generated Data...");

    if (!fs.existsSync(generatedDir)) {
        console.error("❌ Generated data directory not found.");
        process.exit(1);
    }

    const testSets: Part1TestSet[] = [];

    for (let i = 1; i <= 10; i++) {
        const testIdStr = i.toString().padStart(2, '0');
        const jsonPath = path.join(generatedDir, `part1_test${testIdStr}.json`);

        console.log(`Processing Test ${i} from ${jsonPath}...`);

        let extractedQuestions: any[] = [];
        if (fs.existsSync(jsonPath)) {
            const data = readJson(jsonPath);
            extractedQuestions = data.questions || [];
        } else {
            console.warn(`   ⚠️ Missing JSON for Test ${i}. Using placeholders.`);
        }

        // Construct the test object
        const questions = Array.from({ length: 6 }).map((_, qIdx) => {
            const qNum = qIdx + 1;
            const qNumStr = qNum.toString().padStart(2, '0');
            const qIdShort = `q${qNum}`; // Matches ID in generated JSON

            // Find extracted data for this question
            const extracted = extractedQuestions.find(q => q.id === qIdShort || q.id === `q${qNum}`);

            // Image Path
            const imagePath = `/images/ETS_TOEIC_3/Test_${testIdStr}/Part_01/p1_q${qNumStr}.png`;

            // Audio Path
            // Encode spaces for URL safety
            const audioPath = `/audio/ETS_TOEIC_3/Test_${testIdStr}/TEST ${testIdStr}_PART 1_${qNum}.mp3`
                .replace(/ /g, '%20');

            // Default values
            let correctAnswer: 'A' | 'B' | 'C' | 'D' = 'A';
            let scriptObj = {
                A: `(Script Placeholder) Test ${testIdStr} Q${qNum} - A`,
                B: `(Script Placeholder) Test ${testIdStr} Q${qNum} - B`,
                C: `(Script Placeholder) Test ${testIdStr} Q${qNum} - C`,
                D: `(Script Placeholder) Test ${testIdStr} Q${qNum} - D`,
                translation_A: "",
                translation_B: "",
                translation_C: "",
                translation_D: ""
            };

            // Map extracted data if available
            if (extracted && extracted.scripts) {
                correctAnswer = extracted.correctAnswer as 'A' | 'B' | 'C' | 'D';

                extracted.scripts.forEach((s: any) => {
                    const opt = s.option as 'A' | 'B' | 'C' | 'D';
                    if (['A', 'B', 'C', 'D'].includes(opt)) {
                        (scriptObj as any)[opt] = s.text;
                        (scriptObj as any)[`translation_${opt}`] = s.translation;
                    }
                });
            }

            return {
                id: `p1_t${i}_q${qNum}`,
                image: imagePath,
                audio: audioPath,
                correctAnswer: correctAnswer,
                options: { A: "(A)", B: "(B)", C: "(C)", D: "(D)" },
                script: scriptObj
            };
        });

        testSets.push({
            testId: i,
            title: `Test ${i}`,
            questions: questions
        });
    }

    // Generate TypeScript content
    const fileContent = `export interface Part1Question {
    id: string;
    image: string; // URL or local path
    audio: string; // URL or local path
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    options: {
        A: string;
        B: string;
        C: string;
        D: string;
    };
    script?: {
        A: string;
        B: string;
        C: string;
        D: string;
        translation_A?: string;
        translation_B?: string;
        translation_C?: string;
        translation_D?: string;
    };
}

export interface Part1TestSet {
    testId: number;
    title: string;
    questions: Part1Question[];
}

export const part1RealTests: Part1TestSet[] = ${JSON.stringify(testSets, null, 4)};
`;

    // Remove quotes from keys in JSON string to make it look more like TS (optional but nice)
    // Actually, pure JSON format is valid TS for object literals, so we can keep it simple.
    // However, I'll clean up the "testId": 1 to testId: 1 using regex for a cleaner file.
    const cleanContent = fileContent.replace(/"(\w+)":/g, '$1:');

    fs.writeFileSync(targetFile, cleanContent);
    console.log(`✅ Successfully updated ${targetFile}`);
}

integrateData();
