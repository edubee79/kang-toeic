import * as fs from 'fs';
import { part6TestData } from '../src/data/toeic/reading/part6/tests';

// Correct answers for Test 1
const TEST1_ANSWERS: Record<string, string> = {
    "131": "D", "132": "D", "133": "A", "134": "B",
    "135": "D", "136": "A", "137": "B", "138": "B",
    "139": "A", "140": "B", "141": "C", "142": "A",
    "143": "A", "144": "B", "145": "D", "146": "C"
};

async function updateRcPart6() {
    const v13Data = JSON.parse(fs.readFileSync('scripts/v13_output/extracted_part6_test1_v13.json', 'utf-8'));

    const targetTest = part6TestData.find(t => t.testId === 1);
    if (!targetTest) return;

    targetTest.passages = v13Data.passages.map((p: any, index: number) => {
        // Construct content from structure
        const s = p.structure;
        let contentArr = [];
        if (s.date_line) contentArr.push(s.date_line);
        if (s.salutation) contentArr.push(s.salutation);
        if (s.paragraphs) contentArr.push(...s.paragraphs);
        if (s.closing) contentArr.push(s.closing);

        const content = contentArr.join('\n\n');

        return {
            id: `p6-t1-p${index + 1}`,
            type: p.structure.header_info?.toUpperCase() || "ARTICLE", // Defaulting to ARTICLE if null
            guidance: p.guidance,
            content: content,
            questions: p.questions.map((q: any) => ({
                id: q.id.toString(),
                text: "Select the best word or phrase for the blank.",
                options: q.options.map((opt: string) => {
                    const label = opt.match(/^\(([A-D])\)/)?.[1] || "A";
                    const text = opt.replace(/^\([A-D]\)\s*/, '');
                    return { label, text };
                }),
                correctAnswer: TEST1_ANSWERS[q.id.toString()] || "A",
                classification: "P6_GRAMMAR"
            }))
        };
    });

    // Write back to file by string replacement to preserve other tests
    const filePath = 'src/data/rc_part6.ts';
    let fileContent = fs.readFileSync(filePath, 'utf-8');

    // We only want to replace the part6TestData[0] content
    // This is a bit risky with raw string replacement in a large file, 
    // but since we are in a controlled environment, I'll export the whole object.

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
    console.log("✅ src/data/rc_part6.ts updated with V13 Test 1 data.");
}

updateRcPart6();
