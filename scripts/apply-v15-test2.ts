
import * as fs from 'fs';
import * as path from 'path';

// Paths
const RC_PART6_PATH = path.join(process.cwd(), 'src', 'data', 'rc_part6.ts');
const V15_READY_FILE = path.join(process.cwd(), 'scripts', 'v15_test2_ready.json');

function run() {
    console.log("🛠️  Applying V15 Test 2 Data to rc_part6.ts...");

    if (!fs.existsSync(V15_READY_FILE)) {
        console.error("❌ V15 Test 2 Ready file not found!");
        return;
    }

    let tsContent = fs.readFileSync(RC_PART6_PATH, 'utf-8');
    const v15Data = JSON.parse(fs.readFileSync(V15_READY_FILE, 'utf-8'));
    const v15String = JSON.stringify(v15Data, null, 4);

    // Find Test 2 Block
    // Look for `        "testId": 2,` (with indentation)
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
        // Test 2 might be the last one? No, there are 10.
        console.warn("⚠️ Test 3 marker not found. Assuming Test 2 ends before end of array.");
        // Fallback: Find matching valid closing brace? Too hard with regex.
        // Let's assume standard formatting.
        return; // Abort to be safe
    }

    const preAmble = tsContent.substring(0, blockStart);
    // The part AFTER Test 2 (starting from the comma)
    const postAmble = tsContent.substring(blockEnd);

    // Check if comma is needed
    // The previous block (Test 1) ends with }, so preAmble ends with `,\n    ` or similar.
    // Wait, blockStart is `{`. So preAmble includes everything BEFORE that `{`.
    // Effectively we are swapping the OBJECT.

    // Wait, my substring logic:
    // preAmble = ... , \n    
    // newObject
    // postAmble = , \n    { "testId": 3 ...

    const newContent = preAmble + v15String + postAmble;

    fs.writeFileSync(RC_PART6_PATH, newContent);
    console.log("🎉 rc_part6.ts Updated with Test 2 Data!");
}

run();
