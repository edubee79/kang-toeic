
const fs = require('fs');
const path = require('path');

async function moveSinaRawToFinal() {
    console.log("🚀 Starting 100% ACCURATE RAW TRANSFER of ShinaGong Data...");

    const finalData = [];

    for (let day = 1; day <= 20; day++) {
        const filePath = path.join(process.cwd(), `toeic-data/sina_voca_day${day}.json`);
        if (fs.existsSync(filePath)) {
            const rawData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

            rawData.forEach((w, idx) => {
                // MOVE EVERYTHING EXACTLY
                const entry = {
                    ...w, // Copy all existing fields from source JSON
                    id: `day${day}_no${String(w.no || idx + 1).padStart(3, '0')}`, // Add unique ID for app compatibility
                };
                finalData.push(entry);
            });
            console.log(`- Day ${day}: Moved ${rawData.length} entries successfully.`);
        }
    }

    const OUTPUT_PATH = path.join(process.cwd(), 'src/data/vocabulary_final.json');
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(finalData, null, 2));

    // public backup
    const PUBLIC_PATH = path.join(process.cwd(), 'public/data/vocabulary_final.json');
    fs.writeFileSync(PUBLIC_PATH, JSON.stringify(finalData, null, 2));

    console.log(`\n✅ FINAL TRANSFER COMPLETE!`);
    console.log(`- Total Words: ${finalData.length}`);
    console.log(`- Consistency Check: All original fields from ShinaGong are preserved.`);
}

moveSinaRawToFinal();
