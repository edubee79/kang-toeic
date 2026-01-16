
import * as fs from 'fs';
import * as path from 'path';

// Paths
const OUTPUT_DIR = path.join(process.cwd(), 'scripts', 'v15_output_test2');
const FINAL_FILE = path.join(process.cwd(), 'scripts', 'v15_test2_ready.json');

function run() {
    console.log("🛠️  Consolidating V15 Test 2 Data...");

    if (!fs.existsSync(OUTPUT_DIR)) {
        console.error("❌ Output directory not found!");
        return;
    }

    const newPassages: any[] = [];

    // Load Passages 1, 2, 3, 4
    for (const pid of [1, 2, 3, 4]) {
        const file = path.join(OUTPUT_DIR, `test2_p${pid}_v15.json`);
        if (fs.existsSync(file)) {
            const raw = JSON.parse(fs.readFileSync(file, 'utf-8'));

            // Reconstruct Content String based on Type
            const headerText = (raw.structure.header_lines || []).join('\n');
            const salutation = raw.structure.salutation || "";
            const bodyText = (raw.structure.body_paragraphs || []).join('\n\n');
            const closingText = (raw.structure.closing_lines || []).join('\n');

            const parts = [];
            if (headerText) parts.push(headerText);
            // Salutation logic: 
            // If Compact Header (Letter/Email), we want a blank line before Salutation if Header exists
            if (salutation) {
                if (headerText) parts.push(""); // Add blank line separator
                parts.push(salutation);
            }
            // Body logic:
            // Add blank line before Body
            if (bodyText) {
                parts.push(""); // Add blank line separator
                parts.push(bodyText);
            }
            // Closing logic:
            // Add blank line before Closing
            if (closingText) {
                parts.push(""); // Add blank line separator
                parts.push(closingText);
            }

            // Join with Single \n because we manually added blank lines ("") where needed
            // Wait, parts.join('\n') with "" entries produces \n\n. Correct.
            // Exception: If type is ADVERTISEMENT or NOTICE, header might be just title.
            // The default \n join works well for all.

            const fullContent = parts.join('\n');

            const passageObj = {
                id: `p6-t2-p${raw.passageId}`,
                type: raw.type, // Use detected type
                guidance: `Questions ${131 + (pid - 1) * 4}-${134 + (pid - 1) * 4} refer to the following ${raw.type.toLowerCase().replace('_', ' ')}.`,
                title: raw.type === 'ADVERTISEMENT' || raw.type === 'NOTICE' || raw.type === 'ARTICLE' ? (raw.structure.header_lines?.[0] || '...') : undefined,
                content: fullContent,
                questions: raw.questions.map((q: any) => ({
                    id: String(q.id),
                    text: q.text || "Select the best answer.",
                    options: q.options.map((opt: string) => {
                        const match = opt.match(/\(([A-D])\)\s*(.*)/);
                        return { label: match ? match[1] : "A", text: match ? match[2] : opt };
                    }),
                    correctAnswer: "A", // Placeholder
                    classification: "P6_GRAMMAR"
                }))
            };
            newPassages.push(passageObj);
            console.log(`✅ Loaded V15 Test 2 Passage ${pid}`);
        } else {
            console.error(`❌ V15 File for Passage ${pid} not found!`);
        }
    }

    const finalObj = {
        testId: 2,
        title: "ETS TOEIC Vol 4 - Test 2",
        passages: newPassages.sort((a, b) => a.id.localeCompare(b.id))
    };

    fs.writeFileSync(FINAL_FILE, JSON.stringify(finalObj, null, 2));
    console.log(`🎉 V15 Test 2 Ready: ${FINAL_FILE}`);
}

run();
