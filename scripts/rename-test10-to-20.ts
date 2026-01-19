import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), 'src/data/toeic/reading/part6/tests.ts');

function renameTest10To20() {
    console.log("🚀 Renaming testId 10 to testId 20...");

    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace "testId": 10 with "testId": 20
    content = content.replace(/"testId":\s*10,/g, '"testId": 20,');

    // Replace "Test 10" with "Test 20" in title
    content = content.replace(/"title":\s*"Test 10"/g, '"title": "Test 20"');

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log("✅ Renamed Test 10 to Test 20 (기출 4탄 10회차)");
}

renameTest10To20();
