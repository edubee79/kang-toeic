const admin = require('firebase-admin');
const fs = require('fs');

const serviceAccount = JSON.parse(fs.readFileSync('./serviceAccountKey.json', 'utf8'));

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

const db = admin.firestore();

async function check() {
    const snap = await db.collection('Assignments')
        .where('isAiGenerated', '==', true)
        .where('status', '==', 'active')
        .get();

    console.log("Found assignments:");
    snap.docs.forEach(d => {
        const data = d.data();
        console.log(`Day: ${data.dayOffset} | Part: ${data.targetPart || 'voca'} | Title: ${data.title}`);
    });
}

check();
