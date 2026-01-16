
import * as fs from 'fs';
import * as path from 'path';

const inputPath = 'part3_data_final.json';
const outputPath = 'src/data/part3.ts';

if (!fs.existsSync(inputPath)) {
    console.error(`❌ Error: ${inputPath} not found.`);
    process.exit(1);
}

const rawData = fs.readFileSync(inputPath, 'utf-8');
const data = JSON.parse(rawData);

// Clean up data: Remove scripts, keep only questions
const cleanedSets = data.sets.map((set: any) => {
    return {
        setId: set.setId,
        questionRange: set.questionRange,
        questions: set.questions, // Keep questions and options
        // script: [], // Explicitly empty
        // hasScript: false
    };
});

const tsContent = `
export interface Part3Question {
    id: string;
    text: string;
    options: { label: string; text: string }[];
    correctAnswer: string;
}

export interface Part3Set {
    setId: string;
    questionRange: string;
    questions: Part3Question[];
}

export const part3Data: Part3Set[] = ${JSON.stringify(cleanedSets, null, 2)};
`;

fs.writeFileSync(outputPath, tsContent);
console.log(`✅ Finalized Part 3 Data saved to ${outputPath}`);
console.log(`ℹ️ Total Sets: ${cleanedSets.length}`);
