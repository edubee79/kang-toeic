const fs = require('fs');
const sourcePath = 'c:\\Users\\user\\.gemini\\antigravity\\scratch\\kangs-toeic-next\\src\\data\\vocabulary_final.json';
const backupPath = 'c:\\Users\\user\\.gemini\\antigravity\\scratch\\kangs-toeic-next\\src\\data\\vocabulary_lc_backup.json';

try {
    const data = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));

    // 1. Extract Day 21-29 data
    const lcData = data.filter(item => item.day >= 21 && item.day <= 29);

    // 2. Save LC data to backup file
    fs.writeFileSync(backupPath, JSON.stringify(lcData, null, 2), 'utf8');
    console.log(`Successfully extracted ${lcData.length} items from Day 21-29 to vocabulary_lc_backup.json`);

    // 3. Remove Day 21-29 from original data
    const filteredData = data.filter(item => !(item.day >= 21 && item.day <= 29));

    // 4. Overwrite original file without Day 21-29
    fs.writeFileSync(sourcePath, JSON.stringify(filteredData, null, 2), 'utf8');
    console.log(`Successfully removed Day 21-29 from vocabulary_final.json. Remaining items: ${filteredData.length}`);

} catch (err) {
    console.error('Error during LC data extraction:', err);
}
