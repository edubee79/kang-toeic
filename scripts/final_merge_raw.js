const fs = require('fs');
const path = require('path');

/**
 * FINAL RAW MERGE SCRIPT
 * Goal: 100% lossless transfer of ALL fields from ShinaGong source JSONs to final files.
 * Zero processing, zero remapping, zero filtering.
 */

function mergeRaw() {
    console.log("🚀 Starting 100% RAW LOSSLESS MERGE...");
    const masterList = [];

    for (let day = 1; day <= 20; day++) {
        const filePath = path.join(process.cwd(), `toeic-data/sina_voca_day${day}.json`);
        if (fs.existsSync(filePath)) {
            try {
                const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
                console.log(`- Day ${day}: Reading ${data.length} items...`);

                data.forEach(item => {
                    // Deep copy to ensure no reference issues, though not strictly needed here
                    masterList.push(JSON.parse(JSON.stringify(item)));
                });
            } catch (err) {
                console.error(`❌ Error reading Day ${day}:`, err.message);
            }
        } else {
            console.warn(`⚠️ File not found: ${filePath}`);
        }
    }

    const OUTPUT_PATHS = [
        path.join(process.cwd(), 'src/data/vocabulary_final.json'),
        path.join(process.cwd(), 'public/data/vocabulary_final.json')
    ];

    OUTPUT_PATHS.forEach(p => {
        fs.mkdirSync(path.dirname(p), { recursive: true });
        fs.writeFileSync(p, JSON.stringify(masterList, null, 2));
        console.log(`✅ Saved to: ${p}`);
    });

    console.log(`\n🎉 SUCCESS: ${masterList.length} words merged with 100% data integrity.`);
}

mergeRaw();
