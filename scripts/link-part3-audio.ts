
import * as fs from 'fs';
import * as path from 'path';

// Load the current part3.ts data (simulated read since we just wrote it)
// In a real script we would import it, but here we can re-read the JSON source or just process the file content text.
// To be safe and robust, let's read the JSON we created earlier `part3_data_final.json` which is the source of truth.

const inputPath = 'part3_data_final.json';
const outputPath = 'src/data/part3.ts';

if (!fs.existsSync(inputPath)) {
    console.error(`❌ Error: ${inputPath} not found.`);
    process.exit(1);
}

const rawData = fs.readFileSync(inputPath, 'utf-8');
const data = JSON.parse(rawData);

// Map sets to audio files
const cleanedSets = data.sets.map((set: any) => {
    // Construct expected audio filename: "TEST 01_PART 3_32-34.mp3"
    const audioFilename = `TEST 01_PART 3_${set.questionRange}.mp3`;
    const audioPath = `/audio/${audioFilename}`; // relative path for public folder

    return {
        setId: set.setId,
        questionRange: set.questionRange,
        questions: set.questions,
        audio: audioPath, // Added audio field
        // script: [], // Still keeping script empty as they are invalid
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
    audio: string;
}

export const part3Data: Part3Set[] = ${JSON.stringify(cleanedSets, null, 2)};
`;

fs.writeFileSync(outputPath, tsContent);
console.log(`✅ Linked Audio and saved to ${outputPath}`);
