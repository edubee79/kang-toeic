const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const { admin } = require('../lib/firebase-admin');

async function checkClasses() {
    const db = admin.firestore();
    const snapshot = await db.collection('ai_weakness_questions').get();

    const stats = {};
    snapshot.forEach(doc => {
        const cls = doc.data().classification || 'NONE';
        stats[cls] = (stats[cls] || 0) + 1;
    });

    console.log(JSON.stringify(stats, null, 2));
}
checkClasses().catch(console.error);
