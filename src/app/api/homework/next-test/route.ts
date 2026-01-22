import { NextRequest, NextResponse } from 'next/server';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { isActualTest, ManagerResult } from '@/lib/filters/actualTestFilter';

/**
 * API: Get next uncompleted test for a specific part
 * GET /api/homework/next-test?userId=xxx&part=p5
 */
export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const userId = searchParams.get('userId');
        const part = searchParams.get('part');

        if (!userId || !part) {
            return NextResponse.json(
                { error: 'Missing userId or part parameter' },
                { status: 400 }
            );
        }

        // Get completed tests for this part
        const completedTests = await getCompletedTests(userId, part);

        // Map part to max available tests
        const maxTests: Record<string, number> = {
            'p1': 10, 'p2': 10, 'p3': 10, 'p4': 10,
            'p5': 10, 'p6': 10, 'p7_single': 10, 'p7_double': 10
        };

        const maxTestId = maxTests[part] || 10;

        // Find first uncompleted test
        for (let testId = 1; testId <= maxTestId; testId++) {
            if (!completedTests.includes(testId)) {
                return NextResponse.json({
                    testId,
                    title: `Test ${testId}`,
                    isReview: false
                });
            }
        }

        // All tests completed, recommend Test 1 for review
        return NextResponse.json({
            testId: 1,
            title: 'Test 1 (복습)',
            isReview: true
        });

    } catch (error) {
        console.error('Error finding next test:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

/**
 * Get list of completed test IDs for a part
 */
async function getCompletedTests(userId: string, part: string): Promise<number[]> {
    const results = await getDocs(
        query(
            collection(db, 'Manager_Results'),
            where('studentId', '==', userId)
        )
    );

    const completedTestIds: Set<number> = new Set();

    results.forEach(doc => {
        const data = doc.data() as ManagerResult;

        // Only consider actual tests
        if (!isActualTest(data)) return;

        // Check if this result matches the target part
        const resultPart = mapResultToPart(data);
        if (resultPart === part && data.testId) {
            completedTestIds.add(data.testId);
        }
    });

    return Array.from(completedTestIds);
}

/**
 * Map ManagerResult to part key (p1, p2, etc.)
 */
function mapResultToPart(result: ManagerResult): string {
    const typeMap: Record<string, string> = {
        'part1_test': 'p1',
        'part2_test': 'p2',
        'part3_test': 'p3',
        'part4_test': 'p4',
        'part5_test': 'p5',
        'part6_test': 'p6',
        'part7_single': 'p7_single',
        'part7_double': 'p7_double'
    };

    return typeMap[result.type] || result.type;
}
