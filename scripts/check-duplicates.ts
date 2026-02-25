import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

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
const auth = getAuth(app);

async function checkDuplicates() {
    const email = "temp-uploader@test.com";
    const password = "TempPass123!@#";
    await signInWithEmailAndPassword(auth, email, password);
    console.log("🔓 Authenticated.");

    console.log("🔍 Fetching Firestore data...");
    const snapshot = await getDocs(collection(db, "vocabularies"));
    const docs = snapshot.docs;

    console.log(`📊 Total documents: ${docs.length}`);

    const wordGroups = {};
    const dayCounts = {};
    const idPatterns = {};

    docs.forEach(doc => {
        const data = doc.data();
        const word = data.word;
        const id = doc.id;
        const day = data.day;

        if (!wordGroups[word]) wordGroups[word] = [];
        wordGroups[word].push({ id, day, ...data });

        let pattern = "others";
        if (id.startsWith("day") && id.includes("_no")) pattern = "standard (dayX_noY)";
        else pattern = "legacy (" + id.substring(0, 10) + "...)";

        idPatterns[pattern] = (idPatterns[pattern] || 0) + 1;
        dayCounts[day] = (dayCounts[day] || 0) + 1;
    });

    console.log("\n--- Words per Day (Actual DB) ---");
    Object.keys(dayCounts).sort((a, b) => a - b).forEach(day => {
        console.log(`Day ${day}: ${dayCounts[day]} words`);
    });

    console.log("\n--- ID Pattern Distribution ---");
    Object.keys(idPatterns).forEach(p => console.log(`${p}: ${idPatterns[p]}`));

    console.log("\n--- Details for 'qualified' ---");
    if (wordGroups['qualified']) {
        wordGroups['qualified'].forEach(item => {
            console.log(`ID: ${item.id}, Day: ${item.day}, Part: ${item.part}, No: ${item.no}, Score: ${item.targetScore}`);
        });
    } else {
        // Try searching case-insensitive
        const matches = Object.keys(wordGroups).filter(w => w.toLowerCase() === 'qualified');
        if (matches.length > 0) {
            matches.forEach(m => {
                wordGroups[m].forEach(item => {
                    console.log(`[${m}] ID: ${item.id}, Day: ${item.day}, Part: ${item.part}, No: ${item.no}`);
                });
            });
        } else {
            console.log("Word 'qualified' not found.");
        }
    }

    console.log("\n--- Duplicate Words appearing across multiple days ---");
    Object.keys(wordGroups).forEach(w => {
        const items = wordGroups[w];
        if (items.length > 1) {
            const days = [...new Set(items.map(i => i.day))];
            if (days.length > 1) {
                console.log(`Word "${w}" in multiple days: ${days.join(', ')}`);
            }
        }
    });
}

checkDuplicates().then(() => process.exit(0)).catch(e => {
    console.error(e);
    process.exit(1);
});
