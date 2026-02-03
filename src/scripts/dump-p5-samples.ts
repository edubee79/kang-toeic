import { admin } from '../lib/firebase-admin';
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function dumpPart5Samples() {
    console.log('Fetching Part 5 samples...');
    try {
        const db = admin.firestore();
        const snapshot = await db.collection('Part5_Questions').limit(5).get();

        if (snapshot.empty) {
            console.log('No documents found in Part5_Questions collection.');
            return;
        }

        const samples: any[] = [];
        snapshot.forEach(doc => {
            samples.push({
                id: doc.id,
                data: doc.data()
            });
        });

        fs.writeFileSync('p5_samples.json', JSON.stringify(samples, null, 2));
        console.log('Dumped 5 samples to p5_samples.json');
    } catch (error) {
        console.error('Error during dump:', error);
    }
}

dumpPart5Samples().catch(console.error);
