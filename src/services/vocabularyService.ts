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

// Get words by target score
export async function getWordsByTargetScore(targetScore: 650 | 800 | 900): Promise<VocabularyWord[]> {
    const q = query(
        collection(db, 'vocabularies'),
        where('targetScore', '<=', targetScore)
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
// Get words for a specific day
export async function getWordsForDay(userId: string, day: number, targetScore: 650 | 800 | 900): Promise<VocabularyWord[]> {
    // Get words for this day AND target score
    const q = query(
        collection(db, 'vocabularies'),
        where('day', '==', day),
        where('part', '==', 1),
        where('targetScore', '<=', targetScore)
    );

    const snapshot = await getDocs(q);
    const words = snapshot.docs.map(doc => doc.data() as VocabularyWord);

    // Sort in memory
    words.sort((a, b) => {
        if (a.targetScore !== b.targetScore) return a.targetScore - b.targetScore;
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

// Get SRS cards due for review (OPTIMIZED with batch queries)
export async function getDueReviews(userId: string): Promise<VocabularyWord[]> {
    const srsQuery = query(
        collection(db, 'userVocabulary', userId, 'srsCards'),
        where('nextReview', '<=', Timestamp.now())
    );

    const srsSnapshot = await getDocs(srsQuery);
    const wordIds = srsSnapshot.docs.map(doc => doc.id);

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

// Create or update SRS card (SM-2 algorithm)
export async function updateSRSCard(
    userId: string,
    wordId: string,
    correct: boolean
): Promise<void> {
    const srsRef = doc(db, 'userVocabulary', userId, 'srsCards', wordId);
    const srsDoc = await getDoc(srsRef);

    let interval = 1;
    let repetitions = 0;
    let easeFactor = 2.5;

    if (srsDoc.exists()) {
        const data = srsDoc.data();
        interval = data.interval;
        repetitions = data.repetitions;
        easeFactor = data.easeFactor;
    }

    if (correct) {
        if (repetitions === 0) {
            interval = 1;
        } else if (repetitions === 1) {
            interval = 3;
        } else {
            interval = Math.round(interval * easeFactor);
        }
        repetitions += 1;
    } else {
        // Reset on wrong answer
        interval = 1;
        repetitions = 0;
    }

    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + interval);

    await setDoc(srsRef, {
        wordId,
        interval,
        repetitions,
        easeFactor,
        nextReview: Timestamp.fromDate(nextReview),
        lastReviewed: Timestamp.now()
    });
}

// Get user progress stats
export async function getUserProgress(userId: string, targetScore: 650 | 800 | 900) {
    // 1. Total Words (Fast Count)
    const qTotal = query(
        collection(db, 'vocabularies'),
        where('targetScore', '<=', targetScore)
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
