import { Part7Test } from './types';
export const test8Data: Part7Test = {
    testId: 8,
    title: "Test 8",
    sets: [
        // Questions 147-148: Advertisement
        {
            id: "p7-t8-set1",
            questionRange: "147-148",
            passages: [
                {
                    id: "p7-t8-s1-p1",
                    contextType: "P4",
                    docType: "ADVERTISEMENT",
                    title: "Zoya's Basket",
                    content: `Zoya's Basket\n12 Tilton Street, Tenafly, NJ 07670\nwww.zoyasbasket.com\n\nDo you love all the products at Zoya's Basket? Here's a reason to love them even more! Sign up for our reward program and get up to 5% back on everything Zoya's offers! Use your cash rewards in the store or online.\n\n• Vitamins and supplements\n• Nut and seed butters\n• Jams, jellies, and fruit spreads\n• Whole grains and cereals\n• Health and wellness products\n\nWe ship throughout New Jersey. Shipping is free with a minimum $35 purchase. Please allow up to three days for delivery.`,
                    translation: `조이스 바스켓\n뉴저지주 테나플라이 틸튼 가 12, 07670\nwww.zoyasbasket.com\n\n조이스 바스켓의 모든 제품이 마음에 드시나요? 여기 그것들이 더 마음에 들게 될 이유가 있습니다! 저희 보상 프로그램에 가입하시고 조야가 제공하는 모든 제품에 최대 5퍼센트를 돌려받으세요! 현금 보상 포인트를 매장이나 온라인에서 사용하세요.\n\n• 비타민 및 보충제\n• 견과 및 씨앗 버터\n• 잼, 젤리 및 과일 스프레드\n• 통곡물 및 시리얼\n• 건강 및 건강 관리 제품\n\n저희는 뉴저지 전역에 배송합니다. 배송비는 최소 35달러 구매 시 무료입니다. 배송에는 최대 3일이 걸릴 수 있습니다.`
                }
                    ],
            questions: [
                {
                    id: "p7-t8-q147",
                    questionNo: 147,
                    text: "What is the purpose of the advertisement?",
                    classification: "P7_PURPOSE",

                    options: {
                        "A": "To announce a sale on discontinued products",
                        "B": "To ask consumers for feedback on their favorite items",
                        "C": "To encourage consumers to join a reward program",
                        "D": "To advertise a special offer on fresh fruits and vegetables"
                    },
                    correctAnswer: "C",
                    translation: "광고의 목적은?",
                    explanation: `첫 단략의 세 번째 문장에서 조야의 고객들에게 보상 프로그램에 가입하고 조야의 모든 제품에 최대 5퍼센트를 돌려받으라(Sign up for our reward program and get up to 5% on everything Zoya's offers)고 권유하고 있으므로 (C)가 정답입니다.`
                },
                {
                    id: "p7-t8-q148",
                    questionNo: 148,
                    text: "What is indicated about deliveries?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "A signature is required.",
                        "B": "They arrive within three days.",
                        "C": "They are free with a coupon code.",
                        "D": "They must be scheduled at the time the order is placed."
                    },
                    correctAnswer: "B",
                    translation: "배송에 대해 명시된 것은?",
                    explanation: `마지막 문장에서 배송에는 최대 3일이 걸릴 수 있다(Please allow up to three days for delivery)고 했으므로 (B)가 정답입니다.`
                }
                    ]
        },
        // Questions 149-150: Advertisement
        {
            id: "p7-t8-set2",
            questionRange: "149-150",
            passages: [
                {
                    id: "p7-t8-s2-p1",
                    contextType: "P4",
                    docType: "ADVERTISEMENT",
                    title: "Grecian Terrace Hotel",
                    content: `Grecian Terrace Hotel\n\nHost your next business conference at our five-star hotel on the beautiful Messenian Gulf. Our facility has spacious meeting rooms overlooking the sea and the picturesque beach. The hotel is the perfect setting for a corporate retreat for your staff. Enjoy a team bonding experience while taking advantage of gourmet meals, great views, and first-rate entertainment.\n\nContact: Helena Samaras, Hotel Manager\nhsamaras@grecianterrace.com.gr\n+30 2721 093365`,
                    translation: `그레션 테라스 호텔\n\n아름다운 메세니안 만에 위치한 5성급 호텔에서 다음 비즈니스 컨퍼런스를 개최하십시오. 저희 시설은 바다와 그림 같은 해변이 내려다보이는 넓은 회의실을 갖추고 있습니다. 저희 호텔은 귀하의 직원을 위한 회사 야유회에 완벽한 장소입니다. 고급 식사, 멋진 전망, 최고의 엔터테인먼트를 이용하면서 팀의 유대를 쌓는 경험을 즐기십시오.\n\n연락처: 헬레나 사마라스, 호텔 매니저\nhsamaras@grecianterrace.com.gr\n+30 2721 093365`
                }
                    ],
            questions: [
                {
                    id: "p7-t8-q149",
                    questionNo: 149,
                    text: "For whom is the advertisement most likely intended?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "Residents of Kalamata",
                        "B": "Overseas visitors on holiday",
                        "C": "Corporate travel planners",
                        "D": "Local catering companies"
                    },
                    correctAnswer: "C",
                    translation: "광고는 누구를 대상으로 하는 것 같은가?",
                    explanation: `첫 문장에서 아름다운 메세니안 만에 위치한 5성급 호텔에서 다음 비즈니스 컨퍼런스를 개최하라(Host your next business conference at our five-star hotel on the beautiful Messenian Gulf)고 했고, 세 번째 문장에서 해당 호텔은 직원을 위한 회사 야유회에 완벽한 장소(The hotel is the perfect setting for a corporate retreat for your staff)라고 한 것으로 보아 기업 행사를 기획하는 사람을 대상으로 하는 광고임을 알 수 있다. 따라서 (C)가 정답이다.`
                },
                {
                    id: "p7-t8-q150",
                    questionNo: 150,
                    text: "What is indicated about the Grecian Terrace Hotel?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It recently renovated its dining room.",
                        "B": "It is under new management.",
                        "C": "It has several locations.",
                        "D": "It is near the seaside."
                    },
                    correctAnswer: "D",
                    translation: "그레션 테라스 호텔에 대해 암시된 것은?",
                    explanation: `두 번째 문장에서 시설은 바다와 그림 같은 해변이 내려다보이는 넓은 회의실을 갖추고 있다(Our facility has spacious meeting rooms overlooking the sea and the picturesque beach)고 했으므로 호텔이 해변과 가까이 있음을 알 수 있다. 따라서 (D)가 정답이다.`
                }
                    ]
        },
        // Questions 151-152: Report
        {
            id: "p7-t8-set3",
            questionRange: "151-152",
            passages: [
                {
                    id: "p7-t8-s3-p1",
                    contextType: "P2",
                    docType: "INFORMATION",
                    title: "Cozilete Slippers\nSocial Media Report for December",
                    content: `Metric | Results\nNumber of posts this month | 8\nAverage number of times each post was viewed | 223,648\nAverage number of individuals who viewed each post | 87,122\nAverage number of advertisements for Cozilete Slippers per post | 1\nAverage number of times a link to an advertisement in a post was clicked | 24,015\nAverage total interactions per post (likes, shares, and comments) | 674\n\nData for corporate internal use only`,
                    translation: `코질레 슬리퍼스\n12월 소설 미디어 보고서\n\n측정 기준 | 결과\n이달 게시글 수 | 8\n각 게시글당 평균 조회 수 | 223,648\n각 게시글을 본 평균 개인 수 | 87,122\n게시글당 코질레 슬리퍼스의 평균 광고 수 | 1\n게시글의 광고 링크가 클릭된 평균 횟수 | 24,015\n게시글당 평균 총 반응(좋아요, 공유 및 댓글 수) | 674\n\n기업 내부 전용 데이터`
                }
                    ],
            questions: [
                {
                    id: "p7-t8-q151",
                    questionNo: 151,
                    text: "For whom is the report most likely intended?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "Cozilete Slippers' suppliers",
                        "B": "Cozilete Slippers' marketing team",
                        "C": "Cozilete Slippers' shipping department",
                        "D": "Cozilete Slippers' most loyal customers"
                    },
                    correctAnswer: "B",
                    translation: "보고서는 누구를 대상으로 하는 것 같은가?",
                    explanation: `보고서의 제목이 '코질레 슬리퍼스(Cozilete Slippers) 12월 소셜 미디어 보고서(Social Media Report for December)'이고 표의 측정 기준 내 번째, 다섯 번째 칸에 각각 평균 광고 수(Average number of advertisements)와 게시글의 광고 링크가 클릭된 평균 횟수(Average number ~ clicked)라고 광고 관련 정보가 나와 있으며, 보고서 하단에 '기업 내부 전용 데이터(Data for corporate internal use only)'라고 명시되어 있으므로 회사 외부와는 공유할 수 없는 마케팅 관련 보고서임을 알 수 있다. 따라서 (B)가 정답이다.`
                },
                {
                    id: "p7-t8-q152",
                    questionNo: 152,
                    text: "What is indicated in the report?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Every post contained more than one advertisement for Cozilete Slippers.",
                        "B": "Most individuals commented on each post they viewed.",
                        "C": "Each post was viewed by an average of about 87,000 individuals.",
                        "D": "Few individuals viewed a post more than one time."
                    },
                    correctAnswer: "C",
                    translation: "보고서에 명시된 것은?",
                    explanation: `표의 세 번째 칸에 '각 게시글을 본 평균 개인 수(Average number of individuals who viewed each post)'가 87,122명이라고 나와 있으므로 (C)가 정답이다. [게시글당 코질레 슬리퍼스의 평균 광고 수가 10이므로 (A), 각 게시글을 본 평균 사랑 수는 87,122명인데 게시글당 평균 총 반응은 674회이므로 (B), 각 게시글을 본 평균 개인 수는 87,122명인데 게시글당 평균 조회 수는 223,648회이므로 (D)는 오답이다.]`
                }
                    ]
        },
        // Questions 153-154: Online Chat
        {
            id: "p7-t8-set4",
            questionRange: "153-154",
            passages: [
                {
                    id: "p7-t8-s4-p1",
                    contextType: "P7",
                    docType: "CHAT_MESSAGE",
                    title: "Online Chat",
                    content: `Keri Mohan [12:40 P.M.]\nI'm nearly done readying the jewelry orders for shipment. I've inserted a packing slip and business card in each box. Should anything else be included before I seal them up and drop them off at the post office?\n\nSujay Rishi [12:42 P.M.]\nCan you put a Rishi Gemstones magnet in each box?\n\nKeri Mohan [12:43 P.M.]\nCertainly! I'll do that right away.\n\nKeri Mohan [12:50 P.M.]\nOh no, we're running low on shipping labels. I can order some more.\n\nSujay Rishi [12:54 P.M.]\nActually, we have an entire bin of them. Check the supply closet. Let me know if you can't find them.`,
                    translation: `케리 모한 [오후 12:40] 보석 주문의 배송 준비 작업을 거의 끝냈습니다. 각 상자에 포장 전표와 명함을 넣었습니다. 밀봉해서 우체국에 가져가기 전에 포함해야 할 것이 또 있나요?\n\n수제이 리시 [오후 12:42] 각 상자에 리시 젬스톤즈 자석을 넣어 주시겠어요?\n\n케리 모한 [오후 12:43] 물론이죠! 지금 바로 하겠습니다.\n\n케리 모한 [오후 12:50] 아, 배송 라벨이 모자라네요. 제가 좀 더 주문하겠습니다.\n\n수제이 리시 [오후 12:54] 사실, 통째로 한 통 있어요. 비품 창고를 확인해 보세요. 못 찾으면 알려 주세요.`
                }
                    ],
            questions: [
                {
                    id: "p7-t8-q153",
                    questionNo: 153,
                    text: "What does Ms. Mohan inquire about?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Items to include in some boxes",
                        "B": "When an order will be shipped",
                        "C": "How to safely package the jewelry",
                        "D": "Where the business cards are stored"
                    },
                    correctAnswer: "A",
                    translation: "모한 씨가 문의하는 것은?",
                    explanation: `12시 40분에 모한 씨가 각 상자에 포장 전표와 명함을 넣었다(I've inserted a packing slip and business card in each box)면서 밀봉해서 우체국에 가져가기 전에 포함시켜야 할 것이 또 있는지(Should anything else be included before I seal them up ~ at the post office)를 묻고 있으므로 (A)가 정답입니다.`
                },
                {
                    id: "p7-t8-q154",
                    questionNo: 154,
                    text: "At 12:54 P.M., what does Mr. Rishi most likely mean when he writes, \"Actually, we have an entire bin of them\"?",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "Ms. Mohan can distribute the magnets.",
                        "B": "Ms. Mohan can reorganize the supply closet.",
                        "C": "Ms. Mohan should not order more labels.",
                        "D": "Ms. Mohan should not go to the post office."
                    },
                    correctAnswer: "C",
                    translation: "오후 12시 54분에 리시 씨가 \"사실, 통째로 한 통 있어요\"라고 쓴 의도는?",
                    explanation: `12시 50분에 모한 씨가 배송 라벨이 모자라다(we're running low on shipping labels)면서 좀 더 주문하겠다(I can order some more)고 하자, 12시 54분에 리시 씨가 사실 통째로 한 통 있다(Actually, we have an entire bin of them)고 대답하며 비품 창고를 확인해 보라고 했다. 따라서 리시 씨는 비품 창고에 라벨이 충분히 있으니 주문을 할 필요가 없다는 의도로 한 말임을 알 수 있다. 따라서 (C)가 정답이다.`
                }
                    ]
        },
        // Questions 155-157: Notice
        {
            id: "p7-t8-set5",
            questionRange: "155-157",
            passages: [
                {
                    id: "p7-t8-s5-p1",
                    contextType: "P2",
                    docType: "NOTICE",
                    title: "Notice",
                    content: `Twin Lakes\nThe best place to live in Tielersburg!\n\nPlease join the staff of Twin Lakes for our monthly resident information meeting.\n\nDate and time: Tuesday, March 21, 7:00 P.M.–8:30 P.M.\nLocation: Community Center conference room (across the hall from the rental office)\n\nAgenda items and presenters:\n1. Property enhancements: overview of plans for fence repair and new landscaping in the pool area—Mr. Abgarian, groundskeeping and maintenance supervisor\n2. Community garden: details for garden plot sign-up and annual biggest tomato contest—Ms. Kantor, events and activities coordinator\n3. Water main work on Huron Street: progress update—Mr. Carter, Department of Public Works, City of Tielersburg\n4. Utility rates: discussion about the rise in quarterly utility fees charged to Twin Lakes property management by the city—Mr. Underwood, general manager\n5. New business: creation of Resident Advisory Board—Ms. Davis, leasing and resident relations manager\n6. Questions and comments\n7. Adjournment`,
                    translation: `트윈 레이크스\n틸러스버그에서 가장 살기 좋은 장소!\n\n월간 주민 정보 회의에 트윈 레이크스 직원들과 함께해 주세요.\n\n일시: 3월 21일 화요일 오후 7시 ~ 8시 30분\n장소: 주민센터 회의실 (임대 사무소 맞은편)\n\n안건 및 발표자:\n1. 부지 개선: 울타리 보수 및 수영장 구역의 새로운 조경 계획에 대한 개요 - 압가리안 씨, 부지 관리 및 유지 감독관\n2. 공동체 정원: 정원 부지 계약 및 연례 최대 토마토 콘테스트에 대한 세부 정보 - 칸터 씨, 행사 및 활동 전담 담당자\n3. 휴론 가의 수도관 공사: 진행 상황 업데이트 - 카터 씨, 틸러스버그 시 공공사업부\n4. 공과금: 시에서 트윈 레이크스 부지 관리에 부과하는 분기별 공과금 인상에 대한 논의 - 언더우드 씨, 총괄 관리자\n5. 신규 사업: 주민 자문 위원회 신설 - 데이비스 씨, 임대 및 주민 관계 관리자\n6. 질문 및 의견\n7. 휴회`
                }
                    ],
            questions: [
                {
                    id: "p7-t8-q155",
                    questionNo: 155,
                    text: "What most likely is Twin Lakes?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "A shopping mall",
                        "B": "A garden center",
                        "C": "An amusement park",
                        "D": "A housing complex"
                    },
                    correctAnswer: "D",
                    translation: "트윈 레이크스는 무엇일 것 같은가?",
                    explanation: `제목에 트윈 레이크스(Twin Lakes)는 틸러스버그에서 가장 살기 좋은 장소(The best place to live in Tielersburg)라고 했으므로 트윈 레이크스는 주거 지역임을 알 수 있다. 따라서 (D)가 정답이다.`
                },
                {
                    id: "p7-t8-q156",
                    questionNo: 156,
                    text: "What is Mr. Abgarian's role in the meeting?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "To provide information about scheduled improvements",
                        "B": "To explain details of an annual contest",
                        "C": "To plan the repair of a broken water pipe",
                        "D": "To set the fees people will pay"
                    },
                    correctAnswer: "A",
                    translation: "회의에서 압가리안 씨의 역할은?",
                    explanation: `안건 및 발표자(Agenda items and presenters)의 첫 항목에서 부지 개선 관련 울타리 보수 및 수영장 구역의 새로운 조경 계획에 대한 개요를 부지 관리 및 유지 감독관인 압가리안 씨가 발표한다고 나와 있으므로 (A)가 정답이다.`
                },
                {
                    id: "p7-t8-q157",
                    questionNo: 157,
                    text: "Who has job responsibilities outside of Twin Lakes?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Ms. Kantor",
                        "B": "Mr. Carter",
                        "C": "Mr. Underwood",
                        "D": "Ms. Davis"
                    },
                    correctAnswer: "B",
                    translation: "트윈 레이크스 외부 업무 담당자는?",
                    explanation: `안건 및 발표자(Agenda items and presenters)의 세 번째 항목에서 휴론 가의 수도관 공사 관련 진행 상황 업데이트를 틸러스버그 시 공공사업부의 카터 씨(Mr. Carter, Department of Public Works, City of Tielersburg)가 발표한다고 나와 있다. 따라서 트윈 레이크스는 틸러스버그에 속하는 일부 주거 단지이고, 카터 씨는 틸러스버그 시 전체의 공공사업을 담당하는 부서의 직원이므로 (B)가 정답이다.`
                }
                    ]
        },
        // Questions 158-160: Notice
        {
            id: "p7-t8-set6",
            questionRange: "158-160",
            passages: [
                {
                    id: "p7-t8-s6-p1",
                    contextType: "P2",
                    docType: "NOTICE",
                    title: "Lingate Chemical Corporation\nLaboratory Safety Rules",
                    content: `Lingate Chemical Corporation\nLaboratory Safety Rules\n\nThe following is a partial list of rules you must follow while in the laboratory. Before beginning work in the lab, all workers are also required to read our most recent safety manual and complete our basic safety course. Please contact Mr. Kang if you need to complete these prerequisites.\n\n• Wear mandatory lab coat, goggles, and footwear.\n• Follow directions on posted signs in case of an accident.\n• Know how to properly operate all safety equipment (fire extinguishers, eye wash stations, etc.).\n• Know the location of all emergency exits.\n• Refrain from eating or drinking in the laboratory.\n• Report any unsafe conditions, accidents, or spills immediately to your supervisor.\n• In an emergency, exit immediately, call emergency services, and then contact your supervisor.`,
                    translation: `링게이트 화학 기업\n실험실 안전 규칙\n\n다음은 실험실에 있는 동안 따라야 할 규칙의 일부 목록입니다. 실험실에서 작업을 시작하기 전에 또한 모든 직원은 최신 안전 규정을 읽고 기본 안전 과정을 이수해야 합니다. 이러한 전제 조건을 완수해야 할 경우 강 씨에게 연락하십시오.\n\n• 실험실 가운, 고글, 신발 의무 착용\n• 사고에 대비하여 게시된 표지판의 지시사항 준수\n• 모든 안전 장비(소화기, 눈 세척기 등)의 올바른 작동법 숙지\n• 모든 비상구의 위치 파악\n• 실험실에서 음식 및 음료 섭취 삼가\n• 안전하지 않은 상황, 사고 또는 유출을 관리자에게 즉시 보고\n• 위급 상황 시 즉시 대피, 긴급 서비스 호출 후 관리자에게 연락`
                }
                    ],
            questions: [
                {
                    id: "p7-t8-q158",
                    questionNo: 158,
                    text: "Who is the notice most likely intended for?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "Students",
                        "B": "Employees",
                        "C": "Cleaning crews",
                        "D": "Emergency personnel"
                    },
                    correctAnswer: "B",
                    translation: "공지의 대상은 누구일 것 같은가?",
                    explanation: `공지의 제목이 링게이트 화학 기업(Lingate Chemical Corporation)의 실험실 안전 규칙(Laboratory Safety Rules)이고, 첫 문장에서 다음은 실험실에 있는 동안 따라야 할 규칙의 일부 목록(The following is ~ must follow while in the laboratory)이라고 설명하고 있다. 따라서 화학 기업의 실험실에서 일하는 직원들을 대상으로 하는 공지임을 알 수 있으므로 (B)가 정답이다.`
                },
                {
                    id: "p7-t8-q159",
                    questionNo: 159,
                    text: "Why would Mr. Kang be contacted?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "To obtain safety equipment",
                        "B": "To report unsafe conditions",
                        "C": "To arrange to complete a course",
                        "D": "To submit revisions to the safety manual"
                    },
                    correctAnswer: "C",
                    translation: "강 씨가 연락을 받게 될 이유는?",
                    explanation: `두 번째 문장에서 실험실에서 작업을 시작하기 전에 모든 직원은 최신 안전 규정을 읽고 기본 안전 과정을 이수해야 한다(Before beginning work in the lab, all workers are also required to ~ complete our basic safety course)면서 이러한 전제 조건을 완수해야 할 경우 강 씨에게 연락하라(Please contact Mr. Kang if you need to complete these prerequisites)고 했다. 따라서 기본 안전 과정을 이수해야 할 경우 강 씨에게 연락해야 하는 것이므로 (C)가 정답이다.`
                },
                {
                    id: "p7-t8-q160",
                    questionNo: 160,
                    text: "What is NOT a stated rule for working in the laboratory?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Goggles must be worn.",
                        "B": "Exits must remain open.",
                        "C": "Food must not be eaten.",
                        "D": "Accidents must be reported."
                    },
                    correctAnswer: "B",
                    translation: "실험실 작업을 위해 명시된 규칙이 아닌 것은?",
                    explanation: `실험실 안전 규칙 목록의 첫 항목에서 실험실 가운, 고글, 신발 의무 착용(Wear mandatory lab coat, goggles, and footwear)이라고 했으므로 (A), 다섯 번째 항목에서 실험실에서 음식 및 음료 섭취 삼가(Refrain from eating or drinking in the laboratory)라고 했으므로 (C), 여섯 번째 항목에서 안전하지 않은 상황, 사고 또는 유출을 관리자에게 즉시 보고(Report any unsafe conditions, accidents, or spills immediately to your supervisor)라고 했으므로 (D)는 규칙으로 명시되었다. 출구가 열려 있어야 한다는 내용은 없으므로 (B)가 정답이다.`
                }
                    ]
        },
        // Questions 161-163: E-mail
        {
            id: "p7-t8-set7",
            questionRange: "161-163",
            passages: [
                {
                    id: "p7-t8-s7-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    content: `To: All staff\nFrom: Liza Chu, IT Department\nDate: June 8, 1:13 P.M.\nSubject: Network issues\n\nGood afternoon everyone. — [1] —.\n\nAt 10:00 this morning, the Information Technology team did some network maintenance, resulting in a series of issues across the building. — [2] —. We quickly received reports of printer malfunctions, missing network drives, difficulty loading e-mail messages, and other problems. — [3] —.\n\nWe have now stabilized the situation, but if you should still encounter these or similar issues, please attempt first to address them by restarting your computer. — [4] —.`,
                    translation: `수신: 전 직원\n발신: 리자 추가, IT 부서\n날짜: 6월 8일 오후 1시 13분\n제목: 네트워크 문제\n\n안녕하세요 여러분. — [1] —.\n\n오늘 오전 10시에 정보 기술 팀이 네트워크 유지 보수 작업을 한 결과, 건물 전체에 일련의 문제들이 발생했습니다. — [2] —. 프린터 오작동, 누락된 네트워크 드라이브, 이메일 메시지 로딩이 잘 안되는 것을 비롯한 기타 문제들에 대해 신속하게 보고를 받았습니다. — [3] —.\n\n저희가 현재 상황을 안정시켰으나 — [4] — 아직도 이러한 문제나 유사한 문제를 겪으실 경우 먼저 컴퓨터를 다시 시작하여 문제를 해결해 보십시오.`
                }
                    ],
            questions: [
                {
                    id: "p7-t8-q161",
                    questionNo: 161,
                    text: "What is the e-mail about?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Scheduling a team meeting",
                        "B": "Setting up a new e-mail account",
                        "C": "Concerns about Web browsing security",
                        "D": "Problems with a computer network"
                    },
                    correctAnswer: "D",
                    translation: "이메일은 무엇에 관한 것인가?",
                    explanation: `이메일의 제목이 네트워크 문제(Subject: Network issues)이고, 첫 문장에서 오늘 오전 10시에 정보 기술 팀이 네트워크 유지 보수 작업을 한 결과, 건물 전체에 일련의 문제들이 발생했다(At 10:00 this morning, the Information Technology team did some network maintenance, resulting in a series of issues across the building)고 했으므로 컴퓨터 네트워크 관련 문제에 관한 이메일임을 알 수 있다. 따라서 (D)가 정답이다.`
                },
                {
                    id: "p7-t8-q162",
                    questionNo: 162,
                    text: "What probably happened before Ms. Chu sent the e-mail?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Employees requested assistance from the IT department.",
                        "B": "Log-on procedures for company accounts were changed.",
                        "C": "Computer equipment was removed from the building.",
                        "D": "Some staff members received new printers."
                    },
                    correctAnswer: "A",
                    translation: "추 씨가 이메일을 보내기 전에 발생했을 것 같은 일은?",
                    explanation: `첫 번째 단락 첫 문장에서 추 씨가 오늘 오전 10시에 정보 기술 팀이 네트워크 유지 보수 작업을 한 결과 건물 전체에 일련의 문제들이 발생했다(At 10:00 this morning, the Information Technology team did some network maintenance, resulting in a series of issues across the building)고 했고, 프린터 오작동, 누락된 네트워크 드라이브, 이멜 메시지 로딩이 잘 안되는 것을 비롯한 기타 문제들에 대해 신속하게 보고를 받았다(We quickly received reports of printer malfunctions, missing network drives, difficulty loading e-mail messages, and other problems)고 했다. 따라서 추 씨가 이메일을 보내기 전에 직원들이 IT 부서에 네트워크 문제를 보고하고 도움을 요청했다는 것을 알 수 있으므로 (A)가 정답이다.`
                },
                {
                    id: "p7-t8-q163",
                    questionNo: 163,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"If you continue to have problems after doing so, then give us a call.\"",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "D",
                    translation: "[1], [2], [3], [4]로 표시된 위치 중에서 다음 문장이 들어가기에 가장 적절한 곳은?",
                    explanation: `주어진 문장의 after doing so가 문제 해결의 단서이다. "그렇게 한 뒤에도 문제가 지속될 경우 저희에게 전화하십시오"라는 지침을 전달하고 있으므로 주어진 문장 앞에는 'doing so'에 해당하는 문제에 대한 해결책이 제시되어 있어야 한다. 따라서 아직도 이러한 문제나 유사한 문제를 겪을 경우 먼저 컴퓨터를 다시 시작하며 문제를 해결하라는 you should still encounter these or similar issues, please attempt first to address them by restarting your computer라는 문장 뒤인 (D)가 정답이다.`
                }
                    ]
        },
        // Questions 164-167: Online Chat
        {
            id: "p7-t8-set8",
            questionRange: "164-167",
            passages: [
                {
                    id: "p7-t8-s8-p1",
                    contextType: "P7",
                    docType: "CHAT_MESSAGE",
                    title: "Online Chat",
                    content: `Sunisa Sommer [1:30 P.M.]\nHi Raphael and Hamed. Can either of you tell me where I can find the laptop that's usually in Conference Room B? It isn't on the cart with the projector.\n\nRaphael Luongo [1:32 P.M.]\nI used it for my presentation on Monday, but I left it in the conference room.\n\nHamed Gabr [1:32 P.M.]\nI believe Martin Dabliz was going to ask someone in the IT department to look at it because it wasn't working properly.\n\nSunisa Sommer [1:34 P.M.]\nGot it. Do you know if a repair ticket was submitted?\n\nHamed Gabr [1:35 P.M.]\nI don't think Martin knows all the IT procedures. He's only in his first week.\n\nSunisa Sommer [1:37 P.M.]\nRight. We should make sure that information is included in the employee orientation materials.\n\nRaphael Luongo [1:41 P.M.]\nI don't see a ticket on the IT site. I'll reach out to IT and take care of that now.`,
                    translation: `수니사 소머 [오후 1:30] 안녕하세요 라파엘 그리고 하메드. 164 평소 B 회의실에 있는 노트북이 어디에 있는지 아는 분 계세요? 프로젝터가 놓인 카트에 없군요.\n\n라파엘 루옹고 [오후 1:32] 월요일에 제가 발표에 사용하기는 했지만 회의실에 두고 나왔습니다.\n\n하메드 가브르 [오후 1:32] 노트북이 제대로 작동이 안 돼서 마틴 다블리즈가 IT 부서의 누군가에게 살펴봐 달라고 요청하려고 했던 것 같습니다.\n\n수니사 소머 [오후 1:34] 알겠습니다. 수리 요청서가 제출되었는지 아시나요?\n\n하메드 가브르 [오후 1:35] 마틴이 IT 절차를 전부 알지는 못할 것 같습니다. 근무한 지 일주일밖에 안 됐거든요.\n\n수니사 소머 [오후 1:37] 그렇군요. 직원 오리엔테이션 자료에 반드시 그 정보를 포함해야겠습니다.\n\n라파엘 루옹고 [오후 1:41] IT 사이트에 요청 내용이 보이지 않습니다. 제가 지금 IT에 연락해서 처리하겠습니다.`
                }
                    ],
            questions: [
                {
                    id: "p7-t8-q164",
                    questionNo: 164,
                    text: "Why does Ms. Sommer message her colleagues?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "To alert them that a projector is broken",
                        "B": "To ask where a computer has been put",
                        "C": "To request help creating a presentation",
                        "D": "To find out whether a conference room is available"
                    },
                    correctAnswer: "B",
                    translation: "소머 씨가 동료들에게 메시지를 보낸 이유는?",
                    explanation: `1시 30분에 소머 씨가 평소 B 회의실에 있는 노트북이 어디에 있는지 알려달라(Can either of you tell me where I can find the laptop that's usually in Conference Room B?)고 요청하고 있으므로 (B)가 정답이다.`
                },
                {
                    id: "p7-t8-q165",
                    questionNo: 165,
                    text: "At 1:34 P.M., what does Ms. Sommer most likely mean when she writes, \"Got it\"?",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "She found the repair ticket.",
                        "B": "She now has access to a Web site.",
                        "C": "She knows the correct procedure to follow.",
                        "D": "She understands what happened."
                    },
                    correctAnswer: "D",
                    translation: "오후 1시 34분에 소머 씨가 \"알겠습니다\"라고 쓴 의도는?",
                    explanation: `1시 32분에 가브르 씨가 노트북이 제대로 작동이 안 돼서 마틴 다블리즈가 IT 부서의 누군가에게 살펴봐 달라고 요청하려고 했던 것 같다(I believe Martin Dabliz was going to ask ~ because it wasn't working properly)고 하자 1시 34분에 소머 씨가 "알겠습니다(Got it)"라고 했다. 따라서 소머 씨가 가브르 씨의 상황 설명을 이해했음을 표현하기 위해 한 말임을 알 수 있으므로 (D)가 정답이다.`
                },
                {
                    id: "p7-t8-q166",
                    questionNo: 166,
                    text: "What is suggested about Mr. Dabliz?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "He was recently hired.",
                        "B": "He is Mr. Gabr's supervisor.",
                        "C": "He is the chief technology officer.",
                        "D": "He was interviewed on Monday."
                    },
                    correctAnswer: "A",
                    translation: "다블리즈 씨에 대해 암시된 것은?",
                    explanation: `1시 35분에 가브르 씨가 마틴이 IT 절차를 전부 알지는 못할 것 같다(I don't think Martin knows all the IT procedures)고 하며, 근무한 지 일주일밖에 안 됐다(He's only in his first week)고 했다. 따라서 마틴 다블리즈는 최근에 입사했다는 것을 알 수 있으므로 (A)가 정답이다.`
                },
                {
                    id: "p7-t8-q167",
                    questionNo: 167,
                    text: "What will Mr. Luongo probably do next?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Revise a company policy",
                        "B": "Repair the laptop himself",
                        "C": "Contact the IT department",
                        "D": "Update the training materials"
                    },
                    correctAnswer: "C",
                    translation: "루옹고 씨는 다음에 무엇을 할 것 같은가?",
                    explanation: `1시 41분에 루옹고 씨가 지금 IT에 연락해서 처리하겠다(I'll reach out to IT and take care of that now)고 한 것으로 보아 루옹고 씨는 곧바로 IT 부서에 연락할 것임을 알 수 있다. 따라서 (C)가 정답이다.`
                }
                    ]
        },
        // Questions 168-171: E-mail
        {
            id: "p7-t8-set9",
            questionRange: "168-171",
            passages: [
                {
                    id: "p7-t8-s9-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    title: "Email",
                    content: `To: Lindsey Galloway <lgalloway@sportsupplies.com>\nFrom: Samuel Bains <samuelbains@exertreks.com>\nDate: August 16\nSubject: Exertreks boots for winter activities\n\nHello Ms. Galloway,\n\nI am sorry I missed your call this morning. The answers to your questions are given below.\n\nWe here at Exertreks have recently completed the development of our Winter Hikers. Like our waterproof Trekkers, they are waterproof, but the Winter Hikers are most appropriate for use in extreme cold. The boots are lined with a proprietary material that is highly effective at retaining body heat. They are also durable, light, and comfortable. For orders of 50 pairs or more of the Winter Hikers, the wholesale price per pair is $65. The recommended retail price is $89. We can deliver your order in two weeks.\n\nPresale reviews of the boots by experts in outdoor sports have been enthusiastic. You can expect the Winter Hikers to be a big hit with your customers this year. I look forward to hearing from you soon to answer any other questions and to help you with your first order.\n\nSincerely,\n\nSamuel Bains`,
                    translation: `수신: 린지 갤러웨이 <lgalloway@sportsupplies.com>\n발신: 새뮤얼 베인스 <samuelbains@exertreks.com>\n날짜: 8월 16일\n제목: 겨울 활동을 위한 엑서트렉스 부츠\n\n안녕하세요 갤러웨이 씨,\n\n오늘 아침에 전화를 받지 못해서 죄송합니다. 귀하의 문의에 대한 답변은 아래와 같습니다.\n\n저희 엑서트렉스는 최근에 윈터 하이커스의 개발을 완료했습니다. 다른 모델과 마찬가지로 윈터 하이커도 방수이지만 극한 추위에서 사용하기에 가장 적절합니다. 이 부츠는 체온 유지에 매우 효과적인 전매 특허 소재로 안감을 댔습니다. 이 부츠는 또한 내구성이 좋으며 가볍고 편안합니다. 윈터 하이커스를 50켤레 이상 주문하실 경우 켤레당 도매가는 65달러입니다. 권장 소비자 가격은 89달러입니다. 주문품은 2주 후에 배송해 드릴 수 있습니다.\n\n아웃도어 스포츠 전문가들의 부츠에 대한 사전 판매 평가는 열광적입니다. 올해 귀하의 고객들에게 큰 인기를 끌 것으로 예상하셔도 좋습니다. 곧 연락 주셔서 다른 문의사항에 답변을 드리거나 첫 주문을 도와드리게 되길 기대합니다.\n\n새뮤얼 베인스`
                }
                    ],
            questions: [
                {
                    id: "p7-t8-q168",
                    questionNo: 168,
                    text: "What is implied in Mr. Bains's e-mail?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "Ms. Galloway asked him to check on an order that had been placed.",
                        "B": "Ms. Galloway left a message for him asking for information.",
                        "C": "He asked Ms. Galloway to return a call he had made before.",
                        "D": "He and Ms. Galloway met earlier in the day."
                    },
                    correctAnswer: "B",
                    translation: "베인스 씨의 이메일에 암시된 것은?",
                    explanation: `첫 문장에서 베인스 씨가 갤러웨이 씨에게 오늘 아침에 전화를 받지 못해서 죄송하다(I am sorry I missed your call this morning)며 귀하의 문의에 대한 답변은 아래와 같다(The answers to your questions are given below)고 했다. 따라서 갤러웨이 씨가 오늘 아침 베인스 씨에게 문의사항이 포함된 전화 메시지를 남겼음을 알 수 있으므로 (B)가 정답이다.`
                },
                {
                    id: "p7-t8-q169",
                    questionNo: 169,
                    text: "What is NOT mentioned about the boots?",
                    classification: "P7_NEGATIVE",

                    options: {
                        "A": "Their color",
                        "B": "Their weight",
                        "C": "Their durability",
                        "D": "Their warmth"
                    },
                    correctAnswer: "A",
                    translation: "부츠에 대해 언급되지 않은 것은?",
                    explanation: `두 번째 단락의 네 번째 문장에서 이 부츠는 내구성이 좋으며 가볍고 편안하다(They are also durable, light, and comfortable)고 했으므로 (B)와 (C), 세 번째 문장에서 이 부츠는 체온 유지에 매우 효과적인 전매 특허 소재로 안감을 댔다(The boots are lined with a proprietary material that is highly effective at retaining body heat)고 했으므로 (D)는 언급이 되었다. 따라서 언급되지 않은 (A)가 정답이다.`
                },
                {
                    id: "p7-t8-q170",
                    questionNo: 170,
                    text: "The word \"hit\" in paragraph 3, line 2, is closest in meaning to",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "match",
                        "B": "arrival",
                        "C": "success",
                        "D": "request"
                    },
                    correctAnswer: "C",
                    translation: "세 번째 단락 2행의 \"hit\"와 의미가 가장 가까운 단어는?",
                    explanation: `의미상 고객들에게 큰 '인기'를 끌 것이라는 뜻으로 쓰였으므로 '성공'을 뜻하는 (C) success가 정답이다.`
                },
                {
                    id: "p7-t8-q171",
                    questionNo: 171,
                    text: "What does Mr. Bains want Ms. Galloway to do?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Give the boots a good review online",
                        "B": "Contact him to arrange delivery of some boots",
                        "C": "Charge customers $65 for each pair of boots",
                        "D": "Sell him insulation material to be used in the boots"
                    },
                    correctAnswer: "B",
                    translation: "베인스 씨가 갤러웨이 씨에게 원하는 것은?",
                    explanation: `마지막 문장에서 베인스 씨가 갤러웨이 씨에게 곧 연락을 주어서 다른 문의사항에 답변을 하거나 첫 주문을 도와주게 되길 기대한다(I look forward to hearing from you soon to answer any other questions and to help you with your first order)고 했으므로 베인스 씨는 갤러웨이 씨가 부츠를 주문하기 위해 자신에게 연락하기를 바란다는 것을 알 수 있다. 따라서 (B)가 정답이다.`
                }
                    ]
        },
        // Questions 172-175: Web Page
        {
            id: "p7-t8-set10",
            questionRange: "172-175",
            passages: [
                {
                    id: "p7-t8-s10-p1",
                    contextType: "P4",
                    docType: "WEBPAGE",
                    title: "Tuesday Evening Lecture Series",
                    content: `https://www.hurnhamhistoricalsociety.org/news\n\nTuesday Evening Lecture Series\n\nWe are pleased to announce that our third annual lecture series will be hosted by the Hurnham Heritage Museum on Tuesday evenings over the next six weeks. — [1] —. Each guest speaker will focus on objects from the museum's permanent collection. — [2] —. The first lecture, on June 15 at 7:00 P.M., features Georgia Hinds, head curator of the Knowles Art Gallery. — [3] —. Ms. Hinds will use a writing desk, a chest, and a household table to discuss what furniture can reveal to us about the lives of the first Hurnham residents over 200 years ago.\n\nThe lecture series is open to the public and includes free admission to the Hurnham Heritage Museum. — [4] —. The Fasseller Café, next door to the museum, will stay open late on Tuesdays to accommodate lecture attendees and the general public.\n\nPosted on June 8`,
                    translation: `https://www.hurnhamhistoricalsociety.org/news\n\n화요일 저녁 강연 시리즈\n\n172 저희의 세 번째 연례 강연 시리즈가 험햄 헤리티지 박물관에서 향후 6주에 걸쳐 화요일 저녁마다 개최될 것임을 알려드리게 되어 기쁩니다. — [1] —. 173, 175 각각의 초청 연사는 박물관 소장품에 있는 물건들에 초점을 맞출 것입니다. — [2] —. 174 6월 15일 저녁 7시에 열리는 첫 강연에는 노울즈 아트 갤러리의 수석 큐레이터인 조지아 하인즈가 출연합니다. — [3] —. 174 하인즈 씨는 글쓰기 책상, 서랍장, 그리고 가정용 탁자를 이용하여 200년 이상 전의 험햄 초기 주민들의 삶에 대해 가구가 우리에게 무엇을 보여줄 수 있는지를 논의할 것입니다.\n\n강연 시리즈는 일반인이 참여할 수 있으며 험햄 헤리티지 박물관 무료 입장권이 포함됩니다. — [4] —. 박물관 옆에 있는 파셀러 카페는 강연 참석자와 일반 시민들이 이용할 수 있도록 화요일 늦게까지 문을 열 예정입니다.\n\n6월 8일 게시`
                }
                    ],
            questions: [
                {
                    id: "p7-t8-q172",
                    questionNo: 172,
                    text: "What is true about the lecture series?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It highlights modern art and crafts.",
                        "B": "It is held on a monthly basis.",
                        "C": "It is sponsored by local artists.",
                        "D": "It is being offered for the third year."
                    },
                    correctAnswer: "D",
                    translation: "강연 시리즈에 대해 사실인 것은?",
                    explanation: `첫 문장에서 세 번째 연례 강연 시리즈가 험햄 헤리티지 박물관에서 향후 6주에 걸쳐 화요일 저녁마다 개최될 것임을 알리게 되어 기쁘다(We are pleased to announce that our third annual lecture series will be hosted ~ over the next six weeks)고 했으므로 강연 시리즈가 매년 3년째 열리고 있다는 것을 알 수 있다. 따라서 (D)가 정답이다.`
                },
                {
                    id: "p7-t8-q173",
                    questionNo: 173,
                    text: "To whom do the objects Ms. Hinds will discuss belong?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "The Hurnham Historical Society",
                        "B": "The Knowles Art Gallery",
                        "C": "The Hurnham Heritage Museum",
                        "D": "The Fasseller Café"
                    },
                    correctAnswer: "C",
                    translation: "하인즈 씨가 강연할 물건의 소유자는?",
                    explanation: `첫 단락 두 번째 문장에서 각각의 초청 연사는 박물관 소장품에 있는 물건들에 초점을 맞출 것(Each guest speaker will focus on objects from the museum's permanent collection)이라고 했고, 네 번째 문장에서 6월 15일 저녁 7시에 열리는 첫 강연에는 노울즈 아트 갤러리의 수석 큐레이터인 조지아 하인즈가 출연한다(The first lecture, on June 15 at 7:00 P.M., features Georgia Hinds, head curator of the Knowles Art Gallery)고 했다. 따라서 초청 연사인 하인즈 씨가 강연에서 다루게 될 물품은 험햄 헤리티지 박물관의 영구 소장품임을 알 수 있으므로 (C)가 정답이다.`
                },
                {
                    id: "p7-t8-q174",
                    questionNo: 174,
                    text: "What is indicated about the Hurnham area?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It was established more than 100 years ago.",
                        "B": "It has an aging population.",
                        "C": "It attracts many young artists.",
                        "D": "It was a furniture production center."
                    },
                    correctAnswer: "A",
                    translation: "험햄 지역에 대해 암시된 것은?",
                    explanation: `첫 단락 다섯 번째 문장에서 하인즈 씨는 글쓰기 책상, 서랍장, 그리고 가정용 탁자를 이용하여 200년 이상 전의 험햄 초기 주민들의 삶에 대해 가구가 무엇을 보여 줄 수 있는지를 논의할 것(Ms. Hinds will use ~ the lives of the first Hurnham residents over 200 years ago)이라고 했다. 따라서 험햄 초기 주민들의 삶이 200년 이상 전에 시작되었다는 것으로 보아 험햄 마을은 100년보다 더 전에 설립되었음을 알 수 있으므로 (A)가 정답이다.`
                },
                {
                    id: "p7-t8-q175",
                    questionNo: 175,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"Included among these are items such as furniture, needlework, diaries, musical instruments, and clothing.\"",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "B",
                    translation: "[1], [2], [3], [4]로 표시된 위치 중에서 다음 문장이 들어가기에 가장 적절한 곳은?",
                    explanation: `주어진 문장에서 여기에(These)게 가구, 자수, 일기, 악기 및 의류와 같은 물건들이 포함된다고 했으므로, 앞에는 '이것들' 즉, 가구, 의류 등의 물품을 총칭할 수 있는 명사가 복수 형태로 있어야 한다. 따라서 박물관 소장품에 있는 물건들(objects from the museum's permanent collection)이 복수명사로 언급되어 있는 문장 뒤인 (B)가 정답이다.`
                }
                    ]
        }
                    ]
};
