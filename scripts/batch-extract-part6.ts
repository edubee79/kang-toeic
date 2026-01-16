import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from 'fs';
import * as dotenv from 'dotenv';

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
        return false;
    }

    console.log(`\n🚀 Processing Test ${testNumber} Part 6...`);

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
          "content": "passage text with [131], [132], [133], [134] markers",
          "questions": [
            {
              "id": "131",
              "text": "question text",
              "options": [
                { "label": "A", "text": "option A" },
                { "label": "B", "text": "option B" },
                { "label": "C", "text": "option C" },
                { "label": "D", "text": "option D" }
              ]
            }
          ]
        }
      ]
    }

    IMPORTANT:
    - Keep [131]-[146] markers in passage content
    - Extract ALL 4 passages
    - Preserve line breaks using \\n
    - Return ONLY valid JSON
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
        const outputPath = `extracted_part6_test${testNumber}.json`;
        fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
        console.log(`✅ Extracted ${parsed.passages.length} passages`);

        // Extract answers
        if (fs.existsSync(solutionPath)) {
            await extractAnswers(testNumber, solutionPath);
        }

        return true;

    } catch (error: any) {
        console.error(`❌ Error processing Test ${testNumber}:`, error.message);
        return false;
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
          "classification": "P6_SENTENCE_INSERT" or "P6_VOCABULARY" or "P6_GRAMMAR"
        }
      ]
    }

    CLASSIFICATION RULES:
    - P6_SENTENCE_INSERT: "Which sentence best fits..." questions
    - P6_VOCABULARY: Word choice questions
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
        console.log(`✅ Extracted ${parsed.answers.length} answers`);

    } catch (error: any) {
        console.error(`❌ Error extracting answers for Test ${testNumber}:`, error.message);
    }
}

// Batch process all tests
async function batchProcess() {
    console.log("📚 Batch Processing Part 6 Tests 1-10\n");

    const tests = [1, 3, 4, 5, 6, 7, 8, 9, 10]; // Skip 2 (already done)

    for (const testNum of tests) {
        const success = await extractPart6(testNum);
        if (!success) {
            console.log(`⚠️  Skipping Test ${testNum} due to error`);
        }
        // Wait 2 seconds between requests to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    console.log("\n✅ Batch processing complete!");
}

batchProcess();
