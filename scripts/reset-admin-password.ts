
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, setDoc, updateDoc, doc, Timestamp } from 'firebase/firestore';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env.local
dotenv.config({ path: path.join(__dirname, '../.env.local') });

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

async function resetAdminPassword() {
    const adminId = 'kangs';
    const newPassword = 'Toeic1234!';

    console.log(`🚀 Resetting/Creating admin user: ${adminId}...`);

    try {
        const usersRef = collection(db, 'Winter_Users');
        const q = query(usersRef, where('username', '==', adminId));
        const snapshot = await getDocs(q);

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        const adminData = {
            userId: adminId,
            username: adminId,
            password: hashedPassword,
            name: '강쌤',
            role: 'admin',
            status: 'approved',
            registeredAt: Timestamp.now(),
            className: 'Master Class',
            email: 'admin@toeic.com' // Dummy email
        };

        if (snapshot.empty) {
            console.log(`User '${adminId}' not found. Creating new admin user...`);
            await setDoc(doc(db, 'Winter_Users', adminId), adminData);
        } else {
            console.log(`User '${adminId}' found. Updating password...`);
            const userDoc = snapshot.docs[0];
            await updateDoc(doc(db, 'Winter_Users', userDoc.id), {
                password: hashedPassword,
                role: 'admin',
                status: 'approved'
            });
        }

        console.log(`✅ Success! Admin credentials:`);
        console.log(`ID: ${adminId}`);
        console.log(`PW: ${newPassword}`);

        // Force exit because Firestore connection keeps node matching running
        process.exit(0);

    } catch (error) {
        console.error('Error resetting admin:', error);
        process.exit(1);
    }
}

resetAdminPassword();
