import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

interface Part2QuestionRaw {
    id: number;
    script: string;
    options: { label: string; text: string }[];
    correctAnswer: string;
    questionType: string;
}

interface Part2QuestionProcessed {
    id: number;
    script: string;
    options: string[];
    correct: number;
    questionType: string;
}

async function extractPart2Data(pdfPath: string): Promise<Part2QuestionProcessed[]> {
    const pdfData = fs.readFileSync(pdfPath);
    const base64Pdf = pdfData.toString("base64");
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const prompt = `
    Perform a data extraction task on this educational document (Answer Key).
    Goal: Structure the raw data for Part 2 (Questions 7-31) into JSON.
    
    Target Data: Part 2 only (Question 7 to 31).
    
    For each question:
    1. Extract the 'Question' text (the English script).
    2. Extract the 3 'Reponses' (A, B, C) text (English script).
    3. Identify the Correct Answer (A, B, or C).
    4. Classify the Question Type into ONE of these: 
       "How", "What", "When", "Where", "Who", "Why", "YesNo", "Choice", "Statement", "Negative", "Tag", "Indirect".
       (Use "Indirect" if the answer is evasive or subtle, e.g. "I don't know", "Ask John", "It hasn't been decided").

    Output Format (JSON Array):
    [
      {
        "id": 7,
        "script": "Where is the meeting?",
        "options": [
          { "label": "A", "text": "In Room A." },
          { "label": "B", "text": "At 2 PM." },
          { "label": "C", "text": "Yes, I did." }
        ],
        "correctAnswer": "A",
        "questionType": "Where"
      },
      ...
    ]
    `;

    let retries = 3;
    while (retries > 0) {
        try {
            console.log(`Sending request to Gemini... (Attempt ${4 - retries})`);
            const result = await model.generateContent([
                { inlineData: { mimeType: "application/pdf", data: base64Pdf } },
                { text: prompt },
            ]);

            if (result.response.promptFeedback?.blockReason) {
                console.warn(`Blocked: ${result.response.promptFeedback.blockReason}`);
                throw new Error("Blocked by safety filter");
            }

            const text = result.response.text();
            const jsonStr = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
            const rawData: Part2QuestionRaw[] = JSON.parse(jsonStr);

            // Process data
            return rawData.map(q => {
                // Ensure options are sorted by label A, B, C just in case
                const sortedOptions = q.options.sort((a, b) => a.label.localeCompare(b.label));
                const optionTexts = sortedOptions.map(o => o.text);

                let correctIdx = 0;
                if (q.correctAnswer.trim().toUpperCase() === 'B') correctIdx = 1;
                if (q.correctAnswer.trim().toUpperCase() === 'C') correctIdx = 2;

                return {
                    id: q.id,
                    script: q.script,
                    options: optionTexts,
                    correct: correctIdx,
                    questionType: q.questionType
                };
            });

        } catch (e: any) {
            console.error(`Attempt failed: ${e.message}`);
            retries--;
            if (retries === 0) throw e;
            await new Promise(r => setTimeout(r, 2000));
        }
    }
    return [];
}

async function processTest(testId: number) {
    const sPdf = `public/audio/ETS_TOEIC_3/LC3-${testId}해설.pdf`;

    console.log(`Processing Part 2 Test ${testId}...`);
    console.log(`Solution PDF: ${sPdf} (${fs.existsSync(sPdf) ? 'Found' : 'Missing'})`);

    try {
        const processedData = await extractPart2Data(sPdf);

        console.log(`Extracted: ${processedData.length} items`);
        if (processedData.length > 0) {
            console.log("Sample:", processedData[0]);
        }

        const outPath = `src/data/generated/part2_test${testId.toString().padStart(2, '0')}.json`;
        if (!fs.existsSync(path.dirname(outPath))) fs.mkdirSync(path.dirname(outPath), { recursive: true });

        fs.writeFileSync(outPath, JSON.stringify(processedData, null, 2));
        console.log(`Saved Test ${testId} to ${outPath}`);

    } catch (e: any) {
        console.error(`Error processing Test ${testId}:`, e.message || e);
    }
}

const targetTestId = parseInt(process.argv[2]);
if (!targetTestId) {
    console.log("Please provide test ID (e.g., 6)");
} else {
    processTest(targetTestId);
}
