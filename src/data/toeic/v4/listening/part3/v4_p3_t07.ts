import { Part3Set } from '../types';

export const test7Data: Part3Set[] = [
    {
        testId: 7,
        vol: 4,
        setId: "v4-p3-t07-s01",
        contextType: "B1. 쇼핑",
        questionRange: "32-34",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-32-34.mp3",
        questions: [
            {
                id: "v4-p3-t07-q32",
                text: "What is the woman preparing to do?",
                classification: "DETAIL",
                options: {
                    A: "Conduct an inspection",
                    B: "Film a cooking demonstration",
                    C: "Offer some product samples",
                    D: "Make a purchase"
                },
                correctAnswer: "C",
                translation: "여자는 무엇을 하려고 준비하고 있는가?",
                translation_A: "점검 시행",
                translation_B: "요리 시연 촬영",
                translation_C: "제품 견본 제공",
                translation_D: "구매"
            },
            {
                id: "v4-p3-t07-q33",
                text: "Where is the conversation most likely taking place?",
                classification: "WHO_LOC",
                options: {
                    A: "At a restaurant",
                    B: "At a factory",
                    C: "At an organic farm",
                    D: "At a grocery store"
                },
                correctAnswer: "D",
                translation: "대화는 어디서 이루어지겠는가?",
                translation_A: "음식점",
                translation_B: "공장",
                translation_C: "유기농 농장",
                translation_D: "식료품점"
            },
            {
                id: "v4-p3-t07-q34",
                text: "What does the man offer to help with?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Scheduling an interview",
                    B: "Mixing some ingredients",
                    C: "Carrying some supplies",
                    D: "Assembling some equipment"
                },
                correctAnswer: "C",
                translation: "남자는 무엇을 돕겠다고 제안하는가?",
                translation_A: "면접 일정 잡기",
                translation_B: "재료 혼합하기",
                translation_C: "물품 운반하기",
                translation_D: "장비 조립하기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Hi. I'm Gabriela Alvarez of Organic Easy Meals. I'm scheduled to offer some samples of our new vegetable chips to your customers from three to five P.M." },
            { speaker: "Man", text: "Oh yes. Hello, Ms. Alvarez. I'm Ryan Hughes, the manager. We have a table set up for you at the end of aisle eight. That's our snacks aisle." },
            { speaker: "Woman", text: "Thanks. I'll start bringing in food and some equipment from my truck. But first I'd like to take a look at the table I'll be using." },
            { speaker: "Man", text: "Sounds good. If you'd like any help bringing in your stuff, just let me know." }
        ],
        translation: "여: 안녕하세요. 오가닉 이지밀의 가브리엘라 알바레즈입니다. 오후 3시부터 5시까지 저희 새 채소 칩 견본을 귀사 고객들께 제공할 예정인데요.\n남: 아, 네. 안녕하세요, 알바레즈 씨. 저는 관리자인 라이언 휴즈입니다. 8번 통로 끝에 테이블을 설치해 두었어요. 스낵 통로입니다.\n여: 감사합니다. 트럭에서 음식과 장비를 들여오기 시작할게요. 그런데 먼저 제가 사용할 테이블을 좀 보고 싶어요.\n남: 좋아요. 물건을 들여오는 데 도움이 필요하시면 알려 주세요."
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p3-t07-s02",
        contextType: "B3. 행사 / 연설",
        questionRange: "35-37",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-35-37.mp3",
        questions: [
            {
                id: "v4-p3-t07-q35",
                text: "Who most likely is the man?",
                classification: "WHO_LOC",
                options: {
                    A: "A bank teller",
                    B: "A librarian",
                    C: "A mail carrier",
                    D: "A truck driver"
                },
                correctAnswer: "B",
                translation: "남자는 누구이겠는가?",
                translation_A: "은행 출납원",
                translation_B: "사서",
                translation_C: "우체부",
                translation_D: "트럭 운전기사"
            },
            {
                id: "v4-p3-t07-q36",
                text: "What does the woman ask about?",
                classification: "DETAIL",
                options: {
                    A: "A method of payment",
                    B: "A type of delivery service",
                    C: "A way to fill out a form",
                    D: "A schedule change"
                },
                correctAnswer: "A",
                translation: "여자는 무엇에 대해 물어보는가?",
                translation_A: "결제 방법",
                translation_B: "배송 서비스 유형",
                translation_C: "서식 작성 방법",
                translation_D: "일정 변경"
            },
            {
                id: "v4-p3-t07-q37",
                text: "What does the man say he will do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Look up some information",
                    B: "Print a document",
                    C: "Check on a machine",
                    D: "Update an account"
                },
                correctAnswer: "C",
                translation: "남자는 무엇을 하겠다고 말하는가?",
                translation_A: "정보 찾기",
                translation_B: "서류 출력하기",
                translation_C: "기계 확인하기",
                translation_D: "계정 업데이트하기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Hello. I received a notice in the mail about a fee I need to pay because I returned some books late. My name is Ling Gao." },
            { speaker: "Man", text: "Hmm. Yes, it says here in the system that you owe ten dollars for overdue materials. Would you like to pay that now?" },
            { speaker: "Woman", text: "Do you take credit cards?" },
            { speaker: "Man", text: "We usually accept either cash or credit, but our card reader has been malfunctioning. Let me see if it's working again." }
        ],
        translation: "여: 안녕하세요. 책을 늦게 반납해서 내야 할 연체료가 있다는 우편 통지를 받았어요. 저는 링 가오라고 해요.\n남: 음... 네, 시스템에는 자료 제출 기한이 지나서 10달러를 내야 한다고 되어 있네요. 지금 내시겠어요?\n여: 신용카드 받나요?\n남: 보통 현금이나 신용카드를 받는데, 카드 리더기가 오작동하고 있어요. 작동이 다시 되는지 한번 보죠."
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p3-t07-s03",
        contextType: "A1. 사무실 업무",
        questionRange: "38-40",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-38-40.mp3",
        questions: [
            {
                id: "v4-p3-t07-q38",
                text: "What does the woman say she has finished doing?",
                classification: "DETAIL",
                options: {
                    A: "Organizing a luncheon",
                    B: "Preparing some materials",
                    C: "Submitting a purchase order",
                    D: "Reviewing some résumés"
                },
                correctAnswer: "B",
                translation: "여자는 무엇을 끝마쳤다고 말하는가?",
                translation_A: "오찬 준비",
                translation_B: "자료 준비",
                translation_C: "구매 주문서 제출",
                translation_D: "이력서 검토"
            },
            {
                id: "v4-p3-t07-q39",
                text: "Why was a change made at the last minute?",
                classification: "WHY_REASON",
                options: {
                    A: "An area is too noisy.",
                    B: "Some participants are delayed.",
                    C: "A room was already taken.",
                    D: "Some revisions were requested."
                },
                correctAnswer: "C",
                translation: "왜 막바지에 변경이 이뤄졌는가?",
                translation_A: "구역이 너무 시끄럽다.",
                translation_B: "일부 참가자가 늦어졌다.",
                translation_C: "회의실이 이미 사용 중이다.",
                translation_D: "수정 요청을 받았다."
            },
            {
                id: "v4-p3-t07-q40",
                text: "What is the woman concerned about?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "The security of an Internet connection",
                    B: "The amount of approved funding",
                    C: "The feedback from some colleagues",
                    D: "The availability of some equipment"
                },
                correctAnswer: "D",
                translation: "여자는 무엇에 대해 우려하는가?",
                translation_A: "인터넷 연결의 보안",
                translation_B: "승인된 자금 규모",
                translation_C: "동료의 피드백",
                translation_D: "장비 이용 가능 여부"
            }
        ],
        script: [
            { speaker: "Man 1", text: "Hi, everybody. Are we ready for the sales meeting this morning?" },
            { speaker: "Woman", text: "Yes, I've finished putting together my presentation." },
            { speaker: "Man 2", text: "The meeting's in the conference room, right?" },
            { speaker: "Man 1", text: "No—there's been a last-minute change. The conference room is being used by the IT department all day to interview job candidates." },
            { speaker: "Woman", text: "Oh no! My presentation requires the use of a television." },
            { speaker: "Man 1", text: "Don't worry. We're meeting in the boardroom. There's a smart TV there." },
            { speaker: "Man 2", text: "Is that room large enough for our team?" },
            { speaker: "Man 1", text: "Yes, we won't have a problem." }
        ],
        translation: "남1: 안녕하세요, 여러분. 오늘 오전 영업회의 준비가 되셨나요?\n여: 네, 저는 발표 준비를 마쳤습니다.\n남2: 회의는 회의실에서 하는 거죠, 맞나요?\n남1: 아니요. 막바지에 변경됐어요. IT 부서가 지원자들을 면접하느라 하루 종일 회의실을 쓰고 있어요.\n여: 저런! 제 발표는 TV를 이용해야 하는데요.\n남1: 걱정 마세요. 중역 회의실에서 회의를 해요. 거기 스마트 TV가 있습니다.\n남2: 저희 팀이 다 들어갈 만큼 충분히 클까요?\n남1: 네, 문제없을 겁니다."
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p3-t07-s04",
        contextType: "A1. 사무실 업무",
        questionRange: "41-43",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-41-43.mp3",
        questions: [
            {
                id: "v4-p3-t07-q41",
                text: "What problem do the speakers discuss?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "A parking garage is full.",
                    B: "A street is closed.",
                    C: "Some equipment is broken.",
                    D: "Some items are damaged."
                },
                correctAnswer: "B",
                translation: "화자들은 어떤 문제에 대해 이야기하는가?",
                translation_A: "주차장이 다 찼다.",
                translation_B: "도로가 폐쇄됐다.",
                translation_C: "장비가 고장 났다.",
                translation_D: "물품이 훼손됐다."
            },
            {
                id: "v4-p3-t07-q42",
                text: "What does the man say customers will have to do?",
                classification: "DETAIL",
                options: {
                    A: "Visit an online store",
                    B: "Present a receipt",
                    C: "Park in a different area",
                    D: "Schedule a delivery"
                },
                correctAnswer: "C",
                translation: "남자는 고객들이 무엇을 해야 한다고 말하는가?",
                translation_A: "온라인 매장 방문하기",
                translation_B: "영수증 제시하기",
                translation_C: "다른 곳에 주차하기",
                translation_D: "배송 일정 잡기"
            },
            {
                id: "v4-p3-t07-q43",
                text: "What will the woman do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Cancel her plans for the weekend",
                    B: "Close the shop early",
                    C: "Drive slowly",
                    D: "Post an update on social media"
                },
                correctAnswer: "D",
                translation: "여자는 다음으로 무엇을 할 것인가?",
                translation_A: "주말 계획 취소하기",
                translation_B: "매장 일찍 닫기",
                translation_C: "천천히 운전하기",
                translation_D: "소셜 미디어에 새 게시물 올리기"
            }
        ],
        script: [
            { speaker: "Man", text: "Did you see the road construction sign at the corner? All traffic is being directed away from our street—no one can come this way!" },
            { speaker: "Woman", text: "I know! How will customers visit our store to make copies and pick up photo prints?" },
            { speaker: "Man", text: "I'm afraid they'll have to park on another street. They can still access the store on foot." },
            { speaker: "Woman", text: "OK. I'll update our social media page to direct our customers." }
        ],
        translation: "남: 모퉁이에서 도로 공사 표지판 봤어요? 모든 차량들이 우리 거리를 피해 안내되고 있어요. 아무도 이쪽으로 올 수 없어요!\n여: 알아요! 손님들이 복사하고 출력된 사진을 찾으러 우리 가게에 어떻게 오죠?\n남: 다른 거리에 주차해야 할 것 같아요. 여전히 걸어서는 가게로 올 수 있어요.\n여: 알겠어요. 소셜 미디어 페이지에 고객들에게 길을 안내하는 내용을 새로 올릴게요."
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p3-t07-s05",
        contextType: "B3. 행사 / 연설",
        questionRange: "44-46",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-44-46.mp3",
        questions: [
            {
                id: "v4-p3-t07-q44",
                text: "Where do the speakers most likely work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a nature preserve",
                    B: "At a vegetable farm",
                    C: "At a garden supply store",
                    D: "At a construction site"
                },
                correctAnswer: "A",
                translation: "화자들은 어디서 일하겠는가?",
                translation_A: "자연 보호 구역",
                translation_B: "채소 농장",
                translation_C: "정원용품 매장",
                translation_D: "공사 현장"
            },
            {
                id: "v4-p3-t07-q45",
                text: "What will the speakers do with some samples?",
                classification: "DETAIL",
                options: {
                    A: "Display them in a window",
                    B: "Send them to a laboratory",
                    C: "Distribute them to customers",
                    D: "Donate them to a university"
                },
                correctAnswer: "B",
                translation: "화자들은 견본으로 무엇을 할 것인가?",
                translation_A: "창문에 진열하기",
                translation_B: "실험실로 보내기",
                translation_C: "고객들에게 나눠주기",
                translation_D: "대학교에 기부하기"
            },
            {
                id: "id: \"v4-p3-t07-q46\"",
                text: "What does the woman volunteer to do?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Lead a training session",
                    B: "Take some photographs",
                    C: "Order some supplies",
                    D: "Organize a tour"
                },
                correctAnswer: "B",
                translation: "여자는 무엇을 하겠다고 자원하는가?",
                translation_A: "교육 시간 진행하기",
                translation_B: "사진 찍기",
                translation_C: "용품 주문하기",
                translation_D: "투어 준비하기"
            }
        ],
        script: [
            { speaker: "Man", text: "It's your first day working here, so we'll spend the morning surveying the walking trails so you can get a sense of the area. While we're at it, we'll also collect soil samples from different areas of the park." },
            { speaker: "Woman", text: "We need to test the soil samples to monitor the health of the preserve, right?" },
            { speaker: "Man", text: "Yes. We don't have a laboratory, so we send them out for testing every month. And since it's a sunny day today, it's a good time to take photographs for our social media page." },
            { speaker: "Woman", text: "I can do that. I brought my camera." }
        ],
        translation: "남: 이곳에서 일하시는 첫날이네요. 그래서 이 지역에 대해 감을 잡으실 수 있도록 산책로를 살펴보며 오전 시간을 보내려고 합니다. 그렇게 하는 동안 공원의 다양한 구역에서 토양 견본을 모으기도 할 겁니다.\n여: 보호 구역의 상태를 추적 관찰하기 위해 토양 견본을 검사해야 하는 거죠, 그렇죠?\n남: 네. 실험실이 없어서 검사를 위해 매달 외부로 내보냅니다. 오늘은 화창하니까 소셜 미디어 페이지에 올릴 사진을 찍기에 좋은 때네요.\n여: 제가 할 수 있습니다. 카메라를 가져왔어요."
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p3-t07-s06",
        contextType: "A1. 사무실 업무",
        questionRange: "47-49",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-47-49.mp3",
        questions: [
            {
                id: "v4-p3-t07-q47",
                text: "Who are the speakers?",
                classification: "WHO_LOC",
                options: {
                    A: "Executive assistants",
                    B: "Maintenance supervisors",
                    C: "Postal workers",
                    D: "Food delivery drivers"
                },
                correctAnswer: "C",
                translation: "화자들은 누구인가?",
                translation_A: "비서",
                translation_B: "유지보수 관리자",
                translation_C: "우편 배달원",
                translation_D: "음식 배달 기사"
            },
            {
                id: "v4-p3-t07-q48",
                text: "What was announced in a flyer?",
                classification: "DETAIL",
                options: {
                    A: "Some computer software will be replaced.",
                    B: "A building will be sold.",
                    C: "A route will be added.",
                    D: "Some vehicles will be replaced."
                },
                correctAnswer: "D",
                translation: "전단에서 무엇이 발표됐는가?",
                translation_A: "컴퓨터 소프트웨어가 교체될 것이다.",
                translation_B: "건물이 팔릴 것이다.",
                translation_C: "노선이 추가될 것이다.",
                translation_D: "차량이 교체될 것이다."
            },
            {
                id: "v4-p3-t07-q49",
                text: "What is the man concerned about?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "How long a battery will last",
                    B: "How expensive a purchase will be",
                    C: "How accurate a weather forecast is",
                    D: "How current a training program is"
                },
                correctAnswer: "A",
                translation: "남자는 무엇을 우려하는가?",
                translation_A: "배터리가 얼마나 지속될지",
                translation_B: "구매 물품이 얼마나 비쌀지",
                translation_C: "일기 예보가 얼마나 정확할지",
                translation_D: "교육 프로그램이 현재를 얼마나 반영하는지"
            }
        ],
        script: [
            { speaker: "Woman", text: "Good morning, Ivan. Everyone's talking about the flyer that was posted on our bulletin board yesterday. Have you seen it?" },
            { speaker: "Man", text: "I was out of the office yesterday, but I've heard. Big changes are coming for all mail carriers in the city." },
            { speaker: "Woman", text: "That's right. Our entire postal delivery fleet is being replaced with electric vehicles." },
            { speaker: "Man", text: "I just hope that we don't have to charge them every few hours. I'm concerned that the battery won't last through my entire route." }
        ],
        translation: "여: 안녕하세요, 이반. 모두들 어제 게시판에 붙은 전단에 대해 이야기하고 있어요. 보셨나요?\n남: 어제 사무실에 없었지만 들었어요. 시의 모든 우체부들에게 큰 변화가 생길 거예요.\n여: 맞아요. 우편 배달 차량 전체가 전기차로 교체되고 있어요.\n남: 몇 시간마다 충전해야 하는 건 아니길 바라요. 노선을 전부 돌 때까지 배터리가 버티지 못할까 봐 걱정되네요."
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p3-t07-s07",
        contextType: "B1. 쇼핑",
        questionRange: "50-52",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-50-52.mp3",
        questions: [
            {
                id: "v4-p3-t07-q50",
                text: "What does Ms. Park ask the man to do?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Assist a new employee",
                    B: "Book an event",
                    C: "Meet with a vendor",
                    D: "Prepare a presentation"
                },
                correctAnswer: "A",
                translation: "박 씨는 남자에게 무엇을 해 달라고 요청하는가?",
                translation_A: "신입사원 도와주기",
                translation_B: "행사 예약하기",
                translation_C: "판매자와 만나기",
                translation_D: "발표 준비하기"
            },
            {
                id: "v4-p3-t07-q51",
                text: "Where does the conversation most likely take place?",
                classification: "WHO_LOC",
                options: {
                    A: "At a museum",
                    B: "At a technology firm",
                    C: "At an airport",
                    D: "At a hotel"
                },
                correctAnswer: "D",
                translation: "대화는 어디서 이루어지겠는가?",
                translation_A: "박물관",
                translation_B: "기술업체",
                translation_C: "공항",
                translation_D: "호텔"
            },
            {
                id: "v4-p3-t07-q52",
                text: "What will the man do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Provide some feedback",
                    B: "Check a calendar",
                    C: "Demonstrate a computer program",
                    D: "Help a coworker find some supplies"
                },
                correctAnswer: "C",
                translation: "남자는 다음으로 무엇을 할 것인가?",
                translation_A: "피드백 제공하기",
                translation_B: "달력 확인하기",
                translation_C: "컴퓨터 프로그램 설명하기",
                translation_D: "동료가 용품을 찾도록 돕기"
            }
        ],
        script: [
            { speaker: "Woman 1", text: "Kota, I want you to meet Claudia. Claudia is starting work today. Could you show her around and explain some of our processes?" },
            { speaker: "Man", text: "Of course, Ms. Park. Welcome to the team, Claudia!" },
            { speaker: "Woman 2", text: "Thank you. I'm coming from the Silver Ridge Inn, where I also worked at the front desk." },
            { speaker: "Man", text: "So you already have experience with taking reservations and checking in guests?" },
            { speaker: "Woman 2", text: "Yes, but we used a different software system than the one I see you have here." },
            { speaker: "Man", text: "It's easy to use. Let me show you how." }
        ],
        translation: "여1: 코타, 클라우디아를 만나봤으면 좋겠어요. 클라우디아가 오늘 일을 시작하거든요. 안내를 좀 해 주고 우리 절차를 설명해 주실 수 있나요?\n남: 물론이죠, 박 씨. 팀에 들어온 것을 환영해요, 클라우디아!\n여2: 감사합니다. 실버 리지 인에서 왔어요. 거기서도 안내 데스크에서 일했어요.\n남: 예약을 받고 손님 체크인을 해 본 경험이 이미 있으시군요?\n여2: 네, 하지만 여기서 사용하는 소프트웨어 시스템과 다른 걸 사용했어요.\n남: 사용하기 쉬워요. 어떻게 하는지 알려 드릴게요."
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p3-t07-s08",
        contextType: "B1. 쇼핑",
        questionRange: "53-55",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-53-55.mp3",
        questions: [
            {
                id: "v4-p3-t07-q53",
                text: "What do the speakers find surprising about a restaurant?",
                classification: "DETAIL",
                options: {
                    A: "Its prices",
                    B: "Its popularity",
                    C: "Its menu options",
                    D: "Its decor"
                },
                correctAnswer: "B",
                translation: "화자들은 식당의 어떤 점을 놀라워하는가?",
                translation_A: "가격",
                translation_B: "인기",
                translation_C: "메뉴",
                translation_D: "장식"
            },
            {
                id: "v4-p3-t07-q54",
                text: "Why are the speakers in a hurry?",
                classification: "WHY_REASON",
                options: {
                    A: "They need to catch a train.",
                    B: "They will be conducting an interview.",
                    C: "They will be leading a training session.",
                    D: "A business is about to close."
                },
                correctAnswer: "C",
                translation: "화자들은 왜 서두르는가?",
                translation_A: "기차를 타야 한다.",
                translation_B: "면접을 진행할 것이다.",
                translation_C: "교육을 진행할 것이다.",
                translation_D: "영업을 종료할 때가 됐다."
            },
            {
                id: "v4-p3-t07-q55",
                text: "What will the speakers most likely do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Go to another restaurant",
                    B: "Try a free sample",
                    C: "Order food to go",
                    D: "Pay a bill"
                },
                correctAnswer: "C",
                translation: "화자들은 다음으로 무엇을 할 것인가?",
                translation_A: "다른 식당으로 가기",
                translation_B: "무료 견본 시식하기",
                translation_C: "포장할 음식 주문하기",
                translation_D: "지불하기"
            }
        ],
        script: [
            { speaker: "Woman 1", text: "Wow. I didn't expect this restaurant to be so popular—look at all the people waiting to be seated." },
            { speaker: "Woman 2", text: "I know. It's brand-new—I didn't think anyone knew about it yet. Looks like we won't be able to get a table for a while." },
            { speaker: "Woman 1", text: "Well, we don't have much time. We need to drive back to the office to train our interns at one o'clock. Should we go somewhere else?" },
            { speaker: "Woman 2", text: "Let's see if they offer takeout—we can just order something to go." },
            { speaker: "Woman 1", text: "Good idea. I'm looking forward to trying the spicy noodles!" }
        ],
        translation: "여1: 우와! 이 식당이 이렇게 인기 있을지 예상 못했어요. 자리를 기다리는 이 사람들을 좀 보세요.\n여2: 맞아요. 아주 최근에 생겼어요. 누가 벌써 알 거라고 생각하지 못했어요. 얼마 동안은 자리를 못 잡을 것 같네요.\n여1: 음, 우린 시간이 많지 않아요. 사무실로 다시 차를 타고 가서 1시에 인턴 교육을 해야 하잖아요. 다른 곳으로 가야 할까요?\n여2: 포장도 해 주는지 보죠. 가져갈 걸 주문하면 돼요.\n여1: 좋은 생각이네요. 매운 면 요리를 정말 먹어보고 싶어요!"
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p3-t07-s09",
        contextType: "B3. 행사 / 연설",
        questionRange: "56-58",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-56-58.mp3",
        questions: [
            {
                id: "v4-p3-t07-q56",
                text: "Where do the speakers most likely work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a sporting goods store",
                    B: "At a campground",
                    C: "At a footwear factory",
                    D: "At a fitness center"
                },
                correctAnswer: "D",
                translation: "화자들은 어디서 일하겠는가?",
                translation_A: "스포츠용품점",
                translation_B: "캠핑장",
                translation_C: "신발 공장",
                translation_D: "피트니스 센터"
            },
            {
                id: "v4-p3-t07-q57",
                text: "Why does the man say, \"this is a densely populated area\"?",
                classification: "WHY_REASON",
                options: {
                    A: "To complain that traffic is heavy",
                    B: "To suggest changes in regulations",
                    C: "To explain a decision",
                    D: "To request a review of property values"
                },
                correctAnswer: "C",
                translation: "남자가 \"인구가 밀집되어 있는 지역이잖아요\"라고 말하는 이유는?",
                translation_A: "교통이 혼잡한 것을 불평하려고",
                translation_B: "규정 변경을 제안하려고",
                translation_C: "결정에 대해 설명하려고",
                translation_D: "부동산 가치 검토를 요청하려고"
            },
            {
                id: "v4-p3-t07-q58",
                text: "What does the woman think a business should do?",
                classification: "DETAIL",
                options: {
                    A: "Hire more employees",
                    B: "Place a large order",
                    C: "Revise an employee handbook",
                    D: "Advertise on social media"
                },
                correctAnswer: "A",
                translation: "여자는 업체가 무엇을 해야 한다고 생각하는가?",
                translation_A: "직원을 더 채용하기",
                translation_B: "대량 주문하기",
                translation_C: "직원 안내서 개정하기",
                translation_D: "소셜 미디어에 광고하기"
            }
        ],
        script: [
            { speaker: "Man", text: "Hi, Ahmed. Did you see the e-mail from management?" },
            { speaker: "Woman", text: "I just got here to teach my aerobics class." },
            { speaker: "Man", text: "It looks like the gym is opening another facility just a few miles from here. I'm surprised they want to open another location so close by." },
            { speaker: "Woman", text: "Well, this is a densely populated area." },
            { speaker: "Man", text: "True. I guess they'll have to hire more employees. There's just not enough of us to staff both locations." }
        ],
        translation: "남: 안녕하세요, 아메드. 경영진에게서 온 이메일 봤어요?\n여: 에어로빅 수업을 하러 방금 왔는데요.\n남: 체육관이 여기서 몇 마일 떨어진 곳에 또 하나의 시설을 여는 것 같아요. 그렇게 가까운 곳에 또 다른 지점을 열고 싶어 하다니 놀라운데요.\n여: 음, 인구가 밀집되어 있는 지역이잖아요.\n남: 맞아요. 직원을 더 고용해야 할 것 같아요. 두 곳 모두에 직원을 배치하기에는 인원이 충분하지 않아요."
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p3-t07-s10",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "59-61",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-59-61.mp3",
        questions: [
            {
                id: "v4-p3-t07-q59",
                text: "What is the conversation about?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "Organizing an event",
                    B: "Preparing for a renovation",
                    C: "Updating some software",
                    D: "Selecting a caterer"
                },
                correctAnswer: "A",
                translation: "무엇에 관한 대화인가?",
                translation_A: "행사 준비",
                translation_B: "보수 공사 준비",
                translation_C: "소프트웨어 업데이트",
                translation_D: "케이터링 업체 선정"
            },
            {
                id: "v4-p3-t07-q60",
                text: "What does the woman imply when she says, \"Nearly a third of our staff will be participating remotely\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "Travel expenses should be refunded.",
                    B: "Some workers may feel excluded.",
                    C: "A venue is not the correct size.",
                    D: "A workshop should be postponed."
                },
                correctAnswer: "B",
                translation: "여자가 \"직원의 거의 3분의 1이 원격으로 참석할 거예요\"라고 말하는 의도는 무엇인가?",
                translation_A: "출장비가 환급될 것이다.",
                translation_B: "일부 직원들은 소외감을 느낄 수도 있다.",
                translation_C: "장소 크기가 알맞지 않다.",
                translation_D: "워크숍이 연기되어야 한다."
            },
            {
                id: "v4-p3-t07-q61",
                text: "What will the woman do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Review an agenda",
                    B: "Reserve an event space",
                    C: "Research some online activities",
                    D: "Check a budget"
                },
                correctAnswer: "C",
                translation: "여자는 다음으로 무엇을 할 것인가?",
                translation_A: "안건 검토하기",
                translation_B: "행사 공간 예약하기",
                translation_C: "온라인 활동 조사하기",
                translation_D: "예산 확인하기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Marcel, I'd like to plan a team-building event with our graphic design group." },
            { speaker: "Man", text: "Sure. We could reserve the conference room upstairs." },
            { speaker: "Woman", text: "But the event wouldn't be just for on-site graphic designers. Nearly a third of our staff will be participating remotely." },
            { speaker: "Man", text: "Oh, you're right. Everyone needs to feel equally included. Let's have our on-site staff join the event from their desks." },
            { speaker: "Woman", text: "OK. I'll do a search for effective team-building activities that we can do online." }
        ],
        translation: "여: 마르셀, 우리 그래픽 디자인 그룹과 함께 팀워크 행사를 계획하고 싶은데요.\n남: 그래요. 위층 회의실을 예약할 수 있어요.\n여: 그런데 행사는 사내 근무 그래픽 디자이너들만을 위한 것이 아닙니다. 직원의 거의 3분의 1이 원격으로 참석할 거예요.\n남: 아, 맞아요. 모두가 똑같이 소속감을 느껴야 한다(Everyone needs to feel equally included). 사내 근무 직원들이 자신의 자리에서 행사에 참여할 수 있도록 하죠.\n여: 좋아요. 온라인으로 할 수 있는 효과적인 팀워크 활동에 대해 찾아볼게요."
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p3-t07-s11",
        contextType: "B1. 쇼핑",
        questionRange: "62-64",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-62-64.mp3",
        image: "/images/ETS_TOEIC_4/Test_07/Part_03/v4_p3_t07_q62.png",
        questions: [
            {
                id: "v4-p3-t07-q62",
                text: "Look at the graphic. Which floor will the man visit?",
                classification: "GRAPHIC",
                options: {
                    A: "Floor 1",
                    B: "Floor 2",
                    C: "Floor 3",
                    D: "Floor 4"
                },
                correctAnswer: "C",
                translation: "시각 정보에 의하면, 남자는 어떤 층을 방문할 것인가?",
                translation_A: "1층",
                translation_B: "2층",
                translation_C: "3층",
                translation_D: "4층"
            },
            {
                id: "v4-p3-t07-q63",
                text: "Why is the man calling the store?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "To complain about receiving a faulty product",
                    B: "To point out an error in an invoice",
                    C: "To ask about seeing some merchandise",
                    D: "To request delivery of a catalog"
                },
                correctAnswer: "C",
                translation: "남자가 매장에 전화한 이유는?",
                translation_A: "결함 있는 제품을 받아서 항의하려고",
                translation_B: "청구서에 있는 오류를 지적하려고",
                translation_C: "상품을 보는 것에 대해 문의하려고",
                translation_D: "카탈로그 배송을 요청하려고"
            },
            {
                id: "v4-p3-t07-q64",
                text: "What does the woman assure the man about?",
                classification: "DETAIL",
                options: {
                    A: "An online payment system is secure.",
                    B: "A building is wheelchair accessible.",
                    C: "A product is eligible for a refund.",
                    D: "A food court is open daily."
                },
                correctAnswer: "B",
                translation: "여자는 남자에게 무엇에 대해 확답을 주는가?",
                translation_A: "온라인 결제 시스템이 안전하다.",
                translation_B: "건물은 휠체어를 이용할 수 있다.",
                translation_C: "제품은 환불을 받을 수 있다.",
                translation_D: "푸드코트는 매일 문을 연다."
            }
        ],
        script: [
            { speaker: "Man", text: "Hi. I'm calling because I saw some coffee tables on your department store's Web site. I'd like to see them in person. Can you tell me if you have the same furniture selection in your store?" },
            { speaker: "Woman", text: "Yes, we do. We're fully stocked at the moment, so you'll be able to see everything that's on our online catalog." },
            { speaker: "Man", text: "OK. One more thing. I use a wheelchair, and I'm concerned about navigating your store." },
            { speaker: "Woman", text: "Oh, that's not a problem. We have large elevators that can easily accommodate a wheelchair." },
            { speaker: "Man", text: "Great. Thanks for the information. I'll stop by later this afternoon." }
        ],
        translation: "남: 안녕하세요. 귀사의 백화점 웹사이트에서 커피 탁자를 보고 전화드렸어요. 직접 보고 싶은데, 매장에 같은 가구 제품들이 있는지 알려 주실 수 있나요?\n여: 네, 있습니다. 현재 모든 물건이 갖춰져 있으니 온라인 카탈로그에 있는 모든 제품을 보실 수 있습니다.\n남: 네, 하나 더요. 제가 휠체어를 이용하고 있어서 매장을 가는 게 걱정되네요.\n여: 아, 괜찮습니다. 휠체어를 거뜬히 수용할 수 있는 대형 엘리베이터가 있어요.\n남: 좋아요, 정보를 주셔서 감사합니다. 이따가 오후에 들를게요."
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p3-t07-s12",
        contextType: "C1. 항공 / 교통",
        questionRange: "65-67",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-65-67.mp3",
        image: "/images/ETS_TOEIC_4/Test_07/Part_03/v4_p3_t07_q65.png",
        questions: [
            {
                id: "v4-p3-t07-q65",
                text: "Why does the woman need to go to Kyoto?",
                classification: "WHY_REASON",
                options: {
                    A: "To attend a conference",
                    B: "To sign a contract",
                    C: "To find investors",
                    D: "To report on a project"
                },
                correctAnswer: "D",
                translation: "여자는 왜 교토에 가야 하는가?",
                translation_A: "회의에 참석하려고",
                translation_B: "계약을 체결하려고",
                translation_C: "투자자를 찾으려고",
                translation_D: "프로젝트에 대해 보고하려고"
            },
            {
                id: "v4-p3-t07-q66",
                text: "Look at the graphic. What time will the woman depart for Kyoto?",
                classification: "GRAPHIC",
                options: {
                    A: "At 6:02 A.M.",
                    B: "At 8:15 A.M.",
                    C: "At 9:07 A.M.",
                    D: "At 10:20 A.M."
                },
                correctAnswer: "C",
                translation: "시각 정보에 의하면, 여자는 몇 시에 교토로 출발할 것인가?",
                translation_A: "오전 6시 2분",
                translation_B: "오전 8시 15분",
                translation_C: "오전 9시 7분",
                translation_D: "오전 10시 20분"
            },
            {
                id: "v4-p3-t07-q67",
                text: "What does the man say he will do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Drive the woman to the airport",
                    B: "Reserve a hotel",
                    C: "E-mail some information",
                    D: "Print out a boarding pass"
                },
                correctAnswer: "C",
                translation: "남자는 무엇을 할 것이라고 말하는가?",
                translation_A: "여자를 공항으로 태워다 주기",
                translation_B: "호텔 예약하기",
                translation_C: "정보를 이메일로 보내기",
                translation_D: "탑승권 출력하기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Adam, our Kyoto office just called. Our investors want me to present a project update there as soon as possible. Can you get me on the first flight to Kyoto tomorrow morning?" },
            { speaker: "Man", text: "Let me check. Per company policy, we can only use Blue Jet airlines for international travel—and unfortunately, that flight's not the first one out tomorrow." },
            { speaker: "Woman", text: "That will have to do, thanks. And I'll need a ride to the airport too. Can you arrange that?" },
            { speaker: "Man", text: "Sure thing. I'll finalize the reservations and e-mail you the details." }
        ],
        translation: "여: 아담, 우리 교토 사무실에서 방금 전화가 왔는데요, 투자자들이 최대한 빨리 제가 그곳에서 프로젝트 최신 사항을 발표해 줬으면 한대요. 내일 아침 교토로 가는 첫 항공편을 구해 주실 수 있나요?\n남: 확인해 보죠. 회사 방침에 따라 해외 출장은 블루젯 항공만 이용할 수 있는데요, 안타깝게도 그 항공편이 내일 첫 비행기가 아니네요.\n여: 그렇게라도 해야 할 거예요, 감사합니다. 공항으로 갈 교통편도 필요해요. 마련해 주실 수 있나요?\n남: 그럼요, 예약을 마무리하고 이메일로 세부 사항을 보내 드릴게요."
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p3-t07-s13",
        contextType: "B3. 행사 / 연설",
        questionRange: "68-70",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-68-70.mp3",
        image: "/images/ETS_TOEIC_4/Test_07/Part_03/v4_p3_t07_q68.png",
        questions: [
            {
                id: "v4-p3-t07-q68",
                text: "Who most likely are the speakers?",
                classification: "WHO_LOC",
                options: {
                    A: "Architects",
                    B: "Government officials",
                    C: "News reporters",
                    D: "Contractors"
                },
                correctAnswer: "C",
                translation: "화자들은 누구이겠는가?",
                translation_A: "건축가",
                translation_B: "공무원",
                translation_C: "기자",
                translation_D: "도급업자"
            },
            {
                id: "v4-p3-t07-q69",
                text: "What does the woman say she had access to?",
                classification: "DETAIL",
                options: {
                    A: "Uniform designs",
                    B: "Sporting event tickets",
                    C: "A company vehicle",
                    D: "Bid proposals"
                },
                correctAnswer: "D",
                translation: "여자는 무엇을 볼 수 있었다고 말하는가?",
                translation_A: "유니폼 디자인",
                translation_B: "스포츠 행사 입장권",
                translation_C: "회사 차량",
                translation_D: "입찰 제안서"
            },
            {
                id: "v4-p3-t07-q70",
                text: "Look at the graphic. According to the woman, where will a stadium most likely be located?",
                classification: "GRAPHIC",
                options: {
                    A: "At site A",
                    B: "At site B",
                    C: "At site C",
                    D: "At site D"
                },
                correctAnswer: "C",
                translation: "시각 정보에 의하면, 여자는 경기장이 어디에 위치할 것 같다고 말하는가?",
                translation_A: "A 부지",
                translation_B: "B 부지",
                translation_C: "C 부지",
                translation_D: "D 부지"
            }
        ],
        script: [
            { speaker: "Man", text: "Hi, Astrid. For tonight's six o'clock news broadcast, the lead story is going to be on the rumor that the Beavers' football team is going to build a stadium. Have you heard about the project?" },
            { speaker: "Woman", text: "My sources have confirmed the story, actually. I've just gained exclusive access to some bidding proposals. Four cities are competing for the project." },
            { speaker: "Man", text: "It's great you were able to confirm this before we went on the air. Do you know where the new stadium might be built?" },
            { speaker: "Woman", text: "Well, one document suggests that Columbia City's proposal is the favorite. However, the team does have three other bids to consider." }
        ],
        translation: "남: 안녕하세요, 아스트리드. 오늘 저녁 6시 뉴스의 헤드라인은 비버 축구팀이 경기장을 짓는다는 소문이 될 거예요. 그 프로젝트에 대해 들어보셨나요?\n여: 사실 제 소식통이 그 얘기를 확인해 줬어요. 사실 입찰 제안서에 대한 독점 접근권을 얻었는데요, 네 도시가 이 프로젝트를 놓고 경쟁하고 있어요.\n남: 방송 전에 이걸 확인할 수 있었다니 대단해요. 새 경기장을 어디에 지을지 아세요?\n여: 음, 한 문서에 따르면 콜롬비아 시티의 제안이 가장 유력하다고 해요. 그런데 팀에서는 고려할 다른 제안도 세 개 더 있으니까요."
    }
];
