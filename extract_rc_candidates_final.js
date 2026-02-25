const fs = require('fs');
const path = require('path');

// 1. Load expanded exclusion list (Day 1-20 words + derivatives + synonyms)
const exclusionListPath = 'c:\\Users\\user\\.gemini\\antigravity\\scratch\\kangs-toeic-next\\exclusion_list_expanded.json';
let exclusionList = [];
try {
    exclusionList = JSON.parse(fs.readFileSync(exclusionListPath, 'utf8')).map(w => w.toLowerCase());
} catch (e) {
    console.error("Exclusion list not found.");
}

const v3_dir = 'c:\\Users\\user\\.gemini\\antigravity\\scratch\\kangs-toeic-next\\src\\data\\toeic\\v3\\reading\\part5';
const v4_dir = 'c:\\Users\\user\\.gemini\\antigravity\\scratch\\kangs-toeic-next\\src\\data\\toeic\\v4\\reading\\part5';

const allCandidates = new Set();

function extractFromDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir).filter(f => f.startsWith('v' + (dir.includes('v3') ? '3' : '4') + '_p5_t') && f.endsWith('.ts'));

    files.forEach(file => {
        const content = fs.readFileSync(path.join(dir, file), 'utf8');
        const matches = content.matchAll(/[A-D]:\s*["']([^"']+)["']/g);
        for (const match of matches) {
            const rawWord = match[1].trim();
            // Clean the word (strip commas, periods, etc. if it's a phrase)
            const parts = rawWord.split(/\s+/);
            parts.forEach(p => {
                const cleanW = p.toLowerCase().replace(/[^a-z-]/g, '');
                if (cleanW.length > 2) {
                    allCandidates.add(cleanW);
                }
            });
        }
    });
}

extractFromDir(v3_dir);
extractFromDir(v4_dir);

// Filtering
const filteredWords = [...allCandidates].filter(w => !exclusionList.includes(w)).sort();

console.log(JSON.stringify(filteredWords, null, 2));
console.error(`Total unique candidates after filtering: ${filteredWords.length}`);
