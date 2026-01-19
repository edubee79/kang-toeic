import * as fs from 'fs';
import * as path from 'path';

function cleanTest1() {
    const testsPath = path.join(process.cwd(), 'src/data/toeic/reading/part6/tests.ts');

    if (!fs.existsSync(testsPath)) {
        console.error("❌ File not found");
        return;
    }

    let content = fs.readFileSync(testsPath, 'utf-8');

    // Regex to find Test 2 block
    const test1StartRegex = /"testId":\s*2,/;
    const test1Match = content.match(test1StartRegex);

    if (!test1Match || test1Match.index === undefined) return;

    const startIndex = test1Match.index;
    const test2StartRegex = /"testId":\s*3,/;
    const test2Match = content.match(test2StartRegex);
    const endIndex = test2Match ? test2Match.index : content.length;

    let test1Block = content.substring(startIndex, endIndex);

    // Remove translation and explanation lines
    // Pattern: comma? newline spaces translation: "..."
    // We need to be careful to only remove the lines we added.

    // Regex matches:
    // ,? \s* translation: ".*"
    // ,? \s* explanation: ".*"

    const cleanRegex = /,\s*(translation|explanation):\s*"(?:[^"\\]|\\.)*"/g;

    const cleanedBlock = test1Block.replace(cleanRegex, '');

    const finalContent = content.substring(0, startIndex) + cleanedBlock + content.substring(endIndex!);

    fs.writeFileSync(testsPath, finalContent, 'utf-8');
    console.log("✅ Cleaned Test 1 translation/explanation fields.");
}

cleanTest1();
