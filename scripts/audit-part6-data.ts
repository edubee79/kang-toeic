import { part6TestData } from '../src/data/rc_part6';

function auditPart6() {
    console.log("🔍 Starting Part 6 Data Integrity Audit (Tests 1-10)...");

    const issues: string[] = [];

    if (part6TestData.length !== 10) {
        issues.push(`Expected 10 tests, found ${part6TestData.length}`);
    }

    part6TestData.forEach(test => {
        if (test.passages.length !== 4) {
            issues.push(`Test ${test.testId}: Expected 4 passages, found ${test.passages.length}`);
        }

        test.passages.forEach((p, pIdx) => {
            if (!p.guidance || p.guidance.length < 10) {
                issues.push(`Test ${test.testId} P${pIdx + 1}: Missing or short guidance line`);
            }
            if (!p.content || p.content.length < 50) {
                issues.push(`Test ${test.testId} P${pIdx + 1}: Missing or short content`);
            }
            if (p.questions.length !== 4) {
                issues.push(`Test ${test.testId} P${pIdx + 1}: Expected 4 questions, found ${p.questions.length}`);
            }

            p.questions.forEach((q, qIdx) => {
                const marker = `[${q.id}]`;
                if (!p.content.includes(marker)) {
                    issues.push(`Test ${test.testId} P${pIdx + 1}: Missing marker ${marker} in content`);
                }
                if (!q.options || q.options.length !== 4) {
                    issues.push(`Test ${test.testId} P${pIdx + 1} Q${q.id}: Invalid options count`);
                }
                q.options.forEach(opt => {
                    if (!opt.text || opt.text.trim() === "") {
                        issues.push(`Test ${test.testId} P${pIdx + 1} Q${q.id}: Empty option text for label ${opt.label}`);
                    }
                });
                if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) {
                    issues.push(`Test ${test.testId} P${pIdx + 1} Q${q.id}: Invalid correct answer '${q.correctAnswer}'`);
                }
            });

            // Layout check for common merging issues
            if (p.content.includes("andIwas") || p.content.includes("wasahuge") || p.content.includes("fromPatron")) {
                issues.push(`Test ${test.testId} P${pIdx + 1}: Potential word-merging bug detected in content`);
            }
        });
    });

    if (issues.length === 0) {
        console.log("AUDIT_PASSED");
    } else {
        console.log("AUDIT_FAILED");
        issues.forEach(issue => console.log(`ERR: ${issue}`));
    }
}

auditPart6();
