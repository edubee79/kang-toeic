const fs = require('fs');
const path = require('path');

async function step1RefineAndBatch() {
    const VOCA_TS_PATH = path.join(process.cwd(), 'src/data/voca.ts');
    const content = fs.readFileSync(VOCA_TS_PATH, 'utf-8');

    // 1. Load the "Kill List" from our previous report
    const killListFile = path.join(process.cwd(), 'TO_BE_REMOVED_57.txt');
    const killListContent = fs.readFileSync(killListFile, 'utf-8');
    const killWords = new Set();
    const killLines = killListContent.split('\n');
    killLines.forEach(line => {
        const match = line.match(/^\s*\d+\.\s+([a-zA-Z\s\-]+)\s*\|/);
        if (match) killWords.add(match[1].trim().toLowerCase());
    });

    // 2. Extract ALL current words from voca.ts
    const entryRegex = /\{\s*id:\s*(\d+),\s*en:\s*"(.*?)",\s*ko:\s*"(.*?)"(?:,\s*exampleEn:\s*"(.*?)")?(?:,\s*exampleKo:\s*"(.*?)")?\s*\}/g;
    const allWords = [];
    let match;
    while ((match = entryRegex.exec(content)) !== null) {
        allWords.push({
            origId: match[1],
            word: match[2].trim(),
            meaning: match[3].trim(),
            example: match[4] || "",
            exampleMeaning: match[5] || ""
        });
    }

    // 3. Filter out the 57 words to get exactly 500
    const filtered500 = allWords.filter(w => !killWords.has(w.word.toLowerCase()));

    // Safety check: if for some reason we filtered too many or too few, slice to exactly 500
    const final500 = filtered500.slice(0, 500);

    // 4. Group into Day 21-30 (50 words per day)
    const batchedData = [];
    for (let day = 21; day <= 30; day++) {
        const dayIdx = day - 21;
        const dayWords = final500.slice(dayIdx * 50, (dayIdx + 1) * 50);

        dayWords.forEach((w, i) => {
            batchedData.push({
                ...w,
                day: day,
                no: i + 1,
                id: `sina_d${day}_${String(i + 1).padStart(2, '0')}` // Following sina ID pattern
            });
        });
    }

    // 5. Save intermediate result for Step 2
    fs.writeFileSync('scripts/temp_final_500.json', JSON.stringify(batchedData, null, 2));

    console.log(`--- Step 1 Results ---`);
    console.log(`- Original Words: ${allWords.length}`);
    console.log(`- Words Removed: ${allWords.length - final500.length}`);
    console.log(`- Final Batched Words: ${final500.length}`);
    console.log(`- Range: Day 21 to Day 30 (50 per day)`);
    console.log(`- Status: Ready for Step 2 (Schema mapping)`);
}

step1RefineAndBatch();
