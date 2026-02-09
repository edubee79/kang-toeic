import { NextResponse } from "next/server";
import { db } from "@/lib/firebase-admin";

export async function GET() {
    let firestoreStatus = "Not tested";
    let firestoreError = null;

    try {
        const testDoc = await db.collection('Winter_Users').limit(1).get();
        firestoreStatus = `Success: Found ${testDoc.size} documents`;
    } catch (e: any) {
        firestoreStatus = "Failed";
        firestoreError = e.message;
    }

    return NextResponse.json({
        hasPrivateKey: !!process.env.FIREBASE_PRIVATE_KEY,
        hasClientEmail: !!process.env.FIREBASE_CLIENT_EMAIL,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        firestoreStatus,
        firestoreError
    });
}
