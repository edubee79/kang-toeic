
import * as fs from 'fs';

const filePath = 'src/data/part3.ts';
const test06Data = JSON.parse(fs.readFileSync('test06_part3_final.json', 'utf-8'));

let content = fs.readFileSync(filePath, 'utf-8');

const lastIndex = content.lastIndexOf('];');
if (lastIndex !== -1) {
    const newDataStr = test06Data.map((d: any) => JSON.stringify(d, null, 2)).join(',\n  ');

    const updatedContent = content.substring(0, lastIndex) + ',\n  ' + newDataStr + '\n];\n';
    fs.writeFileSync(filePath, updatedContent);
    console.log("✅ Successfully updated src/data/part3.ts with Test 06 data.");
} else {
    console.error("❌ Could not find end of array in src/data/part3.ts");
}
