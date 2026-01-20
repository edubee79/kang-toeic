import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Log warning if config is missing (only in dev)
if (process.env.NODE_ENV === 'development') {
    if (!firebaseConfig.apiKey) {
        console.warn("Firebase API Key is missing. Check your .env.local file.");
    }
}

// Initialize Firebase (Singleton pattern)
let app: FirebaseApp;
try {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
} catch (e) {
    console.error("Firebase App initialization failed", e);
    // Fallback to getApp() if initializeApp failed due to already existing app or other issues
    app = getApp();
}

const auth = getAuth(app);
const db = getFirestore(app);

// Messaging: Use isSupported check and more robust initialization
let messaging: any = null;
if (typeof window !== 'undefined') {
    import('firebase/messaging').then(async ({ getMessaging, isSupported }) => {
        try {
            const supported = await isSupported();
            if (supported) {
                messaging = getMessaging(app);
            } else {
                console.log("Firebase Messaging not supported in this browser.");
            }
        } catch (e) {
            console.warn("Firebase Messaging failed to initialize", e);
        }
    }).catch(err => {
        console.warn("Failed to load firebase/messaging", err);
    });
}

export { app, auth, db, messaging };
