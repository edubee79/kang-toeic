const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const { admin } = require('../lib/firebase-admin');

async function classifyWithFetch(q, retryCount = 0) {
    const isP6 = q.part === 6 || (q.content && q.content.length > 50);
    const tagDesc = isP6 ? "p6g, p6v, p6s, p6c" : "n1-n5, p1-p6, a1-a6, av1-av3, v1-v9, i1-i6, g1-g5, pa1-pa5, nc1-nc5, ac1-ac6, c1-c5, pr1-pr5, com1-com4, s1-s2, inv1-inv5, voc1-voc4";

    const prompt = `TOEIC 전문가로서 다음 문항의 'classification' 코드를 하나만 대답하세요. 코드는 ${isP6 ? 'P6' : 'P5'} 규격(${tagDesc}) 중 하나여야 합니다. 
문장: ${q.text || q.content}
정답: ${q.correctAnswer}
해설: ${q.explanation}
규칙: 코드만 출력 (예: n1)`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        if (response.status === 429 && retryCount < 5) {
            const wait = 15000; // 15s fixed wait for 429
            console.log(`Rate limited on ${q.id}. Retrying in 15s...`);
            await new Promise(r => setTimeout(r, wait));
            return classifyWithFetch(q, retryCount + 1);
        }

        const result = await response.json();
        if (result.error) return null;
        if (!result.candidates || result.candidates.length === 0) return null;

        const text = result.candidates[0].content.parts[0].text.trim().toLowerCase();
        const match = text.match(/([a-z][0-9a-z]*)/);
        return match ? match[1] : null;
    } catch (err) {
        return null;
    }
}

async function standardizePart5() {
    const db = admin.firestore();
    console.log('🚀 Standardizing in small chunks...');

    let totalUpdated = 0;
    let hasMore = true;
    let lastDoc = null;

    while (hasMore && totalUpdated < 500) { // Safety break at 500 per run
        let query = db.collection('ai_weakness_questions')
            .orderBy('__name__')
            .limit(50);

        if (lastDoc) {
            query = query.startAfter(lastDoc);
        }

        const snapshot = await query.get();
        if (snapshot.empty) {
            hasMore = false;
            break;
        }

        lastDoc = snapshot.docs[snapshot.docs.length - 1];
        let batch = db.batch();
        let batchSize = 0;

        for (const doc of snapshot.docs) {
            const data = doc.data();
            if (data.metadata && data.metadata.status === 'verified') continue;

            const newClass = await classifyWithFetch({ ...data, id: doc.id });
            if (newClass) {
                batch.update(doc.ref, {
                    classification: newClass,
                    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
                    'metadata.standardizedAt': new Date().toISOString(),
                    'metadata.status': 'verified'
                });
                batchSize++;
                totalUpdated++;
            }
            // Delay to avoid rate limit
            await new Promise(r => setTimeout(r, 10000)); // 10s delay (6 RPM)
        }

        if (batchSize > 0) {
            await batch.commit();
            console.log(`Updated cluster of ${batchSize}. Total so far: ${totalUpdated}`);
        }

        if (totalUpdated >= 500) {
            console.log('Reached turn limit of 500 items. Please re-run to continue.');
        }
    }

    console.log('✅ Cycle finished.');
}

standardizePart5().catch(console.error);
