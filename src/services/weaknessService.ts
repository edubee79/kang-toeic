
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, getDoc, doc } from 'firebase/firestore';
import { getClassificationLabel } from '@/data/toeic/reading/part5/classification';

export interface WeaknessTag {
    tag: string;
    label: string;
    total: number;
    incorrect: number;
    accuracy: number;
    part: string;
}

export interface WeaknessReport {
    userId: string;
    totalAccuracy: number;
    weakestTags: WeaknessTag[];
    partBreakdown: Record<string, number>; // Part 1: 80%, Part 2: 60%...
}

export const WeaknessService = {
    /**
     * Analyze user's weakness based on Firestore results
     */
    analyzeUserWeakness: async (userId: string): Promise<WeaknessReport> => {
        try {
            // Correct Collection: Manager_Results
            const resultsRef = collection(db, 'Manager_Results');
            const q = query(resultsRef, where('studentId', '==', userId));
            const snapshot = await getDocs(q);

            const tagStats: Record<string, { total: number; incorrect: number; part: string }> = {};
            let globalTotal = 0;
            let globalCorrect = 0;
            const partStats: Record<string, { total: number; correct: number }> = {};

            snapshot.docs.forEach(doc => {
                const data = doc.data();

                // Identify Part from 'unit' or 'type'
                // unit example: "RC_Part6_Test1_real" or "Part2_Test1"
                let part = "Unknown";
                if (data.unit?.includes("Part5")) part = "Part 5";
                else if (data.unit?.includes("Part6")) part = "Part 6";
                else if (data.unit?.includes("Part7")) part = "Part 7";
                else if (data.unit?.includes("Part2")) part = "Part 2";

                // Track Part Stats
                if (!partStats[part]) partStats[part] = { total: 0, correct: 0 };
                const totalQ = data.total || 0;
                const correctQ = data.score || 0;

                partStats[part].total += totalQ;
                partStats[part].correct += correctQ;

                globalTotal += totalQ;
                globalCorrect += correctQ;

                // Track Tag Stats (Only for incorrect questions)
                if (data.incorrectQuestions && Array.isArray(data.incorrectQuestions)) {
                    data.incorrectQuestions.forEach((q: any) => {
                        const tag = q.classification;
                        if (!tag || tag === 'Unknown') return;

                        if (!tagStats[tag]) {
                            tagStats[tag] = { total: 0, incorrect: 0, part };
                        }
                        tagStats[tag].incorrect++;
                        // Heuristic: We estimate 'total' as incorrect * 2.5 (assuming 40% fail rate average) 
                        // because we don't have tags for CORRECT answers yet.
                        // This allows us to sort by "Most Incorrect Volume" effectively.
                        tagStats[tag].total++;
                    });
                }
            });

            // Convert to Array
            const weakestTags: WeaknessTag[] = Object.entries(tagStats)
                .map(([tag, stat]) => ({
                    tag,
                    label: getClassificationLabel(tag) || tag,
                    total: stat.total,
                    incorrect: stat.incorrect,
                    accuracy: 0,
                    part: stat.part
                }))
                .sort((a, b) => b.incorrect - a.incorrect) // Sort by most incorrect first
                .slice(0, 10); // Top 10 Weaknesses

            // Part Breakdown
            const partBreakdown: Record<string, number> = {};
            Object.entries(partStats).forEach(([part, stat]) => {
                partBreakdown[part] = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
            });

            return {
                userId,
                totalAccuracy: globalTotal > 0 ? Math.round((globalCorrect / globalTotal) * 100) : 0,
                weakestTags,
                partBreakdown
            };

        } catch (error) {
            console.error("Weakness Analysis Error:", error);
            return {
                userId,
                totalAccuracy: 0,
                weakestTags: [],
                partBreakdown: {}
            };
        }
    }
};
