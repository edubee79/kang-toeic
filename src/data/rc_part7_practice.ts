
export interface PracticePassage {
    id: string;
    type: string;
    title?: string;
    content: string;
}

export interface PracticeQuestion {
    id: string;
    text: string;
    options: string[];
    answer: string;
    explanation?: string;
}

export interface PracticeSet {
    id: string;
    type: "Double" | "Triple";
    passages: PracticePassage[];
    questions: PracticeQuestion[];
}

// RC 1회 Part 7 Double & Triple Passages (Questions 176-200)
export const fullPracticeTest: PracticeSet[] = [
    // Questions 176-180 (Double Passage)
    {
        id: "set-176-180",
        type: "Double",
        passages: [
            {
                id: "p176-1",
                type: "PRESS RELEASE",
                content: `Kitchen Swift—Media Contact
akofran@kitchenswift.com.au

FOR IMMEDIATE RELEASE

SYDNEY (4 June)—Kitchen Swift and Chef Damien Cookery are joining together to bring a new menu to Kitchen Swift restaurants. Damien Cookery is the owner of restaurants in both the Philippines and Australia, including the recently opened Enrique's. He says his cooking reflects his Filipino heritage, as well as his travels.

"I've designed these simplified recipes for Kitchen Swift so that cooks at home can enjoy new and exciting flavours with ease," he said. "While preparing and eating these meals, you can feel like you are travelling the world with me."

Zahn Chambers, vice president of Kitchen Swift, says she is pleased to work with Chef Cookery. "He is a talented chef who is committed to providing quality food supplies menus, recipes, and ingredients for two people, four people, or six people, including a range of vegetarian selections. Consumers choose the most appropriate package for their needs and have the ingredients delivered to their homes to increase with the partnership. To find out more, visit the Kitchen Swift Web site at www.kitchenswift.com.au.`
            },
            {
                id: "p176-2",
                type: "ONLINE REVIEW",
                content: `https://www.sydneyrestaurants.com.au

I recently dined at Kitchen Swift, one of the new Damien Cookery restaurants in Sydney. It is usually fully booked for dinner, you may need to call months in advance for a table. We had a wonderful lunch there instead. Call well in advance to reserve. The bread and desserts are baked on-site! It was a worthwhile treat before I flew back to Hong Kong.

—Merlit Cuan`
            }
        ],
        questions: [
            {
                id: "176",
                text: "What is the purpose of the press release?",
                options: [
                    "(A) To promote the opening of a restaurant",
                    "(B) To advertise a cooking class",
                    "(C) To introduce a travel program",
                    "(D) To congratulate an award recipient"
                ],
                answer: "C",
                explanation: "보도 자료에서 Kitchen Swift와 Chef Damien Cookery가 협력하여 새로운 메뉴를 Kitchen Swift 레스토랑에 제공한다고 발표하고 있습니다. 이는 새로운 메뉴 파트너십을 홍보하는 것으로, 레스토랑 개업 홍보나 요리 수업 광고가 아닙니다."
            },
            {
                id: "177",
                text: "In the press release, the word \"reflects\" in paragraph 1, line 4, is closest in meaning to",
                options: [
                    "(A) considers",
                    "(B) changes",
                    "(C) shows",
                    "(D) thinks about"
                ],
                answer: "D",
                explanation: "문맥상 'reflects'는 '반영하다'라는 의미로 사용되었습니다. Damien Cookery의 요리가 그의 필리핀 유산과 여행 경험을 '나타낸다(shows)'는 의미입니다. 따라서 정답은 (C) 'shows'입니다."
            },
            {
                id: "178",
                text: "What is indicated about Kitchen Swift?",
                options: [
                    "(A) It has opened several new locations.",
                    "(B) It revised its delivery schedule.",
                    "(C) It offers several meal options.",
                    "(D) It has a new vice president."
                ],
                answer: "B",
                explanation: "보도 자료 마지막 부분에서 Kitchen Swift는 2인, 4인, 6인용 메뉴, 레시피, 재료를 제공하며 채식 옵션도 포함한다고 명시되어 있습니다. 소비자는 필요에 맞는 패키지를 선택하고 집으로 배달받을 수 있습니다. 따라서 정답은 (C) '여러 식사 옵션을 제공한다'입니다."
            },
            {
                id: "179",
                text: "What is most likely true about Ms. Cuan?",
                options: [
                    "(A) She went to Mr. Cookery's restaurant.",
                    "(B) She lives in Sydney.",
                    "(C) She is a colleague of Ms. Chambers.",
                    "(D) She has placed orders from Kitchen Swift."
                ],
                answer: "C",
                explanation: "온라인 리뷰에서 Ms. Cuan은 최근 Kitchen Swift에서 식사했다고 언급했습니다. 리뷰 내용을 보면 그녀는 Damien Cookery의 새로운 레스토랑 중 하나에서 점심을 먹었고, 홍콩으로 돌아가기 전이었다고 했습니다. 따라서 정답은 (A) 'Mr. Cookery의 레스토랑에 갔다'입니다."
            },
            {
                id: "180",
                text: "What did Ms. Cuan suggest about Enrique's in the review?",
                options: [
                    "(A) It has a limited lunch menu.",
                    "(B) It is located in the Philippines.",
                    "(C) It serves bread from a local bakery.",
                    "(D) It has a location in Hong Kong."
                ],
                answer: "A",
                explanation: "리뷰에서 Ms. Cuan은 저녁 예약이 보통 몇 달 전에 예약해야 할 정도로 꽉 차있지만, 대신 훌륭한 점심을 먹었다고 언급했습니다. 또한 빵과 디저트가 현장에서 구워진다고 했습니다. 이는 레스토랑의 품질을 나타내는 것이지 제한된 점심 메뉴를 의미하는 것은 아닙니다."
            }
        ]
    },
    // Questions 181-185 (Double Passage)
    {
        id: "set-181-185",
        type: "Double",
        passages: [
            {
                id: "p181-1",
                type: "E-MAIL",
                content: `To: msavard@nifunnel.co.uk
From: cboyle@cedoreen.co.uk
Date: 25 May
Subject: RE: Some suggestions

Dear Ms. Savard,

Thank you for your kind offer to either pick up your online order from my shop or to pay extra for us to train transport. Neither arrangement is necessary, as I am happy to deliver your items to you at Stranraer myself. If so happens that my sister and her children live nearby in Portree. Before moving there, I will drive my rental car and hand deliver your order to you at no extra charge.

As you know, my merchandise is 100 percent handcrafted. If any damage occurs in transit, the original item plus an expensive, time-consuming replacement. Over the years, I've seen too many of my products damaged in shipping. I would rather personally deliver them personally whenever feasible or hire a ground- or sea-based courier service I trust.

I look forward to meeting you on 5 June. I expect to arrive at your house no later than 3:00 P.M.

Sincerely,
Conor Boyle
Cedoreen Classics`
            },
            {
                id: "p181-2",
                type: "TICKET",
                title: "Northern Ireland Ferry Service",
                content: `Date of Issuance: 26 May
Passenger Name: Conor Boyle

Departing Belfast: Friday, 5 June, 1:05 PM
Docking at Cairnryan: Friday, 5 June, 3:20 PM

Baggage: 1 suitcase (small), 2 instrument cases
         (1 mandolin, 1 guitar)
Vehicle transport: No
Adult Standard Class: £55.00

Please arrive 30 minutes prior to departure.`
            }
        ],
        questions: [
            {
                id: "181",
                text: "What is the purpose of the e-mail?",
                options: [
                    "(A) To finalize a delivery",
                    "(B) To announce a promotion",
                    "(C) To promote a new service",
                    "(D) To request feedback on a policy"
                ],
                answer: "C",
                explanation: "이메일에서 Mr. Boyle은 Ms. Savard의 제안(온라인 주문을 가게에서 픽업하거나 운송비를 추가로 지불하는 것)에 대해 감사하며, 대신 자신이 직접 배달하겠다고 제안하고 있습니다. 따라서 이메일의 목적은 배달을 확정하는 것입니다. 정답은 (A) '배달을 확정하기 위해'입니다."
            },
            {
                id: "182",
                text: "Why will Mr. Boyle travel from Stranraer to Portree?",
                options: [
                    "(A) To make a delivery",
                    "(B) To attend a meeting",
                    "(C) To drop off a rental car",
                    "(D) To visit family members"
                ],
                answer: "D",
                explanation: "이메일에서 Mr. Boyle은 자신의 여동생과 조카들이 Portree 근처에 산다고 언급했습니다. 그곳으로 이사하기 전에 렌터카를 운전해서 가서 Ms. Savard에게 주문 상품을 직접 전달할 것이라고 했습니다. 따라서 정답은 (D) '가족을 방문하기 위해'입니다."
            },
            {
                id: "183",
                text: "What is indicated in the e-mail?",
                options: [
                    "(A) Ms. Savard is a columnist of Cedoreen Classics.",
                    "(B) Mr. Boyle has been disappointed by couriers in the past.",
                    "(C) Ms. Savard has purchased items from Mr. Boyle in the past.",
                    "(D) Ms. Savard prefers a specific brand of luggage."
                ],
                answer: "A",
                explanation: "이메일에서 Mr. Boyle은 수년간 배송 중 자신의 제품이 손상되는 것을 너무 많이 봤다고 언급했습니다. 그래서 가능한 한 직접 배달하거나 신뢰할 수 있는 육상/해상 택배 서비스를 이용한다고 했습니다. 따라서 정답은 (B) 'Mr. Boyle은 과거에 택배 서비스에 실망한 적이 있다'입니다."
            },
            {
                id: "184",
                text: "What is most likely true about Ms. Savard?",
                options: [
                    "(A) She will pay for her job.",
                    "(B) She will pick up her order by hand.",
                    "(C) She recently purchased musical instruments.",
                    "(D) She will meet Mr. Boyle at the rental car office."
                ],
                answer: "C",
                explanation: "티켓 정보를 보면 Mr. Boyle의 수하물에 악기 케이스 2개(만돌린 1개, 기타 1개)가 포함되어 있습니다. 이메일에서 그는 Ms. Savard의 주문을 직접 전달하겠다고 했으므로, 이 악기들이 Ms. Savard가 주문한 상품일 가능성이 높습니다. 따라서 정답은 (C) '최근에 악기를 구매했다'입니다."
            },
            {
                id: "185",
                text: "How is Mr. Boyle travelling to Cairnryan on June 5?",
                options: [
                    "(A) By car",
                    "(B) By train",
                    "(C) By boat",
                    "(D) By plane"
                ],
                answer: "D",
                explanation: "티켓을 보면 'Northern Ireland Ferry Service'라고 명시되어 있으며, Belfast에서 출발하여 Cairnryan에 도착하는 페리 티켓입니다. 또한 'Vehicle transport: No'라고 되어 있어 차량 운송은 없습니다. 따라서 정답은 (C) '배로'입니다."
            }
        ]
    },
    // Questions 186-190 (Triple Passage)
    {
        id: "set-186-190",
        type: "Triple",
        passages: [
            {
                id: "p186-1",
                type: "ADVERTISEMENT",
                content: `Train to Achieve (TTA)—Our classes prepare you to succeed!

Profiled in the latest Business Directors Nigeria magazine, Train to Achieve (TTA) is one of the most innovative training providers in West Africa. By offering our classes entirely in online format, we bring the classroom to your home. All classes include video lectures, reading materials, and discussion forums in a variety of business-related fields. Upon successful completion of a class, you will receive an official Certificate of Training, in addition to any résumé. For a complete list of class fees and descriptions, visit our Web site. Below are some of our most popular classes.

Introduction to Social Media Marketing (TTA1504): Taught by marketing consultant Marcus Akpan, the class equips you with the know-how to promote your business online.

Become a Successful Freelance Writer (TTA1283): Business writer Brenda Abande gives expert guidance on how to home your writing skills and market your services.

Starting an Internet Radio Station (TTA7629): Online radio host Natalie Kabiru shows you how to appeal to your target market and gives practical tips for setting up your broadcast service.

Basics of Graphic Design (TTA7633): Veteran graphic designer Doug Umaru helps you acquire the basic skills needed to start a graphic design business.`
            },
            {
                id: "p186-2",
                type: "FORUM POST",
                title: "Discussion forum for students enrolled in Train to Achieve Class TTA1504",
                content: `Posted on: 21 May, 9:41 A.M.    Posted by: Joseph Egbe    Subject: Presentations

Viewing the list of students enrolled in this class, I remembered chatting with some of you on the forum for Brenda Abande's poster design class. I look forward to sharing our ideas on marketing with you all. As I mentioned in my introductory videoconference with Mr. Akpan for an individual videoconference about my business. I own a food truck from which I sell baked goods, and when I shared with Mr. Akpan the outline for my Web site, he suggested that I add a section with vivid images of all my baked goods. I was helpful advice.`
            },
            {
                id: "p186-3",
                type: "OUTLINE",
                title: "Egbe's Bakery—Unique baked-in flavours in every bite!",
                content: `- Section 1: Explore our menu and price list
- Section 2: View photos of our delicious treats
- Section 3: Learn about our catering services
- Section 4: View lists of ingredients`
            }
        ],
        questions: [
            {
                id: "186",
                text: "What is indicated about TTA?",
                options: [
                    "(A) It was founded by a graphic designer.",
                    "(B) It publishes a business newsletter.",
                    "(C) It is recommended by industry professionals.",
                    "(D) It has classroom facilities in cities throughout West Africa."
                ],
                answer: "B",
                explanation: "광고 첫 부분에서 TTA는 최신 Business Directors Nigeria 잡지에 소개되었다고 명시되어 있습니다. 이는 업계 전문가들에게 추천받았다는 것을 의미합니다. 따라서 정답은 (C) '업계 전문가들에게 추천받았다'입니다."
            },
            {
                id: "187",
                text: "According to the advertisement, what does TTA provide to students who finish a class?",
                options: [
                    "(A) A résumé writing workshop",
                    "(B) Free discount on a follow-up class",
                    "(C) A list of current job postings",
                    "(D) A certification document"
                ],
                answer: "A",
                explanation: "광고에서 수업을 성공적으로 완료하면 공식 Certificate of Training(교육 수료증)을 받게 되며, 이를 이력서에 추가할 수 있다고 명시되어 있습니다. 따라서 정답은 (D) '인증 문서'입니다."
            },
            {
                id: "188",
                text: "What is most likely true about Mr. Egbe?",
                options: [
                    "(A) He helped design a discussion forum.",
                    "(B) He writes for Business Directors Nigeria.",
                    "(C) He develops videoconferencing software.",
                    "(D) He recently sold a bakery food truck."
                ],
                answer: "C",
                explanation: "포럼 게시물에서 Mr. Egbe는 Brenda Abande의 포스터 디자인 수업 포럼에서 몇몇 학생들과 채팅했던 것을 기억한다고 언급했습니다. 이는 그가 이전에 TTA의 다른 수업을 수강했음을 시사합니다. 따라서 정답은 관련 내용을 재확인해야 합니다."
            },
            {
                id: "189",
                text: "What TTA class is Mr. Egbe enrolled in?",
                options: [
                    "(A) Introduction to Social Media Marketing",
                    "(B) Become a Successful Freelance Writer",
                    "(C) Starting an Internet Radio Station",
                    "(D) Basics of Graphic Design"
                ],
                answer: "D",
                explanation: "포럼 게시물의 제목을 보면 'Discussion forum for students enrolled in Train to Achieve Class TTA1504'라고 되어 있습니다. 광고에서 TTA1504는 'Introduction to Social Media Marketing' 수업입니다. 따라서 정답은 (A) 'Introduction to Social Media Marketing'입니다."
            },
            {
                id: "190",
                text: "According to the outline, what did Mr. Egbe most likely add to the outline after speaking with Mr. Akpan?",
                options: [
                    "(A) Section 1",
                    "(B) Section 2",
                    "(C) Section 3",
                    "(D) Section 4"
                ],
                answer: "C",
                explanation: "포럼 게시물에서 Mr. Egbe는 Mr. Akpan과의 화상회의에서 웹사이트 개요를 공유했고, Mr. Akpan이 구운 제품의 생생한 이미지가 있는 섹션을 추가하라고 제안했다고 언급했습니다. 개요를 보면 Section 2가 'View photos of our delicious treats'입니다. 따라서 정답은 (B) 'Section 2'입니다."
            }
        ]
    },
    // Questions 191-195 (Triple Passage)
    {
        id: "set-191-195",
        type: "Triple",
        passages: [
            {
                id: "p191-1",
                type: "ARTICLE",
                title: "Caribbean Flavours Abound",
                content: `By Rebecca Roats

NOTTINGHAM (1 August)—Orange Bay Kitchen has been serving up an infusion of Jamaican flavours in a laid-back Caribbean atmosphere for nearly a year now. Owned by Keros Deshaides, the 150-seat restaurant is an aromatic jewel amid the bustling shops and cafés of Nottingham's city centre. The restaurant's menu features an impressive variety of delights on the extensive menu, which includes curried goat, oxtail soup, and jerk chicken. Marinated for 24 hours prior to grilling and served with sides of spiced cabbage and rice, the jerk chicken is a steal at £12.

If you stop in any Friday night between 9:00 and 11 P.M., you will enjoy live reggae music.`
            },
            {
                id: "p191-2",
                type: "ONLINE REVIEW",
                content: `https://www.dinersreview.co.uk/orangebaykitchen

Posted on 22 August by Tamika Peterkin, tpeterkin@gunmail.co.uk

Orange Bay Kitchen: 2/5 Stars

After reading a glowing article about Orange Bay Kitchen by Rebecca Roats, I was eager to give this place a try. My husband and I arrived there at 7 P.M. yesterday. We were disappointed to learn that the live music performance scheduled for that night had been cancelled. Undeterred, we stayed and both ordered the jerk chicken. While the chicken's smoky flavour was outstanding, the spiced cabbage was lacking in flavour. Also, the portion size was smaller than we had anticipated, so we ordered another appetiser to avoid going home hungry. The head chef came out to greet us before we left. He was very friendly and definitely has a passion for cooking. We will probably not visit this restaurant anytime soon.`
            },
            {
                id: "p191-3",
                type: "E-MAIL",
                content: `To: tpeterkin@gunmail.co.uk
From: kdeshaides@orangebaykitchen.co.uk
Date: 24 August
Subject: Your review
Attachment: 0824

Dear Ms. Peterkin,

Thank you for visiting Orange Bay Kitchen and leaving a review. Our manager, Keros Deshaides, told me about your visit and our failure to live up to your expectations. I sincerely apologise for the disappointing experience you had. We would like to another try.

During your visit, our head had an equipment malfunction, which is what led to the smaller portion sizes. We have since replaced the malfunctioning equipment. Also, I want you to know that Head Chef Aldo Brown has changed the recipe for the spiced cabbage. I am sure you will find them delightful.

Sincerely,
Vera Singh, Owner
Orange Bay Kitchen`
            }
        ],
        questions: [
            {
                id: "191",
                text: "What does the article mention about Orange Bay Kitchen?",
                options: [
                    "(A) It is currently hiring servers.",
                    "(B) It has a location on a quiet street.",
                    "(C) It has another location in Jamaica.",
                    "(D) It opened six months ago."
                ],
                answer: "D",
                explanation: "기사에서 Orange Bay Kitchen은 거의 1년 동안 자메이카 풍미를 제공해왔다고 명시되어 있습니다. 'for nearly a year now'는 약 1년 전에 개업했다는 의미입니다. 따라서 정답은 관련 내용을 재확인해야 합니다."
            },
            {
                id: "192",
                text: "According to the article, what is the most popular menu item at Orange Bay Kitchen?",
                options: [
                    "(A) Curried goat",
                    "(B) Oxtail soup",
                    "(C) Jerk chicken",
                    "(D) Spiced cabbage"
                ],
                answer: "B",
                explanation: "기사에서 저크 치킨(jerk chicken)이 £12에 제공되며 훌륭한 가치(a steal)라고 언급되어 있습니다. 24시간 동안 재워서 구운 후 양념한 양배추와 밥과 함께 제공된다고 했습니다. 이는 인기 메뉴임을 시사합니다. 따라서 정답은 (C) 'Jerk chicken'입니다."
            },
            {
                id: "193",
                text: "What is suggested about Ms. Peterkin's visit?",
                options: [
                    "(A) She was there on a Friday.",
                    "(B) She dined alone.",
                    "(C) She requested extra rice.",
                    "(D) She ordered dessert."
                ],
                answer: "A",
                explanation: "온라인 리뷰에서 Ms. Peterkin은 어제 오후 7시에 도착했고, 그날 밤 예정된 라이브 음악 공연이 취소되었다는 것을 알게 되었다고 언급했습니다. 기사에서 라이브 레게 음악은 금요일 밤 9시~11시에 제공된다고 했으므로, 그녀는 금요일에 방문했을 가능성이 높습니다. 따라서 정답은 (A) '금요일에 방문했다'입니다."
            },
            {
                id: "194",
                text: "What is a purpose of the e-mail?",
                options: [
                    "(A) To answer a question",
                    "(B) To offer an apology",
                    "(C) To request a review",
                    "(D) To confirm a reservation"
                ],
                answer: "C",
                explanation: "이메일에서 Vera Singh은 Ms. Peterkin의 방문과 리뷰에 감사하며, 실망스러운 경험에 대해 진심으로 사과하고 있습니다. 또한 다시 한 번 기회를 주고 싶다고 언급했습니다. 따라서 이메일의 목적은 사과를 제공하는 것입니다. 정답은 (B) '사과를 제공하기 위해'입니다."
            },
            {
                id: "195",
                text: "Whom did Ms. Peterkin most likely meet at Orange Bay Kitchen?",
                options: [
                    "(A) Ms. Roats",
                    "(B) Mr. Deshaides",
                    "(C) Mr. Brown",
                    "(D) Ms. Singh"
                ],
                answer: "D",
                explanation: "온라인 리뷰에서 Ms. Peterkin은 떠나기 전에 수석 셰프가 나와서 인사했다고 언급했습니다. 이메일에서 Head Chef는 Aldo Brown이라고 명시되어 있습니다. 따라서 Ms. Peterkin이 만난 사람은 (C) 'Mr. Brown'입니다."
            }
        ]
    },
    // Questions 196-200 (Triple Passage)
    {
        id: "set-196-200",
        type: "Triple",
        passages: [
            {
                id: "p196-1",
                type: "INVOICE",
                title: "Orbys Distributors",
                content: `Client: Green Canyon  Date: June 10
Account: 4552-0

| Item | Price |
|---|---|
| Garden soil, 33 cubic meters | $1,170.00 |
| Crushed gravel, 30 metric tons | 1,710.00 |
| Paving stones, 30 metric tons | 630.00 |
| 70 paving stones, 0.5 x 0 meters | 630.00 |
| **Subtotal** | **4,650.00** |
| | |
| Discount (10%) | -465.00 |
| Delivery charge | 230.00 |
| **Grand Total** | **4,535.00** |

Please see the enclosed notice outlining important changes to your billing.`
            },
            {
                id: "p196-2",
                type: "NOTICE",
                title: "Orbys Distributors",
                content: `To our valued customers:

Our current invoicing system has been in use since Orbys Distributors was founded over twenty years ago. As a much-needed upgrade, we are switching to electronic invoicing. Beginning August 1, invoices will be generated automatically each month and will be sent to the e-mail address associated with your company's account.

Rest assured that our long-standing incentives remain in place:

• A 10% discount for orders of more than $4,000
• A 20% discount for charitable organizations
• Free deliveries to locations within 5 miles of our supply depot
• Free samples for members of our Frequent Buyer Club

More information about our transition to electronic invoicing is available on our Web site. Thanks for your support. Orbys Distributors appreciates your business!`
            },
            {
                id: "p196-3",
                type: "E-MAIL",
                content: `To: Mary Peterson, Billing Department
From: Trevor Singh, Account Manager
Date: September 12
Subject: Account 1012-4

Hello Mary,

I received a query today from William Tesoriero at Tesoriero Remodeling. His monthly invoice was late in arriving.

As you know, Mr. Tesoriero was one of our very first customers. Since we first opened for business, he has made purchases from us on a regular basis. He is also a member of the Frequent Buyer Club. This is a customer we absolutely do not want to lose. I explained to him that the rollout of our electronic invoicing system did not go as smoothly as we had hoped. He is also a member of the Frequent Buyer Club.

I would appreciate it if you could please investigate the problem without delay and send the invoice for August to Mr. Tesoriero.

Trevor`
            }
        ],
        questions: [
            {
                id: "196",
                text: "What does the invoice suggest about Green Canyon?",
                options: [
                    "(A) It owns a supply depot.",
                    "(B) It designs highways.",
                    "(C) It repairs old buildings.",
                    "(D) It is a landscaping company."
                ],
                answer: "B",
                explanation: "송장을 보면 Green Canyon이 주문한 품목은 정원용 흙, 자갈, 포장용 돌 등입니다. 이러한 자재들은 조경 작업에 사용되는 것들입니다. 따라서 Green Canyon은 조경 회사일 가능성이 높습니다. 정답은 (D) '조경 회사이다'입니다."
            },
            {
                id: "197",
                text: "Why most likely did Green Canyon receive a discount?",
                options: [
                    "(A) It is a charitable organization.",
                    "(B) It placed an order for more than $4,000 of merchandise.",
                    "(C) It is located near an Orbys Distributors supply center.",
                    "(D) It belongs to the Frequent Buyer Club."
                ],
                answer: "D",
                explanation: "송장을 보면 소계(Subtotal)가 $4,650.00이고, 10% 할인(-$465.00)을 받았습니다. 공지사항에서 $4,000 이상 주문 시 10% 할인을 제공한다고 명시되어 있습니다. Green Canyon의 주문 금액이 $4,000을 초과하므로 이 할인을 받았을 가능성이 높습니다. 따라서 정답은 (B) '$4,000 이상의 상품을 주문했다'입니다."
            },
            {
                id: "198",
                text: "According to the notice, what is changing at Orbys Distributors?",
                options: [
                    "(A) Its e-mail address",
                    "(B) Its list of incentives",
                    "(C) Its invoicing system",
                    "(D) Its delivery schedule"
                ],
                answer: "A",
                explanation: "공지사항에서 Orbys Distributors는 전자 송장 시스템으로 전환하고 있다고 명시되어 있습니다. 8월 1일부터 송장이 자동으로 생성되어 계정에 연결된 이메일 주소로 전송될 것이라고 했습니다. 따라서 정답은 (C) '송장 시스템'입니다."
            },
            {
                id: "199",
                text: "What is suggested about Mr. Tesoriero?",
                options: [
                    "(A) He did not meet with Mr. Singh.",
                    "(B) He recently moved his business to Orbys Distributors.",
                    "(C) He receives a discount for about twenty years.",
                    "(D) He has been a customer of Orbys Distributors for about twenty years."
                ],
                answer: "B",
                explanation: "이메일에서 Mr. Singh은 Mr. Tesoriero가 Orbys Distributors의 첫 번째 고객 중 한 명이었다고 언급했습니다. 회사가 처음 문을 연 이후로 그는 정기적으로 구매해왔다고 했습니다. 공지사항에서 Orbys Distributors는 20년 이상 전에 설립되었다고 했으므로, Mr. Tesoriero는 약 20년 동안 고객이었을 가능성이 높습니다. 따라서 정답은 (D) '약 20년 동안 Orbys Distributors의 고객이었다'입니다."
            },
            {
                id: "200",
                text: "What does Mr. Singh ask Ms. Peterson to do?",
                options: [
                    "(A) Send a bill",
                    "(B) Solve a problem",
                    "(C) Confirm an order",
                    "(D) Update an account number"
                ],
                answer: "C",
                explanation: "이메일 마지막 부분에서 Mr. Singh은 Ms. Peterson에게 문제를 지체 없이 조사하고 8월 송장을 Mr. Tesoriero에게 보내달라고 요청했습니다. 따라서 정답은 (A) '청구서를 보내다'입니다."
            }
        ]
    }
];

export const rcPart7PracticeData = fullPracticeTest;
export const breakdownTripleSet = fullPracticeTest[2];
