
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
    const pdfPath = 'public/audio/ETS_TOEIC_3/LC3-1.pdf';

    if (!fs.existsSync(pdfPath)) {
        console.error(`❌ Error: File not found: ${pdfPath}`);
        // Fallback for environment differences
        const altPath = 'LC3-1.pdf';
        if (fs.existsSync(altPath)) {
            console.log(`Using fallback path: ${altPath}`);
        } else {
            process.exit(1);
        }
    }

    console.log(`🚀 Extracting Part 4 QUESTIONS from: ${pdfPath}...`);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
    Analyze this PDF which contains TOEIC Part 4 (Short Talks) questions.
    
    YOUR TASK:
    Extract Questions 71-100.
    
    INSTRUCTIONS:
    1. Group questions by set (usually 3 questions per talk).
    2. Extract Question Text and 4 Options (A, B, C, D).
    3. Return valid JSON only.
    
    JSON Schema:
    {
      "sets": [
        {
          "setId": "set_71_73",
          "questionRange": "71-73",
          "questions": [
            {
              "id": "q71",
              "text": "What is the purpose of the call?",
              "options": [
                { "label": "A", "text": "To confirm a reservation" },
                { "label": "B", "text": "To request a refund" },
                { "label": "C", "text": "To schedule a meeting" },
                { "label": "D", "text": "To cancel an order" }
              ]
            },
            ...
          ]
        }
      ]
    }
    `;

    try {
        const finalPdfPath = fs.existsSync(pdfPath) ? pdfPath : 'LC3-1.pdf';
        const pdfPart = fileToGenerativePart(finalPdfPath, "application/pdf");
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
        const outputPath = 'part4_questions_raw.json';
        fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
        console.log(`✅ Success! Extracted ${parsed.sets.length} Part 4 sets.`);
        console.log(`💾 Saved to ${outputPath}`);

    } catch (error: any) {
        console.error("❌ Error:", error.message);
    }
}

run();
