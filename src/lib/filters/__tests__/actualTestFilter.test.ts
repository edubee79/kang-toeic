import { describe, it, expect } from '@jest/globals';
import { isActualTest, mapToPartKey, calculateCorrectCount } from '../actualTestFilter';

describe('actualTestFilter', () => {
    describe('isActualTest', () => {
        it('should return false for drill mode', () => {
            expect(isActualTest({ studentId: 'test', mode: 'drill' })).toBe(false);
            expect(isActualTest({ studentId: 'test', mode: 'drill', type: 'part5_test' })).toBe(false);
        });

        it('should return false for grammar homework', () => {
            expect(isActualTest({ studentId: 'test', type: 'grammar' })).toBe(false);
            expect(isActualTest({ studentId: 'test', unit: '문법 미션 1' })).toBe(false);
        });

        it('should return false for vocabulary', () => {
            expect(isActualTest({ studentId: 'test', type: 'voca' })).toBe(false);
            expect(isActualTest({ studentId: 'test', unit: '단어장 Day 1' })).toBe(false);
        });

        it('should return false for shadowing practice', () => {
            expect(isActualTest({ studentId: 'test', type: 'part1_shadow' })).toBe(false);
            expect(isActualTest({ studentId: 'test', unit: 'Part 1 쉐도잉' })).toBe(false);
        });

        it('should return true for type ending with _test', () => {
            expect(isActualTest({ studentId: 'test', type: 'part5_test' })).toBe(true);
            expect(isActualTest({ studentId: 'test', type: 'part7_test' })).toBe(true);
        });

        it('should return true for unit containing Test pattern', () => {
            expect(isActualTest({ studentId: 'test', unit: 'LC_Part2_Test1' })).toBe(true);
            expect(isActualTest({ studentId: 'test', unit: 'RC_Part5_Test3_real' })).toBe(true);
        });

        it('should return true for unit containing 회 pattern', () => {
            expect(isActualTest({ studentId: 'test', unit: 'Part 5 1회' })).toBe(true);
            expect(isActualTest({ studentId: 'test', unit: '실전 3회' })).toBe(true);
        });

        it('should return true for unit containing 실전', () => {
            expect(isActualTest({ studentId: 'test', unit: '실전 모의고사' })).toBe(true);
        });
    });

    describe('mapToPartKey', () => {
        it('should map type field directly', () => {
            expect(mapToPartKey({ studentId: 'test', type: 'part5_test' })).toBe('part5_test');
            expect(mapToPartKey({ studentId: 'test', type: 'part7_test' })).toBe('part7_test');
        });

        it('should map unit field to part keys', () => {
            expect(mapToPartKey({ studentId: 'test', unit: 'LC_Part2_Test1' })).toBe('part2_test');
            expect(mapToPartKey({ studentId: 'test', unit: 'RC_Part5_Test3' })).toBe('part5_test');
        });

        it('should distinguish Part 7 single vs double', () => {
            expect(mapToPartKey({ studentId: 'test', unit: 'RC_Part7_Test1' })).toBe('part7_single');
            expect(mapToPartKey({ studentId: 'test', unit: 'RC_Part7_double_Test1' })).toBe('part7_double');
        });
    });

    describe('calculateCorrectCount', () => {
        it('should return score if available', () => {
            expect(calculateCorrectCount({ studentId: 'test', score: 25 })).toBe(25);
        });

        it('should calculate from total and wrongCount', () => {
            expect(calculateCorrectCount({ studentId: 'test', total: 30, wrongCount: 5 })).toBe(25);
        });

        it('should return 0 if no data available', () => {
            expect(calculateCorrectCount({ studentId: 'test' })).toBe(0);
        });
    });
});
