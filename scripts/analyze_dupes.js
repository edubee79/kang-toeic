
const fs = require('fs');
const content = fs.readFileSync('src/data/voca.ts', 'utf8');

const vocaData = {};
for (let day = 1; day <= 20; day++) {
    const dayRegex = new RegExp(`${day}:\\s*\\[([\\s\\S]*?)\\]`, 'm');
    const match = content.match(dayRegex);
    if (match) {
        const listStr = match[1];
        const entries = [];
        const entryRegex = /en:\s*"(.*?)"/g;
        let entryMatch;
        while ((entryMatch = entryRegex.exec(listStr)) !== null) {
            entries.push(entryMatch[1].toLowerCase().trim());
        }
        vocaData[day] = entries;
    }
}

const allWords = [];
Object.entries(vocaData).forEach(([day, words]) => {
    words.forEach(w => allWords.push({ word: w, day: day }));
});

const counts = {};
allWords.forEach(obj => {
    if (!counts[obj.word]) counts[obj.word] = [];
    counts[obj.word].push(obj.day);
});

const dupes = Object.entries(counts)
    .filter(([word, days]) => days.length > 1)
    .sort((a, b) => b[1].length - a[1].length);

console.log('--- Duplicate Analysis in voca.ts ---');
console.log(`Total Slots: ${allWords.length}`);
console.log(`Unique Words: ${Object.keys(counts).length}`);
console.log(`Duplicate Count: ${allWords.length - Object.keys(counts).length}`);
console.log('\nTop Duplicates (Word: [Days]):');
dupes.slice(0, 20).forEach(([word, days]) => {
    console.log(`- ${word}: Found in days [${days.join(', ')}]`);
});
