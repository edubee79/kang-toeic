
import * as fs from 'fs';
import * as path from 'path';

const rawPath = 'extracted_part1_results.json';
const targetPath = 'resources/questions/part1/set1.json';

if (!fs.existsSync(rawPath)) {
    console.error(`❌ Cannot find ${rawPath}`);
    process.exit(1);
}

const rawData = JSON.parse(fs.readFileSync(rawPath, 'utf8'));
const allQuestions = rawData.questions || [];

console.log(`📂 Found ${allQuestions.length} total extracted items.`);

// Filter strictly for Part 1
const part1Questions = allQuestions.filter((q: any) => {
    // 1. Must have 4 options
    if (!q.scripts || q.scripts.length !== 4) return false;

    // 2. Text must not be a placeholder
    const firstOptionText = q.scripts[0].text.toLowerCase();
    if (firstOptionText.includes("not provided") || firstOptionText.includes("audio script")) return false;

    return true;
});

// Rename IDs and Limit to 10
const validSet = part1Questions.slice(0, 10).map((q: any, index: number) => ({
    ...q,
    id: `q${index + 1}`
}));

console.log(`✨ Filtered down to ${validSet.length} valid Part 1 questions.`);

if (validSet.length === 0) {
    console.error("⚠️ No valid Part 1 questions found in the raw file!");
    process.exit(1);
}

// Prepare target image directory
const publicImageDir = 'public/images/lc/part1/set01';
if (!fs.existsSync(publicImageDir)) {
    fs.mkdirSync(publicImageDir, { recursive: true });
}

// Process images for the valid set
const processedQuestions = validSet.map((q: any) => {
    let imageWebPath = "";

    // Check if we captured the source path
    if (q.originalFilePath && fs.existsSync(q.originalFilePath)) {
        const ext = path.extname(q.originalFilePath);
        const fileName = `${q.id}${ext}`; // Rename to q1.jpg, q2.png...
        const destPath = path.join(publicImageDir, fileName);

        try {
            fs.copyFileSync(q.originalFilePath, destPath);
            console.log(`   📸 Copied image: ${fileName}`);
            imageWebPath = `/images/lc/part1/set01/${fileName}`;
        } catch (err: any) {
            console.error(`   ❌ Failed to copy image: ${err.message}`);
        }
    } else {
        console.warn(`   ⚠️ Image path missing for ${q.id}. (Did you re-run the process script?)`);
    }

    // Return clean object without internal paths
    const { originalFilePath, ...rest } = q;
    return {
        ...rest,
        image: imageWebPath
    };
});

const finalOutput = {
    setId: "set1",
    title: "ETS TOEIC Test 1 - Part 1",
    audioBase: "/audio/lc/part1/set01.mp3",
    questions: processedQuestions
};

// Ensure target directory exists
const dir = path.dirname(targetPath);
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(targetPath, JSON.stringify(finalOutput, null, 2));

console.log("\n✅ INSTALLATION COMPLETE!");
console.log(`📁 Saved to: ${targetPath}`);
console.log("👉 Now go to the browser and refresh the Practice Test page!");
