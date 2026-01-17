import * as fs from 'fs';
import { part6TestData } from '../src/data/toeic/reading/part6/tests';

// Correct answers for Test 1
const TEST1_ANSWERS: Record<string, string> = {
    "131": "D", "132": "D", "133": "A", "134": "B",
    "135": "D", "136": "A", "137": "B", "138": "B",
    "139": "A", "140": "B", "141": "C", "142": "A",
    "143": "A", "144": "B", "145": "D", "146": "C"
};

async function updateRcPart6V14() {
    const v14Data = JSON.parse(fs.readFileSync('scripts/v14_output/extracted_part6_test1_v14.json', 'utf-8'));

    // We will rebuild the entire Test 1 entry in part6TestData
    const targetTestIndex = part6TestData.findIndex(t => t.testId === 1);
    if (targetTestIndex === -1) return;

    part6TestData[targetTestIndex].passages = v14Data.passages.map((p: any, index: number) => {
        const s = p.structure;
        let contentArr = [];

        // Preserve Header Lines
        if (s.header_lines && s.header_lines.length > 0) {
            contentArr.push(s.header_lines.join('\n'));
        }

        // Salutation
        if (s.salutation) {
            contentArr.push(s.salutation);
        }

        // Body Paragraphs (Joined by double newlines to show blank lines)
        if (s.body_paragraphs) {
            contentArr.push(s.body_paragraphs.join('\n\n'));
        }

        // Closing Lines
        if (s.closing_lines && s.closing_lines.length > 0) {
            contentArr.push(s.closing_lines.join('\n'));
        }

        const content = contentArr.join('\n\n');

        return {
            id: `p6-t1-p${p.passageId}`,
            type: "ARTICLE", // Generic type, we can refine per passage but ARTICLE is safe for now
            guidance: p.guidance,
            content: content,
            questions: p.questions.map((q: any) => ({
                id: q.id.toString(),
                text: "Select the best word or phrase for the blank.",
                options: q.options.map((opt: string, optIdx: number) => {
                    const label = ["A", "B", "C", "D"][optIdx];
                    // Strip (A) if exists
                    const text = opt.replace(/^\([A-D]\)\s*/, '');
                    return { label, text };
                }),
                correctAnswer: TEST1_ANSWERS[q.id.toString()] || "A",
                classification: "P6_GRAMMAR"
            }))
        };
    });

    const filePath = 'src/data/rc_part6.ts';
    const newFileContent = `export interface Part6Question {
    id: string;
    text: string;
    options: { label: string; text: string }[];
    correctAnswer: string;
    translation?: string;
    explanation?: string;
    classification?: string;
}

export interface Part6Passage {
    id: string;
    guidance?: string;
    type: "EMAIL" | "LETTER" | "NOTICE" | "ARTICLE" | "MEMO" | "ADVERTISEMENT" | "ANNOUNCEMENT";
    title?: string;
    content: string;
    questions: Part6Question[];
    translation?: string;
}

export interface Part6TestSet {
    testId: number;
    title: string;
    passages: Part6Passage[];
}

export const part6TestData: Part6TestSet[] = ${JSON.stringify(part6TestData, null, 4)};
`;

    fs.writeFileSync(filePath, newFileContent);
    console.log("✅ src/data/rc_part6.ts updated with V14 Precision data for Test 1.");
}

updateRcPart6V14();
