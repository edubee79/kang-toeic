/**
 * Supplementary Homework Service
 * 
 * Purpose: Generate weekly homework assignments based on weakness analysis
 * Runs: Every Friday at 18:00 KST
 */

import { collection, addDoc, serverTimestamp, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { analyzeGoalStatus } from './goalAnalysisService';
import { isActualTest, ManagerResult } from '@/lib/filters/actualTestFilter';

interface HomeworkAssignment {
    type: 'ai_weakness_priority' | 'type_review';
    title: string;
    description: string;
    targetPart?: string;
    weakTypes?: Array<{ classification: string; count: number; label: string }>;
    questionIds: string[];
    homeworkUrl?: string; // Direct link to homework page
    priority: number;
    dueDate: Date;
}

/**
 * Generate 1st priority homework: AI weakness part reinforcement
 * Strategy: Recommend next uncompleted test set for the weakest part
 */
async function generatePriorityHomework(
    userId: string,
    userName: string,
    weakestPart: { part: string; gap: number; evaluationMessage: string }
): Promise<HomeworkAssignment | null> {
    if (weakestPart.part === 'none') return null;

    // Find next uncompleted test for this part
    const nextTest = await findNextUncompletedTest(userId, weakestPart.part);

    if (!nextTest) {
        console.log(`No uncompleted tests found for ${weakestPart.part}`);
        return null;
    }

    // Map part key to homework URL
    const partUrlMap: Record<string, string> = {
        'p1': 'part1-real',
        'p2': 'part2-real',
        'p3': 'part3-real',
        'p4': 'part4-real',
        'p5': 'part5-real',
        'p6': 'part6-real',
        'p7_single': 'part7-real',
        'p7_double': 'part7-real'
    };

    const homeworkUrl = `/homework/${partUrlMap[weakestPart.part]}?test=${nextTest.testId}`;

    return {
        type: 'ai_weakness_priority',
        title: `🎯 ${weakestPart.part.toUpperCase().replace('_', ' ')} Test ${nextTest.testId} 집중 보강`,
        description: `${weakestPart.evaluationMessage}\n\n📝 추천: ${nextTest.title || `Test ${nextTest.testId}`}`,
        targetPart: weakestPart.part,
        questionIds: [], // Not needed for test-based homework
        homeworkUrl, // Direct link to test
        priority: 1,
        dueDate: addDays(new Date(), 7)
    };
}

/**
 * Find the next test the user hasn't completed for a given part
 */
async function findNextUncompletedTest(
    userId: string,
    part: string
): Promise<{ testId: number; title?: string } | null> {
    // Get user's completed tests for this part
    const completedTests = await getCompletedTests(userId, part);

    // Map part to max available tests (you'll need to adjust these based on your data)
    const maxTests: Record<string, number> = {
        'p1': 10, 'p2': 10, 'p3': 10, 'p4': 10,
        'p5': 10, 'p6': 10, 'p7_single': 10, 'p7_double': 10
    };

    const maxTestId = maxTests[part] || 10;

    // Find first uncompleted test
    for (let testId = 1; testId <= maxTestId; testId++) {
        if (!completedTests.includes(testId)) {
            return { testId, title: `Test ${testId}` };
        }
    }

    // All tests completed, recommend Test 1 again
    return { testId: 1, title: 'Test 1 (복습)' };
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

/**
 * Generate 2nd priority homework: Type-based review
 * Returns MULTIPLE assignments, one per part
 */
async function generateTypeReviewHomework(
    userId: string,
    startDate: Date,
    endDate: Date
): Promise<HomeworkAssignment[]> {
    // Get all learning data from the past week (excluding drill mode)
    const results = await getDocs(
        query(
            collection(db, 'Manager_Results'),
            where('studentId', '==', userId),
            where('timestamp', '>=', Timestamp.fromDate(startDate)),
            where('timestamp', '<=', Timestamp.fromDate(endDate))
        )
    );

    const incorrectQuestions: any[] = [];

    results.forEach(doc => {
        const data = doc.data() as ManagerResult;

        // Exclude drill mode
        if (data.mode === 'drill') return;

        if (data.incorrectQuestions) {
            incorrectQuestions.push(...data.incorrectQuestions);
        }
    });

    // Find types with 3+ errors
    const classificationCounts: Record<string, number> = {};

    incorrectQuestions.forEach(q => {
        const cls = q.classification;
        if (cls && cls !== 'Unknown') {
            classificationCounts[cls] = (classificationCounts[cls] || 0) + 1;
        }
    });

    const weakTypes = Object.entries(classificationCounts)
        .filter(([_, count]) => count >= 3)
        .map(([cls, count]) => ({
            classification: cls,
            count,
            label: cls
        }))
        .sort((a, b) => b.count - a.count);

    if (weakTypes.length === 0) return [];

    // Group weak types by part
    const part2Types = ['How', 'What', 'When', 'Where', 'Who', 'Why', 'YesNo', 'Choice', 'Statement', 'Negative', 'Tag', 'Indirect'];

    const weakTypesByPart: Record<string, typeof weakTypes> = {
        p2: [],
        p5: [],
        // p6: [], // TODO: Add when Part 6 is implemented
    };

    weakTypes.forEach(wt => {
        if (part2Types.includes(wt.classification)) {
            weakTypesByPart.p2.push(wt);
        } else {
            weakTypesByPart.p5.push(wt);
        }
    });

    // Generate assignments for each part
    const assignments: HomeworkAssignment[] = [];

    try {
        // Part 2 Assignment
        if (weakTypesByPart.p2.length > 0) {
            const { part2Data } = await import('@/data/part2');
            const homeworkQuestions: string[] = [];

            // Collect all questions from all tests
            const allQuestions: any[] = [];
            for (const [testId, questions] of Object.entries(part2Data)) {
                questions.forEach((q: any) => {
                    allQuestions.push({
                        ...q,
                        testId: parseInt(testId),
                        uniqueId: `P2_T${testId}_Q${q.id}`
                    });
                });
            }

            // For each weak type, get up to 10 questions
            for (const weakType of weakTypesByPart.p2.slice(0, 3)) {
                const matchingQuestions = allQuestions
                    .filter(q => q.questionType === weakType.classification)
                    .slice(0, 10)
                    .map(q => q.uniqueId);

                homeworkQuestions.push(...matchingQuestions);
            }

            if (homeworkQuestions.length > 0) {
                assignments.push({
                    type: 'type_review',
                    title: `📚 Part 2 유형별 복습`,
                    description: `자주 틀린 유형: ${weakTypesByPart.p2.slice(0, 3).map(t => t.label).join(', ')}`,
                    targetPart: 'p2',
                    weakTypes: weakTypesByPart.p2,
                    questionIds: homeworkQuestions,
                    homeworkUrl: `/homework/part2/custom?assignmentId={assignmentId}`,
                    priority: 2,
                    dueDate: addDays(new Date(), 7)
                });
            }
        }

        // Part 5 Assignment
        if (weakTypesByPart.p5.length > 0) {
            const { part5Data } = await import('@/data/part5');
            const homeworkQuestions: string[] = [];

            // Get all questions from all units
            const allQuestions: any[] = [];
            Object.values(part5Data).forEach((unitQuestions: any) => {
                allQuestions.push(...unitQuestions);
            });

            // For each weak type, get up to 10 questions
            for (const weakType of weakTypesByPart.p5.slice(0, 3)) {
                const matchingQuestions = allQuestions
                    .filter(q => q.classification === weakType.classification)
                    .slice(0, 10)
                    .map(q => q.id);

                homeworkQuestions.push(...matchingQuestions);
            }

            if (homeworkQuestions.length > 0) {
                assignments.push({
                    type: 'type_review',
                    title: `📚 Part 5 유형별 복습`,
                    description: `자주 틀린 유형: ${weakTypesByPart.p5.slice(0, 3).map(t => t.label).join(', ')}`,
                    targetPart: 'p5',
                    weakTypes: weakTypesByPart.p5,
                    questionIds: homeworkQuestions,
                    homeworkUrl: `/homework/part5/custom?assignmentId={assignmentId}`,
                    priority: 2,
                    dueDate: addDays(new Date(), 7)
                });
            }
        }
    } catch (error) {
        console.error('Error loading question data:', error);
    }

    return assignments;
}

/**
 * Distribute Friday homework for a single student
 */
export async function distributeFridayHomework(
    userId: string,
    userName: string,
    partTargets: Record<string, number>
): Promise<{ success: boolean; count: number }> {
    try {
        // 1. Analyze current goal status (based on actual tests)
        const analysis = await analyzeGoalStatus(userId, partTargets);

        // 2. Generate 1st priority homework
        const priorityHomework = await generatePriorityHomework(
            userId,
            userName,
            analysis.weakestPart
        );

        // 3. Generate 2nd priority homework (returns array of assignments)
        const lastFriday = getLastFriday();
        const thisFriday = new Date();
        const typeReviewHomeworks = await generateTypeReviewHomework(
            userId,
            lastFriday,
            thisFriday
        );

        // 4. Save to Assignments collection
        const homeworks = [priorityHomework, ...typeReviewHomeworks].filter(Boolean);

        for (const hw of homeworks) {
            await addDoc(collection(db, 'Assignments'), {
                targetStudentId: userId,
                targetStudentName: userName,
                ...hw,
                createdAt: serverTimestamp(),
                status: 'active'
            });
        }

        return { success: true, count: homeworks.length };

    } catch (error) {
        console.error(`Error distributing homework for ${userId}:`, error);
        return { success: false, count: 0 };
    }
}

/**
 * Distribute homework to all active students
 */
export async function distributeFridayHomeworkToAll(): Promise<{
    success: boolean;
    totalStudents: number;
    successCount: number;
    errors: string[];
}> {
    try {
        // Get all active users
        const usersSnapshot = await getDocs(collection(db, 'users'));
        const errors: string[] = [];
        let successCount = 0;

        for (const userDoc of usersSnapshot.docs) {
            const userData = userDoc.data();
            const userId = userDoc.id;
            const userName = userData.userName || userData.name || 'Unknown';
            const partTargets = userData.partTargets || {
                part1_test: 6, part2_test: 25, part3_test: 39, part4_test: 30,
                part5_test: 30, part6_test: 16,
                part7_single: 29, part7_double: 25
            };

            const result = await distributeFridayHomework(userId, userName, partTargets);

            if (result.success) {
                successCount++;
            } else {
                errors.push(`Failed for user ${userId}`);
            }
        }

        return {
            success: true,
            totalStudents: usersSnapshot.size,
            successCount,
            errors
        };

    } catch (error) {
        console.error('Error in batch homework distribution:', error);
        return {
            success: false,
            totalStudents: 0,
            successCount: 0,
            errors: [String(error)]
        };
    }
}

// Helper functions
function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function getLastFriday(): Date {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysToLastFriday = dayOfWeek === 5 ? 7 : (dayOfWeek + 2) % 7;
    return addDays(today, -daysToLastFriday);
}
