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

    // 1. Direct type mapping (Standardize everything to 'partX_test' or 'part7_single/double')
    if (type === 'p1' || type === 'part1_test') return 'part1_test';
    if (type === 'p2' || type === 'part2_test') return 'part2_test';
    if (type === 'p3' || type === 'part3_test') return 'part3_test';
    if (type === 'p4' || type === 'part4_test') return 'part4_test';
    if (type === 'p5' || type === 'part5_test') return 'part5_test';
    if (type === 'p6' || type === 'part6_test') return 'part6_test';

    // Part 7 Standard Mapping
    if (['p7s', 'part7_single', 'p7_single', 'p7single'].includes(type)) return 'part7_single';
    if (['p7d', 'p7t', 'p7m', 'part7_double', 'p7_double', 'part7_triple', 'p7_triple', 'p7double', 'p7triple'].includes(type)) return 'part7_double';
    if (['part7_test', 'p7', 'p7f', 'part7full'].includes(type)) return 'part7_test';

    // 2. Unit-based fallback (Parsing legacy strings like "8회 실전", "P7 Triple" 등)
    const unitLower = unit.toLowerCase();

    if (unitLower.includes('part1') || unitLower.includes('p1')) return 'part1_test';
    if (unitLower.includes('part2') || unitLower.includes('p2')) return 'part2_test';
    if (unitLower.includes('part3') || unitLower.includes('p3')) return 'part3_test';
    if (unitLower.includes('part4') || unitLower.includes('p4')) return 'part4_test';
    if (unitLower.includes('part5') || unitLower.includes('p5')) return 'part5_test';
    if (unitLower.includes('part6') || unitLower.includes('p6')) return 'part6_test';

    if (unitLower.includes('part7') || unitLower.includes('p7')) {
        // Multi-passage (Double/Triple/Multiple) keywords
        if (unitLower.includes('double') || unitLower.includes('triple') || unitLower.includes('multi') ||
            unitLower.includes('이중') || unitLower.includes('삼중') || unitLower.includes('복합') ||
            unitLower.includes('p7d') || unitLower.includes('p7m') || unitLower.includes('p7t')) {
            return 'part7_double';
        }
        // Single passage keywords
        if (unitLower.includes('single') || unitLower.includes('단일') || unitLower.includes('p7s')) {
            return 'part7_single';
        }
        return 'part7_test';
    }

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
