
import * as fs from 'fs';
import * as path from 'path';

// Paths
const RC_PART6_PATH = path.join(process.cwd(), 'src', 'data', 'rc_part6.ts');
const V15_READY_FILE = path.join(process.cwd(), 'scripts', 'v15_test1_ready.json');

function run() {
    console.log("🛠️  Applying V15 Data to rc_part6.ts...");

    // 1. Read existing rc_part6.ts
    let tsContent = fs.readFileSync(RC_PART6_PATH, 'utf-8');

    // 2. Read new V15 Test 1 Data
    const v15Data = JSON.parse(fs.readFileSync(V15_READY_FILE, 'utf-8'));

    // 3. Find the Test 1 Block in tsContent and Replace it
    // We look for the start of the array: `export const part6TestData: Part6TestSet[] = [`
    // And the first object `{ "testId": 1, ... }`

    // Strategy: Parse the TS file properly? No, too complex.
    // Regex Strategy:
    // Match `export const part6TestData: Part6TestSet[] = [` 
    // Then find the FIRST matching `{` and the matching `},` following it that closes Test 1.
    // This is risky if brackets align weirdly.

    // Better Strategy: 
    // We know Test 1 is valid JSON-like object at the start of the array.
    // Let's rely on the structure we see in `view_file`.
    // It starts at line 27: `export const part6TestData: Part6TestSet[] = [`
    // Test 1 starts at line 28 `{`. 
    // Test 2 starts at line 258 `{`.
    // So we replace everything between the opening `[` and the start of Test 2.

    // Search for `"testId": 2`
    const test2Index = tsContent.indexOf('"testId": 2');
    if (test2Index === -1) {
        console.error("❌ Could not find Test 2 start marker.");
        return;
    }

    // Find the `{` before "testId": 2
    // We want to replace from the first `{` after `part6TestData... [`
    // UP TO the comma/whitespace before `{ "testId": 2`.

    const arrayStartMarker = "export const part6TestData: Part6TestSet[] = [";
    const arrayStartIndex = tsContent.indexOf(arrayStartMarker);

    if (arrayStartIndex === -1) {
        console.error("❌ Could not find array start marker.");
        return;
    }

    const insertPointStart = arrayStartIndex + arrayStartMarker.length;

    // Find the brace that starts Test 2
    // We'll search backwards from "testId": 2 for the `{`
    const test2BraceIndex = tsContent.lastIndexOf('{', test2Index);

    // The content to replace is TS content[insertPointStart ... test2BraceIndex]
    // But we need to keep the comma before Test 2 if it exists.
    // Actually, let's just construct the string.

    const preAmble = tsContent.substring(0, insertPointStart);
    const postAmble = tsContent.substring(test2BraceIndex); // Starts with `{ "testId": 2 ...`

    // Stringify V15 data
    const v15String = JSON.stringify(v15Data, null, 4);

    // Combine
    const newContent = preAmble + "\n" + v15String + ",\n    " + postAmble;

    fs.writeFileSync(RC_PART6_PATH, newContent);
    console.log("🎉 rc_part6.ts Updated Successfully!");
}

run();
