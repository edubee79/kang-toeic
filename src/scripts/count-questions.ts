const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const { admin } = require('../lib/firebase-admin');

async function countQuestions() {
    const db = admin.firestore();
    const snapshot = await db.collection('ai_weakness_questions').count().get();
    console.log('Count ai_weakness_questions:', snapshot.data().count);
}

countQuestions().catch(console.error);
