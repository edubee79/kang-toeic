import { initializeApp } from "firebase/app";
import { getFirestore, writeBatch, doc, collection } from "firebase/firestore";
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

dotenv.config({ path: '.env.local' });

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

const mapping: { [key: string]: string } = {
    'P5_POS_NOUN': 'n1',
    'P5_POS_ADJ': 'a1',
    'P5_POS_ADV': 'av1',
    'P5_PR_CASE': 'p1',
    'P5_V_AGREE': 'v1',
    'P5_V_VOICE': 'v2',
    'P5_V_TENSE': 'v4',
    'P5_CONJ_SUB': 'c3',
    'P5_PREP_PHRA': 'pr1',
    'P5_VOC_NOUN': 'voc1',
    'P5_VOC_VERB': 'voc1',
    'P5_VOC_ADJ': 'voc1',
    'P5_VOC_ADV': 'voc1',
}

async function migrateAndUpload() {
    try {
        const email = "temp-uploader@test.com";
        const password = "TempPass123!@#";
        await signInWithEmailAndPassword(auth, email, password);
        console.log("🔓 Authenticated.");

        const filePath = path.join(process.cwd(), 'src/data/generated_questions.json');
        const questions = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        console.log(`🚀 Migrating and Uploading ${questions.length} questions from legacy pool...`);

        const batchSize = 400;
        let batch = writeBatch(db);
        let count = 0;
        let totalUploaded = 0;
        const collectionRef = collection(db, 'ai_weakness_questions');

        for (const q of questions) {
            // Map tags to classification
            let classification = 'voc1'; // Default
            if (q.tags && q.tags.length > 0) {
                const primaryTag = q.tags[0];
                if (mapping[primaryTag]) {
                    classification = mapping[primaryTag];
                }
            }

            const docRef = doc(collectionRef);
            batch.set(docRef, {
                part: 5,
                text: q.text,
                options: q.options,
                correctAnswer: q.correctAnswer,
                explanation: q.explanation,
                classification: classification,
                source: 'legacy-generator-pool',
                createdAt: new Date(),
                metadata: {
                    legacy_tags: q.tags,
                    version: 'v3.0-migrated'
                }
            });

            count++;
            totalUploaded++;

            if (count >= batchSize) {
                await batch.commit();
                console.log(`✅ Uploaded ${totalUploaded} / ${questions.length}...`);
                batch = writeBatch(db);
                count = 0;
            }
        }

        if (count > 0) {
            await batch.commit();
            console.log(`✅ Uploaded final ${count}.`);
        }

        console.log("🎉 Legacy pool migration and upload complete.");
        process.exit(0);
    } catch (error) {
        console.error("❌ Migration failed:", error);
        process.exit(1);
    }
}

migrateAndUpload();
