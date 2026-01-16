import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from 'fs';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY!);

async function extractSinglePassage() {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" }); // Use Pro for maximum accuracy
    const pdfPath = `public/images/ETS_TOEIC_4/RC4-10.pdf`;

    const prompt = `
    Extract ONLY Part 6, Passage 3 (Questions 139-142) from this TOEIC PDF.
    Focus on absolute structural fidelity.

    RETURN JSON FORMAT EXACTLY AS BELOW:
    {
      "guidance": "Questions 139-142 refer to...",
      "type": "NOTICE",
      "structure": {
        "date_line": "Actual date text if exists (e.g. April 2)",
        "salutation": "Actual greeting if exists (e.g. Dear ...)",
        "paragraphs": [
          "Paragraph 1 text with markers like [139] exactly where they are in the PDF",
          "Paragraph 2 text with markers..."
        ],
        "closing": "Closing line if exists"
      },
      "questions": [
        {
          "id": "139",
          "options": [
            { "label": "A", "text": "..." },
            { "label": "B", "text": "..." },
            { "label": "C", "text": "..." },
            { "label": "D", "text": "..." }
          ]
        }
      ]
    }

    STRICT RULES:
    1. DO NOT merge the date_line with the salutation.
    2. DO NOT skip any markers like [139], [140], [141], [142].
    3. If there is a sentence insertion question (often 141), include the marker [141] as a standalone sentence or within the flow exactly as pictured.
    `;

    const pdfPart = {
        inlineData: {
            data: Buffer.from(fs.readFileSync(pdfPath)).toString("base64"),
            mimeType: "application/pdf",
        },
    };

    console.log("🛠️ Starting Surgical Extraction for Test 10 P3...");
    const result = await model.generateContent([prompt, pdfPart]);
    const response = await result.response;
    fs.writeFileSync('v13_prototype_p3.json', response.text());
    console.log("✅ Extraction complete. Saved to v13_prototype_p3.json");
}

extractSinglePassage();
