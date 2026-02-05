const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const { admin } = require('../lib/firebase-admin');

async function dumpWeaknessSamples() {
    const db = admin.firestore();
    const snapshot = await db.collection('ai_weakness_questions').limit(5).get();

    if (snapshot.empty) {
        console.log('ai_weakness_questions is empty');
        return;
    }

    const samples = [];
    snapshot.forEach(doc => {
        samples.push({ id: doc.id, data: doc.data() });
    });
    console.log(JSON.stringify(samples, null, 2));
}

dumpWeaknessSamples().catch(console.error);
