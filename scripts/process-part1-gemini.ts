
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

// PAID TIER: Fast processing (1s)
const SLEEP_MS = 1000;

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    const inputPath = process.argv[2];
    if (!inputPath) {
        console.log("Usage: npx tsx scripts/process-part1-gemini.ts <file-or-folder-path>");
        process.exit(1);
    }

    let imageFiles: string[] = [];

    try {
        if (fs.statSync(inputPath).isDirectory()) {
            console.log(`📂 Parsing folder: ${inputPath}`);
            const files = fs.readdirSync(inputPath);
            imageFiles = files
                .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
                .map(file => path.join(inputPath, file));
            console.log(`   Found ${imageFiles.length} images.`);
        } else {
            imageFiles = [inputPath];
        }
    } catch (e: any) {
        console.error(`❌ File error: ${e.message}`);
        process.exit(1);
    }

    if (imageFiles.length === 0) {
        console.error("❌ No image files found.");
        process.exit(1);
    }

    // ---------------------------------------------------------
    // RESUMABLE LOGIC
    // ---------------------------------------------------------
    const outputFilename = 'extracted_part1_results.json';
    let allData = { questions: [] as any[] };

    if (fs.existsSync(outputFilename)) {
        try {
            const raw = fs.readFileSync(outputFilename, 'utf-8');
            allData = JSON.parse(raw);
            console.log(`   🔄 Loaded existing data: ${allData.questions.length} questions found.`);
        } catch (e) {
            console.log("   ⚠️ Could not read existing JSON. Starting fresh.");
        }
    }

    for (const [index, imagePath] of imageFiles.entries()) {
        const fileName = path.basename(imagePath);

        // Skip if already processed
        // We check if any existing question's originalFilePath contains this filename
        // This prevents re-processing the same source image.
        const alreadyExists = allData.questions.some(q => q.originalFilePath && q.originalFilePath.includes(fileName));

        if (alreadyExists) {
            console.log(`[${index + 1}/${imageFiles.length}] ⏭️  Skipping (Already done): ${fileName}`);
            continue;
        }

        console.log(`\n[${index + 1}/${imageFiles.length}] 🚀 Processing: ${fileName}...`);

        let attempts = 0;
        let success = false;

        while (!success && attempts < 5) {
            attempts++;
            try {
                const mimeType = imagePath.endsWith(".png") ? "image/png" : "image/jpeg";
                // Using 'gemini-2.0-flash' as confirmed available
                const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

                const prompt = `
                Analyze this TOEIC Part 1 exam image.
                
                STEP 1: IDENTIFY PART
                - Is this a "Part 1" question? (Must contain a large Photograph showing a scene/person).
                - CRITICAL: Is this the "Directions" page? (Contains "Directions:", "Statement (C)", "Sample"). If yes, Output { "skipped": true, "reason": "Directions Page" } and STOP.
                - If it is Part 2, 3, 4, or Reading, or just cover text: Output { "skipped": true, "reason": "Not Part 1" } and STOP.

                STEP 2: EXTRACT DATA & CROP REGIONS
                Extract data into JSON format.
                - For EACH question visible on the page (there might be 1 or 2):
                    - id: "q[number]" based on visible number (e.g. "6." -> "q06").
                    
                    CRITICAL CROP INSTRUCTIONS:
                    - boundingBox: [ymin, xmin, ymax, xmax] (scale 0-1000).
                    - EXCLUDE the question number (e.g. "1.", "2.").
                    - EXCLUDE the text options (A), (B), etc. below.
                    - CROP TIGHTLY around the photograph border.
                    - If there are multiple photos, verify which one belongs to which number.

                    - scripts: Array of 4 options (A, B, C, D).
                    - correctAnswer: "A", "B", "C", "D" (or "UNKNOWN").
                    - translation: Korean translation.

                Structure example:
                {
                    "questions": [
                        {
                            "id": "q1",
                            "boundingBox": [0, 0, 500, 1000], 
                            "correctAnswer": "A",
                            "scripts": [...]
                        }
                    ]
                }
                Output ONLY valid JSON.
                `;

                const imagePart = fileToGenerativePart(imagePath, mimeType);
                const result = await model.generateContent([prompt, imagePart]);
                const response = await result.response;
                const text = response.text();

                const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();

                try {
                    const parsed = JSON.parse(jsonStr);

                    if (parsed.skipped) {
                        console.log(`   ⏭️  Skipped: ${parsed.reason}`);
                    } else if (parsed.questions) {

                        const enrichedQuestions = [];

                        for (const q of parsed.questions) {
                            let finalImagePath = imagePath;

                            // PER-QUESTION CROP LOGIC
                            if (q.boundingBox) {
                                try {
                                    const [ymin, xmin, ymax, xmax] = q.boundingBox;
                                    const metadata = await sharp(imagePath).metadata();

                                    if (metadata.width && metadata.height) {
                                        const safe = (val: number, max: number) => Math.max(0, Math.min(val, max));

                                        const absX = Math.floor(safe((xmin / 1000), 1) * metadata.width);
                                        const absY = Math.floor(safe((ymin / 1000), 1) * metadata.height);
                                        const absW = Math.floor(safe(((xmax - xmin) / 1000), 1) * metadata.width);
                                        const absH = Math.floor(safe(((ymax - ymin) / 1000), 1) * metadata.height);

                                        if (absW > 50 && absH > 50) {
                                            const croppedFilename = `cropped_${q.id}_${fileName}`;
                                            const croppedPath = path.join(path.dirname(imagePath), croppedFilename);

                                            // Always overwrite crop to ensure quality update if re-running
                                            await sharp(imagePath)
                                                .extract({ left: absX, top: absY, width: absW, height: absH })
                                                .toFile(croppedPath);

                                            console.log(`   ✂️  Cropped ${q.id} saved to: ${croppedFilename}`);
                                            finalImagePath = croppedPath;
                                        }
                                    }
                                } catch (cropErr) {
                                    console.error(`   ⚠️ Crop Error for ${q.id}: Using full page.`);
                                }
                            }

                            enrichedQuestions.push({
                                ...q,
                                originalFilePath: finalImagePath
                            });
                        }

                        allData.questions.push(...enrichedQuestions);

                        // ID Sorting
                        allData.questions.sort((a, b) => {
                            const numA = parseInt(a.id.replace(/\D/g, '')) || 0;
                            const numB = parseInt(b.id.replace(/\D/g, '')) || 0;
                            return numA - numB;
                        });

                        // Incremental Save
                        fs.writeFileSync(outputFilename, JSON.stringify(allData, null, 2));
                        console.log(`   💾 Saved progress (${allData.questions.length} total).`);
                    }
                } catch (jsonErr) {
                    console.error("   ❌ JSON Parse Error. Ignoring.");
                }

                success = true;

            } catch (error: any) {
                console.error(`   🛑 Error (Attempt ${attempts}/5): ${error.message}`);

                if (error.message.includes("429") || error.message.includes("Quota")) {
                    console.log(`   ⏳ RATE LIMIT HIT. Sleeping 5s...`);
                    await sleep(5000);
                } else if (error.message.includes("503")) {
                    await sleep(2000);
                } else {
                    console.error("   ❌ Fatal Error for this file. Skipping.");
                    break;
                }
            }
        }

        if (index < imageFiles.length - 1) {
            await sleep(SLEEP_MS);
        }
    }

    console.log("\n--------- PROCESSING COMPLETE ---------");
}

run();
