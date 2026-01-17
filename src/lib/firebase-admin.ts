import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.applicationDefault(),
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        });
    } catch (error: any) {
        console.error('Firebase admin initialization error', error.stack);
    }
}

export { admin };
