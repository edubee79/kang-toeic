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
                    options: {
                        "A": "A soup",
                        "B": "Carrots",
                        "C": "Tomatoes",
                        "D": "A beverage"
                    },
                    correctAnswer: "A",
                    classification: "P7_DETAIL",
                    translation: "각각의 런치 스페셜 메뉴에 포함된 것은?",
                    explanation: `두 번째 줄에서 '단돈 8달러에 오늘의 수프를 다음 음식 항목 중 하나와 함께 드세요(For only $8, combine the soup of the day with one of the following items)'라고 했다. 따라서 런치 스페셜 메뉴에 수프가 제공된다는 것을 알 수 있으므로 (A)가 정답이다.`
                },
                {
                    id: "p7-t9-q148",
                    questionNo: 148,
                    text: "What item contains an ingredient that is only available from Carina's Café?",
                    options: {
                        "A": "Turkey sandwich",
                        "B": "Vegetable panini",
                        "C": "Mushroom chicken cavatappi",
                        "D": "Vegetable wrap"
                    },
                    correctAnswer: "D",
                    classification: "P7_INFERENCE",
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
                    options: {
                        "A": "find",
                        "B": "create",
                        "C": "draw",
                        "D": "name"
                    },
                    correctAnswer: "B",
                    classification: "P7_VOCABULARY",
                    translation: "'design'과 의미가 가장 가까운 것은?",
                    explanation: `이 워크숍은 도전적이고 효과적인 수중 수업을 설계하는(design) 방법을 시연함으로써 피트니스 전문가들이 공인 아쿠아 강사가 되도록 도와 드립니다(This workshop helps fitness professionals become certified aqua instructors by providing them with the skills to design challenging and effective aquatic classes)라고 했다. 여기서 design은 도전적이고 효과적인 수중 수업을 '설장하거나 계획하다'라는 의미로 쓰였으므로 '창조하다'는 뜻인 (B) create가 정답이다.`
                },
                {
                    id: "p7-t9-q150",
                    questionNo: 150,
                    text: "What is indicated about the workshop?",
                    options: {
                        "A": "It will be held at a pool at Wilkinson University.",
                        "B": "It is being offered on two different dates.",
                        "C": "It is available at a discounted rate in August.",
                        "D": "It will be taught by a former student of Valley Floor Fitness."
                    },
                    correctAnswer: "D",
                    classification: "P7_INFERENCE",
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
                    options: {
                        "A": "She prefers working morning hours.",
                        "B": "She can fulfill Jo Hyun-jun's request.",
                        "C": "She will attend a medical conference.",
                        "D": "She wants to meet Jo Hyun-jun's friend."
                    },
                    correctAnswer: "B",
                    classification: "P7_INFERENCE",
                    translation: "오후 3시 29분에 두쉬인 씨가 \"토요일 괜찮아요\"라고 쓴 의도는?",
                    explanation: `3시 27분에 조 씨가 토요일 오전 7시부터 오후 3시까지 프런트에서 근무하기로 되어 있다(I'm scheduled to work the front desk on Saturday from 7 A.M. to 3 P.M.)고 했고, 두쉬인 씨에게 근무 시간을 바꿔 줄 수 있을지 궁금하다(I was wondering if I could switch shifts with you)면서 일요일에 근무할 수 있다(I can work on Sunday)고 하자 3시 29분에 두쉬인 씨가 토요일 괜찮다(Saturday is good for me)고 대답했다. 따라서 두쉬인 씨는 조 씨의 부탁을 들어주려고 한 제안을 수락하려는 의도로 한 말임을 알 수 있으므로 (B)가 정답이다.`
                },
                {
                    id: "p7-t9-q152",
                    questionNo: 152,
                    text: "Where do Jo Hyun-jun and Ms. Touzin most likely work?",
                    options: {
                        "A": "At a hotel",
                        "B": "At a university",
                        "C": "At a medical center",
                        "D": "At an accounting firm"
                    },
                    correctAnswer: "A",
                    classification: "P7_INFERENCE",
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
                    options: {
                        "A": "He used to work with Ms. Navas.",
                        "B": "He is an associate manager.",
                        "C": "Another company wishes to hire him.",
                        "D": "His interview has been scheduled for next week."
                    },
                    correctAnswer: "C",
                    classification: "P7_DETAIL",
                    translation: "존스 씨가 이메일에 명시한 것은?",
                    explanation: `두 번째 문장에서 존스 씨가 다른 회사로부터 일자리 제안을 받았다는 점을 알려드리고자 하며, 그 채용 담당자에게 곧 답변을 해야 한다(I wanted to let you know that I have received a job offer from another company, and I have to respond to that hiring manager soon)고 했으므로 (C)가 정답이다.`
                },
                {
                    id: "p7-t9-q154",
                    questionNo: 154,
                    text: "What does Mr. Jones want to know by the end of the week?",
                    options: {
                        "A": "Whether an important decision has been made yet",
                        "B": "Whether Ms. Navas is available for a meeting",
                        "C": "Whether Ms. Navas would like to apply for a new position",
                        "D": "Whether the company will expand its product offerings"
                    },
                    correctAnswer: "A",
                    classification: "P7_INFERENCE",
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
                    options: {
                        "A": "Construction materials",
                        "B": "Pillows and sheets",
                        "C": "Wholesale food items",
                        "D": "Spare automobile parts"
                    },
                    correctAnswer: "A",
                    classification: "P7_INFERENCE",
                    translation: "히비스커스 서플라이가 판매할 것 같은 제품은?",
                    explanation: `두 번째 단락의 첫 문장에서 국내 최대 주택 건설용품 수입업체 중 하나로서 히비스커스 서플라이는 특히 이 문제에 취약하다(As one of the biggest exporters of home building supplies in the country, Hibiscus Supply is ~ issues)고 했으므로 히비스커스 서플라이는 주택 건설용품을 취급하는 업체임을 알 수 있다. 따라서 (A)가 정답이다.`
                },
                {
                    id: "p7-t9-q156",
                    questionNo: 156,
                    text: "Why does Hibiscus Supply want to operate its own container ship?",
                    options: {
                        "A": "To provide shipping services to other companies",
                        "B": "To ship its products quickly and cheaply",
                        "C": "To deliver its products to unusual locations",
                        "D": "To ship more goods than most freight companies can handle"
                    },
                    correctAnswer: "B",
                    classification: "P7_INFERENCE",
                    translation: "히비스커스 서플라이가 자체 컨테이너선을 운영하고자 하는 이유는?",
                    explanation: `세 번째 단락의 첫 문장에서 히비스커스 서플라이의 제임스 고 사장에 따르면, 회사 자체 선박을 운영하는 것은 항구에서의 효율성을 높이고 전반적인 운송 비용을 줄여 줄 것(According to Hibiscus Supply ~ operating the company's own ship should improve efficiency at ports and decrease overall shipping costs)이라고 했다. 따라서 히비스커스 서플라이가 자체 선박을 운영하려는 이유는 효율적이고 저렴한 운송을 위한 것이므로 (B)가 정답이다.`
                },
                {
                    id: "p7-t9-q157",
                    questionNo: 157,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"The newly acquired ship is scheduled to begin running later this month.\"",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "D",
                    classification: "P7_SENTENCE_INSERTION",
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
                    options: {
                        "A": "To invite employees to an office party",
                        "B": "To announce a change to an employee's job",
                        "C": "To inform employees about a reduction in work hours",
                        "D": "To request employee feedback on a departmental policy"
                    },
                    correctAnswer: "B",
                    classification: "P7_PURPOSE",
                    translation: "스노 씨가 회람을 보낸 이유는?",
                    explanation: `첫 문장에서 스노 씨가 페드로 아옌데가 회계부에서 전임 행정 보조원으로서 새로운 역할을 맡기 위해 준비하고 있으니 함께 축하해 달라(Please join me in congratulating Pedro Allende as he prepares to enter his new role as a full-time administrative assistant in our accounting department)고 한 것으로 보아 페드로 아옌데라는 직원의 업무가 바뀌는 것을 알리기 위해 회람을 보낸 것이므로 (B)가 정답이다.`
                },
                {
                    id: "p7-t9-q159",
                    questionNo: 159,
                    text: "The word \"prepares\" in paragraph 1, line 1, is closest in meaning to",
                    options: {
                        "A": "assembles",
                        "B": "returns",
                        "C": "reaches out",
                        "D": "gets ready"
                    },
                    correctAnswer: "D",
                    classification: "P7_VOCABULARY",
                    translation: "첫 번째 단락 1행의 \"prepares\"와 의미가 가장 가까운 단어는?",
                    explanation: `의미상 새 역할을 맡기 위해 '준비하고 있다'라는 뜻으로 쓰였으므로 '준비하다'를 뜻하는 (D) gets ready가 정답이다.`
                },
                {
                    id: "p7-t9-q160",
                    questionNo: 160,
                    text: "What is indicated about Mr. Allende?",
                    options: {
                        "A": "He currently works as a delivery driver.",
                        "B": "He recently completed a training program.",
                        "C": "He previously assisted Ms. Snow in a different department.",
                        "D": "He will begin working part-time next week."
                    },
                    correctAnswer: "B",
                    classification: "P7_INFERENCE",
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
                    options: {
                        "A": "A land developer",
                        "B": "A car-repair shop",
                        "C": "A factory",
                        "D": "A hardware store"
                    },
                    correctAnswer: "C",
                    classification: "P7_INFERENCE",
                    translation: "광고를 게재한 업체의 종류는?",
                    explanation: `첫 문장에서 뉴질랜드 네이피어의 캐널리 사에 다양한 산업을 위한 맞춤형 공구 및 기계 부품을 생산하는 15,000평방미터 규모의 제조 공장에서 근무할 숙련된 기계 기술자를 위한 일자리가 있다(Cainerley Corp. of Napier, New Zealand, has ~ fabrication plant, which produces custom tools and machine parts for a variety of industries)고 했다. 따라서 광고를 낸 캐널리 사는 공구 및 기계 부품을 생산하는 공장을 운영하는 업체임을 알 수 있으므로 (C)가 정답이다.`
                },
                {
                    id: "p7-t9-q162",
                    questionNo: 162,
                    text: "What material is NOT specified in the advertisement?",
                    options: {
                        "A": "Metal",
                        "B": "Glass",
                        "C": "Wood",
                        "D": "Plastic"
                    },
                    correctAnswer: "B",
                    classification: "P7_DETAIL",
                    translation: "광고에 명시된 재료가 아닌 것은?",
                    explanation: `직책에 필요한 네 번째 요건에서 금속, 목재 및 플라스틱과 같은 다양한 재료를 편하게 다룰 수 있는 능력(Comfort working with metal and various other materials, such as wood and plastics)을 명시하고 있고, 유리는 언급된 적이 없으므로 (B)가 정답이다.`
                },
                {
                    id: "p7-t9-q163",
                    questionNo: 163,
                    text: "What is listed as a requirement for the job?",
                    options: {
                        "A": "Training in business-to-business sales",
                        "B": "A university degree in engineering",
                        "C": "Experience creating technical drawings",
                        "D": "The ability to work alone and with others"
                    },
                    correctAnswer: "D",
                    classification: "P7_DETAIL",
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
                    translation: `래니 맥기니스 [오전 7:16] 좋은 아침입니다, 켈리 그리고 마티유. 164, 166 제가 공원 입구에서 펀페어 사전 등록 표지판을 치웠는데 북문에 있는 하나를 깜빡한 것 같아요. 166 두 분 중에 한 분이 혹시 그게 아직 거기 있는지 확인해 주실 수 있을까요?\n\n켈리 센 [오전 7:18] 안녕하세요, 래니. 164, 165 메인 텐트에 있는 환영 테이블에 팸플릿과 다른 자료들을 갖다 놓는 걸 도우려고 오늘 아침 일찍 자전거를 타고 공원에 왔어요. 그런데 여기는 일을 마무리할 수 있는 다른 자원봉사자들이 있어서 제가 지금 그쪽 입구로 갈 수 있어요.\n\n래니 맥기니스 [오전 7:19] 그러면 좋겠네요. 저는 당분간 공원 반대편에 있는 남쪽 입구에 있을 거라서요. 도시 공원 부서의 담당자들을 만날 예정이에요.\n\n마티유 허먼 [오전 7:21] 제가 할게요, 켈리. 166 방금 북쪽 입구에 도착했으니 여기 걸어 둔 표지판을 내릴게요. 래니, 167 이걸 어떻게 하면 좋을까요?\n\n래니 맥기니스 [오전 7:22] 완벽하네요! 167 메인 텐트에 있는 환영 테이블 뒤에 다른 것들과 함께 두실 수 있을까요? 오늘 중으로 가지러 갈게요. 날짜를 바꿔서 내년에 다시 사용할 수 있어요.\n\n마티유 허먼 [오전 7:23] 그럴게요. 164 성공적인 박람회를 위하여!`
                }
            ],
            questions: [
                {
                    id: "p7-t9-q164",
                    questionNo: 164,
                    text: "What is probably true about the writers?",
                    options: {
                        "A": "They are registering people for a bike-to-work program.",
                        "B": "They are coordinating a public event.",
                        "C": "They work for a city parks department.",
                        "D": "They are members of a club that walks in a park."
                    },
                    correctAnswer: "B",
                    classification: "P7_INFERENCE",
                    translation: "메시지 작성자들에 대해 사실일 것 같은 것은?",
                    explanation: `7시 16분에 맥기니스 씨가 공원 입구에서 펀페어 사전 등록 표지판을 치웠는데 북문에 있는 하나를 깜빡한 것 같다(removed the Funfair preregistration signs from the park entrances ~ the north gate)고 했고, 7시 18분에 센 씨가 메인 텐트에 있는 환영 테이블에 팸플릿과 다른 자료들을 갖다 놓는 걸 도우려고 오늘 아침 일찍 자전거를 타고 공원에 왔다(rode my bike to the park ~ to help put pamphlets and other materials on the welcome table in the main tent)고 했으며, 7시 23분에 허먼 씨가 성공적인 박람회를 위하여(Here's to a successful fair)라고 했다. 따라서 메시지 작성자들은 공원에서 열리는 펀페어라는 박람회를 준비하고 있다는 것을 알 수 있으므로 (B)가 정답이다.`
                },
                {
                    id: "p7-t9-q165",
                    questionNo: 165,
                    text: "What was Ms. Sen doing?",
                    options: {
                        "A": "Erecting a tent",
                        "B": "Designing pamphlets",
                        "C": "Placing items on the welcome table",
                        "D": "Attaching signs to the park entrance"
                    },
                    correctAnswer: "C",
                    classification: "P7_DETAIL",
                    translation: "센 씨가 하고 있던 일은?",
                    explanation: `7시 18분에 센 씨가 메인 텐트에 있는 환영 테이블에 팸플릿과 다른 자료들을 갖다 놓는 걸 도우려고 오늘 아침 일찍 자전거를 타고 공원에 왔다(rode my bike to the park ~ to help put pamphlets and other materials on the welcome table in the main tent)고 했으므로 (C)가 정답이다.`
                },
                {
                    id: "p7-t9-q166",
                    questionNo: 166,
                    text: "At 7:21 A.M., what does Mr. Herman mean when he writes, \"I've got it, Kelly\"?",
                    options: {
                        "A": "He has already taken down a sign.",
                        "B": "He will perform a task requested by Ms. McGinnis.",
                        "C": "He will return unused materials to the office.",
                        "D": "He realizes that Ms. Sen does not need help."
                    },
                    correctAnswer: "B",
                    classification: "P7_INFERENCE",
                    translation: "오전 7시 21분에 허먼 씨가 \"제가 할게요, 켈리\"라고 쓴 의도는?",
                    explanation: `7시 16분에 맥기니스 씨가 공원 입구에서 펀페어 사전 등록 표지판을 치웠는데 북문에 있는 하나를 깜빡한 것 같다(removed the Funfair preregistration signs ~ I forgot one at the north gate)며 두 사람 중에 한 사람이 혹시 표지판이 아직 거기 있는지 확인해 줄 수 있을지(Could one of you check to see if it is still there?)를 물었고, 7시 21분에 허먼 씨가 "제가 할게요, 켈리(I've got it, Kelly)"라면서 방금 북쪽 입구에 도착했으니 여기 걸어 둔 표지판을 내리겠다(I just arrived at the north entrance and will take down the sign we hung here)고 했다. 따라서 허먼 씨는 맥기니스 씨가 북문에 있는 표지판이 아직 붙어 있는지 확인해 달라고 한 요청을 수행하겠다는 의도로 한 말임을 알 수 있으므로 (B)가 정답이다.`
                },
                {
                    id: "p7-t9-q167",
                    questionNo: 167,
                    text: "What does Ms. McGinnis instruct Mr. Herman to do?",
                    options: {
                        "A": "Help her locate the main tent",
                        "B": "Meet her at the south entrance",
                        "C": "Write down the participants' information",
                        "D": "Leave an object behind the welcome table"
                    },
                    correctAnswer: "D",
                    classification: "P7_DETAIL",
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
                    options: {
                        "A": "surpassed",
                        "B": "excelled",
                        "C": "perfected",
                        "D": "decided"
                    },
                    correctAnswer: "A",
                    classification: "P7_VOCABULARY",
                    translation: "첫 번째 단락 2행의 \"exceeded\"와 의미가 가장 가까운 단어는?",
                    explanation: `의미상 회사 목표인 85퍼센트를 '넘어섰다'는 뜻으로 쓰였으므로 '(범위·한계점 등을) 넘었다, 초월했다'라는 뜻의 (A) surpassed가 정답이다.`
                },
                {
                    id: "p7-t9-q169",
                    questionNo: 169,
                    text: "According to the fact sheet, what is true about Zealandia Airlines?",
                    options: {
                        "A": "Executives aim to improve its flight capacity.",
                        "B": "Most of its flights arrive at their destinations on time.",
                        "C": "It is larger than 85 percent of regional airlines.",
                        "D": "It has received a fine from aviation authorities."
                    },
                    correctAnswer: "B",
                    classification: "P7_INFERENCE",
                    translation: "보고서에 따르면, 질랜디아 항공에 대해 사실인 것은?",
                    explanation: `두 번째 단락의 첫 문장에서 정시 실적(OTP)(On-Time Performance)을 설명하며, 정시 실적을 측정하기 위해 항공편이 예정된 도착 시간으로부터 15분 이내에 목적지에 도착하면 '정시에 온' 것으로 간주한다(For the purpose of measuring OTP, flights are considered "on time" when they reach their destination ~ scheduled arrival time)고 했다. 세 번째 문장에서 다음 차트는 최근 회계 연도에 있어 질랜디아의 칭찬받을 만한 OTP율을 보여준다(The following chart shows Zealandia's commendable OTP rates for the recent fiscal year)고 했으며, 차트에 따르면 도시별 OTP가 52퍼센트, 68퍼센트, 79퍼센트, 64퍼센트로 모두 50퍼센트를 넘었음을 알 수 있다. 따라서 질랜디아 항공은 대부분의 항공편이 정시에 목적지에 도착하고 있다는 것을 알 수 있으므로 (B)가 정답이다.`
                },
                {
                    id: "p7-t9-q170",
                    questionNo: 170,
                    text: "What does Zealandia Airlines want to provide in the future?",
                    options: {
                        "A": "Private charter flights",
                        "B": "Luxury travel tours",
                        "C": "Commercial shipping",
                        "D": "Aircraft leasing"
                    },
                    correctAnswer: "C",
                    classification: "P7_INFERENCE",
                    translation: "질랜디아 항공이 향후 제공하기를 원하는 것은?",
                    explanation: `세 번째 단락의 첫 문장에서 질랜디아 항공은 지역 승객들에게 항공 서비스를 제공하며 상업용 항공 화물 배송을 시작하기 위해 항공기 보유 대수를 늘리고자 한다(Zealandia Airlines provides ~ is seeking to expand its fleet to begin providing commercial airfreight delivery)고 했으므로 앞으로 상업용 운송 서비스를 제공할 계획임을 알 수 있다. 따라서 (C)가 정답이다.`
                },
                {
                    id: "p7-t9-q171",
                    questionNo: 171,
                    text: "How does Zealandia Airlines hope to improve service for passengers?",
                    options: {
                        "A": "By remodeling the passenger waiting area",
                        "B": "By moving to a new location within the terminal",
                        "C": "By upgrading the seating inside the aircraft",
                        "D": "By offering improved meal service on all flights"
                    },
                    correctAnswer: "A",
                    classification: "P7_INFERENCE",
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
                    options: {
                        "A": "To recommend ways to reduce pollution",
                        "B": "To acquire financing for a purchase",
                        "C": "To familiarize train engineers with new technology",
                        "D": "To manufacture and service the replacement fleet"
                    },
                    correctAnswer: "D",
                    classification: "P7_INFERENCE",
                    translation: "로지언스 운송의 역할은?",
                    explanation: `두 번째 단락의 첫 문장에서 회사는 로지언스 운송과 새로운 열차 차량에 대한 계약을 맺었다(The company has entered into a contract with Logiens Transport for a new fleet of trains)고 했고, 마지막 단락에서 동북 철도와 로지언스의 계약에는 장비 및 교체 부품이 포함되며 장기 정비 서비스 계약을 제공한다(Northeast's contract with Logiens also includes equipment and replacement parts and provides a long-term service agreement)고 했다. 따라서 로지언스 운송은 열차를 생산하고 사후 관리 서비스까지 제공하는 업체라는 것을 알 수 있으므로 (D)가 정답이다.`
                },
                {
                    id: "p7-t9-q173",
                    questionNo: 173,
                    text: "What information is included in the press release?",
                    options: {
                        "A": "The date on which the trains will be delivered",
                        "B": "The budget for replacing the current trains",
                        "C": "The annual cost for parts and service",
                        "D": "The number of passenger seats in each train car"
                    },
                    correctAnswer: "B",
                    classification: "P7_DETAIL",
                    translation: "보도 자료에 포함된 내용은?",
                    explanation: `첫 문장에서 동북 철도는 65대의 여객 열차를 교체하는 데 56억 달러를 지출할 것으로 예상하고 있다(Northeast Railways expects to spend $5.6 billion to replace its fleet of 65 passenger trains)고 했으므로 (B)가 정답이다.`
                },
                {
                    id: "p7-t9-q174",
                    questionNo: 174,
                    text: "What is suggested about the tracks that Northeast Railways uses?",
                    options: {
                        "A": "They are owned by the government.",
                        "B": "They are not shared with freight trains.",
                        "C": "Most are in urgent need of repair.",
                        "D": "Some are not electrified."
                    },
                    correctAnswer: "D",
                    classification: "P7_INFERENCE",
                    translation: "동북 철도가 이용하는 선로에 대해 암시된 것은?",
                    explanation: `두 번째 단락의 첫 문장에서 회사는 로지언스 운송과 새로운 열차 차량에 대한 계약을 맺었으며, 이 열차는 전동 선로 시스템을 이용할 수 있을 때는 그 위에서 운행하고 그 외에는 경유로 운행할 예정(The company has entered into a contract with Logiens Transport for a new fleet of trains that will operate on electrified tracks when those track systems are available and on diesel fuel at all other times)이라고 한 것으로 보아 동북 철도가 이용하는 선로 중 일부는 아직 전동 주행이 불가능하다는 것을 알 수 있으므로 (D)가 정답이다.`
                },
                {
                    id: "p7-t9-q175",
                    questionNo: 175,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\n\"Each reclinable seat will have an individual power outlet and a USB port.\"",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "C",
                    classification: "P7_SENTENCE_INSERTION",
                    translation: "[1], [2], [3], [4]로 표시된 위치 중에서 다음 문장이 들어가기에 가장 적절한 곳은?",
                    explanation: `주어진 문장에서 리클라인 좌석(Each reclinable seat)에는 개별 전원 공급 장치 및 USB 포트가 있을 것이라고 특정 품목에 갖추어질 편의성을 설명하고 있다. 따라서 이 문장은 파노라마 창, 개선된 환기구, 더 넓은 통로(panoramic windows, improved ventilation, and wider aisles) 등 새로운 열차에 포함될 승객 편의 시설을 열거한 문장 뒤에 연결하면 자연스러우므로 (C)가 정답이다.`
                }
            ]
        },
        // Questions 176-180: Double Passage
        {
            id: "p7-t9-set11",
            questionRange: "176-180",
            setType: "Double",
            passages: [
                {
                    id: "p7-t9-s11-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    content: `To: headquartersstaff@seonwulawfirm.com\nFrom: iqalandar@seonwulawfirm.com\nDate: October 1, 9:39 A.M.\nSubject: Remote work setup\nAttachment: Equipment request form\n\nDear Associates,\n\nOn December 3, our headquarters will close for a month for renovation. As all of you normally work out of these offices in San Francisco, please plan to work off-site and collect everything you may need (your laptop, files, etc.) before December 1. Entry to the building will be restricted after that date.\n\nIf you would like a temporary space at our San Jose offices, please e-mail me, and I will reserve one for you. If you plan to work from home and need additional equipment (such as a printer), fill out the attached form from our technology department and return it to me. A representative of that department will mail the equipment to your home address.\n\nWe realize this work on the building is a disruption, but timing it with our slow season should make the situation easier. We think you will be happy with the changes when the building reopens on January 5. If you have any questions, please reach out to me.\n\nBest,\n\nIan Qalandar, Manager\nSeonwu Law Firm\n(415) 555-0177`
                },
                {
                    id: "p7-t9-s11-p2",
                    contextType: "P5",
                    docType: "FORM",
                    title: "Seonwu Law Firm—Equipment Request Form",
                    content: `Employee name: Jason Kang\nEmployee ID: 102899\nE-mail: jkang@seonwulawfirm.com\nDate to receive: November 30\nEquipment: desktop monitor, printer\n\nEmployee Signature: ____________________ Date: ____________________\n\n(This section is to be completed by the technology department.)\nRequest completed: [x] Yes  [ ] No\nRequest filled by: Aubrey Smith\nEquipment serial numbers: VN3902556, MXE96400\nDate sent: November 27 via overnight mail`
                }
            ],
            questions: [
                {
                    id: "p7-t9-q176",
                    questionNo: 176,
                    text: "What is indicated about Seonwu Law Firm?",
                    options: {
                        "A": "It focuses on real estate law.",
                        "B": "It has a large advertising budget.",
                        "C": "It serves clients across the country.",
                        "D": "It is headquartered in San Francisco."
                    },
                    correctAnswer: "D",
                    classification: "P7_DETAIL",
                    explanation: "이메일에서 San Francisco에 있는 본사 사무실이 언급되어 있습니다. 정답은 (D) \"San Francisco에 본사가 있다\"입니다."
                },
                {
                    id: "p7-t9-q177",
                    questionNo: 177,
                    text: "According to the e-mail, what will the technology department do?",
                    options: {
                        "A": "Install updates on employee laptops",
                        "B": "Send office equipment to employees",
                        "C": "Train employees to use new software",
                        "D": "Place equipment in renovated offices"
                    },
                    correctAnswer: "B",
                    classification: "P7_DETAIL",
                    explanation: "이메일에서 기술 부서 담당자가 장비를 직원의 집 주소로 우편으로 보낼 것이라고 했습니다. 정답은 (B) \"직원에게 사무 장비 발송\"입니다."
                },
                {
                    id: "p7-t9-q178",
                    questionNo: 178,
                    text: "What is suggested in the e-mail about Seonwu Law Firm?",
                    options: {
                        "A": "It plans to expand its operations.",
                        "B": "It mostly employs remote workers.",
                        "C": "It is usually not busy in December.",
                        "D": "It handles many high-profile cases."
                    },
                    correctAnswer: "C",
                    classification: "P7_INFERENCE",
                    explanation: "이메일에서 건물 작업을 비수기와 맞춰 진행하면 상황이 더 쉬워질 것이라고 언급했습니다. 정답은 (C) \"12월에는 보통 바쁘지 않다\"입니다."
                },
                {
                    id: "p7-t9-q179",
                    questionNo: 179,
                    text: "What can be concluded about Mr. Kang?",
                    options: {
                        "A": "He chose not to work in the San Jose office.",
                        "B": "He is a senior partner at the Seonwu Law Firm.",
                        "C": "He will be on vacation after November.",
                        "D": "He has requested a larger office."
                    },
                    correctAnswer: "A",
                    classification: "P7_INFERENCE",
                    explanation: "Mr. Kang은 집에서 일하기 위한 장비를 요청했으므로 San Jose 사무실에서 일하지 않기로 선택했습니다. 정답은 (A)입니다."
                },
                {
                    id: "p7-t9-q180",
                    questionNo: 180,
                    text: "What most likely is Ms. Smith's occupation?",
                    options: {
                        "A": "Lawyer",
                        "B": "Office manager",
                        "C": "Technical support staff",
                        "D": "Administrative assistant"
                    },
                    correctAnswer: "C",
                    classification: "P7_INFERENCE",
                    explanation: "양식에서 Ms. Smith(Aubrey Smith)가 기술 부서에서 요청을 처리했다고 명시되어 있습니다. 정답은 (C) \"기술 지원 직원\"입니다."
                }
            ]
        },
        // Questions 181-185: Double Passage
        {
            id: "p7-t9-set12",
            questionRange: "181-185",
            setType: "Double",
            passages: [
                {
                    id: "p7-t9-s12-p1",
                    contextType: "P3",
                    docType: "ARTICLE",
                    title: "Planning a Tour of Your Facility",
                    content: `by Didiane Lessard\n\nPlant tours are commonplace in many factories, but not all tours are as effective as they could be. Too many companies make the mistake of adopting a one-size-fits-all approach rather than tailoring tours to maximize their usefulness. A potential investor and a casual tourist will probably not be impressed by the same things, so it is best to be clear about the tour's purpose early on. Here are some guidelines to make each tour as effective as possible.\n\nBe selective. Unless your tour is for a safety inspection, your guests do not need (or want) to see every part of your factory. Choose a few sections that will interest your guests and give them a better sense of your product. For example, journalists will want to create a story about your plant, so show them the parts of the plant that have historical significance, such as a room with the company's original production equipment.\n\nTiming is everything. Always be mindful of the physical demands of the tour. Even the hardiest guest will tire of standing or walking for long periods. It is a good idea to schedule breaks in tours lasting longer than an hour. The time spent in a single section matters also. If you allow guests only five minutes in an area, they will soon forget it. On the other hand, even the most impressive room gets boring after half an hour.\n\nPersonality is NOT everything. While having a personable and friendly tour guide is essential, your guests are coming to see what goes into making your product. Tour guides get asked a variety of questions, some unexpected, so a comprehensive knowledge of the production processes is important (and absolutely vital during inspections). You also want someone who will keep the tour moving—visitors will appreciate a tour that begins and ends on time.`
                },
                {
                    id: "p7-t9-s12-p2",
                    contextType: "P1",
                    docType: "EMAIL",
                    content: `To: Masumi Toda <mt978@vidatechsystems.com>\nFrom: Ana Miftaroski <am680@vidatechsystems.com>\nDate: May 1\nSubject: Upcoming plant tour\nAttachment: Lessard_article\n\nHi, Masumi,\n\nI have attached an April 15 article by Didiane Lessard to help you plan the tour we will be giving later this month. I especially agree with the section on timing. Since the tour, by necessity, will have to cover the entire plant, it must be conducted as efficiently as possible. As for a guide, I would have recommended Nathan Zarate, but he will be traveling on May 21. Perhaps Maja Clausen could do it. She has also worked here for several years; she is very knowledgeable about our facility, processes, policies, and procedures. I am confident that she will be able to handle any questions the visitors might ask.\n\nAna Miftaroski, Vice President of Operations`
                }
            ],
            questions: [
                {
                    id: "p7-t9-q181",
                    questionNo: 181,
                    text: "What is one problem mentioned about factory tours in the article?",
                    options: {
                        "A": "They are often rescheduled at the last minute.",
                        "B": "They give the same information to all types of visitors.",
                        "C": "They fail to supply protective gear that fits everyone.",
                        "D": "They allow groups that are too large."
                    },
                    correctAnswer: "B",
                    classification: "P7_DETAIL",
                    explanation: "기사에서 모든 방문객에게 동일한 정보를 제공하는 획일적인 접근 방식을 채택하는 실수를 한다고 언급했습니다. 정답은 (B)입니다."
                },
                {
                    id: "p7-t9-q182",
                    questionNo: 182,
                    text: "According to the article, what is the maximum amount of time that a tour should stay in one area?",
                    options: {
                        "A": "10 minutes",
                        "B": "20 minutes",
                        "C": "30 minutes",
                        "D": "60 minutes"
                    },
                    correctAnswer: "C",
                    classification: "P7_DETAIL",
                    explanation: "기사에서 가장 인상적인 방도 30분 후에는 지루해진다고 언급했습니다. 정답은 (C) \"30분\"입니다."
                },
                {
                    id: "p7-t9-q183",
                    questionNo: 183,
                    text: "What is NOT indicated in the article as a characteristic of a good tour guide?",
                    options: {
                        "A": "A friendly personality",
                        "B": "The ability to stand for long periods",
                        "C": "A deep knowledge of processes",
                        "D": "The ability to pay close attention to time"
                    },
                    correctAnswer: "B",
                    classification: "P7_DETAIL",
                    explanation: "기사에서 친절한 성격, 생산 공정에 대한 포괄적인 지식, 투어를 계속 진행하는 능력은 언급했지만 오랫동안 서 있는 능력은 언급하지 않았습니다. 정답은 (B)입니다."
                },
                {
                    id: "p7-t9-q184",
                    questionNo: 184,
                    text: "For whom is Mr. Toda most likely planning a tour?",
                    options: {
                        "A": "Casual tourists",
                        "B": "New employees",
                        "C": "Potential investors",
                        "D": "Safety inspectors"
                    },
                    correctAnswer: "D",
                    classification: "P7_INFERENCE",
                    explanation: "이메일에서 투어가 필연적으로 전체 공장을 다뤄야 한다고 언급했으며, 기사에서 안전 검사가 아니면 공장의 모든 부분을 볼 필요가 없다고 했습니다. 정답은 (D) \"안전 검사관\"입니다."
                },
                {
                    id: "p7-t9-q185",
                    questionNo: 185,
                    text: "When is the tour scheduled to take place?",
                    options: {
                        "A": "On April 15",
                        "B": "On April 21",
                        "C": "On May 1",
                        "D": "On May 21"
                    },
                    correctAnswer: "D",
                    classification: "P7_DETAIL",
                    explanation: "이메일에서 이달 말에 투어를 진행할 것이라고 했으며(5월 1일 이메일), Nathan Zarate가 5월 21일에 출장 중이라고 언급했습니다. 정답은 (D) \"5월 21일\"입니다."
                }
            ]
        },
        // Questions 186-190: Triple Passage
        {
            id: "p7-t9-set13",
            questionRange: "186-190",
            setType: "Triple",
            passages: [
                {
                    id: "p7-t9-s13-p1",
                    contextType: "P3",
                    docType: "WEB_PAGE",
                    title: "Home",
                    content: `https://www.zonecatering.com/home\n\nZone Catering provides food trucks at film and television production sites throughout California. Just let us know where you need a food truck and how many people you need to feed. We can serve your entire cast and crew. Our trucks also move with you and your team if you are shooting scenes in various locations.\n\nAt Zone Catering, we offer a wide variety of cuisines. All the fruits and vegetables we use in our menus are grown here in California. Our menus are easily adapted to accommodate dietary restrictions. For convenience, our food trucks offer both full meals and individual items. We can serve meals buffet-style, or people can order directly from the truck.\n\nLet us take care of the catering for your production. You will find our food delicious, and you will find our service friendly and convenient. We even offer 24-hour support in case any issues arise while we are at your location. We hope to serve you soon!`,
                    translation: `홈\n\n존 케이터링(Zone Catering)은 캘리포니아 전역의 영화 및 TV 제작 현장에 푸드트럭을 제공합니다. 푸드트럭이 필요한 장소와 식사 인원을 알려주기만 하면 됩니다. 출연진과 제작진 전체에게 서비스를 제공할 수 있습니다. 여러 장소가 장면을 촬영하는 경우, 저희 트럭이 귀하 및 팀과 함께 이동합니다.\n\n존 케이터링에서는 다양한 요리를 제공합니다. 메뉴에 사용하는 모든 과일과 채소는 이곳 캘리포니아에서 재배된 것입니다. 저희 메뉴는 식단 제한 사항에 맞게 쉽게 조정할 수 있습니다. 편의를 위해 저희 푸드트럭은 정식 식사와 개별 품목을 모두 제공합니다. 뷔페식으로 식사를 제공하거나 트럭에서 직접 주문할 수도 있습니다.\n\n귀하의 제작을 위한 케이터링은 저희에게 맡기십시오. 저희 음식이 맛있다는 것과 서비스가 친절하고 편리하다는 것을 알게 되실 것입니다. 저희 위치에 있는 동안 문제가 발생할 경우를 대비해 24시간 지원 서비스도 제공합니다. 곧 서비스를 제공할 수 있기를 바랍니다!`
                },
                {
                    id: "p7-t9-s13-p2",
                    contextType: "P5",
                    docType: "SCHEDULE",
                    title: "Zone Catering Food Trucks",
                    content: `Schedule Date: June 10\n\n| Film | Shooting Location | Contact Person |\n|---|---|---|\n| Trappings | Harpin Lot | Erin Begg |\n| Make the Meeting | 192 Laredo Street | Mark Lillo |\n| Tutors and Tuxedos | Tandor Fields | Jun-Seo Kil |\n| Jatem and the Storm | Spectrum Hall | Donna Gawason |`,
                    translation: `존 케이터링 푸드트럭\n일정 날짜: 6월 10일\n\n| 영화 | 촬영 장소 | 담당자 |\n|---|---|---|\n| Trappings | Harpin Lot | Erin Begg |\n| Make the Meeting | 192 Laredo Street | Mark Lillo |\n| Tutors and Tuxedos | Tandor Fields | Jun-Seo Kil |\n| Jatem and the Storm | Spectrum Hall | Donna Gawason |`
                },
                {
                    id: "p7-t9-s13-p3",
                    contextType: "P3",
                    docType: "REVIEW",
                    title: "Testimonials",
                    content: `https://www.zonecatering.com/testimonials\n\nJune 10—I have been in the acting business for over 25 years and am sometimes disappointed by the food trucks on film production sites. That was not the case today when we were filming Make the Meeting. The food truck had excellent coffee, and the strawberries in the large fruit salad were so fresh and tasty! Even though there was a long line of customers on an extremely hot and uncomfortable day, the server was able to get everyone's food ready quickly. She was friendly and easygoing, too! Even the food truck was pleasant-looking—the mural painted on the side of the truck was beautiful! I hope to see Zone Catering food trucks at future film shooting locations.\n\n—Robert Chiodo`,
                    translation: `이용 후기\n\n6월 10일—저는 25년 이상 연기 분야에 종사해 왔으며 때때로 영화 제작 현장의 푸드트럭에 실망하곤 합니다. 오늘 'Make the Meeting'을 촬영할 때는 그렇지 않았습니다. 푸드트럭의 커피가 훌륭했고, 대형 과일 샐러드에 들어있는 딸기가 정말 신선하고 맛있었습니다! 매우 덥고 불편한 날이라 긴 대기 줄이 있었음에도 불구하고, 서버는 모든 사람의 음식을 빠르게 준비해 주었습니다. 그녀는 친절하고 소탈하기까지 했습니다! 푸드트럭조차 보기 좋았습니다. 트럭 옆면에 그려진 벽화가 아름다웠거든요! 향후 영화 촬영지에서도 존 케이터링 푸드트럭을 볼 수 있기를 바랍니다.\n\n—로버트 치오도(Robert Chiodo)`
                }
            ],
            questions: [
                {
                    id: "p7-t9-q186",
                    questionNo: 186,
                    text: "What does the Web page indicate about Zone Catering?",
                    options: {
                        "A": "It specializes in providing food at music concerts.",
                        "B": "It has lower prices than its competitors.",
                        "C": "It recently moved its corporate office to California.",
                        "D": "It provides customer support 24 hours a day."
                    },
                    correctAnswer: "D",
                    classification: "P7_DETAIL",
                    explanation: "웹 페이지에서 24시간 지원을 제공한다고 명시되어 있습니다. 정답은 (D) \"하루 24시간 고객 지원 제공\"입니다."
                },
                {
                    id: "p7-t9-q187",
                    questionNo: 187,
                    text: "According to the schedule, who was the contact person for the filming of Trappings on June 10?",
                    options: {
                        "A": "Erin Begg",
                        "B": "Mark Lillo",
                        "C": "Jun-Seo Kil",
                        "D": "Donna Gawason"
                    },
                    correctAnswer: "A",
                    classification: "P7_DETAIL",
                    explanation: "일정표에서 Trappings의 연락 담당자는 Erin Begg입니다. 정답은 (A)입니다."
                },
                {
                    id: "p7-t9-q188",
                    questionNo: 188,
                    text: "Where was the food truck that Mr. Chiodo visited?",
                    options: {
                        "A": "At Harpin Lot",
                        "B": "At 192 Laredo Street",
                        "C": "At Tandor Fields",
                        "D": "At Spectrum Hall"
                    },
                    correctAnswer: "B",
                    classification: "P7_INFERENCE",
                    explanation: "후기에서 Mr. Chiodo는 Make the Meeting을 촬영할 때 푸드트럭을 방문했다고 언급했으며, 일정표에서 Make the Meeting은 192 Laredo Street에서 촬영되었습니다. 정답은 (B)입니다."
                },
                {
                    id: "p7-t9-q189",
                    questionNo: 189,
                    text: "What is probably true about the salad Mr. Chiodo ordered?",
                    options: {
                        "A": "It had an unusual taste.",
                        "B": "It was too big for him to finish.",
                        "C": "It included several types of berries.",
                        "D": "It contained fruit grown in California."
                    },
                    correctAnswer: "D",
                    classification: "P7_INFERENCE",
                    explanation: "웹 페이지에서 모든 과일과 채소가 캘리포니아에서 재배된다고 했으며, 후기에서 과일 샐러드의 딸기가 신선하고 맛있었다고 언급했습니다. 정답은 (D) \"캘리포니아에서 재배된 과일 포함\"입니다."
                },
                {
                    id: "p7-t9-q190",
                    questionNo: 190,
                    text: "What is indicated about the food truck server in the testimonial?",
                    options: {
                        "A": "She had difficulty working in the heat.",
                        "B": "She paints murals in her spare time.",
                        "C": "She prepares orders quickly.",
                        "D": "She has worked in her industry for 25 years."
                    },
                    correctAnswer: "C",
                    classification: "P7_DETAIL",
                    explanation: "후기에서 서버가 긴 줄에도 불구하고 모든 사람의 음식을 빠르게 준비할 수 있었다고 언급했습니다. 정답은 (C) \"주문을 빠르게 준비한다\"입니다."
                }
            ]
        },
        // Questions 191-195: Triple Passage
        {
            id: "p7-t9-set14",
            questionRange: "191-195",
            setType: "Triple",
            passages: [
                {
                    id: "p7-t9-s14-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    content: `To: Hae-won Jeong\nFrom: Julia Laurent\nDate: July 28\nSubject: Dallas hotels\nAttachment: List of downtown accommodations\n\nDear Hae-won,\n\nI plan to attend the National Digital Marketing Conference in October. I know you have traveled to this conference in Dallas many times. This will be my first time attending, and I'm not sure which hotel to book. I have attached a list of accommodations that are near the convention center. Right now, I am leaning toward the Bonita Suites Hotel, but I would like to know which property you would recommend.\n\nI hope you have settled into your new position with the digital marketing department. I am looking forward to the conference and hope to see you again there.\n\nKind regards,\n\nJulia Laurent\nE-mail Marketing Specialist\nThe 3R Marketing Firm`
                },
                {
                    id: "p7-t9-s14-p2",
                    contextType: "P3",
                    docType: "INFORMATION",
                    title: "List of Downtown Accommodations (from www.topbusinesshotels.com/search/Dallashotels)",
                    content: `| Hotel | Rate | Description |\n|---|---|---|\n| The Oaktree Hotel | $204/night | Luxury hotel in the heart of downtown<br>Close to the convention center<br>Outdoor pool, three on-site restaurants<br>Close to shopping |\n| Alessi Dallas Hotel | $155/night | Quaint boutique hotel in downtown Dallas<br>Lobby restaurant for breakfast and dinner<br>Near convention center and history museum |\n| Bonita Suites Hotel | $125/night | New hotel in downtown convention center area<br>Office and kitchen in each suite<br>Computer center with printers located in lobby<br>Meeting space available for groups<br>Free on-site parking available |`
                },
                {
                    id: "p7-t9-s14-p3",
                    contextType: "P1",
                    docType: "EMAIL",
                    content: `To: Julia Laurent\nFrom: Hae-won Jeong\nDate: July 29\nSubject: RE: Dallas hotels\n\nDear Julia,\n\nI will be attending the National Digital Marketing Conference this year as well! I love traveling to Dallas every year for this conference because it is a great networking opportunity. Since this is your first time attending, I recommend you go to the newcomers' reception on the first night. The conference executive planning committee is putting it on, and it could be an excellent occasion to socialize with other conference goers.\n\nI will be staying at the Alessi Dallas Hotel. It is the closest to the convention center, and the rooms are comfortable. For you, I would suggest the one you already seem to prefer. It so happens that the newcomers' reception will be held in one of the event rooms there. It is a little farther away but still convenient. As a friendly reminder, we are advised not to book hotels with rates that exceed our company's limit of $175/night.\n\nI look forward to seeing you in October. It will be lovely to catch up.\n\nBest,\n\nHae-won Jeong\nDigital Marketing Director\nThe 3R Marketing Firm`
                }
            ],
            questions: [
                {
                    id: "p7-t9-q191",
                    questionNo: 191,
                    text: "What is the purpose of the first e-mail?",
                    options: {
                        "A": "To schedule a meeting with a client",
                        "B": "To ask for assistance with a project",
                        "C": "To seek a suggestion from a colleague",
                        "D": "To congratulate a colleague who was promoted"
                    },
                    correctAnswer: "C",
                    classification: "P7_PURPOSE",
                    explanation: "첫 번째 이메일에서 Ms. Laurent는 어느 호텔을 추천할지 알고 싶다고 동료에게 요청했습니다. 정답은 (C) \"동료에게 제안 요청\"입니다."
                },
                {
                    id: "p7-t9-q192",
                    questionNo: 192,
                    text: "According to the list, what is suggested about the Bonita Suites Hotel?",
                    options: {
                        "A": "It is located in a historic building.",
                        "B": "It features resources for business travelers.",
                        "C": "It is near many downtown tourist attractions.",
                        "D": "It charges a daily fee for parking."
                    },
                    correctAnswer: "B",
                    classification: "P7_DETAIL",
                    explanation: "목록에서 Bonita Suites Hotel은 각 스위트에 사무실과 주방이 있고, 로비에 프린터가 있는 컴퓨터 센터가 있다고 명시되어 있습니다. 정답은 (B) \"비즈니스 여행객을 위한 자원 제공\"입니다."
                },
                {
                    id: "p7-t9-q193",
                    questionNo: 193,
                    text: "What is true about Ms. Jeong?",
                    options: {
                        "A": "She has not attended a marketing conference before.",
                        "B": "She prefers the Alessi Dallas Hotel for its restaurant.",
                        "C": "She thinks Ms. Laurent should stay at the Bonita Suites Hotel.",
                        "D": "She works for a different company than Ms. Laurent."
                    },
                    correctAnswer: "C",
                    classification: "P7_INFERENCE",
                    explanation: "두 번째 이메일에서 Ms. Jeong은 Ms. Laurent가 이미 선호하는 것으로 보이는 호텔(Bonita Suites Hotel)을 추천했습니다. 정답은 (C)입니다."
                },
                {
                    id: "p7-t9-q194",
                    questionNo: 194,
                    text: "Why would Ms. Jeong most likely suggest that Ms. Laurent avoid the Oaktree Hotel?",
                    options: {
                        "A": "It does not have an on-site restaurant.",
                        "B": "Its room rate exceeds the company's limit.",
                        "C": "Its clients are mostly noisy tourists.",
                        "D": "It is too far from the conference location."
                    },
                    correctAnswer: "B",
                    classification: "P7_INFERENCE",
                    explanation: "두 번째 이메일에서 회사 한도인 $175/박을 초과하는 호텔을 예약하지 말라고 조언했으며, Oaktree Hotel은 $204/박입니다. 정답은 (B) \"객실 요금이 회사 한도 초과\"입니다."
                },
                {
                    id: "p7-t9-q195",
                    questionNo: 195,
                    text: "What does the second e-mail indicate about the National Digital Marketing Conference?",
                    options: {
                        "A": "Its location changes to a different city each year.",
                        "B": "Last year it was held at the Alessi Dallas Hotel.",
                        "C": "Ms. Jeong is on its executive planning committee.",
                        "D": "It includes an event for first-time attendees."
                    },
                    correctAnswer: "D",
                    classification: "P7_INFERENCE",
                    explanation: "두 번째 이메일에서 첫날 밤에 신규 참석자를 위한 리셉션이 있다고 언급했습니다. 정답은 (D) \"첫 참석자를 위한 이벤트 포함\"입니다."
                }
            ]
        },
        // Questions 196-200: Triple Passage
        {
            id: "p7-t9-set15",
            questionRange: "196-200",
            setType: "Triple",
            passages: [
                {
                    id: "p7-t9-s15-p1",
                    contextType: "P1",
                    docType: "LETTER",
                    content: `Dover Water Supply\n7400 Rodney Boulevard, Dover, DE 19904\n\nMarch 12\n\nMs. Na-Ri Cam\n361 Farming Avenue\nDover, DE 19902\n\nDear Ms. Cam,\n\nThis letter is to confirm that Dover Water Supply will begin service at your address on Wednesday, April 6. Your customer account number, which is the same as your water meter number, is DWS4289.\n\nBilling is monthly, and payment is due on the fifteenth of each month. Bills can be paid by mailing a check to our main address or by entering your account number and payment information on our secure page at www.doverwatersupply.com/billing.\n\nWe will be performing a system flush of the pipes in your area on Monday, April 4. Customers may temporarily see discoloration or sediment in their water around that time. Please visit our Web site for more information. You can also contact Customer Support at questions@doverwatersupply.com or call us at (302) 555-0135.\n\nSincerely,\n\nMatthew Ensign\nAccount Representative, Dover Water Supply`,
                    translation: `도버 수도국(Dover Water Supply)\n7400 Rodney Boulevard, Dover, DE 19904\n\n3월 12일\n\n나리 캠(Na-Ri Cam) 귀하\n361 Farming Avenue\nDover, DE 19902\n\n캠 씨께,\n\n본 서신은 도버 수도국이 귀하의 주소로 4월 6일 수요일부터 서비스를 시작함을 확인해 드립니다. 귀하의 고객 계정 번호는 수도 계량기 번호와 동일하며, DWS4289입니다.\n\n청구는 매월 이루어지며, 대금 결제일은 매월 15일입니다. 요금은 저희 본사 주소로 수표를 우편으로 보내거나, 보안 페이지인 www.doverwatersupply.com/billing에 접속하여 계정 번호와 결제 정보를 입력하여 납부할 수 있습니다.\n\n저희는 4월 4일 월요일에 귀하의 지역에 있는 배관 시스템 세척 작업을 수행할 예정입니다. 이 시기에 고객님들께서는 일시적으로 물의 변색이나 침전물을 발견하실 수 있습니다. 자세한 내용은 저희 웹사이트를 방문해 주십시오. 또한 questions@doverwatersupply.com으로 고객 서비스팀에 문의하시거나 (302) 555-0135로 전화해 주실 수도 있습니다.\n\n진심을 담아,\n\n매튜 엔사인(Matthew Ensign)\n도버 수도국 계정 담당자`
                },
                {
                    id: "p7-t9-s15-p2",
                    contextType: "P1",
                    docType: "EMAIL",
                    content: `To: questions@doverwatersupply.com\nFrom: Na-Ri Cam <n.cam@mailcurrent.com>\nDate: March 17\nSubject: Account number DWS4289\n\nHello,\n\nI am in the process of moving to my new home in Dover. I received a letter stating that my water service will start on April 6. It also said something about pipes being flushed on April 4. Should I expect to see discoloration when I start using my water? Are there any steps I should take?\n\nAlso, I tried to use your secure page, but it gave me an error message saying that my account number was not valid. I will need your help in getting online access by the May 15 due date.\n\nThank you for any information you can provide.\n\nNa-Ri Cam`,
                    translation: `수신: questions@doverwatersupply.com\n발신: 나리 캠 <n.cam@mailcurrent.com>\n날짜: 3월 17일\n제목: 계정 번호 DWS4289\n\n안녕하세요,\n\n도버의 새 집으로 이사하는 과정에 있습니다. 수도 서비스가 4월 6일에 시작된다는 편지를 받았습니다. 또한 4월 4일에 배관 세척 작업이 있다는 내용도 있었습니다. 제가 물을 쓰기 시작할 때 변색이 있을 것으로 예상해야 할까요? 제가 취해야 할 조치가 있나요?\n\n또한, 귀사의 보안 페이지를 이용하려 했으나 제 계정 번호가 유효하지 않다는 오류 메시지가 떴습니다. 5월 15일 납기일까지 온라인 접속을 할 수 있도록 귀하의 도움이 필요합니다.\n\n제공해 주실 수 있는 모든 정보에 감사드립니다.\n\n나리 캠`
                },
                {
                    id: "p7-t9-s15-p3",
                    contextType: "P1",
                    docType: "EMAIL",
                    content: `To: Na-Ri Cam <n.cam@mailcurrent.com>\nFrom: Customer Support <questions@doverwatersupply.com>\nDate: March 18\nSubject: RE: Account number DWS4289\n\nDear Ms. Cam,\n\nThank you for your message. Your water might look cloudy on April 6 when you first turn on your faucets. We recommend that you keep the water running until it is clear before you use it. I assure you that the water is not harmful in any way. The minerals that cause the discoloration occur naturally, and our latest water analysis showed very high quality.\n\nI apologize for the problem you described. I have fixed it, so you should not have any further trouble.\n\nIf you have any other questions, please don't hesitate to reach out to us again.\n\nBest regards,\n\nRamona Hizon\nCustomer Support, Dover Water Supply`,
                    translation: `수신: 나리 캠 <n.cam@mailcurrent.com>\n발신: 고객 서비스팀 <questions@doverwatersupply.com>\n날짜: 3월 18일\n제목: RE: 계정 번호 DWS4289\n\n캠 씨께,\n\n메시지 감사드립니다. 4월 6일에 처음 수도꼭지를 틀었을 때 물이 흐릿해 보일 수 있습니다. 사용하시기 전에 물이 맑아질 때까지 계속 틀어두는 것을 권장합니다. 물은 어떤 식으로든 인체에 해롭지 않음을 보증합니다. 변색을 일으키는 미네랄은 자연적으로 발생하는 것이며, 최근 수질 분석 결과 매우 높은 수질을 나타냈습니다.\n\n설명하신 문제에 대해 사과드립니다. 해당 문제를 수정했으므로 더 이상 어려움이 없으실 것입니다.\n\n다른 질문이 있으시면 언제든지 다시 문의해 주십시오.\n\n감사합니다.\n\n라모나 하이존(Ramona Hizon)\n도버 수도국 고객 서비스팀`
                }
            ],
            questions: [
                {
                    id: "p7-t9-q196",
                    questionNo: 196,
                    text: "What is one purpose of the letter?",
                    options: {
                        "A": "To list customer benefits",
                        "B": "To alert customers to a price change",
                        "C": "To confirm the start of a service",
                        "D": "To describe changes to a Web site"
                    },
                    correctAnswer: "C",
                    classification: "P7_PURPOSE",
                    explanation: "편지에서 4월 6일에 주소에서 서비스가 시작될 것이라고 확인했습니다. 정답은 (C) \"서비스 시작 확인\"입니다."
                },
                {
                    id: "p7-t9-q197",
                    questionNo: 197,
                    text: "What most likely does Ms. Cam want to do online on May 15?",
                    options: {
                        "A": "Request a new water meter",
                        "B": "Complete a customer survey",
                        "C": "Report a leaking pipe",
                        "D": "Pay a water bill"
                    },
                    correctAnswer: "D",
                    classification: "P7_PURPOSE",
                    explanation: "편지에서 청구서는 매월 15일에 납부해야 하며 온라인으로 지불할 수 있다고 했습니다. Ms. Cam은 5월 15일 납부 기한까지 온라인 액세스가 필요하다고 언급했습니다. 정답은 (D) \"수도 요금 납부\"입니다."
                },
                {
                    id: "p7-t9-q198",
                    questionNo: 198,
                    text: "According to the second e-mail, what should Ms. Cam do on April 6?",
                    options: {
                        "A": "Boil her drinking water for five minutes",
                        "B": "Allow her water to run for some time",
                        "C": "Contact her neighbors",
                        "D": "Request a service visit"
                    },
                    correctAnswer: "B",
                    classification: "P7_DETAIL",
                    explanation: "두 번째 이메일에서 4월 6일에 수도꼭지를 처음 켤 때 물이 흐릿해 보일 수 있으며, 물이 맑아질 때까지 계속 흘려보내라고 권장했습니다. 정답은 (B) \"물을 잠시 흘려보낸다\"입니다."
                },
                {
                    id: "p7-t9-q199",
                    questionNo: 199,
                    text: "In the second e-mail, what is indicated about the water from Dover Water Supply?",
                    options: {
                        "A": "It is safe to use.",
                        "B": "It is measured every month.",
                        "C": "It is distributed to many cities.",
                        "D": "It is naturally free of minerals."
                    },
                    correctAnswer: "A",
                    classification: "P7_DETAIL",
                    explanation: "두 번째 이메일에서 물이 어떤 식으로든 해롭지 않으며 최근 수질 분석 결과 매우 높은 품질을 보였다고 확인했습니다. 정답은 (A) \"사용하기에 안전하다\"입니다."
                },
                {
                    id: "p7-t9-q200",
                    questionNo: 200,
                    text: "What can be concluded about Ms. Hizon?",
                    options: {
                        "A": "She resolved the issue with Ms. Cam's account.",
                        "B": "She sent a copy of the water analysis to Ms. Cam.",
                        "C": "She will offer Ms. Cam a discount for new customers.",
                        "D": "She lives in Ms. Cam's area."
                    },
                    correctAnswer: "A",
                    classification: "P7_INFERENCE",
                    explanation: "Ms. Cam이 설명한 문제(온라인 계정 오류)를 수정했으므로 더 이상 문제가 없을 것이라고 Ms. Hizon이 언급했습니다. 정답은 (A) \"Ms. Cam의 계정 문제를 해결했다\"입니다."
                }
            ]
        }
    ]
};
