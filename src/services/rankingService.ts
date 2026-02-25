import { db } from '@/lib/firebase';
import {
    collection,
    query,
    where,
    getDocs,
    getDoc,
    doc,
    writeBatch,
    serverTimestamp,
    Timestamp,
    orderBy
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
        console.log(`Starting ranking aggregation for ${period} (Class: ${className})...`);

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
            if (data.userId && data.status === 'approved') {
                students[data.userId] = {
                    name: data.userName || data.name || `Unknown(${data.userId})`,
                    class: data.className || ''
                };
            }
        });

        const sIds = Object.keys(students);
        console.log(`Analyzing ${sIds.length} approved students...`);

        // 2. Fetch All Results for these students
        // We'll process students in chunks to avoid overwhelming the client
        const studentStats: Record<string, { totalScore: number, hwCount: number, vocaAvg: number, hasVoca: boolean }> = {};

        const chunkSize = 10;
        for (let i = 0; i < sIds.length; i += chunkSize) {
            const chunk = sIds.slice(i, i + chunkSize);
            await Promise.all(chunk.map(async (sid) => {
                const rQuery = query(collection(db, 'Manager_Results'), where('studentId', '==', sid));
                const rSnap = await getDocs(rQuery);

                let totalScoreSum = 0;
                let vocaSum = 0;
                let vocaCount = 0;
                let hwCount = 0;

                rSnap.forEach(d => {
                    const data = d.data();
                    const score = data.score || 0;

                    if (data.type === 'voca') {
                        vocaSum += score;
                        vocaCount++;
                    } else if (data.type?.includes('test') || data.type?.includes('shadow')) {
                        // Standard score aggregation
                        totalScoreSum += score;
                    }
                    hwCount++;
                });

                studentStats[sid] = {
                    totalScore: totalScoreSum,
                    hwCount: hwCount,
                    vocaAvg: vocaCount > 0 ? Math.round(vocaSum / vocaCount) : 0,
                    hasVoca: vocaCount > 0
                };
            }));
        }

        // 3. Group by Class
        const classGroups: Record<string, typeof students> = { 'all': students };
        Object.keys(students).forEach(sid => {
            const s = students[sid];
            if (s.class) {
                if (!classGroups[s.class]) classGroups[s.class] = {};
                classGroups[s.class][sid] = s;
            }
        });

        const assignRanks = (list: RankingEntry[]) => {
            list.sort((a, b) => b.score - a.score);
            return list.map((entry, idx) => ({
                ...entry,
                rank: idx + 1,
                change: 0
            }));
        };

        const batch = writeBatch(db);

        // 4. Build Rankings for each Group
        const processGroup = (groupName: string, groupStudents: typeof students) => {
            if (className !== 'all' && groupName !== className) return;

            const totalR: RankingEntry[] = [];
            const vocaR: RankingEntry[] = [];
            const consistencyR: RankingEntry[] = [];

            Object.keys(groupStudents).forEach(sid => {
                const stat = studentStats[sid] || { totalScore: 0, hwCount: 0, vocaAvg: 0, hasVoca: false };
                const info = groupStudents[sid];

                // Skill Rank (Raw Total Score)
                totalR.push({
                    userId: sid, userName: info.name, className: info.class,
                    score: stat.totalScore, rank: 0, detail: `누적 점수: ${stat.totalScore}p`
                });

                // Effort Rank (Task Count)
                consistencyR.push({
                    userId: sid, userName: info.name, className: info.class,
                    score: stat.hwCount, rank: 0, detail: `총 학습량: ${stat.hwCount}회`
                });

                // Voca Rank
                if (stat.hasVoca) {
                    vocaR.push({
                        userId: sid, userName: info.name, className: info.class,
                        score: stat.vocaAvg, rank: 0, detail: `단어평균: ${stat.vocaAvg}점`
                    });
                }
            });

            addToBatch(batch, period, groupName, 'total', assignRanks(totalR).slice(0, 50));
            addToBatch(batch, period, groupName, 'voca', assignRanks(vocaR).slice(0, 50));
            addToBatch(batch, period, groupName, 'consistency', assignRanks(consistencyR).slice(0, 50));
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

        console.log("Ranking aggregation complete.");
        return { success: true, debug: { studentCount: sIds.length } };
    } catch (error) {
        console.error("Ranking service error:", error);
        throw error;
    }
};

// --- New Features for Student Home ---

/**
 * Calculate consecutive study days (Streak)
 */
export const getUserStreak = async (userId: string): Promise<number> => {
    try {
        const rQuery = query(
            collection(db, 'Manager_Results'),
            where('studentId', '==', userId),
            orderBy('timestamp', 'desc')
        );
        const rSnap = await getDocs(rQuery);
        if (rSnap.empty) return 0;

        const dateStrings = new Set<string>();
        rSnap.forEach(doc => {
            const data = doc.data();
            const ts = data.timestamp as Timestamp;
            if (ts) {
                const d = ts.toDate();
                // Format YYYY-MM-DD for stability
                const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
                dateStrings.add(dateStr);
            }
        });

        const sortedDates = Array.from(dateStrings).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

        const now = new Date();
        const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

        const yesterday = new Date(Date.now() - 86400000);
        const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

        // If didn't study today or yesterday, streak is 0
        if (sortedDates[0] !== todayStr && sortedDates[0] !== yesterdayStr) {
            return 0;
        }

        let streak = 1;
        let currentDate = new Date(sortedDates[0]);

        for (let i = 1; i < sortedDates.length; i++) {
            const prevDate = new Date(sortedDates[i]);
            const diffInDays = Math.round((currentDate.getTime() - prevDate.getTime()) / (1000 * 3600 * 24));

            if (diffInDays === 1) {
                streak++;
                currentDate = prevDate;
            } else if (diffInDays > 1) {
                break;
            }
        }

        return streak;
    } catch (e) {
        console.error("Streak calculation error:", e);
        return 0;
    }
};

/**
 * Get current week's rank for a student
 */
export const getUserRankInfo = async (userId: string, className: string) => {
    try {
        // Calculate current week period (e.g., 2026-W09)
        const now = new Date();
        const year = now.getFullYear();
        const onejan = new Date(year, 0, 1);
        const week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
        const period = `${year}-W${String(week).padStart(2, '0')}`;

        // Get total score ranking for this class
        const docId = `${period}-total-${className || 'all'}`;
        const ref = doc(db, 'Rankings', docId);
        const snap = await getDoc(ref);

        if (snap.exists()) {
            const data = snap.data();
            const ranks = (data.ranks || []) as RankingEntry[];
            const myEntry = ranks.find(r => r.userId === userId);

            if (myEntry) {
                return {
                    rank: myEntry.rank,
                    totalCount: ranks.length,
                    score: myEntry.score,
                    period: period
                };
            }
        }
        return null;
    } catch (e) {
        console.error("User rank fetch error:", e);
        return null;
    }
};
