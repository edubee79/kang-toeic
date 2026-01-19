
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, addDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { getQuestionsByIds, findSimilarQuestions } from '@/data/toeic/reading/part5/tests';

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

            // Get original questions to check classifications
            const originalQuestions = getQuestionsByIds(wrongIds.slice(0, 10)); // Limit to 10 original

            originalQuestions.forEach(originalQ => {
                // Add original question (30% of review)
                enhancedQuestionIds.push(originalQ.id);

                // Find similar questions (70% of review)
                if (originalQ.classification && !processedClassifications.has(originalQ.classification)) {
                    processedClassifications.add(originalQ.classification);

                    const similarQuestions = findSimilarQuestions(
                        originalQ.classification,
                        wrongIds, // Exclude all wrong questions
                        2 // Add 2 similar questions per classification
                    );

                    similarQuestions.forEach(sq => enhancedQuestionIds.push(sq.id));
                }
            });

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
                description: `지난주 오답 ${originalQuestions.length}문항 + 유사 유형 ${selectedIds.length - originalQuestions.length}문항을 복습하세요.`
            });
            createdCount++;
        }

        return { success: true, count: createdCount };

    } catch (error) {
        console.error("Error generating weekly review:", error);
        throw error;
    }
};
