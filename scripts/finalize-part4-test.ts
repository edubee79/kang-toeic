
import * as fs from 'fs';
import * as path from 'path';

async function run() {
    const questionsRaw = JSON.parse(fs.readFileSync('part4_data_final.json', 'utf-8'));
    const solutionsRaw = JSON.parse(fs.readFileSync('part34_solutions_raw.json', 'utf-8'));

    const testId = parseInt(process.argv[2] || '2');
    const finalSets = [];

    for (const qSet of questionsRaw.sets) {
        const range = qSet.questionRange;
        const startQ = parseInt(range.split('-')[0]);

        // Part 4 range is 71 to 100
        if (startQ < 71 || startQ > 100) continue;

        const solution = solutionsRaw.results.find((s: any) => s.setId === qSet.setId);

        const enrichedSet = {
            testId: testId,
            setId: `set_${range.replace('-', '_')}`,
            questionRange: range,
            audio: `/audio/ETS_TOEIC_3/Test_${String(testId).padStart(2, '0')}/TEST ${String(testId).padStart(2, '0')}_PART 4_${range}.mp3`,
            questions: qSet.questions.map((q: any) => ({
                id: q.id,
                text: q.text,
                options: q.options,
                correctAnswer: solution ? solution.answers[q.id] : "UNKNOWN"
            })),
            script: solution ? solution.script : []
        };

        // Add graphic images if necessary
        if (range === "71-73") {
            (enrichedSet as any).image = `/images/ETS_TOEIC_3/Test_${String(testId).padStart(2, '0')}/Part_04/p4_q71.png`;
        } else if (range === "74-76") {
            (enrichedSet as any).image = `/images/ETS_TOEIC_3/Test_${String(testId).padStart(2, '0')}/Part_04/p4_q74.png`;
        } else if (range === "77-79") {
            (enrichedSet as any).image = `/images/ETS_TOEIC_3/Test_${String(testId).padStart(2, '0')}/Part_04/p4_q77.png`;
        }

        finalSets.push(enrichedSet);
    }

    fs.writeFileSync(`test${String(testId).padStart(2, '0')}_part4_final.json`, JSON.stringify(finalSets, null, 2));
    console.log(`✅ Finalized ${finalSets.length} sets for Part 4 Test ${String(testId).padStart(2, '0')}.`);
}

run();
