const fs = require('fs');

const content = fs.readFileSync('src/data/part3.ts', 'utf8');

const regex = /"?(setId)"?:\s*"p3-t(\d+)-s(\d+)"/g;
let matches = [];
let match;
while ((match = regex.exec(content)) !== null) {
    matches.push({
        testId: parseInt(match[2]),
        setId: parseInt(match[3]),
        index: match.index
    });
}

const sets = [];
for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    let startIdx = content.lastIndexOf('{', m.index);

    let nextStartIdx = (i < matches.length - 1) ? content.lastIndexOf('{', matches[i + 1].index) : content.lastIndexOf('];');
    let endIdx = content.lastIndexOf('}', nextStartIdx);

    let setStr = content.substring(startIdx, endIdx + 1);
    if (setStr.endsWith('},')) setStr = setStr.substring(0, setStr.length - 1);
    if (!setStr.endsWith('}')) setStr += '}';

    sets.push({
        testId: m.testId,
        setId: m.setId,
        content: setStr
    });
}

const tests = {};
for (const s of sets) {
    if (!tests[s.testId]) tests[s.testId] = [];
    tests[s.testId].push(s);
}

for (const tId in tests) {
    tests[tId].sort((a, b) => a.setId - b.setId);
    const fileName = `src/data/toeic/listening/part3/test${tId}.ts`;
    const output = `import { Part3Set } from '../../../listening_types';\n\nexport const test${tId}: Part3Set[] = [\n` +
        tests[tId].map(s => s.content).join(',\n') +
        `\n];\n`;
    fs.writeFileSync(fileName, output);
    console.log(`Saved ${fileName}`);
}
