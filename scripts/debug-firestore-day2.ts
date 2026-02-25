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

async function debugDay2() {
    console.log('🔍 Querying Firestore for Day 2 items (without order)...');
    const snapshot = await db.collection('vocabularies')
        .where('day', '==', 2)
        .get();

    console.log(`📊 Found ${snapshot.size} documents for Day 2 in Firestore.`);

    const items = snapshot.docs.map(doc => ({
        id: doc.id,
        no: doc.data().no,
        word: doc.data().word
    })).sort((a, b) => a.no - b.no);

    items.forEach(item => {
        console.log(`[ID: ${item.id}] No: ${item.no}, Word: ${item.word}`);
    });

    const issueDoc = snapshot.docs.find(doc => doc.data().word.toLowerCase() === 'issue');
    if (issueDoc) {
        console.log('\n⚠️ ALERT: "issue" found in Firestore Day 2!');
        console.log('Details:', JSON.stringify(issueDoc.data(), null, 2));
    }
}

debugDay2().catch(e => {
    console.error('❌ Error details:', e);
});
