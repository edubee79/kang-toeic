import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, deleteDoc, doc, writeBatch } from 'firebase/firestore';
import * as dotenv from 'dotenv';
import * as path from 'path';

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

async function cleanupLegacy() {
    console.log("🧹 Starting legacy cleanup...");
    let totalDeleted = 0;

    // Check Day 1 to 30
    // Old ID format was likely: day1_part1_no1 (includes 'part')
    // New ID format is: day1_no1 (no 'part' in ID string)

    // We can just fetch ALL and filter by ID string pattern
    // Fetching 30 days might be heavy, let's look at Day 1-15 first as those are the active ones.

    for (let day = 1; day <= 15; day++) {
        console.log(`Checking Day ${day}...`);
        const q = query(
            collection(db, 'vocabularies'),
            where('day', '==', day)
        );

        const snapshot = await getDocs(q);
        const legacyDocs = snapshot.docs.filter(d => {
            const id = d.id;
            // Legacy if it contains "part" or matched old logic
            // New logic: `day${day}_no${no}`
            // Old logic: `day${day}_part1_no${no}`
            return id.includes('_part');
        });

        if (legacyDocs.length > 0) {
            console.log(`Found ${legacyDocs.length} legacy docs for Day ${day}. Deleting...`);

            const batch = writeBatch(db);
            legacyDocs.forEach(d => {
                batch.delete(doc(db, 'vocabularies', d.id));
            });
            await batch.commit();
            totalDeleted += legacyDocs.length;
            console.log(`✅ Cleaned Day ${day}`);
        } else {
            console.log(`Day ${day} is clean.`);
        }
    }

    console.log(`\n🎉 Cleanup complete!`);
    console.log(`🗑️ Total documents deleted: ${totalDeleted}`);
}

cleanupLegacy();
