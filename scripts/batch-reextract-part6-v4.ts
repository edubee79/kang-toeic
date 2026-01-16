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

    console.log(`\n🚀 Processing Test ${testNumber} Part 6 (Ultra High Quality - Line Fix)...`);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
    You are an expert TOEIC Part 6 content extractor. Analyze this PDF document.

    OBJECTIVE:
    Extract 4 passages and their questions (131-146) with PERFECT layout and sentence continuity.

    STRICT LINE-ENDING RULES:
    1. **Join Sentences**: A line MUST NOT end until it reaches a terminal punctuation mark (., !, or ?). 
    2. **No Single Newlines**: NEVER include a single newline character (\\n) within a paragraph. 
    3. **Paragraph Breaks**: ONLY use double newlines (\\n\\n) for actual paragraph breaks or to separate headers (From, To, Subject) from the body.
    4. **Headers**: For Emails/Letters, keep headers on their own lines, separated by \\n\\n from the body.
    5. **Guidance Line**: Capture the "Questions 131-134 refer to..." line as "guidance".
    6. **Markers**: Place [131], [132], etc. exactly where they appear in the PDF text.

    QUESTION RULES:
    1. Set question "text" to null.
    2. Extract all 4 options (A, B, C, D) exactly.

    REQUIRED JSON FORMAT:
    {
      "testId": ${testNumber},
      "passages": [
        {
          "id": "p6-t${testNumber}-p1",
          "guidance": "Questions 131-134 refer to the following email.",
          "type": "EMAIL",
          "title": "Subject: ...",
          "content": "From: ...\\n\\nTo: ...\\n\\nSubject: ...\\n\\nDear ...\\n\\nBody text starts here and continues without any single newlines until a full stop is reached. [131] The sentence continues... [132].\\n\\nNext paragraph starts here.",
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
        // Additional Server-side Cleanup: Join lines that don't end in punctuation
        parsed.passages.forEach((p: any) => {
            if (p.content) {
                // Split by paragraphs, then join lines inside paragraphs
                const paragraphs = p.content.split(/\n\n+/);
                p.content = paragraphs.map((para: string) => {
                    // Check if paragraph is a header (starts with From:, To:, Subject:, Date:)
                    if (para.match(/^(From|To|Subject|Date|Dear|Sincerely):/i)) return para;
                    // Otherwise, join all lines with a space
                    return para.replace(/\n/g, ' ').replace(/ +/g, ' ').trim();
                }).join('\n\n');
            }
        });

        const outputPath = `extracted_part6_test${testNumber}_v3.json`;
        fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
        console.log(`✅ Extracted ${parsed.passages.length} passages for Test ${testNumber}`);

        if (fs.existsSync(solutionPath)) {
            await extractAnswers(testNumber, solutionPath);
        }
        return true;
    } catch (error: any) {
        console.error(`❌ Error Test ${testNumber}:`, error.message);
        return false;
    }
}

async function extractAnswers(testNumber: number, solutionPath: string) {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
    const prompt = `Extract answer key for Part 6 (Questions 131-146). JSON: {"answers": [{"questionId": "131", "correctAnswer": "D", "classification": "P6_VOCABULARY"}]}`;
    try {
        const pdfPart = fileToGenerativePart(solutionPath, "application/pdf");
        const result = await model.generateContent([prompt, pdfPart]);
        const response = await result.response;
        const text = response.text();
        let jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const firstBrace = jsonStr.indexOf('{');
        const lastBrace = jsonStr.lastIndexOf('}');
        if (firstBrace !== -1 && lastBrace !== -1) jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);
        const parsed = JSON.parse(jsonStr);
        const outputPath = `extracted_part6_test${testNumber}_answers_v3.json`;
        fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
        console.log(`✅ Extracted answers`);
    } catch (error: any) {
        console.error(`❌ Error:`, error.message);
    }
}

async function batchProcess() {
    console.log("📚 Starting ULTRA High Quality Part 6 Extraction (Tests 1-10)\n");
    const tests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (const testNum of tests) {
        const success = await extractPart6(testNum);
        if (!success) console.log(`⚠️ Skipping Test ${testNum}`);
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
    console.log("\n✅ Ultra Batch extraction complete!");
}

batchProcess();
