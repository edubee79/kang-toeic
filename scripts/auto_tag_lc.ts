
import fs from 'fs';
import path from 'path';

// --- Part 3 Data Interfaces ---
interface Part3Question {
    id: string;
    text: string;
    options: { label: string; text: string }[];
    correctAnswer: string;
    questionType?: string;
}

interface Part3Set {
    setId: string;
    questionRange: string;
    questions: Part3Question[];
    script?: { speaker: string; text: string }[] | string;
    contextType?: string;
    [key: string]: any;
}

// --- Part 4 Data Interfaces ---
interface Part4Question {
    id: string;
    text: string;
    options: { label: string; text: string }[];
    correctAnswer: string;
    questionType?: string;
}

interface Part4Set {
    setId: string;
    questionRange: string;
    questions: Part4Question[];
    script?: { speaker: string; text: string }[] | string;
    contextType?: string;
    [key: string]: any;
}

// --- Logic Functions ---

function determineQuestionType(text: string): string {
    const t = text.toLowerCase();
    if (t.includes('look at the graphic') || t.includes('look at the picture') || t.includes('chart')) return 'VISUAL';
    if (t.includes('purpose') || t.includes('mainly about') || t.includes('discussing') || t.includes('talking about') || t.includes('topic')) return 'GIST';
    if (t.startsWith('where') || t.startsWith('who') || t.includes('occupation') || t.includes('job') || t.includes('work for') || t.includes('take place')) return 'WHO_LOC';
    if (t.includes('imply') || t.includes('mean when') || t.includes('suggest') || t.includes('probably') || t.includes('most likely') || t.includes('intent') || t.includes('why')) return 'INFERENCE';
    return 'DETAIL';
}

// Part 3: Dialogues 
function determinePart3Context(scriptText: string): string {
    const t = scriptText.toLowerCase();

    // Prioritize specific contexts
    if (t.includes('passport') || t.includes('flight') || t.includes('gate') || t.includes('airport') || t.includes('hotel') || t.includes('room service') || t.includes('check out')) return 'Travel';
    if (t.includes('menu') || t.includes('waiter') || t.includes('food') || t.includes('delicious') || t.includes('restaurant') || t.includes('reservation')) return 'Service';
    // 'Store' keywords need to be distinct from Office supplies
    if (t.includes('store') || t.includes('shop') || t.includes('refund') || t.includes('receipt') || (t.includes('buy') && !t.includes('office'))) return 'Service';

    if (t.includes('hire') || t.includes('resume') || t.includes('interview') || t.includes('candidate') || t.includes('salary') || t.includes('human resources')) return 'Personnel';

    // Default Business is very broad, so verify it's not actually a radio show or something unique
    if (t.includes('radio') && t.includes('guest')) return 'Daily';

    if (t.includes('meeting') || t.includes('budget') || t.includes('deadline') || t.includes('client') || t.includes('contract') || t.includes('presentation') || t.includes('office') || t.includes('project')) return 'Business';

    return 'Daily';
}

// Part 4: Monologues
function determinePart4Context(scriptText: string): string {
    const t = scriptText.toLowerCase();

    // 1. Telephone (Strong indicators)
    if (t.includes('message') || t.includes('call back') || t.includes('reached') || t.includes('voicemail') || t.includes('calling about')) return 'Telephone';

    // 2. Broadcast
    if (t.includes('radio') || t.includes('news') || t.includes('weather') || t.includes('traffic report') || t.includes('tune in')) return 'Broadcast';

    // 3. Advertisement (Sales oriented)
    if (t.includes('sale') || t.includes('discount') || t.includes('visit our') || t.includes('percent off') || t.includes('promotion') || (t.includes('store') && t.includes('open'))) return 'Advertisement';

    // 4. Announcement (Public/Internal)
    if (t.includes('attention') || t.includes('passenger') || t.includes('flight') || t.includes('train') || t.includes('platform') || t.includes('reminder') || t.includes('employees')) return 'Announcement';

    // 5. Speech / Tour
    if (t.includes('welcome') || t.includes('tour') || t.includes('speaker') || t.includes('award') || t.includes('guide') || t.includes('ceremony') || t.includes('applause')) return 'Speech';

    return 'Speech'; // Default
}


// --- Main Processing ---

const PART3_PATH = path.join(process.cwd(), 'src/data/part3.ts');
const PART4_PATH = path.join(process.cwd(), 'src/data/part4.ts');

