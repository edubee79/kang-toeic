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

async function findIssue() {
    console.log('🔍 Searching all documents for "issue"...');
    const snapshot = await db.collection('vocabularies')
        .where('word', '==', 'issue')
        .get();

    console.log(`📊 Found ${snapshot.size} documents with word "issue".`);

    snapshot.docs.forEach(doc => {
        const data = doc.data();
        console.log(`[ID: ${doc.id}] Day: ${data.day}, No: ${data.no}, Word: ${data.word}`);
    });
}

findIssue().catch(console.error);
