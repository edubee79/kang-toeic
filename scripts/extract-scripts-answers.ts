
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
  const pdfPath = process.argv[2] || 'public/audio/ETS_TOEIC_3/LC3-1해설.pdf';

  if (!fs.existsSync(pdfPath)) {
    console.error(`❌ Error: File not found: ${pdfPath}`);
    process.exit(1);
  }

  console.log(`🚀 Extracting SCRIPTS & ANSWERS (Q32-100) from: ${pdfPath}...`);

  const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

  const prompt = `
    Analyze this TOEIC Solution PDF.
    
    YOUR TASK:
    1. Extract correct answers for Questions 31 to 100.
    2. Extract the script (transcript) for each set (conversation or talk).
    
    INSTRUCTIONS:
    - Identify sets by question ranges (e.g., 32-34, 71-73).
    - For each set, provide:
        - setId: (e.g., "set_32_34")
        - corrections: A map of question index to its correct answer (A/B/C/D).
        - script: Array of dialogues (Part 3) or a single text block (Part 4).
    
    JSON Schema:
    {
      "results": [
        {
          "setId": "set_32_34",
          "answers": { "q32": "A", "q33": "C", "q34": "B" },
          "script": [
            { "speaker": "Woman", "text": "..." },
            { "speaker": "Man", "text": "..." }
          ]
        },
        {
          "setId": "set_71_73",
          "answers": { "q71": "D", "q72": "A", "q73": "C" },
          "script": "Attention all passengers, this is a talk..."
        }
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
    const outputPath = 'part34_solutions_raw.json';
    fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
    console.log(`✅ Success! Extracted ${parsed.results.length} solution sets.`);
    console.log(`💾 Saved to ${outputPath}`);

  } catch (error: any) {
    console.error("❌ Error:", error.message);
  }
}

run();
