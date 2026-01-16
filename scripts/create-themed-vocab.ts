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
    targetScore: string;
    toeicFrequency: string;
    wordType: string;
    difficulty: string;
}

interface EnrichedWord extends VocabWord {
    theme: string;
    synonyms: string;
    antonyms: string;
    relatedWords: string;
}

const THEMES = [
    '인사/채용',
    '사무/업무',
    '의사소통',
    '고객서비스',
    '시설/장소',
    '재무/회계',
    '마케팅/광고',
    '계약/협상',
    '생산/제조',
    '물류/배송',
    '연구개발',
    '경영/관리',
    '인사/복지',
    '법률/규정',
    '기타'
];

async function classifyAndEnrichBatch(words: VocabWord[]): Promise<EnrichedWord[]> {
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const wordList = words.map((w, i) => `${i + 1}. ${w.word} - ${w.meaning}`).join('\n');

    const prompt = `You are a TOEIC vocabulary expert. For each word, provide:

1. Theme (choose ONE from these TOEIC topics):
   - 인사/채용 (Hiring/Recruitment): resume, applicant, interview, hire, candidate
   - 사무/업무 (Office/Work): document, deadline, schedule, manage, submit
   - 의사소통 (Communication): inform, notify, announce, discuss, meeting
   - 고객서비스 (Customer Service): customer, service, assist, satisfaction
   - 시설/장소 (Facilities/Location): facility, equipment, premises, venue
   - 재무/회계 (Finance/Accounting): budget, expense, revenue, profit, invoice
   - 마케팅/광고 (Marketing/Advertising): advertise, promote, campaign, strategy
   - 계약/협상 (Contract/Negotiation): contract, agreement, negotiate, terms
   - 생산/제조 (Production/Manufacturing): manufacture, produce, quality, operate
   - 물류/배송 (Logistics/Delivery): delivery, shipment, transport, distribute
   - 연구개발 (R&D): research, develop, innovation, technology, design
   - 경영/관리 (Management): supervise, coordinate, organize, policy
   - 인사/복지 (HR/Benefits): employment, salary, benefit, insurance
   - 법률/규정 (Legal/Regulations): regulation, comply, legal, enforce
   - 기타 (Other): words that don't fit above categories

2. Synonyms (2-3 TOEIC-relevant synonyms, comma-separated)
3. Antonyms (1-2 antonyms if applicable, or "none")
4. Related Words (2-3 related TOEIC words, comma-separated)

WORDS:
${wordList}

Return ONLY valid JSON array:
[
  {
    "index": 1,
    "theme": "인사/채용",
    "synonyms": "candidate, job seeker",
    "antonyms": "employer",
    "relatedWords": "resume, interview, hire"
  },
  ...
]`;

    let retries = 5;
    let delay = 2000;

    while (retries > 0) {
        try {
            const result = await model.generateContent(prompt);
            const responseText = result.response.text();
            const cleanJson = responseText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
            const enrichments = JSON.parse(cleanJson);

            return words.map((word, i) => {
                const enrichment = enrichments.find((e: any) => e.index === i + 1) || {
                    theme: '기타',
                    synonyms: '',
                    antonyms: 'none',
                    relatedWords: ''
                };

                return {
                    ...word,
                    theme: enrichment.theme,
                    synonyms: enrichment.synonyms,
                    antonyms: enrichment.antonyms,
                    relatedWords: enrichment.relatedWords
                };
            });
        } catch (error: any) {
            console.error(`Error enriching batch (retries left: ${retries - 1}):`, error.message || error);
            retries--;
            if (retries === 0) {
                console.error('Max retries reached. Returning default values.');
                return words.map(word => ({
                    ...word,
                    theme: '기타',
                    synonyms: '',
                    antonyms: 'none',
                    relatedWords: ''
                }));
            }
            console.log(`Waiting ${delay}ms before retry...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            delay *= 2; // Exponential backoff
        }
    }

    return []; // Should not reach here due to return in catch block
}

async function main() {
    console.log('🚀 Starting theme-based vocabulary reorganization...\n');

    // 1. Load AI-analyzed CSV
    const words: VocabWord[] = [];
    await new Promise((resolve, reject) => {
        fs.createReadStream('resources/essential_1200_vocab.csv', { encoding: 'utf8' })
            .pipe(csvParser({ skipLines: 0, mapHeaders: ({ header }) => header.trim() }))
            .on('data', (row: any) => {
                const cleanRow: any = {};
                Object.keys(row).forEach(key => {
                    const cleanKey = key.replace(/^\uFEFF/, '').trim();
                    cleanRow[cleanKey] = row[key];
                });

                words.push({
                    day: cleanRow.Day,
                    no: cleanRow.No,
                    word: cleanRow.Word,
                    meaning: cleanRow.Meaning,
                    targetScore: cleanRow.Target_Score,
                    toeicFrequency: cleanRow.TOEIC_Frequency,
                    wordType: cleanRow.Word_Type,
                    difficulty: cleanRow.Difficulty
                });
            })
            .on('end', resolve)
            .on('error', reject);
    });

    console.log(`📚 Loaded ${words.length} words\n`);

    // 2. Classify and enrich in batches
    const enrichedWords: EnrichedWord[] = [];
    const batchSize = 20;

    for (let i = 0; i < words.length; i += batchSize) {
        const batch = words.slice(i, i + batchSize);
        console.log(`🔍 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(words.length / batchSize)}...`);

        const enriched = await classifyAndEnrichBatch(batch);
        enrichedWords.push(...enriched);

        if (i + batchSize < words.length) {
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }

    console.log(`\n✅ Classification complete!\n`);

    // 3. Group by theme
    const byTheme: { [key: string]: EnrichedWord[] } = {};
    THEMES.forEach(theme => byTheme[theme] = []);

    enrichedWords.forEach(word => {
        const theme = word.theme || '기타';
        if (!byTheme[theme]) byTheme[theme] = [];
        byTheme[theme].push(word);
    });

    console.log('📊 Theme distribution:');
    Object.entries(byTheme).forEach(([theme, words]) => {
        if (words.length > 0) {
            console.log(`  ${theme}: ${words.length}개`);
        }
    });
    console.log();

    // 4. Sort each theme by frequency (highest first)
    Object.keys(byTheme).forEach(theme => {
        byTheme[theme].sort((a, b) => parseInt(b.toeicFrequency) - parseInt(a.toeicFrequency));
    });

    // 5. Distribute into 15 days (80 words each)
    const days: EnrichedWord[][] = Array.from({ length: 15 }, () => []);
    const themeOrder = THEMES.filter(t => byTheme[t].length > 0);

    // Assign 2 themes per day (some days may have 1 theme if words run out)
    themeOrder.forEach((theme, idx) => {
        const dayIndex = Math.floor(idx / 2) % 15;
        days[dayIndex].push(...byTheme[theme]);
    });

    // Balance to 80 words per day
    for (let i = 0; i < 15; i++) {
        days[i] = days[i].slice(0, 80);
    }

    // 6. Save to CSV
    const finalWords: any[] = [];
    days.forEach((dayWords, dayIndex) => {
        dayWords.forEach((word, wordIndex) => {
            finalWords.push({
                day: dayIndex + 1,
                no: wordIndex + 1,
                word: word.word,
                meaning: word.meaning,
                targetScore: 650,
                toeicFrequency: word.toeicFrequency,
                wordType: word.wordType,
                difficulty: word.difficulty,
                theme: word.theme,
                synonyms: word.synonyms,
                antonyms: word.antonyms,
                relatedWords: word.relatedWords
            });
        });
    });

    const csvWriter = createObjectCsvWriter({
        path: 'resources/themed_1200_vocab.csv',
        header: [
            { id: 'day', title: 'Day' },
            { id: 'no', title: 'No' },
            { id: 'word', title: 'Word' },
            { id: 'meaning', title: 'Meaning' },
            { id: 'targetScore', title: 'Target_Score' },
            { id: 'toeicFrequency', title: 'TOEIC_Frequency' },
            { id: 'wordType', title: 'Word_Type' },
            { id: 'difficulty', title: 'Difficulty' },
            { id: 'theme', title: 'Theme' },
            { id: 'synonyms', title: 'Synonyms' },
            { id: 'antonyms', title: 'Antonyms' },
            { id: 'relatedWords', title: 'Related_Words' }
        ]
    });

    await csvWriter.writeRecords(finalWords);

    console.log('✅ Saved to resources/themed_1200_vocab.csv\n');
    console.log('📊 SUMMARY:');
    console.log(`Total words: ${finalWords.length}`);
    console.log(`Days: 15`);
    console.log(`Avg words per day: ${Math.round(finalWords.length / 15)}`);

    console.log('\n🎉 Done!');
}

main();
