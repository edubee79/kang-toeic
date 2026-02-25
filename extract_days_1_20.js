const fs = require('fs');
const path = 'c:\\Users\\user\\.gemini\\antigravity\\scratch\\kangs-toeic-next\\src\\data\\vocabulary_final.json';

try {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));
    const words = data
        .filter(item => item.day >= 1 && item.day <= 20)
        .map(item => item.word);

    const uniqueWords = [...new Set(words)];
    console.log(JSON.stringify(uniqueWords, null, 2));
} catch (err) {
    console.error(err);
}
