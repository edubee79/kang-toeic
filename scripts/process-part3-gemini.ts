
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import * as path from 'path';

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
        console.log("Usage: npx tsx scripts/process-part3-gemini.ts <file-or-folder-path>");
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

    const outputFilename = 'extracted_part3_results.json';
    let allData = { sets: [] as any[] };

    if (fs.existsSync(outputFilename)) {
        try {
            const raw = fs.readFileSync(outputFilename, 'utf-8');
            allData = JSON.parse(raw);
            console.log(`   🔄 Loaded existing data: ${allData.sets.length} sets found.`);
        } catch (e) {
            console.log("   ⚠️ Could not read existing JSON. Starting fresh.");
        }
    }

    for (const [index, imagePath] of imageFiles.entries()) {
        const fileName = path.basename(imagePath);

        // Skip check (rough name match)
        const alreadyExists = allData.sets.some(s => s.originalFilePath && s.originalFilePath.includes(fileName));
        if (alreadyExists) {
            console.log(`[${index + 1}/${imageFiles.length}] ⏭️  Skipping (Already done): ${fileName}`);
            continue;
        }

        console.log(`\n[${index + 1}/${imageFiles.length}] 🚀 Processing Part 3: ${fileName}...`);

        let attempts = 0;
        let success = false;

        while (!success && attempts < 5) {
            attempts++;
            try {
                const mimeType = imagePath.endsWith(".png") ? "image/png" : "image/jpeg";
                // Using 'gemini-2.0-flash' as confirmed available
                const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

                const prompt = `
                Analyze this TOEIC Part 3 exam image.
                
                STEP 1: IDENTIFY PART
                - Is this pages containing Part 3 questions? (Usually formatted in columns, groups of 3 questions).
                - Look for "Directions:" or question blocks like "32.", "33.", "34.".
                - CRITICAL: Skip if it's purely Directions/Example page without actual questions. Output { "skipped": true, "reason": "No questions" }.

                STEP 2: EXTRACT CONVERSATION SETS
                Extract data into JSON format.
                - Group questions into "sets" of 3 (or sometimes 2 or 4).
                - Each set corresponds to one conversation.
                - Usually "Questions 32-34 refer to the following conversation."

                Structure:
                {
                    "sets": [
                        {
                            "setId": "set_32_34", // Generate ID based on range
                            "instructions": "Questions 32-34 refer to the following conversation.",
                            "questions": [
                                {
                                    "id": "q32",
                                    "text": "Where does the conversation take place?",
                                    "options": [
                                        { "label": "A", "text": "In a hotel" },
                                        { "label": "B", "text": "In a store" },
                                        { "label": "C", "text": "In a park" },
                                        { "label": "D", "text": "In a office" }
                                    ],
                                    "correctAnswer": "UNKNOWN" // Usually not marked on question paper
                                },
                                ...
                            ]
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
                    } else if (parsed.sets) {

                        const enrichedSets = parsed.sets.map((s: any) => ({
                            ...s,
                            originalFilePath: fileName // Just store filename for reference
                        }));

                        // Push sets to allData
                        allData.sets.push(...enrichedSets);

                        // ID Sorting (Sets)
                        allData.sets.sort((a, b) => {
                            const getNum = (id: string) => parseInt(id.replace(/\D/g, '')) || 0;
                            return getNum(a.setId) - getNum(b.setId);
                        });

                        // Incremental Save
                        fs.writeFileSync(outputFilename, JSON.stringify(allData, null, 2));
                        console.log(`   💾 Saved progress (${enrichedSets.length} sets added).`);
                    }
                } catch (jsonErr) {
                    console.error("   ❌ JSON Parse Error. Ignoring.");
                }

                success = true;

            } catch (error: any) {
                console.error(`   🛑 Error (Attempt ${attempts}/5): ${error.message}`);

                if (error.message.includes("429") || error.message.includes("Quota")) {
                    console.log(`   ⏳ RATE LIMIT HIT in PAID TIER? (Unlikely but waiting 5s)`);
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

    console.log("\n--------- PART 3 PROCESSING COMPLETE ---------");
}

run();
