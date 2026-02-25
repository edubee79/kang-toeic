const fs = require('fs');
const path = 'c:\\Users\\user\\.gemini\\antigravity\\scratch\\kangs-toeic-next\\src\\data\\vocabulary_final.json';

try {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));

    // Keep only existing Day 1-20 (no 1-50)
    // Our previous mistake added items with no 51-65 and different ID formats
    const cleanData = data.filter(item => item.no >= 1 && item.no <= 50);

    fs.writeFileSync(path, JSON.stringify(cleanData, null, 2), 'utf8');
    console.log(`Successfully restored vocabulary_final.json to original state (Day 1-20, No 1-50). Total items: ${cleanData.length}`);
} catch (err) {
    console.error('Error during restoration:', err);
}
