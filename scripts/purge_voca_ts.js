
const fs = require('fs');
const path = require('path');

async function purgeVocaTsBySina() {
    console.log("🚀 Starting Purge: Removing ShinaGong (Headwords & Derivatives) from voca.ts...");

    // 1. Build the Forbidden Set from ShinaGong Day 1-20
    const forbidden = new Set();
    for (let i = 1; i <= 20; i++) {
        const p = path.join(process.cwd(), `toeic-data/sina_voca_day${i}.json`);
        if (fs.existsSync(p)) {
            const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
            data.forEach(w => {
                // Add headword
                forbidden.add(w.word.toLowerCase().trim());
                // Add every individual word in derivatives
                if (w.derivatives) {
                    w.derivatives.forEach(dStr => {
                        const words = dStr.toLowerCase().split(/[^a-z\-]+/);
                        words.forEach(sw => {
                            if (sw.length > 2) forbidden.add(sw);
                        });
                    });
                }
            });
        }
    }
    console.log(`- ShinaGong "Forbidden" Pool size: ${forbidden.size} unique terms`);

    // 2. Read voca.ts
    const VOCA_TS_PATH = path.join(process.cwd(), 'src/data/voca.ts');
    const content = fs.readFileSync(VOCA_TS_PATH, 'utf-8');

    const dayRegex = /(\d+):\s*\[([\s\S]*?)\]/g;
    let purgedContent = content;
    let totalRemoved = 0;
    let totalRemaining = 0;
    const removedList = [];

    // We'll reconstruct the day arrays string by string
    let newContent = content.substring(0, content.indexOf('export const vocaData'));
    newContent += "export const vocaData: Record<number, any[]> = {\n";

    let match;
    while ((match = dayRegex.exec(content)) !== null) {
        const day = match[1];
        const listStr = match[2];
        const entries = [];

        // Match entry: { id: 1, en: "word", ... }
        const entryRegex = /\{\s*id:\s*(\d+),\s*en:\s*"(.*?)",\s*ko:\s*"(.*?)"(?:,\s*exampleEn:\s*"(.*?)")?(?:,\s*exampleKo:\s*"(.*?)")?\s*\}/g;
        let eMatch;
        const keptEntries = [];
        while ((eMatch = entryRegex.exec(listStr)) !== null) {
            const raw = eMatch[0];
            const id = eMatch[1];
            const en = eMatch[2].trim();
            const lowerEn = en.toLowerCase();

            if (forbidden.has(lowerEn)) {
                totalRemoved++;
                removedList.push(`[Day ${day}] ${en}`);
            } else {
                totalRemaining++;
                keptEntries.push(raw);
            }
        }

        // Reconstruct the Day string
        newContent += `  ${day}: [\n    ${keptEntries.join(',\n    ')}\n  ],\n`;
    }
    newContent += "};";

    // 3. Write back to voca.ts
    fs.writeFileSync(VOCA_TS_PATH, newContent);

    console.log(`\n✅ PURGE COMPLETE!`);
    console.log(`-----------------------------------------`);
    console.log(`- Words Removed (Matched Sina): ${totalRemoved}`);
    console.log(`- Words Remaining in voca.ts:   ${totalRemaining}`);
    console.log(`-----------------------------------------`);
    console.log(`Sample of removed words:`, removedList.slice(0, 10).join(", ") + "...");
}

purgeVocaTsBySina();
