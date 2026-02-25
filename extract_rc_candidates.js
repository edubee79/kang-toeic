const fs = require('fs');
const path = require('path');

// 1. Load exclusion list (Day 1-20)
const exclusionListPath = 'c:\\Users\\user\\.gemini\\antigravity\\scratch\\kangs-toeic-next\\exclusion_list.json';
let exclusionList = [];
try {
    exclusionList = JSON.parse(fs.readFileSync(exclusionListPath, 'utf8')).map(w => w.toLowerCase());
} catch (e) {
    console.error("Exclusion list not found. Proceeding with empty list.");
}

const v3_dir = 'c:\\Users\\user\\.gemini\\antigravity\\scratch\\kangs-toeic-next\\src\\data\\toeic\\v3\\reading\\part5';
const v4_dir = 'c:\\Users\\user\\.gemini\\antigravity\\scratch\\kangs-toeic-next\\src\\data\\toeic\\v4\\reading\\part5';

const allWords = new Set();

function extractFromDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir).filter(f => f.startsWith('v' + (dir.includes('v3') ? '3' : '4') + '_p5_t') && f.endsWith('.ts'));

    files.forEach(file => {
        const content = fs.readFileSync(path.join(dir, file), 'utf8');
        // Extract contents of A, B, C, D options
        // Look for patterns like A: "word", or A: 'word'
        const matches = content.matchAll(/[A-D]:\s*["']([^"']+)["']/g);
        for (const match of matches) {
            const word = match[1].trim();
            // Basic cleaning: lowercase, remove non-alphabetic chars if needed, but for TOEIC words usually simple
            // We'll keep it simple for now: only split by spaces if it's a phrase (though options are usually single words or short phrases)
            if (word.includes(' ')) {
                word.split(/\s+/).forEach(w => {
                    const cleanW = w.toLowerCase().replace(/[^a-z-]/g, '');
                    if (cleanW.length > 2) allWords.add(cleanW);
                });
            } else {
                const cleanW = word.toLowerCase().replace(/[^a-z-]/g, '');
                if (cleanW.length > 2) allWords.add(cleanW);
            }
        }
    });
}

extractFromDir(v3_dir);
extractFromDir(v4_dir);

const filteredWords = [...allWords].filter(w => !exclusionList.includes(w)).sort();

console.log(JSON.stringify(filteredWords, null, 2));
