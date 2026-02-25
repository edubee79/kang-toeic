import { Part3Set } from '../types';

export const test10Data: Part3Set[] = [
    {
        testId: 10,
        vol: 4,
        setId: "v4-p3-t10-s01",
        contextType: "A1. 사무실 업무",
        questionRange: "32-34",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-32-34.mp3",
        questions: [
            {
                id: "v4-p3-t10-q32",
                text: "What did the woman forget to do?",
                classification: "DETAIL",
                options: {
                    A: "Ask about menu choices",
                    B: "Reserve a table",
                    C: "Invite a colleague",
                    D: "Bring a parking permit"
                },
                correctAnswer: "B",
                translation: "여자는 무엇을 잊었는가?",
                translation_A: "메뉴에 대해 물어보는 것",
                translation_B: "자리를 예약하는 것",
                translation_C: "동료를 초대하는 것",
                translation_D: "주차 허가증을 가져오는 것"
            },
            {
                id: "v4-p3-t10-q33",
                text: "What does the man say about the restaurant?",
                classification: "DETAIL",
                options: {
                    A: "There are more customers than usual.",
                    B: "There is an upstairs area for parties.",
                    C: "The business hours are different today.",
                    D: "The waitstaff is new."
                },
                correctAnswer: "C",
                translation: "남자는 식당에 대해 뭐라고 말하는가?",
                translation_A: "평소보다 손님이 많다.",
                translation_B: "위층에 파티를 위한 공간이 있다.",
                translation_C: "오늘 영업시간이 다르다.",
                translation_D: "종업원들이 새로 왔다."
            },
            {
                id: "v4-p3-t10-q34",
                text: "What does the woman request?",
                classification: "DETAIL",
                options: {
                    A: "A group discount",
                    B: "A special menu item",
                    C: "To be seated in a quiet area",
                    D: "To be seated near a window"
                },
                correctAnswer: "C",
                translation: "여자는 무엇을 요청하는가?",
                translation_A: "단체 할인",
                translation_B: "특별 메뉴",
                translation_C: "조용한 구역 착석",
                translation_D: "창가 근처 착석"
            }
        ],
        script: [
            { speaker: "Man", text: "Welcome to the Firelamp Bistro. How many for dinner?" },
            { speaker: "Woman", text: "There'll be five of us, but I'm afraid I forgot to make a reservation." },
            { speaker: "Man", text: "No problem. But I should mention that we'll be closing earlier than usual this evening for a private event. If you'd like to sit outdoors on the patio while you wait, I'll send a server to get you started with drinks and appetizers. We'll get you seated as soon as possible." },
            { speaker: "Woman", text: "That sounds fine. Thank you. And if possible, we'd like to sit in a quieter part of the restaurant. We have some business to discuss." }
        ],
        translation: "남: 파이어램프 비스트로입니다. 몇 분이 저녁 식사를 하시나요?\n여: 저희 다섯 명인데요. 예약하는 걸 깜빡했어요.\n남: 괜찮습니다. 그런데 말씀드려야 할 것이, 오늘 저녁에는 개인 행사 건으로 평소보다 일찍 닫을 예정입니다. 기다리시는 동안 야외 테라스에 앉고 싶으시면 서빙 직원을 보내 음료와 애피타이저로 시작하실 수 있게 할게요. 최대한 빨리 좌석을 드리겠습니다.\n여: 좋아요. 감사합니다. 그리고 가능하다면 조용한 구역에 앉고 싶어요. 상의할 일이 있어서요."
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p3-t10-s02",
        contextType: "B3. 행사 / 연설",
        questionRange: "35-37",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-35-37.mp3",
        questions: [
            {
                id: "v4-p3-t10-q35",
                text: "What is the conversation mainly about?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "A company training initiative",
                    B: "A factory relocation plan",
                    C: "A business collaboration",
                    D: "An upcoming press conference"
                },
                correctAnswer: "C",
                translation: "대화는 주로 무엇에 관한 것인가?",
                translation_A: "회사 교육 계획",
                translation_B: "공장 이전 계획",
                translation_C: "사업 협력",
                translation_D: "다가오는 기자 회견"
            },
            {
                id: "v4-p3-t10-q36",
                text: "What does the man emphasize about some products?",
                classification: "DETAIL",
                options: {
                    A: "They have a low price point.",
                    B: "They can easily be customized.",
                    C: "They are designed to be durable.",
                    D: "They are made of recycled materials."
                },
                correctAnswer: "D",
                translation: "남자는 제품에 대해 무엇을 강조하는가?",
                translation_A: "가격대가 낮다.",
                translation_B: "쉽게 주문 제작할 수 있다.",
                translation_C: "내구성이 있도록 디자인한다.",
                translation_D: "재활용한 소재로 만든다."
            },
            {
                id: "v4-p3-t10-q37",
                text: "Why has Vedika joined the meeting?",
                classification: "WHY_REASON",
                options: {
                    A: "To discuss sales results",
                    B: "To take some photographs",
                    C: "To conduct an interview",
                    D: "To go over customer feedback"
                },
                correctAnswer: "B",
                translation: "베디카는 왜 회의에 참석했는가?",
                translation_A: "판매 결과를 논의하려고",
                translation_B: "사진을 촬영하려고",
                translation_C: "인터뷰를 하려고",
                translation_D: "고객 피드백을 검토하려고"
            }
        ],
        script: [
            { speaker: "Woman 1", text: "Hi, Suresh. Office World Incorporated is thrilled about this collaboration with your company. Your signature line of office products looks great, and we believe they'll sell quite well. We're looking forward to partnering with you." },
            { speaker: "Man", text: "Thanks. I look forward to a good working partnership as well. And I'm proud of the fact that all my products are made with recycled materials. I want to promote environmental responsibility." },
            { speaker: "Woman 1", text: "I'm impressed! Ah, and here is Vedika with her camera equipment." },
            { speaker: "Woman 2", text: "Hello—I'm here to take some promotional photos. I'd like to get some shots of you with your products, Suresh. We want to post them online." }
        ],
        translation: "여1: 안녕하세요, 슈레쉬 씨. 오피스 월드 주식회사는 귀하와의 이번 협업에 대해 매우 기쁘게 생각합니다. 귀사의 대표 사무용품이 훌륭해서 꽤 잘 팔릴 것으로 확신합니다. 귀사와 협업을 고대하고 있어요.\n남: 감사합니다. 저도 좋은 업무 협력 관계를 기대하고 있습니다. 저희 전 제품이 재활용 소재로 만들어졌다는 점이 자랑스럽습니다. 환경에 책임지는 자세를 홍보하고 싶어요.\n여1: 감명 받았어요! 아, 베디카가 카메라 장비를 가지고 왔어요.\n여2: 안녕하세요. 홍보용 사진을 찍으러 왔습니다. 제품을 들고 계신 사진을 찍고 싶어요, 슈레쉬 씨. 온라인에 게시하고자 합니다."
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p3-t10-s03",
        contextType: "B3. 행사 / 연설",
        questionRange: "38-40",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-38-40.mp3",
        questions: [
            {
                id: "v4-p3-t10-q38",
                text: "What event are the speakers discussing?",
                classification: "DETAIL",
                options: {
                    A: "An annual sales promotion",
                    B: "A company picnic",
                    C: "An office health fair",
                    D: "A charity bike race"
                },
                correctAnswer: "D",
                translation: "화자들은 어떤 행사에 대해 이야기하는가?",
                translation_A: "연례 판촉 행사",
                translation_B: "회사 야유회",
                translation_C: "직장 보건 박람회",
                translation_D: "자선 자전거 대회"
            },
            {
                id: "v4-p3-t10-q39",
                text: "What does the man suggest doing this year?",
                classification: "DETAIL",
                options: {
                    A: "Hiring a caterer",
                    B: "Donating a prize",
                    C: "Changing a location",
                    D: "Updating a logo"
                },
                correctAnswer: "B",
                translation: "남자는 올해 무엇을 하자고 제안하는가?",
                translation_A: "케이터링 업체 고용",
                translation_B: "상품 기부",
                translation_C: "장소 변경",
                translation_D: "로고 업데이트"
            },
            {
                id: "v4-p3-t10-q40",
                text: "What concern does the woman express?",
                classification: "DETAIL",
                options: {
                    A: "A proposal may be too costly.",
                    B: "An employee needs further training.",
                    C: "A guest speaker is not available.",
                    D: "A shipment has been delayed."
                },
                correctAnswer: "A",
                translation: "여자는 어떤 우려를 표하는가?",
                translation_A: "제안에 비용이 너무 많이 들 것 같다.",
                translation_B: "직원에게 교육을 더 해야 한다.",
                translation_C: "객원 연설자를 구할 수 없다.",
                translation_D: "배송이 지연됐다."
            }
        ],
        script: [
            { speaker: "Man", text: "Hi, Lirong. Thanks for meeting with me. I'd like to consider advertising strategies for our bicycle shop during the annual charity bicycle race." },
            { speaker: "Woman", text: "Well, like last year, as one of the sponsors of the event, we'll have our company name printed on the banner." },
            { speaker: "Man", text: "Great, but this year, I'd also like us to donate our top-of-the-line bicycle to the winner of the race to show how much we care about our community." },
            { speaker: "Woman", text: "That's a nice idea, but sponsoring the race is already going to be costly. I'm worried about the added expense of donating a bicycle as well." }
        ],
        translation: "남: 안녕하세요, 리롱. 만나주셔서 감사합니다. 연례 자선 자전거 대회 동안 우리 자전거 매장을 위한 광고 전략을 생각해 보고 싶어요.\n여: 글쎄요, 작년과 마찬가지로 행사 후원업체 중 한 곳으로서 우리 회사의 이름을 플래카드에 인쇄하려고 해요.\n남: 좋아요. 그런데 올해는 우리 최고급 자전거를 대회 우승자에게 기증해서 지역사회를 얼마나 생각하는지도 보여주고 싶어요.\n여: 좋은 생각이네요. 그런데 대회 후원에 이미 돈이 많이 들고 있어요. 자전거 기부 비용이 추가되는 게 걱정되네요."
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p3-t10-s04",
        contextType: "A1. 사무실 업무",
        questionRange: "41-43",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-41-43.mp3",
        questions: [
            {
                id: "v4-p3-t10-q41",
                text: "Who is the man?",
                classification: "WHO_LOC",
                options: {
                    A: "A security guard",
                    B: "A photographer",
                    C: "An engineer",
                    D: "A safety inspector"
                },
                correctAnswer: "C",
                translation: "남자는 누구인가?",
                translation_A: "보안 요원",
                translation_B: "사진작가",
                translation_C: "엔지니어",
                translation_D: "안전 감독관"
            },
            {
                id: "v4-p3-t10-q42",
                text: "What product does the company manufacture?",
                classification: "DETAIL",
                options: {
                    A: "Drones",
                    B: "Sound systems",
                    C: "Car engines",
                    D: "Vacuum cleaners"
                },
                correctAnswer: "D",
                translation: "회사는 어떤 제품을 제조하는가?",
                translation_A: "드론",
                translation_B: "음향 시스템",
                translation_C: "자동차 엔진",
                translation_D: "진공청소기"
            },
            {
                id: "v4-p3-t10-q43",
                text: "What will the woman most likely do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Report a lost badge",
                    B: "Tour a facility",
                    C: "Work on an assigned task",
                    D: "Fill out some paperwork"
                },
                correctAnswer: "C",
                translation: "여자는 다음으로 무엇을 하겠는가?",
                translation_A: "분실된 명찰에 대해 신고하기",
                translation_B: "시설 견학하기",
                translation_C: "주어진 업무에 착수하기",
                translation_D: "서류 기입하기"
            }
        ],
        script: [
            { speaker: "Man", text: "Welcome, Farida, and here's your identification badge. My name's Malik Aljohani. I'm a senior engineer, and during your first 60 days at Tilmer Tech, I'll be mentoring you throughout the new-employee onboarding process." },
            { speaker: "Woman", text: "I'm glad to be here—your company's one of the top manufacturers of robotic vacuum cleaners in the country. Since I just graduated from university, it's exciting to be applying all that theory directly to this engineering job." },
            { speaker: "Man", text: "Absolutely! And right now we're headed to your first activity for today. Like all new engineers here, you'll be tasked with taking apart and reassembling our top-selling product. It's a first step in helping you become knowledgeable about how our product functions." }
        ],
        translation: "남: 어서 오세요, 파리다. 여기 신분 확인 명찰이 있습니다. 저는 말릭 알조하니라고 해요. 수석 엔지니어이고, 틸머 테크에서 일하시는 첫 60일 동안 신입사원 온보딩 과정에서 제가 멘토링을 해 드릴 예정입니다.\n여: 이곳에 올 수 있게 되어 기뻐요. 전국 최고의 로봇 진공청소기 제조업체 중 하나잖아요. 이제 막 대학을 졸업해서, 모든 이론을 이 엔지니어링 일에 직접 적용해 볼 수 있다니 기대가 되네요.\n남: 물론이죠! 이제 오늘 첫 번째 활동을 하러 갑니다. 여기 있는 다른 신입 엔지니어들처럼 우리 최다 판매 제품을 분해하고 재조립하는 일을 하게 될 겁니다. 우리 제품이 어떻게 작동하는지 아는 데 도움이 될 첫 번째 단계예요."
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p3-t10-s05",
        contextType: "A1. 사무실 업무",
        questionRange: "44-46",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-44-46.mp3",
        questions: [
            {
                id: "v4-p3-t10-q44",
                text: "What was the man hoping to do this weekend?",
                classification: "DETAIL",
                options: {
                    A: "Go on a camping trip",
                    B: "Perform in a local band",
                    C: "Attend a sports competition",
                    D: "Volunteer at a community center"
                },
                correctAnswer: "C",
                translation: "남자는 이번 주말에 무엇을 하고 싶어 했는가?",
                translation_A: "캠핑 여행 가기",
                translation_B: "지역 밴드에서 공연하기",
                translation_C: "운동 경기에 참석하기",
                translation_D: "커뮤니티 센터에서 자원봉사하기"
            },
            {
                id: "v4-p3-t10-q45",
                text: "Why does the man need to cancel his plans?",
                classification: "WHY_REASON",
                options: {
                    A: "A client has made a request.",
                    B: "An event has been postponed.",
                    C: "A coworker is unavailable.",
                    D: "A flight was canceled."
                },
                correctAnswer: "A",
                translation: "남자는 왜 계획을 취소해야 하는가?",
                translation_A: "고객이 요청을 했다.",
                translation_B: "행사가 연기됐다.",
                translation_C: "동료가 시간이 안 된다.",
                translation_D: "항공편이 취소됐다."
            },
            {
                id: "v4-p3-t10-q46",
                text: "What does the woman offer to do?",
                classification: "DETAIL",
                options: {
                    A: "Change a reservation",
                    B: "Check some products",
                    C: "Speak to the man's supervisor",
                    D: "Give the man a ride"
                },
                correctAnswer: "B",
                translation: "여자는 무엇을 하겠다고 제안하는가?",
                translation_A: "예약 변경하기",
                translation_B: "제품 검수하기",
                translation_C: "남자의 관리자에게 이야기하기",
                translation_D: "남자를 차에 태워주기"
            }
        ],
        script: [
            { speaker: "Man", text: "Hey, Jyoti. I can't believe it. You know how I told you that I won some tickets to my favorite basketball team's championship for this weekend? Well, now I can't go." },
            { speaker: "Woman", text: "Why? What happened? You look really disappointed." },
            { speaker: "Man", text: "One of my clients has requested a rush on their order. I'll need to do a quality check on all the products so we can ship by Monday morning." },
            { speaker: "Woman", text: "Well, I'm free this weekend. Why don't I take over for you? Just let your supervisor know that I can do the quality check. You can help me out next weekend." }
        ],
        translation: "남: 안녕하세요, 죠티. 믿을 수가 없네요. 제가 가장 좋아하는 농구팀의 이번 주말 선수권 대회 입장권을 어떻게 구했는지 말했죠? 음, 갈 수가 없어요.\n여: 왜요? 무슨 일이죠? 무척 실망스러워 보여요.\n남: 고객 한 명이 주문 건을 서둘러 달라고 요청했어요. 모든 제품에 대한 품질 검사를 해서 월요일 오전에 배송할 수 있도록 해야 해요.\n여: 음, 제가 이번 주말에 시간이 있어요. 제가 일을 대신 맡으면 어때요? 관리자에게 제가 품질 확인을 할 수 있다고 알려주기만 하세요. 다음 주말에 저를 도와주시면 되잖아요."
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p3-t10-s06",
        contextType: "B3. 행사 / 연설",
        questionRange: "47-49",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-47-49.mp3",
        questions: [
            {
                id: "v4-p3-t10-q47",
                text: "What was the man asked to do in preparation for a conference?",
                classification: "DETAIL",
                options: {
                    A: "Choose a caterer",
                    B: "Book the conference rooms",
                    C: "Find a keynote speaker",
                    D: "Make travel arrangements"
                },
                correctAnswer: "C",
                translation: "남자는 학회 준비를 위해 무엇을 하라고 요청받았는가?",
                translation_A: "케이터링 업체 선정",
                translation_B: "회의실 예약",
                translation_C: "기조연설자 물색",
                translation_D: "출장 준비"
            },
            {
                id: "v4-p3-t10-q48",
                text: "Who is the conference intended for?",
                classification: "DETAIL",
                options: {
                    A: "Baseball coaches",
                    B: "Medical doctors",
                    C: "Accountants",
                    D: "Publishers"
                },
                correctAnswer: "B",
                translation: "학회는 누구를 위한 것인가?",
                translation_A: "야구 코치",
                translation_B: "의사",
                translation_C: "회계사",
                translation_D: "출판업자"
            },
            {
                id: "v4-p3-t10-q49",
                text: "What does the woman want to hand out to conference attendees?",
                classification: "DETAIL",
                options: {
                    A: "Books",
                    B: "Tote bags",
                    C: "Tickets to a sports event",
                    D: "Copies of a speech"
                },
                correctAnswer: "A",
                translation: "여자는 학회 참석자들에게 무엇을 나눠주고 싶어 하는가?",
                translation_A: "책",
                translation_B: "토트백",
                translation_C: "스포츠 행사 입장권",
                translation_D: "연설 사본"
            }
        ],
        script: [
            { speaker: "Woman", text: "I understand that you've found a good candidate to deliver the keynote speech at our conference." },
            { speaker: "Man", text: "I have. Dr. Murad Jebreen. He's a specialist in sports medicine, and he's developed new surgical techniques for athletes with knee injuries. His new book on the topic will be published later this month, actually." },
            { speaker: "Woman", text: "Oh, yes. I've heard of him. I wonder if we have enough money to give copies to everyone who comes to the conference." },
            { speaker: "Man", text: "I can check our budget." }
        ],
        translation: "여: 우리 학회에서 기조연설을 해 줄 좋은 후보자를 찾으셨다고요.\n남: 네. 무라드 제브린 박사예요. 그는 스포츠 의학 전문가이고 무릎 부상을 입은 운동선수들을 위한 새로운 수술 기법을 개발했어요. 실은 이 주제에 관한 그의 새로운 저서가 이번 달 말에 출간될 거예요.\n여: 아, 네. 얘기는 들어봤어요. 학회에 오는 모든 사람에게 책을 나눠줄 자금이 충분한지 궁금하네요.\n남: 제가 예산을 확인해 볼게요."
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p3-t10-s07",
        contextType: "A1. 사무실 업무",
        questionRange: "50-52",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-50-52.mp3",
        questions: [
            {
                id: "v4-p3-t10-q50",
                text: "Who is the woman?",
                classification: "WHO_LOC",
                options: {
                    A: "A truck driver",
                    B: "A plumber",
                    C: "A furniture maker",
                    D: "A mechanic"
                },
                correctAnswer: "C",
                translation: "여자는 누구인가?",
                translation_A: "트럭 운전기사",
                translation_B: "배관공",
                translation_C: "가구 제조업자",
                translation_D: "기계공"
            },
            {
                id: "v4-p3-t10-q51",
                text: "What does the man highlight about a work space?",
                classification: "DETAIL",
                options: {
                    A: "It has a loading dock.",
                    B: "It is close to the city center.",
                    C: "It has an assigned parking space.",
                    D: "It has fast Internet service."
                },
                correctAnswer: "A",
                translation: "남자는 작업 공간에 대해 어떤 점을 강조하는가?",
                translation_A: "하역장이 있다.",
                translation_B: "도심과 가깝다.",
                translation_C: "배정받은 주차 공간이 있다.",
                translation_D: "빠른 인터넷 서비스를 갖추고 있다."
            },
            {
                id: "v4-p3-t10-q52",
                text: "What does the man offer to do for the woman?",
                classification: "DETAIL",
                options: {
                    A: "Print out a contract",
                    B: "Activate a utility",
                    C: "Replace some lights",
                    D: "Apply a discount"
                },
                correctAnswer: "B",
                translation: "남자는 여자를 위해 무엇을 하겠다고 제안하는가?",
                translation_A: "계약서 출력하기",
                translation_B: "공공 서비스 작동시키기",
                translation_C: "조명 교체하기",
                translation_D: "할인 적용하기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Hi. I'm calling about your advertisement. I currently rent a space downtown where I build and repair furniture, but the owners just sold the building, and I have to be out by the end of the month." },
            { speaker: "Man", text: "Well, my space is quite large—enough to fit two cars or a work truck. It also has a dock in the back to load large containers, if that would be useful to you." },
            { speaker: "Woman", text: "Ideally, yes. I build large items, and a loading dock would make pickup and delivery easier." },
            { speaker: "Man", text: "Would you like to see it this afternoon? Currently, there's no electricity, but I could call and have it turned on today." }
        ],
        translation: "여: 안녕하세요. 광고 보고 전화했어요. 저는 현재 도심에 가구를 만들고 고치는 공간을 임대하고 있는데요, 소유주들이 건물을 팔아서 이번 달 말까지 나가야 하거든요.\n남: 아, 저희 공간은 꽤 넓어요. 자동차 두 대 또는 작업 트럭이 충분히 들어가요. 또한 뒤쪽에는 대형 컨테이너를 싣기 위한 하역장이 있습니다, 쓸모가 있으시다면요.\n여: 완벽하네요, 네. 저는 크기가 큰 물건도 만들거든요, 그래서 하역장이 있으면 픽업과 배송이 더 쉬워질 거예요.\n남: 오늘 오후에 보시겠어요? 현재 전기가 안 들어오는데 오늘 전화해서 들어오게 할 수 있어요."
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p3-t10-s08",
        contextType: "B3. 행사 / 연설",
        questionRange: "53-55",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-53-55.mp3",
        questions: [
            {
                id: "v4-p3-t10-q53",
                text: "What are the speakers preparing for?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "A seminar",
                    B: "A trade show",
                    C: "A client meeting",
                    D: "A book launch"
                },
                correctAnswer: "A",
                translation: "화자들은 무엇을 준비하는가?",
                translation_A: "세미나",
                translation_B: "무역 박람회",
                translation_C: "고객 회의",
                translation_D: "도서 출시"
            },
            {
                id: "v4-p3-t10-q54",
                text: "What does the man imply when he says, \"The workbook's already been printed\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "He is not sure enough copies were ordered.",
                    B: "He is expecting a delivery.",
                    C: "A change cannot be made.",
                    D: "A task was completed on schedule."
                },
                correctAnswer: "C",
                translation: "남자가 \"워크북은 이미 출력됐는데요\"라고 말하는 의도는 무엇인가?",
                translation_A: "책이 충분히 주문됐는지 잘 모르겠다.",
                translation_B: "배송을 기다리고 있다.",
                translation_C: "변경이 이뤄질 수 없다.",
                translation_D: "업무가 예정대로 완료됐다."
            },
            {
                id: "v4-p3-t10-q55",
                text: "What does the man suggest?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Contacting a presenter",
                    B: "Using a catering service",
                    C: "Adding a page to a book",
                    D: "Revising an invitation"
                },
                correctAnswer: "C",
                translation: "남자는 무엇을 제안하는가?",
                translation_A: "발표자에게 연락하기",
                translation_B: "케이터링 서비스 이용하기",
                translation_C: "책에 페이지 추가하기",
                translation_D: "초대장 수정하기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Waseem, I know this is last-minute, but is there any chance we can add another section to the workbook for tomorrow's seminar?" },
            { speaker: "Man", text: "Oh. The workbook's already been printed." },
            { speaker: "Woman", text: "I see. I just learned that the company added a new policy about working with clients that we need to include." },
            { speaker: "Man", text: "Well, why don't we just add an insert to each copy of the workbook before we pass them out? Then everyone will be informed of the change." }
        ],
        translation: "여: 와심, 막바지란 건 알지만 내일 세미나 워크북에 혹시 섹션 하나를 더 추가할 수 있을까요?\n남: 아, 워크북은 이미 출력됐는데요.\n여: 알겠어요. 회사에서 고객 응대 업무 관련 새 정책을 추가했다는 걸 이제 알았어요. 그걸 포함해야 해요.\n남: 나눠주기 전에 워크북마다 삽지를 추가하면 어때요? 그럼 모두가 변경 사항에 대해 알 수 있을 거예요."
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p3-t10-s09",
        contextType: "A1. 사무실 업무",
        questionRange: "56-58",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-56-58.mp3",
        questions: [
            {
                id: "v4-p3-t10-q56",
                text: "Who most likely is the woman?",
                classification: "WHO_LOC",
                options: {
                    A: "A career counselor",
                    B: "A sales representative",
                    C: "A factory supervisor",
                    D: "A computer programmer"
                },
                correctAnswer: "C",
                translation: "여자는 누구이겠는가?",
                translation_A: "진로 상담사",
                translation_B: "영업 담당자",
                translation_C: "공장 관리자",
                translation_D: "컴퓨터 프로그래머"
            },
            {
                id: "v4-p3-t10-q57",
                text: "Why does the woman say, \"we've had a lot of requests for that lately\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To express doubt about a possibility",
                    B: "To request assistance with a task",
                    C: "To explain a delay",
                    D: "To compliment a colleague"
                },
                correctAnswer: "A",
                translation: "여자가 \"최근 그 요청을 많이 받았어요\"라고 말하는 이유는?",
                translation_A: "가능성에 대해 의구심을 표하려고",
                translation_B: "업무에 대해 도움을 요청하려고",
                translation_C: "지연에 대해 설명하려고",
                translation_D: "동료를 칭찬하려고"
            },
            {
                id: "v4-p3-t10-q58",
                text: "What does the woman say she will do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Attend a meeting",
                    B: "Check a schedule",
                    C: "Take inventory",
                    D: "Hire more employees"
                },
                correctAnswer: "B",
                translation: "여자는 무엇을 하겠다고 말하는가?",
                translation_A: "회의 참석하기",
                translation_B: "시간표 확인하기",
                translation_C: "재고 조사하기",
                translation_D: "더 많은 직원 고용하기"
            }
        ],
        script: [
            { speaker: "Man", text: "Hi, Astrid. Thank you for meeting with me." },
            { speaker: "Woman", text: "Of course. I have an open-door policy for all my employees here at the factory." },
            { speaker: "Man", text: "So, I'd like to talk about changing my work schedule to the day shift." },
            { speaker: "Woman", text: "Well, we've had a lot of requests for that lately." },
            { speaker: "Man", text: "I see. But remember, I've been working the night shift for over ten years." },
            { speaker: "Woman", text: "That's true. Let me look into it. I'll check the schedule and see what I can do. No promises though." }
        ],
        translation: "남: 안녕하세요, 아스트리드. 만나주셔서 감사합니다.\n여: 물론 그래야죠. 저는 이곳 공장에 있는 모든 제 직원들에게는 항상 소통을 위한 문을 열어 놓자는 주의예요.\n남: 저, 제 업무 시간을 주간 근무로 바꾸는 것에 대해 말씀드리고 싶어요.\n여: 음, 최근 그 요청을 많이 받았어요.\n남: 알겠습니다. 그런데 제가 10년 넘게 야간 근무로 일했다는 걸 기억해 주세요.\n여: 맞아요. 한번 보죠. 시간표를 확인해서 제가 무엇을 할 수 있을지 볼게요. 약속을 드리지는 못합니다."
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p3-t10-s10",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "59-61",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-59-61.mp3",
        questions: [
            {
                id: "v4-p3-t10-q59",
                text: "What news does the woman share?",
                classification: "DETAIL",
                options: {
                    A: "A colleague will be late to work.",
                    B: "An item cannot be found.",
                    C: "A form has a mistake in it.",
                    D: "An order has been canceled."
                },
                correctAnswer: "A",
                translation: "여자는 어떤 소식을 공유하는가?",
                translation_A: "동료가 지각할 것이다.",
                translation_B: "물품을 찾을 수 없다.",
                translation_C: "서식에 실수가 있다.",
                translation_D: "주문이 취소됐다."
            },
            {
                id: "v4-p3-t10-q60",
                text: "Who are the men?",
                classification: "WHO_LOC",
                options: {
                    A: "Auto mechanics",
                    B: "Factory workers",
                    C: "Boat captains",
                    D: "Tour guides"
                },
                correctAnswer: "D",
                translation: "남자들은 누구인가?",
                translation_A: "자동차 정비공",
                translation_B: "공장 근로자",
                translation_C: "선장",
                translation_D: "투어 가이드"
            },
            {
                id: "v4-p3-t10-q61",
                text: "Why is Rajeev nervous?",
                classification: "WHY_REASON",
                options: {
                    A: "He made a mistake on his paperwork.",
                    B: "He recently asked for a salary increase.",
                    C: "He cannot reach someone by mobile phone.",
                    D: "He has not completed his training yet."
                },
                correctAnswer: "D",
                translation: "라지브는 왜 긴장하는가?",
                translation_A: "서류 작업에서 실수를 했다.",
                translation_B: "최근 급여 인상을 요구했다.",
                translation_C: "휴대전화로 누군가에게 연락을 할 수 없다.",
                translation_D: "아직 교육을 마치지 않았다."
            }
        ],
        script: [
            { speaker: "Woman", text: "I have bad news. Ife just sent me a text message. Her car won't start. The battery seems to be dead. She won't be here in time to lead her tour group." },
            { speaker: "Man 1", text: "Oh no. Well, I'm leading a tour of the seaport this morning." },
            { speaker: "Woman", text: "Rajeev, you're available. I know you're technically still in training, but I think you can handle it." },
            { speaker: "Man 2", text: "Hmm. The historic warehouse district, right? I'm a little nervous about that." },
            { speaker: "Man 1", text: "You did a great job when you shadowed me on that tour last week. You even answered questions from the group." }
        ],
        translation: "여: 안 좋은 소식이 있어요. 이페가 문자 메시지를 보냈는데요. 차가 시동이 안 걸린대요. 배터리가 나간 것 같아요. 제시간에 와서 투어 단체를 인솔하지 못할 것 같아요.\n남1: 저런. 저는 오늘 오전에 항구 도시 투어를 인솔해요.\n여: 라지브, 시간이 되시네요. 엄밀히 말하면 아직 교육 중이지만 처리하실 수 있을 것 같아요.\n남2: 음... 역사적인 창고 지역 맞죠? 좀 긴장되네요.\n남1: 지난주 그 투어를 저와 함께 했을 때 잘하셨어요. 단체에서 나온 질문에 대답도 하셨잖아요."
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p3-t10-s11",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "62-64",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-62-64.mp3",
        questions: [
            {
                id: "v4-p3-t10-q62",
                text: "Where has the woman just come from?",
                classification: "DETAIL",
                options: {
                    A: "A manager's office",
                    B: "A police station",
                    C: "A rental facility",
                    D: "An equipment storage area"
                },
                correctAnswer: "A",
                translation: "여자는 어디서 오는 길인가?",
                translation_A: "관리자 사무실",
                translation_B: "경찰서",
                translation_C: "임대 시설",
                translation_D: "장비 보관 구역"
            },
            {
                id: "v4-p3-t10-q63",
                text: "Look at the graphic. Which lane will stay open today?",
                classification: "GRAPHIC",
                options: {
                    A: "Lane 1",
                    B: "Lane 2",
                    C: "Lane 3",
                    D: "Lane 4"
                },
                correctAnswer: "B",
                image: "/images/ETS_TOEIC_4/Test_10/Part_03/v4_p3_t10_q62.png",
                translation: "시각 정보에 의하면, 오늘 어떤 차선이 그대로 열려 있는가?",
                translation_A: "1번 차선",
                translation_B: "2번 차선",
                translation_C: "3번 차선",
                translation_D: "4번 차선"
            },
            {
                id: "v4-p3-t10-q64",
                text: "What does the woman say she will ask for?",
                classification: "DETAIL",
                options: {
                    A: "A pay raise",
                    B: "Extra supplies",
                    C: "More personnel",
                    D: "A safety barricade"
                },
                correctAnswer: "C",
                translation: "여자는 무엇을 요청하겠다고 말하는가?",
                translation_A: "임금 인상",
                translation_B: "추가 물품",
                translation_C: "추가 인원",
                translation_D: "안전 방어벽"
            }
        ],
        script: [
            { speaker: "Man", text: "We need to check with the project manager about today's construction schedule." },
            { speaker: "Woman", text: "I already did—I just came from his office. He said we're going to close off multiple lanes to create a safe work zone." },
            { speaker: "Man", text: "Got it. Which ones are we closing?" },
            { speaker: "Woman", text: "All of them except for the passing lane." },
            { speaker: "Man", text: "Wow, this closure is really going to affect the morning commute." },
            { speaker: "Woman", text: "You're right. I'm going to ask for extra personnel to help manage the traffic volume." }
        ],
        translation: "남: 오늘 공사 일정에 대해 프로젝트 관리자와 확인해야 해요.\n여: 이미 했어요. 그의 사무실에서 오는 길이에요. 안전 작업 구역을 만들기 위해 우리가 차선 여러 개를 폐쇄할 거라고 하던데요.\n남: 알겠어요. 어떤 차선들을 폐쇄하나요?\n여: 추월 차선만 빼고 전부요.\n남: 와! 이번 폐쇄로 아침 출근길에 영향을 크게 주겠군요.\n여: 맞아요. 교통량을 관리하는 데 도움을 줄 추가 인원을 요청할 거예요."
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p3-t10-s12",
        contextType: "B3. 행사 / 연설",
        questionRange: "65-67",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-65-67.mp3",
        questions: [
            {
                id: "v4-p3-t10-q65",
                text: "What does the woman suggest about an event location?",
                classification: "DETAIL",
                options: {
                    A: "It should be outdoors.",
                    B: "It should be inexpensive.",
                    C: "It should be local.",
                    D: "It should offer lunch."
                },
                correctAnswer: "A",
                translation: "여자는 행사 장소에 대해 뭐라고 제안하는가?",
                translation_A: "야외여야 한다.",
                translation_B: "비싸지 않아야 한다.",
                translation_C: "지역 내에 있어야 한다.",
                translation_D: "점심 식사를 제공해야 한다."
            },
            {
                id: "v4-p3-t10-q66",
                text: "Look at the graphic. Which fruit will be picked during the event?",
                classification: "GRAPHIC",
                options: {
                    A: "Strawberries",
                    B: "Black cherries",
                    C: "Blueberries",
                    D: "Green apples"
                },
                correctAnswer: "B",
                image: "/images/ETS_TOEIC_4/Test_10/Part_03/v4_p3_t10_q65.png",
                translation: "시각 정보에 의하면, 행사 중 어떤 과일을 딸 것인가?",
                translation_A: "딸기",
                translation_B: "블랙 체리",
                translation_C: "블루베리",
                translation_D: "풋사과"
            },
            {
                id: "v4-p3-t10-q67",
                text: "What does the woman say she will do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Contact a business",
                    B: "Draft an invitation",
                    C: "Recruit some volunteers",
                    D: "Prepare a budget"
                },
                correctAnswer: "A",
                translation: "여자는 무엇을 하겠다고 말하는가?",
                translation_A: "업체에 연락하기",
                translation_B: "초대장 초안 작성하기",
                translation_C: "자원봉사자 모집하기",
                translation_D: "예산 준비하기"
            }
        ],
        script: [
            { speaker: "Man", text: "Let's start planning the annual employee retreat." },
            { speaker: "Woman", text: "Yes. I think we should hold it outside. We're at our desks all day, so it would be really great to spend some time in the sun." },
            { speaker: "Man", text: "I agree. There's a place, Oliver's Orchard, that lets you pick your own fruit. We could have the event there." },
            { speaker: "Woman", text: "Great idea. The retreat's in June. Is it open then?" },
            { speaker: "Man", text: "According to the Web site, they are." },
            { speaker: "Woman", text: "Perfect. I'll call the orchard to make a reservation for our group." }
        ],
        translation: "남: 연례 직원 야유회를 계획해 봅시다.\n여: 네. 야외에서 해야 한다고 생각해요. 하루 종일 책상 앞에 있으니 햇빛 아래 시간을 보내는 게 정말 좋을 것 같아요.\n남: 맞아요. 올리버 오차드라는 장소가 있는데 각자 과일을 딸 수 있어요. 거기서 행사를 할 수 있겠네요.\n여: 좋은 생각이네요. 야유회는 6월이죠. 그때 문을 여나요?\n남: 웹사이트에 따르면 열어요.\n여: 좋아요. 제가 과수원에 전화해서 단체 예약을 할게요."
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p3-t10-s13",
        contextType: "C1. 일상 (물건 구매 등)",
        questionRange: "68-70",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-68-70.mp3",
        questions: [
            {
                id: "v4-p3-t10-q68",
                text: "Who most likely is the woman?",
                classification: "WHO_LOC",
                options: {
                    A: "A landscape worker",
                    B: "A taxi driver",
                    C: "An apartment manager",
                    D: "An interior decorator"
                },
                correctAnswer: "C",
                translation: "여자는 누구이겠는가?",
                translation_A: "조경 인부",
                translation_B: "택시 기사",
                translation_C: "아파트 관리인",
                translation_D: "실내 장식가"
            },
            {
                id: "v4-p3-t10-q69",
                text: "Look at the graphic. Which location is the woman referring to?",
                classification: "GRAPHIC",
                options: {
                    A: "101",
                    B: "102",
                    C: "103",
                    D: "104"
                },
                correctAnswer: "D",
                image: "/images/ETS_TOEIC_4/Test_10/Part_03/v4_p3_t10_q68.png",
                translation: "시각 정보에 의하면, 여자는 어떤 장소를 언급하고 있는가?",
                translation_A: "101",
                translation_B: "102",
                translation_C: "103",
                translation_D: "104"
            },
            {
                id: "v4-p3-t10-q70",
                text: "What might the man pay extra for?",
                classification: "DETAIL",
                options: {
                    A: "A pool membership",
                    B: "A reserved parking space",
                    C: "Monthly maintenance",
                    D: "Laundry facilities"
                },
                correctAnswer: "B",
                translation: "남자는 무엇을 위해 추가 지불을 할 수 있는가?",
                translation_A: "수영장 회원권",
                translation_B: "지정 주차 공간",
                translation_C: "월 유지보수",
                translation_D: "세탁 시설"
            }
        ],
        script: [
            { speaker: "Man", text: "Hi. I'm looking for an apartment, and I saw your advertisement. Do you have any two-bedroom apartments available in May?" },
            { speaker: "Woman", text: "Yes. In fact, we've just finished construction on a new complex." },
            { speaker: "Man", text: "Does the complex have a lot of outdoor space? I'd like to have an area to entertain guests outside." },
            { speaker: "Woman", text: "Yes, there's plenty of green space. The building in the back corner, farthest from the office, has the most space and a lot of shade." },
            { speaker: "Man", text: "I'd be interested in that." },
            { speaker: "Woman", text: "And for an extra 80 dollars per month, you can get a reserved parking space right in front of your unit." }
        ],
        translation: "남: 안녕하세요. 아파트를 찾고 있다가 광고를 봤어요. 5월에 이용 가능한 침실 2개 아파트가 있나요?\n여: 네. 사실 새로운 단지 공사가 막 끝났다.\n남: 단지에 실외 공간이 많이 있나요? 바깥에서 손님 접대를 할 공간이 있었으면 해요.\n여: 네, 녹지가 많아요. 사무실에서 가장 먼 뒤쪽 모퉁이 건물은 공간이 가장 넓고 그늘이 많습니다.\n남: 그곳에 관심이 가네요.\n여: 월 80달러를 추가로 내시면 해당 세대 바로 앞에 지정 주차 공간을 받으실 수 있어요."
    }
];
