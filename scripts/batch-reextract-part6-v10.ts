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

// Function to fix "dispersed" characters (e.g., "P a t r o n" -> "Patron")
function fixDispersedText(text: string): string {
    // Matches patterns like "F r o m" or "S u b j e c t"
    // We look for 3 or more single letters separated by single spaces
    return text.replace(/([A-Z]) ([A-Z]) ([A-Z])/g, (m, a, b, c) => a + b + c) // Uppercase blocks
        .replace(/([a-z]) ([a-z]) ([a-z])/g, (m, a, b, c) => a + b + c) // Lowercase blocks
        .replace(/([A-Za-z]) ([A-Za-z]) ([A-Za-z])/g, (m, a, b, c) => a + b + c); // Mixed
}

async function extractPart6(testNumber: number) {
    const pdfPath = `public/images/ETS_TOEIC_4/RC4-${testNumber}.pdf`;
    const solutionPath = `public/images/ETS_TOEIC_4/RC4-${testNumber}해설.pdf`;

    if (!fs.existsSync(pdfPath)) {
        console.error(`❌ Error: File not found: ${pdfPath}`);
        return false;
    }

    console.log(`\n🚀 Processing Test ${testNumber} Part 6 (V10 - Robust Layout)...`);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
    Extract all Part 6 content (4 passages, 16 questions) from the provided TOEIC PDF.

    STRICT RULES:
    1. **Text Fidelity**: Do NOT add extra spaces between letters. If the PDF has "From:", do NOT return "F r o m :".
    2. **Join Sentences**: A line MUST NOT end within a sentence. Join broken lines until terminal punctuation (., !, ?) is reached.
    3. **Compact Headers**: 
       - Keep "From:", "To:", "Subject:", "Date:", and Address/Date lines on separate lines but with only ONE newline (\\n) between them.
       - Separate the header block from the body with a double newline (\\n\\n).
    4. **Guidance**: Capture the "Questions 131-134 refer to..." line for each passage.
    5. **Questions**: Populate ALL 16 questions (131-146) with 4 options Each. DO NOT SKIP.

    JSON SCHEMA:
    {
      "testId": ${testNumber},
      "passages": [
        {
          "id": "p6-t${testNumber}-p1",
          "guidance": "Questions 131-134 refer to...",
          "type": "EMAIL",
          "title": "...",
          "content": "From: ...\\nTo: ...\\n\\nDear ...\\n\\nBody text... [131] ...",
          "questions": [...]
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
                // Fix dispersed chars first
                p.content = fixDispersedText(p.content);
                p.content = fixDispersedText(p.content); // Second pass for longer sequences

                const rawLines = p.content.split('\n').map((l: string) => l.trim()).filter((l: string) => l !== '');
                let finalContent = '';
                let isPrevHeader = false;

                for (let line of rawLines) {
                    const isHeader = line.match(/^(From|To|Subject|Date|Sent|Dear|Sincerely|Regards|Best|Respectfully|To Whom):/i) ||
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
                p.content = finalContent.trim().replace(/  +/g, ' ');
            }
            if (!p.questions || p.questions.length === 0) throw new Error("Missing questions");
        });

        const outputPath = `extracted_part6_test${testNumber}_v3.json`;
        fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
        console.log(`✅ Test ${testNumber} Extraction (V10) Success`);

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
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    try {
        const result = await model.generateContent([`Answers for Part 6 (JSON: {"answers": [...]})`, fileToGenerativePart(solutionPath, "application/pdf")]);
        fs.writeFileSync(`extracted_part6_test${testNumber}_answers_v3.json`, JSON.stringify(JSON.parse(result.response.text().replace(/```json/g, "").replace(/```/g, "").trim()), null, 2));
    } catch (e) { }
}

async function batch() {
    console.log("📚 V10 Robust Batch Extraction (Tests 1-10)\n");
    for (let i = 1; i <= 10; i++) {
        const success = await extractPart6(i);
        if (!success) await extractPart6(i);
        await new Promise(r => setTimeout(r, 4000));
    }
}
batch();
