import { db } from "@/lib/firebase-admin";

export interface AuditResult {
    trend: { status: 'UP' | 'STAY' | 'DOWN'; value: number };
    effort: { grade: 'Excellent' | 'Good' | 'Normal' | 'Low'; days: number; solved: number; time: number };
    targets: {
        lc: { part: string; currentAccuracy: number; targetAccuracy: number; suggestedIncreaseItems: number; scoreImpact: number } | null;
        rc: { part: string; currentAccuracy: number; targetAccuracy: number; suggestedIncreaseItems: number; scoreImpact: number } | null;
    };
    probes: string[];
    nextWeekScoreGoal: number;
}

export const AuditEngineService = {
    /**
     * Performs a mathematical audit of the student's learning data since the last report.
     */
    async calculateWeeklyAudit(userId: string, currentStats: any, goals: any): Promise<AuditResult> {
        let pastStats = null;
        let lastReportDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

        console.log('[AuditEngine] Step A: Winter_Users 조회 시작');
        const userDoc = await db.collection('Winter_Users').doc(userId).get();
        const userData = userDoc.data();

        if (userData?.latestWeeklyReport) {
            const prev = userData.latestWeeklyReport;
            pastStats = prev.statsSummarized || null;
            lastReportDate = prev.createdAt;
        }

        console.log('[AuditEngine] Step A: Winter_Users 완료');

        // Fetch only by studentId to avoid requiring a composite index for date filtering
        console.log('[AuditEngine] Step B: Manager_Results 조회 시작');
        const resultsSnap = await db.collection('Manager_Results')
            .where('studentId', '==', userId)
            .get();
        console.log('[AuditEngine] Step B: Manager_Results 완료. 문서수:', resultsSnap.size);

        const allResults = resultsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() as any }));

        // Manual filtering in memory for the date range
        const recentResults = allResults.filter(r => {
            const resultDate = r.timestamp ? (typeof r.timestamp === 'string' ? r.timestamp : r.timestamp.toDate?.().toISOString() || r.timestamp) : r.createdAt;
            return resultDate >= lastReportDate;
        });

        // 1. Effort Calculation
        const uniqueDays = new Set(recentResults.map(r => {
            const d = r.timestamp || r.createdAt;
            return typeof d === 'string' ? d.split('T')[0] : '';
        }).filter(Boolean)).size;
        const totalSolvedReal = recentResults.reduce((acc, r) => acc + (r.total || r.solved || 0), 0);
        const totalTime = recentResults.reduce((acc, r) => acc + (r.timeSpent || r.timeTaken || 0), 0);
        const solvingTimeMin = Math.round(totalTime / 60);

        let effortGrade: 'Excellent' | 'Good' | 'Normal' | 'Low' = 'Normal';
        if (uniqueDays >= 5 && totalSolvedReal >= 300) effortGrade = 'Excellent';
        else if (uniqueDays >= 3 && totalSolvedReal >= 150) effortGrade = 'Good';
        else if (totalSolvedReal < 50) effortGrade = 'Low';

        // 2. Trend Calculation
        const currentEst = goals.currentEst || 0;
        const pastEst = pastStats?.prediction || 0;
        const trendDiff = currentEst - pastEst;
        let trendStatus: 'UP' | 'STAY' | 'DOWN' = 'STAY';
        if (trendDiff >= 50) trendStatus = 'UP';
        else if (trendDiff <= -50) trendStatus = 'DOWN';

        // 3. Part Analysis (Fix: 완전한 데이터 기반의 기획 의도 원상 복구)
        const lcParts = ['p1', 'p2', 'p3', 'p4'];
        const rcParts = ['p5', 'p6', 'p7s', 'p7d'];
        const allParts = [...lcParts, ...rcParts];

        const partAnalysis = allParts.map(part => {
            const hist = (goals.targetStats && goals.targetStats[part]) ? goals.targetStats[part] : { target: 0, latest: 0, gap: 0, achievementRate: 0, totalQuestions: 0 };
            const gap = hist.gap || 0; // 히스토리컬(최근 성적) 데이터 기반의 진짜 Gap
            const isProbe = hist.totalQuestions === 0; // 문제 풀이 이력이 아예 0개일 때만 Probe

            // AI 프롬프트 생성을 위한 추가 메타데이터
            const s = (currentStats.parts && currentStats.parts[part]) ? currentStats.parts[part] : { correct: 0, solved: 0 };
            const currentItems = s.correct || 0;
            const accuracyPct = hist.achievementRate || 0; // 이번 주 정답률이 아닌 '최종 목표 달성률(%)'로 변경 (모순 제거)
            const target = hist.target || 0;

            return { part, currentItems, accuracyPct, target, gap, isProbe, solved: s.solved || 0, histLatest: hist.latest || 0 };
        });

        const findWeakest = (list: string[]) => {
            return partAnalysis
                .filter(p => list.includes(p.part) && p.gap < 0) // gap이 음수(<0)면 목표 미달
                .sort((a, b) => a.gap - b.gap)[0]; // 가장 음수가 큰(작은 수) 파트가 1순위 약점
        };

        const weakestLC = findWeakest(lcParts);
        const weakestRC = findWeakest(rcParts);
        const probeParts = partAnalysis.filter(p => p.isProbe).map(p => p.part);

        // 4. Adaptive Goal Calculation (items 기준)
        const calculateGoal = (p: any) => {
            if (!p) return null;
            let targetIncrease = 0;
            const absGap = Math.abs(p.gap); // 부호 떼고 순수 격차량 환산
            if (absGap > 10) targetIncrease = Math.round(absGap * 0.5);
            else if (absGap > 0) targetIncrease = Math.min(absGap, 5);
            return {
                part: p.part,
                currentItems: p.histLatest || 0,     // 최근 푼 문항수 전달
                currentAccuracy: p.accuracyPct,      // 표시용 정확도 %
                targetItems: p.target,               // 목표 문항 수
                targetAccuracy: p.target,            // 하위 호환
                suggestedIncreaseItems: targetIncrease,
                scoreImpact: targetIncrease * 5
            };
        };

        const lcGoal = calculateGoal(weakestLC);
        const rcGoal = calculateGoal(weakestRC);

        return {
            trend: { status: trendStatus, value: trendDiff },
            effort: { grade: effortGrade, days: uniqueDays, solved: totalSolvedReal, time: solvingTimeMin },
            targets: { lc: lcGoal, rc: rcGoal },
            probes: probeParts,
            nextWeekScoreGoal: currentEst + (lcGoal?.scoreImpact || 0) + (rcGoal?.scoreImpact || 0)
        };
    }
};
