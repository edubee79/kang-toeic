
const fs = require('fs');
const path = require('path');

async function checkUnusedSinaWords() {
    // 1. Get all words currently in our 828-word list
    const finalData = JSON.parse(fs.readFileSync('src/data/vocabulary_final_new.json', 'utf8'));
    const usedVocaWords = new Set(finalData.map(v => v.word.toLowerCase().trim()));

    // 2. Get every headword from ShinaGong Day 1-20
    const sinaHeadwords = new Set();
    const sinaDetails = []; // To keep metadata if needed

    for (let i = 1; i <= 20; i++) {
        const p = `toeic-data/sina_voca_day${i}.json`;
        if (fs.existsSync(p)) {
            const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
            data.forEach(w => {
                const word = w.word.toLowerCase().trim();
                sinaHeadwords.add(word);
                sinaDetails.push(w);
            });
        }
    }

    // 3. Find ShinaGong headwords NOT in our list
    const unusedSinaWords = [];
    sinaHeadwords.forEach(w => {
        if (!usedVocaWords.has(w)) {
            unusedSinaWords.push(w);
        }
    });

    console.log(`--- ShinaGong Vocabulary Usage Report ---`);
    console.log(`Total ShinaGong (Day 1-20) Headwords: ${sinaHeadwords.size}`);
    console.log(`ShinaGong Words ALREADY in List:      ${sinaHeadwords.size - unusedSinaWords.length}`);
    console.log(`ShinaGong Words NOT YET in List:      ${unusedSinaWords.length}`);
    console.log(`-----------------------------------------`);
    console.log(`Sample of Unused ShinaGong Words (Top 20):`);
    console.log(unusedSinaWords.slice(0, 20).join(", "));
}

checkUnusedSinaWords();
