export interface Part3Question {
    id: string;
    text: string;
    options: {
        A: string;
        B: string;
        C: string;
        D: string;
    };
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    classification?: string;
    translation?: string;
    translation_A?: string;
    translation_B?: string;
    translation_C?: string;
    translation_D?: string;
}

export interface Part3Set {
    testId: number;
    vol?: number;
    setId: string;
    questionRange: string;
    audio: string;
    image?: string;
    questions: Part3Question[];
    script?: { speaker: string; text: string }[] | string;
    translation?: string;
    contextType?: string;
}
