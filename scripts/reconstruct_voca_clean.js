
const fs = require('fs');
const path = require('path');

async function perfectReconstruction() {
    console.log("🚀 Starting PERFECT RECONSTRUCTION (Restoring all data + filling gaps)...");

    // 1. Load cleaned voca.ts (828 unique items for their thematic positions)
    const content = fs.readFileSync('src/data/voca.ts', 'utf-8');
    const vocaData = [];
    const dayRegex = /(\d+):\s*\[([\s\S]*?)\]/g;
    let dayMatch;
    while ((dayMatch = dayRegex.exec(content)) !== null) {
        const day = parseInt(dayMatch[1]);
        const entryRegex = /\{\s*id:\s*(\d+),\s*en:\s*"(.*?)",\s*ko:\s*"(.*?)"(?:,\s*exampleEn:\s*"(.*?)")?(?:,\s*exampleKo:\s*"(.*?)")?\s*\}/g;
        let entryMatch;
        while ((entryMatch = entryRegex.exec(dayMatch[2])) !== null) {
            vocaData.push({
                day, id: parseInt(entryMatch[1]), en: entryMatch[2].trim(), ko: entryMatch[3].trim(),
                exampleEn: entryMatch[4], exampleKo: entryMatch[5]
            });
        }
    }

    // 2. Build Global Dictionary from Sina (ALL FIELDS)
    const exactMap = new Map();
    const clusterMap = new Map();

    for (let day = 1; day <= 20; day++) {
        const p = `toeic-data/sina_voca_day${day}.json`;
        if (fs.existsSync(p)) {
            const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
            data.forEach(w => {
                const head = w.word.toLowerCase().trim();
                exactMap.set(head, w);
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

    // 3. Find Unused Sina Headwords to fill gaps
    const usedSinaHeads = new Set();
    vocaData.forEach(v => {
        if (exactMap.has(v.en.toLowerCase())) usedSinaHeads.add(v.en.toLowerCase());
    });

    const unusedSinaHeads = [];
    exactMap.forEach((val, key) => {
        if (!usedSinaHeads.has(key)) unusedSinaHeads.push(val);
    });

    // 4. Construct Final 1,000 List
    const finalData = [];
    let unusedIdx = 0;

    for (let d = 1; d <= 20; d++) {
        const currentWordsInDay = vocaData.filter(v => v.day === d);

        // Add existing refined words
        currentWordsInDay.forEach(v => {
            const key = v.en.toLowerCase();
            const exact = exactMap.get(key);
            const cluster = clusterMap.get(key);
            let item;

            if (exact) {
                item = {
                    id: `day${d}_no${String(v.id).padStart(3, '0')}`, word: v.en, meaning: exact.meaning,
                    example: exact.example || v.exampleEn || "", exampleKo: exact.exampleMeaning || v.exampleKo || "",
                    day: d, no: v.id, matchType: 'exact', sinaId: exact.id,
                    pos: exact.pos, usageNote: exact.exampleTip, grammarPoint: exact.grammarPoint,
                    collocations: exact.collocations?.map(c => {
                        const pts = c.split('/');
                        return { en: pts[0]?.trim(), ko: pts[1]?.trim() || "" };
                    }),
                    derivatives: exact.derivatives?.map(ds => {
                        const m = ds.match(/^([a-zA-Z\s\-]+)\s*\((.*?)\)\s*(.*)$/) || ds.match(/^([a-zA-Z\s\-]+)\s*(.*)$/);
                        return m ? { word: m[1].trim(), pos: m[2] || "", meaning: m[3] || "" } : { word: ds, pos: "", meaning: "" };
                    })
                };
            } else if (cluster) {
                item = {
                    id: `day${d}_no${String(v.id).padStart(3, '0')}`, word: v.en, meaning: v.ko,
                    example: v.exampleEn || "", exampleKo: v.exampleKo || "",
                    day: d, no: v.id, matchType: 'derivative', sinaId: cluster.id,
                    pos: cluster.pos, usageNote: cluster.exampleTip, grammarPoint: cluster.grammarPoint,
                    collocations: cluster.collocations?.map(c => {
                        const pts = c.split('/');
                        return { en: pts[0]?.trim(), ko: pts[1]?.trim() || "" };
                    })
                };
            } else {
                item = {
                    id: `day${d}_no${String(v.id).padStart(3, '0')}`, word: v.en, meaning: v.ko,
                    example: v.exampleEn || "", exampleKo: v.exampleKo || "",
                    day: d, no: v.id, matchType: 'none',
                    targetScore: 700, difficulty: "intermediate"
                };
            }
            finalData.push(item);
        });

        // FILL GAPS to make it 50 per day
        let nextId = Math.max(...currentWordsInDay.map(w => w.id), 0) + 1;
        while (finalData.filter(x => x.day === d).length < 50 && unusedIdx < unusedSinaHeads.length) {
            const sw = unusedSinaHeads[unusedIdx++];
            finalData.push({
                id: `day${d}_no${String(nextId).padStart(3, '0')}`, word: sw.word, meaning: sw.meaning,
                example: sw.example, exampleKo: sw.exampleMeaning, day: d, no: nextId,
                matchType: 'exact', sinaId: sw.id, pos: sw.pos, usageNote: sw.exampleTip,
                grammarPoint: sw.grammarPoint,
                collocations: sw.collocations?.map(c => {
                    const pts = c.split('/');
                    return { en: pts[0]?.trim(), ko: pts[1]?.trim() || "" };
                }),
                derivatives: sw.derivatives?.map(ds => {
                    const m = ds.match(/^([a-zA-Z\s\-]+)\s*\((.*?)\)\s*(.*)$/) || ds.match(/^([a-zA-Z\s\-]+)\s*(.*)$/);
                    return m ? { word: m[1].trim(), pos: m[2] || "", meaning: m[3] || "" } : { word: ds, pos: "", meaning: "" };
                })
            });
            nextId++;
        }
    }

    fs.writeFileSync('src/data/vocabulary_final_new.json', JSON.stringify(finalData, null, 2));
    console.log(`\n✅ RECONSTRUCTION COMPLETE!`);
    console.log(`- Final Total: ${finalData.length} (Expected 1000)`);
    const withDerivs = finalData.filter(x => x.derivatives && x.derivatives.length > 0).length;
    console.log(`- Items with Derivatives: ${withDerivs}`);
}

perfectReconstruction();
