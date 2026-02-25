
import * as fs from 'fs';
import * as path from 'path';

async function verifyCounts() {
    const VOCA_TS_PATH = path.join(process.cwd(), 'src/data/voca.ts');
    const content = fs.readFileSync(VOCA_TS_PATH, 'utf-8');

    let totalVoca = 0;
    for (let day = 1; day <= 20; day++) {
        const dayRegex = new RegExp(`${day}:\\s*\\[([\\s\\S]*?)\\]`, 'm');
        const match = content.match(dayRegex);
        if (match) {
            const listStr = match[1];
            const entries = listStr.split('},').length - 1;
            console.log(`voca.ts Day ${day}: ~${entries} words`);
            totalVoca += entries;
        }
    }
    console.log(`Total voca.ts words: ~${totalVoca}`);

    let totalSina = 0;
    for (let i = 1; i <= 20; i++) {
        const p = path.join(process.cwd(), `toeic-data/sina_voca_day${i}.json`);
        if (fs.existsSync(p)) {
            const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
            console.log(`Sina Day ${i}: ${data.length} words`);
            totalSina += data.length;
        }
    }
    console.log(`Total Sina words: ${totalSina}`);
}
verifyCounts();
