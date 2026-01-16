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

    CRITICAL INSTRUCTIONS FOR TEXT FORMATTING:
    1. **Remove hard line breaks within sentences**: Join lines that are part of the same sentence. Only use \\n for actual paragraph breaks.
    2. **Preserve paragraph structure**: Use \\n\\n (double newline) between paragraphs.
    3. Extract ALL 4 passages with 4 questions each (Questions 131-146)
    4. Keep [131], [132], etc. markers in the passage content
    5. Set question "text" field to null (UI will auto-generate)
    6. Return ONLY valid JSON

    Required JSON Structure:
    {
      "testId": ${testNumber},
      "passages": [
        {
          "id": "p6-t${testNumber}-p1",
          "type": "EMAIL",
          "title": "Subject line if present",
          "content": "Continuous text without hard line breaks. [131] marker. More text. [132] marker.\\n\\nNew paragraph.",
          "questions": [
            {
              "id": "131",
              "text": null,
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
        const outputPath = `extracted_part6_test${testNumber}_v2.json`;
        fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
        console.log(`✅ Extracted ${parsed.passages.length} passages`);

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
    Extract answer key for Part 6 (Questions 131-146).
    Return JSON: {"answers": [{"questionId": "131", "correctAnswer": "D", "classification": "P6_VOCABULARY"}]}
    Classifications: P6_SENTENCE_INSERT, P6_VOCABULARY, P6_GRAMMAR
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
        const outputPath = `extracted_part6_test${testNumber}_answers_v2.json`;
        fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
        console.log(`✅ Extracted ${parsed.answers.length} answers`);

    } catch (error: any) {
        console.error(`❌ Error extracting answers:`, error.message);
    }
}

async function batchProcess() {
    console.log("📚 Batch Re-extracting Part 6 Tests 2-10 with improved formatting\n");

    const tests = [2, 3, 4, 5, 6, 7, 8, 9, 10]; // Test 1 already done

    for (const testNum of tests) {
        const success = await extractPart6(testNum);
        if (!success) {
            console.log(`⚠️  Skipping Test ${testNum} due to error`);
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    console.log("\n✅ Batch processing complete!");
}

batchProcess();
