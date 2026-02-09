const fs = require('fs');
const path = require('path');

// Part 4 Test 8-10에 이미지 참조 추가 (JSON 형식)
const tests = [8, 9, 10];

tests.forEach(testNum => {
    const filePath = path.join('src/data/toeic/listening/part4', `test${testNum}.ts`);

    if (!fs.existsSync(filePath)) {
        console.log(`❌ Test ${testNum}: File not found`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const testId = testNum.toString().padStart(2, '0');

    // Q95-97 이미지 추가 (JSON 형식)
    const q95Pattern = new RegExp(
        `(\\s+"audio":\\s+"/audio/ETS_TOEIC_3/Test_${testId}/TEST ${testId}_PART 4_95-97\\.mp3",)\\r?\\n(\\s+"questions":\\s+\\[)`,
        'g'
    );

    content = content.replace(
        q95Pattern,
        `$1\r\n    "image": "/images/ETS_TOEIC_3/Test_${testId}/Part_04/p4_q95.png",\r\n$2`
    );

    // Q98-100 이미지 추가 (JSON 형식)
    const q98Pattern = new RegExp(
        `(\\s+"audio":\\s+"/audio/ETS_TOEIC_3/Test_${testId}/TEST ${testId}_PART 4_98-100\\.mp3",)\\r?\\n(\\s+"questions":\\s+\\[)`,
        'g'
    );

    content = content.replace(
        q98Pattern,
        `$1\r\n    "image": "/images/ETS_TOEIC_3/Test_${testId}/Part_04/p4_q98.png",\r\n$2`
    );

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Test ${testNum}: Images added`);
});

console.log('\n✅ All remaining Part 4 tests updated!');
