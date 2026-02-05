const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const { admin } = require('../lib/firebase-admin');

async function listCollections() {
    const db = admin.firestore();
    const collections = await db.listCollections();
    console.log('Collections:');
    collections.forEach(c => console.log(' -', c.id));
}

listCollections().catch(console.error);
