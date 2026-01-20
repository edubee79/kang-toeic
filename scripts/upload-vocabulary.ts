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
        if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
            console.log("⚠️ User not found, creating new temporary uploader...");
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                console.log("🆕 Created and signed in as new uploader.");
            } catch (createError) {
                console.error("Failed to create user:", createError);
                throw createError;
            }
        } else {
            console.error("Sign in failed:", error);
            throw error;
        }
    }
}

async function uploadVocabulary() {
    try {
        await authenticate();

        const fileName = 'vocabulary_final.json';
        const filePath = path.join(process.cwd(), 'src/data', fileName);

        if (!fs.existsSync(filePath)) {
            console.error(`❌ Data file not found: ${filePath}`);
            process.exit(1);
        }

        console.log(`\n📂 Reading file: ${fileName}`);
        const rawData = fs.readFileSync(filePath, 'utf-8');
        const words = JSON.parse(rawData);

        console.log(`🚀 Starting upload of ${words.length} vocabulary words to Firestore...`);

        const batchSize = 400;
        let batch = writeBatch(db);
        let count = 0;
        let totalUploaded = 0;

        for (const word of words) {
            if (!word.id) {
                console.warn("Skipping word without ID:", word.word);
                continue;
            }

            // Use the word ID as the document ID
            const docRef = doc(db, 'vocabularies', word.id);

            // Add metadata
            const data = {
                ...word,
                updatedAt: new Date(),
                source: 'vocabulary_final.json'
            };

            batch.set(docRef, data);
            count++;

            if (count >= batchSize) {
                await batch.commit();
                totalUploaded += count;
                console.log(`   Uploaded ${totalUploaded} / ${words.length}...`);
                batch = writeBatch(db);
                count = 0;
            }
        }

        if (count > 0) {
            await batch.commit();
            totalUploaded += count;
        }

        console.log(`\n🎉 All done! Total uploaded: ${totalUploaded} words.`);
        process.exit(0);

    } catch (error: any) {
        console.error('Error uploading vocabulary:', error);
        fs.appendFileSync('upload_voca_error.log', `[Upload Error] ${new Date().toISOString()}: ${error.message}\nStack: ${error.stack}\n`);
        process.exit(1);
    }
}

uploadVocabulary();
