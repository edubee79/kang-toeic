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

    // Standard actual test types (long and short)
    const actualTestTypes = [
        'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7s', 'p7d', 'p7',
        'part1_test', 'part2_test', 'part3_test', 'part4_test', 'part5_test', 'part6_test', 'part7_test',
        'part7_single', 'part7_double'
    ];

    if (actualTestTypes.includes(type) || type.endsWith('_test')) {
        return true;
    }

    // Pattern B: unit field contains 'Test', '회', 'Level', or 'p7'
    if (unit.includes('_Test') || unit.match(/Test\d+/) || unit.match(/\d+회/) || unit.includes('Level') || unit.includes('p7s') || unit.includes('p7d')) {
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

    // 1. Unified mapping (Standardize to p1...p7d)
    const normalized = (type + '_' + unit).toLowerCase();

    if (normalized.includes('part1') || normalized.includes('p1')) return 'p1';
    if (normalized.includes('part2') || normalized.includes('p2')) return 'p2';
    if (normalized.includes('part3') || normalized.includes('p3')) return 'p3';
    if (normalized.includes('part4') || normalized.includes('p4')) return 'p4';
    if (normalized.includes('part5') || normalized.includes('p5')) return 'p5';
    if (normalized.includes('part6') || normalized.includes('p6')) return 'p6';

    if (normalized.includes('part7') || normalized.includes('p7')) {
        if (normalized.includes('double') || normalized.includes('triple') || normalized.includes('multi') ||
            normalized.includes('이중') || normalized.includes('삼중') || normalized.includes('복합') ||
            normalized.includes('p7d') || normalized.includes('p7m') || normalized.includes('p7t')) {
            return 'p7d';
        }
        if (normalized.includes('single') || normalized.includes('단일') || normalized.includes('p7s')) {
            return 'p7s';
        }
        return 'p7s'; // Default P7 to single if unknown
    }

    return 'unknown';
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
