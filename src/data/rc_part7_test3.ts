
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

// RC 3회 Part 7 Double & Triple Passages (Questions 176-200)
export const test3PracticeSet: PracticeSet[] = [
    // Questions 176-180 (Double Passage)
    {
        id: "set-176-180",
        type: "Double",
        passages: [
            {
                id: "p176-1",
                type: "SCHEDULE",
                title: "Rambling River Festival - Schedule of Musical Events",
                content: `**Friday, September 8**
| Time | Event |
|---|---|
| 3:30 P.M. | Kirschen |
| 7:00 P.M. | Bethesda Radio Show featuring the Bliss Brothers Band (to be recorded at the Bramley Theater) |

**Saturday, September 9**
| Time | Event |
|---|---|
| 6:30 P.M. | The Rolling Dozen |
| 7:45 P.M. | Jefferson Cage |

All events take place at the Bethesda Park Open Air Stage unless otherwise noted. Feel free to bring picnic blankets.`
            },
            {
                id: "p176-2",
                type: "TEXT MESSAGE",
                content: `From Rambling River Festival, Sep 8, 5:14 A.M.

This afternoon's performance will take place in Cole Hall in anticipation of inclement weather. Bulky items are not allowed, but coat-check service will be available.

This evening's performance is being pushed to 7:30 P.M. The Bethesda Radio Show broadcast will perform during the original time slot instead.

We expect our full Saturday program to take place at the Bethesda Park Open Air Stage.`
            }
        ],
        questions: [
            {
                id: "176",
                text: "Who most originally scheduled to perform at the Bramley Theater?",
                options: [
                    "(A) Johanna Greenblatt",
                    "(B) The Bliss Brothers Band",
                    "(C) The Rolling Dozen",
                    "(D) Jefferson Cage"
                ],
                answer: "A",
                explanation: "일정표에서 Bramley Theater에서 공연하도록 예정된 것은 Bethesda Radio Show featuring the Bliss Brothers Band입니다. 따라서 정답은 (B) 'The Bliss Brothers Band'입니다."
            },
            {
                id: "177",
                text: "What does the schedule suggest about the Rambling River Festival?",
                options: [
                    "(A) It takes place annually.",
                    "(B) It requires a ticket for entry.",
                    "(C) It is held at multiple locations.",
                    "(D) It is mainly an outdoor event."
                ],
                answer: "B",
                explanation: "일정표에서 모든 행사는 Bethesda Park Open Air Stage에서 열리며, 피크닉 담요를 가져오라고 했습니다. 따라서 주로 야외 행사임을 알 수 있습니다. 정답은 (D) '주로 야외 행사이다'입니다."
            },
            {
                id: "178",
                text: "According to the text message, what can audience members do at Cole Hall?",
                options: [
                    "(A) Check coats",
                    "(B) Buy concert tickets",
                    "(C) Pick up a schedule of events",
                    "(D) Bring picnic blankets"
                ],
                answer: "D",
                explanation: "문자 메시지에서 Cole Hall에서는 부피가 큰 물품은 허용되지 않지만 코트 보관 서비스가 제공된다고 명시되어 있습니다. 따라서 정답은 (A) '코트를 맡길 수 있다'입니다."
            },
            {
                id: "179",
                text: "In the text message, the word \"pushed\" in paragraph 2, line 1, is closest in meaning to",
                options: [
                    "(A) moved",
                    "(B) extended",
                    "(C) managed",
                    "(D) promoted"
                ],
                answer: "A",
                explanation: "'pushed'는 문맥상 '연기되다, 미뤄지다'의 의미로 사용되었습니다. 저녁 공연이 7:30 P.M.으로 연기되었다는 의미이므로 정답은 (A) 'moved'입니다."
            },
            {
                id: "180",
                text: "When will Kirschen perform?",
                options: [
                    "(A) At 8:00 P.M. on Friday",
                    "(B) At 2:30 P.M. on Saturday",
                    "(C) At 6:30 P.M. on Saturday",
                    "(D) At 7:30 P.M. on Saturday"
                ],
                answer: "C",
                explanation: "일정표에서 Kirschen은 금요일 3:30 P.M.에 공연 예정이었습니다. 그러나 문자 메시지에서 오후 공연이 Cole Hall로 옮겨졌다고 했으므로, Kirschen은 여전히 금요일에 공연할 것입니다. 정답은 관련 내용을 재확인해야 합니다."
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
                content: `To: Branch Managers
From: Fran Cortez
Subject: Survey results on mobile banking
Date: April 7

Hello all,

Ogden Bank recently conducted a survey of its customers concerning mobile banking. Here are the takeaways:

Over 95 percent of our customers own a mobile device. However, although interest in mobile banking is high, only 70 percent of our customers use our application. Some customers indicated that they would use the app more often if they could deposit checks simply do not think the app works well.

A mandatory meeting for all branch managers will be held at our headquarters on April 12 to discuss how to maximize the app's potential for responding to this challenge.

Best,
Fran Cortez
Director of Mobile Banking, Ogden Bank`
            },
            {
                id: "p181-2",
                type: "ARTICLE",
                title: "Boost for Mobile Banking",
                content: `By Edward Patrizas

FLEMINGTON (May 25)—Ogden Bank has rolled out major improvements to its mobile banking application. It has upgraded the app so that checks can be deposited through the app and made it even easier to use.

"Many of our account holders have been frustrated in the past by a clunky, limited app," says Fran Cortez, manager of the bank's mobile banking division. "Customers can now do just about any task with the app that they could over the phone or by visiting one of our branches," she says. Another example of how we support our customers in any way we can."

According to Ms. DeFresco, in the few weeks since the upgrade, 20 percent of Ogden Bank's customers have started depositing checks and paying bills online. She anticipates that number will rise as more customers learn about the upgrade via the app.

"The convenience made a big difference for me," says Ogden Bank customer Maria Reed, added, "I appreciate the flexibility of being able to do my banking whenever and wherever I want."`
            }
        ],
        questions: [
            {
                id: "181",
                text: "What is one purpose of the e-mail?",
                options: [
                    "(A) To provide information about privacy policies",
                    "(B) To propose a survey of banking habits",
                    "(C) To ask bank staff to test a mobile app",
                    "(D) To invite managers to discuss a problem"
                ],
                answer: "D",
                explanation: "이메일에서 4월 12일에 본사에서 모든 지점 관리자를 위한 필수 회의가 열릴 것이라고 명시했습니다. 이는 문제를 논의하기 위한 것입니다. 따라서 정답은 (D) '관리자들을 초대하여 문제를 논의하기 위해'입니다."
            },
            {
                id: "182",
                text: "According to the e-mail, what percentage of the bank's customers use the mobile app?",
                options: [
                    "(A) 25 percent",
                    "(B) 70 percent",
                    "(C) 78 percent",
                    "(D) 95 percent"
                ],
                answer: "A",
                explanation: "이메일에서 95% 이상의 고객이 모바일 기기를 소유하고 있지만, 70%의 고객만이 앱을 사용한다고 명시되어 있습니다. 따라서 정답은 (B) '70 percent'입니다."
            },
            {
                id: "183",
                text: "In the article, the word \"anticipates\" in paragraph 3, line 4, is closest in meaning to",
                options: [
                    "(A) expects",
                    "(B) waits for",
                    "(C) prepares for",
                    "(D) expects"
                ],
                answer: "C",
                explanation: "'anticipates'는 문맥상 '예상하다, 기대하다'의 의미로 사용되었습니다. 따라서 정답은 (A) 'expects'입니다."
            },
            {
                id: "184",
                text: "Who most likely attended a meeting at Ogden Bank's headquarters on April 12?",
                options: [
                    "(A) Ms. DeFresco",
                    "(B) Ms. DeFresco",
                    "(C) Mr. Baum",
                    "(D) Ms. Reed"
                ],
                answer: "B",
                explanation: "이메일에서 4월 12일에 모든 지점 관리자를 위한 회의가 열린다고 했습니다. Ms. Cortez는 이메일을 보낸 사람이므로 회의에 참석했을 가능성이 높습니다. 정답은 관련 내용을 재확인해야 합니다."
            },
            {
                id: "185",
                text: "What is suggested about Ogden Bank's management?",
                options: [
                    "(A) It prefers that account holders do their banking in person.",
                    "(B) It is considering offering free checking to new account holders.",
                    "(C) It is in the process of hiring more staff.",
                    "(D) It promotes improvements in customer experience."
                ],
                answer: "D",
                explanation: "기사에서 Ogden Bank는 모바일 뱅킹 앱을 대폭 개선하여 고객이 앱을 통해 거의 모든 작업을 수행할 수 있도록 했다고 언급했습니다. 이는 고객 경험 개선을 촉진함을 시사합니다. 따라서 정답은 (D) '고객 경험 개선을 촉진한다'입니다."
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
                type: "NOTICE",
                title: "Attention: Library Members",
                content: `The Westwood Library is excited to announce the start of a book club, which is open to all library members. The club will meet on the last Thursday of each month, from 7:00 to 9:00 P.M. in the Harrison Meeting Room, to discuss a book chosen by one of our professional staff. Fiona Juneau, to June, we will read recently published titles. For more information, visit www.westwoodlibrary.org or speak with the staff at the circulation desk.`
            },
            {
                id: "p186-2",
                type: "WEB PAGE",
                content: `http://www.westwoodlibrary.org/bookclub

We hope you will join us for the book club on the last Thursday of each month at 7:00 P.M.! Below are the titles selected for the first half of the year.

| Month | Title |
|---|---|
| January | Wild Open Range by Jason McDonald |
| February | The Journey of a Song by Lucy Xi |
| March | Due North: Adventures in Alaska's Northern Territory by Isabel Beck |
| April | The Art of Mindful Carpentry by Peter Landers |
| May | Mary Swan: A Legend Before Her Time by Kai Noble |
| June | To Be Announced |`
            },
            {
                id: "p186-3",
                type: "E-MAIL",
                content: `To: Lisa Calle <lcalle@westdmail.com>
From: Gail Frey <gfrey@reynails.com>
Date: March 23
Subject: Book club

Dear Ms. Calle,

I really enjoyed reading the book club yesterday evening. Ms. Beck's book, Due North, is lengthy, and it was a challenge to finish it before the meeting. However, I have to thank you for recommending it because it revived my childhood interest in traveling to Alaska.

The club meeting was packed, and I hardly got to talk to you. We should catch up sometime soon. Perhaps we might try the new French restaurant on Leeper Street. I hear it is amazing and reasonably priced.

Gail Frey`
            }
        ],
        questions: [
            {
                id: "186",
                text: "What is the purpose of the notice?",
                options: [
                    "(A) To highlight some books in the library",
                    "(B) To announce a change in library hours",
                    "(C) To advertise a new service",
                    "(D) To introduce a new librarian"
                ],
                answer: "B",
                explanation: "공지사항에서 Westwood Library가 북클럽을 시작한다고 발표하고 있습니다. 이는 새로운 서비스를 광고하는 것입니다. 따라서 정답은 (C) '새로운 서비스를 광고하기 위해'입니다."
            },
            {
                id: "187",
                text: "What is suggested about the book Wild Open Range?",
                options: [
                    "(A) It is a best-selling title.",
                    "(B) It was published 100 years ago.",
                    "(C) It was published ten years ago.",
                    "(D) It is available at a discount for library members."
                ],
                answer: "A",
                explanation: "공지사항에서 6월까지는 최근 출판된 타이틀을 읽을 것이라고 명시되어 있습니다. Wild Open Range는 1월에 선정되었으므로 최근 출판된 책일 가능성이 높습니다. 정답은 관련 내용을 재확인해야 합니다."
            },
            {
                id: "188",
                text: "What author most likely wrote about a famous person?",
                options: [
                    "(A) Jason McDonald",
                    "(B) Lucy Xi",
                    "(C) Isabel Beck",
                    "(D) Kai Noble"
                ],
                answer: "D",
                explanation: "웹 페이지의 책 제목을 보면 'Mary Swan: A Legend Before Her Time'이 Kai Noble의 저서입니다. 이는 유명한 사람에 대한 책일 가능성이 높습니다. 따라서 정답은 (D) 'Kai Noble'입니다."
            },
            {
                id: "189",
                text: "What can be concluded about Ms. Calle?",
                options: [
                    "(A) She is a library staff member.",
                    "(B) She has written book reviews.",
                    "(C) She recently moved to Alaska.",
                    "(D) She favors historical fiction."
                ],
                answer: "C",
                explanation: "이메일에서 Ms. Frey는 Ms. Calle에게 책을 추천해줘서 감사하다고 언급했습니다. 공지사항에서 책은 전문 직원 중 한 명이 선택한다고 했으므로, Ms. Calle은 도서관 직원일 가능성이 높습니다. 따라서 정답은 (A) '도서관 직원이다'입니다."
            },
            {
                id: "190",
                text: "What does Ms. Frey indicate about the book she read?",
                options: [
                    "(A) It discussed a topic that was unfamiliar to her.",
                    "(B) It had parts that she thought were inaccurate.",
                    "(C) It was too difficult to read in the time available.",
                    "(D) It inspired her to explore an old interest."
                ],
                answer: "B",
                explanation: "이메일에서 Ms. Frey는 Due North가 길어서 회의 전에 끝내기가 어려웠지만, 어린 시절 알래스카 여행에 대한 관심을 되살려줘서 감사하다고 언급했습니다. 따라서 정답은 (D) '오래된 관심사를 탐구하도록 영감을 주었다'입니다."
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
                type: "E-MAIL",
                content: `From: Tatiana Schwartz <contact@georgestreetssweets.co.uk>
To: Alejandro Ordaz <aordaz@woodsidestationery.co.uk>
Date: 28 April
Subject: Confirmation of order number 47892
Attachment: Order receipt

Dear Mr. Ordaz,

Thank you for placing an order with George Street Sweets. This e-mail is to confirm that we have received your request. Your receipt has been attached to this e-mail.

If you have any questions or need to make any changes to your order, please reply to this e-mail. Please note that any changes to your order must be submitted before pickup time. Changes that are submitted less than 48 hours before your scheduled pickup time cannot be accommodated.

As indicated, we are located at 50 George Street. Parking is available next to our shop. If you are unable to pick up your order, we can deliver it to you within 10 kilometres of our shop for a fee of £2.50. Please note that cancellations within 24 hours of your pickup or delivery time will not be refunded.

Sincerely,
Tatiana Schwartz`
            },
            {
                id: "p191-2",
                type: "RECEIPT",
                title: "George Street Sweets",
                content: `Order: 47892
Date of Order: 28 April
Pickup Date and Time: N/A
Delivery Date and Time: 2 May, 11:30 A.M.
Delivery Location: 2 Span Lane, Business Suite 202
Payment Method: Credit Card—Alejandro Ordaz

Customization Instructions: None

| Item | Cost |
|---|---|
| 18-inch round cake (chocolate with vanilla icing) | £32.00 |
| 1 set of candles | £5.00 |
| Gift wrap | £2.50 |
| **Total** | **£39.50** |`
            },
            {
                id: "p191-3",
                type: "E-MAIL",
                content: `From: Alejandro Ordaz <aordaz@woodsidestationery.co.uk>
To: Tatiana Schwartz <contact@georgestreetssweets.co.uk>
Date: 29 April
Subject: RE: Confirmation of order number 47892

Dear Ms. Schwartz,

I received the confirmation e-mail and receipt, and I noticed an error. It seems that the person to whom I spoke on the phone while placing my order did not copy down the message I requested. I specified that I wanted "Happy Retirement!" be written on the cake.

I hope it will still be possible to include this message despite the timing. Please respond to this e-mail to confirm. Also, there will be more guests than I originally expected, so I would like to place an additional order.

If you contact your business again to place an additional order.

Alejandro Ordaz`
            }
        ],
        questions: [
            {
                id: "191",
                text: "What is a policy of George Street Sweets?",
                options: [
                    "(A) Orders cannot be changed.",
                    "(B) Orders placed less than 48 hours before pickup cannot be delivered.",
                    "(C) Pickup times are strictly enforced.",
                    "(D) Orders cannot be refunded within 24 hours of pickup."
                ],
                answer: "A",
                explanation: "첫 번째 이메일에서 픽업 시간 24시간 이내의 취소는 환불되지 않는다고 명시되어 있습니다. 따라서 정답은 (D) '픽업 24시간 이내에는 주문을 환불할 수 없다'입니다."
            },
            {
                id: "192",
                text: "What is suggested about the building at 2 Span Lane?",
                options: [
                    "(A) It has parking spaces behind a bicycle shop.",
                    "(B) It is located within 10 kilometres of George Street Sweets.",
                    "(C) It is a residential apartment building.",
                    "(D) It is a business complex."
                ],
                answer: "B",
                explanation: "영수증에서 배달 장소가 '2 Span Lane, Business Suite 202'라고 명시되어 있습니다. 이는 비즈니스 복합 건물임을 시사합니다. 따라서 정답은 (D) '비즈니스 복합 건물이다'입니다."
            },
            {
                id: "193",
                text: "What can be concluded about the cake?",
                options: [
                    "(A) It will not have icing on it.",
                    "(B) It will have only chocolate icing.",
                    "(C) It was ordered over the phone.",
                    "(D) It contains ice cream."
                ],
                answer: "C",
                explanation: "두 번째 이메일에서 Mr. Ordaz는 전화로 주문할 때 이야기한 사람이 요청한 메시지를 적지 않았다고 언급했습니다. 따라서 케이크는 전화로 주문되었습니다. 정답은 (C) '전화로 주문되었다'입니다."
            },
            {
                id: "194",
                text: "In the second e-mail, what does Mr. Ordaz request?",
                options: [
                    "(A) A full refund",
                    "(B) A discount on an e-mail",
                    "(C) A change to an e-mail",
                    "(D) An additional candle"
                ],
                answer: "B",
                explanation: "두 번째 이메일에서 Mr. Ordaz는 케이크에 'Happy Retirement!' 메시지를 추가해달라고 요청했습니다. 이는 주문 변경입니다. 따라서 정답은 (C) '주문 변경'입니다."
            },
            {
                id: "195",
                text: "What does Mr. Ordaz mention about the event in his e-mail?",
                options: [
                    "(A) It will take place on April 29.",
                    "(B) It will be held at a restaurant.",
                    "(C) Its start time has changed.",
                    "(D) It will be larger than expected."
                ],
                answer: "D",
                explanation: "두 번째 이메일에서 Mr. Ordaz는 원래 예상했던 것보다 더 많은 손님이 올 것이라고 언급했습니다. 따라서 정답은 (D) '예상보다 더 클 것이다'입니다."
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
                type: "E-MAIL",
                content: `To: Undisclosed Recipients
From: Iqbal Grewal <i.grewal@woolflooring.com.au>
Date: 3 June
Subject: Cost-savings survey

Dear Colleagues,

At Woolf Flooring we are looking for ways to reduce day-to-day costs without sacrificing product quality, customer service, or staff morale. To this end, we have created an online survey that can be found at www.surveypoint.com.au/109620. Everyone who has been with the company for at least two years is invited to take part in the survey. You have until 10 June to submit your responses.

The deadline for completing the survey is 10 June. Note that this survey is for recipients of this e-mail only. Please do not forward this e-mail to anyone else. Thank you.

We also want to have outside consultants to review our operations and write a report of their findings. We will share the report with the same colleagues along with this approach to cutting costs; however, we have determined that getting an outside perspective is a worthwhile investment that will likely to save us money in the long run.

Iqbal Grewal, Director of Business Transformation
Woolf Flooring`
            },
            {
                id: "p196-2",
                type: "SURVEY",
                content: `https://www.surveypoint.com.au/109620

Woolf Flooring Cost-Savings Survey

Based on your experience as an employee of Woolf Flooring, please provide one idea for a change that could be implemented to improve productivity and cut costs. Thank you.

Name and role: Beth Mair, sales manager

I have noticed that some employees grab a new pair of disposable gloves every time they return from a break. They could be using the same ones throughout the whole day. By limiting the use of gloves to one pair per day, we could save money. Also, I believe that the use of personal protective items would be easy to implement immediately and would simply require sending a company-wide e-mail to explain it.`
            },
            {
                id: "p196-3",
                type: "REPORT",
                title: "Miyoko Consulting - Woolf Flooring Report Summary",
                content: `Thank you for allowing us to spend the last few weeks reviewing your operations. You should be proud of the efficiency with which your company operates. We have identified four areas where improvements can be made:

1. Employees do not always use wood pallets and other materials as efficiently as possible. Better training time could be dedicated to this.

2. Employees could be more mindful of electricity costs—for instance, turning off all lights when leaving a room.

3. Some materials are ordered from suppliers that are farther away than necessary. Switching to one of these providers could save a considerable amount of money in the long run.

4. More often could be used more than once. For example, personal protective equipment could be used more than once.`
            }
        ],
        questions: [
            {
                id: "196",
                text: "In his e-mail, what does Mr. Grewal indicate about the survey?",
                options: [
                    "(A) It does not have an end date.",
                    "(B) It requires the use of a password.",
                    "(C) It is open to all employees.",
                    "(D) It can be forwarded to others."
                ],
                answer: "A",
                explanation: "이메일에서 회사에 최소 2년 이상 근무한 모든 사람이 설문조사에 참여하도록 초대되었다고 명시되어 있습니다. 따라서 모든 직원에게 열려있지 않습니다. 정답은 관련 내용을 재확인해야 합니다."
            },
            {
                id: "197",
                text: "According to the e-mail, why did Woolf Flooring employees designate a consultant?",
                options: [
                    "(A) The plan to hire consultants",
                    "(B) The way a survey is discussed",
                    "(C) The way a budget report is presented",
                    "(D) The way employee feedback is collected"
                ],
                answer: "D",
                explanation: "이메일에서 Woolf Flooring은 외부 컨설턴트를 고용하여 운영을 검토하고 결과 보고서를 작성하도록 했다고 언급했습니다. 이는 비용 절감 접근 방식과 모순되지만 외부 관점을 얻는 것이 장기적으로 비용을 절약할 가치 있는 투자라고 판단했습니다. 정답은 관련 내용을 재확인해야 합니다."
            },
            {
                id: "198",
                text: "What is indicated about Ms. Mair?",
                options: [
                    "(A) She regularly provides ideas for change.",
                    "(B) She has worked at Woolf Flooring for more than two years.",
                    "(C) She works in the production department.",
                    "(D) She will be helping to collect feedback."
                ],
                answer: "D",
                explanation: "설문조사에서 Ms. Mair는 영업 관리자로 명시되어 있으며, 이메일에서 2년 이상 근무한 사람만 설문조사에 참여할 수 있다고 했으므로, 그녀는 2년 이상 근무했을 가능성이 높습니다. 따라서 정답은 (B) 'Woolf Flooring에서 2년 이상 근무했다'입니다."
            },
            {
                id: "199",
                text: "In the survey, what does Ms. Mair note about her suggestion?",
                options: [
                    "(A) It may require some new equipment.",
                    "(B) It was received well at other companies.",
                    "(C) It could be implemented right away.",
                    "(D) It has been suggested to management before."
                ],
                answer: "A",
                explanation: "설문조사에서 Ms. Mair는 하루에 일회용 장갑 한 켤레로 제한하면 비용을 절약할 수 있으며, 이 정책은 즉시 시행하기 쉬울 것이라고 언급했습니다. 회사 전체 이메일을 보내 설명하기만 하면 된다고 했습니다. 따라서 정답은 (C) '즉시 시행할 수 있다'입니다."
            },
            {
                id: "200",
                text: "What recommendation made by Miyoko Consulting corresponds with Ms. Mair's suggestion?",
                options: [
                    "(A) Recommendation 1",
                    "(B) Recommendation 2",
                    "(C) Recommendation 3",
                    "(D) Recommendation 4"
                ],
                answer: "C",
                explanation: "Ms. Mair의 제안은 일회용 장갑 사용을 하루에 한 켤레로 제한하는 것입니다. Miyoko Consulting의 보고서에서 Recommendation 4는 개인 보호 장비를 한 번 이상 사용할 수 있다고 언급했습니다. 따라서 정답은 (D) 'Recommendation 4'입니다."
            }
        ]
    }
];
