import * as fs from 'fs';
import * as path from 'path';

const outputDir = 'scripts/v13_output';
const consolidatedFile = 'scripts/v13_output/extracted_part6_test1_v13.json';

function consolidate() {
    const files = fs.readdirSync(outputDir).filter(f => f.startsWith('test1_p') && f.endsWith('.json'));
    const allPassages = [];

    for (const file of files) {
        const content = JSON.parse(fs.readFileSync(path.join(outputDir, file), 'utf-8'));
        if (Array.isArray(content)) {
            allPassages.push(...content);
        } else {
            allPassages.push(content);
        }
    }

    // Sort by passageId
    allPassages.sort((a, b) => a.passageId - b.passageId);

    const result = {
        testId: 1,
        testName: "Test 1",
        passages: allPassages
    };

    fs.writeFileSync(consolidatedFile, JSON.stringify(result, null, 2));
    console.log(`✅ Consolidated ${allPassages.length} passages into ${consolidatedFile}`);
}

consolidate();
