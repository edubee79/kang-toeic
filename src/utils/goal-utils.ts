
/**
 * TOEIC Goal Distribution Utility
 */

export const MAX_QUESTIONS = {
    p1: 6, p2: 25, p3: 39, p4: 30,
    p5: 30, p6: 16, p7s: 29, p7d: 25
};

export interface PartTargets {
    p1_goal: number;
    p2_goal: number;
    p3_goal: number;
    p4_goal: number;
    p5_goal: number;
    p6_goal: number;
    p7s_goal: number;
    p7d_goal: number;
}

/**
 * Distributes a target score into part-by-part question goals
 */
export function distributeGoals(totalScore: number, lcScore: number, rcScore: number): PartTargets {
    let lc = Number(lcScore) || 0;
    let rc = Number(rcScore) || 0;
    const total = Number(totalScore) || 0;

    // 1. Synchronize LC/RC if they don't match total
    if (lc + rc !== total || isNaN(lc) || isNaN(rc)) {
        lc = Math.round((total * 0.52) / 5) * 5;
        rc = total - lc;

        if (lc > 495) {
            lc = 495;
            rc = total - 495;
        } else if (rc > 495) {
            rc = 495;
            lc = total - 495;
        }
    }

    // 2. Calculate required correct questions
    // Simple inverse: Score to Qs
    const requiredLC = Math.max(0, Math.min(100, Math.ceil((lc - 10) / 5)));
    const requiredRC = Math.max(0, Math.min(100, Math.ceil((rc + 10) / 5)));

    const distribute = (budget: number, parts: Array<{ key: string; max: number; isPriority: boolean }>) => {
        const result: Record<string, number> = {};
        if (budget <= 0) {
            parts.forEach(p => result[p.key] = 0);
            return result;
        }

        const sumWeightedMax = parts.reduce((sum, p) => {
            const multiplier = p.isPriority ? 1.1 : 0.95;
            return sum + (p.max * multiplier);
        }, 0);

        const A = budget / sumWeightedMax;
        let remainingBudget = budget;

        parts.forEach(p => {
            const multiplier = p.isPriority ? 1.1 : 0.95;
            let target = Math.round(p.max * A * multiplier);
            target = Math.max(0, Math.min(p.max, target));
            result[p.key] = target;
            remainingBudget -= target;
        });

        if (remainingBudget !== 0) {
            const sortedParts = [...parts].sort((a, b) => (b.isPriority ? 1 : 0) - (a.isPriority ? 1 : 0));
            for (const p of sortedParts) {
                const room = remainingBudget > 0 ? (p.max - result[p.key]) : result[p.key];
                if (room > 0) {
                    const add = remainingBudget > 0 ? Math.min(room, remainingBudget) : -Math.min(room, Math.abs(remainingBudget));
                    result[p.key] += add;
                    remainingBudget -= add;
                }
                if (remainingBudget === 0) break;
            }
        }
        return result;
    };

    const lcParts = [
        { key: 'p1_goal', max: MAX_QUESTIONS.p1, isPriority: true },
        { key: 'p2_goal', max: MAX_QUESTIONS.p2, isPriority: true },
        { key: 'p3_goal', max: MAX_QUESTIONS.p3, isPriority: false },
        { key: 'p4_goal', max: MAX_QUESTIONS.p4, isPriority: false }
    ];

    const rcParts = [
        { key: 'p5_goal', max: MAX_QUESTIONS.p5, isPriority: true },
        { key: 'p6_goal', max: MAX_QUESTIONS.p6, isPriority: true },
        { key: 'p7s_goal', max: MAX_QUESTIONS.p7s, isPriority: false },
        { key: 'p7d_goal', max: MAX_QUESTIONS.p7d, isPriority: false }
    ];

    const lcRes = distribute(requiredLC, lcParts);
    const rcRes = distribute(requiredRC, rcParts);

    return {
        ...lcRes, ...rcRes
    } as PartTargets;
}
