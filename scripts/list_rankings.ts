
import { config } from 'dotenv';
config({ path: '.env.local' });

import { db } from '../src/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

async function listRankings() {
    console.log("=== Listing All Ranking Docs ===");
    const snapshot = await getDocs(collection(db, 'Rankings'));
    if (snapshot.empty) {
        console.log("No ranking documents found.");
    } else {
        snapshot.forEach(doc => {
            console.log(`ID: ${doc.id} | ClassId Field: ${doc.data().classId}`);
        });
    }
}

listRankings();
