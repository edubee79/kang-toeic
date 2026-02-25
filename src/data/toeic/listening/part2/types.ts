export interface Part2Question {
    id: string;
    text: string;
    options: {
        A: string;
        B: string;
        C: string;
    };
    correctAnswer: string;
    questionType?: string;
    translation?: string;
    translation_A?: string;
    translation_B?: string;
    translation_C?: string;
}

export interface Part2TestSet {
    testId: number;
    vol?: number;
    title: string;
    questions: Part2Question[];
}
