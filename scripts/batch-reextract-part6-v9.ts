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

    console.log(`\n🚀 Processing Test ${testNumber} Part 6 (V9 - Gemini 1.5 Pro)...`);

    // Using 1.5 Pro for maximum text fidelity
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `
    Task: Extract all Part 6 content (4 passages, 16 questions: 131-146) from the provided TOEIC PDF.

    FORMATTING RULES (CRITICAL):
    1. **Text Continuity**: Join broken lines into single continuous sentences within a paragraph. A sentence MUST only end when it reaches terminal punctuation (. ? !).
    2. **Compact Headers**:
       - Email headers (From, To, Subject, Date) and sender/recipient Address blocks must be on consecutive lines with a single newline (\\n).
       - Ensure there is NO extra space between characters (e.g., use "From: " not "F r o m : ").
       - Put a double newline (\\n\\n) after the last header/address line before starting the greeting or body.
    3. **Guidance**: Capture the line above each passage (e.g., "Questions 131-134 refer to the following email.") as "guidance".
    4. **Questions**: You MUST populate the "questions" array with all 4 options (A-D) for every question. NEVER skip options. Set question "text" to null.
    5. **Paragraphs**: Use double newlines (\\n\\n) to separate distinct paragraphs.

    JSON SCHEMA:
    {
      "testId": ${testNumber},
      "passages": [
        {
          "id": "p6-t${testNumber}-p1",
          "guidance": "Questions 131-134 refer to...",
          "type": "EMAIL",
          "title": "Bold Subject or null",
          "content": "From: ...\\nTo: ...\\n\\nDear ...\\n\\nBody text... [131] ... [132].",
          "questions": [
            {
              "id": "131",
              "text": null,
              "options": [
                { "label": "A", "text": "choice text" },
                { "label": "B", "text": "choice text" },
                { "label": "C", "text": "choice text" },
                { "label": "D", "text": "choice text" }
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
        if (firstBrace !== -1 && lastBrace !== -1) jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);

        const parsed = JSON.parse(jsonStr);

        // Final layout verification: join lines that don't end in punctuation
        parsed.passages.forEach((p: any) => {
            if (p.content) {
                const lines = p.content.split('\n').map((l: string) => l.trim()).filter((l: string) => l !== '');
                let finalContent = '';
                let isPrevHeader = false;

                for (let line of lines) {
                    const isHeaderLine = line.match(/^(From|To|Subject|Date|Sent|Dear|Sincerely|Sincerely yours|Regards|Best regards|Best|To Whom it|April |January |February |March |May |June |July |August |September |October |November |December |[0-9]{1,2} [A-Z][a-z]+)/i) ||
                        line.match(/^\d+ \w+( Street| Road| Avenue| Blvd| St| Ave| Rd)/i) ||
                        line.match(/^[A-Z][A-Z\s]+, [A-Z]{2} \d{5}/) ||
                        line.match(/^[A-Z][a-z]+, [A-Z][a-z]+$/);

                    if (isHeaderLine) {
                        finalContent += (finalContent === '' ? '' : '\n') + line;
                        isPrevHeader = true;
                    } else {
                        if (isPrevHeader) {
                            finalContent += '\n\n' + line;
                        } else {
                            const lastChar = finalContent.trim().slice(-1);
                            if (lastChar === '.' || lastChar === '!' || lastChar === '?' || finalContent === '' || lastChar === ']' || lastChar === ':') {
                                finalContent += '\n\n' + line;
                            } else {
                                finalContent += ' ' + line;
                            }
                        }
                        isPrevHeader = false;
                    }
                }
                p.content = finalContent.trim();
            }
            // Strict check
            if (p.questions.length < 4) throw new Error("Missing questions");
        });

        const outputPath = `extracted_part6_test${testNumber}_v3.json`;
        fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
        console.log(`✅ Test ${testNumber} Extraction (1.5 Pro) Success`);

        if (fs.existsSync(solutionPath)) {
            await extractAnswers(testNumber, solutionPath);
        }
        return true;
    } catch (error: any) {
        console.error(`❌ Test ${testNumber} Error:`, error.message);
        return false;
    }
}

async function extractAnswers(testNumber: number, solutionPath: string) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Fast models are fine for answers
    const prompt = `Part 6 Answers (131-146) in JSON: {"answers": [{"questionId": "131", "correctAnswer": "D", "classification": "P6_VOCABULARY"}]}`;
    try {
        const result = await model.generateContent([prompt, fileToGenerativePart(solutionPath, "application/pdf")]);
        fs.writeFileSync(`extracted_part6_test${testNumber}_answers_v3.json`, JSON.stringify(JSON.parse(result.response.text().replace(/```json/g, "").replace(/```/g, "").trim()), null, 2));
    } catch (e) { }
}

async function batch() {
    console.log("📚 V9 Gemini 1.5 Pro Batch Extraction (Tests 1-10)\n");
    for (let i = 1; i <= 10; i++) {
        await extractPart6(i);
        await new Promise(r => setTimeout(r, 10000)); // 1.5 pro rate limits are stricter
    }
    console.log("\n✅ V9 Batch complete!");
}
batch();
