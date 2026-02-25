const fs = require('fs');

const DATA_PATH = 'c:/Users/user/.gemini/antigravity/scratch/kangs-toeic-next/scripts/extracted_p5_vocab.json';

// Simple functional words to CATEGORICALLY EXCLUDE (Too easy for University level)
const easyFunctionalWords = new Set([
    // Simple Prepositions
    'in', 'on', 'at', 'for', 'to', 'by', 'with', 'from', 'of', 'into', 'onto',
    'up', 'down', 'near', 'beside', 'behind', 'under', 'above', 'across',
    'along', 'with', 'without', 'about', 'off', 'over', 'around', 'through',

    // Simple Pronouns / Determiners
    'i', 'my', 'me', 'mine', 'you', 'your', 'yours', 'he', 'his', 'him',
    'she', 'her', 'hers', 'it', 'its', 'we', 'our', 'us', 'ours', 'they',
    'their', 'them', 'theirs', 'this', 'that', 'these', 'those', 'each',
    'any', 'some', 'all', 'both', 'neither', 'either', 'another', 'other',
    'others', 'everyone', 'anyone', 'someone', 'everything', 'anything',

    // Basic Verbs / Auxiliaries
    'be', 'is', 'am', 'are', 'was', 'were', 'been', 'being', 'have', 'has',
    'had', 'do', 'does', 'did', 'will', 'would', 'shall', 'should', 'can',
    'could', 'may', 'might', 'must', 'get', 'got', 'make', 'made', 'go', 'went',

    // Others
    'so', 'now', 'but', 'and', 'or', 'not', 'just', 'too', 'very', 'than',
    'then', 'well', 'here', 'there', 'when', 'where', 'why', 'how', 'which', 'who'
]);

// Difficult Prepositions / Conjunctions to EXPLICITLY KEEP
const difficultFunctionalWords = new Set([
    // Difficult Prepositions
    'notwithstanding', 'prior', 'following', 'regarding', 'concerning', 'barring',
    'given', 'pending', 'pertaining', 'excluding', 'including', 'regardless',
    'despite', 'given', 'whereas', 'provided', 'providing', 'unlike', 'alongside',

    // Adverbial Conjunctions / Conjunctive Adverbs
    'although', 'though', 'nevertheless', 'nonetheless', 'however', 'therefore',
    'furthermore', 'moreover', 'consequently', 'subsequently', 'otherwise',
    'meanwhile', 'instead', 'conversely', 'likewise', 'similarly', 'besides'
]);

async function filterVocab() {
    const rawData = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
    console.log(`Initial items: ${rawData.length}`);

    const filtered = rawData.filter(item => {
        const w = item.word.toLowerCase().trim();

        // 1. Explicitly Keep difficult ones
        if (difficultFunctionalWords.has(w)) return true;

        // 2. Caterogically Exclude easy ones
        if (easyFunctionalWords.has(w)) return false;

        // 3. Exclude very short words (length 2 or less) unless in keep list
        if (w.length <= 2) return false;

        // 4. Exclude specific regex patterns (suffixes, etc.)
        if (w.startsWith('-')) return false;

        // 5. Everything else is either Pure Vocabulary or a multi-word phrase (Difficult Prep/Conj)
        return true;
    });

    // Special handling for common multi-word Difficult Prepositions
    const finalResult = filtered.map(item => {
        // Just keep the object as is
        return item;
    });

    fs.writeFileSync('scripts/filtered_p5_pure_vocab.json', JSON.stringify(finalResult, null, 2));
    console.log(`Filtering complete. ${finalResult.length} high-value items remaining.`);
}

filterVocab();
