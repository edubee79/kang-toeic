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

    console.log(`\n🚀 Processing Test ${testNumber} Part 6 (High Quality Upgrade)...`);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
    You are an expert TOEIC Part 6 content extractor. Analyze this PDF document.

    OBJECTIVE:
    Extract 4 passages and their questions (131-146) from Part 6 with PERFECT layout preservation.

    STRICT FORMATTING RULES:
    1. **Guidance Line**: Capture the line above each passage (e.g., "Questions 131-134 refer to the following email.") and save it as "guidance".
    2. **Layout Preservation**: 
       - For EMAILS: Include "From:", "To:", "Subject:", "Date:" headers exactly as they appear.
       - For LETTERS: Include sender address, date, and recipient address at the top.
       - For NOTICES/MEMOS: Include "To:", "From:", "Date:", "Subject:" headers.
    3. **Paragraphs**: Use \\n\\n between paragraphs. Ensure text is continuous within a paragraph (no hard breaks inside sentences).
    4. **Marker Placement**: Keep [131], [132], etc. markers exactly as they appear in the text.
    5. **Passage Title**: If a document has a bold title or subject line, extract it as "title".

    QUESTION RULES:
    1. Set question "text" to null (UI will handle it).
    2. Extract all 4 options (A, B, C, D) exactly.

    REQUIRED JSON FORMAT:
    {
      "testId": ${testNumber},
      "passages": [
        {
          "id": "p6-t${testNumber}-p1",
          "guidance": "Questions 131-134 refer to the following email.",
          "type": "EMAIL",
          "title": "Subject line text",
          "content": "From: ...\\nTo: ...\\n\\nDear ...\\n\\nBody text... [131] ... continued body... [132].",
          "questions": [
            {
              "id": "131",
              "text": null,
              "options": [
                { "label": "A", "text": "choice A" },
                { "label": "B", "text": "choice B" },
                { "label": "C", "text": "choice C" },
                { "label": "D", "text": "choice D" }
              ]
            }
          ]
        }
      ]
    }

    Respond ONLY with the JSON object.
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
        const outputPath = `extracted_part6_test${testNumber}_v3.json`;
        fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
        console.log(`✅ Extracted ${parsed.passages.length} passages with guidance lines`);

        if (fs.existsSync(solutionPath)) {
            await extractAnswers(testNumber, solutionPath);
        }
        return true;
    } catch (error: any) {
        console.error(`❌ Error:`, error.message);
        return false;
    }
}

async function extractAnswers(testNumber: number, solutionPath: string) {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
    const prompt = `
    Extract answer key for Part 6 (Questions 131-146).
    Return JSON: {"answers": [{"questionId": "131", "correctAnswer": "D", "classification": "P6_VOCABULARY"}]}
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
        const outputPath = `extracted_part6_test${testNumber}_answers_v3.json`;
        fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
        console.log(`✅ Extracted answers`);
    } catch (error: any) {
        console.error(`❌ Answers error:`, error.message);
    }
}

async function batchProcess() {
    console.log("📚 Batch Re-extracting Part 6 Tests 2-10 (High Quality v3)\n");
    const tests = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (const testNum of tests) {
        const success = await extractPart6(testNum);
        if (!success) {
            console.log(`⚠️ skipping Test ${testNum}`);
        }
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
    console.log("\n✅ Batch extraction complete!");
}

batchProcess();
