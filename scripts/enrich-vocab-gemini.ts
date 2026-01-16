import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

interface VocabWord {
    id: string;
    word: string;
    meaning: string;
    synonyms?: string[];
    antonyms?: string[];
    similar?: string[];
    example?: string;
    exampleKo?: string;
}

async function enrichBatch(words: VocabWord[]): Promise<VocabWord[]> {
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const prompt = `
    You are a linguistics expert specializing in TOEIC. For the following vocabulary words, provide:
    1. **Synonyms**: 1-2 common synonyms with their Korean meaning in parentheses (e.g., "utilize (이용하다)").
    2. **Antonyms**: 1 common, precise antonym with its Korean meaning in parentheses (e.g., "withdraw (철회하다)"). Ensure the antonym is a direct opposite in the business context.
    3. **Confusables**: 1 similar looking/sounding word often confused, with its Korean meaning (e.g., "effect (효과)").
    4. **Example**: A short, business-context sentence using the target word.
    5. **ExampleKo**: Korean translation of the example sentence.

    Return ONLY a JSON array with objects:
    [
      { 
        "word": "target_word", 
        "synonyms": ["utilize (이용하다)"], 
        "antonyms": ["withdraw (철회하다)"], 
        "similar": ["comply (따르다)"],
        "example": "The manager hired a new applicant.",
        "exampleKo": "매니저는 새로운 지원자를 채용했다."
      }
    ]

    Words to enrich:
    ${words.map(w => `${w.word} (${w.meaning})`).join(", ")}
  `;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text().replace(/```json/g, "").replace(/```/g, "").trim();
        const enrichedList = JSON.parse(text);

        // Merge back
        return words.map(w => {
            const enriched = enrichedList.find((e: any) => e.word.toLowerCase() === w.word.toLowerCase());
            return {
                ...w,
                synonyms: enriched?.synonyms || w.synonyms || [],
                antonyms: enriched?.antonyms || w.antonyms || [],
                similar: enriched?.similar || w.similar || [],
                example: enriched?.example || w.example || "",
                exampleKo: enriched?.exampleKo || w.exampleKo || ""
            };
        });
    } catch (e: any) {
        console.error("Error enriching batch:", e.message);
        return words; // Return original if failed
    }
}

async function main() {
    console.log("🚀 Starting Vocabulary Enrichment...");

    const filePath = 'src/data/vocabulary_final.json';
    const rawData = fs.readFileSync(filePath, 'utf-8');
    let allWords: VocabWord[] = JSON.parse(rawData);

    // Filter words that need update (check if synonyms lack Korean translation, i.e., no parenthesis)
    // Also include words with missing examples just in case
    const targets = allWords.filter(w =>
        !w.synonyms ||
        w.synonyms.length === 0 ||
        !w.synonyms[0].includes('(') ||
        !w.example
    );
    console.log(`Found ${targets.length} words to re-enrich (adding Korean meanings).`);

    const BATCH_SIZE = 30; // 30 words per call
    let processedCount = 0;

    for (let i = 0; i < targets.length; i += BATCH_SIZE) {
        const batch = targets.slice(i, i + BATCH_SIZE);
        console.log(`Processing batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(targets.length / BATCH_SIZE)}...`);

        const enrichedBatch = await enrichBatch(batch);

        // Update main list in memory
        enrichedBatch.forEach(enriched => {
            const index = allWords.findIndex(w => w.id === enriched.id);
            if (index !== -1) {
                allWords[index] = { ...allWords[index], ...enriched };
            }
        });

        // Save progress every 5 batches (safety)
        if ((i / BATCH_SIZE) % 5 === 0) {
            fs.writeFileSync(filePath, JSON.stringify(allWords, null, 2));
            console.log("Saved progress.");
        }

        // Rate limit
        await new Promise(r => setTimeout(r, 1500));
        processedCount += batch.length;
    }

    // Final Save
    fs.writeFileSync(filePath, JSON.stringify(allWords, null, 2));
    console.log("🎉 Enrichment Complete! Saved to " + filePath);
}

main();
