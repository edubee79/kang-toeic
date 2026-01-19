const fs = require('fs');
const path = require('path');

// Target Source: ETS 4탄
const baseSrc = path.join(__dirname, '..', 'toeic-data', 'ETS정기기출4탄', '음원');
const destDir = path.join(__dirname, '..', 'public', 'audio', 'lc', 'part2');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

for (let i = 1; i <= 10; i++) {
    const srcDirName = `${i}회`;
    const srcPath = path.join(baseSrc, srcDirName);

    console.log(`Processing ${srcPath}...`);

    if (fs.existsSync(srcPath)) {
        const files = fs.readdirSync(srcPath);
        let count = 0;
        files.forEach(file => {
            // 4탄 Format: Test_01-07.mp3
            // We need Part 2 questions (Q7 ~ Q31)
            const match = file.match(/Test_\d+-(\d+)\.mp3$/i);

            if (match) {
                const qNum = parseInt(match[1], 10);

                // Part 2 Range: 7 to 31
                if (qNum >= 7 && qNum <= 31) {
                    const destPath = path.join(destDir, file);
                    fs.copyFileSync(path.join(srcPath, file), destPath);
                    count++;
                }
            }
        });
        console.log(`  -> Copied ${count} files.`);
    } else {
        console.warn(`Source directory not found: ${srcPath}`);
    }
}
console.log("Copy complete.");
