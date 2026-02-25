
const fs = require('fs');
const path = require('path');

// Original voca.ts content before deletions (from backup if possible, but let's re-read current voca.ts structure logic)
// I will check the list of removed words for Day 19 specifically.

const VOCA_TS_PATH = path.join(process.cwd(), 'src/data/voca.ts');
// Note: voca.ts was already modified. Let's look at the logic used in Step 1 report.

async function checkDay19Duplicates() {
    console.log("🔍 Investigating Day 19 Word Duplication and Removal...");

    // I will read the scripts/duplicate_voca_list.json created during Step 1 if it exists
    const dupesPath = path.join(process.cwd(), 'duplicate_voca_list.json');
    if (fs.existsSync(dupesPath)) {
        const duplicates = JSON.parse(fs.readFileSync(dupesPath, 'utf-8'));
        const day19Dupes = duplicates.filter(d => d.duplicateLocation.day === 19);

        console.log(`\n--- Day 19 Removed Duplicates (${day19Dupes.length} words) ---`);
        day19Dupes.forEach(d => {
            console.log(`- Removed: "${d.word}" | Original was in Day ${d.originalLocation.day}`);
        });
    } else {
        console.log("Error: duplicate_voca_list.json not found. Rethreading analysis...");
    }
}

checkDay19Duplicates();
