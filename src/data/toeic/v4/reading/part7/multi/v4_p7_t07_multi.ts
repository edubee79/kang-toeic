import { PracticeSet } from './types';

export const test7MultiData: PracticeSet[] = [
    // Questions 176-180: Double Passage (Web page + E-mail)
    {
        id: "v4-p7-t7-set11",
        vol: 4,
        questionRange: "176-180",
        setType: "Double",
        passages: [
            {
                id: "v4-p7-t7-s11-p1",
                contextType: "P4",
                docType: "WEB_PAGE",
                header: {
                    url: "https://www.sunnywelcomehotel.co.in"
                },
                content: [
                    "At the Sunny Welcome Hotel in Kolkata, we work hard to ensure that you enjoy your stay. Please note:",
                    "• Each room has a coffeemaker and complimentary coffee and tea. Guests may purchase snacks and other beverages in the vending areas located on each floor.",
                    "• Guests with small children may request a rollaway bed or crib for their rooms for no additional charge.",
                    "• The business center is open from 9:00 A.M. to 5:00 P.M. each day.",
                    "• The swimming pool and children's playground are open during daylight hours. Children must always be supervised by an adult.",
                    "• A deposit is necessary to guarantee a room reservation. The deposit will only be refunded if the reservation is cancelled or changed more than 24 hours prior to arrival.",
                    "• Guests may check in as early as 2:00 P.M. Checkout after noon on the day of departure is subject to an additional charge.",
                    "• Guests are required to present a passport or driver's license at the time of check-in.",
                    "• We offer free shuttle service to the airport. Guests can make arrangements at the front desk.",
                    "• Our reception desk is staffed 24 hours a day."
                ]
            },
            {
                id: "v4-p7-t7-s11-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: generalmanager@sunnywelcomehotel.co.in\nFrom: samuelramon@myemail.co.uk\nDate: 13 May\nSubject: Reservation number EX52417\n\nHello,\n\nMy family and I were very comfortable in the family suite at the Sunny Welcome Hotel in Kolkata last year, and we were looking forward to returning this year for a week starting on 17 April. Unfortunately, we suddenly had to postpone our trip until June, so I called the hotel on the morning of 17 April to change our reservation dates. I thought everything was in order, but when I opened my credit card statement this month, I discovered an additional charge from the Sunny Welcome Hotel.\n\nCould you please look into the matter? I believe that an error has been made and that I should be reimbursed. I would appreciate having the money credited to my account. We still plan to return to Kolkata later this year and anticipate an enjoyable stay at your hotel.\n\nYours sincerely,\nSamuel Ramon`
            }
        ],
        questions: [
            {
                id: "v4-p7-t7-q176",
                questionNo: 176,
                text: "According to the Web page, what are hotel guests asked to provide at check-in?",
                options: {
                    "A": "A home address",
                    "B": "Payment in advance",
                    "C": "Proof of identification",
                    "D": "A confirmation number"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "웹 페이지 하단에 '체크인 시 여권이나 운전면허증을 제시해야 한다(present a passport or driver's license)'고 명시되어 있습니다. 이는 신분 증명을 의미합니다."
            },
            {
                id: "v4-p7-t7-q177",
                questionNo: 177,
                text: "What is NOT included with a stay at the Sunny Welcome Hotel?",
                options: {
                    "A": "Hot beverages",
                    "B": "A light breakfast",
                    "C": "Airport shuttle service",
                    "D": "Use of a swimming pool"
                },
                correctAnswer: "B",
                classification: "P7_NEGATIVE",
                explanation: "커피와 차(Hot beverages), 셔틀 서비스, 수영장은 언급되어 있으나 조식(Breakfast)에 대한 언급은 없습니다."
            },
            {
                id: "v4-p7-t7-q178",
                questionNo: 178,
                text: "What does Mr. Ramon indicate in his e-mail?",
                options: {
                    "A": "He usually travels alone.",
                    "B": "He has family living in Kolkata.",
                    "C": "He is planning to move to Kolkata.",
                    "D": "He has stayed at the Sunny Welcome Hotel before."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "이메일 첫 문장에서 '지난해에 이 호텔의 패밀리 스위트룸에 묵었었다(last year... at the Sunny Welcome Hotel)'고 언급했습니다."
            },
            {
                id: "v4-p7-t7-q179",
                questionNo: 179,
                text: "Why most likely was Mr. Ramon charged a fee by the Sunny Welcome Hotel?",
                options: {
                    "A": "He canceled a reservation less than a day before arrival.",
                    "B": "He requested a rollaway bed for his room.",
                    "C": "He checked out of his room after midday.",
                    "D": "He reserved a work space in the business center."
                },
                correctAnswer: "A",
                classification: "P7_LINK",
                explanation: "지문 1의 정책상 도착 24시간 전(more than 24 hours prior)까지 취소/변경해야 보증금이 환불됩니다. Ramon 씨는 원래 4월 17일부터 예약이었으나 4월 17일 당일 아침에 전화를 했으므로 수수료가 부과된 것입니다."
            },
            {
                id: "v4-p7-t7-q180",
                questionNo: 180,
                text: "What does Mr. Ramon request?",
                options: {
                    "A": "A credit to his account",
                    "B": "A discount on a future hotel stay",
                    "C": "A room upgrade to a family suite",
                    "D": "An extension of a hotel stay"
                },
                correctAnswer: "A",
                classification: "P7_PURPOSE",
                explanation: "이메일 끝부분에서 '돈이 계좌로 환급(credited to my account)되기를 원한다'고 명시했습니다."
            }
        ]
    },
    // Questions 181-185: Double Passage (E-mail + Web page)
    {
        id: "v4-p7-t7-set12",
        vol: 4,
        questionRange: "181-185",
        setType: "Double",
        passages: [
            {
                id: "v4-p7-t7-s12-p1",
                contextType: "P1",
                docType: "EMAIL",
                content: `From: Dexter Abbott\nTo: Nina Sosa\nDate: 20 August\nSubject: Next steps\n\nDear Ms. Sosa,\n\nI have good news. The plans for the layout of the new Fountain Road office building have just been approved by Lanfei Chan at our corporate office. We now need to start thinking about the artwork for the main open-plan office area on the third floor of the building. This is one of our last tasks before the office opens in October.\n\nI have heard that Red Starling Art has a good reputation for helping with office interiors. Could you look at the company's Web site today and find out if any of its services might be suitable for us? I am wondering whether photography or paintings would look best in the space. What do you think? I am still waiting to hear back from Maxwell Willis in Finance about the budget for art, so please do not agree to anything with Red Starling Art until we know more.\n\nThank you,\n\nDexter Abbott, Facilities Manager\nKLX Accountancy`
            },
            {
                id: "v4-p7-t7-s12-p2",
                contextType: "P4",
                docType: "WEB_PAGE",
                header: {
                    url: "https://www.redstarlingart.co.uk/offices/",
                    navItems: ["Home", "About Us", "Services", "Contact Us"]
                },
                content: [
                    "Red Starling Art offers a range of consultancy services for office buildings:",
                    "• **Remake:** For clients who want a complete redesign of the interior of their office, we work with you to create a layout and decoration scheme that meets your needs.",
                    "• **Align:** For clients looking to incorporate artwork into a new office, we help you find the right pieces (paintings, photographs, prints, or sculptures) for your space.",
                    "• **Connect:** For clients who want to add a local touch to their offices, we collaborate with area artists and photographers to bring their unique perspective to you.",
                    "• **Reframe:** For clients who want to update but keep their existing artwork, we suggest new framing, new lighting, or new arrangements for a fresh look.",
                    "Our work is always tailored to the specific needs of our clients, so we cannot provide fixed prices. Please e-mail Birgit Lowenbruck at blowenbruck@redstarlingart.co.uk to book a free consultation. After the consultation, she will provide you with an estimate for the agreed-upon services."
                ]
            }
        ],
        questions: [
            {
                id: "v4-p7-t7-q181",
                questionNo: 181,
                text: "What is suggested about the Fountain Road office building?",
                options: {
                    "A": "It opened last October.",
                    "B": "It is the corporate headquarters of KLX Accountancy.",
                    "C": "It has more than one floor.",
                    "D": "It has a conference center."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                explanation: "이메일에서 '3층(third floor)의 개방형 사무 공간'에 대해 언급하고 있으므로 건물이 여러 층으로 이루어져 있음을 알 수 있습니다."
            },
            {
                id: "v4-p7-t7-q182",
                questionNo: 182,
                text: "In the e-mail, what does Mr. Abbott ask Ms. Sosa to do?",
                options: {
                    "A": "Finish a task she started last week",
                    "B": "Approve plans for the layout of an office",
                    "C": "Agree to a price for purchasing artwork",
                    "D": "Research interior design options online"
                },
                correctAnswer: "D",
                classification: "P7_PURPOSE",
                explanation: "Abbott 씨는 Sosa 씨에게 '그 회사의 웹사이트를 보고(look at the company's Web site) 적합한 서비스가 있는지 알아보라'고 요청했습니다."
            },
            {
                id: "v4-p7-t7-q183",
                questionNo: 183,
                text: "Who is responsible for the budget for artwork?",
                options: {
                    "A": "Mr. Abbott",
                    "B": "Ms. Chan",
                    "C": "Mr. Willis",
                    "D": "Ms. Sosa"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "이메일에서 '재무팀(Finance)의 Maxwell Willis에게서 예술품 예산(budget for art)에 관한 답변을 기다리고 있다'고 했습니다."
            },
            {
                id: "v4-p7-t7-q184",
                questionNo: 184,
                text: "What Red Starling Art service would be most suitable for the Fountain Road office building?",
                options: {
                    "A": "Remake",
                    "B": "Align",
                    "C": "Connect",
                    "D": "Reframe"
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                explanation: "이메일에서 새 건물에 사진이나 그림 등 예술품을 배치하려 합니다. 웹사이트에서 '새 사무실에 예술품을 통합(incorporate artwork into a new office)'하도록 돕는 서비스는 'Align'입니다."
            },
            {
                id: "v4-p7-t7-q185",
                questionNo: 185,
                text: "According to the Web page, how can someone learn the cost of Red Starling Art's services?",
                options: {
                    "A": "By submitting information through the Contact Us page",
                    "B": "By going to a Web page with cost information",
                    "C": "By submitting a document to Ms. Lowenbruck",
                    "D": "By attending a consultation with Ms. Lowenbruck"
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "웹 페이지 하단에서 '무료 상담(free consultation)을 예약'하고, 상담이 끝난 후 견적(estimate)을 제공받는다고 명시되어 있습니다."
            }
        ]
    },
    // Questions 186-190: Triple Passage (E-mail + Memo + Memo)
    {
        id: "v4-p7-t7-set13",
        vol: 4,
        questionRange: "186-190",
        setType: "Triple",
        passages: [
            {
                id: "v4-p7-t7-s13-p1",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: jdixon@milkalenterprises.com\nFrom: humanresources@milkalenterprises.com\nDate: April 28\nSubject: Employee survey responses\n\nDear Ms. Dixon,\n\nI read through all the responses to the semiannual employee survey, and I want to highlight a few points that were repeatedly raised. We can use this list of suggestions to help determine our priorities.\n\nSuggestion 1. A more flexible policy for working from home\nSuggestion 2. An expanded in-office recycling strategy\nSuggestion 3. More financial rewards for excellent work\nSuggestion 4. More opportunities for technical training\n\nAlso, if you approve, I would like to simplify the survey form before we administer it again. The open-ended questions make the data difficult to analyze. I propose incorporating more yes-no questions or rating scales to determine how much a colleague agrees or disagrees with a statement.\n\nKind regards,\n\nJudith Hathaway, Human Resources`
            },
            {
                id: "v4-p7-t7-s13-p2",
                contextType: "P1",
                docType: "NOTICE",
                header: {
                    title: "MEMO"
                },
                content: [
                    "**To:** All Staff",
                    "**From:** Jenna Dixon, General Manager",
                    "**Date:** May 8",
                    "**Subject:** Volunteers needed",
                    "I am seeking volunteers to form a committee that will launch an office recycling program. Having such a program was one of the most frequently identified needs mentioned on the recent employee survey. This program will prevent recyclables, including plastics, glass, metal, paper, and cardboard, from ending up in landfills.",
                    "Also, we need a volunteer to be the coordinator of this committee. I will be happy to meet with this coordinator to discuss first steps. Note that time spent on coordination tasks would be in addition to your regular work duties. A small amount of funds will be made available to be spent on program setup costs."
                ]
            },
            {
                id: "v4-p7-t7-s13-p3",
                contextType: "P1",
                docType: "NOTICE",
                header: {
                    title: "MEMO"
                },
                content: [
                    "**To:** All Staff",
                    "**From:** Mohammad Asghari",
                    "**Date:** June 13",
                    "**Subject:** Bins are here",
                    "As chairperson of the In-office Recycling Committee, I am happy to report that we now have recycling bins in the kitchen for glass bottles, soda cans, and cardboard and paper. It took us some time to get this program started because finding containers narrow enough to squeeze three between the door and the refrigerator proved challenging. But I was finally able to purchase some.",
                    "Please note that the recycling facility we are working with has stringent guidelines on what they accept, so I am creating illustrated instructions to hang above each bin. Those will be up tomorrow, and committee members will monitor our collection system to make sure the program is going smoothly. Please contact me with any questions, concerns, or feedback."
                ]
            }
        ],
        questions: [
            {
                id: "v4-p7-t7-q186",
                questionNo: 186,
                text: "In the e-mail, how does Ms. Hathaway suggest improving future surveys?",
                options: {
                    "A": "By changing the format of some questions",
                    "B": "By collecting the responses anonymously",
                    "C": "By conducting them more frequently",
                    "D": "By using specialized software"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "Hathaway 씨는 설문조사 형식을 개방형 질문(open-ended)에서 'Yes-No 문항이나 평정 척도(rating scales)'로 변경하자고 제안했는데, 이는 질문의 형식을 바꾸는 것입니다."
            },
            {
                id: "v4-p7-t7-q187",
                questionNo: 187,
                text: "What suggestion from the survey results is Ms. Dixon acting on?",
                options: {
                    "A": "Suggestion 1",
                    "B": "Suggestion 2",
                    "C": "Suggestion 3",
                    "D": "Suggestion 4"
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                explanation: "Dixon 씨의 메모(지문 2)는 '사무실 재활용 프로그램(recycling program)'에 관한 것인데, 이는 지문 1의 'Suggestion 2: Expanded in-office recycling strategy'와 일치합니다."
            },
            {
                id: "v4-p7-t7-q188",
                questionNo: 188,
                text: "According to Mr. Asghari, why was a new program delayed?",
                options: {
                    "A": "Some orders took a long time to be processed.",
                    "B": "Some equipment needed to be moved.",
                    "C": "A coordinator needed to approve it.",
                    "D": "A room had space limitations."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "Asghari 씨의 메모(지문 3)에서 '문과 냉장고 사이에 들어갈 만큼 좁은(narrow enough to squeeze...)' 용기를 찾는 것이 어려웠다고 언급했는데, 이는 공간의 제약이 있었음을 의미합니다."
            },
            {
                id: "v4-p7-t7-q189",
                questionNo: 189,
                text: "What is suggested about Mr. Asghari?",
                options: {
                    "A": "He has led a training series on recycling.",
                    "B": "He paid for some items using the company's money.",
                    "C": "He meets with Ms. Dixon on a weekly basis.",
                    "D": "He was acknowledged in a company newsletter."
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                explanation: "Dixon 씨의 메모(지문 2)에서 프로그램 설정 비용을 위한 '소액의 기금(small amount of funds)'이 제공될 것이라고 했고, 위원장인 Asghari 씨가 용기를 구매(purchase)했으므로 회사 자금을 사용했음을 알 수 있습니다."
            },
            {
                id: "v4-p7-t7-q190",
                questionNo: 190,
                text: "What is Mr. Asghari planning to do?",
                options: {
                    "A": "Recruit volunteers",
                    "B": "Contact suppliers",
                    "C": "Display signs",
                    "D": "Take inventory"
                },
                correctAnswer: "C",
                classification: "P7_PURPOSE",
                explanation: "그는 내일까지 각 수거함 위에 '그림 설명서(illustrated instructions)'를 걸어두겠다고 했습니다. 이는 표지판/안내판을 게시(Display signs)하는 행위입니다."
            }
        ]
    },
    // Questions 191-195: Triple Passage (Job Advertisement + Web page + Review)
    {
        id: "v4-p7-t7-set14",
        vol: 4,
        questionRange: "191-195",
        setType: "Triple",
        passages: [
            {
                id: "v4-p7-t7-s14-p1",
                contextType: "P4",
                docType: "NOTICE",
                header: {
                    title: "Job Advertisement"
                },
                content: [
                    "Kooper's Vision is seeking an optician for its eyewear department. Must have a valid Massachusetts optician license and at least three years of relevant experience. The position requires excellent customer service skills and a strong awareness of current fashion trends in the industry. Responsibilities include helping clients choose frames, ordering eyeglasses, and filing insurance claims.",
                    "This full-time position is available at Kooper's Vision at Danvers Mall. Contact store manager Tanisha Mosley at 978-555-0101. Must be available to start during the last week of August."
                ]
            },
            {
                id: "v4-p7-t7-s14-p2",
                contextType: "P4",
                docType: "WEB_PAGE",
                header: {
                    url: "https://www.koopersvision.com"
                },
                content: [
                    "**Kooper's Vision at Danvers Mall**",
                    "**Hours:**\nMonday: 10 A.M.–7 P.M.\nTuesday: 10 A.M.–7 P.M.\nWednesday: 10 A.M.–7 P.M.\nThursday: 10 A.M.–7 P.M.\nFriday: 10 A.M.–7 P.M.\nSaturday: 10 A.M.–6 P.M.\nSunday: 10 A.M.–4 P.M.",
                    "During the month of August, enjoy 50% off the second pair of eyeglasses!",
                    "Kooper's Vision is your local optical center for all your eye-care needs in Danvers, Massachusetts. We are located on the upper level of the Danvers Mall next to Eight Days Sporting Goods. Call 978-555-0101 today to schedule your annual eye exam. Exams by appointment only."
                ]
            },
            {
                id: "v4-p7-t7-s14-p3",
                contextType: "P4",
                docType: "REVIEW",
                header: {
                    title: "Optical Centers Reviews",
                    rating: 5
                },
                content: [
                    "I have been wearing eyeglasses since I was ten years old. I now have five children, and four of them wear glasses, so I have visited many opticians over the years. My recent visit to Kooper's Vision on August 31 was, by far, the best.",
                    "Ms. Palmer offered her help when she saw that I was overwhelmed by the eyeglass selection at Kooper's Vision. She looked at the shape of my face and steered me toward a few pairs of glasses that were perfect for me! She knew exactly what looked best on me and advised me about the size, color, quality, and cost of the frames I considered. Ms. Palmer also explained the different types of lenses and lens coatings available. I could not decide which was my favorite pair of eyeglasses, so I bought two pairs! I was incredulous when she told me it was her first day working at the store—she was the best optician I have ever had!",
                    "—Melvin Drake"
                ]
            }
        ],
        questions: [
            {
                id: "v4-p7-t7-q191",
                questionNo: 191,
                text: "According to the job advertisement, what is true about the open position?",
                options: {
                    "A": "It comes with health insurance.",
                    "B": "It starts at the end of August.",
                    "C": "It includes a trendy company uniform.",
                    "D": "It requires that candidates work on a team."
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "채용 공고에서 '8월 마지막 주(last week of August)'에 업무를 시작할 수 있어야 한다고 명시했습니다."
            },
            {
                id: "v4-p7-t7-q192",
                questionNo: 192,
                text: "What is indicated about Kooper's Vision on the Web page?",
                options: {
                    "A": "It stays open later on Saturday.",
                    "B": "It is located on the lower level of a mall.",
                    "C": "It offers a selection of sports eyeglasses.",
                    "D": "It requires an appointment for an eye exam."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "웹 페이지 하단에 '정기 시력 검사는 예약제로만 실시함(Exams by appointment only)'이라고 되어 있습니다."
            },
            {
                id: "v4-p7-t7-q193",
                questionNo: 193,
                text: "What is most likely true about Ms. Palmer?",
                options: {
                    "A": "She works with Ms. Mosley.",
                    "B": "She has professional experience in fashion.",
                    "C": "She earned an optician license last week.",
                    "D": "She is the new owner of Kooper's Vision."
                },
                correctAnswer: "A",
                classification: "P7_LINK",
                explanation: "광고(지문 1)에서 Mosley 씨는 매장 매니저이고, 리뷰(지문 3)에서 Palmer 씨는 해당 매장의 안경사(optician)로 일하고 있으므로 두 사람은 동료입니다."
            },
            {
                id: "v4-p7-t7-q194",
                questionNo: 194,
                text: "According to the review, how did Ms. Palmer help Mr. Drake?",
                options: {
                    "A": "By recommending frames that fit his face",
                    "B": "By extending the length of his appointment",
                    "C": "By choosing glasses for his children",
                    "D": "By upgrading the coating on his lenses"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "리뷰어는 Palmer 씨가 '자신의 얼굴 형태에 완벽하게 어울리는 프레임을 골라주었다(perfectly fit my face shape)'고 칭찬했습니다."
            },
            {
                id: "v4-p7-t7-q195",
                questionNo: 195,
                text: "What is suggested about Mr. Drake?",
                options: {
                    "A": "He thinks his prescription has changed.",
                    "B": "He started wearing eyeglasses recently.",
                    "C": "He frequently shops at Danvers Mall.",
                    "D": "He received a discount on his purchase."
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                explanation: "리뷰어는 8월 31일(August 31)에 방문하여 두 켤레(two pairs)를 샀습니다. 웹 페이지에는 8월 한 달 동안 두 번째 제품 50% 할인 행사를 한다고 했으므로 그는 할인을 받았을 것입니다."
            }
        ]
    },
    // Questions 196-200: Triple Passage (Web page + E-mail + E-mail)
    {
        id: "v4-p7-t7-set15",
        vol: 4,
        questionRange: "196-200",
        setType: "Triple",
        passages: [
            {
                id: "v4-p7-t7-s15-p1",
                contextType: "P4",
                docType: "WEB_PAGE",
                header: {
                    url: "https://www.hellosnackvending.com/services"
                },
                content: [
                    "**Our Services**",
                    "Hello Snack Vending offers a variety of vending and coffee services for company break rooms and vending machines.",
                    "**Service 1 (Micromarket)**—We set up a small market in your break room, with customized products available on open shelves. Micromarkets are self-service and feature electronic payments. Shelving and fixtures are provided.",
                    "**Service 2 (Pantry)**—We stock your break room cabinets with a variety of products that you select. Pantry service is paid for in advance, freeing users from paying per item.",
                    "**Service 3 (Coffee)**—We keep your break room stocked with coffee, tea, and all related essentials. We supply you with group-sized coffee makers, coffee, and individually sized creamer and sugar varieties.",
                    "**Service 4 (Traditional Vending)**—We regularly stock your vending machine with a customized selection of carbonated beverages, juice, and water.",
                    "**Service 5 (Healthy Vending)**—We regularly stock your vending machine with a wide selection of healthy snacks."
                ]
            },
            {
                id: "v4-p7-t7-s15-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: customercare@hellosnackvending.com\nFrom: dlewis@kivowitzcompany.com\nDate: November 14\nSubject: Vending service\n\nHello,\n\nMy company recently bought a gently used nonrefrigerated vending machine, which has been placed in our employee break room. I am looking for a stocking service to fill it so that the staff can start using it.\n\nDoes your company only stock vending machines that you own, or do you also offer a stocking service for other machines? If you can service ours, I would like to know more about the snacks you have available to fill the machine. Could you please send me a list of the products you offer?\n\nThank you for your assistance.\n\nBest regards,\n\nDenikia Lewis\nKivowitz Company`
            },
            {
                id: "v4-p7-t7-s15-p3",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Denikia Lewis <dlewis@kivowitzcompany.com>\nFrom: Customer Care <customercare@hellosnackvending.com>\nDate: November 15\nSubject: Re: Vending service\nAttachment: @List\n\nDear Ms. Lewis,\n\nThank you for your e-mail. We would be happy to stock your machine even if it is not owned by our company. However, if your machine is old, it can be difficult to obtain parts for it, and older machines break more often. The cost of repairs can get high, making it more cost-effective for you to use one of our vending machines. Can you provide me with the model number?\n\nI have attached the list you requested. We can accommodate special requests if you have any. I also recommend renting a drink machine from us, because we find that employees usually enjoy having a cold drink with their snacks.\n\nPlease contact me if you have additional questions.\n\nSincerely,\n\nDominik Scheibler\nCustomer Care Representative`
            }
        ],
        questions: [
            {
                id: "v4-p7-t7-q196",
                questionNo: 196,
                text: "What is mentioned about Service 1?",
                options: {
                    "A": "It comes with a fixed product selection.",
                    "B": "It allows users to pay electronically.",
                    "C": "It requires an annual contract.",
                    "D": "It includes shelving for an extra fee."
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "웹 페이지의 서비스 1 설명에서 '전자 결제(electronic payments)' 기능을 특징으로 한다고 명시되어 있습니다."
            },
            {
                id: "v4-p7-t7-q197",
                questionNo: 197,
                text: "What does Ms. Lewis suggest about her company's vending machine?",
                options: {
                    "A": "It is in poor condition.",
                    "B": "It was recently serviced.",
                    "C": "It was overpriced.",
                    "D": "It is currently empty."
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                explanation: "그녀는 기계를 채워줄(filling it) 서비스가 필요하다고 했으며, 그래야 직원들이 사용을 시작할 수 있다(so that the staff can start using it)고 했으므로 현재는 비어있음을 알 수 있습니다."
            },
            {
                id: "v4-p7-t7-q198",
                questionNo: 198,
                text: "What does Mr. Scheibler ask Ms. Lewis to send him?",
                options: {
                    "A": "A signed contract for the service",
                    "B": "A picture of her vending machine",
                    "C": "A list of needed parts",
                    "D": "A model number"
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "지문 3의 끝부분에서 '모델 번호(model number)를 보내주시겠습니까?'라고 물어보고 있습니다."
            },
            {
                id: "v4-p7-t7-q199",
                questionNo: 199,
                text: "What is included in the list Mr. Scheibler attached to his e-mail?",
                options: {
                    "A": "The snacks that his company offers",
                    "B": "The dates that his company can make deliveries",
                    "C": "The brand of vending machines that his company uses",
                    "D": "The costs involved with vending services"
                },
                correctAnswer: "A",
                classification: "P7_LINK",
                explanation: "Lewis 씨가 요청한 것은 '스낵 제품 리스트'였고, Scheibler 씨는 '요청하신 리스트(list you requested)를 첨부했다'고 답했습니다."
            },
            {
                id: "v4-p7-t7-q200",
                questionNo: 200,
                text: "What additional service does Mr. Scheibler suggest?",
                options: {
                    "A": "Service 2",
                    "B": "Service 3",
                    "C": "Service 4",
                    "D": "Service 5"
                },
                correctAnswer: "C",
                classification: "P7_LINK",
                explanation: "Scheibler 씨는 '차가운 음료(cold drink)'를 위해 '음료 자판기 렌탈(renting a drink machine)'을 추천했습니다. 지문 1에서 탄산음료, 주스, 물 등을 다루는 서비스는 'Service 4'입니다."
            }
        ]
    }
];
