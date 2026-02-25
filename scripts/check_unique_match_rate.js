
const fs = require('fs');

const vocaContent = fs.readFileSync('src/data/voca.ts', 'utf8');
const allEnMatches = [];
const re = /en:\s*"([^"]+)"/g;
let match;
while ((match = re.exec(vocaContent)) !== null) {
    allEnMatches.push(match[1].toLowerCase().trim());
}

const uniqueVoca = Array.from(new Set(allEnMatches));
console.log('Unique words in voca.ts:', uniqueVoca.length);

const sinaWords = new Set();
const sinaDerivs = new Set();

for (let i = 1; i <= 20; i++) {
    const p = `toeic-data/sina_voca_day${i}.json`;
    if (fs.existsSync(p)) {
        const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
        data.forEach(w => {
            sinaWords.add(w.word.toLowerCase().trim());
            if (w.derivatives) {
                w.derivatives.forEach(d => {
                    const m = d.match(/^([a-zA-Z\s\-]+)/);
                    if (m) sinaDerivs.add(m[1].trim().toLowerCase());
                });
            }
        });
    }
}

let uniqueMatchCount = 0;
uniqueVoca.forEach(w => {
    if (sinaWords.has(w) || sinaDerivs.has(w)) {
        uniqueMatchCount++;
    }
});

console.log('Matches for UNIQUE words (828 items):');
console.log('- Total Unique Matches:', uniqueMatchCount);
console.log('- Percentage (of 828):', (uniqueMatchCount / uniqueVoca.length * 100).toFixed(1) + '%');
console.log('- Comparison to 45.2%:', (uniqueMatchCount / 828 * 100).toFixed(1) + '%');
