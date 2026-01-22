
import * as fs from 'fs';
import * as path from 'path';

const BASE_PATH = 'c:/Users/user/.gemini/antigravity/scratch/kangs-toeic-next/public/images/ETS_TOEIC_3';

function auditImages() {
    console.log("Starting Part 1 Image Audit...");
    const report: string[] = [];
    let totalMissing = 0;

    for (let testId = 1; testId <= 10; testId++) {
        const testStr = testId.toString().padStart(2, '0');
        const dirPath = path.join(BASE_PATH, `Test_${testStr}`, 'Part_01');

        console.log(`\nChecking Test ${testId} (${dirPath})...`);
        report.push(`### Test ${testId}`);

        // Check Directory
        if (!fs.existsSync(dirPath)) {
            console.log(`❌ Directory Missing: ${dirPath}`);
            report.push(`- ❌ **Folder Missing**: ${dirPath}`);
            totalMissing += 6;
            continue;
        }

        // Check Questions 1-6
        let missingInTest = 0;
        for (let q = 1; q <= 6; q++) {
            const qStr = q.toString().padStart(2, '0');
            const possibleNames = [
                `p1_q${qStr}.png`,
                `p1_q${qStr}.jpg`,
                `q${q}_p1.png`,
                `cropped_q1_p1_q${qStr}.png` // Test 1 format seen earlier
            ];

            let found = false;
            for (const name of possibleNames) {
                if (fs.existsSync(path.join(dirPath, name))) {
                    found = true;
                    // console.log(`  ✅ Q${q}: Found (${name})`);
                    break;
                }
            }

            if (!found) {
                console.log(`  ❌ Q${q}: Missing`);
                report.push(`- Q${q}: ❌ Image Not Found`);
                missingInTest++;
            }
        }

        if (missingInTest === 0) {
            report.push(`- ✅ All 6 images present.`);
        }
    }

    console.log(`\nAudit Complete. Total Missing Images: ${totalMissing}`);

    // Write Report Section
    const reportContent = `\n\n## 2. 이미지 파일 전수 조사 결과\n\n${report.join('\n')}`;
    fs.writeFileSync('PART1_IMAGE_AUDIT.md', reportContent);
}

auditImages();
