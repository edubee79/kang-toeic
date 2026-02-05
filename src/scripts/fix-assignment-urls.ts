
import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

if (!admin.apps.length) {
    // Handling Windows-style escaped newlines in .env.local
    let privateKey = process.env.FIREBASE_PRIVATE_KEY;
    if (privateKey) {
        // First remove literal quotes if present
        privateKey = privateKey.replace(/^"|"$/g, '');
        // Then handle escaped newlines
        privateKey = privateKey.replace(/\\n/g, '\n');
    }

    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL?.replace(/^"|"$/g, '');
    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

    if (privateKey && clientEmail && projectId) {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId,
                clientEmail,
                privateKey,
            }),
        });
        console.log('✅ Firebase Admin initialized successfully');
    } else {
        console.error('❌ Missing or invalid credentials');
        process.exit(1);
    }
}

const db = admin.firestore();

async function fixAssignmentUrls() {
    console.log('Starting to fix Assignment URLs...');
    try {
        const assignmentsRef = db.collection('Assignments');
        const snapshot = await assignmentsRef.where('isAiGenerated', '==', true).get();

        if (snapshot.empty) {
            console.log('No AI assignments found.');
            return;
        }

        let updatedCount = 0;
        for (const doc of snapshot.docs) {
            const data = doc.data();
            let url = data.homeworkUrl || '';

            // Extract Part from Title or Tags
            let part = data.targetPart;
            if (!part && data.title) {
                if (data.title.includes('Part 2')) part = 'p2';
                else if (data.title.includes('Part 3')) part = 'p3';
                else if (data.title.includes('Part 4')) part = 'p4';
                else if (data.title.includes('Part 5')) part = 'p5';
                else if (data.title.includes('Part 6')) part = 'p6';
                else if (data.title.includes('Part 7')) part = 'p7s';
            }
            if (!part) part = 'p2'; // Default safety

            const dayOffset = data.dayOffset || 0;
            const testId = data.targetTestId || (dayOffset % 10) + 1;
            const tag = data.targetTag || '';

            let newUrl = url;
            const partMap: any = {
                p1: 'part1-real',
                p2: 'part2',
                p3: 'part3',
                p4: 'part4',
                p5: 'part5-real',
                p6: 'part6',
                p7s: 'part7',
                p7d: 'part7'
            };

            const baseUrl = partMap[part] || 'part5-real';

            if (data.title && (data.title.includes('집중 공략') || data.title.includes('Drill'))) {
                newUrl = baseUrl === 'part2'
                    ? `/homework/part2/${testId}?mode=drill&tag=${tag}`
                    : `/homework/${baseUrl}/test/${testId}?mode=drill&tag=${tag}`;
            } else {
                newUrl = baseUrl === 'part2'
                    ? `/homework/part2/${testId}?direct=true&mode=real`
                    : `/homework/${baseUrl}/test/${testId}?direct=true&mode=real`;
            }

            if (url !== newUrl) {
                await doc.ref.update({ homeworkUrl: newUrl });
                console.log(`Updated [${doc.id}]: ${url} -> ${newUrl}`);
                updatedCount++;
            }
        }

        console.log(`Successfully updated ${updatedCount} assignments.`);
    } catch (error) {
        console.error('Error fixing assignments:', error);
    }
}

fixAssignmentUrls();
