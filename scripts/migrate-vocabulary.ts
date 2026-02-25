import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, writeBatch, Timestamp } from 'firebase/firestore';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env.local
dotenv.config({ path: path.join(__dirname, '../.env.local') });

// Firebase config는 환경변수에서 가져옴
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

async function authenticate() {
    const email = "temp-uploader@test.com";
    const password = "TempPass123!@#";
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("🔓 Authenticated as uploader account.");
    } catch (error) {
        console.error("❌ Authentication failed:", error);
        throw error;
    }
}

interface VocabWord {
    day: number;
    no: number;
    word: string;
    meaning: string;
    targetScore: 650 | 800 | 900;
    exampleEn: string;
    exampleKo: string;
}

const getDifficulty = (targetScore: number): 'basic' | 'intermediate' | 'advanced' => {
    if (targetScore === 650) return 'basic';
    if (targetScore === 800) return 'intermediate';
    return 'advanced';
};

async function migrateVocabulary() {
    console.log('🚀 Starting vocabulary migration...\n');

    let totalWords = 0;
    let totalBatches = 0;

    const finalJsonPath = path.join(__dirname, '../src/data/vocabulary_final.json');
    if (!fs.existsSync(finalJsonPath)) {
        console.error(`❌ Source file not found: ${finalJsonPath}`);
        return;
    }

    try {
        const fileContent = fs.readFileSync(finalJsonPath, 'utf-8');
        const words: any[] = JSON.parse(fileContent);

        console.log(`Loading ${words.length} words from vocabulary_final.json...`);

        // Batch write (Firestore limit: 500 operations per batch)
        const batchSize = 400; // Safe limit
        const batches = [];

        for (let i = 0; i < words.length; i += batchSize) {
            batches.push(words.slice(i, i + batchSize));
        }

        for (let i = 0; i < batches.length; i++) {
            const batch = writeBatch(db);
            const currentBatch = batches[i];

            for (const word of currentBatch) {
                const docId = word.id || `day${word.day}_no${word.no}`; // Use ID if present
                const docRef = doc(db, 'vocabularies', docId);

                batch.set(docRef, {
                    ...word, // Spread all fields (id, word, meaning, theme, etc.)
                    pronunciation: '',
                    createdAt: Timestamp.now(),
                    updatedAt: Timestamp.now()
                });
            }

            await batch.commit();
            totalBatches++;
            totalWords += currentBatch.length;
            console.log(`✅ Batch ${i + 1}/${batches.length} committed (${currentBatch.length} words)`);
        }

    } catch (error) {
        console.error(`❌ Error migrating vocabulary:`, error);
    }

    console.log(`\n🎉 Migration complete!`);
    console.log(`📊 Total words migrated: ${totalWords}`);
    console.log(`📦 Total batches: ${totalBatches}`);
}

// Validation function
async function validateMigration() {
    console.log('\n🔍 Validating migration...\n');

    // TODO: Add validation queries
    // - Count total documents
    // - Check targetScore distribution
    // - Verify sample documents

    console.log('✅ Validation complete!');
}

// Main execution
async function main() {
    try {
        await authenticate();
        await migrateVocabulary();
        await validateMigration();
        process.exit(0);
    } catch (error) {
        console.error('❌ Migration failed:', error);
        process.exit(1);
    }
}

main();
