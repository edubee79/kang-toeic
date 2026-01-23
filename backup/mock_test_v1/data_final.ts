import { part1RealTests } from '../toeic/listening/part1/tests';
import { part2Data } from '../part2';
import { part3Data } from '../part3';
import { part4Data } from '../part4';
import { part5TestData } from '../toeic/reading/part5/tests';
import { part6TestData } from '../toeic/reading/part6/tests';
import { part7TestData } from '../toeic/reading/part7/tests';
import { rcPart7Test9 } from '../rc_part7_test9';


/**
 * 이 파일은 원본 데이터를 수정하지 않고, 9회차 모의고사(Set 9)를 위해 필요한 데이터만 
 * 필터링하여 제공하는 전용 데이터 모듈입니다.
 */

// Part 1: 9회차 필터링 (6문제)
const p1_raw = part1RealTests.find(t => t.testId === 9)?.questions || [];
export const test9Part1 = p1_raw.map(q => ({
    id: q.id,
    image: q.image,
    audio: q.audio,
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: q.correctAnswer
}));

// Part 2: 9회차 필터링 (25문제, 7~31번)
export const test9Part2 = part2Data[9] || [];

// Part 3: 13세트 (32~70번)
export const test9Part3 = part3Data.filter(d => d.testId === 9);

// Part 4: 10세트 (71~100번)
export const test9Part4 = part4Data.filter(d => d.testId === 9);

// Part 5: 30문제 (101~130번)
const p5_raw = part5TestData.find(t => t.testId === 9)?.questions || [];
export const test9Part5 = p5_raw.map(q => ({
    id: parseInt(q.id.replace('q', '')),
    text: q.text,
    options: q.options.map(o => `(${o.label}) ${o.text}`),
    correctAnswer: q.correctAnswer
}));

// Part 6: 4지문 (131~146번)
export const test9Part6 = part6TestData.find(t => t.testId === 9)?.passages || [];

// Part 7: 싱글 (147~175번) + 멀티 (176~200번)
const p7_full = part7TestData.find(t => t.testId === 9)?.sets || [];

// 175번까지의 싱글 지문만 필터링
export const test9Part7Single = p7_full.filter(s => {
    const firstQ = parseInt(s.questions[0].id);
    return firstQ >= 147 && firstQ <= 175;
});

// 176번부터의 멀티 지문 (별도 파일에서 가져옴)
export const test9Part7Multi = rcPart7Test9;


// 전체 오디오 파일 경로 (데이터 파일 내 첫 번째 이미지의 폴더 기준 또는 별도 정의 필요)
// 보통 LC는 전체 파일 하나가 있으므로 이를 호출해야 함. 
// 여기서는 데이터 파일에 정의된 개별 오디오가 아닌 '전체 LC 오디오'를 사용함.
export const test9FullLCAudio = "/audio/mock/test1.mp3"; 
