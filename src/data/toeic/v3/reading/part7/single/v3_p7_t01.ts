import { Part7Test } from './types';

export const test1Data: Part7Test = {
    testId: 1,
    vol: 3,
    title: "Test 1",
    sets: [
        // Questions 147-148: Web Page (Announcement)
        {
            id: "v3-p7-t1-set1",
            setType: "Single",
            questionRange: "147-148",
            passages: [
                {
                    id: "v3-p7-t1-s1-p1",
                    contextType: "P2_OFFI",
                    docType: "WEBPAGE",
                    title: "Special Announcement by Geoff Clifford, President of Moon Glow Airways",
                    content: `As many of you are aware, there was a problem with Pelman Technology, the system that handles our airline reservations. It's been a rough week, but the good news is that it has been repaired, and we are re-setting our system. However, Moon Glow passengers may still face delays for a day or two. This most likely will include longer lines at airports. We have added more on-site customer service representatives at airports in all of our destination cities to assist customers with their flights and information. We appreciate your understanding and patience.`,
                    translation: `문글로우 항공 제프 클리포드 회장의 특별 공지\n\n여러분 다수가 알고 계신 대로, 저희 항공사 예약 처리 시스템인 펠먼 테크놀로지에 문제가 있었습니다. 이번 시스템 정지는 여러 항공사에 영향을 미쳤습니다. 힘든 한 주였지만 수리가 끝났고 시스템을 재설정하고 있다는 좋은 소식이 있습니다. 그러나 문글로우 승객들은 하루 이틀간 더 지연을 겪게 될 수도 있습니다. 여기에는 아마 공항에서의 대기열이 길어진 것도 포함될 것입니다. 저희가 취항하는 모든 도시의 공항에 고객의 항공편과 정보에 관해 도움을 드릴 현장 고객 서비스 담당자들을 추가로 투입했습니다. 너그러이 양해해 주시면 감사하겠습니다.`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t1-q147",
                    questionNo: 147,
                    text: "What is the purpose of the announcement?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To report on airport renovations",
                        "B": "To give an update on a technical problem",
                        "C": "To introduce a new reservation system",
                        "D": "To advertise airline routes to some new cities"
                    },
                    correctAnswer: "B",
                    translation: "공지의 목적은?",
                    explanation: "초반부에서 항공사 예약 처리 시스템에 문제가 있었다(there was a problem with ~ the system that handles our airline reservations)고 한 후, 처리 상황에 대한 설명을 이어가고 있으므로 (B)가 정답입니다."
                },
                {
                    id: "v3-p7-t1-q148",
                    questionNo: 148,
                    text: "According to Mr. Clifford, what has the airline temporarily increased?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "The number of flights available",
                        "B": "Dining options on flights",
                        "C": "Assistance for customers at airports",
                        "D": "Prices for international flights"
                    },
                    correctAnswer: "C",
                    translation: "클리포드 씨에 따르면, 항공사는 임시로 무엇을 증가시켰는가?",
                    explanation: "후반부를 보면 문글로우 항공사가 취항하는 모든 도시의 공항에 고객의 항공편과 정보에 관해 도움을 줄 현장 고객 서비스 담당자들을 추가로 투입했다(We have added more on-site customer service representatives ~ to assist customers with their flights and information)고 되어 있으므로 (C)가 정답입니다."
                }
            ]
        },
        // Questions 149-150: Job Advertisement
        {
            id: "v3-p7-t1-set2",
            setType: "Single",
            questionRange: "149-150",
            passages: [
                {
                    id: "v3-p7-t1-s2-p1",
                    contextType: "P4_MARK",
                    docType: "ADVERTISEMENT",
                    title: "Video Captioners—Work from Home",
                    content: `Kiesel Video is seeking detail-oriented people to use our software to add text captions to a wide variety of video material, such as television programs, movies, and university lectures. We will provide free online training. Successful applicants must possess strong language skills and have a computer, a headset, and high-speed Internet access.\n\nThe position features:\n• Flexible hours—you work as much or as little as you want.\n• Choice of projects—we have work in many types of content.\n• Good pay—our captioners earn $350 to $1,100 a week, depending on the assignment.\n\nApply today at www.kieselvideo.com/jobs`,
                    translation: `동영상 자막 작업자 - 재택근무\n\n카셀 비디오(Kiesel Video)는 저희 소프트웨어를 사용해 TV 프로그램, 영화, 대학교 강의 등 광범위한 동영상 자료에 자막을 삽입할 꼼꼼한 분을 찾고 있습니다. 당사에서 무료 온라인 교육을 제공해 드립니다. 선발될 지원자는 뛰어난 언어 구사력과 컴퓨터, 헤드셋, 초고속 인터넷 등을 갖추고 있어야 합니다.\n\n해당 직책에는 다음 사항이 포함됩니다.\n• 유연한 근무시간 - 원하는 만큼 일하실 수 있습니다.\n• 프로젝트 선택권 - 많은 유형의 콘텐츠 작업이 있습니다.\n• 뛰어난 보수 - 저희 자막 작업자들은 과업에 따라 주당 350달러에서 1,100달러까지 받습니다.\n\n오늘 www.kieselvideo.com/jobs에서 지원하세요.`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t1-q149",
                    questionNo: 149,
                    text: "What are applicants for this position required to have?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Experience in video production",
                        "B": "Certain pieces of equipment",
                        "C": "A university degree in language studies",
                        "D": "An office with a reception area"
                    },
                    correctAnswer: "B",
                    translation: "지원자들이 갖추고 있어야 하는 것은?",
                    explanation: "본문에서 지원자들이 반드시 가지고 있어야 하는 것들로 컴퓨터, 헤드셋, 초고속 인터넷(Successful applicants must possess ... and have a computer, a headset, and high-speed Internet access)을 언급하고 있으므로 (B)가 정답입니다."
                },
                {
                    id: "v3-p7-t1-q150",
                    questionNo: 150,
                    text: "What is true about the job?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It is a full-time position.",
                        "B": "It pays a fixed salary.",
                        "C": "It involves some foreign travel.",
                        "D": "It offers a choice of assignments."
                    },
                    correctAnswer: "D",
                    translation: "이 일자리에 대해 사실인 것은?",
                    explanation: "본문의 세부 사항(The position features) 중 두 번째 항목인 'Choice of projects—we have work in many types of content'를 통해 지원자들이 다양한 유형의 업무 중에서 선택할 수 있음을 알 수 있으므로 (D)가 정답입니다."
                }
            ]
        },
        // Questions 151-152: Software Testing Report
        {
            id: "v3-p7-t1-set3",
            setType: "Single",
            questionRange: "151-152",
            passages: [
                {
                    id: "v3-p7-t1-s3-p1",
                    contextType: "P6_RULE",
                    docType: "REPORT",
                    title: "SOFTWARE TESTING REPORT",
                    content: `February 1\n\nVersion of Software Program: Konserted 2.5\nTesting Dates: January 10-12\nNumber of Participants: 8\n\nSoftware Testing Overview: Participants were asked to complete a series of tasks testing the functionality of the revised Konserted interface. In task number 1, participants searched for a concert in a designated area. In task number 2, participants searched for new friends on the site. In task number 3, participants invited friends to a concert. In task number 4, participants posted concert reviews, photos, and videos.\n\nInitial Findings: Task number 3 proved the most challenging, with three participants unable to complete it in under two minutes. A potential cause for this difficulty may be the choice of icons in the menu bar. Clearer, more intuitive icons could make this task easier to complete for participants.`,
                    translation: `2월 1일\n\n소프트웨어 테스트 보고서\n\n소프트웨어 프로그램 버전: 콘서티드 2.5\n테스트 일자: 1월 10~12일\n참가자 수: 8명\n\n소프트웨어 테스트 개요: 참가자들에게 개정된 콘서티드 인터페이스의 기능을 시험하는 일련의 과제를 완수하도록 요청했습니다. 1번 과제에서 참가자들은 지정된 지역 내에서 콘서트를 검색했습니다. 2번 과제에서 참가자들은 현장에서 새로운 친구들을 검색했습니다. 3번 과제에서 참가자들은 친구들을 콘서트로 초대했습니다. 4번 과제에서 참가자들은 콘서트 후기, 사진, 동영상을 게시물로 올렸습니다.\n\n초기 결과: 3번 과제는 3명의 참가자가 2분 이내에 과제를 완료하지 못하면서 가장 어려운 과제로 드러났습니다. 이러한 어려움에 대한 잠재적 원인은 메뉴 바의 아이콘 선택일 수 있습니다. 더 명확하고 직관적인 아이콘은 참가자들이 해당 과제를 더 쉽게 완수할 수 있도록 해 줄 것입니다.`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t1-q151",
                    questionNo: 151,
                    text: "What is true about the software testing?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It included multiple versions of Konserted.",
                        "B": "It was done over several days.",
                        "C": "It required participants to complete a survey.",
                        "D": "It took place at a series of concerts."
                    },
                    correctAnswer: "B",
                    translation: "소프트웨어 테스트에 대해 맞는 것은?",
                    explanation: "상단의 테스트 일자(Testing Dates: January 10-12)를 보면 며칠에 걸쳐 진행되었음을 알 수 있습니다. 따라서 (B)가 정답입니다."
                },
                {
                    id: "v3-p7-t1-q152",
                    questionNo: 152,
                    text: "What action was difficult for users to complete?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Searching for an event",
                        "B": "Searching for friends",
                        "C": "Inviting friends to a performance",
                        "D": "Posting reviews to a Web site"
                    },
                    correctAnswer: "C",
                    translation: "사용자들은 어떤 활동을 완료하기가 어려웠는가?",
                    explanation: "초기 결과(Initial Findings)에서 3번 과제가 가장 어려운 것으로 드러났다(Task number 3 proved the most challenging)고 했는데, 소프트웨어 테스트 개요(Software Testing Overview)를 보면 3번 과제는 친구들을 콘서트로 초대하는 것(In task number 3, participants invited friends to a concert)으로 설명되어 있습니다. 따라서 (C)가 정답입니다."
                }
            ]
        },
        // Questions 153-155: E-mail (Invitation)
        {
            id: "v3-p7-t1-set4",
            setType: "Single",
            questionRange: "153-155",
            passages: [
                {
                    id: "v3-p7-t1-s4-p1",
                    contextType: "P1_CORR",
                    docType: "EMAIL",
                    title: "*E-mail*",
                    content: `To: catiyeh@mymailroom.au\nFrom: achen@mutamark.au\nDate: 1 July\nSubject: Mutamark conference\n\nDear Ms. Atiyeh,\n\nTo follow up on our phone conversation earlier today, I would like to extend to you a formal written invitation to speak at the eighth annual Mutamark conference, scheduled to take place this year from 17 to 20 September in Zagros. Because you drew a sizeable crowd when you appeared at the conference in the past, we will be making special arrangements for your visit this time. The Blue Room at the Debeljak Hotel holds only 120, so this year we are also booking the Koros Hall, which has a capacity of 270. We can offer you a 40-to-50-minute slot on the last day of the conference, when attendance should be at its peak. Please e-mail me to confirm your acceptance and to let me know more about your audiovisual requirements. We can provide overhead projection for still images if you will be using them again.\n\nVery best regards,\n\nAlex Chen, Conference Planning\nMutamark Headquarters, Melbourne`,
                    translation: `수신: catiyeh@mymailroom.au\n발신: achen@mutamark.au\n날짜: 7월 1일\n제목: 무타마크 회의\n\n아티예 씨께,\n\n오늘 아까 전화로 나눴던 대화에 이어, 올해 9월 17일부터 20일까지 자그로스에서 열릴 제8회 무타마크 연례회의에서 연설해 주십사 공식 초청장을 보내 드리고자 합니다. 예전에 회의에 나와 주셨을 때 상당 수의 관객을 끌었기 때문에 이번 방문을 위해 특별 준비를 하려고 합니다. 드벨자크 호텔 블루룸은 120명만 수용할 수 있어서 올해는 수용 인원이 270명인 코로스홀도 예약할 예정입니다. 귀하께 회의의 마지막 날 40-50분 정도의 시간을 드릴 수 있습니다. 이 날은 참석률이 가장 높을 겁니다. 저에게 이메일로 수락 여부를 확정해 주시고 시청각 관련 필요 사항에 대해 알려주시기 바랍니다. 스틸 이미지를 다시 이용하실 경우 저희가 오버헤드 프로젝션을 제공해 드릴 수 있습니다.\n\n알렉스 첸, 회의 기획 담당\n무타마크 본사, 멜버른`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t1-q153",
                    questionNo: 153,
                    text: "What is indicated about Ms. Atiyeh's previous appearance at Mutamark?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It was very well attended.",
                        "B": "It was moved to a larger venue.",
                        "C": "It featured a musical performance.",
                        "D": "It took place at the Koros Hall."
                    },
                    correctAnswer: "A",
                    translation: "아티예 씨가 예전에 무타마크에 참석했던 일에 대해 알 수 있는 것은?",
                    explanation: "초반부에서 아티예 씨가 예전에 회의에 나왔을 때 상당한 수의 관객을 끌었다(Because you drew a sizeable crowd when you appeared at the conference in the past)고 했으므로, (A)가 정답입니다."
                },
                {
                    id: "v3-p7-t1-q154",
                    questionNo: 154,
                    text: "How many people can the Koros Hall accommodate?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "40",
                        "B": "50",
                        "C": "120",
                        "D": "270"
                    },
                    correctAnswer: "D",
                    translation: "코로스홀은 몇 명을 수용할 수 있는가?",
                    explanation: "중반부에서 코로스홀의 수용 인원이 270명(the Koros Hall, which has a capacity of 270)이라고 했으므로, (D)가 정답입니다."
                },
                {
                    id: "v3-p7-t1-q155",
                    questionNo: 155,
                    text: "When will Ms. Atiyeh most likely appear at the Mutamark conference?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "On September 17",
                        "B": "On September 18",
                        "C": "On September 19",
                        "D": "On September 20"
                    },
                    correctAnswer: "D",
                    translation: "아티예 씨는 언제 무타마크 회의에 등장하겠는가?",
                    explanation: "중반부에서 아티예 씨에게 회의 마지막 날 40-50분 정도의 시간을 줄 수 있다(We can offer you a 40-to-50-minute slot on the last day of the conference)고 했는데, 초반부를 보면 회의가 9월 17일부터 20일까지 열릴 예정(scheduled to take place this year from 17 to 20 September)이라고 쓰여 있습니다. 따라서 아티예 씨가 마지막 날인 9월 20일 회의에서 연설할 것이라고 추론할 수 있으므로, (D)가 정답입니다."
                }
            ]
        },
        // Questions 156-158: Article (Monorail)
        {
            id: "v3-p7-t1-set5",
            setType: "Single",
            questionRange: "156-158",
            passages: [
                {
                    id: "v3-p7-t1-s5-p1",
                    contextType: "P3_MEDI",
                    docType: "ARTICLE",
                    title: "Monorail Coming to Sudbury",
                    content: `(4 Feb.)—Ottawa-based Saenger, Inc., has been selected by the city of Sudbury to build a monorail system that will connect the city's commercial district to the airport. — [1] —. Funding for the system is drawn from a combination of public agencies and private investors. — [2] —. Ticket sales for the monorail will also provide a new source of revenue for the city. — [3] —. Construction is slated to begin in early June and is expected to be completed within four years. — [4] —.`,
                    translation: `서드베리에 모노레일이 온다\n\n(2월 4일) — 오타와에 본사를 둔 샌저 주식회사가 서드베리 시의 상업지구와 공항을 연결할 모노레일 시스템 건설 업체로 선정됐다. 길을 따라, 노선은 9개의 정류장에서 정차할 예정이다. 시스템을 위한 자금은 공공기관과 개인 투자자들의 합작으로 조성된다. 모노레일 탑승권 판매도 시에 새로운 수입원을 제공할 것이다. 공사는 6월 초에 시작될 예정이며 4년 이내에 완료될 것으로 예상된다.`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t1-q156",
                    questionNo: 156,
                    text: "What kind of business most likely is Saenger, Inc.?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "A construction firm",
                        "B": "A real estate agency",
                        "C": "A cargo-handling company",
                        "D": "A financial services provider"
                    },
                    correctAnswer: "A",
                    translation: "샌저 주식회사는 어떤 종류의 업체이겠는가?",
                    explanation: "초반부에서 샌저 주식회사가 모노레일 시스템을 건설할 업체로 선정됐다(Saenger, Inc., has been selected ~ to build a monorail system)고 했으므로, 건설회사임을 추론할 수 있습니다. 따라서 (A)가 정답입니다."
                },
                {
                    id: "v3-p7-t1-q157",
                    questionNo: 157,
                    text: "What is indicated about the monorail?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It needs more funding from investors.",
                        "B": "It will take years to finish.",
                        "C": "It was proposed by airport officials.",
                        "D": "It offers discounted tickets to city residents."
                    },
                    correctAnswer: "B",
                    translation: "모노레일에 대해 알 수 있는 것은?",
                    explanation: "후반부에서 공사는 4년 이내에 완료될 것으로 예상된다(Construction ~ is expected to be completed within four years)고 했으므로, (B)가 정답입니다."
                },
                {
                    id: "v3-p7-t1-q158",
                    questionNo: 158,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Along the way, the line will stop at nine stations.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "A",
                    translation: "[1], [2], [3], [4]로 표시된 곳 중에서 다음 문장이 가장 적합한 곳은?\n\"길을 따라, 노선은 9개의 정류장에서 정차할 예정이다.\"",
                    explanation: "주어인 노선(the line)이 가리키는 대상이 앞에서 먼저 언급되어야 합니다. [1] 앞에서 시의 상업지구와 공항을 연결할 모노레일 시스템 건설(to build a monorail system that will connect the city's commercial district to the airport) 소식을 전하며 우회적으로 노선을 밝혔으므로, (A)가 정답입니다."
                }
            ]
        },
        // Questions 159-160: Text Message Chain
        {
            id: "v3-p7-t1-set6",
            setType: "Single",
            questionRange: "159-160",
            passages: [
                {
                    id: "v3-p7-t1-s6-p1",
                    contextType: "P7_CONV",
                    docType: "TEXT_MESSAGE",
                    content: `Dennis Beck (2:52 P.M.)\nHi, Corinne. I just want to be sure that you saw the document I sent you. It's the combined market analysis and advertising proposal for the Keyes Elegant Home group. We're preparing it for tomorrow's presentation to the client.\nCorinne McCall (2:53 P.M.)\nYes. I have just downloaded it. Is this about their new line of tableware?\nDennis Beck (2:54 P.M.)\nYes. I'd like you to read it over.\nCorinne McCall (3:01 P.M.)\nNo problem. Would you like me to revise anything, or do you want me to just check that it is all clear?\nDennis Beck (3:02 P.M.)\nFeel free to add information to the section "Advertising Strategies," since that is your area of expertise.\nCorinne McCall (3:03 P.M.)\nWill do. I'll get it back to you before the end of the day.`,
                    translation: `데니스 벡 (오후 2시 52분)\n안녕하세요, 코린. 제가 보낸 문서를 보셨는지 확인하고 싶어서요. 키스 엘리건트 홈 그룹을 위한 시장 분석과 광고 제안서가 결합된 문서입니다. 내일 고객 발표를 위해 준비하고 있거든요.\n코린 맥콜 (오후 2시 53분)\n네. 방금 다운로드했어요. 그들의 새로운 식기류 제품에 관한 것인가요?\n데니스 벡 (오후 2시 54분)\n네. 읽어봐 주셨으면 합니다.\n코린 맥콜 (오후 3시 1분)\n문제 없어요. 제가 수정했으면 하세요, 아니면 모두 명확한지 확인만 했으면 하세요?\n데니스 벡 (오후 3시 2분)\n"광고 전략" 부분은 당신 전문 분야이니 자유롭게 정보를 추가해 주세요.\n코린 맥콜 (오후 3시 3분)\n그럴게요. 오늘 퇴근 시간 전까지 돌려드릴게요.`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t1-q159",
                    questionNo: 159,
                    text: "At 3:01 P.M., what does Ms. McCall most likely mean when she writes, \"No problem\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "She did not have any issues logging on to her computer.",
                        "B": "She does not think a document has errors.",
                        "C": "She is willing to review a document.",
                        "D": "She has time to meet representatives from Keyes Elegant Home."
                    },
                    correctAnswer: "C",
                    translation: "오후 3시 1분에 맥콜 씨가 \"문제 없어요\"라고 쓸 때, 그 의도는 무엇인가?",
                    explanation: "벡 씨가 오후 2시 54분 메시지에서 자신이 보낸 문서를 읽어봐 주면 좋겠다(I'd like you to read it over)며 도움을 요청하자, 이에 대해 문제되지 않는다고 응답한 것입니다. 즉, 벡 씨의 문서 검토 요청을 수락한다는 의미이므로, (C)가 정답입니다."
                },
                {
                    id: "v3-p7-t1-q160",
                    questionNo: 160,
                    text: "What type of work does Ms. McCall most likely do?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "Marketing",
                        "B": "Accounting",
                        "C": "Legal consulting",
                        "D": "Information technology services"
                    },
                    correctAnswer: "A",
                    translation: "맥콜 씨는 어떤 종류의 일을 하겠는가?",
                    explanation: "벡 씨가 오후 3시 2분 메시지에서 광고 전략(Advertising Strategies)이 맥콜 씨의 전문 분야(that is your area of expertise)임을 언급했으므로, (A)가 정답입니다."
                }
            ]
        },
        // Questions 161-164: E-mail (Craft Fair)
        {
            id: "v3-p7-t1-set7",
            setType: "Single",
            questionRange: "161-164",
            passages: [
                {
                    id: "v3-p7-t1-s7-p1",
                    contextType: "P4_MARK",
                    docType: "EMAIL",
                    title: "*E-mail*",
                    content: `To: Mara Renaldo <mrenaldo@viyamail.com>\nFrom: Lisa Yang <lyang@staffordsvillefair.org>\nDate: May 28\nSubject: RE: Staffordsville Craft Fair\n\nDear Ms. Renaldo,\n\nThank you for your interest in selling your handcrafted items at the annual Staffordsville Craft Fair. Please note that all applicants must submit a $25 application fee, whether or not they want to share a space with another applicant. Moreover, all applicants must submit a minimum of four photographs of their work in order to be considered as a vendor. — [1] —.\n\nIn addition to photographs, we ask that you submit a rough sketch showing how you would display your work. Since you propose to share a space with a friend, local potter Julia Berens, it would be helpful if your sketch could indicate how you are planning to use the space jointly. — [2] —.\n\nAlso, because we hold the fair rain or shine, all vendors must supply their own tenting to protect themselves and their wares from the possibility of rain. — [3] —.\n\nFinally, please be aware that every year we receive far more applications from jewelry makers than we can accept. We hope that you will not be too discouraged if your work is not accepted this year, as you are applying for the first time. — [4] —.\n\nThanks again, and best of luck with your application,\n\nLisa Yang`,
                    translation: `수신: 마라 레날도 (mrenaldo@viyamail.com)\n발신: 리사 양 (lyang@staffordsvillefair.org)\n날짜: 5월 28일\n제목: 회신: 스태포즈빌 공예박람회\n\n레날도 씨께,\n\n연례 스태포즈빌 공예박람회에서 핸드메이드 물품을 판매하는 것에 관심을 가져주셔서 감사합니다. 다른 신청자와 공간을 공유하고 싶은지 여부에 관계없이 모든 신청자는 25달러의 신청비를 제출해야 합니다. 또한 판매자로 고려되기 위해서는 모든 신청자가 자신의 작품 사진을 최소 4장 제출해야 합니다. — [1] —.\n\n사진 외에도 작품을 어떻게 전시할지 보여주는 대략적인 스케치를 제출해 주시기 바랍니다. 귀하께서 친구인 지역 도예가 줄리아 베렌스와 공간을 공유하겠다고 제안하셨으므로, 귀하의 스케치가 공간을 어떻게 공동으로 사용할 계획인지 보여줄 수 있다면 도움이 될 것입니다. — [2] —.\n\n또한, 비가 오나 눈이 오나 박람회를 개최하기 때문에 모든 판매자는 우천 시 자신과 물건을 보호하기 위해 자체 천막을 준비해야 합니다. — [3] —.\n\n마지막으로, 매년 저희가 수용할 수 있는 것보다 훨씬 더 많은 보석 공예가들의 신청을 받는다는 점을 유의해 주시기 바랍니다. 올해 처음 지원하시는 것이니, 혹시라도 작품이 수락되지 않더라도 너무 낙담하지 않으셨으면 합니다. — [4] —.\n\n다시 한번 감사드리며, 지원에 행운을 빕니다.\n\n리사 양`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t1-q161",
                    questionNo: 161,
                    text: "What is suggested about the craft fair?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "It takes place in downtown Staffordsville.",
                        "B": "It is being held for the first time.",
                        "C": "It specializes in locally produced crafts.",
                        "D": "It will be held outdoors."
                    },
                    correctAnswer: "D",
                    translation: "공예박람회에 대해 암시된 것은?",
                    explanation: "비가 오나 눈이 오나 개최한다(hold the fair rain or shine)는 점과 각자 천막을 준비해야 한다(supply their own tenting)는 내용을 통해 야외에서 개최됨을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t1-q162",
                    questionNo: 162,
                    text: "What is NOT mentioned as a requirement for selling at the craft fair?",
                    classification: "P7_NEGATIVE",
                    options: {
                        "A": "Sharing a space with another participant",
                        "B": "Paying a fee to participate",
                        "C": "Submitting images of the crafts",
                        "D": "Providing one's own tenting"
                    },
                    correctAnswer: "A",
                    translation: "공예박람회 판매 요건으로 언급되지 않은 것은?",
                    explanation: "공간 공유 여부에 관계없이(whether or not they want to share a space) 신청비를 내야 한다고 했으므로 공간 공유는 의무 사항이 아닙니다. 나머지는 모두 본문에 명시되어 있습니다."
                },
                {
                    id: "v3-p7-t1-q163",
                    questionNo: 163,
                    text: "What does Ms. Renaldo most likely sell?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "Sketches",
                        "B": "Photographs",
                        "C": "Pottery",
                        "D": "Jewelry"
                    },
                    correctAnswer: "D",
                    translation: "레날도 씨가 판매할 물품으로 가장 가능성이 높은 것은?",
                    explanation: "마지막 단락에서 보석 공예가(jewelry makers)들의 지원이 너무 많다며, 레날도 씨가 처음 지원하는 것이니 탈락하더라도 낙담하지 말라고 격려하고 있습니다. 따라서 레날도 씨는 보석 공예가임을 추론할 수 있습니다."
                },
                {
                    id: "v3-p7-t1-q164",
                    questionNo: 164,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Make sure they clearly represent the items you wish to offer for purchase at the event.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "A",
                    translation: "[1], [2], [3], [4] 중 다음 문장이 들어가기에 가장 적절한 위치는?\n\"그것들이 박람회에서 판매하고자 하는 물품들을 명확하게 나타내는지 확인해 주십시오.\"",
                    explanation: "문장의 'they'가 가리키는 것은 앞 문장의 '최소 4장의 작품 사진(minimum of four photographs of their work)'입니다. 따라서 [1] 위치가 가장 적절합니다."
                }
            ]
        },
        // Questions 165-167: Information (Sleep Soundly Solutions)
        {
            id: "v3-p7-t1-set8",
            setType: "Single",
            questionRange: "165-167",
            passages: [
                {
                    id: "v3-p7-t1-s8-p1",
                    contextType: "P3_MEDI",
                    docType: "INFORMATION",
                    title: "SLEEP SOUNDLY SOLUTIONS",
                    content: `Thank you for choosing Sleep Soundly Solutions!\n\nThe updated control panel is linked to an integrated system that allows you to activate and disable all security systems in your home, including your Sleep Soundly motion sensor as well as your fire, smoke, and carbon monoxide detectors.\n\nAll Sleep Soundly residential alarm systems have been tested thoroughly to ensure the highest quality and sensitivity, so you can sleep soundly in the knowledge that your home is protected. We have also developed a new smartphone application that will notify you of any disturbances wherever you are. The app is available for download now.\n\nSleep Soundly control equipment is carefully manufactured for use with Sleep Soundly detectors and alarms. Using products manufactured by other companies may result in an alarm system that does not meet safety requirements for residential buildings or comply with local laws.`,
                    translation: `슬립 사운들리 솔루션을 선택해 주셔서 감사합니다!\n\n업데이트된 제어 패널은 화재, 연기, 일산화탄소 감지기뿐만 아니라 슬립 사운들리 동작 센서를 포함한 가정 내 모든 보안 시스템을 활성화 및 비활성화할 수 있는 통합 시스템과 연결되어 있습니다.\n\n모든 슬립 사운들리 주택용 경보 시스템은 최고 수준의 품질과 감도를 보장하기 위해 철저한 테스트를 거쳤으므로, 귀하의 가정이 보호되고 있다는 안심 하에 편안히 잠드실 수 있습니다. 또한 저희는 귀하가 어디에 있든 어떠한 침입이나 방해 요소라도 알려드리는 새로운 스마트폰 애플리케이션을 개발했습니다. 앱은 지금 바로 다운로드하실 수 있습니다.\n\n슬립 사운들리 제어 장비는 슬립 사운들리 감지기 및 경보기에 사용하도록 정교하게 제조되었습니다. 타사 제품을 사용할 경우 주거용 건물의 안전 요구 사항을 충족하지 못하거나 현지 법규를 준수하지 않는 경보 시스템이 될 수 있습니다.`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t1-q165",
                    questionNo: 165,
                    text: "In what industry does Sleep Soundly Solutions operate?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "Real estate",
                        "B": "Life insurance",
                        "C": "Home security",
                        "D": "Furniture moving"
                    },
                    correctAnswer: "C",
                    translation: "슬립 사운들리 솔루션은 어떤 업종에 종사하는가?",
                    explanation: "주택용 경보 시스템(residential alarm systems) 및 보안 시스템(security systems)을 언급하고 있으므로 홈 보안(Home security) 업체임을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t1-q166",
                    questionNo: 166,
                    text: "What new product is being offered by Sleep Soundly Solutions?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "An outdoor motion sensor",
                        "B": "A smartphone application",
                        "C": "Home installation service",
                        "D": "Fire detection equipment"
                    },
                    correctAnswer: "B",
                    translation: "슬립 사운들리 솔루션에서 제공하는 새로운 제품은?",
                    explanation: "두 번째 단락에서 새로운 스마트폰 애플리케이션을 개발했다(developed a new smartphone application)고 명시되어 있습니다."
                },
                {
                    id: "v3-p7-t1-q167",
                    questionNo: 167,
                    text: "The word \"meet\" in paragraph 3, line 3, is closest in meaning to",
                    classification: "P7_VOCABULARY",
                    options: {
                        "A": "greet",
                        "B": "touch",
                        "C": "satisfy",
                        "D": "experience"
                    },
                    correctAnswer: "C",
                    translation: "세 번째 단락의 “meet”이라는 단어의 의미와 가장 가까운 것은?",
                    explanation: "안전 요구 사항을 충족하다(meet safety requirements)라는 문맥이므로 satisfy(충족시키다, 만족시키다)가 가장 적절합니다."
                }
            ]
        },
        // Questions 168-171: Letter (Name Change Announcement)
        {
            id: "v3-p7-t1-set9",
            setType: "Single",
            questionRange: "168-171",
            passages: [
                {
                    id: "v3-p7-t1-s9-p1",
                    contextType: "P1_CORR",
                    docType: "LETTER",
                    content: `March 29\n\nDr. Maritza Geerlings\nPoseidonstraat 392\nParamaribo\nSuriname\n\nDear Dr. Geerlings,\n\nI am writing to thank you for your years of service on the faculty of the Jamaican Agricultural Training Academy (JATA) and to let you know about some exciting developments. As you know, JATA was originally established as a vocational school for agriculture but now offers courses in a varied array of disciplines, including cybersecurity, electrical engineering, and health information management. Our student body, which for the first ten years consisted almost exclusively of locals, is now culturally diverse, with students from across the Americas and Europe. Today's students work with sophisticated equipment, much of which did not exist in our early days.\n\nTo reflect these and other significant changes that JATA has undergone over time, the Board of Trustees has approved a proposal by the Faculty Senate to rename the institution the Caribbean Academy of Science and Technology. As a result, a new institutional logo will be adopted. All students and faculty members, both current and former, are invited to participate in a logo design contest. Information about the contest will be forthcoming.\n\nThe renaming ceremony and the introduction of the new logo will take place at 11 A.M. on 1 June, the twentieth anniversary of the institution. We hope you will be able to join us.\n\nSincerely,\n\nAudley Bartlett\nVice President for Academic Affairs,\nJamaican Agricultural Training Academy`,
                    translation: `3월 29일\n\n마리차 게를링스 박사님께\n포세이돈스트라트 392\n파라마리보\n수리남\n\n게를링스 박사님께,\n\n자메이카 농업 훈련 아카데미(JATA)의 교수직으로 수년 동안 봉사해 주신 데 대해 감사를 표하고 몇 가지 흥미로운 소식을 전해 드리고자 이 편지를 씁니다. 아시다시피 JATA는 원래 농업 직업 학교로 설립되었으나 지금은 사이버 보안, 전기 공학, 보건 정보 관리 등을 포함한 다양한 분야의 과정을 제공하고 있습니다. 처음 10년 동안 거의 전적으로 지역 주민들로 구성되었던 학생들은 이제 미주 전역과 유럽에서 온 학생들로 문화적으로 다양해졌습니다. 오늘날 학생들은 초창기에는 존재하지 않았던 정교한 장비들로 공부합니다.\n\n시간이 지나면서 JATA가 겪은 이러한 변화와 다른 중요한 변화들을 반영하기 위해 이사회는 기관 명칭을 카리브해 과학 기술 아카데미로 변경하자는 교수 평의회의 제안을 승인했습니다. 결과적으로 새로운 기관 로고가 도입될 것입니다. 현재 및 이전의 모든 학생과 교수진은 로고 디자인 공모전에 참여하실 수 있습니다. 공모전에 대한 정보는 추후 안내될 예정입니다.\n\n명칭 변경식과 새로운 로고 소개는 기관 창립 20주년인 6월 1일 오전 11시에 열릴 예정입니다. 함께해 주실 수 있기를 바랍니다.\n\n상심을 담아,\n\n오드리 바틀렛\n교무 담당 부회장\n자메이카 농업 훈련 아카데미`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t1-q168",
                    questionNo: 168,
                    text: "What is one purpose of the letter?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To announce a name change",
                        "B": "To honor distinguished alumni",
                        "C": "To suggest revisions to a curriculum",
                        "D": "To list an individual's accomplishments"
                    },
                    correctAnswer: "A",
                    translation: "이 편지의 목적 중 하나는?",
                    explanation: "교수진이었던 게를링스 박사에게 학교의 명칭이 변경됨(rename the institution)을 알리고 관련 행사에 초대하는 것이 주된 목적입니다."
                },
                {
                    id: "v3-p7-t1-q169",
                    questionNo: 169,
                    text: "The word \"established\" in paragraph 1, line 3, is closest in meaning to",
                    classification: "P7_VOCABULARY",
                    options: {
                        "A": "affected",
                        "B": "founded",
                        "C": "confirmed",
                        "D": "settled"
                    },
                    correctAnswer: "B",
                    translation: "첫 번째 단락의 “established”라는 단어의 의미와 가장 가까운 것은?",
                    explanation: "학교가 농업 직업 학교로 설립되었다(originally established as ~)는 문맥이므로 founded(설립된)가 가장 적절합니다."
                },
                {
                    id: "v3-p7-t1-q170",
                    questionNo: 170,
                    text: "What is suggested about Dr. Geerlings?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "She plans to attend JATA's anniversary celebration.",
                        "B": "She has taught courses in cybersecurity.",
                        "C": "She can take part in JATA's logo design contest.",
                        "D": "She served on JATA's Board of Trustees."
                    },
                    correctAnswer: "C",
                    translation: "게를링스 박사에 대해 암시된 것은?",
                    explanation: "현재 및 이전의 모든 교수진이 로고 공모전에 참여할 수 있다(All students and faculty members, both current and former, are invited to participate in a logo design contest)고 했으므로, 이전 교수였던 게를링스 박사도 참여 가능합니다."
                },
                {
                    id: "v3-p7-t1-q171",
                    questionNo: 171,
                    text: "What is NOT indicated about JATA in the letter?",
                    classification: "P7_NEGATIVE",
                    options: {
                        "A": "Its professors live on campus.",
                        "B": "Its students have access to modern equipment.",
                        "C": "It will be twenty years old on June 1.",
                        "D": "It is attended by international students."
                    },
                    correctAnswer: "A",
                    translation: "JATA에 대해 언급되지 않은 것은?",
                    explanation: "정교한 장비(sophisticated equipment), 20주년(twentieth anniversary), 다양한 국적의 학생들(culturally diverse)은 모두 언급되었으나 교수들의 거주지에 대한 내용은 없습니다."
                }
            ]
        },
        // Questions 172-175: Online Chat Discussion (Interview Prep)
        {
            id: "v3-p7-t1-set10",
            setType: "Single",
            questionRange: "172-175",
            passages: [
                {
                    id: "v3-p7-t1-s10-p1",
                    contextType: "P7_CONV",
                    docType: "CHAT_MESSAGE",
                    content: `Ashley Montaine 8:54 A.M.: How did the interview with Mr. Erickson go?\nDan Campbell 8:55 A.M.: I really enjoyed meeting him. I think he'd be a great reporter here. He seems smart and organized, and his samples show that he's a great writer.\nAshley Montaine 8:57 A.M.: Brooke, can you contact Mr. Erickson to set up the next interview? Is that a problem?\nDan Campbell 8:58 A.M.: I'd really like to work with him. It is very important that he impress Mr. Peters.\nBrooke Randolph 8:59 A.M.: Not at all.\nAshley Montaine 9:00 A.M.: Thanks. I also see that he has a varied work history. That will make him a well-rounded reporter.\nBrooke Randolph 9:02 A.M.: When would you like to meet with him again?\nDan Campbell 9:03 A.M.: Ashley, I believe you will participate in the next interview. Note that Mr. Peters is probably going to ask why Mr. Erickson wants to transition from freelance writing to in-house news reporting. Also, Mr. Peters will want assurances that he's committed and will stick around for several years.\nAshley Montaine 9:04 A.M.: Brooke, Mr. Peters and I are both free Friday morning.\nBrooke Randolph 9:06 A.M.: Great. I'll write an e-mail shortly.`,
                    translation: `애슐리 몬테인 (오전 8시 54분): 에릭슨 씨와의 면접은 어땠나요?\n단 캠벨 (오전 8시 55분): 만나서 정말 즐거웠어요. 이곳에서 훌륭한 기자가 될 것 같아요. 똑똑하고 정리도 잘하는 것 같고, 원고 샘플을 보니 훌륭한 작가이기도 하더라고요.\n애슐리 몬테인 (오전 8시 57분): 브룩, 다음 면접 일정을 잡기 위해 에릭슨 씨에게 연락해 줄 수 있나요? 문제 없을까요?\n단 캠벨 (오전 8시 58분): 저는 그와 정말 함께 일하고 싶어요. 그가 피터스 씨에게 좋은 인상을 남기는 것이 매우 중요합니다.\n브룩 랜돌프 (오전 8시 59분): 전혀 문제 없어요.\n애슐리 몬테인 (오전 9시 00분): 고마워요. 그의 경력이 다양하다는 것도 확인했어요. 덕분에 다재다능한 기자가 될 거예요.\n브룩 랜돌프 (오전 9시 02분): 언제 다시 그를 만나고 싶으신가요?\n단 캠벨 (오전 9시 03분): 애슐리, 당신이 다음 면접에 참여할 거라고 믿어요. 피터스 씨가 에릭슨 씨에게 왜 프리랜서 작가에서 사내 뉴스 기고자로 전향하려 하는지 물어볼 가능성이 높다는 점을 유의하세요. 또한 피터스 씨는 그가 오랫동안 함께 일할 의지가 있는지 확신을 얻고 싶어 할 거예요.\n애슐리 몬테인 (오전 9시 04분): 브룩, 피터스 씨와 저는 둘 다 금요일 오전이 한가해요.\n브룩 랜돌프 (오전 9시 06분): 좋아요. 곧 이메일을 보낼게요.`
                }
            ],
            questions: [
                {
                    id: "v3-p7-t1-q172",
                    questionNo: 172,
                    text: "What is being discussed?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "Providing a reference for a coworker",
                        "B": "Planning a job interview",
                        "C": "Applying for a freelance position",
                        "D": "Rescheduling a meeting with a client"
                    },
                    correctAnswer: "B",
                    translation: "무엇에 대해 논의하고 있는가?",
                    explanation: "에릭슨 씨의 다음 면접(next interview) 일정을 잡는 것에 대해 이야기하고 있으므로 구직 면접 계획이 정답입니다."
                },
                {
                    id: "v3-p7-t1-q173",
                    questionNo: 173,
                    text: "What is suggested about Mr. Erickson?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "He is currently a freelance writer.",
                        "B": "He used to work with Mr. Peters.",
                        "C": "He has previously been a reporter.",
                        "D": "He is looking for a part-time job."
                    },
                    correctAnswer: "A",
                    translation: "에릭슨 씨에 대해 암시된 것은?",
                    explanation: "피터스 씨가 왜 프리랜서 작가에서 전향하려 하는지(why Mr. Erickson wants to transition from freelance writing) 물어볼 것이라는 대목에서 현재 프리랜서임을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t1-q174",
                    questionNo: 174,
                    text: "What does Mr. Campbell imply when he writes, \"I'd really like to work with him\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "He wants to apply for a different position.",
                        "B": "He would like to assist with an interview.",
                        "C": "He is impressed by Mr. Erickson.",
                        "D": "He is too busy to complete a task."
                    },
                    correctAnswer: "C",
                    translation: "단 캠벨 씨가 \"그와 정말 함께 일하고 싶어요\"라고 쓴 의도는?",
                    explanation: "에릭슨 씨가 훌륭한 기자가 될 것이라고 칭찬한 뒤에 한 말이므로, 에릭슨 씨에게 깊은 인상을 받았음을 나타냅니다."
                },
                {
                    id: "v3-p7-t1-q175",
                    questionNo: 175,
                    text: "What will Ms. Randolph likely do next?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "Conduct a reporter interview",
                        "B": "Write a news article",
                        "C": "Speak with Mr. Peters",
                        "D": "Contact a job applicant"
                    },
                    correctAnswer: "D",
                    translation: "랜돌프 씨가 다음에 할 일로 가장 가능성이 높은 것은?",
                    explanation: "마지막 대화에서 곧 이메일을 쓰겠다(I'll write an e-mail shortly)고 했는데, 이는 금요일 오전으로 면접 시간을 정했으므로 지원자인 에릭슨 씨에게 연락하겠다는 의미입니다."
                }
            ]
        }
    ]
};
