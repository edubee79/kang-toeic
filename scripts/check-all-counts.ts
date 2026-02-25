import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env.local') });

const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: privateKey,
        }),
    });
}

const db = admin.firestore();

async function checkCounts() {
    console.log('📊 Checking word counts per day in Firestore...');
    const snapshot = await db.collection('vocabularies').get();
    console.log(`Total documents: ${snapshot.size}`);

    const counts: { [key: number]: number } = {};
    snapshot.docs.forEach(doc => {
        const day = doc.data().day;
        counts[day] = (counts[day] || 0) + 1;
    });

    console.log('Counts per Day:');
    Object.keys(counts).sort((a, b) => Number(a) - Number(b)).forEach(day => {
        console.log(`Day ${day}: ${counts[Number(day)]} words`);
    });
}

checkCounts().catch(console.error);
