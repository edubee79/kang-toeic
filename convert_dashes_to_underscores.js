const fs = require('fs');

// Read the file
const filePath = 'src/data/rc_part5_tests.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Replace all instances of ------- (7 dashes) with _______ (7 underscores) in "text" fields only
// This regex matches "text": "..." and replaces dashes with underscores within those strings
content = content.replace(/"text":\s*"([^"]*)"/g, (match, textContent) => {
    // Replace 7 dashes with 7 underscores
    const updated = textContent.replace(/-------/g, '_______');
    return `"text": "${updated}"`;
});

// Write back
fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ Successfully converted all 7-dash markers to 7-underscore markers');
