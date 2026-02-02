import { Part7Test } from './types';
export const test2Data: Part7Test = {
    testId: 2,
    title: "Test 2",
    sets: [
        // Questions 147-148: Webinar Invitation
        {
            id: "p7-t2-set1",
            questionRange: "147-148",
            passages: [
                {
                    id: "p7-t2-s1-p1",
                    contextType: "P5",
                    docType: "INVITATION",
                    title: "Focus Your Social Media Presence",
                    content: `For small-business owners, it can be a challenge to stand out in a competitive social media environment. Successfully reaching your target market involves knowing how and where to promote your products in a way that is effective and memorable. The Savan Business Center offers support for business owners who need a lift in doing just that. For over 50 years, we've been helping entrepreneurs grow their sales through insight of current industry trends and understanding of our clients' unique needs.\n\nLet us help you get more organized in creating effective and far-reaching social media content. Our latest webinar, Focus Your Social Media Presence, will cover topics related to making your business stand out. You can sign up on our event Web page.\n\nDate: February 5\nTime: 10:00 A.M. to 11:00 A.M.\nEvent Web page: https://www.savanbusinesscenter.com/socialmedia`,
                    translation: `소셜 미디어 입지에 주력하라\n\n소규모 사업주에게 있어 경쟁적인 소셜 미디어 환경에서 두각을 나타내는 것은 도전이 될 수 있습니다. 목표 시장에 성공적으로 도달하는 데에는 효과적이고 기억에 남는 방식으로 제품을 홍보하는 방법과 장소를 아는 것이 필요합니다. 사반 비즈니스 센터는 바로 그 일을 하는 데 부양책이 필요한 사업주들을 지원합니다. 50년이 넘는 기간 동안 저희는 현재 업계 동향에 대한 통찰력과 고객의 고유한 요구에 대한 이해를 통해 사업주들이 매출을 신장할 수 있도록 도움을 드리고 있습니다.\n\n효과적이고 영향력이 큰 소셜 미디어 콘텐츠를 만드는 데 있어 귀사가 보다 체계적일 수 있도록 도와드리겠습니다. 저희의 최신 웨비나인 '소셜 미디어 입지에 주력하라'에서는 귀사의 비즈니스를 돋보이게 만드는 것과 관련된 주제들을 다룹니다. 저희의 이벤트 웹페이지에서 등록하실 수 있습니다.\n\n날짜: 2월 5일\n시간: 오전 10시부터 오전 11시\n이벤트 웹페이지: https://www.savanbusinesscenter.com/socialmedia`
                }
                    ],
            questions: [
                {
                    id: "p7-t2-q147",
                    questionNo: 147,
                    text: "What is true about the Savan Business Center?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It works with small businesses.",
                        "B": "It publishes a weekly newsletter.",
                        "C": "It recently launched a new Web site.",
                        "D": "It is seeking suggestions for webinar topics."
                    },
                    correctAnswer: "A",
                    translation: "Savan Business Center에 대해 사실인 것은?",
                    explanation: `이미지 해설에 따르면, 첫 문장에서 소규모 사업주들에게 도전이 될 수 있는 환경을 언급한 뒤 세 번째 문장에서 사반 비즈니스 센터가 바로 그 일을 하는 데 도움이 필요한 사업주들을 지원한다고 했습니다. 따라서 소규모 사업체와 함께 협력하거나 지원하는 곳임을 알 수 있습니다.`
                },
                {
                    id: "p7-t2-q148",
                    questionNo: 148,
                    text: "What is indicated about the webinar?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It begins at 11:00 A.M.",
                        "B": "It features advice on creating promotional content.",
                        "C": "It is being offered every month.",
                        "D": "It requires a small fee to attend."
                    },
                    correctAnswer: "B",
                    translation: "웨비나에 대해 무엇이 언급되어 있는가?",
                    explanation: `두 번째 단락에서 효과적이고 영향력이 큰 소셜 미디어 콘텐츠를 만드는 데 도움을 주겠다고 언급하고, 웨비나에서 비즈니스를 돋보이게 하는 주제를 다룬다고 했으므로 홍보용 콘텐츠 제작에 대한 조언을 제공함을 알 수 있습니다.`
                }
                    ]
        },
        // Questions 149-150: Dine Out Darville Announcement
        {
            id: "p7-t2-set2",
            questionRange: "149-150",
            passages: [
                {
                    id: "p7-t2-s2-p1",
                    contextType: "P2",
                    docType: "ANNOUNCEMENT",
                    title: "Dine Out Darville Is Back!",
                    content: `Dine Out Darville, which runs this year from June 22 to 28, is the perfect chance to try a restaurant in Darville for the first time or revisit one of your favorite restaurants in town. You may even visit multiple restaurants during the weeklong event! Twelve popular restaurants will offer special four-course dinners—including a cup of soup, a salad, a main course, and dessert—all for a reduced price of $30. Reservations are highly recommended. Dine Out Darville welcomes hundreds of locals and tourists each year, and you do not want to miss your opportunity to get a great meal at a great price.\n\nVisit www.darvillebusinesscouncil.org/dineout for a list of participating restaurants.`,
                    translation: `다인 아웃 다빌이 돌아왔습니다!\n\n올해 6월 22일부터 28일까지 운영되는 다인 아웃 다빌은 다빌에 있는 레스토랑을 처음 시도하거나 이 도시에서 가장 좋아하는 레스토랑 중 하나를 재방문할 수 있는 완벽한 기회입니다. 일주일 간의 행사 동안 여러 레스토랑을 방문할 수도 있습니다! 인기 있는 레스토랑 열두 곳에서 수프 한 컵, 샐러드, 메인 코스, 디저트를 포함한 4코스 특별 정식을 할인된 가격인 30달러에 제공합니다. 예약이 적극 권장됩니다. 다인 아웃 다빌은 매년 수백 명의 현지인과 관광객을 맞이하고 있으며, 여러분은 저렴한 가격에 훌륭한 식사를 할 수 있는 기회를 결코 놓치고 싶지 않을 것입니다.\n\n참여 레스토랑 목록을 확인하려면 www.darvillebusinesscouncil.org/dineout을 방문하세요.`
                }
                    ],
            questions: [
                {
                    id: "p7-t2-q149",
                    questionNo: 149,
                    text: "What is mentioned about Dine Out Darville?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It lasts for one week.",
                        "B": "It is held in a different location each year.",
                        "C": "It is being held for the first time.",
                        "D": "It includes both lunch and dinner."
                    },
                    correctAnswer: "A",
                    translation: "Dine Out Darville에 대해 무엇이 언급되어 있는가?",
                    explanation: `첫 문장에서 올해 6월 22일부터 28일까지 운영된다고 했으며, 그 다음 문장에서 '일주일 간의 행사(weeklong event)'라고 지칭했으므로 일주일 동안 지속됨을 알 수 있습니다.`
                },
                {
                    id: "p7-t2-q150",
                    questionNo: 150,
                    text: "What is NOT included in the reduced-price meals?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "A cup of soup",
                        "B": "A salad",
                        "C": "A dessert",
                        "D": "A beverage"
                    },
                    correctAnswer: "D",
                    translation: "할인 가격 식사에 포함되지 않은 것은?",
                    explanation: `세 번째 문장에서 할인 정식에는 수프 한 컵, 샐러드, 메인 코스, 디저트가 포함된다고 명시했습니다. 음료(beverage)는 포함 내역에 없습니다.`
                }
                    ]
        },
        // Questions 151-152: Article - Rainsy To Move Headquarters
        {
            id: "p7-t2-set3",
            questionRange: "151-152",
            passages: [
                {
                    id: "p7-t2-s3-p1",
                    contextType: "P3",
                    docType: "ARTICLE",
                    title: "Rainsy To Move Headquarters",
                    content: `DADE (July 11)—Rainsy LLC announced yesterday that it is moving its headquarters to Dade.\n\nThe data storage and analytics firm currently based in Salt Creek, Rainsy has clients that include some of the country's largest credit card companies, online retailers, and software providers. Rainsy helps businesses manage and understand their customer data.\n\nRainsy is not planning to close its current offices in Salt Creek. However, the Dade location will become its new base of operations, as several members of its executive team will work there. The company's chief executive officer and chief financial officer will relocate to Dade along with approximately 50 percent of the company's workforce.\n\nThe office of Rainsy's chief technology officer will remain in Salt Creek, as will the account management team. The company's new Dade offices are located at 12 Glacier Parkway.`,
                    translation: `헤인시 사의 본사 이전\n\n데이드 (7월 11일) — 레인시 LLC는 어제 본사를 데이드로 이전한다고 발표했습니다.\n\n현재 솔트크리크에 본사를 둔 데이터 저장 및 분석 회사인 레인시는 국내 최대의 신용카드사, 온라인 소매업체 및 소프트웨어 공급업체를 포함한 고객들을 보유하고 있습니다. 레인시는 이러한 기업들이 고객 데이터를 관리하고 이해할 수 있도록 돕고 있습니다.\n\n레인시가 솔트크리크에 있는 현재 사무실을 닫을 계획은 없습니다. 하지만 일부 경영진이 데이드 지사에서 근무할 예정임에 따라 그곳이 새로운 운영 기반이 될 것입니다. 회사의 최고 경영 책임자와 최고 재무 책임자는 약 50퍼센트의 회사 직원과 함께 데이드로 이전할 것입니다.\n\n레인시의 최고 기술 책임자 사무실은 솔트크리크에 남을 예정이며, 고객 관리팀도 마찬가지입니다. 회사의 새로운 데이드 사무실은 글레이셔 파크웨이 12번지에 위치해 있습니다.`
                }
                    ],
            questions: [
                {
                    id: "p7-t2-q151",
                    questionNo: 151,
                    text: "What does Rainsy LLC do?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It stores and analyzes consumer information.",
                        "B": "It sells technology products online.",
                        "C": "It processes credit card payments for retailers.",
                        "D": "It develops computer software programs."
                    },
                    correctAnswer: "A",
                    translation: "Rainsy LLC는 무엇을 하는가?",
                    explanation: `두 번째 단락에서 솔트크리크에 본사를 둔 데이터 저장 및 분석 회사인 레인시는 기업들이 고객 데이터를 관리하고 이해할 수 있도록 돕고 있다고 언급했으므로 소비자 데이터를 저장 및 분석하는 회사임을 알 수 있습니다.`
                },
                {
                    id: "p7-t2-q152",
                    questionNo: 152,
                    text: "Who will be based in Dade?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Rainsy's chief technology officer",
                        "B": "The entire Rainsy executive team",
                        "C": "About half of Rainsy's employees",
                        "D": "The Rainsy account management team"
                    },
                    correctAnswer: "C",
                    translation: "누가 Dade에 근무하게 되는가?",
                    explanation: `세 번째 단락의 마지막 문장에서 최고 경영 책임자와 최고 재무 책임자는 약 50퍼센트의 회사 직원과 함께 데이드로 이전할 것이라고 했으므로 (C)가 정답입니다.`
                }
                    ]
        },
        // Questions 153-154: Text Message Chain
        {
            id: "p7-t2-set4",
            questionRange: "153-154",
            passages: [
                {
                    id: "p7-t2-s4-p1",
                    contextType: "P7",
                    docType: "TEXT_MESSAGE",
                    content: `Michael Liu (9:43 A.M.)\nHi, Jana. I'm at Biz Plus. The paper you need is out of stock until next week. Will another color work?\n\nJana Bhat (9:45 A.M.)\nWhat are the options?\n\nMichael Liu (9:46 A.M.)\nThey have yellow, green, and pink in the brand that you prefer.\n\nJana Bhat (9:47 A.M.)\nI really need blue. Are there other brands of blue printer paper?\n\nMichael Liu (9:48 A.M.)\nYes, but they're all a darker blue. They also cost more.\n\nJana Bhat (9:49 A.M.)\nOK, forget it. I'll place an order online.`,
                    translation: `마이클 리우 (오전 9:43)\n안녕하세요, 제나. 지금 비즈 플러스에 있는데요. 당신이 필요한 종이가 다음 주까지 재고가 없어요. 다른 색도 될까요?\n\n제나 바트 (오전 9:45)\n어떤 선택지가 있나요?\n\n마이클 리우 (오전 9:46)\n당신이 선호하는 브랜드에 노란색, 초록색, 분홍색이 있어요.\n\n제나 바트 (오전 9:47)\n저는 파란색이 꼭 필요해요. 다른 브랜드의 파란색 프린터 용지가 있나요?\n\n마이클 리우 (오전 9:48)\n네, 하지만 모두 진한 파란색이에요. 가격도 더 비싸고요.\n\n제나 바트 (오전 9:49)\n알겠어요, 신경 쓰지 마세요. 제가 온라인으로 주문할게요.`
                }
                    ],
            questions: [
                {
                    id: "p7-t2-q153",
                    questionNo: 153,
                    text: "What is implied about the paper Mr. Liu is trying to buy?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "It is a light blue color.",
                        "B": "It is expensive.",
                        "C": "It is only sold at Biz Plus.",
                        "D": "It has been discontinued."
                    },
                    correctAnswer: "A",
                    translation: "리우 씨가 사려고 하는 종이에 대해 암시된 것은?",
                    explanation: `9시 47분에 바트 씨가 파란색이 꼭 필요하다고 했고, 9시 48분에 리우 씨가 다른 브랜드의 파란색 종이는 모두 '진한 파란색(darker blue)'이라고 답했습니다. 따라서 원래 사려고 했던 종이는 연한 파란색임을 추론할 수 있습니다.`
                },
                {
                    id: "p7-t2-q154",
                    questionNo: 154,
                    text: "At 9:49 A.M., what does Ms. Bhat most likely mean when she writes, \"OK, forget it\"?",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "She wants to check a budget.",
                        "B": "Mr. Liu should not buy any paper at Biz Plus.",
                        "C": "Mr. Liu should not place an order this week.",
                        "D": "She plans to cancel an order."
                    },
                    correctAnswer: "B",
                    translation: "오전 9시 49분에 바트 씨가 \"OK, forget it\"이라고 쓴 의도는?",
                    explanation: `원하는 종이가 없고 다른 것은 더 비싸거나 색상이 맞지 않아 본인이 직접 온라인으로 주문하겠다고 했으므로, 리우 씨에게 해당 매장에서 종이를 사지 말라고 말하는 것입니다.`
                }
                    ]
        },
        // Questions 155-157: Letter
        {
            id: "p7-t2-set5",
            questionRange: "155-157",
            passages: [
                {
                    id: "p7-t2-s5-p1",
                    contextType: "P1",
                    docType: "LETTER",
                    content: `May 20\n\nNeil Croft, Director\nQueensland Library Systems\n13 Henoki Road\nBrisbane QLD 4003\n\nDear Mr. Croft,\n\nI have read your inquiry regarding the possibility of opening financial management courses at libraries across Queensland. The Society for Financial Management Advisors (SFMA) welcomes the opportunity to partner with libraries to make basic financial information more widely available.\n\nYou proposed that SFMA members could lead introductory courses at your library branches. This is something I would be happy to arrange. In the past, SFMA members have offered similar courses for recent graduates, people changing careers, and first-time investors.\n\nIf you have a list of library branches where you would like to run the first series of events, I can suggest facilitators who work near those libraries or would be willing to travel to them. Do you have a general profile of the expected attendees? That information would help us tailor the courses to the needs and interests of the students.\n\nI look forward to meeting you and planning next steps. Please call me at 07 5550 1344 to schedule a time to discuss the process.\n\nRoberta Ottini\nChairperson, Society for Financial Management Advisors`,
                    translation: `5월 20일\n\n닐 크로프트 관장\n퀸즐랜드 도서관 시스템\n해노키 로드 13\n브리즈번 QLD 4003\n\n크로프트 씨께,\n\n퀸즐랜드 전역의 도서관에 재무관리 과정을 개설하는 것에 관한 귀하의 문의를 읽었습니다. 재무관리 전문가 협회(SFMA)는 기초 재무 관리 정보에 보다 널리 접근할 수 있도록 도서관과 협력할 수 있는 기회를 환영합니다.\n\n귀하는 SFMA 회원들이 몇몇 도서관 분관에서 입문 과정을 지도해 줄 것을 제안했습니다. 이는 제가 기꺼이 주선할 수 있는 것입니다. 과거에 SFMA 회원들은 최근 졸업생, 직업을 바꾸려는 사람들, 처음 투자하는 사람들에게 비슷한 과정을 제공했습니다.\n\n첫 행사 시리즈를 진행할 도서관 분관 목록이 있으시다면 해당 도서관 근처에서 근무하거나 그 도서관으로 갈 의향이 있는 진행자들을 제안해 드릴 수 있습니다. 예상 참석자들의 일반적인 프로필이 있으십니까? 그 정보는 수강생의 요구와 관심에 맞게 과정을 조정하는 데 도움이 될 것입니다.\n\n귀하와 만나서 다음 계획을 세우기를 기대합니다. 과정에 대해 논의할 시간을 잡기 위해 07 5550 1344로 전화 주시기 바랍니다.\n\n로버타 오트니\n협회장, 재무관리 전문가 협회`
                }
                    ],
            questions: [
                {
                    id: "p7-t2-q155",
                    questionNo: 155,
                    text: "Why did Ms. Ottini write the letter?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "To describe new library courses",
                        "B": "To register for an SFMA finance course",
                        "C": "To verify some educational credentials",
                        "D": "To respond to an inquiry from Mr. Croft"
                    },
                    correctAnswer: "D",
                    translation: "오트니 씨가 편지를 쓴 이유는?",
                    explanation: `첫 문장에서 오트니 씨가 크로프트 씨에게 퀸즐랜드 전역의 도서관에 재무관리 과정을 개설하는 것에 관한 귀하의 문의(inquiry)를 읽었다고 언급했습니다. 따라서 문의에 응답하기 위해 편지를 썼음을 알 수 있습니다.`
                },
                {
                    id: "p7-t2-q156",
                    questionNo: 156,
                    text: "What is one thing Ms. Ottini requested?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Library membership requirements",
                        "B": "A list of course instructors",
                        "C": "The locations of libraries",
                        "D": "Mr. Croft's phone number"
                    },
                    correctAnswer: "C",
                    translation: "오트니 씨가 요청한 내용 중 하나는?",
                    explanation: `세 번째 단락의 첫 문장에서 오트니 씨가 첫 행사 시리즈를 진행할 도서관 분관 목록(list of library branches)이 있다면 진행자를 제안해 줄 수 있다고 했습니다. 이는 도서관들의 위치를 파악하기 위함입니다.`
                },
                {
                    id: "p7-t2-q157",
                    questionNo: 157,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"This is something I would be happy to arrange.\"",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "B",
                    translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"이는 제가 기꺼이 주선할 수 있는 것입니다.\"",
                    explanation: `주어진 문장에서 '이것(This)'은 앞서 언급된 제안을 가리킵니다. [2] 바로 앞에서 크로프트 씨가 SFMA 회원들이 입문 과정을 지도해 줄 것을 제안했다는 내용이 나오므로, 그 뒤에 오는 것이 가장 자연스럽습니다.`
                }
                    ]
        },
        // Questions 158-160: Advertisement
        {
            id: "p7-t2-set6",
            questionRange: "158-160",
            passages: [
                {
                    id: "p7-t2-s6-p1",
                    contextType: "P4",
                    docType: "ADVERTISEMENT",
                    title: "Claro Vision",
                    content: `The difference is clear.\n\nTake advantage of our limited-time offer:\n50% off all eyeglass frames through 30 September\n\nOther advantages available today and every day:\n\n• Free eyeglass fittings and adjustments\n\n• Money-back guarantee if you are not completely satisfied\n\n• More than 500 locations in shopping malls throughout Canada\n\n• Low-cost vision checkups by licensed opticians\n\nTo find a store near you, visit www.clarovision.ca/locations,\nor call 416-555-0122 today!`,
                    translation: `클라로 비전\n차이가 분명합니다.\n\n기간 한정 할인을 이용하세요:\n9월 30일까지 모든 안경테 50% 할인\n\n오늘 그리고 매일 이용 가능한 기타 혜택:\n\n• 무료 안경 피팅 및 조정\n\n• 완전히 만족하지 못할 경우 환불 보장\n\n• 캐나다 전역의 쇼핑몰에 있는 500개 이상의 지점\n\n• 공인 안경사의 저렴한 시력 검사\n\n가까운 매장을 찾으려면 www.clarovision.ca/locations를 방문하시거나 오늘 416-555-0122로 전화 주세요!`
                }
                    ],
            questions: [
                {
                    id: "p7-t2-q158",
                    questionNo: 158,
                    text: "Why most likely was the advertisement created?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "To draw attention to an underused professional service",
                        "B": "To publicize the benefits of a warranty policy",
                        "C": "To announce the opening of new store locations",
                        "D": "To promote a temporary price discount"
                    },
                    correctAnswer: "D",
                    translation: "광고가 만들어진 이유는?",
                    explanation: `광고 상단에서 '9월 30일까지 모든 안경테 50% 할인'이라는 한시적인 가격 할인 혜택(limited-time offer, temporary price discount)을 홍보하고 있습니다.`
                },
                {
                    id: "p7-t2-q159",
                    questionNo: 159,
                    text: "What is stated about Claro Vision stores?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "They are larger than competitors' stores.",
                        "B": "They accept all major credit cards.",
                        "C": "They are located next to shopping malls.",
                        "D": "They provide eyeglass fittings at no cost."
                    },
                    correctAnswer: "D",
                    translation: "Claro Vision 매장에 대해 언급된 것은?",
                    explanation: `기타 혜택 목록의 첫 번째 항목에서 '무료 안경 피팅 및 조정(Free eyeglass fittings and adjustments, at no cost)'을 제공한다고 명시되어 있습니다.`
                },
                {
                    id: "p7-t2-q160",
                    questionNo: 160,
                    text: "What is stated about vision checkups?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "They are completed by a partner company.",
                        "B": "They are performed by a certified professional.",
                        "C": "They should be done every ten months.",
                        "D": "They are offered on a limited number of days."
                    },
                    correctAnswer: "B",
                    translation: "시력 검사에 대해 언급된 것은?",
                    explanation: `기타 혜택의 마지막 항목에서 '공인 안경사(licensed opticians, certified professional)'에 의해 시력 검사가 수행된다고 언급되었습니다.`
                }
                    ]
        },
        // Questions 161-163: Letter
        {
            id: "p7-t2-set7",
            questionRange: "161-163",
            passages: [
                {
                    id: "p7-t2-s7-p1",
                    contextType: "P1",
                    docType: "LETTER",
                    content: `Rossery Building Corporation\n2710 South Exmouth Drive\nSingapore 188509\n\n1 April\n\nElizabeth Balakrishnan\nBala Home Furnishings\n416 Holliton Drive C2\nSingapore 793801\n\nDear Ms. Balakrishnan,\n\nThis is a reminder that the one-year lease for your space will end on 30 April. Please contact my office at 1555 0124 to make an appointment to renew your lease. There will be a small increase in rent and fees because of rising operating costs.\n\nUpdated charges upon lease renewal:\nMonthly rental         S$1,800.00\nParking space fee      S$50.00\nCleaning service       S$10.00\nSecurity fee           S$35.00\nTotal per month        S$1,895.00\n\nIf you do not plan to renew your lease, please notify our office by 15 April. You will need to vacate the premises by 5:00 P.M. on 30 April. The building will be inspected at that time, and costs for repairs or damage beyond normal wear and usage may be incurred.\n\nAlexis Tan`,
                    translation: `로세리 빌딩 코퍼레이션\n2710 사우스 엑스머스 드라이브\n싱가포르 188509\n\n4월 1일\n\n엘리자베스 발라크리슈난\n발라 홈 퍼니싱\n416 홀리턴 드라이브 C2\n싱가포르 793801\n\n발라크리슈난 씨께,\n\n귀하의 공간에 대한 1년 임대차 계약이 4월 30일에 종료됨을 상기시켜 드립니다. 임대차 계약 갱신을 위한 예약을 하시려면 제 사무실 1555 0124로 연락해 주십시오. 운영비 상승으로 인해 임대료 및 수수료가 소폭 인상될 예정입니다.\n\n임대차 계약 갱신 시 변경된 요금:\n월세: 1,800싱가포르달러\n주차 공간 요금: 50싱가포르달러\n청소 서비스: 10싱가포르달러\n보안 수수료: 35싱가포르달러\n월 총액: 1,895싱가포르달러\n\n만약 임대차 계약을 갱신하지 않을 계획이라면, 4월 15일까지 저희 사무소로 통지해 주십시오. 4월 30일 오후 5시까지 건물을 비워 주셔야 합니다. 그 시간에 건물 점검이 있을 예정이며, 정상적인 사용을 넘어선 수리 또는 손상에 대한 비용이 발생할 수 있습니다.\n\n알렉시스 탄`
                }
                    ],
            questions: [
                {
                    id: "p7-t2-q161",
                    questionNo: 161,
                    text: "What is the purpose of the letter?",
                    classification: "P7_PURPOSE",

                    options: {
                        "A": "To explain equipment installation fees",
                        "B": "To provide a discount for a service",
                        "C": "To provide information about a lease agreement",
                        "D": "To request a change to building amenities"
                    },
                    correctAnswer: "C",
                    translation: "편지의 목적은?",
                    explanation: `첫 문장에서 임대차 계약(lease) 종료를 상기시키고 갱신 관련 정보와 변경된 요금을 안내하고 있으므로 (C)가 정답입니다.`
                },
                {
                    id: "p7-t2-q162",
                    questionNo: 162,
                    text: "According to the letter, what must Ms. Balakrishnan pay for monthly?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Furniture rental",
                        "B": "Office supplies",
                        "C": "Inspection costs",
                        "D": "A parking space"
                    },
                    correctAnswer: "D",
                    translation: "편지에 따르면, 발라크리슈난 씨가 매달 지불해야 하는 것은?",
                    explanation: `요금 목록에 '주차 공간 요금(Parking space fee)'이 50싱가포르달러로 명시되어 있습니다.`
                },
                {
                    id: "p7-t2-q163",
                    questionNo: 163,
                    text: "Who most likely is Ms. Tan?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "A repair technician",
                        "B": "A property manager",
                        "C": "A sanitation worker",
                        "D": "A security guard"
                    },
                    correctAnswer: "B",
                    translation: "탄 씨는 누구일 것 같은가?",
                    explanation: `임대차 계약 관리, 요금 고지, 건물 비우기 및 점검 안내를 하는 것으로 보아 부동산 관리자(property manager)임을 알 수 있습니다.`
                }
                    ]
        },
        // Questions 164-167: E-mail
        {
            id: "p7-t2-set8",
            questionRange: "164-167",
            passages: [
                {
                    id: "p7-t2-s8-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    content: `From: khajel@qualiview.co.uk\nTo: lkhoury@briteiyauto.co.uk\nDate: 14 April\nSubject: Proposed revisions to your contract\n\nDear Ms. Khoury,\n\nThank you for forwarding your proposed revisions to the contract for Qualiview Ltd. to become your wholesale supplier of automotive window glass.\n\nFirst, we agree to your request to extend the term of the contract from one year to three years. Second, we are still uncertain about how we can best address your concerns about packaging. We use an innovative type of custom-built crate that reduces breakage for items in transit. We would not be willing to agree to pay an additional penalty fee in the event of damage, however.\n\nI would like to discuss this further with you next week, and I will be out of the office on Tuesday afternoon. Would you be available to meet before 11:00 A.M. on either Wednesday or Thursday? Friday is also possible. Please let me know your preferred date.\n\nKarl Hajel\nQualiview Ltd.`,
                    translation: `발신: khajel@qualiview.co.uk\n수신: lkhoury@briteiyauto.co.uk\n날짜: 4월 14일\n제목: 귀사의 계약 수정안 제안\n\n코우리 씨께,\n\n퀄리뷰 사가 귀사의 자동차 유리 도매 공급업체가 되는 계약에 대한 수정 제안 사항을 보내주셔서 감사합니다.\n\n먼저, 계약 기간을 1년에서 3년으로 연장해 달라는 귀하의 요청에 동의합니다. 둘째, 포장 제재에 대한 귀사의 우려를 어떻게 가장 잘 해결(address)할 수 있을지 아직 확신이 서지 않습니다. 저희는 운송 중 파손을 줄이는 혁신적인 맞춤형 상자를 사용합니다. 하지만 파손이 발생할 경우 추가 위약금을 지불하는 데에는 동의하지 않습니다.\n\n다음 주에 이에 대해 귀하와 추가로 논의하고 싶습니다만, 제가 화요일 오후에는 사무실을 비울 예정입니다. 수요일이나 목요일 오전 11시 전에 만나실 수 있을까요? 금요일도 가능합니다. 편하신 날짜를 알려주십시오.\n\n칼 헤이글\n퀄리뷰 사`
                }
                    ],
            questions: [
                {
                    id: "p7-t2-q164",
                    questionNo: 164,
                    text: "Why did Mr. Hajel write the e-mail?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "To report damage to some goods",
                        "B": "To finalize a purchase",
                        "C": "To request some product samples",
                        "D": "To negotiate a contract"
                    },
                    correctAnswer: "D",
                    translation: "헤이글 씨가 이메일을 쓴 이유는?",
                    explanation: `첫 번째 단락에서 헤이글 씨가 퀄리뷰 사가 귀사의 자동차 유리 도매 공급업체가 되는 계약에 대한 수정 제안을 받았다고 언급하고, 마지막 단락에서 이에 대해 논의하고 싶다고 했으므로 계약 사항을 협상(negotiate)하기 위해 쓴 글임을 알 수 있습니다.`
                },
                {
                    id: "p7-t2-q165",
                    questionNo: 165,
                    text: "What is indicated about Qualiview Ltd.?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It sells its products online.",
                        "B": "It is a vehicle window manufacturer.",
                        "C": "It has paid a penalty fee in the past.",
                        "D": "It recently redesigned its shipping crates."
                    },
                    correctAnswer: "B",
                    translation: "Qualiview Ltd.에 대해 알 수 있는 것은?",
                    explanation: `첫 문장에서 퀄리뷰 사가 자동차 유리(automotive window glass)의 도매 공급업체(wholesale supplier)가 된다고 언급했으므로 차량용 창 제조업체임을 알 수 있습니다.`
                },
                {
                    id: "p7-t2-q166",
                    questionNo: 166,
                    text: "In the second paragraph, the word \"address\" is closest in meaning to",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "respond to",
                        "B": "think about",
                        "C": "greet",
                        "D": "deliver"
                    },
                    correctAnswer: "A",
                    translation: "두 번째 단락의 'address'와 의미상 가장 가까운 단어는?",
                    explanation: `문맥상 포장에 대한 우려 사항에 대해 '대응하다, 처리하다, 해결하다'는 의미로 쓰였으므로 (A) respond to가 가장 적절한 동의어입니다.`
                },
                {
                    id: "p7-t2-q167",
                    questionNo: 167,
                    text: "When is Mr. Hajel available to meet next week?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "On Monday morning",
                        "B": "On Tuesday afternoon",
                        "C": "On Wednesday morning",
                        "D": "On Thursday afternoon"
                    },
                    correctAnswer: "C",
                    translation: "헤이글 씨는 다음 주 언제 만날 수 있는가?",
                    explanation: `마지막 단락에서 수요일이나 목요일 '오전 11시 전(before 11:00 A.M.)', 즉 오전에 가능하다고 했으므로 (C)가 정답입니다.`
                }
                    ]
        },
        // Questions 168-171: Article
        {
            id: "p7-t2-set9",
            questionRange: "168-171",
            passages: [
                {
                    id: "p7-t2-s9-p1",
                    contextType: "P3",
                    docType: "ARTICLE",
                    title: "Shipping Shortage Issues",
                    content: `SINGAPORE (August 6)—Recent international demand for freight space has been outpacing the availability of shipping containers. This container shortage has led to higher costs for goods exported from ports in Asia.\n\nSome exporters have used more expensive air-freight options, but most companies find that they have few choices. They either wait for shipping delays or raise customer prices to cover the higher cost of faster shipping. Either way, the shortage issues are likely to trigger widespread consumer dissatisfaction at some point.\n\n"We are working with business partners, investors, and government officials to discuss solutions to this problem," said Henry Loh, a spokesperson for the OET Group. "It's going to take total cooperation of all stakeholders to find a solution."\n\nNot all companies are suffering, however. For example, Fezker, the producer of athletic apparel and footwear, has been much more successful in navigating the situation. Rather than focusing on international exports to the West, Fezker has redoubled its efforts to expand its domestic and regional markets. These markets are more easily supplied by trucks and rail transportation.\n\n"We had to move quickly to ensure the shipping container shortage would not have a significant impact on our bottom line," said Nuria Loh, CEO of Fezker.`,
                    translation: `배송 중단 사태\n\n싱가포르 (8월 6일) — 최근 국제 화물 적재 공간에 대한 수요가 배송 컨테이너의 가용성을 앞지르고 있습니다. 이러한 컨테이너 부족은 아시아 항구에서 선적되는 상품의 비용 증가로 이어졌습니다.\n\n일부 수출업체들은 항공 화물이라는 더 비싼 옵션을 선택했지만, 대부분의 기업들은 선택의 여지가 없는 상황에 처해 있습니다. 그들은 배송 지연을 감수하거나 급행 배송을 위한 더 높은 비용을 감당하기 위해 고객 가격을 인상해야 합니다. 어느 쪽이든, 이러한 공급 문제는 조만간 소비자 불만을 널리 촉발할 것입니다.\n\n"저희는 이 문제의 해결책을 논의하기 위해 사업 파트너, 투자자, 그리고 정부 관계자들과 함께 일하고 있습니다."라고 OET 그룹의 대변인인 헨리 램(Henry Loh)이 말했습니다. "해결책을 찾는 데는 모든 이해 당사자들의 총체적인 협력이 필요할 것입니다."\n\n그렇다고 모든 기업이 고통받고 있는 것은 아닙니다. 예를 들어, 운동복 및 신발 생산 업체인 페즈커(Fezker)는 이 상황을 훨씬 더 잘 헤쳐나가고 있습니다. 페즈커는 서방 국가로의 수출에 집중하기보다는 국내 및 지역 시장을 확장하기 위한 노력에 박차를 가했습니다. 이러한 시장은 트럭이나 열차 운송을 통해 훨씬 더 쉽게 공급될 수 있습니다.\n\n"컨테이너 부족이 저희의 수익에 큰 영향을 미치지 않도록 신속하게 움직여야 했습니다."라고 페즈커의 CEO인 누리아 램(Nuria Loh)이 말했습니다.`
                }
                    ],
            questions: [
                {
                    id: "p7-t2-q168",
                    questionNo: 168,
                    text: "What is mentioned about shipping containers?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "They are available in various sizes.",
                        "B": "They are currently in short supply.",
                        "C": "They are made of several different materials.",
                        "D": "They can be used for long-term storage."
                    },
                    correctAnswer: "B",
                    translation: "운송 컨테이너에 대해 언급된 것은?",
                    explanation: `첫 문장에서 국제 화물 적재 공간에 대한 수요가 컨테이너 가용성(availability)을 앞지르고 있다고 했으며, 이 컨테이너 부족(shortage)이 상품 비용 상승으로 이어졌다고 했으므로 공급이 부족한 상태임을 알 수 있습니다.`
                },
                {
                    id: "p7-t2-q169",
                    questionNo: 169,
                    text: "What does Mr. Loh say is necessary to solve the situation?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "A sudden increase in the number of customers",
                        "B": "Widespread relaxation of government restrictions",
                        "C": "Development of a new type of technology",
                        "D": "Better communication between affected groups"
                    },
                    correctAnswer: "D",
                    translation: "램 씨는 상황을 해결하기 위해 무엇이 필요하다고 말하는가?",
                    explanation: `세 번째 단락에서 헨리 램은 이 문제의 해결책을 논의하기 위해 사업 파트너, 투자자, 정부 관계자들과 함께 일하고 있다며, 모든 이해관계자(stakeholders)의 협력이 필요하다고 했습니다. 이는 관련 집단 간의 원활한 소통과 협력을 의미합니다.`
                },
                {
                    id: "p7-t2-q170",
                    questionNo: 170,
                    text: "What type of clothing does Fezker produce?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Rain gear",
                        "B": "Sportswear",
                        "C": "Formal wear",
                        "D": "Work uniforms"
                    },
                    correctAnswer: "B",
                    translation: "Fezker가 생산하는 의류의 종류는?",
                    explanation: `네 번째 단락의 첫 부분에서 페즈커를 '운동복 및 신발 생산 업체(producer of athletic apparel and footwear)'라고 소개했으므로 (B) Sportswear가 정답입니다.`
                },
                {
                    id: "p7-t2-q171",
                    questionNo: 171,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"These markets are more easily supplied by trucks and rail transportation.\"",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "D",
                    translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"이 시장들은 트럭 및 열차 운송을 통해 더 쉽게 공급됩니다.\"",
                    explanation: `주어진 문장의 '이 시장들(These markets)'은 바로 앞 문장에 나오는 '국내 및 지역 시장(domestic and regional markets)'을 가리키는 것으로 보아야 흐름이 자연스럽습니다.`
                }
                    ]
        },
        // Questions 172-175: Online Chat
        {
            id: "p7-t2-set10",
            questionRange: "172-175",
            passages: [
                {
                    id: "p7-t2-s10-p1",
                    contextType: "P7",
                    docType: "CHAT_MESSAGE",
                    content: `Gary Pendell (7:40 A.M.)\nGood morning, team. Can you share the current status of your projects, please?\n\nCheng Yu (7:42 A.M.)\nI'm meeting with Nathan later today to confirm start dates for phase B of the Belleside project.\n\nRobbie Juna (7:43 A.M.)\nI am headed out to the Riverview project site now. The rain last week delayed pouring the concrete for the sidewalks. Now that things look better, I'll be doing a status check there today.\n\nGary Pendell (7:44 A.M.)\nWhen does phase B of Belleside start?\n\nCheng Yu (7:46 A.M.)\nWe plan to break ground in March and have the building completed by November.\n\nGary Pendell (7:47 A.M.)\nGood news about the March start. Our client will be happy, I'm sure.\n\nGary Pendell (7:50 A.M.)\nRobbie, after you get a feel for the situation on-site, please let Nathan know. He might be able to help with additional workers if you're behind schedule. He's our most experienced concrete finisher.\n\nRobbie Juna (7:55 A.M.)\nActually, I'm meeting Nathan at the site this morning to get his opinion on when we can pour the concrete. Everything else will be on hold until we can get that work done.\n\nGary Pendell (7:57 A.M.)\nKeep me regular updates. I don't want to rush if its too early, but we are already behind schedule on the Riverview project because of the equipment issues and the building material shipment delays.\n\nRobbie Juna (7:58 A.M.)\nWill do.`,
                    translation: `게리 펜델 (오전 7:40)\n좋은 아침입니다, 팀 여러분. 여러분의 프로젝트 현황을 공유해 주시겠습니까?\n\n청 유 (오전 7:42)\n저는 벨레사이드 프로젝트 B단계의 시작일을 확인하기 위해 오늘 늦게 네이선 씨와 만납니다.\n\n로비 주나 (오전 7:43)\n저는 지금 리버뷰 프로젝트 현장으로 가고 있습니다. 지난주에 내린 비로 인해 보도용 콘크리트 타설 작업이 지연되었습니다. 이제 상황이 나아졌으니 오늘 그곳의 상태 점검을 할 예정입니다.\n\n게리 펜델 (오전 7:44)\n벨레사이드 B단계는 언제 시작되나요?\n\n청 유 (오전 7:46)\n저희는 3월에 착공해서 11월까지 건물을 완공할 계획입니다.\n\n게리 펜델 (오전 7:47)\n3월 시작에 관한 좋은 소식이군요. 고객이 좋아할 것이라고 확신합니다.\n\n게리 펜델 (오전 7:50)\n로비 씨, 현장 상황을 파악한 후에 네이선 씨에게 알려주세요. 만약 일정이 늦어졌다면 그가 추가 근로자들을 보내 도와줄 수 있을 것입니다. 그는 저희 회사에서 가장 노련한 콘크리트 마감 작업자입니다.\n\n로비 주나 (오전 7:55)\n사실 오늘 아침 현장에서 네이선 씨를 만나 언제 콘크리트를 타설할 수 있을지 그의 의견을 구할 예정입니다. 그 작업을 마무리할 수 있을 때까지 다른 모든 업무는 보류됩니다.\n\n게리 펜델 (오전 7:57)\n계속해서 소식을 들려주세요. 너무 성급하게 서두르고 싶지는 않지만, 리버뷰 프로젝트는 이미 장비 문제와 건축 자재 배송 지연으로 인해 일정이 지연된 상태입니다.\n\n로비 주나 (오전 7:58)\n그렇게 하겠습니다.`
                }
                    ],
            questions: [
                {
                    id: "p7-t2-q172",
                    questionNo: 172,
                    text: "In what industry do the chat participants most likely work?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "Construction",
                        "B": "Energy",
                        "C": "Manufacturing",
                        "D": "Travel"
                    },
                    correctAnswer: "A",
                    translation: "채팅 참가자들은 어떤 업계에서 일할 것으로 보이는가?",
                    explanation: `대화에서 '현장(site)', '착공(break ground)', '건물 완공(building completed)', '콘크리트 타설(pour the concrete)', '건축 자재(building material)' 등의 표현이 반복적으로 나오는 것으로 보아 건설 업계(Construction)임을 알 수 있습니다.`
                },
                {
                    id: "p7-t2-q173",
                    questionNo: 173,
                    text: "Why did Mr. Pendell most likely initiate the chat?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "To plan a client meeting",
                        "B": "To discuss a weather forecast",
                        "C": "To obtain an update on some work",
                        "D": "To change an event start time"
                    },
                    correctAnswer: "C",
                    translation: "펜델 씨가 채팅을 시작한 주된 이유는?",
                    explanation: `첫 번째 채팅에서 "여러분의 프로젝트 현황을 공유해 주시겠습니까?(Can you share the current status of your projects)"라며 업무 진행 상황 업데이트를 요청하며 대화를 시작했습니다.`
                },
                {
                    id: "p7-t2-q174",
                    questionNo: 174,
                    text: "What is mentioned about the Riverview project?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It was delayed by equipment problems.",
                        "B": "It is being managed by Mr. Yu.",
                        "C": "It will be completed in November.",
                        "D": "Its customers are satisfied with progress."
                    },
                    correctAnswer: "A",
                    translation: "리버뷰 프로젝트에 대해 언급된 것은?",
                    explanation: `7시 57분 게리 펜델의 메시지에서 리버뷰 프로젝트가 장비 문제(equipment issues)와 자재 배송 지연으로 인해 이미 지연되었다고 명시하고 있습니다.`
                },
                {
                    id: "p7-t2-q175",
                    questionNo: 175,
                    text: "At 7:58 A.M., what does Mr. Juna most likely mean when he writes, \"Will do\"?",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "He will change a delivery time.",
                        "B": "He will purchase additional tools.",
                        "C": "He will hire workers to help at a site.",
                        "D": "He will share the results of a meeting."
                    },
                    correctAnswer: "D",
                    translation: "오전 7:58에 주나 씨가 \"Will do\"라고 쓴 의도는?",
                    explanation: `7시 55분에 주나 씨가 현장에서 네이선 씨를 만나 콘크리트 타설 시점을 논의할 것이라고 했고, 이에 대해 펜델 씨가 "계속해서 소식을 들려달라"고 요청했습니다. 이에 대한 답변이므로 회의 결과를 공유하겠다는 의미입니다.`
                }
                    ]
        }
                    ]
};
