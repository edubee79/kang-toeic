const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const { admin } = require('../lib/firebase-admin');

async function reportProgress() {
    const db = admin.firestore();
    const snapshot = await db.collection('ai_weakness_questions').get();

    let verifiedCount = 0;
    let totalCount = snapshot.size;
    let sampleVerified = [];

    snapshot.forEach(doc => {
        const data = doc.data();
        if (data.metadata && data.metadata.status === 'verified') {
            verifiedCount++;
            if (sampleVerified.length < 3) {
                sampleVerified.push({ id: doc.id, classification: data.classification });
            }
        }
    });

    console.log(`--- Progressive Report ---`);
    console.log(`Total Questions: ${totalCount}`);
    console.log(`Verified (Standardized): ${verifiedCount}`);
    console.log(`Remaining: ${totalCount - verifiedCount}`);
    console.log(`Sample Verified:`, JSON.stringify(sampleVerified, null, 2));
}

reportProgress().catch(console.error);
