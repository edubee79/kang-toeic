import { Part3Set } from '../types';

export const test9Data: Part3Set[] = [
    {
        testId: 9,
        vol: 4,
        setId: "v4-p3-t09-s01",
        contextType: "A1. 사무실 업무",
        questionRange: "32-34",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-32-34.mp3",
        questions: [
            {
                id: "v4-p3-t09-q32",
                text: "Where is the conversation taking place?",
                classification: "WHO_LOC",
                options: {
                    A: "At an athletic club",
                    B: "At a hospital",
                    C: "At a shipping company",
                    D: "At an accounting firm"
                },
                correctAnswer: "B",
                translation: "대화는 어디서 이루어지는가?",
                translation_A: "운동부",
                translation_B: "병원",
                translation_C: "운송회사",
                translation_D: "회계사무소"
            },
            {
                id: "v4-p3-t09-q33",
                text: "What was the man's previous job?",
                classification: "DETAIL",
                options: {
                    A: "Receptionist",
                    B: "Custodian",
                    C: "Tour guide",
                    D: "Bus driver"
                },
                correctAnswer: "A",
                translation: "남자의 이전 직업은 무엇인가?",
                translation_A: "안내데스크 직원",
                translation_B: "관리인",
                translation_C: "관광가이드",
                translation_D: "버스 운전기사"
            },
            {
                id: "v4-p3-t09-q34",
                text: "What does the woman emphasize about the job being offered?",
                classification: "DETAIL",
                options: {
                    A: "It demands long hours.",
                    B: "It requires a lot of experience.",
                    C: "It offers a competitive salary.",
                    D: "It involves a lot of walking."
                },
                correctAnswer: "D",
                translation: "여자는 제공되는 일자리에 대해 무엇을 강조하는가?",
                translation_A: "근무 시간이 길다.",
                translation_B: "많은 경력이 필요하다.",
                translation_C: "높은 급여를 제공한다.",
                translation_D: "많이 걷는 것이 포함된다."
            }
        ],
        script: [
            { speaker: "Woman", text: "Mr. Hughes? My name is Ms. Ayhan. I'll be interviewing you today for the open position of patient transporter. I see on your application that you've worked in health care before." },
            { speaker: "Man", text: "That's right. I worked at the main reception desk at the Southeast Regional Hospital for a while. But I'd like to try a different role." },
            { speaker: "Woman", text: "You'd be responsible for moving patients to various locations throughout the hospital. It'll involve about six miles of walking every shift. Are you OK with that?" },
            { speaker: "Man", text: "I actually do a lot of hiking and rock climbing in my free time. So I'm looking forward to having a job that'll have me on my feet more." }
        ],
        translation: "여: 휴스 씨? 저는 아이한이라고 해요. 오늘 환자 운반요원 공석 채용을 위해 제가 휴스 씨 면접을 진행할 겁니다. 의료 분야에서 일한 적이 있다고 지원서에서 봤는데요.\n남: 맞습니다. 얼마 동안 사우스이스트 지역 병원 메인 안내데스크에서 일했습니다. 하지만 다른 역할을 맡아 보고 싶었어요.\n여: 환자들을 병원의 여러 장소로 이동시킬 책임이 주어질 텐데요. 매 교대 근무마다 6마일 정도 걷게 될 거예요. 괜찮으신가요?\n남: 실은 여가 시간에 하이킹과 암벽 등반을 많이 합니다. 그래서 발로 뛰는 직업을 무척 바라고 있어요."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p3-t09-s02",
        contextType: "B1. 쇼핑",
        questionRange: "35-37",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-35-37.mp3",
        questions: [
            {
                id: "v4-p3-t09-q35",
                text: "What kind of business will the men open?",
                classification: "WHO_LOC",
                options: {
                    A: "An electronics repair shop",
                    B: "A car dealership",
                    C: "A restaurant",
                    D: "A clothing store"
                },
                correctAnswer: "D",
                translation: "남성들은 어떤 종류의 업체를 열 것인가?",
                translation_A: "전자 제품 수리점",
                translation_B: "자동차 대리점",
                translation_C: "음식점",
                translation_D: "의류 매장"
            },
            {
                id: "v4-p3-t09-q36",
                text: "How did the men learn about the woman's consulting service?",
                classification: "DETAIL",
                options: {
                    A: "From a local business owner",
                    B: "From a marketing course",
                    C: "From a friend who works in retail",
                    D: "From a newspaper advertisement"
                },
                correctAnswer: "C",
                translation: "남성들은 여자의 자문 서비스에 대해 어떻게 알았는가?",
                translation_A: "지역 내 사업주로부터 들어서",
                translation_B: "마케팅 강좌에서 들어서",
                translation_C: "소매업계에 종사하는 친구에게 들어서",
                translation_D: "신문 광고를 통해서"
            },
            {
                id: "v4-p3-t09-q37",
                text: "What does the woman say should be emphasized about a business?",
                classification: "DETAIL",
                options: {
                    A: "That it will provide many jobs",
                    B: "That it will be run by family members",
                    C: "That its owners have a lot of experience",
                    D: "That its owners live in the neighborhood"
                },
                correctAnswer: "B",
                translation: "여자는 업체에 대해 무엇을 강조해야 한다고 말하는가?",
                translation_A: "많은 일자리를 제공할 것이라는 점",
                translation_B: "가족이 운영할 것이라는 점",
                translation_C: "주인이 경력이 많다는 점",
                translation_D: "주인이 인근에 거주한다는 점"
            }
        ],
        script: [
            { speaker: "Woman", text: "Hello. I'm calling to discuss the men's suit and coat store that you want to open." },
            { speaker: "Man 1", text: "Thanks for returning our call. My cousin and I are both on the line." },
            { speaker: "Man 2", text: "Yes-thanks. At first, we were just going to open the business without any advertising." },
            { speaker: "Man 1", text: "Right. But then we consulted a friend in the retail industry. He said a strong advertising campaign makes a difference and referred us to you." },
            { speaker: "Woman", text: "He's right. You need to advertise your store before it opens." },
            { speaker: "Man 2", text: "Have you looked at the information we sent?" },
            { speaker: "Woman", text: "Yes, and here's what I think: first, you should emphasize the fact that this will be a family-run business. Local customers will appreciate that." }
        ],
        translation: "여: 안녕하세요. 귀하께서 개업하고 싶어 하시는 남성 정장 및 코트 매장에 대해 상의 드리려고 전화했습니다.\n남1: 전화 주셔서 감사합니다. 제 사촌과 저 둘 다 듣고 있어요.\n남2: 네, 감사합니다. 처음에는 저희가 광고 없이 개업하려고 했어요.\n남1: 맞아요. 그런데 소매업계에 있는 친구에게 상담을 했는데요. 강력한 광고 캠페인이 차이를 만든다고 하면서 저희에게 여기를 소개해 주었습니다.\n여: 그분 말씀이 맞습니다. 개업하기 전에 매장을 광고하셔야 해요.\n남2: 저희가 보낸 정보는 보셨나요?\n여: 네, 제 생각을 말씀드릴게요. 우선 가족이 운영하는 업체라는 사실을 강조해야 합니다. 지역 소비자들은 그 점을 높이 평가하거든요."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p3-t09-s03",
        contextType: "B1. 쇼핑",
        questionRange: "38-40",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-38-40.mp3",
        questions: [
            {
                id: "v4-p3-t09-q38",
                text: "What are the speakers excited about?",
                classification: "DETAIL",
                options: {
                    A: "An upcoming holiday",
                    B: "A staff training session",
                    C: "Some new equipment",
                    D: "Some staff discounts"
                },
                correctAnswer: "C",
                translation: "화자들은 무엇에 대해 기뻐하는가?",
                translation_A: "다가오는 휴일",
                translation_B: "직원 교육",
                translation_C: "새 장비",
                translation_D: "직원 할인"
            },
            {
                id: "v4-p3-t09-q39",
                text: "Where most likely do the speakers work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a train station",
                    B: "At a grocery store",
                    C: "At an electronics store",
                    D: "At a medical center"
                },
                correctAnswer: "B",
                translation: "화자들은 어디서 일하겠는가?",
                translation_A: "기차역",
                translation_B: "식료품점",
                translation_C: "전자 제품 매장",
                translation_D: "병원"
            },
            {
                id: "v4-p3-t09-q40",
                text: "What will the woman tell her manager?",
                classification: "ACTION_NEXT",
                options: {
                    A: "She can work extra hours.",
                    B: "She needs more supplies.",
                    C: "She stocked some shelves.",
                    D: "She completed a project."
                },
                correctAnswer: "A",
                translation: "여자는 관리자에게 뭐라고 말할 것인가?",
                translation_A: "초과 근무를 할 수 있다.",
                translation_B: "물품이 더 필요하다.",
                translation_C: "선반에 물건을 채웠다.",
                translation_D: "프로젝트를 완료했다."
            }
        ],
        script: [
            { speaker: "Man", text: "Look what just arrived—they're the new handheld scanners we've been waiting for!" },
            { speaker: "Woman", text: "That's exciting! It's going to be so much easier to scan the groceries with these. Do you know when they'll be installed at each of the checkout stations?" },
            { speaker: "Man", text: "Our manager is hoping to set them up tomorrow night after the store closes. She asked if I could help, but I'm not available." },
            { speaker: "Woman", text: "Oh, I can stay late tomorrow night. I'll go let her know." }
        ],
        translation: "남: 방금 도착한 것 좀 보세요. 우리가 기다리던 신제품 소형 스캐너예요!\n여: 신나네요! 이걸로 식료품을 스캔하면 훨씬 수월해질 거예요. 각 계산대에 언제 설치될지 아세요?\n남: 관리자는 내일 밤 매장을 닫은 후 설치했으면 해요. 도와줄 수 있는지 물었는데 제가 시간이 안 되네요.\n여: 아, 제가 내일 밤 늦게까지 남아 있을 수 있어요. 내가 가서 관리자에게 말할게요."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p3-t09-s04",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "41-43",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-41-43.mp3",
        questions: [
            {
                id: "v4-p3-t09-q41",
                text: "What type of business do the women work at?",
                classification: "WHO_LOC",
                options: {
                    A: "A furniture store",
                    B: "A hardware store",
                    C: "A construction company",
                    D: "A landscaping service"
                },
                correctAnswer: "C",
                translation: "여자들은 어떤 종류의 업체에서 일하는가?",
                translation_A: "가구점",
                translation_B: "철물점",
                translation_C: "건설 회사",
                translation_D: "조경 서비스 업체"
            },
            {
                id: "v4-p3-t09-q42",
                text: "According to the man, what may be surprising about a product?",
                classification: "DETAIL",
                options: {
                    A: "Its weight",
                    B: "Its durability",
                    C: "Its cost",
                    D: "Its color"
                },
                correctAnswer: "C",
                translation: "남자에 따르면, 제품의 어떤 점이 놀라운가?",
                translation_A: "무게",
                translation_B: "내구성",
                translation_C: "비용",
                translation_D: "색상"
            },
            {
                id: "v4-p3-t09-q43",
                text: "What will Ms. Taylor most likely ask the man for?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Some samples",
                    B: "A software demonstration",
                    C: "Some equipment",
                    D: "Free delivery"
                },
                correctAnswer: "A",
                translation: "테일러 씨는 남자에게 무엇을 요청하겠는가?",
                translation_A: "견본",
                translation_B: "소프트웨어 시연",
                translation_C: "장비",
                translation_D: "무료 배송"
            }
        ],
        script: [
            { speaker: "Woman 1", text: "I'm Mona Pahlavi, from Pahlavi Construction, and this is Ms. Taylor, our interior designer. We're looking for a source for reclaimed lumber. Many customers are asking to incorporate old wood into their construction projects." },
            { speaker: "Man", text: "You've come to the right place. We carry wood rescued from barns, factories, and other structures that have been torn down." },
            { speaker: "Woman 2", text: "People think using reclaimed lumber is cost-effective. Is that true?" },
            { speaker: "Man", text: "Surprisingly, no. It's actually more expensive because we have to go through a lengthy process to make the wood reusable." },
            { speaker: "Woman 1", text: "Hmm. What do you think about that, Ms. Taylor?" },
            { speaker: "Woman 2", text: "Customers will pay more for the old wood look, but I'm sure they'd like to see some samples before deciding." }
        ],
        translation: "여1: 저는 팔라비 건설의 모나 팔라비입니다. 이쪽은 저희 실내 디자이너 테일러 씨이고요. 저희는 재생 목재 공급자를 찾고 있어요. 많은 고객이 공사 프로젝트에 고목재를 포함해 달라고 요청하고 있어서요.\n남: 잘 찾아오셨습니다. 저희는 헛간과 공장, 허물어진 구조물에서 건진 목재를 취급합니다.\n여2: 사람들은 재생 목재가 가성비 높다고 생각하던데. 사실인가요?\n남: 놀랍게도 사실이 아닙니다. 목재를 재사용할 수 있도록 만드는 긴 과정을 거쳐야 하기 때문에 사실 더 비싸거든요.\n여1: 음, 어떻게 생각하세요, 테일러 씨?\n여2: 고객들은 고목재 외관에 돈을 더 지불할 겁니다. 하지만 결정하기 전에 분명 견본을 보고 싶어 할 거예요."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p3-t09-s05",
        contextType: "B3. 행사 / 연설",
        questionRange: "44-46",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-44-46.mp3",
        questions: [
            {
                id: "v4-p3-t09-q44",
                text: "Who most likely is the man?",
                classification: "WHO_LOC",
                options: {
                    A: "A history professor",
                    B: "A mechanic",
                    C: "A lawyer",
                    D: "A journalist"
                },
                correctAnswer: "D",
                translation: "남자는 누구이겠는가?",
                translation_A: "역사학 교수",
                translation_B: "기계공",
                translation_C: "변호사",
                translation_D: "기자"
            },
            {
                id: "v4-p3-t09-q45",
                text: "What does the man say he read about the company?",
                classification: "DETAIL",
                options: {
                    A: "It was started by the woman's father.",
                    B: "It manufactures automobile parts.",
                    C: "It was recently purchased by a competitor.",
                    D: "It is the area's largest employer."
                },
                correctAnswer: "A",
                translation: "남자는 회사에 관한 어떤 내용을 읽었다고 말하는가?",
                translation_A: "여자의 아버지가 개업했다.",
                translation_B: "자동차 부품을 제조한다.",
                translation_C: "최근 경쟁업체가 이 회사를 매입했다.",
                translation_D: "지역 최대의 고용주이다."
            },
            {
                id: "v4-p3-t09-q46",
                text: "Why does the woman say, \"We export to fifty-nine countries around the world\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "To correct an error",
                    B: "To justify a decision",
                    C: "To confirm an assumption",
                    D: "To explain a delay"
                },
                correctAnswer: "C",
                translation: "여자가 \"저희는 전 세계 59개국에 수출하고 있어요\"라고 말하는 이유는?",
                translation_A: "오류를 바로잡으려고",
                translation_B: "결정에 대해 해명하려고",
                translation_C: "추정을 확인해 주려고",
                translation_D: "지연에 대해 설명하려고"
            }
        ],
        script: [
            { speaker: "Man", text: "Thanks for agreeing to give me a tour of your company, Ms. Varma. It'll provide plenty of information to use in my article for the newspaper." },
            { speaker: "Woman", text: "No problem. Did you say you write a series about local businesses?" },
            { speaker: "Man", text: "Yes. I do a weekly column spotlighting the histories of unique companies in our region. Now, I read that your father founded the company." },
            { speaker: "Woman", text: "That's right. He started it with only ten employees." },
            { speaker: "Man", text: "It seems like it's expanded a lot since then, right?" },
            { speaker: "Woman", text: "We export to fifty-nine countries around the world." },
            { speaker: "Man", text: "Impressive!" },
            { speaker: "Woman", text: "Let me show you the shipping area." }
        ],
        translation: "남: 제가 귀하 견학을 할 수 있도록 동의해 주셔서 감사합니다, 바르마 씨. 제 신문 기사에 활용할 정보를 많이 제공해주는 기회가 될 것입니다.\n여: 별말씀을요. 지역 업체에 대한 연재 기사를 쓴다고 하셨나요?\n남: 네. 우리 지역 내 독특한 업체의 역사를 집중 조명하는 주간 칼럼을 씁니다. 자, 아버님께서 회사를 설립하셨다는 글을 읽었는데요.\n여: 맞습니다. 직원 단 열 명으로 시작하셨어요.\n남: 그 이후로 많이 확장된 것 같네요, 그렇죠?\n여: 저희는 전 세계 59개국에 수출하고 있어요.\n남: 대단하네요!\n여: 선적 구역을 보여드릴게요."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p3-t09-s06",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "47-49",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-47-49.mp3",
        questions: [
            {
                id: "v4-p3-t09-q47",
                text: "Who most likely are the speakers?",
                classification: "WHO_LOC",
                options: {
                    A: "Artists",
                    B: "Engineers",
                    C: "Accountants",
                    D: "Lawyers"
                },
                correctAnswer: "B",
                translation: "화자들은 누구이겠는가?",
                translation_A: "화가",
                translation_B: "엔지니어",
                translation_C: "회계사",
                translation_D: "변호사"
            },
            {
                id: "v4-p3-t09-q48",
                text: "What does the woman ask the man to do?",
                classification: "DETAIL",
                options: {
                    A: "Lead part of a meeting",
                    B: "Revise a cost estimate",
                    C: "Contact a client",
                    D: "Perform an inspection"
                },
                correctAnswer: "A",
                translation: "여자는 남자에게 무엇을 해 달라고 요청하는가?",
                translation_A: "회의 일부 진행",
                translation_B: "견적서 수정",
                translation_C: "고객 연락",
                translation_D: "검사 시행"
            },
            {
                id: "v4-p3-t09-q49",
                text: "What will the man send the woman?",
                classification: "DETAIL",
                options: {
                    A: "An itinerary",
                    B: "A contract",
                    C: "Some driving directions",
                    D: "Some calculations"
                },
                correctAnswer: "D",
                translation: "남자는 여자에게 무엇을 보낼 것인가?",
                translation_A: "여행 일정표",
                translation_B: "계약서",
                translation_C: "주행 길 안내",
                translation_D: "계산 결과"
            }
        ],
        script: [
            { speaker: "Woman", text: "Hi, Sergey. Have you been able to finish the updates for the new bridge we're designing? I'd like to include them in the agenda for our client meeting next week." },
            { speaker: "Man", text: "Yes. I've reinforced some structural features and added the pedestrian walkway they asked for." },
            { speaker: "Woman", text: "Oh, perfect! Could you take over that part of the meeting to explain the changes to the clients?" },
            { speaker: "Man", text: "Sure, I can do that. But first, I'll send you the updated calculations on the bridge's weight capacity. Some of the numbers have changed significantly because of the structural changes we've made." },
            { speaker: "Woman", text: "OK. I'll take a look tomorrow and get back to you." }
        ],
        translation: "여: 안녕하세요, 세르게이. 우리가 설계하고 있는 새 교량에 관한 업데이트를 마칠 수 있었나요? 다음 주에 있을 고객 회의 안건으로 그 내용을 포함하고 싶어서요.\n남: 네. 구조적 기능을 보강하고 그들이 요청한 보행자용 통로를 추가했어요.\n여: 아, 완벽해요! 회의 중에 해당 부분을 넘겨받아서 고객에게 변동사항을 설명할 수 있겠어요?\n남: 그럼요, 할 수 있습니다. 하지만 먼저 교량 하중 용량에 대한 최신 계산 결과를 보내드릴게요. 저희가 한 구조적 변경 때문에 일부 수치가 상당히 바뀌었어요.\n여: 알겠어요. 내일 한번 보고 다시 얘기해요."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p3-t09-s07",
        contextType: "A1. 사무실 업무",
        questionRange: "50-52",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-50-52.mp3",
        questions: [
            {
                id: "v4-p3-t09-q50",
                text: "What products are the speakers discussing?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "Software programs",
                    B: "Screen protectors",
                    C: "Computer keyboards",
                    D: "Wireless printers"
                },
                correctAnswer: "C",
                translation: "화자들은 어떤 제품에 대해 이야기하는가?",
                translation_A: "소프트웨어 프로그램",
                translation_B: "스크린 보호기",
                translation_C: "컴퓨터 키보드",
                translation_D: "무선 프린터"
            },
            {
                id: "v4-p3-t09-q51",
                text: "According to the man, how are the products currently being advertised?",
                classification: "DETAIL",
                options: {
                    A: "On television",
                    B: "On a Web site",
                    C: "In magazines",
                    D: "By direct mail"
                },
                correctAnswer: "B",
                translation: "남자에 따르면, 제품은 현재 어떻게 광고하고 있는가?",
                translation_A: "TV에서",
                translation_B: "웹사이트에서",
                translation_C: "잡지에서",
                translation_D: "우편 광고로"
            },
            {
                id: "v4-p3-t09-q52",
                text: "What topic will the speakers discuss at a meeting?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Budget changes",
                    B: "Design modifications",
                    C: "Production delays",
                    D: "Open job positions"
                },
                correctAnswer: "A",
                translation: "화자들은 회의에서 어떤 주제를 논의할 것인가?",
                translation_A: "예산 변경",
                translation_B: "디자인 변경",
                translation_C: "생산 지연",
                translation_D: "공석"
            }
        ],
        script: [
            { speaker: "Woman", text: "Ketan, what do you think about this month's marketing report? It looks like our computer keyboard sales are decreasing." },
            { speaker: "Man", text: "Yes, I saw that. I think it may be connected to our existing marketing strategies. The keyboards are advertised mostly on our Web site. I think we need to look into expanding our advertising campaign to other types of media." },
            { speaker: "Woman", text: "That's a good idea. Perhaps we need to advocate for a larger marketing budget. That would provide us with more options. Let's bring this up at our next marketing meeting." }
        ],
        translation: "여: 케탄, 이번 달 마케팅 보고서에 대해 어떻게 생각하세요? 우리 컴퓨터 키보드 판매가 감소하는 것 같은데요.\n남: 네, 봤습니다. 저희 기존 마케팅 전략과 연관이 있는 것 같아요. 키보드는 주로 웹사이트에서 광고하고 있는데요. 광고 캠페인을 다른 유형의 미디어로 확장하는 걸 고려해 봐야 할 것 같습니다.\n여: 좋은 의견이네요. 아마 마케팅 예산을 늘려 달라고 설득해야 할 것 같아요. 선택지가 더 많아질 테니까요. 다음 마케팅 회의에서 이 점을 거론합시다."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p3-t09-s08",
        contextType: "A2. 프로젝트 / 업무 진행",
        questionRange: "53-55",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-53-55.mp3",
        questions: [
            {
                id: "v4-p3-t09-q53",
                text: "What project are the speakers mainly discussing?",
                classification: "MAIN_PURPOSE",
                options: {
                    A: "The demolition of a shopping center",
                    B: "The construction of a skyscraper",
                    C: "The replacement of a bridge",
                    D: "The redesign of a train station"
                },
                correctAnswer: "C",
                translation: "화자들은 주로 어떤 프로젝트에 대해 이야기하는가?",
                translation_A: "쇼핑센터 철거",
                translation_B: "마천루 건설",
                translation_C: "교량 교체",
                translation_D: "기차역 재설계"
            },
            {
                id: "v4-p3-t09-q54",
                text: "What does the woman imply when she says, \"steel costs per ton are in the thousands for every bid\"?",
                classification: "IMPLY_MEANING",
                options: {
                    A: "A coworker's calculations are incorrect.",
                    B: "The man's concern is justified.",
                    C: "A contractor should be replaced.",
                    D: "A new construction method will be used."
                },
                correctAnswer: "B",
                translation: "여자가 \"1톤당 강철 가격은 입찰마다 수천 단위예요\"라고 말하는 의도는 무엇인가?",
                translation_A: "동료의 계산이 틀렸다.",
                translation_B: "남자의 우려가 그럴 만하다.",
                translation_C: "도급업체를 교체해야 한다.",
                translation_D: "새로운 공사 방법이 사용될 것이다."
            },
            {
                id: "v4-p3-t09-q55",
                text: "What will the speakers do this afternoon?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Take some photographs",
                    B: "Organize a site visit",
                    C: "Create a spreadsheet",
                    D: "Speak to an accountant"
                },
                correctAnswer: "C",
                translation: "화자들은 오늘 오후에 무엇을 할 것인가?",
                translation_A: "사진 촬영",
                translation_B: "현장 방문 준비",
                translation_C: "스프레드시트 작성",
                translation_D: "회계사와 대화"
            }
        ],
        script: [
            { speaker: "Woman", text: "Hi, Raul. I wanted to let you know that we received all of the bids we were waiting on for the Meyerville Bridge replacement project." },
            { speaker: "Man", text: "Thanks. Are there any acceptable bids? I'm worried that with costs rising nowadays we may exceed our budget for city infrastructure projects." },
            { speaker: "Woman", text: "Well, steel costs per ton are in the thousands for every bid." },
            { speaker: "Man", text: "I see. We've already reached out to all of the contractors we can, so we'll just need to seek additional funding, then. Let's put together a spreadsheet comparing the bids this afternoon. We'll use that for reference at our next transportation department meeting." }
        ],
        translation: "여: 안녕하세요, 라울. 우리가 기다리던 메이어빌 교량 교체 프로젝트를 위한 입찰을 모두 받았다고 알려 드리고 싶었어요.\n남: 고맙습니다. 받아들일 만한 입찰이 있나요? 요즘 비용이 올라 시 기반시설 프로젝트 예산이 초과될 수도 있어서 걱정스러워요.\n여: 음, 1톤당 강철 가격은 입찰마다 수천 단위예요.\n남: 알겠어요. 이미 가능한 모든 도급업체에 연락을 취했으니 추가 자금만 구하면 돼요. 오늘 오후에 입찰을 비교한 스프레드시트를 만들어 봅시다. 다음 교통부 회의에서 쓸 참고 자료로 활용할 겁니다."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p3-t09-s09",
        contextType: "C2. 건강 / 여가 / 농장",
        questionRange: "56-58",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-56-58.mp3",
        questions: [
            {
                id: "v4-p3-t09-q56",
                text: "Why was the man in Vancouver?",
                classification: "WHY_REASON",
                options: {
                    A: "To attend a trade show",
                    B: "To meet with a client",
                    C: "To take a vacation",
                    D: "To facilitate a workshop"
                },
                correctAnswer: "A",
                translation: "남자는 왜 밴쿠버에 갔는가?",
                translation_A: "무역 박람회에 참석하려고",
                translation_B: "고객을 만나려고",
                translation_C: "휴가를 가려고",
                translation_D: "워크숍을 추진하려고"
            },
            {
                id: "v4-p3-t09-q57",
                text: "What does the woman say about a hotel?",
                classification: "DETAIL",
                options: {
                    A: "It was a suitable venue for an event.",
                    B: "It was reserved by a professional organization.",
                    C: "It is environmentally friendly.",
                    D: "It is convenient to public transportation."
                },
                correctAnswer: "C",
                translation: "여자는 호텔에 대해 뭐라고 말하는가?",
                translation_A: "행사를 치르기에 적합한 장소이다.",
                translation_B: "전문 기관에서 예약했다.",
                translation_C: "환경 친화적이다.",
                translation_D: "대중교통을 이용하기에 편리하다."
            },
            {
                id: "v4-p3-t09-q58",
                text: "Why will the hotel close temporarily?",
                classification: "WHY_REASON",
                options: {
                    A: "To allow staff to conduct a training session",
                    B: "To be subject to an inspection",
                    C: "To accommodate an expansion",
                    D: "To ensure movers have access to the rooms"
                },
                correctAnswer: "C",
                translation: "호텔은 왜 임시로 문을 닫는가?",
                translation_A: "직원들이 교육을 시행할 수 있도록 하려고",
                translation_B: "점검 대상이어서",
                translation_C: "확장 공사를 위해",
                translation_D: "물건을 옮기는 사람들이 객실에 들어갈 수 있게 하려고"
            }
        ],
        script: [
            { speaker: "Man", text: "Hi, Amy. I just got back from that industry trade show in Vancouver. Thanks for recommending the Arch Coast Hotel." },
            { speaker: "Woman", text: "I thought you'd like it. I know how important conservation is to you. Did you know that it was the first environmentally sustainable hotel in Canada?" },
            { speaker: "Man", text: "Yes, I spoke with the owner. He described the hotel's history and told me about their plans. They'll be closed next month while they work on an addition to the main building." }
        ],
        translation: "남: 안녕하세요, 에이미. 저는 밴쿠버에서 열린 산업 무역 박람회에서 이제 막 돌아왔어요. 아치 코스트 호텔을 추천해 주셔서 고마워요.\n여: 마음에 들 줄 알았어요. 자연 보존이 당신에게 얼마나 중요한지 잘 알거든요. 그곳이 캐나다 최초의 환경적으로 지속 가능한 호텔이라는 걸 알고 계셨나요?\n남: 네, 사장과 얘기를 나눴어요. 호텔 역사에 대해 이야기하면서 자신들의 계획을 알려줬어요. 다음 달에 문을 닫고 본관에 추가 공사를 한대요."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p3-t09-s10",
        contextType: "A1. 사무실 업무",
        questionRange: "59-61",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-59-61.mp3",
        questions: [
            {
                id: "v4-p3-t09-q59",
                text: "What did the woman apply for?",
                classification: "DETAIL",
                options: {
                    A: "A professional license",
                    B: "A job at a bank",
                    C: "A business loan",
                    D: "A credit card"
                },
                correctAnswer: "C",
                translation: "여자는 무엇을 신청했는가?",
                translation_A: "전문 면허",
                translation_B: "은행 일자리",
                translation_C: "사업자 대출",
                translation_D: "신용카드"
            },
            {
                id: "v4-p3-t09-q60",
                text: "What information does the man ask the woman to verify?",
                classification: "DETAIL",
                options: {
                    A: "Her income",
                    B: "Her account number",
                    C: "Her phone number",
                    D: "Her address"
                },
                correctAnswer: "D",
                translation: "남자는 여자에게 어떤 정보를 확인해 달라고 요청하는가?",
                translation_A: "소득",
                translation_B: "계좌 번호",
                translation_C: "전화번호",
                translation_D: "주소"
            },
            {
                id: "v4-p3-t09-q61",
                text: "What will the woman most likely do next?",
                classification: "ACTION_NEXT",
                options: {
                    A: "Sign some documents",
                    B: "Download some software",
                    C: "Speak with a friend",
                    D: "Make an appointment"
                },
                correctAnswer: "A",
                translation: "여자는 다음으로 무엇을 하겠는가?",
                translation_A: "문서에 서명하기",
                translation_B: "소프트웨어 다운로드하기",
                translation_C: "친구와 대화하기",
                translation_D: "약속 잡기"
            }
        ],
        script: [
            { speaker: "Man", text: "Francesca, welcome! I hope you didn't have too much trouble finding our banking office. Please, take a seat. I've read your application, and it looks like we'll be able to finance your business project." },
            { speaker: "Woman", text: "Oh, that's wonderful news! Opening a flower shop has been my dream for so long." },
            { speaker: "Man", text: "Absolutely. I just have one detail to confirm. Do you still live at 21 Anderson Avenue?" },
            { speaker: "Woman", text: "Actually, I've recently moved. Here's a card with my new address." },
            { speaker: "Man", text: "Thanks! I'll be right back. I need to go over to the printer to pick up some documents that I need you to sign." }
        ],
        translation: "남: 프란체스카, 어서 오세요! 저희 은행을 찾기가 너무 힘들지 않으셨기를 바라요. 어서 앉으세요. 신청서를 봤는데요, 저희가 사업 프로젝트에 자금을 댈 수 있을 것 같습니다.\n여: 아, 정말 좋은 소식이네요! 꽃집 개업이 제 오랜 꿈이었거든요.\n남: 그렇죠. 다만 한 가지 확인해야 할 세부 사항이 있어요. 아직 앤더슨 가 21번지에 거주하시나요?\n여: 사실은 최근에 이사했어요. 제 새 주소가 적힌 카드가 여기 있어요.\n남: 감사합니다! 금방 돌아올게요. 프린터로 가서 서명하실 문서를 가져와야 해요."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p3-t09-s11",
        contextType: "C2. 건강 / 여가 / 농장",
        questionRange: "62-64",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-62-64.mp3",
        questions: [
            {
                id: "v4-p3-t09-q62",
                text: "When will the man stay at the resort?",
                classification: "DETAIL",
                options: {
                    A: "On Monday night",
                    B: "On Tuesday night",
                    C: "On Wednesday night",
                    D: "On Thursday night"
                },
                correctAnswer: "A",
                translation: "남자는 리조트에 언제 투숙할 것인가?",
                translation_A: "월요일 밤",
                translation_B: "화요일 밤",
                translation_C: "수요일 밤",
                translation_D: "목요일 밤"
            },
            {
                id: "v4-p3-t09-q63",
                text: "Look at the graphic. Which cabin does the man agree to reserve?",
                classification: "GRAPHIC",
                options: {
                    A: "North cabin",
                    B: "East cabin",
                    C: "South cabin",
                    D: "West cabin"
                },
                correctAnswer: "D",
                image: "/images/ETS_TOEIC_4/Test_09/Part_03/v4_p3_t09_q62.png",
                translation: "시각 정보에 의하면, 남자는 어떤 객실을 예약하는 데 동의하는가?",
                translation_A: "북쪽 객실",
                translation_B: "동쪽 객실",
                translation_C: "남쪽 객실",
                translation_D: "서쪽 객실"
            },
            {
                id: "v4-p3-t09-q64",
                text: "What can cabin guests receive free of charge?",
                classification: "DETAIL",
                options: {
                    A: "Shuttle rides",
                    B: "Swimming pool access",
                    C: "A hot breakfast",
                    D: "A guided tour"
                },
                correctAnswer: "D",
                translation: "투숙객은 무엇을 무료로 받을 수 있는가?",
                translation_A: "셔틀 탑승",
                translation_B: "수영장 이용",
                translation_C: "따뜻한 아침 식사",
                translation_D: "가이드 투어"
            }
        ],
        script: [
            { speaker: "Woman", text: "Goodland Nature Preserve and Resort. How may I help you?" },
            { speaker: "Man", text: "I have a two-person cabin booked for next Monday night, but I'm hoping to change my reservation." },
            { speaker: "Woman", text: "OK—to a different day?" },
            { speaker: "Man", text: "No, we still want to stay on Monday night, but we'd like a bigger cabin." },
            { speaker: "Woman", text: "What size do you need?" },
            { speaker: "Man", text: "One that accommodates three or more people." },
            { speaker: "Woman", text: "Well, there's only one larger cabin available. It costs 150 dollars." },
            { speaker: "Man", text: "That's fine—we'll take it! Also, do you offer private tours of the nature preserve?" },
            { speaker: "Woman", text: "We do! It's complimentary with your cabin booking. Just let me know when you'd like to do it, and I'll make arrangements with our guide." }
        ],
        translation: "여: 굿랜드 자연보호구역 리조트입니다. 어떻게 도와드릴까요?\n남: 다음 주 월요일 밤에 2인실이 예약되어 있는데요. 예약을 변경하고 싶어요.\n여: 네, 다른 날짜로요?\n남: 아니요, 여전히 월요일 밤에 투숙하고 싶은데 더 큰 객실을 원해요.\n여: 어떤 크기가 필요하세요?\n남: 3인 이상 수용할 수 있는 객실이요.\n여: 음, 더 큰 객실이 딱 하나 있네요. 150달러입니다.\n남: 좋습니다. 그걸로 할게요! 그리고 자연보호구역 개인 투어를 제공하시나요?\n여: 제공합니다! 귀하의 객실 예약으로는 무료입니다. 언제 하고 싶으신지 알려주시면 저희 가이드와 함께 준비하겠습니다."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p3-t09-s12",
        contextType: "C2. 건강 / 여가 / 농장",
        questionRange: "65-67",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-65-67.mp3",
        questions: [
            {
                id: "v4-p3-t09-q65",
                text: "What problem does the man mention?",
                classification: "DETAIL",
                options: {
                    A: "A worker has not yet arrived.",
                    B: "Some tools have been misplaced.",
                    C: "A tractor is not working.",
                    D: "Some crops are damaged."
                },
                correctAnswer: "C",
                translation: "남자는 어떤 문제점을 언급하는가?",
                translation_A: "인부가 아직 도착하지 않았다.",
                translation_B: "공구를 제자리에 두지 않아 찾을 수 없다.",
                translation_C: "트랙터가 작동하지 않는다.",
                translation_D: "일부 농작물이 손상을 입었다."
            },
            {
                id: "v4-p3-t09-q66",
                text: "Look at the graphic. Where does the woman tell the man to go?",
                classification: "GRAPHIC",
                options: {
                    A: "To building 1",
                    B: "To building 2",
                    C: "To building 3",
                    D: "To building 4"
                },
                correctAnswer: "A",
                image: "/images/ETS_TOEIC_4/Test_09/Part_03/v4_p3_t09_q65.png",
                translation: "시각 정보에 의하면, 여자는 남자에게 어디로 가라고 말하는가?",
                translation_A: "1번 건물",
                translation_B: "2번 건물",
                translation_C: "3번 건물",
                translation_D: "4번 건물"
            },
            {
                id: "v4-p3-t09-q67",
                text: "What does the woman offer to do?",
                classification: "DETAIL",
                options: {
                    A: "Complete the man's work shift",
                    B: "Go with the man",
                    C: "Move some boxes",
                    D: "Unlock a gate"
                },
                correctAnswer: "B",
                translation: "여자는 무엇을 하겠다고 제안하는가?",
                translation_A: "남자의 교대 근무 시간 끝내기",
                translation_B: "남자와 동행하기",
                translation_C: "상자 옮기기",
                translation_D: "문 열기"
            }
        ],
        script: [
            { speaker: "Woman", text: "Can I help you find something, Lee?" },
            { speaker: "Man", text: "Please! One of the tractors just broke down out in the cornfield, and Kyle sent me back for a toolbox. I just started working here, though, so I'm still getting used to the layout of this place." },
            { speaker: "Woman", text: "Oh, you'll want to go to the toolshed. It's right across the road, next to the pond." },
            { speaker: "Man", text: "Alright. Which way is that?" },
            { speaker: "Woman", text: "Actually, I'll head over there with you. I need to grab a wheelbarrow." }
        ],
        translation: "여: 리, 찾는 거 도와줄까요?\n남: 도와주세요! 옥수수밭에서 트랙터 한 대가 고장 났는데 카일이 연장통을 가지고 오라고 저를 보냈어요. 그런데 저는 이제 막 일을 시작해서 아직 이곳 배치를 익히는 중이거든요.\n여: 아, 공구 창고로 가고 싶으신 거네요. 길 건너편 연못 옆에 있어요.\n남: 알겠습니다. 어떤 길인가요?\n여: 실은, 제가 같이 가 드릴게요. 손수레를 가져와야 해서요."
    },
    {
        testId: 9,
        vol: 4,
        setId: "v4-p3-t09-s13",
        contextType: "A1. 사무실 업무",
        questionRange: "68-70",
        audio: "/audio/ETS_TOEIC_4/Test_09/Test_09-68-70.mp3",
        questions: [
            {
                id: "v4-p3-t09-q68",
                text: "Where do the speakers most likely work?",
                classification: "WHO_LOC",
                options: {
                    A: "At a fabric store",
                    B: "At an employee staffing service",
                    C: "At a health-inspection department",
                    D: "At a commercial laundry facility"
                },
                correctAnswer: "D",
                translation: "화자들은 어디서 일하겠는가?",
                translation_A: "직물 매장",
                translation_B: "직원 채용 서비스 업체",
                translation_C: "건강 검진 부서",
                translation_D: "상업 세탁 시설"
            },
            {
                id: "v4-p3-t09-q69",
                text: "Look at the graphic. Which business did the man receive a request from?",
                classification: "GRAPHIC",
                options: {
                    A: "Larkston Hotel",
                    B: "Trissler Hotel",
                    C: "Benchlal Restaurant",
                    D: "Cho Fine Dining"
                },
                correctAnswer: "C",
                image: "/images/ETS_TOEIC_4/Test_09/Part_03/v4_p3_t09_q68.png",
                translation: "시각 정보에 의하면, 남자는 어떤 업체에서 요청을 받았는가?",
                translation_A: "라크스턴 호텔",
                translation_B: "트리슬러 호텔",
                translation_C: "벤치럴 레스토랑",
                translation_D: "조 파인 다이닝"
            },
            {
                id: "v4-p3-t09-q70",
                text: "How does the woman suggest resolving an issue?",
                classification: "DETAIL",
                options: {
                    A: "By issuing a refund",
                    B: "By consulting with a supervisor",
                    C: "By explaining a policy to a customer",
                    D: "By adjusting the order of some work"
                },
                correctAnswer: "D",
                translation: "여자는 어떻게 문제를 해결하자고 제안하는가?",
                translation_A: "환불 처리함으로써",
                translation_B: "관리자와 상의함으로써",
                translation_C: "고객에게 정책을 설명함으로써",
                translation_D: "작업 순서를 조정함으로써"
            }
        ],
        script: [
            { speaker: "Man", text: "A client just called. I need to check on a large batch of tablecloths, napkins, and linens that we're cleaning." },
            { speaker: "Woman", text: "What's the job number?" },
            { speaker: "Man", text: "Um. Seventeen. They requested that everything be ready tonight instead of tomorrow. Let's make this a priority." },
            { speaker: "Woman", text: "OK. I see their initial order came in at eleven thirty this morning. Their items haven't been placed in the washer yet. When do they need this rush work done?" },
            { speaker: "Man", text: "By five p.m." },
            { speaker: "Woman", text: "We can do it if we put them ahead of job sixteen." },
            { speaker: "Man", text: "Sounds good." },
            { speaker: "Woman", text: "So I'll just hold sixteen back then. That will help free up some washing machines and dryers." }
        ],
        translation: "남: 한 고객이 막 전화했어요. 세탁할 대량의 테이블보, 냅킨, 리넨 제품을 확인해야 해요.\n여: 작업번호가 뭐죠?\n남: 음. 17번이요. 내일 알고 오늘 밤에 모두 준비해 달라고 요청했어요. 이 일을 최우선 순위에 두도록 하죠.\n여: 알겠어요. 첫 주문이 오늘 오전 11시 30분에 들어왔네요. 그들의 물품은 아직 세탁기에 들어가지 않았어요. 이 급한 작업은 언제까지 마쳐야 하나요?\n남: 오후 5시까지요.\n여: 16번 작업 앞으로 넣으면 가능해요.\n남: 좋아요.\n여: 그럼 16번은 보류할게요. 그럼 세탁기와 건조기 몇 대가 비어요."
    }
];
