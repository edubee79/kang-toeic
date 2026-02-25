const fs = require('fs');
const content = fs.readFileSync('c:/Users/user/.gemini/antigravity/scratch/kangs-toeic-next/src/data/part5.ts', 'utf8');

// The file exports part5Data as a record of Question arrays
// We can try to use regex to find the keys or just parse if it's simple enough
// But since it's a TS file with imports, let's just count occurrences of "id": "
const matches = content.match(/"id":\s*"[^"]+"/g);
console.log(`Total questions found: ${matches ? matches.length : 0}`);

// Let's also see the unit names
const unitMatches = content.match(/"Unit_\d\d_[^"]+":\s*\[/g);
console.log(`Units found: ${unitMatches ? unitMatches.length : 0}`);
if (unitMatches) unitMatches.forEach(u => console.log(u));
