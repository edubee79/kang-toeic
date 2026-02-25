import { Part4Set } from '../types';

export const test8Data: Part4Set[] = [
    {
        testId: 8,
        vol: 4,
        setId: "v4-p4-t08-s01",
        contextType: "D2. 기타 뉴스 / 팟캐스트 / 안내",
        questionRange: "71-73",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-71-73.mp3",
        questions: [
            {
                id: "v4-p4-t08-q71",
                text: "What product is being advertised?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "A desk",
                    B: "A bed",
                    C: "A bookcase",
                    D: "A chair"
                },
                correctAnswer: "B",
                translation: "어떤 제품을 광고하는가?",
                translation_A: "책상",
                translation_B: "침대",
                translation_C: "책장",
                translation_D: "의자"
            },
            {
                id: "v4-p4-t08-q72",
                text: "What advantage of the product does the speaker mention?",
                classification: "DETAIL",
                options: {
                    A: "It helps save space.",
                    B: "It is guaranteed to last.",
                    C: "It comes in multiple sizes.",
                    D: "It is environmentally friendly."
                },
                correctAnswer: "A",
                translation: "화자는 제품의 어떤 장점을 언급하는가?",
                translation_A: "공간을 아끼는 데 도움이 된다.",
                translation_B: "확실히 오래간다.",
                translation_C: "다양한 크기로 나온다.",
                translation_D: "환경 친화적이다."
            },
            {
                id: "v4-p4-t08-q73",
                text: "How can the listeners receive a gift?",
                classification: "ACTION_NEXT",
                options: {
                    A: "By filling out a survey",
                    B: "By going into a store",
                    C: "By entering a code on a Web site",
                    D: "By subscribing to a newsletter"
                },
                correctAnswer: "C",
                translation: "청자들은 어떻게 선물을 받을 수 있는가?",
                translation_A: "설문을 작성해서",
                translation_B: "매장으로 가서",
                translation_C: "웹사이트에 코드를 입력해서",
                translation_D: "소식지를 구독해서"
            }
        ],
        script: "Are you furnishing a small apartment? Go to Jillsbedstore.com and check out Jill's Cabinet Bed. This unique bed fits into a hardwood cabinet, becoming compact and saving you space. When you need to use it, just open the cabinet and unfold it to set it up. And this month only, we're offering listeners a special deal: if you use the code 623Z to order on our Web site, we'll throw in two free pillows with your purchase. So visit Jillsbedstore.com to start enjoying a more spacious apartment!",
        translation: "소형 아파트에 가구를 비치하고 계십니까? Jillsbedstore.com을 방문하셔서 질의 캐비닛 침대를 확인해 보세요. 이 특별한 침대는 단단한 목재 캐비닛 안으로 쏙 들어가서 크기가 작아지고 공간을 아껴줍니다. 사용해야 할 때는 그저 캐비닛을 열어 펴서 세우시면 됩니다. 이번 달만 청취자들에게 특별 할인을 제공하고 있습니다. 저희 웹사이트에서 주문 시 623Z 코드를 사용하시면 구매품에 베개 2개를 덤으로 드립니다. Jillsbedstore.com을 방문해 아파트를 더욱 널찍하게 쓰기 시작하세요!"
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p4-t08-s02",
        contextType: "D1. 일반 뉴스",
        questionRange: "74-76",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-74-76.mp3",
        questions: [
            {
                id: "v4-p4-t08-q74",
                text: "What is the broadcast mainly about?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "The weather",
                    B: "Traffic updates",
                    C: "An outdoor festival",
                    D: "A city cleanup initiative"
                },
                correctAnswer: "A",
                translation: "방송은 주로 무엇에 관한 것인가?",
                translation_A: "날씨",
                translation_B: "교통 소식",
                translation_C: "야외 축제",
                translation_D: "도시 정화 계획"
            },
            {
                id: "v4-p4-t08-q75",
                text: "What does the speaker recommend?",
                classification: "DETAIL",
                options: {
                    A: "Filling out a form",
                    B: "Wearing appropriate clothing",
                    C: "Checking a map",
                    D: "Using public transportation"
                },
                correctAnswer: "B",
                translation: "화자는 무엇을 권하는가?",
                translation_A: "서식 작성하기",
                translation_B: "적절한 옷 입기",
                translation_C: "지도 확인하기",
                translation_D: "대중교통 이용하기"
            },
            {
                id: "v4-p4-t08-q76",
                text: "What will the listeners hear next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "An interview",
                    B: "An advertisement",
                    C: "Some sports updates",
                    D: "Some newly released songs"
                },
                correctAnswer: "C",
                translation: "청자들은 다음으로 무엇을 들을 것인가?",
                translation_A: "인터뷰",
                translation_B: "광고",
                translation_C: "스포츠 소식",
                translation_D: "새로 발매된 노래"
            }
        ],
        script: "For the rest of today, it is expected to remain dry and cloudy in the Jonesdale area. But beginning tomorrow, we'll see colder temperatures and moderate snowfall. So please remember to put on a heavy coat if you plan on doing anything outdoors. As we head into next week, it'll finally start to feel like spring. OK, next up, we'll be covering our local sports teams' recent events, including a big victory last night.",
        translation: "오늘 남은 시간 내내 존스데일 지역은 건조하고 구름이 낀 상태가 계속될 것으로 보입니다. 하지만 내일부터는 기온이 더 떨어지고 적당한 강설량을 보이겠습니다. 실외에서 무언가를 하실 계획이라면 두꺼운 코트를 입으시기 바랍니다. 다음 주로 향하면서 드디어 봄 기운이 느껴지기 시작할 겁니다. 네, 다음으로 어젯밤 큰 승리 소식을 비롯해 지역 스포츠 팀의 최근 소식을 보도합니다."
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p4-t08-s03",
        contextType: "C2. 건강 / 여가 / 농장",
        questionRange: "77-79",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-77-79.mp3",
        questions: [
            {
                id: "v4-p4-t08-q77",
                text: "Why is the speaker calling?",
                classification: "WHY_REASON",
                options: {
                    A: "To provide a cost estimate",
                    B: "To confirm some warranty information",
                    C: "To report that a service has been completed",
                    D: "To recommend that another business be contacted"
                },
                correctAnswer: "C",
                translation: "화자가 전화한 이유는?",
                translation_A: "견적서를 제공하려고",
                translation_B: "품질 보증 관련 정보를 확인하려고",
                translation_C: "서비스가 완료됐음을 알려 주려고",
                translation_D: "다른 업체에 연락하라고 권하려고"
            },
            {
                id: "v4-p4-t08-q78",
                text: "What does the speaker suggest the listener do?",
                classification: "DETAIL",
                options: {
                    A: "Schedule regular maintenance",
                    B: "Wait for a sale price",
                    C: "Call the manufacturer",
                    D: "Ask for a second opinion"
                },
                correctAnswer: "A",
                translation: "화자는 청자에게 무엇을 하라고 제안하는가?",
                translation_A: "정기 보수 일정 잡기",
                translation_B: "할인 가격 기다리기",
                translation_C: "제조업체에 전화하기",
                translation_D: "다른 사람의 의견 물어보기"
            },
            {
                id: "v4-p4-t08-q79",
                text: "Why will a business be closed tomorrow?",
                classification: "WHY_REASON",
                options: {
                    A: "Some renovations will be done.",
                    B: "The owner will be on vacation.",
                    C: "An inspection will be conducted.",
                    D: "It will be a national holiday."
                },
                correctAnswer: "D",
                translation: "업체가 내일 문을 닫는 이유는?",
                translation_A: "보수 작업이 진행될 것이다.",
                translation_B: "업주가 휴가를 갈 것이다.",
                translation_C: "점검이 시행될 것이다.",
                translation_D: "국경일이다."
            }
        ],
        script: "This is Brilliant Watch Repair calling about the antique wristwatch that you dropped off yesterday. As you mentioned, one of the watch hands was frequently skipping ahead, so we replaced the battery. That seemed to fix the issue. However, because the watch is quite old, we also took it apart to give it a good cleaning. In the future, we suggest bringing it in for basic maintenance once every three years to keep it in good condition. The watch is ready for you at any time. Just be aware that tomorrow is a national holiday and we'll be closed. Thanks!",
        translation: "브릴리언트 시계 수리점입니다. 어제 맡기신 골동품 손목시계 관련해서 전화 드려요. 언급하신 대로 시계 바늘 중 하나가 자주 건너뛰어서 배터리를 교체했습니다. 문제가 해결된 걸로 보여요. 그런데 시계가 꽤 오래됐기 때문에 분해해서 싹 청소했어요. 앞으로는 좋은 상태를 유지하려면 3년마다 한 번씩 가져와서 기본 정비를 받으셨으면 좋겠습니다. 시계가 준비되었으니 언제든 가져가세요. 내일은 국경일이라 문을 닫습니다. 감사합니다!"
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p4-t08-s04",
        contextType: "B3. 행사 / 연설",
        questionRange: "80-82",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-80-82.mp3",
        questions: [
            {
                id: "v4-p4-t08-q80",
                text: "What is the purpose of the speech?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "To present an award",
                    B: "To announce a job promotion",
                    C: "To introduce a new product",
                    D: "To celebrate a retirement"
                },
                correctAnswer: "D",
                translation: "연설의 목적은?",
                translation_A: "상을 주려고",
                translation_B: "승진을 알리려고",
                translation_C: "신제품을 소개하려고",
                translation_D: "은퇴를 기념하려고"
            },
            {
                id: "v4-p4-t08-q81",
                text: "What does the company produce?",
                classification: "DETAIL",
                options: {
                    A: "Cookware",
                    B: "Shoes",
                    C: "Cameras",
                    D: "Light fixtures"
                },
                correctAnswer: "B",
                translation: "회사는 무엇을 생산하는가?",
                translation_A: "조리도구",
                translation_B: "신발",
                translation_C: "카메라",
                translation_D: "조명 기구"
            },
            {
                id: "v4-p4-t08-q82",
                text: "What will the listeners most likely do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Watch a video",
                    B: "Ask questions",
                    C: "Eat a meal",
                    D: "Take a group photograph"
                },
                correctAnswer: "A",
                translation: "청자들은 다음으로 무엇을 하겠는가?",
                translation_A: "동영상 시청",
                translation_B: "질문",
                translation_C: "식사",
                translation_D: "단체 사진 촬영"
            }
        ],
        script: "We're here tonight to celebrate Fritz Schneider's outstanding service to the company on the eve of his retirement. Fritz has been with Elta Footwear since its inception, and without him, we wouldn't be where we are today. With unfailing optimism, he has provided consistent leadership to help us grow as a company. Thanks largely to his efforts, today we produce more than 25 lines of athletic footwear. We'll miss him, but we wish him well! And now, I'd like to share a short video with some highlights of Fritz's many years with Elta.",
        translation: "프리츠 슈나이더의 은퇴 전날, 회사에 기여한 뛰어난 업적을 기념하고자 오늘 밤 이 자리에 모였습니다. 프리츠는 엘타 풋웨어 창립 이래로 계속 함께했으며, 프리츠가 없었다면 오늘날 여기까지 오지 못했을 겁니다. 한결같은 낙관주의로 일관된 리더십을 제공해 회사가 성장하도록 도왔습니다. 그의 노력에 크게 힘입어 오늘날 25종 이상의 운동화를 생산하고 있습니다. 그를 그리워하겠지만 만사형통하시길 바랍니다! 이제 프리츠가 엘타와 함께한 세월을 간추린 짧은 동영상을 함께 보려고 합니다."
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p4-t08-s05",
        contextType: "C1. 일상 생활",
        questionRange: "83-85",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-83-85.mp3",
        questions: [
            {
                id: "v4-p4-t08-q83",
                text: "What does the speaker say will happen tomorrow?",
                classification: "DETAIL",
                options: {
                    A: "A roof will be repaired.",
                    B: "A pipe will be replaced.",
                    C: "A payment will be processed.",
                    D: "An application will be submitted."
                },
                correctAnswer: "B",
                translation: "화자는 내일 무슨 일이 있을 것이라고 말하는가?",
                translation_A: "지붕이 수리될 것이다.",
                translation_B: "관이 교체될 것이다.",
                translation_C: "지급이 처리될 것이다.",
                translation_D: "지원서가 제출될 것이다."
            },
            {
                id: "v4-p4-t08-q84",
                text: "Why does the speaker say, \"they'll be using loud machinery\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To reject a proposal",
                    B: "To explain a delay",
                    C: "To provide a warning",
                    D: "To make a complaint"
                },
                correctAnswer: "C",
                translation: "화자가 \"인부들이 시끄러운 기계를 사용할 겁니다\"라고 말하는 이유는?",
                translation_A: "제안을 거절하려고",
                translation_B: "지연에 대해 설명하려고",
                translation_C: "주의를 주려고",
                translation_D: "항의하려고"
            },
            {
                id: "v4-p4-t08-q85",
                text: "What does the speaker say about a permit?",
                classification: "DETAIL",
                options: {
                    A: "It has been mailed to the listener.",
                    B: "It has been denied.",
                    C: "It cost a lot of money.",
                    D: "It was granted sooner than expected."
                },
                correctAnswer: "D",
                translation: "화자는 허가증에 대해 뭐라고 말하는가?",
                translation_A: "청자에게 우편으로 발송됐다.",
                translation_B: "거부됐다.",
                translation_C: "비용이 많이 든다.",
                translation_D: "예상보다 빨리 승인됐다."
            }
        ],
        script: "This is Yuliya, the building manager. I'm calling to let you know that workers are coming tomorrow morning to replace a defective water pipe under the pavement in front of your apartment. It should only take a few hours to complete, but I know you sometimes work from home, and they'll be using loud machinery. Sorry this is such short notice—part of the pipe runs next to a telephone pole, so I was required to apply for a permit to have the work done safely. I thought approval would take at least a week, but it was issued yesterday.",
        translation: "건물 관리인 율리야입니다. 귀하의 아파트 앞 인도 밑 결함이 있는 배수관을 교체하기 위해 내일 아침 작업자들이 옵니다. 몇 시간이면 완료되지만 가끔 재택 근무를 하시는 것으로 아는데, 작업자들이 시끄러운 기계를 사용할 겁니다. 급하게 알려드려 죄송합니다만 배수관 일부가 전신주 옆으로 지나가거든요. 그래서 작업을 무사히 마치도록 허가증을 신청해야 했어요. 승인이 최소 1주일은 걸릴 거라고 생각했는데 어제 허가증이 발급됐어요."
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p4-t08-s06",
        contextType: "A1. 사무실 업무",
        questionRange: "86-88",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-86-88.mp3",
        questions: [
            {
                id: "v4-p4-t08-q86",
                text: "Where is the meeting taking place?",
                classification: "WHO_LOC",
                options: {
                    A: "At an office building",
                    B: "At a museum",
                    C: "At a hospital",
                    D: "At a hotel"
                },
                correctAnswer: "C",
                translation: "회의는 어디서 이루어지는가?",
                translation_A: "사무실 건물",
                translation_B: "박물관",
                translation_C: "병원",
                translation_D: "호텔"
            },
            {
                id: "v4-p4-t08-q87",
                text: "What problem does the speaker mention?",
                classification: "DETAIL",
                options: {
                    A: "A door to a room is locked.",
                    B: "There is a staff shortage.",
                    C: "A delivery has been delayed.",
                    D: "Wireless Internet is not available."
                },
                correctAnswer: "D",
                translation: "화자는 어떤 문제점을 언급하는가?",
                translation_A: "방문이 잠겨 있다.",
                translation_B: "인력이 부족하다.",
                translation_C: "배송이 지연됐다.",
                translation_D: "무선 인터넷을 이용할 수 없다."
            },
            {
                id: "v4-p4-t08-q88",
                text: "What does the speaker remind the listeners to do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Submit their time sheets",
                    B: "Limit their mobile phone usage",
                    C: "Share some information",
                    D: "Use an alternate product"
                },
                correctAnswer: "C",
                translation: "화자는 청자들에게 무엇을 하라고 알려 주는가?",
                translation_A: "근무 시간 기록표 제출",
                translation_B: "휴대전화 사용 제한",
                translation_C: "정보 공유",
                translation_D: "대체 제품 이용"
            }
        ],
        script: "I called this quick meeting for hospital staff. Our wireless Internet has gone down, and we are in the process of getting it restored. But don't worry—hardwired access is still available, so all doctors, nurses, and essential staff will still be able to use the desktop computers at each workstation. However, our patients will be wondering why they can't connect to the Wi-Fi. So please remember to let them know what's going on.",
        translation: "병원 직원들을 위해 짧은 회의를 소집했습니다. 우리 무선 인터넷이 다운돼서 복구 작업이 진행 중입니다. 하지만 염려 마세요. 유선 접속은 여전히 가능하니 의사, 간호사, 필수 직원 여러분은 각자 업무 장소에서 데스크탑 컴퓨터를 쓰실 수 있습니다. 그러나 환자들은 왜 와이파이 연결이 안 되는지 의아해할 겁니다. 잊지 말고 무슨 상황인지 알려 주세요."
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p4-t08-s07",
        contextType: "B3. 행사 / 연설",
        questionRange: "89-91",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-89-91.mp3",
        questions: [
            {
                id: "v4-p4-t08-q89",
                text: "What is the speaker mainly discussing?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "Updating a menu",
                    B: "Organizing a health fair",
                    C: "Planting a vegetable garden",
                    D: "Reviewing some survey results"
                },
                correctAnswer: "A",
                translation: "화자는 주로 무엇에 대해 이야기하는가?",
                translation_A: "메뉴 업데이트",
                translation_B: "건강 박람회 개최",
                translation_C: "텃밭 가꾸기",
                translation_D: "조사 결과 검토"
            },
            {
                id: "v4-p4-t08-q90",
                text: "Why does the speaker mention a recent study?",
                classification: "WHY_REASON",
                options: {
                    A: "To support her opinion",
                    B: "To suggest a process",
                    C: "To request a guest speaker",
                    D: "To publicize an event"
                },
                correctAnswer: "A",
                translation: "화자가 최근 연구를 언급한 이유는?",
                translation_A: "자신의 의견을 뒷받침하려고",
                translation_B: "절차를 제안하려고",
                translation_C: "객원 연설자를 요청하려고",
                translation_D: "행사를 홍보하려고"
            },
            {
                id: "v4-p4-t08-q91",
                text: "Why does the speaker say, \"small changes can have surprising results\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To agree with a decision",
                    B: "To reassure the listeners",
                    C: "To congratulate the listeners",
                    D: "To request some assistance"
                },
                correctAnswer: "B",
                translation: "화자가 \"작은 변화가 놀라운 결과를 가져올 수 있습니다\"라고 말하는 이유는?",
                translation_A: "결정에 동의하려고",
                translation_B: "청자들을 안심시키려고",
                translation_C: "청자들을 축하해 주려고",
                translation_D: "도움을 요청하려고"
            }
        ],
        script: "As a consulting nutritionist, I'll work with your company cafeteria to review the items that are currently sold and suggest updates. Consuming less meat is not only better for our health but is also better for the environment. And consider this interesting fact: a recent study of thousands of cafeteria meals shows that when additional vegetarian options are offered, there is a significant increase in the number of vegetarian meals consumed. Some of you have expressed concern that I might ask you to completely overhaul the entire menu. Well, small changes can have surprising results!",
        translation: "저는 자문 영양사로서 이 회사 구내식당과 협업하여 현재 판매되는 물품을 검토하고 새로운 사항을 제안할 것입니다. 고기를 덜 먹는 것은 건강에 좋을 뿐 아니라 환경에도 좋습니다. 이 흥미로운 사실을 고려해 보세요. 최근 수천 개의 구내식당 식사를 대상으로 한 연구에서는 채식 메뉴가 추가로 제공될 때 소비되는 채식 식단 수가 크게 증가하는 것을 볼 수 있습니다. 제가 전체 메뉴를 전면 개편하라고 요청할까 봐 걱정하는 분들이 계신데요. 음, 작은 변화가 놀라운 결과를 가져올 수 있습니다!"
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p4-t08-s08",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "92-94",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-92-94.mp3",
        questions: [
            {
                id: "v4-p4-t08-q92",
                text: "What type of service does the speaker's company provide?",
                classification: "DETAIL",
                options: {
                    A: "Travel planning",
                    B: "Online advertising",
                    C: "Staff recruitment",
                    D: "Inventory management"
                },
                correctAnswer: "B",
                translation: "화자의 회사는 어떤 종류의 서비스를 제공하는가?",
                translation_A: "여행 기획",
                translation_B: "온라인 광고",
                translation_C: "직원 모집",
                translation_D: "재고 관리"
            },
            {
                id: "v4-p4-t08-q93",
                text: "What does the speaker mean when he says, \"40 percent of our business comes from two clients\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "His team should be rewarded.",
                    B: "He has time to develop more projects.",
                    C: "The clients are major corporations.",
                    D: "The company needs more clients."
                },
                correctAnswer: "D",
                translation: "화자가 \"우리 일의 40퍼센트가 고객사 두 곳에서 나옵니다\"라고 말하는 의도는 무엇인가?",
                translation_A: "팀이 보상을 받아야 한다.",
                translation_B: "더 많은 프로젝트를 개발할 시간이 있다.",
                translation_C: "그 고객들은 주요 기업이다.",
                translation_D: "회사에 고객이 더 필요하다."
            },
            {
                id: "v4-p4-t08-q94",
                text: "What incentive does the company plan to offer?",
                classification: "DETAIL",
                options: {
                    A: "A discount for referrals",
                    B: "A subscription to an online magazine",
                    C: "A satisfaction guarantee",
                    D: "A certification course"
                },
                correctAnswer: "A",
                translation: "회사는 어떤 장려책을 제공할 계획인가?",
                translation_A: "소개에 대한 할인",
                translation_B: "온라인 잡지 구독권",
                translation_C: "만족 보장",
                translation_D: "자격증 취득 강좌"
            }
        ],
        script: "We've received feedback from one of our major clients. The most recent advertisements we created for social media increased traffic to our client's Web site by 20 percent, which is great. In other news, we're on track to exceed our annual goal in terms of revenue. Having said that, 40 percent of our business comes from two clients. And either could back out at any time. We plan to ask existing clients to recommend our ad services to their business contacts. As an incentive, we'll offer a discount to those whose referrals result in new business for us.",
        translation: "주요 고객 중 한 곳에서 피드백을 받았는데요. 우리가 소셜미디어용으로 만든 최근 광고가 고객사의 웹사이트 트래픽을 20퍼센트 증가시켰다고 해요. 훌륭합니다. 다른 소식으로 수익 관련해서 연간 목표 초과 달성을 착착 이루고 있어요. 그렇긴 해도 우리 일의 40퍼센트가 고객사 두 곳에서 나옵니다. 둘 중 하나라도 언제든 빠져나갈 수 있거든요. 기존 고객들에게 우리 광고 서비스를 업계 인맥에게 추천해 달라고 요청할 계획입니다. 장려책으로, 소개한 곳이 우리에게 새로운 거래로 이어지면 할인 혜택을 제공할 것입니다."
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p4-t08-s09",
        contextType: "D2. 기타 뉴스 / 팟캐스트 / 안내",
        questionRange: "95-97",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-95-97.mp3",
        image: "/images/ETS_TOEIC_4/Test_08/Part_04/v4_p4_t08_q95.png",
        questions: [
            {
                id: "v4-p4-t08-q95",
                text: "What does the speaker say about the vendors?",
                classification: "DETAIL",
                options: {
                    A: "They use sustainable practices.",
                    B: "They are offering free samples.",
                    C: "Their goods are homemade.",
                    D: "Their prices are reasonable."
                },
                correctAnswer: "A",
                translation: "화자는 판매업체들에 대해 뭐라고 말하는가?",
                translation_A: "지속 가능한 방식을 이용한다.",
                translation_B: "무료 견본을 제공한다.",
                translation_C: "제품을 손수 만든다.",
                translation_D: "가격이 적정하다."
            },
            {
                id: "v4-p4-t08-q96",
                text: "Look at the graphic. Where can the listeners purchase concert tickets?",
                classification: "GRAPHIC",
                options: {
                    A: "At location 1",
                    B: "At location 2",
                    C: "At location 3",
                    D: "At location 4"
                },
                correctAnswer: "C",
                translation: "시각 정보에 의하면, 청자들은 음악회 표를 어디서 살 수 있는가?",
                translation_A: "1번 장소",
                translation_B: "2번 장소",
                translation_C: "3번 장소",
                translation_D: "4번 장소"
            },
            {
                id: "v4-p4-t08-q97",
                text: "According to the speaker, what can be found on the festival Web site?",
                classification: "DETAIL",
                options: {
                    A: "A job listing",
                    B: "An event program",
                    C: "Safety regulations",
                    D: "Names of sponsors"
                },
                correctAnswer: "B",
                translation: "화자에 따르면, 축제 웹사이트에서 무엇을 찾을 수 있는가?",
                translation_A: "일자리 목록",
                translation_B: "행사 프로그램",
                translation_C: "안전 규정",
                translation_D: "후원자명"
            }
        ],
        script: "Welcome to the annual Chesterfield Community Festival. I have a few quick announcements. First, thank you to all of our vendors. They were selected because they use sustainable, environmentally friendly practices to produce their goods. We know protecting the environment is important to our community. Second, there are still a few tickets available for tonight's jazz concert. You can stop by Marta's Treats next to Wei Family Farms to buy a ticket. Finally, remember that we are no longer handing out paper programs. You can download the event program from our Web site at www.chesterfieldcommunityfestival.com.",
        translation: "체스터필드 커뮤니티 연례 축제에 오신 것을 환영합니다. 몇 가지 간단한 공지 사항이 있습니다. 먼저 모든 판매업체에 감사드립니다. 지속 가능하고 환경 친화적인 방식으로 제품을 생산하기 때문에 선정되었습니다. 환경을 보호하는 것이 우리 지역사회에 중요하다는 것을 알고 있으니까요. 둘째, 오늘 밤 재즈 콘서트 표가 아직 남아 있습니다. 웨이 패밀리 팜스 옆에 있는 마타 트리츠에 들러 표를 구매하실 수 있습니다. 마지막으로 저희는 더 이상 종이 프로그램을 나눠드리지 않습니다. 저희 웹사이트 www.chesterfieldcommunityfestival.com에서 행사 프로그램을 다운로드하실 수 있습니다."
    },
    {
        testId: 8,
        vol: 4,
        setId: "v4-p4-t08-s10",
        contextType: "B3. 행사 / 연설",
        questionRange: "98-100",
        audio: "/audio/ETS_TOEIC_4/Test_08/Test_08-98-100.mp3",
        image: "/images/ETS_TOEIC_4/Test_08/Part_04/v4_p4_t08_q98.png",
        questions: [
            {
                id: "v4-p4-t08-q98",
                text: "What does the speaker encourage the listeners to do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Pick up refreshments",
                    B: "Purchase a book",
                    C: "Exchange contact details",
                    D: "Volunteer for an activity"
                },
                correctAnswer: "B",
                translation: "화자는 청자들에게 무엇을 하라고 권하는가?",
                translation_A: "다과 가져오기",
                translation_B: "책 구매하기",
                translation_C: "연락처 교환하기",
                translation_D: "활동에 자원하기"
            },
            {
                id: "v4-p4-t08-q99",
                text: "What does the speaker say happened as a result of attendee feedback?",
                classification: "DETAIL",
                options: {
                    A: "Registration was conducted online.",
                    B: "A more diverse range of speakers were invited.",
                    C: "Extra charging stations were provided.",
                    D: "Another conference day was added."
                },
                correctAnswer: "D",
                translation: "화자는 참석자 피드백의 결과로 어떤 일이 일어났다고 말하는가?",
                translation_A: "등록이 온라인으로 이뤄졌다.",
                translation_B: "더욱 다양한 연설자들이 초청됐다.",
                translation_C: "추가 충전대가 제공됐다.",
                translation_D: "학회 날짜가 추가됐다."
            },
            {
                id: "v4-p4-t08-q100",
                text: "Look at the graphic. Which session's location has changed?",
                classification: "GRAPHIC",
                options: {
                    A: "Remote Workforces",
                    B: "Team Collaboration",
                    C: "Innovation Tools",
                    D: "Problem-Solving"
                },
                correctAnswer: "C",
                translation: "시각 정보에 의하면, 어떤 세션의 장소가 변경됐는가?",
                translation_A: "원격 인력",
                translation_B: "팀 협력",
                translation_C: "혁신 도구",
                translation_D: "문제 해결"
            }
        ],
        script: "I hope you enjoyed the conference's keynote speaker, Ms. Olabisi Adewale. What a phenomenal speech. If you're interested in more of what she has to say about running a business, her latest book is for sale in the lobby. It's definitely an engaging read! The rest of the conference is ahead of you now. We're excited that this year because of popular demand and all the feedback we received, we've added an additional day to the conference offerings. And before you head off to your sessions, I wanted to announce a change of location for the twelve-thirty session today. It's been moved, and the schedule board has been updated.",
        translation: "학회 기조 연설자인 올라비시 아드웨일 씨의 연설을 잘 들으셨기를 바랍니다. 정말 감탄이 나오는 연설이었죠. 업체 운영에 대해 더 많은 이야기를 듣고 싶으시다면 그녀의 최신 저서를 로비에서 판매하고 있습니다. 단연코 멋진 책입니다! 학회 나머지 일정이 여러분을 기다리고 있습니다. 올해는 많은 분들의 요청과 피드백을 반영하여 학회 일정을 하루 더 추가하게 되어 매우 기쁘게 생각합니다. 세션으로 들어가기에 앞서, 오늘 12시 30분 세션의 장소가 변경되었음을 알려드립니다. 장소가 옮겨졌으며 일정 게시판이 업데이트되었습니다."
    }
];
