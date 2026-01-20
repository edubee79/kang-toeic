import { GoogleGenerativeAI } from "@google/generative-ai";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, writeBatch, doc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

// 2. Initialize Firebase (Client SDK)
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// ---------------------------------------------------------
// TYPES
// ---------------------------------------------------------
interface AIQuestion {
    id?: string;
    text?: string; // For Part 5 single question
    options?: { label: string; text: string }[];
    correctAnswer?: string;
    explanation: string;
    translation: string;
    tags: string[];
    part: string;
}

interface AIPassageSet {
    part: string;
    passage: string;
    questions: {
        text: string;
        options: { label: string; text: string }[];
        correctAnswer: string;
        explanation: string;
        translation: string;
    }[];
    tags: string[];
    generatedAt: string;
}

const PART5_TAG_MAP: Record<string, string> = {
    // 1. 품사
    "noun": "P5_POS_NOUN", "adj": "P5_POS_ADJ", "adv": "P5_POS_ADV", "verb": "P5_POS_VERB",
    // 2. 동사
    "v_agree": "P5_V_AGREE", "v_tense": "P5_V_TENSE", "v_voice": "P5_V_VOICE", "v_modal": "P5_V_MODAL",
    // 3. 준동사
    "nf_to": "P5_NF_TO", "nf_ing": "P5_NF_ING", "nf_part": "P5_NF_PART", "nf_pcons": "P5_NF_PCONS",
    // 4. 대명사
    "pr_case": "P5_PR_CASE", "pr_self": "P5_PR_SELF", "pr_demo": "P5_PR_DEMO", "pr_indef": "P5_PR_INDEF",
    // 5. 전치사
    "prep_time": "P5_PREP_TIME", "prep_place": "P5_PREP_PLAC", "prep_dir": "P5_PREP_DIRC", "prep_phrase": "P5_PREP_PHRA",
    // 6. 접속사
    "conj_noun": "P5_CONJ_NOUN", "conj_adv": "P5_CONJ_ADV", "conj_corr": "P5_CONJ_CORR", "conj_coor": "P5_CONJ_COOR",
    // 7. 관계사
    "rel_pr": "P5_REL_PR", "rel_adv": "P5_REL_ADV",
    // 8. 어휘
    "voc_noun": "P5_VOC_NOUN", "voc_verb": "P5_VOC_VERB", "voc_adj": "P5_VOC_ADJ", "voc_adv": "P5_VOC_ADV", "voc_phrase": "P5_VOC_PHRA",
    // 9. 기타
    "comparison": "P5_COMPARIS", "special": "P5_SPECIAL"
};

// ---------------------------------------------------------
// GENERATOR FUNCTIONS
// ---------------------------------------------------------

async function generateQuestions(part: string, tag: string, count: number = 1): Promise<any[]> {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    let prompt = "";
    if (part === "Part 5") {
        prompt = `Generate ${count} TOEIC Part 5 questions for tag: "${tag}".
        Output as JSON array: [{ text, options: [{label, text}], correctAnswer, explanation, translation }]`;
    } else if (part === "Part 6") {
        prompt = `Generate ${count} TOEIC Part 6 sets (1 passage + 4 questions each) for tag: "${tag}".
        The passage MUST contain 4 blanks marked as (1), (2), (3), (4).
        Output as JSON array: [{ passage, questions: [{ text: "(1)", options, correctAnswer, explanation, translation }] }]`;
    } else if (part === "Part 7") {
        prompt = `Generate ${count} TOEIC Part 7 sets (1 passage + 2-3 questions each) for tag: "${tag}".
        Output as JSON array: [{ passage, questions: [{ text, options, correctAnswer, explanation, translation }] }]`;
    }

    const fullPrompt = `
    You are a strictly professional TOEIC Item Writer for ETS.
    
    CRITICAL QUALITY GUIDELINES (New TOEIC Trend - 2024 Focus):
    
    1. **Strictly Target High-Frequency "Distractor" Pairs (Golden Rules)**:
       Do NOT generate random simple prepositions. Focus ONLY on these tricky pairs often tested in recent exams:
       - **Time Nuance**: 'until' vs 'by' (continuance vs deadline), 'for' (duration) vs 'during' (noun event).
       - **Structural Distraction**: 'Despite/In spite of' (Prep) vs 'Although/Even though' (Conj). *Crucial: Test if the blank is followed by a Noun Phrase or S+V.*
       - **Causal**: 'Because of/Due to' (Prep) vs 'Because/Since' (Conj).
       - **Spatial/Abstract**: 'within' (limits/time) vs 'among' (group), 'throughout' (all over) vs 'through' (via).

    2. **Modern Business Context**: Use scenarios like supply chain delays, remote software updates, compliance deadlines, quarterly review meetings.

    3. **No Old Rhetoric**: Avoid outdated collocations like "rely on", "comply with". Focus on **structural grammar logic** and **contextual meaning**.
    
    FEW-SHOT EXAMPLES:
    - **GOOD (Structural)**: "___ the merger negotiations were complex, the two companies reached an agreement." (Options: Despite, Although, However, Nevertheless). 
      - *Logic*: Followed by S+V ("negotiations were"), so requires Conjunction ('Although'). 'Despite' is Prep (wrong).
    - **GOOD (Context/Time)**: "The application portal will remain open ___ 5:00 PM on Friday." (Options: by, until, within, at).
      - *Logic*: "Remain open" implies a state continuing UP TO a point -> 'until'. 'by' implies checking a completed action.

    3. **Difficulty Level**: High (Score 800-900). Options should be confusing (e.g., By vs. Until, For vs. During).
    
    ${prompt}
    
    Output Language:
    - Question & Options: English (Business proper)
    - Explanation: Korean (Detailed analysis of why the answer is correct and why destructors are wrong, referencing the specific context).
    - Translation: Korean (Natural business Korean).

    Ensure strict JSON format. No markdown blocks.
    `;

    console.log(`🤖 Generating ${part} | Tag: ${tag} | Count: ${count}...`);

    try {
        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        const text = response.text().replace(/```json/g, "").replace(/```/g, "").trim();
        const data = JSON.parse(text);

        // Normalize and add metadata
        return data.map((item: any) => ({
            ...item,
            part,
            tags: [tag, "AI_Generated"],
            generatedAt: new Date().toISOString()
        }));
    } catch (e: any) {
        console.error("❌ Generation Error:", e.message);
        return [];
    }
}

