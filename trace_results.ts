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

    const snapshot = await db.collection('Manager_Results').where('studentId', '==', userId).get();
    const docs = snapshot.docs.map(d => ({ id: d.id, ...d.data() as any }));

    // Sort by timestamp
    docs.sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));

    console.log(`TOTAL MANAGER RESULTS: ${docs.length}`);
    for (const data of docs.slice(0, 20)) {
        console.log(`[UNIT] ${data.unit} | [TYPE] ${data.type} | [SCORE] ${data.score}/${data.total} | [DATE] ${data.timestamp?.toDate()}`);
    }
}

main().catch(console.error);
