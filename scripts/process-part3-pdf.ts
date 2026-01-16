
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
    const pdfPath = 'LC3-1.PDF';
    if (!fs.existsSync(pdfPath)) {
        console.error(`❌ Error: File not found: ${pdfPath}`);
        process.exit(1);
    }

    console.log(`🚀 Processing PDF: ${pdfPath} with Gemini 2.0 Flash...`);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
    You are an expert TOEIC content extractor.
    Analyze this PDF document which contains Part 3 Short Conversation scripts and questions.

    YOUR TASK:
    Extract the **Conversation Scripts** (Dialogues) for each question set.
    
    CRITICAL INSTRUCTIONS:
    1. Identify each conversation block. It usually says "Questions 32-34 refer to the following conversation."
    2. Extract the speaker (e.g., M, W, M-Au, W-Br) and the text.
    3. full speaker names like "Man", "Woman" are preferred over "M", "W".
    4. Return valid JSON.

    Required JSON Structure:
    {
      "conversations": [
        {
          "setId": "set_32_34",
          "questionRange": "32-34",
          "script": [
            { "speaker": "Woman", "text": "Hello, I am calling to..." },
            { "speaker": "Man", "text": "Okay, let me check that." }
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

        console.log("🔍 Raw Output Preview:", text.substring(0, 200) + "...");

        let jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();

        // HEURISTIC: Find first { and last }
        const firstBrace = jsonStr.indexOf('{');
        const lastBrace = jsonStr.lastIndexOf('}');

        if (firstBrace !== -1 && lastBrace !== -1) {
            jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);
        }

        try {
            const parsed = JSON.parse(jsonStr);
            const outputPath = 'extracted_part3_scripts.json';
            fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
            console.log(`✅ Success! Extracted ${parsed.conversations.length} conversation sets.`);
            console.log(`💾 Saved to ${outputPath}`);
        } catch (e) {
            console.error("❌ JSON Parse Failed. Saving raw output for inspection.");
            fs.writeFileSync('raw_gemini_output.txt', text);
        }

    } catch (error: any) {
        console.error("❌ Error processing PDF:", error.message);
    }
}

run();
