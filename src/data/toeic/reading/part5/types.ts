export interface Part5TestQuestion {
    id: string;
    questionNo?: number;
    text: string;
    options: {
        A: string;
        B: string;
        C: string;
        D: string;
    };
    correctAnswer: string;
    translation?: string;
    explanation?: string;
    classification?: string;
    testId?: number;
    audio?: string;
}

export interface Part5TestSet {
    testId: number;
    title: string;
    questions: Part5TestQuestion[];
}
