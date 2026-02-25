const fs = require('fs');
const path = 'c:\\Users\\user\\.gemini\\antigravity\\scratch\\kangs-toeic-next\\src\\data\\vocabulary_final.json';

try {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));
    const exclusionSet = new Set();

    data.forEach(item => {
        if (item.day >= 1 && item.day <= 20) {
            if (item.word) exclusionSet.add(item.word.toLowerCase().trim());

            if (item.derivatives && Array.isArray(item.derivatives)) {
                item.derivatives.forEach(d => {
                    // Derivatives often look like "noticeable (형) 눈에 띄는"
                    // We need to extract the English part
                    const match = d.match(/^([a-z-]+)/i);
                    if (match) {
                        exclusionSet.add(match[1].toLowerCase().trim());
                    }
                });
            }

            // Also check synonyms just in case
            if (item.synonyms && Array.isArray(item.synonyms)) {
                item.synonyms.forEach(s => {
                    const match = s.match(/^([a-z-]+)/i);
                    if (match) {
                        exclusionSet.add(match[1].toLowerCase().trim());
                    }
                });
            }
        }
    });

    const finalExclusionList = [...exclusionSet].sort();
    fs.writeFileSync('exclusion_list_expanded.json', JSON.stringify(finalExclusionList, null, 2));
    console.log(`Expanded exclusion list created with ${finalExclusionList.length} items.`);
} catch (err) {
    console.error(err);
}
