// @ts-nocheck
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

function fileToGenerativePart(path: string, mimeType: string) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType,
        },
    };
}

async function run() {
    const artifactDir = "C:/Users/user/.gemini/antigravity/brain/0fc9b767-6812-44cf-9b3a-8c7ed1ba89de";
    const timestamp = "1768634397902";
    const images = [
        path.join(artifactDir, `uploaded_image_0_${timestamp}.jpg`),
        path.join(artifactDir, `uploaded_image_1_${timestamp}.jpg`),
        path.join(artifactDir, `uploaded_image_2_${timestamp}.jpg`),
        path.join(artifactDir, `uploaded_image_3_${timestamp}.jpg`)
    ];

    const validImages = images.filter(img => fs.existsSync(img));

    console.log(`🚀 Extracting Test 10 Explanations from ${validImages.length} Uploaded Images...`);
    let allAnswers = [];

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    for (const imgPath of validImages) {
        console.log(`   Processing ${path.basename(imgPath)}...`);

        const prompt = `
        You are an expert TOEIC data extractor.
        User has provided valid solution images for **TEST 10**.
        
        Task: Extract Part 6 questions (Q131-146) explanations.
        
        CRITICAL RULES:
        1. **NO Translation field**. Do NOT extract the translation of the passage.
        2. **Extract Explanation**. The "해설" section only.
        3. Extract Question ID and Correct Answer exactly.
        4. **IMPORTANT**: Ensure all text is on a SINGLE LINE. Remove any line breaks within the explanation text.
        
        Format: JSON
        {
            "answers": [
                {
                    "questionId": "131",
                    "correctAnswer": "A",
                    "explanation": "Full Korean explanation text in a single line",
                    "classification": "P6_VOCABULARY"
                }
            ]
        }
        `;

        try {
            const result = await model.generateContent([prompt, fileToGenerativePart(imgPath, "image/jpeg")]);
            const response = await result.response;
            const text = response.text();

            const jsonMatch = text.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const data = JSON.parse(jsonMatch[0]);
                if (data.answers) {
                    allAnswers = [...allAnswers, ...data.answers];
                    console.log(`      Found ${data.answers.length} answers.`);
                }
            }
        } catch (e) {
            console.error("      Error:", e.message);
        }
    }

    const uniqueMap = new Map();
    allAnswers.forEach(a => uniqueMap.set(a.questionId, a));
    const sorted = Array.from(uniqueMap.values()).sort((a, b) => parseInt(a.questionId) - parseInt(b.questionId));

    console.log(`✅ Total Unique Answers: ${sorted.length}`);

    const output = 'extracted_answers_test10_final.json';
    fs.writeFileSync(output, JSON.stringify({ testId: 10, answers: sorted }, null, 2));
    console.log(`💾 Saved to ${output}`);
}

run();
