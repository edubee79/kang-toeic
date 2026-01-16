import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

interface Part4Question {
    id: string;
    text: string;
    options: { label: string; text: string }[];
    correctAnswer: string;
}

interface Part4Set {
    testId: number;
    setId: string;
    questionRange: string;
    audio: string;
    image?: string;
    questions: Part4Question[];
    script?: string; // Storing as string block for now, or array of speakers
}

async function extractQuestions(pdfPath: string): Promise<any[]> {
    const pdfData = fs.readFileSync(pdfPath);
    const base64Pdf = pdfData.toString("base64");
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const prompt = `
    Extract Part 4 Questions (71-100) from this PDF.
    Return JSON format:
    [
      {
        "range": "71-73",
        "questions": [
          { "id": "q71", "text": "...", "options": [ {"label":"A","text":"..."}, ... ] },
          ...
        ]
      },
      ...
    ]
    IMPORTANT:
    - Only Part 4 (71-100).
    - Accurately capture question text and options.
    `;

    const result = await model.generateContent([
        { inlineData: { mimeType: "application/pdf", data: base64Pdf } },
        { text: prompt },
    ]);
    const text = result.response.text();
    const jsonStr = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    return JSON.parse(jsonStr);
}

async function extractScriptsAndAnswers(pdfPath: string): Promise<any> {
    const pdfData = fs.readFileSync(pdfPath);
    const base64Pdf = pdfData.toString("base64");
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const prompt = `
    Perform a data extraction task on this educational document (Answer Key).
    Goal: Structure the raw data into JSON for database import.
    
    Target Data: Part 4 (Questions 71-100).
    
    1. Identify the 'Script' text for each question set (e.g., 71-73). Capture the dialogue text accurately for indexing.
    2. Identify the 'Answer' (A, B, C, D) for each question (71-100).
    
    Output Format (JSON):
    {
      "scripts": {
        "71-73": "Script text...",
        ...
      },
      "answers": {
        "71": "A",
        ...
      }
    }
    `;

    let retries = 3;
    while (retries > 0) {
        try {
            const result = await model.generateContent([
                { inlineData: { mimeType: "application/pdf", data: base64Pdf } },
                { text: prompt },
            ]);

            // Check if blocked
            if (result.response.promptFeedback?.blockReason) {
                console.warn(`Blocked: ${result.response.promptFeedback.blockReason}`);
                throw new Error("Blocked by safety filter");
            }

            const text = result.response.text();
            const jsonStr = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
            return JSON.parse(jsonStr);
        } catch (e: any) {
            console.error(`Attempt failed (retries: ${retries - 1}): ${e.message}`);
            retries--;
            if (retries === 0) throw e;
            await new Promise(r => setTimeout(r, 2000));
        }
    }
}

async function processTest(testId: number) {
    const qPdf = `public/audio/ETS_TOEIC_3/LC3-${testId}.pdf`;
    const sPdf = `public/audio/ETS_TOEIC_3/LC3-${testId}해설.pdf`;

    console.log(`Processing Test ${testId}...`);
    console.log(`Checking files:`);
    console.log(`  Question PDF: ${qPdf} (${fs.existsSync(qPdf) ? 'Found' : 'Missing'})`);
    console.log(`  Solution PDF: ${sPdf} (${fs.existsSync(sPdf) ? 'Found' : 'Missing'})`);

    try {
        console.log("Starting extraction (parallel)...");
        // Run in parallel
        const [qData, sData] = await Promise.all([
            extractQuestions(qPdf).then(res => { console.log("Questions extracted"); return res; }),
            extractScriptsAndAnswers(sPdf).then(res => { console.log("Scripts extracted"); return res; })
        ]);

        console.log(`Extracted: ${qData.length} question sets`);

        const finalSets: Part4Set[] = [];

        for (const set of qData) {
            const range = set.range;
            const script = sData.scripts[range] || "";

            // Map answers
            set.questions.forEach((q: any) => {
                const qNum = q.id.replace('q', '');
                q.correctAnswer = sData.answers[qNum] || "A"; // Fallback
            });

            finalSets.push({
                testId: testId,
                setId: `set_${range.replace('-', '_')}`,
                questionRange: range,
                audio: `/audio/ETS_TOEIC_3/Test_${testId.toString().padStart(2, '0')}/TEST ${testId.toString().padStart(2, '0')}_PART 4_${range}.mp3`,
                questions: set.questions,
                script: script
            });
        }

        const outPath = `src/data/generated/part4_test${testId.toString().padStart(2, '0')}.json`;
        console.log(`Writing to: ${outPath}`);

        if (!fs.existsSync(path.dirname(outPath))) {
            console.log(`Creating directory: ${path.dirname(outPath)}`);
            fs.mkdirSync(path.dirname(outPath), { recursive: true });
        }

        fs.writeFileSync(outPath, JSON.stringify(finalSets, null, 2));
        console.log(`Saved Test ${testId} to ${outPath}`);

    } catch (e: any) {
        console.error(`Error processing Test ${testId}:`, e.message || e);
        if (e.response) {
            console.error(e.response);
        }
    }
}

const targetTestId = parseInt(process.argv[2]);
if (!targetTestId) {
    console.log("Please provide test ID (e.g., 3)");
} else {
    processTest(targetTestId);
}
