/**
 * Script to verify user goal data structure in Firestore
 * 
 * Purpose: Check if users collection has partTargets field
 * Run: npx tsx src/scripts/check-user-goals.ts
 */

import { collection, getDocs, limit, query } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface UserGoalData {
    userId?: string;
    userName?: string;
    name?: string;
    targetScore?: number;
    targetLC?: number;
    targetRC?: number;
    partTargets?: Record<string, number>;
    levelTestScore?: number;
    levelTestLC?: number;
    levelTestRC?: number;
    levelTestDate?: any;
}

async function checkUserGoals() {
    console.log('🔍 Checking user goal data structure...\n');

    try {
        // Get first 5 users as sample
        const usersRef = collection(db, 'users');
        const q = query(usersRef, limit(5));
        const usersSnapshot = await getDocs(q);

        if (usersSnapshot.empty) {
            console.log('❌ No users found in database');
            return;
        }

        console.log(`✅ Found ${usersSnapshot.size} sample users\n`);

        let hasPartTargets = 0;
        let hasLevelTest = 0;
        let hasTargetScore = 0;

        usersSnapshot.forEach((doc) => {
            const data = doc.data() as UserGoalData;
            const userId = doc.id;

            console.log(`📋 User: ${data.userName || data.name || userId}`);
            console.log(`   - targetScore: ${data.targetScore || 'NOT SET'}`);
            console.log(`   - targetLC: ${data.targetLC || 'NOT SET'}`);
            console.log(`   - targetRC: ${data.targetRC || 'NOT SET'}`);
            console.log(`   - partTargets: ${data.partTargets ? 'EXISTS ✅' : 'MISSING ❌'}`);

            if (data.partTargets) {
                console.log(`     Structure:`, JSON.stringify(data.partTargets, null, 2));
                hasPartTargets++;
            }

            console.log(`   - levelTestScore: ${data.levelTestScore || 'NOT SET'}`);
            console.log(`   - levelTestLC: ${data.levelTestLC || 'NOT SET'}`);
            console.log(`   - levelTestRC: ${data.levelTestRC || 'NOT SET'}`);

            if (data.levelTestScore) hasLevelTest++;
            if (data.targetScore) hasTargetScore++;

            console.log('');
        });

        console.log('📊 Summary:');
        console.log(`   - Users with targetScore: ${hasTargetScore}/${usersSnapshot.size}`);
        console.log(`   - Users with partTargets: ${hasPartTargets}/${usersSnapshot.size}`);
        console.log(`   - Users with levelTestScore: ${hasLevelTest}/${usersSnapshot.size}`);

        if (hasPartTargets === 0) {
            console.log('\n⚠️  WARNING: No users have partTargets field!');
            console.log('   Action needed: Implement default partTargets logic');
            console.log('   Suggested structure:');
            console.log('   {');
            console.log('     part1: 6, part2: 25, part3: 39, part4: 30,');
            console.log('     part5: 30, part6: 16, part7: 54');
            console.log('   }');
        }

        if (hasLevelTest === 0) {
            console.log('\n⚠️  WARNING: No users have levelTestScore!');
            console.log('   Action needed: Use actual test average as fallback');
        }

        console.log('\n✅ Verification completed successfully');

    } catch (error) {
        console.error('❌ Error checking user goals:', error);
        throw error;
    }
}

// Run the check
checkUserGoals()
    .then(() => {
        process.exit(0);
    })
    .catch((error) => {
        console.error('\n❌ Check failed:', error);
        process.exit(1);
    });
