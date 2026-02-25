import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, writeBatch, doc } from 'firebase/firestore';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env.local') });

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

async function authenticate() {
    const email = "temp-uploader@test.com";
    const password = "TempPass123!@#";
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("🔓 Authenticated as admin.");
    } catch (error) {
        console.error("❌ Authentication failed:", error);
        throw error;
    }
}

async function resetVocabulary() {
    console.log('🧹 Starting vocabulary reset (Deletion)...');

    const vocabRef = collection(db, 'vocabularies');
    const snapshot = await getDocs(vocabRef);
    console.log(`Found ${snapshot.size} documents to delete.`);

    const batchSize = 400;
    const docs = snapshot.docs;

    for (let i = 0; i < docs.length; i += batchSize) {
        const batch = writeBatch(db);
        const currentBatch = docs.slice(i, i + batchSize);

        currentBatch.forEach(d => {
            batch.delete(d.ref);
        });

        await batch.commit();
        console.log(`✅ Deleted batch ${Math.floor(i / batchSize) + 1} (${currentBatch.length} docs)`);
    }

    console.log('✨ All vocabulary data cleared.');
}

async function main() {
    try {
        await authenticate();
        await resetVocabulary();
        process.exit(0);
    } catch (error) {
        console.error('❌ Reset failed:', error);
        process.exit(1);
    }
}

main();
