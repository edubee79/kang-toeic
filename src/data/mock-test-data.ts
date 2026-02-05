import { part1Data } from './part1_mock';
import { test9PracticeSet } from './rc_part7_test9';
import { test10PracticeSet } from './rc_part7_test10';
import { part3RealTests } from './part3';
import { part4Data } from './part4';
import { part5TestData } from './toeic/reading/part5/tests';
import { part6TestData } from './toeic/reading/part6/tests';
import { part7TestData } from './toeic/reading/part7/tests';

export interface MockTestPart {
    partId: number; // 1, 2, 3, 4, 5, 6, 7
    data: any;
}

export interface MockTest {
    id: number; // 9, 10
    title: string;
    parts: MockTestPart[];
}

// Transform Part 5 Test 9 Data from the "Real Test" source
const realTest9 = part5TestData.find(t => t.testId === 9);
const test9Part5Data = realTest9 ? realTest9.questions.map(q => ({
    id: q.questionNo, // Use direct questionNo from source data
    text: q.text,
    options: Object.entries(q.options).map(([label, text]) => `(${label}) ${text}`) // Transform options to strings: "(A) value"
})) : [];

// Transform Part 6 Test 9 Data
const realPart6Test9 = part6TestData.find(t => t.testId === 9);
const test9Part6Data = realPart6Test9 ? realPart6Test9.passages : [];

// Transform Part 7 Test 9 Data (Single + Double/Triple)
const realPart7Test9 = part7TestData.find(t => t.testId === 9);
const singlePassages9 = realPart7Test9 ? realPart7Test9.sets : [];
const multiPassages9 = test9PracticeSet || [];
const test9Part7Data = [...singlePassages9, ...multiPassages9];

// Constructing Mock Test 9 (Label: Full Mock Test 1)
export const mockTest9: MockTest = {
    id: 9,
    title: "제1회 실전 모의고사",
    parts: [
        {
            partId: 1,
            data: part1Data // Placeholder using P1 mock data
        },
        {
            partId: 2,
            data: [] // Placeholder
        },
        {
            partId: 3,
            data: part3RealTests.filter(p => p.testId === 9)
        },
        {
            partId: 4,
            data: part4Data.filter(p => p.testId === 9)
        },
        {
            partId: 5,
            data: test9Part5Data // Use the transformed data
        },
        {
            partId: 6,
            data: test9Part6Data
        },
        {
            partId: 7,
            data: test9Part7Data
        }
    ]
};

// Transform Part 5 Test 10 Data
const realTest10 = part5TestData.find(t => t.testId === 10);
const test10Part5Data = realTest10 ? realTest10.questions.map(q => ({
    id: q.questionNo,
    text: q.text,
    options: Object.entries(q.options).map(([label, text]) => `(${label}) ${text}`)
})) : [];

// Transform Part 6 Test 10 Data
const realPart6Test10 = part6TestData.find(t => t.testId === 10);
const test10Part6Data = realPart6Test10 ? realPart6Test10.passages : [];

// Transform Part 7 Test 10 Data (Single + Double/Triple)
const realPart7Test10 = part7TestData.find(t => t.testId === 10);
const singlePassages10 = realPart7Test10 ? realPart7Test10.sets : [];
const multiPassages10 = test10PracticeSet || [];
const test10Part7Data = [...singlePassages10, ...multiPassages10];

// Constructing Mock Test 10 (Label: Full Mock Test 2)
export const mockTest10: MockTest = {
    id: 10,
    title: "제2회 실전 모의고사",
    parts: [
        {
            partId: 1,
            data: part1Data // Placeholder using P1 mock data
        },
        {
            partId: 2,
            data: [] // Placeholder
        },
        {
            partId: 3,
            data: part3RealTests.filter(p => p.testId === 10)
        },
        {
            partId: 4,
            data: part4Data.filter(p => p.testId === 10)
        },
        {
            partId: 5,
            data: test10Part5Data
        },
        {
            partId: 6,
            data: test10Part6Data
        },
        {
            partId: 7,
            data: test10Part7Data
        }
    ]
};

export const mockTests: Record<number, MockTest> = {
    9: mockTest9,
    10: mockTest10
};
