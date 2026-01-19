import { PracticeSet } from './rc_part7_practice';

export const rcPart7Test8: PracticeSet[] = [
    // Questions 176-180: Double Passage (Table of Contents + Book Review)
    {
        id: 'test8-176-180',
        type: 'Double',
        passages: [
            {
                id: 'p176-1',
                type: 'TABLE OF CONTENTS',
                title: 'Leadership: Essays on Being a Great Leader',
                content: `Skymill Publishing
Joan Cristophe, Senior Editor

Table of Contents

Introduction (ii)

Beyond the Meeting Agenda: Leadership in Action (2)
Francisca Conde

Leadership Lessons from Local Business (34)
Xiaofeng Li

Think Small...Details Matter (51)
Ron Blake

Low-Tech Managers in Business (83)
T. Walker Prince

Future Leadership Models (119)
Roderick Muller`
            },
            {
                id: 'p176-2',
                type: 'BOOK REVIEW',
                title: 'Book Review: Leadership: Essays on Being a Great Leader',
                content: `As a businessperson, I am glad there is a publisher whose sole focus is on business. Skymill Publishing's latest book is a great one for leaders in all industries. Joan Cristophe has sought out some of the world's best minds to write essays for this book that will provide readers with some unique perspectives. In her own introduction, she argues that there is a greater need than ever before for more effective leaders in business.

Cristophe expertly arranges the essays in this collection so that the voices of each author complement one another. The essay by Xiaofeng Li is the perfect example of this. It is strategically sandwiched between Francisca Conde's essay on leadership in action and Ron Blake's essay on focusing on the details. Roderick Muller's essay is the sole disappointment. Surprisingly little new information or insight is offered on its pages, and the writing style is rather flat. Besides that, the collection is excellent, and readers with an interest in leadership in many different situations will find useful nuggets of wisdom and vision within.`
            }
        ],
        questions: [
            {
                id: '176',
                text: 'According to the table of contents, who is Ms. Cristophe?',
                options: [
                    '(A) The owner of Skymill Publishing',
                    '(B) A book editor',
                    '(C) A local business person',
                    '(D) An industry leader'
                ],
                answer: 'B',
                explanation: '목차에서 Joan Cristophe는 Senior Editor로 명시되어 있습니다. 정답은 (B)입니다.'
            },
            {
                id: '177',
                text: 'What is indicated about Skymill Publishing?',
                options: [
                    '(A) It recently won an award.',
                    '(B) It specializes in business books.',
                    '(C) It is currently hiring.',
                    '(D) It is releasing its first book.'
                ],
                answer: 'B',
                explanation: '리뷰에서 Skymill Publishing의 유일한 초점이 비즈니스라고 언급했습니다. 정답은 (B) "비즈니스 책을 전문으로 한다"입니다.'
            },
            {
                id: '178',
                text: 'According to the book review, what is the topic of the book introduction?',
                options: [
                    '(A) The current need for strong business leadership',
                    '(B) Learning from famous business leaders',
                    '(C) Popular training programs in corporations',
                    '(D) Process improvements that work'
                ],
                answer: 'A',
                explanation: '리뷰에서 서론에서 비즈니스에 효과적인 리더가 그 어느 때보다 필요하다고 주장한다고 언급했습니다. 정답은 (A)입니다.'
            },
            {
                id: '179',
                text: 'In the book review, the word "sole" in paragraph 2, line 5, is closest in meaning to',
                options: [
                    '(A) underlying',
                    '(B) entire',
                    '(C) only',
                    '(D) usual'
                ],
                answer: 'C',
                explanation: '"sole"은 "유일한"이라는 의미로 사용되었습니다. 정답은 (C) "only"입니다.'
            },
            {
                id: '180',
                text: 'On what page does the essay with notably minimal new information begin?',
                options: [
                    '(A) Page 34',
                    '(B) Page 51',
                    '(C) Page 83',
                    '(D) Page 119'
                ],
                answer: 'D',
                explanation: '리뷰에서 Roderick Muller의 에세이가 유일한 실망이며 새로운 정보가 거의 없다고 했습니다. 목차에서 이 에세이는 119페이지에서 시작합니다. 정답은 (D)입니다.'
            }
        ]
    },
    // Questions 181-185: Double Passage (Policy + E-mail)
    {
        id: 'test8-181-185',
        type: 'Double',
        passages: [
            {
                id: 'p181-1',
                type: 'POLICY',
                title: 'Tanyalog Industries Policy 4-02',
                content: `The cafeteria (3rd floor) is open to all employees and guests from 8:00 A.M. to 2:30 P.M. Food from the cafeteria may be eaten there or brought on trays to the following conference rooms: Chestnut Room (1st floor), Burnside Room (2nd floor), Smith Room (3rd floor), and Danville Room (4th floor).

Using the rooms at lunchtime does not require a reservation. However, please do not enter the room if it is already occupied by staff members for a business meeting. The room schedule is displayed on a digital panel by the door of each conference room.

All food items and trash must be removed from the conference room after use. Bins are located directly outside each of the conference rooms.

No food or drink is allowed in the Essex Room (3rd floor) or the Martinelli Room (4th floor).`
            },
            {
                id: 'p181-2',
                type: 'E-MAIL',
                content: `From: Eugene Lasich
To: All Expansion Committee Members
Subject: Tanyalog Industries Expansion Meeting
Date: September 10

Committee Members,

Please join me for the first meeting of the Expansion Committee on Monday, September 17. All attendees should arrive at the Martinelli Room at 10:00 A.M. Then, at 12:00 P.M., we will break for lunch and you can visit the cafeteria to receive a complimentary meal. Just show your visitor's badge at Window 4. All committee members should bring their trays to the conference room on the third floor right beside the cafeteria, where we will continue our meeting from 12:45 P.M. until 4:00 P.M.

Thank you. We look forward to your input at the meeting.

Eugene Lasich, Expansion Committee Chair
Tanyalog Industries`
            }
        ],
        questions: [
            {
                id: '181',
                text: 'According to the policy, what is shown on a digital panel?',
                options: [
                    '(A) The agenda for an upcoming meeting',
                    '(B) Rules for meeting room use',
                    '(C) Details about a room\'s availability',
                    '(D) Instructions for room devices'
                ],
                answer: 'C',
                explanation: '정책에서 회의실 일정이 각 회의실 문 옆의 디지털 패널에 표시된다고 했습니다. 정답은 (C) "방의 사용 가능 여부에 대한 세부 정보"입니다.'
            },
            {
                id: '182',
                text: 'What are conference room users asked to do before leaving a room?',
                options: [
                    '(A) Sign the attendance sheet',
                    '(B) Close the door',
                    '(C) Turn off the lights',
                    '(D) Clean up the space'
                ],
                answer: 'D',
                explanation: '정책에서 모든 음식과 쓰레기를 사용 후 회의실에서 치워야 한다고 했습니다. 정답은 (D) "공간 청소"입니다.'
            },
            {
                id: '183',
                text: 'In the e-mail, the word \"complimentary\" in paragraph 1, line 4, is closest in meaning to',
                options: [
                    '(A) free',
                    '(B) healthy',
                    '(C) favorable',
                    '(D) balanced'
                ],
                answer: 'A',
                explanation: '"complimentary"는 "무료의"라는 의미입니다. 정답은 (A) "free"입니다.'
            },
            {
                id: '184',
                text: 'What should committee members do at Window 4?',
                options: [
                    '(A) Collect meeting materials',
                    '(B) Show proof of identification',
                    '(C) Submit their food orders',
                    '(D) Return their used trays'
                ],
                answer: 'B',
                explanation: '이메일에서 Window 4에서 방문자 배지를 보여주라고 했습니다. 정답은 (B) "신분증 제시"입니다.'
            },
            {
                id: '185',
                text: 'Where will committee members most likely be at 1:00 P.M.?',
                options: [
                    '(A) In the cafeteria',
                    '(B) In the Smith Room',
                    '(C) In the Essex Room',
                    '(D) In the Martinelli Room'
                ],
                answer: 'B',
                explanation: '이메일에서 12:45 P.M.부터 4:00 P.M.까지 카페테리아 바로 옆 3층 회의실에서 회의를 계속한다고 했습니다. 정책에서 3층 회의실은 Smith Room입니다. 정답은 (B)입니다.'
            }
        ]
    },
    // Questions 186-190: Triple Passage (Article + E-mail + E-mail)
    {
        id: 'test8-186-190',
        type: 'Triple',
        passages: [
            {
                id: 'p186-1',
                type: 'ARTICLE',
                title: 'Hiking Permits to Be Required for Upton Parks',
                content: `UPTON (January 8)—Starting on May 25, hikers will be required to obtain a permit for each day they hike on certain trails in Upton parks. The designated trails include some of the most popular hiking spots in the area. The permits are free of charge and require only that hikers register online at www.uptonparks.org or at any Upton Parks Department office. Upon registering, hikers will receive a permit that they can print out or display on a mobile device.

The move is part of an effort to reduce foot traffic on the most used trails, but some hikers are concerned. "I might not be able to get a permit for my favorite trails if none are left when I want to go," says Regina Faroni, an Upton parks hiker. "In addition, I often check the weather in the morning and then decide if it's a good day to hike," she says. Having to apply for a permit could prevent her from taking spontaneous hikes. "On the other hand, it would reduce the number of hikers on certain trails," Faroni admits.
—EJ Harjo, Upton Digest`
            },
            {
                id: 'p186-2',
                type: 'E-MAIL',
                content: `From: Arlo Gomes <arlog@uptonhikingclub.org>
To: Upton Parks Department <info@uptonparks.org>
Subject: Hiking permits
Date: January 22

To Whom It May Concern,

I read in the Upton Digest that hikers soon will be required to register for permits to hike on certain trails. As the organizer of the Upton Hiking Club, I would like more details on how this will affect our club. For example, is there a list of hiking trails that will require permits? I checked your Web site and could not find one.

Is it also the case that the number of permits issued will vary from trail to trail? About seventeen to twenty club members participate in our group hikes. I'm concerned that we may not get enough permits to hike together. Are there special considerations for large groups?

Finally, I am concerned that the permit requirement will not allow our club members to get together for a hike on the spur of the moment. We often will take an unplanned hike if we find that several members have a free day.

I hope you are able to respond soon, as we are already planning our spring and summer hikes.

Regards,

Arlo Gomes
Organizer, Upton Hiking Club`
            },
            {
                id: 'p186-3',
                type: 'E-MAIL',
                content: `From: Upton Parks Department <info@uptonparks.org>
To: Arlo Gomes <arlog@uptonhikingclub.org>
Subject: RE: Hiking permits
Date: January 23
Attachment: Permit_Information_DRAFT

Hello, Mr. Gomes,

Thank you for your e-mail. I apologize that our Web site has not yet been updated with the information you were searching for and that the article in the Upton Digest was not clear. I have attached a proposed list of the twelve trails that will require permits and the number of permits that will be issued per day for each trail. The list will be finalized next month.

Permits can be reserved up to two weeks in advance, and the number of permits available for most trails is substantially higher than the number of Upton Hiking Club members who join your group hikes. Same-day permits can be obtained.

If you have not already done so, you can sign up on our Web site for our weekly newsletter. Doing so will ensure that you get advance notice of any updates to our policies.

Jenny Grieb, Public Relations, Upton Parks Department`
            }
        ],
        questions: [
            {
                id: '186',
                text: 'According to the article, why will permits be required for some trails?',
                options: [
                    '(A) To raise money to maintain the parks',
                    '(B) To encourage visitors to explore park activities other than hiking',
                    '(C) To ensure the trails are not too crowded',
                    '(D) To determine which trails are most frequently used'
                ],
                answer: 'C',
                explanation: '기사에서 가장 많이 사용되는 트레일의 보행자 수를 줄이기 위한 노력의 일환이라고 명시했습니다. 정답은 (C) "트레일이 너무 붐비지 않도록 하기 위해"입니다.'
            },
            {
                id: '187',
                text: 'Why did Mr. Gomes contact the Upton Parks Department?',
                options: [
                    '(A) To request information',
                    '(B) To obtain trail maps',
                    '(C) To apply for a group permit',
                    '(D) To discuss membership options'
                ],
                answer: 'A',
                explanation: 'Mr. Gomes는 허가제가 클럽에 어떤 영향을 미칠지 자세한 정보를 원한다고 언급했습니다. 정답은 (A) "정보 요청"입니다.'
            },
            {
                id: '188',
                text: 'What concern does Mr. Gomes share with the Upton Digest reader?',
                options: [
                    '(A) Too many trails will require permits.',
                    '(B) Last-minute permits may not be available.',
                    '(C) It is expensive to get a hiking permit.',
                    '(D) Overnight permits will be for groups only.'
                ],
                answer: 'B',
                explanation: 'Regina Faroni와 Mr. Gomes 모두 즉흥적인 하이킹을 할 수 없을 것을 우려했습니다. 정답은 (B) "막판 허가를 받지 못할 수 있다"입니다.'
            },
            {
                id: '189',
                text: 'How many permits will likely be offered for most trails?',
                options: [
                    '(A) Fewer than twelve',
                    '(B) Twelve to seventeen',
                    '(C) Eighteen to twenty',
                    '(D) More than twenty'
                ],
                answer: 'D',
                explanation: '이메일에서 대부분의 트레일에서 사용 가능한 허가 수가 17-20명의 클럽 회원 수보다 상당히 많다고 했습니다. 정답은 (D) "20개 이상"입니다.'
            },
            {
                id: '190',
                text: 'According to the second e-mail, what does the newsletter provide?',
                options: [
                    '(A) Articles written by the Upton Hiking Club',
                    '(B) Details about trail conditions',
                    '(C) Information about policy changes',
                    '(D) Access to additional permits'
                ],
                answer: 'C',
                explanation: '이메일에서 뉴스레터를 구독하면 정책 업데이트에 대한 사전 통지를 받을 수 있다고 했습니다. 정답은 (C) "정책 변경에 대한 정보"입니다.'
            }
        ]
    },
    // Questions 191-195: Triple Passage (Reservation + E-mail + E-mail)
    {
        id: 'test8-191-195',
        type: 'Triple',
        passages: [
            {
                id: 'p191-1',
                type: 'RESERVATION',
                title: 'Your Move Vehicle Rental Company',
                content: `Reservation Number: 15288242

Pickup Location: 2833 Centennial Rd., Muncie, IN 47303

Date and Time: October 31, 10:00 A.M.

Drop-off Location: Same as pickup

Date and Time: October 31, 6:30 P.M.

Vehicle Description: 5-meter moving van

If you need to change your reservation, you can do so via your online account until three days before your scheduled pickup. After that point, contact customer support at reservations@yourmove.com. Please include your reservation number in the e-mail subject.`
            },
            {
                id: 'p191-2',
                type: 'E-MAIL',
                content: `To: reservations@yourmove.com
From: selina_os@chestnutmail.com
Date: October 29
Subject: Reservation 15288242

Hello,

I reserved a moving van online and was given an estimated price of $150. However, I mistakenly listed the same location for both pickup and drop-off. I'd like to know if there is a drop-off location closer to my destination in Cumberland. If so, can you please help me update the reservation?

Sincerely,

Selina Osman`
            },
            {
                id: 'p191-3',
                type: 'E-MAIL',
                content: `To: selina_os@chestnutmail.com
From: reservations@yourmove.com
Date: October 30
Subject: RE: Reservation 15288242

Dear Ms. Osman,

We have a rental office just outside Indianapolis, about a ten-minute drive from Cumberland. If that is the drop-off location, you would have about 90 kilometers of driving from the starting point in Muncie. Based on this, we have updated your price estimate as follows.

| Item | Cost |
|---|---|
| Rental: 5-meter moving van for 1 day | $39.99 |
| Rental: wheeled furniture cart | $6.99 |
| Rental: furniture pads (set of 12) | $9.99 |
| Distance: $1.05 per kilometer (90 km est.) | $94.50 |
| Vehicle damage insurance | $19.99 |
| **Total** | **$171.46** |

Please note that this total does not include taxes. The final price may vary based on the actual distance driven and will be calculated once the vehicle is returned to the drop-off location. Until that time, your credit card on file will be charged for the rental equipment only.

Sincerely,

Alistair Muhn
Your Move Vehicle Rental Company`
            }
        ],
        questions: [
            {
                id: '191',
                text: 'When will a vehicle be rented?',
                options: [
                    '(A) On October 28',
                    '(B) On October 29',
                    '(C) On October 30',
                    '(D) On October 31'
                ],
                answer: 'D',
                explanation: '예약서에서 픽업 날짜가 10월 31일이라고 명시되어 있습니다. 정답은 (D) "10월 31일"입니다.'
            },
            {
                id: '192',
                text: 'What can be concluded about Ms. Osman?',
                options: [
                    '(A) She has used the same rental company previously.',
                    '(B) She has been planning a move for a long time.',
                    '(C) She did not read the rental agreement carefully.',
                    '(D) She was unable to change her reservation online.'
                ],
                answer: 'D',
                explanation: 'Ms. Osman은 10월 29일에 이메일을 보냈으며, 예약서에서 예정된 픽업 3일 전까지 온라인으로 변경할 수 있다고 했습니다. 10월 31일 픽업이므로 10월 28일까지 온라인 변경이 가능했지만, 10월 29일에는 이메일로 연락해야 했습니다. 정답은 (D)입니다.'
            },
            {
                id: '193',
                text: 'Who is Mr. Muhn?',
                options: [
                    '(A) A furniture mover',
                    '(B) A vehicle insurance agent',
                    '(C) A reservation agent',
                    '(D) A storage facility manager'
                ],
                answer: 'C',
                explanation: 'Mr. Muhn은 예약 이메일에 응답하고 가격 견적을 업데이트했으므로 예약 담당자입니다. 정답은 (C) "예약 담당자"입니다.'
            },
            {
                id: '194',
                text: 'What is indicated about a furniture cart?',
                options: [
                    '(A) It costs $6.99 per day to rent.',
                    '(B) It does not have to be returned.',
                    '(C) It folds up for easy transport.',
                    '(D) It is part of a set.'
                ],
                answer: 'A',
                explanation: '가격 견적에서 바퀴 달린 가구 카트가 하루에 $6.99라고 명시되어 있습니다. 정답은 (A) "하루에 $6.99에 대여"입니다.'
            },
            {
                id: '195',
                text: 'What is true about the new cost estimate?',
                options: [
                    '(A) It is higher than the original estimate.',
                    '(B) It must be paid in full immediately.',
                    '(C) It includes the cost of fuel.',
                    '(D) It expires in three days.'
                ],
                answer: 'A',
                explanation: '원래 견적은 $150이었지만 새 견적은 $171.46입니다. 정답은 (A) "원래 견적보다 높다"입니다.'
            }
        ]
    },
    // Questions 196-200: Triple Passage (E-mail + E-mail + Web Page)
    {
        id: 'test8-196-200',
        type: 'Triple',
        passages: [
            {
                id: 'p196-1',
                type: 'E-MAIL',
                content: `To: Soon-Yee Kim
From: Frank Zubiri
Date: February 12
Subject: Welcome

Dear Ms. Kim,

Welcome to Jacobi Technologies' sales team! Your first day is Monday, February 28. Please arrive at the Green Building, 1 Jacobi Circle, Naperville, at 9 A.M. Your team supervisor, Sophia Holland, will lead you through your first day. Here is an outline of what to expect.

1. Sign your employment contract and receive an ID badge.

2. Visit your assigned cubicle on the fourth floor of the Yellow Building.

3. Attend a luncheon with members of your team in the Yellow Building conference room.

4. Join other new hires for a guided tour of the campus. Look for an e-mail about this within a few days.

Best regards,

Frank Zubiri
Senior Director, Human Resources`
            },
            {
                id: 'p196-2',
                type: 'E-MAIL',
                content: `To: New Hires Distribution List
From: Toru Hada
Date: February 15
Subject: Campus Tour Dates

The next tour dates are February 21 and 28 and March 7 and 14. To sign up, simply reply to this e-mail with your full name and the date corresponding to your start day. Tours begin at 3:00 P.M. and last about an hour. Please meet me in the Blue Building lobby a few minutes before 3:00 P.M. Note that the Blue Building is on Jacobi Circle between the Green and Yellow Buildings. The tour will include stops at the labs, our sustainable power plant, and all employee amenities.

Should you have any questions about your start day, the tour, or any of the employee onboarding materials, please do not hesitate to contact me.`
            },
            {
                id: 'p196-3',
                type: 'WEB PAGE',
                content: `https://www.jacobitechnologies.com/about

Jacobi Technologies develops, manufactures, and sells advanced microprocessors that power smart TVs, laptop computers, and other electronic devices. The company has more than 8,000 employees in Naperville, Illinois, and another 4,000 in Providence, Rhode Island.

Jacobi Technologies acquired its 900-acre Naperville property in 1950. Since then, the company has invested more than $3 billion in constructing ten Earth-friendly buildings and a sustainable infrastructure, including a waste-to-energy power plant. In addition to state-of-the-art research labs and production facilities, the campus boasts special amenities for workers, including two cafés, a gym, outdoor basketball and tennis courts, and a childcare center.`
            }
        ],
        questions: [
            {
                id: '196',
                text: 'According to the first e-mail, what is one thing that Ms. Kim will do on her first day at work?',
                options: [
                    '(A) Learn to use some company software',
                    '(B) Watch a video for new hires',
                    '(C) Eat a meal with her team',
                    '(D) Receive a laptop computer'
                ],
                answer: 'C',
                explanation: '첫 번째 이메일에서 Ms. Kim은 Yellow Building 회의실에서 팀원들과 오찬에 참석할 것이라고 명시되어 있습니다. 정답은 (C) "팀과 식사"입니다.'
            },
            {
                id: '197',
                text: 'Who most likely is Mr. Hada?',
                options: [
                    '(A) A human resources staff member',
                    '(B) A sales team leader',
                    '(C) A technology expert',
                    '(D) A café worker'
                ],
                answer: 'A',
                explanation: 'Mr. Hada는 신입 사원 투어를 조직하고 온보딩 자료에 대한 질문에 답변하므로 인사 담당자일 가능성이 높습니다. 정답은 (A) "인사 담당 직원"입니다.'
            },
            {
                id: '198',
                text: 'Where will Ms. Kim most likely be at 3 P.M. on February 28?',
                options: [
                    '(A) In her cubicle in the Yellow Building',
                    '(B) In the lobby of the Blue Building',
                    '(C) In the Yellow Building conference room',
                    '(D) In Ms. Holland\'s office'
                ],
                answer: 'B',
                explanation: 'Ms. Kim의 첫 출근일은 2월 28일이며, 투어는 3:00 P.M.에 Blue Building 로비에서 시작합니다. 정답은 (B) "Blue Building 로비"입니다.'
            },
            {
                id: '199',
                text: 'What is suggested about guided tours at Jacobi Technologies?',
                options: [
                    '(A) They are open to both employees and nonemployees.',
                    '(B) They stop at both indoor sites and outdoor sites.',
                    '(C) They last approximately two hours.',
                    '(D) They include a brief talk by a researcher.'
                ],
                answer: 'B',
                explanation: '투어는 연구실, 발전소, 직원 편의시설을 포함하며, 웹 페이지에서 야외 농구장과 테니스 코트가 언급되어 있습니다. 정답은 (B) "실내 및 야외 장소 모두 방문"입니다.'
            },
            {
                id: '200',
                text: 'According to the Web page, what is true about Jacobi Technologies?',
                options: [
                    '(A) It will soon open a childcare facility.',
                    '(B) It acquired the Naperville property ten years ago.',
                    '(C) It charges employees a fee to use the company gym.',
                    '(D) It operates more than one campus.'
                ],
                answer: 'D',
                explanation: '웹 페이지에서 Naperville, Illinois에 8,000명 이상의 직원이 있고 Providence, Rhode Island에 4,000명이 있다고 했으므로 여러 캠퍼스를 운영합니다. 정답은 (D) "하나 이상의 캠퍼스 운영"입니다.'
            }
        ]
    }
];

export default rcPart7Test8;
