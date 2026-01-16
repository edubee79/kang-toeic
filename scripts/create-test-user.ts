import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, Timestamp } from 'firebase/firestore';
import { hashPassword } from '../src/lib/password';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env.local') });

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function createTestUser() {
    const username = 'test';
    const password = 'test1234';
    const userName = '테스트학생';
    const userClass = '800반';

    try {
        console.log('🔐 Creating test user for Winter_Users collection...');

        // Hash password
        const hashedPassword = await hashPassword(password);

        // Create user document in Winter_Users collection
        const userId = `test_${Date.now()}`;

        await setDoc(doc(db, 'Winter_Users', userId), {
            userId,
            username,
            password: hashedPassword,
            userName,
            userClass,
            status: 'active', // approved status
            role: 'student',
            passedVocaDays: [],
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now()
        });

        console.log('✅ User document created in Winter_Users collection');
        console.log('\n🎉 Test user created successfully!');
        console.log('\n📝 Login credentials:');
        console.log('   아이디 (Username):', username);
        console.log('   비밀번호 (Password):', password);
        console.log('   이름:', userName);
        console.log('   반:', userClass);

        process.exit(0);
    } catch (error: any) {
        console.error('❌ Error creating test user:', error);
        process.exit(1);
    }
}

createTestUser();
