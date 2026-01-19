import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

interface Part1Question {
    id: string;
    correctAnswer: string;
    scripts: {
        option: string;
        text: string;
        translation: string;
    }[];
}

async function extractPart1Data(pdfPath: string): Promise<Part1Question[]> {
    const pdfData = fs.readFileSync(pdfPath);
    const base64Pdf = pdfData.toString("base64");

    // Using gemini-flash-latest as 1.5-flash was not in the authenticated list
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const prompt = `
    Perform a data extraction task on this educational document (TOEIC Answer Key/Explanation).
    Goal: Structure the raw data for Part 1 (Questions 1-6) into JSON.
    
    Target Data: Part 1 only (Question 1 to 6).
    
    For each question (1 to 6):
    1. Identify the Correct Answer (A, B, C, or D).
    2. Extract the 4 options (A, B, C, D) which include:
       - option: "A", "B", "C", or "D".
       - text: The full English audio script for that option.
       - translation: The Korean translation provided in the explanation.

    Output Format (JSON):
    {
      "questions": [
        {
          "id": "q1",
          "correctAnswer": "A",
          "scripts": [
            { "option": "A", "text": "...", "translation": "..." },
            { "option": "B", "text": "...", "translation": "..." },
            { "option": "C", "text": "...", "translation": "..." },
            { "option": "D", "text": "...", "translation": "..." }
          ]
        },
        ...
      ]
    }
    Output ONLY valid JSON.
    `;

    let retries = 5;
    while (retries > 0) {
        try {
            console.log(`📡 Sending request to Gemini... (Attempt ${6 - retries}/5)`);
            const result = await model.generateContent([
                { inlineData: { mimeType: "application/pdf", data: base64Pdf } },
                { text: prompt },
            ]);

            const text = result.response.text();

            // Clean up md code blocks
            const jsonStr = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();

            // Allow for localized "JSON" markers if any
            const firstBrace = jsonStr.indexOf('{');
            const lastBrace = jsonStr.lastIndexOf('}');
            const cleanJson = jsonStr.substring(firstBrace, lastBrace + 1);

            const rawData = JSON.parse(cleanJson);

            if (!rawData.questions || rawData.questions.length === 0) {
                throw new Error("No questions found in response");
            }

            return rawData.questions;

        } catch (e: any) {
            console.error(`❌ Attempt failed:`, e.message);
            retries--;
            if (retries === 0) throw e;

            // Exponential backoff
            const waitTime = (6 - retries) * 5000;
            console.log(`⏳ Sleeping ${waitTime / 1000}s before retry...`);
            await new Promise(r => setTimeout(r, waitTime));
        }
    }
    return [];
}

async function processTest(testId: number) {
    const sPdf = `public/audio/ETS_TOEIC_3/LC3-${testId}해설.pdf`;

    console.log(`\n🚀 Processing Part 1 Test ${testId}...`);
    console.log(`📂 Solution PDF: ${sPdf} (${fs.existsSync(sPdf) ? '✅ Found' : '❌ Missing'})`);

    if (!fs.existsSync(sPdf)) {
        console.error(`⚠️ Skipping Test ${testId}: PDF not found.`);
        return;
    }

    try {
        const questions = await extractPart1Data(sPdf);

        console.log(`✨ Extracted: ${questions.length} questions`);

        const outPath = `src/data/generated/part1_test${testId.toString().padStart(2, '0')}.json`;
        if (!fs.existsSync(path.dirname(outPath))) fs.mkdirSync(path.dirname(outPath), { recursive: true });

        fs.writeFileSync(outPath, JSON.stringify({ testId, questions }, null, 2));
        console.log(`💾 Saved Test ${testId} to: ${outPath}`);

    } catch (e: any) {
        console.error(`🛑 Error processing Test ${testId}:`, e.message || e);
    }
}

async function runAll() {
    const arg = process.argv[2];

    if (arg === 'all') {
        for (let i = 1; i <= 10; i++) {
            await processTest(i);
            // Sleep briefly between tests to avoid rate limits
            await new Promise(r => setTimeout(r, 2000));
        }
    } else if (arg) {
        const testId = parseInt(arg);
        if (isNaN(testId)) {
            console.error("❌ Invalid test ID");
        } else {
            await processTest(testId);
        }
    } else {
        console.log("Usage: npx tsx scripts/process-part1-complete.ts [testId|all]");
    }
}

runAll();
