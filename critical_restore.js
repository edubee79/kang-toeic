const fs = require('fs');
const path = 'c:\\Users\\user\\.gemini\\antigravity\\scratch\\kangs-toeic-next\\src\\data\\vocabulary_final.json';

try {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));

    // 1. Keep only original items (No 1-50 for Days 1-20)
    // 2. Ensure each item is cleaned from any stray properties (like 'id' that I added)
    const cleanData = data
        .filter(item => item.no >= 1 && item.no <= 50)
        .map(item => {
            // Reconstruct to ensure strict field order matching original
            const originalKeys = [
                "no", "word", "meaning", "example", "exampleMeaning",
                "exampleTip", "collocations", "synonyms", "derivatives",
                "grammarPoint", "day", "part", "targetScore"
            ];

            const newItem = {};
            originalKeys.forEach(key => {
                if (Object.prototype.hasOwnProperty.call(item, key)) {
                    newItem[key] = item[key];
                }
            });
            return newItem;
        });

    // Sort by day and then by no to ensure perfect order
    cleanData.sort((a, b) => a.day - b.day || a.no - b.no);

    fs.writeFileSync(path, JSON.stringify(cleanData, null, 2), 'utf8');
    console.log(`Successfully restored to original state. Total items: ${cleanData.length} (Days 1-20, No 1-50 only)`);
} catch (err) {
    console.error('CRITICAL: Restoration failed:', err);
}
