import * as fs from 'fs';
import * as path from 'path';

const TARGET_FILE = 'src/data/part4.ts';
const GENERATED_DIR = 'src/data/generated';

async function main() {
    console.log('Finalizing Part 4 data...');

    // 1. Read existing file
    let content = fs.readFileSync(TARGET_FILE, 'utf-8');

    // 2. Find insertion point (last line with "];")
    const insertionIndex = content.lastIndexOf('];');
    if (insertionIndex === -1) {
        console.error('Could not find insertion point "];" in target file.');
        return;
    }

    // 3. Read generated files
    const newSets: any[] = [];
    const files = fs.readdirSync(GENERATED_DIR).filter(f => f.startsWith('part4_test') && f.endsWith('.json'));

    // Sort files to ensure order 03, 04, ...
    files.sort();

    for (const file of files) {
        // Skip 01 and 02 if they exist (assuming they are already in part4.ts)
        // Actually, just check if they are already in the file?
        // Let's assume generated folder ONLY contains 03-10 for now as we just ran it.
        // But to be safe, we can check.
        // Or simpler: The user asked to "finish Part 4", implying 03-10.
        // I'll import all found files.

        console.log(`Reading ${file}...`);
        const filePath = path.join(GENERATED_DIR, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const sets = JSON.parse(fileContent);
        newSets.push(...sets);
    }

    if (newSets.length === 0) {
        console.log('No new data found to append.');
        return;
    }

    console.log(`Found ${newSets.length} new sets.`);

    // 4. Prepare new content string
    // Remove the last "];"
    const prefix = content.substring(0, insertionIndex).trimEnd();

    // If prefix doesn't end with comma, add one
    const separator = prefix.endsWith(',') ? '' : ',';

    const newContentString = JSON.stringify(newSets, null, 2);
    // Remove outer [ and ] from newContentString
    const innerContent = newContentString.substring(1, newContentString.lastIndexOf(']'));

    const finalContent = prefix + separator + innerContent + '\n];\n';

    // 5. Write back
    fs.writeFileSync(TARGET_FILE, finalContent);
    console.log(`Updated ${TARGET_FILE} with ${newSets.length} new sets.`);
}

main();
