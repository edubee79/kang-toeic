import { PracticeSet } from '../../v4/reading/part7/multi/types';

export const test2MultiData: PracticeSet[] = [
    // Questions 176-180: Web page and e-mail (Double)
    {
        id: "v3-p7-t2-multi-set11",
        vol: 3,
        questionRange: "176-180",
        setType: "Double",
        passages: [
            {
                id: "v3-p7-t2-s11-p1",
                contextType: "P4",
                docType: "WEB_PAGE",
                header: {
                    navItems: ["Our Company", "Our Products", "Our Partners", "Contact Us"]
                },
                content: [
                    "Drymotic is pleased to announce that our revolutionary vacuum-microwave dehydration process is now being used by more than 30 companies in the food and pharmaceutical industries.",
                    "Here’s how it works: Batches of raw organic materials, prepared in small pieces, are loaded into the machine’s rotating drum. As the drum turns, moisture is removed from the pieces by microwave energy. The final moisture level can be preset by the operator. The dried pieces retain their color, taste, and nutrition, and are then ready for packaging. Drymotic machines produce better results in less time (and at lower cost) than freeze-drying and air-drying.",
                    "Drymotic machines are available in the following sizes:",
                    "| Model Number | Power | Suggested use |\n| :--- | :--- | :--- |\n| G4200 | 10 kw | Testing new products |\n| G4260 | 50 kw | Small-scale manufacturers |\n| H4500 | 100 kw | Large-scale, high-volume manufacturers |"
                ],
                translation: "회사 소개 | 우리 제품 | 협격사 | 문의하기\n\nDrymotic은 우리의 혁신적인 진공 마이크로파 탈수 공정기가 현재 식품 및 제약 산업의 30개 이상의 기업에서 사용되고 있음을 알리게 되어 기쁩니다.\n\n작동 방식은 다음과 같습니다: 작은 조각으로 준비된 생 유기물 뭉치들이 기계의 회전 드럼에 투입됩니다. 드럼이 회전하면서 마이크로파 에너지를 통해 조각들로부터 수분이 제거됩니다. 최종 수분 함량은 작업자가 미리 설정할 수 있습니다. 건조된 조각들은 색상, 맛, 영양을 유지하며 포장 준비가 완료됩니다. Drymotic 기계는 냉동 건조 및 공기 건조보다 적은 시간에 (그리고 더 적은 비용으로) 더 나은 결과를 만들어냅니다.\n\nDrymotic 기계는 다음 크기로 제공됩니다:\n\n모델 번호 | 전력 | 권장 용도\nG4200 | 10 kw | 신제품 테스트\nG4260 | 50 kw | 소규모 제조업체\nH4500 | 100 kw | 대규모, 대량 제조업체"
            },
            {
                id: "v3-p7-t2-s11-p2",
                contextType: "P1",
                docType: "EMAIL",
                header: {
                    to: "customerservice@drymotic.com",
                    from: "ovolterra@yambrett.com.au",
                    date: "6 May",
                    subject: "Malfunctioning unit"
                },
                content: [
                    "Dear Customer Service,",
                    "We purchased a Drymotic unit (product number: G4260, serial number: 01938207) last year for use with our line of instant stew mixes. We had no issues with the unit until the beginning of this month, when we began to notice an increase in processing time. We have followed the recommended cleaning schedule, so this problem cannot be caused by excess residue.",
                    "Please let me know if you have any suggestions for resolving this issue in a timely manner. I always prefer to handle minor repairs on my own, but if this issue persists, we may need to schedule a maintenance visit in the near future.",
                    "Best regards,",
                    "Olivia Volterra\nYambrett Corporation"
                ],
                translation: "수신: customerservice@drymotic.com\n발신: ovolterra@yambrett.com.au\n날짜: 5월 6일\n제목: 기기 오작동\n\n고객 서비스 부서 귀하,\n\n저희는 작년에 즉석 스튜 믹스 라인에 사용하기 위해 Drymotic 기기(제품 번호: G4260, 일련 번호: 01938207)를 구입했습니다. 이번 달 초까지 기기에 아무런 문제가 없었으나, 그때부터 처리 시간이 늘어나는 것을 발견하기 시작했습니다. 저희는 권장되는 세척 일정을 준수해 왔으므로, 이 문제가 과도한 찌꺼기로 인해 발생했을 리 없습니다.\n\n이 문제를 적시에 해결하기 위한 제안 사항이 있다면 알려주시기 바랍니다. 저는 항상 사소한 수리는 직접 처리하는 것을 선호하지만, 문제가 지속된다면 가까운 시일 내에 유지 보수 방문 일정을 잡아야 할 수도 있습니다.\n\n감사합니다,\n\nOlivia Volterra\nYambrett Corporation"
            }
        ],
        questions: [
            {
                id: "v3-p7-t2-q176",
                questionNo: 176,
                text: "What are Drymotic processors designed to do?",
                options: {
                    "A": "Cut food into little pieces",
                    "B": "Preserve food by drying it",
                    "C": "Add moisture to organic material",
                    "D": "Improve a product's color and taste"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "지문1에서 Drymotic 기계가 'vacuum-microwave dehydration process'(진공 마이크로파 탈수 공정)를 사용하여 수분을 제거한다고 했으므로, 음식을 건조시켜 보존하는 것(B)이 목적입니다.",
                translation: "Drymotic 처리기는 무엇을 하도록 설계되었는가?\n(A) 음식을 작은 조각으로 자르기 위해\n(B) 건조시켜 음식을 보존하기 위해\n(C) 유기물에 수분을 공급하기 위해\n(D) 제품의 색상과 맛을 개선하기 위해"
            },
            {
                id: "v3-p7-t2-q177",
                questionNo: 177,
                text: "On the Web page, the word “retain” in paragraph 2, line 4, is closest in meaning to",
                options: {
                    "A": "remember",
                    "B": "support",
                    "C": "enhance",
                    "D": "keep"
                },
                correctAnswer: "D",
                classification: "P7_VOCABULARY",
                explanation: "지문1의 해당 문맥에서 건조된 조각들이 색상과 맛을 'retain'(유지하다)한다고 했으므로, 'keep'(유지하다, D)이 가장 가까운 의미입니다.",
                translation: "웹페이지의 두 번째 단락 4번째 줄에 있는 “retain”이라는 단어와 의미가 가장 가까운 것은?\n(A) 기억하다\n(B) 지지하다\n(C) 향상시키다\n(D) 유지하다"
            },
            {
                id: "v3-p7-t2-q178",
                questionNo: 178,
                text: "What is suggested about the Yambrett Corporation?",
                options: {
                    "A": "It operates a high-volume dehydration machine.",
                    "B": "It produces packaged food on a small scale.",
                    "C": "It recently tested a new product.",
                    "D": "It was founded a year ago."
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                explanation: "이메일에서 Yambrett 사는 모델 번호 G4260을 구입했다고 했습니다. 지문1의 표에서 G4260의 사용 용도는 'Small-scale manufacturers'(소규모 제조업체)를 위한 것이므로 (B)가 정답입니다.",
                translation: "Yambrett Corporation에 대해 암시된 것은?\n(A) 대용량 탈수기를 가동한다.\n(B) 소규모로 포장 식품을 생산한다.\n(C) 최근에 신제품을 테스트했다.\n(D) 1년 전에 설립되었다."
            },
            {
                id: "v3-p7-t2-q179",
                questionNo: 179,
                text: "Why does Ms. Volterra write to Drymotic’s customer service department?",
                options: {
                    "A": "To schedule a maintenance visit",
                    "B": "To ask if a unit is covered by a warranty",
                    "C": "To obtain advice on making a repair",
                    "D": "To request a replacement for a machine"
                },
                correctAnswer: "C",
                classification: "P7_PURPOSE",
                explanation: "이메일에서 Volterra 씨는 'Please let me know if you have any suggestions for resolving this issue'(이 문제를 해결하기 위한 제안을 알려 달라)고 하며 사소한 수리는 직접 하는 것을 선호한다고 했으므로 수리에 대한 조언(C)을 얻기 위함입니다.",
                translation: "Ms. Volterra는 왜 Drymotic의 고객 서비스 부서에 글을 쓰는가?\n(A) 점검 방문 일정을 잡기 위해\n(B) 기기가 보증 대상인지 묻기 위해\n(C) 수리에 대한 조언을 얻기 위해\n(D) 기기 교체를 요청하기 위해"
            },
            {
                id: "v3-p7-t2-q180",
                questionNo: 180,
                text: "What problem has developed with the Yambrett Corporation’s processor?",
                options: {
                    "A": "It is operating more slowly.",
                    "B": "It is making more noise.",
                    "C": "It is using more power.",
                    "D": "It requires cleaning more often."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "이메일에서 'notice an increase in processing time'(처리 시간의 증가를 발견함)이라고 했으므로 기계가 더 느리게 작동하고 있음(A)을 알 수 있습니다.",
                translation: "Yambrett Corporation의 처리기에 어떤 문제가 생겼는가?\n(A) 더 느리게 작동하고 있다.\n(B) 소음이 더 많이 발생하고 있다.\n(C) 더 많은 전력을 사용하고 있다.\n(D) 더 자주 청소해야 한다."
            }
        ]
    },
    // Questions 181-185: Article and e-mail (Double)
    {
        id: "v3-p7-t2-multi-set12",
        vol: 3,
        questionRange: "181-185",
        setType: "Double",
        passages: [
            {
                id: "v3-p7-t2-s12-p1",
                contextType: "P3",
                docType: "ARTICLE",
                header: {
                    title: "Spotlight on Carl Ybor",
                    date: "GORE, New Zealand (2 May)",
                    headline: "Carl Ybor: Turning Trash into Treasure"
                },
                content: [
                    "Architect Carl Ybor has created a name for himself by helping clients turn their trash into treasure. He has built dozens of houses in Gore composed almost entirely of reclaimed, recovered, or found materials.",
                    "“As much as possible, I like to use materials that are already available nearby,” says Mr. Ybor. “It just takes some creativity, but that way nothing is wasted and houses can be built for a fraction of the price. Old fencing, discarded bottles, corks, mismatched bricks and tiles—nothing gets overlooked.”",
                    "While Mr. Ybor is fully responsible for creating the design plans for the houses he builds, he always involves homeowners in the building process. With a waiting list of at least a year, Mr. Ybor is able to carefully select his clients. He works solely with homeowners who already know how to operate power tools and are willing to do some of the hands-on work themselves.",
                    "Some of his houses have been featured in magazines, travel shows, and online carpentry demonstrations. Mr. Ybor’s Web site, featuring photos of his projects, can be found at yborhabitats.co.nz."
                ],
                translation: "Carl Ybor 집중 탐구\n\nGORE, 뉴질랜드 (5월 2일) — 건축가 Carl Ybor는 고객들이 쓰레기를 보물로 바꾸는 것을 도움으로써 자신의 명성을 쌓아왔습니다. 그는 뉴질랜드 고어(Gore) 지역에 거의 전적으로 재활용되거나 회수되거나 발견된 재료들로 구성된 수십 채의 집을 지었습니다.\n\n\"가능한 한, 근처에서 이미 구할 수 있는 재료들을 활용하는 것을 좋아합니다.\"라고 Ybor 씨는 말합니다. \"단지 약간의 창의력이 필요할 뿐이지만, 그렇게 하면 아무것도 낭비되지 않고 집들을 아주 저렴한 비용으로 지을 수 있습니다. 오래된 울타리, 버려진 병, 코르크, 짝이 맞지 않는 벽돌과 타일 등 그 어느 것도 간과되지 않습니다.\"\n\nYbor 씨는 자신이 짓는 집의 설계도를 작성하는 데 전적인 책임이 있지만, 항상 집주인들을 건축 과정에 참여시킵니다. 대기 명단이 최소 1년인 상황에서, Ybor 씨는 고객을 주의 깊게 선정할 수 있습니다. 그는 전동 공구를 작동할 줄 알고 스스로 직접 작업을 일부 수행할 의지가 있는 집주인들과만 일합니다.\n\n그가 지은 집들 중 일부는 잡지, 여행 프로그램, 온라인 목공 시연 등에서 다루어지기도 했습니다. 그의 프로젝트 사진들이 게시된 Ybor 씨의 웹사이트는 yborhabitats.co.nz에서 확인하실 수 있습니다."
            },
            {
                id: "v3-p7-t2-s12-p2",
                contextType: "P1",
                docType: "EMAIL",
                header: {
                    to: "contact@yborhabitats.co.nz",
                    from: "c.holmes@hmail.net",
                    date: "4 May",
                    subject: "Proposal"
                },
                content: [
                    "Dear Mr. Ybor,",
                    "I just read an article about you. I was excited to learn about your services and how you work with the owners to create unique spaces. I have two projects I want to work on:",
                    "1. I want to add an extension to my current house, incorporating leftover materials I have from the patio that I had built a few years ago.",
                    "2. My roof needs to be replaced. I have researched ways to cut the cost, and one suggestion was to leave the existing roof intact and just install new metal sheeting on top. I like this idea!",
                    "Are you available and interested in doing this work? I would like to start as early as next month. I can pay half the money up front by credit card to secure an appointment.",
                    "Sincerely,",
                    "Cynthia Holmes"
                ],
                translation: "수신: contact@yborhabitats.co.nz\n발신: c.holmes@hmail.net\n날짜: 5월 4일\n제목: 제안\n\nYbor 씨께,\n\n방금 당신에 관한 기사를 읽었습니다. 당신의 서비스와 주인들과 협력하여 독특한 공간을 만드는 방식에 대해 알게 되어 매우 기뻤습니다. 제가 추진하고 싶은 프로젝트가 두 가지 있습니다:\n\n1. 몇 년 전에 만들었던 테라스(patio)에서 남은 재료들을 활용하여 현재의 집에 증축을 하고 싶습니다.\n2. 지붕 교체가 필요합니다. 비용을 줄이는 방법을 연구해 보았는데, 기존 지붕을 그대로 두고 그 위에 새로운 금속 시트를 설치하는 제안이 있었습니다. 이 아이디어가 마음에 듭니다!\n\n이 작업을 해주실 수 있는 시간이 되시는지, 관심이 있으신지 궁금합니다. 이르면 다음 달에 시작하고 싶습니다. 예약을 확정하기 위해 신용카드로 비용의 절반을 선불로 결제할 수 있습니다.\n\nCynthia Holmes 드림"
            }
        ],
        questions: [
            {
                id: "v3-p7-t2-q181",
                questionNo: 181,
                text: "What does the article state about the houses Mr. Ybor builds?",
                options: {
                    "A": "They are large.",
                    "B": "They are expensive.",
                    "C": "They are located throughout New Zealand.",
                    "D": "They are built with used materials."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "지문1 첫 번째 단락에서 그가 지은 집들이 'composed almost entirely of reclaimed, recovered, or found materials'(거의 전적으로 재활용되거나 회수되거나 발견된 재료들로 구성됨)라고 했으므로 중고 재료로 지어짐(D)을 알 수 있습니다.",
                translation: "기사는 Ybor 씨가 짓는 집들에 대해 무엇을 언급하는가?\n(A) 그것들은 크다.\n(B) 그것들은 비싸다.\n(C) 그것들은 뉴질랜드 전역에 위치해 있다.\n(D) 그것들은 중고 재료로 지어진다."
            },
            {
                id: "v3-p7-t2-q182",
                questionNo: 182,
                text: "What does Mr. Ybor ask his clients to do?",
                options: {
                    "A": "Replace old fencing",
                    "B": "Create decorative tiles",
                    "C": "Submit design plans",
                    "D": "Use power tools"
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "지문1 세 번째 단락에서 그는 'how to operate power tools'(전동 공구를 작동하는 법)를 아는 집주인들과만 일한다고 했으므로 (D)가 정답입니다.",
                translation: "Ybor 씨는 고객들에게 무엇을 하라고 요구하는가?\n(A) 오래된 울타리 교체하기\n(B) 장식용 타일 만들기\n(C) 설계 계획서 제출하기\n(D) 전동 공구 사용하기"
            },
            {
                id: "v3-p7-t2-q183",
                questionNo: 183,
                text: "According to the article, what can readers do on Mr. Ybor's Web site?",
                options: {
                    "A": "Request a quote for his services",
                    "B": "View examples of his work",
                    "C": "Download some written instructions",
                    "D": "Read reviews from satisfied clients"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "지문1 마지막 문장에서 웹사이트가 'featuring photos of his projects'(그의 프로젝트 사진들을 특징으로 함)라고 했으므로 작업 사례를 볼 수 있는 (B)가 정답입니다.",
                translation: "기사에 따르면, 독자들은 Ybor 씨의 웹사이트에서 무엇을 할 수 있는가?\n(A) 그의 서비스에 대한 견적 요청하기\n(B) 그의 작업 사례 보기\n(C) 서면 지침서 다운로드하기\n(D) 만족한 고객들의 리뷰 읽기"
            },
            {
                id: "v3-p7-t2-q184",
                questionNo: 184,
                text: "What does Ms. Holmes want to do?",
                options: {
                    "A": "Remove her old roof",
                    "B": "Replace the tiles in her patio",
                    "C": "Increase the size of her house",
                    "D": "Build a new house"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "이메일의 프로젝트 1번에서 'add an extension to my current house'(현재의 집을 증축함)를 원한다고 했으므로 집의 크기를 늘리는 (C)가 정답입니다.",
                translation: "Ms. Holmes는 무엇을 하고 싶어 하는가?\n(A) 오래된 지붕 제거하기\n(B) 테라스의 타일 교체하기\n(C) 집의 크기 늘리기\n(D) 새 집 짓기"
            },
            {
                id: "v3-p7-t2-q185",
                questionNo: 185,
                text: "What part of Ms. Holmes's proposal will Mr. Ybor most likely refuse?",
                options: {
                    "A": "The starting date",
                    "B": "The suggested price",
                    "C": "The method of payment",
                    "D": "The choice of materials"
                },
                correctAnswer: "A",
                classification: "P7_LINK",
                explanation: "홈즈 씨는 다음 달(next month)에 시작하고 싶어 하지만, 기사(지문1)에서 Ybor 씨는 'waiting list of at least a year'(최소 1년의 대기 명단)가 있다고 했으므로 시작 날짜(A)는 거절될 가능성이 높습니다.",
                translation: "Ms. Holmes의 제안 중 Ybor 씨가 거절할 가능성이 가장 높은 부분은?\n(A) 시작 날짜\n(B) 제안된 가격\n(C) 결제 방법\n(D) 재료의 선택"
            }
        ]
    },
    // Questions 186-190: E-mails and agenda (Triple)
    {
        id: "v3-p7-t2-multi-set13",
        vol: 3,
        questionRange: "186-190",
        setType: "Triple",
        passages: [
            {
                id: "v3-p7-t2-s13-p1",
                contextType: "P1",
                docType: "EMAIL",
                header: {
                    to: "All CFA Staff",
                    from: "Yung-Chien Chou",
                    date: "16 October",
                    subject: "Plans",
                    attachment: "Agenda"
                },
                content: [
                    "Dear Colleagues,",
                    "Hagit Caspi will be visiting for a couple of days next week to interview for the position of executive vice president here at Cliff Feiring Associates (CFA). She is highly qualified, and her background in international finance makes her particularly well suited for this role. Please make every effort to welcome her.",
                    "It is important to the CFA leadership that everyone has the opportunity to get to know Ms. Caspi. As such, I am asking all of you to attend certain events with her. Please see the attached agenda, and add the events marked CFA to your calendar. More details will follow.",
                    "Best,",
                    "Yung-Chien Chou\nCEO, Cliff Feiring Associates"
                ],
                translation: "수신: 전 CFA 직원\n발신: Yung-Chien Chou\n날짜: 10월 16일\n제목: 계획\n첨부: [의제]\n\n동료 여러분께,\n\nHagit Caspi 씨가 Cliff Feiring Associates (CFA)의 부사장 직책 면접을 위해 다음 주 이틀간 방문할 예정입니다. 그녀는 매우 자격이 뛰어나며, 국제 금융 부문의 배경이 그녀를 이 역할에 특히 적합하게 만듭니다. 그녀를 환영하기 위해 최선을 다해 주시기 바랍니다.\n\n모든 직원이 Caspi 씨를 알 기회를 갖는 것이 CFA 경영진에게는 중요합니다. 따라서 여러분 모두가 그녀와 함께하는 특정 행사에 참석해 주시기를 요청합니다. 첨부된 일정을 확인하시고, CFA라고 표시된 행사를 여러분의 일정표에 추가해 주십시오. 자세한 내용은 추후 알려드리겠습니다.\n\nCEO Yung-Chien Chou 드림"
            },
            {
                id: "v3-p7-t2-s13-p2",
                contextType: "P6",
                docType: "TABLE",
                header: {
                    title: "Agenda for Hagit Caspi’s Visit"
                },
                content: [],
                table_data: {
                    headers: ["Date", "Time", "Event", "Invitees"],
                    rows: [
                        ["23 October", "9:00 A.M.", "Breakfast at La Brunch", "Board members"],
                        ["23 October", "12:30 P.M.", "Lunch in office", "Department heads"],
                        ["23 October", "3:00 P.M.", "Question-and-answer session", "CFA"],
                        ["23 October", "7:00 P.M.", "Dinner at Medium Hills Bistro", "Board members"],
                        ["24 October", "9:00 A.M.", "Breakfast in office", "CFA"]
                    ]
                },
                translation: "Hagit Caspi의 방문 일정\n\n날짜 | 시간 | 행사 | 참석 대상\n10월 23일 | 오전 9:00 | La Brunch에서의 조찬 | 이사회 멤버\n10월 23일 | 오후 12:30 | 사무실에서의 오찬 | 부서장\n10월 23일 | 오후 3:00 | 질의응답 세션 | CFA (전 직원)\n10월 23일 | 오후 7:00 | Medium Hills Bistro에서의 석식 | 이사회 멤버\n10월 24일 | 오전 9:00 | 사무실에서의 조찬 | CFA (전 직원)"
            },
            {
                id: "v3-p7-t2-s13-p3",
                contextType: "P1",
                docType: "EMAIL",
                header: {
                    to: "Yung-Chien Chou <chou@clifffeiring.ca>",
                    from: "Hagit Caspi <hagit.caspi@volumel.co.il>",
                    date: "27 October",
                    subject: "Follow-up"
                },
                content: [
                    "Dear Mr. Chou,",
                    "Many thanks for hosting me last week. I truly enjoyed meeting everyone. I particularly appreciated my conversation with Mr. Georgopoulos at Medium Hills Bistro. He told me some amazing stories about CFA’s history.",
                    "Again, I am sorry for not attending the event on the 24th. The weather was worrying, and I did not want to miss my flight to Tel Aviv.",
                    "Last but certainly not least, thank you for your offer, which I received this morning. I would be honoured to take on the role of executive vice president of CFA starting in January. The job description covers everything we discussed. The hours you noted for the position seem appropriate, and I am very pleased with the benefits. I look forward to working closely with you.",
                    "Most sincerely,",
                    "Hagit Caspi"
                ],
                translation: "수신: Yung-Chien Chou <chou@clifffeiring.ca>\n발신: Hagit Caspi <hagit.caspi@volumel.co.il>\n날짜: 10월 27일\n제목: 후속 연락\n\nChou 씨께,\n\n지난주 저를 환대해 주셔서 대단히 감사합니다. 모든 분들을 만나 뵈어 정말 즐거웠습니다. 특히 Medium Hills Bistro에서 Mr. Georgopoulos와 나눈 대화가 아주 좋았습니다. 그는 CFA의 역사에 관한 놀라운 이야기들을 들려주었습니다.\n\n다시 한번, 24일 행사에 참석하지 못한 점 사과드립니다. 날씨가 걱정스러웠고, 텔아비브로 가는 비행편을 놓치고 싶지 않았습니다.\n\n마지막으로 중요한 점인데, 오늘 아침에 받은 제안에 감사드립니다. 1월부터 시작되는 CFA 부사장직을 맡게 되어 영광입니다. 직무 기술서는 우리가 논의한 모든 내용을 담고 있습니다. 직책에 대해 언급하신 업무 시간도 적절해 보이며, 복리후생도 매우 만족스럽습니다. 당신과 긴밀히 협력하기를 기대합니다.\n\nHagit Caspi 올림"
            }
        ],
        questions: [
            {
                id: "v3-p7-t2-q186",
                questionNo: 186,
                text: "What is a purpose of the first e-mail?",
                options: {
                    "A": "To notify staff of an upcoming visit",
                    "B": "To advertise a job opening",
                    "C": "To recommend an employee for promotion",
                    "D": "To introduce a new colleague"
                },
                correctAnswer: "A",
                classification: "P7_PURPOSE",
                explanation: "지문1 서두에서 'Hagit Caspi will be visiting for a couple of days next week'(Hagit Caspi 씨가 다음 주 이틀간 방문할 예정임)라고 밝히고 있으므로 다가올 방문을 직원들에게 알리는 (A)가 정답입니다.",
                translation: "첫 번째 이메일의 목적은 무엇인가?\n(A) 다가오는 방문을 직원들에게 알리기 위해\n(B) 구인 광고를 하기 위해\n(C) 직원을 승진 대상자로 추천하기 위해\n(D) 새로운 동료를 소개하기 위해"
            },
            {
                id: "v3-p7-t2-q187",
                questionNo: 187,
                text: "What meal were all employees asked to add to their calendars?",
                options: {
                    "A": "Breakfast on October 23",
                    "B": "Lunch on October 23",
                    "C": "Dinner on October 23",
                    "D": "Breakfast on October 24"
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                explanation: "지문1에서 'add the events marked CFA to your calendar'(CFA라고 표기된 행사를 일정표에 추가하라)고 했습니다. 지문2 일정표에서 'CFA'라고 표기된 식사(meal) 행사는 10월 24일 오전 9시의 'Breakfast in office'이므로 (D)가 정답입니다.",
                translation: "모든 직원이 자신의 일정표에 추가하라고 요청받은 식사는?\n(A) 10월 23일 조찬\n(B) 10월 23일 오찬\n(C) 10월 23일 석식\n(D) 10월 24일 조찬"
            },
            {
                id: "v3-p7-t2-q188",
                questionNo: 188,
                text: "What is one reason Ms. Caspi writes to Mr. Chou?",
                options: {
                    "A": "To apologize for a delay",
                    "B": "To accept an offer",
                    "C": "To discuss air travel plans",
                    "D": "To ask for details about a job"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "지문3에서 'I would be honoured to take on the role of executive vice president'(부사장 직을 맡게 되어 영광임)라고 하며 받은 제안을 수락하고 있으므로 (B)가 정답입니다.",
                translation: "Ms. Caspi가 Mr. Chou에게 글을 쓰는 이유 중 하나는?\n(A) 지연에 대해 사과하기 위해\n(B) 제안을 수락하기 위해\n(C) 항공 여행 계획을 논의하기 위해\n(D) 직무에 대한 세부 사항을 묻기 위해"
            },
            {
                id: "v3-p7-t2-q189",
                questionNo: 189,
                text: "Who most likely is Mr. Georgopoulos?",
                options: {
                    "A": "A Medium Hills Bistro employee",
                    "B": "A board member",
                    "C": "A department head",
                    "D": "A worker in the human resources department"
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                explanation: "지문3에서 Caspi 씨는 'Medium Hills Bistro'에서 Georgopoulos 씨와 대화를 나누었다고 했습니다. 지문2 일정표를 보면 해당 장소에서의 저녁 식사에 초대된(Invitees) 대상은 'Board members'이므로 (B)가 정답입니다.",
                translation: "Mr. Georgopoulos는 누구일 가능성이 높은가?\n(A) Medium Hills Bistro 직원\n(B) 이사회 멤버\n(C) 부서장\n(D) 인사과 직원"
            },
            {
                id: "v3-p7-t2-q190",
                questionNo: 190,
                text: "What does the second e-mail indicate about the job?",
                options: {
                    "A": "It will begin in January.",
                    "B": "It will be based in Tel Aviv.",
                    "C": "It involves working overtime.",
                    "D": "It still needs a job description."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "지문3에서 'starting in January'(1월에 시작함)라고 명시되어 있으므로 (A)가 정답입니다.",
                translation: "두 번째 이메일은 그 직책에 대해 무엇을 나타내는가?\n(A) 그것은 1월에 시작될 것이다.\n(B) 그것의 본거지는 텔아비브가 될 것이다.\n(C) 그것은 초과 근무를 포함한다.\n(D) 그것은 여전히 직무 기술서가 필요하다."
            }
        ]
    },
    // Questions 191-195: Article, chart, and e-mail (Triple)
    {
        id: "v3-p7-t2-multi-set14",
        vol: 3,
        questionRange: "191-195",
        setType: "Triple",
        passages: [
            {
                id: "v3-p7-t2-s14-p1",
                contextType: "P3",
                docType: "ARTICLE",
                header: {
                    title: "Alacritum Expands Charging Network",
                    date: "TRIVESS (1 February)",
                    headline: "New High-Power Charging Stations for Highway 1"
                },
                content: [
                    "Alacritum, Inc., has announced plans to build charging stations for electric vehicles along Highway 1. With over 400 stations across Asia already, Alacritum brings a wealth of experience to this large-scale undertaking.",
                    "The Highway 1 stations, known as PRO stations, will provide vehicles with up to 200 kilowatts of power, achieving an 80 percent charge in 30 minutes. The system will periodically notify waiting drivers of the status of their battery charge by sending texts to their cell phones or other mobile devices.",
                    "The company promises to provide motorists with clean, comfortable, brightly lit waiting facilities. A testing location will open at the beginning of next month in Logred."
                ],
                translation: "TRIVESS (2월 1일) — Alacritum, Inc.는 Highway 1을 따라 전기차 충전소를 건설할 계획을 발표했습니다. 이미 아시아 전역에 400개 이상의 스테이션을 보유한 Alacritum은 이 대규모 사업에 풍부한 경험을 제공합니다. PRO 스테이션으로 알려진 Highway 1 스테이션은 차량에 최대 200킬로와트의 전력을 제공하여 30분 만에 80% 충전을 달성할 수 있습니다. 시스템은 대기 중인 운전자의 휴대폰이나 기타 모바일 장치로 문자를 보내 배터리 충전 상태를 주기적으로 알려줄 것입니다. 회사는 운전자들에게 깨끗하고 편안하며 밝은 조명의 대기 시설을 제공할 것을 약속합니다. 다음 달 초에 Logred에서 테스트 지점이 문을 열 예정입니다."
            },
            {
                id: "v3-p7-t2-s14-p2",
                contextType: "P8",
                docType: "TABLE",
                header: {
                    title: "PRO Stations: Proposed Distribution"
                },
                content: [],
                table_data: {
                    headers: ["Region", "Number of Stations", "Customers per Day"],
                    rows: [
                        ["Elondell", "26", "9,220"],
                        ["Southern Borelvia", "14", "4,970"],
                        ["Western Borelvia", "20", "6,390"],
                        ["North Shore", "10", "3,560"]
                    ]
                },
                translation: "PRO 스테이션: 제안된 분포\n\n지역 | 스테이션 수 | 하루 고객 수\nElondell | 26 | 9,220\nSouthern Borelvia | 14 | 4,970\nWestern Borelvia | 20 | 6,390\nNorth Shore | 10 | 3,560"
            },
            {
                id: "v3-p7-t2-s14-p3",
                contextType: "P1",
                docType: "EMAIL",
                header: {
                    to: "lhsiao@alacritum.com",
                    from: "ctrigg@alacritum.com",
                    date: "15 March",
                    subject: "Meeting"
                },
                content: [
                    "Dear Mr. Hsiao,",
                    "Following the meeting with our community partners in Western Borelvia this week, I suggest adding air-conditioning to the waiting areas in that region because of the desert conditions there. Although the addition entails higher costs, it will ensure the comfort and safety of the customers.",
                    "I have also learned firsthand that poor cell service along Highway 1 will make the wireless networks at most PRO stations unreliable, so we will need a technological solution for that as well. I will send a full report by the end of the week.",
                    "Chuck Trigg"
                ],
                translation: "수신: lhsiao@alacritum.com\n발신: ctrigg@alacritum.com\n날짜: 3월 15일\n제목: 회의\n\nHsiao 씨께,\n\n이번 주 Western Borelvia의 커뮤니티 파트너들과 회의를 마친 후, 저는 그 지역의 사막 기후 조건 때문에 해당 지역 대기실에 에어컨을 추가할 것을 제안합니다. 추가 비용이 발생하더라도, 이는 고객의 편안함과 안전을 보장할 것입니다. 또한 Highway 1을 따라 세포 서비스(cell service)가 원활하지 않아 대부분의 PRO 스테이션의 무선 네트워크가 신뢰할 수 없게 될 것임을 직접 알게 되었습니다. 따라서 이에 대해서도 기술적 해결책이 필요할 것입니다. 이번 주 말까지 전체 보고서를 보내드리겠습니다.\n\nChuck Trigg 드림"
            }
        ],
        questions: [
            {
                id: "v3-p7-t2-q191",
                questionNo: 191,
                text: "What does the article indicate about Alacritum, Inc.?",
                options: {
                    "A": "It operates 80 percent of the charging stations in Asia.",
                    "B": "It is moving its head office to Logred in February.",
                    "C": "It built 400 PRO stations along Highway 1.",
                    "D": "It will test a station site in March."
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                explanation: "2월 1일 작성된 기사(지문1)에서 'A testing location will open at the beginning of next month in Logred'(다음 달 초에 Logred에서 테스트 지점이 문을 열 것임)라고 했으므로 3월에 테스트를 하게 될 것(D)임을 알 수 있습니다.",
                translation: "기사는 Alacritum, Inc.에 대해 무엇을 나타내는가?\n(A) 그것은 아시아 충전소의 80%를 운영한다.\n(B) 그것은 2월에 본사를 Logred로 이전한다.\n(C) 그것은 Highway 1을 따라 400개의 PRO 스테이션을 건설했다.\n(D) 그것은 3월에 스테이션 지점을 테스트할 것이다."
            },
            {
                id: "v3-p7-t2-q192",
                questionNo: 192,
                text: "According to the chart, what region is expected to have the most customers?",
                options: {
                    "A": "Elondell",
                    "B": "Southern Borelvia",
                    "C": "Western Borelvia",
                    "D": "North Shore"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "지문2 도표에서 'Customers per Day'가 가장 높은 지역은 Elondell(9,220명)이므로 (A)가 정답입니다.",
                translation: "도표에 따르면, 어떤 지역이 가장 많은 고객을 보유할 것으로 예상되는가?\n(A) Elondell\n(B) Southern Borelvia\n(C) Western Borelvia\n(D) North Shore"
            },
            {
                id: "v3-p7-t2-q193",
                questionNo: 193,
                text: "What is the main purpose of the e-mail?",
                options: {
                    "A": "To negotiate costs",
                    "B": "To provide advice",
                    "C": "To explain why a delivery was late",
                    "D": "To suggest a new partnership"
                },
                correctAnswer: "B",
                classification: "P7_PURPOSE",
                explanation: "이메일(지문3)에서 Chuck Trigg 씨는 에어컨 추가와 기술적 해결책의 필요성에 대해 조언(advice)하고 있으므로 (B)가 정답입니다.",
                translation: "이메일의 주요 목적은 무엇인가?\n(A) 비용을 협상하기 위해\n(B) 조언을 제공하기 위해\n(C) 배송이 늦어진 이유를 설명하기 위해\n(D) 새로운 파트너십을 제안하기 위해"
            },
            {
                id: "v3-p7-t2-q194",
                questionNo: 194,
                text: "What system at PRO stations will require a technological solution?",
                options: {
                    "A": "The cleaning system",
                    "B": "The food vending system",
                    "C": "The lighting system",
                    "D": "The text notification system"
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                explanation: "지문3에서 'poor cell service'(열악한 휴대폰 서비스) 때문에 무선 네트워크가 신뢰할 수 없게 되어 기술적 해결책이 필요하다고 했습니다. 지문1에서 이 네트워크는 문자로 충전 상태를 알려주는 'text notification system'에 사용되므로 (D)가 정답입니다.",
                translation: "PRO 스테이션의 어떤 시스템이 기술적 해결책을 필요로 할 것인가?\n(A) 세척 시스템\n(B) 식품 자동 판매 시스템\n(C) 조명 시스템\n(D) 문자 알림 시스템"
            },
            {
                id: "v3-p7-t2-q195",
                questionNo: 195,
                text: "How many stations will need air-conditioned waiting areas?",
                options: {
                    "A": "10",
                    "B": "14",
                    "C": "20",
                    "D": "26"
                },
                correctAnswer: "C",
                classification: "P7_LINK",
                explanation: "지문3에서 Western Borelvia 지역의 스테이션들에 에어컨이 필요하다고 제안했습니다. 지문2 도표에서 Western Borelvia 지역의 스테이션 수는 20개이므로 (C)가 정답입니다.",
                translation: "얼마나 많은 스테이션이 에어컨이 설치된 대기실을 필요로 할 것인가?\n(A) 10\n(B) 14\n(C) 20\n(D) 26"
            }
        ]
    },
    // Questions 196-200: E-mails and press release (Triple)
    {
        id: "v3-p7-t2-multi-set15",
        vol: 3,
        questionRange: "196-200",
        setType: "Triple",
        passages: [
            {
                id: "v3-p7-t2-s15-p1",
                contextType: "P1",
                docType: "EMAIL",
                header: {
                    from: "Cathy Beker <cbeker@yourworkstyle.net>",
                    to: "Levon Roytenberg <lroytenberg@charlottes.com>; Aubree Jordan <ajordan@charlottes.com>",
                    date: "27 January, 10:02 A.M.",
                    subject: "First draft of press release",
                    attachment: "Press release draft"
                },
                content: [
                    "Dear Mr. Roytenberg and Ms. Jordan,",
                    "My first draft of the press release is attached. As we previously discussed by phone, my contract includes one additional half-hour meeting to discuss the project and any changes you would like me to make before I submit the press release to my contacts at Pinetown Weekly.",
                    "Please let me know if I can stop by this week. I would like to take photos of the space. I remember your mentioning that the historic architecture of the building would be a draw for customers.",
                    "In addition, I will need to get a direct quotation from either of you or from Chef Vaux. I know from working with Pinetown Weekly in the past that they will not run a piece like this without at least one quotation.",
                    "Best regards,",
                    "Cathy Beker"
                ],
                translation: "발신: Cathy Beker <cbeker@yourworkstyle.net>\n수신: Levon Roytenberg <lroytenberg@charlottes.com>; Aubree Jordan <ajordan@charlottes.com>\n날짜: 1월 27일 오전 10:02\n제목: 보도 자료 초안\n첨부: [보도 자료 초안]\n\nRoytenberg 씨와 Jordan 씨께,\n\n첨부된 보도 자료 초안을 보내드립니다. 이전에 전화로 논의한 바와 같이, 제 계약에는 제가 Pinetown Weekly의 담당자들에게 보도 자료를 제출하기 전에 프로젝트와 원하시는 수정 사항에 대해 논의하기 위한 추가적인 30분 미팅이 한 번 포함되어 있습니다.\n\n이번 주에 제가 방문해도 될지 알려주십시오. 공간의 사진을 찍고 싶습니다. 건물의 역사적인 건축 양식이 고객들에게 매력 요소가 될 것이라고 말씀하신 것을 기억합니다.\n\n추가로, 두 분 중 한 분이나 셰프 Vaux 씨로부터 직접적인 인용구(quotation)를 받아야 합니다. 과거에 Pinetown Weekly와 일해본 경험상, 인용구가 최소 하나는 있어야 이런 기사를 실어주기 때문입니다.\n\n감사합니다,\n\nCathy Beker 드림"
            },
            {
                id: "v3-p7-t2-s15-p2",
                contextType: "P5",
                docType: "PRESS_RELEASE",
                header: {
                    title: "Charlotte’s Opens for Business"
                },
                content: [
                    "– DRAFT –",
                    "Charlotte’s, located at Avenue D and Oak Street, will open its doors on Friday, February 5. Owners Levon Roytenberg and Aubree Jordan are excited to welcome patrons for an aromatic cup of coffee or steaming espresso, specialty pastries, and savory café fare. Their aim is for Charlotte’s to be a gathering place that indulges all the senses, where guests will be met with comfort and hospitality.",
                    "Award-winning executive chef Michel Vaux, most recently of Kahn’s in Bloomington, has created an enticing menu featuring fresh-baked breads and grass-fed meats, with locally sourced vegetable dishes as accompaniments. Offerings will include breakfast and lunch selections. Chef Vaux will also bring to Charlotte’s his elegant hot and cold beverages utilizing teas and herbal infusions."
                ],
                translation: "– 초안 –\n\nCharlotte’s 영업 개시\n\nAvenue D와 Oak Street에 위치한 Charlotte’s가 2월 5일 금요일에 문을 엽니다. 소유주인 Levon Roytenberg와 Aubree Jordan은 향긋한 커피 한 잔이나 김이 모락모락 나는 에스프레소, 특제 페이스트리, 그리고 맛있는 카페 음식을 즐기러 올 고객들을 환영하게 되어 기쁩니다. 그들의 목표는 Charlotte’s가 손님들이 편안함과 환대를 느끼며 오감을 만족시킬 수 있는 만남의 장소가 되는 것입니다.\n\n최근 Bloomington의 Kahn’s에서 근무했던 수상 경력이 있는 총주방장 Michel Vaux는 갓 구운 빵과 목초를 먹인 육류, 그리고 현지에서 조달한 채소 요리를 곁들인 매혹적인 메뉴를 만들었습니다. 아침과 점심 메뉴가 포함될 예정입니다. Vaux 셰프는 또한 차와 허브 추출물을 활용한 우아한 냉온 음료를 Charlotte’s에서 선보일 것입니다."
            },
            {
                id: "v3-p7-t2-s15-p3",
                contextType: "P1",
                docType: "EMAIL",
                header: {
                    from: "Levon Roytenberg <lroytenberg@charlottes.com>",
                    to: "Cathy Beker <cbeker@yourworkstyle.net>",
                    date: "28 January, 4:15 P.M.",
                    subject: "RE: First draft of press release"
                },
                content: [
                    "Hi Cathy,",
                    "Thanks for the draft. Ms. Jordan and I agree that the draft looks good, though we have a few small comments that can be addressed at the meeting. We are available this Friday at 11:30 A.M. or 3:00 P.M. Please let us know if either of those times works for you.",
                    "I prefer to have you interview Chef Vaux for the quote. He is available during most weekday afternoons. Since Kahn’s was so popular, his role in our café is definitely something to highlight.",
                    "See you soon.",
                    "Levon"
                ],
                translation: "발신: Levon Roytenberg <lroytenberg@charlottes.com>\n수신: Cathy Beker <cbeker@yourworkstyle.net>\n날짜: 1월 28일 오후 4:15\n제목: RE: 보도 자료 초안\n\n안녕하세요 Cathy 씨,\n\n초안 감사합니다. 저와 Jordan 씨 모두 초안이 마음에 들지만, 미팅에서 논의할 수 있는 몇 가지 작은 의견이 있습니다. 저희는 이번 주 금요일 오전 11:30이나 오후 3:00에 시간이 됩니다. 두 시간 중 편한 시간이 있는지 알려주세요.\n\n인용구를 위해 Vaux 셰프를 인터뷰하시는 것을 선호합니다. 그는 대부분의 평일 오후에 시간이 가능합니다. Kahn’s가 매우 인기 있었기 때문에, 우리 카페에서 그의 역할은 확실히 강조할 만한 부분입니다.\n\n곧 뵙겠습니다.\n\nLevon 드림"
            }
        ],
        questions: [
            {
                id: "v3-p7-t2-q196",
                questionNo: 196,
                text: "Why does Ms. Beker want to visit the business?",
                options: {
                    "A": "To interview prospective employees",
                    "B": "To take some photographs",
                    "C": "To deliver a contract",
                    "D": "To try some café food"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "지문1에서 'I would like to take photos of the space'(공간 사진을 찍고 싶습니다)라고 방문 목적을 명시하고 있으므로 (B)가 정답입니다.",
                translation: "Ms. Beker는 왜 그 사업장에 방문하고 싶어 하는가?\n(A) 잠재적 직원들을 면접하기 위해\n(B) 사진을 찍기 위해\n(C) 계약서를 전달하기 위해\n(D) 카페 음식을 먹어보기 위해"
            },
            {
                id: "v3-p7-t2-q197",
                questionNo: 197,
                text: "What is mentioned about the building that houses Charlotte’s?",
                options: {
                    "A": "It is a historic structure.",
                    "B": "It was designed by Chef Vaux.",
                    "C": "It is located in Bloomington.",
                    "D": "It has many large windows."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "지문1에서 'the historic architecture of the building'(건물의 역사적인 건축 양식)이라고 언급했으므로 (A)가 정답입니다.",
                translation: "Charlotte’s가 들어선 건물에 대해 무엇이 언급되었는가?\n(A) 그것은 역사적인 구조물이다.\n(B) 그것은 Vaux 셰프에 의해 설계되었다.\n(C) 그것은 Bloomington에 위치해 있다.\n(D) 그것은 크고 많은 창문을 가지고 있다."
            },
            {
                id: "v3-p7-t2-q198",
                questionNo: 198,
                text: "What part of the café’s offerings does the press release NOT mention?",
                options: {
                    "A": "Specialty pastries",
                    "B": "Grass-fed meats",
                    "C": "Vegetable dishes",
                    "D": "Supper selections"
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "지문2 보도 자료에 페이스트리(A), 목초를 먹인 육류(B), 채소 요리(C)는 모두 언급되었으나, 저녁 식사 메뉴(Supper)는 언급되지 않았습니다. 대신 아침(breakfast)과 점심(lunch) 메뉴가 언급되었습니다.",
                translation: "카페가 제공하는 것 중 보도 자료에 언급되지 않은 것은?\n(A) 특제 페이스트리\n(B) 목초를 먹인 육류\n(C) 채소 요리\n(D) 저녁 식사 메뉴"
            },
            {
                id: "v3-p7-t2-q199",
                questionNo: 199,
                text: "When will Ms. Beker most likely meet with Mr. Roytenberg?",
                options: {
                    "A": "On January 27",
                    "B": "On January 28",
                    "C": "On February 5",
                    "D": "On February 12"
                },
                correctAnswer: "C",
                classification: "P7_LINK",
                explanation: "지문3 이메일에서 '이번 주 금요일(this Friday)'에 미팅이 가능하다고 했습니다. 보도 자료(지문2)에서 2월 5일이 금요일(Friday, February 5)이므로 (C)가 정답입니다.",
                translation: "Ms. Beker는 언제 Mr. Roytenberg를 만날 가능성이 가장 높은가?\n(A) 1월 27일에\n(B) 1월 28일에\n(C) 2월 5일에\n(D) 2월 12일에"
            },
            {
                id: "v3-p7-t2-q200",
                questionNo: 200,
                text: "How will the press release most likely be changed?",
                options: {
                    "A": "The opening date will be added.",
                    "B": "The address will be updated.",
                    "C": "A quotation will be included.",
                    "D": "A job description will be removed."
                },
                correctAnswer: "C",
                classification: "P7_LINK",
                explanation: "지문1에서 Beker 씨가 인용구(quotation)가 반드시 필요하다고 했고, 지문3에서 Roytenberg 씨가 셰프 Vaux를 인터뷰하여 인용구를 얻으라고 했으므로 보도 자료에는 인용구가 포함될 것(C)입니다.",
                translation: "보도 자료는 어떻게 변경될 가능성이 가장 높은가?\n(A) 개업 날짜가 추가될 것이다.\n(B) 주소가 업데이트될 것이다.\n(C) 인용구가 포함될 것이다.\n(D) 직무 기술서가 제거될 것이다."
            }
        ]
    }
];
