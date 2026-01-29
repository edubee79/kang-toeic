export interface Part7Question {
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

import { RCPassageGroupTag } from "@/types/toeic-standards";

export interface Part7PassageContent {
    id: string;
    contextType: RCPassageGroupTag;
    docType: "EMAIL" | "LETTER" | "NOTICE" | "ARTICLE" | "MEMO" | "CHART" | "TEXT_MESSAGE" | "FORM" | "BROCHURE" | "INSTRUCTIONS" | "SCHEDULE" | "INVITATION" | "ANNOUNCEMENT" | "ADVERTISEMENT" | "REVIEW" | "INFORMATION" | "CHAT_MESSAGE" | "WEBPAGE" | string;
    label?: string;
    title?: string;
    content: string;
    translation?: string;
}

export interface Part7QuestionSet {
    id: string;
    setType: "Single" | "Double" | "Triple";
    questionRange: string;
    passages: Part7PassageContent[];
    questions: Part7Question[];
}

export interface Part7Test {
    testId: number;
    title: string;
    sets: Part7QuestionSet[];
}
