
import * as fs from 'fs';
import * as path from 'path';

// Source: part3_data_final.json (contains all 13 sets)
const inputPath = 'part3_data_final.json';
const outputPath = 'src/data/part3.ts';

if (!fs.existsSync(inputPath)) {
    console.error(`❌ Error: ${inputPath} not found.`);
    process.exit(1);
}

const rawData = fs.readFileSync(inputPath, 'utf-8');
const data = JSON.parse(rawData);

// Transform data
const transformedSets = data.sets.map((set: any) => {
    // Construct expected audio filename: "TEST 01_PART 3_32-34.mp3"
    // Since everything so far is from Test 1, we hardcode testId = 1.
    // If we had more files, we'd infer it from the user's upload or filename.
    const audioFilename = `TEST 01_PART 3_${set.questionRange}.mp3`;
    const audioPath = `/audio/${audioFilename}`;

    return {
        setId: set.setId,
        testId: 1, // New Field
        questionRange: set.questionRange,
        questions: set.questions,
        audio: audioPath,
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
    testId: number;
    questionRange: string;
    questions: Part3Question[];
    audio: string;
}

export const part3Data: Part3Set[] = ${JSON.stringify(transformedSets, null, 2)};
`;

fs.writeFileSync(outputPath, tsContent);
console.log(`✅ Updated Part 3 Data (with testId & audio) saved to ${outputPath}`);
console.log(`ℹ️ Total Sets: ${transformedSets.length}`);
