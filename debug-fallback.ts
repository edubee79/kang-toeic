
import * as admin from 'firebase-admin';
import { resolve } from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: resolve('.env.local') });

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        })
    });
}
const db = admin.firestore();

async function debugFlow() {
    try {
        console.log('--- Start Debugging ---');
        // 1. Find the most recent part7_single tests to get a user ID
        const recentSnap = await db.collection('Manager_Results')
            .where('type', '==', 'part7_single')
            .orderBy('timestamp', 'desc')
            .limit(1)
            .get();
        
        if (recentSnap.empty) {
            console.log('No recent part7_single found.');
            return;
        }

        const recentDoc = recentSnap.docs[0].data();
        const userId = recentDoc.studentId;
        console.log('Found recent test by user:', userId);

        // 2. Mock _getHistoricalFallbackTags logic for this user
        console.log('\n--- Running _getHistoricalFallbackTags Query ---');
        const q = db.collection('Manager_Results').where('studentId', '==', userId);
        const snapshot = await q.get();
        console.log('Total documents found for user:', snapshot.size);

        const tagStats: any = {};
        snapshot.docs.forEach(docSnap => {
            const data = docSnap.data();
            if (data.mode !== 'real' && data.mode !== 'test') return;
            
            let dataPart = '';
            // My recent mappings
            if (data.type === 'part7_single') dataPart = 'p7s';
            else if (data.type === 'part7_double' || data.type === 'part7_triple' || data.type === 'part7_multi') dataPart = 'p7d';
            
            if (dataPart !== 'p7s' || !data.incorrectQuestions) return;

            data.incorrectQuestions.forEach((q: any) => {
                let tag = 'Unknown';
                const cType = q.contextType || q.docType;
                const cls = q.classification;
                const overrideTags = ['P7_INFERENCE', 'P7_INSERTION', 'P7_NOT_TRUE', 'P7_SYNONYM'];
                if (overrideTags.includes(cls) || !cType) tag = cls;
                else tag = cType;

                if (tag === 'Unknown') return;
                if (!tagStats[tag]) tagStats[tag] = { incorrect: 0, label: tag };
                tagStats[tag].incorrect++;
            });
        });

        const sortedTags = Object.keys(tagStats).map(t => ({ tag: t, count: tagStats[t].incorrect })).sort((a,b) => b.count - a.count);
        console.log('Aggregated Tags:', sortedTags);

    } catch(e) { console.error('Error:', e); }
}

debugFlow();

