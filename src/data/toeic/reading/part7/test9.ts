import { Part7Test } from './types';
export const test9Data: Part7Test = {
    testId: 9,
    title: "Test 9",
    sets: [
        // Questions 147-148: Menu
        {
            id: "p7-t9-set1",
            questionRange: "147-148",
            passages: [
                {
                    id: "p7-t9-s1-p1",
                    contextType: "P4",
                    docType: "ADVERTISEMENT",
                    title: "Carina's Café Lunch Specials",
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
                    explanation: `두 번째 줄에서 '단돈 8달러에 오늘의 수프를 다음 음식 항목 중 하나와 함께 드세요(For only $8, combine the soup of the day with one of the following items)'라고 했다. 따라서 런치 스페셜 메뉴에 수프가 제공된다는 것을 알 수 있으므로 (A)가 정답이다.`
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
                    explanation: `마지막 줄에서 채소 랩은 신선한 토마토, 오이, 당근과 함께 후무스(우리 가게 비법으로 만든)를 바른 납작한 빵(Vegetable Wrap - Fresh tomato, cucumber, and carrots with hummus (made with our secret recipe) on flatbread)이라고 했다. 따라서 채소 랩에는 카리나스 카페의 비법으로 만든 후무스가 들어가므로 (D)가 정답이다.`
                }
            ]
        },
        // Questions 149-150: Advertisement
        {
            id: "p7-t9-set2",
            questionRange: "149-150",
            passages: [
                {
                    id: "p7-t9-s2-p1",
                    contextType: "P4",
                    docType: "ADVERTISEMENT",
                    title: "Certified Aqua Instructor Workshop",
                    content: `Certified Aqua Instructor Workshop\n\nThis workshop helps fitness professionals become certified aqua instructors by providing them with the skills to design challenging and effective aquatic classes. Join instructor Desbonte Smith for a full-day course to learn a sequence of pool-based workouts that will motivate your students. Mr. Smith started his journey to instructor certification by taking classes at Valley Floor Fitness. He is also a professor at Wilkinson University.\n\nThe workshop costs $99 and will be held at Valley Floor Fitness in Missoula on August 27 from 9 A.M. to 5 P.M. For more information and to register, e-mail Maya Cramer at certification@valleyfloorfitness.com.`,
                    translation: `공인 아쿠아 강사 워크숍\n\n이 워크숍은 도전적이고 효과적인 수중 수업을 설계하는 방법을 시연함으로써 피트니스 전문가들이 공인 아쿠아 강사가 되도록 도와 드립니다. 데스본트 스미스 강사와 종일 과정을 함께하여 학생들에게 동기를 부여해 줄 일련의 수영장 기반 운동을 배우십시오. 스미스 씨는 밸리 플로어 피트니스에서 수업을 듣고 강사 자격 취득을 위한 과정을 시작했습니다. 그는 윌킨슨 대학의 교수이기도 합니다.\n\n워크숍 비용은 99달러이며 미줄라의 밸리 플로어 피트니스에서 8월 27일 오전 9시부터 오후 5시까지 열립니다. 자세한 정보 및 등록을 원하시면 마야 크레이머에게 certification@valleyfloorfitness.com으로 이메일을 보내십시오.`
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
                    translation: "'design'과 의미가 가장 가까운 것은?",
                    explanation: `이 워크숍은 도전적이고 효과적인 수중 수업을 설계하는(design) 방법을 시연함으로써 피트니스 전문가들이 공인 아쿠아 강사가 되도록 도와 드립니다(This workshop helps fitness professionals become certified aqua instructors by providing them with the skills to design challenging and effective aquatic classes)라고 했다. 여기서 design은 도전적이고 효과적인 수중 수업을 '설장하거나 계획하다'라는 의미로 쓰였으므로 '창조하다'는 뜻인 (B) create가 정답이다.`
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
                    explanation: `스미스 씨는 밸리 플로어 피트니스에서 수업을 듣고(taking classes at Valley Floor Fitness) 강사 자격 취득을 위한 과정을 시작했다고 했다. 따라서 이 워크숍의 강사인 스미스 씨는 밸리 플로어 피트니스의 전 학생이었음을 알 수 있으므로 (D)가 정답이다.`
                }
            ]
        },
        // Questions 151-152: Online Chat
        {
            id: "p7-t9-set3",
            questionRange: "151-152",
            passages: [
                {
                    id: "p7-t9-s3-p1",
                    contextType: "P7",
                    docType: "CHAT_MESSAGE",
                    title: "Online Chat",
                    content: `Jo Hyun-jun [3:27 P.M.]\nI'm scheduled to work the front desk on Saturday from 7 A.M. to 3 P.M. A friend is visiting that day but only for 24 hours. I was wondering if I could switch shifts with you. I can work on Sunday.\n\nStephanie Touzin [3:29 P.M.]\nSaturday is good for me. It stays less busy than last Sunday. All the doctors attending the medical conference were checking in at the front desk.\n\nJo Hyun-jun [3:31 P.M.]\nAnd I heard that all the accountants at that other conference were at the front desk reviewing their room charges at the same time!\n\nStephanie Touzin [3:32 P.M.]\nThe lobby was bustling.\n\nJo Hyun-jun [3:34 P.M.]\nThanks for helping. It's the first time I've seen my friend Kyle since we graduated from college.`,
                    translation: `조현준 [오후 3:27] 제가 토요일 오전 7시부터 오후 3시까지 프런트에서 근무하기로 되어 있어요. 그날 제 친구가 오기로 했는데, 하루만 있다가 갈 예정이에요. 저와 근무 시간을 바꿔 주실 수 있을지 궁금해요. 저는 일요일에 근무할 수 있어요.\n\n스테파니 두쉬인 [오후 3:29] 토요일 괜찮아요. 지난주 같은 일요일은 겪지 않았으면 할 텐데요. 너무 바빴거든요. 의료 컨퍼런스에 참석한 의사들 전원이 프런트에서 체크인을 했어요.\n\n조현준 [오후 3:31] 그리고 동시에 다른 컨퍼런스에 참석하는 회계사들도 모두 프런트에서 객실 요금을 확인했다고 들었어요!\n\n스테파니 두쉬인 [오후 3:32] 로비가 정말 북적거렸어요.\n\n조현준 [오후 3:34] 도와줘서 고마워요. 대학교 졸업 이후로 제 친구 카일을 처음 보는 거예요.`
                }
            ],
            questions: [
                {
                    id: "p7-t9-q151",
                    questionNo: 151,
                    text: "At 3:29 P.M., what does Ms. Touzin most likely mean when she writes, \"Saturday is good for me\"?",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "She prefers working morning hours.",
                        "B": "She can fulfill Jo Hyun-jun's request.",
                        "C": "She will attend a medical conference.",
                        "D": "She wants to meet Jo Hyun-jun's friend."
                    },
                    correctAnswer: "B",
                    translation: "오후 3시 29분에 두쉬인 씨가 \"토요일 괜찮아요\"라고 쓴 의도는?",
                    explanation: `3시 27분에 조 씨가 토요일 오전 7시부터 오후 3시까지 프런트에서 근무하기로 되어 있다(I'm scheduled to work the front desk on Saturday from 7 A.M. to 3 P.M.)고 했고, 두쉬인 씨에게 근무 시간을 바꿔 줄 수 있을지 궁금하다(I was wondering if I could switch shifts with you)면서 일요일에 근무할 수 있다(I can work on Sunday)고 하자 3시 29분에 두쉬인 씨가 토요일 괜찮다(Saturday is good for me)고 대답했다. 따라서 두쉬인 씨는 조 씨의 부탁을 들어주려고 한 제안을 수락하려는 의도로 한 말임을 알 수 있으므로 (B)가 정답이다.`
                },
                {
                    id: "p7-t9-q152",
                    questionNo: 152,
                    text: "Where do Jo Hyun-jun and Ms. Touzin most likely work?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "At a hotel",
                        "B": "At a university",
                        "C": "At a medical center",
                        "D": "At an accounting firm"
                    },
                    correctAnswer: "A",
                    translation: "조 씨와 두쉬인 씨가 근무할 것 같은 곳은?",
                    explanation: `3시 29분에 두쉬인 씨가 의료 컨퍼런스에 참석한 의사들 전원이 프런트에서 체크인을 했다(All the doctors ~ checking in at the front desk)고 했고, 3시 31분에 조 씨가 그리고 동시에 다른 컨퍼런스에 참석하는 회계사들도 모두 프런트에서 객실 요금을 확인했다고 들었다(And I heard that all the accountants ~ at the front desk reviewing their room charges at the same time)고 했다. 프런트에서 손님들이 체크인을 하거나 객실 요금을 확인한 상황을 이야기하는 것으로 보아 두 사람은 호텔 직원임을 알 수 있으므로 (A)가 정답이다.`
                }
            ]
        },
        // Questions 153-154: E-mail
        {
            id: "p7-t9-set4",
            questionRange: "153-154",
            passages: [
                {
                    id: "p7-t9-s4-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    title: "Email",
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
                    translation: "존스 씨가 이메일에 명시한 것은?",
                    explanation: `두 번째 문장에서 존스 씨가 다른 회사로부터 일자리 제안을 받았다는 점을 알려드리고자 하며, 그 채용 담당자에게 곧 답변을 해야 한다(I wanted to let you know that I have received a job offer from another company, and I have to respond to that hiring manager soon)고 했으므로 (C)가 정답이다.`
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
                    explanation: `세 번째 문장에서 존스 씨가 면접을 본 지 불과 며칠밖에 지나지 않았다는 것을 알고 있지만 이번 주가 끝나기 전에 자신의 지원 상황에 대해 조금이라도 알려줄 수 있다면 무척 도움이 될 것이다(I realize ~ if it is at all possible for you to update me on the status of my application before the end of the week, that would be very helpful)라고 했다. 따라서 존스 씨는 주말까지 자신의 채용 여부가 결정되었는지 알고 싶어 하는 것이므로 (A)가 정답이다.`
                }
            ]
        },
        // Questions 155-157: Article
        {
            id: "p7-t9-set5",
            questionRange: "155-157",
            passages: [
                {
                    id: "p7-t9-s5-p1",
                    contextType: "P3",
                    docType: "ARTICLE",
                    title: "Hibiscus Supply to Run Its Own Container Ship",
                    content: `BUSAN (15 October)—As international shipping continues to increase, companies that transport goods between countries have found themselves competing for expensive space on container ships. — [1] —. Delays in getting goods to factories and into stores have become more common. — [2] —.\n\nAs one of the largest importers of building supplies in the country, Hibiscus Supply is particularly vulnerable to these issues. — [3] —. To avoid potential shipping problems, Hibiscus Supply has decided to operate its own container ship to export products overseas. — [4] —.\n\nAccording to Hibiscus Supply president James Koh, operating the company's own ship should improve efficiency at ports and decrease overall shipping costs. Says Mr. Koh, "The cost to ship with freight companies has doubled in the past year. By shipping our products ourselves, we'll be able to avoid passing shipping-related price increases on to our customers."`,
                    translation: `히비스커스 서플라이, 자체 컨테이너선 운영\n\n부산 (10월 15일)—국제선 운항이 지속적으로 증가함에 따라 대륙 간 상품을 운송하는 기업들은 컨테이너선의 비싼 공간을 두고 경쟁을 벌이고 있다. — [1] —. 공장 및 상점으로의 상품 배송 지연은 더욱 흔한 일이 되었다. — [2] —.\n\n155 국내 최대 주택 건설용품 수입업체 중 하나로서 히비스커스 서플라이는 특히 이 문제에 취약하다. — [3] —. 발생 가능성이 있는 운송 문제를 피하기 위해, 157 히비스커스 서플라이는 제품을 해외로 수출하는 데 자체 컨테이너선을 운영하기로 결정했다. — [4] —.\n\n156 히비스커스 서플라이의 제임스 고 사장에 따르면, 회사 자체 선박을 운영하는 것은 항구에서의 효율성을 높이고 전반적인 운송 비용을 줄여 줄 것이다. "화물 업체를 이용한 운송 비용은 지난해 두 배가 되었습니다. 우리 제품을 직접 운송함으로써 고객들에게 운송과 관련된 가격 상승을 전가하는 일을 피할 수 있을 것입니다."라고 고 씨는 말한다.`
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
                    translation: "히비스커스 서플라이가 판매할 것 같은 제품은?",
                    explanation: `두 번째 단락의 첫 문장에서 국내 최대 주택 건설용품 수입업체 중 하나로서 히비스커스 서플라이는 특히 이 문제에 취약하다(As one of the biggest exporters of home building supplies in the country, Hibiscus Supply is ~ issues)고 했으므로 히비스커스 서플라이는 주택 건설용품을 취급하는 업체임을 알 수 있다. 따라서 (A)가 정답이다.`
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
                    translation: "히비스커스 서플라이가 자체 컨테이너선을 운영하고자 하는 이유는?",
                    explanation: `세 번째 단락의 첫 문장에서 히비스커스 서플라이의 제임스 고 사장에 따르면, 회사 자체 선박을 운영하는 것은 항구에서의 효율성을 높이고 전반적인 운송 비용을 줄여 줄 것(According to Hibiscus Supply ~ operating the company's own ship should improve efficiency at ports and decrease overall shipping costs)이라고 했다. 따라서 히비스커스 서플라이가 자체 선박을 운영하려는 이유는 효율적이고 저렴한 운송을 위한 것이므로 (B)가 정답이다.`
                },
                {
                    id: "p7-t9-q157",
                    questionNo: 157,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"The newly acquired ship is scheduled to begin running later this month.\"",
                    classification: "P7_INSERTION",

                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "D",
                    translation: "[1], [2], [3], [4]로 표시된 위치 중에서 다음 문장이 들어가기에 가장 적절한 곳은?",
                    explanation: `제시된 문장은 새로 인수한 선박이 이달 말부터 운항을 시작할 예정이다(The newly acquired ship is scheduled to begin running later this month)는 내용이므로, 히비스커스 서플라이가 제품을 해외로 수출하는 데 자체 컨테이너선을 운영하기로 결정했다(Hibiscus Supply has decided to operate its own container ship to export products overseas)는 내용 뒤인 (D)가 가장 적절하다.`
                }
            ]
        },
        // Questions 158-160: Memo
        {
            id: "p7-t9-set6",
            questionRange: "158-160",
            passages: [
                {
                    id: "p7-t9-s6-p1",
                    contextType: "P1",
                    docType: "MEMO",
                    title: "MEMO",
                    content: `To: All Accounting Staff\nFrom: Jennifer Snow, Senior Manager\nDate: January 8\nSubject: Pedro Allende\n\nPlease join me in congratulating Pedro Allende as he prepares to enter his new role as full-time administrative assistant in our accounting department. Mr. Allende, a part-time clerk in our mail room, completed a certificate program in computer support at Lander Vocational Institute last month. He was first hired by our company as a delivery driver, a role he held for two years before transferring to the mail room.\n\nMr. Allende's first day in the accounting department will be Monday, January 11. We all wish him well!`,
                    translation: `회람\n\n수신: 모든 회계 직원\n발신: 제니퍼 스노, 선임 관리자\n날짜: 1월 8일\n제목: 페드로 아옌데\n\n158 페드로 아옌데가 우리 회계부에서 전임 행정 보조원으로서 새로운 역할을 맡기 위해 159 준비하고 있으니 저와 함께 축하해 주세요. 160 아옌데 씨는 우리 우편물실에서 근무하는 파트타임 직원으로 지난달 랜더 직업 훈련소에서 컴퓨터 지원 분야의 자격증 과정을 수료했습니다. 그는 처음에 우리 회사에 배달 기사로 채용되어 2년 동안 근무하다가 우편물실로 옮겼습니다.\n\n아옌데 씨가 회계부에서 근무하는 첫날은 1월 11일 월요일입니다. 우리 모두 그에게 행운을 빕니다!`
                }
            ],
            questions: [
                {
                    id: "p7-t9-q158",
                    questionNo: 158,
                    text: "Why did Ms. Snow send the memo?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "To invite employees to an office party",
                        "B": "To announce a change to an employee's job",
                        "C": "To inform employees about a reduction in work hours",
                        "D": "To request employee feedback on a departmental policy"
                    },
                    correctAnswer: "B",
                    translation: "스노 씨가 회람을 보낸 이유는?",
                    explanation: `첫 문장에서 스노 씨가 페드로 아옌데가 회계부에서 전임 행정 보조원으로서 새로운 역할을 맡기 위해 준비하고 있으니 함께 축하해 달라(Please join me in congratulating Pedro Allende as he prepares to enter his new role as a full-time administrative assistant in our accounting department)고 한 것으로 보아 페드로 아옌데라는 직원의 업무가 바뀌는 것을 알리기 위해 회람을 보낸 것이므로 (B)가 정답이다.`
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
                    translation: "첫 번째 단락 1행의 \"prepares\"와 의미가 가장 가까운 단어는?",
                    explanation: `의미상 새 역할을 맡기 위해 '준비하고 있다'라는 뜻으로 쓰였으므로 '준비하다'를 뜻하는 (D) gets ready가 정답이다.`
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
                    translation: "아옌데 씨에 대해 명시된 것은?",
                    explanation: `첫 단락의 두 번째 문장에서 아옌데 씨는 우편물실에서 근무하는 파트타임 직원으로 지난달 랜더 직업 훈련소에서 컴퓨터 지원 분야의 자격증 과정을 수료했다(Mr. Allende, a part-time clerk in our mail room, completed a certificate program ~ last month)고 했으므로 (B)가 정답이다.`
                }
            ]
        },
        // Questions 161-163: Advertisement
        {
            id: "p7-t9-set7",
            questionRange: "161-163",
            passages: [
                {
                    id: "p7-t9-s7-p1",
                    contextType: "P4",
                    docType: "ADVERTISEMENT",
                    title: "Help Wanted: Machinist",
                    content: `Cainerley Corp. of Napier, New Zealand, has an opening for an experienced machinist to work in our 15,000-square-metre fabrication plant, which produces custom tools and machine parts for a variety of industries. Requirements for the position include:\n\n• Ability to collaborate with engineers to fabricate tools and machine parts\n• Familiarity with specialised equipment\n• Skill with doing precision work based on technical drawings\n• Comfort working with metal and various other materials, such as wood and plastics\n• Ability to work both independently and as part of a team\n\nTo apply, please send CV and two references to jobs@cainerleycorp.co.nz.`,
                    translation: `구인: 기계 기술자\n\n뉴질랜드 네이피어의 캐널리 사에 다양한 산업을 위한 맞춤형 공구 및 기계 부품을 생산하는 15,000평방미터 규모의 제조 공장에서 근무할 숙련된 기계 기술자를 위한 일자리가 있습니다. 이 직책에 필요한 요건은 다음과 같습니다:\n\n• 엔지니어와 협업하여 공구 및 기계 부품을 제작할 수 있는 능력\n• 전문 장비에 대한 숙지\n• 기술 도면에 근거해 정밀 작업을 수행하는 기술\n• 162 금속, 목재 및 플라스틱과 같은 다양한 재료를 편하게 다룰 수 있는 능력\n• 163 독립적으로도, 또는 팀의 일원으로서도 일할 수 있는 능력\n\n지원하려면 이력서와 두 장의 추천서를 jobs@cainerleycorp.co.nz로 보내세요.`
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
                    translation: "광고를 게재한 업체의 종류는?",
                    explanation: `첫 문장에서 뉴질랜드 네이피어의 캐널리 사에 다양한 산업을 위한 맞춤형 공구 및 기계 부품을 생산하는 15,000평방미터 규모의 제조 공장에서 근무할 숙련된 기계 기술자를 위한 일자리가 있다(Cainerley Corp. of Napier, New Zealand, has ~ fabrication plant, which produces custom tools and machine parts for a variety of industries)고 했다. 따라서 광고를 낸 캐널리 사는 공구 및 기계 부품을 생산하는 공장을 운영하는 업체임을 알 수 있으므로 (C)가 정답이다.`
                },
                {
                    id: "p7-t9-q162",
                    questionNo: 162,
                    text: "What material is NOT specified in the advertisement?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Metal",
                        "B": "Glass",
                        "C": "Wood",
                        "D": "Plastic"
                    },
                    correctAnswer: "B",
                    translation: "광고에 명시된 재료가 아닌 것은?",
                    explanation: `직책에 필요한 네 번째 요건에서 금속, 목재 및 플라스틱과 같은 다양한 재료를 편하게 다룰 수 있는 능력(Comfort working with metal and various other materials, such as wood and plastics)을 명시하고 있고, 유리는 언급된 적이 없으므로 (B)가 정답이다.`
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
                    translation: "직무에 필요한 요건으로 나열된 것은?",
                    explanation: `직책에 필요한 다섯 번째 요건에서 독립적으로도, 또는 팀의 일원으로 서도 일할 수 있는 능력(Ability to work both independently and as part of a team)을 언급하고 있으므로 (D)가 정답이다.`
                }
            ]
        },
        // Questions 164-167: Online Chat
        {
            id: "p7-t9-set8",
            questionRange: "164-167",
            passages: [
                {
                    id: "p7-t9-s8-p1",
                    contextType: "P7",
                    docType: "CHAT_MESSAGE",
                    title: "Online Chat",
                    content: `Lanie McGinnis [7:16 A.M.]\nGood morning, Kelly and Matthieu. I removed the Funfair promotional signs from the park entrances, but I think I forgot one at the north gate. Could one of you check to see if it is still there?\n\nKelly Sen [7:18 A.M.]\nHi Lanie. I might not be able to get there earlier this morning to help put pamphlets and other materials on the welcome table in the main tent. But I could head over to that entrance now since there are other volunteers here who are filling up.\n\nLanie McGinnis [7:19 A.M.]\nThat would be great, since I'm going to be on the other side of the park at the south entrance for a while. I'm meeting some representatives from the city parks department.\n\nMatthieu Herman [7:21 A.M.]\nI've got it, Kelly. I just arrived at the north entrance and will take down the sign we hung here. Lanie, what would you like me to do with it?\n\nLanie McGinnis [7:22 A.M.]\nPerfect! Can you put it with the others behind the welcome table in the main tent? I will pick them up later today. We can change the dates and use them again next year.\n\nMatthieu Herman [7:23 A.M.]\nWill do. Here's to a successful fair!`,
                    translation: `래니 맥기니스 [오전 7:16] 좋은 아침입니다, 켈리 그리고 마티유. 164, 166 제가 공원 입구에서 펀페어 사전 등록 표지판을 치웠는데 북문에 있는 하나를 깜빡한 것 같아요. 166 두 분 중에 한 분이 혹시 그게 아직 거기 있는지 확인해 주실 수 있을까요?\n\n켈리 센 [오전 7:18] 안녕하세요, 래니. 164, 165 메인 텐트에 있는 환영 테이블에 팸플릿과 다른 자료들을 갖다 놓는 걸 도우려고 오늘 아침 일찍 자전거를 타고 공원메 왔어요. 그런데 여기는 일을 마무리할 수 있는 다른 자원봉사자들이 있어서 제가 지금 그쪽 입구로 갈 수 있어요.\n\n래니 맥기니스 [오전 7:19] 그러면 좋겠네요. 저는 당분간 공원 반대편에 있는 남쪽 입구에 있을 거라서요. 도시 공원 부서의 담당자들을 만날 예정이에요.\n\n마티유 허먼 [오전 7:21] 제가 할게요, 켈리. 166 방금 북쪽 입구에 도착했으니 여기 걸어 둔 표지판을 내릴게요. 래니, 167 이걸 어떻게 하면 좋을까요?\n\n래니 맥기니스 [오전 7:22] 완벽하네요! 167 메인 텐트에 있는 환영 테이블 뒤에 다른 것들과 함께 두실 수 있을까요? 오늘 중으로 가지러 갈게요. 날짜를 바꿔서 내년에 다시 사용할 수 있어요.\n\n마티유 허먼 [오전 7:23] 그럴게요. 164 성공적인 박람회를 위하여!`
                }
            ],
            questions: [
                {
                    id: "p7-t9-q164",
                    questionNo: 164,
                    text: "What is probably true about the writers?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "They are registering people for a bike-to-work program.",
                        "B": "They are coordinating a public event.",
                        "C": "They work for a city parks department.",
                        "D": "They are members of a club that walks in a park."
                    },
                    correctAnswer: "B",
                    translation: "메시지 작성자들에 대해 사실일 것 같은 것은?",
                    explanation: `7시 16분에 맥기니스 씨가 공원 입구에서 펀페어 사전 등록 표지판을 치웠는데 북문에 있는 하나를 깜빡한 것 같다(removed the Funfair preregistration signs from the park entrances ~ the north gate)고 했고, 7시 18분에 센 씨가 메인 텐트에 있는 환영 테이블에 팸플릿과 다른 자료들을 갖다 놓는 걸 도우려고 오늘 아침 일찍 자전거를 타고 공원에 왔다(rode my bike to the park ~ to help put pamphlets and other materials on the welcome table in the main tent)고 했으며, 7시 23분에 허먼 씨가 성공적인 박람회를 위하여(Here's to a successful fair)라고 했다. 따라서 메시지 작성자들은 공원에서 열리는 펀페어라는 박람회를 준비하고 있다는 것을 알 수 있으므로 (B)가 정답이다.`
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
                    translation: "센 씨가 하고 있던 일은?",
                    explanation: `7시 18분에 센 씨가 메인 텐트에 있는 환영 테이블에 팸플릿과 다른 자료들을 갖다 놓는 걸 도우려고 오늘 아침 일찍 자전거를 타고 공원에 왔다(rode my bike to the park ~ to help put pamphlets and other materials on the welcome table in the main tent)고 했으므로 (C)가 정답이다.`
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
                    translation: "오전 7시 21분에 허먼 씨가 \"제가 할게요, 켈리\"라고 쓴 의도는?",
                    explanation: `7시 16분에 맥기니스 씨가 공원 입구에서 펀페어 사전 등록 표지판을 치웠는데 북문에 있는 하나를 깜빡한 것 같다(removed the Funfair preregistration signs ~ I forgot one at the north gate)며 두 사람 중에 한 사람이 혹시 표지판이 아직 거기 있는지 확인해 줄 수 있을지(Could one of you check to see if it is still there?)를 물었고, 7시 21분에 허먼 씨가 "제가 할게요, 켈리(I've got it, Kelly)"라면서 방금 북쪽 입구에 도착했으니 여기 걸어 둔 표지판을 내리겠다(I just arrived at the north entrance and will take down the sign we hung here)고 했다. 따라서 허먼 씨는 맥기니스 씨가 북문에 있는 표지판이 아직 붙어 있는지 확인해 달라고 한 요청을 수행하겠다는 의도로 한 말임을 알 수 있으므로 (B)가 정답이다.`
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
                    translation: "맥기니스 씨가 허먼 씨에게 하라고 지시한 것은?",
                    explanation: `7시 21분에 허먼 씨가 맥기니스 씨에게 이걸 어떻게 하면 좋을지(what would you like me to do with it?)를 묻자, 7시 22분에 맥기니스 씨가 메인 텐트에 있는 환영 테이블 뒤에 다른 것들과 함께 둘 수 있는지(Can you put it ~ behind the welcome table in the main tent?) 요청하고 있으므로 (D)가 정답이다.`
                }
            ]
        },
        // Questions 168-171: Fact Sheet
        {
            id: "p7-t9-set9",
            questionRange: "168-171",
            passages: [
                {
                    id: "p7-t9-s9-p1",
                    contextType: "P3",
                    docType: "ARTICLE",
                    title: "Zealandia Airlines Fact Sheet for Fiscal Year Ending 30 June",
                    content: `Service Levels and Capacity: Zealandia Airlines provides regional service among four cities. In each case, average flight capacity exceeded the company goal of 85 percent.\n\nOn-Time Performance (OTP): For the purpose of measuring OTP, flights are considered "on time" when they reach their destination within fifteen minutes of the scheduled arrival time. Regional airlines are subject to fines when OTP drops below 50 percent. The following chart shows Zealandia's commendable OTP rates for the recent fiscal year.\n\nCity | OTP\nKelton Falls | 52%\nGrangerton | 68%\nSatcherville | 79%\nBarbour City | 64%\n\nProposed Expansion: Zealandia Airlines provides regional passenger air service and is seeking to expand its fleet to begin providing commercial airfreight delivery. Establishing this service is a component of a five-year growth plan and corporate vision. The airline is currently in negotiations with aviation authorities to explore options.\n\nTerminal and Service Improvements: Zealandia Airlines is participating in discussions with airport management about comprehensive renovations to its passenger lounge and café and has offered to commit $5 million from its budget to the project. Company executives have also finalized a plan and committed funds to overhaul its rewards program. The initiative supports the aim to be a leading service provider among similar airlines and capture an increasing percentage of the market share.`,
                    translation: `6월 30일 종료되는 회계 연도의 질랜디아 항공 보고서\n\n서비스 수준 및 수용력: 질랜디아 항공은 4개 도시 간 지역 서비스를 제공합니다. 각 경우, 평균 항공 수용량이 회사 목표인 85퍼센트를 168 넘었습니다.\n\n169 정시 실적(OTP): 정시 실적을 측정하기 위해 항공편이 예정된 도착 시간으로부터 15분 이내에 목적지에 도착하면 "정시에 온" 것으로 간주합니다. 지역 항공사는 OTP가 50퍼센트 미만으로 떨어질 경우 벌금이 부과됩니다. 169 다음 차트는 최근 회계 연도에 있어 질랜디아의 칭찬받을 만한 OTP율을 보여줍니다.\n\n도시 | OTP\n켈턴폴스 | 52퍼센트\n그랜저턴 | 68퍼센트\n새처빌 | 79퍼센트\n바버시티 | 64퍼센트\n\n확장 제안: 170 질랜디아 항공은 지역 승객들에게 항공 서비스를 제공하며, 상업용 항공 화물 배송을 시작하기 위해 항공기 보유 대수를 늘리고자 합니다. 이 서비스를 구축하는 일은 항공사의 성장 계획 및 기업 비전의 한 요소입니다. 항공사는 현재 관계 당국과 옵션을 모색하기 위해 협상 중입니다.\n\n터미널 및 서비스 개선: 171 질랜디아 항공은 공항 경영진과 승객 라운지 및 카페의 종합적인 개조와 관련한 논의에 참여 중이며, 예산 중에서 500만 달러를 프로젝트에 투입하겠다고 제안했습니다. 회사 경영진은 또한 계획을 마무리 짓고 보상 프로그램을 개편하기 위한 자금을 투입했습니다. 이 계획은 유사한 항공사들 사이에서 선도적인 서비스 제공 업체가 되고 시장 점유율을 높이고자 하는 목표를 지원합니다.`
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
                    translation: "첫 번째 단락 2행의 \"exceeded\"와 의미가 가장 가까운 단어는?",
                    explanation: `의미상 회사 목표인 85퍼센트를 '넘어섰다'는 뜻으로 쓰였으므로 '(범위·한계점 등을) 넘었다, 초월했다'라는 뜻의 (A) surpassed가 정답이다.`
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
                    translation: "보고서에 따르면, 질랜디아 항공에 대해 사실인 것은?",
                    explanation: `두 번째 단락의 첫 문장에서 정시 실적(OTP)(On-Time Performance)을 설명하며, 정시 실적을 측정하기 위해 항공편이 예정된 도착 시간으로부터 15분 이내에 목적지에 도착하면 '정시에 온' 것으로 간주한다(For the purpose of measuring OTP, flights are considered "on time" when they reach their destination ~ scheduled arrival time)고 했다. 세 번째 문장에서 다음 차트는 최근 회계 연도에 있어 질랜디아의 칭찬받을 만한 OTP율을 보여준다(The following chart shows Zealandia's commendable OTP rates for the recent fiscal year)고 했으며, 차트에 따르면 도시별 OTP가 52퍼센트, 68퍼센트, 79퍼센트, 64퍼센트로 모두 50퍼센트를 넘었음을 알 수 있다. 따라서 질랜디아 항공은 대부분의 항공편이 정시에 목적지에 도착하고 있다는 것을 알 수 있으므로 (B)가 정답이다.`
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
                    translation: "질랜디아 항공이 향후 제공하기를 원하는 것은?",
                    explanation: `세 번째 단락의 첫 문장에서 질랜디아 항공은 지역 승객들에게 항공 서비스를 제공하며 상업용 항공 화물 배송을 시작하기 위해 항공기 보유 대수를 늘리고자 한다(Zealandia Airlines provides ~ is seeking to expand its fleet to begin providing commercial airfreight delivery)고 했으므로 앞으로 상업용 운송 서비스를 제공할 계획임을 알 수 있다. 따라서 (C)가 정답이다.`
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
                    translation: "질랜디아 항공은 승객을 위한 서비스를 어떻게 개선하기를 바라는가?",
                    explanation: `네 번째 단락의 첫 문장에서 질랜디아 항공은 공항 경영진과 승객 라운지 및 카페의 종합적인 개조와 관련한 논의에 참여 중이며, 예산 중에서 500만 달러를 프로젝트에 투입하겠다고 제안했다(Zealandia Airlines is participating in discussions with airport management about comprehensive renovations to its passenger lounge and café ~ budget to the project)고 했다. 따라서 승객 라운지 및 카페, 즉 승객 대기 장소를 개조하여 서비스를 개선할 계획임을 알 수 있으므로 (A)가 정답이다.`
                }
            ]
        },
        // Questions 172-175: Press Release
        {
            id: "p7-t9-set10",
            questionRange: "172-175",
            passages: [
                {
                    id: "p7-t9-s10-p1",
                    contextType: "P3",
                    docType: "ARTICLE",
                    title: "New Fleet for Northeast Railways",
                    content: `Northeast Railways expects to spend $5.6 billion to replace its fleet of 65 passenger trains, many of which are more than 40 years old. — [1] —.\n\nThe company has entered into a contract with Logiens Transport for a new fleet of trains that will operate on electrified tracks when those track systems are available and on diesel fuel at all other times. — [2] —. The trains will be capable of traveling at speeds of up to 130 kilometers per hour and will produce far less pollution than the current fleet does.\n\nLogiens also promises an enhanced passenger experience. The train cars will have panoramic windows, improved ventilation, and wider aisles. — [3] —.\n\nNortheast's contract with Logiens also includes equipment and replacement parts and provides a long-term service agreement. — [4] —.`,
                    translation: `동북 철도의 새로운 열차\n\n173 동북 철도는 65대의 여객 열차를 교체하는 데 56억 달러를 지출할 것으로 예상하고 있으며, 이 열차 중 다수는 40년 이상 되었습니다. — [1] —.\n\n172, 174 회사는 로지언스 운송과 새로운 열차 차량에 대한 계약을 맺었으며, 이 열차는 전동 선로 시스템을 이용할 수 있을 때는 그 위에서 운행하고 그 외에는 경유로 운행할 예정입니다. — [2] —. 이 열차들은 최대 시속 130킬로미터의 속도로 운행할 수 있으며 현재 열차보다 훨씬 적은 공해를 배출할 것입니다.\n\n로지언스는 또한 향상된 승객 경험을 약속합니다. 175 열차는 파노라마 창, 개선된 환기구, 그리고 더 넓은 통로를 갖출 것입니다. — [3] —.\n\n또한 172 동북 철도와 로지언스의 계약에는 장비 및 교체 부품이 포함되며 장기 정비 서비스 계약을 제공합니다. — [4] —.`
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
                    translation: "로지언스 운송의 역할은?",
                    explanation: `두 번째 단락의 첫 문장에서 회사는 로지언스 운송과 새로운 열차 차량에 대한 계약을 맺었다(The company has entered into a contract with Logiens Transport for a new fleet of trains)고 했고, 마지막 단락에서 동북 철도와 로지언스의 계약에는 장비 및 교체 부품이 포함되며 장기 정비 서비스 계약을 제공한다(Northeast's contract with Logiens also includes equipment and replacement parts and provides a long-term service agreement)고 했다. 따라서 로지언스 운송은 열차를 생산하고 사후 관리 서비스까지 제공하는 업체라는 것을 알 수 있으므로 (D)가 정답이다.`
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
                    translation: "보도 자료에 포함된 내용은?",
                    explanation: `첫 문장에서 동북 철도는 65대의 여객 열차를 교체하는 데 56억 달러를 지출할 것으로 예상하고 있다(Northeast Railways expects to spend $5.6 billion to replace its fleet of 65 passenger trains)고 했으므로 (B)가 정답이다.`
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
                    translation: "동북 철도가 이용하는 선로에 대해 암시된 것은?",
                    explanation: `두 번째 단락의 첫 문장에서 회사는 로지언스 운송과 새로운 열차 차량에 대한 계약을 맺었으며, 이 열차는 전동 선로 시스템을 이용할 수 있을 때는 그 위에서 운행하고 그 외에는 경유로 운행할 예정(The company has entered into a contract with Logiens Transport for a new fleet of trains that will operate on electrified tracks when those track systems are available and on diesel fuel at all other times)이라고 한 것으로 보아 동북 철도가 이용하는 선로 중 일부는 아직 전동 주행이 불가능하다는 것을 알 수 있으므로 (D)가 정답이다.`
                },
                {
                    id: "p7-t9-q175",
                    questionNo: 175,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"Each reclinable seat will have an individual power outlet and a USB port.\"",
                    classification: "P7_INSERTION",

                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "C",
                    translation: "[1], [2], [3], [4]로 표시된 위치 중에서 다음 문장이 들어가기에 가장 적절한 곳은?",
                    explanation: `주어진 문장에서 리클라인 좌석(Each reclinable seat)에는 개별 전원 공급 장치 및 USB 포트가 있을 것이라고 특정 품목에 갖추어질 편의성을 설명하고 있다. 따라서 이 문장은 파노라마 창, 개선된 환기구, 더 넓은 통로(panoramic windows, improved ventilation, and wider aisles) 등 새로운 열차에 포함될 승객 편의 시설을 열거한 문장 뒤에 연결하면 자연스러우므로 (C)가 정답이다.`
                }
            ]
        }
    ]
};
