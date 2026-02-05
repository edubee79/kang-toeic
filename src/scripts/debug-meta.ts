const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const { admin } = require('../lib/firebase-admin');

async function debugMeta() {
    const db = admin.firestore();
    const snapshot = await db.collection('ai_weakness_questions').limit(5).get();
    snapshot.forEach(doc => {
        console.log(`ID: ${doc.id}, metadata:`, JSON.stringify(doc.data().metadata, null, 2));
    });
}
debugMeta().catch(console.error);
