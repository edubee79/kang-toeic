import * as fs from 'fs';
import * as path from 'path';

// Current Part 2 data file
const TARGET_FILE = 'src/data/part2.ts';
const GENERATED_DIR = 'src/data/generated';

async function main() {
    console.log('Finalizing Part 2 data...');

    // 1. Read existing file
    let content = fs.readFileSync(TARGET_FILE, 'utf-8');

    // 2. Find insertion point (last closing brace `};`)
    // The file ends with:
    //     ]
    // };
    const insertionIndex = content.lastIndexOf('};');
    if (insertionIndex === -1) {
        console.error('Could not find insertion point "};" in target file.');
        return;
    }

    // 3. Read generated files
    const files = fs.readdirSync(GENERATED_DIR).filter(f => f.startsWith('part2_test') && f.endsWith('.json'));
    files.sort();

    let newContentToAppend = '';
    let addedCount = 0;

    for (const file of files) {
        const testIdStr = file.match(/test(\d+)/)?.[1];
        if (!testIdStr) continue;

        const testId = parseInt(testIdStr, 10);
        // Skip if already in file (simple check: "    6: [")
        if (content.includes(`    ${testId}: [`)) {
            console.log(`Test ${testId} already exists in part2.ts. Skipping.`);
            continue;
        }

        console.log(`Reading ${file} (Test ${testId})...`);
        const filePath = path.join(GENERATED_DIR, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const questions = JSON.parse(fileContent);

        // Format manually to match the file style (compact lines)
        let tsCode = `    ${testId}: [\n`;
        questions.forEach((q: any, i: number) => {
            // Escape quotes in script and options
            const safeScript = q.script.replace(/"/g, '\\"');
            const safeOptions = q.options.map((o: string) => `"${o.replace(/"/g, '\\"')}"`).join(', ');
            const comma = i < questions.length - 1 ? ',' : '';

            // One line per question
            tsCode += `        { id: ${q.id}, script: "${safeScript}", options: [${safeOptions}], correct: ${q.correct}, questionType: "${q.questionType}" }${comma}\n`;
        });
        tsCode += `    ]`;

        // Add comma to previous last item if needed
        // We will handle comma in the final string assembly
        newContentToAppend += `,\n${tsCode}`;
        addedCount++;
    }

    if (addedCount === 0) {
        console.log('No new data found to append.');
        return;
    }

    // 4. Assemble final content
    const prefix = content.substring(0, insertionIndex).trimEnd();
    // Check if prefix ends with comma, rarely inside an object literal unless well formatted.
    // Usually ends with `\n    ]` of the last test.
    // So we just append our newContentToAppend (which starts with comma)

    const finalContent = prefix + newContentToAppend + '\n};\n';

    // 5. Write back
    fs.writeFileSync(TARGET_FILE, finalContent);
    console.log(`Updated ${TARGET_FILE} with ${addedCount} new tests.`);
}

main();
