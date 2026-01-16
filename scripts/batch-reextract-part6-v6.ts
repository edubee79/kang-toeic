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

    console.log(`\n🚀 Processing Test ${testNumber} Part 6 (V6 - Full Questions & Compact Headers)...`);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
    You are an expert TOEIC Part 6 content extractor. Analyze this PDF document.

    OBJECTIVE:
    Extract all 4 passages and their 16 questions (131-146) from Part 6.

    STRICT FORMATTING RULES:
    1. **Guidance Line**: Capture the line above each passage (e.g., "Questions 131-134 refer to the following email.") as "guidance".
    2. **Compact Headers**: For Emails/Letters/Memos, keep headers (From, To, Subject, Date, Sent) and Address lines adjacent with ONLY a single newline (\\n) between them.
    3. **Join Sentences**: Ensure text is continuous within a paragraph. A line MUST NOT end until it reaches terminal punctuation (., !, or ?).
    4. **Paragraph Breaks**: Use exactly double newlines (\\n\\n) ONLY between distinct paragraphs.
    5. **Markers**: Place [131], [132], etc. exactly where they appear in the PDF text.

    QUESTION RULES:
    1. Set question "text" to null.
    2. Extract all 4 options (A, B, C, D) with their full text.

    REQUIRED JSON FORMAT:
    {
      "testId": ${testNumber},
      "passages": [
        {
          "id": "p6-t${testNumber}-p1",
          "guidance": "Questions 131-134 refer to the following announcement.",
          "type": "ANNOUNCEMENT",
          "title": "Title if bold/centered",
          "content": "Full text with markers...",
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
        if (firstBrace !== -1 && lastBrace !== -1) jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);

        const parsed = JSON.parse(jsonStr);

        // V6 Post-processing cleanup
        parsed.passages.forEach((p: any) => {
            if (p.content) {
                const lines = p.content.split('\n').map((l: string) => l.trim()).filter((l: string) => l !== '');
                let processedContent = '';
                let isPrevLineHeader = false;

                for (let line of lines) {
                    const isHeader = line.match(/^(From|To|Subject|Date|Sent|Dear|Sincerely|To Whom|Subject|April|January|February|March|May|June|July|August|September|October|November|December|[0-9]{1,2} [A-Z][a-z]+):/i) ||
                        line.match(/^\d+ \w+|GA \d{3}|Road|Street|Avenue|Portland|Accra/i);

                    if (isHeader) {
                        processedContent += (processedContent === '' ? '' : '\n') + line;
                        isPrevLineHeader = true;
                    } else {
                        if (isPrevLineHeader) {
                            processedContent += '\n\n' + line;
                        } else {
                            const lastChar = processedContent.trim().slice(-1);
                            if (lastChar === '.' || lastChar === '!' || lastChar === '?' || processedContent === '') {
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
        });

        const outputPath = `extracted_part6_test${testNumber}_v3.json`;
        fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
        console.log(`✅ Test ${testNumber} Extraction (V6) - Passages: ${parsed.passages.length}`);

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
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
    const prompt = `Extract answer key for Part 6 (Questions 131-146). JSON: {"answers": [{"questionId": "131", "correctAnswer": "D", "classification": "P6_VOCABULARY"}]}`;
    try {
        const pdfPart = fileToGenerativePart(solutionPath, "application/pdf");
        const result = await model.generateContent([prompt, pdfPart]);
        fs.writeFileSync(`extracted_part6_test${testNumber}_answers_v3.json`, JSON.stringify(JSON.parse(result.response.text().replace(/```json/g, "").replace(/```/g, "").trim()), null, 2));
    } catch (e) { }
}

async function batchProcess() {
    console.log("📚 Starting V6 High Quality Batch Extraction (Tests 1-10)\n");
    for (let i = 1; i <= 10; i++) {
        await extractPart6(i);
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
    console.log("\n✅ V6 Batch complete!");
}

batchProcess();
