import { Part4Set } from '../types';

export const test7Data: Part4Set[] = [
    {
        testId: 7,
        vol: 4,
        setId: "v4-p4-t07-s01",
        contextType: "D2. 기타 뉴스 / 팟캐스트 / 안내",
        questionRange: "71-73",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-71-73.mp3",
        questions: [
            {
                id: "v4-p4-t07-q71",
                text: "What is being advertised?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "An accounting firm",
                    B: "A real estate office",
                    C: "A trucking company",
                    D: "A community college"
                },
                correctAnswer: "D",
                translation: "무엇을 광고하고 있는가?",
                translation_A: "회계 사무소",
                translation_B: "부동산 사무소",
                translation_C: "화물 운송업체",
                translation_D: "커뮤니티 칼리지"
            },
            {
                id: "v4-p4-t07-q72",
                text: "What happened last month?",
                classification: "DETAIL",
                options: {
                    A: "A Web site was launched.",
                    B: "A company merger was finalized.",
                    C: "A new location was opened.",
                    D: "A new director was hired."
                },
                correctAnswer: "C",
                translation: "지난달에 무슨 일이 있었는가?",
                translation_A: "웹사이트를 열었다.",
                translation_B: "회사 합병이 마무리됐다.",
                translation_C: "새로운 장소가 문을 열었다.",
                translation_D: "새 관리자가 고용됐다."
            },
            {
                id: "v4-p4-t07-q73",
                text: "What are the listeners invited to do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Join an online group",
                    B: "Participate in a study",
                    C: "Attend a workshop",
                    D: "Submit an application"
                },
                correctAnswer: "D",
                translation: "청자들이 권유받는 것은 무엇인가?",
                translation_A: "온라인 그룹에 가입하기",
                translation_B: "스터디 참여하기",
                translation_C: "워크숍 참석하기",
                translation_D: "지원서 제출하기"
            }
        ],
        script: "Are you interested in learning how to start your own business? Winston Community College is the place for you! Last month, we opened a new campus in Cedarview that offers lots of business courses to equip aspiring entrepreneurs with the tools to launch a new career. We offer flexible schedules so you can take courses in the evenings or on weekends. Visit us at our new campus or online to submit your application.",
        translation: "자신의 사업을 시작하는 방법을 배우고 싶으신가요? 윈스턴 커뮤니티 칼리지가 바로 여러분을 위한 곳입니다! 지난달 시더뷰에 새 캠퍼스를 열고, 예비 창업가들에게 새로운 일을 시작할 수 있는 도구를 갖출 수 있게 해주는 다양한 비즈니스 과정을 제공하고 있습니다. 유연한 일정을 제공하니 저녁이나 주말에 강의를 들을 수 있습니다. 저희 새 캠퍼스나 온라인 방문을 통해 지원서를 제출하세요."
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p4-t07-s02",
        contextType: "B3. 행사 / 연설",
        questionRange: "74-76",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-74-76.mp3",
        questions: [
            {
                id: "v4-p4-t07-q74",
                text: "What is scheduled for April 16?",
                classification: "DETAIL",
                options: {
                    A: "An awards banquet",
                    B: "A software demonstration",
                    C: "A company celebration",
                    D: "A national holiday"
                },
                correctAnswer: "C",
                translation: "4월 16일에 무엇이 예정되어 있는가?",
                translation_A: "시상식 연회",
                translation_B: "소프트웨어 시연",
                translation_C: "회사 축하 행사",
                translation_D: "국경일"
            },
            {
                id: "v4-p4-t07-q75",
                text: "What does the speaker thank Sung-Hee for doing?",
                classification: "DETAIL",
                options: {
                    A: "Presenting her research",
                    B: "Approving a budget",
                    C: "E-mailing an agenda",
                    D: "Reserving some space"
                },
                correctAnswer: "D",
                translation: "화자는 성희에게 무엇에 대해 감사하는가?",
                translation_A: "연구 발표",
                translation_B: "예산 승인",
                translation_C: "안건 이메일 송부",
                translation_D: "장소 예약"
            },
            {
                id: "v4-p4-t07-q76",
                text: "Why does the speaker say, \"Everyone has my e-mail address\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To discourage the listeners from calling his phone",
                    B: "To complain that he receives too many e-mails",
                    C: "To explain how he learned about an opportunity",
                    D: "To encourage the listeners to make suggestions"
                },
                correctAnswer: "D",
                translation: "화자가 \"모두 제 이메일 주소를 알고 있죠\"라고 말하는 의도는 무엇인가?",
                translation_A: "청자들이 그에게 전화하지 못하게 하려고",
                translation_B: "너무 많은 이메일을 받고 있다고 불평하려고",
                translation_C: "기회에 대해 어떻게 알았는지 설명하려고",
                translation_D: "청자들에게 제안하는 것을 장려하려고"
            }
        ],
        script: "Please be sure to mark your calendars for a get-together on April sixteenth. We all work on different biochemistry research projects, and it's nice to share and celebrate our progress. Sung-Hee has reserved us rooms at a conference center off-site where we'll be able to relax outdoors after our sessions. Thanks for taking care of that, Sung-Hee. A few of you have asked whether we can hold other social events throughout the year. We don't have the budget to do anything big, but I'd like to hear your ideas. Everyone has my e-mail address.",
        translation: "일정표에 4월 16일 모임을 꼭 표시해 두세요. 모두 서로 다른 생화학 업무 프로젝트를 수행하고 있으니 진행 상황을 공유하고 축하하면 좋겠습니다. 성희 씨가 컨퍼런스 센터 야외 공간을 예약했어요. 세션이 끝나고 그곳 야외에서 휴식을 취할 수 있습니다. 성희 씨, 처리해 주셔서 감사합니다. 몇몇 분들께서 일년 내내 친목 행사를 개최할 수 있는지 여부를 문의하셨어요. 큰 행사를 치를 예산은 없지만 여러분의 의견을 듣고 싶군요. 모두 제 이메일 주소를 알고 있죠."
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p4-t07-s03",
        contextType: "C2. 건강 / 여가 / 농장",
        questionRange: "77-79",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-77-79.mp3",
        questions: [
            {
                id: "v4-p4-t07-q77",
                text: "Why is the speaker calling?",
                classification: "WHY_REASON",
                options: {
                    A: "To obtain a copy of his medical records",
                    B: "To express interest in a job",
                    C: "To complain about a service",
                    D: "To request an appointment"
                },
                correctAnswer: "D",
                translation: "화자가 전화한 이유는?",
                translation_A: "진료 기록 사본을 받으려고",
                translation_B: "일자리에 대한 관심을 표하려고",
                translation_C: "서비스에 대해 항의하려고",
                translation_D: "예약을 요청하려고"
            },
            {
                id: "v4-p4-t07-q78",
                text: "What event did the speaker recently participate in?",
                classification: "DETAIL",
                options: {
                    A: "An art festival",
                    B: "An athletic competition",
                    C: "A career fair",
                    D: "A walking tour"
                },
                correctAnswer: "B",
                translation: "화자는 최근 어떤 행사에 참가했는가?",
                translation_A: "예술 축제",
                translation_B: "운동 경기",
                translation_C: "취업 박람회",
                translation_D: "도보 투어"
            },
            {
                id: "v4-p4-t07-q79",
                text: "What does the speaker say he will be doing this morning?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Picking up supplies",
                    B: "Holding interviews",
                    C: "Giving a demonstration",
                    D: "Touring a facility"
                },
                correctAnswer: "B",
                translation: "화자는 오늘 오전에 무엇을 할 것이라고 말하는가?",
                translation_A: "물품 찾으러 가기",
                translation_B: "면접 진행하기",
                translation_C: "시연하기",
                translation_D: "시설 견학하기"
            }
        ],
        script: "My name is Raul Phillips. I know it's short notice, but I'm a patient at your clinic, and I'd like to see a doctor today. I ran in a local half-marathon yesterday, and, well, I didn't feel pain at the time, but I think I sprained my ankle during the race. It's been sore since after the race, and I might need an x-ray. Could you call me back? I'll be conducting some job interviews this morning, so I may not be able to answer my phone, but please leave a message. My number is 555-0167. Thanks!",
        translation: "저는 라울 필립스입니다. 촉박한 통보라는 건 아는데요, 제가 그 병원 환자인데 오늘 진료를 받고 싶어요. 어제 지역 하프 마라톤에서 달리기를 했는데요, 음, 당시엔 통증을 느끼지 않았는데 경기 중 발목을 삐끗한 것 같아요. 경기 이후로 아파서 엑스레이를 찍어야 할 것 같습니다. 저에게 전화해 주시겠어요? 오늘 오전에 면접을 진행할 예정이라서 전화를 받지 못할 수도 있지만 메시지를 남겨 주세요. 제 번호는 555-0167입니다. 감사합니다!"
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p4-t07-s04",
        contextType: "A1. 사무실 업무",
        questionRange: "80-82",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-80-82.mp3",
        questions: [
            {
                id: "v4-p4-t07-q80",
                text: "What does the listener produce?",
                classification: "WHO_LOC",
                options: {
                    A: "Furniture",
                    B: "Electronics",
                    C: "Food",
                    D: "Vehicles"
                },
                correctAnswer: "C",
                translation: "청자는 무엇을 생산하는가?",
                translation_A: "가구",
                translation_B: "전자 제품",
                translation_C: "음식",
                translation_D: "차량"
            },
            {
                id: "v4-p4-t07-q81",
                text: "What does the speaker say he will send the listener?",
                classification: "DETAIL",
                options: {
                    A: "A contract",
                    B: "A delivery schedule",
                    C: "Some display ideas",
                    D: "Some coupons"
                },
                correctAnswer: "A",
                translation: "화자는 청자에게 무엇을 보낼 것이라고 말하는가?",
                translation_A: "계약서",
                translation_B: "배송 일정",
                translation_C: "진열 아이디어",
                translation_D: "쿠폰"
            },
            {
                id: "v4-p4-t07-q82",
                text: "What does the speaker recommend doing?",
                classification: "DETAIL",
                options: {
                    A: "Lowering a price",
                    B: "Advertising in a newspaper",
                    C: "Developing new flavors",
                    D: "Sending plenty of inventory"
                },
                correctAnswer: "D",
                translation: "화자는 무엇을 하라고 권하는가?",
                translation_A: "가격 인하하기",
                translation_B: "신문에 광고 내기",
                translation_C: "새로운 맛 개발하기",
                translation_D: "재고 많이 보내기"
            }
        ],
        script: "This is Giovanni calling from Salazar Market. We're excited about selling your breakfast cereal in our store. Our customers have been asking for your brand for several months now. I'll be e-mailing you a contract later today. You can sign it and send it back to me at your convenience. It states that we'll be displaying your cereals at the end of an aisle, on the endcap, as you requested. You'll want to make sure we have enough boxes in the store to create a nice display and keep the shelves well stocked for you.",
        translation: "살라자르 마켓의 지오반니입니다. 저희 매장에서 귀사의 아침 식사용 시리얼을 판매하게 되어 기쁩니다. 저희 고객들이 몇 달째 귀사 상품을 요청했거든요. 오늘 오후 계약서를 이메일로 보내 드리겠습니다. 편하실 때 서명하셔서 다시 보내주시면 됩니다. 요청하신 대로, 통로 끝에 있는 진열대에 시리얼을 진열하는 것으로 명시하고 있어요. 매장에 상자를 충분히 두어 진열을 멋지게 하고 선반에 물건을 잘 갖춰 두면 좋을 것 같습니다."
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p4-t07-s05",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "83-85",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-83-85.mp3",
        questions: [
            {
                id: "v4-p4-t07-q83",
                text: "What type of product has the team developed?",
                classification: "DETAIL",
                options: {
                    A: "A robot for household tasks",
                    B: "A mobile application for weather updates",
                    C: "A satellite dish for Internet access",
                    D: "A smartwatch for fitness tracking"
                },
                correctAnswer: "C",
                translation: "팀은 어떤 종류의 제품을 개발했는가?",
                translation_A: "가사일을 위한 로봇",
                translation_B: "날씨 업데이트를 위한 모바일 앱",
                translation_C: "인터넷 접속을 위한 위성 방송 수신 안테나",
                translation_D: "피트니스 추적을 위한 스마트 워치"
            },
            {
                id: "v4-p4-t07-q84",
                text: "What has caused a problem for some users?",
                classification: "WHY_REASON",
                options: {
                    A: "Limited screen options",
                    B: "A short battery life",
                    C: "A clear instructions",
                    D: "Poor weather conditions"
                },
                correctAnswer: "D",
                translation: "무엇이 일부 사용자들에게 문제를 일으켰는가?",
                translation_A: "한정된 스크린 선택지",
                translation_B: "짧은 배터리 수명",
                translation_C: "명확하지 않은 설명",
                translation_D: "좋지 않은 기상 조건"
            },
            {
                id: "v4-p4-t07-q85",
                text: "What will the listeners most likely do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Take a break",
                    B: "Work in small groups",
                    C: "Visit a production facility",
                    D: "Take some measurements"
                },
                correctAnswer: "B",
                translation: "청자들은 다음으로 무엇을 하겠는가?",
                translation_A: "휴식 취하기",
                translation_B: "소그룹으로 작업하기",
                translation_C: "생산 시설 방문하기",
                translation_D: "치수 재기"
            }
        ],
        script: "Team, let's debrief on the trial run of the DQY-5, our satellite Internet system. As you know, the DQY-5 is a small satellite dish that can be used to access the Internet in remote locations. Test users have said that it generally works very well. However, they all report service interruptions when winter storms cover the satellite dish in snow. That means we need to focus on designing an internal system that can heat up the satellite receiver and melt the snow to ensure that the connection is not disrupted. Let's break into groups of three and start brainstorming technical solutions.",
        translation: "팀 여러분, 우리 위성 인터넷 시스템인 DQY-5의 시험 가동에 대한 보고를 듣도록 하죠. 아시다시피 DQY-5는 외딴 지역에서 인터넷에 접속할 때 사용할 수 있는 소형 위성 방송 수신 안테나입니다. 시험 사용자들은 대체로 잘 작동한다고 말했습니다. 그런데 모두들 겨울철 폭풍우로 안테나가 눈에 덮일 때 서비스 중단이 일어난다고 보고했어요. 위성 수신기를 덥혀 눈을 녹여서 연결이 중단되지 않도록 하는 내부 시스템을 설계하는 데 초점을 맞춰야 한다는 뜻입니다. 세 명씩 그룹을 나눠서 기술적인 해결책에 대해 아이디어를 내 보죠."
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p4-t07-s06",
        contextType: "D2. 기타 뉴스 / 팟캐스트 / 안내",
        questionRange: "86-88",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-86-88.mp3",
        questions: [
            {
                id: "v4-p4-t07-q86",
                text: "Why does the speaker say, \"Unfortunately, some of the microphones aren't working\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To suggest purchasing new equipment",
                    B: "To recommend changing a venue",
                    C: "To ask the listeners to remain silent",
                    D: "To apologize for a delay"
                },
                correctAnswer: "D",
                translation: "화자가 \"안타깝게도 마이크 일부가 작동하지 않고 있습니다\"라고 말하는 이유는?",
                translation_A: "새 장비 구입을 제안하려고",
                translation_B: "장소 변경을 권하려고",
                translation_C: "청자들에게 정숙을 유지해 달라고 요청하려고",
                translation_D: "지연에 대해 사과하려고"
            },
            {
                id: "v4-p4-t07-q87",
                text: "What are the listeners invited to do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Upgrade their tickets",
                    B: "Become volunteers",
                    C: "Participate in a contest",
                    D: "Ask the performers some questions"
                },
                correctAnswer: "B",
                translation: "청자들이 권유받는 것은 무엇인가?",
                translation_A: "표 업그레이드하기",
                translation_B: "자원봉사하기",
                translation_C: "대회 참가하기",
                translation_D: "연주자들에게 질문하기"
            },
            {
                id: "v4-p4-t07-q88",
                text: "Where does the speaker say some information can be found?",
                classification: "DETAIL",
                options: {
                    A: "On a posted sign",
                    B: "At the box office",
                    C: "In a program booklet",
                    D: "On a Web site"
                },
                correctAnswer: "C",
                translation: "화자는 어디서 정보를 찾을 수 있다고 말하는가?",
                translation_A: "게시된 표지판",
                translation_B: "매표소",
                translation_C: "프로그램 소책자",
                translation_D: "웹사이트"
            }
        ],
        script: "Thanks for joining us for this evening's community orchestra performance. The concert was scheduled to begin at eight P.M. Unfortunately, some of the microphones aren't working. So while our sound engineers are correcting the issue, I'd like to tell you about an opportunity to help the theater. You may notice that all our ushers are volunteers, and we're always looking for more. Ushers take tickets, help patrons find their seats, and then, of course, get to enjoy the concert for free. If you're interested, be sure to check page four of your program booklet for more details.",
        translation: "오늘 저녁 지역 오케스트라 공연에 와 주셔서 감사합니다. 음악회는 오후 8시에 시작될 예정이었는데요. 안타깝게도 마이크 일부가 작동하지 않고 있습니다. 그래서 저희 음향 기술자들이 문제를 바로잡는 동안 여러분께 극장을 도울 수 있는 기회에 대해 말씀드리고자 합니다. 저희 좌석 안내원 전원이 자원봉사자라는 것을 아셨을 텐데요. 항상 더 많은 분들을 찾고 있다. 안내원은 표를 받고 고객이 좌석을 찾도록 도와드리는 일을 합니다. 그리고 물론 음악회를 무료로 즐길 수 있지요. 관심이 있으시면 저희 프로그램 소책자 4페이지에서 세부 사항을 확인해 주세요."
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p4-t07-s07",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "89-91",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-89-91.mp3",
        questions: [
            {
                id: "v4-p4-t07-q89",
                text: "What is the focus of the training?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "Using some software",
                    B: "Processing customer complaints",
                    C: "Securing sensitive documents",
                    D: "Creating advertisements"
                },
                correctAnswer: "A",
                translation: "교육은 무엇에 중점을 두는가?",
                translation_A: "소프트웨어 사용",
                translation_B: "고객 불만 처리",
                translation_C: "민감한 문서 보호",
                translation_D: "광고 제작"
            },
            {
                id: "v4-p4-t07-q90",
                text: "Where do the listeners most likely work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a conference center",
                    B: "At a factory",
                    C: "At a warehouse",
                    D: "At a department store"
                },
                correctAnswer: "A",
                translation: "청자들은 어디서 일하겠는가?",
                translation_A: "컨퍼런스 센터",
                translation_B: "공장",
                translation_C: "창고",
                translation_D: "백화점"
            },
            {
                id: "v4-p4-t07-q91",
                text: "What does the speaker ask the listeners to do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Create an account",
                    B: "Open a manual",
                    C: "Fill out a form",
                    D: "Take out an electronic device"
                },
                correctAnswer: "D",
                translation: "화자는 청자들에게 무엇을 하라고 요청하는가?",
                translation_A: "계정 만들기",
                translation_B: "설명서 펴기",
                translation_C: "서식 작성하기",
                translation_D: "전자 기기 꺼내기"
            }
        ],
        script: "I'm Natalie from Akroy Technologies, and I'm here to train everyone on using System Ace, your new project management software. Since you organize and provide a venue for professional conferences and trade shows, System Ace will allow you to create separate project folders for each event. This means that event-related to-do lists, schedules, and other documents for each folder will all be in one place. Now—the best way to learn a new program is by using it. So please, get out your tablet or laptop. We're going to try a few things together.",
        translation: "아크로이 테크놀로지의 나탈리입니다. 새 프로젝트 관리 소프트웨어인 시스템 에이스 사용에 대해 여러분을 교육해 드리러 왔습니다. 여러분은 전문가 회의와 무역 박람회 장소를 준비하고 제공하시니, 시스템 에이스가 행사별로 별도의 프로젝트 폴더를 만드실 수 있도록 해 드릴 것입니다. 이벤트 관련하여 각 폴더의 해야 할 일 목록, 일정, 기타 문서가 한곳에 있게 된다는 뜻입니다. 자, 새 프로그램을 배우는 가장 좋은 방법은 사용해 보는 것이죠. 여러분의 태블릿이나 노트북 컴퓨터를 꺼내 주세요. 다같이 몇 가지 해 볼게요."
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p4-t07-s08",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "92-94",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-92-94.mp3",
        questions: [
            {
                id: "v4-p4-t07-q92",
                text: "What is the topic of the talk?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "Customer satisfaction",
                    B: "Career development",
                    C: "Energy efficiency",
                    D: "Time management"
                },
                correctAnswer: "C",
                translation: "담화의 주제는 무엇인가?",
                translation_A: "고객 만족",
                translation_B: "경력 개발",
                translation_C: "에너지 효율성",
                translation_D: "시간 관리"
            },
            {
                id: "v4-p4-t07-q93",
                text: "Why does the speaker say, \"There's a lot of combined knowledge at this meeting\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To encourage participation",
                    B: "To indicate an agenda change",
                    C: "To stress the importance of leadership",
                    D: "To correct a misconception"
                },
                correctAnswer: "A",
                translation: "화자가 \"이 회의에는 많은 지식이 모여 있습니다\"라고 말하는 이유는?",
                translation_A: "참여를 장려하려고",
                translation_B: "안건 변경을 시사하려고",
                translation_C: "리더십의 중요성을 강조하려고",
                translation_D: "오해를 바로잡으려고"
            },
            {
                id: "v4-p4-t07-q94",
                text: "What does the speaker say will happen after the talk?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Refreshments will be served.",
                    B: "Payment will be collected.",
                    C: "A group photograph will be taken.",
                    D: "A recording will be shared."
                },
                correctAnswer: "D",
                translation: "화자는 담화 후 무슨 일이 있을 것이라고 말하는가?",
                translation_A: "다과가 제공된다.",
                translation_B: "지불할 돈을 걷는다.",
                translation_C: "단체 사진을 찍는다.",
                translation_D: "녹화본을 공유한다."
            }
        ],
        script: "In this online session, I'd like to discuss how small businesses like those represented here today can be more energy efficient. For example, some companies install solar panels to reduce their electricity costs. Now, we all have different ideas about how to conserve energy. What does your company do to reduce its carbon footprint? There's a lot of combined knowledge at this meeting. Let's take advantage of that. Please submit your questions and comments in the chat. By the way, this session is being recorded so that it's available to all participants after the session.",
        translation: "이번 온라인 시간에는 오늘 여기서 제시한 소기업들이 어떻게 에너지 효율성을 높일 수 있는지에 대해 이야기하고 싶습니다. 예를 들어 일부 회사는 전기 요금을 줄이기 위해 태양 전지판을 설치합니다. 자, 우리 모두는 에너지 보존 방법에 대해 서로 다른 생각을 갖고 있죠. 여러분의 회사는 탄소 발자국을 줄이기 위해 무엇을 하고 있나요? 이 회의에는 많은 지식이 모여 있습니다. 이걸 이용해 보죠. 여러분의 질문과 의견을 채팅으로 말해 주세요. 그런데 이번 시간은 세션이 끝난 후 모든 참가자들이 이용할 수 있도록 녹화되고 있습니다."
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p4-t07-s09",
        contextType: "A1. 사무실 업무",
        questionRange: "95-97",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-95-97.mp3",
        image: "/images/ETS_TOEIC_4/Test_07/Part_04/v4_p4_t07_q95.png",
        questions: [
            {
                id: "v4-p4-t07-q95",
                text: "Who most likely are the listeners?",
                classification: "WHO_LOC",
                options: {
                    A: "Warehouse supervisors",
                    B: "Construction workers",
                    C: "Safety inspectors",
                    D: "Truck drivers"
                },
                correctAnswer: "D",
                translation: "청자들은 누구이겠는가?",
                translation_A: "창고 관리자",
                translation_B: "건설 근로자",
                translation_C: "안전 감독관",
                translation_D: "트럭 기사"
            },
            {
                id: "v4-p4-t07-q96",
                text: "What does the speaker remind Yasushi to do?",
                classification: "DETAIL",
                options: {
                    A: "Park in a different location",
                    B: "Follow a checklist",
                    C: "Contact a customer",
                    D: "Check a schedule"
                },
                correctAnswer: "B",
                translation: "화자는 야스시에게 무엇을 하라고 상기시키는가?",
                translation_A: "다른 장소에 주차하기",
                translation_B: "점검 목록 따르기",
                translation_C: "고객에게 연락하기",
                translation_D: "일정 확인하기"
            },
            {
                id: "v4-p4-t07-q97",
                text: "Look at the graphic. Which load length is the speaker concerned about?",
                classification: "GRAPHIC",
                options: {
                    A: "10 meters",
                    B: "13 meters",
                    C: "20 meters",
                    D: "25 meters"
                },
                correctAnswer: "C",
                translation: "시각 정보에 의하면, 화자는 어떤 화물 길이에 대해 염려하는가?",
                translation_A: "10미터",
                translation_B: "13미터",
                translation_C: "20미터",
                translation_D: "25미터"
            }
        ],
        script: "Thanks for coming to this weekly briefing. As you know, Joe's Trucking Company takes safety very seriously, and I'm glad all our drivers are able to attend today. So we have five loads to deliver, including two loads of steel beams. Yasushi, you've been assigned to the car carrier, so please be sure to follow the safety checklist, especially the part about securely fastening all restraints. Junko, I'm concerned the lumber you're carrying will be considered oversize. I think the company will need to obtain a permit for you—we'll talk after the meeting.",
        translation: "이번 주간 브리핑에 와 주셔서 감사합니다. 아시다시피 조 화물 운송업체는 안전을 매우 중요하게 여기며 운전기사 전원이 오늘 참석할 수 있게 되어 기쁩니다. 강철 빔 두 개를 포함해 배송할 화물이 다섯 개 있습니다. 야스시 씨, 자동차 운반차로 배정되었으니 안전 점검 목록을 잘 따라 주세요. 특히 모든 안전 장치를 단단히 죄는 것에 대한 부분이요. 준코 씨, 운반하실 목재가 너무 크다고 여겨질까 우려됩니다. 회사에서 허가증을 받아야 할 거예요. 회의 이후 이야기할 겁니다."
    },
    {
        testId: 7,
        vol: 4,
        setId: "v4-p4-t07-s10",
        contextType: "D1. 일반 뉴스",
        questionRange: "98-100",
        audio: "/audio/ETS_TOEIC_4/Test_07/Test_07-98-100.mp3",
        image: "/images/ETS_TOEIC_4/Test_07/Part_04/v4_p4_t07_q98.png",
        questions: [
            {
                id: "v4-p4-t07-q98",
                text: "What will begin at 10 A.M. on Saturday?",
                classification: "DETAIL",
                options: {
                    A: "A holiday parade",
                    B: "A bicycle race",
                    C: "A new bus route",
                    D: "Some road construction"
                },
                correctAnswer: "A",
                translation: "토요일 오전 10시에 무엇이 시작될 것인가?",
                translation_A: "휴일 퍼레이드",
                translation_B: "자전거 경주",
                translation_C: "새 버스 노선",
                translation_D: "도로 공사"
            },
            {
                id: "v4-p4-t07-q99",
                text: "Look at the graphic. Which road will be excluded?",
                classification: "GRAPHIC",
                options: {
                    A: "Oak Street",
                    B: "Lake Drive",
                    C: "Curtis Avenue",
                    D: "Broad Street"
                },
                correctAnswer: "D",
                translation: "시각 정보에 의하면, 어떤 길이 제외될 것인가?",
                translation_A: "오크 가",
                translation_B: "레이크 길",
                translation_C: "커티스 가",
                translation_D: "브로드 가"
            },
            {
                id: "v4-p4-t07-q100",
                text: "What will the listeners hear after a commercial break?",
                classification: "DETAIL",
                options: {
                    A: "A financial report",
                    B: "A weather forecast",
                    C: "An interview with a government official",
                    D: "A live musical performance"
                },
                correctAnswer: "B",
                translation: "광고 후 어떤 일이 이어질 것인가?",
                translation_A: "재무 보고",
                translation_B: "일기 예보",
                translation_C: "정부 관계자와의 인터뷰",
                translation_D: "라이브 음악 공연"
            }
        ],
        script: "Welcome to the evening news program on WXNL Radio. In local news, the much-anticipated holiday parade will be held downtown this Saturday, beginning promptly at ten A.M. on Main Street. However, according to the city government's Web site, there's been one important change. The parade was supposed to follow a route along five city roads, but because of traffic concerns, the parade will now stop at the end of Curtis Avenue instead of continuing to the originally planned end point. Now, in case you're wondering whether we'll have sunny skies or clouds on the day of the parade, stay tuned after the commercial break for our weekend forecast.",
        translation: "WXNL 라디오 저녁 뉴스 프로그램에 오신 것을 환영합니다. 지역 소식으로, 학수고대하던 휴일 퍼레이드가 이번 주 토요일 오전 10시 정각부터 시내 메인 가에서 열립니다. 그런데 시 정부 웹사이트에 따르면 한 가지 중요한 변경 사항이 있는데요. 퍼레이드는 5개의 시 도로 노선을 따라가기로 되어 있었는데, 교통에 대한 우려 때문에 원래 계획한 도착점까지 계속 가는 대신 커티스 가 끝에서 끝날 예정입니다. 자, 퍼레이드 당일 화창할지 흐릴지 궁금하시다면 광고 후 주말 일기 예보를 전해 드릴 테니 주파수를 고정해 주세요."
    }
];
