
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

function fileToGenerativePart(filePath: string, mimeType: string) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(filePath)).toString("base64"),
            mimeType,
        },
    };
}

async function extractDayData(imagePaths: string[]) {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
    Role: Professional English-Korean Vocabulary Data Extractor.
    Task: Extract vocabulary data from the provided images of a TOEIC vocabulary book (Sinagong Voca).

    Output Format: JSON Array of objects.
    Each object structure:
    {
      "word": "English word",
      "meaning": "Korean meaning",
      "pos": "Part of speech (e.g., 명, 동, 형, 부)",
      "usageNote": "Usage notes or tips provided in the book (if any)",
      "collocations": [ { "en": "...", "ko": "..." } ],
      "derivatives": [ { "word": "...", "pos": "...", "meaning": "..." } ],
      "grammarPoint": "Grammar focal points (if any)",
      "example": "English example sentence",
      "exampleKo": "Korean translation of the example sentence"
    }

    Rules:
    1. Preserve all details like synonyms in usageNote if they are described as tips.
    2. Collocations usually appear in a separate list or indented.
    3. Derivatives are often listed nearby with POS indicators.
    4. If a page contains a Day marker (e.g., DAY 02), please process it as the start of a new section but return all words in one sequence.
    5. Ensure high accuracy.
    6. Output ONLY the JSON array.
    `;

    const imageParts = imagePaths.map(p => fileToGenerativePart(p, "image/jpeg"));

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();

    try {
        const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
        return JSON.parse(jsonStr);
    } catch (e) {
        console.error("Failed to parse JSON:", text);
        return [];
    }
}

async function main() {
    const startIdx = parseInt(process.argv[2]);
    const endIdx = parseInt(process.argv[3]);
    const day = process.argv[4];

    if (isNaN(startIdx) || isNaN(endIdx) || !day) {
        console.log("Usage: npx tsx scripts/extract-sinagong-voca.ts <startIdx> <endIdx> <day>");
        process.exit(1);
    }

    const imageDir = 'toeic-data/시나공보카';
    const outputPath = `toeic-data/sina_voca_day${day}.json`;

    const paths = [];
    for (let i = startIdx; i <= endIdx; i++) {
        const p = path.join(imageDir, `시나공보카_${i}.jpg`);
        if (fs.existsSync(p)) {
            paths.push(p);
        }
    }

    if (paths.length === 0) {
        console.log("No images found in range.");
        return;
    }

    console.log(`🚀 Extracting Day ${day} from ${paths.length} images...`);

    // Process in batches if too many images
    const batchSize = 5;
    let allWords = [];

    for (let i = 0; i < paths.length; i += batchSize) {
        const batch = paths.slice(i, i + batchSize);
        console.log(`   Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(paths.length / batchSize)}...`);
        const words = await extractDayData(batch);
        allWords.push(...words);
        await new Promise(r => setTimeout(r, 2000)); // Throttle
    }

    fs.writeFileSync(outputPath, JSON.stringify(allWords, null, 2));
    console.log(`✅ Extraction complete! Saved to ${outputPath}`);
    console.log(`   Total words extracted: ${allWords.length}`);
}

main();
