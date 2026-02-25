import { part1RealTests } from '../toeic/listening/part1/tests';
import { part2RealTests } from '../toeic/listening/part2/tests';
import { part3RealTests } from '../part3';
import { part4Data } from '../part4';
import { part5TestData } from '../toeic/reading/part5/tests';
import { part6TestData } from '../toeic/reading/part6/tests';
import { part7TestData } from '../toeic/reading/part7/tests';
import { part7MultiTestData } from '../toeic/reading/part7/multi_tests';
const test9PracticeSet = part7MultiTestData.test9;

/**
 * 이 파일은 원본 데이터를 수정하지 않고, 9회차 모의고사(Set 9)를 위해 필요한 데이터만 
 * 필터링하여 제공하는 전용 데이터 모듈입니다.
 * 실전모의고사 1회의 레이아웃을 기술적으로 실전모의고사 2회(Test 10)와 완전 동일하게 일치시킴.
 */

// Part 1: 9회차 필터링 (6문제)
const p1_raw = part1RealTests.find(t => t.vol === 3 && t.testId === 9)?.questions.questions || [];
export const test9Part1 = p1_raw.map(q => {
    const qNum = String(q.id).split('-q')[1] || String(q.id).split('-').pop() || "0";
    return {
        ...q,
        id: `p1-t9-q${qNum}`,
        options: ['A', 'B', 'C', 'D']
    };
});

// Part 2: 9회차 필터링 (25문제, 7~31번)
const p2_raw = part2RealTests.find(t => t.vol === 3 && t.testId === 9)?.questions.questions || [];
export const test9Part2 = p2_raw.map(q => {
    const qNum = String(q.id).split('-q')[1] || String(q.id).split('-').pop() || "0";
    const padQNum = qNum.padStart(2, '0');
    return {
        ...q,
        id: `p2-t9-q${qNum}`,
        audio: `/audio/ETS_TOEIC_3/Test_09/TEST 09_PART 2_${qNum}.mp3`,
        script: q.text // SolutionCard에서 발화문을 스크립트 영역에 표시하기 위함
    };
});

// Part 3: 13세트 (32~70번)
const p3_raw = part3RealTests.filter(d => d.testId === 9).flatMap(t => t.questions);
export const test9Part3 = p3_raw.map(s => ({
    ...s,
    questions: s.questions.map(q => ({
        ...q,
        id: q.id.includes('-q') ? q.id : `p3-t9-q${String(q.id).replace(/[^\d]/g, '')}`,
        options: Object.entries(q.options).map(([label, text]) => `(${label}) ${text}`)
    }))
}));

// Part 4: 10세트 (71~100번)
const p4_raw = part4Data.filter(d => d.testId === 9).flatMap(t => t.questions);
export const test9Part4 = p4_raw.map(s => ({
    ...s,
    questions: s.questions.map(q => ({
        ...q,
        id: q.id.includes('-q') ? q.id : `p4-t9-q${String(q.id).replace(/[^\d]/g, '')}`,
        options: Object.entries(q.options).map(([label, text]) => `(${label}) ${text}`)
    }))
}));

// Part 5: 30문제 (101~130번)
const p5_raw = part5TestData.find(t => t.testId === 9)?.questions || [];
export const test9Part5 = p5_raw.map(q => ({
    ...q,
    id: q.id.includes('-q') ? q.id : `p5-t9-q${String(q.id).replace(/[^\d]/g, '')}`,
    options: Object.entries(q.options).map(([label, text]) => `(${label}) ${text}`)
}));

// Part 6: 4지문 (131~146번)
const p6_raw = part6TestData.find(t => t.testId === 9)?.passages || [];
export const test9Part6 = p6_raw.map(p => {
    const qIds = p.questions.map((q: any) => parseInt(String(q.id).replace(/[^\d]/g, ''))).filter((n: any) => !isNaN(n));
    const range = qIds.length > 0 ? `${Math.min(...qIds)}-${Math.max(...qIds)}` : "Questions";

    return {
        ...p,
        questionRange: range,
        questions: p.questions.map(q => ({
            ...q,
            id: q.id.includes('-q') ? q.id : `p6-t9-q${String(q.id).replace(/[^\d]/g, '')}`,
            options: Object.entries(q.options).map(([label, text]) => `(${label}) ${text}`)
        }))
    };
});

// Part 7: 싱글 (147~175번) + 멀티 (176~200번)
const p7_full = part7TestData.find(t => t.testId === 9)?.sets || [];

// 175번까지의 싱글 지문만 필터링
export const test9Part7Single = p7_full.filter(s => {
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
            id: q.id.includes('-q') ? q.id : `p7-t9-q${String(q.id).replace(/[^\d]/g, '')}`,
            options: Object.entries(q.options).map(([label, text]) => `(${label}) ${text}`)
        }))
    };
});

// 176번부터의 멀티 지문 (정밀 필터링 적용)
export const test9Part7Multi = test9PracticeSet.map(s => {
    const qIds = s.questions.map((q: any) => parseInt(String(q.id).replace(/[^\d]/g, ''))).filter((n: any) => !isNaN(n));
    const range = qIds.length > 0 ? `${Math.min(...qIds)}-${Math.max(...qIds)}` : "Questions";

    return {
        ...s,
        questionRange: range,
        questions: s.questions.map(q => ({
            ...q,
            id: q.id.includes('-q') ? q.id : `p7-t9-q${String(q.id).replace(/[^\d]/g, '')}`,
            options: Object.entries(q.options).map(([label, text]) => `(${label}) ${text}`)
        }))
    };
});

// 전체 오디오 파일 경로
export const test9FullLCAudio = "/audio/mock/test1.mp3"; 
