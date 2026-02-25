import { Part3Set } from '../types';

export const test6Data: Part3Set[] = [
    {
        testId: 6,
        vol: 4,
        setId: "v4-p3-t06-s01",
        contextType: "B3. 행사 / 연설",
        questionRange: "32-34",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-32-34.mp3",
        questions: [
            {
                id: "v4-p3-t06-q32",
                text: "What are the speakers mainly discussing?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "Theater renovations",
                    B: "Changes to a performance schedule",
                    C: "Selection of a new lighting director",
                    D: "A promotional gift"
                },
                correctAnswer: "A",
                translation: "화자들은 주로 무엇에 관해 이야기하고 있는가?",
                translation_A: "극장 보수",
                translation_B: "공연 일정 변경",
                translation_C: "새 조명 감독 선발",
                translation_D: "사은품"
            },
            {
                id: "v4-p3-t06-q33",
                text: "What does the man say about a musical production?",
                classification: "DETAIL",
                options: {
                    A: "It was based on a book.",
                    B: "It has been successful.",
                    C: "It will be performed overseas.",
                    D: "Some casting changes were made."
                },
                correctAnswer: "B",
                translation: "남자는 뮤지컬 작품에 대해 뭐라고 말하는가?",
                translation_A: "책에 기반을 두고 있다.",
                translation_B: "성공을 거뒀다.",
                translation_C: "해외에서 공연될 것이다.",
                translation_D: "캐스팅 일부가 변경됐다."
            },
            {
                id: "v4-p3-t06-q34",
                text: "What event are the speakers planning?",
                classification: "DETAIL",
                options: {
                    A: "A press conference",
                    B: "A fund-raiser",
                    C: "An audition",
                    D: "An autograph session"
                },
                correctAnswer: "B",
                translation: "화자들은 어떤 행사를 계획하고 있는가?",
                translation_A: "기자회견",
                translation_B: "모금 행사",
                translation_C: "오디션",
                translation_D: "사인회"
            }
        ],
        script: [
            { speaker: "Man", text: "The renovations we're planning for the theater are long overdue." },
            { speaker: "Woman", text: "I'm glad we have time between productions so we can get the work done." },
            { speaker: "Man", text: "I agree—and even though it's great that our latest musical production has had such a successful run, we can all use the break." },
            { speaker: "Woman", text: "Plus, it gives us time to focus on next month's fund-raiser." },
            { speaker: "Man", text: "Hopefully we'll raise enough money at that event to replace the old lighting system too." }
        ],
        translation: "남: 극장을 위해 계획한 보수 작업이 너무 늦어지고 있어요.\n여: 작품들 사이에 시간이 있어서 작업을 마칠 수 있으니 다행이네요.\n남: 맞아요. 최근 뮤지컬 작품이 성황리에 상연되어서 좋기는 하지만, 모두 휴식기를 가질 수 있어요.\n여: 게다가 다음 달 모금 행사에 집중할 수 있는 시간이 생기죠.\n남: 그 행사에서 낡은 조명 시스템도 교체할 만큼 충분한 기금이 모였으면 해요."
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p3-t06-s02",
        contextType: "B5. 주거 / 부동산",
        questionRange: "35-37",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-35-37.mp3",
        questions: [
            {
                id: "v4-p3-t06-q35",
                text: "What did the speakers recently do?",
                classification: "DETAIL",
                options: {
                    A: "They launched a new product.",
                    B: "They chose a job candidate.",
                    C: "They moved to a different city.",
                    D: "They renovated a space."
                },
                correctAnswer: "B",
                translation: "화자들은 최근 무엇을 했는가?",
                translation_A: "신상품을 출시했다.",
                translation_B: "입사 지원자를 뽑았다.",
                translation_C: "다른 도시로 이전했다.",
                translation_D: "공간을 개조했다."
            },
            {
                id: "v4-p3-t06-q36",
                text: "What do the speakers like about a building?",
                classification: "DETAIL",
                options: {
                    A: "It provides 24-hour access.",
                    B: "It has an outdoor space.",
                    C: "It is near public transportation.",
                    D: "It uses renewable energy."
                },
                correctAnswer: "D",
                translation: "화자들은 건물에 대해 어떤 점을 마음에 들어 하는가?",
                translation_A: "24시간 출입할 수 있다.",
                translation_B: "실외 공간이 있다.",
                translation_C: "대중교통과 가깝다.",
                translation_D: "재생 에너지를 사용한다."
            },
            {
                id: "v4-p3-t06-q37",
                text: "What is the woman worried about?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "A new competitor",
                    B: "A longer commute",
                    C: "A high price",
                    D: "An upcoming deadline"
                },
                correctAnswer: "C",
                translation: "여자는 무엇에 대해 걱정하는가?",
                translation_A: "새로운 경쟁업체",
                translation_B: "길어지는 통근 거리",
                translation_C: "높은 가격",
                translation_D: "다가오는 기한"
            }
        ],
        script: [
            { speaker: "Man", text: "Fernanda, I wanted to tell you that the top candidate we chose for the customer-care position just accepted our job offer. I'll send him a contract later today." },
            { speaker: "Woman", text: "Great! But now I think we need a bigger office space for our business. With the new hire, there'll be ten of us in the office." },
            { speaker: "Man", text: "I agree. Our lease expires next month, so we should look at a different space. There's a new office building on Second Street. It has solar panels, so all of its energy comes from renewable sources." },
            { speaker: "Woman", text: "I like that. But I'm worried we may not be able to afford the lease." },
            { speaker: "Man", text: "We'll see. I'll contact the rental agency today." }
        ],
        translation: "남: 페르난다, 고객 관리직에 우리가 선택한 최고의 후보자가 일자리 제안을 막 수락했다는 말씀 드리려고요. 이따가 계약서를 보낼 겁니다.\n여: 잘됐네요! 하지만 이젠 업무를 위해 더 큰 사무실이 필요할 것 같아요. 신규 채용자까지 사무실에 열 명이 있게 될 테니까요.\n남: 맞아요. 임대차 계약이 다음 달에 만료되니 다른 공간을 살펴봐야 해요. 2번 가에 새 사무실 건물이 있어요. 태양 전지판이 있어서 에너지 전부를 재생 에너지원에서 얻죠.\n여: 맘에 드네요. 하지만 임대료를 감당하지 못할까 봐 걱정되는데요.\n남: 한번 봅시다. 오늘 임대업체에 연락해 볼게요."
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p3-t06-s03",
        contextType: "B1. 쇼핑",
        questionRange: "38-40",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-38-40.mp3",
        questions: [
            {
                id: "v4-p3-t06-q38",
                text: "What event is the woman planning?",
                classification: "DETAIL",
                options: {
                    A: "A retirement party",
                    B: "A birthday party",
                    C: "A science fair",
                    D: "A school festival"
                },
                correctAnswer: "B",
                translation: "여자는 어떤 행사를 계획하고 있는가?",
                translation_A: "은퇴 기념 파티",
                translation_B: "생일 파티",
                translation_C: "과학 박람회",
                translation_D: "학교 축제"
            },
            {
                id: "v4-p3-t06-q39",
                text: "Who most likely is the man?",
                classification: "WHO_LOC",
                options: {
                    A: "A baker",
                    B: "A musician",
                    C: "A gardener",
                    D: "A teacher"
                },
                correctAnswer: "A",
                translation: "남자는 누구이겠는가?",
                translation_A: "제빵사",
                translation_B: "음악가",
                translation_C: "정원사",
                translation_D: "교사"
            },
            {
                id: "v4-p3-t06-q40",
                text: "Why does the man apologize?",
                classification: "WHY_REASON",
                options: {
                    A: "Some tools cannot be found.",
                    B: "Some invitations were sent late.",
                    C: "A store is closed for a holiday.",
                    D: "A request cannot be fulfilled."
                },
                correctAnswer: "D",
                translation: "남자는 왜 사과하는가?",
                translation_A: "도구 일부를 찾을 수 없다.",
                translation_B: "초대장 일부를 늦게 보냈다.",
                translation_C: "매장이 휴일에 문을 닫는다.",
                translation_D: "요청을 들어줄 수 없다."
            }
        ],
        script: [
            { speaker: "Man", text: "How can I help you?" },
            { speaker: "Woman", text: "Hi, I'd like to order a cake for my son's birthday next week. He really likes dinosaurs." },
            { speaker: "Man", text: "I have several different dinosaur-shaped pans for you to choose from." },
            { speaker: "Woman", text: "Actually, I was hoping you could make a standing cake instead of a flat one." },
            { speaker: "Man", text: "Oh, I see. I'm sorry. I do have someone on staff who can make those, but she's all booked up for the next few weeks. Try Carmen's Creations on Pine Street." }
        ],
        translation: "남: 어떻게 도와드릴까요?\n여: 안녕하세요. 다음 주 아들 생일에 쓸 케이크를 주문하고 싶은데요. 아들이 공룡을 무척 좋아해요.\n남: 선택하실 수 있는 여러 가지 다양한 공룡 모양 팬이 있어요.\n여: 실은 평평한 케이크 대신 스탠딩 케이크를 만들어 주셨으면 했거든요.\n남: 아, 그렇군요. 죄송합니다. 그걸 만들 수 있는 직원이 있는데, 앞으로 몇 주간 예약이 다 찼어요. 파인 가에 있는 카르멘 크리에이션에 가 보시죠."
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p3-t06-s04",
        contextType: "A1. 사무실 업무",
        questionRange: "41-43",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-41-43.mp3",
        questions: [
            {
                id: "v4-p3-t06-q41",
                text: "What did the man try to do online?",
                classification: "DETAIL",
                options: {
                    A: "Purchase a new phone",
                    B: "Make an appointment",
                    C: "Order a part",
                    D: "Cancel a contract"
                },
                correctAnswer: "B",
                translation: "남자는 온라인으로 무엇을 하려 했는가?",
                translation_A: "새 전화기 구입",
                translation_B: "예약",
                translation_C: "부품 주문",
                translation_D: "계약 취소"
            },
            {
                id: "v4-p3-t06-q42",
                text: "What does the man say is wrong with his mobile phone?",
                classification: "PROBLEM_CONCERN",
                options: {
                    A: "It has a short battery life.",
                    B: "The screen is damaged.",
                    C: "A cable is missing.",
                    D: "It has limited storage space."
                },
                correctAnswer: "A",
                translation: "남자는 자신의 휴대전화에 어떤 문제가 있다고 말하는가?",
                translation_A: "배터리 수명이 짧다.",
                translation_B: "화면이 손상됐다.",
                translation_C: "케이블이 없어졌다.",
                translation_D: "저장 공간이 많지 않다."
            },
            {
                id: "v4-p3-t06-q43",
                text: "What will the man most likely do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Speak with a manager",
                    B: "Call technical support",
                    C: "Visit a store",
                    D: "Restart a device"
                },
                correctAnswer: "C",
                translation: "남자는 다음에 무엇을 하겠는가?",
                translation_A: "관리자와 이야기하기",
                translation_B: "기술 지원팀에 전화하기",
                translation_C: "매장 방문하기",
                translation_D: "기기 재시작하기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Hello, you've reached Quick Phone Repair Service." },
            { speaker: "Man", text: "Hi, I went online to schedule a repair for my mobile phone, but all appointments in your store were booked for today. Have you had any cancellations?" },
            { speaker: "Woman", text: "No, unfortunately not. What's the problem with your phone?" },
            { speaker: "Man", text: "The phone only lasts about an hour before it has to be recharged." },
            { speaker: "Woman", text: "It sounds like you need a new battery. If you come to the store now, we can try to fit you in as a walk-in appointment. You may have to wait around for a bit." },
            { speaker: "Man", text: "I don't mind waiting." }
        ],
        translation: "여: 안녕하세요, 퀵 폰 리페어 서비스입니다.\n남: 안녕하세요, 제 휴대전화 수리 일정을 잡으려고 온라인에 접속했는데요, 오늘 매장 예약이 다 찼더라고요. 취소된 거 있나요?\n여: 아니요, 안타깝게도 없네요. 전화기에 어떤 문제가 있나요?\n남: 전화기가 한 시간 정도밖에 안 가고 다시 충전해야 해요.\n여: 새 배터리가 필요하신 것 같네요. 지금 매장으로 오시면 현장 예약으로 넣어드려 볼게요. 약간 기다리셔야 할 수도 있습니다.\n남: 기다려도 괜찮아요."
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p3-t06-s05",
        contextType: "A1. 사무실 업무",
        questionRange: "44-46",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-44-46.mp3",
        questions: [
            {
                id: "v4-p3-t06-q44",
                text: "Where do the speakers most likely work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a bank",
                    B: "At a research laboratory",
                    C: "At a newspaper company",
                    D: "At a legal firm"
                },
                correctAnswer: "C",
                translation: "화자들은 어디서 일하겠는가?",
                translation_A: "은행",
                translation_B: "연구소",
                translation_C: "신문사",
                translation_D: "법률사무소"
            },
            {
                id: "v4-p3-t06-q45",
                text: "Why has the woman been unable to finish a task?",
                classification: "WHY_REASON",
                options: {
                    A: "She needs a manager's signature.",
                    B: "She cannot access her files.",
                    C: "She cannot get the necessary information.",
                    D: "Some data are incorrect."
                },
                correctAnswer: "C",
                translation: "여자는 왜 업무를 마칠 수 없었는가?",
                translation_A: "관리자의 서명이 필요하다.",
                translation_B: "파일에 접속할 수 없다.",
                translation_C: "필요한 정보를 얻을 수 없다.",
                translation_D: "일부 자료가 부정확하다."
            },
            {
                id: "v4-p3-t06-q46",
                text: "What solution does the man propose?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Changing a deadline",
                    B: "Scheduling a meeting",
                    C: "Asking a colleague for help",
                    D: "Reviewing some documents"
                },
                correctAnswer: "A",
                translation: "남자는 어떤 해결책을 제안하는가?",
                translation_A: "기한 변경하기",
                translation_B: "회의 일정 잡기",
                translation_C: "동료에게 도움 요청하기",
                translation_D: "서류 검토하기"
            }
        ],
        script: [
            { speaker: "Man", text: "Asako, how far along are you on that news report about the bank merger? If you want it to be included in tomorrow morning's newspaper, it has to be on my desk by nine P.M." },
            { speaker: "Woman", text: "Well, I'm still doing research for this article. I'm having trouble getting all the facts from the people involved. They haven't returned my phone calls." },
            { speaker: "Man", text: "Well, we can't print the story without confirming the details. But if you can have it finished by Wednesday night, I can put it in Thursday's paper." }
        ],
        translation: "남: 아사코, 은행 합병에 대한 뉴스 보도 건은 어디까지 진행됐나요? 내일 아침 신문에 싣고 싶으면 오후 9시까지 제 책상 위에 올려 둬야 해요.\n여: 음, 아직 기사를 위한 조사를 하고 있어요. 관련된 사람들로부터 모든 사실을 파악하는 데 어려움이 있습니다. 제 전화에 회신을 안 하고 있어요.\n남: 음, 세부 사항을 확인하지 않고 기사를 인쇄할 순 없어요. 하지만 수요일 밤까지 마칠 수 있다면, 목요일 신문에 실을 수 있습니다."
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p3-t06-s06",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "47-49",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-47-49.mp3",
        questions: [
            {
                id: "v4-p3-t06-q47",
                text: "What kind of work does the man do?",
                classification: "WHO_LOC",
                options: {
                    A: "Appliance repair",
                    B: "Painting",
                    C: "Landscaping",
                    D: "Roofing"
                },
                correctAnswer: "C",
                translation: "남자는 어떤 종류의 일을 하는가?",
                translation_A: "가전 제품 수리",
                translation_B: "페인트칠",
                translation_C: "조경",
                translation_D: "지붕 공사"
            },
            {
                id: "v4-p3-t06-q48",
                text: "What does the woman imply when she says, \"I don't want to have to make repairs\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "She is not qualified for a task.",
                    B: "She prefers durable materials.",
                    C: "She will buy a new appliance.",
                    D: "She is not happy with a cost estimate."
                },
                correctAnswer: "B",
                translation: "여자가 \"수리를 해야 하는 건 원치 않아요\"라고 말하는 의도는 무엇인가?",
                translation_A: "여자는 일을 할 자격을 갖추지 못했다.",
                translation_B: "여자는 내구성 있는 자재를 선호한다.",
                translation_C: "여자는 새 가전 제품을 살 것이다.",
                translation_D: "여자는 견적서가 마음에 들지 않는다."
            },
            {
                id: "v4-p3-t06-q49",
                text: "What will the man show to the woman?",
                classification: "DETAIL",
                options: {
                    A: "A list of prices",
                    B: "A license",
                    C: "Some references",
                    D: "Some photographs"
                },
                correctAnswer: "D",
                translation: "남자는 여자에게 무엇을 보여줄 것인가?",
                translation_A: "가격 목록",
                translation_B: "자격증",
                translation_C: "참고 문헌",
                translation_D: "사진"
            }
        ],
        script: [
            { speaker: "Man", text: "We'll have to remove the soil from the garden bed and lay down drainpipes that'll take the water out through holes in the retaining wall." },
            { speaker: "Woman", text: "Sounds like a lot of work, but it'll be worth it to be able to grow the garden that I want to." },
            { speaker: "Man", text: "Do you think you'd like bricks or stones for the retaining wall? Many homeowners prefer brick because it creates a nice, uniform look. But stones will last longer. They are more expensive, though." },
            { speaker: "Woman", text: "I don't want to have to make repairs." },
            { speaker: "Man", text: "You have several different kinds of stones to choose from. I have some pictures of projects I've completed in the past you can look at." }
        ],
        translation: "남: 우리는 화단의 흙을 제거하고 옹벽의 구멍을 통해 물을 빼낼 배수관을 깔아야 할 겁니다.\n여: 일이 많겠네요, 하지만 제가 원하는 정원을 가꿀 수 있으니 가치 있는 일일 거예요.\n남: 옹벽은 벽돌이 좋아요, 아니면 돌이 좋아요? 많은 주택 소유주들은 벽돌을 선호해요. 멋지고 균일한 모습을 만들어 주니까요. 하지만 석조가 더 오래 지속됩니다. 더 비싸긴 하지만요.\n여: 수리를 해야 하는 건 원치 않아요.\n남: 고르실 수 있는 돌이 여러 종류 다양하게 있습니다. 과거에 제가 완료한 프로젝트 사진들을 보시면 돼요."
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p3-t06-s07",
        contextType: "B3. 행사 / 연설",
        questionRange: "50-52",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-50-52.mp3",
        questions: [
            {
                id: "v4-p3-t06-q50",
                text: "Why is the man calling?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "To track a shipment",
                    B: "To ask about a payment",
                    C: "To close an account",
                    D: "To request computer help"
                },
                correctAnswer: "B",
                translation: "남자가 전화한 이유는?",
                translation_A: "배송을 추적하려고",
                translation_B: "지급에 대해 물어보려고",
                translation_C: "계좌를 해지하려고",
                translation_D: "컴퓨터 관련 도움을 요청하려고"
            },
            {
                id: "v4-p3-t06-q51",
                text: "According to the woman, what caused a delay?",
                classification: "WHY_REASON",
                options: {
                    A: "An employee was out of the office.",
                    B: "A software program was updated.",
                    C: "A document was mislabeled.",
                    D: "A new policy was implemented."
                },
                correctAnswer: "A",
                translation: "여자에 따르면, 무엇 때문에 지연됐는가?",
                translation_A: "직원이 자리를 비웠다.",
                translation_B: "소프트웨어 프로그램이 업데이트되었다.",
                translation_C: "문서에 라벨을 잘못 붙였다.",
                translation_D: "새로운 정책이 시행됐다."
            },
            {
                id: "v4-p3-t06-q52",
                text: "What information will the woman most likely provide later?",
                classification: "DETAIL",
                options: {
                    A: "A cost breakdown",
                    B: "An account number",
                    C: "A time estimate",
                    D: "A phone number"
                },
                correctAnswer: "C",
                translation: "여자는 나중에 어떤 정보를 제공할 것인가?",
                translation_A: "가격 명세서",
                translation_B: "계좌 번호",
                translation_C: "추정 시간",
                translation_D: "전화번호"
            }
        ],
        script: [
            { speaker: "Woman", text: "Good morning. You've reached Accounts Payable." },
            { speaker: "Man", text: "Hi. I'm calling from the editorial department. One of our freelance writers has not received payment yet, so I'm calling to inquire about it. Her contract number is 9356." },
            { speaker: "Woman", text: "OK, let me check. Hmm. It looks like she should have been paid last week. But Adem handles those requests, and he was on vacation. He's just catching up today." },
            { speaker: "Man", text: "Do you have an estimate of how long it will take to process the request?" },
            { speaker: "Woman", text: "I'm not sure, but I can speak to Adem." }
        ],
        translation: "여: 안녕하세요, 어카운트 페이어블입니다.\n남: 안녕하세요, 편집부인데요. 저희 프리랜서 작가 중 한 분이 아직 급여를 받지 못해서 문의하려고 전화 드립니다. 계약 번호는 9356입니다.\n여: 네, 확인해 볼게요. 지난주에 지급을 받으셨어야 하는 것 같은데요. 아뎀이 해당 요청을 처리하는데, 휴가 중이었네요. 오늘 밀린 일을 하고 있어요.\n남: 요청을 처리하는 데 얼마나 걸릴 거라고 추정하시나요?\n여: 잘 모르겠습니다만, 아뎀한테 얘기해 볼게요."
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p3-t06-s08",
        contextType: "B1. 쇼핑",
        questionRange: "53-55",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-53-55.mp3",
        questions: [
            {
                id: "v4-p3-t06-q53",
                text: "Where does the conversation take place?",
                classification: "WHO_LOC",
                options: {
                    A: "At a game arcade",
                    B: "At a grocery store",
                    C: "At an auto repair shop",
                    D: "At a parking garage"
                },
                correctAnswer: "C",
                translation: "대화는 어디서 이루어지는가?",
                translation_A: "게임 센터",
                translation_B: "식료품점",
                translation_C: "자동차 정비소",
                translation_D: "주차장"
            },
            {
                id: "v4-p3-t06-q54",
                text: "What type of product does the woman mention?",
                classification: "DETAIL",
                options: {
                    A: "Some videos",
                    B: "Some brochures",
                    C: "A price scanner",
                    D: "A mobile phone application"
                },
                correctAnswer: "A",
                translation: "여자는 어떤 종류의 제품을 언급하는가?",
                translation_A: "동영상",
                translation_B: "안내책자",
                translation_C: "가격 스캐너",
                translation_D: "휴대전화 앱"
            },
            {
                id: "v4-p3-t06-q55",
                text: "What do the men want to do?",
                classification: "DETAIL",
                options: {
                    A: "Extend business hours",
                    B: "Enter a local contest",
                    C: "Include customized content",
                    D: "Upgrade some equipment"
                },
                correctAnswer: "C",
                translation: "남자들은 무엇을 하고 싶어 하는가?",
                translation_A: "영업시간 연장하기",
                translation_B: "지역 대회 참가하기",
                translation_C: "맞춤형 내용 포함시키기",
                translation_D: "장비 업그레이드하기"
            }
        ],
        script: [
            { speaker: "Man 1", text: "I'm the general manager here at Rev It Auto Repair, and this is Mr. Singh, our service manager. We're eager to hear how your product can benefit our shop." },
            { speaker: "Woman", text: "Well, my product is called Video Room. It's a library of short videos that your business can offer in the waiting room. These videos will explain common auto repairs and educate your customers on the repair process." },
            { speaker: "Man 2", text: "Can we add our own customized content? I'd love to include a description of our exclusive lifetime warranty." },
            { speaker: "Man 1", text: "Yes. And can we also add at-home auto-care advice?" }
        ],
        translation: "남1: 저는 여기 레브잇 자동차 정비소의 총괄 관리자이고, 이분은 저희 서비스 관리자 싱 씨입니다. 귀사의 제품이 저희 매장에 어떻게 이익이 되는지 듣고 싶은데요.\n여: 음, 저희 제품은 비디오 룸이라고 불리는데요, 귀사의 대기실에서 제공할 수 있는 짧은 동영상 라이브러리입니다. 동영상에선 일반적인 자동차 수리에 대해 설명하고, 고객들에게 수리 과정을 가르쳐 줍니다.\n남2: 저희만의 맞춤형 내용을 추가할 수 있나요? 저희가 독점 제공하는 평생 품질 보증에 관한 설명을 포함시키고 싶은데요.\n남1: 네. 집에서 하는 자동차 관리 조언도 추가할 수 있을까요?"
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p3-t06-s09",
        contextType: "A3. 마케팅 / 비즈니스",
        questionRange: "56-58",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-56-58.mp3",
        questions: [
            {
                id: "v4-p3-t06-q56",
                text: "What industry do the speakers most likely work in?",
                classification: "WHO_LOC",
                options: {
                    A: "Fashion photography",
                    B: "Information technology",
                    C: "Filmmaking",
                    D: "Marketing"
                },
                correctAnswer: "C",
                translation: "화자들은 어떤 업계에서 일하겠는가?",
                translation_A: "패션 촬영",
                translation_B: "정보 통신 기술",
                translation_C: "영화 제작",
                translation_D: "마케팅"
            },
            {
                id: "v4-p3-t06-q57",
                text: "What does the man imply when he says, \"I want it to be less than an hour\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "He is very busy.",
                    B: "He approves an itinerary.",
                    C: "A route has a lot of traffic.",
                    D: "Some revisions are needed."
                },
                correctAnswer: "D",
                translation: "남자가 \"한 시간 미만이었으면 해요\"라고 말하는 의도는 무엇인가?",
                translation_A: "남자는 매우 바쁘다.",
                translation_B: "남자가 일정을 승인한다.",
                translation_C: "노선에 교통량이 많다.",
                translation_D: "일부 변경이 필요하다."
            },
            {
                id: "v4-p3-t06-q58",
                text: "Why does the man need to contact a team?",
                classification: "WHY_REASON",
                options: {
                    A: "To explain a permit procedure",
                    B: "To confirm equipment availability",
                    C: "To introduce a colleague",
                    D: "To devise a safety plan"
                },
                correctAnswer: "B",
                translation: "남자는 왜 팀에 연락을 해야 하는가?",
                translation_A: "허가 절차를 설명하려고",
                translation_B: "장비 이용 가능 여부를 확인하려고",
                translation_C: "동료를 소개하려고",
                translation_D: "안전 계획을 고안하려고"
            }
        ],
        script: [
            { speaker: "Man", text: "Hi, Carmen. I've just reviewed the outline you gave me for the nature documentary we're making. I think it'll be a great film, but I'm a bit concerned. I want it to be less than an hour." },
            { speaker: "Woman", text: "I understand. I'll take another look at it and see where I can take out some unnecessary scenes from the storyboard." },
            { speaker: "Man", text: "Great. In the meantime, I need to follow up with our camera team to make sure they have all the equipment they need to begin filming." }
        ],
        translation: "남: 안녕하세요, 카르멘. 제게 주신 우리가 만들 자연 다큐멘터리의 개요를 막 검토했어요. 훌륭한 영화가 될 것 같은데, 조금 우려가 되네요. 한 시간 미만이었으면 해요.\n여: 알겠습니다. 다시 보면서 스토리보드에서 뺄 수 있는 불필요한 장면들이 어디인지 확인해 보겠습니다.\n남: 좋아요. 그동안 저는 카메라팀에 연락해서 촬영을 시작하는 데 필요한 모든 장비를 갖추도록 해야겠어요."
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p3-t06-s10",
        contextType: "B3. 행사 / 연설",
        questionRange: "59-61",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-59-61.mp3",
        questions: [
            {
                id: "v4-p3-t06-q59",
                text: "What did the man review yesterday?",
                classification: "DETAIL",
                options: {
                    A: "A budget",
                    B: "A weather report",
                    C: "Some test results",
                    D: "Some hiring plans"
                },
                correctAnswer: "C",
                translation: "남자는 어제 무엇을 검토했는가?",
                translation_A: "예산",
                translation_B: "일기 예보",
                translation_C: "검사 결과",
                translation_D: "고용 계획"
            },
            {
                id: "v4-p3-t06-q60",
                text: "What do the speakers hope to do?",
                classification: "DETAIL",
                options: {
                    A: "Improve the condition of a sports field",
                    B: "Expand the city's athletic programs",
                    C: "Plan a fund-raising event",
                    D: "Acquire more public land"
                },
                correctAnswer: "A",
                translation: "화자들은 무엇을 하고 싶어 하는가?",
                translation_A: "운동장 상태 개선하기",
                translation_B: "시의 체육 프로그램 확대하기",
                translation_C: "모금 행사 계획하기",
                translation_D: "더 많은 공유지 획득하기"
            },
            {
                id: "v4-p3-t06-q61",
                text: "What will Melissa send by e-mail?",
                classification: "DETAIL",
                options: {
                    A: "A summary of work tasks",
                    B: "A letter of appreciation",
                    C: "A news article",
                    D: "A cost estimate"
                },
                correctAnswer: "D",
                translation: "멜리사는 이메일로 무엇을 보낼 것인가?",
                translation_A: "업무 요약",
                translation_B: "감사 편지",
                translation_C: "뉴스 기사",
                translation_D: "견적서"
            }
        ],
        script: [
            { speaker: "Man", text: "Kriti and Melissa, I reviewed the results of the soil tests yesterday, and most of the sports fields we manage have healthy soil. But unfortunately, the baseball field on Smith Drive has elevated levels of potassium." },
            { speaker: "Woman 1", text: "The grass on that field is so brown and weedy. Now we know why." },
            { speaker: "Woman 2", text: "We'll need to order some special fertilizer to put on it. Do you think we need approval to do that?" },
            { speaker: "Man", text: "Yes—since it's an unforeseen expense, it has to be approved by the acquisitions department. Melissa, do you have time to prepare a cost estimate?" },
            { speaker: "Woman 2", text: "Sure. It won't take long. I'll send it by lunchtime, and I'll cc you both on the e-mail." }
        ],
        translation: "남: 크리티, 멜리사. 어제 토양 검사 결과를 검토했는데요, 우리가 관리하는 운동장 대부분의 토양이 건강합니다. 하지만 안타깝게도, 스미스 길에 있는 야구장의 칼륨 수치가 높아졌어요.\n여1: 야구장 잔디가 아주 갈색이고 잡초투성이예요. 이제 이유를 알았네요.\n여2: 거기에 뿌릴 특수 비료를 주문해야겠어요. 그러려면 승인이 필요할까요?\n남: 네, 예측하지 못한 비용이니 매입 부서의 승인을 받아야 해요. 멜리사, 견적서를 준비할 시간이 있나요?\n여2: 그럼요, 오래 걸리지 않을 겁니다. 점심시간까지 보낼게요, 그리고 두 분 모두 이메일 참조로 넣을게요."
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p3-t06-s11",
        contextType: "C1. 항공 / 교통",
        questionRange: "62-64",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-62-64.mp3",
        image: "/images/ETS_TOEIC_4/Test_06/Part_03/v4_p3_t06_q62.png",
        questions: [
            {
                id: "v4-p3-t06-q62",
                text: "Where do the speakers work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a bowling alley",
                    B: "At a swimming pool",
                    C: "At an ice-skating rink",
                    D: "At a baseball field"
                },
                correctAnswer: "A",
                translation: "화자들은 어디서 일하는가?",
                translation_A: "볼링장",
                translation_B: "수영장",
                translation_C: "아이스 스케이트장",
                translation_D: "야구장"
            },
            {
                id: "v4-p3-t06-q63",
                text: "Look at the graphic. On which day will the Junior League meet starting next month?",
                classification: "GRAPHIC",
                options: {
                    A: "Monday",
                    B: "Tuesday",
                    C: "Wednesday",
                    D: "Thursday"
                },
                correctAnswer: "D",
                translation: "시각 정보에 의하면, 주니어 리그는 다음 달부터 무슨 요일에 만나는가?",
                translation_A: "월요일",
                translation_B: "화요일",
                translation_C: "수요일",
                translation_D: "목요일"
            },
            {
                id: "v4-p3-t06-q64",
                text: "What does the woman say she will do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Hang a poster",
                    B: "Send an e-mail",
                    C: "Deliver a package",
                    D: "Process a payment"
                },
                correctAnswer: "B",
                translation: "여자는 무엇을 할 것이라고 말하는가?",
                translation_A: "포스터 걸기",
                translation_B: "이메일 보내기",
                translation_C: "소포 배달하기",
                translation_D: "비용 지불 처리하기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Rodrigo, you wanted to talk to me about the schedule for the bowling leagues at our alley?" },
            { speaker: "Man", text: "Yes. As you know, many of the members in the adult league have young children who participate in the junior league. And they explained to me that it would be really convenient if we moved the junior league to the same night that the adult league plays. That way they could all come together on the same night." },
            { speaker: "Woman", text: "That's a great idea. We have a few available bowling lanes on that day that the junior league can use. I'll e-mail the parents of the junior bowlers and let them know the day will change starting next month." }
        ],
        translation: "여: 로드리고, 우리 볼링장의 볼링 리그 일정에 대해 저와 얘기하고 싶어 하셨죠?\n남: 네. 아시다시피, 많은 성인 리그 회원들에게 주니어 리그에 참가하는 어린 자녀가 있어요. 그래서 저희가 주니어 리그를 성인 리그와 같은 날 밤으로 옮기면 정말 편리하겠다고 하시더라고요. 그렇게 하면 같은 날 밤에 함께 올 수 있잖아요.\n여: 좋은 생각이네요. 해당 요일에 주니어 리그가 이용할 수 있는 볼링 레인이 몇 개 있어요. 제가 주니어 볼링 선수들의 부모님께 이메일을 보내서 다음 달부터 요일이 바뀐다고 알려드릴게요."
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p3-t06-s12",
        contextType: "B3. 행사 / 연설",
        questionRange: "65-67",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-65-67.mp3",
        image: "/images/ETS_TOEIC_4/Test_06/Part_03/v4_p3_t06_q65.png",
        questions: [
            {
                id: "v4-p3-t06-q65",
                text: "According to the woman, why will the library be closed on Friday?",
                classification: "WHY_REASON",
                options: {
                    A: "An election will be held there.",
                    B: "Some renovations will take place.",
                    C: "Bad weather is expected.",
                    D: "A national holiday will be observed."
                },
                correctAnswer: "A",
                translation: "여자에 따르면, 도서관이 금요일에 휴관하는 이유는?",
                translation_A: "도서관에서 선거가 열린다.",
                translation_B: "보수 작업이 있다.",
                translation_C: "기상 악화가 예상된다.",
                translation_D: "국경일을 기념한다."
            },
            {
                id: "v4-p3-t06-q66",
                text: "What schedule conflict does the man mention?",
                classification: "DETAIL",
                options: {
                    A: "He has a family obligation.",
                    B: "His car will be at a mechanic's shop.",
                    C: "He will be attending a performance.",
                    D: "He has a business meeting."
                },
                correctAnswer: "D",
                translation: "남자는 어떤 일정이 겹친다고 말하는가?",
                translation_A: "꼭 참석해야 하는 가족 행사가 있다.",
                translation_B: "차가 정비소에 있을 것이다.",
                translation_C: "공연에 갈 것이다.",
                translation_D: "업무 회의가 있다."
            },
            {
                id: "v4-p3-t06-q67",
                text: "Look at the graphic. When will the man most likely attend a library event?",
                classification: "GRAPHIC",
                options: {
                    A: "On Monday",
                    B: "On Tuesday",
                    C: "On Wednesday",
                    D: "On Thursday"
                },
                correctAnswer: "C",
                translation: "시각 정보에 의하면, 남자는 언제 도서관 행사에 참석하겠는가?",
                translation_A: "월요일",
                translation_B: "화요일",
                translation_C: "수요일",
                translation_D: "목요일"
            }
        ],
        script: [
            { speaker: "Man", text: "Hi. Where can I find a schedule of library events?" },
            { speaker: "Woman", text: "Oh, I've got it right here. We usually have events almost every day, but we're closed this Friday. The library is being used for the district elections." },
            { speaker: "Man", text: "I see. Are there any movies showing?" },
            { speaker: "Woman", text: "Yes, there's one on Thursday evening." },
            { speaker: "Man", text: "Oh, too bad. I'm away for a client meeting on Thursday." },
            { speaker: "Woman", text: "Well, if you like Sumit Mehta's books, you might be interested in his book signing." },
            { speaker: "Man", text: "I do like his novels! Thanks, I'll come back for that." }
        ],
        translation: "남: 안녕하세요, 도서관 행사 일정표는 어디서 볼 수 있죠?\n여: 아, 여기 있습니다. 보통 거의 매일 행사가 있는데, 이번 주 금요일은 휴관입니다. 도서관이 지역 선거를 위해 사용될 예정이에요.\n남: 알겠습니다. 상영되는 영화가 있나요?\n여: 네, 목요일 저녁에 한 편 있어요.\n남: 아, 아쉽네요. 목요일에는 고객 회의 때문에 여기 없거든요.\n여: 음, 수밋 메타의 책을 좋아하시면 그의 책 사인회에도 관심이 있으실 것 같네요.\n남: 그의 소설을 정말 좋아해요! 감사합니다, 그때 다시 올게요."
    },
    {
        testId: 6,
        vol: 4,
        setId: "v4-p3-t06-s13",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "68-70",
        audio: "/audio/ETS_TOEIC_4/Test_06/Test_06-68-70.mp3",
        image: "/images/ETS_TOEIC_4/Test_06/Part_03/v4_p3_t06_q68.png",
        questions: [
            {
                id: "v4-p3-t06-q68",
                text: "What is the conversation about?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "Extending a fence",
                    B: "Building a storage shed",
                    C: "Repairing a bridge",
                    D: "Updating an entrance area"
                },
                correctAnswer: "C",
                translation: "대화는 무엇에 관한 것인가?",
                translation_A: "울타리 연장하기",
                translation_B: "창고 짓기",
                translation_C: "다리 수리하기",
                translation_D: "입구 구역 개보수하기"
            },
            {
                id: "v4-p3-t06-q69",
                text: "According to the woman, how is a project being funded?",
                classification: "DETAIL",
                options: {
                    A: "With donations from visitors",
                    B: "With money from a grant",
                    C: "With revenue from ticket sales",
                    D: "With proceeds from a charity auction"
                },
                correctAnswer: "B",
                translation: "여자에 따르면, 어떻게 프로젝트 자금을 마련하고 있는가?",
                translation_A: "방문객들의 기부금으로",
                translation_B: "보조금으로",
                translation_C: "티켓 판매 수입으로",
                translation_D: "자선 경매 수익금으로"
            },
            {
                id: "v4-p3-t06-q70",
                text: "Look at the graphic. Which color does the woman select?",
                classification: "GRAPHIC",
                options: {
                    A: "Garden Green",
                    B: "Misty Blue",
                    C: "Sunrise Peach",
                    D: "Antique White"
                },
                correctAnswer: "B",
                translation: "시각 정보를 보시오. 여자는 어떤 색상을 선택하는가?",
                translation_A: "가든 그린",
                translation_B: "미스티 블루",
                translation_C: "선라이즈 피치",
                translation_D: "앤티크 화이트"
            }
        ],
        script: [
            { speaker: "Woman", text: "Good news, Tariq. We'll have enough money to make those repairs to the bridge over the fish pond that you mentioned. We've been awarded a grant to make some repairs to the park grounds." },
            { speaker: "Man", text: "That's great! That bridge needs a new coat of paint to protect it from the elements. I think I sent you a list of paint colors when I first talked to you about the project." },
            { speaker: "Woman", text: "You did. Because it's such an iconic symbol of the park, and it's in so many photographs, we want it to be as close to the original color as when it was first built, even though that's the most expensive option on the list." }
        ],
        translation: "여: 좋은 소식이 있어요, 타리크. 언급하신 잉어장 다리를 수리할 충분한 돈이 생길 거예요. 공원 부지를 수리할 보조금을 받았거든요.\n남: 잘됐네요! 그 다리는 비바람으로부터 보호하기 위해 페인트를 한 겹 새로 칠해야 해요. 처음 프로젝트에 대해 얘기할 때 페인트 색상 목록을 보내드린 것 같은데요.\n여: 맞아요. 다리가 워낙 공원의 상징이고 많은 사진에 등장하기 때문에 처음 건설된 때의 원래 색상과 최대한 가까웠으면 합니다. 목록 중 가장 값비싼 선택지이긴 하지만요."
    }
];
