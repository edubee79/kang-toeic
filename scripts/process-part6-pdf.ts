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

async function extractPart6(testNumber: number) {
    const pdfPath = `public/images/ETS_TOEIC_4/RC4-${testNumber}.pdf`;
    const solutionPath = `public/images/ETS_TOEIC_4/RC4-${testNumber}해설.pdf`;

    if (!fs.existsSync(pdfPath)) {
        console.error(`❌ Error: File not found: ${pdfPath}`);
        process.exit(1);
    }

    console.log(`🚀 Processing Test ${testNumber} Part 6 with Gemini 2.0 Flash...`);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
    You are an expert TOEIC Part 6 content extractor.
    Analyze this PDF document which contains Part 6 Text Completion questions (Questions 131-146).

    YOUR TASK:
    Extract ALL 4 passages and their questions from Part 6.

    CRITICAL INSTRUCTIONS:
    1. Part 6 has EXACTLY 4 passages with 4 questions each (Questions 131-146)
    2. Each passage has blanks marked as [131], [132], etc. - KEEP THESE MARKERS IN THE TEXT
    3. Identify passage type: EMAIL, LETTER, ADVERTISEMENT, ARTICLE, NOTICE, MEMO, etc.
    4. Extract the title/subject line if present
    5. Extract all 4 answer options (A, B, C, D) for each question
    6. For "sentence insertion" questions, the options are full sentences
    7. Return valid JSON with NO extra text

    Required JSON Structure:
    {
      "testId": ${testNumber},
      "passages": [
        {
          "id": "p6-t${testNumber}-p1",
          "type": "EMAIL",
          "title": "Order Update",
          "content": "Dear Ms. Hahn,\\n\\nThank you for your order. [131]. We will ship your items...\\n\\n[132] to your garden. [133] equipped...\\n\\nSincerely,\\nJohn Doe",
          "questions": [
            {
              "id": "131",
              "text": "Which sentence best fits in position 131?",
              "options": [
                { "label": "A", "text": "Staff members have written articles." },
                { "label": "B", "text": "Installing lights can enhance the effect." },
                { "label": "C", "text": "Local competitors cannot beat our prices." },
                { "label": "D", "text": "Our goal is to make your vision a reality." }
              ]
            },
            {
              "id": "132",
              "text": "What is the best word for position 132?",
              "options": [
                { "label": "A", "text": "beauty" },
                { "label": "B", "text": "beautiful" },
                { "label": "C", "text": "beautifully" },
                { "label": "D", "text": "beautify" }
              ]
            }
          ]
        }
      ]
    }

    IMPORTANT:
    - Keep [131], [132], [133], [134] markers in the passage content
    - Extract ALL 4 passages (questions 131-134, 135-138, 139-142, 143-146)
    - Preserve line breaks in passage content using \\n
    - Return ONLY valid JSON, no markdown code blocks
    `;

    try {
        const pdfPart = fileToGenerativePart(pdfPath, "application/pdf");
        const result = await model.generateContent([prompt, pdfPart]);
        const response = await result.response;
        const text = response.text();

        console.log("🔍 Raw Output Preview:", text.substring(0, 200) + "...");

        let jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();

        // Find first { and last }
        const firstBrace = jsonStr.indexOf('{');
        const lastBrace = jsonStr.lastIndexOf('}');

        if (firstBrace !== -1 && lastBrace !== -1) {
            jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);
        }

        try {
            const parsed = JSON.parse(jsonStr);
            const outputPath = `extracted_part6_test${testNumber}.json`;
            fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
            console.log(`✅ Success! Extracted ${parsed.passages.length} passages.`);
            console.log(`💾 Saved to ${outputPath}`);

            // Now extract answers from solution PDF
            if (fs.existsSync(solutionPath)) {
                console.log(`\n🔍 Extracting answers from solution PDF...`);
                await extractAnswers(testNumber, solutionPath);
            }

        } catch (e) {
            console.error("❌ JSON Parse Failed. Saving raw output for inspection.");
            fs.writeFileSync(`raw_gemini_output_test${testNumber}.txt`, text);
        }

    } catch (error: any) {
        console.error("❌ Error processing PDF:", error.message);
    }
}

async function extractAnswers(testNumber: number, solutionPath: string) {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
    Extract the answer key and explanations for Part 6 (Questions 131-146) from this solution PDF.

    Return JSON format:
    {
      "answers": [
        {
          "questionId": "131",
          "correctAnswer": "D",
          "translation": "Korean translation of question",
          "explanation": "Korean explanation of why this is correct",
          "classification": "P6_SENTENCE_INSERT" or "P6_VOCABULARY" or "P6_GRAMMAR"
        }
      ]
    }

    CLASSIFICATION RULES:
    - P6_SENTENCE_INSERT: "Which sentence best fits..." or sentence insertion questions
    - P6_VOCABULARY: Word choice questions (e.g., "beauty" vs "beautiful")
    - P6_GRAMMAR: Grammar/tense questions

    Return ONLY valid JSON.
    `;

    try {
        const pdfPart = fileToGenerativePart(solutionPath, "application/pdf");
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
        const outputPath = `extracted_part6_test${testNumber}_answers.json`;
        fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
        console.log(`✅ Extracted ${parsed.answers.length} answers and explanations.`);
        console.log(`💾 Saved to ${outputPath}`);

    } catch (error: any) {
        console.error("❌ Error extracting answers:", error.message);
    }
}

// Process Test 2
const testNumber = parseInt(process.argv[2] || "2");
console.log(`\n📚 Extracting Part 6 Data for Test ${testNumber}\n`);
extractPart6(testNumber);
