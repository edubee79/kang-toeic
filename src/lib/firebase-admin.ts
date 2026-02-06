import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    try {
        const rawPrivateKey = process.env.FIREBASE_PRIVATE_KEY;
        const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
        const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

        console.log('[Firebase Admin Init] Checking Environment Variables:', {
            hasPrivateKey: !!rawPrivateKey,
            privateKeyLength: rawPrivateKey?.length || 0,
            hasClientEmail: !!clientEmail,
            clientEmail: clientEmail ? `${clientEmail.substring(0, 10)}...` : 'MISSING',
            projectId: projectId || 'MISSING'
        });

        if (rawPrivateKey && clientEmail) {
            const privateKey = rawPrivateKey.replace(/\\n/g, '\n');
            admin.initializeApp({
                credential: admin.credential.cert({
                    projectId: projectId,
                    clientEmail: clientEmail,
                    privateKey: privateKey,
                }),
            });
            console.log('✅ Firebase Admin initialized with credentials');
        } else {
            console.error('❌ Firebase Admin credentials missing. Falling back to applicationDefault() - this will likely fail.');
            admin.initializeApp({
                credential: admin.credential.applicationDefault(),
                projectId: projectId,
            });
            console.warn('⚠️ Firebase Admin initialized with applicationDefault (may fail locally)');
        }
    } catch (error: any) {
        console.error('Firebase admin initialization error', error.stack);
    }
}

const db = admin.firestore();
export { admin, db };
