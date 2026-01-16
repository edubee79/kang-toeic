
// Universal TOEIC Data Schema

export type TOEIC_Part = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface TOEICOption {
    label: "A" | "B" | "C" | "D";
    text: string;
    isCorrect?: boolean; // Populated from Solution Book
}

export interface TOEICQuestion {
    id: string; // e.g. "q101"
    part: TOEIC_Part;

    // Question Content
    questionText?: string;   // Stem text (Part 5, 3, 4, 7)
    options: TOEICOption[];  // A, B, C, D

    // Media / Context
    imagePath?: string;      // Part 1 Photo or Part 3/4/7 Graphic
    audioPath?: string;      // Web path to MP3

    // Solution Data (merged later)
    correctAnswer?: "A" | "B" | "C" | "D";
    explanation?: string;    // Korean explanation
    translation?: string;    // Korean translation of stem

    // Classification (AI Tagging)
    tags?: {
        type: string;        // e.g. "G_POS" (Part 5), "LC_DETAIL" (Part 3)
    };
}

export interface TOEICSet {
    setId: string;  // e.g. "set_32_34"
    part: TOEIC_Part;

    // Context (Part 3, 4, 6, 7)
    contextType?: "Dialog" | "Speech" | "Text" | "DualPassage";
    contextText?: string;    // Extracted passage text
    contextImage?: string;   // Cropped chart/graph

    questions: TOEICQuestion[];
}

export interface UniversalData {
    sets: TOEICSet[];
    questions: TOEICQuestion[]; // For non-set parts like Part 1, 2, 5
}
