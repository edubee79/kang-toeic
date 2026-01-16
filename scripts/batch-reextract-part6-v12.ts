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

    if (!fs.existsSync(pdfPath)) return false;

    console.log(`\n🚀 Processing Test ${testNumber} Part 6 (V12 - Marker Integrity)...`);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
    Extract all Part 6 content (4 passages, 16 questions) from the provided TOEIC PDF.

    STRICT RULES FOR CONTENT:
    1. **MARKERS ARE MANDATORY**: You MUST include the question markers like [131], [132], [133], [134] inside the passage text EXACTLY where they appear in the original PDF. DO NOT skip them.
    2. **STRICT TEXT FIDELITY**: Maintain word spacing. Do not merge separate words. Fix dispersed letters (e.g., "P a t r o n" -> "Patron").
    3. **SENTENCE CONTINUITY**: Join lines within a paragraph. 
    4. **COMPACT HEADERS**: Email/Letter/Address headers should be line-by-line with single \\n.

    STRICT RULES FOR QUESTIONS:
    1. Extract all 4 options (A, B, C, D) for every question.
    2. "correctAnswer" MUST be a single letter (A, B, C, or D). NEVER the full text.

    EXAMPLE PASSAGE CONTENT:
    "From: Jane Doe\\nTo: John Smith\\nSubject: Meeting\\n\\nDear John, I am writing to [131] the meeting scheduled for tomorrow. [132]. We need to discuss the [133] project. Thank you for your [134].\\n\\nSincerely, Jane"

    JSON SCHEMA:
    {
      "testId": ${testNumber},
      "passages": [
        {
          "id": "p6-t${testNumber}-p1",
          "guidance": "Questions 131-134 refer to...",
          "type": "...",
          "title": "...",
          "content": "...",
          "questions": [
            {
              "id": "131",
              "text": null, 
              "options": [
                { "label": "A", "text": "..." },
                { "label": "B", "text": "..." },
                { "label": "C", "text": "..." },
                { "label": "D", "text": "..." }
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

        // V12 Validation & Cleanup
        parsed.passages.forEach((p: any) => {
            if (p.content) {
                // Ensure no dispersed text remains
                p.content = p.content.replace(/([A-Z]) ([A-Z]) ([A-Z])/g, '$1$2$3')
                    .replace(/([a-z]) ([a-z]) ([a-z])/g, '$1$2$3');

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
                p.content = finalContent.trim().replace(/  +/g, ' ');
            }

            // CRITICAL AUDIT: Check for markers
            if (p.questions.length !== 4) throw new Error(`Missing questions in Test ${testNumber} passage ${p.id}`);
            p.questions.forEach((q: any) => {
                if (!p.content.includes(`[${q.id}]`)) {
                    throw new Error(`MISSING_MARKER: [${q.id}] not found in Test ${testNumber} passage ${p.id}`);
                }
            });
        });

        const outputPath = `extracted_part6_test${testNumber}_v3.json`;
        fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
        console.log(`✅ Test ${testNumber} (V12) Success`);

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
        const result = await model.generateContent([`Answers for Part 6 (JSON: {"answers": [...]})`, fileToGenerativePart(solutionPath, "application/pdf")]);
        fs.writeFileSync(`extracted_part6_test${testNumber}_answers_v3.json`, JSON.stringify(JSON.parse(result.response.text().replace(/```json/g, "").replace(/```/g, "").trim()), null, 2));
    } catch (e) { }
}

async function batch() {
    console.log("📚 V12 Marker-Safe Batch Extraction\n");
    for (let i = 1; i <= 10; i++) {
        let attempts = 0;
        let success = false;
        while (!success && attempts < 3) {
            success = await extractPart6(i);
            attempts++;
            if (!success) console.log(`🔄 Retrying Test ${i} (Attempt ${attempts})...`);
            await new Promise(r => setTimeout(r, 5000));
        }
    }
    console.log("\n✅ V12 Batch complete!");
}
batch();
