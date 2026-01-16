
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: '.env.local' });

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error("❌ Error: GEMINI_API_KEY is not found in .env.local");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);

function fileToGenerativePart(path: string, mimeType: string) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType,
        },
    };
}

async function run() {
    const pdfPath = process.argv[2] || 'public/audio/ETS_TOEIC_3/LC3-1.pdf';
    if (!fs.existsSync(pdfPath)) {
        console.error(`❌ Error: File not found: ${pdfPath}`);
        process.exit(1);
    }

    console.log(`🚀 Processing PDF for QUESTIONS: ${pdfPath} with Gemini 2.0 Flash...`);

    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    // Load existing scripts to merge if possible, or just extract independent sets
    let existingScripts: any[] = [];
    if (fs.existsSync('extracted_part3_scripts.json')) {
        const raw = fs.readFileSync('extracted_part3_scripts.json', 'utf-8');
        existingScripts = JSON.parse(raw).conversations || [];
    }

    const prompt = `
    You are an expert TOEIC content extractor.
    Analyze this PDF document which contains Part 3 Short Conversation questions.

    YOUR TASK:
    Extract the **Questions and Options** for each question set.
    
    CRITICAL INSTRUCTIONS:
    1. Identify each question block (e.g. 32, 33, 34).
    2. Extract the question text.
    3. Extract the 4 options (A, B, C, D).
    4. Group them by conversation sets (e.g. 32-34).
    5. Return valid JSON.

    Required JSON Structure:
    {
      "questionSets": [
        {
          "setId": "set_32_34",
          "questionRange": "32-34",
          "questions": [
            {
              "id": "q32",
              "text": "Where does the conversation take place?",
              "options": [
                { "label": "A", "text": "In a hotel" },
                { "label": "B", "text": "In a store" },
                { "label": "C", "text": "In a park" },
                { "label": "D", "text": "In a office" }
              ],
              "correctAnswer": "UNKNOWN" 
            },
            ...
          ]
        },
        ...
      ]
    }
    `;

    try {
        const pdfPart = fileToGenerativePart(pdfPath, "application/pdf");
        const result = await model.generateContent([prompt, pdfPart]);
        const response = await result.response;
        const text = response.text();

        let jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();

        const firstBrace = jsonStr.indexOf('{');
        const lastBrace = jsonStr.lastIndexOf('}');
        if (firstBrace !== -1 && lastBrace !== -1) {
            jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);
        }

        const parsed = JSON.parse(jsonStr);

        // MERGE LOGIC
        const mergedData = parsed.questionSets.map((qSet: any) => {
            const matchingScript = existingScripts.find((s: any) => s.setId === qSet.setId);
            return {
                ...qSet,
                script: matchingScript ? matchingScript.script : [],
                hasScript: !!matchingScript
            };
        });

        const outputPath = 'part3_data_final.json';
        fs.writeFileSync(outputPath, JSON.stringify({ sets: mergedData }, null, 2));
        console.log(`✅ Success! Extracted and Merged ${mergedData.length} sets.`);
        console.log(`💾 Saved to ${outputPath}`);

    } catch (error: any) {
        console.error("❌ Error processing PDF:", error.message);
        if (error.message.includes("JSON")) {
            console.log("Raw text dump:", error.rawText);  // If I attach rawText in catch
        }
    }
}

run();
