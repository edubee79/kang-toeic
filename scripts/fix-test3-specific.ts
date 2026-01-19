import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), 'src/data/toeic/reading/part6/tests.ts');

function fixTest3() {
    console.log("🚀 Starting Specific Fix for Test 3 Q143/Q144...");

    let content = fs.readFileSync(filePath, 'utf-8');

    // Q143 Fix
    // We look for: "id": "143" ... "classification"
    // And replace the middle part.

    const q143Regex = /("id":\s*"143"[\s\S]*?"correctAnswer":\s*"D",\s*)([\s\S]*?)("classification":)/;

    content = content.replace(q143Regex, (match, prefix, middle, suffix) => {
        console.log("Found Q143 block.");
        const cleanExpl = `"explanation": "후원의 주체로 나열된 the JAMTO와 the hotels and businesses를 적절히 연결해 주는 전치사를 선택해야 한다. 따라서 '~와 함께, ~에 덧붙여'라는 의미의 (D) along with가 정답이다.",\n                        `;
        return prefix + cleanExpl + suffix;
    });

    // Q144 Fix (just in case)
    const q144Regex = /("id":\s*"144"[\s\S]*?"correctAnswer":\s*"A",\s*)([\s\S]*?)("classification":)/;

    content = content.replace(q144Regex, (match, prefix, middle, suffix) => {
        console.log("Found Q144 block.");
        const cleanExpl = `"explanation": "전단 전반에서 현재시제를 사용하여 신규 프로그램에 대해 설명한 후, 빈칸이 포함된 문장에서 이 프로그램의 이용을 권장하고 있다. 즉, 글을 쓰는 동시에 초대하는 행위를 하고 있으므로, 빈칸에도 현재시제가 쓰여야 자연스럽다. 따라서 (A) invite가 정답이다. (C) may invite는 가능성을 시사하므로, 실제로 초대하는 표현으로는 적절하지 않다.",\n                        `;
        return prefix + cleanExpl + suffix;
    });

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log("✅ Applied specific fixes.");
}

fixTest3();
