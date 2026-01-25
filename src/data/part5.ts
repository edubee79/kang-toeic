import { RCP5Tag } from '@/types/toeic-standards';

export interface Question {
    id: string;
    question_no: number;
    question: string;
    options: { [key: string]: string };
    answer: string;
    classification?: RCP5Tag;
    explanation?: string;
}

export const part5Data: { [key: string]: Question[] } = {
    "Unit_00_Structure": [
        {
            "id": "Unit_00_Structure_1", "question_no": 1,
            "question": "The sudden _______ in the cost of raw materials has forced the company to revise its annual budget.",
            "options": {
                "b": "increasingly",
                "d": "increaseable",
                "c": "increased",
                "a": "increase"
            },
            "answer": "a",
            "classification": "n1",
            "explanation": "[해설] 정관사(The)와 형용사(sudden)의 수식을 받는 '주어' 자리이므로 명사 increase가 정답입니다."
        },
        {
            "id": "Unit_00_Structure_2", "question_no": 2,
            "question": "Regular maintenance of the manufacturing equipment _______ the likelihood of unexpected production delays.",
            "options": {
                "c": "reducedly",
                "d": "reducing",
                "a": "reduction",
                "b": "reduces"
            },
            "answer": "b",
            "classification": "v1",
            "explanation": "[해설] 주어(Regular maintenance)에 대응하는 '동사' 자리입니다. 문맥상 일반적인 사실을 나타내므로 현재형 단수 동사 reduces가 적절합니다."
        },
        {
            "id": "Unit_00_Structure_3", "question_no": 3,
            "question": "The board of directors found the proposed expansion plan _______ and decided to grant full approval.",
            "options": {
                "d": "persuasively",
                "c": "persuasive",
                "b": "persuasion",
                "a": "persuade"
            },
            "answer": "c",
            "classification": "a2",
            "explanation": "[해설] 5형식 동사 found + 목적어 + '목적격 보어' 자리입니다. 목적어인 plan을 설명하는 형용사 persuasive(설득력 있는)가 정답입니다."
        },
        {
            "id": "Unit_00_Structure_4", "question_no": 4,
            "question": "Frequent _______ between the marketing and sales departments is essential for achieving revenue targets.",
            "options": {
                "c": "collaborative",
                "b": "collaboration",
                "d": "collaboratively",
                "a": "collaborate"
            },
            "answer": "b",
            "classification": "n1",
            "explanation": "[해설] 형용사 Frequent의 수식을 받는 주어(명사) 자리입니다."
        },
        {
            "id": "Unit_00_Structure_5", "question_no": 5,
            "question": "The revised safety manual _______ explains the procedures for handling hazardous chemicals.",
            "options": {
                "d": "clearing",
                "c": "clearly",
                "a": "clear",
                "b": "clarity"
            },
            "answer": "c",
            "classification": "av1",
            "explanation": "[해설] 동사 explains를 수식하는 '부사' 자리입니다."
        },
        {
            "id": "Unit_00_Structure_6", "question_no": 6,
            "question": "The newly appointed CEO _______ to improve the company's environmental sustainability record.",
            "options": {
                "c": "aiming",
                "d": "aimedly",
                "b": "aims",
                "a": "aim"
            },
            "answer": "b",
            "classification": "v1",
            "explanation": "[해설] 주어(The newly appointed CEO)가 단수이므로 수 일치에 따라 단수 동사 aims가 정답입니다."
        },
        {
            "id": "Unit_00_Structure_7", "question_no": 7,
            "question": "The financial advisor provided a detailed _______ of the risks associated with the new investment fund.",
            "options": {
                "a": "analyze",
                "c": "analytic",
                "d": "analyzing",
                "b": "analysis"
            },
            "answer": "b",
            "classification": "n1",
            "explanation": "[해설] 타동사(provided)의 '목적어' 자리이며 형용사 detailed의 수식을 받는 명사 analysis가 정답입니다."
        },
        {
            "id": "Unit_00_Structure_8", "question_no": 8,
            "question": "Applicants must possess _______ communication skills to be considered for the public relations position.",
            "options": {
                "d": "except",
                "c": "exceptionally",
                "a": "exception",
                "b": "exceptional"
            },
            "answer": "b",
            "classification": "a1",
            "explanation": "[해설] 명사(communication skills)를 수식하는 '형용사' 자리입니다."
        },
        {
            "id": "Unit_00_Structure_9", "question_no": 9,
            "question": "The legal department _______ that all contracts be reviewed by an external counsel before signing.",
            "options": {
                "d": "requiredly",
                "b": "requires",
                "c": "requiring",
                "a": "requirement"
            },
            "answer": "b",
            "classification": "v1",
            "explanation": "[해설] 문장의 본동사 자리입니다. 주어가 3인칭 단수(department)이므로 requires가 적절합니다."
        },
        {
            "id": "Unit_00_Structure_10", "question_no": 10,
            "question": "Technological advancements have made it _______ for employees to collaborate from remote locations.",
            "options": {
                "b": "possible",
                "d": "possession",
                "a": "possibility",
                "c": "possibly"
            },
            "answer": "b",
            "classification": "a2",
            "explanation": "[해설] 5형식 가목적어(it) 진목적어(to collaborate...) 구문에서 목적격 보어 자리이므로 형용사 possible이 정답입니다."
        },
        {
            "id": "Unit_00_Structure_11", "question_no": 11,
            "question": "Sales representatives are expected to interact _______ with potential clients at the trade show.",
            "options": {
                "a": "professional",
                "c": "professionally",
                "b": "profession",
                "d": "professionalism"
            },
            "answer": "c",
            "classification": "av1",
            "explanation": "[해설] 자동사 interact를 수식하는 부사 자리입니다."
        },
        {
            "id": "Unit_00_Structure_12", "question_no": 12,
            "question": "A high level of _______ is required for anyone wishing to join the research and development team.",
            "options": {
                "a": "creative",
                "c": "creativity",
                "b": "creatively",
                "d": "create"
            },
            "answer": "c",
            "classification": "n1",
            "explanation": "[해설] 전치사 of의 목적어인 명사 자리입니다."
        },
        {
            "id": "Unit_00_Structure_13", "question_no": 13,
            "question": "The company's _______ strategy focuses on expanding its presence in the emerging Asian markets.",
            "options": {
                "b": "currently",
                "a": "current",
                "d": "currentness",
                "c": "currency"
            },
            "answer": "a",
            "classification": "a1",
            "explanation": "[해설] 명사 strategy를 수식하는 형용사 자리입니다."
        },
        {
            "id": "Unit_00_Structure_14", "question_no": 14,
            "question": "The auditor found that the financial statements _______ accurate in all material respects.",
            "options": {
                "a": "was",
                "b": "were",
                "d": "to be",
                "c": "being"
            },
            "answer": "b",
            "classification": "v1",
            "explanation": "[해설] 접속사 that절 내의 동사 자리입니다. 주어(statements)가 복수이므로 were가 정답입니다."
        },
        {
            "id": "Unit_00_Structure_15", "question_no": 15,
            "question": "Strong _______ in the local community has helped the store maintain its customer base.",
            "options": {
                "a": "presence",
                "c": "presently",
                "b": "present",
                "d": "presentational"
            },
            "answer": "a",
            "classification": "n1",
            "explanation": "[해설] 주어 자리이며 형용사 Strong의 수식을 받는 명사 presence(존재감/영향력)가 적절합니다."
        },
        {
            "id": "Unit_00_Structure_16", "question_no": 16,
            "question": "The software was _______ designed to be user-friendly for people with limited technical skills.",
            "options": {
                "d": "specify",
                "c": "specification",
                "b": "specifically",
                "a": "specific"
            },
            "answer": "b",
            "classification": "av1",
            "explanation": "[해설] 과거분사(designed)를 수식하는 부사 자리입니다."
        },
        {
            "id": "Unit_00_Structure_17", "question_no": 17,
            "question": "Keep the confidential documents _______ in a secure cabinet at all times.",
            "options": {
                "c": "stored",
                "b": "storage",
                "a": "store",
                "d": "storingly"
            },
            "answer": "c",
            "classification": "a2",
            "explanation": "[해설] 5형식 동사 Keep + 목적어 + 목적격 보어 자리입니다. 문서가 '보관되는' 것이므로 과거분사 형용사 stored가 정답입니다."
        },
        {
            "id": "Unit_00_Structure_18", "question_no": 18,
            "question": "The price of the luxury sedan _______ significantly depending on the optional features selected.",
            "options": {
                "b": "varies",
                "a": "vary",
                "c": "variation",
                "d": "various"
            },
            "answer": "b",
            "classification": "v1",
            "explanation": "[해설] 주어(The price)에 대응하는 동사 자리입니다. 주어가 단수이므로 단수 동사 varies가 정답입니다."
        },
        {
            "id": "Unit_00_Structure_19", "question_no": 19,
            "question": "The marketing director believes that a _______ campaign will boost brand awareness among young adults.",
            "options": {
                "d": "persuasively",
                "c": "persuasive",
                "a": "persuade",
                "b": "persuasion"
            },
            "answer": "c",
            "classification": "a1",
            "explanation": "[해설] 명사 campaign을 수식하는 형용사 자리입니다."
        },
        {
            "id": "Unit_00_Structure_20", "question_no": 20,
            "question": "The _______ of the new production line has been postponed until the next fiscal year.",
            "options": {
                "c": "implemented",
                "a": "implement",
                "d": "implementing",
                "b": "implementation"
            },
            "answer": "b",
            "classification": "n1",
            "explanation": "[해설] 정관사(The)의 수식을 받는 문장의 주어(명사) 자리입니다."
        }
    ],
    "Unit_01_Noun": [
        {
            "id": "Unit_01_Noun_1", "question_no": 1,
            "question": "The board of directors is expected to reach a final _______ by the end of the day.",
            "options": {
                "d": "decisive",
                "a": "decide",
                "b": "decisively",
                "c": "decision"
            },
            "answer": "c",
            "classification": "n1",
            "explanation": "[해석] 이사회는 오늘 말까지 최종 결정을 내릴 것으로 예상됩니다. [해설] 관사(a)와 형용사(final)의 수식을 받는 명사 decision이 정답입니다."
        },
        {
            "id": "Unit_01_Noun_2", "question_no": 2,
            "question": "The recent _______ in oil prices has affected the transportation industry significantly.",
            "options": {
                "a": "fluctuate",
                "c": "fluctuating",
                "d": "fluctuated",
                "b": "fluctuation"
            },
            "answer": "b",
            "classification": "n1",
            "explanation": "[해석] 최근의 유가 변동은 운송 산업에 상당한 영향을 미쳤습니다. [해설] 형용사 recent 뒤에서 주어 역할을 하는 명사 fluctuation이 정답입니다."
        },
        {
            "id": "Unit_01_Noun_3", "question_no": 3,
            "question": "_______ applicant who meets the qualifications will be invited for an interview.",
            "options": {
                "b": "Every",
                "a": "All",
                "c": "Several",
                "d": "Many"
            },
            "answer": "b",
            "classification": "n2",
            "explanation": "[해석] 자격 요건을 갖춘 모든 지원자는 면접에 초대될 것입니다. [해설] 단수 가산명사(applicant)를 수식하는 수량 형용사 Every가 정답입니다."
        },
        {
            "id": "Unit_01_Noun_4", "question_no": 4,
            "question": "The manager has received _______ complaints regarding the new office layout.",
            "options": {
                "d": "anybody",
                "b": "numerous",
                "c": "each",
                "a": "much"
            },
            "answer": "b",
            "classification": "a4",
            "explanation": "[해석] 매니저는 새로운 사무실 배치에 관한 수많은 불만을 접수했습니다. [해설] 복수 가산명사(complaints)를 수식하는 형용사 numerous가 정답입니다."
        },
        {
            "id": "Unit_01_Noun_5", "question_no": 5,
            "question": "Please submit your travel expense _______ to the accounting department by Friday.",
            "options": {
                "c": "reportedly",
                "b": "reported",
                "d": "reporting",
                "a": "reports"
            },
            "answer": "a",
            "classification": "n3",
            "explanation": "[해석] 금요일까지 여행 경비 보고서를 회계 부서에 제출해 주십시오. [해설] travel expense와 어울려 '경비 보고서'라는 의미를 만드는 복합명사 reports가 정답입니다."
        },
        {
            "id": "Unit_01_Noun_6", "question_no": 6,
            "question": "We are seeking a highly motivated _______ to lead our sales team in Europe.",
            "options": {
                "a": "professional",
                "d": "professionally",
                "b": "profession",
                "c": "professionalism"
            },
            "answer": "a",
            "classification": "n4",
            "explanation": "[해석] 우리는 유럽 영업팀을 이끌 매우 의욕적인 전문가를 찾고 있습니다. [해설] 문맥상 팀을 이끌 '사람' 명사 professional(전문가)이 정답입니다."
        },
        {
            "id": "Unit_01_Noun_7", "question_no": 7,
            "question": "The unexpected _______ of the flight caused a major inconvenience for the passengers.",
            "options": {
                "b": "cancelled",
                "d": "cancelling",
                "c": "cancellation",
                "a": "cancel"
            },
            "answer": "c",
            "classification": "n1",
            "explanation": "[해석] 예기치 못한 비행 취소는 승객들에게 큰 불편을 초래했습니다. [해설] 관사(The)와 형용사(unexpected)의 수식을 받는 명사 cancellation이 정답입니다."
        },
        {
            "id": "Unit_01_Noun_8", "question_no": 8,
            "question": "The library offers _______ resources for students conducting historical research.",
            "options": {
                "b": "each",
                "c": "various",
                "d": "one",
                "a": "a little"
            },
            "answer": "c",
            "classification": "a4",
            "explanation": "[해석] 도서관은 역사 연구를 수행하는 학생들을 위해 다양한 자료를 제공합니다. [해설] 복수 명사 resources를 수식하는 형용사 various가 적절합니다."
        },
        {
            "id": "Unit_01_Noun_9", "question_no": 9,
            "question": "The company’s _______ department is located on the third floor of the main building.",
            "options": {
                "b": "personal",
                "c": "personnel",
                "a": "person",
                "d": "personify"
            },
            "answer": "c",
            "classification": "n3",
            "explanation": "[해석] 회사의 인사과는 본관 3층에 위치해 있습니다. [해설] personnel department(인사과)는 자주 쓰이는 복합명사입니다."
        },
        {
            "id": "Unit_01_Noun_10", "question_no": 10,
            "question": "The lead _______ of the research project will present the findings at the seminar.",
            "options": {
                "b": "analyst",
                "c": "analyze",
                "a": "analysis",
                "d": "analytical"
            },
            "answer": "b",
            "classification": "n4",
            "explanation": "[해석] 연구 프로젝트의 수석 분석가는 세미나에서 결과를 발표할 것입니다. [해설] 발표를 수행하는 주체인 '사람' 명사 analyst가 정답입니다."
        },
        {
            "id": "Unit_01_Noun_11", "question_no": 11,
            "question": "The hotel provides free _______ to and from the airport for all its guests.",
            "options": {
                "a": "transport",
                "d": "transported",
                "b": "transportation",
                "c": "transporting"
            },
            "answer": "b",
            "classification": "n1",
            "explanation": "[해석] 호텔은 모든 투숙객에게 공항 왕복 무료 교통편을 제공합니다. [해설] 형용사 free의 수식을 받는 명사 자리로 transportation이 정답입니다."
        },
        {
            "id": "Unit_01_Noun_12", "question_no": 12,
            "question": "There is _______ evidence to suggest that the new marketing strategy is working.",
            "options": {
                "b": "few",
                "d": "several",
                "c": "ample",
                "a": "many"
            },
            "answer": "c",
            "classification": "a4",
            "explanation": "[해석] 새로운 마케팅 전략이 효과가 있음을 보여주는 충분한 증거가 있습니다. [해설] 불가산 명사 evidence를 수식할 수 있는 ample(충분한)이 정답입니다."
        },
        {
            "id": "Unit_01_Noun_13", "question_no": 13,
            "question": "Strict _______ to the safety regulations is required in the manufacturing area.",
            "options": {
                "a": "adhere",
                "d": "adhering",
                "c": "adherence",
                "b": "adherent"
            },
            "answer": "c",
            "classification": "n1",
            "explanation": "[해석] 제조 구역에서는 안전 규정의 엄격한 준수가 요구됩니다. [해설] 형용사 Strict의 수식을 받는 주어 명사 adherence(준수)가 정답입니다."
        },
        {
            "id": "Unit_01_Noun_14", "question_no": 14,
            "question": "As a regular _______ of our magazine, you are entitled to a special discount.",
            "options": {
                "b": "subscription",
                "d": "subscribing",
                "c": "subscribe",
                "a": "subscriber"
            },
            "answer": "a",
            "classification": "n4",
            "explanation": "[해석] 저희 잡지의 정기 구독자로서 귀하께는 특별 할인이 제공됩니다. [해설] 전치사 As(~로서) 뒤에서 사람을 지칭하는 subscriber가 정답입니다."
        },
        {
            "id": "Unit_01_Noun_15", "question_no": 15,
            "question": "Your _______ to the project has been invaluable to our success.",
            "options": {
                "a": "contribute",
                "b": "contribution",
                "c": "contributory",
                "d": "contributing"
            },
            "answer": "b",
            "classification": "n1",
            "explanation": "[해석] 프로젝트에 대한 귀하의 기여는 저희 성공에 매우 소중했습니다. [해설] 소유격 Your의 수식을 받는 명사 contribution이 정답입니다."
        }
    ],
    "Unit_02_Pronoun": [
        {
            "id": "Unit_02_Pronoun_1", "question_no": 1,
            "question": "The human resources director sent an email to _______ regarding the new holiday policy.",
            "options": {
                "c": "him",
                "a": "he",
                "d": "himself",
                "b": "his"
            },
            "answer": "c",
            "classification": "p1",
            "explanation": "[해석] 인사팀장은 새로운 휴가 정책과 관련하여 그에게 이메일을 보냈습니다. [해설] 전치사 to의 목적어 자리이므로 목적격인 him이 정답입니다."
        },
        {
            "id": "Unit_02_Pronoun_2", "question_no": 2,
            "question": "Ms. Watson accidentally left _______ briefcase in the conference room after the meeting.",
            "options": {
                "d": "herself",
                "a": "she",
                "c": "hers",
                "b": "her"
            },
            "answer": "b",
            "classification": "p1",
            "explanation": "[해석] Watson 씨는 회의가 끝난 후 회의실에 실수로 그녀의 서류 가방을 두고 왔습니다. [해설] 명사 briefcase를 수식하는 소유격 her가 정답입니다."
        },
        {
            "id": "Unit_02_Pronoun_3", "question_no": 3,
            "question": "The responsibility for the project's success is not only mine but also _______.",
            "options": {
                "d": "yourself",
                "c": "you",
                "a": "your",
                "b": "yours"
            },
            "answer": "b",
            "classification": "p1",
            "explanation": "[해석] 프로젝트 성공에 대한 책임은 저뿐만 아니라 당신의 것이기도 합니다. [해설] '당신의 것'이라는 의미로 보어 역할을 하는 소유대명사 yours가 적절합니다."
        },
        {
            "id": "Unit_02_Pronoun_4", "question_no": 4,
            "question": "The production team managed to fix the equipment by _______ before the deadline.",
            "options": {
                "c": "themselves",
                "a": "them",
                "d": "theirs",
                "b": "their"
            },
            "answer": "c",
            "classification": "p4",
            "explanation": "[해석] 생산팀은 마감 시한 전에 스스로 장비를 수리해냈습니다. [해설] 'by oneself'는 '스스로, 혼자서'라는 의미의 관용구로 재귀대명사 themselves가 정답입니다."
        },
        {
            "id": "Unit_02_Pronoun_5", "question_no": 5,
            "question": "Please make _______ at home while you wait for the manager to arrive.",
            "options": {
                "a": "you",
                "d": "yours",
                "b": "your",
                "c": "yourself"
            },
            "answer": "c",
            "classification": "p4",
            "explanation": "[해석] 매니저가 도착하기를 기다리는 동안 편히 계십시오. [해설] 'make oneself at home'은 '편히 쉬다'라는 의미의 재귀대명사 관용 표현입니다."
        },
        {
            "id": "Unit_02_Pronoun_6", "question_no": 6,
            "question": "The specifications of the new model are superior to _______ of the previous one.",
            "options": {
                "a": "that",
                "c": "this",
                "d": "these",
                "b": "those"
            },
            "answer": "b",
            "classification": "p3",
            "explanation": "[해석] 새 모델의 사양은 이전 모델의 사양보다 뛰어납니다. [해설] 복수 명사 specifications를 대신 받는 지시대명사 those가 정답입니다."
        },
        {
            "id": "Unit_02_Pronoun_7", "question_no": 7,
            "question": "The cost of renovating the lobby is higher than _______ of repainting the office.",
            "options": {
                "b": "those",
                "c": "it",
                "d": "one",
                "a": "that"
            },
            "answer": "a",
            "classification": "p3",
            "explanation": "[해석] 로비를 개조하는 비용은 사무실을 다시 칠하는 비용보다 높습니다. [해설] 단수 명사 cost를 대신 받는 지시대명사 that이 정답입니다."
        },
        {
            "id": "Unit_02_Pronoun_8", "question_no": 8,
            "question": "_______ who wish to attend the workshop must sign up by the end of the week.",
            "options": {
                "d": "Whomever",
                "c": "Anyone",
                "a": "They",
                "b": "Those"
            },
            "answer": "b",
            "classification": "p3",
            "explanation": "[해석] 워크숍에 참석하고자 하는 분들은 이번 주말까지 신청해야 합니다. [해설] 'Those who'는 '~하는 사람들'이라는 뜻으로 불특정 다수를 지칭합니다."
        },
        {
            "id": "Unit_02_Pronoun_9", "question_no": 9,
            "question": "One of the candidates has already arrived, but _______ is still on the way.",
            "options": {
                "d": "others",
                "c": "other",
                "b": "the other",
                "a": "another"
            },
            "answer": "b",
            "classification": "p2",
            "explanation": "[해석] 후보자 중 한 명은 이미 도착했지만, 나머지 한 명은 아직 오고 있습니다. [해설] 두 명 중 한 명(One)을 뺀 '나머지 하나'는 the other입니다."
        },
        {
            "id": "Unit_02_Pronoun_10", "question_no": 10,
            "question": "Some members prefer the morning session, while _______ chose the afternoon slot.",
            "options": {
                "d": "the other",
                "c": "others",
                "b": "another",
                "a": "other"
            },
            "answer": "c",
            "classification": "p2",
            "explanation": "[해석] 일부 회원들은 오전 세션을 선호하고, 다른 사람들은 오후 시간대를 선택했습니다. [해설] 'Some... others'는 '일부는... 다른 이들은...'이라는 대조 표현입니다."
        },
        {
            "id": "Unit_02_Pronoun_11", "question_no": 11,
            "question": "We need to find _______ supplier as the current one cannot meet our quality standards.",
            "options": {
                "b": "other",
                "d": "the others",
                "c": "others",
                "a": "another"
            },
            "answer": "a",
            "classification": "p2",
            "explanation": "[해석] 현재 공급업체가 품질 기준을 충족하지 못하므로 다른 업체를 찾아야 합니다. [해설] 막연한 '또 다른 하나'를 의미하는 another가 단수 명사 supplier 앞에 옵니다."
        },
        {
            "id": "Unit_02_Pronoun_12", "question_no": 12,
            "question": "Mr. Choi is looking for a partner to help _______ expand the business into Southeast Asia.",
            "options": {
                "c": "him",
                "d": "himself",
                "b": "his",
                "a": "he"
            },
            "answer": "c",
            "classification": "p1",
            "explanation": "[해석] 최 씨는 동남아시아로 사업을 확장하는 것을 도와줄 파트너를 찾고 있습니다. [해설] help의 목적어 자리이므로 목적격 him이 정답입니다."
        },
        {
            "id": "Unit_02_Pronoun_13", "question_no": 13,
            "question": "The software update will install _______ automatically once the computer restarts.",
            "options": {
                "a": "it",
                "b": "its",
                "d": "it's",
                "c": "itself"
            },
            "answer": "c",
            "classification": "p4",
            "explanation": "[해석] 컴퓨터를 재시작하면 소프트웨어 업데이트가 자동으로 설치될 것입니다. [해설] 주어(update)가 스스로 설치된다는 의미를 강조하는 재귀대명사 itself가 적절합니다."
        },
        {
            "id": "Unit_02_Pronoun_14", "question_no": 14,
            "question": "The two companies are working closely with _______ to develop a new eco-friendly engine.",
            "options": {
                "a": "each other",
                "c": "others",
                "d": "the other",
                "b": "one another"
            },
            "answer": "a",
            "classification": "p2",
            "explanation": "[해석] 두 회사는 새로운 친환경 엔진을 개발하기 위해 서로 긴밀히 협력하고 있습니다. [해설] 둘 사이의 '서로서로'는 each other를 사용합니다."
        },
        {
            "id": "Unit_02_Pronoun_15", "question_no": 15,
            "question": "All employees should keep _______ desks organized and free of clutter.",
            "options": {
                "b": "their",
                "c": "them",
                "d": "theirs",
                "a": "they"
            },
            "answer": "b",
            "classification": "p1",
            "explanation": "[해석] 모든 직원은 자신의 책상을 정돈하고 깨끗하게 유지해야 합니다. [해설] 명사 desks를 수식하는 소유격 their가 정답입니다."
        }
    ],
    "Unit_03_Adjective": [
        {
            "id": "Unit_03_Adjective_1", "question_no": 1,
            "question": "The marketing team needs _______ data before finalizing the annual budget.",
            "options": {
                "b": "reliable",
                "a": "rely",
                "c": "reliably",
                "d": "reliance"
            },
            "answer": "b",
            "classification": "a1",
            "explanation": "[해석] 마케팅 팀은 연간 예산을 확정하기 전에 신뢰할 수 있는 데이터가 필요합니다. [해설] 명사 data를 수식하는 형용사 자리이므로 reliable(신뢰할 수 있는)이 정답입니다."
        },
        {
            "id": "Unit_03_Adjective_2", "question_no": 2,
            "question": "The CEO remains _______ that the new product line will be successful in Asia.",
            "options": {
                "a": "optimist",
                "c": "optimistic",
                "d": "optimistically",
                "b": "optimism"
            },
            "answer": "c",
            "classification": "a2",
            "explanation": "[해석] CEO는 새로운 제품 라인이 아시아에서 성공할 것이라고 여전히 낙관하고 있습니다. [해설] 2형식 자동사 remain의 보어 자리에는 주어의 상태를 설명하는 형용사 optimistic이 정답입니다."
        },
        {
            "id": "Unit_03_Adjective_3", "question_no": 3,
            "question": "Most employees were _______ to hear about the unexpected bonus at the end of the year.",
            "options": {
                "b": "exciting",
                "a": "excite",
                "c": "excited",
                "d": "excitement"
            },
            "answer": "c",
            "classification": "a3",
            "explanation": "[해석] 대부분의 직원들은 연말의 예상치 못한 보너스 소식을 듣고 신이 났습니다. [해설] 사람 주어(employees)가 느끼는 감정을 표현할 때는 과거분사형 형용사인 excited를 사용합니다."
        },
        {
            "id": "Unit_03_Adjective_4", "question_no": 4,
            "question": "The keynote speaker’s presentation on renewable energy was extremely _______.",
            "options": {
                "c": "interesting",
                "b": "interested",
                "d": "interestingly",
                "a": "interest"
            },
            "answer": "c",
            "classification": "a3",
            "explanation": "[해석] 재생 에너지에 관한 기조 연설자의 발표는 매우 흥미로웠습니다. [해설] 사물 주어(presentation)의 특징이나 유발하는 감정을 설명할 때는 현재분사형인 interesting이 적절합니다."
        },
        {
            "id": "Unit_03_Adjective_5", "question_no": 5,
            "question": "Please provide a _______ description of the incident for the insurance claim.",
            "options": {
                "d": "details",
                "a": "detail",
                "c": "detailing",
                "b": "detailed"
            },
            "answer": "b",
            "classification": "a3",
            "explanation": "[해석] 보험 청구를 위해 사건에 대한 상세한 설명을 제공해 주십시오. [해설] '상세한'이라는 의미로 굳어진 분사형 형용사 detailed가 명사를 수식합니다."
        },
        {
            "id": "Unit_03_Adjective_6", "question_no": 6,
            "question": "It is _______ for all participants to sign the non-disclosure agreement.",
            "options": {
                "b": "necessarily",
                "c": "necessitate",
                "d": "necessity",
                "a": "necessary"
            },
            "answer": "a",
            "classification": "a2",
            "explanation": "[해석] 모든 참가자가 기밀 유지 약정서에 서명하는 것이 필수적입니다. [해설] 가주어-진주어 구문(It is ~ to)에서 보어 역할을 하는 형용사 necessary가 정답입니다."
        },
        {
            "id": "Unit_03_Adjective_7", "question_no": 7,
            "question": "The new auditorium is _______ enough to host more than five hundred guests.",
            "options": {
                "c": "spaciously",
                "d": "spacing",
                "a": "space",
                "b": "spacious"
            },
            "answer": "b",
            "classification": "a2",
            "explanation": "[해석] 새 강당은 500명 이상의 손님을 수용할 수 있을 만큼 충분히 넓습니다. [해설] be동사 뒤 보어 자리이며, 부사 enough의 수식을 받는 형용사 spacious(넓은)가 정답입니다."
        },
        {
            "id": "Unit_03_Adjective_8", "question_no": 8,
            "question": "Ms. Rivera is _______ to receive the 'Employee of the Month' award.",
            "options": {
                "d": "ability",
                "a": "eligible",
                "c": "ably",
                "b": "eligibility"
            },
            "answer": "a",
            "classification": "a5",
            "explanation": "[해석] Rivera 씨는 '이달의 사원' 상을 받을 자격이 있습니다. [해설] 'be eligible to-v(~할 자격이 있다)'는 빈출 형용사 관용 표현입니다."
        },
        {
            "id": "Unit_03_Adjective_9", "question_no": 9,
            "question": "We are looking for a candidate with _______ experience in digital marketing.",
            "options": {
                "a": "extend",
                "b": "extensively",
                "d": "extension",
                "c": "extensive"
            },
            "answer": "c",
            "classification": "a1",
            "explanation": "[해석] 우리는 디지털 마케팅 분야에서 폭넓은 경험을 갖춘 후보자를 찾고 있습니다. [해설] 명사 experience를 수식하는 형용사 extensive(폭넓은)가 적절합니다."
        },
        {
            "id": "Unit_03_Adjective_10", "question_no": 10,
            "question": "The manager seems _______ with the progress made on the construction site.",
            "options": {
                "d": "satisfaction",
                "c": "satisfied",
                "b": "satisfying",
                "a": "satisfy"
            },
            "answer": "c",
            "classification": "a3",
            "explanation": "[해석] 매니저는 건설 현장에서 이루어진 진행 상황에 만족해 보입니다. [해설] 사람 주어(manager)의 감정 상태를 나타내므로 과거분사형 형용사 satisfied가 정답입니다."
        },
        {
            "id": "Unit_03_Adjective_11", "question_no": 11,
            "question": "There have been _______ complaints about the noise from the nearby construction.",
            "options": {
                "b": "number",
                "a": "numerous",
                "d": "enumerate",
                "c": "numerically"
            },
            "answer": "a",
            "classification": "a4",
            "explanation": "[해석] 인근 공사 소음에 대한 수많은 불만이 제기되었습니다. [해설] 복수 명사 complaints를 수식하는 형용사 numerous(수많은)가 정답입니다."
        },
        {
            "id": "Unit_03_Adjective_12", "question_no": 12,
            "question": "The software update provides a _______ interface for better user experience.",
            "options": {
                "c": "simplicity",
                "b": "simplified",
                "a": "simplify",
                "d": "simplification"
            },
            "answer": "b",
            "classification": "a3",
            "explanation": "[해석] 소프트웨어 업데이트는 더 나은 사용자 경험을 위해 단순화된 인터페이스를 제공합니다. [해설] 명사 interface를 수식하여 '단순화된' 상태를 나타내는 분사형 형용사 simplified가 정답입니다."
        },
        {
            "id": "Unit_03_Adjective_13", "question_no": 13,
            "question": "The board members remain _______ about the potential risks of the investment.",
            "options": {
                "d": "cautionary",
                "a": "caution",
                "c": "cautiously",
                "b": "cautious"
            },
            "answer": "b",
            "classification": "a2",
            "explanation": "[해석] 이사회 멤버들은 투자에 대한 잠재적 위험에 대해 여전히 조심스러운 태도를 보이고 있습니다. [해설] remain 동사의 보어로 주어의 상태를 설명하는 형용사 cautious가 적절합니다."
        },
        {
            "id": "Unit_03_Adjective_14", "question_no": 14,
            "question": "The information in the brochure is _______ and may lead to confusion.",
            "options": {
                "a": "mislead",
                "b": "misleading",
                "d": "misleadingly",
                "c": "misled"
            },
            "answer": "b",
            "classification": "a3",
            "explanation": "[해석] 브로셔의 정보는 오해의 소지가 있으며 혼란을 야기할 수 있습니다. [해설] 사물 주어(information)의 속성을 설명하는 형용사 misleading(오도하는)이 정답입니다."
        },
        {
            "id": "Unit_03_Adjective_15", "question_no": 15,
            "question": "All _______ applicants will be contacted by the human resources department next week.",
            "options": {
                "d": "successfully",
                "b": "succeed",
                "a": "success",
                "c": "successful"
            },
            "answer": "c",
            "classification": "a1",
            "explanation": "[해석] 모든 합격한 지원자들에게는 다음 주에 인사부에서 연락을 드릴 것입니다. [해설] 명사 applicants를 수식하는 형용사 successful이 정답입니다."
        }
    ],
    "Unit_04_Adverb": [
        {
            "id": "Unit_04_Adverb_1", "question_no": 1,
            "question": "The technician _______ inspected the server room to identify the source of the noise.",
            "options": {
                "b": "carefully",
                "d": "care",
                "c": "carefulness",
                "a": "careful"
            },
            "answer": "b",
            "classification": "av1",
            "explanation": "[해석] 기술자는 소음의 원인을 찾아내기 위해 서버실을 주의 깊게 점검했습니다. [해설] 동사 inspected를 수식하는 부사 자리이므로 carefully가 정답입니다."
        },
        {
            "id": "Unit_04_Adverb_2", "question_no": 2,
            "question": "The newly opened restaurant is _______ located near the shopping district.",
            "options": {
                "c": "convenient",
                "a": "convenience",
                "b": "conveniently",
                "d": "convene"
            },
            "answer": "b",
            "classification": "av1",
            "explanation": "[해석] 새로 문을 연 레스토랑은 쇼핑가 근처에 편리하게 위치해 있습니다. [해설] 분사형 형용사(과거분사) located를 수식하는 부사 conveniently가 적절합니다."
        },
        {
            "id": "Unit_04_Adverb_3", "question_no": 3,
            "question": "The software update process was _______ complex, requiring several hours to complete.",
            "options": {
                "a": "extremely",
                "b": "extreme",
                "c": "extremity",
                "d": "extremes"
            },
            "answer": "a",
            "classification": "av2",
            "explanation": "[해석] 소프트웨어 업데이트 과정은 매우 복잡하여 완료하는 데 몇 시간이 걸렸습니다. [해설] 형용사 complex를 수식하는 강조 부사 extremely가 정답입니다."
        },
        {
            "id": "Unit_04_Adverb_4", "question_no": 4,
            "question": "The marketing team has been working _______ to finish the campaign before the holiday.",
            "options": {
                "b": "hard",
                "d": "hardness",
                "a": "hardly",
                "c": "harder"
            },
            "answer": "b",
            "classification": "av3",
            "explanation": "[해석] 마케팅 팀은 연휴 전에 캠페인을 마치기 위해 열심히 일하고 있습니다. [해설] '열심히'라는 뜻의 부사는 hard입니다. hardly는 '거의 ~않다'는 뜻의 부정 부사이므로 오답입니다."
        },
        {
            "id": "Unit_04_Adverb_5", "question_no": 5,
            "question": "Sales have increased this month; _______, our customer satisfaction rating has improved.",
            "options": {
                "b": "nevertheless",
                "c": "however",
                "d": "otherwise",
                "a": "furthermore"
            },
            "answer": "a",
            "classification": "av3",
            "explanation": "[해석] 이번 달 매출이 증가했습니다. 게다가, 고객 만족도 수치도 개선되었습니다. [해설] 앞뒤 내용이 긍정적인 맥락으로 이어지므로 첨가의 연결 부사 furthermore가 정답입니다."
        },
        {
            "id": "Unit_04_Adverb_6", "question_no": 6,
            "question": "Mr. Kim _______ attends the weekly strategy meetings via video conference.",
            "options": {
                "b": "regularly",
                "c": "regularity",
                "d": "regularize",
                "a": "regular"
            },
            "answer": "b",
            "classification": "av1",
            "explanation": "[해석] 김 씨는 화상 회의를 통해 주간 전략 회의에 정기적으로 참석합니다. [해설] 동사 attends를 수식하는 부사 regularly가 정답입니다."
        },
        {
            "id": "Unit_04_Adverb_7", "question_no": 7,
            "question": "We have _______ updated our privacy policy to comply with the new regulations.",
            "options": {
                "d": "latest",
                "c": "lately",
                "a": "late",
                "b": "later"
            },
            "answer": "c",
            "classification": "av3",
            "explanation": "[해석] 우리는 새로운 규정을 준수하기 위해 최근에 개인정보 보호정책을 업데이트했습니다. [해설] 현재완료 시제와 결합하여 '최근에'라는 뜻을 나타내는 부사 lately가 적절합니다."
        },
        {
            "id": "Unit_04_Adverb_8", "question_no": 8,
            "question": "The report was _______ detailed, covering every aspect of the project's finances.",
            "options": {
                "d": "highest",
                "b": "high",
                "a": "highly",
                "c": "height"
            },
            "answer": "a",
            "classification": "av2",
            "explanation": "[해석] 그 보고서는 프로젝트 재정의 모든 측면을 다룰 정도로 매우 상세했습니다. [해설] '매우'의 의미로 형용사 detailed를 수식하는 강조 부사 highly가 정답입니다."
        },
        {
            "id": "Unit_04_Adverb_9", "question_no": 9,
            "question": "The CEO decided to _______ postpone the product launch until next spring.",
            "options": {
                "a": "final",
                "c": "finality",
                "d": "finalize",
                "b": "finally"
            },
            "answer": "b",
            "classification": "av1",
            "explanation": "[해석] CEO는 마침내 제품 출시를 내년 봄까지 연기하기로 결정했습니다. [해설] to부정사의 동사원형 postpone을 수식하는 부사 finally가 적합합니다."
        },
        {
            "id": "Unit_04_Adverb_10", "question_no": 10,
            "question": "Drivers are advised to travel _______ when driving through the construction zone.",
            "options": {
                "b": "slowly",
                "a": "slow",
                "d": "slowing",
                "c": "slowness"
            },
            "answer": "b",
            "classification": "av1",
            "explanation": "[해석] 운전자들은 공사 구간을 통과할 때 천천히 주행할 것을 권고받습니다. [해설] 자동사 travel을 수식하여 '천천히'라는 의미를 나타내는 부사 slowly가 정답입니다."
        },
        {
            "id": "Unit_04_Adverb_11", "question_no": 11,
            "question": "The presentation was _______ informative, providing great insights into market trends.",
            "options": {
                "a": "quite",
                "d": "quietness",
                "b": "quiet",
                "c": "quietly"
            },
            "answer": "a",
            "classification": "av2",
            "explanation": "[해석] 그 발표는 꽤 유익했으며 시장 동향에 대한 훌륭한 통찰력을 제공했습니다. [해설] 형용사 informative를 수식하는 정도 부사 quite(꽤)가 정답입니다."
        },
        {
            "id": "Unit_04_Adverb_12", "question_no": 12,
            "question": "The project was over budget; _______, it was completed two weeks ahead of schedule.",
            "options": {
                "a": "moreover",
                "d": "consequently",
                "b": "however",
                "c": "therefore"
            },
            "answer": "b",
            "classification": "av3",
            "explanation": "[해석] 프로젝트가 예산을 초과했습니다. 하지만, 예정보다 2주 앞서 완료되었습니다. [해설] 상반되는 내용을 연결하는 역접의 연결 부사 however가 문맥상 정답입니다."
        },
        {
            "id": "Unit_04_Adverb_13", "question_no": 13,
            "question": "The manager _______ explained the new policy to ensure everyone understood.",
            "options": {
                "a": "clear",
                "d": "clearance",
                "c": "clarity",
                "b": "clearly"
            },
            "answer": "b",
            "classification": "av1",
            "explanation": "[해석] 매니저는 모든 사람이 이해할 수 있도록 새로운 정책을 명확하게 설명했습니다. [해설] 동사 explained를 수식하는 부사 clearly가 정답입니다."
        },
        {
            "id": "Unit_04_Adverb_14", "question_no": 14,
            "question": "We can _______ see the stage from the back row of the theater.",
            "options": {
                "a": "hard",
                "c": "hardest",
                "d": "hardship",
                "b": "hardly"
            },
            "answer": "b",
            "classification": "av3",
            "explanation": "[해석] 극장 뒷좌석에서는 무대가 거의 보이지 않습니다. [해설] '거의 ~않다'라는 부정 의미를 가진 부사 hardly가 문맥상 적절합니다."
        },
        {
            "id": "Unit_04_Adverb_15", "question_no": 15,
            "question": "The new security system operates _______ more efficiently than the previous version.",
            "options": {
                "d": "too",
                "c": "so",
                "b": "very",
                "a": "much"
            },
            "answer": "a",
            "classification": "com3",
            "explanation": "[해석] 새로운 보안 시스템은 이전 버전보다 훨씬 더 효율적으로 작동합니다. [해설] 비교급 more efficiently를 수식할 수 있는 강조 부사 much가 정답입니다."
        }
    ],
    "Unit_05_Preposition": [
        {
            "id": "Unit_05_Preposition_1", "question_no": 1,
            "question": "The seminar on international trade will begin _______ 9:00 A.M. sharp.",
            "options": {
                "a": "in",
                "d": "by",
                "b": "on",
                "c": "at"
            },
            "answer": "c",
            "classification": "pr1",
            "explanation": "[해설] 구체적인 시각 앞에는 전치사 at을 사용합니다."
        },
        {
            "id": "Unit_05_Preposition_2", "question_no": 2,
            "question": "The quarterly report must be submitted _______ next Monday.",
            "options": {
                "d": "within",
                "a": "until",
                "b": "by",
                "c": "for"
            },
            "answer": "b",
            "classification": "pr1",
            "explanation": "[해설] 마감 기한(~까지 완료)을 나타낼 때는 전치사 by를 사용합니다."
        },
        {
            "id": "Unit_05_Preposition_3", "question_no": 3,
            "question": "Most of the staff members prefer to go _______ vacation in July.",
            "options": {
                "d": "to",
                "b": "at",
                "a": "in",
                "c": "on"
            },
            "answer": "c",
            "classification": "pr1",
            "explanation": "[해설] 'on vacation(휴가 중인/휴가차)'은 관용적으로 쓰이는 전치사구입니다."
        },
        {
            "id": "Unit_05_Preposition_4", "question_no": 4,
            "question": "The new branch is located _______ the business district of the city.",
            "options": {
                "a": "at",
                "b": "in",
                "c": "on",
                "d": "to"
            },
            "answer": "b",
            "classification": "pr1",
            "explanation": "[해설] 도시의 구역이나 넓은 장소 안을 나타낼 때는 전치사 in을 사용합니다."
        },
        {
            "id": "Unit_05_Preposition_5", "question_no": 5,
            "question": "We have been waiting for the CEO's arrival _______ two hours.",
            "options": {
                "a": "since",
                "c": "during",
                "b": "for",
                "d": "while"
            },
            "answer": "b",
            "classification": "pr1",
            "explanation": "[해설] 뒤에 숫자를 포함한 구체적인 기간이 올 때는 전치사 for를 사용합니다."
        },
        {
            "id": "Unit_05_Preposition_6", "question_no": 6,
            "question": "The construction work will be completed _______ the end of this month.",
            "options": {
                "c": "on",
                "a": "within",
                "b": "by",
                "d": "at"
            },
            "answer": "b",
            "classification": "pr1",
            "explanation": "[해설] 특정 시점까지 완료를 의미하는 by가 문맥상 적절합니다."
        },
        {
            "id": "Unit_05_Preposition_7", "question_no": 7,
            "question": "The office will be closed _______ the national holiday.",
            "options": {
                "d": "since",
                "a": "during",
                "b": "while",
                "c": "for"
            },
            "answer": "a",
            "classification": "pr1",
            "explanation": "[해설] 특정 행사나 기간 명사 앞에는 전치사 during을 사용합니다."
        },
        {
            "id": "Unit_05_Preposition_8", "question_no": 8,
            "question": "All files are stored _______ the main server for security reasons.",
            "options": {
                "d": "with",
                "a": "at",
                "c": "on",
                "b": "to"
            },
            "answer": "c",
            "classification": "pr1",
            "explanation": "[해설] 서버나 컴퓨터 매체 등의 표면/시스템 상을 나타낼 때는 on을 사용합니다."
        },
        {
            "id": "Unit_05_Preposition_9", "question_no": 9,
            "question": "The manager is currently _______ a meeting with the investors.",
            "options": {
                "c": "in",
                "a": "on",
                "d": "to",
                "b": "at"
            },
            "answer": "c",
            "classification": "pr1",
            "explanation": "[해설] '회의 중'이라는 상태를 나타낼 때는 in a meeting을 사용합니다."
        },
        {
            "id": "Unit_05_Preposition_10", "question_no": 10,
            "question": "Mr. Kim has been working here _______ 2015.",
            "options": {
                "c": "since",
                "d": "from",
                "a": "for",
                "b": "during"
            },
            "answer": "c",
            "classification": "pr1",
            "explanation": "[해설] 과거의 특정 시점 이후로 계속됨을 나타낼 때는 since를 사용합니다."
        },
        {
            "id": "Unit_05_Preposition_11", "question_no": 11,
            "question": "The document is _______ the second shelf from the top.",
            "options": {
                "a": "at",
                "b": "on",
                "d": "under",
                "c": "in"
            },
            "answer": "b",
            "classification": "pr1",
            "explanation": "[해설] 선반과 같은 평면 위에 있음을 나타낼 때는 on을 사용합니다."
        },
        {
            "id": "Unit_05_Preposition_12", "question_no": 12,
            "question": "Please remain seated _______ the entire duration of the flight.",
            "options": {
                "a": "throughout",
                "b": "along",
                "d": "beside",
                "c": "across"
            },
            "answer": "a",
            "classification": "pr1",
            "explanation": "[해설] 기간의 처음부터 끝까지 전체를 나타내는 throughout이 적절합니다."
        },
        {
            "id": "Unit_05_Preposition_13", "question_no": 13,
            "question": "The restaurant is located _______ the street from the post office.",
            "options": {
                "d": "against",
                "c": "along",
                "a": "across",
                "b": "through"
            },
            "answer": "a",
            "classification": "pr1",
            "explanation": "[해설] '길 건너편에'라는 의미로 across the street를 사용합니다."
        },
        {
            "id": "Unit_05_Preposition_14", "question_no": 14,
            "question": "The contract will be sent to you _______ email.",
            "options": {
                "b": "by",
                "d": "in",
                "a": "at",
                "c": "on"
            },
            "answer": "b",
            "classification": "pr1",
            "explanation": "[해설] 수단이나 통신 방법을 나타낼 때는 by를 사용합니다."
        },
        {
            "id": "Unit_05_Preposition_15", "question_no": 15,
            "question": "The store offers a discount _______ selected items.",
            "options": {
                "d": "to",
                "b": "on",
                "a": "for",
                "c": "at"
            },
            "answer": "b",
            "classification": "pr1",
            "explanation": "[해설] 특정 상품에 대한 할인을 말할 때 discount on을 사용합니다."
        },
        {
            "id": "Unit_05_Preposition_16", "question_no": 16,
            "question": "You can find more information _______ our website.",
            "options": {
                "c": "in",
                "d": "to",
                "a": "at",
                "b": "on"
            },
            "answer": "b",
            "classification": "pr1",
            "explanation": "[해설] 웹사이트나 온라인 매체 앞에는 전치사 on을 사용합니다."
        },
        {
            "id": "Unit_05_Preposition_17", "question_no": 17,
            "question": "The factory operates _______ 24 hours a day.",
            "options": {
                "a": "for",
                "d": "throughout",
                "c": "in",
                "b": "during"
            },
            "answer": "a",
            "classification": "pr1",
            "explanation": "[해설] '24시간 동안'이라는 기간의 의미를 나타내므로 for가 적절합니다."
        },
        {
            "id": "Unit_05_Preposition_18", "question_no": 18,
            "question": "Mr. Park is _______ charge of the human resources department.",
            "options": {
                "d": "under",
                "a": "in",
                "b": "at",
                "c": "on"
            },
            "answer": "a",
            "classification": "pr5",
            "explanation": "[해설] 'in charge of(~을 담당하는)'는 필수 관용 표현입니다."
        },
        {
            "id": "Unit_05_Preposition_19", "question_no": 19,
            "question": "The keynote speaker arrived _______ the airport late last night.",
            "options": {
                "d": "on",
                "b": "to",
                "a": "at",
                "c": "in"
            },
            "answer": "a",
            "classification": "pr1",
            "explanation": "[해설] 공항과 같은 지점의 장소에는 at을 사용합니다."
        },
        {
            "id": "Unit_05_Preposition_20", "question_no": 20,
            "question": "The library is closed _______ weekends.",
            "options": {
                "d": "to",
                "c": "in",
                "a": "at",
                "b": "on"
            },
            "answer": "b",
            "classification": "pr1",
            "explanation": "[해설] 요일이나 주말 앞에는 전치사 on을 사용합니다."
        },
        {
            "id": "Unit_05_Preposition_21", "question_no": 21,
            "question": "The employees must follow the safety regulations _______ exception.",
            "options": {
                "c": "with",
                "d": "besides",
                "b": "against",
                "a": "without"
            },
            "answer": "a",
            "classification": "pr1",
            "explanation": "[해설] '예외 없이'라는 뜻으로 without exception을 사용합니다."
        },
        {
            "id": "Unit_05_Preposition_22", "question_no": 22,
            "question": "The workshop is designed _______ beginners in digital photography.",
            "options": {
                "a": "for",
                "d": "with",
                "b": "to",
                "c": "at"
            },
            "answer": "a",
            "classification": "pr1",
            "explanation": "[해설] 대상을 나타내는 '...를 위한'이라는 의미로 for가 적절합니다."
        },
        {
            "id": "Unit_05_Preposition_23", "question_no": 23,
            "question": "The budget proposal is _______ review by the board members.",
            "options": {
                "a": "under",
                "c": "on",
                "b": "in",
                "d": "at"
            },
            "answer": "a",
            "classification": "pr1",
            "explanation": "[해설] '검토 중인'이라는 의미로 under review를 사용합니다."
        },
        {
            "id": "Unit_05_Preposition_24", "question_no": 24,
            "question": "There is a coffee shop _______ the lobby of the building.",
            "options": {
                "d": "to",
                "b": "on",
                "a": "in",
                "c": "at"
            },
            "answer": "a",
            "classification": "pr1",
            "explanation": "[해설] 건물 내부 공간을 나타내므로 in이 적절합니다."
        },
        {
            "id": "Unit_05_Preposition_25", "question_no": 25,
            "question": "The company's success is based _______ innovation and teamwork.",
            "options": {
                "a": "at",
                "c": "in",
                "d": "to",
                "b": "on"
            },
            "answer": "b",
            "classification": "pr4",
            "explanation": "[해설] 'be based on(~에 근거하다/기반하다)'는 빈출 표현입니다."
        },
        {
            "id": "Unit_05_Preposition_26", "question_no": 26,
            "question": "The results will be announced _______ the next 24 hours.",
            "options": {
                "d": "until",
                "a": "within",
                "b": "during",
                "c": "for"
            },
            "answer": "a",
            "classification": "pr1",
            "explanation": "[해설] '...이내에'라는 의미로 within을 사용합니다."
        },
        {
            "id": "Unit_05_Preposition_27", "question_no": 27,
            "question": "The new CEO plans to focus _______ expanding the international market.",
            "options": {
                "b": "on",
                "a": "in",
                "d": "to",
                "c": "at"
            },
            "answer": "b",
            "classification": "pr4",
            "explanation": "[해설] 'focus on(~에 집중하다)'은 자동사와 전치사의 짝궁 표현입니다."
        },
        {
            "id": "Unit_05_Preposition_28", "question_no": 28,
            "question": "Please keep your pass _______ you at all times.",
            "options": {
                "d": "by",
                "a": "with",
                "c": "to",
                "b": "on"
            },
            "answer": "a",
            "classification": "pr1",
            "explanation": "[해설] 휴대나 소지를 나타낼 때는 with를 사용합니다."
        },
        {
            "id": "Unit_05_Preposition_29", "question_no": 29,
            "question": "The temperature dropped _______ zero last night.",
            "options": {
                "a": "below",
                "b": "under",
                "c": "bottom",
                "d": "down"
            },
            "answer": "a",
            "classification": "pr1",
            "explanation": "[해설] 온도나 수치가 기준선 이하임을 나타낼 때는 below를 사용합니다."
        },
        {
            "id": "Unit_05_Preposition_30", "question_no": 30,
            "question": "We are looking for candidates _______ extensive experience in sales.",
            "options": {
                "a": "with",
                "c": "for",
                "b": "by",
                "d": "at"
            },
            "answer": "a",
            "classification": "pr1",
            "explanation": "[해설] '...을 가진/보유한'이라는 소유의 의미로 전치사 with가 적절합니다."
        }
    ],
    "Unit_06_Verb": [
        {
            "id": "Unit_06_Verb_1", "question_no": 1,
            "question": "The number of attendees _______ expected to exceed one hundred.",
            "options": {
                "b": "are",
                "d": "being",
                "c": "be",
                "a": "is"
            },
            "answer": "a",
            "classification": "v1",
            "explanation": "[해설] 'The number of + 복수명사'는 단수 취급하므로 단수 동사 is가 정답입니다."
        },
        {
            "id": "Unit_06_Verb_2", "question_no": 2,
            "question": "Detailed information about the project _______ in the attached file.",
            "options": {
                "b": "is contained",
                "a": "contains",
                "d": "contain",
                "c": "containing"
            },
            "answer": "b",
            "classification": "v2",
            "explanation": "[해설] 정보가 '포함되는' 수동의 관계이며 목적어가 없으므로 수동태가 적절합니다."
        },
        {
            "id": "Unit_06_Verb_3", "question_no": 3,
            "question": "Our company _______ its 20th anniversary last month.",
            "options": {
                "b": "celebrated",
                "d": "has celebrated",
                "c": "will celebrate",
                "a": "celebrates"
            },
            "answer": "b",
            "classification": "v4",
            "explanation": "[해설] 'last month'라는 명확한 과거 시점이 있으므로 과거 시제 동사가 와야 합니다."
        },
        {
            "id": "Unit_06_Verb_4", "question_no": 4,
            "question": "The manager requested that everyone _______ the workshop on Friday.",
            "options": {
                "b": "attends",
                "d": "will attend",
                "a": "attend",
                "c": "attended"
            },
            "answer": "a",
            "classification": "v5",
            "explanation": "[해설] 제안/요청 동사(requested) 뒤의 that절에는 'should'가 생략된 동사원형을 씁니다."
        },
        {
            "id": "Unit_06_Verb_5", "question_no": 5,
            "question": "Please _______ to the safety guidelines before operating the machine.",
            "options": {
                "d": "discuss",
                "c": "explain",
                "a": "refer",
                "b": "mention"
            },
            "answer": "a",
            "classification": "v7",
            "explanation": "[해설] refer는 자동사로 전치사 to와 함께 쓰여 '~을 참고하다'라는 의미를 만듭니다."
        },
        {
            "id": "Unit_06_Verb_6", "question_no": 6,
            "question": "The high quality of the materials _______ the product durable.",
            "options": {
                "b": "gives",
                "a": "makes",
                "d": "shows",
                "c": "brings"
            },
            "answer": "a",
            "classification": "v8",
            "explanation": "[해설] 5형식 동사(make + 목적어 + 목적보어) 구조로 '~을 ...하게 만들다'는 뜻입니다."
        },
        {
            "id": "Unit_06_Verb_7", "question_no": 7,
            "question": "The board _______ to postpone the meeting until next week.",
            "options": {
                "c": "suggested",
                "b": "told",
                "a": "decided",
                "d": "stated"
            },
            "answer": "a",
            "classification": "v8",
            "explanation": "[해설] 문맥상 회의를 연기하기로 '결정했다'는 decide가 가장 적절합니다."
        },
        {
            "id": "Unit_06_Verb_8", "question_no": 8,
            "question": "Neither the manager nor the employees _______ informed of the change.",
            "options": {
                "d": "is",
                "b": "were",
                "c": "has",
                "a": "was"
            },
            "answer": "b",
            "classification": "v1",
            "explanation": "[해설] Neither A nor B 구문은 B(the employees)에 수 일치하므로 복수 동사가 정답입니다."
        },
        {
            "id": "Unit_06_Verb_9", "question_no": 9,
            "question": "All participants _______ to register for the event by Friday.",
            "options": {
                "b": "are reminded",
                "a": "remind",
                "d": "reminded",
                "c": "reminding"
            },
            "answer": "b",
            "classification": "v2",
            "explanation": "[해설] 참가자들이 등록하도록 '상기되는' 수동 관계입니다."
        },
        {
            "id": "Unit_06_Verb_10", "question_no": 10,
            "question": "The marketing team _______ a new strategy since early this year.",
            "options": {
                "c": "developed",
                "d": "will develop",
                "a": "is developing",
                "b": "has been developing"
            },
            "answer": "b",
            "classification": "v4",
            "explanation": "[해설] since(~이래로)가 있으므로 과거부터 현재까지 계속되는 현재완료진행이 적절합니다."
        },
        {
            "id": "Unit_06_Verb_11", "question_no": 11,
            "question": "If the shipment _______ tomorrow, we will start the distribution.",
            "options": {
                "b": "will arrive",
                "c": "arrived",
                "d": "has arrived",
                "a": "arrives"
            },
            "answer": "a",
            "classification": "v4",
            "explanation": "[해설] 시간/조건의 부사절에서는 미래 시제 대신 현재 시제를 사용합니다."
        },
        {
            "id": "Unit_06_Verb_12", "question_no": 12,
            "question": "We must _______ with the new environmental regulations.",
            "options": {
                "b": "obey",
                "d": "observe",
                "c": "follow",
                "a": "comply"
            },
            "answer": "a",
            "classification": "v7",
            "explanation": "[해설] 전치사 with와 함께 쓰여 '~을 준수하다'는 뜻을 가진 자동사는 comply입니다."
        },
        {
            "id": "Unit_06_Verb_13", "question_no": 13,
            "question": "The supervisor _______ the interns some helpful advice.",
            "options": {
                "d": "kept",
                "b": "told",
                "c": "informed",
                "a": "gave"
            },
            "answer": "a",
            "classification": "v8",
            "explanation": "[해설] 4형식 동사(give + 간접목적어 + 직접목적어) 구문입니다."
        },
        {
            "id": "Unit_06_Verb_14", "question_no": 14,
            "question": "The technician _______ the broken computer within an hour.",
            "options": {
                "d": "created",
                "c": "modified",
                "a": "fixed",
                "b": "invented"
            },
            "answer": "a",
            "classification": "voc1",
            "explanation": "[해설] 고장 난 컴퓨터를 '수리했다'는 뜻의 fixed가 문맥상 맞습니다."
        },
        {
            "id": "Unit_06_Verb_15", "question_no": 15,
            "question": "Improving the current system _______ more time and resources.",
            "options": {
                "d": "to require",
                "a": "require",
                "c": "requiring",
                "b": "requires"
            },
            "answer": "b",
            "classification": "v1",
            "explanation": "[해설] 동명사구(Improving...)가 주어일 때는 단수 취급하여 requires를 씁니다."
        },
        {
            "id": "Unit_06_Verb_16", "question_no": 16,
            "question": "The annual banquet _______ in the grand ballroom tonight.",
            "options": {
                "a": "will hold",
                "c": "is holding",
                "b": "will be held",
                "d": "holds"
            },
            "answer": "b",
            "classification": "v2",
            "explanation": "[해설] 연회가 '개최되는' 수동 관계이므로 미래 수동태가 정답입니다."
        },
        {
            "id": "Unit_06_Verb_17", "question_no": 17,
            "question": "By the time the manager arrived, the meeting _______ already.",
            "options": {
                "d": "was starting",
                "a": "started",
                "b": "has started",
                "c": "had started"
            },
            "answer": "c",
            "classification": "v4",
            "explanation": "[해설] 매니저가 도착한 과거 시점보다 회의가 먼저 시작되었으므로 과거완료를 씁니다."
        },
        {
            "id": "Unit_06_Verb_18", "question_no": 18,
            "question": "It is essential that the report _______ error-free.",
            "options": {
                "c": "was",
                "a": "be",
                "b": "is",
                "d": "been"
            },
            "answer": "a",
            "classification": "v5",
            "explanation": "[해설] 필수/중요(essential) 형용사 뒤의 that절에는 동사원형(be)을 사용합니다."
        },
        {
            "id": "Unit_06_Verb_19", "question_no": 19,
            "question": "Mr. Lee _______ for the position of marketing manager last week.",
            "options": {
                "b": "requested",
                "c": "joined",
                "d": "obtained",
                "a": "applied"
            },
            "answer": "a",
            "classification": "v7",
            "explanation": "[해설] apply for는 '~에 지원하다'라는 뜻의 자동사+전치사 구문입니다."
        },
        {
            "id": "Unit_06_Verb_20", "question_no": 20,
            "question": "The committee _______ Mr. Johnson the new project leader.",
            "options": {
                "a": "appointed",
                "b": "gave",
                "d": "assigned",
                "c": "offered"
            },
            "answer": "a",
            "classification": "v8",
            "explanation": "[해설] 5형식 동사(appoint + 목적어 + 목적보어)로 '~을 ...로 임명하다'는 뜻입니다."
        },
        {
            "id": "Unit_06_Verb_21", "question_no": 21,
            "question": "The company plans to _______ its business into the Asian market.",
            "options": {
                "a": "expand",
                "d": "intensify",
                "b": "increase",
                "c": "prolong"
            },
            "answer": "a",
            "classification": "voc1",
            "explanation": "[해설] 사업을 '확장하다'는 뜻의 expand가 가장 자연스럽습니다."
        },
        {
            "id": "Unit_06_Verb_22", "question_no": 22,
            "question": "Each of the participants _______ a certificate of completion.",
            "options": {
                "d": "to receive",
                "a": "receives",
                "b": "receive",
                "c": "receiving"
            },
            "answer": "a",
            "classification": "v1",
            "explanation": "[해설] Each of + 복수명사 주어는 단수 동사(receives)로 받습니다."
        },
        {
            "id": "Unit_06_Verb_23", "question_no": 23,
            "question": "The security system _______ by an external company.",
            "options": {
                "b": "is maintained",
                "a": "maintains",
                "c": "maintaining",
                "d": "maintain"
            },
            "answer": "b",
            "classification": "v2",
            "explanation": "[해설] 시스템이 '유지관리 되는' 수동의 관계입니다."
        },
        {
            "id": "Unit_06_Verb_24", "question_no": 24,
            "question": "We _______ several applications for the internship so far.",
            "options": {
                "c": "received",
                "a": "receive",
                "b": "have received",
                "d": "will receive"
            },
            "answer": "b",
            "classification": "v4",
            "explanation": "[해설] so far(지금까지)는 현재완료 시제와 함께 자주 쓰이는 단서입니다."
        },
        {
            "id": "Unit_06_Verb_25", "question_no": 25,
            "question": "_______ the CEO decide to resign, the vice president will take over.",
            "options": {
                "c": "Could",
                "b": "Would",
                "d": "Might",
                "a": "Should"
            },
            "answer": "a",
            "classification": "inv1",
            "explanation": "[해설] 가정법 미래의 도치 구문(Should + 주어 + 동사원형)입니다."
        },
        {
            "id": "Unit_06_Verb_26", "question_no": 26,
            "question": "She _______ at the conference yesterday about the new policy.",
            "options": {
                "a": "spoke",
                "b": "discussed",
                "c": "told",
                "d": "mentioned"
            },
            "answer": "a",
            "classification": "v7",
            "explanation": "[해설] speak은 자동사로 전치사 없이 단독 혹은 speak about/to/with 형식으로 쓰입니다."
        },
        {
            "id": "Unit_06_Verb_27", "question_no": 27,
            "question": "Please _______ the door locked after you leave the office.",
            "options": {
                "a": "keep",
                "d": "let",
                "b": "stay",
                "c": "remain"
            },
            "answer": "a",
            "classification": "v8",
            "explanation": "[해설] keep + 목적어 + 목적보어(형용사/분사) 구조로 '~을 ...한 상태로 유지하다'는 뜻입니다."
        },
        {
            "id": "Unit_06_Verb_28", "question_no": 28,
            "question": "The analyst _______ the financial risks involved in the deal.",
            "options": {
                "b": "performed",
                "a": "assessed",
                "d": "intended",
                "c": "accomplished"
            },
            "answer": "a",
            "classification": "voc1",
            "explanation": "[해설] 위험을 '평가하다'라는 뜻의 assessed가 문맥상 정답입니다."
        },
        {
            "id": "Unit_06_Verb_29", "question_no": 29,
            "question": "Statistics _______ that consumer spending is on the rise.",
            "options": {
                "c": "showing",
                "b": "shows",
                "a": "show",
                "d": "to show"
            },
            "answer": "a",
            "classification": "v1",
            "explanation": "[해설] 학문명이 아닌 일반 통계 자료를 뜻하는 Statistics는 복수 취급하여 show를 씁니다."
        },
        {
            "id": "Unit_06_Verb_30", "question_no": 30,
            "question": "The train _______ the station at exactly 10 P.M. every night.",
            "options": {
                "b": "leaves",
                "c": "leaving",
                "a": "leave",
                "d": "left"
            },
            "answer": "b",
            "classification": "v4",
            "explanation": "[해설] 반복되는 일상(every night)은 현재 시제로 표현합니다."
        }
    ],
    "Unit_07_To_Infinitive": [
        {
            "id": "Unit_07_To_Infinitive_1", "question_no": 1,
            "question": "_______ the project on time, the team worked through the weekend.",
            "options": {
                "b": "To finish",
                "a": "Finish",
                "d": "Finishing",
                "c": "Finished"
            },
            "answer": "b",
            "classification": "i3",
            "explanation": "[해설] 문장 맨 앞에서 '~하기 위해서'라는 목적을 나타내는 부사적 용법의 To부정사 자리입니다."
        },
        {
            "id": "Unit_07_To_Infinitive_2", "question_no": 2,
            "question": "The board of directors decided _______ the merger proposal.",
            "options": {
                "c": "accepting",
                "d": "accepted",
                "a": "accept",
                "b": "to accept"
            },
            "answer": "b",
            "classification": "i1",
            "explanation": "[해설] decide는 To부정사를 목적어로 취하는 대표적인 동사입니다."
        },
        {
            "id": "Unit_07_To_Infinitive_3", "question_no": 3,
            "question": "Mr. Grant has the ability _______ complex problems very quickly.",
            "options": {
                "c": "solved",
                "d": "solving",
                "b": "to solve",
                "a": "solve"
            },
            "answer": "b",
            "classification": "i2",
            "explanation": "[해설] 명사(ability)를 뒤에서 수식하여 '~하는 능력'이라는 뜻을 만드는 형용사적 용법입니다."
        },
        {
            "id": "Unit_07_To_Infinitive_4", "question_no": 4,
            "question": "We hope _______ the renovation of the lobby by next month.",
            "options": {
                "c": "completing",
                "b": "to complete",
                "a": "complete",
                "d": "completed"
            },
            "answer": "b",
            "classification": "i1",
            "explanation": "[해설] hope는 미래 지향적인 의미를 가진 To부정사를 목적어로 취합니다."
        },
        {
            "id": "Unit_07_To_Infinitive_5", "question_no": 5,
            "question": "It is essential _______ all safety regulations in the factory.",
            "options": {
                "d": "followed",
                "a": "follow",
                "b": "to follow",
                "c": "following"
            },
            "answer": "b",
            "classification": "i1",
            "explanation": "[해설] 가주어 It에 대응하는 진주어(to follow) 자리입니다."
        },
        {
            "id": "Unit_07_To_Infinitive_6", "question_no": 6,
            "question": "The company failed _______ the necessary documents to the government.",
            "options": {
                "b": "to submit",
                "d": "submission",
                "c": "submitting",
                "a": "submit"
            },
            "answer": "b",
            "classification": "i1",
            "explanation": "[해설] fail + to부정사 구문으로 '~하는 데 실패하다/하지 못하다'는 뜻입니다."
        },
        {
            "id": "Unit_07_To_Infinitive_7", "question_no": 7,
            "question": "Ms. Watson went to London _______ a series of business meetings.",
            "options": {
                "b": "to attend",
                "c": "attending",
                "a": "attend",
                "d": "attendance"
            },
            "answer": "b",
            "classification": "i3",
            "explanation": "[해설] '~하기 위해서'라는 목적을 나타내는 부사적 용법입니다."
        },
        {
            "id": "Unit_07_To_Infinitive_8", "question_no": 8,
            "question": "Management expects all staff _______ at the seminar tomorrow.",
            "options": {
                "b": "to arrive",
                "a": "arrive",
                "d": "arrived",
                "c": "arriving"
            },
            "answer": "b",
            "classification": "i1",
            "explanation": "[해설] 5형식 동사 expect + 목적어 + 목적보어(to부정사) 구조입니다."
        },
        {
            "id": "Unit_07_To_Infinitive_9", "question_no": 9,
            "question": "The best way _______ costs is to reduce electricity consumption.",
            "options": {
                "a": "save",
                "d": "saved",
                "c": "saving",
                "b": "to save"
            },
            "answer": "b",
            "classification": "i2",
            "explanation": "[해설] 명사 way를 수식하는 형용사적 용법의 To부정사입니다."
        },
        {
            "id": "Unit_07_To_Infinitive_10", "question_no": 10,
            "question": "Employees are encouraged _______ their concerns during the meeting.",
            "options": {
                "c": "voicing",
                "a": "voice",
                "b": "to voice",
                "d": "voiced"
            },
            "answer": "b",
            "classification": "i1",
            "explanation": "[해설] be encouraged + to부정사 수동태 구문으로 '~하도록 권장되다'는 뜻입니다."
        },
        {
            "id": "Unit_07_To_Infinitive_11", "question_no": 11,
            "question": "The instructions are easy _______ if you follow them step by step.",
            "options": {
                "b": "to understand",
                "a": "understand",
                "c": "understanding",
                "d": "understood"
            },
            "answer": "b",
            "classification": "i3",
            "explanation": "[해설] 형용사(easy)를 수식하는 부사적 용법(~하기에)입니다."
        },
        {
            "id": "Unit_07_To_Infinitive_12", "question_no": 12,
            "question": "Mr. Rogers promised _______ the final draft by the end of the day.",
            "options": {
                "c": "emailing",
                "b": "to email",
                "a": "email",
                "d": "emailed"
            },
            "answer": "b",
            "classification": "i1",
            "explanation": "[해설] promise는 To부정사를 목적어로 취하는 동사입니다."
        },
        {
            "id": "Unit_07_To_Infinitive_13", "question_no": 13,
            "question": "I am writing this email _______ an appointment with Dr. Miller.",
            "options": {
                "b": "to make",
                "c": "making",
                "d": "made",
                "a": "make"
            },
            "answer": "b",
            "classification": "i3",
            "explanation": "[해설] 이메일을 쓰는 목적(~하기 위해)을 나타내므로 To부정사가 적절합니다."
        },
        {
            "id": "Unit_07_To_Infinitive_14", "question_no": 14,
            "question": "The customer service representative offered _______ the shipping fee.",
            "options": {
                "d": "waived",
                "a": "waive",
                "b": "to waive",
                "c": "waiving"
            },
            "answer": "b",
            "classification": "i1",
            "explanation": "[해설] offer는 To부정사를 목적어로 취하여 '~해 주겠다고 제안하다'는 뜻을 만듭니다."
        },
        {
            "id": "Unit_07_To_Infinitive_15", "question_no": 15,
            "question": "There are many places _______ in the historic district of the city.",
            "options": {
                "d": "visited",
                "a": "visit",
                "c": "visiting",
                "b": "to visit"
            },
            "answer": "b",
            "classification": "i2",
            "explanation": "[해설] 명사 places를 수식하는 형용사적 용법(~할 장소)입니다."
        }
    ],
    "Unit_08_Gerund": [
        {
            "id": "Unit_08_Gerund_1", "question_no": 1,
            "question": "_______ the monthly sales report is the responsibility of the team lead.",
            "options": {
                "a": "Review",
                "d": "To be reviewed",
                "c": "Reviewed",
                "b": "Reviewing"
            },
            "answer": "b",
            "classification": "g1",
            "explanation": "[해설] 문장의 주어 자리이며 타동사의 성질을 가져 뒤에 목적어를 취하고 있으므로 동명사가 적절합니다."
        },
        {
            "id": "Unit_08_Gerund_2", "question_no": 2,
            "question": "We are looking forward to _______ the new marketing campaign next week.",
            "options": {
                "c": "started",
                "d": "starts",
                "b": "starting",
                "a": "start"
            },
            "answer": "b",
            "classification": "g2",
            "explanation": "[해설] 'look forward to'의 to는 전치사이므로 뒤에 명사나 동명사(-ing)가 와야 합니다."
        },
        {
            "id": "Unit_08_Gerund_3", "question_no": 3,
            "question": "The company provides adequate _______ for its employees in the office building.",
            "options": {
                "d": "seats",
                "b": "seated",
                "a": "seat",
                "c": "seating"
            },
            "answer": "c",
            "classification": "g3",
            "explanation": "[해설] 'seating'은 '-ing형 명사'로 '좌석(배치)'이라는 불가산 명사로 쓰입니다."
        },
        {
            "id": "Unit_08_Gerund_4", "question_no": 4,
            "question": "They considered _______ the office to a more central location.",
            "options": {
                "c": "moving",
                "a": "move",
                "b": "to move",
                "d": "moved"
            },
            "answer": "c",
            "classification": "g1",
            "explanation": "[해설] consider는 동명사를 목적어로 취하는 대표적인 동사입니다."
        },
        {
            "id": "Unit_08_Gerund_5", "question_no": 5,
            "question": "The technician had difficulty _______ the cause of the system failure.",
            "options": {
                "b": "finding",
                "c": "to find",
                "a": "find",
                "d": "found"
            },
            "answer": "b",
            "classification": "g5",
            "explanation": "[해설] 'have difficulty (in) -ing'는 '~하는 데 어려움을 겪다'라는 관용 표현입니다."
        },
        {
            "id": "Unit_08_Gerund_6", "question_no": 6,
            "question": "Effective _______ is essential for the success of any business project.",
            "options": {
                "b": "planning",
                "a": "plan",
                "c": "planned",
                "d": "planner"
            },
            "answer": "b",
            "classification": "g3",
            "explanation": "[해설] 'planning'은 '기획/계획'이라는 뜻의 -ing형 명사입니다."
        },
        {
            "id": "Unit_08_Gerund_7", "question_no": 7,
            "question": "By _______ the latest technology, the firm increased its productivity.",
            "options": {
                "b": "adopting",
                "c": "adoption",
                "d": "adopted",
                "a": "adopt"
            },
            "answer": "b",
            "classification": "g1",
            "explanation": "[해설] 전치사(By)의 목적어 자리이며, 뒤에 목적어를 취하는 동명사가 적절합니다."
        },
        {
            "id": "Unit_08_Gerund_8", "question_no": 8,
            "question": "The committee spent three hours _______ the budget for the next quarter.",
            "options": {
                "c": "to discuss",
                "a": "discuss",
                "d": "discussed",
                "b": "discussing"
            },
            "answer": "b",
            "classification": "g5",
            "explanation": "[해설] 'spend + 시간/돈 + -ing' 구문으로 '~하는 데 시간을 쓰다'는 뜻입니다."
        },
        {
            "id": "Unit_08_Gerund_9", "question_no": 9,
            "question": "All _______ for the new positions should be submitted by Friday.",
            "options": {
                "c": "applications",
                "d": "applying",
                "a": "apply",
                "b": "applicant"
            },
            "answer": "c",
            "classification": "g2",
            "explanation": "[해설] 이 문맥에서는 지원 행위보다는 '지원서(applications)'라는 명사가 주어로 더 적절합니다."
        },
        {
            "id": "Unit_08_Gerund_10", "question_no": 10,
            "question": "Avoid _______ personal phone calls during working hours.",
            "options": {
                "d": "made",
                "a": "make",
                "c": "making",
                "b": "to make"
            },
            "answer": "c",
            "classification": "g1",
            "explanation": "[해설] avoid는 동명사만을 목적어로 취하는 동사입니다."
        },
        {
            "id": "Unit_08_Gerund_11", "question_no": 11,
            "question": "It is no use _______ about the decision made by the board.",
            "options": {
                "d": "complaint",
                "c": "to complain",
                "a": "complain",
                "b": "complaining"
            },
            "answer": "b",
            "classification": "g5",
            "explanation": "[해설] 'It is no use -ing'는 '~해도 소용없다'라는 관용구입니다."
        },
        {
            "id": "Unit_08_Gerund_12", "question_no": 12,
            "question": "The hotel offers free _______ for all guests staying for more than two nights.",
            "options": {
                "c": "parking",
                "b": "parked",
                "a": "park",
                "d": "parks"
            },
            "answer": "c",
            "classification": "g3",
            "explanation": "[해설] 'parking'은 '주차'라는 뜻의 -ing형 명사입니다."
        },
        {
            "id": "Unit_08_Gerund_13", "question_no": 13,
            "question": "Mr. Choi finished _______ the contract after several hours of negotiation.",
            "options": {
                "b": "to review",
                "c": "reviewing",
                "d": "reviewed",
                "a": "review"
            },
            "answer": "c",
            "classification": "g1",
            "explanation": "[해설] finish는 동명사를 목적어로 취하는 동사입니다."
        },
        {
            "id": "Unit_08_Gerund_14", "question_no": 14,
            "question": "We cannot help _______ the potential risks involved in this merger.",
            "options": {
                "c": "to worry",
                "d": "worried",
                "b": "worrying",
                "a": "worry"
            },
            "answer": "b",
            "classification": "g5",
            "explanation": "[해설] 'cannot help -ing'는 '~하지 않을 수 없다'라는 뜻의 관용 표현입니다."
        },
        {
            "id": "Unit_08_Gerund_15", "question_no": 15,
            "question": "Success in sales requires _______ strong relationships with clients.",
            "options": {
                "c": "to build",
                "b": "building",
                "d": "built",
                "a": "build"
            },
            "answer": "b",
            "classification": "g1",
            "explanation": "[해설] require는 동명사를 목적어로 취할 수 있으며, 뒤에 목적어(relationships)를 동반하므로 동명사가 적절합니다."
        }
    ],
    "Unit_09_Participle": [
        {
            "id": "Unit_09_Participle_1", "question_no": 1,
            "question": "The _______ employees will receive a bonus for their outstanding performance.",
            "options": {
                "d": "promotion",
                "a": "promote",
                "c": "promoted",
                "b": "promoting"
            },
            "answer": "c",
            "classification": "pa1",
            "explanation": "[해설] 직원들이 승진을 '된' 상태이므로 과거분사 promoted가 명사 employees를 수식하는 것이 적절합니다."
        },
        {
            "id": "Unit_09_Participle_2", "question_no": 2,
            "question": "When _______ for the position, please provide at least two references.",
            "options": {
                "b": "applying",
                "a": "apply",
                "d": "application",
                "c": "applied"
            },
            "answer": "b",
            "classification": "pa4",
            "explanation": "[해설] 접속사(When) 뒤에 주어와 be동사가 생략된 구조로, 능동의 의미이므로 현재분사 applying이 정답입니다."
        },
        {
            "id": "Unit_09_Participle_3", "question_no": 3,
            "question": "The results of the market survey were quite _______ to the management team.",
            "options": {
                "a": "surprise",
                "c": "surprising",
                "d": "surprisingly",
                "b": "surprised"
            },
            "answer": "c",
            "classification": "pa3",
            "explanation": "[해설] 주어인 '설문 결과(사물)'가 놀라움을 주는 주체이므로 현재분사 surprising이 적절합니다."
        },
        {
            "id": "Unit_09_Participle_4", "question_no": 4,
            "question": "_______ the complex nature of the task, the manager decided to extend the deadline.",
            "options": {
                "b": "Recognizing",
                "c": "Recognized",
                "a": "Recognize",
                "d": "Recognition"
            },
            "answer": "b",
            "classification": "pa4",
            "explanation": "[해설] 문장 전체를 수식하는 분사구문 자리입니다. 매니저가 업무의 성격을 '인식하면서/인식했기 때문에'라는 능동의 의미이므로 Recognizing이 정답입니다."
        },
        {
            "id": "Unit_09_Participle_5", "question_no": 5,
            "question": "Please read the _______ instructions carefully before starting the assembly.",
            "options": {
                "a": "attach",
                "b": "attaching",
                "c": "attached",
                "d": "attachment"
            },
            "answer": "c",
            "classification": "pa1",
            "explanation": "[해설] 지침서가 '첨부된' 것이므로 과거분사 attached가 명사 instructions를 수식합니다."
        },
        {
            "id": "Unit_09_Participle_6", "question_no": 6,
            "question": "Once _______, the new software will improve our data processing speed.",
            "options": {
                "d": "installation",
                "a": "install",
                "c": "installed",
                "b": "installing"
            },
            "answer": "c",
            "classification": "pa4",
            "explanation": "[해설] 소프트웨어가 '설치되면'이라는 수동의 의미이므로 과거분사 installed가 적절합니다."
        },
        {
            "id": "Unit_09_Participle_7", "question_no": 7,
            "question": "The audience was _______ by the speaker's inspiring presentation.",
            "options": {
                "c": "moved",
                "b": "moving",
                "d": "movement",
                "a": "move"
            },
            "answer": "c",
            "classification": "pa3",
            "explanation": "[해설] 청중(사람)이 감동을 '받은' 것이므로 과거분사 moved가 정답입니다."
        },
        {
            "id": "Unit_09_Participle_8", "question_no": 8,
            "question": "_______ by the high cost of production, the company looked for cheaper suppliers.",
            "options": {
                "b": "Concerning",
                "c": "Concerned",
                "a": "Concern",
                "d": "Concernment"
            },
            "answer": "c",
            "classification": "pa4",
            "explanation": "[해설] 분사구문 주어인 회사가 생산 비용에 의해 '우려하게 된(걱정하는)' 상태이므로 과거분사 Concerned가 정답입니다."
        },
        {
            "id": "Unit_09_Participle_9", "question_no": 9,
            "question": "There are several issues _______ the current project that need to be addressed.",
            "options": {
                "c": "concerned",
                "d": "concerningly",
                "b": "concerning",
                "a": "concern"
            },
            "answer": "b",
            "classification": "pa2",
            "explanation": "[해설] '~에 관한'이라는 의미의 현재분사 concerning이 명사 issues를 뒤에서 수식합니다. (전치사처럼 쓰임)"
        },
        {
            "id": "Unit_09_Participle_10", "question_no": 10,
            "question": "While _______ the documents, I found several errors in the financial report.",
            "options": {
                "b": "reviewing",
                "d": "reviews",
                "a": "review",
                "c": "reviewed"
            },
            "answer": "b",
            "classification": "pa4",
            "explanation": "[해설] 접속사(While) 뒤에서 내가 문서를 '검토하는 동안'이라는 능동의 진행 의미이므로 현재분사 reviewing이 적절합니다."
        },
        {
            "id": "Unit_09_Participle_11", "question_no": 11,
            "question": "Many people find the new tax regulations _______.",
            "options": {
                "c": "confusing",
                "d": "confusion",
                "b": "confused",
                "a": "confuse"
            },
            "answer": "c",
            "classification": "pa3",
            "explanation": "[해설] 규정(사물)이 혼란을 '주는' 것이므로 목적보어 자리에 현재분사 confusing이 옵니다."
        },
        {
            "id": "Unit_09_Participle_12", "question_no": 12,
            "question": "_______ the city for ten years, he knew all the hidden landmarks.",
            "options": {
                "d": "Inhabitant",
                "c": "Lived",
                "b": "Living",
                "a": "Live"
            },
            "answer": "b",
            "classification": "pa4",
            "explanation": "[해설] 능동의 분사구문으로, 그가 '살았기 때문에'라는 의미를 나타내는 Living이 적절합니다."
        },
        {
            "id": "Unit_09_Participle_13", "question_no": 13,
            "question": "The proposal _______ by the marketing team was highly praised.",
            "options": {
                "d": "submission",
                "c": "submitted",
                "a": "submit",
                "b": "submitting"
            },
            "answer": "c",
            "classification": "pa2",
            "explanation": "[해설] 제안서가 마케팅 팀에 의해 '제출된' 것이므로 과거분사 submitted가 proposal을 수식합니다."
        },
        {
            "id": "Unit_09_Participle_14", "question_no": 14,
            "question": "The manager was _______ with the quality of the final report.",
            "options": {
                "a": "satisfy",
                "d": "satisfaction",
                "c": "satisfied",
                "b": "satisfying"
            },
            "answer": "c",
            "classification": "pa3",
            "explanation": "[해설] 매니저(사람)가 보고서에 '만족하게 된' 것이므로 과거분사 satisfied가 적절합니다."
        },
        {
            "id": "Unit_09_Participle_15", "question_no": 15,
            "question": "_______ from a distance, the building looks like a giant pyramid.",
            "options": {
                "b": "Viewing",
                "c": "Viewed",
                "a": "View",
                "d": "Viewable"
            },
            "answer": "c",
            "classification": "pa4",
            "explanation": "[해설] 분사구문의 주어인 건물이 '보여지는' 수동의 관계이므로 과거분사 Viewed가 정답입니다."
        }
    ],
    "Unit_10_Adverb_Conjunctions": [
        {
            "id": "Unit_10_Adverb_Conjunctions_1", "question_no": 1,
            "question": "The shipment was delayed _______ the heavy snowstorm in the northern region.",
            "options": {
                "c": "although",
                "b": "because of",
                "a": "because",
                "d": "since"
            },
            "answer": "b",
            "classification": "c4",
            "explanation": "[해설] 빈칸 뒤에 주어+동사가 없는 명사구(the heavy snowstorm)가 왔으므로 전치사인 because of가 정답입니다."
        },
        {
            "id": "Unit_10_Adverb_Conjunctions_2", "question_no": 2,
            "question": "_______ the CEO was busy, he took the time to meet with the new interns.",
            "options": {
                "d": "Otherwise",
                "a": "Despite",
                "c": "Although",
                "b": "Unless"
            },
            "answer": "c",
            "classification": "c3",
            "explanation": "[해설] 'CEO가 바빴음에도 불구하고'라는 양보의 의미이며 뒤에 주어+동사가 있으므로 부사절 접속사 Although가 적절합니다."
        },
        {
            "id": "Unit_10_Adverb_Conjunctions_3", "question_no": 3,
            "question": "Please remain in your seats _______ the plane has come to a complete stop.",
            "options": {
                "a": "until",
                "d": "by",
                "c": "following",
                "b": "during"
            },
            "answer": "a",
            "classification": "c3",
            "explanation": "[해설] '비행기가 완전히 멈출 때까지'라는 시간의 접속사가 필요하므로 until이 정답입니다. (during은 전치사)"
        },
        {
            "id": "Unit_10_Adverb_Conjunctions_4", "question_no": 4,
            "question": "The company will hire more staff _______ the sales volume increases next quarter.",
            "options": {
                "b": "whether",
                "a": "if",
                "d": "despite",
                "c": "because of"
            },
            "answer": "a",
            "classification": "c3",
            "explanation": "[해설] '~한다면'이라는 조건의 의미를 나타내는 접속사 if가 문맥상 가장 적절합니다."
        },
        {
            "id": "Unit_10_Adverb_Conjunctions_5", "question_no": 5,
            "question": "_______ the power outage, the data center continued to operate using generators.",
            "options": {
                "c": "During",
                "b": "Even though",
                "d": "As if",
                "a": "While"
            },
            "answer": "c",
            "classification": "c4",
            "explanation": "[해설] 명사구(the power outage) 앞이므로 전치사가 와야 합니다. 문맥상 '정전 동안'이라는 뜻의 During이 적절합니다."
        },
        {
            "id": "Unit_10_Adverb_Conjunctions_6", "question_no": 6,
            "question": "You should keep your receipts _______ you need to return any items.",
            "options": {
                "d": "provided",
                "c": "in spite of",
                "a": "in case",
                "b": "so that"
            },
            "answer": "a",
            "classification": "c3",
            "explanation": "[해설] '~한 경우를 대비하여'라는 의미의 접속사 in case가 정답입니다."
        },
        {
            "id": "Unit_10_Adverb_Conjunctions_7", "question_no": 7,
            "question": "Neither the marketing manager _______ the sales director was available for comment.",
            "options": {
                "c": "nor",
                "a": "or",
                "d": "but",
                "b": "and"
            },
            "answer": "c",
            "classification": "c2",
            "explanation": "[해설] 상관 접속사 Neither A nor B 구문입니다."
        },
        {
            "id": "Unit_10_Adverb_Conjunctions_8", "question_no": 8,
            "question": "The presentation was _______ informative and entertaining for all attendees.",
            "options": {
                "a": "both",
                "b": "either",
                "d": "whether",
                "c": "not only"
            },
            "answer": "a",
            "classification": "c2",
            "explanation": "[해설] both A and B 구문으로 '유익하고 재미있는 둘 다'를 의미합니다."
        },
        {
            "id": "Unit_10_Adverb_Conjunctions_9", "question_no": 9,
            "question": "We will proceed with the plan _______ there are no further objections.",
            "options": {
                "b": "in order that",
                "c": "whereas",
                "d": "even if",
                "a": "as long as"
            },
            "answer": "a",
            "classification": "c3",
            "explanation": "[해설] '~하는 한'이라는 조건/기간의 의미를 나타내는 as long as가 적절합니다."
        },
        {
            "id": "Unit_10_Adverb_Conjunctions_10", "question_no": 10,
            "question": "The store is offering a discount _______ attract more customers.",
            "options": {
                "b": "in order to",
                "a": "so that",
                "d": "given that",
                "c": "because"
            },
            "answer": "b",
            "classification": "i3",
            "explanation": "[해설] 빈칸 뒤에 동사원형(attract)이 왔으므로 '~하기 위해서'라는 뜻의 전치사적 표현인 in order to가 정답입니다."
        },
        {
            "id": "Unit_10_Adverb_Conjunctions_11", "question_no": 11,
            "question": "Mr. Henderson will attend the conference _______ his assistant is sick.",
            "options": {
                "a": "as though",
                "d": "nonetheless",
                "c": "whether",
                "b": "even if"
            },
            "answer": "b",
            "classification": "c3",
            "explanation": "[해설] '비록 ~일지라도'라는 양보의 의미인 even if가 문맥상 가장 자연스럽습니다."
        },
        {
            "id": "Unit_10_Adverb_Conjunctions_12", "question_no": 12,
            "question": "The new policy applies to both full-time _______ part-time employees.",
            "options": {
                "d": "but also",
                "c": "and",
                "a": "or",
                "b": "nor"
            },
            "answer": "c",
            "classification": "c2",
            "explanation": "[해설] 상관 접속사 both A and B 구문입니다."
        },
        {
            "id": "Unit_10_Adverb_Conjunctions_13", "question_no": 13,
            "question": "_______ the deadline is approaching, we must speed up the production process.",
            "options": {
                "a": "Since",
                "c": "During",
                "d": "Unless",
                "b": "Because of"
            },
            "answer": "a",
            "classification": "c3",
            "explanation": "[해설] '~때문에'라는 이유를 나타내는 접속사 Since가 주어+동사 절을 이끕니다."
        },
        {
            "id": "Unit_10_Adverb_Conjunctions_14", "question_no": 14,
            "question": "You can either call our office _______ send an email for technical support.",
            "options": {
                "b": "or",
                "c": "but",
                "d": "yet",
                "a": "and"
            },
            "answer": "b",
            "classification": "c2",
            "explanation": "[해설] 상관 접속사 either A or B 구문입니다."
        },
        {
            "id": "Unit_10_Adverb_Conjunctions_15", "question_no": 15,
            "question": "The factory will stop production _______ the environmental inspection is completed.",
            "options": {
                "c": "whereas",
                "a": "once",
                "d": "so that",
                "b": "while"
            },
            "answer": "a",
            "classification": "c3",
            "explanation": "[해설] '일단 ~하면'이라는 의미의 접속사 once가 문맥상 적절합니다."
        }
    ],
    "Unit_11_Relative_Clauses": [
        {
            "id": "Unit_11_Relative_Clauses_1", "question_no": 1,
            "question": "The board of directors appointed Mr. Aris, _______ expertise in corporate law is well known throughout the industry.",
            "options": {
                "b": "whom",
                "c": "whose",
                "d": "that",
                "a": "who"
            },
            "answer": "c",
            "classification": "ac1",
            "explanation": "[해설] 선행사 Mr. Aris와 뒤의 명사 expertise(전문 지식)가 소유의 관계이므로 소유격 관계대명사 whose가 정답입니다."
        },
        {
            "id": "Unit_11_Relative_Clauses_2", "question_no": 2,
            "question": "The high-precision equipment _______ the laboratory recently acquired requires specialized training to operate.",
            "options": {
                "a": "what",
                "b": "which",
                "d": "where",
                "c": "whose"
            },
            "answer": "b",
            "classification": "ac1",
            "explanation": "[해설] acquire(습득하다/취득하다)의 목적어가 비어 있는 목적격 관계대명사 자리입니다. 선행사가 사물이므로 which가 적절합니다. (what은 선행사를 포함하므로 불가)"
        },
        {
            "id": "Unit_11_Relative_Clauses_3", "question_no": 3,
            "question": "We have interviewed ten candidates for the senior position, several of _______ possess extensive international experience.",
            "options": {
                "a": "who",
                "d": "those",
                "c": "them",
                "b": "whom"
            },
            "answer": "b",
            "classification": "ac3",
            "explanation": "[해설] 전치사 of의 목적어 자리이면서 두 문장을 연결하는 관계대명사가 필요하므로 목적격 whom이 정답입니다. (them은 접속사 없이 문장을 연결할 수 없음)"
        },
        {
            "id": "Unit_11_Relative_Clauses_4", "question_no": 4,
            "question": "The specific circumstances _______ the breach of contract occurred are being investigated by the legal team.",
            "options": {
                "c": "on which",
                "b": "under which",
                "a": "at which",
                "d": "for which"
            },
            "answer": "b",
            "classification": "ac4",
            "explanation": "[해설] '상황 하에서(under circumstances)'라는 표현과 결합하여 '계약 위반이 발생한 상황'을 의미하므로 under which가 가장 적절합니다."
        },
        {
            "id": "Unit_11_Relative_Clauses_5", "question_no": 5,
            "question": "Individuals _______ to renew their membership are advised to visit the registration desk before the end of the month.",
            "options": {
                "d": "wishes",
                "a": "wish",
                "b": "wished",
                "c": "wishing"
            },
            "answer": "c",
            "classification": "ac5",
            "explanation": "[해설] 'Individuals (who are) wishing' 구조로 현재분사가 관계대명사+동사 역할을 대신하여 명사를 수식합니다."
        },
        {
            "id": "Unit_11_Relative_Clauses_6", "question_no": 6,
            "question": "The automated system provides a detailed log of every instance _______ a security alert is triggered.",
            "options": {
                "d": "what",
                "c": "which",
                "a": "when",
                "b": "where"
            },
            "answer": "a",
            "classification": "ac6",
            "explanation": "[해설] 선행사 instance(사례/경우)가 시간적/상황적 시점을 의미하므로 관계부사 when이 가장 적절합니다."
        },
        {
            "id": "Unit_11_Relative_Clauses_7", "question_no": 7,
            "question": "The newly proposed policy, _______ aims to reduce operational costs, will be implemented starting next quarter.",
            "options": {
                "b": "which",
                "c": "what",
                "d": "who",
                "a": "that"
            },
            "answer": "b",
            "classification": "ac1",
            "explanation": "[해설] 계속적 용법(콤마 뒤)에서는 관계대명사 that을 사용할 수 없으므로 which가 정답입니다."
        },
        {
            "id": "Unit_11_Relative_Clauses_8", "question_no": 8,
            "question": "The facility _______ the research and development team currently works is undergoing major renovations.",
            "options": {
                "c": "that",
                "a": "which",
                "b": "where",
                "d": "whom"
            },
            "answer": "b",
            "classification": "ac6",
            "explanation": "[해설] 뒤에 '연구팀이 일한다(works)'는 완전한 문장이 왔으므로 장소의 관계부사 where가 정답입니다."
        },
        {
            "id": "Unit_11_Relative_Clauses_9", "question_no": 9,
            "question": "All employees _______ computers are not yet updated must contact the IT department immediately.",
            "options": {
                "c": "whose",
                "a": "who",
                "b": "whom",
                "d": "which"
            },
            "answer": "c",
            "classification": "ac1",
            "explanation": "[해설] 선행사(employees)와 명사(computers)의 소유 관계를 나타내는 whose가 정답입니다."
        },
        {
            "id": "Unit_11_Relative_Clauses_10", "question_no": 10,
            "question": "Mr. Thompson is the consultant _______ the firm has relied for more than a decade.",
            "options": {
                "b": "whom",
                "c": "on whom",
                "a": "who",
                "d": "which"
            },
            "answer": "c",
            "classification": "ac4",
            "explanation": "[해설] 'rely on(~에 의지하다)'의 전치사 on이 관계대명사 앞으로 이동한 형태인 on whom이 정답입니다."
        },
        {
            "id": "Unit_11_Relative_Clauses_11", "question_no": 11,
            "question": "The architect _______ designs were selected for the new headquarters won an international award.",
            "options": {
                "b": "whose",
                "c": "which",
                "a": "who",
                "d": "whom"
            },
            "answer": "b",
            "classification": "ac1",
            "explanation": "[해설] architect(설계자)의 designs(설계안)라는 소유 관계이므로 소유격 whose가 적절합니다."
        },
        {
            "id": "Unit_11_Relative_Clauses_12", "question_no": 12,
            "question": "Any applicant _______ to submit a complete portfolio will be automatically disqualified from the selection process.",
            "options": {
                "d": "failure",
                "c": "fails",
                "a": "fail",
                "b": "failing"
            },
            "answer": "b",
            "classification": "ac5",
            "explanation": "[해설] 주어(Any applicant)를 수식하는 관계절 'who fails'를 대신하는 현재분사 failing이 적절합니다."
        },
        {
            "id": "Unit_11_Relative_Clauses_13", "question_no": 13,
            "question": "The reasons _______ the project was abandoned remain confidential according to the company's policy.",
            "options": {
                "a": "why",
                "b": "which",
                "d": "how",
                "c": "where"
            },
            "answer": "a",
            "classification": "ac6",
            "explanation": "[해설] 선행사 the reasons와 호응하는 관계부사 why가 적절합니다."
        },
        {
            "id": "Unit_11_Relative_Clauses_14", "question_no": 14,
            "question": "The investors, several of _______ were present at the meeting, expressed concern about the declining revenue.",
            "options": {
                "b": "whom",
                "d": "them",
                "a": "who",
                "c": "which"
            },
            "answer": "b",
            "classification": "ac3",
            "explanation": "[해설] 콤마 뒤에서 선행사 'The investors'의 일부를 나타내는 '수량표현 + of + 관계대명사' 구조입니다. 사람 목적격이므로 whom이 정답입니다."
        },
        {
            "id": "Unit_11_Relative_Clauses_15", "question_no": 15,
            "question": "The software update, _______ we have been waiting for months, finally addresses the compatibility issues.",
            "options": {
                "c": "which",
                "b": "what",
                "d": "whom",
                "a": "that"
            },
            "answer": "c",
            "classification": "ac1",
            "explanation": "[해설] 계속적 용법(콤마)이며 사물 선행사를 지칭하므로 which가 정답입니다. for의 목적어가 비어 있는 구조입니다."
        }
    ],
    "Unit_12_Noun_Clauses": [
        {
            "id": "Unit_12_Noun_Clauses_1", "question_no": 1,
            "question": "The internal audit team must determine _______ the security protocols were bypassed intentionally.",
            "options": {
                "d": "which",
                "c": "what",
                "a": "that",
                "b": "whether"
            },
            "answer": "b",
            "classification": "nc2",
            "explanation": "[해설] determine의 목적어 자리이며, '의도적으로 우회되었는지 아닌지'라는 불확실한 내용을 확인하는 문맥이므로 whether가 적절합니다."
        },
        {
            "id": "Unit_12_Noun_Clauses_2", "question_no": 2,
            "question": "_______ the new tax legislation will impact small-scale enterprises is still a subject of debate.",
            "options": {
                "b": "Who",
                "a": "How",
                "c": "Which",
                "d": "What"
            },
            "answer": "a",
            "classification": "nc3",
            "explanation": "[해설] 문장의 전체 주어 역할을 하는 명사절을 이끌며, '어떻게 영향을 미칠지'라는 방식을 나타내므로 How가 정답입니다."
        },
        {
            "id": "Unit_12_Noun_Clauses_3", "question_no": 3,
            "question": "Please inform the department heads _______ the mandatory training session has been rescheduled.",
            "options": {
                "c": "what",
                "b": "that",
                "d": "whether",
                "a": "which"
            },
            "answer": "b",
            "classification": "nc1",
            "explanation": "[해설] inform A B(A에게 B를 알리다) 구조에서 B 자리에 오는 명사절입니다. 뒤에 완전한 문장이 오므로 접속사 that이 적절합니다."
        },
        {
            "id": "Unit_12_Noun_Clauses_4", "question_no": 4,
            "question": "Market analysts are currently researching _______ consumers prefer eco-friendly packaging over traditional options.",
            "options": {
                "d": "who",
                "b": "what",
                "c": "which",
                "a": "why"
            },
            "answer": "a",
            "classification": "nc3",
            "explanation": "[해설] 연구의 내용이 '소비자들이 왜 친환경 포장을 선호하는지'에 대한 이유를 다루고 있으므로 관계부사 성격의 명사절 접속사 why가 적절합니다."
        },
        {
            "id": "Unit_12_Noun_Clauses_5", "question_no": 5,
            "question": "We have not yet received confirmation regarding _______ will lead the upcoming merger negotiations.",
            "options": {
                "d": "which",
                "c": "whose",
                "a": "whom",
                "b": "who"
            },
            "answer": "b",
            "classification": "nc3",
            "explanation": "[해설] 전치사 regarding의 목적어인 명사절 내에서 주어 역할을 수행해야 하므로 주격 의문사 who가 정답입니다."
        },
        {
            "id": "Unit_12_Noun_Clauses_6", "question_no": 6,
            "question": "It remains uncertain _______ the proposed budget will be sufficient to cover the unexpected maintenance costs.",
            "options": {
                "b": "if",
                "c": "what",
                "a": "that",
                "d": "which"
            },
            "answer": "b",
            "classification": "nc2",
            "explanation": "[해설] 가주어 It, 진주어절 구조에서 '불확실하다(uncertain)'는 형용사와 호응하여 '~인지 아닌지'를 뜻하는 if가 명사절 접속사로 적절합니다."
        },
        {
            "id": "Unit_12_Noun_Clauses_7", "question_no": 7,
            "question": "The human resources manager will explain _______ candidates should prepare for the technical interview.",
            "options": {
                "d": "that",
                "c": "which",
                "a": "what",
                "b": "how"
            },
            "answer": "a",
            "classification": "nc3",
            "explanation": "[해설] prepare의 목적어가 비어 있는 불완전한 문장이 명사절로 왔으므로, 목적어 역할을 할 수 있는 의문대명사 what이 정답입니다."
        },
        {
            "id": "Unit_12_Noun_Clauses_8", "question_no": 8,
            "question": "_______ the CEO decides to focus on international expansion depends on the year-end financial results.",
            "options": {
                "a": "Whether",
                "b": "If",
                "c": "That",
                "d": "What"
            },
            "answer": "a",
            "classification": "nc2",
            "explanation": "[해설] 문두에서 주어 역할을 하는 명사절에는 if를 쓸 수 없으므로 whether가 정답입니다."
        },
        {
            "id": "Unit_12_Noun_Clauses_9", "question_no": 9,
            "question": "The legal consultant pointed out _______ several clauses in the agreement were subject to misinterpretation.",
            "options": {
                "b": "that",
                "a": "what",
                "d": "how",
                "c": "which"
            },
            "answer": "b",
            "classification": "nc1",
            "explanation": "[해설] pointed out의 목적어절로 완전한 문장이 왔으므로 사실을 전달하는 접속사 that이 적절합니다."
        },
        {
            "id": "Unit_12_Noun_Clauses_10", "question_no": 10,
            "question": "The shipping department needs to know _______ of the two couriers offers a more reliable tracking system.",
            "options": {
                "d": "whose",
                "a": "what",
                "c": "who",
                "b": "which"
            },
            "answer": "b",
            "classification": "nc3",
            "explanation": "[해설] '둘 중 어느 쪽'이라는 선택의 범위가 주어졌으므로 의문형용사/대명사 which가 적절합니다."
        },
        {
            "id": "Unit_12_Noun_Clauses_11", "question_no": 11,
            "question": "No one can predict _______ the volatility of the stock market will stabilize after the election.",
            "options": {
                "a": "when",
                "b": "that",
                "d": "who",
                "c": "which"
            },
            "answer": "a",
            "classification": "nc3",
            "explanation": "[해설] '언제 안정화될지'라는 시간적 시점을 묻는 명사절이므로 when이 적절합니다."
        },
        {
            "id": "Unit_12_Noun_Clauses_12", "question_no": 12,
            "question": "The board's decision depends heavily on _______ the regional director presents the quarterly performance data.",
            "options": {
                "a": "what",
                "c": "that",
                "d": "which",
                "b": "how"
            },
            "answer": "b",
            "classification": "nc3",
            "explanation": "[해설] 전치사 on의 목적어절로, 데이터의 제시 '방법/방식'을 의미하는 how가 문맥상 가장 자연스럽습니다."
        },
        {
            "id": "Unit_12_Noun_Clauses_13", "question_no": 13,
            "question": "The inquiry revealed _______ the technical failure was caused by a lack of regular maintenance.",
            "options": {
                "c": "what",
                "a": "whether",
                "d": "which",
                "b": "that"
            },
            "answer": "b",
            "classification": "nc1",
            "explanation": "[해설] 조사 결과 밝혀진 '구체적인 사실'을 나타내므로 명사절 접속사 that이 정답입니다."
        },
        {
            "id": "Unit_12_Noun_Clauses_14", "question_no": 14,
            "question": "The supervisor asked the team _______ they had completed all the tasks assigned for the morning.",
            "options": {
                "b": "that",
                "a": "whether",
                "d": "which",
                "c": "what"
            },
            "answer": "a",
            "classification": "nc2",
            "explanation": "[해설] asked(물었다)라는 동사는 질문의 내용을 목적으로 취하므로 '~했는지 아닌지'를 뜻하는 whether가 적절합니다. (that은 확정된 사실을 말할 때 씀)"
        },
        {
            "id": "Unit_12_Noun_Clauses_15", "question_no": 15,
            "question": "We are evaluating _______ our current suppliers are meeting the quality standards established last year.",
            "options": {
                "d": "that",
                "c": "which",
                "b": "what",
                "a": "if"
            },
            "answer": "a",
            "classification": "nc2",
            "explanation": "[해설] 평가의 내용이 '품질 기준을 충족하는지 여부'이므로 if(~인지 아닌지)가 타동사의 목적어절 접속사로 적절합니다."
        }
    ]
};
