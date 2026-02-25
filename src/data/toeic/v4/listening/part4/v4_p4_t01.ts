import { Part4Set } from '../types';

export const test1Data: Part4Set[] = [
    {
        testId: 1,
        vol: 4,
        setId: "v4-p4-t01-s01",
        contextType: "A1. 사무실 업무",
        questionRange: "71-73",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-71-73.mp3",
        questions: [
            {
                id: "v4-p4-t01-q71",
                text: "Who has recorded the message?",
                classification: "WHO_LOC",
                options: {
                    A: "A city mayor's office",
                    B: "A maintenance department",
                    C: "An automobile dealership",
                    D: "A building management office"
                },
                correctAnswer: "D",
                translation: "누가 메시지를 녹음했는가?",
                translation_A: "시장실",
                translation_B: "유지보수 부서",
                translation_C: "자동차 대리점",
                translation_D: "건물 관리 사무소"
            },
            {
                id: "v4-p4-t01-q72",
                text: "What are the listeners asked to do?",
                classification: "DETAIL",
                options: {
                    A: "Move their vehicles",
                    B: "Pay their parking fines",
                    C: "Use an alternate entrance",
                    D: "Participate in a meeting"
                },
                correctAnswer: "A",
                translation: "청자들은 무엇을 하라고 요청받는가?",
                translation_A: "차량 이동하기",
                translation_B: "주차 위반 벌금 납부하기",
                translation_C: "다른 출입구 이용하기",
                translation_D: "회의 참석하기"
            },
            {
                id: "v4-p4-t01-q73",
                text: "What does the speaker say was mailed last week?",
                classification: "DETAIL",
                options: {
                    A: "An election ballot",
                    B: "A maintenance plan",
                    C: "A map",
                    D: "A coupon"
                },
                correctAnswer: "C",
                translation: "화자는 지난주에 무엇을 우편으로 보냈다고 말하는가?",
                translation_A: "선거 투표용지",
                translation_B: "유지보수 계획",
                translation_C: "약도",
                translation_D: "쿠폰"
            }
        ],
        script: "You have reached the information line for the Cranbury Apartments management office. On Monday, April twelfth, maintenance work will begin to repave the entire parking area adjacent to our building's main entrance. All Cranbury residents should move their vehicles from their designated parking spots before eight A.M. on Monday. Any vehicle still in its spot after eight A.M. will be towed at the owner's expense. A map of alternate parking sites was mailed to residents last week and is also posted in the building lobby.",
        translation: "크랜버리 아파트 관리 사무소 안내 전화입니다. 4월 12일 월요일에는 건물 정문에 인접한 주차 구역 전체를 재포장하는 보수 작업이 시작됩니다. 모든 크랜버리 주민께서는 월요일 오전 8시까지 지정 주차 구역에서 차량을 옮겨 주셔야 합니다. 오전 8시 이후 주차 구역에 그대로 있는 차량은 소유자 부담으로 견인될 것입니다. 지난주에 주민 여러분께 대체 주차장 약도를 우편으로 보냈으며 건물 로비에도 게시되어 있습니다."
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p4-t01-s02",
        contextType: "C2. 건강 / 여가 / 농장",
        questionRange: "74-76",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-74-76.mp3",
        questions: [
            {
                id: "v4-p4-t01-q74",
                text: "What is the topic of the episode?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "Garden landscaping",
                    B: "Window installation",
                    C: "Roof maintenance",
                    D: "Kitchen renovations"
                },
                correctAnswer: "C",
                translation: "에피소드 주제는 무엇인가?",
                translation_A: "정원 조경",
                translation_B: "창문 설치",
                translation_C: "지붕 유지보수",
                translation_D: "주방 개조"
            },
            {
                id: "v4-p4-t01-q75",
                text: "What does the speaker emphasize about some tools?",
                classification: "DETAIL",
                options: {
                    A: "They should be cleaned regularly.",
                    B: "They should be of high quality.",
                    C: "They were recently invented.",
                    D: "They can be easily stored."
                },
                correctAnswer: "B",
                translation: "화자는 도구에 대해 어떤 점을 강조하는가?",
                translation_A: "정기적으로 닦아야 한다.",
                translation_B: "품질이 좋아야 한다.",
                translation_C: "최근 발명됐다.",
                translation_D: "쉽게 보관할 수 있다."
            },
            {
                id: "v4-p4-t01-q76",
                text: "What does the speaker recommend doing every year?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Treating some wood",
                    B: "Consulting an electrician",
                    C: "Taking some photos",
                    D: "Draining some water"
                },
                correctAnswer: "C",
                translation: "화자는 매년 무엇을 하라고 권장하는가?",
                translation_A: "나무에 화학 처리를 하기",
                translation_B: "전기 기사에게 상담하기",
                translation_C: "사진 찍기",
                translation_D: "물 빼내기"
            }
        ],
        script: "Welcome to Your House Works. On today's episode, we'll go over how you can maintain and make minor repairs to the roof of your home. The first thing to do is to invest in a few special tools, like a trowel and crowbar. It's important to choose some that are high quality because you'll use them for many years. With your trowel and some roof cement, you can seal any cracks or chips. The crowbar will help you remove loose shingles that you can then replace. Now, I highly recommend you take photos of your roof every year so that you can track its overall condition.",
        translation: "<유어 하우스 웍스>입니다. 오늘 에피소드에서는 여러분의 집 지붕을 유지보수하고 사소한 수리를 하는 방법을 살펴볼 예정입니다. 첫 번째로 할 일은 모종삽이나 쇠지레 같은 특수 도구에 투자하는 겁니다. 몇 년 쓰실 테니 질 좋은 물건을 선택하는 것이 중요합니다. 모종삽과 지붕 시멘트가 있으면 어떤 금이 가거나 깨진 곳도 메울 수 있습니다. 쇠지레는 헐거워진 지붕널을 제거하고 교체할 수 있게 해 줍니다. 이제, 전반적인 상태를 추적할 수 있도록 매년 지붕 사진을 찍으실 것을 적극 추천합니다."
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p4-t01-s03",
        contextType: "C2. 건강 / 여가 / 농장",
        questionRange: "77-79",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-77-79.mp3",
        questions: [
            {
                id: "v4-p4-t01-q77",
                text: "Who most likely is the speaker?",
                classification: "WHO_LOC",
                options: {
                    A: "A radio show host",
                    B: "A tour guide",
                    C: "A sales associate",
                    D: "A professor"
                },
                correctAnswer: "B",
                translation: "화자는 누구이겠는가?",
                translation_A: "라디오 프로그램 진행자",
                translation_B: "투어 가이드",
                translation_C: "영업사원",
                translation_D: "교수"
            },
            {
                id: "v4-p4-t01-q78",
                text: "What will happen at two o'clock?",
                classification: "DETAIL",
                options: {
                    A: "A lecture will begin.",
                    B: "A demonstration will be given.",
                    C: "An interview will be conducted.",
                    D: "A park will close."
                },
                correctAnswer: "A",
                translation: "2시에 어떤 일이 있을 것인가?",
                translation_A: "강연이 시작된다.",
                translation_B: "시연이 진행된다.",
                translation_C: "인터뷰가 진행된다.",
                translation_D: "공원이 문을 닫는다."
            },
            {
                id: "v4-p4-t01-q79",
                text: "What is Orchid Caretakers?",
                classification: "DETAIL",
                options: {
                    A: "A book",
                    B: "An album",
                    C: "A film",
                    D: "A magazine"
                },
                correctAnswer: "C",
                translation: "<난초를 가꾸는 사람들>은 무엇인가?",
                translation_A: "책",
                translation_B: "앨범",
                translation_C: "영화",
                translation_D: "잡지"
            }
        ],
        script: "Thanks again for joining me on today's tour of the beautiful Wallingford Conservatory. I hope you enjoyed seeing and learning about the many species of plants and flowers we care for here. As I mentioned at the beginning of the tour, world-renowned botanist Samantha Hughes will be giving a lecture on the care of flowering orchid plants at two o'clock in the community room. I recommend attending. Samantha's work has also been featured in a documentary film called Orchid Caretakers, which you can purchase through the conservatory's online gift shop. I watched it recently and learned many new things about the orchid species we have right here at the conservatory.",
        translation: "오늘 아름다운 윌링포드 온실 견학을 함께해 주셔서 다시 한번 감사드립니다. 이곳에서 가꾸는 많은 종의 식물과 꽃을 보고 배우는 것이 즐거우셨기를 바랍니다. 견학 시작 때 말씀드렸듯이, 2시에 커뮤니티룸에서 세계적으로 유명한 식물학자 사만다 휴스 씨가 꽃을 피우는 난초 관리에 대해 강연할 예정인데요. 참석을 권장합니다. 사만다 씨의 작품은 <난초를 가꾸는 사람들>이라는 다큐멘터리 영화에도 등장한 바 있습니다. 온실의 온라인 기념품점에서 구입하실 수 있습니다. 저는 최근에 시청했는데 이곳 온실에 있는 난초 종에 대해 새로운 사실을 많이 배웠어요."
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p4-t01-s04",
        contextType: "B3. 행사 / 연설",
        questionRange: "80-82",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-80-82.mp3",
        questions: [
            {
                id: "v4-p4-t01-q80",
                text: "What event is taking place?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "A fund-raising concert",
                    B: "A sports competition",
                    C: "A play rehearsal",
                    D: "An awards ceremony"
                },
                correctAnswer: "A",
                translation: "어떤 행사가 열리는가?",
                translation_A: "모금 음악회",
                translation_B: "스포츠 대회",
                translation_C: "연극 리허설",
                translation_D: "시상식"
            },
            {
                id: "v4-p4-t01-q81",
                text: "What does the organization plan to do?",
                classification: "DETAIL",
                options: {
                    A: "Change a policy",
                    B: "Repair a building",
                    C: "Select a winner",
                    D: "Sponsor a team"
                },
                correctAnswer: "B",
                translation: "해당 단체는 무엇을 할 계획인가?",
                translation_A: "정책 변경",
                translation_B: "건물 수리",
                translation_C: "우승자 선정",
                translation_D: "팀 후원"
            },
            {
                id: "v4-p4-t01-q82",
                text: "What does the speaker encourage the listeners to do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Order tickets early",
                    B: "Visit a community center",
                    C: "Purchase refreshments",
                    D: "Donate clothing"
                },
                correctAnswer: "C",
                translation: "화자는 청자들에게 무엇을 하라고 권하는가?",
                translation_A: "표를 일찍 주문하기",
                translation_B: "커뮤니티 센터 방문하기",
                translation_C: "다과 구입하기",
                translation_D: "의류 기부하기"
            }
        ],
        script: "Before the benefit concert begins, I want to thank all of you for supporting the Hillcaster Community Center. As you know, our facilities have been in need of some repairs for quite a while. So far, we've raised 5,000 dollars in ticket sales, but we haven't quite reached our goal yet. So during the concert, I want to encourage you to buy food and drinks from the concession stand. Eighty percent of the proceeds will go to construction at the Hillcaster Community Center. Enjoy the music!",
        translation: "자선 음악회를 시작하기 전에 힐캐스터 커뮤니티 센터를 지원해 주신 여러분께 감사의 말씀을 전하고 싶습니다. 아시다시피 저희 시설은 꽤 오랫동안 수리가 필요했어요. 지금까지 표 판매로 5,000달러를 모금했지만 아직 목표에 채 미치지 못했습니다. 그래서 여러분께 음악회 도중 매점에서 음식과 음료를 사 달라고 말씀드리고 싶어요. 수익금의 80%는 힐캐스터 커뮤니티 센터 공사에 쓰입니다. 즐겁게 음악 감상하세요!"
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p4-t01-s05",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "83-85",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-83-85.mp3",
        questions: [
            {
                id: "v4-p4-t01-q83",
                text: "What is the topic of the workshop?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "Time management",
                    B: "Public speaking",
                    C: "Leadership skills",
                    D: "Professional networking"
                },
                correctAnswer: "A",
                translation: "워크숍의 주제는 무엇인가?",
                translation_A: "시간 관리",
                translation_B: "대중 연설",
                translation_C: "리더십 기술",
                translation_D: "직업적 인맥 쌓기"
            },
            {
                id: "v4-p4-t01-q84",
                text: "What does the speaker imply when he says, \"Erina's at the back of the room\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "A guest speaker has just arrived.",
                    B: "Assistance is available.",
                    C: "Attendees should speak clearly and loudly.",
                    D: "An extra chair should be provided."
                },
                correctAnswer: "B",
                translation: "화자가 \"에리나가 회의실 뒤쪽에 있습니다\"라고 말하는 의도는 무엇인가?",
                translation_A: "객원 연설자가 막 도착했다.",
                translation_B: "도움을 받을 수 있다.",
                translation_C: "참석자들은 명확하고 크게 이야기해야 한다.",
                translation_D: "여분의 의자가 제공되어야 한다."
            },
            {
                id: "v4-p4-t01-q85",
                text: "What will the listeners do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Sign their names on a list",
                    B: "Take a break",
                    C: "Participate in an introductory activity",
                    D: "Fill out a questionnaire"
                },
                correctAnswer: "C",
                translation: "청자들은 다음으로 무엇을 할 것인가?",
                translation_A: "목록에 서명하기",
                translation_B: "휴식 취하기",
                translation_C: "소개하는 활동에 참가하기",
                translation_D: "설문지 작성하기"
            }
        ],
        script: "Thank you all for attending today's workshop. Erina Kimura and I will be conducting the session, and we'll be focusing on using time efficiently as a business owner. Planning and spending your time wisely is a key factor to business success. During the presentation, I'll be referring to documents from the packet you were handed as you arrived. If you don't have one yet, Erina's at the back of the room. OK then, to start off, we'll do an exercise to get to know one another better.",
        translation: "오늘 워크숍에 참석해 주신 모든 분들께 감사드립니다. 에리나 키무라와 제가 세션을 진행할 예정이며, 사업주로서 시간을 효율적으로 활용하는 부분에 중점을 둘 것입니다. 시간을 현명하게 계획하고 사용하는 것은 사업 성공의 핵심 요소입니다. 발표 중에 여러분이 도착했을 때 받은 봉투에 있는 서류를 참조할 것입니다. 아직 없으시다면 에리나가 회의실 뒤쪽에 있습니다. 자, 그럼 먼저 서로 더 잘 알아갈 수 있는 활동을 해 보겠습니다."
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p4-t01-s06",
        contextType: "C2. 건강 / 여가 / 농장",
        questionRange: "86-88",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-86-88.mp3",
        questions: [
            {
                id: "v4-p4-t01-q86",
                text: "What is a historical site famous for?",
                classification: "DETAIL",
                options: {
                    A: "Its defensive walls",
                    B: "Its royal inhabitants",
                    C: "An event that happened there",
                    D: "Some artwork"
                },
                correctAnswer: "D",
                translation: "사적지는 무엇으로 유명한가?",
                translation_A: "방어벽",
                translation_B: "왕실 사람들",
                translation_C: "그곳에서 있었던 행사",
                translation_D: "예술 작품"
            },
            {
                id: "v4-p4-t01-q87",
                text: "Why does the speaker apologize?",
                classification: "WHY_REASON",
                options: {
                    A: "The listeners cannot take pictures.",
                    B: "An area is closed to the listeners.",
                    C: "There is no gift shop.",
                    D: "A tour started late."
                },
                correctAnswer: "A",
                translation: "화자가 사과하는 이유는?",
                translation_A: "청자들이 사진을 찍을 수 없다.",
                translation_B: "청자들에게 구역이 폐쇄되었다.",
                translation_C: "기념품점이 없다.",
                translation_D: "투어가 늦게 시작됐다."
            },
            {
                id: "v4-p4-t01-q88",
                text: "What does the speaker ask the listeners to do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Show their tickets",
                    B: "Put on protective clothing",
                    C: "Use some handrails",
                    D: "Speak quietly"
                },
                correctAnswer: "C",
                translation: "화자는 청자들에게 무엇을 하라고 요청하는가?",
                translation_A: "표 제시하기",
                translation_B: "보호복 착용하기",
                translation_C: "난간 이용하기",
                translation_D: "조용히 말하기"
            }
        ],
        script: "At this site, archaeologists have uncovered the remains of a fifth-century marketplace with colorful mosaic tiles on the walls. You'll notice how vibrant the colors are, even after all these centuries. This is what the ruins are most famous for. You can still see intricate details in the artists' pictures of scenes from daily life. Now, to protect the mosaics, a roof has been constructed over the area, and the lights are dim. And I'm sorry, but taking photos is not allowed, as the flash would damage the tiles. As we proceed, please hold on to the handrails on either side. They'll help you stay on the path and protect the ruins around us.",
        translation: "이곳에서 고고학자들은 벽에 다채로운 모자이크 타일이 붙어 있는 5세기 장터 유적을 찾아냈습니다. 몇 세기가 지났음에도 불구하고 색깔이 얼마나 선명한지 확인하실 수 있을 거예요. 이 유적은 바로 이것으로 가장 유명합니다. 일상 생활의 모습을 담은 화가들의 그림에서 복잡한 디테일을 보실 수 있을 겁니다. 지금은 모자이크를 보호하기 위해 이 구역 위에 지붕이 세워져 있고 조명은 어둡습니다. 그리고 죄송하지만 사진 촬영은 허용되지 않습니다. 플래시가 타일을 손상시킬 수 있어서요. 이동하면서 한쪽 난간을 꼭 잡아주세요. 통로를 벗어나지 않게 해줄 것이고 주변 유적을 보호할 수 있도록 해 줄 겁니다."
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p4-t01-s07",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "89-91",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-89-91.mp3",
        questions: [
            {
                id: "v4-p4-t01-q89",
                text: "What is the speaker mainly discussing?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "An advertising campaign",
                    B: "A market expansion",
                    C: "Some contract negotiations",
                    D: "Some audit procedures"
                },
                correctAnswer: "A",
                translation: "화자는 주로 무엇에 대해 이야기하는가?",
                translation_A: "광고 캠페인",
                translation_B: "시장 확대",
                translation_C: "계약 협상",
                translation_D: "감사 절차"
            },
            {
                id: "v4-p4-t01-q90",
                text: "What does the speaker imply when he says, \"this is a priority\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "Overtime pay has been approved.",
                    B: "A deadline must be met.",
                    C: "A client expressed concern.",
                    D: "A supervisor will be observing closely."
                },
                correctAnswer: "B",
                translation: "화자가 \"이것이 우선입니다\"라고 말하는 의도는 무엇인가?",
                translation_A: "초과 근무 수당이 승인됐다.",
                translation_B: "마감 기한을 맞춰야 한다.",
                translation_C: "고객이 우려를 표했다.",
                translation_D: "관리자가 면밀히 관찰할 것이다."
            },
            {
                id: "v4-p4-t01-q91",
                text: "What will the listeners do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "View a presentation",
                    B: "Review a budget",
                    C: "Revise some work",
                    D: "Do some research"
                },
                correctAnswer: "C",
                translation: "청사들은 다음으로 무엇을 할 것인가?",
                translation_A: "발표 보기",
                translation_B: "예산 검토하기",
                translation_C: "작업물 수정하기",
                translation_D: "조사하기"
            }
        ],
        script: "As you all know, our agency's just won an important contract with Parker Auto Parts Company. We'll be developing two 30-second ads for local radio stations to be released next month and two additional 20-second ads for the following month. Now, I know it's a tight schedule, but this is a priority. The client has actually started trying to work on this internally, so there's a rough ad we can start editing. Let's work on that now.",
        translation: "모두 아시는 것처럼, 우리 대행사가 파커 자동차 부품회사와의 중요한 계약을 따냈습니다. 우리는 다음 달 지역 라디오 방송국에서 공개될 30초짜리 광고 두 편과 그 다음 달에 공개될 20초짜리 추가 광고 두 편을 개발할 예정입니다. 자, 빡빡한 일정이라는 것은 알지만 이것이 우선입니다. 사실 고객이 내부에서 이 건을 작업하기 시작해서 우리가 편집 작업을 시작할 수 있는 광고 초안이 있습니다. 지금 그것을 작업해 봅시다."
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p4-t01-s08",
        contextType: "A1. 사무실 업무",
        questionRange: "92-94",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-92-94.mp3",
        questions: [
            {
                id: "v4-p4-t01-q92",
                text: "Where do the listeners most likely work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a hospital",
                    B: "At a restaurant",
                    C: "At a grocery store",
                    D: "At an electronics store"
                },
                correctAnswer: "A",
                translation: "청자들은 어디서 일하겠는가?",
                translation_A: "병원",
                translation_B: "음식점",
                translation_C: "식료품점",
                translation_D: "전자 제품 매장"
            },
            {
                id: "v4-p4-t01-q93",
                text: "What is the main purpose of the talk?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "To make a request",
                    B: "To address staff complaints",
                    C: "To present a new schedule",
                    D: "To explain a technical process"
                },
                correctAnswer: "B",
                translation: "담화의 주 목적은?",
                translation_A: "요청하는 것",
                translation_B: "직원 불만 사항을 해결하는 것",
                translation_C: "새 일정을 제시하는 것",
                translation_D: "기술적 절차를 설명하는 것"
            },
            {
                id: "v4-p4-t01-q94",
                text: "What does the speaker imply when she says, \"That will require management approval\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "A process has not been followed.",
                    B: "The listeners may be asked to work extra shifts.",
                    C: "The listeners should contact a manager.",
                    D: "A change will not be immediate."
                },
                correctAnswer: "D",
                translation: "화자가 \"경영진의 승인이 필요합니다\"라고 말하는 의도는 무엇인가?",
                translation_A: "절차를 따르지 않았다.",
                translation_B: "청자들에게 추가 교대 근무를 요청할 수도 있다.",
                translation_C: "청자들은 관리자에게 연락해야 한다.",
                translation_D: "변경은 즉시 이뤄지지 않을 것이다."
            }
        ],
        script: "Excuse me, nurses. Your attention please. I've been receiving complaints about the free snacks in the hospital break rooms. Some people have mentioned that they don't like the selection of snacks, and some have said that they don't get to eat them at all because they're gone by the time the evening shift starts. So I was thinking about putting some money into each of your staff spending accounts every month so that you can buy the snacks you want at the hospital cafeteria. That will require management approval, but I'll keep you posted.",
        translation: "잠시만요, 간호사 여러분. 주목해 주세요. 병원 휴게실에 있는 무료 간식에 대한 불만이 계속 접수되고 있습니다. 어떤 분들은 간식 종류가 마음에 들지 않는다고 하고, 어떤 분들은 저녁 교대 근무를 시작할 때쯤엔 다 사라지고 없어서 먹지 못한다고 합니다. 그래서 병원 매점에서 원하는 간식을 살 수 있도록 매달 각 직원의 지출 계좌에 일정 금액을 입금해 드리는 것을 생각 중입니다. 경영진의 승인이 필요합니다. 계속 소식을 전해 드리겠습니다."
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p4-t01-s09",
        contextType: "C2. 건강 / 여가 / 농장",
        questionRange: "95-97",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-95-97.mp3",
        image: "/images/ETS_TOEIC_4/Test_01/Part_04/v4_p4_t01_q94.png",
        questions: [
            {
                id: "v4-p4-t01-q95",
                text: "According to the speaker, what was recently completed?",
                classification: "DETAIL",
                options: {
                    A: "A company reorganization",
                    B: "A park renovation",
                    C: "A volunteer training",
                    D: "A conservation project"
                },
                correctAnswer: "B",
                translation: "화자에 따르면, 최근 무엇이 완료됐는가?",
                translation_A: "회사 조직 개편",
                translation_B: "공원 보수",
                translation_C: "자원봉사자 교육",
                translation_D: "자연 보호 프로젝트"
            },
            {
                id: "v4-p4-t01-q96",
                text: "Look at the graphic. Where does the speaker say refreshments will be served?",
                classification: "GRAPHIC",
                options: {
                    A: "Location 1",
                    B: "Location 2",
                    C: "Location 3",
                    D: "Location 4"
                },
                correctAnswer: "A",
                translation: "시각 정보에 의하면, 화자는 어디서 다과를 제공할 것이라고 말하는가?",
                translation_A: "1번 장소",
                translation_B: "2번 장소",
                translation_C: "3번 장소",
                translation_D: "4번 장소"
            },
            {
                id: "v4-p4-t01-q97",
                text: "What are the listeners reminded to do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Complete a survey",
                    B: "Donate some money",
                    C: "Join an organization",
                    D: "Post some photographs"
                },
                correctAnswer: "D",
                translation: "청자들에게 무엇을 하라고 상기시키는가?",
                translation_A: "설문 작성하기",
                translation_B: "돈 기부하기",
                translation_C: "단체 가입하기",
                translation_D: "사진 게시하기"
            }
        ],
        script: "As mayor of Lakeville, I'm pleased to welcome you to the celebration for our town's newly renovated Lakeville Park. There are a lot of new areas to explore, so we've planned a short hike. We'll be walking around the pond and along the renovated walking trail. We'll end our walk on the hill on the north side of the park. There we'll be having some free snacks and ice cream. For those of you taking photos, don't forget to post them on the city's Web site. We'd like to commemorate this special day.",
        translation: "레이크빌 시장으로서 새롭게 보수한 레이크빌 공원의 기념 행사에 여러분을 초대하게 되어 기쁘게 생각합니다. 답사할 새 구역이 많아서 간단한 하이킹을 계획해 보았습니다. 연못 근처와 보수한 산책로를 따라 걸을 예정입니다. 산책은 공원 북쪽 언덕에서 끝납니다. 거기서 무료 간식과 아이스크림을 먹습니다. 사진을 찍는 분들은 잊지 말고 시 웹사이트에 게시해 주세요. 이 특별한 날을 기념하고자 합니다."
    },
    {
        testId: 1,
        vol: 4,
        setId: "v4-p4-t01-s10",
        contextType: "C2. 건강 / 여가 / 농장",
        questionRange: "98-100",
        audio: "/audio/ETS_TOEIC_4/Test_01/Test_01-98-100.mp3",
        image: "/images/ETS_TOEIC_4/Test_01/Part_04/v4_p4_t01_q97.png",
        questions: [
            {
                id: "v4-p4-t01-q98",
                text: "What is the topic of today's lecture?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "When to harvest crops",
                    B: "Where to plant trees",
                    C: "How to grow vegetables",
                    D: "Which flowers need more sun"
                },
                correctAnswer: "C",
                translation: "오늘 강의의 주제는 무엇인가?",
                translation_A: "작물 수확 시기",
                translation_B: "나무 심을 장소",
                translation_C: "채소 기르는 방법",
                translation_D: "햇빛이 더 많이 필요한 꽃"
            },
            {
                id: "v4-p4-t01-q99",
                text: "Look at the graphic. At what depth should samples be collected this month?",
                classification: "GRAPHIC",
                options: {
                    A: "12 inches",
                    B: "4 inches",
                    C: "6 inches",
                    D: "8 inches"
                },
                correctAnswer: "A",
                translation: "시각 정보에 의하면, 이번 달은 어떤 깊이로 시료를 수집해야 하는가?",
                translation_A: "12인치",
                translation_B: "4인치",
                translation_C: "6인치",
                translation_D: "8인치"
            },
            {
                id: "v4-p4-t01-q100",
                text: "What does the speaker encourage the listeners to do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Turn off mobile phones",
                    B: "Have some refreshments",
                    C: "Purchase some seeds",
                    D: "Sign up for a mailing list"
                },
                correctAnswer: "D",
                translation: "화자는 청사들에게 무엇을 하라고 권장하는가?",
                translation_A: "휴대전화 끄기",
                translation_B: "다과 즐기기",
                translation_C: "종자 구매하기",
                translation_D: "우편물 수신 신청하기"
            }
        ],
        script: "Thanks, everyone, for attending today's free public lecture, sponsored by the Springfield Farmers' Association. So, we've received lots of requests for information on growing a vegetable garden. People want to know how to keep their garden healthy and get the vegetables they want. The first thing we recommend is regular soil testing. Since this is September, all soil samples in the next six weeks should be taken from the same depth, as seen on this chart. Oh, and before you leave today, please sign up for our mailing list to stay informed of future lectures.",
        translation: "여러분, 스프링필드 농부 협회에서 후원하는 오늘의 무료 공개 강의에 참석해 주셔서 감사합니다. 자, 텃밭 가꾸기에 관한 정보를 달라는 요청을 많이 받았는데요. 사람들은 텃밭을 건강하게 유지하고 원하는 채소를 얻는 방법을 알고 싶어 합니다. 추천하는 첫 번째 방법은 정기적인 토양 검사인데요. 지금이 9월이니 앞으로 6주간 모든 토양 시료는 이 도표에 보이는 것처럼 같은 깊이에서 채취해야 해요. 아, 오늘 가시기 전에 우편물 수신을 신청해서 향후 강의 정보를 계속 받으시기 바랍니다."
    }
];
