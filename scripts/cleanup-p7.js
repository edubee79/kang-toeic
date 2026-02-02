
const fs = require('fs');
const path = require('path');

const PART7_DIR = path.join(__dirname, '../src/data/toeic/reading/part7');
const PART7_FILES = [
    'test1.ts', 'test2.ts', 'test3.ts', 'test4.ts', 'test5.ts',
    'test6.ts', 'test7.ts', 'test8.ts', 'test9.ts', 'test10.ts'
].map(f => path.join(PART7_DIR, f));

PART7_FILES.forEach(f => {
    if (!fs.existsSync(f)) return;
    let c = fs.readFileSync(f, 'utf8');

    // Fix ] indentation specifically when it's under options array
    c = c.replace(/\n\s+\]/g, '\n                    ]');

    fs.writeFileSync(f, c, 'utf8');
});
console.log('Final Indent Fix done.');
