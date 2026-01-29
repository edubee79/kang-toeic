import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import * as dotenv from "dotenv";
import { format } from "date-fns";

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
    console.log("🔍 Fetching today's Level Test data (2026-01-25)...");

    try {
        const attemptsRef = collection(db, 'MockTestAttempts');
        const q = query(attemptsRef, where('status', '==', 'completed'));
        const snapshot = await getDocs(q);

        const today = "2026-01-25";
        const results: any[] = [];

        snapshot.forEach(doc => {
            const data = doc.data();
            const dateStr = data.date || ""; // ISO string or other

            // Check if it's today
            if (dateStr.includes(today)) {
                results.push({
                    id: doc.id,
                    name: data.userName || "Unknown",
                    testTitle: data.testTitle || "",
                    totalScore: data.totalScore || 0,
                    totalQuestions: data.totalQuestions || 0,
                    partScores: data.partScores || {}
                });
            }
        });

        if (results.length === 0) {
            console.log("❌ No data found for today.");
        } else {
            console.log(`✅ Found ${results.length} attempts:`);
            console.table(results.map(r => ({
                Name: r.name,
                Test: r.testTitle,
                Score: r.totalScore,
                TotalQs: r.totalQuestions
            })));

            // Log details
            results.forEach(r => {
                console.log(`\n[${r.name}] ${r.testTitle}`);
                console.log(`- Final Score: ${r.totalScore} / ${r.totalQuestions}`);
                if (r.partScores) {
                    const parts = Object.entries(r.partScores).map(([p, s]: [string, any]) => {
                        return `${p.toUpperCase()}: ${s.correct}/${s.total}`;
                    }).join(", ");
                    console.log(`- Parts: ${parts}`);
                }
            });
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    process.exit(0);
}

fetchTodayData();
