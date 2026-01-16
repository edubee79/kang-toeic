import * as fs from 'fs';
const content = fs.readFileSync('audit_output_v2.txt', 'utf16le');
console.log(content);
