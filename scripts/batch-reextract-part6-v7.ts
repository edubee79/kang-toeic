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

    console.log(`\n🚀 Processing Test ${testNumber} Part 6 (V7 - Final Ultra Quality)...`);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
    Analyze the provided TOEIC PDF and extract all Part 6 content (Questions 131-146).

    STRICT RULES:
    1. EXTRACT 4 PASSAGES: You MUST extract all 4 passages and ALL 16 questions.
    2. QUESTION CONTENT: You MUST extract all 4 options (A, B, C, D) for every single question. DO NOT return empty curly braces.
    3. COMPACT HEADERS: Lines that belong to a single address block, email header block (From, To, Subject, etc.), or Date block MUST be on consecutive lines with a single newline (\\n). 
    4. NO DISPERSED TEXT: Do not include extra spaces between words. Sanitize the text to ensure it looks like professional business documents.
    5. SENTENCE CONTINUITY: Join text within a paragraph into a single line until a punctuation (. ? !) or a marker [131] is reached. 
    6. GUIDANCE: Capture "Questions 131-134 refer to the following email." as "guidance" for each passage.
    7. JSON SCHEMA:
    {
      "testId": ${testNumber},
      "passages": [
        {
          "id": "p6-t${testNumber}-p1",
          "guidance": "Questions 131-134 refer to...",
          "type": "EMAIL",
          "title": "Bold Subject line or null",
          "content": "From: ...\\nTo: ...\\nSubject: ...\\n\\nDear ...\\n\\nBody text... [131] more... [132].",
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

        // Post-processing cleanup for layouts
        parsed.passages.forEach((p: any) => {
            if (p.content) {
                // Remove weird spaced-apart characters (e.g., F r o m -> From)
                p.content = p.content.replace(/([A-Za-z]) ([A-Za-z]) ([A-Za-z])/g, '$1$2$3');

                const lines = p.content.split('\n').map((l: string) => l.trim()).filter((l: string) => l !== '');
                let processedContent = '';
                let isPrevLineHeader = false;

                for (let line of lines) {
                    // Refined header/address regex
                    const isHeader = line.match(/^(From|To|Subject|Date|Sent|Dear|Sincerely|Respectfully):/i) ||
                        line.match(/^\d+ \w+( Street| Road| Avenue| Blvd| St| Ave| Rd)/i) ||
                        line.match(/^[A-Z][a-z]+ [0-9]{1,2},? [0-9]{4}$/) || // Date format like April 7, 2024
                        line.match(/^[0-9]{1,2} [A-Z][a-z]+( [0-9]{4})?$/) || // Date like 31 July
                        line.match(/^[A-Z][A-Z\s]+, [A-Z]{2} \d{5}/) || // City, ST ZIP
                        line.match(/^[A-Z][a-z]+, [A-Z][a-z]+$/); // Accra, Ghana

                    if (isHeader) {
                        processedContent += (processedContent === '' ? '' : '\n') + line;
                        isPrevLineHeader = true;
                    } else {
                        if (isPrevLineHeader) {
                            processedContent += '\n\n' + line;
                        } else {
                            const lastChar = processedContent.trim().slice(-1);
                            if (lastChar === '.' || lastChar === '!' || lastChar === '?' || processedContent === '' || lastChar === ']' || lastChar === ':') {
                                processedContent += '\n\n' + line;
                            } else {
                                processedContent += ' ' + line;
                            }
                        }
                        isPrevLineHeader = false;
                    }
                }
                p.content = processedContent.replace(/\n\n\n+/g, '\n\n').trim();
            }

            // STICK VALIDATION: Ensure questions are NOT empty
            p.questions.forEach((q: any) => {
                if (!q.options || q.options.length < 4) {
                    throw new Error(`Incomplete question data for ${q.id} in Test ${testNumber}`);
                }
            });
        });

        const outputPath = `extracted_part6_test${testNumber}_v3.json`;
        fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
        console.log(`✅ Test ${testNumber} (V7) - Success!`);

        if (fs.existsSync(solutionPath)) {
            await extractAnswers(testNumber, solutionPath);
        }
        return true;
    } catch (error: any) {
        console.error(`❌ Test ${testNumber} Failed:`, error.message);
        // If it failed due to missing data, we should ideally retry once with 1.5-pro
        return false;
    }
}

async function extractAnswers(testNumber: number, solutionPath: string) {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
    const prompt = `Extract answer key for Part 6 (Questions 131-146). JSON: {"answers": [{"questionId": "131", "correctAnswer": "D", "classification": "P6_VOCABULARY"}]}`;
    try {
        const result = await model.generateContent([prompt, fileToGenerativePart(solutionPath, "application/pdf")]);
        fs.writeFileSync(`extracted_part6_test${testNumber}_answers_v3.json`, JSON.stringify(JSON.parse(result.response.text().replace(/```json/g, "").replace(/```/g, "").trim()), null, 2));
    } catch (e) { }
}

async function batch() {
    console.log("📚 V7 Final Audit Batch Extraction (Tests 1-10)\n");
    for (let i = 1; i <= 10; i++) {
        const success = await extractPart6(i);
        if (!success) {
            console.log(`🔄 Retrying Test ${i} once...`);
            await extractPart6(i);
        }
        await new Promise(r => setTimeout(r, 4000));
    }
}
batch();
