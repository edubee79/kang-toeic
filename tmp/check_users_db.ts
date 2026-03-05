
import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: '.env.local' });

if (!admin.apps.length) {
    const rawPrivateKey = process.env.FIREBASE_PRIVATE_KEY;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

    if (rawPrivateKey && clientEmail) {
        let privateKey = rawPrivateKey.trim();
        if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
            privateKey = privateKey.substring(1, privateKey.length - 1);
        }
        privateKey = privateKey.replace(/\\n/g, '\n');

        admin.initializeApp({
            credential: admin.credential.cert({
                projectId,
                clientEmail,
                privateKey,
            }),
        });
        console.log('✅ Admin initialized');
    } else {
        process.exit(1);
    }
}

const db = admin.firestore();

async function checkUser() {
    console.log('--- Checking for 정금철 ---');
    const q1 = await db.collection('Winter_Users').where('userName', '==', '정금철').get();
    if (q1.empty) {
        console.log('❌ No user found with name 정금철');
    } else {
        q1.forEach(doc => {
            console.log('✅ Found:', doc.id, doc.data());
        });
    }

    console.log('\n--- Checking pending users ---');
    const q2 = await db.collection('Winter_Users').where('status', '==', 'pending').get();
    console.log(`- Count of pending users: ${q2.size}`);
    q2.forEach(doc => {
        console.log(`  - ${doc.data().userName} (${doc.id}) - ${doc.data().status}`);
    });
}

checkUser().catch(console.error);
