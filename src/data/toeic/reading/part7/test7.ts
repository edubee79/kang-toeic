import { Part7Test } from './types';
export const test7Data: Part7Test = {
    testId: 7,
    title: "Test 7",
    sets: [
        // Questions 147-148: Notice
        {
            id: "p7-t7-set1",
            questionRange: "147-148",
            passages: [
                {
                    id: "p7-t7-s1-p1",
                    contextType: "P2",
                    docType: "NOTICE",
                    title: "Notice",
                    content: `NOTICE\n\nAs part of our routine maintenance of Selino Apartments, all public areas of our building will be painted according to the following schedule:\n\n• Stairwells, first and second floors: 12 April\n• Hallways, first and second floors: 13 April\n• Stairwells, third and fourth floors: 14 April\n• Hallways, third and fourth floors: 15 April\n\nElevators will be available for use during this period. Use caution, and do not touch wet paint.\n\nSelino Management`,
                    translation: `공지\n\n셀리노 아파트의 정기적인 유지 보수의 일환으로, 저희 건물의 모든 공용 구역은 다음 일정에 따라 페인트를 칠할 예정입니다:\n\n• 계단실, 1층 및 2층: 4월 12일\n• 복도, 1층 및 2층: 4월 13일\n• 계단실, 3층 및 4층: 4월 14일\n• 복도, 3층 및 4층: 4월 15일\n\n이 기간 동안 엘리베이터는 이용 가능합니다. 주의해 주시고, 마르지 않은 페인트에 손대지 마십시오.\n\n셀리노 관리소`
                }
                    ],
            questions: [
                {
                    id: "p7-t7-q147",
                    questionNo: 147,
                    text: "For whom is the notice most likely intended?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "Painting contractors",
                        "B": "Elevator repair workers",
                        "C": "Graphic artists",
                        "D": "Apartment residents"
                    },
                    correctAnswer: "D",
                    translation: "공지는 누구를 대상으로 하는 것 같은가?",
                    explanation: `첫 문장에서 셀리노 아파트의 정기적인 유지 보수의 일환으로 건물의 모든 공용 구역에 페인트칠을 할 예정(As part of our routine maintenance of Selino Apartments, all public areas of our building will be painted...)이라고 공지하고 있으므로 아파트 주민들에게 알리는 글임을 알 수 있습니다. 따라서 정답은 (D)입니다.`
                },
                {
                    id: "p7-t7-q148",
                    questionNo: 148,
                    text: "On what day will the work on all stairwells be completed?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "April 12",
                        "B": "April 13",
                        "C": "April 14",
                        "D": "April 15"
                    },
                    correctAnswer: "C",
                    translation: "모든 층의 계단에 대한 작업은 언제 완료될 것 같은가?",
                    explanation: `페인트칠 일정의 첫 번째 항목에 1층과 2층 계단이 4월 12일(Stairwells, first and second floors: 12 April), 세 번째 항목에 3층과 4층 계단이 4월 14일(Stairwells, third and fourth floors: 14 April)에 작업한다고 나와 있습니다. 따라서 계단에 대한 모든 작업이 완료되는 때는 4월 14일이므로 (C)가 정답입니다.`
                }
                    ]
        },
        // Questions 149-150: Coupon
        {
            id: "p7-t7-set2",
            questionRange: "149-150",
            passages: [
                {
                    id: "p7-t7-s2-p1",
                    contextType: "P5",
                    docType: "FORM",
                    title: "Coupon",
                    content: `JIN-HWA GRILL\n\nServing the finest Korean cuisine in Northern California for over 30 years.\n\nCelebrate the grand reopening of our newly redesigned restaurant on Lakeside Drive! Visit us during the month of May, purchase any two dinner entrées, and enjoy a complimentary appetizer platter.\n\nValid only at Jin-Hwa Grill, 4104 Lakeside Drive, Oakland, CA. Coupons do not apply to take-out orders. For a list of all our locations, hours of operation, and menus, visit www.jin-hwagrill.com.`,
                    translation: `진화 그릴\n\n북부 캘리포니아에서 30년 넘게 최고급 한국 요리를 제공하고 있습니다.\n\n레이크사이드 로드에서 새롭게 단장한 레스토랑의 재개장을 축하하러 오세요! 5월 한 달 동안 저녁 식사 2인분을 드시고 무료 애피타이저 플래터를 즐기세요.\n\n캘리포니아주 오클랜드 레이크사이드 로드 4104, 진화 그릴에서만 사용 가능합니다. 쿠폰은 테이크아웃 주문에는 적용되지 않습니다. 전 지점 목록, 영업시간, 메뉴를 보시려면 www.jin-hwagrill.com을 방문하세요.`
                }
                    ],
            questions: [
                {
                    id: "p7-t7-q149",
                    questionNo: 149,
                    text: "How can customers receive the coupon's benefit?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "By placing a take-out order",
                        "B": "By spending a minimum amount",
                        "C": "By ordering two meals",
                        "D": "By attending an opening event"
                    },
                    correctAnswer: "C",
                    translation: "쿠폰으로 혜택을 받을 수 있는 방법은?",
                    explanation: `첫 번째 단락의 두 번째 문장에서 5월 한 달 동안 저녁 식사 2인분을 드시고 무료 애피타이저 플래터를 즐기라(purchase any two dinners and enjoy a complimentary...)고 했습니다. 따라서 쿠폰을 사용하려면 식사 2인분을 주문해야 하므로 (C)가 정답입니다.`
                },
                {
                    id: "p7-t7-q150",
                    questionNo: 150,
                    text: "What is indicated about Jin-Hwa Grill?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It is celebrating an anniversary.",
                        "B": "It has more than one location.",
                        "C": "It recently began serving Korean food.",
                        "D": "It has expanded its hours of operation."
                    },
                    correctAnswer: "B",
                    translation: "진화 그릴에 대해 명시된 것은?",
                    explanation: `두 번째 단락의 마지막 문장에서 '전 지점 목록(a list of all our locations)'을 보려면 웹사이트를 방문하라고 했으므로, 한 곳 이상의 매장을 가지고 있음을 알 수 있습니다. 따라서 (B)가 정답입니다.`
                }
                    ]
        },
        // Questions 151-152: E-mail
        {
            id: "p7-t7-set3",
            questionRange: "151-152",
            passages: [
                {
                    id: "p7-t7-s3-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    title: "Email",
                    content: `To: Bindu Gill <bgill@opaimail.com>\nFrom: Nila Balay <n_balay@celebrate.com>\nDate: 18 June\nSubject: Follow-up\n\nDear Mr. Gill,\n\nRegarding our telephone conversation this morning, here in writing is the change I would like to make to Saturday's delivery.\n\nI am requesting that you now deliver the flowers for the office party to the Grand Dining Room at the Collett Hotel instead of the Saji Banquet Hall. I am sorry for the last-minute change, but I was informed by the Saji Banquet Hall manager that their electrical system requires a weekend repair, and I was forced to reserve a different venue. My office party cannot be postponed.\n\nI would appreciate it if the delivery could be made by 4:00 P.M.\n\nNila Balay`,
                    translation: `수신: 빈두 길 <bgill@opaimail.com>\n발신: 닐라 발레이 <n_balay@celebrate.com>\n날짜: 6월 18일\n제목: 후속 이메일\n\n길 씨께,\n\n오늘 오전 전화 통화와 관련하여, 토요일 배송에 변경하고 싶은 사항을 서면으로 알려드립니다.\n\n사지 연회장 대신에 콜렛 호텔의 그랜드 다이닝 룸으로 꽃을 배송해 주실 것을 요청합니다. 이렇게 막바지에 변경하는 것이 죄송합니다만, 사지 연회장 관리자로부터 주말에 수리가 필요한 전기 시스템 고장에 대해 연락를 받았습니다. 제가 계획하고 있는 사무실 파티는 연기할 수 없었기 때문에 이 다른 장소를 예약해야 했습니다.\n\n오후 4시까지 배송을 받을 수 있으면 감사하겠습니다.\n\n닐라 발레이`
                }
                    ],
            questions: [
                {
                    id: "p7-t7-q151",
                    questionNo: 151,
                    text: "Why did Ms. Balay send the e-mail to Mr. Gill?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "To reschedule a weekend business trip",
                        "B": "To invite him to an office party",
                        "C": "To request the services of an electrician",
                        "D": "To confirm a set of spoken instructions"
                    },
                    correctAnswer: "D",
                    translation: "발레이 씨가 길 씨에게 이메일을 보낸 이유는?",
                    explanation: `첫 문장에서 오늘 오전 전화 통화와 관련하여 토요일 배송에 변경하고 싶은 사항을 서면으로 알린다(Regarding our telephone conversation ~ here in writing is the change...)고 했으므로, 전화 통화로 이야기했던 주문 관련 사항을 서면으로 확인하기 위해 이메일을 보낸다는 것을 알 수 있습니다. 따라서 정답은 (D)입니다.`
                },
                {
                    id: "p7-t7-q152",
                    questionNo: 152,
                    text: "What does Ms. Balay expect to receive on Saturday afternoon?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Flowers",
                        "B": "Admission tickets",
                        "C": "A signed contract",
                        "D": "An updated cost estimate"
                    },
                    correctAnswer: "A",
                    translation: "발레이 씨가 토요일 오후에 받기로 예상하는 것은?",
                    explanation: `두 번째 단락에서 사지 연회장 대신 콜렛 호텔로 꽃을 배송해 달라(deliver the flowers)고 요청했습니다. 따라서 발레이 씨가 토요일에 배송받을 것은 꽃임을 알 수 있습니다. 따라서 정답은 (A)입니다.`
                }
                    ]
        },
        // Questions 153-154: Online Chat
        {
            id: "p7-t7-set4",
            questionRange: "153-154",
            passages: [
                {
                    id: "p7-t7-s4-p1",
                    contextType: "P7",
                    docType: "CHAT_MESSAGE",
                    title: "Online Chat",
                    content: `Ae-cha Kim [9:16 A.M.]\nHello. I'm having a problem with an item I ordered from the Winterwear Web site.\n\nKelvin Wong [9:18 A.M.]\nHello! How can I help you?\n\nAe-cha Kim [9:20 A.M.]\nWell, I ordered some gloves two weeks ago, and they still haven't arrived.\n\nKelvin Wong [9:21 A.M.]\nI'm sorry. Did you receive an order number?\n\nAe-cha Kim [9:22 A.M.]\nIt's ADF193.\n\nKelvin Wong [9:23 A.M.]\nThank you.\n\nKelvin Wong [9:26 A.M.]\nThis is very unusual. The system is showing that the order was fulfilled. I'm not sure why it hasn't left the warehouse yet. We'll send out the gloves via rush shipping at no extra charge.\n\nAe-cha Kim [9:27 A.M.]\nThat would be great! Thank you!`,
                    translation: `김애차 [오전 9:16] 안녕하세요. 윈터웨어 웹사이트에서 주문한 상품에 문제가 있습니다.\n\n켈빈 웡 [오전 9:18] 안녕하세요, 무엇을 도와드릴까요?\n\n김애차 [오전 9:20] 음, 2주 전에 장갑을 주문했는데 아직 도착하지 않았습니다.\n\n켈빈 웡 [오전 9:21] 죄송합니다. 주문 번호는 받으셨나요?\n\n김애차 [오전 9:22] ADF193입니다.\n\n켈빈 웡 [오전 9:23] 감사합니다.\n\n켈빈 웡 [오전 9:26] 이 일은 매우 드문 일입니다. 시스템에는 주문이 처리되었다고 나오네요. 왜 물품이 아직 창고에서 출고되지 않았는지 모르겠습니다. 추가 요금 없이 다른 장갑을 급송으로 보내 드리겠습니다.\n\n김애차 [오전 9:27] 그렇게 해 주시면 좋겠네요! 감사합니다!`
                }
                    ],
            questions: [
                {
                    id: "p7-t7-q153",
                    questionNo: 153,
                    text: "What problem is Ms. Kim having?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "She received the wrong item.",
                        "B": "An order has not arrived.",
                        "C": "An item was damaged in transport.",
                        "D": "An item was missing from an order."
                    },
                    correctAnswer: "B",
                    translation: "김 씨가 가지고 있는 문제는?",
                    explanation: `오전 9시 20분에 김 씨가 2주 전에 장갑을 주문했는데 아직 도착하지 않았다(ordered some gloves two weeks ago, and they still haven't arrived)고 했으므로 (B)가 정답입니다.`
                },
                {
                    id: "p7-t7-q154",
                    questionNo: 154,
                    text: "At 9:26 A.M., what does Mr. Wong most likely mean when he writes, \"This is very unusual\"?",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "He is frustrated by a slow computer system.",
                        "B": "He is sorry that Ms. Kim had a long wait.",
                        "C": "He is surprised by a warehouse problem.",
                        "D": "He is confused about which style of gloves was ordered."
                    },
                    correctAnswer: "C",
                    translation: "오전 9시 26분에 웡 씨가 \"이런 일은 매우 드문 일입니다\"라고 쓴 의도는?",
                    explanation: `오전 9시 26분에 웡 씨가 이런 일은 매우 드문 일(This is very unusual)이라고 한 직후, 시스템에는 주문이 처리되었다고 나온다(The system is showing that the order was fulfilled)면서 왜 물품이 아직 창고에서 출고되지 않았는지 모르겠다(I'm not sure why it hasn't left the warehouse yet)고 한 것으로 보아 창고에서 제품이 제대로 출고되지 않은 예상치 못한 문제에 대해 놀라움을 표현하려는 의도로 한 말임을 알 수 있습니다. 따라서 (C)가 정답입니다.`
                }
                    ]
        },
        // Questions 155-157: E-mail
        {
            id: "p7-t7-set5",
            questionRange: "155-157",
            passages: [
                {
                    id: "p7-t7-s5-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    title: "Email",
                    content: `To: Jessica Yu <jyu@myemail.com>\nFrom: Customer Service <cs@velascobank.com>\nDate: July 15\nSubject: Account security\n\nDear Ms. Yu,\n\nFor security reasons, we need our customers to review their contact information with Velasco Bank every year. This year, the deadline for reviewing your contact information is July 29. You can do this in one of two ways.\n\nFirst, you may log in to our Web site at www.velascobank.com to check your information. Simply log in to your digital banking account and go to "Settings" then "Contact Information." Please verify that your phone number and e-mail address are up-to-date and select the one you would like to be your primary contact method. — [1] —. If you are not yet enrolled in digital banking, we recommend doing so online at www.velascobank.com/myaccount. — [2] —.\n\nAlternatively, you may visit any of our local branches and speak with a representative. — [3] —. If you have any questions, please call 410-555-0156. Representatives are available Monday through Friday from 7:00 A.M. to 5:00 P.M. — [4] —.\n\nThank you for banking with us.\n\nVelasco Bank Customer Service`,
                    translation: `수신: 제시카 유 <jyu@myemail.com>\n발신: 고객 서비스 <cs@velascobank.com>\n날짜: 7월 15일\n제목: 계정 보안\n\n유 씨께,\n\n보안상의 이유로 저희 벨라스코 은행 고객들께서는 은행에 기록된 연락처 정보를 매년 검토해 주셔야 합니다. 올해 연락처 정보 검토 마감일은 7월 29일입니다. 이것은 아래 두 가지 방법 중 하나로 수행하실 수 있습니다.\n\n먼저, 저희 웹사이트 www.velascobank.com에서 고객님의 정보를 확인하실 수 있습니다. 디지털 뱅킹 계정에 로그인하시고 "설정"으로 가신 다음 "연락처 정보"를 클릭하십시오. 고객님의 전화번호와 이메일 주소가 최신 정보인지 확인하시고, 기본 연락 방법으로 사용할 것을 선택해 주십시오. — [1] —. 아직 디지털 뱅킹에 등록되어 있지 않으시다면 www.velascobank.com/myaccount에서 온라인으로 등록하시는 것을 권장합니다. — [2] —.\n\n또 다른 방법으로는, 저희 지점 어디든 방문하셔서 직원과 상담하실 수 있습니다. — [3] —. 문의 사항이 있으시면 410-555-0156으로 전화해 주십시오. 상담원은 월요일부터 금요일까지 오전 7시부터 오후 5시까지 근무합니다. — [4] —.\n\n저희 은행을 이용해 주셔서 감사합니다.\n\n벨라스코 은행 고객 서비스`
                }
                    ],
            questions: [
                {
                    id: "p7-t7-q155",
                    questionNo: 155,
                    text: "What is the purpose of the e-mail?",
                    classification: "P7_PURPOSE",

                    options: {
                        "A": "To inquire about closing an account",
                        "B": "To inform customers of a change in bank hours",
                        "C": "To ask a customer to verify personal information",
                        "D": "To provide information about bank deposits"
                    },
                    correctAnswer: "C",
                    translation: "이메일의 목적은?",
                    explanation: `첫 문장에서 보안상의 이유로 벨라스코 은행 고객들은 은행에 기록된 연락처 정보를 매년 검토해 주어야 한다(For security reasons we need our customers to review their contact information with Velasco Bank every year)고 했고, 올해 연락처 정보 검토 마감일은 7월 29일(This year, the deadline ~ is July 29)이라며 연락처를 확인해야 하는 안기일까지 알려 주고 있으므로 고객에게 은행에 제공하는 연락처 정보를 검토해 줄 것을 요청하기 위해 이메일을 보냈음을 알 수 있습니다. 따라서 (C)가 정답입니다.`
                },
                {
                    id: "p7-t7-q156",
                    questionNo: 156,
                    text: "According to the e-mail, what should a customer do to enroll in digital banking?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Visit the bank's Web site",
                        "B": "Inquire with a customer service representative",
                        "C": "Visit a local bank branch",
                        "D": "Install a mobile app"
                    },
                    correctAnswer: "A",
                    translation: "이메일에 따르면, 고객이 디지털 뱅킹에 등록하기 위해 해야 할 일은?",
                    explanation: `첫 단락의 마지막 문장에서 디지털 뱅킹에 아직 등록되지 않았다면 www.velascobank.com/myaccount에서 온라인으로 등록할 것을 권장한다(If you are not yet enrolled in digital banking, we recommend doing so online at www.velascobank.com/myaccount)고 했으므로 (A)가 정답입니다.`
                },
                {
                    id: "p7-t7-q157",
                    questionNo: 157,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"This can be performed in one of two ways.\"",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "B",
                    translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"이것은 두 가지 방법 중 하나로 수행될 수 있습니다.\"",
                    explanation: `주어진 문장에서 이것(This)은 두 방법 중 하나로 할 수 있다고 했으므로, 주어진 문장 앞에 '이것', 즉 해야 할 일에 대한 내용이 나와 있어야 하고 뒤에는 두 가지 방법에 대한 설명이 나와야 합니다. [1] 앞에는 '연락처 정보 검토'가 언급되어 있고, 뒤에는 웹사이트에서의 방법과 [3] 앞의 지점 방문 방법이 안내되고 있으므로 주어진 문장은 이 사이에 들어가는 것이 알맞습니다. 따라서 (B)가 정답입니다.`
                }
                    ]
        },
        // Questions 158-160: Brochure
        {
            id: "p7-t7-set6",
            questionRange: "158-160",
            passages: [
                {
                    id: "p7-t7-s6-p1",
                    contextType: "P4",
                    docType: "BROCHURE",
                    title: "Brochure",
                    content: `Sumner Woodcrafting\n\nSumner Woodcrafting of Memphis, Tennessee, was established nearly 45 years ago by Kiran Sumner to provide customers seeking high-quality, handmade furniture with a personalized experience. Now semiretired, Mr. Sumner still takes orders and responds to questions himself through the company's customer-service telephone line on Thursdays and Fridays. Sumner Woodcrafting offers a variety of custom-made bedroom sets, tables, desks, and cabinetry, all built from solid, high-quality wood.\n\nThe price of handcrafted furniture is naturally higher than that of mass-produced items from a factory. Because our master crafters do exceptionally fine work, our customers never regret spending a bit more for pieces built to last for generations.\n\nPlease allow up to two months for the construction of each piece after the order is placed. Shipping times depend on the distance from our workshop. A white-glove delivery option, which includes unboxing and placement in your home, is available for an additional $50 fee.\n\nVisit www.sumnerwoodcrafting.com to view photographs of our workshop, meet our artisans, read customer reviews, and find ordering information.`,
                    translation: `섬너 우드크래프팅\n\n테네시주 멤피스의 섬너 우드크래프팅은 고품질의 수제 가구를 찾는 고객들에게 맞춤형 서비스를 제공하는 것을 목표로 약 45년 전 키란 섬너에 의해 설립되었습니다. 현재 반쯤 은퇴한 상태이지만, 섬너 씨는 여전히 목요일과 금요일에 회사의 고객 서비스 전화 라인 901-555-0185를 통해 직접 주문을 받고 문의에 응답합니다. 섬너 우드크래프팅은 다양한 맞춤 제작 침실 세트, 탁자, 책상, 수납장 등을 제공하며, 이는 모두 고품질의 견고한 목재로 만들어집니다.\n\n수공예 가구의 가격은 공장에서 대량 생산되는 가구보다 당연히 더 높습니다. 우리의 장인 공예가들이 아주 훌륭한 작업을 하기 때문에, 고객들은 세대를 넘어서 지속될 가구에 조금 더 많은 비용을 들이는 것을 후회하지 않습니다.\n\n주문 후 가구 한 점을 제작하는 데 최대 두 달이 걸릴 수 있다는 점에 유의해 주십시오. 배송비는 작업장과의 거리를 기준으로 합니다. 포장을 풀고 물품을 배치하는 작업은 추가 50달러의 비용으로 이용 가능합니다.\n\n우리 작업실의 사진, 장인 약력, 고객 후기 및 주문 정보를 확인하시려면 온라인으로 www.sumnerwoodcrafting.com을 방문하십시오.`
                }
                    ],
            questions: [
                {
                    id: "p7-t7-q158",
                    questionNo: 158,
                    text: "What is mentioned about Sumner Woodcrafting?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Its prices are competitive.",
                        "B": "It offers free shipping to Memphis.",
                        "C": "The founder processes telephone inquiries.",
                        "D": "Customers can tour the workshop."
                    },
                    correctAnswer: "C",
                    translation: "섬너 우드크래프팅에 대해 언급된 것은?",
                    explanation: `첫 번째 단락의 두 번째 문장에서 '반쯤 은퇴한 상태이지만 섬너 씨(창립자)는 여전히 목요일과 금요일에 회사의 고객 서비스 전화 라인을 통해 직접 주문을 받고 문의에 응답한다(Mr. Sumner still takes orders and responds to questions himself through the company's customer-service telephone line ...)'고 했으므로 창립자인 섬너 씨가 전화 문의를 직접 처리하고 있음을 알 수 있습니다. 따라서 정답은 (C)입니다.`
                },
                {
                    id: "p7-t7-q159",
                    questionNo: 159,
                    text: "In the second paragraph, the word \"fine\" is closest in meaning to",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "small",
                        "B": "sharp",
                        "C": "skillful",
                        "D": "healthy"
                    },
                    correctAnswer: "C",
                    translation: "두 번째 단락의 'fine'과 의미가 가장 가까운 단어는?",
                    explanation: `장인 공예가들이 '훌륭한' 작업을 한다는 의미로 쓰였으므로 '잘 만들어진, 전문가가 만든'을 뜻하는 (C) skillful이 정답입니다.`
                },
                {
                    id: "p7-t7-q160",
                    questionNo: 160,
                    text: "What is suggested about Sumner Woodcrafting products?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "They are long-lasting.",
                        "B": "They contain both natural and synthetic materials.",
                        "C": "They often require assembly.",
                        "D": "They are typically ordered for office environments."
                    },
                    correctAnswer: "A",
                    translation: "섬너 우드크래프팅 제품에 대해 암시된 것은?",
                    explanation: `두 번째 단락의 두 번째 문장에서 '우리의 장인 공예가들이 아주 훌륭한 작업을 하기 때문에 고객들은 세대를 넘어서 지속될 가구에 비용을 더 들이는 것을 후회하지 않는다(Because our master crafters do exceptionally fine work, our customers never regret spending a bit more for pieces built to last for generations)'고 한 것으로 보아 섬너 우드크래프팅 제품은 비싼 대신 내구성이 매우 좋다는 것을 알 수 있습니다. 따라서 정답은 (A)입니다.`
                }
                    ]
        },
        // Questions 161-163: Article
        {
            id: "p7-t7-set7",
            questionRange: "161-163",
            passages: [
                {
                    id: "p7-t7-s7-p1",
                    contextType: "P3",
                    docType: "ARTICLE",
                    title: "Article",
                    content: `CLARENCEDALE (March 28) — Over the last decade, instability in the pricing of raw materials has become the biggest concern for manufacturers. The issue now surpasses recruitment and innovation—respectively the top two concerns of companies in the past.\n\nThe reason is easy to illustrate. For electronics manufacturers, materials typically represent 20 percent of all expenses, while makers of processed food can spend between 40 and 60 percent on materials. Therefore, even a 10 percent increase in raw material costs can have a dramatic impact on a factory's bottom line. Successful companies can anticipate and temper the effects of market volatility, but even the best forecasting cannot anticipate all market changes.`,
                    translation: `클래런스데일 (3월 28일) — 지난 10년 동안 원자재 가격의 불안정성이 제조업체들의 가장 큰 관심사가 되어 왔다. 현재 이 문제는 이전에 기업들이 각각 상위 두 개의 관심사로 꼽았던 채용과 기술을 넘어섰다.\n\n그 이유는 이해하기 어렵지 않다. 전자제품 제조업체의 경우 일반적으로 전체 비용의 20퍼센트를 자재가 차지하는 반면, 가공식품 제조업체는 원자재에 40에서 60퍼센트 사이의 비용을 지출할 수 있다. 그러므로 원자재 가격이 단 10퍼센트만 오르는 것만으로도 공장의 손익에 극적인 영향을 미칠 수 있다. 상승하는 비용을 예측할 수 있는 회사들은 시장 변동성의 영향을 완화할 수 있을지 모르지만, 최고의 예측조차도 시장에서의 모든 변화를 예상할 수는 없다.`
                }
                    ],
            questions: [
                {
                    id: "p7-t7-q161",
                    questionNo: 161,
                    text: "What is the article mainly about?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Improvements in manufacturing methods",
                        "B": "Recent shifts in consumer preferences",
                        "C": "Implementation of environmental regulations",
                        "D": "A challenge in production costs"
                    },
                    correctAnswer: "D",
                    translation: "기사의 주요 내용은?",
                    explanation: `첫 문장에서 '지난 10년 동안 원자재 가격의 불안정성이 제조업체들의 가장 큰 관심사가 되어 왔다(Over the last decade, instability in the pricing of raw materials has become the biggest concern for manufacturers)'고 했고, 현재 이 문제는 이전에 기업들이 각각 상위 두 개의 관심사로 꼽았던 채용과 기술을 넘어섰다(The issue now surpasses recruitment ~ respectively)고 했다. 따라서 기사가 제조업체들이 직면한 생산 원가의 불안정성 문제를 주로 다루고 있음을 알 수 있으므로 정답은 (D)이다.`
                },
                {
                    id: "p7-t7-q162",
                    questionNo: 162,
                    text: "Why does the writer mention electronics manufacturers?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "To describe innovations over a ten-year period",
                        "B": "To show the impact of global trade",
                        "C": "To explain a recent recruitment trend",
                        "D": "To provide an industrial comparison"
                    },
                    correctAnswer: "D",
                    translation: "기사 작성자가 전자제품 제조업체를 언급하는 이유는?",
                    explanation: `두 번째 단락의 두 번째 문장에서 '전자제품 제조업체의 경우 일반적으로 전체 비용의 20퍼센트를 자재가 차지하는 반면, 가공식품 제조업체는 원자재에 40에서 60퍼센트 사이의 비용을 지출할 수 있다(For electronics manufacturers, materials typically represent 20 percent of all expenses, while makers of processed food can spend between 40 and 60 percent on materials)'고 했다. 따라서 전자제품 제조업체와 가공식품 제조업체 간 원자재에 드는 비용의 차이를 비교하기 위해 전자제품 업체를 언급했다는 것을 알 수 있으므로 정답은 (D)이다.`
                },
                {
                    id: "p7-t7-q163",
                    questionNo: 163,
                    text: "In the second paragraph, the word \"temper\" is closest in meaning to",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "set",
                        "B": "strengthen",
                        "C": "moderate",
                        "D": "combine"
                    },
                    correctAnswer: "C",
                    translation: "두 번째 단락의 'temper'와 의미가 가장 가까운 단어는?",
                    explanation: `시장 변동성의 영향을 '완화시킨다'는 뜻으로 쓰였으므로 '완화하다, 누그러뜨리다'는 의미의 (C) moderate가 정답입니다.`
                }
                    ]
        },
        // Questions 164-167: Notice
        {
            id: "p7-t7-set8",
            questionRange: "164-167",
            passages: [
                {
                    id: "p7-t7-s8-p1",
                    contextType: "P2",
                    docType: "ANNOUNCEMENT",
                    title: "Notice",
                    content: `The Lowenstein Bookstore in Mission Bay invites you to this month's book discussion featuring author Hilda Flores. The event will be held on Thursday, April 10, from 7:00 P.M. to 8:30 P.M. Ms. Flores will be discussing her latest book in the beloved Inspector Svensson series, Grinding the Gears. The new novel finds the popular investigator looking into equipment malfunctions at a national physics research laboratory.\n\nMs. Flores will also talk about the background research she performed while writing the book. — [1] —. A question-and-answer session will follow the presentation. — [2] —. The event is free for anyone to attend. — [3] —. However, the store requires that attendees register at least one day in advance. — [4] —.`,
                    translation: `미션 베이에 있는 로웬스타인 서점에서 힐다 플로레스 작가가 출연하는 이달의 책 토론에 여러분을 초대합니다. 이 행사는 4월 10일 목요일 오후 7시부터 8시 30분까지 열릴 예정입니다. 플로레스 씨는 그녀의 인기 소설 시리즈인 <기어 갈아끼기>의 최신작에 대해 이야기할 것입니다. 인기 있는 수사관 스벤슨 시리즈의 최신 모험인 <기어 갈아끼기>는 수사관이 국립 물리학 연구소에서 수상한 장비 고장을 조사하는 내용을 담고 있습니다.\n\n플로레스 씨는 책을 집필하면서 수행했던 배경 조사에 대해 이야기를 나눌 것입니다. — [1] —. 프레젠테이션 후에는 질의응답 시간이 뒤따를 예정입니다. — [2] —. 행사는 누구나 무료로 참석할 수 있습니다. — [3] —. 서점에서는 참여자들이 적어도 하루 전에 등록해야 한다고 규정합니다. — [4] —.`
                }
                    ],
            questions: [
                {
                    id: "p7-t7-q164",
                    questionNo: 164,
                    text: "What is being announced?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "The opening of a new bookstore",
                        "B": "A presentation by a book's author",
                        "C": "A book explaining a research project",
                        "D": "A major film based on a book"
                    },
                    correctAnswer: "B",
                    translation: "발표되고 있는 것은?",
                    explanation: `첫 문장에서 미션 베이에 있는 로웬스타인 서점에서 힐다 플로레스 작가가 출연하는 이달의 책 토론에 초대한다(The Lowenstein Bookstore in Mission Bay invites you to this month's book discussion featuring author Hilda Flores)고 했으므로 (B)가 정답입니다.`
                },
                {
                    id: "p7-t7-q165",
                    questionNo: 165,
                    text: "What kind of book is Grinding the Gears?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "A nonfiction story",
                        "B": "A biography of a scientist",
                        "C": "A collection of short stories",
                        "D": "A mystery novel"
                    },
                    correctAnswer: "D",
                    translation: "<기어 갈아끼기>는 어떤 종류의 책인가?",
                    explanation: `첫 번째 단락의 마지막 문장에서 인기 있는 수사관 스벤슨 시리즈의 최신 모험인 <기어 갈아끼기>는 수사관이 국립 물리학 연구소에서 수상한 장비 고장을 조사하는 내용(The latest adventure in the popular Inspector Svensson series, Grinding the Gears finds ~ strange equipment malfunctions at a national physics research laboratory)이라고 책을 설명하는 것으로 보아 <기어 갈아끼기>는 미스터리 소설임을 알 수 있습니다. 따라서 정답은 (D)입니다.`
                },
                {
                    id: "p7-t7-q166",
                    questionNo: 166,
                    text: "What is mentioned about registration?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "It closes on April 9.",
                        "B": "It requires a small fee.",
                        "C": "It is optional but encouraged.",
                        "D": "It cannot be done online."
                    },
                    correctAnswer: "A",
                    translation: "등록에 대해 명시된 것은?",
                    explanation: `첫 번째 단락의 두 번째 문장에서 이 행사는 4월 10일 목요일 오후 7시부터 8시 30분까지 열릴 예정(The event will be held on Thursday, April 10, from 7:00 P.M. to 8:30 P.M.)이라고 했고, 두 번째 단락의 마지막 문장에서 서점에서는 참여자들이 적어도 하루 전에 등록해야 한다고 규정한다(The bookstore requires that attendees register at least one day in advance)고 했습니다. 따라서 등록은 행사일인 4월 10일 하루 전인 4월 9일까지 해야 하므로 (A)가 정답입니다.`
                },
                {
                    id: "p7-t7-q167",
                    questionNo: 167,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Some of her fact-finding included interviews with government scientists.\"",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "A",
                    translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"그녀의 진상 파악 조사 일부에는 정부 과학자들과의 인터뷰도 포함되었습니다.\"",
                    explanation: `주어진 문장은 플로레스 씨가 실시한 진상 파악 조사에 포함된 내용을 설명하고 있습니다. 따라서 플로레스 씨의 진상 파악 조사 즉, 그녀가 수행한 배경 조사(the background research she performed)를 언급하는 문장 뒤인 [1]에 들어가는 것이 글의 흐름상 자연스러우므로 (A)가 정답입니다.`
                }
                    ]
        },
        // Questions 168-171: E-mail
        {
            id: "p7-t7-set9",
            questionRange: "168-171",
            passages: [
                {
                    id: "p7-t7-s9-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    title: "Email",
                    content: `To: Customer Service <customerservice@kishintech.com>\nFrom: Dmitri Petrov <d.petrov@silkmail.com>\nDate: November 5\nSubject: Support for Kishin XT20 digital recorder\n\nTo Whom It May Concern:\n\nI recently purchased a Kishin XT20 digital recorder in order to record several of my conference presentations. Now that I have completed the first day of the event, I am trying to transfer the audio files to my laptop, but I am not having any luck. — [1] —. I have followed all the instructions in the manual as well as the tips found in the FAQ section of the product's Web page. — [2] —. I even tried using an alternative cord and laptop hardware, so I do not believe that is the issue. — [3] —.\n\nI am supposed to cover the remaining two days of this conference for work. — [4] —. My business partners expect me to return with as much information as I can. If I cannot share the files properly, the Kishin XT20 digital recorder will be of no use to me. Can you help?\n\nDmitri Petrov`,
                    translation: `수신: 고객 서비스 <customerservice@kishintech.com>\n발신: 드미트리 페트로프 <d.petrov@silkmail.com>\n날짜: 11월 5일\n제목: 키신 XT20 디지털 녹음기 지원\n\n관계자 귀하:\n\n저는 며칠 분량의 학회 프레젠테이션을 녹음하기 위해 키신 XT20 디지털 녹음기를 구입했습니다. 이제 지금 행사 첫날을 마치고 오디오 파일을 노트북으로 전송하려고 하는데 운이 따라 주지 않네요. — [1] —. 사용자 설명서에 있는 모든 지침뿐만 아니라 제품 홈페이지의 FAQ 섹션에서 찾을 수 있는 팁들도 따라 해 보았습니다. — [2] —. 심지어 로컬 비즈니스 센터에서 대체 코드와 노트북 하드웨어를 사용해 보았고, 그래서 컴퓨터 하드웨어가 문제라고 생각되지는 않습니다. — [3] —.\n\n저는 업무를 위해 이 학회의 남은 이틀을 취재하기로 되어 있습니다. — [4] —. 제 사업 파트너들은 제가 최대한 많은 정보를 가지고 돌아올 것으로 기대하고 있습니다. 파일을 제대로 공유할 수 없다면 키신 XT20 디지털 레코더는 저에게 쓸모가 없습니다. 도와주실 수 있나요?\n\n드미트리 페트로프`
                }
                    ],
            questions: [
                {
                    id: "p7-t7-q168",
                    questionNo: 168,
                    text: "What problem does Mr. Petrov have with his device?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "He cannot move audio data to a computer.",
                        "B": "He does not like its appearance.",
                        "C": "He is unable to rename his files.",
                        "D": "He is unsatisfied with the recording quality."
                    },
                    correctAnswer: "A",
                    translation: "페트로프 씨의 장치에 어떤 문제가 있는가?",
                    explanation: `첫 번째 단락 두 번째 문장에서 페트로프 씨가 행사 첫날을 마치고 오디오 파일을 노트북으로 전송하려고 하는데 운이 따라 주지 않는다(Now, I am trying to transfer the audio files to my laptop, but I am not having any luck)고 했으므로 (A)가 정답입니다.`
                },
                {
                    id: "p7-t7-q169",
                    questionNo: 169,
                    text: "Why does Mr. Petrov mention a Web site?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "To suggest that it contains misleading information",
                        "B": "To explain that he has checked additional information",
                        "C": "To inquire about compatible accessories",
                        "D": "To recommend a change to a product description"
                    },
                    correctAnswer: "B",
                    translation: "페트로프 씨가 홈페이지를 언급한 이유는?",
                    explanation: `첫 번째 단락 세 번째 문장에서 페트로프 씨가 사용자 설명서에 있는 모든 지침뿐만 아니라 제품 홈페이지의 FAQ 섹션에서 찾을 수 있는 팁들도 따라 해 보았다(I have followed all the instructions ~ the tips found in the FAQ section of the product's Web page)고 했으므로, 페트로프 씨는 설명서 외에도 추가적인 제품 관련 설명을 이미 확인했다는 것을 알리기 위해 홈페이지를 언급했음을 알 수 있습니다. 따라서 정답은 (B)입니다.`
                },
                {
                    id: "p7-t7-q170",
                    questionNo: 170,
                    text: "In the second paragraph, the word \"cover\" is closest in meaning to",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "protect",
                        "B": "include",
                        "C": "hide",
                        "D": "report on"
                    },
                    correctAnswer: "D",
                    translation: "두 번째 단락의 'cover'와 의미가 가장 가까운 단어는?",
                    explanation: `업무를 위해 학회를 '취재하다'라는 뜻으로 쓰였으므로 '~에 대해 보고하다'를 뜻하는 (D) report on이 정답입니다.`
                },
                {
                    id: "p7-t7-q171",
                    questionNo: 171,
                    text: "What is true about Mr. Petrov?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "He volunteered to test some new equipment.",
                        "B": "He is on a business trip with his partners.",
                        "C": "He will share conference materials with colleagues.",
                        "D": "He will receive a new laptop from his company soon."
                    },
                    correctAnswer: "C",
                    translation: "페트로프 씨에 대해 사실인 것은?",
                    explanation: `두 번째 단락의 첫 문장에서 페트로프 씨가 업무를 위해 이 학회의 남은 이틀을 취재하기로 되어 있다(I am supposed to cover the remaining two days of this conference for work)면서 사업 파트너들은 페트로프 씨가 최대한 많은 정보를 가지고 돌아올 것으로 기대하고 있다(My business partners expect me to return with as much information as I can)고 했다. 따라서 페트로프 씨는 학회에서 취득한 정보를 동료들과 공유할 계획임을 알 수 있으므로 (C)가 정답입니다.`
                }
                    ]
        },
        // Questions 172-175: Online Chat
        {
            id: "p7-t7-set10",
            questionRange: "172-175",
            passages: [
                {
                    id: "p7-t7-s10-p1",
                    contextType: "P7",
                    docType: "CHAT_MESSAGE",
                    title: "Online Chat",
                    content: `Christine Burton [8:16 A.M.]\nThis is my first time posting to this business forum. Has anyone out there had a problem ordering one of the Atiara credit-card readers?\n\nMarkos Benke [9:04 A.M.]\nAre you referring to the little unit that you attach to a phone, or the larger, stand-alone tablet model?\n\nChristine Burton [9:30 A.M.]\nOur mobile unit. We've started using Atiara Web hosting services for our online shop, and I added pictures of the necklaces and rings I create. But most of our sales are still made in person. So I just need a way to take in-person payments when we go out to fairs and markets.\n\nMarkos Benke [10:19 A.M.]\nJust go to www.atiara.com/pos/hardware and add what you want to your basket.\n\nChristine Burton [11:21 A.M.]\nThat's the problem. I can't process the order in the system. I keep getting an error message that says, "Your account cannot be verified."\n\nSusan Schweier [11:42 A.M.]\nI think I know what the issue is. You have to upload scans of your business registration, a government photo ID, and a statement from your business bank account.\n\nChristine Burton [12:23 P.M.]\nI've already sent all of those, and I'm still getting the error message.\n\nSusan Schweier [12:33 P.M.]\nIn that case, try logging out and following the process again.\n\nCindy Acosta [1:05 P.M.]\nI think you're going to probably need to call the support line. They were very helpful when I had a problem a few months ago.\n\nChristine Burton [1:10 P.M.]\nI've spoken with three people already!`,
                    translation: `크리스틴 버튼 [오전 8:16] 이 중소기업 토론방에 글을 올리는 것은 이번이 처음입니다. 여기 계신 분들 중에 아티아라의 신용카드 리더기 중 하나를 주문할 때 문제를 겪으신 분 있나요?\n\n마르코스 벤케 [오전 9:04] 휴대폰에 부착하는 작은 장치를 말씀하시는 건가요, 아니면 더 큰 독립형 태블릿 모델을 말씀하시는 건가요?\n\n크리스틴 버튼 [오전 9:30] 저희 휴대용 장치요. 저희는 아티아라 웹 호스팅 서비스를 사용해 온라인 매장을 시작했고 제가 직접 만든 목걸이와 반지 사진을 추가했습니다. 하지만 대부분의 판매가 여전히 대면으로 이루어집니다. 그래서 박람회나 시장에 나갈 때 대면 결제를 받을 수 있는 방법만 필요합니다.\n\n마르코스 벤케 [오전 10:19] www.atiara.com/pos/hardware에 가셔서 원하는 것을 장바구니에 추가하시면 됩니다.\n\n크리스틴 버튼 [오전 11:21] 그게 문제예요. 시스템에서 주문을 할 수 없습니다. "귀하의 계정을 확인할 수 없습니다"라는 오류 메시지가 나와요.\n\n수잔 슈와이어 [오전 11:42] 제가 알 것 같습니다. 사업자 등록증, 정부 발급 사진 신분증, 사업자 은행 계좌 명세서의 스캔 사본을 업로드하셔야 합니다.\n\n크리스틴 버튼 [오후 12:23] 이미 전부 해 봤는데, 여전히 오류 메시지가 뜹니다.\n\n수잔 슈와이어 [오후 12:33] 그런 경우라면, 로그아웃하고 절차를 다시 따라 해 보세요.\n\n신디 아코스타 [오후 1:05] 아마 지원 라인에 전화하셔야 할 것 같습니다. 몇 달 전 제 문제에는 매우 도움이 되었습니다.\n\n크리스틴 버튼 [오후 1:10] 이미 세 분과 통화해 보았습니다! `
                }
                    ],
            questions: [
                {
                    id: "p7-t7-q172",
                    questionNo: 172,
                    text: "What does Mr. Benke ask Ms. Burton to clarify?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "The type of device she wants to buy",
                        "B": "Items that are shown on her Web site",
                        "C": "A method for charging a mobile phone",
                        "D": "The amount she was billed for a service"
                    },
                    correctAnswer: "A",
                    translation: "벤케 씨가 버튼 씨에게 명확히 해달라고 요청한 것은?",
                    explanation: `오전 9시 4분에 벤케 씨가 휴대폰에 부착하는 작은 장치를 말하는 것인지 아니면 더 큰 독립형 태블릿 모델을 말하는 것인지(Are you referring to the little unit ~ or the larger, stand-alone tablet model?)를 묻고 있는 것으로 보아 구입하려는 장치의 종류를 명확히 알려 달라는 것임을 알 수 있습니다. 따라서 정답은 (A)이다.`
                },
                {
                    id: "p7-t7-q173",
                    questionNo: 173,
                    text: "What does Ms. Burton most likely sell?",
                    classification: "P7_INFERENCE",

                    options: {
                        "A": "Art supplies",
                        "B": "Board games",
                        "C": "Jewelry",
                        "D": "Furniture"
                    },
                    correctAnswer: "C",
                    translation: "버튼 씨가 판매하는 것은?",
                    explanation: `오전 9시 30분에 버튼 씨가 아티아라 웹 호스팅 서비스를 사용해 온라인 매장을 시작했고 직접 만든 목걸이와 반지 사진을 추가했다(started an online shop ~ added pictures of the necklaces and rings I create)고 설명하고 있으므로 버튼 씨가 판매하는 것은 목걸이와 반지, 즉 보석류임을 알 수 있다. 따라서 정답은 (C)이다.`
                },
                {
                    id: "p7-t7-q174",
                    questionNo: 174,
                    text: "What does Ms. Schweier suggest?",
                    classification: "P7_DETAIL",

                    options: {
                        "A": "Filling out a service request form",
                        "B": "Adjusting settings on a card reader",
                        "C": "Submitting some documentation",
                        "D": "Opening a separate business account"
                    },
                    correctAnswer: "C",
                    translation: "슈와이어 씨가 제안하는 것은?",
                    explanation: `오전 11시 42분에 슈와이어 씨가 사업자 등록증, 정부 발급 사진 신분증, 사업자 은행 계좌 명세서의 스캔 사본을 업로드해야 한다(You have to upload scans ~ a statement from your business bank account)고 제안하고 있으므로 (C)가 정답이다.`
                },
                {
                    id: "p7-t7-q175",
                    questionNo: 175,
                    text: "At 1:10 P.M., what does Ms. Burton most likely mean when she writes, \"I've spoken with three people already!\"?",
                    classification: "P7_INTENTION",

                    options: {
                        "A": "She was impressed by the company's response.",
                        "B": "She has already called the support line.",
                        "C": "She has researched several issues thoroughly.",
                        "D": "She is unsure how to use the online forum."
                    },
                    correctAnswer: "B",
                    translation: "오후 1:10에 버튼 씨가 \"이미 3명과 통화했습니다!\"라고 쓴 의도는?",
                    explanation: `오후 1시 5분에 아코스타 씨가 문제 해결을 위해 지원 라인에 전화해 볼 것을 권하자, 버튼 씨가 이미 세 사람과 통화했다(I've spoken with three people already!)고 대답한 것은 이미 전화로 문의를 했음을 나타냅니다. 따라서 정답은 (B)이다.`
                }
                    ]
        }
                    ]
};
