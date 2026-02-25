import { Part4Set } from '../types';

export const test5Data: Part4Set[] = [
    {
        testId: 5,
        vol: 4,
        setId: "v4-p4-t05-s01",
        contextType: "B1. 쇼핑",
        questionRange: "71-73",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-71-73.mp3",
        questions: [
            {
                id: "v4-p4-t05-q71",
                text: "What did the listener do yesterday?",
                classification: "DETAIL",
                options: {
                    A: "She placed an order",
                    B: "She scheduled an event",
                    C: "She called a manager",
                    D: "She painted some rooms"
                },
                correctAnswer: "A",
                translation: "청자는 어제 무엇을 했는가?",
                translation_A: "주문을 했다.",
                translation_B: "행사 일정을 잡았다.",
                translation_C: "관리자에게 전화했다.",
                translation_D: "방을 칠했다."
            },
            {
                id: "v4-p4-t05-q72",
                text: "What problem does the speaker mention?",
                classification: "WHY_REASON",
                options: {
                    A: "A price has increased.",
                    B: "A machine needs to be repaired.",
                    C: "A product is not available.",
                    D: "A performance has been canceled."
                },
                correctAnswer: "C",
                translation: "화자는 어떤 문제를 언급하는가?",
                translation_A: "가격이 올랐다.",
                translation_B: "기계를 수리해야 한다.",
                translation_C: "제품을 구할 수 없다.",
                translation_D: "공연이 취소됐다."
            },
            {
                id: "v4-p4-t05-q73",
                text: "What does the speaker offer the listener?",
                classification: "DETAIL",
                options: {
                    A: "Expedited shipping",
                    B: "A full refund",
                    C: "A free consultation",
                    D: "A discount"
                },
                correctAnswer: "D",
                translation: "화자는 청자에게 무엇을 제공하는가?",
                translation_A: "신속 배송",
                translation_B: "전액 환불",
                translation_C: "무료 상담",
                translation_D: "할인"
            }
        ],
        script: "Hi, Ms. Cho. I'm calling from Springdale Lights. Yesterday, you ordered 24 of our purple solar lanterns for your upcoming event. Unfortunately, our supplier won't be able to get us purple lanterns for another three weeks, so we only have yellow ones in stock. We would like to offer you a ten percent discount on them to apologize for this. Please call us back to confirm whether you'd like the yellow solar lights, and we'll set them aside for you.",
        translation: "안녕하세요, 조 씨. 스프링데일 라이트입니다. 어제 다가오는 행사에 쓸 보라색 태양열 손전등 24개를 주문하셨잖아요. 안타깝게도 공급업체에서 앞으로 3주간 보라색 손전등을 공급하지 못할 거라고 합니다. 그래서 노란색만 재고가 있어요. 사과의 의미로 10퍼센트 할인을 제공해 드리고 싶은데요. 다시 전화 주셔서 노란색 태양열 손전등을 원하시는지 알려 주시면 따로 준비해 두겠습니다."
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p4-t05-s02",
        contextType: "C2. 건강 / 여가 / 농장",
        questionRange: "74-76",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-74-76.mp3",
        questions: [
            {
                id: "v4-p4-t05-q74",
                text: "According to the speaker, what is special about Osterwind Estate?",
                classification: "WHY_REASON",
                options: {
                    A: "It houses many historic paintings.",
                    B: "It was designed by its owner.",
                    C: "It includes a botanical garden.",
                    D: "It is used as a museum."
                },
                correctAnswer: "B",
                translation: "화자에 따르면, 오스터윈드 에스테이트의 특별한 점은 무엇인가?",
                translation_A: "역사적인 그림을 많이 소장하고 있다.",
                translation_B: "소유주가 설계했다.",
                translation_C: "식물원이 포함되어 있다.",
                translation_D: "박물관으로 이용된다."
            },
            {
                id: "v4-p4-t05-q75",
                text: "Why are the listeners at Osterwind Estate?",
                classification: "WHY_REASON",
                options: {
                    A: "To attend an awards ceremony",
                    B: "To apply for landscaping jobs",
                    C: "To take a tour of a building",
                    D: "To clean up some gardens"
                },
                correctAnswer: "D",
                translation: "청자들은 왜 오스터윈드 에스테이트에 갔는가?",
                translation_A: "시상식에 참석하려고",
                translation_B: "조경 일자리에 지원하려고",
                translation_C: "건물을 견학하려고",
                translation_D: "정원을 청소하려고"
            },
            {
                id: "v4-p4-t05-q76",
                text: "What will the listeners receive?",
                classification: "DETAIL",
                options: {
                    A: "Gift-shop coupons",
                    B: "Free passes",
                    C: "Lunch boxes",
                    D: "T-shirts"
                },
                correctAnswer: "B",
                translation: "청자들은 무엇을 받을 것인가?",
                translation_A: "기념품점 쿠폰",
                translation_B: "무료 출입증",
                translation_C: "점심 도시락",
                translation_D: "티셔츠"
            }
        ],
        script: "Welcome to Osterwind Estate. The former owner, Ms. Yuping Wei, was a famous painter. What's special about this estate is that Ms. Wei designed it herself, including the landscaping. We're asking volunteers to clear debris from the walkways around the gardens in preparation for the estate's first season as a public park. You can pick up a bag and gloves from the patio area. And remember, be sure to see me as you check out before you leave. All volunteers are eligible for a complimentary visitor pass that you can use to access the estate and attend any events held here all summer long.",
        translation: "오스터윈드 에스테이트에 오신 것을 환영합니다. 이전 소유주인 유핑 웨이 씨는 유명 화가였습니다. 이 저택의 특별한 점은 웨이 씨가 조경을 비롯해 직접 설계했다는 것입니다. 공원으로서 첫 시즌을 맞을 준비로 자원봉사자들은 정원 주변 보도에 있는 쓰레기를 치워 주시기 바랍니다. 테라스 구역에서 봉지와 장갑을 가져가시면 됩니다. 가시기 전 체크아웃할 때 반드시 저에게 와 주세요. 모든 자원봉사자는 무료 방문자 출입증을 받을 수 있으며, 이 패스를 사용하여 여름 내내 이 저택에 입장할 수 있고 이곳에서 열리는 모든 행사에도 참석할 수 있습니다."
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p4-t05-s03",
        contextType: "A1. 사무실 업무",
        questionRange: "77-79",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-77-79.mp3",
        questions: [
            {
                id: "v4-p4-t05-q77",
                text: "Who most likely is the listener?",
                classification: "WHO_LOC",
                options: {
                    A: "A travel agent",
                    B: "An administrative assistant",
                    C: "A flight attendant",
                    D: "A security guard"
                },
                correctAnswer: "B",
                translation: "청자는 누구이겠는가?",
                translation_A: "여행사 직원",
                translation_B: "행정 비서",
                translation_C: "항공기 승무원",
                translation_D: "보안 요원"
            },
            {
                id: "v4-p4-t05-q78",
                text: "Why does the speaker say, \"I know this is inconvenient\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To suggest a deadline extension",
                    B: "To report on an additional cost",
                    C: "To offer an alternative solution",
                    D: "To apologize for a request"
                },
                correctAnswer: "D",
                translation: "화자가 \"불편한 일이라는 거 알아요\"라고 말하는 이유는?",
                translation_A: "기한 연장을 제안하려고",
                translation_B: "추가 비용에 대해 보고하려고",
                translation_C: "대안이 될 해결책을 제안하려고",
                translation_D: "요청한 것에 대해 사과하려고"
            },
            {
                id: "v4-p4-t05-q79",
                text: "What will the speaker do when he arrives in San Diego?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Retrieve his messages",
                    B: "Check in to a hotel",
                    C: "Change a flight reservation",
                    D: "Visit a company office"
                },
                correctAnswer: "A",
                translation: "화자는 샌디에이고에 도착하면 무엇을 할 것인가?",
                translation_A: "메시지 확인하기",
                translation_B: "호텔에 체크인하기",
                translation_C: "항공권 예약 변경하기",
                translation_D: "사무실 방문하기"
            }
        ],
        script: "Good morning, Ms. Espinosa. This is Marcel Fournier. It's Saturday morning, and I'm on my way to the airport. This is a little out of the ordinary, but I'm calling because in my haste I left a note with Mr. Hang's mobile phone number on my office desk. He's picking me up from the airport, and I'll be stuck if I can't reach him. I'll need you to go into the office and text me with the number. I know this is inconvenient. I'll check my messages once I land in San Diego.",
        translation: "안녕하세요, 에스피노사 씨. 마르셀 푸르니에입니다. 지금은 토요일 아침이고 공항으로 가는 길이에요. 이런 일이 별로 없었는데, 급하게 나오느라 행 씨의 핸드폰 번호가 적힌 쪽지를 사무실 책상에 두고 와서 전화드려요. 행 씨가 공항으로 저를 픽업하러 나올 텐데 연락이 안 되면 오도 가도 못할 겁니다. 사무실로 가서 전화번호를 문자 메시지로 보내주세요. 불편한 일이라는 거 알아요. 샌디에이고에 착륙하면 메시지를 확인할게요."
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p4-t05-s04",
        contextType: "D2. 기타 뉴스 / 팟캐스트 / 안내",
        questionRange: "80-82",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-80-82.mp3",
        questions: [
            {
                id: "v4-p4-t05-q80",
                text: "What does the speaker say her videos are usually about?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "How to plan trips",
                    B: "How to reuse items",
                    C: "How to organize closets",
                    D: "How to draw landscapes"
                },
                correctAnswer: "B",
                translation: "화자는 자신의 영상이 보통 무엇에 관한 것이라고 말하는가?",
                translation_A: "여행을 계획하는 법",
                translation_B: "물건을 재사용하는 법",
                translation_C: "벽장을 정리하는 법",
                translation_D: "풍경화를 그리는 법"
            },
            {
                id: "v4-p4-t05-q81",
                text: "What first step does the speaker mention?",
                classification: "DETAIL",
                options: {
                    A: "Writing a list",
                    B: "Finding coupons",
                    C: "Gathering supplies",
                    D: "Looking at images online"
                },
                correctAnswer: "C",
                translation: "화자가 언급하는 첫 번째 단계는 무엇인가?",
                translation_A: "목록 작성하기",
                translation_B: "쿠폰 찾기",
                translation_C: "물품 모으기",
                translation_D: "온라인에서 이미지 보기"
            },
            {
                id: "v4-p4-t05-q82",
                text: "According to the speaker, what can the listeners do on a Web site?",
                classification: "DETAIL",
                options: {
                    A: "Enter a contest",
                    B: "Subscribe to a video channel",
                    C: "Submit some photographs",
                    D: "Download some instructions"
                },
                correctAnswer: "D",
                translation: "화자에 따르면, 청자들은 웹사이트에서 무엇을 할 수 있는가?",
                translation_A: "대회 참가하기",
                translation_B: "영상 채널 구독하기",
                translation_C: "사진 제출하기",
                translation_D: "설명서 다운로드하기"
            }
        ],
        script: "Hi, everyone! Thanks for watching today. If you're new to my channel, you should know that my videos focus on ways that we can repurpose common objects so that they don't end up in landfills. In this video, you'll learn how to make candles from old and leftover crayons. Your first step is to collect the items you'll need. You may already have some old crayons around the house, or you can ask your friends and neighbors for theirs. I'll be covering a lot of steps, but don't worry, a full written version of the instructions is available on my Web site. I recommend downloading those later for future reference.",
        translation: "안녕하세요, 여러분! 오늘도 시청해 주셔서 감사합니다. 제 채널을 처음 방문하셨다면, 제 영상은 흔한 물건들의 용도를 변경하여 쓰레기 매립지로 가지 않도록 하는 방법에 초점을 맞추고 있다는 것을 아시면 좋겠습니다. 이번 영상에서는 낡은 크레용 찌꺼기로 양초를 만드는 방법을 배우게 됩니다. 첫 번째 단계는 필요한 물품을 모으는 일입니다. 이미 집에 낡은 크레용이 있을 겁니다. 아니면 친구나 이웃에게 요청해도 돼요. 많은 단계를 다루겠지만 걱정 마세요. 제 웹사이트에 서면으로 된 전체 설명서가 있습니다. 향후에 참고할 수 있도록 다운로드하시는 것을 권장합니다."
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p4-t05-s05",
        contextType: "A1. 사무실 업무",
        questionRange: "83-85",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-83-85.mp3",
        questions: [
            {
                id: "v4-p4-t05-q83",
                text: "What is the speech mainly about?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "A financial report",
                    B: "A round of promotions",
                    C: "A product prototype",
                    D: "A construction project"
                },
                correctAnswer: "D",
                translation: "연설은 주로 무엇에 관한 것인가?",
                translation_A: "재무 보고서",
                translation_B: "홍보 활동",
                translation_C: "시제품",
                translation_D: "공사 프로젝트"
            },
            {
                id: "v4-p4-t05-q84",
                text: "Why does the speaker say, \"all required studies were conducted a year ago\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To correct a timeline error",
                    B: "To provide reassurance",
                    C: "To deny responsibility for a problem",
                    D: "To argue that a new study is needed"
                },
                correctAnswer: "B",
                translation: "화자가 \"일 년 전에 모든 필요한 연구가 시행됐습니다\"라고 말하는 이유는?",
                translation_A: "시간표 상의 오류를 바로잡으려고",
                translation_B: "안심시키려고",
                translation_C: "문제에 대한 책임을 부인하려고",
                translation_D: "새로운 연구가 필요하다고 주장하려고"
            },
            {
                id: "v4-p4-t05-q85",
                text: "What will the next speaker discuss?",
                classification: "ACTION_NEXT",
                options: {
                    A: "A job fair",
                    B: "A school opening",
                    C: "A ceremony",
                    D: "A sporting event"
                },
                correctAnswer: "C",
                translation: "다음 화자는 무엇에 대해 이야기할 것인가?",
                translation_A: "취업 박람회",
                translation_B: "학교 개교",
                translation_C: "의식",
                translation_D: "스포츠 행사"
            }
        ],
        script: "Thank you all for coming to this press conference. As you know, the Grand Falls Bridge improvement work has been underway for almost a year. We're nearing the final stage of sanding and painting the newly built portions. I know the fishing community has expressed concern over the potential environmental impact of this project on our local marine life. Well, all required studies were conducted a year ago. I'll take some questions now. After that, our special-events coordinator will discuss the bridge-opening ceremony that's being planned.",
        translation: "기자 회견에 참석해 주신 여러분께 감사드립니다. 아시다시피 그랜드 폴스 브릿지의 개선 공사가 거의 일 년째 진행 중입니다. 새로 지어진 부분에 사포질과 페인트칠을 하는 마지막 단계에 다다르고 있습니다. 이 프로젝트가 지역 해양 생물에 미칠 수 있는 환경적 영향에 대해 어업계에서 우려를 표하고 있는 것을 알고 있습니다. 음, 일 년 전에 모든 필요한 연구가 시행됐습니다. 이제 질문을 받겠습니다. 이후 특별 행사 담당자가 계획 중인 다리 개통식에 대해 이야기할 겁니다."
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p4-t05-s06",
        contextType: "A1. 사무실 업무",
        questionRange: "86-88",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-86-88.mp3",
        questions: [
            {
                id: "v4-p4-t05-q86",
                text: "Who most likely is the speaker?",
                classification: "WHO_LOC",
                options: {
                    A: "A salesperson",
                    B: "A government official",
                    C: "An interior designer",
                    D: "A building manager"
                },
                correctAnswer: "D",
                translation: "화자는 누구이겠는가?",
                translation_A: "판매원",
                translation_B: "공무원",
                translation_C: "실내 디자이너",
                translation_D: "건물 관리인"
            },
            {
                id: "v4-p4-t05-q87",
                text: "Why does the speaker say, \"It's been ten days\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To explain an expense",
                    B: "To point out a problem",
                    C: "To make an offer",
                    D: "To thank a colleague"
                },
                correctAnswer: "B",
                translation: "화자가 \"열흘이 됐어요\"라고 말하는 이유는 무엇인가?",
                translation_A: "비용에 대해 설명하려고",
                translation_B: "문제를 지적하려고",
                translation_C: "제안을 하려고",
                translation_D: "동료에게 감사하려고"
            },
            {
                id: "v4-p4-t05-q88",
                text: "What does the speaker offer to do?",
                classification: "DETAIL",
                options: {
                    A: "Open the door to a room",
                    B: "Reset a password",
                    C: "Send a copy of a document",
                    D: "Refund a payment"
                },
                correctAnswer: "A",
                translation: "화자는 무엇을 하겠다고 제안하는가?",
                translation_A: "보관실 문 열어 주기",
                translation_B: "비밀번호 재설정하기",
                translation_C: "문서 사본 보내기",
                translation_D: "환불해 주기"
            }
        ],
        script: "Hello, Mr. Smith. I hope you're getting settled into your office space in our building. I'm calling about some large packages that arrived for your company last week. We're keeping them for you in the storage room downstairs. The lease agreement says management will hold packages for five days. It's been ten days. Please give me a call and let me know when you can come down to claim them so I can be there to open the storage room door for you.",
        translation: "안녕하세요, 스미스 씨. 저희 건물 사무실 공간에 잘 적응하고 계시길 바랍니다. 지난주 귀하 앞으로 온 큰 소포와 관련해 전화를 드렸습니다. 그것을 아래층 보관실에 맡아 두고 있어요. 임대 계약서에는 관리실에서 소포를 5일간 보관하는 것으로 명시되어 있는데요. 열흘이 됐어요. 전화 주셔서 언제 가지러 오실 수 있는지 알려 주세요. 제가 가서 보관실 문을 열어 드릴 수 있게 말이죠."
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p4-t05-s07",
        contextType: "D1. 일반 뉴스",
        questionRange: "89-91",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-89-91.mp3",
        questions: [
            {
                id: "v4-p4-t05-q89",
                text: "What is mentioned about Ferndale Valley?",
                classification: "DETAIL",
                options: {
                    A: "It is heavily forested.",
                    B: "It attracts many tourists.",
                    C: "It is developing quickly.",
                    D: "It is very windy."
                },
                correctAnswer: "D",
                translation: "펀데일 밸리에 대해 무엇을 언급하는가?",
                translation_A: "숲이 울창하다.",
                translation_B: "많은 관광객을 유치한다.",
                translation_C: "빠르게 개발되고 있다.",
                translation_D: "바람이 많이 분다."
            },
            {
                id: "v4-p4-t05-q90",
                text: "Who will participate in a project?",
                classification: "DETAIL",
                options: {
                    A: "Biologists",
                    B: "Farmers",
                    C: "Airline pilots",
                    D: "Real estate agents"
                },
                correctAnswer: "B",
                translation: "누가 프로젝트에 참여할 것인가?",
                translation_A: "생물학자",
                translation_B: "농부",
                translation_C: "항공기 조종사",
                translation_D: "부동산 중개인"
            },
            {
                id: "v4-p4-t05-q91",
                text: "What will the participants receive?",
                classification: "DETAIL",
                options: {
                    A: "Tickets to an industry event",
                    B: "Technical assistance",
                    C: "Financial compensation",
                    D: "Advertising advice"
                },
                correctAnswer: "C",
                translation: "참여자들은 무엇을 받을 것인가?",
                translation_A: "업계 행사 입장권",
                translation_B: "기술 지원",
                translation_C: "재정적 보상",
                translation_D: "광고 조언"
            }
        ],
        script: "Our next story concerns Ferndale Valley. It's well-known that the area is one of the windiest locations in the region, and one company would like to take advantage of that natural energy source. Breeze Capture hopes to install dozens of wind turbines by the end of next year. The company is looking for local farmers who are interested in leasing some of their land for the project. In addition to being paid for the land use, participants will also be compensated for the energy that is generated by the turbines. For more information, e-mail info@breezecapture.com.",
        translation: "다음 이야기는 펀데일 밸리에 관한 것입니다. 그곳은 그 지역에서 바람이 가장 많이 부는 곳으로 잘 알려져 있는데요. 한 업체에서 그 천연 에너지원을 이용하고 싶어 합니다. 브리즈 캡처는 내년 말까지 수십 개의 풍력 발전용 터빈을 설치하고자 하는데요. 이 업체는 해당 프로젝트를 위해 토지를 임대하는 데 관심 있는 지역 농부들을 찾고 있습니다. 참여하시는 분은 토지 사용료를 받을 뿐 아니라 터빈으로 생성되는 에너지에 대한 보상도 받을 것입니다. 더 자세한 내용은 info@breezecapture.com으로 이메일을 보내 주세요."
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p4-t05-s08",
        contextType: "A1. 사무실 업무",
        questionRange: "92-94",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-92-94.mp3",
        questions: [
            {
                id: "v4-p4-t05-q92",
                text: "What kind of business does the speaker work for?",
                classification: "WHO_LOC",
                options: {
                    A: "A construction firm",
                    B: "A landscaping service",
                    C: "A storage company",
                    D: "An auto repair shop"
                },
                correctAnswer: "C",
                translation: "화자는 어떤 종류의 업체에서 일하는가?",
                translation_A: "건설업체",
                translation_B: "조경 서비스",
                translation_C: "보관업체",
                translation_D: "자동차 정비소"
            },
            {
                id: "v4-p4-t05-q93",
                text: "Why is the speaker calling?",
                classification: "WHY_REASON",
                options: {
                    A: "To apologize for a cancellation",
                    B: "To confirm a delivery",
                    C: "To share a price quote",
                    D: "To update some contact information"
                },
                correctAnswer: "B",
                translation: "화자는 왜 전화했는가?",
                translation_A: "취소에 대해 사과하려고",
                translation_B: "배송을 확정하려고",
                translation_C: "견적서를 공유하려고",
                translation_D: "연락처를 업데이트하려고"
            },
            {
                id: "v4-p4-t05-q94",
                text: "What does the speaker ask the listener to do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Purchase a warranty",
                    B: "Complete a survey",
                    C: "Clean up an area",
                    D: "Apply for a permit"
                },
                correctAnswer: "B",
                translation: "화자는 청자에게 무엇을 해 달라고 요청하는가?",
                translation_A: "품질 보증서 구입하기",
                translation_B: "설문 작성하기",
                translation_C: "구역 청소하기",
                translation_D: "허가증 신청하기"
            }
        ],
        script: "Hello, Mr. Kimura. I'm calling from Feras Portable Storage. You recently ordered a container to store and move your household belongings in. I'm calling to confirm that your container will be delivered tomorrow morning at nine o'clock. The driver will place it in your driveway. After the delivery, if you could, please complete the customer feedback survey that we'll e-mail you. It will help us to improve our service. Thanks.",
        translation: "안녕하세요, 키무라 씨. 퍼라스 포터블 스토리지입니다. 최근 가재도구를 보관해서 옮길 컨테이너를 주문하셨죠. 주문하신 컨테이너가 내일 아침 9시에 배송되는 것을 확정하려고 전화 드립니다. 기사가 컨테이너를 귀하의 차량 진입로에 둘 겁니다. 배송된 후에 가능하시면 이메일로 보내 드릴 고객 의견 설문을 작성해 주세요. 서비스 향상에 도움이 될 것입니다. 감사합니다."
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p4-t05-s09",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "95-97",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-95-97.mp3",
        image: "/images/ETS_TOEIC_4/Test_05/Part_04/v4_p4_t05_q95.png",
        questions: [
            {
                id: "v4-p4-t05-q95",
                text: "What is the purpose of the talk?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "To discuss a schedule",
                    B: "To consider changing suppliers",
                    C: "To train employees",
                    D: "To develop an inventory system"
                },
                correctAnswer: "C",
                translation: "담화의 목적은 무엇인가?",
                translation_A: "일정 논의",
                translation_B: "공급업체 변경 고려",
                translation_C: "직원 교육",
                translation_D: "재고 관리 시스템 개발"
            },
            {
                id: "v4-p4-t05-q96",
                text: "Look at the graphic. Which product does the speaker say is new?",
                classification: "GRAPHIC",
                options: {
                    A: "Klennlee",
                    B: "Baxlon",
                    C: "Z-Factor",
                    D: "Clean Sure"
                },
                correctAnswer: "D",
                translation: "시각 정보에 의하면, 화자는 어떤 것이 신제품이라고 말하는가?",
                translation_A: "클렌리",
                translation_B: "백슬론",
                translation_C: "Z-팩터",
                translation_D: "클린 슈어"
            },
            {
                id: "v4-p4-t05-q97",
                text: "What happens at one o'clock on Tuesdays?",
                classification: "DETAIL",
                options: {
                    A: "An expense report is due.",
                    B: "A work shift begins.",
                    C: "A staff meeting is held.",
                    D: "A delivery arrives."
                },
                correctAnswer: "D",
                translation: "매주 화요일 1시에 어떤 일이 있는가?",
                translation_A: "지출 품의서를 내야 한다.",
                translation_B: "교대 근무가 시작된다.",
                translation_C: "직원 회의가 열린다.",
                translation_D: "배송이 도착한다."
            }
        ],
        script: "This is the custodial staff's cabinet for cleaning supplies. As part of your training, you'll be expected to learn which cleaning solutions are used for different surfaces in the hotel, such as carpet and tile flooring. The spray bottle on the top shelf, Baxlon, is for glass surfaces. The product directly under the spray bottle is brand new. It was just released this month, and it's excellent for polishing furniture. Oh, and every Tuesday at one o'clock, a delivery truck brings any supplies that we're low on. Don't forget to check that.",
        translation: "이것은 청소 직원들이 청소용품을 두는 캐비닛입니다. 교육의 일환으로, 카펫이나 타일 바닥재 등 호텔 내 다양한 표면에 어떤 청소 용액을 쓰는지 배우셔야 합니다. 맨 위 선반에 있는 스프레이 병, 백슬론은 유리 표면을 위한 것입니다. 그 스프레이 병 바로 아래 제품은 신상품인데요, 이번 달에 출시됐고, 가구 광을 내는 데 아주 좋습니다. 아, 매주 화요일 1시에 배송 트럭이 부족한 용품을 가져옵니다. 잊지 말고 확인하세요."
    },
    {
        testId: 5,
        vol: 4,
        setId: "v4-p4-t05-s10",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "98-100",
        audio: "/audio/ETS_TOEIC_4/Test_05/Test_05-98-100.mp3",
        image: "/images/ETS_TOEIC_4/Test_05/Part_04/v4_p4_t05_q98.png",
        questions: [
            {
                id: "v4-p4-t05-q98",
                text: "What is the topic of the course?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "Marketing",
                    B: "Investing",
                    C: "Documentary filmmaking",
                    D: "Software development"
                },
                correctAnswer: "A",
                translation: "강좌의 주제는 무엇인가?",
                translation_A: "마케팅",
                translation_B: "투자",
                translation_C: "다큐멘터리 영화 제작",
                translation_D: "소프트웨어 개발"
            },
            {
                id: "v4-p4-t05-q99",
                text: "Look at the graphic. Which step will be discussed today?",
                classification: "GRAPHIC",
                options: {
                    A: "Step 1",
                    B: "Step 2",
                    C: "Step 3",
                    D: "Step 4"
                },
                correctAnswer: "C",
                translation: "시각 정보에 의하면, 오늘 어떤 단계를 논의할 것인가?",
                translation_A: "1단계",
                translation_B: "2단계",
                translation_C: "3단계",
                translation_D: "4단계"
            },
            {
                id: "v4-p4-t05-q100",
                text: "What will the listeners do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Read a handout",
                    B: "Watch a video",
                    C: "Take a coffee break",
                    D: "Listen to a guest speaker"
                },
                correctAnswer: "D",
                translation: "청자들이 다음으로 무엇을 할 것인가?",
                translation_A: "인쇄물 읽기",
                translation_B: "동영상 시청하기",
                translation_C: "휴식 시간 갖기",
                translation_D: "객원 강연자의 강연 듣기"
            }
        ],
        script: "Welcome back to this professional development workshop. We'll continue from where we left off in our discussion on advertising through social media using videos, and we'll end today's meeting by performing a group task. Last week, we discussed the planning phase for a video marketing campaign. Today, we'll move on to the production phase. During this phase, you'll need to ensure that high-quality equipment is used for lighting and camera work and that you have the best video editors you can get for the job. We're very lucky to have an expert here today to talk about her experience with the process. Please give your attention to Usha Madan.",
        translation: "전문성 개발 워크숍에 다시 오신 것을 환영합니다. 동영상을 활용한 소셜미디어 광고에 대한 논의를 하다가 중단한 부분부터 이어서 하겠습니다. 그리고 그룹 과제를 수행하는 것으로 오늘 모임을 마치겠습니다. 지난주에 동영상 마케팅 캠페인의 기획 단계에 대해 이야기했는데요. 오늘은 제작 단계로 넘어가겠습니다. 이 단계에서는 조명과 카메라 작업에 고품질 장비를 사용하고, 작업에 적합한 최고의 영상 편집자를 확보해야 합니다. 운 좋게도 오늘 이곳에 해당 과정에 대한 경험을 이야기해 줄 전문가를 모셨습니다. 우샤 마단 씨께 귀를 기울여 주세요."
    }
];
