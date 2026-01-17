
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, query, where } = require('firebase/firestore');
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

async function checkResults() {
    console.log("Checking Manager_Results for student 158754...");
    const q = query(collection(db, "Manager_Results"), where("studentId", "==", "158754"));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
        console.log("No results found for student 158754.");
    } else {
        console.log(`Found ${snapshot.size} results.`);
        snapshot.forEach(doc => {
            console.log(doc.id, "=>", doc.data().unit, doc.data().score);
        });
    }
}

checkResults();
