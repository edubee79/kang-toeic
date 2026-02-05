const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const { admin } = require('../lib/firebase-admin');
const fs = require('fs');

async function dumpPilot() {
    const db = admin.firestore();
    // Fetch some that might need standardization (e.g. legacy tags or missing classification)
    const snapshot = await db.collection('ai_weakness_questions').limit(10).get();

    const samples = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    fs.writeFileSync('pilot_p5.json', JSON.stringify(samples, null, 2));
}

dumpPilot().catch(console.error);
