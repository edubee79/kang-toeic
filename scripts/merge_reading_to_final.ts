
import * as fs from 'fs';

const poolFile = 'ai_generated_reading_pool.json';
const finalFile = 'src/data/generated_questions.json';

function merge() {
    if (!fs.existsSync(poolFile)) {
        console.log("No pool file found.");
        return;
    }

    const pool = JSON.parse(fs.readFileSync(poolFile, 'utf8'));
    const final = JSON.parse(fs.readFileSync(finalFile, 'utf8'));

    const flattened: any[] = [];

    pool.forEach((set: any) => {
        set.questions.forEach((q: any) => {
            flattened.push({
                text: set.part === "6" ? `[${q.id}] Select the best answer.` : q.text,
                options: q.options,
                correctAnswer: q.correctAnswer,
                explanation: q.explanation,
                translation: q.translation || "해당 문항의 번역이 없습니다.",
                tags: [q.classification, "AI_Generated"],
                part: `Part ${set.part}`,
                passageContext: set.content,
                passageTranslation: set.translation,
                generatedAt: set.generatedAt
            });
        });
    });

    console.log(`Flattened ${flattened.length} questions from ${pool.length} sets.`);

    // Append to final
    const merged = [...final, ...flattened];
    fs.writeFileSync(finalFile, JSON.stringify(merged, null, 2));
    console.log(`Merged into ${finalFile}. Total questions: ${merged.length}`);
}

merge();
