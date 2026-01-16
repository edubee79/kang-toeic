import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import csvParser from "csv-parser";
import { createObjectCsvWriter } from 'csv-writer';
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

interface VocabWord {
    day: string;
    no: string;
    word: string;
    meaning: string;
    target_score: string;
    priority: string;
    source: string;
}

interface ScoredWord extends VocabWord {
    toeicFrequency: number;
    wordType: 'verb' | 'noun' | 'adjective' | 'adverb' | 'phrase' | 'other';
    difficulty: 'basic' | 'intermediate' | 'advanced';
}

async function analyzeWordBatch(words: VocabWord[]): Promise<ScoredWord[]> {
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const wordList = words.map((w, i) => `${i + 1}. ${w.word} - ${w.meaning}`).join('\n');

    const prompt = `You are a TOEIC vocabulary expert. Analyze these English words/phrases and rate them.

WORDS:
${wordList}

For EACH word, provide:
1. TOEIC Frequency Score (1-10):
   - 10: 초고빈출 (매 시험마다 나옴) - complete, available, immediately, submit
   - 8-9: 고빈출 (자주 나옴) - approve, postpone, notify, efficient
   - 6-7: 중빈출 (가끔 나옴) - negotiate, implement, enhance
   - 4-5: 저빈출 (드물게 나옴) - procrastinate, monopoly, stipulation
   - 1-3: 희귀 (거의 안 나옴) - infuriate, deadlock, zealous

2. Word Type: verb, noun, adjective, adverb, phrase, other

3. Difficulty: basic, intermediate, advanced

Return ONLY valid JSON array:
[
  {"index": 1, "frequency": 9, "type": "noun", "difficulty": "basic"},
  {"index": 2, "frequency": 7, "type": "verb", "difficulty": "intermediate"},
  ...
]`;

    try {
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        const cleanJson = responseText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
        const scores = JSON.parse(cleanJson);

        return words.map((word, i) => {
            const score = scores.find((s: any) => s.index === i + 1) || {
                frequency: 5,
                type: 'other',
                difficulty: 'intermediate'
            };

            return {
                ...word,
                toeicFrequency: score.frequency,
                wordType: score.type,
                difficulty: score.difficulty
            };
        });
    } catch (error) {
        console.error('Error analyzing batch:', error);
        // Fallback: return with default scores
        return words.map(word => ({
            ...word,
            toeicFrequency: 5,
            wordType: 'other' as const,
            difficulty: 'intermediate' as const
        }));
    }
}

