import * as fs from 'fs';
import * as path from 'path';

const testsPath = path.join(process.cwd(), 'src/data/toeic/reading/part6/tests.ts');
const test10DataPath = path.join(process.cwd(), 'extracted_test10_questions.json');

function insertTest10() {
    console.log("🚀 Inserting Test 10 into tests.ts...");

    const test10Data = JSON.parse(fs.readFileSync(test10DataPath, 'utf-8'));
    let testsContent = fs.readFileSync(testsPath, 'utf-8');

    // Find the position after Test 9 (before Test 20)
    const test20Regex = /"testId":\s*20,/;
    const match = testsContent.match(test20Regex);

    if (!match || match.index === undefined) {
        console.error("❌ Test 20 not found");
        return;
    }

    // Convert Test 10 data to TypeScript format
    const test10TS = `    {
        "testId": 10,
        "title": "Test 10",
        "passages": ${JSON.stringify(test10Data.passages, null, 12).replace(/^/gm, '        ')}
    },
    `;

    // Insert before Test 20
    const insertPosition = match.index;
    const newContent = testsContent.substring(0, insertPosition) + test10TS + testsContent.substring(insertPosition);

    fs.writeFileSync(testsPath, newContent, 'utf-8');
    console.log("✅ Test 10 inserted successfully!");
}

insertTest10();
