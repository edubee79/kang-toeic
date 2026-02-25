export interface Part1Question {
    id: string;
    image: string; // URL or local path
    audio: string; // URL or local path
    questionType: string;
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    options: {
        A: string;
        B: string;
        C: string;
        D: string;
    };
    script?: {
        A: string;
        B: string;
        C: string;
        D: string;
        translation_A?: string;
        translation_B?: string;
        translation_C?: string;
        translation_D?: string;
    };
}

export interface Part1TestSet {
    testId: number;
    vol?: number;
    title: string;
    questions: Part1Question[];
}
