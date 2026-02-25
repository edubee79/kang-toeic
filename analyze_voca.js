const fs = require('fs');
const data = JSON.parse(fs.readFileSync('c:/Users/user/.gemini/antigravity/scratch/kangs-toeic-next/src/data/vocabulary_final.json', 'utf8'));

const dayCounts = {};
const wordCounts = {};

data.forEach(item => {
    // Count per day
    dayCounts[item.day] = (dayCounts[item.day] || 0) + 1;

    // Count per word
    wordCounts[item.word] = (wordCounts[item.word] || 0) + 1;
});

console.log('--- Words Per Day ---');
Object.keys(dayCounts).sort((a, b) => a - b).forEach(day => {
    console.log(`Day ${day}: ${dayCounts[day]} words`);
});

console.log('\n--- Duplicate Words (top 20) ---');
Object.keys(wordCounts)
    .filter(word => wordCounts[word] > 1)
    .sort((a, b) => wordCounts[b] - wordCounts[a])
    .slice(0, 20)
    .forEach(word => {
        console.log(`${word}: ${wordCounts[word]} times`);
    });

// Check for 'qualified' specifically
console.log('\n--- Details for "qualified" ---');
data.filter(item => item.word === 'qualified').forEach(item => {
    console.log(`ID: ${item.id}, Day: ${item.day}, Part: ${item.part}, No: ${item.no}`);
});
