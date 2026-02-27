import { Part7Test } from './types';

export const test2Data: Part7Test = {
    testId: 2,
    vol: 3,
    title: "Test 2",
    sets: [
        // Questions 147-148: Sign
        {
            id: "v3-p7-t2-set1",
            setType: "Single",
            questionRange: "147-148",
            passages: [
                {
                    id: "v3-p7-t2-s1-p1",
                    contextType: "P2_OFFI",
                    docType: "NOTICE",
                    title: "WHAT'S GOING ON HERE?",
                    content: `**Work in progress: Commercial**\n**Anticipated completion date: March 1**\n\n**Owner**\nWalker Booksellers\n4634 Goosetown Drive\nArden, NC\n\n**General Contractor**\nMatthiesen Builders\n4500 Smith Street\nRaleigh, NC\n\nAll work permits are on file with the Department of Planning.\nTo report a problem at this work site, call 919-555-0134.`,
                    translation: `여기에서 무슨 일이 벌어지고 있나요?\n진행 중인 작업: 상업용\n예상 완공 일자: 3월 1일\n\n소유주\n워커 서점\n구즈타운 길 4634번지\n아덴, 노스캐롤라이나\n\n종합 건설업체\n매티슨 빌더스\n스미스 가 4500번지\n롤리, 노스캐롤라이나\n\n모든 작업 허가서는 기획부에서 보관하고 있습니다.\n작업 현장에서 발생한 문제는 919-555-0134로 전화해 알려주십시오.`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t2-q147",
                    questionNo: 147,
                    text: "Where would the sign most likely appear?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "Above a book display",
                        "B": "At a construction site",
                        "C": "On a residential building",
                        "D": "In a university classroom"
                    },
                    correctAnswer: "B",
                    translation: "표지판은 어디에 있겠는가?",
                    explanation: "상단을 보면 표지판이 있는 장소(HERE)에서 현재 상업용 건물(Walker Booksellers) 공사 작업이 진행 중(Work in progress: Commercial)임을 알 수 있다. 따라서 표지판이 상업용 건설 현장에 있다고 추론할 수 있으므로, (B)가 정답이다."
                },
                {
                    id: "v3-p7-t2-q148",
                    questionNo: 148,
                    text: "Why should a reader of the sign call the phone number?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "To file a permit",
                        "B": "To apply for a job",
                        "C": "To confirm a date",
                        "D": "To report a problem"
                    },
                    correctAnswer: "D",
                    translation: "표지판을 읽는 사람이 해당 전화번호로 전화해야 하는 이유는?",
                    explanation: "하단에서 작업 현장에서 발생한 문제는 919-555-0134로 전화해 알려달라(To report a problem at this work site, call 919-555-0134)고 요청하고 있으므로, (D)가 정답이다."
                }
            ]
        },
        // Questions 149-151: Information (Concert)
        {
            id: "v3-p7-t2-set2",
            setType: "Single",
            questionRange: "149-151",
            passages: [
                {
                    id: "v3-p7-t2-s2-p1",
                    contextType: "P5_RULE",
                    docType: "INFORMATION",
                    content: `On Saturday, August 1, the Durhamtown Symphony Orchestra will be giving a free educational performance at the Cardona Culture Center, 498 Mahogany Ave. Among other things, the musicians will discuss the origins and development of their instruments as well as some musical styles. Audience members will have an opportunity to ask questions. The event will conclude with the orchestra performing works by some of today's well-known musicians and song writers.`,
                    translation: `8월 1일 토요일, 더럼타운 교향악단이 마호가니 가 498번지에 있는 카도나 문화센터에서 교육적인 공연을 무료로 제공한다. 그 중에서도, 음악가들이 악기의 기원과 발달뿐만 아니라 몇몇 음악 양식에 대해서도 이야기할 예정이다. 청중은 질문할 기회가 있을 것이다. 행사는 오늘날 잘 알려진 음악가와 작곡가들의 작품을 교향악단이 연주하며 막을 내린다.`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t2-q149",
                    questionNo: 149,
                    text: "What is the purpose of the information?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To announce a change of location",
                        "B": "To publicize an upcoming event",
                        "C": "To describe some instruments",
                        "D": "To review a performance"
                    },
                    correctAnswer: "B",
                    translation: "정보의 목적은?",
                    explanation: "첫 번째 문장에서 8월 1일 토요일에 더럼타운 교향악단이 카도나 문화센터에서 교육적인 공연을 무료로 제공한다(the Durhamtown Symphony Orchestra will be giving a free educational performance)고 한 후, 공연 관련 추가 설명을 이어가고 있다. 따라서 행사를 홍보하기 위한 글이라고 볼 수 있으므로, (B)가 정답이다."
                },
                {
                    id: "v3-p7-t2-q150",
                    questionNo: 150,
                    text: "According to the information, what will the audience members be able to do?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Sing along",
                        "B": "Request songs",
                        "C": "Talk to the musicians",
                        "D": "Sign up for music lessons"
                    },
                    correctAnswer: "C",
                    translation: "정보에 따르면, 청중들은 무엇을 할 수 있는가?",
                    explanation: "중반부를 보면 음악가들이 악기와 음악 양식에 대해 이야기하고 청중은 질문할 기회를 갖게 된다(Audience members will have an opportunity to ask questions)고 나와 있다. 따라서 (C)가 정답이다."
                },
                {
                    id: "v3-p7-t2-q151",
                    questionNo: 151,
                    text: "The word \"conclude\" in paragraph 1, line 6, is closest in meaning to",
                    classification: "P7_VOCABULARY",
                    options: {
                        "A": "raise",
                        "B": "decide",
                        "C": "believe",
                        "D": "finish"
                    },
                    correctAnswer: "D",
                    translation: "문맥상 \"conclude\"와 의미가 가장 가까운 단어는?",
                    explanation: "'conclude'를 포함한 부분은 '행사는 교향악단이 연주하며 막을 내린다(The event will conclude with the orchestra performing works)'는 의미로 해석되는데, 여기서 conclude는 '막을 내리다, 끝나다'라는 뜻으로 쓰였다. 따라서 '끝마치다, 완료하다'라는 의미의 (D) finish가 정답이다."
                }
            ]
        },
        // Questions 152-153: Online Chat Discussion
        {
            id: "v3-p7-t2-set3",
            setType: "Single",
            questionRange: "152-153",
            passages: [
                {
                    id: "v3-p7-t2-s3-p1",
                    contextType: "P7_CONV",
                    docType: "CHAT_MESSAGE",
                    content: `Bonnie Ruiz (2:40 P.M.) Good morning; welcome to Ship With Us.\nNick Portier (2:41 P.M.) Hi. I'm Nick, and I'm having trouble getting into my account.\nBonnie Ruiz (2:42 P.M.) Hi, Nick. I'm happy to help. Have you tried resetting your password?\nNick Portier (2:43 P.M.) I have, and I'm still not able to get in. I need to send a large shipment of brochures and catalogs in the next 15 minutes, and I'm a little anxious.\nBonnie Ruiz (2:44 P.M.) Don't worry. I'm here to help! Your account number is X58292J, right? I can reset your account on my end.\nNick Portier (2:45 P.M.) That's it.\nBonnie Ruiz (2:46 P.M.) Great. I've sent a new password to the e-mail address associated with that account number, and you should receive it within the next two minutes. I'll stay available until I've heard from you to make sure that you've accessed your account.\nNick Portier (2:46 P.M.) Wonderful. Thanks!`,
                    translation: `보니 루이즈 (오후 2시 40분) 안녕하세요. 쉽 위드 어스에 오신 것을 환영합니다.\n닉 포티어 (오후 2시 41분) 안녕하세요. 닉이라고 해요. 제 계정에 접속하는 데 문제가 있어요.\n보니 루이즈 (오후 2시 42분) 안녕하세요, 닉. 기꺼이 도와드리겠습니다. 비밀번호를 재설정해 보셨나요?\n닉 포티어 (오후 2시 43분) 네, 그런데 여전히 안 돼요. 15분 후에 책자와 카탈로그를 대량으로 보내야 해서 조금 염려스럽군요.\n보니 루이즈 (오후 2시 44분) 걱정 마세요. 제가 도와드릴 거니까요! 계정번호가 X58292J죠, 그렇지요? 제 쪽에서 계정을 리셋할 수 있습니다.\n닉 포티어 (오후 2시 45분) 맞습니다.\n보니 루이즈 (오후 2시 46분) 좋습니다. 해당 계정번호에 연동된 이메일 주소로 새 비밀번호를 보냈으니 앞으로 2분 이내에 받으실 겁니다. 계정에 접속하셨다는 말씀을 들을 때까지 이대로 있겠습니다.\n닉 포티어 (오후 2시 46분) 좋아요. 감사합니다!`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t2-q152",
                    questionNo: 152,
                    text: "What most likely is Ms. Ruiz' occupation?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "Bank teller",
                        "B": "Graphic designer",
                        "C": "Software developer",
                        "D": "Customer-support specialist"
                    },
                    correctAnswer: "D",
                    translation: "루이즈 씨의 직업은 무엇이겠는가?",
                    explanation: "루이즈 씨가 오후 2시 40분 메시지에서 포티어 씨에게 쉽 위드 어스에 온 것을 환영한다(welcome to Ship With Us)고 한 후, 포티어 씨가 계정에 접속이 안 된다고 하자 도와주겠다(I'm happy to help)고 했다. 따라서 루이즈 씨가 고객 응대 업무를 한다고 볼 수 있으므로, (D)가 정답이다."
                },
                {
                    id: "v3-p7-t2-q153",
                    questionNo: 153,
                    text: "At 2:45 P.M., what does Mr. Portier most likely mean when he writes, \"That's it\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "A password has been changed.",
                        "B": "He is able to access his account.",
                        "C": "He has received Ms. Ruiz' e-mail.",
                        "D": "Ms. Ruiz has the information she needs."
                    },
                    correctAnswer: "D",
                    translation: "오후 2시 45분에 포티어 씨가 \"맞습니다\"라고 쓸 때, 그 의도는 무엇인가?",
                    explanation: "루이즈 씨가 오후 2시 44분 메시지에서 계정번호를 확인(Your account number is X58292J, right?)했는데, 이에 대해 포티어 씨가 '맞습니다(That's it)'라고 응답한 것이다. 즉, 루이즈 씨에게 계정 리셋에 필요한 정보(=포티어 씨의 계정번호)가 있음을 확인해 준 것이므로, (D)가 정답이다."
                }
            ]
        },
        // Questions 154-155: Advertisement
        {
            id: "v3-p7-t2-set4",
            setType: "Single",
            questionRange: "154-155",
            passages: [
                {
                    id: "v3-p7-t2-s4-p1",
                    contextType: "P3_MEDI",
                    docType: "ADVERTISEMENT",
                    title: "Adnan's Auto Garage",
                    content: `5 Warner Place\nServing Manchester for 20 years!\nOpen Monday to Friday, 8 A.M. to 5 P.M.; Saturday, 9 A.M. to 1 P.M.\n\nAdnan's Auto Garage is a full-service repair shop where customer service is our top priority! Our founder, Adnan Haddad, learned his skills as the head technician for a racing team. He and his staff of professional mechanics now service all makes and models of cars and trucks, both foreign and domestic. We'll keep your vehicle on the road!\n\nWe also sell used cars at competitive prices.\nInterested in selling your car? Call us now!\n0161 496 0437`,
                    translation: `아드난 자동차 정비소\n워너 플레이스 5번지\n20년간 맨체스터에서 서비스 제공!\n영업시간: 월-금요일 오전 8시-오후 5시; 토요일 오전 9시-오후 1시\n\n아드난 자동차 정비소는 고객 서비스를 최우선으로 여기는 종합 서비스 수리점입니다! 창업자인 아드난 하다드는 레이싱팀의 수석 기술자로 근무하며 기량을 익혔습니다. 그와 전문 정비사 직원들이 수입이든 국산이든 상관없이 모든 브랜드 및 모델의 자동차와 트럭을 점검해 드립니다. 귀하의 차량이 잘 주행할 수 있도록 해 드리겠습니다!\n\n아울러 중고차를 경쟁력 있는 가격에 판매합니다.\n차량을 팔고 싶으신가요? 그럼 저희에게 전화하세요!\n0161 496 0437`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t2-q154",
                    questionNo: 154,
                    text: "What is indicated about Adnan's Auto Garage?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It will move to a new location in Manchester.",
                        "B": "It has been in business for two decades.",
                        "C": "It offers evening hours once a week.",
                        "D": "It repairs locally manufactured cars only."
                    },
                    correctAnswer: "B",
                    translation: "아드난 자동차 정비소에 대해 알 수 있는 것은?",
                    explanation: "상단에서 20년간 맨체스터에서 서비스를 제공해 오고 있다(Serving Manchester for 20 years!)고 광고하고 있으므로, (B)가 정답이다."
                },
                {
                    id: "v3-p7-t2-q155",
                    questionNo: 155,
                    text: "According to the advertisement, who is invited to call the phone number?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Car owners",
                        "B": "Auto mechanics",
                        "C": "Race car technicians",
                        "D": "Truck drivers"
                    },
                    correctAnswer: "A",
                    translation: "광고에서 누구에게 해당 전화번호로 전화하라고 유도하는가?",
                    explanation: "하단에서 현재 소유하고 있는 차량을 팔고 싶다면(Interested in selling your car?) 전화하라(Call us now!)고 했으므로, 광고 대상이 차량 소유주임을 알 수 있다. 따라서 (A)가 정답이다."
                }
            ]
        },
        // Questions 156-158: Notice
        {
            id: "v3-p7-t2-set5",
            setType: "Single",
            questionRange: "156-158",
            passages: [
                {
                    id: "v3-p7-t2-s5-p1",
                    contextType: "P3_MEDI",
                    docType: "NOTICE",
                    title: "Watford Shredding Day",
                    content: `Do you need to safely dispose of piles of confidential paperwork? Come to Watford Community Shredding Day on April 8 from 8:00 A.M. to 11:00 A.M.\n\nA number of Security Too shredders will be conveniently located behind the Watford municipal parking garage. — [1] —. Bring any unneeded bank statements, tax documents, and bills. — [2] —. They will be securely shredded and recycled on the spot. Please note that the event is open to Watford Township residents only, and there is a five-kilo limit per household. — [3] —. Security Too representatives will be on hand to talk about ways to protect your private information.\n\nCommunity Shredding Day is brought to you by radio station 82.9 WQYX and Security Too. — [4] —.\n\nFor more information, visit www.watfordtownship/shreddingday.org.`,
                    translation: `왓포드 서류 파쇄의 날\n\n수북이 쌓인 기밀 문서를 안전하게 폐기해야 합니까? 4월 8일 오전 8시부터 11시까지 열리는 '왓포드 커뮤니티 서류 파쇄의 날'에 오세요.\n\n수많은 시큐리티 투 문서 파쇄기가 왓포드 시립 주차장 건물 뒤편의 편리한 장소에 놓여 있습니다. — [1] —. 불필요한 입출금 내역서, 세무 서류, 청구서 등을 모두 가져오세요. — [2] —. 차로 와서 그것들을 내려놓기만 하시면 됩니다. 그것들은 현장에서 안전하게 파쇄되어 재활용될 것입니다. 본 행사는 왓포드 타운십 주민에게만 개방되며 가구당 5킬로그램의 한도가 있음을 알려드립니다. — [3] —. 시큐리티 투 담당자들이 상주하여 여러분의 개인 정보를 보호할 수 있는 방법에 관해 이야기해 드립니다.\n\n'커뮤니티 파쇄의 날'은 라디오 방송국 82.9 WQYX와 시큐리티 투가 함께 합니다. — [4] —.\n\n더 자세한 정보를 원하시면 www.watfordtownship/shreddingday.org를 확인하세요.`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t2-q156",
                    questionNo: 156,
                    text: "What is the purpose of the notice?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To notify residents of a due date",
                        "B": "To promote a service",
                        "C": "To welcome a new business to town",
                        "D": "To advertise a contest"
                    },
                    correctAnswer: "B",
                    translation: "공지의 목적은?",
                    explanation: "첫 번째 단락에서 기밀 문서를 폐기해야 하는 사람은 4월 8일에 열리는 '왓포드 커뮤니티 서류 파쇄의 날'에 오라(Come to Watford Community Shredding Day on April 8)고 한 후, 파쇄기 제공 서비스에 대한 설명을 이어가고 있다. 따라서 이를 홍보하기 위한 공지라고 볼 수 있으므로, (B)가 정답이다."
                },
                {
                    id: "v3-p7-t2-q157",
                    questionNo: 157,
                    text: "What will most likely happen on April 8?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "Paper will be recycled.",
                        "B": "A bank representative will meet clients.",
                        "C": "A new parking garage will open.",
                        "D": "An informational seminar will be offered."
                    },
                    correctAnswer: "A",
                    translation: "4월 8일에 어떤 일이 일어나겠는가?",
                    explanation: "질문에 언급된 4월 8일은 서류 파쇄 행사가 있는 날인데, 두 번째 단락을 보면 폐지들이 현장에서 안전하게 파쇄되어 재활용된다(They will be securely shredded and recycled on the spot)고 나와 있다. 따라서 이날 파쇄된 종이가 재활용된다고 추론할 수 있으므로, (A)가 정답이다."
                },
                {
                    id: "v3-p7-t2-q158",
                    questionNo: 158,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Simply drive up and drop them off.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "B",
                    translation: "[1], [2], [3], [4]로 표시된 곳 중에서 다음 문장이 가장 적합한 곳은?\n\"차로 와서 그것들을 내려놓기만 하시면 됩니다.\"",
                    explanation: "주어진 문장의 '그것들(them)'이 가리키는 대상, 즉, 차로 운반해 와서 놓고 갈 것들이 앞에서 먼저 언급되어야 한다. [2] 앞에서 불필요한 입출금 내역서, 세무 서류, 청구서 등을 모두 가져오라(Bring any unneeded bank statements, tax documents, and bills)고 했고, 뒤에서는 처리 과정을 설명했으므로, 이 사이에 해당 문장이 들어가야 자연스럽다. 따라서 (B)가 정답이다."
                }
            ]
        },
        // Questions 159-160: E-mail
        {
            id: "v3-p7-t2-set6",
            setType: "Single",
            questionRange: "159-160",
            passages: [
                {
                    id: "v3-p7-t2-s6-p1",
                    contextType: "P1_CORR",
                    docType: "EMAIL",
                    content: `To: Kamini Das <k.das@armail.net>\nFrom: Customer Service <customerservice@sandringsuites.com.au>\nDate: 7 February\nSubject: Regarding your visit\n\nDear Ms. Das,\n\nThank you for your recent stay with us at Sandring Suites. Our top priority is to provide our guests with an exceptional experience. We ask that you complete a three-minute survey to rate your time with us. Please visit www.sandringsuites.com.au and click the survey link in the top right corner of the Web page. Use code SAN5341 to complete the survey. To thank you for participating, we will enter your name in our monthly raffle to win a complimentary two-night stay at one of our hotels.\n\nRegards,\n\nSilvia Monier\nCustomer Service, Sandring Suites`,
                    translation: `수신: 카미니 다스 <k.das@armail.net>\n발신: 고객 서비스 <customerservice@sandringsuites.com.au>\n날짜: 2월 7일\n제목: 방문 관련\n\n다스 씨께,\n\n최근 샌드링 스위트에 투숙해 주셔서 감사합니다. 저희는 고객에게 특별한 경험을 선사해 드리는 것을 최우선으로 여깁니다. 저희 호텔에서 보내신 시간을 평가하는 3분짜리 설문조사에 응답해 주셨으면 합니다. www.sandringsuites.com.au를 방문하셔서 웹페이지 상단 오른쪽 구석에 있는 설문조사 링크를 클릭하십시오. 코드 SAN5341을 입력하시고 설문을 완료하시면 됩니다. 참여해 주신 것에 대한 감사의 의미로, 저희 호텔 중 한 곳에서의 2박 무료 숙박권을 얻을 수 있는 월간 경품 추첨에 귀하의 성함을 등록하겠습니다.\n\n실비아 모니어\n고객 서비스, 샌드링 스위트`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t2-q159",
                    questionNo: 159,
                    text: "What is Ms. Das being asked to do?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Confirm her contact information",
                        "B": "Provide some feedback",
                        "C": "Complete a purchase",
                        "D": "Renew a subscription"
                    },
                    correctAnswer: "B",
                    translation: "다스 씨는 무엇을 하라고 요청받는가?",
                    explanation: "이메일의 초반부에서 다스 씨에게 호텔에서 보낸 시간을 평가하는 3분짜리 설문조사에 응답해달라(We ask that you complete a three-minute survey to rate your time with us)고 요청했으므로, (B)가 정답이다."
                },
                {
                    id: "v3-p7-t2-q160",
                    questionNo: 160,
                    text: "What does Ms. Monier indicate she will do for Ms. Das?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Extend her hotel stay free of charge",
                        "B": "Assist her in using a Web site",
                        "C": "Give her a chance to win a prize",
                        "D": "Provide a discount code for a future hotel stay"
                    },
                    correctAnswer: "C",
                    translation: "모니어 씨는 다스 씨를 위해 무엇을 하겠다고 말하는가?",
                    explanation: "이메일의 후반부에서 모니어 씨는 샌드링 스위트 호텔 2박 무료 숙박권을 얻을 수 있는 월간 경품 추점에 다스 씨의 이름을 등록하겠다(we will enter your name in our monthly raffle to win a complimentary two-night stay at one of our hotels)고 했다. 따라서 (C)가 정답이다."
                }
            ]
        },
        // Questions 161-163: Advertisement
        {
            id: "v3-p7-t2-set7",
            setType: "Single",
            questionRange: "161-163",
            passages: [
                {
                    id: "v3-p7-t2-s7-p1",
                    contextType: "P3_MEDI",
                    docType: "ADVERTISEMENT",
                    title: "AKBAR STORAGE COMPANY",
                    content: `227 Wexham Road, Bridgetown\nPhone: 246-555-0147\n\nSatisfying storage needs in Barbados for 30 years!\n\n• Units are available in small, standard, and premium sizes to fit your storage needs.\n• Your clean, dry storage unit is available to you around the clock.\n• Our storage facility is monitored by high-quality security cameras, and each customer is given a pass code. Our secure electronic gate can be released only by entering this code.\n• Our business office is open 9 A.M. to 6 P.M., Monday to Friday, and 9 A.M. to 2 P.M. on Saturday. Stop in to speak with one of our representatives.\n\nAnd now, get 20 percent off with a twelve-month rental of our largest type of unit!`,
                    translation: `악바르 보관 업체\n웨스햄 로 227번지, 브리지타운\n전화번호: 246-555-0147\n\n30년간 바베이도스에서 저장 공간이 필요하신 분들께 만족스러운 서비스를 제공해 드리고 있습니다!\n\n• 귀하의 니즈에 맞춰 소형, 표준형, 프리미엄 크기의 단위로 창고 이용이 가능합니다.\n• 청결하고 습기 없는 창고를 24시간 내내 이용할 수 있습니다.\n• 보관 시설은 고성능 보안 카메라로 감시되며, 각 고객에게는 비밀번호가 부여됩니다. 이 비밀번호를 입력해야만 보안 전자 출입문이 열립니다.\n• 저희 사무실은 월-금요일 오전 9시-오후 6시, 토요일 오전 9시-오후 2시까지 운영됩니다. 저희 직원과 이야기하시려면 잠시 들러주십시오.\n\n지금 가장 큰 창고를 12개월간 대여하고 20퍼센트 할인을 받아보세요!`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t2-q161",
                    questionNo: 161,
                    text: "According to the advertisement, when can customers access their storage units?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "At any time",
                        "B": "Monday to Friday only",
                        "C": "On Saturday and Sunday only",
                        "D": "When accompanied by a security person"
                    },
                    correctAnswer: "A",
                    translation: "광고에 따르면, 고객은 언제 자신의 창고를 이용할 수 있는가?",
                    explanation: "두 번째 항목에서 창고를 24시간 내내 이용할 수 있다(Your storage unit is available to you around the clock)고 했으므로, (A)가 정답이다."
                },
                {
                    id: "v3-p7-t2-q162",
                    questionNo: 162,
                    text: "What do customers need to do in order to enter the facility?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Purchase a day pass",
                        "B": "Be recognized by a security camera",
                        "C": "Enter an access code",
                        "D": "Show identification to a guard"
                    },
                    correctAnswer: "C",
                    translation: "고객은 시설 출입을 위해 무엇을 해야 하는가?",
                    explanation: "세 번째 항목에서 각 고객에게 비밀번호가 부여된다(each customer is given a pass code)고 한 후, 비밀번호를 입력해야만 보안 전자 출입문이 열린다(Our secure electronic gate can be released only by entering this code)고 했다. 따라서 (C)가 정답이다."
                },
                {
                    id: "v3-p7-t2-q163",
                    questionNo: 163,
                    text: "How can customers receive a discount?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "By cutting back on their storage space by 20 percent",
                        "B": "By renting a premium-size unit for one year",
                        "C": "By showing the advertisement to a service representative",
                        "D": "By agreeing to rent a unit for a second year"
                    },
                    correctAnswer: "B",
                    translation: "고객은 어떻게 할인을 받을 수 있는가?",
                    explanation: "하단에서 가장 큰 창고를 12개월간 대여하고 20퍼센트 할인을 받아보라(get 20 percent off with a twelve-month rental of our largest type of unit)고 권하고 있으므로, (B)가 정답이다."
                }
            ]
        },
        // Questions 164-167: Article
        {
            id: "v3-p7-t2-set8",
            setType: "Single",
            questionRange: "164-167",
            passages: [
                {
                    id: "v3-p7-t2-s8-p1",
                    contextType: "P3_MEDI",
                    docType: "ARTICLE",
                    title: "Gamer Arcades Joins Forces with Frankie's Burgers Franchises",
                    content: `LEEDS (9 July)—Gamer Arcades and fast-food franchise Frankie's Burgers have announced a new partnership, which will formally start at the beginning of August. At that time, all Gamer Arcades will introduce a Frankie's Burgers to their locations.\n\nThe president of Gamer Arcades, Allen Ingram, expressed his excitement about the possibilities of this strategic partnership.\n\n"The outstanding quality of Frankie's Burgers will enhance customers' enjoyment of our arcades," said Mr. Ingram. "Until now, there have been no food options on the premises. With this partnership, however, customers will be able to take a break for a delicious meal and then get back to enjoying our state-of-the-art gaming centers."\n\nThis is not the first major change Mr. Ingram has made to the company since he took over from Justine Beckerman last November. A month after assuming the role of president, he brought virtual reality games to Gamer Arcades. Since that time, he has also expanded the company into Germany and Belgium, and he has launched several charity initiatives associated with Gamer Arcades.`,
                    translation: `게이머 아케이트, 프랭키 버거스 체인점과 제휴에 나서\n\n리츠 (7월 9일) — 게이머 아케이즈와 패스트푸드 체인점 프랭키 버거스가 새로운 협력 관계를 발표했으며, 공식적으로 8월 초에 시작된다. 해당 시점이 되면 게이머 아케이즈 전 지점에 프랭키 버거스가 들어올 예정이다.\n\n게이머 아케이즈의 앨런 잉그램 회장은 금번 전략적 제휴가 가져올 기회에 대한 기대감을 드러냈다.\n\n“프랭키 버거스의 뛰어난 품질은 저희 아케이즈 고객의 즐거움을 한층 더 높일 것입니다.”라고 잉그램 씨가 말했다. “지금까지 구내에 식당이 있던 적은 없었습니다. 하지만 이번 제휴를 통해 고객들은 맛있는 식사를 하며 잠시 휴식을 취하고 나서, 다시 최신식 게임 센터로 돌아가 즐거운 시간을 보낼 수 있습니다.”\n\n지난 11월 저스틴 벡커맨 씨의 자리를 이어받은 이후, 잉그램 씨가 회사에 일으킨 중요한 변화 중 이번 제휴가 처음은 아니다. 그는 회장직을 맡아 게이머 아케이즈를 이끌어 오고 있으며 회장직을 맡은 지 한 달 뒤, 게이머 아케이즈에 가상현실 게임을 들여왔다. 이후 독일과 벨기에로 사세를 확장하기도 했으며 게이머 아케이즈와 연관된 여러 자선 활동을 시작했다.`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t2-q164",
                    questionNo: 164,
                    text: "When will the partnership become official?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "In July",
                        "B": "In August",
                        "C": "In November",
                        "D": "In December"
                    },
                    correctAnswer: "B",
                    translation: "제휴는 언제 공식화되는가?",
                    explanation: "첫 번째 단락에서 게이머 아케이즈와 패스트푸드 체인점 프랭키 버거스의 새로운 제휴(a new partnership)가 8월 초에 공식적으로 시작된다(which will formally start at the beginning of August)고 했다. 따라서 (B)가 정답이다."
                },
                {
                    id: "v3-p7-t2-q165",
                    questionNo: 165,
                    text: "What is indicated about Gamer Arcades' partnership with Frankie's Burgers?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It was agreed upon after months of negotiation.",
                        "B": "It will not apply to all Gamer Arcades sites.",
                        "C": "It is waiting for shareholder approval.",
                        "D": "It is Gamer Arcades' first partnership with a restaurant."
                    },
                    correctAnswer: "D",
                    translation: "게이머 아케이즈와 프랭키 버거스의 제휴에 대해 명시된 것은?",
                    explanation: "세 번째 단락에 나온 잉그램 씨의 인터뷰 내용을 보면, 지금까지 게이머 아케이즈 구내에 식당이 있던 적은 없었다(Until now, there have been no food options on the premises)고 되어 있다. 따라서 음식점과 맺은 첫 번째 제휴임을 알 수 있으므로, (D)가 정답이다."
                },
                {
                    id: "v3-p7-t2-q166",
                    questionNo: 166,
                    text: "According to the article, who is Ms. Beckerman?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "The president of a food supply company",
                        "B": "The owner of a Frankie's Burgers franchise",
                        "C": "The owner of a game manufacturing company",
                        "D": "The former president of Gamer Arcades"
                    },
                    correctAnswer: "D",
                    translation: "기사에 따르면, 벡커맨 씨는 누구인가?",
                    explanation: "마지막 단락의 첫 문장에서 잉그램 씨가 벡커맨 씨의 자리를 이어받았다(he took over from Justine Beckerman)고 했는데, 그 다음 부분을 보면 잉그램 씨가 회장직(the role of president)을 맡아 게이머 아케이즈를 이끌어 오고 있음을 알 수 있다. 즉, 벡커맨 씨는 게이머 아케이즈의 전 회장인 것이므로, (D)가 정답이다."
                },
                {
                    id: "v3-p7-t2-q167",
                    questionNo: 167,
                    text: "What did Mr. Ingram do first at Gamer Arcades?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "He introduced virtual reality games.",
                        "B": "He started several charity programs.",
                        "C": "He opened branches in Belgium.",
                        "D": "He moved the headquarters to Germany."
                    },
                    correctAnswer: "A",
                    translation: "잉그램 씨가 게이머 아케이즈에서 처음 한 일은?",
                    explanation: "마지막 단락을 보면, 프랭키 버거스와의 제휴는 잉그램 씨가 회장직을 맡고 나서 일으킨 첫 번째 중요한 변화가 아니라(not the first major change)고 되어 있다. 그가 처음 일으킨 변화는 취임 한 달 뒤 게이머 아케이즈에 가상현실 게임을 들여온 것(he brought virtual reality games to Gamer Arcades)이므로, (A)가 정답이다."
                }
            ]
        },
        // Questions 168-171: Letter
        {
            id: "v3-p7-t2-set9",
            setType: "Single",
            questionRange: "168-171",
            passages: [
                {
                    id: "v3-p7-t2-s9-p1",
                    contextType: "P1_CORR",
                    docType: "LETTER",
                    content: `25 May\n\nMs. Deborah Kiernan\nSonicboom Distribution Agency\n84 Arthur Road\nLondon N7 6DR\n\nDear Ms. Kiernan:\n\nEarthsky Films International is seeking a distributor for our latest production, Project Aerial. Having premiered in April at the North Brabant Film Festival in Eindhoven, the Netherlands, the film received strong reviews from critics and was honored with the Diamond Pen Award for best screenplay. — [1] —.\n\nOur film, Project Aerial, examines an exciting period in aviation history that began more than 150 years ago. The aviation industry owes its development to a number of brilliant and enterprising people. — [2] —. The film highlights the major innovators as well as those who were lesser known.\n\nThe two lead roles are played by Winston Halsey and Virgil Golding, figures that are familiar to international audiences. — [3] —. Mr. Golding is known for his role in, among others, The Rigby Conspiracy, and Mr. Halsey is recognized for his performance in Whereabouts Unknown.\n\nIf you are interested in marketing our film, I would be happy to e-mail you a secure link so that you can view it. — [4] —. I hope to hear from you soon.\n\nSincerely,\n\nJayesh Chaudhari, CEO\nEarthsky Films International`,
                    translation: `5월 25일\n\n드보라 키어난 씨\n소닉붐 배급 대행사\n아서 로 84번지\n런던 N7 6DR\n\n키어난 씨께,\n\n어스스카이 필름 인터내셔널에서는 당사의 최신작인 <항공 프로젝트>의 배급사를 찾고 있습니다. 지난 4월 네덜란드 에인트호번에서 열렸던 북 브라반트 영화제에서 개봉된 이 영화는 평론가들에게서 호평을 받았으며, 다이아몬드 펜 어워드의 최우수 각본상을 수상하는 영예를 안았습니다. — [1] —.\n\n저희 영화 <항공 프로젝트>는 150년도 더 전에 시작된 항공 역사의 흥미로운 시기를 살펴봅니다. 항공 산업의 발전은 뛰어나고 진취적인 수많은 사람들 덕분입니다. — [2] —. 이 영화는 혁신을 이룬 주요 인물뿐만 아니라 덜 알려진 사람들까지도 조명합니다.\n\n두 주인공 역은 전 세계 관객들에게 친숙한 윈스턴 할시와 버질 골딩이 맡았습니다. — [3] —. 둘 다 수년간 평론가들의 찬사를 받아왔습니다. 골딩 씨는 여러 영화 중에서도 <리그비 음모론>에서 맡은 역할로 잘 알려져 있고, 할시 씨는 <소재 불명>에서의 연기로 인정받고 있습니다.\n\n저희 영화 마케팅에 관심이 있으시다면, 감상하실 수 있도록 보안 링크를 이메일로 보내드리겠습니다. — [4] —. 빠른 시일 내에 답변 주시기를 바랍니다.\n\n자예쉬 차우드하리, CEO\n어스스카이 필름 인터내셔널`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t2-q168",
                    questionNo: 168,
                    text: "What would Mr. Chaudhari like to do?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "Promote a museum exhibit about aviation",
                        "B": "Hire a manager for a new business",
                        "C": "Become a film festival judge",
                        "D": "Introduce a movie to a wider audience"
                    },
                    correctAnswer: "D",
                    translation: "차우드하리 씨는 무엇을 하고 싶어 하는가?",
                    explanation: "첫 번째 단락에서 회사가 제작한 최신작의 배급사를 찾고 있다(Earthsky Films International is seeking a distributor for our latest production)고 했으므로, 배급사를 통해 영화를 더 많은 관객들에게 소개하고 싶어 한다는 것을 알 수 있다. 따라서 (D)가 정답이다."
                },
                {
                    id: "v3-p7-t2-q169",
                    questionNo: 169,
                    text: "What is stated about Project Aerial?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It was mostly filmed in the Netherlands.",
                        "B": "Its opening has been long awaited.",
                        "C": "It examines the early stages of an industry.",
                        "D": "It was financed by an airline company."
                    },
                    correctAnswer: "C",
                    translation: "<항공 프로젝트>에 대해 알 수 있는 것은?",
                    explanation: "두 번째 단락에서 <항공 프로젝트>가 150년도 더 전에 시작된 항공 역사의 흥미로운 시기를 살펴본다(Project Aerial, examines an exciting period in aviation history that began more than 150 years ago)고 했으므로, 항공 산업의 초창기를 다루고 있음을 알 수 있다. 따라서 (C)가 정답이다."
                },
                {
                    id: "v3-p7-t2-q170",
                    questionNo: 170,
                    text: "What is indicated about Mr. Halsey and Mr. Golding?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "They are well-known actors.",
                        "B": "They have trained as pilots.",
                        "C": "They researched aviation history.",
                        "D": "They have worked together on several films."
                    },
                    correctAnswer: "A",
                    translation: "할시 씨와 골딩 씨에 대해 명시된 것은?",
                    explanation: "세 번째 단락에서 할시 씨와 골딩 씨가 전 세계 관객들에게 친숙한 인물(Winston Halsey and Virgil Golding, figures that are familiar to international audiences)이라고 했으므로, (A)가 정답이다."
                },
                {
                    id: "v3-p7-t2-q171",
                    questionNo: 171,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Both have received critical acclaim over the years.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "C",
                    translation: "[1], [2], [3], [4]로 표시된 곳 중에서 다음 문장이 가장 적합한 곳은?\n\"둘 다 수년간 평론가들의 찬사를 받아왔습니다.\"",
                    explanation: "평론가들의 찬사를 받을 만한 두 명의 사람(Both)이 누구인지 앞에서 먼저 언급되어야 한다. [3] 앞에서 할시 씨와 골딩 씨가 전 세계 관객들에게 친숙한 인물(Winston Halsey and Virgil Golding, figures that are familiar to international audiences)이라며 Both가 가리키는 대상을 구체적으로 밝혔으므로, (C)가 정답이다."
                }
            ]
        },
        // Questions 172-175: Online Chat Discussion
        {
            id: "v3-p7-t2-set10",
            setType: "Single",
            questionRange: "172-175",
            passages: [
                {
                    id: "v3-p7-t2-s10-p1",
                    contextType: "P7_CONV",
                    docType: "CHAT_MESSAGE",
                    content: `Maria Andreou (9:06 A.M.) Good morning, Jakob and Sandra. I need help with the focus group with the photographers that is taking place on Thursday morning. I'm no longer available to lead it.\nJakob Wendt (9:09 A.M.) That's unfortunate. We need to follow up with that meeting to advise our client about what is important to potential customers.\nMaria Andreou (9:10 A.M.) Exactly. So I would rather not have to reschedule. The client is expecting our report early next week. Would either of you be able to conduct the group instead of me?\nSandra Liu (9:12 A.M.) Sorry, Maria. I'm traveling out of town tomorrow for the marketing conference, and won't be back until Friday.\nJakob Wendt (9:15 A.M.) I've never led a focus group before, but I'm happy to do it.\nMaria Andreou (9:17 A.M.) Great. I'll send you the participant consent form by e-mail. Remember that at the start of the group session, each participant will need to sign a copy.\nJakob Wendt (9:18 A.M.) OK. How many copies will be needed?\nSandra Liu (9:19 A.M.) Actually, there's no need. I have copies left over from another group I ran last Tuesday. They're still on my desk.\nJakob Wendt (9:20 A.M.) I'll stop by and pick them up later today.\nMaria Andreou (9:21 A.M.) Thank you both. This means we can meet and work on the advertising report for the client next Monday.`,
                    translation: `마리아 안드레우 (오전 9시 6분) 안녕하세요, 제이콥, 산드라. 목요일 아침에 열릴 사진작가 포커스 그룹 회의에 도움이 필요해요. 제가 더 이상 진행할 수가 없어서요.\n제이콥 웬트 (오전 9시 9분) 안타깝네요. 잠재 고객에게 중요한 요소에 대해 의뢰인에게 자문해 주려면 저 회의를 들어가서 제대로 진행되는지 확인해야 하는데요.\n마리아 안드레우 (오전 9시 10분) 맞아요. 그래서 일정을 바꾸지 않으려고 해요. 의뢰인이 보고서를 다음 주 초로 예상하고 있잖아요. 둘 중 한 분이 저 대신 그룹을 이끌어 주실 수 없을까요?\n산드라 리우 (오전 9시 12분) 미안해요, 마리아. 저는 내일 마케팅 회의 때문에 외부로 출장을 가서 금요일까지는 못 올 거거든요.\n제이콥 웬트 (오전 9시 15분) 포커스 그룹을 이끌어 본 적이 없긴 하지만, 제가 하겠습니다.\n마리아 안드레우 (오전 9시 17분) 좋아요. 제가 이메일로 참가자 동의서를 보내드릴게요. 그룹 시간을 시작할 때 모든 참가자가 각자 동의서에 서명을 해야 해요.\n제이콥 웬트 (오전 9시 18분) 네. 사본이 몇 장이나 필요할까요?\n산드라 리우 (오전 9시 19분) 사실 필요 없어요. 지난 화요일에 진행했던 다른 그룹 회의에서 남은 사본이 있거든요. 아직 제 책상에 있어요.\n제이콥 웬트 (오전 9시 20분) 제가 오늘 들러서 가져갈게요.\n마리아 안드레우 (오전 9시 21분) 두 분 모두 감사합니다. 그럼 다음 주 월요일에 만나서 의뢰인을 위한 광고 보고서 작업을 할 수 있겠군요.`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t2-q172",
                    questionNo: 172,
                    text: "For what type of business do the writers most likely work?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "A market research agency",
                        "B": "A printing shop",
                        "C": "A software development firm",
                        "D": "A photography studio"
                    },
                    correctAnswer: "A",
                    translation: "채팅에 참여한 사람들은 어떤 유형의 업체에서 일하겠는가?",
                    explanation: "안드레우 씨의 오전 9시 6분 메시지에서 사진작가 포커스 그룹 회의(the focus group with the photographers)가, 웬트 씨의 9시 9분 메시지에서 의뢰인에게 해주는 자문 업무(to advise our client about what is important to potential customers)가 언급되었다. 따라서 채팅 참가자들이 포커스 그룹을 대상으로 한 조사 결과를 바탕으로 의뢰인에게 조언을 제공하는 시장조사 대행사에서 일한다고 추론할 수 있으므로, (A)가 정답이다."
                },
                {
                    id: "v3-p7-t2-q173",
                    questionNo: 173,
                    text: "When will the focus group with the photographers meet?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "On Monday",
                        "B": "On Tuesday",
                        "C": "On Thursday",
                        "D": "On Friday"
                    },
                    correctAnswer: "C",
                    translation: "사진작가 포커스 그룹 회의는 언제 열리는가?",
                    explanation: "안드레우 씨의 첫 번째 메시지에서 목요일 아침에 열릴(taking place on Thursday morning) 회의라고 명시했다."
                },
                {
                    id: "v3-p7-t2-q174",
                    questionNo: 174,
                    text: "What is indicated about Mr. Wendt?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "He would prefer to attend a conference.",
                        "B": "He works downstairs from Ms. Liu's office.",
                        "C": "He has never previously run a focus group.",
                        "D": "He is the most experienced member of the team."
                    },
                    correctAnswer: "C",
                    translation: "웬트 씨에 대해 알 수 있는 것은?",
                    explanation: "웬트 씨가 오전 9시 15분 메시지에서 포커스 그룹을 이끌어 본 적이 없다(I've never led a focus group before)고 했으므로, (C)가 정답이다."
                },
                {
                    id: "v3-p7-t2-q175",
                    text: "At 9:19 A.M., what does Ms. Liu most likely mean when she writes, \"there's no need\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "She can cancel her business trip.",
                        "B": "Focus group participants will not complete consent forms.",
                        "C": "A focus group can be rescheduled.",
                        "D": "Mr. Wendt should not print any consent forms."
                    },
                    correctAnswer: "D",
                    translation: "오전 9시 19분에 리우 씨가 \"사실 필요 없어요\"라고 쓸 때, 그 의도는 무엇인가?",
                    explanation: "안드레우 씨가 동의서를 보내준다고 하자(I'll send you the participant consent form), 산드라 리우 씨가 지난번 회의에서 남은 사본이 책상에 있다며(I have copies left over... still on my desk) 필요 없다고 응답했다. 즉, 웬트 씨가 사본을 출력할 필요가 없다는 의미이므로, (D)가 정답이다."
                }
            ]
        }
    ]
};
