import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: '.env.local' });

const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY!);

interface PassageScope {
    testId: number;
    passageId: number;
    questionRange: string;
    page: number;
}

const PASSAGES: PassageScope[] = [
    { testId: 1, passageId: 1, questionRange: "131-134", page: 5 },
    { testId: 1, passageId: 2, questionRange: "135-138", page: 6 },
    { testId: 1, passageId: 3, questionRange: "139-142", page: 7 },
    { testId: 1, passageId: 4, questionRange: "143-146", page: 8 },
];

async function extractPassageV13(scope: PassageScope) {
    const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash-exp",
        generationConfig: { responseMimeType: "application/json" }
    });

    // Path adjust: RC4-1.pdf is in public/images/ETS_TOEIC_4/
    const pdfPath = `public/images/ETS_TOEIC_4/RC4-1.pdf`;

    const prompt = `
    Extract Part 6, Passage ${scope.passageId} (Questions ${scope.questionRange}) from the provided page ${scope.page} of the TOEIC PDF.
    
    RETURN JSON FORMAT:
    {
      "testId": ${scope.testId},
      "passageId": ${scope.passageId},
      "guidance": "Questions ${scope.questionRange} refer to...",
      "structure": {
        "header_info": "Any metadata like 'Email', 'Memo', 'Letter' etc.",
        "date_line": "Actual date if exists (e.g., April 2)",
        "salutation": "Dear ..., To ..., From ...",
        "paragraphs": [
          "Full paragraph text with [ID] markers. Example: 'This is a sentence [131]. This is another sentence.'"
        ],
        "closing": "Sincerely, / Best regards, etc."
      },
      "questions": [
        {
          "id": 131,
          "options": ["(A) text", "(B) text", "(C) text", "(D) text"],
          "is_sentence_insertion": false
        }
      ]
    }

    STRICT RULES:
    1. DO NOT merge the date_line with paragraphs.
    2. MARKERS: Place markers like [131], [132], [133], [134] EXACTLY where the blank appears in the PDF.
    3. SENTENCE CONTINUITY: Join lines that are part of the same sentence. No hard line breaks inside a sentence.
    4. HEADER: Capture e-mail headers (From, To, Date, Subject) into the salutation or header_info specifically.
    5. VERIFICATION: Ensure every question ID in the range is present in the paragraphs as [ID].
    `;

    const pdfPart = {
        inlineData: {
            data: Buffer.from(fs.readFileSync(pdfPath)).toString("base64"),
            mimeType: "application/pdf",
        },
    };

    console.log(`🛠️ Extracting Test ${scope.testId} Passage ${scope.passageId} (Page ${scope.page})...`);

    try {
        const result = await model.generateContent([prompt, pdfPart]);
        const response = await result.response;
        const text = response.text();
        const outputDir = 'scripts/v13_output';
        if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

        fs.writeFileSync(`${outputDir}/test${scope.testId}_p${scope.passageId}.json`, text);
        console.log(`✅ Success: Saved to ${outputDir}/test${scope.testId}_p${scope.passageId}.json`);
    } catch (error) {
        console.error(`❌ Error extracting passage ${scope.passageId}:`, error);
    }
}

async function runPilot() {
    for (const scope of PASSAGES) {
        await extractPassageV13(scope);
    }
}

runPilot();
