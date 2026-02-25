import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, writeBatch, deleteDoc } from "firebase/firestore";
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

async function cleanupDB() {
    const email = "temp-uploader@test.com";
    const password = "TempPass123!@#";
    await signInWithEmailAndPassword(auth, email, password);
    console.log("🔓 Authenticated.");

    console.log("🔍 Fetching documents for Day 16-30...");
    const q = query(collection(db, "vocabularies"), where("day", ">=", 16));
    const snapshot = await getDocs(q);
    const docs = snapshot.docs;

    console.log(`🗑️ Found ${docs.length} documents to delete.`);

    if (docs.length === 0) {
        console.log("Nothing to delete.");
        return;
    }

    const batchSize = 400;
    let totalDeleted = 0;

    for (let i = 0; i < docs.length; i += batchSize) {
        const batch = writeBatch(db);
        const chunk = docs.slice(i, i + batchSize);

        chunk.forEach(d => batch.delete(d.ref));

        await batch.commit();
        totalDeleted += chunk.length;
        console.log(`✅ Deleted ${totalDeleted} / ${docs.length}...`);
    }

    console.log("\n✨ Cleanup Complete!");
}

cleanupDB().then(() => process.exit(0)).catch(e => {
    console.error(e);
    process.exit(1);
});
