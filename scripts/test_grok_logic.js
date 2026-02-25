
const fs = require('fs');
const path = require('path');

async function analyzeGrokLogic() {
    console.log("🧐 Analyzing with Grok's Loose Matching Logic...");

    // 1. Load UNIQUE voca.ts words (828 items)
    const content = fs.readFileSync('src/data/voca.ts', 'utf-8');
    const vocaWords = [...content.matchAll(/en:\s*"(.*?)"/g)].map(m => m[1].toLowerCase().trim());
    const vocaUnique = Array.from(new Set(vocaWords));

    // 2. Build Sina Word Pool using Grok's split() logic
    const sinaPool = new Set();
    for (let i = 1; i <= 20; i++) {
        const p = `toeic-data/sina_voca_day${i}.json`;
        if (fs.existsSync(p)) {
            const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
            data.forEach(w => {
                // Add headword
                sinaPool.add(w.word.toLowerCase().trim());
                // Add derivatives using Grok's logic (split by space and take parts)
                if (w.derivatives) {
                    w.derivatives.forEach(d => {
                        const parts = d.toLowerCase().split(/[^a-z\-]+/);
                        parts.forEach(p => { if (p.length > 2) sinaPool.add(p); });
                    });
                }
                // Even check synonyms for maximum coverage (Grok style)
                if (w.synonyms) {
                    w.synonyms.forEach(s => {
                        const parts = s.toLowerCase().split(/[^a-z\-]+/);
                        parts.forEach(p => { if (p.length > 2) sinaPool.add(p); });
                    });
                }
            });
        }
    }

    // 3. Perform Intersection
    const matched = vocaUnique.filter(w => sinaPool.has(w));

    console.log(`\n--- Grok Logic Result ---`);
    console.log(`- Unique voca.ts Items: ${vocaUnique.length}`);
    console.log(`- Matches Found:        ${matched.length}`);
    console.log(`- Match Rate:           ${((matched.length / vocaUnique.length) * 100).toFixed(1)}%`);

    if (((matched.length / vocaUnique.length) * 100) >= 45.2) {
        console.log("\n💡 Result: Grok's 45.2% is achievable with loose matching.");
    } else {
        const slotsNeeded = Math.round(vocaUnique.length * 0.452);
        console.log(`\n💡 Result: Still short by ${slotsNeeded - matched.length} words to hit 45.2%.`);
    }
}

analyzeGrokLogic();
