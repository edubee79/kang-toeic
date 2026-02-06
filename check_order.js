const fs = require('fs');
const path = require('path');

const dir = 'src/data/toeic/listening/part3/';
const files = fs.readdirSync(dir).filter(f => f.startsWith('test') && f.endsWith('.ts'));

// Sort files numerically: test1.ts, test2.ts, ..., test10.ts
files.sort((a, b) => {
    const an = parseInt(a.match(/\d+/)[0]);
    const bn = parseInt(b.match(/\d+/)[0]);
    return an - bn;
});

for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    const ids = [];
    const regex = /setId:\s*"p3-t(\d+)-s(\d+)"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        ids.push(match[2]); // Just the set number
    }
    console.log(`${file}: s${ids.join(', s')}`);
}
