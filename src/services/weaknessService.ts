
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, getDoc, doc, orderBy } from 'firebase/firestore';
import { getClassificationLabel } from '@/data/toeic/reading/part5/classification';
import { analyzeGoalStatus } from './goalAnalysisService';
import { isActualTest, mapToPartKey, calculateCorrectCount, ManagerResult } from '@/lib/filters/actualTestFilter';

export interface WeaknessTag {
    tag: string;
    label: string;
    total: number;
    incorrect: number;
    accuracy: number;
    part: string;
}

export interface PartStats {
    target: number;
    average: number;
    latest: number;
    gap: number;
    totalQuestions: number;
}

export interface WeaknessReport {
    userId: string;
    totalAccuracy: number;
    weakestTags: WeaknessTag[];
    partBreakdown: Record<string, number>;
    targetStats: Record<string, PartStats>;
    priorityPart: string;
    analysisMessage: string;
    targetScore: number;
    targetLCScore: number;
    targetRCScore: number;
    totalTargetLC: number;
    totalTargetRC: number;
    currentTotalLC: number;
    currentTotalRC: number;
    weakestPart?: {
        part: string;
        gap: number;
        achievementRate: number;
        evaluationMessage: string;
        recommendationReason: string;
    };
}

// Part key mapping for compatibility
const PART_KEY_MAP: Record<string, string> = {
    'part1_test': 'p1',
    'part2_test': 'p2',
    'part3_test': 'p3',
    'part4_test': 'p4',
    'part5_test': 'p5',
    'part6_test': 'p6',
    'part7_single': 'p7_single',
    'part7_double': 'p7_double'
};

export const WeaknessService = {
    analyzeUserWeakness: async (userId: string): Promise<WeaknessReport> => {
        try {
            // 1. Get user data and targets from 'Winter_Users' collection
            const userRef = doc(db, 'Winter_Users', userId);
            const userSnap = await getDoc(userRef);

            if (!userSnap.exists()) {
                console.warn(`User ${userId} not found in Winter_Users collection`);
                throw new Error('User not found');
            }

            const userData = userSnap.data();

            // Use actual user targets, with fallback to defaults only if missing
            const partTargets = userData.partTargets || {
                part1_test: 6, part2_test: 25, part3_test: 39, part4_test: 30,
                part5_test: 30, part6_test: 16,
                part7_single: 29, part7_double: 25
            };

            console.log('📊 User targets loaded:', {
                userId,
                targetScore: userData.targetScore,
                partTargets
            });

            // 2. Use new goal analysis service (partTargets already in p1/p2 format)
            const goalAnalysis = await analyzeGoalStatus(userId, partTargets);

            // 3. Get all results for tag analysis
            const resultsRef = collection(db, 'Manager_Results');
            const q = query(resultsRef, where('studentId', '==', userId), orderBy('timestamp', 'desc'));
            const snapshot = await getDocs(q);

            // 4. Analyze tags from actual tests only
            const tagStats: Record<string, { total: number; incorrect: number; part: string }> = {};

            snapshot.docs.forEach(docSnap => {
                const data = docSnap.data() as ManagerResult;

                // Only analyze actual tests
                if (!isActualTest(data)) return;

                if (data.incorrectQuestions && Array.isArray(data.incorrectQuestions)) {
                    data.incorrectQuestions.forEach((q: { id: string, classification?: string }) => {
                        const tag = q.classification || 'Unknown';
                        if (tag === 'Unknown') return;

                        if (!tagStats[tag]) {
                            tagStats[tag] = { total: 0, incorrect: 0, part: mapToPartKey(data) };
                        }
                        tagStats[tag].total++;
                        tagStats[tag].incorrect++;
                    });
                }
            });

            // 5. Build weakest tags (3+ incorrect)
            const weakestTags: WeaknessTag[] = Object.entries(tagStats)
                .map(([tag, stat]) => ({
                    tag,
                    label: getClassificationLabel(tag) || tag,
                    total: stat.total,
                    incorrect: stat.incorrect,
                    accuracy: stat.total > 0 ? Math.round(((stat.total - stat.incorrect) / stat.total) * 100) : 0,
                    part: stat.part
                }))
                .filter(tag => tag.incorrect >= 3)
                .sort((a, b) => b.incorrect - a.incorrect)
                .slice(0, 5);

            // 6. Build targetStats (keys already in p1/p2 format)
            const targetStats: Record<string, PartStats> = {};
            const partBreakdown: Record<string, number> = {};

            goalAnalysis.partGoals.forEach(pg => {
                targetStats[pg.part] = {
                    target: pg.targetScore,
                    average: pg.averageScore,
                    latest: pg.latestScore,
                    gap: pg.gap,
                    totalQuestions: pg.completedTests
                };
                partBreakdown[pg.part] = pg.latestScore;
            });

            // 7. Calculate LC/RC totals
            const lcParts = ['p1', 'p2', 'p3', 'p4'];
            const rcParts = ['p5', 'p6', 'p7_single', 'p7_double'];

            const totalTargetLC = lcParts.reduce((sum, p) => sum + (targetStats[p]?.target || 0), 0);
            const totalTargetRC = rcParts.reduce((sum, p) => sum + (targetStats[p]?.target || 0), 0);
            const currentTotalLC = lcParts.reduce((sum, p) => sum + (targetStats[p]?.latest || 0), 0);
            const currentTotalRC = rcParts.reduce((sum, p) => sum + (targetStats[p]?.latest || 0), 0);

            return {
                userId,
                totalAccuracy: goalAnalysis.overallAchievement,
                weakestTags,
                partBreakdown,
                targetStats,
                priorityPart: goalAnalysis.weakestPart.part,
                analysisMessage: goalAnalysis.weakestPart.evaluationMessage,
                targetScore: userData.targetScore || 850,
                targetLCScore: userData.targetLC || 450,
                targetRCScore: userData.targetRC || 400,
                totalTargetLC,
                totalTargetRC,
                currentTotalLC,
                currentTotalRC,
                weakestPart: goalAnalysis.weakestPart
            };

        } catch (error) {
            console.error('Error analyzing user weakness:', error);
            throw error;
        }
    }
};
