import { PracticeSet } from './rc_part7_practice';

export const rcPart7Test7: PracticeSet[] = [
    // Questions 176-180: Double Passage (Web page + E-mail)
    {
        id: 'test7-176-180',
        type: 'Double',
        passages: [
            {
                id: 'p176-1',
                type: 'WEB PAGE',
                content: `https://www.sunnywelcomehotel.co.in

At the Sunny Welcome Hotel in Kolkata, we work hard to ensure that you enjoy your stay. Please note:

- Each room has a coffeemaker and complimentary coffee and tea. Guests may purchase snacks and other beverages in the vending areas located on each floor.
- Guests with small children may request a rollaway bed or crib for their rooms for no additional charge.
- The business center is open from 9:00 A.M. to 5:00 P.M. each day.
- The swimming pool and children's playground are open during daylight hours. Children must always be supervised by an adult.
- A deposit is necessary to guarantee a room reservation. The deposit will only be refunded if the reservation is cancelled or changed more than 24 hours prior to arrival.
- Guests may check in as early as 2:00 P.M. Checkout after noon on the day of departure is subject to an additional charge.
- Guests are required to present a passport or driver's license at the time of check-in.
- We offer free shuttle service to the airport. Guests can make arrangements at the front desk.
- Our reception desk is staffed 24 hours a day.`
            },
            {
                id: 'p176-2',
                type: 'E-MAIL',
                content: `To: generalmanager@sunnywelcomehotel.co.in
From: samuelramon@myemail.co.uk
Date: 13 May
Subject: Reservation number EX52417

Hello,

My family and I were very comfortable in the family suite at the Sunny Welcome Hotel in Kolkata last year, and we were looking forward to returning this year for a week starting on 17 April. Unfortunately, we suddenly had to postpone our trip until June, so I called the hotel on the morning of 17 April to change our reservation dates. I thought everything was in order, but when I opened my credit card statement this month, I discovered an additional charge from the Sunny Welcome Hotel.

Could you please look into the matter? I believe that an error has been made and that I should be reimbursed. I would appreciate having the money credited to my account. We still plan to return to Kolkata later this year and anticipate an enjoyable stay at your hotel.

Yours sincerely,

Samuel Ramon`
            }
        ],
        questions: [
            {
                id: '176',
                text: 'According to the Web page, what are hotel guests asked to provide at check-in?',
                options: [
                    '(A) A home address',
                    '(B) Payment in advance',
                    '(C) Proof of identification',
                    '(D) A confirmation number'
                ],
                answer: 'C',
                explanation: '웹 페이지에서 체크인 시 여권이나 운전면허증을 제시해야 한다고 명시되어 있습니다. 정답은 (C) "신분증명"입니다.'
            },
            {
                id: '177',
                text: 'What is NOT included with a stay at the Sunny Welcome Hotel?',
                options: [
                    '(A) Hot beverages',
                    '(B) A light breakfast',
                    '(C) Airport shuttle service',
                    '(D) Use of a swimming pool'
                ],
                answer: 'B',
                explanation: '호텔에서 커피와 차, 공항 셔틀, 수영장은 제공되지만 조식은 언급되지 않았습니다. 정답은 (B) "가벼운 조식"입니다.'
            },
            {
                id: '178',
                text: 'What does Mr. Ramon indicate in his e-mail?',
                options: [
                    '(A) He usually travels alone.',
                    '(B) He has family living in Kolkata.',
                    '(C) He is planning to move to Kolkata.',
                    '(D) He has stayed at the Sunny Welcome Hotel before.'
                ],
                answer: 'D',
                explanation: 'Mr. Ramon은 작년에 Sunny Welcome Hotel에 묵었으며 올해도 돌아올 계획이라고 언급했습니다. 정답은 (D)입니다.'
            },
            {
                id: '179',
                text: 'Why most likely was Mr. Ramon charged a fee by the Sunny Welcome Hotel?',
                options: [
                    '(A) He canceled a reservation less than a day before arrival.',
                    '(B) He requested a rollaway bed for his room.',
                    '(C) He checked out of his room after midday.',
                    '(D) He reserved a work space in the business center.'
                ],
                answer: 'A',
                explanation: 'Mr. Ramon은 4월 17일 아침에 예약 날짜를 변경하려고 전화했습니다. 웹 페이지에서 도착 24시간 이내 취소/변경 시 보증금이 환불되지 않는다고 했으므로, 이것이 수수료 부과 이유일 가능성이 높습니다. 정답은 (A)입니다.'
            },
            {
                id: '180',
                text: 'What does Mr. Ramon request?',
                options: [
                    '(A) A credit to his account',
                    '(B) A discount on a future hotel stay',
                    '(C) A room upgrade to a family suite',
                    '(D) An extension of a hotel stay'
                ],
                answer: 'A',
                explanation: 'Mr. Ramon은 계좌에 금액을 환급받고 싶다고 요청했습니다. 정답은 (A) "계좌에 크레딧"입니다.'
            }
        ]
    },
    // Questions 181-185: Double Passage (E-mail + Web page)
    {
        id: 'test7-181-185',
        type: 'Double',
        passages: [
            {
                id: 'p181-1',
                type: 'E-MAIL',
                content: `To: Nina Sosa
From: Dexter Abbott
Date: 20 August
Subject: Next steps

Dear Ms. Sosa,

I have good news. The plans for the layout of the new Fountain Road office building have just been approved by Lanfei Chan at our corporate office. We now need to start thinking about the artwork for the main open-plan office area on the third floor of the building. This is one of our last tasks before the office opens in October.

I have heard that Red Starling Art has a good reputation for helping with office interiors. Could you look at the company's Web site today and find out if any of its services might be suitable for us? I am wondering whether photography or paintings would look best in the space. What do you think? I am still waiting to hear back from Maxwell Willis in Finance about the budget for art, so please do not agree to anything with Red Starling Art until we know more.

Thank you,

Dexter Abbott, Facilities Manager
KLX Accountancy`
            },
            {
                id: 'p181-2',
                type: 'WEB PAGE',
                content: `https://www.redstarlingart.co.uk/offices/

Red Starling Art offers a range of consultancy services for office buildings:

* Remake: For clients who want a complete redesign of the interior of their office, we work with you to create a layout and decoration scheme that meets your needs.
* Align: For clients looking to incorporate artwork into a new office, we help you find the right pieces (paintings, photographs, prints, or sculptures) for your space.
* Connect: For clients who want to add a local touch to their offices, we collaborate with area artists and photographers to bring their unique perspective to you.
* Reframe: For clients who want to update but keep their existing artwork, we suggest new framing, new lighting, or new arrangements for a fresh look.

Our work is always tailored to the specific needs of our clients, so we cannot provide fixed prices. Please e-mail Birgit Lowenbruck at blowenbruck@redstarlingart.co.uk to book a free consultation. After the consultation, she will provide you with an estimate for the agreed-upon services.`
            }
        ],
        questions: [
            {
                id: '181',
                text: 'What is suggested about the Fountain Road office building?',
                options: [
                    '(A) It opened last October.',
                    '(B) It is the corporate headquarters of KLX Accountancy.',
                    '(C) It has more than one floor.',
                    '(D) It has a conference center.'
                ],
                answer: 'C',
                explanation: '이메일에서 Fountain Road 사무실 건물의 3층에 대한 언급이 있으므로, 건물은 여러 층이 있습니다. 정답은 (C)입니다.'
            },
            {
                id: '182',
                text: 'In the e-mail, what does Mr. Abbott ask Ms. Sosa to do?',
                options: [
                    '(A) Finish a task she started last week',
                    '(B) Approve plans for the layout of an office',
                    '(C) Agree to a price for purchasing artwork',
                    '(D) Research interior design options online'
                ],
                answer: 'D',
                explanation: 'Mr. Abbott은 Ms. Sosa에게 Red Starling Art의 웹사이트를 보고 서비스가 적합한지 확인하라고 요청했습니다. 정답은 (D)입니다.'
            },
            {
                id: '183',
                text: 'Who is responsible for the budget for artwork?',
                options: [
                    '(A) Mr. Abbott',
                    '(B) Ms. Chan',
                    '(C) Mr. Willis',
                    '(D) Ms. Sosa'
                ],
                answer: 'C',
                explanation: '이메일에서 Mr. Abbott은 예산에 대해 Finance의 Maxwell Willis로부터 답변을 기다리고 있다고 언급했습니다. 정답은 (C)입니다.'
            },
            {
                id: '184',
                text: 'What Red Starling Art service would be most suitable for the Fountain Road office building?',
                options: [
                    '(A) Remake',
                    '(B) Align',
                    '(C) Connect',
                    '(D) Reframe'
                ],
                answer: 'B',
                explanation: '새 사무실에 예술품을 통합하려는 고객을 위한 Align 서비스가 가장 적합합니다. 정답은 (B)입니다.'
            },
            {
                id: '185',
                text: 'According to the Web page, how can someone learn the cost of Red Starling Art\'s services?',
                options: [
                    '(A) By submitting information through the Contact Us page',
                    '(B) By going to a Web page with cost information',
                    '(C) By submitting a document to Ms. Lowenbruck',
                    '(D) By attending a consultation with Ms. Lowenbruck'
                ],
                answer: 'D',
                explanation: '웹 페이지에서 무료 상담 후 Ms. Lowenbruck이 합의된 서비스에 대한 견적을 제공한다고 했습니다. 정답은 (D)입니다.'
            }
        ]
    },
    // Questions 186-190: Triple Passage (E-mail + Memo + Memo)
    {
        id: 'test7-186-190',
        type: 'Triple',
        passages: [
            {
                id: 'p186-1',
                type: 'E-MAIL',
                content: `To: jdixon@milkalenterprises.com
From: humanresources@milkalenterprises.com
Date: April 28
Subject: Employee survey responses

Dear Ms. Dixon,

I read through all the responses to the semiannual employee survey, and I want to highlight a few points that were repeatedly raised. We can use this list of suggestions to help determine our priorities.

Suggestion 1. A more flexible policy for working from home
Suggestion 2. An expanded in-office recycling strategy
Suggestion 3. More financial rewards for excellent work
Suggestion 4. More opportunities for technical training

Also, if you approve, I would like to simplify the survey form before we administer it again. The open-ended questions make the data difficult to analyze. I propose incorporating more yes-no questions or rating scales to determine how much a colleague agrees or disagrees with a statement.

Kind regards,

Judith Hathaway, Human Resources`
            },
            {
                id: 'p186-2',
                type: 'MEMO',
                content: `To: All Staff
From: Jenna Dixon, General Manager
Date: May 8
Subject: Volunteers needed

I am seeking volunteers to form a committee that will launch an office recycling program. Having such a program was one of the most frequently identified needs mentioned on the recent employee survey. This program will prevent recyclables, including plastics, glass, metal, paper, and cardboard, from ending up in landfills.

Also, we need a volunteer to be the coordinator of this committee. I will be happy to meet with this coordinator to discuss first steps. Note that time spent on coordination tasks would be in addition to your regular work duties. A small amount of funds will be made available to be spent on program setup costs.`
            },
            {
                id: 'p186-3',
                type: 'MEMO',
                content: `To: All Staff
From: Mohammad Asghari
Date: June 13
Subject: Bins are here

As chairperson of the In-office Recycling Committee, I am happy to report that we now have recycling bins in the kitchen for glass bottles, soda cans, and cardboard and paper. It took us some time to get this program started because finding containers narrow enough to squeeze three between the door and the refrigerator proved challenging. But I was finally able to purchase some.

Please note that the recycling facility we are working with has stringent Guidelines on what they accept, so I am creating illustrated instructions to hang above each bin. Those will be up tomorrow, and committee members will be monitoring our collection system to make sure the program is going smoothly. Please contact me with any questions, concerns, or feedback.`
            }
        ],
        questions: [
            {
                id: '186',
                text: 'In the e-mail, how does Ms. Hathaway suggest improving future surveys?',
                options: [
                    '(A) By changing the format of some questions',
                    '(B) By collecting the responses anonymously',
                    '(C) By conducting them more frequently',
                    '(D) By using specialized software'
                ],
                answer: 'A',
                explanation: 'Ms. Hathaway는 개방형 질문 대신 예/아니오 질문이나 평가 척도를 사용하여 설문조사 형식을 변경하자고 제안했습니다. 정답은 (A)입니다.'
            },
            {
                id: '187',
                text: 'What suggestion from the survey results is Ms. Dixon acting on?',
                options: [
                    '(A) Suggestion 1',
                    '(B) Suggestion 2',
                    '(C) Suggestion 3',
                    '(D) Suggestion 4'
                ],
                answer: 'B',
                explanation: 'Ms. Dixon은 사무실 재활용 프로그램을 시작하기 위한 위원회를 구성하고 있으며, 이는 Suggestion 2 (확장된 사무실 재활용 전략)입니다. 정답은 (B)입니다.'
            },
            {
                id: '188',
                text: 'According to Mr. Asghari, why was a new program delayed?',
                options: [
                    '(A) Some orders took a long time to be processed.',
                    '(B) Some equipment needed to be moved.',
                    '(C) A coordinator needed to approve it.',
                    '(D) A room had space limitations.'
                ],
                answer: 'D',
                explanation: 'Mr. Asghari는 문과 냉장고 사이에 3개의 용기를 넣을 수 있을 만큼 좁은 용기를 찾는 것이 어려웠다고 언급했습니다. 정답은 (D) "공간 제약이 있었다"입니다.'
            },
            {
                id: '189',
                text: 'What is suggested about Mr. Asghari?',
                options: [
                    '(A) He has led a training series on recycling.',
                    '(B) He paid for some items using the company\'s money.',
                    '(C) He meets with Ms. Dixon on a weekly basis.',
                    '(D) He was acknowledged in a company newsletter.'
                ],
                answer: 'B',
                explanation: 'Ms. Dixon의 메모에서 프로그램 설정 비용에 소액의 자금이 제공될 것이라고 했으며, Mr. Asghari가 용기를 구매했다고 언급했습니다. 정답은 (B)입니다.'
            },
            {
                id: '190',
                text: 'What is Mr. Asghari planning to do?',
                options: [
                    '(A) Recruit volunteers',
                    '(B) Contact suppliers',
                    '(C) Display signs',
                    '(D) Take inventory'
                ],
                answer: 'C',
                explanation: 'Mr. Asghari는 각 용기 위에 그림이 있는 안내문을 내일 게시할 예정이라고 언급했습니다. 정답은 (C) "표지판 게시"입니다.'
            }
        ]
    },
    // Questions 191-195: Triple Passage (Job Advertisement + Web page + Review)
    {
        id: 'test7-191-195',
        type: 'Triple',
        passages: [
            {
                id: 'p191-1',
                type: 'JOB ADVERTISEMENT',
                content: `Kooper's Vision is seeking an optician for its eyewear department. Must have a valid Massachusetts optician license and at least three years of relevant experience. The position requires excellent customer service skills and a strong awareness of current fashion trends in the industry. Responsibilities include helping clients choose frames, ordering eyeglasses, and filing insurance claims.

This full-time position is available at Kooper's Vision at Danvers Mall. Contact store manager Tanisha Mosley at 978-555-0101. Must be available to start during the last week of August.`
            },
            {
                id: 'p191-2',
                type: 'WEB PAGE',
                content: `https://www.koopersvision.com

Kooper's Vision at Danvers Mall

| Day | Hours |
|---|---|
| Monday | 10 A.M.-7 P.M. |
| Tuesday | 10 A.M.-7 P.M. |
| Wednesday | 10 A.M.-7 P.M. |
| Thursday | 10 A.M.-7 P.M. |
| Friday | 10 A.M.-7 P.M. |
| Saturday | 10 A.M.-6 P.M. |
| Sunday | 10 A.M.-4 P.M. |

During the month of August, enjoy 50% off the second pair of eyeglasses.

Kooper's Vision is your local optical center for all your eye-care needs in Danvers, Massachusetts. We are located on the upper level of the Danvers Mall next to Eight Days Sporting Goods. Call 978-555-0101 today to schedule your annual eye exam. Exams by appointment only.`
            },
            {
                id: 'p191-3',
                type: 'REVIEW',
                title: 'Optical Centers Reviews',
                content: `Rating: 5 stars ★★★★★

I have been wearing eyeglasses since I was ten years old. I now have five children, and four of them wear glasses, so I have visited many opticians over the years. My recent visit to Kooper's Vision on August 31 was, by far, the best.

Ms. Palmer offered her help when she saw that I was overwhelmed by the eyeglass selection at Kooper's Vision. She looked at the shape of my face and steered me toward a few pairs of glasses that were perfect for me! She knew exactly what looked best on me and advised me about the size, color, quality, and cost of the frames I considered. Ms. Palmer also explained the different types of lenses and lens coatings available. I could not decide which was my favorite pair of eyeglasses, so I bought two pairs! I was incredulous when she told me it was her first day working at the store—she was the best optician I have ever had!

Melvin Drake`
            }
        ],
        questions: [
            {
                id: '191',
                text: 'According to the job advertisement, what is true about the open position?',
                options: [
                    '(A) It comes with health insurance.',
                    '(B) It starts at the end of August.',
                    '(C) It includes a fashionable company uniform.',
                    '(D) It requires that candidates work on a team.'
                ],
                answer: 'B',
                explanation: '채용 광고에서 8월 마지막 주에 시작할 수 있어야 한다고 명시되어 있습니다. 정답은 (B) "8월 말에 시작한다"입니다.'
            },
            {
                id: '192',
                text: 'What is indicated about Kooper\'s Vision on the Web page?',
                options: [
                    '(A) It stays open later on Saturday.',
                    '(B) It is located on the lower level of a mall.',
                    '(C) It offers a selection of sports eyeglasses.',
                    '(D) It requires an appointment for an eye exam.'
                ],
                answer: 'D',
                explanation: '웹 페이지에서 안과 검사는 예약제로만 가능하다고 명시되어 있습니다. 정답은 (D)입니다.'
            },
            {
                id: '193',
                text: 'What is most likely true about Ms. Palmer?',
                options: [
                    '(A) She works with Ms. Mosley.',
                    '(B) She previously worked at a fashion shop.',
                    '(C) She earned an optician license two years ago.',
                    '(D) She is the new owner of Kooper\'s Vision.'
                ],
                answer: 'A',
                explanation: 'Ms. Palmer는 8월 31일에 첫 출근을 했으며, 채용 광고에서 매장 관리자 Tanisha Mosley에게 연락하라고 했으므로 Ms. Palmer는 Ms. Mosley와 함께 일할 가능성이 높습니다. 정답은 (A)입니다.'
            },
            {
                id: '194',
                text: 'According to the review, how did Ms. Palmer help Mr. Drake?',
                options: [
                    '(A) By recommending frames that fit his face',
                    '(B) By extending the length of his appointment',
                    '(C) By choosing glasses for his children',
                    '(D) By upgrading the coating on his eyeglass lenses'
                ],
                answer: 'A',
                explanation: '리뷰에서 Ms. Palmer가 Mr. Drake의 얼굴 모양을 보고 완벽한 안경 몇 개를 추천했다고 언급했습니다. 정답은 (A) "얼굴에 맞는 프레임 추천"입니다.'
            },
            {
                id: '195',
                text: 'What is suggested about Mr. Drake?',
                options: [
                    '(A) He thinks his prescription has changed.',
                    '(B) He started wearing eyeglasses recently.',
                    '(C) He frequently shops at Danvers Mall.',
                    '(D) He received a discount on his purchase.'
                ],
                answer: 'D',
                explanation: 'Mr. Drake는 8월 31일에 두 개의 안경을 구매했으며, 웹 페이지에서 8월에 두 번째 안경 50% 할인을 제공한다고 했습니다. 정답은 (D) "구매 시 할인을 받았다"입니다.'
            }
        ]
    },
    // Questions 196-200: Triple Passage (Web page + E-mail + E-mail)
    {
        id: 'test7-196-200',
        type: 'Triple',
        passages: [
            {
                id: 'p196-1',
                type: 'WEB PAGE',
                content: `https://www.hellosnackvending.com/services

Our Services

Hello Snack Vending offers a variety of vending and coffee services for company break rooms and vending machines.

| Service | Description |
|---|---|
| **Service 1 (Micromarket)** | We set up a small market in your break room, with customized products available on open shelves. Micromarkets are self-service and feature electronic payments. Shelving and fixtures are provided. |
| **Service 2 (Pantry)** | We stock your break room cabinets with a variety of products that you select. Pantry service is paid for in advance, freeing users from paying per item. |
| **Service 3 (Coffee)** | We keep your break room stocked with coffee, tea, and all related essentials. We supply you with group-sized coffee makers, coffee, and individually sized creamer and sugar varieties. |
| **Service 4 (Traditional Vending)** | We regularly stock your vending machine with a customized selection of carbonated beverages, juice, and water. |
| **Service 5 (Healthy Vending)** | We regularly stock your vending machine with a wide selection of healthy snacks. |`
            },
            {
                id: 'p196-2',
                type: 'E-MAIL',
                content: `To: customercare@hellosnackvending.com
From: dlewis@kivowitzcompany.com
Date: November 14
Subject: Vending service

Hello,

My company recently bought a gently used nonrefrigerated vending machine, which has been placed in our employee break room. I am looking for a stocking service to fill it so that the staff can start using it.

Does your company only stock vending machines that you own, or do you also offer a stocking service for other machines? If you can service ours, I would like to know more about the snacks you have available to fill the machine. Could you please send me a list of the products you offer?

Thank you for your assistance.

Best regards,

Denikia Lewis
Kivowitz Company`
            },
            {
                id: 'p196-3',
                type: 'E-MAIL',
                content: `To: Denikia Lewis <dlewis@kivowitzcompany.com>
From: Customer Care <customercare@hellosnackvending.com>
Date: November 15
Subject: Re: Vending service
Attachment: List

Dear Ms. Lewis,

Thank you for your e-mail. We would be happy to stock your machine even if it is not owned by our company. However, if your machine is old, it can be difficult to obtain parts for it, and older machines break more often. The cost of repairs can get high, making it more cost-effective for you to use one of our vending machines. Can you provide me with the model number?

I have attached the list you requested. We can accommodate special requests if you have any. I also recommend renting a drink machine from us, because we find that employees usually enjoy having a cold drink with their snacks.

Please contact me if you have additional questions.

Sincerely,

Dominik Scheibler
Customer Care Representative`
            }
        ],
        questions: [
            {
                id: '196',
                text: 'What is mentioned about Service 1?',
                options: [
                    '(A) It comes with a fixed product selection.',
                    '(B) It allows users to pay electronically.',
                    '(C) It requires an annual contract.',
                    '(D) It includes shelving for an extra fee.'
                ],
                answer: 'B',
                explanation: 'Service 1 (Micromarket)은 전자 결제를 특징으로 한다고 명시되어 있습니다. 정답은 (B) "사용자가 전자적으로 결제할 수 있다"입니다.'
            },
            {
                id: '197',
                text: 'What does Ms. Lewis suggest about her company\'s vending machine?',
                options: [
                    '(A) It is in poor condition.',
                    '(B) It was recently serviced.',
                    '(C) It was overpriced.',
                    '(D) It is currently empty.'
                ],
                answer: 'D',
                explanation: 'Ms. Lewis는 직원들이 사용할 수 있도록 자판기를 채울 재고 서비스를 찾고 있다고 언급했습니다. 정답은 (D) "현재 비어있다"입니다.'
            },
            {
                id: '198',
                text: 'What does Mr. Scheibler ask Ms. Lewis to send him?',
                options: [
                    '(A) A signed contract for the service',
                    '(B) A picture of her vending machine',
                    '(C) A list of needed parts',
                    '(D) A model number'
                ],
                answer: 'D',
                explanation: 'Mr. Scheibler는 Ms. Lewis에게 모델 번호를 제공해달라고 요청했습니다. 정답은 (D) "모델 번호"입니다.'
            },
            {
                id: '199',
                text: 'What is included in the list Mr. Scheibler attached to his e-mail?',
                options: [
                    '(A) The snacks that his company offers',
                    '(B) The dates that his company can make deliveries',
                    '(C) The brand of vending machines that his company uses',
                    '(D) The costs involved with vending services'
                ],
                answer: 'A',
                explanation: 'Ms. Lewis가 제공하는 스낵 목록을 요청했으며, Mr. Scheibler가 요청한 목록을 첨부했다고 언급했습니다. 정답은 (A) "회사가 제공하는 스낵"입니다.'
            },
            {
                id: '200',
                text: 'What additional service does Mr. Scheibler suggest?',
                options: [
                    '(A) Service 2',
                    '(B) Service 3',
                    '(C) Service 4',
                    '(D) Service 5'
                ],
                answer: 'C',
                explanation: 'Mr. Scheibler는 음료 자판기를 임대할 것을 권장했으며, Service 4는 전통적인 자판기 서비스로 탄산음료, 주스, 물을 제공합니다. 정답은 (C) Service 4입니다.'
            }
        ]
    }
];

export default rcPart7Test7;
