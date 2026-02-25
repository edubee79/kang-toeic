
const fs = require('fs');
const path = require('path');

async function listUnusedSinaWords() {
    // 1. Get all words currently in the 828-word list (voca.ts based)
    const finalData = JSON.parse(fs.readFileSync('src/data/vocabulary_final_new.json', 'utf8'));
    // We must consider both exact matches and words that were matched via derivatives
    const usedVocaWords = new Set(finalData.map(v => v.word.toLowerCase().trim()));

    // 2. Get all ShinaGong Headwords
    const sinaHeadwords = new Map(); // word -> full data

    for (let i = 1; i <= 20; i++) {
        const p = `toeic-data/sina_voca_day${i}.json`;
        if (fs.existsSync(p)) {
            const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
            data.forEach(w => {
                const word = w.word.toLowerCase().trim();
                if (!sinaHeadwords.has(word)) {
                    sinaHeadwords.set(word, {
                        word: w.word,
                        meaning: w.meaning,
                        day: i
                    });
                }
            });
        }
    }

    // 3. Filter out ShinaGong headwords that are ALREADY in our 828 list
    const unusedSina = [];
    sinaHeadwords.forEach((data, word) => {
        if (!usedVocaWords.has(word)) {
            unusedSina.push(data);
        }
    });

    // 4. Sort and Output
    console.log(`--- List of Unused ShinaGong Headwords (${unusedSina.length} total) ---`);
    console.log(`(Showing first 100 for brevity, full list saved to unused_sina_list.json)\n`);

    const displayList = unusedSina.slice(0, 100);
    displayList.forEach((d, idx) => {
        process.stdout.write(`${(idx + 1).toString().padStart(3, ' ')}. ${d.word.padEnd(20)} | ${d.meaning.padEnd(30)} | Day ${d.day}\n`);
    });

    fs.writeFileSync('unused_sina_list.json', JSON.stringify(unusedSina, null, 2));
}

listUnusedSinaWords();
