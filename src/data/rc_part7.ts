export interface Part7Question {
    id: string; // "147"
    text: string;
    options: { label: string; text: string }[];
    correctAnswer: string;
    explanation?: string;
    translation?: string;
    classification?: string; // e.g. "P7_DETAIL", "P7_INFERENCE"
}

export interface Part7PassageContent {
    id: string;
    type: "EMAIL" | "LETTER" | "NOTICE" | "ARTICLE" | "MEMO" | "CHART" | "TEXT_MESSAGE" | "FORM";
    label?: string; // e.g., "Passage 1", "E-mail"
    title?: string;
    content: string; // The specific text content
    translation?: string;
}

export interface Part7QuestionSet {
    id: string; // "p7-t1-set1"
    passages: Part7PassageContent[]; // Array to support Single(1), Double(2), Triple(3)
    questions: Part7Question[];
}

export interface Part7Test {
    testId: number;
    title: string;
    sets: Part7QuestionSet[];
}

export const part7TestData: Part7Test[] = [
    {
        testId: 1,
        title: "Test 1 (Sample)",
        sets: [
            // Single Passage: Text Message Chain (147-148)
            {
                id: "p7-t1-set1",
                passages: [
                    {
                        id: "p7-t1-s1-p1",
                        type: "TEXT_MESSAGE",
                        label: "Text Message Chain",
                        content: `
[10:15 AM] Sarah Connor: Hi Mark, are you still in the office? I need to ask you about the Q3 report.
[10:16 AM] Mark Reese: Yes, I'm just finishing up a meeting. What do you need?
[10:17 AM] Sarah Connor: I can't find the updated sales figures for the Asia region. Did you upload them to the shared drive?
[10:20 AM] Mark Reese: Oh, sorry. I was waiting for the final numbers from the Tokyo branch. I just got them an hour ago. I'll upload the file in 10 minutes.
[10:21 AM] Sarah Connor: Thanks! I need to finalize the presentation by noon, so please hurry.
[10:22 AM] Mark Reese: No problem. I'll ping you when it's done.
                        `,
                        translation: "Q3 보고서 관련 데이터 요청 문자 메시지"
                    }
                ],
                questions: [
                    {
                        id: "147",
                        text: "What does Sarah Connor want to do?",
                        options: [
                            { label: "A", text: "Schedule a meeting" },
                            { label: "B", text: "Obtain sales data" },
                            { label: "C", text: "Visit the Tokyo branch" },
                            { label: "D", text: "Fix a computer error" }
                        ],
                        correctAnswer: "B",
                        classification: "P7_PURPOSE",
                        explanation: "Sarah는 'updated sales figures'를 찾고 있다고 말하며 데이터를 요청하고 있습니다.",
                        translation: "Sarah Connor는 무엇을 하고 싶어 하는가?"
                    },
                    {
                        id: "148",
                        text: "At 10:20 AM, what does Mark Reese imply when he says \"I just got them an hour ago\"?",
                        options: [
                            { label: "A", text: "He has not reviewed the data yet." },
                            { label: "B", text: "He forgot to attend a meeting." },
                            { label: "C", text: "He recently received the necessary information." },
                            { label: "D", text: "He arrived at the office an hour late." }
                        ],
                        correctAnswer: "C",
                        classification: "P7_INFERENCE",
                        explanation: "도쿄 지사로부터 최종 수치를 기다리고 있었고, '한 시간 전에 받았다'는 것은 이제 막 필요한 정보를 입수했음을 의미합니다.",
                        translation: "Mark Reese가 '한 시간 전에 막 받았다'고 말할 때 의도하는 바는 무엇인가?"
                    }
                ]
            }
        ]
    }
];
