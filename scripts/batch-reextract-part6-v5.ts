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

    console.log(`\n🚀 Processing Test ${testNumber} Part 6 (V5 - Compact Headers & Joined Sentences)...`);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
    You are an expert TOEIC Part 6 content extractor. Analyze this PDF document.

    OBJECTIVE:
    Extract 4 passages and their questions (131-146) with PERFECT layout and sentence continuity.

    STRICT FORMATTING RULES:
    1. **Join Sentences**: A line MUST NOT end until it reaches a terminal punctuation mark (., !, or ?). 
    2. **Compact Headers**: For Emails/Letters/Memos, keep headers (From, To, Subject, Date) adjacent with ONLY a single newline (\\n) between them.
    3. **Paragraph Breaks**: Use exactly double newlines (\\n\\n) ONLY between distinct paragraphs or after the header block.
    4. **Guidance Line**: Capture the "Questions 131-134 refer to..." line as "guidance".
    5. **Markers**: Place [131], [132], etc. exactly where they appear in the text.

    REQUIRED JSON FORMAT:
    {
      "testId": ${testNumber},
      "passages": [
        {
          "id": "p6-t${testNumber}-p1",
          "guidance": "Questions 131-134 refer to the following email.",
          "type": "EMAIL",
          "title": "Subject: ...",
          "content": "From: ...\\nTo: ...\\nSubject: ...\\nDate: ...\\n\\nDear ...\\n\\nBody text... [131] more text... [132].\\n\\nNext paragraph.",
          "questions": [...]
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

        // V5 Post-processing cleanup
        parsed.passages.forEach((p: any) => {
            if (p.content) {
                const lines = p.content.split('\n').map((l: string) => l.trim()).filter((l: string) => l !== '');
                let processedContent = '';
                let isPrevLineHeader = false;

                for (let i = 0; i < lines.length; i++) {
                    const line = lines[i];
                    const isCurrentLineHeader = line.match(/^(From|To|Subject|Date|Sent|Dear|Sincerely|To Whom):/i);
                    const isAddress = line.match(/^\d+ \w+|Suite \d+|[A-Z]{2} \d{5}|[A-Z][a-z]+, [A-Z]{2}/); // US Address pattern

                    if (isCurrentLineHeader || isAddress) {
                        if (processedContent === '') {
                            processedContent = line;
                        } else {
                            processedContent += '\n' + line;
                        }
                        isPrevLineHeader = true;
                    } else {
                        // Not a header. Check if it's start of a new paragraph or continuation
                        if (isPrevLineHeader) {
                            processedContent += '\n\n' + line;
                        } else {
                            // Check previous line for punctuation
                            const prevFullLine = processedContent.trim();
                            if (prevFullLine.match(/[.!?]$/) || prevFullLine === '') {
                                processedContent += '\n\n' + line;
                            } else {
                                processedContent += ' ' + line;
                            }
                        }
                        isPrevLineHeader = false;
                    }
                }
                p.content = processedContent.trim();
            }
        });

        const outputPath = `extracted_part6_test${testNumber}_v3.json`; // Still using v3 filename to keep cleanup easy
        fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2));
        console.log(`✅ Extracted Test ${testNumber} (V5)`);

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
        fs.writeFileSync(`extracted_part6_test${testNumber}_answers_v3.json`, JSON.stringify(parsed, null, 2));
    } catch (e) { }
}

async function batchProcess() {
    console.log("📚 Starting V5 Quality Part 6 Extraction (Tests 1-10)\n");
    for (let i = 1; i <= 10; i++) {
        await extractPart6(i);
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
    console.log("\n✅ V5 Batch extraction complete!");
}

batchProcess();
