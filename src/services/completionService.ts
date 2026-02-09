import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';

export interface TestCompletion {
    completed: boolean;
    score: number;
    total: number;
    attempts: number;
    timestamp?: Date;
}

/**
 * Get completion status for a single test
 */
export async function getTestCompletion(userId: string, unit: string): Promise<TestCompletion> {
    try {
        const q = query(
            collection(db, 'Manager_Results'),
            where('studentId', '==', userId),
            where('unit', '==', unit),
            orderBy('timestamp', 'desc'),
            limit(1)
        );

        const snapshot = await getDocs(q);

        if (snapshot.empty) {
            return { completed: false, score: 0, total: 0, attempts: 0 };
        }

        const doc = snapshot.docs[0];
        const data = doc.data();

        return {
            completed: true,
            score: data.score || 0,
            total: data.total || 0,
            attempts: 1, // We'll count attempts separately if needed
            timestamp: data.timestamp?.toDate()
        };
    } catch (error) {
        console.error('Error fetching test completion:', error);
        return { completed: false, score: 0, total: 0, attempts: 0 };
    }
}

/**
 * Get completion status for multiple tests (batch)
 */
export async function getMultipleTestCompletions(
    userId: string,
    units: string[]
): Promise<Record<string, TestCompletion>> {
    const results: Record<string, TestCompletion> = {};

    // Fetch all results for this user
    try {
        const q = query(
            collection(db, 'Manager_Results'),
            where('studentId', '==', userId)
        );

        const snapshot = await getDocs(q);

        // Group by unit and get latest
        const unitMap: Record<string, any[]> = {};
        snapshot.docs.forEach(doc => {
            const data = doc.data();
            const unit = data.unit;
            if (!unitMap[unit]) unitMap[unit] = [];
            unitMap[unit].push(data);
        });

        // For each requested unit, get the latest result
        units.forEach(unit => {
            if (unitMap[unit]) {
                // Sort by timestamp and get latest
                const sorted = unitMap[unit].sort((a, b) => {
                    const aTime = a.timestamp?.toDate?.()?.getTime() || 0;
                    const bTime = b.timestamp?.toDate?.()?.getTime() || 0;
                    return bTime - aTime;
                });

                const latest = sorted[0];
                results[unit] = {
                    completed: true,
                    score: latest.score || 0,
                    total: latest.total || 0,
                    attempts: sorted.length,
                    timestamp: latest.timestamp?.toDate()
                };
            } else {
                results[unit] = { completed: false, score: 0, total: 0, attempts: 0 };
            }
        });

        return results;
    } catch (error) {
        console.error('Error fetching multiple completions:', error);
        // Return empty results for all units
        units.forEach(unit => {
            results[unit] = { completed: false, score: 0, total: 0, attempts: 0 };
        });
        return results;
    }
}
