
import { part6TestData } from '../src/data/toeic/reading/part6/tests';
import { part7TestData } from '../src/data/toeic/reading/part7/tests';
import * as fs from 'fs';

function analyzeP6() {
    const stats: Record<string, number> = {};
    let totalPassages = 0;

    part6TestData.forEach(test => {
        test.passages.forEach(p => {
            // Check content or title for clues if type is not explicit, 
            // but Part 6 usually doesn't have explicit types in our schema yet.
            // Let's just count total passages for now.
            totalPassages++;
        });
    });

    console.log(`\n📊 [Part 6 Analysis]`);
    console.log(`Total Passages: ${totalPassages}`);
    return totalPassages;
}

function analyzeP7() {
    const stats: Record<string, number> = {};
    let totalSets = 0;

    part7TestData.forEach(test => {
        test.sets.forEach(s => {
            s.passages.forEach(p => {
                const type = p.type || "UNKNOWN";
                stats[type] = (stats[type] || 0) + 1;
            });
            totalSets++;
        });
    });

    console.log(`\n📊 [Part 7 Analysis]`);
    console.log(`| Type            | Count |`);
    console.log(`|-----------------|-------|`);
    Object.entries(stats).sort((a, b) => b[1] - a[1]).forEach(([type, count]) => {
        console.log(`| ${type.padEnd(15)} | ${count.toString().padStart(5)} |`);
    });
    console.log(`Total Sets: ${totalSets}`);
    return totalSets;
}

console.log("🚀 Analyzing Reading Gaps (P6, P7)...");
analyzeP6();
analyzeP7();
