const fs = require('fs');
const path = require('path');

async function mergeData() {
    try {
        const dayArg = process.argv[2];
        const inputFilePath = process.argv[3];

        if (!dayArg || !inputFilePath) {
            console.log('Usage: node scripts/merge_voca_data.js <day> <input-json-path>');
            process.exit(1);
        }

        const day = parseInt(dayArg);
        const MAIN_DATA_PATH = path.join(__dirname, '../src/data/vocabulary_final.json');
        const NEW_DATA_PATH = path.resolve(inputFilePath);

        console.log(`Loading datasets for Day ${day}...`);
        const mainData = JSON.parse(fs.readFileSync(MAIN_DATA_PATH, 'utf8'));
        const newData = JSON.parse(fs.readFileSync(NEW_DATA_PATH, 'utf8'));

        // Global word map for matching
        const globalWordMap = new Map();
        mainData.forEach(entry => {
            const gWord = entry.word.toLowerCase().trim();
            if (!globalWordMap.has(gWord)) globalWordMap.set(gWord, []);
            globalWordMap.get(gWord).push(entry);
        });

        let updateCount = 0;
        let addCount = 0;

        // Find max "no" for the target day
        let maxNo = 0;
        mainData.forEach(e => {
            if (e.day === day && e.no > maxNo) maxNo = e.no;
        });

        console.log(`Initial Day ${day} word count (max no): ${maxNo}`);

        newData.forEach(newEntry => {
            const wordKey = newEntry.word.toLowerCase().trim();
            const existingEntries = globalWordMap.get(wordKey);

            if (existingEntries) {
                // Update all instances found globally
                existingEntries.forEach(entry => {
                    if (newEntry.usageNote) entry.usageNote = newEntry.usageNote;
                    if (newEntry.collocations && newEntry.collocations.length > 0) entry.collocations = newEntry.collocations;
                    if (newEntry.derivatives && newEntry.derivatives.length > 0) entry.derivatives = newEntry.derivatives;
                    if (newEntry.grammarPoint) entry.grammarPoint = newEntry.grammarPoint;
                    if (newEntry.pos) entry.pos = newEntry.pos;
                    entry.sinaId = newEntry.id || `sina_d${day}_${wordKey.substring(0, 3)}`;
                });
                updateCount++;
            } else {
                // Add as new entry to the target Day
                const entryToAdd = {
                    id: `sina_d${day}_no${String(++maxNo).padStart(3, '0')}`,
                    word: newEntry.word,
                    meaning: newEntry.meaning,
                    targetScore: 700,
                    difficulty: "intermediate",
                    day: day,
                    no: maxNo,
                    example: newEntry.example,
                    exampleKo: newEntry.exampleKo,
                    theme: "General",
                    usageNote: newEntry.usageNote,
                    collocations: newEntry.collocations,
                    derivatives: newEntry.derivatives,
                    grammarPoint: newEntry.grammarPoint,
                    pos: newEntry.pos,
                    sinaId: newEntry.id || `sina_d${day}_new`
                };
                mainData.push(entryToAdd);
                addCount++;
            }
        });

        fs.writeFileSync(MAIN_DATA_PATH, JSON.stringify(mainData, null, 2));
        console.log(`\nMerge Summary for Day ${day}:`);
        console.log(`-----------------------------`);
        console.log(`- Updated: ${updateCount} words (globally)`);
        console.log(`- Added:   ${addCount} new words to Day ${day}`);
        console.log(`- Total Day ${day} words now: ${maxNo}`);
        console.log(`-----------------------------`);
        console.log(`Updated successfully: ${MAIN_DATA_PATH}`);

    } catch (error) {
        console.error('Error during merge:', error);
    }
}

mergeData();
