
const fs = require('fs');
const path = require('path');

function identifyDuplicates() {
    console.log("🔍 [Step 1] Identifying Duplicate Words in voca.ts...");

    const filePath = path.join(process.cwd(), 'src/data/voca.ts');
    const content = fs.readFileSync(filePath, 'utf-8');

    const allEntries = [];
    const vocaDataRegex = /(\d+):\s*\[([\s\S]*?)\]/g;
    let dayMatch;

    while ((dayMatch = vocaDataRegex.exec(content)) !== null) {
        const day = parseInt(dayMatch[1]);
        const listStr = dayMatch[2];
        const entryRegex = /\{\s*id:\s*(\d+),\s*en:\s*"(.*?)",\s*ko:\s*"(.*?)"/g;
        let entryMatch;
        while ((entryMatch = entryRegex.exec(listStr)) !== null) {
            allEntries.push({
                day: day,
                id: parseInt(entryMatch[1]),
                en: entryMatch[2].trim(),
                ko: entryMatch[3].trim()
            });
        }
    }

    const seen = new Map(); // word -> {day, id}
    const duplicates = [];

    allEntries.forEach(entry => {
        const lower = entry.en.toLowerCase();
        if (seen.has(lower)) {
            duplicates.push({
                word: entry.en,
                originalLocation: seen.get(lower),
                duplicateLocation: { day: entry.day, id: entry.id }
            });
        } else {
            seen.set(lower, { day: entry.day, id: entry.id });
        }
    });

    console.log(`\n--- Duplicate Analysis Results ---`);
    console.log(`Total Word Slots: ${allEntries.length}`);
    console.log(`Unique Words:     ${seen.size}`);
    console.log(`Duplicate Slots:  ${duplicates.length}`);

    // Sort duplicates by day and id for clean reporting
    duplicates.sort((a, b) => (a.duplicateLocation.day - b.duplicateLocation.day) || (a.duplicateLocation.id - b.duplicateLocation.id));

    console.log(`\nSample of Duplicates to be Removed (Total ${duplicates.length}):`);
    duplicates.slice(0, 30).forEach(d => {
        console.log(`- "${d.word}" in Day ${d.duplicateLocation.day} (ID ${d.duplicateLocation.id}) | Original in Day ${d.originalLocation.day}`);
    });

    // Save full list to a temporary file for record keeping
    fs.writeFileSync('duplicate_voca_list.json', JSON.stringify(duplicates, null, 2));
}

identifyDuplicates();
