
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL_NAME = "gemini-2.0-flash-exp";
const PDF_PATH = path.join(process.cwd(), "public", "images", "ETS_TOEIC_4", "RC4-2.pdf");
const OUTPUT_DIR = path.join(process.cwd(), "scripts", "v16_output_test2");

const TARGET_PASSAGES = [
    { id: 1, range: "131-134", guidance: "Questions 131-134 refer to the following e-mail." },
    { id: 2, range: "135-138", guidance: "Questions 135-138 refer to the following advertisement." },
    { id: 3, range: "139-142", guidance: "Questions 139-142 refer to the following e-mail." }, // "email" vs "e-mail" check? usually "e-mail" in ETS
    { id: 4, range: "143-146", guidance: "Questions 143-146 refer to the following e-mail." }
];

const genAI = new GoogleGenerativeAI(API_KEY || "");

async function extract(p: typeof TARGET_PASSAGES[0]) {
    console.log(`Extracting P${p.id} using anchor "${p.guidance}"...`);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const pdfData = fs.readFileSync(PDF_PATH).toString("base64");

    // Strict V16 Prompt
    const prompt = `
    Task: Extract TOEIC Part 6 Passage for Questions ${p.range}.
    
    **CRITICAL FINDING INSTRUCTION**:
    1. Scan the PDF for the EXACT text: "${p.guidance}" (or vary slightly like "Questions ... refer to the following email").
    2. The passage content is IMMEDIATELY below that instruction. Extract ONLY that passage.

    **CRITICAL CONTENT RULES**:
    1. **MARKERS**: You MUST include the question markers [${p.range.split('-')[0]}]...[${p.range.split('-')[1]}] in the body.
       - If you see a blank line "\_\_\_\_\_\_", replace it with the marker [${p.range.split('-')[0]}].
       - If you see "(131)", replace it with [131].
       - DO NOT OMIT MARKERS. The extraction is FAILED if markers are missing.

    2. **HEADER LAYOUT (Emails/Letters)**:
       - Find "To:", "From:", "Date:", "Subject:", or Address lines.
       - Put them in \`header_lines\`.
       - **Strictly Left-Align** header content. 
       - JOIN lines within the header if they belong to the same field (e.g. Address).

    3. **SPACING & PARAGRAPHS**:
       - **Salutation**: Isolate "Dear X," or "To Whom...".
       - **Body Start**: The body starts immediately after the Salutation.
       - **Paragraphs**: Join consecutive lines of text into one string. 
       - **New Paragraph**: ONLY start a new paragraph string if there is a **VISUAL BLANK LINE** in the PDF.
       - Do NOT treat the end of a sentence as a paragraph break.

    ### OUTPUT JSON FORMAT
    {
      "passageId": ${p.id},
      "type": "EMAIL/LETTER/ADVERTISEMENT/ARTICLE",
      "structure": {
        "header_lines": ["Line 1", "Line 2"], 
        "salutation": "Dear...", 
        "body_paragraphs": ["Para 1 text... [131] ...", "Para 2 ..."],
        "closing_lines": ["Sincerely,", "Name"]
      },
      "questions": [ 
         { "id": ${p.range.split('-')[0]}, "text": "Select the best answer.", "options": ["(A) ...", "(B) ..."] }
      ]
    }
    `;

    try {
        const result = await model.generateContent([
            { inlineData: { data: pdfData, mimeType: "application/pdf" } },
            prompt
        ]);
        const json = result.response.text().replace(/```json/g, "").replace(/```/g, "").trim();
        if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

        fs.writeFileSync(path.join(OUTPUT_DIR, `test2_p${p.id}_v16.json`), json);
        console.log(`✅ P${p.id} Extracted & Saved.`);
    } catch (e) {
        console.error(`❌ P${p.id} Failed:`, e);
    }
}

async function run() {
    console.log("🚀 Starting V16 Extraction (Test 2)...");
    for (const p of TARGET_PASSAGES) {
        await extract(p);
        await new Promise(r => setTimeout(r, 2000)); // Rate limit safety
    }
    console.log("✨ V16 Extraction Complete.");
}

run();
