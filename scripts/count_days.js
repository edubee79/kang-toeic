
const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/data/vocabulary_final_new.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const dayCounts = {};
data.forEach(item => {
    dayCounts[item.day] = (dayCounts[item.day] || 0) + 1;
});

console.log('--- Day-by-Day Word Counts (After Duplicate Removal) ---');
let total = 0;
for (let day = 1; day <= 20; day++) {
    const count = dayCounts[day] || 0;
    console.log(`Day ${day.toString().padStart(2, ' ')}: ${count} words`);
    total += count;
}
console.log('-------------------------------------------------------');
console.log(`Total Unique Words: ${total}`);
