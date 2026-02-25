import { Part3Set } from '../types';

export const test2Data: Part3Set[] = [
    {
        testId: 2,
        vol: 4,
        setId: "v4-p3-t02-s1",
        contextType: "C1. 항공 / 교통",
        questionRange: "32-34",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-32-34.mp3",
        questions: [
            {
                id: "v4-p3-t02-q32",
                text: "Where does the conversation most likely take place?",
                classification: "WHO_LOC",
                options: {
                    A: "On a train",
                    B: "On a boat",
                    C: "At a factory",
                    D: "At an airport"
                },
                correctAnswer: "B",
                translation: "대화는 어디서 이루어지겠는가?",
                translation_A: "기차",
                translation_B: "배",
                translation_C: "공장",
                translation_D: "공항"
            },
            {
                id: "v4-p3-t02-q33",
                text: "What caused a delay?",
                classification: "WHY_REASON",
                options: {
                    A: "An electrical failure occurred.",
                    B: "A worker was unavailable.",
                    C: "Some information was incorrect.",
                    D: "The weather was bad."
                },
                correctAnswer: "D",
                translation: "지연된 이유는 무엇인가?",
                translation_A: "정전이 발생했다.",
                translation_B: "인부를 구할 수 없었다.",
                translation_C: "정보가 정확하지 않았다.",
                translation_D: "날씨가 나빴다."
            },
            {
                id: "v4-p3-t02-q34",
                text: "What will the man do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Confirm a schedule",
                    B: "Speak to a coworker",
                    C: "Check some machinery",
                    D: "Clean a storage room"
                },
                correctAnswer: "C",
                translation: "남자는 다음으로 무엇을 할 것인가?",
                translation_A: "일정 확인",
                translation_B: "동료에게 이야기하기",
                translation_C: "기계 확인",
                translation_D: "보관실 청소"
            }
        ],
        script: [
            { speaker: "Man", text: "Good morning, captain. We'll be docking at the port in Kolkata this evening, right?" },
            { speaker: "Woman", text: "Actually, we had to change course overnight to avoid a storm, so we're running behind schedule. But we should arrive early tomorrow." },
            { speaker: "Man", text: "Well, that's not too bad." },
            { speaker: "Woman", text: "Oh, Hector has the day off today, so I'll need you to do the morning rounds—starting with checking the machinery in the engine room." },
            { speaker: "Man", text: "Of course—I'll head there now." }
        ],
        translation: "남: 안녕하세요, 선장님. 오늘 저녁 콜카타 항구에 정박할 예정이죠, 그렇지요?\n여: 실은 폭풍우를 피하기 위해 밤새 경로를 변경해야 했어요. 그래서 예정보다 늦어지고 있습니다. 하지만 내일 일찍 도착할 거예요.\n남: 뭐, 그렇게 나쁘진 않네요.\n여: 아, 헥터가 오늘 휴무라서 오전 일과를 해 주셔야 해요. 기관실 기계 확인부터요.\n남: 네, 지금 그리로 갈게요."
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p3-t02-s2",
        contextType: "B3. 편의시설 / 보건",
        questionRange: "35-37",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-35-37.mp3",
        questions: [
            {
                id: "v4-p3-t02-q35",
                text: "Where does the woman most likely work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a sports stadium",
                    B: "At a fitness center",
                    C: "At a doctor's office",
                    D: "At a library"
                },
                correctAnswer: "B",
                translation: "여자는 어디서 일하겠는가?",
                translation_A: "경기장",
                translation_B: "피트니스 센터",
                translation_C: "병원",
                translation_D: "도서관"
            },
            {
                id: "v4-p3-t02-q36",
                text: "What does the man ask about?",
                classification: "WHAT_WHICH",
                options: {
                    A: "A discount",
                    B: "A form",
                    C: "A business location",
                    D: "A parking policy"
                },
                correctAnswer: "A",
                translation: "남자는 무엇에 대해 물어보는가?",
                translation_A: "할인",
                translation_B: "서식",
                translation_C: "업체 위치",
                translation_D: "주차 정책"
            },
            {
                id: "v4-p3-t02-q37",
                text: "What will the woman do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Post a sign",
                    B: "Confirm an account number",
                    C: "Provide a tour",
                    D: "Look at a schedule"
                },
                correctAnswer: "C",
                translation: "여자는 다음으로 무엇을 하겠는가?",
                translation_A: "표지판 게시하기",
                translation_B: "계좌 번호 확인하기",
                translation_C: "견학 제공하기",
                translation_D: "일정표 보기"
            }
        ],
        script: [
            { speaker: "Man", text: "Hi. I'm here to schedule some personal training sessions." },
            { speaker: "Woman", text: "OK. What are your fitness goals?" },
            { speaker: "Man", text: "I'd like to lift weights and build strength." },
            { speaker: "Woman", text: "I can work with you on that. Are you currently a member here?" },
            { speaker: "Man", text: "No, I'll also need to sign up for a membership. I saw online that you're running a special for new members—fifty percent off the first month's membership. Can I sign up for that?" },
            { speaker: "Woman", text: "Absolutely. But before I get you signed up, let me show you around our facility." }
        ],
        translation: "남: 안녕하세요. PT 일정을 잡으러 왔어요.\n여: 네. 운동 목표가 무엇인가요?\n남: 웨이트 트레이닝으로 근력을 키우고 싶어요.\n여: 제가 도와드릴 수 있어요. 현재 이곳 회원이세요?\n남: 아니요, 회원 가입도 해야 해요. 온라인에서 봤는데 신규 회원에게 특별히 첫 달 회비를 50% 할인해 준다고 하던데요. 저도 신청할 수 있나요?\n여: 그럼요. 그런데 신청하시기 전에 저희 시설을 안내해 드릴게요."
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p3-t02-s3",
        contextType: "B4. 일반문의",
        questionRange: "38-40",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-38-40.mp3",
        questions: [
            {
                id: "v4-p3-t02-q38",
                text: "Who most likely are the speakers?",
                classification: "WHO_LOC",
                options: {
                    A: "Art restorers",
                    B: "Event planners",
                    C: "Photographers",
                    D: "Interior designers"
                },
                correctAnswer: "A",
                translation: "화자들은 누구이겠는가?",
                translation_A: "예술품 복원가",
                translation_B: "행사 기획자",
                translation_C: "사진작가",
                translation_D: "실내 디자이너"
            },
            {
                id: "v4-p3-t02-q39",
                text: "What does the woman say she will do?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Hire an intern",
                    B: "Review a contract",
                    C: "Take some measurements",
                    D: "Investigate a problem"
                },
                correctAnswer: "D",
                translation: "여자는 무엇을 하겠다고 말하는가?",
                translation_A: "인턴 고용하기",
                translation_B: "계약 검토하기",
                translation_C: "치수 재기",
                translation_D: "문제 조사하기"
            },
            {
                id: "v4-p3-t02-q40",
                text: "Why does the man suggest beginning a project quickly?",
                classification: "WHY_REASON",
                options: {
                    A: "Payment has already been made.",
                    B: "Staff will be on vacation.",
                    C: "An important event is approaching.",
                    D: "A client is in town for a limited time."
                },
                correctAnswer: "C",
                translation: "남자는 왜 프로젝트를 빨리 시작하자고 제안하는가?",
                translation_A: "이미 지불이 완료돼서",
                translation_B: "직원들이 휴가를 갈 것이라서",
                translation_C: "중요한 행사가 다가오고 있어서",
                translation_D: "고객이 한정된 시간 동안만 있을 것이라서"
            }
        ],
        script: [
            { speaker: "Woman", text: "As you can see, this Renaissance landscape painting we acquired is in bad condition. We can't display it yet." },
            { speaker: "Man", text: "Hmm, yes. This painting will need significant restoration work." },
            { speaker: "Woman", text: "I'll begin by investigating the artist's color palette and style to see how we should repair the damaged areas." },
            { speaker: "Man", text: "You know, this would be a stunning piece to unveil at our anniversary dinner in June. And since it's a big project to finish by then, we should get started right away." }
        ],
        translation: "여: 보시다시피 우리가 구한 이 르네상스 풍경화는 상태가 좋지 않아요. 아직 전시할 수 없습니다.\n남: 음… 네. 이 그림은 상당한 복원 작업이 필요하겠어요.\n여: 우선 화가의 색채와 화풍부터 조사해 손상된 부분을 어떻게 복구해야 하는지 살펴볼 것입니다.\n남: 자, 6월에 있을 기념일 만찬에서 공개하기에 아주 멋진 작품이 될 거예요. 그때까지 끝내야 하는 큰 프로젝트이니 당장 시작해야 합니다."
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p3-t02-s4",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "41-43",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-41-43.mp3",
        questions: [
            {
                id: "v4-p3-t02-q41",
                text: "What is the woman preparing?",
                classification: "WHAT_WHICH",
                options: {
                    A: "A slide presentation",
                    B: "A travel itinerary",
                    C: "A guest list",
                    D: "A sales contract"
                },
                correctAnswer: "A",
                translation: "여자는 무엇을 준비하는가?",
                translation_A: "슬라이드 발표 자료",
                translation_B: "여행 일정표",
                translation_C: "손님 명단",
                translation_D: "판매 계약서"
            },
            {
                id: "v4-p3-t02-q42",
                text: "What kind of business is Smith Incorporated?",
                classification: "WHAT_WHICH",
                options: {
                    A: "A law firm",
                    B: "A construction company",
                    C: "A pharmaceutical manufacturer",
                    D: "A bookstore chain"
                },
                correctAnswer: "D",
                translation: "Smith Incorporated는 어떤 종류의 업체인가?",
                translation_A: "법률 사무소",
                translation_B: "건설 회사",
                translation_C: "제약 회사",
                translation_D: "서점 체인"
            },
            {
                id: "v4-p3-t02-q43",
                text: "What do the men agree about?",
                classification: "WHAT_WHICH",
                options: {
                    A: "A subscription should be canceled.",
                    B: "An advertising campaign should be delayed.",
                    C: "A training session should be mandatory.",
                    D: "A meeting should be casual."
                },
                correctAnswer: "D",
                translation: "남자들이 동의하는 내용은?",
                translation_A: "구독이 취소되어야 한다.",
                translation_B: "광고 캠페인이 연기되어야 한다.",
                translation_C: "교육을 의무로 해야 한다.",
                translation_D: "회의를 격식 없이 하는 것이 좋다."
            }
        ],
        script: [
            { speaker: "Woman", text: "Hi, Ozan. Do you have time to review some slides I'm presenting at a meeting on Thursday?" },
            { speaker: "Man 1", text: "Oh. Is that the meeting with Smith Incorporated?" },
            { speaker: "Woman", text: "Yes. I'm presenting them with our updated marketing plan for their chain of bookstores." },
            { speaker: "Man 2", text: "You know, Smith Incorporated prefers informal meetings. I think just a handout highlighting how our marketing plan will positively impact their book sales would be enough." },
            { speaker: "Woman", text: "Really? Thilo, you've worked with this client before. What do you think?" },
            { speaker: "Man 1", text: "Ozan is right. I think they'd prefer a meeting that was more of a conversation than a presentation." }
        ],
        translation: "여: 안녕하세요, 오잔. 제가 목요일 회의 때 발표할 슬라이드를 검토해 주실 시간이 있나요?\n남1: 아, Smith Incorporated와의 회의인가요?\n여: 네. 그들의 서점 체인을 위해 업데이트된 마케팅 계획을 발표할 거예요.\n남2: 저, 스미스 주식회사는 편안한 회의를 선호해요. 제 생각엔 우리 마케팅 계획이 그들의 책 판매에 어떻게 긍정적 영향을 줄 것인지 강조한 유인물만으로 충분할 것 같은데요.\n여: 정말요? 틸로, 전에 이 고객과 일해 보신 적 있잖아요. 어떻게 생각하세요?\n남1: 오잔 말이 맞아요. 발표보다는 대화에 가까운 회의를 더 좋아할 거예요."
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p3-t02-s5",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "44-46",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-44-46.mp3",
        questions: [
            {
                id: "v4-p3-t02-q44",
                text: "Why does the woman congratulate the man?",
                classification: "WHY_REASON",
                options: {
                    A: "He finished a road race.",
                    B: "He won a publishing award.",
                    C: "His experiment was successful.",
                    D: "His research funding was extended."
                },
                correctAnswer: "C",
                translation: "여자는 왜 남자를 축하하는가?",
                translation_A: "도로 경주를 완주해서",
                translation_B: "출판상을 수상해서",
                translation_C: "실험이 성공해서",
                translation_D: "연구 지원금이 연장되어서"
            },
            {
                id: "v4-p3-t02-q45",
                text: "What does the man imply when he says, \"Esra's leaving the company next week\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "He needs assistance planning a party for Esra.",
                    B: "He will not submit a report to Esra.",
                    C: "He will apply for a new position.",
                    D: "A larger office has become available."
                },
                correctAnswer: "B",
                translation: "남자가 \"에스라 씨는 다음 주에 회사를 그만둬요\"라고 말할 때 의도는?",
                translation_A: "에스라를 위한 파티 계획에 도움이 필요하다.",
                translation_B: "에스라에게 보고서를 제출하지 않을 것이다.",
                translation_C: "새로운 직책에 지원할 것이다.",
                translation_D: "더 큰 사무실을 사용할 수 있게 됐다."
            },
            {
                id: "v4-p3-t02-q46",
                text: "What does the man hope to do next quarter?",
                classification: "WHAT_WHICH",
                options: {
                    A: "Receive a research grant",
                    B: "Publish a book",
                    C: "Replace some furniture",
                    D: "Gain management experience"
                },
                correctAnswer: "D",
                translation: "남자는 다음 분기에 무엇을 하고 싶어 하는가?",
                translation_A: "연구 지원금 받기",
                translation_B: "책 출간하기",
                translation_C: "가구 교체하기",
                translation_D: "관리직 경험 쌓기"
            }
        ],
        script: [
            { speaker: "Woman", text: "I heard that the results of your experiment were better than you expected. Congratulations!" },
            { speaker: "Man", text: "Thanks! I thought we'd have to run that reaction ten times before we got a positive result. But we got it on the third try." },
            { speaker: "Woman", text: "You'll have to write up your results and submit them to the research director. That's Esra, right?" },
            { speaker: "Man", text: "Oh, Esra's leaving the company next week." },
            { speaker: "Woman", text: "Oh, I didn't know that. I wonder if you'll be promoted to fill her position." },
            { speaker: "Man", text: "I don't think so. I've never managed an entire research group. I hope to get some experience doing that next quarter." }
        ],
        translation: "여: 실험 결과가 예상했던 것보다 좋다고 들었어요. 축하해요!\n남: 감사합니다! 반응 실험을 열 번은 해야 긍정적인 결과를 얻을 거라 생각했는데요, 세 번째 시도에서 됐어요.\n여: 결과를 적어서 연구소장에게 제출하셔야 할 거예요. 에스라 씨, 그렇죠?\n남: 아, 에스라 씨는 다음 주에 회사를 그만둬요.\n여: 아, 몰랐어요. 당신이 승진해서 그 자리로 갈지 궁금하네요.\n남: 아닐 것 같은데요. 연구실 전체를 관리해 본 적이 없거든요. 다음 분기에는 그런 경험을 해봤으면 좋겠네요."
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p3-t02-s6",
        contextType: "B4. 일반문의",
        questionRange: "47-49",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-47-49.mp3",
        questions: [
            {
                id: "v4-p3-t02-q47",
                text: "Where most likely are the speakers?",
                classification: "WHO_LOC",
                options: {
                    A: "At a sporting goods store",
                    B: "At a television studio",
                    C: "At a sports arena",
                    D: "At a gym"
                },
                correctAnswer: "B",
                translation: "화자들은 어디에 있겠는가?",
                translation_A: "스포츠 용품점",
                translation_B: "TV 스튜디오",
                translation_C: "경기장",
                translation_D: "체육관"
            },
            {
                id: "v4-p3-t02-q48",
                text: "What does the man say he recently did?",
                classification: "WHAT_WHICH",
                options: {
                    A: "He retired from his job.",
                    B: "He designed a Web site.",
                    C: "He opened a new facility.",
                    D: "He competed in a sports event."
                },
                correctAnswer: "C",
                translation: "남자는 최근에 무엇을 했다고 말하는가?",
                translation_A: "직장에서 은퇴했다.",
                translation_B: "웹사이트를 디자인했다.",
                translation_C: "새 시설을 열었다.",
                translation_D: "스포츠 경기에 출전했다."
            },
            {
                id: "v4-p3-t02-q49",
                text: "What does the woman ask the man to talk about?",
                classification: "WHAT_WHICH",
                options: {
                    A: "His career path",
                    B: "His mentors",
                    C: "His future goals",
                    D: "His hobbies"
                },
                correctAnswer: "A",
                translation: "여자는 남자에게 무엇에 대해 이야기해 달라고 요청하는가?",
                translation_A: "그의 경력 경로",
                translation_B: "그의 멘토",
                translation_C: "그의 향후 목표",
                translation_D: "그의 취미"
            }
        ],
        script: [
            { speaker: "Woman", text: "Now we'll move on to a special segment of our news program where we highlight new local businesses for our viewers. Today I'm talking with Dhruv Bajaj—a personal trainer and gym owner. Thanks for coming into the studio today, Dhruv!" },
            { speaker: "Man", text: "Thanks for having me! I'm excited to tell you about the gym I just opened last month. It has state-of-the-art equipment, and my trainers can work with clients at any stage in their fitness journey." },
            { speaker: "Woman", text: "Sounds great. How did you get started in this line of work?" },
            { speaker: "Man", text: "Well, I was an athlete in school, and when I stopped competing, I wanted to continue doing something fitness-related. So I started working as a trainer." }
        ],
        translation: "여: 이제 시청자들을 위해 신규 지역 업체를 집중 조명해 알려주는 뉴스 프로그램의 특별 코너로 넘어가겠습니다. 오늘은 개인 트레이너이자 체육관 소유주인 드루브 바자즈 씨와 이야기를 나누겠습니다. 오늘 스튜디오에 나와 주셔서 감사합니다, 드루브 씨!\n남: 불러 주셔서 감사합니다! 지난달 문을 연 체육관에 대해 이야기하게 되어 기쁩니다. 최첨단 장비를 갖추고 있고요, 저희 트레이너들은 운동 여정의 모든 단계에서 고객과 함께할 수 있어요.\n여: 훌륭하군요. 이 일을 어떻게 시작하게 되셨나요?\n남: 저는 학창 시절에 선수였는데요, 시합 출전을 그만뒀을 때 운동 관련 일을 계속하고 싶었어요. 그래서 트레이너로 일하기 시작했죠."
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p3-t02-s7",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "50-52",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-50-52.mp3",
        questions: [
            {
                id: "v4-p3-t02-q50",
                text: "What has the woman been hired to do?",
                classification: "WHAT_WHICH",
                options: {
                    A: "Write articles",
                    B: "Update some software",
                    C: "Organize a fund-raiser",
                    D: "Manage office staff"
                },
                correctAnswer: "A",
                translation: "여자는 무엇을 하도록 고용되었는가?",
                translation_A: "기사 작성",
                translation_B: "소프트웨어 업데이트",
                translation_C: "모금 행사 준비",
                translation_D: "사무실 직원 관리"
            },
            {
                id: "v4-p3-t02-q51",
                text: "According to the director, what is the organization's goal?",
                classification: "WHAT_WHICH",
                options: {
                    A: "To hire professionals in the field",
                    B: "To create educational programs",
                    C: "To collect data from other scientific institutes",
                    D: "To protect aquatic environments"
                },
                correctAnswer: "D",
                translation: "협회장에 따르면, 협회의 목표는 무엇인가?",
                translation_A: "해당 분야의 전문가 고용",
                translation_B: "교육 프로그램 제작",
                translation_C: "다른 과학 협회로부터 자료 수집",
                translation_D: "수중 환경 보호"
            },
            {
                id: "v4-p3-t02-q52",
                text: "What does Roberto say is exciting?",
                classification: "WHAT_WHICH",
                options: {
                    A: "The use of some equipment",
                    B: "The results of a survey",
                    C: "The public response to a project",
                    D: "A recent donation to the institute"
                },
                correctAnswer: "A",
                translation: "로베르토는 무엇이 흥미롭다고 말하는가?",
                translation_A: "장비 이용",
                translation_B: "조사 결과",
                translation_C: "프로젝트에 대한 대중의 반응",
                translation_D: "최근 협회 기부"
            }
        ],
        script: [
            { speaker: "Man 1", text: "As director, I'm delighted to welcome you to the Redmond Aquatic Institute. We're happy you'll be producing content for our Web site." },
            { speaker: "Woman", text: "I'm looking forward to writing about Redmond's initiatives in marine biology." },
            { speaker: "Man 1", text: "Yes, the more articles the public can read about threats to aquatic ecosystems, the better. Public awareness will help us get funding to meet our aim of preserving these ecosystems. This is Roberto. He's working on our mangrove research project, which is the first one you'll cover." },
            { speaker: "Man 2", text: "It's an interesting project. And what's exciting is that we've started using drones to photograph the area with the mangroves. So we have some great images you could use." }
        ],
        translation: "남1: 협회장으로서 레드몬드 수상 협회에 오신 것을 환영합니다. 저희 웹사이트 콘텐츠를 만들어 주신다니 기쁩니다.\n여: 레드몬드가 해양 생물학과 관련해서 진행하는 프로젝트들에 대해 글을 쓰게 돼 무척 기대돼요.\n남1: 네, 수중 생태계 위협에 대해 대중이 읽을 수 있는 기사가 많을수록 좋습니다. 대중의 인식이 생태계 보전이라는 우리의 목표를 달성하기 위한 자금을 확보하는 데 도움이 될 거예요. 이쪽은 로베르토입니다. 맹그로브 연구 프로젝트를 맡고 있죠. 처음으로 취재하실 내용입니다.\n남2: 그건 흥미로운 프로젝트예요. 흥미로운 점은 맹그로브가 있는 지역을 촬영하기 위해 드론을 사용하기 시작한 것입니다. 그래서 사용하실 수 있는 멋진 사진들이 있습니다."
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p3-t02-s8",
        contextType: "A4. 재무 / 비용 / 승인",
        questionRange: "53-55",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-53-55.mp3",
        questions: [
            {
                id: "v4-p3-t02-q53",
                text: "What does the man say about some contacts in China?",
                classification: "WHAT_WHICH",
                options: {
                    A: "They submitted some preliminary results.",
                    B: "They requested help with a presentation.",
                    C: "They are celebrating a holiday.",
                    D: "They are coming to visit soon."
                },
                correctAnswer: "C",
                translation: "남자는 중국에 있는 인맥에 대해 뭐라고 말하는가?",
                translation_A: "예비 결과를 제출했다.",
                translation_B: "발표에 도움을 요청했다.",
                translation_C: "국경일을 기념할 것이다.",
                translation_D: "곧 방문하러 올 것이다."
            },
            {
                id: "v4-p3-t02-q54",
                text: "What does the woman imply when she says, \"we didn't allocate funds for a project leader\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "She thinks a project deadline should be extended.",
                    B: "She is surprised by a suggestion.",
                    C: "A scheduled meeting should take place.",
                    D: "A project leader will not be hired."
                },
                correctAnswer: "C",
                translation: "여자가 \"프로젝트 리더를 위한 예산을 할당하지 않았더라고요\"라고 말하는 의도는?",
                translation_A: "프로젝트 기한이 연장되어야 한다고 생각한다.",
                translation_B: "제안을 듣고 놀랐다.",
                translation_C: "예정된 회의가 열려야 한다.",
                translation_D: "프로젝트 리더는 고용되지 않을 것이다."
            },
            {
                id: "v4-p3-t02-q55",
                text: "What does the woman say about some travel expenses?",
                classification: "WHAT_WHICH",
                options: {
                    A: "They are unnecessary.",
                    B: "They have been refunded.",
                    C: "They require receipts.",
                    D: "They were charged to the company credit card."
                },
                correctAnswer: "A",
                translation: "여자는 출장비에 대해 뭐라고 말하는가?",
                translation_A: "불필요하다.",
                translation_B: "환불됐다.",
                translation_C: "영수증이 필요하다.",
                translation_D: "법인 신용카드로 청구됐다."
            }
        ],
        script: [
            { speaker: "Woman", text: "Matthew, you're not planning to cancel Wednesday's budget meeting, are you?" },
            { speaker: "Man", text: "I haven't sent out the cancellation yet, but our research partners in China are off this week for a national holiday, so there's no point in meeting. Why?" },
            { speaker: "Woman", text: "Well, I've been looking at the draft budget, and we didn't allocate funds for a project leader." },
            { speaker: "Man", text: "Uh-oh. I wonder how that happened. You're right. We need to discuss how to fix that." },
            { speaker: "Woman", text: "You know, we allocated money for a trip to Singapore to present our preliminary findings. We don't really need to do that." }
        ],
        translation: "여: 매튜, 수요일 예산 회의를 취소할 계획은 아니시죠, 그렇죠?\n남: 아직 취소 소식을 보내진 않았는데, 중국에 있는 협력 연구자들이 이번 주에 국경일이라 쉬거든요. 회의를 하는 의미가 없죠. 왜요?\n여: 음, 예산 초안을 보고 있는데 프로젝트 리더를 위한 예산을 할당하지 않았더라고요.\n남: 저런, 어쩌다 그렇게 됐는지 모르겠네요. 당신 말이 맞아요. 어떻게 바로잡을지 논의해야 해요.\n여: 있잖아요, 예비 결과를 발표하러 싱가포르로 출장 갈 예산을 할당했잖아요. 꼭 그러지 않아도 돼요."
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p3-t02-s9",
        contextType: "B4. 일반문의",
        questionRange: "56-58",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-56-58.mp3",
        questions: [
            {
                id: "v4-p3-t02-q56",
                text: "Where is the woman calling from?",
                classification: "WHO_LOC",
                options: {
                    A: "A clothing store",
                    B: "A furniture store",
                    C: "A restaurant supply company",
                    D: "A graphic design firm"
                },
                correctAnswer: "C",
                translation: "여자는 어디서 전화하는가?",
                translation_A: "의류 매장",
                translation_B: "가구점",
                translation_C: "식당 용품 업체",
                translation_D: "그래픽 디자인 회사"
            },
            {
                id: "v4-p3-t02-q57",
                text: "What is some software being used for?",
                classification: "WHAT_WHICH",
                options: {
                    A: "Inventory management",
                    B: "Employee performance reviews",
                    C: "Sales forecasting",
                    D: "Web site design"
                },
                correctAnswer: "A",
                translation: "소프트웨어는 무엇에 사용되고 있는가?",
                translation_A: "재고 관리",
                translation_B: "직원 인사 고과",
                translation_C: "판매 예측",
                translation_D: "웹사이트 디자인"
            },
            {
                id: "v4-p3-t02-q58",
                text: "What does the man help the woman do?",
                classification: "WHAT_WHICH",
                options: {
                    A: "Return a purchase",
                    B: "Customize a setting",
                    C: "Repair an engine",
                    D: "Inspect a shipment"
                },
                correctAnswer: "B",
                translation: "남자는 여자가 무엇을 하도록 돕는가?",
                translation_A: "구매 물건 반품하기",
                translation_B: "설정 바꾸기",
                translation_C: "엔진 수리하기",
                translation_D: "수송품 검사하기"
            }
        ],
        script: [
            { speaker: "Man", text: "Hello, you've reached tech support." },
            { speaker: "Woman", text: "I'm calling from Rubin Restaurant Equipment. I recently purchased your software to keep track of my warehouse inventory, and I have a question about setting alerts." },
            { speaker: "Man", text: "Sure. How can I help?" },
            { speaker: "Woman", text: "Well, we've been getting an alert whenever the inventory for our deep fryers drops below ten. But we usually don't stock many of those because restaurants don't often need to replace them. So, can I lower the alert level for just those items?" },
            { speaker: "Man", text: "Yes. In the system, if you click on that product, you'll see a link that says, \"Set Custom Alert.\" And you can set it to any number from there." },
            { speaker: "Woman", text: "I see it. Thanks for your help." }
        ],
        translation: "남: 안녕하세요, 기술 지원팀입니다.\n여: 루빈 식당 장비인데요. 창고 재고 현황을 지속적으로 파악하려고 최근 귀사의 소프트웨어를 구입했는데, 알림 설정에 관해 질문이 있어서요.\n남: 네. 어떻게 도와드릴까요?\n여: 음, 튀김기 재고가 10개 미만이 될 때마다 알림을 받았는데요, 그런데 보통 그 제품을 많이 갖춰 두지 않아요. 음식점들은 이걸 자주 교체할 필요가 별로 없거든요. 그래서 그 항목만 알림 수준을 낮출 수 있을까요?\n남: 네. 시스템에서 해당 제품을 클릭하시면 \"맞춤형 알림 설정\"이라고 된 링크가 보일 거예요. 거기서 어떤 숫자로든 설정하실 수 있습니다.\n여: 알겠습니다. 도와주셔서 감사합니다."
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p3-t02-s10",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "59-61",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-59-61.mp3",
        questions: [
            {
                id: "v4-p3-t02-q59",
                text: "Where are the speakers most likely working?",
                classification: "WHO_LOC",
                options: {
                    A: "At a flower shop",
                    B: "At a botanical garden",
                    C: "At a fruit orchard",
                    D: "At a hardware store"
                },
                correctAnswer: "B",
                translation: "화자들은 어디서 일하겠는가?",
                translation_A: "꽃 가게",
                translation_B: "식물원",
                translation_C: "과수원",
                translation_D: "철물점"
            },
            {
                id: "v4-p3-t02-q60",
                text: "What have the speakers been asked to do?",
                classification: "WHAT_WHICH",
                options: {
                    A: "Arrange some flowers",
                    B: "Deliver some tools",
                    C: "Install a watering system",
                    D: "Repair a lawn mower"
                },
                correctAnswer: "C",
                translation: "화자들은 무엇을 하라고 요청받았는가?",
                translation_A: "꽃꽂이",
                translation_B: "연장 배달",
                translation_C: "급수 시스템 설치",
                translation_D: "잔디 깎는 기계 수리"
            },
            {
                id: "v4-p3-t02-q61",
                text: "What does the man offer to do?",
                classification: "OFFER_SUGGEST",
                options: {
                    A: "Look for some materials",
                    B: "Train an assistant",
                    C: "Transplant some trees",
                    D: "Work extra hours"
                },
                correctAnswer: "A",
                translation: "남자는 무엇을 하겠다고 제안하는가?",
                translation_A: "자재 찾기",
                translation_B: "조수 교육",
                translation_C: "나무 옮겨 심기",
                translation_D: "초과 근무"
            }
        ],
        script: [
            { speaker: "Man", text: "I just spoke to the garden director. He wants us to install an irrigation system in the rose garden as well as the magnolia grove. He wants to be sure the flowers get plenty of water during the hot summer months." },
            { speaker: "Woman", text: "OK, let's walk over there now and take some measurements. Then we can figure out what materials we'll need." },
            { speaker: "Man", text: "Sure. We have some extra parts left over from when we worked on the cherry trees. I'll check what we have left after we finish measuring the rose garden." }
        ],
        translation: "남: 정원 관리자와 방금 얘기했어요. 그는 우리가 목련 숲뿐만 아니라 장미 정원에도 급수 시스템을 설치해 주길 원하네요. 꽃들이 무더운 여름철에 충분한 물을 얻었으면 해서요.\n여: 좋아요. 지금 가서 측량해 보죠. 그러면 어떤 재료가 필요한지 알 수 있을 거예요.\n남: 그래요. 체리나무 작업을 할 때 남은 여분의 부품이 좀 있어요. 장미 정원의 측량을 마치고 나면 남은 것들을 확인해 볼게요."
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p3-t02-s11",
        contextType: "B4. 일반문의",
        questionRange: "62-64",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-62-64.mp3",
        image: "/images/ETS_TOEIC_4/Test_02/Part_03/v4_p3_t02_q62.png",
        questions: [
            {
                id: "v4-p3-t02-q62",
                text: "Why does the man apologize?",
                classification: "WHY_REASON",
                options: {
                    A: "He lost a key.",
                    B: "He arrived late.",
                    C: "He turned off some equipment.",
                    D: "He forgot an instruction manual."
                },
                correctAnswer: "B",
                translation: "남자가 사과하는 이유는?",
                translation_A: "열쇠를 잃어버렸다.",
                translation_B: "늦게 도착했다.",
                translation_C: "장비를 껐다.",
                translation_D: "취급 설명서를 잊어버렸다."
            },
            {
                id: "v4-p3-t02-q63",
                text: "According to the woman, why will the speakers be very busy today?",
                classification: "WHY_REASON",
                options: {
                    A: "The agency is offering a discount.",
                    B: "A new rental office is opening.",
                    C: "There is a conference in town.",
                    D: "A sporting event will take place."
                },
                correctAnswer: "C",
                translation: "여자에 따르면, 화자들은 오늘 왜 무척 바쁠 것인가?",
                translation_A: "업체가 할인을 제공한다.",
                translation_B: "새 렌터카 사무실을 연다.",
                translation_C: "시내에 학회가 있다.",
                translation_D: "스포츠 행사가 열린다."
            },
            {
                id: "v4-p3-t02-q64",
                text: "Look at the graphic. Where will the man go first?",
                classification: "GRAPHIC",
                options: {
                    A: "Area 1",
                    B: "Area 2",
                    C: "Area 3",
                    D: "Area 4"
                },
                correctAnswer: "B",
                translation: "시각 정보에 의하면, 남자는 어디로 먼저 갈 것인가?",
                translation_A: "1구역",
                translation_B: "2구역",
                translation_C: "3구역",
                translation_D: "4구역"
            }
        ],
        script: [
            { speaker: "Man", text: "Good morning, Ms. Aljohani. Sorry I'm a little late. Traffic was terrible." },
            { speaker: "Woman", text: "That's OK, but our rental office will be very busy this morning. There's a big education convention in town starting today, and a lot of attendees from out of town have reserved cars to get to the conference center." },
            { speaker: "Man", text: "Right. What do you want me to do first?" },
            { speaker: "Woman", text: "I'd like you to start by checking the batteries in our electric cars. We want to be sure they're all fully charged." }
        ],
        translation: "남: 안녕하세요, 알조하니 씨. 좀 늦어서 죄송해요. 교통 체증이 심했어요.\n여: 괜찮아요. 그런데 우리 렌터카 사무실이 오늘 오전에 굉장히 바쁠 거예요. 오늘부터 대규모 교육 협의회가 시내에서 열리거든요. 다른 도시에서 온 많은 참석자들이 학회장으로 가기 위해 차를 예약했어요.\n남: 알겠습니다. 먼저 뭘 할까요?\n여: 전기차 배터리를 확인하는 것부터 해 주셨으면 해요. 모두 완전히 충전되어 있어야 해요."
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p3-t02-s12",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "65-67",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-65-67.mp3",
        image: "/images/ETS_TOEIC_4/Test_02/Part_03/v4_p3_t02_q65.png",
        questions: [
            {
                id: "v4-p3-t02-q65",
                text: "Where do the speakers most likely work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a landscaping company",
                    B: "At a local government office",
                    C: "At a garden store",
                    D: "At a lumber yard"
                },
                correctAnswer: "B",
                translation: "화자들은 어디서 일하겠는가?",
                translation_A: "조경 회사",
                translation_B: "지역 관공서",
                translation_C: "원예 용품점",
                translation_D: "목재 저장소"
            },
            {
                id: "v4-p3-t02-q66",
                text: "What does the woman say will take place next month?",
                classification: "WHAT_WHICH",
                options: {
                    A: "A seasonal promotion",
                    B: "A product demonstration",
                    C: "A poster contest",
                    D: "A lecture series"
                },
                correctAnswer: "C",
                translation: "여자는 다음 달에 무슨 일이 있을 것이라고 말하는가?",
                translation_A: "계절성 판촉 행사",
                translation_B: "제품 시연",
                translation_C: "포스터 대회",
                translation_D: "강좌 시리즈"
            },
            {
                id: "v4-p3-t02-q67",
                text: "Look at the graphic. What kind of seedlings will be given away?",
                classification: "GRAPHIC",
                options: {
                    A: "Eastern redbud",
                    B: "Japanese maple",
                    C: "White fringe tree",
                    D: "Panicle hydrangea"
                },
                correctAnswer: "A",
                translation: "시각 정보에 의하면, 어떤 종류의 묘목을 나눠줄 것인가?",
                translation_A: "캐나다 박태기",
                translation_B: "일본 단풍나무",
                translation_C: "이팝나무",
                translation_D: "나무수국"
            }
        ],
        script: [
            { speaker: "Man", text: "I've been on vacation, so I missed our department's meeting. Can you give me an update?" },
            { speaker: "Woman", text: "Well, all our public programs and community events are on schedule. I'm working on the public education part now. There'll be a children's poster competition next month, which the city mayor will judge." },
            { speaker: "Man", text: "Interesting. Is there a prize?" },
            { speaker: "Woman", text: "The winner will get a ribbon. But all participants will get a seedling to plant at home. We'll be giving away the tallest of these four varieties, since it was the most popular in a survey of our residents." }
        ],
        translation: "남: 휴가를 다녀와서 부서 회의를 놓쳤어요. 새로운 사항을 알려 주실 수 있나요?\n여: 우리 공익 프로그램과 지역 사회 행사가 일정대로 진행되고 있어요. 저는 지금 공공 교육 부문을 맡고 있어요. 다음 달에 어린이 포스터 대회가 있을 텐데 시장님이 심사하실 거예요.\n남: 흥미롭네요. 상도 있나요?\n여: 우승자는 리본을 받아요. 하지만 모든 참가자는 집에 심을 묘목을 받을 거예요. 이 네 가지 종류 중 가장 키가 큰 걸로 나눠줄 겁니다. 주민 설문 조사에서 가장 인기가 많았거든요."
    },
    {
        testId: 2,
        vol: 4,
        setId: "v4-p3-t02-s13",
        contextType: "B1. 식사 / 외식 / 카페",
        questionRange: "68-70",
        audio: "/audio/ETS_TOEIC_4/Test_02/Test_02-68-70.mp3",
        image: "/images/ETS_TOEIC_4/Test_02/Part_03/v4_p3_t02_q68.png",
        questions: [
            {
                id: "v4-p3-t02-q68",
                text: "Where does the conversation most likely take place?",
                classification: "WHO_LOC",
                options: {
                    A: "At a café",
                    B: "At an electronics shop",
                    C: "At a stationery store",
                    D: "At a clothing store"
                },
                correctAnswer: "A",
                translation: "대화는 어디에서 이루어지겠는가?",
                translation_A: "카페",
                translation_B: "전자 제품 매장",
                translation_C: "문구점",
                translation_D: "의류 매장"
            },
            {
                id: "v4-p3-t02-q69",
                text: "Look at the graphic. How much will the man save on his purchase?",
                classification: "GRAPHIC",
                options: {
                    A: "5%",
                    B: "3%",
                    C: "7%",
                    D: "2%"
                },
                correctAnswer: "D",
                translation: "시각 정보에 의하면, 남자는 구매 시 얼마를 절약하겠는가?",
                translation_A: "5%",
                translation_B: "3%",
                translation_C: "7%",
                translation_D: "2%"
            },
            {
                id: "v4-p3-t02-q70",
                text: "What does the man say he will do later today?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Call a business",
                    B: "Return some merchandise",
                    C: "Fill out an online survey",
                    D: "Hang up some posters"
                },
                correctAnswer: "A",
                translation: "남자는 오늘 나중에 무엇을 하겠다고 말하는가?",
                translation_A: "업체에 전화하기",
                translation_B: "일부 상품 반품하기",
                translation_C: "온라인 설문 조사 작성하기",
                translation_D: "포스터 걸기"
            }
        ],
        script: [
            { speaker: "Man", text: "Hi, I'd like a large black coffee and an egg-and-cheese croissant, please." },
            { speaker: "Woman", text: "Sure. That'll be eight dollars. Are you a Shelby's preferred customer?" },
            { speaker: "Man", text: "Uh, no I'm not. But I do have an EZ-Cash card." },
            { speaker: "Woman", text: "Great. Let me ring that up for you." },
            { speaker: "Man", text: "By the way, I'd like to order breakfast for my team tomorrow morning. Can I place that order ahead of time?" },
            { speaker: "Woman", text: "Sure. Would you like to do that now?" },
            { speaker: "Man", text: "No, I'll call you later today when I know what everyone wants. Thanks for the information." }
        ],
        translation: "남: 안녕하세요, 블랙 커피 라지 하고 에그 앤 치즈 크루아상 주세요.\n여: 네, 8달러입니다. 쉘비 우대 고객이신가요?\n남: 아, 아니요. 하지만 EZ-캐시 카드가 있어요.\n여: 좋아요. 결제할게요.\n남: 그런데 내일 아침에 저희 팀 아침 식사를 주문하고 싶은데요. 미리 주문해도 되나요?\n여: 그럼요, 지금 하시겠어요?\n남: 아니요, 모두가 원하는 것을 알아보고 이따가 전화할게요. 알려주셔서 감사합니다."
    }
];
