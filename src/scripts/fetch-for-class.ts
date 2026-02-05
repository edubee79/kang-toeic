const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const { admin } = require('../lib/firebase-admin');
const fs = require('fs');

async function fetchForClassification() {
    const db = admin.firestore();
    const snapshot = await db.collection('ai_weakness_questions').orderBy('__name__').limit(100).get();

    const questions = snapshot.docs.map(doc => ({
        id: doc.id,
        text: doc.data().text || doc.data().content,
        options: doc.data().options,
        answer: doc.data().correctAnswer,
        explanation: doc.data().explanation,
        current: doc.data().classification || (doc.data().tags ? doc.data().tags[0] : 'none')
    }));

    fs.writeFileSync('batch_to_classify.json', JSON.stringify(questions, null, 2));
    console.log('Fetched 100 questions to batch_to_classify.json');
}

fetchForClassification().catch(console.error);
