
const fs = require('fs');
const path = require('path');

const p3 = path.join(__dirname, '../src/data/part3.ts');
const p4 = path.join(__dirname, '../src/data/part4.ts');

[p3, p4].forEach(p => {
    let c = fs.readFileSync(p, 'utf8');
    c = c.replace(/questionType\?: string;/g, 'classification?: string;');
    if (p.endsWith('part4.ts')) {
        c = c.replace(/options: \{ label: string; text: string \}\[\];/g, 'options: {\n    A: string;\n    B: string;\n    C: string;\n    D: string;\n  };');
    }
    fs.writeFileSync(p, c, 'utf8');
});
console.log('Interfaces updated.');
