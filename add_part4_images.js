const fs = require('fs');
const path = require('path');

// Part 4 Test 4-10에 이미지 참조 추가
const tests = [4, 5, 6, 7, 8, 9, 10];

tests.forEach(testNum => {
    const filePath = path.join('src/data/toeic/listening/part4', `test${testNum}.ts`);

    if (!fs.existsSync(filePath)) {
        console.log(`❌ Test ${testNum}: File not found`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const testId = testNum.toString().padStart(2, '0');

    // Q95-97 이미지 추가
    const q95Pattern = new RegExp(
        `(questionRange: "95-97",\\r?\\n\\s+contextType: [^\\n]+\\r?\\n\\s+audio: "/audio/ETS_TOEIC_3/Test_${testId}/TEST ${testId}_PART 4_95-97\\.mp3",)\\r?\\n(\\s+questions: \\[)`,
        'g'
    );

    content = content.replace(
        q95Pattern,
        `$1\r\n    image: "/images/ETS_TOEIC_3/Test_${testId}/Part_04/p4_q95.png",\r\n$2`
    );

    // Q98-100 이미지 추가
    const q98Pattern = new RegExp(
        `(questionRange: "98-100",\\r?\\n\\s+contextType: [^\\n]+\\r?\\n\\s+audio: "/audio/ETS_TOEIC_3/Test_${testId}/TEST ${testId}_PART 4_98-100\\.mp3",)\\r?\\n(\\s+questions: \\[)`,
        'g'
    );

    content = content.replace(
        q98Pattern,
        `$1\r\n    image: "/images/ETS_TOEIC_3/Test_${testId}/Part_04/p4_q98.png",\r\n$2`
    );

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Test ${testNum}: Images added`);
});

console.log('\n✅ All Part 4 tests updated!');
