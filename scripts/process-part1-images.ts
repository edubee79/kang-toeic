import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

async function extractPart1DataFromImages(imagePaths: string[]): Promise<any[]> {
    // We will use gemini-2.0-flash as it is confirmed available and good with images
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
    Analyze these pages from a TOEIC Answer Key/Explanation book.
    Goal: Structure the data for Part 1 (Questions 1-6) into JSON.
    
    Target Data: Part 1 questions only (Questions 1 to 6).
    
    For each question (1 to 6):
    1. Identify the Correct Answer (A, B, C, or D).
    2. Extract the 4 options (A, B, C, D) which include:
       - option: "A", "B", "C", or "D".
       - text: The full English audio script for that option.
       - translation: The Korean translation provided.

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
    Output ONLY valid JSON. If Part 1 is not found, output { "questions": [] }.
    `;

    const parts: any[] = [
        { text: prompt }
    ];

    for (const imagePath of imagePaths) {
        if (fs.existsSync(imagePath)) {
            const data = fs.readFileSync(imagePath);
            parts.push({
                inlineData: {
                    data: data.toString("base64"),
                    mimeType: "image/jpeg"
                }
            });
        }
    }

    let retries = 3;
    while (retries > 0) {
        try {
            console.log(`📡 Sending request to Gemini for ${imagePaths.length} images... (Attempt ${4 - retries})`);
            const result = await model.generateContent(parts);

            const text = result.response.text();

            const jsonStr = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
            // Allow for localized "JSON" markers if any
            const firstBrace = jsonStr.indexOf('{');
            const lastBrace = jsonStr.lastIndexOf('}');
            const cleanJson = jsonStr.substring(firstBrace, lastBrace + 1);

            const rawData = JSON.parse(cleanJson);

            return rawData.questions || [];

        } catch (e: any) {
            console.error(`❌ Attempt failed:`, e.message);
            retries--;
            if (retries === 0) throw e;
            console.log("⏳ Sleeping 5s before retry...");
            await new Promise(r => setTimeout(r, 5000));
        }
    }
    return [];
}

async function processTest(testId: number) {
    const baseDir = `toeic-data/ETS정기기출3탄/해설/LC/${testId}회`;

    console.log(`\n🚀 Processing Part 1 Test ${testId}...`);

    if (!fs.existsSync(baseDir)) {
        console.error(`⚠️ Skipping Test ${testId}: Directory not found ${baseDir}`);
        return;
    }

    // Windows sort order simulation + filtering for jpg/png
    const files = fs.readdirSync(baseDir)
        .filter(f => /\.(jpg|png)$/i.test(f))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

    // User said "first 1, 2 pages" in Windows sort order are Part 1.
    // However, usually index 0 might be a cover/intro. Let's look at the first few files.
    // Based on file list seeing: _2.jpg, _3.jpg, _4.jpg... (Check if _1 exists or if it starts at _2)
    // The previous `ls` showed `정기3토익_LC_해설_10.jpg` ... `정기3토익_LC_해설_2.jpg`.
    // Natural sort should put `..._2.jpg` before `..._10.jpg`.

    // Let's take the first 3 files just to be safe and let Gemini filter non-Part 1 pages if needed.
    // Actually, user specified "first 1,2 pages".
    // We will take the first 3 sorted files to ensure we cover Part 1 fully.
    const candidateFiles = files.slice(0, 3).map(f => path.join(baseDir, f));

    console.log(`📂 Candidate images (sorted):`, candidateFiles);

    if (candidateFiles.length === 0) {
        console.error(`⚠️ No images found in ${baseDir}`);
        return;
    }

    try {
        const questions = await extractPart1DataFromImages(candidateFiles);

        if (questions.length === 0) {
            console.log(`⚠️ No Part 1 questions extracted for Test ${testId}.`);
        } else {
            console.log(`✨ Extracted: ${questions.length} questions`);
            const outPath = `src/data/generated/part1_test${testId.toString().padStart(2, '0')}.json`;
            if (!fs.existsSync(path.dirname(outPath))) fs.mkdirSync(path.dirname(outPath), { recursive: true });

            fs.writeFileSync(outPath, JSON.stringify({ testId, questions }, null, 2));
            console.log(`💾 Saved Test ${testId} to: ${outPath}`);
        }

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
            await new Promise(r => setTimeout(r, 5000));
        }
    } else if (arg) {
        const testId = parseInt(arg);
        if (isNaN(testId)) {
            console.error("❌ Invalid test ID");
        } else {
            await processTest(testId);
        }
    } else {
        console.log("Usage: npx tsx scripts/process-part1-images.ts [testId|all]");
    }
}

runAll();
