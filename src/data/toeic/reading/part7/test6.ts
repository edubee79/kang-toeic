import { Part7Test } from './types';

export const test6Data: Part7Test = {
    testId: 6,
    title: "Test 6",
    sets: [
        // Questions 147-148: E-mail
        {
            id: "p7-t6-set1",
            setType: "Single",
            questionRange: "147-148",
            passages: [
                {
                    id: "p7-t6-s1-p1",
                    contextType: "P1_CORR",
                    docType: "EMAIL",
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
                    explanation: `첫 번째 단락에서 비밀번호 복구를 위한 비밀 질문 옵션이 오늘 오후 3시 16분에 업데이트되었다(Your secret-question option ... was updated at 3:16 P.M. today)고 하며, 이 변경 사항을 확인하고 대처 방안을 안내하고 있으므로 (C)가 정답입니다.`
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
                    explanation: `두 번째 단락에서 2단계 인증을 설정하여 절차를 훨씬 더 안전하게 하라(Make the process even more secure by setting up two-step verification)고 안내하고 있으므로 (B)가 정답입니다.`
                }
            ]
        },
        // Questions 149-150: E-mail
        {
            id: "p7-t6-set2",
            setType: "Single",
            questionRange: "149-150",
            passages: [
                {
                    id: "p7-t6-s2-p1",
                    contextType: "P1_CORR",
                    docType: "EMAIL",
                    content: `To: <lduberville@futuremail.co.uk>\nFrom: <support@globaltech.co.uk>\nDate: 23 March\nSubject: Residential service\n\nDear Ms. Duberville,\n\nThanks for your order. We are very pleased to have you as a new customer and are contacting you to request that you set up an appointment for one of our representatives to install a Global Tech modem at your home. Please go online and select a 30-minute window out of the four we have posted to your account.\n\nIn preparation for our visit, please clear the area on the wall where you would like us to install the modem. Setting up the modem will take just a few minutes, after which you will be able to enjoy our service.\n\nWe will use the phone number listed on your account the morning of the appointment to confirm the visit. Let us know at this time if you have any questions for us.\n\nSincerely,\n\nGordon Mackey\nCustomer Service, Global Tech`,
                    translation: `수신: <lduberville@futuremail.co.uk>\n발신: <support@globaltech.co.uk>\n날짜: 3월 23일\n제목: 주거 서비스\n\n더버빌 씨께,\n\n주문해 주셔서 감사합니다. 귀하를 새로운 고객으로 모시게 되어 매우 기쁘며, 저희 직원이 귀하의 댁에 글로벌 테크 모뎀을 설치하려면 예약을 하셔야 해서 연락드립니다. 온라인에서 귀하의 계정에 게시해 드린 네 가지 시간대 중 30분을 선택하십시오.\n\n저희가 방문할 것을 대비하여 모뎀 설치를 원하시는 벽면 공간을 비워주십시오. 모뎀을 설치하는 데 몇 분만 소요되고 그 후에 바로 서비스를 이용하실 수 있습니다.\n\n예약 당일 오전에 귀하의 계정에 기재된 전화번호로 방문 여부를 확인할 예정입니다. 문의사항이 있으시면 이때 알려주시길 바랍니다.\n\n감사합니다.\n\n고든 맥키\n고객 서비스, 글로벌 테크`
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
                    translation: "더버빌 씨가 계약했을 법한 서비스 종류는?",
                    explanation: `지문에서 글로벌 테크 모뎀(Global Tech modem)을 설치한다고 했으며, 그 후 서비스를 이용(enjoy our service)할 수 있다고 했으므로 인터넷 서비스(Internet access)임을 알 수 있습니다.`
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
                    explanation: `첫 단락에서 '직원이 당신의 댁에 모뎀을 설치하기 위한 예약을 잡으라고 요청(request that you set up an appointment for one of our representatives to install ... at your home)'했으므로 직원이 방문하게 됨을 알 수 있습니다.`
                }
            ]
        },
        // Questions 151-152: Online Chat
        {
            id: "p7-t6-set3",
            setType: "Single",
            questionRange: "151-152",
            passages: [
                {
                    id: "p7-t6-s3-p1",
                    contextType: "P7_CONV",
                    docType: "CHAT_MESSAGE",
                    content: `Katrina Finton (1:46 P.M.)\nHey, Steven. I am hoping to move into a new apartment soon, and the landlord requires a letter verifying my place of employment and my income. I have written up the letter. Would you be willing to sign it today as proof that I work here at Carrino Agency?\n\nSteven Khen (1:48 P.M.)\nDouble-check with Ariana Seltzer first. The human resources department usually has a form they can provide for you.\n\nKatrina Finton (1:49 P.M.)\nI tried that. They don't have a set form.\n\nSteven Khen (1:50 P.M.)\nNo problem then. Bring your document over.\n\nSteven Khen (1:51 P.M.)\nBy the way, the meeting about the Zaine Company Web site was moved to 3:00 P.M. You already have all your designs for their Web site ready, right?\n\nKatrina Finton (1:52 P.M.)\nI'm all set.`,
                    translation: `카트리나 핀톤 (오후 1:46) 안녕하세요, 스티븐. 제가 곧 새 아파트로 이사를 가려고 하는데, 집주인이 저의 직장과 소득을 입증하는 서류를 요구하고 있습니다. 제가 서류는 작성해 놓았습니다. 제가 여기 카리노 에이전시에서 근무하고 있다는 증거로 오늘 이 서류에 서명을 좀 해주시겠습니까?\n\n스티븐 켄 (오후 1:48) 아리아나 셀처에게 먼저 다시 확인해 보세요. 인사부에 보통 당신에게 줄 수 있는 양식이 있어서요.\n\n카트리나 핀톤 (오후 1:49) 제가 알아봤습니다. 정해진 양식은 없습니다.\n\n스티븐 켄 (오후 1:50) 그럼 문제없습니다. 서류를 가져오세요.\n\n스티븐 켄 (오후 1:51) 그런데, 제인 컴퍼니 웹사이트에 대한 회의가 오후 3시로 변경되었습니다. 이미 그들의 웹사이트를 위한 당신의 디자인을 전부 준비해 놓으셨죠?\n\n카트리나 핀톤 (오후 1:52) 준비해 놓았습니다.`
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
                    explanation: `바로 앞 메시지에서 스티븐 켄이 아리아나 셀처(Ariana Seltzer)에게 확인해 보라고 했으므로, '그렇게 해봤다'는 말은 셀처 씨에게 이미 연락해 보았음을 의미합니다.`
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
                    explanation: `스티븐 켄이 오후 1시 51분에 핀톤 씨에게 '웹사이트를 위한 당신의 디자인을 전부 준비해 놓았느냐(You already have all your designs for their Web site ready, right?)'고 물었으므로 (D)가 정답입니다.`
                }
            ]
        },
        // Questions 153-155: Web page
        {
            id: "p7-t6-set4",
            setType: "Single",
            questionRange: "153-155",
            passages: [
                {
                    id: "p7-t6-s4-p1",
                    contextType: "P4_MARK",
                    docType: "WEB_PAGE",
                    content: `http://www.marilisprofessionalcoaching.com\n\nMarilis Professional Coaching: January Events\n\nJanuary 15 at 4:30 P.M.—Job Search Support\nLearn about the latest tools and techniques to help you find a rewarding entry-level job. Topics include the best Web sites for job announcements and how to use professional organizations to get job leads.\n\nJanuary 16 at 4:30 P.M.—How to Market Yourself\nTo set yourself apart from other candidates, you have to effectively communicate the value you'll bring to the company. This session will help you successfully promote yourself to potential employers, both in person and through social media.\n\nJanuary 17 at 4:30 P.M.—Interview Strategies\nGet tips on interview rules, common questions, and the process for what you need to do before, during, and after a job interview. This session will be interactive, featuring mock interviews with attendees.\n\nGo to www.marilisprofessionalcoaching.com/register to sign up for any of these low-cost events. Note that all January events are virtual.`,
                    translation: `http://www.marilisprofessionalcoaching.com\n\n마릴리스 프로페셔널 코칭: 1월 행사\n\n1월 15일 오후 4시 30분—구직 지원\n보람 있는 신입직을 찾는 데 도움이 되는 최신 도구 및 기술에 대해 배워 보세요. 주제에는 최적의 구인 공고 웹사이트와 구직 기회를 얻기 위해 전문 기관을 활용하는 방법이 포함됩니다.\n\n1월 16일 오후 4시 30분—스스로를 마케팅하는 방법\n다른 지원자들로부터 차별화되려면, 회사에 기여할 가치를 효과적으로 전달해야 합니다. 이 세션은 대면으로나 소셜 미디어를 통해 잠재적 고용주에게 자신을 성공적으로 홍보하는 데 도움이 될 것입니다.\n\n1월 17일 오후 4시 30분—면접 전략\n면접 규칙, 일반적인 질문, 그리고 면접 전후에 해야 할 일에 대한 절차와 관련해 팁을 얻어 가세요. 이 세션은 참석자들과의 모의 면접을 포함해 양방향으로 진행됩니다.\n\n이 저렴한 이벤트에 등록하시려면 www.marilisprofessionalcoaching.com/register를 방문하세요. 1월의 모든 행사는 온라인(virtual)으로 진행됩니다.`
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
                    explanation: `웹페이지 전반에서 구직 지원, 자기 마케팅, 면접 전략 등 커리어 관련 지원 서비스들을 날짜별로 소개하고 있으므로 (A)가 정답입니다.`
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
                    explanation: `1월 17일 세션 설명에서 '참석자들과의 모의 면접을 포함한다(featuring mock interviews with attendees)'고 했으므로 (D) 면접관에게 대응하는 연습을 한다는 것이 정답입니다.`
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
                    explanation: `마지막 문장에서 '1월의 모든 행사는 가상(가상/온라인)이다(Note that all January events are virtual)'고 명시되어 있습니다.`
                }
            ]
        },
        // Questions 156-158: Review
        {
            id: "p7-t6-set5",
            setType: "Single",
            questionRange: "156-158",
            passages: [
                {
                    id: "p7-t6-s5-p1",
                    contextType: "P3_MEDI",
                    docType: "ARTICLE",
                    content: `Eston Development Worth a Look\nby Marcus Watanabe\n\n"Ideal residential developments combine twenty-first-century convenience with small-town charm." That is the philosophy found in the brochure of the Homestead at Eston, a recently completed housing development just outside the town of Eston. — [1] —.\n\nThe community has wide streets, sidewalks, and three small parks surrounding a central square. The square features a café, a restaurant, and several shops. In the northeast corner of the development, there is an activity complex that includes a gym, theater, and swimming pool. — [2] —. "This means you never have to leave the community unless you want to," said Marjorie Solomon, sales director. "Once you visit, you'll realize why so many people are purchasing homes here."\n\nWhile never leaving your development struck me as an odd idea, the Homestead planners deserve praise for creating a very attractive place to live. — [3] —. The planners have obviously prioritized the environment. Natural habitats have been carefully preserved, and homes and other structures have been designed to conserve water and energy.\n\nModel homes are currently available for tours. — [4] —. Open houses take place Saturdays and Sundays 12:30–4:00 P.M. Alternatively, appointments can be made by calling 855-555-0129.`,
                    translation: `에스턴 단지, 지켜볼 만한 가치가 있다\n작성: 마커스 와타나베\n\n"이상적인 주거지 개발은 21세기형 편리함과 소도시의 매력을 결합합니다." 이것은 에스턴 시 바로 외곽에 최근 완공된 주거 단지인 홈스테드 앳 에스턴의 안내 책자에 적힌 철학입니다. — [1] —.\n\n이 단지에는 넓은 도로와 인도, 그리고 중앙 광장을 둘러싸고 있는 세 개의 작은 공원이 있습니다. 광장에는 카페, 식당, 그리고 여러 상점이 있습니다. 단지의 북동쪽 모퉁이에는 체육관, 영화관, 수영장을 포함한 활동 복합 단지가 있습니다. — [2] —. "이것은 당신이 원하지 않는 한 단지를 떠날 필요가 없다는 것을 의미합니다."라고 마조리 솔로몬 영업 이사가 말했습니다. "일단 방문해보시면 왜 이렇게 많은 사람들이 이곳에 집을 사고 있는지 깨닫게 될 것입니다."\n\n단지를 떠나지 않는다는 것이 저에게는 다소 이상한 생각으로 느껴졌지만, 홈스테드 설계자들은 매우 매력적인 거주 공간을 만든 것에 대해 충분히 칭찬받을 만합니다. — [3] —. 설계자들은 분명 환경을 우선시했습니다. 자연 서식지가 세심하게 보존되었으며, 집과 다른 건축물들은 물과 에너지를 보존하도록 설계되었습니다.\n\n모델 하우스 투어가 현재 가능합니다. — [4] —. 오픈 하우스는 토요일과 일요일 오후 12시 30분부터 4시 사이에 열립니다. 또는 855-555-0129로 전화하여 예약할 수도 있습니다.`
                }
            ],
            questions: [
                {
                    id: "p7-t6-q156",
                    questionNo: 156,
                    text: "What is indicated about the activity complex?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It has a variety of desirable features.",
                        "B": "It is currently under construction.",
                        "C": "It has low membership fees.",
                        "D": "It is located in the central square."
                    },
                    correctAnswer: "A",
                    translation: "활동 복합 단지에 대해 명시된 것은?",
                    explanation: `활동 복합 단지(activity complex)에는 체육관, 영화관, 수영장(gym, theater, and swimming pool)이 포함되어 있다고 했으므로 다양한 매력적인 특징을 가지고 있다는 (A)가 정답입니다.`
                },
                {
                    id: "p7-t6-q157",
                    questionNo: 157,
                    text: "How can a prospective resident learn more about Homestead at Eston?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "By viewing a model home online",
                        "B": "By requesting a brochure",
                        "C": "By visiting the community",
                        "D": "By calling a current homeowner"
                    },
                    correctAnswer: "C",
                    translation: "잠재 거주자들이 홈스테드 앳 에스턴에 대해 어떻게 더 자세히 알 수 있는가?",
                    explanation: `마지막 단락에서 모델 하우스 투어가 가능하고 오픈 하우스(Open houses)가 주말에 열린다고 했으므로 직접 커뮤니티를 방문함으로써 알 수 있습니다.`
                },
                {
                    id: "p7-t6-q158",
                    questionNo: 158,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Homestead, however, is more than just a pretty place.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "C",
                    translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"하지만 홈스테드는 단순히 예쁜 장소 그 이상입니다.\"",
                    explanation: `주어진 문장은 '하지만(however)'을 통해 내용이 전환되고 있습니다. [3] 앞에서 매력적인 거주 공간임을 칭찬한 뒤, [3] 뒤에서 환경 보존과 에너지 절약 등 '예쁜 장소 그 이상의 가치'를 설명하고 있으므로 대조와 전환의 위치인 [3]이 정답입니다.`
                }
            ]
        },
        // Questions 159-160: E-mail
        {
            id: "p7-t6-set6",
            setType: "Single",
            questionRange: "159-160",
            passages: [
                {
                    id: "p7-t6-s6-p1",
                    contextType: "P1_CORR",
                    docType: "EMAIL",
                    content: `From: Stefan Fonsman <sfonsman@kaybunconstruction.ca>\nTo: Rita Palore <rpalore@palorecement.ca>\nSubject: Palore Cement\nDate: March 2\n\nDear Ms. Palore,\n\nThank you for sending your estimate for the cement work on our apartment project in Smithville. The narrative accompanying your bid answered all of our questions, and my team was impressed by your firm's previous work and references. Your company is my first choice to take on the project.\n\nNonetheless, I still need budget approval from my director, Anita Cho. Your proposed price is a bit steeper than anticipated. I will be speaking with Ms. Cho about this tomorrow morning. Based on your company's reputation for outstanding work, I am confident that she will sign off on your bid.\n\nI expect to get back to you by March 4.\n\nRegards,\n\nStefan Fonsman\nKaybun Construction`,
                    translation: `발신: 스테판 폰즈먼 <sfonsman@kaybunconstruction.ca>\n수신: 리타 팔로어 <rpalore@palorecement.ca>\n제목: 팔로어 시멘트\n날짜: 3월 2일\n\n팔로어 씨께,\n\n스미스빌 아파트 프로젝트의 시멘트 작업을 위한 견적서를 보내주셔서 감사합니다. 귀하의 입찰서에 동봉된 기술 명세서는 저희의 모든 질문에 대한 답이 되었으며, 저희 팀은 귀사의 이전 작업물과 추천인들에게 깊은 인상을 받았습니다. 귀사는 이 프로젝트를 맡기기에 제 최우선 순위입니다.\n\n그럼에도 불구하고, 저는 여전히 애니타 조 이사의 예산 승인이 필요합니다. 제안하신 가격이 예상보다 조금 높습니다. 내일 아침에 조 이사와 이 건에 대해 이야기할 예정입니다. 귀사의 뛰어난 작업 평판을 고려할 때, 조 이사가 귀하의 입찰에 서명(승인)할 것이라고 확신합니다.\n\n3월 4일까지 답장을 드릴 수 있을 것으로 예상합니다.\n\n안녕히 계십시오.\n\n스테판 폰즈먼\n케이분 건설`
                }
            ],
            questions: [
                {
                    id: "p7-t6-q159",
                    questionNo: 159,
                    text: "What is one purpose of the e-mail?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To introduce a new owner",
                        "B": "To acknowledge receipt of an estimate",
                        "C": "To invite team members to a presentation",
                        "D": "To ask for additional work references"
                    },
                    correctAnswer: "B",
                    translation: "이메일의 한 가지 목적은?",
                    explanation: `첫 문장에서 견적서를 보내준 것에 대해 감사(Thank you for sending your estimate)하며 입찰 서류를 잘 받았음을 알리고 있으므로 (B)가 정답입니다.`
                },
                {
                    id: "p7-t6-q160",
                    questionNo: 160,
                    text: "When will Mr. Fonsman meet with Ms. Cho?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "On March 2",
                        "B": "On March 3",
                        "C": "On March 4",
                        "D": "On March 5"
                    },
                    correctAnswer: "B",
                    translation: "폰즈먼 씨는 언제 조 씨를 만날 예정인가?",
                    explanation: `이메일 날짜가 3월 2일(March 2)이고, 본문에서 이사와 이 건에 대해 '내일 아침(tomorrow morning)' 이야기하겠다고 했으므로, 만나는 날짜는 3월 3일입니다.`
                }
            ]
        },
        // Questions 161-163: Announcement
        {
            id: "p7-t6-set7",
            setType: "Single",
            questionRange: "161-163",
            passages: [
                {
                    id: "p7-t6-s1-p1",
                    contextType: "P2_OFFI",
                    docType: "NOTICE",
                    content: `City of Altamesa seeks election workers\n\nWho is qualified to be an election worker? Almost anyone, including homemakers and professionals, as well as those who are unemployed, self-employed, or retired.\n\nRequirements:\n• Available 6 A.M. to 1 P.M. or 1 P.M. to 8 P.M. on March 5, June 7, and November 1\n• Is not a politician and does not live with or work for a politician\n• Is 18 years of age or older\n• Is comfortable interacting with the public\n• Is organized and detail-oriented\n\nWorkers must attend a four-hour pre-election training workshop on March 4 and will be compensated based on their title:\nElection Assistant, $18/hour\nElection Clerk, $20/hour\nElection Chief, $22/hour\n\nFor details or to apply, visit www.altamesaelections.gov/apply.`,
                    translation: `알타메사 시에서 선거 사무원을 구합니다\n\n누가 선거 사무원이 될 자격이 있나요? 주부와 전문가를 포함하여 실업자, 자영업자, 퇴직자 등 거의 모든 사람이 가능합니다.\n\n요건:\n• 3월 5일, 6월 7일, 11월 1일에 오전 6시~오후 1시 또는 오후 1시~오후 8시 근무 가능자\n• 정치인이 아니어야 하며, 정치인과 함께 살거나 정치인을 위해 일하지 않아야 함\n• 18세 이상\n• 대중과 소통하는 데 거부감이 없음\n• 체계적이며 세심함\n\n사무원들은 3월 4일에 열리는 4시간의 선거 전 교육 워크숍에 참석해야 하며, 직함에 따라 보상을 받게 됩니다:\n선거 보조원, 시간당 18달러\n선거 사무원, 시간당 20달러\n선거 관리 위원장, 시간당 22달러\n\n자세한 정보나 지원을 원하시면 www.altamesaelections.gov/apply를 방문하십시오.`
                }
            ],
            questions: [
                {
                    id: "p7-t6-q161",
                    questionNo: 161,
                    text: "What information is included in the announcement?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Rates of pay",
                        "B": "Work site locations",
                        "C": "The application deadline",
                        "D": "The training workshop's start time"
                    },
                    correctAnswer: "A",
                    translation: "공고에 포함된 정보는?",
                    explanation: `직함에 따라 시간당 지급되는 보상 금액($18/hour 등)이 구체적으로 명시되어 있으므로 보수 비율인 (A)가 정답입니다.`
                },
                {
                    id: "p7-t6-q162",
                    questionNo: 162,
                    text: "What does the announcement suggest is a requirement for being hired?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Interest in politics",
                        "B": "A high school diploma",
                        "C": "A voter registration card",
                        "D": "Good communication skills"
                    },
                    correctAnswer: "D",
                    translation: "공고에서 채용 요건으로 제시하고 있는 것은?",
                    explanation: `요건(Requirements) 중 '대중과 소통하는 데 거부감이 없음(Is comfortable interacting with the public)'이라는 항목이 있으므로 좋은 의사소통 능력인 (D)가 정답입니다.`
                },
                {
                    id: "p7-t6-q163",
                    questionNo: 163,
                    text: "What is mentioned about the training workshop?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It is offered three times a year.",
                        "B": "It is led by an experienced election official.",
                        "C": "It is required for all election workers.",
                        "D": "It is available both online and in person."
                    },
                    correctAnswer: "C",
                    translation: "교육 워크숍에 대해 언급된 것은?",
                    explanation: `사무원들은 반드시 참석해야 한다(Workers must attend)고 했으므로 모든 선거 사무원에게 필수 사항임을 알 수 있습니다.`
                }
            ]
        },
        // Questions 164-167: E-mail
        {
            id: "p7-t6-set8",
            setType: "Single",
            questionRange: "164-167",
            passages: [
                {
                    id: "p7-t6-s8-p1",
                    contextType: "P1_CORR",
                    docType: "EMAIL",
                    content: `*E-mail*\n\nTo: Jihyang Lee <jlee@myemail.com>\nFrom: Robert Wang <rwang@frontstreetbank.com>\nDate: April 7\nSubject: Is VIS for you?\n\nDear Mr. Lee,\n\nYou are now able to enroll in Front Street Bank's new Voice Identification System (VIS). VIS is a fast, convenient, and secure way to access and control your bank accounts by phone. — [1] —. For example, you can make a payment on a Front Street Bank loan by saying "loan payment." You can check your credit-card transactions by saying "recent transactions." You can even transfer money between accounts by saying "transfer." Discover all the ways VIS can simplify your banking life at www.frontstreetbank.com/VIS. — [2] —.\n\nYour voice identification is stored securely by Front Street Bank and can be used only with Front Street Bank. Call 615-555-0189 to set up VIS for your accounts. — [3] —. If in the future you no longer wish to use VIS to access your account, simply call to have one of our customer-service representatives delete your identification file.\n\n— [4] —. Thank you for being a valued Front Street Bank customer.\n\nSincerely,\n\nRobert Wang, Branch Manager`,
                    translation: `*이메일*\n\n수신: 이지형 <jlee@myemail.com>\n발신: 로버트 왕 <rwang@frontstreetbank.com>\n날짜: 4월 7일\n제목: VIS는 당신을 위한 시스템인가요?\n\n이 씨께,\n\n귀하께서는 이제 프런트 스트리트 은행의 새로운 음성 인식 시스템(VIS)에 등록하실 수 있습니다. VIS는 전화로 은행 계좌에 접속하고 제어할 수 있는 빠르고 편리하며 안전한 방법입니다. — [1] —. 예를 들어, "대출 상환"이라고 말하면 프런트 스트리트 은행의 대출금을 납부할 수 있습니다. "최근 거래 정보"라고 말하면 신용카드 거래 내역을 확인할 수 있습니다. 심지어 "이체"라고 말하여 계좌 간에 돈을 옮길 수도 있습니다. www.frontstreetbank.com/VIS에서 VIS가 귀하의 은행 업무를 얼마나 간소화할 수 있는지 모든 방법을 확인해 보십시오. — [2] —.\n\n귀하의 음성 인식 정보는 프런트 스트리트 은행에 의해 안전하게 저장되며 오직 프런트 스트리트 은행에서만 사용할 수 있습니다. 귀하의 계좌에 VIS를 설정하시려면 615-555-0189로 전화하십시오. — [3] —. 나중에 더 이상 VIS를 통해 계좌에 접속하고 싶지 않으시면, 고객 서비스 담당자에게 전화 한 통으로 귀하의 식별 파일을 삭제해달라고 하시면 됩니다.\n\n— [4] —. 프런트 스트리트 은행의 소중한 고객이 되어 주셔서 감사합니다.\n\n진심을 담아,\n\n로버트 왕, 지점장`
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
                        "C": "To confirm approval of a loan",
                        "D": "To promote a new service"
                    },
                    correctAnswer: "D",
                    translation: "이메일의 목적은?",
                    explanation: `새로운 음성 인식 시스템(VIS)을 소개하고 등록을 권유하고 있으므로 새로운 서비스를 홍보하는 (D)가 정답입니다.`
                },
                {
                    id: "p7-t6-q165",
                    questionNo: 165,
                    text: "What is indicated about VIS?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It provides voice access to accounts.",
                        "B": "It can be used at various financial institutions.",
                        "C": "It requires customers to pay a fee.",
                        "D": "It is available only during designated hours."
                    },
                    correctAnswer: "A",
                    explanation: `VIS를 통해 "loan payment", "recent transactions" 등 말로 계좌를 조절할 수 있다고 했으므로 (A) 계좌에 대한 음성 접속을 제공한다는 것이 정답입니다.`,
                    translation: "VIS에 대해 명시된 것은?"
                },
                {
                    id: "p7-t6-q166",
                    questionNo: 166,
                    text: "What should a customer do to cancel VIS?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Visit a local bank branch",
                        "B": "Make a telephone call",
                        "C": "Complete an online form",
                        "D": "Send an e-mail to customer service"
                    },
                    correctAnswer: "B",
                    translation: "고객이 VIS를 취소하려면 어떻게 해야 하는가?",
                    explanation: `나중에 이 서비스를 원치 않으면 '단순히 전화하여(simply call)' 파일을 삭제해달라고 요청하라고 했으므로 (B)가 정답입니다.`
                },
                {
                    id: "p7-t6-q167",
                    questionNo: 167,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"You can perform numerous specific tasks.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "A",
                    translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"당신은 수많은 구체적인 업무를 수행할 수 있습니다.\"",
                    explanation: `주어진 문장은 많은 업무를 수행할 수 있다는 개괄적인 문장입니다. [1] 뒤에 나오는 문장들이 "For example(예를 들어)"로 시작하며 대출 상환, 거래 기록 확인 등 구체적인 업무 예시를 나열하고 있으므로, 예시 앞에 오는 [1]이 정답입니다.`
                }
            ]
        },
        // Questions 168-171: Advertisement
        {
            id: "p7-t6-set9",
            setType: "Single",
            questionRange: "168-171",
            passages: [
                {
                    id: "p7-t6-s9-p1",
                    contextType: "P4_MARK",
                    docType: "ADVERTISEMENT",
                    content: `Thumbnail Publishing Ltd.\n\nFour new titles in the Enterprise series have just been released. Buy one, get one 50 percent off when you purchase from our Web site by November 30 (excludes shipping). Order your copies today!\n\nMaestro by Christine Menon\nA biography of famous executive Haruto Yamada, with insight into how his career influenced business governance. Paperback €14.99\n\nWorking Under Moonbeams by Chang-Ho Jin\nCommerce in twentieth-century Korea as illuminated through interviews with former trade company employees. Hardcover €22.99, Audiobook €8.99\n\nThe Connections Unseen by Mai Quang Vinh\nA collection of transcribed lectures and archival photos from Gloria de Leon's 40-year career as a professor of business administration. Hardcover €25.99\n\nFlashback by Jack Olivier\nA former Australian trade commissioner recalls the highs and lows of his diplomatic career in this engaging memoir. Paperback €14.99, Downloadable e-book €9.99`,
                    translation: `썸네일 출판사\n\n엔터프라이즈 시리즈의 새로운 4종의 도서가 방금 출간되었습니다. 11월 30일까지 저희 웹사이트에서 구매하시면 하나 구매 시 두 번째 제품은 50% 할인 혜택을 드립니다 (배송비 제외). 오늘 주문하세요!\n\n마에스트로(저자: 크리스틴 메논)\n유명 기업 간부 하루토 야마다의 전기로, 그의 경력이 기업 지배구조에 어떤 영향을 미쳤는지에 대한 통찰이 담겨 있습니다. 페이퍼백 €14.99\n\n달빛 아래 일하기(저자: 장호 진)\n전직 무역회사 직원들과의 인터뷰를 통해 조명한 20세기 한국의 상업. 양장본 €22.99, 오디오북 €8.99\n\n보이지 않는 연결고리(저자: 마이 꽝 빈)\n경영학 교수로서 글로리아 드 레온의 40년 경력을 담은 필사 강의록과 기록 사진 전집. 양장본 €25.99\n\n플래시백(저자: 잭 올리비에)\n전직 호주 무역 사절단이 자신의 외교 경력의 우여곡절을 회상하는 매력적인 회고록. 페이퍼백 €14.99, 다운로드 가능한 전자책 €9.99`
                }
            ],
            questions: [
                {
                    id: "p7-t6-q168",
                    questionNo: 168,
                    text: "What is the company offering to customers?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "A coupon for a specific author's books",
                        "B": "A discount for ordering two books online",
                        "C": "A reduced price for shipping",
                        "D": "A free copy of the publisher's catalog"
                    },
                    correctAnswer: "B",
                    translation: "회사가 고객에게 제공하고 있는 것은?",
                    explanation: `첫 단락에서 '하나를 사면 두 번째 제품은 50% 할인(Buy one, get one 50 percent off)'을 웹사이트 주문 시 제공한다고 했으므로 두 권 주문 시 할인을 제공하는 (B)가 정답입니다.`
                },
                {
                    id: "p7-t6-q169",
                    questionNo: 169,
                    text: "Who is Mr. Yamada?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "A government agent",
                        "B": "A career counselor",
                        "C": "A biography writer",
                        "D": "A company leader"
                    },
                    correctAnswer: "D",
                    translation: "야마다 씨는 누구인가?",
                    explanation: `첫 번째 책 설명에서 그를 '유명한 임원/간부(famous executive)'라고 소개하고 있으므로 기업의 리더인 (D)가 정답입니다.`
                },
                {
                    id: "p7-t6-q170",
                    questionNo: 170,
                    text: "What feature is shared by all of the books described in the advertisement?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "They were written by the same author.",
                        "B": "They can be read in digital formats.",
                        "C": "They focus on business topics.",
                        "D": "They were translated into several languages."
                    },
                    correctAnswer: "C",
                    translation: "광고에 설명된 모든 도서의 공통점은?",
                    explanation: `네 권의 도서가 모두 경영인, 상업(commerce), 경영학(business administration), 무역(trade) 등을 다루고 있으므로 비즈니스 관련 주제를 다루고 있다는 (C)가 정답입니다.`
                },
                {
                    id: "p7-t6-q171",
                    questionNo: 171,
                    text: "What book includes historic images?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Maestro",
                        "B": "Working Under Moonbeams",
                        "C": "The Connections Unseen",
                        "D": "Flashback"
                    },
                    correctAnswer: "C",
                    translation: "역사적 이미지를 포함하고 있는 책은?",
                    explanation: `세 번째 책인 'The Connections Unseen'의 설명 부분에 '기록 사진(archival photos)'이 포함되어 있다고 명시되어 있습니다.`
                }
            ]
        },
        // Questions 172-175: Text-message chain
        {
            id: "p7-t6-set10",
            setType: "Single",
            questionRange: "172-175",
            passages: [
                {
                    id: "p7-t6-s10-p1",
                    contextType: "P7_CONV",
                    docType: "CHAT_MESSAGE",
                    content: `Priyanka Kapoor (9:41 A.M.)\nWe need to talk about the upcoming family physicians conference in London. Where do we stand?\n\nAlonso Gonzalez (9:44 A.M.)\nI've already purchased airline tickets for all of us.\n\nPriyanka Kapoor (9:47 A.M.)\nGreat. Scott Harris will arrange our shuttle from the London airport to the conference venue. Will our mobile phones be functional outside of the Wi-Fi zones?\n\nAlonso Gonzalez (9:50 A.M.)\nI've researched our mobile phone provider's international plan. It offers the ability to call and text but provides limited data options with slow download speeds.\n\nBrian Kim (9:53 A.M.)\nLet's buy international SIM cards before we leave. We can get the prepaid cards with high-speed data and unlimited calling and texting. We won't have to worry about being connected to Wi-Fi.\n\nPriyanka Kapoor (9:57 A.M.)\nThat will solve the problem.\n\nAlonso Gonzalez (9:57 A.M.)\nGood idea, Brian. Thanks. Now let's discuss meeting up for our meals.\n\nPriyanka Kapoor (9:59 A.M.)\nEach day of the conference begins with a continental breakfast in the lobby. Let's meet there in the morning. I know of a great place for dinner, so let's plan on 6:00 P.M. the first evening. We'll decide about the other meals later.`,
                    translation: `프리얀카 카푸르 (오전 9:41) 우리는 곧 런던에서 열릴 가정의학 전문의 학회에 대해 이야기해야 합니다. 상황이 어떤가요?\n\n알폰소 곤잘레스 (오전 9:44) 제가 이미 우리 모두를 위한 항공권을 구입했습니다.\n\n프리얀카 카푸르 (오전 9:47) 좋습니다. 스캇 해리스가 런던 공항에서 학회 장소까지의 셔틀을 마련해 줄 것입니다. 와이파이 구역 밖에서도 우리 휴대폰이 작동할까요?\n\n알폰소 곤잘레스 (오전 9:50) 제가 휴대폰 통신사의 국제 요금제를 알아봤습니다. 전화와 문자는 가능하지만 데이터 옵션이 제한적이고 다운로드 속도가 느립니다.\n\n브라이언 킴 (오전 9:53) 우리 떠나기 전에 해외용 SIM 카드를 삽입합시다. 고속 데이터와 무제한 통화 및 문자를 제공하는 선불 카드를 살 수 있습니다. 이제 와이파이 연결 여부를 걱정하지 않아도 될 거예요.\n\n프리얀카 카푸르 (오전 9:57) 그게 문제를 해결해 주겠군요.\n\n알폰소 곤잘레스 (오전 9:57) 좋은 생각이에요, 브라이언. 고마워요. 이제 식사를 위해 만나는 것에 대해 이야기해 봅시다.\n\n프리얀카 카푸르 (오전 9:59) 학회 기간 매일 로비에서 가벼운 아침 식사가 제공되며 학회가 시작됩니다. 아침에 거기서 만납시다. 제가 근사한 저녁 식사 장소를 알고 있으니 첫날 밤 오후 6시에 거기서 만나는 것으로 계획을 세웁시다. 다른 식사 계획은 나중에 정하죠.`
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
                    explanation: `첫 메시지에서 가정의학 전문의 학회(family physicians conference)에 대해 이야기하고 있으므로, 이들은 의료 분야에 종사하는 전문가들임을 알 수 있습니다.`
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
                    explanation: `런던 학회 관련하여 준비 상황이 어떠한지(update)를 묻는 표현이므로 (A)가 정답입니다.`
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
                    explanation: `알폰소 곤잘레스가 '우리 모두를 위한(for all of us)' 항공권을 샀다고 했고, 같이 아침 식사와 저녁 식사를 할 계획을 세우는 것으로 보아 함께 여행할 것임을 알 수 있습니다.`
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
                    translation: "킴 씨가 SIM 카드를 구매하자고 제안한 이유는?",
                    explanation: `데이터 전용 SIM 카드를 쓰면 '와이파이 연결에 대해 걱정할 필요가 없기 때문(won't have to worry about being connected to Wi-Fi)'이라고 명시되어 있습니다.`
                }
            ]
        }
    ]
};
