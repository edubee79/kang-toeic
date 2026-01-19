import { NextResponse } from 'next/server';
import { admin } from '@/lib/firebase-admin';
import { hashPassword } from '@/lib/password'; // We might need a simpler hash or just raw string for dummy

export async function POST(request: Request) {
    try {
        const db = admin.firestore();
        const batch = db.batch();

        // 1. Create Dummy Users
        const dummyUsers = [
            { id: '20249001', name: 'Tony Stark', class: '스파르타 750+ 목표반' },
            { id: '20249002', name: 'Steve Rogers', class: '스파르타 750+ 목표반' },
            { id: '20249003', name: 'Natasha Romanoff', class: '기초 문법 완성반' },
            { id: '20249004', name: 'Bruce Banner', class: '스파르타 750+ 목표반' },
            { id: '20249005', name: 'Peter Parker', class: '기초 문법 완성반' },
        ];

        // Ensure classes exist or just use string
        // We will just create users.

        for (const u of dummyUsers) {
            const userRef = db.collection('Winter_Users').doc('dummy_' + u.id); // Use specific doc ID to avoid dups on re-run
            batch.set(userRef, {
                userId: u.id,
                username: `user${u.id}`,
                email: `user${u.id}@avengers.com`,
                password: 'hashed_dummy_password', // Mock
                userName: u.name,
                className: u.class,
                universityName: 'SHIELD Univ',
                status: 'approved',
                registeredAt: admin.firestore.Timestamp.now(),
            }, { merge: true });
        }

        // 2. Create Dummy Results
        // Randomize scores
        const types = ['voca', 'part5_test', 'part2_test', 'part1_shadow'];

        for (const u of dummyUsers) {
            // Each user gets 3-5 results
            const count = 3 + Math.floor(Math.random() * 3);

            for (let i = 0; i < count; i++) {
                const resRef = db.collection('Manager_Results').doc();
                const type = types[Math.floor(Math.random() * types.length)];
                const score = 50 + Math.floor(Math.random() * 50); // 50-100
                const date = new Date();
                date.setDate(date.getDate() - Math.floor(Math.random() * 10)); // Last 10 days

                batch.set(resRef, {
                    studentId: u.id,
                    studentName: u.name, // Usually results have name
                    className: u.class,
                    type: type,
                    unit: type === 'voca' ? `Day ${1 + Math.floor(Math.random() * 30)}` : `Test ${i + 1}`,
                    score: score,
                    total: 100,
                    timestamp: admin.firestore.Timestamp.fromDate(date),
                    detail: type // simple detail
                });
            }
        }

        await batch.commit();

        return NextResponse.json({ success: true, message: `Created ${dummyUsers.length} users and random results.` });

    } catch (error: any) {
        console.error("Dummy data generation error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
