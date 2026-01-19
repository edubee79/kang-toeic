import { admin } from '../src/lib/firebase-admin';

async function checkData() {
    try {
        console.log("Fetching Winter_Users...");
        const db = admin.firestore();
        const snapshot = await db.collection('Winter_Users').limit(5).get();

        if (snapshot.empty) {
            console.log("No users found.");
        } else {
            snapshot.forEach(doc => {
                console.log(`[Users] [${doc.id}]`, JSON.stringify(doc.data(), null, 2));
            });
        }

        console.log("Fetching Classes...");
        const classSnapshot = await db.collection('Classes').get();
        if (classSnapshot.empty) {
            console.log("No classes found.");
            return;
        }

        console.log("Fetching Universities...");
        const univSnapshot = await db.collection('Universities').get();
        if (univSnapshot.empty) {
            console.log("No universities found.");
            return;
        }
        univSnapshot.forEach(doc => {
            console.log(`[Universities] [${doc.id}]`, JSON.stringify(doc.data(), null, 2));
        });

    } catch (error) {
        console.error("Error:", error);
    }
}

checkData();
