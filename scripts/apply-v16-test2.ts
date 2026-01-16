
import * as fs from 'fs';
import * as path from 'path';

// Paths
const RC_PART6_PATH = path.join(process.cwd(), 'src', 'data', 'rc_part6.ts');
const V16_READY_FILE = path.join(process.cwd(), 'scripts', 'v16_test2_ready.json');

function run() {
    console.log("🛠️  Applying V16 Test 2 Data to rc_part6.ts...");

    if (!fs.existsSync(V16_READY_FILE)) {
        console.error("❌ V16 Test 2 Ready file not found!");
        return;
    }

    let tsContent = fs.readFileSync(RC_PART6_PATH, 'utf-8');
    const v16Data = JSON.parse(fs.readFileSync(V16_READY_FILE, 'utf-8'));
    const v16String = JSON.stringify(v16Data, null, 4);

    // Find Test 2 Block
    const test2StartMarker = `"testId": 2,`;
    const test2Index = tsContent.indexOf(test2StartMarker);

    if (test2Index === -1) {
        console.error("❌ Could not find Test 2 start marker.");
        return;
    }

    // Find the opening brace `{` right before "testId": 2
    const blockStart = tsContent.lastIndexOf('{', test2Index);

    // Find where Test 3 starts to determine end of Test 2
    let nextBlockStart = tsContent.indexOf(`"testId": 3,`);

    let blockEnd = -1;
    if (nextBlockStart !== -1) {
        // If Test 3 exists, end is the `{` of Test 3, minus the comma and indentation
        blockEnd = tsContent.lastIndexOf('{', nextBlockStart);
        // We want to replace up to the comma before Test 3's block
        // Search backwards for the comma from blockEnd
        blockEnd = tsContent.lastIndexOf(',', blockEnd);
    } else {
        console.warn("⚠️ Test 3 marker not found.");
        return;
    }

    const preAmble = tsContent.substring(0, blockStart);
    const postAmble = tsContent.substring(blockEnd);

    const newContent = preAmble + v16String + postAmble;

    fs.writeFileSync(RC_PART6_PATH, newContent);
    console.log("🎉 rc_part6.ts Updated with V16 Test 2 Data!");
}

run();
