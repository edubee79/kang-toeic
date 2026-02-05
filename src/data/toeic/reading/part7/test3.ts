import { Part7Test } from './types';

export const test3Data: Part7Test = {
    testId: 3,
    title: "Test 3",
    sets: [
        // Questions 147-148: Advertisement
        {
            id: "p7-t3-set1",
            setType: "Single",
            questionRange: "147-148",
            passages: [
                {
                    id: "p7-t3-s1-p1",
                    contextType: "P4_MARK",
                    docType: "ADVERTISEMENT",
                    title: "Medillo Shoes Celebrates Twenty Years in Cape Town!",
                    content: `246 Breda Place, Wynberg, Cape Town 7800\n021 555 0149 | www.medilloshoes.co.za\n\nDoes your job require you to stand all day long? Get the support you need! At Medillo Shoes, we specialise in comfortable, supportive footwear that is stylish and suitable for any business or medical setting.\n\nVisit us on 10 May to receive 20 percent off your purchase of one or more pairs of shoes during this anniversary event. Should you need assistance finding the best shoes for your professional needs, our footwear specialists will be on hand to help. Schedule a free consultation at www.medilloshoes.co.za to avoid a long wait.`,
                    translation: `메딜로 슈즈가 케이프타운에서 20주년을 맞이합니다!\n246 브레다 플레이스, 윈버그, 케이프타운 7800\n021 555 0149 | www.medilloshoes.co.za\n\n하루 종일 서 있어야 하는 직업을 갖고 계십니까? 필요한 도움을 받으세요! 메딜로 슈즈에서는 스타일리시하면서도 어떠한 비즈니스나 의료 환경에도 적합한 편안하고 지지력 좋은 신발을 전문으로 합니다.\n\n5월 10일에 매장을 방문해 기념일 행사 동안 한 켤레 이상의 신발을 구입하고 20퍼센트 할인을 받으세요. 직업상 필요하신 최고의 신발을 찾는 데 도움이 필요하시면 저희 신발 전문가가 도움을 드리기 위해 대기하고 있을 것입니다. 오래 기다리는 것을 피하시려면 www.medilloshoes.co.za에서 무료 상담 일정을 잡으세요.`
                }
            ],
            questions: [
                {
                    id: "p7-t3-q147",
                    questionNo: 147,
                    text: "What will happen at Medillo Shoes on May 10?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "All shoes will be discounted.",
                        "B": "Shop assistants will be hired.",
                        "C": "A shoe style will be discontinued.",
                        "D": "Operational hours will be extended."
                    },
                    correctAnswer: "A",
                    translation: "5월 10일 Medillo Shoes에서 무슨 일이 일어나는가?",
                    explanation: `두 번째 단락의 첫 문장에서 5월 10일에 매장을 방문해 기념일 행사 동안 한 켤레 이상의 신발을 구입하고 20퍼센트 할인을 받으라고 했으므로 (A)가 정답입니다.`
                },
                {
                    id: "p7-t3-q148",
                    questionNo: 148,
                    text: "What is indicated about Medillo Shoes?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It has been in business for ten years.",
                        "B": "It specializes in athletic footwear.",
                        "C": "It is located next to a medical center.",
                        "D": "It allows customers to make appointments."
                    },
                    correctAnswer: "D",
                    translation: "Medillo Shoes에 대해 무엇이 언급되어 있는가?",
                    explanation: `마지막 문장에서 '오래 기다리는 것을 피하시려면 무료 상담 일정(Schedule a free consultation)을 잡으라'고 안내한 것으로 보아 고객들이 상담 예약을 미리 잡을 수 있다는 것을 알 수 있으므로 (D)가 정답입니다.`
                }
            ]
        },
        // Questions 149-150: E-mail
        {
            id: "p7-t3-set2",
            setType: "Single",
            questionRange: "149-150",
            passages: [
                {
                    id: "p7-t3-s2-p1",
                    contextType: "P1_CORR",
                    docType: "EMAIL",
                    content: `To: Sales Team\nFrom: Neil Cullen\nDate: 10 April\nSubject: My schedule next week\n\nDear Team,\n\nI will be out of the office next week, from 15 to 19 April, attending the conference of the National Technology Alliance in Glasgow. While away, I will check e-mail and voice mail infrequently. For any urgent matters, please contact my assistant, Christina Choo. If you have a specific question about the Ezenx Industries account, please e-mail Mya Soroka. I will be back in the office on 22 April and will see all of you then.\n\nBest,\n\nNeil Cullen, Director of Sales and Marketing\nShallok Technology`,
                    translation: `수신: 영업팀\n발신: 닐 컬런\n날짜: 4월 10일\n제목: 저의 다음 주 일정\n\n팀원 여러분,\n\n저는 다음 주 4월 15일부터 19일까지 글래스고에서 열리는 국립 기술 연맹 컨퍼런스에 참석하느라 사무실을 비울 예정입니다. 출장 중에는 이메일과 음성 메일을 자주 확인하지 못할 것입니다. 급한 일이 생기면 제 조수인 크리스티나 추가에게 연락하십시오. 에젠엑스 인더스트리스 고객사에 대한 특정 문의사항이 있을 경우 마이아 소로카에게 이메일을 보내십시오. 저는 4월 22일에 사무실로 돌아오겠으며 그때 여러분 모두 뵙겠습니다.\n\n안녕히 계십시오.\n\n닐 컬런, 영업 및 마케팅 본부장\nShallok Technology`
                }
            ],
            questions: [
                {
                    id: "p7-t3-q149",
                    questionNo: 149,
                    text: "What is the purpose of the e-mail?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "To register for a conference",
                        "B": "To announce a new account",
                        "C": "To schedule a meeting",
                        "D": "To inform colleagues of an absence"
                    },
                    correctAnswer: "D",
                    translation: "이메일의 목적은 무엇인가?",
                    explanation: `닐 컬런이 다음 주에 컨퍼런스 참석으로 인해 자리를 비울 것임을 알리기 위해(inform colleagues of an absence) 쓴 이메일이므로 (D)가 정답입니다.`
                },
                {
                    id: "p7-t3-q150",
                    questionNo: 150,
                    text: "What is most likely true about Ms. Soroka?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "She will be traveling with Mr. Cullen.",
                        "B": "She works on the Ezenx Industries account.",
                        "C": "She is Ms. Choo's supervisor.",
                        "D": "She will be out of the office until April 22."
                    },
                    correctAnswer: "B",
                    translation: "Ms. Soroka에 대해 사실일 가능성이 높은 것은?",
                    explanation: `에젠엑스 인더스트리스(Ezenx Industries) 계정에 대해 특정 질문이 있으면 마이아 소로카에게 이메일을 보내라고 했으므로 그녀가 해당 계정 업무를 담당하고 있음을 알 수 있습니다.`
                }
            ]
        },
        // Questions 151-152: Notice
        {
            id: "p7-t3-set3",
            setType: "Single",
            questionRange: "151-152",
            passages: [
                {
                    id: "p7-t3-s3-p1",
                    contextType: "P2_OFFI",
                    docType: "NOTICE",
                    content: `CITY OF BRYANTON\nBuilding Permit Office\nNotice for residents and contractors working in Bryanton\n\nBeginning on Monday, July 1, the City of Bryanton's Building Permit Office, located at 912 Fir Avenue, will be open from Monday to Thursday, 9:00 A.M. to 5:00 P.M. Applications for permits will no longer be accepted on Fridays or Saturdays. The average processing time for permit applications will remain three business days. With this change, the city will lower its operating costs while maintaining its high standards of service for residents.`,
                    translation: `브라이언턴 시\n건축 허가국\n브라이언턴에 거주하거나 근무하는 계약업체를 위한 안내\n\n7월 1일 월요일부터 퍼 애비뉴 912번지에 위치한 브라이언턴 시 건축 허가국은 월요일부터 목요일, 오전 9시부터 오후 5시까지 운영될 예정입니다. 금요일이나 토요일에는 더 이상 허가 신청을 받지 않습니다. 허가 신청에 대한 평균 처리 시간은 영업일 기준 3일로 유지됩니다. 이번 변경을 통해 시는 거주자들을 위한 높은 서비스 수준을 유지하면서 운영 비용을 절감할 것입니다.`
                }
            ],
            questions: [
                {
                    id: "p7-t3-q151",
                    questionNo: 151,
                    text: "What change is the Building Permit Office making?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It is moving to a new location.",
                        "B": "It is simplifying the permit application process.",
                        "C": "It is reducing the number of days it will accept permit applications.",
                        "D": "It is increasing the processing time for permit applications."
                    },
                    correctAnswer: "C",
                    translation: "건축 허가국은 어떤 변경을 하고 있는가?",
                    explanation: `금요일이나 토요일에는 더 이상 허가 신청을 받지 않는다고 했으므로, 허가 신청을 받는 일수를 줄인다는 (C)가 정답입니다.`
                },
                {
                    id: "p7-t3-q152",
                    questionNo: 152,
                    text: "According to the notice, why is the change being made?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "To save the city money",
                        "B": "To attract more residents",
                        "C": "To improve the quality of service",
                        "D": "To decrease the number of new permit applications"
                    },
                    correctAnswer: "A",
                    translation: "안내문에 따르면 왜 이러한 변경이 이루어지는가?",
                    explanation: `마지막 문장에서 이번 변경을 통해 '운영 비용을 절감할 것(lower its operating costs)'이라고 했으므로 (A)가 정답입니다.`
                }
            ]
        },
        // Questions 153-155: Receipt/Confirmation
        {
            id: "p7-t3-set4",
            setType: "Single",
            questionRange: "153-155",
            passages: [
                {
                    id: "p7-t3-s4-p1",
                    contextType: "P5_FORM",
                    docType: "RECEIPT",
                    content: `https://www.riverthamestours.uk/order/confirmation\n\nRiver Thames Tours\nThank you for reserving a River Thames tour with us. We are eager to welcome you aboard. Each tour lasts 3 hours. Your tour includes a luncheon served at 1:00 p.m. Please consult our Web site for a menu. Should you have any dietary restrictions and like to request a special meal, please contact our customer experience manager, Martin Torma, at least 48 hours prior to your tour.\n\nThis reservation also entitles you to a 10 percent discount on a walking tour by Edgerton Walking Tours—just provide your confirmation code when booking.\n\nName: Lewis Califf\nPurchase Date: 18 April\nConfirmation Code: H102057\nTour Start: 1 May, 11:30 a.m.\nQuantity: 4\nTotal: £180.00\nPayment: Credit card ending in 1037\n\nPlease note: Boarding ends 10 minutes before departure time. Tours cannot be rescheduled.`,
                    translation: `https://www.riverthamestours.uk/order/confirmation\n\n리버 템스 투어\n저희 리버 템스 투어를 예약해 주셔서 감사합니다. 여러분의 승선을 진심으로 환영합니다. 각 투어는 3시간 동안 진행됩니다. 투어에는 오후 1시에 제공되는 점심 식사가 포함되어 있습니다. 메뉴는 저희 웹사이트를 참조하십시오. 식이 조절이 필요하여 특별 식단을 요청하시려면 최소 투어 48시간 전에 고객 경험 관리자인 마틴 토르마에게 연락해 주십시오.\n\n본 예약은 에저턴 워킹 투어의 도보 관광 시 10퍼센트의 할인 혜택도 제공합니다. 예약 시 확인 코드만 제시해 주십시오.\n\n이름: 루이스 칼리프\n구매일: 4월 18일\n확인 코드: H102057\n투어 시작: 5월 1일 오전 11시 30분\n수량: 4\n합계: 180파운드\n결제: 1037로 끝나는 신용카드\n\n주의사항: 승선은 출발 시간 10분 전에 종료됩니다. 투어 일정은 변경될 수 없습니다.`
                }
            ],
            questions: [
                {
                    id: "p7-t3-q153",
                    questionNo: 153,
                    text: "What is indicated about the river tour?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It is one hour long.",
                        "B": "It comes with a meal.",
                        "C": "It can be rescheduled.",
                        "D": "It sells out quickly."
                    },
                    correctAnswer: "B",
                    translation: "강 투어에 대해 명시된 것은?",
                    explanation: `첫 번째 단락의 네 번째 문장에서 '투어에는 오후 1시에 제공되는 점심 식사가 포함되어 있다(Your tour includes a luncheon)'고 했으므로 (B) 식사가 제공된다가 정답입니다.`
                },
                {
                    id: "p7-t3-q154",
                    questionNo: 154,
                    text: "How many tickets did Mr. Califf purchase?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "1",
                        "B": "3",
                        "C": "4",
                        "D": "7"
                    },
                    correctAnswer: "C",
                    translation: "칼리프 씨는 티켓을 몇 장 구매했는가?",
                    explanation: `하단의 결제 정보 중 수량(Quantity)이 4장으로 표시되어 있으므로 (C)가 정답입니다.`
                },
                {
                    id: "p7-t3-q155",
                    questionNo: 155,
                    text: "How can customers receive a discount on a walking tour?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "By making a reservation online",
                        "B": "By paying with a credit card",
                        "C": "By requesting a coupon from the captain",
                        "D": "By mentioning a confirmation code"
                    },
                    correctAnswer: "D",
                    translation: "고객은 어떻게 도보 관광 시 할인을 받을 수 있는가?",
                    explanation: `두 번째 단락에서 예약 시 확인 코드만 제시하면(just provide your confirmation code) 도보 관광 할인을 받을 수 있다고 했으므로 (D)가 정답입니다.`
                }
            ]
        },
        // Questions 156-157: Text Message Chain
        {
            id: "p7-t3-set5",
            setType: "Single",
            questionRange: "156-157",
            passages: [
                {
                    id: "p7-t3-s5-p1",
                    contextType: "P7_CONV",
                    docType: "CHAT_MESSAGE",
                    content: `Michiko Saunders [8:06 A.M.]\nHi, Jacob. Are you on your way to the office?\n\nJacob Kwon [8:08 A.M.]\nYes. I should be there in about 25 minutes.\n\nMichiko Saunders [8:10 A.M.]\nOK. I was just starting to print out the design proposal for the Dansby Group, but we've run out of paper. And we don't have another delivery of it coming until Wednesday.\n\nJacob Kwon [8:12 A.M.]\nI see an office supply store across the street. It just opened for the day.\n\nMichiko Saunders [8:13 A.M.]\nFantastic. Three packs of paper should be enough.\n\nJacob Kwon [8:15 A.M.]\nOK. By the way, when will the representatives from the Dansby Group be coming to our office? I could also pick up some coffee and snacks for that meeting.`,
                    translation: `미치코 손더스 [오전 8시 6분]\n안녕하세요, 제이콥. 사무실로 오시는 중인가요?\n\n제이콥 권 [오전 8시 8분]\n네, 25분 정도 뒤에 도착할 겁니다.\n\n미치코 손더스 [오전 8시 10분]\n네, 댄스비 그룹을 위한 디자인 제안서를 막 인쇄하기 시작했는데, 종이가 다 떨어졌어요. 수요일이나 되어야 배송이 더 될 거예요.\n\n제이콥 권 [오전 8시 12분]\n길 건너편에 사무용품점이 보입니다. 막 문을 열었네요.\n\n미치코 손더스 [오전 8시 13분]\n정말 잘됐네요. 용지 세 팩이면 충분할 거예요.\n\n제이콥 권 [오전 8시 15분]\n알겠습니다. 그런데 댄스비 그룹 직원들은 우리 사무실에 언제 오나요? 제가 회의를 위해 커피와 간식을 사 가도 될 것 같아요.`
                }
            ],
            questions: [
                {
                    id: "p7-t3-q156",
                    questionNo: 156,
                    text: "At 8:12 A.M., what does Mr. Kwon most likely mean when he writes, \"I see an office supply store across the street\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "He needs help finding a building.",
                        "B": "He can purchase some paper.",
                        "C": "He will look for a new printer.",
                        "D": "He is going to negotiate a delivery schedule."
                    },
                    correctAnswer: "B",
                    translation: "오전 8시 12분에 권 씨가 \"길 건너편에 사무용품점이 보입니다\"라고 쓴 의도는?",
                    explanation: `8시 10분에 손더스 씨가 종이가 다 떨어졌다고 하자, 8시 12분에 권 씨가 길 건너편에 사무용품점이 보인다고 했습니다. 이는 사무용품점에서 종이를 사 올 수 있다는 의도로 한 말이므로 (B) 용지를 구입할 수 있다가 정답입니다.`
                },
                {
                    id: "p7-t3-q157",
                    questionNo: 157,
                    text: "What will Ms. Saunders most likely do next?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Reschedule a meeting",
                        "B": "Prepare some refreshments",
                        "C": "Check on an arrival time",
                        "D": "Revise a design proposal"
                    },
                    correctAnswer: "C",
                    translation: "손더스 씨는 다음에 무엇을 할 것 같은가?",
                    explanation: `8시 15분에 권 씨가 댄스비 그룹 직원들이 언제 사무실에 도착하는지 물었으므로, 손더스 씨는 댄스비 직원들이 도착하는 시간을 확인해서 알려줄 것입니다. 따라서 (C)가 정답입니다.`
                }
            ]
        },
        // Questions 158-160: Letter
        {
            id: "p7-t3-set6",
            setType: "Single",
            questionRange: "158-160",
            passages: [
                {
                    id: "p7-t3-s6-p1",
                    contextType: "P1_CORR",
                    docType: "LETTER",
                    content: `Kipbank Business Services\n548 Sycamore Lake Road\nGreen Bay, WI 54301\n\nApril 2\n\nMadeline Omar\nPassionflower Interior Design\n1556 Deer Run Road\nGreen Bay, WI 54301\n\nDear Ms. Omar,\n\nA business owner's days are filled with juggling the wants, needs, and demands of customers, staff, and suppliers. — [1] —.\n\nLet Kipbank find the right solutions for your small business so that you can focus on your products and people. Kipbank offers checking accounts, corporate credit cards, business loans, and payroll and bookkeeping services. — [2] —. This fall, we will also add financial planners to our team to help you and your employees plan for your futures.\n\nWith our corporate credit cards, Kipbank customers can take advantage of money-saving offers from selected hotel, office supply, and air travel partners. — [3] —. These deals are automatically applied to qualified purchases. And the business owner can place spending limits on each card. — [4] —.\n\nPlease call us at 920-555-0122 to set up an appointment or just stop by when it is convenient. We look forward to meeting you and providing your enterprise with superior service.\n\nSincerely,\n\nThomas Piskorksi\nThomas Piskorksi, Kipbank Customer Concierge`,
                    translation: `킵뱅크 비즈니스 서비스\n시카모어 레이크 로 548\n그린베이, WI 54301\n\n4월 2일\n\n매들린 오마르\n패션플라워 인테리어 디자인\n디어 런 로 1556\n그린베이, WI 54301\n\n오마르 씨께,\n\n사업주의 하루하루는 고객, 직원 및 납품업체가 원하는 것, 필요로 하는 것, 요구하는 것들을 조율하는 일로 가득 차 있습니다. — [1] —.\n\n귀하께서 귀하의 제품과 사람에 집중하실 수 있도록 킵뱅크가 귀하의 소규모 사업에 적합한 해법을 찾아 드리겠습니다. 킵뱅크는 입출금 계좌, 법인 신용카드, 사업 대출, 급여 및 부기 서비스를 제공합니다. — [2] —. 올가을에는 귀하와 귀하의 직원들이 귀사의 미래를 계획할 수 있도록 돕기 위해 재무 설계사들도 저희 팀에 충원될 예정입니다.\n\n킵뱅크 고객은 당사의 법인 신용카드로 엄선된 호텔, 사무용품 및 항공 여행 제휴사로부터 비용 절감 혜택을 누릴 수 있습니다. — [3] —. 이러한 혜택은 적격한 구매에 자동으로 적용됩니다. 또한 사업주는 각 카드에 지출 제한을 설정할 수 있습니다. — [4] —.\n\n920-555-0122로 전화하셔서 예약을 하시거나 편하실 때 방문해 주시기 바랍니다. 저희는 귀하를 만나 뵙고 귀사에 우수한 서비스를 제공할 수 있기를 기대합니다.\n\n토마스 피스코르크시, 킵뱅크 고객 컨시어지`
                }
            ],
            questions: [
                {
                    id: "p7-t3-q158",
                    questionNo: 158,
                    text: "What is suggested about Ms. Omar?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "She is an accountant.",
                        "B": "She works for Mr. Piskorksi.",
                        "C": "She operates a small company.",
                        "D": "She is a Kipbank customer."
                    },
                    correctAnswer: "C",
                    translation: "오마르 씨에 대해 암시된 것은?",
                    explanation: `지문에서 킵뱅크가 귀하의 '소규모 사업(small business)'에 적합한 해법을 찾아주겠다고 한 것으로 보아 오마르 씨는 작은 회사를 운영하는 사업주임을 짐작할 수 있습니다.`
                },
                {
                    id: "p7-t3-q159",
                    questionNo: 159,
                    text: "What is stated about the credit cards?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "They come in a variety of colors.",
                        "B": "They require an annual fee.",
                        "C": "They include discounts on certain purchases.",
                        "D": "They can be used to buy personal items."
                    },
                    correctAnswer: "C",
                    translation: "신용카드에 대해 언급된 것은?",
                    explanation: `세 번째 단락에서 킵뱅크 법인 신용카드로 엄선된 파트너사로부터 비용 절감 혜택(money-saving offers)을 누릴 수 있으며, 이러한 혜택은 적격한 구매에 자동으로 적용된다고 했습니다. 따라서 특정 구매에 대한 할인(discounts)이 포함되어 있다는 (C)가 정답입니다.`
                },
                {
                    id: "p7-t3-q160",
                    questionNo: 160,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Everyday financial details only add more distractions.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "A",
                    translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"일상적인 재무사항은 집중을 방해하는 요소를 더할 뿐입니다.\"",
                    explanation: `주어진 문장의 '일상적인 재무사항'이 업무에 방해 요소를 더한다는 의미이므로, 그 앞에는 이미 업무를 방해할 수 있는 여러 복잡한 일들이 제시되어야 합니다. [1] 바로 앞에서 고객, 직원, 납품업체의 요구를 조율하는 바쁜 상황이 설명되었으므로 [1] 위치가 가장 적절합니다.`
                }
            ]
        },
        // Questions 161-163: Article
        {
            id: "p7-t3-set7",
            setType: "Single",
            questionRange: "161-163",
            passages: [
                {
                    id: "p7-t3-s7-p1",
                    contextType: "P3_MEDI",
                    docType: "ARTICLE",
                    title: "Business Review Article",
                    content: `OTTAWA (22 May)—Waldenstone Business Review has added a new category to its esteemed international business awards this year. The Waldenstone Corporate Prize is awarded to a business with the foresight to develop strategies that help ensure the company's long-term viability.\n\nThis year's award was presented to Carila Corporation, a major player in the electronics sector. Under the direction of CEO Atsak Kakar, Carila Corporation went from near bankruptcy to a high level of profitability in just three years.\n\n"Winning this award was very gratifying, not just for me but for the entire company," Mr. Kakar said upon receiving the award. "Everyone has worked extremely hard to get this company back on solid financial ground. The long-term solution has brought exceptional value to our shareholders."`,
                    translation: `오타와 (5월 22일)—월든스톤 비즈니스 리뷰는 올해 명망 높은 국제 비즈니스 상에 새로운 부문을 추가했습니다. 월든스톤 기업상은 회사의 장기적인 성공 가능성을 보장하는 데 도움이 되는 전략을 개발하는 선견지명이 있는 기업에 수여됩니다.\n\n올해의 상은 전자 제품 분야의 주요 업체인 카릴라 코퍼레이션에게 수여되었습니다. 최고 경영자인 앗사카 카카르의 지휘 아래, 카릴라 코퍼레이션은 불과 3년 만에 파산 직전에서 수익성이 매우 높은 수준으로 전환했습니다.\n\n"이 상을 수상하는 것은 저뿐만 아니라 회사 전체에 매우 기쁜 일이었습니다."라고 카카르 씨가 상을 수상하면서 말했습니다. "모두가 이 회사를 탄탄한 재정 기반으로 되돌리기 위해 무척 열심히 일했습니다. 장기적인 해결책은 우리 주주들에게 탁월한 가치를 가져다주었습니다."`
                }
            ],
            questions: [
                {
                    id: "p7-t3-q161",
                    questionNo: 161,
                    text: "What is the purpose of the article?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To profile a newly opened business",
                        "B": "To analyze a trend in the electronics industry",
                        "C": "To highlight a company's achievement",
                        "D": "To discuss changes to an employment contract"
                    },
                    correctAnswer: "C",
                    translation: "기사의 목적은 무엇인가?",
                    explanation: `기사는 왈든스톤 기업상을 수상한 카릴라 코퍼레이션의 업적(성공적인 수익 전환)을 강조하고 있으므로 (C)가 정답입니다.`
                },
                {
                    id: "p7-t3-q162",
                    questionNo: 162,
                    text: "What is suggested about Carila Corporation?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "It no longer develops electronics.",
                        "B": "It was once a struggling business.",
                        "C": "It has been unable to attract more clients.",
                        "D": "It is seeking to replace its CEO."
                    },
                    correctAnswer: "B",
                    translation: "Carila Corporation에 대해 암시된 것은?",
                    explanation: `두 번째 단락에서 카릴라 코퍼레이션이 '파산 직전(near bankruptcy)'에서 수익성 높은 수준으로 전환했다고 했으므로, 한때 경영난을 겪었음을 알 수 있습니다.`
                },
                {
                    id: "p7-t3-q163",
                    questionNo: 163,
                    text: "In the third paragraph, the word \"solution\" is closest in meaning to",
                    classification: "P7_VOCABULARY",
                    options: {
                        "A": "mixture",
                        "B": "proof",
                        "C": "statement",
                        "D": "answer"
                    },
                    correctAnswer: "D",
                    translation: "세 번째 단락의 'solution'과 의미가 가장 가까운 단어는?",
                    explanation: `문맥상 회사의 재정 문제를 해결하기 위한 '해결책' 또는 '답'을 의미하므로 (D) answer가 정답입니다.`
                }
            ]
        },
        // Questions 164-167: Advertisement
        {
            id: "p7-t3-set8",
            setType: "Single",
            questionRange: "164-167",
            passages: [
                {
                    id: "p7-t3-s8-p1",
                    contextType: "P4_MARK",
                    docType: "ADVERTISEMENT",
                    title: "Commbolt is for Everyone!",
                    content: `As a Commbolt customer, you've come to expect the best in reliable high-speed Internet, straightforward pricing options, and top-notch customer service from friendly professionals who are responsive to your every need. — [1] —. Unlike the competition, we promise to never lock you into inflexible contracts or suddenly raise your monthly bill without notice.\n\nAt Commbolt, we know you have options when it comes to choosing an Internet service provider. — [2] —. To show our gratitude for your loyalty, we are offering a special limited-time referral bonus.\n\nThe way it works is simple. — [3] —. You can use e-mail, social media, or even text messages to tell everyone about Commbolt. When a new user signs up using your code, each of you will receive a monetary credit. Receive $10 when new referrals sign up for a monthly plan at $45, and receive $20 for a plan costing $60 per month. The best news? — [4] —. There is no limit to the credits; the more people you sign up, the more money you get.\n\nYour unique code is XA4R177.`,
                    translation: `모두를 위한 콤볼트!\n\n콤볼트 고객으로서 고객님은 안정적인 초고속 인터넷, 명확한 가격 옵션 그리고 모든 요구에 즉각 대응하는 친절한 전문가의 우수한 고객 서비스에 있어 최고를 기대하고 계실 것입니다. — [1] —. 경쟁사와 달리 저희는 고객님을 절대 유동성 없는 약정에 가두거나 예고 없이 갑자기 월간 청구 요금을 올리지 않을 것을 약속합니다.\n\n콤볼트에서는 인터넷 서비스 공급업체를 고르는 데 있어 여러분께 선택권이 있다는 점을 잘 알고 있습니다. — [2] —. 고객님의 애정에 보답하고자 저희는 이번에 한시적인 추천 보너스를 제공하고 있습니다.\n\n추천 방식은 간단합니다. — [3] —. 고유 추천 코드를 친구 및 가족들과 공유하세요. 이메일, 소셜 미디어 또는 문자 메시지를 사용하여 모두에게 콤볼트에 대해 알리면 됩니다. 새로운 사용자가 고객님의 코드를 사용하여 가입하면 고객님과 신규 가입자는 각각 현금 적립금을 받게 됩니다. 신규 추천인이 45달러 월 요금제에 가입하면 10달러를 받고, 월 60달러 요금제 가입 시에는 20달러를 받으세요. 가장 좋은 소식은요? — [4] —. 적립금 한도가 없으므로 더 많은 사람을 가입시킬수록 더 많은 금액을 받게 됩니다.\n\n고객님의 고유 코드는 XA4R177입니다.`
                }
            ],
            questions: [
                {
                    id: "p7-t3-q164",
                    questionNo: 164,
                    text: "What Commbolt benefit does the advertisement mention?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Its low prices",
                        "B": "Its excellent customer service",
                        "C": "Its lifetime contracts",
                        "D": "Its convenient installation schedule"
                    },
                    correctAnswer: "B",
                    translation: "광고에서 언급된 Commbolt의 장점은?",
                    explanation: `첫 번째 단락의 첫 문장에서 콤볼트 고객으로서 '친절한 전문가의 우수한 고객 서비스(top-notch customer service)'에 있어 최고를 기대할 것이라고 했으므로 (B) 우수한 고객 서비스(excellent customer service)가 정답입니다.`
                },
                {
                    id: "p7-t3-q165",
                    questionNo: 165,
                    text: "What is the maximum amount a customer can earn when one referred person signs up for service?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "$10.00",
                        "B": "$20.00",
                        "C": "$45.00",
                        "D": "$60.00"
                    },
                    correctAnswer: "B",
                    translation: "추천받은 사람 한 명이 서비스에 가입할 경우 고객이 얻을 수 있는 최대 금액은?",
                    explanation: `세 번째 단락에서 신규 추천인이 월 요금제에 가입하면 10달러를 받고, 월 60달러 요금제 가입 시에는 20달러를 받는다고 했습니다. 따라서 추천인 한 명에 대해 얻을 수 있는 최대 금액은 20달러인 (B)가 정답입니다.`
                },
                {
                    id: "p7-t3-q166",
                    questionNo: 166,
                    text: "What is true about the Commbolt promotion?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It may not be posted on social media.",
                        "B": "It does not provide credit for more than three referrals.",
                        "C": "It is expected to run for a full year.",
                        "D": "It rewards both new and existing customers."
                    },
                    correctAnswer: "D",
                    translation: "콤볼트 판촉 행사에 대해 사실인 것은?",
                    explanation: `세 번째 단락에서 새로운 사용자가 고객님의 코드를 사용하여 가입하면 '고객(기존 고객)과 신규 가입자는 각각 현금 적립금을 받게 된다'고 했으므로 신규 및 기존 고객 모두에게 혜택을 준다는 (D)가 정답입니다.`
                },
                {
                    id: "p7-t3-q167",
                    questionNo: 167,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Just share your unique referral code with friends and family.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "C",
                    translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"고유 추천 코드를 친구 및 가족들과 공유하세요.\"",
                    explanation: `추천 방식이 간단하다고 설명한 뒤, 실제 방법인 '코드 공유'가 뒤따르는 [3] 위치가 가장 적절합니다.`
                }
            ]
        },
        // Questions 168-171: Web page
        {
            id: "p7-t3-set9",
            setType: "Single",
            questionRange: "168-171",
            passages: [
                {
                    id: "p7-t3-s9-p1",
                    contextType: "P4_MARK",
                    docType: "WEB_PAGE",
                    title: "Sarah's Catering - Web Page",
                    content: `https://www.sarahscatering.com\n\nSarah's Catering—What You Serve Matters\n\nSarah's Catering is a family-owned-and-operated company. The company was founded ten years ago with a mission to provide the highest quality catering services to our community. We work closely with local growers and use only the freshest ingredients. Our menu items can be adapted to the client's taste or dietary needs. For example, we can prepare vegetarian, vegan, and gluten-free options.\n\nWe provide catering for birthday parties, wedding receptions, corporate meetings, business holiday parties, and many other types of events. From planning the menu and food preparation to engaging servers and cleanup staff for the event, Sarah's Catering has it covered.\n\nSarah's Catering can cater lunches in your office for a minimum of twenty people. We offer delicious options to make your group's meal a satisfying experience.\n\nWe're here to serve you! Ordering is fast and simple. Visit www.sarahscatering.com/quote to request a cost estimate for your next event.\n\nWhat people are saying\n"Sarah's Catering was very easy to work with, and the food was delicious! Everyone in the office commented on how good the food was." — Glen Liu, Perkins Real Estate\n\n"All the food was perfect, and the staff was the best." — Annie Pierce, Kania Marketing, Inc.`,
                    translation: `https://www.sarahscatering.com\n\n사라스 케이터링 — 어떤 음식을 제공하는지가 중요합니다\n\n사라스 케이터링은 가족이 소유하고 운영하는 회사입니다. 회사는 10년 전 우리 지역에 최고 품질의 출장 요리 서비스를 제공한다는 사명 하에 설립되었습니다. 저희는 지역 재배자들과 긴밀히 협력하며 가장 신선한 재료만을 사용합니다. 저희 메뉴 항목은 고객의 취향이나 식이 요구에 맞게 조정될 수 있습니다. 예를 들어, 채식주의자와 비건, 글루텐 프리 옵션을 준비할 수 있습니다.\n\n우리는 생일 파티, 결혼 피로연, 기업 회의, 사업 연말 파티 그리고 기타 다양한 행사를 위한 출장 요리를 제공합니다. 메뉴 계획과 음식 준비에서부터 행사를 위한 서빙 종업원과 청소 직원 동원에 이르기까지, 사라스 케이터링이 모두 처리해 드립니다.\n\n사라스 케이터링은 귀하의 사무실에서 최소 인원 20명부터 점심 식사 제공이 가능합니다. 우리는 단체 고객의 식사가 만족스러운 경험이 되도록 맛있는 옵션을 제공합니다.\n\n귀하께 음식을 제공하기 위해 우리가 여기 있습니다! 주문은 빠르고 간편합니다. 다음 행사에 대한 비용 견적을 요청하려면 www.sarahscatering.com/quote를 방문하세요.\n\n사람들의 평가\n"사라스 케이터링은 함께 일을 진행하기에 매우 수월했고 음식도 맛있었습니다! 사무실에 있는 이들 모두가 음식이 얼마나 좋았는지에 대해 한마디씩 했습니다." — 글렌 리우, 퍼킨스 부동산\n\n"모든 음식이 완벽했고 직원들도 최고였어요." — 애니 피어스, 카니아 마케팅 주식회사`
                }
            ],
            questions: [
                {
                    id: "p7-t3-q168",
                    questionNo: 168,
                    text: "What is indicated about Sarah's Catering?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It uses locally sourced products.",
                        "B": "It is twenty years old.",
                        "C": "It specializes mainly in weddings.",
                        "D": "It has an on-site dining room."
                    },
                    correctAnswer: "A",
                    translation: "사라스 케이터링에 대해 명시된 것은?",
                    explanation: `지문에서 사라스 케이터링은 '지역 재배자들과 긴밀히 협력하며(work closely with local growers)' 가장 신선한 재료를 사용한다고 했으므로 현지에서 조달한 제품을 사용한다는 (A)가 정답입니다.`
                },
                {
                    id: "p7-t3-q169",
                    questionNo: 169,
                    text: "In the first paragraph, the word \"taste\" is closest in meaning to",
                    classification: "P7_VOCABULARY",
                    options: {
                        "A": "preference",
                        "B": "sample",
                        "C": "experience",
                        "D": "flavor"
                    },
                    correctAnswer: "A",
                    translation: "첫 번째 단락의 'taste'와 의미가 가장 가까운 단어는?",
                    explanation: `문맥상 고객의 '취향', 즉 고객이 선호하는 것(preference)이라는 뜻으로 쓰였으므로 (A)가 정답입니다.`
                },
                {
                    id: "p7-t3-q170",
                    questionNo: 170,
                    text: "What is mentioned as a service provided by Sarah's Catering?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Entertainment planning",
                        "B": "Cooking demonstrations",
                        "C": "Cleanup after meals",
                        "D": "Rentals of tables and chairs"
                    },
                    correctAnswer: "C",
                    translation: "사라스 케이터링에 의해 제공되는 서비스로 언급된 것은?",
                    explanation: `메뉴 계획과 음식 준비뿐만 아니라 행사를 위한 '청소 직원(cleanup staff)' 동원까지 모두 처리한다고 했으므로 (C) 식후 청소가 정답입니다.`
                },
                {
                    id: "p7-t3-q171",
                    questionNo: 171,
                    text: "Who most likely is Mr. Liu?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "An employee of Sarah's Catering",
                        "B": "A professional event organizer",
                        "C": "A customer of Sarah's Catering",
                        "D": "An assistant at a marketing firm"
                    },
                    correctAnswer: "C",
                    translation: "리우 씨는 누구일 것 같은가?",
                    explanation: `'사람들의 평가'에서 글렌 리우 씨가 사라스 케이터링과 함께 일하는 것이 수월했고 음식도 맛있었다고 언급한 것으로 보아 사라스 케이터링을 이용했던 고객님임을 알 수 있어 (C)가 정답입니다.`
                }
            ]
        },
        // Questions 172-175: Online Chat
        {
            id: "p7-t3-set10",
            setType: "Single",
            questionRange: "172-175",
            passages: [
                {
                    id: "p7-t3-s10-p1",
                    contextType: "P7_CONV",
                    docType: "CHAT_MESSAGE",
                    content: `Marcus Steuber [10:41 A.M.]\nAre we still planning to have the author video conference today? I haven't yet received a meeting invitation.\n\nBrinda Rajan [10:42 A.M.]\nI do have the meeting on my calendar. Let me forward it to you; it appears our editorial assistant didn't include you.\n\nMarcus Steuber [10:43 A.M.]\nThanks, I just received it. The timing doesn't work for me, though. I have an appointment with Hazel Luong to discuss the printing issues at our Singapore plant.\n\nBrinda Rajan [10:44 A.M.]\nCould you postpone that? The new author we're working with really needs your guidance on the final book design and formatting. You're our most knowledgeable production editor.\n\nMarcus Steuber [10:45 A.M.]\nLet me check with my supervisor. I'll add Mr. Borg to our chat.\n\nJoshua Borg [10:47 A.M.]\nHi, team. Marcus, you should prioritize your appointment with Hazel. I'll be visiting the plant next week, and we need to have some viable solutions before then.\n\nBrinda Rajan [10:48 A.M.]\nOK, I'll contact Ms. Benoit to find out if she can meet later in the day, then.\n\nMarcus Steuber [10:48 A.M.]\nThat would work. I'm free between 4 and 6 P.M.`,
                    translation: `마커스 스토이버 [오전 10시 41분]\n오늘 작가 화상 회의를 여전히 할 계획인가요? 제가 아직 회의 초대를 받지 못했어요.\n\n브린다 라잔 [오전 10시 42분]\n제 일정표에는 회의가 있어요. 전달해 드릴게요. 우리 편집 보조가 당신을 빠트린 모양이네요.\n\n마커스 스토이버 [오전 10시 43분]\n감사합니다. 방금 받았어요. 그런데 저는 시간이 안 맞네요. 헤이즐 루옹과 싱가포르 공장의 인쇄 문제를 논의하기 위해 약속이 되어 있거든요.\n\n브린다 라잔 [오전 10시 44분]\n그걸 연기하실 수 있을까요? 저희와 작업 중인 새 작가는 최종 도서 디자인과 서식 설정에 대해 당신의 지도가 정말 필요해요. 당신이 우리 제작 편집자 중 가장 박식하시잖아요.\n\n마커스 스토이버 [오전 10시 45분]\n제 상관에게 확인해 볼게요. 보그 씨를 우리 채팅에 초대하겠습니다.\n\n조슈아 보그 [오전 10시 47분]\n안녕하세요, 팀 여러분. 마커스, 헤이즐와의 약속을 우선시해야 합니다. 제가 다음 주에 공장을 방문할 예정이라 그전까지 실행 가능한 해결책이 필요합니다.\n\n브린다 라잔 [오전 10시 48분]\n알겠습니다. 그럼 제가 베노이트 씨에게 연락해서 그날 늦게 만날 수 있는지 알아보겠습니다.\n\n마커스 스토이버 [오전 10시 48분]\n그거면 되겠네요. 저는 오후 4시에서 6시 사이에 시간이 됩니다.`
                }
            ],
            questions: [
                {
                    id: "p7-t3-q172",
                    questionNo: 172,
                    text: "Why does Mr. Steuber write to Ms. Rajan?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "To invite her to a professional event",
                        "B": "To check on the status of a meeting",
                        "C": "To make travel plans for a business trip",
                        "D": "To ask about an assistant's performance"
                    },
                    correctAnswer: "B",
                    translation: "스토이버 씨가 라잔 씨에게 메시지를 쓴 이유는?",
                    explanation: `스토이버 씨가 오늘 작가 화상 회의를 여전히 할 계획인지 묻고, 회의 초대를 받지 못했다는 점을 언급하며 회의 진행 여부를 확인하고 있으므로 (B) 회의 진행 상태를 확인하려고가 정답입니다.`
                },
                {
                    id: "p7-t3-q173",
                    questionNo: 173,
                    text: "At 10:45 A.M., what does Mr. Steuber most likely mean when he writes, \"Let me check with my supervisor\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "He needs final approval on a book design.",
                        "B": "He wants advice about changing an appointment.",
                        "C": "He needs access to the corporate calendar.",
                        "D": "He is uncertain how to add people to a chat."
                    },
                    correctAnswer: "B",
                    translation: "오전 10시 45분에 스토이버 씨가 \"제 상관에게 확인해 볼게요\"라고 쓴 의도는?",
                    explanation: `라잔 씨가 화상 회의 참석을 위해 기존 약속(싱가포르 공장 인쇄 문제 논의)을 연기할 수 있는지 묻자, 스토이버 씨가 상관에게 확인해 보겠다고 답변했습니다. 이는 기존 약속을 변경해도 될지에 대한 조언(advice)을 구하겠다는 의미이므로 (B)가 정답입니다.`
                },
                {
                    id: "p7-t3-q174",
                    questionNo: 174,
                    text: "Who most likely is Ms. Benoit?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "A writer",
                        "B": "A designer",
                        "C": "A production editor",
                        "D": "A printing plant manager"
                    },
                    correctAnswer: "A",
                    translation: "베노이트 씨는 누구일 것 같은가?",
                    explanation: `라잔 씨가 "저희와 작업 중인 새 작가(the new author)는 당신의 지도가 정말 필요하다"고 언급한 뒤, 화상 회의 일정을 조정하기 위해 "베노이트 씨에게 연락해보겠다"고 했습니다. 따라서 베노이트 씨는 이들이 언급한 '새 작가'임을 추론할 수 있어 (A) 작가가 정답입니다.`
                },
                {
                    id: "p7-t3-q175",
                    questionNo: 175,
                    text: "What will Ms. Rajan most likely do next?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Propose a solution to a printing problem",
                        "B": "Prepare to visit the Singapore plant",
                        "C": "Attend a meeting with Mr. Vogl",
                        "D": "Reschedule a video conference"
                    },
                    correctAnswer: "D",
                    translation: "라잔 씨는 다음에 무엇을 할 것 같은가?",
                    explanation: `라잔 씨가 마지막 메시지에서 베노이트 씨에게 연락해 만날 수 있는지 알아보겠다고 했으므로, 화상 회의 일정을 재조정(Reschedule)할 것임을 알 수 있습니다.`
                }
            ]
        }
    ]
};
