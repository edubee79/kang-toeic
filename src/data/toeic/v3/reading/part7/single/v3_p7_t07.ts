import { Part7Test } from './types';

export const test7Data: Part7Test = {
    testId: 7,
    vol: 3,
    title: "Test 7",
    sets: [
        {
            id: "v3-p7-t7-set1",
            setType: "Single",
            questionRange: "147-148",
            passages: [
                {
                    id: "v3-p7-t7-s1-p1",
                    contextType: "P2_OFFI",
                    docType: "EMAIL",
                    content: "To: Wayan Cahyo\nFrom: Adi Athletic Club\nDate: March 10\nSubject: Acknowledgment\n\nDear Mr. Cahyo,\n\nThis is to acknowledge receipt of your letter dated March 5.\n\nYour request has been processed. Your athletic club membership is scheduled to end on the date indicated below. You are welcome to use our facilities and attend group classes until then. Please be sure to clear out your locker of any personal belongings by this deadline.\n\nTermination effective: March 31\n\nThank you.\n\nJordi Sommers, Customer Service Representative",
                    translation: "수신: Wayan Cahyo\n발신: Adi Athletic Club\n날짜: 3월 10일\n제목: 확인\n\nCahyo 씨께,\n\n3월 5일자 귀하의 서신을 잘 수령했음을 알려드립니다.\n\n귀하의 요청이 처리되었습니다. 귀하의 체육 클럽 회원 자격은 아래 명시된 날짜에 종료될 예정입니다. 그때까지는 저희 시설을 이용하고 그룹 수업에 참여하실 수 있습니다. 기한 전까지 사물함에 있는 모든 개인 소지품을 비워주시기 바랍니다.\n\n해지 발효일: 3월 31일\n\n감사합니다.\n\nJordi Sommers, 고객 서비스 담당자"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t7-q147",
                    questionNo: 147,
                    text: "What is the purpose of the e-mail?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To correct some information",
                        "B": "To offer a membership discount",
                        "C": "To promote a new group class",
                        "D": "To confirm a cancellation"
                    },
                    correctAnswer: "D",
                    translation: "이 이메일의 목적은 무엇입니까?",
                    explanation: "회원권 해지 요청이 처리되었음을 알리는(Your request has been processed. Your athletic club membership is scheduled to end...) 내용이므로 취소 확인이 목적입니다."
                },
                {
                    id: "v3-p7-t7-q148",
                    questionNo: 148,
                    text: "What must Mr. Cahyo do by March 31 ?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Mail a check",
                        "B": "Empty a locker",
                        "C": "Write to an instructor",
                        "D": "Call Mr. Sommers"
                    },
                    correctAnswer: "B",
                    translation: "Mr. Cahyo는 3월 31일까지 무엇을 해야 합니까?",
                    explanation: "기한(deadline) 내에 사물함의 개인 소지품을 비우라(clear out your locker of any personal belongings)고 명시되어 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t7-set2",
            setType: "Single",
            questionRange: "149-150",
            passages: [
                {
                    id: "v3-p7-t7-s2-p1",
                    contextType: "P2_OFFI",
                    docType: "NOTICE",
                    content: "NOTICE\n\nOn Monday, 23 September, Constellation Internet Service will install a new, state-of-the-art system here at Bluestone Tower. Internet service will be down for much of the day. This means that residents will not be able to access the building's wireless network, nor will it be possible for them to contact our management or maintenance staff by e-mail. Those who require access to the Internet between 9:00 A.M. and 5:00 P.M. on 23 September will need to make other arrangements. I apologize for the inconvenience.\n\nClaire Cho\nProperty Manager, Bluestone Tower",
                    translation: "공지\n\n9월 23일 월요일, Constellation 인터넷 서비스에서 이곳 Bluestone Tower에 새로운 최첨단 시스템을 설치할 예정입니다. 당일 대부분의 시간 동안 인터넷 서비스가 중단됩니다. 즉, 입주민들은 건물의 무선 네트워크에 접속할 수 없으며, 이메일로 관리실이나 유지 보수 팀에 연락하는 것도 불가능합니다. 9월 23일 오전 9시부터 오후 5시 사이에 인터넷 사용이 필요하신 분들은 다른 대안을 마련하셔야 합니다. 불편을 끼쳐 드려 죄송합니다.\n\nClaire Cho\nBluestone Tower 부동산 매니저"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t7-q149",
                    questionNo: 149,
                    text: "For whom is the notice intended?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Construction crews",
                        "B": "Internet providers",
                        "C": "Building residents",
                        "D": "Maintenance workers"
                    },
                    correctAnswer: "C",
                    translation: "이 공지문은 누구를 대상으로 합니까?",
                    explanation: "입주민들(residents)이 무선 네트워크를 사용할 수 없다는 내용이므로 건물 입주민을 대상으로 합니다."
                },
                {
                    id: "v3-p7-t7-q150",
                    questionNo: 150,
                    text: "What does the notice suggest will happen at 5:00 P.M. on September 23 ?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "A new Web site will be launched.",
                        "B": "A new service charge will take effect.",
                        "C": "Access to a building will be restricted.",
                        "D": "Internet service will be restored."
                    },
                    correctAnswer: "D",
                    translation: "공지문에 따르면 9월 23일 오후 5시에 어떤 일이 일어날 것으로 보입니까?",
                    explanation: "오전 9시부터 오후 5시까지 인터넷 사용이 불가능하다고 했으므로, 오후 5시 이후에는 작업이 끝나고 서비스가 복구될 것임을 추론할 수 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t7-set3",
            setType: "Single",
            questionRange: "151-152",
            passages: [
                {
                    id: "v3-p7-t7-s3-p1",
                    contextType: "P2_OFFI",
                    docType: "EMAIL",
                    content: "To: a.thompson@pepperfam.com\nFrom: customerservice@dixons_clothing.com\nDate: November 4, 11:31 A.M.\nSubject: Your recent order\n\nDear Mr. Thompson,\n\nOur records show that your Dixon's Clothing order number 5409281 has been delivered.\n\nItem: Canvas Rain-Resistant Jacket (Men's): $ 85.00\nShipping Fee: $ 4.50\nTotal: $ 89.50\n\nIt's important to us to know that you're happy with your item. Therefore, if you have any questions, comments, or concerns about it, call us at 555-0142, Monday through Friday between 8:00 A.M. and 7:00 P.M., and Saturday and Sunday between 10:00 A.M. and 5:00 P.M. You can also e-mail us at customerservice@dixons_clothing.com. We look forward to serving you again.\n\nSincerely,\n\nCustomer Service Department\nDixon's Clothing",
                    translation: "수신: a.thompson@pepperfam.com\n발신: customerservice@dixons_clothing.com\n날짜: 11월 4일, 오전 11:31\n제목: 최근 주문 관련 안내\n\nThompson 씨께,\n\n저희 기록에 따르면 귀하께서 Dixon's Clothing에서 주문하신 주문 번호 5409281번의 배송이 완료되었습니다.\n\n품목: 캔버스 방수 재킷 (남성용): $ 85.00\n배송비: $ 4.50\n합계: $ 89.50\n\n고객님께서 상품에 만족하시는지 여부는 저희에게 매우 중요합니다. 따라서 상품과 관련하여 질문, 의견 혹은 우려 사항이 있으시다면 월요일부터 금요일 오전 8시~오후 7시, 토요일과 일요일 오전 10시~오후 5시 사이에 555-0142로 전화해 주시기 바랍니다. customerservice@dixons_clothing.com으로 이메일을 보내주셔도 됩니다. 다시 서비스를 드릴 수 있기를 기대합니다.\n\n감사합니다.\n\n고객 서비스 부서\nDixon's Clothing"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t7-q151",
                    questionNo: 151,
                    text: "What is a purpose of the e-mail?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To notify a customer of a late delivery",
                        "B": "To confirm a request for an exchange",
                        "C": "To request payment for an order",
                        "D": "To tell a customer how to give feedback"
                    },
                    correctAnswer: "D",
                    translation: "이 이메일의 목적은 무엇입니까?",
                    explanation: "상품 만족도를 확인하고 의견이 있으면 전화나 이메일을 달라고 안내(if you have any questions, comments, or concerns about it, call us or e-mail us)하고 있으므로 피드백 방법을 안내하는 것이 목적입니다."
                },
                {
                    id: "v3-p7-t7-q152",
                    questionNo: 152,
                    text: "What is indicated about Dixon's Clothing?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "It has several store locations.",
                        "B": "It offers free shipping.",
                        "C": "Its customer service representatives are available daily.",
                        "D": "Its Web site features product reviews from customers."
                    },
                    correctAnswer: "C",
                    translation: "Dixon's Clothing에 대해 알 수 있는 것은 무엇입니까?",
                    explanation: "고객 서비스 전화 상담 시간을 월~금, 그리고 토~일까지 일주일 내내(daily) 안내하고 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t7-set4",
            setType: "Single",
            questionRange: "153-154",
            passages: [
                {
                    id: "v3-p7-t7-s4-p1",
                    contextType: "P2_OFFI",
                    docType: "CHAT",
                    content: "Leann Oliver (9:20 A.M.) Hi, Rafael. Will you be coming to the hiring committee meeting this afternoon?\nRafael Sauceda (9:21 A.M.) I wasn't planning to. Do you need me there?\nLeann Oliver (9:22 A.M.) We had more candidates apply for the job than we anticipated. We need to decide who to interview, and your expertise would be very helpful.\nRafael Sauceda (9:23 A.M.) I'll be happy to help. It's at 4, right?\nLeann Oliver (9:24 A.M.) Exactly. In conference room B. I'll see you there. Thanks.",
                    translation: "Leann Oliver (오전 9:20) 안녕 Rafael. 오늘 오후 채용 위원회 회의에 참석할 예정이야?\nRafael Sauceda (오전 9:21) 원래는 계획에 없었어. 내가 꼭 가야 해?\nLeann Oliver (오전 9:22) 생각보다 지원자가 많이 몰렸어. 면접 대상을 결정해야 하는데 너의 전문성이 큰 도움이 될 것 같아.\nRafael Sauceda (오전 9:23) 기꺼이 도와야지. 4시 맞지?\nLeann Oliver (오전 9:24) 정확해. 컨퍼런스 룸 B야. 거기서 보자. 고마워."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t7-q153",
                    questionNo: 153,
                    text: "What is the purpose of the meeting mentioned by Ms. Oliver?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "To interview a candidate for an open position",
                        "B": "To approve a job announcement",
                        "C": "To consider applicants for a job",
                        "D": "To select members for a hiring committee"
                    },
                    correctAnswer: "C",
                    translation: "Oliver 씨가 언급한 회의의 목적은 무엇입니까?",
                    explanation: "면접 볼 사람을 결정해야 한다(We need to decide who to interview)고 했으므로 지원자들을 검토하는 것이 목적입니다."
                },
                {
                    id: "v3-p7-t7-q154",
                    questionNo: 154,
                    text: "At 9:24 A.M., what does Ms. Oliver most likely mean when she writes, \"Exactly\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "The meeting room is on the fourth floor.",
                        "B": "The meeting is scheduled for 4:00 P.M.",
                        "C": "Four people will attend the meeting.",
                        "D": "The committee will meet four times."
                    },
                    correctAnswer: "B",
                    translation: "오전 9:24에 Oliver 씨가 \"Exactly\"라고 쓴 의도는 무엇입니까?",
                    explanation: "상대방이 4시냐고 물어본 것(It's at 4, right?)에 대해 맞다고 확인해 주는 대답입니다."
                }
            ]
        },
        {
            id: "v3-p7-t7-set5",
            setType: "Single",
            questionRange: "155-157",
            passages: [
                {
                    id: "v3-p7-t7-s5-p1",
                    contextType: "P3_MEDI",
                    docType: "ARTICLE",
                    content: "Manufacturer Celebrates Milestone\n\nMINNEAPOLIS (August 13)—Lindgren Machinery, a manufacturer of precision machine parts, recently celebrated the one hundredth anniversary of its founding. The company was started by Jona Lindgren, who began his career as an apprentice at a metal parts firm in Sweden. He eventually immigrated to the United States and settled in the outskirts of the city of Minneapolis. Mr. Lindgren established a modest enterprise that grew, generating most of its revenue from the production of custom machine parts.\n\nThirty years ago, Lindgren Machinery was purchased by James Wallin. Today, the firm continues as a family-owned and family-directed operation. In recent years, current president and CEO Mary Wallin has gradually assumed the leadership role from her father.\n\nLindgren Machinery makes parts for airplanes, exercise equipment, and health-care devices. According to Ms. Wallin, the company is planning to expand its facility and add capacity as its product list grows and diversifies.",
                    translation: "제조업체 기념비적 이정표를 맞이하다\n\n미니애폴리스 (8월 13일)—정밀 기계 부품 제조업체인 Lindgren Machinery가 최근 창립 100주년을 맞이했습니다. 이 회사는 스웨덴의 한 금속 부품 회사에서 견습공으로 경력을 시작한 Jona Lindgren에 의해 설립되었습니다. 그는 결국 미국으로 이주하여 미니애폴리스 시 외곽에 정착했습니다. Lindgren 씨는 주문 제작 기계 부품 생산으로 대부분의 수익을 창출하며 성장한 소규모 기업을 세웠습니다.\n\n30년 전, Lindgren Machinery는 James Wallin에게 인수되었습니다. 오늘날 이 회사는 가족 소유 및 가족 경영 체제로 운영되고 있습니다. 최근 몇 년 사이, 현 사장이자 CEO인 Mary Wallin이 아버지로부터 점진적으로 리더십 역할을 물려받았습니다.\n\nLindgren Machinery는 항공기, 운동 기구 및 의료 기기용 부품을 제조합니다. Wallin 씨에 따르면, 회사는 제품 목록이 늘어나고 다양해짐에 따라 시설을 확장하고 생산 역량을 추가할 계획입니다."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t7-q155",
                    questionNo: 155,
                    text: "What is the main purpose of the article?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To announce job openings at a company",
                        "B": "To tell about the relocation of a company",
                        "C": "To summarize the history of a company",
                        "D": "To describe successful manufacturing strategies"
                    },
                    correctAnswer: "C",
                    translation: "이 기사의 주요 목적은 무엇입니까?",
                    explanation: "창립 100주년을 맞아 창립자부터 현 경영진까지 회사의 연혁을 요약하여 전달하고 있습니다."
                },
                {
                    id: "v3-p7-t7-q156",
                    questionNo: 156,
                    text: "The word \"assumed\" in paragraph 2, line 6, is closest in meaning to",
                    classification: "P7_VOCABULARY",
                    options: {
                        "A": "undertaken",
                        "B": "pretended",
                        "C": "thought",
                        "D": "attempted"
                    },
                    correctAnswer: "A",
                    translation: "2단락 6행의 'assumed'와 의미상 가장 가까운 단어는?",
                    explanation: "리더십 역할을 '떠맡았다/수행하기 시작했다'는 의미이므로 'undertaken'이 가장 적절합니다."
                },
                {
                    id: "v3-p7-t7-q157",
                    questionNo: 157,
                    text: "What is currently true about Lindgren Machinery?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It is training new management.",
                        "B": "It has recently moved its headquarters.",
                        "C": "It is the largest employer in the city.",
                        "D": "It is a family-operated business."
                    },
                    correctAnswer: "D",
                    translation: "Lindgren Machinery에 대해 현재 사실인 것은 무엇입니까?",
                    explanation: "지문에 'continues as a family-owned and family-directed operation'이라고 명시되어 있습니다."
                }
            ]
        },
        {
            id: "v3-p7-t7-set6",
            setType: "Single",
            questionRange: "158-160",
            passages: [
                {
                    id: "v3-p7-t7-s6-p1",
                    contextType: "P2_OFFI",
                    docType: "EMAIL",
                    content: "From: Reservations <reservations@panticohotels.com>\nTo: Roger Underhill <runderhill@monthpress.com>\nDate: 10 February\nSubject: Pantico Lisbon\n\nDear Mr. Underhill:\n\nThank you for booking your reservation with the Pantico Hotel Group. We are looking forward to your upcoming stay with us in Lisbon from 8 March through 12 March.\n\nWe are proud to offer a range of services, including a 24-hour coffee shop, a fitness center, and a business lounge. There is also a parking area for guests who wish to travel by car. However, the Pantico Lisbon is well situated and is within walking distance to many fine shopping, entertainment, and dining options. We also have convenient access to public transportation, and airport transfers can be booked for a fee.\n\nTo learn more about us, please visit our Web site, www.panticohotels.com/lisbon. A calendar with details about upcoming events, both at our hotel and in the surrounding area, can be found there.\n\nIf you have any questions or concerns, please feel free to respond directly to this e-mail.\n\nAll the best,\n\nBranca Lopes\nPantico Lisbon Hotel",
                    translation: "발신: 예약 부서 <reservations@panticohotels.com>\n수신: Roger Underhill <runderhill@monthpress.com>\n날짜: 2월 10일\n제목: Pantico 리스본 호텔\n\nUnderhill 씨께:\n\nPantico 호텔 그룹을 예약해 주셔서 감사합니다. 3월 8일부터 3월 12일까지 리스본에서 저희와 함께하실 시간을 고대하고 있습니다.\n\n저희는 24시간 운영되는 커피숍, 피트니스 센터, 비즈니스 라운지를 포함하여 다양한 서비스를 제공하고 있습니다. 자차로 여행하시는 고객분들을 위한 주차 공간도 마련되어 있습니다. 하지만 Pantico 리스본 호텔은 위치가 매우 좋아 세련된 쇼핑몰, 엔터테인먼트 시설 및 다양한 식당들을 도보로 이동하실 수 있습니다. 대중교통 이용도 지극히 편리하며, 추가 비용 지불 시 공항 픽업 서비스 예약도 가능합니다.\n\n저희에 대해 더 자세히 알고 싶으시면 웹사이트 www.panticohotels.com/lisbon을 방문해 주시기 바랍니다. 호텔 내부 및 주변 지역의 다가오는 행사 정보가 담긴 캘린더를 확인하실 수 있습니다.\n\n질문이나 문의 사항이 있으시면 언제든지 이 이메일로 회신해 주십시오.\n\n행운을 빕니다.\n\nBranca Lopes\nPantico 리스본 호텔"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t7-q158",
                    questionNo: 158,
                    text: "What is the main purpose of the e-mail?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To request a change to a room reservation",
                        "B": "To introduce a new hotel employee",
                        "C": "To provide a description of hotel amenities",
                        "D": "To obtain feedback from a recent customer"
                    },
                    correctAnswer: "C",
                    translation: "이 이메일의 주요 목적은 무엇입니까?",
                    explanation: "예약 확인과 함께 호텔의 부대시설(amenities) 및 서비스(24시간 커피숍, 피트니스 센터 등)를 상세히 설명하고 있습니다."
                },
                {
                    id: "v3-p7-t7-q159",
                    questionNo: 159,
                    text: "What does the hotel offer its guests?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Complimentary airport shuttle service",
                        "B": "A parking facility",
                        "C": "Meal vouchers for area restaurants",
                        "D": "Guided city tours"
                    },
                    correctAnswer: "B",
                    translation: "이 호텔이 고객에게 제공하는 것은 무엇입니까?",
                    explanation: "지문에 'There is also a parking area for guests'라고 명시되어 있습니다."
                },
                {
                    id: "v3-p7-t7-q160",
                    questionNo: 160,
                    text: "According to the e-mail, what will Mr. Underhill be able to find on a Web site?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Information about some events",
                        "B": "Maps of the local area",
                        "C": "A list of staff members",
                        "D": "A detailed receipt"
                    },
                    correctAnswer: "A",
                    translation: "이메일에 따르면, Underhill 씨가 웹사이트에서 찾을 수 있는 것은 무엇입니까?",
                    explanation: "공연/행사 정보(details about upcoming events)가 담긴 캘린더를 확인할 수 있다고 언급했습니다."
                }
            ]
        },
        {
            id: "v3-p7-t7-set7",
            setType: "Single",
            questionRange: "161-163",
            passages: [
                {
                    id: "v3-p7-t7-s7-p1",
                    contextType: "P2_OFFI",
                    docType: "LETTER",
                    content: "November 23\n\nMatteo Fernandez\n5196 Revol St.\nLaketon, CA 97999\n\nDear Mr. Fernandez,\n\nWe are writing to notify you that your license as described below will expire at the end of the year. — [1] —.\n\nLicense Type: Motorcycle\nLicense Number: 297461\nExpiration: December 31\n\nState law requires all motor vehicle licenses to be renewed periodically. The fees are $20 for boat and snowmobile licenses, $30 for motorcycle licenses, $40 for car licenses, and $50 for truck licenses. — [2] —. Check our Web site regarding further requirements for truck licenses, as well as fees for other types of vehicle licenses: www.motorvehiclelicense.net.\n\nIt is quick and easy to renew online. — [3] —. You can also renew by mail. If you choose this option, please send a copy of this notice along with payment to your local Motor Vehicle License office. — [4] —.\n\nSincerely,\n\nBetty Tsai\nAdministrator, Motor Vehicle Licenses",
                    translation: "11월 23일\n\nMatteo Fernandez\n5196 Revol St.\nLaketon, CA 97999\n\nFernandez 씨께,\n\n귀하의 아래 명시된 면허가 올해 말에 만료될 예정임을 알려드립니다. — [1] —.\n\n면허 유형: 오토바이\n면허 번호: 297461\n만료일: 12월 31일\n\n주법에 따라 모든 차량 면허는 주기적으로 갱신되어야 합니다. 수수료는 보트 및 스노모빌 면허 $20, 오토바이 면허 $30, 자동차 면허 $40, 트럭 면허 $50입니다. — [2] —. 트럭 면허에 대한 추가 요구 사항 및 기타 유형 차량 면허 수수료는 저희 웹사이트 www.motorvehiclelicense.net에서 확인하십시오.\n\n인터넷으로 신속하고 간편하게 갱신하실 수 있습니다. — [3] —. 우편으로도 갱신이 가능합니다. 이 옵션을 선택하실 경우, 본 통지서 사본과 수수료를 관할 자동차 면허 사무소로 보내주시기 바랍니다. — [4] —.\n\n감사합니다.\n\nBetty Tsai\n자동차 면허 관리자"
                }
            ],
            questions: [
                {
                    id: "v3-p7-t7-q161",
                    questionNo: 161,
                    text: "What is the purpose of the letter?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To explain the reasons for a fee increase",
                        "B": "To provide the status of a license",
                        "C": "To schedule a meeting in Laketon",
                        "D": "To update a user's identification number"
                    },
                    correctAnswer: "B",
                    translation: "이 편지의 목적은 무엇입니까?",
                    explanation: "귀하의 면허가 곧 만료됨을 알리고(notify you that your license... will expire) 현재 상태를 알려주는 것이 목적입니다."
                },
                {
                    id: "v3-p7-t7-q162",
                    questionNo: 162,
                    text: "According to the letter, how much does Mr. Fernandez need to pay?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "$20",
                        "B": "$30",
                        "C": "$40",
                        "D": "$50"
                    },
                    correctAnswer: "B",
                    translation: "편지에 따르면, Fernandez 씨는 얼마를 지불해야 합니까?",
                    explanation: "면허 유형이 'Motorcycle(오토바이)'이므로 수수료 안내에 따라 $30를 지불해야 합니다."
                },
                {
                    id: "v3-p7-t7-q163",
                    questionNo: 163,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"To do so, please visit our Web site.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "C",
                    translation: "지정된 위치 [1], [2], [3], [4] 중 다음 문장이 들어가기에 가장 적절한 곳은?\n\"그렇게 하시려면, 저희 웹사이트를 방문해 주십시오.\"",
                    explanation: "온라인 갱신이 빠르고 간편하다는 안내 바로 뒤인 [3]에 들어가는 것이 가장 자연스럽습니다."
                }
            ]
        },
        {
            id: "v3-p7-t7-set8",
            setType: "Single",
            questionRange: "164-167",
            passages: [
                {
                    id: "v3-p7-t7-s8-p1",
                    contextType: "P2_OFFI",
                    docType: "CHAT",
                    content: "David Tham [8:04 A.M.] Hello, Kelly and Jonathan. Have we confirmed who will be arriving from Hong Kong next week?\nKelly Cromwell [8:05 A.M.] The Hong Kong office is sending Sara Wang and Neha Agarwal. Others can call in if needed.\nDavid Tham [8:07 A.M.] Where will Sara and Neha be working when they arrive?\nKelly Cromwell [8:09 A.M.] They'll be set up in conference room B. Otherwise, they can use the empty desks located near Michael Klein in Human Resources.\nJonathan Li [8:11 A.M.] Hold on. Actually, there are going to be three. Lillian Zhang is coming, too.\nDavid Tham [8:12 A.M.] We will need another work space then. I'd like to keep them together. Maybe there's a spare office in Accounting?\nKelly Cromwell [8:13 A.M.] Why is Ms. Zhang coming? I thought it was just the marketing team.\nJonathan Li [8:14 A.M.] The packaging designers have been working closely with Marketing on this project.\nKelly Cromwell [8:17 A.M.] Got it. I'll take care of it. I'll send a final schedule to you before lunch. Jonathan, please update the list of call-in participants' names and numbers and send it to all of us.",
                    translation: "David Tham [오전 8:04] 안녕하세요 Kelly, Jonathan. 다음 주 홍콩에서 누가 오는지 확정됐나요?\nKelly Cromwell [오전 8:05] 홍콩 사무소에서 Sara Wang과 Neha Agarwal을 보내기로 했습니다. 다른 분들은 필요하면 전화로 참관하실 수 있어요.\nDavid Tham [오전 8:07] Sara와 Neha가 도착하면 어디서 근무하게 되나요?\nKelly Cromwell [오전 8:09] 컨퍼런스 룸 B에 자리를 마련할 예정입니다. 그게 안 되면 인사부 Michael Klein 근처에 있는 빈 책상들을 써도 되고요.\nJonathan Li [오전 8:11] 잠깐만요. 사실 세 명이 올 거예요. Lillian Zhang도 오기로 했습니다.\nDavid Tham [오전 8:12] 그럼 업무 공간이 하나 더 필요하겠네요. 일행을 한곳에 있게 하고 싶은데 회계부에 여분 사무실이 있을까요?\nKelly Cromwell [오전 8:13] Zhang 씨는 왜 오시는 거죠? 마케팅 팀만 오는 줄 알았는데요.\nJonathan Li [오전 8:14] 패키징 디자이너들이 이번 프로젝트에서 마케팅과 긴밀히 협력해 왔거든요.\nKelly Cromwell [오전 8:17] 알겠습니다. 제가 처리하죠. 점심 전에 최종 일정을 보낼게요. Jonathan, 전화 회의 참석자 명단과 번호를 업데이트해서 우리 모두에게 공유해 주세요."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t7-q164",
                    questionNo: 164,
                    text: "Who will be visiting from the Hong Kong office?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Mr. Tham",
                        "B": "Ms. Cromwell",
                        "C": "Ms. Agarwal",
                        "D": "Mr. Klein"
                    },
                    correctAnswer: "C",
                    translation: "홍콩 사무소에서 방문할 예정인 사람은 누구입니까?",
                    explanation: "Kelly의 대답에서 'Sara Wang and Neha Agarwal'이 올 것이라고 했습니다."
                },
                {
                    id: "v3-p7-t7-q165",
                    questionNo: 165,
                    text: "At 8:11 A.M., what does Mr. Li most likely mean when he writes, \"there are going to be three\"?",
                    classification: "P7_INTENTION",
                    options: {
                        "A": "An additional visitor is arriving.",
                        "B": "Another conference room is available.",
                        "C": "The Accounting Department has several open work spaces.",
                        "D": "The schedule will include one more day of meetings."
                    },
                    correctAnswer: "A",
                    translation: "오전 8:11에 Li 씨가 \"there are going to be three\"라고 쓴 의도는 무엇입니까?",
                    explanation: "두 명인 줄 알았으나 Lillian Zhang이 추가되어 총 세 명이 온다는 뜻이므로 추가 방문객이 있다는 의미입니다."
                },
                {
                    id: "v3-p7-t7-q166",
                    questionNo: 166,
                    text: "Who most likely is Ms. Zhang?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "An accountant",
                        "B": "A human resources representative",
                        "C": "A marketing specialist",
                        "D": "A package designer"
                    },
                    correctAnswer: "D",
                    translation: "Zhang 씨는 누구일 가능성이 가장 높습니까?",
                    explanation: "Jonathan이 'The packaging designers have been working closely...'라고 답한 것으로 보아 패키지 디자이너임을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t7-q167",
                    questionNo: 167,
                    text: "What does Ms. Cromwell ask Mr. Li to do?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Print a meeting schedule",
                        "B": "Prepare a list of contacts",
                        "C": "Distribute a lunch menu",
                        "D": "Assign visitors to offices"
                    },
                    correctAnswer: "B",
                    translation: "Cromwell 씨가 Li 씨에게 요청한 일은 무엇입니까?",
                    explanation: "전화 참석자 명단과 번호를 업데이트해서 공유해달라(update the list of call-in participants' names and numbers)고 요청했습니다."
                }
            ]
        },
        {
            id: "v3-p7-t7-set9",
            setType: "Single",
            questionRange: "168-171",
            passages: [
                {
                    id: "v3-p7-t7-s9-p1",
                    contextType: "P2_OFFI",
                    docType: "NOTICE",
                    content: "Request for Proposal\n\nPurpose\nThe City of New Langston is seeking proposals for the manufacture and installation of electronic signage at bus stops throughout the city. New Langston plans to deploy new electronic signs that display real-time arrival information to bus riders.\n\nBackground\nCurrently, New Langston's bus stops are marked by simple metal signs displaying only the location of the stop and the lines that stop at the location. Cities around the world have begun to incorporate real-time arrival information into bus stop signage. Electronic signs are proving to be very popular with riders, and studies show that the introduction of such signage has contributed to increased ridership in numerous cities.\n\nProject Description\nThe successful bidder will provide New Langston with up to 350 electronic signs. The signs must be powered by solar energy and have a battery backup allowing them to operate at night, on cloudy days, and in all weather conditions. The signs must have a reliability factor of at least 99 percent. The signs must display at least three and no more than five lines of text, and be connected to the Internet in order to provide real-time information to bus riders.\n\nPlease submit detailed bids outlining costs by 11:59 p.m. on May 31 to the City of New Langston Regional Council at regionalcouncil@cityofnewlangston.gov.",
                    translation: "제안 요청서\n\n목적\nNew Langston 시는 시 전역의 버스 정류장에 전자 표지판을 제조 및 설치하기 위한 제안서를 모집하고 있습니다. New Langston 시는 버스 승객들에게 실시간 도착 정보를 제공하는 새로운 전자 표지판을 배치할 계획입니다.\n\n배경\n현재 New Langston의 버스 정류장은 정류장 위치와 해당 위치에 정차하는 노선만 표시된 단순한 금속 표지판으로 표시되어 있습니다. 전 세계 여러 도시에서 버스 정류장 표지판에 실시간 도착 정보를 통합하기 시작했습니다. 전자 표지판은 승객들에게 큰 인기를 끌고 있으며, 연구 결과에 따르면 이러한 표지판의 도입이 많은 도시에서 버스 이용객 증가에 기여한 것으로 나타났습니다.\n\n프로젝트 설명\n최종 선정된 입찰자는 New Langston 시에 최대 350개의 전자 표지판을 공급하게 됩니다. 표지판은 태양 에너지를 동력으로 사용해야 하며, 야간이나 흐린 날, 모든 기상 조건에서도 작동할 수 있도록 백업 배터리를 갖추어야 합니다. 표지판은 최소 99%의 신뢰도를 유지해야 합니다. 또한 최소 3행에서 최대 5행의 텍스트가 표시되어야 하며, 실시간 정보를 제공하기 위해 인터넷에 연결되어 있어야 합니다.\n\n비용 구성을 명시한 상세 입찰서를 5월 31일 오후 11시 59분까지 New Langston 지역 협의회(regionalcouncil@cityofnewlangston.gov)로 제출해 주시기 바랍니다."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t7-q168",
                    questionNo: 168,
                    text: "What is the purpose of the information?",
                    classification: "P7_PURPOSE",
                    options: {
                        "A": "To detail a city's public transportation issues",
                        "B": "To solicit bids for a city project",
                        "C": "To outline the history of bus ridership",
                        "D": "To encourage environmental responsibility"
                    },
                    correctAnswer: "B",
                    translation: "이 정보의 목적은 무엇입니까?",
                    explanation: "시 프로젝트(버스 정류장 전자 표지판 설치)를 위한 입찰 제안을 모집하는 것이 목적입니다."
                },
                {
                    id: "v3-p7-t7-q169",
                    questionNo: 169,
                    text: "What is indicated about the proposed signs?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "They would look exactly like the current bus stop signs in New Langston.",
                        "B": "They would be manufactured by a company in New Langston.",
                        "C": "They would inform riders about the arrival of the next bus.",
                        "D": "They would need to be programmed only once a month."
                    },
                    correctAnswer: "C",
                    translation: "제안된 표지판에 대해 알 수 있는 것은 무엇입니까?",
                    explanation: "실시간 도착 정보(real-time arrival information)를 제공할 것이라고 명시되어 있습니다."
                },
                {
                    id: "v3-p7-t7-q170",
                    questionNo: 170,
                    text: "According to the information, what has been the result of installing the signs in other cities?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Increased use of public transportation",
                        "B": "Higher bus fares",
                        "C": "Improved lighting at bus stops",
                        "D": "More on-time bus arrivals"
                    },
                    correctAnswer: "A",
                    translation: "정보에 따르면, 다른 도시들에서 표지판을 설치한 결과는 어떠했습니까?",
                    explanation: "지문 배경 설명에서 'contributed to increased ridership(이용객 증가에 기여)'했다고 언급했습니다."
                },
                {
                    id: "v3-p7-t7-q171",
                    questionNo: 171,
                    text: "What is NOT a requirement for the new signs?",
                    classification: "P7_NEGATIVE",
                    options: {
                        "A": "They must be powered by solar energy.",
                        "B": "They must operate in the rain.",
                        "C": "They must be reliable.",
                        "D": "They must display information in color."
                    },
                    correctAnswer: "D",
                    translation: "새 표지판의 요구 사항이 아닌 것은 무엇입니까?",
                    explanation: "태양 에너지 동력(solar energy), 전천후 작동(all weather conditions), 신뢰성(reliability)은 언급되었으나 색상 표시(in color) 의무는 언급되지 않았습니다."
                }
            ]
        },
        {
            id: "v3-p7-t7-set10",
            setType: "Single",
            questionRange: "172-175",
            passages: [
                {
                    id: "v3-p7-t7-s10-p1",
                    contextType: "P2_OFFI",
                    docType: "JOB_AD",
                    content: "Junior Project Manager\n\nTraskin Public Relations\nSeattle, WA\n\nTraskin Public Relations is a marketing and public relations firm focusing on the hospitality industry. We are based in Seattle and have been in business for more than twenty years. To keep up with our recent rapid expansion, Traskin is now seeking a new junior project manager. — [1] —. This is an opportunity to be trained in valuable strategic and creative processes. This training program served as the starting point for several of our current senior project managers. Traskin offers all employees competitive compensation and benefits. — [2] —.\n\nResponsibilities include coordinating with managers and clients, scheduling meetings and presentations, and managing budgets. — [3] —. Additionally, the successful applicant will create weekly e-mail updates for internal teammates and clients.\n\nQualifications include a minimum of two years' management experience at a similar agency, knowledge of project management software, and excellent organizational skills. — [4] —.\n\nUpload résumé and cover letter to careers@traskinpr.com.",
                    translation: "주니어 프로젝트 매니저\n\nTraskin 홍보 업무 대리점\n시애틀, WA\n\nTraskin 홍보 업무 대리점은 환대 산업(hospitality industry)에 집중하는 마케팅 및 홍보 회사입니다. 시애틀에 본사를 두고 있으며 20년 이상 사업을 이어오고 있습니다. 최근의 급격한 확장에 발맞추기 위해, Traskin은 현재 새로운 주니어 프로젝트 매니저를 모집하고 있습니다. — [1] —. 이는 가치 있는 전략적 및 창의적 프로세스에 대해 교육받을 수 있는 기회입니다. 이 교육 프로그램은 현재 저희 선임 프로젝트 매니저들 중 몇몇의 시작점이 되기도 했습니다. Traskin은 모든 직원에게 경쟁력 있는 보상과 복지 혜택을 제공합니다. — [2] —.\n\n주요 업무로는 매니저 및 고객과의 조율, 회의 및 프리젠테이션 일정 예약, 예산 관리 등이 포함됩니다. — [3] —. 또한 최종 선발된 지원자는 내부 팀원과 고객을 위한 주간 이메일 업데이트를 작성하게 됩니다.\n\n지원 자격으로는 유사한 에이전시에서의 최소 2년 이상의 관리 경력, 프로젝트 관리 소프트웨어 사용 지식, 뛰어난 조직 관리 능력을 갖추어야 합니다. — [4] —.\n\n이력서와 자기소개서를 careers@traskinpr.com으로 업로드해 주십시오."
                }
            ],
            questions: [
                {
                    id: "v3-p7-t7-q172",
                    questionNo: 172,
                    text: "What is indicated about Traskin Public Relations?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "It is a new company.",
                        "B": "It has international offices.",
                        "C": "It focuses on Web site development.",
                        "D": "It is growing in size."
                    },
                    correctAnswer: "D",
                    translation: "Traskin 홍보 업무 대리점에 대해 알 수 있는 것은 무엇입니까?",
                    explanation: "최근의 급격한 확장(recent rapid expansion)에 발맞춰 인원을 충원한다고 했으므로 규모가 커지고 있음을 알 수 있습니다."
                },
                {
                    id: "v3-p7-t7-q173",
                    questionNo: 173,
                    text: "What is suggested about the job being advertised?",
                    classification: "P7_INFERENCE",
                    options: {
                        "A": "It offers travel opportunities.",
                        "B": "It requires experience in training new employees.",
                        "C": "It may lead to a promotion.",
                        "D": "It is a temporary position."
                    },
                    correctAnswer: "C",
                    translation: "공고된 직무에 대해 알 수 있는 사실은 무엇입니까?",
                    explanation: "지문에서 이 교육 프로그램이 현재 선임 프로젝트 매니저(senior project managers)들의 시작점이 되었다고 언급한 것으로 보아, 추후 승진 가능성을 시사합니다."
                },
                {
                    id: "v3-p7-t7-q174",
                    questionNo: 174,
                    text: "What is one responsibility of the job?",
                    classification: "P7_DETAIL",
                    options: {
                        "A": "Sending updates regularly",
                        "B": "Leading weekly team meetings",
                        "C": "Conducting market research",
                        "D": "Assigning tasks to team members"
                    },
                    correctAnswer: "A",
                    translation: "담당 업무 중 하나는 무엇입니까?",
                    explanation: "주간 이메일 업데이트를 작성한다(create weekly e-mail updates)고 했으므로 정기적인 현황 보고 업무를 포함합니다."
                },
                {
                    id: "v3-p7-t7-q175",
                    questionNo: 175,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Experience preparing budgets is a plus.\"",
                    classification: "P7_INSERTION",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "C",
                    translation: "지정된 위치 [1], [2], [3], [4] 중 다음 문장이 들어가기에 가장 적절한 곳은?\n\"예산 관리 경험이 있으면 우대합니다.\"",
                    explanation: "직무 책임(Responsibilities) 중 예산 관리(managing budgets)가 언급된 바로 뒤인 [3]에 추가 정보를 덧붙이는 것이 가장 적절합니다."
                }
            ]
        }
    ]
};
