import { Part4Set } from '../types';

export const test2Data: Part4Set[] = [
    {
        testId: 2,
        vol: 4,
        setId: "v4-p4-t02-s01",
        contextType: "B1. 쇼핑",
        questionRange: "71-73",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-71-73.mp3",
        questions: [
            {
                id: "v4-p4-t02-q71",
                text: "Who most likely is the speaker?",
                classification: "WHO_LOC",
                options: {
                    A: "An art gallery owner",
                    B: "A hairstylist",
                    C: "A clothing designer",
                    D: "A jewelry maker"
                },
                correctAnswer: "D",
                translation: "화자는 누구이겠는가?",
                translation_A: "화랑 소유주",
                translation_B: "헤어스타일리스트",
                translation_C: "의류 디자이너",
                translation_D: "보석 제작자"
            },
            {
                id: "v4-p4-t02-q72",
                text: "Why did the speaker include a special gift?",
                classification: "WHY_REASON",
                options: {
                    A: "Because the listener is a new customer",
                    B: "Because the listener is celebrating a special occasion",
                    C: "Because the listener is a loyal customer",
                    D: "Because the listener placed a large order"
                },
                correctAnswer: "C",
                translation: "화자는 왜 특별 선물을 넣었는가?",
                translation_A: "청자가 신규 고객이라서",
                translation_B: "청자가 특별한 날을 기념하고 있어서",
                translation_C: "청자가 단골 고객이라서",
                translation_D: "청자가 대량 주문을 넣어서"
            },
            {
                id: "v4-p4-t02-q73",
                text: "Why is the listener asked to return a phone call?",
                classification: "WHY_REASON",
                options: {
                    A: "To give feedback",
                    B: "To confirm receipt of an order",
                    C: "To update a payment method",
                    D: "To provide an address"
                },
                correctAnswer: "A",
                translation: "청자는 왜 전화 회신 요청을 받는가?",
                translation_A: "피드백을 달라고",
                translation_B: "주문 접수를 확인해 달라고",
                translation_C: "결제 방식을 업데이트해 달라고",
                translation_D: "주소를 제공해 달라고"
            }
        ],
        script: "Hi, Amina. This is Sabine calling from Blue Drop Creations. I just put the earrings and necklaces that you ordered from me in the mail. Because you've been a customer for over ten years, I've also included a special gift in the package for you. It's a case for your jewelry. This is a new product that I'm starting to offer, so please call me back after you receive it. I'd really like to hear your thoughts on it.",
        translation: "안녕하세요, 아미나. 블루 드롭 크리에이션즈의 사빈입니다. 주문하신 귀걸이와 목걸이를 방금 우편으로 부쳤습니다. 10년 넘게 고객이 되어 주셨기에 소포에 특별 선물도 넣었는데요, 보석함입니다. 새롭게 선보이기 시작한 신제품이에요. 받으신 후에 전화 주세요. 어떻게 생각하시는지 무척 알고 싶습니다."
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p4-t02-s02",
        contextType: "C1. 일상 (물건 구매 등)",
        questionRange: "74-76",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-74-76.mp3",
        questions: [
            {
                id: "v4-p4-t02-q74",
                text: "What does the listener want to do?",
                classification: "DETAIL",
                options: {
                    A: "Hire a caterer",
                    B: "Purchase a painting",
                    C: "Have a printer repaired",
                    D: "Have a photograph framed"
                },
                correctAnswer: "D",
                translation: "청자는 무엇을 하고 싶어 하는가?",
                translation_A: "케이터링 업체 고용하기",
                translation_B: "그림 구매하기",
                translation_C: "프린터 수리하기",
                translation_D: "사진을 액자에 넣기"
            },
            {
                id: "v4-p4-t02-q75",
                text: "What does the speaker expect the listener to do on a Web site?",
                classification: "ACTION_NEXT",
                options: {
                    A: "View a list of prices",
                    B: "Place an order",
                    C: "Schedule a time to meet",
                    D: "Read customer reviews"
                },
                correctAnswer: "B",
                translation: "화자는 청자가 웹사이트에서 무엇을 하기를 기대하는가?",
                translation_A: "가격 목록 확인하기",
                translation_B: "주문 넣기",
                translation_C: "만날 시간 잡기",
                translation_D: "고객 후기 읽기"
            },
            {
                id: "v4-p4-t02-q76",
                text: "What is included for an extra fee?",
                classification: "DETAIL",
                options: {
                    A: "Shipping",
                    B: "An artist's signature",
                    C: "A newsletter",
                    D: "A warranty"
                },
                correctAnswer: "D",
                translation: "추가 요금에는 무엇이 포함되는가?",
                translation_A: "배송",
                translation_B: "화가 사인",
                translation_C: "소식지",
                translation_D: "품질 보증서"
            }
        ],
        script: "Good morning, this is Brandon from Dakota Framing Company, returning your call. We received your voicemail about wanting to frame a wedding picture. There is no need to print the photo yourself. We prefer that you e-mail us a digital copy. So, to answer your question, you can complete the whole order online. Just visit our Web site, where you'll fill in your choices for photo size and the frame and upload your photo. And for a small extra cost, we'll guarantee to replace your frame in case of damage. Please be sure to check that box when you order.",
        translation: "안녕하세요. 다코타 액자 회사의 브랜든인데요. 회신 전화 드립니다. 결혼 사진을 액자에 넣고 싶으시다는 음성 메시지 잘 받았습니다. 직접 사진을 출력하실 필요는 없어요. 저희에게 디지털 사본을 이메일로 보내주시는 것이 더 좋습니다. 질문에 답변 드리자면 모든 주문을 온라인으로 완료하실 수 있습니다. 저희 웹사이트를 방문하셔서 사진 크기와 액자를 선택하고 사진을 업로드하시면 됩니다. 비용을 조금 더 지불하시면 액자 손상 시 교체를 보증합니다. 주문하실 때 체크박스를 꼭 확인해 주세요."
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p4-t02-s03",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "77-79",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-77-79.mp3",
        questions: [
            {
                id: "v4-p4-t02-q77",
                text: "Who are the listeners?",
                classification: "WHO_LOC",
                options: {
                    A: "Hotel receptionists",
                    B: "Health-care staff",
                    C: "Customer-service representatives",
                    D: "Fitness trainers"
                },
                correctAnswer: "B",
                translation: "청자들은 누구이겠는가?",
                translation_A: "호텔 접수 담당자",
                translation_B: "의료 서비스 직원",
                translation_C: "고객 서비스 직원",
                translation_D: "헬스 트레이너"
            },
            {
                id: "v4-p4-t02-q78",
                text: "What has the speaker prepared?",
                classification: "DETAIL",
                options: {
                    A: "Activities",
                    B: "Food",
                    C: "Certificates",
                    D: "A video"
                },
                correctAnswer: "A",
                translation: "화자는 무엇을 준비했는가?",
                translation_A: "활동",
                translation_B: "음식",
                translation_C: "자격증",
                translation_D: "동영상"
            },
            {
                id: "v4-p4-t02-q79",
                text: "What does the speaker imply when he says, \"I must leave at noon\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "He would like permission to leave.",
                    B: "He cannot join a luncheon.",
                    C: "A colleague will fill in for him.",
                    D: "Some material will not be covered today."
                },
                correctAnswer: "D",
                translation: "화자가 \"제가 정오에 떠나야 해요\"라고 말하는 의도는 무엇인가?",
                translation_A: "자리를 떠날 허가를 받고 싶다.",
                translation_B: "오찬에 참석할 수 없다.",
                translation_C: "동료가 그의 자리를 대신할 것이다.",
                translation_D: "일부 자료는 오늘 다루지 못할 것이다."
            }
        ],
        script: "Welcome all to this week's training in our series of patient care programs. Our physical therapy center is known for the excellent care we provide to our patients, and that's because of you, our staff. The training today will be about ways to engage the patients who reside in our facility through playing games. I've prepared different types of activities for us to try out, including some games that involve mental stimulation as well as physical exercises. But, I have to let you know that today I must leave at noon. Next week we'll try out more of the games.",
        translation: "이번 주 환자 치료 프로그램 교육에 와 주신 여러분 환영합니다. 저희 물리치료 센터는 환자에게 탁월한 치료를 제공하는 것으로 잘 알려져 있는데요. 직원 여러분 덕분입니다. 오늘 교육은 게임을 통해 시설 내에 거주하는 환자들을 사로잡는 방법에 관한 것입니다. 여러분이 시도해 볼 수 있는 다양한 종류의 활동을 준비했어요. 신체 운동뿐 아니라 정신적 자극도 수반하는 게임이 포함됩니다. 그런데 오늘 제가 정오에 떠나야 해요. 다음 주에 게임을 더 많이 해 볼 겁니다."
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p4-t02-s04",
        contextType: "A1. 사무실 업무",
        questionRange: "80-82",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-80-82.mp3",
        questions: [
            {
                id: "v4-p4-t02-q80",
                text: "What is the purpose of the advertisement?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "To announce a contest",
                    B: "To promote an upcoming sale",
                    C: "To introduce new services",
                    D: "To recruit employees"
                },
                correctAnswer: "D",
                translation: "광고의 목적은 무엇인가?",
                translation_A: "대회를 알리는 것",
                translation_B: "다가오는 할인을 홍보하는 것",
                translation_C: "새로운 서비스를 소개하는 것",
                translation_D: "직원을 모집하는 것"
            },
            {
                id: "v4-p4-t02-q81",
                text: "How is the speaker's company different from its competitors?",
                classification: "DETAIL",
                options: {
                    A: "It is dependable.",
                    B: "It produces innovative products.",
                    C: "It offers flexible schedules.",
                    D: "It pays employees well."
                },
                correctAnswer: "C",
                translation: "화자의 회사는 경쟁업체와 어떻게 다른가?",
                translation_A: "믿을 수 있다.",
                translation_B: "획기적인 제품을 생산한다.",
                translation_C: "유연한 일정을 제공한다.",
                translation_D: "직원들에게 보수를 많이 준다."
            },
            {
                id: "v4-p4-t02-q82",
                text: "What does the speaker encourage the listeners to do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Complete a survey",
                    B: "Fill out an application",
                    C: "Place an order",
                    D: "Get more information"
                },
                correctAnswer: "D",
                translation: "화자는 청자들에게 무엇을 하라고 장려하는가?",
                translation_A: "설문 조사 작성하기",
                translation_B: "지원서 기입하기",
                translation_C: "주문 넣기",
                translation_D: "추가 정보 얻기"
            }
        ],
        script: "Are you a certified commercial truck driver? Hoffman Oversized Haulers is currently looking for experienced truck drivers to join our team. As our name suggests, we transport oversized cargo throughout the region. With Hoffman, drivers enjoy flexible scheduling. In fact, we're the only company in the region that allows employees to determine their own work hours. If you don't have experience working with oversized loads, training is available. Please check out our Web site to learn more about our open positions. We can't wait to work with you.",
        translation: "면허증이 있는 영업용 트럭 운전기사이십니까? 호프만 특대 화물 운송 업체는 현재 저희 팀에 합류할 숙련된 트럭 운전기사를 찾고 있습니다. 이름에서 암시하듯, 저희는 지역 전체에 특대형 화물을 운송합니다. 호프만에 오시면 운전기사들은 근무 일정을 유연하게 조절할 수 있습니다. 사실 저희는 이 지역에서 직원들에게 각자 근무 시간을 정하게 하는 유일한 업체입니다. 특대형 짐을 다룬 경력이 없으시면 교육을 해 드립니다. 저희 웹사이트에서 공석을 더 확인해 보세요. 어서 함께 일하고 싶습니다."
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p4-t02-s05",
        contextType: "A1. 사무실 업무",
        questionRange: "83-85",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-83-85.mp3",
        questions: [
            {
                id: "v4-p4-t02-q83",
                text: "What is the message mainly about?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "Revising a restaurant menu",
                    B: "Filming for a television show",
                    C: "Launching an advertising campaign",
                    D: "Renovating a kitchen"
                },
                correctAnswer: "B",
                translation: "메시지는 주로 무엇에 관한 것인가?",
                translation_A: "식당 메뉴 변경",
                translation_B: "TV 프로그램 촬영",
                translation_C: "광고 캠페인 개시",
                translation_D: "주방 개조"
            },
            {
                id: "v4-p4-t02-q84",
                text: "What does the speaker ask the listener to do on Wednesday?",
                classification: "DETAIL",
                options: {
                    A: "Come to work early",
                    B: "Experiment with new ingredients",
                    C: "Train an employee",
                    D: "Prepare for a safety inspection"
                },
                correctAnswer: "A",
                translation: "화자는 청자에게 수요일에 무엇을 하라고 요청하는가?",
                translation_A: "일찍 출근하기",
                translation_B: "새로운 재료로 시험해 보기",
                translation_C: "직원 교육하기",
                translation_D: "안전 점검 대비하기"
            },
            {
                id: "v4-p4-t02-q85",
                text: "Where will the speaker go next week?",
                classification: "DETAIL",
                options: {
                    A: "To a food festival",
                    B: "To a cooking class",
                    C: "To a farmers market",
                    D: "To a bakery opening"
                },
                correctAnswer: "A",
                translation: "화자는 다음 주 어디에 갈 것인가?",
                translation_A: "음식 축제",
                translation_B: "요리 강좌",
                translation_C: "농산물 직판장",
                translation_D: "제과점 개업식"
            }
        ],
        script: "Hi, Jinyu. I have some exciting news! The Farmer's Table television program wants to feature our restaurant in an upcoming episode. They'll be coming on Wednesday to film everyone at work in the kitchen during our dinner service. Since you're the executive chef, I'll need you to come in earlier than usual to get everything prepped and set up. And just as a reminder, I'm still planning to be out of town next week for the Springdale Pastry and Dessert Festival. Thanks!",
        translation: "안녕하세요, 진유. 좋은 소식이 있어요! TV 프로그램 <농부의 식탁>에서 곧 있을 에피소드에 우리 식당을 소개하고 싶어 해요. 수요일에 와서 저녁 시간 동안 주방에서 근무하는 모두를 촬영할 거예요. 총주방장이시니 평소보다 빨리 와서 모든 준비를 마쳐 주셨으면 합니다. 다시 알려드리지만 저는 여전히 다음 주에 스프링데일 페이스트리 앤 디저트 축제 때문에 자리를 비울 계획이에요. 감사합니다!"
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p4-t02-s06",
        contextType: "D1. 일반 뉴스",
        questionRange: "86-88",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-86-88.mp3",
        questions: [
            {
                id: "v4-p4-t02-q86",
                text: "What is the speaker mainly discussing?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "A job fair",
                    B: "A factory",
                    C: "A some traffic patterns",
                    D: "A prototype electric vehicle"
                },
                correctAnswer: "B",
                translation: "화자는 주로 무엇에 대해 이야기하는가?",
                translation_A: "취업 박람회",
                translation_B: "공장",
                translation_C: "교통 패턴",
                translation_D: "전기차 시제품"
            },
            {
                id: "v4-p4-t02-q87",
                text: "What does the speaker imply when he says, \"No one made any comments\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "Few people were in attendance.",
                    B: "Another meeting will be scheduled.",
                    C: "A project has community support.",
                    D: "A public comment period has ended."
                },
                correctAnswer: "C",
                translation: "화자가 \"아무도 의견을 내지 않았습니다\"라고 말하는 의도는 무엇인가?",
                translation_A: "참석한 사람이 거의 없었다.",
                translation_B: "다른 회의 일정이 잡힐 것이다.",
                translation_C: "프로젝트가 지역 사회의 지지를 받는다.",
                translation_D: "공개 논평 기간이 끝났다."
            },
            {
                id: "v4-p4-t02-q88",
                text: "What can the public view at the city hall building?",
                classification: "DETAIL",
                options: {
                    A: "An official contract",
                    B: "Some images",
                    C: "A list of companies",
                    D: "Some facts about local politicians"
                },
                correctAnswer: "B",
                translation: "대중은 시청 건물에서 무엇을 볼 수 있는가?",
                translation_A: "공식 계약서",
                translation_B: "그림",
                translation_C: "업체 목록",
                translation_D: "지역 정치인들에 대한 사실"
            }
        ],
        script: "Good evening and thank you for watching Channel Four News. I'm here in Rockville, a suburb in the metropolitan area. Rockville was recently chosen as the site of a multimillion-dollar electric vehicle battery factory. This project promises to bring thousands of jobs, both directly and indirectly, to the surrounding community. At a recent well-attended public comment meeting, residents had a chance to voice any opposition to the project. No one made any comments. To learn more about this exciting development, artist-rendered images of the project are on display at the city hall building.",
        translation: "안녕하십니까? 채널 4 뉴스를 시청해 주셔서 감사합니다. 저는 대도시 교외에 있는 록빌에 나와 있습니다. 록빌은 최근 수백만 달러 규모의 전기차 배터리 공장 부지로 선정됐는데요. 이 프로젝트는 인근 지역 사회에 수천 개의 직, 간접적인 일자리를 약속합니다. 많은 사람들이 참석한 최근 공개 논평회에서 주민들은 프로젝트에 반대하는 목소리를 낼 기회가 있었는데요. 아무도 의견을 내지 않았습니다. 이 흥미로운 개발에 대해 더 자세히 알아보시려면 아티스트에 의해 제작된 이 프로젝트의 이미지가 시청 건물에 전시되어 있습니다."
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p4-t02-s07",
        contextType: "B1. 쇼핑",
        questionRange: "89-91",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-89-91.mp3",
        questions: [
            {
                id: "v4-p4-t02-q89",
                text: "What type of product is being advertised?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "A floor lamp",
                    B: "A bookshelf",
                    C: "An office chair",
                    D: "A desk organizer"
                },
                correctAnswer: "D",
                translation: "어떤 종류의 제품을 광고하는가?",
                translation_A: "스탠드",
                translation_B: "책장",
                translation_C: "사무용 의자",
                translation_D: "책상 정리함"
            },
            {
                id: "v4-p4-t02-q90",
                text: "What special feature does the speaker emphasize?",
                classification: "DETAIL",
                options: {
                    A: "It is durable.",
                    B: "It is adjustable.",
                    C: "It is easy to assemble.",
                    D: "It is available in many colors."
                },
                correctAnswer: "B",
                translation: "화자는 어떤 특징을 강조하는가?",
                translation_A: "내구성이 있다.",
                translation_B: "조절이 가능하다.",
                translation_C: "조립하기 쉽다.",
                translation_D: "여러 색상으로 나온다."
            },
            {
                id: "v4-p4-t02-q91",
                text: "How can the listeners receive a discount?",
                classification: "DETAIL",
                options: {
                    A: "By calling within a time limit",
                    B: "By entering an e-mail address",
                    C: "By referring a product to a friend",
                    D: "By using a mobile phone application"
                },
                correctAnswer: "A",
                translation: "청자들은 어떻게 할인을 받을 수 있는가?",
                translation_A: "제한 시간 내에 전화해서",
                translation_B: "이메일 주소를 입력해서",
                translation_C: "제품을 친구에게 추천해서",
                translation_D: "휴대전화 앱을 이용해서"
            }
        ],
        script: "Tired of losing things on your desk because it's too cluttered? If so, the Optimum Space Organizer is the perfect product for you. Designed with office employees like you in mind, this product can make even the messiest of desks look neat again. Best of all, the organizer adjusts to any sized space you may have on your desk. It can be as narrow or as wide as you need it to be—within seconds! If you call in the next ten minutes, you'll receive a 30 percent discount!",
        translation: "책상이 너무 어수선해서 물건을 잃어버리는 거에 지치셨나요? 그렇다면 옵티멈 스페이스 오거나이저가 딱 맞는 제품입니다. 여러분과 같은 사무실 직원을 염두에 두고 디자인된 이 제품은 가장 지저분한 책상도 다시 깔끔해 보일 수 있도록 해 줍니다. 무엇보다도 이 정리함은 책상 위 어떤 크기의 공간에도 맞출 수 있죠. 몇 초 만에 필요에 따라 좁거나 넓게 만들 수 있어요. 앞으로 10분 안에 전화하시면 30퍼센트 할인을 받습니다!"
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p4-t02-s08",
        contextType: "D2. 기타 뉴스 / 팟캐스트 / 안내",
        questionRange: "92-94",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-92-94.mp3",
        questions: [
            {
                id: "v4-p4-t02-q92",
                text: "According to the speaker, what is the purpose of the podcast?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "To discuss the restaurant industry",
                    B: "To review new cooking equipment",
                    C: "To share information about nutrition",
                    D: "To showcase individual ingredients"
                },
                correctAnswer: "D",
                translation: "화자에 따르면, 팟캐스트의 목적은 무엇인가?",
                translation_A: "요식업계에 대해 이야기하는 것",
                translation_B: "새로운 조리기구를 평가하는 것",
                translation_C: "영양 관련 정보를 공유하는 것",
                translation_D: "개별 재료 소개하는 것"
            },
            {
                id: "v4-p4-t02-q93",
                text: "Why does the speaker say, \"this product line will not be available for long\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To encourage the listeners to place an order",
                    B: "To apologize to the listeners for a product shortage",
                    C: "To justify a high price",
                    D: "To criticize a business decision"
                },
                correctAnswer: "A",
                translation: "화자가 \"이 제품은 오랫동안 구입할 수 있진 않을 겁니다\"라고 말하는 이유는?",
                translation_A: "청자들에게 주문을 장려하려고",
                translation_B: "청자들에게 제품 부족에 대해 사과하려고",
                translation_C: "높은 가격에 대해 해명하려고",
                translation_D: "사업상의 결정을 비판하려고"
            },
            {
                id: "v4-p4-t02-q94",
                text: "According to the speaker, what did Rebecca Murray recently do?",
                classification: "DETAIL",
                options: {
                    A: "She published a cookbook.",
                    B: "She launched a culinary training course.",
                    C: "She opened a restaurant.",
                    D: "She traveled abroad."
                },
                correctAnswer: "C",
                translation: "화자에 따르면, 레베카 머레이는 최근 무엇을 했는가?",
                translation_A: "요리책을 출간했다.",
                translation_B: "요리 강좌를 시작했다.",
                translation_C: "식당을 열었다.",
                translation_D: "해외 여행을 했다."
            }
        ],
        script: "Thanks for listening to this episode of Fabulous Foods. Every week, we discuss a different vegetable and ways to cook with it to maximize flavor. Now, before we get started, I'm excited to announce that I've been collaborating with Cartwell Kitchen Supplies to develop a new line of cookware. It'll be released in November, but it's available for preorder right now. Keep in mind, this product line will not be available for long. OK, let's move on to our program. With us today is renowned chef Rebecca Murray to talk about this week's vegetable: eggplant! Rebecca recently launched a vegetarian restaurant in New York that is getting rave reviews so far.",
        translation: "<굉장한 요리> 이번 에피소드를 청취해 주셔서 감사합니다. 저희는 매주 다양한 채소와 이를 이용해 맛을 극대화하는 요리법에 대해 이야기를 나누고 있는데요. 시작하기에 앞서, 제가 카트웰 주방용품과 협력해 새로운 취사도구 제품을 개발했다는 사실을 알려 드리게 되어 기쁩니다. 11월에 출시되지만 현재 선주문이 가능합니다. 기억해 두세요. 이 제품은 오랫동안 구입할 수 있진 않을 겁니다. 자, 프로그램으로 넘어가 보죠. 오늘은 유명 요리사인 레베카 머레이 씨가 함께해 이번 주 채소인 가지에 대해 이야기해 주시겠습니다! 레베카 씨는 최근 뉴욕에 채식 식당을 열었는데 지금까지 극찬을 받고 있습니다."
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p4-t02-s09",
        contextType: "C2. 건강 / 여가 / 농장",
        questionRange: "95-97",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-95-97.mp3",
        image: "/images/ETS_TOEIC_4/Test_02/Part_04/v4_p4_t02_q94.png",
        questions: [
            {
                id: "v4-p4-t02-q95",
                text: "Why does the speaker apologize?",
                classification: "WHY_REASON",
                options: {
                    A: "There is construction noise at the station.",
                    B: "There are no more seats available on a train.",
                    C: "A printed schedule has incorrect information.",
                    D: "A train service has been delayed."
                },
                correctAnswer: "A",
                translation: "화자는 왜 사과하는가?",
                translation_A: "역에 공사 소음이 있다.",
                translation_B: "열차에 이용 가능한 좌석이 더 이상 없다.",
                translation_C: "출력된 일정표에 틀린 정보가 있다.",
                translation_D: "열차 운행이 지연됐다."
            },
            {
                id: "v4-p4-t02-q96",
                text: "According to the speaker, why may some listeners need to see an agent?",
                classification: "DETAIL",
                options: {
                    A: "To ask for a refund",
                    B: "To request baggage service",
                    C: "To purchase a monthly pass",
                    D: "To arrange a transfer"
                },
                correctAnswer: "B",
                translation: "화자에 따르면, 일부 청자들은 왜 매표원을 만나야 하는가?",
                translation_A: "환불을 요청하려고",
                translation_B: "수하물 서비스를 요청하려고",
                translation_C: "월 정기권을 구매하려고",
                translation_D: "환승을 하려고"
            },
            {
                id: "v4-p4-t02-q97",
                text: "Look at the graphic. When is Train 133 scheduled to arrive at its next stop?",
                classification: "GRAPHIC",
                options: {
                    A: "At 10:45 A.M.",
                    B: "At 12:05 P.M.",
                    C: "At 1:00 P.M.",
                    D: "At 1:30 P.M."
                },
                correctAnswer: "B",
                translation: "시각 정보에 의하면, 133번 열차는 언제 다음 역에 도착하는가?",
                translation_A: "오전 10시 45분",
                translation_B: "오후 12시 5분",
                translation_C: "오후 1시",
                translation_D: "오후 1시 30분"
            }
        ],
        script: "Attention passengers. Renovation work to upgrade and modernize our train station is underway. We apologize for the inconvenience the construction noise may cause. Please note that regional train schedules are not affected. Train 133 with service to Washington, D.C., will be arriving shortly. All passengers to Washington, please proceed to Track 26B. If you need assistance handling your baggage, please speak to a ticket agent immediately. Train 133's next stop will be Wilmington, followed by Baltimore and then Washington, D.C.",
        translation: "승객 여러분께 알려드립니다. 저희 기차역을 업그레이드하고 현대화하는 보수 작업이 진행 중입니다. 공사 소음으로 불편을 드려 죄송합니다. 지역 열차 시간표는 영향이 없습니다. 워싱턴 D.C. 행 133번 열차가 곧 도착하겠습니다. 워싱턴으로 가시는 승객께서는 26B 트랙으로 이동하시기 바랍니다. 짐을 옮기는 데 도움이 필요하시면 즉시 매표원에게 말씀해 주세요. 133번 열차의 다음 역은 윌밍턴이며, 이후 볼티모어를 거쳐 워싱턴 D.C.로 이동합니다."
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p4-t02-s10",
        contextType: "A1. 사무실 업무",
        questionRange: "98-100",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-98-100.mp3",
        image: "/images/ETS_TOEIC_4/Test_02/Part_04/v4_p4_t02_q97.png",
        questions: [
            {
                id: "v4-p4-t02-q98",
                text: "Who most likely are the listeners?",
                classification: "WHO_LOC",
                options: {
                    A: "Civil engineers",
                    B: "Urban planners",
                    C: "News reporters",
                    D: "Safety inspectors"
                },
                correctAnswer: "C",
                translation: "청자들은 누구이겠는가?",
                translation_A: "토목 기사",
                translation_B: "도시 계획자",
                translation_C: "취재 기자",
                translation_D: "안전 검사관"
            },
            {
                id: "v4-p4-t02-q99",
                text: "Look at the graphic. Which of the following companies will be affected by a delay?",
                classification: "GRAPHIC",
                options: {
                    A: "Selca Air",
                    B: "Trilco Airlines",
                    C: "Heathson Airways",
                    D: "Bluxtin Airlines"
                },
                correctAnswer: "A",
                translation: "시각 정보에 의하면, 다음 중 지연에 영향을 받는 업체는?",
                translation_A: "셀카 항공",
                translation_B: "트릴코 항공",
                translation_C: "히드손 항공",
                translation_D: "블럭스틴 항공"
            },
            {
                id: "v4-p4-t02-q100",
                text: "What does the speaker invite the listeners to do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Download some designs",
                    B: "Look at a model",
                    C: "Take a site tour",
                    D: "View a Webcam"
                },
                correctAnswer: "B",
                translation: "화자는 청자들에게 무엇을 하라고 요청하는가?",
                translation_A: "디자인 다운로드하기",
                translation_B: "모형 보기",
                translation_C: "현장 견학하기",
                translation_D: "웹캠 보기"
            }
        ],
        script: "Hello, everyone. I'm Carmen Salazar, the airport operations director, and I wanted to thank you for attending this press conference. As of this week, construction on the new regional airport is proceeding on schedule for two of the three terminals. Minor design adjustments to terminal A have put the project slightly behind schedule, and we anticipate about two months will be added to the construction time frame as a result. I'd also like to mention that we now have a 3-D printed model of this project! Please feel free to visit our Web site so you can view it.",
        translation: "안녕하세요, 여러분. 공항 운영 책임자인 카르멘 살라자르입니다. 기자회견에 참석해 주셔서 감사합니다. 이번 주를 기준으로 새로운 지역 공항의 세 개의 터미널 중 두 곳에서 공사가 예정대로 진행됩니다. A 터미널은 작은 설계 수정으로 인해 프로젝트가 예정보다 약간 늦어졌습니다. 결과적으로 약 2개월 정도 공사 기간이 길어질 것으로 예상합니다. 또한 이 프로젝트의 3D 프린팅 모형도 있음을 말씀드리고자 합니다. 저희 웹사이트를 방문하면 보실 수 있습니다."
    }
];
