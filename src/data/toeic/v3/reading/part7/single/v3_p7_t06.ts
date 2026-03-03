import { Part7Test } from './types';

export const test6Data: Part7Test = {
    testId: 6,
    vol: 3,
    title: "Test 6",
    sets: [
        {
            id: "v3-p7-t6-set1",
            setType: "Single",
            questionRange: "147-148",
            passages: [
                {
                    id: "v3-p7-t6-s1-p1",
                    contextType: "P4_MARK",
                    docType: "ADVERTISEMENT",
                    content: "Kendricks Appliances Sale\nMarch 5 and 6\n\nThis event is our way of saying thank you to our friends and neighbors for welcoming our new business to the South Waterfront neighborhood one year ago. Members of the community who live east of Broad Avenue and west of Riverside Avenue are invited to stop in and claim an additional discount on selected merchandise this weekend. Just remember to bring proof of residency.",
                    translation: "Kendricks 가전제품 세일\n3월 5일 및 6일\n\n이 행사는 1년 전 저희 사업체가 South Waterfront 지역에 새로 문을 열었을 때 환영해 주신 친구와 이웃들에게 감사의 마음을 전하는 저희만의 방식입니다. Broad Avenue 동쪽과 Riverside Avenue 서쪽에 거주하는 지역 사회 일원분들은 이번 주말에 방문하여 선정된 상품에 대해 추가 할인 혜택을 받으시기 바랍니다. 거주 증명서를 지참해야 함을 잊지 마세요."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t6-q147",
                    questionNo: 147,
                    text: "What is being advertised?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "The recent relocation of a business",
                        "B": "The grand opening of a branch store",
                        "C": "A special promotion for local residents",
                        "D": "The introduction of new product brands"
                    },
                    correctAnswer: "C",
                    translation: "무엇이 광고되고 있습니까?",
                    explanation: "특정 지역 거주자들(local residents)을 대상으로 추가 할인 혜택을 제공하는 프로모션을 광고하고 있습니다."
                },
                {
                    id: "v3-p7-t6-q148",
                    questionNo: 148,
                    text: "What is indicated about Kendricks Appliances?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It has been in business for one year.",
                        "B": "It has a store on Broad Avenue.",
                        "C": "Its delivery service is limited to South Waterfront.",
                        "D": "Its hours are extended on the weekend."
                    },
                    correctAnswer: "A",
                    translation: "Kendricks Appliances에 대해 명시된 사실은 무엇입니까?",
                    explanation: "지문 첫 문장에서 1년 전(one year ago)에 새 사업체를 열었다고 언급했습니다."
                }
            ]
        },
        {
            id: "v3-p7-t6-set2",
            setType: "Single",
            questionRange: "149-150",
            passages: [
                {
                    id: "v3-p7-t6-s2-p1",
                    contextType: "P2_OFFI",
                    docType: "MEMO",
                    content: "MEMO\n\nTo: All Eastland Regional Hospital staff\nFrom: Patrick Menzales\nDate: February 1\nSubject: Referrals\n\nEastland Regional Hospital is planning to hire more registered nurses, x-ray technicians, and cafeteria and housekeeping staff. We will be holding a hiring and information event on Wednesday, February 27, from 2 P.M. to 5 P.M. in the Winkler Auditorium. If you have friends or family interested in working here, this is a great opportunity for them to find out about open positions. There is no fee for entry. It is not necessary to make an appointment.\n\nAs a valued employee, you will receive a bonus if you refer a candidate who is hired and whose employment lasts at least three months. Ask the candidate to include your name on the application in the space labeled \"referred by.\" The bonus will be added to your paycheck.\n\nPlease contact me if you have any questions.",
                    translation: "메모\n\n수신: Eastland Regional 병원 전 직원\n발신: Patrick Menzales\n날짜: 2월 1일\n제목: 직원 추천\n\nEastland Regional 병원은 정규 간호사, 엑스레이 기사, 구내식당 및 청소 인력을 추가로 채용할 계획입니다. 2월 27일 수요일 오후 2시부터 5시까지 Winkler 강당에서 채용 및 안내 행사를 개최할 예정입니다. 이곳에서 일하는 데 관심이 있는 친구나 가족이 있다면, 공석에 대해 알아볼 좋은 기회가 될 것입니다. 입장료는 무료이며 사전 예약은 필요하지 않습니다.\n\n여러분의 추천으로 채용된 후보자가 최소 3개월 동안 근무할 경우, 귀중한 직원인 여러분께 보너스를 지급해 드립니다. 입사 지원서의 '추천인' 칸에 여러분의 이름을 기재하도록 안내해 주세요. 보너스는 급여에 포함되어 지급될 예정입니다.\n\n궁금한 사항이 있으시면 저에게 연락해 주시기 바랍니다."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t6-q149",
                    questionNo: 149,
                    text: "What is indicated about the hiring and information event?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It will be held in the cafeteria.",
                        "B": "An admission fee will be charged.",
                        "C": "It will take place in the afternoon.",
                        "D": "Attendees will be asked to register in advance."
                    },
                    correctAnswer: "C",
                    translation: "채용 및 안내 행사에 대해 명시된 사실은 무엇입니까?",
                    explanation: "지문에서 오후 2시부터 5시(2 P.M. to 5 P.M.)에 열린다고 했으므로 오후에 진행됨을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t6-q150",
                    questionNo: 150,
                    text: "What does Mr. Menzales encourage employees to do?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Volunteer to lead a project",
                        "B": "Refer applicants for employment",
                        "C": "Earn a bonus by working overtime",
                        "D": "Apply for a better-paying position"
                    },
                    correctAnswer: "B",
                    translation: "Mr. Menzales가 직원들에게 권장하는 일은 무엇입니까?",
                    explanation: "채용 후보자를 추천(refer a candidate)하면 보너스를 준다며 추천을 권장하고 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t6-set3",
            setType: "Single",
            questionRange: "151-152",
            passages: [
                {
                    id: "v3-p7-t6-s3-p1",
                    contextType: "P2_OFFI",
                    docType: "NOTICE",
                    content: "Meeting of the Chelmsbury Civic Association\nWhere: Alvar Madsen Community Center, 4141 Hoover Road\nWhen: Tuesday, June 14, 7:00 P.M. – 8:30 P.M.\n\nAgenda\n• Introduce new neighbors\n• Update on road construction\n• Election of vice president\n• Refreshments\n\nPlease note:\nWe are currently collecting dues for the year. The dues are $25. If you have not yet paid your dues, please do so. You may pay at the meeting, or you may send your payment to Bob Robsen at 595 Shelton Drive.\n\nWe hope to see you at the meeting!\n\nSusan Wolfe, President, Chelmsbury Civic Association\n784 Harmony Drive",
                    translation: "Chelmsbury 시민 협회 회의\n장소: Alvar Madsen 커뮤니티 센터, 4141 Hoover Road\n일시: 6월 14일 화요일, 오후 7:00 – 오후 8:30\n\n의제\n• 새 이웃 소개\n• 도로 공사 현황 보고\n• 부회장 선출\n• 다과\n\n참고 사항:\n현재 올해 회비를 걷고 있습니다. 회비는 25달러입니다. 아직 회비를 납부하지 않으신 분들은 납부해 주시기 바랍니다. 회의에서 직접 납부하셔도 되고, 595 Shelton Drive에 거주하는 Bob Robsen에게 보내주셔도 됩니다.\n\n회의에서 뵙기를 바랍니다!\n\nSusan Wolfe, 회장, Chelmsbury 시민 협회\n784 Harmony Drive"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t6-q151",
                    questionNo: 151,
                    text: "What is stated about the upcoming meeting?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It will be held on Harmony Drive.",
                        "B": "It will include voting for an office.",
                        "C": "It will be led by Mr. Robsen.",
                        "D": "It will have a speaker from the local community center."
                    },
                    correctAnswer: "B",
                    translation: "다가오는 회의에 대해 명시된 사실은 무엇입니까?",
                    explanation: "의제(Agenda) 중 'Election of vice president(부회장 선출)'가 포함되어 있으므로 투표가 진행될 것임을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t6-q152",
                    questionNo: 152,
                    text: "What is true about Mr. Robsen?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "He is the vice president of the association.",
                        "B": "He forgot to pay his membership fee.",
                        "C": "He provides refreshments at meetings.",
                        "D": "He collects association members' dues."
                    },
                    correctAnswer: "D",
                    translation: "Mr. Robsen에 대해 사실인 것은 무엇입니까?",
                    explanation: "회비를 그에게 보내달라는 내용으로 보아 회비를 수납하는 역할을 맡고 있음을 알 수 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t6-set4",
            setType: "Single",
            questionRange: "153-154",
            passages: [
                {
                    id: "v3-p7-t6-s4-p1",
                    contextType: "P2_OFFI",
                    docType: "CHAT",
                    content: "Eric Ozawa (12:06 P.M.) Hi Kara. I wanted to let you know that my train is going to be late.\nKara Murato (12:10 P.M.) Oh, that's too bad. Will you make it to the 3:00 meeting?\nEric Ozawa (12:11 P.M.) I'm not sure. The conductor thinks it will be at least another hour before we leave.\nKara Murato (12:12 P.M.) Should we postpone the meeting?\nEric Ozawa (12:14 P.M.) I think you should get started. The plans for the new hospital wing are on my desk. You know everything about the changes to the original design. You can call me if the client has any questions that you are unable to answer.\nKara Murato (12:15 P.M.) Sounds good. Let me know when you have an update on your arrival time.\nEric Ozawa (12:16 P.M.) Sure. Thanks.",
                    translation: "Eric Ozawa (오후 12:06) 안녕 Kara. 내 열차가 늦어질 것 같다는 걸 알려주려고 연락했어.\nKara Murato (오후 12:10) 어머, 안됐다. 오후 3시 회의에는 참석할 수 있을까?\nEric Ozawa (오후 12:11) 잘 모르겠어. 차장님 말로는 출발까지 적어도 한 시간은 더 걸릴 거래.\nKara Murato (오후 12:12) 회의를 미룰까?\nEric Ozawa (오후 12:14) 그냥 시작하는 게 좋겠어. 새 병원 병동 평면도가 내 책상 위에 있어. 너도 기존 설계 변경 사항에 대해 다 알고 있잖아. 혹시 고객에게 대답하기 곤란한 질문이 있으면 나한테 전화해.\nKara Murato (오후 12:15) 좋아. 도착 예정 시간 업데이트되면 알려줘.\nEric Ozawa (오후 12:16) 알았어. 고마워."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t6-q153",
                    questionNo: 153,
                    text: "Why does Mr. Ozawa contact Ms. Murato?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To introduce her to a new client",
                        "B": "To inform her of a delay",
                        "C": "To ask her to book a train ticket",
                        "D": "To thank her for changing a project's deadline"
                    },
                    correctAnswer: "B",
                    translation: "Mr. Ozawa는 왜 Ms. Murato에게 연락했습니까?",
                    explanation: "열차가 지연되어 늦어질 것임을 알리기 위해 연락했습니다(inform her of a delay)."
                },
                {
                    id: "v3-p7-t6-q154",
                    questionNo: 154,
                    text: "At 12:15 P.M., what does Ms. Murato most likely mean when she writes, \"Sounds good\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "She will contact Mr. Ozawa if she has questions.",
                        "B": "She will attend a meeting by phone.",
                        "C": "She will drive Mr. Ozawa to the station.",
                        "D": "She will reschedule a consultation."
                    },
                    correctAnswer: "A",
                    translation: "오후 12:15에 Ms. Murato가 \"Sounds good\"이라고 쓴 의미는 무엇입니까?",
                    explanation: "Eric이 모르는 것이 있으면 전화하라고 제안한 것에 동의하며 본인이 직접 회의를 주도하겠다는 뜻이므로, 모르는 게 있으면 연락하겠다는 뜻이 포함됩니다."
                }
            ]
        },
        {
            id: "v3-p7-t6-set5",
            setType: "Single",
            questionRange: "155-157",
            passages: [
                {
                    id: "v3-p7-t6-s5-p1",
                    contextType: "P2_OFFI",
                    docType: "EMAIL",
                    content: "From: noreply@vacationsiteseer.com\nTo: vneuman@gzetmail.com\nDate: July 16, 2:52 P.M.\nSubject: Your upcoming trip\n\nMr. Neuman:\n\nYour trip to Milan is only a week away. — [1] —. Your room at the Classico Hotel has been confirmed. Check-in is on July 23 at 2 P.M., and checkout is on July 28 at 11 A.M. There is no need to pay now, as payment is not required until you have checked out. — [2] —.\n\nWe urge you to plan ahead regarding car rentals. As a Vacation Siteseer customer, you are entitled to a discount of 20% if you book your car now. Our car rental partners are offering this special deal only until July 20, so do not wait. — [3] —.\n\nThank you for choosing Vacation Siteseer to book your stay in Milan. — [4] —.\n\nEnjoy your journey!\n\nVacation Siteseer Team",
                    translation: "발신: noreply@vacationsiteseer.com\n수신: vneuman@gzetmail.com\n날짜: 7월 16일, 오후 2:52\n제목: 다가오는 여행 안내\n\nMr. Neuman께:\n\n밀라노 여행이 이제 일주일밖에 남지 않았습니다. — [1] —. Classico 호텔 예약이 확정되었습니다. 체크인은 7월 23일 오후 2시이며, 체크아웃은 7월 28일 오전 11시입니다. 선결제는 필요하지 않으며 결제는 체크아웃하실 때 해주시면 됩니다. — [2] —.\n\n렌터카와 관련하여 미리 계획을 세우실 것을 권장합니다. Vacation Siteseer 고객으로서 지금 예약하시면 20% 할인 혜택을 받으실 수 있습니다. 저희 렌터카 제휴사들의 특별 혜택은 7월 20일까지만 유효하오니 서두르시기 바랍니다. — [3] —.\n\n밀라노 숙소 예약을 위해 Vacation Siteseer를 이용해 주셔서 감사합니다. — [4] —.\n\n즐거운 여행 되세요!\n\nVacation Siteseer 팀"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t6-q155",
                    questionNo: 155,
                    text: "When will Mr. Neuman begin his stay in Milan?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "On July 16",
                        "B": "On July 20",
                        "C": "On July 23",
                        "D": "On July 28"
                    },
                    correctAnswer: "C",
                    translation: "Mr. Neuman은 언제 밀라노 숙박을 시작합니까?",
                    explanation: "이메일에 체크인 날짜가 7월 23일(July 23)로 명시되어 있습니다."
                },
                {
                    id: "v3-p7-t6-q156",
                    questionNo: 156,
                    text: "What offer is included in the e-mail?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "A car rental discount",
                        "B": "Late checkout times",
                        "C": "A hotel room upgrade",
                        "D": "Free sightseeing tours"
                    },
                    correctAnswer: "A",
                    translation: "이메일에 포함된 혜택은 무엇입니까?",
                    explanation: "렌터카 20% 할인(discount of 20% if you book your car now) 혜택을 언급하고 있습니다."
                },
                {
                    id: "v3-p7-t6-q157",
                    questionNo: 157,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Explore your options on our Web site and make a reservation today.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "C",
                    translation: "지정된 위치 [1], [2], [3], [4] 중 다음 문장이 들어가기에 가장 적절한 곳은?\n\"저희 웹사이트에서 옵션을 확인하시고 오늘 바로 예약하세요.\"",
                    explanation: "렌터카 할인 혜택을 소개하고 서두를 것을 촉구한 직후인 [3]이 가장 적절합니다."
                }
            ]
        },
        {
            id: "v3-p7-t6-set6",
            setType: "Single",
            questionRange: "158-161",
            passages: [
                {
                    id: "v3-p7-t6-s6-p1",
                    contextType: "P3_MEDI",
                    docType: "ARTICLE",
                    content: "Craverton Returns to Business as Usual\n—Brianna Wible, Staff Reporter\n\nA power outage yesterday caused a number of businesses and area attractions in downtown Craverton to close. The cause of the outage is still unknown, but the early morning's stormy weather most likely played a part. — [1] —.\n\nSung Min Nam, who was leading a tour of some of the historic sites downtown, changed his itinerary. \"Fortunately, I know the area well,\" Mr. Nam said. \"I led the group back to the bus, and we headed to a different part of the city to discover alternative sites, such as Grantwood Park and Holtrop Tower.\" — [2] —.\n\nFor the Craverton Art Museum, the outage did not make a difference in earnings because its galleries are closed to the public on Tuesdays. — [3] —. Craverton University canceled its classes, but generators powered residence halls and cafeterias. Power was restored to most area businesses by late yesterday afternoon. — [4] —. And today Craverton returned to business as usual.",
                    translation: "Craverton 시, 다시 일상 업무로 복귀\n—Brianna Wible, 기자\n\n어제 발생한 정전 사태로 Craverton 시내의 많은 기업과 지역 명소들이 문을 닫았습니다. 정전의 원인은 아직 밝혀지지 않았으나, 이른 아침의 폭풍우가 영향을 미쳤을 가능성이 큽니다. — [1] —.\n\n시내 유적지 투어를 진행 중이던 성민 남 씨는 일정을 변경했습니다. \"다행히 저는 이 지역을 잘 알고 있습니다.\" 남 씨는 말했습니다. \"관광객들을 다시 버스로 안내했고, 인근의 Grantwood 공원이나 Holtrop 타워 같은 대체 명소들을 찾아 시의 다른 지역으로 향했습니다.\" — [2] —.\n\nCraverton 미술관의 경우, 화요일에는 갤러리가 정기 휴관일이기 때문에 정전으로 인한 수익 손실은 없었습니다. — [3] —. Craverton 대학교는 수업을 취소했으나, 기숙사와 식당은 발전기를 가동하여 운영되었습니다. 어제 늦은 오후 무렵 대부분의 지역 업소에 전력 공급이 재개되었습니다. — [4] —. 그리고 오늘 Craverton 시는 다시 일상으로 복귀했습니다."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t6-q158",
                    questionNo: 158,
                    text: "What is the main topic of the article?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "Reasons to move to Craverton",
                        "B": "An unexpected situation in Craverton",
                        "C": "Reliable weather forecasting sources",
                        "D": "Possible sites for a tourist attraction"
                    },
                    correctAnswer: "B",
                    translation: "기사의 주요 주제는 무엇입니까?",
                    explanation: "어제 발생한 갑작스러운 정전(power outage)이라는 예기치 못한 상황과 그 여파에 대해 다루고 있습니다."
                },
                {
                    id: "v3-p7-t6-q159",
                    questionNo: 159,
                    text: "Who most likely is Mr. Nam?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "A reporter",
                        "B": "A professor",
                        "C": "An art historian",
                        "D": "A tour guide"
                    },
                    correctAnswer: "D",
                    translation: "Mr. Nam은 누구일 가능성이 가장 높습니까?",
                    explanation: "시내 투어를 이끌고(leading a tour) 일정을 변경했다는 내용으로 보아 가이드임을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t6-q160",
                    questionNo: 160,
                    text: "What does the article mention about the Craverton Art Museum?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It did not lose money yesterday.",
                        "B": "It is located near downtown Craverton.",
                        "C": "It is open to visitors on Tuesdays.",
                        "D": "It will be starting a series of art classes."
                    },
                    correctAnswer: "A",
                    translation: "Craverton 미술관에 대해 기사에서 언급한 내용은 무엇입니까?",
                    explanation: "화요일은 휴관일이라 정전으로 인한 수익의 차이가 없었다(did not make a difference in earnings)고 했습니다."
                },
                {
                    id: "v3-p7-t6-q161",
                    questionNo: 161,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"However, staff members did get the day off.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "C",
                    translation: "지정된 위치 [1], [2], [3], [4] 중 다음 문장이 들어가기에 가장 적절한 곳은?\n\"하지만, 직원들은 그날 휴무를 가졌습니다.\"",
                    explanation: "미술관은 화요일에 '공공에 개방을 하지 않는다'는 내용 뒤에 '하지만 직원들은 쉰다'는 부가적인 사실을 덧붙이는 [3]이 문맥상 자연스럽습니다."
                }
            ]
        },
        {
            id: "v3-p7-t6-set7",
            setType: "Single",
            questionRange: "162-165",
            passages: [
                {
                    id: "v3-p7-t6-s7-p1",
                    contextType: "P2_OFFI",
                    docType: "CHAT",
                    content: "Isabelle Porter (8:15 A.M.) Hi. Our new intern, Mila Erben, arrives tomorrow. Do you have any tasks for Mila to start on?\nOmar Shirani (8:16 A.M.) I'm really sorry. I was out of the office last week at the JNTD Convention. Can I get back to you later today?\nRico Alvarez (8:16 A.M.) I don't have anything for Mila right now.\nIsabelle Porter (8:17 A.M.) I'm confused. Your department manager mentioned that your team would greatly benefit from having an intern. Can you work together to find something for her to do?\nOmar Shirani (8:17 A.M.) Can you remind us what she's studying at the university?\nIsabelle Porter (8:18 A.M.) Accounting. Her résumé says she'd like to become an auditor.\nRico Alvarez (8:19 A.M.) Well, I might have a few tasks, although they may be a bit dull.\nIsabelle Porter (8:20 A.M.) That will do. And I might have some documents for her to copy. That ought to be enough for Mila's first week. But I'd appreciate it if you could meet with your team by Thursday and organize additional tasks for Mila for next week.",
                    translation: "Isabelle Porter (오전 8:15) 안녕. 새 인턴인 Mila Erben이 내일 와. Mila가 시작할 만한 업무가 있을까?\nOmar Shirani (오전 8:16) 정말 미안해. 지난주에 JNTD 컨벤션 때문에 사무실을 비웠거든. 오늘 나중에 다시 답해줘도 될까?\nRico Alvarez (오전 8:16) 지금 당장은 Mila에게 줄 일이 없네.\nIsabelle Porter (오전 8:17) 당황스럽네. 너희 부서 매니저님은 인턴이 있으면 팀에 큰 도움이 될 거라고 하셨거든. 그녀가 할 만한 일을 같이 좀 찾아봐 줄래?\nOmar Shirani (오전 8:17) 그녀가 대학교에서 무엇을 전공하고 있는지 다시 알려줄 수 있어?\nIsabelle Porter (오전 8:18) 회계학이야. 이력서 보니까 감사관(auditor)이 되고 싶어 하더라고.\nRico Alvarez (오전 8:19) 음, 일이 좀 지루할 수도 있겠지만 몇 가지 시킬 게 있을 것 같긴 해.\nIsabelle Porter (오전 8:20) 그거면 됐어. 그리고 나도 복사할 서류가 좀 있을 것 같아. 그 정도면 Mila의 첫 주 업무로는 충분하겠네. 하지만 목요일까지 팀원들이랑 상의해서 Mila가 다음 주에 할 추가 업무들을 정리해 줬으면 좋겠어."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t6-q162",
                    questionNo: 162,
                    text: "What is suggested about Ms. Erben?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "She is an accountant.",
                        "B": "She is a department manager.",
                        "C": "She is a convention planner.",
                        "D": "She is a student."
                    },
                    correctAnswer: "D",
                    translation: "Ms. Erben에 대해 알 수 있는 것은 무엇입니까?",
                    explanation: "대학교에서(at the university) 무엇을 공부하는지 묻는 것으로 보아 학생임을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t6-q163",
                    questionNo: 163,
                    text: "What did Mr. Shirani do last week?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Attend a convention",
                        "B": "Work at a branch office",
                        "C": "Take a vacation",
                        "D": "Start a new job"
                    },
                    correctAnswer: "A",
                    translation: "Mr. Shirani는 지난주에 무엇을 했습니까?",
                    explanation: "지난주에 JNTD 컨벤션에 참석하느라(at the JNTD Convention) 사무실을 비웠다고 했습니다."
                },
                {
                    id: "v3-p7-t6-q164",
                    questionNo: 164,
                    text: "At 8:20 A.M., what does Ms. Porter most likely mean when she writes, \"That will do\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "She will complete a project by herself.",
                        "B": "She thinks the work will take two weeks to do.",
                        "C": "She agrees with the idea Mr. Alvarez proposed.",
                        "D": "She will give Mr. Shirani more information later."
                    },
                    correctAnswer: "C",
                    translation: "오전 8:20에 Ms. Porter가 \"That will do\"라고 쓴 의미는 무엇입니까?",
                    explanation: "Rico가 지루하겠지만 시킬 일이 있을 것 같다고 제안한 것에 대해 '그거면 되겠다'며 동의하고 있습니다."
                },
                {
                    id: "v3-p7-t6-q165",
                    questionNo: 165,
                    text: "What does Ms. Porter ask the writers to do before Thursday?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Hire an intern",
                        "B": "Copy documents",
                        "C": "Send her an e-mail",
                        "D": "Plan a set of tasks"
                    },
                    correctAnswer: "D",
                    translation: "Ms. Porter가 목요일 전까지 대화 당사자들에게 요청한 일은 무엇입니까?",
                    explanation: "목요일까지 팀원들과 만나 다음 주 업무를 정리(organize additional tasks)해 달라고 요청했습니다."
                }
            ]
        },
        {
            id: "v3-p7-t6-set8",
            setType: "Single",
            questionRange: "166-168",
            passages: [
                {
                    id: "v3-p7-t6-s8-p1",
                    contextType: "P2_OFFI",
                    docType: "EMAIL",
                    content: "From: Vera Fernandez\nTo: Carla Rosa\nDate: June 07, 12:47 P.M.\nSubject: Initiatives for distance learning\n\nDear Ms. Rosa,\n\nI am contacting you on behalf of the Dolina Foundation. Our mission is to promote the use of distance-learning platforms in rural areas and communities that are isolated geographically. We do so through a network of partners in the technology industry. We would be honored to have your company join our network.\n\nAt 2:00 P.M. on June 25, Dolina is sponsoring a presentation entitled \"Distance Learning in Rural Libraries.\" The presentation will be given online as a webinar, using some of the technologies our partners have developed. Jay Ralston, the foundation's director of systems integration, will describe technologies being used to support academic and vocational education programs. In addition, five librarians will discuss how they offer a variety of education programs in their regions using technologies developed and delivered by our business partners. To register for the webinar, and to learn more about our foundation's projects, visit our Web site at www.dolinafoundation.org.\n\nFeel free to contact me if you have any questions. We hope that you will consider our invitation.\n\nWith kind regards,\n\nVera Fernandez, Outreach Coordinator",
                    translation: "발신: Vera Fernandez\n수신: Carla Rosa\n날짜: 6월 7일, 오후 12:47\n제목: 원격 학습 이니셔티브 관련\n\nMs. Rosa께,\n\nDolina 재단을 대표하여 연락드립니다. 저희의 미션은 지리적으로 고립된 농어촌 및 지역 사회에서 원격 학습 플랫폼의 활용을 증진하는 것입니다. 저희는 기술 산업계의 파트너 네트워크를 통해 이를 수행하고 있습니다. 귀사가 저희 네트워크에 합류해 주신다면 큰 영광이겠습니다.\n\n6월 25일 오후 2시, Dolina 재단은 \"농어촌 도서관의 원격 학습\"이라는 주제로 프레젠테이션을 주최합니다. 이번 프레젠테이션은 저희 파트너들이 개발한 최신 기술들을 활용하여 온라인 웨비나 형식으로 진행될 예정입니다. 재단의 시스템 통합 이사인 Jay Ralston이 학술 및 직업 교육 프로그램을 지원하는 데 사용되는 기술들에 대해 설명할 것입니다. 또한, 5명의 사서들이 비즈니스 파트너들이 개발하고 제공한 기술을 활용하여 각 지역에서 다양한 교육 프로그램을 어떻게 운영하고 있는지에 대해 논의할 예정입니다. 웨비나 등록 및 재단 프로젝트에 대한 자세한 정보는 www.dolinafoundation.org를 방문해 주시기 바랍니다.\n\n궁금한 사항이 있으시면 언제든지 문의해 주세요. 저희의 초대를 긍정적으로 검토해 주시길 바랍니다.\n\n감사합니다.\n\nVera Fernandez, 대외 협력 코디네이터"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t6-q166",
                    questionNo: 166,
                    text: "What does the Dolina Foundation do?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Sell software to schools",
                        "B": "Print textbooks used in schools",
                        "C": "Use technology to support learning",
                        "D": "Build libraries in large cities"
                    },
                    correctAnswer: "C",
                    translation: "Dolina 재단은 무엇을 하는 곳입니까?",
                    explanation: "원격 학습 플랫폼 활용을 증진(promote the use of distance-learning platforms)하고 기술을 통해 교육을 지원한다는 미션을 가지고 있습니다."
                },
                {
                    id: "v3-p7-t6-q167",
                    questionNo: 167,
                    text: "What is Ms. Rosa asked to do?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Approve a grant",
                        "B": "Participate in a webinar",
                        "C": "Apply for a job opening",
                        "D": "Visit some libraries"
                    },
                    correctAnswer: "B",
                    translation: "Ms. Rosa는 무엇을 하도록 요청받았습니까?",
                    explanation: "6월 25일에 열리는 웨비나(presentation... as a webinar)에 초대받았습니다."
                },
                {
                    id: "v3-p7-t6-q168",
                    questionNo: 168,
                    text: "Who most likely is Ms. Fernandez?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "A student in a foundation program",
                        "B": "An executive at a technology firm",
                        "C": "A researcher at a rural library",
                        "D": "An employee of the foundation"
                    },
                    correctAnswer: "D",
                    translation: "Ms. Fernandez는 누구일 가능성이 가장 높습니까?",
                    explanation: "재단을 대신하여(on behalf of the Dolina Foundation) 일하고 대외 협력 코디네이터(Outreach Coordinator)라는 직함을 가지고 있으므로 재단 직원입니다."
                }
            ]
        },
        {
            id: "v3-p7-t6-set9",
            setType: "Single",
            questionRange: "169-171",
            passages: [
                {
                    id: "v3-p7-t6-s9-p1",
                    contextType: "P4_MARK",
                    docType: "LETTER",
                    content: "29 July\n\nShari MacCauley\n103 Easton Lane\nTomintoul, Ballindalloch AB37 9EX\n\nDear Ms. MacCauley,\n\nIt was a privilege to stay in your home during the week of 22 July as part of the Scottish Connections home exchange program.\n\nThe location was the perfect setting for our family gathering. My daughter and son-in-law relished the peace and quiet of the village, while their children enjoyed playing in the wide-open space behind your home. And my husband was quite pleased with the large-screen television set in the living room.\n\nIt was very thoughtful of you to provide so many extra blankets. We did not expect it to be so cold at night in July.\n\nAs I said in the note I left on your dining room table on 25 July, the day of my wedding anniversary party, the lid of your food processor cracked as we were preparing our meal. We ordered a replacement lid that same day, which should be delivered to your home soon, assuming it hasn't been already. I sincerely apologize for the mishap.\n\nI hope that you and your friends enjoyed our apartment here in Aberdeen just as much as we enjoyed your mountain home. If so, we hope you will be willing to exchange homes with us again in the future.\n\nSincerely,\n\nClara Brinwall",
                    translation: "7월 29일\n\nShari MacCauley 귀하\n103 Easton Lane\nTomintoul, Ballindalloch AB37 9EX\n\nMacCauley 씨께,\n\nScottish Connections 집 교환 프로그램의 일환으로 7월 22일 주간에 귀하의 댁에 머물 수 있었던 것은 영광이었습니다.\n\n그곳의 위치는 저희 가족 모임을 하기에 더할 나위 없이 완벽한 환경이었습니다. 제 딸과 사위는 마을의 평화로움과 정적을 만끽했고, 아이들은 집 뒤의 넓은 공간에서 뛰어노는 것을 즐거워했습니다. 그리고 제 남편은 거실에 있는 대형 화면 TV를 보고 아주 흡족해했습니다.\n\n여분의 담요를 넉넉히 준비해 주신 세심한 배려에도 감사드립니다. 7월 밤이 그렇게 추울 줄은 예상하지 못했거든요.\n\n저의 결혼기념일 파티 날이었던 7월 25일에 식탁 위에 남겨둔 메모에도 썼듯이, 음식을 준비하던 중에 음기 처리기 뚜껑에 금이 갔습니다. 그날 바로 교체용 뚜껑을 주문했으니, 이미 도착하지 않았다면 곧 댁으로 배송될 것입니다. 불미스러운 사고에 대해 진심으로 사과드립니다.\n\n귀하와 친구분들도 저희가 귀하의 산속 집에서 즐거웠던 만큼 애버딘에 있는 저희 아파트에서 즐거운 시간을 보내셨기를 바랍니다. 그렇다면 나중에 다시 한번 집을 교환할 수 있기를 희망합니다.\n\n진심을 담아,\n\nClara Brinwall"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t6-q169",
                    questionNo: 169,
                    text: "What is a purpose of the letter?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To explain a family tradition",
                        "B": "To confirm that a package was received",
                        "C": "To express appreciation for a house",
                        "D": "To outline the benefits of taking a vacation"
                    },
                    correctAnswer: "C",
                    translation: "편지의 목적은 무엇입니까?",
                    explanation: "집 교환 프로그램을 통해 머물렀던 집에 대해 감사를 표하고 소소한 실수를 사과하기 위해 작성되었습니다."
                },
                {
                    id: "v3-p7-t6-q170",
                    questionNo: 170,
                    text: "What happened on July 25 ?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "An item was damaged.",
                        "B": "An order was delivered.",
                        "C": "An event was catered.",
                        "D": "A wedding was held."
                    },
                    correctAnswer: "A",
                    translation: "7월 25일에 무슨 일이 있었습니까?",
                    explanation: "7월 25일 결혼기념일 파티 날에 음식 처리기 뚜껑이 파손(the lid of your food processor cracked)되었습니다."
                },
                {
                    id: "v3-p7-t6-q171",
                    questionNo: 171,
                    text: "What is suggested about Ms. MacCauley?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "She heads the home exchange program.",
                        "B": "She lives in a mountainous area.",
                        "C": "She is a relative of Ms. Brinwall's.",
                        "D": "She plans to move to Aberdeen."
                    },
                    correctAnswer: "B",
                    translation: "Ms. MacCauley에 대해 알 수 있는 것은 무엇입니까?",
                    explanation: "그녀의 집을 'mountain home(산속 집)'이라고 칭했으므로 산악 지역에 거주함을 알 수 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t6-set10",
            setType: "Single",
            questionRange: "172-175",
            passages: [
                {
                    id: "v3-p7-t6-s10-p1",
                    contextType: "P2_OFFI",
                    docType: "EMAIL",
                    content: "From: Theresa Griffin <tgriffin@throngsoftware.com>\nTo: Hien Pham <hpham@ngoc.com>\nDate: September 20\nSubject: Information\n\nDear Mr. Pham:\n\nWelcome to Throng Software. We are pleased that you are joining the company. On your first day of work, Monday, October 3, please report to building 14 at 8:45 A.M. You can check in at the front desk, where you will be given a temporary ID badge. I will meet you there, show you to your office, and then take you on a tour of the building to introduce you to your colleagues. You will then go to Information Technology (IT) to receive your laptop, passwords, and security information. When you are finished, someone will guide you to Human Resources in building 12 so you can fill out payroll and benefits forms.\n\nPlease join me and several colleagues at 11:30 A.M. We will take you to one of our favorite restaurants near the office. The rest of the afternoon will be free for you to get settled into your office and review the information you receive during the day. I will stop by your office later in the day to make sure you know where all the office equipment is.\n\nI look forward to seeing you then.\n\nSincerely,\n\nTheresa Griffin\nHuman Resources, Throng Software",
                    translation: "발신: Theresa Griffin <tgriffin@throngsoftware.com>\n수신: Hien Pham <hpham@ngoc.com>\n날짜: 9월 20일\n제목: 안내\n\nMr. Pham께,\n\nThrong Software에 오신 것을 환영합니다. 저희 회사에 합류하게 되어 기쁩니다. 첫 출근일인 10월 3일 월요일 오전 8시 45분까지 14번 건물로 와주시기 바랍니다. 안내 데스크에서 체크인하시면 임시 ID 카드를 받으실 수 있습니다. 제가 그곳에서 만나 사무실로 안내하고 건물 투어를 하며 동료들에게 소개해 드리겠습니다. 그 후에는 IT 부서로 가서 노트북, 비밀번호 및 보안 정보를 수령하게 됩니다. 업무가 끝나면 12번 건물의 인사과로 안내받아 급여 및 복리후생 서류를 작성하시게 될 것입니다.\n\n오전 11시 30분에는 저와 동료들과 함께 식사하러 가시죠. 사무실 근처에 저희가 좋아하는 식당 중 한 곳으로 모시겠습니다. 오후 남은 시간은 사무실 자리를 정리하고 낮에 받으신 정보들을 검토하시기에 자유로운 시간이 될 것입니다. 나중에 제가 사무실로 들러서 모든 사무 기기 위치를 알고 계시는지 확인하겠습니다.\n\n그때 뵙기를 고대합니다.\n\n감사합니다.\n\nTheresa Griffin\n인사과, Throng Software"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t6-q172",
                    questionNo: 172,
                    text: "What will happen on October 3 ?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "New laptops will be issued to employees.",
                        "B": "A luncheon will be held in the cafeteria.",
                        "C": "Tours of a renovated building will be given.",
                        "D": "A new employee will start work."
                    },
                    correctAnswer: "D",
                    translation: "10월 3일에 무슨 일이 있습니까?",
                    explanation: "Mr. Pham의 첫 출근일(first day of work)이라는 내용이 지문 서두에 나옵니다."
                },
                {
                    id: "v3-p7-t6-q173",
                    questionNo: 173,
                    text: "Where will Mr. Pham complete some documents?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "In building 12",
                        "B": "In building 14",
                        "C": "In his office",
                        "D": "In the IT office"
                    },
                    correctAnswer: "A",
                    translation: "Mr. Pham은 어디에서 서류를 작성하게 됩니까?",
                    explanation: "12번 건물(building 12)에 있는 인사과(Human Resources)로 가서 서류를 작성한다고 명시되어 있습니다."
                },
                {
                    id: "v3-p7-t6-q174",
                    questionNo: 174,
                    text: "The word \"rest\" in paragraph 2, line 2, is closest in meaning to",
                    classification: "P7_VOCABULARY",
                    options: {
                        "A": "majority",
                        "B": "remainder",
                        "C": "break",
                        "D": "purpose"
                    },
                    correctAnswer: "B",
                    translation: "2단락 2행의 'rest'와 의미상 가장 가까운 단어는?",
                    explanation: "오후의 '나머지(remainder)' 시간이라는 의미로 사용되었습니다."
                },
                {
                    id: "v3-p7-t7-q175",
                    questionNo: 175,
                    text: "What will Mr. Pham do in the afternoon?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Test some equipment",
                        "B": "Visit Ms. Griffin's office",
                        "C": "Review some project proposals",
                        "D": "Learn where equipment is located"
                    },
                    correctAnswer: "D",
                    translation: "Mr. Pham은 오후에 무엇을 할 예정입니까?",
                    explanation: "오후 늦게 Ms. Griffin이 사무실로 들러서 모든 사무 기기가 어디 있는지(where all the office equipment is) 알려주기로 했습니다."
                }
            ]
        }
    ]
};
