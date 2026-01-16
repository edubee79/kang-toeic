
import * as dotenv from 'dotenv';
import path from 'path';

// Load .env.local from the root directory
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function resetPassword() {
    try {
        console.log("Loading environment variables...");
        if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
            console.error("Error: NEXT_PUBLIC_FIREBASE_API_KEY is not set.");
            return;
        }

        // Dynamically import libraries to ensure env vars are loaded first
        // Use relative paths to avoid alias issues with tsx if not configured
        const { db } = await import('../src/lib/firebase');
        console.log("DB Object:", db);

        const { collection, query, where, getDocs, updateDoc } = await import('firebase/firestore');
        const { hashPassword } = await import('../src/lib/password');

        console.log("Starting password reset for 'kangs'...");
        const newPassword = 'Kang1818^^';
        const hashedPassword = await hashPassword(newPassword);

        const q = query(
            collection(db, "Winter_Users"),
            where("username", "==", "kangs")
        );

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            console.error("User 'kangs' not found!");
            return;
        }

        const userDoc = querySnapshot.docs[0];
        await updateDoc(userDoc.ref, {
            password: hashedPassword
        });

        console.log("Successfully reset password for 'kangs'.");
    } catch (error) {
        console.error("Error resetting password:", error);
    }
}

resetPassword();
