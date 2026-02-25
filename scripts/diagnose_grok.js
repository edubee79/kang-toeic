
const fs = require('fs');
const path = require('path');

/**
 * Robust Matching Diagnostic Script
 */

async function diagnoseGrokDifference() {
    // 1. Load voca.ts
    const vocaContent = fs.readFileSync('src/data/voca.ts', 'utf8');
    const vocaWords = [...vocaContent.matchAll(/en:\s*"(.*?)"/g)].map(m => m[1].toLowerCase().trim());
    const vocaSet = new Set(vocaWords);

    // 2. Load ShinaGong Data with Robust Parsing
    const exactMatches = new Set();
    const derivativeMatches = new Set();

    const sinaHeadwords = new Set();
    const sinaAllDerivs = new Set();

    for (let day = 1; day <= 20; day++) {
        const filePath = `toeic-data/sina_voca_day${day}.json`;
        if (fs.existsSync(filePath)) {
            const words = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            words.forEach(w => {
                const head = w.word.toLowerCase().trim();
                sinaHeadwords.add(head);

                if (w.derivatives && Array.isArray(w.derivatives)) {
                    w.derivatives.forEach(dStr => {
                        // More robust: extract anything that looks like a word before any special chars or spaces after the word
                        // Supports: "word (pos) meaning", "word: meaning", "word", "word (pos)"
                        const cleanerMatch = dStr.match(/^([a-zA-Z\s\-]+)/);
                        if (cleanerMatch) {
                            sinaAllDerivs.add(cleanerMatch[1].trim().toLowerCase());
                        }
                    });
                }
            });
        }
    }

    // 3. Compare
    vocaWords.forEach(w => {
        if (sinaHeadwords.has(w)) {
            exactMatches.add(w);
        } else if (sinaAllDerivs.has(w)) {
            derivativeMatches.add(w);
        }
    });

    const totalMatched = exactMatches.size + derivativeMatches.size;
    const rate = (totalMatched / vocaWords.length) * 100;

    console.log(`\n--- Robust Matching Summary ---`);
    console.log(`Total voca.ts unique slots: ${vocaSet.size}`);
    console.log(`Exact Headword Matches:    ${exactMatches.size}`);
    console.log(`Derivative/Secondary:      ${derivativeMatches.size}`);
    console.log(`TOTAL MATCHED:             ${totalMatched} / ${vocaWords.length} (${rate.toFixed(1)}%)`);

    // Check some specific words Grok might have caught
    const samples = ["client", "investigate", "deadline", "quarter"];
    console.log("\nSpecific Word Check:");
    samples.forEach(s => {
        const isHead = sinaHeadwords.has(s);
        const isDeriv = sinaAllDerivs.has(s);
        console.log(`- ${s}: Headword=${isHead}, Derivative=${isDeriv}`);
    });
}

diagnoseGrokDifference();
