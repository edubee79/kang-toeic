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
    const timestamp = "1768634121079";
    const images = [
        path.join(artifactDir, `uploaded_image_0_${timestamp}.jpg`),
        path.join(artifactDir, `uploaded_image_1_${timestamp}.jpg`),
        path.join(artifactDir, `uploaded_image_2_${timestamp}.jpg`),
        path.join(artifactDir, `uploaded_image_3_${timestamp}.jpg`)
    ];

    const validImages = images.filter(img => fs.existsSync(img));

    console.log(`🚀 Extracting Test 10 Questions from ${validImages.length} Images...`);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
    You are an expert TOEIC data extractor.
    
    Task: Extract ALL Part 6 questions (Q131-146) from these images.
    
    CRITICAL RULES:
    1. Extract the FULL English passage text for each set
    2. Extract all 4 questions per passage with their options
    3. Extract correct answers
    4. Identify passage type (EMAIL, NOTICE, ARTICLE, LETTER, etc.)
    5. **IMPORTANT**: Return complete, structured JSON
    
    Format: JSON
    {
        "testId": 10,
        "title": "Test 10",
        "passages": [
            {
                "id": "p6-t10-p1",
                "type": "NOTICE",
                "guidance": "Questions 131-134 refer to the following notice.",
                "content": "Full passage text with ___131___, ___132___, etc. markers",
                "questions": [
                    {
                        "id": "131",
                        "text": "Select the best answer.",
                        "options": [
                            { "label": "A", "text": "about" },
                            { "label": "B", "text": "on" },
                            { "label": "C", "text": "to" },
                            { "label": "D", "text": "for" }
                        ],
                        "correctAnswer": "D"
                    }
                ]
            }
        ]
    }
    `;

    try {
        const imageParts = validImages.map(img => fileToGenerativePart(img, "image/jpeg"));
        const result = await model.generateContent([prompt, ...imageParts]);
        const response = await result.response;
        const text = response.text();

        console.log("\n📄 Raw AI Response:");
        console.log(text.substring(0, 500) + "...\n");

        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            const data = JSON.parse(jsonMatch[0]);
            const output = 'extracted_test10_questions.json';
            fs.writeFileSync(output, JSON.stringify(data, null, 2));
            console.log(`✅ Extracted ${data.passages?.length || 0} passages`);
            console.log(`💾 Saved to ${output}`);
        } else {
            console.error("❌ No JSON found in response");
        }
    } catch (e) {
        console.error("Error:", e.message);
    }
}

run();
