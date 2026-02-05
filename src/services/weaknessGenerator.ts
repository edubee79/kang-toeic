
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, addDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { getQuestionsByIds, findSimilarQuestions } from '@/data/toeic/reading/part5/tests';
import { findSimilarPart2Questions } from '@/data/part2';

export const generateWeeklyReview = async (className: string) => {
    try {
        // 1. Calculate Date Range (Last 7 Days)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const timestampThreshold = Timestamp.fromDate(sevenDaysAgo);

        // 2. Query Manager_Results
        const resultsRef = collection(db, "Manager_Results");
        const q = query(
            resultsRef,
            where("className", "==", className),
            where("timestamp", ">=", timestampThreshold)
        );

        const snapshot = await getDocs(q);

        // 3. Group by Student
        const studentWeaknessMap: Record<string, {
            name: string,
            incorrectIds: Set<string>,
            incorrectByClassification: Map<string, string[]>
        }> = {};

        snapshot.forEach(doc => {
            const data = doc.data();
            const studentId = data.studentId;
            const studentName = data.student;

            if (!studentId) return;

            if (!studentWeaknessMap[studentId]) {
                studentWeaknessMap[studentId] = {
                    name: studentName,
                    incorrectIds: new Set(),
                    incorrectByClassification: new Map()
                };
            }

            if (data.incorrectQuestions && Array.isArray(data.incorrectQuestions)) {
                data.incorrectQuestions.forEach((q: { id: string, classification?: string }) => {
                    studentWeaknessMap[studentId].incorrectIds.add(q.id);

                    // Group by classification for similar question lookup
                    if (q.classification) {
                        const existing = studentWeaknessMap[studentId].incorrectByClassification.get(q.classification) || [];
                        existing.push(q.id);
                        studentWeaknessMap[studentId].incorrectByClassification.set(q.classification, existing);
                    }
                });
            }
        });

        // 4. Generate Assignments with Similar Questions
        const assignmentsCollection = collection(db, "Assignments");
        let createdCount = 0;

        for (const [studentId, data] of Object.entries(studentWeaknessMap)) {
            const wrongIds = Array.from(data.incorrectIds);

            if (wrongIds.length === 0) continue;

            // Build enhanced question set: original + similar questions
            const enhancedQuestionIds: string[] = [];
            const processedClassifications = new Set<string>();

            // 1. Process LC Part 2 (P2_ IDs)
            const lc2WrongIds = wrongIds.filter(id => id.toUpperCase().startsWith('P2_') || id.toLowerCase().startsWith('p2-'));
            if (lc2WrongIds.length > 0) {
                const lc2ProcessedTags = new Set<string>();
                lc2WrongIds.slice(0, 5).forEach(id => {
                    enhancedQuestionIds.push(id);

                    let foundTag = "";
                    for (const [tag, ids] of data.incorrectByClassification.entries()) {
                        if (ids.includes(id)) {
                            foundTag = tag;
                            break;
                        }
                    }

                    if (foundTag && !lc2ProcessedTags.has(foundTag)) {
                        lc2ProcessedTags.add(foundTag);
                        const similarL2 = findSimilarPart2Questions(foundTag, wrongIds, 2);
                        similarL2.forEach(sid => enhancedQuestionIds.push(sid));
                    }
                });
            }

            // 2. Process LC Part 3 & 4 (Include original wrong ones)
            const otherLcWrongIds = wrongIds.filter(id => {
                const upper = id.toUpperCase();
                return upper.startsWith('P3_') || upper.startsWith('P3-') ||
                    upper.startsWith('P4_') || upper.startsWith('P4-');
            });
            otherLcWrongIds.forEach(id => enhancedQuestionIds.push(id));

            // 3. Process RC Part 5 (Remaining)
            const rcWrongIds = wrongIds.filter(id => {
                const upper = id.toUpperCase();
                return !upper.startsWith('P2_') && !upper.startsWith('P3_') && !upper.startsWith('P4_') &&
                    !id.toLowerCase().startsWith('p2-') && !id.toLowerCase().startsWith('p3-') && !id.toLowerCase().startsWith('p4-');
            });

            if (rcWrongIds.length > 0) {
                const originalRC = getQuestionsByIds(rcWrongIds.slice(0, 5));
                originalRC.forEach(originalQ => {
                    enhancedQuestionIds.push(originalQ.id);
                    if (originalQ.classification && !processedClassifications.has(originalQ.classification)) {
                        processedClassifications.add(originalQ.classification);
                        const similar = findSimilarQuestions(originalQ.classification, wrongIds, 2);
                        similar.forEach(sq => enhancedQuestionIds.push(sq.id));
                    }
                });
            }

            // Cap at 30 questions total
            const selectedIds = enhancedQuestionIds.slice(0, 30);

            await addDoc(assignmentsCollection, {
                targetClass: className,
                targetStudentId: studentId,
                targetStudentName: data.name,
                type: 'weakness_review',
                detail: `주간 복습: 오답 + 유사 문제 (${new Date().toLocaleDateString()})`,
                questionIds: selectedIds,
                originalWrongIds: wrongIds.slice(0, 10), // Track original wrong answers
                createdAt: serverTimestamp(),
                status: 'active',
                questionsCount: selectedIds.length,
                description: `지난주 오답(LC/RC) ${wrongIds.slice(0, 10).length}문항 + 유사 유형을 포함한 총 ${selectedIds.length}문항 복습 과제입니다.`
            });
            createdCount++;
        }

        return { success: true, count: createdCount };

    } catch (error) {
        console.error("Error generating weekly review:", error);
        throw error;
    }
};
