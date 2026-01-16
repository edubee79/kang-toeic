import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// ===== CLASSIFICATION TAXONOMY =====
// Part 5: Grammar/Vocabulary Types
type Part5Type = "G_POS" | "G_VERB" | "G_CONJ" | "V_NOUN" | "V_VERB" | "V_ADJ" | "V_ADV";

// Part 6: Passage Types
type Part6Type = "P6_EMAIL" | "P6_NOTICE" | "P6_LETTER" | "P6_ARTICLE" | "P6_REVIEW";

// Part 7: Question Types
type Part7QuestionType = "RC_DETAIL" | "RC_INFERENCE" | "RC_NOT_TRUE" | "RC_SYNONYM" | "RC_GIST" | "RC_VOCAB";

// Part 7: Passage Types
type Part7PassageType = "P7_EMAIL" | "P7_NOTICE" | "P7_ARTICLE" | "P7_CHAT" | "P7_FORM" | "P7_ADVERTISEMENT";

interface Part5Question {
    id: string;
    text: string;
    options: { label: string; text: string }[];
    classification?: Part5Type;
}

interface Part6Set {
    setId: string;
    title: string;
    passageType?: Part6Type;
    passage: string; // HTML allowed
    questions: {
        id: string;
        options: { label: string; text: string }[];
    }[];
}

interface Part7Set {
    setId: string;
    title: string;
    passageType?: Part7PassageType;
    passages: string[]; // Single, Double, or Triple passage (HTML)
    questions: {
        id: string;
        text: string;
        options: { label: string; text: string }[];
        classification?: Part7QuestionType;
    }[];
}

interface RCData {
    part5: Part5Question[];
    part6: Part6Set[];
    part7: Part7Set[];
}

function fileToGenerativePart(imagePath: string, mimeType: string) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(imagePath)).toString("base64"),
            mimeType,
        },
    };
}

