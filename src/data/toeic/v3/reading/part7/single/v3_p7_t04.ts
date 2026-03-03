export const test4Data: Part7Test = {
    testId: 4,
    vol: 3,
    title: "Test 4",
    sets: [
        {
            id: "v3-p7-t4-set1",
            setType: "Single",
            questionRange: "147-148",
            passages: [
                {
                    id: "v3-p7-t4-s1-p1",
                    contextType: "P4_MARK",
                    docType: "ADVERTISEMENT",
                    content: "STAR FITNESS CLUB\nGrand Opening Event on 25 April\n\nCome and join us as we open our newest club in Summerlake City in our brand-new building located at 714 Shadow Road. Come and see our state-of-the-art equipment and meet our experienced fitness trainers and instructors while enjoying healthy refreshments.\n\nSpecial Offer: Take 20 percent off your first 3 months! The offer is for new members only and cannot be combined with any other offer. The offer is available at all Star Fitness locations and is good until 30 June.\n\nVisit www.starfitness.ca for more information, including a schedule of our fitness classes and club hours.",
                    translation: "STAR FITNESS CLUB\n4월 25일 그랜드 오프닝 이벤트\n\nSummerlake 시의 714 Shadow Road에 위치한 신축 건물에 새롭게 문을 여는 저희 클럽에 여러분을 초대합니다. 최첨단 시설을 둘러보시고 풍부한 경험을 갖춘 피트니스 트레이너와 강사진을 만나보세요. 건강에 좋은 음료도 준비되어 있습니다.\n\n특별 혜택: 첫 3개월 동안 20% 할인 혜택을 드립니다! 이 혜택은 신규 회원에게만 적용되며 다른 혜택과 중복 적용되지 않습니다. 이 혜택은 모든 Star Fitness 지점에서 이용 가능하며 6월 30일까지 유효합니다.\n\n피트니스 수업 일정 및 운영 시간을 포함한 자세한 정보는 www.starfitness.ca를 방문해 주세요."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t4-q147",
                    questionNo: 147,
                    text: "What is indicated about Star Fitness Club?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It has just built a new facility.",
                        "B": "It provides refreshments with paid membership.",
                        "C": "It is currently selling its used exercise equipment.",
                        "D": "It is open seven days a week."
                    },
                    correctAnswer: "A",
                    translation: "Star Fitness Club에 대해 알 수 있는 것은 무엇입니까?",
                    explanation: "지문 첫 문장에서 'brand-new building'에 오픈한다고 했으므로 새 시설을 지었음을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t4-q148",
                    questionNo: 148,
                    text: "What is NOT mentioned about the special offer?",
                    classification: "P7_NEGATIVE",
                    options: {
                        "A": "It expires at the end of June.",
                        "B": "It can be used at any location.",
                        "C": "It includes sessions with a personal trainer.",
                        "D": "It is intended for new customers only."
                    },
                    correctAnswer: "C",
                    translation: "특별 혜택에 대해 언급되지 않은 것은 무엇입니까?",
                    explanation: "6월 말 마감(30 June), 모든 지점 이용 가능(all Star Fitness locations), 신규 회원 대상(new members only)은 언급되었으나 개인 트레이너 세션 포함 여부는 언급되지 않았습니다."
                }
            ]
        },
        {
            id: "v3-p7-t4-set2",
            setType: "Single",
            questionRange: "149-150",
            passages: [
                {
                    id: "v3-p7-t4-s2-p1",
                    contextType: "P2_OFFI",
                    docType: "NOTICE",
                    content: "WH\nWesterly Hotel\n295 Prudence Ave.\nAtlanta, GA 30317\n\nDear Guest,\n\nWelcome to Atlanta. We are pleased you have chosen the Westerly Hotel.\n\nA complimentary breakfast is served daily from 6:00 A.M. to 10:30 A.M. in our dining area located in the lobby. Enjoy an array of selections including eggs, oatmeal, pastries, fresh fruit, cereal, juice, coffee, and tea. Please be aware, however, that on May 2 breakfast will be served in the Fin Restaurant, located on the third floor, to accommodate a private event.\n\nRegards,\n\nMalcolm Anderson, Manager\nWesterly Hotel",
                    translation: "WH\nWesterly 호텔\n295 Prudence Ave.\nAtlanta, GA 30317\n\n고객님께,\n\n애틀랜타에 오신 것을 환영합니다. Westerly 호텔을 선택해 주셔서 기쁩니다.\n\n로비에 위치한 다이닝 공간에서 매일 오전 6시부터 10시 30분까지 무료 조식이 제공됩니다. 계란, 오트밀, 페이스트리, 신선한 과일, 시리얼, 주스, 커피, 차 등 다양한 메뉴를 즐겨보세요. 다만, 5월 2일에는 비공개 행사로 인해 조식이 3층에 위치한 Fin 레스토랑에서 제공될 예정이오니 참고해 주시기 바랍니다.\n\n감사합니다.\n\nMalcolm Anderson, 매니저\nWesterly 호텔"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t4-q149",
                    questionNo: 149,
                    text: "What is a purpose of the note?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To request feedback on a recent stay",
                        "B": "To inform a guest of a location change",
                        "C": "To invite a guest to a private event",
                        "D": "To announce the opening of a new hotel"
                    },
                    correctAnswer: "B",
                    translation: "이 안내문의 목적은 무엇입니까?",
                    explanation: "5월 2일에 조식 제공 장소가 변경(breakfast will be served in the Fin Restaurant)됨을 알리는 것이 주된 목적 중 하나입니다."
                },
                {
                    id: "v3-p7-t4-q150",
                    questionNo: 150,
                    text: "What is stated about the breakfast?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It is free of charge.",
                        "B": "It is not available on weekends.",
                        "C": "It will not be served on May 2.",
                        "D": "It will soon feature more selections."
                    },
                    correctAnswer: "A",
                    translation: "조식에 대해 명시된 사실은 무엇입니까?",
                    explanation: "지문에 'A complimentary breakfast(무료 조식)'라고 명시되어 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t4-set3",
            setType: "Single",
            questionRange: "151-152",
            passages: [
                {
                    id: "v3-p7-t4-s3-p1",
                    contextType: "P2_OFFI",
                    docType: "NOTICE",
                    content: "Things Are Happening with the Southeast Rail Line—Time to Get Involved!\n\nPlans are moving forward with the renovations to the Southeast Rail Line. The changes will create a faster, more convenient, more reliable alternative to traveling on the area's congested roadways. Construction begins this September. Public meetings to solicit comments regarding design options for the new stations are scheduled for June, July, and August. Learn more about the meetings by visiting www.southeastrailproject.com/communityaffairs.",
                    translation: "Southeast 철도 노선에 변화가 일어나고 있습니다—함께 참여할 시간입니다!\n\nSoutheast 철도 노선의 개보수 계획이 진행되고 있습니다. 이번 변화를 통해 해당 지역의 혼잡한 도로 주행보다 더 빠르고 편리하며 믿을 수 있는 대안이 마련될 것입니다. 공사는 이번 9월에 시작됩니다. 새 역사의 설계 옵션에 대한 의견을 수렴하기 위한 공청회가 6월, 7월, 8월에 예정되어 있습니다. www.southeastrailproject.com/communityaffairs를 방문하여 공청회에 대해 자세히 알아보세요."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t4-q151",
                    questionNo: 151,
                    text: "When will construction start on the project?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "In June",
                        "B": "In July",
                        "C": "In August",
                        "D": "In September"
                    },
                    correctAnswer: "D",
                    translation: "프로젝트 공사는 언제 시작됩니까?",
                    explanation: "지문에 'Construction begins this September'라고 명시되어 있습니다."
                },
                {
                    id: "v3-p7-t4-q152",
                    questionNo: 152,
                    text: "What will be discussed at the public meetings?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "The reduction of roadway traffic",
                        "B": "The source of construction materials",
                        "C": "The design of the train stations",
                        "D": "The schedule of the express trains"
                    },
                    correctAnswer: "C",
                    translation: "공청회에서는 무엇이 논의될 예정입니까?",
                    explanation: "지문에 'design options for the new stations'에 대한 의견을 수렴한다고 언급되어 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t4-set4",
            setType: "Single",
            questionRange: "153-154",
            passages: [
                {
                    id: "v3-p7-t4-s4-p1",
                    contextType: "P2_OFFI",
                    docType: "TEXT_MESSAGE",
                    content: "Lisa Dominguez (3:24 P.M.) Hi, Travis. I'm at the market shopping for tomatoes, but none of them are ripe. Can you check to see if we have any frozen tomato sauce on hand from last week? Otherwise, I guess I could get some canned tomatoes.\nTravis Farley (3:27 P.M.) I'm afraid we are all out. Let me speak to the chef.\nLisa Dominguez (3:28 P.M.) That would be great.\nTravis Farley (3:32 P.M.) She says that you can pick up red peppers instead. We will need to make a small change to the menu description, but the other ingredients can stay the same.\nLisa Dominguez (3:34 P.M.) OK. I've got it. Thank you!",
                    translation: "Lisa Dominguez (오후 3:24) 안녕 Travis. 시장에서 토마토를 사고 있는데 익은 게 하나도 없네. 지난주에 쓰고 남은 냉동 토마토 소스가 있는지 확인해 줄 수 있어? 안 되면 통조림 토마토라도 사야 할 것 같아.\nTravis Farley (오후 3:27) 아쉽게도 다 떨어졌어. 주방장님께 여쭤볼게.\nLisa Dominguez (오후 3:28) 그러면 좋겠다.\nTravis Farley (오후 3:32) 주방장님이 대신 빨간 피망을 사오라고 하시네. 메뉴 설명을 조금 수정해야겠지만 다른 재료들은 그대로 써도 된대.\nLisa Dominguez (오후 3:34) 알았어. 확인했어. 고마워!"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t4-q153",
                    questionNo: 153,
                    text: "For what kind of business does Mr. Farley most likely work?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "A farm",
                        "B": "A grocery store",
                        "C": "A restaurant",
                        "D": "A delivery service"
                    },
                    correctAnswer: "C",
                    translation: "Mr. Farley는 어떤 종류의 사업장에서 일할 가능성이 가장 높습니까?",
                    explanation: "주방장(chef)과 상의하고 메뉴 설명(menu description)을 변경한다는 내용으로 보아 레스토랑입니다."
                },
                {
                    id: "v3-p7-t4-q154",
                    questionNo: 154,
                    text: "At 3:27 P.M., what does Mr. Farley mean when he writes, \"I'm afraid we are all out\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "Staff members have no more ideas.",
                        "B": "A deadline was missed.",
                        "C": "Employees have left the workplace.",
                        "D": "An item is not available."
                    },
                    correctAnswer: "D",
                    translation: "오후 3:27에 Mr. Farley가 \"I'm afraid we are all out\"이라고 쓴 의미는 무엇입니까?",
                    explanation: "Lisa가 물어본 냉동 토마토 소스가 재고가 없다는 뜻이므로 물품이 준비되지 않았다는 의미입니다."
                }
            ]
        },
        {
            id: "v3-p7-t4-set5",
            setType: "Single",
            questionRange: "155-157",
            passages: [
                {
                    id: "v3-p7-t4-s5-p1",
                    contextType: "P2_OFFI",
                    docType: "NOTICE",
                    content: "Attention, Members of the Belle Coffee Club:\n\n— [1] —. Next week, Belle Coffee will debut our newest coffee creation, the Latte Slow Brew. — [2] —. Members of the Belle Coffee Club can get their first taste of this new treat at our flagship store at 200 Wellington Street. We invite you to stop by on January 12 and show your membership card for a complimentary cup of Latte Slow Brew and a pastry sample from our local partner, Yonge Confections. Choose from a variety of their fresh-baked muffins, including a flavour baked especially for Belle Coffee: the chocolate espresso muffin. — [3] —.\n\nRollout at our other Belle Coffee locations will follow over the next four weeks. To learn more, visit bellecoffee.ca. — [4] —.\n\nEnjoy!",
                    translation: "Belle Coffee Club 회원 여러분께 알립니다:\n\n— [1] —. 다음 주, Belle Coffee에서 새로운 야심작인 'Latte Slow Brew'를 처음 선보입니다. — [2] —. Belle Coffee Club 회원분들은 200 Wellington Street에 위치한 저희 플래그십 매장에서 이 새로운 음료를 가장 먼저 맛보실 수 있습니다. 1월 12일 매장을 방문하여 회원 카드를 보여주시면, 무료 Latte Slow Brew 한 잔과 저희의 지역 파트너인 Yonge Confections의 페이스트리 샘플을 드립니다. Belle Coffee만을 위해 특별히 구워낸 초콜릿 에스프레소 머핀을 포함하여 갓 구운 다양한 머핀 중에서 선택해 보세요. — [3] —.\n\n다른 Belle Coffee 지점들도 향후 4주에 걸쳐 순차적으로 출시될 예정입니다. 자세한 내용은 bellecoffee.ca를 방문해 주세요. — [4] —.\n\n즐거운 시간 되세요!"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t4-q155",
                    questionNo: 155,
                    text: "What will Belle Coffee do on January 12 ?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Merge with Yonge Confections",
                        "B": "Open a second location",
                        "C": "Introduce a new product",
                        "D": "Start a membership program"
                    },
                    correctAnswer: "C",
                    translation: "1월 12일에 Belle Coffee는 무엇을 할 예정입니까?",
                    explanation: "지문에서 1월 12일에 플래그십 매장에서 새로운 제품(Latte Slow Brew)의 시음 행사를 가진다고 했습니다."
                },
                {
                    id: "v3-p7-t4-q156",
                    questionNo: 156,
                    text: "According to the notice, what is available on the Web site?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "A coupon",
                        "B": "A recipe",
                        "C": "An application form",
                        "D": "A schedule"
                    },
                    correctAnswer: "D",
                    translation: "공지에 따르면, 웹사이트에서 이용 가능한 것은 무엇입니까?",
                    explanation: "다른 지점들의 출시 일정(Rollout at our other Belle Coffee locations will follow over the next four weeks)에 대해 더 알고 싶으면 사이트를 방문하라고 했으므로 일정을 확인할 수 있습니다."
                },
                {
                    id: "v3-p7-t4-q157",
                    questionNo: 157,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Additional coffee products and pastries will be available for purchase.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "C",
                    translation: "지정된 위치 [1], [2], [3], [4] 중 다음 문장이 들어가기에 가장 적절한 곳은?\n\"추가적인 커피 제품 및 페이스트리 제품들도 구매하실 수 있습니다.\"",
                    explanation: "무료 샘플 및 제품 시음 안내를 마친 후, 다른 제품들도 구매 가능하다는 안내를 덧붙이는 [3]이 가장 적절합니다."
                }
            ]
        },
        {
            id: "v3-p7-t4-set6",
            setType: "Single",
            questionRange: "158-160",
            passages: [
                {
                    id: "v3-p7-t4-s6-p1",
                    contextType: "P3_MEDI",
                    docType: "BULLETIN",
                    content: "Dalston Opera News\n\nSeason Tickets Now Available\nPurchase your season tickets now at www.dalstonopera.com/seasontickets.\nMay 4-12: Sigrun (2 hours with 1 intermission)\nJuly 6-14: Le Lapin (3 hours with 2 intermissions)\nSeptember 14-22: The Shipmaster's Garden (90 minutes with no intermission)\nNovember 30-December 8: Orkestia (4 hours with 3 intermissions)\nPerformances will take place at the Saloudi Auditorium beginning promptly at 8:00 P.M.\n\nArtist-in-Residence Series\nOur rotating artist-in-residence program aims to bring new voices into the performances of our regular cast. Join us for a special series of noon matinee performances by these artists and help us celebrate the next generation of talent coming into the field of opera from around the globe. Each performance will feature a medley of opera favorites selected and performed by one of our artists-in-residence.\nMay 4: Diane Shimoda\nJuly 6: Kalim Patton\nSeptember 14: Claudia Godin\nNovember 30: Nicolai Souza",
                    translation: "Dalston Opera 소식\n\n시즌 티켓 판매 시작\n지금 www.dalstonopera.com/seasontickets에서 시즌 티켓을 구매하세요.\n5월 4일~12일: Sigrun (1회 휴식 포함 2시간)\n7월 6일~14일: Le Lapin (2회 휴식 포함 3시간)\n9월 14일~22일: The Shipmaster's Garden (휴식 없이 90분)\n11월 30일~12월 8일: Orkestia (3회 휴식 포함 4시간)\n공연은 Saloudi Auditorium에서 오후 8시 정각에 시작됩니다.\n\n상주 예술가 시리즈\n순환 상주 예술가 프로그램은 정규 출연진의 공연에 새로운 목소리를 입히는 것을 목표로 합니다. 이 예술가들이 선보이는 특별 정오 마티네 공연 시리즈에 참여하여 전 세계 오페라 계로 진출하는 다음 세대의 재능을 함께 축하해 주세요. 각 공연은 저희 상주 예술가 한 명이 선정하고 직접 노래하는 오페라 명곡 메들리로 꾸며집니다.\n5월 4일: Diane Shimoda\n7월 6일: Kalim Patton\n9월 14일: Claudia Godin\n11월 30일: Nicolai Souza"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t4-q158",
                    questionNo: 158,
                    text: "What opera will be performed without a break?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Sigrun",
                        "B": "Le Lapin",
                        "C": "The Shipmaster's Garden",
                        "D": "Orkestia"
                    },
                    correctAnswer: "C",
                    translation: "휴식 시간(break/intermission) 없이 공연되는 오페라는 무엇입니까?",
                    explanation: "지문에 'The Shipmaster's Garden'은 '90 minutes with no intermission'이라고 명시되어 있습니다."
                },
                {
                    id: "v3-p7-t4-q159",
                    questionNo: 159,
                    text: "What is probably true about the artists-in-residence?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "They are all from the Dalston area.",
                        "B": "They are younger than the regular performers.",
                        "C": "They are professionally trained as dancers.",
                        "D": "They are all well-known around the world."
                    },
                    correctAnswer: "B",
                    translation: "상주 예술가들에 대해 사실일 가능성이 높은 것은 무엇입니까?",
                    explanation: "지문에서 'celebrate the next generation of talent(다음 세대 재능)'라고 언급했으므로 기존 출연진보다 젊을 가능성이 높습니다."
                },
                {
                    id: "v3-p7-t4-q160",
                    questionNo: 160,
                    text: "Who most likely will perform in Le Lapin?",
                    classification: "P7_CROSS_REFERENCE",
                    options: {
                        "A": "Ms. Shimoda",
                        "B": "Mr. Patton",
                        "C": "Ms. Godin",
                        "D": "Mr. Souza"
                    },
                    correctAnswer: "B",
                    translation: "Le Lapin 공연에서 연주할 가능성이 높은 사람은 누구입니까?",
                    explanation: "오페라 일정에서 'Le Lapin'은 7월 6일~14일이고, 마티네 공연 일정에서 7월 6일 연주자는 Kalim Patton입니다."
                }
            ]
        },
        {
            id: "v3-p7-t4-set7",
            setType: "Single",
            questionRange: "161-163",
            passages: [
                {
                    id: "v3-p7-t4-s7-p1",
                    contextType: "P3_MEDI",
                    docType: "ARTICLE",
                    content: "Muelker Shipyard Undergoes Transformation\n\nMay 2—The Muelker Shipyard, a once-bustling ship manufacturing center, is being given a new role. A team of engineers is working to turn it into an open-air pedestrian mall with restaurants, a dozen retail businesses, and an outdoor patio that will feature live music performances.\n\nUntil June of last year, the city had planned to demolish the shipyard—a decision that caused a strong reaction from community members, especially former shipbuilders who viewed the site as a treasured industrial landmark. Wanting their labor to be remembered by future generations, many shipbuilders had etched their names on a wall near the entrance.\n\n\"In the peak of production, shipyard workers produced a naval ship in just a year,\" said lead engineer, Barney Enyart. \"Then production gradually slowed, and the shipyard eventually closed. When this project is complete, the new complex will be enjoyed throughout the year, serving as a place for employment opportunities and recreation while the legacy of the site's past will endure.\"",
                    translation: "Muelker 조선소의 변신\n\n5월 2일—한때 번성했던 선박 제조 중심지였던 Muelker 조선소가 새로운 역할을 맡게 되었습니다. 엔지니어 팀은 이곳을 레스토랑, 여러 소매점, 그리고 라이브 음악 공연이 열리는 야외 테라스를 갖춘 노천 쇼핑몰로 바꾸기 위해 작업 중입니다.\n\n작년 6월까지 시 당국은 조선소를 철거할 계획이었습니다. 이 결정은 지역 사회 주민들, 특히 이곳을 소중한 산업 랜드마크로 여겼던 전직 조선업 종사자들의 강한 반발을 불러일으켰습니다. 자신들의 노고가 미래 세대에게 기억되기를 바랐던 많은 조선공들은 입구 근처 벽에 자신들의 이름을 새겨 두었습니다.\n\n\"생산이 절정이었을 때, 조선소 노동자들은 단 1년 만에 군함을 생산해 냈습니다\"라고 수석 엔지니어인 Barney Enyart가 전했습니다. \"그 후 생산이 점차 둔화되었고 결국 조선소는 문을 닫았습니다. 이 프로젝트가 완료되면 새로운 단지는 일자리 기회와 여가 활동을 제공하면서도 과거의 유산을 보존하는 장소로서 일 년 내내 모두가 즐길 수 있는 곳이 될 것입니다.\""
                }
            ],
            questions: [
                {
                    id: "v3-p7-t4-q161",
                    questionNo: 161,
                    text: "What is NOT mentioned in the plans for the shipyard?",
                    classification: "P7_NEGATIVE",
                    options: {
                        "A": "Office spaces",
                        "B": "Entertainment",
                        "C": "A shopping section",
                        "D": "Eating establishments"
                    },
                    correctAnswer: "A",
                    translation: "조선소 계획에서 언급되지 않은 것은 무엇입니까?",
                    explanation: "공연(live music), 상점(retail businesses), 식당(restaurants)은 언급되었으나 사무실 공간(office spaces)은 언급되지 않았습니다."
                },
                {
                    id: "v3-p7-t4-q162",
                    questionNo: 162,
                    text: "What is suggested about the Muelker Shipyard?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "It will be featured in a video.",
                        "B": "It will have a monument to former workers.",
                        "C": "Local residents appreciate its history.",
                        "D": "A ship is currently being built there."
                    },
                    correctAnswer: "C",
                    translation: "Muelker 조선소에 대해 알 수 있는 것은 무엇입니까?",
                    explanation: "시의 철거 계획에 지역 사회 주민들과 전직 노동자들이 강하게 반발하며 산업 랜드마크로 여겼다는 점에서 역사를 소중히 함을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t4-q163",
                    questionNo: 163,
                    text: "The word \"serving\" in paragraph 3, line 7, is closest in meaning to",
                    classification: "P7_VOCABULARY",
                    options: {
                        "A": "attending",
                        "B": "functioning",
                        "C": "distributing",
                        "D": "presenting"
                    },
                    correctAnswer: "B",
                    translation: "3단락 7행의 'serving'과 의미상 가장 가까운 단어는?",
                    explanation: "장소로서의 역할을 '수행한다/기능한다'는 의미이므로 'functioning'이 가장 적절합니다."
                }
            ]
        },
        {
            id: "v3-p7-t4-set8",
            setType: "Single",
            questionRange: "164-167",
            passages: [
                {
                    id: "v3-p7-t4-s8-p1",
                    contextType: "P2_OFFI",
                    docType: "MEMO",
                    content: "MEMO\n\nTo: Customer Service Team\nFrom: Scott Davis, Director of Customer Service\nDate: July 22\n\nToday kicks off Harkness Clothiers' Customer Service Appreciation Week. I want to take this opportunity to thank you for your dedication and professionalism this year. — [1] —. Each one of you has delivered exceptional customer service. Management is proud of what you have achieved as a team. — [2] —. We understand that last year's merger with Sporting Clothes, Inc., was confusing and difficult at times. Your service stayed steady throughout the process and you provided a seamless transition for our clients. What a great accomplishment!\n\n— [3] —. On Tuesday, starting at 8 A.M., everyone will be treated to a breakfast served with coffee, pastries, and fruit. On Wednesday, we will have a potluck lunch in the afternoon. On Thursday, we will host a team dinner at Mo's Bistro after work. On Friday, there will be contests after lunch where you can win prizes. — [4] —. I am excited about this week and hope you enjoy it.",
                    translation: "MEMO\n\n수신: 고객 서비스 팀\n발신: Scott Davis, 고객 서비스 부사장\n날짜: 7월 22일\n\n오늘부터 Harkness Clothiers의 고객 서비스 감사 주간이 시작됩니다. 올 한 해 여러분이 보여주신 헌신과 전문성에 감사를 표하고자 합니다. — [1] —. 여러분 개개인이 뛰어난 고객 서비스를 제공해 주셨습니다. 경영진은 여러분이 팀으로서 성취한 것을 자랑스럽게 생각합니다. — [2] —. 작년에 있었던 Sporting Clothes, Inc.와의 합병 과정이 때로는 혼란스럽고 힘들었다는 것을 잘 알고 있습니다. 하지만 그 과정 내내 여러분의 서비스는 흔들림이 없었고 고객들에게 원활한 전환을 제공해 주었습니다. 정말 대단한 성취입니다!\n\n— [3] —. 화요일 오전 8시부터는 커피, 페이스트리, 과일이 곁들여진 아침 식사가 제공됩니다. 수요일 오후에는 포틀럭 점심 식사가 있습니다. 목요일 퇴근 후에는 Mo's Bistro에서 팀 저녁 식사를 주최할 예정입니다. 금요일 점심 식사 후에는 경품을 받을 수 있는 콘테스트가 열립니다. — [4] —. 이번 주가 정말 기대되며 여러분도 즐기시길 바랍니다."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t4-q164",
                    questionNo: 164,
                    text: "Why did Mr. Davis write the memo?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To ask employees to attend a training session",
                        "B": "To request that employees work overtime",
                        "C": "To provide details of a celebration",
                        "D": "To announce the end of a project"
                    },
                    correctAnswer: "C",
                    translation: "Mr. Davis는 왜 이 메모를 작성했습니까?",
                    explanation: "고객 서비스 감사 주간을 맞이하여 열리는 축하 행사의 세부 관리 사항을 알리기 위해 작성했습니다."
                },
                {
                    id: "v3-p7-t4-q165",
                    questionNo: 165,
                    text: "What is suggested about Harkness Clothiers?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "It has combined with another company.",
                        "B": "It gives awards to staff every year.",
                        "C": "It manufactures a line of waterproof clothes.",
                        "D": "It has a very small customer service team."
                    },
                    correctAnswer: "A",
                    translation: "Harkness Clothiers에 대해 알 수 있는 것은 무엇입니까?",
                    explanation: "지문에서 'last year's merger with Sporting Clothes, Inc.(작년에 있었던 합병)'라고 언급했으므로 다른 회사와 합병되었음을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t4-q166",
                    questionNo: 166,
                    text: "When will an event take place in the morning?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "On Tuesday",
                        "B": "On Wednesday",
                        "C": "On Thursday",
                        "D": "On Friday"
                    },
                    correctAnswer: "A",
                    translation: "행사 중 아침 시간에 열리는 것은 언제입니까?",
                    explanation: "지문에 'On Tuesday, starting at 8 A.M.(화요일 오전 8시부터)'라고 명시되어 있습니다."
                },
                {
                    id: "v3-p7-t4-q167",
                    questionNo: 167,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"To show our appreciation, management is providing some opportunities to have fun this week.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "C",
                    translation: "지정된 위치 [1], [2], [3], [4] 중 다음 문장이 들어가기에 가장 적절한 곳은?\n\"감사를 표하기 위해, 경영진은 이번 주에 즐거운 시간을 보낼 수 있는 몇 가지 기회를 마련했습니다.\"",
                    explanation: "직원들의 노고에 대한 감사를 표한 후, 구체적인 요일별 행사 일정을 소개하기 직전인 [3]이 가장 적절합니다."
                }
            ]
        },
        {
            id: "v3-p7-t4-set9",
            setType: "Single",
            questionRange: "168-171",
            passages: [
                {
                    id: "v3-p7-t4-s9-p1",
                    contextType: "P2_OFFI",
                    docType: "NOTICE",
                    content: "Friends of the Chesterton Public Library\nBook Sale\n\nThe Chesterton Public Library will host its annual book sale this weekend on the library's second floor. The hours are Saturday, November 16, 9:00 A.M. to 5:00 P.M., and Sunday, November 17, 12:00 noon to 5:00 P.M. A special preview sale for the Friends of Chesterton Public Library (FCPL), the library's volunteer support group, will be held on Friday, November 15, from 4:00 P.M. to 8:00 P.M.\n\nThe sale will include books that the library no longer lends, as well as books donated by the public. Proceeds will be used to develop a children's reading room.\n\nWe welcome donations of books for all ages, in all genres, in both paperback and hardcover. Please, note, however, that books that are torn or otherwise defaced will be rejected. Sorry, no magazines or journals, please. Donations for this event will be accepted through Friday, November 8, and can be dropped off at the front desk during the following times:\n\nMonday to Thursday: 9:00 A.M. to 11:00 A.M.\nWednesday: 1:00 P.M. to 8:00 P.M.\nFriday: 9:00 A.M. to 3:00 P.M.\n\nThank you for your support!",
                    translation: "Chesterton 공립 도서관의 친구들\n도서 바자회\n\nChesterton 공립 도서관에서 이번 주말 도서관 2층에서 연례 도서 바자회를 개최합니다. 운영 시간은 11월 16일 토요일 오전 9시~오후 5시, 11월 17일 일요일 낮 12시~오후 5시입니다. 도서관 자원봉사 지원 단체인 Chesterton 공립 도서관의 친구들(FCPL)을 위한 특별 사전 판매 행사가 11월 15일 금요일 오후 4시부터 8시까지 열립니다.\n\n이번 판매에는 도서관에서 더 이상 대출하지 않는 도서와 일반 시민들이 기증한 도서가 포함됩니다. 수익금은 어린이 독서실을 조성하는 데 사용될 예정입니다.\n\n모든 연령대와 전 장르의 페이퍼백 및 하드커버 도서 기증을 환영합니다. 다만, 찢어지거나 훼손된 도서는 받지 않으니 유의해 주시기 바랍니다. 잡지나 정간물은 받지 않습니다. 이번 행사를 위한 기증은 11월 8일 금요일까지 가능하며, 다음 시간대에 안내 데스크에 맡겨주시면 됩니다:\n\n월요일~목요일: 오전 9시~오전 11시\n수요일: 오후 1시~오후 8시\n금요일: 오전 9시~오후 3시\n\n후원에 감사드립니다!"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t4-q168",
                    questionNo: 168,
                    text: "Who can attend the sale on Friday?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Paid staff",
                        "B": "Volunteers",
                        "C": "Young children",
                        "D": "Financial donors"
                    },
                    correctAnswer: "B",
                    translation: "금요일 바자회에 참석할 수 있는 사람은 누구입니까?",
                    explanation: "금요일에는 자원봉사 지원 단체인 FCPL을 위한 사전 판매가 열린다고 했으므로 자원봉사자(volunteers)가 정답입니다."
                },
                {
                    id: "v3-p7-t4-q169",
                    questionNo: 169,
                    text: "The word \"welcome\" in paragraph 3, line 1, is closest in meaning to",
                    classification: "P7_VOCABULARY",
                    options: {
                        "A": "accept",
                        "B": "greet",
                        "C": "honor",
                        "D": "satisfy"
                    },
                    correctAnswer: "A",
                    translation: "3단락 1행의 'welcome'과 의미상 가장 가까운 단어는?",
                    explanation: "기증을 '환영한다/받는다'는 의미이므로 'accept'가 가장 적절합니다."
                },
                {
                    id: "v3-p7-t4-q170",
                    questionNo: 170,
                    text: "What is indicated about journals?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "They are located on the second floor.",
                        "B": "They will be sold to volunteers only.",
                        "C": "They cannot be borrowed.",
                        "D": "They cannot be donated."
                    },
                    correctAnswer: "D",
                    translation: "정간물(journals)에 대해 알 수 있는 사실은 무엇입니까?",
                    explanation: "지문에 'no magazines or journals, please(잡지나 정간물은 정중히 거절합니다)'라고 했으므로 기증할 수 없습니다."
                },
                {
                    id: "v3-p7-t4-q171",
                    questionNo: 171,
                    text: "When can donations be dropped off in the evening?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "On Monday",
                        "B": "On Wednesday",
                        "C": "On Thursday",
                        "D": "On Friday"
                    },
                    correctAnswer: "B",
                    translation: "저녁 시간에 기증품을 맡길 수 있는 요일은 언제입니까?",
                    explanation: "수요일(Wednesday)에는 오후 8시(8:00 P.M.)까지 가능하므로 저녁 시간대 이용이 가능합니다."
                }
            ]
        },
        {
            id: "v3-p7-t4-set10",
            setType: "Single",
            questionRange: "172-175",
            passages: [
                {
                    id: "v3-p7-t4-s10-p1",
                    contextType: "P2_OFFI",
                    docType: "CHAT",
                    content: "Lily Park (4:03 P.M.) Hello, everyone. I just want to check in with you before the weekend. Kaz, how did your meeting with Blumfield Associates go?\nKaz Fedorowitz (4:10 P.M.) It could not have been better. They are purchasing 40 new laptops with a service agreement. I've got the signed contract in hand.\nLily Park (4:11 P.M.) Outstanding! Nice way to wrap up the week.\nDavid Esposito (4:12 P.M.) Congratulations! This one puts you over the top. You are now the top salesperson for the third month in a row.\nDanielle Becker (4:13 P.M.) That's great news, Kaz. By the way, if you can get all your receipts to me as soon as you are back in the office, you will get your travel reimbursement check early the following week.\nKaz Fedorowitz (4:14 P.M.) Are you sure about that? Didn't Michael Lim just land a big sale?\nLily Park (4:15 P.M.) Unfortunately, Michael's customers backed out at the last minute. They decided to lease computers and printers from another firm rather than purchase new equipment.\nKaz Fedorowitz (4:17 P.M.) That's too bad. And thanks for taking care of that, Danielle.\nDanielle Becker (4:18 P.M.) My pleasure!\nLily Park (4:19 P.M.) Have a wonderful weekend, everyone.",
                    translation: "Lily Park (오후 4:03) 안녕 여러분. 주말 전에 다들 확인차 연락해. Kaz, Blumfield Associates와의 회의는 어떻게 됐어?\nKaz Fedorowitz (오후 4:10) 더할 나위 없이 좋았어. 서비스 계약까지 포함해서 새 노트북 40대를 사기로 했대. 이미 서명된 계약서를 들고 있어.\nLily Park (오후 4:11) 훌륭해! 한 주를 마무리하기에 아주 좋은 방법이네.\nDavid Esposito (오후 4:12) 축하해! 이번 건으로 네가 1등이야. 이제 3개월 연속 최고 영업 사원이네.\nDanielle Becker (오후 4:13) 좋은 소식이야 Kaz. 참, 사무실 돌아오는 대로 모든 영수증을 제출해 주면 다음 주 초에 바로 출장비 환급 수표를 받을 수 있을 거야.\nKaz Fedorowitz (오후 4:14) 정말 확실해? Michael Lim이 방금 큰 건을 성사시키지 않았어?\nLily Park (오후 4:15) 안타깝게도 Michael의 고객들이 마지막 순간에 계약을 취소했어. 새 장비를 사는 대신 다른 업체에서 컴퓨터와 프린터를 임대하기로 했대.\nKaz Fedorowitz (오후 4:17) 안됐네. 그리고 Danielle, 신경 써줘서 고마워.\nDanielle Becker (오후 4:18) 천만에!\nLily Park (오후 4:19) 다들 즐거운 주말 보내."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t4-q172",
                    questionNo: 172,
                    text: "In what type of business are the writers involved?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "Real estate",
                        "B": "Travel services",
                        "C": "Office technology",
                        "D": "Financial consulting"
                    },
                    correctAnswer: "C",
                    translation: "대화 당사자들은 어떤 종류의 사업에 종사하고 있습니까?",
                    explanation: "노트북 40대 판매, 컴퓨터 및 프린터 임대 등을 다루는 것으로 보아 사무용 기술 기기(Office technology) 관련 사업입니다."
                },
                {
                    id: "v3-p7-t4-q173",
                    questionNo: 173,
                    text: "What most likely is Ms. Park's job title?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "Advertising specialist",
                        "B": "Director of human resources",
                        "C": "Bookkeeper",
                        "D": "Sales division manager"
                    },
                    correctAnswer: "D",
                    translation: "Ms. Park의 직함은 무엇일 가능성이 높습니까?",
                    explanation: "전체적인 업무 진행 상황을 확인(check in with you)하고 영업 실적을 관리하는 것으로 보아 영업부 매니저(Sales division manager)입니다."
                },
                {
                    id: "v3-p7-t4-q174",
                    questionNo: 174,
                    text: "What is indicated about Mr. Lim?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "He was not able to complete a sale.",
                        "B": "He is currently away on business.",
                        "C": "He is a new member of the writers' department.",
                        "D": "He has just signed a contract."
                    },
                    correctAnswer: "A",
                    translation: "Mr. Lim에 대해 알 수 있는 사실은 무엇입니까?",
                    explanation: "Lily의 말에 따르면 Michael의 고객들이 마지막 순간에 철회(customers backed out at the last minute)하여 판매를 완료하지 못했습니다."
                },
                {
                    id: "v3-p7-t4-q175",
                    questionNo: 175,
                    text: "At 4:18 P.M., what does Ms. Becker most likely mean when she writes, \"My pleasure!\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "She is happy to help in refunding some travel expenses.",
                        "B": "She is pleased to have successfully obtained a new client.",
                        "C": "She feels relieved that it is the end of the workweek.",
                        "D": "She is glad to have suggested leasing equipment."
                    },
                    correctAnswer: "A",
                    translation: "오후 4:18에 Ms. Becker가 \"My pleasure!\"라고 쓴 의도는 무엇입니까?",
                    explanation: "Kaz가 출장비 정산 환급(travel reimbursement)을 신경 써줘서 고맙다고 한 것에 대한 답변이므로 환급을 도와주게 되어 기쁘다는 의미입니다."
                }
            ]
        }
    ]
};
