
import * as fs from 'fs';
import * as path from 'path';

const voca = fs.readFileSync('src/data/voca.ts', 'utf8');
const entryRegex = /en:\s*"(.*?)"/g;
const vocaList: string[] = [];
let m;
while (m = entryRegex.exec(voca)) {
    vocaList.push(m[1].toLowerCase().trim());
}

const sinaWords = new Set<string>();
for (let i = 1; i <= 20; i++) {
    const p = `toeic-data/sina_voca_day${i}.json`;
    if (fs.existsSync(p)) {
        JSON.parse(fs.readFileSync(p, 'utf-8')).forEach((w: any) => {
            sinaWords.add(w.word.toLowerCase().trim());
        });
    }
}

console.log("--- Day 1 Analysis ---");
for (let i = 0; i < 50; i++) {
    const w = vocaList[i];
    const status = sinaWords.has(w) ? "OK" : "MISS";
    console.log(`${i + 1}. ${w}: ${status}`);
}
