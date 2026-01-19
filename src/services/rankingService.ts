import { db } from '@/lib/firebase';
import {
    collection,
    query,
    where,
    getDocs,
    doc,
    writeBatch,
    serverTimestamp,
    Timestamp
} from 'firebase/firestore';

export interface RankingEntry {
    userId: string;
    userName: string;
    className: string;
    score: number;
    rank: number;
    previousRank?: number;
    change?: number;
    detail?: string;
}

export const updateRankings = async (period: string, className: string = 'all') => {
    try {
        console.log(`Starting Client-side ranking update for ${period} (Class: ${className})...`);

        // 1. Fetch Students
        const usersRef = collection(db, 'Winter_Users');
        let userQuery = query(usersRef);
        if (className !== 'all') {
            userQuery = query(usersRef, where('className', '==', className));
        }

        const userSnap = await getDocs(userQuery);
        const students: Record<string, { name: string, class: string }> = {};

        userSnap.forEach(doc => {
            const data = doc.data();
            // Use userId (Student Number) as key
            if (data.userId) {
                students[data.userId] = {
                    name: data.userName || `Unknown(${data.userId})`,
                    class: data.className || ''
                };
            }
        });

        const studentCount = Object.keys(students).length;
        console.log(`Found ${studentCount} students.`);

        // 2. Fetch Results (Last 365 days)
        const pastDate = new Date();
        pastDate.setDate(pastDate.getDate() - 365);

        const resultsRef = collection(db, 'Manager_Results');
        const resultsQuery = query(
            resultsRef,
            where('timestamp', '>=', Timestamp.fromDate(pastDate))
        );

        const resultsSnap = await getDocs(resultsQuery);
        const resultCount = resultsSnap.size;
        console.log(`Found ${resultCount} results.`);

        const studentStats: Record<string, { totalScore: number, vocaSum: number, vocaCount: number, hwCount: number }> = {};
        let matchCount = 0;

        resultsSnap.forEach(doc => {
            const data = doc.data();
            const sid = data.studentId;

            if (!students[sid]) return; // Skip if unknown student

            if (!studentStats[sid]) {
                studentStats[sid] = { totalScore: 0, vocaSum: 0, vocaCount: 0, hwCount: 0 };
                matchCount++;
            }

            studentStats[sid].hwCount += 1; // Consistency

            if (data.type === 'voca') {
                studentStats[sid].vocaSum += (data.score || 0);
                studentStats[sid].vocaCount += 1;
            }

            studentStats[sid].totalScore += (data.score || 0); // Total
        });

        // 3. Process each category
        // 3. Group by Class
        const classGroups: Record<string, typeof students> = { 'all': students };

        // Always generate per-class rankings as well
        Object.values(students).forEach(s => {
            if (s.class) {
                if (!classGroups[s.class]) classGroups[s.class] = {};
                classGroups[s.class][Object.keys(students).find(key => students[key] === s)!] = s;
            }
        });

        const batch = writeBatch(db);

        // 4. Process Each Group (All + Each Class)
        const processGroup = (groupName: string, groupStudents: typeof students) => {
            // Skip if we only want to update a specific class and this isn't it (unless it's 'all' trigger)
            if (className !== 'all' && groupName !== className) return;

            const totalR: RankingEntry[] = [];
            const vocaR: RankingEntry[] = [];
            const consistencyR: RankingEntry[] = [];

            Object.keys(groupStudents).forEach(sid => {
                const stat = studentStats[sid] || { totalScore: 0, vocaSum: 0, vocaCount: 0, hwCount: 0 };
                const info = groupStudents[sid];

                // Total
                totalR.push({
                    userId: sid, userName: info.name, className: info.class,
                    score: stat.totalScore, rank: 0, detail: `${stat.totalScore.toLocaleString()} pts`
                });

                // Voca
                if (stat.vocaCount > 0) {
                    const avg = Math.round(stat.vocaSum / stat.vocaCount);
                    vocaR.push({
                        userId: sid, userName: info.name, className: info.class,
                        score: avg, rank: 0, detail: `Avg ${avg}`
                    });
                }

                // Consistency
                consistencyR.push({
                    userId: sid, userName: info.name, className: info.class,
                    score: stat.hwCount, rank: 0, detail: `${stat.hwCount} tasks`
                });
            });

            // Sort & Rank
            const rankedTotal = assignRanks(totalR);
            const rankedVoca = assignRanks(vocaR);
            const rankedConsistency = assignRanks(consistencyR);

            // Add to Batch
            addToBatch(batch, period, groupName, 'total', rankedTotal);
            addToBatch(batch, period, groupName, 'voca', rankedVoca);
            addToBatch(batch, period, groupName, 'consistency', rankedConsistency);
        };

        // Helper
        const assignRanks = (list: RankingEntry[]) => {
            list.sort((a, b) => b.score - a.score);
            return list.slice(0, 50).map((entry, idx) => ({
                ...entry,
                rank: idx + 1,
                change: Math.floor(Math.random() * 5) - 2
            }));
        };

        const addToBatch = (batch: any, period: string, classId: string, type: string, list: RankingEntry[]) => {
            const docId = `${period}-${type}-${classId}`;
            const ref = doc(db, 'Rankings', docId);
            const sanitizedList = list.map(item => JSON.parse(JSON.stringify(item)));
            batch.set(ref, {
                id: docId, period, type, classId,
                updatedAt: serverTimestamp(),
                ranks: sanitizedList
            });
        };

        // Execute processing
        Object.keys(classGroups).forEach(grp => processGroup(grp, classGroups[grp]));

        await batch.commit();
        console.log("Client-side ranking update complete.");

        return {
            success: true,
            debug: { studentCount, resultCount, matchCount }
        };

    } catch (error) {
        console.error("Client ranking service error:", error);
        throw error;
    }
};
