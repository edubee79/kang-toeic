import { NextRequest, NextResponse } from 'next/server';
import { admin } from '@/lib/firebase-admin';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('userId');

        if (!userId) {
            return NextResponse.json({ error: 'userId required' }, { status: 400 });
        }

        const db = admin.firestore();

        // Get latest AI assignments
        const assignmentsSnapshot = await db.collection('Assignments')
            .where('userId', '==', userId)
            .orderBy('createdAt', 'desc')
            .limit(20)
            .get();

        const assignments = assignmentsSnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                title: data.title,
                homeworkUrl: data.homeworkUrl,
                targetTag: data.targetTag,
                targetLabel: data.targetLabel,
                createdAt: data.createdAt?.toDate().toISOString()
            };
        });

        // Filter Part 2 assignments
        const part2Assignments = assignments.filter(a =>
            a.homeworkUrl?.includes('/homework/part2/')
        );

        return NextResponse.json({
            totalAssignments: assignments.length,
            part2Assignments,
            allAssignments: assignments
        });
    } catch (error: any) {
        console.error('Error fetching assignments:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
