import { part6Tests } from '../src/data/toeic/reading/part6/tests';

try {
    console.log("✅ Successfully imported tests.ts");
    console.log(`Loaded ${part6Tests.length} tests.`);

    // Check Test 3 specifically
    const t3 = part6Tests.find(t => t.testId === 3);
    if (t3) {
        console.log("Test 3 found. Questions: " + t3.passages.reduce((acc, p) => acc + p.questions.length, 0));
    }
} catch (e: any) {
    console.error("❌ Failed to load tests.ts");
    console.error(e.message);
}
