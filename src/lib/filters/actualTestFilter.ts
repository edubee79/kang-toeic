/**
 * Actual Test Filter Utility
 * 
 * Purpose: Filter Manager_Results to include only actual test data
 * Excludes: Drill mode, grammar homework, vocabulary, etc.
 */

export interface ManagerResult {
    studentId: string;
    student?: string;
    unit?: string;
    type?: string;
    mode?: string;
    score?: number;
    total?: number;
    wrongCount?: number;
    incorrectQuestions?: any[];
    timestamp?: any;
    [key: string]: any;
}

/**
 * Determines if a Manager_Results entry is from an actual test
 * 
 * @param data - Manager_Results document data
 * @returns true if this is actual test data, false otherwise
 */
export function isActualTest(data: ManagerResult): boolean {
    // 1. CRITICAL: Exclude drill mode (highest priority)
    if (data.mode === 'drill') {
        return false;
    }

    // 2. Exclude grammar homework (used for weekend weakness-specific assignments)
    if (data.type === 'grammar' || data.unit?.includes('문법')) {
        return false;
    }

    // 3. Exclude vocabulary
    if (data.type === 'voca' || data.unit?.includes('단어') || data.unit?.includes('Voca')) {
        return false;
    }

    // 4. Exclude Part 1 shadowing practice
    if (data.type === 'part1_shadow' || data.unit?.includes('쉐도잉')) {
        return false;
    }

    // 5. Check for actual test patterns
    const unit = data.unit || '';
    const type = data.type || '';

    // Pattern A: type field ends with '_test'
    if (type.endsWith('_test') || type === 'part7_single' || type === 'part7_double') {
        // part5_test, part7_test, etc.
        return true;
    }

    // Pattern B: unit field contains 'Test', '회', or 'Level'
    if (unit.includes('_Test') || unit.match(/Test\d+/) || unit.match(/\d+회/) || unit.includes('Level')) {
        // LC_Part2_Test1, RC_Part5_Test3_real, "Part 5 1회", "LevelTest", etc.
        return true;
    }

    // Pattern C: unit contains '실전' (actual test)
    if (unit.includes('실전')) {
        return true;
    }

    // Default: not an actual test
    return false;
}

/**
 * Maps Manager_Results data to standardized part keys
 * 
 * @param data - Manager_Results document data
 * @returns standardized part key (e.g., 'part5_test', 'part2_test')
 */
export function mapToPartKey(data: ManagerResult): string {
    const unit = data.unit || '';
    const type = data.type || '';

    // Direct type mapping
    if (type && type.endsWith('_test')) {
        return type; // part5_test, part7_test, etc.
    }

    // Unit-based mapping
    if (unit.includes('Part2') || unit.includes('part2')) return 'part2_test';
    if (unit.includes('Part3') || unit.includes('part3')) return 'part3_test';
    if (unit.includes('Part4') || unit.includes('part4')) return 'part4_test';
    if (unit.includes('Part5') || unit.includes('part5')) return 'part5_test';
    if (unit.includes('Part6') || unit.includes('part6')) return 'part6_test';
    if (unit.includes('Part7') || unit.includes('part7')) {
        // Distinguish between single and double passages
        if (unit.includes('double') || unit.includes('이중') || unit.includes('Double')) {
            return 'part7_double';
        }
        return 'part7_single';
    }
    if (unit.includes('Part1') || unit.includes('part1')) return 'part1_test';

    // Fallback: return type or 'unknown'
    return type || 'unknown';
}

/**
 * Calculates correct answer count from Manager_Results data
 * 
 * @param data - Manager_Results document data
 * @returns number of correct answers
 */
export function calculateCorrectCount(data: ManagerResult): number {
    if (typeof data.score === 'number') {
        return data.score;
    }

    if (typeof data.total === 'number' && typeof data.wrongCount === 'number') {
        return data.total - data.wrongCount;
    }

    return 0;
}
