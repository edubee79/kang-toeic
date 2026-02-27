import { db } from "@/lib/firebase-admin";
import { WeeklyReportService, ReportGenerationResult } from "@/services/weeklyReportService";

export const BatchReportService = {
    /**
     * Executes batch weekly report generation for all approved students.
     */
    async executeBatch(): Promise<{ total: number; success: number; failed: number; results: ReportGenerationResult[] }> {
        console.log("🚀 Starting Batch Weekly Report Generation...");

        const usersSnap = await db.collection('Winter_Users')
            .where('status', '==', 'approved')
            .get();

        const results: ReportGenerationResult[] = [];
        let successCount = 0;
        let failCount = 0;

        for (const userDoc of usersSnap.docs) {
            const userId = userDoc.id;
            const userData = userDoc.data();
            const studentName = userData.userName || userData.name || "학생";

            console.log(`Processing ${studentName} (${userId})...`);

            try {
                // 1. Fetch Weekly Stats (Last 7 days)
                const stats = await this._getWeeklyStatsForUser(userId);

                // 2. Prepare Goals
                const goals = {
                    targetScore: userData.targetScore || 850,
                    targetLC: userData.targetLC || 450,
                    targetRC: userData.targetRC || 400,
                    currentEst: userData.performanceSummary?.predictedTotal || 0,
                    targetStats: userData.partTargets || {} // Assuming partTargets are correctly formatted
                };

                // 3. Prepare Weakest Tags (from summary or fetch)
                const weakestTags = await this._getWeakestTagsForUser(userId);

                const result = await WeeklyReportService.generateReportForUser(
                    userId,
                    studentName,
                    stats,
                    goals,
                    weakestTags
                );

                results.push(result);
                if (result.success) successCount++;
                else failCount++;

            } catch (err: any) {
                console.error(`Failed to process ${userId}:`, err);
                results.push({ success: false, userId, studentName, error: err.message });
                failCount++;
            }
        }

        console.log(`🏁 Batch Completed: ${successCount} success, ${failCount} failed.`);
        return { total: usersSnap.size, success: successCount, failed: failCount, results };
    },

    async _getWeeklyStatsForUser(userId: string) {
        // Fetch last 7 days from now or since last report
        const userDoc = await db.collection('Winter_Users').doc(userId).get();
        const lastReportDate = userDoc.data()?.latestWeeklyReport?.createdAt || new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

        const resultsSnap = await db.collection('Manager_Results')
            .where('studentId', '==', userId)
            .where('timestamp', '>=', new Date(lastReportDate))
            .get();

        const stats: any = { totalSolved: 0, parts: {} };

        resultsSnap.docs.forEach(docSnap => {
            const data = docSnap.data();
            const type = data.type || '';
            let partKey = '';

            if (type.includes('part1')) partKey = 'p1';
            else if (type.includes('part2')) partKey = 'p2';
            else if (type.includes('part3')) partKey = 'p3';
            else if (type.includes('part4')) partKey = 'p4';
            else if (type.includes('part5')) partKey = 'p5';
            else if (type.includes('part6')) partKey = 'p6';
            else if (type.includes('part7_single')) partKey = 'p7s';
            else if (type.includes('part7_double')) partKey = 'p7d';
            else if (type.includes('part7_test')) partKey = 'p7f';

            if (!partKey) return;

            if (!stats.parts[partKey]) {
                stats.parts[partKey] = { solved: 0, correct: 0 };
            }
            stats.parts[partKey].solved += (data.solved || data.total || 0);
            stats.parts[partKey].correct += (data.correct || data.score || 0);
            stats.totalSolved += (data.solved || data.total || 0);
        });

        return stats;
    },

    async _getWeakestTagsForUser(userId: string) {
        // Fetch all recent results to find weak tags
        const resultsSnap = await db.collection('Manager_Results')
            .where('studentId', '==', userId)
            .limit(50) // Last 50 sessions
            .get();

        const tagMap: Record<string, { count: number, part: string }> = {};

        resultsSnap.docs.forEach(docSnap => {
            const data = docSnap.data();
            if (data.incorrectQuestions) {
                data.incorrectQuestions.forEach((iq: any) => {
                    const tag = iq.classification || iq.tag || 'Unknown';
                    if (!tagMap[tag]) tagMap[tag] = { count: 0, part: data.part || '' };
                    tagMap[tag].count++;
                });
            }
        });

        return Object.entries(tagMap)
            .map(([tag, val]) => ({ tag, incorrectCount: val.count, part: val.part }))
            .sort((a, b) => b.incorrectCount - a.incorrectCount)
            .slice(0, 5);
    }
};
