import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

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

async function fetchTodayData() {
    const today = "2026-01-25";
    try {
        const attemptsRef = collection(db, 'MockTestAttempts');
        const q = query(attemptsRef, where('status', '==', 'completed'));
        const snapshot = await getDocs(q);

        const output: any[] = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            const dateStr = data.date || "";
            if (dateStr.includes(today)) {
                output.push({
                    name: data.userName || "Unknown",
                    test: data.testTitle || "Unknown",
                    score: data.totalScore || 0,
                    date: data.date,
                    answersCount: data.answers ? Object.keys(data.answers).length : 0
                });
            }
        });

        console.log(JSON.stringify(output, null, 2));
    } catch (e) { }
    process.exit(0);
}
fetchTodayData();
