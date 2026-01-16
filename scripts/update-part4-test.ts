
import * as fs from 'fs';

const testId = parseInt(process.argv[2] || '2');
const filePath = 'src/data/part4.ts';
const testData = JSON.parse(fs.readFileSync(`test${String(testId).padStart(2, '0')}_part4_final.json`, 'utf-8'));

let content = fs.readFileSync(filePath, 'utf-8');

const lastIndex = content.lastIndexOf('];');
if (lastIndex !== -1) {
    const newDataStr = testData.map((d: any) => JSON.stringify(d, null, 2)).join(',\n  ');

    const updatedContent = content.substring(0, lastIndex) + ',\n  ' + newDataStr + '\n];\n';
    fs.writeFileSync(filePath, updatedContent);
    console.log(`✅ Successfully updated src/data/part4.ts with Test ${String(testId).padStart(2, '0')} data.`);
} else {
    console.error("❌ Could not find end of array in src/data/part4.ts");
}
