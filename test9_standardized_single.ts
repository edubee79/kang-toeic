import { Part7Test } from './types';

export const test9Data: Part7Test = {
    testId: 9,
    title: "Test 9",
    sets: [
        // Questions 147-148: Menu
        {
            id: "p7-t9-set1",
            setType: "Single",
            questionRange: "147-148",
            passages: [
                {
                    id: "p7-t9-s1-p1",
                    contextType: "P4_MARK",
                    docType: "LIST",
                    content: `Carina's Café Lunch Specials\nMonday through Friday from 11:00 A.M. to 3:00 P.M.\n\nFor only $8, combine the soup of the day with one of the following items:\n\nTurkey Sandwich – Turkey, avocado, tomato, lettuce, and mayonnaise on wheat bread\n\nVegetable Panini – Sourdough bread filled with tomato, cucumber, spinach, and mayonnaise, then grilled\n\nMushroom Chicken Cavatappi – Chicken in a mushroom, celery, and onion sauce, served over S-shaped pasta\n\nVegetable Wrap – Fresh tomato, cucumber, and carrots with hummus (made with our secret recipe) on flatbread`,
                    translation: `카리나스 카페 런치 스페셜\n월요일부터 금요일, 오전 11시부터 오후 3시까지\n\n단돈 8달러에 오늘의 수프를 다음 음식 항목 중 하나와 함께 드세요:\n\n칠면조 샌드위치 - 밀빵 위에 칠면조, 아보카도, 토마토, 양상추, 마요네즈\n\n채소 파니니 - 토마토, 오이, 시금치, 마요네즈로 채운 사워도우 빵을 구운 것\n\n버섯 치킨 카바타피 - 버섯, 셀러리, 양파 소스의 치킨을 S자 모양 파스타에 올린 것\n\n채소 랩 - 신선한 토마토, 오이, 당근과 함께 후무스(우리 가게 비법으로 만든)를 바른 납작한 빵`
                }
            ],
            questions: [
                {
                    id: "p7-t9-q147",
                    questionNo: 147,
                    text: "What does each lunch special include?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "A soup",
                        "B": "Carrots",
                        "C": "Tomatoes",
                        "D": "A beverage"
                    },
                    correctAnswer: "A",
                    translation: "각각의 런치 스페셜 메뉴에 포함된 것은?",
                    explanation: `지문 두 번째 줄에서 '오늘의 수프를 ... 항목 중 하나와 함께 드세요(combine the soup of the day with one of the following items)'라고 명시되어 있습니다.`
                },
                {
                    id: "p7-t9-q148",
                    questionNo: 148,
                    text: "What item contains an ingredient that is only available from Carina's Café?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Turkey sandwich",
                        "B": "Vegetable panini",
                        "C": "Mushroom chicken cavatappi",
                        "D": "Vegetable wrap"
                    },
                    correctAnswer: "D",
                    translation: "카리나스 카페에서만 이용할 수 있는 재료가 들어있는 품목은?",
                    explanation: `마지막 품목인 '채소 랩(Vegetable Wrap)'은 카페만의 비법으로 만든 후무스(hummus (made with our secret recipe))를 사용한다고 설명되어 있습니다.`
                }
            ]
        },
        // Questions 149-150: Advertisement
        {
            id: "p7-t9-set2",
            setType: "Single",
            questionRange: "149-150",
            passages: [
                {
                    id: "p7-t9-s2-p1",
                    contextType: "P4_MARK",
                    docType: "ADVERTISEMENT",
                    content: `Certified Aqua Instructor Workshop\n\nThis workshop helps fitness professionals become certified aqua instructors by demonstrating how to design challenging and effective aquatic classes. Join instructor Deshonte Smith for a full-day course to learn a sequence of pool-based workouts that will motivate your students. Mr. Smith started his journey to instructor certification by taking classes at Valley Floor Fitness. He is also a professor at Wilkinson University.\n\nThe workshop costs $99 and will be held at Valley Floor Fitness in Missoula on August 27 from 9 A.M. to 5 P.M. For more information and to register, e-mail Maya Cramer at certification@valleyfloorfitness.com.`,
                    translation: `공인 아쿠아 강사 워크숍\n\n이 워크숍은 도전적이고 효과적인 수중 수업을 설계하는 방법을 시연함으로써 피트니스 전문가들이 공인 아쿠아 강사가 되도록 도와 드립니다. 데스혼테 스미스 강사와 종일 과정을 함께하여 학생들에게 동기를 부여해 줄 일련의 수영장 기반 운동을 배우십시오. 스미스 씨는 밸리 플로어 피트니스에서 수업을 듣고 강사 자격 취득을 위한 과정을 시작했습니다. 그는 윌킨슨 대학의 교수이기도 합니다.\n\n워크숍 비용은 99달러이며 미줄라의 밸리 플로어 피트니스에서 8월 27일 오전 9시부터 오후 5시까지 열립니다. 자세한 정보 및 등록을 원하시면 마야 크레이머에게 certification@valleyfloorfitness.com으로 이메일을 보내십시오.`
                }
            ],
            questions: [
                {
                    id: "p7-t9-q149",
                    questionNo: 149,
                    text: "The word \"design\" in paragraph 1, line 2, is closest in meaning to",
                    classification: "P7_VOCABULARY",
                    options: {
                        "A": "find",
                        "B": "create",
                        "C": "draw",
                        "D": "name"
                    },
                    correctAnswer: "B",
                    translation: "지문 내 \"design\"과 의미가 가장 가까운 것은?",
                    explanation: `수업을 설계하거나 계획한다는 뜻이므로 '창조하다(create)'가 가장 적절합니다.`
                },
                {
                    id: "p7-t9-q150",
                    questionNo: 150,
                    text: "What is indicated about the workshop?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It will be held at a pool at Wilkinson University.",
                        "B": "It is being offered on two different dates.",
                        "C": "It is available at a discounted rate in August.",
                        "D": "It will be taught by a former student of Valley Floor Fitness."
                    },
                    correctAnswer: "D",
                    translation: "워크숍에 대해 언급된 것은?",
                    explanation: `강사인 스미스 씨가 밸리 플로어 피트니스에서 수업을 들으며(taking classes at Valley Floor Fitness) 커리어를 시작했으므로, 이전에 그곳의 학생이었음을 알 수 있습니다.`
                }
            ]
        },
        // Questions 151-152: Text-message chain
        {
            id: "p7-t9-set3",
            setType: "Single",
            questionRange: "151-152",
            passages: [
                {
                    id: "p7-t9-s3-p1",
                    contextType: "P7_CONV",
                    docType: "CHAT_MESSAGE",
                    content: `Hyun-Jun Cho (3:27 P.M.)\nI'm scheduled to work the front desk on Saturday from 7 A.M. to 3 P.M. A friend of mine is coming to town then, and he's only going to be here for one day. I was wondering if I could switch shifts with you. I can work on Sunday.\n\nStephanie Duchemin (3:29 P.M.)\nSaturday is good for me. I hope you don't have a Sunday like last week. It was so busy. All the doctors attending the medical conference were checking in at the front desk.\n\nHyun-Jun Cho (3:31 P.M.)\nAnd I heard that all the accountants from the other conference were also at the front desk reviewing their room charges at the same time!\n\nStephanie Duchemin (3:32 P.M.)\nThe lobby was certainly bustling.\n\nHyun-Jun Cho (3:34 P.M.)\nThank you for helping me out. I haven't seen my friend Kai since we graduated from university.`,
                    translation: `조현준 (오후 3:27) 제가 토요일 오전 7시부터 오후 3시까지 프런트에서 근무하기로 되어 있어요. 그때 친구 한 명이 동네에 오는데, 딱 하루만 있을 예정이에요. 저와 근무 시간을 바꿔 주실 수 있을지 궁금해요. 저는 일요일에 근무할 수 있어요.\n\n스테파니 뒤슈맹 (오후 3:29) 토요일 괜찮아요. 당신이 지난주 같은 일요일을 겪지 않았으면 좋겠네요. 정말 바빴거든요. 의료 컨퍼런스에 참석한 모든 의사들이 프런트에서 체크인을 하고 있었어요.\n\n조현준 (오후 3:31) 그리고 제가 듣기로는 다른 컨퍼런스에 온 모든 회계사들도 같은 시간에 프런트에서 객실 요금을 확인하고 있었다면서요!\n\n스테파니 뒤슈맹 (오후 3:32) 로비가 정말 북적거렸죠.\n\n조현준 (오후 3:34) 도와줘서 고마워요. 대학 졸업 이후로 친구 카이를 보지 못했거든요.`
                }
            ],
            questions: [
                {
                    id: "p7-t9-q151",
                    questionNo: 151,
                    text: "At 3:29 P.M., what does Ms. Duchemin most likely mean when she writes, \"Saturday is good for me\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "She prefers working morning hours.",
                        "B": "She is able to do a favor for Mr. Cho.",
                        "C": "She will attend a medical conference.",
                        "D": "She wants to meet Jo Hyun-jun's friend."
                    },
                    correctAnswer: "B",
                    translation: "오후 3:29에 뒤슈맹 씨가 \"토요일 괜찮아요\"라고 쓴 의도는?",
                    explanation: `조 씨의 근무 교대 요청(switch shifts with you)에 대해 수락하는 답변이므로 조 씨의 부탁을 들어주겠다는 뜻입니다.`
                },
                {
                    id: "p7-t9-q152",
                    questionNo: 152,
                    text: "Where most likely do Mr. Cho and Ms. Duchemin work?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "At a hotel",
                        "B": "At a university",
                        "C": "At a medical center",
                        "D": "At an accounting firm"
                    },
                    correctAnswer: "A",
                    translation: "조 씨와 뒤슈맹 씨는 어디서 근무할 가능성이 높은가?",
                    explanation: `프런트 데스크(front desk), 체크인(checking in), 객실 요금(room charges) 등의 언급을 통해 호텔임을 알 수 있습니다.`
                }
            ]
        },
        // Questions 153-154: E-mail
        {
            id: "p7-t9-set4",
            setType: "Single",
            questionRange: "153-154",
            passages: [
                {
                    id: "p7-t9-s4-p1",
                    contextType: "P1_CORR",
                    docType: "EMAIL",
                    content: `To: Madalena Navas <mnavas@cordovacreations.com>\nFrom: Hugo Jones <hkjones@sunmail.com>\nDate: April 2\nSubject: Thank you\n\nDear Ms. Navas,\n\nI enjoyed speaking with you about the associate manager position last week, and as I mentioned, I am very excited about the possibility of working with you at Cordova Creations. I wanted to let you know that I have received a job offer from another company, and I have to respond to that hiring manager soon. I realize it has only been a few days since my interview, but if it is at all possible for you to update me on the status of my application before the end of the week, that would be very helpful. I have long admired Cordova Creations and would really like to be a part of it. I am hoping to hear positive news from you.\n\nThank you,\n\nHugo Jones`,
                    translation: `수신: 마달레나 나바스 <mnavas@cordovacreations.com>\n발신: 휴고 존스 <hkjones@sunmail.com>\n날짜: 4월 2일\n제목: 감사합니다\n\n나바스 씨께,\n\n지난주에 부매니저 자리에 대해 이야기하게 되어 즐거웠고, 말씀드린 대로 코르도바 크리에이션스에서 귀하와 함께 일할 수 있다는 가능성에 무척 흥분됩니다. 제가 다른 회사로부터 일자리 제안을 받았다는 점을 알려드리고자 하며, 그 채용 담당자에게 곧 답변을 해야 합니다. 면접을 본 지 불과 며칠밖에 지나지 않았다는 것을 알고 있지만 이번 주가 끝나기 전에 저의 지원 상황에 대해 조금이라도 알려주실 수 있다면 무척 도움이 될 것입니다. 저는 코르도바 크리에이션스를 오랫동안 동경해 왔고, 진심으로 일원이 되고 싶습니다. 귀하로부터 긍정적인 소식을 듣기를 바랍니다.\n\n감사합니다.\n\n휴고 존스`
                }
            ],
            questions: [
                {
                    id: "p7-t9-q153",
                    questionNo: 153,
                    text: "What does Mr. Jones indicate in his e-mail?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "He used to work with Ms. Navas.",
                        "B": "He is an associate manager.",
                        "C": "Another company wishes to hire him.",
                        "D": "His interview has been scheduled for next week."
                    },
                    correctAnswer: "C",
                    translation: "존스 씨가 이메일에서 밝힌 사항은?",
                    explanation: `다른 회사로부터 일자리 제안을 받았다(received a job offer from another company)고 명시했습니다.`
                },
                {
                    id: "p7-t9-q154",
                    questionNo: 154,
                    text: "What does Mr. Jones want to know by the end of the week?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Whether an important decision has been made yet",
                        "B": "Whether Ms. Navas is available for a meeting",
                        "C": "Whether Ms. Navas would like to apply for a new position",
                        "D": "Whether the company will expand its product offerings"
                    },
                    correctAnswer: "A",
                    translation: "존스 씨가 주말까지 알고 싶어 하는 것은?",
                    explanation: `이번 주가 가기 전에 자신의 지원 상태(status of my application)를 업데이트해달라고 요청하고 있습니다.`
                }
            ]
        },
        // Questions 155-157: Article
        {
            id: "p7-t9-set5",
            setType: "Single",
            questionRange: "155-157",
            passages: [
                {
                    id: "p7-t9-s5-p1",
                    contextType: "P3_MEDI",
                    docType: "ARTICLE",
                    content: `BUSAN (15 October)—As international shipping continues to increase, companies that transport goods between continents have found themselves competing for expensive space on container ships. — [1] —. Delays in getting goods to factories and into stores have become more common. — [2] —.\n\nAs one of the biggest exporters of home building supplies in the country, Hibiscus Supply is particularly vulnerable to these issues. — [3] —. To avoid potential shipping problems, Hibiscus Supply has decided to operate its own container ship to export products overseas. — [4] —.\n\nAccording to Hibiscus Supply president James Koh, operating the company's own ship should improve efficiency at ports and decrease overall shipping costs. Says Mr. Koh, "The cost to ship with freight companies has doubled in the past year. By shipping our products ourselves, we'll be able to avoid passing shipping-related price increases on to our customers."`,
                    translation: `부산 (10월 15일)—국제 해운이 계속 증가함에 따라 대륙 간 물품을 운반하는 회사들은 컨테이너선의 비싼 공간을 차지하기 위해 경쟁하고 있습니다. — [1] —. 공장과 매장으로 물품을 운송하는 일이 지연되는 사례가 더 흔해졌습니다. — [2] —.\n\n국내 최대의 주택 건설 자재 수출 업체 중 하나로서, 히비스커스 서플라이는 특히 이러한 문제에 취약합니다. — [3] —. 잠재적인 해운 문제를 피하기 위해, 히비스커스 서플라이는 제품을 해외로 수출하기 위해 자체 컨테이너선을 운영하기로 결정했습니다. — [4] —.\n\n히비스커스 서플라이의 제임스 고 사장에 따르면, 회사 소유의 선박을 운영하면 항구에서의 효율성이 향상되고 전반적인 운송 비용이 감소할 것입니다. 고 사장은 "화물 업체와의 운송 비용이 지난 한 해 동안 두 배로 뛰었습니다. 우리 제품을 직접 운송함으로써 해운 관련 가격 인상을 고객에게 전가하는 상황을 피할 수 있을 것입니다"라고 말합니다.`
                }
            ],
            questions: [
                {
                    id: "p7-t9-q155",
                    questionNo: 155,
                    text: "What products does Hibiscus Supply most likely sell?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "Construction materials",
                        "B": "Pillows and sheets",
                        "C": "Wholesale food items",
                        "D": "Spare automobile parts"
                    },
                    correctAnswer: "A",
                    translation: "히비스커스 서플라이는 주로 어떤 제품을 판매하는가?",
                    explanation: `주택 건설 자재(home building supplies)의 주요 수출 업체라고 언급되었으므로 건설 자재가 정답입니다.`
                },
                {
                    id: "p7-t9-q156",
                    questionNo: 156,
                    text: "Why does Hibiscus Supply want to operate its own container ship?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "To provide shipping services to other companies",
                        "B": "To ship its products quickly and cheaply",
                        "C": "To deliver its products to unusual locations",
                        "D": "To ship more goods than most freight companies can handle"
                    },
                    correctAnswer: "B",
                    translation: "히비스커스 서플라이가 왜 자체 컨테이너선을 운영하고자 하는가?",
                    explanation: `항구 효율성 증대(improve efficiency)와 운송 비용 절감(decrease overall shipping costs)이 목적이라고 명시되어 있습니다.`
                },
                {
                    id: "p7-t9-q157",
                    questionNo: 157,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"The newly acquired ship is scheduled to begin running later this month.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "D",
                    translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"새로 확보한 선박은 이달 말부터 운항을 시작할 예정입니다.\"",
                    explanation: `자체 선박을 운영하기로 결정했다(has decided to operate its own container ship)는 문장 바로 뒤인 [4]번이 가장 적절합니다.`
                }
            ]
        },
        // Questions 158-160: Memo
        {
            id: "p7-t9-set6",
            setType: "Single",
            questionRange: "158-160",
            passages: [
                {
                    id: "p7-t9-s6-p1",
                    contextType: "P2_OFFI",
                    docType: "MEMO",
                    content: `To: All Accounting Staff\nFrom: Jennifer Snow, Senior Manager\nDate: January 8\nSubject: Pedro Allende\n\nPlease join me in congratulating Pedro Allende as he prepares to enter his new role as full-time administrative assistant in our accounting department. Mr. Allende, a part-time clerk in our mail room, completed a certificate program in computer support at Lander Vocational Institute last month. He was first hired by our company as a delivery driver, a role he held for two years before transferring to the mail room.\n\nMr. Allende's first day in the accounting department will be Monday, January 11. We all wish him well!`,
                    translation: `수신: 전 회계 부서 직원\n발신: 제니퍼 스노, 선임 매니저\n날짜: 1월 8일\n제목: 페드로 아옌데\n\n페드로 아옌데 씨가 우리 회계 부서의 전임 행정 보조원이라는 새로운 직책을 맡게 된 것을 함께 축하해 주시기 바랍니다. 우편물실의 파트타임 사무원이었던 아옌데 씨는 지난달 랜더 직업 전문학교에서 컴퓨터 지원 자격증 과정을 마쳤습니다. 그는 처음에 우리 회사에 배달 기사로 고용되어 2년 동안 근무한 뒤 우편물실로 옮겼습니다.\n\n아옌데 씨의 회계 부서 첫 출근일은 1월 11일 월요일입니다. 그의 앞날을 축복합니다!`
                }
            ],
            questions: [
                {
                    id: "p7-t9-q158",
                    questionNo: 158,
                    text: "Why did Ms. Snow send the memo?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To invite employees to an office party",
                        "B": "To announce a change to an employee's job",
                        "C": "To inform employees about a reduction in work hours",
                        "D": "To request employee feedback on a departmental policy"
                    },
                    correctAnswer: "B",
                    translation: "스노 씨가 메모를 보낸 이유는?",
                    explanation: `아옌데 씨의 부서 이동 및 신규 보직 발령(prepares to enter his new role)을 알리기 위해 작성되었습니다.`
                },
                {
                    id: "p7-t9-q159",
                    questionNo: 159,
                    text: "The word \"prepares\" in paragraph 1, line 1, is closest in meaning to",
                    classification: "P7_VOCABULARY",
                    options: {
                        "A": "assembles",
                        "B": "returns",
                        "C": "reaches out",
                        "D": "gets ready"
                    },
                    correctAnswer: "D",
                    translation: "지문 내 \"prepares\"와 의미가 가장 가까운 것은?",
                    explanation: `새로운 일을 시작하기 위해 '준비하다'라는 뜻이므로 'gets ready'가 적절합니다.`
                },
                {
                    id: "p7-t9-q160",
                    questionNo: 160,
                    text: "What is indicated about Mr. Allende?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "He currently works as a delivery driver.",
                        "B": "He recently completed a training program.",
                        "C": "He previously assisted Ms. Snow in a different department.",
                        "D": "He will begin working part-time next week."
                    },
                    correctAnswer: "B",
                    translation: "아옌데 씨에 대해 알 수 있는 것은?",
                    explanation: `지난달 자격증 프로그램(completed a certificate program ... last month)을 마쳤다고 언급되었습니다.`
                }
            ]
        },
        // Questions 161-163: Advertisement
        {
            id: "p7-t9-set7",
            setType: "Single",
            questionRange: "161-163",
            passages: [
                {
                    id: "p7-t9-s7-p1",
                    contextType: "P4_MARK",
                    docType: "ADVERTISEMENT",
                    content: `Help Wanted: Machinist\n\nCainerley Corp. of Napier, New Zealand, has an opening for an experienced machinist to work in our 15,000-square-metre fabrication plant, which produces custom tools and machine parts for a variety of industries. Requirements for the position include:\n\n• Ability to collaborate with engineers to fabricate tools and machine parts\n• Familiarity with specialised equipment\n• Skill with doing precision work based on technical drawings\n• Comfort working with metal and various other materials, such as wood and plastics\n• Ability to work both independently and as part of a team\n\nTo apply, please send CV and two references to jobs@cainerleycorp.co.nz.`,
                    translation: `구인: 기계 기술자\n\n뉴질랜드 네이피어 소재 카이너리 사는 다양한 산업을 위한 맞춤형 공구 및 기계 부품을 생산하는 15,000제곱미터 규모의 제작 공장에서 근무할 숙련된 기계 기술자를 찾고 있습니다. 자격 요건은 다음과 같습니다:\n\n• 엔지니어들과 협력하여 공구 및 기계 부품 제작 가능자\n• 전문 장비에 익숙한 자\n• 기술 도면을 기반으로 한 정밀 작업 기술 보유자\n• 금속 및 목재, 플라스틱 등 다양한 재료 작업 가능자\n• 독립적 또는 팀의 일원으로 업무 수행 가능자\n\n지원하려면 이력서와 추천인 2명을 jobs@cainerleycorp.co.nz로 보내주시기 바랍니다.`
                }
            ],
            questions: [
                {
                    id: "p7-t9-q161",
                    questionNo: 161,
                    text: "What type of business placed the advertisement?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "A land developer",
                        "B": "A car-repair shop",
                        "C": "A factory",
                        "D": "A hardware store"
                    },
                    correctAnswer: "C",
                    translation: "광고를 낸 업체는 어떤 종류의 회사인가?",
                    explanation: `공구 및 기계 부품을 생산하는 제작 공장(fabrication plant)이라고 명시되어 있습니다.`
                },
                {
                    id: "p7-t9-q162",
                    questionNo: 162,
                    text: "What material is NOT specified in the advertisement?",
                    classification: "P7_NEGATIVE",
                    options: {
                        "A": "Metal",
                        "B": "Glass",
                        "C": "Wood",
                        "D": "Plastic"
                    },
                    correctAnswer: "B",
                    translation: "광고에서 언급되지 않은 재료는?",
                    explanation: `금속(metal), 목재(wood), 플라스틱(plastics)은 열거되었으나 유리(glass)는 언급되지 않았습니다.`
                },
                {
                    id: "p7-t9-q163",
                    questionNo: 163,
                    text: "What is listed as a requirement for the job?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Training in business-to-business sales",
                        "B": "A university degree in engineering",
                        "C": "Experience creating technical drawings",
                        "D": "The ability to work alone and with others"
                    },
                    correctAnswer: "D",
                    translation: "직무 요건으로 나열된 것은?",
                    explanation: `독립적으로나 팀의 일원으로(independently and as part of a team) 일할 수 있는 능력을 요구하고 있습니다.`
                }
            ]
        },
        // Questions 164-167: Text-message chain
        {
            id: "p7-t9-set8",
            setType: "Single",
            questionRange: "164-167",
            passages: [
                {
                    id: "p7-t9-s8-p1",
                    contextType: "P7_CONV",
                    docType: "CHAT_MESSAGE",
                    content: `Lanie McGinnis (7:16 A.M.)\nGood morning, Kelly and Matthieu. I removed the Funfair preregistration signs from the park entrances, but I think I forgot one at the north gate. Could one of you check to see if it is still there?\n\nKelly Sen (7:18 A.M.)\nHi, Lanie. I rode my bike to the park earlier this morning to help put pamphlets and other materials on the welcome table in the main tent. But I could head over to that entrance now since there are other volunteers here who can finish up.\n\nLanie McGinnis (7:19 A.M.)\nThat would be great, since I'm going to be on the other side of the park at the south entrance for a while. I'm meeting some representatives from the city parks department.\n\nMatthieu Herman (7:21 A.M.)\nI've got it, Kelly. I just arrived at the north entrance and will take down the sign we hung here. Lanie, what would you like me to do with it?\n\nLanie McGinnis (7:22 A.M.)\nPerfect! Can you put it with the others behind the welcome table in the main tent? I will pick them up later today. We can change the dates and use them again next year.\n\nMatthieu Herman (7:23 A.M.)\nWill do. Here's to a successful fair!`,
                    translation: `래니 맥기니스 (오전 7:16) 좋은 아침이에요, 켈리, 마티유. 제가 공원 입구에서 펀페어 사전 신청 표지판을 치웠는데, 북문에 하나를 깜빡한 것 같아요. 혹시 그게 아직 있는지 확인해 주실 수 있나요?\n\n켈리 센 (오전 7:18) 안녕, 래니. 저도 메인 텐트 환영 테이블에 팸플릿이랑 자료들 두는 걸 도우려고 아침 일찍 자전거 타고 공원에 왔어요. 여기 뒷정리할 다른 자원봉사자들이 있으니 제가 지금 북문 쪽으로 가볼 수 있어요.\n\n래니 맥기니스 (오전 7:19) 좋네요! 저는 당분간 공원 반대편 남쪽 입구 쪽에 있을 거거든요. 시청 공원 관리 부서 분들을 만날 예정이라서요.\n\n마티유 허먼 (오전 7:21) 제가 할게요, 켈리. 방금 북문 입구에 도착해서 여기 걸려 있던 표지판 내릴 참이에요. 래니, 표지판은 어떻게 할까요?\n\n래니 맥기니스 (오전 7:22) 완벽해요! 메인 텐트 환영 테이블 뒤에 다른 것들이랑 같이 두겠어요? 이따가 제가 챙겨갈게요. 날짜만 바꿔서 내년에 또 쓸 수 있거든요.\n\n마티유 허먼 (오전 7:23) 그럴게요. 이번 박람회가 성공하길 빌어요!`
                }
            ],
            questions: [
                {
                    id: "p7-t9-q164",
                    questionNo: 164,
                    text: "What is probably true about the writers?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "They are registering people for a bike-to-work program.",
                        "B": "They are coordinating a public event.",
                        "C": "They work for a city parks department.",
                        "D": "They are members of a club that walks in a park."
                    },
                    correctAnswer: "B",
                    translation: "작성자들에 대해 알 수 있는 사실은?",
                    explanation: `축제 표지판(Funfair signs), 팸플릿 비치, 텐트 설치 등 공공 행사(Successful fair!)를 준비하고 있는 모습입니다.`
                },
                {
                    id: "p7-t9-q165",
                    questionNo: 165,
                    text: "What was Ms. Sen doing?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Erecting a tent",
                        "B": "Designing pamphlets",
                        "C": "Placing items on the welcome table",
                        "D": "Attaching signs to the park entrance"
                    },
                    correctAnswer: "C",
                    translation: "센 씨는 무엇을 하고 있었는가?",
                    explanation: `환영 테이블에 팸플릿과 자료들을 두는 것(help put pamphlets and other materials on the welcome table)을 돕고 있었다고 말했습니다.`
                },
                {
                    id: "p7-t9-q166",
                    questionNo: 166,
                    text: "At 7:21 A.M., what does Mr. Herman mean when he writes, \"I've got it, Kelly\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "He has already taken down a sign.",
                        "B": "He will perform a task requested by Ms. McGinnis.",
                        "C": "He will return unused materials to the office.",
                        "D": "He realizes that Ms. Sen does not need help."
                    },
                    correctAnswer: "B",
                    translation: "오전 7:21에 허먼 씨가 \"제가 할게요, 켈리\"라고 쓴 의도는?",
                    explanation: `켈리가 북문에 가보겠다고 하자, 자신이 이미 도착했으니 맥기니스 씨가 요청한 표지판 확인 업무(take down the sign)를 직접 하겠다는 뜻입니다.`
                },
                {
                    id: "p7-t9-q167",
                    questionNo: 167,
                    text: "What does Ms. McGinnis instruct Mr. Herman to do?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Help her locate the main tent",
                        "B": "Meet her at the south entrance",
                        "C": "Write down the participants' information",
                        "D": "Leave an object behind the welcome table"
                    },
                    correctAnswer: "D",
                    translation: "맥기니스 씨가 허먼 씨에게 내린 지시는?",
                    explanation: `표지판을 환영 테이블 뒤에 두라(put it with the others behind the welcome table)고 지시했습니다.`
                }
            ]
        },
        // Questions 168-171: Fact Sheet
        {
            id: "p7-t9-set9",
            setType: "Single",
            questionRange: "168-171",
            passages: [
                {
                    id: "p7-t9-s9-p1",
                    contextType: "P3_MEDI",
                    docType: "REPORT",
                    content: `Zealandia Airlines Fact Sheet for Fiscal Year Ending 30 June\n\nService Levels and Capacity: Zealandia Airlines provides regional service among four cities. In each case, average flight capacity exceeded the company goal of 85 percent.\n\nOn-Time Performance (OTP): For the purpose of measuring OTP, flights are considered "on time" when they reach their destination within fifteen minutes of the scheduled arrival time. Regional airlines are subject to fines when OTP drops below 50 percent. The following chart shows Zealandia's commendable OTP rates for the recent fiscal year.\n\nCity | OTP\nKelton Falls | 52%\nGrangerton | 68%\nSatcherville | 79%\nBarbour City | 64%\n\nProposed Expansion: Zealandia Airlines provides regional passenger air service and is seeking to expand its fleet to begin providing commercial airfreight delivery. Establishing this service is a component of a five-year growth plan and corporate vision. The airline is currently in negotiations with aviation authorities to explore options.\n\nTerminal and Service Improvements: Zealandia Airlines is participating in discussions with airport management about comprehensive renovations to its passenger lounge and café and has offered to commit $5 million from its budget to the project. Company executives have also finalized a plan and committed funds to overhaul its rewards program. The initiative supports the aim to be a leading service provider among similar airlines and capture an increasing percentage of the market share.`,
                    translation: `6월 30일 종료 회계연도 질랜디아 항공 팩트 시트\n\n서비스 수준 및 수용 능력: 질랜디아 항공은 4개 도시 간 지역 항공 서비스를 제공합니다. 모든 경우에 평균 탑승률이 회사 목표인 85%를 초과했습니다.\n\n정시 운항 실적(OTP): OTP 측정을 위해 예정된 도착 시간으로부터 15분 이내에 목적지에 도착하면 '정시'로 간주합니다. 지역 항공사는 OTP가 50% 미만으로 떨어지면 벌금이 부과됩니다. 다음 차트는 최근 회계연도에 질랜디아 항공이 달성한 훌륭한 OTP 수치를 보여줍니다.\n\n도시 | OTP\n켈턴폴스 | 52%\n그랜저턴 | 68%\n새처빌 | 79%\n바버시티 | 64%\n\n사업 확장 제안: 질랜디아 항공은 지역 승객 서비스를 제공하며, 상업용 항공 화물 운송을 시작하기 위해 기단을 확장 중입니다. 이 서비스 구축은 5개년 성장 계획 및 기업 비전의 일부입니다. 현재 항공 당국과 논의 중입니다.\n\n터미널 및 서비스 개선: 질랜디아 항공은 승객 라운지와 카페의 대대적인 개조에 대해 공항 경영진과 논의 중이며, 500만 달러의 예산을 투입하기로 제안했습니다. 또한 보상 프로그램 개편 계획을 확정하고 자금을 배정했습니다. 이 계획은 유사 항공사 중 선도적 지위를 확보하고 시장 점유율을 높이는 것을 목표로 합니다.`
                }
            ],
            questions: [
                {
                    id: "p7-t9-q168",
                    questionNo: 168,
                    text: "The word \"exceeded\" in paragraph 1, line 2, is closest in meaning to",
                    classification: "P7_VOCABULARY",
                    options: {
                        "A": "surpassed",
                        "B": "excelled",
                        "C": "perfected",
                        "D": "decided"
                    },
                    correctAnswer: "A",
                    translation: "지문 내 \"exceeded\"와 의미가 가장 가까운 것은?",
                    explanation: `목표 수치를 넘어섰다는 뜻이므로 'surpassed'가 정답입니다.`
                },
                {
                    id: "p7-t9-q169",
                    questionNo: 169,
                    text: "According to the fact sheet, what is true about Zealandia Airlines?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Executives aim to improve its flight capacity.",
                        "B": "Most of its flights arrive at their destinations on time.",
                        "C": "It is larger than 85 percent of regional airlines.",
                        "D": "It has received a fine from aviation authorities."
                    },
                    correctAnswer: "B",
                    translation: "팩트 시트에 따르면 항공사에 대해 사실인 것은?",
                    explanation: `모든 도시의 OTP가 50% 이상이며, 보고서에서 이를 훌륭한 실적(commendable OTP rates)이라고 평가했으므로 대부분의 항공편이 정시에 도착하고 있음을 알 수 있습니다.`
                },
                {
                    id: "p7-t9-q170",
                    questionNo: 170,
                    text: "What does Zealandia Airlines want to provide in the future?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Private charter flights",
                        "B": "Luxury travel tours",
                        "C": "Commercial shipping",
                        "D": "Aircraft leasing"
                    },
                    correctAnswer: "C",
                    translation: "질랜디아 항공이 향후 제공하고자 하는 서비스는?",
                    explanation: `상업용 항공 화물 서비스(commercial airfreight delivery), 즉 상업용 운송(Commercial shipping) 서비스를 시작하려 합니다.`
                },
                {
                    id: "p7-t9-q171",
                    questionNo: 171,
                    text: "How does Zealandia Airlines hope to improve service for passengers?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "By remodeling the passenger waiting area",
                        "B": "By moving to a new location within the terminal",
                        "C": "By upgrading the seating inside the aircraft",
                        "D": "By offering improved meal service on all flights"
                    },
                    correctAnswer: "A",
                    translation: "질랜디아 항공은 승객 서비스를 어떻게 개선하려 하는가?",
                    explanation: `승객 라운지(passenger lounge)의 대대적인 개조(comprehensive renovations)를 논의 중입니다.`
                }
            ]
        },
        // Questions 172-175: Press Release
        {
            id: "p7-t9-set10",
            setType: "Single",
            questionRange: "172-175",
            passages: [
                {
                    id: "p7-t9-s10-p1",
                    contextType: "P3_MEDI",
                    docType: "PRESS_RELEASE",
                    content: `New Fleet for Northeast Railways\n\nNortheast Railways expects to spend $5.6 billion to replace its fleet of 65 passenger trains, many of which are more than 40 years old. — [1] —.\n\nThe company has entered into a contract with Logiens Transport for a new fleet of trains that will operate on electrified tracks when those track systems are available and on diesel fuel at all other times. — [2] —. The trains will be capable of traveling at speeds of up to 130 kilometers per hour and will produce far less pollution than the current fleet does.\n\nLogiens also promises an enhanced passenger experience. The train cars will have panoramic windows, improved ventilation, and wider aisles. — [3] —.\n\nNortheast's contract with Logiens also includes equipment and replacement parts and provides a long-term service agreement. — [4] —.`,
                    translation: `노스이스트 철도의 새로운 차량 도입\n\n노스이스트 철도는 40년이 넘은 노후화된 여객 열차 65대를 교체하기 위해 56억 달러를 투입할 예정입니다. — [1] —.\n\n회사는 로지엔스 트랜스포트 사와 신규 열차 도입 계약을 체결했습니다. 이 열차는 전철화된 선로가 있는 곳에서는 전기 시스템으로, 그 외의 경우에는 디젤 연료로 운행됩니다. — [2] —. 신형 열차는 시속 130km까지 주행 가능하며 현재보다 오염 물질 배출이 훨씬 적습니다.\n\n로지엔스 사는 또한 개선된 승객 경험을 약속합니다. 객차에는 파노라마 창문, 개선된 환기 시스템, 그리고 더 넓은 통로가 마련됩니다. — [3] —.\n\n노스이스트 사와 로지엔스 사의 계약에는 장비 및 교체 부품 포함은 물론 장기 서비스 협약도 포함됩니다. — [4] —.`
                }
            ],
            questions: [
                {
                    id: "p7-t9-q172",
                    questionNo: 172,
                    text: "What is Logiens Transport's role?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "To recommend ways to reduce pollution",
                        "B": "To acquire financing for a purchase",
                        "C": "To familiarize train engineers with new technology",
                        "D": "To manufacture and service the replacement fleet"
                    },
                    correctAnswer: "D",
                    translation: "로지엔스 트랜스포트 사의 역할은 무엇인가?",
                    explanation: `신규 차량을 공급(contract ... for a new fleet)하고 장기 서비스 협약(long-term service agreement)을 통해 유지보수를 담당합니다.`
                },
                {
                    id: "p7-t9-q173",
                    questionNo: 173,
                    text: "What information is included in the press release?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "The date on which the trains will be delivered",
                        "B": "The budget for replacing the current trains",
                        "C": "The annual cost for parts and service",
                        "D": "The number of passenger seats in each train car"
                    },
                    correctAnswer: "B",
                    translation: "보도 자료에 포함된 정보는?",
                    explanation: `차량 교체를 위해 56억 달러를 지출할 예상 예산(expects to spend $5.6 billion)이 명시되었습니다.`
                },
                {
                    id: "p7-t9-q174",
                    questionNo: 174,
                    text: "What is suggested about the tracks that Northeast Railways uses?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "They are owned by the government.",
                        "B": "They are not shared with freight trains.",
                        "C": "Most are in urgent need of repair.",
                        "D": "Some are not electrified."
                    },
                    correctAnswer: "D",
                    translation: "노스이스트 철도가 사용하는 선로에 대해 알 수 있는 것은?",
                    explanation: `전철 선로를 이용할 수 있을 때(when those track systems are available)와 그렇지 않을 때를 구분한 것으로 보아, 일부 선로는 아직 전철화가 되지 않았음을 유추할 수 있습니다.`
                },
                {
                    id: "p7-t9-q175",
                    questionNo: 175,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Each reclinable seat will have an individual power supply and USB port.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "C",
                    translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"각 등받이 조절 좌석에는 개별 전원 장치와 USB 포트가 설치될 것입니다.\"",
                    explanation: `창문, 환기구, 통로 등 승객 편의 시설(enhanced passenger experience)에 대해 설명하는 문맥인 [3]번이 가장 적절합니다.`
                }
            ]
        }
    ]
};
