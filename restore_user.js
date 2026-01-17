
const { initializeApp } = require('firebase/app');
const { getFirestore, doc, getDoc, setDoc } = require('firebase/firestore');
require('dotenv').config({ path: '.env.local' });

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const USER_ID = '158754';

async function restoreUser() {
    console.log(`Checking user ${USER_ID} in Winter_Users...`);
    const userRef = doc(db, 'Winter_Users', USER_ID);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
        console.log("User already exists:", userSnap.data());
    } else {
        console.log("User missing. Creating default user document...");
        await setDoc(userRef, {
            userId: USER_ID,
            username: 'kangs', // Matches local storage usually? Or 'eduthot'?
            name: '김형진',
            className: '스파르타 750+ 목표반',
            targetScore: 850,
            targetLC: 450,
            targetRC: 400,
            registeredAt: new Date().toISOString(),
            status: 'approved'
        });
        console.log("User created successfully.");
    }
}

restoreUser();
