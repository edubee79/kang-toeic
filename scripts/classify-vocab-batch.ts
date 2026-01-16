import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

async function classifyWords(words: string[]): Promise<{ word: string, theme: string }[]> {
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const prompt = `
    Classify the following TOEIC vocabulary words into ONE of these categories:
    1. Production/Manufacturing (Factory, process, quality, equipment)
    2. Logistics/Shipping (Transport, delivery, cargo, warehouse)
    3. Research/Development (Technology, innovation, analysis, science)
    4. Management (Strategy, decision, organization, leadership)
    5. Personnel/Welfare (Salary, benefit, vacation, retirement)
    6. Law/Regulation (Rules, contract, compliance, safety)
    7. General (If it doesn't fit clearly)

    Return ONLY a JSON object where keys are words and values are categorical names (Production, Logistics, Research, Management, Personnel, Law, General).
    
    Words:
    ${words.join(", ")}
  `;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text().replace(/```json/g, "").replace(/```/g, "");
        const mapping = JSON.parse(text);

        return words.map(w => ({ word: w, theme: mapping[w] || "General" }));
    } catch (e: any) {
        console.error("Error classifying:", e.message);
        return words.map(w => ({ word: w, theme: "General" }));
    }
}

async function main() {
    // 1. Read Existing Used Words
    const existingContent = fs.readFileSync('resources/themed_1200_vocab.csv', 'utf-8');
    const usedWords = new Set<string>();
    existingContent.split('\n').slice(1).forEach(line => {
        const parts = parseCsvLine(line);
        if (parts.length > 2) usedWords.add(parts[2].trim());
    });

    console.log(`Loaded ${usedWords.size} existing words.`);

    // 2. Read Candidates
    const rawContent = fs.readFileSync('resources/hackers_vocab_final.csv', 'utf-8');
    const lines = rawContent.split('\n').slice(1).filter(l => l.trim().length > 0);

    console.log(`Total lines in hackers csv: ${lines.length}`);

    const candidates: any[] = [];

    for (const line of lines) {
        const parts = parseCsvLine(line);
        if (parts.length < 3) continue;

        const word = parts[2] ? parts[2].trim() : '';
        if (!word) continue;

        if (!usedWords.has(word)) {
            candidates.push({
                word: word,
                meaning: parts[3],
                line: line
            });
        }
    }

    console.log(`Found ${candidates.length} candidate words.`);

    // 3. Batched Classification (Take top 600 for Days 9-16)
    // We only need ~600 words to fill 15 days (Day 9-16 = 8 days * 80 words = 640 words)
    const targetCount = 640;
    const selected = candidates.slice(0, targetCount);

    console.log(`Classifying ${selected.length} words...`);

    const BATCH_SIZE = 50;
    let results: any[] = [];

    for (let i = 0; i < selected.length; i += BATCH_SIZE) {
        const batch = selected.slice(i, i + BATCH_SIZE);
        console.log(`Processing batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(selected.length / BATCH_SIZE)}...`);

        const classifications = await classifyWords(batch.map(c => c.word));

        // Merge
        classifications.forEach((c, idx) => {
            results.push({
                ...batch[idx],
                themeRaw: c.theme
            });
        });

        // Rate limit safety
        await new Promise(r => setTimeout(r, 2000));
    }

    fs.writeFileSync('resources/classified_candidates.json', JSON.stringify(results, null, 2));
    console.log("Saved classification results to resources/classified_candidates.json");
}

function parseCsvLine(line: string): string[] {
    const parts: string[] = [];
    let current = '';
    let inQuote = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            inQuote = !inQuote;
        } else if (char === ',' && !inQuote) {
            parts.push(current);
            current = '';
        } else {
            current += char;
        }
    }
    parts.push(current);
    return parts;
}

main();
