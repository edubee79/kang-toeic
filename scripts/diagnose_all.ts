
import * as fs from 'fs';
import * as path from 'path';

async function diagnoseAllDays() {
    const VOCA_TS_PATH = path.join(process.cwd(), 'src/data/voca.ts');
    const content = fs.readFileSync(VOCA_TS_PATH, 'utf-8');

    const sinaWords = new Set<string>();
    for (let i = 1; i <= 20; i++) {
        const p = path.join(process.cwd(), `toeic-data/sina_voca_day${i}.json`);
        if (fs.existsSync(p)) {
            const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
            data.forEach((w: any) => sinaWords.add(w.word.toLowerCase().trim()));
        }
    }

    console.log(`Global Sina Pool: ${sinaWords.size} words`);

    for (let day = 1; day <= 20; day++) {
        const dayRegex = new RegExp(`${day}:\\s*\\[([\\s\\S]*?)\\]`, 'm');
        const match = content.match(dayRegex);
        if (match) {
            const listStr = match[1];
            const entries: string[] = [];
            const entryRegex = /en:\s*"(.*?)"/g;
            let entryMatch;
            while ((entryMatch = entryRegex.exec(listStr)) !== null) {
                entries.push(entryMatch[1].toLowerCase().trim());
            }

            let matches = 0;
            entries.forEach(e => { if (sinaWords.has(e)) matches++; });
            console.log(`Day ${day}: ${matches} / ${entries.length}`);
        }
    }
}
diagnoseAllDays();
