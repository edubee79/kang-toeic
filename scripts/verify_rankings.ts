
import { config } from 'dotenv';
config({ path: '.env.local' });

import { db } from '../src/lib/firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

async function verifyData() {
    console.log("=== Verifying Ranking Data ===");

    // 1. Check a few students and their classes
    const usersSnap = await getDocs(collection(db, 'Winter_Users'));
    const classes = new Set<string>();
    const samples: any[] = [];

    usersSnap.docs.slice(0, 10).forEach(d => {
        const data = d.data();
        if (data.className) {
            classes.add(data.className);
            samples.push({ id: data.userId, class: data.className });
        }
    });

    console.log(`Found User Classes: ${Array.from(classes).join(', ')}`);
    console.log("Sample Users:", samples);

    // 2. Check Rankings documents for these classes
    const period = '2026-W04'; // Assuming this is the current calculated period
    console.log(`\nChecking Rankings for period: ${period}`);

    for (const cls of Array.from(classes)) {
        const docId = `${period}-total-${cls}`;
        const rDoc = await getDoc(doc(db, 'Rankings', docId));

        if (rDoc.exists()) {
            console.log(`[OK] Ranking found for '${cls}': ${docId} (Size: ${rDoc.data()?.ranks?.length})`);
        } else {
            console.log(`[FAIL] No ranking doc found for '${cls}' (Expected ID: ${docId})`);
        }
    }

    // Check 'all'
    const allDoc = await getDoc(doc(db, 'Rankings', `${period}-total-all`));
    console.log(`[${allDoc.exists() ? 'OK' : 'FAIL'}] User 'all' ranking: ${period}-total-all`);

    console.log("\n=== Done ===");
}

verifyData();
