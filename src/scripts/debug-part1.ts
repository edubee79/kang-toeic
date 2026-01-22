/**
 * Debug script to check Part 1 data in Firestore
 */

import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { isActualTest, mapToPartKey, calculateCorrectCount, ManagerResult } from '../lib/filters/actualTestFilter';

async function debugPart1Data() {
    console.log('🔍 Debugging Part 1 Data...\n');

    const userStr = localStorage.getItem('toeic_user');
    if (!userStr) {
        console.log('❌ No user found');
        return;
    }

    const user = JSON.parse(userStr);
    const userId = user.userId || user.uid;

    const q = query(
        collection(db, 'Manager_Results'),
        where('studentId', '==', userId),
        orderBy('timestamp', 'desc')
    );

    const snapshot = await getDocs(q);

    console.log(`Total results: ${snapshot.size}\n`);

    let part1Count = 0;
    snapshot.docs.forEach((doc, index) => {
        const data = doc.data() as ManagerResult;
        const partKey = mapToPartKey(data);

        if (partKey === 'part1_test' || data.unit?.includes('Part1') || data.type?.includes('part1')) {
            part1Count++;
            console.log(`\n📌 Part 1 Result #${part1Count}:`);
            console.log(`   - unit: ${data.unit}`);
            console.log(`   - type: ${data.type}`);
            console.log(`   - mode: ${data.mode}`);
            console.log(`   - score: ${data.score}`);
            console.log(`   - total: ${data.total}`);
            console.log(`   - wrongCount: ${data.wrongCount}`);
            console.log(`   - isActualTest: ${isActualTest(data)}`);
            console.log(`   - mappedPartKey: ${partKey}`);
            console.log(`   - calculatedCorrect: ${calculateCorrectCount(data)}`);
        }
    });

    console.log(`\n✅ Total Part 1 results found: ${part1Count}`);
}

// Run in browser console
if (typeof window !== 'undefined') {
    (window as any).debugPart1 = debugPart1Data;
    console.log('Run: window.debugPart1()');
}
