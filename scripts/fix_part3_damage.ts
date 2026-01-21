
import fs from 'fs';
import path from 'path';

const part3Path = path.join(process.cwd(), 'src/data/part3.ts');

function fixPart3() {
    const content = fs.readFileSync(part3Path, 'utf-8');
    const lines = content.split('\n');
    const newLines: string[] = [];

    let isInsideScript = false;
    // A simple heuristic: script array starts with "script": [
    // But we have nested objects.
    // Better: Identify objects by their keys.

    // We will process the file. If we encounter a line with "questionType":
    // We check if the current object being defined seems to be a script object.
    // Script objects strictly have "speaker" and "text". Question objects have "id", "text", "options".

    // Since we are processing line by line, we can look at a window of lines or state.
    // However, removing the line is safe if we are sure.

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.includes('"questionType":')) {
            // Check context - look backwards for "speaker" or "id"
            let isScript = false;
            for (let j = i - 1; j >= 0; j--) {
                const prev = lines[j];
                if (prev.includes('"speaker":')) {
                    isScript = true;
                    break;
                }
                if (prev.includes('"options":') || prev.includes('"id":')) {
                    isScript = false;
                    break;
                }
                if (prev.trim().startsWith('}')) {
                    // End of previous object, stop searching
                    break;
                }
                if (prev.trim().startsWith('{')) {
                    // Start of object
                    // If we hit start of object and haven't seen speaker or id, ambiguous?
                    // Part 3 script objects always have speaker first? usually.
                    // Let's look slightly forward too? No need.
                    // In the corrupted file, "speaker" is definitely before "text".
                }
            }

            if (isScript) {
                console.log(`Removing erroneously inserted questionType at line ${i + 1}`);
                continue; // Skip adding this line
            }
        }

        newLines.push(line);
    }

    // Also, we noticed contextType might have been inserted inside script?
    // Let's check if the previous script inserted contextType in wrong places too.
    // The logic for contextType was likely at the Set level, which is fine.

    const result = newLines.join('\n');
    fs.writeFileSync(part3Path, result);
    console.log('Fixed part3.ts');
}

fixPart3();
