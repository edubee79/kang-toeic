import { PracticeSet } from './rc_part7_practice';

export const rcPart7Test10: PracticeSet[] = [
    // Questions 176-180: Double Passage (Webinar description + E-mail)
    {
        id: 'test10-176-180',
        type: 'Double',
        passages: [
            {
                id: 'p176-1',
                type: 'WEBINAR DESCRIPTION',
                title: 'Introduction to Project Management',
                content: `Online Webinar
18 January, 9 A.M.–2 P.M.
Presenter: Shrijana Patel
Cost: €45
(Register by 10 January and receive a 10% discount!)

This live webinar offers attendees a better understanding of how to improve the role that project management plays in their organizations. The presentation will provide the basics of managing projects and workers. Participants will learn strategies and best practices to effectively oversee their projects and foster buy-in from key players.

Participants will explore a simple step-by-step process for managing projects and learn how to use tools and documents such as scope statements and communication plans. The presenter will also cover topics such as developing a project's business case and facilitating productive team meetings.`
            },
            {
                id: 'p176-2',
                type: 'E-MAIL',
                content: `To: Maya Liu
From: Leonard Chung
Subject: Webinar
Date: 2 January

Dear Ms. Liu:

Thank you for sending me the webinar announcement. As a novice supervisor, I need to get all the training I can, but I'm not sure whether I will be able to take advantage of this particular offering. I am scheduled to present a detailed project update at my company's quarterly division meeting on the same day, and I don't think anyone else on the team would be able to take my place.

Do you know whether the webinar will be recorded or whether there will be a similar webinar at a later date? I have no schedule conflicts after 29 January.

Leonard Chung`
            }
        ],
        questions: [
            {
                id: '176',
                text: 'What is indicated about the webinar?',
                options: [
                    '(A) It includes a session on preparing for job interviews.',
                    '(B) It will show participants how to use specific tools.',
                    '(C) There is no charge for participants.',
                    '(D) Registration closes on January 10.'
                ],
                answer: 'B',
                explanation: '웨비나 설명에서 참가자들이 범위 명세서 및 커뮤니케이션 계획과 같은 도구와 문서를 사용하는 방법을 배울 것이라고 명시되어 있습니다. 정답은 (B) "참가자에게 특정 도구 사용 방법을 보여준다"입니다.'
            },
            {
                id: '177',
                text: 'In the webinar description, the word "cover" in paragraph 2, line 3, is closest in meaning to',
                options: [
                    '(A) protect',
                    '(B) spread',
                    '(C) ask for',
                    '(D) talk about'
                ],
                answer: 'D',
                explanation: '"cover"는 문맥상 "다루다", "논의하다"의 의미로 사용되었습니다. 정답은 (D) "talk about"입니다.'
            },
            {
                id: '178',
                text: 'What is one purpose of the e-mail?',
                options: [
                    '(A) To explain a scheduling conflict',
                    '(B) To request a deadline extension',
                    '(C) To apologize for arriving late to an event',
                    '(D) To ask for help in preparing a presentation'
                ],
                answer: 'A',
                explanation: 'Mr. Chung은 같은 날 회사의 분기별 회의에서 발표를 해야 하므로 웨비나에 참석할 수 없다고 설명했습니다. 정답은 (A) "일정 충돌 설명"입니다.'
            },
            {
                id: '179',
                text: 'What is suggested about Mr. Chung?',
                options: [
                    '(A) He plans to record his presentation.',
                    '(B) He often trains new project managers.',
                    '(C) He attends webinars on a regular basis.',
                    '(D) He has relatively little experience as a supervisor.'
                ],
                answer: 'D',
                explanation: '이메일에서 Mr. Chung은 자신을 초보 감독자(novice supervisor)라고 언급했습니다. 정답은 (D) "감독자로서 경험이 상대적으로 적다"입니다.'
            },
            {
                id: '180',
                text: 'On what date is Mr. Chung scheduled to give a presentation?',
                options: [
                    '(A) January 2',
                    '(B) January 10',
                    '(C) January 18',
                    '(D) January 29'
                ],
                answer: 'C',
                explanation: 'Mr. Chung은 웨비나와 같은 날에 발표를 해야 한다고 언급했으며, 웨비나는 1월 18일입니다. 정답은 (C) "1월 18일"입니다.'
            }
        ]
    },
    // Questions 181-185: Double Passage (Article + Review)
    {
        id: 'test10-181-185',
        type: 'Double',
        passages: [
            {
                id: 'p181-1',
                type: 'ARTICLE',
                content: `GALWAY (4 March)—Adelle Rosier, a third-generation soap maker, opened her shop in Galway eight years ago. Nestled behind Eglinton Gourmet Market on Raven Terrace, her business, Rosier and Finch, is booming.

Ms. Rosier credits the success to her commitment to lifelong learning. "Yes, my handcrafted soaps, shampoos, and lotions are luxurious," she said. "But there are a lot of high-quality skin-care products out there. So after learning the trade from my family, I have increased my sales knowledge by taking online courses in business-to-business (B2B) marketing."

Ms. Rosier adds that those courses built her confidence in selling her products directly to hotels. "Thanks to what I learned in my B2B strategies courses, I managed to persuade a number of boutique hotels in Europe to try my products." And so Rosier and Finch skin-care products are available in guest rooms at, for instance, the Bruadair Hotel in Galway, the Florinda Grand in Lisbon, Portugal, and the Zerra Inn in Reykjavík, Iceland.

Ms. Rosier further points out that many of her customers first learn of her products during a hotel stay. Afterward, they visit the shop in person or go online to purchase the items for themselves.

Rosier and Finch is located at 12 Raven Terrace and can be found online at www.rosierandfinch.co.ie.`
            },
            {
                id: 'p181-2',
                type: 'REVIEW',
                title: 'https://www.florindagrand.pt/en/guest_reviews',
                content: `I had to arrange a last-minute business trip to my company's Portugal office, and the usual hotel I book was completely full. Based on some online recommendations, I decided to stay at Florinda Grand. While this charming hotel is much smaller than the usual places I stay, it has every comfort one would want during a business trip. In addition to a tastefully decorated and comfortable room, there were gourmet treats on my pillowcase and the finest soap, shampoo, and other toiletries available for me to enjoy. My only regret is that I was in Lisbon for just three days. Next time I visit the Lisbon office, I will stay longer and book a room at the Florinda Grand.

—posted by Ashton Wu, 7 June`
            }
        ],
        questions: [
            {
                id: '181',
                text: 'What is the purpose of the article?',
                options: [
                    '(A) To provide annual hotel ratings',
                    '(B) To announce the opening of a store',
                    '(C) To profile a small-business owner',
                    '(D) To discuss online shopping trends'
                ],
                answer: 'C',
                explanation: '기사는 Adelle Rosier라는 비누 제조업자와 그녀의 사업 성공에 대해 다루고 있습니다. 정답은 (C) "소규모 사업주 프로필"입니다.'
            },
            {
                id: '182',
                text: 'How did Ms. Rosier improve her marketing skills?',
                options: [
                    '(A) By visiting family members overseas',
                    '(B) By joining a professional association',
                    '(C) By working in the hotel industry',
                    '(D) By participating in online classes'
                ],
                answer: 'D',
                explanation: '기사에서 Ms. Rosier는 B2B 마케팅에 대한 온라인 과정을 수강하여 판매 지식을 늘렸다고 언급했습니다. 정답은 (D) "온라인 수업 참여"입니다.'
            },
            {
                id: '183',
                text: 'What is stated about Rosier and Finch?',
                options: [
                    '(A) It sells its products to other businesses.',
                    '(B) It has shops in cities around the world.',
                    '(C) It is redesigning its e-commerce site.',
                    '(D) It offers courses on soapmaking.'
                ],
                answer: 'A',
                explanation: '기사에서 Ms. Rosier가 유럽의 부티크 호텔들에 제품을 판매하도록 설득했다고 언급했습니다. 정답은 (A) "다른 기업에 제품 판매"입니다.'
            },
            {
                id: '184',
                text: 'What is suggested about Mr. Wu?',
                options: [
                    '(A) He manages Eglinton Gourmet Market.',
                    '(B) He purchased Rosier and Finch products online.',
                    '(C) He met Ms. Rosier on a business trip.',
                    '(D) He likes Rosier and Finch products.'
                ],
                answer: 'D',
                explanation: '리뷰에서 Mr. Wu는 Florinda Grand 호텔의 비누, 샴푸 및 기타 세면도구가 최고급이었다고 언급했으며, 이는 Rosier and Finch 제품입니다. 정답은 (D) "Rosier and Finch 제품을 좋아한다"입니다.'
            },
            {
                id: '185',
                text: 'According to the review, what was Mr. Wu not pleased about?',
                options: [
                    '(A) The length of his trip',
                    '(B) The decorations in the room',
                    '(C) The comfort of the pillows',
                    '(D) The size of the hotel'
                ],
                answer: 'A',
                explanation: '리뷰에서 Mr. Wu는 리스본에 단 3일만 있었던 것이 유일한 후회라고 언급했습니다. 정답은 (A) "여행 기간"입니다.'
            }
        ]
    },
    // Questions 186-190: Triple Passage (Sales report + Memo + Article)
    {
        id: 'test10-186-190',
        type: 'Triple',
        passages: [
            {
                id: 'p186-1',
                type: 'SALES REPORT',
                title: 'Margot\'s House of Ice Cream - Flavor Purchases by Percentage of Sales (July)',
                content: `Flavor | Percent
--- | ---
Chocolate | 22
Vanilla | 18
Strawberry | 11
Cookies and cream | 8
Butter pecan | 8
Mint chocolate chip | 7
All others | 26`
            },
            {
                id: 'p186-2',
                type: 'MEMO',
                content: `To: All Store Managers
From: June Willcox, CEO, Margot's House of Ice Cream
Subject: New Stores
Date: October 5

Margot's House of Ice Cream is proud to welcome the following new stores.

Store Number | Location | Opening Date | Manager
--- | --- | --- | ---
66 | Framingham, Massachusetts, United States | September 1 | Inga Slavin
67 | Appleton, Wisconsin, United States | September 7 | Zheng Tong
68 | Wollongong, New South Wales, Australia | September 14 | Geoffrey Pratt
69 | Rotorua, New Zealand | September 15 | Kehinde Ilogu
70 | Greater Sudbury, Ontario, Canada | September 29 | Hallie Strafford

For the next six months, we will be supporting these stores with advertisements in their local media markets.

In December, we plan to open stores in Italy and Switzerland. Demand for our quality product is higher than ever, our market share is increasing, and we are not finished expanding! Stay tuned for more information!`
            },
            {
                id: 'p186-3',
                type: 'ARTICLE',
                title: 'Popular Ice Cream Purveyor Comes to New Zealand',
                content: `By Ysai Mendez

ROTORUA (2 November)—Residents of Rotorua have been flocking to Cargill Street, where Margot's House of Ice Cream has opened its first store in New Zealand.

"I don't know what their secret is, but their ice cream really is something special," said Jeremy Frank, a schoolteacher who was enjoying ice cream cones with his family on a recent afternoon. "We've been here several times already since they opened. I think we'll be regulars."

"I love strawberry, and their strawberry is the best I ever had," added his daughter, Olivia Frank, age 10.

Margot's House of Ice Cream was founded five years ago in San Francisco by Margot Summers, a former chemistry major. Its ice cream contains at least 11 percent milk fat. Milk used in production, according to company CEO June Willcox, is sourced locally or regionally whenever possible.

Kehinde Ilogu, the manager of the Rotorua store, says that the number of visitors has been rising steadily.

"We plan to keep the momentum going by having special events once a month," he said. "Next up is the strawberry festival. New Zealand's strawberry season will be getting started. In addition to our superb ice cream, we'll offer strawberries dipped in chocolate, strawberry cupcakes, and strawberry milkshakes. We look forward to a great future in Rotorua."`
            }
        ],
        questions: [
            {
                id: '186',
                text: 'According to the sales report, what flavor of ice cream is purchased at the same rate as Butter pecan?',
                options: [
                    '(A) Chocolate',
                    '(B) Vanilla',
                    '(C) Cookies and cream',
                    '(D) Mint chocolate chip'
                ],
                answer: 'C',
                explanation: '판매 보고서에서 Butter pecan과 Cookies and cream 모두 8%입니다. 정답은 (C) "Cookies and cream"입니다.'
            },
            {
                id: '187',
                text: 'What is true about the products listed in the sales report?',
                options: [
                    '(A) They contain at least 11 percent milk fat.',
                    '(B) They are made with artificial flavors.',
                    '(C) They will increase in price soon.',
                    '(D) They are sold mainly in San Francisco.'
                ],
                answer: 'A',
                explanation: '기사에서 Margot\'s House of Ice Cream의 아이스크림은 최소 11% 유지방을 함유한다고 명시되어 있습니다. 정답은 (A)입니다.'
            },
            {
                id: '188',
                text: 'What is indicated in the memo about the company\'s new managers?',
                options: [
                    '(A) They were trained in Italy and Switzerland.',
                    '(B) They will receive advertising support for six months.',
                    '(C) They expect their stores to become profitable in December.',
                    '(D) They offered special promotions on opening day.'
                ],
                answer: 'B',
                explanation: '메모에서 향후 6개월 동안 이러한 매장을 지역 미디어 시장의 광고로 지원할 것이라고 명시했습니다. 정답은 (B) "6개월 동안 광고 지원을 받을 것"입니다.'
            },
            {
                id: '189',
                text: 'What will soon happen at store 69?',
                options: [
                    '(A) More ice cream flavors will be added to the menu.',
                    '(B) A child\'s birthday will be celebrated.',
                    '(C) An assistant manager will be hired.',
                    '(D) A range of special treats will be sold.'
                ],
                answer: 'D',
                explanation: '메모에서 매장 69는 Rotorua이며, 기사에서 Rotorua 매장의 Kehinde Ilogu가 딸기 축제를 계획하고 있다고 언급했습니다. 초콜릿에 담근 딸기, 딸기 컵케이크, 딸기 밀크셰이크를 제공할 것입니다. 정답은 (D) "다양한 특별 간식 판매"입니다.'
            },
            {
                id: '190',
                text: 'Who is most likely to enjoy the strawberry festival?',
                options: [
                    '(A) Mr. Mendez',
                    '(B) Ms. Willcox',
                    '(C) Ms. Frank',
                    '(D) Ms. Summers'
                ],
                answer: 'C',
                explanation: '기사에서 Olivia Frank(10세)가 딸기를 좋아하며 Margot\'s House의 딸기가 최고라고 언급했습니다. 정답은 (C) "Ms. Frank"(Olivia Frank)입니다.'
            }
        ]
    },
    // Questions 191-195: Triple Passage (E-mail + E-mail + Memo)
    {
        id: 'test10-191-195',
        type: 'Triple',
        passages: [
            {
                id: 'p191-1',
                type: 'E-MAIL',
                content: `To: Emi Tokuda <etokuda@paterradepartmentstores.com>
From: Paul Soderman <p.soderman@galahadindustrialmachinery.com>
Date: January 25
Subject: Our discussion

Dear Ms. Tokuda,

I'm writing to confirm the details of our telephone conversation earlier today.

As we discussed, Galahad Industrial Machinery will install and maintain one self-service checkout kiosk in each of the four locations operated by Paterra Department Stores in Haddonfield. The installation charge for each kiosk will be $2,000 per unit. Installation will be scheduled at a mutually agreed-upon day and time.

Our maintenance fee, covering all four kiosks, is $120 per month. Our technicians will be available 24 hours a day, 7 days a week, to service the kiosks. All equipment will meet or exceed international quality standards, and all our work is guaranteed.

A formal written agreement will be sent to you by registered mail. We look forward to working with you.

Sincerely,

Paul Soderman, Managing Director
Galahad Industrial Machinery`
            },
            {
                id: 'p191-2',
                type: 'E-MAIL',
                content: `To: Paul Soderman <p.soderman@galahadindustrialmachinery.com>
From: Emi Tokuda <etokuda@paterradepartmentstores.com>
Date: April 2
Subject: Equipment removal and reinstallation

Dear Mr. Soderman,

Please be advised that we have decided to close our store at 1506 Maple Street. We plan to transfer the inventory and all equipment to our new location at 3300 Town Square Plaza. The transfer is planned for mid-June, but we have not yet set a date.

I will contact you next month to confirm the date and arrange a convenient time for your work crew to install the self-service kiosk. I understand that, per our agreement dated January 25, your charge for the reinstallation will be the same as for the initial installation at the Maple Street store.

Yours truly,

Emi Tokuda, Managing Director
Paterra Department Stores`
            },
            {
                id: 'p191-3',
                type: 'MEMO',
                content: `To: All Paterra Staff
From: Eleanor Bianchi, Branch Manager
Date: June 5
Re: Move update

Thanks to your hard work, our new store in the Town Square Plaza is on track to open on June 15. One of the problems with the store we are currently working out of is that it is not on a bus line. By contrast, the location we will be moving to is served by bus number 689, so we expect to have a larger number of customers at that location. We are only waiting for the last of our display shelves to be delivered from our warehouse so that we can finish the display in the gardening department.

In appreciation of your efforts, I've brought pastries from Aniqa's Bakery. I've put these treats on the break-room counter. Enjoy!`
            }
        ],
        questions: [
            {
                id: '191',
                text: 'In the first e-mail, what is stated about Galahad Industrial Machinery?',
                options: [
                    '(A) It completes repairs within one day.',
                    '(B) It is available to do maintenance service at all times.',
                    '(C) It has technicians with international work experience.',
                    '(D) It has an office in Haddonfield.'
                ],
                answer: 'B',
                explanation: '첫 번째 이메일에서 기술자들이 하루 24시간, 주 7일 키오스크 서비스를 제공할 수 있다고 명시되어 있습니다. 정답은 (B) "항상 유지보수 서비스 제공 가능"입니다.'
            },
            {
                id: '192',
                text: 'What is true about the reinstallation of the self-service kiosk?',
                options: [
                    '(A) It will be done personally by Mr. Soderman.',
                    '(B) It will cost Paterra Department Stores $2,000.',
                    '(C) It will cause a change in the monthly maintenance fee.',
                    '(D) It will require a new agreement to be signed.'
                ],
                answer: 'B',
                explanation: '두 번째 이메일에서 Ms. Tokuda는 1월 25일 계약에 따라 재설치 비용이 초기 설치와 동일할 것이라고 언급했으며, 첫 번째 이메일에서 각 키오스크의 설치 비용은 $2,000입니다. 정답은 (B) "$2,000 비용"입니다.'
            },
            {
                id: '193',
                text: 'When will Ms. Tokuda discuss her moving plans with Mr. Soderman?',
                options: [
                    '(A) In March',
                    '(B) In April',
                    '(C) In May',
                    '(D) In June'
                ],
                answer: 'C',
                explanation: '두 번째 이메일(4월 2일)에서 Ms. Tokuda는 다음 달(5월)에 연락하여 날짜를 확인하고 편리한 시간을 정하겠다고 언급했습니다. 정답은 (C) "5월"입니다.'
            },
            {
                id: '194',
                text: 'What is suggested about the Paterra store at 1506 Maple Street?',
                options: [
                    '(A) It is not accessible by bus.',
                    '(B) It will be renovated and reopened.',
                    '(C) It is far from the warehouse.',
                    '(D) It contains a bakery section.'
                ],
                answer: 'A',
                explanation: '메모에서 현재 작업 중인 매장(Maple Street)의 문제 중 하나는 버스 노선에 있지 않다는 것이라고 언급했습니다. 정답은 (A) "버스로 접근 불가"입니다.'
            },
            {
                id: '195',
                text: 'According to the memo, what must still be done at the new Paterra store location?',
                options: [
                    '(A) Some products must be priced.',
                    '(B) Some areas must be painted.',
                    '(C) Some doors must be replaced.',
                    '(D) Some shelves must be delivered.'
                ],
                answer: 'D',
                explanation: '메모에서 창고에서 마지막 진열 선반이 배송되기를 기다리고 있다고 언급했습니다. 정답은 (D) "일부 선반 배송 필요"입니다.'
            }
        ]
    },
    // Questions 196-200: Triple Passage (Article + Invitation + E-mail)
    {
        id: 'test10-196-200',
        type: 'Triple',
        passages: [
            {
                id: 'p196-1',
                type: 'ARTICLE',
                title: 'Survey: Consumers Prefer Physical Stores',
                content: `A recent consumer survey has shown that 33% of respondents prefer to touch the products they intend to purchase. Moreover, 61% of those surveyed said they are likely to spend more when shopping at a brick-and-mortar store rather than at an online store.

These data, backed up by other consumer preference studies, are causing many merchants who generate all their revenue from online sales to open physical stores as a supplement to their online presence.

The advantage of a physical space is that it helps retail owners build brand loyalty. "In terms of convenience, nothing beats online," says Marlene Fitzroy, who owns Toddles, a children's store in Shelburn, and an online site, toddles.com. "But a physical space fosters a sense of community that keeps local customers coming back and attracts new ones."

Ms. Fitzroy, a frequent speaker at local business events, is not only a strong supporter and promoter of customer engagement; she also practices what she preaches.

"Four times a year, we host a special sales event during which children can enjoy themselves with a variety of activities," she said. "These events are a hit with both the children and their parents. And even if the parents don't buy anything on such occasions, the next time they need a children's toy, game, book, or puzzle, they'll probably think of us."`
            },
            {
                id: 'p196-2',
                type: 'INVITATION',
                title: 'Shelburn Business Coalition (SBC)',
                content: `Businesspeople from Shelburn and the surrounding area are invited to join us at the Shelburn Convention Center on October 8 for our annual Business Summit.

Our keynote speaker this year will be Mr. Hansraj Deshpande, founder and CEO of Wintereden Hoteliers. Other speakers, all local business owners, are Ms. Omodele Akindjo, Ms. Marlene Fitzroy, Mr. Jasper Klinkhamer, and Mr. Alvin Liu. Topics to be covered include building a strong workforce, establishing a line of credit, engaging with customers, and attracting venture capital.

By registering for this event, you will automatically be added to our e-mail list. Please visit our Web site, www.shelburnbusinesscoalition.org, for the full schedule.`
            },
            {
                id: 'p196-3',
                type: 'E-MAIL',
                content: `To: Vaughn Sgammato <vsgammato@opalmail.com>
From: Irene Warga <irenewarga@shelburnbusinesscoalition.org>
Date: September 15
Subject: Your confirmation

Dear Mr. Sgammato,

Shelburn Business Coalition thanks you for registering for our Business Summit. Your confirmation number is R56690.

As a reminder, please note that the convention center underground garage will be closed for maintenance on October 8. Therefore, please park your car in the public parking area across the street. At the end of the summit, you will receive a voucher to cover the parking fee.

We look forward to seeing you. If you have any questions, please contact me at 555-0138.

Yours very truly,

Irene Warga, Event Coordinator`
            }
        ],
        questions: [
            {
                id: '196',
                text: 'According to the article, what action is being considered by many online sellers?',
                options: [
                    '(A) Redesigning their Web sites',
                    '(B) Increasing their advertising budgets',
                    '(C) Opening physical store locations',
                    '(D) Developing new lines of products'
                ],
                answer: 'C',
                explanation: '기사에서 온라인 판매로만 수익을 창출하는 많은 상인들이 온라인 존재를 보완하기 위해 실제 매장을 열고 있다고 언급했습니다. 정답은 (C) "실제 매장 위치 개설"입니다.'
            },
            {
                id: '197',
                text: 'What does Ms. Fitzroy say she offers her customers?',
                options: [
                    '(A) A convenient place to shop',
                    '(B) Discounts on children\'s clothing',
                    '(C) An enjoyable shopping experience',
                    '(D) Special deals on toys'
                ],
                answer: 'C',
                explanation: '기사에서 Ms. Fitzroy는 연 4회 특별 판매 이벤트를 개최하며, 이 기간 동안 어린이들이 다양한 활동을 즐길 수 있다고 언급했습니다. 정답은 (C) "즐거운 쇼핑 경험"입니다.'
            },
            {
                id: '198',
                text: 'Who most likely will speak on the topic of engaging with customers?',
                options: [
                    '(A) Ms. Akindjo',
                    '(B) Ms. Fitzroy',
                    '(C) Mr. Deshpande',
                    '(D) Mr. Liu'
                ],
                answer: 'B',
                explanation: '기사에서 Ms. Fitzroy는 고객 참여의 강력한 지지자이자 홍보자이며 자신이 설교하는 것을 실천한다고 언급했습니다. 초대장에서 다룰 주제 중 하나가 고객과의 참여입니다. 정답은 (B) Ms. Fitzroy입니다.'
            },
            {
                id: '199',
                text: 'What is most likely true about Mr. Sgammato?',
                options: [
                    '(A) He was added to a mailing list.',
                    '(B) He will be starting a business.',
                    '(C) He received a discount on his registration fee.',
                    '(D) He has never attended an SBC event before.'
                ],
                answer: 'A',
                explanation: '초대장에서 이 이벤트에 등록하면 자동으로 이메일 목록에 추가된다고 명시되어 있습니다. Mr. Sgammato가 등록했으므로 메일링 리스트에 추가되었을 것입니다. 정답은 (A) "메일링 리스트에 추가되었다"입니다.'
            },
            {
                id: '200',
                text: 'What is Mr. Sgammato expected to do upon arrival at a convention center?',
                options: [
                    '(A) Ask to see to Ms. Warga',
                    '(B) Park his car across the street',
                    '(C) Obtain a confirmation number',
                    '(D) Pick up some conference material'
                ],
                answer: 'B',
                explanation: '이메일에서 10월 8일에 컨벤션 센터 지하 주차장이 유지보수를 위해 폐쇄되므로 길 건너편 공공 주차장에 주차하라고 안내했습니다. 정답은 (B) "길 건너편에 주차"입니다.'
            }
        ]
    }
];

export default rcPart7Test10;
