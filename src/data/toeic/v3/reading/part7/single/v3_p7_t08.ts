import { Part7Test } from './types';

export const test8Data: Part7Test = {
    testId: 8,
    vol: 3,
    title: "Test 8",
    sets: [
        {
            id: "v3-p7-t8-set1",
            setType: "Single",
            questionRange: "147-148",
            passages: [
                {
                    id: "v3-p7-t8-s1-p1",
                    contextType: "P2_OFFI",
                    docType: "INFORMATION",
                    content: "Smith County Transportation Department\nCurrent Postings\n\nBridge Inspector (BI9253)—Take your career to new heights as a bridge inspector in beautiful Smith County, known for its spectacular and varied landscape! The geography of our county is large and hilly, necessitating the use of our many bridges and tunnels by residents and tourists alike. The position involves assessing the condition of existing bridges, tunnels, culverts, and related road signs as well as proposing and overseeing repairs. We offer competitive salaries with excellent benefits. For details on requirements and how to apply, please visit www.smithcounty.gov/jobs. The deadline is January 15.",
                    translation: "Smith 카운티 교통국\n현재 채용 공고\n\n교량 점검관 (BI9253)—멋지고 다양한 풍경으로 유명한 아름다운 Smith 카운티에서 교량 점검관으로서 여러분의 커리어를 새로운 높이로 끌어올리세요! 우리 카운티의 지형은 넓고 언덕이 많아 주민과 관광객 모두 수많은 교량과 터널을 이용해야 합니다. 이 직책은 기존의 교량, 터널, 배수관 및 관련 도로 표지판의 상태를 평가하고 수리 계획을 제안 및 감독하는 업무를 포함합니다. 우수한 복리후생과 경쟁력 있는 급여를 제공합니다. 자격 요건 및 지원 방법에 대한 자세한 내용은 www.smithcounty.gov/jobs를 방문하십시오. 마감일은 1월 15일입니다."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t8-q147",
                    questionNo: 147,
                    text: "What does the information suggest about Smith County?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "Its population is growing rapidly.",
                        "B": "Its tunnel system requires modernization.",
                        "C": "It is an attractive place to live and visit.",
                        "D": "It is currently building many new highways."
                    },
                    correctAnswer: "C",
                    translation: "이 정보에 따르면 Smith 카운티에 대해 무엇을 알 수 있습니까?",
                    explanation: "지문에서 'beautiful Smith County', 'spectacular and varied landscape', 'residents and tourists alike'라고 언급한 것으로 보아 살기 좋고 방문하기 좋은 매력적인 곳임을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t8-q148",
                    questionNo: 148,
                    text: "According to the information, what is one duty of the bridge inspector?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Supervising maintenance work",
                        "B": "Planning new bridges",
                        "C": "Collecting bridge and tunnel tolls",
                        "D": "Designing traffic signs"
                    },
                    correctAnswer: "A",
                    translation: "지문에 따르면, 교량 점검관의 임무 중 하나는 무엇입니까?",
                    explanation: "지문에서 'proposing and overseeing repairs(수리 제안 및 감독)' 업무가 언급되었으므로 '유지보수 작업 감독(Supervising maintenance work)'이 정답입니다."
                }
            ]
        },
        {
            id: "v3-p7-t8-set2",
            setType: "Single",
            questionRange: "149-150",
            passages: [
                {
                    id: "v3-p7-t8-s2-p1",
                    contextType: "P4_MARK",
                    docType: "NOTICE",
                    content: "Thank you for purchasing tickets for a tour of the historic Walton Steamship. If you need to cancel or change your appointment, please be aware of our cancellation policy. Cancellations up to one day before the scheduled tour will receive a refund of 50% per ticket. Canceling on the same day or failing to appear at the time of your scheduled tour will result in no refund. All refunds will be credited to the card used to purchase the tickets.\n\nPlease note that tours are conducted both inside the ship and outside on deck. Tours are rarely canceled due to weather. Please wear appropriate clothing in case we experience cold or wet weather.",
                    translation: "역사적인 Walton 증기선 투어 티켓을 구매해 주셔서 감사합니다. 예약을 취소하거나 변경해야 하는 경우, 저희의 취소 규정을 숙지해 주시기 바랍니다. 예정된 투어 하루 전까지 취소하시면 티켓당 50%의 환불을 받으실 수 있습니다. 당일 취소하거나 예약된 시간에 나타나지 않으시면 환불이 불가능합니다. 모든 환불은 티켓 구매 시 사용하신 카드로 입금됩니다.\n\n투어는 선박 내부와 외부 데크 모두에서 진행됨을 유의해 주십시오. 날씨 때문에 투어가 취소되는 경우는 드뭅니다. 날씨가 춥거나 비가 올 경우에 대비하여 적절한 복장을 착용하시기 바랍니다."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t8-q149",
                    questionNo: 149,
                    text: "For whom is the notice most likely intended?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Current ticket holders",
                        "B": "Steamship crew members",
                        "C": "Customer service representatives",
                        "D": "Tour guides in training"
                    },
                    correctAnswer: "A",
                    translation: "이 공지문은 누구를 대상으로 합니까?",
                    explanation: "서두에서 '명령하신 티켓 구매에 감사드린다(Thank you for purchasing tickets)'고 했으므로 현재 티켓 소지자들을 대상으로 함을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t8-q150",
                    questionNo: 150,
                    text: "What does the notice recommend people do?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Update their contact information",
                        "B": "Print historical reference materials",
                        "C": "Dress to spend time outdoors",
                        "D": "Arrive early on the day of the tour"
                    },
                    correctAnswer: "C",
                    translation: "이 공지문은 사람들에게 무엇을 권장합니까?",
                    explanation: "데크 외부에서도 투어가 진행되니 추위나 비에 대비해 적절한 옷을 입으라고(Please wear appropriate clothing) 권장하고 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t8-set3",
            setType: "Single",
            questionRange: "151-152",
            passages: [
                {
                    id: "v3-p7-t8-s3-p1",
                    contextType: "P2_OFFI",
                    docType: "EMAIL",
                    content: "From: support@volunix.com\nTo: Amrita Das <adas@myfastmail.com>\nDate: September 6\nSubject: Incident 030924\n\nDear Valued Customer:\n\nThank you for contacting Volunix Ltd., the online store for medical supplies. We apologize for the technical difficulty you are experiencing with your online purchase. Your support ticket was submitted on Wednesday, September 6, at 10:12 p.m. You can track the status of your incident by using the \"case status\" feature. You can also use this feature to add information to the ticket at any time.\n\nThe Volunix team responds to support issues as quickly as possible. During regular business hours (8 a.m. to 6 p.m., Monday through Friday), you can expect a response within one hour. Tickets submitted after business hours and on weekends will be responded to before noon of the following business day.\n\nThank you,\n\nThe Volunix Web Team",
                    translation: "발신: support@volunix.com\n수신: Amrita Das <adas@myfastmail.com>\n날짜: 9월 6일\n제목: Incident 030924\n\n존경하는 고객님께:\n\n의료 용품 전문 온라인 쇼핑몰인 Volunix Ltd.를 이용해 주셔서 감사합니다. 온라인 구매 과정에서 겪고 계신 기술적 어려움에 대해 사과드립니다. 고객님의 지원 요청(티켓)이 9월 6일 수요일 오후 10시 12분에 접수되었습니다. '사건 상태(case status)' 기능을 통해 진행 현황을 확인하실 수 있으며, 언제든지 추가 정보를 입력하실 수도 있습니다.\n\nVolunix 팀은 지원 요청에 대해 최대한 신속하게 대응하고 있습니다. 정규 영업시간(월~금, 오전 8시~오후 6시) 중에는 1시간 이내에 답변을 받으실 수 있습니다. 영업시간 이후나 주말에 접수된 건은 다음 영업일 정오 이전까지 답변해 드립니다.\n\n감사합니다.\n\nVolunix 웹 팀 드림"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t8-q151",
                    questionNo: 151,
                    text: "What problem is Ms. Das most likely experiencing?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "Her firm's Web site is not accessible.",
                        "B": "Her computer needs a system update.",
                        "C": "She has not received a refund.",
                        "D": "She is unable to buy an item."
                    },
                    correctAnswer: "D",
                    translation: "Ms. Das가 겪고 있는 문제는 무엇일 가능성이 가장 높습니까?",
                    explanation: "지문에서 '온라인 구매 과정에서의 기술적 어려움(technical difficulty... with your online purchase)'을 언급했으므로 상품 구매 시 문제가 발생했음을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t8-q152",
                    questionNo: 152,
                    text: "What is indicated about a support ticket?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It was submitted incorrectly.",
                        "B": "It was submitted after business hours.",
                        "C": "It was resolved in one hour.",
                        "D": "It was addressed by a Volunix supervisor."
                    },
                    correctAnswer: "B",
                    translation: "지원 요청(티켓)에 대해 명시된 사실은 무엇입니까?",
                    explanation: "티켓 접수 시간이 오후 10시 12분이고 영업시간은 오후 6시까지이므로 영업시간 이후에 제출되었음을 알 수 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t8-set4",
            setType: "Single",
            questionRange: "153-155",
            passages: [
                {
                    id: "v3-p7-t8-s4-p1",
                    contextType: "P2_OFFI",
                    docType: "EMAIL",
                    content: "From: George Siskos <gsiskos@crehcorp.com>\nTo: Mary Lim <mlim412@mailhouz.com>\nDate: September 24\nSubject: Referral from Joe Argento\nAttachment: Information\n\nHello Ms. Lim,\n\nI am George Siskos, Recruiting Manager at Crehcorp Ltd. We are currently looking to hire an accounting clerk, and Joe Argento recommended you. From what Joe told me, your background makes you a good fit for the role (posting attached). If you are interested in learning more about Crehcorp and the position, I will be happy to provide further information. Let me know when you are available to talk, and I will give you a call.\n\nI look forward to hearing back from you!\n\nGeorge Siskos",
                    translation: "발신: George Siskos <gsiskos@crehcorp.com>\n수신: Mary Lim <mlim412@mailhouz.com>\n날짜: 9월 24일\n제목: Joe Argento의 추천 관련\n첨부파일: 정보\n\nMs. Lim께,\n\n안녕하세요, Crehcorp Ltd.의 채용 매니저 George Siskos입니다. 저희는 현재 회계 사무원을 채용 중이며, Joe Argento 씨가 귀하를 추천해 주셨습니다. Joe 씨에게 듣기로 귀하의 경력이 이 직무(공고문 첨부)에 매우 적합하다고 판단됩니다. 저희 회사와 직무에 대해 더 알고 싶으시다면 기꺼이 추가 정보를 제공해 드리겠습니다. 대화 가능한 시간을 알려주시면 제가 전화를 드리겠습니다.\n\n답장 기다리겠습니다!\n\nGeorge Siskos"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t8-q153",
                    questionNo: 153,
                    text: "What is the purpose of the e-mail?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To advertise for Crehcorp",
                        "B": "To request a reference",
                        "C": "To recruit an employee",
                        "D": "To announce a promotion"
                    },
                    correctAnswer: "C",
                    translation: "이 이메일의 목적은 무엇입니까?",
                    explanation: "채용 매니저가 회계 사무원을 채용하기 위해 추천받은 후보자에게 연락한 것이므로 직원 채용이 목적입니다."
                },
                {
                    id: "v3-p7-t8-q154",
                    questionNo: 154,
                    text: "What does Mr. Siskos attach?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "A job description",
                        "B": "A financial report",
                        "C": "A conference invitation",
                        "D": "A link to driving directions"
                    },
                    correctAnswer: "A",
                    translation: "Mr. Siskos가 첨부한 것은 무엇입니까?",
                    explanation: "지문에서 '공고문 첨부(posting attached)'라고 언급했으므로 직무 설명서(job description)가 정답입니다."
                },
                {
                    id: "v3-p7-t8-q155",
                    questionNo: 155,
                    text: "What is Ms. Lim asked to do?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Visit Crehcorp's Web site",
                        "B": "Contact Mr. Argento",
                        "C": "Mail a résumé",
                        "D": "Respond to the e-mail"
                    },
                    correctAnswer: "D",
                    translation: "Ms. Lim은 무엇을 하라는 요청을 받았습니까?",
                    explanation: "대화 가능한 시간을 알려달라(Let me know when you are available to talk)고 했으므로 이메일에 답변하라는 의미입니다."
                }
            ]
        },
        {
            id: "v3-p7-t8-set5",
            setType: "Single",
            questionRange: "156-157",
            passages: [
                {
                    id: "v3-p7-t8-s5-p1",
                    contextType: "P2_OFFI",
                    docType: "CHAT_MESSAGE",
                    content: "Francis Chang [4:32 P.M.] Hi, Connie. I'm putting together the schedule for the summer. Will you still be able to teach the Friday afternoon workshops twice a month? We could take turns, and I would take the other two Fridays.\nConnie Kehoe [4:39 P.M.] Thanks for getting in touch, Francis. I'd still like to be involved, but I'll be busier this summer. I'm coordinating a volleyball league.\nFrancis Chang [4:40 P.M.] Well, OK. I guess I could cover the workshops three Fridays a month.\nConnie Kehoe [4:42 P.M.] That would be perfect. That will give me enough time for my other obligation.\nFrancis Chang [4:43 P.M.] The other thing is, this summer we want to focus on painting with watercolors, rather than basic drawing.\nConnie Kehoe [4:44 P.M.] I'll look over some old lesson plans, but that should be fine. Also, let's get together soon to work on a budget for the class materials.",
                    translation: "Francis Chang [오후 4:32] 안녕, Connie. 여름 일정을 짜고 있어. 금요일 오후 워크숍을 한 달에 두 번 여전히 가르칠 수 있니? 우리가 교대로 하고, 내가 나머지 두 번의 금요일을 맡으면 어떨까 해.\nConnie Kehoe [오후 4:39] 연락 줘서 고마워, Francis. 계속 참여하고 싶긴 하지만 이번 여름엔 좀 더 바쁠 것 같아. 배구 리그를 조율하고 있거든.\nFrancis Chang [오후 4:40] 음, 알았어. 그럼 내가 한 달에 세 번의 금요일 워크숍을 맡을 수 있을 것 같아.\nConnie Kehoe [오후 4:42] 그거면 완벽해. 그러면 내 다른 업무를 처리할 충분한 시간이 생길 거야.\nFrancis Chang [오후 4:43] 그리고 또 한 가지는, 이번 여름에는 기초 드로잉보다는 수채화 페인팅에 집중하려고 해.\nConnie Kehoe [오후 4:44] 옛날 레슨 플랜들을 좀 살펴볼게, 괜찮을 것 같아. 그리고 조만간 만나서 수업 준비물 예산 작업을 같이 하자."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t8-q156",
                    questionNo: 156,
                    text: "At 4:42 P.M., what does Ms. Kehoe mean when she writes, \"That would be perfect\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "She is looking forward to summer.",
                        "B": "She thinks a workshop will be popular.",
                        "C": "She is happy with a proposed schedule.",
                        "D": "She is glad that Mr. Chang will be hired."
                    },
                    correctAnswer: "C",
                    translation: "오후 4:42에 Ms. Kehoe가 \"That would be perfect\"라고 쓴 의도는 무엇입니까?",
                    explanation: "Francis가 세 번의 워크숍을 맡겠다고 제안한 일정에 만족하며, 다른 일(배구 리그 조율)을 할 시간이 생긴다는 의미로 사용했습니다."
                },
                {
                    id: "v3-p7-t8-q157",
                    questionNo: 157,
                    text: "What type of workshop is being planned?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Art",
                        "B": "Personal finance",
                        "C": "Travel",
                        "D": "Customer service"
                    },
                    correctAnswer: "A",
                    translation: "어떤 종류의 워크숍이 계획되고 있습니까?",
                    explanation: "수채화(watercolors)와 드로잉(drawing)이라는 단어로 보아 미술(Art) 워크숍임을 알 수 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t8-set6",
            setType: "Single",
            questionRange: "158-160",
            passages: [
                {
                    id: "v3-p7-t8-s6-p1",
                    contextType: "P2_OFFI",
                    docType: "LETTER",
                    content: "May 15\n\nMr. Roger Lang, Executive Director\nParker Solutions Foundation\n40 Northside Drive, Suite 500\nPortland, OR 97215\n\nDear Mr. Lang:\n\nThe purpose of this letter is to invite you, on behalf of the board of directors, to be the keynote speaker at the International Green Solutions Research Institute (IGSRI) Conference. — [1] —. It will be held at the Fairview Conference Center in Saint Louis, Missouri, from December 3 to 5. You were recommended by a number of my colleagues. — [2] —.\n\nProfessor Suzanne Benedetto will deliver the opening speech on the morning of December 3. A draft program will be sent to you in two weeks to give you an idea of the topics that will be highlighted at the conference.\n\nWe expect attendance this year to be the highest ever, around 2,500 delegates and 40 speakers. — [3] —. This includes a large contingent from our newest chapter in Geneva. — [4] —.\n\nI hope to contact you in a week to follow up and answer any questions you may have.\n\nYours sincerely,\n\nBrian Morgan",
                    translation: "5월 15일\n\nRoger Lang 씨, 성함 제위\nParker Solutions Foundation 상임 이사\n40 Northside Drive, Suite 500\nPortland, OR 97215\n\nLang 씨께:\n\n본 서신은 이사회를 대신하여 귀하를 국제 그린 솔루션 연구소(IGSRI) 컨퍼런스의 기조 연설자로 초대하기 위해 작성되었습니다. — [1] —. 이번 행사는 12월 3일부터 5일까지 미주리주 세인트루이스의 Fairview 컨퍼런스 센터에서 개최됩니다. 귀하는 동료들의 수많은 추천을 받으셨습니다. — [2] —.\n\nSuzanne Benedetto 교수가 12월 3일 오전에 개회사를 할 예정입니다. 2주 후에 초안 프로그램을 보내드려 컨퍼런스에서 중점적으로 다룰 주제들을 확인하실 수 있도록 하겠습니다.\n\n올해는 약 2,500명의 대의원과 40명의 발표자가 참석하여 역대 최대 규모가 될 것으로 예상됩니다. — [3] —. 여기에는 제네바의 새로운 지부에서 온 대규모 그룹도 포함됩니다. — [4] —.\n\n일주일 내에 다시 연락드려 후속 논의를 진행하고 궁금한 점에 답변해 드리겠습니다.\n\n진심을 담아,\n\nBrian Morgan 드림"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t8-q158",
                    questionNo: 158,
                    text: "Why was the letter to Mr. Lang written?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To request a recommendation letter from him",
                        "B": "To ask him to evaluate some conference topics",
                        "C": "To congratulate him for receiving an award",
                        "D": "To ask him to participate in a conference"
                    },
                    correctAnswer: "D",
                    translation: "Mr. Lang에게 편지를 보낸 목적은 무엇입니까?",
                    explanation: "컨퍼런스 기조 연설자(keynote speaker)로 초대하려는 목적이 서두에 명시되어 있습니다."
                },
                {
                    id: "v3-p7-t8-q159",
                    questionNo: 159,
                    text: "In what city will the IGSRI Conference be held?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Portland",
                        "B": "Fairview",
                        "C": "Saint Louis",
                        "D": "Geneva"
                    },
                    correctAnswer: "C",
                    translation: "IGSRI 컨퍼런스는 어느 도시에서 개최됩니까?",
                    explanation: "지문에서 'held at... in Saint Louis, Missouri'라고 언급되었습니다."
                },
                {
                    id: "v3-p7-t8-q160",
                    questionNo: 160,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"They spoke highly of your expertise.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "B",
                    translation: "지정된 위치 [1], [2], [3], [4] 중 다음 문장이 들어가기에 가장 적절한 곳은?\n\"그들은 귀하의 전문성을 매우 높이 평가했습니다.\"",
                    explanation: "동료들의 추천을 받았다는 문장(You were recommended by a number of my colleagues) 바로 뒤인 [2]가 가장 논리적입니다."
                }
            ]
        },
        {
            id: "v3-p7-t8-set7",
            setType: "Single",
            questionRange: "161-163",
            passages: [
                {
                    id: "v3-p7-t8-s7-p1",
                    contextType: "P2_OFFI",
                    docType: "WEBPAGE",
                    content: "www.sergeyparksandrec.gov/survey\n\nWelcome!\n\nYou have been directed to this survey through a page on the Sergey Parks and Recreation Department's Web site, from one of Ecology Alive's most recent online newsletters, or from a friend's social media page. Regardless of how you got here, we appreciate your taking the time to complete it.\n\nThis survey aims to help local wildlife organizations find practical approaches to attracting a dedicated and reliable volunteer base. The survey takes about 15 minutes to complete, and your participation is completely optional. If you do not wish to answer a particular question, you can move on to the next one.\n\nIf you have any questions regarding how this survey will be used, please contact Stefan McHann at stefan_mchann@sergeyparksandrec.gov.\n\nSurvey #4123\nName: Kenshawn Odeyemi",
                    translation: "Welcome!\n\n귀하는 Sergey 공원 및 레크리에이션 부서 웹사이트의 페이지, Ecology Alive의 최신 온라인 뉴스레터 중 하나, 또는 친구의 소셜 미디어 페이지를 통해 이 설문조사로 안내되었습니다. 어떤 경로로 오셨든 시간을 내어 설문에 참여해 주셔서 감사합니다.\n\n이 설문조사는 지역 야생 동물 보호 단체들이 헌신적이고 신뢰할 수 있는 자원봉사자 기반을 유치하기 위한 실질적인 접근 방식을 찾는 데 목적이 있습니다. 설문 소요 시간은 약 15분이며 참여는 완전히 자발적입니다. 특정 질문에 대답하고 싶지 않으시면 다음 질문으로 넘어가실 수 있습니다.\n\n본 설문 결과의 활용 방안에 대해 궁금한 점이 있으시면 Stefan McHann(stefan_mchann@sergeyparksandrec.gov)에게 문의해 주십시오.\n\n설문 번호 #4123\n성함: Kenshawn Odeyemi"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t8-q161",
                    questionNo: 161,
                    text: "What is indicated about the survey?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It was recently modified.",
                        "B": "It can be accessed from multiple online sources.",
                        "C": "It requires an hour to complete.",
                        "D": "It is being sent only to university students."
                    },
                    correctAnswer: "B",
                    translation: "설문조사에 대해 알 수 있는 사실은 무엇입니까?",
                    explanation: "공원 웹사이트, 뉴스레터, 소셜 미디어 등 세 가지 경로(multiple online sources)를 통해 접속할 수 있다고 언급되었습니다."
                },
                {
                    id: "v3-p7-t8-q162",
                    questionNo: 162,
                    text: "What is the purpose of the survey?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To find ways to recruit volunteers",
                        "B": "To evaluate an organization's strengths",
                        "C": "To assess an area's wildlife populations",
                        "D": "To determine important leadership traits"
                    },
                    correctAnswer: "A",
                    translation: "설문조사의 목적은 무엇입니까?",
                    explanation: "자원봉사자 기반을 유치하기 위한 실무적 방식(practical approaches to attracting... volunteer base)을 찾는 것이 목적입니다."
                },
                {
                    id: "v3-p7-t8-q163",
                    questionNo: 163,
                    text: "What is suggested about the survey respondents?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "They can skip some of the questions.",
                        "B": "They must subscribe to Ecology Alive.",
                        "C": "They will be paid for their participation.",
                        "D": "They will receive an additional survey from Mr. McHann."
                    },
                    correctAnswer: "A",
                    translation: "설문 응답자들에 대해 알 수 있는 사실은 무엇입니까?",
                    explanation: "원하지 않는 질문은 답변하지 않고 다음으로 넘어가도 된다(move on to the next one)고 했으므로 질문을 건너뛸 수 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t8-set8",
            setType: "Single",
            questionRange: "164-167",
            passages: [
                {
                    id: "v3-p7-t8-s8-p1",
                    contextType: "P2_OFFI",
                    docType: "NOTICE",
                    content: "December 1\nAttention, All Employees:\n\nBeginning on January 1, Barkley-Stephens Corporation (BSC) will transition to a security system that uses integrated ID badges. Until now, BSC employees have used traditional identification cards that security personnel checked at entrances to the building. They simply compared the badge photograph with the employee's appearance. The new system will be more technologically advanced, integrating ID badge information with various access points around our facility.\n\nIntegrated ID badges allow employees entry only to areas of the building that are permitted to them. Moreover, the badges create an electronic record of who has entered which areas of the building and when. In the case of temporary employees, badges will be disabled when their tenure ends.\n\nNew photographs of all staff will be taken in mid-December, when everyone will be asked to fill out a brief form to complete badge processing.",
                    translation: "12월 1일\n전 직원 주목:\n\n1월 1일부터 Barkley-Stephens Corporation (BSC)은 통합 ID 배지를 사용하는 보안 시스템으로 전환할 예정입니다. 지금까지 BSC 직원들은 건물 입구에서 보안 요원이 확인하는 전통적인 신분증을 사용해 왔습니다. 단순히 배지 사진과 직원의 실제 모습을 비교하는 방식이었습니다. 새로운 시스템은 기술적으로 더 진보하여, 시설 주변의 다양한 출입 지점들과 ID 배지 정보를 통합할 것입니다.\n\n통합 ID 배지는 허가된 구역에만 출입할 수 있도록 합니다. 또한 배지는 누가 언제 어느 구역에 들어갔는지에 대한 전자 기록을 생성합니다. 계약직 직원의 경우 재직 기간이 끝나면 배지가 비활성화됩니다.\n\n12월 중순에 모든 직원의 새로운 사진 촬영이 진행될 예정이며, 이때 배지 처리를 위한 간단한 양식을 작성해 주셔야 합니다."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t8-q164",
                    questionNo: 164,
                    text: "What is the purpose of the notice?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To ask employees to submit information",
                        "B": "To encourage greater use of the facilities",
                        "C": "To discuss renovations to a building",
                        "D": "To announce security system changes"
                    },
                    correctAnswer: "D",
                    translation: "이 공지문의 목적은 무엇입니까?",
                    explanation: "성능이 향상된 새로운 ID 배지 보안 시스템으로의 전환을 알리는 것이 주목적입니다."
                },
                {
                    id: "v3-p7-t8-q165",
                    questionNo: 165,
                    text: "The word \"points\" in paragraph 1, line 6, is closest in meaning to",
                    classification: "P7_VOCABULARY",
                    options: {
                        "A": "purposes",
                        "B": "details",
                        "C": "places",
                        "D": "moments"
                    },
                    correctAnswer: "C",
                    translation: "첫 단락 6행의 'points'와 의미상 가장 가까운 단어는?",
                    explanation: "출입 지점(access points)은 출입 장소(places)를 의미합니다."
                },
                {
                    id: "v3-p7-t8-q166",
                    questionNo: 166,
                    text: "What is a stated advantage of the new ID badges?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "They fit conveniently into a pocket.",
                        "B": "They allow access to additional areas of a building.",
                        "C": "They are more durable than the older ID cards.",
                        "D": "They can track an employee's location on-site."
                    },
                    correctAnswer: "D",
                    translation: "새로운 ID 배지의 장점으로 언급된 것은 무엇입니까?",
                    explanation: "누가 언제 어디를 출입했는지 전자 기록을 남긴다(create an electronic record)는 것은 직원의 위치 추적이 가능함을 시사합니다."
                },
                {
                    id: "v3-p7-t8-q167",
                    questionNo: 167,
                    text: "According to the notice, what feature of the current IDs will be updated?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "The photo",
                        "B": "The company logo",
                        "C": "The shape",
                        "D": "The employee's job title"
                    },
                    correctAnswer: "A",
                    translation: "지문에 따르면, 현재 ID의 어떤 특징이 업데이트될 예정입니까?",
                    explanation: "전 직원을 대상으로 '새로운 사진 촬영(New photographs)'이 있을 것이라고 명시되어 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t8-set9",
            setType: "Single",
            questionRange: "168-171",
            passages: [
                {
                    id: "v3-p7-t8-s9-p1",
                    contextType: "P2_OFFI",
                    docType: "CHAT_MESSAGE",
                    content: "Franklin Smith (7:51 A.M.) Good morning, Josephine and Carl. Is either one of you at the office yet? My train is running late and I want to make sure everything is set up for our 8:30 A.M. workshop.\nJosephine Mallian (7:56 A.M.) I'm walking in now. What can I do to help, Franklin?\nCarl Domingo (7:57 A.M.) I'll be there in about ten minutes. Are you talking about the workshop in the Aster Room? Because there is another workshop taking place in Obell Hall too.\nFranklin Smith (7:59 A.M.) Yes, the one in the Aster Room—the Savvy Steel sales workshop. I would appreciate it if you would rearrange the seats into a circle, turn on the projector, and run through the presentation slides I sent last night, just to make sure that everything, including the audio, is working.\nCarl Domingo (8:02 A.M.) Got it. I actually set the chairs up last night.\nJosephine Mallian (8:04 A.M.) Thanks, Carl. Would you mind printing out fifteen copies of the agenda while I take care of the rest?\nCarl Domingo (8:05 A.M.) Sure. I'll get it done as soon as possible.\nFranklin Smith (8:07 A.M.) Thank you both. My train is arriving now. I think I'll make it in time.\nJosephine Mallian (8:08 A.M.) No problem, Franklin. We will also make sure there is plenty of coffee for you!",
                    translation: "Franklin Smith (오전 7:51) 좋은 아침이에요, Josephine, Carl. 두 분 중 사무실에 도착하신 분 계신가요? 열차가 연착 중이라 8시 30분 워크숍 준비가 다 됐는지 확인하고 싶어서요.\nJosephine Mallian (오전 7:56) 저 지금 들어가고 있어요. 뭘 도와드릴까요, Franklin?\nCarl Domingo (오전 7:57) 전 10분 정도 걸려요. Aster 룸에서 열리는 워크숍 말씀하시는 거죠? Obell 홀에서도 다른 워크숍이 열리고 있거든요.\nFranklin Smith (오전 7:59) 네, Aster 룸에서 열리는 Savvy Steel 영업 워크숍이요. 좌석을 원형으로 다시 배치해 주시고, 프로젝터를 켜서 제가 어젯밤에 보낸 슬라이드들을 한 번 돌려봐 주시면 감사하겠습니다. 오디오를 포함해 모든 게 잘 작동하는지 확인해 주세요.\nCarl Domingo (오전 8:02) 알겠습니다. 좌석은 사실 어젯밤에 미리 배치해 뒀어요.\nJosephine Mallian (오전 8:04) 고마워요 Carl. 제가 나머지를 챙기는 동안 안건지(agenda) 15부만 복사해 줄 수 있나요?\nCarl Domingo (오전 8:05) 물론이죠. 가능한 한 빨리 처리하겠습니다.\nFranklin Smith (오전 8:07) 두 분 모두 고마워요. 이제 열차가 도착하네요. 제시간에 도착할 것 같습니다.\nJosephine Mallian (오전 8:08) 문제없어요, Franklin. 커피도 넉넉히 준비해 놓을게요!"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t8-q168",
                    questionNo: 168,
                    text: "Why did Mr. Smith send the first message?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To extend an invitation",
                        "B": "To request some help",
                        "C": "To apologize for a mistake",
                        "D": "To confirm a travel reservation"
                    },
                    correctAnswer: "B",
                    translation: "Mr. Smith가 첫 번째 메시지를 보낸 이유는 무엇입니까?",
                    explanation: "열차가 연착되어 워크숍 준비를 도와달라고 요청(request some help)하기 위해 연락했습니다."
                },
                {
                    id: "v3-p7-t8-q169",
                    questionNo: 169,
                    text: "What is suggested about the Savvy Steel meeting?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "It is being moved to a different location.",
                        "B": "It is one of two meetings taking place on the same day.",
                        "C": "It will include a presentation by Ms. Mallian.",
                        "D": "It will start later than planned."
                    },
                    correctAnswer: "B",
                    translation: "Savvy Steel 회의에 대해 알 수 있는 것은 무엇입니까?",
                    explanation: "Obell 홀에서 또 다른 워크숍이 열린다고 했으므로, 같은 날 최소 두 개의 워크숍이 진행됨을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t8-q170",
                    questionNo: 170,
                    text: "At 8:02 A.M., what does Mr. Domingo most likely mean when he writes, \"Got it\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "He will check some equipment.",
                        "B": "He will unlock the Aster Room.",
                        "C": "He will bring some more chairs.",
                        "D": "He will revise the meeting's agenda."
                    },
                    correctAnswer: "A",
                    translation: "오전 8:02에 Mr. Domingo가 \"Got it\"이라고 쓴 의도는 무엇입니까?",
                    explanation: "Franklin이 프로젝터를 켜고 슬라이드가 잘 작동하는지 확인해달라고 한 요청에 대해 알았다고 답한 것이므로 설비 점검(check some equipment)을 하겠다는 의미입니다."
                },
                {
                    id: "v3-p7-t8-q171",
                    questionNo: 171,
                    text: "What is Mr. Domingo asked to do?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Bring coffee to his coworkers",
                        "B": "Make changes to some slides",
                        "C": "Meet Mr. Smith at the station",
                        "D": "Make some copies"
                    },
                    correctAnswer: "D",
                    translation: "Mr. Domingo는 무엇을 해달라는 요청을 받았습니까?",
                    explanation: "Josephine이 안건지 15부를 복사해달라(printing out fifteen copies)고 요청했습니다."
                }
            ]
        },
        {
            id: "v3-p7-t8-set10",
            setType: "Single",
            questionRange: "172-175",
            passages: [
                {
                    id: "v3-p7-t8-s10-p1",
                    contextType: "P2_OFFI",
                    docType: "LETTER",
                    content: "Foxtail Airlines\n\nJuly 30\n\nMs. Gina Carracia, General Manager\nObsidian Villa\n1121 Marine Boulevard\nSeattle, WA 98101\n\nDear Ms. Carracia:\n\nMy name is Isaac Bolton, and I am Director of Marketing at Foxtail Airlines. — [1] —. I am writing to share a marketing idea with you that would be beneficial for both our companies. Our crew members who fly into Seattle have stayed at Obsidian Villa several times in the past. They report that the rooms are consistently comfortable and clean and that the staff is friendly and efficient. — [2] —. However, there is often no vacancy at your excellent establishment, and so our crews must stay elsewhere. We have arrangements with hotels in several cities around the world in which rooms are reserved for our crews in advance. Foxtail Airlines advertises for these hotels in our in-flight magazine at a significant discount. — [3] —. We would like to develop a similar partnership with Obsidian Villa.\n\nTo give you an idea of the advertising possibilities we offer, our graphic design team has created four potential advertisements. They are enclosed with this letter. — [4] —. I hope these samples demonstrate how enthusiastic we are about promoting Obsidian Villa to the over three million passengers who fly with us every year. If you are interested in exploring this idea further, please contact me by phone at 546-555-0182 or by e-mail at i.r.bolton@foxtailairlines.com. I hope to have the opportunity to work with you.\n\nSincerely,\n\nIsaac Bolton\nIsaac Bolton, Director of Marketing\nFoxtail Airlines\nEnclosures",
                    translation: "Foxtail 항공사\n\n7월 30일\n\nGina Carracia 씨, 성함 제위\nObsidian Villa 총지배인\n1121 Marine Boulevard\nSeattle, WA 98101\n\nCarracia 씨께:\n\n제 이름은 Isaac Bolton이며, Foxtail 항공의 마케팅 이사입니다. — [1] —. 양사 모두에 유익할 수 있는 마케팅 아이디어를 공유하고자 서신을 보냅니다. 시애틀로 비행하는 저희 승무원들은 과거에 여러 차례 Obsidian Villa에 머문 적이 있습니다. 객실이 항상 안락하고 깨끗하며 직원들이 친절하고 효율적이라는 보고를 받았습니다. — [2] —. 하지만 귀사의 훌륭한 숙소에 빈 객실이 없는 경우가 많아 저희 승무원들이 다른 곳에 머물러야만 했습니다. 저희는 이미 전 세계 여러 도시의 호텔들과 계약을 맺어 승무원용 객실을 미리 예약해 두고 있습니다. Foxtail 항공은 해당 호텔들을 저희 기내 잡지에 대폭 할인된 가격으로 광고해 줍니다. — [3] —. 저희는 Obsidian Villa와도 이와 유사한 파트너십을 구축하고 싶습니다.\n\n저희가 제공하는 광고 가능성에 대해 설명드리기 위해 그래픽 디자인 팀에서 네 가지 광고 시안을 제작했습니다. 본 서신에 동봉하였습니다. — [4] —. 이 샘플들이 매년 저희 항공을 이용하는 300만 명 이상의 승객들에게 Obsidian Villa를 홍보하는 데 있어 저희가 얼마나 열정적인지 보여주기를 바랍니다. 본 제안에 대해 더 자세히 논의하고 싶으시다면 546-555-0182로 전화하시거나 i.r.bolton@foxtailairlines.com으로 이메일을 보내주십시오. 함께 일할 수 있는 기회가 있기를 고대합니다.\n\n진심을 담아,\n\nIsaac Bolton\nIsaac Bolton, 마케팅 이사\nFoxtail 항공\n동봉물"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t8-q172",
                    questionNo: 172,
                    text: "What is the purpose of the letter?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To introduce a product",
                        "B": "To make a reservation",
                        "C": "To propose a new partnership",
                        "D": "To announce a promotion"
                    },
                    correctAnswer: "C",
                    translation: "이 편지의 목적은 무엇입니까?",
                    explanation: "항공 승무원용 객실 확보를 위한 제휴와 그 대가로 기내 잡지 광고를 제공하는 새로운 파트너십을 제안하고 있습니다."
                },
                {
                    id: "v3-p7-t8-q173",
                    questionNo: 173,
                    text: "What is indicated about Obsidian Villa?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It usually has rooms available.",
                        "B": "It recently hired additional managers.",
                        "C": "It has three million customers a year.",
                        "D": "It provides good customer service."
                    },
                    correctAnswer: "D",
                    translation: "Obsidian Villa에 대해 알 수 있는 사실은 무엇입니까?",
                    explanation: "직원들이 친절하고 유능하다(staff is friendly and efficient)고 언급했으므로 고객 서비스가 좋음을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t8-q174",
                    questionNo: 174,
                    text: "What did Mr. Bolton send with the letter?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Sample advertisements",
                        "B": "An in-flight magazine",
                        "C": "Airline tickets",
                        "D": "A client's itinerary"
                    },
                    correctAnswer: "A",
                    translation: "Mr. Bolton이 편지와 함께 보낸 것은 무엇입니까?",
                    explanation: "광고 가능성을 보여주기 위해 제작한 '잠재적 광고 시안(four potential advertisements)'을 동봉했다고 언급했습니다."
                },
                {
                    id: "v3-p7-t8-q175",
                    questionNo: 175,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"I have read numerous positive reviews that say the same.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "B",
                    translation: "지정된 위치 [1], [2], [3], [4] 중 다음 문장이 들어가기에 가장 적절한 곳은?\n\"저 역시 같은 내용의 긍정적인 리뷰들을 수없이 읽어보았습니다.\"",
                    explanation: "승무원들의 긍정적인 피드백을 전달한 바로 뒤인 [2]가 가장 자연스럽습니다."
                }
            ]
        }
    ]
};
