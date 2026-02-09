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
        const snapshot = await db.collection('Manager_Results')
            .where('studentId', '==', userId)
            .where('type', '==', 'part2_test')
            .orderBy('timestamp', 'desc')
            .limit(10)
            .get();

        const results = snapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                detail: data.detail,
                score: data.score,
                total: data.total,
                timestamp: data.timestamp?.toDate().toISOString(),
                incorrectQuestions: data.incorrectQuestions || []
            };
        });

        // Analyze classification values
        const classificationCounts: Record<string, number> = {};
        results.forEach(result => {
            result.incorrectQuestions.forEach((q: any) => {
                const classification = q.classification || 'Unknown';
                classificationCounts[classification] = (classificationCounts[classification] || 0) + 1;
            });
        });

        return NextResponse.json({
            totalResults: results.length,
            results,
            classificationSummary: classificationCounts
        });
    } catch (error: any) {
        console.error('Error fetching Part 2 data:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
