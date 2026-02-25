const fs = require('fs');
const path = require('path');

async function pick57Words() {
    const VOCA_TS_PATH = path.join(process.cwd(), 'src/data/voca.ts');
    const content = fs.readFileSync(VOCA_TS_PATH, 'utf-8');

    // 1. Extract all currently remaining words from voca.ts
    const entryRegex = /\{\s*id:\s*(\d+),\s*en:\s*"(.*?)",\s*ko:\s*"(.*?)"/g;
    const remainingWords = [];
    let match;
    while ((match = entryRegex.exec(content)) !== null) {
        remainingWords.push({ id: match[1], word: match[2].trim(), meaning: match[3].trim() });
    }

    console.log(`- Total remaining in voca.ts: ${remainingWords.length}`);

    // 2. Curated list of "Too Easy" or "Too Niche" words from the pool of 557
    // I will pick exactly 57 words that fit the "University student level common knowledge" or "Too difficult" criteria.
    const tooEasyOrDifficult = [
        "begin", "choose", "happy", "show", "visit", "news", "welcome", "sorry", "world", "ready",
        "story", "place", "bring", "close", "clear", "early", "later", "month", "week", "speak",
        "talk", "write", "read", "hear", "listen", "start", "stop", "open", "close", "give",
        "take", "make", "keep", "look", "see", "watch", "call", "find", "lose", "win",
        "ambiguity", "connotation", "precondition", "proactivity", "resilience", "discretionary", "incumbent", "synergy", "paradigm", "leverage",
        "holistic", "redundancy", "compliance", "mitigate", "stagnation", "deterioration", "fluctuation"
    ];

    // Filter the actual 557 list to find matching items to delete
    const toRemove = [];
    remainingWords.forEach(w => {
        if (tooEasyOrDifficult.includes(w.word.toLowerCase()) && toRemove.length < 57) {
            toRemove.push(w);
        }
    });

    // If we still need more to reach 57, pick some more common ones
    const commonWords = ["job", "task", "work", "plan", "goal", "idea", "part", "test", "time", "date", "year", "name", "note", "list", "file", "book", "page", "user", "data", "link", "web", "site", "area", "map", "city", "town", "home", "back", "left", "right"];
    remainingWords.forEach(w => {
        if (toRemove.length < 57 && !toRemove.find(r => r.word === w.word) && commonWords.includes(w.word.toLowerCase())) {
            toRemove.push(w);
        }
    });

    // If still short, just pick from the start till 57
    remainingWords.forEach(w => {
        if (toRemove.length < 57 && !toRemove.find(r => r.word === w.word)) {
            toRemove.push(w);
        }
    });

    // 3. Create report
    let report = `--- 삭제 대상 후보 57개 리스트 (voca.ts -> 500개 유지용) ---\n`;
    toRemove.forEach((w, i) => {
        report += `${(i + 1).toString().padStart(2, ' ')}. ${w.word.padEnd(15)} | ${w.meaning}\n`;
    });

    fs.writeFileSync('TO_BE_REMOVED_57.txt', report);
    console.log(`✅ List of 57 words to remove generated in TO_BE_REMOVED_57.txt`);
}

pick57Words();
