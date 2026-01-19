import { NextResponse } from 'next/server';
import { admin } from '@/lib/firebase-admin';

export async function POST(request: Request) {
    try {
        const db = admin.firestore();

        // 1. Find dummy users
        const usersRef = db.collection('Winter_Users');
        const dummyUsersSnap = await usersRef.where('userId', '>=', '20249001').where('userId', '<=', '20249005').get();
        // Actually, in generate-dummy-data, we used IDs 20249001 to 20249005.
        // And doc IDs dummy_20249001 etc.

        const dummyUserIds = ['20249001', '20249002', '20249003', '20249004', '20249005'];

        const batch = db.batch();
        let count = 0;

        // Delete Dummy User Documents
        for (const id of dummyUserIds) {
            const userDocRef = usersRef.doc('dummy_' + id);
            batch.delete(userDocRef);
            count++;
        }

        // 2. Delete Dummy Results
        const resultsRef = db.collection('Manager_Results');
        const dummyResultsSnap = await resultsRef.where('studentId', 'in', dummyUserIds).get();

        dummyResultsSnap.forEach(doc => {
            batch.delete(doc.ref);
            count++;
        });

        await batch.commit();

        return NextResponse.json({
            success: true,
            message: `Deleted ${dummyUserIds.length} dummy users and ${dummyResultsSnap.size} result records.`
        });

    } catch (error: any) {
        console.error("Dummy data deletion error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
