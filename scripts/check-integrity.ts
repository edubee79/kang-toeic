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

async function checkIntegrity() {
    console.log('🔍 Checking for potential data issues in Firestore...');
    const snapshot = await db.collection('vocabularies').get();

    let missingDay = 0;
    let missingNo = 0;
    let invalidDay = 0; // Day > 20

    snapshot.docs.forEach(doc => {
        const data = doc.data();
        if (data.day === undefined || data.day === null) missingDay++;
        if (data.day > 20) invalidDay++;
        if (data.no === undefined || data.no === null) missingNo++;
    });

    console.log(`Summary:`);
    console.log(`- Total: ${snapshot.size}`);
    console.log(`- Missing Day: ${missingDay}`);
    console.log(`- Invalid Day (>20): ${invalidDay}`);
    console.log(`- Missing No: ${missingNo}`);
}

checkIntegrity().catch(console.error);
