import {
    collection,
    doc,
    getDoc,
    getDocs,
    setDoc,
    updateDoc,
    query,
    where,
    orderBy,
    Timestamp,
    getCountFromServer,
    documentId
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface VocabularyWord {
    id: string;
    word: string;
    meaning: string;
    example: string;
    exampleKo: string;
    targetScore: 650 | 800 | 900;
    difficulty: 'basic' | 'intermediate' | 'advanced';
    day: number;
    part: number;
    no: number;
    theme?: string;
    synonyms?: string[];
    antonyms?: string[];
    similar?: string[];
    // Sinagong Voca enhanced fields
    usageNote?: string;
    collocations?: { en: string; ko: string }[];
    derivatives?: { word: string; pos: string; meaning: string }[];
    grammarPoint?: string;
    pos?: string;
    sinaId?: string;
}

export interface WordStatus {
    userId: string;
    wordId: string;
    status: 'unknown' | 'learning' | 'mastered';
    lastStudied?: Date;
    correctCount: number;
    incorrectCount: number;
}

export interface SRSCard {
    wordId: string;
    interval: number; // days
    repetitions: number;
    easeFactor: number;
    nextReview: Date;
}

// Get all words (targetScore filtering removed to show all 1000 words)
export async function getWordsByTargetScore(_targetScore: 650 | 800 | 900): Promise<VocabularyWord[]> {
    const q = query(
        collection(db, 'vocabularies')
    );

    const snapshot = await getDocs(q);
    const words = snapshot.docs.map(doc => doc.data() as VocabularyWord);

    // Sort in memory
    words.sort((a, b) => {
        if (a.day !== b.day) return a.day - b.day;
        if (a.part !== b.part) return a.part - b.part;
        return a.no - b.no;
    });

    return words;
}

// Get user's target score
export async function getUserTargetScore(userId: string): Promise<number | null> {
    const userDoc = await getDoc(doc(db, 'users', userId));
    return userDoc.data()?.targetScore || null;
}

// Set user's target score
export async function setUserTargetScore(userId: string, targetScore: 650 | 800 | 900): Promise<void> {
    await setDoc(doc(db, 'users', userId), {
        targetScore,
        updatedAt: Timestamp.now()
    }, { merge: true });
}

// Get word status for user
export async function getWordStatus(userId: string, wordId: string): Promise<WordStatus | null> {
    const statusDoc = await getDoc(doc(db, 'wordStatus', `${userId}_${wordId}`));
    if (!statusDoc.exists()) return null;

    const data = statusDoc.data();
    return {
        userId,
        wordId,
        status: data.status,
        lastStudied: data.lastStudied?.toDate(),
        correctCount: data.correctCount || 0,
        incorrectCount: data.incorrectCount || 0
    };
}

// Update word status
export async function updateWordStatus(
    userId: string,
    wordId: string,
    status: 'unknown' | 'learning' | 'mastered',
    correct?: boolean
): Promise<void> {
    const statusId = `${userId}_${wordId}`;
    const statusRef = doc(db, 'wordStatus', statusId);

    const existing = await getDoc(statusRef);
    const data = existing.data() || { correctCount: 0, incorrectCount: 0 };

    await setDoc(statusRef, {
        userId,
        wordId,
        status,
        lastStudied: Timestamp.now(),
        correctCount: correct === true ? (data.correctCount + 1) : data.correctCount,
        incorrectCount: correct === false ? (data.incorrectCount + 1) : data.incorrectCount,
        updatedAt: Timestamp.now()
    }, { merge: true });
}

// Get words for sorting (new words user hasn't seen)
export async function getWordsForSorting(userId: string, targetScore: 650 | 800 | 900, limit: number = 40): Promise<VocabularyWord[]> {
    // Get all words for target score
    const allWords = await getWordsByTargetScore(targetScore);

    // Get user's word statuses
    const statusQuery = query(
        collection(db, 'wordStatus'),
        where('userId', '==', userId)
    );
    const statusSnapshot = await getDocs(statusQuery);
    const seenWordIds = new Set(statusSnapshot.docs.map(doc => doc.data().wordId));

    // Filter unseen words
    const unseenWords = allWords.filter(word => !seenWordIds.has(word.id));

    return unseenWords.slice(0, limit);
}

// Get words for a specific day
export async function getWordsForDay(userId: string, day: number, _targetScore: 650 | 800 | 900): Promise<VocabularyWord[]> {
    // Get ALL words for this day, regardless of target score
    const q = query(
        collection(db, 'vocabularies'),
        where('day', '==', day)
    );

    const snapshot = await getDocs(q);
    const words = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    } as VocabularyWord));

    // Sort by part and then by number (standard Sinagong order)
    words.sort((a, b) => {
        if (a.part !== b.part) return a.part - b.part;
        return a.no - b.no;
    });

    return words;
}

// Get words for learning (marked as "don't know") - OPTIMIZED
export async function getWordsForLearning(userId: string): Promise<VocabularyWord[]> {
    const statusQuery = query(
        collection(db, 'wordStatus'),
        where('userId', '==', userId),
        where('status', '==', 'learning')
    );

    const statusSnapshot = await getDocs(statusQuery);
    const wordIds = statusSnapshot.docs.map(doc => doc.data().wordId);

    if (wordIds.length === 0) return [];

    // Batch fetch in chunks of 30 (Firestore 'in' operator limit)
    const words: VocabularyWord[] = [];
    const chunkSize = 30;

    for (let i = 0; i < wordIds.length; i += chunkSize) {
        const chunk = wordIds.slice(i, i + chunkSize);
        const wordsQuery = query(
            collection(db, 'vocabularies'),
            where(documentId(), 'in', chunk)
        );

        const wordsSnapshot = await getDocs(wordsQuery);
        words.push(...wordsSnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        } as VocabularyWord)));
    }

    return words;
}

