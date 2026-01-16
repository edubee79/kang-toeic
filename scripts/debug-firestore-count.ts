import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, deleteDoc } from 'firebase/firestore';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load env from root
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

async function checkDay1() {
    console.log("Checking Firestore Day 1 Vocab...");
    const q = query(
        collection(db, 'vocabularies'),
        where('day', '==', 1),
        where('part', '==', 1)
    );

    const snapshot = await getDocs(q);
    console.log(`Total documents for Day 1: ${snapshot.size}`);

    const ids = snapshot.docs.map(d => d.id);
    console.log("Sample IDs:", ids.slice(0, 5));
    console.log("Checking for mix of ID formats...");

    const newFormat = ids.filter(id => id.startsWith('day1_no'));
    const oldFormat = ids.filter(id => !id.startsWith('day1_no'));

    console.log(`New Format (day1_no...): ${newFormat.length}`);
    console.log(`Old/Other Format: ${oldFormat.length}`);

    if (oldFormat.length > 0) {
        console.log("Sample Old IDs:", oldFormat.slice(0, 5));
        console.log("\n⚠️ Found mixed formats! Attempting to clean OLD format records...");

        // Optional: Auto-cleaning
        // await Promise.all(oldFormat.map(id => deleteDoc(doc(db, 'vocabularies', id))));
        // console.log("Cleaned old records.");
    }
}

checkDay1();
