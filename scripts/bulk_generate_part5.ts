
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import * as path from 'path';

// 1. Load Env & Gaps
dotenv.config({ path: '.env.local' });
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) { process.exit(1); }
const genAI = new GoogleGenerativeAI(API_KEY);

const gaps = JSON.parse(fs.readFileSync('part5_generation_gaps.json', 'utf8'));

// 2. Helper Functions
const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

function cleanJson(text: string): string {
    return text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();
}

async function generateBatch(tag: string, count: number): Promise<any[]> {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const prompt = `
    Generate ${count} high-quality TOEIC Part 5 questions for the tag: "${tag}".
    
    **CRITICAL REQUIREMENT: ETS STYLE**
    - **Context**: Business/Professional (Office, Retail, Manufacturing, Logistics, Travel, HR, Finance).
    - **Tone**: Formal and concise.
    - **Vocabulary**: Use actual TOEIC vocabulary (e.g., facilitate, implement, oversee, tentative, substantial, etc.).
    - **Distractors**: Provide plausible options.
    
    Requirements:
    - Focus on "${tag}". 
    - Provide 4 options (A, B, C, D).
    - Provide the correct answer.
    - Provide a detailed [해설] in Korean.
    - Output in a strict JSON array format:
    [
      {
        "text": "...",
        "options": [{"label": "A", "text": "..."}, ...],
        "correctAnswer": "A",
        "explanation": "[해설] ..."
      }
    ]
    `;

    try {
        const result = await model.generateContent(prompt);
        const text = cleanJson(result.response.text());
        return JSON.parse(text);
    } catch (e: any) {
        console.error(`❌ Error generating for ${tag}: ${e.message}`);
        return [];
    }
}

// 3. Main Loop
async function run() {
    console.log("🚀 Starting Optimized Bulk Generation...");

    const poolFile = 'ai_generated_part5_pool.json';
    let pool: any[] = fs.existsSync(poolFile) ? JSON.parse(fs.readFileSync(poolFile, 'utf8')) : [];

    for (const tag in gaps) {
        const needed = gaps[tag];
        if (needed <= 0) continue;

        console.log(`\n📦 Filling ${tag}: Need ${needed} more...`);

        let generated = 0;
        while (generated < needed) {
            const batchSize = Math.min(5, needed - generated);
            console.log(`  - [${tag}] Generating batch of ${batchSize}... (${generated}/${needed})`);

            const questions = await generateBatch(tag, batchSize);

            if (questions.length > 0) {
                questions.forEach(q => {
                    pool.push({
                        part: "Part 5",
                        ...q,
                        tags: [tag, "AI_Generated"],
                        generatedAt: new Date().toISOString()
                    });
                });
                generated += questions.length;
                fs.writeFileSync(poolFile, JSON.stringify(pool, null, 2));
                console.log(`  ✅ Success: +${questions.length} saved. (Total: ${pool.length})`);
            } else {
                console.log("  ⚠️ Batch failed or returned empty. Retrying after 10s...");
                await sleep(10000);
            }

            await sleep(6000); // Respect Rate Limits (Approx 10 requests per minute)
        }
    }

    console.log("\n🎉 Optimized Bulk generation complete!");
}

run();