// Get SRS cards due for review (3-hit prioritized logic)
export async function getDueReviews(userId: string, limit: number = 40): Promise<VocabularyWord[]> {
    // 1. Get due SRS cards
    const srsQuery = query(
        collection(db, 'userVocabulary', userId, 'srsCards'),
        where('nextReview', '<=', Timestamp.now())
    );

    const srsSnapshot = await getDocs(srsQuery);
    if (srsSnapshot.empty) return [];

    // 2. Fetch word statuses for prioritized sorting (incorrectCount)
    const statusQuery = query(
        collection(db, 'wordStatus'),
        where('userId', '==', userId)
    );
    const statusSnapshot = await getDocs(statusQuery);
    const statusMap = new Map();
    statusSnapshot.docs.forEach(doc => {
        statusMap.set(doc.data().wordId, doc.data().incorrectCount || 0);
    });

    // 3. Sort due cards: high incorrectCount first
    const sortedCardIds = srsSnapshot.docs
        .map(doc => ({ id: doc.id, incorrectCount: statusMap.get(doc.id) || 0 }))
        .sort((a, b) => b.incorrectCount - a.incorrectCount)
        .slice(0, limit)
        .map(c => c.id);

    if (sortedCardIds.length === 0) return [];

    // 4. Batch fetch vocabulary data
    const words: VocabularyWord[] = [];
    const chunkSize = 30;

    for (let i = 0; i < sortedCardIds.length; i += chunkSize) {
        const chunk = sortedCardIds.slice(i, i + chunkSize);
        const wordsQuery = query(
            collection(db, 'vocabularies'),
            where(documentId(), 'in', chunk)
        );

        const wordsSnapshot = await getDocs(wordsQuery);
        words.push(...wordsSnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        } as VocabularyWord)));
    }

    return words;
}

// Create or update SRS card (3-hit graduation logic)
export async function updateSRSCard(
    userId: string,
    wordId: string,
    correct: boolean
): Promise<void> {
    const srsRef = doc(db, 'userVocabulary', userId, 'srsCards', wordId);
    const srsDoc = await getDoc(srsRef);

    let interval = 1;      // days until next review
    let repetitions = 0;   // consecutive correct count (hits)

    if (srsDoc.exists()) {
        const data = srsDoc.data();
        interval = data.interval || 1;
        repetitions = data.repetitions || 0;
    }

    if (correct) {
        repetitions += 1;
        if (repetitions === 1) {
            interval = 1; // 1st hit -> 1 day
        } else if (repetitions === 2) {
            interval = 3; // 2nd hit -> 3 days
        } else if (repetitions >= 3) {
            // 3rd hit -> Graduate (Mastered)
            await updateWordStatus(userId, wordId, 'mastered', true);
            // Optionally remove from SRS cards to keep it clean
            // For now, just set nextReview very far or handle in fetching
            // Preferred way: Mark word status as mastered and exclude from due reviews
            // But getDueReviews currently only checks nextReview.
            // Let's set nextReview to 10 years and reps to 3
            const horizon = new Date();
            horizon.setFullYear(horizon.getFullYear() + 10);
            await setDoc(srsRef, {
                wordId,
                interval: 3650,
                repetitions: 3,
                nextReview: Timestamp.fromDate(horizon),
                lastReviewed: Timestamp.now()
            }, { merge: true });
            return;
        }
    } else {
        // Reset on wrong answer (Retry tomorrow)
        interval = 1;
        repetitions = 0;
    }

    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + interval);

    await setDoc(srsRef, {
        wordId,
        interval,
        repetitions,
        nextReview: Timestamp.fromDate(nextReview),
        lastReviewed: Timestamp.now()
    }, { merge: true });
}

// Get user progress stats
export async function getUserProgress(userId: string, _targetScore: 650 | 800 | 900) {
    // 1. Total Words (Show all 1000 words regardless of user score)
    const qTotal = query(
        collection(db, 'vocabularies')
    );
    const snapTotal = await getCountFromServer(qTotal);
    const totalWords = snapTotal.data().count;

    // 2. Learning Words (Fast Count)
    const qLearning = query(
        collection(db, 'wordStatus'),
        where('userId', '==', userId),
        where('status', '==', 'learning')
    );
    const snapLearning = await getCountFromServer(qLearning);
    const learning = snapLearning.data().count;

    // 3. Mastered Words (Fast Count)
    const qMastered = query(
        collection(db, 'wordStatus'),
        where('userId', '==', userId),
        where('status', '==', 'mastered')
    );
    const snapMastered = await getCountFromServer(qMastered);
    const mastered = snapMastered.data().count;

    // Ensure unknown isn't negative
    const unknown = Math.max(0, totalWords - learning - mastered);

    return {
        totalWords,
        unknown,
        learning,
        mastered,
        progress: totalWords > 0 ? Math.round((mastered / totalWords) * 100) : 0
    };
}
