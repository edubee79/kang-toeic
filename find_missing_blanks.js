const fs = require('fs');

const content = fs.readFileSync('src/data/rc_part5_tests.ts', 'utf8');

// Parse as JSON-like structure
const testMatches = content.match(/"testId":\s*\d+[\s\S]*?"questions":\s*\[([\s\S]*?)\n\s*\]/g);

let issues = [];

if (testMatches) {
    testMatches.forEach(testBlock => {
        const testIdMatch = testBlock.match(/"testId":\s*(\d+)/);
        const testId = testIdMatch ? testIdMatch[1] : '?';

        // Find all question blocks
        const questionMatches = testBlock.match(/"id":\s*"(q\d+)",\s*"text":\s*"([^"]*)"/g);

        if (questionMatches) {
            questionMatches.forEach(qMatch => {
                const idMatch = qMatch.match(/"id":\s*"(q\d+)"/);
                const textMatch = qMatch.match(/"text":\s*"([^"]*)"/);

                if (idMatch && textMatch) {
                    const qId = idMatch[1];
                    const text = textMatch[1];

                    if (!text.includes('_____')) {
                        issues.push(`Test ${testId} ${qId}: "${text}"`);
                    }
                }
            });
        }
    });
}

// Write to file
const output = `Total questions WITHOUT blank markers: ${issues.length}\n\n` +
    (issues.length > 0 ? 'Questions missing blank markers:\n\n' + issues.join('\n') : '✅ All questions have blank markers!');

fs.writeFileSync('missing_blanks_report.txt', output, 'utf8');
console.log(output.substring(0, 500));
console.log('\n\n... Full report saved to missing_blanks_report.txt');
