import { Part3Set } from '../types';

export const test1Data: Part3Set[] = [
    {
        testId: 1,
        vol: 4,
        setId: "v4-p3-t01-s1",
        contextType: "A3. 인사 / 휴가 / 근무",
        questionRange: "32-34",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-32-34.mp3",
        questions: [
            {
                id: "v4-p3-t01-q32",
                text: "What event does the woman mention?",
                classification: "DETAIL",
                options: {
                    A: "A job fair",
                    B: "A cooking class",
                    C: "A fund-raiser",
                    D: "A company picnic"
                },
                correctAnswer: "D",
                translation: "여자는 어떤 행사를 언급하는가?",
                translation_A: "취업 박람회",
                translation_B: "요리 강좌",
                translation_C: "모금 행사",
                translation_D: "회사 야유회"
            },
            {
                id: "v4-p3-t01-q33",
                text: "What does the woman ask for?",
                classification: "DETAIL",
                options: {
                    A: "A guest list",
                    B: "A dessert recipe",
                    C: "A business card",
                    D: "A promotional code"
                },
                correctAnswer: "B",
                translation: "여자는 무엇을 요청하는가?",
                translation_A: "손님 명단",
                translation_B: "후식 조리법",
                translation_C: "명함",
                translation_D: "쿠폰 번호"
            },
            {
                id: "v4-p3-t01-q34",
                text: "What does the man recommend doing?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Returning some merchandise",
                    B: "Watching a video",
                    C: "Creating an account",
                    D: "Reading a review"
                },
                correctAnswer: "B",
                translation: "남자는 무엇을 하라고 권하는가?",
                translation_A: "일부 상품 반품하기",
                translation_B: "동영상 시청하기",
                translation_C: "계정 만들기",
                translation_D: "후기 읽기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Thank you so much for organizing the annual company picnic, Jingdao. Everybody seemed to enjoy it." },
            { speaker: "Man", text: "Well, we deserved it after working so hard this year." },
            { speaker: "Woman", text: "I agree. The food was great, by the way. Especially the peach pie you made. Would you mind sharing the recipe? It was delicious." },
            { speaker: "Man", text: "I found the recipe online. I'll send you a link to the Web page. There's a really helpful video that walks you through all the steps. I recommend you watch it first." },
            { speaker: "Woman", text: "All right, thanks." }
        ],
        translation: "여: 연례 회사 야유회를 준비해 주셔서 정말 고마워요, 징다오 씨. 모두가 즐거워하는 것 같았어요.\n남: 음, 올해 정말 열심히 일했으니 그럴 자격이 있죠.\n여: 맞아요. 그리고 음식도 훌륭했어요. 특히 당신이 만든 복숭아 파이요. 조리법을 알려 주실 수 있나요? 맛있었거든요.\n남: 조리법은 온라인에서 찾았어요. 웹페이지 링크를 보내 드릴게요. 모든 단계를 보여주는 정말 유용한 동영상이 있으니 그걸 먼저 보시는 걸 권해요.\n여: 알겠어요, 감사합니다."
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p3-t01-s2",
        contextType: "A4. 재무 / 비용 / 승인",
        questionRange: "35-37",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-35-37.mp3",
        questions: [
            {
                id: "v4-p3-t01-q35",
                text: "What department do the speakers most likely work in?",
                classification: "WHO_LOC",
                options: {
                    A: "Accounting",
                    B: "Research and development",
                    C: "Maintenance",
                    D: "Marketing"
                },
                correctAnswer: "A",
                translation: "화자들은 어떤 부서에서 일하겠는가?",
                translation_A: "회계",
                translation_B: "연구 개발",
                translation_C: "유지보수",
                translation_D: "마케팅"
            },
            {
                id: "v4-p3-t01-q36",
                text: "What problem does the woman mention?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "A report has not been submitted.",
                    B: "An invoice is not accurate.",
                    C: "A policy has not been followed.",
                    D: "An order has not been delivered."
                },
                correctAnswer: "C",
                translation: "여자는 어떤 문제를 언급하는가?",
                translation_A: "보고서가 제출되지 않았다.",
                translation_B: "청구서가 정확하지 않다.",
                translation_C: "정책이 준수되지 않았다.",
                translation_D: "주문품이 배달되지 않았다."
            },
            {
                id: "v4-p3-t01-q37",
                text: "What does the man say he will do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Delete an electronic file",
                    B: "Authorize a reimbursement",
                    C: "Set up a sales meeting",
                    D: "Review a spreadsheet"
                },
                correctAnswer: "B",
                translation: "남자는 무엇을 하겠다고 말하는가?",
                translation_A: "전자 파일 삭제하기",
                translation_B: "환급 승인하기",
                translation_C: "영업 회의 준비하기",
                translation_D: "스프레드시트 검토하기"
            }
        ],
        script: [
            { speaker: "Man", text: "I'd like to finish calculating the company's expense reports for the month. Have you finished reviewing the travel reimbursement forms from all the departments?" },
            { speaker: "Woman", text: "I'm almost done, but I have a question about a hotel receipt from one of our employees." },
            { speaker: "Man", text: "What's the problem?" },
            { speaker: "Woman", text: "Well, our policy is for employees to stay at a hotel that's on our list of approved accommodations. This one isn't on the list." },
            { speaker: "Man", text: "Who submitted the receipt?" },
            { speaker: "Woman", text: "Moritz Ziegler, one of our sales representatives." },
            { speaker: "Man", text: "Hmm. He's a new employee and may have forgotten the policy. As a supervisor, I can approve the expense this one time." }
        ],
        translation: "남: 이번 달 회사 경비 보고서 계산을 마무리하고 싶어요. 모든 부서에서 온 출장비 환급 서류 검토는 다 하셨나요?\n여: 거의 다 됐어요. 그런데 직원 한 명에게서 받은 호텔 영수증에 관해 질문이 있어요.\n남: 어떤 문제인가요?\n여: 우리 정책은 직원들이 승인된 숙소 목록에 있는 호텔에 투숙하기로 되어 있잖아요. 이 호텔은 목록에 없네요.\n남: 누가 영수증을 제출했죠?\n여: 영업사원인 모리츠 지글러예요.\n남: 음… 그는 신입 사원인데 정책을 잊어버렸을지도 몰라요. 관리자로서 제가 이번 한 번은 해당 지출을 승인해 줄 수 있어요."
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p3-t01-s3",
        contextType: "C1. 항공 / 교통",
        questionRange: "38-40",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-38-40.mp3",
        questions: [
            {
                id: "v4-p3-t01-q38",
                text: "What industry do the speakers most likely work in?",
                classification: "WHO_LOC",
                options: {
                    A: "Shipping",
                    B: "Manufacturing",
                    C: "Hospitality",
                    D: "Meteorology"
                },
                correctAnswer: "A",
                translation: "화자들은 어떤 업계에서 일하겠는가?",
                translation_A: "운송",
                translation_B: "제조",
                translation_C: "접객 서비스",
                translation_D: "기상학"
            },
            {
                id: "v4-p3-t01-q39",
                text: "What is the reason for a delay?",
                classification: "WHY_REASON",
                options: {
                    A: "A schedule was written incorrectly.",
                    B: "Some equipment is not properly set up.",
                    C: "Weather conditions are poor.",
                    D: "Several staff members are absent."
                },
                correctAnswer: "C",
                translation: "지연된 이유는 무엇인가?",
                translation_A: "일정표가 잘못 작성되었다.",
                translation_B: "장비가 제대로 설치되어 있지 않다.",
                translation_C: "기상 상황이 좋지 않다.",
                translation_D: "직원 여러 명이 결근했다."
            },
            {
                id: "v4-p3-t01-q40",
                text: "What does the man say he will do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Update a shift schedule",
                    B: "Clear a work space",
                    C: "Complete a checklist",
                    D: "Place a call"
                },
                correctAnswer: "D",
                translation: "남자는 무엇을 하겠다고 말하는가?",
                translation_A: "교대 근무 일정 업데이트하기",
                translation_B: "업무 공간 치우기",
                translation_C: "체크리스트 작성하기",
                translation_D: "전화 걸기"
            }
        ],
        script: [
            { speaker: "Man", text: "Good morning, Damilola. How's everything up here on deck?" },
            { speaker: "Woman", text: "Hi, Pedro. It was an uneventful night, and our cargo ship still hasn't moved yet." },
            { speaker: "Man", text: "Hmm, I hope the fog over the harbor lifts soon." },
            { speaker: "Woman", text: "Yeah, me too. The ship won't be able to leave until the weather improves." },
            { speaker: "Man", text: "I hope we won't get too far behind schedule. I'll be sure to call the port authority soon for an update on when we'll be cleared to leave." },
            { speaker: "Woman", text: "Sounds good." }
        ],
        translation: "남: 안녕하세요, 다밀롤라. 여기 갑판은 어때요?\n여: 안녕하세요, 페드로. 밤엔 별일 없었고, 화물선은 아직 움직이지 않았어요.\n남: 음… 항구의 안개가 빨리 걷히면 좋겠네요.\n여: 네, 저도요. 날씨가 좋아지기 전엔 배가 떠나지 못할 거예요.\n남: 예정보다 너무 늦어지지 않았으면 좋겠어요. 우리가 언제 출발할 수 있는지 최신 소식을 알려 달라고 항만 당국에 곧 전화할게요.\n여: 좋아요."
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p3-t01-s4",
        contextType: "B4. 일반문의",
        questionRange: "41-43",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-41-43.mp3",
        questions: [
            {
                id: "v4-p3-t01-q41",
                text: "Why is the woman at the restaurant?",
                classification: "WHY_REASON",
                options: {
                    A: "To celebrate a retirement",
                    B: "To perform an inspection",
                    C: "To meet with some clients",
                    D: "To write an article"
                },
                correctAnswer: "C",
                translation: "여자는 왜 음식점에 갔는가?",
                translation_A: "은퇴를 기념하려고",
                translation_B: "점검을 실시하려고",
                translation_C: "고객을 만나려고",
                translation_D: "기사를 쓰려고"
            },
            {
                id: "v4-p3-t01-q42",
                text: "What does the woman mean when she says, \"it's very hot today\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "She is unable to accept an invitation.",
                    B: "A cooling system is not working.",
                    C: "A meeting will end soon.",
                    D: "She wants to change a seating request."
                },
                correctAnswer: "D",
                translation: "여자가 \"오늘 굉장히 덥네요\"라고 말하는 의도는 무엇인가?",
                translation_A: "초청을 수락할 수 없다.",
                translation_B: "냉방 시스템이 작동하지 않는다.",
                translation_C: "회의가 곧 끝난다.",
                translation_D: "좌석 요청을 변경하고 싶다."
            },
            {
                id: "v4-p3-t01-q43",
                text: "What does the man say about a parking garage?",
                classification: "DETAIL",
                options: {
                    A: "It is free for customers.",
                    B: "It is under construction.",
                    C: "It closes soon.",
                    D: "It offers monthly contracts."
                },
                correctAnswer: "A",
                translation: "남자는 주차장에 대해 뭐라고 말하는가?",
                translation_A: "고객에게 무료다.",
                translation_B: "공사 중이다.",
                translation_C: "곧 문을 닫는다.",
                translation_D: "월간 계약을 제공한다."
            }
        ],
        script: [
            { speaker: "Woman", text: "Hi. I've made a reservation to meet with some clients for lunch today. It's under Cohen." },
            { speaker: "Man", text: "Oh, yes. I see your reservation. Welcome, Ms. Cohen." },
            { speaker: "Woman", text: "I know I asked to be seated on your beautiful terrace, but it's very hot today." },
            { speaker: "Man", text: "Hmm. I can seat you at table four inside. Do you mind waiting a few minutes?" },
            { speaker: "Woman", text: "Not at all. By the way, your parking area's nearly full. Where can I tell my clients to park?" },
            { speaker: "Man", text: "Our customers can park for free in the garage across the street. Our cashier will stamp their parking tickets." },
            { speaker: "Woman", text: "Oh, great. Thanks. I'll call them and let them know." }
        ],
        translation: "여: 안녕하세요. 오늘 고객과 만나 점심 식사를 하려고 예약했어요. 코헨 이름으로 되어 있어요.\n남: 아, 네. 예약 확인했습니다. 어서 오세요, 코헨 씨.\n여: 멋진 테라스에 앉겠다고 요청했는데 오늘 굉장히 덥네요.\n남: 음… 안쪽 4번 테이블을 드릴 수 있습니다. 몇 분간 기다려 주시겠습니까?\n여: 좋아요. 그런데 주차 구역이 거의 꽉 찼네요. 고객들에게 어디에 주차하라고 하면 될까요?\n남: 저희 식당 손님은 길 건너 주차장에 무료로 주차하실 수 있습니다. 저희 출납원이 주차권에 도장을 찍어드려요.\n여: 아, 좋네요. 감사합니다. 고객들에게 전화해서 알릴게요."
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p3-t01-s5",
        contextType: "B2. 주문 / 배송",
        questionRange: "44-46",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-44-46.mp3",
        questions: [
            {
                id: "v4-p3-t01-q44",
                text: "Where does the woman most likely work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a university",
                    B: "At a publishing company",
                    C: "At an electronics store",
                    D: "At a grocery store"
                },
                correctAnswer: "C",
                translation: "여자는 어디서 일하겠는가?",
                translation_A: "대학교",
                translation_B: "출판사",
                translation_C: "전자 제품 매장",
                translation_D: "식료품점"
            },
            {
                id: "v4-p3-t01-q45",
                text: "What does Murat ask about?",
                classification: "DETAIL",
                options: {
                    A: "How much an item costs",
                    B: "When an event will begin",
                    C: "How many people will participate",
                    D: "Where to set up some equipment"
                },
                correctAnswer: "D",
                translation: "무라트는 무엇에 대해 질문하는가?",
                translation_A: "물품 가격",
                translation_B: "행사 시작 시기",
                translation_C: "참가 인원",
                translation_D: "장비 설치 장소"
            },
            {
                id: "v4-p3-t01-q46",
                text: "What does the woman suggest doing?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Offering a discount",
                    B: "Displaying informational materials",
                    C: "Holding a contest",
                    D: "Visiting a registration table"
                },
                correctAnswer: "B",
                translation: "여자는 무엇을 하라고 제안하는가?",
                translation_A: "할인 제공",
                translation_B: "정보를 담은 자료 전시",
                translation_C: "대회 개최",
                translation_D: "등록 테이블 방문"
            }
        ],
        script: [
            { speaker: "Woman", text: "Thank you both for coming here today to demonstrate your company's new compact printer. I know the store will be busy because we're having a big sale on laptop computers and tablets." },
            { speaker: "Man 1", text: "We're happy to be here. Our printers are perfect for students or people with home offices who may have limited space. My partner, Murat, will be setting up the printer station." },
            { speaker: "Man 2", text: "Yes - where can I put our demonstration table?" },
            { speaker: "Woman", text: "I'll show you the area. Also, if you brought any brochures with you, it'll be helpful to put those out for people to take." }
        ],
        translation: "여: 두 분 모두 귀사의 새 소형 프린터를 시연하러 와 주셔서 감사합니다. 노트북 컴퓨터와 태블릿이 대대적인 할인에 들어가서 매장이 바쁠 거예요.\n남1: 오게 되어 기쁩니다. 저희 프린터는 학생이나 공간이 한정된 홈 오피스를 이용하는 분들께 딱 맞아요. 제 동료 무라트가 프린터를 설치할 거예요.\n남2: 네, 시연 테이블을 어디에 두면 될까요?\n여: 자리를 안내해 드릴게요. 그리고 안내책자를 가져오셨으면 사람들이 가져갈 수 있도록 꺼내 놓는 게 도움이 될 겁니다."
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p3-t01-s6",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "47-49",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-47-49.mp3",
        questions: [
            {
                id: "v4-p3-t01-q47",
                text: "What type of industry do the speakers most likely work in?",
                classification: "WHO_LOC",
                options: {
                    A: "Textile manufacturing",
                    B: "Food production",
                    C: "Health care",
                    D: "Hospitality"
                },
                correctAnswer: "B",
                translation: "화자들은 어떤 종류의 업계에서 일하겠는가?",
                translation_A: "직물 제조",
                translation_B: "식품 생산",
                translation_C: "의료",
                translation_D: "접객 서비스"
            },
            {
                id: "v4-p3-t01-q48",
                text: "What business challenge are the speakers discussing?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "Lack of qualified personnel",
                    B: "Rising production costs",
                    C: "Changes in consumer preferences",
                    D: "Increased competition"
                },
                correctAnswer: "C",
                translation: "화자들은 어떤 사업상의 어려움에 대해 이야기하는가?",
                translation_A: "자질을 갖춘 직원의 부족",
                translation_B: "생산 비용 상승",
                translation_C: "고객 선호 변화",
                translation_D: "경쟁 증가"
            },
            {
                id: "v4-p3-t01-q49",
                text: "What does the man say he will do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Research more information",
                    B: "Negotiate a discount",
                    C: "Upgrade some machinery",
                    D: "Train a new employee"
                },
                correctAnswer: "A",
                translation: "남자는 무엇을 할 것이라고 말하는가?",
                translation_A: "더 많은 정보 조사하기",
                translation_B: "할인 협상하기",
                translation_C: "기계 업그레이드하기",
                translation_D: "신입 사원 교육하기"
            }
        ],
        script: [
            { speaker: "Woman 1", text: "Gizem and Hector, I'm very pleased with the sales of our brands of cakes, pies, and cookies this past holiday season. Any thoughts on what we should be concentrating on going forward?" },
            { speaker: "Woman 2", text: "The biggest trend right now is the reduction of sugar. The public wants healthier products, but the same great taste. That'll be our biggest challenge." },
            { speaker: "Man", text: "One of our ingredient suppliers recently started offering a sweetener made entirely from natural ingredients." },
            { speaker: "Woman 1", text: "Are there similar ones on the market? And how do they compare?" },
            { speaker: "Man", text: "I'd have to do some investigation to find out more about that. I have some time available tomorrow afternoon." }
        ],
        translation: "여1: 기젬, 헥터. 지난 휴가 시즌 우리 브랜드의 케이크, 파이, 쿠키 판매량이 매우 만족스러워요. 앞으로 우리가 무엇에 집중해야 하는지에 대한 의견이 있으십니까?\n여2: 지금 가장 크게 유행하는 건 설탕을 줄이는 거예요. 대중은 건강에 더 좋지만 똑같이 맛있는 제품을 원해요. 그게 가장 큰 문제일 겁니다.\n남: 최근에 우리 재료 공급업체 중 한 곳이 완전히 천연 재료로만 만든 감미료를 제공하기 시작했어요.\n여1: 시장에 비슷한 상품들이 나와 있나요? 비교하면 어때요?\n남: 더 알아보려면 조사를 좀 해 봐야겠네요. 저는 내일 오후에 시간이 있어요."
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p3-t01-s7",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "50-52",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-50-52.mp3",
        questions: [
            {
                id: "v4-p3-t01-q50",
                text: "Why is the man calling?",
                classification: "WHY_REASON",
                options: {
                    A: "To explain a business merger",
                    B: "To describe a new company policy",
                    C: "To offer the woman a work assignment",
                    D: "To invite the woman to speak at a conference"
                },
                correctAnswer: "C",
                translation: "남자가 전화한 이유는?",
                translation_A: "업체 합병에 대해 설명하려고",
                translation_B: "새로운 회사 정책을 말하려고",
                translation_C: "여자에게 업무 할당을 제안하려고",
                translation_D: "여자에게 학회 연설을 요청하려고"
            },
            {
                id: "v4-p3-t01-q51",
                text: "What does the man say a client is interested in doing?",
                classification: "DETAIL",
                options: {
                    A: "Purchasing another business",
                    B: "Finding a new office space",
                    C: "Revising a budget proposal",
                    D: "Creating a marketing campaign"
                },
                correctAnswer: "D",
                translation: "남자는 고객이 무엇을 하는 데 관심이 있다고 말하는가?",
                translation_A: "다른 업체 매입하기",
                translation_B: "새로운 사무 공간 찾기",
                translation_C: "예산 제안서 수정하기",
                translation_D: "마케팅 캠페인 만들기"
            },
            {
                id: "v4-p3-t01-q52",
                text: "What does the woman ask the man to send?",
                classification: "DETAIL",
                options: {
                    A: "A project description",
                    B: "An event invitation",
                    C: "Some social media links",
                    D: "Some contact information"
                },
                correctAnswer: "A",
                translation: "여자는 남자에게 무엇을 보내 달라고 요청하는가?",
                translation_A: "프로젝트 설명서",
                translation_B: "행사 초청장",
                translation_C: "소셜미디어 링크",
                translation_D: "연락처"
            }
        ],
        script: [
            { speaker: "Man", text: "Hi, Bianca. I'm calling to see if you'd have time to work on a project for my marketing firm. We've expanded a lot in the past year, and we need some help." },
            { speaker: "Woman", text: "Thanks for thinking of me. What type of work would I be doing?" },
            { speaker: "Man", text: "Well, we have a new client in Brazil who's interested in creating a marketing campaign for social media sites. You'd be overseeing the campaign." },
            { speaker: "Woman", text: "Oh, I have experience with that. Why don't you send me a detailed description of the work? That'll give me an idea of how much time this project will take." }
        ],
        translation: "남: 안녕하세요, 비앙카. 제 마케팅 회사의 프로젝트를 진행해 주실 시간이 되시는지 알아보려고 전화 드렸어요. 지난해에 크게 확장을 해서 도움이 필요하거든요.\n여: 저를 떠올려 주셔서 감사합니다. 제가 어떤 종류의 일을 하게 되나요?\n남: 브라질에 신규 고객이 있는데 소셜미디어 사이트용 마케팅 캠페인을 만들고 싶어 해요. 그 캠페인을 관리 감독하게 될 겁니다.\n여: 아, 그쪽에 경험이 있어요. 그 일에 대한 상세한 설명서를 보내주시겠어요? 이 프로젝트에 시간이 얼마나 걸릴지 제가 짐작할 수 있을 거예요."
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p3-t01-s8",
        contextType: "B2. 주문 / 배송",
        questionRange: "53-55",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-53-55.mp3",
        questions: [
            {
                id: "v4-p3-t01-q53",
                text: "What problem does the woman mention?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "A vehicle is out of service.",
                    B: "An employee is late.",
                    C: "A shipment was damaged.",
                    D: "Traffic is heavy."
                },
                correctAnswer: "A",
                translation: "여자는 어떤 문제를 언급하는가?",
                translation_A: "차량이 고장 났다.",
                translation_B: "직원이 늦었다.",
                translation_C: "수송품이 훼손됐다.",
                translation_D: "교통이 혼잡하다."
            },
            {
                id: "v4-p3-t01-q54",
                text: "Where do the speakers most likely work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a recording studio",
                    B: "At a catering company",
                    C: "At a radio station",
                    D: "At a car dealership"
                },
                correctAnswer: "B",
                translation: "화자들은 어디서 일하겠는가?",
                translation_A: "녹음 스튜디오",
                translation_B: "출장 요리 업체",
                translation_C: "라디오 방송국",
                translation_D: "자동차 대리점"
            },
            {
                id: "v4-p3-t01-q55",
                text: "What does the man say he will do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Arrange for a car repair",
                    B: "Order some kitchen supplies",
                    C: "Carry some items",
                    D: "Offer a refund"
                },
                correctAnswer: "C",
                translation: "남자는 다음으로 무엇을 하겠다고 말하는가?",
                translation_A: "차량 수리 준비하기",
                translation_B: "주방용품 주문하기",
                translation_C: "일부 물품 옮기기",
                translation_D: "환불해 주기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Hey, Koji? We were about to pack van number five for the music festival when we noticed it's got a flat tire." },
            { speaker: "Man", text: "Oh. That's not good." },
            { speaker: "Woman", text: "We're supposed to get there by eleven to set up lunch for the performers. Is there another van we can take?" },
            { speaker: "Man", text: "Let me see what's available. We've got a lot of catering jobs today. Ah, yes - we can use van number three. Do you need help loading?" },
            { speaker: "Woman", text: "Yes, thanks. The food's already in coolers, but everything's in the kitchen with the serving utensils and napkins. It all needs to be brought to the parking area." },
            { speaker: "Man", text: "All right; I can help with that." }
        ],
        translation: "여: 안녕하세요, 코지? 음악 축제에 가려고 5번 밴에 짐을 채우려던 참인데요, 타이어에 펑크가 난 것을 알았어요.\n남: 아, 안타깝네요.\n여: 연주자들을 위한 점심 식사를 준비하러 11시까지 도착해야 해요. 저희가 탈 수 있는 다른 밴이 있나요?\n남: 어떤 밴을 이용할 수 있는지 확인해 볼게요. 오늘은 케이터링 일감이 많군요. 아, 있어요. 3번 밴을 쓰면 돼요. 짐을 싣는 걸 도와드릴까요?\n여: 네, 감사합니다. 음식은 이미 아이스박스에 담겨 있는데, 모든 것이 식기류와 냅킨과 함께 주방에 있어요. 주차장으로 모두 가져와야 해요.\n남: 알겠습니다. 도와드릴게요."
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p3-t01-s9",
        contextType: "A3. 인사 / 휴가 / 근무",
        questionRange: "56-58",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-56-58.mp3",
        questions: [
            {
                id: "v4-p3-t01-q56",
                text: "Why is the man calling the woman?",
                classification: "WHY_REASON",
                options: {
                    A: "To plan a company event",
                    B: "To confirm a work deadline",
                    C: "To discuss a career path",
                    D: "To accept a job offer"
                },
                correctAnswer: "C",
                translation: "남자가 여자에게 전화한 이유는?",
                translation_A: "회사 행사를 계획하려고",
                translation_B: "업무 마감 기한을 확인하려고",
                translation_C: "진로를 의논하려고",
                translation_D: "일자리 제안을 수락하려고"
            },
            {
                id: "v4-p3-t01-q57",
                text: "Who most likely is the woman?",
                classification: "WHO_LOC",
                options: {
                    A: "A newspaper editor",
                    B: "A university professor",
                    C: "A delivery person",
                    D: "A professional actor"
                },
                correctAnswer: "A",
                translation: "여자는 누구이겠는가?",
                translation_A: "신문 편집자",
                translation_B: "대학교수",
                translation_C: "배달원",
                translation_D: "전문 배우"
            },
            {
                id: "v4-p3-t01-q58",
                text: "What will the woman most likely do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Negotiate a contract",
                    B: "Explain an office policy",
                    C: "Review a résumé",
                    D: "Describe a work schedule"
                },
                correctAnswer: "D",
                translation: "여자는 다음으로 무엇을 하겠는가?",
                translation_A: "계약 협상하기",
                translation_B: "사무실 정책 설명하기",
                translation_C: "이력서 검토하기",
                translation_D: "업무 일정 설명하기"
            }
        ],
        script: [
            { speaker: "Man", text: "Thanks for taking my call. As I mentioned in my e-mail, I'm interested in working in your field. But I'm talking to some professionals first so I can find out more about it." },
            { speaker: "Woman", text: "Happy to help." },
            { speaker: "Man", text: "So how did you get your start?" },
            { speaker: "Woman", text: "Oh, my family always subscribed to three newspapers. So I always thought the news was important. At my university, I joined the newspaper and eventually worked my way up to being an editor." },
            { speaker: "Man", text: "Wow. Is it true that people in the news business work very long hours? So what's your schedule like?" }
        ],
        translation: "남: 전화 받아 주셔서 고맙습니다. 이메일에서 언급한 것처럼 이 분야에서 일하는 데 관심이 있어요. 그런데 이에 대해 더 자세히 알아보기 위해 먼저 전문가들과 이야기를 나누고 있습니다.\n여: 도울 수 있어 기뻐요.\n남: 어떻게 일을 시작하게 되셨나요?\n여: 아, 저희 가족은 항상 신문 세 종류를 구독했어요. 그래서 언제나 뉴스가 중요하다고 생각했죠. 대학 시절에 신문사에 들어가 결국 편집자까지 된 겁니다.\n남: 우와! 뉴스 업계 직원들이 굉장히 긴 시간을 일한다는 게 사실인가요? 일정은 어떻게 되세요?"
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p3-t01-s10",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "59-61",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-59-61.mp3",
        questions: [
            {
                id: "v4-p3-t01-q59",
                text: "What are the speakers mainly discussing?",
                classification: "WHAT_WHICH",
                options: {
                    A: "A new transportation route",
                    B: "A company merger",
                    C: "A public relations initiative",
                    D: "A medical facility design"
                },
                correctAnswer: "B",
                translation: "화자들은 주로 무엇에 관해 이야기하는가?",
                translation_A: "새로운 운송 경로",
                translation_B: "회사 합병",
                translation_C: "홍보 계획",
                translation_D: "의료 시설 설계"
            },
            {
                id: "v4-p3-t01-q60",
                text: "Why does the woman say, \"they also talked about it last year\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To express doubt",
                    B: "To explain a process",
                    C: "To make a recommendation",
                    D: "To update some information"
                },
                correctAnswer: "A",
                translation: "여자가 \"그 얘기는 작년에도 있었어요\"라고 말하는 이유는?",
                translation_A: "의심을 나타내려고",
                translation_B: "절차를 설명하려고",
                translation_C: "추천하려고",
                translation_D: "최신 정보를 주려고"
            },
            {
                id: "v4-p3-t01-q61",
                text: "What does the woman want to avoid?",
                classification: "DETAIL",
                options: {
                    A: "Paying a certification fee",
                    B: "Training additional staff",
                    C: "Upgrading some technology",
                    D: "Relocating to another city"
                },
                correctAnswer: "D",
                translation: "여자는 무엇을 피하고 싶어 하는가?",
                translation_A: "증명서 발급비 지불",
                translation_B: "추가 직원 교육",
                translation_C: "기술 업그레이드",
                translation_D: "다른 도시로 이전"
            }
        ],
        script: [
            { speaker: "Man", text: "Hi, Karen! I just read the article on the company Web site about the proposed merger with QZ Corporation. It looks like we're going ahead with it." },
            { speaker: "Woman", text: "There would be a lot of advantages to merging operations, although they also talked about it last year." },
            { speaker: "Man", text: "I remember that. But there were a lot of details to work out - like whether our offices would stay in Chicago. Now it looks like we won't be relocating." },
            { speaker: "Woman", text: "Well, I really don't want to move, so that's a relief." }
        ],
        translation: "남: 안녕하세요, 카렌! 회사 웹사이트에서 QZ 코퍼레이션과의 합병 제안에 관한 기사를 방금 읽었어요. 추진될 것 같네요.\n여: 합병하면 많은 이점이 있겠지만 그 얘기는 작년에도 있었어요.\n남: 기억나요. 하지만 사무실이 시카고에 계속 남아있을지 여부 등 해결해야 할 세부 사항이 많았어요. 이제 우리가 이전하진 않을 것 같네요.\n여: 음, 저는 정말 옮기고 싶지 않아요. 그래서 안심이 돼요."
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p3-t01-s11",
        contextType: "B2. 주문 / 배송",
        questionRange: "62-64",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-62-64.mp3",
        image: "/images/ETS_TOEIC_4/Test_01/Part_03/v4_p3_t01_q62.png",
        questions: [
            {
                id: "v4-p3-t01-q62",
                text: "Who is a gift for?",
                classification: "DETAIL",
                options: {
                    A: "Donors",
                    B: "Volunteers",
                    C: "Employees",
                    D: "Clients"
                },
                correctAnswer: "C",
                translation: "누구를 위한 선물인가?",
                translation_A: "기증자",
                translation_B: "자원봉사자",
                translation_C: "직원",
                translation_D: "고객"
            },
            {
                id: "v4-p3-t01-q63",
                text: "Look at the graphic. What is the price of the item the man recommends?",
                classification: "GRAPHIC",
                options: {
                    A: "$21",
                    B: "$18",
                    C: "$24",
                    D: "$15"
                },
                correctAnswer: "C",
                translation: "시각 정보에 의하면, 남자가 추천하는 물품의 가격은?",
                translation_A: "$21",
                translation_B: "$18",
                translation_C: "$24",
                translation_D: "$15"
            },
            {
                id: "v4-p3-t01-q64",
                text: "What is the woman going to send to the man?",
                classification: "ACTION_NEXT",
                options: {
                    A: "A graphic file",
                    B: "A list of names",
                    C: "A delivery address",
                    D: "An account number"
                },
                correctAnswer: "A",
                translation: "여자는 남자에게 무엇을 보낼 것인가?",
                translation_A: "그래픽 파일",
                translation_B: "명단",
                translation_C: "배송 주소",
                translation_D: "계좌 번호"
            }
        ],
        script: [
            { speaker: "Man", text: "Thanks for calling Customized Concepts. How can I help you?" },
            { speaker: "Woman", text: "My company wants to give every employee a gift, something useful but not too big. Since we're about to host our annual staff basketball tournament, I thought a water bottle might be good." },
            { speaker: "Man", text: "We carry a few drink containers. If you're at our Web site, you'll see them under the Lifestyle tab." },
            { speaker: "Woman", text: "Let me pull it up now... All right." },
            { speaker: "Man", text: "I recommend the metal bottle with the wide-mouthed lid. It's easier to clean than the one with the straw." },
            { speaker: "Woman", text: "OK, thanks. And you could put our company logo on it, right?" },
            { speaker: "Man", text: "Yes. You'll just need to send me the graphic file." },
            { speaker: "Woman", text: "I can do that." }
        ],
        translation: "남: 커스터마이즈 컨셉에 전화 주셔서 감사합니다. 무엇을 도와드릴까요?\n여: 저희 회사에서 모든 직원들에게 선물을 주려고 합니다. 유용한데 그리 크지 않은 걸로요. 연례 직원 농구 대회를 주최할 참이라서 물병이 좋을 것 같다고 생각했어요.\n남: 저희는 몇 가지 음료 용기를 취급합니다. 저희 웹사이트를 방문하시면 라이프스타일 탭 아래에서 보실 수 있습니다.\n여: 지금 열어 볼게요… 됐어요.\n남: 뚜껑 입구가 큰 금속병을 추천해요. 빨대가 있는 것보다 닦기 쉽습니다.\n여: 좋아요, 감사합니다. 저희 회사 로고를 넣어 주실 수 있죠, 그렇죠?\n남: 네. 저에게 그래픽 파일만 보내주시면 됩니다.\n여: 보내드릴게요."
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p3-t01-s12",
        contextType: "B4. 일반문의",
        questionRange: "65-67",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-65-67.mp3",
        image: "/images/ETS_TOEIC_4/Test_01/Part_03/v4_p3_t01_q65.png",
        questions: [
            {
                id: "v4-p3-t01-q65",
                text: "What type of art will be displayed in an exhibit?",
                classification: "DETAIL",
                options: {
                    A: "Clay sculptures",
                    B: "Oil paintings",
                    C: "Black-and-white photographs",
                    D: "Pencil drawings"
                },
                correctAnswer: "D",
                translation: "전시회에 어떤 종류의 작품이 전시될 것인가?",
                translation_A: "점토 조각",
                translation_B: "유화",
                translation_C: "흑백 사진",
                translation_D: "연필화"
            },
            {
                id: "v4-p3-t01-q66",
                text: "Look at the graphic. Which piece of artwork will no longer be included?",
                classification: "GRAPHIC",
                options: {
                    A: "A Careful Glance",
                    B: "Promises",
                    C: "Stormy Sea",
                    D: "The Moment"
                },
                correctAnswer: "C",
                translation: "시각 정보에 의하면, 어떤 작품이 더 이상 포함되지 않을 것인가?",
                translation_A: "〈조심스러운 시선〉",
                translation_B: "〈약속〉",
                translation_C: "〈폭풍의 바다〉",
                translation_D: "〈순간〉"
            },
            {
                id: "v4-p3-t01-q67",
                text: "What does the woman say she will do right away?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Speak with an artist",
                    B: "Edit a recording",
                    C: "Clean a gallery space",
                    D: "Greet some visitors"
                },
                correctAnswer: "B",
                translation: "여자는 무엇을 바로 하겠다고 말하는가?",
                translation_A: "화가와 이야기하기",
                translation_B: "녹음 수정하기",
                translation_C: "미술품 전시 공간 청소하기",
                translation_D: "방문객 맞이하기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Yun, I just finished recording the audio guide for the pencil drawings that'll be included in our modern art exhibit next week. The files'll be loaded onto the audio devices tomorrow." },
            { speaker: "Man", text: "That's great. But, unfortunately, we have to make one change. The drawing by Claudia Hoffman will no longer be in the exhibit. There was a scheduling mix-up, and it was promised to another museum starting next week." },
            { speaker: "Woman", text: "Oh, that's too bad. That was one of my favorite pieces. Will you put anything in its place?" },
            { speaker: "Man", text: "No. We'll just remove it." },
            { speaker: "Woman", text: "OK, then I'll make that change to the audio-guide recording. I'll do that right away." }
        ],
        translation: "여: 윤, 다음 주에 있을 현대 미술전에 포함될 연필화의 오디오 가이드 녹음을 막 마쳤어요. 파일은 내일 오디오 기기에 로딩될 거예요.\n남: 좋아요. 그런데 안타깝게도 한 가지 바꿀 게 있습니다. 클라우디아 호프만의 그림은 이제 전시되지 않을 거예요. 일정 혼동이 있었고, 다음 주부터 다른 미술관과 약속되어 있어요.\n여: 아, 너무 아쉽네요. 제가 가장 좋아하는 작품 중 하나였거든요. 그 자리에 다른 작품을 넣으실 건가요?\n남: 아니요, 그냥 없앨 거예요.\n여: 네, 그러면 오디오 가이드 녹음을 그렇게 바꿀게요. 지금 바로 할게요."
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p3-t01-s13",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "68-70",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-68-70.mp3",
        image: "/images/ETS_TOEIC_4/Test_01/Part_03/v4_p3_t01_q68.png",
        questions: [
            {
                id: "v4-p3-t01-q68",
                text: "Who most likely are the speakers?",
                classification: "WHO_LOC",
                options: {
                    A: "Urban planners",
                    B: "Journalists",
                    C: "Engineers",
                    D: "Environmental scientists"
                },
                correctAnswer: "B",
                translation: "화자들은 누구이겠는가?",
                translation_A: "도시 계획자",
                translation_B: "기자",
                translation_C: "엔지니어",
                translation_D: "환경 과학자"
            },
            {
                id: "v4-p3-t01-q69",
                text: "Look at the graphic. Which site has already been completed?",
                classification: "GRAPHIC",
                options: {
                    A: "Site A",
                    B: "Site B",
                    C: "Site C",
                    D: "Site D"
                },
                correctAnswer: "D",
                translation: "시각 정보에 의하면, 어떤 현장이 이미 완공되었는가?",
                translation_A: "현장 A",
                translation_B: "현장 B",
                translation_C: "현장 C",
                translation_D: "현장 D"
            },
            {
                id: "v4-p3-t01-q70",
                text: "What does the man suggest focusing on?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Work opportunities",
                    B: "Wind turbine costs",
                    C: "Supply chain issues",
                    D: "Power capacity"
                },
                correctAnswer: "A",
                translation: "남자는 무엇에 초점을 맞추자고 제안하는가?",
                translation_A: "일자리 기회",
                translation_B: "풍력 발전용 터빈 비용",
                translation_C: "공급망 문제",
                translation_D: "전력 용량"
            }
        ],
        script: [
            { speaker: "Man", text: "I'm glad we were assigned to cover the press conference earlier today. I counted seven other major media networks there, in addition to ours." },
            { speaker: "Woman", text: "Well, the offshore wind industry is going to transform the way this region gets its power." },
            { speaker: "Man", text: "Agreed. Let's compare our facts before we start writing." },
            { speaker: "Woman", text: "So the largest cluster of wind turbines - off the coast of Winston - is already built. The other sites are at different stages of construction, though Lanchester is also close to being done." },
            { speaker: "Man", text: "Right. And I think it's crucial for us to focus on how many new jobs related to assembling and maintaining the turbines are opening up in the area as a result of this." }
        ],
        translation: "남: 아까 우리가 기자회견 취재를 맡아서 기뻐요. 세어 보니 우리 외에도 7개의 주요 방송국이 참석했어요.\n여: 해상 풍력 산업이 이 지역이 전력을 얻는 방식을 완전히 바꿔 놓을 거예요.\n남: 맞아요. 기사를 쓰기 전에 사실과 비교해 봅시다.\n여: 풍력 발전용 터빈이 가장 많이 설치되는 곳은 윈스턴 앞바다인데 이미 지어졌어요. 다른 현장들도 각기 다른 공사 단계에 있지만 란체스터는 거의 완공 단계이고요.\n남: 네. 그 결과로 지역 내에서 터빈 조립 및 관리와 관련된 새 일자리가 얼마나 많이 생기고 있는지에 초점을 맞추는 것이 정말 중요할 것 같아요."
    }
];
