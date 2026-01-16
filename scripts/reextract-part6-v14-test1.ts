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

// Targeting Passage 4 specifically for V14.1 fix
const PASSAGES: PassageScope[] = [
  { testId: 1, passageId: 4, questionRange: "143-146", page: 8 },
];

async function extractPassageV14(scope: PassageScope) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
    generationConfig: { responseMimeType: "application/json" }
  });

  const pdfPath = `public/images/ETS_TOEIC_4/RC4-1.pdf`;

  const prompt = `
    Extract Part 6, Passage ${scope.passageId} (Questions ${scope.questionRange}) from the provided page ${scope.page} of the TOEIC PDF.
    Apply V14.1 'Document-Type Aware Precision' rules.

    STRICT JSON OUTPUT:
    {
      "testId": ${scope.testId},
      "passageId": ${scope.passageId},
      "guidance": "Questions X-Y refer to the following...",
      "structure": {
        "header_lines": ["List every line of text before the salutation"],
        "salutation": "Dear ..., To ..., etc.",
        "body_paragraphs": [
          "Full paragraph text with [ID] markers."
        ],
        "closing_lines": ["Sincerely,", "Name", "Title"]
      },
      "questions": [
        {
          "id": 143,
          "options": ["(A)...", "(B)...", "(C)...", "(D)..."],
          "is_sentence_insertion": true
        }
      ]
    }

    V14.1 PRECISION RULES (DOCUMENT-TYPE AWARE):
    
    1. **DOCUMENT CLASSIFICATION & HEADER STRATEGY**:
       - **IF LETTER**: The "Header Zone" includes the Date AND the Recipient's Address. 
         -> RULE: Extract ALL lines between the Top Date and the Salutation ("Dear..."). Do NOT skip the address.
       - **IF EMAIL**: Extract From, To, Date, Subject as separate lines.
       - **IF ARTICLE/NOTICE**: Extract Title/Headline as the first line.

    2. **BODY TEXT (SMART JOINING)**:
       - **Join Rule**: Join consecutive lines of text into a single paragraph string UNTIL a visible blank line appears.
       - **Whitespace**: Replace internal newlines with a single space.
       - **Warning**: Do NOT merge the Header or Closing into the Body.

    3. **IMMUTABLE MARKERS (CRITICAL)**:
       - Markers [131], [145], etc., are SACRED. They MUST exist in the final JSON.
       - **Placement**: If a marker is at the end of a line in PDF, place it at the corresponding position in the joined string.
       - **Verification**: Check that ALL questions in range ${scope.questionRange} have a corresponding [ID] in the text.

    4. **CLOSING**:
       - Isolate "Sincerely," and the Name/Title/Company into distinct lines.
    `;

  const pdfPart = {
    inlineData: {
      data: Buffer.from(fs.readFileSync(pdfPath)).toString("base64"),
      mimeType: "application/pdf",
    },
  };

  console.log(`🛠️ [V14.1] Extracting Test ${scope.testId} Passage ${scope.passageId}...`);

  try {
    const result = await model.generateContent([prompt, pdfPart]);
    const response = await result.response;
    const text = response.text();
    const outputDir = 'scripts/v14_output';
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

    fs.writeFileSync(`${outputDir}/test${scope.testId}_p${scope.passageId}_v14.json`, text);
    console.log(`✅ Success: Saved V14.1 result to ${outputDir}/test${scope.testId}_p${scope.passageId}_v14.json`);
  } catch (error) {
    console.error(`❌ Error in V14.1 extraction:`, error);
  }
}

async function runV14Pilot() {
  for (const scope of PASSAGES) {
    await extractPassageV14(scope);
  }
}

runV14Pilot();
