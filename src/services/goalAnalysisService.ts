/**
 * Goal Analysis Service
 * 
 * Purpose: Analyze student performance against their goals
 * Based on actual test results only (excludes drill mode, grammar, etc.)
 * 
 * IMPORTANT: Uses SAME logic as student dashboard's fetchStats
 */

import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { isActualTest, mapToPartKey, ManagerResult } from '@/lib/filters/actualTestFilter';

export interface PartGoal {
    part: string;
    targetScore: number;
    averageScore: number;
    latestScore: number;
    gap: number; // Latest - Target (negative means below target)
    achievementRate: number; // (Latest / Target) * 100
    completedTests: number;
}

export interface WeakestPart {
    part: string;
    gap: number;
    achievementRate: number;
    evaluationMessage: string;
    recommendationReason: string;
}

export interface GoalAnalysisResult {
    partGoals: PartGoal[];
    weakestPart: WeakestPart;
    lcAchievement: number;
    rcAchievement: number;
    overallAchievement: number;
}

/**
 * Calculate statistics - SAME logic as student dashboard
 */
async function calculateActualTestStats(userId: string): Promise<Record<string, { scores: number[], latest: number, average: number }>> {
    const q = query(
        collection(db, 'Manager_Results'),
        where('studentId', '==', userId)
    );

    const snapshot = await getDocs(q);

    // PART_MAX from student dashboard
    const PART_MAX: Record<string, number> = {
        part1_test: 6, part2_test: 25, part3_test: 39, part4_test: 30,
        part5_test: 30, part6_test: 16, part7_test: 54, part7_single: 29, part7_double: 25
    };

    // Sort by createdAt (same as student dashboard)
    const docs = snapshot.docs.sort((a, b) => {
        const tA = a.data().createdAt?.toMillis() || a.data().timestamp?.toMillis() || 0;
        const tB = b.data().createdAt?.toMillis() || b.data().timestamp?.toMillis() || 0;
        return tB - tA; // Latest first
    });

    const scoreSums: Record<string, number> = {};
    const scoreCounts: Record<string, number> = {};
    const latestScore: Record<string, number> = {};

    docs.forEach(doc => {
        const data = doc.data() as ManagerResult;

        // ✅ ONLY DIFFERENCE: Filter for actual tests
        if (!isActualTest(data)) return;

        const type = mapToPartKey(data);

        // EXACT SAME score calculation as student dashboard
        if (typeof data.score === 'number') {
            let correct = 0;
            if (data.total) {
                correct = data.score <= data.total
                    ? data.score
                    : Math.round((data.score / 100) * data.total);
            } else if (PART_MAX[type]) {
                correct = Math.round((data.score / 100) * PART_MAX[type]);
            }

            scoreSums[type] = (scoreSums[type] || 0) + correct;
            scoreCounts[type] = (scoreCounts[type] || 0) + 1;
            if (latestScore[type] === undefined) latestScore[type] = correct;
        }
    });

    // Build result with converted keys (part1_test -> p1)
    const partStats: Record<string, { scores: number[], latest: number, average: number }> = {};

    const KEY_CONVERSION: Record<string, string> = {
        'part1_test': 'p1',
        'part2_test': 'p2',
        'part3_test': 'p3',
        'part4_test': 'p4',
        'part5_test': 'p5',
        'part6_test': 'p6',
        'part7_single': 'p7_single',
        'part7_double': 'p7_double',
        'part7_test': 'p7'
    };

    Object.keys(scoreSums).forEach(type => {
        const average = Math.round(scoreSums[type] / scoreCounts[type]);
        const convertedKey = KEY_CONVERSION[type] || type;

        partStats[convertedKey] = {
            scores: Array(scoreCounts[type]).fill(average), // Simplified for compatibility
            latest: latestScore[type] || 0,
            average: average
        };
    });

    // Special: Combine p7_single and p7_double into p7 if needed, but dashboard usually wants them separate or p7_single as p7
    if (partStats['p7_single'] && !partStats['p7']) {
        partStats['p7'] = partStats['p7_single'];
    }

    console.log('📊 Actual test stats calculated:', partStats);

    return partStats;
}

/**
 * Calculate goal gap based on LATEST score (not average)
 */
function calculateGoalGap(
    targets: Record<string, number>,
    stats: Record<string, { scores: number[], latest: number, average: number }>
): PartGoal[] {
    return Object.entries(targets).map(([part, target]) => {
        const stat = stats[part] || { scores: [], latest: 0, average: 0 };

        // ✅ CRITICAL: Gap based on LATEST score, not average
        const gap = stat.latest - target;
        const achievementRate = target > 0 ? Math.round((stat.latest / target) * 100) : 0;

        return {
            part,
            targetScore: target,
            averageScore: stat.average,
            latestScore: stat.latest,
            gap: gap,
            achievementRate,
            completedTests: stat.scores.length
        };
    });
}

/**
 * Generate evaluation message based on achievement rate
 */
