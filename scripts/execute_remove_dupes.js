
const fs = require('fs');
const path = require('path');

async function removeDuplicates() {
    console.log("✂️ Starting Duplicates Removal from voca.ts...");

    const filePath = path.join(process.cwd(), 'src/data/voca.ts');
    const content = fs.readFileSync(filePath, 'utf-8');

    // 1. Parse existing structure
    const seen = new Set();
    const cleanedVocaData = {};

    // Regex to match each Day's block
    const dayRegex = /(\d+):\s*\[([\s\S]*?)\]/g;
    let dayMatch;

    while ((dayMatch = dayRegex.exec(content)) !== null) {
        const dayNum = parseInt(dayMatch[1]);
        const listStr = dayMatch[2];
        const entries = [];

        // Regex to match each entry object
        const entryRegex = /\{\s*id:\s*(\d+),\s*en:\s*"(.*?)",\s*ko:\s*"(.*?)"(?:,\s*exampleEn:\s*"(.*?)")?(?:,\s*exampleKo:\s*"(.*?)")?\s*\}/g;
        let entryMatch;
        while ((entryMatch = entryRegex.exec(listStr)) !== null) {
            const word = entryMatch[2].trim();
            const lowerWord = word.toLowerCase();

            if (!seen.has(lowerWord)) {
                seen.add(lowerWord);
                entries.push({
                    id: parseInt(entryMatch[1]),
                    en: word,
                    ko: entryMatch[3].trim(),
                    exampleEn: entryMatch[4],
                    exampleKo: entryMatch[5]
                });
            }
        }
        cleanedVocaData[dayNum] = entries;
    }

    // 2. Generate New File Content
    let newContent = `export interface VocaWord {
    id: number;
    en: string;
    ko: string;
    exampleEn?: string;
    exampleKo?: string;
}

export const vocaData: { [key: number]: VocaWord[] } = {
`;

    for (let day = 1; day <= 20; day++) {
        const words = cleanedVocaData[day] || [];
        newContent += `    ${day}: [\n`;
        words.forEach((w, idx) => {
            const comma = idx === words.length - 1 ? "" : ",";
            const exEn = w.exampleEn ? `, exampleEn: "${w.exampleEn}"` : "";
            const exKo = w.exampleKo ? `, exampleKo: "${w.exampleKo}"` : "";
            newContent += `        { id: ${idx + 1}, en: "${w.en}", ko: "${w.ko}"${exEn}${exKo} }${comma}\n`;
        });
        newContent += `    ]${day === 20 ? "" : ","}\n`;
    }
    newContent += `};\n`;

    fs.writeFileSync(filePath, newContent);

    console.log(`\n✅ Duplicates removed successfully!`);
    console.log(`- Original Slots: 1000`);
    console.log(`- Final Unique Words: ${seen.size}`);
    console.log(`- Deleted Duplicates: ${1000 - seen.size}`);
}

removeDuplicates();
