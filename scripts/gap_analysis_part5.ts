
import * as fs from 'fs';
import * as path from 'path';

// 1. Load the retagged data
const retaggedPath = path.join(process.cwd(), 'retagged_part5_all.json');
const poolPath = path.join(process.cwd(), 'ai_generated_part5_pool.json');

let data: any[] = [];
if (fs.existsSync(retaggedPath)) {
    data = data.concat(JSON.parse(fs.readFileSync(retaggedPath, 'utf8')));
}
if (fs.existsSync(poolPath)) {
    data = data.concat(JSON.parse(fs.readFileSync(poolPath, 'utf8')));
}

if (data.length === 0) {
    console.error("❌ Error: No data files found.");
    process.exit(1);
}

// 2. Define the target tags (Source of Truth)
const TARGET_TAGS = [
    "P5_POS_NOUN", "P5_POS_ADJ", "P5_POS_ADV", "P5_POS_VERB",
    "P5_V_AGREE", "P5_V_TENSE", "P5_V_VOICE", "P5_V_MODAL",
    "P5_NF_TO", "P5_NF_ING", "P5_NF_PART", "P5_NF_PCONS",
    "P5_PR_CASE", "P5_PR_SELF", "P5_PR_DEMO", "P5_PR_INDEF",
    "P5_PREP_TIME", "P5_PREP_PLAC", "P5_PREP_DIRC", "P5_PREP_PHRA",
    "P5_CONJ_NOUN", "P5_CONJ_ADV", "P5_CONJ_CORR", "P5_CONJ_COOR",
    "P5_REL_PR", "P5_REL_ADV",
    "P5_VOC_NOUN", "P5_VOC_VERB", "P5_VOC_ADJ", "P5_VOC_ADV", "P5_VOC_PHRA",
    "P5_COMPARIS", "P5_SPECIAL"
];

// 3. Counting
const counts: Record<string, number> = {};
TARGET_TAGS.forEach(tag => counts[tag] = 0);

data.forEach((item: any) => {
    const mainTag = item.tags[0];
    if (counts[mainTag] !== undefined) {
        counts[mainTag]++;
    } else {
        counts["UNKNOWN"] = (counts["UNKNOWN"] || 0) + 1;
    }
});

// 4. Report
console.log("\n📊 [Part 5 Tag Gap Analysis]");
console.log("-----------------------------------------");
console.log("| Tag Code           | Count | Need (30)|");
console.log("-----------------------------------------");

const gaps: Record<string, number> = {};
TARGET_TAGS.forEach(tag => {
    const count = counts[tag] || 0;
    const need = Math.max(0, 30 - count);
    gaps[tag] = need;
    console.log(`| ${tag.padEnd(18)} | ${String(count).padStart(5)} | ${String(need).padStart(8)} |`);
});

console.log("-----------------------------------------");
console.log(`✅ Total Questions: ${data.length}`);
console.log(`🚀 Total Needed to fill gaps: ${Object.values(gaps).reduce((a, b) => a + b, 0)}`);

// Save gap analysis for the generator
fs.writeFileSync('part5_generation_gaps.json', JSON.stringify(gaps, null, 2));
console.log("\n📁 Gap analysis saved to part5_generation_gaps.json");