function generateEvaluationMessage(part: PartGoal): string {
    const partName = part.part.toUpperCase().replace('_TEST', '').replace('_', ' ');
    const gap = Math.abs(part.gap);
    const rate = part.achievementRate;

    if (rate < 50) {
        return `⚠️ ${partName} 달성률 ${rate}%로 매우 낮습니다. 목표 대비 ${gap}개 부족하며, 이는 전체 목표 달성의 가장 큰 장애물입니다. 즉시 집중 보강이 필요합니다.`;
    } else if (rate < 70) {
        return `📊 ${partName} 달성률 ${rate}%입니다. 목표 대비 ${gap}개 부족하며, 전체 성적 향상을 위해 우선적으로 보완해야 합니다.`;
    } else if (rate < 100) {
        return `📈 ${partName} 달성률 ${rate}%로 선방하고 있으나, 목표 대비 ${gap}개 부족합니다. 조금만 더 노력하면 목표 달성이 가능합니다.`;
    } else {
        return `🎉 ${partName} 목표를 달성했습니다! 현재 실력을 유지하며 안정적으로 학습하세요.`;
    }
}

/**
 * Find single weakest part (largest gap below target)
 */
function findWeakestPart(partGoals: PartGoal[]): WeakestPart {
    // ✅ Only consider parts with actual test data
    const partsWithData = partGoals.filter(p => p.completedTests > 0);

    if (partsWithData.length === 0) {
        return {
            part: 'none',
            gap: 0,
            achievementRate: 0,
            evaluationMessage: '📝 아직 실전 모의고사 기록이 없습니다. 먼저 테스트를 풀어보세요!',
            recommendationReason: '데이터 부족'
        };
    }

    const underPerforming = partsWithData.filter(p => p.gap < 0);

    if (underPerforming.length === 0) {
        return {
            part: 'none',
            gap: 0,
            achievementRate: 100,
            evaluationMessage: '🎉 모든 파트에서 목표를 달성했습니다! 현재 실력을 유지하며 안정적으로 학습하세요.',
            recommendationReason: '목표 달성 완료'
        };
    }

    const weakest = underPerforming.sort((a, b) => a.gap - b.gap)[0];

    return {
        part: weakest.part,
        gap: Math.abs(weakest.gap),
        achievementRate: weakest.achievementRate,
        evaluationMessage: generateEvaluationMessage(weakest),
        recommendationReason: `전체 목표 달성에 가장 큰 걸림돌입니다. ${weakest.part.toUpperCase().replace('_TEST', '').replace('_', ' ')} 집중 보강이 필요합니다.`
    };
}

/**
 * Calculate LC/RC achievement rates
 */
function calculateLCRCAchievement(partGoals: PartGoal[]): { lc: number, rc: number, overall: number } {
    const lcParts = partGoals.filter(p => p.part.startsWith('part1') || p.part.startsWith('part2') || p.part.startsWith('part3') || p.part.startsWith('part4'));
    const rcParts = partGoals.filter(p => p.part.startsWith('part5') || p.part.startsWith('part6') || p.part.startsWith('part7'));

    const lcRate = lcParts.length > 0
        ? Math.round(lcParts.reduce((sum, p) => sum + p.achievementRate, 0) / lcParts.length)
        : 0;

    const rcRate = rcParts.length > 0
        ? Math.round(rcParts.reduce((sum, p) => sum + p.achievementRate, 0) / rcParts.length)
        : 0;

    const overallRate = partGoals.length > 0
        ? Math.round(partGoals.reduce((sum, p) => sum + p.achievementRate, 0) / partGoals.length)
        : 0;

    return { lc: lcRate, rc: rcRate, overall: overallRate };
}

/**
 * Main analysis function
 */
export async function analyzeGoalStatus(
    userId: string,
    partTargets: Record<string, number>
): Promise<GoalAnalysisResult> {
    // 1. Normalize partTargets keys (part1_test -> p1, etc.)
    const normalizedTargets: Record<string, number> = {};
    const KEY_MAP: Record<string, string> = {
        'part1_test': 'p1', 'part2_test': 'p2', 'part3_test': 'p3', 'part4_test': 'p4',
        'part5_test': 'p5', 'part6_test': 'p6', 'part7_single': 'p7_single', 'part7_double': 'p7_double',
        'part7_test': 'p7_single' // map combined to single for baseline
    };

    Object.entries(partTargets).forEach(([key, val]) => {
        const normKey = KEY_MAP[key] || key;
        normalizedTargets[normKey] = val;
    });

    const stats = await calculateActualTestStats(userId);
    const partGoals = calculateGoalGap(normalizedTargets, stats);
    const weakestPart = findWeakestPart(partGoals);
    const achievement = calculateLCRCAchievement(partGoals);

    return {
        partGoals,
        weakestPart,
        lcAchievement: achievement.lc,
        rcAchievement: achievement.rc,
        overallAchievement: achievement.overall
    };
}
