/**
 * AI Question Assembler - Step 3 Core Logic
 * Handles automatic assembly of custom drills and real-mode sessions.
 */
import { db } from '@/lib/firebase-admin';

export interface AssemblyOptions {
    userId: string;
    studentName: string;
    courseType: '8week' | '3week';
    weakestTags: { tag: string; label: string; count: number }[];
    weakestParts: string[]; // e.g., ['p2', 'p5']
}

export const QuestionAssembler = {
    /**
     * Generates a 7-day curriculum based on diagnosis
     */
    async assembleWeeklyCurriculum(options: AssemblyOptions) {
        const curriculum = [];
        const { userId, studentName, weakestTags, weakestParts } = options;

        // Days 1-7 (Friday to Thursday)
        for (let day = 1; day <= 7; day++) {
            const isOdd = day % 2 !== 0;

            if (isOdd) {
                // ODD DAY: Type Focus (Logic Drill)
                // Select Top 1-2 weakest tags for this day
                const tag = weakestTags[(day - 1) / 2 % weakestTags.length];
                curriculum.push(await this.createLogicDrill(userId, studentName, tag, day));
            } else {
                // EVEN DAY: Real Mode (Part Practice)
                // Select one of the weakest parts
                const part = weakestParts[(day / 2 - 1) % weakestParts.length];
                curriculum.push(await this.createRealModePart(userId, studentName, part, day));
            }
        }

        return curriculum;
    },

    async createLogicDrill(userId: string, studentName: string, tagInfo: any, dayOffset: number) {
        if (!tagInfo) return null;

        const tag = tagInfo.tag;
        const label = tagInfo.label;
        let part = tagInfo.part;

        // If no part information provided, try simple prefix-based inference
        if (!part) {
            if (tag.startsWith('p1')) part = 'p1';
            else if (['Who', 'When', 'Where', 'Why', 'How', 'What', 'YesNo', 'Choice', 'Statement', 'Tag', 'Negative', 'Indirect'].includes(tag)) part = 'p2';
            else if (tag.startsWith('p5') || tag.startsWith('voc') || tag.match(/^[n|p|a|v|i|g|p|c|s][1-9]/)) part = 'p5';
            else if (tag.startsWith('p6')) part = 'p6';
            else if (tag.startsWith('P7')) part = 'p7s';
            else {
                // Cannot infer part - skip this tag
                console.warn(`[QuestionAssembler] Cannot infer part for tag: ${tag}. Skipping.`);
                return null;
            }
        }
        const partName = this.getPartName(part);

        // For LC, we currently use the standard practice players as we don't have AI generated LC bank yet
        const isLC = part.startsWith('p1') || part.startsWith('p2') || part.startsWith('p3') || part.startsWith('p4');
        const testId = (dayOffset % 10) + 1;

        if (isLC) {
            const baseUrl = this.getPartUrl(part);
            let finalUrl: string;
            let description: string;

            // Detect if tag is a contextType (starts with letter+number like "A1", "B2", etc.)
            const isContextType = /^[A-Z]\d/.test(tag);
            const isPart3or4 = part === 'p3' || part === 'p4';

            if (isPart3or4 && isContextType) {
                // Part 3/4 with contextType: situation-based drill
                finalUrl = `/homework/${baseUrl}/test/${testId}?mode=drill&context=${tag}&returnTo=/student/analysis`;
                description = `${label} 대화 상황을 집중적으로 청취하며 익숙해집니다.`;
            } else {
                // Other LC parts OR classification-based drill (INFERENCE/GRAPHIC)
                finalUrl = baseUrl === 'part2'
                    ? `/homework/part2/${testId}?mode=drill&tag=${tag}&returnTo=/student/analysis`
                    : `/homework/${baseUrl}/test/${testId}?mode=drill&tag=${tag}&returnTo=/student/analysis`;
                description = `${label} 유형의 문제를 집중적으로 청취하며 돌발 상황에 대비합니다.`;
            }

            console.log(`[QuestionAssembler] Creating LC drill: part=${part}, tag=${tag}, isContextType=${isContextType}, url=${finalUrl}`);

            return {
                targetStudentId: userId,
                targetStudentName: studentName,
                type: 'ai_drill',
                title: `[Day ${dayOffset}] [${partName}] ${label} 집중 공략`,
                description,
                targetTag: tag,
                targetLabel: label,
                homeworkUrl: finalUrl,
                isAiGenerated: true,
                status: 'active',
                createdAt: new Date().toISOString(),
                dayOffset
            };
        }

        // RC (Part 5/6) Logic: Use the specialized AI Drill Player
        const questionsRef = db.collection('ai_weakness_questions');
        const snapshot = await questionsRef
            .where('classification', '==', tag)
            .limit(20)
            .get();

        const questionIds = snapshot.docs.map(doc => doc.id);

        return {
            targetStudentId: userId,
            targetStudentName: studentName,
            type: 'ai_drill',
            title: `[Day ${dayOffset}] [${partName}] ${label} 집중 공략`,
            description: `${label} 유형의 문제를 집중적으로 풀며 원리를 정복합니다. (총 20문항)`,
            questionIds,
            targetTag: tag,
            targetLabel: label,
            homeworkUrl: `/homework/part5-real/ai-drill?tag=${tag}&returnTo=/student/analysis`,
            isAiGenerated: true,
            status: 'active',
            createdAt: new Date().toISOString(),
            dayOffset
        };
    },

    async createRealModePart(userId: string, studentName: string, part: string, dayOffset: number) {
        // Simple logic to rotate test IDs for now (1-10)
        const testId = (dayOffset % 10) + 1;
        const partName = this.getPartName(part);
        const baseUrl = this.getPartUrl(part);
        const finalUrl = baseUrl === 'part2'
            ? `/homework/part2/${testId}?direct=true&mode=real&returnTo=/student/analysis`
            : `/homework/${baseUrl}/test/${testId}?direct=true&mode=real&returnTo=/student/analysis`;

        return {
            targetStudentId: userId,
            targetStudentName: studentName,
            type: 'real_part',
            title: `[Day ${dayOffset}] [${partName}] 실전 감각 유지`,
            description: `실전 모의고사 ${testId}회차의 ${partName} 전체를 실전처럼 수행하며 실전 감각을 끌어올립니다.`,
            targetPart: part,
            targetTestId: testId,
            homeworkUrl: finalUrl,
            isAiGenerated: true,
            status: 'active',
            createdAt: new Date().toISOString(),
            dayOffset
        };
    },

    getPartName(part: string) {
        const labels: any = {
            p1: 'Part 1', p2: 'Part 2', p3: 'Part 3', p4: 'Part 4',
            p5: 'Part 5', p6: 'Part 6', p7s: 'Part 7(단일)', p7d: 'Part 7(연계)'
        };
        return labels[part] || `Part ${part.replace('p', '')}`;
    },

    getPartUrl(part: string) {
        const map: any = {
            p1: 'part1-real',
            p2: 'part2',
            p3: 'part3',
            p4: 'part4',
            p5: 'part5-real',
            p6: 'part6',
            p7s: 'part7',
            p7d: 'part7'
        };
        return map[part] || 'part5-real';
    }
};
