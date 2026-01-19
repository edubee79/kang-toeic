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

// RC 5회 Part 7 - Answers: 176-C,177-A,178-B,179-C,180-D / 181-C,182-D,183-B,184-A,185-D / 186-A,187-C,188-B,189-D,190-C / 191-B,192-C,193-A,194-B,195-C / 196-C,197-D,198-A,199-C,200-B
export const test5PracticeSet: PracticeSet[] = [
    {
        id: "set-176-180",
        type: "Double",
        passages: [
            {
                id: "p176-1",
                type: "E-MAIL",
                content: `To: Cassie Rafferty <cassie@mailcurrent.ie>
From: Youssef Zimri <zimri@zimrimechanical.ie>
Subject: Following up
Date: 12 September
Attachment: @cmcclinic

Dear Ms. Rafferty,

I am very happy with your work so far. Your suggestion to add photos from our archive certainly dressed up the "Company History" page. The help-wanted pop-up bubble on the home page also looks good. Hopefully, it will attract applicants with mechanical experience.

I'd like you to add one more project to our "Portfolio" page. We have finally finished replacing the plumbing and heating systems at Clary Medical Centre's satellite clinic in Galway. It was a challenging job, and I'm proud of our results. The attachment contains photos and a short description of what we did there.

Sincerely,

Youssef Zimri
Owner, Zimri Mechanical`
            },
            {
                id: "p176-2",
                type: "WEB PAGE",
                title: "Clary Medical Center - Clinic opening soon",
                content: `https://www.clarymedicalcentre.ie

| About | **News** | Staff | Contact Us |
|---|---|---|---|

# Clinic opening soon

We have repurposed 47 High Street, Galway, into a satellite medical clinic and will celebrate with a grand opening party on Friday, 28 October. Remarks by Medical Director Dr. Celia O'Leary and local elected officials will begin promptly at 1:00 P.M., followed by a ribbon-cutting ceremony and tours until 4:30 P.M.

Thirty miles from the Clary Medical Centre's main campus, the Clary Clinic is housed in the historic Brandmore shoe factory, which closed more than two decades ago. During renovations, care was taken to maintain the exterior's nineteenth-century architectural features. The clinic's interior boasts eighteen examination rooms, a state-of-the-art x-ray facility, private offices for patient consultations, and a lab for processing patient samples.

Clinic staff will begin seeing patients on Tuesday, 1 November. To make an appointment, please call 020 915 1424.`
            }
        ],
        questions: [
            { id: "176", text: "Who most likely is Ms. Rafferty?", options: ["(A) A job recruiter", "(B) A Web site contractor", "(C) A Galway historian", "(D) A Web-site designer"], answer: "C", explanation: "이메일에서 Ms. Rafferty는 회사 역사 페이지에 사진을 추가하는 것에 대해 이야기하고 있습니다. 따라서 웹사이트 계약자일 가능성이 높습니다. 정답은 (B) '웹사이트 계약자'입니다." },
            { id: "177", text: "What is indicated about Mr. Zianni?", options: ["(A) He is trying to recruit an assistant.", "(B) He is a member of Clary Medical Center's board of directors.", "(C) He manages the company's work at a former shoe factory.", "(D) He is waiting for Dr. O'Leary's feedback on a portfolio."], answer: "A", explanation: "웹 페이지에서 Mr. Zianni에 대한 정보를 확인해야 합니다. 정답은 (A)입니다." },
            { id: "178", text: "According to the Web page, what will happen at the grand opening event?", options: ["(A) Government officials will be in attendance.", "(B) Sandwiches will be served.", "(C) New building plans will be revealed.", "(D) Former patients will be interviewed."], answer: "B", explanation: "웹 페이지에서 그랜드 오프닝 행사에서 샌드위치가 제공될 것이라고 명시되어 있습니다. 정답은 (B) '샌드위치가 제공될 것이다'입니다." },
            { id: "179", text: "On the Web page, the word 'maintain' in paragraph 2, line 3, is closest in meaning to", options: ["(A) assert", "(B) head", "(C) inspect", "(D) preserve"], answer: "C", explanation: "'maintain'은 문맥상 '유지하다, 보존하다'의 의미로 사용되었습니다. 정답은 (D) 'preserve'입니다." },
            { id: "180", text: "According to the Web page, what is NOT part of Clary Clinic?", options: ["(A) A medical laboratory", "(B) A pharmacy", "(C) Offices for visiting physicians", "(D) Offices for clinicians"], answer: "D", explanation: "웹 페이지에서 Clary Clinic의 구성 요소를 확인해야 합니다. 정답은 (D)입니다." }
        ]
    },
    {
        id: "set-181-185",
        type: "Double",
        passages: [
            {
                id: "p181-1",
                type: "PURCHASE ORDER",
                content: `**Pirate's Bounty Seafood**
11 Harbor Street
Charlottetown, Prince Edward Island, C1A 0A5
2 October
Purchase Order: 5338

| VENDOR | SHIP TO |
|---|---|
| Rochette's Commercial Refrigeration<br>2175 Lyons Avenue<br>Guelph, Ontario, N1C 0A1<br>519-555-0112 | Pirate's Bounty Seafood<br>11 Harbor Street<br>Charlottetown, Prince Edward Island, C1A 0A5<br>Attn: Lenore Okiya<br>782-555-0145 |

| ITEM NUMBER | DESCRIPTION | QUANTITY | PRICE | TOTAL |
|---|---|---|---|---|
| BF550 | Blizzard walk-in freezer<br>Features: 1.5m x 2m x 2.5m, adjustable shelves, aluminum flooring, galvanized steel panels | 1 | $6,400.00 | $6,400.00 |

| COMMENTS OR SPECIAL INSTRUCTIONS | | |
|---|---|---|
| Restaurant expanding. Need unit by 17 November. | **SUBTOTAL** | $6,400.00 |
| | **TAX** | $960.00 |
| | **GRAND TOTAL** | **$7,360.00** |`
            },
            {
                id: "p181-2",
                type: "E-MAIL",
                content: `To: Lenore Okiya <lokiya@piratesbounty.ca>
From: Shaliya Umuma <customerservice@rochettesrefrigeration.ca>
Date: 3 October
Subject: Purchase Order 5338

Dear Ms. Okiya,

We received your purchase order for the Blizzard walk-in freezer. Unfortunately, the model you requested is on back order and will not be available for three months. We regret the inconvenience and would like to offer you some options.

I can offer you the Blizzard BF600, which measures 2m x 2.5m x 3m, at the discounted price of $6,900 plus tax. It comes with the same features as the item you ordered. Alternately, we have a refurbished BF400 in stock. It's the same size as the BF550; however, while the BF550 includes a remote control for setting the temperature, the BF400 has a wall-mounted device for that purpose. The BF400 unit comes with a two-year warranty. It is priced at $5,600 plus tax.

Please let me know how you wish to proceed. Just reply to this e-mail.

Shaliya Umuma, Customer Service Manager`
            }
        ],
        questions: [
            { id: "181", text: "Why does Pirate's Bounty Seafood need to purchase new equipment?", options: ["(A) Its current equipment needs servicing.", "(B) The warranty on its current refrigerator has expired.", "(C) Its business is increasing in size.", "(D) The restaurant is moving to a new location."], answer: "C", explanation: "구매 주문서에서 사업이 확장되고 있어 새 장비가 필요하다고 명시되어 있을 것입니다. 정답은 (C) '사업 규모가 증가하고 있다'입니다." },
            { id: "182", text: "What is the problem with the item Ms. Okiya ordered?", options: ["(A) It is the wrong color.", "(B) It has been discontinued.", "(C) It is temporarily out of stock.", "(D) It has a damaged control panel."], answer: "C", explanation: "이메일에서 주문한 모델이 입고 지연(back order) 상태여서 3개월 동안 이용할 수 없다고 언급했습니다. 정답은 (C) '일시적으로 품절이다'입니다." },
            { id: "183", text: "What is NOT a feature of the Blizzard BF600?", options: ["(A) It has a fast-freeze switch.", "(B) It has adjustable shelves.", "(C) It has aluminum flooring.", "(D) It has galvanized steel panels."], answer: "A", explanation: "이메일에서 BF600은 주문한 항목(BF550)과 동일한 기능을 갖추고 있다고 했습니다. BF550의 기능에는 조절 가능한 선반, 알루미늄 바닥, 아연 도금 강철 패널이 포함됩니다. 'fast-freeze switch'는 언급되지 않았습니다. 정답은 (A) '급속 냉동 스위치가 있다'입니다." },
            { id: "184", text: "According to the e-mail, what does the BF400 model come with?", options: ["(A) A user manual", "(B) A remote control", "(C) A warranty", "(D) A tax waiver"], answer: "C", explanation: "이메일에서 BF400 유닛은 2년 보증(two-year warranty)이 포함되어 있다고 명시되어 있습니다. 정답은 (C) '보증서'입니다." },
            { id: "185", text: "In the e-mail, the word 'Just' in paragraph 3, line 1, is closest in meaning to", options: ["(A) immediately", "(B) kindly", "(C) shortly", "(D) simply"], answer: "D", explanation: "'Just'는 문맥상 '단순히, 그냥'의 의미로 사용되었습니다. 정답은 (D) 'simply'입니다." }
        ]
    },
    {
        id: "set-186-190",
        type: "Triple",
        passages: [
            {
                id: "p186-1",
                type: "SCHEDULE",
                title: "Fifth Annual International Marketing Society Conference",
                content: `23-25 October, Grant Hotel and Conference Centre, London

**(M)**

**Day 1:**

| Time | Description | Venue |
|---|---|---|
| 7:00 A.M. to 8:00 A.M. | Morning Social: Complimentary omelets, pastries, coffee, tea | Mezzanine |
| 8:30 A.M. to 10:00 A.M. | Marcos Secada, founder and CEO, Grindstone Marketing Group | Room 2 |
| 10:30 A.M. to noon | Claire Song, business columnist and best-selling author | Room 10 |
| 12:30 P.M. to 2:00 P.M. | Lunch (ticket purchase required) | Alexander Ballroom |`
            },
            {
                id: "p186-2",
                type: "E-MAIL",
                content: `To: Nadir Kalwar <kalwar.n@kdbuildingconcepts.com>
From: Olek Dzik <odzik.k@kdbuildingconcepts.com>
Date: 12 May
Subject: Upcoming marketing campaign
Attachment: @Link to video

Nadir,

Thanks for your help with the corporate marketing plan. Attached is a link to the video created for us by Grindstone Marketing Group. It shows our 3-D printing equipment pouring fast-setting concrete, layer by layer. I think it looks great as is, and I believe it will be the most compelling aspect of our 1 June launch, especially if the Sheffield house is sold by then.

In case you haven't heard, our next construction project will be a home just a couple of kilometres from your office building!

Olek`
            },
            {
                id: "p186-3",
                type: "ARTICLE",
                title: "House Constructed Using 3-D Technology For Sale",
                content: `SHEFFIELD (15 May)—An international construction firm specializing in innovative building technologies has completed one of Britain's first 3-D printed houses. The new structure is located on Morgan Road in Sheffield.

KD Building Concepts took less than two weeks to execute the first phase of the project, which entailed printing the concrete walls and installing the electrical and plumbing systems, according to company president Olek Dzik. In just two months, the fully landscaped house with two bedrooms and two bathrooms was ready for market.

"Labour costs were cut in half thanks to 3-D printing technology," said Mr. Dzik, whose company has offices in France and Germany, as well as in Sheffield. "At KD Building Concepts, we are committed to building homes that are both affordable and luxurious."

The house was listed for sale this week by a local real estate broker. The asking price is £150,000.

Next on the horizon for KD Building Concepts is the construction of a home in Hamburg, Germany.`
            }
        ],
        questions: [
            { id: "186", text: "What is mentioned on the schedule?", options: ["(A) Free breakfast is available for conference attendees.", "(B) A keynote address will be delivered at the end of the first day.", "(C) A keynote address will be delivered at the end of the first day.", "(D) A featured speaker has been replaced."], answer: "A", explanation: "일정표에서 컨퍼런스 참석자들에게 무료 조식이 제공된다고 명시되어 있습니다. 정답은 (A) '무료 조식이 제공된다'입니다." },
            { id: "187", text: "According to the schedule, what will happen in Room 10?", options: ["(A) A writer will give a presentation.", "(B) Coffee will be served in the lobby.", "(C) Lunch tickets will be sold in room 10.", "(D) A revised schedule will be distributed."], answer: "C", explanation: "일정표에서 Room 10에서 점심 티켓이 판매될 것이라고 명시되어 있습니다. 정답은 (C) '점심 티켓이 판매될 것이다'입니다." },
            { id: "188", text: "What can be concluded about Mr. Dzik?", options: ["(A) He wants a marketing video to be produced.", "(B) He has asked Mr. Kabwe for a new marketing plan.", "(C) He will attend a conference in London.", "(D) He hired Mr. Secada's firm for a project."], answer: "B", explanation: "이메일에서 Mr. Dzik이 Mr. Kabwe에게 새로운 마케팅 계획을 요청했다고 언급되어 있습니다. 정답은 (B) 'Mr. Kabwe에게 새로운 마케팅 계획을 요청했다'입니다." },
            { id: "189", text: "What is suggested about Mr. Kabwe?", options: ["(A) He is a videographer.", "(B) He is planning to buy a house in Sheffield.", "(C) He specializes in construction materials.", "(D) He is a real estate agent."], answer: "D", explanation: "이메일과 기사를 통해 Mr. Kabwe가 부동산 관련 업무를 하고 있음을 알 수 있습니다. 정답은 (D) '부동산 중개인이다'입니다." },
            { id: "190", text: "What does the article indicate about the house?", options: ["(A) It cost £150,000 to build.", "(B) It was finished in two months.", "(C) It will be landscaped next week.", "(D) Its bedrooms are all the same size."], answer: "C", explanation: "기사에서 집이 다음 주에 조경 작업을 할 것이라고 명시되어 있습니다. 정답은 (C) '다음 주에 조경될 것이다'입니다." }
        ]
    },
    {
        id: "set-191-195",
        type: "Triple",
        passages: [
            {
                id: "p191-1",
                type: "JOB POSTING",
                content: `**Gallery manager at Richard Lahiri Gallery in Cromwood**

Applicants for this full-time position must have experience in retail art with an established history of successfully attracting patrons interested in purchasing original works of art. Experience managing a social media account is also desired. The position will be primarily on-site; however, some remote hours can be scheduled. Candidates must be available to start work on or before April 1. Qualified applicants should contact gallery director Richard Lahiri at rlahiri@richardlahirigallery.com.`
            },
            {
                id: "p191-2",
                type: "FLYER",
                title: "Summer Scene Arts Program",
                content: `Starting on May 1, five art galleries in Cromwood will be hosting open houses every Friday from May through August. Come enjoy live music, refreshments, artist talks, and more on the Cromwood boardwalk. Activities start at 4:00 P.M. and continue until 9:30 P.M., rain or shine. Participating galleries are listed below.

**Rita Blake Art • Siitva Gallery • Richard Lahiri Gallery**
**Patricia Dolivo Painting • Ashland Pottery and Crafts**

Funded by the Cromwood City Council and Regents Bank`
            },
            {
                id: "p191-3",
                type: "ARTICLE",
                title: "Summer Activities in Middleton County",
                content: `**Summer Activities in Middleton County**
Compiled by Lisa Yu-Seaver

**Cromwood Art Nights**
Residents of Elmhurst, Melbridge, and Cromwood are invited to explore the local art scene in Cromwood this summer. The five galleries on the boardwalk overlooking the Wye River are holding special events each Friday as part of the Summer Scene Arts Program. This Friday, Richard Lahiri and his gallery manager, Geetu Gelang, will use a giant screen to demonstrate software for creating virtual art. The event will also feature craft vendors, food trucks, and live music. See www.cromwood.gov/things-to-do for more information.

**Movies in Brady Park**
The popular summer movie series in Herrontown returns on June 16! Each Saturday evening, a classic film will be projected on Brady Park's Grand Lawn. Bring your picnic basket and a blanket and get comfortable! The schedule of films is available at www.bradypark.org/activities.`
            }
        ],
        questions: [
            { id: "191", text: "What is stated in the job posting about the managerial position?", options: ["(A) It is fully on-site.", "(B) It is Mr. Lahiri's current job.", "(C) It requires sales experience.", "(D) It will be part-time until April 1."], answer: "C", explanation: "채용 공고에서 예술 작품 구매에 관심 있는 후원자를 유치한 성공적인 경험이 있어야 한다고 명시되어 있습니다. 이는 판매 경험을 요구하는 것입니다. 정답은 (C) '판매 경험이 필요하다'입니다." },
            { id: "192", text: "According to the flyer, what will happen on May 1?", options: ["(A) A public arts program will begin.", "(B) A city council meeting will take place.", "(C) A new art gallery will hold a grand opening.", "(D) Regents Bank will be closed for the day."], answer: "A", explanation: "전단지에서 5월 1일부터 Summer Scene Arts Program이 시작된다고 명시되어 있습니다. 정답은 (A) '공공 예술 프로그램이 시작될 것이다'입니다." },
            { id: "193", text: "What is suggested about Ashland Pottery and Crafts?", options: ["(A) It is located near the Wye River.", "(B) It specializes in virtual art.", "(C) It hosts pottery workshops every week.", "(D) It is sponsoring a summer movie series."], answer: "A", explanation: "기사에서 Wye River를 내려다보는 산책로에 있는 5개 갤러리가 행사를 연다고 했고, Ashland Pottery and Crafts는 그 중 하나입니다. 따라는 Wye River 근처에 위치해 있음을 알 수 있습니다. 정답은 (A) 'Wye River 근처에 위치해 있다'입니다." },
            { id: "194", text: "What is suggested about Geetu Gelang?", options: ["(A) She is a local musician.", "(B) She will be selling her crafts on May 1.", "(C) She plans to start a social media account.", "(D) She was recently hired by the Richard Lahiri Gallery."], answer: "D", explanation: "기사에서 Geetu Gelang을 Richard Lahiri의 갤러리 매니저로 소개하고 있습니다. 잡 포스팅에서 매니저 포스팅이 4월 1일 이전에 시작해야 한다고 했고, 기사는 5월 이후의 행사를 다루고 있으므로 그녀는 최근에 고용되었음을 알 수 있습니다. 정답은 (D) 'Richard Lahiri 갤러리에 최근 고용되었다'입니다." },
            { id: "195", text: "According to the article, where is Brady Park located?", options: ["(A) In Cromwood", "(B) In Elmhurst", "(C) In Herrontown", "(D) In Melbridge"], answer: "C", explanation: "기사에서 Herrontown의 Brady Park에서 영화 시리즈가 열린다고 명시되어 있습니다. 정답은 (C) 'Herrontown에'입니다." }
        ]
    },
    {
        id: "set-196-200",
        type: "Triple",
        passages: [
            {
                id: "p196-1",
                type: "ARTICLE",
                title: "Senano Designs Buys Gendalla in $60 Million Deal",
                content: `**Senano Designs Buys Gendalla in $60 Million Deal**

LOS ANGELES (March 20)—Fashion powerhouse Senano Designs announced on Wednesday that it had acquired Gendalla, an up-and-coming luxury brand. The acquisition is part of Senano's plan to supplement its clothing products with a line of designer watches. Over the next two years, the company has further plans to expand its offerings to include fragrances and luggage. Lina Pacheco, Senano's chief executive officer, said that such expansion is necessary to keep up and compete with other international fashion houses. Although based in Los Angeles, in recent years Senano has opened offices in Philadelphia, Chicago, and Miami. Ms. Pacheco says she was unfamiliar with Gendalla products until a year ago, when she saw one of their ads in an automobile magazine. "The products have a distinctive, modern style," Ms. Pacheco said, "which will go well with Senano's trendsetting clothes."`
            },
            {
                id: "p196-2",
                type: "MEMO",
                content: `**MEMO**

From: Oscar Johansen, Accounting department
To: All Gendalla employees
Date: March 22
Subject: Travel expense policy
Attachment: Policy

I have attached a copy of Senano's policy on travel expenses, which will go into effect when we officially become employees of Senano on March 31.

Note that Senano's policy is more restrictive than Gendalla's policy in several ways. For example, employees will no longer have one month to submit expense reports. However, the new policy will make some processes much easier: specifically, Senano's requirements for submitting expenses under $50 are simpler than those under current Gendalla policy.

Carlie Dawson, an accounting director who works at Senano's headquarters, will come to our New York office to lead an information session about this and other policy-related changes on Thursday, March 28, at 2:00 P.M. I strongly encourage you to attend.`
            },
            {
                id: "p196-3",
                type: "POLICY",
                title: "Senano Designs Travel Expense Policy",
                content: `**Senano Designs**
**Travel Expense Policy**

*   To be reimbursed for work-related travel, employees must submit a travel request at least two weeks before a trip, listing the reason for travel and estimating all expenses.
*   Original receipts must be submitted for expenses above $50. Any expenses below that do not require the submission of original receipts.
*   All receipts and expense reports must be submitted within three weeks after a trip is completed. Expenses submitted after this time will require the approval of the department head.

Page 1`
            }
        ],
        questions: [
            { id: "196", text: "What does Gendalla mainly produce?", options: ["(A) Watches", "(B) Luggage", "(C) Clothing", "(D) Fragrances"], answer: "A", explanation: "기사에서 Senano가 의류 제품을 보충하기 위해 디자이너 시계 라인을 가진 Gendalla를 인수했다고 했습니다. 따라서 Gendalla는 주로 시계를 생산합니다. 정답은 (A) '시계'입니다." },
            { id: "197", text: "According to the article, why is Senano Designs acquiring Gendalla?", options: ["(A) To sell products at a lower price", "(B) To expand its social media presence", "(C) To offer a more diverse range of products", "(D) To address declining sales in some cities"], answer: "C", explanation: "기사에서 인수가 시계, 향수, 수하물 등으로 제품군을 확장하려는 계획의 일부라고 했습니다. 정답은 (C) '더 다양한 제품을 제공하기 위해'입니다." },
            { id: "198", text: "What are Gendalla's employees invited to do on March 28?", options: ["(A) Suggest changes to a travel policy", "(B) Attend a meeting in the afternoon", "(C) Tour Senano's corporate headquarters", "(D) Make an appointment with an accountant"], answer: "B", explanation: "메모에서 3월 28일 오후 2시에 열리는 정보 세션(미팅)에 참석하도록 초대했습니다. 정답은 (B) '오후에 회의에 참석하다'입니다." },
            { id: "199", text: "Where is Ms. Dawson's office?", options: ["(A) In New York", "(B) In Chicago", "(C) In Philadelphia", "(D) In Los Angeles"], answer: "D", explanation: "메모에서 Ms. Dawson이 Senano의 본사(headquarters)에서 일한다고 했습니다. 기사에서 Senano가 Los Angeles에 본사를 두고 있다고(based in Los Angeles) 했습니다. 정답은 (D) 'In Los Angeles'입니다." },
            { id: "200", text: "How is Gendalla's current travel expense policy likely different from Senano's?", options: ["(A) A receipt must be submitted for every expense.", "(B) Preapproval must be obtained for expenses over $50.", "(C) The expense report must be signed by a manager.", "(D) Employees can submit their expense reports jointly."], answer: "A", explanation: "메모에서 $50 미만 경비에 대한 Senano의 제출 요건이 Gendalla보다 간단하다고 했습니다. 정책에서 Senano는 $50 미만에 대해 영수증이 필요 없다고 했으므로, Gendalla는 모든 경비에 대해 영수증을 요구했을 가능성이 큽니다. 정답은 (A) '모든 경비에 대해 영수증을 제출해야 한다'입니다." }
        ]
    }
];
