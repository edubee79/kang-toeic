
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, deleteDoc, doc, writeBatch } from "firebase/firestore";
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

async function manageQuestions() {
    const command = process.argv[2]; // 'list' or 'delete'
    const tag = process.argv[3];     // e.g. 'P5_PREP'

    if (!command) {
        console.log("Usage: npx tsx scripts/manage-questions.ts <summary|list|delete> [tag]");
        return;
    }

    try {
        // Authenticate using known temp account
        const email = "temp-uploader@test.com";
        const password = "TempPass123!@#";

        console.log("🔐 Authenticating...");
        await signInWithEmailAndPassword(auth, email, password);
        console.log("🔓 Authenticated.");

        if (command === 'summary') {
            console.log("📊 Generating Summary by Tag...");
            const snapshot = await getDocs(collection(db, 'ai_weakness_questions'));
            const tagCounts: Record<string, number> = {};
            let total = 0;

            snapshot.forEach(doc => {
                const data = doc.data();
                // Count primary tags (usually start with P5, P6, P7 or Part)
                if (Array.isArray(data.tags)) {
                    data.tags.forEach((t: string) => {
                        tagCounts[t] = (tagCounts[t] || 0) + 1;
                    });
                }
                total++;
            });

            console.log(`\n📦 Total Questions in DB: ${total}`);
            console.log("-----------------------------------------");
            console.log("Tag".padEnd(30) + "Count");
            console.log("-----------------------------------------");
            Object.entries(tagCounts)
                .sort((a, b) => b[1] - a[1])
                .forEach(([tag, count]) => {
                    console.log(`${tag.padEnd(30)} ${count}`);
                });
            console.log("-----------------------------------------");
            return;
        }

        if (!tag) {
            console.log("❌ Error: <tag> is required for list/delete commands.");
            return;
        }

        const q = query(collection(db, 'ai_weakness_questions'), where('tags', 'array-contains', tag));
        console.log(`🔍 Searching for questions with tag: [${tag}]...`);

        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            console.log("✨ No documents found.");
            return;
        }

        console.log(`Found ${snapshot.size} documents.`);

        if (command === 'list') {
            snapshot.docs.forEach((doc, i) => {
                const data = doc.data();
                console.log(`\n[${i + 1}] ID: ${doc.id}`);
                console.log(`    Question: ${data.text?.substring(0, 50)}...`);
                console.log(`    Answer: ${data.correctAnswer}`);
                console.log(`    GeneratedAt: ${data.generatedAt}`);
            });
        } else if (command === 'delete') {
            const batch = writeBatch(db);
            snapshot.docs.forEach(d => {
                batch.delete(doc(db, 'ai_weakness_questions', d.id));
            });
            await batch.commit();
            console.log(`🗑️ Successfully deleted ${snapshot.size} documents.`);
        }

    } catch (error: any) {
        console.error("Error:", error.message);
    }
}

manageQuestions();
