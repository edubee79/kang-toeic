const fs = require('fs');
const path = './src/data/vocabulary_final.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

const wordGroups = {};
const dayCounts = {};

data.forEach(item => {
    const wordClean = item.word.toLowerCase().trim();
    if (!wordGroups[wordClean]) wordGroups[wordClean] = [];
    wordGroups[wordClean].push({ day: item.day, id: item.id });

    dayCounts[item.day] = (dayCounts[item.day] || 0) + 1;
});

console.log('--- 1. Words Per Day (Local JSON) ---');
Object.keys(dayCounts).sort((a, b) => a - b).forEach(day => {
    console.log(`Day ${day}: ${dayCounts[day]} words`);
});

console.log('\n--- 2. Internal Duplicates (Day 1-15) ---');
let duplicateCount = 0;
Object.keys(wordGroups).sort().forEach(word => {
    if (wordGroups[word].length > 1) {
        duplicateCount++;
        const occurrences = wordGroups[word].map(i => `Day ${i.day}(${i.id})`).join(', ');
        console.log(`- "${word}": ${occurrences}`);
    }
});

if (duplicateCount === 0) {
    console.log('No duplicates found in Day 1-15 local data.');
} else {
    console.log(`\nFound ${duplicateCount} duplicate words.`);
}
