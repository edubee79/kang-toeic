
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, Timestamp } from "firebase/firestore";
import * as dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

// Load env vars
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

async function createAdmin() {
    try {
        const username = 'admin';
        const password = 'kang1818^^';
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log(`Creating admin account: ${username}`);

        // 문서 ID와 userId를 일치시켜야 updateDoc 등에서 문제가 발생하지 않습니다.
        const docId = 'ADMIN001';

        await setDoc(doc(db, "Winter_Users", docId), {
            username: username,
            password: hashedPassword,
            userId: 'ADMIN001', // 문서 ID와 일치시킴
            userName: '관리자',
            universityName: 'KANGS TOEIC',
            status: 'approved',
            registeredAt: Timestamp.now(),
            approvedAt: Timestamp.now(),
            approvedBy: 'system',
            className: '관리자반',
            role: 'admin'
        });

        console.log("✅ Admin account created successfully!");
        console.log(`Document ID: ${docId}`);
        console.log(`ID: ${username}`);
        console.log(`PW: ${password}`);

        process.exit(0);

    } catch (error) {
        console.error("Failed to create admin:", error);
        process.exit(1);
    }
}

createAdmin();
