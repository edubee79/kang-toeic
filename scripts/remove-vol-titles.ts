import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), 'src/data/toeic/reading/part6/tests.ts');

function removeVolTitles() {
    console.log("🚀 Removing 'ETS TOEIC Vol 4' titles from tests.ts...");

    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace all "ETS TOEIC Vol 4 - Test X" with just "Test X"
    const updatedContent = content.replace(/"title":\s*"ETS TOEIC Vol 4 - (Test \d+)"/g, '"title": "$1"');

    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    console.log("✅ Removed all 'ETS TOEIC Vol 4' prefixes from test titles.");
}

removeVolTitles();
