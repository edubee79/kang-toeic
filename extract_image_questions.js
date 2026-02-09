const fs = require('fs');
const path = require('path');

console.log('=== IMAGE-QUESTION VERIFICATION REPORT ===\n');

// Part 3 검증
const part3Tests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('## PART 3\n');

part3Tests.forEach(testNum => {
    const filePath = path.join('src/data/toeic/listening/part3', `test${testNum}.ts`);
    if (!fs.existsSync(filePath)) return;

    const content = fs.readFileSync(filePath, 'utf8');

    // 이미지가 있는 세트 찾기
    const imagePattern = /questionRange:\s*["'](\d+-\d+)["'][\s\S]*?image:\s*["']([^"']+)["'][\s\S]*?text:\s*["'](Look at the graphic[^"']+)["'][\s\S]*?options:\s*\{[\s\S]*?A:\s*["']([^"']+)["'][\s\S]*?B:\s*["']([^"']+)["'][\s\S]*?C:\s*["']([^"']+)["'][\s\S]*?D:\s*["']([^"']+)["']/g;

    const matches = [...content.matchAll(imagePattern)];

    if (matches.length > 0) {
        console.log(`### Test ${testNum}`);
        matches.forEach(match => {
            const [, range, imagePath, questionText, optA, optB, optC, optD] = match;
            const imageFile = path.basename(imagePath);
            console.log(`**Q${range}**: \`${imageFile}\``);
            console.log(`- Question: "${questionText}"`);
            console.log(`- Options: A) ${optA}, B) ${optB}, C) ${optC}, D) ${optD}`);
            console.log(`- Image path: ${imagePath}`);
            console.log('');
        });
    }
});

// Part 4 검증
const part4Tests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('\n## PART 4\n');

part4Tests.forEach(testNum => {
    const filePath = path.join('src/data/toeic/listening/part4', `test${testNum}.ts`);
    if (!fs.existsSync(filePath)) return;

    const content = fs.readFileSync(filePath, 'utf8');

    // 이미지가 있는 세트 찾기
    const imagePattern = /questionRange:\s*["'](\d+-\d+)["'][\s\S]*?image:\s*["']([^"']+)["'][\s\S]*?text:\s*["'](Look at the graphic[^"']+)["'][\s\S]*?options:\s*\{[\s\S]*?A:\s*["']([^"']+)["'][\s\S]*?B:\s*["']([^"']+)["'][\s\S]*?C:\s*["']([^"']+)["'][\s\S]*?D:\s*["']([^"']+)["']/g;

    const matches = [...content.matchAll(imagePattern)];

    if (matches.length > 0) {
        console.log(`### Test ${testNum}`);
        matches.forEach(match => {
            const [, range, imagePath, questionText, optA, optB, optC, optD] = match;
            const imageFile = path.basename(imagePath);
            console.log(`**Q${range}**: \`${imageFile}\``);
            console.log(`- Question: "${questionText}"`);
            console.log(`- Options: A) ${optA}, B) ${optB}, C) ${optC}, D) ${optD}`);
            console.log(`- Image path: ${imagePath}`);
            console.log('');
        });
    }
});
