
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables
dotenv.config({ path: '.env.local' });

// 1. Initialize Gemini
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("❌ Error: GEMINI_API_KEY is not found in .env.local");
    process.exit(1);
}
const genAI = new GoogleGenerativeAI(API_KEY);

// ---------------------------------------------------------
// DATA PARSING (Manual Read to avoid TSX import issues)
// ---------------------------------------------------------
function loadLegacyData() {
    const filePath = path.join(process.cwd(), 'src/data/part5.ts');
    const content = fs.readFileSync(filePath, 'utf8');

    // Simple heuristic to extract questions (This matches the structure seen in part5.ts)
    // We'll look for objects with "question", "options", "answer", "explanation"
    const questions: any[] = [];
    const questionRegex = /\{[\s\S]*?"question":\s*"(.*?)"[\s\S]*?"options":\s*(\{[\s\S]*?\})[\s\S]*?"answer":\s*"(.*?)"[\s\S]*?"explanation":\s*"(.*?)"[\s\S]*?\}/g;

    let match;
    while ((match = questionRegex.exec(content)) !== null) {
        try {
            // Clean up the options string to make it parsable
            const optionsStr = match[2].replace(/(\w+):/g, '"$1":').replace(/'/g, '"');
            const options = JSON.parse(optionsStr);

            questions.push({
                text: match[1],
                options,
                answer: match[3],
                explanation: match[4]
            });
        } catch (e) {
            // Skip failing ones
        }
    }
    return questions;
}

// ---------------------------------------------------------
// RE-TAGGING LOGIC
// ---------------------------------------------------------

async function retagQuestion(qText: string, options: any): Promise<string> {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
    Analyze this TOEIC Part 5 question and assign EXACTLY ONE most appropriate tag from the list below.
    
    Question: ${qText}
    Options: ${JSON.stringify(options)}
    
    Allowed Tags:
    - P5_POS_NOUN, P5_POS_ADJ, P5_POS_ADV, P5_POS_VERB
    - P5_V_AGREE, P5_V_TENSE, P5_V_VOICE, P5_V_MODAL
    - P5_NF_TO, P5_NF_ING, P5_NF_PART, P5_NF_PCONS
    - P5_PR_CASE, P5_PR_SELF, P5_PR_DEMO, P5_PR_INDEF
    - P5_PREP_TIME, P5_PREP_PLAC, P5_PREP_DIRC, P5_PREP_PHRA
    - P5_CONJ_NOUN, P5_CONJ_ADV, P5_CONJ_CORR, P5_CONJ_COOR
    - P5_REL_PR, P5_REL_ADV
    - P5_VOC_NOUN, P5_VOC_VERB, P5_VOC_ADJ, P5_VOC_ADV, P5_VOC_PHRA
    - P5_COMPARIS, P5_SPECIAL
    
    Output ONLY the tag name. No explanation.
    `;

    try {
        const result = await model.generateContent(prompt);
        return result.response.text().trim().replace(/`/g, "");
    } catch (e) {
        return "UNKNOWN";
    }
}

async function run() {
    console.log("🚀 Starting Re-tagging (Local Mode)...");

    const allQuestions = loadLegacyData();
    console.log(`📊 Found ${allQuestions.length} questions in part5.ts via Regex.`);

    if (allQuestions.length === 0) {
        console.error("❌ No questions found. Please check the regex or file structure.");
        return;
    }

    const limit = allQuestions.length; // Process ALL questions
    const processBatch = allQuestions.slice(0, limit);
    const results: any[] = [];

    for (let i = 0; i < processBatch.length; i++) {
        const q = processBatch[i];
        console.log(`🔄 [${i + 1}/${processBatch.length}] Re-tagging: "${q.text.substring(0, 30)}..."`);
        const newTag = await retagQuestion(q.text, q.options);

        results.push({
            part: "Part 5",
            text: q.text,
            options: Object.entries(q.options).map(([label, text]) => ({ label: label.toUpperCase(), text })),
            correctAnswer: q.answer.toUpperCase(),
            explanation: q.explanation,
            tags: [newTag, "Legacy_Retagged"],
            generatedAt: new Date().toISOString()
        });
    }

    const outputFile = `retagged_part5_all.json`;
    fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
    console.log(`\n✅ Finished! ${results.length} questions saved to ${outputFile}`);
}

run();
