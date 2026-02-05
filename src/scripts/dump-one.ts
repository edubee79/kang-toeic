const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const { admin } = require('../lib/firebase-admin');

async function dumpOne() {
    const db = admin.firestore();
    const snapshot = await db.collection('ai_weakness_questions').limit(1).get();
    if (!snapshot.empty) {
        console.log(JSON.stringify(snapshot.docs[0].data(), null, 2));
    }
}

dumpOne().catch(console.error);
