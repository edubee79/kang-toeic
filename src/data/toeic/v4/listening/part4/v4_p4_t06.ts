import { Part4Set } from '../types';

export const test6Data: Part4Set[] = [
    {
        testId: 6,
        vol: 4,
        setId: "v4-p4-t06-s01",
        contextType: "C2. 건강 / 여가 / 농장",
        questionRange: "71-73",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-71-73.mp3",
        questions: [
            {
                id: "v4-p4-t06-q71",
                text: "Where does the talk most likely take place?",
                classification: "WHO_LOC",
                options: {
                    A: "At a medical clinic",
                    B: "At an airport",
                    C: "At a fitness center",
                    D: "At a bank"
                },
                correctAnswer: "A",
                translation: "담화는 어디서 이뤄지겠는가?",
                translation_A: "병원",
                translation_B: "공항",
                translation_C: "피트니스 센터",
                translation_D: "은행"
            },
            {
                id: "v4-p4-t06-q72",
                text: "What is mainly being discussed?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "A hiring decision",
                    B: "A marketing campaign",
                    C: "A customer satisfaction survey",
                    D: "An electronic check-in system"
                },
                correctAnswer: "D",
                translation: "주로 무엇에 관해 이야기하는가?",
                translation_A: "고용 결정",
                translation_B: "마케팅 캠페인",
                translation_C: "고객 만족 조사",
                translation_D: "전자 체크인 시스템"
            },
            {
                id: "v4-p4-t06-q73",
                text: "What will happen next Tuesday?",
                classification: "DETAIL",
                options: {
                    A: "A new security system will be installed.",
                    B: "A branch location will open.",
                    C: "A training session will take place.",
                    D: "A product will be delivered."
                },
                correctAnswer: "C",
                translation: "다음 주 화요일에 무슨 일이 있을 것인가?",
                translation_A: "새 보안 시스템이 설치된다.",
                translation_B: "지점이 문을 연다.",
                translation_C: "교육이 진행된다.",
                translation_D: "제품이 배송된다."
            }
        ],
        script: "Hi, everyone—big news. Our clinic is getting a check-in kiosk. What this means is that patients will be able to check themselves in to their medical appointments by clicking through some buttons in the kiosk. You will no longer have to do it for them. I know all of you have been very busy answering phones, scheduling appointments, and checking patients in, so hopefully, this helps to make your work easier. We'll have a very short training session next Tuesday on how the check-in kiosk works.",
        translation: "안녕하세요, 여러분. 중대한 소식이 있습니다. 우리 병원에 체크인 키오스크가 들어옵니다. 이는 환자들이 키오스크의 버튼 몇 개를 클릭하면 진료 예약 건에 대해 스스로 수속을 밟을 수 있다는 뜻입니다. 더 이상 여러분이 해주지 않아도 되는 거죠. 여러분 모두 전화 받고 예약 잡고 환자 수속해 주느라 아주 바빴다는 것을 잘 알고 있어요. 그래서 이것이 여러분의 업무를 더 수월하게 해주는 데 도움이 되었으면 합니다. 다음 주 화요일에 체크인 키오스크가 어떻게 작동하는지에 대해 아주 짧은 교육 시간을 갖겠습니다."
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p4-t06-s02",
        contextType: "D2. 기타 뉴스 / 팟캐스트 / 안내",
        questionRange: "74-76",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-74-76.mp3",
        questions: [
            {
                id: "v4-p4-t06-q74",
                text: "Who is the podcast intended for?",
                classification: "WHO_LOC",
                options: {
                    A: "Party organizers",
                    B: "Travel agents",
                    C: "Technology enthusiasts",
                    D: "Carpenters"
                },
                correctAnswer: "C",
                translation: "팟캐스트는 누구를 위한 것인가?",
                translation_A: "파티 주최자",
                translation_B: "여행사 직원",
                translation_C: "기술 애호가",
                translation_D: "목수"
            },
            {
                id: "v4-p4-t06-q75",
                text: "According to the speaker, what will some listeners need?",
                classification: "DETAIL",
                options: {
                    A: "An insurance policy",
                    B: "A letter of recommendation",
                    C: "An event venue",
                    D: "A license"
                },
                correctAnswer: "D",
                translation: "화자에 따르면, 일부 청자들은 무엇이 필요할 것인가?",
                translation_A: "보험 증서",
                translation_B: "추천서",
                translation_C: "행사 장소",
                translation_D: "면허증"
            },
            {
                id: "v4-p4-t06-q76",
                text: "What information will the speaker share?",
                classification: "DETAIL",
                options: {
                    A: "Application instructions",
                    B: "Retail locations",
                    C: "Names of instructors",
                    D: "User reviews"
                },
                correctAnswer: "A",
                translation: "화자는 어떤 정보를 공유할 것인가?",
                translation_A: "신청 설명",
                translation_B: "소매점 위치",
                translation_C: "강사 이름",
                translation_D: "사용자 후기"
            }
        ],
        script: "Welcome to a new episode of Tomorrow's Technology. Today we'll be talking about drones. If you're planning to buy your first drone, here are a few things you need to know. To begin with, if you want to use the device for commercial purposes, such as photography or videography, then you'll need to apply for a license. I'll share some resources at the end of this podcast to guide your application process.",
        translation: "<투모로우 테크놀로지>의 새 에피소드입니다. 오늘은 드론에 관해 이야기할 예정입니다. 처음 드론을 살 계획이라면 아셔야 할 것들이 있습니다. 우선 해당 기기를 사진 촬영 또는 동영상 촬영 같은 상업적 용도로 사용하고자 한다면, 면허증을 신청해야 할 것입니다. 이 팟캐스트 마지막에 신청 과정을 안내하는 자료를 공유하겠습니다."
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p4-t06-s03",
        contextType: "D2. 기타 뉴스 / 팟캐스트 / 안내",
        questionRange: "77-79",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-77-79.mp3",
        questions: [
            {
                id: "v4-p4-t06-q77",
                text: "Who are the listeners?",
                classification: "WHO_LOC",
                options: {
                    A: "Mechanical engineers",
                    B: "Trade show participants",
                    C: "Government officials",
                    D: "Laboratory assistants"
                },
                correctAnswer: "B",
                translation: "청자들은 누구인가?",
                translation_A: "기계 엔지니어",
                translation_B: "무역 박람회 참가자",
                translation_C: "공무원",
                translation_D: "실험실 조수"
            },
            {
                id: "v4-p4-t06-q78",
                text: "What does the speaker request that the listeners do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Take safety precautions",
                    B: "Sign a registration sheet",
                    C: "Wear name tags",
                    D: "Move their vehicles"
                },
                correctAnswer: "A",
                translation: "화자는 청자들에게 무엇을 하라고 요청하는가?",
                translation_A: "안전 예방 조치 취하기",
                translation_B: "등록부에 서명하기",
                translation_C: "이름표 달기",
                translation_D: "차량 이동시키기"
            },
            {
                id: "v4-p4-t06-q79",
                text: "What will take place in the evening?",
                classification: "DETAIL",
                options: {
                    A: "A debate",
                    B: "An award ceremony",
                    C: "A film screening",
                    D: "A reception"
                },
                correctAnswer: "D",
                translation: "저녁에 무엇이 열릴 것인가?",
                translation_A: "토론",
                translation_B: "시상식",
                translation_C: "영화 상영",
                translation_D: "환영 연회"
            }
        ],
        script: "Attention, exhibitors. Welcome to the Digital Signage Expo, where representatives selling digital billboards and video displays can interact directly with buyers. The exhibit hall will open in fifteen minutes. To ensure everyone's safety, we request that you clear your exhibit area of boxes and debris and be sure cables and electrical cords are securely taped to the floor. And remember, the exhibit hall will close at five P.M. today so that exhibitors can attend this evening's reception. That will be held in the building's main lobby.",
        translation: "출품자 여러분께 알립니다. 디지털 사이니지 엑스포에 오신 것을 환영합니다. 이곳에서는 옥외 디지털 광고판과 비디오 디스플레이를 판매하는 판매업자들이 구매자와 직접 교류할 수 있습니다. 전시장은 15분 후에 문을 엽니다. 모두의 안전을 보장하기 위해 여러분의 전시 공간에서 상자와 쓰레기를 치우시고 전선과 전기 코드를 바닥에 단단히 붙일 것을 요청합니다. 또한 기억해주세요. 출품자들께서 저녁 환영 연회에 참석할 수 있도록 전시장은 오늘 오후 5시에 문을 닫습니다. 연회는 건물 중앙 로비에서 열릴 예정입니다."
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p4-t06-s04",
        contextType: "D2. 기타 뉴스 / 팟캐스트 / 안내",
        questionRange: "80-82",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-80-82.mp3",
        questions: [
            {
                id: "v4-p4-t06-q80",
                text: "Who most likely is the speaker?",
                classification: "WHO_LOC",
                options: {
                    A: "A customer service representative",
                    B: "A software developer",
                    C: "A podcast host",
                    D: "An event coordinator"
                },
                correctAnswer: "C",
                translation: "화자는 누구이겠는가?",
                translation_A: "고객 서비스 담당자",
                translation_B: "소프트웨어 개발자",
                translation_C: "팟캐스트 진행자",
                translation_D: "행사 담당자"
            },
            {
                id: "v4-p4-t06-q81",
                text: "According to the speaker, what can a software application be used for?",
                classification: "DETAIL",
                options: {
                    A: "Making travel reservations",
                    B: "Uploading documents",
                    C: "Managing subscriptions",
                    D: "Searching for discounts"
                },
                correctAnswer: "D",
                translation: "화자에 따르면, 소프트웨어 애플리케이션은 무엇에 이용할 수 있는가?",
                translation_A: "여행 예약",
                translation_B: "문서 업로드",
                translation_C: "구독 관리",
                translation_D: "할인 검색"
            },
            {
                id: "v4-p4-t06-q82",
                text: "How can the listeners receive some free tickets?",
                classification: "DETAIL",
                options: {
                    A: "By clicking on a link",
                    B: "By signing up for a newsletter",
                    C: "By buying a product in-store",
                    D: "By writing a review"
                },
                correctAnswer: "A",
                translation: "청자들은 어떻게 무료 입장권을 받을 수 있는가?",
                translation_A: "링크 클릭",
                translation_B: "소식지 신청",
                translation_C: "매장 내 제품 구매",
                translation_D: "후기 작성"
            }
        ],
        script: "Welcome to Money Reveals, the podcast for smart investors. This week, I'll be discussing the best tips for amateur investors, if you're just getting started. But first, this episode is brought to you by CodeWord. Don't search online for discount coupons any longer! CodeWord is a software application that scans the Internet for promotional codes and applies them to your online shopping cart. If CodeWord finds any discounts, an Apply Coupon button will automatically appear at checkout. What's more, the first 100 listeners to use the download link on my Web site will receive free music festival tickets.",
        translation: "현명한 투자자들을 위한 팟캐스트, <머니 리빌>입니다. 이번 주에는 아마추어 투자자들을 위한 최고의 조언에 대해 이야기합니다, 여러분께서 이제 막 시작하셨다면 말이죠. 먼저, 이번 에피소드는 코드워드가 전해 드립니다. 더 이상 할인 쿠폰을 온라인으로 검색하지 마세요! 코드워드는 인터넷에서 프로모션 코드를 검색하여 이를 여러분의 온라인 장바구니에 적용하는 소프트웨어 애플리케이션입니다. 코드워드가 할인을 발견하면 결제 시 '쿠폰 적용' 버튼이 자동으로 나타납니다. 게다가 저희 웹사이트에서 다운로드 링크를 이용하신 선착순 100명의 청취자는 음악 축제 무료 입장권을 받게 됩니다."
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p4-t06-s05",
        contextType: "B2. 주거",
        questionRange: "83-85",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-83-85.mp3",
        questions: [
            {
                id: "v4-p4-t06-q83",
                text: "Who is the speaker most likely calling?",
                classification: "WHO_LOC",
                options: {
                    A: "A store owner",
                    B: "A property manager",
                    C: "A delivery driver",
                    D: "A restaurant supplier"
                },
                correctAnswer: "B",
                translation: "화자는 누구에게 전화하겠는가?",
                translation_A: "매장 주인",
                translation_B: "건물 관리인",
                translation_C: "배달 운전기사",
                translation_D: "식당 납품업체"
            },
            {
                id: "v4-p4-t06-q84",
                text: "What problem does the speaker have?",
                classification: "WHY_REASON",
                options: {
                    A: "Some appliances have not arrived.",
                    B: "Some boxes have been damaged.",
                    C: "A water cooler is not working.",
                    D: "A sink is not draining."
                },
                correctAnswer: "D",
                translation: "화자는 어떤 문제가 있는가?",
                translation_A: "가전 제품들이 도착하지 않았다.",
                translation_B: "상자들이 훼손됐다.",
                translation_C: "냉수기가 작동하지 않는다.",
                translation_D: "개수대 물이 빠지지 않는다."
            },
            {
                id: "v4-p4-t06-q85",
                text: "Why does the speaker say, \"I think I've done all I can do\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To request that the listener give her a refund",
                    B: "To indicate that she needs the listener's assistance",
                    C: "To explain why she enrolled in a training course",
                    D: "To confirm that a task has been completed"
                },
                correctAnswer: "B",
                translation: "화자가 \"할 수 있는 건 다 해 본 것 같아요\"라고 말하는 이유는 무엇인가?",
                translation_A: "청자에게 환불을 해달라고 요청하려고",
                translation_B: "청자의 도움이 필요하다는 것을 나타내려고",
                translation_C: "교육 과정에 등록한 이유를 설명하려고",
                translation_D: "업무가 완료됐다는 것을 확인하려고"
            }
        ],
        script: "Hi. This is So-Jin in Apartment 2A. I just moved into the complex last month. I'm calling about a problem with my kitchen sink. The drain is completely clogged, so the water won't go down. I've tried a few different drain cleaning products, but they didn't help. I think I've done all I can do. I'm at work now, but I'll be home this afternoon. Could you call me back, so we can arrange a time to meet there? Thanks.",
        translation: "안녕하세요. 2A호에 사는 소진입니다. 지난달에 이 단지로 이사 왔어요. 주방 개수대 문제로 전화했는데요. 배수관이 완전히 막혀서 물이 내려가지 않아요. 몇 가지 다양한 배수관 청소 제품을 써 봤지만 도움이 되지 않았어요. 할 수 있는 건 다 해 본 것 같아요. 지금은 직장에 있지만, 오늘 오후엔 집에 있을 거예요. 저에게 다시 전화 주셔서 만날 시간을 잡을 수 있을까요? 감사합니다."
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p4-t06-s06",
        contextType: "A1. 사무실 업무",
        questionRange: "86-88",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-86-88.mp3",
        questions: [
            {
                id: "v4-p4-t06-q86",
                text: "What will the listeners do next Tuesday?",
                classification: "DETAIL",
                options: {
                    A: "Renew their contracts",
                    B: "Clean their offices",
                    C: "Visit a recycling center",
                    D: "Greet new clients"
                },
                correctAnswer: "B",
                translation: "청자들은 다음 주 화요일에 무엇을 할 것인가?",
                translation_A: "계약서 갱신",
                translation_B: "사무실 청소",
                translation_C: "재활용 센터 방문",
                translation_D: "신규 고객 맞이"
            },
            {
                id: "v4-p4-t06-q87",
                text: "What does the speaker thank Rajeev for doing?",
                classification: "DETAIL",
                options: {
                    A: "Paying for refreshments",
                    B: "Reserving a meeting room",
                    C: "Arranging transportation",
                    D: "Renting some equipment"
                },
                correctAnswer: "D",
                translation: "화자는 라지브가 무엇을 한 것에 대해 감사하는가?",
                translation_A: "다과 비용 지불",
                translation_B: "회의실 예약",
                translation_C: "교통편 마련",
                translation_D: "장비 대여"
            },
            {
                id: "v4-p4-t06-q88",
                text: "Why does the speaker say, \"the south corner of the office has a lot of empty file cabinets\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To suggest a location for some desks",
                    B: "To indicate where some files should be stored",
                    C: "To explain that a task has already been completed",
                    D: "To ask for more office supplies to be ordered"
                },
                correctAnswer: "A",
                translation: "화자가 \"사무실 남쪽 구석에 비어 있는 문서 보관함이 많아요\"라고 말하는 이유는 무엇인가?",
                translation_A: "책상 놓을 장소를 제안하려고",
                translation_B: "파일 보관 장소를 알려 주려고",
                translation_C: "업무가 이미 완료되었음을 설명하려고",
                translation_D: "사무용품을 더 주문해 달라고 요청하려고"
            }
        ],
        script: "Next Tuesday the eleventh is our office cleanup. We'll have bins stationed all around the office for you to put garbage and recycling in. Be sure to shred any documents that have private client information on them. Our office manager Rajeev has rented some extra document shredders for us to use. Thanks for taking care of that, Rajeev. Now, we've hired two new accountants who are supposed to start in a month, and we need to make space for their desks. Now that our work is mostly paperless, the south corner of the office has a lot of empty file cabinets.",
        translation: "다음 주 화요일인 11일은 사무실 대청소가 있습니다. 사무실 곳곳에 쓰레기통을 배치해 여러분이 쓰레기와 재활용품을 넣을 수 있도록 할 것입니다. 고객 개인 정보가 있는 문서는 반드시 모두 파쇄하십시오. 사무실 관리자 라지브가 우리가 사용할 수 있도록 여분의 문서 파쇄기를 빌렸어요. 라지브, 수고해 주셔서 감사합니다. 자, 한 달 뒤 업무를 시작하기로 되어 있는 신입 회계원 두 분을 채용해서, 이들의 책상을 놓을 공간을 만들어야 해요. 우리 업무가 대부분 컴퓨터로 이뤄지기 때문에 사무실 남쪽 구석에 비어 있는 문서 보관함이 많아요."
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p4-t06-s07",
        contextType: "A1. 사무실 업무",
        questionRange: "89-91",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-89-91.mp3",
        questions: [
            {
                id: "v4-p4-t06-q89",
                text: "What does Ziegler Incorporated sell?",
                classification: "WHO_LOC",
                options: {
                    A: "Office paper",
                    B: "Gardening tools",
                    C: "Computers",
                    D: "Car parts"
                },
                correctAnswer: "A",
                translation: "지클러 주식회사는 무엇을 판매하는가?",
                translation_A: "사무용지",
                translation_B: "원예 도구",
                translation_C: "컴퓨터",
                translation_D: "자동차 부품"
            },
            {
                id: "v4-p4-t06-q90",
                text: "According to the speaker, what problem is the company experiencing?",
                classification: "WHY_REASON",
                options: {
                    A: "Staffing shortages",
                    B: "Shipping delays",
                    C: "Limited warehouse space",
                    D: "Insufficient inventory"
                },
                correctAnswer: "B",
                translation: "화자에 따르면, 회사는 어떤 문제를 겪고 있는가?",
                translation_A: "직원 부족",
                translation_B: "배송 지연",
                translation_C: "한정된 창고 공간",
                translation_D: "불충분한 재고"
            },
            {
                id: "v4-p4-t06-q91",
                text: "What will arrive in an e-mail?",
                classification: "DETAIL",
                options: {
                    A: "Some contact information",
                    B: "An order form",
                    C: "A discount code",
                    D: "A price list"
                },
                correctAnswer: "C",
                translation: "이메일로 무엇이 도착할 것인가?",
                translation_A: "연락처",
                translation_B: "주문서",
                translation_C: "할인 코드",
                translation_D: "가격 목록"
            }
        ],
        script: "Hello, and thank you for calling Ziegler Incorporated, the area's top supplier of office paper. Due to bad weather conditions last week, roads around our warehouse were closed. As a result, customers may be experiencing delays in receiving their recent orders. Now that the roads are clear, we've resumed deliveries. However, we'll need a few days to catch up. To make up for this inconvenience, we're offering customers a twenty percent discount on their next purchase. To claim the discount, enter your invoice number on our Web site. Once you do, your discount code will arrive in an e-mail.",
        translation: "안녕하세요. 지역 최고의 사무용지 공급업체 지클러 주식회사에 전화 주셔서 감사합니다. 지난주 악천후 때문에 저희 창고 인근 도로가 봉쇄됐습니다. 그 결과, 고객들이 최근 주문 물품을 받는 데 지연을 겪고 있습니다. 도로가 깨끗이 치워져서 배송을 재개했습니다만, 따라잡는 데는 며칠 걸릴 것입니다. 불편을 보상해 드리기 위해 고객들께 다음 구매 시 20퍼센트 할인을 제공해 드립니다. 할인을 받으시려면 저희 웹사이트에 청구서 번호를 입력하세요. 입력하시면 이메일로 할인 코드가 도착할 겁니다."
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p4-t06-s08",
        contextType: "B3. 행사 / 연설",
        questionRange: "92-94",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-92-94.mp3",
        questions: [
            {
                id: "v4-p4-t06-q92",
                text: "What has the mayor decided to do?",
                classification: "DETAIL",
                options: {
                    A: "Run for election again",
                    B: "Redevelop an area of the city",
                    C: "Host an art festival",
                    D: "Provide public art classes"
                },
                correctAnswer: "B",
                translation: "시장은 무엇을 하기로 결정했는가?",
                translation_A: "선거 재출마",
                translation_B: "시의 한 지역 재개발",
                translation_C: "예술제 개최",
                translation_D: "대중 대상 미술 강좌 제공"
            },
            {
                id: "v4-p4-t06-q93",
                text: "What is the goal of a survey?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "To decide on a theme",
                    B: "To raise money for a project",
                    C: "To educate the public about a problem",
                    D: "To recruit some volunteers"
                },
                correctAnswer: "A",
                translation: "설문 조사의 목적은 무엇인가?",
                translation_A: "주제 결정",
                translation_B: "프로젝트 자금 조달",
                translation_C: "문제에 관한 대중 교육",
                translation_D: "자원봉사자 모집"
            },
            {
                id: "v4-p4-t06-q94",
                text: "Why does the speaker say, \"I think Alvaro Gomez has won several awards\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To correct some information",
                    B: "To praise a museum exhibit",
                    C: "To recommend a suitable candidate",
                    D: "To congratulate a colleague"
                },
                correctAnswer: "C",
                translation: "화자가 \"알바로 고메즈가 여러 번 상을 받은 것 같습니다\"라고 말하는 이유는 무엇인가?",
                translation_A: "정보를 바로잡기 위해",
                translation_B: "미술관 전시회를 칭찬하기 위해",
                translation_C: "적합한 후보자를 추천하기 위해",
                translation_D: "동료를 축하하기 위해"
            }
        ],
        script: "As members of the city's Arts Commission, it's our responsibility to manage arts programs and initiatives. The mayor's decision to redevelop the Hoverton District is welcome news across the community. And for our commission, it's an opportunity to integrate sculptures into public spaces there. We'll need to determine what overall community themes should be addressed and prioritized. So I think it's important that we conduct a survey regarding the residents' preferences. It's a diverse community with a range of perspectives to consider. And, of course, in order for the artwork to be built, we'll need to hire a skilled artist for the task. I think Alvaro Gomez has won several awards.",
        translation: "시 예술 위원회 회원으로서 예술 프로그램과 계획을 관리하는 것은 우리 책임입니다. 호버튼 지구를 재개발하겠다는 시장의 결정은 지역사회 전체에 반가운 소식입니다. 그리고 우리 위원회는 조각품들을 그곳 공공장소에 접목시킬 기회입니다. 우리는 지역사회 전체 테마로 어떤 것들을 다루고 어떤 것을 우선시해야 할지 결정해야 합니다. 그래서 저는 주민들의 선호도 조사를 하는 것이 중요하다고 생각합니다. 고려해야 할 폭넓은 관점이 있는 다양한 지역사회입니다. 물론 예술품이 만들어지려면 그 일을 위해 숙련된 예술가를 고용해야 할 것입니다. 알바로 고메즈가 여러 번 상을 받은 것 같습니다."
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p4-t06-s09",
        contextType: "C1. 일상 (물건 구매 등)",
        questionRange: "95-97",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-95-97.mp3",
        image: "/images/ETS_TOEIC_4/Test_06/Part_04/v4_p4_t06_q95.png",
        questions: [
            {
                id: "v4-p4-t06-q95",
                text: "Who most likely is the speaker?",
                classification: "WHO_LOC",
                options: {
                    A: "A seating usher",
                    B: "A band director",
                    C: "A stage actor",
                    D: "A sales agent"
                },
                correctAnswer: "D",
                translation: "화자는 누구이겠는가?",
                translation_A: "좌석 안내원",
                translation_B: "악단 지휘자",
                translation_C: "연극 배우",
                translation_D: "판매원"
            },
            {
                id: "v4-p4-t06-q96",
                text: "Look at the graphic. How much do tickets in the available section cost?",
                classification: "GRAPHIC",
                options: {
                    A: "$75",
                    B: "$100",
                    C: "$125",
                    D: "$150"
                },
                correctAnswer: "C",
                translation: "시각 정보에 의하면, 이용 가능한 구역의 표는 얼마인가?",
                translation_A: "75달러",
                translation_B: "100달러",
                translation_C: "125달러",
                translation_D: "150달러"
            },
            {
                id: "v4-p4-t06-q97",
                text: "What does the listener need to do within 24 hours?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Make a phone call",
                    B: "Send in a payment",
                    C: "Pick up an item",
                    D: "Fill out a form"
                },
                correctAnswer: "A",
                translation: "청자는 24시간 이내에 무엇을 해야 하는가?",
                translation_A: "전화하기",
                translation_B: "지불하기",
                translation_C: "물품 가져가기",
                translation_D: "서식 기입하기"
            }
        ],
        script: "Good afternoon, Mr. Kwon, this is Olga Popova from the Smith Theater. You're next on the wait list for theater tickets. On your preference form, you requested four tickets together in either the orchestra or the mid-balcony. Unfortunately, those sections are completely sold out on the date you requested. But I do have four tickets together in the lower balcony for that date. I'll be happy to set aside those tickets if you'd like. I can hold this request for 24 hours. Please call our box office as soon as possible to let me know if you're still interested.",
        translation: "안녕하세요, 권 씨. 스미스 극장의 올가 포포바입니다. 귀하가 극장표 대기자 명단의 다음 차례이신데요. 선호도 양식에서 오케스트라석이나 중간 발코니석으로 표 4장을 요청하셨는데요, 안타깝게도 해당 구역은 요청하신 날짜에 완전히 매진됐어요. 하지만 해당 날짜에 아래 발코니석에는 함께 붙은 4장의 표가 있습니다. 원하신다면 해당 표를 확보해 두겠습니다. 해당 요청은 24시간 동안 유지할 수 있어요. 최대한 빨리 저희 매표소로 전화 주셔서 아직 관심이 있으신지 알려 주세요."
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p4-t06-s10",
        contextType: "C2. 건강 / 여가 / 농장",
        questionRange: "98-100",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-98-100.mp3",
        image: "/images/ETS_TOEIC_4/Test_06/Part_04/v4_p4_t06_q98.png",
        questions: [
            {
                id: "v4-p4-t06-q98",
                text: "Look at the graphic. Which stop has been canceled?",
                classification: "GRAPHIC",
                options: {
                    A: "Stop 1",
                    B: "Stop 2",
                    C: "Stop 3",
                    D: "Stop 4"
                },
                correctAnswer: "C",
                translation: "시각 정보에 의하면, 어떤 목적지가 취소됐는가?",
                translation_A: "1번 목적지",
                translation_B: "2번 목적지",
                translation_C: "3번 목적지",
                translation_D: "4번 목적지"
            },
            {
                id: "v4-p4-t06-q99",
                text: "Why has a stop been canceled?",
                classification: "WHY_REASON",
                options: {
                    A: "A guest speaker is unavailable.",
                    B: "A building is undergoing maintenance.",
                    C: "An area has closed for a festival.",
                    D: "A private event has been scheduled."
                },
                correctAnswer: "B",
                translation: "목적지가 왜 취소됐는가?",
                translation_A: "초청 연사가 시간이 안 된다.",
                translation_B: "건물이 유지보수 작업을 하고 있다.",
                translation_C: "지역이 축제로 폐쇄됐다.",
                translation_D: "개인 행사 일정이 잡혔다."
            },
            {
                id: "v4-p4-t06-q100",
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
        script: "Welcome to this bus tour of the Kensey Harbor. Unfortunately, one of the stops on our itinerary, the museum, is closed, and we won't be able to visit it. The museum had a water pipe burst overnight. It looks like repair and cleanup work will last this whole week. I apologize, since I know many of you were looking forward to seeing the museum's exhibit on local fish. To make up for this, we're providing complimentary meal vouchers so you can enjoy a free lunch, on us, when we get to the area around the cannery.",
        translation: "켄시 하버 버스 투어에 오신 것을 환영합니다. 안타깝게도, 일정표에 있는 목적지 중 하나인 박물관이 문을 닫아서 방문할 수가 없습니다. 간밤에 박물관에서 배수관이 터졌답니다. 이번 주 내내 수리 및 청소 작업이 지속될 것 같습니다. 많은 분께서 박물관의 현지 물고기 전시를 보고 싶어 하셨다는 걸 알기에 사과의 말씀을 드립니다. 이를 보상하기 위해 무료 식권을 제공해 드리니 통조림 공장 근처 지역에 도착하면 무료 점심 식사를 하실 수 있습니다."
    }
];
