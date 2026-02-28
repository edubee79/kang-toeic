/**
 * AI Question Assembler - Final Spec v2.0
 * 6-day curriculum based on confirmed spec:
 *   - Day 1~4: Weakness drill (Probe → Day 1 priority, otherwise drill by weak tag)
 *   - Day 5: LC weakest part real mode (1 test)
 *   - Day 6: RC weakest part real mode (1 test)
 *   - 600점 이하: Daily voca (미풀이 Day 중 최소 번호 순) prepended each day
 */
import { db } from '@/lib/firebase-admin';

export interface AssemblyOptions {
    userId: string;
    studentName: string;
    estScore: number;
    weakestTags: { tag: string; label: string; count?: number; incorrectCount?: number; part?: string }[];
    weakestParts: string[]; // e.g., ['p3', 'p5']
    probeParts: string[];   // Parts with zero data (no learning records at all)
}

export const QuestionAssembler = {
    /**
     * Generates a 6-day (Mon-Sat) curriculum based on diagnosis and level.
     * Spec:
     *   Day 1~4: weakness drill (Probe on Day 1 if exists, else tag drill)
     *   Day 5: LC real mode (weakest LC part)
     *   Day 6: RC real mode (weakest RC part)
     *   600점 이하: voca (next unlearned day by number) prepended every day
     */
    async assembleWeeklyCurriculum(options: AssemblyOptions) {
        const { userId, studentName, estScore, weakestTags, weakestParts, probeParts } = options;
        const curriculum: any[] = [];

        const isBasicLevel = estScore <= 600;

        // Identify LC/RC focused parts
        const lcParts = ['p1', 'p2', 'p3', 'p4'];
        const rcParts = ['p5', 'p6', 'p7s', 'p7d'];

        const weakestLC = weakestParts.find(p => lcParts.includes(p)) || 'p3';
        const weakestRC = weakestParts.find(p => rcParts.includes(p)) || 'p5';

        // Find next unlearned voca day (only needed for basic level)
        let nextVocaDay = 1;
        if (isBasicLevel) {
            nextVocaDay = await this._findNextUnlearnedVocaDay(userId);
        }

        for (let day = 1; day <= 6; day++) {
            // --- Voca: 600점 이하만, 미풀이 Day 중 번호 낮은 순 ---
            if (isBasicLevel) {
                const vocaDay = nextVocaDay + (day - 1); // Day 1→nextVocaDay, Day 2→+1, ...
                curriculum.push(this._createVocaAssignment(userId, studentName, day, vocaDay));
            }

            if (day <= 4) {
                // [Stage 1~2: Weakness Drill, Day 1~4]
                if (day === 1 && probeParts.length > 0) {
                    // Probe 파트가 있으면 Day 1에 우선 배정 (데이터 無 파트 탐색)
                    const probePart = probeParts[0];
                    curriculum.push(await this.createRealModePart(userId, studentName, probePart, day, '미학습 파트 데이터 확보'));
                } else {
                    // 취약 태그 드릴: Day 1~4를 LC/RC 번갈아 배분
                    const isLCDay = (day % 2 === 1); // 홀수: LC, 짝수: RC
                    const focusPart = isLCDay ? weakestLC : weakestRC;
                    const relevantTags = weakestTags.filter(t => t.part === focusPart);
                    const modeSuffix = '취약 유형 집중 훈련';

                    if (relevantTags.length > 0) {
                        const pickedTag = relevantTags[(day % 2 === 1 ? 0 : 1) % relevantTags.length] || relevantTags[0];
                        curriculum.push(await this.createLogicDrill(userId, studentName, pickedTag, day, modeSuffix));
                    } else {
                        // 태그 없음 (오답 누적 부족) → 과거 전체 기록에서 강제 추출 (Top 1~2)
                        const historicalTags = await this._getHistoricalFallbackTags(userId, focusPart);
                        if (historicalTags.length > 0) {
                            const pickedTag = historicalTags[(day % 2 === 1 ? 0 : 1) % historicalTags.length] || historicalTags[0];
                            curriculum.push(await this.createLogicDrill(userId, studentName, pickedTag, day, modeSuffix + ' (누적 약점)'));
                        } else {
                            // 진짜 아무 기록도 없음 (생초보) → 해당 파트 실전 드릴
                            curriculum.push(await this.createRealModePart(userId, studentName, focusPart, day, '실전 감각 배양 (최초 진단)'));
                        }
                    }
                }
            } else if (day === 5) {
                // [Stage 3: Day 5 — LC 실전 1회분]
                curriculum.push(await this.createRealModePart(userId, studentName, weakestLC, day, '취약 파트 실전 테스트'));
            } else {
                // [Stage 3: Day 6 — RC 실전 1회분]
                curriculum.push(await this.createRealModePart(userId, studentName, weakestRC, day, '취약 파트 실전 테스트'));
            }
        }

        return curriculum;
    },

    async _getHistoricalFallbackTags(userId: string, targetPart: string): Promise<any[]> {
        try {
            const resultsRef = db.collection('Manager_Results');
            const q = resultsRef.where('studentId', '==', userId).where('isArchived', '==', false);
            const snapshot = await q.get();

            const tagStats: Record<string, { incorrect: number; label: string }> = {};

            snapshot.docs.forEach(docSnap => {
                const data = docSnap.data();
                if (data.mode !== 'real' && data.mode !== 'test') return;

                // 파트 매칭 로직 간소화
                let dataPart = '';
                if (data.type === 'part1_test') dataPart = 'p1';
                else if (data.type === 'part2_test') dataPart = 'p2';
                else if (data.type === 'part3_test') dataPart = 'p3';
                else if (data.type === 'part4_test') dataPart = 'p4';
                else if (data.type === 'part5_test') dataPart = 'p5';
                else if (data.type === 'part6_test') dataPart = 'p6';
                else if (data.type === 'part7_test') {
                    dataPart = data.detail?.includes('single') ? 'p7s' : (data.detail?.includes('double') ? 'p7d' : 'p7f');
                }

                if (dataPart !== targetPart || !data.incorrectQuestions) return;

                const isPart3or4 = dataPart === 'p3' || dataPart === 'p4';

                data.incorrectQuestions.forEach((q: any) => {
                    let tag = 'Unknown';
                    if (isPart3or4) {
                        const cls = q.classification || '';
                        if (cls === 'INFERENCE' || cls === 'GRAPHIC') tag = cls;
                        else tag = q.contextType || 'Unknown';
                    } else if (dataPart === 'p6' || dataPart === 'p7s' || dataPart === 'p7d') {
                        const cType = q.contextType || q.docType;
                        const cls = q.classification;
                        const overrideTags = ['P7_INFERENCE', 'P7_INSERTION', 'P7_NOT_TRUE', 'P7_SYNONYM'];
                        if (overrideTags.includes(cls) || !cType) tag = cls;
                        else tag = cType;
                    } else {
                        tag = q.classification || q.questionType || 'Unknown';
                    }

                    if (tag === 'Unknown') return;

                    if (!tagStats[tag]) tagStats[tag] = { incorrect: 0, label: tag };
                    tagStats[tag].incorrect++;
                });
            });

            // 오답 1개 이상이면 무조건 통과 (임계치 3 조건 해제)
            const sortedTags = Object.entries(tagStats)
                .filter(([_, stat]) => stat.incorrect > 0)
                .sort((a, b) => b[1].incorrect - a[1].incorrect)
                .map(([tag, stat]) => ({
                    tag,
                    label: this._cleanLabel(stat.label) || tag,
                    part: targetPart,
                    incorrectCount: stat.incorrect
                }));

            return sortedTags.slice(0, 2); // Top 2만 반환
        } catch (e) {
            console.error('Historical fallback tag fetch failed:', e);
            return [];
        }
    },

    /**
     * Finds the next unlearned voca day number for the user.
     * "Unlearned" = no word in that day has any wordStatus record for the user.
     */
    async _findNextUnlearnedVocaDay(userId: string): Promise<number> {
        try {
            // Fetch all wordStatus records for user (Admin SDK)
            const statusSnap = await db.collection('wordStatus')
                .where('userId', '==', userId)
                .get();

            if (statusSnap.empty) return 1; // 전혀 학습 기록 없음 → Day 1

            const learnedWordIds = new Set(statusSnap.docs.map(d => d.data().wordId));

            // Fetch all vocabularies, group by day
            const vocaSnap = await db.collection('vocabularies').get();
            if (vocaSnap.empty) return 1;

            // Build map: day → wordIds
            const dayMap: Record<number, string[]> = {};
            vocaSnap.docs.forEach(d => {
                const data = d.data();
                const day = data.day as number;
                if (!dayMap[day]) dayMap[day] = [];
                dayMap[day].push(d.id);
            });

            // Find smallest day where none of the words have been learned
            const sortedDays = Object.keys(dayMap).map(Number).sort((a, b) => a - b);
            for (const day of sortedDays) {
                const wordsInDay = dayMap[day];
                const hasAnyLearned = wordsInDay.some(id => learnedWordIds.has(id));
                if (!hasAnyLearned) return day;
            }

            // All days have some learned words → return last day + 1 (or last day)
            return sortedDays[sortedDays.length - 1] || 1;
        } catch {
            return 1; // Fallback
        }
    },

    _createVocaAssignment(userId: string, studentName: string, dayOffset: number, vocaDay: number) {
        return {
            targetStudentId: userId,
            targetStudentName: studentName,
            type: 'voca_boost',
            title: `[Day ${dayOffset}] 필수 Voca Day ${vocaDay} 학습`,
            description: `600점 도약을 위한 기초 단어 학습입니다. Day ${vocaDay}의 단어를 오늘 마스터하십시오.`,
            homeworkUrl: `/homework/voca/${vocaDay}?mode=learn&returnTo=/student/analysis`,
            isAiGenerated: true,
            status: 'active',
            createdAt: new Date().toISOString(),
            dayOffset
        };
    },

    async createLogicDrill(userId: string, studentName: string, tagInfo: any, dayOffset: number, modeSuffix: string = '') {
        if (!tagInfo) return null;

        const tag = tagInfo.tag || tagInfo.originalTag;
        const label = this._cleanLabel(tagInfo.label);
        let part = tagInfo.part;

        // Part inference fallback
        if (!part) {
            const p2Tags = ['Who', 'When', 'Where', 'Why', 'How', 'What', 'YesNo', 'Choice', 'Statement', 'Tag', 'Negative', 'Indirect'];
            if (tag.startsWith('p1')) part = 'p1';
            else if (p2Tags.includes(tag)) part = 'p2';
            else if (tag.startsWith('p5') || tag.startsWith('voc') || tag.match(/^[nvaipc][1-9]/)) part = 'p5';
            else if (tag.startsWith('p6')) part = 'p6';
            else if (tag.startsWith('P7')) part = 'p7s';
            else part = 'p5';
        }

        const partName = this.getPartName(part);
        const isLC = ['p1', 'p2', 'p3', 'p4'].includes(part);
        const testId = (dayOffset % 10) + 1;

        const baseUrl = this.getPartUrl(part);

        let finalUrl;
        let questionIds: string[] | undefined;

        if (isLC) {
            const targetQuestions = await this._getQuestionsByTag(part, tag);
            if (targetQuestions && targetQuestions.length > 0) {
                finalUrl = `/homework/weakness/{assignmentId}`;
                questionIds = targetQuestions;
            } else {
                // Fallback: 매칭 문제 없음 → 해당 파트 전체 실전 테스트로 연결
                finalUrl = part === 'p2'
                    ? `/homework/part2/${testId}?mode=drill&tag=${tag}&returnTo=/student/analysis`
                    : `/homework/${baseUrl}/test/4/${testId}?mode=drill&tag=${tag}&returnTo=/student/analysis`;
            }
        } else {
            // RC (Part 5, 6 등) — 로컬 데이터에서 태그 매칭 문제 수집
            const targetQuestions = await this._getQuestionsByTag(part, tag);
            if (targetQuestions && targetQuestions.length > 0) {
                finalUrl = `/homework/weakness/{assignmentId}`;
                questionIds = targetQuestions;
            } else {
                // Fallback: 매칭 문제 없음 → ai-drill (Firebase fallback)
                finalUrl = `/homework/part5-real/ai-drill?tag=${tag}&returnTo=/student/analysis`;
            }
        }

        return {
            targetStudentId: userId,
            targetStudentName: studentName,
            type: 'ai_drill',
            title: `[Day ${dayOffset}] [${partName}] ${label} ${modeSuffix}`,
            description: `${label} 유형의 약점을 정밀격파합니다.`,
            targetTag: tag,
            targetLabel: label,
            homeworkUrl: finalUrl,
            questionIds,
            isAiGenerated: true,
            status: 'active',
            createdAt: new Date().toISOString(),
            dayOffset
        };
    },

    async createRealModePart(userId: string, studentName: string, part: string, dayOffset: number, purpose: string = '실전 감각 유지') {
        const testId = (dayOffset % 10) + 1;
        const partName = this.getPartName(part);
        const baseUrl = this.getPartUrl(part);

        let finalUrl;
        if (part === 'p2') {
            finalUrl = `/homework/part2/${testId}?direct=true&mode=real&returnTo=/student/analysis`;
        } else if (part === 'p7s') {
            finalUrl = `/homework/part7/single-passage/4/${testId}?direct=true&mode=real&returnTo=/student/analysis`;
        } else if (part === 'p7d') {
            finalUrl = `/homework/part7/double-passage/4/${testId}?direct=true&mode=real&returnTo=/student/analysis`;
        } else {
            finalUrl = `/homework/${baseUrl}/test/4/${testId}?direct=true&mode=real&returnTo=/student/analysis`;
        }

        return {
            targetStudentId: userId,
            targetStudentName: studentName,
            type: 'real_part',
            title: `[Day ${dayOffset}] [${partName}] ${purpose}`,
            description: `${partName} 전체를 실전처럼 수행하며 실력을 점검합니다.`,
            targetPart: part,
            targetTestId: testId,
            homeworkUrl: finalUrl,
            isAiGenerated: true,
            status: 'active',
            createdAt: new Date().toISOString(),
            dayOffset
        };
    },

    async _getQuestionsByTag(part: string, tag: string): Promise<string[]> {
        const questionIds: string[] = [];
        try {
            if (part === 'p2') {
                // Part 2: questionType 기반 매칭, 개별 문제 수집
                const { part2Data } = await import('@/data/part2');
                for (const qs of Object.values(part2Data as Record<string, any[]>)) {
                    const matched = qs.filter((q: any) => q.questionType === tag).map((q: any) => q.id);
                    questionIds.push(...matched);
                }
            } else if (part === 'p3') {
                // Part 3: 세트 단위 수집 — 한 세트 안의 어느 문제라도 매칭되면 3문제 전부 포함
                // (대화 1개 = 오디오 1개 + 문제 3개)
                const { part3RealTests } = await import('@/data/part3');
                const addedSets = new Set<string>();
                const matchedSets: { setId: string; ids: string[] }[] = [];

                for (const test of part3RealTests) {
                    for (const set of (test as any).questions) {
                        const setKey = set.setId || `${set.testId}-${set.questionRange}`;
                        if (addedSets.has(setKey)) continue;

                        const setMatches =
                            set.contextType === tag ||
                            set.questions.some((q: any) => q.classification === tag);

                        if (setMatches) {
                            matchedSets.push({ setId: setKey, ids: set.questions.map((q: any) => q.id) });
                            addedSets.add(setKey);
                        }
                    }
                }

                // 셔플 후 최대 3세트 (= 최대 9문제)
                const selected = matchedSets.sort(() => 0.5 - Math.random()).slice(0, 3);
                for (const s of selected) questionIds.push(...s.ids);

            } else if (part === 'p4') {
                // Part 4: Part 3과 동일한 세트 단위 수집
                const { part4Data } = await import('@/data/part4');
                const addedSets = new Set<string>();
                const matchedSets: { setId: string; ids: string[] }[] = [];

                for (const test of (part4Data as any[])) {
                    for (const set of test.questions) {
                        const setKey = set.setId || `${set.testId}-${set.questionRange}`;
                        if (addedSets.has(setKey)) continue;

                        const setMatches =
                            set.contextType === tag ||
                            set.questions.some((q: any) => q.classification === tag);

                        if (setMatches) {
                            matchedSets.push({ setId: setKey, ids: set.questions.map((q: any) => q.id) });
                            addedSets.add(setKey);
                        }
                    }
                }

                const selected = matchedSets.sort(() => 0.5 - Math.random()).slice(0, 3);
                for (const s of selected) questionIds.push(...s.ids);

            } else if (part === 'p5' || part === 'p6') {
                // Part 5/6 RC: classification 기반 개별 문제 수집
                const { part5RealTests } = await import('@/data/toeic/reading/part5/tests');
                for (const testSet of part5RealTests) {
                    const matched = testSet.questions
                        .filter((q: any) => q.classification === tag)
                        .map((q: any) => q.id);
                    questionIds.push(...matched);
                }
            } else if (part === 'p7s' || part === 'p7d') {
                // Part 7: 세트 단위 수집 — 문제 유형(classification) 또는 지문 유형(contextType/docType) 매칭
                const { part7TestData } = await import('@/data/toeic/reading/part7/tests');
                const { part7MultiTestData } = await import('@/data/toeic/reading/part7/multi_tests');

                // part7TestData: Part7Test[] (각각 .sets 필드 보유)
                // part7MultiTestData: { test1: PracticeSet[], ... } → 평탁하여 PracticeSet[]
                const multiSets: any[] = Object.values(part7MultiTestData).flat();

                const addedSets = new Set<string>();
                const matchedSets: { setId: string; ids: string[] }[] = [];

                // Single-passage tests (.sets 존재)
                for (const test of part7TestData) {
                    for (const set of (test as any).sets) {
                        if (addedSets.has(set.id)) continue;
                        const setMatches =
                            set.questions.some((q: any) => q.classification === tag) ||
                            set.passages.some((p: any) => p.contextType === tag) ||
                            set.passages.some((p: any) => p.docType === tag);
                        if (setMatches) {
                            matchedSets.push({ setId: set.id, ids: set.questions.map((q: any) => q.id) });
                            addedSets.add(set.id);
                        }
                    }
                }

                // Multi-passage tests (PracticeSet[] 직접)
                for (const set of multiSets) {
                    if (!set || !set.id || addedSets.has(set.id)) continue;
                    const setMatches =
                        set.questions.some((q: any) => q.classification === tag) ||
                        set.passages.some((p: any) => p.contextType === tag) ||
                        set.passages.some((p: any) => p.docType === tag);
                    if (setMatches) {
                        matchedSets.push({ setId: set.id, ids: set.questions.map((q: any) => q.id) });
                        addedSets.add(set.id);
                    }
                }

                // 셔플 후 최대 2세트
                const selected = matchedSets.sort(() => 0.5 - Math.random()).slice(0, 2);
                for (const s of selected) questionIds.push(...s.ids);
            }

            if (questionIds.length > 0) {
                // Part 2/5/6는 셔플 후 최대 10문제 (Part 3/4/7은 이미 위에서 세트 단위 처리)
                if (part === 'p2' || part === 'p5' || part === 'p6') {
                    return questionIds.sort(() => 0.5 - Math.random()).slice(0, 10);
                }
                return questionIds; // Part 3/4/7은 세트 단위로 이미 제한됨
            }
        } catch (error) {
            console.error('Error fetching questions by tag:', error);
        }
        return questionIds;
    },

    getPartName(part: string) {
        const labels: Record<string, string> = {
            p1: 'Part 1', p2: 'Part 2', p3: 'Part 3', p4: 'Part 4',
            p5: 'Part 5', p6: 'Part 6', p7s: 'Part 7(단일)', p7d: 'Part 7(연계)'
        };
        return labels[part] || `Part ${part.replace('p', '')}`;
    },

    _cleanLabel(label: string) {
        if (!label) return '';
        return label.replace(/^[A-Z]\d[.\s\-:]*/i, '').replace(/\(.*?\)/g, '').replace(/\[.*?\]/g, '').trim() || label;
    },

    getPartUrl(part: string) {
        const map: Record<string, string> = {
            p1: 'part1-real', p2: 'part2', p3: 'part3', p4: 'part4',
            p5: 'part5-real', p6: 'part6', p7s: 'part7', p7d: 'part7'
        };
        return map[part] || 'part5-real';
    }
};
