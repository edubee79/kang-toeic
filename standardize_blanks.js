const fs = require('fs');

// Read the file
const filePath = 'src/data/rc_part5_tests.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Replace all blank markers (any combination of dashes or underscores, 3-10 in length) 
// with exactly 5 underscores, but ONLY within "text" fields
content = content.replace(/"text":\s*"([^"]*)"/g, (match, textContent) => {
    // Replace any sequence of 3 or more dashes or underscores with exactly 5 underscores
    const updated = textContent.replace(/[-_]{3,}/g, '_____');
    return `"text": "${updated}"`;
});

// Write back
fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ Successfully standardized all blank markers to 5 underscores');
