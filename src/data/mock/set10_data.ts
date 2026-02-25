import { part1RealTests } from '../toeic/listening/part1/tests';
import { part2RealTests } from '../toeic/listening/part2/tests';
import { part3RealTests } from '../part3';
import { part4Data } from '../part4';
import { part5TestData } from '../toeic/reading/part5/tests';
import { part6TestData } from '../toeic/reading/part6/tests';
import { part7TestData } from '../toeic/reading/part7/tests';
import { part7MultiTestData } from '../toeic/reading/part7/multi_tests';
const test10PracticeSet = part7MultiTestData.test10;


/**
 * 이 파일은 원본 데이터를 수정하지 않고, 10회차 모의고사(Set 10)를 위해 필요한 데이터만 
 * 필터링하여 제공하는 전용 데이터 모듈입니다.
 */

// Part 1: 10회차 필터링 (6문제)
const p1_raw = part1RealTests.find(t => t.vol === 3 && t.testId === 10)?.questions.questions || [];
export const test10Part1 = p1_raw.map(q => {
    const qNum = String(q.id).split('-q')[1] || String(q.id).split('-').pop() || "0";
    return {
        ...q,
        id: `p1-t10-q${qNum}`,
        options: ['A', 'B', 'C', 'D']
    };
});

// Part 2: 10회차 필터링 (25문제, 7~31번)
const p2_raw = part2RealTests.find(t => t.vol === 3 && t.testId === 10)?.questions.questions || [];
export const test10Part2 = p2_raw.map(q => {
    const qNum = String(q.id).split('-q')[1] || String(q.id).split('-').pop() || "0";
    const padQNum = qNum.padStart(2, '0');
    return {
        ...q,
        id: `p2-t10-q${qNum}`,
        audio: `/audio/ETS_TOEIC_3/Test_10/TEST 10_PART 2_${qNum}.mp3`,
        script: q.text
    };
});

// Part 3: 13세트 (32~70번)
export const test10Part3 = part3RealTests.filter(d => d.testId === 10).flatMap(t => t.questions);

// Part 4: 10세트 (71~100번)
export const test10Part4 = part4Data.filter(d => d.testId === 10).flatMap(t => t.questions);

// Part 5: 30문제 (101~130번)
const p5_raw = part5TestData.find(t => t.testId === 10)?.questions || [];
export const test10Part5 = p5_raw.map(q => ({
    ...q,
    id: q.id.includes('-q') ? q.id : `p5-t10-q${q.id.replace('q', '')}`,
    options: Object.entries(q.options).map(([label, text]) => `(${label}) ${text}`)
}));

// Part 6: 4지문 (131~146번)
const p6_raw = part6TestData.find(t => t.testId === 10)?.passages || [];
export const test10Part6 = p6_raw.map(p => {
    const qIds = p.questions.map((q: any) => parseInt(String(q.id).replace(/[^\d]/g, ''))).filter((n: any) => !isNaN(n));
    const range = qIds.length > 0 ? `${Math.min(...qIds)}-${Math.max(...qIds)}` : "Questions";

    return {
        ...p,
        questionRange: range,
        questions: p.questions.map(q => ({
            ...q,
            id: q.id.includes('-q') ? q.id : `p6-t10-q${String(q.id).replace(/[^\d]/g, '')}`,
            options: Object.entries(q.options).map(([label, text]) => `(${label}) ${text}`)
        }))
    };
});

// Part 7: 싱글 (147~175번) + 멀티 (176~200번)
const p7_full = part7TestData.find(t => t.testId === 10)?.sets || [];

// 175번까지의 싱글 지문만 필터링
export const test10Part7Single = p7_full.filter(s => {
    const match = s.questions[0].id.match(/q?(\d+)$/);
    const firstQ = match ? parseInt(match[1]) : 0;
    return firstQ >= 147 && firstQ <= 175;
}).map(s => {
    const qIds = s.questions.map((q: any) => parseInt(String(q.id).replace(/[^\d]/g, ''))).filter((n: any) => !isNaN(n));
    const range = qIds.length > 0 ? `${Math.min(...qIds)}-${Math.max(...qIds)}` : "Questions";

    return {
        ...s,
        questionRange: range,
        questions: s.questions.map(q => ({
            ...q,
            id: q.id.includes('-q') ? q.id : `p7-t10-q${String(q.id).replace(/[^\d]/g, '')}`,
            options: Object.entries(q.options).map(([label, text]) => `(${label}) ${text}`)
        }))
    };
});

// 176번부터의 멀티 지문
const p7_multi_raw = test10PracticeSet.length > 0
    ? test10PracticeSet
    : p7_full.filter(s => {
        const match = s.questions[0].id.match(/q?(\d+)$/);
        const firstQ = match ? parseInt(match[1]) : 0;
        return firstQ >= 176;
    });

export const test10Part7Multi = p7_multi_raw.map(s => {
    const qIds = s.questions.map((q: any) => parseInt(String(q.id).replace(/[^\d]/g, ''))).filter((n: any) => !isNaN(n));
    const range = qIds.length > 0 ? `${Math.min(...qIds)}-${Math.max(...qIds)}` : "Questions";

    return {
        ...s,
        questionRange: range,
        type: s.setType || (s.passages.length >= 3 ? 'Triple' : 'Double'),
        questions: s.questions.map(q => ({
            ...q,
            id: q.id.includes('-q') ? q.id : `p7-t10-q${String(q.id).replace(/[^\d]/g, '')}`,
            options: Object.entries(q.options).map(([label, text]) => `(${label}) ${text}`)
        }))
    };
});


// 전체 오디오 파일 경로 (데이터 파일 내 첫 번째 이미지의 폴더 기준 또는 별도 정의 필요)
// 보통 LC는 전체 파일 하나가 있으므로 이를 호출해야 함. 
// 여기서는 데이터 파일에 정의된 개별 오디오가 아닌 '전체 LC 오디오'를 사용함.
export const test10FullLCAudio = "/audio/mock/test2.mp3"; 
