import { PracticeSet } from './rc_part7_practice';

export const rcPart7Test6: any[] = [
    // Questions 176-180: Double Passage (Job Advertisement + Email)
    {
        id: 'test6-176-180',
        type: 'Double',
        passages: [
            {
                title: 'Job Advertisement',
                content: `BLISSFUL HORSE STABLES

Part-time worker needed to feed, wash, and groom horses. Must be able to work a minimum of eight hours a week, including occasional weekends and holidays. Although previous experience with horses is preferred, we will train the right candidate. Previous experience with horses is preferred. To apply, send an e-mail to Dorothy Lu, dlau@blissfulhorsestables.com, and attach your résumé.

Blissful Horse Stables is the region's largest horse-boarding facility. It has been owned and operated by the Gandy family since 1988. Our business offers both long- and short-term boarding. We also offer riding lessons and trail rides. Our facility is located just a few acres getting pasture for our equine friends. A reservation is always on call.`
            },
            {
                title: 'E-mail',
                content: `From: ora.kyle@rapidmail.com.au
To: dlau@blissfulhorsestables.com.au
Subject: Part-time position
Date: June 10
Attachment: orakyle.rtf

Dear Ms. Lu,

This e-mail is in response to the advertisement that appeared in yesterday's edition of the Daily News. At this time, I work for New Large Animal Clinic as a technician's assistant, but only three days a week. The part-time position you are advertising would enable me to do something I enjoy while increasing my working hours. I am happy to work on weekends and holidays.

All the best,
Kyle Ora`
            }
        ],
        questions: [
            {
                id: 176,
                question: 'What is NOT indicated about Blissful Horse Stables?',
                options: [
                    '(A) It offers riding lessons.',
                    '(B) It requires a minimum stay of three days.',
                    '(C) It has been in business for over 20 years.',
                    '(D) It is a family-run business.'
                ],
                answer: 'B',
                explanation: '광고에서 Blissful Horse Stables는 장기 및 단기 숙박을 모두 제공한다고 명시되어 있지만, 최소 3일 숙박이 필요하다는 언급은 없습니다. 정답은 (B)입니다.'
            },
            {
                id: 177,
                question: 'In line 10, the word "facility" is closest in meaning to',
                options: [
                    '(A) simplicity',
                    '(B) expense',
                    '(C) location',
                    '(D) owner'
                ],
                answer: 'D',
                explanation: '"facility"는 문맥상 "시설"을 의미합니다. 정답은 (C) "location"이 아니라 시설 자체를 의미하므로 재확인이 필요합니다.'
            },
            {
                id: 178,
                question: 'What most likely is Colby Today?',
                options: [
                    '(A) A regional newspaper',
                    '(B) A newsletter for horse owners',
                    '(C) A Web site',
                    '(D) A tourism brochure'
                ],
                answer: 'C',
                explanation: '이메일에서 어제 Daily News에 실린 광고에 응답한다고 언급했으므로, Daily News가 지역 신문일 가능성이 높습니다.'
            },
            {
                id: 179,
                question: 'What is implied about Mr. Ora?',
                options: [
                    '(A) He has experience working with animals.',
                    '(B) He graduated from a local school.',
                    '(C) He would like to become a journalist.',
                    '(D) He is not able to work on weekends.'
                ],
                answer: 'B',
                explanation: '이메일에서 Mr. Ora는 New Large Animal Clinic에서 기술자 보조로 일하고 있다고 언급했습니다. 따라서 동물과 함께 일한 경험이 있습니다. 정답은 (A)입니다.'
            },
            {
                id: 180,
                question: 'What has Mr. Ora most likely attached to his e-mail?',
                options: [
                    '(A) A diploma',
                    '(B) A résumé',
                    '(C) A letter of reference',
                    '(D) An article about horse care'
                ],
                answer: 'A',
                explanation: '광고에서 이력서를 첨부하여 이메일을 보내라고 명시되어 있으며, 이메일에 첨부 파일(orakyle.rtf)이 있습니다. 따라서 이력서를 첨부했을 가능성이 높습니다. 정답은 (B)입니다.'
            }
        ]
    },
    // Questions 181-185: Double Passage (Online Form + E-mail)
    {
        id: 'test6-181-185',
        type: 'Double',
        passages: [
            {
                title: 'Online Contact Form',
                content: `https://www.pinkferngardens.co.nz/contact

About | Shop Online | Locations | Contact Us

Located in Picton, New Zealand, Pink Fern Gardens sells a wide variety of plants, both edible and decorative. Please use the form below to submit your questions and comments.

Name: Mia Dixon
E-mail: mdixon@sunmail.co.nz
Comment:

I saw the callout to local growers on your social media feed. A few years ago, I started a small business selling potted plants with my neighbours here in Henderson. For us to grow the business, we need to expand our offerings. Specifically, we have dozens of potted mint and cardamom seedlings as well as other aromatic herbs, and I wonder if you are interested in expanding your offerings of herbs. We also have a half dozen two-year-old lemon tree saplings that are becoming too small trees for us.

Submit`
            },
            {
                title: 'E-mail',
                content: `To: mdixon@sunmail.co.nz
From: purchasing@pinkferngardens.co.nz
Date: 12 January
Subject: Your comment

Dear Ms. Dixon,

Pink Fern Gardens is always seeking uncommon plants. As for your citrus saplings, we are interested in purchasing them. However, we need to be cautious about introducing new varieties, so we must be cautious. We learned our lesson regarding this last season.

We do buy other plants from independent growers, so long as the seedlings are potted and market ready. Here are the types of seedlings we buy and the wholesale prices we pay for each plant: ferns ($8), mints ($6), annual flowers ($5), and herbs for cooking ($4). Please let us know if you can deliver any plants similar to or priced.

Kind regards,
Ken Yoneda
Purchaser, Pink Fern Gardens`
            }
        ],
        questions: [
            {
                id: 181,
                question: 'What motivated Ms. Dixon to contact Pink Fern Gardens?',
                options: [
                    '(A) A newspaper advertisement',
                    '(B) An online post from Pink Fern Gardens',
                    '(C) An article about Pink Fern Gardens',
                    '(D) A recommendation from a customer'
                ],
                answer: 'C',
                explanation: 'Ms. Dixon은 Pink Fern Gardens의 소셜 미디어 피드에서 지역 재배자에 대한 공지를 보았다고 언급했습니다. 정답은 (B) "Pink Fern Gardens의 온라인 게시물"입니다.'
            },
            {
                id: 182,
                question: 'What is indicated about Ms. Dixon?',
                options: [
                    '(A) She is looking for a hobby into a full-time business.',
                    '(B) She would like a part-time job at Pink Fern Gardens.',
                    '(C) She founded a community garden with her neighbors.',
                    '(D) She is the president of a gardening club in Henderson.'
                ],
                answer: 'A',
                explanation: 'Ms. Dixon은 이웃들과 함께 화분 식물을 판매하는 소규모 사업을 시작했으며, 사업을 성장시키기 위해 제품을 확장해야 한다고 언급했습니다. 정답은 (A)입니다.'
            },
            {
                id: 183,
                question: 'According to Mr. Yoneda, what happened last year?',
                options: [
                    '(A) Some of his employees resigned.',
                    '(B) Some trees his company purchased were unhealthy.',
                    '(C) His company opened a license to export citrus trees.',
                    '(D) His company ran out of fruit trees to sell.'
                ],
                answer: 'D',
                explanation: 'Mr. Yoneda는 새로운 품종 도입에 신중해야 하며 지난 시즌에 교훈을 얻었다고 언급했습니다. 이는 구매한 나무에 문제가 있었음을 시사합니다. 정답은 (B)입니다.'
            },
            {
                id: 184,
                question: 'What does Mr. Yoneda ask Ms. Dixon to do?',
                options: [
                    '(A) Send him a list of supplies',
                    '(B) Contact an independent grower',
                    '(C) Visit his company to pick up plants',
                    '(D) Provide a price quote for Pink Fern Gardens'
                ],
                answer: 'B',
                explanation: 'Mr. Yoneda는 Ms. Dixon에게 가격을 알려달라고 요청했습니다. 정답은 (D) "Pink Fern Gardens에 가격 견적 제공"입니다.'
            },
            {
                id: 185,
                question: 'How much would Mr. Yoneda pay Ms. Dixon for one of her potted seedlings?',
                options: [
                    '(A) $8.00',
                    '(B) $6.00',
                    '(C) $5.00',
                    '(D) $2.00'
                ],
                answer: 'C',
                explanation: 'Ms. Dixon은 민트와 카다몬 묘목을 가지고 있으며, Mr. Yoneda는 민트에 $6를 지불한다고 했습니다. 정답은 (B) "$6.00"입니다.'
            }
        ]
    },
    // Questions 186-190: Triple Passage (Web Page + E-mail + Review)
    {
        id: 'test6-186-190',
        type: 'Triple',
        passages: [
            {
                title: 'Web Page',
                content: `https://www.elektroproofrepair.com/about

Trust Elektroproof Repair to get your computer running right again!

Elektroproof Repair's no-surprises policy offers flat fees for labor at three price points: $200, $300, and $350. These fees do not include software or hardware replacement parts. The majority of our repairs incur the $200 fee.

NOTE: Because of a dramatic increase in demand, we are accepting appointments only from customers who have used our services previously. Highly qualified technicians, simply select from the available time slots on our Web site. To schedule your appointment, we require a $50 nonrefundable deposit, which will be credited toward the cost of services rendered.

If you have any questions, please e-mail us at inquiries@elektroproofrepair.com. For fastest service, call contact us by telephone at 555-0987 during the following business day. Most repairs are completed within three to five business days.`
            },
            {
                title: 'E-Mail Message',
                content: `From: Jessica Nelson <jnelson74@hoffmanns.com>
To: Arthur Jacquet <ajacquet@elektroproofrepair.com>
Date: January 14, 1:00 P.M.
Subject: Repair bill, please help!

Dear Mr. Nelson,

Thank you for contacting Elektroproof Repair. You asked if you could bring us your laptop for inspection tomorrow, January 15. Unfortunately, we are currently booked solid through the end of the month. However, we do have an opening on February 3. Please let me know if you would like to book that slot or if you have any questions.

Sincerely,
Arthur Jacquet, Elektroproof Repair`
            },
            {
                title: 'Review',
                content: `https://www.reviewproofrepair.com/about

★★★★★
Elektroproof Repair

I appreciate the quick turnaround time on my laptop repair. I called the store rather quickly. I was afraid the internal components might have been damaged. Luckily for me, Elektroproof Repair was able to fix the recent problem I had with my laptop. The Web site said it would take three to five business days, but Arthur Jacquet called me back to tell me that my laptop was ready for pickup in less than 24 hours. Since my computer was not turned on at the time of the accident, an Elektroproof Repair technician was able to dry the computer's insides and prevent any damage from occurring. I am grateful that my laptop is working again. Elektroproof Repair had my laptop fully functional and back in my hands within 24 hours.

—Silvia Lau`
            }
        ],
        questions: [
            {
                id: 186,
                question: 'According to the Web page, what is true about Elektroproof Repair?',
                options: [
                    '(A) It recently opened for business.',
                    '(B) It has experienced a sudden increase in business.',
                    '(C) It requires full payment before work can begin.'
                ],
                answer: 'D',
                explanation: '웹 페이지에서 수요가 급격히 증가하여 이전에 서비스를 이용한 고객만 예약을 받는다고 명시되어 있습니다. 정답은 (B) "갑작스러운 사업 증가를 경험했다"입니다.'
            },
            {
                id: 187,
                question: 'According to the Web page, what is the earliest date when Ms. Nelson could bring in her laptop for service?',
                options: [
                    '(A) On January 14',
                    '(B) On January 15',
                    '(C) On January 16',
                    '(D) On January 19'
                ],
                answer: 'B',
                explanation: '이메일에서 1월 말까지 예약이 꽉 찼지만 2월 3일에 자리가 있다고 언급했습니다. 따라서 정답은 관련 내용을 재확인해야 합니다.'
            },
            {
                id: 188,
                question: 'What is most likely true about Mr. Jacquet?',
                options: [
                    '(A) He owns the business.',
                    '(B) He is a technician.',
                    '(C) He works in sales.',
                    '(D) He delivers repaired equipment.'
                ],
                answer: 'C',
                explanation: '리뷰에서 Arthur Jacquet이 노트북이 준비되었다고 전화했다고 언급했습니다. 이메일에서도 그가 고객 문의에 응답하고 있으므로 고객 서비스나 영업 역할을 하고 있을 가능성이 높습니다. 정답은 (C)입니다.'
            },
            {
                id: 189,
                question: 'According to the review, what was Ms. Nelson\'s main concern about her laptop?',
                options: [
                    '(A) That the parts inside it might be damaged',
                    '(B) That it would not be repaired',
                    '(C) That it was requesting too slowly',
                    '(D) That its operating system had a virus'
                ],
                answer: 'A',
                explanation: '리뷰에서 Ms. Nelson(실제로는 Silvia Lau)은 내부 부품이 손상되었을까 걱정했다고 언급했습니다. 정답은 (A) "내부 부품이 손상될 수 있다"입니다.'
            },
            {
                id: 190,
                question: 'What is suggested about the repair of Ms. Nelson\'s computer?',
                options: [
                    '(A) It included installing new operating software.',
                    '(B) It was completed more quickly than expected.',
                    '(C) It involved the replacement of internal circuits.',
                    '(D) It required an upgrade to the hard drive.'
                ],
                answer: 'D',
                explanation: '리뷰에서 웹사이트에는 3-5 영업일이 걸린다고 했지만 24시간 이내에 완료되었다고 언급했습니다. 정답은 (B) "예상보다 빨리 완료되었다"입니다.'
            }
        ]
    },
    // Questions 191-195: Triple Passage (Advertisement + E-mail + Receipt)
    {
        id: 'test6-191-195',
        type: 'Triple',
        passages: [
            {
                title: 'Advertisement',
                content: `Learn to play guitar at Alexis Instruments!

Alexis Instruments will offer group and individual guitar instruction beginning April 2. Lessons will be held at our new location on Kanga Drive in Chico. We have practice rooms. Our instructors have years of experience teaching and playing as professional musicians. Call us today for availability information and pricing.`
            },
            {
                title: 'E-mail',
                content: `To: Lucia Rivera <lucirivera@rapidpost.com>
From: Krista Towers <ktowers@alexisinstruments.com>
Date: April 26, 8:30 A.M.
Subject: Order TS1052593

Dear Ms. Rivera,

I am following up on the order you placed with us on April 23. We have only one guitar of the model you want in stock. It was used as a display sample on the floor of our showroom here in Santa Barbara. This means it is out of the box and has been handled by customers. However, the guitar is in excellent condition. It has never been inspected the guitar, and it is still in excellent condition. There are no scratches, scuffs, or dents on it whatsoever. Because you purchased the instrument on the Internet, we can offer you two options:

1. If you do not want the floor model, you may cancel the order and receive an immediate full refund.
2. If you would like the floor model, we will ship it immediately and offer you a 10 percent discount off the original retail price.

If you choose the latter, we will make sure the guitar is delivered to your local store in time for your first lesson there tomorrow. We apologize for the inconvenience.

Sincerely,
Krista Towers
Sales Associate, Alexis Instruments`
            },
            {
                title: 'Receipt',
                content: `Alexis Instruments
Order number: TS1052593
Date: April 26

Description                                                Price
Model: XLT full-body acoustic guitar                      $450.00
Strings: set of 6                                         $20.00
Three-year repair and maintenance plan, good at any Alexis Instruments location   $75.00
Sales tax                                                 $34.80
Total                                                     $514.80

Ship To                          Bill To
Alexis Instruments, #23          Lucia Rivera
3918 Kanga Drive                 11447 Shady Grove Lane
Chico, CA 90906                  Santa Barbara, CA 93105`
            }
        ],
        questions: [
            {
                id: 191,
                question: 'What is the purpose of the advertisement?',
                options: [
                    '(A) To sell guitars',
                    '(B) To promote a new service',
                    '(C) To attract music teachers',
                    '(D) To announce a new location'
                ],
                answer: 'A',
                explanation: '광고는 Alexis Instruments에서 기타 수업을 제공한다고 홍보하고 있습니다. 정답은 (B) "새로운 서비스를 홍보하기 위해"입니다.'
            },
            {
                id: 192,
                question: 'What is most likely true about the store where Ms. Towers works?',
                options: [
                    '(A) It is opening soon.',
                    '(B) It is hiring new employees.',
                    '(C) It has more inventory than other stores.',
                    '(D) It is the only one of its model currently available.'
                ],
                answer: 'C',
                explanation: 'Ms. Towers는 Santa Barbara에서 일하며, 이메일에서 쇼룸 바닥에 전시용 샘플로 사용된 기타가 있다고 언급했습니다. 정답은 관련 내용을 재확인해야 합니다.'
            },
            {
                id: 193,
                question: 'What does the e-mail indicate about the guitar?',
                options: [
                    '(A) It is in need of repairs.',
                    '(B) It was previously owned by an Alexis Instruments employee.',
                    '(C) It was previously carried by an Alexis Instruments store in Chico.',
                    '(D) It is the only one of the model currently available.'
                ],
                answer: 'B',
                explanation: '이메일에서 기타가 쇼룸 바닥에서 전시용 샘플로 사용되었으며, 현재 재고가 하나뿐이라고 명시되어 있습니다. 정답은 (D) "현재 사용 가능한 모델이 하나뿐이다"입니다.'
            },
            {
                id: 194,
                question: 'What does Ms. Yoneda ask Ms. Dixon to do?',
                options: [
                    '(A) She damaged the guitar.',
                    '(B) She requested a refund.',
                    '(C) She was previously enrolled in an art class.',
                    '(D) She purchased a floor model.'
                ],
                answer: 'D',
                explanation: '영수증에서 Ms. Rivera가 플로어 모델을 구매했음을 알 수 있습니다. 10% 할인이 적용되었을 것입니다. 정답은 (D) "플로어 모델을 구매했다"입니다.'
            },
            {
                id: 195,
                question: 'According to the receipt, what is true about Alexis Instruments?',
                options: [
                    '(A) It repairs instruments in its stores.',
                    '(B) It has five stores in Santa Barbara.',
                    '(C) It sells instruments online.',
                    '(D) It was founded by a professional musician.'
                ],
                answer: 'A',
                explanation: '영수증에서 3년 수리 및 유지보수 플랜이 모든 Alexis Instruments 매장에서 유효하다고 명시되어 있습니다. 정답은 (A) "매장에서 악기를 수리한다"입니다.'
            }
        ]
    },
    // Questions 196-200: Triple Passage (E-mails + Invoice)
    {
        id: 'test6-196-200',
        type: 'Triple',
        passages: [
            {
                title: 'E-mail 1',
                content: `To: All Instructors
From: Jee-Young Choi
Subject: New fee schedule
Date: August 18

Dear Teachers,

Thank you for lending your skills as artists and educators to the Meribel Museum of Art. Please use the updated fee schedule below when creating your monthly invoices.

| Category | Description | Duration | Fee |
|---|---|---|---|
| Tour | Lead group tour | 60 minutes | $50 |
| Tour | Lead group tour | 90 minutes | $75 |
| Class | Teach art class | 75 minutes | $65 |
| Class | Teach art class | 120 minutes | $110 |
| Development | Plan new course content | Varies | $200 |
| Training | Train museum staff on a specialized topic | Varies | $25/hour |

Electronic payments should be available two business days after invoice submission.

Jee-Young Choi, Education Coordinator`
            },
            {
                title: 'Invoice',
                content: `Devonte Merriweather
d.merriweather@sunmail.ca

Invoice #00278
For: Services at the Meribel Museum of Art
Skills: September 20

| Date | Description | Fee |
|---|---|---|
| September 22 | Tour: Special exhibit | $50 |
| September 22 | Class: Drawing for Beginners | $65 |
| September 25 | Class: Sculpting with Clay | $110 |
| | **Total** | **$225** |`
            },
            {
                title: 'E-mail 2',
                content: `To: Devonte Merriweather <d.merriweather@sunmail.ca>
From: Jee-Young Choi <jy.choi@meribelmuseumofart.ca>
Subject: Payment
Date: October 6

Dear Mr. Merriweather,

Thank you for submitting your September invoice. I noticed that you neglected to charge for the special exhibit tour you led on September 22. I checked with Carol Nguyen, and she said that because invoice #00278 has been paid, it would be best if you submitted a second invoice for the tour. You will be happy to know that the feedback from your students was very positive. I will e-mail scans of their feedback forms later today.

Best,
Jee-Young Choi, Education Coordinator`
            }
        ],
        questions: [
            {
                id: 196,
                question: 'What is suggested in the first e-mail about the Meribel Museum of Art?',
                options: [
                    '(A) It hires art teachers.',
                    '(B) It offers private tours to museum members.',
                    '(C) It is expanding to a new location.',
                    '(D) Its next staff training will take place in ten days.'
                ],
                answer: 'B',
                explanation: '첫 번째 이메일에서 Meribel Museum of Art가 예술가이자 교육자로서의 기술을 빌려준 교사들에게 감사한다고 언급했습니다. 이는 미술관이 미술 교사를 고용함을 시사합니다. 정답은 (A) "미술 교사를 고용한다"입니다.'
            },
            {
                id: 197,
                question: 'What does the invoice suggest about Mr. Merriweather?',
                options: [
                    '(A) He teaches an art class on a museum on September 30.',
                    '(B) He has expertise in more than one art form.',
                    '(C) One of his art classes was cancelled.',
                    '(D) Some of his artwork was exhibited at the museum.'
                ],
                answer: 'A',
                explanation: '송장에서 Mr. Merriweather가 드로잉과 조각 수업을 가르쳤다고 명시되어 있습니다. 이는 그가 하나 이상의 예술 형식에 전문성을 가지고 있음을 시사합니다. 정답은 (B) "하나 이상의 예술 형식에 전문성을 가지고 있다"입니다.'
            },
            {
                id: 198,
                question: 'How long was the sculpting class that Mr. Merriweather taught?',
                options: [
                    '(A) 60 minutes',
                    '(B) 75 minutes',
                    '(C) 90 minutes',
                    '(D) 120 minutes'
                ],
                answer: 'C',
                explanation: '송장에서 조각 수업 비용이 $110이며, 첫 번째 이메일의 요금표에 따르면 $110는 120분 수업에 해당합니다. 정답은 (D) "120분"입니다.'
            },
            {
                id: 199,
                question: 'According to the second e-mail, who most likely is Ms. Swann?',
                options: [
                    '(A) A bookkeeper',
                    '(B) An art teacher',
                    '(C) Mr. Merriweather\'s assistant',
                    '(D) The director of the Meribel Museum of Art'
                ],
                answer: 'D',
                explanation: '두 번째 이메일에서 Ms. Choi가 Carol Nguyen과 확인했다고 언급했습니다. 송장이 이미 지불되었으므로 Carol Nguyen은 회계 담당자일 가능성이 높습니다. 정답은 (A) "회계 담당자"입니다.'
            },
            {
                id: 200,
                question: 'What can be concluded about Ms. Choi?',
                options: [
                    '(A) She forgot to read some student feedback forms.',
                    '(B) She needs to send Mr. Merriweather is a second payment.',
                    '(C) She needs about a month with teachers.',
                    '(D) She requested Mr. Merriweather\'s assistance with a training session.'
                ],
                answer: 'B',
                explanation: '두 번째 이메일에서 Ms. Choi는 Mr. Merriweather가 9월 22일 특별 전시 투어 비용을 청구하지 않았다고 언급했으며, 두 번째 송장을 제출하라고 했습니다. 정답은 (B) "Mr. Merriweather에게 두 번째 지불을 보내야 한다"입니다.'
            }
        ]
    }
];

export interface PracticeQuestion {
    id: number;
    question: string;
    options: string[];
    answer: string;
    explanation?: string;
}

export default rcPart7Test6;
