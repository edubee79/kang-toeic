export type PartType = 'Part5' | 'Part6' | 'Part7';

export interface BaseQuestion {
    id?: string;
    unit: string;
    questionNumber: number;
    answer: string; // 'a' | 'b' | 'c' | 'd'
    tags?: string[]; // e.g. ['G_VERB', 'G_VERB_TENSE']
    explanation?: string;
}

// Part 5: Single Sentence Question
export interface Part5Question extends BaseQuestion {
    type: 'Part5';
    question: string; // The sentence with a blank (e.g. "The CEO ______ the office.")
    options: [string, string, string, string]; // [A, B, C, D]
}

// Part 6: Text Completion (Passage-based)
export interface Part6Question extends Omit<BaseQuestion, 'unit'> {
    // Unit is usually derived from the passage
    instruction?: string; // e.g. "Select the best word..."
    options: [string, string, string, string];
}

export interface Part6Passage {
    id?: string;
    type: 'Part6';
    passageId: string; // e.g. "P6_001" (Matches Excel)
    docType: string;   // e.g. "Email", "Letter"
    title?: string;
    content: string;   // The full text with placeholders like [Q131], [Q132]
    questions: Part6Question[];
    createdAt?: any; // Firestore Timestamp
}

// Part 7 will be similar to Part 6 structure
export interface Part7Passage extends Omit<Part6Passage, 'type'> {
    type: 'Part7';
    isMobileFriendly?: boolean; // Flag to allow/block on mobile
}

// User Learning Logs
export interface UserStudyData {
    userId: string;
    part: PartType;
    mode: 'practice' | 'training';
    score?: number;      // For training mode
    timeSpent?: number;  // Seconds
    completedAt: any;    // Firestore Timestamp

    // Detailed logs for analysis
    answers: {
        questionId: string; // or Question Number if unique within set
        isCorrect: boolean;
        userAnswer: string;
        timeSpent: number;  // Seconds spent on this specific question
        tags?: string[];    // Denormalized for easier querying
    }[];
}
