const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./src/data/vocabulary_final.json', 'utf8'));

console.log('--- Expansion Samples (Day 1-15) ---');
data.filter(i => i.day <= 15).forEach((item, idx) => {
    if (item.similar && item.similar.length > 0) {
        // Only print first 100 to avoid clutter
        if (idx % 10 === 0) {
            console.log(`[Day ${item.day}] ${item.word} -> ${item.similar.join(', ')}`);
        }
    }
});
