import { Part7Test } from './types';

export const test4Data: Part7Test = {
    testId: 4,
    title: "Test 4",
    sets: [
        // Questions 147-148: Receipt
        {
            id: "p7-t4-set1",
            questionRange: "147-148",
            passages: [
                {
                    id: "p7-t4-s1-p1",
                    contextType: "P5",
                    docType: "FORM",
                    title: "Receipt",
                    content: `Zippy Petrol Mart\nM64 Motorway\nLeicester\n0113 4960423\n23 May\n\nBiscuits          £2.00\nFruit cup         £0.95\nCrisps            £1.10\nVAT               £0.81\nInclusive\n\nTotal             £4.86\n\nSign up for our Zippy Club rewards card.\nYou could have earned 4 Zippy Club points on this transaction.\nPoints can be used for discounted merchandise, car products,\nphone accessories, and more!`,
                    translation: `지피 페트롤 마트\nM64 고속도로\n레스터\n0113 4960423\n5월 23일\n\n비스킷          2파운드\n과일 컵         0.95파운드\n감자칩          1.1파운드\n부가 가치세     0.81파운드\n포함\n\n총              4.86파운드\n\n저희 지피 클럽 리워드 카드에 가입하세요.\n이 거래에 대해 지피 클럽 포인트 4점을 받을 수 있었습니다.\n포인트는 할인 상품, 자동차 제품, 휴대폰 액세서리 등에 사용할 수 있습니다!`
                }
            ],
            questions: [
                {
                    id: "p7-t4-q147",
                    questionNo: 147,
                    text: "What was purchased on May 23?",
                    options: {
                        "A": "Fuel",
                        "B": "Snacks",
                        "C": "Auto parts",
                        "D": "Phone accessories"
                    },
                    correctAnswer: "B",
                    classification: "P7_DETAIL",
                    translation: "5월 23일에 구입된 물건은?",
                    explanation: `영수증 상단에 있는 발행일이 5월 23일(23 May)이고, 중반부에 나열된 구입 품목이 비스킷(Biscuits), 과일 컵(Fruit cup), 감자칩(Crisps)이므로 (B) 간식(Snacks)이 정답입니다.`
                },
                {
                    id: "p7-t4-q148",
                    questionNo: 148,
                    text: "What does the receipt indicate about Zippy Petrol Mart?",
                    options: {
                        "A": "It has multiple locations.",
                        "B": "It accepts most major credit cards.",
                        "C": "It has a customer rewards program.",
                        "D": "It reduced the prices of all its merchandise."
                    },
                    correctAnswer: "C",
                    classification: "P7_INFERENCE",
                    translation: "영수증에서 지피 페트롤 마트에 대해 명시하는 것은?",
                    explanation: `영수증 하단에 지피 클럽 리워드 카드에 가입하라(Sign up for our Zippy Club rewards card)고 하면서 이 거래에 대해 포인트를 받을 수 있다고 했으므로 고객 보상 프로그램을 운영하고 있음을 알 수 있습니다.`
                }
            ]
        },
        // Questions 149-150: Notice
        {
            id: "p7-t4-set2",
            questionRange: "149-150",
            passages: [
                {
                    id: "p7-t4-s2-p1",
                    contextType: "P2",
                    docType: "NOTICE",
                    title: "Coming Soon: The Best of PBQ Radio",
                    content: `During the week of April 21–27, PBQ Radio will be hosting a best-of-the-decade program. The most popular tunes by recording artists from the past decade will be played all day long. Both well-known and lesser-known recording artists will be featured. We plan to showcase each artist's top works.\n\nIn addition to featuring the best music of the decade, we would like to highlight our region's businesses. Advertising time is available for purchase. Let your listeners know that your business is one of the best in the community! You can request a shout-out for your company from a program host, or our professional marketing team can write and record a 30-second advertisement.\n\nVisit www.pbqradio.com/advertise for details and pricing.`,
                    translation: `곧 만나요: 최고의 PBQ 라디오\n\n4월 21일부터 27일까지 일주일 동안 PBQ 라디오는 10년 중 최고의 프로그램을 진행할 예정입니다. 지난 10년간 리코딩 아티스트들의 가장 인기 있었던 곡들이 하루 종일 흘러나올 것입니다. 잘 알려진 리코딩 아티스트와 잘 알려지지 않은 리코딩 아티스트들이 모두 포함됩니다. 각 아티스트의 최고 작품들을 선보일 계획입니다.\n\n10년 동안의 최고의 음악을 특집으로 다루는 것 외에도, 우리는 우리 지역 업체들도 집중 조명하고 싶습니다. 광고 시간을 구입하실 수 있습니다. 청취자들에게 귀하의 업체가 지역에서 최고 중 하나라는 것을 알리세요! 프로그램 진행자에게 귀사를 언급해 줄 것을 요청하거나, 우리의 전문 마케팅 팀이 30초짜리 광고를 작성하고 녹음할 수 있습니다.\n\n세부사항 및 가격은 www.pbqradio.com/advertise를 참조하세요.`
                }
            ],
            questions: [
                {
                    id: "p7-t4-q149",
                    questionNo: 149,
                    text: "For whom most likely was the notice written?",
                    options: {
                        "A": "Radio-show hosts",
                        "B": "New recording artists",
                        "C": "Business owners",
                        "D": "Sound technicians"
                    },
                    correctAnswer: "C",
                    classification: "P7_PURPOSE",
                    translation: "공지는 누구를 대상으로 작성되었을 것 같은가?",
                    explanation: `두 번째 단락의 첫 문장에서 지역 업체들도 집중 조명하고 싶다(highlight our region's businesses)고 했고, 광고 시간을 구입할 수 있다고 한 것으로 보아 지역에서 업체를 운영하고 있는 사업주들이 대상임을 알 수 있습니다.`
                },
                {
                    id: "p7-t4-q150",
                    questionNo: 150,
                    text: "What is true about PBQ Radio?",
                    options: {
                        "A": "It has been in business for ten years.",
                        "B": "It is looking for experienced musicians.",
                        "C": "It was voted the best station in the community.",
                        "D": "It has its own marketing department."
                    },
                    correctAnswer: "D",
                    classification: "P7_DETAIL",
                    translation: "PBQ 라디오에 대해 사실인 것은?",
                    explanation: `두 번째 단락의 마지막 문장에서 자신들의 전문 마케팅 팀이 30초짜리 광고를 작성하고 녹음할 수 있다고 했으므로 자체 마케팅 부서를 가지고 있음을 알 수 있습니다.`
                }
            ]
        },
        // Questions 151-152: Text Message Chain
        {
            id: "p7-t4-set3",
            questionRange: "151-152",
            passages: [
                {
                    id: "p7-t4-s3-p1",
                    contextType: "P7",
                    docType: "CHAT_MESSAGE",
                    content: `Frank Jabati [11:12 A.M.]\nHi, Maxine. I'm running late with this delivery today. Could you contact Ms. Dibello to let her know?\n\nMaxine Larsen [11:13 A.M.]\nSure! I know that she is eager to get those new items. She says she needs to set up her kitchen properly so that she can prepare a special meal tonight. What time do you think you will arrive there?\n\nFrank Jabati [11:15 A.M.]\nI'm not sure—the road I was taking was closed for repairs. The detour road has heavy traffic.\n\nMaxine Larsen [11:17 A.M.]\nSorry to hear that. What's your estimate?\n\nFrank Jabati [11:19 A.M.]\nMaybe around 1 P.M.\n\nMaxine Larsen [11:20 A.M.]\nOK, great. I will get in touch with Ms. Dibello to confirm that she will be home at that time. Then I'll get back to you.\n\nFrank Jabati [11:22 A.M.]\nThanks!`,
                    translation: `프랭크 자바티 [오전 11시 12분]\n안녕하세요, 맥신. 오늘 이 배달 건이 늦어지고 있습니다. 디벨로 씨에게 연락해서 알려 주시겠습니까?\n\n맥신 라르센 [오전 11시 13분]\n물론이죠! 그녀가 그 새 제품들을 간절히 기다리고 있다는 것을 알고 있어요. 오늘 밤 특별한 식사를 준비할 수 있도록 부엌을 제대로 갖춰 놓아야 한다고 합니다. 거기에 몇 시쯤 도착할 것 같습니까?\n\n프랭크 자바티 [오전 11시 15분]\n잘 모르겠습니다. 제가 가던 길이 정비 작업으로 폐쇄되었습니다. 우회로는 교통량이 많네요.\n\n맥신 라르센 [오전 11시 17분]\n유감이네요. 어느 정도로 예상하시나요?\n\n프랭크 자바티 [오전 11시 19분]\n아마 오후 1시경으로요.\n\n맥신 라르센 [오전 11시 20분]\n네, 좋습니다. 제가 디벨로 씨에게 연락해서 그 시간에 집에 있을 것인지 확인하겠습니다. 그런 다음 다시 연락드리겠습니다.\n\n프랭크 자바티 [오전 11시 22분]\n감사합니다!`
                }
            ],
            questions: [
                {
                    id: "p7-t4-q151",
                    questionNo: 151,
                    text: "What most likely has Ms. Dibello purchased?",
                    options: {
                        "A": "Linens",
                        "B": "Bookshelves",
                        "C": "Gardening tools",
                        "D": "Appliances"
                    },
                    correctAnswer: "D",
                    classification: "P7_INFERENCE",
                    translation: "디벨로 씨가 구입했을 것 같은 물건은?",
                    explanation: `라르센 씨가 그녀가 오늘 밤 특별한 식사를 준비할 수 있도록 부엌을 제대로 갖춰 놓아야 한다고 말한 것으로 보아, 디벨로 씨가 식사를 준비하는 데 사용하는 가전제품(appliances)을 구입했음을 짐작할 수 있습니다.`
                },
                {
                    id: "p7-t4-q152",
                    questionNo: 152,
                    text: "At 11:17 A.M., what does Ms. Larsen most likely mean when he writes, \"What's your estimate\"?",
                    options: {
                        "A": "She must verify the distance of a route.",
                        "B": "She wants to know how much traffic there is.",
                        "C": "She wants to know a delivery time.",
                        "D": "She has to calculate a delivery charge."
                    },
                    correctAnswer: "C",
                    classification: "P7_INFERENCE",
                    translation: "오전 11시 17분에 라르센 씨가 \"어느 정도로 예상하시나요?\"라고 쓴 의도는?",
                    explanation: `자바티 씨가 정비 작업으로 길이 폐쇄되어 우회로를 이용 중이며 교통 체증이 있다고 보고하자, 라르센 씨가 그에게 도착 예상 시간을 확인하려는 의도로 물은 것이므로 (C) 배송 시간을 알고 싶다가 정답입니다.`
                }
            ]
        },
        // Questions 153-154: E-mail
        {
            id: "p7-t4-set4",
            questionRange: "153-154",
            passages: [
                {
                    id: "p7-t4-s4-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    content: `To: Janet Hubschmann\nFrom: customerservice@readymadeofficesupplies.net\nDate: September 3\nSubject: Thank you\n\nDear Ms. Hubschmann,\n\nWe here at Readymade Office Supplies are excited to welcome you to our Customers Count rewards program. Your account number 41120 is now registered.\n\nBe sure to enter your account number to earn points on all your purchases from our Web site. You will earn one point for every dollar you spend on qualifying purchases. Redeem your points on your account page for rewards, including free two-day expedited shipping, special discounts, and more. You can still order via mail from our print catalog, over the telephone from one of our helpful representatives, or by visiting our retail locations across the United States and Canada. However, those purchases do not currently qualify for the rewards program.\n\nHave questions? Please visit https://www.readymadeofficesupplies.net/customerservice.`,
                    translation: `수신: 자넷 허쉬만\n발신: customerservice@readymadeofficesupplies.net\n날짜: 9월 3일\n제목: 감사합니다\n\n허쉬만 씨께,\n\n레디메이드 사무용품의 커스터머스 카운트 보상 프로그램에 가입하신 것을 환영합니다. 고객님의 계정 번호 1120이 등록되었습니다.\n\n저희 웹사이트에서 구매하는 모든 제품에 대해 포인트를 받으시려면 반드시 계정 번호를 입력해 주십시오. 조건이 충족되는 구매에 대해 지불하는 1달러당 1포인트를 받게 됩니다. 계정 페이지에 있는 포인트를 무료 2일 신속 배송, 특별 할인 등을 포함한 보상으로 교환하십시오. 귀하께서는 여전히 인쇄 카탈로그에서 우편으로 주문하시거나 직원의 도움을 받아 전화로 주문하시거나 미국과 캐나다 전역의 소매점을 방문하셔서 주문하실 수 있습니다. 그러나 이러한 구매는 현재 보상 프로그램에 적용되지 않습니다.\n\n질문이 있으십니까? https://www.readymadeofficesupplies.net/customerservice를 방문하십시오.`
                }
            ],
            questions: [
                {
                    id: "p7-t4-q153",
                    questionNo: 153,
                    text: "What types of purchases earn reward points?",
                    options: {
                        "A": "Those made online",
                        "B": "Those made by mail",
                        "C": "Those made by phone",
                        "D": "Those made in a store"
                    },
                    correctAnswer: "A",
                    classification: "P7_DETAIL",
                    translation: "어떤 종류의 구매가 리워드 포인트를 받는가?",
                    explanation: `두 번째 단락의 첫 문장에서 웹사이트에서 구매하는 모든 제품에 대해 포인트를 받으려면 반드시 계정 번호를 입력해 달라고 했고, 우편 주문, 전화 주문, 소매점 방문 구매 등은 리워드 프로그램에 적용되지 않는다고 했으므로 (A) 온라인 구매가 정답입니다.`
                },
                {
                    id: "p7-t4-q154",
                    questionNo: 154,
                    text: "What is a benefit of the program?",
                    options: {
                        "A": "Invitations to retail events",
                        "B": "Free samples",
                        "C": "Faster shipping",
                        "D": "Extended product warranties"
                    },
                    correctAnswer: "C",
                    classification: "P7_DETAIL",
                    translation: "프로그램의 혜택은?",
                    explanation: `두 번째 단락의 세 번째 문장에서 포인트를 '무료 2일 신속 배송(free two-day expedited shipping)', 특별 할인 등으로 교환할 수 있다고 했으므로 (C) 더 빠른 배송이 정답입니다.`
                }
            ]
        },
        // Questions 155-157: Letter
        {
            id: "p7-t4-set5",
            questionRange: "155-157",
            passages: [
                {
                    id: "p7-t4-s5-p1",
                    contextType: "P1",
                    docType: "LETTER",
                    content: `Native Plant Society Headquarters\n161 Sussex Street\nSydney, NSW 2001\n\n15 April\n\nYasmine Harabi\n247 Kooljak Road\nPerth, Western Australia 6280\n\nMembership number 4290\n\nDear Ms. Harabi,\n\nThank you for your continued support as a society member. Given your recent move, your membership has been transferred to the chapter located in the city of Perth. We will be mailing a replacement member identification card within a few days.\n\nUnlike the chapter in the city of Canberra, the Perth branch meets the first Saturday of every month, so your next meeting will be in three weeks. If you have any questions, please contact us weekdays between 8:00 a.m. and 4:00 p.m. at (08) 5555 0145.\n\nSincerely,\nLeticia Davis\nLeticia Davis\nMembership Department`,
                    translation: `자생 식물 협회 본부\n161 서섹스 가\n시드니, NSW 2001\n\n4월 15일\n\n야스민 하라비\n247 쿨작 로드\n퍼스, 서부 오스트레일리아 6280\n\n회원번호 4290\n\n하라비 씨께,\n\n협회 회원으로서 지속적인 지원에 감사드립니다. 귀하의 최근 이사로, 귀하의 회원권이 퍼스 시에 위치한 지부로 이전되었습니다. 며칠 내로 대체 회원 카드를 우편으로 보내 드리겠습니다.\n\n캔버라 시 지부와는 달리 퍼스 지부는 매월 첫째 주 토요일에 모이므로 다음 회의는 3주 후가 될 것입니다. 질문이 있으시면 평일 오전 8시부터 오후 4시 사이에 (08) 5555 0145로 연락 주십시오.\n\n회원 관리 부서\n레티샤 데이비스`
                }
            ],
            questions: [
                {
                    id: "p7-t4-q155",
                    questionNo: 155,
                    text: "What is the purpose of the letter?",
                    options: {
                        "A": "To announce a special event",
                        "B": "To explain changes based on a relocation",
                        "C": "To propose a new meeting time",
                        "D": "To request updated contact information"
                    },
                    correctAnswer: "B",
                    classification: "P7_PURPOSE",
                    translation: "편지의 목적은 무엇인가?",
                    explanation: `두 번째 문장에서 하라비 씨의 '최근 이사(recent move)'로 회원권이 퍼스 지부로 이전되었다고 했으므로, 이사로 인한 회원권 관련 변경 사항을 안내하기 위한 (B)가 정답입니다.`
                },
                {
                    id: "p7-t4-q156",
                    questionNo: 156,
                    text: "What is suggested about the city of Canberra?",
                    options: {
                        "A": "It is famous for its many gardens.",
                        "B": "It houses the headquarters of Ms. Davis' organization.",
                        "C": "It is where Ms. Harabi previously lived.",
                        "D": "It is home to some of Australia's rarest plants."
                    },
                    correctAnswer: "C",
                    classification: "P7_INFERENCE",
                    translation: "캔버라 시에 대해 무엇이 암시되는가?",
                    explanation: `두 번째 단락 첫 문장에서 '캔버라 시 지부와는 달리' 퍼스 지부는 매월 첫째 토요일에 모인다는 표현에서, 하라비 씨가 이전에는 캔버라 지부 소속이었으며 그곳에 살았음을 유추할 수 있습니다.`
                },
                {
                    id: "p7-t4-q157",
                    questionNo: 157,
                    text: "What can be concluded about the Native Plant Society?",
                    options: {
                        "A": "It is under new leadership.",
                        "B": "Its membership is growing.",
                        "C": "It is raising membership dues.",
                        "D": "Its chapters hold monthly meetings."
                    },
                    correctAnswer: "D",
                    classification: "P7_INFERENCE",
                    translation: "자생 식물 협회에 대해 결론지을 수 있는 것은?",
                    explanation: `퍼스 지부가 매월 첫째 주 토요일에 모인다는 내용과 캔버라 지부를 대조하는 내용으로 보아 협회의 지부들이 매달 회의를 연다는 것을 알 수 있으므로 (D)가 정답입니다.`
                }
            ]
        },
        // Questions 158-160: Web page
        {
            id: "p7-t4-set6",
            questionRange: "158-160",
            passages: [
                {
                    id: "p7-t4-s6-p1",
                    contextType: "P3",
                    docType: "ARTICLE",
                    title: "Web Page",
                    content: `https://www.greenroofplus.com\n\nWhat Are Green Roofs?\n\nGreen roofs are an energy-saving option for office buildings and homes. A green roof is one that's covered with grasses, flowers, or other plants. It lowers heating and cooling costs while increasing a structure's aesthetic appeal. This Web site is designed for sharing ideas, photos, and resources to create and maintain a green roof.\n\nPlanting a rooftop garden is a rewarding do-it-yourself project, but special waterproofing and other preparations require the services of an experienced contractor. Costs vary widely by region, roof size, and complexity of the garden you want to create. Be sure to get estimates from at least two contractors.\n\nIf your contractor determines that your roof can handle the extra weight of soil, plants, and irrigation, ask about the project's timeline. Small, simple rooftop gardens may take only one week to complete.`,
                    translation: `https://www.greenroofplus.com\n\n녹식 지붕이란 무엇인가요?\n\n녹색 지붕은 사무실 건물과 주택을 위한 에너지 절약 옵션입니다. 녹색 지붕은 잔디, 화초 또는 기타 식물들로 덮인 지붕입니다. 이것은 건축물의 미적 매력을 높이는 동시에 냉난방 비용을 낮춰 줍니다. 이 웹사이트는 녹색 지붕을 만들고 유지하기 위한 아이디어, 사진 그리고 자료를 공유하기 위해 고안되었습니다.\n\n옥상 정원을 꾸미는 일은 자신이 직접 하는 보람 있는 프로젝트이지만, 특수 방수 처리 및 기타 준비 작업에는 숙련된 시공사의 서비스가 필요합니다. 비용은 지역, 지붕 크기, 조성하고자 하는 정원의 복잡성에 따라 크게 달라집니다. 최소 두 곳의 시공사로부터 견적을 받도록 하십시오.\n\n시공사가 지붕이 흙, 식물 및 관개 시설의 추가 중량을 견딜 수 있다고 확정하면, 프로젝트의 일정에 대해 문의하십시오. 작고 단순한 옥상 정원은 완성되는 데 일주일밖에 걸리지 않을 수도 있습니다.`
                }
            ],
            questions: [
                {
                    id: "p7-t4-q158",
                    questionNo: 158,
                    text: "According to the Web page, what can visitors to the Web site do?",
                    options: {
                        "A": "Discuss how to create a garden",
                        "B": "Learn how to maximize vegetable production",
                        "C": "Seek advice about landscaping problems",
                        "D": "Help contractors calculate costs"
                    },
                    correctAnswer: "A",
                    classification: "P7_DETAIL",
                    translation: "웹 페이지에 따르면, 웹사이트의 방문객들이 할 수 있는 일은?",
                    explanation: `첫 번째 단락의 마지막 문장에서 '이 웹사이트는 녹색 지붕을 만들고 유지하기 위한 아이디어, 사진 그리고 자료를 공유하기 위해 고안되었다(This Web site is designed for sharing ideas, photos, and resources to create and maintain a green roof)'고 했으므로 옥상 정원의 제작 및 유지에 대해 정보를 나누고 토론할 수 있음을 알 수 있습니다.`
                },
                {
                    id: "p7-t4-q159",
                    questionNo: 159,
                    text: "What is NOT mentioned about green roofs?",
                    options: {
                        "A": "They decrease energy bills.",
                        "B": "They remove pollution from the air.",
                        "C": "They make a structure more beautiful.",
                        "D": "They can be installed on commercial and residential buildings."
                    },
                    correctAnswer: "B",
                    classification: "P7_NOT_MENTIONED",
                    translation: "녹색 지붕에 대해 언급되지 않은 것은?",
                    explanation: `첫 번째 단락에서 냉난방 비용을 낮춰주고(A), 건축물의 미적 매력을 높이며(C), 사무실 건물과 주택(D)에 설치할 수 있다고 언급되었습니다. 공기 중의 오염 물질 제거(B)에 대한 언급은 없으므로 (B)가 정답입니다.`
                },
                {
                    id: "p7-t4-q160",
                    questionNo: 160,
                    text: "In paragraph 3, line 1, the word \"handle\" is closest in meaning to",
                    options: {
                        "A": "touch",
                        "B": "control",
                        "C": "deliver",
                        "D": "support"
                    },
                    correctAnswer: "D",
                    classification: "P7_VOCABULARY",
                    translation: "세 번째 단락 1행의 'handle'과 의미가 가장 가까운 단어는?",
                    explanation: `문맥상 지붕이 추가 중량을 '견디다'라는 뜻으로 쓰였으므로 '지탱하다'를 뜻하는 (D) support가 정답입니다.`
                }
            ]
        },
        // Questions 161-163: Advertisement
        {
            id: "p7-t4-set7",
            questionRange: "161-163",
            passages: [
                {
                    id: "p7-t4-s7-p1",
                    contextType: "P4",
                    docType: "ADVERTISEMENT",
                    title: "Advertisement",
                    content: `Martino Technical has been providing live sound-mixing services for more than 30 years. We use the latest technology to produce the best sound.\n\nThe majority of our clients are heavy-metal and classic-rock musicians. Before they go on tour, we rehearse with them to ensure that the sounds are perfectly blended and balanced. In addition, we create recordings for them that they can post on social media to promote their shows.\n\nOur sound-mixing engineers are known for their experience and professionalism and have an impressive track record working on tours worldwide. They have worked with many popular music groups, including The Feakes, Firebrand, and Cellar Cats, and make bands sound just as good during live performances as they do on their records.\n\nContact us by e-mailing information@martinotechnical.ie.`,
                    translation: `마르티노 테크니컬은 30년 넘게 라이브 사운드 믹싱 서비스를 제공해 왔습니다. 우리는 최고의 사운드를 만들어 내기 위해 최신 기술을 사용합니다.\n\n우리 고객들 중 대다수는 헤비메탈과 클래식 록 음악가들입니다. 그들이 투어를 떠나기 전에, 우리는 그들과 함께 사운드가 완벽하게 혼합되고 균형을 이루는지 확인하기 위해 리허설을 합니다. 뿐만 아니라, 우리는 그들이 공연을 홍보하기 위해 소셜 미디어에 올릴 수 있는 녹음 음원을 제작합니다.\n\n우리의 사운드 믹싱 엔지니어들은 경험과 전문성을 갖춘 것으로 유명하며 전 세계 투어 작업에 있어 화려한 실적을 가지고 있습니다. 그들은 더 피크스, 파이어브랜드, 셀라 캣츠를 포함한 많은 인기 음악 그룹들과 작업했고, 밴드들이 라이브 공연을 하는 동안 음반에서 하는 것만큼 훌륭한 사운드를 내도록 해 줍니다.\n\n저희에게 연락하시려면 information@martinotechnical.ie로 이메일을 보내 주시기 바랍니다.`
                }
            ],
            questions: [
                {
                    id: "p7-t4-q161",
                    questionNo: 161,
                    text: "What is indicated about Martino Technical?",
                    options: {
                        "A": "It acquires most clients through social media.",
                        "B": "It was founded over 30 years ago.",
                        "C": "It has received many industry awards.",
                        "D": "It has offices throughout the world."
                    },
                    correctAnswer: "B",
                    classification: "P7_INFERENCE",
                    translation: "마르티노 테크니컬에 대해 명시된 것은?",
                    explanation: `첫 문장에서 마르티노 테크니컬은 30년 넘게 라이브 사운드 믹싱 서비스를 제공해 왔다고 했으므로 (B) 30년도 더 전에 창립되었다는 사실을 알 수 있습니다.`
                },
                {
                    id: "p7-t4-q162",
                    questionNo: 162,
                    text: "The word \"promote\" in paragraph 2, line 4, is closest in meaning to",
                    options: {
                        "A": "encourage",
                        "B": "schedule",
                        "C": "publicize",
                        "D": "advance"
                    },
                    correctAnswer: "C",
                    classification: "P7_VOCABULARY",
                    translation: "두 번째 단락 4행의 'promote'와 의미가 가장 가까운 단어는?",
                    explanation: `의미상 공연을 '홍보한다'는 뜻으로 쓰였으므로 '홍보하다, 알리다'를 뜻하는 (C) publicize가 정답입니다.`
                },
                {
                    id: "p7-t4-q163",
                    questionNo: 163,
                    text: "What is NOT stated about the live sound-mixing engineers?",
                    options: {
                        "A": "They create promotional materials.",
                        "B": "They have considerable expertise.",
                        "C": "They travel abroad frequently.",
                        "D": "They have university degrees in music."
                    },
                    correctAnswer: "D",
                    classification: "P7_NOT_MENTIONED",
                    translation: "라이브 사운드 믹싱 엔지니어들에 대해 언급되지 않은 것은?",
                    explanation: `두 번째 단락 마지막 문장에서 홍보용 녹음 음원을 제작한다(A)고 했고, 세 번째 단락 첫 문장에서 경험과 전문성(B) 그리고 전 세계 투어 작업 실적(C - 해외 출장이 잦음을 의미)이 언급되었습니다. 음악 학위(D)에 대한 내용은 없으므로 (D)가 정답입니다.`
                }
            ]
        },
        // Questions 164-167: E-mail
        {
            id: "p7-t4-set8",
            questionRange: "164-167",
            passages: [
                {
                    id: "p7-t4-s8-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    title: "Email",
                    content: `To: Employees <employees@bonahoornenterprises.com>\nFrom: Marcia Noh <mnoh@bonahoornenterprises.com>\nDate: November 14\nSubject: November 28 event\n\nDear all,\n\nOn the evening of November 28, there will be a formal dinner to honor our company president and founder, Mr. Bonahoom. At the dinner, we will express our appreciation for his leadership over these past twenty years in making Bonahoom Enterprises a successful company and a great place to work.\n\nThis event will be held in the private banquet room at Chez Bistro and is intended to be a surprise, so please avoid mentioning it to him. Those few who are involved with the setup should arrive early. All other employees should come no later than 6:15 P.M. in anticipation of Mr. Bonahoom's arrival at 6:30 P.M. We expect the celebration to wrap up no later than 8 P.M. — [1] —.\n\nThere is no need to bring a gift. — [3] —. We do ask, though, that you find time this week to sign a card for him. It can be found at Ms. Mueller's desk, inside an envelope marked \"November 28.\"\n\nFinally, you are welcome to bring one guest with you to the event if you wish. — [4] —. Kindly RSVP to this e-mail so we can get a complete count of the number of attendees.\n\nAll the best,\n\nMarcia Noh`,
                    translation: `수신: 직원 (employees@bonahoornenterprises.com)\n발신: 마르시아 노 (mnoh@bonahoornenterprises.com)\n날짜: 11월 14일\n제목: 11월 28일 행사\n\n여러분,\n\n11월 28일 저녁에 우리 회사의 사장이자 창립자인 보나훔 씨를 기리기 위한 공식 만찬이 있을 예정입니다. 만찬에서 우리는 지난 20년간 보나훔 엔터프라이즈를 성공적인 기업이자 일하기 좋은 직장으로 만든 그의 리더십에 감사를 표할 것입니다.\n\n이 행사는 셰 비스트로의 전용 연회실에서 열릴 예정이고, 깜짝 이벤트로 기획되었으므로 그에게 언급하는 것을 삼가 주세요. 준비와 관련된 소수의 사람들은 일찍 도착해야 합니다. 다른 모든 참석자들은 늦어도 오후 6시 15분까지는 와야 합니다. 보나훔 씨가 오후 6시 30분에 도착할 예정이기 때문입니다. 오후 8시 전에는 행사가 끝날 것으로 예상합니다. — [1] —.\n\n선물은 가져올 필요가 없습니다. — [3] —. 그렇지만 이번 주 중 시간을 내어 그를 위한 카드에 서명을 해 주시기 바랍니다. 카드는 뮬러 씨의 책상에서 찾을 수 있으며 '11월 28일'이라고 표시된 봉투 안에 있습니다.\n\n마지막으로, 원할 경우 행사에 한 명의 손님을 데려오는 것을 환영합니다. — [4] —. 참석자 수를 완전히 집계할 수 있도록 이 이메일에 회신해 주시기 바랍니다.\n\n마르시아 노`
                }
            ],
            questions: [
                {
                    id: "p7-t4-q164",
                    questionNo: 164,
                    text: "What is the main purpose of the e-mail?",
                    options: {
                        "A": "To ask staff to sign up to give speeches at a celebration",
                        "B": "To find people willing to bring various items to a dinner",
                        "C": "To invite workers to a surprise party",
                        "D": "To book a banquet room for a retirement event"
                    },
                    correctAnswer: "C",
                    classification: "P7_PURPOSE",
                    translation: "이메일의 주요 목적은?",
                    explanation: `첫 번째 단락에서 11월 28일 저녁에 사장 보나훔 씨를 기리는 만찬이 있을 예정이라고 했고, 두 번째 단락에서 이 행사가 깜짝 이벤트(intended to be a surprise)라고 했으므로 직원들을 깜짝 파티에 초대하기 위한 (C)가 정답입니다.`
                },
                {
                    id: "p7-t4-q165",
                    questionNo: 165,
                    text: "According to the e-mail, when are most people expected to arrive?",
                    options: {
                        "A": "At 5:00 P.M.",
                        "B": "At 6:15 P.M.",
                        "C": "At 6:30 P.M.",
                        "D": "At 8:00 P.M."
                    },
                    correctAnswer: "B",
                    classification: "P7_DETAIL",
                    translation: "이메일에 따르면 대부분의 사람들이 도착할 것으로 예상되는 시간은?",
                    explanation: `두 번째 단락에서 보나훔 씨가 6시 30분에 도착할 것이므로 다른 모든 참석자들은 늦어도 오후 6시 15분(no later than 6:15 P.M.)까지는 와야 한다고 명시했으므로 (B)가 정답입니다.`
                },
                {
                    id: "p7-t4-q166",
                    questionNo: 166,
                    text: "What should people do if they want to sign a card?",
                    options: {
                        "A": "They should request it from Mr. Bonahoom.",
                        "B": "They should e-mail Ms. Noh.",
                        "C": "They should wait for it to be passed around the office.",
                        "D": "They should go to Ms. Mueller's desk."
                    },
                    correctAnswer: "D",
                    classification: "P7_DETAIL",
                    translation: "카드에 서명하고 싶다면 어떻게 해야 하는가?",
                    explanation: `세 번째 단락에서 이번 주 중 시간을 내어 카드에 서명을 해 달라고 했으며, 그 카드는 '뮬러 씨의 책상(Ms. Mueller's desk)'에서 찾을 수 있다고 했으므로 (D)가 정답입니다.`
                },
                {
                    id: "p7-t4-q167",
                    questionNo: 167,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"The senior staff will be presenting a commemorative plaque on behalf of the whole office.\"",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "C",
                    classification: "P7_INSERTION",
                    translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"고위급 직원들이 사무실 전체를 대표하여 기념패를 수여할 예정입니다.\"",
                    explanation: `주어진 문장은 고위급 직원들이 대표로 증정할 선물(기념패)에 대해 언급하고 있습니다. [3] 앞에서 선물은 가져올 필요가 없다(There is no need to bring a gift)고 말한 뒤, 그 대신 사무실 차원에서 준비한 기념패를 증정한다는 내용이 오는 것이 흐름상 자연스러우므로 (C)가 정답입니다.`
                }
            ]
        },
        // Questions 168-171: Online Chat
        {
            id: "p7-t4-set9",
            questionRange: "168-171",
            passages: [
                {
                    id: "p7-t4-s9-p1",
                    contextType: "P7",
                    docType: "CHAT_MESSAGE",
                    title: "Online Chat",
                    content: `Colin Wikander [10:23 A.M.] I have reviewed the draft of the new client questionnaire, and it looks great overall. I would make the question about bookkeeping strategies more open-ended, though. As written, it may lead respondents to give simple yes or no answers.\n\nMidori Sakai [10:24 A.M.] That's a good point. We'll need to fix that. I also want to add a couple of questions about how financial and tax reports have been handled in the past.\n\nEla Hamidah [10:24 A.M.] I could look at the bookkeeping question to see what I can come up with.\n\nColin Wikander [10:25 A.M.] Well, it's four pages already.\n\nMidori Sakai [10:27 A.M.] That's true. I'll just wait for Ela's revision of the third question. Then Jack Neligan can put a draft of the form up on our Web site.\n\nColin Wikander [10:28 A.M.] Is it true that we are not planning to collect any paper forms?\n\nMidori Sakai [10:30 A.M.] We might do that, but digital collection is preferable to avoid the lag time of waiting for our clients to print, fill out, and scan the forms to send them back.`,
                    translation: `콜린 위칸더 [오전 10:23] 새로운 고객 설문지 초안을 검토했는데 전체적으로 훌륭해 보입니다. 그런데 저라면 회계 전략에 대한 질문을 더 개방형으로 만들 것 같습니다. 지금 쓰인 대로라면 응답자들이 간단히 예 또는 아니요로 대답하게 될 수 있습니다.\n\n미도리 사카이 [오전 10:24] 좋은 지적입니다. 그 부분을 고칠 필요가 있습니다. 저 또한 과거에 재무 및 세금 보고서가 처리된 방식에 대한 질문을 몇 가지 추가하고 싶습니다.\n\n엘라 하미다 [오전 10:24] 제가 회계 질문을 살펴보고 제안할 수 있는 것이 있는지 확인해 보겠습니다.\n\n콜린 위칸더 [오전 10:25] 글쎄요, 이미 4페이지나 되는걸요.\n\n미도리 사카이 [오전 10:27] 맞습니다. 엘라 씨의 세 번째 질문 수정을 기다리겠습니다. 그런 다음 잭 넬리건이 우리 웹사이트에 양식 초안을 올릴 수 있습니다.\n\n콜린 위칸더 [오전 10:28] 우리가 종이 양식은 수집할 계획이 없다는 것이 사실인가요?\n\n미도리 사카이 [오전 10:30] 그렇게 할 수도 있지만, 고객이 양식을 출력하고, 작성하고, 스캔해서 다시 보내주기를 기다리는 지체 시간을 피하기 위해 디지털 수집이 더 좋습니다.`
                }
            ],
            questions: [
                {
                    id: "p7-t4-q168",
                    questionNo: 168,
                    text: "What type of company do the writers most likely work for?",
                    options: {
                        "A": "Publishing",
                        "B": "Accounting",
                        "C": "Retail",
                        "D": "Design"
                    },
                    correctAnswer: "B",
                    classification: "P7_INFERENCE",
                    translation: "작성자들이 근무하는 회사는 어떤 종류의 회사일 것 같은가?",
                    explanation: `10시 23분에 위칸더 씨가 새로운 고객 설문지 초안의 '회계 전략(bookkeeping strategies)'에 대해 말했고, 10시 24분에 사카이 씨가 '재무 및 세금 보고서(financial and tax reports)'를 언급한 것으로 보아 이들이 회계 법인(Accounting)에서 근무하고 있음을 짐작할 수 있습니다.`
                },
                {
                    id: "p7-t4-q169",
                    questionNo: 169,
                    text: "What does Mr. Wikander suggest about a question?",
                    options: {
                        "A": "It is mislabeled.",
                        "B": "It is difficult to read.",
                        "C": "It should be reworded.",
                        "D": "It should be made optional."
                    },
                    correctAnswer: "C",
                    classification: "P7_DETAIL",
                    translation: "위칸더 씨가 질문에 대해 제안하는 것은?",
                    explanation: `10시 23분에 위칸더 씨가 질문을 더 개방형(more open-ended)으로 만들면 좋겠다고 말하면서 질문의 문구를 수정(reworded)할 것을 제안하고 있으므로 (C)가 정답입니다.`
                },
                {
                    id: "p7-t4-q170",
                    questionNo: 170,
                    text: "At 10:25 A.M., what does Mr. Wikander most likely mean when he writes, \"Well, it's four pages already\"?",
                    options: {
                        "A": "He is surprised by the long answers clients gave.",
                        "B": "He is impressed by how quickly the questionnaire is coming along.",
                        "C": "He thinks information in the first four pages should be cut first.",
                        "D": "He thinks the questionnaire should not be any longer."
                    },
                    correctAnswer: "D",
                    classification: "P7_INFERENCE",
                    translation: "오전 10시 25분에 위칸더 씨가 \"글쎄요, 이미 4페이지나 되는걸요\"라고 쓴 의도는?",
                    explanation: `사카이 씨가 질문을 몇 가지 더 추가하고 싶다고 하자, 위칸더 씨가 이미 설문지가 충분히 길다는 의미로 답한 것이므로 설문지가 더 길어지면 안 된다고 생각하는 (D)가 정답입니다.`
                },
                {
                    id: "p7-t4-q171",
                    questionNo: 171,
                    text: "Why does Ms. Sakai think that paperless forms will be preferable?",
                    options: {
                        "A": "They allow for faster data collection.",
                        "B": "They reduce the number of errors.",
                        "C": "They are good for the environment.",
                        "D": "They do not take up space in an office."
                    },
                    correctAnswer: "A",
                    classification: "P7_DETAIL",
                    translation: "사카이 씨가 종이를 쓰지 않는 양식이 더 좋을 것이라고 생각하는 이유는?",
                    explanation: `10시 30분에 사카이 씨가 고객이 출력, 작성, 스캔하여 보내주기를 기다리는 '지체 시간을 피하기 위해(to avoid the lag time of waiting)' 디지털 방식이 더 좋다고 했으므로 시간을 단축하여 더 빠른 데이터 수집을 가능하게 한다는 (A)가 정답입니다.`
                }
            ]
        },
        // Questions 172-175: Web post
        {
            id: "p7-t4-set10",
            questionRange: "172-175",
            passages: [
                {
                    id: "p7-t4-s10-p1",
                    contextType: "P3",
                    docType: "ARTICLE",
                    title: "Web Post",
                    content: `https://www.trehospitalityassociation.com/discussion/tunisia\n\nI have been a member of the TRE Hospitality Association for many years, but until now, I have posted messages only on the Greece and Egypt forums. — [1] —. This is my first post on the Tunisia forum.\n\nI am looking for recommendations for a janitorial service on the island of Djerba. My company is opening a hotel there. Our hotel will offer 80 rooms with two restaurants on-site. — [2] —. I would like to contract with a company that can provide about four full-time custodial workers and housekeepers, plus an additional five workers on an as-needed basis for large events on our property. — [3] —.\n\nI may have met some of you previously at one of our hospitality conferences. If so, please remind me. In fact, I attended the most recent one in Rabat. — [4] —. I would like to reconnect!\n\nJohn Karikas, Director of Development\n\nSynecdoche Hotel Group`,
                    translation: `https://www.trehospitalityassociation.com/discussion/tunisia\n\n저는 수년 동안 TRE 접객 협회 회원이었지만 지금까지는 그리스와 이집트 포럼에만 글을 올렸습니다. — [1] —. 이 글은 튀니지 포럼에 올리는 저의 첫 게시글입니다.\n\n저는 제르바 섬에 있는 청소 서비스 추천을 구하고 있습니다. 저희 회사는 그곳에 호텔을 개장할 예정입니다. 저희 호텔은 80개의 객실과 부지 내에 두 개의 레스토랑을 제공할 것입니다. — [2] —. 네 명 정도의 정규직 관리 직원과 객실 청소 담당자에 대해 호텔 내 대형 행사가 있을 경우 필요 시마다 추가로 다섯 명의 근로자를 제공할 수 있는 회사와 계약을 맺기를 원합니다. — [3] —.\n\n전에 접객 콘퍼런스 중 한 곳에서 여러분을 만났을지도 모르겠습니다. 그렇다면 저에게 알려 주십시오. 사실, 저는 라바트에서 가장 최근에 열린 콘퍼런스에 참석했습니다. — [4] —. 다시 연락하고 싶습니다!\n\n존 카리카스, 개발 책임자\n시네도키 호텔 그룹`
                }
            ],
            questions: [
                {
                    id: "p7-t4-q172",
                    questionNo: 172,
                    text: "What is the purpose of the Web post?",
                    options: {
                        "A": "To advertise a new hotel",
                        "B": "To request business referrals",
                        "C": "To announce a hospitality conference",
                        "D": "To recruit employees for a hotel"
                    },
                    correctAnswer: "B",
                    classification: "P7_PURPOSE",
                    translation: "웹 게시물의 목적은?",
                    explanation: `두 번째 단락 첫 문장에서 '제르바 섬에 있는 청소 서비스 추천을 구하고 있다(I am looking for recommendations for a janitorial service on the island of Djerba)'고 했으므로 (B) 서비스 제공업체 추천 요청이 정답입니다.`
                },
                {
                    id: "p7-t4-q173",
                    questionNo: 173,
                    text: "What is indicated about Mr. Karikas?",
                    options: {
                        "A": "He recently joined the TRE Hospitality Association.",
                        "B": "He has posted on multiple forums.",
                        "C": "He manages hotels in several countries.",
                        "D": "He attended a conference in Tunisia."
                    },
                    correctAnswer: "B",
                    classification: "P7_INFERENCE",
                    translation: "카리카스 씨에 대해 명시된 것은?",
                    explanation: `첫 번째 단락에서 수년 동안 회원이었으며 그리스와 이집트 포럼에도 글을 올린 적이 있다고 했으므로 (B) 여러 포럼에 게시물을 올렸다는 것을 알 수 있습니다.`
                },
                {
                    id: "p7-t4-q174",
                    questionNo: 174,
                    text: "What type of business does Mr. Karikas want to hire?",
                    options: {
                        "A": "A catering company",
                        "B": "A security firm",
                        "C": "A cleaning service",
                        "D": "A landscaping company"
                    },
                    correctAnswer: "C",
                    classification: "P7_DETAIL",
                    translation: "카리카스 씨가 고용하고 싶어하는 사업 유형은?",
                    explanation: `두 번째 단락에서 건물 관리와 객실 청소 담당자를 제공할 수 있는 '청소 서비스(janitorial service)'를 찾고 있다고 명시했으므로 (C)가 정답입니다.`
                },
                {
                    id: "p7-t4-q175",
                    questionNo: 175,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"It will be the largest property in our portfolio.\"",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "B",
                    classification: "P7_INSERTION",
                    translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"그곳은 저희 포트폴리오에서 가장 큰 자산이 될 것입니다.\"",
                    explanation: `주어진 문장의 '그곳(It)'은 새로 개장할 제르바 섬의 호텔을 가리킵니다. 호텔의 개장 소식을 언급한 뒤, 그 규모(80개 객실과 2개 레스토랑)에 대해 부연 설명하기 전인 [2] 위치에 오는 것이 문맥상 가장 적절합니다.`
                }
            ]
        },
    ]
};
