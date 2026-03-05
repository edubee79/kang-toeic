
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, getDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { isActualTest, mapToPartKey, ManagerResult } from '@/lib/filters/actualTestFilter';

export interface PerformancePartStat {
    latest: number;
    average: number;
    completedCount: number;
}

export interface PerformanceSummary {
    predictedTotal: number;
    predictedLC: number;
    predictedRC: number;
    lastUpdated: any;
    partStats: Record<string, PerformancePartStat>;
}

const PART_MAX: Record<string, number> = {
    p1: 6, p2: 25, p3: 39, p4: 30,
    p5: 30, p6: 16, p7s: 29, p7d: 25, p7f: 54
};

const LONG_TO_SHORT: Record<string, string> = {
    'part1_test': 'p1', 'part2_test': 'p2', 'part3_test': 'p3', 'part4_test': 'p4',
    'part5_test': 'p5', 'part6_test': 'p6',
    'part7_single': 'p7s', 'part7_double': 'p7d', 'part7_triple': 'p7d', 'part7_test': 'p7f',
    'p1': 'p1', 'p2': 'p2', 'p3': 'p3', 'p4': 'p4', 'p5': 'p5', 'p6': 'p6', 'p7s': 'p7s', 'p7d': 'p7d', 'p7t': 'p7d', 'p7f': 'p7f', 'p7m': 'p7d'
};

export const PerformanceSyncService = {
    /**
     * Re-calculate and sync the entire performance summary for a user
     */
    async syncUserSummary(userId: string): Promise<PerformanceSummary | null> {
        try {
            const q = query(
                collection(db, 'Manager_Results'),
                where('studentId', '==', userId)
            );

            const snapshot = await getDocs(q);
            const docs = snapshot.docs.sort((a, b) => {
                const tA = a.data().timestamp?.toMillis() || a.data().createdAt?.toMillis() || 0;
                const tB = b.data().timestamp?.toMillis() || b.data().createdAt?.toMillis() || 0;
                return tB - tA; // Latest first
            });

            const scoreSums: Record<string, number> = {};
            const scoreCounts: Record<string, number> = {};
            const latestScore: Record<string, number> = {};

            docs.forEach(docSnap => {
                const data = docSnap.data() as ManagerResult;
                if (!isActualTest(data)) return;

                const longKey = mapToPartKey(data);
                const type = LONG_TO_SHORT[longKey] || longKey;

                if (typeof data.score === 'number' && PART_MAX[type] !== undefined) {
                    const max = PART_MAX[type];
                    let correct = 0;

                    if (data.total) {
                        correct = data.score <= data.total ? data.score : Math.round((data.score / 100) * data.total);
                    } else {
                        correct = data.score <= max ? data.score : Math.round((data.score / 100) * max);
                    }
                    correct = Math.min(correct, max);

                    // ✅ NEW: Hybrid Distribution for Full Part 7 (p7f) to support legacy data
                    if (type === 'p7f') {
                        // Ratio based on actual TOEIC: Single (29 qs), Double/Triple (25 qs)
                        const sCorrect = Math.round(correct * (29 / 54));
                        const dCorrect = correct - sCorrect;

                        [['p7s', sCorrect], ['p7d', dCorrect]].forEach(([subKey, curCorrect]) => {
                            const sub = subKey as string;
                            const val = curCorrect as number;
                            scoreSums[sub] = (scoreSums[sub] || 0) + val;
                            scoreCounts[sub] = (scoreCounts[sub] || 0) + 1;
                            if (latestScore[sub] === undefined) latestScore[sub] = val;
                        });
                    } else {
                        scoreSums[type] = (scoreSums[type] || 0) + correct;
                        scoreCounts[type] = (scoreCounts[type] || 0) + 1;

                        if (latestScore[type] === undefined) {
                            latestScore[type] = correct;
                        }
                    }
                }
            });

            // Build partStats
            const partStats: Record<string, PerformancePartStat> = {};
            const parts = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7s', 'p7d'];

            parts.forEach(p => {
                const count = scoreCounts[p] || 0;
                partStats[p] = {
                    latest: latestScore[p] || 0,
                    average: count > 0 ? Number((scoreSums[p] / count).toFixed(1)) : 0,
                    completedCount: count
                };
            });

            // Calculate Predicted Score (Hybrid Logic)
            const lcParts = ['p1', 'p2', 'p3', 'p4'];
            const rcParts = ['p5', 'p6', 'p7s', 'p7d'];
            const allParts = [...lcParts, ...rcParts];

            // Check if all parts have actual score data (> 0 answers correct/attempted)
            const hasCompleteData = allParts.every(p => partStats[p].latest > 0);

            const calculateToeicScore = (count: number, isLC: boolean) => {
                if (count === 0) return 5;
                let score = 5;

                if (hasCompleteData) {
                    // Strict Hacker's formula for students with full data
                    if (isLC) {
                        score = Math.round(((count - 9) / 0.18) / 5) * 5;
                    } else {
                        score = Math.round(((count - 21) / 0.16) / 5) * 5;
                    }
                } else {
                    // Gradual/Linear formula for new students with partial data
                    if (isLC) {
                        score = (count * 5) + 10;
                    } else {
                        score = (count * 5) - 10;
                    }
                }

                return Math.max(5, Math.min(495, score));
            };

            const lcCorrect = lcParts.reduce((sum, p) => sum + (partStats[p].latest), 0);
            const rcCorrect = rcParts.reduce((sum, p) => sum + (partStats[p].latest), 0);

            const predictedLC = calculateToeicScore(lcCorrect, true);
            const predictedRC = calculateToeicScore(rcCorrect, false);

            const summary: PerformanceSummary = {
                predictedTotal: predictedLC + predictedRC,
                predictedLC,
                predictedRC,
                lastUpdated: serverTimestamp(),
                partStats
            };

            // 1. Find the correct Firebase Document ID for the user
            let targetDocRef = doc(db, 'Winter_Users', userId);
            let userSnap = await getDoc(targetDocRef);

            if (!userSnap.exists()) {
                const userQuery = query(collection(db, "Winter_Users"), where("userId", "==", userId));
                const snap1 = await getDocs(userQuery);
                if (!snap1.empty) {
                    targetDocRef = snap1.docs[0].ref;
                } else {
                    const q2 = query(collection(db, "Winter_Users"), where("username", "==", userId));
                    const snap2 = await getDocs(q2);
                    if (!snap2.empty) {
                        targetDocRef = snap2.docs[0].ref;
                    }
                }
            }

            // 2. Update Winter_Users document
            await updateDoc(targetDocRef, {
                performanceSummary: summary
            });

            return summary;
        } catch (error) {
            console.error('Error syncing user performance summary:', error);
            return null;
        }
    }
};
