const fs = require('fs');
const path = './src/data/vocabulary_final.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

const wordToIds = {};

data.forEach(item => {
    if (!wordToIds[item.word]) {
        wordToIds[item.word] = [];
    }
    wordToIds[item.word].push(item.id);
});

console.log('--- Duplicate Words with Different IDs ---');
const duplicates = Object.keys(wordToIds).filter(word => wordToIds[word].length > 1);
if (duplicates.length === 0) {
    console.log('No duplicates found.');
} else {
    duplicates.forEach(word => {
        console.log(`${word}: [${wordToIds[word].join(', ')}]`);
    });
}

// Also check per day distribution
const dayToWords = {};
data.forEach(item => {
    if (!dayToWords[item.day]) dayToWords[item.day] = [];
    dayToWords[item.day].push(item);
});

console.log('\n--- Day Breakdown ---');
Object.keys(dayToWords).sort((a, b) => a - b).forEach(day => {
    const words = dayToWords[day];
    const score650 = words.filter(w => w.targetScore <= 650).length;
    const score800 = words.filter(w => w.targetScore <= 800).length;
    const score900 = words.filter(w => w.targetScore <= 900).length;
    console.log(`Day ${day}: total ${words.length} (650: ${score650}, 800: ${score800}, 900: ${score900})`);
});
