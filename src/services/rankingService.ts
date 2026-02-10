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
import { WeaknessService } from './weaknessService';

export interface RankingEntry {
    userId: string;
    userName: string;
    className: string;
    score: number;
    rank: number;
    previousRank?: number;
    change?: number;
    detail?: string;
    effortScore?: number;
    effortRank?: number | string;
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

        // 3. Process each student (Unified with WeaknessService)
        const batch = writeBatch(db);
        const studentStats: Record<string, { predictedScore: number, hwCount: number, vocaAvg: number, hasVoca: boolean }> = {};

        console.log("Analyzing each student using WeaknessService...");
        const sIds = Object.keys(students);
        const chunkSize = 10;
        for (let i = 0; i < sIds.length; i += chunkSize) {
            const chunk = sIds.slice(i, i + chunkSize);
            await Promise.all(chunk.map(async (sid) => {
                try {
                    // Get Predicted Score (LC + RC)
                    const report = await WeaknessService.analyzeUserWeakness(sid);
                    const predictedVal = (report.currentTotalLC || 0) + (report.currentTotalRC || 0);

                    // Count total results for Effort
                    const rQuery = query(collection(db, 'Manager_Results'), where('studentId', '==', sid));
                    const rSnap = await getDocs(rQuery);
                    const count = rSnap.size;

                    // Count Voca results for Voca Rank
                    const vQuery = query(collection(db, 'Manager_Results'), where('studentId', '==', sid), where('type', '==', 'voca'));
                    const vSnap = await getDocs(vQuery);
                    let vSum = 0;
                    vSnap.forEach(d => vSum += (d.data().score || 0));
                    const vAvg = vSnap.size > 0 ? Math.round(vSum / vSnap.size) : 0;

                    studentStats[sid] = {
                        predictedScore: predictedVal,
                        hwCount: count,
                        vocaAvg: vAvg,
                        hasVoca: vSnap.size > 0
                    };
                } catch (e) {
                    console.error(`Error processing student ${sid}:`, e);
                }
            }));
        }

        // 4. Group by Class
        const classGroups: Record<string, typeof students> = { 'all': students };
        Object.values(students).forEach(s => {
            if (s.class) {
                if (!classGroups[s.class]) classGroups[s.class] = {};
                classGroups[s.class][Object.keys(students).find(key => students[key] === s)!] = s;
            }
        });

        const assignRanks = (list: RankingEntry[]) => {
            list.sort((a, b) => b.score - a.score);
            return list.map((entry, idx) => ({
                ...entry,
                rank: idx + 1,
                change: 0 // Initialize as stable
            }));
        };

        // 5. Build Rankings for each Group
        const processGroup = (groupName: string, groupStudents: typeof students) => {
            if (className !== 'all' && groupName !== className) return;

            const totalR: RankingEntry[] = [];
            const vocaR: RankingEntry[] = [];
            const consistencyR: RankingEntry[] = [];

            Object.keys(groupStudents).forEach(sid => {
                const stat = studentStats[sid] || { predictedScore: 0, hwCount: 0, vocaAvg: 0, hasVoca: false };
                const info = groupStudents[sid];

                // Skill Rank (TOEIC Total)
                totalR.push({
                    userId: sid, userName: info.name, className: info.class,
                    score: stat.predictedScore, rank: 0, detail: `예상: ${stat.predictedScore}p / 학습: ${stat.hwCount}회`
                });

                // Effort Rank (Task Count)
                consistencyR.push({
                    userId: sid, userName: info.name, className: info.class,
                    score: stat.hwCount, rank: 0, detail: `총 학습량: ${stat.hwCount}회 완료`
                });

                // Voca Rank
                if (stat.hasVoca) {
                    vocaR.push({
                        userId: sid, userName: info.name, className: info.class,
                        score: stat.vocaAvg, rank: 0, detail: `단어평균: ${stat.vocaAvg}점`
                    });
                }
            });

            // Standard Ranking Logic
            const rankedTotalInitial = assignRanks(totalR);
            const rankedVoca = assignRanks(vocaR);
            const rankedConsistency = assignRanks(consistencyR);

            // Cross-reference effort rank into total rank list
            const rankedTotalWithEffort = rankedTotalInitial.map(t => {
                const c = rankedConsistency.find(cons => cons.userId === t.userId);
                return {
                    ...t,
                    effortRank: c ? c.rank : '-',
                    effortScore: c ? c.score : 0
                };
            });

            addToBatch(batch, period, groupName, 'total', rankedTotalWithEffort.slice(0, 50));
            addToBatch(batch, period, groupName, 'voca', rankedVoca.slice(0, 50));
            addToBatch(batch, period, groupName, 'consistency', rankedConsistency.slice(0, 50));
        };

        const addToBatch = (batch: any, period: string, classId: string, type: string, list: RankingEntry[]) => {
            const docId = `${period}-${type}-${classId}`;
            const ref = doc(db, 'Rankings', docId);
            batch.set(ref, {
                id: docId, period, type, classId,
                updatedAt: serverTimestamp(),
                ranks: list
            });
        };

        Object.keys(classGroups).forEach(grp => processGroup(grp, classGroups[grp]));
        await batch.commit();

        return { success: true, debug: { studentCount: sIds.length } };
    } catch (error) {
        console.error("Client ranking service error:", error);
        throw error;
    }
};
