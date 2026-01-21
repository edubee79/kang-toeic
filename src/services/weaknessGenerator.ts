
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

            // 1. Process RC Part 5 (Non P2 IDs)
            const rcWrongIds = wrongIds.filter(id => !id.startsWith('P2_'));
            if (rcWrongIds.length > 0) {
                const originalRC = getQuestionsByIds(rcWrongIds.slice(0, 5)); // Take 5 RC wrongs
                originalRC.forEach(originalQ => {
                    enhancedQuestionIds.push(originalQ.id); // Add original
                    if (originalQ.classification && !processedClassifications.has(originalQ.classification)) {
                        processedClassifications.add(originalQ.classification);
                        const similar = findSimilarQuestions(originalQ.classification, wrongIds, 2);
                        similar.forEach(sq => enhancedQuestionIds.push(sq.id));
                    }
                });
            }

            // 2. Process LC Part 2 (P2_ IDs)
            const lc2WrongIds = wrongIds.filter(id => id.startsWith('P2_'));
            if (lc2WrongIds.length > 0) {
                // For Part 2, we group by classification from the result itself (via studentWeaknessMap)
                const lc2ProcessedTags = new Set<string>();
                lc2WrongIds.slice(0, 5).forEach(id => {
                    enhancedQuestionIds.push(id); // Add original

                    // Look up the classification for this ID from the map we built earlier
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