function processPart3() {
    console.log('Processing Part 3...');
    let content = fs.readFileSync(PART3_PATH, 'utf-8');

    // Clean up previous runs
    content = content.replace(/^\s*"questionType": ".*",\r?\n/gm, '');
    content = content.replace(/^\s*"contextType": ".*",\r?\n/gm, '');

    let lines = content.split('\n');
    let newLines = [];

    // First Pass: Question types
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        // Question text indented by 8 spaces
        // Option text indented by 10-12 spaces
        if (line.match(/^\s{6,9}"text":/)) {
            const match = line.match(/"text": "(.*)"/);
            if (match) {
                const qText = match[1];
                const qType = determineQuestionType(qText);
                newLines.push(line);
                // Inject
                const indent = line.substring(0, line.indexOf('"text"'));
                newLines.push(`${indent}"questionType": "${qType}",`);
                continue;
            }
        }
        newLines.push(line);
    }

    // Second Pass: Context
    const setContextMap = new Map<string, string>();
    // Need clean text for splitting by setID to avoid issues with injected lines?
    // Actually, splitting "newLines" joined is safer as it has consistent structure.

    const parts = content.split('"setId": "');
    for (let i = 1; i < parts.length; i++) {
        const chunk = parts[i];
        const setIdEnd = chunk.indexOf('"');
        const setId = chunk.substring(0, setIdEnd);

        let scriptTextStr = "";
        const scriptStart = chunk.indexOf('"script":');
        if (scriptStart !== -1) {
            scriptTextStr = chunk.substring(scriptStart, scriptStart + 2000);
        }
        const context = determinePart3Context(scriptTextStr);
        setContextMap.set(setId, context);
    }

    // Inject Context
    let finalLines = [];
    for (let line of newLines) {
        finalLines.push(line);
        if (line.trim().startsWith('"setId": "')) {
            const match = line.match(/"setId": "(.*)"/);
            if (match) {
                const sid = match[1];
                const ctx = setContextMap.get(sid);
                if (ctx) {
                    const indent = line.substring(0, line.indexOf('"setId"'));
                    finalLines.push(`${indent}"contextType": "${ctx}",`);
                }
            }
        }
    }

    fs.writeFileSync(PART3_PATH, finalLines.join('\n'), 'utf-8');
    console.log('Part 3 updated.');
}

function processPart4() {
    console.log('Processing Part 4...');
    let content = fs.readFileSync(PART4_PATH, 'utf-8');

    content = content.replace(/^\s*"questionType": ".*",\r?\n/gm, '');
    content = content.replace(/^\s*"contextType": ".*",\r?\n/gm, '');

    let lines = content.split('\n');
    let newLines = [];

    // 1. Inject Question Types
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (line.match(/^\s{6,9}"text":/)) {
            const match = line.match(/"text": "(.*)"/);
            if (match) {
                const qText = match[1];
                const qType = determineQuestionType(qText);
                newLines.push(line);
                const indent = line.substring(0, line.indexOf('"text"'));
                newLines.push(`${indent}"questionType": "${qType}",`);
                continue;
            }
        }
        newLines.push(line);
    }

    // 2. Identify and Map Context
    const setContextMap = new Map<string, string>();
    const parts = content.split('"setId": "');
    for (let i = 1; i < parts.length; i++) {
        const chunk = parts[i];
        const setIdEnd = chunk.indexOf('"');
        const setId = chunk.substring(0, setIdEnd);

        let scriptTextStr = "";
        const scriptStart = chunk.indexOf('"script":');
        if (scriptStart !== -1) {
            scriptTextStr = chunk.substring(scriptStart, scriptStart + 2000);
        }

        const context = determinePart4Context(scriptTextStr);
        setContextMap.set(setId, context);
    }

    // 3. Inject Context
    let finalLines = [];
    for (let line of newLines) {
        finalLines.push(line);
        if (line.trim().startsWith('"setId": "')) {
            const match = line.match(/"setId": "(.*)"/);
            if (match) {
                const sid = match[1];
                const ctx = setContextMap.get(sid);
                if (ctx) {
                    const indent = line.substring(0, line.indexOf('"setId"'));
                    finalLines.push(`${indent}"contextType": "${ctx}",`);
                }
            }
        }
    }

    fs.writeFileSync(PART4_PATH, finalLines.join('\n'), 'utf-8');
    console.log('Part 4 updated.');
}

processPart3();
processPart4();
