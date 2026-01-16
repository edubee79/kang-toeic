import * as fs from 'fs';
import * as path from 'path';

const outputDir = 'scripts/v14_output';
const consolidatedFile = 'scripts/v14_output/extracted_part6_test1_v14.json';

function consolidateV14() {
    const files = fs.readdirSync(outputDir).filter(f => f.startsWith('test1_p') && f.endsWith('_v14.json'));
    const allPassages = [];

    for (const file of files) {
        const filePath = path.join(outputDir, file);
        try {
            const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            // Support both single object and array of objects
            if (Array.isArray(content)) {
                allPassages.push(...content);
            } else {
                allPassages.push(content);
            }
        } catch (e) {
            console.error(`Error parsing ${filePath}:`, e);
        }
    }

    // Strict numerical sort by passageId
    allPassages.sort((a, b) => a.passageId - b.passageId);

    const result = {
        testId: 1,
        testName: "ETS TOEIC Vol 4 - Test 1 (V14 Precision)",
        passages: allPassages
    };

    fs.writeFileSync(consolidatedFile, JSON.stringify(result, null, 2));
    console.log(`✅ Consolidated ${allPassages.length} V14 passages into ${consolidatedFile}`);

    // Quick integrity check
    console.log("Order Check:");
    allPassages.forEach(p => console.log(`- Passage ${p.passageId}: Questions ${p.questions?.[0]?.id || 'unknown'}-${p.questions?.[p.questions.length - 1]?.id || 'unknown'}`));
}

consolidateV14();
