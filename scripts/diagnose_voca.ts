
import * as fs from 'fs';
import * as path from 'path';

async function diagnoseMatching() {
    console.log("🔍 Diagnostic Search Starting...");

    // 1. Load Day 1 from voca.ts
    const VOCA_TS_PATH = path.join(process.cwd(), 'src/data/voca.ts');
    const content = fs.readFileSync(VOCA_TS_PATH, 'utf-8');

    const day1Words: string[] = [];
    const day1Regex = /1:\s*\[([\s\S]*?)\]/;
    const match = content.match(day1Regex);
    if (match) {
        const listStr = match[1];
        const entryRegex = /en:\s*"(.*?)"/g;
        let entryMatch;
        while ((entryMatch = entryRegex.exec(listStr)) !== null) {
            day1Words.push(entryMatch[1].toLowerCase().trim());
        }
    }

    console.log(`Step 1: Found ${day1Words.length} words in voca.ts Day 1`);

    // 2. Load ALL words from Sina JSONs
    const sinaWords = new Set<string>();
    const sinaFiles: string[] = [];
    for (let i = 1; i <= 20; i++) {
        const p = path.join(process.cwd(), `toeic-data/sina_voca_day${i}.json`);
        if (fs.existsSync(p)) {
            const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
            data.forEach((w: any) => {
                sinaWords.add(w.word.toLowerCase().trim());
            });
            sinaFiles.push(`day${i}`);
        }
    }
    console.log(`Step 2: Loaded ${sinaWords.size} unique words from ${sinaFiles.length} Sina files`);

    // 3. Compare Day 1
    console.log("\n--- Day 1 Matching Results ---");
    let matchCount = 0;
    const failures: string[] = [];

    day1Words.forEach(w => {
        if (sinaWords.has(w)) {
            matchCount++;
        } else {
            failures.push(w);
        }
    });

    console.log(`Matched: ${matchCount} / ${day1Words.length}`);
    if (failures.length > 0) {
        console.log(`Failed Words: ${failures.slice(0, 10).join(", ")}...`);

        // Detailed check for first failure
        const firstFail = failures[0];
        console.log(`\nChecking why '${firstFail}' failed:`);
        // Check fuzzy
        sinaWords.forEach(sw => {
            if (sw.includes(firstFail) || firstFail.includes(sw)) {
                console.log(`  - Potential near match found in Sina: '${sw}'`);
            }
        });
    }
}

diagnoseMatching();
