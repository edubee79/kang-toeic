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
 * 기존 UI와 완벽 호환되는 데이터 구조
 */

// [Listening]
const p1_raw = (part1RealTests.find(t => t.testId === 9)?.questions || []);
export const half9bPart1 = p1_raw
    .filter(q => {
        const num = parseInt(q.id.split('_q')[1]);
        return [2, 4, 6].includes(num);
    })
    .map(q => ({
        ...q,
        id: parseInt(q.id.split('_q')[1])
    }));

export const half9bPart2 = (part2Data[9] || []).filter(q => [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30].includes(q.id));
const p3_raw = part3Data.filter(d => d.testId === 9);
export const half9bPart3 = [1, 3, 5, 7, 9, 11, 12].map(idx => p3_raw[idx]).filter(Boolean);
const p4_raw = part4Data.filter(d => d.testId === 9);
export const half9bPart4 = [1, 3, 5, 7, 9].map(idx => p4_raw[idx]).filter(Boolean);
export const half9bFullLCAudio = "/audio/ETS_TOEIC_3/Test_09/TEST 09_Full.mp3";

// [Reading]
export const half9bPart5 = (part5TestData.find(t => t.testId === 9)?.questions || [])
    .filter(q => {
        const num = parseInt(q.id.replace('q', ''));
        return num >= 101 && num <= 130 && num % 2 === 0;
    });

const p6_raw = part6TestData.find(t => t.testId === 9)?.passages || [];
export const half9bPart6 = [p6_raw[1], p6_raw[3]].filter(Boolean);

const p7_full = part7TestData.find(t => t.testId === 9)?.sets || [];
export const half9bPart7 = [
    p7_full[1], p7_full[3], p7_full[5], p7_full[6], // Single 나머지
    rcPart7Test9[1], rcPart7Test9[3], rcPart7Test9[4] // Multi 나머지
].filter(Boolean);

// 빌드 에러 방지를 위한 legacy 변수명
export const half9bPart7Single = [p7_full[1], p7_full[3], p7_full[5], p7_full[6]];
export const half9bPart7Multi = [rcPart7Test9[1], rcPart7Test9[3], rcPart7Test9[4]];
