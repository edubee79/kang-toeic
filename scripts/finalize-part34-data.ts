
import * as fs from 'fs';
import * as path from 'path';

const part3FilePath = 'src/data/part3.ts';
const part4FilePath = 'src/data/part4.ts';
const solutionsPath = 'part34_solutions_raw.json';
const p3InitialPath = 'part3_data_final.json';
const p4QuestionsPath = 'part4_questions_raw.json';

async function run() {
    console.log("🚀 Finalizing Part 3 & 4 data (Safe JSON approach)...");

    if (!fs.existsSync(solutionsPath) || !fs.existsSync(p3InitialPath) || !fs.existsSync(p4QuestionsPath)) {
        console.error("❌ Missing required JSON files.");
        process.exit(1);
    }

    const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf-8')).results;
    const p3Initial = JSON.parse(fs.readFileSync(p3InitialPath, 'utf-8')).sets || [];
    const p4Questions = JSON.parse(fs.readFileSync(p4QuestionsPath, 'utf-8')).sets || [];

    // --- PART 3 ---
    const updatedPart3 = p3Initial.map((set: any) => {
        const sol = solutions.find((s: any) => s.setId === set.setId);
        if (sol) {
            set.questions = set.questions.map((q: any) => ({
                ...q,
                correctAnswer: sol.answers[q.id] || "UNKNOWN"
            }));
            set.script = sol.script;
        }

        // Ensure properties exist
        set.testId = 1;
        set.audio = `/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_${set.questionRange}.mp3`;

        // Graphics
        if (set.questionRange === "62-64") set.image = "/images/part3/q62-64.jpg";
        if (set.questionRange === "65-67") set.image = "/images/part3/q65-70.jpg";
        if (set.questionRange === "68-70") set.image = "/images/part3/q65-70.jpg";

        return set;
    });

    const p3Content = `
export interface Part3Question {
  id: string;
  text: string;
  options: { label: string; text: string }[];
  correctAnswer: string;
}

export interface Part3Set {
  testId: number;
  setId: string;
  questionRange: string;
  audio: string;
  image?: string;
  questions: Part3Question[];
  script?: { speaker: string; text: string }[] | string;
}

export const part3Data: Part3Set[] = ${JSON.stringify(updatedPart3, null, 2)};
`;
    fs.writeFileSync(part3FilePath, p3Content);
    console.log("✅ Updated src/data/part3.ts");

    // --- PART 4 ---
    const updatedPart4 = p4Questions.map((set: any) => {
        const sol = solutions.find((s: any) => s.setId === set.setId);

        // Audio path
        const audioPath = `/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 4_${set.questionRange}.mp3`;

        // Graphics
        let image = undefined;
        if (set.questionRange === "95-97" || set.questionRange === "98-100") {
            image = "/images/part4/q95-100.jpg";
        }

        return {
            testId: 1,
            setId: set.setId,
            questionRange: set.questionRange,
            audio: audioPath,
            image,
            questions: set.questions.map((q: any) => ({
                ...q,
                correctAnswer: sol ? (sol.answers[q.id] || "UNKNOWN") : "UNKNOWN"
            })),
            script: sol ? sol.script : undefined
        };
    });

    const p4Content = `
export interface Part4Question {
  id: string;
  text: string;
  options: { label: string; text: string }[];
  correctAnswer: string;
}

export interface Part4Set {
  testId: number;
  setId: string;
  questionRange: string;
  audio: string;
  image?: string;
  questions: Part4Question[];
  script?: { speaker: string; text: string }[] | string;
}

export const part4Data: Part4Set[] = ${JSON.stringify(updatedPart4, null, 2)};
`;
    fs.writeFileSync(part4FilePath, p4Content);
    console.log("✅ Created src/data/part4.ts");
}

run();
