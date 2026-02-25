import { Part7Test } from './types';

export const test7Data: Part7Test = {
    testId: 7,
    vol: 4,
    title: "Test 7",
    sets: [
        // Questions 147-148: Notice
        {
            id: "v4-p7-t7-set1",
            setType: "Single",
            questionRange: "147-148",
            passages: [
                {
                    id: "v4-p7-t7-s1-p1",
                    contextType: "P2_OFFI",
                    docType: "NOTICE",
                    content: `NOTICE\n\nAs part of our routine maintenance of Selino Apartments, all public areas of our building will be painted according to the following schedule:\n\n• Stairwells, first and second floors: 12 April\n• Hallways, first and second floors: 13 April\n• Stairwells, third and fourth floors: 14 April\n• Hallways, third and fourth floors: 15 April\n\nThe elevators will be available during this time. Please use caution, and do not touch any wet paint.\n\nManagement, Selino Apartments`,
                    translation: `공지\n\n셀리노 아파트의 정기적인 유지 보수의 일환으로, 저희 건물의 모든 공용 구역은 다음 일정에 따라 페인트를 칠할 예정입니다:\n\n• 계단실, 1층 및 2층: 4월 12일\n• 복도, 1층 및 2층: 4월 13일\n• 계단실, 3층 및 4층: 4월 14일\n• 복도, 3층 및 4층: 4월 15일\n\n이 기간 동안 엘리베이터는 이용 가능합니다. 주의해 주시고, 마르지 않은 페인트에 손대지 마십시오.\n\n셀리노 아파트 관리소`
                }
            ],
            questions: [
                {
                    id: "v4-p7-t7-q147",
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
                    explanation: `첫 문장에서 셀리노 아파트의 정기적인 유지 보수의 일환으로 건물의 모든 공용 구역에 페인트칠을 할 예정(As part of our routine maintenance of Selino Apartments, all public areas of our building will be painted...)이라고 공지하고 있으므로 아파트 주민들에게 알리는 글임을 알 수 있습니다.`
                },
                {
                    id: "v4-p7-t7-q148",
                    questionNo: 148,
                    text: "When will work on the stairwells of all floors most likely be completed?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "On April 12",
                        "B": "On April 13",
                        "C": "On April 14",
                        "D": "On April 15"
                    },
                    correctAnswer: "C",
                    translation: "모든 층의 계단에 대한 작업은 언제 완료될 것 같은가?",
                    explanation: `페인트칠 일정에서 1, 2층 계단은 4월 12일, 3, 4층 계단은 4월 14일(Stairwells, third and fourth floors: 14 April)에 작업한다고 되어 있습니다. 따라서 모든 계단 작업이 마무리되는 시점은 4월 14일입니다.`
                }
            ]
        },
        // Questions 149-150: Coupon
        {
            id: "v4-p7-t7-set2",
            setType: "Single",
            questionRange: "149-150",
            passages: [
                {
                    id: "v4-p7-t7-s2-p1",
                    contextType: "P4_MARK",
                    docType: "COUPON",
                    content: `Jin-Hwa Grill\nServing the finest Korean cuisine in northern California for over 30 years\n\nCome celebrate the reopening of our newly remodeled restaurant on Lakeside Drive! Purchase any two dinners and enjoy a complimentary appetizer platter during the entire month of May.\n\nValid only at Jin-Hwa Grill, 4104 Lakeside Drive, Oakland, CA. Coupon does not apply to takeout orders. Visit www.jin-hwagrill.com for a list of all our locations, hours of operation, and menus.`,
                    translation: `진화 그릴\n북부 캘리포니아에서 30년 넘게 최고급 한국 요리를 제공하고 있습니다.\n\n레이크사이드 로드에서 새롭게 단장한 레스토랑의 재개장을 축하하러 오세요! 5월 한 달 동안 저녁 식사 2인분을 구매하시고 무료 애피타이저 플래터를 즐기세요.\n\n캘리포니아주 오클랜드 레이크사이드 로드 4104, 진화 그릴에서만 사용 가능합니다. 쿠폰은 테이크아웃 주문에는 적용되지 않습니다. 전체 지점 목록, 영업시간, 메뉴를 확인하시려면 www.jin-hwagrill.com을 방문하세요.`
                }
            ],
            questions: [
                {
                    id: "v4-p7-t7-q149",
                    questionNo: 149,
                    text: "How can people receive the benefit from the coupon?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "By placing a takeout order",
                        "B": "By spending a minimum amount of money",
                        "C": "By ordering two meals",
                        "D": "By attending the opening day celebration"
                    },
                    correctAnswer: "C",
                    translation: "쿠폰으로 혜택을 받을 수 있는 방법은?",
                    explanation: `지문에서 5월 한 달 동안 저녁 식사 2인분을 구매하라(Purchase any two dinners)고 명시했으므로 식량 2인분을 주문해야 합니다.`
                },
                {
                    id: "v4-p7-t7-q150",
                    questionNo: 150,
                    text: "What is mentioned about Jin-Hwa Grill?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It is celebrating an anniversary.",
                        "B": "It has more than one location.",
                        "C": "It recently began serving Korean food.",
                        "D": "It has expanded its hours of operation."
                    },
                    correctAnswer: "B",
                    translation: "진화 그릴에 대해 명시된 것은?",
                    explanation: `마지막 문장에서 '모든 지점 목록(a list of all our locations)'을 보려면 웹사이트를 방문하라고 했으므로, 지점이 하나 이상임을 알 수 있습니다.`
                }
            ]
        },
        // Questions 151-152: E-mail
        {
            id: "v4-p7-t7-set3",
            setType: "Single",
            questionRange: "151-152",
            passages: [
                {
                    id: "v4-p7-t7-s3-p1",
                    contextType: "P1_CORR",
                    docType: "EMAIL",
                    content: `To: Bindu Gil <bgil@opalmail.com>\nFrom: Neela Balay <n_balay@celebrate.com>\nDate: June 18\nSubject: Follow-up\n\nDear Ms. Gil,\n\nRegarding our telephone conversation earlier today, here in writing is the change I would like to make to Saturday's delivery.\n\nI am requesting that you now deliver the flowers to the Grand Dining Room at the Kaltan Hotel instead of the Saji Banquet Hall. I apologize for this last-minute switch, but the banquet hall manager contacted me just last night to inform me about an electrical system malfunction that will require a weekend repair. Since the office party I am planning cannot be postponed, I have had to reserve this other venue.\n\nI would appreciate receiving the delivery by 4:00 P.M.\n\nBest regards,\n\nNeela Balay`,
                    translation: `수신: 빈두 길 <bgil@opalmail.com>\n발신: 닐라 발레이 <n_balay@celebrate.com>\n날짜: 6월 18일\n제목: 후속 조치\n\n길 씨께,\n\n오늘 오전 전화 통화와 관련하여, 토요일 배송에 변경하고 싶은 사항을 서면으로 알려 드립니다.\n\n사지 연회장 대신 캘탄 호텔의 그랜드 다이닝 룸으로 꽃을 배송해 주실 것을 요청합니다. 이렇게 막판에 변경하게 되어 죄송합니다만, 어제 저녁 연회장 매니저로부터 전기 시스템 고장으로 주말 수리가 필요하다는 연락을 받았습니다. 제가 계획 중인 사무실 파티는 연기할 수 없기 때문에 다른 장소를 예약해야 했습니다.\n\n오후 4시까지 배송을 받을 수 있으면 감사하겠습니다.\n\n안녕히 계십시오.\n\n닐라 발레이`
                }
            ],
            questions: [
                {
                    id: "v4-p7-t7-q151",
                    questionNo: 151,
                    text: "Why did Ms. Balay send an e-mail to Ms. Gil?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To reschedule a weekend business trip",
                        "B": "To invite her to an office party",
                        "C": "To request the services of an electrician",
                        "D": "To confirm some spoken instructions"
                    },
                    correctAnswer: "D",
                    translation: "발레이 씨가 길 씨에게 이메일을 보낸 이유는?",
                    explanation: `첫 문장에서 오늘 오전 전화 통화(telephone conversation)와 관련해 변경 사항을 서면으로(here in writing) 보낸다고 했으므로, 말로 했던 지시 사항을 서면으로 확인하기 위함임을 알 수 있습니다.`
                },
                {
                    id: "v4-p7-t7-q152",
                    questionNo: 152,
                    text: "What does Ms. Balay expect to receive on Saturday afternoon?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Flowers",
                        "B": "Tickets",
                        "C": "A signed contract",
                        "D": "An updated cost estimate"
                    },
                    correctAnswer: "A",
                    translation: "발레이 씨가 토요일 오후에 받기로 예상하는 것은?",
                    explanation: `두 번째 단락에서 사지 연회장 대신 꽃(flowers)을 배송해 달라고 요청했으므로 정답은 꽃입니다.`
                }
            ]
        },
        // Questions 153-154: Online Chat
        {
            id: "v4-p7-t7-set4",
            setType: "Single",
            questionRange: "153-154",
            passages: [
                {
                    id: "v4-p7-t7-s4-p1",
                    contextType: "P7_CONV",
                    docType: "CHAT_MESSAGE",
                    content: `Ae-Cha Kim (9:16 A.M.)\nGood morning. I have an issue with an order I placed on the Winter Wear Web site.\n\nKelvin Long (9:18 A.M.)\nGood morning. How can I help you?\n\nAe-Cha Kim (9:20 A.M.)\nWell, I ordered some gloves two weeks ago, and they still haven't arrived.\n\nKelvin Long (9:21 A.M.)\nI'm sorry to hear that. Did you get an order number?\n\nAe-Cha Kim (9:22 A.M.)\nIt's ADF193.\n\nKelvin Long (9:23 A.M.)\nThanks.\n\nKelvin Long (9:26 A.M.)\nThis is very unusual. The system is showing that the order was fulfilled. I'm not sure why it hasn't left the warehouse yet. I can have another pair of gloves sent to you with rush shipping, at no extra charge.\n\nAe-Cha Kim (9:27 A.M.)\nThat would be great! Thanks!`,
                    translation: `김애차 (오전 9:16) 안녕하세요. 윈터 웨어 웹사이트에서 주문한 건에 문제가 있습니다.\n\n켈빈 롱 (오전 9:18) 안녕하세요. 무엇을 도와드릴까요?\n\n김애차 (오전 9:20) 음, 2주 전에 장갑을 주문했는데 아직 도착하지 않았습니다.\n\n켈빈 롱 (오전 9:21) 안타까운 소식이네요. 주문 번호를 받으셨나요?\n\n김애차 (오전 9:22) ADF193입니다.\n\n켈빈 롱 (오전 9:23) 감사합니다.\n\n켈빈 롱 (오전 9:26) 이건 매우 드문 일입니다. 시스템에는 주문이 처리되었다고 나오거든요. 왜 아직 창고에서 나가지 않았는지 모르겠네요. 추가 비용 없이 급송으로 다른 장갑 한 켤레를 보내드리도록 하겠습니다.\n\n김애차 (오전 9:27) 아주 좋네요! 감사합니다!`
                }
            ],
            questions: [
                {
                    id: "v4-p7-t7-q153",
                    questionNo: 153,
                    text: "What problem does Ms. Kim have?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "She received the wrong order.",
                        "B": "Her order has not arrived.",
                        "C": "An item was damaged in transport.",
                        "D": "An item is missing from her order."
                    },
                    correctAnswer: "B",
                    translation: "김 씨는 어떤 문제를 겪고 있는가?",
                    explanation: `오전 9시 20분 메시지에서 2주 전에 주문한 장갑이 아직 도착하지 않았다(haven't arrived)고 했으므로 정답은 (B)입니다.`
                },
                {
                    id: "v4-p7-t7-q154",
                    questionNo: 154,
                    text: "At 9:26 A.M., what does Mr. Long most likely mean when he writes, \"This is very unusual\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "He is frustrated by the slow computer system.",
                        "B": "He is sorry about taking so long to answer Ms. Kim's question.",
                        "C": "He is surprised about the warehouse issue.",
                        "D": "He is confused about which style of gloves was ordered."
                    },
                    correctAnswer: "C",
                    translation: "오전 9시 26분에 롱 씨가 \"이건 매우 드문 일입니다\"라고 쓴 의도는?",
                    explanation: `시스템에서는 완료되었다고 나오는데 창고에서 출고되지 않은 상황(not sure why it hasn't left the warehouse yet)이 이례적인 일이라며 놀라움을 표시하고 있습니다.`
                }
            ]
        },
        // Questions 155-157: E-mail
        {
            id: "v4-p7-t7-set5",
            setType: "Single",
            questionRange: "155-157",
            passages: [
                {
                    id: "v4-p7-t7-s5-p1",
                    contextType: "P1_CORR",
                    docType: "EMAIL",
                    content: `To: Jessica Yu <jyu@myemail.com>\nFrom: Customer Service <cs@velascobank.com>\nDate: July 15\nSubject: Customer account security\n\nDear Ms. Yu,\n\nFor security reasons we need our customers to review their contact information with Velasco Bank every year. — [1] —. This year, the deadline to review your contact information is July 29. — [2] —. You may check your information on our Web site at www.velascobank.com, or you can do so on the Velasco Bank mobile app. Simply log in to your digital banking account, go to "Settings," and then go to "Contact." — [3] —. Review your phone number and e-mail address to make sure they are both up-to-date. Then select them as your primary contact methods. If you are not yet enrolled in digital banking, we recommend doing so online at www.velascobank.com/myaccount.\n\n— [4] —. If you have any questions, please visit any of our branches or call us at 410-555-0156 Monday through Friday, 7:00 A.M. to 5:00 P.M.\n\nThank you,\n\nVelasco Bank Customer Service`,
                    translation: `수신: 제시카 유 <jyu@myemail.com>\n발신: 고객 서비스 <cs@velascobank.com>\n날짜: 7월 15일\n제목: 고객 계정 보안\n\n유 씨께,\n\n보안상의 이유로 벨라스코 은행 고객들께서는 매년 연락처 정보를 확인해 주셔야 합니다. — [1] —. 올해 연락처 정보 검토 마감일은 7월 29일입니다. — [2] —. 저희 웹사이트 www.velascobank.com이나 벨라스코 은행 모바일 앱을 통해 정보를 확인하실 수 있습니다. 디지털 뱅킹 계정에 로그인하여 "설정"으로 간 뒤 "연락처"로 들어가시면 됩니다. — [3] —. 전화번호와 이메일 주소가 최신 정보인지 확인해 주십시오. 그런 다음 그것들을 기본 연락 수단으로 선택해 주십시오. 아직 디지털 뱅킹에 등록되지 않았다면 www.velascobank.com/myaccount에서 온라인으로 등록하시길 권장합니다.\n\n— [4] —. 문의 사항이 있으시면 지점을 방문하시거나 월~금요일 오전 7시~오후 5시 사이에 410-555-0156으로 전화해 주십시오.\n\n감사합니다.\n\n벨라스코 은행 고객 서비스`
                }
            ],
            questions: [
                {
                    id: "v4-p7-t7-q155",
                    questionNo: 155,
                    text: "What is the purpose of the e-mail?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To inquire about an account closure",
                        "B": "To inform customers of a change in banking hours",
                        "C": "To ask a customer to confirm personal data",
                        "D": "To provide information about a bank deposit"
                    },
                    correctAnswer: "C",
                    translation: "이메일의 목적은?",
                    explanation: `고객들에게 연락처 정보 등 개인 정보(contact information)를 매년 확인(review)해 달라는 요청이 주된 목적이므로 (C)가 정답입니다.`
                },
                {
                    id: "v4-p7-t7-q156",
                    questionNo: 156,
                    text: "According to the e-mail, what should a customer do to register for digital banking?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Go to the bank's Web site",
                        "B": "Contact a customer service representative",
                        "C": "Visit a local bank branch",
                        "D": "Install a mobile app"
                    },
                    correctAnswer: "A",
                    translation: "이메일에 따르면 고객이 디지털 뱅킹을 신청하기 위해 해야 할 일은?",
                    explanation: `마지막 부분에서 디지털 뱅킹에 등록되지 않았다면 웹사이트(www.velascobank.com/myaccount)에서 온라인으로 할 것을 권장하고 있습니다.`
                },
                {
                    id: "v4-p7-t7-q157",
                    questionNo: 157,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"This can be done in one of two ways.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "B",
                    translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"이것은 두 가지 방법 중 하나로 가능합니다.\"",
                    explanation: `주어진 문장의 '이것(This)'은 마감일까지 개인 정보를 확인하는 것을 가리키며, [2] 뒤에 웹사이트/앱을 통한 방법과 [4] 뒤에 지점 방문/전화를 통한 방법 두 가지가 나열되므로 [2]번 위치가 가장 적합합니다.`
                }
            ]
        },
        // Questions 158-160: Brochure
        {
            id: "v4-p7-t7-set6",
            setType: "Single",
            questionRange: "158-160",
            passages: [
                {
                    id: "v4-p7-t7-s6-p1",
                    contextType: "P4_MARK",
                    docType: "BROCHURE",
                    content: `Sumner Woodcrafting\n\nSumner Woodcrafting of Memphis, Tennessee, was established nearly 45 years ago by Kiran Sumner, with the goal of providing personalized service to customers seeking high-quality, handmade furniture. Now semiretired, Mr. Sumner still takes orders and responds to questions himself through the company's customer-service telephone line at 901-555-0185 on Thursdays and Fridays. Sumner Woodcrafting offers a wide selection of custom-made bedroom sets, tables, desks, cabinetry, and more—all made from high-quality solid woods.\n\nPrices for handcrafted furniture are naturally higher than for furniture that is mass-produced in a factory. Because our master crafters do exceptionally fine work, our customers never regret spending a bit more for pieces built to last for generations.\n\nNote that it can take up to two months to create a piece of furniture once it is ordered. Delivery fees are based on distance from our workshop. Unpacking and placing the item is available for an additional $50.\n\nFor photos of our workshop, artisan biographies, customer reviews, and ordering information, please visit us online at www.sumnerwoodcrafting.com.`,
                    translation: `섬너 우드크래프팅\n\n테네시주 멤피스의 섬너 우드크래프팅은 고품질의 수제 가구를 찾는 고객들에게 맞춤형 서비스를 제공하려는 목표로 45년 전 키란 섬너에 의해 설립되었습니다. 현재 반은퇴 상태인 섬너 씨는 여전히 목요일과 금요일에 고객 서비스 전화(901-555-0185)를 통해 본인이 직접 주문을 받고 문의에 응대합니다. 섬너 우드크래프팅은 침실 세트, 테이블, 책상, 수납장 등 직접 제작한 다양한 가구를 선별하여 제공하며, 모두 고품질의 견고한 목재로 만들어집니다.\n\n손으로 만든 가구의 가격은 공장에서 대량 생산되는 가구보다 자연스럽게 더 높습니다. 저희 숙련된 장인들이 유난히 훌륭한 작업을 수행하기 때문에, 저희 고객들은 여러 세대 동안 지속될 가구에 조금 더 많은 비용을 지출하는 것을 결코 후회하지 않습니다.\n\n가구 한 점을 제작하는 데 주문 후 최대 두 달이 걸릴 수 있다는 점에 유의하십시오. 배송비는 저희 작업장에서의 거리를 기준으로 합니다. 추가 50달러의 요금으로 제품의 포장 제거 및 배치를 이용할 수 있습니다.\n\n저희 작업장 사진, 장인들의 약력, 고객 구매 후기 및 주문 정보를 보시려면 웹사이트(www.sumnerwoodcrafting.com)를 방문해 주십시오.`
                }
            ],
            questions: [
                {
                    id: "v4-p7-t7-q158",
                    questionNo: 158,
                    text: "What is mentioned about Sumner Woodcrafting?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Its prices are highly competitive.",
                        "B": "It offers free delivery in Memphis.",
                        "C": "Its founder handles telephone inquiries.",
                        "D": "It allows customers to tour its workshop."
                    },
                    correctAnswer: "C",
                    translation: "섬너 우드크래프팅에 대해 언급된 것은?",
                    explanation: `설립자(Kiran Sumner)가 여전히 전화 라인을 통해 직접 문의에 응답한다(Mr. Sumner still ... responds to questions himself through the company's customer-service telephone line)고 언급되었습니다.`
                },
                {
                    id: "v4-p7-t7-q159",
                    questionNo: 159,
                    text: "The word \"fine\" in paragraph 2, line 2, is closest in meaning to",
                    classification: "P7_VOCABULARY",
                    options: {
                        "A": "small",
                        "B": "sharp",
                        "C": "skillful",
                        "D": "agreeable"
                    },
                    correctAnswer: "C",
                    translation: "지문 내 'fine'과 의미가 가장 가까운 것은?",
                    explanation: `장인들이 작업을 훌륭하게/정교하게 수행한다는 의미이므로 '숙련된, 솜씨 좋은' 뜻의 (C) skillful이 적절합니다.`
                },
                {
                    id: "v4-p7-t7-q160",
                    questionNo: 160,
                    text: "What is suggested about Sumner Woodcrafting's products?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "They are extremely long-lasting.",
                        "B": "They contain both natural and human-made materials.",
                        "C": "They often require assembly after delivery.",
                        "D": "They are usually ordered for offices."
                    },
                    correctAnswer: "A",
                    translation: "섬너 우드크래프팅 제품에 대해 알 수 있는 것은?",
                    explanation: `가구들이 대를 이어 지속되도록 만들어졌다(built to last for generations)고 했으므로 수명이 매우 길다는 (A)가 정답입니다.`
                }
            ]
        },
        // Questions 161-163: Article
        {
            id: "v4-p7-t7-set7",
            setType: "Single",
            questionRange: "161-163",
            passages: [
                {
                    id: "v4-p7-t7-s7-p1",
                    contextType: "P3_MEDI",
                    docType: "ARTICLE",
                    content: `COLLINSVALE (28 March)—Over the last decade, instability in the pricing of raw materials has become the biggest concern for manufacturers. The issue now surpasses recruitment and technology, which had previously been ranked by businesses as the top two concerns respectively.\n\nThe reasons are not difficult to understand. For electronics manufacturers, materials typically represent 20 percent of all expenses, while makers of processed food can spend anywhere between 40 and 60 percent on materials. Thus, even a 10 percent rise in the cost of sugar can dramatically affect a factory's bottom line. Companies that can predict rising costs may be able to temper the effects of market volatility, but even the best forecasting cannot anticipate every change in the marketplace.`,
                    translation: `콜린스베일 (3월 28일) — 지난 10년 동안 원자재 가격의 불안정성은 제조업체들에게 가장 큰 걱정거리가 되었습니다. 이제 이 문제는 이전에 기업들이 꼽았던 상위 두 가지 걱정인 채용과 기술을 넘어섰습니다.\n\n그 이유는 이해하기 어렵지 않습니다. 전자제품 제조업체의 경우, 일반적으로 원자재가 전체 비용의 20%를 차지하는 반면, 가공식품 제조업체는 40~60% 사이를 원자재에 지출할 수 있습니다. 따라서 설탕 가격이 단 10%만 올라도 공장의 수익에 큰 영향을 미칠 수 있습니다. 비용 상승을 예측할 수 있는 기업은 시장 변동의 영향을 완화할 수 있을지 모르지만, 최고의 예측조차 시장의 모든 변화를 예상할 수는 없습니다.`
                }
            ],
            questions: [
                {
                    id: "v4-p7-t7-q161",
                    questionNo: 161,
                    text: "What is the article mainly about?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "An improvement in manufacturing methods",
                        "B": "A recent shift in consumer preferences",
                        "C": "The introduction of environmental regulations",
                        "D": "The changes in costs faced by producers"
                    },
                    correctAnswer: "D",
                    translation: "기사의 주제는?",
                    explanation: `기사 전반이 원자재 가격 변동(instability in the pricing of raw materials)이 제조업체에 미치는 영향에 대해 다루고 있으므로 생산자가 직면한 비용 변화인 (D)가 정답입니다.`
                },
                {
                    id: "v4-p7-t7-q162",
                    questionNo: 162,
                    text: "Why does the writer mention electronics manufacturers?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "To illustrate innovation over ten years",
                        "B": "To show the impact of global trade",
                        "C": "To explain recent staffing difficulties",
                        "D": "To make a comparison between industries"
                    },
                    correctAnswer: "D",
                    translation: "작성자가 전자제품 제조업체를 언급한 이유는?",
                    explanation: `전자제품 업체(20%)와 가공식품 업체(40~60%)의 원자재 비중 차이를 보여주기 위한 비유이므로 업종 간 비교인 (D)가 정답입니다.`
                },
                {
                    id: "v4-p7-t7-q163",
                    questionNo: 163,
                    text: "The word \"temper\" in paragraph 2, line 9, is closest in meaning to",
                    classification: "P7_VOCABULARY",
                    options: {
                        "A": "set",
                        "B": "toughen",
                        "C": "moderate",
                        "D": "combine"
                    },
                    correctAnswer: "C",
                    translation: "지문 내 'temper'와 의미가 가장 가까운 것은?",
                    explanation: `변동의 영향을 '완화하다, 완충하다'는 의미로 쓰였으므로 '조절하다, 완화하다'는 뜻의 (C) moderate가 정답입니다.`
                }
            ]
        },
        // Questions 164-167: Announcement
        {
            id: "v4-p7-t7-set8",
            setType: "Single",
            questionRange: "164-167",
            passages: [
                {
                    id: "v4-p7-t7-s8-p1",
                    contextType: "P2_OFFI",
                    docType: "NOTICE",
                    content: `The Lowenstein Bookstore in Mission Bay invites you to this month's book discussion featuring author Hilda Flores. The event will be held on Thursday, April 10, from 7:00 P.M. to 8:30 P.M. Ms. Flores will talk about her new novel, Grinding the Gears. — [1] —. The latest adventure in the popular Inspector Svensson series, Grinding the Gears finds the beloved inspector investigating strange equipment malfunctions at a national physics research laboratory. — [2] —.\n\nMs. Flores will discuss the background research she performed while writing the book. — [3] —. A question and answer session will follow the presentation. The event is free for all to attend. — [4] —. The bookstore requires that attendees register at least one day in advance.`,
                    translation: `미션 베이에 위치한 로웬스타인 서점은 작가 힐다 플로레스가 출연하는 이번 달 도서 토론회에 여러분을 초대합니다. 행사는 4월 10일 목요일 오후 1시부터 8시 30분까지 진행됩니다. 플로레스 씨는 그녀의 새로운 소설인 <기어 갈아끼기>에 대해 이야기할 것입니다. — [1] —. 인기 있는 수사관 스벤슨 시리즈의 최신 어드벤처인 <기어 갈아끼기>에서 사랑받는 수사관은 국가 물리학 연구소의 이상한 장비 오작동을 조사하게 됩니다. — [2] —.\n\n플로레스 씨는 책을 쓰는 동안 수행했던 배경 조사에 대해서도 논의할 예정입니다. — [3] —. 프레젠테이션 후에 질의응답 시간이 이어집니다. 이 행사는 모든 사람이 무료로 참석할 수 있습니다. — [4] —. 서점은 참석자들이 최소 하루 전에 등록할 것을 요구합니다.`
                }
            ],
            questions: [
                {
                    id: "v4-p7-t7-q164",
                    questionNo: 164,
                    text: "What is being announced?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "The opening of a new bookstore",
                        "B": "A presentation by a book author",
                        "C": "A book describing a research project",
                        "D": "An upcoming movie based on a book"
                    },
                    correctAnswer: "B",
                    translation: "발표되고 있는 내용은?",
                    explanation: `작가 힐다 플로레스의 도서 토론 및 프레젠테이션이 있을 것임을 알리고 있으므로 (B)가 정답입니다.`
                },
                {
                    id: "v4-p7-t7-q165",
                    questionNo: 165,
                    text: "What type of book is Grinding the Gears?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "A nonfiction story",
                        "B": "A biography of a scientist",
                        "C": "A collection of short stories",
                        "D": "A mystery novel"
                    },
                    correctAnswer: "D",
                    translation: "<기어 갈아끼기>는 어떤 종류의 책인가?",
                    explanation: `수사관 스벤슨(Inspector Svensson) 시리즈 중 하나이며 조사(investigating)를 다루고 있으므로 미스터리 소설임을 알 수 있습니다.`
                },
                {
                    id: "v4-p7-t7-q166",
                    questionNo: 166,
                    text: "What is indicated about registration?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It closes on April 9.",
                        "B": "It requires payment of a fee.",
                        "C": "It is optional but encouraged.",
                        "D": "It cannot be completed online."
                    },
                    correctAnswer: "A",
                    translation: "등록에 대해 언급된 것은?",
                    explanation: `행사가 4월 10일인데 최소 하루 전(at least one day in advance)에 등록하라고 했으므로 4월 9일에 마감됨을 알 수 있습니다.`
                },
                {
                    id: "v4-p7-t7-q167",
                    questionNo: 167,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Part of her fact-finding involved interviewing government scientists.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "C",
                    translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"그녀의 사실 조사의 일부는 정부 과학자들과 인터뷰하는 것을 포함했습니다.\"",
                    explanation: `주어진 문장은 사실 조사/배경 조사에 대한 구체적인 내용입니다. 본문의 '배경 조사(background research)'를 언급한 문장 바로 뒤인 [3]번 위치가 가장 적합합니다.`
                }
            ]
        },
        // Questions 168-171: E-mail
        {
            id: "v4-p7-t7-set9",
            setType: "Single",
            questionRange: "168-171",
            passages: [
                {
                    id: "v4-p7-t7-s9-p1",
                    contextType: "P1_CORR",
                    docType: "EMAIL",
                    content: `To: Customer Service <customerservice@kishintech.com>\nFrom: Dmytro Petrov <d.petrov@silkmail.com>\nDate: November 5\nSubject: Assistance with Kishin XT20 digital recorder\n\nTo Whom It May Concern:\n\nI purchased the Kishin XT20 digital recorder to record several days' worth of conference presentations. Now, after my first day at the event, I am trying to transfer the audio files to my laptop, but I am not having any luck. I have followed all the instructions in the user manual as well as the tips found in the FAQ section of the product's Web page. I have even tried alternative cords and the laptops in the hotel's business center, so I do not believe computer hardware to be the issue.\n\nI am supposed to cover the remaining two days of this conference for work. My business partners expect me to return with as much information as I can. The Kishin XT20 digital recorder is of no use to me if I cannot properly share the files. Can you please help?\n\nBest regards,\n\nDmytro Petrov`,
                    translation: `수신: 고객 서비스 <customerservice@kishintech.com>\n발신: 드미트로 페트로브 <d.petrov@silkmail.com>\n날짜: 11월 5일\n제목: 키신 XT20 디지털 녹음기 관련 도움 요청\n\n관계자 귀하:\n\n저는 며칠간의 학회 발표를 녹음하기 위해 키신 XT20 디지털 녹음기를 구매했습니다. 행사 첫날을 마치고 오디오 파일을 노트북으로 옮기려 하고 있으나 잘 되지 않고 있습니다. 사용자 설명서의 모든 지침과 제품 웹사이트 FAQ 섹션의 팁들을 모두 따랐습니다. 다른 전선들과 호텔 비즈니스 센터의 노트북들도 사용해 보았기에 컴퓨터 하드웨어의 문제는 아니라고 생각합니다.\n\n저는 업무상 이 학회의 남은 이틀을 취재해야 합니다. 제 파트너들은 제가 가능한 한 많은 정보를 가지고 돌아오기를 기대하고 있습니다. 파일을 제대로 공유할 수 없다면 이 녹음기는 제게 아무 소용이 없습니다. 도와주실 수 있나요?\n\n감사합니다.\n\n드미트로 페트로브`
                }
            ],
            questions: [
                {
                    id: "v4-p7-t7-q168",
                    questionNo: 168,
                    text: "What problem does Mr. Petrov have with his device?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "He cannot move audio files to his computer.",
                        "B": "He dislikes its appearance.",
                        "C": "He is unable to rename the files.",
                        "D": "He is unsatisfied with the sound quality."
                    },
                    correctAnswer: "A",
                    translation: "페트로브 씨는 기기에 어떤 문제가 있는가?",
                    explanation: `오디오 파일을 노트북으로 전송(transfer the audio files to my laptop)하는 데 실패했다고 언급했습니다.`
                },
                {
                    id: "v4-p7-t7-q169",
                    questionNo: 169,
                    text: "Why does Mr. Petrov mention a Web page?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "To suggest that an image is misleading",
                        "B": "To explain that he obtained additional information",
                        "C": "To recommend changing a product description",
                        "D": "To inquire about compatible accessories"
                    },
                    correctAnswer: "B",
                    translation: "페트로브 씨가 웹사이트를 언급한 이유는?",
                    explanation: `설명서 외에도 웹사이트의 FAQ 섹션에서 팁(tips found in the FAQ section)을 얻어 시도해 보았음을 알리기 위함입니다.`
                },
                {
                    id: "v4-p7-t7-q170",
                    questionNo: 170,
                    text: "The word \"cover\" in paragraph 2, line 1, is closest in meaning to",
                    classification: "P7_VOCABULARY",
                    options: {
                        "A": "protect",
                        "B": "contain",
                        "C": "extend over",
                        "D": "report on"
                    },
                    correctAnswer: "D",
                    translation: "지문 내 'cover'와 의미가 가장 가까운 것은?",
                    explanation: `학회 내용을 취재/보고한다는 의미이므로 '보도하다, 보고하다'는 뜻의 (D) report on이 적절합니다.`
                },
                {
                    id: "v4-p7-t7-q171",
                    questionNo: 171,
                    text: "What is true about Mr. Petrov?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "He volunteered to try some equipment.",
                        "B": "He is currently traveling with his business partners.",
                        "C": "He will share conference material with his colleagues.",
                        "D": "He will soon receive a new laptop from his company."
                    },
                    correctAnswer: "C",
                    translation: "페트로브 씨에 대해 사실인 것은?",
                    explanation: `학회 정보를 가지고 돌아가서 파트너들과 공유해야 한다(share the files)는 언급을 통해 (C)를 알 수 있습니다.`
                }
            ]
        },
        // Questions 172-175: Online Chat
        {
            id: "v4-p7-t7-set10",
            setType: "Single",
            questionRange: "172-175",
            passages: [
                {
                    id: "v4-p7-t7-s10-p1",
                    contextType: "P7_CONV",
                    docType: "CHAT_MESSAGE",
                    content: `Kristin Burton (8:16 A.M.)\nThis is my first time posting on this small-business forum. Has anyone here experienced problems when ordering one of Atiara's credit card readers?\n\nMarcos Menke (9:04 A.M.)\nAre you referring to the little unit that attaches to your mobile phone or the larger, stand-alone tablet model?\n\nKristin Burton (9:30 A.M.)\nThe phone unit. I started an online shop using the Atiara Web hosting service and added pictures of the necklaces and rings I create. But most of my sales are still in person. So I just need a way to accept in-person payments when I'm out at fairs or markets.\n\nMarcos Menke (10:19 A.M.)\nJust go to www.atiara.com/pos/hardware and add what you want to your cart.\n\nKristin Burton (11:21 A.M.)\nThat's the problem. The system won't let me order it. I get the error message "Your account cannot be verified."\n\nSuzanne Shroer (11:42 A.M.)\nI think I know. You have to upload scans of your business registration, a government photo ID, and a statement from your business bank account.\n\nKristin Burton (12:23 P.M.)\nI already did all that, and I still got the error message.\n\nSuzanne Shroer (12:33 P.M.)\nIf that is the case, try logging back in and following the process again.\n\nCindy Acosta (1:05 P.M.)\nYou probably need to call the support line. I found them to be very helpful with my issues a few months ago.\n\nKristin Burton (1:10 P.M.)\nI've spoken with three people already.`,
                    translation: `크리스틴 버튼 (오전 8:16) 이번에 소규모 사업자 포럼에 처음 글을 올립니다. 아티아라의 신용카드 리더기를 주문할 때 문제를 겪으신 분 계신가요?\n\n마르코스 멘케 (오전 9:04) 휴대폰에 부착하는 작은 장치를 말씀하시는 건가요, 아니면 더 큰 스탠드형 태블릿 모델을 말씀하시는 건가요?\n\n크리스틴 버튼 (오전 9:30) 휴대폰용 장치요. 아티아라 웹 호스팅 서비스를 이용해 온라인 샵을 시작했고 제가 만든 목걸이와 반지 사진을 올렸습니다. 하지만 판매의 대부분은 여전히 대면으로 이루어집니다. 그래서 박람회나 시장에 나갔을 때 현장 결제를 받을 방법이 필요합니다.\n\n마르코스 멘케 (오전 10:19) www.atiara.com/pos/hardware에 들어가서 원하는 물품을 장바구니(cart)에 담으세요.\n\n크리스틴 버튼 (오전 11:21) 그게 문제예요. 시스템에서 주문이 안 돼요. "계정을 확인할 수 없습니다"라는 오류 메시지가 뜹니다.\n\n수잔 슈로어 (오전 11:42) 제가 알 것 같네요. 사업자 등록증, 정부 발급 신분증, 사업자 은행 계좌 내역서 스캔본을 업로드해야 합니다.\n\n크리스틴 버튼 (오후 12:23) 이미 다 했는데도 여전히 오류 메시지가 뜹니다.\n\n수잔 슈로어 (오후 12:33) 그렇다면 로그아웃했다가 다시 로그인해서 절차를 다시 진행해 보세요.\n\n신디 아코스타 (오후 1:05) 아마 고객지원센터에 전화해 보셔야 할 거예요. 몇 달 전에 제가 문제가 있었을 때 그분들이 큰 도움이 되었습니다.\n\n크리스틴 버튼 (오후 1:10) 이미 세 사람과 통화했습니다.`
                }
            ],
            questions: [
                {
                    id: "v4-p7-t7-q172",
                    questionNo: 172,
                    text: "What does Mr. Menke ask Ms. Burton to clarify?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "The type of device she wants to buy",
                        "B": "Items that are shown on her Web site",
                        "C": "A method for charging a mobile phone",
                        "D": "The amount she was billed for a service"
                    },
                    correctAnswer: "A",
                    translation: "멘케 씨가 버튼 씨에게 명확히 확인해 달라고 한 것은?",
                    explanation: `리더기가 휴대폰 부착용인지 아니면 큰 태블릿 모델인지(little unit ... or the larger ... model)를 묻고 있으므로 정답은 (A)입니다.`
                },
                {
                    id: "v4-p7-t7-q173",
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
                    translation: "버튼 씨가 판매하는 것은 무엇일 것 같은가?",
                    explanation: `직접 만든 목걸이와 반지(necklaces and rings) 사진을 올렸다고 했으므로 정답은 보석류(Jewelry)입니다.`
                },
                {
                    id: "v4-p7-t7-q174",
                    questionNo: 174,
                    text: "What does Ms. Shroer suggest?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Filling out a service request form",
                        "B": "Adjusting settings on a card reader",
                        "C": "Submitting some documentation",
                        "D": "Opening a separate business account"
                    },
                    correctAnswer: "C",
                    translation: "슈로어 씨가 제안한 것은?",
                    explanation: `사업자 등록증, 신분증 등 서류 스캔본을 업로드(upload scans)하라고 했으므로 (C)가 정답입니다.`
                },
                {
                    id: "v4-p7-t7-q175",
                    questionNo: 175,
                    text: "At 1:10 P.M., what does Ms. Burton most likely mean when she writes, \"I've spoken with three people already\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "She was impressed by the company's response.",
                        "B": "She has already called the support line.",
                        "C": "She has researched several issues thoroughly.",
                        "D": "She is unsure how to use the online forum."
                    },
                    correctAnswer: "B",
                    translation: "오후 1시 10분에 버튼 씨가 \"이미 세 사람과 통화했습니다\"라고 쓴 의도는?",
                    explanation: `고객지원센터에 전화해 보라는 권유에 이미 세 명과 통화했다는 것은, 이미 그 방법을 시도해 보았음을 뜻합니다.`
                }
            ]
        }
    ]
};
