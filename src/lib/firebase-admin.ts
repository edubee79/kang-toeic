import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    try {
        const rawPrivateKey = process.env.FIREBASE_PRIVATE_KEY;
        const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
        const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

        const hasPK = !!rawPrivateKey && rawPrivateKey.trim().length > 0;
        const hasEmail = !!clientEmail && clientEmail.trim().length > 0;

        if (hasPK && hasEmail) {
            // Remove potential quotes if they exist
            let privateKey = rawPrivateKey!.trim();
            if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
                privateKey = privateKey.substring(1, privateKey.length - 1);
            }
            privateKey = privateKey.replace(/\\n/g, '\n');

            let email = clientEmail!.trim();
            if (email.startsWith('"') && email.endsWith('"')) {
                email = email.substring(1, email.length - 1);
            }

            admin.initializeApp({
                credential: admin.credential.cert({
                    projectId: projectId,
                    clientEmail: email,
                    privateKey: privateKey,
                }),
            });
            console.log('✅ [FirebaseAdmin] Initialized with Service Account:', email);
        } else {
            console.error('❌ [FirebaseAdmin] Credentials missing or invalid. Falling back to applicationDefault');
            console.error('   Details:', { hasPK, hasEmail, projectId });
            // Try to use environment's default (service account file) if available, 
            // but log a clear warning as this usually fails in local dev without ADC set.
            admin.initializeApp({
                credential: admin.credential.applicationDefault(),
                projectId: projectId,
            });
        }
    } catch (error: any) {
        console.error('Firebase admin initialization error', error.stack);
    }
}

const db = admin.firestore();
export { admin, db };
