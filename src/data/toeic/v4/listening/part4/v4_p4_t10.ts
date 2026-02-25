import { Part4Set } from '../types';

export const test10Data: Part4Set[] = [
    {
        testId: 10,
        vol: 4,
        setId: "v4-p4-t10-s01",
        contextType: "B1. 조립 라인 / 공장", // Actually it's more like B2. 프로젝트/업무 진행 but in a kitchen. Let's use A1 based on the surroundings if it's office-like? No, it's a kitchen.
        questionRange: "71-73",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-71-73.mp3",
        questions: [
            {
                id: "v4-p4-t10-q71",
                text: "What is the purpose of a meeting?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "To prepare staff for a special event",
                    B: "To review some closing procedures",
                    C: "To introduce some staff members",
                    D: "To resolve an issue with inventory"
                },
                correctAnswer: "B",
                translation: "회의의 목적은 무엇인가?",
                translation_A: "특별 행사를 위해 직원들 준비시키기",
                translation_B: "마감 절차 검토하기",
                translation_C: "직원들 소개하기",
                translation_D: "재고 관련 문제 해결하기"
            },
            {
                id: "v4-p4-t10-q72",
                text: "What type of business do the listeners most likely work for?",
                classification: "WHO_LOC",
                options: {
                    A: "A restaurant",
                    B: "A library",
                    C: "An appliance store",
                    D: "A manufacturing facility"
                },
                correctAnswer: "A",
                translation: "청자들은 어떤 종류의 업체에서 일하겠는가?",
                translation_A: "식당",
                translation_B: "도서관",
                translation_C: "가전제품 매장",
                translation_D: "제조 시설"
            },
            {
                id: "v4-p4-t10-q73",
                text: "What does the speaker say he will do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Sign a contract",
                    B: "Mail an invoice",
                    C: "Edit a document",
                    D: "Change a schedule"
                },
                correctAnswer: "C",
                translation: "화자는 무엇을 하겠다고 말하는가?",
                translation_A: "계약서에 서명하기",
                translation_B: "청구서 발송하기",
                translation_C: "문서 수정하기",
                translation_D: "일정 변경하기"
            }
        ],
        script: "Some of you have been accidentally skipping some of your closing duties, so I've called this meeting to clarify what is expected. After you've sanitized all the food preparation areas in the kitchen, make sure the pantry and walk-in refrigerator doors are shut and locked. There are a few other tasks to complete before you leave. I know the current checklist isn't up-to-date, so I'll make the necessary revisions to it.",
        translation: "몇몇 분들이 실수로 마감 업무를 빠뜨렸어요. 그래서 해야 할 일을 명확히 하기 위해 이 회의를 소집했습니다. 주방의 음식 준비 구역을 모두 소독한 후에는 식료품 저장실과 대형 냉장실 문을 반드시 닫고 잠가야 합니다. 퇴근하기 전에 완료해야 할 몇 가지 다른 작업들이 있습니다. 현재 점검 목록은 최신 정보가 아니니 필요한 수정을 해 두겠습니다."
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p4-t10-s02",
        contextType: "A1. 사무실 업무",
        questionRange: "74-76",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-74-76.mp3",
        questions: [
            {
                id: "v4-p4-t10-q74",
                text: "What topic did the listener write an article about?",
                classification: "DETAIL",
                options: {
                    A: "Forest conservation",
                    B: "Travel recommendations",
                    C: "Bird-watching",
                    D: "Social media usage"
                },
                correctAnswer: "A",
                translation: "청자는 어떤 주제에 대해 기사를 썼는가?",
                translation_A: "숲 보호",
                translation_B: "여행 추천",
                translation_C: "들새 관찰",
                translation_D: "소셜 미디어 이용"
            },
            {
                id: "v4-p4-t10-q75",
                text: "What does the speaker like about the article?",
                classification: "DETAIL",
                options: {
                    A: "The descriptions",
                    B: "The photographs",
                    C: "The organization",
                    D: "The use of statistics"
                },
                correctAnswer: "A",
                translation: "화자는 기사의 어떤 점을 마음에 들어 하는가?",
                translation_A: "설명",
                translation_B: "사진",
                translation_C: "구성",
                translation_D: "통계 이용"
            },
            {
                id: "v4-p4-t10-q76",
                text: "Who does the speaker want the listener to interview?",
                classification: "DETAIL",
                options: {
                    A: "Restaurant chefs",
                    B: "Park rangers",
                    C: "Biologists",
                    D: "Government officials"
                },
                correctAnswer: "D",
                translation: "화자는 청자가 누구를 인터뷰하기를 바라는가?",
                translation_A: "식당 요리사",
                translation_B: "공원 관리인",
                translation_C: "생물학자",
                translation_D: "공무원"
            }
        ],
        script: "Hi, Melissa. It's Hiroki from Ecology Now Magazine. I just read your article about protecting old-growth forests in Europe and how important these conservation efforts are to the local communities. First of all, I loved your descriptions of the mushroom-hunting social groups. Readers will feel like they're there! However, your article mainly presents the views of people who use the forests for recreation. We need to hear from the lawmakers responsible for the new regulations impacting land use. And be sure to include some photos. Aside from that, great job. Call me back if you want more guidance.",
        translation: "안녕하세요, 멜리사. <에콜로지 나우 매거진>의 히로키입니다. 유럽의 오래된 숲을 보호하는 것과 이러한 보존 노력이 지역사회에 얼마나 중요한지에 관해 쓰신 기사를 막 읽었어요. 무엇보다 버섯 채취 동아리에 대한 설명이 아주 좋았습니다. 독자들은 그곳에 있는 것처럼 느낄 거예요! 그런데 기사가 휴양을 위해 숲을 이용하는 사람들의 견해를 주로 보여주고 있더군요. 토지 사용에 영향을 미칠 새 규정을 책임지는 입법가들의 이야기를 들어봐야 합니다. 그리고 사진도 넣어 주세요. 그것 외에는 훌륭해요. 지침이 더 필요하시면 전화 주세요."
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p4-t10-s03",
        contextType: "B3. 행사 / 연설",
        questionRange: "77-79",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-77-79.mp3",
        questions: [
            {
                id: "v4-p4-t10-q77",
                text: "What does the speaker imply when she says, \"we have a lot of speakers on the schedule\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "The listeners should check the schedule.",
                    B: "An advertisement was popular.",
                    C: "An event will begin right away.",
                    D: "More refreshments will be needed."
                },
                correctAnswer: "C",
                translation: "화자가 \"예정되어 있는 연설자가 많습니다\"라고 말하는 의도는 무엇인가?",
                translation_A: "청자들이 일정을 확인해야 한다.",
                translation_B: "광고가 인기 있었다.",
                translation_C: "행사가 바로 시작될 것이다.",
                translation_D: "다과가 더 필요할 것이다."
            },
            {
                id: "v4-p4-t10-q78",
                text: "What industry does Dr. Adachi most likely work in?",
                classification: "WHO_LOC",
                options: {
                    A: "Filmmaking",
                    B: "Interior design",
                    C: "Construction",
                    D: "Computer science"
                },
                correctAnswer: "D",
                translation: "아다치 박사는 어떤 업계에서 일하겠는가?",
                translation_A: "영화 제작",
                translation_B: "실내 디자인",
                translation_C: "건설",
                translation_D: "컴퓨터 과학"
            },
            {
                id: "v4-p4-t10-q79",
                text: "What does the speaker encourage the listeners to do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Complete a survey",
                    B: "Ask questions",
                    C: "Introduce themselves",
                    D: "Work in small groups"
                },
                correctAnswer: "B",
                translation: "화자는 청자들에게 무엇을 하라고 권하는가?",
                translation_A: "설문 작성하기",
                translation_B: "질문하기",
                translation_C: "자기소개하기",
                translation_D: "소그룹으로 작업하기"
            }
        ],
        script: "Welcome, everyone, to this workshop on artificial intelligence technologies. Though I know everyone's been enjoying the coffee and conversation, we have a lot of speakers on the schedule. To start things off, we're delighted to invite Dr. Haruka Adachi to the stage. She'll demonstrate some ways computer systems can simulate human intelligence. Even if you're not a computer programmer, I'm sure you'll find this demonstration easy to follow. Please feel free to raise your hand to ask questions at any time. We want these sessions to be interactive.",
        translation: "인공 지능 기술 워크숍에 오신 여러분을 환영합니다. 모두 커피와 대화를 즐기고 계시는 걸 알지만 예정되어 있는 연설자가 많습니다. 시작하기 위해 하루카 아다치 박사님을 무대로 모시겠습니다. 박사님께서 컴퓨터 시스템이 인간 지능을 모방하는 몇 가지 방법을 보여주실 겁니다. 컴퓨터 프로그래머가 아니더라도 이 시연은 쉽게 이해하실 수 있을 겁니다. 언제든 자유롭게 손을 들고 질문해 주세요. 강좌에 상호 작용이 있었으면 합니다."
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p4-t10-s04",
        contextType: "D2. 기타 뉴스 / 팟캐스트 / 안내",
        questionRange: "80-82",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-80-82.mp3",
        questions: [
            {
                id: "v4-p4-t10-q80",
                text: "What type of event is most likely taking place?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "A trade show",
                    B: "A museum exhibit",
                    C: "A food festival",
                    D: "A gardening workshop"
                },
                correctAnswer: "A",
                translation: "어떤 종류의 행사가 열리고 있겠는가?",
                translation_A: "무역 박람회",
                translation_B: "박물관 전시회",
                translation_C: "음식 축제",
                translation_D: "정원 가꾸기 워크숍"
            },
            {
                id: "v4-p4-t10-q81",
                text: "What are exhibitors asked to do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Wear identification badges",
                    B: "Distribute samples",
                    C: "Obtain parking passes",
                    D: "Arrive at a location early"
                },
                correctAnswer: "D",
                translation: "전시업체들은 무엇을 하라고 요청받는가?",
                translation_A: "신분 확인 명찰 착용하기",
                translation_B: "견본 배포하기",
                translation_C: "주차권 받기",
                translation_D: "장소에 일찍 도착하기"
            },
            {
                id: "v4-p4-t10-q82",
                text: "What does the speaker say attendees can do with their tickets?",
                classification: "DETAIL",
                options: {
                    A: "Receive a discount",
                    B: "Enter a contest",
                    C: "Access a special area",
                    D: "Purchase refreshments"
                },
                correctAnswer: "B",
                translation: "화자는 참석자들이 입장권으로 무엇을 할 수 있다고 말하는가?",
                translation_A: "할인 받기",
                translation_B: "경합에 참가하기",
                translation_C: "특별 구역 입장하기",
                translation_D: "다과 구입하기"
            }
        ],
        script: "Attention, everyone: the home bathroom showcase will begin in an hour in Hall D. The showcase will feature the latest designs for showers and bathtubs, as well as a variety of materials for home customization. Exhibitors, please be at your designated booth at least 30 minutes before the showcase opens to the public. If you need assistance, any staff member can direct you to your booth. Attendees, don't forget to bring your tickets to the showcase. We will be running a raffle with a chance to win a new bathtub. You'll need your ticket to participate.",
        translation: "여러분께 알립니다. 주택 욕실 쇼케이스가 한 시간 뒤 D홀에서 시작됩니다. 쇼케이스에서는 샤워기와 욕조의 최신 디자인뿐 아니라 맞춤 제작을 위한 다양한 자재를 선보입니다. 전시업체 여러분, 행사가 대중에게 공개되기 최소 30분 전까지 지정된 부스에서 대기해 줄 것을 요청합니다. 도움이 필요하실 경우, 직원이 여러분의 부스로 안내해 드릴 수 있습니다. 참석자 여러분, 쇼케이스 입장권을 잊지 말고 가져오세요. 추첨을 통해 새 욕조를 얻을 수 있는 기회를 드립니다. 참가하시려면 입장권이 필요합니다."
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p4-t10-s05",
        contextType: "A1. 사무실 업무",
        questionRange: "83-85",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-83-85.mp3",
        questions: [
            {
                id: "v4-p4-t10-q83",
                text: "What industry does the speaker most likely work in?",
                classification: "WHO_LOC",
                options: {
                    A: "Hospitality",
                    B: "Finance",
                    C: "Advertising",
                    D: "Technology"
                },
                correctAnswer: "C",
                translation: "화자는 어떤 업계에서 일하겠는가?",
                translation_A: "접객 서비스",
                translation_B: "금융",
                translation_C: "광고",
                translation_D: "기술"
            },
            {
                id: "v4-p4-t10-q84",
                text: "What does the speaker mean when she says, \"this is your first account\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "She is impressed by some work.",
                    B: "She is available to answer questions.",
                    C: "A mistake is understandable.",
                    D: "A process will take a long time."
                },
                correctAnswer: "A",
                translation: "화자가 \"당신의 첫 번째 고객이잖아요\"라고 말하는 의도는 무엇인가?",
                translation_A: "업무에 좋은 인상을 받았다.",
                translation_B: "질문에 답할 수 있다.",
                translation_C: "실수가 당연하다.",
                translation_D: "절차에 시간이 오래 걸릴 것이다."
            },
            {
                id: "v4-p4-t10-q85",
                text: "What does the speaker ask the listener to send?",
                classification: "ACTION_NEXT",
                options: {
                    A: "A timeline",
                    B: "An address",
                    C: "Some sales figures",
                    D: "Some meeting notes"
                },
                correctAnswer: "A",
                translation: "화자는 청자에게 무엇을 보내 달라고 요청하는가?",
                translation_A: "일정표",
                translation_B: "주소",
                translation_C: "매출액",
                translation_D: "회의 메모"
            }
        ],
        script: "Hi, Andrew. I'm calling about the Dearborn Hotel account—the clients that we're producing the television commercial for. I just heard from them, and they said they've been very satisfied with how you're addressing their needs for the project. It's always great to get such positive feedback from our clients, and this is your first account. They also mentioned that they'd like to make some adjustments to the project timeline. Could you e-mail me the most recent copy of it? Thanks!",
        translation: "안녕하세요, 앤드류. 디어본 호텔 건 관련해서 전화했어요. 우리가 TV 광고를 만들어 주는 고객이에요. 방금 그들한테 들었는데 당신이 그들의 프로젝트 요구 사항을 해결하는 방식에 굉장히 만족했다고 하네요. 고객으로부터 그런 긍정적인 피드백을 받는 건 항상 멋진 일이에요. 게다가 당신의 첫 번째 고객이잖아요. 또한 프로젝트 일정표를 조정했으면 한다고도 언급했어요. 제게 가장 최근 것으로 이메일을 보내주실 수 있을까요? 감사합니다!"
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p4-t10-s06",
        contextType: "C2. 건강 / 여가 / 농장",
        questionRange: "86-88",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-86-88.mp3",
        questions: [
            {
                id: "v4-p4-t10-q86",
                text: "Where do the listeners most likely work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a public park",
                    B: "At a landscaping company",
                    C: "At a farm",
                    D: "At a supermarket"
                },
                correctAnswer: "C",
                translation: "청자들이 어디서 일하겠는가?",
                translation_A: "공원",
                translation_B: "조경업체",
                translation_C: "농장",
                translation_D: "슈퍼마켓"
            },
            {
                id: "v4-p4-t10-q87",
                text: "What is the speaker mainly discussing?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "Purchasing some tools",
                    B: "Training cleaning staff",
                    C: "Repairing some equipment",
                    D: "Arranging transportation"
                },
                correctAnswer: "C",
                translation: "화자는 주로 무엇에 대해 이야기하는가?",
                translation_A: "연장 구매",
                translation_B: "청소 직원 교육",
                translation_C: "장비 수리",
                translation_D: "교통편 마련"
            },
            {
                id: "v4-p4-t10-q88",
                text: "What solution does the speaker suggest?",
                classification: "DETAIL",
                options: {
                    A: "Contacting a manufacturer",
                    B: "Decreasing a budget",
                    C: "Renting some tents",
                    D: "Extending hours of operation"
                },
                correctAnswer: "A",
                translation: "화자는 어떤 해결책을 제안하는가?",
                translation_A: "제조업체에 연락하기",
                translation_B: "예산 줄이기",
                translation_C: "텐트 임대하기",
                translation_D: "영업시간 늘리기"
            }
        ],
        script: "Hi, everyone. As farm employees, we have all come across various issues with our equipment. Today I'm going to talk about what to do when you find liquid leaking from any of our farm equipment. Our mowers and tractors mainly use fluids like water, or oil to control steering. When you find fluid leaking from a broken tube or valve, don't try to fix it yourself. Please let me know, and I'll contact the manufacturer for a replacement part. Otherwise, the warranty will be voided.",
        translation: "안녕하세요, 여러분. 우리 모두는 농장 직원으로서 장비와 관련된 다양한 문제를 마주치게 됩니다. 오늘 저는 여러분이 농장 장비에서 액체가 새는 것을 발견했을 때 어떻게 해야 하는지에 대해 이야기할 겁니다. 잔디 깎는 기계와 트랙터는 조종 장치 제어를 위해 주로 물이나 기름 같은 액체를 쓰는데요. 고장 난 튜브나 밸브에서 액체가 새는 것을 발견했을 때 스스로 수리하려고 하지 마십시오. 저에게 알려 주시면 제가 제조업체에 연락해서 교체 부품을 구해오겠습니다. 그렇지 않으면 품질 보증서가 무효화됩니다."
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p4-t10-s07",
        contextType: "B3. 행사 / 연설",
        questionRange: "89-91",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-89-91.mp3",
        questions: [
            {
                id: "v4-p4-t10-q89",
                text: "Who is Johann Weber?",
                classification: "DETAIL",
                options: {
                    A: "A musician",
                    B: "A librarian",
                    C: "A painter",
                    D: "A journalist"
                },
                correctAnswer: "C",
                translation: "요한 웨버는 누구인가?",
                translation_A: "음악가",
                translation_B: "사서",
                translation_C: "화가",
                translation_D: "기자"
            },
            {
                id: "v4-p4-t10-q90",
                text: "What will take place momentarily?",
                classification: "DETAIL",
                options: {
                    A: "A director will give a talk.",
                    B: "A facility tour will begin.",
                    C: "A group photo will be taken.",
                    D: "A meal will be served."
                },
                correctAnswer: "A",
                translation: "곧 어떤 일이 있을 것인가?",
                translation_A: "관장이 강연할 것이다.",
                translation_B: "시설 견학이 시작될 것이다.",
                translation_C: "단체 사진을 촬영할 것이다.",
                translation_D: "식사가 제공될 것이다."
            },
            {
                id: "v4-p4-t10-q91",
                text: "According to the speaker, what can the listeners do at the information desk?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Pick up a newsletter",
                    B: "Sign up for a membership",
                    C: "Enter a contest",
                    D: "Register for a workshop"
                },
                correctAnswer: "B",
                translation: "화자에 따르면, 청자들은 안내 데스크에서 무엇을 할 수 있는가?",
                translation_A: "소식지 가져가기",
                translation_B: "회원 가입하기",
                translation_C: "대회 참가하기",
                translation_D: "워크숍 등록하기"
            }
        ],
        script: "Good afternoon, and thanks for visiting Eastgate Art Museum. This month, we're delighted to offer a special exhibit of Johann Weber's paintings. In just a few minutes, our museum director will be giving a talk in the museum theater about the artist's life and work. While you're here, please consider becoming a member of the museum. To sign up, stop by the information desk. Members will receive advance notice about educational events, like the one today.",
        translation: "안녕하세요. 이스트게이트 미술관을 방문해 주셔서 감사합니다. 이번 달에는 요한 웨버의 그림 특별전을 제공해 드리게 되어 기쁩니다. 몇 분 후 미술관 극장에서 우리 미술관 관장님이 해당 화가의 삶과 작품에 대해 이야기해 드릴 겁니다. 여기 오신 김에 미술관 회원이 되는 것에 대해 고려해 주십시오. 신청하시려면 안내 데스크에 들러 주세요. 회원은 오늘 같은 교육 행사들에 대해 사전 공지를 받을 수 있습니다."
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p4-t10-s08",
        contextType: "A1. 사무실 업무",
        questionRange: "92-94",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-92-94.mp3",
        questions: [
            {
                id: "v4-p4-t10-q92",
                text: "Where does the speaker most likely work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a dental office",
                    B: "At a commercial bank",
                    C: "At an equipment rental company",
                    D: "At an employment agency"
                },
                correctAnswer: "A",
                translation: "화자는 어디서 일하겠는가?",
                translation_A: "치과",
                translation_B: "상업 은행",
                translation_C: "장비 대여업체",
                translation_D: "직업소개소"
            },
            {
                id: "v4-p4-t10-q93",
                text: "What does the speaker imply when she says, \"we haven't looked at other suppliers recently\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "She is unfamiliar with a task.",
                    B: "She is asking for volunteers.",
                    C: "More affordable options may be available.",
                    D: "Some information needs to be corrected."
                },
                correctAnswer: "C",
                translation: "화자가 \"최근 다른 공급업체를 생각해 본 적이 없습니다\"라고 말하는 의도는 무엇인가?",
                translation_A: "업무가 익숙하지 않다.",
                translation_B: "자원봉사자를 요청하고 있다.",
                translation_C: "가격이 더 알맞은 선택지를 구할 수 있을 것이다.",
                translation_D: "정보를 바로잡아야 한다."
            },
            {
                id: "v4-p4-t10-q94",
                text: "What will most likely be discussed next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "A relocation plan",
                    B: "A staff-recruitment drive",
                    C: "Some changes to a work policy",
                    D: "Some marketing ideas"
                },
                correctAnswer: "D",
                translation: "다음으로 무엇을 논의하겠는가?",
                translation_A: "이전 계획",
                translation_B: "직원 모집 운동",
                translation_C: "근로 정책 변경",
                translation_D: "마케팅 아이디어"
            }
        ],
        script: "This chart shows the clinic's average monthly expenses. Our wages for dental hygienists, assistants, and other staff members are about 25 percent of the budget, which is right on target. Even though our rent has gradually increased over the years, it still doesn't take up a large part of our budget. However, look at the costs of our supplies. You know, we haven't looked at other suppliers recently. Any savings we might find could be used for marketing to help bring in more business. So, where could we focus our marketing efforts?",
        translation: "이 차트는 병원의 평균 월간 지출을 보여줍니다. 치위생사와 조수, 다른 직원들의 임금이 예산의 약 25퍼센트로, 예상과 정확히 일치합니다. 임대료가 몇 년간 점점 인상되고 있지만 여전히 예산의 많은 부분을 차지하지는 않아요. 그런데 물품 비용을 보세요. 아시다시피 최근 다른 공급업체를 생각해 본 적이 없습니다. 절약할 수 있는 부분을 찾아 마케팅에 투입하면 손님을 더 유치하는 데 도움이 될 거예요. 그럼 마케팅 활동은 어디에 중점을 두면 좋을까요?"
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p4-t10-s09",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "95-97",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-95-97.mp3",
        image: "/images/ETS_TOEIC_4/Test_10/Part_04/v4_p4_t10_q95.png",
        questions: [
            {
                id: "v4-p4-t10-q95",
                text: "Why does the speaker want to purchase backpacks?",
                classification: "WHY_REASON",
                options: {
                    A: "To make a donation to a local school",
                    B: "To give to clients as gifts",
                    C: "To help employees carry materials at conferences",
                    D: "To advertise a company logo"
                },
                correctAnswer: "B",
                translation: "화자는 왜 배낭을 구매하고 싶어 하는가?",
                translation_A: "지역 학교에 기부하려고",
                translation_B: "고객에게 선물로 주려고",
                translation_C: "직원들이 학회에서 자료를 옮기는 데 도움을 주려고",
                translation_D: "회사 로고를 광고하려고"
            },
            {
                id: "v4-p4-t10-q96",
                text: "Look at the graphic. Which backpack fits the speaker's needs?",
                classification: "GRAPHIC",
                options: {
                    A: "The Outsider",
                    B: "Modern Traveler",
                    C: "Road Bound",
                    D: "Elite Pro"
                },
                correctAnswer: "A",
                translation: "시각 정보에 의하면, 어떤 배낭이 화자의 요구에 맞는가?",
                translation_A: "아웃사이더",
                translation_B: "모던 트래블러",
                translation_C: "로드 바운드",
                translation_D: "엘리트 프로"
            },
            {
                id: "v4-p4-t10-q97",
                text: "What does the speaker ask about?",
                classification: "DETAIL",
                options: {
                    A: "Photographs",
                    B: "Expedited shipping",
                    C: "A return policy",
                    D: "A discount"
                },
                correctAnswer: "D",
                translation: "화자는 무엇에 대해 물어보는가?",
                translation_A: "사진",
                translation_B: "신속 배송",
                translation_C: "반품 정책",
                translation_D: "할인"
            }
        ],
        script: "Hi. I'm calling to purchase some backpacks for my company. We recently started selling textbooks, and our employees will be traveling regionally to sell them. I'd like to provide the backpacks to our customers as promotional gifts, but I'd like them to be sturdy—so I'd like something with padded straps to make them comfortable. And there should be easy access to a water bottle as well. If you have what we need, we plan to order 50 of these. So, can you tell me if there is a bulk discount? Please call me back at 555-0198.",
        translation: "안녕하세요. 저희 회사를 위한 배낭을 구입하려고 전화했어요. 저희가 최근 교과서 판매를 시작했는데 직원들이 이를 판매하러 지역 출장을 가야 합니다. 고객에게 판촉 선물로 배낭을 제공하고 싶은데, 견고했으면 해요. 그래서 멜 때 편하도록 푹신한 끈이 있었으면 좋겠어요. 물병도 쉽게 넣을 수 있어야 하고요. 저희가 필요로 하는 물건을 갖고 계시면 50개 주문할 계획입니다. 대량 구입 할인이 있나요? 555-0198로 전화해 주세요."
    },
    {
        testId: 10,
        vol: 4,
        setId: "v4-p4-t10-s10",
        contextType: "C1. 일상 생활",
        questionRange: "98-100",
        audio: "/audio/ETS_TOEIC_4/Test_10/Test_10-98-100.mp3",
        image: "/images/ETS_TOEIC_4/Test_10/Part_04/v4_p4_t10_q98.png",
        questions: [
            {
                id: "v4-p4-t10-q98",
                text: "What type of business does the speaker run?",
                classification: "WHO_LOC",
                options: {
                    A: "A hair salon",
                    B: "A bookstore",
                    C: "A grocery store",
                    D: "An appliance store"
                },
                correctAnswer: "C",
                translation: "화자는 어떤 종류의 업체를 운영하는가?",
                translation_A: "미용실",
                translation_B: "서점",
                translation_C: "식료품점",
                translation_D: "가전제품 매장"
            },
            {
                id: "v4-p4-t10-q99",
                text: "According to the speaker, what did the business receive?",
                classification: "DETAIL",
                options: {
                    A: "A loan",
                    B: "An award",
                    C: "Some sample products",
                    D: "Good customer reviews"
                },
                correctAnswer: "A",
                translation: "화자에 따르면, 업체는 무엇을 받았는가?",
                translation_A: "대출",
                translation_B: "상",
                translation_C: "견본 제품",
                translation_D: "좋은 고객 후기"
            },
            {
                id: "v4-p4-t10-q100",
                text: "Look at the graphic. Which day will the business hours change?",
                classification: "GRAPHIC",
                options: {
                    A: "Thursday",
                    B: "Friday",
                    C: "Saturday",
                    D: "Sunday"
                },
                correctAnswer: "D",
                translation: "시각 정보에 의하면, 영업시간이 변경되는 요일은 언제인가?",
                translation_A: "목요일",
                translation_B: "금요일",
                translation_C: "토요일",
                translation_D: "일요일"
            }
        ],
        script: "Hi, everyone. As most of you know, I opened this grocery store five years ago. I'm happy that we are the main supplier of fruits and vegetables in the neighborhood, and the demand for our products has increased. To meet this need, we've received a loan that will allow us to expand our operations! These additional funds will allow us to make an important change: effective immediately, we'll be open seven days a week! That means we'll have extra shifts available—if you'd like to work one of these extra shifts, please let me know.",
        translation: "안녕하세요, 여러분. 대부분 아시겠지만 저는 5년 전에 이 식료품점을 열었습니다. 인근 지역 내 과일과 채소 주요 공급업체이며 저희 제품에 대한 수요가 증가했다는 사실에 기쁩니다. 이러한 요구에 부응하기 위해, 사업을 확장할 수 있는 대출을 받았습니다. 이 추가 자금은 우리가 중요한 변화를 꾀할 수 있게 해 줄 것입니다. 오늘부터 주 7일 문을 열 것입니다! 추가 교대 근무를 할 수 있다는 뜻입니다. 이 추가 교대 근무를 하고 싶으시면 알려 주세요."
    }
];
