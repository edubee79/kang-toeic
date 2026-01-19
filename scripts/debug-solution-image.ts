// @ts-nocheck
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

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

async function debugTest1Images() {
    // Target Test 1 (Vol 3)
    const testFolder = `1회`;
    const solutionDir = path.join(process.cwd(), 'toeic-data', 'ETS정기기출3탄', '해설', 'RC', testFolder);

    console.log(`Checking solution directory: ${solutionDir}`);

    if (!fs.existsSync(solutionDir)) {
        console.error("❌ Solution directory not found!");
        return;
    }

    const images = fs.readdirSync(solutionDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
    // Sort numerically to handle 2.jpg vs 10.jpg correctly
    images.sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)?.[0] || "0");
        const numB = parseInt(b.match(/\d+/)?.[0] || "0");
        return numA - numB;
    });

    // Scan first 5 images (Part 5 is usually page 1-2, Part 6 page 3-4)
    // We expect Part 6 to be in the early images now.
    const candidates = images.slice(0, 5);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    // Pick a few likely candidates. Usually images are numbered sequentially.
    // If we can send a batch, great. Let's look at indices 0, 1, 2, 3, 4.

    console.log(`Scanning first ${candidates.length} images for 'Part 6' or '131'...`);

    for (const imageFile of candidates) {
        const imagePath = path.join(solutionDir, imageFile);
        console.log(`\nAnalyzing: ${imageFile}`);

        const imagePart = fileToGenerativePart(imagePath, "image/jpeg");
        const prompt = `
        Does this page contain the Answer Key or Explanations for "PART 6" (Questions 131-146)?
        If yes, transcribe the text for Question 131 and 132 EXACTLY.
        If no, just say "No Part 6 found".
        `;

        try {
            const result = await model.generateContent([prompt, imagePart]);
            const response = await result.response;
            console.log(`--- Result for ${imageFile} ---`);
            console.log(response.text());
        } catch (e) {
            console.error(`Error processing ${imageFile}:`, e);
        }
    }
}

debugTest1Images();
