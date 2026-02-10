import fs from 'fs';
import path from 'path';

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
                if (value.startsWith('"') && value.endsWith('"')) value = value.substring(1, value.length - 1);
                process.env[key] = value;
            }
        }
    });
}

async function main() {
    const { db } = await import('./src/lib/firebase-admin.js');
    const attemptId = "esYrfG2qegamckVExaVv";

    const doc = await db.collection('MockTestAttempts').doc(attemptId).get();
    if (!doc.exists) {
        console.log("No doc found");
        return;
    }

    const data = doc.data();
    console.log("--- ATTEMPT DATA ---");
    console.log(`ID: ${doc.id}`);
    console.log(`User: ${data?.studentName} (${data?.userId})`);
    console.log(`Status: ${data?.status}`);
    console.log(`Test: ${data?.testTitle} (${data?.testId})`);

    const answers = data?.answers || {};
    const qKeys = Object.keys(answers);
    console.log(`Total Answers: ${qKeys.length}`);

    const qNums = qKeys.map(k => parseInt(k.replace(/[^\d]/g, ''))).filter(n => !isNaN(n));
    const maxQ = qNums.length > 0 ? Math.max(...qNums) : 0;
    console.log(`Highest Q: ${maxQ}`);

    console.log("Answers near 190:");
    for (let i = 185; i <= 200; i++) {
        const val = answers[String(i)] || answers[`q${i}`];
        if (val) console.log(`Q${i}: ${val}`);
    }
}

main().catch(console.error);
