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

async function uploadTest11() {
    try {
        const email = "temp-uploader@test.com";
        const password = "TempPass123!@#";
        await signInWithEmailAndPassword(auth, email, password);
        console.log("🔓 Authenticated.");

        // Instead of a dedicated JSON, let's extract from the local tests.ts after insertion
        // Actually, it's easier to just use the snippet we generated (if it's valid JSON)
        // Wait, the snippet has ",\n" + JSON. Let's fix that.

        const snippetPath = path.join(process.cwd(), 'test_11_snippet.ts');
        let snippetContent = fs.readFileSync(snippetPath, 'utf-8');
        const firstBrace = snippetContent.indexOf('{');
        if (firstBrace !== -1) {
            snippetContent = snippetContent.substring(firstBrace);
        }

        const testSet = JSON.parse(snippetContent);
        const questions = testSet.questions;

        console.log(`🚀 Uploading ${questions.length} questions for ${testSet.title}...`);

        const batchSize = 400;
        let batch = writeBatch(db);
        let count = 0;
        const collectionRef = collection(db, 'ai_weakness_questions');

        for (const q of questions) {
            const docRef = doc(collectionRef);
            batch.set(docRef, {
                ...q,
                source: 'actual-test-11',
                metadata: {
                    batch: 'actual-test-2026-01-21',
                    testTitle: testSet.title,
                    difficulty: 'advanced',
                    version: 'v3.0-high-quality'
                }
            });
            count++;

            if (count >= batchSize) {
                await batch.commit();
                console.log(`✅ Uploaded ${count}...`);
                batch = writeBatch(db);
                count = 0;
            }
        }

        if (count > 0) {
            await batch.commit();
            console.log(`✅ Uploaded final ${count}.`);
        }

        console.log(`🎉 ${testSet.title} uploaded successfully.`);
        process.exit(0);
    } catch (error) {
        console.error("❌ Upload failed:", error);
        process.exit(1);
    }
}

uploadTest11();
