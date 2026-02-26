export const MAX_Q: Record<string, number> = {
    p1_goal: 6, p2_goal: 25, p3_goal: 39, p4_goal: 30,
    p5_goal: 30, p6_goal: 16, p7s_goal: 29, p7d_goal: 25, p7f_goal: 54
};

export const getRequiredCounts = (targetLC: number, targetRC: number) => {
    return {
        requiredLC: Math.min(100, Math.round(targetLC * 0.18 + 9)),
        requiredRC: Math.min(100, Math.round(targetRC * 0.16 + 21))
    };
};

export interface DistributedGoals {
    targetScore: number;
    targetLC: number;
    targetRC: number;
    partTargets: {
        p1_goal: number;
        p2_goal: number;
        p3_goal: number;
        p4_goal: number;
        p5_goal: number;
        p6_goal: number;
        p7s_goal: number;
        p7d_goal: number;
        p7f_goal: number;
    };
}

/**
 * AI logic to distribute total target score into part-specific goals.
 * Calibrated based on TOEIC scoring tables and difficulty distribution.
 */
export function calculateDistributedGoals(totalScore: number): DistributedGoals {
    // 1. Determine LC/RC split (LC is generally +50 over RC for same score difficulty)
    let targetLC: number;
    let targetRC: number;

    if (totalScore >= 900) {
        // High Scorer Strategy (Priority on almost perfect LC)
        targetLC = 480 + Math.max(0, (totalScore - 900) * 0.5);
        targetLC = Math.min(495, Math.ceil(targetLC / 5) * 5);
        targetRC = totalScore - targetLC;
    } else {
        // Normal Strategy (LC +50 rule)
        targetLC = Math.ceil((totalScore + 50) / 2 / 5) * 5;
        targetRC = totalScore - targetLC;
        if (targetLC > 495) {
            targetLC = 495;
            targetRC = totalScore - 495;
        }
    }

    // 2. Determine Required Correct Counts (Hackers Table Calibration)
    const reqLC = Math.min(100, Math.ceil(targetLC / 5)); // Over-simplified for linear estimation
    const reqRC = Math.min(100, Math.ceil(targetRC / 5) + 4); // RC needs slightly more correct for same score

    // 3. Helper for Proportional Distribution
    const distribute = (budget: number, parts: { key: string, cap?: number }[]) => {
        const result: Record<string, number> = {};
        const totalCapacity = parts.reduce((sum, p) => sum + (p.cap ?? MAX_Q[p.key]), 0);

        // First pass: Proportional allocation
        let allocated = 0;
        parts.forEach(p => {
            const max = p.cap ?? MAX_Q[p.key];
            const proportion = max / totalCapacity;
            const target = Math.floor(budget * proportion);
            result[p.key] = Math.min(target, max);
            allocated += result[p.key];
        });

        // Second pass: Distribute remainder evenly to parts that have room
        let remaining = budget - allocated;
        while (remaining > 0) {
            let spaceFound = false;
            for (const p of parts) {
                if (remaining <= 0) break;
                const max = p.cap ?? MAX_Q[p.key];
                if (result[p.key] < max) {
                    result[p.key]++;
                    remaining--;
                    spaceFound = true;
                }
            }
            if (!spaceFound) break; // All parts capped
        }
        return result;
    };

    // 4. Distribute to Parts
    const lcResult = distribute(reqLC, [
        { key: 'p1_goal' }, { key: 'p2_goal' }, { key: 'p4_goal' }, { key: 'p3_goal' }
    ]);

    // RC Dynamic Capacity based on score level (difficulty adjustment)
    let p5Cap = MAX_Q.p5_goal;
    if (totalScore < 750) p5Cap = 25;
    if (totalScore < 600) p5Cap = 20;

    const rcResult = distribute(reqRC, [
        { key: 'p5_goal', cap: p5Cap }, { key: 'p6_goal' }, { key: 'p7s_goal' }, { key: 'p7d_goal' }
    ]);

    return {
        targetScore: totalScore,
        targetLC,
        targetRC,
        partTargets: {
            p1_goal: lcResult.p1_goal || 0,
            p2_goal: lcResult.p2_goal || 0,
            p3_goal: lcResult.p3_goal || 0,
            p4_goal: lcResult.p4_goal || 0,
            p5_goal: rcResult.p5_goal || 0,
            p6_goal: rcResult.p6_goal || 0,
            p7s_goal: rcResult.p7s_goal || 0,
            p7d_goal: rcResult.p7d_goal || 0,
            p7f_goal: (rcResult.p7s_goal || 0) + (rcResult.p7d_goal || 0)
        }
    };
}
