
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: ".env.local" });

// Configuration
const API_KEY = process.env.GEMINI_API_KEY;
const MODEL_NAME = "gemini-2.0-flash-exp";
const PDF_PATH = path.join(process.cwd(), "public", "images", "ETS_TOEIC_4", "RC4-2.pdf"); // Test 2 PDF
const OUTPUT_DIR = path.join(process.cwd(), "scripts", "v15_output_test2");

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const genAI = new GoogleGenerativeAI(API_KEY || "");

// Test 2 Passages
// Based on grep/rc_part6.ts
const TARGET_PASSAGES = [
    { id: 1, questionRange: "131-134", guidance: "Questions 131-134 refer to the following e-mail." },
    { id: 2, questionRange: "135-138", guidance: "Questions 135-138 refer to the following advertisement." },
    { id: 3, questionRange: "139-142", guidance: "Questions 139-142 refer to the following e-mail." },
    { id: 4, questionRange: "143-146", guidance: "Questions 143-146 refer to the following e-mail." }
];

async function extractPassage(passage: { id: number, questionRange: string, guidance: string }) {
    console.log(`Processing Test 2 Passage ${passage.id}...`);

    try {
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });
        const pdfData = fs.readFileSync(PDF_PATH);
        const pdfBase64 = pdfData.toString("base64");

        const prompt = `
You are an expert TOEIC Content Digitizer. Your goal is to extract Part 6 passages with "Precision Layout" fidelity.

**TARGET**: Test 2, Passage ${passage.id} (${passage.questionRange})
**CONTEXT**: "${passage.guidance}"

### STEP 1: CLASSIFY DOCUMENT TYPE
Analyze the "CONTEXT" string (and the visual PDF content) to determine the document type.
- **Keywords**: "letter" -> LETTER, "e-mail" -> EMAIL, "notice" -> NOTICE, "advertisement" -> ADVERTISEMENT, "article" -> ARTICLE, "announcement" -> ANNOUNCEMENT, "memo" -> MEMO, "information" -> INFORMATION, "press release" -> PRESS RELEASE.

### STEP 2: APPLY LAYOUT STRATEGY
Based on validity, apply one of the following strategies:

#### A. COMPACT HEADER STRATEGY (For LETTER, EMAIL)
*Goal: Eliminate excessive whitespace in the header block (From/To/Date/Subject/Address).*
1.  **Header Zone**: All text from top DOWN TO the **Salutation**.
2.  **Salutation Triggers**: "Dear...", "To Whom It May Concern", "Hi...", "Hello...", "Greetings".
3.  **Formatting**:
    -   Inside Header Zone: **Force Single Spacing (\n)**. Remove all blank lines. Strict Left-Align.
    -   Include "Subject:", "Re:", "From:", "To:", "Date:" lines in this Compact Header.
4.  **Body**: Starts *immediately* after the Salutation. Normal paragraph rules apply.

#### B. TITLE HEADER STRATEGY (For NOTICE, ARTICLE, ADVERTISEMENT, ANNOUNCEMENT, MEMO, etc.)
*Goal: Distinctly separate the Title/Headline from the Body.*
1.  **Header Zone**: The Title, Headline, or Subhead at the very top.
2.  **Formatting**: Keep the Title as separate lines in \`header_lines\`. Do NOT force single spacing if they are visually distinct (e.g. large font).
3.  **Body**: Starts at the first paragraph of normal text.
4.  **Memo Special**: If it's a MEMO, it might look like an Email (To/From/Date). If so, treat it like the COMPACT HEADER strategy but without a "Dear" salutation trigger (Memos often start directly).

### STEP 3: GENERAL EXTRACTION RULES
1.  **Body Paragraphs**: Join consecutive lines into a single string UNTIL a visual blank line appears. Replace internal newlines with a single space.
2.  **Markers**: [131]-[146] are sacrosanct. NEVER remove them. Place them exactly where they appear in the flow of text.
3.  **Closing**: Isolate "Sincerely", "Best regards", or the Name/Title at the bottom.

### OUTPUT FORMAT (Strict JSON)
{
  "passageId": ${passage.id},
  "type": "DETECTED_TYPE", // e.g. "EMAIL", "ADVERTISEMENT"
  "structure": {
    "header_lines": ["Line 1", "Line 2"], 
    "salutation": "Dear...", // (If applicable, else null/empty)
    "body_paragraphs": ["Para 1...", "Para 2..."],
    "closing_lines": ["Closing 1", "Closing 2"]
  },
  "questions": [
    {
      "id": 131, // integer loop for range
      "text": "Select the best answer.", // or "Refer to the marked sentence..." if insertion
      "options": ["(A) ...", "(B) ...", "(C) ...", "(D) ..."]
    }
  ]
}
`;

        const result = await model.generateContent([
            { inlineData: { data: pdfBase64, mimeType: "application/pdf" } },
            prompt
        ]);

        const responseText = result.response.text();
        const cleanJson = responseText.replace(/```json/g, "").replace(/```/g, "").trim();

        const outputPath = path.join(OUTPUT_DIR, `test2_p${passage.id}_v15.json`);
        fs.writeFileSync(outputPath, cleanJson);
        console.log(`✅ Passage ${passage.id} saved to ${outputPath}`);

    } catch (error) {
        console.error(`❌ Error extracting Passage ${passage.id}:`, error);
    }
}

async function run() {
    console.log("🚀 Starting V15 Extraction for Test 2...");
    for (const p of TARGET_PASSAGES) {
        await extractPassage(p);
        await new Promise(r => setTimeout(r, 2000));
    }
    console.log("✨ All Test 2 extractions complete.");
}

run();
