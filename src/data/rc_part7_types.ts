export interface PracticePassage {
    id: string;
    contextType: string;
    docType?: string;
    title?: string;
    content: string;
    translation?: string;
}

export interface PracticeQuestion {
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
    explanation?: string;
    translation?: string;
    classification?: string;
}

export interface PracticeSet {
    id: string;
    questionRange?: string;
    setType: "Double" | "Triple";
    passages: PracticePassage[];
    questions: PracticeQuestion[];
}
