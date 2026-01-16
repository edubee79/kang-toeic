const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../toeic-data/ETS정기기출3탄/RC/1회/rc_1회_complete.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const total = Object.keys(data).length;
const withAnswer = Object.values(data).filter(q => q.answer).length;
const withType = Object.values(data).filter(q => q.type).length;
const withExplanation = Object.values(data).filter(q => q.explanation).length;
const withTranslation = Object.values(data).filter(q => q.translation).length;

console.log('📊 추출 결과 통계\n');
console.log('총 문제 수:', total);
console.log('정답 있음:', withAnswer, `(${(withAnswer / total * 100).toFixed(1)}%)`);
console.log('분류 있음:', withType, `(${(withType / total * 100).toFixed(1)}%)`);
console.log('해설 있음:', withExplanation, `(${(withExplanation / total * 100).toFixed(1)}%)`);
console.log('번역 있음:', withTranslation, `(${(withTranslation / total * 100).toFixed(1)}%)`);

console.log('\n⚠️ 누락된 문제:\n');
let missingCount = 0;
Object.entries(data).forEach(([id, q]) => {
    if (!q.answer || !q.type || !q.explanation) {
        console.log(`  ${id}:`);
        console.log(`    - 정답: ${q.answer ? '✅' : '❌'}`);
        console.log(`    - 분류: ${q.type ? '✅' : '❌'}`);
        console.log(`    - 해설: ${q.explanation ? '✅' : '❌'}`);
        missingCount++;
    }
});

if (missingCount === 0) {
    console.log('  없음! 모든 문제가 완벽하게 추출되었습니다. ✅');
} else {
    console.log(`\n총 ${missingCount}개 문제에 누락된 정보가 있습니다.`);
}

// 문제 ID 범위 확인
const ids = Object.keys(data).map(id => parseInt(id.replace('q', '')));
const minId = Math.min(...ids);
const maxId = Math.max(...ids);
console.log(`\n📝 문제 ID 범위: q${minId} ~ q${maxId}`);

// 연속성 확인
const missing = [];
for (let i = minId; i <= maxId; i++) {
    if (!data[`q${i}`]) {
        missing.push(i);
    }
}

if (missing.length > 0) {
    console.log(`\n⚠️ 누락된 문제 ID: ${missing.map(id => `q${id}`).join(', ')}`);
} else {
    console.log('\n✅ 모든 문제 ID가 연속적입니다.');
}
