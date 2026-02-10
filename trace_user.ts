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
    const userId = "60250177"; // 김춘염

    const snapshot = await db.collection('MockTestAttempts').where('userId', '==', userId).get();
    const docs = snapshot.docs.map(d => ({ id: d.id, ...d.data() as any }));
    // Sort by date string descending
    docs.sort((a, b) => (b.date || "").localeCompare(a.date || ""));

    console.log(`TOTAL ATTEMPTS: ${docs.length}`);
    for (const data of docs) {
        const answers = data.answers || {};
        const qCount = Object.keys(answers).length;
        console.log(`[ID] ${data.id}`);
        console.log(`[DATE] ${data.date}`);
        console.log(`[STATUS] ${data.status}`);
        console.log(`[ANSWERS] ${qCount} items`);
        if (qCount > 0) {
            const qNums = Object.keys(answers).map(k => parseInt(k.replace(/[^\d]/g, ''))).filter(n => !isNaN(n));
            console.log(`[MAX Q] ${Math.max(...qNums)}`);
        }
        console.log('----------------------------');
    }
}

main().catch(console.error);
