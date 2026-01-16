
import * as fs from 'fs';
import * as path from 'path';

// Paths
const RC_PART6_PATH = path.join(process.cwd(), 'src', 'data', 'rc_part6.ts');
const V16_READY_FILE = path.join(process.cwd(), 'scripts', 'v16_test3_ready.json');

function run() {
    console.log("🛠️  Applying V16 Test 3 Data...");

    if (!fs.existsSync(V16_READY_FILE)) {
        console.error("❌ V16 Test 3 Ready file not found!");
        return;
    }

    let tsContent = fs.readFileSync(RC_PART6_PATH, 'utf-8');
    const v16Data = JSON.parse(fs.readFileSync(V16_READY_FILE, 'utf-8'));
    const v16String = JSON.stringify(v16Data, null, 4);

    // Find Test 3 Block
    const test3StartMarker = `"testId": 3,`;
    const test3Index = tsContent.indexOf(test3StartMarker);

    if (test3Index === -1) {
        console.error("❌ Could not find Test 3 start marker.");
        return;
    }

    const blockStart = tsContent.lastIndexOf('{', test3Index);

    // Find Test 4 start or end of array
    let nextBlockStart = tsContent.indexOf(`"testId": 4,`);

    let blockEnd = -1;
    if (nextBlockStart !== -1) {
        blockEnd = tsContent.lastIndexOf('{', nextBlockStart);
        blockEnd = tsContent.lastIndexOf(',', blockEnd);
    } else {
        // Assume Test 3 is the last one in the list (or close to end)
        // Find the CLOSING bracket of the passages array
        // This is risky. Better to look for the matching closing brace of Test 3 object.
        // Simplified approach: Match { "testId": 3 ... }
        // We will just find the next "testId" or end of file.
        // Actually, we can just replace the whole array if we knew it.
        // But for regex safety, let's find the closing brace.
        // We know structure is `    {\n        "testId": 3, ... \n    },`

        // Let's assume indentation.
        // Search for `    },` after test3Index
        const nextClosingBrace = tsContent.indexOf('\n    },', test3Index);
        if (nextClosingBrace !== -1) {
            blockEnd = nextClosingBrace + 6; // Include `    },`
            // Wait, we want to replace the object. 
            // v16String is the object. 
            // So we replace from blockStart to blockEnd.
            // But verify if it has a comma.
            blockEnd = nextClosingBrace + 6;
        } else {
            console.error("Cannot find end of Test 3 block");
            return;
        }
    }

    // Safety check: is blockEnd > blockStart?
    if (blockEnd <= blockStart) {
        console.error("Block End calc error");
        return;
    }

    const preAmble = tsContent.substring(0, blockStart);
    // Be careful with comma. If Test 3 is last, v16String shouldn't add comma? 
    // Usually lists have commas. logic:
    // If nextBlockStart exists, we need a comma.
    // v16String doesn't have a comma.
    // The original text had `},`.
    // My substring logic needs refinement.

    // Better Strategy: READ the WHOLE file as JS, replace data, WRITE back.
    // But it's TS file. import issues.

    // Regex Replacement Strategy
    // Replace: /\{\s*"testId": 3,[\s\S]*?\}\s*(,)?(?=\s*\{|\s*\])/
    // This is safer.

    // Construct new content
    // We replace the chunk.
    const postAmble = tsContent.substring(blockEnd);
    // Check if new string needs a comma. The existing text likely had `},` or `}`.
    // The blockEnd calculation included `    },`. 
    // So we just put `v16String` + `,`. 
    // EXCEPT if it's the last element.

    // Let's rely on the fact that Test 3 is followed by ] or another Test.
    // If we just swap the JSON object, we are good.

    const newContent = tsContent.replace(
        /{\s*"testId": 3,[\s\S]*?questions: \[\s*([\s\S]*?)\s*\]\s*\}\s*\]\s*\}/, // Too complex
        (match) => {
            // This is too hard to verify on fly.
            return match;
        }
    );

    // OK, manual slice is best.
    const before = tsContent.substring(0, blockStart);
    const after = tsContent.substring(blockEnd); // Warning: `nextClosingBrace` logic 

    // Let's try finding `},` strictly.
    // We are replacing `{ ... }` (Test 3 Object).
    // `v16String` is `{ ... }` (Test 3 Object).
    // So we assume the original had a comma if there was more.

    // Re-do BlockEnd Logic:
    // Find the matching closing brace for the `{` at blockStart.
    // Since we don't have a brace counter, we look for `\n    },` which is the standard formatting in this file.
    const closingSequence = `\n    },`;

    const endIdx = tsContent.indexOf(closingSequence, test3Index);
    if (endIdx === -1) {
        console.error("End sequence not found"); return;
    }

    // The range to replace is blockStart ... endIdx + closingSequence.length
    // But wait, `\n    },` might be `\n    }` if last.
    // We'll check.

    const chunkToReplace = tsContent.substring(blockStart, endIdx + closingSequence.length);
    // Does it look like the right chunk?
    if (!chunkToReplace.includes(`"testId": 3`)) {
        console.error("Chunk mismatch"); return;
    }

    // Detect if we need comma
    const needsComma = chunkToReplace.trim().endsWith(',');

    const replacement = v16String + (needsComma ? ',' : '');

    const final = tsContent.substring(0, blockStart) + replacement + tsContent.substring(endIdx + closingSequence.length);
    fs.writeFileSync(RC_PART6_PATH, final);
    console.log("🎉 rc_part6.ts Updated!");
}

run();
