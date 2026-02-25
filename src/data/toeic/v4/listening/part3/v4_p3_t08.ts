import { Part3Set } from '../types';

export const test8Data: Part3Set[] = [
    {
        testId: 8,
        vol: 4,
        setId: "v4-p3-t08-s01",
        contextType: "A1. 사무실 업무",
        questionRange: "32-34",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-32-34.mp3",
        questions: [
            {
                id: "v4-p3-t08-q32",
                text: "According to the woman, what will happen next week?",
                classification: "DETAIL",
                options: {
                    A: "A renovation project will begin.",
                    B: "A company will move to a new location.",
                    C: "Some technology will be updated.",
                    D: "Some new employees will be trained."
                },
                correctAnswer: "A",
                translation: "여자에 따르면, 다음 주에 어떤 일이 있을 것인가?",
                translation_A: "보수 프로젝트가 시작될 것이다.",
                translation_B: "회사가 새로운 장소로 이전할 것이다.",
                translation_C: "기술이 업데이트될 것이다.",
                translation_D: "신입사원들이 교육을 받을 것이다."
            },
            {
                id: "v4-p3-t08-q33",
                text: "What does the man recommend?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Ordering some equipment",
                    B: "Printing some instructions",
                    C: "Donating some furniture",
                    D: "Arranging a catered meal"
                },
                correctAnswer: "C",
                translation: "남자는 무엇을 권장하는가?",
                translation_A: "장비 주문하기",
                translation_B: "설명서 출력하기",
                translation_C: "가구 기부하기",
                translation_D: "케이터링 음식 마련하기"
            },
            {
                id: "v4-p3-t08-q34",
                text: "What does the woman say she will do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Meet a client",
                    B: "Research some options",
                    C: "Make a presentation",
                    D: "Sign a contract"
                },
                correctAnswer: "B",
                translation: "여자는 무엇을 하겠다고 말하는가?",
                translation_A: "고객 만나기",
                translation_B: "선택 사항 조사하기",
                translation_C: "발표하기",
                translation_D: "계약서에 서명하기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Matteo, do you have time to help me organize the storage room? The construction crew's going to be starting renovations on the lobby next week. We need to make space to store the lobby furniture." },
            { speaker: "Man", text: "Actually, I know the plan is to replace those tables and chairs. Maybe we should just donate them now rather than putting them in storage." },
            { speaker: "Woman", text: "Good idea! I'll do some research to see which organizations accept donations of furniture. I'm sure there are several in the area." }
        ],
        translation: "여: 마테오, 시간 있으면 창고 정리 좀 도와주실래요? 공사 인부들이 다음 주 로비 보수를 시작할 건데요. 로비 가구를 보관할 공간을 마련해야 해서요.\n남: 실은 탁자와 의자를 교체할 계획으로 알고 있어요. 창고에 보관하지 말고 지금 바로 기부하는 것이 좋을 것 같습니다.\n여: 좋은 생각이네요! 어떤 단체가 가구 기부를 받는지 조사해 볼게요. 분명 지역 내에 여러 곳이 있을 겁니다."
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p3-t08-s02",
        contextType: "C2. 건강 / 여가 / 농장",
        questionRange: "35-37",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-35-37.mp3",
        questions: [
            {
                id: "v4-p3-t08-q35",
                text: "Where do the speakers most likely work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a restaurant",
                    B: "At a farm",
                    C: "On a fishing boat",
                    D: "At a public park"
                },
                correctAnswer: "B",
                translation: "화자들은 어디서 일하겠는가?",
                translation_A: "음식점",
                translation_B: "농장",
                translation_C: "어선",
                translation_D: "공원"
            },
            {
                id: "v4-p3-t08-q36",
                text: "What does Brian give to Liam?",
                classification: "DETAIL",
                options: {
                    A: "Some gloves",
                    B: "Some bags",
                    C: "A plastic bucket",
                    D: "A clipboard"
                },
                correctAnswer: "A",
                translation: "브라이언은 리암에게 무엇을 주는가?",
                translation_A: "장갑",
                translation_B: "가방",
                translation_C: "플라스틱 바구니",
                translation_D: "서류철"
            },
            {
                id: "v4-p3-t08-q37",
                text: "According to Brian, what is important?",
                classification: "DETAIL",
                options: {
                    A: "Using sunscreen lotion",
                    B: "Labeling some items",
                    C: "Following a schedule",
                    D: "Drinking water"
                },
                correctAnswer: "D",
                translation: "브라이언에 따르면, 중요한 것은 무엇인가?",
                translation_A: "자외선 차단 로션 사용하기",
                translation_B: "물품에 라벨 붙이기",
                translation_C: "일정 따르기",
                translation_D: "물 마시기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Hi, Liam. We're really glad to have you join our team. The harvest season is our busiest!" },
            { speaker: "Man 1 (Liam)", text: "I'm excited to get started." },
            { speaker: "Woman", text: "Let me introduce you to Brian. He will take you out to the berry fields for your training." },
            { speaker: "Man 2 (Brian)", text: "Hi, Liam. Here's a pair of gloves for you to use." },
            { speaker: "Man 1 (Liam)", text: "Thanks!" },
            { speaker: "Man 2 (Brian)", text: "The berry picking is really straightforward. But it's important that you get plenty of water and stay hydrated in this heat." },
            { speaker: "Man 1 (Liam)", text: "I brought a big bottle of it with me, so I should be fine." }
        ],
        translation: "여: 안녕하세요, 리암. 저희 팀에 들어오셔서 정말 좋아요. 수확기가 가장 바쁘거든요!\n남1: 일을 시작하게 되어 기뻐요.\n여: 브라이언에게 소개해 드릴게요. 딸기밭으로 데리고 나가서 교육을 해 줄 겁니다.\n남2: 안녕하세요, 리암. 쓰실 장갑이 여기 있어요.\n남1: 감사합니다!\n남2: 딸기 따기는 무척 간단해요. 하지만 이 더위엔 물을 많이 마시고 수분을 유지하는 것이 중요하죠.\n남1: 큰 병을 가져왔으니까 괜찮을 거예요."
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p3-t08-s03",
        contextType: "B3. 행사 / 연설",
        questionRange: "38-40",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-38-40.mp3",
        questions: [
            {
                id: "v4-p3-t08-q38",
                text: "Who most likely is the man?",
                classification: "WHO_LOC",
                options: {
                    A: "An event coordinator",
                    B: "A book publisher",
                    C: "A city official",
                    D: "A podcast host"
                },
                correctAnswer: "D",
                translation: "남자는 누구이겠는가?",
                translation_A: "행사 조직자",
                translation_B: "도서 출판업자",
                translation_C: "시 공무원",
                translation_D: "팟캐스트 진행자"
            },
            {
                id: "v4-p3-t08-q39",
                text: "What does the woman say is special about a flower?",
                classification: "DETAIL",
                options: {
                    A: "It is resistant to insects.",
                    B: "It has an unusual color.",
                    C: "It can bloom for a long time.",
                    D: "It has a unique smell."
                },
                correctAnswer: "C",
                translation: "여자는 꽃의 어떤 점이 특별하다고 말하는가?",
                translation_A: "곤충에 강하다.",
                translation_B: "색깔이 특이하다.",
                translation_C: "오랫동안 꽃을 피울 수 있다.",
                translation_D: "향기가 독특하다."
            },
            {
                id: "v4-p3-t08-q40",
                text: "What will happen next month?",
                classification: "ACTION_NEXT",
                options: {
                    A: "A botanical show will be held.",
                    B: "A public garden will open.",
                    C: "An experiment will be conducted.",
                    D: "A gardening class will be offered."
                },
                correctAnswer: "A",
                translation: "다음 달에 무슨 일이 있을 것인가?",
                translation_A: "식물 박람회가 열릴 것이다.",
                translation_B: "공원이 문을 열 것이다.",
                translation_C: "실험이 시행될 것이다.",
                translation_D: "정원 가꾸기 강좌가 제공될 것이다."
            }
        ],
        script: [
            { speaker: "Man", text: "Welcome to my gardening podcast. I'm Rajesh Varma, and today I'm here with So-Jin Lee, a botanist from Denton University who recently developed a new hybrid flower. Could you tell us more, Professor Lee?" },
            { speaker: "Woman", text: "Certainly. I developed a new type of rose—it's special because it blooms longer than any other rose." },
            { speaker: "Man", text: "That's interesting. Is it difficult to grow?" },
            { speaker: "Woman", text: "Not if it's planted under the right conditions. Next month, the rose will be featured at the botanical show downtown. I hope your listeners will come to see it." }
        ],
        translation: "남: 정원 가꾸기 팟캐스트입니다. 저는 라제쉬 바르마이고요, 오늘은 최근 새로운 잡종 꽃을 개발한 덴튼 대학교의 식물학자 이소진 씨와 함께합니다. 이 교수님, 더 얘기해 주시겠어요?\n여: 네. 저는 새로운 종류의 장미를 개발했는데요. 다른 장미보다 오래 꽃을 피운다는 점이 특별하죠.\n남: 흥미롭네요. 기르기가 어렵나요?\n여: 알맞은 조건에서 키운다면 어렵지 않아요. 다음 달에 시내에서 열리는 식물 박람회에 이 장미가 나올 겁니다. 청취자들이 와서 보시면 좋겠어요."
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p3-t08-s04",
        contextType: "A1. 사무실 업무",
        questionRange: "41-43",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-41-43.mp3",
        questions: [
            {
                id: "v4-p3-t08-q41",
                text: "What does the woman propose doing?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Hiring a computer technician",
                    B: "Using a training application",
                    C: "Replacing some printers",
                    D: "Changing business hours"
                },
                correctAnswer: "B",
                translation: "여자는 무엇을 하자고 제안하는가?",
                translation_A: "컴퓨터 기사 고용하기",
                translation_B: "교육 앱 사용하기",
                translation_C: "프린터 교체하기",
                translation_D: "운영시간 변경하기"
            },
            {
                id: "v4-p3-t08-q42",
                text: "What is the man concerned about?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "Scheduling delays",
                    B: "Employee satisfaction",
                    C: "The cost of a product",
                    D: "The quality of a product"
                },
                correctAnswer: "C",
                translation: "남자는 무엇에 대해 염려하는가?",
                translation_A: "일정 지연",
                translation_B: "직원 만족",
                translation_C: "제품 가격",
                translation_D: "제품 품질"
            },
            {
                id: "v4-p3-t08-q43",
                text: "According to the woman, what can be found on a Web site?",
                classification: "DETAIL",
                options: {
                    A: "A company address",
                    B: "Customer reviews",
                    C: "A chat feature",
                    D: "Discount coupons"
                },
                correctAnswer: "B",
                translation: "여자에 따르면, 웹사이트에서 무엇을 찾을 수 있는가?",
                translation_A: "업체 주소",
                translation_B: "고객 후기",
                translation_C: "채팅 기능",
                translation_D: "할인 쿠폰"
            }
        ],
        script: [
            { speaker: "Woman", text: "So, Vivek, I think our employees could benefit from some more training. How about using this software application that I found? The app provides a platform for uploading our own training videos. And employees could view them on their phones at any time." },
            { speaker: "Man", text: "You know, I've heard that those online programs help employees retain knowledge. But aren't those apps expensive?" },
            { speaker: "Woman", text: "Actually, the cost is reasonable. And the Web site has some interesting reviews from other businesses that have used the app and found it helpful." }
        ],
        translation: "여: 자, 비벡, 우리 직원들이 더 많은 교육으로 혜택을 받을 수 있을 것 같아요. 제가 찾은 이 소프트웨어 앱을 사용하면 어때요? 그 앱은 우리의 교육 동영상을 업로드할 플랫폼을 제공하거든요. 그리고 직원들은 언제든 핸드폰으로 동영상을 볼 수 있고요.\n남: 그런 온라인 프로그램은 직원들이 지식을 보유할 수 있도록 도와준다고 들었어요. 그런데 그런 앱은 비싸지 않나요?\n여: 사실 비용이 적정해요. 그리고 그 앱을 쓰고 유용하다고 생각한 업체들의 흥미로운 후기가 웹사이트에 있어요."
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p3-t08-s05",
        contextType: "A1. 사무실 업무",
        questionRange: "44-46",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-44-46.mp3",
        questions: [
            {
                id: "v4-p3-t08-q44",
                text: "What are the speakers mainly discussing?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "A presenter at an event",
                    B: "End-of-year bonuses",
                    C: "Vacation requests",
                    D: "An applicant for a new role"
                },
                correctAnswer: "D",
                translation: "화자들은 주로 무엇에 대해 이야기하는가?",
                translation_A: "행사 진행자",
                translation_B: "연말 보너스",
                translation_C: "휴가 요청",
                translation_D: "새로운 역할 지원자"
            },
            {
                id: "v4-p3-t08-q45",
                text: "According to the speakers, what has Amanda Diop accomplished?",
                classification: "DETAIL",
                options: {
                    A: "She secured a business deal.",
                    B: "She completed a professional certification.",
                    C: "She won an industry award.",
                    D: "She reduced production costs."
                },
                correctAnswer: "A",
                translation: "화자들에 따르면, 아만다 디오프는 무엇을 해냈는가?",
                translation_A: "사업 계약을 따냈다.",
                translation_B: "전문 자격증을 땄다.",
                translation_C: "업계 상을 받았다.",
                translation_D: "생산 비용을 줄였다."
            },
            {
                id: "v4-p3-t08-q46",
                text: "What does the woman say she will do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Submit some documents",
                    B: "Reserve a venue",
                    C: "Calculate a budget",
                    D: "Check some references"
                },
                correctAnswer: "A",
                translation: "여자는 무엇을 할 것이라고 말하는가?",
                translation_A: "문서 제출하기",
                translation_B: "장소 예약하기",
                translation_C: "예산 계산하기",
                translation_D: "추천서 확인하기"
            }
        ],
        script: [
            { speaker: "Man", text: "Hi, Christina. Did you have a chance to look over the applications from our sales representatives who are interested in the new team leader role? We'll need to decide on a team leader soon." },
            { speaker: "Woman", text: "I did. I really liked Amanda Diop's application. She's the one who signed that deal with Wallerston Corporation." },
            { speaker: "Man", text: "I agree. That was an impressive deal. Wallerston is one of our biggest clients now. I think Amanda would be a great choice." },
            { speaker: "Woman", text: "OK. I'm glad we're on the same page. I'll complete the paperwork and send it to the human resources department later today." }
        ],
        translation: "남: 안녕하세요, 크리스티나. 신입 팀장 역할에 관심 있는 영업 사원들의 지원서를 살펴볼 기회가 있었나요? 곧 팀장을 결정해야 해요.\n여: 봤어요. 아만다 디오프의 지원서가 무척 맘에 들었어요. 월러스톤 코퍼레이션과의 계약을 체결했잖아요.\n남: 동의해요. 인상적인 계약이었죠. 월러스톤은 지금 가장 중요한 고객 중 하나이고요. 아만다가 좋을 것 같네요.\n여: 네. 의견이 같아서 좋습니다. 서류 작업을 완료해서 이따가 인사부로 보낼게요."
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p3-t08-s06",
        contextType: "B3. 행사 / 연설",
        questionRange: "47-49",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-47-49.mp3",
        questions: [
            {
                id: "v4-p3-t08-q47",
                text: "What is the topic of the conversation?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "A hiring initiative",
                    B: "A tax proposal",
                    C: "A volunteer opportunity",
                    D: "A community festival"
                },
                correctAnswer: "B",
                translation: "대화의 주제는?",
                translation_A: "고용 계획",
                translation_B: "세제안 발의",
                translation_C: "자원봉사 기회",
                translation_D: "지역사회 축제"
            },
            {
                id: "v4-p3-t08-q48",
                text: "What is Ms. Haddad excited about?",
                classification: "DETAIL",
                options: {
                    A: "Attracting international visitors",
                    B: "Increasing employment opportunities",
                    C: "Installing bicycle lanes",
                    D: "Improving a health-care facility"
                },
                correctAnswer: "C",
                translation: "하다드 씨가 기대하는 것은?",
                translation_A: "해외 방문객 유치",
                translation_B: "고용 기회 증가",
                translation_C: "자전거 도로 설치",
                translation_D: "의료 시설 개선"
            },
            {
                id: "v4-p3-t08-q49",
                text: "What concern does the man point out?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "Some equipment is missing.",
                    B: "A project may be understaffed.",
                    C: "Some safety guidelines are unclear.",
                    D: "Some parking spaces may be lost."
                },
                correctAnswer: "D",
                translation: "남자는 어떤 우려 사항을 지적하는가?",
                translation_A: "일부 장비가 없다.",
                translation_B: "프로젝트에 인원이 부족할 수도 있다.",
                translation_C: "안전 지침이 명확하지 않다.",
                translation_D: "주차 공간이 없어질 수도 있다."
            }
        ],
        script: [
            { speaker: "Woman 1", text: "Thanks for agreeing to this interview for our upcoming article in the Thomasville Gazette, Ms. Haddad." },
            { speaker: "Woman 2", text: "Of course. As you know, the city council is proposing the implementation of a road tax. And I want to make sure the public is informed about it." },
            { speaker: "Man", text: "Well, we like to keep our readers in the know, so we have a long list of questions for you." },
            { speaker: "Woman 1", text: "I'll start. What does the city plan to do with this tax revenue, Ms. Haddad?" },
            { speaker: "Woman 2", text: "The money will be used to add bicycle lanes citywide, which I'm excited about. Bicycle lanes should reduce traffic and promote health." },
            { speaker: "Man", text: "Some business owners are concerned about losing street parking. Are you worried about that?" }
        ],
        translation: "여1: <토마스빌 가제트>에 나오게 될 저희 기사 인터뷰에 응해 주셔서 감사합니다, 하다드 씨.\n여2: 당연한 일이죠. 아시다시피, 시 의회는 도로세 시행을 발의하고 있는데요. 이에 대해 대중에게 알리고 싶습니다.\n남: 자, 독자들이 잘 알 수 있도록 많은 질문을 준비했습니다.\n여1: 제가 시작할게요. 시는 이 세수입을 어떻게 활용할 계획인가요, 하다드 씨?\n여2: 자금은 도시 전역에 자전거 전용 도로를 추가하는 데 사용될 텐데요, 아주 기대가 됩니다. 자전거 도로는 교통량을 줄이고 건강을 증진시킬 겁니다.\n남: 사업주들은 노상 주차 공간이 없어질까 봐 걱정하고 있습니다. 이 부분을 염려하시나요?"
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p3-t08-s07",
        contextType: "C1. 항공 / 교통",
        questionRange: "50-52",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-50-52.mp3",
        questions: [
            {
                id: "v4-p3-t08-q50",
                text: "Who is the woman scheduled to meet with?",
                classification: "WHO_LOC",
                options: {
                    A: "A company lawyer",
                    B: "A senior partner",
                    C: "A prospective employee",
                    D: "A potential customer"
                },
                correctAnswer: "D",
                translation: "여자는 누구를 만날 예정인가?",
                translation_A: "회사 변호사",
                translation_B: "사장",
                translation_C: "지원자",
                translation_D: "잠재 고객"
            },
            {
                id: "v4-p3-t08-q51",
                text: "What does the man remind the woman about?",
                classification: "DETAIL",
                options: {
                    A: "A luggage restriction",
                    B: "A required signature",
                    C: "An online guidebook",
                    D: "A refund policy"
                },
                correctAnswer: "A",
                translation: "남자는 여자에게 무엇에 대해 상기시키는가?",
                translation_A: "수하물 제한",
                translation_B: "필수 서명",
                translation_C: "온라인 안내서",
                translation_D: "환불 정책"
            },
            {
                id: "v4-p3-t08-q52",
                text: "What does the man agree to do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Look up a phone number",
                    B: "Arrange for a car rental",
                    C: "File an expense report",
                    D: "Forward an e-mail"
                },
                correctAnswer: "D",
                translation: "남자는 무엇을 하는 데 동의하는가?",
                translation_A: "전화번호 찾아보기",
                translation_B: "차량 대여 준비하기",
                translation_C: "지출 품의서 제출하기",
                translation_D: "이메일 보내기"
            }
        ],
        script: [
            { speaker: "Man", text: "Good morning, Ms. Gomez. I wanted to update you on the travel plans for your meeting with Scarney Department Store." },
            { speaker: "Woman", text: "Thanks for taking care of that. They're prospective clients, and I've been so busy sending them samples and preparing my presentation that I haven't given a thought to my reservations." },
            { speaker: "Man", text: "Happy to help. I've confirmed your plane reservation. Just remember, Vela Air only allows one free piece of carry-on luggage. Otherwise, there'll be an extra charge." },
            { speaker: "Woman", text: "OK. Can you forward the plane ticket confirmation, please?" },
            { speaker: "Man", text: "I'll e-mail you right now." }
        ],
        translation: "남: 안녕하세요, 고메즈 씨. 스카니 백화점과의 회의를 위한 출장 계획 최신 사항을 알려드리려고요.\n여: 처리해 주셔서 고마워요. 가능성 높은 고객이라 그들에게 견본을 보내고 발표 준비를 하느라 너무 바빠서 예약은 생각도 못했어요.\n남: 도와드릴 수 있어서 기쁩니다. 항공권 예약을 확정했는데요, 벨라 항공은 기내 휴대용 수하물을 한 개만 무료로 허용하니 이 점만 명심하세요. 그렇지 않으면 추가 요금이 있을 겁니다.\n여: 알겠어요. 항공권 확인서를 보내주실 수 있나요?\n남: 지금 이메일로 보내겠습니다."
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p3-t08-s08",
        contextType: "A1. 사무실 업무",
        questionRange: "53-55",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-53-55.mp3",
        questions: [
            {
                id: "v4-p3-t08-q53",
                text: "Where are the speakers?",
                classification: "WHO_LOC",
                options: {
                    A: "At an electronics store",
                    B: "At a trade show",
                    C: "At a seminar",
                    D: "At an award ceremony"
                },
                correctAnswer: "B",
                translation: "화자들은 어디에 있는가?",
                translation_A: "전자 제품 매장",
                translation_B: "무역 박람회",
                translation_C: "세미나",
                translation_D: "시상식"
            },
            {
                id: "v4-p3-t08-q54",
                text: "What does the woman mean when she says, \"we have about 200 employees\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "A product would not be useful for her company.",
                    B: "She is looking to hire a manager.",
                    C: "Her business has recently become successful.",
                    D: "Employees will need to be trained."
                },
                correctAnswer: "A",
                translation: "여자가 \"저희는 직원이 200명 정도인데요\"라고 말하는 의도는 무엇인가?",
                translation_A: "제품이 자신의 회사에 유용하지 않을 수도 있다.",
                translation_B: "관리자를 고용하려고 생각한다.",
                translation_C: "자신의 업체가 최근 성공을 거두고 있다.",
                translation_D: "직원들이 교육을 받아야 할 것이다."
            },
            {
                id: "v4-p3-t08-q55",
                text: "What does the man give to the woman?",
                classification: "ACTION_NEXT",
                options: {
                    A: "A regional map",
                    B: "A name tag",
                    C: "A résumé",
                    D: "A chart"
                },
                correctAnswer: "D",
                translation: "남자는 여자에게 무엇을 주는가?",
                translation_A: "지역 지도",
                translation_B: "이름표",
                translation_C: "이력서",
                translation_D: "차트"
            }
        ],
        script: [
            { speaker: "Man", text: "Hi. I'm Marcel from Novik Solutions. Glad you could stop by my trade show booth today." },
            { speaker: "Woman", text: "Nice to meet you. I'm Silvia from Media Futurescapes. So what type of product does your company provide?" },
            { speaker: "Man", text: "We create accounting software so that companies can do their own accounting. Currently, I'm showcasing a new version for companies with under 50 employees." },
            { speaker: "Woman", text: "Well, we have about 200 employees." },
            { speaker: "Man", text: "I understand. Here's a chart that provides an overview of our complete range of products." }
        ],
        translation: "남: 안녕하세요. 노빅 솔루션즈의 마셀이라고 합니다. 오늘 무역 박람회 저희 부스에 들러 주셔서 반갑습니다.\n여: 반갑습니다. 미디어 퓨처스케이프에서 온 실비아입니다. 귀사는 어떤 종류의 제품을 제공하나요?\n남: 저희는 회계 소프트웨어를 만들어서 회사들이 회계 업무를 직접 할 수 있도록 합니다. 현재 직원이 50명 이하인 회사들을 위한 신규 버전을 선보이고 있어요.\n여: 음, 저희는 직원이 200명 정도인데요.\n남: 알겠습니다. 저희 전 제품의 개요를 제공하는 차트가 여기 있습니다."
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p3-t08-s09",
        contextType: "A1. 사무실 업무",
        questionRange: "56-58",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-56-58.mp3",
        questions: [
            {
                id: "v4-p3-t08-q56",
                text: "Who most likely are the speakers?",
                classification: "WHO_LOC",
                options: {
                    A: "Plumbers",
                    B: "Commercial architects",
                    C: "Road repair contractors",
                    D: "Landscapers"
                },
                correctAnswer: "C",
                translation: "화자들은 누구이겠는가?",
                translation_A: "배관공",
                translation_B: "상업용 건물 건축가",
                translation_C: "도로 보수 도급업체",
                translation_D: "조경사"
            },
            {
                id: "v4-p3-t08-q57",
                text: "Why will a project be rescheduled?",
                classification: "WHY_REASON",
                options: {
                    A: "Rainy weather is expected.",
                    B: "A design requires revisions.",
                    C: "Some supplies have not arrived.",
                    D: "A crew member is not available."
                },
                correctAnswer: "A",
                translation: "프로젝트 일정은 왜 변경되는가?",
                translation_A: "비가 예상된다.",
                translation_B: "디자인 수정이 필요하다.",
                translation_C: "일부 물품이 도착하지 않았다.",
                translation_D: "인부를 구할 수 없다."
            },
            {
                id: "v4-p3-t08-q58",
                text: "What will the speakers most likely do on Monday?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Finalize a contract",
                    B: "Train some employees",
                    C: "Move some vehicles",
                    D: "Provide some consultations"
                },
                correctAnswer: "D",
                translation: "화자들은 월요일에 무엇을 하겠는가?",
                translation_A: "계약 마무리",
                translation_B: "직원 교육",
                translation_C: "차량 이동",
                translation_D: "상담 제공"
            }
        ],
        script: [
            { speaker: "Woman", text: "Rodrigo, aren't we scheduled to start the seal-coating job for the street parking around Bevelton Shopping Center next week?" },
            { speaker: "Man", text: "We were going to start those repairs on Monday, but I've been looking at the weather; it's going to rain all weekend. I think we should reschedule." },
            { speaker: "Woman", text: "Right. We can't add a protective layer to the asphalt when it's wet. I'll contact the property manager at the shopping center to discuss alternative dates." },
            { speaker: "Man", text: "OK. Just so you know, we've received a few new requests for consultations on our road repair services. I'll try to slot those in for Monday instead." }
        ],
        translation: "여: 로드리고, 베벨턴 쇼핑센터 주변 도로 주차를 위한 실 코팅 작업이 다음 주부터 시작되는 것 아닌가요?\n남: 월요일에 해당 보수를 시작하려고 했는데 날씨를 보고 있어요. 주말 내내 비가 온다네요. 일정을 변경해야 할 것 같네요.\n여: 그래요. 아스팔트가 젖어 있을 때 보호막을 덧씌울 수는 없으니까요. 제가 쇼핑센터 건물 관리자에게 연락해서 대체 가능한 날짜를 논의해 볼게요.\n남: 좋아요. 그리고 아시다시피 도로 보수 서비스 상담 신규 요청을 몇 건 받았어요. 월요일에 대신 이 건들을 넣어 볼게요."
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p3-t08-s10",
        contextType: "B5. 주거 / 부동산",
        questionRange: "59-61",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-59-61.mp3",
        questions: [
            {
                id: "v4-p3-t08-q59",
                text: "Where do the speakers most likely work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a bookstore",
                    B: "At a dry cleaning business",
                    C: "At a bakery",
                    D: "At a factory"
                },
                correctAnswer: "D",
                translation: "화자들은 어디서 일하겠는가?",
                translation_A: "서점",
                translation_B: "드라이클리닝 업체",
                translation_C: "제과점",
                translation_D: "공장"
            },
            {
                id: "v4-p3-t08-q60",
                text: "What does the man imply when he says, \"employees have to carry the batches across the room\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "A machine is malfunctioning.",
                    B: "A process is time-consuming.",
                    C: "Salaries should be increased.",
                    D: "More workers should be hired."
                },
                correctAnswer: "B",
                translation: "남자가 \"직원들은 방을 가로질러 묶음을 날라야 하잖아요\"라고 말하는 의도는 무엇인가?",
                translation_A: "기계가 제대로 작동하지 않는다.",
                translation_B: "절차에 시간이 많이 든다.",
                translation_C: "임금이 인상되어야 한다.",
                translation_D: "더 많은 근로자를 고용해야 한다."
            },
            {
                id: "v4-p3-t08-q61",
                text: "What will the man show the woman?",
                classification: "ACTION_NEXT",
                options: {
                    A: "A cost estimate",
                    B: "A floor plan",
                    C: "A schedule",
                    D: "A catalog"
                },
                correctAnswer: "A",
                translation: "남자는 여자에게 무엇을 보여줄 것인가?",
                translation_A: "견적서",
                translation_B: "평면도",
                translation_C: "일정표",
                translation_D: "카탈로그"
            }
        ],
        script: [
            { speaker: "Man", text: "Tasnim, I've been looking at the production process for soaps in our facility, and I think there's room for improvement." },
            { speaker: "Woman", text: "Improvements that could decrease our production time?" },
            { speaker: "Man", text: "Yes. Consider this: once the soap mixtures are poured into the molds, employees have to carry the batches across the room." },
            { speaker: "Woman", text: "I see what you mean. If we reinstalled the drying racks closer to the mixing station, they wouldn't have to walk as far." },
            { speaker: "Man", text: "Exactly. A small change like that can have a big effect on total output." },
            { speaker: "Woman", text: "But wouldn't that be expensive?" },
            { speaker: "Man", text: "Let me show you the cost projection." }
        ],
        translation: "남: 태즈님, 우리 시설에서 비누 제작 과정을 봤는데 개선의 여지가 있는 것 같아요.\n여: 생산 시간을 줄일 수 있는 개선이요?\n남: 네. 이걸 한번 고려해 보세요. 비누 혼합물을 몰드에 부으면 직원들이 방을 가로질러 묶음을 날라야 하잖아요.\n여: 무슨 말인지 알겠어요. 건조대를 혼합대 가까이 재설치하면 그렇게 멀리 걸어갈 필요가 없겠네요.\n남: 그거예요. 그런 작은 변화가 전체 생산량에 큰 영향을 미칠 수 있어요.\n여: 하지만 비용이 많이 들지 않겠어요?\n남: 예상 비용을 보여 드릴게요."
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p3-t08-s11",
        contextType: "A1. 사무실 업무",
        questionRange: "62-64",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-62-64.mp3",
        image: "/images/ETS_TOEIC_4/Test_08/Part_03/v4_p3_t08_q62.png",
        questions: [
            {
                id: "v4-p3-t08-q62",
                text: "What department do the speakers work in?",
                classification: "WHO_LOC",
                options: {
                    A: "Legal",
                    B: "Engineering",
                    C: "Human Resources",
                    D: "Information Technology"
                },
                correctAnswer: "B",
                translation: "화자들은 어떤 부서에서 일하는가?",
                translation_A: "법률",
                translation_B: "엔지니어링",
                translation_C: "인사",
                translation_D: "정보 기술"
            },
            {
                id: "v4-p3-t08-q63",
                text: "Look at the graphic. Which quantity needs to be changed?",
                classification: "GRAPHIC",
                options: {
                    A: "20",
                    B: "35",
                    C: "15",
                    D: "10"
                },
                correctAnswer: "A",
                translation: "시각 정보에 의하면, 어떤 수량을 변경해야 하는가?",
                translation_A: "20",
                translation_B: "35",
                translation_C: "15",
                translation_D: "10"
            },
            {
                id: "v4-p3-t08-q64",
                text: "What does the woman ask about?",
                classification: "DETAIL",
                options: {
                    A: "A refund",
                    B: "A signature",
                    C: "A meeting location",
                    D: "A delivery date"
                },
                correctAnswer: "D",
                translation: "여자는 무엇에 대해 물어보는가?",
                translation_A: "환불",
                translation_B: "서명",
                translation_C: "회의 장소",
                translation_D: "배송 일자"
            }
        ],
        script: [
            { speaker: "Man", text: "I was just looking at the supply request form you submitted for our engineering department." },
            { speaker: "Woman", text: "Yes?" },
            { speaker: "Man", text: "I think you might’ve made a mistake. Do we really need that many computer mouses?" },
            { speaker: "Woman", text: "Oh, that is a mistake! I meant to request two." },
            { speaker: "Man", text: "OK, great. I did think that was strange, given that there are only fifteen of us in our department!" },
            { speaker: "Woman", text: "Thanks for catching that. Do you know when the supplies will get here?" },
            { speaker: "Man", text: "I'll place the order this afternoon, so they'll probably arrive next week." }
        ],
        translation: "남: 당신이 제출하신 우리 엔지니어링 부서의 물품 요청서를 보고 있었어요.\n여: 그런데요?\n남: 실수를 하신 것 같네요. 컴퓨터 마우스가 정말 그렇게 많이 필요해요?\n여: 아, 실수예요! 두 개를 요청하려고 했어요.\n남: 아, 네. 부서에 15명밖에 없는데 이상하다고 생각했어요!\n여: 잡아내 주셔서 고마워요. 물품이 언제 도착할지 아세요?\n남: 오늘 오후에 주문을 넣을 겁니다. 그러니 아마 다음 주에 도착할 거예요."
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p3-t08-s12",
        contextType: "B1. 쇼핑",
        questionRange: "65-67",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-65-67.mp3",
        image: "/images/ETS_TOEIC_4/Test_08/Part_03/v4_p3_t08_q65.png",
        questions: [
            {
                id: "v4-p3-t08-q65",
                text: "What type of event are the speakers discussing?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "A retirement party",
                    B: "A wedding",
                    C: "A garden show",
                    D: "A grand opening"
                },
                correctAnswer: "B",
                translation: "화자들은 어떤 종류의 행사에 대해 이야기하는가?",
                translation_A: "은퇴 기념 파티",
                translation_B: "결혼식",
                translation_C: "정원 박람회",
                translation_D: "개업식"
            },
            {
                id: "v4-p3-t08-q66",
                text: "According to the woman, what has caused a problem?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "An invoice error",
                    B: "A rainstorm",
                    C: "A supply shortage",
                    D: "A reservation cancellation"
                },
                correctAnswer: "C",
                translation: "여자에 따르면, 무엇 때문에 문제가 발생했는가?",
                translation_A: "청구서 오류",
                translation_B: "폭풍우",
                translation_C: "공급 부족",
                translation_D: "예약 취소"
            },
            {
                id: "v4-p3-t08-q67",
                text: "Look at the graphic. Which flowers will be used in the arrangements?",
                classification: "GRAPHIC",
                options: {
                    A: "Lilies",
                    B: "Tulips",
                    C: "Roses",
                    D: "Orchids"
                },
                correctAnswer: "B",
                translation: "시각 정보에 의하면, 꽃꽂이에 어떤 꽃이 사용될 것인가?",
                translation_A: "백합",
                translation_B: "튤립",
                translation_C: "장미",
                translation_D: "난초"
            }
        ],
        script: [
            { speaker: "Woman", text: "Welcome to Halcyon Florals. How can I help you?" },
            { speaker: "Man", text: "Hi. I'm planning the Lambert-Evans wedding that's taking place this weekend. I received an e-mail this morning that there's a problem with the flowers I ordered for the floral arrangements." },
            { speaker: "Woman", text: "Yes, unfortunately, my supplier notified me that they’re out of stock because of a shortage. I’m sorry, but you’ll have to choose a replacement for the lilies." },
            { speaker: "Man", text: "I know my client likes orchids, but I’m guessing those are too expensive. We’ll still need a flower that’s under five dollars per stem." },
            { speaker: "Woman", text: "Well, what about these? They fit within your budget." },
            { speaker: "Man", text: "Those will be perfect." }
        ],
        translation: "여: 헬시온 플로럴입니다. 무엇을 도와드릴까요?\n남: 안녕하세요. 이번 주말에 열릴 램버트 에반스 결혼식을 계획하고 있어요. 오늘 오전 이메일을 받았는데 제가 주문한 꽃꽂이 꽃에 문제가 있다고 해서요.\n여: 네, 유감스럽게도 저희 공급업체에서 물품 부족으로 재고가 없다고 알려왔어요. 죄송하지만 백합 대체품을 선택하셔야 해요.\n남: 저희 고객이 난초를 좋아하는 걸로 아는데, 그건 너무 비쌀 것 같아요. 여전히 줄기당 5달러 미만인 꽃이 필요해요.\n여: 음, 이건 어떠세요? 예산에 맞네요.\n남: 아주 좋아요."
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p3-t08-s13",
        contextType: "B5. 주거 / 부동산",
        questionRange: "68-70",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-68-70.mp3",
        image: "/images/ETS_TOEIC_4/Test_08/Part_03/v4_p3_t08_q68.png",
        questions: [
            {
                id: "v4-p3-t08-q68",
                text: "What is the man most likely planning to do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Sell a shop",
                    B: "Expand warehouse space",
                    C: "Replace a sign",
                    D: "Install air-conditioning"
                },
                correctAnswer: "A",
                translation: "남자는 무엇을 하려고 계획하겠는가?",
                translation_A: "매장 판매",
                translation_B: "창고 공간 확장",
                translation_C: "간판 교체",
                translation_D: "에어컨 설치"
            },
            {
                id: "v4-p3-t08-q69",
                text: "Look at the graphic. Which part of the storefront does the man say is historic?",
                classification: "GRAPHIC",
                options: {
                    A: "Part 1",
                    B: "Part 2",
                    C: "Part 3",
                    D: "Part 4"
                },
                correctAnswer: "D",
                translation: "시각 정보에 의하면, 남자는 매장 앞부분의 어떤 부분이 유서 깊다고 말하는가?",
                translation_A: "1",
                translation_B: "2",
                translation_C: "3",
                translation_D: "4"
            },
            {
                id: "v4-p3-t08-q70",
                text: "What will the woman do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Recommend a paint color",
                    B: "Inspect some lighting",
                    C: "Measure a wall",
                    D: "Take some photographs"
                },
                correctAnswer: "D",
                translation: "여자는 다음으로 무엇을 할 것인가?",
                translation_A: "페인트 색상 추천",
                translation_B: "조명 점검",
                translation_C: "벽 치수 측정",
                translation_D: "사진 촬영"
            }
        ],
        script: [
            { speaker: "Woman", text: "I think I've inspected enough to determine a fair market value for your store." },
            { speaker: "Man", text: "OK. You have the paperwork verifying that I replaced my roof last year, right? Buyers look for properties that don't need major repairs." },
            { speaker: "Woman", text: "I do have that. And you're right—recent repairs are a factor that add to the value of a property." },
            { speaker: "Man", text: "The historic windows will be a selling point, I think. They're made of handblown glass. All the storefronts in this row of shops have them." },
            { speaker: "Woman", text: "They do add character. Now, I need to walk around with my camera to take some photos to file with my paperwork." }
        ],
        translation: "여: 고객님 매장의 공정 시장 가치를 결정하기에 충분히 검토를 한 것 같아요.\n남: 네. 작년에 지붕을 교체했다는 것을 증명하는 문서를 갖고 계시죠, 그렇지요? 매수자들은 큰 수리가 필요 없는 건물을 찾거든요.\n여: 갖고 있어요. 그리고 맞습니다. 최근 보수 공사가 건물 가치를 더하는 요인입니다.\n남: 유서 깊은 창문도 판매에 유리한 점 같아요. 직접 입으로 불어서 만든 유리로 되어 있거든요. 이쪽 라인에 있는 모든 매장의 앞부분이 그 유리로 되어 있어요.\n여: 개성을 더하네요. 자, 카메라를 갖고 걸어 다니며 문서에 철할 사진을 좀 찍어야겠어요."
    }
];
