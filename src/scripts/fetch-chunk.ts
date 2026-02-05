const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const { admin } = require('../lib/firebase-admin');

async function getChunk(offset, size) {
    const db = admin.firestore();
    const snapshot = await db.collection('ai_weakness_questions').orderBy('__name__').limit(size).get();
    // For subsequent chunks, we'd need startAfter. 
    // But for the first one:
    const data = snapshot.docs.map(doc => ({
        id: doc.id,
        text: doc.data().text || doc.data().content,
        options: doc.data().options,
        answer: doc.data().correctAnswer,
        explanation: doc.data().explanation,
        current: doc.data().classification || (doc.data().tags ? doc.data().tags[0] : 'none')
    }));
    console.log(JSON.stringify(data, null, 2));
}

getChunk(0, 50).catch(console.error);
