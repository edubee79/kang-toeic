const path = require('path');
const dotenv = require('dotenv');

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const { admin } = require('../lib/firebase-admin');
const fs = require('fs');

async function dumpPart5Samples() {
    console.log('Fetching Part 5 samples...');
    try {
        const db = admin.firestore();
        const snapshot = await db.collection('Part5_Questions').limit(10).get();

        if (snapshot.empty) {
            console.log('No documents found in Part5_Questions collection.');
            return;
        }

        const samples = [];
        snapshot.forEach(doc => {
            samples.push({
                id: doc.id,
                data: doc.data()
            });
        });

        const outputPath = path.resolve(process.cwd(), 'p5_samples.json');
        fs.writeFileSync(outputPath, JSON.stringify(samples, null, 2));
        console.log(`Dumped 10 samples to ${outputPath}`);
    } catch (error) {
        console.error('Error during dump:', error);
    }
}

dumpPart5Samples().catch(console.error);
