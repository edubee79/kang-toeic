import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), 'src/data/toeic/reading/part6/tests.ts');

function fixSyntax() {
    console.log("🚀 Starting Syntax Fix for tests.ts...");

    if (!fs.existsSync(filePath)) {
        console.error("❌ tests.ts not found");
        return;
    }

    let content = fs.readFileSync(filePath, 'utf-8');

    // The error is: "correctAnswer": "D", JUNK TEXT
    // We want to force it to be: "correctAnswer": "D",

    // Regex: Match "correctAnswer": "LETTER", FOLLOWED BY ANYTHING NOT NEWLINE, then Newline.
    // Replace with "correctAnswer": "LETTER",

    let updateCount = 0;

    // Pattern: 
    // "correctAnswer": "([A-D])", (anything except \n)
    const regex = /"correctAnswer":\s*"([A-D])",\s*[^\n]+/g;

    const newContent = content.replace(regex, (match, letter) => {
        // If the suffix is just whitespace, it's fine (but regex matched [^\n]+ so it implies visible chars or non-vertical whitespace)
        // If it strictly matches garbage, we strip it.

        // Let's verify we are not stripping something valid (like "explanation" on same line? No, explanation should be next line)
        // Expected format is nice pretty print.

        // Wait, what if the junk is: 
        // "correctAnswer": "D", some text ...

        // We replace with:
        // "correctAnswer": "D",

        console.log(`   Found bad line: ${match.substring(0, 50)}...`);
        updateCount++;
        return `"correctAnswer": "${letter}",`;
    });

    if (updateCount > 0) {
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`✅ Fixed ${updateCount} syntax errors.`);
    } else {
        console.log("✅ No syntax errors found (with this pattern).");
    }
}

fixSyntax();
