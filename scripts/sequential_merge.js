const fs = require('fs');
const path = require('path');

async function sequentialMerge() {
    console.log("🚀 Starting SEQUENTIAL RAW MERGE (Day 2 to 20)...");

    // 1. Load already moved Day 1 data
    const finalPath = path.join(process.cwd(), 'src/data/vocabulary_final.json');
    let masterList = JSON.parse(fs.readFileSync(finalPath, 'utf8'));
    console.log(`- Base: Day 1 loaded (${masterList.length} items)`);

    // 2. Sequentially add Day 2 to 20
    for (let day = 2; day <= 20; day++) {
        const filePath = path.join(process.cwd(), `toeic-data/sina_voca_day${day}.json`);
        if (fs.existsSync(filePath)) {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            masterList = masterList.concat(data);
            console.log(`- Day ${day}: Appended ${data.length} items.`);
        } else {
            console.warn(`⚠️ Warning: Day ${day} file missing!`);
        }
    }

    // 3. Save final merged data
    fs.writeFileSync(finalPath, JSON.stringify(masterList, null, 2));

    const publicPath = path.join(process.cwd(), 'public/data/vocabulary_final.json');
    fs.writeFileSync(publicPath, JSON.stringify(masterList, null, 2));

    console.log(`\n✅ ALL DAYS MERGED SUCCESSFULLY!`);
    console.log(`- Final total: ${masterList.length} words.`);
}

sequentialMerge();
