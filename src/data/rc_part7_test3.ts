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
                docType: "SCHEDULE",
                title: "Rambling River Festival - Schedule of Musical Events",
                content: `**Friday, September 8**\n| Time | Event |\n|---|---|\n| 3:30 P.M. | Kirschen |\n| 7:00 P.M. | Bethesda Radio Show featuring the Bliss Brothers Band (to be recorded at the Bramley Theater) |\n\n**Saturday, September 9**\n| Time | Event |\n|---|---|\n| 6:30 P.M. | The Rolling Dozen |\n| 7:45 P.M. | Jefferson Cage |\n\nAll events take place at the Bethesda Park Open Air Stage unless otherwise noted. Feel free to bring picnic blankets.`
            },
            {
                id: "p7-t3-s11-p2",
                contextType: "P7",
                docType: "TEXT_MESSAGE",
                content: `From Rambling River Festival, Sep 8, 5:14 A.M.\n\nThis afternoon's performance will take place in Cole Hall in anticipation of inclement weather. Bulky items are not allowed, but coat-check service will be available.\n\nThis evening's performance is being pushed to 7:30 P.M. The Bethesda Radio Show broadcast will perform during the original time slot instead.\n\nWe expect our full Saturday program to take place at the Bethesda Park Open Air Stage.`
            }
        ],
        questions: [
            {
                id: "p7-t3-q176",
                questionNo: 176,
                text: "Who was originally scheduled to perform at the Bramley Theater?",
                options: {
                    "A": "Johanna Greenblatt",
                    "B": "The Bliss Brothers Band",
                    "C": "The Rolling Dozen",
                    "D": "Jefferson Cage"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "일정표에서 Bramley Theater에서 공연하도록 예정된 것은 Bethesda Radio Show featuring the Bliss Brothers Band입니다. 따라서 정답은 (B) 'The Bliss Brothers Band'입니다."
            },
            {
                id: "p7-t3-q177",
                questionNo: 177,
                text: "What does the schedule suggest about the Rambling River Festival?",
                options: {
                    "A": "It takes place annually.",
                    "B": "It requires a ticket for entry.",
                    "C": "It is held at multiple locations.",
                    "D": "It is mainly an outdoor event."
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                explanation: "일정표에서 모든 행사는 Bethesda Park Open Air Stage에서 열리며, 피크닉 담요를 가져오라고 했습니다. 따라서 주로 야외 행사임을 알 수 있습니다. 정답은 (D) '주로 야외 행사이다'입니다."
            },
            {
                id: "p7-t3-q178",
                questionNo: 178,
                text: "According to the text message, what can audience members do at Cole Hall?",
                options: {
                    "A": "Check coats",
                    "B": "Buy concert tickets",
                    "C": "Pick up a schedule of events",
                    "D": "Bring picnic blankets"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "문자 메시지에서 Cole Hall에서는 부피가 큰 물품은 허용되지 않지만 코트 보관 서비스가 제공된다고 명시되어 있습니다. 따라서 정답은 (A) '코트를 맡길 수 있다'입니다."
            },
            {
                id: "p7-t3-q179",
                questionNo: 179,
                text: "In the text message, the word \"pushed\" in paragraph 2, line 1, is closest in meaning to",
                options: {
                    "A": "moved",
                    "B": "extended",
                    "C": "managed",
                    "D": "promoted"
                },
                correctAnswer: "A",
                classification: "P7_VOCABULARY",
                explanation: "'pushed'는 문맥상 '연기되다, 미뤄지다'의 의미로 사용되었습니다. 저녁 공연이 7:30 P.M.으로 연기되었다는 의미이므로 정답은 (A) 'moved'입니다."
            },
            {
                id: "p7-t3-q180",
                questionNo: 180,
                text: "When will Kirschen perform?",
                options: {
                    "A": "At 3:30 P.M. on Friday",
                    "B": "At 7:00 P.M. on Friday",
                    "C": "At 7:30 P.M. on Friday",
                    "D": "At 3:30 P.M. on Saturday"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "일정표에서 Kirschen은 금요일 3:30 P.M.에 공연 예정이었습니다. 문자 메시지에서 오후 공연 장소가 Cole Hall로 변경되었을 뿐 시간은 바뀌지 않았으므로 정답은 (A)입니다."
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
                docType: "EMAIL",
                content: `To: Branch Managers\nFrom: Fran Cortez\nSubject: Survey results on mobile banking\nDate: April 7\n\nHello all,\n\nOgden Bank recently conducted a survey of its customers concerning mobile banking. Here are the takeaways:\n\nOver 95 percent of our customers own a mobile device. However, although interest in mobile banking is high, only 70 percent of our customers use our application. Some customers indicated that they would use the app more often if they could deposit checks simply do not think the app works well.\n\nA mandatory meeting for all branch managers will be held at our headquarters on April 12 to discuss how to maximize the app's potential for responding to this challenge.\n\nBest,\nFran Cortez\nDirector of Mobile Banking, Ogden Bank`
            },
            {
                id: "p7-t3-s12-p2",
                contextType: "P3",
                docType: "ARTICLE",
                title: "Boost for Mobile Banking",
                content: `By Edward Patrizas\n\nFLEMINGTON (May 25)—Ogden Bank has rolled out major improvements to its mobile banking application. It has upgraded the app so that checks can be deposited through the app and made it even easier to use.\n\n"Many of our account holders have been frustrated in the past by a clunky, limited app," says Fran Cortez, manager of the bank's mobile banking division. "Customers can now do just about any task with the app that they could over the phone or by visiting one of our branches," she says. Another example of how we support our customers in any way we can."\n\nAccording to Ms. DeFresco, in the few weeks since the upgrade, 20 percent of Ogden Bank's customers have started depositing checks and paying bills online. She anticipates that number will rise as more customers learn about the upgrade via the app.\n\n"The convenience made a big difference for me," says Ogden Bank customer Maria Reed, added, "I appreciate the flexibility of being able to do my banking whenever and wherever I want."`
            }
        ],
        questions: [
            {
                id: "p7-t3-q181",
                questionNo: 181,
                text: "What is one purpose of the e-mail?",
                options: {
                    "A": "To provide information about privacy policies",
                    "B": "To propose a survey of banking habits",
                    "C": "To ask bank staff to test a mobile app",
                    "D": "To invite managers to discuss a problem"
                },
                correctAnswer: "D",
                classification: "P7_PURPOSE",
                explanation: "이메일에서 4월 12일에 본사에서 모든 지점 관리자를 위한 필수 회의가 열릴 것이라고 명시했습니다. 이는 문제를 논의하기 위한 것입니다. 따라서 정답은 (D) '관리자들을 초대하여 문제를 논의하기 위해'입니다."
            },
            {
                id: "p7-t3-q182",
                questionNo: 182,
                text: "According to the e-mail, what percentage of the bank's customers use the mobile app?",
                options: {
                    "A": "25 percent",
                    "B": "70 percent",
                    "C": "78 percent",
                    "D": "95 percent"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "이메일에서 95% 이상의 고객이 모바일 기기를 소유하고 있지만, 70%의 고객만이 앱을 사용한다고 명시되어 있습니다. 따라서 정답은 (B) '70 percent'입니다."
            },
            {
                id: "p7-t3-q183",
                questionNo: 183,
                text: "In the article, the word \"anticipates\" in paragraph 3, line 4, is closest in meaning to",
                options: {
                    "A": "expects",
                    "B": "waits for",
                    "C": "prepares for",
                    "D": "expects"
                },
                correctAnswer: "A",
                classification: "P7_VOCABULARY",
                explanation: "'anticipates'는 문맥상 '예상하다, 기대하다'의 의미로 사용되었습니다. 따라서 정답은 (A) 'expects'입니다."
            },
            {
                id: "p7-t3-q184",
                questionNo: 184,
                text: "Who most likely attended a meeting at Ogden Bank's headquarters on April 12?",
                options: {
                    "A": "Fran Cortez",
                    "B": "Edward Patrizas",
                    "C": "Maria Reed",
                    "D": "A branch manager"
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                explanation: "이메일에서 4월 12일에 '모든 지점 관리자(all branch managers)'를 위한 필수 회의가 열린다고 했습니다. 따라서 선택지 중 지점 관리자가 참석했을 것임을 알 수 있습니다. 정답은 (D)입니다."
            },
            {
                id: "p7-t3-q185",
                questionNo: 185,
                text: "What is suggested about Ogden Bank's management?",
                options: {
                    "A": "It prefers that account holders do their banking in person.",
                    "B": "It is considering offering free checking to new account holders.",
                    "C": "It is in the process of hiring more staff.",
                    "D": "It promotes improvements in customer experience."
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                explanation: "기사에서 Ogden Bank는 모바일 뱅킹 앱을 대폭 개선하여 고객이 앱을 통해 거의 모든 작업을 수행할 수 있도록 했다고 언급했습니다. 이는 고객 경험 개선을 촉진함을 시사합니다. 따라서 정답은 (D) '고객 경험 개선을 촉진한다'입니다."
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
                docType: "NOTICE",
                title: "Attention: Library Members",
                content: `The Westwood Library is excited to announce the start of a book club, which is open to all library members. The club will meet on the last Thursday of each month, from 7:00 to 9:00 P.M. in the Harrison Meeting Room, to discuss a book chosen by one of our professional staff. Fiona Juneau, to June, we will read recently published titles. For more information, visit www.westwoodlibrary.org or speak with the staff at the circulation desk.`
            },
            {
                id: "p7-t3-s13-p2",
                contextType: "P4",
                docType: "WEB_PAGE",
                content: `http://www.westwoodlibrary.org/bookclub\n\nWe hope you will join us for the book club on the last Thursday of each month at 7:00 P.M.! Below are the titles selected for the first half of the year.\n\n| Month | Title |\n|---|---|\n| January | Wild Open Range by Jason McDonald |\n| February | The Journey of a Song by Lucy Xi |\n| March | Due North: Adventures in Alaska's Northern Territory by Isabel Beck |\n| April | The Art of Mindful Carpentry by Peter Landers |\n| May | Mary Swan: A Legend Before Her Time by Kai Noble |\n| June | To Be Announced |`
            },
            {
                id: "p7-t3-s13-p3",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Lisa Calle <lcalle@westdmail.com>\nFrom: Gail Frey <gfrey@reynails.com>\nDate: March 23\nSubject: Book club\n\nDear Ms. Calle,\n\nI really enjoyed reading the book club yesterday evening. Ms. Beck's book, Due North, is lengthy, and it was a challenge to finish it before the meeting. However, I have to thank you for recommending it because it revived my childhood interest in traveling to Alaska.\n\nThe club meeting was packed, and I hardly got to talk to you. We should catch up sometime soon. Perhaps we might try the new French restaurant on Leeper Street. I hear it is amazing and reasonably priced.\n\nGail Frey`
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
                    "C": "To advertise a new service",
                    "D": "To introduce a new librarian"
                },
                correctAnswer: "C",
                classification: "P7_PURPOSE",
                explanation: "공지사항에서 Westwood Library가 북클럽을 시작한다고 발표하고 있습니다. 이는 새로운 서비스를 광고하는 것입니다. 따라서 정답은 (C) '새로운 서비스를 광고하기 위해'입니다."
            },
            {
                id: "p7-t3-q187",
                questionNo: 187,
                text: "What is suggested about the book Wild Open Range?",
                options: {
                    "A": "It is a recently published title.",
                    "B": "It was published 100 years ago.",
                    "C": "It was published ten years ago.",
                    "D": "It is available at a discount for library members."
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                explanation: "공지사항에서 1월부터 6월까지는 최근 출판된 타이틀(recently published titles)을 읽을 것이라고 명시되어 있습니다. Wild Open Range는 1월에 선정되었으므로 최근 출판된 책입니다. 정답은 (A)입니다."
            },
            {
                id: "p7-t3-q188",
                questionNo: 188,
                text: "What author most likely wrote about a famous person?",
                options: {
                    "A": "Jason McDonald",
                    "B": "Lucy Xi",
                    "C": "Isabel Beck",
                    "D": "Kai Noble"
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                explanation: "웹 페이지의 책 제목을 보면 'Mary Swan: A Legend Before Her Time'이 Kai Noble의 저서입니다. 'A Legend'라는 표현으로 보아 유명한 인물에 대한 전기임을 알 수 있습니다. 따라서 정답은 (D) 'Kai Noble'입니다."
            },
            {
                id: "p7-t3-q189",
                questionNo: 189,
                text: "What can be concluded about Ms. Calle?",
                options: {
                    "A": "She is a library staff member.",
                    "B": "She has written book reviews.",
                    "C": "She recently moved to Alaska.",
                    "D": "She favors historical fiction."
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                explanation: "이메일에서 Ms. Frey는 Ms. Calle에게 책을 추천해줘서 감사하다고 언급했습니다. 공지사항에서 북클럽 도서는 도서관의 전문 직원(professional staff) 중 한 명이 선택한다고 했으므로, Ms. Calle은 도서관 직원임을 알 수 있습니다. 따라서 정답은 (A)입니다."
            },
            {
                id: "p7-t3-q190",
                questionNo: 190,
                text: "What does Ms. Frey indicate about the book she read?",
                options: {
                    "A": "It discussed a topic that was unfamiliar to her.",
                    "B": "It had parts that she thought were inaccurate.",
                    "C": "It was too difficult to read in the time available.",
                    "D": "It inspired her to explore an old interest."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "이메일에서 Ms. Frey는 Due North가 어린 시절 알래스카 여행에 대한 관심을 되살려주었다(revived my childhood interest)고 언급했습니다. 따라서 정답은 (D)입니다."
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
                docType: "EMAIL",
                content: `From: Tatiana Schwartz <contact@georgestreetssweets.co.uk>\nTo: Alejandro Ordaz <aordaz@woodsidestationery.co.uk>\nDate: 28 April\nSubject: Confirmation of order number 47892\nAttachment: Order receipt\n\nDear Mr. Ordaz,\n\nThank you for placing an order with George Street Sweets. This e-mail is to confirm that we have received your request. Your receipt has been attached to this e-mail.\n\nIf you have any questions or need to make any changes to your order, please reply to this e-mail. Please note that any changes to your order must be submitted before pickup time. Changes that are submitted less than 48 hours before your scheduled pickup time cannot be accommodated.\n\nAs indicated, we are located at 50 George Street. Parking is available next to our shop. If you are unable to pick up your order, we can deliver it to you within 10 kilometres of our shop for a fee of £2.50. Please note that cancellations within 24 hours of your pickup or delivery time will not be refunded.\n\nSincerely,\nTatiana Schwartz`
            },
            {
                id: "p7-t3-s14-p2",
                contextType: "P5",
                docType: "RECEIPT",
                title: "George Street Sweets",
                content: `Order: 47892\nDate of Order: 28 April\nPickup Date and Time: N/A\nDelivery Date and Time: 2 May, 11:30 A.M.\nDelivery Location: 2 Span Lane, Business Suite 202\nPayment Method: Credit Card—Alejandro Ordaz\n\nCustomization Instructions: None\n\n| Item | Cost |\n|---|---|\n| 18-inch round cake (chocolate with vanilla icing) | £32.00 |\n| 1 set of candles | £5.00 |\n| Gift wrap | £2.50 |\n| **Total** | **£39.50** |`
            },
            {
                id: "p7-t3-s14-p3",
                contextType: "P1",
                docType: "EMAIL",
                content: `From: Alejandro Ordaz <aordaz@woodsidestationery.co.uk>\nTo: Tatiana Schwartz <contact@georgestreetssweets.co.uk>\nDate: 29 April\nSubject: RE: Confirmation of order number 47892\n\nDear Ms. Schwartz,\n\nI received the confirmation e-mail and receipt, and I noticed an error. It seems that the person to whom I spoke on the phone while placing my order did not copy down the message I requested. I specified that I wanted "Happy Retirement!" be written on the cake.\n\nI hope it will still be possible to include this message despite the timing. Please respond to this e-mail to confirm. Also, there will be more guests than I originally expected, so I would like to place an additional order.\n\nIf you contact your business again to place an additional order.\n\nAlejandro Ordaz`
            }
        ],
        questions: [
            {
                id: "p7-t3-q191",
                questionNo: 191,
                text: "What is a policy of George Street Sweets?",
                options: {
                    "A": "Orders cannot be changed.",
                    "B": "Orders placed less than 48 hours before pickup cannot be delivered.",
                    "C": "Pickup times are strictly enforced.",
                    "D": "Orders cannot be refunded within 24 hours of pickup."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "첫 번째 이메일에서 픽업 또는 배달 시간 24시간 이내의 취소(cancellations within 24 hours)는 환불되지 않는다고 명시되어 있습니다. 따라서 정답은 (D)입니다."
            },
            {
                id: "p7-t3-q192",
                questionNo: 192,
                text: "What is suggested about the building at 2 Span Lane?",
                options: {
                    "A": "It has parking spaces behind a bicycle shop.",
                    "B": "It is located within 10 kilometres of George Street Sweets.",
                    "C": "It is a residential apartment building.",
                    "D": "It is a business complex."
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                explanation: "영수증에서 배달 장소가 '2 Span Lane, Business Suite 202'라고 명시되어 있습니다. 'Business Suite'라는 표현은 이곳이 비즈니스 복합 건물임을 나타냅니다. 정답은 (D)입니다."
            },
            {
                id: "p7-t3-q193",
                questionNo: 193,
                text: "What can be concluded about the cake?",
                options: {
                    "A": "It will not have icing on it.",
                    "B": "It will have only chocolate icing.",
                    "C": "It was ordered over the phone.",
                    "D": "It contains ice cream."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                explanation: "두 번째 이메일에서 Mr. Ordaz는 전화로 주문할 때(while placing my order on the phone) 이야기한 사람이 요청한 메시지를 적지 않았다고 언급했습니다. 따라서 케이크는 전화로 주문되었음을 알 수 있습니다."
            },
            {
                id: "p7-t3-q194",
                questionNo: 194,
                text: "In the second e-mail, what does Mr. Ordaz request?",
                options: {
                    "A": "A full refund",
                    "B": "A discount on an order",
                    "C": "A change to an order",
                    "D": "An additional candle"
                },
                correctAnswer: "C",
                classification: "P7_PURPOSE",
                explanation: "두 번째 이메일에서 Mr. Ordaz는 케이크에 메시지를 추가해달라는 것과 주문 수량을 늘리고 싶다는 요청을 했습니다. 이는 기존 주문에 대한 변경 사항입니다. 정답은 (C)입니다."
            },
            {
                id: "p7-t3-q195",
                questionNo: 195,
                text: "What does Mr. Ordaz mention about the event in his e-mail?",
                options: {
                    "A": "It will take place on April 29.",
                    "B": "It will be held at a restaurant.",
                    "C": "Its start time has changed.",
                    "D": "It will be larger than expected."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "두 번째 이메일에서 Mr. Ordaz는 원래 예상했던 것보다 더 많은 손님이 올 것이라고(more guests than I originally expected) 언급했습니다. 따라서 정답은 (D)입니다."
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
                docType: "EMAIL",
                content: `To: Undisclosed Recipients\nFrom: Iqbal Grewal <i.grewal@woolflooring.com.au>\nDate: 3 June\nSubject: Cost-savings survey\n\nDear Colleagues,\n\nAt Woolf Flooring we are looking for ways to reduce day-to-day costs without sacrificing product quality, customer service, or staff morale. To this end, we have created an online survey that can be found at www.surveypoint.com.au/109620. Everyone who has been with the company for at least two years is invited to take part in the survey. You have until 10 June to submit your responses.\n\nThe deadline for completing the survey is 10 June. Note that this survey is for recipients of this e-mail only. Please do not forward this e-mail to anyone else. Thank you.\n\nWe also want to have outside consultants to review our operations and write a report of their findings. We will share the report with the same colleagues along with this approach to cutting costs; however, we have determined that getting an outside perspective is a worthwhile investment that will likely to save us money in the long run.\n\nIqbal Grewal, Director of Business Transformation\nWoolf Flooring`
            },
            {
                id: "p7-t3-s15-p2",
                contextType: "P5",
                docType: "SURVEY",
                content: `https://www.surveypoint.com.au/109620\n\nWoolf Flooring Cost-Savings Survey\n\nBased on your experience as an employee of Woolf Flooring, please provide one idea for a change that could be implemented to improve productivity and cut costs. Thank you.\n\nName and role: Beth Mair, sales manager\n\nI have noticed that some employees grab a new pair of disposable gloves every time they return from a break. They could be using the same ones throughout the whole day. By limiting the use of gloves to one pair per day, we could save money. Also, I believe that the use of personal protective items would be easy to implement immediately and would simply require sending a company-wide e-mail to explain it.`
            },
            {
                id: "p7-t3-s15-p3",
                contextType: "P3",
                docType: "REPORT",
                title: "Miyoko Consulting - Woolf Flooring Report Summary",
                content: `Thank you for allowing us to spend the last few weeks reviewing your operations. You should be proud of the efficiency with which your company operates. We have identified four areas where improvements can be made:\n\n1. Employees do not always use wood pallets and other materials as efficiently as possible. Better training time could be dedicated to this.\n\n2. Employees could be more mindful of electricity costs—for instance, turning off all lights when leaving a room.\n\n3. Some materials are ordered from suppliers that are farther away than necessary. Switching to one of these providers could save a considerable amount of money in the long run.\n\n4. More often could be used more than once. For example, personal protective equipment could be used more than once.`
            }
        ],
        questions: [
            {
                id: "p7-t3-q196",
                questionNo: 196,
                text: "In his e-mail, what does Mr. Grewal indicate about the survey?",
                options: {
                    "A": "It has a specific deadline for completion.",
                    "B": "It requires the use of a password.",
                    "C": "It is open to all employees.",
                    "D": "It can be forwarded to others."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "이메일에서 설문조사 제출 기한이 6월 10일까지라고 두 번이나 명시되어 있습니다. 따라서 정답은 (A)입니다."
            },
            {
                id: "p7-t3-q197",
                questionNo: 197,
                text: "According to the e-mail, why did Woolf Flooring hire a consultant?",
                options: {
                    "A": "To hire new employees",
                    "B": "To discuss a survey",
                    "C": "To write a budget report",
                    "D": "To get an outside perspective"
                },
                correctAnswer: "D",
                classification: "P7_PURPOSE",
                explanation: "이메일에서 외부의 관점(getting an outside perspective)을 얻는 것이 장기적으로 비용을 절약할 수 있는 가치 있는 투자라고 판단하여 컨설턴트를 고용했다고 언급했습니다."
            },
            {
                id: "p7-t3-q198",
                questionNo: 198,
                text: "What is indicated about Ms. Mair?",
                options: {
                    "A": "She regularly provides ideas for change.",
                    "B": "She has worked at Woolf Flooring for more than two years.",
                    "C": "She works in the production department.",
                    "D": "She will be helping to collect feedback."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                explanation: "이메일에서 최소 2년 이상 근무한 직원(at least two years)만 설문조사에 참여할 수 있다고 했으며, Ms. Mair는 설문에 응답했으므로 2년 이상 근무했음을 알 수 있습니다."
            },
            {
                id: "p7-t3-q199",
                questionNo: 199,
                text: "In the survey, what does Ms. Mair note about her suggestion?",
                options: {
                    "A": "It may require some new equipment.",
                    "B": "It was received well at other companies.",
                    "C": "It could be implemented right away.",
                    "D": "It has been suggested to management before."
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "설문조사에서 Ms. Mair는 그녀의 제안이 즉시 시행하기 쉬울 것(easy to implement immediately)이라고 언급했습니다. 정답은 (C)입니다."
            },
            {
                id: "p7-t3-q200",
                questionNo: 200,
                text: "What recommendation made by Miyoko Consulting corresponds with Ms. Mair's suggestion?",
                options: {
                    "A": "Recommendation 1",
                    "B": "Recommendation 2",
                    "C": "Recommendation 3",
                    "D": "Recommendation 4"
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                explanation: "Ms. Mair는 일회용 장갑(보호 장구)을 재사용하자고 제안했고, 컨설턴트 보고서의 4번 권고안 역시 개인 보호 장비(personal protective equipment)를 한 번 이상 사용할 수 있다고 언급했습니다. 따라서 정답은 (D)입니다."
            }
        ]
    }
];
