
import * as fs from 'fs';

const inputPath = 'src/data/part3.ts';
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

    let imagePath = undefined;
    if (set.questionRange === '62-64') imagePath = '/images/part3/q62-64.png';
    else if (set.questionRange === '65-67') imagePath = '/images/part3/q65-67.png';
    else if (set.questionRange === '68-70') imagePath = '/images/part3/q68-70.png';

    return {
        setId: set.setId,
        testId: 1,
        questionRange: set.questionRange,
        questions: set.questions,
        audio: audioPath,
        image: imagePath // Specific Images
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
console.log(`✅ Updated Part 3 Data (with REAL images) saved to ${inputPath}`);
