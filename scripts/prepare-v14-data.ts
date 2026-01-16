import * as fs from 'fs';
import * as path from 'path';

// Load the consolidated V14.1 extraction result
const consolidatedPath = path.join(process.cwd(), 'scripts', 'v14_output', 'extracted_part6_test1_v14.json');
const consolidatedData = JSON.parse(fs.readFileSync(consolidatedPath, 'utf-8'));

// Target file path
const targetFile = path.resolve(process.cwd(), 'src/data/rc_part6.ts');
let fileContent = fs.readFileSync(targetFile, 'utf-8');

// Convert extracted JSON to the TS format required by the app
const newTest1Data = consolidatedData.passages.map((p: any) => {
    return {
        id: `p6-t1-p${p.passageId}`, // Generate compatible ID
        type: (p.structure.header_lines.length > 0 && p.structure.salutation) ? "LETTER" : "ARTICLE", // Simple heuristic, can be refined
        guidance: p.guidance,
        content: [
            ...(p.structure.header_lines || []),
            ...(p.structure.salutation ? [p.structure.salutation] : []),
            ...(p.structure.body_paragraphs || []),
            ...(p.structure.closing_lines || [])
        ].join('\n\n'), // Join all parts into one big content string for now, to match existing format
        questions: p.questions.map((q: any) => ({
            id: String(q.id),
            text: q.is_sentence_insertion ? "Refer to the marked sentence in the passage." : "Select the best answer.",
            options: q.options.map((opt: string) => {
                const match = opt.match(/\(([A-D])\)\s*(.*)/);
                return {
                    label: match ? match[1] : "A",
                    text: match ? match[2] : opt
                };
            }),
            correctAnswer: "A", // Placeholder
            classification: "P6_GRAMMAR" // Placeholder
        }))
    };
});

const finalOutput = {
    testId: 1,
    title: "ETS TOEIC Vol 4 - Test 1", // Preserving title
    passages: newTest1Data
};

// We need to find where Test 1 data CURRENTLY sits in the file and replace it.
// However, since parsing TS AST is complex, we will append it or replace if we find a marker.
// A simpler approach for this "Apply" script is to just LOG the object for the user to copy-paste
// OR, since we know we are replacing Test 1, we can just replace the WHOLE content if we had the full file structure.

// BETTER STRATEGY: Read the file, find `testId: 1` entries, and replace them? 
// No, that's risky with regex.

// Alternative: Re-write the file imports? No.

// Let's print the formatted string so I (the agent) can replace it using `replace_file_content`.

const test1String = JSON.stringify(newTest1Data, null, 2);
console.log("// V14.1 DATA FOR TEST 1 PREPARED:");
console.log(test1String);

// Actually, I will just write this to a temp file and then I will manually use replace_file_content
// to inject it into rc_part6.ts. This is safer.
const finalString = JSON.stringify(finalOutput, null, 2);
fs.writeFileSync(path.join(process.cwd(), 'scripts', 'v14.1_test1_ready.json'), finalString);
console.log("✅ Prepared V14.1 data in scripts/v14.1_test1_ready.json. Now apply it manually.");
