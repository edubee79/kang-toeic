import { PracticeSet } from './rc_part7_types';

export const test6PracticeSet: PracticeSet[] = [
    // Questions 176-180: Double Passage (Job Advertisement + Email)
    {
        id: "p7-t6-set11",
        questionRange: "176-180",
        setType: "Double",
        passages: [
            {
                id: "p7-t6-s11-p1",
                contextType: "P4",
                docType: "NOTICE",
                header: {
                    title: "BLISSFUL HORSE STABLES"
                },
                content: [
                    "Part-time worker needed to feed, wash, and groom horses. Must be able to work a minimum of eight hours a week, including occasional weekend hours. Although training is available, applicants who have experience working with horses are preferred. To apply, send an e-mail to Dorothy Lu, dlu@blissfulhorsestables.com.au, and attach your résumé.",
                    "Blissful Horse Stables is the region's largest horse-boarding facility. It has been owned and operated by one family since 1988. Our business offers both long- and short-term boarding contracts. We have state-of-the-art indoor and outdoor exercise rings and a five-acre grazing pasture for our equine friends. A veterinarian is always on call."
                ]
            },
            {
                id: "p7-t6-s11-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `From: ota.kyle@opalmail.com.au\nTo: dlu@blissfulhorsestables.com.au\nSubject: Part-time position\nDate: 1 August\nAttachment: @ota.rtf\n\nDear Ms. Lu,\n\nThis e-mail is in response to the advertisement that appeared in yesterday's edition of the Colby Today. At this time, I work for Ness Large Animal Clinic as a technician's assistant, but only three days a week. The part-time position you are advertising would enable me to do something I enjoy while increasing my working hours. I am happy to provide references upon request.\n\nAll the best,\nKyle Ota`
            }
        ],
        questions: [
            {
                id: "p7-t6-q176",
                questionNo: 176,
                text: "What is NOT indicated about Blissful Horse Stables?",
                options: {
                    "A": "It offers riding lessons.",
                    "B": "It requires a minimum stay of three days.",
                    "C": "It has been in business for over 20 years.",
                    "D": "It is a family-run business."
                },
                correctAnswer: "B",
                classification: "P7_NEGATIVE",
                explanation: "지문 1에서 말타기 강습(lessons)을 제공하고, 1988년부터 운영(20년 이상)되었으며, Gandy 가족이 운영(family-run)한다고 명시되어 있으나, 최소 3일 숙박 조건은 언급되지 않았습니다."
            },
            {
                id: "p7-t6-q177",
                questionNo: 177,
                text: "In the advertisement, the word 'facility' is closest in meaning to",
                options: {
                    "A": "simplicity",
                    "B": "expense",
                    "C": "location",
                    "D": "owner"
                },
                correctAnswer: "C",
                classification: "P7_VOCABULARY",
                explanation: "여기서 'facility'는 Blissful Horse Stables라는 장소나 시설을 의미하므로 'location(장소, 지점)'이 문맥상 가장 가깝습니다."
            },
            {
                id: "p7-t6-q178",
                questionNo: 178,
                text: "What most likely is Colby Today?",
                options: {
                    "A": "A regional newspaper",
                    "B": "A newsletter for horse owners",
                    "C": "A Web site",
                    "D": "A tourism brochure"
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                explanation: "이메일에서 '어제자 Colby Today(yesterday's edition of Colby Today)'에 실린 광고를 보았다고 했으므로, Colby Today는 정기적으로 발행되는 신문임을 알 수 있습니다."
            },
            {
                id: "p7-t6-q179",
                questionNo: 179,
                text: "What is implied about Mr. Ora?",
                options: {
                    "A": "He has experience working with animals.",
                    "B": "He graduated from a local school.",
                    "C": "He would like to become a journalist.",
                    "D": "He is not able to work on weekends."
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                explanation: "Mr. Ora는 현재 'New Large Animal Clinic'에서 'technician's assistant'로 일하고 있다고 했으므로, 동물과 함께 일한 경험이 있음을 알 수 있습니다."
            },
            {
                id: "p7-t6-q180",
                questionNo: 180,
                text: "What has Mr. Ora most likely attached to his e-mail?",
                options: {
                    "A": "A diploma",
                    "B": "A résumé",
                    "C": "A letter of reference",
                    "D": "An article about horse care"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "광고에서 지원 시 이력서(résumé)를 첨부하라고 했으며, 이메일에 'orakyle.rtf'라는 파일이 첨부되어 있으므로 이는 그의 이력서일 가능성이 높습니다."
            }
        ]
    },
    // Questions 181-185: Double Passage (Online Form + E-mail)
    {
        id: "p7-t6-set12",
        questionRange: "181-185",
        setType: "Double",
        passages: [
            {
                id: "p7-t6-s12-p1",
                contextType: "P4",
                docType: "WEB_PAGE",
                header: {
                    url: "https://www.pinkferngardens.co.nz/contact",
                    navItems: ["About", "Shop Online", "Locations", "Contact Us"]
                },
                content: [
                    "Located in Picton, New Zealand, Pink Fern Gardens sells a wide variety of plants, both edible and decorative. Please use the form below to submit your questions and comments.",
                    "**Name:** Mia Dixon\n**E-mail:** mdixon@sunmail.co.nz",
                    "**Comment:**\nI saw the callout to local growers on your social media feed. A few years ago, I started a large community food garden with my neighbours here in Helensville for us to tend in our free time. This year, we have more plants than we can consume ourselves. Specifically, we have dozens of potted mint and cardamom seedlings as well as other uncommon herbs, and I wonder if you are interested in expanding your offerings of herbs. We also have a half dozen two-year-old lemon tree saplings that are between two and three feet tall."
                ]
            },
            {
                id: "p7-t6-s12-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: mdixon@sunmail.co.nz\nFrom: purchasing@pinkferngardens.co.nz\nDate: 12 January\nSubject: Your comment\n\nDear Ms. Dixon,\n\nPink Fern Gardens is always seeking uncommon plants. As for your citrus saplings, we are currently purchasing those from licensed growers only. There is a disease affecting certain varieties, so we must be cautious. We learned our lesson regarding this last autumn!\n\nWe do buy other plants from independent growers, as long as the seedlings are potted and market ready. Here are the types of seedlings we buy and the wholesale price we pay for each plant: ferns ($8), vines ($6), annual flowers ($5), and herbs for cooking, especially oregano, mint, and rosemary ($2). Please stop by at your convenience with samples of your offerings, and we can discuss our needs further in person.\n\nKind regards,\nKen Yoneda\nPurchaser, Pink Fern Gardens`
            }
        ],
        questions: [
            {
                id: "p7-t6-q181",
                questionNo: 181,
                text: "What motivated Ms. Dixon to contact Pink Fern Gardens?",
                options: {
                    "A": "A newspaper advertisement",
                    "B": "An online post from Pink Fern Gardens",
                    "C": "An article about Pink Fern Gardens",
                    "D": "A recommendation from a customer"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "Dixon 씨는 Pink Fern Gardens의 '소셜 미디어 피드(social media feed)'에서 지역 재배자 모집 공고를 보았다고 했습니다. 이는 온라인 게시물(online post)에 해당합니다."
            },
            {
                id: "p7-t6-q182",
                questionNo: 182,
                text: "What is indicated about Ms. Dixon?",
                options: {
                    "A": "She is managing a small business with her neighbors.",
                    "B": "She would like a part-time job at Pink Fern Gardens.",
                    "C": "She founded a community garden in Henderson.",
                    "D": "She is the president of a gardening club."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "그녀의 코멘트에서 '이웃들과 함께 화분 식물을 판매하는 소규모 사업을 시작했다(started a small business... with my neighbours)'고 직접 언급했습니다."
            },
            {
                id: "p7-t6-q183",
                questionNo: 183,
                text: "According to Mr. Yoneda, what happened last year?",
                options: {
                    "A": "Some of his employees resigned.",
                    "B": "Some trees his company purchased were unhealthy.",
                    "C": "His company obtained a license to export citrus trees.",
                    "D": "His company ran out of fruit trees to sell."
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "Yoneda 씨의 이메일에서 지난 시즌에 건강하지 않은 나무들을 샀던 일을 통해 교훈을 얻었다(bought some trees that were unhealthy)고 언급했습니다."
            },
            {
                id: "p7-t6-q184",
                questionNo: 184,
                text: "What does Mr. Yoneda ask Ms. Dixon to do?",
                options: {
                    "A": "Send him a list of supplies",
                    "B": "Contact an independent grower",
                    "C": "Inform him if she can supply plants at his prices",
                    "D": "Provide a price quote for Pink Fern Gardens"
                },
                correctAnswer: "C",
                classification: "P7_PURPOSE",
                explanation: "이메일 끝부분에서 제시한 가격대(prices)에 식물을 공급(deliver)할 수 있는지 여부를 알려달라고 요청했습니다."
            },
            {
                id: "p7-t6-q185",
                questionNo: 185,
                text: "How much would Mr. Yoneda pay Ms. Dixon for one of her potted mint seedlings?",
                options: {
                    "A": "$8.00",
                    "B": "$6.00",
                    "C": "$5.00",
                    "D": "$4.00"
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                explanation: "Ms. Dixon은 민트(mint) 묘목을 가지고 있다고 했고, Mr. Yoneda가 제시한 가격표에서 민트는 개당 $6로 책정되어 있습니다."
            }
        ]
    },
    // Questions 186-190: Triple Passage (Web Page + E-mail + Review)
    {
        id: "p7-t6-set13",
        questionRange: "186-190",
        setType: "Triple",
        passages: [
            {
                id: "p7-t6-s13-p1",
                contextType: "P4",
                docType: "WEB_PAGE",
                header: {
                    url: "https://www.elektroproofrepair.com/about"
                },
                content: [
                    "**Trust Elektroproof Repair to get your computer running right again!**",
                    "Elektroproof Repair's no-surprises policy offers flat fees for labor at three price points: $145, $200, and $350. These fees do not include the cost of software or replacement parts. The majority of our repairs incur the $200 fee.",
                    "NOTE: Because of a dramatic increase in demand, we now require appointments for all services. For an initial consultation with one of our highly qualified technicians, simply select from the available time slots on our schedule page. When you schedule your appointment, we require a $60 nonrefundable deposit which will be credited toward the cost of services rendered.",
                    "If you have any questions, please e-mail us at inquiries@elektroproofrepair.com. Whenever possible, we will contact you the same day or on the following business day. Most repairs are completed within three to five business days."
                ]
            },
            {
                id: "p7-t6-s13-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Jessica Nelson <jnelson17@saffronmail.com>\nFrom: Arthur Jacquet <ajacquet@elektroproofrepair.com>\nDate: January 14\nSubject: Re: Tea spill, please help!\n\nDear Ms. Nelson,\n\nThank you for contacting Elektroproof Repair. You asked if you could bring in your laptop for inspection tomorrow, January 15. Unfortunately, we are currently booked solid through January 18. The earliest available time slot is 8:00 A.M. on January 19. Please let me know if you would like to book that slot or if you have any questions.\n\nSincerely,\nArthur Jacquet, Elektroproof Repair`
            },
            {
                id: "p7-t6-s13-p3",
                contextType: "P4",
                docType: "REVIEW",
                header: {
                    url: "https://www.buyertobuyerintel.com/repair_services/electronics/computer_devices",
                    rating: 5
                },
                content: [
                    "I spilled tea on the keyboard of my faithful old laptop, and while I dried the exterior rather quickly, I was afraid the internal components might have been ruined. Luckily for me, Elektroproof Repair came to the rescue! After booking my consultation on the Web site, I waited anxiously for a reply. Within an hour, I got an e-mail directly from the owner. Although the time slot I had requested was not available, when I responded to his e-mail to express how urgently I needed my laptop, the owner said they had an unexpected cancellation and asked if I could bring it in that very morning, which I did. Since my computer was not turned on at the time of the accident, an Elektroproof Repair technician was able to dry the computer's insides and prevent damage to the hard drive or internal circuits. Other than a new battery, no other part was needed, and Elektroproof Repair had my laptop fully functional and back in my hands within 24 hours.",
                    "—Jessica Nelson"
                ]
            }
        ],
        questions: [
            {
                id: "p7-t6-q186",
                questionNo: 186,
                text: "According to the Web page, what is true about Elektroproof Repair?",
                options: {
                    "A": "It recently opened for business.",
                    "B": "It has experienced a sudden increase in business.",
                    "C": "It requires full payment before work can begin.",
                    "D": "It offers free consultations to new customers."
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "웹 페이지의 'NOTE' 섹션에서 '수요의 급격한 증가(dramatic increase in demand)'로 인해 기존 고객만 예약을 받는다고 명시되어 있습니다."
            },
            {
                id: "p7-t6-q187",
                questionNo: 187,
                text: "According to the e-mail, what is the earliest date when Ms. Nelson could bring in her laptop?",
                options: {
                    "A": "On January 15",
                    "B": "On January 31",
                    "C": "On February 1",
                    "D": "On February 3"
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "이메일에서 1월 말까지는 예약이 꽉 찼으며(booked solid), 2월 3일에 빈 시간(opening on February 3)이 있다고 안내하고 있습니다."
            },
            {
                id: "p7-t6-q188",
                questionNo: 188,
                text: "What is most likely true about Mr. Jacquet?",
                options: {
                    "A": "He owns the business.",
                    "B": "He works for Elektroproof Repair.",
                    "C": "He is a regular customer.",
                    "D": "He is Silvia Lau's coworker."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                explanation: "Arthur Jacquet은 이메일에서 서명을 통해 회사 소속임을 밝혔으며, 리뷰에서도 수리 완료 소식을 전화로 전해준 사람으로 언급됩니다."
            },
            {
                id: "p7-t6-q189",
                questionNo: 189,
                text: "According to the review, what was Ms. Lau's main concern about her laptop?",
                options: {
                    "A": "That internal parts might be damaged.",
                    "B": "That it would not be repaired in time.",
                    "C": "That the repair fee was too high.",
                    "D": "That its operating system had a virus."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "리뷰에서 Silvia Lau는 액체를 쏟은 후 '내부 부품이 손상되었을까 봐 걱정했다(afraid the internal components might have been damaged)'고 언급했습니다."
            },
            {
                id: "p7-t6-q190",
                questionNo: 190,
                text: "What is suggested about the repair of Ms. Lau's computer?",
                options: {
                    "A": "It included installing new software.",
                    "B": "It was completed more quickly than expected.",
                    "C": "It involved the replacement of the battery.",
                    "D": "It required an upgrade to the hard drive."
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                explanation: "웹 페이지(지문 1)에는 수리에 3~5일이 걸린다고 되어 있으나, 리뷰(지문 3)에서 24시간 이내에 준비되었다고 했으므로 예상보다 빨리 완료되었음을 알 수 있습니다."
            }
        ]
    },
    // Questions 191-195: Triple Passage (Advertisement + E-mail + Receipt)
    {
        id: "p7-t6-set14",
        questionRange: "191-195",
        setType: "Triple",
        passages: [
            {
                id: "p7-t6-s14-p1",
                contextType: "P4",
                docType: "NOTICE",
                header: {
                    title: "Learn to play guitar at Alexis Instruments!"
                },
                content: [
                    "Alexis Instruments will offer group and individual guitar instruction beginning April 2. Each of our locations has been updated with newly constructed classrooms and practice rooms. Our instructors have years of experience teaching and playing as professional musicians. Call an Alexis Instruments store today for availability and pricing."
                ]
            },
            {
                id: "p7-t6-s14-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Lucia Rivera <luciarivera@rapidonet.com>\nFrom: Krista Towers <ktowers@alexisinstruments.com>\nDate: April 26, 8:30 A.M.\nSubject: Order TS1058293\n\nDear Ms. Rivera,\n\nI am following up on the order you placed with us on April 23. We have only one guitar of the model you want in stock. It was used as a display sample on the floor of our salesroom here in Santa Barbara. This means it is out of the box and has been played by customers browsing the store. Our in-house luthier has thoroughly inspected the guitar, and it is still in excellent condition. There are no scratches, scuffs, or dents on it whatsoever. Because you purchased the instrument on the understanding that it was brand new, we want to offer you two options:\n\n1. If you do not want the floor model, you may cancel the order and receive an immediate full refund.\n2. If you would like the floor model, we will ship it immediately and offer you a 10 percent discount off the original retail price.\n\nIf you choose the latter, we will make sure the guitar is delivered to your local store in time for your first lesson there tomorrow. We apologize for the inconvenience.\n\nSincerely,\nKrista Towers\nAlexis Instruments`
            },
            {
                id: "p7-t6-s14-p3",
                contextType: "P5",
                docType: "TABLE",
                header: {
                    title: "Alexis Instruments",
                    titlePrefix: "Order number: TS1058293",
                    date: "Date: April 26"
                },
                content: [
                    "**Ship To:**\nAlexis Instruments, store #23\n3914 Joseph Drive\nChico, CA 95926",
                    "**Bill To:**\nLucia Rivera\n11437 Shady Grove Lane\nChico, CA 95926"
                ],
                table_data: {
                    headers: ["Description", "Price"],
                    rows: [
                        ["Domingo 313 full-body acoustic guitar", "$450.00"],
                        ["10% discount on guitar", "-$45.00"],
                        ["Three-year repair and maintenance plan, good at any Alexis Instruments location", "$75.00"],
                        ["Sales tax", "$34.80"]
                    ],
                    summary: "Total: $514.80"
                }
            }
        ],
        questions: [
            {
                id: "p7-t6-q191",
                questionNo: 191,
                text: "What is the purpose of the advertisement?",
                options: {
                    "A": "To sell musical instruments",
                    "B": "To promote a new lesson service",
                    "C": "To recruit music teachers",
                    "D": "To offer a trade-in program"
                },
                correctAnswer: "B",
                classification: "P7_PURPOSE",
                explanation: "광고는 기타 연주 교습(guitar instruction)을 시작한다는 부수적인 서비스 개시를 알리고 있습니다."
            },
            {
                id: "p7-t6-q192",
                questionNo: 192,
                text: "What is suggested about the guitar Ms. Rivera ordered?",
                options: {
                    "A": "It is a rare vintage model.",
                    "B": "It was previously used by a teacher.",
                    "C": "It was the only one of its kind at the Santa Barbara store.",
                    "D": "It has some minor surface scratches."
                },
                correctAnswer: "C",
                classification: "P7_LINK",
                explanation: "이메일에서 '재고가 단 하나뿐(only one... in stock)'이며 그것이 산타바바라 쇼룸에 전시되어 있던 것이라고 언급했습니다."
            },
            {
                id: "p7-t6-q193",
                questionNo: 193,
                text: "Where will Ms. Rivera most likely have her first guitar lesson?",
                options: {
                    "A": "In Santa Barbara",
                    "B": "In Chico",
                    "C": "At her home",
                    "D": "Online"
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                explanation: "이메일에서 기타를 '당신의 지역 매장(local store)'으로 보낼 것이라고 했고, 영수증의 배송지가 'Chico' 매장으로 되어 있습니다. 또한 광고에서도 Chico의 Kanga Drive에서 수업이 열린다고 했습니다."
            },
            {
                id: "p7-t6-q194",
                questionNo: 194,
                text: "What did Ms. Rivera decide to do about her order?",
                options: {
                    "A": "Request a full refund",
                    "B": "Wait for a new guitar to arrive",
                    "C": "Purchase the maintenance plan only",
                    "D": "Accept the display model"
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                explanation: "영수증에 10% 가격 할인(Discount)이 반영된 것으로 보아, 그녀는 이메일에서 제안한 두 번째 옵션(전시용 모델 수락 및 할인)을 선택했음을 알 수 있습니다."
            },
            {
                id: "p7-t6-q195",
                questionNo: 195,
                text: "What is true about the maintenance plan purchased by Ms. Rivera?",
                options: {
                    "A": "It is valid at any store location.",
                    "B": "It costs more than the guitar strings.",
                    "C": "It must be renewed every three years.",
                    "D": "It does not cover acoustic guitars."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "기존 데이터의 영수증 상세 항목에 따르면 유지보수 플랜은 'Alexis Instruments의 어느 지점에서나 유효(good at any... location)'하다고 되어 있습니다."
            }
        ]
    },
    // Questions 196-200: Triple Passage (E-mails + Invoice)
    {
        id: "p7-t6-set15",
        questionRange: "196-200",
        setType: "Triple",
        passages: [
            {
                id: "p7-t6-s15-p1",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: All Instructors\nFrom: Jee-Young Choi\nSubject: New fee schedule\nDate: August 15\n\nDear Teachers,\n\nThank you for lending your skills as artists and educators to the Mirabel Museum of Art. Please use the updated fee schedule below when creating your monthly invoices.\n\n| Category | Description | Duration | Fee |\n|---|---|---|---|\n| Tour | Lead group tour | 60 minutes | $50 |\n| Tour | Lead group tour | 90 minutes | $75 |\n| Class | Teach art class | 75 minutes | $65 |\n| Class | Teach art class | 120 minutes | $110 |\n| Development | Plan new course content | Varies | $200 |\n| Training | Instruct museum staff on a specialized topic | Varies | $25/hour |\n\nElectronic payments should be available ten business days after invoice submission.\n\nJee-Young Choi, Education Coordinator`
            },
            {
                id: "p7-t6-s15-p2",
                contextType: "P5",
                docType: "TABLE",
                header: {
                    title: "Devonte Merriweather",
                    subtitle: "d.merriweather@camail.ca"
                },
                content: [
                    "**Invoice #00278**\n**For:** Services at the Mirabel Museum of Art\n**Sent:** September 30"
                ],
                table_data: {
                    headers: ["Date", "Description", "Fee"],
                    rows: [
                        ["September 22", "Tour: Special exhibit", "$50"],
                        ["September 22", "Class: Drawing for Beginners", "$65"],
                        ["September 25", "Class: Sculpting with Clay", "$110"]
                    ],
                    summary: "Total: $225"
                }
            },
            {
                id: "p7-t6-s15-p3",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Devonte Merriweather <d.merriweather@camail.ca>\nFrom: Jee-Young Choi <jy.choi@mirabelmuseumofart.ca>\nSubject: Payment\nDate: October 6\n\nDear Mr. Merriweather,\n\nThank you for submitting your September invoice. I noticed that you neglected to charge us for developing the curriculum for your sculpting class, which you taught for the first time on September 25. I checked with Carol Swann, and she said that because invoice #00278 has already been paid, it would be best if you submitted a second invoice for the development. I will ask her to process it quickly when I receive it.\n\nYou will be happy to know that the feedback from your students was very positive. I will e-mail scans of their feedback forms later today.\n\nBest,\nJee-Young Choi, Education Coordinator`
            }
        ],
        questions: [
            {
                id: "p7-t6-q196",
                questionNo: 196,
                text: "What is suggested in the first e-mail about the Mirabel Museum of Art?",
                options: {
                    "A": "It hires art teachers to lead tours.",
                    "B": "It offers private tours to museum members.",
                    "C": "Its art classes are free to the public.",
                    "D": "Its next staff training will take place in ten days."
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                explanation: "첫 번째 이메일의 수신인이 '모든 강사(All Instructors)'이고, 요금표에 '그룹 투어 진행(Lead group tour)' 항목이 있는 것으로 보아 미술 선생님들이 투어 가이드 역할도 수행함을 알 수 있습니다."
            },
            {
                id: "p7-t6-q197",
                questionNo: 197,
                text: "What does the invoice suggest about Mr. Merriweather?",
                options: {
                    "A": "He worked at the museum on September 30.",
                    "B": "He has expertise in more than one art form.",
                    "C": "One of his art classes was canceled.",
                    "D": "Some of his artwork was exhibited in September."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                explanation: "송장(지문 2)에 드로잉(Drawing)과 조각(Sculpting) 수업이 모두 포함되어 있으므로, 한 가지 이상의 예술 분야에 전문성이 있음을 알 수 있습니다."
            },
            {
                id: "p7-t6-q198",
                questionNo: 198,
                text: "How long was the sculpting class that Mr. Merriweather taught?",
                options: {
                    "A": "60 minutes",
                    "B": "75 minutes",
                    "C": "90 minutes",
                    "D": "120 minutes"
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                explanation: "송장(지문 2)에서 조각 수업료로 $110를 청구했습니다. 지문 1의 요금표에서 클래스(Class) 항목 중 $110인 수업의 시간은 120분입니다."
            },
            {
                id: "p7-t6-q199",
                questionNo: 199,
                text: "According to the second e-mail, who most likely is Ms. Swann?",
                options: {
                    "A": "A bookkeeper",
                    "B": "An art teacher",
                    "C": "Mr. Merriweather's assistant",
                    "D": "Director of the Mirabel Museum of Art"
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                explanation: "두 번째 이메일(지문 3)에서 Choi 씨가 송장 처리와 관련하여 Swann 씨와 상의했고, 그녀가 송장을 '처리(process)'할 것이라고 했으므로 그녀는 회계 업무 담당자(bookkeeper)일 가능성이 높습니다."
            },
            {
                id: "p7-t6-q200",
                questionNo: 200,
                text: "What can be concluded about Ms. Choi?",
                options: {
                    "A": "She forgot to read some student feedback forms.",
                    "B": "She believes that Mr. Merriweather is owed $200.",
                    "C": "She meets once a month with teachers.",
                    "D": "She rejected Mr. Merriweather's October invoice."
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                explanation: "두 번째 이메일(지문 3)에서 Choi 씨는 Merriweather 씨가 '커리큘럼 개발 비용(developing the curriculum)' 청구를 누락했다고 언급했습니다. 지문 1의 요금표에서 '강좌 개발(Development)' 비용은 $200로 책정되어 있습니다."
            }
        ]
    }
];
