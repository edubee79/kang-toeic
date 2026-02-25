import { Part3Set } from '../types';

export const test5Data: Part3Set[] = [
    {
        testId: 5,
        vol: 4,
        setId: "v4-p3-t05-s01",
        contextType: "A1. 사무실 업무",
        questionRange: "32-34",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-32-34.mp3",
        questions: [
            {
                id: "v4-p3-t05-q32",
                text: "What problem does the woman describe?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "A room is not available.",
                    B: "A window will not open.",
                    C: "A projector is not working.",
                    D: "The weather has changed suddenly."
                },
                correctAnswer: "C",
                translation: "여자는 어떤 문제에 대해 설명하는가?",
                translation_A: "회의실을 이용할 수 없다.",
                translation_B: "창문이 열리지 않는다.",
                translation_C: "프로젝트가 작동하지 않는다.",
                translation_D: "날씨가 갑자기 바뀌었다."
            },
            {
                id: "v4-p3-t05-q33",
                text: "What does the man suggest doing?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Moving to a different room",
                    B: "Calling a technician",
                    C: "Canceling an event",
                    D: "Ordering some supplies"
                },
                correctAnswer: "A",
                translation: "남자는 무엇을 하라고 제안하는가?",
                translation_A: "다른 방으로 옮기기",
                translation_B: "기술자에게 전화하기",
                translation_C: "행사 취소하기",
                translation_D: "물품 주문하기"
            },
            {
                id: "v4-p3-t05-q34",
                text: "What does the man hand to the woman?",
                classification: "WHAT_WHICH",
                options: {
                    A: "An umbrella",
                    B: "Some keys",
                    C: "A cable",
                    D: "Some printouts"
                },
                correctAnswer: "C",
                translation: "남자는 여자에게 무엇을 건네주는가?",
                translation_A: "우산",
                translation_B: "열쇠",
                translation_C: "케이블",
                translation_D: "인쇄물"
            }
        ],
        script: [
            { speaker: "Woman", text: "Hello, Sencho. I'm practicing my presentation in the conference room across the hall, and the projector in there keeps shutting off. I think it's overheating. Has this happened before?" },
            { speaker: "Man", text: "Oh, that projector's old. It really needs to be replaced. If I were you, I'd just move to room 204 and practice there. That conference room has a window, so it's much nicer anyway." },
            { speaker: "Woman", text: "All right. Thanks." },
            { speaker: "Man", text: "By the way, you'll need a special cable to connect to the control panel in that room. Here, you can use this one. Just leave it plugged in when you're finished." }
        ],
        translation: "여: 안녕하세요, 센초 씨. 복도 맞은편 회의실에서 발표 연습을 하고 있는데요, 거기에 있는 프로젝터가 계속 꺼지네요. 과열된 것 같아요. 이런 일이 전에도 있었나요?\n남: 아, 그 프로젝터는 낡았어요. 정말로 교체해야 합니다. 제가 당신이라면 그냥 204호로 옮겨서 거기서 연습하겠어요. 그 회의실은 창문이 있어서 어쨌든 훨씬 더 좋거든요.\n여: 알겠어요. 감사합니다.\n남: 그런데 그 회의실 제어반에 연결하려면 특수 케이블이 필요할 거예요. 여기요, 이걸 쓰세요. 다 끝나면 그냥 꽂아 두세요."
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p3-t05-s02",
        contextType: "B3. 행사 / 연설",
        questionRange: "35-37",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-35-37.mp3",
        questions: [
            {
                id: "v4-p3-t05-q35",
                text: "What industry does Amanda Hoffman work in?",
                classification: "WHO_LOC",
                options: {
                    A: "Hospitality",
                    B: "Healthcare",
                    C: "Publishing",
                    D: "Information technology"
                },
                correctAnswer: "C",
                translation: "아만다 호프만은 어떤 업계에서 일하는가?",
                translation_A: "접객 서비스",
                translation_B: "의료",
                translation_C: "출판",
                translation_D: "정보 기술"
            },
            {
                id: "v4-p3-t05-q36",
                text: "According to the man, what is included in the registration packet?",
                classification: "DETAIL",
                options: {
                    A: "A map",
                    B: "A gift card",
                    C: "A schedule of events",
                    D: "A certificate of attendance"
                },
                correctAnswer: "B",
                translation: "남자에 따르면, 등록 안내 패키지에 무엇이 포함되어 있는가?",
                translation_A: "지도",
                translation_B: "상품권",
                translation_C: "행사 일정표",
                translation_D: "수료증"
            },
            {
                id: "v4-p3-t05-q37",
                text: "What does the man tell the woman to do?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Arrive early",
                    B: "Pay a fee",
                    C: "Wear a name badge",
                    D: "Choose a menu option"
                },
                correctAnswer: "A",
                translation: "남자는 여자에게 무엇을 하라고 말하는가?",
                translation_A: "일찍 도착하기",
                translation_B: "요금 지불하기",
                translation_C: "명찰 달기",
                translation_D: "메뉴 선택하기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Hi. I'm Amanda Hoffman, and I'm on the panel of publishing experts. I was told to check in here at the registration desk." },
            { speaker: "Man", text: "Yes, Ms. Hoffman. Welcome to the Portland Literary Conference. Here's your registration packet, which includes a gift card to thank you for participating." },
            { speaker: "Woman", text: "Oh, thank you. Just to confirm, the panel discussion begins at three P.M., right?" },
            { speaker: "Man", text: "Yes, but we do ask that all panel members arrive ten minutes beforehand. I hope you enjoy the conference!" }
        ],
        translation: "여: 안녕하세요. 아만다 호프만입니다. 출판 전문가 패널 중 한 명인데, 여기 등록 데스크에서 체크인하라고 들었어요.\n남: 네, 호프만 씨. 포틀랜드 문학 컨퍼런스에 오신 것을 환영합니다. 여기 등록 패키지가 있습니다. 참가를 고마워하는 의미에서 상품권이 들어 있어요.\n여: 아, 감사합니다. 확인 차 여쭤보는데, 패널 토론이 오후 3시에 시작하는 게 맞죠?\n남: 네, 하지만 모든 패널 멤버들께 10분 일찍 도착해 달라고 요청하고 있습니다. 컨퍼런스를 즐기시기 바랍니다!"
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p3-t05-s03",
        contextType: "B4. 일반문의",
        questionRange: "38-40",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-38-40.mp3",
        questions: [
            {
                id: "v4-p3-t05-q38",
                text: "What event will the woman attend this weekend?",
                classification: "DETAIL",
                options: {
                    A: "A wedding",
                    B: "A birthday party",
                    C: "A retirement dinner",
                    D: "A graduation celebration"
                },
                correctAnswer: "B",
                translation: "여자는 이번 주말에 어떤 행사에 참석할 것인가?",
                translation_A: "결혼식",
                translation_B: "생일 파티",
                translation_C: "은퇴 기념 저녁 식사",
                translation_D: "졸업 축하 행사"
            },
            {
                id: "v4-p3-t05-q39",
                text: "What does the man offer to do?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Authorize free shipping",
                    B: "Apply a discount",
                    C: "Provide a sample",
                    D: "Make a recommendation"
                },
                correctAnswer: "D",
                translation: "남자는 무엇을 하겠다고 제안하는가?",
                translation_A: "무료 배송 승인하기",
                translation_B: "할인 적용하기",
                translation_C: "샘플 제공하기",
                translation_D: "추천하기"
            },
            {
                id: "v4-p3-t05-q40",
                text: "What does the woman ask about?",
                classification: "DETAIL",
                options: {
                    A: "An expiration date",
                    B: "A manufacturer's guarantee",
                    C: "The origin of a product",
                    D: "The cost of a product"
                },
                correctAnswer: "A",
                translation: "여자는 무엇에 대해 물어보는가?",
                translation_A: "유효 기간",
                translation_B: "제조사 보증",
                translation_C: "원산지",
                translation_D: "제품 가격"
            }
        ],
        script: [
            { speaker: "Woman", text: "I'm looking for a gift for my brother's birthday party this weekend. He loves teas, and you have so many varieties!" },
            { speaker: "Man", text: "Well, I could recommend a quality brand if you know what type he enjoys." },
            { speaker: "Woman", text: "Oh, I'm not sure. Hmm. Maybe I should get him a gift card so he can choose his own." },
            { speaker: "Man", text: "That's a good idea." },
            { speaker: "Woman", text: "I'll get one for 50 dollars. Do your cards have an expiration date?" },
            { speaker: "Man", text: "Yes. We ask that they be used within one year of purchase." }
        ],
        translation: "여: 이번 주말에 있을 제 남동생의 생일 파티 선물을 찾고 있어요. 동생이 차를 정말 좋아하는데, 여기 종류가 아주 많네요!\n남: 음, 동생분이 어떤 종류를 즐기는지 아신다면 고급 브랜드를 추천해 드릴 수 있어요.\n여: 아, 잘 모르겠어요. 흠… 그냥 동생이 직접 고를 수 있게 상품권을 사줘야겠네요.\n남: 좋은 생각입니다.\n여: 50달러짜리 하나 주세요. 상품권에 유효 기간이 있나요?\n남: 네. 구매 후 1년 이내에 사용하시길 권하고 있습니다."
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p3-t05-s04",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "41-43",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-41-43.mp3",
        questions: [
            {
                id: "v4-p3-t05-q41",
                text: "Why is the woman visiting?",
                classification: "WHY_REASON",
                options: {
                    A: "To promote a product",
                    B: "To sign a contract",
                    C: "To tour a facility",
                    D: "To inspect some equipment"
                },
                correctAnswer: "A",
                translation: "여자는 왜 방문했는가?",
                translation_A: "제품을 홍보하기 위해서",
                translation_B: "계약서에 서명하기 위해서",
                translation_C: "시설을 견학하기 위해서",
                translation_D: "장비를 점검하기 위해서"
            },
            {
                id: "v4-p3-t05-q42",
                text: "What did the woman's company design?",
                classification: "DETAIL",
                options: {
                    A: "A digital security system",
                    B: "A device to lift heavy objects",
                    C: "An application to monitor machines",
                    D: "Protective clothing for workers"
                },
                correctAnswer: "C",
                translation: "여자의 회사는 무엇을 설계했는가?",
                translation_A: "디지털 보안 시스템",
                translation_B: "무거운 물체를 들어 올리는 장치",
                translation_C: "기계를 모니터링하는 응용 프로그램",
                translation_D: "작업자용 보호복"
            },
            {
                id: "v4-p3-t05-q43",
                text: "What does the woman say her company can provide?",
                classification: "DETAIL",
                options: {
                    A: "A new client discount",
                    B: "A training video",
                    C: "An extended warranty",
                    D: "Customer testimonials"
                },
                correctAnswer: "B",
                translation: "여자는 그녀의 회사가 무엇을 제공할 수 있다고 말하는가?",
                translation_A: "신규 고객 할인",
                translation_B: "교육용 동영상",
                translation_C: "보증 기간 연장",
                translation_D: "고객 추천 글"
            }
        ],
        script: [
            { speaker: "Man 1", text: "Thanks for meeting with us, Ms. Raj. We're excited to learn about the product your company has developed for factories like ours." },
            { speaker: "Woman", text: "I'm happy to tell you about it. It's an application to monitor factory machines. It identifies problems in operations and generates a report about the efficiency of each machine." },
            { speaker: "Man 2", text: "That sounds great! We have about 100 machine operators here. How much training would be involved?" },
            { speaker: "Woman", text: "About an hour's worth. We provide a video with step-by-step instructions." },
            { speaker: "Man 1", text: "Excellent. That's good to know." }
        ],
        translation: "남1: 시간 내 주셔서 감사합니다, 라즈 씨. 귀사에서 저희 같은 공장을 위해 개발한 제품에 대해 듣게 되어 기쁩니다.\n여: 설명해 드릴 수 있어 기쁘네요. 이건 공장 기계를 모니터링하는 응용 프로그램입니다. 가동 중에 발생하는 문제를 식별하고 각 기계의 효율성에 대한 보고서를 생성하죠.\n남2: 멋지네요! 여기에는 약 100명의 기계 조작원이 있는데, 교육이 얼마나 필요할까요?\n여: 약 한 시간 정도 분량입니다. 단계별 지침이 담긴 동영상을 제공해 드려요.\n남1: 훌륭하군요. 좋은 정보 감사합니다."
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p3-t05-s05",
        contextType: "C1. 항공 / 교통",
        questionRange: "44-46",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-44-46.mp3",
        questions: [
            {
                id: "v4-p3-t05-q44",
                text: "Who most likely is the man?",
                classification: "WHO_LOC",
                options: {
                    A: "A theater employee",
                    B: "A taxi driver",
                    C: "A train conductor",
                    D: "A construction worker"
                },
                correctAnswer: "B",
                translation: "남자는 누구일 것 같은가?",
                translation_A: "극장 직원",
                translation_B: "택시 기사",
                translation_C: "열차 승무원",
                translation_D: "공사 현장 인부"
            },
            {
                id: "v4-p3-t05-q45",
                text: "What is causing a problem?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "A truck is too heavy.",
                    B: "An event has been delayed.",
                    C: "A parking area is full.",
                    D: "A road is closed."
                },
                correctAnswer: "D",
                translation: "무엇이 문제를 일으키고 있는가?",
                translation_A: "트럭이 너무 무겁다.",
                translation_B: "행사가 지연되었다.",
                translation_C: "주차장이 꽉 찼다.",
                translation_D: "도로가 폐쇄되었다."
            },
            {
                id: "v4-p3-t05-q46",
                text: "What does the man say he will do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Ask for a refund",
                    B: "Take a different route",
                    C: "Postpone a trip",
                    D: "File a complaint"
                },
                correctAnswer: "B",
                translation: "남자는 무엇을 하겠다고 말하는가?",
                translation_A: "환불 요청하기",
                translation_B: "다른 경로로 가기",
                translation_C: "여행 연기하기",
                translation_D: "항의하기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Hi. I'd like to go to the Baldwin Theater. The address is 91 Circle Drive." },
            { speaker: "Man", text: "Sure, but did you know they're resurfacing Circle Drive? I just dropped someone off in that area." },
            { speaker: "Woman", text: "Oh, really? I've got a ticket to a play, and the show starts at seven thirty. They don't let you in if you're late." },
            { speaker: "Man", text: "Well, let me see. I can turn onto Felton Street and cut over to Lancaster Drive. It's a little out of the way, but it'll get you close to the theater." }
        ],
        translation: "여: 안녕하세요. 볼드윈 극장으로 가고 싶어요. 주소는 서클 드라이브 91번지입니다.\n남: 알겠습니다만, 서클 드라이브 재포장 공사를 하고 있는 건 아시나요? 방금 그 근처에 누군가를 내려주고 왔거든요.\n여: 아, 정말요? 연극 티켓을 끊었는데 공연이 7시 30분에 시작해요. 늦으면 입장시켜주지 않거든요.\n남: 흠, 가만 보자… 펠튼 가로 들어서서 랭커스터 드라이브로 가로질러 갈 수 있어요. 약간 돌아가는 길이지만 극장 근처까지 갈 수 있을 겁니다."
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p3-t05-s06",
        contextType: "A4. 재무 / 비용 / 승인",
        questionRange: "47-49",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-47-49.mp3",
        questions: [
            {
                id: "v4-p3-t05-q47",
                text: "Why does the woman say, \"Last year we sent only two representatives\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To explain a delay",
                    B: "To compliment a team",
                    C: "To point out that an event was unsuccessful",
                    D: "To question a decision"
                },
                correctAnswer: "D",
                translation: "여자는 왜 \"작년에는 대표를 두 명만 보냈잖아요\"라고 말하는가?",
                translation_A: "지연에 대해 설명하기 위해",
                translation_B: "팀을 칭찬하기 위해",
                translation_C: "행사가 성공적이지 않았음을 지적하기 위해",
                translation_D: "결정에 의문을 제기하기 위해"
            },
            {
                id: "v4-p3-t05-q48",
                text: "According to the man, what do some clients want to do?",
                classification: "DETAIL",
                options: {
                    A: "Increase their online offerings",
                    B: "Obtain additional financing",
                    C: "Open a new office",
                    D: "Recruit more employees"
                },
                correctAnswer: "A",
                translation: "남자에 따르면, 일부 고객들은 무엇을 하고 싶어 하는가?",
                translation_A: "온라인 제공 상품 늘리기",
                translation_B: "추가 자금 확보하기",
                translation_C: "새 사무실 열기",
                translation_D: "더 많은 직원 채용하기"
            },
            {
                id: "v4-p3-t05-q49",
                text: "According to the man, what is the Renova Hotel offering this month?",
                classification: "DETAIL",
                options: {
                    A: "A new shuttle service",
                    B: "A discount for businesses",
                    C: "A flexible cancellation policy",
                    D: "Complimentary meals"
                },
                correctAnswer: "B",
                translation: "남자에 따르면, 레노바 호텔은 이번 달에 무엇을 제공하는가?",
                translation_A: "새로운 셔틀 서비스",
                translation_B: "기업용 할인",
                translation_C: "유연한 취소 정책",
                translation_D: "무료 식사"
            }
        ],
        script: [
            { speaker: "Woman", text: "Do you have a minute to discuss the budget for the upcoming Vancouver meeting? I've looked over the travel requests you submitted for your team. Last year we sent only two representatives." },
            { speaker: "Man", text: "Ms. Tamura has just given us approval to send three. In fact, the clients are looking to expand their online service options, and the third representative we're bringing is particularly knowledgeable about that." },
            { speaker: "Woman", text: "OK. I guess we'll have to find savings somewhere else, then." },
            { speaker: "Man", text: "I've already looked into some new meeting venues. The Renova Hotel is offering discounted corporate rates this month." }
        ],
        translation: "여: 곧 있을 밴쿠버 회의 예산에 대해 이야기할 시간 좀 있으신가요? 당신이 팀을 위해 제출한 출장 신청서를 살펴봤어요. 작년에는 대표를 두 명만 보냈었잖아요.\n남: 타무라 씨께서 세 명을 보내는 것을 방금 승인해 주셨습니다. 사실 고객들이 온라인 서비스 옵션 확장을 고려하고 있는데, 저희가 데려가려는 세 번째 대표가 그 분야에 대해 특히 잘 알고 있거든요.\n여: 알겠어요. 그럼 다른 곳에서 절약할 방법을 찾아야겠네요.\n남: 제가 이미 새로운 회의 장소 몇 곳을 알아봤습니다. 레노바 호텔에서 이번 달에 법인 할인 요금을 제공하고 있어요."
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p3-t05-s07",
        contextType: "B3. 행사 / 연설",
        questionRange: "50-52",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-50-52.mp3",
        questions: [
            {
                id: "v4-p3-t05-q50",
                text: "What problem does the woman mention?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "A decrease in ticket sales",
                    B: "A lack of exhibition space",
                    C: "A colleague's resignation",
                    D: "A damaged painting"
                },
                correctAnswer: "A",
                translation: "여자는 어떤 문제를 언급하는가?",
                translation_A: "티켓 판매 감소",
                translation_B: "전시 공간 부족",
                translation_C: "동료의 사임",
                translation_D: "손상된 그림"
            },
            {
                id: "v4-p3-t05-q51",
                text: "What does the man suggest doing?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Relocating an exhibit",
                    B: "Consulting a specialist",
                    C: "Adding security measures",
                    D: "Introducing a new activity"
                },
                correctAnswer: "D",
                translation: "남자는 무엇을 하라고 제안하는가?",
                translation_A: "전시회 위치 옮기기",
                translation_B: "전문가와 상담하기",
                translation_C: "보안 조치 추가하기",
                translation_D: "새로운 활동 도입하기"
            },
            {
                id: "v4-p3-t05-q52",
                text: "What will the man most likely do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Write a press release",
                    B: "Attend a budget meeting",
                    C: "Make a list of supplies",
                    D: "Plan a site visit"
                },
                correctAnswer: "C",
                translation: "남자는 다음에 무엇을 할 것 같은가?",
                translation_A: "보도 자료 작성하기",
                translation_B: "예산 회의 참석하기",
                translation_C: "준비물 목록 만들기",
                translation_D: "현장 방문 계획하기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Good morning. I wanted to meet today to discuss the recent decline in our museum's ticket sales. You're the outreach coordinator, so I'm hoping you might have some ideas on how we can attract more community involvement." },
            { speaker: "Man", text: "Well, I recently read an article about a museum in Chicago that has a room where visitors can paint on the walls. It's become very popular. We could try it here—we have that huge room on the third floor that isn't being used." },
            { speaker: "Woman", text: "That's a great idea. Can you draft a list of the supplies we would need to make sure we have the budget for them?" }
        ],
        translation: "여: 안녕하세요. 최근 우리 박물관의 티켓 판매가 줄어든 것에 대해 논의하고 싶어서 오늘 뵙자고 했어요. 당신이 지역 홍보 담당자이니까, 어떻게 하면 지역 사회의 참여를 더 많이 이끌어낼 수 있을지 아이디어가 있을 것 같아서요.\n남: 음, 최근에 방문객들이 벽에 그림을 그릴 수 있는 방이 있는 시카고의 한 박물관에 관한 기사를 읽었습니다. 아주 인기가 많아졌더라고요. 우리도 여기서 해볼 수 있을 거예요. 3층에 사용하지 않는 아주 큰 방이 있잖아요.\n여: 멋진 생각이네요. 필요한 물품 목록을 작성해 주시겠어요? 예산이 충분한지 확인해 볼게요."
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p3-t05-s08",
        contextType: "B1. 쇼핑",
        questionRange: "53-55",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-53-55.mp3",
        questions: [
            {
                id: "v4-p3-t05-q53",
                text: "Where most likely are the speakers?",
                classification: "WHO_LOC",
                options: {
                    A: "At a clothing factory",
                    B: "At a bookstore",
                    C: "At a tailor's shop",
                    D: "At a furniture store"
                },
                correctAnswer: "D",
                translation: "화자들은 어디에 있겠는가?",
                translation_A: "의류 공장",
                translation_B: "서점",
                translation_C: "양복점",
                translation_D: "가구점"
            },
            {
                id: "v4-p3-t05-q54",
                text: "According to the man, why will a product cost more?",
                classification: "WHY_REASON",
                options: {
                    A: "It includes an extended warranty.",
                    B: "It is a custom order.",
                    C: "A rebate has expired.",
                    D: "Shipping will be expedited."
                },
                correctAnswer: "B",
                translation: "남자에 따르면, 제품 가격이 왜 더 비싼가?",
                translation_A: "보증 연장 기간이 포함되어 있다.",
                translation_B: "주문 제작 제품이다.",
                translation_C: "환급 기간이 만료되었다.",
                translation_D: "배송이 신속하게 처리될 것이다."
            },
            {
                id: "v4-p3-t05-q55",
                text: "What does the man request?",
                classification: "DETAIL",
                options: {
                    A: "A purchase receipt",
                    B: "A delivery address",
                    C: "A form of identification",
                    D: "An account number"
                },
                correctAnswer: "C",
                translation: "남자는 무엇을 요청하는가?",
                translation_A: "구매 영수증",
                translation_B: "배송 주소",
                translation_C: "신분증",
                translation_D: "계좌 번호"
            }
        ],
        script: [
            { speaker: "Woman 1", text: "Thilo, this is Ms. Gao, a new customer. She's purchasing an upholstered sofa. We just walked around our showroom, and she's decided on our Hudson model." },
            { speaker: "Man", text: "One of our best sellers!" },
            { speaker: "Woman 2", text: "It is really comfortable." },
            { speaker: "Woman 1", text: "Can you assist her with the paperwork for our payment plan?" },
            { speaker: "Man", text: "Sure. Happy to help you, Ms. Gao. Are you getting the standard fabric?" },
            { speaker: "Woman 2", text: "No—I'd like to select a custom fabric." },
            { speaker: "Man", text: "Just so you know, the price will increase some with a custom order." },
            { speaker: "Woman 2", text: "I think it's worth the extra cost. It'll really brighten up my living room." },
            { speaker: "Man", text: "Wonderful. Now in order to set up a payment plan, I'll need to see some identification. A driver's license will do." }
        ],
        translation: "여1: 틸로, 이쪽은 신규 고객 가오 씨예요. 천을 씌운 소파를 구매하실 거고요. 전시실을 함께 둘러봤는데 허드슨 모델로 결정하셨어요.\n남: 베스트셀러 상품이죠!\n여2: 정말 안락해요.\n여1: 결제 관련 서류를 작성하시는 걸 도와드릴 수 있나요?\n남: 물론이죠. 도와드리게 되어 기쁩니다, 가오 씨. 일반 패브릭으로 하시나요?\n여2: 아니요, 주문 제작 패브릭을 선택하려고요.\n남: 아시겠지만, 주문 제작을 하시면 가격은 올라갑니다.\n여2: 추가 비용을 지불할 만 한 것 같아요. 거실이 정말 밝아 보일 거예요.\n남: 좋습니다. 자, 할부 결제를 설정하려면 신분증을 확인해야 하는데요. 운전면허증이면 됩니다."
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p3-t05-s09",
        contextType: "B2. 주문 / 배송",
        questionRange: "56-58",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-56-58.mp3",
        questions: [
            {
                id: "v4-p3-t05-q56",
                text: "Where most likely are the speakers?",
                classification: "WHO_LOC",
                options: {
                    A: "At a hotel",
                    B: "At a factory",
                    C: "At a retail store",
                    D: "At a trade show"
                },
                correctAnswer: "B",
                translation: "화자들은 어디에 있겠는가?",
                translation_A: "호텔",
                translation_B: "공장",
                translation_C: "소매점",
                translation_D: "무역 박람회"
            },
            {
                id: "v4-p3-t05-q57",
                text: "What feature does the man emphasize about some chairs?",
                classification: "DETAIL",
                options: {
                    A: "The color",
                    B: "The price",
                    C: "The shape",
                    D: "The durability"
                },
                correctAnswer: "C",
                translation: "남자는 의자의 어떤 특징을 강조하는가?",
                translation_A: "색상",
                translation_B: "가격",
                translation_C: "모양",
                translation_D: "내구성"
            },
            {
                id: "v4-p3-t05-q58",
                text: "What does the man say he will do later?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Modify a design",
                    B: "E-mail a contract",
                    C: "Create an invoice",
                    D: "Send a photo"
                },
                correctAnswer: "D",
                translation: "남자는 나중에 무엇을 하겠다고 말하는가?",
                translation_A: "디자인 수정하기",
                translation_B: "계약서 이메일 보내기",
                translation_C: "인보이스 작성하기",
                translation_D: "사진 전송하기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Good morning, Mr. Tong. I'm here to check on my order. How are the chairs coming along?" },
            { speaker: "Man", text: "The machines have been assembling them. They're almost ready. Right over here." },
            { speaker: "Woman", text: "Wow, they look so nice!" },
            { speaker: "Man", text: "Look at the curved shape of the back. The only way you can get that unique shape is by means of the specialized laser we use." },
            { speaker: "Woman", text: "Amazing! Can I also see the pullout sofa?" },
            { speaker: "Man", text: "Not right now. It's being treated with mineral oil. But later today I should be able to take a photo and send it to you." }
        ],
        translation: "여: 안녕하세요, 퉁 씨. 주문 좀 확인하러 왔어요. 의자들은 어떻게 되어 가나요?\n남: 기계로 조립하고 있어요. 거의 다 됐습니다. 이쪽이에요.\n여: 와, 정말 멋지네요!\n남: 등받이의 곡선 모양을 보세요. 저런 독특한 모양은 저희가 사용하는 특수 레이저를 써야만 나올 수 있는 거예요.\n여: 놀랍네요! 소파 베드도 볼 수 있을까요?\n남: 지금은 안 됩니다. 미네랄 오일 처리를 하고 있거든요. 하지만 오늘 늦게 사진을 찍어서 보내드릴 수 있습니다."
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p3-t05-s10",
        contextType: "A3. 마케팅 / 비즈니스",
        questionRange: "59-61",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-59-61.mp3",
        questions: [
            {
                id: "v4-p3-t05-q59",
                text: "What will happen next month?",
                classification: "DETAIL",
                options: {
                    A: "An award will be given.",
                    B: "A new product will launch.",
                    C: "A colleague will retire.",
                    D: "An office will relocate."
                },
                correctAnswer: "C",
                translation: "다음 달에 무슨 일이 일어나겠는가?",
                translation_A: "시상식이 열릴 것이다.",
                translation_B: "신제품이 출시될 것이다.",
                translation_C: "동료가 은퇴할 것이다.",
                translation_D: "사무실을 이전할 것이다."
            },
            {
                id: "v4-p3-t05-q60",
                text: "What department do the speakers work in?",
                classification: "WHO_LOC",
                options: {
                    A: "Sales",
                    B: "Human Resources",
                    C: "Legal",
                    D: "Accounting"
                },
                correctAnswer: "A",
                translation: "화자들은 어느 부서에서 근무하는가?",
                translation_A: "영업부",
                translation_B: "인사부",
                translation_C: "법무부",
                translation_D: "회계부"
            },
            {
                id: "v4-p3-t05-q61",
                text: "What does the man imply when he says, \"we need someone with experience\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "The team has grown very quickly.",
                    B: "The woman should apply for a job.",
                    C: "A job description should be revised.",
                    D: "A new manager is not experienced enough."
                },
                correctAnswer: "B",
                translation: "남자가 \"경력 있는 사람이 필요해요\"라고 말하며 암시하는 것은 무엇인가?",
                translation_A: "팀이 아주 빠르게 성장했다.",
                translation_B: "여자가 그 일자리에 지원해야 한다.",
                translation_C: "직무 기술서를 수정해야 한다.",
                translation_D: "신임 관리자가 경력이 충분하지 않다."
            }
        ],
        script: [
            { speaker: "Man", text: "Hi, So-Jin. I just heard that Ms. Yoon is retiring next month." },
            { speaker: "Woman", text: "I'll be sorry to see her go. She was my mentor when I first joined the firm, and we've worked on dozens of projects together." },
            { speaker: "Man", text: "It's a bit hard to imagine our sales team without her. Has anybody approached you about leading the team after she's gone?" },
            { speaker: "Woman", text: "Yes, and I've thought about it. It's a big step up, even for someone like me who's worked in Sales for eight years. And Human Resources hasn't even posted the job description yet." },
            { speaker: "Man", text: "Well, we need someone with experience." }
        ],
        translation: "남: 안녕하세요, 소진 씨. 윤 부장님이 다음 달에 은퇴하신다는 소식을 방금 들었어요.\n여: 윤 부장님이 떠나신다니 아쉽네요. 제가 처음 입사했을 때 멘토셨고, 수십 개의 프로젝트를 함께 했거든요.\n남: 부장님 없는 영업 팀은 상상하기 조금 힘드네요. 부장님이 떠나신 후에 팀을 이끌어 보는 것에 대해 누군가 제안한 적이 있나요?\n여: 네, 생각해 봤어요. 영업부에서 8년 동안 일한 저 같은 사람에게도 큰 도약인 것 같아요. 그리고 인사부에서는 아직 채용 공고를 올리지도 않았고요.\n남: 글쎄요, 우리는 경력 있는 사람이 필요하니까요."
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p3-t05-s11",
        contextType: "C1. 항공 / 교통",
        questionRange: "62-64",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-62-64.mp3",
        image: "/images/ETS_TOEIC_4/Test_05/Part_03/v4_p3_t05_q62.png",
        questions: [
            {
                id: "v4-p3-t05-q62",
                text: "Why are the speakers in New York?",
                classification: "WHY_REASON",
                options: {
                    A: "They saw a play.",
                    B: "They attended a conference.",
                    C: "They met with some clients.",
                    D: "They viewed some real estate."
                },
                correctAnswer: "B",
                translation: "화자들은 왜 뉴욕에 와 있는가?",
                translation_A: "연극을 보러",
                translation_B: "컨퍼런스에 참석하러",
                translation_C: "고객들을 만나러",
                translation_D: "부동산 매물을 보러"
            },
            {
                id: "v4-p3-t05-q63",
                text: "What does the woman ask the man about?",
                classification: "DETAIL",
                options: {
                    A: "Locating some information",
                    B: "Applying for a position",
                    C: "Opening a branch office",
                    D: "Making a reservation"
                },
                correctAnswer: "A",
                translation: "여자는 남자에게 무엇에 대해 묻는가?",
                translation_A: "정보 찾기",
                translation_B: "일자리 지원하기",
                translation_C: "지사 개설하기",
                translation_D: "예약하기"
            },
            {
                id: "v4-p3-t05-q64",
                text: "Look at the graphic. Where will the man travel to next?",
                classification: "GRAPHIC",
                options: {
                    A: "Shady Grove",
                    B: "Braddock Bay",
                    C: "Largo",
                    D: "Ashburn"
                },
                correctAnswer: "C",
                translation: "시각 정보를 보시오. 남자는 다음에 어디로 이동하겠는가?",
                translation_A: "쉐이디 그로브",
                translation_B: "브래독 베이",
                translation_C: "라르고",
                translation_D: "애쉬번"
            }
        ],
        script: [
            { speaker: "Woman", text: "Rajesh, it was nice to see you here in New York again this year." },
            { speaker: "Man", text: "Same here. I look forward to attending the Theater Technology Conference again next year." },
            { speaker: "Woman", text: "I really enjoyed your talk, especially the information you provided on acoustics. Is it published anywhere? I'd like to have a closer look." },
            { speaker: "Man", text: "Actually, it is. You can find the article in last November's issue of Theater Sound. It's posted online." },
            { speaker: "Woman", text: "Great. I'll look it up." },
            { speaker: "Man", text: "Oh—my train leaves in fourteen minutes. I have to get going. Safe travels, Camille!" }
        ],
        translation: "여: 라제쉬 씨, 올해 여기서 다시 만나서 반가웠어요.\n남: 저도요. 내년에도 이 극장 기술 컨퍼런스에 다시 참석하기를 고대하고 있습니다.\n여: 강연 정말 잘 들었어요. 특히 음향 효과에 관해 알려주신 정보가 유익했어요. 어디 게재된 곳이 있나요? 좀 더 자세히 보고 싶어서요.\n남: 네, 있습니다. '시어터 사운드' 지난 11월호에서 그 기사를 찾으실 수 있을 거예요. 온라인에도 올라와 있습니다.\n여: 좋네요. 찾아볼게요.\n남: 아, 제 기차가 14분 뒤에 떠나요. 이제 가봐야겠네요. 조심히 가요, 카밀!"
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p3-t05-s12",
        contextType: "B4. 일반문의",
        questionRange: "65-67",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-65-67.mp3",
        image: "/images/ETS_TOEIC_4/Test_05/Part_03/v4_p3_t05_q65.png",
        questions: [
            {
                id: "v4-p3-t05-q65",
                text: "What does the woman ask the man about?",
                classification: "DETAIL",
                options: {
                    A: "Whether a coupon is valid",
                    B: "Whether a food is spicy",
                    C: "Whether a drink is included",
                    D: "Whether any seats are available"
                },
                correctAnswer: "B",
                translation: "여자는 남자에게 무엇에 대해 묻는가?",
                translation_A: "쿠폰 사용 가능 여부",
                translation_B: "음식이 매운지 여부",
                translation_C: "음료 포함 여부",
                translation_D: "빈 좌석 유무"
            },
            {
                id: "v4-p3-t05-q66",
                text: "Look at the graphic. Which special does the woman order?",
                classification: "GRAPHIC",
                options: {
                    A: "Special 1",
                    B: "Special 2",
                    C: "Special 3",
                    D: "Special 4"
                },
                correctAnswer: "C",
                translation: "시각 정보를 보시오. 여자는 어떤 오늘의 특선 요리를 주문하는가?",
                translation_A: "특선 1",
                translation_B: "특선 2",
                translation_C: "특선 3",
                translation_D: "특선 4"
            },
            {
                id: "v4-p3-t05-q67",
                text: "What will the woman most likely do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Move her car",
                    B: "Go to a patio",
                    C: "Make a reservation",
                    D: "Meet some friends"
                },
                correctAnswer: "B",
                translation: "여자는 다음에 무엇을 할 것 같은가?",
                translation_A: "차 옮기기",
                translation_B: "테라스로 나가기",
                translation_C: "예약하기",
                translation_D: "친구들 만나기"
            }
        ],
        script: [
            { speaker: "Man", text: "Welcome to Orlando's Deli. If you'd like to try one of our daily specials, they're on the board behind me." },
            { speaker: "Woman", text: "Wow, that's a great menu. The vegetable curry looks good. Is it spicy?" },
            { speaker: "Man", text: "No, it's very mild—but we just sold out, unfortunately." },
            { speaker: "Woman", text: "In that case, I'll have the lasagna." },
            { speaker: "Man", text: "Great choice. By the way, we just opened our new patio this week in case you'd like to sit outside." },
            { speaker: "Woman", text: "Actually, it is a beautiful day. And your patio looks lovely." }
        ],
        translation: "남: '올랜도 델리'에 오신 것을 환영합니다. 오늘의 특선 메뉴를 드시고 싶다면 제 뒤에 있는 게시판을 확인해 주세요.\n여: 와, 메뉴가 정말 알차네요. 야채 커리가 맛있어 보여요. 혹시 맵나요?\n남: 아니요, 아주 순한 맛이에요. 그런데 아쉽게도 방금 다 팔렸습니다.\n여: 그렇다면 라자냐로 할게요.\n남: 탁월한 선택이십니다. 참, 혹시 야외에 앉고 싶으시다면 이번 주에 새로 테라스를 오픈했어요.\n여: 정말 날씨가 좋긴 하네요. 테라스도 아주 예쁘고 보이고요."
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p3-t05-s13",
        contextType: "C1. 항공 / 교통",
        questionRange: "68-70",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-68-70.mp3",
        image: "/images/ETS_TOEIC_4/Test_05/Part_03/v4_p3_t05_q68.png",
        questions: [
            {
                id: "v4-p3-t05-q68",
                text: "What is the woman happy about?",
                classification: "DETAIL",
                options: {
                    A: "She happened to meet some friends.",
                    B: "The weather is perfect for an activity.",
                    C: "The park was closer than expected.",
                    D: "There are few people in the park."
                },
                correctAnswer: "D",
                translation: "여자는 무엇에 기뻐하는가?",
                translation_A: "우연히 친구들을 만나서",
                translation_B: "날씨가 활동하기에 완벽해서",
                translation_C: "공원이 생각보다 가까워서",
                translation_D: "공원에 사람이 별로 없어서"
            },
            {
                id: "v4-p3-t05-q69",
                text: "Look at the graphic. How far will the speakers hike?",
                classification: "GRAPHIC",
                options: {
                    A: "7 kilometers",
                    B: "5 kilometers",
                    C: "2 kilometers",
                    D: "1 kilometer"
                },
                correctAnswer: "B",
                translation: "시각 정보를 보시오. 화자들은 얼마나 멀리 하이킹을 하겠는가?",
                translation_A: "7킬로미터",
                translation_B: "5킬로미터",
                translation_C: "2킬로미터",
                translation_D: "1킬로미터"
            },
            {
                id: "v4-p3-t05-q70",
                text: "What can the speakers do while waiting for the shuttle?",
                classification: "DETAIL",
                options: {
                    A: "Buy some snacks",
                    B: "Watch a video",
                    C: "Visit a gift shop",
                    D: "Rent some equipment"
                },
                correctAnswer: "B",
                translation: "화자들은 셔틀버스를 기다리는 동안 무엇을 할 수 있는가?",
                translation_A: "간식 사기",
                translation_B: "동영상 보기",
                translation_C: "기념품점 방문하기",
                translation_D: "장비 대여하기"
            }
        ],
        script: [
            { speaker: "Woman", text: "I'm excited about our hike today here at Marina Park. I'm so glad we got to the park early before it gets crowded." },
            { speaker: "Man", text: "Let's take a look at the map. We're at the visitor center, and there's a shuttle that stops at different trailheads." },
            { speaker: "Woman", text: "Right. It looks like the Creek Trail and the Pond Trail are fairly short. I'd like to do a more challenging hike." },
            { speaker: "Man", text: "OK. How about the Waterfall Trail?" },
            { speaker: "Woman", text: "That sounds good. And look—there's a video about the park. We can watch while we wait." }
        ],
        translation: "여: 오늘 여기 마리나 공원에서 하이킹을 하게 되어 신나요. 붐비기 전에 공원에 일찍 도착해서 정말 다행이에요.\n남: 지도를 한번 보죠. 우리는 방문객 센터에 있고, 각 탐방로의 시작점에 멈추는 셔틀버스가 있어요.\n여: 맞아요. '크리크 트레일'과 '폰드 트레일'은 꽤 짧아 보이네요. 전 좀 더 도전적인 하이킹을 하고 싶어요.\n남: 그래요. '워터폴 트레일'은 어때요?\n여: 좋네요. 아, 저기 보세요. 공원에 관한 비디오가 있네요. 기다리는 동안 볼 수 있겠어요."
    }
];
