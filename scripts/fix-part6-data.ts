import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), 'src/data/toeic/reading/part6/tests.ts');

function fixPart6Data() {
    console.log("🚀 Starting Aggressive Cleanup for Test 1 Translations...");

    if (!fs.existsSync(filePath)) {
        console.error("❌ tests.ts not found");
        return;
    }

    let content = fs.readFileSync(filePath, 'utf-8');

    // We want to target Test 1 specifically to avoid messing up other tests if they exist.
    // Locate Test 1 block.
    const test1StartRegex = /"testId":\s*1,/;
    const match = content.match(test1StartRegex);
    if (!match) {
        console.error("❌ Test 1 not found");
        return;
    }

    const startIndex = match.index!;
    const test2StartRegex = /"testId":\s*2,/;
    const match2 = content.match(test2StartRegex);
    const endIndex = match2 ? match2.index : content.length;

    const test1Block = content.substring(startIndex, endIndex);

    // Within Test 1 block, remove "translation": "..." key-value pairs for Questions.
    // Be careful not to remove Passage-level translation if it exists (though currently it doesn't seem to).
    // The Question-level translation is indented inside "questions": [...] -> { ... }

    // Regex to remove `translation` property.
    // Matches: "translation": "ANYTHING", (plus optional newline/comma)
    const transRegex = /"translation":\s*"[^"]*",\s*(\n\s*)?/g;

    let updateCount = 0;
    const cleanTest1Block = test1Block.replace(transRegex, (match) => {
        updateCount++;
        return ""; // Replace with empty string
    });

    if (updateCount > 0) {
        const finalContent = content.substring(0, startIndex) + cleanTest1Block + content.substring(endIndex!);
        fs.writeFileSync(filePath, finalContent, 'utf-8');
        console.log(`✅ Aggressively removed ${updateCount} translation fields from Test 1.`);
    } else {
        console.log("⚠️ No translation fields found in Test 1.");
    }
}

fixPart6Data();
