
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, addDoc, serverTimestamp, Timestamp } from 'firebase/firestore';

export const generateWeeklyReview = async (className: string) => {
    try {
        // 1. Calculate Date Range (Last 7 Days)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const timestampThreshold = Timestamp.fromDate(sevenDaysAgo);

        // 2. Query Manager_Results
        const resultsRef = collection(db, "Manager_Results");
        // Note: Composite index might be needed for (className + timestamp)
        // If it fails, we might need to filter client-side or add index link in console
        const q = query(
            resultsRef,
            where("className", "==", className),
            where("timestamp", ">=", timestampThreshold)
        );

        const snapshot = await getDocs(q);

        // 3. Group by Student
        const studentWeaknessMap: Record<string, { name: string, incorrectIds: Set<string> }> = {};

        snapshot.forEach(doc => {
            const data = doc.data();
            const studentId = data.studentId;
            const studentName = data.student;

            if (!studentId) return;

            if (!studentWeaknessMap[studentId]) {
                studentWeaknessMap[studentId] = { name: studentName, incorrectIds: new Set() };
            }

            if (data.incorrectQuestions && Array.isArray(data.incorrectQuestions)) {
                data.incorrectQuestions.forEach((q: { id: string }) => {
                    studentWeaknessMap[studentId].incorrectIds.add(q.id);
                });
            }
        });

        // 4. Generate Assignments
        const assignmentsCollection = collection(db, "Assignments");
        let createdCount = 0;

        for (const [studentId, data] of Object.entries(studentWeaknessMap)) {
            const wrongIds = Array.from(data.incorrectIds);

            if (wrongIds.length === 0) continue;

            // Cap at 30 questions to avoid overwhelming
            const selectedIds = wrongIds.slice(0, 30);

            await addDoc(assignmentsCollection, {
                targetClass: className, // Still associated with class
                targetStudentId: studentId, // Personalized
                targetStudentName: data.name,
                type: 'weakness_review',
                detail: `Weekend Special: Review (${new Date().toLocaleDateString()})`,
                questionIds: selectedIds,
                createdAt: serverTimestamp(),
                status: 'active',
                questionsCount: selectedIds.length,
                description: `지난주 오답 ${selectedIds.length}문항을 복습하세요.`
            });
            createdCount++;
        }

        return { success: true, count: createdCount };

    } catch (error) {
        console.error("Error generating weekly review:", error);
        throw error;
    }
};
