import { Part4Set } from '../types';

export const test3Data: Part4Set[] = [
    {
        testId: 3,
        vol: 4,
        setId: "v4-p4-t03-s01",
        contextType: "B1. 쇼핑",
        questionRange: "71-73",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-71-73.mp3",
        questions: [
            {
                id: "v4-p4-t03-q71",
                text: "What kind of business is being advertised?",
                classification: "WHO_LOC",
                options: {
                    A: "A health-care clinic",
                    B: "A computer service store",
                    C: "An auto repair shop",
                    D: "A real estate agency"
                },
                correctAnswer: "C",
                translation: "어떤 종류의 업체를 광고하는가?",
                translation_A: "병원",
                translation_B: "컴퓨터 서비스 매장",
                translation_C: "자동차 수리점",
                translation_D: "부동산 중개업소"
            },
            {
                id: "v4-p4-t03-q72",
                text: "Why is a business celebrating?",
                classification: "WHY_REASON",
                options: {
                    A: "It has been operating for ten years.",
                    B: "It has doubled its customer base.",
                    C: "It has won an award.",
                    D: "It has opened a new location."
                },
                correctAnswer: "C",
                translation: "업체는 왜 축하하는가?",
                translation_A: "10년간 운영해 왔다.",
                translation_B: "고객층이 두 배가 늘었다.",
                translation_C: "상을 받았다.",
                translation_D: "새 지점을 열었다."
            },
            {
                id: "v4-p4-t03-q73",
                text: "What do the listeners need to do to obtain a discount?",
                classification: "DETAIL",
                options: {
                    A: "Make an appointment",
                    B: "Print out a coupon",
                    C: "Attend an open house",
                    D: "Refer a friend"
                },
                correctAnswer: "A",
                translation: "청자들이 할인을 받기 위해 무엇을 해야 하는가?",
                translation_A: "예약하기",
                translation_B: "쿠폰 출력하기",
                translation_C: "공개 행사 참석하기",
                translation_D: "친구를 소개하기"
            }
        ],
        script: "At Volkov Tire and Auto Service, we offer quality automotive maintenance and repairs at affordable prices. Looking for a dependable place to take your car? Look no further. We're proud to announce that readers of the Livingstone Valley Chronicle have awarded us with the title of Best in the Valley. To celebrate, we're offering twenty percent off all services until the end of the month. To get this deal, you must schedule an appointment, either by phone or online. Come and see why we're number one!",
        translation: "볼코브 타이어 앤 오토 서비스에서는 양질의 자동차 유지보수 및 수리 서비스를 적정한 가격에 제공합니다. 차를 맡길 만한 믿을 수 있는 곳을 찾고 계신가요? 바로 여기입니다. <리빙스톤 밸리 크로니클> 독자들이 저희 업체에 ‘밸리 최고 업체’라는 타이틀의 상을 주었다는 것을 알려드리게 되어 자랑스럽습니다. 수상을 기념하여 이번 달 말까지 모든 서비스를 20퍼센트 할인해 드립니다. 할인을 받으시려면 전화나 온라인으로 예약 일정을 잡아야 합니다. 저희가 왜 1위인지 오셔서 확인해 보세요!"
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p4-t03-s02",
        contextType: "D2. 기타 뉴스 / 팟캐스트 / 안내",
        questionRange: "74-76",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-74-76.mp3",
        questions: [
            {
                id: "v4-p4-t03-q74",
                text: "What is the podcast episode about?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "Marketing strategies",
                    B: "Commercial real estate",
                    C: "Customer loyalty",
                    D: "Staff management"
                },
                correctAnswer: "A",
                translation: "팟캐스트 에피소드는 무엇에 관한 것인가?",
                translation_A: "마케팅 전략",
                translation_B: "상업용 부동산",
                translation_C: "고객 충성도",
                translation_D: "직원 관리"
            },
            {
                id: "v4-p4-t03-q75",
                text: "What does the speaker say Ms. Bertrand is good at?",
                classification: "DETAIL",
                options: {
                    A: "Designing billboard ads",
                    B: "Solving budget problems",
                    C: "Explaining complicated ideas",
                    D: "Creating training programs"
                },
                correctAnswer: "C",
                translation: "화자는 버트랜드 씨가 무엇에 능숙하다고 말하는가?",
                translation_A: "옥외 광고 디자인",
                translation_B: "예산 문제 해결",
                translation_C: "복잡한 개념 설명",
                translation_D: "교육 프로그램 제작"
            },
            {
                id: "v4-p4-t03-q76",
                text: "What will the speaker discuss next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Breaking news",
                    B: "Survey results",
                    C: "Upcoming contests",
                    D: "Future episode topics"
                },
                correctAnswer: "B",
                translation: "화자는 다음으로 무엇에 대해 말할 것인가?",
                translation_A: "뉴스 속보",
                translation_B: "조사 결과",
                translation_C: "곧 있을 대회",
                translation_D: "향후 에피소드 주제"
            }
        ],
        script: "Today's episode of the Financial Parade Podcast is about the possibilities and limitations of marketing on social media. How can businesses improve on their marketing efforts and do a better job of reaching their target audience? To help us answer this, we are joined by Magali Bertrand, Marketing director at Blue Lane Consulting. Ms. Bertrand is a frequent guest on the show because she is good at taking complex business principles and breaking them down to offer clear, simple advice. But first, I'd like to discuss the results of my recent survey where you all shared your approaches to product placement.",
        translation: "<파이낸셜 퍼레이드 팟캐스트>의 오늘 에피소드는 소셜 미디어 마케팅의 가능성과 한계에 관한 내용입니다. 업체들은 어떻게 하면 마케팅 활동을 개선해서 광고 대상 고객에게 더 잘 다가갈 수 있을까요? 질문에 대답하기 위해 블루 레인 컨설팅의 마케팅 관리자인 매갈리 버트랜드 씨가 나와 주셨습니다. 버트랜드 씨는 저희 프로그램에서 자주 모시는 게스트이신데요, 복잡한 비즈니스 원리를 이용하여 그것을 분해해 명확하고 간결한 조언을 제공하는 데 능숙한 분이기 때문입니다. 하지만 우선, 여러분이 제품 간접 광고에 대한 접근 방법을 공유해 주신 최근 조사 결과를 먼저 얘기하고 싶습니다."
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p4-t03-s03",
        contextType: "A1. 사무실 업무",
        questionRange: "77-79",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-77-79.mp3",
        questions: [
            {
                id: "v4-p4-t03-q77",
                text: "What will be delivered next Wednesday?",
                classification: "DETAIL",
                options: {
                    A: "Office furniture",
                    B: "Color printers",
                    C: "Potted plants",
                    D: "Framed artwork"
                },
                correctAnswer: "C",
                translation: "다음 주 수요일에 무엇이 배송될 것인가?",
                translation_A: "사무용 가구",
                translation_B: "컬러 프린터",
                translation_C: "화분 식물",
                translation_D: "그림 액자"
            },
            {
                id: "v4-p4-t03-q78",
                text: "What does the speaker say about productivity?",
                classification: "DETAIL",
                options: {
                    A: "It has been improving recently.",
                    B: "It is higher in other departments.",
                    C: "It can be improved by office surroundings.",
                    D: "It can be increased by working in groups."
                },
                correctAnswer: "C",
                translation: "화자는 생산성에 대해 뭐라고 말하는가?",
                translation_A: "최근 향상됐다.",
                translation_B: "다른 부서들이 더 높다.",
                translation_C: "사무실 환경에 따라 향상될 수 있다.",
                translation_D: "그룹으로 일하면 증가할 수 있다."
            },
            {
                id: "v4-p4-t03-q79",
                text: "According to the speaker, what is available in the staff room?",
                classification: "DETAIL",
                options: {
                    A: "A catalog",
                    B: "A vending machine",
                    C: "Staff uniforms",
                    D: "Exercise equipment"
                },
                correctAnswer: "A",
                translation: "화자에 따르면, 직원실에서 무엇을 이용할 수 있는가?",
                translation_A: "카탈로그",
                translation_B: "자판기",
                translation_C: "직원 유니폼",
                translation_D: "운동기구"
            }
        ],
        script: "Next Wednesday, Arlington Landscaping will deliver the potted plants we ordered to brighten up the common areas in our office. Studies have shown that plants are great stress relievers and can increase workplace productivity. We think you'll find that this is a great improvement to our work environment. If you'd like a small plant for your desk, the company will cover the cost. To choose your plant, please check the catalog in the staff room. It has photos and care instructions.",
        translation: "다음 주 수요일에 알링턴 조경에서 우리 사무실 내 공용 구역의 분위기를 밝게 만들고자 주문한 화분을 배송해 줄 것입니다. 연구 결과를 보면 식물은 스트레스를 크게 덜어주고 직장 생산성을 높일 수 있다고 합니다. 여러분은 이것으로 우리 업무 환경이 상당히 개선되었다고 느낄 것입니다. 책상에 작은 식물을 놓고 싶으시면 회사에서 비용을 부담하겠습니다. 식물을 선택하시려면 직원실에 있는 카탈로그를 확인해 주세요. 사진과 관리 설명서가 있습니다."
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p4-t03-s04",
        contextType: "D1. 일반 뉴스",
        questionRange: "80-82",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-80-82.mp3",
        questions: [
            {
                id: "v4-p4-t03-q80",
                text: "According to the speaker, what happened three years ago?",
                classification: "DETAIL",
                options: {
                    A: "A council member was elected.",
                    B: "A local tax law changed.",
                    C: "A train station opened.",
                    D: "A business relocated."
                },
                correctAnswer: "D",
                translation: "화자에 따르면, 3년 전에 어떤 일이 있었는가?",
                translation_A: "의회 의원이 선출됐다.",
                translation_B: "지역 세법이 변경됐다.",
                translation_C: "기차역이 문을 열었다.",
                translation_D: "한 업체가 이전했다."
            },
            {
                id: "v4-p4-t03-q81",
                text: "Who is Matthew Hughes?",
                classification: "WHO_LOC",
                options: {
                    A: "A banker",
                    B: "A real estate developer",
                    C: "A government official",
                    D: "A store owner"
                },
                correctAnswer: "B",
                translation: "매튜 휴즈는 누구인가?",
                translation_A: "은행가",
                translation_B: "부동산 개발업자",
                translation_C: "공무원",
                translation_D: "매장 소유주"
            },
            {
                id: "v4-p4-t03-q82",
                text: "What will the listeners hear about next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "A sporting event",
                    B: "Street closures",
                    C: "The weather",
                    D: "Parking fines"
                },
                correctAnswer: "C",
                translation: "청자들은 다음으로 무엇에 대해 들을 것인가?",
                translation_A: "스포츠 행사",
                translation_B: "도로 폐쇄",
                translation_C: "날씨",
                translation_D: "주차 위반 벌금"
            }
        ],
        script: "In local news, the abandoned shoe factory in the central business district is finally getting a makeover. The building has been empty for three years since the factory moved to its new, larger space south of town. After hearing many proposals, the town council voted last night to sell the building to developer Matthew Hughes, who will convert it into family housing: ten modern, comfortable units with a parking garage underground. Up next, it looks like the rain is on the way out, giving way to blue skies this weekend. Samantha is here to tell us all about it.",
        translation: "지역 뉴스에 따르면, 중심 업무 지구에 있는 버려진 신발 공장이 마침내 새단장을 한다고 합니다. 건물은 공장이 시 남쪽에 있는 더 큰 새 공간으로 이전한 이후 3년간 비어 있었는데요, 시 의회는 많은 제안을 듣고 난 후 어젯밤 투표를 통해 건물을 개발업자 매튜 휴즈에게 매각하기로 했습니다. 매튜 휴즈는 공장을 주택으로 개조할 예정입니다. 지하 주차장을 갖춘 현대식의 편안한 공동주택 10채입니다. 다음으로, 이번 주말 비가 그치고 파란 하늘에 자리를 내줄 것 같습니다. 사만다가 자세히 이야기해 드립니다."
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p4-t03-s05",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "83-85",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-83-85.mp3",
        questions: [
            {
                id: "v4-p4-t03-q83",
                text: "What is the speaker discussing?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "The renovation of a train station",
                    B: "The construction of a tunnel",
                    C: "The replacement of a bridge",
                    D: "The repaving of a bicycle trail"
                },
                correctAnswer: "C",
                translation: "화자는 무엇에 대해 이야기하는가?",
                translation_A: "기차역 보수",
                translation_B: "터널 건설",
                translation_C: "교량 교체",
                translation_D: "자전거 도로 재포장"
            },
            {
                id: "v4-p4-t03-q84",
                text: "Why does the speaker say, \"this is just one of our many projects\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To propose a change of topic",
                    B: "To explain a delay",
                    C: "To praise some employees",
                    D: "To ask for help"
                },
                correctAnswer: "B",
                translation: "화자가 \"우리가 진행하는 많은 프로젝트 중 하나일 뿐입니다\"라고 말하는 이유는?",
                translation_A: "주제 변경을 제안하려고",
                translation_B: "지연의 이유를 설명하려고",
                translation_C: "일부 직원을 칭찬하려고",
                translation_D: "도움을 청하려고"
            },
            {
                id: "v4-p4-t03-q85",
                text: "What does the speaker suggest doing?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Organizing an opening ceremony",
                    B: "Scheduling a television interview",
                    C: "Revising a design",
                    D: "Meeting with the press"
                },
                correctAnswer: "D",
                translation: "화자는 무엇을 제안하는가?",
                translation_A: "개통식 준비하기",
                translation_B: "TV 인터뷰 일정 잡기",
                translation_C: "디자인 변경하기",
                translation_D: "언론과의 만남"
            }
        ],
        script: "Before we end this transportation agency meeting, I want to give you an update on the Springdale bridge replacement project. The project is moving forward. However, we are more than six months past the scheduled completion date. But this is just one of our many projects. Now, this delay is frustrating to residents who are dealing with traffic congestion. Therefore, I strongly recommend that we hold a press conference to address specific concerns.",
        translation: "이번 교통국 회의를 마치기 전에 여러분께 스프링데일 교량 교체 프로젝트의 최신 소식을 알려드리고자 합니다. 프로젝트는 진척되고 있습니다. 하지만 완공 예정일보다 6개월 이상 지났습니다. 하지만 이것은 우리가 진행하는 많은 프로젝트 중 하나일 뿐입니다. 이제, 이 지연은 교통 혼잡을 겪는 주민들에게 불만을 안기고 있습니다. 그러므로 구체적인 우려를 해소하기 위해 기자회견을 개최할 것을 강력히 권고합니다."
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p4-t03-s06",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "86-88",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-86-88.mp3",
        questions: [
            {
                id: "v4-p4-t03-q86",
                text: "According to the speaker, what will be different about today's session?",
                classification: "DETAIL",
                options: {
                    A: "It will take place outside.",
                    B: "It will be recorded.",
                    C: "Participants will work in pairs.",
                    D: "Participants will deliver presentations."
                },
                correctAnswer: "C",
                translation: "화자에 따르면, 오늘 세션은 어떤 점이 다른가?",
                translation_A: "외부에서 열린다.",
                translation_B: "녹화될 예정이다.",
                translation_C: "참가자가 둘씩 짝을 지어 진행한다.",
                translation_D: "참가자가 발표를 할 것이다."
            },
            {
                id: "v4-p4-t03-q87",
                text: "What is the topic of today's session?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "Improving communication skills",
                    B: "Updating accounting practices",
                    C: "Managing company finances",
                    D: "Recruiting qualified job candidates"
                },
                correctAnswer: "A",
                translation: "오늘 세션의 주제는 무엇인가?",
                translation_A: "의사소통 능력 향상시키기",
                translation_B: "회계 상태 업데이트하기",
                translation_C: "회사 재무 관리하기",
                translation_D: "자격을 갖춘 구직자 모집하기"
            },
            {
                id: "v4-p4-t03-q88",
                text: "What does the speaker say about the lunch?",
                classification: "DETAIL",
                options: {
                    A: "It has been donated.",
                    B: "It is vegetarian.",
                    C: "It will arrive late.",
                    D: "It will include a dessert."
                },
                correctAnswer: "A",
                translation: "화자는 점심 식사에 대해 뭐라고 말하는가?",
                translation_A: "기부를 받았다.",
                translation_B: "채식 식단이다.",
                translation_C: "늦게 도착할 것이다.",
                translation_D: "후식이 포함될 것이다."
            }
        ],
        script: "Attention, everyone. I hope you're enjoying the second day of our weekend workshop on leadership skills for entrepreneurs. During yesterday's session, we conducted a discussion about goal setting, and we did that together as a group. However, today I'll be matching you with a partner for a one-on-one discussion. So, start thinking about any improvements you'd like to make to your communication skills, because that's what you'll be sharing with each other. And later this afternoon, we'll enjoy a prepared lunch, which has been generously donated to us by Blue Star Catering Company. We're grateful to them for their support.",
        translation: "여러분께 알립니다. 기업가를 위한 리더십 기술에 관한 주말 워크숍의 둘째 날을 즐겁게 보내고 계시길 바랍니다. 어제 세션 중에 목표 설정에 관한 토론을 했는데요, 그룹 활동으로 함께 했죠. 그런데 오늘은 일대일 토론을 위해 여러분께 파트너를 정해 드리려고 합니다. 그러니 여러분의 의사소통 능력에서 어떤 점을 개선하고 싶은지 생각해 보세요. 서로 그것에 대해 의견을 나눌 것이니까요. 이후 오후에는 준비된 점심 식사를 합니다. 블루 스타 케이터링에서 아낌없이 기부해 주셨어요. 지원에 감사드립니다."
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p4-t03-s07",
        contextType: "C1. 일상 (물건 구매 등)",
        questionRange: "89-91",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-89-91.mp3",
        questions: [
            {
                id: "v4-p4-t03-q89",
                text: "Where does the speaker most likely work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a car-rental company",
                    B: "At an appliance-repair shop",
                    C: "At a car wash",
                    D: "At an auto-mechanic shop"
                },
                correctAnswer: "D",
                translation: "화자는 어디서 일하겠는가?",
                translation_A: "차량 대여업체",
                translation_B: "가전제품 수리점",
                translation_C: "세차장",
                translation_D: "자동차 정비소"
            },
            {
                id: "v4-p4-t03-q90",
                text: "What does the speaker imply when he says, \"we'll have to take a look\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "A schedule may be changed.",
                    B: "A supervisor should be consulted.",
                    C: "A cost cannot be determined yet.",
                    D: "A new policy must be followed."
                },
                correctAnswer: "C",
                translation: "화자가 \"한번 봐야 할 겁니다\"라고 말하는 의도는 무엇인가?",
                translation_A: "일정이 변경될 수 있다.",
                translation_B: "관리자와 상의해야 한다.",
                translation_C: "아직 비용을 결정할 수 없다.",
                translation_D: "새 정책을 따라야 한다."
            },
            {
                id: "v4-p4-t03-q91",
                text: "What does the speaker say about tomorrow?",
                classification: "DETAIL",
                options: {
                    A: "Some machinery will be serviced.",
                    B: "The business will close early.",
                    C: "Some new employees will start work.",
                    D: "An appointment will probably become available."
                },
                correctAnswer: "B",
                translation: "화자는 내일에 대해 뭐라고 말하는가?",
                translation_A: "일부 기계가 정비를 받는다.",
                translation_B: "업체가 일찍 문을 닫을 것이다.",
                translation_C: "신입 사원 몇 명이 업무를 시작할 것이다.",
                translation_D: "예약이 아마 가능할 것이다."
            }
        ],
        script: "This is Adisa from Car Pro returning your call. In your message, you said your sedan seems sluggish and isn't accelerating well. There are a number of things that could be causing that, and prices vary with the repair. It could be as simple as a clogged oil filter, which is inexpensive to fix. But we'll have to take a look. Oh, by the way, we're closing early tomorrow, but we can get you in the day after. We'll open at eight A.M.",
        translation: "저는 카프로의 아디사입니다. 회신 전화 드립니다. 메시지에서 귀하의 승용차가 속도가 느리고 가속이 잘 안 된다고 하셨는데요. 이런 문제를 일으킬 수 있는 것들이 많습니다. 가격은 수리에 따라 달라집니다. 오일 필터가 막힌 것처럼 간단한 것일 수도 있는데, 이건 수리 비용이 비싸지 않아요. 하지만 한번 봐야 할 겁니다. 아, 그런데 내일은 일찍 문을 닫습니다. 하지만 모레는 오실 수 있어요. 저희는 오전 8시에 문을 열 것입니다."
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p4-t03-s08",
        contextType: "A1. 사무실 업무",
        questionRange: "92-94",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-92-94.mp3",
        questions: [
            {
                id: "v4-p4-t03-q92",
                text: "What type of business does the speaker most likely work at?",
                classification: "WHO_LOC",
                options: {
                    A: "A car dealership",
                    B: "An electronics store",
                    C: "A clothing boutique",
                    D: "A furniture store"
                },
                correctAnswer: "D",
                translation: "화자는 어떤 종류의 업체에서 일하겠는가?",
                translation_A: "자동차 대리점",
                translation_B: "전자 제품 매장",
                translation_C: "의류 매장",
                translation_D: "가구점"
            },
            {
                id: "v4-p4-t03-q93",
                text: "What does the speaker imply when he says, \"that day will probably not be a profitable day for us anyway\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "Reduced profits have prevented salary increases.",
                    B: "A new sales strategy will have to be developed.",
                    C: "The listeners will be able to attend an event.",
                    D: "The listeners have been keeping accurate records."
                },
                correctAnswer: "C",
                translation: "화자가 \"그날은 어차피 우리가 수익이 안 나는 날이더군요\"라고 말하는 의도는 무엇인가?",
                translation_A: "수익 감소가 급여 인상을 막았다.",
                translation_B: "새 영업 전략이 개발되어야 할 것이다.",
                translation_C: "청자들은 행사리에 참석할 수 있을 것이다.",
                translation_D: "청자들은 정확히 기록해오고 있다."
            },
            {
                id: "v4-p4-t03-q94",
                text: "What does the speaker expect the listeners to do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Submit an order form",
                    B: "Provide some feedback",
                    C: "Sign a contract",
                    D: "Check a display area"
                },
                correctAnswer: "A",
                translation: "화자는 청자들에게 무엇을 하라고 요청하는가?",
                translation_A: "주문서 제출하기",
                translation_B: "피드백 제공하기",
                translation_C: "계약서에 서명하기",
                translation_D: "전시 공간 확인하기"
            }
        ],
        script: "Thanks, everyone, for helping set up the showroom floor with the displays of the new bedroom and living room sets. They look great. Many of you have asked for time off next Wednesday to attend the town parade. I wasn't sure I could grant those requests, but after thinking about it, I realized that that day will probably not be a profitable day for us anyway. I'll post a new employee schedule! Oh, and one more quick announcement—I need all of you to put in an order for a new uniform. It's time we replaced them.",
        translation: "여러분, 전시장에 새 침실 및 거실 세트 진열 준비를 도와주셔서 감사합니다. 정말 멋지네요. 많은 분들이 시 퍼레이드 참석을 위해 다음 주 수요일 휴가를 신청하셨는데요. 그 요청을 다 받아줄 수 있을지 확실치 않았지만, 생각해보니 그날은 어차피 수익이 안 나는 날이더군요. 새로운 근무 일정표를 게시하겠습니다! 아, 빠르게 전해 드릴 또 하나의 소식은, 여러분 모두 새 유니폼 주문을 넣어 주셔야 합니다. 교체할 시기가 됐어요."
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p4-t03-s09",
        contextType: "C2. 건강 / 여가 / 농장",
        questionRange: "95-97",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-95-97.mp3",
        image: "/images/ETS_TOEIC_4/Test_03/Part_04/v4_p4_t03_q94.png",
        questions: [
            {
                id: "v4-p4-t03-q95",
                text: "Who most likely is the speaker?",
                classification: "WHO_LOC",
                options: {
                    A: "A rideshare driver",
                    B: "A tour guide",
                    C: "A ticket agent",
                    D: "A baggage handler"
                },
                correctAnswer: "A",
                translation: "화자는 누구이겠는가?",
                translation_A: "승차 공유 운전기사",
                translation_B: "투어 가이드",
                translation_C: "매표원",
                translation_D: "수하물 담당자"
            },
            {
                id: "v4-p4-t03-q96",
                text: "Look at the graphic. Where does the speaker want to meet?",
                classification: "GRAPHIC",
                options: {
                    A: "On Market Street",
                    B: "On Twelfth Street",
                    C: "On Central Avenue",
                    D: "On Tenth Street"
                },
                correctAnswer: "A",
                translation: "시각 정보에 의하면, 화자는 어디서 만나고 싶어 하는가?",
                translation_A: "마켓 가",
                translation_B: "12번 가",
                translation_C: "센트럴 가",
                translation_D: "10번 가"
            },
            {
                id: "v4-p4-t03-q97",
                text: "How can a change be confirmed?",
                classification: "DETAIL",
                options: {
                    A: "By sending an e-mail",
                    B: "By providing an e-signature",
                    C: "By using an app",
                    D: "By returning a call"
                },
                correctAnswer: "C",
                translation: "변경은 어떻게 확정될 수 있는가?",
                translation_A: "이메일을 보내서",
                translation_B: "전자 서명을 제공해서",
                translation_C: "앱을 이용해서",
                translation_D: "회신 전화를 해서"
            }
        ],
        script: "Hi. This is Emily calling from Speedy Services. I'm picking you up from the central train station today. I see you selected a pickup location near the ticket windows, but there's heavy traffic on that street. Would it be possible to change your pickup location to right outside the station's grand concourse? It's the designated area for rideshare services. Please let me know if you agree with this change by responding to the prompt within the app. Thanks!",
        translation: "안녕하세요. 스피디 서비스의 에밀리입니다. 오늘 중앙역으로 귀하를 모시러 갈 텐데요. 픽업 장소를 매표소 근처로 선택하신 것을 확인했는데, 그 거리는 교통이 혼잡합니다. 픽업 장소를 역의 대 중앙 홀 바로 밖으로 변경할 수 있을까요? 거기는 승차 공유 서비스 지정 구역입니다. 앱의 프롬프트 메시지에 응답하셔서 변경에 동의하시는지 알려주세요. 감사합니다!"
    },
    {
        testId: 3,
        vol: 4,
        setId: "v4-p4-t03-s10",
        contextType: "C2. 건강 / 여가 / 농장",
        questionRange: "98-100",
        audio: "/audio/ETS_TOEIC_4/Test_03/Test_03-98-100.mp3",
        image: "/images/ETS_TOEIC_4/Test_03/Part_04/v4_p4_t03_q97.png",
        questions: [
            {
                id: "v4-p4-t03-q98",
                text: "Look at the graphic. Who is the speaker?",
                classification: "GRAPHIC",
                options: {
                    A: "Dr. Bajaj",
                    B: "Dr. Novikova",
                    C: "Dr. Ivanda",
                    D: "Dr. Shimizu"
                },
                correctAnswer: "B",
                translation: "시각 정보에 의하면 화자는 누구인가?",
                translation_A: "바자즈 박사",
                translation_B: "노비코바 박사",
                translation_C: "이반다 박사",
                translation_D: "시미즈 박사"
            },
            {
                id: "v4-p4-t03-q99",
                text: "What did the speaker do last year?",
                classification: "DETAIL",
                options: {
                    A: "She started her own medical practice.",
                    B: "She received an award.",
                    C: "She published a study.",
                    D: "She developed a fitness application."
                },
                correctAnswer: "C",
                translation: "화자는 작년에 무엇을 했는가?",
                translation_A: "자신의 의원을 개업했다.",
                translation_B: "상을 받았다.",
                translation_C: "연구 보고서를 발표했다.",
                translation_D: "피트니스 앱을 개발했다."
            },
            {
                id: "v4-p4-t03-q100",
                text: "According to the speaker, where can the listeners test a product?",
                classification: "DETAIL",
                options: {
                    A: "In a lobby",
                    B: "In an auditorium",
                    C: "In a gift shop",
                    D: "In a dining area"
                },
                correctAnswer: "D",
                translation: "화자에 따르면, 청자들은 어디서 제품을 시험해 볼 수 있는가?",
                translation_A: "로비",
                translation_B: "강당",
                translation_C: "기념품점",
                translation_D: "식당"
            }
        ],
        script: "Good morning. My presentation will look closely at the nutritional benefits of eating fruit. Patients often wonder whether the amount of sugar in fruit makes fruit unhealthy, and some even consider limiting it in their diet. But it's more nuanced than that. Last year, I published a paper reporting on my research on eating the current recommended serving of fruit each day versus eating less of it for weight-loss purposes. I'll spend the next 45 minutes going through the results, and then it'll be time for the coffee break. During the coffee break, feel free to wander to the dining room, where our sponsor has set up a booth to sample a new nutritional beverage.",
        translation: "안녕하세요. 제 발표에서는 과일 섭취의 영양적 혜택을 면밀히 살펴볼 것입니다. 환자들은 종종 과일 내 당분의 양 때문에 과일이 건강에 좋지 않은지 궁금해합니다. 어떤 분들은 심지어 식단에서 과일을 제한하는 것도 고려하죠. 하지만 여기에는 좀 더 복잡 미묘한 측면이 있어요. 제가 작년에 연구 보고 논문을 발표했는데요, 매일 권장량의 과일을 섭취하는 것과 체중 감소 목적으로 그보다 적게 섭취하는 것을 대조했어요. 앞으로 45분간 해당 결과를 말씀드리고, 그 이후에는 휴식 시간을 가질 것입니다. 휴식 시간 동안 식당을 자유롭게 돌아다녀 보세요. 저희 후원업체가 새로운 영양 음료를 시식하실 수 있도록 부스를 설치했습니다."
    }
];
