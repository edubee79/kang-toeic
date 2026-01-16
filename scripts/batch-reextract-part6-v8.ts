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

    console.log(`\n🚀 Processing Test ${testNumber} Part 6 (V8 - High Integrity)...`);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
    Analyze the Part 6 section of the provided TOEIC PDF (Questions 131-146).

    STRICT INSTRUCTIONS:
    1. EXTRACT 4 PASSAGES: You MUST return 4 passage objects.
    2. POPULATE EVERY QUESTION: Every question MUST have a full "options" array with 4 items. DO NOT skip any data.
    3. NO SPAGHETTI TEXT: Joins broken lines into continuous sentences until terminal punctuation (. ? !).
    4. COMPACT HEADERS: Group Email/Letter headers (From, To, Subject, Date) and Address lines on separate lines with ONLY a single newline (\\n). 
    5. GUIDANCE LINE: Capture "Questions 131-134 refer to the following [type]." line exactly.
    6. CLEAN WHITESPACE: Do not leave extra spaces between characters.

    OUTPUT JSON FORMAT:
    {
      "testId": ${testNumber},
      "passages": [
        {
          "id": "p6-t${testNumber}-p1",
          "guidance": "Questions 131-134 refer to...",
          "type": "EMAIL",
          "title": "Subject: ...",
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
        const pdfPart = fileToGenerativePart(pdfPath, "application/pdf");
        const result = await model.generateContent([prompt, pdfPart]);
        const response = await result.response;
        const text = response.text();

        let jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const firstBrace = jsonStr.indexOf('{');
        const lastBrace = jsonStr.lastIndexOf('}');
        if (firstBrace !== -1 && lastBrace !== -1) jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);

        const parsed = JSON.parse(jsonStr);

        // V8 Post-processing cleanup
        parsed.passages.forEach((p: any) => {
            if (p.content) {
                // Remove redundant double spaces Gemini might have kept
                p.content = p.content.replace(/  +/g, ' ');

                const lines = p.content.split('\n').map((l: string) => l.trim()).filter((l: string) => l !== '');
                let processedContent = '';
                let isPrevLineHeader = false;

                for (let line of lines) {
                    const isHeader = line.match(/^(From|To|Subject|Date|Sent|Dear|Sincerely|Respectfully):/i) ||
                        line.match(/^\d+ \w+( Street| Road| Avenue| Blvd| St| Ave| Rd)/i) ||
                        line.match(/^[A-Z][a-z]+ [0-9]{1,2},? [0-9]{4}$/) ||
                        line.match(/^[0-9]{1,2} [A-Z][a-z]+( [0-9]{4})?$/) ||
                        line.match(/^[A-Z][A-Z\s]+, [A-Z]{2} \d{5}/) ||
                        line.match(/^[A-Z][a-z]+, [A-Z][a-z]+$/);

                    if (isHeader) {
                        processedContent += (processedContent === '' ? '' : '\n') + line;
                        isPrevLineHeader = true;
                    } else {
                        if (isPrevLineHeader) {
                            processedContent += '\n\n' + line;
                        } else {
                            const lastChar = processedContent.trim().slice(-1);
                            // Join logic: if previous line didn't end in punctuation or is empty, join with space
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

            // Validation
            if (!p.questions || p.questions.length === 0) throw new Error("No questions found");
            p.questions.forEach((q: any) => {
                if (!q.options || q.options.length < 4) throw new Error(`Missing options for ${q.id}`);
            });
        });

        const outputPath = `extracted_part6_test${testNumber}_v3.json`;
        fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
        console.log(`✅ Test ${testNumber} Extraction (V8) Success`);

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
    const prompt = `Part 6 Answers (131-146) in JSON: {"answers": [{"questionId": "131", "correctAnswer": "D", "classification": "P6_VOCABULARY"}]}`;
    try {
        const result = await model.generateContent([prompt, fileToGenerativePart(solutionPath, "application/pdf")]);
        fs.writeFileSync(`extracted_part6_test${testNumber}_answers_v3.json`, JSON.stringify(JSON.parse(result.response.text().replace(/```json/g, "").replace(/```/g, "").trim()), null, 2));
    } catch (e) { }
}

async function batch() {
    console.log("📚 V8 High Quality Batch Extraction (Tests 1-10)\n");
    for (let i = 1; i <= 10; i++) {
        const success = await extractPart6(i);
        if (!success) {
            console.log(`🔄 Retrying Test ${i}...`);
            await extractPart6(i);
        }
        await new Promise(r => setTimeout(r, 4000));
    }
}
batch();
