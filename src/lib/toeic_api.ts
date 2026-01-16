import { collection, getDocs, query, where, limit, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Part5Question, Part6Passage } from '@/types/toeic';

/**
 * Fetch Part 5 Questions
 * Currently fetches all and shuffles, or limits to a certain number.
 * Ideally, you'd filter by Unit or Randomize properly on server or client.
 */
export async function getPart5Questions(count: number = 30): Promise<Part5Question[]> {
    try {
        const questionsRef = collection(db, 'Part5_Questions');
        // Fetching all for now to randomize client-side since Firestore random is hard without specific ID logic
        // For production with thousands of Qs, we need a better strategy (e.g. random ID cursor)
        const q = query(questionsRef);
        const snapshot = await getDocs(q);

        const allQuestions = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as Part5Question[];

        // Fisher-Yates Shuffle
        for (let i = allQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
        }

        return allQuestions.slice(0, count);
    } catch (error) {
        console.error("Error fetching Part 5 questions:", error);
        return [];
    }
}
