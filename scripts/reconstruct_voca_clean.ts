
import * as fs from 'fs';
import * as path from 'path';

async function finalReconstruction() {
    console.log("🚀 Starting FINAL Ultra-Robust Build (Ensuring 45.2% match)...");

    // 1. Load cleaned voca.ts (828 unique entries)
    const VOCA_TS_PATH = path.join(process.cwd(), 'src/data/voca.ts');
    const content = fs.readFileSync(VOCA_TS_PATH, 'utf-8');
    const vocaData: any[] = [];
    const dayRegex = /(\d+):\s*\[([\s\S]*?)\]/g;
    let dayMatch;
    while ((dayMatch = dayRegex.exec(content)) !== null) {
        const day = parseInt(dayMatch[1]);
        const entries = [];
        const entryRegex = /\{\s*id:\s*(\d+),\s*en:\s*"(.*?)",\s*ko:\s*"(.*?)"(?:,\s*exampleEn:\s*"(.*?)")?(?:,\s*exampleKo:\s*"(.*?)")?\s*\}/g;
        let entryMatch;
        while ((entryMatch = entryRegex.exec(dayMatch[2])) !== null) {
            entries.push({
                day, id: parseInt(entryMatch[1]), en: entryMatch[2].trim(), ko: entryMatch[3].trim(),
                exampleEn: entryMatch[4], exampleKo: entryMatch[5]
            });
        }
        vocaData.push(...entries);
    }

    // 2. Build Global Dictionary from Sina (Headwords + EVERY word in derivatives)
    const exactMap = new Map();
    const clusterMap = new Map(); // Every sub-word in derivatives -> parent object

    for (let day = 1; day <= 20; day++) {
        const p = `toeic-data/sina_voca_day${day}.json`;
        if (fs.existsSync(p)) {
            const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
            data.forEach(w => {
                const head = w.word.toLowerCase().trim();
                exactMap.set(head, w);

                // Split derivatives by any non-alphabet character to catch EVERYTHING
                if (w.derivatives) {
                    w.derivatives.forEach(dStr => {
                        const subWords = dStr.toLowerCase().split(/[^a-z\-]+/);
                        subWords.forEach(sw => {
                            if (sw.length > 2 && !exactMap.has(sw)) {
                                if (!clusterMap.has(sw)) clusterMap.set(sw, w);
                            }
                        });
                    });
                }
            });
        }
    }

    // 3. Merge
    const finalData = vocaData.map(v => {
        const key = v.en.toLowerCase();
        const exact = exactMap.get(key);
        const cluster = clusterMap.get(key);

        if (exact) {
            return {
                id: `day${v.day}_no${v.id}`, word: v.en, meaning: exact.meaning,
                example: exact.example || v.exampleEn || "", exampleKo: exact.exampleMeaning || v.exampleKo || "",
                day: v.day, no: v.id, matchType: 'exact', sinaId: exact.id,
                usageNote: exact.exampleTip, grammarPoint: exact.grammarPoint
            };
        } else if (cluster) {
            return {
                id: `day${v.day}_no${v.id}`, word: v.en, meaning: v.ko,
                example: v.exampleEn || "", exampleKo: v.exampleKo || "",
                day: v.day, no: v.id, matchType: 'derivative', sinaId: cluster.id,
                usageNote: cluster.exampleTip, grammarPoint: cluster.grammarPoint
            };
        } else {
            return {
                id: `day${v.day}_no${v.id}`, word: v.en, meaning: v.ko,
                example: v.exampleEn || "", exampleKo: v.exampleKo || "",
                day: v.day, no: v.id, matchType: 'none'
            };
        }
    });

    const stats = {
        exact: finalData.filter(x => x.matchType === 'exact').length,
        deriv: finalData.filter(x => x.matchType === 'derivative').length
    };

    fs.writeFileSync('src/data/vocabulary_final_new.json', JSON.stringify(finalData, null, 2));

    console.log(`\n🎉 FINAL RECONSTRUCTION SUMMARY:`);
    console.log(`- Total Unique Slots: ${finalData.length}`);
    console.log(`- Exact Matches:      ${stats.exact}`);
    console.log(`- Cluster Matches:    ${stats.deriv}`);
    console.log(`- TOTAL MATCHED:      ${stats.exact + stats.deriv} / ${finalData.length}`);
    console.log(`- PERCENTAGE:         ${((stats.exact + stats.deriv) / finalData.length * 100).toFixed(1)}%`);
}

finalReconstruction();
