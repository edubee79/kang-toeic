const fs = require('fs');
const path = require('path');

const VOCA_FINAL_PATH = 'c:/Users/user/.gemini/antigravity/scratch/kangs-toeic-next/src/data/vocabulary_final.json';
const PART5_DIR = 'c:/Users/user/.gemini/antigravity/scratch/kangs-toeic-next/src/data/toeic/reading/part5';

async function extractWords() {
    // 1. Load existing ShinaGong words (Day 1-20)
    const vocaFinal = JSON.parse(fs.readFileSync(VOCA_FINAL_PATH, 'utf8'));
    const sinaWords = new Set(
        vocaFinal
            .filter(item => item.day <= 20)
            .map(item => item.word.toLowerCase())
    );

    const candidates = new Set();

    // 2. Scan Part 5 Tests
    const testFiles = [
        path.join(PART5_DIR, 'curated/p5_hard_set11.ts'),
        path.join(PART5_DIR, 'curated/p5_hard_set12.ts')
    ];

    testFiles.forEach(file => {
        if (!fs.existsSync(file)) return;
        const content = fs.readFileSync(file, 'utf8');

        // Extract options like "A": "word"
        const optionMatches = content.match(/"[A-D]":\s*"([^"]+)"/g);
        if (optionMatches) {
            optionMatches.forEach(m => {
                const word = m.match(/"([^"]+)"$/)[1].toLowerCase().trim();
                // Split if it's more than one word (rare in options but possible)
                if (word.length > 3) candidates.add(word);
            });
        }

        // Extract explanation words or interesting ones from grammar points if possible
        // (For now focusing on options which are the primary candidates for P5 issues)
    });

    // 3. Scan Rules (Grammar Section)
    const rulesPath = path.join(PART5_DIR, 'rules.ts');
    if (fs.existsSync(rulesPath)) {
        const content = fs.readFileSync(rulesPath, 'utf8');
        // Look for words in quotes in constraints
        const constraintMatches = content.match(/"([^"]+)"/g);
        if (constraintMatches) {
            constraintMatches.forEach(m => {
                const raw = m.slice(1, -1);
                // Extract words like "registration fee" -> "registration", "fee"
                const parts = raw.split(/[\s,()/]+/).filter(p => p.length > 3);
                parts.forEach(p => {
                    if (/^[a-z-]+$/i.test(p)) candidates.add(p.toLowerCase());
                });
            });
        }
    }

    // 4. Filtering
    const finalCandidates = Array.from(candidates)
        .filter(w => !sinaWords.has(w))
        .filter(w => !['from', 'with', 'that', 'this', 'have', 'been', 'would', 'will', 'they', 'their'].includes(w)) // basic stop words
        .sort();

    console.log(JSON.stringify(finalCandidates, null, 2));
}

extractWords();
