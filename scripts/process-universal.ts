
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import * as path from 'path';
import sharp from 'sharp';

dotenv.config({ path: '.env.local' });

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error("❌ Error: GEMINI_API_KEY is not found in .env.local");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);

function fileToGenerativePart(path: string, mimeType: string) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType,
        },
    };
}

const SLEEP_MS = 1000; // Paid Tier Speed
function sleep(ms: number) { return new Promise(resolve => setTimeout(resolve, ms)); }

// Universal Storage
const universalData = {
    part1: [] as any[],
    part2: [] as any[],
    part3: [] as any[], // Sets
    part4: [] as any[], // Sets
    part5: [] as any[],
    part6: [] as any[],
    part7: [] as any[]
};

async function run() {
    const inputPath = process.argv[2];
    if (!inputPath) {
        console.log("Usage: npx tsx scripts/process-universal.ts <folder-path>");
        process.exit(1);
    }

    let imageFiles: string[] = [];
    try {
        if (fs.statSync(inputPath).isDirectory()) {
            // Sort by filename naturally
            imageFiles = fs.readdirSync(inputPath)
                .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
                .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
                .map(file => path.join(inputPath, file));
        } else {
            imageFiles = [inputPath];
        }
    } catch (e: any) {
        console.error(`❌ File error: ${e.message}`);
        process.exit(1);
    }

    console.log(`🚀 Starting Universal Router for ${imageFiles.length} images...`);

    // Load existing if resumable
    const outputFilename = 'universal_results.json';
    if (fs.existsSync(outputFilename)) {
        try {
            const raw = JSON.parse(fs.readFileSync(outputFilename, 'utf-8'));
            Object.assign(universalData, raw);
            console.log("   🔄 Loaded existing progress.");
        } catch (e) { }
    }

    for (const [index, imagePath] of imageFiles.entries()) {
        const fileName = path.basename(imagePath);

        // Skip if this file was already processed in any part
        // Simple check: is this filename in any 'originalFilePath'?
        const alreadyProcessed = Object.values(universalData).flat().some((item: any) =>
            (item.originalFilePath && item.originalFilePath.includes(fileName)) ||
            (item.questions && item.questions.some((q: any) => q.originalFilePath && q.originalFilePath.includes(fileName)))
        );

        if (alreadyProcessed) {
            console.log(`[${index + 1}/${imageFiles.length}] ⏭️  Skipping (Done): ${fileName}`);
            continue;
        }

        console.log(`\n[${index + 1}/${imageFiles.length}] 🤖 Analyzing: ${fileName}...`);

        let attempts = 0;
        let success = false;

        while (!success && attempts < 3) {
            attempts++;
            try {
                const mimeType = imagePath.endsWith(".png") ? "image/png" : "image/jpeg";
                const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

                // 1. COMBINED PROMPT (Text Only for Part 3/4)
                const combinedPrompt = `
                Role: TOEIC Data Extractor.
                Task: Identify the Part and Extract Data accordingly.

                Output JSON Structure:
                {
                    "part": "1" | "3" | "4" | "5" | "other",
                    "data": ... (extraction result based on part)
                }

                LOGIC:
                ---
                IF PART 1 (Photos):
                - "data": { "questions": [ { "id": "q1", "boundingBox": [ymin, xmin, ymax, xmax] (photo only), "options": [...] } ] }
                - Exclude question number/text from bounding box.

                IF PART 3 or 4 (Conversations/Talks):
                - "data": { "sets": [ { "setId": "set_32_34", "questions": [ { "id": "q32", "text": "...", "options": [...] } ] } ] }
                - NOTE: Do NOT crop graphics. Just extract the text.
                
                IF PART 5 (Grammar):
                - "data": { "questions": [ { "id": "q101", "text": "Stem text...", "options": [ { "label":"A", "text":"..." } ... ] } ] }

                IF OTHER:
                - "data": null
                
                IMPORTANT: Output ONLY valid JSON.
                `;

                const imagePart = fileToGenerativePart(imagePath, mimeType);
                const result = await model.generateContent([combinedPrompt, imagePart]);
                const response = await result.response;
                const text = response.text();
                const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
                const parsed = JSON.parse(jsonStr);

                if (parsed.part === "other") {
                    console.log("   Observed: Other/Irrelevant page.");
                } else {
                    console.log(`   ✅ Detected PART ${parsed.part}`);

                    // HANDLE EXTRACTION RESULT
                    if (parsed.part === "1" && parsed.data?.questions) {
                        for (const q of parsed.data.questions) {
                            // Part 1 Cropping Logic (Keep this as Part 1 needs it)
                            if (q.boundingBox) {
                                try {
                                    const metadata = await sharp(imagePath).metadata();
                                    const [ymin, xmin, ymax, xmax] = q.boundingBox;
                                    const absX = Math.floor((xmin / 1000) * metadata.width!);
                                    const absY = Math.floor((ymin / 1000) * metadata.height!);
                                    const absW = Math.floor(((xmax - xmin) / 1000) * metadata.width!);
                                    const absH = Math.floor(((ymax - ymin) / 1000) * metadata.height!);

                                    if (absW > 50) {
                                        const cropName = `crop_p1_${q.id}_${fileName}`;
                                        const cropPath = path.join(path.dirname(imagePath), cropName);
                                        await sharp(imagePath).extract({ left: absX, top: absY, width: absW, height: absH }).toFile(cropPath);
                                        q.imagePath = cropName;
                                        delete q.boundingBox;
                                        console.log(`      ✂️ Cropped Photo: ${cropName}`);
                                    }
                                } catch (e) { }
                            }
                        }
                        universalData.part1.push(...parsed.data.questions.map((q: any) => ({ ...q, originalFilePath: fileName })));

                    } else if ((parsed.part === "3" || parsed.part === "4") && parsed.data?.sets) {
                        // Part 3/4: No Cropping. Just Text.
                        // Use original filename as reference for the user to view the full page if needed.
                        if (parsed.part === "3") universalData.part3.push(...parsed.data.sets.map((s: any) => ({ ...s, originalFilePath: fileName })));
                        if (parsed.part === "4") universalData.part4.push(...parsed.data.sets.map((s: any) => ({ ...s, originalFilePath: fileName })));

                    } else if (parsed.part === "5" && parsed.data?.questions) {
                        universalData.part5.push(...parsed.data.questions.map((q: any) => ({ ...q, originalFilePath: fileName })));
                    }
                }

                // Auto Save
                fs.writeFileSync(outputFilename, JSON.stringify(universalData, null, 2));
                success = true;

            } catch (e: any) {
                console.error(`   ⚠️ Error (Attempt ${attempts}): ${e.message}`);
                await sleep(2000);
            }
        }
        await sleep(SLEEP_MS);
    }
    console.log("--------- UNIVERSAL ROUTER FINISHED ---------");
}

run();
