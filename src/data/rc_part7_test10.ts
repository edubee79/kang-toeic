import { PracticeSet } from './rc_part7_types';

export const test10PracticeSet: PracticeSet[] = [
    // Questions 176-180: Double Passage (Webinar description + E-mail)
    {
        id: "p7-t10-set11",
        questionRange: "176-180",
        setType: "Double",
        passages: [
            {
                id: "p7-t10-s11-p1",
                contextType: "P3",
                docType: "INFORMATION",
                title: "Introduction to Project Management",
                content: `Online Webinar\n18 January, 9 A.M.–2 P.M.\nPresenter: Shrijana Patel\nCost: €45\n(Register by 10 January and receive a 10% discount!)\n\nThis live webinar offers attendees a better understanding of how to improve the role that project management plays in their organizations. The presentation will provide the basics of managing projects and workers. Participants will learn strategies and best practices to effectively oversee their projects and foster buy-in from key players.\n\nParticipants will explore a simple step-by-step process for managing projects and learn how to use tools and documents such as scope statements and communication plans. The presenter will also cover topics such as developing a project's business case and facilitating productive team meetings.`
            },
            {
                id: "p7-t10-s11-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Maya Liu\nFrom: Leonard Chung\nSubject: Webinar\nDate: 2 January\n\nDear Ms. Liu:\n\nThank you for sending me the webinar announcement. As a novice supervisor, I need to get all the training I can, but I'm not sure whether I will be able to take advantage of this particular offering. I am scheduled to present a detailed project update at my company's quarterly division meeting on the same day, and I don't think anyone else on the team would be able to take my place.\n\nDo you know whether the webinar will be recorded or whether there will be a similar webinar at a later date? I have no schedule conflicts after 29 January.\n\nLeonard Chung`
            }
        ],
        questions: [
            {
                id: "p7-t10-q176",
                questionNo: 176,
                text: "What is indicated about the webinar?",
                options: {
                    "A": "It includes a session on preparing for job interviews.",
                    "B": "It will show participants how to use specific tools.",
                    "C": "There is no charge for participants.",
                    "D": "Registration closes on January 10."
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "웨비나 설명에서 참가자들이 범위 명세서 및 커뮤니케이션 계획과 같은 도구와 문서를 사용하는 방법을 배울 것이라고 명시되어 있습니다."
            },
            {
                id: "p7-t10-q177",
                questionNo: 177,
                text: "In the webinar description, the word \"cover\" in paragraph 2, line 3, is closest in meaning to",
                options: {
                    "A": "protect",
                    "B": "spread",
                    "C": "ask for",
                    "D": "talk about"
                },
                correctAnswer: "D",
                classification: "P7_VOCABULARY",
                explanation: "\"cover\"는 문맥상 특정 주제를 \"다루다\", \"논의하다\"의 의미로 사용되었습니다."
            },
            {
                id: "p7-t10-q178",
                questionNo: 178,
                text: "What is one purpose of the e-mail?",
                options: {
                    "A": "To explain a scheduling conflict",
                    "B": "To request a deadline extension",
                    "C": "To apologize for arriving late to an event",
                    "D": "To ask for help in preparing a presentation"
                },
                correctAnswer: "A",
                classification: "P7_PURPOSE",
                explanation: "Mr. Chung은 웨비나 당일 회사의 분기별 회의에서 발표를 해야 하므로 참석할 수 없다는 일정 충돌(scheduling conflict)을 설명하고 있습니다."
            },
            {
                id: "p7-t10-q179",
                questionNo: 179,
                text: "What is suggested about Mr. Chung?",
                options: {
                    "A": "He plans to record his presentation.",
                    "B": "He often trains new project managers.",
                    "C": "He attends webinars on a regular basis.",
                    "D": "He has relatively little experience as a supervisor."
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                explanation: "이메일에서 자신을 초보 감독자(novice supervisor)라고 지칭했으므로, 감독자로서의 경험이 적음을 알 수 있습니다."
            },
            {
                id: "p7-t10-q180",
                questionNo: 180,
                text: "On what date is Mr. Chung scheduled to give a presentation?",
                options: {
                    "A": "January 2",
                    "B": "January 10",
                    "C": "January 18",
                    "D": "January 29"
                },
                correctAnswer: "C",
                classification: "P7_LINK",
                explanation: "Mr. Chung은 웨비나와 같은 날(on the same day)에 발표를 해야 한다고 했습니다. 지문 1에서 웨비나 날짜는 1월 18일입니다."
            }
        ]
    },
    // Questions 181-185: Double Passage (Article + Review)
    {
        id: "p7-t10-set12",
        questionRange: "181-185",
        setType: "Double",
        passages: [
            {
                id: "p7-t10-s12-p1",
                contextType: "P3",
                docType: "ARTICLE",
                content: `GALWAY (4 March)—Adelle Rosier, a third-generation soap maker, opened her shop in Galway eight years ago. Nestled behind Eglinton Gourmet Market on Raven Terrace, her business, Rosier and Finch, is booming.\n\nMs. Rosier credits the success to her commitment to lifelong learning. "Yes, my handcrafted soaps, shampoos, and lotions are luxurious," she said. "But there are a lot of high-quality skin-care products out there. So after learning the trade from my family, I have increased my sales knowledge by taking online courses in business-to-business (B2B) marketing."\n\nMs. Rosier adds that those courses built her confidence in selling her products directly to hotels. "Thanks to what I learned in my B2B strategies courses, I managed to persuade a number of boutique hotels in Europe to try my products." And so Rosier and Finch skin-care products are available in guest rooms at, for instance, the Bruadair Hotel in Galway, the Florinda Grand in Lisbon, Portugal, and the Zerra Inn in Reykjavík, Iceland.\n\nMs. Rosier further points out that many of her customers first learn of her products during a hotel stay. Afterward, they visit the shop in person or go online to purchase the items for themselves.\n\nRosier and Finch is located at 12 Raven Terrace and can be found online at www.rosierandfinch.co.ie.`
            },
            {
                id: "p7-t10-s12-p2",
                contextType: "P3",
                docType: "REVIEW",
                title: "Guest Review: Florinda Grand",
                content: `https://www.florindagrand.pt/en/guest_reviews\n\nI had to arrange a last-minute business trip to my company's Portugal office, and the usual hotel I book was completely full. Based on some online recommendations, I decided to stay at Florinda Grand. While this charming hotel is much smaller than the usual places I stay, it has every comfort one would want during a business trip. In addition to a tastefully decorated and comfortable room, there were gourmet treats on my pillowcase and the finest soap, shampoo, and other toiletries available for me to enjoy. My only regret is that I was in Lisbon for just three days. Next time I visit the Lisbon office, I will stay longer and book a room at the Florinda Grand.\n\n—posted by Ashton Wu, 7 June`
            }
        ],
        questions: [
            {
                id: "p7-t10-q181",
                questionNo: 181,
                text: "What is the purpose of the article?",
                options: {
                    "A": "To provide annual hotel ratings",
                    "B": "To announce the opening of a store",
                    "C": "To profile a small-business owner",
                    "D": "To discuss online shopping trends"
                },
                correctAnswer: "C",
                classification: "P7_PURPOSE",
                explanation: "기사는 Adelle Rosier라는 비누 사업가와 그녀의 성공 요인(B2B 마케팅 학습 등)에 대해 소개하고 있습니다."
            },
            {
                id: "p7-t10-q182",
                questionNo: 182,
                text: "How did Ms. Rosier improve her marketing skills?",
                options: {
                    "A": "By visiting family members overseas",
                    "B": "By joining a professional association",
                    "C": "By working in the hotel industry",
                    "D": "By participating in online classes"
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "지문 1에서 그녀는 B2B 마케팅에 관한 온라인 코스(online courses)를 수강하여 판매 지식을 늘렸다고 언급했습니다."
            },
            {
                id: "p7-t10-q183",
                questionNo: 183,
                text: "What is stated about Rosier and Finch?",
                options: {
                    "A": "It sells its products to other businesses.",
                    "B": "It has shops in cities around the world.",
                    "C": "It is redesigning its e-commerce site.",
                    "D": "It offers courses on soapmaking."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "기사에서 그녀가 호텔들(boutique hotels)을 설득하여 제품을 공급하고 있다고 했으므로 B2B(기업 간 거래) 사업을 하고 있음을 알 수 있습니다."
            },
            {
                id: "p7-t10-q184",
                questionNo: 184,
                text: "What is suggested about Mr. Wu?",
                options: {
                    "A": "He manages Eglinton Gourmet Market.",
                    "B": "He purchased Rosier and Finch products online.",
                    "C": "He met Ms. Rosier on a business trip.",
                    "D": "He likes Rosier and Finch products."
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                explanation: "Mr. Wu는 Florinda Grand 호텔에서 '최고급 비누와 샴푸'를 즐겼다고 했습니다. 지문 1에서는 해당 호텔에 Rosier and Finch 제품이 공급된다고 언급되어 있습니다."
            },
            {
                id: "p7-t10-q185",
                questionNo: 185,
                text: "According to the review, what was Mr. Wu not pleased about?",
                options: {
                    "A": "The length of his trip",
                    "B": "The decorations in the room",
                    "C": "The comfort of the pillows",
                    "D": "The size of the hotel"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "Mr. Wu는 리뷰 끝에서 '유일한 후회는 리스본에 단 3일간만 머물렀다는 것'이라고 언급했습니다."
            }
        ]
    },
    // Questions 186-190: Triple Passage (Advertisement + Forum Post + Outline)
    {
        id: "p7-t10-set13",
        questionRange: "186-190",
        setType: "Triple",
        passages: [
            {
                id: "p7-t10-s13-p1",
                contextType: "P5",
                docType: "TABLE",
                title: "Margot's House of Ice Cream",
                content: "Flavor Purchases by Percentage of Sales - July",
                table_data: {
                    headers: ["Flavor", "Percent"],
                    rows: [
                        ["Chocolate", "22"],
                        ["Vanilla", "18"],
                        ["Strawberry", "11"],
                        ["Cookies and cream", "8"],
                        ["Butter pecan", "8"],
                        ["Mint chocolate chip", "7"],
                        ["All others", "26"]
                    ]
                }
            },
            {
                id: "p7-t10-s13-p2",
                contextType: "P2",
                docType: "MEMO",
                content: `MEMO\n\nTo: All Store Managers\nFrom: June Willcox, CEO, Margot's House of Ice Cream\nSubject: New Stores\nDate: October 5\n\nMargot's House of Ice Cream is proud to welcome the following new stores.\n\n| Store Number | Location | Opening Date | Manager |\n|---|---|---|---|\n| 66 | Framingham, Massachusetts, United States | September 1 | Inga Slavin |\n| 67 | Appleton, Wisconsin, United States | September 7 | Zheng Tong |\n| 68 | Wollongong, New South Wales, Australia | September 14 | Geoffrey Pratt |\n| 69 | Rotorua, New Zealand | September 15 | Kehinde Ilogu |\n| 70 | Greater Sudbury, Ontario, Canada | September 29 | Hallie Strafford |\n\nFor the next six months, we will be supporting these stores with advertisements in their local media markets.\n\nIn December, we plan to open stores in Italy and Switzerland. Demand for our quality product is higher than ever, our market share is increasing, and we are not finished expanding! Stay tuned for more information!`
            },
            {
                id: "p7-t10-s13-p3",
                contextType: "P3",
                docType: "ARTICLE",
                title: "Popular Ice Cream Purveyor Comes to New Zealand",
                content: `By Ysai Mendez\n\nROTORUA (2 November)—Residents of Rotorua have been flocking to Cargill Street, where Margot's House of Ice Cream has opened its first store in New Zealand.\n\n"I don't know what their secret is, but their ice cream really is something special," said Jeremy Frank, a schoolteacher who was enjoying ice cream cones with his family on a recent afternoon. "We've been here several times already since they opened. I think we'll be regulars."\n\n"I love strawberry, and their strawberry is the best I ever had," added his daughter, Olivia Frank, age 10.\n\nMargot's House of Ice Cream was founded five years ago in San Francisco by Margot Summers, a former chemistry major. Its ice cream contains at least 11 percent milk fat. Milk used in production, according to company CEO June Willcox, is sourced locally or regionally whenever possible.\n\nKehinde Ilogu, the manager of the Rotorua store, says that the number of visitors has been rising steadily.\n\n"We plan to keep the momentum going by having special events once a month," he said. "Next up is the strawberry festival. New Zealand's strawberry season will be getting started. In addition to our superb ice cream, we'll offer strawberries dipped in chocolate, strawberry cupcakes, and strawberry milkshakes. We look forward to a great future in Rotorua."`
            }
        ],
        questions: [
            {
                id: "p7-t10-q186",
                questionNo: 186,
                text: "According to the sales report, what flavor of ice cream is purchased at the same rate as Butter pecan?",
                options: {
                    "A": "Chocolate",
                    "B": "Vanilla",
                    "C": "Cookies and cream",
                    "D": "Mint chocolate chip"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                translation: "판매 보고서에 따르면, Butter pecan과 동일한 비율로 구매되는 아이스크림 향은 무엇입니까?",
                explanation: "지문 1의 표에서 Butter pecan과 Cookies and cream은 모두 8%로 판매 비율이 동일합니다."
            },
            {
                id: "p7-t10-q187",
                questionNo: 187,
                text: "What is true about the products listed in the sales report?",
                options: {
                    "A": "They contain at least 11 percent milk fat.",
                    "B": "They are made with artificial flavors.",
                    "C": "They will increase in price soon.",
                    "D": "They are sold mainly in San Francisco."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                translation: "판매 보고서에 나열된 제품에 대해 맞는 것은 무엇입니까?",
                explanation: "지문 3에서 Margot's House of Ice Cream의 아이스크림은 최소 11%의 유지방(milk fat)을 함유하고 있다고 언급되었습니다."
            },
            {
                id: "p7-t10-q188",
                questionNo: 188,
                text: "What is indicated in the memo about the company's new managers?",
                options: {
                    "A": "They were trained in Italy and Switzerland.",
                    "B": "They will receive advertising support for six months.",
                    "C": "They expect their stores to become profitable in December.",
                    "D": "They offered special promotions on opening day."
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                translation: "메모에서 회사의 새 매장 매니저들에 대해 무엇이 나타나 있습니까?",
                explanation: "지문 2의 메모에서 향후 6개월 동안 해당 매장들에 대해 현지 미디어 시장 광고 지원을 할 예정이라고 명시되었습니다."
            },
            {
                id: "p7-t10-q189",
                questionNo: 189,
                text: "What will soon happen at store 69?",
                options: {
                    "A": "More ice cream flavors will be added to the menu.",
                    "B": "A child's birthday will be celebrated.",
                    "C": "An assistant manager will be hired.",
                    "D": "A range of special treats will be sold."
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                translation: "69번 매장에서 곧 일어날 일은 무엇입니까?",
                explanation: "지문 2에서 69번 매장은 Rotorua에 위치해 있으며, 지문 3에서 Rotorua 매장은 곧 딸기 축제를 열어 초콜릿을 입힌 딸기, 컵케이크, 밀크셰이크 등 특별한 디저트(special treats)를 판매할 계획이라고 했습니다."
            },
            {
                id: "p7-t10-q190",
                questionNo: 190,
                text: "Who is most likely to enjoy the strawberry festival?",
                options: {
                    "A": "Mr. Mendez",
                    "B": "Ms. Willcox",
                    "C": "Ms. Frank",
                    "D": "Ms. Summers"
                },
                correctAnswer: "C",
                classification: "P7_LINK",
                translation: "딸기 축제를 즐길 가능성이 가장 높은 사람은 누구입니까?",
                explanation: "지문 3에서 Jeremy Frank의 딸인 Olivia Frank가 '나는 딸기를 사랑한다(I love strawberry)'고 언급했으므로 그녀가 축제를 즐길 가능성이 가장 높습니다."
            }
        ]
    },
    // Questions 191-195: Triple Passage (Article + Online Review + E-mail)
    {
        id: "p7-t10-set14",
        questionRange: "191-195",
        setType: "Triple",
        passages: [
            {
                id: "p7-t10-s14-p1",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Emi Tokuda <etokuda@paterradepartmentstores.com>\nFrom: Paul Soderman <p.soderman@galahadindustrialmachinery.com>\nDate: January 25\nSubject: Our discussion\n\nDear Ms. Tokuda,\n\nI'm writing to confirm the details of our telephone conversation earlier today.\n\nAs we discussed, Galahad Industrial Machinery will install and maintain one self-service checkout kiosk in each of the four locations operated by Paterra Department Stores in Haddonfield. The installation charge for each kiosk will be $2,000 per unit. Installation will be scheduled at a mutually agreed-upon day and time.\n\nOur maintenance fee, covering all four kiosks, is $120 per month. Our technicians will be available 24 hours a day, 7 days a week, to service the kiosks. All equipment will meet or exceed international quality standards, and all our work is guaranteed.\n\nA formal written agreement will be sent to you by registered mail. We look forward to working with you.\n\nSincerely,\n\nPaul Soderman, Managing Director\nGalahad Industrial Machinery`
            },
            {
                id: "p7-t10-s14-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Paul Soderman <p.soderman@galahadindustrialmachinery.com>\nFrom: Emi Tokuda <etokuda@paterradepartmentstores.com>\nDate: April 2\nSubject: Equipment removal and reinstallation\n\nDear Mr. Soderman,\n\nPlease be advised that we have decided to close our store at 1506 Maple Street. We plan to transfer the inventory and all equipment to our new location at 3300 Town Square Plaza. The transfer is planned for mid-June, but we have not yet set a date.\n\nI will contact you next month to confirm the date and arrange a convenient time for your work crew to install the self-service kiosk. I understand that, per our agreement dated January 25, your charge for the reinstallation will be the same as for the initial installation at the Maple Street store.\n\nYours truly,\n\nEmi Tokuda, Managing Director\nPaterra Department Stores`
            },
            {
                id: "p7-t10-s14-p3",
                contextType: "P2",
                docType: "MEMO",
                content: `MEMO\n\nTo: All Paterra Staff\nFrom: Eleanor Bianchi, Branch Manager\nDate: June 5\nRe: Move update\n\nThanks to your hard work, our new store in the Town Square Plaza is on track to open on June 15. One of the problems with the store we are currently working out of is that it is not on a bus line. By contrast, the location we will be moving to is served by bus number 689, so we expect to have a larger number of customers at that location. We are only waiting for the last of our display shelves to be delivered from our warehouse so that we can finish the display in the gardening department.\n\nIn appreciation of your efforts, I've brought pastries from Aniqa's Bakery. I've put these treats on the break-room counter. Enjoy!`
            }
        ],
        questions: [
            {
                id: "p7-t10-q191",
                questionNo: 191,
                text: "In the first e-mail, what is stated about Galahad Industrial Machinery?",
                options: {
                    "A": "It completes repairs within one day.",
                    "B": "It is available to do maintenance service at all times.",
                    "C": "It has technicians with international work experience.",
                    "D": "It has an office in Haddonfield."
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                translation: "첫 번째 이메일에서 Galahad Industrial Machinery에 대해 언급된 것은 무엇입니까?",
                explanation: "첫 번째 이메일에서 기술자들이 키오스크 서비스를 위해 주 7일, 하루 24시간(24 hours a day, 7 days a week) 대기한다고 명시되어 있습니다."
            },
            {
                id: "p7-t10-q192",
                questionNo: 192,
                text: "What is true about the reinstallation of the self-service kiosk?",
                options: {
                    "A": "It will be done personally by Mr. Soderman.",
                    "B": "It will cost Paterra Department Stores $2,000.",
                    "C": "It will cause a change in the monthly maintenance fee.",
                    "D": "It will require a new agreement to be signed."
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                translation: "셀프 서비스 키오스크의 재설치에 대해 맞는 것은 무엇입니까?",
                explanation: "지문 2에서 재설치 비용이 초기 설치 비용과 동일할 것이라고 했고, 지문 1에서 초기 설치비는 유닛당 $2,000라고 언급되었습니다."
            },
            {
                id: "p7-t10-q193",
                questionNo: 193,
                text: "When will Ms. Tokuda discuss her moving plans with Mr. Soderman?",
                options: {
                    "A": "In March",
                    "B": "In April",
                    "C": "In May",
                    "D": "In June"
                },
                correctAnswer: "C",
                classification: "P7_LINK",
                translation: "Tokuda 씨는 언제 Soderman 씨와 이사 계획을 논의할 예정입니까?",
                explanation: "두 번째 이메일 날짜가 4월 2일(April 2)이고, 본문에서 '다음 달(next month)'에 연락하여 날짜를 확정하겠다고 했으므로 5월임을 알 수 있습니다."
            },
            {
                id: "p7-t10-q194",
                questionNo: 194,
                text: "What is suggested about the Paterra store at 1506 Maple Street?",
                options: {
                    "A": "It is not accessible by bus.",
                    "B": "It will be renovated and reopened.",
                    "C": "It is far from the warehouse.",
                    "D": "It contains a bakery section."
                },
                correctAnswer: "A",
                classification: "P7_LINK",
                translation: "1506 Maple Street에 있는 Paterra 매장에 대해 암시된 것은 무엇입니까?",
                explanation: "지문 3의 메모에서 현재 일하고 있는 매장(이사 전 매장인 Maple Street 점)의 문제점 중 하나가 버스 노선이 없다는 것(not on a bus line)이라고 했습니다."
            },
            {
                id: "p7-t10-q195",
                questionNo: 195,
                text: "According to the memo, what must still be done at the new Paterra store location?",
                options: {
                    "A": "Some products must be priced.",
                    "B": "Some areas must be painted.",
                    "C": "Some doors must be replaced.",
                    "D": "Some shelves must be delivered."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                translation: "메모에 따르면, 새 Paterra 매장 위치에서 아직 수행되어야 할 일은 무엇입니까?",
                explanation: "메모 마지막 부분에서 창고로부터 마지막 진열 선반들(display shelves)이 배달되기를 기다리고 있다고 언급되었습니다."
            }
        ]
    },
    // Questions 196-200: Triple Passage (Invoice + Notice + E-mail)
    {
        id: "p7-t10-set15",
        questionRange: "196-200",
        setType: "Triple",
        passages: [
            {
                id: "p7-t10-s15-p1",
                contextType: "P3",
                docType: "ARTICLE",
                title: "Survey: Consumers Prefer Physical Stores",
                content: `A recent consumer survey has shown that 33% of respondents prefer to touch the products they intend to purchase. Moreover, 61% of those surveyed said they are likely to spend more when shopping at a brick-and-mortar store rather than at an online store.\n\nThese data, backed up by other consumer preference studies, are causing many merchants who generate all their revenue from online sales to open physical stores as a supplement to their online presence.\n\nThe advantage of a physical space is that it helps retail owners build brand loyalty. "In terms of convenience, nothing beats online," says Marlene Fitzroy, who owns Toddles, a children's store in Shelburn, and an online site, toddles.com. "But a physical space fosters a sense of community that keeps local customers coming back and attracts new ones."\n\nMs. Fitzroy, a frequent speaker at local business events, is not only a strong supporter and promoter of customer engagement; she also practices what she preaches.\n\n"Four times a year, we host a special sales event during which children can enjoy themselves with a variety of activities," she said. "These events are a hit with both the children and their parents. And even if the parents don't buy anything on such occasions, the next time they need a children's toy, game, book, or puzzle, they'll probably think of us."`
            },
            {
                id: "p7-t10-s15-p2",
                contextType: "P3",
                docType: "INVITATION",
                title: "Shelburn Business Coalition (SBC)",
                content: `Businesspeople from Shelburn and the surrounding area are invited to join us at the Shelburn Convention Center on October 8 for our annual Business Summit.\n\nOur keynote speaker this year will be Mr. Hansraj Deshpande, founder and CEO of Wintereden Hoteliers. Other speakers, all local business owners, are Ms. Omodele Akindjo, Ms. Marlene Fitzroy, Mr. Jasper Klinkhamer, and Mr. Alvin Liu. Topics to be covered include building a strong workforce, establishing a line of credit, engaging with customers, and attracting venture capital.\n\nBy registering for this event, you will automatically be added to our e-mail list. Please visit our Web site, www.shelburnbusinesscoalition.org, for the full schedule.`
            },
            {
                id: "p7-t10-s15-p3",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Vaughn Sgammato <vsgammato@opalmail.com>\nFrom: Irene Warga <irenewarga@shelburnbusinesscoalition.org>\nDate: September 15\nSubject: Your confirmation\n\nDear Mr. Sgammato,\n\nShelburn Business Coalition thanks you for registering for our Business Summit. Your confirmation number is R56690.\n\nAs a reminder, please note that the convention center underground garage will be closed for maintenance on October 8. Therefore, please park your car in the public parking area across the street. At the end of the summit, you will receive a voucher to cover the parking fee.\n\nWe look forward to seeing you. If you have any questions, please contact me at 555-0138.\n\nYours very truly,\n\nIrene Warga, Event Coordinator`
            }
        ],
        questions: [
            {
                id: "p7-t10-q196",
                questionNo: 196,
                text: "According to the article, what action is being considered by many online sellers?",
                options: {
                    "A": "Redesigning their Web sites",
                    "B": "Increasing their advertising budgets",
                    "C": "Opening physical store locations",
                    "D": "Developing new lines of products"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                translation: "기사에 따르면, 많은 온라인 판매자들이 고려하고 있는 조시는 무엇입니까?",
                explanation: "기사 두 번째 단락에서 온라인 판매로만 수익을 창출하던 많은 상인들이 온라인 입지를 보완하기 위해 실제 매장(physical stores)을 소유하려 하고 있다고 언급되었습니다."
            },
            {
                id: "p7-t10-q197",
                questionNo: 197,
                text: "What does Ms. Fitzroy say she offers her customers?",
                options: {
                    "A": "A convenient place to shop",
                    "B": "Discounts on children's clothing",
                    "C": "An enjoyable shopping experience",
                    "D": "Special deals on toys"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                translation: "Fitzroy 씨는 고객들에게 무엇을 제공한다고 말합니까?",
                explanation: "Fitzroy 씨는 아이들이 다양한 활동을 즐길 수 있는 특별 판매 이벤트를 연다고 했으며, 이러한 경험이 브랜드 충성도를 높인다고 설명했습니다."
            },
            {
                id: "p7-t10-q198",
                questionNo: 198,
                text: "Who most likely will speak on the topic of engaging with customers?",
                options: {
                    "A": "Ms. Akindjo",
                    "B": "Ms. Fitzroy",
                    "C": "Mr. Deshpande",
                    "D": "Mr. Liu"
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                translation: "고객 참여(engaging with customers)라는 주제로 발표할 가능성이 가장 높은 사람은 누구입니까?",
                explanation: "지문 2에서 다룰 주제 중 'engaging with customers'가 포함되어 있고, 지문 1에서 Fitzroy 씨는 '고객 참여의 강력한 지지자이자 홍보자(strong supporter and promoter of customer engagement)'라고 묘사되었습니다."
            },
            {
                id: "p7-t10-q199",
                questionNo: 199,
                text: "What is most likely true about Mr. Sgammato?",
                options: {
                    "A": "He was added to a mailing list.",
                    "B": "He will be starting a business.",
                    "C": "He received a discount on his registration fee.",
                    "D": "He has never attended an SBC event before"
                },
                correctAnswer: "A",
                classification: "P7_LINK",
                translation: "Sgammato 씨에 대해 맞는 것은 무엇입니까?",
                explanation: "지문 2에서 행사에 등록하면 자동으로 이메일 목록(e-mail list)에 추가된다고 했고, 지문 3에서 Sgammato 씨는 행사에 등록을 마쳤습니다."
            },
            {
                id: "p7-t10-q200",
                questionNo: 200,
                text: "What is Mr. Sgammato expected to do upon arrival at a convention center?",
                options: {
                    "A": "Ask to see to Ms. Warga",
                    "B": "Park his car across the street",
                    "C": "Obtain a confirmation number",
                    "D": "Pick up some conference material"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                translation: "Sgammato 씨가 컨벤션 센터에 도착했을 때 해야 할 일은 무엇입니까?",
                explanation: "지문 3의 확인 이메일에서 컨벤션 센터 주차장이 폐쇄되므로 길 건너편 공용 주차장(public parking area across the street)에 주차하라고 안내하고 있습니다."
            }
        ]
    }
];
