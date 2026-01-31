import { PracticeSet } from './rc_part7_types';

export const test4PracticeSet: PracticeSet[] = [
    // Questions 176-180 (Double Passage)
    {
        id: "p7-t4-set11",
        questionRange: "176-180",
        setType: "Double",
        passages: [
            {
                id: "p7-t4-s11-p1",
                contextType: "P1",
                type: "EMAIL",
                content: `To: Manuel Torres <m.torres@opalmail.co.uk>\nFrom: Anya Patel <a.patel@support.harlund.co.uk>\nDate: 3 May\nSubject: Auto insurance\n\nDear Mr. Torres,\n\nWelcome to Harlund Ltd. We are pleased to provide you with comprehensive automobile insurance for your new vehicle. We have received your first payment of £36.00, and your coverage is now in effect. Your policy number is M413927.\n\nYour billing schedule is based on an annual premium of £432.00. The remaining payments of £36.00 per month are due on the fifteenth day of each month starting in June.\n\nYou can visit us online at www.harlund.co.uk to pay bills and manage your policy. Our Web site offers easy options for managing your account information and for making payments with scheduled transfers directly from your bank.\n\nShould you have any questions or wish to change your policy, call the customer support centre at 020 7946 0516. In the event of a vehicle incident, please contact an agent as soon as possible at 020 7946 0520. Be sure to have your policy number at hand. Thank you for trusting Harlund Ltd. We look forward to providing you with superior service.\n\nBest regards,\n\nAnya Patel, Harlund Ltd. Customer Support Agent`
            },
            {
                id: "p7-t4-s11-p2",
                contextType: "P1",
                type: "EMAIL",
                content: `To: Anya Patel <a.patel@support.harlund.co.uk>\nFrom: Manuel Torres <m.torres@opalmail.co.uk>\nDate: 4 May\nSubject: RE: Auto insurance\n\nDear Ms. Patel,\n\nThank you for the confirmation. I'm happy to have insurance from a trustworthy company. For your reference, the new car is now registered in my name.\n\nAlthough I made the initial payment to you by credit card, I plan to follow the process outlined in your e-mail for future payments.\n\nI also wanted to let you know that I have not yet received the insurance certificate. I looked for one that I could download from your Web site, but I could not find anything. Could you please send me a copy of the certificate?\n\nSincerely,\n\nManuel Torres`
            }
        ],
        questions: [
            {
                id: "p7-t4-q176",
                questionNo: 176,
                text: "What can be inferred about Mr. Torres?",
                options: {
                    "A": "He is moving to a new home.",
                    "B": "He recently bought a car.",
                    "C": "He will be retiring soon.",
                    "D": "He recently opened a bank account."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                translation: "Torres 씨에 대해 유추할 수 있는 것은?",
                explanation: "Patel 씨의 첫 번째 이메일에서 'new vehicle(새 차량)'에 대해 종합 보험을 제공하게 되어 기쁘다고 언급했습니다."
            },
            {
                id: "p7-t4-q177",
                questionNo: 177,
                text: "In the first e-mail, the word \"coverage\" in paragraph 1, line 3, is closest in meaning to",
                options: {
                    "A": "measurement",
                    "B": "information",
                    "C": "commentary",
                    "D": "protection"
                },
                correctAnswer: "D",
                classification: "P7_VOCABULARY",
                translation: "첫 번째 이메일의 첫 번째 단락 3행에 있는 'coverage'와 의미가 가장 가까운 것은?",
                explanation: "보험의 '보장 범위'를 뜻하는 coverage는 '보호'를 의미하는 protection과 가장 가깝습니다."
            },
            {
                id: "p7-t4-q178",
                questionNo: 178,
                text: "What does Ms. Patel recommend that Mr. Torres do?",
                options: {
                    "A": "Call an agent if needed",
                    "B": "Register at a local office",
                    "C": "Place an order promptly",
                    "D": "Revise an agreement"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                translation: "Patel 씨는 Torres 씨에게 무엇을 하라고 권합니까?",
                explanation: "이메일에서 'In the event of a vehicle incident, please contact an agent(차량 사고 발생 시 에이전트에게 연락하십시오)'라고 권고하고 있습니다."
            },
            {
                id: "p7-t4-q179",
                questionNo: 179,
                text: "How does Mr. Torres intend to make future payments?",
                options: {
                    "A": "By cash",
                    "B": "By credit card",
                    "C": "By electronic transfer",
                    "D": "By personal check"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                translation: "Torres 씨는 앞으로 어떻게 수납할 계획입니까?",
                explanation: "Torres 씨는 이메일에서 'scheduled transfers directly from your bank(은행 예약 이체)' 과정을 따르겠다고 언급했습니다."
            },
            {
                id: "p7-t4-q180",
                questionNo: 180,
                text: "What does Mr. Torres state that he looked for?",
                options: {
                    "A": "Directions to an office",
                    "B": "A document to download",
                    "C": "Reviews from customers",
                    "D": "Contact information"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                translation: "Torres 씨가 무엇을 찾았다고 언급했습니까?",
                explanation: "Torres 씨는 'I looked for one that I could download from your Web site(웹사이트에서 다운로드할 수 있는 것을 찾았다)'라고 말했습니다."
            }
        ]
    },
    // Questions 181-185 (Double Passage)
    {
        id: "p7-t4-set12",
        questionRange: "181-185",
        setType: "Double",
        passages: [
            {
                id: "p7-t4-s12-p1",
                contextType: "P3",
                type: "TABLE",
                header: {
                    title: "Tour Schedule for Book Launch by Andrew Darr"
                },
                content: ["At each appearance, Mr. Darr will read an excerpt from his new novel, *Down the Mountainside*, followed by a question-and-answer session. Afterward, Mr. Darr will be available to autograph copies of his books."],
                table_data: {
                    headers: ["Venue", "City", "Date", "Time"],
                    rows: [
                        ["Neighbourhood Books", "Toronto, Ontario", "18 May", "6:00 P.M."],
                        ["Weinstock Books and Stationery", "Ottawa, Ontario", "27 May", "7:00 P.M."],
                        ["Portage Avenue Books", "Winnipeg, Manitoba", "6 June", "6:30 P.M."],
                        ["Downtown Books and Café", "Regina, Saskatchewan", "15 June", "7:00 P.M."]
                    ]
                }
            },
            {
                id: "p7-t4-s12-p2",
                contextType: "P3",
                type: "REVIEW",
                title: "Book Review: Down the Mountainside",
                content: `Reviewer: Camille Lin\nDate: 15 May\n\nAndrew Darr, the author of the best-selling series about detective Charles Martin, will be visiting our city this week, appearing at Neighbourhood Books to promote his new novel, *Down the Mountainside*. The new work sees Martin investigating mysterious events at a ski resort in the French Alps.\n\nDarr's storytelling has come a long way since readers first met Charles Martin in *The Doorbell*, and this installment is Darr's strongest work to date. Fans of the stories will welcome the return of Darr's wit after a three-year wait, and newcomers to the Martin series are sure to find themselves captivated.\n\nThe story includes the right balance of suspense and humour, with an ending that is unpredictable, even to the most devoted Darr reader. I highly recommend this book to all mystery fans. You won't be disappointed.`
            }
        ],
        questions: [
            {
                id: "p7-t4-q181",
                questionNo: 181,
                text: "According to the schedule, what is NOT mentioned as an activity for Mr. Darr?",
                options: {
                    "A": "Reading from his book",
                    "B": "Answering questions",
                    "C": "Signing books for individuals",
                    "D": "Taking photos with participants"
                },
                correctAnswer: "D",
                classification: "P7_NOT_MENTIONED",
                translation: "스케줄에 따르면, Darr 씨의 활동으로 언급되지 않은 것은?",
                explanation: "책 낭독(read an excerpt), 질의응답(question-and-answer session), 사인회(autograph copies)는 언급되었으나 사진 촬영은 언급되지 않았습니다."
            },
            {
                id: "p7-t4-q182",
                questionNo: 182,
                text: "What city is the book reviewer from?",
                options: {
                    "A": "Toronto",
                    "B": "Ottawa",
                    "C": "Winnipeg",
                    "D": "Regina"
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                translation: "서평 작성자는 어느 도시 출신입니까?",
                explanation: "서평에서 'visiting our city this week, appearing at Neighbourhood Books(이번 주 우리 도시를 방문하여 Neighbourhood Books에 나타날 것이다)'라고 했으므로, Neighbourhood Books가 위치한 Toronto임을 알 수 있습니다."
            },
            {
                id: "p7-t4-q183",
                questionNo: 183,
                text: "What is most likely true about Down the Mountainside?",
                options: {
                    "A": "It is the author's first book.",
                    "B": "It is a collection of short stories.",
                    "C": "It is part of a series.",
                    "D": "It is being translated into French."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                translation: "Down the Mountainside에 대해 사실일 가능성이 높은 것은?",
                explanation: "서평에서 'detective Charles Martin 시리즈의 저자'라고 언급하며 이 작품이 그 시리즈의 일부임을 나타냅니다."
            },
            {
                id: "p7-t4-q184",
                questionNo: 184,
                text: "Who is Mr. Martin?",
                options: {
                    "A": "A fan of the author's",
                    "B": "A character in the book",
                    "C": "The writer of the review",
                    "D": "The owner of a bookstore"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                translation: "Martin 씨는 누구입니까?",
                explanation: "서평 첫 문장에서 'detective Charles Martin'이라고 명시되어 있으므로 책 속의 캐릭터(탐정)입니다."
            },
            {
                id: "p7-t4-q185",
                questionNo: 185,
                text: "According to the review, who would most likely read Down the Mountainside?",
                options: {
                    "A": "People who like to read mysteries",
                    "B": "People who enjoy novels based on true stories",
                    "C": "People who travel frequently",
                    "D": "People who prefer science fiction"
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                translation: "서평에 따르면, 누가 Down the Mountainside를 읽을 가능성이 가장 높습니까?",
                explanation: "리뷰어는 마지막 문장에서 'I highly recommend this book to all mystery fans(모든 미스터리 팬에게 이 책을 강력히 추천한다)'라고 했습니다."
            }
        ]
    },
    // Questions 186-190 (Triple Passage)
    {
        id: "p7-t4-set13",
        questionRange: "186-190",
        setType: "Triple",
        passages: [
            {
                id: "p7-t4-s13-p1",
                contextType: "P3",
                type: "NOTICE",
                header: {
                    title: "Annual Citrus Production in Yuma County"
                },
                content: [
                    "• 82 tons of citrus fruit",
                    "• Over 120,000 boxes of lemons",
                    "• 15,000 boxes of oranges",
                    "• 9,000 boxes of grapefruit",
                    "• $190 million in revenue",
                    "\nEmploying close to 3,000 workers and contributing nearly $2 million in taxes to fund public services for the county",
                    "\n—Arizona Agriculture Division"
                ]
            },
            {
                id: "p7-t4-s13-p2",
                contextType: "P1",
                type: "LETTER",
                content: `City West Bank\n455 Canyon Avenue\nPhoenix, Arizona 85007\n\nMarch 21\n\nDomingo Ramirez, Director\nArizona Agriculture Division\n55 Sixth Avenue\nYuma, Arizona 85364\n\nDear Mr. Ramirez,\n\nI read the recent report from the Arizona Agriculture Division summarizing Yuma County's success in the citrus industry. City West Bank wants to help the Arizona Agriculture Division you lead by expanding this industry further. We offer low-interest loans and provide expert advice through our connections to area chambers of commerce and to agricultural researchers at Arizona's state universities.\n\nWe recognize that agritourism in southwest Arizona is growing as a result of the popularity of farm tours, bird-watching, and scenic country lodging, but tourism is unlikely to surpass the strength of this region's agriculture production. We support farmers in many counties in Arizona and are poised to help the citrus growers in Yuma County. Together, we can accomplish great things.\n\nCordially,\n\nBianca Schreiber\nBianca Schreiber\nIndustry Investment Programs`
            },
            {
                id: "p7-t4-s13-p3",
                contextType: "P3",
                type: "ARTICLE",
                header: {
                    headline: "Schreiber Named Vice President of National Investment Strategies"
                },
                content: `PHOENIX (January 19)—City West Bank announced today that Ms. Bianca Schreiber will be promoted to vice president of National Investment Strategies effective February 1. Ms. Schreiber currently oversees City West Bank's Industry Investment Programs, serving businesses throughout Arizona.\n\nBank President William Dolle cited Ms. Schreiber's record of successful investment in the agricultural sector. "Ms. Schreiber's efforts in working with the director of the Arizona Agriculture Division have significantly boosted citrus production. Yuma County now produces as many grapefruit as it does oranges. Ms. Schreiber's keen insight will make her even more valuable to us in her new role," remarked Mr. Dolle.`
            }
        ],
        questions: [
            {
                id: "p7-t4-q186",
                questionNo: 186,
                text: "What does the report indicate about the Yuma County region?",
                options: {
                    "A": "It does not tax fruit that is sold there.",
                    "B": "Several types of fruit are cultivated there.",
                    "C": "More workers are needed for agricultural jobs.",
                    "D": "New types of fruit are being produced there."
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                translation: "보고서는 유마 카운티 지역에 대해 무엇을 나타냅니까?",
                explanation: "보고서에 레몬, 오렌지, 자몽 등 여러 종류의 과일 생산량이 나열되어 있습니다."
            },
            {
                id: "p7-t4-q187",
                questionNo: 187,
                text: "What is one reason Ms. Schreiber writes to Mr. Ramirez?",
                options: {
                    "A": "To explain the benefits of doing business together",
                    "B": "To clarify information in the report",
                    "C": "To remind him to make a loan payment",
                    "D": "To offer him advice from university agricultural researchers"
                },
                correctAnswer: "A",
                classification: "P7_PURPOSE",
                translation: "Schreiber 씨가 Ramirez 씨에게 편지를 쓴 이유 중 하나는?",
                explanation: "편지에서 시티 웨스트 은행이 저금리 대출과 전문가 조언 등을 제공하여 산업을 확장하는 데 도움을 주고 싶다고 제안하고 있습니다."
            },
            {
                id: "p7-t4-q188",
                questionNo: 188,
                text: "According to the letter, why do tourists visit Yuma County?",
                options: {
                    "A": "To shop at farmers markets",
                    "B": "To take pictures",
                    "C": "To enjoy theme parks",
                    "D": "To observe wildlife"
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                translation: "편지에 따르면, 관광객들이 유마 카운티를 방문하는 이유는?",
                explanation: "편지에서 agritourism의 인기 요인 중 하나로 'bird-watching(조류 관찰)'을 언급했는데, 이는 야생동물 관찰(observe wildlife)에 해당합니다."
            },
            {
                id: "p7-t4-q189",
                questionNo: 189,
                text: "What is suggested about Mr. Ramirez?",
                options: {
                    "A": "He accepted Ms. Schreiber's proposal.",
                    "B": "He used to be employed by City West Bank.",
                    "C": "He is a member of the Yuma Chamber of Commerce.",
                    "D": "He recently bought a citrus farm."
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                translation: "Ramirez 씨에 대해 알 수 있는 것은?",
                explanation: "Schreiber 씨가 제안(3월 21일)을 한 후, 기사(1월 19일)에서 은행장이 그녀가 Ramirez 씨와 협력하여 생산량을 크게 늘렸다고 언급한 것으로 보아 제안을 수락했음을 알 수 있습니다."
            },
            {
                id: "p7-t4-q190",
                questionNo: 190,
                text: "For what accomplishment does Mr. Dolle praise Ms. Schreiber?",
                options: {
                    "A": "Arranging the shipping of agricultural products",
                    "B": "Opening many City West Bank branch offices",
                    "C": "Helping to increase grapefruit production to 15,000 boxes",
                    "D": "Promoting Yuma County as a vacation destination"
                },
                correctAnswer: "C",
                classification: "P7_LINK",
                translation: "Dolle 씨는 Schreiber 씨의 어떤 업적을 칭찬합니까?",
                explanation: "리포트에서 오렌지는 15,000박스이고 자몽은 9,000박스였으나, 기사에서 Dolle 씨는 자몽 생산량이 오렌지 생산량만큼(15,000박스) 늘어났다고 언급하며 그녀를 칭찬했습니다."
            }
        ]
    },
    // Questions 191-195 (Triple Passage)
    {
        id: "p7-t4-set14",
        questionRange: "191-195",
        setType: "Triple",
        passages: [
            {
                id: "p7-t4-s14-p1",
                contextType: "P7",
                type: "NOTICE",
                header: {
                    title: "Unetcon - Message Center",
                    subtitle: "https://www.unetcon.org/messages_audreysmith80"
                },
                content: [
                    "Pending Invitations",
                    "\nFrom: Don Fitzpatrick\nBranch Manager, Wilsonville Financial",
                    "\nTo: Audrey Smith",
                    "\nDear Audrey,",
                    "\nPlease accept this invitation to connect professionally on Unetcon. I am a fellow Stonerook University graduate and am always looking to expand my network. In this case, I am also reaching out to see if you would be interested in joining the private Stonerook alumni group page to stay current with everything that our fellow graduates are up to.",
                    "\nhttps://www.unetcon.org/private/stonerookgrads",
                    "\nKind regards,\nDon Fitzpatrick",
                    "\n[ Accept Invitation ] [ Ignore Invitation ] [ Reply to Don ]"
                ]
            },
            {
                id: "p7-t4-s14-p2",
                contextType: "P3",
                type: "TABLE",
                header: {
                    title: "Stonerook University Graduates",
                    date: "https://www.unetcon.org/private/stonerookgrads"
                },
                content: ["Check out the continued success and latest updates from Stonerook graduate Jonah Hilliard."],
                table_data: {
                    headers: ["Current", "Education", "Professional"],
                    rows: [
                        [
                            "Director,\nAlbright School of Business\n\nFounder and Director,\nClear Path\n\nContact\nPhone: 843-555-0139\nE-mail: jhilliard@mccleese.edu\nOffice: 403 Cordon Hall\n530 N Kensington St.\nCharleston, SC 29425",
                            "Master of Business Administration –\nTurnbull University\n\nBachelor of Arts in Education Studies –\nStonerook University",
                            "Mr. Hilliard has led the Albright School of Business since 2017. Between 2007 and 2017, he carried out extensive research on emerging markets in West Africa while working in Lagos, Nigeria. Two years ago, he founded Clear Path, a business that advises students from around the globe who wish to pursue studies in the United States."
                        ]
                    ]
                }
            },
            {
                id: "p7-t4-s14-p3",
                contextType: "P1",
                type: "EMAIL",
                content: `To: Jonah Hilliard <jhilliard@mccleese.edu>\nFrom: Audrey Smith <audrey_smith80@rapidonet.co.uk>\nDate: 19 September\nSubject: Referral\n\nDear Jonah,\n\nIt has been a long time since we last talked. I recently came across your profile on Unetcon and saw that you are now leading the business school at McCleese! My research in Lagos ended last year, when I accepted a position as lead consultant at Pryor and Martell. I have been based here in Manchester ever since.\n\nCongratulations to you on your most recent business venture—Clear Path already has quite an impressive reputation! I have a nephew who is interested in pursuing a degree in management information systems in the United States, and I was hoping I could put you both in touch so that he can take advantage of your new company's expertise in this area.\n\nBest,\n\nAudrey Smith`
            }
        ],
        questions: [
            {
                id: "p7-t4-q191",
                questionNo: 191,
                text: "What does the invitation indicate about Unetcon?",
                options: {
                    "A": "It is a business consulting firm.",
                    "B": "It is a financial services company.",
                    "C": "It is an employment agency.",
                    "D": "It is a professional networking Web site."
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                translation: "초대장은 Unetcon에 대해 무엇을 나타냅니까?",
                explanation: "전문적으로 연결하고 네트워크를 확장하는 서비스라고 명시되어 있으므로 전문 네트워킹 웹사이트임을 알 수 있습니다."
            },
            {
                id: "p7-t4-q192",
                questionNo: 192,
                text: "According to the Web page, where is Mr. Hilliard currently working?",
                options: {
                    "A": "In Lagos",
                    "B": "In Charleston",
                    "C": "In Wilsonville",
                    "D": "In Manchester"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                translation: "웹 페이지에 따르면, Hilliard 씨는 현재 어디에서 근무하고 있습니까?",
                explanation: "연락처 및 주소 정보에 Charleston, SC가 명시되어 있습니다."
            },
            {
                id: "p7-t4-q193",
                questionNo: 193,
                text: "What is suggested about Ms. Smith?",
                options: {
                    "A": "She taught at Stonerook University.",
                    "B": "She works at Wilsonville Financial.",
                    "C": "She accepted Mr. Fitzpatrick's invitation.",
                    "D": "She plans to visit Lagos this year."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                translation: "Smith 씨에 대해 알 수 있는 것은?",
                explanation: "Don Fitzpatrick의 초대를 받은 후 이메일에서 'Unetcon에서 당신의 프로필을 우연히 보았다'고 언급한 것으로 보아 초대를 수락했음을 알 수 있습니다."
            },
            {
                id: "p7-t4-q194",
                questionNo: 194,
                text: "What do Ms. Smith and Mr. Hilliard have in common?",
                options: {
                    "A": "They cofounded Clear Path.",
                    "B": "They are colleagues at Pryor and Martell.",
                    "C": "They were classmates at Turnbull University.",
                    "D": "They both conducted research in Nigeria."
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                translation: "Smith 씨와 Hilliard 씨의 공통점은?",
                explanation: "Hilliard 씨는 2007~2017년 동안 Lagos(나이지리아)에서 연구를 수행했고, Smith 씨 또한 이메일에서 Lagos에서의 연구가 작년에 끝났다고 언급했습니다."
            },
            {
                id: "p7-t4-q195",
                questionNo: 195,
                text: "What is one purpose of Ms. Smith's e-mail to Mr. Hilliard?",
                options: {
                    "A": "To request his professional services",
                    "B": "To provide a professional reference",
                    "C": "To conduct an informational interview",
                    "D": "To apply for a position at Albright School of Business"
                },
                correctAnswer: "A",
                classification: "P7_PURPOSE",
                translation: "Smith 씨가 Hilliard 씨에게 이메일을 보낸 목적 중 하나는?",
                explanation: "조카가 미국 유학(Clear Path의 업무)에 도움을 받을 수 있도록 연결해주고 싶다고 한 것은 그의 전문 서비스를 요청하는 것입니다."
            }
        ]
    },
    // Questions 196-200 (Triple Passage)
    {
        id: "p7-t4-set15",
        questionRange: "196-200",
        setType: "Triple",
        passages: [
            {
                id: "p7-t4-s15-p1",
                contextType: "P4",
                type: "NOTICE",
                header: {
                    title: "Modern Salon Academy",
                    subtitle: "www.modernsalonacademy.ca"
                },
                content: [
                    "Established more than twenty years ago, Modern Salon Academy is Toronto's most recognized beauty school. The school offers hands-on training, small class sizes, and individualized instruction from leading industry professionals in the following programs:",
                    "• Cosmetology I: Gain foundational knowledge of haircutting and styling.",
                    "• Cosmetology II: Learn techniques in haircutting, styling, and colouring.",
                    "• Skin Care: Learn techniques in providing advanced skin-care treatments.",
                    "• Leadership: Study salon management, business operations, and compliance.",
                    "\nModern Salon Academy is a winner of the International Cosmetology Society's prestigious Award of Excellence. It is no surprise, then, that over 95 percent of our graduates have gone on to successful careers in both the beauty and fashion industries."
                ]
            },
            {
                id: "p7-t4-s15-p2",
                contextType: "P3",
                type: "ARTICLE",
                header: {
                    headline: "Modern Salon Academy Expands in Ontario"
                },
                content: `TORONTO (23 August)—Modern Salon Academy, a highly regarded beauty school here in Toronto, is opening a regional campus in Oshawa. The school is already admitting students for classes that are scheduled to begin on 4 October.\n\nModern Salon Academy has had a substantial rise in enrollment over the past few years. Francine Dupuis, educational director of Modern Salon Academy, notes, "More than half our students live outside the city limits, so having a satellite campus makes perfect sense."\n\nModern Salon Academy offers professional training and certification for careers in a variety of areas, including hair care, skin care, and makeup. For more information about Modern Salon Academy, including admission requirements, fees, and academic calendars, visit www.modernsalonacademy.ca.\n\n—Chrissy Jellen for the Ontario Daily Times`
            },
            {
                id: "p7-t4-s15-p3",
                contextType: "P1",
                type: "EMAIL",
                content: `To: Francine Dupuis <francine.dupuis@modernsalonacademy.ca>\nFrom: Amit Persaud <amitpersaud@shorelinebarbers.ca>\nSubject: Entry-level job opportunities\nDate: 19 November\n\nDear Ms. Dupuis,\n\nMy name is Amit Persaud, and I am the owner and operator of Shoreline Barbers. I am interested in recruiting some of your graduating students to work at my barbershop, which is just around the corner from your newly established regional campus. I am seeking highly qualified, entry-level employees who can provide both haircutting and hair-colouring services.\n\nWould it be possible for me to visit the nearby campus to give interested students an opportunity to talk with me? This would be a convenient way for me to evaluate them for the positions I am seeking to fill, and then I can also answer any questions they may have. Please let me know if an arrangement can be made.\n\nSincerely,\nAmit Persaud`
            }
        ],
        questions: [
            {
                id: "p7-t4-q196",
                questionNo: 196,
                text: "How does Modern Salon Academy teach its students?",
                options: {
                    "A": "Through online courses",
                    "B": "Through academic lectures",
                    "C": "Through individualized instruction",
                    "D": "Through large-group discussions"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                translation: "Modern Salon Academy는 학생들을 어떻게 가르칩니까?",
                explanation: "브로셔 하단에서 '개별화된 교육(individualized instruction)'을 제공한다고 명시되어 있습니다."
            },
            {
                id: "p7-t4-q197",
                questionNo: 197,
                text: "According to the article, what has increased at Modern Salon Academy?",
                options: {
                    "A": "The cost of tuition",
                    "B": "The number of instructors",
                    "C": "The enrollment of students",
                    "D": "The hours needed for certification"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                translation: "기사에 따르면, Modern Salon Academy에서 무엇이 증가했습니까?",
                explanation: "기사 서두에서 지난 5년간 '등록 인원(enrollment)'이 상당히 증가했다고 언급했습니다."
            },
            {
                id: "p7-t4-q198",
                questionNo: 198,
                text: "What is most likely true about Shoreline Barbers?",
                options: {
                    "A": "It is located in Oshawa.",
                    "B": "It is opening a shop in Toronto.",
                    "C": "It has very affordable services.",
                    "D": "It has won several awards."
                },
                correctAnswer: "A",
                classification: "P7_LINK",
                translation: "Shoreline Barbers에 대해 사실일 가능성이 높은 것은?",
                explanation: "Amit Persaud는 자신의 가게가 새로 설립된 캠퍼스 바로 모퉁이에 있다고 했습니다. 기사에서 새 캠퍼스는 'Oshawa'에 문을 열었다고 했으므로 이발소 역시 Oshawa에 있습니다."
            },
            {
                id: "p7-t4-q199",
                questionNo: 199,
                text: "Who would best meet Mr. Persaud's needs?",
                options: {
                    "A": "Students in Cosmetology I",
                    "B": "Students in Cosmetology II",
                    "C": "Students in Skin Care",
                    "D": "Students in Leadership"
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                translation: "누가 Mr. Persaud의 요구를 가장 잘 충족시키겠습니까?",
                explanation: "Amit Persaud는 이발사(barber)로서 커팅과 색상 등 관련 기술이 있는 직원을 원할 것입니다. Cosmetology II 과정이 헤어 커팅, 스타일링, 염색 기술을 다루므로 가장 적합합니다."
            },
            {
                id: "p7-t4-q200",
                questionNo: 200,
                text: "According to the e-mail, what does Mr. Persaud want to do?",
                options: {
                    "A": "Establish another business",
                    "B": "Relocate to a different city",
                    "C": "Teach some classes",
                    "D": "Interview some students"
                },
                correctAnswer: "D",
                classification: "P7_PURPOSE",
                translation: "이메일에 따르면, Mr. Persaud는 무엇을 하고 싶어 합니까?",
                explanation: "이메일에서 그는 학교를 방문하여 학생들과 대화하고 기술을 평가(evaluate their skills)하고 싶다고 했습니다. 이는 학생들을 면접하겠다는 의도입니다."
            }
        ]
    }
];
