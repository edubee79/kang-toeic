import { Part3Set } from '../types';

export const test3Data: Part3Set[] = [
    {
        testId: 3,
        vol: 4,
        setId: "v4-p3-t03-s1",
        contextType: "A1. 사무실 업무",
        questionRange: "32-34",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-32-34.mp3",
        questions: [
            {
                id: "v4-p3-t03-q32",
                text: "What change is a company making?",
                classification: "WHAT_WHICH",
                options: {
                    A: "It is lowering some prices.",
                    B: "It is hiring more staffers.",
                    C: "It is moving to a new location.",
                    D: "It is expanding a product line."
                },
                correctAnswer: "C",
                translation: "회사는 어떤 변화를 피하고 있는가?",
                translation_A: "가격을 낮추고 있다.",
                translation_B: "직원을 더 고용하고 있다.",
                translation_C: "새로운 장소로 이전하려고 한다.",
                translation_D: "제품군을 확대하고 있다."
            },
            {
                id: "v4-p3-t03-q33",
                text: "What suggestion does the woman make?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Updating a handbook",
                    B: "Donating some furniture",
                    C: "Creating a schedule",
                    D: "Downloading a software program"
                },
                correctAnswer: "B",
                translation: "여자는 어떤 제안을 하는가?",
                translation_A: "안내서 업데이트하기",
                translation_B: "가구 기부하기",
                translation_C: "일정표 만들기",
                translation_D: "소프트웨어 프로그램 다운로드하기"
            },
            {
                id: "v4-p3-t03-q34",
                text: "What will the speakers most likely do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Train a new employee",
                    B: "Review an application",
                    C: "Check a list",
                    D: "Talk to some directors"
                },
                correctAnswer: "D",
                translation: "화자들은 다음에 무엇을 하겠는가?",
                translation_A: "신입 사원 교육하기",
                translation_B: "지원서 검토하기",
                translation_C: "목록 확인하기",
                translation_D: "임원에게 이야기하기"
            }
        ],
        script: [
            { speaker: "Man", text: "The company's making a big change this year by moving offices. But honestly, as I look around this area, I'm already worrying about packing everything." },
            { speaker: "Woman", text: "Well, we should only take what we need. The new location already has furniture, so we don't need them." },
            { speaker: "Man", text: "Hmm... but the furniture we have is in good condition." },
            { speaker: "Woman", text: "Why don't we donate them? The Zephyr Foundation takes old furniture and gifts it to local organizations." },
            { speaker: "Man", text: "That's a great idea. Let's talk to our directors to see what they think." }
        ],
        translation: "남: 회사가 올해 사무실 이전으로 큰 변화를 꾀하고 있다. 하지만 솔직히 이 일대를 둘러보니 벌써부터 짐을 다 쌀 걱정이다.\n여: 글쎄요, 필요한 것만 가져가야 해요. 새로운 곳에는 이미 가구가 있으니 필요 없어요.\n남: 음… 하지만 우리 가구는 상태가 좋은데요.\n여: 기부하는 건 어때요? 제퍼린 재단은 낡은 가구를 가져가서 지역 단체에 기부하거든요.\n남: 좋은 생각이네요. 임원들이 어떻게 생각하는지 말해 보죠."
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p3-t03-s2",
        contextType: "B4. 일반문의",
        questionRange: "35-37",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-35-37.mp3",
        questions: [
            {
                id: "v4-p3-t03-q35",
                text: "Who most likely are the women?",
                classification: "WHO_LOC",
                options: {
                    A: "Company executives",
                    B: "Journalists",
                    C: "Health-care professionals",
                    D: "Safety inspectors"
                },
                correctAnswer: "B",
                translation: "여자들은 누구이겠는가?",
                translation_A: "회사 임원",
                translation_B: "기자",
                translation_C: "의료 전문가",
                translation_D: "안전 검사관"
            },
            {
                id: "v4-p3-t03-q36",
                text: "What does the man say he is pleased about?",
                classification: "WHAT_WHICH",
                options: {
                    A: "The number of event participants",
                    B: "The amount of money raised",
                    C: "The quality of vendors",
                    D: "The variety of presentations"
                },
                correctAnswer: "A",
                translation: "남자는 무엇에 대해 기쁘다고 말하는가?",
                translation_A: "행사 참가자 수",
                translation_B: "모금액",
                translation_C: "판매 업체 자질",
                translation_D: "발표의 다양성"
            },
            {
                id: "v4-p3-t03-q37",
                text: "What will the women do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Watch a demonstration",
                    B: "Get some refreshments",
                    C: "Register for an event",
                    D: "Take a photograph"
                },
                correctAnswer: "D",
                translation: "여자들은 다음에 무엇을 할 것인가?",
                translation_A: "시연 보기",
                translation_B: "다과 먹기",
                translation_C: "행사 등록하기",
                translation_D: "사진 찍기"
            }
        ],
        script: [
            { speaker: "Man", text: "Welcome! I'm excited to show you both around the Southeast Medical Trade Show." },
            { speaker: "Woman 1", text: "Thanks for allowing us to cover the event for our newspaper. We really wanted to interview you as the organizer." },
            { speaker: "Woman 2", text: "Yes. How many people are you expecting to attend this trade show?" },
            { speaker: "Man", text: "I'm pleased to report that registration has increased this year. We have over 2,000 participants." },
            { speaker: "Woman 2", text: "That's impressive." },
            { speaker: "Man", text: "It's our best turnout yet." },
            { speaker: "Woman 1", text: "Actually, before we go into the main room, can we get a photo of you in front of the poster for the show? The one on that wall?" },
            { speaker: "Man", text: "Certainly!" }
        ],
        translation: "남: 환영합니다! 두 분께 사우스이스트 의학 박람회를 소개해 드리게 되어 기쁩니다.\n여1: 저희 신문사에서 이 행사를 취재할 수 있게 해 주셔서 감사합니다. 주최자이신 당신을 꼭 인터뷰하고 싶었거든요.\n여2: 네. 이번 박람회에 얼마나 많이 참석할 것으로 예상하세요?\n남: 올해 등록이 증가했음을 알리게 되어 기쁘네요. 참가자가 2천 명이 넘습니다.\n여2: 인상적이군요.\n남: 지금껏 가장 높은 참가자 수입니다.\n여1: 저, 주 회의장으로 가기 전에 박람회 포스터 앞에서 당신의 사진을 찍어도 될까요? 벽에 있는 포스터요.\n남: 물론이죠!"
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p3-t03-s3",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "38-40",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-38-40.mp3",
        questions: [
            {
                id: "v4-p3-t03-q38",
                text: "What most likely is the woman's job?",
                classification: "WHO_LOC",
                options: {
                    A: "Professional chef",
                    B: "Bank executive",
                    C: "Administrative assistant",
                    D: "Web designer"
                },
                correctAnswer: "D",
                translation: "여자의 직업은 무엇이겠는가?",
                translation_A: "전문 요리사",
                translation_B: "은행 임원",
                translation_C: "행정 보조원",
                translation_D: "웹 디자이너"
            },
            {
                id: "v4-p3-t03-q39",
                text: "What will the man most likely do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Buy some materials from the woman",
                    B: "Check the woman's work",
                    C: "List investment options",
                    D: "Update some client information"
                },
                correctAnswer: "B",
                translation: "남자는 무엇을 하겠는가?",
                translation_A: "여자에게서 재료 구입",
                translation_B: "여자의 작업 확인",
                translation_C: "투자 옵션 목록 작성",
                translation_D: "고객 정보 업데이트"
            },
            {
                id: "v4-p3-t03-q40",
                text: "What will the woman most likely send to the man?",
                classification: "WHAT_WHICH",
                options: {
                    A: "A cost estimate",
                    B: "A revised schedule",
                    C: "A building plan",
                    D: "A list of changes"
                },
                correctAnswer: "D",
                translation: "여자는 남자에게 무엇을 보내겠는가?",
                translation_A: "견적서",
                translation_B: "수정된 일정표",
                translation_C: "건축 계획",
                translation_D: "변경 사항 목록"
            }
        ],
        script: [
            { speaker: "Woman", text: "Murad, I need your help. Can you spare 30 minutes?" },
            { speaker: "Man", text: "I have some time after lunch. How can I help?" },
            { speaker: "Woman", text: "As you know, I've been redesigning Ace Bancorp's Web site to add new online banking functions." },
            { speaker: "Man", text: "This is the client that wanted streamlined menus on their home page too, right?" },
            { speaker: "Woman", text: "Yes. I wonder whether you could test out the redeveloped site for me." },
            { speaker: "Man", text: "I can do that. Why don't you send me a list of the specific updates you made? I'll make sure I check those." }
        ],
        translation: "여: 무라드, 당신의 도움이 필요해요. 30분만 시간을 내 주실 수 있나요?\n남: 점심 시간 이후에 시간이 있어요. 어떻게 도와드릴까요?\n여: 아시다시피, 제가 새로운 온라인 뱅킹 기능을 추가하기 위해 에이스 반코프의 웹사이트를 다시 디자인하고 있잖아요.\n남: 홈페이지에도 간소화된 메뉴를 원한 고객이죠, 그렇죠?\n여: 네. 다시 개발한 사이트를 테스트해 주실 수 있으신지요.\n남: 해 드릴 수 있어요. 진행하신 구체적인 업데이트 목록을 보내 주시겠어요? 그것들을 확인할게요."
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p3-t03-s4",
        contextType: "C1. 항공 / 교통",
        questionRange: "41-43",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-41-43.mp3",
        questions: [
            {
                id: "v4-p3-t03-q41",
                text: "Why is a train platform closed?",
                classification: "WHY_REASON",
                options: {
                    A: "Safety inspections are being conducted.",
                    B: "New escalators are being installed.",
                    C: "Tracks are being repaired.",
                    D: "Waiting areas are being remodeled."
                },
                correctAnswer: "C",
                translation: "열차 승강장이 폐쇄된 이유는?",
                translation_A: "안전 점검이 진행되고 있다.",
                translation_B: "에스컬레이터가 새로 설치되고 있다.",
                translation_C: "철로가 수리되고 있다.",
                translation_D: "대기 구역을 개조하고 있다."
            },
            {
                id: "v4-p3-t03-q42",
                text: "What does the man say he is upset about?",
                classification: "WHAT_WHICH",
                options: {
                    A: "Misunderstanding some instructions",
                    B: "Being late for an appointment",
                    C: "Losing a travel pass",
                    D: "Boarding the wrong train"
                },
                correctAnswer: "B",
                translation: "남자는 무엇 때문에 기분이 좋지 않다고 말하는가?",
                translation_A: "일부 설명을 오해한 것",
                translation_B: "약속에 늦은 것",
                translation_C: "기차표를 잃어버린 것",
                translation_D: "기차를 잘못 탄 것"
            },
            {
                id: "v4-p3-t03-q43",
                text: "What will the man most likely do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Purchase a snack",
                    B: "Take a shuttle bus",
                    C: "File a complaint",
                    D: "Download a map"
                },
                correctAnswer: "B",
                translation: "남자는 다음에 무엇을 하겠는가?",
                translation_A: "간식 구입하기",
                translation_B: "셔틀버스 타기",
                translation_C: "민원 넣기",
                translation_D: "지도 다운로드하기"
            }
        ],
        script: [
            { speaker: "Man", text: "Excuse me. I'm trying to catch a train from this platform, but I've been waiting, and no train has arrived." },
            { speaker: "Woman", text: "Oh, oh yes. Unfortunately, some tracks are being repaired, so no trains are departing from this platform." },
            { speaker: "Man", text: "I see. I had no idea this was happening. And I'm upset that now I'm late for an appointment." },
            { speaker: "Woman", text: "Well, they're providing free bus service to the next few stations. You can catch a shuttle bus from the south side of the station." }
        ],
        translation: "남: 실례합니다. 이 승강장에서 기차를 타려고 하는데요. 계속 기다리고 있는데 기차가 한 대도 오지 않네요.\n여: 아, 네, 안타깝게도 일부 철로가 수리 중이라서 이 승강장에서는 기차가 출발하지 않습니다.\n남: 알겠습니다. 이런 일이 있는 줄 몰랐어요. 지금 약속에 늦어서 기분이 좋지 않네요.\n여: 음… 다음 몇 개의 역까지 무료 버스를 제공하고 있습니다. 역 남쪽에서 셔틀버스를 타시면 됩니다."
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p3-t03-s5",
        contextType: "A3. 마케팅 / 비즈니스",
        questionRange: "44-46",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-44-46.mp3",
        questions: [
            {
                id: "v4-p3-t03-q44",
                text: "Why does the man call the woman?",
                classification: "WHY_REASON",
                options: {
                    A: "To provide an update on his project",
                    B: "To get approval on some design changes",
                    C: "To receive the woman's feedback on a prototype",
                    D: "To persuade the woman to invest in his business"
                },
                correctAnswer: "D",
                translation: "남자가 여자에게 전화한 이유는?",
                translation_A: "프로젝트 최신 정보를 제공하려고",
                translation_B: "디자인 변경에 관한 승인을 받으려고",
                translation_C: "시제품에 대한 여자의 피드백을 받으려고",
                translation_D: "여자가 사업에 투자하도록 설득하려고"
            },
            {
                id: "v4-p3-t03-q45",
                text: "According to the man, what is unique about a product?",
                classification: "WHAT_WHICH",
                options: {
                    A: "It is inexpensive.",
                    B: "It is easy to assemble.",
                    C: "It is adjustable.",
                    D: "It is lightweight."
                },
                correctAnswer: "C",
                translation: "남자에 따르면, 제품의 어떤 점이 특별한가?",
                translation_A: "비싸지 않다.",
                translation_B: "조립이 쉽다.",
                translation_C: "조절 가능하다.",
                translation_D: "가볍다."
            },
            {
                id: "v4-p3-t03-q46",
                text: "Why does the woman request some documents?",
                classification: "WHY_REASON",
                options: {
                    A: "To open a customer account",
                    B: "To issue a certificate",
                    C: "To make some copies",
                    D: "To evaluate a proposal"
                },
                correctAnswer: "D",
                translation: "여자가 서류를 요청한 이유는?",
                translation_A: "고객 계정을 개설하려고",
                translation_B: "증명서를 발급하려고",
                translation_C: "복사하려고",
                translation_D: "제안을 평가하려고"
            }
        ],
        script: [
            { speaker: "Man", text: "Thanks for taking my call, Ms. Hazarika." },
            { speaker: "Woman", text: "I understand from your e-mail that you're looking for investors in your business." },
            { speaker: "Man", text: "Yes. Storing bikes in small apartments is tough. That's why I've developed this space-saving bicycle rack." },
            { speaker: "Woman", text: "I've seen other indoor bike racks—what's unique about yours?" },
            { speaker: "Man", text: "Most indoor racks are one size. But not all bikes are the same. My product can be adjusted to suit different types of bicycles." },
            { speaker: "Woman", text: "That's interesting. Send me your business model. I need to determine if you have a reasonable plan for expanding production and increasing sales before I make any decisions." }
        ],
        translation: "남: 전화 받아 주셔서 감사합니다, 하자리카 씨.\n여: 보내주신 이메일을 보니 사업 투자자를 찾고 계신다고요.\n남: 네. 소형 아파트에 자전거를 보관하기가 어렵잖아요. 그래서 이 공간 절약형 자전거 보관대를 개발한 겁니다.\n여: 다른 실내 자전거 보관대도 본 적이 있는데요, 이건 어떤 점이 특별하죠?\n남: 대부분의 실내 보관대는 사이즈가 하나입니다. 하지만 모든 자전거의 크기가 같지는 않잖아요. 저희 제품은 다양한 종류의 자전거에 맞춰 조절할 수 있어요.\n여: 흥미롭네요. 비즈니스 모델을 저에게 보내주세요. 제가 결정을 내리기 전에 귀사에 생산 확대와 판매 증가를 위한 합리적인 계획이 있는지 파악해야 하니까요."
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p3-t03-s6",
        contextType: "B4. 일반문의",
        questionRange: "47-49",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-47-49.mp3",
        questions: [
            {
                id: "v4-p3-t03-q47",
                text: "What are the speakers preparing for?",
                classification: "WHAT_WHICH",
                options: {
                    A: "A construction-site visit",
                    B: "A safety inspection",
                    C: "An interview",
                    D: "A film festival"
                },
                correctAnswer: "C",
                translation: "화자들은 무엇을 준비하고 있는가?",
                translation_A: "건설 현장 방문",
                translation_B: "안전 점검",
                translation_C: "인터뷰",
                translation_D: "영화제"
            },
            {
                id: "v4-p3-t03-q48",
                text: "What is the woman concerned about?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "A lighting issue",
                    B: "A script mistake",
                    C: "A material shortage",
                    D: "A revenue decrease"
                },
                correctAnswer: "A",
                translation: "여자는 무엇을 걱정하는가?",
                translation_A: "조명 문제",
                translation_B: "대본 오류",
                translation_C: "자료 부족",
                translation_D: "수익 감소"
            },
            {
                id: "v4-p3-t03-q49",
                text: "Who is Marcel Lambert?",
                classification: "WHO_LOC",
                options: {
                    A: "A company accountant",
                    B: "A possible client",
                    C: "A supervisor",
                    D: "An intern"
                },
                correctAnswer: "D",
                translation: "마셀 램버트는 누구인가?",
                translation_A: "회사 회계원",
                translation_B: "예비 고객",
                translation_C: "감독관",
                translation_D: "인턴"
            }
        ],
        script: [
            { speaker: "Woman", text: "Alberto, it's time to leave the studio and head over to the central bank for our interview with the director." },
            { speaker: "Man", text: "Yes, I have all the cameras we'll need today." },
            { speaker: "Woman", text: "Great. And make sure you have the special low-light lenses. I'm concerned about the poor lighting at the bank. It's pretty dark in there, and that can ruin our key interview shots." },
            { speaker: "Man", text: "Oh, yes. I have those. And by the way, our new intern Marcel Lambert is interested in joining us." },
            { speaker: "Woman", text: "That's a good idea. It'll be a good experience for him." }
        ],
        translation: "여: 알베르토, 스튜디오에서 출발해 임원을 인터뷰하러 중앙 은행으로 갈 시간이에요.\n남: 네, 오늘 필요한 카메라는 제가 다 챙겼어요.\n여: 좋아요. 특수 저조도 렌즈를 꼭 챙기도록 하세요. 은행의 조명이 안 좋아서 걱정이네요. 그곳이 꽤 어두워서 중요한 인터뷰 사진을 망칠 수도 있거든요.\n남: 아, 네, 챙겼습니다. 그런데 새 인턴 마셀 램버트가 함께 가고 싶어 해요.\n여: 좋은 생각이군요. 좋은 경험이 될 거예요."
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p3-t03-s7",
        contextType: "A1. 사무실 업무",
        questionRange: "50-52",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-50-52.mp3",
        questions: [
            {
                id: "v4-p3-t03-q50",
                text: "What does the woman thank the man for?",
                classification: "WHY_REASON",
                options: {
                    A: "Distributing some fliers",
                    B: "Completing some calculations",
                    C: "Placing a catering order",
                    D: "Preparing some paper copies"
                },
                correctAnswer: "D",
                translation: "여짜는 남자에게 무엇에 대해 고마워하는가?",
                translation_A: "전단을 배포한 것",
                translation_B: "계산을 완료한 것",
                translation_C: "케이터링 주문을 넣은 것",
                translation_D: "복사물을 준비한 것"
            },
            {
                id: "v4-p3-t03-q51",
                text: "Why is a gathering being planned?",
                classification: "WHY_REASON",
                options: {
                    A: "A colleague was promoted.",
                    B: "The company won an award.",
                    C: "A colleague will be retiring.",
                    D: "The company will be training employees."
                },
                correctAnswer: "C",
                translation: "왜 모임을 계획하는가?",
                translation_A: "동료가 승진했다.",
                translation_B: "회사가 상을 받았다.",
                translation_C: "동료가 은퇴할 예정이다.",
                translation_D: "회사가 직원들을 교육시킬 것이다."
            },
            {
                id: "v4-p3-t03-q52",
                text: "What does the man imply when he says, \"I booked conference room B\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "A room is too small.",
                    B: "An invitation is incorrect.",
                    C: "No other conference rooms were available.",
                    D: "Another administrative assistant was too busy."
                },
                correctAnswer: "A",
                translation: "남자가 \"B회의실을 예약했는데요\"라고 말하는 의도는 무엇인가?",
                translation_A: "회의실이 너무 작다.",
                translation_B: "초대가 잘못됐다.",
                translation_C: "이용할 수 있는 다른 회의실이 없었다.",
                translation_D: "다른 행정 보조 직원이 너무 바빴다."
            }
        ],
        script: [
            { speaker: "Woman", text: "Waseem, I know you've been very busy this morning, but did you have time to take care of the photocopies I asked for?" },
            { speaker: "Man", text: "Oh, yes, those are all ready." },
            { speaker: "Woman", text: "Excellent! Thanks. By the way, how are the preparations coming along for Sabine Hoffman's retirement party?" },
            { speaker: "Man", text: "Great. I've booked a room and invited everyone on our team to the event. I'll call the caterer next." },
            { speaker: "Woman", text: "You know, I'm sure she would love to celebrate with her former colleagues from other teams as well, if it's not too much trouble to invite them." },
            { speaker: "Man", text: "Sure. I booked conference room B, but I'll go ahead and change that." }
        ],
        translation: "여: 와심, 오늘 오전에 굉장히 바쁘셨던 건 아는데, 제가 요청한 복사를 처리해 주실 시간이 있었나요?\n남: 아, 네, 모두 준비해 뒀습니다.\n여: 훌륭해요! 감사합니다. 그런데 사빈 호프만의 은퇴 기념 파티 준비는 어떻게 되어 가나요?\n남: 잘되고 있어요. 회의실을 예약했고 우리 팀 전원을 행사에 초대했어요. 다음으로 케이터링 업체에 전화할 겁니다.\n여: 그녀는 분명 다른 팀의 이전 동료들과도 함께 기념하고 싶어 할 거예요. 그들을 초대하는 것이 너무 수고스럽지만 않다면요.\n남: 물론이에요. B회의실을 예약했는데, 가서 변경할게요."
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p3-t03-s8",
        contextType: "A1. 사무실 업무",
        questionRange: "53-55",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-53-55.mp3",
        questions: [
            {
                id: "v4-p3-t03-q53",
                text: "What type of event is the man planning?",
                classification: "WHAT_WHICH",
                options: {
                    A: "A retirement banquet",
                    B: "A company retreat",
                    C: "A press conference",
                    D: "A fund-raiser"
                },
                correctAnswer: "B",
                translation: "남자는 어떤 종류의 행사를 계획하는가?",
                translation_A: "은퇴 기념 연회",
                translation_B: "회사 수련회",
                translation_C: "기자회견",
                translation_D: "모금 행사"
            },
            {
                id: "v4-p3-t03-q54",
                text: "Why was Ms. Ishikawa delayed?",
                classification: "WHY_REASON",
                options: {
                    A: "She was stuck in traffic.",
                    B: "She was at lunch.",
                    C: "She was setting up a room.",
                    D: "She was on the phone."
                },
                correctAnswer: "D",
                translation: "이리카와 씨는 왜 늦었는가?",
                translation_A: "교통 체증에 갇혔다.",
                translation_B: "점심을 먹고 있었다.",
                translation_C: "회의실을 준비하고 있었다.",
                translation_D: "통화 중이었다."
            },
            {
                id: "v4-p3-t03-q55",
                text: "What does the man inquire about?",
                classification: "WHAT_WHICH",
                options: {
                    A: "An airport shuttle",
                    B: "Late checkout",
                    C: "A fitness center",
                    D: "Internet capabilities"
                },
                correctAnswer: "D",
                translation: "남자는 무엇에 대해 문의하는가?",
                translation_A: "공항 셔틀",
                translation_B: "늦은 체크아웃",
                translation_C: "피트니스 센터",
                translation_D: "인터넷 성능"
            }
        ],
        script: [
            { speaker: "Man", text: "Hi. I'm Kota Ogawa from Langston Limited. I have an appointment with Ms. Ishikawa to view your hotel facilities for my company's upcoming retreat." },
            { speaker: "Woman 1", text: "I know that she's been expecting you, and she just wrapped up an urgent phone call. She's on her way now." },
            { speaker: "Woman 2", text: "Hi. You must be Mr. Ogawa. I'm Hikaru Ishikawa. Why don't we see our largest conference room first?" },
            { speaker: "Man", text: "Great. And I'd also like to look at the guest rooms. All the rooms have a high-speed Internet connection, right?" },
            { speaker: "Woman 2", text: "Yes, and we have a fully equipped recreation area as well." }
        ],
        translation: "남: 안녕하세요, 랭스턴 유한회사의 코타 오가와입니다. 곧 있을 저희 회사 수련회를 위해 호텔 시설을 둘러보려고 이시카와 씨와 약속을 했어요.\n여1: 이시카와 씨가 기다리고 계시는 걸로 아는데요, 막 급한 전화 통화를 마치셨어요. 이제 오고 계십니다.\n여2: 안녕하세요, 오가와 씨죠? 저는 히카루 이시카와입니다. 가장 큰 회의실을 먼저 보시는 게 어때요?\n남: 좋습니다. 객실도 보고 싶어요. 모든 객실에 초고속 인터넷이 연결되어 있죠, 그렇지요?\n여2: 네, 그리고 시설이 완비된 레크리에이션 공간도 있습니다."
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p3-t03-s9",
        contextType: "B4. 일반문의",
        questionRange: "56-58",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-56-58.mp3",
        questions: [
            {
                id: "v4-p3-t03-q56",
                text: "Where does the conversation most likely take place?",
                classification: "WHO_LOC",
                options: {
                    A: "At a restaurant",
                    B: "At a shipping dock",
                    C: "At a farm",
                    D: "At a supermarket"
                },
                correctAnswer: "D",
                translation: "대화는 어디에서 이루어지겠는가?",
                translation_A: "음식점",
                translation_B: "하역장",
                translation_C: "농장",
                translation_D: "슈퍼마켓"
            },
            {
                id: "v4-p3-t03-q57",
                text: "What does the man say is popular?",
                classification: "WHAT_WHICH",
                options: {
                    A: "A colorful package design",
                    B: "A self-service machine",
                    C: "A same-day delivery service",
                    D: "A television advertisement"
                },
                correctAnswer: "B",
                translation: "남자는 무엇이 인기 있다고 말하는가?",
                translation_A: "다채로운 포장 디자인",
                translation_B: "셀프 서비스 기계",
                translation_C: "당일 배송 서비스",
                translation_D: "텔레비전 광고"
            },
            {
                id: "v4-p3-t03-q58",
                text: "What does the man suggest doing?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Waiting for some data",
                    B: "Issuing a refund",
                    C: "Hiring more staff",
                    D: "Rearranging some merchandise"
                },
                correctAnswer: "A",
                translation: "남자는 무엇을 제안하는가?",
                translation_A: "데이터 기다리기",
                translation_B: "환불해 주기",
                translation_C: "직원 추가 고용하기",
                translation_D: "상품 재배치하기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Look at these results! Sales of pineapples have gone up a lot this month at our store." },
            { speaker: "Man", text: "It must be the pineapple-peeling machine we installed in the fruit aisle. Customers like watching it peel and slice their pineapple for them." },
            { speaker: "Woman", text: "It is a unique experience. I think we should install one in our other two store branches." },
            { speaker: "Man", text: "I'm not sure about that. I think the novelty will wear off in a few weeks. Let's wait to see if sales numbers stay high before we invest in any more." }
        ],
        translation: "여: 이 결과 좀 보세요! 이번 달 우리 매장에서 파인애플 판매량이 많이 늘었어요.\n남: 분명 과일 통로에 설치한 파인애플 껍질 벗기는 기계 덕분일 거예요. 고객들은 그 기계가 파인애플 껍질을 벗겨서 잘라 주는 걸 보고 좋아해요.\n여: 특별한 경험이죠. 다른 두 지점에도 설치해야겠어요.\n남: 그건 잘 모르겠네요. 몇 주 후면 참신함이 사라질 거예요. 더 투자하기 전에 판매 수치가 계속 높게 유지되는지 기다려 봅시다."
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p3-t03-s10",
        contextType: "B3. 편의시설 / 보건",
        questionRange: "59-61",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-59-61.mp3",
        questions: [
            {
                id: "v4-p3-t03-q59",
                text: "What are the speakers discussing?",
                classification: "WHAT_WHICH",
                options: {
                    A: "Relocating their office",
                    B: "Attracting new patients",
                    C: "Scheduling appointments",
                    D: "Finding qualified staff"
                },
                correctAnswer: "C",
                translation: "화자들은 무엇에 관해 이야기하는가?",
                translation_A: "사무실 이전하기",
                translation_B: "신규 환자 유치하기",
                translation_C: "예약 일정 잡기",
                translation_D: "자격을 갖춘 직원 찾기"
            },
            {
                id: "v4-p3-t03-q60",
                text: "Why does the man say, \"You just have to check a box\"?",
                classification: "WHY_REASON",
                options: {
                    A: "To request some performance feedback",
                    B: "To express concern about a procedure",
                    C: "To correct a misunderstanding",
                    D: "To support a suggestion"
                },
                correctAnswer: "D",
                translation: "남자가 \"박스에 체크하기만 하면 돼요\"라고 말하는 이유는?",
                translation_A: "성과 피드백을 요청하려고",
                translation_B: "절차에 관한 우려를 표하려고",
                translation_C: "오해를 바로잡으려고",
                translation_D: "제안을 뒷받침하려고"
            },
            {
                id: "v4-p3-t03-q61",
                text: "What does the woman offer to do this afternoon?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Investigate options",
                    B: "Revise a budget",
                    C: "Contact a patient",
                    D: "Update a Web site"
                },
                correctAnswer: "A",
                translation: "여자는 오늘 오후에 무엇을 하겠다고 제안하는가?",
                translation_A: "옵션 조사",
                translation_B: "예산 수정",
                translation_C: "환자에게 연락",
                translation_D: "웹사이트 업데이트"
            }
        ],
        script: [
            { speaker: "Man", text: "Ingrid, we've had three patients this week who had to cancel their dental appointments at the last minute." },
            { speaker: "Woman", text: "Yes, that's a problem. Other patients might have taken those available appointments if we'd been able to contact them in time." },
            { speaker: "Man", text: "You know, I have an idea. I recently scheduled a doctor's visit online, and there was an option to receive a text-message notification if an earlier slot became available. You just have to check a box. What do you think about something like that?" },
            { speaker: "Woman", text: "That would be helpful. I have some time this afternoon. I'll look into software packages that include that feature." }
        ],
        translation: "남: 잉그리드, 이번 주에 예약 시간 직전에 치과 예약을 취소한 환자가 세 명 있었어요.\n여: 네, 그게 문제예요. 우리가 제때 연락할 수 있었다면 다른 환자들이 그 시간대를 이용할 수 있었을 텐데요.\n남: 저에게 좋은 생각이 있어요. 최근 온라인으로 병원 방문을 예약했는데, 더 이른 시간대를 이용할 수 있게 되면 문자 메시지 알림을 받는 옵션이 있었어요. 박스에 체크하기만 하면 돼요. 그런 건 어떻게 생각하세요?\n여: 유용할 것 같아요. 제가 오늘 오후에 시간이 좀 있어요. 그 기능을 포함하는 소프트웨어 패키지를 알아볼게요."
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p3-t03-s11",
        contextType: "A1. 사무실 업무",
        questionRange: "62-64",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-62-64.mp3",
        image: "/images/ETS_TOEIC_4/Test_03/Part_03/v4_p3_t03_q62.png",
        questions: [
            {
                id: "v4-p3-t03-q62",
                text: "Who will the man give some gifts to?",
                classification: "WHO_LOC",
                options: {
                    A: "Conference participants",
                    B: "Employees",
                    C: "Contest winners",
                    D: "Visitors"
                },
                correctAnswer: "B",
                translation: "남자는 누구에게 선물을 줄 것인가?",
                translation_A: "회의 참가자들",
                translation_B: "직원들",
                translation_C: "대회 우승자들",
                translation_D: "방문객들"
            },
            {
                id: "v4-p3-t03-q63",
                text: "Look at the graphic. How much is the mug that the woman likes?",
                classification: "GRAPHIC",
                options: {
                    A: "$15",
                    B: "$20",
                    C: "$23",
                    D: "$25"
                },
                correctAnswer: "C",
                translation: "시각 정보에 의하면, 여자가 마음에 들어 하는 머그잔은 얼마인가?",
                translation_A: "$15",
                translation_B: "$20",
                translation_C: "$23",
                translation_D: "$25"
            },
            {
                id: "v4-p3-t03-q64",
                text: "What does the man say he will do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Submit a registration form",
                    B: "Adjust a work schedule",
                    C: "Approve an order",
                    D: "Ask for a bulk-pricing rate"
                },
                correctAnswer: "C",
                translation: "남자는 무엇을 할 것이라고 말하는가?",
                translation_A: "신청서 제출",
                translation_B: "업무 일정 조정",
                translation_C: "주문 승인",
                translation_D: "대량 주문 금액 요청"
            }
        ],
        script: [
            { speaker: "Man", text: "Hi, Raquel. Have you had a chance to look for something I could buy the employees for the New Year? I want to be sure I thank everyone for their hard work." },
            { speaker: "Woman", text: "Well, a good quality travel mug would be appreciated." },
            { speaker: "Man", text: "Interesting. Which one would you recommend?" },
            { speaker: "Woman", text: "Take a look at this brochure. This company has a variety of designs—sea animals, sky scenes. I like the medium mug with the Desert Roaming design." },
            { speaker: "Man", text: "That is nice. I'll sign off on that order request once you fill out the paperwork." }
        ],
        translation: "남: 안녕하세요, 라켈. 새해를 맞아 직원들에게 사줄 만한 것을 찾아볼 기회가 있었나요? 제가 모두의 노고에 감사한다는 것을 확실히 하고 싶어요.\n여: 음, 품질 좋은 여행용 머그잔을 좋아할 것 같아요.\n남: 흥미롭군요. 어떤 걸 추천하세요?\n여: 이 안내 책자를 보세요. 이 업체는 해양 동물, 하늘 풍경 등 다양한 디자인을 갖추고 있어요. 사막 여행 디자인의 중간 크기 머그잔이 마음에 드네요.\n남: 그거 좋네요. 서류를 작성해 주시면 주문 요청서에 서명할게요."
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p3-t03-s12",
        contextType: "B4. 일반문의",
        questionRange: "65-67",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-65-67.mp3",
        image: "/images/ETS_TOEIC_4/Test_03/Part_03/v4_p3_t03_q65.png",
        questions: [
            {
                id: "v4-p3-t03-q65",
                text: "What industry do the speakers most likely work in?",
                classification: "WHO_LOC",
                options: {
                    A: "Tourism",
                    B: "Film",
                    C: "Engineering",
                    D: "Transportation"
                },
                correctAnswer: "B",
                translation: "화자들은 어떤 업계에서 일하겠는가?",
                translation_A: "관광",
                translation_B: "영화",
                translation_C: "공학",
                translation_D: "운송"
            },
            {
                id: "v4-p3-t03-q66",
                text: "Why does the woman want to make a change?",
                classification: "WHY_REASON",
                options: {
                    A: "Some equipment is not available.",
                    B: "A new business is opening.",
                    C: "A process will be easier.",
                    D: "Costs will be lower."
                },
                correctAnswer: "C",
                translation: "여자는 왜 변경하고 싶어 하는가?",
                translation_A: "일부 장비를 이용할 수 없다.",
                translation_B: "새 업체가 문을 연다.",
                translation_C: "과정이 더 쉬워진다.",
                translation_D: "비용이 줄어든다."
            },
            {
                id: "v4-p3-t03-q67",
                text: "Look at the graphic. Which road should be closed?",
                classification: "GRAPHIC",
                options: {
                    A: "Bangalore Avenue",
                    B: "Dublin Avenue",
                    C: "Polly Street",
                    D: "Elm Lane"
                },
                correctAnswer: "A",
                translation: "시각 정보에 의하면, 어떤 도로가 봉쇄되는가?",
                translation_A: "방갈로르 가",
                translation_B: "더블린 가",
                translation_C: "폴리 가",
                translation_D: "엘름 길"
            }
        ],
        script: [
            { speaker: "Man", text: "Here's the map that you requested for next week's shoot, for the driving scene." },
            { speaker: "Woman", text: "Great—let's see. The actors will be driving north on Maple Street. Hmm..." },
            { speaker: "Man", text: "Is something wrong?" },
            { speaker: "Woman", text: "We may need to alter the route so it'll be less difficult for our camera operators to follow the action." },
            { speaker: "Man", text: "OK. What are you thinking?" },
            { speaker: "Woman", text: "Instead of turning left on Elm Lane, let's have them turn right and park in front of the hair salon." },
            { speaker: "Man", text: "OK. I'll arrange for that road to be closed while we're working and alert the business owners." }
        ],
        translation: "남: 다음 주 운전 장면 촬영을 위해 요청한 지도가 여기 있다(Here's the map that you requested for next week's shoot, for the driving scene)고 말하자 여자가 배우들이 메이플 가에서 북쪽으로 운전할 예정(The actors will be driving north on Maple Street)이라고 대화를 이어 가고 있으므로 화자들은 영화 업계에 종사함을 알 수 있다. 따라서 정답은 (B)이다.\n\n여자는 왜 변경하고 싶어 하는가?\n남자가 첫 대사에서 다음 주 운전 장면 촬영을 위해 요청한 지도가 여기 있다(Here's the map that you requested for next week's shoot, for the driving scene)고 말하자 여자가 배우들이 메이플 가에서 북쪽으로 운전할 예정(The actors will be driving north on Maple Street)이라고 대화를 이어 가고 있으므로 화자들은 영화 업계에 종사함을 알 수 있다. 따라서 정답은 (B)이다.\n\n시각 정보에 의하면, 어떤 도로가 봉쇄되는가?\n여자가 세 번째 대사에서 엘름 길에서 좌회전하지 말고 우회전해서 미용실 앞에 주차하자(~ let's have them turn right and park in front of the hair salon)고 제안하자 남자가 작업하는 동안 해당 도로가 봉쇄될 수 있도록 하고 사업주들에게 알려 주겠다(I'll arrange for that road to be closed while we're working and alert the business owners)고 말하고 있으므로 미용실 앞 도로가 봉쇄될 것임을 알 수 있다. 지도에 따르면 미용실 앞 도로는 방갈로르 가이므로 정답은 (A)이다."
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p3-t03-s13",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "68-70",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-68-70.mp3",
        image: "/images/ETS_TOEIC_4/Test_03/Part_03/v4_p3_t03_q68.png",
        questions: [
            {
                id: "v4-p3-t03-q68",
                text: "What are the speakers preparing for?",
                classification: "WHAT_WHICH",
                options: {
                    A: "A video-game convention",
                    B: "An in-store demonstration",
                    C: "A product launch",
                    D: "A focus-group session"
                },
                correctAnswer: "C",
                translation: "화자들은 무엇을 준비하고 있는가?",
                translation_A: "비디오 게임 컨벤션",
                translation_B: "매장 내 시연",
                translation_C: "제품 출시",
                translation_D: "포커스 그룹 세션"
            },
            {
                id: "v4-p3-t03-q69",
                text: "Look at the graphic. Which level is the woman concerned about?",
                classification: "GRAPHIC",
                options: {
                    A: "Level 1",
                    B: "Level 2",
                    C: "Level 3",
                    D: "Level 4"
                },
                correctAnswer: "B",
                translation: "시각 정보에 의하면, 여자는 어떤 레벨에 대해 걱정하는가?",
                translation_A: "레벨 1",
                translation_B: "레벨 2",
                translation_C: "레벨 3",
                translation_D: "레벨 4"
            },
            {
                id: "v4-p3-t03-q70",
                text: "What does the woman suggest doing?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Contacting a colleague",
                    B: "Postponing an event",
                    C: "Working over the weekend",
                    D: "Making travel arrangements"
                },
                correctAnswer: "C",
                translation: "여자는 무엇을 하자고 제안하는가?",
                translation_A: "동료에게 연락하기",
                translation_B: "행사 연기하기",
                translation_C: "주말 동안 근무하기",
                translation_D: "여행 준비하기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Hi, Pablo. I wanted to talk to you about the video game we designed—the one we're launching soon." },
            { speaker: "Man", text: "Sure. Did something come up?" },
            { speaker: "Woman", text: "Well, I think the jungle level looks great. But in the underwater level, there's a problem with the part where the characters discover the lost city in the ocean. As I was going over the layout, I found a glitch in the game play." },
            { speaker: "Man", text: "Oh, OK. We still have time to fix it." },
            { speaker: "Woman", text: "Yes, but we should work on it as soon as possible. I could put some extra time in over the weekend. How about you?" },
            { speaker: "Man", text: "Probably—just let me check my calendar." }
        ],
        translation: "여: 안녕하세요, 파블로. 우리가 디자인한 비디오 게임에 대해 얘기하고 싶어요. 곧 출시할 게임이요.\n남: 네. 무슨 일이 생겼나요?\n여: 음, 정글 레벨은 좋아 보여요. 그런데 수중 레벨에서 캐릭터들이 바닷속 잃어버린 도시를 발견하는 부분에 문제가 있네요. 레이아웃을 검토하다가 게임 플레이에 결함이 있는 것을 발견했어요.\n남: 아, 알겠습니다. 아직 고칠 시간이 있어요.\n여: 네, 하지만 가능한 한 빨리 작업을 해야 돼요. 난 주말 동안 시간을 좀 더 낼 수 있어요. 파블로 씨는 어때요?\n남: 아마도요. 일정을 확인해 볼게요."
    }
];
