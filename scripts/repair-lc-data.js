
const fs = require('fs');
const path = require('path');

const PART3_PATH = path.join(__dirname, '../src/data/part3.ts');
const PART4_PATH = path.join(__dirname, '../src/data/part4.ts');
const PART7_DIR = path.join(__dirname, '../src/data/toeic/reading/part7');
const PART7_FILES = [
    'test1.ts', 'test2.ts', 'test3.ts', 'test4.ts', 'test5.ts',
    'test6.ts', 'test7.ts', 'test8.ts', 'test9.ts', 'test10.ts'
].map(f => path.join(PART7_DIR, f));

function classifyLC(text) {
    if (!text) return 'DETAIL';
    const t = text.toLowerCase();

    if (t.includes('"')) return 'IMPLY_MEANING';
    if (t.includes('graphic') || t.includes('table') || t.includes('chart') || t.includes('diagram') || t.includes('look at')) return 'GRAPHIC';

    // 1. Problem/Concern
    if (t.includes('problem') || t.includes('concern') || t.includes('worry') || t.includes('trouble')) return 'PROBLEM_CONCERN';

    // 2. Request/Offer/Suggest (Active action)
    if (t.includes('request') || t.includes('suggest') || t.includes('offer') ||
        t.includes('recommend') || t.includes('propose') || t.includes('invite') ||
        (t.includes('ask') && t.includes('to'))) {
        return 'OFFER_SUGGEST';
    }

    // 3. Simple Ask/Inquiry (Information gathering)
    if (t.includes('ask about') || t.includes('ask for') || t.includes('ask information') || t.includes('inquire') || t.includes('ask?')) {
        return 'ASK_QUESTION';
    }

    if (t.includes('next') || t.includes('plan to')) return 'ACTION_NEXT';

    if (t.startsWith('who') || t.startsWith('where') || t.includes('who most likely') || t.includes('where most likely')) return 'WHO_LOC';

    if (t.includes('when') || t.includes('time') || t.includes('how long') || t.includes('how often')) return 'WHEN_TIME';

    if (t.includes('why') || t.includes('reason')) return 'WHY_REASON';

    if (t.startsWith('how')) return 'HOW_METHOD';

    if (t.includes('purpose') || t.includes('main topic') || t.includes('calling about') || t.includes('about?') || t.includes('discussing')) return 'WHAT_WHICH';

    return 'DETAIL';
}

function classifyRC(text) {
    if (!text) return 'P7_DETAIL';
    const t = text.toLowerCase();
    if (t.includes('"')) return 'P7_INTENTION';
    if (t.includes('[1]') || t.includes('[2]') || t.includes('[3]') || t.includes('[4]')) return 'P7_INSERTION';
    if (t.includes('graphic') || t.includes('chart') || t.includes('table') || t.includes('map')) return 'P7_GRAPHIC';
    if (t.includes('closest in meaning to')) return 'P7_VOCABULARY';
    if (t.includes('not mentioned') || t.includes('except') || t.includes('not true') || t.includes('not state')) return 'P7_NEGATIVE';
    if (t.includes('purpose') || t.includes('why') && (t.includes('written') || t.includes('sent') || t.includes('prepared'))) return 'P7_PURPOSE';
    if (t.includes('most likely') || t.includes('suggested') || t.includes('implied') || t.includes('inferred')) return 'P7_INFERENCE';
    if (t.includes('where does') && t.includes('find') || t.includes('which paragraph')) return 'P7_LOCATION';
    return 'P7_DETAIL';
}

function repairFile(filePath, isLC) {
    console.log(`Repairing ${filePath}...`);
    let content = fs.readFileSync(filePath, 'utf8');

    // Clean up existing classification fields to re-classify with new logic
    content = content.replace(/^\s*classification:\s*"[^"]*",?\s*$/gm, '');

    const lines = content.split('\n');
    const output = [];
    let inOptions = false;
    let bracketCount = 0;
    let inQuestion = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.includes('options:')) {
            inOptions = true;
            bracketCount = 0;
        }

        if (inOptions) {
            if (line.includes('[') || line.includes('{')) bracketCount++;
            if (line.includes(']') || line.includes('}')) bracketCount--;
            if (bracketCount <= 0 && (line.includes(']') || line.includes('}'))) {
                inOptions = false;
            }
        }

        const textMatch = line.match(/^\s*text:\s*"((?:[^"\\]|\\.)*)"/);

        if (textMatch && !inOptions) {
            const cleanText = textMatch[1].replace(/\\"/g, '"');
            output.push(line);

            const isSpeakerLine = line.includes('speaker:') || (i > 0 && lines[i - 1].includes('speaker:')) || (i < lines.length - 1 && lines[i + 1].includes('speaker:'));

            if (!isSpeakerLine) {
                const newClass = isLC ? classifyLC(cleanText) : classifyRC(cleanText);
                const indent = line.match(/^\s*/)[0];
                output.push(`${indent}classification: "${newClass}",`);
            }
            continue;
        }

        if (line.trim() === '' && i > 0 && output.length > 0 && output[output.length - 1].trim() === '') {
            // skip redundant empty lines
        } else {
            output.push(line);
        }
    }

    let finalResult = output.join('\n');
    finalResult = finalResult.replace(/,\s*}/g, '\n      }');
    finalResult = finalResult.replace(/,\s*]/g, '\n                    ]');

    if (!isLC) {
        finalResult = finalResult.replace(/classification:\s*"P7_/g, 'classification: "P7_');
    }

    fs.writeFileSync(filePath, finalResult, 'utf8');
}

repairFile(PART3_PATH, true);
repairFile(PART4_PATH, true);
PART7_FILES.forEach(f => {
    if (fs.existsSync(f)) repairFile(f, false);
});

console.log('All files repaired successfully.');
