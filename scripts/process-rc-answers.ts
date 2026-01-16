
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Structure for Answer Key
interface AnswerKey {
    id: string; // q101
    correctAnswer: string; // A, B, C, D
    translation?: string; // Korean translation of the question
    explanation?: string; // Korean explanation
}

interface TestAnswers {
    testId: number;
    answers: AnswerKey[];
}

function fileToGenerativePart(imagePath: string, mimeType: string) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(imagePath)).toString("base64"),
            mimeType,
        },
    };
}

async function processAnswerKey(folderPath: string, fileName: string): Promise<TestAnswers | null> {
    const filePath = path.join(folderPath, fileName);
    // Extract Test ID: "RC4-1해설.pdf" -> 1
    const testIdMatch = fileName.match(/RC4-(\d+)해설/);
    if (!testIdMatch) return null;

    const testId = parseInt(testIdMatch[1]);
    console.log(`\n🔍 Processing Answers for Test ${testId} (${fileName})`);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
    Role: TOEIC Answer Key Extractor for Part 5 (Questions 101-130).
    Task: Extract the Correct Answer, Translation, and Explanation for each question from 101 to 130.
    
    Target:
    - Questions: 101 to 130 (Part 5 range)
    - Output Format: JSON Array
    
    JSON Structure:
    [
      {
        "id": "q101",
        "correctAnswer": "A", 
        "translation": "Korean translation of the sentence",
        "explanation": "Korean explanation for why A is correct"
      },
      ...
    ]
    
    Notes:
    - The file contains answers for Part 5, 6, 7. ONLY extract Part 5 (101-130).
    - "correctAnswer" should be a single letter (A, B, C, D).
    - "explanation" should be the Korean text explaining the answer.
    - If translation is available separately, include it.
    `;

    try {
        const filePart = fileToGenerativePart(filePath, "application/pdf");
        const result = await model.generateContent([prompt, filePart]);
        const response = await result.response;
        let text = response.text();

        // Sanitize JSON
        text = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const firstOpen = text.indexOf('[');
        const lastClose = text.lastIndexOf(']');
        if (firstOpen !== -1 && lastClose !== -1) {
            text = text.substring(firstOpen, lastClose + 1);
        }

        const answers = JSON.parse(text);
        console.log(`   ✅ Extracted ${answers.length} answers for Test ${testId}`);

        return {
            testId,
            answers
        };

    } catch (e: any) {
        console.error(`   ❌ Error processing ${fileName}:`, e.message);
        return null;
    }
}

async function main() {
    const folderPath = process.argv[2];
    if (!folderPath) {
        console.error("Usage: npx tsx scripts/process-rc-answers.ts <folder_path>");
        process.exit(1);
    }

    const files = fs.readdirSync(folderPath)
        .filter(f => f.includes('해설') && f.endsWith('.pdf'))
        .sort();

    console.log(`📂 Found ${files.length} answer key documents.`);

    const allAnswers: TestAnswers[] = [];

    for (const file of files) {
        const result = await processAnswerKey(folderPath, file);
        if (result) {
            allAnswers.push(result);
            // Rate limit
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }

    const outputPath = path.join(process.cwd(), 'rc_answers_extracted.json');
    fs.writeFileSync(outputPath, JSON.stringify(allAnswers, null, 2), "utf-8");
    console.log(`\n💾 Saved all answers to ${outputPath}`);
}

main();
