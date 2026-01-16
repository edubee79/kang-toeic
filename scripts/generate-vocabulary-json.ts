import * as fs from 'fs';
import * as path from 'path';

interface VocabWord {
    id: string; // day_no
    word: string;
    meaning: string;
    example: string;
    exampleKo: string;
    targetScore: number;
    difficulty: string;
    day: number;
    part: number; // Always 1 for this batch
    no: number;
    theme?: string;
}

interface ClassifiedCandidate {
    word: string;
    meaning: string;
    themeRaw: string;
    score?: number;
}

const TARGET_DAYS = 15;
const WORDS_PER_DAY = 80; // Target

const THEME_SCHEDULE: Record<number, string[]> = {
    9: ['Production', 'Manufacturing'],
    10: ['Logistics', 'Shipping'],
    11: ['Research', 'Development'],
    12: ['Management'],
    13: ['Personnel', 'Welfare'], // Score 7 starts here usually
    14: ['Law', 'Regulation'],
    15: ['General', 'Idioms']
};

function parseCsvLine(line: string): string[] {
    const parts: string[] = [];
    let current = '';
    let inQuote = false;
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') inQuote = !inQuote;
        else if (char === ',' && !inQuote) {
            parts.push(current);
            current = '';
        } else current += char;
    }
    parts.push(current);
    return parts;
}

async function main() {
    console.log('Generatng Final Vocabulary JSON...');
    const finalWords: VocabWord[] = [];
    let currentDayWords: VocabWord[] = [];
    // 1. Process Day 1-8 (from CSV)
    const existingContent = fs.readFileSync('resources/themed_1200_vocab.csv', 'utf-8');
    const existingLines = existingContent.split('\n').slice(1).filter(l => l.trim().length > 0);

    for (const line of existingLines) {
        const p = parseCsvLine(line);
        if (p.length < 5) continue;

        // CSV: Day,No,Word,Meaning,Target_Score,Freq...
        const day = parseInt(p[0]);
        if (isNaN(day)) {
            console.warn(`Skipping invalid line: ${line.substring(0, 50)}...`);
            continue;
        }
        // The file goes up to Day 8.

        finalWords.push({
            id: `day${day}_no${p[1]}`,
            word: p[2].trim(),
            meaning: p[3].replace(/"/g, ''),
            targetScore: parseInt(p[4]) || 650,
            difficulty: 'intermediate', // Default
            day: day,
            part: 1,
            no: parseInt(p[1]),
            example: "", // Will be filled later or empty
            exampleKo: "",
            theme: p[8] // Theme column index 8
        });
    }

    console.log(`Loaded ${finalWords.length} words from Days 1-8.`);

    // 2. Process Day 9-16 (from Classified JSON)
    if (fs.existsSync('resources/classified_candidates.json')) {
        const candidates: ClassifiedCandidate[] = JSON.parse(fs.readFileSync('resources/classified_candidates.json', 'utf-8'));

        // Group by Theme
        const themeBuckets: Record<string, ClassifiedCandidate[]> = {};
        candidates.forEach(c => {
            const theme = c.themeRaw || 'General';
            if (!themeBuckets[theme]) themeBuckets[theme] = [];
            themeBuckets[theme].push(c);
        });

        // Distribute to Days 9-15
        for (let day = 9; day <= 15; day++) {
            const targetThemes = THEME_SCHEDULE[day] || ['General'];
            let dayCount = 0;

            // 1. Pull from Target Themes
            for (const t of targetThemes) {
                // Try match strict or partial
                // API returns: Production, Logistics, Research, Management, Personnel, Law, General
                let bucketName = '';
                if (t === 'Production' || t === 'Manufacturing') bucketName = 'Production';
                if (t === 'Logistics' || t === 'Shipping') bucketName = 'Logistics';
                if (t === 'Research' || t === 'Development') bucketName = 'Research';
                if (t === 'Management') bucketName = 'Management';
                if (t === 'Personnel' || t === 'Welfare') bucketName = 'Personnel';
                if (t === 'Law' || t === 'Regulation') bucketName = 'Law';
                if (t === 'General') bucketName = 'General';

                const bucket = themeBuckets[bucketName] || [];

                // Take words until full
                while (bucket.length > 0 && dayCount < WORDS_PER_DAY) {
                    const c = bucket.shift()!;
                    finalWords.push({
                        id: `day${day}_no${dayCount + 1}`,
                        word: c.word,
                        meaning: c.meaning,
                        targetScore: 800, // Assuming score 8/7 range
                        difficulty: 'intermediate',
                        day: day,
                        part: 1,
                        no: dayCount + 1,
                        example: "",
                        exampleKo: "",
                        theme: bucketName
                    });
                    dayCount++;
                }
            }

            // 2. Fill with General if not full
            if (dayCount < WORDS_PER_DAY) {
                const bucket = themeBuckets['General'] || [];
                while (bucket.length > 0 && dayCount < WORDS_PER_DAY) {
                    const c = bucket.shift()!;
                    finalWords.push({
                        id: `day${day}_no${dayCount + 1}`,
                        word: c.word,
                        meaning: c.meaning,
                        targetScore: 800,
                        difficulty: 'intermediate',
                        day: day,
                        part: 1,
                        no: dayCount + 1,
                        example: "",
                        exampleKo: "",
                        theme: "General"
                    });
                    dayCount++;
                }
            }

            // 3. Fill with leftovers from other buckets if STILL not full
            if (dayCount < WORDS_PER_DAY) {
                const allKeys = Object.keys(themeBuckets);
                for (const key of allKeys) {
                    const bucket = themeBuckets[key];
                    while (bucket.length > 0 && dayCount < WORDS_PER_DAY) {
                        const c = bucket.shift()!;
                        finalWords.push({
                            id: `day${day}_no${dayCount + 1}`,
                            word: c.word,
                            meaning: c.meaning,
                            targetScore: 800,
                            difficulty: 'intermediate',
                            day: day,
                            part: 1,
                            no: dayCount + 1,
                            example: "",
                            exampleKo: "",
                            theme: key // Keep original theme
                        });
                        dayCount++;
                    }
                }
            }
        }
    }

    console.log(`Total Final Words: ${finalWords.length}`);

    // Sort by Day and No
    finalWords.sort((a, b) => {
        if (a.day !== b.day) return a.day - b.day;
        return a.no - b.no;
    });

    // Write Final JSON
    fs.writeFileSync('src/data/vocabulary_final.json', JSON.stringify(finalWords, null, 2));
    console.log('Successfully wrote src/data/vocabulary_final.json');
}

main();
