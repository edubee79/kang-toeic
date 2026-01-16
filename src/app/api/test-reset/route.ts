
import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, updateDoc } from 'firebase/firestore';
import { hashPassword } from '@/lib/password';

export async function GET() {
    try {
        console.log("Starting password reset for 'kangs'...");
        const newPassword = 'Kang1818^^';
        const hashedPassword = await hashPassword(newPassword);

        const q = query(
            collection(db, "Winter_Users"),
            where("username", "==", "kangs")
        );

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            console.log("User 'kangs' not found. Creating new admin user...");
            const { addDoc } = await import('firebase/firestore');
            await addDoc(collection(db, "Winter_Users"), {
                username: 'kangs',
                password: hashedPassword,
                status: 'approved',
                userId: 'admin',
                userName: '관리자',
                userClass: 'Staff',
                schoolName: 'System',
                registeredAt: new Date(),
                approvedAt: new Date()
            });
            return NextResponse.json({ success: true, message: "Created admin user 'kangs' with password Kang1818^^" });
        }

        const userDoc = querySnapshot.docs[0];
        await updateDoc(userDoc.ref, {
            password: hashedPassword,
            status: 'approved' // Ensure admin is approved
        });

        console.log("Successfully reset password for 'kangs'.");
        return NextResponse.json({ success: true, message: "Password reset to Kang1818^^" });
    } catch (error: any) {
        console.error("Error resetting password:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
