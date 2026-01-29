import { PracticeSet } from './rc_part7_types';

export const test5PracticeSet: PracticeSet[] = [
    // Questions 176-180 (Double Passage)
    {
        id: "p7-t5-set11",
        questionRange: "176-180",
        setType: "Double",
        passages: [
            {
                id: "p7-t5-s11-p1",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Cassie Rafferty <cassie@mailcurrent.ie>\nFrom: Youssef Zimri <zimri@zimrimechanical.ie>\nSubject: Following up\nDate: 12 September\nAttachment: @cmcclinic\n\nDear Ms. Rafferty,\n\nI am very happy with your work so far. Your suggestion to add photos from our archive certainly dressed up the "Company History" page. The help-wanted pop-up bubble on the home page also looks good. Hopefully, it will attract applicants with mechanical experience.\n\nI'd like you to add one more project to our "Portfolio" page. We have finally finished replacing the plumbing and heating systems at Clary Medical Centre's satellite clinic in Galway. It was a challenging job, and I'm proud of our results. The attachment contains photos and a short description of what we did there.\n\nSincerely,\nYoussef Zimri\nOwner, Zimri Mechanical`
            },
            {
                id: "p7-t5-s11-p2",
                contextType: "P4",
                docType: "WEB_PAGE",
                title: "Clary Medical Center - Clinic opening soon",
                content: `https://www.clarymedicalcentre.ie\n\n| About | **News** | Staff | Contact Us |\n|---|---|---|---|\n\n# Clinic opening soon\n\nWe have repurposed 47 High Street, Galway, into a satellite medical clinic and will celebrate with a grand opening party on Friday, 28 October. Remarks by Medical Director Dr. Celia O'Leary and local elected officials will begin promptly at 1:00 P.M., followed by a ribbon-cutting ceremony and tours until 4:30 P.M.\n\nThirty miles from the Clary Medical Centre's main campus, the Clary Clinic is housed in the historic Brandmore shoe factory, which closed more than two decades ago. During renovations, care was taken to maintain the exterior's nineteenth-century architectural features. The clinic's interior boasts eighteen examination rooms, a state-of-the-art x-ray facility, private offices for patient consultations, and a lab for processing patient samples.\n\nClinic staff will begin seeing patients on Tuesday, 1 November. To make an appointment, please call 020 915 1424.`
            }
        ],
        questions: [
            {
                id: "p7-t5-q176",
                questionNo: 176,
                text: "Who most likely is Ms. Rafferty?",
                options: {
                    "A": "A job recruiter",
                    "B": "A Web site contractor",
                    "C": "A Galway historian",
                    "D": "A mechanical engineer"
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                explanation: "이메일에서 Zimri 씨는 Rafferty 씨에게 '회사 역사 페이지' 수정과 '홈페이지 팝업' 등에 대해 만족한다고 했습니다. 이는 그녀가 웹사이트 관련 작업을 수행하는 외부 계약자임을 시사합니다."
            },
            {
                id: "p7-t5-q177",
                questionNo: 177,
                text: "What is indicated about Mr. Zimri?",
                options: {
                    "A": "He is trying to recruit employees.",
                    "B": "He is a member of Clary Medical Center's board of directors.",
                    "C": "He manages the company's work at a former shoe factory.",
                    "D": "He is waiting for Dr. O'Leary's feedback on a portfolio."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "이메일에서 Zimri 씨는 홈페이지에 올린 '구인 팝업(help-wanted pop-up)'이 기계 분야 경력이 있는 지원자들을 끌어들이기를 바란다고 했습니다. 따라서 그는 직원을 채용하려 하고 있습니다."
            },
            {
                id: "p7-t5-q178",
                questionNo: 178,
                text: "According to the Web page, what will happen at the grand opening event?",
                options: {
                    "A": "Government officials will be in attendance.",
                    "B": "Sandwiches will be served.",
                    "C": "New building plans will be revealed.",
                    "D": "Former patients will be interviewed."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "웹 페이지에서 개관 파티에 '지역 선출직 관리들(local elected officials)'의 연설이 예정되어 있다고 했습니다. 이는 정부 관계자가 참석함을 의미합니다."
            },
            {
                id: "p7-t5-q179",
                questionNo: 179,
                text: "On the Web page, the word 'maintain' in paragraph 2, line 3, is closest in meaning to",
                options: {
                    "A": "assert",
                    "B": "head",
                    "C": "inspect",
                    "D": "preserve"
                },
                correctAnswer: "D",
                classification: "P7_VOCABULARY",
                explanation: "본문에서 19세기 건축적 특징을 '유지하기(maintain)' 위해 주의를 기울였다고 했으므로, 이는 '보존하다(preserve)'와 가장 가깝습니다."
            },
            {
                id: "p7-t5-q180",
                questionNo: 180,
                text: "According to the Web page, what is NOT part of Clary Clinic?",
                options: {
                    "A": "A medical laboratory",
                    "B": "A pharmacy",
                    "C": "X-ray facility",
                    "D": "Examination rooms"
                },
                correctAnswer: "B",
                classification: "P7_NEGATIVE",
                explanation: "본문에는 18개의 검사실, X-ray 시설, 상담실, 실험실(lab)은 언급되어 있으나, 약국(pharmacy)은 언급되지 않았습니다."
            }
        ]
    },
    // Questions 181-185 (Double Passage)
    {
        id: "p7-t5-set12",
        questionRange: "181-185",
        setType: "Double",
        passages: [
            {
                id: "p7-t5-s12-p1",
                contextType: "P5",
                docType: "PURCHASE_ORDER",
                content: `**Pirate's Bounty Seafood**\n11 Harbor Street\nCharlottetown, Prince Edward Island, C1A 0A5\n2 October\nPurchase Order: 5338\n\n| VENDOR | SHIP TO |\n|---|---|\n| Rochette's Commercial Refrigeration<br>2175 Lyons Avenue<br>Guelph, Ontario, N1C 0A1<br>519-555-0112 | Pirate's Bounty Seafood<br>11 Harbor Street<br>Charlottetown, Prince Edward Island, C1A 0A5<br>Attn: Lenore Okiya<br>782-555-0145 |\n\n| ITEM NUMBER | DESCRIPTION | QUANTITY | PRICE | TOTAL |\n|---|---|---|---|---|\n| BF550 | Blizzard walk-in freezer<br>Features: 1.5m x 2m x 2.5m, adjustable shelves, aluminum flooring, galvanized steel panels | 1 | $6,400.00 | $6,400.00 |\n\n| COMMENTS OR SPECIAL INSTRUCTIONS | | |\n|---|---|---|\n| Restaurant expanding. Need unit by 17 November. | **SUBTOTAL** | $6,400.00 |\n| | **TAX** | $960.00 |\n| | **GRAND TOTAL** | **$7,360.00** |`
            },
            {
                id: "p7-t5-s12-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Lenore Okiya <lokiya@piratesbounty.ca>\nFrom: Shaliya Umuma <customerservice@rochettesrefrigeration.ca>\nDate: 3 October\nSubject: Purchase Order 5338\n\nDear Ms. Okiya,\n\nWe received your purchase order for the Blizzard walk-in freezer. Unfortunately, the model you requested is on back order and will not be available for three months. We regret the inconvenience and would like to offer you some options.\n\nI can offer you the Blizzard BF600, which measures 2m x 2.5m x 3m, at the discounted price of $6,900 plus tax. It comes with the same features as the item you ordered. Alternately, we have a refurbished BF400 in stock. It's the same size as the BF550; however, while the BF550 includes a remote control for setting the temperature, the BF400 has a wall-mounted device for that purpose. The BF400 unit comes with a two-year warranty. It is priced at $5,600 plus tax.\n\nPlease let me know how you wish to proceed. Just reply to this e-mail.\n\nShaliya Umuma, Customer Service Manager`
            }
        ],
        questions: [
            {
                id: "p7-t5-q181",
                questionNo: 181,
                text: "Why does Pirate's Bounty Seafood need to purchase new equipment?",
                options: {
                    "A": "Its current equipment needs servicing.",
                    "B": "The warranty on its current refrigerator has expired.",
                    "C": "Its business is increasing in size.",
                    "D": "The restaurant is moving to a new location."
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "구매 주문서의 'COMMENTS'란에 'Restaurant expanding(레스토랑 확장 중)'이라고 명시되어 있습니다. 이는 사업 규모가 커지고 있음을 나타냅니다."
            },
            {
                id: "p7-t5-q182",
                questionNo: 182,
                text: "What is the problem with the item Ms. Okiya ordered?",
                options: {
                    "A": "It is the wrong color.",
                    "B": "It has been discontinued.",
                    "C": "It is temporarily out of stock.",
                    "D": "It has a damaged control panel."
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "이메일에서 주문한 모델이 'back order(입고 지연)' 상태여서 3개월 동안 이용할 수 없다고 했습니다. 이는 일시적인 품절 상태를 의미합니다."
            },
            {
                id: "p7-t5-q183",
                questionNo: 183,
                text: "What is NOT a feature of the Blizzard BF600?",
                options: {
                    "A": "A fast-freeze switch",
                    "B": "Adjustable shelves",
                    "C": "Aluminum flooring",
                    "D": "Galvanized steel panels"
                },
                correctAnswer: "A",
                classification: "P7_NEGATIVE",
                explanation: "이메일에 따르면 BF600은 주문 제품(BF550)과 동일한 기능을 갖추고 있습니다. 주문서에 기재된 BF550의 기능 중 'fast-freeze switch'는 없습니다."
            },
            {
                id: "p7-t5-q184",
                questionNo: 184,
                text: "According to the e-mail, what does the BF400 model come with?",
                options: {
                    "A": "A user manual",
                    "B": "A remote control",
                    "C": "A warranty",
                    "D": "A tax waiver"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "이메일에서 BF400 유닛은 '2년 보증(two-year warranty)'이 함께 제공된다고 명시되어 있습니다."
            },
            {
                id: "p7-t5-q185",
                questionNo: 185,
                text: "In the e-mail, the word 'Just' in paragraph 3, line 1, is closest in meaning to",
                options: {
                    "A": "immediately",
                    "B": "kindly",
                    "C": "shortly",
                    "D": "simply"
                },
                correctAnswer: "D",
                classification: "P7_VOCABULARY",
                explanation: "이메일 끝부분의 'Just reply to this e-mail'에서 'Just'는 '단순히(simply)'의 의미로 사용되었습니다."
            }
        ]
    },
    // Questions 186-190 (Triple Passage)
    {
        id: "p7-t5-set13",
        questionRange: "186-190",
        setType: "Triple",
        passages: [
            {
                id: "p7-t5-s13-p1",
                contextType: "P5",
                docType: "SCHEDULE",
                title: "Fifth Annual International Marketing Society Conference",
                content: `23-25 October, Grant Hotel and Conference Centre, London\n\n**Day 1:**\n\n| Time | Description | Venue |\n|---|---|---|\n| 7:00 A.M. to 8:00 A.M. | Morning Social: Complimentary omelets, pastries, coffee, tea | Mezzanine |\n| 8:30 A.M. to 10:00 A.M. | Marcos Secada, founder and CEO, Grindstone Marketing Group | Room 2 |\n| 10:30 A.M. to noon | Claire Song, business columnist and best-selling author | Room 10 |\n| 12:30 P.M. to 2:00 P.M. | Lunch (ticket purchase required) | Alexander Ballroom |`
            },
            {
                id: "p7-t5-s13-p2",
                contextType: "P1",
                docType: "EMAIL",
                content: `To: Nadir Kalwar <kalwar.n@kdbuildingconcepts.com>\nFrom: Olek Dzik <odzik.k@kdbuildingconcepts.com>\nDate: 12 May\nSubject: Upcoming marketing campaign\nAttachment: @Link to video\n\nNadir,\n\nThanks for your help with the corporate marketing plan. Attached is a link to the video created for us by Grindstone Marketing Group. It shows our 3-D printing equipment pouring fast-setting concrete, layer by layer. I think it looks great as is, and I believe it will be the most compelling aspect of our 1 June launch, especially if the Sheffield house is sold by then.\n\nIn case you haven't heard, our next construction project will be a home just a couple of kilometres from your office building!\n\nOlek`
            },
            {
                id: "p7-t5-s13-p3",
                contextType: "P3",
                docType: "ARTICLE",
                title: "House Constructed Using 3-D Technology For Sale",
                content: `SHEFFIELD (15 May)—An international construction firm specializing in innovative building technologies has completed one of Britain's first 3-D printed houses. The new structure is located on Morgan Road in Sheffield.\n\nKD Building Concepts took less than two weeks to execute the first phase of the project, which entailed printing the concrete walls and installing the electrical and plumbing systems, according to company president Olek Dzik. In just two months, the fully landscaped house with two bedrooms and two bathrooms was ready for market.\n\n"Labour costs were cut in half thanks to 3-D printing technology," said Mr. Dzik, whose company has offices in France and Germany, as well as in Sheffield. "At KD Building Concepts, we are committed to building homes that are both affordable and luxurious."\n\nThe house was listed for sale this week by a local real estate broker. The asking price is £150,000.\n\nNext on the horizon for KD Building Concepts is the construction of a home in Hamburg, Germany.`
            }
        ],
        questions: [
            {
                id: "p7-t5-q186",
                questionNo: 186,
                text: "What is mentioned on the schedule?",
                options: {
                    "A": "Free breakfast is available for conference attendees.",
                    "B": "A keynote address will be delivered at the end of the first day.",
                    "C": "Lunch is included in the conference registration fee.",
                    "D": "A featured speaker has been replaced."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "일정표의 7:00~8:00 시간대에 'Complimentary(무료의)' 오믈렛, 페이스트리 등이 제공된다고 되어 있으므로 무료 아침 식사가 가능함을 알 수 있습니다."
            },
            {
                id: "p7-t5-q187",
                questionNo: 187,
                text: "According to the schedule, what will happen in Room 10?",
                options: {
                    "A": "A writer will give a presentation.",
                    "B": "Coffee will be served in the lobby.",
                    "C": "Lunch tickets will be sold.",
                    "D": "A revised schedule will be distributed."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "일정표에 따르면 Room 10에서는 비즈니스 칼럼니스트이자 베스트셀러 작가(author)인 Claire Song의 세션이 열립니다."
            },
            {
                id: "p7-t5-q188",
                questionNo: 188,
                text: "What can be concluded about Mr. Dzik?",
                options: {
                    "A": "He wants a new marketing video produced.",
                    "B": "He has asked Mr. Kalwar for a new marketing plan.",
                    "C": "He will attend a conference in London.",
                    "D": "He hired Mr. Secada's firm for a project."
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                explanation: "Dzik 씨는 이메일에서 'Grindstone Marketing Group'이 만든 비디오를 언급했고, 일정표를 보면 Marcos Secada가 해당 회사의 대표입니다. 따라서 Dzik 씨가 Secada 씨의 회사를 고용했음을 알 수 있습니다."
            },
            {
                id: "p7-t5-q189",
                questionNo: 189,
                text: "What is suggested about Nadir Kalwar?",
                options: {
                    "A": "He is a videographer.",
                    "B": "He lives in Sheffield.",
                    "C": "He works at KD Building Concepts.",
                    "D": "He is a real estate agent."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                explanation: "이메일의 수신자 주소가 'kalwar.n@kdbuildingconcepts.com'이며, Olek Dzik이 마케팅 계획에 도움을 준 것에 감사하다고 말하고 있으므로 같은 회사 직원임을 알 수 있습니다."
            },
            {
                id: "p7-t5-q190",
                questionNo: 190,
                text: "What does the article indicate about the house?",
                options: {
                    "A": "It cost £150,000 to build.",
                    "B": "It was finished in two months.",
                    "C": "It will be landscaped next week.",
                    "D": "Its bedrooms are all the same size."
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "기사 두 번째 단락에서 'In just two months... was ready for market(단 2개월 만에 시장에 나올 준비가 되었다)'고 했으므로 2개월 만에 완공되었음을 알 수 있습니다."
            }
        ]
    },
    // Questions 191-195 (Triple Passage)
    {
        id: "p7-t5-set14",
        questionRange: "191-195",
        setType: "Triple",
        passages: [
            {
                id: "p7-t5-s14-p1",
                contextType: "P4",
                docType: "JOB_POSTING",
                content: `**Gallery manager at Richard Lahiri Gallery in Cromwood**\n\nApplicants for this full-time position must have experience in retail art with an established history of successfully attracting patrons interested in purchasing original works of art. Experience managing a social media account is also desired. The position will be primarily on-site; however, some remote hours can be scheduled. Candidates must be available to start work on or before April 1. Qualified applicants should contact gallery director Richard Lahiri at rlahiri@richardlahirigallery.com.`
            },
            {
                id: "p7-t5-s14-p2",
                contextType: "P4",
                docType: "FLYER",
                title: "Summer Scene Arts Program",
                content: `Starting on May 1, five art galleries in Cromwood will be hosting open houses every Friday from May through August. Come enjoy live music, refreshments, artist talks, and more on the Cromwood boardwalk. Activities start at 4:00 P.M. and continue until 9:30 P.M., rain or shine. Participating galleries are listed below.\n\n**Rita Blake Art • Siitva Gallery • Richard Lahiri Gallery**\n**Patricia Dolivo Painting • Ashland Pottery and Crafts**\n\nFunded by the Cromwood City Council and Regents Bank`
            },
            {
                id: "p7-t5-s14-p3",
                contextType: "P3",
                docType: "ARTICLE",
                title: "Summer Activities in Middleton County",
                content: `**Cromwood Art Nights**\nCompiled by Lisa Yu-Seaver\n\nResidents of Elmhurst, Melbridge, and Cromwood are invited to explore the local art scene in Cromwood this summer. The five galleries on the boardwalk overlooking the Wye River are holding special events each Friday as part of the Summer Scene Arts Program. This Friday, Richard Lahiri and his gallery manager, Geetu Gelang, will use a giant screen to demonstrate software for creating virtual art. The event will also feature craft vendors, food trucks, and live music. See www.cromwood.gov/things-to-do for more information.\n\n**Movies in Brady Park**\nThe popular summer movie series in Herrontown returns on June 16! Each Saturday evening, a classic film will be projected on Brady Park's Grand Lawn. Bring your picnic basket and a blanket and get comfortable! The schedule of films is available at www.bradypark.org/activities.`
            }
        ],
        questions: [
            {
                id: "p7-t5-q191",
                questionNo: 191,
                text: "What is stated in the job posting about the managerial position?",
                options: {
                    "A": "It is fully on-site.",
                    "B": "It is Mr. Lahiri's current job.",
                    "C": "It requires sales experience.",
                    "D": "It will be part-time until April 1."
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "채용 공고에서 '예술 작품 구매에 관심 있는 후원을 유치한 성공적인 이력(history of successfully attracting patrons interested in purchasing)'을 요구하므로 판매 경험이 필요함을 알 수 있습니다."
            },
            {
                id: "p7-t5-q192",
                questionNo: 192,
                text: "According to the flyer, what will happen on May 1?",
                options: {
                    "A": "A public arts program will begin.",
                    "B": "A city council meeting will take place.",
                    "C": "A new art gallery will hold a grand opening.",
                    "D": "Regents Bank will be closed for the day."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "전단지에 따르면 5월 1일부터 'Summer Scene Arts Program'이 시작된다고 되어 있습니다."
            },
            {
                id: "p7-t5-q193",
                questionNo: 193,
                text: "What is suggested about Ashland Pottery and Crafts?",
                options: {
                    "A": "It is located near the Wye River.",
                    "B": "It specializes in virtual art.",
                    "C": "It hosts pottery workshops every week.",
                    "D": "It is sponsoring a summer movie series."
                },
                correctAnswer: "A",
                classification: "P7_LINK",
                explanation: "기사(지문 3)에서 5개의 갤러리가 'Wye 강이 내려다보이는 산책로(boardwalk overlooking the Wye River)'에 있다고 했고, 전단지(지문 2)에서 Ashland Pottery and Crafts가 참여 갤러리 중 하나임을 확인할 수 있습니다."
            },
            {
                id: "p7-t5-q194",
                questionNo: 194,
                text: "What is suggested about Geetu Gelang?",
                options: {
                    "A": "She is a local musician.",
                    "B": "She will be selling her crafts on May 1.",
                    "C": "She plans to start a social media account.",
                    "D": "She was recently hired by the Richard Lahiri Gallery."
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                explanation: "채용 공고(지문 1)에서는 4월 1일까지 출근 가능한 매니저를 모집 중이었고, 기사(지문 3, 여름 행사 내용)에서 Geetu Gelang이 매니저로 언급되므로 그녀가 최근에 채용되었음을 추론할 수 있습니다."
            },
            {
                id: "p7-t5-q195",
                questionNo: 195,
                text: "According to the article, where is Brady Park located?",
                options: {
                    "A": "In Cromwood",
                    "B": "In Elmhurst",
                    "C": "In Herrontown",
                    "D": "In Melbridge"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "기사의 세 번째 단락에서 'Herrontown의 Brady Park에서의 인기 있는 여름 영화 시리즈가 돌아온다'고 명시되어 있습니다."
            }
        ]
    },
    // Questions 196-200 (Triple Passage)
    {
        id: "p7-t5-set15",
        questionRange: "196-200",
        setType: "Triple",
        passages: [
            {
                id: "p7-t5-s15-p1",
                contextType: "P3",
                docType: "ARTICLE",
                title: "Senano Designs Buys Gendalla in $60 Million Deal",
                content: `LOS ANGELES (March 20)—Fashion powerhouse Senano Designs announced on Wednesday that it had acquired Gendalla, an up-and-coming luxury brand. The acquisition is part of Senano's plan to supplement its clothing products with a line of designer watches. Over the next two years, the company has further plans to expand its offerings to include fragrances and luggage. Lina Pacheco, Senano's chief executive officer, said that such expansion is necessary to keep up and compete with other international fashion houses. Although based in Los Angeles, in recent years Senano has opened offices in Philadelphia, Chicago, and Miami. Ms. Pacheco says she was unfamiliar with Gendalla products until a year ago, when she saw one of their ads in an automobile magazine. "The products have a distinctive, modern style," Ms. Pacheco said, "which will go well with Senano's trendsetting clothes."`
            },
            {
                id: "p7-t5-s15-p2",
                contextType: "P1",
                docType: "MEMO",
                content: `**MEMO**\nFrom: Oscar Johansen, Accounting department\nTo: All Gendalla employees\nDate: March 22\nSubject: Travel expense policy\nAttachment: Policy\n\nI have attached a copy of Senano's policy on travel expenses, which will go into effect when we officially become employees of Senano on March 31.\n\nNote that Senano's policy is more restrictive than Gendalla's policy in several ways. For example, employees will no longer have one month to submit expense reports. However, the new policy will make some processes much easier: specifically, Senano's requirements for submitting expenses under $50 are simpler than those under current Gendalla policy.\n\nCarlie Dawson, an accounting director who works at Senano's headquarters, will come to our New York office to lead an information session about this and other policy-related changes on Thursday, March 28, at 2:00 P.M. I strongly encourage you to attend.`
            },
            {
                id: "p7-t5-s15-p3",
                contextType: "P6",
                docType: "POLICY",
                title: "Senano Designs Travel Expense Policy",
                content: `**Senano Designs - Travel Expense Policy**\n\n* To be reimbursed for work-related travel, employees must submit a travel request at least two weeks before a trip, listing the reason for travel and estimating all expenses.\n* Original receipts must be submitted for expenses above $50. Any expenses below that do not require the submission of original receipts.\n* All receipts and expense reports must be submitted within three weeks after a trip is completed. Expenses submitted after this time will require the approval of the department head.`
            }
        ],
        questions: [
            {
                id: "p7-t5-q196",
                questionNo: 196,
                text: "What does Gendalla mainly produce?",
                options: {
                    "A": "Watches",
                    "B": "Luggage",
                    "C": "Clothing",
                    "D": "Fragrances"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "기사(지문 1)에서 Senano가 의류 제품을 보충하기 위해 '디자이너 시계 라인(line of designer watches)'을 가진 Gendalla를 인수했다고 했습니다."
            },
            {
                id: "p7-t5-q197",
                questionNo: 197,
                text: "According to the article, why is Senano Designs acquiring Gendalla?",
                options: {
                    "A": "To sell products at a lower price",
                    "B": "To expand its social media presence",
                    "C": "To offer a more diverse range of products",
                    "D": "To address declining sales in some cities"
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                explanation: "기사에서 인수가 시계, 향수, 수하물 등으로 제품군을 확장(expand its offerings)하려는 계획의 일부라고 언급했습니다."
            },
            {
                id: "p7-t5-q198",
                questionNo: 198,
                text: "What are Gendalla's employees invited to do on March 28?",
                options: {
                    "A": "Suggest changes to a travel policy",
                    "B": "Attend a meeting in the afternoon",
                    "C": "Tour Senano's corporate headquarters",
                    "D": "Make an appointment with an accountant"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "메모(지문 2)에서 3월 28일 오후 2시(2:00 P.M.)에 정보 세션(information session)에 참석하도록 권장하고 있습니다."
            },
            {
                id: "p7-t5-q199",
                questionNo: 199,
                text: "Where is Ms. Dawson's office?",
                options: {
                    "A": "In New York",
                    "B": "In Chicago",
                    "C": "In Philadelphia",
                    "D": "In Los Angeles"
                },
                correctAnswer: "D",
                classification: "P7_LINK",
                explanation: "메모에서 Dawson 씨는 Senano의 '본사(headquarters)'에서 일한다고 했고, 기사에서 Senano의 본사는 'Los Angeles'에 위치해 있다고 했습니다."
            },
            {
                id: "p7-t5-q200",
                questionNo: 200,
                text: "How is Gendalla's current travel expense policy likely different from Senano's?",
                options: {
                    "A": "The timeframe for submitting a report is longer.",
                    "B": "A receipt must be submitted for every expense.",
                    "C": "The expense report must be signed by a manager.",
                    "D": "Employees are reimbursed more quickly."
                },
                correctAnswer: "A",
                classification: "P7_LINK",
                explanation: "메모에서 Senano의 정책이 더 엄격하며, 예시로 '더 이상 보고서 제출에 한 달의 시간이 주어지지 않을 것(no longer have one month)'이라고 했습니다. 반면 지문 3의 Senano 정책은 3주 이내 제출이므로, 기존 Gendalla 정책은 제출 기한이 더 길었음을 알 수 있습니다."
            }
        ]
    }
];
