import { PracticeSet } from './rc_part7_types';

export const rcPart7Test9: PracticeSet[] = [
    // Questions 176-180: Double Passage (E-mail + Form)
    {
        id: "p7-t9-set11",
        questionRange: "176-180",
        setType: "Double",
        passages: [
            {
                id: "p7-t9-s11-p1",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: headquartersstaff@seonwulawfirm.com\nFrom: iqalandar@seonwulawfirm.com\nDate: October 1, 9:39 A.M.\nSubject: Remote work setup\nAttachment: Equipment request form\n\nDear Associates,\n\nOn December 3, our headquarters will close for a month for renovation. As all of you normally work out of these offices in San Francisco, please plan to work off-site and collect everything you may need (your laptop, files, etc.) before December 1. Entry to the building will be restricted after that date.\n\nIf you would like a temporary space at our San Jose offices, please e-mail me, and I will reserve one for you. If you plan to work from home and need additional equipment (such as a printer), fill out the attached form from our technology department and return it to me. A representative of that department will mail the equipment to your home address.\n\nWe realize this work on the building is a disruption, but timing it with our slow season should make the situation easier. We think you will be happy with the changes when the building reopens on January 5. If you have any questions, please reach out to me.\n\nBest,\nIan Qalandar, Manager\nSeonwu Law Firm\n(415) 555-0177`
            },
            {
                id: "p7-t9-s11-p2",
                contextType: "P5",
                docType: "FORM",
                title: "Seonwu Law Firm—Equipment Request Form",
                content: `Employee name: Jason Kang\nEmployee ID: 102899\nE-mail: jkang@seonwulawfirm.com\nDate to receive: November 30\nEquipment: desktop monitor, printer\n\nEmployee Signature: ____________________ Date: ____________________\n\n(This section is to be completed by the technology department.)\nRequest completed: [x] Yes  [ ] No\nRequest filled by: Aubrey Smith\nEquipment serial numbers: VN3902556, MXE96400\nDate sent: November 27 via overnight mail`
            }
        ],
        questions: [
            {
                id: "p7-t9-q176",
                questionNo: 176,
                text: "What is indicated about Seonwu Law Firm?",
                options: {
                    "A": "It focuses on real estate law.",
                    "B": "It has a large advertising budget.",
                    "C": "It serves clients across the country.",
                    "D": "It is headquartered in San Francisco."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "이메일(지문 1)에서 직원들이 보통 샌프란시스코 사무실(these offices in San Francisco)에서 근무한다고 했으므로 그곳이 본사임을 알 수 있습니다."
            },
            {
                id: "p7-t9-q177",
                questionNo: 177,
                text: "According to the e-mail, what will the technology department do?",
                options: {
                    "A": "Install updates on employee laptops",
                    "B": "Send office equipment to employees",
                    "C": "Train employees to use new software",
                    "D": "Place equipment in renovated offices"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "이메일에서 기술 부서 담당자가 장비를 직원의 집 주소로 우편으로 보낼 것(mail the equipment to your home address)이라고 언급했습니다."
            },
            {
                id: "p7-t9-q178",
                questionNo: 178,
                text: "What is suggested in the e-mail about Seonwu Law Firm?",
                options: {
                    "A": "It plans to expand its operations.",
                    "B": "It mostly employs remote workers.",
                    "C": "It is usually not busy in December.",
                    "D": "It handles many high-profile cases."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                explanation: "이메일에서 공사 시기를 '비수기(slow season)'와 맞췄다고 했으므로, 12월은 법률사무소가 보통 바쁘지 않은 시기임을 추론할 수 있습니다."
            },
            {
                id: "p7-t9-q179",
                questionNo: 179,
                text: "What can be concluded about Mr. Kang?",
                options: {
                    "A": "He chose not to work in the San Jose office.",
                    "B": "He is a senior partner at the Seonwu Law Firm.",
                    "C": "He will be on vacation after November.",
                    "D": "He has requested a larger office."
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                explanation: "Ian Qalandar는 산호세 사무실(San Jose offices)에서 근무하고 싶으면 이메일을 달라고 했고, 재택근무용 장비가 필요하면 양식을 쓰라고 했습니다. Jason Kang은 장비 요청 양식(지문 2)을 작성했으므로 산호세로 출근하는 대신 재택근무를 선택했음을 알 수 있습니다."
            },
            {
                id: "p7-t9-q180",
                questionNo: 180,
                text: "What most likely is Ms. Smith's occupation?",
                options: {
                    "A": "Lawyer",
                    "B": "Office manager",
                    "C": "Technical support staff",
                    "D": "Administrative assistant"
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                explanation: "양식 하단에 '기술 부서에서 작성(completed by the technology department)'하는 칸에 Aubrey Smith의 이름이 기재되어 있으므로 그녀는 기술 지원 인력입니다."
            }
        ]
    },
    // Questions 181-185: Double Passage (Article + E-mail)
    {
        id: "p7-t9-set12",
        questionRange: "181-185",
        setType: "Double",
        passages: [
            {
                id: "p7-t9-s12-p1",
                contextType: "P3",
                docType: "ARTICLE",
                title: "Planning a Tour of Your Facility",
                content: `by Didiane Lessard\n\nPlant tours are commonplace in many factories, but not all tours are effective. A potential investor and a casual tourist will not be impressed by the same things. \n\nBe selective. Unless your tour is for a safety inspection, your guests do not need to see every part of your factory. \n\nTiming is everything. Schedule breaks in tours lasting longer than an hour. Half an hour in one area is the limit before guests get bored.\n\nPersonality is NOT everything. A comprehensive knowledge of production processes is important—and absolutely vital during inspections. Visitors appreciate a tour that ends on time.`
            },
            {
                id: "p7-t9-s12-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Masumi Toda\nFrom: Ana Miftaroski\nDate: May 1\nSubject: Upcoming plant tour\n\nHi, Masumi, I attached Lessard's article to help plan this month's tour. I agree on timing. Since the tour, by necessity, will have to cover the entire plant, it must be conducted efficiently. I recommend Maja Clausen as a guide; she is very knowledgeable about our policies and procedures and can handle any questions.`
            }
        ],
        questions: [
            {
                id: "p7-t9-q181",
                questionNo: 181,
                text: "What is one problem mentioned about factory tours in the article?",
                options: {
                    "A": "They are often rescheduled at the last minute.",
                    "B": "They give the same information to all types of visitors.",
                    "C": "They fail to supply protective gear that fits everyone.",
                    "D": "They allow groups that are too large."
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "기사에서 '모든 방문객에게 동일한 정보를 제공하는 획일적인 접근 방식(one-size-fits-all approach)'을 채택하는 것이 문제라고 지적했습니다."
            },
            {
                id: "p7-t9-q182",
                questionNo: 182,
                text: "According to the article, what is the maximum amount of time that a tour should stay in one area?",
                options: {
                    "A": "10 minutes",
                    "B": "20 minutes",
                    "C": "30 minutes",
                    "D": "60 minutes"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "기사에서 '가장 인상적인 방이라도 30분(half an hour) 후에는 지루해진다'고 언급했습니다."
            },
            {
                id: "p7-t9-q183",
                questionNo: 183,
                text: "What is NOT indicated in the article as a characteristic of a good tour guide?",
                options: {
                    "A": "A friendly personality",
                    "B": "The ability to stand for long periods",
                    "C": "A deep knowledge of processes",
                    "D": "The ability to pay close attention to time"
                },
                correctAnswer: "B",
                classification: "P7_NEGATIVE",
                explanation: "기사에서 친절함(personable), 지식(knowledge), 시간 엄수(on time)는 언급되었으나, 오래 서 있는 능력에 대한 언급은 없습니다."
            },
            {
                id: "p7-t9-q184",
                questionNo: 184,
                text: "For whom is Mr. Toda most likely planning a tour?",
                options: {
                    "A": "Casual tourists",
                    "B": "New employees",
                    "C": "Potential investors",
                    "D": "Safety inspectors"
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                explanation: "기사(지문 1)에서 '안전 검사(safety inspection)가 아니면 공장의 모든 부분을 볼 필요가 없다'고 했는데, 이메일(지문 2)에서 이번 투어는 '필연적으로 전체 공장을 다뤄야 한다(cover the entire plant)'고 했으므로 안전 검사관들을 위한 견학임을 알 수 있습니다."
            },
            {
                id: "p7-t9-q185",
                questionNo: 185,
                text: "When is the tour scheduled to take place?",
                options: {
                    "A": "On April 15",
                    "B": "On April 21",
                    "C": "On May 1",
                    "D": "On May 21"
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                explanation: "이메일 날짜가 5월 1일이고 '이번 달 말(later this month)'에 투어가 있다고 했습니다. 또한 추천 가이드 후보인 Nathan Zarate가 5월 21일에 자리를 비운다고 했으므로 투어 날짜는 5월 21일입니다."
            }
        ]
    },
    // Questions 186-190: Triple Passage (Web page + Schedule + Testimonial)
    {
        id: "p7-t9-set13",
        questionRange: "186-190",
        setType: "Triple",
        passages: [
            {
                id: "p7-t9-s13-p1",
                contextType: "P4",
                docType: "WEB_PAGE",
                content: `https://www.zonecatering.com/home\n\nZone Catering provides food trucks at film and television production sites. Our trucks move with your team. We offer a wide variety of cuisines and use CA-grown produce. We accommodate dietary restrictions and offer buffet or order-from-truck options. 24-hour support is available.`
            },
            {
                id: "p7-t9-s13-p2",
                contextType: "P5",
                docType: "SCHEDULE",
                title: "Zone Catering Food Trucks (June 10)",
                content: `| Film | Shooting Location | Contact Person |\n|---|---|---|\n| Trappings | Harpin Lot | Erin Begg |\n| Make the Meeting | 192 Laredo Street | Mark Lillo |\n| Tutors and Tuxedos | Tandor Fields | Jun-Seo Kil |\n| Jatem and the Storm | Spectrum Hall | Donna Gawason |`
            },
            {
                id: "p7-t9-s13-p3",
                contextType: "P4",
                docType: "REVIEW",
                title: "Testimonial (June 10)",
                content: `Filming 'Make the Meeting' today was great thanks to the food truck. The coffee was excellent, and the strawberries in the fruit salad were so fresh! Despite lines on a hot day, the server was fast and friendly. The beautiful mural on the truck was a nice touch!\n—Robert Chiodo`
            }
        ],
        questions: [
            {
                id: "p7-t9-q186",
                questionNo: 186,
                text: "What does the Web page indicate about Zone Catering?",
                options: {
                    "A": "It specializes in providing food at music concerts.",
                    "B": "It has lower prices than its competitors.",
                    "C": "It recently moved its corporate office to California.",
                    "D": "It provides customer support 24 hours a day."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "웹 페이지 하단에 '문제가 발생할 경우를 대비해 24시간 지원(24-hour support)을 제공한다'고 명시되어 있습니다."
            },
            {
                id: "p7-t9-q187",
                questionNo: 187,
                text: "According to the schedule, who was the contact person for the filming of Trappings on June 10?",
                options: {
                    "A": "Erin Begg",
                    "B": "Mark Lillo",
                    "C": "Jun-Seo Kil",
                    "D": "Donna Gawason"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "일정표(지문 2)에서 Trappings라는 영화의 연락 담당자(Contact Person)는 Erin Begg입니다."
            },
            {
                id: "p7-t9-q188",
                questionNo: 188,
                text: "Where was the food truck that Mr. Chiodo visited?",
                options: {
                    "A": "At Harpin Lot",
                    "B": "At 192 Laredo Street",
                    "C": "At Tandor Fields",
                    "D": "At Spectrum Hall"
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                explanation: "Chiodo 씨는 후기(지문 3)에서 'Make the Meeting'을 촬영하는 동안 푸드트럭을 방문했다고 했습니다. 일정표(지문 2)에 따르면 해당 영화는 '192 Laredo Street'에서 촬영되었습니다."
            },
            {
                id: "p7-t9-q189",
                questionNo: 189,
                text: "What is probably true about the salad Mr. Chiodo ordered?",
                options: {
                    "A": "It had an unusual taste.",
                    "B": "It was too big for him to finish.",
                    "C": "It included several types of berries.",
                    "D": "It contained fruit grown in California."
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                explanation: "웹 페이지(지문 1)에서 모든 과일과 채소는 '캘리포니아에서 재배된 것(grown here in California)'을 사용한다고 했습니다. Chiodo 씨가 먹은 딸기(strawberries) 역시 여기에 해당합니다."
            },
            {
                id: "p7-t9-q190",
                questionNo: 190,
                text: "What is indicated about the food truck server in the testimonial?",
                options: {
                    "A": "She had difficulty working in the heat.",
                    "B": "She paints murals in her spare time.",
                    "C": "She prepares orders quickly.",
                    "D": "She has worked in her industry for 25 years."
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "후기에서 서버가 '모든 이들의 음식을 빠르게 준비할 수 있었다(able to get everyone's food ready quickly)'고 칭찬했습니다."
            }
        ]
    },
    // Questions 191-195: Triple Passage (E-mail + List + E-mail)
    {
        id: "p7-t9-set14",
        questionRange: "191-195",
        setType: "Triple",
        passages: [
            {
                id: "p7-t9-s14-p1",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Hae-won Jeong\nFrom: Julia Laurent\nDate: July 28\nSubject: Dallas hotels\n\nDear Hae-won, I'm attending the Digital Marketing Conference in October. Since you've been many times, I need a recommendation for a hotel near the convention center. I'm leaning toward Bonita Suites. Hope you've settled into your new role in the digital marketing department!`
            },
            {
                id: "p7-t9-s14-p2",
                contextType: "P3",
                docType: "INFORMATION",
                title: "Dallas Accommodations",
                content: `- The Oaktree Hotel: $204/night. Luxury, heart of downtown.\n- Alessi Dallas Hotel: $155/night. Boutique, lobby restaurant.\n- Bonita Suites Hotel: $125/night. Each suite has office/kitchen; lobby computer center; free on-site parking.`
            },
            {
                id: "p7-t9-s14-p3",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Julia Laurent\nFrom: Hae-won Jeong\nDate: July 29\nSubject: RE: Dallas hotels\n\nHi Julia, I'm also going! I'll stay at Alessi Dallas (closest to the center). For you, I suggest Bonita Suites—the newcomers' reception is actually held there. Reminder: our company's limit is $175/night.`
            }
        ],
        questions: [
            {
                id: "p7-t9-q191",
                questionNo: 191,
                text: "What is the purpose of the first e-mail?",
                options: {
                    "A": "To schedule a meeting with a client",
                    "B": "To ask for assistance with a project",
                    "C": "To seek a suggestion from a colleague",
                    "D": "To congratulate a colleague who was promoted"
                },
                correctAnswer: "C",
                classification: "P7_PURPOSE",
                explanation: "Julia Laurent는 컨퍼런스 경험이 많은 동료인 Hae-won Jeong에게 어느 호텔을 예약할지 '추천(recommend)'을 부탁하고 있습니다."
            },
            {
                id: "p7-t9-q192",
                questionNo: 192,
                text: "According to the list, what is suggested about the Bonita Suites Hotel?",
                options: {
                    "A": "It is located in a historic building.",
                    "B": "It features resources for business travelers.",
                    "C": "It is near many downtown tourist attractions.",
                    "D": "It charges a daily fee for parking."
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "지문 2의 설명에서 Bonita Suites Hotel은 각 방에 사무 공간(office)이 있고 로비에 프린터가 있는 컴퓨터 센터가 있다고 했으므로 비즈니스 여행객에게 적합합니다."
            },
            {
                id: "p7-t9-q193",
                questionNo: 193,
                text: "What is true about Ms. Jeong?",
                options: {
                    "A": "She has not attended a marketing conference before.",
                    "B": "She prefers the Alessi Dallas Hotel for its restaurant.",
                    "C": "She thinks Ms. Laurent should stay at the Bonita Suites Hotel.",
                    "D": "She works for a different company than Ms. Laurent."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                explanation: "Hae-won Jeong은 이메일(지문 3)에서 Laurent 씨가 이미 선호하던 Bonita Suites Hotel에서 묵는 것을 추천했습니다."
            },
            {
                id: "p7-t9-q194",
                questionNo: 194,
                text: "Why would Ms. Jeong most likely suggest that Ms. Laurent avoid the Oaktree Hotel?",
                options: {
                    "A": "It does not have an on-site restaurant.",
                    "B": "Its room rate exceeds the company's limit.",
                    "C": "Its clients are mostly noisy tourists.",
                    "D": "It is too far from the conference location."
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                explanation: "목록(지문 2)에서 Oaktree Hotel의 숙박비는 $204인데, Jeong 씨의 이메일(지문 3)에서 회사의 한도가 '$175/박'임을 상기시키고 있으므로 규정을 어기게 됩니다."
            },
            {
                id: "p7-t9-q195",
                questionNo: 195,
                text: "What does the second e-mail indicate about the National Digital Marketing Conference?",
                options: {
                    "A": "Its location changes to a different city each year.",
                    "B": "Last year it was held at the Alessi Dallas Hotel.",
                    "C": "Ms. Jeong is on its executive planning committee.",
                    "D": "It includes an event for first-time attendees."
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                explanation: "이메일(지문 3)에서 '처음 참석하는 사람들을 위한 리셉션(newcomers' reception)'이 첫날 밤에 열린다고 언급되었습니다."
            }
        ]
    },
    // Questions 196-200: Triple Passage (Letter + E-mail + E-mail)
    {
        id: "p7-t9-set15",
        questionRange: "196-200",
        setType: "Triple",
        passages: [
            {
                id: "p7-t9-s15-p1",
                contextType: "P1",
                docType: "LETTER",
                content: `Dover Water Supply\nMarch 12\n\nDear Ms. Cam, service at 361 Farming Ave starts April 6. Your account/meter ID is DWS4289. Billing is monthly (due 15th). We'll flush the system on April 4; you might see temporary discoloration.\n\nMatthew Ensign, Account Rep`
            },
            {
                id: "p7-t9-s15-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Dover Water Supply\nFrom: Na-Ri Cam\nDate: March 17\nSubject: DWS4289\n\nI'm moving in! Will I see discoloration on April 6? Also, your website says my account ID is invalid. I need online access by the May 15 due date to pay.`
            },
            {
                id: "p7-t9-s15-p3",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Na-Ri Cam\nFrom: Customer Support\nDate: March 18\n\nMs. Cam, your water might be cloudy on April 6 but is safe. Keep it running until clear. I have fixed your online account issue. Any more questions, reach out.\n\nRamona Hizon`
            }
        ],
        questions: [
            {
                id: "p7-t9-q196",
                questionNo: 196,
                text: "What is one purpose of the letter?",
                options: {
                    "A": "To list customer benefits",
                    "B": "To alert customers to a price change",
                    "C": "To confirm the start of a service",
                    "D": "To describe changes to a Web site"
                },
                correctAnswer: "C",
                classification: "P7_PURPOSE",
                explanation: "지문 1의 편지는 '당신의 주소로 수도 서비스가 4월 6일부터 시작될 것임을 확인(confirm that... will begin service)'하기 위해 발송되었습니다."
            },
            {
                id: "p7-t9-q197",
                questionNo: 197,
                text: "What most likely does Ms. Cam want to do online on May 15?",
                options: {
                    "A": "Request a new water meter",
                    "B": "Complete a customer survey",
                    "C": "Report a leaking pipe",
                    "D": "Pay a water bill"
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                explanation: "편지에서 수도 요금이 매월 15일까지 납부되어야 한다고 했고, Cam 씨는 5월 15일 기한까지 '온라인 접속(online access)'이 필요하다고 했으므로 요금 지불(Pay a bill)이 목적입니다."
            },
            {
                id: "p7-t9-q198",
                questionNo: 198,
                text: "According to the second e-mail, what should Ms. Cam do on April 6?",
                options: {
                    "A": "Boil her drinking water for five minutes",
                    "B": "Allow her water to run for some time",
                    "C": "Contact her neighbors",
                    "D": "Request a service visit"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "Customer Support의 답장(지문 3)에서 물이 '투명해질 때까지 계속 틀어두라(keep the water running until it is clear)'고 권고했습니다."
            },
            {
                id: "p7-t9-q199",
                questionNo: 199,
                text: "In the second e-mail, what is indicated about the water from Dover Water Supply?",
                options: {
                    "A": "It is safe to use.",
                    "B": "It is measured every month.",
                    "C": "It is distributed to many cities.",
                    "D": "It is naturally free of minerals."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "지문 3에서 '지속적인 수질 분석 결과가 좋으며, 물이 어떤 식으로든 해롭지 않다(water is not harmful in any way)'고 강조했습니다."
            },
            {
                id: "p7-t9-q200",
                questionNo: 200,
                text: "What can be concluded about Ms. Hizon?",
                options: {
                    "A": "She resolved the issue with Ms. Cam's account.",
                    "B": "She sent a copy of the water analysis to Ms. Cam.",
                    "C": "She will offer Ms. Cam a discount for new customers.",
                    "D": "She lives in Ms. Cam's area."
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                explanation: "Ramona Hizon 씨는 이메일 끝에서 '문제를 해결했으므로(I have fixed it) 더 이상 곤란을 겪지 않을 것'이라고 말해 계정 관련 이슈를 마무리했습니다."
            }
        ]
    }
];
