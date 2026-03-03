import { Part7Test } from './types';
export const test10Data: Part7Test = {
    testId: 10,
    vol: 4,
    title: "Test 10",
    sets: [
        // Questions 147-148: Sign
        {
            id: "v4-p7-t10-set1",
            questionRange: "147-148",
            passages: [
                {
                    id: "v4-p7-t10-s1-p1",
                    contextType: "P2",
                    docType: "NOTICE",
                    title: "Galloway Office Park",
                    content: `Building 1\nHarris Toddman, MD\nLansin Diagnostic Labs\nSmiley Dental Offices\n\nBuilding 2\nFreel Primary Care Physicians\nRally Star Physical Therapy Associates\n\nBuilding 3\nLee and Associates, Internists\nKare Medical Services\n\nBuilding 4\nLurie Pharmaceuticals\n\nNo Truck Access\nNo Soliciting\nNo Trespassing`,
                    translation: `갤러웨이 오피스 파크\n\n1동\n해리스 토드먼, 의학박사\n랜신 진단 연구소\n스마일리 치과\n\n2동\n프릴 일차 진료의\n랠리 스타 물리 치료 연합\n\n3동\n리 앤 어소시에이츠, 내과 전문의\n케어 의료 서비스\n\n4동\n루리 제약\n\n트럭 출입 금지\n잡상인 출입 금지\n무단 침입 금지`
                }
            ],
            questions: [
                {
                    id: "v4-p7-t10-q147",
                    questionNo: 147,
                    text: "Where would the sign most likely be found?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "On an office desk",
                        "B": "In a hospital waiting room",
                        "C": "In the lobby of a real estate agency",
                        "D": "Near the entrance of an office complex"
                    },
                    correctAnswer: "D",
                    translation: "표지판이 있을 가능성이 높은 곳은?",
                    explanation: `표지판 상단에 'Galloway Office Park'라는 명칭과 함께 각 건물(Building 1~4)에 입주해 있는 업체들이 나열되어 있고, 하단에는 출입 금지 안내문이 적혀 있는 것으로 보아 사무 단지 입구 근처에서 볼 수 있는 안내판임을 알 수 있다. 따라서 (D)가 정답이다.`
                },
                {
                    id: "v4-p7-t10-q148",
                    questionNo: 148,
                    text: "What type of businesses are listed on the sign?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Health care",
                        "B": "Legal services",
                        "C": "Manufacturing",
                        "D": "Finance"
                    },
                    correctAnswer: "A",
                    translation: "표지판에 나열된 사업체의 유형은?",
                    explanation: `의사(MD), 진단 연구소(Diagnostic Labs), 치과(Dental Offices), 일차 진료의(Primary Care Physicians), 물리 치료(Physical Therapy), 내과 전문의(Internists), 의료 서비스(Medical Services), 제약(Pharmaceuticals) 등이 나열되어 있으므로 의료 관련 서비스 업체들을 설명하고 있다. 따라서 (A)가 정답이다.`
                }
            ]
        },
        // Questions 149-150: Online Chat
        {
            id: "v4-p7-t10-set2",
            questionRange: "149-150",
            passages: [
                {
                    id: "v4-p7-t10-s2-p1",
                    contextType: "P7",
                    docType: "CHAT_MESSAGE",
                    title: "Online Chat",
                    content: `Darion Gaines [11:16 A.M.]\nSonia, the sink in the third-floor break room is clogged.\n\nSonia Pinkerton [11:20 A.M.]\nAgain? That's the second time this month.\n\nDarion Gaines [11:22 A.M.]\nOne of our sales associates got it unclogged last time, but maybe we should call a professional this time. Should I contact Mr. Green and let him know?\n\nSonia Pinkerton [11:23 A.M.]\nThe office manager? I think it might be best to call the head of maintenance, Tammy Toska. She can probably get someone out to fix it pretty quickly.\n\nDarion Gaines [11:24 A.M.]\nOK. I could reach out to her.\n\nSonia Pinkerton [11:25 A.M.]\nGo ahead. In the meantime, I'll put up a notice to let everyone know they should not use that sink.`,
                    translation: `대리언 게인스 [오전 11:16] 소니아, 3층 휴게실에 있는 싱크대가 막혔어요.\n\n소니아 핑커턴 [오전 11:20] 또요? 이번 달에만 두 번째네요.\n\n대리언 게인스 [오전 11:22] 지난번에는 우리 영업 직원 중 한 명이 뚫었지만, 이번에는 전문가를 부르는 게 좋을 것 같아요. 그린 씨에게 연락해서 알려야 할까요?\n\n소니아 핑커턴 [오전 11:23] 149 사무실 관리자요? 제 생각에는 정비팀 정인 태미 토스카에게 연락하는 게 가장 좋을 것 같아요. 그녀라면 아마 수리할 사람을 꽤 빨리 보내 줄 수 있을 거예요.\n\n대리언 게인스 [오전 11:24] 알겠어요. 제가 그녀에게 연락해 볼게요.\n\n소니아 핑커턴 [오전 11:25] 150 그렇게 하세요. 그러는 동안 저는 모두에게 싱크대를 사용하지 말라는 안내문을 붙일게요.`
                }
            ],
            questions: [
                {
                    id: "v4-p7-t10-q149",
                    questionNo: 149,
                    text: "Who most likely is Mr. Green?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "A custodian",
                        "B": "A plumber",
                        "C": "A manager",
                        "D": "A sales associate"
                    },
                    correctAnswer: "C",
                    translation: "그린 씨는 누구일 것 같은가?",
                    explanation: `네 번째 메시지에서 핑커턴 씨가 사무실 관리자(The office manager?)라고 했으므로 그린 씨는 관리자임을 알 수 있다. 따라서 (C)가 정답이다.`
                },
                {
                    id: "v4-p7-t10-q150",
                    questionNo: 150,
                    text: "At 11:25 A.M., what does Ms. Pinkerton most likely mean when she writes, \"Go ahead\"?",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "Mr. Gaines may enter the break room.",
                        "B": "Mr. Gaines should contact Ms. Toska.",
                        "C": "Mr. Gaines should post a notice.",
                        "D": "Mr. Gaines can try to repair the sink."
                    },
                    correctAnswer: "B",
                    translation: "오전 11시 25분에 핑커턴 씨가 \"그렇게 하세요(Go ahead)\"라고 쓴 의도는?",
                    explanation: `11시 24분에 게인스 씨가 정비팀장인 토스카 씨에게 연락해 보겠다(I could reach out to her)고 하자, 11시 25분에 핑커턴 씨가 "그렇게 하세요(Go ahead)"라고 했으므로, 게인스 씨가 토스카 씨에게 연락하도록 한 것임을 알 수 있다. 따라서 (B)가 정답이다.`
                }
            ]
        },
        // Questions 151-152: E-mail
        {
            id: "v4-p7-t10-set3",
            questionRange: "151-152",
            passages: [
                {
                    id: "v4-p7-t10-s3-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    title: "EMAIL",
                    content: `To: Ramdeo Khemradj <rkhemradj@topofthehill.jm>\nFrom: Kerensa Mayne <kmayne@topofthehill.jm>\nDate: 17 August\nSubject: Information\nAttachment: Latest draft\n\nHi, Ramdeo,\n\nPlease take a look at the latest draft and let me know what you think. I changed the layout—desserts are now on the inside back cover—and provided descriptions of the additional dinner dishes that you and your kitchen staff will be introducing next month.\n\nI haven't updated the prices yet though, as I haven't decided whether we will need to increase some of them.\n\nI'm sure you agree with me that the design firm did a great job upgrading the kitchen and making the dining room brighter and more inviting.\n\nKerensa`,
                    translation: `수신: 람데오 켐라지\n발신: 케렌사 메인\n날짜: 8월 17일\n제목: 정보\n첨부: 최근 초안\n\n안녕하세요, 람데오 씨,\n\n152 최근 초안을 살펴보시고 의견을 알려 주세요. 152 제가 레이아웃을 변경해서 이제 디저트는 안쪽 뒤 표지에 있으며, 151 귀하와 귀하의 주방 직원들이 다음 달에 새로 선보일 추가 저녁 요리에 대한 설명을 넣었습니다.\n\n가격은 아직 업데이트하지 않았는데, 일부 품목의 가격을 인상해야 할지 아직 결정하지 못했기 때문입니다.\n\n디자인 업체가 주방을 개선하고 식당을 더 밝고 매력적으로 만드는 일을 아주 훌륭하게 해냈다는 제 의견에 귀하도 동의하실 거라 확신합니다.\n\n케렌사`
                }
            ],
            questions: [
                {
                    id: "v4-p7-t10-q151",
                    questionNo: 151,
                    text: "Who most likely is Mr. Khemradj?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "An interior decorator",
                        "B": "A restaurant owner",
                        "C": "An architect",
                        "D": "A head chef"
                    },
                    correctAnswer: "D",
                    translation: "켐라지 씨는 누구일 것 같은가?",
                    explanation: `첫 번째 단락에서 메인 씨가 켐라지 씨에게 귀하와 귀하의 주방 직원들이 다음 달에 새로 선보일 저녁 요리(the additional dinner dishes that you and your kitchen staff will be introducing next month)라고 언급한 것으로 보아 켐라지 씨는 주방의 책임자인 주방장임을 알 수 있다. 따라서 (D)가 정답이다.`
                },
                {
                    id: "v4-p7-t10-q152",
                    questionNo: 152,
                    text: "What most likely is attached to the e-mail?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "A price list",
                        "B": "A revised menu",
                        "C": "A photograph of food",
                        "D": "A lighting plan for a dining room"
                    },
                    correctAnswer: "B",
                    translation: "이메일에 첨부되었을 가능성이 높은 것은?",
                    explanation: `첫 번째 단락에서 최근 초안(the latest draft)을 보라고 하며 레이아웃을 변경해 디저트를 안쪽 뒤 표지에 넣었고 저녁 요리들에 대한 설명을 추가했다(I changed the layout—desserts are now on the inside back cover—and provided descriptions of the additional dinner dishes)고 했으므로 첨부된 초안은 수정된 메뉴판임을 알 수 있다. 따라서 (B)가 정답이다.`
                }
            ]
        },
        // Questions 153-154: Application Form
        {
            id: "v4-p7-t10-set4",
            questionRange: "153-154",
            passages: [
                {
                    id: "v4-p7-t10-s4-p1",
                    contextType: "P5",
                    docType: "FORM",
                    title: "Page Turner Booksellers\nEmployment Application Form",
                    content: `Date of Application: 1 September\n\nPERSONAL DATA\nName: Arturo Rami | Address: 10 Beamish Street, Werribee, VIC 3030\nE-mail: arturo.rami@amail.com.au | Telephone: 03 9555 3744\n\nEMPLOYMENT DESIRED\nDesired position | Assistant Store Manager\nAvailable start date | 20 September\nPreferred location | ☐ Seaholme  ☑ Werribee  ☐ Port Melbourne\nPreferred status | ☑ Full-time  ☐ Part-time  ☐ Temporary\n\nEDUCATION\nEducational Institution | Diploma/Certificate/Degree Earned\nSouth Bank High School | High school diploma\n154 Dymocks University | Bachelor's degree\n\nEMPLOYMENT HISTORY\nEmployer | Position | Duration\n154 The Garment Barn | Sales associate | 2 years\nAliona Marketing | Assistant manager | 3 years\n\nEXPLANATION OF INTEREST IN THE POSITION\n154 I flourish in a fast-paced and demanding work environment, which my most recent employers are known for. I expect the same is true of Page Turner Booksellers, which tends to be quite busy. Moreover, with my bachelor's degree in retail management, I believe I am well suited for the position.`,
                    translation: `페이지 터너 서점\n채용 지원서\n\n지원 날짜: 9월 1일\n\n개인 정보\n성명: 아르투로 라미 | 주소: 10 Beamish Street, Werribee, VIC 3030\n이메일: arturo.rami@amail.com.au | 전화: 03 9555 3744\n\n희망 직종\n희망 직책 | 매장 부매니저\n근무 가능 시작일 | 9월 20일\n153 희망 근무지 | ☐ 시홀름 ☑ 워리비 ☐ 포트 멜버른\n희망 근무 형태 | ☑ 전임제 ☐ 시간제 ☐ 임시직\n\n학력\n교육 기관 | 취득 수료증/자격증/학위\n사우스 뱅크 고등학교 | 고등학교 졸업장\n154 다이목스 대학교 | 학사 학위\n\n직장 경력\n고용주 | 직책 | 기간\n154 더 가먼트 바안 | 영업 사원 | 2년\n알리오나 마케팅 | 부매니저 | 3년\n\n지원 동기\n154 저는 제 최근 고용주들이 그랬던 것처럼 빠르게 돌아가고 업무량이 많은 근무 환경에서 능력을 잘 발휘합니다. 꽤 바쁜 편인 페이지 터너 서점 또한 그럴 것이라 생각합니다. 또한, 소매 관리 전공 학사 학위가 있으므로 제가 이 직책에 아주 적합하다고 믿습니다.`
                }
            ],
            questions: [
                {
                    id: "v4-p7-t10-q153",
                    questionNo: 153,
                    text: "What is suggested about Page Turner Booksellers?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "It has multiple locations.",
                        "B": "It is near South Bank High School.",
                        "C": "It will open a new store on September 20.",
                        "D": "It currently has only full-time positions available."
                    },
                    correctAnswer: "A",
                    translation: "페이지 터너 서점에 대해 알 수 있는 것은?",
                    explanation: `지원서의 희망 근무지(Preferred location) 항목에 시홀름(Seaholme), 워리비(Werribee), 포트 멜버른(Port Melbourne) 등 세 곳의 지점이 언급되어 있는 것으로 보아 페이지 터너 서점은 여러 곳에 매장을 두고 있음을 알 수 있다. 따라서 (A)가 정답이다.`
                },
                {
                    id: "v4-p7-t10-q154",
                    questionNo: 154,
                    text: "What is NOT indicated about Mr. Rami?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "He studied retail management.",
                        "B": "He recently moved to Werribee.",
                        "C": "He has experience working in sales.",
                        "D": "He prefers working in a busy setting."
                    },
                    correctAnswer: "B",
                    translation: "라미 씨에 대해 언급되지 않은 것은?",
                    explanation: `라미 씨가 소매 관리를 전공했다(with my bachelor's degree in retail management)는 내용은 (A)에 해당하고, 영업 사원으로 근무한 경력(The Garment Barn / Sales associate / 2 years)이 있다는 내용은 (C)에 해당하며, 업무량이 많아 바쁜 환경을 선호한다(I flourish in a fast-paced ~ quite busy)는 내용은 (D)에 해당한다. 워리비에 거주하고 있다는 주소 정보는 있으나 최근에 그곳으로 이사했다는 내용은 없으므로 (B)가 정답이다.`
                }
            ]
        },
        // Questions 155-157: Advertisement
        {
            id: "v4-p7-t10-set5",
            questionRange: "155-157",
            passages: [
                {
                    id: "v4-p7-t10-s5-p1",
                    contextType: "P4",
                    docType: "ADVERTISEMENT",
                    title: "Donovan Auto Lube",
                    content: `Donovan Auto Lube (DAL) is the first choice for residents of Knebworth who want to keep their cars running smoothly. We provide oil changes, tyre rotations, and routine inspections. Our team of certified auto technicians can service all vehicle makes and models. Customers may schedule an appointment or simply drive up to any DAL location during our business hours of 8:00 A.M. to 6:00 P.M., Monday through Saturday, and 11:00 A.M. to 5:00 P.M. on Sunday.\n\nThis summer, DAL offers a special promotion: a 5-quart oil change, oil filter replacement, and comprehensive maintenance check for just £15. This offer is available at all DAL locations throughout Hertfordshire. It may not be combined with any other promotional offer. The quoted price does not include value-added tax and does not cover any additional maintenance, repairs, and parts that a vehicle inspection may call for.\n\nVisit DAL for all your automotive needs.`,
                    translation: `도노반 자동차 윤활유 서비스\n\n도노반 자동차 윤활유 서비스(DAL)는 차가 문제없이 155 잘 굴러가기를 바라는 넵스워스 주민들이 가장 먼저 선택하는 곳입니다. 저희는 오일 교환, 타이어 위치 교환, 그리고 정기 점검 서비스를 제공합니다. 공인 자동차 기술자들로 구성된 저희 팀은 모든 종류와 모델의 차량을 정비할 수 있습니다. 156 고객들은 예약을 하거나 혹은 월요일부터 토요일까지는 오전 8시부터 오후 6시까지, 일요일에는 오전 11시부터 오후 5시까지 영업 시간 동안 어느 지점이든 방문하시면 됩니다.\n\n이번 여름에 DAL에서는 특별 프로모션을 제공합니다. 5쿼트 오일 교환, 157 오일 필터 교체, 그리고 종합 정비 점검 서비스를 단 15파운드에 제공합니다. 이 혜택은 하트퍼드셔 전역의 모든 DAL 지점 이용이 가능합니다. 다른 프로모션 혜택과 중복해서 사용할 수 없습니다. 제시된 가격에는 부가가치세가 포함되어 있지 않으며, 차량 점검 시 필요한 추가 정비, 수리 및 부품 비용은 별도입니다.\n\n자동차와 관련된 모든 것이 필요할 땐 DAL을 방문하세요.`
                }
            ],
            questions: [
                {
                    id: "v4-p7-t10-q155",
                    questionNo: 155,
                    text: "The word \"running\" in paragraph 1, line 2, is closest in meaning to",
                    classification: "P7_VOCABULARY",

                    options: {
                        "A": "flowing",
                        "B": "speeding",
                        "C": "controlling",
                        "D": "functioning"
                    },
                    correctAnswer: "D",
                    translation: "첫 번째 단락 2행의 \"running\"과 의미가 가장 가까운 것은?",
                    explanation: `의미상 차가 문제없이 '굴러간다(작동한다)'는 뜻으로 쓰였으므로 '(기계 등이) 작동하다'라는 뜻의 (D) functioning이 정답이다.`
                },
                {
                    id: "v4-p7-t10-q156",
                    questionNo: 156,
                    text: "When can a customer NOT be served at Donovan Auto Lube?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "On Monday at 8:00 A.M.",
                        "B": "On Wednesday at 6:00 P.M.",
                        "C": "On Saturday at 4:00 P.M.",
                        "D": "On Sunday at 6:00 P.M."
                    },
                    correctAnswer: "D",
                    translation: "도노반 자동차 윤활유 서비스 지점에서 서비스를 받을 수 없는 시간은?",
                    explanation: `첫 번째 단락의 마지막 문장에서 일요일 영업 시간은 오전 11시부터 오후 5시까지(11:00 A.M. to 5:00 P.M. on Sunday)라고 했으므로 일요일 오후 6시에는 서비스를 받을 수 없다. 따라서 (D)가 정답이다.`
                },
                {
                    id: "v4-p7-t10-q157",
                    questionNo: 157,
                    text: "What is true about the promotional offer?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It is not valid outside of Knebworth.",
                        "B": "It includes replacement of a filter.",
                        "C": "It does not apply to a maintenance check.",
                        "D": "It includes all taxes."
                    },
                    correctAnswer: "B",
                    translation: "프로모션 혜택에 대해 사실인 것은?",
                    explanation: `두 번째 단락의 첫 문장에서 특별 프로모션은 오일 교환, 오일 필터 교체, 종합 정비 점검을 포함한다(a 5-quart oil change, oil filter replacement, and comprehensive maintenance check)고 했으므로 (B)가 정답이다.`
                }
            ]
        },
        // Questions 158-160: Biography
        {
            id: "v4-p7-t10-set6",
            questionRange: "158-160",
            passages: [
                {
                    id: "v4-p7-t10-s6-p1",
                    contextType: "P3",
                    docType: "ARTICLE",
                    title: "Kasem Ngam Biography",
                    content: `Kasem Ngam is a renowned speaker and author from Nonthaburi province in Thailand. — [1] —. Immediately upon graduating from Sangsuwan University in Bangkok, he joined Chamborn Gas & Electric (CG&E). Over a period of 25 years, he made a name for himself as one of CG&E's most dedicated and respected employees, even gaining national and international recognition. — [2] —.\n\nMr. Ngam currently runs a consulting firm that he started four years ago to help businesses develop innovative new technologies to power the modern world. — [3] —. He is the author of numerous articles on a variety of topics, including solar panels and hydrogen-powered vehicles. — [4] —. His honors include a Pax Award for his book Biofuels, a popular textbook on biofuels, which has been translated into several languages. His forthcoming book, Pricing Our Power: Funding the New Green Energy, will be published in May.`,
                    translation: `카셈 응암은 태국 논타부리 주 출신의 유명한 연설가이자 작가입니다. — [1] —. 방콕에 있는 상수완 대학교를 졸업하자마자, 158 그는 찬타라 가스&일렉트릭(CG&E)에 입사했습니다. 160 25년의 기간 동안, 그는 CG&E에서 가장 헌신적이고 존경받는 직원 중 한 명으로 명성을 떨쳤고, 심지어 국내외의 인정을 받았습니다. — [2] —.\n\n158, 159 현재 응암 씨는 기업들이 현대 사회에 동력을 제공할 혁신적인 신기술을 개발하는 것을 돕기 위해 4년 전 시작한 컨설팅 회사를 운영하고 있습니다. — [3] —. 그는 태양 전지판, 수소 동력 자동차를 포함해 다양한 주제에 관한 수많은 글의 저자입니다. — [4] —. 그의 영예에는 여러 언어로 번역된 바이오 연료에 관한 그의 저서 <미래의 연료>가 받은 팍스 혁신상이 포함됩니다. 그의 차기 도서 <에너지 가격 책정: 새로운 그린 에너지에 대한 자금 지원>은 5월에 출판될 것입니다.`
                }
            ],
            questions: [
                {
                    id: "v4-p7-t10-q158",
                    questionNo: 158,
                    text: "What industry does Mr. Ngam most likely work in?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "Energy",
                        "B": "Travel",
                        "C": "Finance",
                        "D": "Journalism"
                    },
                    correctAnswer: "A",
                    translation: "응암 씨가 종사할 것 같은 업계는?",
                    explanation: `첫 단락의 두 번째 문장에서 응암 씨가 찬타라 가스&일렉트릭(CG&E)에 입사했다(joined Chanbara Gas & Electric (CG&E))고 했고, 두 번째 단락 첫 문장에서는 현재 기업들이 현대 사회에 동력을 제공할 혁신적인 신기술을 개발하는 것을 돕기 위해 4년 전 시작한 컨설팅 회사를 운영하고 있다(Mr. Ngam currently runs a consulting firm ~ to help businesses develop innovative new technologies to power the modern world)고 했다. 응암 씨가 에너지 회사에서 근무했고, 현재도 에너지 신기술 개발을 돕는 컨설팅 회사를 운영하고 있는 것으로 보아 에너지 분야에 종사하고 있음을 알 수 있으므로 정답은 (A)이다.`
                },
                {
                    id: "v4-p7-t10-q159",
                    questionNo: 159,
                    text: "What is indicated about Mr. Ngam?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "He is writing his first book.",
                        "B": "He knows several languages.",
                        "C": "He operates his own business.",
                        "D": "He is a recent university graduate."
                    },
                    correctAnswer: "C",
                    translation: "응암 씨에 대해 명시된 것은?",
                    explanation: `두 번째 단락 첫 문장에서 현재 응암 씨는 4년 전 시작한 컨설팅 회사를 운영하고 있다(Mr. Ngam currently runs a consulting firm)고 했으므로 (C)가 정답이다.`
                },
                {
                    id: "v4-p7-t10-q160",
                    questionNo: 160,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"The last position he held at the company was director of research and development.\"",
                    classification: "P7_INSERTION",

                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "B",
                    translation: "[1], [2], [3], [4]로 표시된 위치 중 다음 문장이 들어가기에 가장 적절한 곳은?\n\n\"그가 회사에서 마지막으로 맡았던 직책은 연구 개발 이사였습니다.\"",
                    explanation: `제시된 문장은 응암 씨가 회사에서 마지막으로 맡았던 직책을 언급하고 있다. 따라서 응암 씨가 회사(CG&E)에서 25년 동안 근무하며 명성을 쌓았다는 내용 뒤인 [2]의 위치에 들어가는 것이 가장 자연스럽다. 이후 문장부터는 회사를 그만둔 후 컨설팅 회사를 시작한 현재의 이야기가 이어지므로 [2]가 정답이다.`
                }
            ]
        },
        // Questions 161-163: Article
        {
            id: "v4-p7-t10-set7",
            questionRange: "161-163",
            passages: [
                {
                    id: "v4-p7-t10-s7-p1",
                    contextType: "P3",
                    docType: "ARTICLE",
                    title: "Jobs Coming to Willettville",
                    content: `WILLETTVILLE (March 8)—Tanney's Discount Mart (TDM) announced today that it will hold a job fair in Willettville later this month. The company, headquartered in nearby Lyter City, is looking to fill 300 positions at its new distribution center, set to open here next month. In addition to seeking warehouse technicians and supervisors, the company is looking to fill positions in the processing, stock inspection, and maintenance departments.\n\n"TDM's distribution centers use modern automated systems, which creates a big need for qualified technical staff in particular," Kent Siler, TDM's president, said in a press release announcing the job fair.\n\nThe event will be held from 9:30 A.M. to 6:30 P.M. on Thursday, March 20, in the ballroom of the Twin Ridges Hotel. Details can be found by visiting tdm.com/careers.\n\n"This recruiting event will help us find the staff we need to meet the anticipated growth in demand for our products," said Mr. Siler. "TDM continues to expand its position in discount retail. So far this year, we have opened three stores, and we have five more slated to open by the end of next year." Mr. Siler noted, moreover, that TDM offers competitive wages for full-time and part-time employment.`,
                    translation: `윌렛빌에 생기는 일자리\n\n윌렛빌 (3월 8일) — 테니스 할인 마트(TDM)는 이달 말 윌렛빌에서 채용 박람회를 개최할 것이라고 오늘 발표했습니다. 인근 리터 시티에 본사를 둔 이 회사는 161 다음 달 이곳에 문을 열 예정인 새로운 물류 센터에 300개의 일자리를 충원하고자 합니다. 162(A) 기술자와 관리자를 구하는 것 외에도 이 회사는 물류 처리, 재고 검사 및 유지 관리 부서의 일자리를 충원하기를 바랍니다.\n\n"TDM의 물류 센터는 현대적인 자동화 시스템을 사용하여, 이로 인해 특히 자격을 갖춘 기술 직원이 많이 필요합니다."라고 TDM의 사장인 켄트 사일러는 채용 박람회를 발표하는 보도 자료에서 말했습니다.\n\n162(B) 이 행사는 3월 20일 목요일 오전 9시 30분부터 오후 6시 30분까지 트윈 리지스 호텔의 연회장에서 열릴 예정입니다. 162(D) 자세한 내용은 tdm.com/careers를 방문해 확인할 수 있습니다.\n\n"이번 채용 행사는 우리 상품에 대해 예상되는 수요 증가를 맞추기 위해 필요한 직원들을 찾는 데 도움이 될 것입니다."라고 사일러 씨는 말했습니다. 163 "TDM은 할인 소매업에서 입지를 지속적으로 확대하고 있습니다. 올해 지금까지 세 개의 매장을 열었으며 내년 말까지 다섯 개의 매장을 추가로 개점할 계획입니다." 사일러 씨는 또한 TDM이 풀타임 및 파트타임 고용직에 경쟁력 있는 급여를 제공한다고 언급했습니다.`
                }
            ],
            questions: [
                {
                    id: "v4-p7-t10-q161",
                    questionNo: 161,
                    text: "What is stated about TDM's new distribution center?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It is the company's first distribution center to use automated systems.",
                        "B": "It is the largest facility the company has built.",
                        "C": "It is scheduled to open in April.",
                        "D": "It was designed by an architectural firm in Willettville."
                    },
                    correctAnswer: "C",
                    translation: "TDM의 새로운 물류 센터에 대해 언급된 것은?",
                    explanation: `도입부에 기사 작성일이 3월 8일(March 8)로 나와 있는데, 기사 두 번째 문장에서 인근 리터 시티에 본사를 둔 이 회사는 다음 달 이곳에 문을 열 예정인 새로운 물류 센터에 300개의 일자리를 충원하고자 한다(The company, ~ at its new distribution center, set to open here next month)고 했다. 따라서 새로운 물류 센터는 기사가 작성된 3월의 다음 달인 4월에 문을 열 예정이므로 (C)가 정답이다.`
                },
                {
                    id: "v4-p7-t10-q162",
                    questionNo: 162,
                    text: "What is NOT mentioned about the job fair?",
                    classification: "P7_NEGATIVE",

                    options: {
                        "A": "The kinds of jobs offered",
                        "B": "The day and date it will be held",
                        "C": "The types of refreshments served",
                        "D": "The source for detailed information"
                    },
                    correctAnswer: "C",
                    translation: "채용 박람회에 대해 언급되지 않은 것은?",
                    explanation: `첫 단락의 마지막 문장에서 기술자와 관리자를 구하는 것 외에도 이 회사는 처리, 재고 검사 및 유지 관리 부서의 일자리를 충원하기를 바란다고 했으므로 (A), 세 번째 단락의 첫 문장에서 이 행사는 3월 20일 목요일에 열릴 예정(The event will be held ~ on Thursday, March 20)이라고 했으므로 (B), 뒤이어 자세한 내용은 tdm.com/careers를 방문해 확인할 수 있다(Details can be found by visiting tdm.com/careers)고 했으므로 (D)는 기사에 언급되어 있다. 제공되는 다과에 대해서는 언급된 바가 없으므로 (C)가 정답이다.`
                },
                {
                    id: "v4-p7-t10-q163",
                    questionNo: 163,
                    text: "What does Mr. Siler indicate about TDM?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It is a growing business.",
                        "B": "It sponsors an annual job fair.",
                        "C": "It is staffed mostly by part-time workers.",
                        "D": "It relies heavily on online sales."
                    },
                    correctAnswer: "A",
                    translation: "사일러 씨가 TDM에 대해 암시하는 것은?",
                    explanation: `마지막 단락의 두 번째 문장에서 사일러 씨가 TDM은 할인 소매업에서 입지를 지속적으로 확대하고 있고(TDM continues to expand its position in discount retail) 올해 지금까지 세 개의 매장을 열었으며 내년 말까지 다섯 개의 매장을 추가로 개점할 계획(So far this year, we have opened three stores, and we have five more slated to open by the end of next year)이라고 언급했으므로 정답은 (A)이다.`
                }
            ]
        },
        // Questions 164-167: Online Chat
        {
            id: "v4-p7-t10-set8",
            questionRange: "164-167",
            passages: [
                {
                    id: "v4-p7-t10-s8-p1",
                    contextType: "P7",
                    docType: "CHAT_MESSAGE",
                    title: "Online Chat",
                    content: `Lathan Little [5:40 P.M.]\nHello Aranda and Desmond, 164 I learned earlier today that the town has hired our company to demolish the lighthouse.\n\nAranda Richards [5:43 P.M.]\nI have mixed feelings about taking down that structure, but I realize the town's reasoning.\n\nDesmond Williams [5:43 P.M.]\nI'm just hearing about this now. I was absent from the office all day today.\n\nLathan Little [5:44 P.M.]\nWhy is that, Aranda?\n\nAranda Richards [5:46 P.M.]\n165 Well, given that business has been quite slow lately, our company needs the work, but 166 that lighthouse has historic value: it has been a major landmark of Burlingate for 100 years.\n\nLathan Little [5:48 P.M.]\n166 I realize that. But for the reasons provided by the city, our company can't afford to pass up this opportunity. Besides, the lighthouse is largely outdated.\n\nDesmond Williams [5:49 P.M.]\nNot necessarily. Ships always need warnings about hazardous areas. The lighthouse has served that function for a long time.\n\nLathan Little [5:51 P.M.]\nThat's true, but modern technological advances exist that simplify navigation and make the lighthouse increasingly a relic of the past. Anyway, 167 let's meet tomorrow at 10:00 A.M. to discuss how we'll carry out this job.`,
                    translation: `라탄 리틀 [오후 5:40] 안녕하세요, 아란다 그리고 데스먼드, 164 오늘 아침 시에서 등대를 철거하기 위해 우리 회사를 고용했다는 것을 알았습니다.\n\n아란다 리처즈 [오후 5:43] 저도요, 그렇지만 그 구조물을 철거하는 데 대해 여러 감정이 드네요.\n\n데스먼드 윌리엄스 [오후 5:43] 저는 그 일에 대해 지금 처음 들었습니다. 오늘 하루 종일 사무실을 비웠거든요.\n\n라탄 리틀 [오후 5:44] 아란다, 어째서 그런가요?\n\n아란다 리처즈 [오후 5:46] 165 최근 들어 사업이 상당히 부진한 것을 고려하면 우리 회사는 이 일을 해야 해요, 그렇긴 한데 166 이 등대는 100년 동안 벌링게이트의 주요 랜드마크였다는 역사적인 가치가 있습니다.\n\n라탄 리틀 [오후 5:48] 166 알고 있습니다. 그렇지만 말씀하신 이유로 회사에서 이 기회를 놓칠 여유는 없습니다. 게다가 등대는 대체로 구식이 되었습니다.\n\n데스먼드 윌리엄스 [오후 5:49] 꼭 그런 것은 아니에요. 선박들은 항상 위험한 곳에 대한 경고를 받아야 합니다. 등대는 오랫동안 그 기능을 수행해 왔습니다.\n\n라탄 리틀 [오후 5:51] 맞는 말이지만 지금은 항해를 단순화하고 등대를 점점 과거의 유물로 만드는 현대 기술 장치가 존재합니다. 어쨌든 167 내일 오전 10시에 만나서 이 일을 어떻게 진행할 것인지 논의합시다.`
                }
            ],
            questions: [
                {
                    id: "v4-p7-t10-q164",
                    questionNo: 164,
                    text: "In what industry do the chat participants most likely work?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "Building construction",
                        "B": "Marine technology",
                        "C": "Corporate accounting",
                        "D": "Historic preservation"
                    },
                    correctAnswer: "A",
                    translation: "채팅 작성자들이 근무할 것 같은 업종은?",
                    explanation: `5시 40분에 리틀 씨가 오늘 아침 시에서 등대를 철거하기 위해 회사를 고용했다는 것을 알았다(Earlier today I learned that the town has hired our company to demolish the lighthouse)고 한 것으로 보아 채팅 작성자들이 철거 회사에서 근무하고 있다는 것을 알 수 있으므로 (A)가 정답이다.`
                },
                {
                    id: "v4-p7-t10-q165",
                    questionNo: 165,
                    text: "What is indicated about the company the chat participants work for?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It recently purchased ultramodern equipment.",
                        "B": "It has experienced a decline in business.",
                        "C": "It is hired regularly by the city council.",
                        "D": "It has been in business for 100 years."
                    },
                    correctAnswer: "B",
                    translation: "채팅 작성자들이 근무하는 회사에 대해 명시된 것은?",
                    explanation: `5시 46분에 리처즈 씨가 최근 들어 사업이 상당히 부진한 것을 고려하면 회사는 이 일을 해야 한다(given that business has been quite slow lately, our company needs the work)고 했으므로 회사의 사업이 최근 하락세임을 알 수 있다. 따라서 (B)가 정답이다.`
                },
                {
                    id: "v4-p7-t10-q166",
                    questionNo: 166,
                    text: "At 5:48 P.M., what does Mr. Little most likely mean when he writes, \"I realize that\"?",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "He knows why Mr. Williams was absent.",
                        "B": "He recognizes the significance of the lighthouse for the town.",
                        "C": "He understands how much the city is paying.",
                        "D": "He knows that Ms. Richards is an expert in city history."
                    },
                    correctAnswer: "B",
                    translation: "오후 5시 48분에 리틀 씨가 \"알고 있습니다\"라고 쓴 의도는?",
                    explanation: `5시 46분에 리처즈 씨가 이 등대는 100년 동안 벌링게이트의 주요 랜드마크였다는 역사적인 가치가 있다(the lighthouse has historic value: it has been a major landmark of Burlingate for 100 years)고 하자 5시 48분에 리틀 씨가 알고 있다(I realize that)고 대답했다. 따라서 리틀 씨는 시에서 등대가 차지하는 의미에 대해 인식하고 있음을 전하려는 의도로 한 말임을 알 수 있으므로 (B)가 정답이다.`
                },
                {
                    id: "v4-p7-t10-q167",
                    questionNo: 167,
                    text: "What will the chat participants likely do tomorrow morning?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Advertise a new project",
                        "B": "Attend a city council meeting",
                        "C": "Tour a lighthouse",
                        "D": "Start planning for an upcoming project"
                    },
                    correctAnswer: "D",
                    translation: "채팅 작성자들은 내일 오전에 무엇을 할 것 같은가?",
                    explanation: `5시 51분에 리틀 씨가 내일 오전 10시에 만나서 이 일을 어떻게 진행할 것인지 논의하자(let's meet tomorrow at 10:00 A.M. to discuss how we'll carry out this job)고 했으므로 정답은 (D)이다.`
                }
            ]
        },
        // Questions 168-171: Brochure
        {
            id: "v4-p7-t10-set9",
            questionRange: "168-171",
            passages: [
                {
                    id: "v4-p7-t10-s9-p1",
                    contextType: "P3",
                    docType: "ARTICLE",
                    title: "Contempo Spaces\nWindow Treatment Package",
                    content: `If you are considering redecorating the windows of your living room, dining room, or bedroom, Contempo Spaces has the perfect treatment design package for you. — [1] —. We will help you put together the right combination of shades, panels, drapes, and valances—all perfectly tailored to fit your windows.\n\nHere's how it works:\n\n• First, one of our style representatives will come to your home and measure and photograph your windows in each room.\n\n• During that visit, our representative will show you samples of the many styles of fabrics and finishes available in our product line. — [2] —. Or, you can opt to visit our showroom after the home visit and make your selections there.\n\n• 169 One or two days after you've made your window treatment decisions, we will send you an invoice, listing the cost for materials, installation, and labor. 169 The quoted price is valid for thirty days. Upon receipt of payment, materials will be ordered. It usually takes from seven to fourteen days to reach our store. — [3] —.\n\n• Finally, we will contact you to schedule the date and time of installation. — [4] —. 170 Depending on the size of the project, installation can take two to eight hours.`,
                    translation: `컨템포 스페이시스\n창문 처리 패키지\n\n거실, 다이닝 공간 또는 침실의 창문을 새로 장식하는 것을 고려하고 계시다면, 컨템포 스페이시스가 귀하를 위한 완벽한 처리 디자인 패키지를 가지고 있습니다. — [1] —. 귀하의 창문에 맞춰 완벽하게 맞춤 제작되는 셰이드, 패널, 커튼, 밸런스의 적절한 조합 구성을 도와드립니다.\n\n168 진행 방식은 다음과 같습니다:\n\n• 먼저 저희 스타일 담당자 한 명이 고객님 댁을 방문하여 각 방의 창문을 측정하고 사진을 찍습니다.\n\n• 방문하는 동안 171 담당자가 저희 제품 라인에서 이용할 수 있는 다양한 스타일의 직물 및 금속 부속품 샘플을 보여드립니다. — [2] —. 또는 가정 방문 후 저희 쇼룸에 오셔서 제품을 선택하실 수 있습니다.\n\n• 169 창문 처리를 결정하시고 1~2일 후에 자재, 설치 및 인건비가 기재된 청구서를 보내 드립니다. 견적 가격은 30일간 유효합니다. 대금을 받는 즉시 자재가 발주됩니다. 자재가 저희 매장에 도착하는 데는 보통 7일에서 14일이 걸립니다. — [3] —.\n\n• 마지막으로 설치 날짜와 시간을 잡기 위해 저희가 연락을 드립니다. — [4] —. 170 작업 규모에 따라 설치하는 데 두 시간에서 여덟 시간이 걸릴 수 있습니다.`
                }
            ],
            questions: [
                {
                    id: "v4-p7-t10-q168",
                    questionNo: 168,
                    text: "What is the purpose of the brochure?",
                    classification: "P7_PURPOSE",

                    options: {
                        "A": "To explain a new policy",
                        "B": "To describe a popular product",
                        "C": "To advertise a special discount",
                        "D": "To present a standard process"
                    },
                    correctAnswer: "D",
                    translation: "안내 책자의 목적은?",
                    explanation: `두 번째 단락에서 '진행 방식은 다음과 같다(Here's how it works)'라고 한 뒤, 아래에서 창문 측정, 제품 선택, 대금 결제, 설치 등 진행 방식에 대해 순서대로 설명하고 있다. 따라서 안내 책자의 글은 업체의 서비스가 이루어지는 기본 절차를 설명하기 위한 것이므로 (D)가 정답이다.`
                },
                {
                    id: "v4-p7-t10-q169",
                    questionNo: 169,
                    text: "After how many days might the total cost listed in an invoice change?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Two",
                        "B": "Seven",
                        "C": "Fourteen",
                        "D": "Thirty"
                    },
                    correctAnswer: "D",
                    translation: "청구서에 기재된 총비용은 며칠 뒤에 변경될 수도 있는가?",
                    explanation: `진행 방식을 설명하는 세 번째 항목의 첫 문장에서 창문 처리를 결정하고 1~2일 후에 자재, 설치 및 인건비가 기재된 청구서를 보낸다(One or two days after you've made your window treatment decisions, we will send you an invoice ~ and labor)고 했고, 견적 가격은 30일간 유효하다(The quoted price is valid for thirty days)고 했다. 따라서 청구서에 기재된 견적 비용은 30일이 지나면 변경될 수 있으므로 (D)가 정답이다.`
                },
                {
                    id: "v4-p7-t10-q170",
                    questionNo: 170,
                    text: "What is indicated in the brochure about installation?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It is not available for all window treatments.",
                        "B": "It is the responsibility of the customer.",
                        "C": "It takes no more than eight hours to complete.",
                        "D": "It is subcontracted to an outside vendor."
                    },
                    correctAnswer: "C",
                    translation: "안내 책자에 설치에 관해 암시된 것은?",
                    explanation: `진행 방식을 설명하는 마지막 항목의 마지막 문장에서 작업 규모에 따라 설치하는 데 두 시간에서 여덟 시간이 걸릴 수 있다(Depending on the size of the project, installation can take two to eight hours)고 했으므로 설치를 완료하는 데 8시간은 넘지 않는다는 것을 알 수 있다. 따라서 (C)가 정답이다.`
                },
                {
                    id: "v4-p7-t10-q171",
                    questionNo: 171,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"Our entire style collection can be viewed on our Web site.\"",
                    classification: "P7_INSERTION",

                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "B",
                    translation: "[1], [2], [3], [4]로 표시된 위치 중에서 다음 문장이 들어가기에 가장 적절한 곳은?",
                    explanation: `주어진 문장에서 '당사의 전체 스타일 컬렉션은 웹사이트에서 보실 수 있습니다(Our entire style collection can be viewed on our Web site.)'라고 했으므로, 앞에는 일부 스타일에 대해 확인하는 것과 관련한 내용이 와야 적절하다. [2] 앞에서 고객의 집을 방문한 담당자가 다양한 스타일의 직물 및 금속 부속품 샘플을 보여 준다(our representative will show you samples of the many styles ~ in our product line)고 했으므로, 그 뒤에 주어진 문장이 들어가는 것이 글의 흐름상 자연스럽다. 따라서 (B)가 정답이다.`
                }
            ]
        },
        // Questions 172-175: E-mail
        {
            id: "v4-p7-t10-set10",
            questionRange: "172-175",
            passages: [
                {
                    id: "v4-p7-t10-s10-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    title: "EMAIL",
                    content: `To: Morgan Tebele <mtebele@newsom.com.na>\nFrom: Esme Mukaya <emukaya@skyleopard.com.na>\nDate: 21 August\nSubject: Offer\n\nDear Mr. Tebele,\n\n172 Whether you are refinancing a loan, training personnel, or marketing your financial services to other businesses, fast Internet access is essential for bank managers like you. Sky Leopard Communications delivers just that, thanks to its highly advanced pool of technicians and dedicated workforce.\n\nIn fact, 173 a recent survey conducted by the Namibian Association of Small-Business Owners (NASO) revealed that 75 percent of its members prefer our services over those of our competitors.\n\nThe reason: in addition to our state-of-the-art Internet infrastructure and our 174 outstanding pool of technicians, we offer the convenience of Internet connectivity through our High-Velocity Internet Access (HIVIA) service plan. HIVIA provides download and upload speeds that are three times faster than those of our closest competitor.\n\n175 Sky Leopard Communications offers new customers and those using one of our other plans the opportunity to try HIVIA for free for 30 days. To subscribe, visit us at www.skyleopard.com.na or call us at 061-987-555. 175 If at any time during the one-month trial period you are not satisfied with this plan, you can unsubscribe from the service at no cost to you.\n\nSincerely,\n\nEsme Mukaya, Sales`,
                    translation: `수신: 모건 테벨레 <mtebele@newsom.com.na>\n발신: 에스메 무카야 <emukaya@skyleopard.com.na>\n날짜: 8월 21일\n제목: 제안\n\n테벨레 씨께,\n\n172 대출을 재융자하든, 직원을 교육하든, 금융 서비스를 온라인으로 마케팅하든, 빠르고 믿을 수 있는 인터넷 이용은 고객님과 같은 은행 관리자에게 필수적입니다. 스카이 레오파드 커뮤니케이션즈는 고도로 발전된 네트워크와 헌신적인 인력 덕분에 바로 그것을 제공해 드립니다.\n\n실제로, 173 나미비아 소상공인 협회(NASO)가 실시한 최근 설문 조사에 따르면 회원의 75퍼센트가 경쟁사의 서비스보다 저희 서비스를 선호한다고 합니다.\n\n그 이유는 최첨단 인터넷 기반 시설과 174 뛰어난 기술자 인력 외에도 고속 인터넷 연결(HIVIA) 서비스 요금제를 통해 프리미엄 인터넷 연결을 제공하기 때문입니다. HIVIA는 가장 근접한 경쟁사보다 3배 더 빠른 다운로드 및 업로드 속도를 제공합니다.\n\n175 스카이 레오파드 커뮤니케이션즈는 신규 고객 및 당사의 다른 서비스 요금제 중 하나를 사용 중인 고객들에게 30일 동안 무료로 HIVIA를 사용할 수 있는 기회를 제공합니다. 가입하시려면 www.skyleopard.com.na를 방문하시거나 061-987-555로 전화 주십시오. 175 한 달간의 체험 기간 동안 이 요금제에 만족하지 않으실 경우 언제든지 무료로 서비스 가입을 취소하실 수 있습니다.\n\n에스메 무카야, 영업부`
                }
            ],
            questions: [
                {
                    id: "v4-p7-t10-q172",
                    questionNo: 172,
                    text: "What industry does Mr. Tebele most likely work in?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "Web design",
                        "B": "Hospitality",
                        "C": "Marketing",
                        "D": "Banking"
                    },
                    correctAnswer: "D",
                    translation: "테벨레 씨가 종사할 것 같은 업종은?",
                    explanation: `첫 단락의 첫 번째 문장에서 테벨레 씨에게 대출을 재융자하든, 직원을 교육하든, 금융 서비스를 온라인으로 마케팅하든, 빠르고 믿을 수 있는 인터넷 이용은 테벨레 씨와 같은 은행 관리자에게 필수적(Whether you are refinancing a loan, training personnel ~ is essential for bank managers like you)이라고 한 것으로 보아 테벨레 씨는 은행 관리자로 근무하고 있음을 알 수 있다. 따라서 (D)가 정답이다.`
                },
                {
                    id: "v4-p7-t10-q173",
                    questionNo: 173,
                    text: "What is stated about Sky Leopard Communications?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It offers discounts to NASO members.",
                        "B": "It is popular with small-business owners.",
                        "C": "It recently launched a new service plan.",
                        "D": "It is looking to increase its workforce."
                    },
                    correctAnswer: "B",
                    translation: "스카이 레오파드 커뮤니케이션즈에 대해 명시된 것은?",
                    explanation: `두 번째 단락에서 나미비아 소상공인 협회(NASO)가 실시한 최근 설문 조사에 따르면 회원의 75퍼센트가 경쟁사의 서비스보다 자사의 서비스를 선호한다(a recent survey conducted by the Namibian Association of Small-Business Owners (NASO) revealed that 75 percent of its members prefer our services over those of our competitors)고 했으므로 스카이 레오파드 커뮤니케이션즈는 소상공인들에게 인기가 있다는 것을 확인할 수 있다. 따라서 (B)가 정답이다.`
                },
                {
                    id: "v4-p7-t10-q174",
                    questionNo: 174,
                    text: "The word \"outstanding\" in paragraph 3, line 1, is closest in meaning to",
                    classification: "P7_VOCABULARY",

                    options: {
                        "A": "various",
                        "B": "available",
                        "C": "excellent",
                        "D": "remaining"
                    },
                    correctAnswer: "C",
                    translation: "세 번째 단락 1행의 \"outstanding\"과 의미가 가장 가까운 단어는?",
                    explanation: `의미상 '뛰어난' 기술자들이라는 뜻으로 쓰인 것이므로 정답은 '훌륭한, 탁월한'을 뜻하는 (C) excellent이다.`
                },
                {
                    id: "v4-p7-t10-q175",
                    questionNo: 175,
                    text: "What is true about the HIVIA service plan?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It costs more than other plans.",
                        "B": "It was created after a customer survey.",
                        "C": "It requires the purchase of special equipment.",
                        "D": "It can be canceled for free within the first month."
                    },
                    correctAnswer: "D",
                    translation: "HIVIA 서비스 요금제에 대해 알 수 있는 것은?",
                    explanation: `네 번째 단락의 첫 문장에서 스카이 레오파드 커뮤니케이션즈는 신규 고객 및 당사의 다른 서비스 요금제 중 하나를 사용 중인 고객들에게 30일 동안 무료로 HIVIA를 사용할 수 있는 기회를 제공한다(Sky Leopard Communications offers ~ the opportunity to try HIVIA for free for 30 days)고 했고, 마지막 문장에서 한 달간의 체험 기간 동안 이 요금제에 만족하지 않을 경우 언제든지 무료로 서비스 가입을 취소할 수 있다(at any time during the one-month trial period ~ you can unsubscribe from the service at no cost to you)고 했다. 따라서 HIVIA 서비스 요금제는 한 달간의 무료 체험 중 언제든 취소할 수 있으므로 (D)가 정답이다.`
                }
            ]
        }
    ]
};
