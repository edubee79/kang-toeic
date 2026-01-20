
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from 'fs';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("No API KEY");
    process.exit(1);
}
const genAI = new GoogleGenerativeAI(API_KEY);

const poolFile = 'ai_generated_reading_pool.json';

async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function cleanJson(text: string) {
    return text.replace(/```json/g, "").replace(/```/g, "").trim();
}

async function bulkGenerate(part: "6" | "7", totalPassages: number) {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const pool = fs.existsSync(poolFile) ? JSON.parse(fs.readFileSync(poolFile, 'utf8')) : [];

    let generated = 0;
    while (generated < totalPassages) {
        console.log(`\n🚀 [Part ${part}] Generating set ${generated + 1}/${totalPassages}...`);

        let prompt = "";
        if (part === "6") {
            prompt = `
            You are a TOEIC Part 6 expert. Generate 1 passage set (Email, Memo, or Notice).
            The passage MUST have exactly 4 blanks marked as [131], [132], [133], [134]. (Use these exact numbers for placeholders).
            One of the 4 questions MUST be a sentence insertion type.
            Context: Professional business settings (hiring, scheduling, office policy, shipping).
            
            JSON format:
            {
              "part": "6",
              "type": "EMAIL|MEMO|NOTICE",
              "content": "Full passage with [131] style markers.",
              "translation": "KR",
              "questions": [
                {
                  "id": "131",
                  "text": "Select the best answer.",
                  "options": [{"label":"A", "text":"..."},{"label":"B", "text":"..."},{"label":"C", "text":"..."},{"label":"D", "text":"..."}],
                  "correctAnswer": "A",
                  "explanation": "KR",
                  "classification": "P6_GRAMMAR_TENSE|P6_VOCAB_CONTEXT|P6_SENTENCE_INSERT|P6_CONNECTION"
                }
              ]
            }
            `;
        } else {
            const types = ["ADVERTISEMENT", "INFORMATION", "INSTRUCTIONS", "SCHEDULE", "REVIEW", "INVITATION", "ANNOUNCEMENT", "MEMO"];
            const type = types[Math.floor(Math.random() * types.length)];
            prompt = `
            You are a TOEIC Part 7 expert. Generate 1 passage set (Type: ${type}).
            Passage structure: 1 passage + 2 to 4 related questions.
            Context: Real business scenarios (e.g., product review, event invitation, work schedule).
            
            JSON format:
            {
              "part": "7",
              "type": "${type}",
              "title": "Passage Title",
              "content": "Passage content.",
              "translation": "KR",
              "questions": [
                {
                  "id": "147",
                  "text": "Question text?",
                  "options": [{"label":"A", "text":"..."},{"label":"B", "text":"..."},{"label":"C", "text":"..."},{"label":"D", "text":"..."}],
                  "correctAnswer": "A",
                  "explanation": "KR",
                  "classification": "P7_MAIN_IDEA|P7_DETAIL|P7_INFERENCE|P7_VOCABULARY"
                }
              ]
            }
            `;
        }

        const fullPrompt = `
        ${prompt}
        Strictly follow ETS style: Professional, concise, formal. 4 options per question (A, B, C, D).
        Ensure response is ONLY the JSON object. No markdown.
        `;

        try {
            const result = await model.generateContent(fullPrompt);
            const text = cleanJson(result.response.text());
            const data = JSON.parse(text);

            data.generatedAt = new Date().toISOString();
            pool.push(data);
            fs.writeFileSync(poolFile, JSON.stringify(pool, null, 2));

            generated++;
            console.log(`✅ Success: Part ${part} Set Saved. (Total in pool: ${pool.length})`);
            await sleep(6000);
        } catch (e: any) {
            console.error("❌ Batch failed:", e.message);
            await sleep(10000);
        }
    }
}

async function run() {
    const part = process.argv[2] as "6" | "7";
    const count = parseInt(process.argv[3] || "10", 10);

    if (part !== "6" && part !== "7") {
        console.log("Usage: npx tsx scripts/bulk_generate_reading.ts <6|7> <count>");
        return;
    }

    await bulkGenerate(part, count);
}

run();
