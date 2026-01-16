
import * as fs from 'fs';

const inputPath = 'src/data/part3.ts';

if (!fs.existsSync(inputPath)) {
    console.error('Source file not found');
    process.exit(1);
}

// Read the file
let content = fs.readFileSync(inputPath, 'utf-8');

// Replace old paths with new structure
// Old: /audio/TEST 01_PART 3_32-34.mp3
// New: /audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_32-34.mp3

content = content.replace(/\/audio\/TEST 01_PART 3_/g, '/audio/ETS_TOEIC_3/Test_01/TEST 01_PART 3_');

fs.writeFileSync(inputPath, content);
console.log(`✅ Updated audio paths in ${inputPath}`);
