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

    console.log(`\n🚀 Processing Test ${testNumber} Part 6 (V11 - Spacing Fix)...`);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
    Extract all Part 6 content (4 passages, 16 questions) from the provided TOEIC PDF.

    STRICT RULES (READ CAREFULLY):
    1. **NORMAL WORD SPACING**: You MUST maintain exactly one space between normal words. DO NOT merge words like "wasahuge" or "andIwas".
    2. **STRICT TEXT FIDELITY**: If the PDF has "P a t r o n", you MUST fix it to "Patron". Do not return text with spaces between every letter.
    3. **SENTENCE CONTINUITY**: A line MUST NOT end within a sentence. Join broken lines into a single line until a punctuation (. ? !) is reached.
    4. **COMPACT HEADERS**: Keep "From:", "To:", "Subject:", "Date:" and Address lines on separate lines but with only ONE newline (\\n) between them.
    5. **NO SKIPPING**: Every question MUST have 4 options (A, B, C, D) with full text.

    OUTPUT JSON FORMAT:
    {
      "testId": ${testNumber},
      "passages": [
        {
          "id": "p6-t${testNumber}-p1",
          "guidance": "Questions 131-134 refer to...",
          "type": "EMAIL",
          "title": "...",
          "content": "From: ...\\nTo: ...\\nSubject: ...\\n\\nDear ...\\n\\nBody text... [131] ...",
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
        const result = await model.generateContent([prompt, fileToGenerativePart(pdfPath, "application/pdf")]);
        const response = await result.response;
        const text = response.text();

        let jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const firstBrace = jsonStr.indexOf('{');
        const lastBrace = jsonStr.lastIndexOf('}');
        if (firstBrace !== -1 && lastBrace !== -1) jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);

        const parsed = JSON.parse(jsonStr);

        // Post-processing
        parsed.passages.forEach((p: any) => {
            if (p.content) {
                // Ensure no double spaces
                p.content = p.content.replace(/  +/g, ' ');

                const rawLines = p.content.split('\n').map((l: string) => l.trim()).filter((l: string) => l !== '');
                let finalContent = '';
                let isPrevHeader = false;

                for (let line of rawLines) {
                    const isHeader = line.match(/^(From|To|Subject|Date|Sent|Dear|Sincerely|Regards|Best|Respectfully|To Whom|Subject):/i) ||
                        line.match(/^\d+ \w+( Street| Road| Avenue| Blvd| St| Ave| Rd)/i) ||
                        line.match(/^[A-Z][A-Z\s]+, [A-Z]{2} \d{5}/) ||
                        line.match(/^[A-Z][a-z]+, [A-Z][a-z]+$/) ||
                        line.match(/^[A-Z][a-z]+ [0-9]{1,2},? [0-9]{4}$/) ||
                        line.match(/^[0-9]{1,2} [A-Z][a-z]+( [0-9]{4})?$/);

                    if (isHeader) {
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
            if (!p.questions || p.questions.length < 4) throw new Error("Missing questions data");
        });

        const outputPath = `extracted_part6_test${testNumber}_v3.json`;
        fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
        console.log(`✅ Test ${testNumber} Extraction (V11) Success`);

        if (fs.existsSync(solutionPath)) {
            await extractAnswers(testNumber, solutionPath);
        }
        return true;
    } catch (error: any) {
        console.error(`❌ Test ${testNumber} Failed:`, error.message);
        return false;
    }
}

async function extractAnswers(testNumber: number, solutionPath: string) {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
    try {
        const result = await model.generateContent([`Answers for Part 6 Questions 131-146 in JSON: {"answers": [...]}`, fileToGenerativePart(solutionPath, "application/pdf")]);
        fs.writeFileSync(`extracted_part6_test${testNumber}_answers_v3.json`, JSON.stringify(JSON.parse(result.response.text().replace(/```json/g, "").replace(/```/g, "").trim()), null, 2));
    } catch (e) { }
}

async function batch() {
    console.log("📚 V11 Extraction Batch (Tests 1-10)\n");
    for (let i = 1; i <= 10; i++) {
        const ok = await extractPart6(i);
        if (!ok) await extractPart6(i); // retry once
        await new Promise(r => setTimeout(r, 4000));
    }
    console.log("\n✅ V11 Batch complete! Now regenerating data file...");
}
batch();
