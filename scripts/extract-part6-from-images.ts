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

async function extractPart6FromImages(testNumber: number) {
    const testFolder = `${testNumber}회`;
    // Changed to Vol 4 as per user request
    const questionDir = path.join(process.cwd(), 'toeic-data', 'ETS정기기출4탄', '문제', 'RC', testFolder, 'part6');
    const solutionDir = path.join(process.cwd(), 'toeic-data', 'ETS정기기출4탄', '해설', 'RC', testFolder);

    console.log(`\n🚀 Processing Test ${testNumber} Part 6...`);
    console.log(`   📂 Question Images: ${questionDir}`);
    console.log(`   📂 Solution Images: ${solutionDir}`);

    if (!fs.existsSync(questionDir)) {
        console.error(`❌ Error: Question directory not found: ${questionDir}`);
        return false;
    }

    // 1. Get all images
    const questionImages = fs.readdirSync(questionDir)
        .filter(file => file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png'))
        .sort() // Ensure page order
        .map(file => path.join(questionDir, file));

    if (questionImages.length === 0) {
        console.error("❌ No images found in question directory");
        return false;
    }

    // 2. Extract Questions
    console.log(`   📸 Found ${questionImages.length} question images. Extracting data...`);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const questionPrompt = `
    You are an expert TOEIC Part 6 content extractor.
    Analyze these images which contain Part 6 Text Completion questions (Questions 131-146).

    YOUR TASK:
    Extract ALL 4 passages and their questions from Part 6.

    CRITICAL INSTRUCTIONS:
    1. Part 6 has EXACTLY 4 passages with 4 questions each (Questions 131-146)
    2. Each passage has blanks marked as [131], [132], etc. - KEEP THESE MARKERS IN THE TEXT
    3. Identify passage type: EMAIL, LETTER, ADVERTISEMENT, ARTICLE, NOTICE, MEMO, etc.
    4. Extract the title/subject line if present
    5. Extract all 4 answer options (A, B, C, D) for each question
    6. For "sentence insertion" questions, the options are full sentences
    7. Return valid JSON with NO extra text

    Required JSON Structure:
    {
      "passages": [
        {
          "id": "p6-t${testNumber}-p1",
          "type": "EMAIL",
          "title": "Order Update",
          "content": "passage text with [131], [132], [133], [134] markers",
          "questions": [
            {
              "id": "131",
              "text": "question text",
              "options": [
                { "label": "A", "text": "option A" },
                { "label": "B", "text": "option B" },
                { "label": "C", "text": "option C" },
                { "label": "D", "text": "option D" }
              ]
            }
          ]
        }
      ]
    }
    `;

    const questionParts = [
        questionPrompt,
        ...questionImages.map(img => fileToGenerativePart(img, "image/jpeg"))
    ];

    let extractedData;
    try {
        const result = await model.generateContent(questionParts);
        const response = await result.response;
        const text = response.text();
        const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
        extractedData = JSON.parse(jsonStr);
        console.log(`   ✅ Extracted ${extractedData.passages?.length || 0} passages`);
    } catch (e: any) {
        console.error("   ❌ Error extracting questions:", e.message);
        return false;
    }

    // 3. Extract Answers and Explanations
    let answerData = { answers: [] };
    if (fs.existsSync(solutionDir)) {
        const solutionImages = fs.readdirSync(solutionDir)
            .filter(file => file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png'))
            .sort()
            .map(file => path.join(solutionDir, file));

        if (solutionImages.length > 0) {
            console.log(`   📸 Found ${solutionImages.length} solution images. Extracting answers in batches...`);

            // Batch process images to avoid token limits
            const BATCH_SIZE = 5;
            for (let i = 0; i < solutionImages.length; i += BATCH_SIZE) {
                const batchImages = solutionImages.slice(i, i + BATCH_SIZE);
                console.log(`      Processing batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(solutionImages.length / BATCH_SIZE)}...`);

                const solutionPrompt = `
                Extract the answer key, Korean translation, and explanations for Part 6 (Questions 131-146) from these solution images.
                
                Return JSON format:
                {
                  "answers": [
                    {
                      "questionId": "131",
                      "correctAnswer": "D",
                      "translation": "Korean translation of the question/sentence",
                      "explanation": "Detailed explanation in Korean",
                      "classification": "P6_SENTENCE_INSERT" or "P6_VOCABULARY" or "P6_GRAMMAR" or "P6_CONNECTING_WORD"
                    }
                  ]
                }

                CLASSIFICATION RULES:
                - P6_SENTENCE_INSERT: "Which sentence best fits..." questions (알맞은 문장 고르기)
                - P6_VOCABULARY: Word choice questions (어휘)
                - P6_GRAMMAR: Grammar/tense questions (문법)
                - P6_CONNECTING_WORD: Prepositions, conjunctions, adverbs (접속사/연결어)
                
                IMPORTANT: Only extract answers for questions 131-146. Ignore others.
                `;

                const solutionParts = [
                    solutionPrompt,
                    ...batchImages.map(img => fileToGenerativePart(img, "image/jpeg"))
                ];

                try {
                    const result = await model.generateContent(solutionParts);
                    const response = await result.response;
                    const text = response.text();
                    const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
                    const batchResult = JSON.parse(jsonStr);

                    if (batchResult.answers && Array.isArray(batchResult.answers)) {
                        answerData.answers = [...answerData.answers, ...batchResult.answers];
                        console.log(`      ✅ Scraped ${batchResult.answers.length} answers from this batch`);
                    }
                } catch (e: any) {
                    console.error("      ❌ Error extracting batch:", e.message);
                }

                // Small delay to avoid rate limits
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            console.log(`   ✅ Total extracted answers: ${answerData.answers.length}`);
        } else {
            console.log("   ⚠️ No solution images found, skipping answer extraction.");
        }
    }

    // 4. Merge Data
    if (extractedData.passages && answerData.answers) {
        extractedData.passages.forEach((passage: any) => {
            passage.questions.forEach((question: any) => {
                const answer = answerData.answers.find((a: any) => a.questionId == question.id);
                if (answer) {
                    question.correctAnswer = answer.correctAnswer;
                    question.translation = answer.translation;
                    question.explanation = answer.explanation;
                    question.classification = answer.classification;
                }
            });
        });
    }

    // 5. Save Result
    const outputPath = `extracted_part6_test${testNumber}_v3.json`;
    fs.writeFileSync(outputPath, JSON.stringify(extractedData, null, 2));
    console.log(`\n🎉 Test ${testNumber} Complete! Saved to ${outputPath}`);

    // Also save as TypeScript format
    const tsContent = `
    {
        testId: ${testNumber},
        title: "ETS TOEIC Vol 4 - Test ${testNumber}",
        passages: ${JSON.stringify(extractedData.passages, null, 4)}
    },
    `;
    fs.writeFileSync(`extracted_part6_test${testNumber}_v3.ts`, tsContent);
    return true;
}

// Run for Test 1
extractPart6FromImages(1);
