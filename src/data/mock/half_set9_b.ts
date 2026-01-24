import { part1RealTests } from '../toeic/listening/part1/tests';
import { part2Data } from '../part2';
import { part3Data } from '../part3';
import { part4Data } from '../part4';
import { part5TestData } from '../toeic/reading/part5/tests';
import { part6TestData } from '../toeic/reading/part6/tests';
import { part7TestData } from '../toeic/reading/part7/tests';
import { rcPart7Test9 } from '../rc_part7_test9';

/**
 * 하프테스트 B회차 (실전 9회차 기반)
 * LC 50문항 / RC 50문항 규격 완벽 준수 버전
 * (A회차에서 사용되지 않은 나머지 문항들을 정확히 배정)
 */

// [Listening - 50문항]

// 1. Part 1 (3문항): 2, 4, 6번
const p1_raw = part1RealTests.find(t => t.testId === 9)?.questions || [];
export const half9bPart1 = p1_raw
    .filter(q => [2, 4, 6].includes(parseInt(q.id.split('_q')[1])))
    .map(q => ({ ...q, id: parseInt(q.id.split('_q')[1]) }));

// 2. Part 2 (11문항): A형(14문항) 제외한 나머지
const p2_used_ids = [7, 8, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];
export const half9bPart2 = (part2Data[9] || [])
    .filter(q => !p2_used_ids.includes(q.id));

// 3. Part 3 (21문항): A형(6세트) 제외한 나머지 7세트
const p3_raw = part3Data.filter(d => d.testId === 9);
export const half9bPart3 = [1, 3, 5, 7, 9, 11, 12].map(idx => p3_raw[idx]).filter(Boolean);

// 4. Part 4 (15문항): A형(5세트) 제외한 나머지 5세트
const p4_raw = part4Data.filter(d => d.testId === 9);
export const half9bPart4 = [1, 3, 5, 7, 9].map(idx => p4_raw[idx]).filter(Boolean);

export const half9bFullLCAudio = "/audio/mock/half_9b_full.mp3";

// [Reading - 정확히 50문항]

// 1. Part 5 (17문항): A형(101-125 홀수, 13문항) 제외한 나머지 101-130
const p5_used_nums = [101, 103, 105, 107, 109, 111, 113, 115, 117, 119, 121, 123, 125];
export const half9bPart5 = (part5TestData.find(t => t.testId === 9)?.questions || [])
    .filter(q => {
        const num = parseInt(q.id.replace('q', ''));
        return num >= 101 && num <= 130 && !p5_used_nums.includes(num);
    });

// 2. Part 6 (8문항): A형(세트 1, 3) 제외한 나머지 세트 2, 4
const p6_raw = part6TestData.find(t => t.testId === 9)?.passages || [];
export const half9bPart6 = [p6_raw[1], p6_raw[3]].filter(Boolean);

// 3. Part 7 (25문항): Single 15문항 + Multi 10문항
const p7_full = part7TestData.find(t => t.testId === 9)?.sets || [];

export const half9bPart7Single = [
    p7_full[6], // 161-163 (3)
    p7_full[7], // 164-167 (4)
    p7_full[8], // 168-171 (4)
    p7_full[9], // 172-175 (4)
];

export const half9bPart7Multi = [
    rcPart7Test9[1], // Double 181-185 (5)
    rcPart7Test9[4]  // Triple 196-200 (5)
];

export const half9bPart7 = [...half9bPart7Single, ...half9bPart7Multi];

// 최종 검증:
// LC: 3(P1) + 11(P2) + 21(P3) + 15(P4) = 50문항
// RC: 17(P5) + 8(P6) + 15(P7S) + 10(P7M) = 50문항
