
import * as fs from 'fs';
import * as path from 'path';

const OUTPUT_DIR = path.join(process.cwd(), 'scripts', 'v16_output_test2');
const FINAL_FILE = path.join(process.cwd(), 'scripts', 'v16_test2_ready.json');

function run() {
    console.log("🛠️  Consolidating V16 Test 2 Data (Fixed Spacing)...");

    if (!fs.existsSync(OUTPUT_DIR)) {
        console.error("❌ Output directory not found!");
        return;
    }

    const newPassages: any[] = [];

    for (const pid of [1, 2, 3, 4]) {
        const file = path.join(OUTPUT_DIR, `test2_p${pid}_v16.json`);
        if (fs.existsSync(file)) {
            const raw = JSON.parse(fs.readFileSync(file, 'utf-8'));

            // Reconstruct Content String (V16 Rules)
            const headerArr = raw.structure.header_lines || [];
            const salutation = raw.structure.salutation || "";
            const bodyArr = raw.structure.body_paragraphs || [];
            const closingArr = raw.structure.closing_lines || [];

            // 1. Header Block
            // Join header lines with \n.
            let fullText = "";
            if (headerArr.length > 0) {
                fullText += headerArr.join('\n');
            }

            // 2. Salutation (Strict Rule: 0 blank lines after Header)
            if (salutation) {
                if (fullText.length > 0) fullText += "\n"; // Just newline, no extra blank
                fullText += salutation;
            }

            // 3. Body Start (Strict Rule: 1 blank line after Salutation)
            if (bodyArr.length > 0) {
                if (fullText.length > 0) fullText += "\n\n"; // 1 Blank Line
                fullText += bodyArr.join('\n\n'); // Paragraphs separated by 1 blank line
            }

            // 4. Closing (1 blank line after Body)
            if (closingArr.length > 0) {
                if (fullText.length > 0) fullText += "\n\n";
                fullText += closingArr.join('\n');
            }

            const passageObj = {
                id: `p6-t2-p${raw.passageId}`,
                type: raw.type || "UNKNOWN",
                guidance: `Questions ${131 + (pid - 1) * 4}-${134 + (pid - 1) * 4} refer to the following ${raw.type.toLowerCase().replace('_', ' ')}.`,
                title: raw.type !== 'EMAIL' && raw.type !== 'LETTER' ? (headerArr[0] || undefined) : undefined,
                content: fullText,
                questions: raw.questions.map((q: any) => ({
                    id: String(q.id),
                    text: q.text || "Select the best answer.",
                    options: q.options.map((opt: string) => {
                        const match = opt.match(/\(([A-D])\)\s*(.*)/);
                        return { label: match ? match[1] : "A", text: match ? match[2] : opt };
                    }),
                    correctAnswer: "A",
                    classification: "P6_GRAMMAR"
                }))
            };
            newPassages.push(passageObj);
            console.log(`✅ Loaded V16 P${pid}`);
        } else {
            console.error(`❌ V16 File P${pid} not found!`);
        }
    }

    const finalObj = {
        testId: 2,
        title: "ETS TOEIC Vol 4 - Test 2",
        passages: newPassages.sort((a, b) => a.id.localeCompare(b.id))
    };

    fs.writeFileSync(FINAL_FILE, JSON.stringify(finalObj, null, 2));
    console.log(`🎉 V16 Ready: ${FINAL_FILE}`);
}

run();
