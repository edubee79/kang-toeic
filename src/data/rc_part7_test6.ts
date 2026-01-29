import { PracticeSet } from './rc_part7_types';

export const rcPart7Test6: PracticeSet[] = [
    // Questions 176-180: Double Passage (Job Advertisement + Email)
    {
        id: "p7-t6-set11",
        questionRange: "176-180",
        setType: "Double",
        passages: [
            {
                id: "p7-t6-s11-p1",
                contextType: "P4",
                docType: "ADVERTISEMENT",
                title: "Job Advertisement",
                content: `BLISSFUL HORSE STABLES\n\nPart-time worker needed to feed, wash, and groom horses. Must be able to work a minimum of eight hours a week, including occasional weekends and holidays. Although previous experience with horses is preferred, we will train the right candidate. To apply, send an e-mail to Dorothy Lu, dlau@blissfulhorsestables.com, and attach your résumé.\n\nBlissful Horse Stables is the region's largest horse-boarding facility. It has been owned and operated by the Gandy family since 1988. Our business offers both long- and short-term boarding. We also offer riding lessons and trail rides. Our facility is located on many acres of pasture for our equine friends.`
            },
            {
                id: "p7-t6-s11-p2",
                contextType: "P1",
                docType: "EMAIL",
                title: "E-mail",
                content: `From: ora.kyle@rapidmail.com.au\nTo: dlau@blissfulhorsestables.com\nSubject: Part-time position\nDate: June 10\nAttachment: orakyle.rtf\n\nDear Ms. Lu,\n\nThis e-mail is in response to the advertisement that appeared in yesterday's edition of Colby Today. At this time, I work for New Large Animal Clinic as a technician's assistant, but only three days a week. The part-time position you are advertising would enable me to do something I enjoy while increasing my working hours. I am happy to work on weekends and holidays.\n\nAll the best,\nKyle Ora`
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
                content: `https://www.pinkferngardens.co.nz/contact\n\nAbout | Shop Online | Locations | Contact Us\n\nLocated in Picton, New Zealand, Pink Fern Gardens sells a wide variety of plants, both edible and decorative. Please use the form below to submit your questions and comments.\n\nName: Mia Dixon\nE-mail: mdixon@sunmail.co.nz\nComment:\n\nI saw the callout to local growers on your social media feed. A few years ago, I started a small business selling potted plants with my neighbours here in Henderson. For us to grow the business, we need to expand our offerings. Specifically, we have dozens of potted mint and cardamom seedlings as well as other aromatic herbs, and I wonder if you are interested in expanding your offerings of herbs. We also have a half dozen two-year-old lemon tree saplings that are becoming too large for us.`
            },
            {
                id: "p7-t6-s12-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: mdixon@sunmail.co.nz\nFrom: purchasing@pinkferngardens.co.nz\nDate: 12 January\nSubject: Your comment\n\nDear Ms. Dixon,\n\nPink Fern Gardens is always seeking uncommon plants. As for your citrus saplings, we are interested in purchasing them. However, we need to be cautious about introducing new varieties. We learned our lesson regarding this last season when we bought some trees that were unhealthy.\n\nWe do buy other plants from independent growers, so long as the seedlings are potted and market ready. Here are the types of seedlings we buy and the wholesale prices we pay for each plant: ferns ($8), mints ($6), annual flowers ($5), and herbs for cooking ($4). Please let us know if you can deliver any plants at these prices.\n\nKind regards,\nKen Yoneda\nPurchaser, Pink Fern Gardens`
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
                content: `https://www.elektroproofrepair.com/about\n\nTrust Elektroproof Repair to get your computer running right again!\n\nElektroproof Repair's no-surprises policy offers flat fees for labor at three price points: $200, $300, and $350. These fees do not include replacement parts. The majority of our repairs incur the $200 fee.\n\nNOTE: Because of a dramatic increase in demand, we are accepting appointments only from customers who have used our services previously. To schedule your appointment, we require a $50 nonrefundable deposit, which will be credited toward the cost of services rendered.\n\nMost repairs are completed within three to five business days.`
            },
            {
                id: "p7-t6-s13-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `From: Arthur Jacquet <ajacquet@elektroproofrepair.com>\nTo: Jessica Nelson <jnelson74@hoffmanns.com>\nDate: January 14, 1:00 P.M.\nSubject: RE: Repair inquiry\n\nDear Ms. Nelson,\n\nThank you for contacting Elektroproof Repair. You asked if you could bring us your laptop for inspection tomorrow, January 15. Unfortunately, we are currently booked solid through the end of the month. However, we do have an opening on February 3. Please let me know if you would like to book that slot.\n\nSincerely,\nArthur Jacquet, Elektroproof Repair`
            },
            {
                id: "p7-t6-s13-p3",
                contextType: "P4",
                docType: "REVIEW",
                title: "Review",
                content: `https://www.reviewproofrepair.com/elektroproof\n\n★★★★★\nElektroproof Repair\n\nI appreciate the quick turnaround time on my laptop repair. I was afraid the internal components might have been damaged due to the liquid spill. Luckily, the technician was able to dry the computer's insides and prevent damage. The Web site said it would take three to five business days, but Arthur Jacquet called me back to tell me that my laptop was ready for pickup in less than 24 hours. Since my computer was not turned on at the time of the accident, severe damage was avoided. Highly recommend!\n\n—Silvia Lau`
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
                docType: "ADVERTISEMENT",
                content: `Learn to play guitar at Alexis Instruments!\n\nAlexis Instruments will offer group and individual guitar instruction beginning April 2. Lessons will be held at our new location on Kanga Drive in Chico. We have practice rooms and professional instructors. Call us today for availability information and pricing.`
            },
            {
                id: "p7-t6-s14-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `From: Krista Towers <ktowers@alexisinstruments.com>\nTo: Lucia Rivera <lucirivera@rapidpost.com>\nDate: April 26, 8:30 A.M.\nSubject: Order TS1052593\n\nDear Ms. Rivera,\n\nI am following up on the order you placed on April 23. We have only one guitar of the model you want in stock, and it was used as a display sample in our Santa Barbara showroom. It is in excellent condition with no scratches. We can offer you two options:\n\n1. Cancel for a full refund.\n2. Receive the floor model with a 10 percent discount.\n\nIf you choose the latter, we will deliver it to your local store in Chico by tomorrow, in time for your first lesson. \n\nKrista Towers, Sales Associate`
            },
            {
                id: "p7-t6-s14-p3",
                contextType: "P5",
                docType: "RECEIPT",
                content: `Alexis Instruments\nOrder number: TS1052593\nDate: April 26\n\nDescription: XLT full-body acoustic guitar | $450.00\nStrings: set of 6 | $20.00\nMaintenance plan | $75.00\nDiscount (10% off guitar) | -$45.00\nSales tax | $34.80\nTotal: $534.80\n\nShip To: Alexis Instruments #23 (Chico, CA)\nBill To: Lucia Rivera (Santa Barbara, CA)`
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
                content: `To: All Instructors\nFrom: Jee-Young Choi\nSubject: New fee schedule\nDate: August 18\n\nDear Teachers,\n\nPlease use the updated fee schedule below when creating your monthly invoices.\n\n| Category | Description | Duration | Fee |\n|---|---|---|---|\n| Tour | Lead group tour | 60 mins | $50 |\n| Tour | Lead group tour | 90 mins | $75 |\n| Class | Teach art class | 75 mins | $65 |\n| Class | Teach art class | 120 mins | $110 |\n| Development | Plan new course | Varies | $200 |\n| Training | Staff training | Varies | $25/hr |\n\nElectronic payments will be processed two days after submission.\n\nJee-Young Choi, Education Coordinator`
            },
            {
                id: "p7-t6-s15-p2",
                contextType: "P5",
                docType: "INVOICE",
                content: `Devonte Merriweather | Invoice #00278\nFor: Meribel Museum of Art | Month: September\n\n| Date | Description | Fee |\n|---|---|---|\n| Sept 22 | Tour: Special exhibit | $50 |\n| Sept 22 | Class: Drawing Beginners | $65 |\n| Sept 25 | Class: Sculpting with Clay | $110 |\n| | **Total** | **$225** |`
            },
            {
                id: "p7-t6-s15-p3",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Devonte Merriweather\nFrom: Jee-Young Choi \nSubject: Payment Inquiry\nDate: October 6\n\nDear Mr. Merriweather,\n\nI noticed that you neglected to charge for the 90-minute tour you led on September 30. Since invoice #00278 has already been paid, please submit a second invoice for that amount. Also, student feedback for your September 25 class was excellent!\n\nBest,\nJee-Young Choi`
            }
        ],
        questions: [
            {
                id: "p7-t6-q196",
                questionNo: 196,
                text: "What is indicated about the Meribel Museum of Art?",
                options: {
                    "A": "It hires external art instructors.",
                    "B": "It is closed for renovations in September.",
                    "C": "It is expanding its permanent collection.",
                    "D": "It offers free tours on weekends."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "모든 강사(Instructors)에게 보내는 이메일과 Merriweather 씨가 송장을 청구하는 구조를 볼 때, 미술관이 외부 강사를 고용하여 운영함을 알 수 있습니다."
            },
            {
                id: "p7-t6-q197",
                questionNo: 197,
                text: "What does the invoice suggest about Mr. Merriweather?",
                options: {
                    "A": "He is a full-time staff member.",
                    "B": "He has expertise in multiple art forms.",
                    "C": "He recently moved to a new city.",
                    "D": "He specializes in staff training."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                explanation: "송장에 드로잉(Drawing)과 조각(Sculpting) 수업이 모두 포함되어 있는 것으로 보아, 여러 예술 분야에 전문성이 있음을 추론할 수 있습니다."
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
                explanation: "송장에서 조각 수업료가 $110로 청구되었습니다. 지문 1의 요금표에서 $110인 클래스는 120분 수업입니다."
            },
            {
                id: "p7-t6-q199",
                questionNo: 199,
                text: "What class did the students provide feedback for?",
                options: {
                    "A": "Drawing for Beginners",
                    "B": "Sculpting with Clay",
                    "C": "Art History Overview",
                    "D": "Staff Training Session"
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                explanation: "두 번째 이메일(지문 3)에서 '9월 25일 수업에 대한 학생들의 피드백이 훌륭했다'고 했습니다. 송장(지문 2)을 보면 9월 25일 수업은 'Sculpting with Clay'입니다."
            },
            {
                id: "p7-t6-q200",
                questionNo: 200,
                text: "How much should Mr. Merriweather charge on his second invoice?",
                options: {
                    "A": "$25",
                    "B": "$50",
                    "C": "$65",
                    "D": "$75"
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                explanation: "지문 3에서 그는 90분짜리 투어(90-minute tour)에 대해 청구 누락을 했습니다. 지문 1의 요금표에 따르면 90분 투어의 수수료는 $75입니다."
            }
        ]
    }
];
