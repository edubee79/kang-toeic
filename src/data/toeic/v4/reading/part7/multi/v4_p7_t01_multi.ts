import { PracticeSet } from './types';

export const test1MultiData: PracticeSet[] = [
    // Questions 176-180 (Double Passage)
    {
        id: "v4-p7-t1-set11",
        vol: 4,
        questionRange: "176-180",
        setType: "Double",
        passages: [
            {
                id: "v4-p7-t1-s11-p1",
                contextType: "P3",
                docType: "NOTICE",
                header: {
                    title: "Kitchen Swift—Media Contact",
                    subtitle: "akofran@kitchenswift.com.au",
                    headline: "FOR IMMEDIATE RELEASE"
                },
                content: [
                    "SYDNEY (4 June)—Kitchen Swift and Chef Darius Cordero are joining together to bring a new product line to Kitchen Swift’s home-delivery service. Darius Cordero is the owner of restaurants in both the Philippines and Australia, including the recently opened Enrique’s. He says his cooking reflects his Filipino heritage, as well as his travels.",
                    "“I’ve designed these simplified recipes for Kitchen Swift so that cooks at home can enjoy new and exciting flavours with ease,” he said. “While preparing and eating these meals, you can feel like you are travelling the world with me.”",
                    "Zahn Chambers, vice president of Kitchen Swift, says she is pleased to work with Chef Cordero. “He is a talented chef who is committed to providing quality food to all his clients,” she said. “Kitchen Swift now supplies menus, recipes, and ingredients for two people, four people, or six people, including a range of vegetarian selections. Consumers choose the most appropriate package for their needs and have the ingredients delivered to their homes. We expect our sales to increase with the partnership.”",
                    "To find out more, visit the Kitchen Swift Web site at www.kitchenswift.com.au."
                ]
            },
            {
                id: "v4-p7-t1-s11-p2",
                contextType: "P4",
                docType: "REVIEW",
                header: {
                    title: "Sydney Restaurants Review",
                    subtitle: "https://www.sydneyrestaurants.com.au"
                },
                content: [
                    "I recently dined at Enrique’s, one of the new Darius Cordero restaurants in Sydney. It is usually fully booked for dinner, so you may need to call months in advance for a table. We had a wonderful lunch there instead. If you go, be sure to try the bread and desserts—they are baked on-site! It was a worthwhile treat before I flew back to Hong Kong.",
                    "—Merlit Cuan"
                ]
            }
        ],
        questions: [
            {
                id: "v4-p7-t1-q176",
                questionNo: 176,
                text: "What is the purpose of the press release?",
                options: {
                    "A": "To promote a restaurant opening",
                    "B": "To announce a business partnership",
                    "C": "To introduce a travel program",
                    "D": "To congratulate an award recipient"
                },
                correctAnswer: "B",
                classification: "P7_PURPOSE",
                translation: "보도 자료의 목적은 무엇인가?\n(A) 레스토랑 개점을 홍보하려고\n(B) 사업 제휴를 발표하려고\n(C) 여행 프로그램을 소개하려고\n(D) 수상자를 축하하려고",
                explanation: "보도 자료 첫 문장에서 Kitchen Swift와 Chef Darius Cordero가 협력하여 새로운 제품 라인을 선보인다고 발표하고 있습니다."
            },
            {
                id: "v4-p7-t1-q177",
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
                translation: "보도 자료에서 'reflects'라는 단어의 의미와 가장 가까운 것은?",
                explanation: "문맥상 자신의 요리가 문화적 배경을 '보여준다'는 의미이므로 shows가 정답입니다."
            },
            {
                id: "v4-p7-t1-q178",
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
                translation: "Kitchen Swift에 대해 알 수 있는 것은?",
                explanation: "2인, 4인, 6인용 패키지와 채식 메뉴 등 다양한 식사 옵션을 제공한다고 명시되어 있습니다."
            },
            {
                id: "v4-p7-t1-q179",
                questionNo: 179,
                text: "What is most likely true about Ms. Cuan?",
                options: {
                    "A": "She went to Mr. Cordero's restaurant.",
                    "B": "She lives in Sydney.",
                    "C": "She is a colleague of Ms. Chambers.",
                    "D": "She has placed orders from Kitchen Swift."
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                translation: "Cuan 씨에 대해 사실일 가능성이 높은 것은?",
                explanation: "리뷰에서 그녀는 Cordero가 운영하는 식당인 Enrique's에서 식사를 했다고 언급했습니다."
            },
            {
                id: "v4-p7-t1-q180",
                questionNo: 180,
                text: "What did Ms. Cuan suggest about Enrique's in the review?",
                options: {
                    "A": "It has a limited lunch menu",
                    "B": "It is difficult to get a reservation for dinner",
                    "C": "It serves bread from a local bakery",
                    "D": "It has a branch in Hong Kong"
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                translation: "Cuan 씨가 Enrique's에 대해 리뷰에서 암시한 것은?\n(A) 점심 메뉴가 한정되어 있다\n(B) 저녁 식사 예약이 어렵다\n(C) 현지 제과점의 빵을 제공한다\n(D) 홍콩에 지점이 있다",
                explanation: "저녁 시간에는 보통 예약이 꽉 차서(fully booked for dinner) 몇 달 전에 전화해야 할 수도 있다고 언급하여 예약이 어려움을 나타냈습니다."
            }
        ]
    },
    // Questions 181-185 (Double Passage)
    {
        id: "v4-p7-t1-set12",
        vol: 4,
        questionRange: "181-185",
        setType: "Double",
        passages: [
            {
                id: "v4-p7-t1-s12-p1",
                contextType: "P1",
                docType: "email",
                type: "email",
                header: {
                    to: "laura.savard@orbitmail.scot",
                    from: "cboyle@ceoleire.co.uk",
                    date: "25 May",
                    subject: "RE: Some suggestions"
                },
                content: [
                    "Dear Ms. Savard,",
                    "Thank you for your kind offer to either pick up your online order from my shop or to pay extra for air or train transport. Neither arrangement is necessary, as I am happy to deliver your items to you in Stranraer myself. It so happens that my sister and her children live nearby in Kirkcolm. Before seeing them, I will drive my rental car to your house and hand deliver the items to you.",
                    "As you know, my merchandise is 100 percent handcrafted. If any damage occurs in transit, the repair turns into an expensive, time-consuming ordeal. Over the years, I've seen too much damage done by inattentive baggage handlers. My policy is to deliver items personally whenever feasible or hire a ground- or sea-based courier service I trust.",
                    "I look forward to meeting you on 5 June. I expect to arrive at your house no later than 5 p.m.",
                    "Sincerely,",
                    "Conor Boyle",
                    "Ceoleire Classics"
                ]
            },
            {
                id: "v4-p7-t1-s12-p2",
                contextType: "P5",
                docType: "TABLE",
                header: {
                    title: "Northern Ireland Ferry Service",
                    headline: "Passenger Ticket / Booking Confirmation"
                },
                content: [
                    "Date of Issuance: 26 May",
                    "Passenger Name: Conor Boyle",
                    "Departing Belfast: Friday, 5 June, 1:05 PM",
                    "Docking at Cairnryan: Friday, 5 June, 3:20 PM",
                    "Vehicle transport: No",
                    "Adult Standard Class: £55.00",
                    "Please arrive 30 minutes prior to departure."
                ],
                table_data: {
                    headers: ["Item", "Quantity", "Description"],
                    rows: [
                        ["Baggage", "1", "Small suitcase"],
                        ["Instrument cases", "2", "1 mandolin, 1 guitar"]
                    ]
                }
            }
        ],
        questions: [
            {
                id: "v4-p7-t1-q181",
                questionNo: 181,
                text: "What is the purpose of the e-mail?",
                options: {
                    "A": "To finalize a plan",
                    "B": "To accept an invitation",
                    "C": "To promote a new service",
                    "D": "To request feedback on a policy"
                },
                correctAnswer: "A",
                classification: "P7_PURPOSE",
                translation: "이메일의 목적은 무엇인가?",
                explanation: "배송 방식을 확정하고 방문 시간을 알리며 최종 계획을 마무리지으려 하고 있습니다."
            },
            {
                id: "v4-p7-t1-q182",
                questionNo: 182,
                text: "Why will Mr. Boyle travel from Stranraer to Kirkcolm?",
                options: {
                    "A": "To make a delivery",
                    "B": "To attend a meeting",
                    "C": "To drop off a rental car",
                    "D": "To visit with family members"
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                translation: "Boyle 씨가 Stranraer에서 Kirkcolm으로 가는 이유는 무엇인가?",
                explanation: "Kirkcolm 근처에 누이와 조카들이 살고 있다고 언급한 내용을 통해 가족 방문을 위함임을 알 수 있습니다."
            },
            {
                id: "v4-p7-t1-q183",
                questionNo: 183,
                text: "What is indicated in the e-mail?",
                options: {
                    "A": "Mr. Boyle's sister is a cofounder of Ceoleire Classics.",
                    "B": "Mr. Boyle has been disappointed by air- and train-freight companies.",
                    "C": "Ms. Savard has purchased items from Mr. Boyle in the past.",
                    "D": "Ms. Savard prefers a specific brand of luggage."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                translation: "이메일에서 알 수 있는 것은?",
                explanation: "수하물 취급자들에 의한 파손 사례를 언급하며 항공/철도 운송에 대한 불신을 드러내고 있습니다."
            },
            {
                id: "v4-p7-t1-q184",
                questionNo: 184,
                text: "What is most likely true about Ms. Savard?",
                options: {
                    "A": "She often travels for her job.",
                    "B": "She paid extra to have items hand delivered.",
                    "C": "She recently purchased musical instruments.",
                    "D": "She will meet Mr. Boyle at the rental car office."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                translation: "Savard 씨에 대해 사실일 가능성이 높은 것은?",
                explanation: "Boyle 씨의 짐 목록에 악기 케이스들이 포함되어 있으므로 구매자가 악기를 샀음을 유추할 수 있습니다."
            },
            {
                id: "v4-p7-t1-q185",
                questionNo: 185,
                text: "How is Mr. Boyle traveling to Cairnryan on June 5?",
                options: {
                    "A": "By car",
                    "B": "By train",
                    "C": "By boat",
                    "D": "By plane"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                translation: "6월 5일 Boyle 씨는 Cairnryan으로 어떻게 이동하는가?",
                explanation: "페리 티켓을 이용하므로 배(boat)로 이동합니다."
            }
        ]
    },
    // Questions 186-190 (Triple Passage)
    {
        id: "v4-p7-t1-set13",
        vol: 4,
        questionRange: "186-190",
        setType: "Triple",
        passages: [
            {
                id: "v4-p7-t1-s13-p1",
                contextType: "P4",
                docType: "advertisement",
                type: "advertisement",
                header: {
                    title: "Train to Achieve (TTA)—Our classes prepare you to succeed!"
                },
                content: [
                    "Profiled in the latest Business Directions Nigeria newsletter, Train to Achieve (TTA) is one of the most innovative training providers in West Africa. By offering our classes entirely in online format, we bring the classroom to your home. All classes include individualized instruction and are taught by recognized professionals in their respective fields. Upon successful completion of a class, you will receive an official Certificate of Training, a valuable addition to any résumé. For a complete list of class fees and schedules, visit our Web site at www.traintoachieve.org.ng. The following are some of our most popular classes.",
                    "Introduction to Social Media Marketing (TTA1504): Taught by marketing consultant Marcus Akpan, the class equips you with the know-how to promote your business online.",
                    "Become a Successful Freelance Writer (TTA3283): Business writer Brenda Akande gives expert guidance on how to hone your writing skills and market your services.",
                    "Starting an Internet Radio Station (TTA7629): Online radio host Natalie Kabiru shows you how to appeal to your target market and gives practical tips for setting up your broadcast service.",
                    "Basics of Graphic Design (TTA7633): Veteran graphic designer Doug Umaru helps you acquire the basic skills needed to start a graphic design business."
                ]
            },
            {
                id: "v4-p7-t1-s13-p2",
                contextType: "P7",
                docType: "notice",
                header: {
                    title: "Discussion forum for students enrolled in Train to Achieve Class TTA1504",
                    subtitle: "Posted on: 21 May, 9:41 A.M.    Posted by: Joseph Egbe    Subject: Presentations"
                },
                content: [
                    "Viewing the list of students enrolled in this class, I remembered chatting with some of you on the forum for January's poster design class. I look forward to sharing our learning experiences again for this class. Yesterday I was the second student to meet with Mr. Akpan for an individual videoconference about my business. I own a food truck from which I sell baked goods, and when I shared with Mr. Akpan the outline for my Web site, he suggested that I add a section with vivid images of all my baked goods. It was helpful advice."
                ]
            },
            {
                id: "v4-p7-t1-s13-p3",
                contextType: "P3",
                docType: "NOTICE",
                header: {
                    title: "Egbe's Bakery",
                    headline: "Unique baked-in flavours in every bite!"
                },
                content: [
                    "• Section 1: Explore our menu and price list",
                    "• Section 2: Browse photos of our delicious treats",
                    "• Section 3: Learn about our catering services",
                    "• Section 4: View lists of ingredients"
                ]
            }
        ],
        questions: [
            {
                id: "v4-p7-t1-q186",
                questionNo: 186,
                text: "What is indicated about TTA?",
                options: {
                    "A": "It was founded by a graphic designer.",
                    "B": "It publishes its own online newsletter.",
                    "C": "It offers classes led by industry professionals.",
                    "D": "It has classroom facilities in cities across West Africa."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                translation: "TTA에 대해 알 수 있는 것은?",
                explanation: "전문가(recognized professionals)들이 가르친다는 언급이 정답의 근거입니다."
            },
            {
                id: "v4-p7-t1-q187",
                questionNo: 187,
                text: "According to the advertisement, what does TTA provide to students who finish a class?",
                options: {
                    "A": "A résumé-writing workshop",
                    "B": "A discount on a follow-up class",
                    "C": "A list of current job postings",
                    "D": "A certification document"
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                translation: "광고에 따르면, 수업을 마친 학생들에게 TTA가 제공하는 것은?",
                explanation: "공식 수료증(Certificate of Training)을 제공하다고 명시되어 있습니다."
            },
            {
                id: "v4-p7-t1-q188",
                questionNo: 188,
                text: "What is most likely true about Mr. Egbe?",
                options: {
                    "A": "He helped design a discussion forum.",
                    "B": "He has previously taken a TTA class.",
                    "C": "He develops videoconferencing software.",
                    "D": "He recently sold a bakery food truck."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                translation: "Egbe 씨에 대해 사실일 가능성이 가장 높은 것은?",
                explanation: "1월 포스터 디자인 수업을 들었음을 언급하는 내용을 통해 알 수 있습니다."
            },
            {
                id: "v4-p7-t1-q189",
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
                translation: "Egbe 씨가 현재 수강 중인 수업은?",
                explanation: "게시판 번호 TTA1504가 가리키는 수업은 소셜 미디어 마케팅입니다."
            },
            {
                id: "v4-p7-t1-q190",
                questionNo: 190,
                text: "What section did Mr. Egbe most likely add to the outline after speaking with Mr. Akpan?",
                options: {
                    "A": "Section 1",
                    "B": "Section 2",
                    "C": "Section 3",
                    "D": "Section 4"
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                translation: "Akpan 씨와 상담 후 Egbe 씨가 아웃라인에 추가했을 가능성이 높은 섹션은?",
                explanation: "이미지(vivid images) 추가 조언을 따랐으므로 사진 둘러보기 섹션인 Section 2를 추가했을 것입니다."
            }
        ]
    },
    // Questions 191-195 (Triple Passage)
    {
        id: "v4-p7-t1-set14",
        vol: 4,
        questionRange: "191-195",
        setType: "Triple",
        passages: [
            {
                id: "v4-p7-t1-s14-p1",
                contextType: "P3",
                docType: "ARTICLE",
                header: {
                    headline: "Caribbean Flavours Abound",
                    author: "Rebecca Roats",
                    date: "NOTTINGHAM (1 August)",
                    columns: 2
                },
                content: [
                    "Orange Bay Kitchen has been serving up an infusion of Jamaican flavours in a laid-back Caribbean atmosphere for six months now. Managed by Keron Deslandes, the 150-seat restaurant is an aromatic jewel amid the bustling shops and eateries in Wester Square. The servers are always happy to help diners select from the variety of delights on the extensive menu, which includes curried goat, oxtail soup, and red snapper. The restaurant is most famous for its jerk chicken. Marinated for 24 hours prior to grilling and served with sides of stewed cabbage and coconut rice, the dish is a good deal at £12.",
                    "If you stop in on any Friday night between 7 and 11 P.M., you will enjoy live reggae music."
                ]
            },
            {
                id: "v4-p7-t1-s14-p2",
                contextType: "P4",
                docType: "review",
                content: `https://www.dinerreviews.co.uk/orangebaykitchen

Posted on 22 August by Tamika Peterkin, tpeterkin@sunmail.co.uk

Orange Bay Kitchen: 2/5 Stars

After reading a glowing article about Orange Bay Kitchen by Rebecca Roats, I was eager to give this place a try. My husband and I arrived there at 7 P.M. yesterday, keen to enjoy live music with our dinner. Unfortunately, the band's performance that night had been cancelled. Undeterred, we stayed and both ordered the jerk chicken. While the chicken's smoky flavour was outstanding, the stewed cabbage was lacking in flavour. Also, the portion size was smaller than we had anticipated, so we ordered another appetiser to avoid going home hungry. The head chef came out to apologise and was extremely nice, but we will probably not go back anytime soon.`
            },
            {
                id: "v4-p7-t1-s14-p3",
                contextType: "P1",
                docType: "email",
                content: `To: tpeterkin@sunmail.co.uk
From: vsmith@orangebaykitchen.co.uk
Date: 24 August
Subject: Your review

Dear Ms. Peterkin,

Thank you for visiting Orange Bay Kitchen and leaving a review. Our manager, Keron Deslandes, told me more about your visit and our failure to live up to your expectations that evening. Please accept the attached £20 gift certificate; I do hope that you will give us another try.

During your visit, our band had an equipment malfunction, which is what led to the last-minute cancellation. However, the band will be back performing weekly beginning in September. Also, I want you to know that Head Chef Adio Brown has changed the spices he uses in the stewed cabbage. I am sure you will find them delightful.

Sincerely,
Vea Smith, Owner
Orange Bay Kitchen`
            }
        ],
        questions: [
            {
                id: "v4-p7-t1-q191",
                questionNo: 191,
                text: "What does the article mention about Orange Bay Kitchen?",
                options: {
                    "A": "It is currently hiring servers.",
                    "B": "It is located on a quiet street.",
                    "C": "It has another location in Jamaica.",
                    "D": "It opened six months ago."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                translation: "기사에서 Orange Bay Kitchen에 대해 언급된 것은?",
                explanation: "기사 서두에서 운영한 지 6개월이 되었다고 명시되어 있습니다."
            },
            {
                id: "v4-p7-t1-q192",
                questionNo: 192,
                text: "According to the article, what is the most popular menu item at Orange Bay Kitchen?",
                options: {
                    "A": "Red snapper",
                    "B": "Oxtail soup",
                    "C": "Jerk chicken",
                    "D": "Curried goat"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                translation: "기사에 따르면, 식당에서 가장 인기 있는 메뉴는?",
                explanation: "jerk chicken으로 가장 유명하다고 설명되어 있습니다."
            },
            {
                id: "v4-p7-t1-q193",
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
                translation: "Peterkin 씨의 방문에 대해 알 수 있는 것은?",
                explanation: "공연을 보러 방문한 금요일이었음을 알 수 있습니다."
            },
            {
                id: "v4-p7-t1-q194",
                questionNo: 194,
                text: "What is a purpose of the e-mail?",
                options: {
                    "A": "To answer a question",
                    "B": "To offer an apology",
                    "C": "To ask for feedback",
                    "D": "To confirm a reservation"
                },
                correctAnswer: "B",
                classification: "P7_PURPOSE",
                translation: "이메일의 목적은 무엇인가?",
                explanation: "기대에 미치지 못한 경험에 대해 사과하고자 작성되었습니다."
            },
            {
                id: "v4-p7-t1-q195",
                questionNo: 195,
                text: "Whom did Ms. Peterkin meet at Orange Bay Kitchen?",
                options: {
                    "A": "Ms. Roats",
                    "B": "Mr. Deslandes",
                    "C": "Mr. Brown",
                    "D": "Ms. Smith"
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                translation: "Peterkin 씨가 식당에서 만난 사람은?",
                explanation: "헤드 셰프인 Adio Brown을 만났음이 유추 가능합니다."
            }
        ]
    },
    // Questions 196-200 (Triple Passage)
    {
        id: "v4-p7-t1-set15",
        vol: 4,
        questionRange: "196-200",
        setType: "Triple",
        passages: [
            {
                id: "v4-p7-t1-s15-p1",
                contextType: "P5",
                docType: "TABLE",
                header: {
                    title: "Orbys Distributors - Invoice",
                    headline: "Billing Details"
                },
                content: [
                    "Date: June 10",
                    "Client: Green Canyon",
                    "Account: 4352-0"
                ],
                table_data: {
                    headers: ["Item", "Price"],
                    rows: [
                        ["Garden soil, 33 cubic meters", "$1,170.00"],
                        ["Crushed gravel, 30 metric tons", "$1,710.00"],
                        ["Decorative stone, 20 metric tons", "$1,140.00"],
                        ["70 paving stones, .6 x .6 meters", "$630.00"],
                        ["Discount (10%)", "-$465.00"],
                        ["Delivery charge", "$350.00"],
                        ["**Grand Total**", "**$4,535.00**"]
                    ]
                }
            },
            {
                id: "v4-p7-t1-s15-p2",
                contextType: "P2",
                docType: "notice",
                title: "Orbys Distributors - Official Notice",
                content: `To our valued customers:
Our current invoicing system has been in use since Orbys Distributors was founded over twenty years ago. As a much-needed upgrade, we are switching to electronic invoicing. Starting August 1, invoices will be generated automatically each month and will be sent to the e-mail address associated with your company’s account.

Rest assured that our long-standing incentives remain in place:

• A 10% discount for orders of more than $4,000
• A 20% discount for charitable organizations
• Free deliveries to locations within 5 miles of one of our supply centers
• Free samples for members of our Frequent Buyer Club

More information about our transition to electronic invoicing is available on our Web site. Thank you for your support. Orbys Distributors appreciates your business.`
            },
            {
                id: "v4-p7-t1-s15-p3",
                contextType: "P1",
                docType: "email",
                content: `To: Mary Peterson, Billing Department
From: Tanvir Singh, Account Manager
Date: September 12
Subject: Account 1012-4

Hello Mary,

I received a query today from William Tesoriero at Tesoriero Remodeling. His monthly invoice for August never arrived.

As you know, Mr. Tesoriero was one of our very first customers. Since we first opened for business, he has made purchases from us on a regular basis. He is also a member of the Frequent Buyer Club. This is a customer we absolutely do not want to lose. I explained to him that the rollout of our electronic invoicing system did not go as smoothly as we had hoped and promised that this would not happen again.

I would appreciate it if you could please investigate the problem without delay and send the invoice for August to Mr. Tesoriero.

Tanvir`
            }
        ],
        questions: [
            {
                id: "v4-p7-t1-q196",
                questionNo: 196,
                text: "What does the invoice suggest about Green Canyon?",
                options: {
                    "A": "It does landscaping projects.",
                    "B": "It designs highways.",
                    "C": "It repairs old houses.",
                    "D": "It operates a farm."
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                translation: "송장에서 Green Canyon에 대해 알 수 있는 것은?",
                explanation: "Garden soil, Decorative stone 등을 구매하므로 조경 관련 업체임을 알 수 있습니다."
            },
            {
                id: "v4-p7-t1-q197",
                questionNo: 197,
                text: "Why most likely did Green Canyon receive a discount on its order dated June 10?",
                options: {
                    "A": "It is a charitable organization.",
                    "B": "It belongs to the Frequent Buyer Club.",
                    "C": "It spent more than $4,000 on merchandise.",
                    "D": "It is located near an Orbys Distributors supply center."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                translation: "Green Canyon이 할인을 받은 이유는?",
                explanation: "합계 금액이 $4,000을 초과($4,650)했기 때문입니다."
            },
            {
                id: "v4-p7-t1-q198",
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
                translation: "공지에 따르면 Orbys Distributors에서 무엇이 바뀌는가?",
                explanation: "송장 시스템(invoicing system)을 전자식으로 교체한다고 했습니다."
            },
            {
                id: "v4-p7-t1-q199",
                questionNo: 199,
                text: "What is suggested about Mr. Tesoriero?",
                options: {
                    "A": "He asked to meet with Mr. Singh.",
                    "B": "He is interested in employment at Orbys Distributors.",
                    "C": "He recently placed an order for some construction machinery.",
                    "D": "He has been a customer of Orbys Distributors for about twenty years."
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                translation: "Tesoriero 씨에 대해 알 수 있는 것은?",
                explanation: "회사가 설립된 20여 년 전부터 고객이었다는 사실을 알 수 있습니다."
            },
            {
                id: "v4-p7-t1-q200",
                questionNo: 200,
                text: "What does Mr. Singh ask Ms. Peterson to do?",
                options: {
                    "A": "Make a bill payment",
                    "B": "Solve a problem",
                    "C": "Confirm an order",
                    "D": "Update an account number"
                },
                correctAnswer: "B",
                classification: "P7_PURPOSE",
                translation: "Singh 씨는 Peterson 씨에게 무엇을 요청하는가?",
                explanation: "청구서 지연 문제를 신속히 조사하고 해결할 것을 요청했습니다."
            }
        ]
    }
];
