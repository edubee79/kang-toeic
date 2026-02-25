import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

async function checkFirestoreData() {
    console.log('🧐 Checking first 5 words of Day 1 in Firestore...');
    const q = query(
        collection(db, 'vocabularies'),
        where('day', '==', 1),
        orderBy('no', 'asc'),
        limit(5)
    );

    const snapshot = await getDocs(q);
    if (snapshot.empty) {
        console.log('❌ No words found for Day 1!');
        return;
    }

    snapshot.docs.forEach(doc => {
        const data = doc.data();
        console.log(`[ID: ${doc.id}] No: ${data.no}, Word: ${data.word}, Meaning: ${data.meaning}`);
    });
}

checkFirestoreData();
