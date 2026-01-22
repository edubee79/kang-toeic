/**
 * Debug script to check actual Firestore data
 * Run in browser console
 */

async function debugFirestoreData() {
    console.log('🔍 Checking Firestore data...\n');

    const { collection, query, where, getDocs } = await import('firebase/firestore');
    const { db } = await import('/src/lib/firebase.ts');

    const userStr = localStorage.getItem('toeic_user');
    if (!userStr) {
        console.log('❌ No user found');
        return;
    }

    const user = JSON.parse(userStr);
    const userId = user.userId || user.uid;

    console.log(`📊 User ID: ${userId}\n`);

    const q = query(
        collection(db, 'Manager_Results'),
        where('studentId', '==', userId)
    );

    const snapshot = await getDocs(q);

    console.log(`Total results: ${snapshot.size}\n`);

    const allData = [];
    snapshot.docs.forEach((doc, index) => {
        const data = doc.data();
        allData.push({
            id: doc.id,
            unit: data.unit,
            type: data.type,
            mode: data.mode,
            score: data.score,
            total: data.total,
            wrongCount: data.wrongCount,
            timestamp: data.timestamp?.toDate?.() || data.createdAt?.toDate?.() || 'No timestamp'
        });
    });

    // Sort by timestamp
    allData.sort((a, b) => {
        const timeA = a.timestamp instanceof Date ? a.timestamp.getTime() : 0;
        const timeB = b.timestamp instanceof Date ? b.timestamp.getTime() : 0;
        return timeB - timeA;
    });

    console.table(allData);

    // Part 1 data
    const part1Data = allData.filter(d =>
        d.unit?.includes('Part1') || d.type?.includes('part1')
    );
    console.log('\n📌 Part 1 Data:');
    console.table(part1Data);

    // Part 5 data
    const part5Data = allData.filter(d =>
        d.unit?.includes('Part5') || d.type?.includes('part5')
    );
    console.log('\n📌 Part 5 Data:');
    console.table(part5Data);

    return { allData, part1Data, part5Data };
}

// Make available globally
window.debugFirestoreData = debugFirestoreData;
console.log('✅ Run: window.debugFirestoreData()');
