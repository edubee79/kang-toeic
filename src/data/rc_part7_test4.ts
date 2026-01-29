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
                docType: "EMAIL",
                content: `To: Manuel Torres <m.torres@gailmail.co.uk>\nFrom: Anya Patel <a.patel@support.harland.co.uk>\nDate: 3 May\nSubject: Auto insurance\n\nDear Mr. Torres,\n\nWelcome to Harland Ltd. We are pleased to provide you with comprehensive automobile insurance for your new vehicle. We have received your first premium of £80.00, and your coverage begins on 3 May.\n\nYour billing schedule is based on an annual premium of £832.00. The remaining payments of £376.00 per month are due on the fifteenth day of each month until your policy is paid in full.\n\nYou can visit us online at www.harland.co.uk to pay bills and manage your policy. Our Web site offers easy options for managing your account information and paying your bills. You can also contact us by phone at 0800 7046 2345.\n\nShould you have any questions or wish to change your policy, call the customer support centre at 0800 7046 2345. In the event of a vehicle incident, please contact an agent as soon as possible. Our agents are available 24 hours a day, seven days a week to assist you for trusting Harland Ltd. We look forward to providing you with superior service.\n\nBest regards,\nAnya Patel, Harland Ltd. Customer Support Agent`
            },
            {
                id: "p7-t4-s11-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Anya Patel <a.patel@support.harland.co.uk>\nFrom: Manuel Torres <m.torres@gailmail.co.uk>\nDate: 4 May\nSubject: RE: Auto insurance\n\nDear Ms. Patel,\n\nThank you for the confirmation. I'm happy to have insurance from a trustworthy company. For your reference, the new car is now registered in my name.\n\nAlthough I made the initial payment to you by credit card, I plan to follow the process of paying by check from now on.\n\nI also wanted to let you know that I have not yet received the insurance certificate. I looked for one that I could download from your Web site, but I could not find anything. Could you please send me a copy of the certificate?\n\nSincerely,\nManuel Torres`
            }
        ],
        questions: [
            {
                id: "p7-t4-q176",
                questionNo: 176,
                text: "What can be inferred about Mr. Torres?",
                options: {
                    "A": "He is moving to a new home.",
                    "B": "He has a new automobile.",
                    "C": "He will be retiring soon.",
                    "D": "He recently opened a bank account."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                explanation: "첫 번째 이메일에서 Mr. Torres의 '새 차량(new vehicle)'에 대한 종합 자동차 보험을 제공한다고 명시되어 있습니다. 따라서 그는 새 자동차를 가지고 있음을 알 수 있습니다."
            },
            {
                id: "p7-t4-q177",
                questionNo: 177,
                text: "In the first e-mail, the word \"coverage\" in paragraph 1, line 3, is closest in meaning to",
                options: {
                    "A": "Announcement",
                    "B": "Examination",
                    "C": "Commentary",
                    "D": "Protection"
                },
                correctAnswer: "D",
                classification: "P7_VOCABULARY",
                explanation: "'coverage'는 보험 문맥에서 보장 범위 또는 '보호(Protection)'를 의미합니다. 정답은 (D)입니다."
            },
            {
                id: "p7-t4-q178",
                questionNo: 178,
                text: "What does Ms. Patel recommend that Mr. Torres do?",
                options: {
                    "A": "Call an agent if needed",
                    "B": "Register at a local office",
                    "C": "Place an order promptly",
                    "D": "Update an agreement"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "첫 번째 이메일에서 Ms. Patel은 차량 사고가 발생하면 가능한 한 빨리 에이전트에게 연락(contact an agent)하라고 권장했습니다. 정답은 (A)입니다."
            },
            {
                id: "p7-t4-q179",
                questionNo: 179,
                text: "How does Mr. Torres intend to make future payments?",
                options: {
                    "A": "In person",
                    "B": "By credit card",
                    "C": "By electronic transfer",
                    "D": "By personal check"
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "두 번째 이메일에서 Mr. Torres는 초기 결제는 신용카드로 했지만, 앞으로는 수표로 결제(paying by check)할 계획이라고 언급했습니다. 정답은 (D)입니다."
            },
            {
                id: "p7-t4-q180",
                questionNo: 180,
                text: "What does Mr. Torres state that he looked for online?",
                options: {
                    "A": "Directions to an office",
                    "B": "A document to download",
                    "C": "Reviews from customers",
                    "D": "Contact information"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "두 번째 이메일에서 Mr. Torres는 웹사이트에서 다운로드할 수 있는 보험 증명서(insurance certificate)를 찾았지만 찾을 수 없었다고 언급했습니다. 정답은 (B)입니다."
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
                contextType: "P5",
                docType: "SCHEDULE",
                title: "Tour Schedule for Book Launch by Andrew Darr",
                content: `At each appearance, Mr. Darr will read an excerpt from his new novel, Down the Mountainside, followed by a question-and-answer session. Afterward, Mr. Darr will be available to sign copies of his books.\n\n| Venue | City | Date | Time |\n|---|---|---|---|\n| Neighbourhood Books | Toronto, Ontario | 18 May | 6:00 P.M. |\n| Weststock Books and Stationery | Ottawa, Ontario | 27 May | 7:00 P.M. |\n| Portage Avenue Books | Winnipeg, Manitoba | 6 June | 6:30 P.M. |\n| Downtown Books and Café | Regina, Saskatchewan | 15 June | 7:00 P.M. |`
            },
            {
                id: "p7-t4-s12-p2",
                contextType: "P4",
                docType: "REVIEW",
                title: "Book Review: Down the Mountainside",
                content: `Reviewer: Camila Lin\nDate: 15 May\n\nAndrew Darr, the author of the best-selling series about detective Charles Martin, will be visiting our city this week, appearing at Neighbourhood Books to promote his new novel, Down the Mountainside. The new work sees Martin investigating mysterious events at a remote mountain lodge.\n\nDarr's storytelling has come a long way since readers first met Charles Martin in The Footpath, and this installment in Darr's strongest work to date. Fans of the series will welcome the return of Darr's wit after a three-year wait, and newcomers to the Martin series are sure to find themselves captivated.\n\nThe story includes the right balance of suspense and humour, with an ending that is unpredictable even to the most devoted Darr reader. I highly recommend this book to all mystery fans. You won't be disappointed.`
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
                classification: "P7_NEGATIVE",
                explanation: "일정표 서두에서 Mr. Darr는 책 발췌독(reading), 질의응답(Q&A), 사인회(sign copies)를 할 것이라고 명시했으나, 사진 촬영은 언급되지 않았습니다."
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
                classification: "P7_LINK",
                explanation: "리뷰어는 Mr. Darr가 이번 주에 '우리 도시(our city)'를 방문하여 'Neighbourhood Books'에 출연한다고 했습니다. 일정표를 보면 Neighbourhood Books는 Toronto에 위치해 있습니다."
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
                explanation: "리뷰에서 Charles Martin에 관한 '베스트셀러 시리즈(best-selling series)'의 작가라고 언급했으며, 이번 작품도 Martin이 사건을 수사하는 내용이므로 시리즈의 일부임을 알 수 있습니다."
            },
            {
                id: "p7-t4-q184",
                questionNo: 184,
                text: "Who is Mr. Martin?",
                options: {
                    "A": "An author",
                    "B": "A mystery fan",
                    "C": "A fictional detective",
                    "D": "The owner of a bookstore"
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                explanation: "리뷰에서 Charles Martin은 소설 속에서 사건을 조사하는 '탐정(detective)' 캐릭터로 묘사되었습니다. 따라서 허구의 인물인 탐정입니다."
            },
            {
                id: "p7-t4-q185",
                questionNo: 185,
                text: "According to the review, who would most likely read Down the Mountainside?",
                options: {
                    "A": "People who like to read mysteries",
                    "B": "People who enjoy novels based on true events",
                    "C": "People who travel frequently",
                    "D": "People who prefer science fiction"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "리뷰어는 마지막 문장에서 이 책을 모든 '미스터리 팬들(mystery fans)'에게 강력히 추천한다고 명시했습니다."
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
                docType: "REPORT",
                title: "Annual Citrus Production in Yuma County",
                content: `• 12 tons of citrus fruit\n• Over 120,000 boxes of lemons\n• 15,000 boxes of oranges\n• 9,000 boxes of grapefruit\n• $190 million in revenue\n\nEmploying close to 3,000 workers and contributing nearly $2 million in taxes to fund public services for the county\n\n—Arizona Agriculture Division`
            },
            {
                id: "p7-t4-s13-p2",
                contextType: "P1",
                docType: "LETTER",
                content: `City West Bank\n550 Quentin Avenue\nPhoenix, Arizona 85007\n\nMarch 31\n\nDomingo Ramirez, Director\nArizona Agriculture Division\nYuma County Office\nYuma, Arizona 85364\n\nDear Mr. Ramirez,\n\nI read the recent report from the Arizona Agriculture Division summarizing Yuma County's success in the citrus industry. City West Bank wants to help the Arizona citrus industry grow. We offer low-interest loans and provide expert advice through our connections to area chambers of commerce and to agricultural researchers at Arizona's state universities.\n\nWe recognize that agribusiness in southwest Arizona is growing as a result of the popularity of farm tours, bird-watching, and scenic country lodging, but tourism is only one part of the story. The hard work and dedication of citrus growers and farmers in many counties in Arizona and are poised to help the citrus growers in Yuma County. Together, we can accomplish great things.\n\nSincerely,\nBianca Schreiber\nDirector, Industry Investment Programs`
            },
            {
                id: "p7-t4-s13-p3",
                contextType: "P3",
                docType: "ARTICLE",
                title: "Schreiber Named Vice President of National Investment Strategies",
                content: `PHOENIX (May 18)—City West Bank announced today that Ms. Bianca Schreiber has been promoted to vice president of National Investment Strategies effective February 1. Ms. Schreiber currently oversees City West Bank's Industry Investment Programs, serving businesses throughout Arizona.\n\n"Ms. Schreiber's efforts have led to successful investment in the agricultural sector. Ms. Schreiber's work with the Arizona Agriculture Division have significantly boosted citrus production. Wheat production has also increased," said Domingo Ramirez, director of the Arizona Agriculture Division. "Ms. Schreiber's keen insight will make her a great asset to City West Bank in her new role."`
            }
        ],
        questions: [
            {
                id: "p7-t4-q186",
                questionNo: 186,
                text: "What does the report indicate about the Yuma County region?",
                options: {
                    "A": "It has a large workforce.",
                    "B": "Several types of fruit are cultivated there.",
                    "C": "More workers are needed for the farms.",
                    "D": "New types of fruit are being produced there."
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "보고서에서 레몬, 오렌지, 자몽(lemons, oranges, grapefruit) 등 여러 종류의 감귤류 과일이 생산된다고 수치와 함께 명시되어 있습니다."
            },
            {
                id: "p7-t4-q187",
                questionNo: 187,
                text: "What is one reason Ms. Schreiber writes to Mr. Ramirez?",
                options: {
                    "A": "To explain the benefits of doing business together",
                    "B": "To outline the findings in the report",
                    "C": "To recommend a loan payment schedule",
                    "D": "To offer him advice from university researchers"
                },
                correctAnswer: "A",
                classification: "P7_PURPOSE",
                explanation: "편지에서 Ms. Schreiber는 은행이 제공할 수 있는 대출과 전문가 조언 등을 언급하며, 함께 협력하여 큰 일을 이룰 수 있다는 점을 어필하고 있습니다."
            },
            {
                id: "p7-t4-q188",
                questionNo: 188,
                text: "According to the letter, why do tourists visit Yuma County?",
                options: {
                    "A": "To shop at farmers markets",
                    "B": "To take pictures",
                    "C": "To attend conferences",
                    "D": "To observe wildlife"
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "편지에서 관광업 성장의 원인으로 농장 투어와 함께 '조류 관찰(bird-watching)'을 언급했습니다. 이는 야생동물을 관찰하는 활동에 해당합니다."
            },
            {
                id: "p7-t4-q189",
                questionNo: 189,
                text: "What is suggested about Mr. Ramirez?",
                options: {
                    "A": "He accepted Ms. Schreiber's proposal.",
                    "B": "He has worked with Ms. Schreiber.",
                    "C": "He is a member of the Yuma Chamber of Commerce.",
                    "D": "He recently bought a citrus farm."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                explanation: "기사(통합지문 3)에서 Mr. Ramirez는 Ms. Schreiber의 공로를 칭찬하며 그녀의 노력이 생산량 증대에 기여했다고 언급했습니다. 이는 그들이 실무적으로 협력했음을 시사합니다."
            },
            {
                id: "p7-t4-q190",
                questionNo: 190,
                text: "For what accomplishment does Mr. Ramirez praise Ms. Schreiber?",
                options: {
                    "A": "Arranging the shipping of agricultural products",
                    "B": "Opening many City West Bank branch offices",
                    "C": "Helping to increase citrus production",
                    "D": "Promoting Yuma County as a vacation destination"
                },
                correctAnswer: "C",
                classification: "P7_LINK",
                explanation: "기사에서 Mr. Ramirez는 Ms. Schreiber가 감귤류 생산(citrus production)을 크게 증대시키는 데 기여했다고 칭찬했습니다."
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
                contextType: "P1",
                docType: "INVITATION",
                content: `https://www.unetcon.org/messages_audreysmith80\n\nPending Invitations\n\nUnetcon — Message Center\n\nFrom: Don Fitzpatrick\nWilsonville Financial\nTo: Audrey Smith\n\nDear Audrey,\n\nPlease accept this invitation to connect professionally on Unetcon. I am a fellow Stonerook University graduate and am always looking to expand my network. In this case, I am also reaching out to see if you would be interested in joining our team at Wilsonville Financial. I'm very impressed with current with everything that our fellow graduates are up to.\nhttps://www.unetcon.org/private/stonerookgrads\n\nKind regards,\nDon Fitzpatrick\n\nAccept Invitation | Ignore Invitation | Reply to Don`
            },
            {
                id: "p7-t4-s14-p2",
                contextType: "P4",
                docType: "WEB_PAGE",
                title: "Stonerook University Graduates",
                content: `Check out the distinguished successes and latest updates from Stonerook graduates!\n\n| Current | Education | Professional |\n|---|---|---|\n| **Director**, Albright School of Business<br>**Founder and Director**, Clear Path | **Master of Business Administration** — Stonerook University<br>**Bachelor of Arts in Education Studies** — Stonerook University | Mr. Hilliard has led the Albright School of Business since 2017. He has published and presented not extensive research on emerging markets in West Africa while working in Lagos, Nigeria. Two years ago, he founded Clear Path, a business that helps international students who wish to pursue studies in the United States. |\n\nPhone: 845-555-0139\nE-mail: jhilliard@myclearpath.edu\nAddress: 530 N Kensington St., Charlotte, SC 29423`
            },
            {
                id: "p7-t4-s14-p3",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Jonah Hilliard <jhilliard@myclearpath.edu>\nFrom: Audrey Smith <audrey.smith@mycloud.com>\nDate: 10 September\nSubject: Referral\n\nDear Jonah,\n\nIt has been a long time since we last talked. I recently came across your profile on Unetcon and saw that you are now heading the business school at McClellan University. Congratulations to you on your most recent business venture—Clear Path already has quite an impressive reputation! I have a nephew who is interested in pursuing a degree in management systems in the United States, and I was hoping I could put you in touch with him. His name is Mateo, and he is currently studying in Manchester.\n\nAudrey Smith`
            }
        ],
        questions: [
            {
                id: "p7-t4-q191",
                questionNo: 191,
                text: "What does the invitation indicate about Unetcon?",
                options: {
                    "A": "It is a business consulting firm.",
                    "B": "It is a textbook publisher.",
                    "C": "It is an employment agency.",
                    "D": "It is a professional networking Web site."
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                explanation: "초대장에서 '전문적으로 연결(connect professionally)'하자고 제안하며 네트워크 확장을 언급하므로, 이는 전문 네트워킹 웹사이트임을 알 수 있습니다."
            },
            {
                id: "p7-t4-q192",
                questionNo: 192,
                text: "According to the Web page, where is Mr. Hilliard currently working?",
                options: {
                    "A": "In Lagos",
                    "B": "In Charlotte",
                    "C": "In Wilsonville",
                    "D": "In Manchester"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "웹 페이지 하단의 주소 정보에 'Charlotte, SC'가 명시되어 있으므로 현재 그곳에서 근무하고 있음을 알 수 있습니다."
            },
            {
                id: "p7-t4-q193",
                questionNo: 193,
                text: "What is suggested about Ms. Smith?",
                options: {
                    "A": "She taught at Stonerook University.",
                    "B": "She has professional experience in finance.",
                    "C": "She wrote a book about her career.",
                    "D": "She plans to visit Lagos this year."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                explanation: "Don Fitzpatrick이 그녀에게 'Wilsonville Financial' 팀 합류를 제안한 것으로 보아, 그녀가 금융 관련 전문 지식이나 경력이 있음을 추론할 수 있습니다."
            },
            {
                id: "p7-t4-q194",
                questionNo: 194,
                text: "What do Ms. Smith and Mr. Hilliard have in common?",
                options: {
                    "A": "They cofounded Clear Path.",
                    "B": "They are colleagues at Pryor and Mattel.",
                    "C": "They are graduates of the same university.",
                    "D": "They both conducted research in Nigeria."
                },
                correctAnswer: "C",
                classification: "P7_LINK",
                explanation: "지문 1에서 Don은 Audrey가 Stonerook 대학 동문이라고 언급했고, 지문 2의 웹 페이지는 해당 대학 졸업생들의 소식을 다루고 있으므로 두 사람 모두 같은 대학 졸업생입니다."
            },
            {
                id: "p7-t4-q195",
                questionNo: 195,
                text: "What is the purpose of Ms. Smith's e-mail to Mr. Hilliard?",
                options: {
                    "A": "To request his professional services",
                    "B": "To provide a professional reference",
                    "C": "To conduct an informational interview",
                    "D": "To inquire about the Albright School of Business"
                },
                correctAnswer: "A",
                classification: "P7_PURPOSE",
                explanation: "Audrey는 조카 Mateo를 미국 유학을 돕는 Mr. Hilliard의 사업(Clear Path)과 연결해주고 싶다고 말했습니다. 이는 그의 전문적인 유학 컨설팅 서비스를 요청하는 것입니다."
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
                docType: "BROCHURE",
                content: `www.modernsalonacademy.ca\n\nEstablished more than twenty years ago, Modern Salon Academy is Toronto's most respected beauty school. We provide students with individualized instruction from leading industry professionals in the following programs:\n\n• Cosmetology I: Gain foundational knowledge of haircutting and styling\n• Cosmetology II: Learn techniques in haircutting, styling, and coloring\n• Skin Care: Learn techniques in providing advanced skin care treatments\n• Leadership: Study salon management, business operations, and compliance\n\nModern Salon Academy is a winner of the International Cosmetology Society's prestigious Award of Excellence. It is no surprise, then, that over 95 percent of our students find employment in the beauty industry within six months of graduating from our academy.`
            },
            {
                id: "p7-t4-s15-p2",
                contextType: "P3",
                docType: "ARTICLE",
                title: "Modern Salon Academy Expands to Ontario",
                content: `TORONTO (23 August)—Modern Salon Academy, a highly regarded beauty school based in Ottawa, is opening a second location in Oshawa. The school is already admitting students for classes that are scheduled to begin in October.\n\nModern Salon Academy has had a substantial rise in enrollment over the past five years. "We have had a waiting list," says Francine Dupuis, the founder of Modern Salon Academy, notes, "More than half our students live outside the city limits, so opening a second location makes a lot of sense."\n\nModern Salon Academy offers professional training and certification for careers in a variety of areas, including hair care, skin care, and makeup. For more information about Modern Salon Academy and its curricula, visit www.modernsalonacademy.ca.\n\n—Courtesy Jaden for the Ontario Daily Times`
            },
            {
                id: "p7-t4-s15-p3",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Francine Dupuis <francine.dupuis@modernsalonacademy.ca>\nFrom: Amit Persaud <amitpersaud@shorelinebarbers.ca>\nSubject: Entry-level job opportunities\nDate: 19 November\n\nDear Ms. Dupuis,\n\nMy name is Amit Persaud, and I am the owner and operator of Shoreline Barbers. I am writing to inquire about the possibility of recruiting some entry-level employees, as my shop is just around the corner from your newly established regional campus. I am seeking highly qualified entry-level employees who can provide high-quality services.\n\nWould it be possible for me to visit the nearby campus to give interested students an opportunity to talk with me? This would be a convenient way for us to evaluate their skills and discuss potential employment opportunities. Please let me know if an arrangement can be made.\n\nSincerely,\nAmit Persaud`
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
                explanation: "이메일에서 그는 학교를 방문하여 학생들과 대화하고 기술을 평가(evaluate their skills)하고 싶다고 했습니다. 이는 학생들을 면접하겠다는 의도입니다."
            }
        ]
    }
];
