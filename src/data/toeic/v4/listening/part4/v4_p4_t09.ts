import { Part4Set } from '../types';

export const test9Data: Part4Set[] = [
    {
        testId: 9,
        vol: 4,
        setId: "v4-p4-t09-s01",
        contextType: "D2. 기타 뉴스 / 팟캐스트 / 안내",
        questionRange: "71-73",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-71-73.mp3",
        questions: [
            {
                id: "v4-p4-t09-q71",
                text: "Where is the announcement most likely being made?",
                classification: "WHO_LOC",
                options: {
                    A: "At a clothing shop",
                    B: "At a bookstore",
                    C: "At a hardware store",
                    D: "At an auto dealership"
                },
                correctAnswer: "B",
                translation: "공지는 어디서 이루어지겠는가?",
                translation_A: "의류 매장",
                translation_B: "서점",
                translation_C: "철물점",
                translation_D: "자동차 대리점"
            },
            {
                id: "v4-p4-t09-q72",
                text: "What does the speaker say is happening this week?",
                classification: "DETAIL",
                options: {
                    A: "Discounts are being offered.",
                    B: "An area is being remodeled.",
                    C: "New merchandise is arriving.",
                    D: "Interviews are being conducted."
                },
                correctAnswer: "A",
                translation: "화자는 이번 주에 무슨 일이 있다고 말하는가?",
                translation_A: "할인이 제공된다.",
                translation_B: "한 구역에 리모델링을 한다.",
                translation_C: "신상품이 도착한다.",
                translation_D: "면접이 진행된다."
            },
            {
                id: "v4-p4-t09-q73",
                text: "What does the speaker remind the listeners about?",
                classification: "DETAIL",
                options: {
                    A: "A return policy",
                    B: "A rewards program",
                    C: "An updated Web site",
                    D: "An additional location"
                },
                correctAnswer: "D",
                translation: "화자는 청자들에게 무엇을 상기시키는가?",
                translation_A: "반품 정책",
                translation_B: "보상 프로그램",
                translation_C: "웹사이트 업데이트",
                translation_D: "또 다른 지점"
            }
        ],
        script: "Attention, all Curious Minds shoppers. During our going-out-of-business sale, all of our hardcover books are being deeply discounted. From now until the end of the week, they will be sold at an 80 percent discount. In addition, all paperbacks will be 50 percent off this week. And please remember—while this store will be shutting down soon, you will still be able to shop in person at our Lawrenceville location, which is just a fifteen-minute drive from here.",
        translation: "큐리어스 마인즈 쇼핑객 여러분께 알립니다. 저희 폐업 세일 중에는 모든 양장본 도서를 많이 할인해 드립니다. 지금부터 이번 주말까지 80퍼센트 할인 판매됩니다. 또한 페이퍼백 도서는 이번 주 50퍼센트 할인합니다. 본 매장은 곧 문을 닫지만 저희 로렌스빌 지점에서는 계속 직접 구입하실 수 있다는 걸 기억해 주세요. 여기서 차로 15분 거리입니다."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p4-t09-s02",
        contextType: "A1. 사무실 업무",
        questionRange: "74-76",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-74-76.mp3",
        questions: [
            {
                id: "v4-p4-t09-q74",
                text: "What is the speaker discussing?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "A vacation schedule",
                    B: "A professional-development opportunity",
                    C: "A department's social event",
                    D: "A marketing campaign"
                },
                correctAnswer: "C",
                translation: "화자는 무엇에 대해 이야기하는가?",
                translation_A: "휴가 일정",
                translation_B: "직무 능력 개발 기회",
                translation_C: "부서 친목 행사",
                translation_D: "마케팅 캠페인"
            },
            {
                id: "v4-p4-t09-q75",
                text: "Why does the speaker say, \"there's a bank across the street\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To request assistance",
                    B: "To make a suggestion",
                    C: "To provide driving directions",
                    D: "To complain about a location"
                },
                correctAnswer: "B",
                translation: "화자가 \"길 건너편에 은행이 있어요\"라고 말하는 이유는?",
                translation_A: "도움을 요청하려고",
                translation_B: "제안하려고",
                translation_C: "길 안내를 제공하려고",
                translation_D: "위치에 대해 불만을 제기하려고"
            },
            {
                id: "v4-p4-t09-q76",
                text: "What does the speaker ask the listeners to do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Fill out a sign-up sheet",
                    B: "E-mail agenda items",
                    C: "Attend an additional meeting",
                    D: "Complete an evaluation form"
                },
                correctAnswer: "A",
                translation: "화자는 청자들에게 무엇을 하라고 요청하는가?",
                translation_A: "신청서 작성하기",
                translation_B: "의제를 이메일로 보내기",
                translation_C: "추가 회의에 참석하기",
                translation_D: "평가서 작성하기"
            }
        ],
        script: "Before we wrap up this meeting, I wanted to discuss the picnic our department has been planning for next Saturday. I've already purchased most of the decorations, and Lorenzo has volunteered to bring a cake. Actually, Lorenzo, there's a great bakery not far from the park that you could order from. It's cash only, but there's a bank across the street, though. I've posted a list of what we still need in the break room, so write your name next to the item you'll bring.",
        translation: "이 회의를 마치기 전에, 우리 부서에서 다음 주 토요일로 계획한 야유회에 대해 이야기하고 싶습니다. 장식품 대부분은 제가 이미 구입했고, 로렌조가 케이크를 가져오겠다고 자원했어요. 사실, 로렌조, 공원에서 멀지 않은 곳에 당신이 주문할 수 있는 훌륭한 제과점이 있어요. 현금만 받지만, 길 건너편에 은행이 있어요. 휴게실에 아직 필요한 물품 목록을 게시해 뒀으니 가져올 물품 옆에 자신의 이름을 적어주세요."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p4-t09-s03",
        contextType: "D1. 일반 뉴스",
        questionRange: "77-79",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-77-79.mp3",
        questions: [
            {
                id: "v4-p4-t09-q77",
                text: "Why is Malton Supermarket hosting a party?",
                classification: "WHY_REASON",
                options: {
                    A: "To welcome a new manager",
                    B: "To celebrate an anniversary",
                    C: "To thank local suppliers",
                    D: "To promote new products"
                },
                correctAnswer: "B",
                translation: "몰튼 슈퍼마켓은 왜 파티를 여는가?",
                translation_A: "새 관리자를 환영하려고",
                translation_B: "기념일을 축하하려고",
                translation_C: "지역 공급업체에 감사를 전하려고",
                translation_D: "신제품을 홍보하려고"
            },
            {
                id: "v4-p4-t09-q78",
                text: "According to Antonella Lambert, why is Malton Supermarket successful?",
                classification: "DETAIL",
                options: {
                    A: "It is open 24 hours a day.",
                    B: "It is near public transportation.",
                    C: "It offers international products.",
                    D: "It provides friendly service."
                },
                correctAnswer: "C",
                translation: "안토넬라 램버트에 따르면, 몰튼 슈퍼마켓은 왜 성공을 거뒀는가?",
                translation_A: "하루 24시간 영업한다.",
                translation_B: "대중교통을 이용하기에 가깝다.",
                translation_C: "해외 제품을 제공한다.",
                translation_D: "친절한 서비스를 제공한다."
            },
            {
                id: "v4-p4-t09-q79",
                text: "Why is Antonella Lambert raising funds?",
                classification: "WHY_REASON",
                options: {
                    A: "To open additional locations",
                    B: "To remodel a space",
                    C: "To increase advertising",
                    D: "To support a charity"
                },
                correctAnswer: "A",
                translation: "안토넬라 램버트는 왜 기금을 모으는가?",
                translation_A: "추가 지점을 열려고",
                translation_B: "공간을 개조하려고",
                translation_C: "광고를 늘리려고",
                translation_D: "자선 단체를 지원하려고"
            }
        ],
        script: "In local news, Malton Supermarket is throwing a party today to celebrate its one-year anniversary. I spoke with owner Antonella Lambert about the store's success. She told me that Malton strives to offer products from all over the world to meet the needs of the city's diverse population. And customers have responded with enthusiasm, happy to find familiar products from their countries of origin. As for her vision for the future, Lambert said she's already started raising money from investors so that she can open more Malton Supermarkets in adjacent towns.",
        translation: "지역 소식입니다. 몰튼 슈퍼마켓이 오늘 창립 1주년을 기념해 파티를 개최합니다. 매장의 성공에 관해 안토넬라 램버트 사장과 말씀을 나눴는데요. 그녀의 말에 따르면, 몰튼은 다양한 시민들의 수요에 맞춰 전 세계에서 온 물품을 제공하는 데 힘쓰고 있다고 합니다. 고객들은 자신의 고국에서 온 친숙한 물건을 찾아 기뻐하며 열정적으로 반응하고 있습니다. 램버트는 미래 자신의 비전에 관해, 인접한 지역에 몰튼 슈퍼마켓을 더 많이 열 수 있도록 이미 투자자들로부터 기금을 모으기 시작했다고 말했습니다."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p4-t09-s04",
        contextType: "A1. 사무실 업무",
        questionRange: "80-82",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-80-82.mp3",
        questions: [
            {
                id: "v4-p4-t09-q80",
                text: "What is not working properly?",
                classification: "DETAIL",
                options: {
                    A: "The lighting",
                    B: "The plumbing",
                    C: "A payment portal",
                    D: "An Internet connection"
                },
                correctAnswer: "D",
                translation: "무엇이 제대로 작동하지 않는가?",
                translation_A: "조명",
                translation_B: "배관",
                translation_C: "급여 사이트",
                translation_D: "인터넷 연결"
            },
            {
                id: "v4-p4-t09-q81",
                text: "According to the speaker, what will happen in the next few hours?",
                classification: "DETAIL",
                options: {
                    A: "A technician will come in.",
                    B: "A complaint will be filed.",
                    C: "A Web site will be updated.",
                    D: "An office will close."
                },
                correctAnswer: "A",
                translation: "화자에 따르면, 앞으로 몇 시간 동안 어떤 일이 있을 것인가?",
                translation_A: "기술자가 올 것이다.",
                translation_B: "항의가 제기될 것이다.",
                translation_C: "웹사이트가 업데이트될 것이다.",
                translation_D: "사무실이 문을 닫을 것이다."
            },
            {
                id: "v4-p4-t09-q82",
                text: "What does the speaker mean when he says, \"I've talked to your team leads about the issue\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "The team leads will take over a project.",
                    B: "A deadline will be adjusted.",
                    C: "New teams will be formed.",
                    D: "An extra expense will be approved."
                },
                correctAnswer: "B",
                translation: "화자가 \"해당 문제에 대해 여러분의 팀장들에게 이야기해 두었어요\"라고 말하는 의도는 무엇인가?",
                translation_A: "팀장들이 프로젝트를 맡을 예정이다.",
                translation_B: "마감 기한이 조정될 것이다.",
                translation_C: "팀을 새로 구성할 것이다.",
                translation_D: "추가 지출이 승인될 것이다."
            }
        ],
        script: "Hi, everyone. I'd just like to say that I'm aware of the issues you're experiencing with Internet speed and connectivity in the office. I realize how difficult it is to get your work done with the interruptions. We're fixing it as fast as we can—a technician is coming in an hour or two. I know the sales reports are due on Wednesday, but I've talked to your team leads about the issue. As always, thanks for your hard work.",
        translation: "안녕하세요, 여러분. 사무실 인터넷 속도와 연결에 관해 겪고 계신 문제점을 제가 알고 있다는 사실을 말씀드리고 싶네요. 중간에 이런 문제가 끼어들면 업무를 완수하기가 얼마나 어려운지 압니다. 최대한 빨리 고치려고 합니다. 기술자가 한두 시간 후에 올 겁니다. 매출 보고서 마감이 수요일인 것으로 알고 있는데요. 해당 문제에 대해 여러분의 팀장들에게 이야기해 두었어요. 여러분의 노고에 늘 감사드립니다."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p4-t09-s05",
        contextType: "C1. 일상 생활",
        questionRange: "83-85",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-83-85.mp3",
        questions: [
            {
                id: "v4-p4-t09-q83",
                text: "What type of business does the speaker own?",
                classification: "WHO_LOC",
                options: {
                    A: "A tea shop",
                    B: "A childcare center",
                    C: "A pottery studio",
                    D: "A party supply store"
                },
                correctAnswer: "A",
                translation: "화자는 어떤 종류의 업체를 가지고 있는가?",
                translation_A: "찻집",
                translation_B: "탁아소",
                translation_C: "도자기 공방",
                translation_D: "파티용품 매장"
            },
            {
                id: "v4-p4-t09-q84",
                text: "What does the speaker imply when she says, \"you've worked here for five months now\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "The listener is capable of doing a task.",
                    B: "The listener should apply for a promotion.",
                    C: "The speaker is ready to retire.",
                    D: "A training period is too short."
                },
                correctAnswer: "A",
                translation: "화자가 \"이제 일하신 지 다섯 달이 되니까요\"라고 말하는 의도는 무엇인가?",
                translation_A: "청자는 업무를 완수할 능력이 있다.",
                translation_B: "청자는 승진 신청을 해야 한다.",
                translation_C: "화자는 은퇴할 준비가 됐다.",
                translation_D: "교육 기간이 너무 짧다."
            },
            {
                id: "v4-p4-t09-q85",
                text: "What does the speaker say is located in the back room?",
                classification: "DETAIL",
                options: {
                    A: "Some decorations",
                    B: "A video projector",
                    C: "Some furniture",
                    D: "Some dishes"
                },
                correctAnswer: "C",
                translation: "화자는 안쪽 방에서 무엇을 찾을 수 있다고 말하는가?",
                translation_A: "장식품",
                translation_B: "비디오 프로젝터",
                translation_C: "가구",
                translation_D: "접시"
            }
        ],
        script: "Hi, Ling. I just received a call from a group asking to reserve the tearoom for tomorrow. They would like us to decide on the entire menu for the tea party, from the tea selection to the food options. I'd like you to handle the preparations. I know you've never been in charge of a tea party before, but you've worked here for five months now. By the way, there will be children at the party. Please make sure some low tables and chairs are set up for them. You'll find them in the back room.",
        translation: "안녕하세요, 링. 내일 티룸 예약을 요청하는 단체의 전화를 받았는데요. 차 선택부터 음식 메뉴까지 티파티 메뉴 전체를 우리 보고 정해달라고 하네요. 그 준비를 맡아 주셨으면 해요. 티파티는 전에 맡아보신 적이 없는 걸로 알지만, 이제 일하신 지 다섯 달이 되니까요. 그런데 파티에 아이들도 참석할 거예요. 아이들을 위해 낮은 탁자와 의자를 놓아주세요. 안쪽 방에 있을 거예요."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p4-t09-s06",
        contextType: "A1. 사무실 업무",
        questionRange: "86-88",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-86-88.mp3",
        questions: [
            {
                id: "v4-p4-t09-q86",
                text: "What industry does the speaker most likely work in?",
                classification: "WHO_LOC",
                options: {
                    A: "Transportation",
                    B: "Health care",
                    C: "Hospitality",
                    D: "Entertainment"
                },
                correctAnswer: "A",
                translation: "화자는 어떤 업계에서 일하겠는가?",
                translation_A: "운수업계",
                translation_B: "의료업계",
                translation_C: "접객 서비스 업계",
                translation_D: "연예계"
            },
            {
                id: "v4-p4-t09-q87",
                text: "What does the speaker say is a priority?",
                classification: "DETAIL",
                options: {
                    A: "Upgrading some equipment",
                    B: "Promoting an industry event",
                    C: "Hiring more staff",
                    D: "Increasing inventory"
                },
                correctAnswer: "C",
                translation: "화자는 무엇이 우선 사항이라고 말하는가?",
                translation_A: "장비 업그레이드",
                translation_B: "업계 행사 홍보",
                translation_C: "직원 추가 채용",
                translation_D: "재고 확대"
            },
            {
                id: "v4-p4-t09-q88",
                text: "What change does the speaker mention?",
                classification: "DETAIL",
                options: {
                    A: "A shuttle bus will be provided.",
                    B: "Free meals will be available.",
                    C: "A work schedule will be reduced.",
                    D: "An additional branch has been opened."
                },
                correctAnswer: "B",
                translation: "화자는 어떤 변화를 언급하는가?",
                translation_A: "셔틀버스가 제공될 것이다.",
                translation_B: "무료 식사가 제공될 것이다.",
                translation_C: "업무 일정이 줄어들 것이다.",
                translation_D: "추가 지점을 열었다."
            }
        ],
        script: "Peak travel season is almost here. And, as everyone knows, we don't have enough baggage handlers, ground crew, or ticketing agents to handle the demand. Passengers are experiencing longer lines and flight delays. Therefore, hiring more staff is our top priority. Now, we already have an incentive program for employees to refer friends for open positions. Please continue referring your friends to apply to work for us. And, for our current staff, we're now going to start offering complimentary meals in all employee lounges starting this month. We want you to know that you're valued and appreciated.",
        translation: "여행 성수기가 거의 다가왔습니다. 다들 아시는 대로 수요를 처리할 수하물 담당자, 지상직 직원, 발권 담당자가 충분치 않습니다. 승객들은 오랜 대기와 항공편 지연을 겪고 있어요. 따라서 직원을 더 채용하는 것이 우리의 최우선 사항입니다. 자, 직원이 공석에 지인을 추천하면 보상을 주는 인센티브 프로그램이 이미 있어요. 계속해서 지인들에게 우리 회사에 지원하라고 추천해주세요. 또한 현 직원들을 위해 이번 달부터 모든 직원 라운지에서 무료 식사를 제공해 드리려고 합니다. 여러분을 소중하게 생각하고 감사한다는 점을 알아주시기 바랍니다."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p4-t09-s07",
        contextType: "B1. 조립 라인 / 공장",
        questionRange: "89-91",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-89-91.mp3",
        questions: [
            {
                id: "v4-p4-t09-q89",
                text: "Where do the listeners most likely work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a jewelry store",
                    B: "At a security company",
                    C: "At a factory",
                    D: "At a university"
                },
                correctAnswer: "C",
                translation: "청자들은 어디서 일하겠는가?",
                translation_A: "귀금속 매장",
                translation_B: "보안업체",
                translation_C: "공장",
                translation_D: "대학교"
            },
            {
                id: "v4-p4-t09-q90",
                text: "Why does the speaker apologize?",
                classification: "WHY_REASON",
                options: {
                    A: "A wait time increased.",
                    B: "A hiring was delayed.",
                    C: "A new rule may be unpopular.",
                    D: "Some items cannot be stored on-site."
                },
                correctAnswer: "C",
                translation: "화자는 왜 사과하는가?",
                translation_A: "대기 시간이 늘어났다.",
                translation_B: "채용이 지연됐다.",
                translation_C: "새 규칙이 인기가 없을 수 있다.",
                translation_D: "일부 품목은 현장에 보관할 수 없다."
            },
            {
                id: "v4-p4-t09-q91",
                text: "What are the listeners reminded to do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Secure their belongings",
                    B: "Verify their appointment time",
                    C: "Provide detailed information",
                    D: "Arrive early"
                },
                correctAnswer: "A",
                translation: "청자들에게 무엇을 하라고 상기시키는가?",
                translation_A: "소지품 안전하게 보관하기",
                translation_B: "약속 시간 확인하기",
                translation_C: "상세 정보 제공하기",
                translation_D: "일찍 도착하기"
            }
        ],
        script: "Some quick announcements before we start the assembly-line machines for the day. First, I need to tell you about a new safety standard for everyone working on the factory floor. Starting immediately, rings, earrings, and jewelry of any kind will not be allowed on the floor during your shift. Sorry—I know some of you will find this regulation inconvenient. As a reminder, keep your belongings safe during your shift. I recommend you put a lock on your designated locker in the break room. If you need one, I have a few in my office.",
        translation: "오늘 조립 라인 기계를 가동하기에 앞서 간단히 공지할 것이 있습니다. 첫째, 공장 작업 현장에서 일하시는 모든 분께 새로운 안전 기준을 말씀드릴 필요가 있습니다. 지금부터 근무 시간 중에는 작업장에서 반지, 귀걸이 및 어떤 종류의 장신구도 허용하지 않습니다. 이 규정이 불편한 분들도 있으실 것 같아 죄송합니다. 혹시나 해서 말씀드리자면, 근무 시간 동안에는 소지품을 안전하게 보관하십시오. 휴게실에 있는 지정된 사물함에 자물쇠를 채우실 것을 권합니다. 필요하시면 제 사무실에 몇 개 있습니다."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p4-t09-s08",
        contextType: "A1. 사무실 업무",
        questionRange: "92-94",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-92-94.mp3",
        questions: [
            {
                id: "v4-p4-t09-q92",
                text: "What is the speaker announcing?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "A security update",
                    B: "A menu adjustment",
                    C: "A mandatory uniform",
                    D: "A schedule change"
                },
                correctAnswer: "D",
                translation: "화자는 무엇에 관해 공지하는가?",
                translation_A: "보안 업데이트",
                translation_B: "메뉴 조정",
                translation_C: "의무 착용 유니폼",
                translation_D: "일정 변경"
            },
            {
                id: "v4-p4-t09-q93",
                text: "Where do the listeners most likely work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a farm",
                    B: "At a restaurant",
                    C: "At a public park",
                    D: "At an electronics store"
                },
                correctAnswer: "B",
                translation: "청자들은 어디서 일하겠는가?",
                translation_A: "농장",
                translation_B: "음식점",
                translation_C: "공원",
                translation_D: "전자 제품 매장"
            },
            {
                id: "v4-p4-t09-q94",
                text: "What does the speaker reassure the listeners about?",
                classification: "DETAIL",
                options: {
                    A: "They will be paid overtime.",
                    B: "They will receive annual bonuses.",
                    C: "Their paycheck mistake will be corrected.",
                    D: "There will still be work available."
                },
                correctAnswer: "D",
                translation: "화자는 청자들에게 무엇에 대해 안심시키는가?",
                translation_A: "초과 근무 수당을 받을 것이다.",
                translation_B: "연간 보너스를 받을 것이다.",
                translation_C: "급여 오류를 바로잡을 것이다.",
                translation_D: "일이 계속 있을 것이다."
            }
        ],
        script: "Good morning, all. I have a quick announcement about some staff shifts. Starting next week, everybody will see their evening hours adjusted. Since summer is ending and people are having dinner earlier, we're going to be closing at eight instead of ten P.M. on weekdays. It doesn't make financial sense for our kitchen to stay open late. This is a seasonal adjustment that we make every year. There's no reason for you to worry. We still have plenty of customers in the winter.",
        translation: "안녕하세요, 여러분. 직원 교대 근무 시간에 대해 간단히 안내 드립니다. 다음 주부터 모든 직원의 저녁 근무 시간이 조정되어 있을 겁니다. 여름이 끝나가고 다들 저녁을 일찍 먹으니 평일에는 밤 10시 대신 8시에 마감할 예정입니다. 우리 식당이 늦게까지 영업하는 건 경제적인 측면에서 말이 안 돼요. 매년 있는 계절성 조정 사항입니다. 걱정하지 않으셔도 됩니다. 겨울철에도 손님은 많으니까요."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p4-t09-s09",
        contextType: "C2. 건강 / 여가 / 농장",
        questionRange: "95-97",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-95-97.mp3",
        image: "/images/ETS_TOEIC_4/Test_09/Part_04/v4_p4_t09_q95.png",
        questions: [
            {
                id: "v4-p4-t09-q95",
                text: "According to the speaker, what has changed at the farm?",
                classification: "DETAIL",
                options: {
                    A: "The prices",
                    B: "The type of crops",
                    C: "The management",
                    D: "The hours of operation"
                },
                correctAnswer: "C",
                translation: "화자에 따르면, 농장에 어떤 변화가 있는가?",
                translation_A: "가격",
                translation_B: "농작물 유형",
                translation_C: "운영진",
                translation_D: "운영시간"
            },
            {
                id: "v4-p4-t09-q96",
                text: "Look at the graphic. When does the mentioned activity take place?",
                classification: "GRAPHIC",
                options: {
                    A: "On June 2",
                    B: "On June 9",
                    C: "On June 16",
                    D: "On June 23"
                },
                correctAnswer: "A",
                translation: "시각 정보에 의하면, 언급된 활동은 언제 진행되는가?",
                translation_A: "6월 2일",
                translation_B: "6월 9일",
                translation_C: "6월 16일",
                translation_D: "6월 23일"
            },
            {
                id: "v4-p4-t09-q97",
                text: "What are visitors to the business advised to do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Come on weekdays",
                    B: "Park in a designated area",
                    C: "Bring reusable containers",
                    D: "Use an alternate entrance"
                },
                correctAnswer: "D",
                translation: "업체 방문객에게 무엇을 하라고 조언하는가?",
                translation_A: "평일에 방문하기",
                translation_B: "지정된 구역에 주차하기",
                translation_C: "재사용할 수 있는 용기 가져오기",
                translation_D: "대체 입구 이용하기"
            }
        ],
        script: "You've reached Hayberry Farm in Millville. We're excited to announce that we're now under new management. Even with the management change, the farm will still be offering a full schedule of summer activities. We're now accepting registrations for our popular cooking class! This class focuses on making delicious meals with fresh ingredients. You can find more information on our Web site. Also, be aware that our Western Road entrance is closed until the end of June because of road construction. Visitors should use our entrance on Anderson Road.",
        translation: "밀빌의 헤이베리 농장입니다. 저희 운영진이 새로 바뀐 것을 알리게 되어 기쁩니다. 운영진은 바뀌었지만 저희 농장은 계속해서 여름 활동 일정을 모두 제공합니다. 지금 인기 많은 요리 강좌 등록을 받고 있습니다! 본 강좌는 신선한 재료로 맛있는 요리를 만드는 데 중점을 두고 있어요. 저희 웹사이트에서 더 많은 정보를 보실 수 있습니다. 또한, 도로 공사로 인해 6월 말까지 웨스턴 로 입구는 폐쇄됨을 알려드립니다. 방문객들은 앤더슨 로 입구를 이용하셔야 합니다."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p4-t09-s10",
        contextType: "D1. 일반 뉴스",
        questionRange: "98-100",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-98-100.mp3",
        image: "/images/ETS_TOEIC_4/Test_09/Part_04/v4_p4_t09_q98.png",
        questions: [
            {
                id: "v4-p4-t09-q98",
                text: "What does the speaker say residents have noticed?",
                classification: "DETAIL",
                options: {
                    A: "Rising fuel prices",
                    B: "Limited housing options",
                    C: "Traffic congestion",
                    D: "Increased taxes"
                },
                correctAnswer: "D",
                translation: "화자는 주민들이 무엇을 알아챘다고 말하는가?",
                translation_A: "유류비 상승",
                translation_B: "한정적인 주택 선택의 폭",
                translation_C: "교통 혼잡",
                translation_D: "세금 증가"
            },
            {
                id: "v4-p4-t09-q99",
                text: "Look at the graphic. What is the cost of the project currently being worked on?",
                classification: "GRAPHIC",
                options: {
                    A: "$425,000",
                    B: "$375,000",
                    C: "$328,000",
                    D: "$460,000"
                },
                correctAnswer: "C",
                translation: "시각 정보에 의하면, 현재 진행 중인 프로젝트 비용은 얼마인가?",
                translation_A: "425,000달러",
                translation_B: "375,000달러",
                translation_C: "328,000달러",
                translation_D: "460,000달러"
            },
            {
                id: "v4-p4-t09-q100",
                text: "What is scheduled for Wednesday?",
                classification: "DETAIL",
                options: {
                    A: "A fund-raiser",
                    B: "A festival",
                    C: "An election",
                    D: "A debate"
                },
                correctAnswer: "D",
                translation: "수요일로 예정된 일은 무엇인가?",
                translation_A: "모금 행사",
                translation_B: "축제",
                translation_C: "선거",
                translation_D: "토론회"
            }
        ],
        script: "This is Yun Kang with local information for Greenville residents. Your taxes have increased significantly this year—I know you've noticed, and you want to know what your money's being spent on! The city is going ahead with four major projects to improve your library, parkland, firehouse, and streets. Work on the firehouse is currently in progress, while the other projects will be started in coming months. Remember: the election for mayor is approaching, and your vote affects what projects become future priorities in the community. The candidates are holding a debate in our studios this Wednesday, and you're all encouraged to attend.",
        translation: "그린빌 주민 여러분께 지역 정보를 전해드리는 윤 강입니다. 올해 세금이 상당히 올랐죠. 이미 아시겠지만요. 여러분의 돈이 어디에 쓰이는지 알고 싶으실 겁니다! 시에서는 도서관, 정원, 소방서, 도로를 개선하는 네 개의 주요 프로젝트를 추진하고 있습니다. 소방서 프로젝트가 현재 진행 중이고, 다른 프로젝트는 향후 몇 개월 내에 시작될 것입니다. 시장 선거가 다가오고 있다는 걸 기억하세요. 여러분의 표는 지역사회에서 향후 어떤 프로젝트에 우선 순위를 두게 될지에 영향을 줍니다. 후보들이 이번 주 수요일 저희 스튜디오에 나와 토론을 펼치는데요. 여러분 모두 참석하셔도 좋습니다."
    }
];
