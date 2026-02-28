/**
 * Goal Analysis Service
 * 
 * Purpose: Analyze student performance against their goals
 * Based on actual test results only (excludes drill mode, grammar, etc.)
 */

import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { isActualTest, mapToPartKey, ManagerResult } from '@/lib/filters/actualTestFilter';

export interface PartGoal {
    part: string;
    targetScore: number;
    averageScore: number;
    latestScore: number;
    gap: number;
    achievementRate: number;
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
 * Main analysis function
 * @param userId User ID
 * @param partTargets Targets for each part
 * @param preFetchedSnapshot Optional pre-fetched QuerySnapshot from Manager_Results
 */
export async function analyzeGoalStatus(
    userId: string,
    partTargets: Record<string, number>,
    preFetchedSnapshot?: any
): Promise<GoalAnalysisResult> {
    const normalizedTargets: Record<string, number> = {};
    const KEY_MAP: Record<string, string> = {
        'p1': 'p1', 'p1_goal': 'p1', 'part1_test': 'p1',
        'p2': 'p2', 'p2_goal': 'p2', 'part2_test': 'p2',
        'p3': 'p3', 'p3_goal': 'p3', 'part3_test': 'p3',
        'p4': 'p4', 'p4_goal': 'p4', 'part4_test': 'p4',
        'p5': 'p5', 'p5_goal': 'p5', 'part5_test': 'p5',
        'p6': 'p6', 'p6_goal': 'p6', 'part6_test': 'p6',
        'p7s': 'p7s', 'p7s_goal': 'p7s', 'p7_single_goal': 'p7s', 'part7_single': 'p7s',
        'p7d': 'p7d', 'p7d_goal': 'p7d', 'p7_double_goal': 'p7d', 'part7_double': 'p7d',
        'part7_test': 'p7f', 'p7f': 'p7f'
    };

    Object.entries(partTargets).forEach(([key, val]) => {
        const normKey = KEY_MAP[key] || key.replace('_goal', '');
        normalizedTargets[normKey] = val || 0;
    });

    const stats = await calculateActualTestStats(userId, preFetchedSnapshot);
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

/**
 * Calculate statistics
 */
async function calculateActualTestStats(userId: string, preFetchedSnapshot?: any): Promise<Record<string, { scores: number[], latest: number, average: number }>> {
    let snapshot;

    if (preFetchedSnapshot) {
        snapshot = preFetchedSnapshot;
    } else {
        const q = query(
            collection(db, 'Manager_Results'),
            where('studentId', '==', userId)
        );
        snapshot = await getDocs(q);
    }

    // Sort by timestamp DESC (Latest First)
    const docs = snapshot.docs.sort((a: any, b: any) => {
        const tA = a.data().timestamp?.toMillis() || a.data().createdAt?.toMillis() || 0;
        const tB = b.data().timestamp?.toMillis() || b.data().createdAt?.toMillis() || 0;
        return tB - tA;
    });

    const scoreSums: Record<string, number> = {};
    const scoreCounts: Record<string, number> = {};
    const latestScore: Record<string, number> = {};

    const PART_MAX: Record<string, number> = {
        p1: 6, p2: 25, p3: 39, p4: 30,
        p5: 30, p6: 16, p7s: 29, p7d: 25, p7f: 54
    };

    const LONG_TO_SHORT: Record<string, string> = {
        'part1_test': 'p1', 'part2_test': 'p2', 'part3_test': 'p3', 'part4_test': 'p4',
        'part5_test': 'p5', 'part6_test': 'p6',
        'part7_single': 'p7s', 'part7_double': 'p7d', 'part7_triple': 'p7d', 'part7_multi': 'p7d', 'part7_test': 'p7f',
        'p1': 'p1', 'p2': 'p2', 'p3': 'p3', 'p4': 'p4', 'p5': 'p5', 'p6': 'p6', 'p7s': 'p7s', 'p7d': 'p7d', 'p7t': 'p7d', 'p7f': 'p7f', 'p7m': 'p7d'
    };

    docs.forEach((doc: any) => {
        const data = doc.data() as ManagerResult;
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

            if (type === 'p7f') {
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

    const partStats: Record<string, { scores: number[], latest: number, average: number }> = {};
    Object.keys(scoreCounts).forEach(type => {
        const average = Math.round(scoreSums[type] / scoreCounts[type]);
        partStats[type] = {
            scores: Array(scoreCounts[type]).fill(average),
            latest: latestScore[type] || 0,
            average: average
        };
    });

    return partStats;
}

function calculateGoalGap(
    targets: Record<string, number>,
    stats: Record<string, { scores: number[], latest: number, average: number }>
): PartGoal[] {
    return Object.entries(targets).map(([part, target]) => {
        const stat = stats[part] || { scores: [], latest: 0, average: 0 };
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

function findWeakestPart(partGoals: PartGoal[]): WeakestPart {
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
            part: 'none', gap: 0, achievementRate: 100,
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
        recommendationReason: `전체 목표 달성에 가장 큰 걸림돌입니다. ${weakest.part.toUpperCase()} 집중 보강이 필요합니다.`
    };
}

function calculateLCRCAchievement(partGoals: PartGoal[]): { lc: number, rc: number, overall: number } {
    const lcParts = partGoals.filter(p => ['p1', 'p2', 'p3', 'p4'].includes(p.part));
    const rcParts = partGoals.filter(p => ['p5', 'p6', 'p7s', 'p7d', 'p7f'].includes(p.part));

    const getAvg = (list: PartGoal[]) => list.length > 0 ? Math.round(list.reduce((s, p) => s + p.achievementRate, 0) / list.length) : 0;

    return {
        lc: getAvg(lcParts),
        rc: getAvg(rcParts),
        overall: getAvg(partGoals)
    };
}
