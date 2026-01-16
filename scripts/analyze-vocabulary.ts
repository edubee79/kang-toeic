import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

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

interface VocabWord {
    id: string;
    word: string;
    meaning: string;
    targetScore: 650 | 800 | 900;
    difficulty: 'basic' | 'intermediate' | 'advanced';
    day: number;
    part: number;
    no: number;
}

async function analyzeVocabulary() {
    console.log('📊 어휘 데이터 분석 시작...\n');

    const snapshot = await getDocs(collection(db, 'vocabularies'));
    const words: VocabWord[] = [];

    snapshot.forEach(doc => {
        words.push(doc.data() as VocabWord);
    });

    console.log(`총 단어 수: ${words.length}개\n`);

    // 1. 레벨별 분포
    const levelDist = {
        650: words.filter(w => w.targetScore === 650).length,
        800: words.filter(w => w.targetScore === 800).length,
        900: words.filter(w => w.targetScore === 900).length
    };

    console.log('=== 레벨별 분포 ===');
    console.log(`650점: ${levelDist[650]}개 (${(levelDist[650] / words.length * 100).toFixed(1)}%)`);
    console.log(`800점: ${levelDist[800]}개 (${(levelDist[800] / words.length * 100).toFixed(1)}%)`);
    console.log(`900점: ${levelDist[900]}개 (${(levelDist[900] / words.length * 100).toFixed(1)}%)`);
    console.log('');

    // 2. Day별 레벨 분포 (처음 5일, 마지막 5일)
    console.log('=== Day별 레벨 분포 (처음 5일) ===');
    for (let day = 1; day <= 5; day++) {
        const dayWords = words.filter(w => w.day === day);
        const dist = {
            650: dayWords.filter(w => w.targetScore === 650).length,
            800: dayWords.filter(w => w.targetScore === 800).length,
            900: dayWords.filter(w => w.targetScore === 900).length
        };
        console.log(`Day ${day}: 650(${dist[650]}) / 800(${dist[800]}) / 900(${dist[900]})`);
    }
    console.log('');

    console.log('=== Day별 레벨 분포 (마지막 5일) ===');
    for (let day = 26; day <= 30; day++) {
        const dayWords = words.filter(w => w.day === day);
        const dist = {
            650: dayWords.filter(w => w.targetScore === 650).length,
            800: dayWords.filter(w => w.targetScore === 800).length,
            900: dayWords.filter(w => w.targetScore === 900).length
        };
        console.log(`Day ${day}: 650(${dist[650]}) / 800(${dist[800]}) / 900(${dist[900]})`);
    }
    console.log('');

    // 3. Part별 레벨 분포
    console.log('=== Part별 레벨 분포 ===');
    for (let part = 1; part <= 4; part++) {
        const partWords = words.filter(w => w.part === part);
        const dist = {
            650: partWords.filter(w => w.targetScore === 650).length,
            800: partWords.filter(w => w.targetScore === 800).length,
            900: partWords.filter(w => w.targetScore === 900).length
        };
        console.log(`Part ${part}: 650(${dist[650]}) / 800(${dist[800]}) / 900(${dist[900]})`);
    }
    console.log('');

    // 4. 샘플 단어 확인 (Day 1 Part 1 vs Day 30 Part 1)
    console.log('=== 샘플 단어 비교 ===');
    console.log('\n[Day 1, Part 1 처음 5개]');
    words
        .filter(w => w.day === 1 && w.part === 1)
        .sort((a, b) => a.no - b.no)
        .slice(0, 5)
        .forEach(w => {
            console.log(`${w.no}. ${w.word} (${w.targetScore}점) - ${w.meaning}`);
        });

    console.log('\n[Day 30, Part 1 처음 5개]');
    words
        .filter(w => w.day === 30 && w.part === 1)
        .sort((a, b) => a.no - b.no)
        .slice(0, 5)
        .forEach(w => {
            console.log(`${w.no}. ${w.word} (${w.targetScore}점) - ${w.meaning}`);
        });

    // 5. 권장 학습 구조 분석
    console.log('\n\n=== 권장 학습 구조 분석 ===');

    // 650반 학습량 (Part 1-2)
    const level650Words = words.filter(w => w.targetScore === 650);
    const level650Part12 = level650Words.filter(w => w.part <= 2);
    console.log(`\n650반 (Part 1-2만):`);
    console.log(`- 총 단어: ${level650Part12.length}개`);
    console.log(`- 하루 평균: ${(level650Part12.length / 30).toFixed(1)}개`);

    // 800반 학습량 (650 + 800, Part 1-3)
    const level800Words = words.filter(w => w.targetScore <= 800 && w.part <= 3);
    console.log(`\n800반 (Part 1-3, 650+800점):`);
    console.log(`- 총 단어: ${level800Words.length}개`);
    console.log(`- 하루 평균: ${(level800Words.length / 30).toFixed(1)}개`);

    // 900반 학습량 (전체)
    console.log(`\n900반 (Part 1-4, 전체):`);
    console.log(`- 총 단어: ${words.length}개`);
    console.log(`- 하루 평균: ${(words.length / 30).toFixed(1)}개`);

    // 결과를 파일로 저장
    const report = {
        totalWords: words.length,
        levelDistribution: levelDist,
        recommendation: '분석 결과를 바탕으로 권장사항 작성 예정'
    };

    fs.writeFileSync(
        path.join(__dirname, '../docs/vocabulary-analysis-report.json'),
        JSON.stringify(report, null, 2)
    );

    console.log('\n\n✅ 분석 완료! 결과가 docs/vocabulary-analysis-report.json에 저장되었습니다.');
    process.exit(0);
}

analyzeVocabulary().catch(error => {
    console.error('❌ 분석 중 오류:', error);
    process.exit(1);
});
