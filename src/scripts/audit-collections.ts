const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const { admin } = require('../lib/firebase-admin');

async function auditCollections() {
    const db = admin.firestore();
    const collections = await db.listCollections();

    console.log('--- Collection Audit ---');
    for (const coll of collections) {
        const snapshot = await coll.limit(1).get();
        console.log(`Collection: ${coll.id}, Empty: ${snapshot.empty}`);
    }
}

auditCollections().catch(console.error);
