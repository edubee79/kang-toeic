export interface Part1Question {
    id: string;
    image: string;
    audio: string;
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

export interface Part3Question {
    id: string;
    text: string;
    options: {
        A: string;
        B: string;
        C: string;
        D: string;
    };
    correctAnswer: string;
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

export interface Part4Question {
    id: string;
    text: string;
    options: {
        A: string;
        B: string;
        C: string;
        D: string;
    };
    correctAnswer: string;
    classification?: string;
    translation?: string;
    translation_A?: string;
    translation_B?: string;
    translation_C?: string;
    translation_D?: string;
}

export interface Part4Set {
    testId: number;
    vol?: number;
    setId: string;
    questionRange: string;
    audio: string;
    image?: string;
    questions: Part4Question[];
    script?: { speaker: string; text: string }[] | string;
    translation?: string;
    contextType?: string;
}
