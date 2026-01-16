
import * as fs from 'fs';
import * as path from 'path';

const OUTPUT_DIR = path.join(process.cwd(), 'scripts', 'v16_output_test3');
const FINAL_FILE = path.join(process.cwd(), 'scripts', 'v16_test3_ready.json');

function run() {
    console.log("🛠️  Consolidating V16 Test 3 Data (Type-Aware)...");

    if (!fs.existsSync(OUTPUT_DIR)) {
        console.error("❌ Output directory not found!");
        return;
    }

    const newPassages: any[] = [];

    // Test 3 Passages: 1, 2, 3, 4
    for (const pid of [1, 2, 3, 4]) {
        const file = path.join(OUTPUT_DIR, `test3_p${pid}_v16.json`);
        if (fs.existsSync(file)) {
            const raw = JSON.parse(fs.readFileSync(file, 'utf-8'));
            const type = (raw.type || "UNKNOWN").toUpperCase();

            // Reconstruct Content String (Smart Logic)
            const headerArr = raw.structure.header_lines || [];
            const salutation = raw.structure.salutation || "";
            const bodyArr = raw.structure.body_paragraphs || [];
            const closingArr = raw.structure.closing_lines || [];

            let fullText = "";

            // 1. Header (Common)
            if (headerArr.length > 0) {
                fullText += headerArr.join('\n');
            }

            // 2. Salutation (Special Rule for Email)
            if (salutation) {
                if (type.includes('EMAIL') || type.includes('LETTER')) {
                    // ZERO blank lines for Email/Letter Header->Salutation
                    if (fullText.length > 0) fullText += "\n";
                } else {
                    // Standard 1 blank line otherwise
                    if (fullText.length > 0) fullText += "\n\n";
                }
                fullText += salutation;
            }

            // 3. Body Start
            if (bodyArr.length > 0) {
                const hasPrevious = (fullText.length > 0);
                if (hasPrevious) {
                    if (salutation && (type.includes('EMAIL') || type.includes('LETTER'))) {
                        // Email Salutation -> Body : 1 blank line
                        fullText += "\n\n";
                    } else {
                        // Standard: Header -> Body : 1 blank line
                        fullText += "\n\n";
                    }
                }
                fullText += bodyArr.join('\n\n');
            }

            // 4. Closing
            if (closingArr.length > 0) {
                if (fullText.length > 0) fullText += "\n\n";
                fullText += closingArr.join('\n');
            }

            const passageObj = {
                id: `p6-t3-p${raw.passageId}`,
                type: type,
                guidance: `Questions ${131 + (pid - 1) * 4}-${134 + (pid - 1) * 4} refer to the following ${type.toLowerCase().replace('_', ' ')}.`,
                title: (!type.includes('EMAIL') && !type.includes('LETTER')) ? (headerArr[0] || undefined) : undefined,
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
            console.log(`✅ Loaded V16 P${pid} (${type})`);
        } else {
            console.warn(`⚠️ V16 File P${pid} not found (yet)!`);
        }
    }

    const finalObj = {
        testId: 3,
        title: "ETS TOEIC Vol 4 - Test 3",
        passages: newPassages.sort((a, b) => a.id.localeCompare(b.id))
    };

    fs.writeFileSync(FINAL_FILE, JSON.stringify(finalObj, null, 2));
    console.log(`🎉 V16 Ready: ${FINAL_FILE}`);
}

run();
