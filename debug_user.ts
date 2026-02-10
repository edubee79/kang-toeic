import fs from 'fs';
import path from 'path';

// Manually load .env.local BEFORE anything else
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
            const index = trimmed.indexOf('=');
            if (index > -1) {
                const key = trimmed.substring(0, index).trim();
                let value = trimmed.substring(index + 1).trim();
                // Remove quotes
                if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.substring(1, value.length - 1);
                }
                process.env[key] = value;
            }
        }
    });
    console.log("✅ Manually loaded .env.local");
} else {
    console.error("❌ .env.local not found at", envPath);
}

// Function to run after env is set
async function main() {
    // Dynamic import to avoid hoisting issues
    const { db } = await import('./src/lib/firebase-admin.js');

    const targetName = process.argv[2] || "김춘염";
    console.log(`\n🔍 Searching for user: ${targetName}`);

    const attemptsRef = db.collection('MockTestAttempts');
    let snapshot = await attemptsRef.where('studentName', '==', targetName).get();

    if (snapshot.empty) {
        console.log(`❓ No attempts found for name "${targetName}" in MockTestAttempts. Checking Manager_Results...`);
        const resultsRef = db.collection('Manager_Results');
        const resSnapshot = await resultsRef.where('student', '==', targetName).limit(1).get();

        if (resSnapshot.empty) {
            console.log("❌ No user record found in Manager_Results either.");
            return;
        }

        const userId = resSnapshot.docs[0].data().studentId;
        console.log(`💡 Found studentId: ${userId} from Manager_Results. Searching MockTestAttempts by userId...`);
        snapshot = await attemptsRef.where('userId', '==', userId).get();
    }

    if (snapshot.empty) {
        console.log("❌ Still no attempts found in MockTestAttempts.");
        return;
    }

    console.log(`✅ Found ${snapshot.size} attempts for "${targetName}". Sorting by most recent...\n`);

    const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as any }));
    docs.sort((a, b) => {
        const tA = a.timestamp?.seconds || (a.date ? new Date(a.date).getTime() / 1000 : 0);
        const tB = b.timestamp?.seconds || (b.date ? new Date(b.date).getTime() / 1000 : 0);
        return tB - tA;
    });

    for (const data of docs.slice(0, 3)) {
        console.log(`=========================================`);
        console.log(`Attempt ID : ${data.id}`);
        console.log(`Status     : ${data.status.toUpperCase()}`);
        console.log(`Test Name  : ${data.testTitle || 'Full Mock Test'} (ID: ${data.testId})`);
        console.log(`Date       : ${data.date || 'N/A'}`);
        console.log(`Total Score: ${data.totalScore ?? 'NOT_CALCULATED'}`);

        const answers = data.answers || {};
        const qCount = Object.keys(answers).length;
        console.log(`Total Qs   : ${qCount} answers recorded`);

        if (qCount > 0) {
            const qNums = Object.keys(answers).map(k => parseInt(k.replace(/[^\d]/g, ''))).filter(n => !isNaN(n));
            const maxQ = qNums.length > 0 ? Math.max(...qNums) : 0;
            console.log(`Highest Q  : Question ${maxQ} answered`);

            // Show context around 190
            for (let i = 188; i <= 192; i++) {
                const val = answers[String(i)] || answers[`q${i}`];
                if (val) console.log(`   -> Q${i}: ${val}`);
            }
        }

        if (data.status === 'in_progress') {
            console.log(`\n⚠️  CRITICAL: This attempt is stuck in 'in_progress'.`);
            console.log(`   It means the user finished the test but the "Finish" logic never completed.`);
        }
        console.log(`=========================================\n`);
    }
}

main().catch(err => {
    console.error("Fatal Error:", err);
    process.exit(1);
});
