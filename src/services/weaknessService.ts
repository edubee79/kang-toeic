
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, getDoc, doc, orderBy, limit } from 'firebase/firestore';
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
    latestWeeklyReport?: {
        content: string;
        createdAt: string;
        statsSummarized?: any;
    };
    weakestPart?: {
        part: string;
        gap: number;
        achievementRate: number;
        evaluationMessage: string;
        recommendationReason: string;
    };
}

// --- Caching Logic ---
interface CachedReport {
    data: WeaknessReport;
    timestamp: number;
}
const CACHE_KEY_PREFIX = 'weakness_report_';
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export const WeaknessService = {
    // Force clear cache for a specific user (useful after finishing a test)
    clearCache: (userId: string) => {
        if (typeof window !== 'undefined') {
            sessionStorage.removeItem(`${CACHE_KEY_PREFIX}${userId}`);
        }
    },

    analyzeUserWeakness: async (userId: string, forceRefresh: boolean = false): Promise<WeaknessReport> => {
        try {
            // Check cache first if not force refreshing
            if (!forceRefresh && typeof window !== 'undefined') {
                const cached = sessionStorage.getItem(`${CACHE_KEY_PREFIX}${userId}`);
                if (cached) {
                    const { data, timestamp }: CachedReport = JSON.parse(cached);
                    if (Date.now() - timestamp < CACHE_TTL) {
                        return data;
                    }
                }
            }

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

            // 3. Get all results for analysis (Fetch once, reuse for goal analysis and tag analysis)
            const resultsRef = collection(db, 'Manager_Results');
            const q = query(resultsRef, where('studentId', '==', userId));
            const snapshot = await getDocs(q);

            const goalAnalysis = await analyzeGoalStatus(userId, partTargets, snapshot);
            const summary = userData.performanceSummary;

            // 4. Analyze tags from actual tests only
            const tagStats: Record<string, { total: number; incorrect: number; part: string }> = {};

            snapshot.docs.forEach(docSnap => {
                const data = docSnap.data() as ManagerResult;

                // Only analyze actual tests
                if (!isActualTest(data)) return;

                if (data.incorrectQuestions && Array.isArray(data.incorrectQuestions)) {
                    const isPart3or4 = data.type === 'part3_test' || data.type === 'part4_test';

                    data.incorrectQuestions.forEach((q: { id: string, classification?: string, contextType?: string }) => {
                        let tag: string;

                        // For Part 3/4: use contextType UNLESS it's INFERENCE or GRAPHIC
                        if (isPart3or4) {
                            const classification = q.classification || '';
                            const isSpecialType = classification === 'INFERENCE' || classification === 'GRAPHIC';

                            if (isSpecialType) {
                                // Special question types: track by classification
                                tag = classification;
                            } else {
                                // Normal questions: track by contextType (conversation situation)
                                tag = q.contextType || 'Unknown';
                            }
                        } else {
                            // For other parts (1,2,5,6,7): use classification as before
                            tag = q.classification || 'Unknown';
                        }

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

            // TOEIC Score Conversion (Realistic Calibration - Calibrated to Hackers table)
            // LC: Score = (CorrectCount - 9) / 0.18
            // RC: Score = (CorrectCount - 21) / 0.16
            const calculateToeicScore = (count: number, isLC: boolean) => {
                if (count === 0) return 5;
                let score;
                if (isLC) {
                    score = Math.round(((count - 9) / 0.18) / 5) * 5;
                } else {
                    score = Math.round(((count - 21) / 0.16) / 5) * 5;
                }
                return Math.max(5, Math.min(495, score));
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

            const report: WeaknessReport = {
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
                latestWeeklyReport: userData.latestWeeklyReport,
                weakestPart: goalAnalysis.weakestPart
            };

            // Save to cache
            if (typeof window !== 'undefined') {
                sessionStorage.setItem(`${CACHE_KEY_PREFIX}${userId}`, JSON.stringify({
                    data: report,
                    timestamp: Date.now()
                }));
            }

            return report;

        } catch (error) {
            console.error('Error analyzing user weakness:', error);
            throw error;
        }
    },

    getWeeklyDetailedStats: async (userId: string, periodDays: number = 7) => {
        try {
            const resultsRef = collection(db, 'Manager_Results');
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - periodDays);

            // Fetch all for studentId to avoid index requirement
            const q = query(
                resultsRef,
                where('studentId', '==', userId)
            );

            const snapshot = await getDocs(q);
            const allDocs = snapshot.docs.map(doc => doc.data() as ManagerResult);

            // Filter by date in memory
            const recentDocs = allDocs.filter(d => {
                const dDate = d.timestamp ? (typeof d.timestamp === 'string' ? new Date(d.timestamp) : d.timestamp.toDate()) : new Date(0);
                return dDate >= startDate;
            });

            const stats: any = {
                totalSolved: 0,
                parts: {} as any,
                weakestTags: [] as any[]
            };

            const tagMap: Record<string, { total: number, incorrect: number }> = {};

            recentDocs.forEach(data => {
                const part = mapToPartKey(data);
                if (part === 'unknown') return; // Skip non-TOEIC data

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
                        const tag = iq.classification || iq.contextType || 'Unknown';
                        if (tag === 'Unknown') return;
                        if (!tagMap[tag]) tagMap[tag] = { total: 0, incorrect: 0, part: mapToPartKey(data) };
                        tagMap[tag].incorrect++;
                    });
                }
            });

            // Flatten weak tags
            stats.weakestTags = Object.entries(tagMap)
                .map(([tag, val]) => ({
                    tag,
                    label: getToeicTagLabel(tag),
                    incorrectCount: val.incorrect,
                    part: (val as any).part || ''
                }))
                .sort((a, b) => b.incorrectCount - a.incorrectCount)
                .slice(0, 10);

            return stats;
        } catch (error) {
            console.error('Error getting weekly stats:', error);
            // Return empty stats instead of null to prevent downstream crashes
            return { totalSolved: 0, parts: {}, weakestTags: [] };
        }
    },

    getAiRecommendations: async (userId: string) => {
        try {
            const resultsRef = collection(db, 'Assignments');
            const q = query(
                resultsRef,
                where('targetStudentId', '==', userId),
                where('isAiGenerated', '==', true)
            );
            const snapshot = await getDocs(q);
            const allAssignments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            // Client-side sorting: show ALL current AI assignments (since old ones are batch-deleted upon generation)
            // Sort primarily by dayOffset, then Voca before Drill for the same day
            return allAssignments
                .sort((a: any, b: any) => {
                    const dayA = a.dayOffset || 0;
                    const dayB = b.dayOffset || 0;
                    if (dayA !== dayB) return dayA - dayB;

                    const isVocaA = a.type === 'voca_boost' ? -1 : 1;
                    const isVocaB = b.type === 'voca_boost' ? -1 : 1;
                    return isVocaA - isVocaB;
                });
        } catch (error) {
            console.error('Error getting AI recommendations:', error);
            return [];
        }
    }
};
