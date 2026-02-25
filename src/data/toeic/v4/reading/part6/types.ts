
export interface Part6Question {
    id: string;
    questionNo: number;
    text: string;
    options: { [key: string]: string } | string[];
    correctAnswer: string;
    translation?: string;
    explanation?: string;
    classification?: any;
}

export interface Part6Passage {
    setId: string;
    contextType: any;
    docType: string;
    guidance?: string;
    title?: string;
    content: string;
    translation?: string;
    questions: Part6Question[];
}

export interface Part6TestSet {
    testId: number;
    vol?: number;
    title: string;
    passages: Part6Passage[];
}
