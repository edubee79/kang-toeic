import * as fs from 'fs';
import * as path from 'path';

function mergeAnswers() {
    console.log("🚀 Starting Merge for Test 10...");

    const answersPath = path.join(process.cwd(), 'extracted_answers_test10_final.json');
    const testsPath = path.join(process.cwd(), 'src/data/toeic/reading/part6/tests.ts');

    if (!fs.existsSync(answersPath) || !fs.existsSync(testsPath)) {
        console.error("❌ File not found");
        return;
    }

    try {
        const answersData = JSON.parse(fs.readFileSync(answersPath, 'utf-8'));
        let testsContent = fs.readFileSync(testsPath, 'utf-8');

        const test10StartRegex = /"testId":\s*10,/;
        const match = testsContent.match(test10StartRegex);
        if (!match || match.index === undefined) {
            console.error("❌ Test 10 not found");
            return;
        }

        const startIndex = match.index;
        const test20StartRegex = /"testId":\s*20,/;
        const match20 = testsContent.match(test20StartRegex);
        const endIndex = match20 ? match20.index : testsContent.length;

        let testBlock = testsContent.substring(startIndex, endIndex);
        let updateCount = 0;

        answersData.answers.forEach((ans: any) => {
            if (!ans.explanation) return;

            const safeExpl = ans.explanation.replace(/\r/g, '').replace(/\n/g, ' ').replace(/"/g, '\\"');

            const qRegex = new RegExp(`("id":\\s*"${ans.questionId}"[\\s\\S]*?"correctAnswer":\\s*"[A-D]")`, 'g');

            testBlock = testBlock.replace(qRegex, (fullMatch, beforeAnswer) => {
                const nextChars = testBlock.substring(testBlock.indexOf(fullMatch) + fullMatch.length, testBlock.indexOf(fullMatch) + fullMatch.length + 200);

                if (nextChars.includes('"explanation":')) {
                    console.log(`   ⚠️  Q${ans.questionId} already has explanation, skipping`);
                    return fullMatch;
                }

                updateCount++;
                console.log(`   ✅ Inserted Q${ans.questionId}`);

                let classification = ans.classification || "P6_VOCABULARY";

                return `${beforeAnswer},\n                        "explanation": "${safeExpl}",\n                        "classification": "${classification}"`;
            });
        });

        const finalContent = testsContent.substring(0, startIndex) + testBlock + testsContent.substring(endIndex!);

        fs.writeFileSync(testsPath, finalContent, 'utf-8');
        console.log(`\n🎉 Merged ${updateCount} questions into Test 10.`);

    } catch (e: any) {
        console.error("Error:", e.message);
    }
}

mergeAnswers();
