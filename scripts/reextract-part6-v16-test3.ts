
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL_NAME = "gemini-2.0-flash-exp";
const PDF_PATH = path.join(process.cwd(), "public", "images", "ETS_TOEIC_4", "RC4-3.pdf");
const OUTPUT_DIR = path.join(process.cwd(), "scripts", "v16_output_test3");

const TARGET_PASSAGES = [
    { id: 1, range: "131-134", guidance: "Questions 131-134 refer to the following" },
    { id: 2, range: "135-138", guidance: "Questions 135-138 refer to the following" },
    { id: 3, range: "139-142", guidance: "Questions 139-142 refer to the following" },
    { id: 4, range: "143-146", guidance: "Questions 143-146 refer to the following" }
];

const genAI = new GoogleGenerativeAI(API_KEY || "");

async function extract(p: typeof TARGET_PASSAGES[0]) {
    console.log(`Extracting P${p.id} (Range ${p.range})...`);
    if (!fs.existsSync(PDF_PATH)) { console.error(`❌ PDF Not Found`); return; }

    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const pdfData = fs.readFileSync(PDF_PATH).toString("base64");

    // Final V16 Strategy Prompt
    const prompt = `
    TASK: Extract TOEIC Part 6 Passage (Test 3, Questions ${p.range}).
    
    **ANCHOR**: Find text starting with "${p.guidance}". The passage is immediately below.

    **CORE PRINCIPLES**:
    1. **MARKERS**: Replace blanks/underlines with [${p.range.split('-')[0]}]...[${p.range.split('-')[1]}].
    2. **BLANK LINE IS KING**: If the PDF shows a blank horizontal line (gap), YOU MUST START A NEW STRING in the array.
       - If there is NO blank line (sentences just wrap), JOIN THEM into one string.

    **TYPE-SPECIFIC RULES**:
    
    **[A] IF IT IS AN EMAIL or LETTER (Has 'Dear...', 'To:')**:
    1. **HEADER**: Extract "To/From/Date/Subject". Left-Align. Join header lines.
    2. **BODY**: Start body AFTER Salutation.
    3. **CLOSING**: Isolate "Status/Name" (e.g. "Sincerely, Name") into \`closing_lines\`.
       - Even if layout is tight, Closing IS NOT part of Body.

    **[B] IF IT IS AN ADVERTISEMENT, ARTICLE, or NOTICE (No 'Dear...')**:
    1. **TITLE DETECT**: Look at the FIRST visual block. 
       - Is it short (< 15 words)? Centered? Bold? -> Put in \`header_lines\`.
       - Is it a long sentence? -> It's Body.
    2. **BODY**: Everything else is Body. 
       - Respect "Blank Line is King" for paragraph breaks.

    ### OUTPUT JSON
    {
      "passageId": ${p.id},
      "type": "EMAIL/LETTER/ADVERTISEMENT/ARTICLE",
      "structure": {
        "header_lines": ["Header 1", "Header 2"], 
        "salutation": "Dear...", 
        "body_paragraphs": ["Para 1...", "Para 2..."],
        "closing_lines": ["Sincerely,", "Name"]
      },
      "questions": [ 
         { "id": ${p.range.split('-')[0]}, "text": "Select the best answer.", "options": ["(A)..."] }
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

        fs.writeFileSync(path.join(OUTPUT_DIR, `test3_p${p.id}_v16.json`), json);
        console.log(`✅ P${p.id} Extracted.`);
    } catch (e) {
        console.error(`❌ P${p.id} Failed:`, e);
    }
}

async function run() {
    console.log("🚀 Starting V16 Final Extraction (Test 3)...");
    for (const p of TARGET_PASSAGES) {
        await extract(p);
        await new Promise(r => setTimeout(r, 2000));
    }
    console.log("✨ Test 3 Extraction Complete.");
}

run();
