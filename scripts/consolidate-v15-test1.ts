
import * as fs from 'fs';
import * as path from 'path';

// Paths
const V14_READY_FILE = path.join(process.cwd(), 'scripts', 'v14.1_test1_ready.json');
const V15_OUTPUT_DIR = path.join(process.cwd(), 'scripts', 'v15_output');
const V15_READY_FILE = path.join(process.cwd(), 'scripts', 'v15_test1_ready.json');

// Interface for readability (simplified)
interface V14Data {
    testId: number;
    title: string;
    passages: any[];
}

function run() {
    console.log("🛠️  Consolidating V15 Data...");

    // 1. Load V14 Base Data (for Passage 1)
    if (!fs.existsSync(V14_READY_FILE)) {
        console.error("❌ V14.1 Base file not found!");
        return;
    }
    const v14Data: V14Data = JSON.parse(fs.readFileSync(V14_READY_FILE, 'utf-8'));

    // We will build the new list starting with P1 from V14
    const newPassages: any[] = [];
    const p1 = v14Data.passages.find(p => p.id === 'p6-t1-p1');
    if (p1) newPassages.push(p1);
    else console.warn("⚠️ Warning: Original Passage 1 not found in V14 data.");

    // 2. Load V15 Passages 2, 3, 4
    for (const pid of [2, 3, 4]) {
        const file = path.join(V15_OUTPUT_DIR, `test1_p${pid}_v15.json`);
        if (fs.existsSync(file)) {
            const raw = JSON.parse(fs.readFileSync(file, 'utf-8'));

            // CONVERT raw extraction format to App Format (similar to prepare-v14-data logic)
            // But implementing the COMPACT HEADER logic visually in the content string

            // Header: Join with SINGLE newline (\n)
            const headerText = (raw.structure.header_lines || []).join('\n');
            const salutation = raw.structure.salutation || "";
            const bodyText = (raw.structure.body_paragraphs || []).join('\n\n'); // Body is double spaced blocks
            const closingText = (raw.structure.closing_lines || []).join('\n'); // Closing is single spaced

            // Composite Content
            // Rule: Header -> (Double Space) -> Salutation -> (Double Space) -> Body -> (Double Space) -> Closing
            // Wait, user just wanted "Compact Header".
            // So: HeaderBlock + \n\n + Salutation + \n\n + Body...

            const parts = [];
            if (headerText) parts.push(headerText);
            if (salutation) parts.push(salutation);
            if (bodyText) parts.push(bodyText);
            if (closingText) parts.push(closingText);

            const fullContent = parts.join('\n\n');

            const passageObj = {
                id: `p6-t1-p${raw.passageId}`,
                type: pid === 3 ? "EMAIL" : "LETTER", // P3 is Email, P2, P4 Letter
                guidance: pid === 3 ? "Questions 139-142 refer to the following e-mail." : (pid === 2 ? "Questions 135-138 refer to the following letter." : "Questions 143-146 refer to the following letter."),
                content: fullContent,
                questions: raw.questions.map((q: any) => ({
                    id: String(q.id),
                    text: q.is_sentence_insertion ? "Refer to the marked sentence in the passage." : "Select the best answer.",
                    options: q.options.map((opt: string) => {
                        const match = opt.match(/\(([A-D])\)\s*(.*)/);
                        return { label: match ? match[1] : "A", text: match ? match[2] : opt };
                    }),
                    correctAnswer: "A", // Placeholder
                    classification: "P6_GRAMMAR"
                }))
            };
            newPassages.push(passageObj);
            console.log(`✅ Loaded V15 Passage ${pid}`);
        } else {
            console.error(`❌ V15 File for Passage ${pid} not found!`);
        }
    }

    // 3. Final Assembly
    const v15Final = {
        testId: 1,
        title: "ETS TOEIC Vol 4 - Test 1",
        passages: newPassages.sort((a, b) => a.id.localeCompare(b.id))
    };

    fs.writeFileSync(V15_READY_FILE, JSON.stringify(v15Final, null, 2));
    console.log(`🎉 V15 Consolidation Complete: ${V15_READY_FILE}`);
}

run();
