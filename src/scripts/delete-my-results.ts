/**
 * Delete all Manager_Results for current user
 * Run in browser console: window.deleteMyResults()
 */

import { collection, query, where, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

async function deleteMyResults() {
    const userStr = localStorage.getItem('toeic_user');
    if (!userStr) {
        console.log('❌ No user found');
        return;
    }

    const user = JSON.parse(userStr);
    const userId = user.userId || user.uid;

    console.log(`🗑️ Deleting all Manager_Results for user: ${userId}`);

    const confirm = window.confirm(
        `정말로 사용자 ${userId}의 모든 학습 기록을 삭제하시겠습니까?\n\n이 작업은 되돌릴 수 없습니다!`
    );

    if (!confirm) {
        console.log('❌ Cancelled');
        return;
    }

    try {
        const q = query(
            collection(db, 'Manager_Results'),
            where('studentId', '==', userId)
        );

        const snapshot = await getDocs(q);
        console.log(`📊 Found ${snapshot.size} results to delete`);

        let deleted = 0;
        for (const doc of snapshot.docs) {
            await deleteDoc(doc.ref);
            deleted++;
            if (deleted % 10 === 0) {
                console.log(`   Deleted ${deleted}/${snapshot.size}...`);
            }
        }

        console.log(`✅ Successfully deleted ${deleted} results`);
        alert(`✅ ${deleted}개의 학습 기록이 삭제되었습니다.`);

        // Reload page
        window.location.reload();

    } catch (error) {
        console.error('❌ Error deleting results:', error);
        alert('삭제 중 오류가 발생했습니다.');
    }
}

// Make available in browser console
if (typeof window !== 'undefined') {
    (window as any).deleteMyResults = deleteMyResults;
    console.log('✅ Run: window.deleteMyResults()');
}

export { deleteMyResults };
