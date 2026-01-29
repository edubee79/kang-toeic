import { Part7Test } from './types';

export const test10Data: Part7Test = {
    testId: 10,
    title: "Test 10",
    sets: [
        // Questions 147-148: Sign
        {
            id: "p7-t10-set1",
            questionRange: "147-148",
            passages: [
                {
                    id: "p7-t10-s1-p1",
                    contextType: "P2",
                    docType: "NOTICE",
                    title: "Galloway Office Park",
                    content: `Building 1\nHarris Toddman, MD\nLansin Diagnostic Labs\nSmiley Dental Offices\n\nBuilding 2\nFreel Primary Care Physicians\nRally Star Physical Therapy Associates\n\nBuilding 3\nLee and Associates, Internists\nKare Medical Services\n\nBuilding 4\nLurie Pharmaceuticals\n\nNo Truck Access\nNo Soliciting\nNo Trespassing`,
                    translation: `갤러웨이 오피스 파크\n\n1동\n해리스 토드먼, 의학박사\n랜신 진단 연구소\n스마일리 치과\n\n2동\n프릴 일차 진료의\n랠리 스타 물리 치료 연합\n\n3동\n리 앤 어소시에이츠, 내과 전문의\n케어 의료 서비스\n\n4동\n루리 제약\n\n트럭 출입 금지\n잡상인 출입 금지\n무단 침입 금지`
                }
            ],
            questions: [
                {
                    id: "p7-t10-q147",
                    questionNo: 147,
                    text: "Where would the sign most likely be found?",
                    options: {
                        "A": "On an office desk",
                        "B": "In a hospital waiting room",
                        "C": "In the lobby of a real estate agency",
                        "D": "Near the entrance of an office complex"
                    },
                    correctAnswer: "D",
                    classification: "P7_INFERENCE",
                    translation: "표지판이 있을 가능성이 높은 곳은?",
                    explanation: `표지판 상단에 'Galloway Office Park'라는 명칭과 함께 각 건물(Building 1~4)에 입주해 있는 업체들이 나열되어 있고, 하단에는 출입 금지 안내문이 적혀 있는 것으로 보아 사무 단지 입구 근처에서 볼 수 있는 안내판임을 알 수 있다. 따라서 (D)가 정답이다.`
                },
                {
                    id: "p7-t10-q148",
                    questionNo: 148,
                    text: "What type of businesses are listed on the sign?",
                    options: {
                        "A": "Health care",
                        "B": "Legal services",
                        "C": "Manufacturing",
                        "D": "Finance"
                    },
                    correctAnswer: "A",
                    classification: "P7_INFERENCE",
                    translation: "표지판에 나열된 사업체의 유형은?",
                    explanation: `의사(MD), 진단 연구소(Diagnostic Labs), 치과(Dental Offices), 일차 진료의(Primary Care Physicians), 물리 치료(Physical Therapy), 내과 전문의(Internists), 의료 서비스(Medical Services), 제약(Pharmaceuticals) 등이 나열되어 있으므로 의료 관련 서비스 업체들을 설명하고 있다. 따라서 (A)가 정답이다.`
                }
            ]
        },
        // Questions 149-150: Online Chat
        {
            id: "p7-t10-set2",
            questionRange: "149-150",
            passages: [
                {
                    id: "p7-t10-s2-p1",
                    contextType: "P7",
                    docType: "CHAT_MESSAGE",
                    title: "Online Chat",
                    content: `Darion Gaines [11:16 A.M.]\nSonia, the sink in the third-floor break room is clogged.\n\nSonia Pinkerton [11:20 A.M.]\nAgain? That's the second time this month.\n\nDarion Gaines [11:22 A.M.]\nOne of our sales associates got it unclogged last time, but maybe we should call a professional this time. Should I contact Mr. Green and let him know?\n\nSonia Pinkerton [11:23 A.M.]\nThe office manager? I think it might be best to call the head of maintenance, Tammy Toska. She can probably get someone out to fix it pretty quickly.\n\nDarion Gaines [11:24 A.M.]\nOK. I could reach out to her.\n\nSonia Pinkerton [11:25 A.M.]\nGo ahead. In the meantime, I'll put up a notice to let everyone know they should not use that sink.`,
                    translation: `대리언 게인스 [오전 11:16] 소니아, 3층 휴게실에 있는 싱크대가 막혔어요.\n\n소니아 핑커턴 [오전 11:20] 또요? 이번 달에만 두 번째네요.\n\n대리언 게인스 [오전 11:22] 지난번에는 우리 영업 직원 중 한 명이 뚫었지만, 이번에는 전문가를 부르는 게 좋을 것 같아요. 그린 씨에게 연락해서 알려야 할까요?\n\n소니아 핑커턴 [오전 11:23] 149 사무실 관리자요? 제 생각에는 정비팀 정인 태미 토스카에게 연락하는 게 가장 좋을 것 같아요. 그녀라면 아마 수리할 사람을 꽤 빨리 보내 줄 수 있을 거예요.\n\n대리언 게인스 [오전 11:24] 알겠어요. 제가 그녀에게 연락해 볼게요.\n\n소니아 핑커턴 [오전 11:25] 150 그렇게 하세요. 그러는 동안 저는 모두에게 싱크대를 사용하지 말라는 안내문을 붙일게요.`
                }
            ],
            questions: [
                {
                    id: "p7-t10-q149",
                    questionNo: 149,
                    text: "Who most likely is Mr. Green?",
                    options: {
                        "A": "A custodian",
                        "B": "A plumber",
                        "C": "A manager",
                        "D": "A sales associate"
                    },
                    correctAnswer: "C",
                    classification: "P7_INFERENCE",
                    translation: "그린 씨는 누구일 것 같은가?",
                    explanation: `네 번째 메시지에서 핑커턴 씨가 사무실 관리자(The office manager?)라고 했으므로 그린 씨는 관리자임을 알 수 있다. 따라서 (C)가 정답이다.`
                },
                {
                    id: "p7-t10-q150",
                    questionNo: 150,
                    text: "At 11:25 A.M., what does Ms. Pinkerton most likely mean when she writes, \"Go ahead\"?",
                    options: {
                        "A": "Mr. Gaines may enter the break room.",
                        "B": "Mr. Gaines should contact Ms. Toska.",
                        "C": "Mr. Gaines should post a notice.",
                        "D": "Mr. Gaines can try to repair the sink."
                    },
                    correctAnswer: "B",
                    classification: "P7_INFERENCE",
                    translation: "오전 11시 25분에 핑커턴 씨가 \"그렇게 하세요(Go ahead)\"라고 쓴 의도는?",
                    explanation: `11시 24분에 게인스 씨가 정비팀장인 토스카 씨에게 연락해 보겠다(I could reach out to her)고 하자, 11시 25분에 핑커턴 씨가 "그렇게 하세요(Go ahead)"라고 했으므로, 게인스 씨가 토스카 씨에게 연락하도록 한 것임을 알 수 있다. 따라서 (B)가 정답이다.`
                }
            ]
        },
        // Questions 151-152: E-mail
        {
            id: "p7-t10-set3",
            questionRange: "151-152",
            passages: [
                {
                    id: "p7-t10-s3-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    title: "EMAIL",
                    content: `To: Ramdeo Khemradj <rkhemradj@topofthehill.jm>\nFrom: Kerensa Mayne <kmayne@topofthehill.jm>\nDate: 17 August\nSubject: Information\nAttachment: Latest draft\n\nHi, Ramdeo,\n\nPlease take a look at the latest draft and let me know what you think. I changed the layout—desserts are now on the inside back cover—and provided descriptions of the additional dinner dishes that you and your kitchen staff will be introducing next month.\n\nI haven't updated the prices yet though, as I haven't decided whether we will need to increase some of them.\n\nI'm sure you agree with me that the design firm did a great job upgrading the kitchen and making the dining room brighter and more inviting.\n\nKerensa`,
                    translation: `수신: 람데오 켐라지\n발신: 케렌사 메인\n날짜: 8월 17일\n제목: 정보\n첨부: 최근 초안\n\n안녕하세요, 람데오 씨,\n\n152 최근 초안을 살펴보시고 의견을 알려 주세요. 152 제가 레이아웃을 변경해서 이제 디저트는 안쪽 뒤 표지에 있으며, 151 귀하와 귀하의 주방 직원들이 다음 달에 새로 선보일 추가 저녁 요리에 대한 설명을 넣었습니다.\n\n가격은 아직 업데이트하지 않았는데, 일부 품목의 가격을 인상해야 할지 아직 결정하지 못했기 때문입니다.\n\n디자인 업체가 주방을 개선하고 식당을 더 밝고 매력적으로 만드는 일을 아주 훌륭하게 해냈다는 제 의견에 귀하도 동의하실 거라 확신합니다.\n\n케렌사`
                }
            ],
            questions: [
                {
                    id: "p7-t10-q151",
                    questionNo: 151,
                    text: "Who most likely is Mr. Khemradj?",
                    options: {
                        "A": "An interior decorator",
                        "B": "A restaurant owner",
                        "C": "An architect",
                        "D": "A head chef"
                    },
                    correctAnswer: "D",
                    classification: "P7_INFERENCE",
                    translation: "켐라지 씨는 누구일 것 같은가?",
                    explanation: `첫 번째 단락에서 메인 씨가 켐라지 씨에게 귀하와 귀하의 주방 직원들이 다음 달에 새로 선보일 저녁 요리(the additional dinner dishes that you and your kitchen staff will be introducing next month)라고 언급한 것으로 보아 켐라지 씨는 주방의 책임자인 주방장임을 알 수 있다. 따라서 (D)가 정답이다.`
                },
                {
                    id: "p7-t10-q152",
                    questionNo: 152,
                    text: "What most likely is attached to the e-mail?",
                    options: {
                        "A": "A price list",
                        "B": "A revised menu",
                        "C": "A photograph of food",
                        "D": "A lighting plan for a dining room"
                    },
                    correctAnswer: "B",
                    classification: "P7_INFERENCE",
                    translation: "이메일에 첨부되었을 가능성이 높은 것은?",
                    explanation: `첫 번째 단락에서 최근 초안(the latest draft)을 보라고 하며 레이아웃을 변경해 디저트를 안쪽 뒤 표지에 넣었고 저녁 요리들에 대한 설명을 추가했다(I changed the layout—desserts are now on the inside back cover—and provided descriptions of the additional dinner dishes)고 했으므로 첨부된 초안은 수정된 메뉴판임을 알 수 있다. 따라서 (B)가 정답이다.`
                }
            ]
        },
        // Questions 153-154: Application Form
        {
            id: "p7-t10-set4",
            questionRange: "153-154",
            passages: [
                {
                    id: "p7-t10-s4-p1",
                    contextType: "P5",
                    docType: "FORM",
                    title: "Page Turner Booksellers\nEmployment Application Form",
                    content: `Date of Application: 1 September\n\nPERSONAL DATA\nName: Arturo Rami | Address: 10 Beamish Street, Werribee, VIC 3030\nE-mail: arturo.rami@amail.com.au | Telephone: 03 9555 3744\n\nEMPLOYMENT DESIRED\nDesired position | Assistant Store Manager\nAvailable start date | 20 September\nPreferred location | ☐ Seaholme  ☑ Werribee  ☐ Port Melbourne\nPreferred status | ☑ Full-time  ☐ Part-time  ☐ Temporary\n\nEDUCATION\nEducational Institution | Diploma/Certificate/Degree Earned\nSouth Bank High School | High school diploma\n154 Dymocks University | Bachelor's degree\n\nEMPLOYMENT HISTORY\nEmployer | Position | Duration\n154 The Garment Barn | Sales associate | 2 years\nAliona Marketing | Assistant manager | 3 years\n\nEXPLANATION OF INTEREST IN THE POSITION\n154 I flourish in a fast-paced and demanding work environment, which my most recent employers are known for. I expect the same is true of Page Turner Booksellers, which tends to be quite busy. Moreover, with my bachelor's degree in retail management, I believe I am well suited for the position.`,
                    translation: `페이지 터너 서점\n채용 지원서\n\n지원 날짜: 9월 1일\n\n개인 정보\n성명: 아르투로 라미 | 주소: 10 Beamish Street, Werribee, VIC 3030\n이메일: arturo.rami@amail.com.au | 전화: 03 9555 3744\n\n희망 직종\n희망 직책 | 매장 부매니저\n근무 가능 시작일 | 9월 20일\n153 희망 근무지 | ☐ 시홀름 ☑ 워리비 ☐ 포트 멜버른\n희망 근무 형태 | ☑ 전임제 ☐ 시간제 ☐ 임시직\n\n학력\n교육 기관 | 취득 수료증/자격증/학위\n사우스 뱅크 고등학교 | 고등학교 졸업장\n154 다이목스 대학교 | 학사 학위\n\n직장 경력\n고용주 | 직책 | 기간\n154 더 가먼트 바안 | 영업 사원 | 2년\n알리오나 마케팅 | 부매니저 | 3년\n\n지원 동기\n154 저는 제 최근 고용주들이 그랬던 것처럼 빠르게 돌아가고 업무량이 많은 근무 환경에서 능력을 잘 발휘합니다. 꽤 바쁜 편인 페이지 터너 서점 또한 그럴 것이라 생각합니다. 또한, 소매 관리 전공 학사 학위가 있으므로 제가 이 직책에 아주 적합하다고 믿습니다.`
                }
            ],
            questions: [
                {
                    id: "p7-t10-q153",
                    questionNo: 153,
                    text: "What is suggested about Page Turner Booksellers?",
                    options: {
                        "A": "It has multiple locations.",
                        "B": "It is near South Bank High School.",
                        "C": "It will open a new store on September 20.",
                        "D": "It currently has only full-time positions available."
                    },
                    correctAnswer: "A",
                    classification: "P7_INFERENCE",
                    translation: "페이지 터너 서점에 대해 알 수 있는 것은?",
                    explanation: `지원서의 희망 근무지(Preferred location) 항목에 시홀름(Seaholme), 워리비(Werribee), 포트 멜버른(Port Melbourne) 등 세 곳의 지점이 언급되어 있는 것으로 보아 페이지 터너 서점은 여러 곳에 매장을 두고 있음을 알 수 있다. 따라서 (A)가 정답이다.`
                },
                {
                    id: "p7-t10-q154",
                    questionNo: 154,
                    text: "What is NOT indicated about Mr. Rami?",
                    options: {
                        "A": "He studied retail management.",
                        "B": "He recently moved to Werribee.",
                        "C": "He has experience working in sales.",
                        "D": "He prefers working in a busy setting."
                    },
                    correctAnswer: "B",
                    classification: "P7_DETAIL",
                    translation: "라미 씨에 대해 언급되지 않은 것은?",
                    explanation: `라미 씨가 소매 관리를 전공했다(with my bachelor's degree in retail management)는 내용은 (A)에 해당하고, 영업 사원으로 근무한 경력(The Garment Barn / Sales associate / 2 years)이 있다는 내용은 (C)에 해당하며, 업무량이 많아 바쁜 환경을 선호한다(I flourish in a fast-paced ~ quite busy)는 내용은 (D)에 해당한다. 워리비에 거주하고 있다는 주소 정보는 있으나 최근에 그곳으로 이사했다는 내용은 없으므로 (B)가 정답이다.`
                }
            ]
        },
        // Questions 155-157: Advertisement
        {
            id: "p7-t10-set5",
            questionRange: "155-157",
            passages: [
                {
                    id: "p7-t10-s5-p1",
                    contextType: "P4",
                    docType: "ADVERTISEMENT",
                    title: "Donovan Auto Lube",
                    content: `Donovan Auto Lube (DAL) is the first choice for residents of Knebworth who want to keep their cars running smoothly. We provide oil changes, tyre rotations, and routine inspections. Our team of certified auto technicians can service all vehicle makes and models. Customers may schedule an appointment or simply drive up to any DAL location during our business hours of 8:00 A.M. to 6:00 P.M., Monday through Saturday, and 11:00 A.M. to 5:00 P.M. on Sunday.\n\nThis summer, DAL offers a special promotion: a 5-quart oil change, oil filter replacement, and comprehensive maintenance check for just £15. This offer is available at all DAL locations throughout Hertfordshire. It may not be combined with any other promotional offer. The quoted price does not include value-added tax and does not cover any additional maintenance, repairs, and parts that a vehicle inspection may call for.\n\nVisit DAL for all your automotive needs.`,
                    translation: `도노반 자동차 윤활유 서비스\n\n도노반 자동차 윤활유 서비스(DAL)는 차가 문제없이 155 잘 굴러가기를 바라는 넵스워스 주민들이 가장 먼저 선택하는 곳입니다. 저희는 오일 교환, 타이어 위치 교환, 그리고 정기 점검 서비스를 제공합니다. 공인 자동차 기술자들로 구성된 저희 팀은 모든 종류와 모델의 차량을 정비할 수 있습니다. 156 고객들은 예약을 하거나 혹은 월요일부터 토요일까지는 오전 8시부터 오후 6시까지, 일요일에는 오전 11시부터 오후 5시까지 영업 시간 동안 어느 지점이든 방문하시면 됩니다.\n\n이번 여름에 DAL에서는 특별 프로모션을 제공합니다. 5쿼트 오일 교환, 157 오일 필터 교체, 그리고 종합 정비 점검 서비스를 단 15파운드에 제공합니다. 이 혜택은 하트퍼드셔 전역의 모든 DAL 지점 이용이 가능합니다. 다른 프로모션 혜택과 중복해서 사용할 수 없습니다. 제시된 가격에는 부가가치세가 포함되어 있지 않으며, 차량 점검 시 필요한 추가 정비, 수리 및 부품 비용은 별도입니다.\n\n자동차와 관련된 모든 것이 필요할 땐 DAL을 방문하세요.`
                }
            ],
            questions: [
                {
                    id: "p7-t10-q155",
                    questionNo: 155,
                    text: "The word \"running\" in paragraph 1, line 2, is closest in meaning to",
                    options: {
                        "A": "flowing",
                        "B": "speeding",
                        "C": "controlling",
                        "D": "functioning"
                    },
                    correctAnswer: "D",
                    classification: "P7_VOCABULARY",
                    translation: "첫 번째 단락 2행의 \"running\"과 의미가 가장 가까운 것은?",
                    explanation: `의미상 차가 문제없이 '굴러간다(작동한다)'는 뜻으로 쓰였으므로 '(기계 등이) 작동하다'라는 뜻의 (D) functioning이 정답이다.`
                },
                {
                    id: "p7-t10-q156",
                    questionNo: 156,
                    text: "When can a customer NOT be served at Donovan Auto Lube?",
                    options: {
                        "A": "On Monday at 8:00 A.M.",
                        "B": "On Wednesday at 6:00 P.M.",
                        "C": "On Saturday at 4:00 P.M.",
                        "D": "On Sunday at 6:00 P.M."
                    },
                    correctAnswer: "D",
                    classification: "P7_DETAIL",
                    translation: "도노반 자동차 윤활유 서비스 지점에서 서비스를 받을 수 없는 시간은?",
                    explanation: `첫 번째 단락의 마지막 문장에서 일요일 영업 시간은 오전 11시부터 오후 5시까지(11:00 A.M. to 5:00 P.M. on Sunday)라고 했으므로 일요일 오후 6시에는 서비스를 받을 수 없다. 따라서 (D)가 정답이다.`
                },
                {
                    id: "p7-t10-q157",
                    questionNo: 157,
                    text: "What is true about the promotional offer?",
                    options: {
                        "A": "It is not valid outside of Knebworth.",
                        "B": "It includes replacement of a filter.",
                        "C": "It does not apply to a maintenance check.",
                        "D": "It includes all taxes."
                    },
                    correctAnswer: "B",
                    classification: "P7_INFERENCE",
                    translation: "프로모션 혜택에 대해 사실인 것은?",
                    explanation: `두 번째 단락의 첫 문장에서 특별 프로모션은 오일 교환, 오일 필터 교체, 종합 정비 점검을 포함한다(a 5-quart oil change, oil filter replacement, and comprehensive maintenance check)고 했으므로 (B)가 정답이다.`
                }
            ]
        },
        // Questions 158-160: Biography
        {
            id: "p7-t10-set6",
            questionRange: "158-160",
            passages: [
                {
                    id: "p7-t10-s6-p1",
                    contextType: "P3",
                    docType: "ARTICLE",
                    title: "Kasem Ngam Biography",
                    content: `Kasem Ngam is a renowned speaker and author from Nonthaburi province in Thailand. — [1] —. Immediately upon graduating from Sangsuwan University in Bangkok, he joined Chamborn Gas & Electric (CG&E). Over a period of 25 years, he made a name for himself as one of CG&E's most dedicated and respected employees, even gaining national and international recognition. — [2] —.\n\nMr. Ngam currently runs a consulting firm that he started four years ago to help businesses develop innovative new technologies to power the modern world. — [3] —. He is the author of numerous articles on a variety of topics, including solar panels and hydrogen-powered vehicles. — [4] —. His honors include a Pax Award for his book Biofuels, a popular textbook on biofuels, which has been translated into several languages. His forthcoming book, Pricing Our Power: Funding the New Green Energy, will be published in May.`,
                    translation: `카셈 응암은 태국 논타부리 주 출신의 유명한 연설가이자 작가입니다. — [1] —. 방콕에 있는 상수완 대학교를 졸업하자마자, 158 그는 찬타라 가스&일렉트릭(CG&E)에 입사했습니다. 160 25년의 기간 동안, 그는 CG&E에서 가장 헌신적이고 존경받는 직원 중 한 명으로 명성을 떨쳤고, 심지어 국내외의 인정을 받았습니다. — [2] —.\n\n158, 159 현재 응암 씨는 기업들이 현대 사회에 동력을 제공할 혁신적인 신기술을 개발하는 것을 돕기 위해 4년 전 시작한 컨설팅 회사를 운영하고 있습니다. — [3] —. 그는 태양 전지판, 수소 동력 자동차를 포함해 다양한 주제에 관한 수많은 글의 저자입니다. — [4] —. 그의 영예에는 여러 언어로 번역된 바이오 연료에 관한 그의 저서 <미래의 연료>가 받은 팍스 혁신상이 포함됩니다. 그의 차기 도서 <에너지 가격 책정: 새로운 그린 에너지에 대한 자금 지원>은 5월에 출판될 것입니다.`
                }
            ],
            questions: [
                {
                    id: "p7-t10-q158",
                    questionNo: 158,
                    text: "What industry does Mr. Ngam most likely work in?",
                    options: {
                        "A": "Energy",
                        "B": "Travel",
                        "C": "Finance",
                        "D": "Journalism"
                    },
                    correctAnswer: "A",
                    classification: "P7_INFERENCE",
                    translation: "응암 씨가 종사할 것 같은 업계는?",
                    explanation: `첫 단락의 두 번째 문장에서 응암 씨가 찬타라 가스&일렉트릭(CG&E)에 입사했다(joined Chanbara Gas & Electric (CG&E))고 했고, 두 번째 단락 첫 문장에서는 현재 기업들이 현대 사회에 동력을 제공할 혁신적인 신기술을 개발하는 것을 돕기 위해 4년 전 시작한 컨설팅 회사를 운영하고 있다(Mr. Ngam currently runs a consulting firm ~ to help businesses develop innovative new technologies to power the modern world)고 했다. 응암 씨가 에너지 회사에서 근무했고, 현재도 에너지 신기술 개발을 돕는 컨설팅 회사를 운영하고 있는 것으로 보아 에너지 분야에 종사하고 있음을 알 수 있으므로 정답은 (A)이다.`
                },
                {
                    id: "p7-t10-q159",
                    questionNo: 159,
                    text: "What is indicated about Mr. Ngam?",
                    options: {
                        "A": "He is writing his first book.",
                        "B": "He knows several languages.",
                        "C": "He operates his own business.",
                        "D": "He is a recent university graduate."
                    },
                    correctAnswer: "C",
                    classification: "P7_INFERENCE",
                    translation: "응암 씨에 대해 명시된 것은?",
                    explanation: `두 번째 단락 첫 문장에서 현재 응암 씨는 4년 전 시작한 컨설팅 회사를 운영하고 있다(Mr. Ngam currently runs a consulting firm)고 했으므로 (C)가 정답이다.`
                },
                {
                    id: "p7-t10-q160",
                    questionNo: 160,
                    text: "How many years did Mr. Ngam work at CG&E?",
                    options: {
                        "A": "4",
                        "B": "14",
                        "C": "25",
                        "D": "30"
                    },
                    correctAnswer: "C",
                    classification: "P7_DETAIL",
                    translation: "응암 씨는 CG&E에서 몇 년 동안 근무했는가?",
                    explanation: `첫 번째 단락의 세 번째 문장에서 25년의 기간 동안(Over a period of 25 years) CG&E에서 근무했다고 언급했으므로 (C)가 정답이다.`
                }
            ]
        },
        // Questions 161-163: Article
        {
            id: "p7-t10-set7",
            questionRange: "161-163",
            passages: [
                {
                    id: "p7-t10-s7-p1",
                    contextType: "P3",
                    docType: "ARTICLE",
                    title: "Jobs Coming to Willettville",
                    content: `WILLETTVILLE (March 8)—Tanney's Discount Mart (TDM) announced today that it will hold a job fair in Willettville later this month. The company, headquartered in nearby Lyter City, is looking to fill 300 positions at its new distribution center, set to open here next month. In addition to seeking warehouse technicians and supervisors, the company is looking to fill positions in the processing, stock inspection, and maintenance departments.\n\n"TDM's distribution centers use modern automated systems, which creates a big need for qualified technical staff in particular," Kent Siler, TDM's president, said in a press release announcing the job fair.\n\nThe event will be held from 9:30 A.M. to 6:30 P.M. on Thursday, March 20, in the ballroom of the Twin Ridges Hotel. Details can be found by visiting tdm.com/careers.\n\n"This recruiting event will help us find the staff we need to meet the anticipated growth in demand for our products," said Mr. Siler. "TDM continues to expand its position in discount retail. So far this year, we have opened three stores, and we have five more slated to open by the end of next year." Mr. Siler noted, moreover, that TDM offers competitive wages for full-time and part-time employment.`,
                    translation: `윌렛빌에 생기는 일자리\n\n윌렛빌 (3월 8일) — 테니스 할인 마트(TDM)는 이달 말 윌렛빌에서 채용 박람회를 개최할 것이라고 오늘 발표했습니다. 인근 리터 시티에 본사를 둔 이 회사는 161 다음 달 이곳에 문을 열 예정인 새로운 물류 센터에 300개의 일자리를 충원하고자 합니다. 162(A) 기술자와 관리자를 구하는 것 외에도 이 회사는 물류 처리, 재고 검사 및 유지 관리 부서의 일자리를 충원하기를 바랍니다.\n\n"TDM의 물류 센터는 현대적인 자동화 시스템을 사용하여, 이로 인해 특히 자격을 갖춘 기술 직원이 많이 필요합니다."라고 TDM의 사장인 켄트 사일러는 채용 박람회를 발표하는 보도 자료에서 말했습니다.\n\n162(B) 이 행사는 3월 20일 목요일 오전 9시 30분부터 오후 6시 30분까지 트윈 리지스 호텔의 연회장에서 열릴 예정입니다. 162(D) 자세한 내용은 tdm.com/careers를 방문해 확인할 수 있습니다.\n\n"이번 채용 행사는 우리 상품에 대해 예상되는 수요 증가를 맞추기 위해 필요한 직원들을 찾는 데 도움이 될 것입니다."라고 사일러 씨는 말했습니다. 163 "TDM은 할인 소매업에서 입지를 지속적으로 확대하고 있습니다. 올해 지금까지 세 개의 매장을 열었으며 내년 말까지 다섯 개의 매장을 추가로 개점할 계획입니다." 사일러 씨는 또한 TDM이 풀타임 및 파트타임 고용직에 경쟁력 있는 급여를 제공한다고 언급했습니다.`
                }
            ],
            questions: [
                {
                    id: "p7-t10-q161",
                    questionNo: 161,
                    text: "What is stated about TDM's new distribution center?",
                    options: {
                        "A": "It is the company's first distribution center to use automated systems.",
                        "B": "It is the largest facility the company has built.",
                        "C": "It is scheduled to open in April.",
                        "D": "It was designed by an architectural firm in Willettville."
                    },
                    correctAnswer: "C",
                    classification: "P7_DETAIL",
                    translation: "TDM의 새로운 물류 센터에 대해 언급된 것은?",
                    explanation: `도입부에 기사 작성일이 3월 8일(March 8)로 나와 있는데, 기사 두 번째 문장에서 인근 리터 시티에 본사를 둔 이 회사는 다음 달 이곳에 문을 열 예정인 새로운 물류 센터에 300개의 일자리를 충원하고자 한다(The company, ~ at its new distribution center, set to open here next month)고 했다. 따라서 새로운 물류 센터는 기사가 작성된 3월의 다음 달인 4월에 문을 열 예정이므로 (C)가 정답이다.`
                },
                {
                    id: "p7-t10-q162",
                    questionNo: 162,
                    text: "What is NOT mentioned about the job fair?",
                    options: {
                        "A": "The kinds of jobs offered",
                        "B": "The day and date it will be held",
                        "C": "The types of refreshments served",
                        "D": "The source for detailed information"
                    },
                    correctAnswer: "C",
                    classification: "P7_DETAIL",
                    translation: "채용 박람회에 대해 언급되지 않은 것은?",
                    explanation: `첫 단락의 마지막 문장에서 기술자와 관리자를 구하는 것 외에도 이 회사는 처리, 재고 검사 및 유지 관리 부서의 일자리를 충원하기를 바란다고 했으므로 (A), 세 번째 단락의 첫 문장에서 이 행사는 3월 20일 목요일에 열릴 예정(The event will be held ~ on Thursday, March 20)이라고 했으므로 (B), 뒤이어 자세한 내용은 tdm.com/careers를 방문해 확인할 수 있다(Details can be found by visiting tdm.com/careers)고 했으므로 (D)는 기사에 언급되어 있다. 제공되는 다과에 대해서는 언급된 바가 없으므로 (C)가 정답이다.`
                },
                {
                    id: "p7-t10-q163",
                    questionNo: 163,
                    text: "What does Mr. Siler indicate about TDM?",
                    options: {
                        "A": "It is a growing business.",
                        "B": "It sponsors an annual job fair.",
                        "C": "It is staffed mostly by part-time workers.",
                        "D": "It relies heavily on online sales."
                    },
                    correctAnswer: "A",
                    classification: "P7_INFERENCE",
                    translation: "사일러 씨가 TDM에 대해 암시하는 것은?",
                    explanation: `마지막 단락의 두 번째 문장에서 사일러 씨가 TDM은 할인 소매업에서 입지를 지속적으로 확대하고 있고(TDM continues to expand its position in discount retail) 올해 지금까지 세 개의 매장을 열었으며 내년 말까지 다섯 개의 매장을 추가로 개점할 계획(So far this year, we have opened three stores, and we have five more slated to open by the end of next year)이라고 언급했으므로 정답은 (A)이다.`
                }
            ]
        },
        // Questions 164-167: Online Chat
        {
            id: "p7-t10-set8",
            questionRange: "164-167",
            passages: [
                {
                    id: "p7-t10-s8-p1",
                    contextType: "P7",
                    docType: "CHAT_MESSAGE",
                    title: "Online Chat",
                    content: `Lathan Little [5:40 P.M.]\nHello Aranda and Desmond, 164 I learned earlier today that the town has hired our company to demolish the lighthouse.\n\nAranda Richards [5:43 P.M.]\nI have mixed feelings about taking down that structure, but I realize the town's reasoning.\n\nDesmond Williams [5:43 P.M.]\nI'm just hearing about this now. I was absent from the office all day today.\n\nLathan Little [5:44 P.M.]\nWhy is that, Aranda?\n\nAranda Richards [5:46 P.M.]\n165 Well, given that business has been quite slow lately, our company needs the work, but 166 that lighthouse has historic value: it has been a major landmark of Burlingate for 100 years.\n\nLathan Little [5:48 P.M.]\n166 I realize that. But for the reasons provided by the city, our company can't afford to pass up this opportunity. Besides, the lighthouse is largely outdated.\n\nDesmond Williams [5:49 P.M.]\nNot necessarily. Ships always need warnings about hazardous areas. The lighthouse has served that function for a long time.\n\nLathan Little [5:51 P.M.]\nThat's true, but modern technological advances exist that simplify navigation and make the lighthouse increasingly a relic of the past. Anyway, 167 let's meet tomorrow at 10:00 A.M. to discuss how we'll carry out this job.`,
                    translation: `라탄 리틀 [오후 5:40] 안녕하세요, 아란다 그리고 데스먼드, 164 오늘 아침 시에서 등대를 철거하기 위해 우리 회사를 고용했다는 것을 알았습니다.\n\n아란다 리처즈 [오후 5:43] 저도요, 그렇지만 그 구조물을 철거하는 데 대해 여러 감정이 드네요.\n\n데스먼드 윌리엄스 [오후 5:43] 저는 그 일에 대해 지금 처음 들었습니다. 오늘 하루 종일 사무실을 비웠거든요.\n\n라탄 리틀 [오후 5:44] 아란다, 어째서 그런가요?\n\n아란다 리처즈 [오후 5:46] 165 최근 들어 사업이 상당히 부진한 것을 고려하면 우리 회사는 이 일을 해야 해요, 그렇긴 한데 166 이 등대는 100년 동안 벌링게이트의 주요 랜드마크였다는 역사적인 가치가 있습니다.\n\n라탄 리틀 [오후 5:48] 166 알고 있습니다. 그렇지만 말씀하신 이유로 회사에서 이 기회를 놓칠 여유는 없습니다. 게다가 등대는 대체로 구식이 되었습니다.\n\n데스먼드 윌리엄스 [오후 5:49] 꼭 그런 것은 아니에요. 선박들은 항상 위험한 곳에 대한 경고를 받아야 합니다. 등대는 오랫동안 그 기능을 수행해 왔습니다.\n\n라탄 리틀 [오후 5:51] 맞는 말이지만 지금은 항해를 단순화하고 등대를 점점 과거의 유물로 만드는 현대 기술 장치가 존재합니다. 어쨌든 167 내일 오전 10시에 만나서 이 일을 어떻게 진행할 것인지 논의합시다.`
                }
            ],
            questions: [
                {
                    id: "p7-t10-q164",
                    questionNo: 164,
                    text: "In what industry do the chat participants most likely work?",
                    options: {
                        "A": "Building construction",
                        "B": "Marine technology",
                        "C": "Corporate accounting",
                        "D": "Historic preservation"
                    },
                    correctAnswer: "A",
                    classification: "P7_INFERENCE",
                    translation: "채팅 작성자들이 근무할 것 같은 업종은?",
                    explanation: `5시 40분에 리틀 씨가 오늘 아침 시에서 등대를 철거하기 위해 회사를 고용했다는 것을 알았다(Earlier today I learned that the town has hired our company to demolish the lighthouse)고 한 것으로 보아 채팅 작성자들이 철거 회사에서 근무하고 있다는 것을 알 수 있으므로 (A)가 정답이다.`
                },
                {
                    id: "p7-t10-q165",
                    questionNo: 165,
                    text: "What is indicated about the company the chat participants work for?",
                    options: {
                        "A": "It recently purchased ultramodern equipment.",
                        "B": "It has experienced a decline in business.",
                        "C": "It is hired regularly by the city council.",
                        "D": "It has been in business for 100 years."
                    },
                    correctAnswer: "B",
                    classification: "P7_DETAIL",
                    translation: "채팅 작성자들이 근무하는 회사에 대해 명시된 것은?",
                    explanation: `5시 46분에 리처즈 씨가 최근 들어 사업이 상당히 부진한 것을 고려하면 회사는 이 일을 해야 한다(given that business has been quite slow lately, our company needs the work)고 했으므로 회사의 사업이 최근 하락세임을 알 수 있다. 따라서 (B)가 정답이다.`
                },
                {
                    id: "p7-t10-q166",
                    questionNo: 166,
                    text: "At 5:48 P.M., what does Mr. Little most likely mean when he writes, \"I realize that\"?",
                    options: {
                        "A": "He knows why Mr. Williams was absent.",
                        "B": "He recognizes the significance of the lighthouse for the town.",
                        "C": "He understands how much the city is paying.",
                        "D": "He knows that Ms. Richards is an expert in city history."
                    },
                    correctAnswer: "B",
                    classification: "P7_INFERENCE",
                    translation: "오후 5시 48분에 리틀 씨가 \"알고 있습니다\"라고 쓴 의도는?",
                    explanation: `5시 46분에 리처즈 씨가 이 등대는 100년 동안 벌링게이트의 주요 랜드마크였다는 역사적인 가치가 있다(the lighthouse has historic value: it has been a major landmark of Burlingate for 100 years)고 하자 5시 48분에 리틀 씨가 알고 있다(I realize that)고 대답했다. 따라서 리틀 씨는 시에서 등대가 차지하는 의미에 대해 인식하고 있음을 전하려는 의도로 한 말임을 알 수 있으므로 (B)가 정답이다.`
                },
                {
                    id: "p7-t10-q167",
                    questionNo: 167,
                    text: "What will the chat participants likely do tomorrow morning?",
                    options: {
                        "A": "Advertise a new project",
                        "B": "Attend a city council meeting",
                        "C": "Tour a lighthouse",
                        "D": "Start planning for an upcoming project"
                    },
                    correctAnswer: "D",
                    classification: "P7_INFERENCE",
                    translation: "채팅 작성자들은 내일 오전에 무엇을 할 것 같은가?",
                    explanation: `5시 51분에 리틀 씨가 내일 오전 10시에 만나서 이 일을 어떻게 진행할 것인지 논의하자(let's meet tomorrow at 10:00 A.M. to discuss how we'll carry out this job)고 했으므로 정답은 (D)이다.`
                }
            ]
        },
        // Questions 168-171: Brochure
        {
            id: "p7-t10-set9",
            questionRange: "168-171",
            passages: [
                {
                    id: "p7-t10-s9-p1",
                    contextType: "P3",
                    docType: "ARTICLE",
                    title: "Contempo Spaces\nWindow Treatment Package",
                    content: `If you are considering redecorating the windows of your living room, dining room, or bedroom, Contempo Spaces has the perfect treatment design package for you. — [1] —. We will help you put together the right combination of shades, panels, drapes, and valances—all perfectly tailored to fit your windows.\n\nHere's how it works:\n\n• First, one of our style representatives will come to your home and measure and photograph your windows in each room.\n\n• During that visit, our representative will show you samples of the many styles of fabrics and finishes available in our product line. — [2] —. Or, you can opt to visit our showroom after the home visit and make your selections there.\n\n• 169 One or two days after you've made your window treatment decisions, we will send you an invoice, listing the cost for materials, installation, and labor. 169 The quoted price is valid for thirty days. Upon receipt of payment, materials will be ordered. It usually takes from seven to fourteen days to reach our store. — [3] —.\n\n• Finally, we will contact you to schedule the date and time of installation. — [4] —. 170 Depending on the size of the project, installation can take two to eight hours.`,
                    translation: `컨템포 스페이시스\n창문 처리 패키지\n\n거실, 다이닝 공간 또는 침실의 창문을 새로 장식하는 것을 고려하고 계시다면, 컨템포 스페이시스가 귀하를 위한 완벽한 처리 디자인 패키지를 가지고 있습니다. — [1] —. 귀하의 창문에 맞춰 완벽하게 맞춤 제작되는 셰이드, 패널, 커튼, 밸런스의 적절한 조합 구성을 도와드립니다.\n\n168 진행 방식은 다음과 같습니다:\n\n• 먼저 저희 스타일 담당자 한 명이 고객님 댁을 방문하여 각 방의 창문을 측정하고 사진을 찍습니다.\n\n• 방문하는 동안 171 담당자가 저희 제품 라인에서 이용할 수 있는 다양한 스타일의 직물 및 금속 부속품 샘플을 보여드립니다. — [2] —. 또는 가정 방문 후 저희 쇼룸에 오셔서 제품을 선택하실 수 있습니다.\n\n• 169 창문 처리를 결정하시고 1~2일 후에 자재, 설치 및 인건비가 기재된 청구서를 보내 드립니다. 견적 가격은 30일간 유효합니다. 대금을 받는 즉시 자재가 발주됩니다. 자재가 저희 매장에 도착하는 데는 보통 7일에서 14일이 걸립니다. — [3] —.\n\n• 마지막으로 설치 날짜와 시간을 잡기 위해 저희가 연락을 드립니다. — [4] —. 170 작업 규모에 따라 설치하는 데 두 시간에서 여덟 시간이 걸릴 수 있습니다.`
                }
            ],
            questions: [
                {
                    id: "p7-t10-q168",
                    questionNo: 168,
                    text: "What is the purpose of the brochure?",
                    options: {
                        "A": "To explain a new policy",
                        "B": "To describe a popular product",
                        "C": "To advertise a special discount",
                        "D": "To present a standard process"
                    },
                    correctAnswer: "D",
                    classification: "P7_PURPOSE",
                    translation: "안내 책자의 목적은?",
                    explanation: `두 번째 단락에서 '진행 방식은 다음과 같다(Here's how it works)'라고 한 뒤, 아래에서 창문 측정, 제품 선택, 대금 결제, 설치 등 진행 방식에 대해 순서대로 설명하고 있다. 따라서 안내 책자의 글은 업체의 서비스가 이루어지는 기본 절차를 설명하기 위한 것이므로 (D)가 정답이다.`
                },
                {
                    id: "p7-t10-q169",
                    questionNo: 169,
                    text: "After how many days might the total cost listed in an invoice change?",
                    options: {
                        "A": "Two",
                        "B": "Seven",
                        "C": "Fourteen",
                        "D": "Thirty"
                    },
                    correctAnswer: "D",
                    classification: "P7_DETAIL",
                    translation: "청구서에 기재된 총비용은 며칠 뒤에 변경될 수도 있는가?",
                    explanation: `진행 방식을 설명하는 세 번째 항목의 첫 문장에서 창문 처리를 결정하고 1~2일 후에 자재, 설치 및 인건비가 기재된 청구서를 보낸다(One or two days after you've made your window treatment decisions, we will send you an invoice ~ and labor)고 했고, 견적 가격은 30일간 유효하다(The quoted price is valid for thirty days)고 했다. 따라서 청구서에 기재된 견적 비용은 30일이 지나면 변경될 수 있으므로 (D)가 정답이다.`
                },
                {
                    id: "p7-t10-q170",
                    questionNo: 170,
                    text: "What is indicated in the brochure about installation?",
                    options: {
                        "A": "It is not available for all window treatments.",
                        "B": "It is the responsibility of the customer.",
                        "C": "It takes no more than eight hours to complete.",
                        "D": "It is subcontracted to an outside vendor."
                    },
                    correctAnswer: "C",
                    classification: "P7_INFERENCE",
                    translation: "안내 책자에 설치에 관해 암시된 것은?",
                    explanation: `진행 방식을 설명하는 마지막 항목의 마지막 문장에서 작업 규모에 따라 설치하는 데 두 시간에서 여덟 시간이 걸릴 수 있다(Depending on the size of the project, installation can take two to eight hours)고 했으므로 설치를 완료하는 데 8시간은 넘지 않는다는 것을 알 수 있다. 따라서 (C)가 정답이다.`
                },
                {
                    id: "p7-t10-q171",
                    questionNo: 171,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"Our entire style collection can be viewed on our Web site.\"",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "B",
                    classification: "P7_SENTENCE_INSERTION",
                    translation: "[1], [2], [3], [4]로 표시된 위치 중에서 다음 문장이 들어가기에 가장 적절한 곳은?",
                    explanation: `주어진 문장에서 '당사의 전체 스타일 컬렉션은 웹사이트에서 보실 수 있습니다(Our entire style collection can be viewed on our Web site.)'라고 했으므로, 앞에는 일부 스타일에 대해 확인하는 것과 관련한 내용이 와야 적절하다. [2] 앞에서 고객의 집을 방문한 담당자가 다양한 스타일의 직물 및 금속 부속품 샘플을 보여 준다(our representative will show you samples of the many styles ~ in our product line)고 했으므로, 그 뒤에 주어진 문장이 들어가는 것이 글의 흐름상 자연스럽다. 따라서 (B)가 정답이다.`
                }
            ]
        },
        // Questions 172-175: E-mail
        {
            id: "p7-t10-set10",
            questionRange: "172-175",
            passages: [
                {
                    id: "p7-t10-s10-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    title: "EMAIL",
                    content: `To: Morgan Tebele <mtebele@newsom.com.na>\nFrom: Esme Mukaya <emukaya@skyleopard.com.na>\nDate: 21 August\nSubject: Offer\n\nDear Mr. Tebele,\n\n172 Whether you are refinancing a loan, training personnel, or marketing your financial services to other businesses, fast Internet access is essential for bank managers like you. Sky Leopard Communications delivers just that, thanks to its highly advanced pool of technicians and dedicated workforce.\n\nIn fact, 173 a recent survey conducted by the Namibian Association of Small-Business Owners (NASO) revealed that 75 percent of its members prefer our services over those of our competitors.\n\nThe reason: in addition to our state-of-the-art Internet infrastructure and our 174 outstanding pool of technicians, we offer the convenience of Internet connectivity through our High-Velocity Internet Access (HIVIA) service plan. HIVIA provides download and upload speeds that are three times faster than those of our closest competitor.\n\n175 Sky Leopard Communications offers new customers and those using one of our other plans the opportunity to try HIVIA for free for 30 days. To subscribe, visit us at www.skyleopard.com.na or call us at 061-987-555. 175 If at any time during the one-month trial period you are not satisfied with this plan, you can unsubscribe from the service at no cost to you.\n\nSincerely,\n\nEsme Mukaya, Sales`,
                    translation: `수신: 모건 테벨레 <mtebele@newsom.com.na>\n발신: 에스메 무카야 <emukaya@skyleopard.com.na>\n날짜: 8월 21일\n제목: 제안\n\n테벨레 씨께,\n\n172 대출을 재융자하든, 직원을 교육하든, 금융 서비스를 온라인으로 마케팅하든, 빠르고 믿을 수 있는 인터넷 이용은 고객님과 같은 은행 관리자에게 필수적입니다. 스카이 레오파드 커뮤니케이션즈는 고도로 발전된 네트워크와 헌신적인 인력 덕분에 바로 그것을 제공해 드립니다.\n\n실제로, 173 나미비아 소상공인 협회(NASO)가 실시한 최근 설문 조사에 따르면 회원의 75퍼센트가 경쟁사의 서비스보다 저희 서비스를 선호한다고 합니다.\n\n그 이유는 최첨단 인터넷 기반 시설과 174 뛰어난 기술자 인력 외에도 고속 인터넷 연결(HIVIA) 서비스 요금제를 통해 프리미엄 인터넷 연결을 제공하기 때문입니다. HIVIA는 가장 근접한 경쟁사보다 3배 더 빠른 다운로드 및 업로드 속도를 제공합니다.\n\n175 스카이 레오파드 커뮤니케이션즈는 신규 고객 및 당사의 다른 서비스 요금제 중 하나를 사용 중인 고객들에게 30일 동안 무료로 HIVIA를 사용할 수 있는 기회를 제공합니다. 가입하시려면 www.skyleopard.com.na를 방문하시거나 061-987-555로 전화 주십시오. 175 한 달간의 체험 기간 동안 이 요금제에 만족하지 않으실 경우 언제든지 무료로 서비스 가입을 취소하실 수 있습니다.\n\n에스메 무카야, 영업부`
                }
            ],
            questions: [
                {
                    id: "p7-t10-q172",
                    questionNo: 172,
                    text: "What industry does Mr. Tebele most likely work in?",
                    options: {
                        "A": "Web design",
                        "B": "Hospitality",
                        "C": "Marketing",
                        "D": "Banking"
                    },
                    correctAnswer: "D",
                    classification: "P7_INFERENCE",
                    translation: "테벨레 씨가 종사할 것 같은 업종은?",
                    explanation: `첫 단락의 첫 번째 문장에서 테벨레 씨에게 대출을 재융자하든, 직원을 교육하든, 금융 서비스를 온라인으로 마케팅하든, 빠르고 믿을 수 있는 인터넷 이용은 테벨레 씨와 같은 은행 관리자에게 필수적(Whether you are refinancing a loan, training personnel ~ is essential for bank managers like you)이라고 한 것으로 보아 테벨레 씨는 은행 관리자로 근무하고 있음을 알 수 있다. 따라서 (D)가 정답이다.`
                },
                {
                    id: "p7-t10-q173",
                    questionNo: 173,
                    text: "What is stated about Sky Leopard Communications?",
                    options: {
                        "A": "It offers discounts to NASO members.",
                        "B": "It is popular with small-business owners.",
                        "C": "It recently launched a new service plan.",
                        "D": "It is looking to increase its workforce."
                    },
                    correctAnswer: "B",
                    classification: "P7_DETAIL",
                    translation: "스카이 레오파드 커뮤니케이션즈에 대해 명시된 것은?",
                    explanation: `두 번째 단락에서 나미비아 소상공인 협회(NASO)가 실시한 최근 설문 조사에 따르면 회원의 75퍼센트가 경쟁사의 서비스보다 자사의 서비스를 선호한다(a recent survey conducted by the Namibian Association of Small-Business Owners (NASO) revealed that 75 percent of its members prefer our services over those of our competitors)고 했으므로 스카이 레오파드 커뮤니케이션즈는 소상공인들에게 인기가 있다는 것을 확인할 수 있다. 따라서 (B)가 정답이다.`
                },
                {
                    id: "p7-t10-q174",
                    questionNo: 174,
                    text: "The word \"outstanding\" in paragraph 3, line 1, is closest in meaning to",
                    options: {
                        "A": "various",
                        "B": "available",
                        "C": "excellent",
                        "D": "remaining"
                    },
                    correctAnswer: "C",
                    classification: "P7_VOCABULARY",
                    translation: "세 번째 단락 1행의 \"outstanding\"과 의미가 가장 가까운 단어는?",
                    explanation: `의미상 '뛰어난' 기술자들이라는 뜻으로 쓰인 것이므로 정답은 '훌륭한, 탁월한'을 뜻하는 (C) excellent이다.`
                },
                {
                    id: "p7-t10-q175",
                    questionNo: 175,
                    text: "What is true about the HIVIA service plan?",
                    options: {
                        "A": "It costs more than other plans.",
                        "B": "It was created after a customer survey.",
                        "C": "It requires the purchase of special equipment.",
                        "D": "It can be canceled for free within the first month."
                    },
                    correctAnswer: "D",
                    classification: "P7_INFERENCE",
                    translation: "HIVIA 서비스 요금제에 대해 알 수 있는 것은?",
                    explanation: `네 번째 단락의 첫 문장에서 스카이 레오파드 커뮤니케이션즈는 신규 고객 및 당사의 다른 서비스 요금제 중 하나를 사용 중인 고객들에게 30일 동안 무료로 HIVIA를 사용할 수 있는 기회를 제공한다(Sky Leopard Communications offers ~ the opportunity to try HIVIA for free for 30 days)고 했고, 마지막 문장에서 한 달간의 체험 기간 동안 이 요금제에 만족하지 않을 경우 언제든지 무료로 서비스 가입을 취소할 수 있다(at any time during the one-month trial period ~ you can unsubscribe from the service at no cost to you)고 했다. 따라서 HIVIA 서비스 요금제는 한 달간의 무료 체험 중 언제든 취소할 수 있으므로 (D)가 정답이다.`
                }
            ]
        },
        // Questions 176-180: Double Passage
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
                    explanation: "웨비나 설명에서 참가자들이 범위 명세서 및 커뮤니케이션 계획과 같은 도구와 문서를 사용하는 방법을 배울 것이라고 명시되어 있습니다. 정답은 (B) \"참가자에게 특정 도구 사용 방법을 보여준다\"입니다."
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
                    explanation: "\"cover\"는 문맥상 \"다루다\", \"논의하다\"의 의미로 사용되었습니다. 정답은 (D) \"talk about\"입니다."
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
                    explanation: "Mr. Chung은 같은 날 회사의 분기별 회의에서 발표를 해야 하므로 웨비나에 참석할 수 없다고 설명했습니다. 정답은 (A) \"일정 충돌 설명\"입니다."
                },
                {
                    id: "p7-t10-q179",
                    text: "What is suggested about Mr. Chung?",
                    questionNo: 179,
                    options: {
                        "A": "He plans to record his presentation.",
                        "B": "He often trains new project managers.",
                        "C": "He attends webinars on a regular basis.",
                        "D": "He has relatively little experience as a supervisor."
                    },
                    correctAnswer: "D",
                    classification: "P7_INFERENCE",
                    explanation: "이메일에서 Mr. Chung은 자신을 초보 감독자(novice supervisor)라고 언급했습니다. 정답은 (D) \"감독자로서 경험이 상대적으로 적다\"입니다."
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
                    classification: "P7_DETAIL",
                    explanation: "Mr. Chung은 웨비나와 같은 날에 발표를 해야 한다고 언급했으며, 웨비나는 1월 18일입니다. 정답은 (C) \"1월 18일\"입니다."
                }
            ]
        },
        // Questions 181-185: Double Passage
        {
            id: "p7-t10-set12",
            questionRange: "181-185",
            setType: "Double",
            passages: [
                {
                    id: "p7-t10-s12-p1",
                    contextType: "P3",
                    docType: "ARTICLE",
                    content: `GALWAY (4 March)—Adelle Rosier, a third-generation soap maker, opened her shop in Galway eight years ago. Nestled behind Eglinton Gourmet Market on Raven Terrace, her business, Rosier and Finch, is booming.\n\nMs. Rosier credits the success to her commitment to lifelong learning. "Yes, my handcrafted soaps, shampoos, and lotions are luxurious," she said. "But there are a lot of high-quality skin-care products out there. So after learning the trade from my family, I have increased my sales knowledge by taking online courses in business-to-business (B2B) marketing."\n\nMs. Rosier adds that those courses built her confidence in selling her products directly to hotels. "Thanks to what I learned in my B2B strategies courses, I managed to persuade a number of boutique hotels in Europe to try my products." And so Rosier and Finch skin-care products are available in guest rooms at, for instance, the Bruadair Hotel in Galway, the Florinda Grand in Lisbon, Portugal, and the Zerra Inn in Reykjavík, Iceland.\n\nMs. Rosier further points out that many of her customers first learn of her products during a hotel stay. Afterward, they visit the shop in person or go online to purchase the items for themselves.\n\nRosier and Finch is located at 12 Raven Terrace and can be found online at www.rosierandfinch.co.ie.`
                },
                {
                    id: "p7-t10-s12-p2",
                    contextType: "P3",
                    docType: "REVIEW",
                    title: "https://www.florindagrand.pt/en/guest_reviews",
                    content: `I had to arrange a last-minute business trip to my company's Portugal office, and the usual hotel I book was completely full. Based on some online recommendations, I decided to stay at Florinda Grand. While this charming hotel is much smaller than the usual places I stay, it has every comfort one would want during a business trip. In addition to a tastefully decorated and comfortable room, there were gourmet treats on my pillowcase and the finest soap, shampoo, and other toiletries available for me to enjoy. My only regret is that I was in Lisbon for just three days. Next time I visit the Lisbon office, I will stay longer and book a room at the Florinda Grand.\n\n—posted by Ashton Wu, 7 June`
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
                    explanation: "기사는 Adelle Rosier라는 비누 제조업자와 그녀의 사업 성공에 대해 다루고 있습니다. 정답은 (C) \"소규모 사업주 프로필\"입니다."
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
                    explanation: "기사에서 Ms. Rosier는 B2B 마케팅에 대한 온라인 과정을 수강하여 판매 지식을 늘렸다고 언급했습니다. 정답은 (D) \"온라인 수업 참여\"입니다."
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
                    explanation: "기사에서 Ms. Rosier가 유럽의 부티크 호텔들에 제품을 판매하도록 설득했다고 언급했습니다. 정답은 (A) \"다른 기업에 제품 판매\"입니다."
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
                    classification: "P7_INFERENCE",
                    explanation: "리뷰에서 Mr. Wu는 Florinda Grand 호텔의 비누, 샴푸 및 기타 세면도구가 최고급이었다고 언급했으며, 이는 Rosier and Finch 제품입니다. 정답은 (D) \"Rosier and Finch 제품을 좋아한다\"입니다."
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
                    explanation: "리뷰에서 Mr. Wu는 리스본에 단 3일만 있었던 것이 유일한 후회라고 언급했습니다. 정답은 (A) \"여행 기간\"입니다."
                }
            ]
        },
        // Questions 186-190: Triple Passage
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
                    content: `Train to Achieve (TTA)—Our classes prepare you to succeed!\n\nProfiled in the latest Business Directors Nigeria magazine, Train to Achieve (TTA) is one of the most innovative training providers in West Africa. By offering our classes entirely in online format, we bring the classroom to your home. All classes include video lectures, reading materials, and discussion forums in a variety of business-related fields. Upon successful completion of a class, you will receive an official Certificate of Training, in addition to any résumé. For a complete list of class fees and descriptions, visit our Web site. Below are some of our most popular classes.\n\nIntroduction to Social Media Marketing (TTA1504): Taught by marketing consultant Marcus Akpan, the class equips you with the know-how to promote your business online.\n\nBecome a Successful Freelance Writer (TTA1283): Business writer Brenda Abande gives expert guidance on how to home your writing skills and market your services.\n\nStarting an Internet Radio Station (TTA7629): Online radio host Natalie Kabiru shows you how to appeal to your target market and gives practical tips for setting up your broadcast service.\n\nBasics of Graphic Design (TTA7633): Veteran graphic designer Doug Umaru helps you acquire the basic skills needed to start a graphic design business.`
                },
                {
                    id: "p7-t10-s13-p2",
                    contextType: "P7",
                    docType: "CHAT_MESSAGE",
                    title: "Discussion forum for students enrolled in Train to Achieve Class TTA1504",
                    content: `Posted on: 21 May, 9:41 A.M.    Posted by: Joseph Egbe    Subject: Presentations\n\nViewing the list of students enrolled in this class, I remembered chatting with some of you on the forum for Brenda Abande's poster design class. I look forward to sharing our ideas on marketing with you all. As I mentioned in my introductory videoconference with Mr. Akpan for an individual videoconference about my business. I own a food truck from which I sell baked goods, and when I shared with Mr. Akpan the outline for my Web site, he suggested that I add a section with vivid images of all my baked goods. I was helpful advice.`
                },
                {
                    id: "p7-t10-s13-p3",
                    contextType: "P3",
                    docType: "INFORMATION",
                    title: "Egbe's Bakery—Unique baked-in flavours in every bite!",
                    content: `- Section 1: Explore our menu and price list\n- Section 2: View photos of our delicious treats\n- Section 3: Learn about our catering services\n- Section 4: View lists of ingredients`
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
                    explanation: "광고 첫 부분에서 TTA는 최신 Business Directors Nigeria 잡지에 소개되었다고 명시되어 있습니다. 이는 업계 전문가들에게 추천받았다는 것을 의미합니다. 따라서 정답은 (C) '업계 전문가들에게 추천받았다'입니다."
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
                    explanation: "광고에서 수업을 성공적으로 완료하면 공식 Certificate of Training(교육 수료증)을 받게 되며, 이를 이력서에 추가할 수 있다고 명시되어 있습니다. 따라서 정답은 (D) '인증 문서'입니다."
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
                    explanation: "포럼 게시물에서 Mr. Egbe는 Brenda Abande의 포스터 디자인 수업 포럼에서 몇몇 학생들과 채팅했던 것을 기억한다고 언급했습니다. 이는 그가 이전에 TTA의 다른 수업을 수강했음을 시사합니다. 따라서 정답은 (D) '이전에 TTA 수업을 들은 적이 있다'입니다."
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
                    classification: "P7_DETAIL",
                    explanation: "포럼 게시물의 제목을 보면 'Discussion forum for students enrolled in Train to Achieve Class TTA1504'라고 되어 있습니다. 광고에서 TTA1504는 'Introduction to Social Media Marketing' 수업입니다. 따라서 정답은 (A) 'Introduction to Social Media Marketing'입니다."
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
                    classification: "P7_INFERENCE",
                    explanation: "포럼 게시물에서 Mr. Egbe는 Mr. Akpan과의 화상회의에서 웹사이트 개요를 공유했고, Mr. Akpan이 구운 제품의 생생한 이미지가 있는 섹션을 추가하라고 제안했다고 언급했습니다. 개요를 보면 Section 2가 'View photos of our delicious treats'입니다. 따라서 정답은 (B) 'Section 2'입니다."
                }
            ]
        },
        // Questions 191-195: Triple Passage
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
                    content: `By Rebecca Roats\n\nNOTTINGHAM (1 August)—Orange Bay Kitchen has been serving up an infusion of Jamaican flavours in a laid-back Caribbean atmosphere for nearly a year now. Owned by Keros Deshaides, the 150-seat restaurant is an aromatic jewel amid the bustling shops and cafés of Nottingham's city centre. The restaurant's menu features an impressive variety of delights on the extensive menu, which includes curried goat, oxtail soup, and jerk chicken. Marinated for 24 hours prior to grilling and served with sides of spiced cabbage and rice, the jerk chicken is a steal at £12.\n\nIf you stop in any Friday night between 9:00 and 11 P.M., you will enjoy live reggae music.`
                },
                {
                    id: "p7-t10-s14-p2",
                    contextType: "P3",
                    docType: "REVIEW",
                    title: "Orange Bay Kitchen Review",
                    content: `https://www.dinersreview.co.uk/orangebaykitchen\n\nPosted on 22 August by Tamika Peterkin, tpeterkin@gunmail.co.uk\n\nOrange Bay Kitchen: 2/5 Stars\n\nAfter reading a glowing article about Orange Bay Kitchen by Rebecca Roats, I was eager to give this place a try. My husband and I arrived there at 7 P.M. yesterday. We were disappointed to learn that the live music performance scheduled for that night had been cancelled. Undeterred, we stayed and both ordered the jerk chicken. While the chicken's smoky flavour was outstanding, the spiced cabbage was lacking in flavour. Also, the portion size was smaller than we had anticipated, so we ordered another appetiser to avoid going home hungry. The head chef came out to greet us before we left. He was very friendly and definitely has a passion for cooking. We will probably not visit this restaurant anytime soon.`
                },
                {
                    id: "p7-t10-s14-p3",
                    contextType: "P1",
                    docType: "EMAIL",
                    content: `To: tpeterkin@gunmail.co.uk\nFrom: kdeshaides@orangebaykitchen.co.uk\nDate: 24 August\nSubject: Your review\nAttachment: 0824\n\nDear Ms. Peterkin,\n\nThank you for visiting Orange Bay Kitchen and leaving a review. Our manager, Keros Deshaides, told me about your visit and our failure to live up to your expectations. I sincerely apologise for the disappointing experience you had. We would like to another try.\n\nDuring your visit, our head had an equipment malfunction, which is what led to the smaller portion sizes. We have since replaced the malfunctioning equipment. Also, I want you to know that Head Chef Aldo Brown has changed the recipe for the spiced cabbage. I am sure you will find them delightful.\n\nSincerely,\n\nVera Singh, Owner\nOrange Bay Kitchen`
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
                    explanation: "기사에서 Orange Bay Kitchen은 거의 1년 동안 자메이카 풍미를 제공해왔다고 명시되어 있습니다. 'for nearly a year now'는 약 1년 전에 개업했다는 의미입니다. 따라서 정답은 (D) '약 1년 전에 개업했다'입니다."
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
                    explanation: "기사에서 레스토랑 메뉴에는 curried goat(카레 염소 고기), 꼬리 곰탕, 저크 치킨 등이 포함된다고 언급되어 있습니다. 정답은 (A) 'Curried goat'입니다."
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
                    classification: "P7_INFERENCE",
                    explanation: "온라인 리뷰에서 Ms. Peterkin은 어제 오후 7시에 도착했고, 그날 밤 예정된 라이브 음악 공연이 취소되었다는 것을 알게 되었다고 언급했습니다. 기사에서 라이브 레게 음악은 금요일 밤 9시~11시에 제공된다고 했으므로, 그녀는 금요일에 방문했을 가능성이 높습니다. 따라서 정답은 (A) '금요일에 방문했다'입니다."
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
                    explanation: "이메일에서 Vera Singh은 Ms. Peterkin의 방문과 리뷰에 감사하며, 실망스러운 경험에 대해 진심으로 사과하고 있습니다. 따라서 정답은 (B) '사과를 제공하기 위해'입니다."
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
                    classification: "P7_INFERENCE",
                    explanation: "온라인 리뷰에서 Ms. Peterkin은 떠나기 전에 수석 셰프가 나와서 인사했다고 언급했으며, 그는 매우 친절했다고 했습니다. 이메일에서 수석 셰프는 Aldo Brown이라고 명시되어 있습니다. 따라서 정답은 (C) 'Mr. Brown'입니다."
                }
            ]
        },
        // Questions 196-200: Triple Passage
        {
            id: "p7-t10-set15",
            questionRange: "196-200",
            setType: "Triple",
            passages: [
                {
                    id: "p7-t10-s15-p1",
                    contextType: "P5",
                    docType: "FORM",
                    content: `Client: Green Canyon  Date: June 10\nAccount: 4552-0\n\n| Item | Price |\n|---|---|\n| Garden soil, 33 cubic meters | $1,170.00 |\n| Crushed gravel, 30 metric tons | 1,710.00 |\n| Paving stones, 30 metric tons | 630.00 |\n| 70 paving stones, 0.5 x 0 meters | 630.00 |\n| **Subtotal** | **4,650.00** |\n| | |\n| Discount (10%) | -465.00 |\n| Delivery charge | 230.00 |\n| **Grand Total** | **4,535.00** |\n\nPlease see the enclosed notice outlining important changes to your billing.`
                },
                {
                    id: "p7-t10-s15-p2",
                    contextType: "P2",
                    docType: "NOTICE",
                    title: "Orbys Distributors",
                    content: `To our valued customers:\n\nOur current invoicing system has been in use since Orbys Distributors was founded over twenty years ago. As a much-needed upgrade, we are switching to electronic invoicing. Beginning August 1, invoices will be generated automatically each month and will be sent to the e-mail address associated with your company's account.\n\nRest assured that our long-standing incentives remain in place:\n\n• A 10% discount for orders of more than $4,000\n• A 20% discount for charitable organizations\n• Free deliveries to locations within 5 miles of our supply depot\n• Free samples for members of our Frequent Buyer Club\n\nMore information about our transition to electronic invoicing is available on our Web site. Thanks for your support. Orbys Distributors appreciates your business!`
                },
                {
                    id: "p7-t10-s15-p3",
                    contextType: "P1",
                    docType: "EMAIL",
                    content: `To: Mary Peterson, Billing Department\nFrom: Trevor Singh, Account Manager\nDate: September 12\nSubject: Account 1012-4\n\nHello Mary,\n\nI received a query today from William Tesoriero at Tesoriero Remodeling. His monthly invoice was late in arriving.\n\nAs you know, Mr. Tesoriero was one of our very first customers. Since we first opened for business, he has made purchases from us on a regular basis. He is also a member of the Frequent Buyer Club. This is a customer we absolutely do not want to lose. I explained to him that the rollout of our electronic invoicing system did not go as smoothly as we had hoped.\n\nI would appreciate it if you could please investigate the problem without delay and send the invoice for August to Mr. Tesoriero.\n\nTrevor`
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
                    explanation: "송장을 보면 Green Canyon이 주문한 품목은 정원용 흙, 자갈, 포장용 돌 등입니다. 이러한 자재들은 조경 작업에 사용되는 것들이므로, Green Canyon은 조경 회사일 가능성이 높습니다. 정답은 (D) '조경 회사이다'입니다."
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
                    classification: "P7_INFERENCE",
                    explanation: "송장을 보면 소계(Subtotal)가 $4,650.00이고, 10% 할인(-$465.00)을 받았습니다. 공지사항에서 $4,000 이상 주문 시 10% 할인을 제공한다고 명시되어 있습니다. 정답은 (B) '$4,000 이상의 상품을 주문했다'입니다."
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
                    explanation: "공지사항에서 Orbys Distributors는 전자 송장 시스템으로 전환하고 있다고 명시되어 있습니다. 정답은 (C) '송장 시스템'입니다."
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
                    classification: "P7_INFERENCE",
                    explanation: "이메일에서 Mr. Tesoriero는 Orbys Distributors의 첫 번째 고객 중 한 명이었고 사업 초기부터 정기적으로 구매해왔다고 했습니다. 공지사항에서 회사가 20년 이상 전에 설립되었다고 했으므로, 그는 20년 이상 고객이었음을 알 수 있습니다. 정답은 (C) '20년 이상 고객이었다'입니다."
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
                    explanation: "이메일 마지막 부분에서 Mr. Singh은 Ms. Peterson에게 8월 송장(invoice)을 Mr. Tesoriero에게 보내달라고 요청했습니다. 정답은 (A) '청구서를 보내다'입니다."
                }
            ]
        }
    ]
};
