import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import * as fs from 'fs';
import * as path from 'path';

const firebaseConfig = {
    apiKey: "AIzaSyBThrCtBNJuVcfPD3Vm6XvPD7McT5JJsN8",
    authDomain: "eduthot-fb088.firebaseapp.com",
    projectId: "eduthot-fb088",
    storageBucket: "eduthot-fb088.firebasestorage.app",
    messagingSenderId: "919552710378",
    appId: "1:919552710378:web:7ba72ea2d195e092f8a993"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const units = [
    "Unit_00_Structure",
    "Unit_01_Noun",
    "Unit_02_Pronoun",
    "Unit_03_Adjective",
    "Unit_04_Adverb",
    "Unit_05_Preposition",
    "Unit_06_Verb",
    "Unit_07_To_Infinitive",
    "Unit_08_Gerund",
    "Unit_09_Participle",
    "Unit_10_Adverb_Conjunctions",
    "Unit_11_Relative_Clauses",
    "Unit_12_Noun_Clauses"
];

async function fetchAllData() {
    const allData: any = {};

    for (const unitId of units) {
        process.stdout.write(`Fetching ${unitId}... `);
        try {
            const docRef = doc(db, "Review_Questions", unitId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                const rawQuestions = data.inter || [];

                // Map to match current Question interface
                allData[unitId] = rawQuestions.map((q: any) => ({
                    question_no: q.question_no,
                    question: q.question,
                    options: q.options,
                    answer: q.answer,
                    type: q.pattern_id || q.tag || "",
                    explanation: q.explanation || ""
                }));

                console.log(`[OK] (${allData[unitId].length} q)`);
            } else {
                console.warn(`[WARN] No data found`);
                allData[unitId] = [];
            }
        } catch (error) {
            console.error(`[ERROR]`, error);
        }
    }

    const outputPath = path.resolve(process.cwd(), 'src/data/part5.ts');

    let content = `export interface Question {\n    question_no: number;\n    question: string;\n    options: { [key: string]: string };\n    answer: string;\n    type?: string;\n    explanation?: string;\n}\n\n`;
    content += `export const part5Data: { [key: string]: Question[] } = ${JSON.stringify(allData, null, 4)};\n`;

    fs.writeFileSync(outputPath, content);
    console.log(`\nSuccessfully updated ${outputPath}`);
    process.exit(0);
}

fetchAllData();
