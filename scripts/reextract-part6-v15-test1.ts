
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: ".env.local" });

// Configuration
const API_KEY = process.env.GEMINI_API_KEY;
const MODEL_NAME = "gemini-2.0-flash-exp"; // Using the fast experimental model
const PDF_PATH = path.join(process.cwd(), "public", "images", "ETS_TOEIC_4", "RC4-1.pdf");
const OUTPUT_DIR = path.join(process.cwd(), "scripts", "v15_output");

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Initialize Gemini
const genAI = new GoogleGenerativeAI(API_KEY || "");

// V15 Target Passages (Only Letter/Email types: 2, 3, 4)
// Estimated Pages based on V14 success (P4 was Pg 8)
const TARGET_PASSAGES = [
    { id: 2, type: "LETTER", startPage: 7, endPage: 7, guidance: "Questions 135-138 refer to the following letter." },
    { id: 3, type: "EMAIL", startPage: 7, endPage: 8, guidance: "Questions 139-142 refer to the following e-mail." },
    { id: 4, type: "LETTER", startPage: 8, endPage: 8, guidance: "Questions 143-146 refer to the following letter." }
];

async function extractPassage(passage: { id: number, type: string, startPage: number, endPage: number, guidance: string }) {
    console.log(`Processing Passage ${passage.id} (Type: ${passage.type})...`);

    try {
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });
        const pdfData = fs.readFileSync(PDF_PATH);
        const pdfBase64 = pdfData.toString("base64");

        const prompt = `
You are an expert TOEIC Content Digitizer. Your goal is to extract Part 6 passages with "Precision Layout" fidelity, applying specialized rules for Letters and Emails.

**TARGET**: Test 1, Passage ${passage.id}
**TYPE**: ${passage.type} (Layout Rule: COMPACT HEADER)
**PAGES**: ${passage.startPage}-${passage.endPage}

### CRITICAL RULE: COMPACT HEADER (V15)
For **LETTERS** and **EMAILS**, the top section (Address, Date, To/From/Subject fields) often appears with excessive whitespace in OCR. You must Enforce the **Compact Header Rule**:
1.  **Identify the "Header Zone"**: This is ALL text starting from the very top of the passage DOWN TO (but NOT including) the **Salutation**.
2.  **Define "Salutation" Triggers**: The Body starts *only* when you see one of these triggers on its own line:
    - "Dear [Name],"
    - "To Whom It May Concern,"
    - "To [Name]" (if used as a salutation, but usually 'To:' is header)
    - "Hi [Name],"
    - "Hello [Name],"
    - "Greetings,"
3.  **Header Formatting**:
    - Inside the Header Zone, remove ALL empty lines. Force **Single Spacing** (\n).
    - **Strict Left Alignment**: Ignore any indentation in the PDF header. All header lines must start at the far left.
    - **Safety**: "Subject:" and "Re:" lines belong to the HEADER using single spacing. Do NOT start the body at "Subject:".
4.  **Body Formatting**:
    - Once the Salutation (Trigger) is reached, switch to Standard Body Rules.
    - **Salutation**: Should be on its own line, separated from the Header by ONE blank line if possible, otherwise just start it.
    - **Paragraphs**: Join consecutive lines into a single paragraph string until a visual blank line appears in the PDF.
    - **Markers**: [135]-[146] markers are IMMUTABLE. Never remove or move them.

### OUTPUT FORMAT (Strict JSON)
Return a single JSON object. Do not include markdown code blocks.
{
  "passageId": ${passage.id},
  "structure": {
    "header_lines": ["Line 1", "Line 2", ...], // ALL header text here, single spaced in logic
    "salutation": "Dear Mr. X,", // The detected trigger line
    "body_paragraphs": [
       "First paragraph text... with [135] marker...",
       "Second paragraph..."
    ],
    "closing_lines": ["Sincerely,", "Name", "Title"]
  },
  "questions": [
    {
      "id": 135, // integer
      "is_sentence_insertion": false,
      "options": ["(A) ...", "(B) ...", "(C) ...", "(D) ..."]
    }
  ]
}

**Passage Text to Validate**:
"${passage.guidance}"
(Find the text block in the PDF that matches this context. Extract ONLY that passage.)
`;

        const result = await model.generateContent([
            { inlineData: { data: pdfBase64, mimeType: "application/pdf" } },
            prompt
        ]);

        const responseText = result.response.text();
        const cleanJson = responseText.replace(/```json/g, "").replace(/```/g, "").trim();

        const outputPath = path.join(OUTPUT_DIR, `test1_p${passage.id}_v15.json`);
        fs.writeFileSync(outputPath, cleanJson);
        console.log(`✅ Passage ${passage.id} saved to ${outputPath}`);
        return JSON.parse(cleanJson);

    } catch (error) {
        console.error(`❌ Error extracting Passage ${passage.id}:`, error);
        return null; // Continue to next
    }
}

async function run() {
    console.log("🚀 Starting V15 Extraction (Compact Header Strategy)...");
    for (const p of TARGET_PASSAGES) {
        await extractPassage(p);
        // Small delay to avoid rate limits
        await new Promise(r => setTimeout(r, 2000));
    }
    console.log("✨ All V15 extractions complete.");
}

run();
