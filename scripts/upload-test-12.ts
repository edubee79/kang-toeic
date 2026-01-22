import { initializeApp } from 'firebase/app';
import { getFirestore, collection, writeBatch, doc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

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

async function uploadTest12() {
    try {
        await signInWithEmailAndPassword(auth, 'temp-uploader@test.com', 'TempPass123!@#');
        console.log('Authenticated successfully');

        const snippetPath = path.join(process.cwd(), 'test_12_snippet.ts');
        const snippetRaw = fs.readFileSync(snippetPath, 'utf8');
        console.log('Snippet read. Starting JSON parse...');

        // Find the first { to start parsing JSON
        const jsonStart = snippetRaw.indexOf('{');
        const testData = JSON.parse(snippetRaw.substring(jsonStart));
        console.log(`JSON parsed. Found ${testData.questions.length} questions.`);

        const batch = writeBatch(db);
        const questionsRef = collection(db, 'ai_weakness_questions');

        console.log('Preparing batch operations...');
        testData.questions.forEach((q: any) => {
            const docId = `actual-test-12-${q.id}`;
            const docRef = doc(questionsRef, docId);
            batch.set(docRef, {
                ...q,
                source: 'actual-test-12',
                difficulty: 'advanced',
                metadata: {
                    batch: 'actual-test-2026-01-21',
                    version: 'v3.0-high-quality',
                    testTitle: '고급반 실전문제풀이 12회',
                    originalId: q.id
                },
                updatedAt: new Date().toISOString()
            });
        });

        console.log('Committing batch to Firebase...');
        await batch.commit();
        console.log(`Successfully uploaded ${testData.questions.length} questions for Test 12 to Firebase.`);
    } catch (error) {
        console.error('Error uploading Test 12:', error);
        process.exit(1);
    }
}

uploadTest12();
