
import * as fs from 'fs';

const inputPath = 'src/data/part3.ts';
// We will modify the existing file by reading it, but since it's TS, it's safer to just overwrite it with the updated structure
// Wait, I can't easily parse TS. I should use the JSON source `part3_data_final.json` again and re-generate `part3.ts` with the new field.
// This ensures consistency.

const jsonPath = 'part3_data_final.json';
if (!fs.existsSync(jsonPath)) {
    console.error('Source JSON not found');
    process.exit(1);
}

const rawData = fs.readFileSync(jsonPath, 'utf-8');
const data = JSON.parse(rawData);

// Transform and add image field for last 3 sets (62 onwards)
const transformedSets = data.sets.map((set: any) => {
    const audioFilename = `TEST 01_PART 3_${set.questionRange}.mp3`;
    const audioPath = `/audio/${audioFilename}`;

    // Check if Graphic Question (Sets 62-64, 65-67, 68-70)
    // Question IDs: q62, q65, q68 are the start of the graphic sets usually.
    // Or check question range string.
    const isGraphic = ['62-64', '65-67', '68-70'].includes(set.questionRange);

    return {
        setId: set.setId,
        testId: 1,
        questionRange: set.questionRange,
        questions: set.questions,
        audio: audioPath,
        image: isGraphic ? '/images/part3/placeholder.png' : undefined
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
    image?: string; // New Optional Field
}

export const part3Data: Part3Set[] = ${JSON.stringify(transformedSets, null, 2)};
`;

fs.writeFileSync(inputPath, tsContent);
console.log(`✅ Updated Part 3 Data (with image field) saved to ${inputPath}`);