async function main() {
    console.log('🚀 Starting TOEIC vocabulary analysis...\n');

    // 1. Load CSV
    const words: VocabWord[] = [];
    await new Promise((resolve, reject) => {
        const stream = fs.createReadStream('resources/hackers_vocab_final.csv', { encoding: 'utf8' });

        stream
            .pipe(csvParser({ skipLines: 0, mapHeaders: ({ header }) => header.trim() }))
            .on('data', (row: any) => {
                // Clean up keys (remove BOM and whitespace)
                const cleanRow: any = {};
                Object.keys(row).forEach(key => {
                    const cleanKey = key.replace(/^\uFEFF/, '').trim();
                    cleanRow[cleanKey] = row[key];
                });

                words.push({
                    day: cleanRow.Day || cleanRow.day,
                    no: cleanRow.No || cleanRow.no,
                    word: cleanRow.Word || cleanRow.word,
                    meaning: cleanRow.Meaning || cleanRow.meaning,
                    target_score: cleanRow.Target_Score || cleanRow.target_score || '',
                    priority: cleanRow.Priority || cleanRow.priority || '',
                    source: cleanRow.Source_Type || cleanRow.source_type || ''
                });
            })
            .on('end', resolve)
            .on('error', reject);
    });

    console.log(`📚 Loaded ${words.length} words from CSV\n`);
    console.log(`Sample first word: Day=${words[0]?.day}, No=${words[0]?.no}, Word=${words[0]?.word}\n`);

    // 2. Filter to Day 1-30, No 1-40 (1200 words)
    const baseWords = words.filter(w => {
        const day = parseInt(w.day);
        const no = parseInt(w.no);
        const passes = day >= 1 && day <= 30 && no >= 1 && no <= 40;
        if (!passes && day === 1 && no <= 5) {
            console.log(`DEBUG: Filtered out - Day=${w.day}, No=${w.no}, parsed day=${day}, no=${no}`);
        }
        return passes;
    });

    console.log(`🎯 Filtered to ${baseWords.length} base words (Day 1-30, No 1-40)\n`);

    // 3. Analyze in batches of 20 (to avoid API overload)
    const scoredWords: ScoredWord[] = [];
    const batchSize = 20;

    for (let i = 0; i < baseWords.length; i += batchSize) {
        const batch = baseWords.slice(i, i + batchSize);
        console.log(`🔍 Analyzing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(baseWords.length / batchSize)} (${batch.length} words)...`);

        const scored = await analyzeWordBatch(batch);
        scoredWords.push(...scored);

        // Brief pause to avoid rate limits
        if (i + batchSize < baseWords.length) {
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }

    console.log(`\n✅ Analysis complete! ${scoredWords.length} words scored.\n`);

    // 4. Sort by frequency (highest first) and select top 1200
    scoredWords.sort((a, b) => b.toeicFrequency - a.toeicFrequency);
    const top1200 = scoredWords.slice(0, 1200);

    console.log(`📊 Selected top 1200 words by TOEIC frequency\n`);

    // 5. Distribute into 15 days (80 words each) with balanced word types
    const days: ScoredWord[][] = Array.from({ length: 15 }, () => []);

    // Separate by type for balanced distribution
    const byType = {
        verb: top1200.filter(w => w.wordType === 'verb'),
        noun: top1200.filter(w => w.wordType === 'noun'),
        adjective: top1200.filter(w => w.wordType === 'adjective'),
        adverb: top1200.filter(w => w.wordType === 'adverb'),
        phrase: top1200.filter(w => w.wordType === 'phrase'),
        other: top1200.filter(w => w.wordType === 'other')
    };

    console.log('📈 Word type distribution:');
    Object.entries(byType).forEach(([type, words]) => {
        console.log(`  ${type}: ${words.length} words`);
    });
    console.log();

    // Distribute evenly across days
    for (let day = 0; day < 15; day++) {
        const dayWords: ScoredWord[] = [];

        // Add proportional amount from each type
        Object.values(byType).forEach(typeWords => {
            const perDay = Math.ceil(typeWords.length / 15);
            const start = day * perDay;
            const end = Math.min(start + perDay, typeWords.length);
            dayWords.push(...typeWords.slice(start, end));
        });

        // Shuffle within day for variety
        days[day] = dayWords.sort(() => Math.random() - 0.5).slice(0, 80);
    }

    // 6. Save to new CSV
    const finalWords: any[] = [];
    days.forEach((dayWords, dayIndex) => {
        dayWords.forEach((word, wordIndex) => {
            finalWords.push({
                day: dayIndex + 1,
                no: wordIndex + 1,
                word: word.word,
                meaning: word.meaning,
                targetScore: 650, // All for 650 class
                toeicFrequency: word.toeicFrequency,
                wordType: word.wordType,
                difficulty: word.difficulty
            });
        });
    });

    const csvWriter = createObjectCsvWriter({
        path: 'resources/essential_1200_vocab.csv',
        header: [
            { id: 'day', title: 'Day' },
            { id: 'no', title: 'No' },
            { id: 'word', title: 'Word' },
            { id: 'meaning', title: 'Meaning' },
            { id: 'targetScore', title: 'Target_Score' },
            { id: 'toeicFrequency', title: 'TOEIC_Frequency' },
            { id: 'wordType', title: 'Word_Type' },
            { id: 'difficulty', title: 'Difficulty' }
        ]
    });

    await csvWriter.writeRecords(finalWords);

    console.log('✅ Saved to resources/essential_1200_vocab.csv\n');

    // 7. Print summary
    console.log('📊 SUMMARY:');
    console.log(`Total words: ${finalWords.length}`);
    console.log(`Days: 15`);
    console.log(`Words per day: 80`);
    console.log(`\nFrequency distribution:`);
    const freqDist = finalWords.reduce((acc: any, w) => {
        const range = Math.floor(w.toeicFrequency / 2) * 2;
        acc[`${range}-${range + 1}`] = (acc[`${range}-${range + 1}`] || 0) + 1;
        return acc;
    }, {});
    Object.entries(freqDist).sort().reverse().forEach(([range, count]) => {
        console.log(`  Score ${range}: ${count} words`);
    });

    console.log('\n🎉 Done!');
}

main();
