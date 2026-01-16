import { initializeApp } from 'firebase/app';
import { getFirestore, doc, writeBatch } from 'firebase/firestore';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '../.env.local') });

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function updateEnrichment() {
    console.log("☁️  Starting Firestore Enrichment Update...");

    // Read local enriched JSON
    const filePath = 'src/data/vocabulary_final.json';
    if (!fs.existsSync(filePath)) {
        console.error("❌ File not found:", filePath);
        return;
    }
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const allWords = JSON.parse(rawData);

    // Filter words that actually have enriched data
    const wordsToUpdate = allWords.filter((w: any) =>
        (w.synonyms && w.synonyms.length > 0) ||
        (w.antonyms && w.antonyms.length > 0) ||
        (w.similar && w.similar.length > 0)
    );

    console.log(`Found ${wordsToUpdate.length} words with enriched data to update.`);

    const BATCH_SIZE = 400; // Firestore batch limit is 500
    let totalUpdated = 0;

    for (let i = 0; i < wordsToUpdate.length; i += BATCH_SIZE) {
        const batch = writeBatch(db);
        const chunk = wordsToUpdate.slice(i, i + BATCH_SIZE);

        chunk.forEach((word: any) => {
            const docRef = doc(db, 'vocabularies', word.id);
            // Only update specific fields
            batch.update(docRef, {
                synonyms: word.synonyms || [],
                antonyms: word.antonyms || [],
                similar: word.similar || [],
                example: word.example || "",
                exampleKo: word.exampleKo || ""
            });
        });

        await batch.commit();
        totalUpdated += chunk.length;
        console.log(`Updated ${totalUpdated} / ${wordsToUpdate.length} docs...`);
    }

    console.log("🎉 Firestore Update Complete!");
}

updateEnrichment();
