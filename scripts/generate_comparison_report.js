
const fs = require('fs');
const path = require('path');

// 1. Extract voca.ts headwords
const vocaContent = fs.readFileSync('src/data/voca.ts', 'utf8');
const vocaRegex = /en:\s*"(.*?)"/g;
const vocaWords = [];
let vMatch;
while ((vMatch = vocaRegex.exec(vocaContent)) !== null) {
    vocaWords.push(vMatch[1].toLowerCase().trim());
}
vocaWords.sort();

// 2. Extract ShinaGong headwords (from Day 1-20 JSONs)
const sinaWords = [];
for (let i = 1; i <= 20; i++) {
    const p = `toeic-data/sina_voca_day${i}.json`;
    if (fs.existsSync(p)) {
        const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
        data.forEach(w => sinaWords.push(w.word.toLowerCase().trim()));
    }
}
sinaWords.sort();

// 3. Find Intersection
const vocaSet = new Set(vocaWords);
const sinaSet = new Set(sinaWords);
const common = vocaWords.filter(w => sinaSet.has(w));

// 4. Create CSV for comparison
// We will create a side-by-side list of 1000 words.
let csvContent = "Index,voca.ts Word,Sina Day1-20 Word,Is Common (Exact Match)\n";
for (let i = 0; i < 1000; i++) {
    const vWord = vocaWords[i] || "";
    const sWord = sinaWords[i] || "";
    const isCommon = sinaSet.has(vWord) ? "YES" : "NO";
    csvContent += `${i + 1},${vWord},${sWord},${isCommon}\n`;
}

fs.writeFileSync('voca_comparison_report.csv', csvContent);

console.log("📊 Comparison Complete:");
console.log(`- voca.ts headwords: ${vocaWords.length}`);
console.log(`- Sina headwords:    ${sinaWords.length}`);
console.log(`- Exact Intersection: ${common.length}`);
console.log(`\nReport saved to: voca_comparison_report.csv`);
