const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const { admin } = require('../lib/firebase-admin');

async function checkBatch() {
    const db = admin.firestore();
    const snapshot = await db.collection('ai_weakness_questions').get();
    console.log(`Total: ${snapshot.size}`);

    let withMeta = 0;
    let withStd = 0;

    snapshot.forEach(doc => {
        const data = doc.data();
        if (data.metadata) {
            withMeta++;
            if (data.metadata.standardizedAt) {
                withStd++;
            } else {
                if (withMeta < 120) console.log(`Doc ${doc.id} HAS meta but NO standardizedAt`);
            }
        } else {
            if (withMeta < 20) console.log(`Doc ${doc.id} NO meta`);
        }
    });

    console.log(`With Meta: ${withMeta}, With StandardizedAt: ${withStd}`);
}
checkBatch().catch(console.error);
