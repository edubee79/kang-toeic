import { PracticeSet } from './rc_part7_types';

export const rcPart7Test10: PracticeSet[] = [
    // Questions 176-180: Double Passage (Webinar description + E-mail)
    {
        id: "p7-t10-set11",
        questionRange: "176-180",
        setType: "Double",
        passages: [
            {
                id: "p7-t10-s11-p1",
                contextType: "P3",
                docType: "INFORMATION",
                title: "Introduction to Project Management",
                content: `Online Webinar\n18 January, 9 A.M.–2 P.M.\nPresenter: Shrijana Patel\nCost: €45\n(Register by 10 January and receive a 10% discount!)\n\nThis live webinar offers attendees a better understanding of how to improve the role that project management plays in their organizations. The presentation will provide the basics of managing projects and workers. Participants will learn strategies and best practices to effectively oversee their projects and foster buy-in from key players.\n\nParticipants will explore a simple step-by-step process for managing projects and learn how to use tools and documents such as scope statements and communication plans. The presenter will also cover topics such as developing a project's business case and facilitating productive team meetings.`
            },
            {
                id: "p7-t10-s11-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Maya Liu\nFrom: Leonard Chung\nSubject: Webinar\nDate: 2 January\n\nDear Ms. Liu:\n\nThank you for sending me the webinar announcement. As a novice supervisor, I need to get all the training I can, but I'm not sure whether I will be able to take advantage of this particular offering. I am scheduled to present a detailed project update at my company's quarterly division meeting on the same day, and I don't think anyone else on the team would be able to take my place.\n\nDo you know whether the webinar will be recorded or whether there will be a similar webinar at a later date? I have no schedule conflicts after 29 January.\n\nLeonard Chung`
            }
        ],
        questions: [
            {
                id: "p7-t10-q176",
                questionNo: 176,
                text: "What is indicated about the webinar?",
                options: {
                    "A": "It includes a session on preparing for job interviews.",
                    "B": "It will show participants how to use specific tools.",
                    "C": "There is no charge for participants.",
                    "D": "Registration closes on January 10."
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "웨비나 설명에서 참가자들이 범위 명세서 및 커뮤니케이션 계획과 같은 도구와 문서를 사용하는 방법을 배울 것이라고 명시되어 있습니다."
            },
            {
                id: "p7-t10-q177",
                questionNo: 177,
                text: "In the webinar description, the word \"cover\" in paragraph 2, line 3, is closest in meaning to",
                options: {
                    "A": "protect",
                    "B": "spread",
                    "C": "ask for",
                    "D": "talk about"
                },
                correctAnswer: "D",
                classification: "P7_VOCABULARY",
                explanation: "\"cover\"는 문맥상 특정 주제를 \"다루다\", \"논의하다\"의 의미로 사용되었습니다."
            },
            {
                id: "p7-t10-q178",
                questionNo: 178,
                text: "What is one purpose of the e-mail?",
                options: {
                    "A": "To explain a scheduling conflict",
                    "B": "To request a deadline extension",
                    "C": "To apologize for arriving late to an event",
                    "D": "To ask for help in preparing a presentation"
                },
                correctAnswer: "A",
                classification: "P7_PURPOSE",
                explanation: "Mr. Chung은 웨비나 당일 회사의 분기별 회의에서 발표를 해야 하므로 참석할 수 없다는 일정 충돌(scheduling conflict)을 설명하고 있습니다."
            },
            {
                id: "p7-t10-q179",
                questionNo: 179,
                text: "What is suggested about Mr. Chung?",
                options: {
                    "A": "He plans to record his presentation.",
                    "B": "He often trains new project managers.",
                    "C": "He attends webinars on a regular basis.",
                    "D": "He has relatively little experience as a supervisor."
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                explanation: "이메일에서 자신을 초보 감독자(novice supervisor)라고 지칭했으므로, 감독자로서의 경험이 적음을 알 수 있습니다."
            },
            {
                id: "p7-t10-q180",
                questionNo: 180,
                text: "On what date is Mr. Chung scheduled to give a presentation?",
                options: {
                    "A": "January 2",
                    "B": "January 10",
                    "C": "January 18",
                    "D": "January 29"
                },
                correctAnswer: "C",
                classification: "P7_LINK",
                explanation: "Mr. Chung은 웨비나와 같은 날(on the same day)에 발표를 해야 한다고 했습니다. 지문 1에서 웨비나 날짜는 1월 18일입니다."
            }
        ]
    },
    // Questions 181-185: Double Passage (Article + Review)
    {
        id: "p7-t10-set12",
        questionRange: "181-185",
        setType: "Double",
        passages: [
            {
                id: "p7-t10-s12-p1",
                contextType: "P3",
                docType: "ARTICLE",
                content: `GALWAY (4 March)—Adelle Rosier, a third-generation soap maker, opened her shop in Galway eight years ago. Nestled behind Eglinton Gourmet Market on Raven Terrace, her business, Rosier and Finch, is booming.\n\nMs. Rosier credits the success to her commitment to lifelong learning. "I have increased my sales knowledge by taking online courses in business-to-business (B2B) marketing."\n\nMs. Rosier adds that those courses built her confidence in selling her products directly to hotels. "I managed to persuade a number of boutique hotels in Europe to try my products." Rosier and Finch products are now at the Bruadair Hotel in Galway, the Florinda Grand in Lisbon, and the Zerra Inn in Reykjavík.\n\nMs. Rosier further points out that many customers first learn of her products during a hotel stay and then purchase them for themselves.`
            },
            {
                id: "p7-t10-s12-p2",
                contextType: "P3",
                docType: "REVIEW",
                title: "Guest Review: Florinda Grand",
                content: `Based on online recommendations, I decided to stay at Florinda Grand. While this hotel is smaller than the usual places I stay, it has every comfort. In addition to a tastefully decorated room, there were gourmet treats and the finest soap and shampoo available for me to enjoy. My only regret is that I was in Lisbon for just three days. Next time, I will stay longer.\n—posted by Ashton Wu, 7 June`
            }
        ],
        questions: [
            {
                id: "p7-t10-q181",
                questionNo: 181,
                text: "What is the purpose of the article?",
                options: {
                    "A": "To provide annual hotel ratings",
                    "B": "To announce the opening of a store",
                    "C": "To profile a small-business owner",
                    "D": "To discuss online shopping trends"
                },
                correctAnswer: "C",
                classification: "P7_PURPOSE",
                explanation: "기사는 Adelle Rosier라는 비누 사업가와 그녀의 성공 요인(B2B 마케팅 학습 등)에 대해 소개하고 있습니다."
            },
            {
                id: "p7-t10-q182",
                questionNo: 182,
                text: "How did Ms. Rosier improve her marketing skills?",
                options: {
                    "A": "By visiting family members overseas",
                    "B": "By joining a professional association",
                    "C": "By working in the hotel industry",
                    "D": "By participating in online classes"
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "지문 1에서 그녀는 B2B 마케팅에 관한 온라인 코스(online courses)를 수강하여 판매 지식을 늘렸다고 언급했습니다."
            },
            {
                id: "p7-t10-q183",
                questionNo: 183,
                text: "What is stated about Rosier and Finch?",
                options: {
                    "A": "It sells its products to other businesses.",
                    "B": "It has shops in cities around the world.",
                    "C": "It is redesigning its e-commerce site.",
                    "D": "It offers courses on soapmaking."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "기사에서 그녀가 호텔들(boutique hotels)을 설득하여 제품을 공급하고 있다고 했으므로 B2B(기업 간 거래) 사업을 하고 있음을 알 수 있습니다."
            },
            {
                id: "p7-t10-q184",
                questionNo: 184,
                text: "What is suggested about Mr. Wu?",
                options: {
                    "A": "He manages Eglinton Gourmet Market.",
                    "B": "He purchased Rosier and Finch products online.",
                    "C": "He met Ms. Rosier on a business trip.",
                    "D": "He likes Rosier and Finch products."
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                explanation: "Mr. Wu는 Florinda Grand 호텔에서 '최고급 비누와 샴푸'를 즐겼다고 했습니다. 지문 1에서는 해당 호텔에 Rosier and Finch 제품이 공급된다고 언급되어 있습니다."
            },
            {
                id: "p7-t10-q185",
                questionNo: 185,
                text: "According to the review, what was Mr. Wu not pleased about?",
                options: {
                    "A": "The length of his trip",
                    "B": "The decorations in the room",
                    "C": "The comfort of the pillows",
                    "D": "The size of the hotel"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "Mr. Wu는 리뷰 끝에서 '유일한 후회는 리스본에 단 3일간만 머물렀다는 것'이라고 언급했습니다."
            }
        ]
    },
    // Questions 186-190: Triple Passage (Advertisement + Forum Post + Outline)
    {
        id: "p7-t10-set13",
        questionRange: "186-190",
        setType: "Triple",
        passages: [
            {
                id: "p7-t10-s13-p1",
                contextType: "P4",
                docType: "ADVERTISEMENT",
                title: "Train to Achieve (TTA)",
                content: `Train to Achieve (TTA)—Our classes prepare you to succeed! Profiled in Business Directors Nigeria, TTA is an innovative online training provider in West Africa. Classes include video lectures and forums across various business fields.\n\n- Social Media Marketing (TTA1504): Taught by Marcus Akpan.\n- Successful Freelance Writer (TTA1283): Taught by Brenda Abande.\n- Starting an Internet Radio Station (TTA7629): Taught by Natalie Kabiru.\n- Basics of Graphic Design (TTA7633): Taught by Doug Umaru.`
            },
            {
                id: "p7-t10-s13-p2",
                contextType: "P7",
                docType: "FORUM_POST",
                title: "Discussion Forum: TTA1504",
                content: `Posted by Joseph Egbe. I remember chatting with some of you on Brenda Abande's course forum previously. For this marketing class, I had a videoconference with Mr. Akpan about my baked goods food truck. He suggested I add a section with vivid images of my products to my website outline. It was helpful advice.`
            },
            {
                id: "p7-t10-s13-p3",
                contextType: "P3",
                docType: "OUTLINE",
                title: "Egbe's Bakery—Website Outline",
                content: `- Section 1: Menu and price list\n- Section 2: Photos of our delicious treats\n- Section 3: Catering services\n- Section 4: Ingredient lists`
            }
        ],
        questions: [
            {
                id: "p7-t10-q186",
                questionNo: 186,
                text: "What is indicated about TTA?",
                options: {
                    "A": "It was founded by a graphic designer.",
                    "B": "It publishes a business newsletter.",
                    "C": "It is recommended by industry professionals.",
                    "D": "It has classroom facilities in cities throughout West Africa."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                explanation: "광고 서두에 'Business Directors Nigeria' 잡지에 소개되었다고 언급되었는데, 이는 업계 관련 매체에서 인정받고 있음을 시사합니다."
            },
            {
                id: "p7-t10-q187",
                questionNo: 187,
                text: "According to the advertisement, what does TTA provide to students who finish a class?",
                options: {
                    "A": "A résumé writing workshop",
                    "B": "Free discount on a follow-up class",
                    "C": "A list of current job postings",
                    "D": "A certification document"
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "광고에서 수업 이수 시 '공식 교육 수료증(official Certificate of Training)'을 제공한다고 명시되어 있습니다."
            },
            {
                id: "p7-t10-q188",
                questionNo: 188,
                text: "What is most likely true about Mr. Egbe?",
                options: {
                    "A": "He helped design a discussion forum.",
                    "B": "He writes for Business Directors Nigeria.",
                    "C": "He develops videoconferencing software.",
                    "D": "He has previously taken a TTA class."
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                explanation: "Egbe 씨는 포럼 게시물(지문 2)에서 예전에 'Brenda Abande의 코스 포럼'에서도 본 적이 있다고 했으므로 이전에 다른 수업을 들었음을 알 수 있습니다."
            },
            {
                id: "p7-t10-q189",
                questionNo: 189,
                text: "What TTA class is Mr. Egbe enrolled in?",
                options: {
                    "A": "Introduction to Social Media Marketing",
                    "B": "Become a Successful Freelance Writer",
                    "C": "Starting an Internet Radio Station",
                    "D": "Basics of Graphic Design"
                },
                correctAnswer: "A",
                classification: "P7_LINK",
                explanation: "포럼 제목에 Egbe 씨가 'TTA1504' 수업을 듣는다고 되어 있고, 광고(지문 1)에서 TTA1504는 'Introduction to Social Media Marketing'입니다."
            },
            {
                id: "p7-t10-q190",
                questionNo: 190,
                text: "According to the outline, what did Mr. Egbe most likely add to the outline after speaking with Mr. Akpan?",
                options: {
                    "A": "Section 1",
                    "B": "Section 2",
                    "C": "Section 3",
                    "D": "Section 4"
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                explanation: "지문 2에서 Akpan 강사는 '시각적 이미지(vivid images)' 섹션을 추가하라고 조언했습니다. 지문 3의 개요에서 '사진(Photos)'이 포함된 섹션은 Section 2입니다."
            }
        ]
    },
    // Questions 191-195: Triple Passage (Article + Online Review + E-mail)
    {
        id: "p7-t10-set14",
        questionRange: "191-195",
        setType: "Triple",
        passages: [
            {
                id: "p7-t10-s14-p1",
                contextType: "P3",
                docType: "ARTICLE",
                title: "Caribbean Flavours Abound",
                content: `Orange Bay Kitchen has been serving up Jamaican flavours for nearly a year now. Owned by Keros Deshaides, the restaurant is a jewel in Nottingham's city centre. The menu includes curried goat and jerk chicken. Friday nights feature live reggae music.`
            },
            {
                id: "p7-t10-s14-p2",
                contextType: "P3",
                docType: "REVIEW",
                title: "DinersReview: Orange Bay Kitchen",
                content: `2/5 Stars. I visited at 7 P.M. yesterday. We were disappointed that the live music was cancelled. We ordered the jerk chicken; while the smoky flavour was great, the portions were smaller than expected. We had to order another appetizer. The head chef was friendly, though.\n—posted by Tamika Peterkin, 22 August`
            },
            {
                id: "p7-t10-s14-p3",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Tamika Peterkin\nFrom: Vera Singh, Owner\nDate: 24 August\n\nDear Ms. Peterkin, I apologize for your experience. Our head chef told me about the equipment malfunction that led to smaller portions. We've fixed it. Also, Chef Aldo Brown has updated the recipe for the spiced cabbage. We hope you'll visit again.`
            }
        ],
        questions: [
            {
                id: "p7-t10-q191",
                questionNo: 191,
                text: "What does the article mention about Orange Bay Kitchen?",
                options: {
                    "A": "It is currently hiring servers.",
                    "B": "It has a location on a quiet street.",
                    "C": "It has another location in Jamaica.",
                    "D": "It opened about a year ago."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "기사 서두에서 '거의 1년 동안(for nearly a year now)' 영업해왔다고 언급했습니다."
            },
            {
                id: "p7-t10-q192",
                questionNo: 192,
                text: "According to the article, what is one menu item at Orange Bay Kitchen?",
                options: {
                    "A": "Curried goat",
                    "B": "Grilled salmon",
                    "C": "Beef stew",
                    "D": "Fried plantains"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "기사 본문에서 메뉴 예시로 'curried goat'와 'jerk chicken' 등을 명시했습니다."
            },
            {
                id: "p7-t10-q193",
                questionNo: 193,
                text: "What is suggested about Ms. Peterkin's visit?",
                options: {
                    "A": "She was there on a Friday.",
                    "B": "She dined alone.",
                    "C": "She requested extra rice.",
                    "D": "She ordered dessert."
                },
                correctAnswer: "A",
                classification: "P7_LINK",
                explanation: "기사(지문 1)에서 라이브 음악은 '금요일 밤'에만 있다고 했고, 리뷰(지문 2)에서 라이브 음악을 기대하고 방문했으나 취소되었다고 했으므로 금요일 방문임을 알 수 있습니다."
            },
            {
                id: "p7-t10-q194",
                questionNo: 194,
                text: "What is a purpose of the e-mail?",
                options: {
                    "A": "To answer a question",
                    "B": "To offer an apology",
                    "C": "To request a review",
                    "D": "To confirm a reservation"
                },
                correctAnswer: "B",
                classification: "P7_PURPOSE",
                explanation: "이메일(지문 3)에서 소유주 Vera Singh은 고객의 좋지 않았던 경험에 대해 진심으로 사과(I sincerely apologize)하고 있습니다."
            },
            {
                id: "p7-t10-q195",
                questionNo: 195,
                text: "Whom did Ms. Peterkin most likely meet at Orange Bay Kitchen?",
                options: {
                    "A": "Ms. Roats",
                    "B": "Mr. Deshaides",
                    "C": "Mr. Brown",
                    "D": "Ms. Singh"
                },
                correctAnswer: "C",
                classification: "P7_LINK",
                explanation: "Peterkin 씨는 리뷰에서 '헤드 셰프'를 만났다고 했습니다. 지문 3에서 헤드 셰프의 이름은 'Aldo Brown'으로 확인됩니다."
            }
        ]
    },
    // Questions 196-200: Triple Passage (Invoice + Notice + E-mail)
    {
        id: "p7-t10-set15",
        questionRange: "196-200",
        setType: "Triple",
        passages: [
            {
                id: "p7-t10-s15-p1",
                contextType: "P5",
                docType: "INVOICE",
                content: `Client: Green Canyon | Date: June 10\nAccount: 4552-0\n\n- Garden soil: $1,170.00\n- Crushed gravel: $1,710.00\n- Paving stones: $1,770.00\nSubtotal: $4,650.00\nDiscount (10%): -$465.00\nDelivery: $350.00\nTotal: $4,535.00`
            },
            {
                id: "p7-t10-s15-p2",
                contextType: "P2",
                docType: "NOTICE",
                title: "Orbys Distributors",
                content: `To our valued customers: We are switching to electronic invoicing on August 1. Our incentives remain:\n- 10% discount for orders > $4,000\n- 20% discount for charitable organizations\n- Free delivery within 5 miles\n- Free samples for Frequent Buyer Club members.`
            },
            {
                id: "p7-t10-s15-p3",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Mary Peterson, Billing Dept\nFrom: Trevor Singh, Account Manager\nDate: September 12\n\nMary, William Tesoriero (Account 1012-4) reported his August invoice was late. He's one of our oldest customers and a Frequent Buyer Club member. I explained that the electronic rollout had issues. Please investigate and send the August invoice immediately.`
            }
        ],
        questions: [
            {
                id: "p7-t10-q196",
                questionNo: 196,
                text: "What does the invoice suggest about Green Canyon?",
                options: {
                    "A": "It owns a supply depot.",
                    "B": "It designs highways.",
                    "C": "It repairs old buildings.",
                    "D": "It is a landscaping company."
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                explanation: "송장(지문 1)의 주문 품목인 '흙, 자갈, 포장석' 등으로 보아 조경 사업과 관련이 깊음을 알 수 있습니다."
            },
            {
                id: "p7-t10-q197",
                questionNo: 197,
                text: "Why most likely did Green Canyon receive a discount?",
                options: {
                    "A": "It is a charitable organization.",
                    "B": "Its order total exceeded $4,000.",
                    "C": "It is located near an Orbys Distributors supply center.",
                    "D": "It belongs to the Frequent Buyer Club."
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                explanation: "송장(지문 1)의 소계가 $4,650이고, 공지(지문 2)에서 $4,000 초과 주문 시 10% 할인 혜택이 있다고 했습니다."
            },
            {
                id: "p7-t10-q198",
                questionNo: 198,
                text: "According to the notice, what is changing at Orbys Distributors?",
                options: {
                    "A": "Its e-mail address",
                    "B": "Its list of incentives",
                    "C": "Its invoicing system",
                    "D": "Its delivery schedule"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "공지 지문(지문 2)에서 기존 종이 송장에서 '전자 송장(electronic invoicing)'으로 시스템을 전환한다고 명시했습니다."
            },
            {
                id: "p7-t10-q199",
                questionNo: 199,
                text: "What is suggested about Mr. Tesoriero?",
                options: {
                    "A": "He did not meet with Mr. Singh.",
                    "B": "He recently moved his business location.",
                    "C": "He has been a customer for over twenty years.",
                    "D": "He is an employee of Orbys Distributors."
                },
                correctAnswer: "C",
                classification: "P7_LINK",
                explanation: "이메일(지문 3)에서 그는 '최초의 고객 중 한 명'이라고 했고, 공지(지문 2)에서 회사가 20년 이상(over twenty years ago) 되었다고 했으므로 20년 이상 고객임을 추론할 수 있습니다."
            },
            {
                id: "p7-t10-q200",
                questionNo: 200,
                text: "What does Mr. Singh ask Ms. Peterson to do?",
                options: {
                    "A": "Send a bill",
                    "B": "Solve a problem",
                    "C": "Confirm an order",
                    "D": "Update an account number"
                },
                correctAnswer: "A",
                classification: "P7_PURPOSE",
                explanation: "이메일 끝부분에서 지연된 '8월분 송장(invoice)'을 고객에게 보낼 것을 요청하고 있습니다."
            }
        ]
    }
];
