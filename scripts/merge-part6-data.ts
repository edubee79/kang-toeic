import * as fs from 'fs';

// Read extracted data
const passagesData = JSON.parse(fs.readFileSync('extracted_part6_test2.json', 'utf-8'));
const answersData = JSON.parse(fs.readFileSync('extracted_part6_test2_answers.json', 'utf-8'));

// Create answer map
const answerMap = new Map();
answersData.answers.forEach((ans: any) => {
    answerMap.set(ans.questionId, {
        correctAnswer: ans.correctAnswer,
        classification: ans.classification,
        translation: ans.translation !== "Korean translation of question" ? ans.translation : "",
        explanation: ans.explanation !== "Korean explanation of why this is correct" ? ans.explanation : ""
    });
});

// Merge answers into passages
passagesData.passages.forEach((passage: any) => {
    passage.questions.forEach((q: any) => {
        const answerInfo = answerMap.get(q.id);
        if (answerInfo) {
            q.correctAnswer = answerInfo.correctAnswer;
            q.classification = answerInfo.classification;
            q.translation = answerInfo.translation;
            q.explanation = answerInfo.explanation;
        }
    });
});

// Generate TypeScript code
const testData = `
    // Test 2: ETS TOEIC Vol 4 - Test 2
    {
        testId: 2,
        title: "ETS TOEIC Vol 4 - Test 2",
        passages: ${JSON.stringify(passagesData.passages, null, 12).replace(/"([^"]+)":/g, '$1:')}
    },`;

console.log("✅ Generated TypeScript code for Test 2");
console.log("\n📋 Copy this into rc_part6.ts after Test 1:\n");
console.log(testData);

// Save to file for easy copying
fs.writeFileSync('test2_typescript.txt', testData);
console.log("\n💾 Saved to test2_typescript.txt");
