
const fs = require('fs');
const path = require('path');

const voca = fs.readFileSync('src/data/voca.ts', 'utf8');
const entryRegex = /en:\s*"(.*?)"/g;
const vocaList = [];
let m;
while (m = entryRegex.exec(voca)) {
    vocaList.push(m[1].toLowerCase().trim());
}

const sinaWords = new Set();
const sinaFullData = [];
for (let i = 1; i <= 20; i++) {
    const p = `toeic-data/sina_voca_day${i}.json`;
    if (fs.existsSync(p)) {
        const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
        data.forEach((w) => {
            sinaWords.add(w.word.toLowerCase().trim());
            sinaFullData.push(w);
        });
    }
}

function getRoot(word) {
    if (word.length < 5) return word;
    return word.replace(/(ing|ed|ly|es|s|tion|ment|able|ive|al|ize|ate)$/, '').substring(0, 5);
}

const sinaRoots = new Map();
sinaFullData.forEach(w => {
    const r = getRoot(w.word.toLowerCase().trim());
    if (!sinaRoots.has(r)) sinaRoots.set(r, w.word);
});

const sinaDerivs = new Map();
sinaFullData.forEach(w => {
    if (w.derivatives) {
        w.derivatives.forEach(dStr => {
            const dMatch = dStr.match(/^([a-zA-Z\s\-]+)\s*\(/);
            if (dMatch) sinaDerivs.set(dMatch[1].trim().toLowerCase(), w.word);
        });
    }
});

console.log("--- Day 1 Detailed Match Analysis ---");
for (let i = 0; i < 50; i++) {
    const w = vocaList[i];
    let status = "MISS";
    let reason = "";

    if (sinaWords.has(w)) {
        status = "OK (Exact)";
    } else if (sinaDerivs.has(w)) {
        status = "OK (Deriv of " + sinaDerivs.get(w) + ")";
    } else {
        const r = getRoot(w);
        if (sinaRoots.has(r)) {
            status = "OK (Root match with " + sinaRoots.get(r) + ")";
        }
    }
    console.log(`${i + 1}. ${w}: ${status}`);
}
