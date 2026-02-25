const fs = require('fs');
const path = require('path');

const VOCA_FINAL_PATH = 'c:/Users/user/.gemini/antigravity/scratch/kangs-toeic-next/src/data/vocabulary_final.json';
const BASE_DIR = 'c:/Users/user/.gemini/antigravity/scratch/kangs-toeic-next/src/data/toeic';

const TEST_FILES = [
    ...Array.from({ length: 10 }, (_, i) => path.join(BASE_DIR, `v3/reading/part5/v3_p5_t${String(i + 1).padStart(2, '0')}.ts`)),
    ...Array.from({ length: 10 }, (_, i) => path.join(BASE_DIR, `v4/reading/part5/v4_p5_t${String(i + 1).padStart(2, '0')}.ts`)),
    path.join(BASE_DIR, 'reading/part5/curated/p5_hard_set11.ts'),
    path.join(BASE_DIR, 'reading/part5/curated/p5_hard_set12.ts')
];

async function run() {
    // 1. Load ShinaGong words (Day 1-20)
    const vocaData = JSON.parse(fs.readFileSync(VOCA_FINAL_PATH, 'utf8'));
    const sinaWords = new Set(
        vocaData
            .filter(item => item.day <= 20)
            .map(item => item.word.toLowerCase().trim())
    );
    console.log(`Loaded ${sinaWords.size} ShinaGong words.`);

    const foundWords = new Set();
    const wordCounts = {}; // To see frequency

    // 2. Scan 22 Test Sets
    TEST_FILES.forEach(file => {
        if (!fs.existsSync(file)) {
            console.log(`Missing file: ${file}`);
            return;
        }
        const content = fs.readFileSync(file, 'utf8');

        // Match "A": "word", "B": "word" etc.
        // We look for both "A": or A: (some files might not have quotes on keys)
        const optionRegex = /["']?[A-D]["']?:\s*["']([^"']+)["']/g;
        let match;
        while ((match = optionRegex.exec(content)) !== null) {
            const word = match[1].toLowerCase().trim();

            // Basic cleaning: ignore if empty or just symbols
            if (!word || /^[^\w]+$/.test(word)) continue;

            // Split multi-word options (e.g., "in order to" -> extract all or keep as phrase?)
            // Usually, RC vocab targets specific words. Let's split and also check the whole phrase.
            const parts = word.split(/[\s,/-]+/).filter(p => p.length > 1);

            parts.forEach(p => {
                if (!sinaWords.has(p)) {
                    foundWords.add(p);
                    wordCounts[p] = (wordCounts[p] || 0) + 1;
                }
            });

            // Also keep the whole phrase if it's a common idiom and not in Sina
            if (word.includes(' ') && !sinaWords.has(word)) {
                foundWords.add(word);
                wordCounts[word] = (wordCounts[word] || 0) + 1;
            }
        }
    });

    const result = Array.from(foundWords)
        .map(w => ({ word: w, count: wordCounts[w] }))
        .sort((a, b) => b.count - a.count); // Most frequent first

    fs.writeFileSync('scripts/extracted_p5_vocab.json', JSON.stringify(result, null, 2));
    console.log(`Extraction complete. Found ${result.length} unique words/phrases not in ShinaGong.`);
    console.log(`Results saved to scripts/extracted_p5_vocab.json`);
}

run();
