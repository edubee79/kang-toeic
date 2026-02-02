
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, getDoc, doc, orderBy } from 'firebase/firestore';
import { getToeicTagLabel } from '@/utils/toeic-tag-utils';
import { analyzeGoalStatus } from './goalAnalysisService';
import { isActualTest, mapToPartKey, calculateCorrectCount, ManagerResult } from '@/lib/filters/actualTestFilter';
import { distributeGoals } from '@/utils/goal-utils';

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

export const WeaknessService = {
    analyzeUserWeakness: async (userId: string): Promise<WeaknessReport> => {
        try {
            // 1. Get user data and targets from 'Winter_Users' collection
            const userRef = doc(db, 'Winter_Users', userId);
            const userSnap = await getDoc(userRef);

            if (!userSnap.exists()) {
                console.warn(`User ${userId} not found in Winter_Users collection. Returning default report.`);
                const defaultStats = { target: 0, average: 0, latest: 0, gap: 0, totalQuestions: 0 };
                const parts = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7_single', 'p7_double'];
                const targetStats = parts.reduce((acc, part) => ({ ...acc, [part]: defaultStats }), {});

                return {
                    userId,
                    totalAccuracy: 0,
                    weakestTags: [],
                    partBreakdown: {},
                    targetStats: targetStats as Record<string, PartStats>,
                    priorityPart: 'p1',
                    analysisMessage: '사용자 데이터가 없습니다.',
                    targetScore: 850,
                    targetLCScore: 450,
                    targetRCScore: 400,
                    totalTargetLC: 450,
                    totalTargetRC: 400,
                    currentTotalLC: 0,
                    currentTotalRC: 0
                };
            }


            const userData = userSnap.data();

            // 2. Use targets from userData (standardizing keys)
            const pts = userData.partTargets || {};
            let partTargets = {
                p1: pts.p1_goal ?? pts.p1 ?? 0,
                p2: pts.p2_goal ?? pts.p2 ?? 0,
                p3: pts.p3_goal ?? pts.p3 ?? 0,
                p4: pts.p4_goal ?? pts.p4 ?? 0,
                p5: pts.p5_goal ?? pts.p5 ?? 0,
                p6: pts.p6_goal ?? pts.p6 ?? 0,
                p7s: pts.p7s_goal ?? pts.p7_single ?? pts.p7s ?? 0,
                p7d: pts.p7d_goal ?? pts.p7_double ?? pts.p7d ?? 0
            };

            // ✅ NEW: Fallback Allocation if targets are completely missing
            const isTargetsEmpty = Object.values(partTargets).every(v => v === 0);
            if (isTargetsEmpty) {
                const targetScore = userData.targetScore || 850;
                const targetLC = userData.targetLC || 450;
                const targetRC = userData.targetRC || 400;
                const autoTargets = distributeGoals(targetScore, targetLC, targetRC);
                partTargets = {
                    p1: autoTargets.p1_goal,
                    p2: autoTargets.p2_goal,
                    p3: autoTargets.p3_goal,
                    p4: autoTargets.p4_goal,
                    p5: autoTargets.p5_goal,
                    p6: autoTargets.p6_goal,
                    p7s: autoTargets.p7s_goal,
                    p7d: autoTargets.p7d_goal
                };
            }

            const goalAnalysis = await analyzeGoalStatus(userId, partTargets);

            // 3. Optional: Check for pre-calculated summary to speed up scores
            const summary = userData.performanceSummary;

            // 4. Get all results for tag analysis (Still needed for specific tag counts)
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
                    label: getToeicTagLabel(tag) || tag,
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

            // 7. Calculate Actual Total Score (No Projection as requested)
            // Logic: Only sum what the student has actually solved. Unattempted parts = 0.
            const lcParts = ['p1', 'p2', 'p3', 'p4'];
            const rcParts = ['p5', 'p6', 'p7s', 'p7d', 'p7f'];

            let actualLCCount = 0;
            let actualRCCount = 0;

            lcParts.forEach(p => {
                actualLCCount += (targetStats[p]?.latest || 0);
            });

            // Handle Part 7: prioritize single/double, fallback to total p7f
            const p7s = targetStats['p7s'];
            const p7d = targetStats['p7d'];
            const p7full = targetStats['p7f'];

            if ((p7s?.totalQuestions || 0) > 0 || (p7d?.totalQuestions || 0) > 0) {
                actualRCCount += (p7s?.latest || 0);
                actualRCCount += (p7d?.latest || 0);
            } else if ((p7full?.totalQuestions || 0) > 0) {
                actualRCCount += p7full.latest;
            }

            // Other RC parts
            ['p5', 'p6'].forEach(p => {
                actualRCCount += (targetStats[p]?.latest || 0);
            });

            // TOEIC Score Conversion (Simplified but accurate)
            const calculateToeicScore = (count: number, isLC: boolean) => {
                if (count === 0) return 0;
                if (isLC) return (count * 5) + 10;
                return (count * 5) - 10;
            };

            const currentTotalLC = calculateToeicScore(actualLCCount, true);
            const currentTotalRC = calculateToeicScore(actualRCCount, false);

            // Calculate Target Totals
            let targetLCCount = 0;
            lcParts.forEach(p => targetLCCount += (targetStats[p]?.target || 0));
            let targetRCCount = (targetStats['p7s']?.target || 0) + (targetStats['p7d']?.target || 0);
            ['p5', 'p6'].forEach(p => targetRCCount += (targetStats[p]?.target || 0));

            const totalTargetLC = calculateToeicScore(targetLCCount, true);
            const totalTargetRC = calculateToeicScore(targetRCCount, false);

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
    },

    getWeeklyDetailedStats: async (userId: string) => {
        try {
            const resultsRef = collection(db, 'Manager_Results');
            const oneWeekAgo = new Date();
            oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

            const q = query(
                resultsRef,
                where('studentId', '==', userId),
                where('timestamp', '>=', oneWeekAgo),
                orderBy('timestamp', 'desc')
            );

            const snapshot = await getDocs(q);
            const stats: any = {
                totalSolved: 0,
                parts: {} as any,
                weakestTags: [] as any[]
            };

            const tagMap: Record<string, { total: number, incorrect: number }> = {};

            snapshot.docs.forEach(docSnap => {
                const data = docSnap.data();
                const part = data.unit || 'Unknown';
                if (!stats.parts[part]) {
                    stats.parts[part] = { solved: 0, correct: 0, timeSpent: 0 };
                }

                const correctCount = data.score || 0;
                const totalCount = data.total || 0;

                stats.parts[part].solved += totalCount;
                stats.parts[part].correct += correctCount;
                stats.parts[part].timeSpent += (data.timeSpent || 0);
                stats.totalSolved += totalCount;

                if (data.incorrectQuestions) {
                    data.incorrectQuestions.forEach((iq: any) => {
                        const tag = iq.classification || 'Unknown';
                        if (!tagMap[tag]) tagMap[tag] = { total: 0, incorrect: 0 };
                        tagMap[tag].incorrect++;
                    });
                }
            });

            // Flatten weak tags
            stats.weakestTags = Object.entries(tagMap)
                .map(([tag, val]) => ({
                    tag,
                    label: getToeicTagLabel(tag),
                    incorrectCount: val.incorrect
                }))
                .sort((a, b) => b.incorrectCount - a.incorrectCount)
                .slice(0, 5);

            return stats;
        } catch (error) {
            console.error('Error getting weekly stats:', error);
            return null;
        }
    }
};
