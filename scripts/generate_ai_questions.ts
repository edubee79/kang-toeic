
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as admin from 'firebase-admin';
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables
dotenv.config({ path: '.env.local' });

// 1. Initialize Gemini
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("❌ Error: GEMINI_API_KEY is not found in .env.local");
    process.exit(1);
}
const genAI = new GoogleGenerativeAI(API_KEY);

// 2. Initialize Firebase Admin (Optional - Fallback to JSON)
let db: admin.firestore.Firestore | null = null;
try {
    if (!admin.apps.length) {
        // Attempt to find service account key
        const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
        if (serviceAccountPath && fs.existsSync(serviceAccountPath)) {
            const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            });
            console.log("🔥 Firebase Admin Initialized with Service Account.");
        } else {
            // Try default logic (might fail locally without gcloud auth)
            admin.initializeApp({
                credential: admin.credential.applicationDefault(),
                projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
            });
            console.log("🔥 Firebase Admin Initialized (Application Default).");
        }
    }
    db = admin.firestore();
} catch (e: any) {
    console.warn("⚠️ Firebase Auth Failed. Will switch to JSON-only mode.", e.message);
}

// ---------------------------------------------------------
// TYPES & CONSTANTS
// ---------------------------------------------------------
const PART5_TAG_MAP: Record<string, string> = {
    // Grammar
    "noun": "P5_POS_NOUN",
    "adj": "P5_POS_ADJ",
    "adv": "P5_POS_ADV",
    "verb": "P5_POS_VERB",
    "tense": "P5_VERB_TENSE",
    "voice": "P5_VERB_VOICE",
    "agreement": "P5_VERB_AGREEMENT",
    "prep": "P5_PREP",
    "conj": "P5_CONJ",
    "pronoun": "P5_PRONOUN",
    "comparison": "P5_COMPARISON",
    "to_ing": "P5_INFINITIVE_GERUND",
    "relative": "P5_RELATIVE",

    // Vocab
    "v_noun": "P5_VOCAB_NOUN",
    "v_verb": "P5_VOCAB_VERB",
    "v_adj": "P5_VOCAB_ADJ",
    "v_adv": "P5_VOCAB_ADV",
    "v_phrase": "P5_VOCAB_PHRASE",
};

interface AIQuestion {
    part: string;
    tags: string[];
    text: string;
    options: { label: string; text: string }[];
    correctAnswer: string;
    explanation: string;
    translation: string;
    generatedAt: string;
    checkStatus: 'pending' | 'approved';
}

// ---------------------------------------------------------
// PROMPTS
// ---------------------------------------------------------
const SYSTEM_PROMPT = `
You are an expert TOEIC Exam Content Creator. 
Your task is to generate high-quality, realistic Part 5 (Incomplete Sentences) questions.
Strictly follow the JSON format.
`;

// ---------------------------------------------------------
// GENERATOR FUNCTION
// ---------------------------------------------------------
async function generatePart5Questions(tagKey: string, count: number = 3): Promise<AIQuestion[]> {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Normalize Tag
    const officialTag = PART5_TAG_MAP[tagKey.toLowerCase()] || tagKey;

    const prompt = `
    Generate ${count} TOEIC Part 5 questions focusing on the concept: "${officialTag}".
    
    Difficulty: Medium-Hard (Score 700-800 level).
    Style: Business/Formal English (ETS Style).
    Context: Modern business Scenarios (Email, Memo, Meeting, Hiring, Shipping, etc).
    
    Output Format (JSON Array):
    [
        {
            "text": "The sentence with a blank designated by '_______'.",
            "options": [
                { "label": "A", "text": "option1" },
                { "label": "B", "text": "option2" },
                { "label": "C", "text": "option3" },
                { "label": "D", "text": "option4" }
            ],
            "correctAnswer": "A",
            "explanation": "Detailed explanation in Korean. Explain WHY the answer is correct (grammar point or vocab nuance) and why others are wrong.",
            "translation": "Korean translation of the full sentence."
        }
    ]
    `;

    console.log(`🤖 Asking Gemini to generate ${count} questions for tag: "${officialTag}"...`);

    try {
        const result = await model.generateContent([SYSTEM_PROMPT, prompt]);
        const response = await result.response;
        // Clean markdown code blocks if present
        const text = response.text().replace(/```json/g, "").replace(/```/g, "").trim();

        const rawQuestions = JSON.parse(text);

        return rawQuestions.map((q: any) => ({
            part: "Part 5",
            tags: [officialTag, "AI_Generated"],
            text: q.text,
            options: q.options,
            correctAnswer: q.correctAnswer,
            explanation: q.explanation,
            translation: q.translation,
            generatedAt: new Date().toISOString(),
            checkStatus: 'pending'
        }));

    } catch (e: any) {
        console.error("❌ Generation Error:", e.message);
        if (e.message.includes("JSON")) {
            console.error("   Invalid JSON received from Gemini.");
        }
        return [];
    }
}

// ---------------------------------------------------------
// MAIN RUNNER
// ---------------------------------------------------------
async function run() {
    const inputTag = process.argv[2];
    const count = parseInt(process.argv[3] || "3", 10);

    if (!inputTag) {
        console.log("Usage: npx tsx scripts/generate_ai_questions.ts <tag> <count>");
        console.log("Available shortcuts:", Object.keys(PART5_TAG_MAP).join(", "));
        return;
    }

    console.log(`🚀 Starting AI Generation for Part 5 | Input: ${inputTag} | Count: ${count}`);

    const questions = await generatePart5Questions(inputTag, count);

    if (questions.length === 0) {
        console.error("❌ No questions generated.");
        return;
    }

    console.log(`✅ Generated ${questions.length} questions.`);

    // 1. Save to JSON (Backup)
    const backupFile = `ai_questions_${inputTag}_${Date.now()}.json`;
    fs.writeFileSync(backupFile, JSON.stringify(questions, null, 2));
    console.log(`💾 Backup saved to ${backupFile}`);

    // 2. Save to Firestore (if available)
    if (db) {
        console.log("🔥 Uploading to Firestore 'ai_questions' collection...");
        const batch = db.batch();
        const collectionRef = db.collection('ai_questions');

        for (const q of questions) {
            const docRef = collectionRef.doc(); // Auto ID
            batch.set(docRef, q);
        }

        try {
            await batch.commit();
            console.log("✅ Firestore Upload Complete!");
        } catch (e: any) {
            console.error("❌ Firestore Upload Failed:", e.message);
        }
    } else {
        console.log("ℹ️ Skipping Firestore upload (DB not initialized or Failed). Local JSON only.");
    }
}

run();
