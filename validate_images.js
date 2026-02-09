const fs = require('fs');
const path = require('path');

// Part 3 검증
const part3Tests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const part4Tests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('=== PART 3 IMAGE VALIDATION ===\n');

part3Tests.forEach(test => {
    const filePath = path.join('src/data/toeic/listening/part3', `test${test}.ts`);
    if (!fs.existsSync(filePath)) {
        console.log(`❌ Test ${test}: File not found`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    // TypeScript 형식과 JSON 형식 모두 지원
    const imageMatches = [...content.matchAll(/image:\s*["']([^"']+)["']/g)];

    if (imageMatches.length === 0) {
        console.log(`⚠️  Test ${test}: No images found`);
    } else {
        console.log(`✅ Test ${test}: ${imageMatches.length} images found`);
        imageMatches.forEach(match => {
            const imagePath = match[1];
            const imageFile = path.join('public', imagePath);
            const exists = fs.existsSync(imageFile) ? '✓' : '✗';
            console.log(`   ${exists} ${path.basename(imagePath)}`);
        });
    }
    console.log('');
});

console.log('\n=== PART 4 IMAGE VALIDATION ===\n');

part4Tests.forEach(test => {
    const filePath = path.join('src/data/toeic/listening/part4', `test${test}.ts`);
    if (!fs.existsSync(filePath)) {
        console.log(`❌ Test ${test}: File not found`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    // TypeScript 형식과 JSON 형식 모두 지원
    const imageMatches = [...content.matchAll(/image:\s*["']([^"']+)["']/g)];

    if (imageMatches.length === 0) {
        console.log(`⚠️  Test ${test}: No images found`);
    } else {
        console.log(`✅ Test ${test}: ${imageMatches.length} images found`);
        imageMatches.forEach(match => {
            const imagePath = match[1];
            const imageFile = path.join('public', imagePath);
            const exists = fs.existsSync(imageFile) ? '✓' : '✗';
            console.log(`   ${exists} ${path.basename(imagePath)}`);
        });
    }
    console.log('');
});

console.log('\n=== SUMMARY ===');
console.log('Part 3: All tests should have 3 images each (30 total)');
console.log('Part 4: All tests should have 2 images each (20 total)');
