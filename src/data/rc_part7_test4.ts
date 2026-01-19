
export interface PracticePassage {
    id: string;
    type: string;
    title?: string;
    content: string;
}

export interface PracticeQuestion {
    id: string;
    text: string;
    options: string[];
    answer: string;
    explanation?: string;
}

export interface PracticeSet {
    id: string;
    type: "Double" | "Triple";
    passages: PracticePassage[];
    questions: PracticeQuestion[];
}

// RC 4회 Part 7 Double & Triple Passages (Questions 176-200)
export const test4PracticeSet: PracticeSet[] = [
    // Questions 176-180 (Double Passage)
    {
        id: "set-176-180",
        type: "Double",
        passages: [
            {
                id: "p176-1",
                type: "E-MAIL",
                content: `To: Manuel Torres <m.torres@gailmail.co.uk>
From: Anya Patel <a.patel@support.harland.co.uk>
Date: 3 May
Subject: Auto insurance

Dear Mr. Torres,

Welcome to Harland Ltd. We are pleased to provide you with comprehensive automobile insurance for your new vehicle. We have received your first premium of £80.00, and your coverage begins on 3 May.

Your billing schedule is based on an annual premium of £832.00. The remaining payments of £376.00 per month are due on the fifteenth day of each month until your policy is paid in full.

You can visit us online at www.harland.co.uk to pay bills and manage your policy. Our Web site offers easy options for managing your account information and paying your bills. You can also contact us by phone at 0800 7046 2345.

Should you have any questions or wish to change your policy, call the customer support centre at 0800 7046 2345. In the event of a vehicle incident, please contact an agent as soon as possible. Our agents are available 24 hours a day, seven days a week to assist you for trusting Harland Ltd. We look forward to providing you with superior service.

Best regards,
Anya Patel, Harland Ltd. Customer Support Agent`
            },
            {
                id: "p176-2",
                type: "E-MAIL",
                content: `To: Anya Patel <a.patel@support.harland.co.uk>
From: Manuel Torres <m.torres@gailmail.co.uk>
Date: 4 May
Subject: RE: Auto insurance

Dear Ms. Patel,

Thank you for the confirmation. I'm happy to have insurance from a trustworthy company. For your reference, the new car is now registered in my name.

Although I made the initial payment to you by credit card, I plan to follow the process of paying by check from now on.

I also wanted to let you know that I have not yet received the insurance certificate. I looked for one that I could download from your Web site, but I could not find anything. Could you please send me a copy of the certificate?

Sincerely,
Manuel Torres`
            }
        ],
        questions: [
            {
                id: "176",
                text: "What can be inferred about Mr. Torres?",
                options: [
                    "(A) He is moving to a new home.",
                    "(B) He has a new automobile.",
                    "(C) He will be retiring soon.",
                    "(D) He recently opened a bank account."
                ],
                answer: "D",
                explanation: "첫 번째 이메일에서 Mr. Torres의 새 차량에 대한 종합 자동차 보험을 제공한다고 명시되어 있습니다. 따라서 그는 새 자동차를 가지고 있습니다. 정답은 (B) '새 자동차를 가지고 있다'입니다."
            },
            {
                id: "177",
                text: "In the first e-mail, the word \"coverage\" in paragraph 1, line 3, is closest in meaning to",
                options: [
                    "(A) Announcement",
                    "(B) Examination",
                    "(C) Commentary",
                    "(D) Protection"
                ],
                answer: "B",
                explanation: "'coverage'는 보험 문맥에서 '보장, 보호'를 의미합니다. 따라서 정답은 (D) 'Protection'입니다."
            },
            {
                id: "178",
                text: "What does Ms. Patel recommend that Mr. Torres do?",
                options: [
                    "(A) Call an agent if needed",
                    "(B) Register at a local office",
                    "(C) Place an order promptly",
                    "(D) Update an agreement"
                ],
                answer: "C",
                explanation: "첫 번째 이메일에서 Ms. Patel은 차량 사고가 발생하면 가능한 한 빨리 에이전트에게 연락하라고 권장했습니다. 따라서 정답은 (A) '필요시 에이전트에게 전화하라'입니다."
            },
            {
                id: "179",
                text: "How does Mr. Torres intend to make future payments?",
                options: [
                    "(A) In person",
                    "(B) By credit card",
                    "(C) By electronic transfer",
                    "(D) By personal check"
                ],
                answer: "D",
                explanation: "두 번째 이메일에서 Mr. Torres는 초기 결제는 신용카드로 했지만 앞으로는 수표로 결제할 계획이라고 언급했습니다. 따라서 정답은 (D) '개인 수표로'입니다."
            },
            {
                id: "180",
                text: "What does Mr. Torres state that he looked for online?",
                options: [
                    "(A) Directions to an office",
                    "(B) A document to download",
                    "(C) Reviews from customers",
                    "(D) Contact information"
                ],
                answer: "B",
                explanation: "두 번째 이메일에서 Mr. Torres는 웹사이트에서 다운로드할 수 있는 보험 증명서를 찾았지만 찾을 수 없었다고 언급했습니다. 따라서 정답은 (B) '다운로드할 문서'입니다."
            }
        ]
    },
    // Questions 181-185 (Double Passage)
    {
        id: "set-181-185",
        type: "Double",
        passages: [
            {
                id: "p181-1",
                type: "SCHEDULE",
                title: "Tour Schedule for Book Launch by Andrew Darr",
                content: `At each appearance, Mr. Darr will read an excerpt from his new novel, Down the Mountainside, followed by a question-and-answer session. Afterward, Mr. Darr will be available to sign copies of his books.

| Venue | City | Date | Time |
|---|---|---|---|
| Neighbourhood Books | Toronto, Ontario | 18 May | 6:00 P.M. |
| Weststock Books and Stationery | Ottawa, Ontario | 27 May | 7:00 P.M. |
| Portage Avenue Books | Winnipeg, Manitoba | 6 June | 6:30 P.M. |
| Downtown Books and Café | Regina, Saskatchewan | 15 June | 7:00 P.M. |`
            },
            {
                id: "p181-2",
                type: "REVIEW",
                title: "Book Review: Down the Mountainside",
                content: `Reviewer: Camila Lin
Date: 15 May

Andrew Darr, the author of the best-selling series about detective Charles Martin, will be visiting our city this week, appearing at Neighbourhood Books to promote his new novel, Down the Mountainside. The new work sees Martin investigating mysterious events at a remote mountain lodge.

Darr's storytelling has come a long way since readers first met Charles Martin in The Footpath, and this installment in Darr's strongest work to date. Fans of the series will welcome the return of Darr's wit after a three-year wait, and newcomers to the Martin series are sure to find themselves captivated.

The story includes the right balance of suspense and humour, with an ending that is unpredictable even to the most devoted Darr reader. I highly recommend this book to all mystery fans. You won't be disappointed.`
            }
        ],
        questions: [
            {
                id: "181",
                text: "According to the schedule, what is NOT mentioned as an activity for Mr. Darr?",
                options: [
                    "(A) Reading from his book",
                    "(B) Answering questions",
                    "(C) Signing books for individuals",
                    "(D) Taking photos with participants"
                ],
                answer: "C",
                explanation: "일정표에서 Mr. Darr는 책을 읽고, 질문에 답하고, 책에 서명할 것이라고 명시되어 있습니다. 참가자들과 사진을 찍는 것은 언급되지 않았습니다. 따라서 정답은 (D) '참가자들과 사진 찍기'입니다."
            },
            {
                id: "182",
                text: "What city is the book reviewer from?",
                options: [
                    "(A) Toronto",
                    "(B) Ottawa",
                    "(C) Winnipeg",
                    "(D) Regina"
                ],
                answer: "D",
                explanation: "리뷰에서 Mr. Darr가 이번 주에 우리 도시를 방문할 것이라고 언급했으며, Neighbourhood Books에 출연한다고 했습니다. 일정표를 보면 Neighbourhood Books는 Toronto에 있습니다. 따라서 정답은 (A) 'Toronto'입니다."
            },
            {
                id: "183",
                text: "What is most likely true about Down the Mountainside?",
                options: [
                    "(A) It is the author's first book.",
                    "(B) It is a collection of short stories.",
                    "(C) It is part of a series.",
                    "(D) It is being translated into French."
                ],
                answer: "A",
                explanation: "리뷰에서 Down the Mountainside는 Charles Martin 시리즈의 일부이며, The Footpath에서 독자들이 처음 Martin을 만났다고 언급했습니다. 따라서 정답은 (C) '시리즈의 일부이다'입니다."
            },
            {
                id: "184",
                text: "Who is Mr. Martin?",
                options: [
                    "(A) An author",
                    "(B) A reviewer",
                    "(C) The writer of the review",
                    "(D) The owner of a bookstore"
                ],
                answer: "D",
                explanation: "리뷰에서 Charles Martin은 Andrew Darr의 탐정 시리즈의 주인공이라고 명시되어 있습니다. 따라서 Mr. Martin은 책 속 인물입니다."
            },
            {
                id: "185",
                text: "According to the review, who would most likely read Down the Mountainside?",
                options: [
                    "(A) People who like to read mysteries",
                    "(B) People who enjoy novels based on true events",
                    "(C) People who travel frequently",
                    "(D) People who prefer science fiction"
                ],
                answer: "D",
                explanation: "리뷰 마지막에서 모든 미스터리 팬들에게 이 책을 강력히 추천한다고 언급했습니다. 따라서 정답은 (A) '미스터리를 좋아하는 사람들'입니다."
            }
        ]
    },
    // Questions 186-190 (Triple Passage)
    {
        id: "set-186-190",
        type: "Triple",
        passages: [
            {
                id: "p186-1",
                type: "REPORT",
                title: "Annual Citrus Production in Yuma County",
                content: `• 12 tons of citrus fruit
• Over 120,000 boxes of lemons
• 15,000 boxes of oranges
• 9,000 boxes of grapefruit
• $190 million in revenue

Employing close to 3,000 workers and contributing nearly $2 million in taxes to fund public services for the county

—Arizona Agriculture Division`
            },
            {
                id: "p186-2",
                type: "LETTER",
                content: `City West Bank
550 Quentin Avenue
Phoenix, Arizona 85007

March 31

Domingo Ramirez, Director
Arizona Agriculture Division
Yuma County Office
Yuma, Arizona 85364

Dear Mr. Ramirez,

I read the recent report from the Arizona Agriculture Division summarizing Yuma County's success in the citrus industry. City West Bank wants to help the Arizona citrus industry grow. We offer low-interest loans and provide expert advice through our connections to area chambers of commerce and to agricultural researchers at Arizona's state universities.

We recognize that agribusiness in southwest Arizona is growing as a result of the popularity of farm tours, bird-watching, and scenic country lodging, but tourism is only one part of the story. The hard work and dedication of citrus growers and farmers in many counties in Arizona and are poised to help the citrus growers in Yuma County. Together, we can accomplish great things.

Sincerely,
Rebecca Schreiber
Bianca Schreiber
Director, Member
Industry Investment Programs`
            },
            {
                id: "p186-3",
                type: "ARTICLE",
                title: "Schreiber Named Vice President of National Investment Strategies",
                content: `PHOENIX (May 18)—City West Bank announced today that Ms. Bianca Schreiber has been promoted to vice president of National Investment Strategies effective February 1. Ms. Schreiber currently oversees City West Bank's Industry Investment Programs, serving businesses throughout Arizona.

"Ms. Schreiber's efforts have led to successful investment in the agricultural sector. Ms. Schreiber's work with the Arizona Agriculture Division have significantly boosted citrus production. Wheat production has also increased," said Domingo Ramirez, director of the Arizona Agriculture Division. "Ms. Schreiber's keen insight will make her a great asset to City West Bank in her new role."`
            }
        ],
        questions: [
            {
                id: "186",
                text: "What does the report indicate about the Yuma County region?",
                options: [
                    "(A) It does not use as much there.",
                    "(B) Several types of fruit are cultivated there.",
                    "(C) More workers are needed for the farms.",
                    "(D) New types of fruit are being produced there."
                ],
                answer: "A",
                explanation: "보고서에서 레몬, 오렌지, 자몽 등 여러 종류의 과일이 재배된다고 명시되어 있습니다. 따라서 정답은 (B) '여러 종류의 과일이 재배된다'입니다."
            },
            {
                id: "187",
                text: "What is one reason Ms. Schreiber writes to Mr. Ramirez?",
                options: [
                    "(A) To explain the benefits of doing business together",
                    "(B) To outline the findings in the report",
                    "(C) To recommend a loan payment schedule",
                    "(D) To offer him advice from university researchers"
                ],
                answer: "C",
                explanation: "편지에서 Ms. Schreiber는 City West Bank가 저금리 대출을 제공하고 전문가 조언을 제공한다고 언급하며 협력의 이점을 설명하고 있습니다. 따라서 정답은 (A) '함께 사업하는 이점을 설명하기 위해'입니다."
            },
            {
                id: "188",
                text: "According to the letter, why do tourists visit Yuma County?",
                options: [
                    "(A) To shop at farmers markets",
                    "(B) To take pictures",
                    "(C) To attend conferences",
                    "(D) To observe wildlife"
                ],
                answer: "B",
                explanation: "편지에서 관광객들이 농장 투어, 조류 관찰, 시골 숙박 등을 위해 방문한다고 언급했습니다. 따라서 정답은 (D) '야생동물을 관찰하기 위해'입니다."
            },
            {
                id: "189",
                text: "What is suggested about Mr. Ramirez?",
                options: [
                    "(A) He accepted Ms. Schreiber's proposal.",
                    "(B) He has worked with Ms. Schreiber.",
                    "(C) He is a member of the Yuma Chamber of Commerce.",
                    "(D) He recently bought a citrus farm."
                ],
                answer: "C",
                explanation: "기사에서 Mr. Ramirez는 Ms. Schreiber의 노력이 감귤 생산을 크게 증가시켰다고 언급했습니다. 이는 그들이 함께 일했음을 시사합니다. 따라서 정답은 (B) 'Ms. Schreiber와 함께 일했다'입니다."
            },
            {
                id: "190",
                text: "For what accomplishment does Mr. Ramirez praise Ms. Schreiber?",
                options: [
                    "(A) Arranging the shipping of agricultural products",
                    "(B) Opening many City West Bank branch offices",
                    "(C) Helping to increase grapefruit production",
                    "(D) Promoting Yuma County as a vacation destination"
                ],
                answer: "D",
                explanation: "기사에서 Mr. Ramirez는 Ms. Schreiber의 노력이 감귤 생산을 크게 증가시켰다고 칭찬했습니다. 따라서 정답은 (C) '자몽 생산 증가를 도왔다'입니다."
            }
        ]
    },
    // Questions 191-195 (Triple Passage)
    {
        id: "set-191-195",
        type: "Triple",
        passages: [
            {
                id: "p191-1",
                type: "INVITATION",
                content: `https://www.unetcon.org/messages_audreysmith80

Pending Invitations

Unetcon — Message Center

From: Don Fitzpatrick
Wilsonville Financial
To: Audrey Smith

Dear Audrey,

Please accept this invitation to connect professionally on Unetcon. I am a fellow Stonerook University graduate and am always looking to expand my network. In this case, I am also reaching out to see if you would be interested in joining our team at Wilsonville Financial. I'm very impressed with current with everything that our fellow graduates are up to.
https://www.unetcon.org/private/stonerookgrads

Kind regards,
Don Fitzpatrick

Accept Invitation | Ignore Invitation | Reply to Don`
            },
            {
                id: "p191-2",
                type: "WEB PAGE",
                title: "Stonerook University Graduates",
                content: `Check out the distinguished successes and latest updates from Stonerook graduates!

| Current | Education | Professional |
|---|---|---|
| **Director**, Albright School of Business<br>**Founder and Director**, Clear Path | **Master of Business Administration** — Stonerook University<br>**Bachelor of Arts in Education Studies** — Stonerook University | Mr. Hilliard has led the Albright School of Business since 2017. He has published and presented not extensive research on emerging markets in West Africa while working in Lagos, Nigeria. Two years ago, he founded Clear Path, a business that helps international students who wish to pursue studies in the United States. |

Phone: 845-555-0139
E-mail: jhilliard@myclearpath.edu
Address: 530 N Kensington St., Charlotte, SC 29423`
            },
            {
                id: "p191-3",
                type: "E-MAIL",
                content: `To: Audrey Smith <audrey.smith@mycloud.com>
From: Jonah Hilliard <jhilliard@myclearpath.edu>
Date: 10 September
Subject: Referral

Dear Jonah,

It has been a long time since we last talked. I recently came across your profile on Unetcon and saw that you are now heading the business school at McClellan University. Congratulations to you on your most recent business venture—Clear Path already has quite an impressive reputation! I have a nephew who is interested in pursuing a degree in management systems in the United States, and I was hoping I could put you in touch with him. His name is Mateo, and he is currently studying in Manchester.

Audrey Smith`
            }
        ],
        questions: [
            {
                id: "191",
                text: "What does the invitation indicate about Unetcon?",
                options: [
                    "(A) It is a business consulting firm.",
                    "(B) It is a business consulting firm.",
                    "(C) It is an employment agency.",
                    "(D) It is a professional networking Web site."
                ],
                answer: "C",
                explanation: "초대장에서 Unetcon에서 전문적으로 연결하자고 언급했습니다. 이는 전문 네트워킹 웹사이트임을 시사합니다. 따라서 정답은 (D) '전문 네트워킹 웹사이트이다'입니다."
            },
            {
                id: "192",
                text: "According to the Web page, where is Mr. Hilliard currently working?",
                options: [
                    "(A) In Lagos",
                    "(B) In Charlotte",
                    "(C) In Wilsonville",
                    "(D) In Manchester"
                ],
                answer: "D",
                explanation: "웹 페이지에서 Mr. Hilliard의 주소가 Charlotte, SC에 있다고 명시되어 있습니다. 따라서 정답은 (B) 'Charlotte에서'입니다."
            },
            {
                id: "193",
                text: "What is suggested about Ms. Smith?",
                options: [
                    "(A) She taught at Stonerook University.",
                    "(B) She works at Wilsonville Financial.",
                    "(C) She wrote a book about her career.",
                    "(D) She plans to visit Lagos this year."
                ],
                answer: "B",
                explanation: "초대장에서 Don Fitzpatrick은 Ms. Smith에게 Stonerook University 동문이라고 언급했으며, Wilsonville Financial 팀에 합류하는 것에 관심이 있는지 물었습니다. 이는 그녀가 아직 그곳에서 일하지 않음을 시사합니다."
            },
            {
                id: "194",
                text: "What do Ms. Smith and Mr. Hilliard have in common?",
                options: [
                    "(A) They cofounded Clear Path.",
                    "(B) They are colleagues at Pryor and Mattel.",
                    "(C) They were classmates at Turnbull University.",
                    "(D) They both conducted research in Nigeria."
                ],
                answer: "D",
                explanation: "초대장과 웹 페이지를 보면 둘 다 Stonerook University 졸업생입니다. 이메일에서도 Ms. Smith가 Unetcon에서 Mr. Hilliard의 프로필을 보았다고 언급했으므로, 둘 다 같은 대학 출신임을 알 수 있습니다."
            },
            {
                id: "195",
                text: "What is the purpose of Ms. Smith's e-mail to Mr. Hilliard?",
                options: [
                    "(A) To request his professional services",
                    "(B) To provide a professional reference",
                    "(C) To conduct an informational interview",
                    "(D) To inquire about the Albright School of Business"
                ],
                answer: "A",
                explanation: "이메일에서 Ms. Smith는 조카 Mateo를 Mr. Hilliard와 연결해주고 싶다고 언급했습니다. Mateo는 미국에서 경영 시스템 학위를 추구하는 데 관심이 있으며, Clear Path는 미국 유학을 원하는 국제 학생들을 돕는 사업입니다. 따라서 정답은 (A) '전문 서비스를 요청하기 위해'입니다."
            }
        ]
    },
    // Questions 196-200 (Triple Passage)
    {
        id: "set-196-200",
        type: "Triple",
        passages: [
            {
                id: "p196-1",
                type: "BROCHURE",
                content: `www.modernsalonacademy.ca

Established more than twenty years ago, Modern Salon Academy is Toronto's most respected beauty school. We provide students with individualized instruction from leading industry professionals in the following programs:

• Cosmetology I: Gain foundational knowledge of haircutting and styling
• Cosmetology II: Learn techniques in haircutting, styling, and coloring
• Skin Care: Learn techniques in providing advanced skin care treatments
• Leadership: Study salon management, business operations, and compliance

Modern Salon Academy is a winner of the International Cosmetology Society's prestigious Award of Excellence. It is no surprise, then, that over 95 percent of our students find employment in the beauty industry within six months of graduating from our industries.`
            },
            {
                id: "p196-2",
                type: "ARTICLE",
                title: "Modern Salon Academy Expands to Ontario",
                content: `TORONTO (23 August)—Modern Salon Academy, a highly regarded beauty school based in Ottawa, is opening a second location in Oshawa. The school is already admitting students for classes that are scheduled to begin in October.

Modern Salon Academy has had a substantial rise in enrollment over the past five years. "We have had a waiting list," says Francine Dupuis, the founder of Modern Salon Academy, notes, "More than half our students live outside the city limits, so opening a second location makes a lot of sense."

Modern Salon Academy offers professional training and certification for careers in a variety of areas, including hair care, skin care, and makeup. For more information about Modern Salon Academy and its curricula, visit www.modernsalonacademy.ca.

—Courtesy Jaden for the Ontario Daily Times`
            },
            {
                id: "p196-3",
                type: "E-MAIL",
                content: `To: Francine Dupuis <francine.dupuis@modernsalonacademy.ca>
From: Amit Persaud <amitpersaud@northerbers.ca>
Subject: Entry-level job opportunities
Date: 19 November

Dear Ms. Dupuis,

My name is Amit Persaud, and I am the owner and operator of Shoreline Barbers. I am writing to inquire about the possibility of recruiting some entry-level employees, which is just around the corner from your newly established regional campus. I am seeking highly qualified entry-level employees who can provide high-quality services.

Would it be possible for me to visit the nearby campus to give interested students an opportunity to talk with me? This would be a convenient way for us to evaluate their skills and discuss potential employment opportunities. Please let me know if an arrangement can be made.

Sincerely,
Amit Persaud`
            }
        ],
        questions: [
            {
                id: "196",
                text: "How does Modern Salon Academy teach its students?",
                options: [
                    "(A) Through online courses",
                    "(B) Through academic lectures",
                    "(C) Through one-on-one instruction",
                    "(D) Through large-group discussions"
                ],
                answer: "A",
                explanation: "브로셔에서 학생들에게 업계 최고의 전문가로부터 개별화된 교육을 제공한다고 명시되어 있습니다. 따라서 정답은 (C) '일대일 교육을 통해'입니다."
            },
            {
                id: "197",
                text: "According to the article, what has increased at Modern Salon Academy?",
                options: [
                    "(A) The cost of tuition",
                    "(B) The number of instructors",
                    "(C) The requirements for admission",
                    "(D) The hours needed for certification"
                ],
                answer: "C",
                explanation: "기사에서 지난 5년간 등록이 크게 증가했다고 언급했습니다. 대기자 명단이 있었다고 했습니다."
            },
            {
                id: "198",
                text: "What is most likely true about Shoreline Barbers?",
                options: [
                    "(A) It is located in Oshawa.",
                    "(B) It is opening a shop in Toronto.",
                    "(C) It has very affordable services.",
                    "(D) It has won several awards."
                ],
                answer: "D",
                explanation: "이메일에서 Mr. Persaud는 새로 설립된 지역 캠퍼스 근처에 있다고 언급했습니다. 기사에서 새 캠퍼스는 Oshawa에 있다고 했으므로, Shoreline Barbers는 Oshawa에 있을 가능성이 높습니다. 따라서 정답은 (A) 'Oshawa에 위치해 있다'입니다."
            },
            {
                id: "199",
                text: "Who would best meet Mr. Persaud's needs?",
                options: [
                    "(A) Students in Cosmetology I",
                    "(B) Students in Cosmetology II",
                    "(C) Students in Skin Care",
                    "(D) Students in Leadership"
                ],
                answer: "B",
                explanation: "Mr. Persaud는 이발소를 운영하며 헤어 서비스를 제공할 수 있는 초급 직원을 찾고 있습니다. Cosmetology II는 헤어 커팅, 스타일링, 염색 기술을 배우므로 가장 적합합니다. 따라서 정답은 (B) 'Cosmetology II 학생들'입니다."
            },
            {
                id: "200",
                text: "According to the e-mail, what does Mr. Persaud want to do?",
                options: [
                    "(A) Establish another business",
                    "(B) Relocate to a different city",
                    "(C) Teach some classes",
                    "(D) Interview some students"
                ],
                answer: "D",
                explanation: "이메일에서 Mr. Persaud는 캠퍼스를 방문하여 관심 있는 학생들에게 자신과 이야기할 기회를 주고 싶다고 언급했습니다. 이는 학생들을 면접하고 싶다는 의미입니다. 따라서 정답은 (D) '학생들을 면접하다'입니다."
            }
        ]
    }
];
