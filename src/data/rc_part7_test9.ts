import { PracticeSet } from './rc_part7_practice';

export const rcPart7Test9: PracticeSet[] = [
    // Questions 176-180: Double Passage (E-mail + Form)
    {
        id: 'test9-176-180',
        type: 'Double',
        passages: [
            {
                id: 'p176-1',
                type: 'E-MAIL',
                content: `To: headquartersstaff@seonwulawfirm.com
From: iqalandar@seonwulawfirm.com
Date: October 1, 9:39 A.M.
Subject: Remote work setup
Attachment: Equipment request form

Dear Associates,

On December 3, our headquarters will close for a month for renovation. As all of you normally work out of these offices in San Francisco, please plan to work off-site and collect everything you may need (your laptop, files, etc.) before December 1. Entry to the building will be restricted after that date.

If you would like a temporary space at our San Jose offices, please e-mail me, and I will reserve one for you. If you plan to work from home and need additional equipment (such as a printer), fill out the attached form from our technology department and return it to me. A representative of that department will mail the equipment to your home address.

We realize this work on the building is a disruption, but timing it with our slow season should make the situation easier. We think you will be happy with the changes when the building reopens on January 5. If you have any questions, please reach out to me.

Best,

Ian Qalandar, Manager
Seonwu Law Firm
(415) 555-0177`
            },
            {
                id: 'p176-2',
                type: 'FORM',
                title: 'Seonwu Law Firm—Equipment Request Form',
                content: `Employee name: Jason Kang
Employee ID: 102899
E-mail: jkang@seonwulawfirm.com
Date to receive: November 30
Equipment: desktop monitor, printer

Employee Signature: ____________________ Date: ____________________

(This section is to be completed by the technology department.)
Request completed: [x] Yes  [ ] No
Request filled by: Aubrey Smith
Equipment serial numbers: VN3902556, MXE96400
Date sent: November 27 via overnight mail`
            }
        ],
        questions: [
            {
                id: '176',
                text: 'What is indicated about Seonwu Law Firm?',
                options: [
                    '(A) It focuses on real estate law.',
                    '(B) It has a large advertising budget.',
                    '(C) It serves clients across the country.',
                    '(D) It is headquartered in San Francisco.'
                ],
                answer: 'D',
                explanation: '이메일에서 San Francisco에 있는 본사 사무실이 언급되어 있습니다. 정답은 (D) "San Francisco에 본사가 있다"입니다.'
            },
            {
                id: '177',
                text: 'According to the e-mail, what will the technology department do?',
                options: [
                    '(A) Install updates on employee laptops',
                    '(B) Send office equipment to employees',
                    '(C) Train employees to use new software',
                    '(D) Place equipment in renovated offices'
                ],
                answer: 'B',
                explanation: '이메일에서 기술 부서 담당자가 장비를 직원의 집 주소로 우편으로 보낼 것이라고 했습니다. 정답은 (B) "직원에게 사무 장비 발송"입니다.'
            },
            {
                id: '178',
                text: 'What is suggested in the e-mail about Seonwu Law Firm?',
                options: [
                    '(A) It plans to expand its operations.',
                    '(B) It mostly employs remote workers.',
                    '(C) It is usually not busy in December.',
                    '(D) It handles many high-profile cases.'
                ],
                answer: 'C',
                explanation: '이메일에서 건물 작업을 비수기와 맞춰 진행하면 상황이 더 쉬워질 것이라고 언급했습니다. 정답은 (C) "12월에는 보통 바쁘지 않다"입니다.'
            },
            {
                id: '179',
                text: 'What can be concluded about Mr. Kang?',
                options: [
                    '(A) He chose not to work in the San Jose office.',
                    '(B) He is a senior partner at the Seonwu Law Firm.',
                    '(C) He will be on vacation after November.',
                    '(D) He has requested a larger office.'
                ],
                answer: 'A',
                explanation: 'Mr. Kang은 집에서 일하기 위한 장비를 요청했으므로 San Jose 사무실에서 일하지 않기로 선택했습니다. 정답은 (A)입니다.'
            },
            {
                id: '180',
                text: 'What most likely is Ms. Smith\'s occupation?',
                options: [
                    '(A) Lawyer',
                    '(B) Office manager',
                    '(C) Technical support staff',
                    '(D) Administrative assistant'
                ],
                answer: 'C',
                explanation: '양식에서 Ms. Smith(Aubrey Smith)가 기술 부서에서 요청을 처리했다고 명시되어 있습니다. 정답은 (C) "기술 지원 직원"입니다.'
            }
        ]
    },
    // Questions 181-185: Double Passage (Article + E-mail)
    {
        id: 'test9-181-185',
        type: 'Double',
        passages: [
            {
                id: 'p181-1',
                type: 'ARTICLE',
                title: 'Planning a Tour of Your Facility',
                content: `by Didiane Lessard

Plant tours are commonplace in many factories, but not all tours are as effective as they could be. Too many companies make the mistake of adopting a one-size-fits-all approach rather than tailoring tours to maximize their usefulness. A potential investor and a casual tourist will probably not be impressed by the same things, so it is best to be clear about the tour's purpose early on. Here are some guidelines to make each tour as effective as possible.

Be selective. Unless your tour is for a safety inspection, your guests do not need (or want) to see every part of your factory. Choose a few sections that will interest your guests and give them a better sense of your product. For example, journalists will want to create a story about your plant, so show them the parts of the plant that have historical significance, such as a room with the company's original production equipment.

Timing is everything. Always be mindful of the physical demands of the tour. Even the hardiest guest will tire of standing or walking for long periods. It is a good idea to schedule breaks in tours lasting longer than an hour. The time spent in a single section matters also. If you allow guests only five minutes in an area, they will soon forget it. On the other hand, even the most impressive room gets boring after half an hour.

Personality is NOT everything. While having a personable and friendly tour guide is essential, your guests are coming to see what goes into making your product. Tour guides get asked a variety of questions, some unexpected, so a comprehensive knowledge of the production processes is important (and absolutely vital during inspections). You also want someone who will keep the tour moving—visitors will appreciate a tour that begins and ends on time.`
            },
            {
                id: 'p181-2',
                type: 'E-MAIL',
                content: `To: Masumi Toda <mt978@vidatechsystems.com>
From: Ana Miftaroski <am680@vidatechsystems.com>
Date: May 1
Subject: Upcoming plant tour
Attachment: Lessard_article

Hi, Masumi,

I have attached an April 15 article by Didiane Lessard to help you plan the tour we will be giving later this month. I especially agree with the section on timing. Since the tour, by necessity, will have to cover the entire plant, it must be conducted as efficiently as possible. As for a guide, I would have recommended Nathan Zarate, but he will be traveling on May 21. Perhaps Maja Clausen could do it. She has also worked here for several years; she is very knowledgeable about our facility, processes, policies, and procedures. I am confident that she will be able to handle any questions the visitors might ask.

Ana Miftaroski, Vice President of Operations`
            }
        ],
        questions: [
            {
                id: '181',
                text: 'What is one problem mentioned about factory tours in the article?',
                options: [
                    '(A) They are often rescheduled at the last minute.',
                    '(B) They give the same information to all types of visitors.',
                    '(C) They fail to supply protective gear that fits everyone.',
                    '(D) They allow groups that are too large.'
                ],
                answer: 'B',
                explanation: '기사에서 모든 방문객에게 동일한 정보를 제공하는 획일적인 접근 방식을 채택하는 실수를 한다고 언급했습니다. 정답은 (B)입니다.'
            },
            {
                id: '182',
                text: 'According to the article, what is the maximum amount of time that a tour should stay in one area?',
                options: [
                    '(A) 10 minutes',
                    '(B) 20 minutes',
                    '(C) 30 minutes',
                    '(D) 60 minutes'
                ],
                answer: 'C',
                explanation: '기사에서 가장 인상적인 방도 30분 후에는 지루해진다고 언급했습니다. 정답은 (C) "30분"입니다.'
            },
            {
                id: '183',
                text: 'What is NOT indicated in the article as a characteristic of a good tour guide?',
                options: [
                    '(A) A friendly personality',
                    '(B) The ability to stand for long periods',
                    '(C) A deep knowledge of processes',
                    '(D) The ability to pay close attention to time'
                ],
                answer: 'B',
                explanation: '기사에서 친절한 성격, 생산 공정에 대한 포괄적인 지식, 투어를 계속 진행하는 능력은 언급했지만 오랫동안 서 있는 능력은 언급하지 않았습니다. 정답은 (B)입니다.'
            },
            {
                id: '184',
                text: 'For whom is Mr. Toda most likely planning a tour?',
                options: [
                    '(A) Casual tourists',
                    '(B) New employees',
                    '(C) Potential investors',
                    '(D) Safety inspectors'
                ],
                answer: 'D',
                explanation: '이메일에서 투어가 필연적으로 전체 공장을 다뤄야 한다고 언급했으며, 기사에서 안전 검사가 아니면 공장의 모든 부분을 볼 필요가 없다고 했습니다. 정답은 (D) "안전 검사관"입니다.'
            },
            {
                id: '185',
                text: 'When is the tour scheduled to take place?',
                options: [
                    '(A) On April 15',
                    '(B) On April 21',
                    '(C) On May 1',
                    '(D) On May 21'
                ],
                answer: 'D',
                explanation: '이메일에서 이달 말에 투어를 진행할 것이라고 했으며(5월 1일 이메일), Nathan Zarate가 5월 21일에 출장 중이라고 언급했습니다. 정답은 (D) "5월 21일"입니다.'
            }
        ]
    },
    // Questions 186-190: Triple Passage (Web page + Schedule + Testimonial)
    {
        id: 'test9-186-190',
        type: 'Triple',
        passages: [
            {
                id: 'p186-1',
                type: 'WEB PAGE',
                content: `https://www.zonecatering.com/home

Zone Catering provides food trucks at film and television production sites throughout California. Just let us know where you need a food truck and how many people you need to feed. We can serve your entire cast and crew. Our trucks also move with you and your team if you are shooting scenes in various locations.

At Zone Catering, we offer a wide variety of cuisines. All the fruits and vegetables we use in our menus are grown here in California. Our menus are easily adapted to accommodate dietary restrictions. For convenience, our food trucks offer both full meals and individual items. We can serve meals buffet-style, or people can order directly from the truck.

Let us take care of the catering for your production. You will find our food delicious, and you will find our service friendly and convenient. We even offer 24-hour support in case any issues arise while we are at your location. We hope to serve you soon!`
            },
            {
                id: 'p186-2',
                type: 'SCHEDULE',
                title: 'Zone Catering Food Trucks',
                content: `Schedule Date: June 10

| Film | Shooting Location | Contact Person |
|---|---|---|
| Trappings | Harpin Lot | Erin Begg |
| Make the Meeting | 192 Laredo Street | Mark Lillo |
| Tutors and Tuxedos | Tandor Fields | Jun-Seo Kil |
| Jatem and the Storm | Spectrum Hall | Donna Gawason |`
            },
            {
                id: 'p186-3',
                type: 'TESTIMONIAL',
                title: 'https://www.zonecatering.com/testimonials',
                content: `June 10—I have been in the acting business for over 25 years and am sometimes disappointed by the food trucks on film production sites. That was not the case today when we were filming Make the Meeting. The food truck had excellent coffee, and the strawberries in the large fruit salad were so fresh and tasty! Even though there was a long line of customers on an extremely hot and uncomfortable day, the server was able to get everyone's food ready quickly. She was friendly and easygoing, too! Even the food truck was pleasant-looking—the mural painted on the side of the truck was beautiful! I hope to see Zone Catering food trucks at future film shooting locations.

—Robert Chiodo`
            }
        ],
        questions: [
            {
                id: '186',
                text: 'What does the Web page indicate about Zone Catering?',
                options: [
                    '(A) It specializes in providing food at music concerts.',
                    '(B) It has lower prices than its competitors.',
                    '(C) It recently moved its corporate office to California.',
                    '(D) It provides customer support 24 hours a day.'
                ],
                answer: 'D',
                explanation: '웹 페이지에서 24시간 지원을 제공한다고 명시되어 있습니다. 정답은 (D) "하루 24시간 고객 지원 제공"입니다.'
            },
            {
                id: '187',
                text: 'According to the schedule, who was the contact person for the filming of Trappings on June 10?',
                options: [
                    '(A) Erin Begg',
                    '(B) Mark Lillo',
                    '(C) Jun-Seo Kil',
                    '(D) Donna Gawason'
                ],
                answer: 'A',
                explanation: '일정표에서 Trappings의 연락 담당자는 Erin Begg입니다. 정답은 (A)입니다.'
            },
            {
                id: '188',
                text: 'Where was the food truck that Mr. Chiodo visited?',
                options: [
                    '(A) At Harpin Lot',
                    '(B) At 192 Laredo Street',
                    '(C) At Tandor Fields',
                    '(D) At Spectrum Hall'
                ],
                answer: 'B',
                explanation: '후기에서 Mr. Chiodo는 Make the Meeting을 촬영할 때 푸드트럭을 방문했다고 언급했으며, 일정표에서 Make the Meeting은 192 Laredo Street에서 촬영되었습니다. 정답은 (B)입니다.'
            },
            {
                id: '189',
                text: 'What is probably true about the salad Mr. Chiodo ordered?',
                options: [
                    '(A) It had an unusual taste.',
                    '(B) It was too big for him to finish.',
                    '(C) It included several types of berries.',
                    '(D) It contained fruit grown in California.'
                ],
                answer: 'D',
                explanation: '웹 페이지에서 모든 과일과 채소가 캘리포니아에서 재배된다고 했으며, 후기에서 과일 샐러드의 딸기가 신선하고 맛있었다고 언급했습니다. 정답은 (D) "캘리포니아에서 재배된 과일 포함"입니다.'
            },
            {
                id: '190',
                text: 'What is indicated about the food truck server in the testimonial?',
                options: [
                    '(A) She had difficulty working in the heat.',
                    '(B) She paints murals in her spare time.',
                    '(C) She prepares orders quickly.',
                    '(D) She has worked in her industry for 25 years.'
                ],
                answer: 'C',
                explanation: '후기에서 서버가 긴 줄에도 불구하고 모든 사람의 음식을 빠르게 준비할 수 있었다고 언급했습니다. 정답은 (C) "주문을 빠르게 준비한다"입니다.'
            }
        ]
    },
    // Questions 191-195: Triple Passage (E-mail + List + E-mail)
    {
        id: 'test9-191-195',
        type: 'Triple',
        passages: [
            {
                id: 'p191-1',
                type: 'E-MAIL',
                content: `To: Hae-won Jeong
From: Julia Laurent
Date: July 28
Subject: Dallas hotels
Attachment: List of downtown accommodations

Dear Hae-won,

I plan to attend the National Digital Marketing Conference in October. I know you have traveled to this conference in Dallas many times. This will be my first time attending, and I'm not sure which hotel to book. I have attached a list of accommodations that are near the convention center. Right now, I am leaning toward the Bonita Suites Hotel, but I would like to know which property you would recommend.

I hope you have settled into your new position with the digital marketing department. I am looking forward to the conference and hope to see you again there.

Kind regards,

Julia Laurent
E-mail Marketing Specialist
The 3R Marketing Firm`
            },
            {
                id: 'p191-2',
                type: 'LIST',
                title: 'List of Downtown Accommodations (from www.topbusinesshotels.com/search/Dallashotels)',
                content: `### The Oaktree Hotel
**Rate:** $204/night
- Luxury hotel in the heart of downtown
- Close to the convention center
- Outdoor pool, three on-site restaurants
- Close to shopping

### Alessi Dallas Hotel
**Rate:** $155/night
- Quaint boutique hotel in downtown Dallas
- Lobby restaurant for breakfast and dinner
- Near convention center and history museum

### Bonita Suites Hotel
**Rate:** $125/night
- New hotel in downtown convention center area
- Office and kitchen in each suite
- Computer center with printers located in lobby
- Meeting space available for groups
- Free on-site parking available`
            },
            {
                id: 'p191-3',
                type: 'E-MAIL',
                content: `To: Julia Laurent
From: Hae-won Jeong
Date: July 29
Subject: RE: Dallas hotels

Dear Julia,

I will be attending the National Digital Marketing Conference this year as well! I love traveling to Dallas every year for this conference because it is a great networking opportunity. Since this is your first time attending, I recommend you go to the newcomers' reception on the first night. The conference executive planning committee is putting it on, and it could be an excellent occasion to socialize with other conference goers.

I will be staying at the Alessi Dallas Hotel. It is the closest to the convention center, and the rooms are comfortable. For you, I would suggest the one you already seem to prefer. It so happens that the newcomers' reception will be held in one of the event rooms there. It is a little farther away but still convenient. As a friendly reminder, we are advised not to book hotels with rates that exceed our company's limit of $175/night.

I look forward to seeing you in October. It will be lovely to catch up.

Best,

Hae-won Jeong
Digital Marketing Director
The 3R Marketing Firm`
            }
        ],
        questions: [
            {
                id: '191',
                text: 'What is the purpose of the first e-mail?',
                options: [
                    '(A) To schedule a meeting with a client',
                    '(B) To ask for assistance with a project',
                    '(C) To seek a suggestion from a colleague',
                    '(D) To congratulate a colleague who was promoted'
                ],
                answer: 'C',
                explanation: '첫 번째 이메일에서 Ms. Laurent는 어느 호텔을 추천할지 알고 싶다고 동료에게 요청했습니다. 정답은 (C) "동료에게 제안 요청"입니다.'
            },
            {
                id: '192',
                text: 'According to the list, what is suggested about the Bonita Suites Hotel?',
                options: [
                    '(A) It is located in a historic building.',
                    '(B) It features resources for business travelers.',
                    '(C) It is near many downtown tourist attractions.',
                    '(D) It charges a daily fee for parking.'
                ],
                answer: 'B',
                explanation: '목록에서 Bonita Suites Hotel은 각 스위트에 사무실과 주방이 있고, 로비에 프린터가 있는 컴퓨터 센터가 있다고 명시되어 있습니다. 정답은 (B) "비즈니스 여행객을 위한 자원 제공"입니다.'
            },
            {
                id: '193',
                text: 'What is true about Ms. Jeong?',
                options: [
                    '(A) She has not attended a marketing conference before.',
                    '(B) She prefers the Alessi Dallas Hotel for its restaurant.',
                    '(C) She thinks Ms. Laurent should stay at the Bonita Suites Hotel.',
                    '(D) She works for a different company than Ms. Laurent.'
                ],
                answer: 'C',
                explanation: '두 번째 이메일에서 Ms. Jeong은 Ms. Laurent가 이미 선호하는 것으로 보이는 호텔(Bonita Suites Hotel)을 추천했습니다. 정답은 (C)입니다.'
            },
            {
                id: '194',
                text: 'Why would Ms. Jeong most likely suggest that Ms. Laurent avoid the Oaktree Hotel?',
                options: [
                    '(A) It does not have an on-site restaurant.',
                    '(B) Its room rate exceeds the company\'s limit.',
                    '(C) Its clients are mostly noisy tourists.',
                    '(D) It is too far from the conference location.'
                ],
                answer: 'B',
                explanation: '두 번째 이메일에서 회사 한도인 $175/박을 초과하는 호텔을 예약하지 말라고 조언했으며, Oaktree Hotel은 $204/박입니다. 정답은 (B) "객실 요금이 회사 한도 초과"입니다.'
            },
            {
                id: '195',
                text: 'What does the second e-mail indicate about the National Digital Marketing Conference?',
                options: [
                    '(A) Its location changes to a different city each year.',
                    '(B) Last year it was held at the Alessi Dallas Hotel.',
                    '(C) Ms. Jeong is on its executive planning committee.',
                    '(D) It includes an event for first-time attendees.'
                ],
                answer: 'D',
                explanation: '두 번째 이메일에서 첫날 밤에 신규 참석자를 위한 리셉션이 있다고 언급했습니다. 정답은 (D) "첫 참석자를 위한 이벤트 포함"입니다.'
            }
        ]
    },
    // Questions 196-200: Triple Passage (Letter + E-mail + E-mail)
    {
        id: 'test9-196-200',
        type: 'Triple',
        passages: [
            {
                id: 'p196-1',
                type: 'LETTER',
                content: `Dover Water Supply
7400 Rodney Boulevard, Dover, DE 19904

March 12

Ms. Na-Ri Cam
361 Farming Avenue
Dover, DE 19902

Dear Ms. Cam,

This letter is to confirm that Dover Water Supply will begin service at your address on Wednesday, April 6. Your customer account number, which is the same as your water meter number, is DWS4289.

Billing is monthly, and payment is due on the fifteenth of each month. Bills can be paid by mailing a check to our main address or by entering your account number and payment information on our secure page at www.doverwatersupply.com/billing.

We will be performing a system flush of the pipes in your area on Monday, April 4. Customers may temporarily see discoloration or sediment in their water around that time. Please visit our Web site for more information. You can also contact Customer Support at questions@doverwatersupply.com or call us at (302) 555-0135.

Sincerely,

Matthew Ensign
Account Representative, Dover Water Supply`
            },
            {
                id: 'p196-2',
                type: 'E-MAIL',
                content: `To: questions@doverwatersupply.com
From: Na-Ri Cam <n.cam@mailcurrent.com>
Date: March 17
Subject: Account number DWS4289

Hello,

I am in the process of moving to my new home in Dover. I received a letter stating that my water service will start on April 6. It also said something about pipes being flushed on April 4. Should I expect to see discoloration when I start using my water? Are there any steps I should take?

Also, I tried to use your secure page, but it gave me an error message saying that my account number was not valid. I will need your help in getting online access by the May 15 due date.

Thank you for any information you can provide.

Na-Ri Cam`
            },
            {
                id: 'p196-3',
                type: 'E-MAIL',
                content: `To: Na-Ri Cam <n.cam@mailcurrent.com>
From: Customer Support <questions@doverwatersupply.com>
Date: March 18
Subject: RE: Account number DWS4289

Dear Ms. Cam,

Thank you for your message. Your water might look cloudy on April 6 when you first turn on your faucets. We recommend that you keep the water running until it is clear before you use it. I assure you that the water is not harmful in any way. The minerals that cause the discoloration occur naturally, and our latest water analysis showed very high quality.

I apologize for the problem you described. I have fixed it, so you should not have any further trouble.

If you have any other questions, please don't hesitate to reach out to us again.

Best regards,

Ramona Hizon
Customer Support, Dover Water Supply`
            }
        ],
        questions: [
            {
                id: '196',
                text: 'What is one purpose of the letter?',
                options: [
                    '(A) To list customer benefits',
                    '(B) To alert customers to a price change',
                    '(C) To confirm the start of a service',
                    '(D) To describe changes to a Web site'
                ],
                answer: 'C',
                explanation: '편지에서 4월 6일에 주소에서 서비스가 시작될 것이라고 확인했습니다. 정답은 (C) "서비스 시작 확인"입니다.'
            },
            {
                id: '197',
                text: 'What most likely does Ms. Cam want to do online on May 15?',
                options: [
                    '(A) Request a new water meter',
                    '(B) Complete a customer survey',
                    '(C) Report a leaking pipe',
                    '(D) Pay a water bill'
                ],
                answer: 'D',
                explanation: '편지에서 청구서는 매월 15일에 납부해야 하며 온라인으로 지불할 수 있다고 했습니다. Ms. Cam은 5월 15일 납부 기한까지 온라인 액세스가 필요하다고 언급했습니다. 정답은 (D) "수도 요금 납부"입니다.'
            },
            {
                id: '198',
                text: 'According to the second e-mail, what should Ms. Cam do on April 6?',
                options: [
                    '(A) Boil her drinking water for five minutes',
                    '(B) Allow her water to run for some time',
                    '(C) Contact her neighbors',
                    '(D) Request a service visit'
                ],
                answer: 'B',
                explanation: '두 번째 이메일에서 4월 6일에 수도꼭지를 처음 켤 때 물이 흐릿해 보일 수 있으며, 물이 맑아질 때까지 계속 흘려보내라고 권장했습니다. 정답은 (B) "물을 잠시 흘려보낸다"입니다.'
            },
            {
                id: '199',
                text: 'In the second e-mail, what is indicated about the water from Dover Water Supply?',
                options: [
                    '(A) It is safe to use.',
                    '(B) It is measured every month.',
                    '(C) It is distributed to many cities.',
                    '(D) It is naturally free of minerals.'
                ],
                answer: 'A',
                explanation: '두 번째 이메일에서 물이 어떤 식으로든 해롭지 않으며 최근 수질 분석 결과 매우 높은 품질을 보였다고 확인했습니다. 정답은 (A) "사용하기에 안전하다"입니다.'
            },
            {
                id: '200',
                text: 'What can be concluded about Ms. Hizon?',
                options: [
                    '(A) She resolved the issue with Ms. Cam\'s account.',
                    '(B) She sent a copy of the water analysis to Ms. Cam.',
                    '(C) She will offer Ms. Cam a discount for new customers.',
                    '(D) She lives in Ms. Cam\'s area.'
                ],
                answer: 'A',
                explanation: 'Ms. Cam이 설명한 문제(온라인 계정 오류)를 수정했으므로 더 이상 문제가 없을 것이라고 Ms. Hizon이 언급했습니다. 정답은 (A) "Ms. Cam의 계정 문제를 해결했다"입니다.'
            }
        ]
    }
];

export default rcPart7Test9;
