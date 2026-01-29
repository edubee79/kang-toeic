import { PracticeSet } from './rc_part7_types';

export const test1PracticeSet: PracticeSet[] = [
    // Questions 176-180 (Double Passage)
    {
        id: "p7-t1-set11",
        questionRange: "176-180",
        setType: "Double",
        passages: [
            {
                id: "p7-t1-s11-p1",
                contextType: "P3",
                docType: "PRESS RELEASE",
                content: `Kitchen Swift—Media Contact\nakofran@kitchenswift.com.au\n\nFOR IMMEDIATE RELEASE\n\nSYDNEY (4 June)—Kitchen Swift and Chef Damien Cookery are joining together to bring a new menu to Kitchen Swift restaurants. Damien Cookery is the owner of restaurants in both the Philippines and Australia, including the recently opened Enrique's. He says his cooking reflects his Filipino heritage, as well as his travels.\n\n"I've designed these simplified recipes for Kitchen Swift so that cooks at home can enjoy new and exciting flavours with ease," he said. "While preparing and eating these meals, you can feel like you are travelling the world with me."\n\nZahn Chambers, vice president of Kitchen Swift, says she is pleased to work with Chef Cookery. "He is a talented chef who is committed to providing quality food supplies menus, recipes, and ingredients for two people, four people, or six people, including a range of vegetarian selections. Consumers choose the most appropriate package for their needs and have the ingredients delivered to their homes to increase with the partnership. To find out more, visit the Kitchen Swift Web site at www.kitchenswift.com.au.`
            },
            {
                id: "p7-t1-s11-p2",
                contextType: "P4",
                docType: "REVIEW",
                content: `https://www.sydneyrestaurants.com.au\n\nI recently dined at Kitchen Swift, one of the new Damien Cookery restaurants in Sydney. It is usually fully booked for dinner, you may need to call months in advance for a table. We had a wonderful lunch there instead. Call well in advance to reserve. The bread and desserts are baked on-site! It was a worthwhile treat before I flew back to Hong Kong.\n\n—Merlit Cuan`
            }
        ],
        questions: [
            {
                id: "p7-t1-q176",
                questionNo: 176,
                text: "What is the purpose of the press release?",
                options: {
                    "A": "To promote the opening of a restaurant",
                    "B": "To advertise a cooking class",
                    "C": "To introduce a travel program",
                    "D": "To congratulate an award recipient"
                },
                correctAnswer: "A",
                classification: "P7_PURPOSE",
                explanation: "보도 자료에서 Kitchen Swift와 Chef Damien Cookery가 협력하여 새로운 메뉴를 Kitchen Swift 레스토랑에 제공한다고 발표하고 있습니다. 이는 레스토랑 개업 홍보나 메뉴 파트너십을 의미합니다."
            },
            {
                id: "p7-t1-q177",
                questionNo: 177,
                text: "In the press release, the word \"reflects\" in paragraph 1, line 4, is closest in meaning to",
                options: {
                    "A": "considers",
                    "B": "changes",
                    "C": "shows",
                    "D": "thinks about"
                },
                correctAnswer: "C",
                classification: "P7_VOCABULARY",
                explanation: "문맥상 'reflects'는 '반영하다', '나타내다'라는 의미로 사용되었습니다. 정답은 (C) 'shows'입니다."
            },
            {
                id: "p7-t1-q178",
                questionNo: 178,
                text: "What is indicated about Kitchen Swift?",
                options: {
                    "A": "It has opened several new locations.",
                    "B": "It revised its delivery schedule.",
                    "C": "It offers several meal options.",
                    "D": "It has a new vice president."
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "Kitchen Swift는 2인, 4인, 6인용 다양한 패키지 옵션을 제공한다고 명시되어 있습니다. 정답은 (C)입니다."
            },
            {
                id: "p7-t1-q179",
                questionNo: 179,
                text: "What is most likely true about Ms. Cuan?",
                options: {
                    "A": "She went to Mr. Cookery's restaurant.",
                    "B": "She lives in Sydney.",
                    "C": "She is a colleague of Ms. Chambers.",
                    "D": "She has placed orders from Kitchen Swift."
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                explanation: "Ms. Cuan은 리뷰에서 Damien Cookery의 새로운 레스토랑 중 하나에서 식사했다고 언급했습니다. 정답은 (A)입니다."
            },
            {
                id: "p7-t1-q180",
                questionNo: 180,
                text: "What did Ms. Cuan suggest about Enrique's in the review?",
                options: {
                    "A": "It has a limited lunch menu.",
                    "B": "It is located in the Philippines.",
                    "C": "It serves bread from a local bakery.",
                    "D": "It has a location in Hong Kong."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                explanation: "기사에서 Enrique's는 Cookery가 소유한 레스토랑 브랜드 중 하나로 언급되었습니다. 문맥 확인 결과 정답은 B가 될 수 있습니다."
            }
        ]
    },
    // Questions 181-185 (Double Passage)
    {
        id: "p7-t1-set12",
        questionRange: "181-185",
        setType: "Double",
        passages: [
            {
                id: "p7-t1-s12-p1",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: msavard@nifunnel.co.uk\nFrom: cboyle@cedoreen.co.uk\nDate: 25 May\nSubject: RE: Some suggestions\n\nDear Ms. Savard,\n\nThank you for your kind offer to either pick up your online order from my shop or to pay extra for us to train transport. Neither arrangement is necessary, as I am happy to deliver your items to you at Stranraer myself. If so happens that my sister and her children live nearby in Portree. Before moving there, I will drive my rental car and hand deliver your order to you at no extra charge.\n\nAs you know, my merchandise is 100 percent handcrafted. If any damage occurs in transit, the original item plus an expensive, time-consuming replacement. Over the years, I've seen too many of my products damaged in shipping. I would rather personally deliver them personally whenever feasible or hire a ground- or sea-based courier service I trust.\n\nI look forward to meeting you on 5 June. I expect to arrive at your house no later than 3:00 P.M.\n\nSincerely,\nConor Boyle\nCedoreen Classics`
            },
            {
                id: "p7-t1-s12-p2",
                contextType: "P5",
                docType: "TICKET",
                title: "Northern Ireland Ferry Service",
                content: `Date of Issuance: 26 May\nPassenger Name: Conor Boyle\n\nDeparting Belfast: Friday, 5 June, 1:05 PM\nDocking at Cairnryan: Friday, 5 June, 3:20 PM\n\nBaggage: 1 suitcase (small), 2 instrument cases\n         (1 mandolin, 1 guitar)\nVehicle transport: No\nAdult Standard Class: £55.00\n\nPlease arrive 30 minutes prior to departure.`
            }
        ],
        questions: [
            {
                id: "p7-t1-q181",
                questionNo: 181,
                text: "What is the purpose of the e-mail?",
                options: {
                    "A": "To finalize a delivery",
                    "B": "To announce a promotion",
                    "C": "To promote a new service",
                    "D": "To request feedback on a policy"
                },
                correctAnswer: "A",
                classification: "P7_PURPOSE",
                explanation: "Mr. Boyle이 자신이 직접 물건을 배달하겠다고 확정하기 위해 보낸 이메일입니다. 정답은 (A)입니다."
            },
            {
                id: "p7-t1-q182",
                questionNo: 182,
                text: "Why will Mr. Boyle travel from Stranraer to Portree?",
                options: {
                    "A": "To make a delivery",
                    "B": "To attend a meeting",
                    "C": "To drop off a rental car",
                    "D": "To visit family members"
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                explanation: "Portree 근처에 여동생 가족이 살고 있어 방문할 예정이라고 언급했습니다. 정답은 (D)입니다."
            },
            {
                id: "p7-t1-q183",
                questionNo: 183,
                text: "What is indicated in the e-mail?",
                options: {
                    "A": "Ms. Savard is a columnist of Cedoreen Classics.",
                    "B": "Mr. Boyle has been disappointed by couriers in the past.",
                    "C": "Ms. Savard has purchased items from Mr. Boyle in the past.",
                    "D": "Ms. Savard prefers a specific brand of luggage."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                explanation: "수년간 배송 중 파손 사례를 많이 겪어 택배 시스템에 실망했다는 내용이 담겨 있습니다. 정답은 (B)입니다."
            },
            {
                id: "p7-t1-q184",
                questionNo: 184,
                text: "What is most likely true about Ms. Savard?",
                options: {
                    "A": "She will pay for her job.",
                    "B": "She will pick up her order by hand.",
                    "C": "She recently purchased musical instruments.",
                    "D": "She will meet Mr. Boyle at the rental car office."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                explanation: "Mr. Boyle의 짐 목록에 악기 케이스가 포함되어 있으므로, 구매자인 Ms. Savard가 악기를 샀음을 알 수 있습니다. 정답은 (C)입니다."
            },
            {
                id: "p7-t1-q185",
                questionNo: 185,
                text: "How is Mr. Boyle travelling to Cairnryan on June 5?",
                options: {
                    "A": "By car",
                    "B": "By train",
                    "C": "By boat",
                    "D": "By plane"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "Ferry Service(페리)를 이용하므로 배로 이동합니다. 정답은 (C)입니다."
            }
        ]
    },
    // Questions 186-190 (Triple Passage)
    {
        id: "p7-t1-set13",
        questionRange: "186-190",
        setType: "Triple",
        passages: [
            {
                id: "p7-t1-s13-p1",
                contextType: "P4",
                docType: "ADVERTISEMENT",
                content: `Train to Achieve (TTA)—Our classes prepare you to succeed!\n\nProfiled in the latest Business Directors Nigeria magazine, Train to Achieve (TTA) is one of the most innovative training providers in West Africa. By offering our classes entirely in online format, we bring the classroom to your home. All classes include video lectures, reading materials, and discussion forums in a variety of business-related fields. Upon successful completion of a class, you will receive an official Certificate of Training, in addition to any résumé. For a complete list of class fees and descriptions, visit our Web site. Below are some of our most popular classes.\n\nIntroduction to Social Media Marketing (TTA1504): Taught by marketing consultant Marcus Akpan, the class equips you with the know-how to promote your business online.\n\nBecome a Successful Freelance Writer (TTA1283): Business writer Brenda Abande gives expert guidance on how to home your writing skills and market your services.\n\nStarting an Internet Radio Station (TTA7629): Online radio host Natalie Kabiru shows you how to appeal to your target market and gives practical tips for setting up your broadcast service.\n\nBasics of Graphic Design (TTA7633): Veteran graphic designer Doug Umaru helps you acquire the basic skills needed to start a graphic design business.`
            },
            {
                id: "p7-t1-s13-p2",
                contextType: "P7",
                docType: "FORUM_POST",
                title: "Discussion forum for students enrolled in Train to Achieve Class TTA1504",
                content: `Posted on: 21 May, 9:41 A.M.    Posted by: Joseph Egbe    Subject: Presentations\n\nViewing the list of students enrolled in this class, I remembered chatting with some of you on the forum for Brenda Abande's poster design class. I look forward to sharing our ideas on marketing with you all. As I mentioned in my introductory videoconference with Mr. Akpan for an individual videoconference about my business. I own a food truck from which I sell baked goods, and when I shared with Mr. Akpan the outline for my Web site, he suggested that I add a section with vivid images of all my baked goods. I was helpful advice.`
            },
            {
                id: "p7-t1-s13-p3",
                contextType: "P3",
                docType: "OUTLINE",
                title: "Egbe's Bakery—Unique baked-in flavours in every bite!",
                content: `- Section 1: Explore our menu and price list\n- Section 2: View photos of our delicious treats\n- Section 3: Learn about our catering services\n- Section 4: View lists of ingredients`
            }
        ],
        questions: [
            {
                id: "p7-t1-q186",
                questionNo: 186,
                text: "What is indicated about TTA?",
                options: {
                    "A": "It was founded by a graphic designer.",
                    "B": "It publishes a business newsletter.",
                    "C": "It is recommended by industry professionals.",
                    "D": "It has classroom facilities in cities throughout West Africa."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                explanation: "유명 잡지에 소개되었다는 것은 업계의 인정을 받았음을 뜻합니다. 정답은 (C)입니다."
            },
            {
                id: "p7-t1-q187",
                questionNo: 187,
                text: "According to the advertisement, what does TTA provide to students who finish a class?",
                options: {
                    "A": "A résumé writing workshop",
                    "B": "Free discount on a follow-up class",
                    "C": "A list of current job postings",
                    "D": "A certification document"
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "공식 교육 수료증(Certificate of Training)을 제공한다고 명시되어 있습니다. 정답은 (D)입니다."
            },
            {
                id: "p7-t1-q188",
                questionNo: 188,
                text: "What is most likely true about Mr. Egbe?",
                options: {
                    "A": "He helped design a discussion forum.",
                    "B": "He writes for Business Directors Nigeria.",
                    "C": "He develops videoconferencing software.",
                    "D": "He has previously taken a TTA class."
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                explanation: "포럼에서 이전 수업 학생들과 채팅한 기억이 있다고 언급하여 구면임을 나타냅니다. 정답은 (D)입니다."
            },
            {
                id: "p7-t1-q189",
                questionNo: 189,
                text: "What TTA class is Mr. Egbe enrolled in?",
                options: {
                    "A": "Introduction to Social Media Marketing",
                    "B": "Become a Successful Freelance Writer",
                    "C": "Starting an Internet Radio Station",
                    "D": "Basics of Graphic Design"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "TTA1504 수업 포럼에 글을 남겼으므로 해당 수업인 소셜 미디어 마케팅 수업입니다. 정답은 (A)입니다."
            },
            {
                id: "p7-t1-q190",
                questionNo: 190,
                text: "According to the outline, what did Mr. Egbe most likely add to the outline after speaking with Mr. Akpan?",
                options: {
                    "A": "Section 1",
                    "B": "Section 2",
                    "C": "Section 3",
                    "D": "Section 4"
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                explanation: "생생한 제품 이미지를 추가하라는 조언을 듣고 사진 섹션을 추가했습니다. 정답은 (B)입니다."
            }
        ]
    },
    // Questions 191-195 (Triple Passage)
    {
        id: "p7-t1-set14",
        questionRange: "191-195",
        setType: "Triple",
        passages: [
            {
                id: "p7-t1-s14-p1",
                contextType: "P3",
                docType: "ARTICLE",
                title: "Caribbean Flavours Abound",
                content: `By Rebecca Roats\n\nNOTTINGHAM (1 August)—Orange Bay Kitchen has been serving up an infusion of Jamaican flavours in a laid-back Caribbean atmosphere for nearly a year now. Owned by Keros Deshaides, the 150-seat restaurant is an aromatic jewel amid the bustling shops and cafés of Nottingham's city centre. The restaurant's menu features an impressive variety of delights on the extensive menu, which includes curried goat, oxtail soup, and jerk chicken. Marinated for 24 hours prior to grilling and served with sides of spiced cabbage and rice, the jerk chicken is a steal at £12.\n\nIf you stop in any Friday night between 9:00 and 11 P.M., you will enjoy live reggae music.`
            },
            {
                id: "p7-t1-s14-p2",
                contextType: "P4",
                docType: "REVIEW",
                content: `https://www.dinersreview.co.uk/orangebaykitchen\n\nPosted on 22 August by Tamika Peterkin, tpeterkin@gunmail.co.uk\n\nOrange Bay Kitchen: 2/5 Stars\n\nAfter reading a glowing article about Orange Bay Kitchen by Rebecca Roats, I was eager to give this place a try. My husband and I arrived there at 7 P.M. yesterday. We were disappointed to learn that the live music performance scheduled for that night had been cancelled. Undeterred, we stayed and both ordered the jerk chicken. While the chicken's smoky flavour was outstanding, the spiced cabbage was lacking in flavour. Also, the portion size was smaller than we had anticipated, so we ordered another appetiser to avoid going home hungry. The head chef came out to greet us before we left. He was very friendly and definitely has a passion for cooking. We will probably not visit this restaurant anytime soon.`
            },
            {
                id: "p7-t1-s14-p3",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: tpeterkin@gunmail.co.uk\nFrom: kdeshaides@orangebaykitchen.co.uk\nDate: 24 August\nSubject: Your review\nAttachment: 0824\n\nDear Ms. Peterkin,\n\nThank you for visiting Orange Bay Kitchen and leaving a review. Our manager, Keros Deshaides, told me about your visit and our failure to live up to your expectations. I sincerely apologise for the disappointing experience you had. We would like to another try.\n\nDuring your visit, our head had an equipment malfunction, which is what led to the smaller portion sizes. We have since replaced the malfunctioning equipment. Also, I want you to know that Head Chef Aldo Brown has changed the recipe for the spiced cabbage. I am sure you will find them delightful.\n\nSincerely,\nVera Singh, Owner\nOrange Bay Kitchen`
            }
        ],
        questions: [
            {
                id: "p7-t1-q191",
                questionNo: 191,
                text: "What does the article mention about Orange Bay Kitchen?",
                options: {
                    "A": "It is currently hiring servers.",
                    "B": "It has a location on a quiet street.",
                    "C": "It has another location in Jamaica.",
                    "D": "It opened about a year ago."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "거의 1년 동안 운영되어 왔다는 내용이 있습니다. 정답은 (D)입니다."
            },
            {
                id: "p7-t1-q192",
                questionNo: 192,
                text: "According to the article, what is one menu item at Orange Bay Kitchen?",
                options: {
                    "A": "Curried goat",
                    "B": "Grilled salmon",
                    "C": "Beef stew",
                    "D": "Fried plantains"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "메뉴 항목으로 카레 염소 고기(curried goat)가 언급되었습니다. 정답은 (A)입니다."
            },
            {
                id: "p7-t1-q193",
                questionNo: 193,
                text: "What is suggested about Ms. Peterkin's visit?",
                options: {
                    "A": "She was there on a Friday.",
                    "B": "She dined alone.",
                    "C": "She requested extra rice.",
                    "D": "She ordered dessert."
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                explanation: "음악 공연이 있는 날 방문했으므로 금요일일 가능성이 높습니다. 정답은 (A)입니다."
            },
            {
                id: "p7-t1-q194",
                questionNo: 194,
                text: "What is a purpose of the e-mail?",
                options: {
                    "A": "To answer a question",
                    "B": "To offer an apology",
                    "C": "To request a review",
                    "D": "To confirm a reservation"
                },
                correctAnswer: "B",
                classification: "P7_PURPOSE",
                explanation: "고객의 실망스러운 경험에 대해 사과하기 위해 작성된 메일입니다. 정답은 (B)입니다."
            },
            {
                id: "p7-t1-q195",
                questionNo: 195,
                text: "Whom did Ms. Peterkin most likely meet at Orange Bay Kitchen?",
                options: {
                    "A": "Ms. Roats",
                    "B": "Mr. Deshaides",
                    "C": "Mr. Brown",
                    "D": "Ms. Singh"
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                explanation: "그녀를 환대한 헤드 셰프의 이름은 Aldo Brown입니다. 정답은 (C)입니다."
            }
        ]
    },
    // Questions 196-200 (Triple Passage)
    {
        id: "p7-t1-set15",
        questionRange: "196-200",
        setType: "Triple",
        passages: [
            {
                id: "p7-t1-s15-p1",
                contextType: "P5",
                docType: "INVOICE",
                title: "Orbys Distributors",
                content: `Client: Green Canyon  Date: June 10\nAccount: 4552-0\n\n| Item | Price |\n|---|---|\n| Garden soil, 33 cubic meters | $1,170.00 |\n| Crushed gravel, 30 metric tons | 1,710.00 |\n| Paving stones, 30 metric tons | 630.00 |\n| 70 paving stones, 0.5 x 0 meters | 630.00 |\n| **Subtotal** | **4,650.00** |\n| | |\n| Discount (10%) | -465.00 |\n| Delivery charge | 230.00 |\n| **Grand Total** | **4,535.00** |\n\nPlease see the enclosed notice outlining important changes to your billing.`
            },
            {
                id: "p7-t1-s15-p2",
                contextType: "P2",
                docType: "NOTICE",
                title: "Orbys Distributors",
                content: `To our valued customers:\n\nOur current invoicing system has been in use since Orbys Distributors was founded over twenty years ago. As a much-needed upgrade, we are switching to electronic invoicing. Beginning August 1, invoices will be generated automatically each month and will be sent to the e-mail address associated with your company's account.\n\nRest assured that our long-standing incentives remain in place:\n\n• A 10% discount for orders of more than $4,000\n• A 20% discount for charitable organizations\n• Free deliveries to locations within 5 miles of our supply depot\n• Free samples for members of our Frequent Buyer Club\n\nMore information about our transition to electronic invoicing is available on our Web site. Thanks for your support. Orbys Distributors appreciates your business!`
            },
            {
                id: "p7-t1-s15-p3",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Mary Peterson, Billing Department\nFrom: Trevor Singh, Account Manager\nDate: September 12\nSubject: Account 1012-4\n\nHello Mary,\n\nI received a query today from William Tesoriero at Tesoriero Remodeling. His monthly invoice was late in arriving.\n\nAs you know, Mr. Tesoriero was one of our very first customers. Since we first opened for business, he has made purchases from us on a regular basis. He is also a member of the Frequent Buyer Club. This is a customer we absolutely do not want to lose. I explained to him that the rollout of our electronic invoicing system did not go as smoothly as we had hoped. He is also a member of the Frequent Buyer Club.\n\nI would appreciate it if you could please investigate the problem without delay and send the invoice for August to Mr. Tesoriero.\n\nTrevor`
            }
        ],
        questions: [
            {
                id: "p7-t1-q196",
                questionNo: 196,
                text: "What does the invoice suggest about Green Canyon?",
                options: {
                    "A": "It owns a supply depot.",
                    "B": "It designs highways.",
                    "C": "It repairs old buildings.",
                    "D": "It is a landscaping company."
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                explanation: "정원용 흙과 포장재를 구매하므로 조경 관련 업체임을 알 수 있습니다. 정답은 (D)입니다."
            },
            {
                id: "p7-t1-q197",
                questionNo: 197,
                text: "Why most likely did Green Canyon receive a discount?",
                options: {
                    "A": "It is a charitable organization.",
                    "B": "It placed an order for more than $4,000 of merchandise.",
                    "C": "It is located near an Orbys Distributors supply center.",
                    "D": "It belongs to the Frequent Buyer Club."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                explanation: "금액이 $4,000을 초과하여 대량 주문 할인을 받았습니다. 정답은 (B)입니다."
            },
            {
                id: "p7-t1-q198",
                questionNo: 198,
                text: "According to the notice, what is changing at Orbys Distributors?",
                options: {
                    "A": "Its e-mail address",
                    "B": "Its list of incentives",
                    "C": "Its invoicing system",
                    "D": "Its delivery schedule"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "종이 송장에서 전자 송장 시스템으로 변경된다는 공지가 있었습니다. 정답은 (C)입니다."
            },
            {
                id: "p7-t1-q199",
                questionNo: 199,
                text: "What is suggested about Mr. Tesoriero?",
                options: {
                    "A": "He did not meet with Mr. Singh.",
                    "B": "He recently moved his business to Orbys Distributors.",
                    "C": "He receives a discount for about twenty years.",
                    "D": "He has been a customer of Orbys Distributors for about twenty years."
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                explanation: "창업 초기부터 20년 이상 고객이었다는 사실을 유추할 수 있습니다. 정답은 (D)입니다."
            },
            {
                id: "p7-t1-q200",
                questionNo: 200,
                text: "What does Mr. Singh ask Ms. Peterson to do?",
                options: {
                    "A": "Send a bill",
                    "B": "Solve a problem",
                    "C": "Confirm an order",
                    "D": "Update an account number"
                },
                correctAnswer: "A",
                classification: "P7_PURPOSE",
                explanation: "지연된 8월분 청구서를 보낼 것을 요청했습니다. 정답은 (A)입니다."
            }
        ]
    }
];
