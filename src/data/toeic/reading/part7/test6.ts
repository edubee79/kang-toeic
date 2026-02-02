import { Part7Test } from './types';
export const test6Data: Part7Test = {
    testId: 6,
    title: "Test 6",
    sets: [
        // Questions 147-148: E-mail
        // Questions 147-148: E-mail
        {
            id: "p7-t6-set1",
            questionRange: "147-148",
            passages: [
                {
                    id: "p7-t6-s1-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    title: "Email",
                    content: `To: <m_castillo@rapidonet.com.ph>\nFrom: <no-reply@rapidonet.com.ph>\nDate: 19 June\nSubject: Rapido Net\n\nWe have noticed some activity on your account. Your secret-question option for password recovery was updated at 3:16 P.M. today. If you initiated this update, no further action is necessary. If not, we can help you secure your account. Call 919-555-1066 to speak to an account representative.\n\nIf you would like to remove the secret-question password recovery option, you may use a verified e-mail address or phone number to access your account instead. Make the process even more secure by setting up two-step verification. Just ask our representative how.\n\nThank you for trusting Rapido Net as your Internet service provider.`,
                    translation: `수신: <m_castillo@rapidonet.com.ph>\n발신: <no-reply@rapidonet.com.ph>\n날짜: 6월 19일\n제목: 라피도 넷\n\n고객님의 계정에서 몇 가지 활동이 발견되었습니다. 비밀번호 복구를 위한 비밀 질문 옵션이 오늘 오후 3시 16분에 업데이트되었습니다. 고객님께서 이 업데이트를 실행시키셨다면 추가적인 작업은 필요하지 않습니다. 그렇지 않은 경우, 저희가 계정 보호를 도와드릴 수 있습니다. 919-555-1066으로 전화하셔서 계정 담당자와 통화하십시오.\n\n비밀 질문 암호 복구 옵션을 제거하고 싶으시면, 인증된 이메일 주소 또는 전화번호를 대신 사용하여 계정에 접속하실 수 있습니다. 2단계 인증을 설정하여 절차를 훨씬 더 안전하게 하십시오. 저희 담당자에게 방법을 문의해 주십시오.\n\n라피도 넷을 인터넷 서비스 제공 업체로 신뢰해 주셔서 감사합니다.`
                }
                    ],
            questions: [
                {
                    id: "p7-t6-q147",
                    questionNo: 147,
                    text: "What is the purpose of the e-mail?",
                    classification: "P7_PURPOSE",

                    options: {
                        "A": "To welcome a new user to Rapido Net",
                        "B": "To remind a user about a forgotten password",
                        "C": "To confirm that a change was made to a user's account",
                        "D": "To inform a user about new company policies"
                    },
                    correctAnswer: "C",
                    translation: "이메일의 목적은?",
                    explanation: `첫 단락의 두 번째 문장에서 비밀번호 복구를 위한 비밀 질문 옵션이 오늘 오후 3시 16분에 업데이트되었다(Your secret-question option ~ was updated at 3:16 P.M. today)고 했고, 고객이 이 업데이트를 실행했는지 확인하고 있으므로 (C)가 정답입니다.`
                },
                {
                    id: "p7-t6-q148",
                    questionNo: 148,
                    text: "What is indicated about Rapido Net?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It provides faster Internet speeds than its competitors.",
                        "B": "It offers extra security through two-step verification.",
                        "C": "It automatically generates complex passwords for customers.",
                        "D": "It has increased its monthly user fee."
                    },
                    correctAnswer: "B",
                    translation: "라피도 넷에 대해 명시된 것은?",
                    explanation: `두 번째 단락의 두 번째 문장에서 2단계 인증을 설정하여 절차를 훨씬 더 안전하게 하라(Make the process even more secure ~ setting up two-step verification)고 안내하고 있으므로 (B)가 정답입니다.`
                }
                    ]
        },
        // Questions 149-150: E-mail
        {
            id: "p7-t6-set2",
            questionRange: "149-150",
            passages: [
                {
                    id: "p7-t6-s2-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    title: "Email",
                    content: `To: <luberville@futuremail.co.uk>\nFrom: <support@globaltech.co.uk>\nDate: 23 March\nSubject: Residential service\n\nDear Ms. Duberville,\n\nThanks for your order. We are very pleased to have you as a new customer and are contacting you to request that you set up an appointment for one of our representatives to install a Global Tech modem at your home. Please go online and select a 30-minute window out of the four we have posted to your account.\n\nIn preparation for our visit, please clear the area on the wall where you would like us to install the modem. Setting up the modem will take just a few minutes, after which you will be able to enjoy our service.\n\nWe will use the phone number listed on your account the morning of the appointment to confirm the visit. Let us know at this time if you have any questions for us.\n\nSincerely,\n\nGordon Mackey\nCustomer Service, Global Tech`,
                    translation: `수신: <luberville@futuremail.co.uk>\n발신: <support@globaltech.co.uk>\n날짜: 3월 23일\n제목: 주거 서비스\n\n더버빌 씨께,\n\n주문해 주셔서 감사합니다. 귀하를 새로운 고객으로 모시게 되어 매우 기쁘며, 저희 직원이 귀하의 댁에 글로벌 테크 모뎀을 설치하려면 예약을 하셔야 해서 연락드립니다. 온라인에서 귀하의 계정에 게시해 드린 네 가지 창 중 30분 창을 선택하십시오.\n\n저희가 방문할 것을 대비하여 모뎀 설치를 원하시는 벽면을 치워주십시오. 모뎀을 설치하는 데 몇 분만 소요되고 그 후에 서비스를 이용하실 수 있습니다.\n\n예약 당일 오전에 귀하의 계정에 기재된 전화번호로 방문을 확인할 예정입니다. 문의사항이 있으시면 이때 알려주시기 바랍니다.\n\n고든 맥키\n고객 서비스, 글로벌 테크`
                }
                    ],
            questions: [
                {
                    id: "p7-t6-q149",
                    questionNo: 149,
                    text: "What kind of service has Ms. Duberville most likely contracted?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "Window installation",
                        "B": "House cleanup",
                        "C": "Wall-to-wall carpeting",
                        "D": "Internet access"
                    },
                    correctAnswer: "D",
                    translation: "더버빌 씨가 계약했을 것 같은 서비스 종류는?",
                    explanation: `두 번째 문장에서 더버빌 씨에게 새로운 고객으로 모시게 되어 매우 기쁘며 직원이 더버빌 씨 자택에 글로벌 테크 모뎀을 설치하려면 예약을 해야 해서 연락드린다(We are very pleased to have you as a new customer ~ to install a Global Tech modem at your home)고 했으므로 더버빌 씨는 인터넷 서비스 업체와 계약했음을 알 수 있습니다.`
                },
                {
                    id: "p7-t6-q150",
                    questionNo: 150,
                    text: "What will happen at the time selected by Ms. Duberville?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "She will pick up some equipment at an office.",
                        "B": "She will receive a new Global Tech mobile phone.",
                        "C": "She will be visited by a Global Tech representative.",
                        "D": "She will be e-mailed a customer satisfaction survey."
                    },
                    correctAnswer: "C",
                    translation: "더버빌 씨가 선택한 시간에 일어날 일은?",
                    explanation: `두 번째 문장에서 더버빌 씨 자택에 글로벌 테크 모뎀을 설치하기 위해 예약을 하라고 했고, 선택한 시간에 모뎀 설치를 위해 직원이 방문할 것임을 알 수 있으므로 (C)가 정답입니다.`
                }
                    ]
        },
        // Questions 151-152: Online Chat
        {
            id: "p7-t6-set3",
            questionRange: "151-152",
            passages: [
                {
                    id: "p7-t6-s3-p1",
                    contextType: "P7",
                    docType: "CHAT_MESSAGE",
                    title: "Online Chat",
                    content: `Katrina Finton [1:46 P.M.]\nHey, Steven. I am moving to a new apartment soon, and the landlord requires a letter verifying my place of employment and my income. I have written up the letter. Would you be willing to sign it today as proof that I work here at Carrino Agency?\n\nSteven Khen [1:48 P.M.]\nDouble-check with Ariana Seltzer first. The human resources department usually has a form they can provide for you.\n\nKatrina Finton [1:49 P.M.]\nI tried that. They don't have a set form.\n\nSteven Khen [1:50 P.M.]\nNo problem then. Bring your document over.\n\nSteven Khen [1:51 P.M.]\nBy the way, the meeting about the Zaine Company Web site was moved to 3:00 P.M. You already have all your designs for their Web site ready, right?\n\nKatrina Finton [1:52 P.M.]\nI'm all set.`,
                    translation: `카트리나 핀톤 [오후 1:46] 안녕하세요, 스티븐. 제가 곧 새 아파트로 이사를 가려고 하는데, 집주인이 저의 직장과 소득을 입증하는 서류를 요구하고 있습니다. 제가 서류는 작성해 놓았습니다. 제가 여기 카리노 에이전시에서 근무하고 있다는 증거로 오늘 이 서류에 서명을 좀 해주시겠습니까?\n\n스티븐 켄 [오후 1:48] 아리아나 셀처에게 먼저 다시 확인해 보세요. 인사부에 보통 당신에게 줄 수 있는 양식이 있어서요.\n\n카트리나 핀톤 [오후 1:49] 제가 알아봤습니다. 정해진 양식은 없습니다.\n\n스티븐 켄 [오후 1:50] 그럼 문제없습니다. 서류를 가져오세요.\n\n스티븐 켄 [오후 1:51] 그런데, 제인 컴퍼니 웹사이트에 대한 회의가 오후 3시로 변경되었습니다. 이미 그들의 웹사이트를 위한 당신의 디자인을 전부 준비해 놓으셨죠?\n\n카트리나 핀톤 [오후 1:52] 준비해 놓았습니다.`
                }
                    ],
            questions: [
                {
                    id: "p7-t6-q151",
                    questionNo: 151,
                    text: "At 1:49 P.M., what does Ms. Finton most likely mean when she writes, \"I tried that\"?",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "She signed a rental agreement.",
                        "B": "She submitted proof of income.",
                        "C": "She contacted Ms. Seltzer.",
                        "D": "She filled out a form."
                    },
                    correctAnswer: "C",
                    translation: "오후 1시 49분에 핀톤 씨가 \"제가 알아봤습니다\"라고 쓴 의도는?",
                    explanation: `1시 48분에 켄 씨가 아리아나 셀처에게 먼저 다시 확인해 보라(Double-check with Ariana Seltzer first)고 했고 1시 49분에 핀톤 씨가 제가 알아봤다(I tried that)고 대답했으므로, 핀톤 씨는 셀처 씨에게 이미 연락해서 확인해 봤다는 의미임을 알 수 있습니다.`
                },
                {
                    id: "p7-t6-q152",
                    questionNo: 152,
                    text: "What most likely is Ms. Finton's position?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "Apartment manager",
                        "B": "Office administrator",
                        "C": "Human resources director",
                        "D": "Web designer"
                    },
                    correctAnswer: "D",
                    translation: "핀톤 씨의 직책은 무엇일 것 같은가?",
                    explanation: `1시 51분에 켄 씨가 핀톤 씨에게 그들의 웹사이트를 위한 디자인을 전부 준비해 놓았는지(You already have all your designs for their Web site ready, right?) 확인하는 것으로 보아 핀톤 씨는 웹사이트를 디자인하는 사람임을 알 수 있습니다.`
                }
                    ]
        },
        // Questions 153-155: Web page
        {
            id: "p7-t6-set4",
            questionRange: "153-155",
            passages: [
                {
                    id: "p7-t6-s4-p1",
                    contextType: "P4",
                    docType: "WEBPAGE",
                    title: "Web Page",
                    content: `http://www.marilisprofessionalcoaching.com\n\nMarilis Professional Coaching: January Events\n\nJanuary 15 at 4:30 P.M.—Job Search Support\nLearn about the latest tools and techniques to help you find a rewarding entry-level job. Topics include the best Web sites for job announcements and how to use professional organizations to get job leads.\n\nJanuary 16 at 4:30 P.M.—How to Market Yourself\nTo set yourself apart from other candidates, you have to effectively communicate the value you'll bring to the company. This session will help you successfully promote yourself to potential employers, both in person and through social media.\n\nJanuary 17 at 4:30 P.M.—Interview Strategies\nGet tips on interview rules, common questions, and the process for what you need to do before, during, and after a job interview. This session will be interactive, featuring mock interviews with attendees.\n\nGo to www.marilisprofessionalcoaching.com/register to sign up for any of these low-cost events. Note that all January events are virtual.`,
                    translation: `http://www.marilisprofessionalcoaching.com\n\n마릴리스 작업 코칭: 1월 행사\n\n1월 15일 오후 4시 30분—구직 지원\n보람 있는 신입직을 찾는 데 도움이 되는 최신 도구 및 기술에 대해 배워 보세요. 주제에는 최고의 구직 공고 웹사이트와 구직 기회를 얻기 위해 전문 조직을 활용하는 방법이 포함됩니다.\n\n1월 16일 오후 4시 30분—스스로를 마케팅하는 방법\n다른 구직자들로부터 스스로를 눈에 띄게 하려면, 회사에 가져다 줄 가치를 효과적으로 전달해야 합니다. 이 세션은 대면으로나 소셜 미디어를 통해 잠재적 고용주에게 자신을 성공적으로 홍보하는 데 도움이 될 것입니다.\n\n1월 17일 오후 4시 30분—면접 전략\n면접 규칙, 일반적인 질문, 그리고 면접 도중 및 전후에 해야 할 일에 대한 절차와 관련해 조언을 얻어 가세요. 이 세션은 참석자들과의 모의 면접을 포함해 대화식으로 진행됩니다.\n\n이 저렴한 행사에 등록하시려면 www.marilisprofessionalcoaching.com/register를 방문하세요. 1월의 모든 행사는 온라인으로 진행됩니다.`
                }
                    ],
            questions: [
                {
                    id: "p7-t6-q153",
                    questionNo: 153,
                    text: "What is the purpose of the Web page?",
                    classification: "P7_PURPOSE",

                    options: {
                        "A": "To promote career-assistance services",
                        "B": "To announce a local job fair for recent graduates",
                        "C": "To advertise open positions at social media companies",
                        "D": "To describe rewarding careers in Web design and creation"
                    },
                    correctAnswer: "A",
                    translation: "웹페이지의 목적은?",
                    explanation: `웹페이지의 제목이 마릴리스 직업 코칭: 1월 행사(Marilis Professional Coaching: January Events)이고, 행사 목록이 구직 지원(Job Search Support), 스스로를 마케팅하는 방법(How to Market Yourself), 면접 전략(Interview Strategies)인 것으로 보아 구직 지원 서비스를 홍보하려는 목적임을 알 수 있습니다. 따라서 (A)가 정답입니다.`
                },
                {
                    id: "p7-t6-q154",
                    questionNo: 154,
                    text: "According to the Web page, what will happen on January 17?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Companies will post job opportunities.",
                        "B": "Employers will make hiring decisions.",
                        "C": "Job candidates will attend a group interview.",
                        "D": "Participants will practice responding to interviewers."
                    },
                    correctAnswer: "D",
                    translation: "웹페이지에 따르면 1월 17일에 무슨 일이 일어날 것인가?",
                    explanation: `세 번째 행사 목록에 1월 17일 오후 4시 30분에 면접 전략(January 17 at 4:30 P.M.—Interview Strategies) 코칭을 한다고 나와 있고, 이 세션은 참석자들과의 모의 면접을 포함해 대화식으로 진행된다(This session will be interactive, featuring mock interviews with attendees)고 했으므로 (D)가 정답입니다.`
                },
                {
                    id: "p7-t6-q155",
                    questionNo: 155,
                    text: "What is indicated about the events?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "They occur each month.",
                        "B": "They take place online.",
                        "C": "They are for senior professionals.",
                        "D": "They are free of charge."
                    },
                    correctAnswer: "B",
                    translation: "행사에 대해 명시된 것은?",
                    explanation: `마지막 문장에서 1월의 모든 행사는 온라인으로 진행된다(Note that all January events are virtual)고 했으므로 (B)가 정답입니다.`
                }
                    ]
        },
        // Questions 156-158: Review
        {
            id: "p7-t6-set5",
            questionRange: "156-158",
            passages: [
                {
                    id: "p7-t6-s5-p1",
                    contextType: "P3",
                    docType: "ARTICLE",
                    title: "Review",
                    content: `by Marcus Watanabe\n\n"Ideal residential developments combine twenty-first-century convenience with small-town charm." That is the philosophy found in the brochure of the Homestead at Eaton, a recently completed housing development just outside the town of Eaton. — [1] —.\n\nThe community has wide streets, sidewalks, and three small parks surrounding a central square. The square features a café, a grocery store, and a few shops. In the northeast corner of the development, there is an activity complex that includes a gym, movie theater, and swimming pool. — [2] —. "This means you never have to leave the community unless you want to," said Marjorie Solomon, sales director. "Once you visit, you'll realize why so many people are purchasing homes here."\n\nSolomon is right to praise the effort that went into the development. Of course, the Homestead isn't just a pretty place to live. — [3] —. The planners have definitely put thought into making the location environmentally sustainable. Natural habitats were carefully preserved, and the houses and other structures were designed to conserve water and energy. — [4] —.\n\nModel homes are currently available for tours. Open houses take place on Saturdays and Sundays between 12:30 P.M. and 4:00 P.M. Alternatively, call 855-555-0129 to schedule an appointment.`,
                    translation: `작성: 마커스 와타나베\n\n"이상적인 주거지 개발은 21세기의 편리함과 소도시의 매력을 결합합니다." 이는 에스톤 시 바로 외곽에 최근 완공된 주거 개발 구역인 홈스테드 앳 에스톤의 안내 책자에서 볼 수 있는 철학입니다. — [1] —.\n\n이 소도시에는 넓은 도로, 인도, 그리고 중앙 광장을 둘러싸고 있는 세 개의 작은 공원이 있습니다. 광장에는 카페와 식당, 여러 가게들이 있습니다. 개발 구역의 북동쪽 모퉁이에는 체육관, 극장, 수영장을 포함한 활동 단지가 있습니다. — [2] —. "이는 원하지 않는 한 도시를 떠날 필요가 없다는 것을 의미합니다"라고 마조리 솔로몬 영업 이사는 말했습니다. "일단 방문하시면 왜 이렇게 많은 사람들이 이곳에 집을 구입하는지 깨닫게 되실 겁니다."\n\n솔로몬 이사가 개발에 들어간 노력을 칭찬하는 것은 당연합니다. 물론 홈스테드는 단순히 예쁜 거주지 그 이상입니다. — [3] —. 개발 자들은 확실히 이 위치를 환경적으로 지속 가능하게 만드는 데 많은 신경을 썼습니다. 자연 서식지가 세심하게 보존되었고, 주택과 다른 건축물들은 물과 에너지를 아낄 수 있도록 설계되었습니다. — [4] —.\n\n현재 모델 하우스 투어가 가능합니다. 오픈 하우스 행사는 토요일과 일요일 오후 12시 30분에서 4시 사이에 열립니다. 또는 855-555-0129로 전화하여 개별 예약을 할 수 있습니다.`
                }
                    ],
            questions: [
                {
                    id: "p7-t6-q156",
                    questionNo: 156,
                    text: "What is indicated about the development?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It has many different appealing facilities.",
                        "B": "It is currently under construction.",
                        "C": "Its membership fees are low.",
                        "D": "It is located in a central square."
                    },
                    correctAnswer: "A",
                    translation: "개발 구역에 대해 명시된 것은?",
                    explanation: `두 번째 단락에 체육관, 극장, 수영장을 포함한 활동 단지가 있고, 카페와 식당, 여러 가게들이 있다고 언급되어 있으므로 다양한 매력적인 시설들이 있다는 (A)가 정답입니다.`
                },
                {
                    id: "p7-t6-q157",
                    questionNo: 157,
                    text: "How can potential residents learn more about the Homestead at Eaton?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "By viewing a model home online",
                        "B": "By requesting a brochure",
                        "C": "By visiting the community",
                        "D": "By calling a current home owner"
                    },
                    correctAnswer: "C",
                    translation: "잠재 거주자들은 어떻게 홈스테드 앳 에스톤에 대해 더 자세히 알 수 있는가?",
                    explanation: `마지막 단락에서 모델 하우스 투어가 가능하고 주말에 오픈 하우스 행사가 열린다고 했으므로 직접 커뮤니티를 방문함으로써 정보를 얻을 수 있다는 (C)가 정답입니다.`
                },
                {
                    id: "p7-t6-q158",
                    questionNo: 158,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"But the Homestead is more than just a place with nice views.\"",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "C",
                    translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"하지만 홈스테드는 단순히 경치만 좋은 곳 그 이상입니다.\"",
                    explanation: `주어진 문장에서 반전의 의미를 가진 But을 사용해 경치 그 이상이라고 했으므로, 앞에는 경치가 좋다는 내용이 와야 하고 뒤에는 환경 보호 등 다른 매력에 대한 내용이 오는 것이 자연스럽습니다. 따라서 [3]이 정답입니다.`
                }
                    ]
        },
        // Questions 159-160: E-mail
        {
            id: "p7-t6-set6",
            questionRange: "159-160",
            passages: [
                {
                    id: "p7-t6-s6-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    title: "Email",
                    content: `From: Stefan Slonsman <slonsman@kaybunconstruction.ca>\nTo: Rita Palore <rpalore@palorecement.ca>\nDate: March 2\nRe: Follow-up\n\nDear Ms. Palore,\n\nThank you for sending your narrative description and your estimate for the cement work on our apartment project in Smithville. I have reviewed all the answers to our questions about your bid. We were very impressed with your narrative and your references after looking at your previous work.\n\nNevertheless, I still need my director, Anita Cho, to sign off on the deal. Your quoted price is slightly higher than we had budgeted. I will be speaking with Ms. Cho about this tomorrow morning. Based on your reputation for outstanding work, I am confident she will approve your bid.\n\nYou can expect to hear from us by March 4.\n\nStefan Slonsman\nKaybun Construction`,
                    translation: `발신: 스테판 슬론스만 <slonsman@kaybunconstruction.ca>\n수신: 리타 팔로어 <rpalore@palorecement.ca>\n날짜: 3월 2일\n제목: 후속 조치\n\n팔로어 씨께,\n\n스미스빌에 있는 저희 아파트 프로젝트의 시멘트 작업에 대한 설명 글과 견적서(estimate)를 보내주셔서 감사합니다. 입찰 시 저희가 드린 모든 질문에 대한 귀하의 답변을 검토했습니다. 설명 글과 귀하의 이전 작업 결과물을 확인한 후 받은 추천 내용이 매우 인상적이었습니다.\n\n그럼에도 불구하고, 여전히 저희 이사인 애니타 조의 최종 승인이 필요합니다. 제시하신 가격은 저희 예산보다 약간 높습니다. 내일 아침 이 건에 대해 조 이사와 논의할 예정입니다. 귀하의 뛰어난 작업 실력을 고려할 때 이사님이 입찰을 승인하실 것으로 확신합니다.\n\n3월 4일까지 연락을 드릴 예정입니다.\n\n스테판 슬론스만\n케이분 건설`
                }
                    ],
            questions: [
                {
                    id: "p7-t6-q159",
                    questionNo: 159,
                    text: "What is the purpose of the e-mail?",
                    classification: "P7_PURPOSE",

                    options: {
                        "A": "To introduce a new property owner",
                        "B": "To acknowledge receipt of a quote",
                        "C": "To invite team members to a presentation",
                        "D": "To request additional references for a past job"
                    },
                    correctAnswer: "B",
                    translation: "이메일의 목적은?",
                    explanation: `첫 번째 문장에서 작업에 대한 설명 글과 견적서(estimate)를 보내 주어 감사하다고 하며 이메일을 시작하고 있으므로, 견적서 수령을 알리는 (B)가 정답입니다.`
                },
                {
                    id: "p7-t6-q160",
                    questionNo: 160,
                    text: "When will Mr. Slonsman most likely speak with Ms. Cho?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "On March 2",
                        "B": "On March 3",
                        "C": "On March 4",
                        "D": "On March 5"
                    },
                    correctAnswer: "B",
                    translation: "슬론스만 씨는 언제 조 씨와 대화할 예정인가?",
                    explanation: `이메일 날짜가 3월 2일(March 2)이고, 두 번째 단락 세 번째 문장에서 내일 아침에 조 이사와 이야기할 예정(will be speaking with Ms. Cho about this tomorrow morning)이라고 했으므로 (B) 3월 3일이 정답입니다.`
                }
                    ]
        },
        // Questions 161-163: Advertisement
        {
            id: "p7-t6-set7",
            questionRange: "161-163",
            passages: [
                {
                    id: "p7-t6-s7-p1",
                    contextType: "P4",
                    docType: "ADVERTISEMENT",
                    title: "Advertisement",
                    content: `City of Altamesa seeks election workers.\n\nWho is qualified to be an election worker? Almost anyone can, including homemakers and professionals, as well as the unemployed, the self-employed, and retired persons.\n\nRequirements:\n• Ability to work from 6:00 A.M. to 1:00 P.M. or from 1:00 P.M. to 8:00 P.M. on 5 March, 7 June, and 1 November.\n• Must not live with or work for a politician who is currently running for office.\n• Eighteen years of age or older.\n• Comfortable interacting with the public.\n• Organized and detail-oriented.\n\nWorkers are compensated based on their duties and must attend a four-hour training workshop on 4 March:\nElection Assistant, $18/hour\nElection Clerk, $20/hour\nElection Chief, $22/hour\n\nVisit www.altamesaelections.gov/apply for more information or to apply.`,
                    translation: `알타메사 시에서 선거운동원을 모집합니다.\n\n누가 선거운동원이 될 자격이 있나요? 주부와 전문가를 포함하여 실업자, 자영업자, 은퇴자 등 거의 모든 사람이 가능합니다.\n\n요건:\n• 3월 5일, 6월 7일, 11월 1일 오전 6시부터 오후 1시 또는 오후 1시부터 오후 8시까지 근무 가능한 자.\n• 현재 공직에 출마 중인 정치인과 함께 살거나 일하고 있지 않은 자.\n• 18세 이상인 자.\n• 대중과 편안하게 대화할 수 있는 자.\n• 체계적이고 세심한 자.\n\n선거운동원은 직무에 따라 보상을 받으며, 3월 4일에 열리는 4시간짜리 교육 워크숍에 참여해야 합니다.\n선거 보조원, 시간당 18달러\n선거 사무원, 시간당 20달러\n선거 관리 위원장, 시간당 22달러\n\n더 많은 정보나 지원을 원하시면 www.altamesaelections.gov/apply를 방문하십시오.`
                }
                    ],
            questions: [
                {
                    id: "p7-t6-q161",
                    questionNo: 161,
                    text: "What information is included in the advertisement?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Pay rates",
                        "B": "Working locations",
                        "C": "An application deadline",
                        "D": "The start time of the training workshop"
                    },
                    correctAnswer: "A",
                    translation: "광고에 포함된 정보는?",
                    explanation: `광고 중간 부분에서 보조원, 사무원, 위원장에 따라 시간당 지급되는 금액(Election Assistant, $18/hour 등)을 명시하고 있으므로 급여율인 (A)가 정답입니다.`
                },
                {
                    id: "p7-t6-q162",
                    questionNo: 162,
                    text: "What is a requirement for the job?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "An interest in politics",
                        "B": "A high school diploma",
                        "C": "Voter registration",
                        "D": "Strong communication skills"
                    },
                    correctAnswer: "D",
                    translation: "채용 요건으로 언급된 것은?",
                    explanation: `요건(Requirements) 중 네 번째 항목에 대중과 대화하는 것이 편안해야 한다(Comfortable interacting with the public)고 했으므로 (D)가 정답입니다.`
                },
                {
                    id: "p7-t6-q163",
                    questionNo: 163,
                    text: "What is mentioned about the training workshop?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It is offered three times a year.",
                        "B": "It is led by experienced election officials.",
                        "C": "It is required for all election workers.",
                        "D": "It can be attended either in person or online."
                    },
                    correctAnswer: "C",
                    translation: "교육 워크숍에 대해 언급된 것은?",
                    explanation: `워크숍 관련 문장에서 선거운동원들은 교육 워크숍에 참여해야 한다(must attend a four-hour training workshop)고 명시되어 있으므로 모든 근무자에게 필수임을 알 수 있습니다. 따라서 (C)가 정답입니다.`
                }
                    ]
        },
        // Questions 164-167: E-mail
        {
            id: "p7-t6-set8",
            questionRange: "164-167",
            passages: [
                {
                    id: "p7-t6-s8-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    title: "Email",
                    content: `To: Lee Ji-hyung <jlee@myemail.com>\nFrom: Robert Wang <rwang@frontstreetbank.com>\nDate: April 7\nSubject: Is VIS for you?\n\nDear Mr. Lee,\n\nYou are now able to enroll in Front Street Bank's new Voice Identification System (VIS). — [1] —. VIS is a fast, convenient, and secure way to access and control your Front Street Bank accounts by phone. — [2] —. You can perform a variety of specific tasks. — [3] —. For example, if you say \"Make a loan payment,\" the system can then pay your Front Street Bank loan. Say \"Recent transactions\" to hear the history of your credit card charges. You can even transfer money between accounts. — [4] —. Visit www.frontstreetbank.com/VIS to find out all the ways that VIS can simplify your banking life.\n\nYour voiceprint is stored securely by Front Street Bank on Front Street. It can be used only on your registered phone. Call 615-555-0189 to set up VIS for your accounts. If in the future you no longer wish to use VIS to access your account, simply call to have one of our customer-service representatives delete your identification file.\n\nThank you for being a valued Front Street Bank customer.\n\nRobert Wang, Branch Manager`,
                    translation: `수신: 이지형 <jlee@myemail.com>\n발신: 로버트 왕 <rwang@frontstreetbank.com>\n날짜: 4월 7일\n제목: VIS는 귀하를 위한 시스템인가요?\n\n이 씨께,\n\n귀하께서는 이제 프런트 스트리트 인터넷 은행의 새로운 음성 인식 시스템(VIS)에 등록하실 수 있습니다. — [1] —. VIS는 전화기로 귀하의 은행 계좌에 접속하고 제어할 수 있는 빠르고 편리하며 안전한 방법입니다. — [2] —. 귀하는 다양한 특정 업무를 수행할 수 있습니다. — [3] —. 예를 들어, "대출금 지불"이라고 말하면 시스템이 계좌에서 대출금을 지불할 수 있습니다. "최근 거래"라고 말하면 신용카드 거래 내역을 확인할 수 있습니다. 심지어 계좌 간 돈을 이체할 수도 있습니다. — [4] —. www.frontstreetbank.com/VIS에서 VIS가 귀하의 은행 업무를 간편하게 해주는 모든 방법을 확인해 보십시오.\n\n귀하의 음성 인식 정보는 프런트 스트리트 지점에 안전하게 저장됩니다. 이 정보는 귀하의 등록된 전화기에서만 사용할 수 있습니다. 615-555-0189로 전화하여 귀하의 계좌에 VIS를 설정하십시오. 나중에 더 이상 VIS를 통해 계좌에 접속하고 싶지 않으시면, 저희 고객 서비스 담당자에게 전화하여 신원 확인 정보 파일을 삭제해 달라고 요청하십시오.\n\n프런트 스트리트 인터넷 은행의 가치 있는 고객이 되어 주셔서 감사합니다.\n\n로버트 왕, 지점장`
                }
                    ],
            questions: [
                {
                    id: "p7-t6-q164",
                    questionNo: 164,
                    text: "What is the purpose of the e-mail?",
                    classification: "P7_PURPOSE",

                    options: {
                        "A": "To welcome a new customer",
                        "B": "To report an account error",
                        "C": "To verify a loan approval",
                        "D": "To promote a new service"
                    },
                    correctAnswer: "D",
                    translation: "이메일의 목적은?",
                    explanation: `첫 문장에서 프런트 스트리트 인터넷 은행의 새로운 음성 인식 시스템(VIS)에 등록할 수 있다고 안내하며 서비스를 홍보하고 있으므로 (D)가 정답입니다.`
                },
                {
                    id: "p7-t6-q165",
                    questionNo: 165,
                    text: "What is mentioned about VIS?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It allows users to access accounts by voice.",
                        "B": "It can be used at various financial institutions.",
                        "C": "It requires customers to pay a fee.",
                        "D": "It is available only at certain times of the day."
                    },
                    correctAnswer: "A",
                    translation: "VIS에 대해 언급된 것은?",
                    explanation: `첫 단락의 두 번째 문장에서 VIS는 전화기로 은행 계좌에 접속하고 제어할 수 있는 방법이라고 설명하고 구체적인 예시들을 통해 음성으로 계좌 업무가 가능함을 보여주었으므로 (A)가 정답입니다.`
                },
                {
                    id: "p7-t6-q166",
                    questionNo: 166,
                    text: "What must a customer do to cancel VIS?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Visit a local branch",
                        "B": "Make a telephone call",
                        "C": "Complete an online form",
                        "D": "E-mail customer service"
                    },
                    correctAnswer: "B",
                    translation: "고객이 VIS를 취소하려면 무엇을 해야 하는가?",
                    explanation: `두 번째 단락의 마지막 문장에서 더 이상 VIS를 사용하고 싶지 않으면 전화를 걸어(simply call to have...) 담당자가 파일을 삭제하도록 요청하면 된다고 했으므로 (B)가 정답입니다.`
                },
                {
                    id: "p7-t6-q167",
                    questionNo: 167,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"You can perform a variety of specific tasks.\"",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "B",
                    translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"귀하는 다양한 특정 업무를 수행할 수 있습니다.\"",
                    explanation: `주어진 문장은 VIS를 통해 수행할 수 있는 다양한 업무가 있다는 일반적인 진술입니다. 따라서 구체적인 예시(대출금 지불, 이체 등)가 나오기 전인 [2] 위치에 오는 것이 가장 적절합니다.`
                }
                    ]
        },
        // Questions 168-171: Advertisement
        {
            id: "p7-t6-set9",
            questionRange: "168-171",
            passages: [
                {
                    id: "p7-t6-s9-p1",
                    contextType: "P4",
                    docType: "ADVERTISEMENT",
                    title: "Advertisement",
                    content: `Sunrise Publishing\n\nFour new titles in the Enterprise Series have just been released. Buy one and get 50 percent off the second one (shipping excluded) when you purchase from our Web site by November 30. Order today!\n\nBiography of Haruto Yamada (hardcover)\nA biography of famous executive Haruto Yamada, including insights into how his career influenced his approach to business governance. Paperback $14.99\n\nUnder the Moonbeam (hardcover)\nA collection of transcribed interviews with former trade company employees that illuminates twentieth-century Korean commerce. Hardcover $22.99, Audio $8.99\n\nInvisible Connections (hardcover)\nA collection of transcribed lectures and archival photos from business administration professor Gloria De Leon's 40-year career. Hardcover $25.99\n\nThe Flashback (hardcover)\nA former Australian trade commissioner recalls his diplomatic career in this engaging memoir. Paperback $14.99, Downloadable E-book $9.99`,
                    translation: `선라이즈 출판사\n\n엔터프라이즈 시리즈 중 4권의 새로운 도서가 방금 출간되었습니다. 11월 30일까지 저희 웹사이트에서 구매하시고, 한 권 구매 시 두 번째 권은 50퍼센트를 할인받으세요! (배송비 제외) 오늘 주문하세요!\n\n하루토 야마다의 전기 (양장본)\n유명한 경영자 하루토 야마다의 전기로, 그의 경력이 기업 관리에 어떻게 영향을 미쳤는지에 대한 통찰이 담겨 있습니다. 페이퍼백 14.99달러\n\n달빛 아래 근무 (양장본)\n전직 무역회사 직원들과의 인터뷰를 통해 조명한 20세기 한국의 교역. 양장본 22.99달러, 오디오북 8.99달러\n\n보이지 않는 연결 (양장본)\n40년 경력의 경영학 교수 글로리아 드 레온이 강의한 내용의 필사와 기록 사진이 있는 전집. 양장본 25.99달러\n\n회상 (양장본)\n전직 호주 무역 사무관이 이 매력적인 회고록에서 자신의 외교 경력 중 가졌던 기록을 회상합니다. 페이퍼백 14.99달러, 다운로드 가능한 전자책 9.99달러`
                }
                    ],
            questions: [
                {
                    id: "p7-t6-q168",
                    questionNo: 168,
                    text: "What is currently being offered to customers?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Coupons for books by select authors",
                        "B": "A discount on its Web site for a second purchase",
                        "C": "Free shipping for one order",
                        "D": "A free catalog from the publisher"
                    },
                    correctAnswer: "B",
                    translation: "현재 고객들에게 제공되고 있는 것은?",
                    explanation: `첫 단락의 두 번째 문장에서 11월 30일까지 웹사이트에서 구매하면 한 권 구매 시 두 번째 권은 50퍼센트를 할인해 준다(Buy one and get 50 percent off the second one)고 했으므로 (B)가 정답입니다.`
                },
                {
                    id: "p7-t6-q169",
                    questionNo: 169,
                    text: "Who is Mr. Yamada?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "A government official",
                        "B": "A career counselor",
                        "C": "An electrician",
                        "D": "A company leader"
                    },
                    correctAnswer: "D",
                    translation: "야마다 씨는 누구인가?",
                    explanation: `첫 번째 책 설명에서 유명한 경영자 하루토 야마다의 전기(A biography of famous executive Haruto Yamada)라고 언급했으므로 기업 간부인 (D)가 정답입니다.`
                },
                {
                    id: "p7-t6-q170",
                    questionNo: 170,
                    text: "What is true of all the books described in the advertisement?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "They are written by the same author.",
                        "B": "They can be read in digital format.",
                        "C": "They focus on business subjects.",
                        "D": "They have been translated into several languages."
                    },
                    correctAnswer: "C",
                    translation: "광고에 설명된 모든 책의 공통점은?",
                    explanation: `네 권의 책이 모두 경영인, 한국의 무역(commerce), 경영학(business administration) 교수, 무역 사무관 등 비즈니스와 관련된 내용을 다루고 있으므로 (C)가 정답입니다.`
                },
                {
                    id: "p7-t6-q171",
                    questionNo: 171,
                    text: "Which book includes historic images?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Biography of Haruto Yamada",
                        "B": "Under the Moonbeam",
                        "C": "Invisible Connections",
                        "D": "The Flashback"
                    },
                    correctAnswer: "C",
                    translation: "역사적 이미지가 포함된 책은?",
                    explanation: `세 번째 책인 '보이지 않는 연결(Invisible Connections)'에 대한 설명에서 기록 사진이 있는 전집(A collection of ~ archival photos)이라고 언급되어 있으므로 (C)가 정답입니다.`
                }
                    ]
        },
        // Questions 172-175: Online Chat
        {
            id: "p7-t6-set10",
            questionRange: "172-175",
            passages: [
                {
                    id: "p7-t6-s10-p1",
                    contextType: "P7",
                    docType: "CHAT_MESSAGE",
                    title: "Online Chat",
                    content: `Priyanka Kapoor [9:41 A.M.]\nWe need to talk about the family physicians conference in London. Where do we stand?\n\nAlfonso Gonzales [9:44 A.M.]\nI've already purchased airfare for all of us.\n\nPriyanka Kapoor [9:47 A.M.]\nGood. Scott Harris is going to arrange the transportation from the London airport to the venue. Do we need to worry about being connected to Wi-Fi?\n\nAlfonso Gonzales [9:50 A.M.]\nI've looked at our mobile provider's international roaming services. We'll have voice and texting, but limited data without a high speed option.\n\nBrian Kim [9:53 A.M.]\nLet's buy international SIM cards before we leave. We can get prepaid cards that offer unlimited high-speed data as well as voice and messaging. You won't have to worry about being connected.\n\nPriyanka Kapoor [9:57 A.M.]\nThat would solve the problem.\n\nAlfonso Gonzales [9:57 A.M.]\nGood idea, Brian. Thanks. Now we should talk about meeting for a meal.\n\nPriyanka Kapoor [9:59 A.M.]\nThe conference starts with breakfast in the hotel lobby each day. I know a good dinner spot nearby that we can visit on the first night. We can decide on a 6:00 P.M. plan for that. Other meals we can decide on later.`,
                    translation: `프리얀카 카푸르 [오전 9:41] 런던에서 열리는 가정의학 전문의 학회에 대해 이야기해야 합니다. 지금 어떤 상태죠?\n\n알폰소 곤잘레스 [오전 9:44] 이미 우리 모두를 위한 항공권을 구입했습니다.\n\n프리얀카 카푸르 [오전 9:47] 좋습니다. 스콧 해리스가 런던 공항에서 학회 장소로 가는 교통편을 마련할 것입니다. 와이파이 연결에 대해 걱정해야 할까요?\n\n알폰소 곤잘레스 [오전 9:50] 우리 휴대폰 공급업체의 국제 로밍 서비스를 알아봤습니다. 통화와 문자 기능은 되지만 데이터는 무제한 초고속 요금제가 아닌 제한된 옵션만 제공합니다.\n\n브라이언 킴 [오전 9:53] 출발하기 전에 국제용 SIM 카드를 삽입합시다. 음성과 메시지 기능뿐만 아니라 무제한 초고속 데이터를 제공하는 선불 카드를 살 수 있습니다. 와이파이 연결을 걱정할 필요가 없을 거예요.\n\n프리얀카 카푸르 [오전 9:57] 그러면 문제가 해결되겠네요.\n\n알폰소 곤잘레스 [오전 9:57] 좋은 생각입니다, 브라이언. 고마워요. 이제 식사를 위해 만나는 것에 대해 이야기해 봅시다.\n\n프리얀카 카푸르 [오전 9:59] 학회는 매일 아침 호텔 로비에서 조식과 함께 시작됩니다. 첫날 밤에 방문할 만한 근처의 괜찮은 저녁 식사 장소를 알고 있어요. 오후 6시에 그곳으로 가는 것으로 계획을 세울 수 있겠네요. 다른 식사 계획은 나중에 정하도록 하죠.`
                }
                    ],
            questions: [
                {
                    id: "p7-t6-q172",
                    questionNo: 172,
                    text: "Where do the writers most likely work?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "At a travel agency",
                        "B": "At a medical clinic",
                        "C": "At a transportation firm",
                        "D": "At a telecommunications company"
                    },
                    correctAnswer: "B",
                    translation: "글을 쓰는 사람들은 어디서 일할 가능성이 높은가?",
                    explanation: `오전 9시 41분에 카푸르 씨가 런던에서 열리는 가정의학 전문의 학회(family physicians conference)에 대해 이야기하자고 한 것으로 보아 글을 쓰는 사람들은 의료 기관에서 일하는 의사들임을 짐작할 수 있습니다. 따라서 (B)가 정답입니다.`
                },
                {
                    id: "p7-t6-q173",
                    questionNo: 173,
                    text: "At 9:41 A.M., what does Ms. Kapoor most likely mean when she writes, \"Where do we stand?\"",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "She is requesting an update on travel arrangements.",
                        "B": "She wants to assess her colleagues' interest in an event.",
                        "C": "She is inquiring about her colleagues' weekend activities.",
                        "D": "She is checking if the staff is ready to host a conference."
                    },
                    correctAnswer: "A",
                    translation: "오전 9시 41분에 카푸르 씨가 \"Where do we stand?\"라고 쓴 의도는?",
                    explanation: `런던 학회에 대해 이야기하자며 현재 어떤 상황인지를 묻는 말이므로, 여행 준비 계획이 어느 정도 진행되었는지 묻고 있는 (A)가 정답입니다.`
                },
                {
                    id: "p7-t6-q174",
                    questionNo: 174,
                    text: "What is indicated about the writers?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "They will be traveling together.",
                        "B": "They are preparing a presentation.",
                        "C": "They have a new mobile service.",
                        "D": "They are attending the conference for the first time."
                    },
                    correctAnswer: "A",
                    translation: "글을 쓰는 사람들에 대해 명시된 것은?",
                    explanation: `오전 9시 44분에 곤잘레스 씨가 우리 모두를 위한 항공권(airfare for all of us)을 구입했다고 했으므로 함께 여행할 것임을 알 수 있습니다. 따라서 (A)가 정답입니다.`
                },
                {
                    id: "p7-t6-q175",
                    questionNo: 175,
                    text: "Why does Mr. Kim suggest buying SIM cards?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "They are less expensive than international plans.",
                        "B": "They can be used on all mobile devices.",
                        "C": "They are currently in stock at a nearby electronics shop.",
                        "D": "They eliminate the need for a Wi-Fi connection."
                    },
                    correctAnswer: "D",
                    translation: "킴 씨가 SIM 카드를 사는 것을 제안하는 이유는?",
                    explanation: `무제한 초고속 데이터를 제공하는 선불 카드를 사면 와이파이 연결을 걱정할 필요가 없을 것(We won't have to worry about being connected)이라고 했으므로 (D)가 정답입니다.`
                }
                    ]
        },
        // Questions 176-180: Job Advertisement and E-mail
        {
            id: "p7-t6-set11",
            questionRange: "176-180",
            passages: [
                {
                    id: "p7-t6-s11-p1",
                    contextType: "P4",
                    docType: "ADVERTISEMENT",
                    title: "Job Advertisement",
                    content: `BLISSFUL HORSE STABLES\n\nPart-time worker needed to feed, wash, and groom horses. Must be able to work a minimum of eight hours a week, including occasional weekend hours. Although training is available, applicants who have experience working with horses are preferred. To apply, send an e-mail to Dorothy Lu, dlu@blissfulhorsestables.com.au, and attach your résumé.\n\nBlissful Horse Stables is the region's largest horse-boarding facility. It has been owned and operated by one family since 1988. Our business offers both long- and short-term boarding contracts. We have state-of-the-art indoor and outdoor exercise rings and a five-acre grazing pasture for our equine friends. A veterinarian is always on call.`,
                    translation: `행복한 마구간\n\n176(A) 말에게 먹이를 주고, 털을 씻기고 손질할 시간제 근로자를 구합니다. 때때로 주말 시간을 포함하여 일주일에 최소 8시간을 일할 수 있어야 합니다. 교육은 제공되지만 말과 함께 일한 경험이 있는 지원자를 우대합니다. 180 지원하려면 도로시 루에게 dlu@blissfulhorsestables.com.au로 이력서를 첨부하여 이메일을 보내 주세요.\n\n행복한 마구간은 이 지역에서 가장 큰 말 관리 177 시설입니다. 176(D) 1988년부터 한 가족이 소유하고 운영해 왔습니다. 저희 회사는 단기 및 장기 관리 계약을 모두 제공합니다. 176(C) 우리의 말 친구들을 위한 최첨단 실내외 운동장과 5에이커의 방목 초원도 있습니다. 수의사는 상시 대기 중입니다.`
                },
                {
                    id: "p7-t6-s11-p2",
                    contextType: "P1",
                    docType: "EMAIL",
                    content: `From: ota.kyle@opalmail.com\nTo: dlu@blissfulhorsestables.com.au\nSubject: Part-time position\nDate: 1 August\nAttachment: ota.rtf\n\nDear Ms. Lu,\n\nThis e-mail is in response to the advertisement that appeared in yesterday's edition of the Colby Today. At this time, I work for Ness Large Animal Clinic as a technician's assistant, but only three days a week. The part-time position you are advertising would enable me to do something I enjoy while increasing my working hours. I am happy to provide references upon request.\n\nAll the best,\nKyle Ota`,
                    translation: `발신: ota.kyle@opalmail.com\n수신: dlu@blissfulhorsestables.com.au\n제목: 시간제 일자리\n날짜: 8월 1일\n첨부: ota.rtf\n\n친애하는 루 씨에게,\n\n178 이 이메일은 <콜비 투데이> 어제 판에 실린 광고를 보고 보내는 것입니다. 179 현재 저는 네스 대형 동물 병원에서 기술 보조로 일하고 있지만 일주일에 3일뿐입니다. 귀하께서 광고하고 있는 시간제 일자리로 저는 근무 시간을 늘리면서도 제가 좋아하는 일을 할 수 있습니다. 요청하시는 즉시 기꺼이 추천서를 제공해 드리겠습니다.\n\n카일 오타`
                }
                    ],
            questions: [
                {
                    id: "p7-t6-q176",
                    questionNo: 176,
                    text: "What is NOT indicated about Blissful Horse Stables?",
                    classification: "P7_GRAPHIC",

                    options: {
                        "A": "It provides grooming services.",
                        "B": "It requires a minimum stay of three days.",
                        "C": "It has a large, grassy field for grazing.",
                        "D": "It is a family-run business."
                    },
                    correctAnswer: "B",
                    translation: "행복한 마구간에 대해 명시되지 않은 것은?",
                    explanation: `구인 광고의 첫 문장에서 말에게 먹이를 주고 털을 씻기고 손질할(feed, wash, and groom horses) 시간제 근로자를 구한다고 했으므로 (A), 두 번째 단락의 네 번째 문장에서 우리의 말 친구들을 위한 최첨단 실내외 운동장과 5에이커의 방목 초원도 있다(We have ~ a five-acre grazing pasture for our equine friends)고 했으므로 (C), 두 번째 단락의 두 번째 문장에서 1988년부터 한 가족이 소유하고 운영해 왔다(It has been ~ family since 1988)고 했으므로 (D)는 모두 언급된 사실이다. 체류 기간에 대한 언급은 없으므로 (B)가 정답이다.`
                },
                {
                    id: "p7-t6-q177",
                    questionNo: 177,
                    text: "In the job advertisement, the word \"facility\" in paragraph 2, line 1, is closest in meaning to",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "simplicity",
                        "B": "chance",
                        "C": "openness",
                        "D": "center"
                    },
                    correctAnswer: "D",
                    translation: "구인 광고에서 두 번째 단락 1행의 \"facility\"와 의미가 가장 가까운 단어는?",
                    explanation: `의미상 행복한 마구간은 지역에서 가장 큰 '시설'이라는 뜻으로 쓰였으므로 '센터, 종합 시설'을 뜻하는 (D) center가 정답이다.`
                },
                {
                    id: "p7-t6-q178",
                    questionNo: 178,
                    text: "What most likely is Colby Today?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "A regional newspaper",
                        "B": "A newsletter for horse owners",
                        "C": "A television program",
                        "D": "A tourism brochure"
                    },
                    correctAnswer: "A",
                    translation: "<콜비 투데이>는 무엇일 것 같은가?",
                    explanation: `이메일의 첫 문장에서 이 이메일은 <콜비 투데이> 어제 판에 실린 광고를 보고 보내는 것(This e-mail is in response ~ edition of the Colby Today)이라고 한 것으로 보아 <콜비 투데이>는 지역 일간지임을 짐작할 수 있다. 따라서 (A)가 정답이다.`
                },
                {
                    id: "p7-t6-q179",
                    questionNo: 179,
                    text: "What is implied about Mr. Ota?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "He has experience working with animals.",
                        "B": "He graduated from a local school.",
                        "C": "He would like to become a journalist.",
                        "D": "He is not able to work on weekends."
                    },
                    correctAnswer: "A",
                    translation: "오타 씨에 대해 암시된 것은?",
                    explanation: `이메일의 두 번째 문장에서 오타 씨가 현재 네스 대형 동물 병원에서 기술 보조로 일하고 있다(At this time, I work for Ness Large Animal Clinic as a technician's assistant)며 동물들이 있는 장소에서 근무하고 있다고 했으므로 (A)가 정답이다.`
                },
                {
                    id: "p7-t6-q180",
                    questionNo: 180,
                    text: "What has Mr. Ota most likely attached to his e-mail?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "A diploma",
                        "B": "A résumé",
                        "C": "A letter of reference",
                        "D": "An article about horse care"
                    },
                    correctAnswer: "B",
                    translation: "오타 씨는 이메일에 무엇을 첨부했을 것 같은가?",
                    explanation: `구인 광고의 첫 단락 마지막 문장에서 지원하려면 도로시 루에게 이력서를 첨부하여 이메일을 보내 달라(To apply, send an e-mail to Dorothy Lu ~ attach your résumé)고 했고, 오타 씨가 루 씨에게 보내는 이메일의 수신 주소가 dlu@blissfulhorsestables.com.au이고, 세 번째 문장에서 귀사가 광고하고 있는 시간제 일자리로 근무 시간을 늘리면서 자신이 좋아하는 일을 할 수 있다(The part-time position you ~ increasing my working hours)며 일자리에 지원하고 있으므로 오타 씨가 첨부한 것은 이력서임을 알 수 있다. 따라서 (B)가 정답이다.`
                }
                    ]
        },
        // Questions 181-185: Online Form and E-mail
        {
            id: "p7-t6-set12",
            questionRange: "181-185",
            passages: [
                {
                    id: "p7-t6-s12-p1",
                    contextType: "P5",
                    docType: "FORM",
                    title: "Online Form",
                    content: `https://www.pinkferngardens.co.nz/contact\n\nAbout | Shop Online | Locations | Contact Us\n\nLocated in Picton, New Zealand, Pink Fern Gardens sells a wide variety of plants, both edible and decorative. Please use the form below to submit your questions and comments.\n\nName: Mia Dixon\nE-mail: mdixon@sunmail.co.nz\nComment:\nI saw the callout to local growers on your social media feed. A few years ago, I started a large community food garden with my neighbours here in Helensville for us to tend in our free time. This year, we have more plants than we can consume ourselves. Specifically, we have dozens of potted mint and cardamom seedlings as well as other uncommon herbs, and I wonder if you are interested in expanding your offerings of herbs. We also have a half dozen two-year-old lemon tree saplings that are between two and three feet tall.`,
                    translation: `뉴질랜드 픽턴에 위치한 핑크 펀 가든스는 다양한 식물 및 장식용 식물을 판매합니다. 아래 양식을 사용하여 질문 및 의견을 제출해 주세요.\n\n이름: 미아 딕슨\n이메일: mdixon@sunmail.co.nz\n남기는 글:\n181 귀사의 소셜 미디어 피드에서 지역 재배자들을 향한 요청 글을 보았습니다. 182 몇 년 전, 저는 여기 헬렌스빌의 이웃들과 함께 여가 시간에 보살필 커다란 마을 먹거리 정원을 시작했습니다. 올해는 우리가 먹을 수 있는 것보다 식물이 더 많이 남았습니다. 구체적으로, 185 수십 개의 민트와 카다멈 묘목 화분뿐만 아니라 다른 희귀한 허브들도 가지고 있는데, 귀사에서 제공하는 허브 제품을 늘리는 것에 관심이 있는지 궁금합니다. 우리는 또한 2~3피트 높이의 2년 된 레몬 나무 묘목 여섯 그루를 가지고 있습니다.`
                },
                {
                    id: "p7-t6-s12-p2",
                    contextType: "P1",
                    docType: "EMAIL",
                    content: `To: mdixon@sunmail.co.nz\nFrom: purchasing@pinkferngardens.co.nz\nDate: 12 January\nSubject: Your comment\n\nDear Ms. Dixon,\n\nPink Fern Gardens is always seeking uncommon plants. As for your citrus saplings, we are currently purchasing those from licensed growers only. There is a disease affecting certain varieties, so we must be cautious. We learned our lesson regarding this last autumn!\n\nWe do buy other plants from independent growers, as long as the seedlings are potted and market ready. Here are the types of seedlings we buy and the wholesale price we pay for each plant: ferns ($8), vines ($6), annual flowers ($5), and herbs for cooking, especially oregano, mint, and rosemary ($2). Please stop by at your convenience with samples of your offerings, and we can discuss our needs further in person.\n\nKind regards,\nKen Yoneda\nPurchaser, Pink Fern Gardens`,
                    translation: `수신: mdixon@sunmail.co.nz\n발신: purchasing@pinkferngardens.co.nz\n날짜: 1월 12일\n제목: 귀하가 남기신 글\n\n딕슨 씨께,\n\n핑크 펀 가든스는 항상 희귀 식물을 찾고 있습니다. 183 귀하의 감귤류 묘목과 관련해서는, 현재 저희는 허가받은 재배자들에게서만 구매하고 있습니다. 특정 품종에 영향을 미치는 질병이 있어서 주의해야 합니다. 작년 가을에 이와 관련된 교훈을 얻었습니다!\n\n저희는 묘목이 화분에 담겨 있고 시장에 내놓을 준비가 되어 있다면 자영업 재배자들에게서 다른 식물들을 구입합니다. 185 저희가 구입하는 묘목의 종류와 각 식물에 지불하는 도매가격은 양치식물(8달러), 덩굴식물(6달러), 일년생 화초(5달러), 그리고 요리용 허브들로 특히 오레가노, 민트, 로즈메리(2달러)입니다. 184 편하실 때 귀하에서 제공하는 물건의 샘플을 가지고 방문해 주시면 저희가 필요한 것들에 대해 직접 더 자세히 논의할 수 있습니다.\n\n켄 요네다\n구매 담당, 핑크 펀 가든스`
                }
                    ],
            questions: [
                {
                    id: "p7-t6-q181",
                    questionNo: 181,
                    text: "What motivated Ms. Dixon to contact Pink Fern Gardens?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "A positive review from a customer",
                        "B": "An online post from Pink Fern Gardens",
                        "C": "An article about Pink Fern Gardens",
                        "D": "A phone message from Mr. Yoneda"
                    },
                    correctAnswer: "B",
                    translation: "딕슨 씨가 핑크 펀 가든스에 연락하게 된 동기는?",
                    explanation: `온라인 양식의 남기는 글 첫 문장에서 딕슨 씨가 귀사의 소셜 미디어 피드에서 지역 재배자들을 향한 요청 글을 보았다(saw the callout to local growers on your social media feed)고 한 것으로 보아 딕슨 씨는 핑크 펀 가든스에서 올린 온라인 게시물을 보고 글을 남기고 있음을 알 수 있다. 따라서 (B)가 정답이다.`
                },
                {
                    id: "p7-t6-q182",
                    questionNo: 182,
                    text: "What is indicated about Ms. Dixon?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "She wants to turn her hobby into a full-time business.",
                        "B": "She would like a part-time job at Pink Fern Gardens.",
                        "C": "She founded a community garden with her neighbors.",
                        "D": "She is president of a gardening club in Helensville."
                    },
                    correctAnswer: "C",
                    translation: "딕슨 씨에 대해 명시된 것은?",
                    explanation: `온라인 양식의 남기는 글 두 번째 문장에서 딕슨 씨가 몇 년 전, 여기 헬렌스빌의 이웃들과 함께 여가 시간에 보살필 커다란 마을 먹거리 정원을 시작했다(A few years ago, I started a large community food garden with my neighbours ~ tend in our free time)고 했으므로 (C)가 정답이다.`
                },
                {
                    id: "p7-t6-q183",
                    questionNo: 183,
                    text: "According to Mr. Yoneda, what happened last year?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Some of his employees resigned.",
                        "B": "Some trees his company purchased were unhealthy.",
                        "C": "His company obtained a license to export citrus trees.",
                        "D": "His company ran out of fruit trees to sell."
                    },
                    correctAnswer: "B",
                    translation: "요네다 씨에 따르면, 작년에 일어난 일은?",
                    explanation: `이메일의 첫 단락 두 번째 문장에서 요네다 씨가 귀하의 감귤류 묘목과 관련해서는 현재 허가를 받은 재배자들에게서만 구매하고 있다(As for your citrus ~ from licensed growers only)면서, 특정 품종에 영향을 미치는 질병이 있어서 주의해야 하며 작년 가을에 이와 관련된 교훈을 얻었다(We learned our lesson regarding this last autumn)고 했다. 따라서 작년에 구입한 일부 나무에 질병이 있었다는 것이므로 (B)가 정답이다.`
                },
                {
                    id: "p7-t6-q184",
                    questionNo: 184,
                    text: "What does Mr. Yoneda ask Ms. Dixon to do?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Send him a list of supplies",
                        "B": "Contact an independent grower",
                        "C": "Buy seeds from Pink Fern Gardens",
                        "D": "Bring some plants to Pink Fern Gardens"
                    },
                    correctAnswer: "D",
                    translation: "요네다 씨가 딕슨 씨에게 요청하는 것은?",
                    explanation: `이메일의 마지막 문장에서 요네다 씨는 딕슨 씨에게 편할 때 제공하는 물건의 샘플을 가지고 방문하면 필요한 것들에 대해 직접 더 자세히 논의할 수 있다(Please stop by at your convenience with samples of your offerings ~ in person)고 했으므로 (D)가 정답이다.`
                },
                {
                    id: "p7-t6-q185",
                    questionNo: 185,
                    text: "How much would Mr. Yoneda pay Ms. Dixon for one of her potted seedlings?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "$8.00",
                        "B": "$6.00",
                        "C": "$5.00",
                        "D": "$2.00"
                    },
                    correctAnswer: "D",
                    translation: "요네다 씨는 딕슨 씨에게 화분에 담긴 그녀의 묘목 하나당 얼마를 지불하겠는가?",
                    explanation: `온라인 양식의 남기는 글 네 번째 문장에서 딕슨 씨가 수십 개의 민트와 카다멈 묘목 화분뿐만 아니라 다른 희귀한 허브들도 가지고 있다고 했고, 이메일의 두 번째 단락 두 번째 문장에서 요네다 씨가 구입하는 묘목의 종류와 각 식물에 지불하는 도매가격은 양치식물(8달러), 덩굴식물(6달러), 일년생 화초(5달러), 그리고 요리용 허브들로 특히 오레가노, 민트, 로즈메리(2달러)라고 했다. 딕슨 씨가 가지고 있는 식물은 민트, 카다멈을 비롯한 허브이고 요네다 씨는 요리용 허브에 2달러를 지불한다고 했으므로 (D)가 정답이다.`
                }
                    ]
        },
        // Questions 186-190: Web Page, E-mail, and Review
        {
            id: "p7-t6-set13",
            questionRange: "186-190",
            passages: [
                {
                    id: "p7-t6-s13-p1",
                    contextType: "P4",
                    docType: "WEBPAGE",
                    title: "Web Page",
                    content: `https://www.elektroproofrepair.com/about\n\nTrust Elektroproof Repair to get your computer running right again!\n\nElektroproof Repair's no-surprises policy offers flat fees for labor at three price points: $145, $200, and $350. These fees do not include the cost of software or replacement parts. The majority of our repairs incur the $200 fee.\n\nNOTE: Because of a dramatic increase in demand, we now require appointments for all services. For an initial consultation with one of our highly qualified technicians, simply select from the available time slots on our schedule page. When you schedule your appointment, we require a $60 nonrefundable deposit which will be credited toward the cost of services rendered.\n\nIf you have any questions, please e-mail us at inquiries@elektroproofrepair.com. Whenever possible, we will contact you the same day or on the following business day. Most repairs are completed within three to five business days.`,
                    translation: `엘렉트로프루프 리페어를 믿고 여러분의 컴퓨터를 다시 정상적으로 작동시켜 보세요!\n\n엘렉트로프루프 리페어의 정찰제 정책은 세 가지 인건비 가격대(145달러, 200달러, 350달러)를 제공합니다. 이 요금에는 소프트웨어 비용이나 부품 교체 비용은 포함되지 않습니다. 대부분의 수리는 200달러의 비용이 발생합니다.\n\n참고: 186 급격한 수요 증가로 인해 현재 모든 서비스에 예약이 필요합니다. 저희의 우수한 기술자와의 초기 상담을 원하시면 예약 페이지에서 이용 가능한 시간대를 선택하시면 됩니다. 예약 시 반환되지 않는 보증금 60달러를 지불하셔야 하며 이 보증금은 제공된 서비스 요금에 충당됩니다.\n\n문의 사항이 있으시면 inquiries@elektroproofrepair.com으로 이메일을 보내 주세요. 가능한 한 당일 또는 다음 영업일에 연락드리겠습니다. 190 대부분의 수리는 영업일 기준 3~5일 이내에 완료됩니다.`
                },
                {
                    id: "p7-t6-s13-p2",
                    contextType: "P1",
                    docType: "EMAIL",
                    content: `From: Arthur Jacquet <ajacquet@elektroproofrepair.com>\nTo: Jessica Nelson <jnelson17@saffronmail.com>\nDate: January 14\nSubject: Re: Tea spill, please help!\n\nDear Ms. Nelson,\n\nThank you for contacting Elektroproof Repair. You asked if you could bring in your laptop for inspection tomorrow, January 15. Unfortunately, we are currently booked solid through January 18. The earliest available time slot is 8:00 A.M. on January 19. Please let me know if you would like to book that slot or if you have any questions.\n\nSincerely,\nArthur Jacquet, Elektroproof Repair`,
                    translation: `수신: 제시카 넬슨 <jnelson17@saffronmail.com>\n발신: 아서 자케 <ajacquet@elektroproofrepair.com>\n날짜: 1월 14일\n제목: 회신: 차를 쏟았습니다. 도와주세요!\n\n넬슨 씨께,\n\n엘렉트로프루프 리페어에 연락해 주셔서 감사합니다. 187 내일 1월 15일에 검사를 위해 노트북을 가져가도 되는지 문의하셨습니다. 안타깝게도 현재 1월 18일까지 예약이 완전히 다 찼습니다. 187 예약 가능한 가장 빠른 시간대는 1월 19일 오전 8시입니다. 이 시간대로 예약하기를 원하시거나 질문이 있으시면 알려 주십시오.\n\n아서 자케, 엘렉트로프루프 리페어`
                },
                {
                    id: "p7-t6-s13-p3",
                    contextType: "P4",
                    docType: "WEBPAGE",
                    title: "Review",
                    content: `https://www.buyertobuyerintel.com/repair_services/electronics/computer_devices\n\n*****\nElektroproof Repair\n\nI spilled tea on the keyboard of my faithful old laptop, and while I dried the exterior rather quickly, I was afraid the internal components might have been ruined. Luckily for me, Elektroproof Repair came to the rescue! After booking my consultation on the Web site, I waited anxiously for a reply. Within an hour, I got an e-mail directly from the owner. Although the time slot I had requested was not available, when I responded to his e-mail to express how urgently I needed my laptop, the owner said they had an unexpected cancellation and asked if I could bring it in that very morning, which I did. Since my computer was not turned on at the time of the accident, an Elektroproof Repair technician was able to dry the computer's insides and prevent damage to the hard drive or internal circuits. Other than a new battery, no other part was needed, and Elektroproof Repair had my laptop fully functional and back in my hands within 24 hours.\n-Jessica Nelson`,
                    translation: `오랫동안 믿고 잘 사용하던 노트북 키보드에 차를 쏟았고, 겉은 꽤 빨리 말렸지만 189 내부 부품이 망가졌을까 봐 걱정했습니다. 다행스럽게도 엘렉트로프루프 리페어가 구세주로 나섰습니다! 웹사이트에서 상담을 예약한 후 초조하게 답변을 기다렸습니다. 188 한 시간 이내에 사장님으로부터 직접 이메일을 받았습니다. 제가 요청한 시간대는 불가능했지만 얼마나 급하게 노트북이 필요한지 설명하자 사장님은 예상치 못한 예약 취소가 생겼다며 바로 그날 아침에 노트북을 가져올 수 있는지 물었고 저는 그렇게 했습니다. 사고가 났을 때 컴퓨터가 켜져 있지 않았기 때문에 엘렉트로프루프 리페어 기술자가 컴퓨터 내부를 건조하고 하드 드라이브나 내부 회로의 손상을 막을 수 있었습니다. 새 배터리 외에는 다른 부품이 필요하지 않았으며 190 엘렉트로프루프 리페어에서 노트북이 제대로 작동하게 하여 24시간 이내에 저에게 돌려주었습니다.\n- 제시카 넬슨`
                }
                    ],
            questions: [
                {
                    id: "186",
                    text: "According to the Web page, what is true about Elektroproof Repair?",
                    classification: "P7_DETAIL",

                    options: [
                        { label: "A", text: "It recently raised its prices." },

                        { label: "B", text: "It is hiring more repair technicians." },

                        { label: "C", text: "It has experienced a sudden increase in business." },

                        { label: "D", text: "It requires full payment before work can begin." }
                    ],
                    correctAnswer: "C",
                    translation: "웹페이지에 따르면, 엘렉트로프루프 리페어에 대해 사실인 것은?",
                    explanation: `웹페이지의 두 번째 단락 첫 문장에서 급격한 수요의 증가로 인해 현재 모든 서비스에 예약이 필요하다(Because of a dramatic increase in demand ~ require appointments for all services)고 했으므로 (C)가 정답이다. 같은 단락 마지막 문장에서 예약 시 보증금 60달러를 지불해야 하며 이 보증금은 서비스 비용에 충당된다(we require a $60 ~ cost of services rendered)고 했으므로 (D)는 오답이고 (A)와 (B)에 대한 언급은 없으므로 답이 될 수 없다.`
                },
                {
                    id: "187",
                    text: "According to the e-mail, what is the earliest date when Ms. Nelson could bring in her laptop for service?",
                    classification: "P7_DETAIL",

                    options: [
                        { label: "A", text: "On January 14" },

                        { label: "B", text: "On January 15" },

                        { label: "C", text: "On January 18" },

                        { label: "D", text: "On January 19" }
                    ],
                    correctAnswer: "D",
                    translation: "이메일에 따르면, 넬슨 씨가 서비스를 위해 노트북을 가져올 수 있는 가장 빠른 날짜는?",
                    explanation: `이메일의 두 번째 문장에서 내일 1월 15일에 검사를 위해 노트북을 가져와도 되는지 문의했는데 예약 가능한 가장 빠른 시간대는 1월 19일 오전 8시(The earliest available time slot is 8:00 A.M. on January 19)라고 하고 있다. 따라서 넬슨 씨가 수리를 위해 노트북을 가지고 방문할 수 있는 가장 빠른 날짜는 1월 19일이므로 (D)가 정답이다.`
                },
                {
                    id: "188",
                    text: "What is most likely true about Mr. Jacquet?",
                    classification: "P7_INFERENCE",

                    options: [
                        { label: "A", text: "He owns the business." },

                        { label: "B", text: "He is a technician." },

                        { label: "C", text: "He is a receptionist." },

                        { label: "D", text: "He delivers repaired equipment." }
                    ],
                    correctAnswer: "A",
                    translation: "자케 씨에 대해 사실일 것 같은 것은?",
                    explanation: `이메일의 첫 문장에서 발신자인 아서 자케 씨(Arthur Jacquet)가 넬슨 씨에게 연락 주어서 감사하다고 했고, 후기의 네 번째 문장에서 넬슨 씨가 한 시간 이내로 사장님으로부터 직접 이메일을 받았다(Within an hour, I got an e-mail directly from the owner)고 했다. 따라서 넬슨 씨에게 이메일을 보낸 자케 씨는 엘렉트로프루프 리페어의 사장이므로 (A)가 정답이다.`
                },
                {
                    id: "189",
                    text: "According to the review, what was Ms. Nelson's main concern about her laptop?",
                    classification: "P7_DETAIL",

                    options: [
                        { label: "A", text: "That the parts inside it might be damaged" },

                        { label: "B", text: "That it was too old to be repaired" },

                        { label: "C", text: "That it was responding too slowly" },

                        { label: "D", text: "That its operating system had a virus" }
                    ],
                    correctAnswer: "A",
                    translation: "후기에 따르면, 넬슨 씨가 노트북에 대해 가장 걱정했던 것은?",
                    explanation: `후기의 첫 문장에서 넬슨 씨가 내부 부품이 망가졌을까 봐 걱정했다(I was afraid the internal components might have been ruined)고 했으므로 (A)가 정답이다.`
                },
                {
                    id: "190",
                    text: "What is suggested about the repair of Ms. Nelson's computer?",
                    classification: "P7_INFERENCE",

                    options: [
                        { label: "A", text: "It included installing new operating software." },

                        { label: "B", text: "It was completed more quickly than advertised." },

                        { label: "C", text: "It involved the replacement of internal circuits." },

                        { label: "D", text: "It required an upgrade to the hard drive." }
                    ],
                    correctAnswer: "B",
                    translation: "넬슨 씨의 컴퓨터 수리에 대해 암시된 것은?",
                    explanation: `웹페이지의 마지막 문장에서 대부분의 수리는 영업일 기준 3~5일 이내에 완료된다(Most repairs are completed within three to five business days)고 했고, 후기의 마지막 문장에서 넬슨 씨가 일찍 노트북을 돌려받았다(had my laptop ~ within 24 hours)고 했다. 따라서 넬슨 씨의 노트북은 웹페이지에 게시된 기간보다 훨씬 더 짧은 시간 내에 수리되었으므로 (B)가 정답이다.`
                }
                    ]
        },
        // Questions 191-195: Advertisement, E-mail, and Receipt
        {
            id: "p7-t6-set14",
            questionRange: "191-195",
            passages: [
                {
                    id: "p7-t6-s14-p1",
                    contextType: "P4",
                    docType: "ADVERTISEMENT",
                    title: "Advertisement",
                    content: `Learn to play guitar at Alexis Instruments!\n\nAlexis Instruments will offer group and individual guitar instruction beginning April 2. Each of our locations has been updated with newly constructed classrooms and practice rooms. Our instructors have years of experience teaching and playing as professional musicians. Call an Alexis Instruments store today for availability and pricing.`,
                    translation: `알렉시스 인스트루먼츠에서 기타 연주를 배우세요!\n\n알렉시스 인스트루먼츠는 4월 2일부터 그룹 및 개인 기타 교습을 제공할 예정입니다. 192 저희의 각 지점은 신축 교실과 연습실로 새로워졌습니다. 저희 강사들은 전문 음악가로서 수년간 가르치고 연주한 경험이 있습니다. 지금 바로 알렉시스 인스트루먼츠 매장에 전화하셔서 수강 가능한 과정과 가격을 알아보세요.`
                },
                {
                    id: "p7-t6-s14-p2",
                    contextType: "P1",
                    docType: "EMAIL",
                    content: `To: Lucia Rivera <luciarivera@rapidonet.com>\nFrom: Krista Towers <ktowers@alexisinstruments.com>\nDate: April 26, 8:30 A.M.\nSubject: Order TS1058293\n\nDear Ms. Rivera,\n\nI am following up on the order you placed with us on April 23. We have only one guitar of the model you want in stock. It was used as a display sample on the floor of our salesroom here in Santa Barbara. This means it is out of the box and has been played by customers browsing the store. Our in-house luthier has thoroughly inspected the guitar, and it is still in excellent condition. There are no scratches, scuffs, or dents on it whatsoever. Because you purchased the instrument on the understanding that it was brand new, we want to offer you two options:\n\n1. If you do not want the floor model, you may cancel the order and receive an immediate full refund.\n2. 194 If you would like the floor model, we will ship it immediately and offer you a 10 percent discount off the original retail price.\n\nIf you choose the latter, we will make sure the guitar is delivered to your local store in time for your first lesson there tomorrow. We apologize for the inconvenience.\n\nSincerely,\nKrista Towers\nAlexis Instruments`,
                    translation: `수신: 루시아 리베라 <luciarivera@rapidonet.com>\n발신: 크리스타 타워스 <ktowers@alexisinstruments.com>\n날짜: 4월 26일 오전 8시 30분\n제목: TS1058293 주문\n\n리베라 씨께,\n\n4월 23일에 주문하신 건에 대해 말씀드릴 것이 있습니다. 193 고객님께서 원하시는 모델의 기타는 재고가 한 대밖에 없습니다. 이 기타는 여기 산타 바바라에 있는 저희 판매장 바닥에 전시용으로 사용된 것입니다. 이는 기타가 상자 밖에 나와 있었고 매장을 둘러보는 손님들에 의해 연주되었다는 것을 뜻합니다. 저희 사내 현악기 제작자가 기타를 철저히 검사했고 아직 상태도 훌륭합니다. 긁힌 자국이나 흠집, 찌그러진 부분도 전혀 없습니다. 기타가 새 제품이라고 생각하고 구매하셨기 때문에 다음 두 가지 옵션을 제공해 드리고자 합니다.\n\n1. 진열용 상품을 원하지 않으실 경우, 주문을 취소하고 즉시 전액 환불을 받으실 수 있습니다.\n2. 194 진열용 상품을 원하실 경우, 즉시 배송해 드리고 원래 소매가에서 10퍼센트를 할인해 드립니다.\n\n후자를 선택하신다면 기타가 내일 첫 수업에 늦지 않게 고객님 지역의 매장으로 배달되도록 하겠습니다. 불편을 드려 죄송합니다.\n\n크리스타 타워스\n알렉시스 인스트루먼츠`
                },
                {
                    id: "p7-t6-s14-p3",
                    contextType: "P5",
                    docType: "FORM",
                    title: "Receipt",
                    content: `Alexis Instruments\nOrder number: TS1058293\nDate: April 26\n\nDescription | Price\nDomingo 313 full-body acoustic guitar | $450.00\n10% discount on guitar | -$45.00\nThree-year repair and maintenance plan, good at any Alexis Instruments location | $75.00\nSales tax | $34.80\nTotal | $514.80\n\nShip To | Bill To\nAlexis Instruments, store #23 | Lucia Rivera\n3914 Joseph Drive | 11437 Shady Grove Lane\nChico, CA 95926 | Chico, CA 95926`,
                    translation: `알렉시스 인스트루먼츠\n주문 번호: TS1058293\n날짜: 4월 26일\n\n설명 | 가격\n도밍고 313 풀바디 어쿠스틱 기타 | 450달러\n194 기타 10퍼센트 할인 | -45달러\n195 알렉시스 인스트루먼츠 전 지점에서 유효한 3년 수리 및 유지 관리 서비스 | 75달러\n판매세 | 34.8달러\n총액 | 514.8달러\n\n배송지 | 청구 대상\n알렉시스 인스트루먼츠, 23번 매장 | 루시아 리베라\n3914 조셉 드라이브 | 11437 셰이디 그로브 레인\n치코, 캘리포니아 95926 | 치코, 캘리포니아 95926`
                }
                    ],
            questions: [
                {
                    id: "191",
                    text: "What is the purpose of the advertisement?",
                    classification: "P7_PURPOSE",

                    options: [
                        { label: "A", text: "To sell guitars" },

                        { label: "B", text: "To promote lessons" },

                        { label: "C", text: "To attract music teachers" },

                        { label: "D", text: "To announce a new location" }
                    ],
                    correctAnswer: "B",
                    translation: "광고의 목적은?",
                    explanation: `광고의 제목에서 알렉시스 인스트루먼츠에서 기타 연주를 배우라고 제안하고 있으므로 기타 연주 수업을 홍보하는 광고임을 알 수 있다. 따라서 (B)가 정답이다.`
                },
                {
                    id: "192",
                    text: "What is most likely true about the store where Ms. Towers works?",
                    classification: "P7_INFERENCE",

                    options: [
                        { label: "A", text: "It has been renovated." },

                        { label: "B", text: "It is hiring new employees." },

                        { label: "C", text: "It has more inventory than other locations." },

                        { label: "D", text: "It has extended its hours of operation." }
                    ],
                    correctAnswer: "A",
                    translation: "타워스 씨가 일하는 매장에 대해 사실일 것 같은 것은?",
                    explanation: `이메일의 하단에 크리스타 타워스(Krista Towers)는 알렉시스 인스트루먼츠(Alexis Instruments)에서 근무하는 것으로 나와 있고, 광고의 두 번째 문장에서 저희 알렉시스 인스트루먼츠의 각 지점이 신축 교실과 연습실로 새로워졌다(Each of our locations has been updated with newly constructed classrooms and practice rooms)고 했다. 따라서 타워스 씨가 일하는 알렉시스 인스트루먼츠의 전 지점이 개조되었다는 것을 알 수 있으므로 (A)가 정답이다.`
                },
                {
                    id: "193",
                    text: "What does the e-mail indicate about the guitar?",
                    classification: "P7_DETAIL",

                    options: [
                        { label: "A", text: "It is in need of repairs." },

                        { label: "B", text: "It has been on a shelf at the store in Chico." },

                        { label: "C", text: "It was previously owned by an Alexis Instruments customer." },

                        { label: "D", text: "It is the only one of its model currently available." }
                    ],
                    correctAnswer: "D",
                    translation: "이메일에서 기타에 대해 명시한 것은?",
                    explanation: `이메일의 두 번째 문장에서 고객이 원하는 모델의 기타는 재고가 한 대밖에 없다(We have only one guitar of the model you want in stock)고 했으므로 (D)가 정답이다. 이메일의 세 번째 문장에서 이 기타는 여기 산타 바바라에 있는 판매장 바닥에 전시용으로 사용된 것이라고 했으므로 (B)는 오답이며, (A)와 (C)는 언급되지 않았다.`
                },
                {
                    id: "194",
                    text: "What can be inferred about Ms. Rivera?",
                    classification: "P7_INFERENCE",

                    options: [
                        { label: "A", text: "She damaged her guitar." },

                        { label: "B", text: "She requested a refund." },

                        { label: "C", text: "She was previously enrolled in an online class." },

                        { label: "D", text: "She purchased the floor model." }
                    ],
                    correctAnswer: "D",
                    translation: "리베라 씨에 대해 추론할 수 있는 것은?",
                    explanation: `이메일의 두 가지 옵션 중 2번에서 리베라 씨에게 진열용 상품을 원할 경우 즉시 배송하고 원래 소매가에서 10퍼센트를 할인해 주겠다(If you would like the floor model ~ offer you a 10 percent discount off the original retail price)고 했고, 영수증의 설명 부분 두 번째 항목에 기타가 10퍼센트 할인되어 45달러가 공제되었으므로 리베라 씨가 이메일의 옵션 2번에 제시된 조건으로 진열되었던 기타를 구입했음을 알 수 있으므로 (D)가 정답이다.`
                },
                {
                    id: "195",
                    text: "According to the receipt, what is true about Alexis Instruments?",
                    classification: "P7_DETAIL",

                    options: [
                        { label: "A", text: "It repairs instruments in its stores." },

                        { label: "B", text: "It has two stores in Santa Barbara." },

                        { label: "C", text: "It is holding an annual sale." },

                        { label: "D", text: "It was founded by a professional musician." }
                    ],
                    correctAnswer: "A",
                    translation: "영수증에 따르면, 알렉시스 인스트루먼츠에 대해 사실인 것은?",
                    explanation: `영수증의 설명 부분 세 번째 항목에 알렉시스 인스트루먼츠 전 지점에서 유효한 3년 수리 및 유지 관리 서비스(Three-year repair ~ at any Alexis Instruments location)라고 나와 있는 것으로 보아 알렉시스 인스트루먼츠에서는 매장에서 악기 수리 서비스를 제공하고 있음을 알 수 있다. 따라서 (A)가 정답이다.`
                }
                    ]
        },
        // Questions 196-200: E-mails and Invoice
        {
            id: "p7-t6-set15",
            questionRange: "196-200",
            passages: [
                {
                    id: "p7-t6-s15-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    content: `To: All Instructors\nFrom: Jee-Young Choi\nSubject: New fee schedule\nDate: August 15\n\nDear Teachers,\n\nThank you for lending your skills as artists and educators to the Mirabel Museum of Art. Please use the updated fee schedule below when creating your monthly invoices.\n\nCategory | Description | Duration | Fee\nTour | Lead group tour | 60 minutes | $50\nTour | Lead group tour | 90 minutes | $75\nClass | Teach art class | 75 minutes | $65\nClass | Teach art class | 120 minutes | $110\nDevelopment | Plan new course content | Varies | $200\nTraining | Instruct museum staff on a specialized topic | Varies | $25/hour\n\nElectronic payments should be available ten business days after invoice submission.\n\nJee-Young Choi, Education Coordinator`,
                    translation: `수신: 모든 강사\n발신: 최지영\n제목: 신규 수수료 표\n날짜: 8월 15일\n\n강사님들께,\n\n196 미라벨 미술관에 예술가이자 교육자로서의 능력을 제공해 주셔서 감사합니다. 월별 청구서를 작성하실 때 아래의 업데이트된 수수료 표를 사용하십시오.\n\n항목 | 설명 | 소요 시간 | 수수료\n투어 | 그룹 투어 인솔 | 60분 | 50달러\n투어 | 그룹 투어 인솔 | 90분 | 75달러\n강좌 | 미술 수업 지도 | 75분 | 65달러\n198 강좌 | 미술 수업 지도 | 120분 | 110달러\n200 개발 | 새로운 강의 내용 계획 | 미정 | 200달러\n교육 | 전문적인 주제에 관한 미술관 직원 교육 | 미정 | 시간당 25달러\n\n전자 지불은 청구서 제출 후 영업일 기준 10일 이후에 제공됩니다.\n\n최지영, 교육 진행 담당`
                },
                {
                    id: "p7-t6-s15-p2",
                    contextType: "P5",
                    docType: "FORM",
                    title: "Invoice",
                    content: `Devonte Merriweather\nd.merriweather@camail.ca\n\nInvoice #00278\nFor: Services at the Mirabel Museum of Art\nSent: September 30\n\nDate | Description | Fee\nSeptember 22 | Tour: Special exhibit | $50\nSeptember 22 | Class: Drawing for Beginners | $65\nSeptember 25 | Class: Sculpting with Clay | $110\nTotal | $225`,
                    translation: `데본트 메리웨더\nd.merriweather@camail.ca\n\n청구서 00278번\n대상: 미라벨 미술관 서비스\n발신 날짜: 9월 30일\n\n날짜 | 설명 | 수수료\n9월 22일 | 투어: 특별 전시회 | 50달러\n9월 22일 | 197 강좌: 입문자를 위한 그림 그리기 | 65달러\n9월 25일 | 197, 198 강좌: 점토로 조각하기 | 110달러\n합계 | 225달러`
                },
                {
                    id: "p7-t6-s15-p3",
                    contextType: "P1",
                    docType: "EMAIL",
                    content: `To: Devonte Merriweather <d.merriweather@camail.ca>\nFrom: Jee-Young Choi <jy.choi@mirabelmuseumofart.ca>\nSubject: Payment\nDate: October 6\n\nDear Mr. Merriweather,\n\nThank you for submitting your September invoice. I noticed that you neglected to charge us for developing the curriculum for your sculpting class, which you taught for the first time on September 25. I checked with Carol Swann, and she said that because invoice #00278 has already been paid, it would be best if you submitted a second invoice for the development. I will ask her to process it quickly when I receive it.\n\nYou will be happy to know that the feedback from your students was very positive. I will e-mail scans of their feedback forms later today.\n\nBest,\nJee-Young Choi, Education Coordinator`,
                    translation: `수신: 데본트 메리웨더 <d.merriweather@camail.ca>\n발신: 최지영 <jy.choi@mirabelmuseumofart.ca>\n제목: 지급\n날짜: 10월 6일\n\n메리웨더 씨께,\n\n9월 청구서를 제출해 주셔서 감사합니다. 9월 25일에 처음 가르치신 200 조각 수업의 커리큘럼을 개발하신 일에 대해 저희 측에 청구를 빠뜨리신 것을 발견했습니다. 199 캐럴 스완에게 확인해 보니 00278번 청구서는 이미 지불이 되었기 때문에 개발 건에 대해 두 번째 청구서를 제출하시는 것이 가장 좋다고 합니다. 제가 그것을 받으면 그녀에게 빨리 처리해 달라고 요청하겠습니다.\n\n학생들의 피드백이 매우 긍정적이었다는 것을 알게 되시면 기뻐하실 것 같습니다. 오늘 중으로 그들의 피드백 양식 스캔본을 이메일로 보내 드리겠습니다.\n\n최지영, 교육 진행 담당`
                }
                    ],
            questions: [
                {
                    id: "196",
                    text: "What is suggested in the first e-mail about the Mirabel Museum of Art?",
                    classification: "P7_INFERENCE",

                    options: [
                        { label: "A", text: "It hires art teachers to lead tours." },

                        { label: "B", text: "It offers private tours to museum members." },

                        { label: "C", text: "Its art classes are free to the public." },

                        { label: "D", text: "Its next staff training will take place in ten days." }
                    ],
                    correctAnswer: "A",
                    translation: "첫 번째 이메일에서 미라벨 미술관에 대해 암시된 것은?",
                    explanation: `첫 번째 이메일에서 강사님들께(Dear Teachers)라며 인사하고, 첫 문장에서 미라벨 미술관에 예술가이자 교육자로서의 능력을 제공해 주어 감사하다(Thank you for lending ~ the Mirabel Museum of Art)고 했고, 표의 첫 항목에 그룹 투어 인솔(Lead group tour)이 나와 있다. 따라서 미술관에서 강사들을 고용해 강사들이 제공하는 서비스에 따라 급여를 지불하고 있으며 그 서비스에는 그룹 투어 인솔도 포함되어 있음을 알 수 있으므로 (A)가 정답이다.`
                },
                {
                    id: "197",
                    text: "What does the invoice suggest about Mr. Merriweather?",
                    classification: "P7_DETAIL",

                    options: [
                        { label: "A", text: "He worked at the museum on September 30." },

                        { label: "B", text: "He has expertise in more than one art form." },

                        { label: "C", text: "One of his art classes was canceled." },

                        { label: "D", text: "Some of his artwork was exhibited in September." }
                    ],
                    correctAnswer: "B",
                    translation: "청구서에서 메리웨더 씨에 대해 암시되는 것은?",
                    explanation: `청구서의 표에 따르면 메리웨더 씨가 입문자를 위한 그림 그리기 강좌(Class: Drawing for Beginners)와 점토로 조각하기 강좌(Class: Sculpting with Clay)를 가르친다고 나와 있다. 따라서 메리웨더 씨는 회화와 조소 두 가지 분야에 전문성이 있음을 알 수 있으므로 (B)가 정답이다.`
                },
                {
                    id: "198",
                    text: "How long was the sculpting class that Mr. Merriweather taught?",
                    classification: "P7_DETAIL",

                    options: [
                        { label: "A", text: "60 minutes" },

                        { label: "B", text: "75 minutes" },

                        { label: "C", text: "90 minutes" },

                        { label: "D", text: "120 minutes" }
                    ],
                    correctAnswer: "D",
                    translation: "메리웨더 씨가 가르친 조각 수업의 소요 시간은?",
                    explanation: `청구서의 표에 따르면 메리웨더 씨가 가르친 점토로 조각하기 강좌(Class: Sculpting with Clay)의 수수료는 110달러($110)이고, 첫 번째 이메일의 수수료 표에 따르면 수수료가 110달러($110)인 미술 수업 지도 강좌(Teach art class)의 소요 시간은 120분(120 minutes)이다. 따라서 메리웨더 씨가 가르친 조각 수업은 120분짜리였음을 알 수 있으므로 (D)가 정답이다.`
                },
                {
                    id: "199",
                    text: "According to the second e-mail, who most likely is Ms. Swann?",
                    classification: "P7_INFERENCE",

                    options: [
                        { label: "A", text: "A bookkeeper" },

                        { label: "B", text: "An art teacher" },

                        { label: "C", text: "Mr. Merriweather's assistant" },

                        { label: "D", text: "Director of the Mirabel Museum of Art" }
                    ],
                    correctAnswer: "A",
                    translation: "두 번째 이메일에 따르면, 스완 씨는 누구일 것 같은가?",
                    explanation: `두 번째 이메일의 세 번째 문장에서 캐럴 스완에게 확인해 보니 00278번 청구서는 이미 지불이 되었기 때문에 개발 건에 대해 두 번째 청구서를 제출하는 것이 가장 좋다고 한다(checked with Carol Swann ~ a second invoice for the development)고 했고, 그것을 받으면 그녀에게 빨리 처리해 달라고 요청하겠다(will ask her to process it quickly when I receive it)고 했다. 따라서 스완 씨는 급여 처리 회계를 담당하는 경리임을 알 수 있으므로 (A)가 정답이다.`
                },
                {
                    id: "200",
                    text: "What can be concluded about Ms. Choi?",
                    classification: "P7_DETAIL",

                    options: [
                        { label: "A", text: "She forgot to read some student feedback forms." },

                        { label: "B", text: "She believes that Mr. Merriweather is owed $200." },

                        { label: "C", text: "She meets once a month with teachers." },

                        { label: "D", text: "She rejected Mr. Merriweather's October invoice." }
                    ],
                    correctAnswer: "B",
                    translation: "최 씨에 대해 결론지을 수 있는 것은?",
                    explanation: `두 번째 이메일의 두 번째 문장에서 최 씨가 메리웨더 씨에게 조각 수업의 커리큘럼을 개발한 일에 대해 청구를 빠뜨린 것을 발견했다고 했고, 첫 이메일의 수수료 표의 개발(Development) 항목에 새로운 강의 내용 계획(Plan new course content)을 하면 200달러($200)를 청구할 수 있다고 나와 있다. 따라서 최 씨는 메리웨더 씨에게 조각 수업의 커리큘럼을 개발한 일에 대한 수수료인 200달러를 지급받지 않았다고 믿고 있으므로 (B)가 정답이다.`
                }
                    ]
        }
                    ]
};
