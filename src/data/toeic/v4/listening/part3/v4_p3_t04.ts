import { Part3Set } from '../types';

export const test4Data: Part3Set[] = [
    {
        testId: 4,
        vol: 4,
        setId: "v4-p3-t04-s1",
        contextType: "C1. 항공 / 교통",
        questionRange: "32-34",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-32-34.mp3",
        questions: [
            {
                id: "v4-p3-t04-q32",
                text: "Where most likely are the speakers?",
                classification: "WHO_LOC",
                options: {
                    A: "At a ferry terminal",
                    B: "At a swimming area",
                    C: "At a shopping mall",
                    D: "At a restaurant"
                },
                correctAnswer: "A",
                translation: "화자들은 어디에 있겠는가?",
                translation_A: "페리 터미널",
                translation_B: "수영 구역",
                translation_C: "쇼핑몰",
                translation_D: "식당"
            },
            {
                id: "v4-p3-t04-q33",
                text: "What problem does the man mention?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "Some repairs are needed.",
                    B: "A business is understaffed.",
                    C: "The weather is bad.",
                    D: "Some tickets are sold out."
                },
                correctAnswer: "C",
                translation: "남자는 어떤 문제를 언급하는가?",
                translation_A: "수리가 필요하다.",
                translation_B: "업체에 일손이 부족하다.",
                translation_C: "날씨가 궂다.",
                translation_D: "표가 매진됐다."
            },
            {
                id: "v4-p3-t04-q34",
                text: "What will the woman do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Read a book",
                    B: "Get a meal",
                    C: "Watch a movie",
                    D: "Go to a hotel"
                },
                correctAnswer: "B",
                translation: "여자는 다음으로 무엇을 할 것인가?",
                translation_A: "독서",
                translation_B: "식사",
                translation_C: "영화 감상",
                translation_D: "호텔로 이동"
            }
        ],
        script: [
            { speaker: "Woman", text: "Excuse me. Wasn't the ferry to Osaka supposed to leave at ten o'clock?" },
            { speaker: "Man", text: "Yes, but the port authority has suspended all marine traffic due to rough water." },
            { speaker: "Woman", text: "I see. Does that mean the ferry is canceled for the day?" },
            { speaker: "Man", text: "The storm is expected to pass in about three hours. Service will resume as normal then. Your ticket will still be valid tonight." },
            { speaker: "Woman", text: "All right. Then I guess I'll grab some lunch nearby." },
            { speaker: "Man", text: "I highly recommend the sandwiches and soup at Mary's Cafe." }
        ],
        translation: "여: 실례합니다. 오사카행 페리가 10시에 출발하기로 되어 있던 것 아닌가요?\n남: 네, 그런데 항만 당국에서 거친 파도 때문에 모든 해상 교통을 중단시켰어요.\n여: 그렇군요. 페리가 종일 취소된다는 뜻인가요?\n남: 이번 폭풍은 약 3시간 후 지나갈 것으로 예상됩니다. 하지만 운항은 그 이후에 정상화될 겁니다. 표는 자정까지 유효할 거예요.\n여: 알겠습니다. 그럼 근처에서 잠깐 점심 식사를 해야겠네요.\n남: 메리 카페에서 샌드위치와 수프를 드시는 걸 적극 추천해요."
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p3-t04-s2",
        contextType: "B4. 일반문의",
        questionRange: "35-37",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-35-37.mp3",
        questions: [
            {
                id: "v4-p3-t04-q35",
                text: "Who most likely is the woman?",
                classification: "WHO_LOC",
                options: {
                    A: "An author",
                    B: "A librarian",
                    C: "A bookseller",
                    D: "An event organizer"
                },
                correctAnswer: "B",
                translation: "여자는 누구이겠는가?",
                translation_A: "저자",
                translation_B: "사서",
                translation_C: "책 판매자",
                translation_D: "행사 주최자"
            },
            {
                id: "v4-p3-t04-q36",
                text: "What does the man say happened this morning?",
                classification: "WHAT_WHICH",
                options: {
                    A: "He received an e-mail notification.",
                    B: "He applied for a job online.",
                    C: "He lost a receipt.",
                    D: "He made a delivery."
                },
                correctAnswer: "A",
                translation: "남자는 오늘 오전 어떤 일이 있었다고 말하는가?",
                translation_A: "이메일 알림을 받았다.",
                translation_B: "온라인으로 일자리에 지원했다.",
                translation_C: "영수증을 잃어버렸다.",
                translation_D: "배달을 했다."
            },
            {
                id: "v4-p3-t04-q37",
                text: "What does the woman offer to do?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Attend an event",
                    B: "Fill out an online form",
                    C: "Place an order",
                    D: "Search for an item"
                },
                correctAnswer: "D",
                translation: "여자는 무엇을 하겠다고 제안하는가?",
                translation_A: "행사 참석하기",
                translation_B: "온라인 서식 작성하기",
                translation_C: "주문 넣기",
                translation_D: "물건 찾아보기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Good morning. Are you looking for any particular library book, magazine, or newspaper?" },
            { speaker: "Man", text: "Actually, no. I'm here because I got an e-mail this morning telling me that I have an overdue book. But I returned it to the after-hours bin last night." },
            { speaker: "Woman", text: "Sometimes a book gets returned and put back on the shelves without being entered into the system first. I can take a look. Can you tell me the title?" }
        ],
        translation: "여: 안녕하세요, 특정한 도서관 책이나 잡지, 신문을 찾고 계신가요?\n남: 실은 그게 아니고요. 오늘 오전에 반납 기한이 지난 책이 있다는 이메일을 받고 왔어요. 그런데 저는 어젯밤에 운영 시간 이후 반납함에 반납했거든요.\n여: 가끔 도서가 반납되면 시스템에 먼저 입력되지 않은 채 책장에 다시 꽂히기도 해요. 제가 한번 볼게요. 제목을 말씀해 주시겠어요?"
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p3-t04-s3",
        contextType: "B4. 일반문의",
        questionRange: "38-40",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-38-40.mp3",
        questions: [
            {
                id: "v4-p3-t04-q38",
                text: "What type of business does the man most likely work for?",
                classification: "WHO_LOC",
                options: {
                    A: "A moving company",
                    B: "A furniture manufacturer",
                    C: "A painting company",
                    D: "A catering service"
                },
                correctAnswer: "C",
                translation: "남자는 어떤 종류의 업체에서 일하겠는가?",
                translation_A: "이사업체",
                translation_B: "가구 제조업체",
                translation_C: "페인팅 업체",
                translation_D: "케이터링 업체"
            },
            {
                id: "v4-p3-t04-q39",
                text: "What point does the man emphasize?",
                classification: "WHAT_WHICH",
                options: {
                    A: "A deposit is required before work can begin.",
                    B: "A price may be higher than expected.",
                    C: "A discount is available for a limited time.",
                    D: "A schedule cannot be changed easily."
                },
                correctAnswer: "B",
                translation: "남자는 어떤 점을 강조하는가?",
                translation_A: "작업이 시작되기 전에 착수금, 보증금이 필요하다.",
                translation_B: "가격이 예상보다 높을 수 있다.",
                translation_C: "한시적으로 할인이 된다.",
                translation_D: "일정은 쉽게 변경할 수 없다."
            },
            {
                id: "v4-p3-t04-q40",
                text: "What does the woman ask about?",
                classification: "WHAT_WHICH",
                options: {
                    A: "Signing a contract",
                    B: "Purchasing specialized tools",
                    C: "Moving some furniture",
                    D: "Seeing some samples"
                },
                correctAnswer: "C",
                translation: "여자는 무엇에 대해 물어보는가?",
                translation_A: "계약서 서명",
                translation_B: "전문 도구 구매",
                translation_C: "가구 이동",
                translation_D: "견본 확인"
            }
        ],
        script: [
            { speaker: "Man", text: "Hi. I'm Malik. I talked to you this morning on the phone about a price quote for some painting you want done." },
            { speaker: "Woman", text: "Oh, hi. Come in. Yes, I want to change the color in the dining room to something lighter." },
            { speaker: "Man", text: "Not a problem. But I do want to stress that the quote may be higher than you expected because going from a darker color to a lighter one requires more than one coat of paint." },
            { speaker: "Woman", text: "I understand. And will you move the table and chairs out of the room before you start?" },
            { speaker: "Man", text: "That shouldn't be necessary. We can cover them with a drop cloth." }
        ],
        translation: "남: 안녕하세요, 말릭입니다. 오늘 오전 전화로 원하시는 페인팅 작업의 가격 견적에 대해 말씀드렸죠.\n여: 아, 안녕하세요. 들어오세요. 네, 식사 공간을 더 밝은 색상으로 바꾸고 싶어요.\n남: 좋습니다. 그런데 견적이 예상하시는 것보다 높을 수 있다는 점을 강조하고 싶어요. 어두운 색상에서 밝은 색상으로 가려면 여러 번의 도색이 필요해서요.\n여: 알겠습니다. 시작하시기 전에 탁자와 의자를 방 밖으로 옮길 건가요?\n남: 그럴 필요 없습니다. 덮개 천으로 씌우면 돼요."
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p3-t04-s4",
        contextType: "B3. 편의시설 / 보건",
        questionRange: "41-43",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-41-43.mp3",
        questions: [
            {
                id: "v4-p3-t04-q41",
                text: "Where does the man work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a community park",
                    B: "At a fitness center",
                    C: "At a public beach",
                    D: "At a sports equipment store"
                },
                correctAnswer: "B",
                translation: "남자는 어디서 일하는가?",
                translation_A: "근린공원",
                translation_B: "피트니스 센터",
                translation_C: "공공 해수욕장",
                translation_D: "스포츠 장비 매장"
            },
            {
                id: "v4-p3-t04-q42",
                text: "What is the purpose of the woman's visit?",
                classification: "WHY_REASON",
                options: {
                    A: "She is applying for a job.",
                    B: "She has a complaint.",
                    C: "She needs specific directions.",
                    D: "She is interested in a membership."
                },
                correctAnswer: "D",
                translation: "여자가 방문한 목적은?",
                translation_A: "일자리에 지원하려고",
                translation_B: "불만이 있어서",
                translation_C: "구체적인 길 안내가 필요해서",
                translation_D: "회원 가입에 관심이 있어서"
            },
            {
                id: "v4-p3-t04-q43",
                text: "What will the woman most likely do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Join a team",
                    B: "Go on a tour",
                    C: "Make a phone call",
                    D: "Fill out an application"
                },
                correctAnswer: "B",
                translation: "여자는 다음으로 무엇을 하겠는가?",
                translation_A: "팀에 합류하기",
                translation_B: "견학하기",
                translation_C: "전화하기",
                translation_D: "지원서 작성하기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Hi. This is my first time in here. Nice place! Looks like you've got lots of state-of-the-art equipment." },
            { speaker: "Man", text: "Yes, we just opened this week. All the exercise bikes, treadmills, and workout stations that you see are brand-new." },
            { speaker: "Woman", text: "Great! I'm considering joining. My office is right around the corner." },
            { speaker: "Man", text: "Well, here's a brochure with a description of our membership levels. I'm happy to answer any questions." },
            { speaker: "Woman", text: "Thanks. I do like to swim a few times a week. Do you have a pool?" },
            { speaker: "Man", text: "We do. Why don't we start by walking around so I can show you all of our facilities?" }
        ],
        translation: "여: 안녕하세요. 여긴 처음 오는데, 멋진 곳이네요! 최신 장비가 많은 것 같아요.\n남: 네, 이번 주에 문을 열었어요. 보시는 실내용 자전거, 러닝 머신, 운동 기구들이 모두 새것입니다.\n여: 좋네요! 가입할까 생각 중이에요. 사무실이 아주 가까워요.\n남: 저희 회원 등급에 대해 설명하는 책자가 여기 있어요. 어떤 질문이든 해 주세요.\n여: 감사합니다. 일주일에 몇 번 수영을 하고 싶어요. 수영장이 있나요?\n남: 있습니다. 둘러보면서 저희 시설을 보여 드리면 어떨까요?"
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p3-t04-s5",
        contextType: "B4. 일반문의",
        questionRange: "44-46",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-44-46.mp3",
        questions: [
            {
                id: "v4-p3-t04-q44",
                text: "Who most likely is the man?",
                classification: "WHO_LOC",
                options: {
                    A: "A janitor",
                    B: "A property manager",
                    C: "A carpenter",
                    D: "An interior designer"
                },
                correctAnswer: "B",
                translation: "남자는 누구이겠는가?",
                translation_A: "수위",
                translation_B: "건물 관리인",
                translation_C: "목수",
                translation_D: "실내 디자이너"
            },
            {
                id: "v4-p3-t04-q45",
                text: "What does the woman say recently happened?",
                classification: "WHAT_WHICH",
                options: {
                    A: "She earned a degree.",
                    B: "She won an award.",
                    C: "She got a promotion.",
                    D: "She transferred to a new location."
                },
                correctAnswer: "C",
                translation: "여자는 최근 무슨 일이 있었다고 말하는가?",
                translation_A: "학위를 받았다.",
                translation_B: "상을 받았다.",
                translation_C: "승진했다.",
                translation_D: "새로운 곳으로 옮겼다."
            },
            {
                id: "v4-p3-t04-q46",
                text: "What will the man do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Make a phone call",
                    B: "Prepare a contract",
                    C: "Drop off a key",
                    D: "Log some work hours"
                },
                correctAnswer: "A",
                translation: "남자는 다음으로 무엇을 할 것인가?",
                translation_A: "전화하기",
                translation_B: "계약서 준비하기",
                translation_C: "열쇠 가져다주기",
                translation_D: "업무 시간 기록하기"
            }
        ],
        script: [
            { speaker: "Man", text: "Hello. What brings you into our leasing office today?" },
            { speaker: "Woman", text: "Hi. I currently live in unit 217, but I'm wondering if there are any larger units available to rent in the building." },
            { speaker: "Man", text: "Let me see. Apartment 410 is quite large, and the lease on it ends this November. It's a thousand per month. Does that interest you?" },
            { speaker: "Woman", text: "I did just get promoted at work recently, so I can afford to spend more. So, that won't be a problem." },
            { speaker: "Man", text: "Great. I'll call the current tenant and we can figure out a time for a viewing." }
        ],
        translation: "남: 안녕하세요. 오늘 저희 임대 사무소에 무슨 일로 오셨나요?\n여: 안녕하세요. 현재 217호에 살고 있는데 건물에 임대 가능한 더 큰 호실이 있는지 궁금해서요.\n남: 한번 보죠. 410호가 꽤 넓은데, 임대 계약이 올해 11월에 끝납니다. 한 달에 1,000달러예요. 관심 있으세요?\n여: 최근 직장에서 승진을 해서 더 낼 여력이 있어요. 그러니 괜찮아요.\n남: 좋습니다. 현재 세입자에게 전화해서 보러 갈 시간을 알아볼게요."
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p3-t04-s6",
        contextType: "A3. 마케팅 / 비즈니스",
        questionRange: "47-49",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-47-49.mp3",
        questions: [
            {
                id: "v4-p3-t04-q47",
                text: "According to the woman, what has recently happened at her business?",
                classification: "WHAT_WHICH",
                options: {
                    A: "Customers have complained.",
                    B: "Inspections have been conducted.",
                    C: "Online orders have increased.",
                    D: "Shipments have been incomplete."
                },
                correctAnswer: "C",
                translation: "여자에 따르면, 여자의 업체에 최근 어떤 일이 있었는가?",
                translation_A: "고객들이 항의했다.",
                translation_B: "조사가 이뤄졌다.",
                translation_C: "온라인 주문이 증가했다.",
                translation_D: "수송품이 불완전했다."
            },
            {
                id: "v4-p3-t04-q48",
                text: "What can the man's company do?",
                classification: "WHAT_WHICH",
                options: {
                    A: "Provide safety training",
                    B: "Post demonstration videos",
                    C: "Acquire more warehouse space",
                    D: "Create customer surveys"
                },
                correctAnswer: "D",
                translation: "남자의 업체는 무엇을 할 수 있는가?",
                translation_A: "안전 교육 제공",
                translation_B: "시연 동영상 게시",
                translation_C: "창고 공간 추가 확보",
                translation_D: "고객 설문 조사 개발"
            },
            {
                id: "v4-p3-t04-q49",
                text: "What does the woman say she could offer her customers?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "A discount",
                    B: "Expedited shipping",
                    C: "Free product samples",
                    D: "A personal consultation"
                },
                correctAnswer: "A",
                translation: "여자는 고객들에게 무엇을 제공할 수 있다고 말하는가?",
                translation_A: "할인",
                translation_B: "빠른 배송",
                translation_C: "무료 제품 견본",
                translation_D: "개인 상담"
            }
        ],
        script: [
            { speaker: "Man", text: "Hello, Ms. Bajaj. I'm glad we have a chance to meet today to discuss your business. What's your company's main goal?" },
            { speaker: "Woman", text: "Well, recently, my craft supply store has started receiving a lot of online orders. It's important that I get feedback from those customers about the products that I'm selling." },
            { speaker: "Man", text: "We can design an online survey for you. It's automatically e-mailed out to your customers a week after their order is delivered. We've had a lot of success getting people to respond to those." },
            { speaker: "Woman", text: "That's a great idea. Then perhaps I could offer a future discount to any customer who completes the survey." }
        ],
        translation: "남: 안녕하세요, 바자즈 씨. 오늘 만나서 당신의 사업에 대해 얘기 나눌 기회가 생겨 기쁩니다. 회사의 주요 목표는 무엇인가요?\n여: 최근 제 공예용품점이 온라인 주문을 많이 받기 시작했어요. 제가 판매하는 제품에 대해 그런 고객들의 의견을 듣는 것이 중요합니다.\n남: 저희가 온라인 설문 조사를 설계해 드릴 수 있습니다. 주문 건이 배송되고 나서 일주일 후, 고객에게 자동으로 이메일이 발송됩니다. 사람들이 조사에 응답하게 한 성공 사례가 많이 있어요.\n여: 좋은 생각이네요. 그럼 설문 조사를 작성한 고객에게 추후 할인을 제공할 수 있겠네요."
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p3-t04-s7",
        contextType: "B4. 일반문의",
        questionRange: "50-52",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-50-52.mp3",
        questions: [
            {
                id: "v4-p3-t04-q50",
                text: "Where most likely are the speakers?",
                classification: "WHO_LOC",
                options: {
                    A: "At a farm",
                    B: "At a landscaping company",
                    C: "At a hotel",
                    D: "At a catering firm"
                },
                correctAnswer: "C",
                translation: "화자들은 어디에 있겠는가?",
                translation_A: "농장",
                translation_B: "조경업체",
                translation_C: "호텔",
                translation_D: "케이터링 업체"
            },
            {
                id: "v4-p3-t04-q51",
                text: "What type of event is going to take place?",
                classification: "WHAT_WHICH",
                options: {
                    A: "A wedding",
                    B: "A flower exposition",
                    C: "A grand opening",
                    D: "A birthday party"
                },
                correctAnswer: "A",
                translation: "어떤 행사가 열릴 예정인가?",
                translation_A: "결혼식",
                translation_B: "꽃 박람회",
                translation_C: "개업식",
                translation_D: "생일 파티"
            },
            {
                id: "v4-p3-t04-q52",
                text: "What does the woman say she will do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Sign a receipt",
                    B: "Adjust a schedule",
                    C: "Add items to an order",
                    D: "Call a supervisor"
                },
                correctAnswer: "D",
                translation: "여자는 무엇을 할 것이라고 말하는가?",
                translation_A: "영수증에 서명하기",
                translation_B: "일정 조정하기",
                translation_C: "주문에 물품 추가하기",
                translation_D: "관리자에게 전화하기"
            }
        ],
        script: [
            { speaker: "Man 1", text: "Hello. I'm from District Flower Store, and I have your centerpiece order." },
            { speaker: "Man 2", text: "Let me get the hotel's event manager here; she's the one that ordered. Yuliya? You have a delivery from District Flower Store at reception." },
            { speaker: "Woman", text: "Hi! I'm glad you're early. The wedding's this evening, but we're already setting up the ballroom." },
            { speaker: "Man 1", text: "I'll need you to acknowledge receipt. Could you sign here? And then, where should I unload your calla lily centerpieces?" },
            { speaker: "Woman", text: "Calla lilies? I ordered lilacs for the wedding centerpieces!" },
            { speaker: "Man 1", text: "Oh, I wouldn't know. I just deliver." },
            { speaker: "Woman", text: "Well, let me call your boss. We need this sorted out right away." }
        ],
        translation: "남1: 안녕하세요, 디스트릭트 플라워 스토어인데요, 주문하신 꽃 장식을 가져왔어요.\n남2: 호텔 행사 관리자를 부를게요, 주문한 사람이거든요. 율리야? 디스트릭트 플라워 스토어에서 리셉션에 배달 와 있어요.\n여: 안녕하세요! 일찍 와 주셔서 좋네요. 결혼식은 오늘 저녁인데 이미 대연회장을 준비하고 있거든요.\n남1: 수령을 확인해 주셔야 합니다. 여기 서명해 주시겠어요? 그럼 칼라 꽃 장식을 어디에 내려 드릴까요?\n여: 칼라요? 저는 결혼식 꽃 장식으로 라일락을 주문했는데요!\n남1: 아, 저는 모릅니다. 저는 배달만 해요.\n여: 사장님께 전화해 볼게요. 당장 해결해야 해요."
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p3-t04-s8",
        contextType: "B4. 일반문의",
        questionRange: "53-55",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-53-55.mp3",
        questions: [
            {
                id: "v4-p3-t04-q53",
                text: "What kind of business do the men most likely work for?",
                classification: "WHO_LOC",
                options: {
                    A: "A fencing company",
                    B: "A landscaping service",
                    C: "A roofing company",
                    D: "An auto repair shop"
                },
                correctAnswer: "C",
                translation: "남자들은 어떤 종류의 업체에서 일하겠는가?",
                translation_A: "울타리 업체",
                translation_B: "조경 서비스 업체",
                translation_C: "지붕 공사 업체",
                translation_D: "자동차 정비소"
            },
            {
                id: "v4-p3-t04-q54",
                text: "Why is the woman relieved?",
                classification: "WHY_REASON",
                options: {
                    A: "Some damage is minor.",
                    B: "A delivery arrived early.",
                    C: "Customer reviews are positive.",
                    D: "The weather forecast is good."
                },
                correctAnswer: "A",
                translation: "여자는 왜 안심하는가?",
                translation_A: "훼손이 경미해서",
                translation_B: "택배가 일찍 도착해서",
                translation_C: "고객 후기가 긍정적이어서",
                translation_D: "일기 예보가 좋아서"
            },
            {
                id: "v4-p3-t04-q55",
                text: "What will the woman do on Tuesday?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Wash her car",
                    B: "Close her store",
                    C: "Take some measurements",
                    D: "Look at some material samples"
                },
                correctAnswer: "B",
                translation: "여자는 화요일에 무엇을 할 것인가?",
                translation_A: "세차",
                translation_B: "가게 문 닫기",
                translation_C: "치수 재기",
                translation_D: "재료 견본 보기"
            }
        ],
        script: [
            { speaker: "Man 1", text: "Excuse me, Ms. Campbell. My engineer, Adisa, is still on your roof, but I just wanted to let you know we're almost done with the inspection." },
            { speaker: "Woman", text: "How does everything look?" },
            { speaker: "Man 1", text: "Oh, here's Adisa now. He can answer that." },
            { speaker: "Man 2", text: "I conducted a thorough inspection. There's no structural damage. All of the support beams are intact, but we'll have to replace some of the shingles that were blown away in the storm." },
            { speaker: "Woman", text: "Well that's a relief. I was worried that I'd need major repairs." },
            { speaker: "Man 2", text: "I'm afraid you'll have to close your store while we replace the shingles. But we'll be able to finish in one day." },
            { speaker: "Man 1", text: "Does Tuesday work for you?" },
            { speaker: "Woman", text: "That's fine." }
        ],
        translation: "남1: 실례합니다, 캠벨 씨. 저희 기술자 아디사가 아직 지붕 위에 있긴 하지만, 점검을 거의 마쳤다고 알려 드리려고요.\n여: 전부 어떤가요?\n남1: 아, 아디사가 지금 왔네요. 대답해 드릴 수 있을 겁니다.\n남2: 제가 철저히 점검했는데요. 구조상의 손상은 없습니다. 지지대는 모두 온전한데요, 폭풍에 날아가 버린 지붕널을 교체해야 할 겁니다.\n여: 그거 다행이네요. 큰 수리를 해야 할까 봐 걱정했거든요.\n남2: 지붕널을 교체하는 동안 가게를 닫으셔야 할 것 같습니다. 하지만 하루만에 끝낼 수 있어요.\n남1: 화요일 괜찮으세요?\n여: 좋아요."
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p3-t04-s9",
        contextType: "C1. 항공 / 교통",
        questionRange: "56-58",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-56-58.mp3",
        questions: [
            {
                id: "v4-p3-t04-q56",
                text: "Why does the man apologize?",
                classification: "WHY_REASON",
                options: {
                    A: "He missed a meeting.",
                    B: "He has a poor Internet connection.",
                    C: "He failed to complete an assignment.",
                    D: "He lost his employee badge."
                },
                correctAnswer: "A",
                translation: "남자는 왜 사과하는가?",
                translation_A: "회의에 못 들어가서",
                translation_B: "인터넷 연결이 좋지 않아서",
                translation_C: "업무를 완료하지 못해서",
                translation_D: "사원증을 잃어버려서"
            },
            {
                id: "v4-p3-t04-q57",
                text: "Why does the woman say, \"Well, there is a rapid-transit bus service\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To praise improvements to a system",
                    B: "To correct a mistaken assumption",
                    C: "To express dissatisfaction",
                    D: "To justify a decision"
                },
                correctAnswer: "B",
                translation: "여자가 \"음, 고속 버스가 있잖아요\"라고 말하는 이유는?",
                translation_A: "제도 개선을 칭찬하려고",
                translation_B: "잘못된 추정을 바로잡으려고",
                translation_C: "불만을 표시하려고",
                translation_D: "결정을 정당화하려고"
            },
            {
                id: "v4-p3-t04-q58",
                text: "What will the woman do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Download a ticket",
                    B: "Pick up some clients",
                    C: "Activate a key card",
                    D: "Forward some Web-site links"
                },
                correctAnswer: "D",
                translation: "여자는 다음으로 무엇을 할 것인가?",
                translation_A: "티켓 다운로드하기",
                translation_B: "고객 데리러 가기",
                translation_C: "카드키 작동시키기",
                translation_D: "웹사이트 링크 보내기"
            }
        ],
        script: [
            { speaker: "Man", text: "Hi, Erina. I'm sorry about missing the morning meeting! My commute was horrendous." },
            { speaker: "Woman", text: "No worries. The meeting notes will be sent out. What happened?" },
            { speaker: "Man", text: "The Metro system's renovating some station platforms, and it added an extra half hour to my commute. Trains in both directions are only using one track, and the train's my only option!" },
            { speaker: "Woman", text: "Well, there is a rapid-transit bus service." },
            { speaker: "Man", text: "I wasn't aware of that. I'm still new to this city. How do I get more information?" },
            { speaker: "Woman", text: "I'll send you links to their Web site and system map." }
        ],
        translation: "남: 안녕하세요, 에리나. 오전 회의에 못 들어가서 미안해요! 출근길이 끔찍했어요.\n여: 괜찮아요. 회의록이 발송될 거예요. 무슨 일이 있었나요?\n남: 지하철 일부 역 플랫폼이 보수 공사 중이라서 제 출근 시간이 30분이나 늘었어요. 단 하나의 선로를 양방향 열차가 모두 쓰고 있는데, 그 열차가 제 유일한 선택지예요!\n여: 음, 고속 버스가 있잖아요.\n남: 몰랐어요. 아직 이 도시는 잘 몰라요. 자세한 정보는 어떻게 알 수 있을까요?\n여: 웹사이트와 교통 체제 링크를 보내 드릴게요."
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p3-t04-s10",
        contextType: "A3. 마케팅 / 비즈니스",
        questionRange: "59-61",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-59-61.mp3",
        questions: [
            {
                id: "v4-p3-t04-q59",
                text: "Who is the woman?",
                classification: "WHO_LOC",
                options: {
                    A: "An architect",
                    B: "A clothing designer",
                    C: "A construction manager",
                    D: "A department store director"
                },
                correctAnswer: "B",
                translation: "여자는 누구인가?",
                translation_A: "건축가",
                translation_B: "의상 디자이너",
                translation_C: "공사 관리자",
                translation_D: "백화점 관리자"
            },
            {
                id: "v4-p3-t04-q60",
                text: "Why does the woman say, \"They usually market to a younger clientele\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To reject a suggestion",
                    B: "To justify a decision",
                    C: "To express disappointment",
                    D: "To ask for clarification"
                },
                correctAnswer: "A",
                translation: "여자가 \"거긴 보통 더 젊은 고객들을 대상으로 하잖아요\"라고 말하는 이유는?",
                translation_A: "제안을 거절하려고",
                translation_B: "결정을 정당화하려고",
                translation_C: "실망을 표시하려고",
                translation_D: "해명을 요구하려고"
            },
            {
                id: "v4-p3-t04-q61",
                text: "What does the man say he will give the woman?",
                classification: "WHAT_WHICH",
                options: {
                    A: "An area map",
                    B: "A list of businesses",
                    C: "Some photographs",
                    D: "Some measurements"
                },
                correctAnswer: "B",
                translation: "남자는 여자에게 무엇을 주겠다고 말하는가?",
                translation_A: "지역 지도",
                translation_B: "업체 목록",
                translation_C: "사진",
                translation_D: "치수"
            }
        ],
        script: [
            { speaker: "Man", text: "Hello, Silvia. Good to see you again. My consultancy firm has been working hard to help you grow your clothing company." },
            { speaker: "Woman", text: "Thanks. I never expected so much attention for my clothing designs, but I'm so pleased with the reactions." },
            { speaker: "Man", text: "OK. What do you think about approaching Regents department stores?" },
            { speaker: "Woman", text: "They usually market to a younger clientele." },
            { speaker: "Man", text: "I see. Let me get you a list of other stores we also had in mind." }
        ],
        translation: "남: 안녕하세요, 실비아. 다시 만나서 반가워요. 저희 자문 회사는 고객님의 의류 회사가 성장하는 데 보탬이 되기 위해 열심히 노력하고 있습니다.\n여: 감사합니다. 제 의류 디자인이 그렇게 크게 주목받을지 전혀 예상하지 못했지만 반응에 굉장히 기뻐요.\n남: 네, 리젠트 백화점과 접촉하는 건 어떻게 생각하세요?\n여: 거긴 보통 더 젊은 고객들을 대상으로 하잖아요.\n남: 알겠어요. 저희가 또 염두에 둔 다른 매장 목록을 드리죠."
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p3-t04-s11",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "62-64",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-62-64.mp3",
        image: "/images/ETS_TOEIC_4/Test_04/Part_03/v4_p3_t04_q62.png",
        questions: [
            {
                id: "v4-p3-t04-q62",
                text: "Look at the graphic. Who is the woman?",
                classification: "GRAPHIC",
                options: {
                    A: "Liliana Flores",
                    B: "Svetlana Popova",
                    C: "Lauren Campbell",
                    D: "So-Jin Park"
                },
                correctAnswer: "B",
                translation: "시각 정보에 의하면, 여자는 누구인가?",
                translation_A: "릴리아나 플로레스",
                translation_B: "스베틀라나 포포바",
                translation_C: "로렌 캠벨",
                translation_D: "소진 박"
            },
            {
                id: "v4-p3-t04-q63",
                text: "What problem do the speakers discuss?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "Some equipment is not working.",
                    B: "Some costumes are not ready.",
                    C: "Some music is distracting.",
                    D: "An actor is late."
                },
                correctAnswer: "A",
                translation: "화자들은 어떤 문제를 논의하는가?",
                translation_A: "장비가 작동하지 않는다.",
                translation_B: "의상이 준비되지 않았다.",
                translation_C: "음악이 산만하다.",
                translation_D: "배우가 늦는다."
            },
            {
                id: "v4-p3-t04-q64",
                text: "What will happen next week?",
                classification: "WHAT_WHICH",
                options: {
                    A: "A playwright will attend a show.",
                    B: "Publicity photos will be taken.",
                    C: "A play will open.",
                    D: "A dress rehearsal will be held."
                },
                correctAnswer: "C",
                translation: "다음 주에 어떤 일이 있을 것인가?",
                translation_A: "극작가가 공연에 참석할 것이다.",
                translation_B: "홍보 사진을 찍을 것이다.",
                translation_C: "연극이 막을 올릴 것이다.",
                translation_D: "총연습이 열릴 것이다."
            }
        ],
        script: [
            { speaker: "Woman", text: "Luis, I noticed something while I was directing yesterday's rehearsal. I had a problem while I was trying to give some directions to the actors during act three. I wanted to ask you about it since you're in charge of lighting." },
            { speaker: "Man", text: "Sure. What is it?" },
            { speaker: "Woman", text: "One of the footlights at the front of the stage was flickering, which was distracting. It made it hard to see the actors' faces and costumes. Can you do something to fix it?" },
            { speaker: "Man", text: "Actually, I've already ordered a replacement. It should be here tomorrow." },
            { speaker: "Woman", text: "Great. Thanks. I can't believe opening night is next week. Everyone has put so much work into the show—it'll be great to have an audience." }
        ],
        translation: "여: 루이스, 어제 리허설을 감독할 때 뭔가를 알게 됐어요. 3막에서 배우들에게 지시하려고 할 때 문제가 있었어요. 조명을 맡고 계시니 이것에 관해 여쭤보고 싶었어요.\n남: 네, 그게 뭐죠?\n여: 무대 앞 바닥 조명 중 하나가 깜박거렸는데, 집중이 안 되더라고요. 그것 때문에 배우들 얼굴과 의상을 보기가 어려웠어요. 수리를 좀 해 주실 수 있나요?\n남: 사실은 이미 교체품을 주문했어요. 내일 도착할 겁니다.\n여: 좋아요, 감사합니다. 첫날 밤 공연이 다음 주라니 믿기지 않네요. 모두가 이 공연에 정말 많은 노력을 기울였어요. 관객이 들면 정말 좋을 것 같아요."
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p3-t04-s12",
        contextType: "A1. 사무실 업무",
        questionRange: "65-67",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-65-67.mp3",
        image: "/images/ETS_TOEIC_4/Test_04/Part_03/v4_p3_t04_q65.png",
        questions: [
            {
                id: "v4-p3-t04-q65",
                text: "Why is the man surprised?",
                classification: "WHY_REASON",
                options: {
                    A: "A new vacation policy was announced.",
                    B: "A group is larger than expected.",
                    C: "A price has increased.",
                    D: "A date has been changed."
                },
                correctAnswer: "D",
                translation: "남자가 놀란 이유는?",
                translation_A: "새로운 휴가 정책이 발표돼서",
                translation_B: "단체가 예상보다 커서",
                translation_C: "가격이 올라서",
                translation_D: "날짜가 변경돼서"
            },
            {
                id: "v4-p3-t04-q66",
                text: "What does the woman like about a venue?",
                classification: "WHAT_WHICH",
                options: {
                    A: "The comfortable rooms",
                    B: "The food selection",
                    C: "The views",
                    D: "The fitness center"
                },
                correctAnswer: "A",
                translation: "여자는 장소에 대해 어떤 점을 마음에 들어 하는가?",
                translation_A: "편안한 객실",
                translation_B: "음식 메뉴",
                translation_C: "전망",
                translation_D: "피트니스 센터"
            },
            {
                id: "v4-p3-t04-q67",
                text: "Look at the graphic. Who will lead the activity the man is interested in?",
                classification: "GRAPHIC",
                options: {
                    A: "Ketan Bora",
                    B: "Beatriz Romero",
                    C: "Arnaud Fournier",
                    D: "Brandon Murray"
                },
                correctAnswer: "A",
                translation: "시각 정보에 의하면, 남자가 관심이 있는 활동은 누가 이끄는가?",
                translation_A: "케탄 보라",
                translation_B: "베아트리체 로메로",
                translation_C: "아너드 푸르니에",
                translation_D: "브랜든 머레이"
            }
        ],
        script: [
            { speaker: "Man", text: "Hey, Hiroko. I got the e-mail invite to the company retreat. I'm surprised that it's in June this year, instead of September." },
            { speaker: "Woman", text: "Yeah, we changed the dates so we could try out this venue. I toured it last month and was really impressed. The rooms especially are so comfortable. There weren't any openings in September, though." },
            { speaker: "Man", text: "I'm sure it'll be worth the change. Your team in Human Resources plans great events." },
            { speaker: "Woman", text: "Here, I just pulled up their Web site. Take a look. Staff can choose one of these activities on the second day of the retreat." },
            { speaker: "Man", text: "I've never been kayaking. This looks like a good chance to try it." }
        ],
        translation: "남: 안녕하세요, 히로코 씨. 회사 야유회 이메일 초대장을 받았어요. 올해는 9월이 아니고 6월이라 놀랐어요.\n여: 네, 이 장소로 한번 가보려고 날짜를 바꿨어요. 지난달에 돌아봤는데 정말 인상적이었거든요. 특히 객실이 정말 편안해요. 그런데 9월엔 비는 방이 없더라고요.\n남: 바꾼 보람이 있을 거예요. 인사팀은 멋진 행사를 기획하시잖아요.\n여: 여기, 웹사이트를 열었어요. 한번 보세요. 직원들은 야유회 둘째 날 이 활동 중 하나를 선택할 수 있어요.\n남: 저는 카약을 해 본 적이 없어요. 한번 해 볼 좋은 기회겠네요."
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p3-t04-s13",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "68-70",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-68-70.mp3",
        image: "/images/ETS_TOEIC_4/Test_04/Part_03/v4_p3_t04_q68.png",
        questions: [
            {
                id: "v4-p3-t04-q68",
                text: "What is the conversation mostly about?",
                classification: "WHAT_WHICH",
                options: {
                    A: "Organizing an exhibit",
                    B: "Arranging a public tour",
                    C: "Filming a documentary",
                    D: "Requesting financial support"
                },
                correctAnswer: "C",
                translation: "대화는 주로 무엇에 관한 것인가?",
                translation_A: "전시회 조직",
                translation_B: "대중 견학 마련",
                translation_C: "다큐멘터리 촬영",
                translation_D: "재정 지원 요청"
            },
            {
                id: "v4-p3-t04-q69",
                text: "Look at the graphic. Which part of the castle is being excavated today?",
                classification: "GRAPHIC",
                options: {
                    A: "The garden",
                    B: "The kitchen",
                    C: "The tower",
                    D: "The great hall"
                },
                correctAnswer: "B",
                translation: "시각 정보에 의하면, 성의 어떤 부분이 오늘 발굴되고 있는가?",
                translation_A: "정원",
                translation_B: "주방",
                translation_C: "탑",
                translation_D: "대회장"
            },
            {
                id: "v4-p3-t04-q70",
                text: "According to the man, why has some work been delayed?",
                classification: "WHY_REASON",
                options: {
                    A: "An archaeological team is very small.",
                    B: "Weather conditions have been poor.",
                    C: "A source of funding was unavailable.",
                    D: "New volunteers required special training."
                },
                correctAnswer: "B",
                translation: "남자에 따르면, 왜 일부 작업이 지연됐는가?",
                translation_A: "고고학 팀 규모가 매우 작다.",
                translation_B: "기상 조건이 좋지 않았다.",
                translation_C: "자금원을 이용할 수 없었다.",
                translation_D: "새로운 자원봉사자들이 특별 훈련을 받아야 했다."
            }
        ],
        script: [
            { speaker: "Man", text: "Hi. You must be with the camera crew. I'm Hector, head archaeologist here at the Arnaud Castle dig site." },
            { speaker: "Woman", text: "Nice to meet you. I'm Ling. Since it's our first day of filming for our TV documentary special, we're mainly going to capture general footage of your team at work." },
            { speaker: "Man", text: "Great! We're working in quadrant two today. We've been finding lots of pottery, so you may capture us unearthing more." },
            { speaker: "Woman", text: "I see. This excavation has been a lengthy process, right?" },
            { speaker: "Man", text: "It has. We'd actually hoped to be further along, but there've been lots of thunderstorms lately, which have slowed things down." }
        ],
        translation: "남: 안녕하세요, 촬영팀이시군요. 저는 이곳 아너드성 발굴지의 수석 고고학자 헥터입니다.\n여: 만나서 반갑습니다. 저는 링이에요. 저희 TV 특집 다큐멘터리 촬영 첫날이니 팀이 작업하시는 일반 영상을 주로 담을 겁니다.\n남: 좋아요! 오늘은 제2사분면에서 작업 중입니다. 많은 도자기를 발견했으니 저희가 더 파내는 모습을 담을 수 있겠네요.\n여: 알겠습니다. 이 발굴 작업은 긴 과정이었죠, 그렇죠?\n남: 맞습니다. 실은 더 진척되길 바랐는데 최근 뇌우가 많이 발생해서 작업이 늦어졌어요."
    }
];
