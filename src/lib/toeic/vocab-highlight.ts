/**
 * Vocabulary Keyword Highlight Utilities for Part 7
 *
 * Parses P7_VOCABULARY question text to extract keyword + paragraph index,
 * and strips the "in paragraph X, line Y" reference from displayed text.
 */

export interface VocabHighlight {
    keyword: string;
    /** 0-based index into the passage's content[] array */
    paragraphIndex: number;
}

/**
 * Parses a P7_VOCABULARY question text to extract the target keyword and paragraph index.
 *
 * Handles patterns like:
 *   - `the word "X" in paragraph 2, line 3, is closest in meaning to`
 *   - `In the article, the word "X" in paragraph 1, line 1, is closest in meaning to`
 *   - `the word "X" is closest in meaning to`
 *   - curly quotes: "X"
 */
export function parseVocabQuestion(text: string): VocabHighlight | null {
    // Extract keyword: matches both straight quotes "X" and curly quotes "X"
    const keywordMatch = text.match(/[\u201c\u201d"']([^\u201c\u201d"']+)[\u201c\u201d"']/);
    if (!keywordMatch) return null;
    const keyword = keywordMatch[1].trim();

    // Extract paragraph number (1-based → convert to 0-based index)
    const paraMatch = text.match(/in paragraph (\d+)/i);
    const paragraphIndex = paraMatch ? parseInt(paraMatch[1], 10) - 1 : 0;

    return { keyword, paragraphIndex };
}

/**
 * Strips "in paragraph X, line Y," and "in paragraph X," from question text for clean display.
 * Works whether or not there's a leading comma.
 */
export function cleanVocabQuestionText(text: string): string {
    // Remove ", in paragraph X, line Y" patterns (with optional leading comma+space)
    let cleaned = text.replace(/,?\s*in paragraph \d+,\s*line \d+,?/gi, '');
    // Remove remaining ", in paragraph X" if present
    cleaned = cleaned.replace(/,?\s*in paragraph \d+,?/gi, '');
    // Collapse multiple spaces
    cleaned = cleaned.replace(/\s{2,}/g, ' ').trim();
    return cleaned;
}

/** Returns true if the question classification is a vocabulary question */
export function isVocabQuestion(classification?: string): boolean {
    if (!classification) return false;
    return classification.toUpperCase().includes('VOCABULARY');
}
