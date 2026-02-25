
const fs = require('fs');

const vocaContent = fs.readFileSync('src/data/voca.ts', 'utf8');

// Find all matches of 'en: "..."'
const allEnMatches = [];
const re = /en:\s*"([^"]+)"/g;
let match;
while ((match = re.exec(vocaContent)) !== null) {
    allEnMatches.push(match[1].toLowerCase().trim());
}

console.log('Total "en" entries found in voca.ts:', allEnMatches.length);

const uniqueVoca = new Set(allEnMatches);
console.log('Unique words in voca.ts:', uniqueVoca.size);

// Load all Sina words
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

console.log('Total unique ShinaGong Headwords:', sinaWords.size);
console.log('Total unique ShinaGong Derivatives:', sinaDerivs.size);

let exactCount = 0;
let derivCount = 0;
allEnMatches.forEach(w => {
    if (sinaWords.has(w)) {
        exactCount++;
    } else if (sinaDerivs.has(w)) {
        derivCount++;
    }
});

console.log('Matches for 1000 slots:');
console.log('- Exact:', exactCount);
console.log('- Derivative:', derivCount);
console.log('- Total:', exactCount + derivCount);
console.log('- Percentage:', ((exactCount + derivCount) / allEnMatches.length * 100).toFixed(1) + '%');
