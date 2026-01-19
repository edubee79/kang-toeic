import { part1Data } from './part1_mock'; // Test 9 Part 1 (Placeholder)
// import { part5Questions } from './rc_part5'; // Old Part 5 Data (Deprecated for Test 9)
// import { part6Sets } from './mock/part6_data'; // Test 9 Part 6
import { rcPart7Test9 as part7Data } from './rc_part7_test9'; // Test 9 Part 7
import { part3Data } from './part3'; // Placeholder for LC
import { part4Data } from './part4';
import { part5TestData } from './toeic/reading/part5/tests'; // Import the Real Test Data
import { part6TestData } from './toeic/reading/part6/tests'; // Import Real Part 6 Data
import { part7TestData } from './toeic/reading/part7/tests'; // Import Real Part 7 Data

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
    id: parseInt(q.id.replace('q', '')), // "q101" -> 101
    text: q.text,
    options: q.options.map(o => `(${o.label}) ${o.text}`) // Transform options to strings: "(A) value"
})) : [];

// Transform Part 6 Test 9 Data
const realPart6Test9 = part6TestData.find(t => t.testId === 9);
const test9Part6Data = realPart6Test9 ? realPart6Test9.passages : [];

// Transform Part 7 Test 9 Data
// User requested Single Passages (147-175) for now, but usually Part 7 includes Double/Triple.
// We will load ALL sets for Test 9, but the UI might handle them differently or we can filter.
// The user explicitly said "147-175", which usually corresponds to Single Passages.
// Let's filter for sets that have questions in range 147-175.
const realPart7Test9 = part7TestData.find(t => t.testId === 9);
const test9Part7Data = realPart7Test9 ? realPart7Test9.sets.filter(s => {
    // Basic check: looks for sets where IDs start with 147 up to 175.
    // Or we can blindly take all, and the UI stops at 175?
    // Let's take ALL sets from Test 9. The user might want to continue later.
    // Actually, "Part 7 Single Passage 147-175... page config same as Part 6".
    // I'll filter for sets where the question range falls within 147-175.
    const firstQ = parseInt(s.questions[0].id);
    return firstQ >= 147 && firstQ <= 175;
}) : [];

// Constructing Mock Test 9 (Label: Full Mock Test 1)
export const mockTest9: MockTest = {
    id: 9,
    title: "제9회 실전 모의고사",
    parts: [
        {
            partId: 1,
            data: part1Data
        },
        {
            partId: 2,
            data: [] // Placeholder
        },
        {
            partId: 3,
            data: part3Data.filter(p => p.testId === 9)
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

export const mockTests: Record<number, MockTest> = {
    9: mockTest9
};
