import { PracticeSet } from './rc_part7_types';

export const rcPart7Test7: PracticeSet[] = [
    // Questions 176-180: Double Passage (Web page + E-mail)
    {
        id: "p7-t7-set11",
        questionRange: "176-180",
        setType: "Double",
        passages: [
            {
                id: "p7-t7-s11-p1",
                contextType: "P4",
                docType: "WEB_PAGE",
                content: `https://www.sunnywelcomehotel.co.in\n\nAt the Sunny Welcome Hotel in Kolkata, we work hard to ensure that you enjoy your stay. Please note:\n\n- Each room has a coffeemaker and complimentary coffee and tea. Guests may purchase snacks and other beverages in the vending areas located on each floor.\n- Guests with small children may request a rollaway bed or crib for their rooms for no additional charge.\n- The business center is open from 9:00 A.M. to 5:00 P.M. each day.\n- The swimming pool and children's playground are open during daylight hours. Children must always be supervised by an adult.\n- A deposit is necessary to guarantee a room reservation. The deposit will only be refunded if the reservation is cancelled or changed more than 24 hours prior to arrival.\n- Guests may check in as early as 2:00 P.M. Checkout after noon on the day of departure is subject to an additional charge.\n- Guests are required to present a passport or driver's license at the time of check-in.\n- We offer free shuttle service to the airport. Guests can make arrangements at the front desk.\n- Our reception desk is staffed 24 hours a day.`
            },
            {
                id: "p7-t7-s11-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: generalmanager@sunnywelcomehotel.co.in\nFrom: samuelramon@myemail.co.uk\nDate: 13 May\nSubject: Reservation number EX52417\n\nHello,\n\nMy family and I were very comfortable in the family suite at the Sunny Welcome Hotel in Kolkata last year, and we were looking forward to returning this year for a week starting on 17 April. Unfortunately, we suddenly had to postpone our trip until June, so I called the hotel on the morning of 17 April to change our reservation dates. I thought everything was in order, but when I opened my credit card statement this month, I discovered an additional charge from the Sunny Welcome Hotel.\n\nCould you please look into the matter? I believe that an error has been made and that I should be reimbursed. I would appreciate having the money credited to my account. We still plan to return to Kolkata later this year and anticipate an enjoyable stay at your hotel.\n\nYours sincerely,\nSamuel Ramon`
            }
        ],
        questions: [
            {
                id: "p7-t7-q176",
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
                id: "p7-t7-q177",
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
                id: "p7-t7-q178",
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
                id: "p7-t7-q179",
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
                id: "p7-t7-q180",
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
        id: "p7-t7-set12",
        questionRange: "181-185",
        setType: "Double",
        passages: [
            {
                id: "p7-t7-s12-p1",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Nina Sosa\nFrom: Dexter Abbott\nDate: 20 August\nSubject: Next steps\n\nDear Ms. Sosa,\n\nI have good news. The plans for the layout of the new Fountain Road office building have just been approved by Lanfei Chan at our corporate office. We now need to start thinking about the artwork for the main open-plan office area on the third floor of the building. This is one of our last tasks before the office opens in October.\n\nI have heard that Red Starling Art has a good reputation for helping with office interiors. Could you look at the company's Web site today and find out if any of its services might be suitable for us? I am wondering whether photography or paintings would look best in the space. I am still waiting to hear back from Maxwell Willis in Finance about the budget for art, so please do not agree to anything with Red Starling Art until we know more.\n\nThank you,\nDexter Abbott, Facilities Manager\nKLX Accountancy`
            },
            {
                id: "p7-t7-s12-p2",
                contextType: "P4",
                docType: "WEB_PAGE",
                content: `https://www.redstarlingart.co.uk/offices/\n\nRed Starling Art offers a range of consultancy services for office buildings:\n\n* Remake: For clients who want a complete redesign of the interior of their office.\n* Align: For clients looking to incorporate artwork into a new office, we help you find the right pieces (paintings, photographs, prints, or sculptures) for your space.\n* Connect: For clients who want to add a local touch to their offices, we collaborate with area artists.\n* Reframe: For clients who want to update but keep their existing artwork.\n\nOur work is always tailored to the specific needs of our clients. Please e-mail Birgit Lowenbruck at blowenbruck@redstarlingart.co.uk to book a free consultation. After the consultation, she will provide you with an estimate.`
            }
        ],
        questions: [
            {
                id: "p7-t7-q181",
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
                id: "p7-t7-q182",
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
                id: "p7-t7-q183",
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
                id: "p7-t7-q184",
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
                id: "p7-t7-q185",
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
        id: "p7-t7-set13",
        questionRange: "186-190",
        setType: "Triple",
        passages: [
            {
                id: "p7-t7-s13-p1",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: jdixon@milkalenterprises.com\nFrom: humanresources@milkalenterprises.com\nDate: April 28\nSubject: Employee survey responses\n\nDear Ms. Dixon,\n\nI read through the responses to the semiannual employee survey. Here are the key suggestions:\n\n1. Flexible work-from-home policy\n2. Expanded in-office recycling strategy\n3. Financial rewards for excellence\n4. Technical training opportunities\n\nAlso, I propose simplifying the survey next time by using yes-no questions or rating scales instead of open-ended questions which are difficult to analyze.\n\nJudith Hathaway, Human Resources`
            },
            {
                id: "p7-t7-s13-p2",
                contextType: "P1",
                docType: "MEMO",
                content: `To: All Staff\nFrom: Jenna Dixon, General Manager\nDate: May 8\nSubject: Volunteers needed\n\nI am seeking volunteers for a committee to launch an office recycling program, a key need from the survey. This program will cover plastics, glass, metal, paper, and cardboard.\n\nWe also need a committee coordinator. I'll meet with the coordinator to discuss the first steps. Note that this is in addition to regular duties, but a small fund for setup costs will be provided.`
            },
            {
                id: "p7-t7-s13-p3",
                contextType: "P1",
                docType: "MEMO",
                content: `To: All Staff\nFrom: Mohammad Asghari\nDate: June 13\nSubject: Bins are here\n\nAs chairperson of the Recycling Committee, I'm happy to report that recycling bins for glass, cans, and paper are now in the kitchen. Finding containers narrow enough to fit between the door and the refrigerator was challenging, but I finally bought some.\n\nPlease follow the guidelines. I am creating illustrated instructions to hang above each bin by tomorrow. Committee members will monitor the collection to ensure it stays smooth.`
            }
        ],
        questions: [
            {
                id: "p7-t7-q186",
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
                id: "p7-t7-q187",
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
                id: "p7-t7-q188",
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
                id: "p7-t7-q189",
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
                id: "p7-t7-q190",
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
        id: "p7-t7-set14",
        questionRange: "191-195",
        setType: "Triple",
        passages: [
            {
                id: "p7-t7-s14-p1",
                contextType: "P4",
                docType: "ADVERTISEMENT",
                title: "Job Advertisement",
                content: `Kooper's Vision is seeking an optician for its Danvers Mall branch. Must have a valid MA license and 3+ years of experience. Responsibilities include helping clients choose frames, ordering lenses, and insurance filing. Must be available to start work by the last week of August. Contact Tanisha Mosley at 978-555-0101.`
            },
            {
                id: "p7-t7-s14-p2",
                contextType: "P4",
                docType: "WEB_PAGE",
                content: `https://www.koopersvision.com\n\nKooper's Vision at Danvers Mall\nMon-Fri: 10AM-7PM | Sat: 10AM-6PM | Sun: 10AM-4PM\n\nAugust Special: 50% off the second pair of eyeglasses!\n\nNote: Annual eye exams are by appointment only. Located on the upper level next to Eight Days Sporting Goods.`
            },
            {
                id: "p7-t7-s14-p3",
                contextType: "P4",
                docType: "REVIEW",
                title: "Review",
                content: `★★★★★\nMost recent visit: August 31. Ms. Palmer was incredibly helpful. She chose frames that perfectly fit my face shape and explained all lens options. I couldn't decide on just one pair, so I bought two! I was stunned to learn it was her first day on the job—she's clearly an expert. \n—Melvin Drake`
            }
        ],
        questions: [
            {
                id: "p7-t7-q191",
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
                id: "p7-t7-q192",
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
                id: "p7-t7-q193",
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
                id: "p7-t7-q194",
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
                id: "p7-t7-q195",
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
        id: "p7-t7-set15",
        questionRange: "196-200",
        setType: "Triple",
        passages: [
            {
                id: "p7-t7-s15-p1",
                contextType: "P4",
                docType: "WEB_PAGE",
                content: `https://www.hellosnackvending.com/services\n\n| Service | Description |\n|---|---|\n| **1: Micromarket** | Open shelves set up in break rooms; self-service; electronic payments. |\n| **2: Pantry** | Break room cabinets stocked; paid in advance by company. |\n| **3: Coffee** | Break room stocked with coffee makers, beans, creamer/sugar. |\n| **4: Traditional** | Vending machine stocked with carbonated drinks, juice, water. |\n| **5: Healthy** | Vending machine stocked with healthy snacks. |`
            },
            {
                id: "p7-t7-s15-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Customer Care (Hello Snack Vending)\nFrom: Denikia Lewis (Kivowitz Company)\nDate: November 14\n\nWe bought a used vending machine for our break room. We need a stocking service for snacks. Do you stock machines you don't own? If so, please send a snack product list.`
            },
            {
                id: "p7-t7-s15-p3",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Denikia Lewis\nFrom: Dominik Scheibler (Customer Care)\nDate: November 15\n\nYes, we can stock your machine. However, old machines often break. It might be cheaper to use ours. Please send the model number. I attached the snack list. I also recommend renting a drink machine from us for cold beverages.`
            }
        ],
        questions: [
            {
                id: "p7-t7-q196",
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
                id: "p7-t7-q197",
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
                id: "p7-t7-q198",
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
                id: "p7-t7-q199",
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
                id: "p7-t7-q200",
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
