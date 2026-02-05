import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    try {
        const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
        const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;

        if (privateKey && clientEmail) {
            admin.initializeApp({
                credential: admin.credential.cert({
                    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                    clientEmail: clientEmail,
                    privateKey: privateKey,
                }),
            });
            console.log('✅ Firebase Admin initialized with credentials');
        } else {
            admin.initializeApp({
                credential: admin.credential.applicationDefault(),
                projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            });
            console.warn('⚠️ Firebase Admin initialized with applicationDefault (may fail locally)');
        }
    } catch (error: any) {
        console.error('Firebase admin initialization error', error.stack);
    }
}

const db = admin.firestore();
export { admin, db };
