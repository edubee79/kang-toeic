
import * as fs from 'fs';
import * as path from 'path';

async function run() {
    const questionsRaw = JSON.parse(fs.readFileSync('part3_data_final.json', 'utf-8'));
    const solutionsRaw = JSON.parse(fs.readFileSync('part34_solutions_raw.json', 'utf-8'));

    const testId = 2;
    const finalSets = [];

    // Part 3 range is 32 to 70
    for (const qSet of questionsRaw.sets) {
        const range = qSet.questionRange;
        const startQ = parseInt(range.split('-')[0]);

        // Filter for Part 3 only
        if (startQ < 32 || startQ > 70) continue;

        // Find matching solution
        const solution = solutionsRaw.results.find((s: any) => s.setId === qSet.setId);

        const enrichedSet = {
            testId: testId,
            setId: `set_${range.replace('-', '_')}`,
            questionRange: range,
            audio: `/audio/ETS_TOEIC_3/Test_02/TEST 02_PART 3_${range}.mp3`,
            questions: qSet.questions.map((q: any) => ({
                id: q.id,
                text: q.text,
                options: q.options,
                correctAnswer: solution ? solution.answers[q.id] : "UNKNOWN"
            })),
            script: solution ? solution.script : []
        };

        // Add graphic images if necessary
        if (range === "62-64") {
            (enrichedSet as any).image = "/images/ETS_TOEIC_3/Test_02/Part_03/p3_q62.png";
        } else if (range === "65-67") {
            (enrichedSet as any).image = "/images/ETS_TOEIC_3/Test_02/Part_03/p3_q65.png";
        } else if (range === "68-70") {
            (enrichedSet as any).image = "/images/ETS_TOEIC_3/Test_02/Part_03/p3_q68.png";
        }

        finalSets.push(enrichedSet);
    }

    fs.writeFileSync('test02_part3_final.json', JSON.stringify(finalSets, null, 2));
    console.log(`✅ Finalized ${finalSets.length} sets for Part 3 Test 02.`);
}

run();
