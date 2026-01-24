import { part1RealTests } from '../toeic/listening/part1/tests';
import { part2Data } from '../part2';
import { part3Data } from '../part3';
import { part4Data } from '../part4';
import { part5TestData } from '../toeic/reading/part5/tests';
import { part6TestData } from '../toeic/reading/part6/tests';
import { part7TestData } from '../toeic/reading/part7/tests';
import { rcPart7Test9 } from '../rc_part7_test9';

/**
 * 하프테스트 A회차 (실전 9회차 기반)
 * RC 50문항 규격 완벽 준수 버전 (가독성 및 문항 밸런스 최적화)
 */

// [Listening - 50문항]
const p1_raw = part1RealTests.find(t => t.testId === 9)?.questions || [];
export const half9aPart1 = p1_raw.filter(q => [1, 3, 5].includes(parseInt(q.id.split('_q')[1]))).map(q => ({ ...q, id: parseInt(q.id.split('_q')[1]) }));
export const half9aPart2 = (part2Data[9] || []).filter(q => [7, 8, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31].includes(q.id));
const p3_raw = part3Data.filter(d => d.testId === 9);
export const half9aPart3 = [0, 2, 4, 6, 8, 10].map(idx => p3_raw[idx]).filter(Boolean);
const p4_raw = part4Data.filter(d => d.testId === 9);
export const half9aPart4 = [0, 2, 4, 6, 8].map(idx => p4_raw[idx]).filter(Boolean);
export const half9aFullLCAudio = "/audio/mock/half_9a_full.mp3";

// [Reading - 정확히 50문항]

// 1. Part 5 (13문항): 101~125 홀수
export const half9aPart5 = (part5TestData.find(t => t.testId === 9)?.questions || [])
    .filter(q => {
        const num = parseInt(q.id.replace('q', ''));
        return num >= 101 && num <= 125 && num % 2 !== 0;
    });

// 2. Part 6 (8문항): 세트 1, 3 (각 4문항)
const p6_raw = part6TestData.find(t => t.testId === 9)?.passages || [];
export const half9aPart6 = [p6_raw[0], p6_raw[2]].filter(Boolean);

// 3. Part 7 (29문항)
const p7_full = part7TestData.find(t => t.testId === 9)?.sets || [];

export const half9aPart7Single = [
    p7_full[0], // 147-148 (2)
    p7_full[1], // 149-150 (2)
    p7_full[2], // 151-152 (2)
    p7_full[3], // 153-154 (2)
    p7_full[4], // 155-157 (3)
    p7_full[5], // 158-160 (3)
];

export const half9aPart7Multi = [
    rcPart7Test9[0], // Double 176-180 (5)
    rcPart7Test9[2], // Triple 186-190 (5)
    rcPart7Test9[3]  // Triple 191-195 (5)
];

export const half9aPart7 = [...half9aPart7Single, ...half9aPart7Multi];

// 최종 검증: 13(P5) + 8(P6) + 14(P7S) + 15(P7M) = 정확히 50문항
