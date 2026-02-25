const fs = require('fs');
const sourcePath = 'c:\\Users\\user\\.gemini\\antigravity\\scratch\\kangs-toeic-next\\src\\data\\vocabulary_final.json';

try {
    const data = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));

    // Remove Day 30 data
    const filteredData = data.filter(item => item.day !== 30);

    fs.writeFileSync(sourcePath, JSON.stringify(filteredData, null, 2), 'utf8');
    console.log(`Successfully removed Day 30 from vocabulary_final.json. Remaining items: ${filteredData.length}`);

} catch (err) {
    console.error('Error during Day 30 removal:', err);
}
