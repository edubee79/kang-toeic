
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { PerformanceSyncService } from '@/services/performanceSyncService';

/**
 * Script to migrate all existing users to the new performance summary system
 */
export async function migrateAllUsersPerformance() {
    console.log('🚀 Starting Performance Migration for all users...');

    try {
        const usersSnap = await getDocs(collection(db, 'Winter_Users'));
        console.log(`Found ${usersSnap.size} users to process.`);

        let successCount = 0;
        let failCount = 0;

        for (const userDoc of usersSnap.docs) {
            const userId = userDoc.id;
            console.log(`Processing user: ${userId} (${userDoc.data().name || 'Unknown'})`);

            try {
                const summary = await PerformanceSyncService.syncUserSummary(userId);
                if (summary) {
                    successCount++;
                    console.log(`✅ Synced: ${userId} -> Predicted: ${summary.predictedTotal}`);
                } else {
                    failCount++;
                }
            } catch (err) {
                console.error(`❌ Failed to sync user ${userId}:`, err);
                failCount++;
            }
        }

        console.log('====================================');
        console.log('🏁 Migration Completed');
        console.log(`Total: ${usersSnap.size}`);
        console.log(`Success: ${successCount}`);
        console.log(`Failed: ${failCount}`);
        console.log('====================================');

    } catch (error) {
        console.error('Migration failed:', error);
    }
}
