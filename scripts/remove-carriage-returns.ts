import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), 'src/data/toeic/reading/part6/tests.ts');

function removeCarriageReturns() {
    console.log("🚀 Removing carriage returns from tests.ts...");

    let content = fs.readFileSync(filePath, 'utf-8');

    // Remove all \r characters
    const cleaned = content.replace(/\r/g, '');

    fs.writeFileSync(filePath, cleaned, 'utf-8');
    console.log("✅ Removed all carriage return characters.");
}

removeCarriageReturns();