// ---------------------------------------------------------
// MAIN RUNNER
// ---------------------------------------------------------
async function run() {
    const part = process.argv[2]; // e.g. "Part 5" or "5"
    const tag = process.argv[3];  // e.g. "P5_PREP"
    const count = parseInt(process.argv[4] || "1", 10);

    if (!part || !tag) {
        console.log("Usage: npx tsx scripts/generate_ai_questions.ts <part> <tag> <count>");
        return;
    }

    const normalizedPart = part.includes("Part") ? part : `Part ${part}`;
    const results = await generateQuestions(normalizedPart, tag, count);

    if (results.length > 0) {
        const filename = `ai_${normalizedPart.replace(" ", "")}_${tag}_${Date.now()}.json`;
        fs.writeFileSync(filename, JSON.stringify(results, null, 2));
        console.log(`💾 Saved to ${filename}`);

        try {
            // Authenticate (using Client SDK pattern logic)
            const email = "temp-uploader@test.com";
            const password = "TempPass123!@#";
            console.log("🔐 Authenticating for upload...");
            await signInWithEmailAndPassword(auth, email, password);
            console.log("🔓 Authenticated.");

            console.log(`🔥 Uploading to Firestore (Collection: ai_weakness_questions)...`);
            const collectionRef = collection(db, 'ai_weakness_questions');

            // 1. CLEAR EXISTING DATA
            console.log(`🧹 Clearing existing questions for tag: ${tag}...`);
            const q = query(collectionRef, where('tags', 'array-contains', tag));
            const existingDocs = await getDocs(q);

            if (!existingDocs.empty) {
                const deleteBatch = writeBatch(db);
                existingDocs.forEach(d => deleteBatch.delete(d.ref));
                await deleteBatch.commit();
                console.log(`🗑️ Deleted ${existingDocs.size} old documents.`);
            } else {
                console.log("✨ No existing documents to delete.");
            }

            // 2. UPLOAD NEW DATA
            const batch = writeBatch(db);
            let itemsToUpload = [];

            if (normalizedPart === "Part 6" || normalizedPart === "Part 7") {
                // Flatten sets into individual questions
                itemsToUpload = results.flatMap((set: any) => {
                    return set.questions.map((q: any) => ({
                        ...q,
                        part: normalizedPart,
                        tags: set.tags,
                        passageContext: set.passage,
                        generatedAt: set.generatedAt,
                        isAudio: false
                    }));
                });
            } else {
                itemsToUpload = results;
            }

            console.log(`📝 Processing ${itemsToUpload.length} flattened questions...`);

            for (const item of itemsToUpload) {
                const docRef = doc(collectionRef);
                const sanitizedItem = JSON.parse(JSON.stringify(item));
                batch.set(docRef, sanitizedItem);
            }

            await batch.commit();
            console.log(`✅ Firestore Sync Complete (ai_weakness_questions).`);

        } catch (error: any) {
            console.error("❌ Firestore Upload Failed:", error.message);
            // Detailed check for common Firestore errors
            if (error.message.includes("undefined")) {
                console.error("🔍 High chance of 'undefined' value in the data set.");
            }
            if (error.stack) console.error(error.stack);
        }
    }
    process.exit(0);
}

run();
