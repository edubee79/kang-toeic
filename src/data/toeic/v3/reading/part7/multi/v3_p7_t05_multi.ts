import { PracticeSet } from '../types';

export const test5MultiData: PracticeSet[] = [
    {
        id: 'v3-p7-t5-multi-set11',
        setType: 'Double',
        vol: 3,
        questionRange: '176-180',
        passages: [
            {
                id: 'v3-p7-t5-multi-set11-p1',
                contextType: 'P4',
                docType: 'EMAIL',
                header: {
                    to: 'Brody Dimmick <bdimmick@greerscoffee.com.au>',
                    from: 'Fawzia Gurmani <fgurmani@greerscoffee.com.au>',
                    date: '17 September',
                    subject: 'Following up on your recent call',
                    attachment: 'Proposal'
                },
                content: [
                    'Dear Mr. Dimmick,',
                    "Thank you for your recent call. We are always pleased to hear from one of our many local store managers. I think your idea to reinstate the Greer's Coffee Club is excellent, and I am also pleased to know your customers have been asking about the club punch cards. I agree that this is a good time to bring back the program, as we are working on rebranding the company. I have drawn up your proposal and will forward it to Ms. So-Ra Oh, vice president of marketing, tomorrow. Before I do that, can you please look it over and let me know if I have missed any details? Please send me your feedback by the end of the day.",
                    'Thank you,',
                    'Fawzia Gurmani',
                    'Regional Director'
                ]
            },
            {
                id: 'v3-p7-t5-multi-set11-p2',
                contextType: 'P4',
                docType: 'WEB_PAGE',
                header: {
                    url: 'http://www.greerscoffee.com.au/rewards'
                },
                content: [
                    "**Greer's, the place for coffee, conversation, and snacks, is now even better!**",
                    "We have brought back the Greer's Coffee Club, but with an update: it is now even easier to use! Simply download our new mobile app and register. Use the app to scan your receipt every time you visit any Greer's Coffee location, and you will earn points. Each time you accrue 100 points, you can redeem the points for discounts on coffee, food, and other items."
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t5-multi-set11-q1',
                questionNo: 176,
                text: 'Why did Ms. Gurmani send the e-mail?',
                options: {
                    A: 'To welcome a new employee',
                    B: 'To describe how to join a club',
                    C: 'To invite Mr. Dimmick to a meeting',
                    D: 'To confirm the details of a proposal'
                },
                correctAnswer: 'D',
                classification: 'P7_PURPOSE',
                translation: 'Ms. Gurmani가 이메일을 보낸 이유는 무엇인가?\n(A) 신입 사원을 환영하기 위해\n(B) 클럽 가입 방법을 설명하기 위해\n(C) Mr. Dimmick을 회의에 초대하기 위해\n(D) 제안서의 세부 사항을 확인하기 위해',
                explanation: '이메일 후반부에서 "Before I do that, can you please look it over and let me know if I have missed any details?(그렇게 하기 전에, 한 번 훑어보시고 제가 놓친 부분이 있는지 알려주시겠어요?)"라고 제안서 확인을 요청하고 있습니다.'
            },
            {
                id: 'v3-p7-t5-multi-set11-q2',
                questionNo: 177,
                text: 'Who is Mr. Dimmick?',
                options: {
                    A: 'A new supplier',
                    B: 'A store manager',
                    C: 'A vice president',
                    D: 'A regional director'
                },
                correctAnswer: 'B',
                classification: 'P7_DETAIL',
                translation: 'Mr. Dimmick은 누구인가?\n(A) 신규 공급업체\n(B) 매장 매니저\n(C) 부사장\n(D) 지역 이사',
                explanation: '이메일 첫 단락에서 "We are always pleased to hear from one of our many local store managers(우리의 많은 지역 매장 매니저 중 한 명인 귀하로부터 소식을 듣게 되어 기쁩니다)"라고 언급하고 있습니다.'
            },
            {
                id: 'v3-p7-t5-multi-set11-q3',
                questionNo: 178,
                text: "What does Ms. Gurmani suggest about Greer's Coffee?",
                options: {
                    A: 'It has had a coffee club before.',
                    B: 'It is a new company.',
                    C: 'It hired a marketing consultant.',
                    D: 'It is launching a new coffee flavor.'
                },
                correctAnswer: 'A',
                classification: 'P7_INFERENCE',
                translation: "Ms. Gurmani는 Greer's Coffee에 대해 무엇을 시사하는가?\n(A) 이전에 커피 클럽을 운영한 적이 있다.\n(B) 신생 회사이다.\n(C) 마케팅 컨설턴트를 고용했다.\n(D) 새로운 커피 맛을 출시할 예정이다.",
                explanation: '이메일에서 "reinstate(복귀시키다)" 및 "bring back(다시 가져오다)"이라는 표현을 사용한 것으로 보아, 과거에 운영했던 적이 있음을 알 수 있습니다.'
            },
            {
                id: 'v3-p7-t5-multi-set11-q4',
                questionNo: 179,
                text: "What does the Web page suggest about Greer's Coffee Club?",
                options: {
                    A: 'It allows customers to place orders online.',
                    B: 'It no longer requires the use of a punch card.',
                    C: 'It is no longer offered at all locations.',
                    D: 'It requires customers to make a monthly purchase.'
                },
                correctAnswer: 'B',
                classification: 'P7_LINK',
                translation: "웹페이지는 Greer's Coffee Club에 대해 무엇을 시사하는가?\n(A) 고객이 온라인으로 주문할 수 있게 해준다.\n(B) 더 이상 종이 쿠폰(펀치 카드)을 사용할 필요가 없다.\n(C) 더 이상 모든 지점에서 제공되지 않는다.\n(D) 고객이 매달 구매를 해야 한다.",
                explanation: '이메일에서 고객들이 "club punch cards"에 대해 문의했다고 했으나, 웹페이지에서는 "download our new mobile app and register(새 모바일 앱을 다운로드하고 등록하라)"고 업데이트된 방식을 설명하고 있습니다.'
            },
            {
                id: 'v3-p7-t5-multi-set11-q5',
                questionNo: 180,
                text: 'On the Web page, the word "redeem" in paragraph 1, line 4, is closest in meaning to',
                options: {
                    A: 'trade in',
                    B: 'pay off',
                    C: 'set free',
                    D: 'win over'
                },
                correctAnswer: 'A',
                classification: 'P7_VOCABULARY',
                translation: '웹페이지의 "redeem"과 가장 가까운 의미의 단어는?\n(A) (쿠폰 등을) 교환하다\n(B) (빚 등을) 갚다\n(C) 해방시키다\n(D) 자기편으로 끌어들이다',
                explanation: '포인트를 할인으로 교환하여 사용하는 문맥이므로 trade in이 가장 적절합니다.'
            }
        ]
    },
    {
        id: 'v3-p7-t5-multi-set12',
        setType: 'Double',
        vol: 3,
        questionRange: '181-185',
        passages: [
            {
                id: 'v3-p7-t5-multi-set12-p1',
                contextType: 'P2',
                docType: 'NOTICE',
                header: {
                    title: 'Job Advertisement'
                },
                content: [
                    '**Job Posted:** April 10',
                    '**Seeking:** Highly Experienced Finance Director',
                    '**Employer:** Vimaxo Financial Services (VFS)',
                    '**Duties include:**\n• Setting annual financial targets\n• Managing the duties of accounting staff\n• Overseeing investments and cash flow\n• Developing sound financial strategies',
                    '**Prerequisites:**\n• 5 years of experience as a finance director\n• A university degree in economics or similar field\n• Excellent communication skills\n• Outstanding analytical skills',
                    '**To apply:** Send application and supporting documents to our director of Human Resources, Celeste Zomorodi, at zomorodi.c@vfs.com by May 15. We aim to hire the ideal applicant by June 21 and have him/her begin work on July 1.'
                ]
            },
            {
                id: 'v3-p7-t5-multi-set12-p2',
                contextType: 'P2',
                docType: 'EMAIL',
                header: {
                    from: 'Noritaka Hosokawa',
                    to: 'Celeste Zomorodi',
                    date: 'April 11',
                    subject: 'Finance director'
                },
                content: [
                    'Dear Celeste,',
                    "I wanted to ask you about the finance director job posting released by our department just yesterday. I have a friend named Michaela Shabiby who I think may be a good fit for this position. May I encourage her to apply?",
                    "Michaela graduated with a Master's degree in Finance from the University of Grenada three years ago and has worked since then as finance director at Southside Investment Bank. She is an experienced trainer, and her analytical skills are unparalleled. Please let me know.",
                    'Thanks,',
                    'Noritaka Hosokawa'
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t5-multi-set12-q1',
                questionNo: 181,
                text: 'According to the job advertisement, what will be one responsibility of the successful candidate?',
                options: {
                    A: 'Reviewing tax policies',
                    B: 'Overseeing financial planning',
                    C: 'Evaluating promotional campaigns',
                    D: 'Meeting with fund-raising coordinators'
                },
                correctAnswer: 'B',
                classification: 'P7_DETAIL',
                translation: '구인 광고에 따르면, 최종 후보자의 업무 책임 중 하나는 무엇인가?\n(A) 세금 정책 검토\n(B) 재무 계획 총괄\n(C) 홍보 캠페인 평가\n(D) 기금 모금 코디네이터와의 미팅',
                explanation: '업무(Duties) 중 "Developing sound financial strategies(건실한 재무 전략 수립)" 및 "Setting annual financial targets" 등이 재무 계획(financial planning)에 해당합니다.'
            },
            {
                id: 'v3-p7-t5-multi-set12-q2',
                questionNo: 182,
                text: 'When is the job application deadline?',
                options: {
                    A: 'April 10',
                    B: 'May 15',
                    C: 'June 21',
                    D: 'July 1'
                },
                correctAnswer: 'B',
                classification: 'P7_DETAIL',
                translation: '입사 지원 마감일은 언제인가?\n(A) 4월 10일\n(B) 5월 15일\n(C) 6월 21일\n(D) 7월 1일',
                explanation: '지원 방법(To apply) 섹션에 "by May 15"라고 종료일이 명시되어 있습니다.'
            },
            {
                id: 'v3-p7-t5-multi-set12-q3',
                questionNo: 183,
                text: 'What most likely is true about Mr. Hosokawa and Ms. Zomorodi?',
                options: {
                    A: 'They met at university.',
                    B: 'They are friends of Ms. Shabiby.',
                    C: 'They work in Human Resources.',
                    D: 'They have known each other since childhood.'
                },
                correctAnswer: 'C',
                classification: 'P7_INFERENCE',
                translation: 'Mr. Hosokawa와 Ms. Zomorodi에 대해 사실일 가능성이 높은 것은?\n(A) 대학에서 만났다.\n(B) Ms. Shabiby의 친구들이다.\n(C) 인사부(HR)에서 근무한다.\n(D) 어린 시절부터 서로 알고 지냈다.',
                explanation: 'Hosokawa 씨가 이메일에서 "the job posting released by **our department**(우리 부서에서 낸 공고)"라고 언급했으며, 광고에서 Zomorodi 씨를 인사부장(Director of Human Resources)으로 소개했으므로 두 사람 모두 인사부 소속임을 알 수 있습니다.'
            },
            {
                id: 'v3-p7-t5-multi-set12-q4',
                questionNo: 184,
                text: 'In the e-mail, the word "fit" in paragraph 1, line 2, is closest in meaning to',
                options: {
                    A: 'agreement',
                    B: 'success',
                    C: 'match',
                    D: 'preparation'
                },
                correctAnswer: 'C',
                classification: 'P7_VOCABULARY',
                translation: '이메일의 "fit"과 가장 가까운 의미의 단어는?\n(A) 합의\n(B) 성공\n(C) 적임자/일치\n(D) 준비',
                explanation: '해당 직책에 어울리는(appropriate) 사람이라는 뜻이므로 match가 적절합니다.'
            },
            {
                id: 'v3-p7-t5-multi-set12-q5',
                questionNo: 185,
                text: 'From Ms. Zomorodi\'s description, what position requirement might Ms. Shabiby NOT meet?',
                options: {
                    A: 'Job-related experience',
                    B: 'A university degree',
                    C: 'Good communication skills',
                    D: 'Outstanding analytical skills'
                },
                correctAnswer: 'A',
                classification: 'P7_LINK',
                translation: '공고 내용을 바탕으로 할 때, Ms. Shabiby가 충족하지 못할 수도 있는 자격 요건은?\n(A) 관련 업무 경력\n(B) 대학교 학위\n(C) 우수한 의사소통 기술\n(D) 뛰어난 분석 능력',
                explanation: '광고에서는 "5 years of experience"를 요구했으나, 이메일에 따르면 Michaela는 3년 전 졸업 후 그때부터 근무했으므로 총 경력이 약 3년이 되어 5년 요건을 충족하지 못합니다.'
            }
        ]
    },
    {
        id: 'v3-p7-t5-multi-set13',
        setType: 'Triple',
        vol: 3,
        questionRange: '186-190',
        passages: [
            {
                id: 'v3-p7-t5-multi-set13-p1',
                contextType: 'P2',
                docType: 'WEB_PAGE',
                header: {
                    url: 'http://www.nozawamotors.ca/newsroom'
                },
                content: [
                    'The new Nozawa 10 is finally here! We have made our dashboard navigation system fully voice enabled. With our Nozawa Navigation Interface (NNI), drivers can stay focused on the road. We have also added cupholders between the front seats, enhanced the back-seat speakers, and expanded the cargo area by 29 liters. Check out our new model at your Nozawa Motors dealer, and let us know what you think!'
                ]
            },
            {
                id: 'v3-p7-t5-multi-set13-p2',
                contextType: 'P2',
                docType: 'FORM',
                header: {
                    title: 'Do you have any comments, questions, or concerns?'
                },
                content: [
                    "**Do you have any comments, questions, or concerns?**",
                    "I've been a Nozawa customer for more than a decade, and I recently got a new Nozawa 10. Overall, I am happy with my purchase, but I am not pleased with the new position of the cupholders. Some air vents could have been placed there instead, and it would have made the heating and cooling system more efficient.",
                    "Like other drivers, I too have had some problems with the NNI system. I do, however, really like being able to fit more in the trunk, and this model's acceleration power seems to have improved compared with previous models.",
                    "If you would like to receive a personal reply to your survey response, please enter your contact information.",
                    "**Name:** Michelle Herrera &nbsp;&nbsp;&nbsp;&nbsp; **E-mail address:** mherrera@notezip.com"
                ]
            },
            {
                id: 'v3-p7-t5-multi-set13-p3',
                contextType: 'P2',
                docType: 'MEMO',
                header: {
                    title: 'MEMO'
                },
                content: [
                    "From: Tabitha Marks",
                    "To: Nozawa Service Center Managers",
                    "Subject: New release",
                    "We received negative customer feedback about the new Nozawa 10 model's NNI system. In response we have just released a new NNI software update that fixes the bugs. Please begin installing this update immediately to all current year Nozawa 10s that are brought to your shops for servicing. You can expect an increase in Nozawa 10s being brought in for service as we will be notifying all owners that this update is available."
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t5-multi-set13-q1',
                questionNo: 186,
                text: 'What is the purpose of the Web page?',
                options: {
                    A: 'To describe recent consumer research',
                    B: 'To explain delays to a product release',
                    C: 'To announce updates to a vehicle',
                    D: 'To report on a vehicle usability test'
                },
                correctAnswer: 'C',
                classification: 'P7_PURPOSE',
                translation: '웹페이지의 목적은 무엇인가?\n(A) 최근 소비자 조사 설명\n(B) 제품 출시 지연 설명\n(C) 차량의 업데이트 사항 발표\n(D) 차량 사용성 테스트 보고',
                explanation: "Nozawa 10 신모델의 네비게이션, 컵홀더, 스피커, 적재 공간 등 새로워진 기능들을 소개하고 있으므로 차량 업데이트 발표가 목적입니다."
            },
            {
                id: 'v3-p7-t5-multi-set13-q2',
                questionNo: 187,
                text: 'According to the Web page, what is bigger in the new Nozawa 10?',
                options: {
                    A: 'The storage space',
                    B: 'The steering wheel',
                    C: 'The engine',
                    D: 'The mirrors'
                },
                correctAnswer: 'A',
                classification: 'P7_DETAIL',
                translation: '웹페이지에 따르면, 신형 Nozawa 10에서 더 커진 것은?\n(A) 수납 공간(적재 공간)\n(B) 핸들\n(C) 엔진\n(D) 사이드미러',
                explanation: '웹페이지 마지막 부분에서 "expanded the cargo area by 29 liters(적재 공간을 29리터 확장했다)"고 언급했습니다.'
            },
            {
                id: 'v3-p7-t5-multi-set13-q3',
                questionNo: 188,
                text: 'What does Ms. Herrera indicate in the survey response?',
                options: {
                    A: 'She contacted the district manager.',
                    B: 'She plans to have the dealership repair her vehicle.',
                    C: 'She has recently been promoted to a new position.',
                    D: 'She has driven more than one Nozawa vehicle.'
                },
                correctAnswer: 'D',
                classification: 'P7_LINK',
                translation: 'Ms. Herrera는 설문 응답에서 무엇을 나타내는가?\n(A) 구역 매니저에게 연락했다.\n(B) 대리점에서 차량을 수리할 계획이다.\n(C) 최근 새로운 직책으로 승진했다.\n(D) 한 대 이상의 Nozawa 차량을 운전해 본 적이 있다.',
                explanation: '설문 응답 첫 문장에서 "I\'ve been a Nozawa customer for more than a decade(10년 넘게 고정 고객이었다)"라고 했으며, 신형 모델을 "previous models(이전 모델들)"와 비교하고 있으므로 여러 대를 운전해 보았음을 알 수 있습니다.'
            },
            {
                id: 'v3-p7-t5-multi-set13-q4',
                questionNo: 189,
                text: 'Where in the vehicle would Ms. Herrera prefer to have air vents?',
                options: {
                    A: 'Near the rear seats',
                    B: 'Between the front seats',
                    C: 'Next to the display screen',
                    D: 'On the dashboard'
                },
                correctAnswer: 'B',
                classification: 'P7_LINK',
                translation: 'Ms. Herrera는 차량의 어느 위치에 에어컨 통풍구가 있기를 선호하는가?\n(A) 뒷좌석 근처\n(B) 앞좌석 사이\n(C) 디스플레이 화면 옆\n(D) 대시보드 위',
                explanation: '웹페이지에서 앞좌석 사이(between the front seats)에 컵홀더가 생겼다고 했고, Herrera 씨는 그 자리에 대신 에어컨 통풍구가 있었으면 좋았을 것이라고 언급했습니다.'
            },
            {
                id: 'v3-p7-t5-multi-set13-q5',
                questionNo: 190,
                text: 'What needs to be corrected?',
                options: {
                    A: 'The vehicle service records',
                    B: 'A navigation device',
                    C: 'Customer contact information',
                    D: 'The stereo system'
                },
                correctAnswer: 'B',
                classification: 'P7_LINK',
                translation: '무엇이 수정되어야 하는가?\n(A) 차량 서비스 기록\n(B) 내비게이션 장치\n(C) 고객 연락처 정보\n(D) 스테레오 시스템',
                explanation: '메모에서 "NNI software update that fixes the bugs"라고 언급했는데, NNI는 웹페이지에서 설명한 내비게이션 인터페이스(Navigation Interface)이므로 내비게이션 장치의 오류 수정이 필요함을 알 수 있습니다.'
            }
        ]
    },
    {
        id: 'v3-p7-t5-multi-set14',
        setType: 'Triple',
        vol: 3,
        questionRange: '191-195',
        passages: [
            {
                id: 'v3-p7-t5-multi-set14-p1',
                contextType: 'P4',
                docType: 'WEB_PAGE',
                header: {
                    url: 'http://www.pinkbegoniafarms.com',
                    title: 'Pink Begonia Farms'
                },
                content: [
                    'Pink Begonia Farms is your one-stop shop for all your plant-related needs. Whether you are a landscape professional, a backyard gardener, or a houseplant enthusiast, we have just about everything you need! Some seeds, fertilizer, and equipment can be ordered online, but please come visit our nursery in person for a much larger selection.',
                    'Our sizable facility is divided into four distinct sections as follows:',
                    '• **North Gate**: indoor houseplants, tropical plants, exotics',
                    '• **South Gate**: plants and landscaping products sold in bulk quantities at wholesale prices',
                    '• **East Gate**: local landscape plants that grow well in our area and require little maintenance',
                    '• **West Gate**: herbs, vegetable plants, fruit and nut trees, and other edibles'
                ]
            },
            {
                id: 'v3-p7-t5-multi-set14-p2',
                contextType: 'P4',
                docType: 'NOTICE',
                header: {
                    title: 'Attention Pink Begonia Farms Customers!'
                },
                content: [
                    'We are changing to new ownership on April 1. Several other changes will follow, most notably renovation work that will cause the area where we service our bulk-order customers to be closed from April 1 through May 5.',
                    'Also, we would kindly request that if you use our baskets or wagons to move your purchased items to your car, please do not leave them in the middle of the parking area. Thanks!'
                ]
            },
            {
                id: 'v3-p7-t5-multi-set14-p3',
                contextType: 'P4',
                docType: 'REVIEW',
                header: {
                    url: 'http://www.retaileropinion.com/reviews/pinkbegoniafarms',
                    author: 'Daphne Weigand',
                    date: 'April 15'
                },
                content: [
                    "I had a wonderful experience shopping at Pink Begonia Farms. Recently I was preparing a client's property for sale, and I needed extensive landscaping work to be done. The front entryway needed extra color and greenery before I could show the house to potential buyers. Knowing nothing about plants, I asked the store staff to help me pick out an assortment of local favorites that would require very little manual watering or care. When finished, the house looked so much more inviting. Thanks Pink Begonia Farms for your excellent service!"
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t5-multi-set14-q1',
                questionNo: 191,
                text: 'What does the Web site mention about the online store?',
                options: {
                    A: 'It offers specials on a seasonal basis.',
                    B: 'It is scheduled to be launched in April.',
                    C: 'It features the most popular plants on its home page.',
                    D: 'It offers fewer items for sale than the physical store does.'
                },
                correctAnswer: 'D',
                classification: 'P7_DETAIL',
                translation: '웹사이트는 온라인 상점에 대해 무엇을 언급하고 있는가?\n(A) 계절별 특가를 제공한다.\n(B) 4월에 출시될 예정이다.\n(C) 홈페이지에 가장 인기 있는 식물을 선보인다.\n(D) 실제 매장보다 적은 품목을 판매한다.',
                explanation: '웹페이지 첫 번째 단락 끝에 "please come visit our nursery in person for a much larger selection(더 많은 선택권을 원하시면 저희 농장을 직접 방문해 주세요)"이라고 하여 오프라인 매장의 상품이 더 많음을 암시합니다.'
            },
            {
                id: 'v3-p7-t5-multi-set14-q2',
                questionNo: 192,
                text: 'What does the notice suggest about Pink Begonia Farms?',
                options: {
                    A: 'It provides containers for transporting plants.',
                    B: 'Its name will be changed soon.',
                    C: 'Its parking area is under construction.',
                    D: 'It will no longer allow discounted items to be returned.'
                },
                correctAnswer: 'A',
                classification: 'P7_INFERENCE',
                translation: '안내문은 Pink Begonia Farms에 대해 무엇을 시사하는가?\n(A) 식물 운반을 위한 용기(담는 도구)를 제공한다.\n(B) 이름이 곧 바뀔 것이다.\n(C) 주차장이 공사 중이다.\n(D) 더 이상 할인 품목의 반품을 허용하지 않는다.',
                explanation: '안내문에서 "if you use our baskets or wagons(저희의 바구니나 수레를 사용하신다면)"라고 언급했으므로 운반용 도구(containers)를 제공함을 알 수 있습니다.'
            },
            {
                id: 'v3-p7-t5-multi-set14-q3',
                questionNo: 193,
                text: 'What area of Pink Begonia Farms will reopen in May?',
                options: {
                    A: 'North Gate',
                    B: 'South Gate',
                    C: 'East Gate',
                    D: 'West Gate'
                },
                correctAnswer: 'B',
                classification: 'P7_LINK',
                translation: 'Pink Begonia Farms의 어느 구역이 5월에 다시 여는가?\n(A) 북문\n(B) 남문\n(C) 동문\n(D) 서문',
                explanation: '안내문에서 "area where we service our bulk-order customers to be closed from April 1 through May 5"라고 했는데, 웹페이지를 보면 대량 주문 고객(bulk-order customers)을 서비스하는 곳은 남문(South Gate) 프로젝트입니다.'
            },
            {
                id: 'v3-p7-t5-multi-set14-q4',
                questionNo: 194,
                text: "What most likely is Ms. Weigand's job?",
                options: {
                    A: 'Landscaper',
                    B: 'Event planner',
                    C: 'Real estate agent',
                    D: 'Nursery worker'
                },
                correctAnswer: 'C',
                classification: 'P7_INFERENCE',
                translation: 'Ms. Weigand의 직업은 무엇일 가능성이 높은가?\n(A) 조경사\n(B) 이벤트 플래너\n(C) 부동산 중개인\n(D) 농장 직원',
                explanation: '리뷰에서 "preparing a client\'s property for sale(고객의 매물을 판매하기 위해 준비 중이었다)"고 했으므로 부동산 중개인임을 추측할 수 있습니다.'
            },
            {
                id: 'v3-p7-t5-multi-set14-q5',
                questionNo: 195,
                text: 'What is implied about Ms. Weigand?',
                options: {
                    A: 'She has flowers delivered on a regular basis.',
                    B: 'She learned of the store through one of her clients.',
                    C: 'She plans to buy a house in the near future.',
                    D: 'She shopped in the East Gate section of the nursery.'
                },
                correctAnswer: 'D',
                classification: 'P7_LINK',
                translation: 'Ms. Weigand에 대해 암시된 것은?\n(A) 꽃을 정기적으로 배달받는다.\n(B) 고객 중 한 명을 통해 농장을 알게 되었다.\n(C) 가까운 미래에 집을 살 계획이다.\n(D) 농장의 동문 구역에서 쇼핑했다.',
                explanation: '그녀는 직원에게 "local favorites that would require very little manual watering or care(관리가 거의 필요 없는 지역 식물)"를 추천해달라고 했는데, 웹페이지 설명에 따르면 이러한 식물들이 위치한 곳은 동문(East Gate)입니다.'
            }
        ]
    },
    {
        id: 'v3-p7-t5-multi-set15',
        setType: 'Triple',
        vol: 3,
        questionRange: '196-200',
        passages: [
            {
                id: 'v3-p7-t5-multi-set15-p1',
                contextType: 'P6',
                docType: 'EMAIL',
                header: {
                    to: 'Thanda Peterson <thandapeterson@thandapeterson.com>',
                    from: 'Milos Adamek <milosa@wistartravel.org>',
                    date: 'April 17',
                    subject: 'Travel arrangements'
                },
                content: [
                    'Hello Thanda,',
                    "I hope you are well. I looked into available flights from Concord to Sumneyfeld for your writers' conference and discovered that discount carrier Alterr Airlines offers daily direct service on that route. The tentative itinerary would be:",
                    "**Concord depart:** Friday, May 8, 8:50 A.M.\n**Sumneyfeld arrive:** Friday, May 8, 11:05 A.M.\n**Sumneyfeld depart:** Monday, May 11, 1:20 P.M.\n**Concord arrive:** Monday, May 11, 3:35 P.M.",
                    "I will book this as soon as you confirm. Keep in mind on your return trip that the Sumneyfeld Airport is advising passengers to arrive a full two hours before departure because of extensive renovations being done there.",
                    "By the way, you might be interested in an excellent Peruvian lunch place near the Sumneyfeld Airport. Just let me know and I will give you the name.",
                    'Best,',
                    'Milos'
                ]
            },
            {
                id: 'v3-p7-t5-multi-set15-p2',
                contextType: 'P6',
                docType: 'EMAIL',
                header: {
                    to: 'Milos Adamek <milosa@wistartravel.org>',
                    from: 'Thanda Peterson <thandapeterson@thandapeterson.com>',
                    date: 'April 18',
                    subject: 'Re: Travel arrangements'
                },
                content: [
                    'Milos,',
                    "Quick update before you book. I will need a few days to consider whether I should depart for Sumneyfeld on May 8 or leave one day earlier. There is an early conference workshop the evening of May 7 that I might attend. Actually, a publisher representative with whom I would like to talk regarding my latest manuscript may be in attendance! I will let you know shortly.",
                    'Thanks so much for your help, as always.',
                    'Thanda'
                ]
            },
            {
                id: 'v3-p7-t5-multi-set15-p3',
                contextType: 'P6',
                docType: 'RECEIPT',
                header: {
                    title: 'Sumneyfeld Quick Taxi'
                },
                content: [
                    "Sumneyfeld Quick Taxi",
                    "555-0194",
                    "**Date:** May 7",
                    "**From:** Sumneyfeld Airport",
                    "**To:** Peru Dreaming Café, 98 Treetop Avenue",
                    "**Pickup:** 11:55 A.M.",
                    "**Drop off:** 12:04 P.M.",
                    "**Distance:** 1.2 miles",
                    "**Total:** $8.00",
                    "**Payment type:** [X] credit card [ ] cash",
                    "**Name on Credit Card:** Thanda Peterson",
                    "**Credit Card Number:** xxxx xxxx xxxx 5523"
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t5-multi-set15-q1',
                questionNo: 196,
                text: 'What is indicated about the Sumneyfeld Airport?',
                options: {
                    A: 'It is very near Ms. Peterson\'s hotel.',
                    B: 'It has new check-in staff.',
                    C: 'It is undergoing construction work.',
                    D: 'It often has delayed flight departures.'
                },
                correctAnswer: 'C',
                classification: 'P7_DETAIL',
                translation: 'Sumneyfeld 공항에 대해 나타난 사실은?\n(A) Ms. Peterson의 호텔에서 매우 가깝다.\n(B) 체크인 직원을 새로 채용했다.\n(C) 공사가 진행 중이다.\n(D) 항공편 출발 지연이 잦다.',
                explanation: '첫 번째 이메일에서 공항 소식을 전하며 "extensive renovations being done there(대규모 보수 공사가 진행 중이다)"라고 언급했습니다.'
            },
            {
                id: 'v3-p7-t5-multi-set15-q2',
                questionNo: 197,
                text: 'What is suggested about Ms. Peterson?',
                options: {
                    A: 'She frequently flies on Alterr Airlines.',
                    B: 'She has visited Sumneyfeld in the past.',
                    C: 'She often goes on business trips for her company.',
                    D: 'She has used Mr. Adamek\'s services before.'
                },
                correctAnswer: 'D',
                classification: 'P7_INFERENCE',
                translation: 'Ms. Peterson에 대해 암시된 것은?\n(A) Alterr 항공을 자주 이용한다.\n(B) 과거에 Sumneyfeld를 방문한 적이 있다.\n(C) 회사를 위해 출장을 자주 다닌다.\n(D) 이전에도 Mr. Adamek의 서비스를 이용한 적이 있다.',
                explanation: '두 번째 이메일 끝에 "as always(늘 그렇듯이)" 도움을 주어 감사하다고 말한 것에서 이전에도 거래가 있었음을 추측할 수 있습니다.'
            },
            {
                id: 'v3-p7-t5-multi-set15-q3',
                questionNo: 198,
                text: 'Who most likely is Ms. Peterson?',
                options: {
                    A: 'A news journalist',
                    B: 'A travel-magazine writer',
                    C: 'A food critic',
                    D: 'A book author'
                },
                correctAnswer: 'D',
                classification: 'P7_INFERENCE',
                translation: 'Ms. Peterson은 누구일 가능성이 가장 높은가?\n(A) 뉴스 기자\n(B) 여행 잡지 작가\n(C) 음식 평론가\n(D) 도서 저자',
                explanation: '두 번째 이메일에서 "latest manuscript(최신 원고)"와 "publisher representative(출판사 대표)"를 언급했으므로 도서 저자임을 알 수 있습니다.'
            },
            {
                id: 'v3-p7-t5-multi-set15-q4',
                questionNo: 199,
                text: 'What did Ms. Peterson most likely do in response to advice?',
                options: {
                    A: 'She visited a restaurant.',
                    B: 'She took advantage of a free shuttle service.',
                    C: 'She met with a representative.',
                    D: 'She changed airlines.'
                },
                correctAnswer: 'A',
                classification: 'P7_LINK',
                translation: 'Ms. Peterson은 조언에 대한 반응으로 무엇을 했겠는가?\n(A) 식당을 방문했다.\n(B) 무료 셔틀 서비스를 이용했다.\n(C) 대표자와 만났다.\n(D) 항공사를 변경했다.',
                explanation: 'Milos가 공항 근처의 페루 요리 전문점(Peruvian lunch place)을 추천하겠다고 제안했고, 택시 영수증에 목적지가 "Peru Dreaming Café"로 적혀 있는 것으로 보아 해당 조언에 따라 식당을 방문했음을 알 수 있습니다.'
            },
            {
                id: 'v3-p7-t5-multi-set15-q5',
                questionNo: 200,
                text: 'What can be concluded about Ms. Peterson based on the receipt?',
                options: {
                    A: 'She paid in cash for transportation.',
                    B: 'She arrived at the airport later than recommended.',
                    C: 'She rode a bus to the conference venue.',
                    D: 'She decided to attend an extra conference event.'
                },
                correctAnswer: 'D',
                classification: 'P7_LINK',
                translation: '영수증을 통해 Ms. Peterson에 대해 알 수 있는 결론은 무엇인가?\n(A) 교통비를 현금으로 지불했다.\n(B) 권장된 시간보다 공항에 늦게 도착했다.\n(C) 컨퍼런스 장소까지 버스를 타고 갔다.\n(D) 추가적인 컨퍼런스 행사에 참석하기로 결정했다.',
                explanation: '두 번째 이메일에서 그녀는 5월 7일 저녁 워크숍 참석 여부를 고민하겠다고 했는데, 택시 영수증 날짜가 5월 7일인 것으로 보아 하루 일찍 도착하여 행사에 참석하기로 결정했음을 증명합니다.'
            }
        ]
    }
];
