
import * as fs from 'fs';

const filePath = 'src/data/part3.ts';
const test02Data = JSON.parse(fs.readFileSync('test02_part3_final.json', 'utf-8'));

let content = fs.readFileSync(filePath, 'utf-8');

// Find the last ];
const lastIndex = content.lastIndexOf('];');
if (lastIndex !== -1) {
    // Generate the string representation of test02Data objects
    const newDataStr = test02Data.map((d: any) => JSON.stringify(d, null, 2)).join(',\n  ');

    const updatedContent = content.substring(0, lastIndex) + ',\n  ' + newDataStr + '\n];\n';
    fs.writeFileSync(filePath, updatedContent);
    console.log("✅ Successfully updated src/data/part3.ts with Test 02 data.");
} else {
    console.error("❌ Could not find end of array in src/data/part3.ts");
}
