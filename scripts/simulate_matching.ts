
import * as fs from 'fs';
import * as path from 'path';

async function simulateEnhancedMatching() {
    console.log("📊 [Simulation] Starting Enhanced Vocabulary Matching...");

    // 1. Load voca.ts words
    const VOCA_TS_PATH = path.join(process.cwd(), 'src/data/voca.ts');
    const vocaContent = fs.readFileSync(VOCA_TS_PATH, 'utf-8');
    const vocaWords: string[] = [];
    const entryRegex = /en:\s*"(.*?)"/g;
    let vMatch;
    while ((vMatch = entryRegex.exec(vocaContent)) !== null) {
        vocaWords.push(vMatch[1].toLowerCase().trim());
    }

    // 2. Load Sina Data (Headwords + Derivatives + Root index)
    const sinaHeadwords = new Set<string>();
    const sinaDerivativesMap = new Map<string, string>(); // Derivative -> Main Word

    for (let i = 1; i <= 20; i++) {
        const p = path.join(process.cwd(), `toeic-data/sina_voca_day${i}.json`);
        if (fs.existsSync(p)) {
            const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
            data.forEach((w: any) => {
                const headword = w.word.toLowerCase().trim();
                sinaHeadwords.add(headword);

                if (w.derivatives) {
                    w.derivatives.forEach((dStr: string) => {
                        const dMatch = dStr.match(/^([a-zA-Z\s\-]+)\s*\(/);
                        if (dMatch) {
                            sinaDerivativesMap.set(dMatch[1].trim().toLowerCase(), headword);
                        }
                    });
                }
            });
        }
    }

    // 3. Simple Stemming Logic (Root Match)
    // We normalize common suffixes to find roots
    function getRoot(word: string) {
        if (word.length < 5) return word;
        return word
            .replace(/(ing|ed|ly|es|s|tion|ment|able|ive|al|ize|ate)$/, '')
            .substring(0, 5);
    }

    const sinaRoots = new Set<string>();
    sinaHeadwords.forEach(w => sinaRoots.add(getRoot(w)));

    // 4. Perform Simulation
    let exactMatches = 0;
    let derivativeMatches = 0;
    let rootMatches = 0;
    let totalMatches = 0;
    const matchedVoca = new Set<string>();

    // Phase A: Exact
    vocaWords.forEach(w => {
        if (sinaHeadwords.has(w)) {
            exactMatches++;
            totalMatches++;
            matchedVoca.add(w);
        }
    });

    // Phase B: Derivative (for unmatched)
    vocaWords.forEach(w => {
        if (!matchedVoca.has(w) && sinaDerivativesMap.has(w)) {
            derivativeMatches++;
            totalMatches++;
            matchedVoca.add(w);
        }
    });

    // Phase C: Root Match (for unmatched)
    vocaWords.forEach(w => {
        if (!matchedVoca.has(w)) {
            const root = getRoot(w);
            if (sinaRoots.has(root)) {
                rootMatches++;
                totalMatches++;
                matchedVoca.add(w);
            }
        }
    });

    console.log(`\n--- Match Rate Analysis ---`);
    console.log(`Total voca.ts Slots:   ${vocaWords.length}`);
    console.log(`1. Exact Matches:      ${exactMatches}`);
    console.log(`2. Derivative Matches: ${derivativeMatches}`);
    console.log(`3. Root(Stem) Matches: ${rootMatches}`);
    console.log(`-----------------------------`);
    console.log(`Total Matched:         ${totalMatches} / ${vocaWords.length} (${((totalMatches / vocaWords.length) * 100).toFixed(1)}%)`);

    // Sample missed words for verification
    const missed = vocaWords.filter(w => !matchedVoca.has(w));
    console.log(`\nSample Missed: ${missed.slice(0, 15).join(", ")}...`);
}

simulateEnhancedMatching();
