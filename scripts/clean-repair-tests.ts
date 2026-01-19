import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), 'src/data/toeic/reading/part6/tests.ts');

function repairTest3() {
    console.log("🚀 Starting Repair for Test 3...");

    if (!fs.existsSync(filePath)) {
        console.error("❌ tests.ts not found");
        return;
    }

    let content = fs.readFileSync(filePath, 'utf-8');

    // Locate Test 3
    const test3StartRegex = /"testId":\s*3,/;
    const match = content.match(test3StartRegex);
    if (!match) {
        console.error("❌ Test 3 not found");
        return;
    }

    const startIndex = match.index!;
    const test4StartRegex = /"testId":\s*4,/;
    const match4 = content.match(test4StartRegex);
    const endIndex = match4 ? match4.index : content.length;

    const test3Block = content.substring(startIndex, endIndex);

    // Remove ALL "translation": ... and "explanation": ... AND translation: ... explanation: ...
    // The previous error introduced unquoted keys too?

    // Regex to match lines containing "translation" or "explanation" (quoted or unquoted)
    // and replace them with empty string.

    // CAUTION: This might remove legitimate fields if not careful.
    // But since we want to reload them from the JSON, clearing them is fine.

    const dirtyRegex = /(?:\s*"?(?:translation|explanation)"?\s*:.*)/g;

    let updateCount = 0;
    const cleanBlock = test3Block.replace(dirtyRegex, (match) => {
        updateCount++;
        return "";
        // We replace with empty string.
        // This leaves empty lines, which TS formatter might complain about or looks ugly,
        // but it fixes the syntax/duplication error.
    });

    const finalContent = content.substring(0, startIndex) + cleanBlock + content.substring(endIndex!);

    fs.writeFileSync(filePath, finalContent, 'utf-8');
    console.log(`✅ Removed ${updateCount} lines of translation/explanation from Test 3.`);
}

repairTest3();
