import { PracticeSet } from './rc_part7_types';

export const test3PracticeSet: PracticeSet[] = [
    // Questions 176-180 (Double Passage)
    {
        id: "p7-t3-set11",
        questionRange: "176-180",
        setType: "Double",
        passages: [
            {
                id: "p7-t3-s11-p1",
                contextType: "P5",
                type: "schedule",
                content: `Rambling River Festival
Schedule of Musical Events

**Friday, September 8**
* 3:30 P.M. Johanna Greenblatt
* 8:00 P.M. Bethesda Radio Show featuring the Blass Brothers Band (to be recorded at the Bramley Theater)

**Saturday, September 9**
* 6:30 P.M. The Rolling Dozen
* 7:45 P.M. Jefferson Cage

All events take place at the Bethesda Park Open-Air Stage unless otherwise noted. Feel free to bring picnic blankets.`
            },
            {
                id: "p7-t3-s11-p2",
                contextType: "P7",
                type: "text_message",
                content: `From: Rambling River Festival
Date: Sep 8, 9:14 A.M.

This afternoon's performance will take place in Cole Hall in anticipation of inclement weather. Bulky items are not allowed, but coat-check service will be available.

This evening's performance is being pushed to 2:30 P.M. tomorrow; local band Kirschau will perform during the original time slot instead.

We expect our full Saturday program to take place at the Bethesda Park Open-Air Stage.`
            }
        ],
        questions: [
            {
                id: "p7-t3-q176",
                questionNo: 176,
                text: "Who was originally scheduled to perform at the Bramley Theater?",
                options: {
                    "A": "Johanna Greenblatt",
                    "B": "The Blass Brothers Band",
                    "C": "The Rolling Dozen",
                    "D": "Jefferson Cage"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                translation: "원래 Bramley Theater에서 공연하기로 예정되었던 사람은 누구인가?",
                explanation: "일정표에서 금요일 오후 8시 공연인 'Bethesda Radio Show featuring the Blass Brothers Band'가 Bramley Theater에서 녹화될 예정이라고 명시되어 있습니다."
            },
            {
                id: "p7-t3-q177",
                questionNo: 177,
                text: "What does the schedule suggest about the Rambling River Festival?",
                options: {
                    "A": "It takes place annually.",
                    "B": "It requires a ticket for entry.",
                    "C": "It features local food vendors.",
                    "D": "It is mainly an outdoor event."
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                translation: "일정표는 Rambling River Festival에 대해 무엇을 암시하는가?",
                explanation: "공연이 별도의 공지가 없는 한 '야외 무대(Open-Air Stage)'에서 열리며 '피크닉 담요(picnic blankets)'를 가져와도 좋다는 내용에서 주로 야외 행사임을 알 수 있습니다."
            },
            {
                id: "p7-t3-q178",
                questionNo: 178,
                text: "According to the text message, what can audience members do at Cole Hall?",
                options: {
                    "A": "Check coats",
                    "B": "Store bulky items",
                    "C": "Buy concert tickets",
                    "D": "Pick up a schedule of events"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                translation: "문자 메시지에 따르면, 관객들이 Cole Hall에서 할 수 있는 것은 무엇인가?",
                explanation: "문자 메시지에서 '부피가 큰 물건은 허용되지 않지만, 코트 보관 서비스(coat-check service)는 이용 가능하다'고 했습니다."
            },
            {
                id: "p7-t3-q179",
                questionNo: 179,
                text: "In the text message, the word \"pushed\" in paragraph 2, line 1, is closest in meaning to",
                options: {
                    "A": "moved",
                    "B": "extended",
                    "C": "managed",
                    "D": "pressured"
                },
                correctAnswer: "A",
                classification: "P7_VOCABULARY",
                translation: "문자 메시지의 두 번째 단락 첫 번째 줄에 있는 'pushed'와 의미상 가장 가까운 단어는?",
                explanation: "문맥상 공연 시간이 내일 오후 2시 30분으로 '변경(moved/postponed)'되었다는 의미입니다."
            },
            {
                id: "p7-t3-q180",
                questionNo: 180,
                text: "When will Kirschau perform?",
                options: {
                    "A": "At 3:30 P.M. on Friday",
                    "B": "At 8:00 P.M. on Friday",
                    "C": "At 2:30 P.M. on Saturday",
                    "D": "At 6:30 P.M. on Saturday"
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                translation: "Kirschau는 언제 공연하는가?",
                explanation: "문자 메시지에서 '오늘 저녁 공연은 내일로 미뤄지고, 현지 밴드인 Kirschau가 원래 시간대(original time slot)에 대신 공연한다'고 했습니다. 기존 일정표의 오늘 저녁(금요일) 공연 시간은 오후 8시였습니다."
            }
        ]
    },
    // Questions 181-185 (Double Passage)
    {
        id: "p7-t3-set12",
        questionRange: "181-185",
        setType: "Double",
        passages: [
            {
                id: "p7-t3-s12-p1",
                contextType: "P1",
                type: "email",
                content: `To: All Branch Managers
From: Fran Corliss
Subject: Survey results on mobile banking
Date: April 7

Hello all,

Ogden Bank recently conducted a survey of its customers concerning mobile banking. Here are some key takeaways.

Over 95 percent of our customers own a mobile device. However, although interest in mobile banking is high, only 39 percent of our customers use our application. Some customers cite security concerns (23 percent), but a majority (78 percent) say that they simply do not think the app works well.

A mandatory meeting for all branch managers will be held at our headquarters on April 12 at 4:00 P.M. to brainstorm strategies for responding to this challenge.

Best,

Fran Corliss
Director of Mobile Banking, Ogden Bank`
            },
            {
                id: "p7-t3-s12-p2",
                contextType: "P3",
                type: "article",
                header: {
                    headline: "Boost for Mobile Banking",
                    author: "By Edward Panzius",
                    date: "FLEMINGTON (May 25)"
                },
                content: [
                    "Ogden Bank has rolled out major improvements to its mobile banking application. It has expanded the variety of tasks that can be accomplished through the app and made it much easier to use.",
                    "\"Many of our account holders have been frustrated in the past by a clunky, limited app,\" said Alys DeFreese, manager of the Flemington branch of Ogden Bank. \"They can now do just about any task with the app that they could over the phone or by visiting a branch in person. This is just another example of how we support our customers in any way we can.\"",
                    "According to Ms. DeFreese, in the few weeks since the upgrade, 20 percent of account holders have switched to depositing checks and paying bills online. She anticipates that number will rise as more customers learn about the easy-to-use app.",
                    "\"The convenience made a big difference for me,\" said account holder Yair Baum. Another customer, Maria Reed, added, \"I appreciate the flexibility of being able to do my banking whenever and wherever I want.\""
                ]
            }
        ],
        questions: [
            {
                id: "p7-t3-q181",
                questionNo: 181,
                text: "What is one purpose of the e-mail?",
                options: {
                    "A": "To provide details on a new privacy policy",
                    "B": "To propose a survey of banking habits",
                    "C": "To ask bank staff to test a mobile app",
                    "D": "To inform managers of a company problem"
                },
                correctAnswer: "D",
                classification: "P7_PURPOSE",
                translation: "이메일의 목적 중 하나는 무엇인가?",
                explanation: "이메일 설명에서 앱 사용률이 저조하며 대다수 고객이 앱 성능에 불만을 가지고 있다는 점을 언급하며, 이를 해결하기 위한 전략 회의를 소집하고 있습니다."
            },
            {
                id: "p7-t3-q182",
                questionNo: 182,
                text: "According to the e-mail, what percentage of the bank's customers use the mobile app?",
                options: {
                    "A": "23 percent",
                    "B": "39 percent",
                    "C": "78 percent",
                    "D": "95 percent"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                translation: "이메일에 따르면, 은행 고객 중 모바일 앱을 사용하는 비율은 몇 퍼센트인가?",
                explanation: "이메일에서 '고객의 95% 이상이 모바일 기기를 소유하고 있지만, 오직 39%(only 39 percent)만이 앱을 사용한다'고 명시했습니다."
            },
            {
                id: "p7-t3-q183",
                questionNo: 183,
                text: "In the article, the word \"anticipates\" in paragraph 3, line 5, is closest in meaning to",
                options: {
                    "A": "considers",
                    "B": "waits for",
                    "C": "prepares for",
                    "D": "expects"
                },
                correctAnswer: "D",
                classification: "P7_VOCABULARY",
                translation: "기사의 세 번째 단락 5번째 줄에 있는 'anticipates'와 의미상 가장 가까운 단어는?",
                explanation: "문맥상 수치가 상승할 것으로 '예상/기대(expects)'한다는 의미입니다."
            },
            {
                id: "p7-t3-q184",
                questionNo: 184,
                text: "Who most likely attended a meeting at Ogden Bank headquarters on April 12?",
                options: {
                    "A": "Mr. Panzius",
                    "B": "Ms. DeFreese",
                    "C": "Mr. Baum",
                    "D": "Ms. Reed"
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                translation: "4월 12일 Ogden Bank 본사 회의에 참석했을 가능성이 가장 높은 사람은 누구인가?",
                explanation: "이메일에서 '모든 지점 관리자(all branch managers)'를 대상으로 회의가 열린다고 했는데, 기사에서 Ms. DeFreese는 Flemington 지점의 관리자(manager of the Flemington branch)로 소개되었습니다."
            },
            {
                id: "p7-t3-q185",
                questionNo: 185,
                text: "What is suggested about Ogden Bank's management?",
                options: {
                    "A": "It prefers that account holders do their banking in person.",
                    "B": "It is considering offering free checking to new account holders.",
                    "C": "It is in the process of hiring more staff.",
                    "D": "It prioritizes improvements in customer experience."
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                translation: "Ogden Bank의 경영진에 대해 알 수 있는 것은?",
                explanation: "고객들의 기술적 불만을 해결하기 위해 회의를 열고 앱 기능을 대폭 개선하여 고객 편의를 지원하는 모습에서 고객 경험 개선을 우선시함을 알 수 있습니다."
            }
        ]
    },
    // Questions 186-190 (Triple Passage)
    {
        id: "p7-t3-set13",
        questionRange: "186-190",
        setType: "Triple",
        passages: [
            {
                id: "p7-t3-s13-p1",
                contextType: "P6",
                type: "notice",
                content: `Attention, Library Members

The Westwood Library is excited to announce the start of a book club, which is open to all library members. The club will meet on the last Thursday of each month, from 7:00 to 9:00 P.M. in the Harrison Meeting Room, to discuss a book chosen by one of our professional staff. From January to June, we will read recently published nonfiction works, and from July to December, we will focus on contemporary fiction titles. For more information, visit www.westwoodlibrary.org or speak with the staff at the circulation desk.`
            },
            {
                id: "p7-t3-s13-p2",
                contextType: "P4",
                type: "web_page",
                content: `https://www.westwoodlibrary.org/bookclub

We hope you will join us for the book club on the last Thursday of each month at 7:00 P.M.! Below are the titles selected for the first half of the year.

January: *Wild Open Range* by Jaxon McDonald
February: *The Journey of a Song* by Lucy Xi
March: *Due North: Adventures in Alaska's Northern Territory* by Isabel Beck
April: *The Art of Mindful Carpentry* by Peter Landers
May: *Mary Swan: A Legend Before Her Time* by Kai Noble
June: To Be Announced`
            },
            {
                id: "p7-t3-s13-p3",
                contextType: "P1",
                type: "email",
                content: `To: Lisa Calle <lcalle@worldmail.com>
From: Gail Frey <gfrey@myemail.com>
Date: March 27
Subject: Book club

Dear Ms. Calle,

It was delightful to see you leading the book club yesterday evening. Ms. Beck's Due North is lengthy, and it was a challenge to finish it before the meeting. However, I have to thank you for choosing that book because it revived my childhood interest in traveling to Alaska. In fact, I've already looked up some tours!

The club meeting was packed, and I hardly got to talk to you. We should catch up sometime soon. Perhaps we might try the new French restaurant on Looper Street. I hear it is amazing and reasonably priced.

Sincerely,

Gail Frey`
            }
        ],
        questions: [
            {
                id: "p7-t3-q186",
                questionNo: 186,
                text: "What is the purpose of the notice?",
                options: {
                    "A": "To highlight some books in the library",
                    "B": "To announce a change in library hours",
                    "C": "To promote an activity at the library",
                    "D": "To introduce a new librarian"
                },
                correctAnswer: "C",
                classification: "P7_PURPOSE",
                translation: "공지사항의 목적은 무엇인가?",
                explanation: "공지사항은 도서관 회원들을 대상으로 진행되는 '북클럽(book club)' 활동을 홍보하고 정보를 안내하고 있습니다."
            },
            {
                id: "p7-t3-q187",
                questionNo: 187,
                text: "What is suggested about the book Wild Open Range?",
                options: {
                    "A": "It is a best-selling title.",
                    "B": "It is a work of nonfiction.",
                    "C": "It was published ten years ago.",
                    "D": "It is available at a discount for library members."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                translation: "Wild Open Range에 대해 유추할 수 있는 것은?",
                explanation: "공지사항에서 1월부터 6월까지는 '논픽션(nonfiction works)'을 읽는다고 했고, 웹사이트에서 Wild Open Range는 1월 도서로 선정되었습니다."
            },
            {
                id: "p7-t3-q188",
                questionNo: 188,
                text: "What author most likely wrote about a famous person?",
                options: {
                    "A": "Jaxon McDonald",
                    "B": "Lucy Xi",
                    "C": "Peter Landers",
                    "D": "Kai Noble"
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                translation: "어떤 작가가 유명인에 대해 썼을 가능성이 가장 높은가?",
                explanation: "5월 선정 도서인 Mary Swan: A Legend Before Her Time이라는 제목을 통해 Mary Swan이라는 전설적인 실존 인물에 대한 책임을 유추할 수 있으며, 이 책의 저자는 Kai Noble입니다."
            },
            {
                id: "p7-t3-q189",
                questionNo: 189,
                text: "What can be concluded about Ms. Calle?",
                options: {
                    "A": "She is a library staff member.",
                    "B": "She has written book reviews.",
                    "C": "She is Ms. Frey's supervisor.",
                    "D": "She favors historical fiction."
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                translation: "Ms. Calle에 대해 알 수 있는 것은?",
                explanation: "이메일에서 Ms. Calle이 북클럽을 이끌고(leading) 있는 것을 보았다고 했고, 공지사항에서 북클럽 도서는 '직원(professional staff)' 중 한 명에 의해 선택된다고 언급되었습니다."
            },
            {
                id: "p7-t3-q190",
                questionNo: 190,
                text: "What does Ms. Frey indicate about the book she read?",
                options: {
                    "A": "It discussed a topic that was unfamiliar to her.",
                    "B": "It had parts that she thought were inaccurate.",
                    "C": "It was easy to read in the time available.",
                    "D": "It inspired her to explore an old interest."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                translation: "Ms. Frey는 그녀가 읽은 책에 대해 무엇을 언급했는가?",
                explanation: "이메일에서 '어린 시절 알래스카 여행에 가졌던 관심을 되살아나게 해주었다(revived my childhood interest in traveling to Alaska)'고 감사 인사를 전했습니다."
            }
        ]
    },
    // Questions 191-195 (Triple Passage)
    {
        id: "p7-t3-set14",
        questionRange: "191-195",
        setType: "Triple",
        passages: [
            {
                id: "p7-t3-s14-p1",
                contextType: "P1",
                type: "email",
                content: `From: Tatiana Schwartz <orders@georgestreetssweets.co.uk>
To: Alejandro Ordaz <aordaz@brooksidestationery.co.uk>
Date: 28 April
Subject: Confirmation of order number 47892
Attachment: Order receipt

Dear Mr. Ordaz,

Thank you for placing an order with George Street Sweets. This e-mail is to confirm that we have received your request. Your receipt has been attached to this e-mail.

If you have any questions or need to make any changes to your order, please reply to this message or phone us at (091) 498 0172. Note that we are unable to accommodate order changes that are submitted less than 48 hours before your scheduled pickup time.

If picking up your order, we are located at 29 George Street. Parking is available next door, directly behind Spike's Cycle Shop. We offer delivery to customers within 10 kilometres of our shop for a fee of £2.50. Please note that cancellations within 24 hours of your pickup or delivery time will not be refunded.

Sincerely,

Tatiana Schwartz`
            },
            {
                id: "p7-t3-s14-p2",
                contextType: "P5",
                type: "receipt",
                title: "George Street Sweets",
                content: `Order: 47892
Date of Order: 28 April
Pickup Date and Time: N/A
Delivery Date and Time: 2 May, 11:30 A.M.
Delivery Location: 2 Spen Lane, Business Suite 202
Payment Method: Credit Card—Alejandro Ordaz

Customisation Instructions: None

| Item | Cost |
| :--- | :--- |
| 18-inch round cake (chocolate with vanilla icing) | £32.00 |
| 1 set of candles | £5.00 |
| Delivery | £2.50 |
| **Total** | **£39.50** |`
            },
            {
                id: "p7-t3-s14-p3",
                contextType: "P1",
                type: "email",
                content: `From: Alejandro Ordaz <aordaz@brooksidestationery.co.uk>
To: Tatiana Schwartz <orders@georgestreetssweets.co.uk>
Date: 29 April
Subject: RE: Confirmation of order number 47892

Dear Ms. Schwartz,

I received my order confirmation e-mail and receipt, and I noticed an error. It seems that the person to whom I spoke on the phone while placing my order did not copy down the message I requested. The customisation I specified was that "Happy Retirement" be written on top.

I hope it will still be possible to include this message despite the timing. Please respond to this e-mail to confirm. Also, there will be more guests than I originally expected, so I might contact your business again to place an additional order.

Best,

Alejandro Ordaz`
            }
        ],
        questions: [
            {
                id: "p7-t3-q191",
                questionNo: 191,
                text: "What is a policy of George Street Sweets?",
                options: {
                    "A": "Orders cannot be changed.",
                    "B": "Orders placed less than 48 hours before pickup incur an extra fee.",
                    "C": "Orders must be paid for when they are placed.",
                    "D": "Orders cannot be refunded within 24 hours of pickup."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                translation: "George Street Sweets의 정책은 무엇인가?",
                explanation: "첫 번째 이메일에서 '픽업 또는 배달 시간 24시간 이내의 취소는 환불되지 않는다(cancellations within 24 hours... will not be refunded)'고 명시하고 있습니다."
            },
            {
                id: "p7-t3-q192",
                questionNo: 192,
                text: "What is suggested about the building at 2 Spen Lane?",
                options: {
                    "A": "It has parking spaces behind a bicycle shop.",
                    "B": "It is located within 10 kilometers of George Street Sweets.",
                    "C": "It is a residential apartment building.",
                    "D": "It is owned by Ms. Schwartz."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                translation: "2 Spen Lane에 있는 건물에 대해 알 수 있는 것은?",
                explanation: "첫 번째 이메일에서 샵에서 10km 이내인 경우 배달료가 2.50파운드라고 했고, 영수증에서 배달 장소가 2 Spen Lane이며 배달료(Delivery)가 2.50파운드 청구되었으므로 샵에서 10km 이내임을 알 수 있습니다."
            },
            {
                id: "p7-t3-q193",
                questionNo: 193,
                text: "What can be concluded about the cake?",
                options: {
                    "A": "It has not been paid for yet.",
                    "B": "It will have only chocolate icing.",
                    "C": "It was ordered over the phone.",
                    "D": "It contains ice cream."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                translation: "케이크에 대해 내릴 수 있는 결론은?",
                explanation: "두 번째 이메일에서 '주문하는 동안 전화로 대화했던 사람(the person to whom I spoke on the phone while placing my order)'이라는 언급을 통해 전화로 주문했음을 유추할 수 있습니다."
            },
            {
                id: "p7-t3-q194",
                questionNo: 194,
                text: "In the second e-mail, what does Mr. Ordaz request?",
                options: {
                    "A": "A full refund",
                    "B": "A different flavor",
                    "C": "A response to an e-mail",
                    "D": "An additional candle"
                },
                correctAnswer: "C",
                classification: "P7_PURPOSE",
                translation: "두 번째 이메일에서 Mr. Ordaz가 요청하는 것은?",
                explanation: "이메일에서 '확인을 위해 이 이메일에 답장을 달라(Please respond to this e-mail to confirm)'고 요청하고 있습니다."
            },
            {
                id: "p7-t3-q195",
                questionNo: 195,
                text: "What does Mr. Ordaz mention about the event in his e-mail?",
                options: {
                    "A": "It will take place on April 29.",
                    "B": "It is an anniversary party.",
                    "C": "Its start time has changed.",
                    "D": "It will be larger than expected."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                translation: "Mr. Ordaz는 이메일에서 행사에 대해 무엇을 언급했는가?",
                explanation: "이메일 마지막 부분에서 '원래 예상했던 것보다 손님이 더 많을 것(there will be more guests than I originally expected)'이라고 말했습니다."
            }
        ]
    },
    // Questions 196-200 (Triple Passage)
    {
        id: "p7-t3-set15",
        questionRange: "196-200",
        setType: "Triple",
        passages: [
            {
                id: "p7-t3-s15-p1",
                contextType: "P1",
                type: "email",
                content: `To: Undisclosed Recipients
From: iqbal_grewal@woolfflooring.com.au
Date: 12 June
Subject: Cost-savings survey

Dear Colleagues,

At Woolf Flooring we are looking for ways to reduce day-to-day costs without sacrificing product quality, customer service, or staff morale. To this end, we are seeking input from select staff members in a variety of departments via an online survey that can be found at www.surveyquest.com.au/109820. Everyone who has been chosen to take part in the survey has been with the company for at least ten years and, therefore, is very familiar with our processes.

The deadline for completing the survey is 19 June. Note that this survey is for recipients of this e-mail only. Please do not forward this e-mail to others or post the link to the survey elsewhere.

We also plan to hire outside consultants to review our operations and write a report of their findings. We understand that some colleagues disagree with this approach to cutting costs; however, we have determined that getting an outside perspective is a worthwhile investment that will be likely to save us money in the long run.

Best,

Iqbal Grewal, Director of Business Transformation
Woolf Flooring`
            },
            {
                id: "p7-t3-s15-p2",
                contextType: "P5",
                type: "survey",
                content: `Woolf Flooring Cost-Savings Survey

Based on your experience as an employee of Woolf Flooring, please provide one idea for a change that could be implemented to improve productivity and cut costs. Thank you.

Date: 18 June
Name and role: Beth Mair, sales manager

I have noticed that some employees grab a new pair of disposable gloves every time they return from a break. They could be using the same ones throughout the whole day. By limiting the use of gloves to one pair per day, Woolf Flooring would save thousands of dollars per year. Doing so would also reduce waste. A new policy regarding the use of personal protective items would be easy to implement immediately and would simply require sending a company-wide e-mail to explain it.`
            },
            {
                id: "p7-t3-s15-p3",
                contextType: "P3",
                type: "report",
                content: `Woolf Flooring Report Summary
Miyoko Consulting

Thank you for allowing us to spend the last few weeks reviewing your operations. You will find a detailed expense-reduction report with projected savings in the pages that follow. Here is a list of our main recommendations.

1. Employees do not always use wood stains and other materials as efficiently as possible. More training time could be dedicated to this.

2. Employees could be more mindful of electricity costs—for instance, turning off all lights and machines when not in use.

3. Several Internet service providers are offering special pricing right now. Switching to one of these providers could save a considerable amount of money in the long run.

4. More effort could be made to reuse supplies—for example, some basic personal protective equipment could be used more than once.`
            }
        ],
        questions: [
            {
                id: "p7-t3-q196",
                questionNo: 196,
                text: "In his e-mail, what does Mr. Grewal indicate about the survey?",
                options: {
                    "A": "It does not have an end date.",
                    "B": "It requires the use of a password.",
                    "C": "It can be completed on paper.",
                    "D": "It should not be shared with others."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                translation: "이메일에서 Mr. Grewal은 설문조사에 대해 무엇을 언급했는가?",
                explanation: "이메일에서 '이 이메일을 다른 사람에게 전달하지 말고 설문 링크를 다른 곳에 게시하지 마십시오(Please do not forward this e-mail to others or post the link to the survey elsewhere)'라고 명시했습니다."
            },
            {
                id: "p7-t3-q197",
                questionNo: 197,
                text: "According to the e-mail, what do some Woolf Flooring employees disagree with?",
                options: {
                    "A": "The plan to hire consultants",
                    "B": "The way a survey is structured",
                    "C": "The way a budget report is presented",
                    "D": "The departments selected to provide feedback"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                translation: "이메일에 따르면, 일부 직원들이 동의하지 않는 것은 무엇인가?",
                explanation: "이메일에 '일부 동료들이 이러한 비용 절감 방식(외부 컨설턴트 고용)에 동의하지 않는다는 점을 알고 있다(some colleagues disagree with this approach)'고 언급되었습니다."
            },
            {
                id: "p7-t3-q198",
                questionNo: 198,
                text: "What can be concluded about Ms. Mair?",
                options: {
                    "A": "She regularly provides ideas for change.",
                    "B": "She has worked at Woolf Flooring for many years.",
                    "C": "She will be helping to collect feedback.",
                    "D": "She works in the production department."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                translation: "Ms. Mair에 대해 내릴 수 있는 결론은?",
                explanation: "첫 번째 이메일에서 설문 조사 대상자는 '회사에서 최소 10년 이상 근무한(at least ten years)' 사람들이라고 했습니다. Ms. Mair가 설문에 참여했으므로 그녀는 장기 근속자임을 알 수 있습니다."
            },
            {
                id: "p7-t3-q199",
                questionNo: 199,
                text: "In the survey, what does Ms. Mair note about her suggestion?",
                options: {
                    "A": "It may require some new equipment.",
                    "B": "It has worked well at other companies.",
                    "C": "It could be implemented right away.",
                    "D": "It has been suggested to management before."
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                translation: "설문조사에서 Ms. Mair는 자신의 제안에 대해 무엇이라고 언급했는가?",
                explanation: "Ms. Mair는 그녀의 제안이 '즉시 시행하기 쉬울 것(easy to implement immediately)'이라고 적었습니다."
            },
            {
                id: "p7-t3-q200",
                questionNo: 100,
                text: "What recommendation made by Miyoko Consulting corresponds with Ms. Mair's suggestion?",
                options: {
                    "A": "Recommendation 1",
                    "B": "Recommendation 2",
                    "C": "Recommendation 3",
                    "D": "Recommendation 4"
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                translation: "Miyoko Consulting의 권고안 중 Ms. Mair의 제안과 일치하는 것은?",
                explanation: "Ms. Mair는 일회용 장갑(disposable gloves)을 여러 번 사용하자고 제안했고, 보고서의 4번 권고안에서도 '개인 보호 장비(PPE)를 한 번 이상 사용할 수 있다'며 소모품 재사용을 권장하고 있습니다."
            }
        ]
    }
];
