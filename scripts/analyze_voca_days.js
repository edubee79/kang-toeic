
const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('src/data/voca.ts', 'utf8');
const dayCounts = {};
const dayRegex = /(\d+):\s*\[([\s\S]*?)\]/g;
let match;

while ((match = dayRegex.exec(content)) !== null) {
    const day = match[1];
    const listStr = match[2];
    const entries = listStr.match(/en:\s*".*?"/g) || [];
    dayCounts[day] = entries.length;
}

console.log('--- Pure Word Counts in voca.ts by Day (Excluding ShinaGong) ---');
for (let i = 1; i <= 20; i++) {
    console.log(`Day ${i.toString().padStart(2, ' ')}: ${dayCounts[i] || 0} words`);
}
const total = Object.values(dayCounts).reduce((a, b) => a + b, 0);
console.log('------------------------------------------------------------');
console.log(`Total Pure Words: ${total}`);