async function processRCFolder(folderPath: string): Promise<RCData> {
    const rcData: RCData = {
        part5: [],
        part6: [],
        part7: [],
    };

    const files = fs.readdirSync(folderPath)
        .filter(f => /\.(jpg|jpeg|png|pdf)$/i.test(f) && !f.includes('해설'))
        .sort();
    console.log(`📂 Found ${files.length} files in ${folderPath}`);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    for (const fileName of files) {
        const imagePath = path.join(folderPath, fileName);
        let mimeType = "image/jpeg";
        if (fileName.endsWith(".png")) mimeType = "image/png";
        if (fileName.endsWith(".pdf")) mimeType = "application/pdf";

        console.log(`\n🔍 Processing: ${fileName}`);

        // COMBINED PROMPT: Routing + Extraction + Classification
        const combinedPrompt = `
Role: TOEIC RC Data Extractor with Classification.

Task: Identify the Part (5, 6, or 7) and extract data with classification tags.

Output JSON Structure:
{
    "part": "5" | "6" | "7" | "other",
    "data": ... (extraction result based on part)
}

LOGIC:
---
IF PART 5 (Grammar/Vocabulary):
- "data": { 
    "questions": [ 
        { 
            "id": "q101", 
            "text": "Full sentence with ------ blank.", 
            "options": [ { "label": "A", "text": "..." }, ... ],
            "classification": "G_POS" | "G_VERB" | "G_CONJ" | "V_NOUN" | "V_VERB" | "V_ADJ" | "V_ADV"
        } 
    ] 
}
- Classification Guide:
  - G_POS: 품사 선택 (명사/형용사/부사/동사 형태)
  - G_VERB: 동사 (시제/수/태)
  - G_CONJ: 전치사/접속사
  - V_NOUN/V_VERB/V_ADJ/V_ADV: 어휘 선택 (의미 구별)

IF PART 6 (Text Completion):
- "data": { 
    "sets": [ 
        { 
            "setId": "set_131_134", 
            "title": "Questions 131-134 refer to the following notice.",
            "passageType": "P6_EMAIL" | "P6_NOTICE" | "P6_LETTER" | "P6_ARTICLE" | "P6_REVIEW",
            "passage": "<p>HTML formatted passage with --- 131 --- blanks</p>", 
            "questions": [ { "id": "q131", "options": [...] } ] 
        } 
    ] 
}

IF PART 7 (Reading Comprehension):
- "data": { 
    "sets": [ 
        { 
            "setId": "set_147_148", 
            "title": "Questions 147-148 refer to the following e-mail.",
            "passageType": "P7_EMAIL" | "P7_NOTICE" | "P7_ARTICLE" | "P7_CHAT" | "P7_FORM" | "P7_ADVERTISEMENT",
            "passages": ["<p>First passage HTML</p>", "<p>Second passage if double/triple</p>"],
            "questions": [ 
                { 
                    "id": "q147", 
                    "text": "What is the purpose of the e-mail?", 
                    "options": [...],
                    "classification": "RC_DETAIL" | "RC_INFERENCE" | "RC_NOT_TRUE" | "RC_SYNONYM" | "RC_GIST" | "RC_VOCAB"
                } 
            ] 
        } 
    ] 
}
- Classification Guide:
  - RC_DETAIL: 세부 정보 찾기
  - RC_INFERENCE: 추론/암시
  - RC_NOT_TRUE: True/Not True
  - RC_SYNONYM: 동의어/문맥상 의미
  - RC_GIST: 주제/목적
  - RC_VOCAB: 어휘 문제

IF OTHER (Directions, Answer Sheet, etc.):
- "data": null

IMPORTANT: 
1. Output ONLY valid JSON.
2. For Part 6/7 passages, preserve line breaks as <br/> tags.
3. Apply classification tags based on question type analysis.
4. If unsure about classification, use the most likely category.
`;

        // Extract Test ID from filename (e.g., "RC4-1.pdf" -> 1)
        const testIdMatch = fileName.match(/RC4-(\d+)/);
        const testId = testIdMatch ? parseInt(testIdMatch[1]) : 0;

        try {
            const imagePart = fileToGenerativePart(imagePath, mimeType);
            const result = await model.generateContent([combinedPrompt, imagePart]);
            const response = await result.response;
            const text = response.text();

            // Sanitize JSON
            let jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
            // Sometimes Gemini outputs text before/after JSON, try to find the start/end brackets
            const firstOpen = jsonStr.indexOf('{');
            const lastClose = jsonStr.lastIndexOf('}');
            if (firstOpen !== -1 && lastClose !== -1) {
                jsonStr = jsonStr.substring(firstOpen, lastClose + 1);
            }

            const parsed = JSON.parse(jsonStr);

            if (parsed.part === "other") {
                console.log("   ⏭️  Skipped: Directions/Other page");
            } else if (parsed.part === "5" && parsed.data?.questions) {
                console.log(`   ✅ Part 5: ${parsed.data.questions.length} questions (Test ${testId})`);
                const taggedQuestions = parsed.data.questions.map((q: any) => ({ ...q, testId }));
                rcData.part5.push(...taggedQuestions);
            } else if (parsed.part === "6" && parsed.data?.sets) {
                console.log(`   ✅ Part 6: ${parsed.data.sets.length} sets (Test ${testId})`);
                const taggedSets = parsed.data.sets.map((s: any) => ({ ...s, testId }));
                rcData.part6.push(...taggedSets);
            } else if (parsed.part === "7" && parsed.data?.sets) {
                console.log(`   ✅ Part 7: ${parsed.data.sets.length} sets (Test ${testId})`);
                const taggedSets = parsed.data.sets.map((s: any) => ({ ...s, testId }));
                rcData.part7.push(...taggedSets);
            }

            // Rate limiting: 1 request per second
            await new Promise(resolve => setTimeout(resolve, 1000));

        } catch (error: any) {
            console.error(`   ❌ Error processing ${fileName}:`, error.message);
        }
    }

    return rcData;
}

async function main() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.error("Usage: npx tsx scripts/process-rc-universal.ts <folder_path>");
        process.exit(1);
    }

    const folderPath = args[0];
    if (!fs.existsSync(folderPath)) {
        console.error(`❌ Folder not found: ${folderPath}`);
        process.exit(1);
    }

    console.log("🚀 RC Universal Extractor Started");
    console.log(`📂 Input Folder: ${folderPath}`);
    console.log("⏳ Processing...\n");

    const rcData = await processRCFolder(folderPath);

    const outputPath = path.join(process.cwd(), "rc_extracted_results.json");
    fs.writeFileSync(outputPath, JSON.stringify(rcData, null, 2), "utf-8");

    console.log("\n✅ Extraction Complete!");
    console.log(`📊 Results:`);
    console.log(`   - Part 5: ${rcData.part5.length} questions`);
    console.log(`   - Part 6: ${rcData.part6.length} sets`);
    console.log(`   - Part 7: ${rcData.part7.length} sets`);
    console.log(`💾 Saved to: ${outputPath}`);
}

main();
