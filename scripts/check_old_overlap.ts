
import * as fs from 'fs';
import * as path from 'path';

async function checkOldOverlap() {
    const VOCA_TS_PATH = path.join(process.cwd(), 'src/data/voca.ts');
    const OLD_FINAL_PATH = path.join(process.cwd(), 'src/data/vocabulary_final.json');

    if (!fs.existsSync(OLD_FINAL_PATH)) return;

    const content = fs.readFileSync(VOCA_TS_PATH, 'utf-8');
    const oldFinal = JSON.parse(fs.readFileSync(OLD_FINAL_PATH, 'utf-8'));
    const oldWords = new Set(oldFinal.map((w: any) => w.word.toLowerCase().trim()));

    const vocaWords: string[] = [];
    const entryRegex = /en:\s*"(.*?)"/g;
    let match;
    while ((match = entryRegex.exec(content)) !== null) {
        vocaWords.push(match[1].toLowerCase().trim());
    }

    let matches = 0;
    vocaWords.forEach(w => { if (oldWords.has(w)) matches++; });
    console.log(`Overlap between voca.ts and OLD vocabulary_final.json: ${matches} / ${vocaWords.length}`);
}
checkOldOverlap();
