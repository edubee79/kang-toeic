import { Part4Set } from '../types';

export const test4Data: Part4Set[] = [
    {
        testId: 4,
        vol: 4,
        setId: "v4-p4-t04-s01",
        contextType: "A1. 사무실 업무",
        questionRange: "71-73",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-71-73.mp3",
        questions: [
            {
                id: "v4-p4-t04-q71",
                text: "What kind of business recorded the message?",
                classification: "WHO_LOC",
                options: {
                    A: "A city planning office",
                    B: "A cybersecurity firm",
                    C: "A utility company",
                    D: "An electronics repair shop"
                },
                correctAnswer: "C",
                translation: "어떤 종류의 업체에서 메시지를 녹음했는가?",
                translation_A: "도시 계획 사무소",
                translation_B: "사이버 보안 업체",
                translation_C: "공익 기업",
                translation_D: "전자 제품 수리점"
            },
            {
                id: "v4-p4-t04-q72",
                text: "What does the speaker say will happen this afternoon?",
                classification: "DETAIL",
                options: {
                    A: "A problem will be resolved.",
                    B: "A shipment will be delivered.",
                    C: "Some software will be updated.",
                    D: "Some refreshments will be offered."
                },
                correctAnswer: "A",
                translation: "화자는 오늘 오후에 어떤 일이 있을 것이라고 말하는가?",
                translation_A: "문제가 해결될 것이다.",
                translation_B: "수송품이 배송될 것이다.",
                translation_C: "소프트웨어가 업데이트될 것이다.",
                translation_D: "다과가 제공될 것이다."
            },
            {
                id: "v4-p4-t04-q73",
                text: "What does the speaker say is available on a Web site?",
                classification: "DETAIL",
                options: {
                    A: "Customer reviews",
                    B: "Work order forms",
                    C: "Business hours",
                    D: "Product manuals"
                },
                correctAnswer: "B",
                translation: "화자는 웹사이트에서 무엇을 이용할 수 있다고 말하는가?",
                translation_A: "고객 후기",
                translation_B: "작업 주문서 양식",
                translation_C: "운영 시간",
                translation_D: "제품 설명서"
            }
        ],
        script: "Hello. You've reached Imperial Electric and Gas, the number one power company in the Northeast region. Please hold for the next available representative. If you're calling about reported electrical outages in Cedar Springs, rest assured that technicians are on-site now and services will be fully restored this afternoon. Or if you've recently moved and are calling to either start or stop services, please visit our Web site to fill out a form to have a work order completed. Thank you.",
        translation: "안녕하세요. 북동부 지역 최고의 전력업체, 임페리얼 전기 가스입니다. 응대 가능한 다음 상담원을 기다려 주십시오. 보도된 시더 스프링스 정전에 관해 전화하셨다면 기술자들이 지금 현장에 나가 있으며 오늘 오후면 서비스가 완전히 복구될 것이니 안심하시기 바랍니다. 혹은 최근 이사를 해서 서비스를 개시하거나 중지하기 위해 전화를 하셨다면, 저희 웹사이트에 방문하셔서 서식을 작성하여 작업 주문서를 완료해 주십시오. 감사합니다."
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p4-t04-s02",
        contextType: "A1. 사무실 업무",
        questionRange: "74-76",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-74-76.mp3",
        questions: [
            {
                id: "v4-p4-t04-q74",
                text: "According to the speaker, why is a change being made?",
                classification: "WHY_REASON",
                options: {
                    A: "To keep track of expenses",
                    B: "To help a business expand",
                    C: "To improve security",
                    D: "To attract job applicants"
                },
                correctAnswer: "C",
                translation: "화자에 따르면, 왜 변경이 이뤄지는가?",
                translation_A: "경비를 기록하려고",
                translation_B: "사업 확장을 도우려고",
                translation_C: "보안을 강화하려고",
                translation_D: "구직자를 끌어모으려고"
            },
            {
                id: "v4-p4-t04-q75",
                text: "What are the listeners asked to do?",
                classification: "DETAIL",
                options: {
                    A: "Shut down their computers",
                    B: "Reduce their expenses",
                    C: "Consult with their department managers",
                    D: "Create an equipment inventory"
                },
                correctAnswer: "A",
                translation: "청자들은 무엇을 하라고 요청받는가?",
                translation_A: "컴퓨터 끄기",
                translation_B: "비용 줄이기",
                translation_C: "부서 관리자와 협의하기",
                translation_D: "장비 목록 작성하기"
            },
            {
                id: "v4-p4-t04-q76",
                text: "What department does Marta Fuentes most likely work in?",
                classification: "WHO_LOC",
                options: {
                    A: "Legal",
                    B: "Marketing",
                    C: "Human Resources",
                    D: "Information Technology"
                },
                correctAnswer: "D",
                translation: "마르타 푸엔테스는 어떤 부서에서 일하겠는가?",
                translation_A: "법무",
                translation_B: "마케팅",
                translation_C: "인사",
                translation_D: "정보 기술"
            }
        ],
        script: "This weekend, we'll be installing new security software on our internal servers. This is a little more involved than a routine update—we need to have an extra layer of protection on our customers' personal data. So, we're all being asked to help prepare for this event. Before we leave the office on Friday, we'll need to shut down our computers to enable the patch. Marta Fuentes is here to explain how we'll finish the installation on our devices when we come in on Monday.",
        translation: "이번 주말에 내부 서버에 새 보안 소프트웨어를 설치할 예정입니다. 이번은 평상시 업데이트보다 조금 더 복잡합니다. 고객 개인 정보를 보호하는 단계가 추가되어야 하기 때문입니다. 그래서 우리 모두 이 일의 준비를 도와 달라는 요청을 받는 것입니다. 금요일에 사무실을 나서기 전, 패치가 가능하도록 컴퓨터를 꺼야 합니다. 마르타 푸엔테스가 와서 우리 기기에 설치를 완료하는 방법을 설명해 줄 것입니다."
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p4-t04-s03",
        contextType: "D2. 기타 뉴스 / 팟캐스트 / 안내",
        questionRange: "77-79",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-77-79.mp3",
        questions: [
            {
                id: "v4-p4-t04-q77",
                text: "According to the speaker, what will begin on Monday?",
                classification: "DETAIL",
                options: {
                    A: "A seasonal internship program",
                    B: "Road construction",
                    C: "Landscaping maintenance",
                    D: "An equipment upgrade"
                },
                correctAnswer: "B",
                translation: "화자에 따르면, 월요일에 무엇이 시작될 것인가?",
                translation_A: "계절 인턴십 프로그램",
                translation_B: "도로 공사",
                translation_C: "조경 유지보수",
                translation_D: "장비 업그레이드"
            },
            {
                id: "v4-p4-t04-q78",
                text: "What will the company provide for the listeners?",
                classification: "DETAIL",
                options: {
                    A: "Free lunch",
                    B: "New identification badges",
                    C: "Parking passes",
                    D: "Transportation"
                },
                correctAnswer: "D",
                translation: "회사는 청자들에게 무엇을 제공할 것인가?",
                translation_A: "무료 점심 식사",
                translation_B: "새로운 신분 확인 명찰",
                translation_C: "주차권",
                translation_D: "교통편"
            },
            {
                id: "v4-p4-t04-q79",
                text: "Why should the listeners visit a Web site?",
                classification: "DETAIL",
                options: {
                    A: "To download a map",
                    B: "To post feedback",
                    C: "To fill out a registration form",
                    D: "To read project updates"
                },
                correctAnswer: "D",
                translation: "청자들은 왜 웹사이트를 방문해야 하는가?",
                translation_A: "지도를 다운로드하려고",
                translation_B: "피드백을 게시하려고",
                translation_C: "등록 서류를 작성하려고",
                translation_D: "프로젝트 최신 소식을 읽으려고"
            }
        ],
        script: "Let me remind everyone that starting on Monday, the main entrance to the office building will be inaccessible while the road is being widened and repaved. This also means that our usual parking lot won't be available. But don't worry—there's plenty of space in the parking garage next to the Jay Building. For your convenience, the company will be providing a van service that will run every fifteen minutes until the project is completed. The van will operate between seven and nine A.M., and then again between four and six P.M. We'll be posting project updates on our Web site, so be sure to check it regularly.",
        translation: "모두에게 다시 알려드립니다. 월요일부터 도로를 넓히고 재포장하는 동안, 사무실 건물 정문을 이용할 수 없습니다. 이는 평상시 주차장을 사용할 수 없다는 뜻이기도 하죠. 하지만 걱정 마세요. 제이 빌딩 옆 주차장에 공간이 많으니까요. 여러분의 편의를 위해, 회사에서는 프로젝트가 종료될 때까지 매 15분마다 운행되는 밴 서비스를 제공할 예정입니다. 밴은 아침 7시부터 9시까지 운행되며 오후 4시부터 6시까지 다시 운행됩니다. 웹사이트에 프로젝트 최신 소식을 올릴 테니 주기적으로 확인해 주세요."
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p4-t04-s04",
        contextType: "C1. 일상 (물건 구매 등)",
        questionRange: "80-82",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-80-82.mp3",
        questions: [
            {
                id: "v4-p4-t04-q80",
                text: "What is the speaker preparing for?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "A client visit",
                    B: "A branch opening",
                    C: "A job fair",
                    D: "An equipment upgrade"
                },
                correctAnswer: "A",
                translation: "화자는 무엇을 준비하는가?",
                translation_A: "고객 방문",
                translation_B: "지점 개업",
                translation_C: "취업 박람회",
                translation_D: "장비 업그레이드"
            },
            {
                id: "v4-p4-t04-q81",
                text: "Why does the speaker say, \"there is one on Jefferson Avenue\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To express surprise",
                    B: "To correct some information",
                    C: "To complain about a decision",
                    D: "To recommend an alternative"
                },
                correctAnswer: "D",
                translation: "화자가 \"제퍼슨 가에 하나 있어요\"라고 말하는 이유는?",
                translation_A: "놀라움을 표하려고",
                translation_B: "정보를 바로잡으려고",
                translation_C: "결정에 대해 항의하려고",
                translation_D: "대안을 추천하려고"
            },
            {
                id: "v4-p4-t04-q82",
                text: "What additional service is mentioned?",
                classification: "DETAIL",
                options: {
                    A: "A catered meal",
                    B: "A shuttle bus",
                    C: "A technical support",
                    D: "Secure storage"
                },
                correctAnswer: "B",
                translation: "어떤 추가 서비스가 언급되는가?",
                translation_A: "케이터링 식사",
                translation_B: "셔틀버스",
                translation_C: "기술 지원",
                translation_D: "안전한 보관 시설"
            }
        ],
        script: "Hi, Asako. I'm following up about the hotel you asked me to book for our client visiting from India next month. You wanted to reserve a room for her at the Maple Lodge, but it's fully booked that week. So I've been looking at other hotels in the area, and there is one on Jefferson Avenue. It's a little farther from our office, but it looks like a nice place. They also have a complimentary shuttle bus that can take our guest back and forth from our office. Call me and let me know what you think.",
        translation: "안녕하세요, 아사코. 다음 달 인도에서 오시는 고객을 위해 예약해 달라고 요청하신 호텔에 관해 알려드립니다. 메이플 릿지에 객실 예약을 원하셨는데요, 그 주는 예약이 다 찼어요. 그래서 그 지역의 다른 호텔을 보고 있는데 제퍼슨 가에 하나 있어요. 사무실에서는 좀 더 멀지만 좋은 곳인 것 같습니다. 고객을 태우고 사무실을 오갈 무료 셔틀버스도 있어요. 전화 주셔서 어떻게 생각하시는지 알려 주세요."
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p4-t04-s05",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "83-85",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-83-85.mp3",
        questions: [
            {
                id: "v4-p4-t04-q83",
                text: "According to the speaker, why are some changes needed?",
                classification: "WHY_REASON",
                options: {
                    A: "To retain employees",
                    B: "To attract investors",
                    C: "To satisfy customers",
                    D: "To increase productivity"
                },
                correctAnswer: "C",
                translation: "화자에 따르면, 변화가 필요한 이유는?",
                translation_A: "직원들을 계속 보유하기 위해",
                translation_B: "투자자를 끌어모으기 위해",
                translation_C: "고객을 만족시키기 위해",
                translation_D: "생산성을 늘리기 위해"
            },
            {
                id: "v4-p4-t04-q84",
                text: "What additional service does the company plan to offer?",
                classification: "DETAIL",
                options: {
                    A: "Free product returns",
                    B: "Expedited bulk shipping",
                    C: "Pickup at self-service kiosks",
                    D: "Real-time package tracking"
                },
                correctAnswer: "D",
                translation: "회사는 어떤 추가 서비스를 제공할 계획인가?",
                translation_A: "무료 반품",
                translation_B: "신속 대량 배송",
                translation_C: "셀프 서비스 주문대에서 수령",
                translation_D: "실시간 배송 추적"
            },
            {
                id: "v4-p4-t04-q85",
                text: "According to the speaker, what will begin next month?",
                classification: "DETAIL",
                options: {
                    A: "A workshop series",
                    B: "A new corporate policy",
                    C: "A land development project",
                    D: "A business collaboration"
                },
                correctAnswer: "D",
                translation: "화자에 따르면, 다음 달에 무엇이 시작되는가?",
                translation_A: "일련의 워크숍",
                translation_B: "새 회사 정책",
                translation_C: "토지 개발 프로젝트",
                translation_D: "업체 협력"
            }
        ],
        script: "I'd like to start by giving everyone an update on our latest project. As you know, in order to stay on top as a leading shipping company, we need to continually make changes to meet our customers' expectations. Since our customers prefer doing almost everything digitally, we're going to introduce a new delivery tracking service. By using a smartphone application, customers will be able to see where their package is in real time. Of course, implementing this will be a major project for us and will take place over the coming year. So next month, we'll begin working with developers from XKP Software on creating this tracking service.",
        translation: "저희 최근 프로젝트의 최신 소식을 전해 드리면서 시작하겠습니다. 아시다시피, 앞서가는 배송업체로서 선두를 지키려면, 고객의 기대에 부응하기 위해 끊임없이 변화할 필요가 있습니다. 고객이 거의 모든 것을 디지털로 하는 걸 선호하니 새로운 배송 추적 서비스를 도입하려고 합니다. 스마트폰 앱을 활용해 자신의 소포가 어디에 있는지 실시간으로 볼 수 있을 것입니다. 물론 이를 시행하는 것은 우리에게 중요한 프로젝트로, 내년 한 동안 이뤄질 것입니다. 그래서 다음 달에 XKP 소프트웨어의 개발자들과 협력해 추적 서비스를 만들기 시작할 것입니다."
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p4-t04-s06",
        contextType: "D1. 일반 뉴스",
        questionRange: "86-88",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-86-88.mp3",
        questions: [
            {
                id: "v4-p4-t04-q86",
                text: "What industry does the speaker most likely work in?",
                classification: "WHO_LOC",
                options: {
                    A: "Civil service",
                    B: "Hospitality",
                    C: "Media",
                    D: "Architecture"
                },
                correctAnswer: "C",
                translation: "화자는 어떤 업계에서 일하겠는가?",
                translation_A: "공무",
                translation_B: "접객 서비스",
                translation_C: "미디어",
                translation_D: "건축"
            },
            {
                id: "v4-p4-t04-q87",
                text: "What is planned for next month?",
                classification: "DETAIL",
                options: {
                    A: "A retirement luncheon",
                    B: "An employee-performance review",
                    C: "A computer-system upgrade",
                    D: "A tour of a facility"
                },
                correctAnswer: "D",
                translation: "다음 달에 무엇이 계획되어 있는가?",
                translation_A: "은퇴 기념 오찬",
                translation_B: "인사 고과",
                translation_C: "컴퓨터 시스템 업그레이드",
                translation_D: "시설 견학"
            },
            {
                id: "v4-p4-t04-q88",
                text: "Who should send the speaker an e-mail?",
                classification: "DETAIL",
                options: {
                    A: "Those going on vacation",
                    B: "Those willing to volunteer",
                    C: "Those wishing to provide feedback",
                    D: "Those presenting at a conference"
                },
                correctAnswer: "B",
                translation: "화자에게 누가 이메일을 보내야 하는가?",
                translation_A: "휴가를 가는 사람",
                translation_B: "자원봉사를 할 의향이 있는 사람",
                translation_C: "피드백을 제공하고 싶은 사람",
                translation_D: "회의에 참석하는 사람"
            }
        ],
        script: "I'm so happy we got the exclusive video footage of the mayor's response today. We were able to beat the other networks in getting that interview to the public! I wanted to give you all a heads-up that next month we'll be providing a behind-the-scenes tour for students who are exploring our field as a potential career path. They'll see things like the assignment coordination desk, our studios, and the control room. I'm looking for a few volunteers who can spare an hour of their time to do this. Please e-mail me if you're interested.",
        translation: "오늘 시장의 답변을 담은 독점 영상을 구할 수 있어서 무척 기쁩니다. 다른 방송국을 제치고 그 인터뷰를 대중에게 전할 수 있었어요! 다음 달 우리 분야를 잠재적인 진로로 생각하고 답사하는 학생들에게 현장 견학을 제공할 것임을 여러분께 알려 드리고 싶습니다. 업무 조정 데스크, 스튜디오, 조정실 같은 것들을 볼 거예요. 이 일에 한 시간을 할애해 줄 수 있는 자원봉사자를 찾고 있습니다. 관심이 있으시면 이메일을 보내주세요."
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p4-t04-s07",
        contextType: "A1. 사무실 업무",
        questionRange: "89-91",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-89-91.mp3",
        questions: [
            {
                id: "v4-p4-t04-q89",
                text: "What does the speaker's company most likely sell?",
                classification: "DETAIL",
                options: {
                    A: "Beauty supplies",
                    B: "Kitchen appliances",
                    C: "Books",
                    D: "Sporting goods"
                },
                correctAnswer: "B",
                translation: "화자의 회사는 무엇을 판매하겠는가?",
                translation_A: "미용용품",
                translation_B: "주방용 기기",
                translation_C: "책",
                translation_D: "스포츠 용품"
            },
            {
                id: "v4-p4-t04-q90",
                text: "What event does the speaker invite the listeners to?",
                classification: "DETAIL",
                options: {
                    A: "A sales workshop",
                    B: "A product demonstration",
                    C: "A celebratory dinner",
                    D: "A concert"
                },
                correctAnswer: "C",
                translation: "화자는 청자들을 어떤 행사에 초대하는가?",
                translation_A: "영업 워크숍",
                translation_B: "제품 시연",
                translation_C: "축하 저녁 식사",
                translation_D: "음악회"
            },
            {
                id: "v4-p4-t04-q91",
                text: "What does the speaker mean when he says, \"there's a sports event that night\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "The office will be closed.",
                    B: "Parking will be limited.",
                    C: "A meeting will be rescheduled.",
                    D: "The listeners should buy some tickets."
                },
                correctAnswer: "B",
                translation: "남자가 \"그날 밤에 스포츠 행사가 있습니다\"라고 말하는 의도는 무엇인가?",
                translation_A: "사무실을 닫을 것이다.",
                translation_B: "주차가 제한될 것이다.",
                translation_C: "회의 일정이 변경될 것이다.",
                translation_D: "청자들은 표를 사야 한다."
            }
        ],
        script: "Congratulations on a successful third quarter, everyone! You've all done such a great job selling our ovens and refrigerators that we've already exceeded our sales expectations for the year! To celebrate, we'd like to invite the sales team to join us for a company dinner. The dinner will be held on Thursday, December twentieth at the Canterbury Restaurant. You might want to carpool or take public transportation to the event—the restaurant is near the stadium and there's a sports event that night.",
        translation: "여러분, 성공적인 3분기를 축하합니다! 모두들 오븐과 냉장고 판매를 너무 잘해 주셔서 올해 예상 매출액을 이미 초과했어요! 축하하기 위해 영업팀을 초대해 함께 회식을 했으면 합니다. 저녁 식사는 12월 20일 목요일 캔터베리 레스토랑에서 있을 겁니다. 카풀을 하시거나 대중교통을 이용해 행사장에 오시는 것이 좋을 겁니다. 식당은 경기장 근처로, 그날 밤에 스포츠 행사가 있습니다."
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p4-t04-s08",
        contextType: "C2. 건강 / 여가 / 농장",
        questionRange: "92-94",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-92-94.mp3",
        questions: [
            {
                id: "v4-p4-t04-q92",
                text: "Who most likely is the speaker?",
                classification: "WHO_LOC",
                options: {
                    A: "An artist",
                    B: "A business owner",
                    C: "A local journalist",
                    D: "A government official"
                },
                correctAnswer: "B",
                translation: "화자는 누구이겠는가?",
                translation_A: "화가",
                translation_B: "업체 소유주",
                translation_C: "지역 기자",
                translation_D: "공무원"
            },
            {
                id: "v4-p4-t04-q93",
                text: "Why does the speaker say, \"art isn't only inside the walls of a museum\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To apologize for an exhibit closure",
                    B: "To disagree with an online review",
                    C: "To motivate the listeners to take another tour",
                    D: "To recommend a building renovation"
                },
                correctAnswer: "C",
                translation: "화자가 \"예술은 미술관 벽 안에만 있는 것은 아닙니다\"라고 말하는 이유는?",
                translation_A: "전시회 폐쇄에 대해 사과하려고",
                translation_B: "온라인 후기에 반대하려고",
                translation_C: "청자들에게 다른 투어를 하도록 동기를 부여하려고",
                translation_D: "건물 보수를 권하려고"
            },
            {
                id: "v4-p4-t04-q94",
                text: "What does the speaker give to the listeners?",
                classification: "DETAIL",
                options: {
                    A: "City maps",
                    B: "Gift cards",
                    C: "Name badges",
                    D: "Informational brochures"
                },
                correctAnswer: "D",
                translation: "화자는 청자들에게 무엇을 주는가?",
                translation_A: "도시 지도",
                translation_B: "상품권",
                translation_C: "이름표",
                translation_D: "정보가 담긴 안내책자"
            }
        ],
        script: "I hope you've enjoyed this tour of historic homes in Salona City. I founded this tour company five years ago, and I'm happy to announce that next month my company's expanding its offerings. We're launching a new walking tour that will focus on the various murals and statues located throughout the city center. We know tourists like you often visit the exhibitions at our art museum, but art isn't only inside the walls of a museum. Here are some brochures with information, including the times and prices.",
        translation: "살로나 시의 역사적인 가옥들을 견학하는 시간이 즐거우셨길 바랍니다. 저는 5년 전 이 투어 업체를 설립했는데요, 다음 달 우리 회사가 제공하는 상품을 확대할 것이라는 소식을 알려 드리게 되어 기쁩니다. 도심 전역에 위치한 다양한 벽화와 조각상이 중심이 되는 새로운 도보 투어를 시작할 것입니다. 여러분과 같은 관광객들은 미술관 전시회를 자주 방문한다는 것을 알고 있지만 예술은 미술관 벽 안에만 있는 것은 아닙니다. 시간과 가격을 포함한 정보가 담긴 안내책자가 여기 있습니다."
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p4-t04-s09",
        contextType: "D1. 일반 뉴스",
        questionRange: "95-97",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-95-97.mp3",
        image: "/images/ETS_TOEIC_4/Test_04/Part_04/v4_p4_t05_q95.png",
        questions: [
            {
                id: "v4-p4-t04-q95",
                text: "What is the broadcast mainly about?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "A renovated airport terminal",
                    B: "A redesigned city hall",
                    C: "A new train station",
                    D: "A new bridge"
                },
                correctAnswer: "C",
                translation: "방송은 주로 무엇에 관한 것인가?",
                translation_A: "개조된 공항 터미널",
                translation_B: "재설계된 시청",
                translation_C: "새로운 기차역",
                translation_D: "새로운 다리"
            },
            {
                id: "v4-p4-t04-q96",
                text: "Look at the graphic. Which proposal was chosen?",
                classification: "GRAPHIC",
                options: {
                    A: "Plan A",
                    B: "Plan B",
                    C: "Plan C",
                    D: "Plan D"
                },
                correctAnswer: "D",
                translation: "시각 정보에 의하면, 어떤 제안이 선택됐는가?",
                translation_A: "계획 A",
                translation_B: "계획 B",
                translation_C: "계획 C",
                translation_D: "계획 D"
            },
            {
                id: "v4-p4-t04-q97",
                text: "According to the speaker, what will residents be able to vote on?",
                classification: "DETAIL",
                options: {
                    A: "Parking options",
                    B: "Food vendors",
                    C: "Public artwork",
                    D: "Park ideas"
                },
                correctAnswer: "D",
                translation: "화자에 따르면, 주민들은 무엇에 대해 투표할 수 있는가?",
                translation_A: "주차 선택 사항",
                translation_B: "음식 노점상",
                translation_C: "대중 미술품",
                translation_D: "공원 관련 아이디어"
            }
        ],
        script: "In local news, the Bayland Transit Agency has announced that construction has begun on the new Alexton train station, which will offer a direct rail connection to the city center. Spokesperson Claudia Schneider explained that the agency initially considered a more elaborate design with a projected cost of 300 million dollars but ultimately decided to go with a more cost-effective and straightforward proposal with a price tag of 250 million dollars. Not only is it more economical, but an earlier completion date is expected. The building will have an adjacent small park for public use, and beginning in May, residents will be invited to vote on ideas for it.",
        translation: "지역 소식입니다. 베이랜드 교통국은 새로운 알렉스턴 기차역 공사가 시작됐다고 발표했는데요. 이로써 도심까지 철도가 바로 연결될 것입니다. 클라우디아 슈나이더 대변인의 설명에 따르면, 교통국은 처음에 3억 달러가 예상되는 더 정교한 디자인을 고려했으나 결국 2억 5천만 달러 가격의 보다 비용 효율적이고 간단한 제안으로 결정했다고 합니다. 더 경제적일 뿐 아니라 완공 일자도 더 당겨질 것으로 예상됩니다. 건물 인접한 곳에는 대중들이 이용할 수 있는 작은 공원이 생길 예정인데요, 5월부터 주민들은 그 공원에 대한 아이디어에 투표할 것을 요청받을 것입니다."
    },
    {
        testId: 4,
        vol: 4,
        setId: "v4-p4-t04-s10",
        contextType: "B3. 행사 / 연설",
        questionRange: "98-100",
        audio: "/audio/ETS_TOEIC_4/Test_04/Test_04-98-100.mp3",
        image: "/images/ETS_TOEIC_4/Test_04/Part_04/v4_p4_t05_q98.png",
        questions: [
            {
                id: "v4-p4-t04-q98",
                text: "Who is the speaker?",
                classification: "WHO_LOC",
                options: {
                    A: "A structural engineer",
                    B: "A journalist",
                    C: "A tour guide",
                    D: "A city official"
                },
                correctAnswer: "D",
                translation: "화자는 누구인가?",
                translation_A: "구조 공학자",
                translation_B: "기자",
                translation_C: "투어 가이드",
                translation_D: "시 공무원"
            },
            {
                id: "v4-p4-t04-q99",
                text: "Why is a building special?",
                classification: "WHY_REASON",
                options: {
                    A: "It was constructed in a short time.",
                    B: "It has a technologically advanced security system.",
                    C: "It has environmentally friendly features.",
                    D: "It was designed by a famous architect."
                },
                correctAnswer: "C",
                translation: "건물이 특별한 이유는?",
                translation_A: "단기간에 건설됐다.",
                translation_B: "기술적으로 앞선 보안 시스템이 있다.",
                translation_C: "환경친화적 특징이 있다.",
                translation_D: "유명한 건축가가 설계했다."
            },
            {
                id: "v4-p4-t04-q100",
                text: "Look at the graphic. Which floor of the building is not open yet?",
                classification: "GRAPHIC",
                options: {
                    A: "Floor 4",
                    B: "Floor 3",
                    C: "Floor 2",
                    D: "Floor 1"
                },
                correctAnswer: "C",
                translation: "시각 정보에 의하면, 건물 몇 층이 아직 개방되지 못하는가?",
                translation_A: "4층",
                translation_B: "3층",
                translation_C: "2층",
                translation_D: "1층"
            }
        ],
        script: "Welcome, everyone, to the grand opening of the Wilton Business Center. As the mayor, I'm pleased to see this kind of growth in our city. And the environmentally friendly elements incorporated into the design make this building special. In particular, this building is equipped with a water recycling system and insulation made from repurposed cloth. While today is the grand opening, one part of the building—the recreation center—will not be available for use until next month, as final touches are still being added to that floor.",
        translation: "여러분, 윌튼 비즈니스 센터 개소식에 오신 것을 환영합니다. 저는 시장으로서 시가 이렇게 성장하는 것을 볼 수 있어 기쁩니다. 설계에 포함된 환경친화적 요소들이 이 건물을 더 특별하게 합니다. 특히 이 건물은 물 재활용 시스템과 용도를 바꾼 천으로 만든 단열재를 갖추고 있습니다. 오늘이 개소식이지만 건물 일부인 레크리에이션 센터는 다음 달까지 이용할 수 없을 것입니다. 아직 바닥에 마감을 하고 있어서 다음 달까지 이용할 수 없을 것입니다."
    }
];
