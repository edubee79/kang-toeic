const fs = require('fs');
const path = require('path');

const testsFilePath = path.join('src', 'data', 'toeic', 'reading', 'part6', 'tests.ts');
const absolutePath = path.resolve(testsFilePath);

const content = fs.readFileSync(absolutePath, 'utf-8');
const lines = content.split('\n');

let currentTestId = null;
const testStats = {};

lines.forEach((line, index) => {
    const testIdMatch = line.match(/"testId":\s*(\d+)/);
    if (testIdMatch) {
        currentTestId = testIdMatch[1];
        testStats[currentTestId] = { total: 0, explained: 0, missingIds: [] };
    }

    const qIdMatch = line.match(/"id":\s*"(\d+)"/);
    if (qIdMatch && currentTestId) {
        testStats[currentTestId].total++;

        // Peek ahead to see if explanation follows within a few lines (until next question or passage or closing)
        let found = false;
        for (let i = index + 1; i < index + 20 && i < lines.length; i++) {
            if (lines[i].includes('"explanation":')) {
                found = true;
                break;
            }
            if (lines[i].includes('"id": "')) break; // Next question or passage
            if (lines[i].includes(']')) break; // End of questions array
        }

        if (found) {
            testStats[currentTestId].explained++;
        } else {
            testStats[currentTestId].missingIds.push(qIdMatch[1]);
        }
    }
});

console.log("\n=================================");
console.log("   Part 6 Detailed Missing      ");
console.log("=================================\n");

Object.keys(testStats).sort((a, b) => parseInt(a) - parseInt(b)).forEach(testId => {
    const stats = testStats[testId];
    if (stats.missingIds.length > 0) {
        console.log(`Test ${testId}: ${stats.missingIds.length} missing - [${stats.missingIds.join(', ')}]`);
    } else {
        console.log(`Test ${testId}: All ${stats.total} explained.`);
    }
});
