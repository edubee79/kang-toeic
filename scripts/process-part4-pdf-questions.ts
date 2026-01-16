import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

interface Part4Question {
    id: string;
    text: string;
    options: { label: string; text: string }[];
    correctAnswer: string;
}

interface Part4Set {
    setId: string;
    questionRange: string;
    questions: Part4Question[];
}

async function extractPart4Questions(pdfPath: string) {
    try {
        const pdfData = fs.readFileSync(pdfPath);
        const base64Pdf = pdfData.toString("base64");

        console.log(`🚀 Processing PDF for Part 4 QUESTIONS: ${pdfPath}...`);

        const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

        const prompt = `
    You are an expert TOEIC content extractor.
    Analyze this PDF document which contains Part 4 Short Talk questions.

    YOUR TASK:
    Extract the **Questions and Options** for Part 4 ONLY (Questions 71-100).
    
    CRITICAL INSTRUCTIONS:
    1. Identify each question block (e.g. 71, 72, 73).
    2. Extract the question text.
    3. Extract the 4 options (A, B, C, D).
    4. Group them by talk sets (e.g. 71-73, 74-76, etc.).
    5. Return valid JSON.

    Required JSON Structure:
    {
      "questionSets": [
        {
          "setId": "set_71_73",
          "questionRange": "71-73",
          "questions": [
            {
              "id": "q71",
              "text": "What is the main topic?",
              "options": [
                { "label": "A", "text": "Option A text" },
                { "label": "B", "text": "Option B text" },
                { "label": "C", "text": "Option C text" },
                { "label": "D", "text": "Option D text" }
              ],
              "correctAnswer": "UNKNOWN" 
            },
            ...
          ]
        },
        ...
      ]
    }

    IMPORTANT:
    - Extract ONLY Part 4 questions (71-100)
    - Each set has 3 questions
    - Return ONLY valid JSON, no extra text
    - Use "UNKNOWN" for correctAnswer
    `;

        const result = await model.generateContent([
            {
                inlineData: {
                    mimeType: "application/pdf",
                    data: base64Pdf,
                },
            },
            { text: prompt },
        ]);

        const responseText = result.response.text();
        const cleanJson = responseText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();

        const parsed = JSON.parse(cleanJson);
        const sets = parsed.questionSets || [];

        const output = { sets };
        fs.writeFileSync("part4_data_final.json", JSON.stringify(output, null, 2));

        console.log(`✅ Success! Extracted ${sets.length} sets for Part 4.`);
        console.log(`💾 Saved to part4_data_final.json`);
    } catch (error: any) {
        console.error("❌ Error processing PDF:", error.message);
        if (error.message.includes("JSON")) {
            console.log("Raw text dump:", error.message);
        }
    }
}

const pdfPath = process.argv[2] || "public/audio/ETS_TOEIC_3/LC3-1.pdf";
extractPart4Questions(pdfPath);
