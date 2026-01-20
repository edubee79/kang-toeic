import { initializeApp } from "firebase/app";
import { getFirestore, writeBatch, doc, collection } from "firebase/firestore";
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

dotenv.config({ path: '.env.local' });

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

async function authenticate() {
    const email = "temp-uploader@test.com";
    const password = "TempPass123!@#";

    try {
        console.log("🔐 Attempting to sign in for upload...");
        await signInWithEmailAndPassword(auth, email, password);
        console.log("🔓 Signed in as existing uploader.");
    } catch (error: any) {
        fs.appendFileSync('upload_error.log', `[Auth Error] ${new Date().toISOString()}: ${error.code} - ${error.message}\n`);
        if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
            console.log("⚠️ User not found, creating new temporary uploader...");
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                console.log("🆕 Created and signed in as new uploader.");
            } catch (createError: any) {
                console.error("Failed to create user:", createError);
                fs.appendFileSync('upload_error.log', `[Create User Error] ${new Date().toISOString()}: ${createError.code} - ${createError.message}\n`);
                throw createError;
            }
        } else {
            console.error("Sign in failed:", error);
            fs.appendFileSync('upload_error.log', `[Sign In Error] ${new Date().toISOString()}: ${error.code} - ${error.message}\n`);
            throw error;
        }
    }
}

async function uploadQuestions() {
    try {
        await authenticate();

        const files = [
            'ai_generated_part5_pool.json',
            'ai_generated_reading_pool.json'
        ];

        let grandTotal = 0;

        for (const fileName of files) {
            // Files are in the root directory
            const filePath = path.join(process.cwd(), fileName);

            if (!fs.existsSync(filePath)) {
                console.warn(`⚠️ Data file not found: ${filePath} (Skipping)`);
                continue;
            }

            console.log(`\n📂 Processing file: ${fileName}`);
            const rawData = fs.readFileSync(filePath, 'utf-8');
            const questions = JSON.parse(rawData);

            console.log(`🚀 Starting upload of ${questions.length} questions from ${fileName}...`);

            const batchSize = 400; // Client SDK batch limit is also 500
            let batch = writeBatch(db);
            let count = 0;
            let fileUploaded = 0;

            const collectionRef = collection(db, 'ai_weakness_questions');

            for (const question of questions) {
                // Auto-ID
                const docRef = doc(collectionRef);

                const data = {
                    ...question,
                    createdAt: new Date(),
                    source: 'ai-generated',
                    originFile: fileName,
                    part: question.part ? Number(question.part) : undefined
                };

                batch.set(docRef, data);
                count++;

                if (count >= batchSize) {
                    await batch.commit();
                    fileUploaded += count;
                    console.log(`   Uploaded ${fileUploaded} / ${questions.length}...`);
                    batch = writeBatch(db);
                    count = 0;
                }
            }

            if (count > 0) {
                await batch.commit();
                fileUploaded += count;
            }

            console.log(`✅ Finished ${fileName}: ${fileUploaded} uploaded.`);
            grandTotal += fileUploaded;
        }

        console.log(`\n🎉 All done! Total uploaded: ${grandTotal} questions.`);
        process.exit(0);

    } catch (error: any) {
        console.error('Error uploading questions:', error);
        fs.appendFileSync('upload_error.log', `[Upload Error] ${new Date().toISOString()}: ${error.message}\nStack: ${error.stack}\n`);
        process.exit(1);
    }
}

uploadQuestions();
