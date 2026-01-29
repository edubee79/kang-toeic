import { PracticeSet } from './rc_part7_types';

export const test2PracticeSet: PracticeSet[] = [
    // Questions 176-180 (Double Passage)
    {
        id: "p7-t2-set11",
        questionRange: "176-180",
        setType: "Double",
        passages: [
            {
                id: "p7-t2-s11-p1",
                contextType: "P1", // E-MAIL
                docType: "E-MAIL",
                content: `From: Malalyn Korlake <mkorlake@fatiorlabs.com>\nTo: Omar Nikitas <onikitas@karabolt.com>, Jay Tropic <jtropic@karabolt.com>\nDate: 24 January\nSubject: Taste-test results\nAttachment: Fatior Labs survey results\n\nHi, Team,\n\nI just received the 24-26 January survey results from Region Labs for test you ran on our ice cream taste test. As you can see from the attached document, the results are very disappointing. We sent the four flavours that we considered to be the best of the 15 we tested. However, the results indicate that our products were not well received. The Lemon and Mango flavours were considered among the 92 taste-test participants in our target market of consumers ages 25 through 40. This is a big problem if a product gets the worst rating. It is going to be hard to market them. We need to discuss this at our meeting on Monday. I suggest we drop the Lemon and Mango flavours from the best category.\n\nI would like to meet at 9 A.M. on Monday (6 February) to figure out how to proceed. There is no time to lose. The deadline for submitting our top three flavours to headquarters, as suggested by most of our taste testers. We will also need to get some new flavours to Fatior Labs no later than 1 March if we are going to get to ice cream to the Preston Grocers.\n\nMalalyn Korlake`
            },
            {
                id: "p7-t2-s11-p2",
                contextType: "P5", // SURVEY FORM
                docType: "SURVEY FORM",
                title: "Fatior Labs Consumer Taste-Testing Survey",
                content: `Date: 24 January\nCompany: Karabolt Industries\nParticipant number: 54\n\nDirections: You will be given a 45 g sample of 4 different ice creams. Please rate the flavour, texture, sweetness, and colour of each on a scale of 1 (very unpleasant) to 5 (very pleasant). Please write any additional comments below.\n\n| Flavour | Taste | Texture | Sweetness | Colour |\n|---|---|---|---|---|\n| Lemon | 2 | 5 | 2 | 4 |\n| Mango | 2 | 5 | 2 | 1 |\n| Salted Caramel | 2 | 1 | 1 | 5 |\n| Peanut Brittle | 4 | 4 | 2 | 2 |\n\nComments: The fruit-flavoured ice creams were surprisingly sour. I did not care for them at all. I think the Peanut Brittle has the most potential, but it's missing something. I bet that adding chocolate swirls or brownie bits would make it a winner.`
            }
        ],
        questions: [
            {
                id: "p7-t2-q176",
                questionNo: 176,
                text: "What does the e-mail indicate about Karabolt Industries?",
                options: {
                    "A": "It is planning to open new stores.",
                    "B": "Its ice-testing can be changed easily.",
                    "C": "Its popularity has decreased recently.",
                    "D": "It has a meeting scheduled for 6 February."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "이메일에서 Ms. Korlake는 2월 6일 월요일 오전 9시에 회의를 하고 싶다고 명시했습니다. 따라서 정답은 (D) '2월 6일에 회의가 예정되어 있다'입니다."
            },
            {
                id: "p7-t2-q177",
                questionNo: 177,
                text: "What does Ms. Korlake state that she wants to do?",
                options: {
                    "A": "Visit a laboratory",
                    "B": "Hold a team meeting",
                    "C": "Hire more employees",
                    "D": "Write new survey questions"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "이메일에서 Ms. Korlake는 2월 6일 월요일 오전 9시에 만나서 어떻게 진행할지 상의하고 싶다고 했습니다. 정답은 (B)입니다."
            },
            {
                id: "p7-t2-q178",
                questionNo: 178,
                text: "What is suggested about Fatior Labs?",
                options: {
                    "A": "It has 92 employees.",
                    "B": "It manufactures food colorings.",
                    "C": "It will conduct a taste test for Karabolt Industries.",
                    "D": "It supplies ice cream to Preston Grocers."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                explanation: "이메일에서 Fatior Labs는 Karabolt Industries를 위해 맛 테스트를 실시했으며, 3월 1일까지 새로운 맛을 Fatior Labs에 보내야 한다고 언급했습니다. 따라서 정답은 (C)입니다."
            },
            {
                id: "p7-t2-q179",
                questionNo: 179,
                text: "According to the survey form, what flavour will Karabolt Industries most likely submit?",
                options: {
                    "A": "Lemon",
                    "B": "Mango",
                    "C": "Salted Caramel",
                    "D": "Peanut Brittle"
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "설문 양식의 코멘트에서 참가자는 Peanut Brittle이 가장 가능성이 있지만 초콜릿 소용돌이나 브라우니 조각을 추가하면 승자가 될 것이라고 언급했습니다. 따라서 정답은 (D) 'Peanut Brittle'입니다."
            },
            {
                id: "p7-t2-q180",
                questionNo: 180,
                text: "What can be concluded about participant number 54?",
                options: {
                    "A": "The participant purchased several different ice creams.",
                    "B": "The participant is between the ages of 25 and 40.",
                    "C": "The participant regularly takes consumer surveys.",
                    "D": "The participant prefers fruit-flavored ice cream."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                explanation: "이메일에서 타겟 시장은 25세에서 40세 사이의 소비자라고 명시되어 있으며, 참가자 54번은 이 맛 테스트에 참여했으므로 이 연령대에 속할 가능성이 높습니다. 따라서 정답은 (B) '25세에서 40세 사이이다'입니다."
            }
        ]
    },
    // Questions 181-185 (Double Passage)
    {
        id: "p7-t2-set12",
        questionRange: "181-185",
        setType: "Double",
        passages: [
            {
                id: "p7-t2-s12-p1",
                contextType: "P4",
                docType: "WEB PAGE",
                content: `https://www.creategreat.ca/openings\n\nCreate Great, an Ontario-based creative agency with a diverse range of clients in the fashion and beauty industry, is seeking a copywriter who is passionate about fashion, understands trends, and handles digital tools with ease.\n\nThe ideal candidate will be someone who works well in a fast-paced environment with team members from international backgrounds. Applicants should have at least 3 years of experience developing brand strategies that suit customer needs and with the marketing team to ensure the success of brand-based publicity campaigns. For this position, residence in Canada is not required.\n\nTo apply, please send a cover letter and résumé to the director of our creative team, Fran Benjamin, Create Great, 838 Colbert Street, London, ON N6B 3P5. Application deadline: August 5.`
            },
            {
                id: "p7-t2-s12-p2",
                contextType: "P1",
                docType: "LETTER",
                content: `Annie Smith\n4310 South Bryant Street\nPortland, OR 97206\n\nAugust 6\n\nFran Benjamin\nCreate Great\n838 Colbert Street\nLondon, ON N6B 3P5\n\nDear Ms. Benjamin,\n\nI am writing to apply for the copywriter position at Create Great. As an expert fashion designer who has writing experience, I believe I would be a valuable addition to your team.\n\nI have a decade of experience as the lead designer for women's collections at MODA, a clothing line in Portland. I oversaw the design production process from initial market research to finished product. In my role, I work in close partnership with the marketing and production teams.\n\nIn addition to my design background, I have been writing about women's fashion for over a decade. My work has appeared in several publications, and I focus on trends in women's fashion and how to make clothing and cosmetics more sustainable. What attracted me as a hobby has now attracted paying advertisers and sponsors. I believe my combined expertise would be an asset for examples of my writing.\n\nThank you for considering my application.\n\nSincerely,\nAnnie Smith\nAnnie Smith\nEnclosure`
            }
        ],
        questions: [
            {
                id: "p7-t2-q181",
                questionNo: 181,
                text: "According to the Web page, what will the job recipient be able to do?",
                options: {
                    "A": "Relocate to Ontario",
                    "B": "Manage a team",
                    "C": "Travel internationally",
                    "D": "Work from home"
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                explanation: "웹 페이지에서 캐나다 거주가 필수가 아니라고 명시되어 있습니다. 따라서 재택근무가 가능함을 시사합니다. 정답은 (D) '재택근무'입니다."
            },
            {
                id: "p7-t2-q182",
                questionNo: 182,
                text: "On the Web page, the word \"suit\" in paragraph 2, line 4, is closest in meaning to",
                options: {
                    "A": "adapt",
                    "B": "determine",
                    "C": "match",
                    "D": "satisfy"
                },
                correctAnswer: "C",
                classification: "P7_VOCABULARY",
                explanation: "'suit'는 문맥상 '적합하다, 맞다'의 의미로 사용되었습니다. 고객 요구에 맞는 브랜드 전략을 개발한다는 의미이므로 정답은 (C) 'match'입니다."
            },
            {
                id: "p7-t2-q183",
                questionNo: 183,
                text: "What is indicated about Ms. Smith?",
                options: {
                    "A": "She has already met Ms. Benjamin.",
                    "B": "She has worked as a copywriter.",
                    "C": "She forgot the application deadline.",
                    "D": "She forgot to submit a required document."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                explanation: "편지 날짜가 8월 6일이고 지원 마감일이 8월 5일이므로, Ms. Smith는 마감일을 놓쳤습니다. 따라서 정답은 (C) '지원 마감일을 잊었다'입니다."
            },
            {
                id: "p7-t2-q184",
                questionNo: 184,
                text: "According to the letter, what is one of Ms. Smith's responsibilities at MODA?",
                options: {
                    "A": "Hiring staff",
                    "B": "Writing drafts of advertisements",
                    "C": "Reviewing a production process",
                    "D": "Purchasing supplies and equipment"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "편지에서 Ms. Smith는 초기 시장 조사부터 완제품까지 디자인 생산 과정을 감독했다고 언급했습니다. 따라서 정답은 (C) '생산 과정 검토'입니다."
            },
            {
                id: "p7-t2-q185",
                questionNo: 185,
                text: "What most likely is Madeinhern?",
                options: {
                    "A": "A brand of cosmetics",
                    "B": "A fashion blog",
                    "C": "A clothing store",
                    "D": "An advertising agency"
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                explanation: "편지에서 Ms. Smith는 여성 패션에 대해 10년 이상 글을 써왔으며, 취미로 시작한 것이 이제 광고주와 스폰서를 끌어들이고 있다고 언급했습니다. 이는 패션 블로그일 가능성이 높습니다. 정답은 (B) '패션 블로그'입니다."
            }
        ]
    },
    // Questions 186-190 (Triple Passage)
    {
        id: "p7-t2-set13",
        questionRange: "186-190",
        setType: "Triple",
        passages: [
            {
                id: "p7-t2-s13-p1",
                contextType: "P1",
                docType: "E-MAIL",
                content: `From: Akihiko Nakashima <a.nakashima@pitchofshipping.com>\nTo: Cameron Higgins <support@fowlerofficesupplies.com>\nSubject: Order #19849\nDate: August 19\n\nTo Whom It May Concern,\n\nYesterday, I purchased some office supplies on your Web site. I received an e-mail receipt, but the costs are not itemized on it. To satisfy a requirement for my company, each item must be charged for each item listed separately. Could you please send me a receipt? If not, is it possible for me to get this information myself from your Web site? I would be glad for any suggestions on automatically receive one.\n\nThank you,\n\nAkihiko Nakashima, Executive Assistant\nPitchof Shipping`
            },
            {
                id: "p7-t2-s13-p2",
                contextType: "P1",
                docType: "E-MAIL",
                content: `From: Fowler Office Supplies <support@fowlerofficesupplies.com>\nTo: Akihiko Nakashima <a.nakashima@pitchofshipping.com>\nSubject: RE: Order #19849\nAttachment: 8/19/849\nDate: August 20\n\nDear Mr. Nakashima,\n\nAttached is the receipt you requested. In apology for the inconvenience, we will provide you with 10 percent off the retail price of your next order. To view a full description of the items you ordered, you can log in to your account on our Web site, go to the "My Orders" tab, and then click on any order number.\n\nI noticed that included in each of your last few orders was an identical order for one of our most popular items. If you order this item regularly, we will reduce the price for that item by 5 percent if you mark this as a recurring order. To do this, simply check the "Recurring Order" box on the online order form.\n\nAs for your final query, this is not possible right now. However, I will share the idea with our technical team.\n\nAll the best,\nCameron Higgins, Customer Relations\nFowler Office Supplies`
            },
            {
                id: "p7-t2-s13-p3",
                contextType: "P5",
                docType: "RECEIPT",
                title: "Fowler Office Supplies",
                content: `Receipt for Order: 819849\nOrder Date: August 18\n\n| Item | Quantity | Total |\n|---|---|---|\n| Printer paper 58,00/500 sheets | 10 | $ 80.00 |\n| Toner (black)/cartridge | 1 | $ 50.00 |\n| Gel pens (blue) 55.00/6-pack | 3 | $ 15.00 |\n| Staples | 2 | $ 7.00 |\n| **GRAND TOTAL** | | **$152.00** |\n\nReturn Policy: Unopened merchandise may be returned by mail within 30 days of purchase. Items returned by mail must be accompanied by mail, log in to your www.fowlerofficesupplies.com account to print a shipping label. For in-store returns, bring the item and the order number to any Fowler Office Supplies location.`
            }
        ],
        questions: [
            {
                id: "p7-t2-q186",
                questionNo: 186,
                text: "Why did Mr. Nakashima send the e-mail?",
                options: {
                    "A": "He did not receive an order he ordered.",
                    "B": "He was mistakenly charged twice for an item.",
                    "C": "He received a receipt that was not detailed enough.",
                    "D": "He did not get a confirmation e-mail for a purchase he made."
                },
                correctAnswer: "C",
                classification: "P7_PURPOSE",
                explanation: "첫 번째 이메일에서 Mr. Nakashima는 영수증을 받았지만 비용이 항목별로 나열되지 않았다고 언급했습니다. 회사 요구사항을 충족하기 위해 각 항목의 비용이 별도로 표시된 영수증이 필요하다고 했습니다. 정답은 (C)입니다."
            },
            {
                id: "p7-t2-q187",
                questionNo: 187,
                text: "According to the second e-mail, what will Mr. Nakashima receive with his next order?",
                options: {
                    "A": "A free pen",
                    "B": "A printed receipt",
                    "C": "A price discount",
                    "D": "A gift card"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "두 번째 이메일에서 불편을 사과하며 다음 주문 시 소매 가격의 10% 할인을 제공하겠다고 명시했습니다. 따라서 정답은 (C) '가격 할인'입니다."
            },
            {
                id: "p7-t2-q188",
                questionNo: 188,
                text: "For what item does Mr. Higgins suggest Mr. Nakashima select \"Recurring Order\"?",
                options: {
                    "A": "Printer paper",
                    "B": "Toner",
                    "C": "Gel pens",
                    "D": "Staples"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "두 번째 이메일에서 Mr. Higgins는 최근 몇 번의 주문에 동일한 인기 품목이 포함되어 있었다고 언급했습니다. 영수증을 보면 프린터 용지가 10개 주문되었으므로, 이것이 정기 주문으로 제안된 품목일 가능성이 높습니다. 따라서 정답은 (A) 'Printer paper'입니다."
            },
            {
                id: "p7-t2-q189",
                questionNo: 189,
                text: "What will Mr. Higgins ask the technical team to look into?",
                options: {
                    "A": "Improving the Web site's search feature",
                    "B": "Providing an option to send receipts to multiple e-mail addresses",
                    "C": "Automatically generating detailed receipts",
                    "D": "Making return labels printable from any page"
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                explanation: "첫 번째 이메일에서 Mr. Nakashima는 자동으로 상세 영수증을 받을 수 있는지 물었습니다. 두 번째 이메일에서 Mr. Higgins는 현재는 불가능하지만 기술팀과 아이디어를 공유하겠다고 답했습니다. 따라서 정답은 (C)입니다."
            },
            {
                id: "p7-t2-q190",
                questionNo: 190,
                text: "What is needed to return an item at a Fowler Office Supplies store?",
                options: {
                    "A": "The original receipt",
                    "B": "A credit card number",
                    "C": "A confirmation e-mail",
                    "D": "The order number"
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                explanation: "영수증의 반품 정책에서 매장 반품 시 물품과 주문 번호를 Fowler Office Supplies 매장에 가져가야 한다고 명시되어 있습니다. 따라서 정답은 (D) '주문 번호'입니다."
            }
        ]
    },
    // Questions 191-195 (Triple Passage)
    {
        id: "p7-t2-set14",
        questionRange: "191-195",
        setType: "Triple",
        passages: [
            {
                id: "p7-t2-s14-p1",
                contextType: "P3",
                docType: "ARTICLE",
                title: "Crawford and Duval Opens Brick-and-Mortar Stores",
                content: `HONG KONG (20 February)—Crawford and Duval, a popular online seller of handcrafted blankets, decorative pillows, and other household goods, has established its first physical stores in Hong Kong. Last Monday, the company celebrated the grand opening of boutique stores in Causeway Bay, Discovery Bay, Sheung Wan, and Central District. This is in addition to a large department store.`
            },
            {
                id: "p7-t2-s14-p2",
                contextType: "P4",
                docType: "WEB ADVERTISEMENT",
                content: `https://www.crawfordandduval.com.hk\n\nHome | Best Sellers | Full Catalogue | Shopping Cart\n\nCrawford and Duval comes to our loyal shoppers in Hong Kong!\n\nCrawford and Duval is pleased to announce the opening of its first brick-and-mortar stores in the following locations: Causeway Bay, Discovery Bay, Sheung Wan, and Central District.\n\nSince the launch of our online store five years ago, we have helped you to create the living space of your dreams. Now we make it even easier to decorate your home. Each location has been carefully selected to provide you with convenient access to our most popular items.\n\nAll locations are convenient to public transportation. Our Central District location offers free parking in its attached car park.\n\nAs part of our grand-opening celebration, shoppers who visit one of our stores before 1 March will receive a gift card for HK$70 to use during their visit.\n\nMembers of our online Frequent Purchase Club will receive the same benefits in our stores, including a 10 percent discount on purchases of HK$500 or more.`
            },
            {
                id: "p7-t2-s14-p3",
                contextType: "P5",
                docType: "RECEIPT",
                title: "Crawford and Duval",
                content: `Customer Receipt\nDate: 23 February\n\n| Item | Price |\n|---|---|\n| Bamboo table lamp | HK$1,450.00 |\n| Decorative pillows, set of two | HK$750.00 |\n| Aloe plant in a 7.5-litre planter | HK$300.00 |\n| Machine-washable wool blanket | HK$2,000.00 |\n| **Sub Total** | **HK$4,500.00** |\n| Less 10% | -HK$450.00 |\n| **TOTAL** | **HK$4,050.00** |\n\n☐ Cash\n☐ Gift card number:\n☑ Credit card number: **************5598\nName on the credit card: Mei-Lin Fong\n\nShop at our in-store café for a treat!`
            }
        ],
        questions: [
            {
                id: "p7-t2-q191",
                questionNo: 191,
                text: "What is the purpose of the article?",
                options: {
                    "A": "To compare locally made products",
                    "B": "To announce a business expansion",
                    "C": "To list changes to a Web site",
                    "D": "To review a café"
                },
                correctAnswer: "B",
                classification: "P7_PURPOSE",
                explanation: "기사는 Crawford and Duval이 홍콩에 첫 실제 매장을 설립했다고 발표하고 있습니다. 따라서 정답은 (B) '사업 확장을 발표하기 위해'입니다."
            },
            {
                id: "p7-t2-q192",
                questionNo: 192,
                text: "What does the Web site indicate about Crawford and Duval?",
                options: {
                    "A": "It is planning to expand to Japan.",
                    "B": "It has been in business for five years.",
                    "C": "It employs interior designers.",
                    "D": "It offers free parking at all of its stores."
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "웹사이트에서 온라인 스토어를 5년 전에 시작했다고 명시되어 있습니다. 정답은 (B)입니다."
            },
            {
                id: "p7-t2-q193",
                questionNo: 193,
                text: "According to the receipt, what is indicated about the bamboo table lamp?",
                options: {
                    "A": "It can be washed by machine.",
                    "B": "It is sold as an individual item.",
                    "C": "It is queen-sized.",
                    "D": "It comes in a set with pillows."
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                explanation: "영수증에 대나무 테이블 램프가 HK$1,450.00에 판매되었다고 나와 있습니다. 다른 품목들과 별도로 나열되어 있으므로 세트가 아닌 개별 품목입니다."
            },
            {
                id: "p7-t2-q194",
                questionNo: 194,
                text: "Where most likely did Ms. Fong make her purchase?",
                options: {
                    "A": "In a boutique shop",
                    "B": "At a café",
                    "C": "At a department store",
                    "D": "On the Internet"
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                explanation: "영수증 하단에 매장 내 카페에서 간식을 즐기라는 문구가 있으므로 실제 매장(보티끄 샵)에서 구매했을 가능성이 높습니다."
            },
            {
                id: "p7-t2-q195",
                questionNo: 195,
                text: "What is suggested about Ms. Fong?",
                options: {
                    "A": "She often buys food from Crawford and Duval.",
                    "B": "She is a member of the Frequent Purchase Club.",
                    "C": "She applied a gift card to her purchase.",
                    "D": "She shopped during a grand-opening event."
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                explanation: "영수증을 보면 2월 23일에 구매했습니다. 웹사이트에서 3월 1일 이전 방문객에게 혜택을 준다고 했으므로 그랜드 오프닝 기간임을 알 수 있습니다. 정답은 (D)입니다."
            }
        ]
    },
    // Questions 196-200 (Triple Passage)
    {
        id: "p7-t2-set15",
        questionRange: "196-200",
        setType: "Triple",
        passages: [
            {
                id: "p7-t2-s15-p1",
                contextType: "P4",
                docType: "WEB PAGE",
                content: `https://www.osawacorporateteambuilding.com/reviews\n\nHome | Requests | Reviews | Contact Us\n\nOsawa Corporate Team Building\n\nBring your team together to promote cooperation while activities increase job satisfaction. We do all the planning so you can relax. Simply choose the event that is right for your team.\n\nScavenger Hunt—This is a high-energy game in which teams race to find and photograph with their phone or camera. Group size: 10-50 people. Time: 2 hours.\n\nGame Day—This is a high-energy game day with fun team building games that build strengths, communication, and problem-solving skills. Group size: 20-500 people. Time: 2 hours.\n\nTeam Painting—Each team member creates a painting outdoors based on a predetermined theme. The paintings are then fitted together at the end. Group size: 10-30 people. Time: 1-2 hours.\n\nChocolate Making—This is a hands-on activity where teams have to use cooperation to build a tower of chocolate. Then you learn how to make chocolate from a local chocolatier. Group size: 5-150 people. Time: 2 hours.\n\nBook an event in October and receive 15 percent off.`
            },
            {
                id: "p7-t2-s15-p2",
                contextType: "P5",
                docType: "WEB PAGE",
                content: `https://www.osawacorporateteambuilding.com/requests\n\nHome | Requests | Reviews | Contact Us\n\n| Field | Detail |\n|---|---|\n| **Name** | Alexandra Peterson |\n| **Company name** | Whitten Tech |\n| **E-mail address** | apeterson@whittentech.com |\n| **Phone** | 1-555-0323 |\n| **Location and date** | Downtown Boston, October 15 |\n| **Participants** | 28 people |\n\n**What events are you interested in?**\n*   [ ] 1. Game Day\n*   [x] 2. Scavenger Hunt\n*   [x] 3. Team Painting\n\n**Additional information:**\nWe are interested in a fun activity for our sales team before the busy selling season begins. We spent a lot of time in the office, so we want an outdoor event.`
            },
            {
                id: "p7-t2-s15-p3",
                contextType: "P4",
                docType: "REVIEW",
                title: "What Our Customers Are Saying",
                content: `Posted by Whitten Tech on October 30\n\nOur sales team participated in the Scavenger Hunt event on October 15 organized by Osawa Corporate Team Building. The facilitator of the Scavenger Hunt, Lorenzo Barfoot, was excellent. The 28 people on our team were divided into smaller groups to provide feedback. They reported that they had a wonderful time. The event was held outdoors on a cold and cloudy day. I highly recommend this activity. The only thing I would do differently next time is hold the event in the summer when the weather is nicer.`
            }
        ],
        questions: [
            {
                id: "p7-t2-q196",
                questionNo: 196,
                text: "What does the first Web page indicate about the Scavenger Hunt?",
                options: {
                    "A": "It requires participants to rent a camera.",
                    "B": "It is a suitable activity for indoors.",
                    "C": "It is suitable for groups of up to 50 people.",
                    "D": "It concludes with prizes for participants."
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "첫 번째 웹 페이지에서 Scavenger Hunt는 그룹 크기가 10-50명이라고 명시되어 있습니다. 따라서 정답은 (C)입니다."
            },
            {
                id: "p7-t2-q197",
                questionNo: 197,
                text: "What event is best for a group of more than 200 people?",
                options: {
                    "A": "Game Day",
                    "B": "Team Painting",
                    "C": "Chocolate Making",
                    "D": "Scavenger Hunt"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                explanation: "첫 번째 웹 페이지를 보면 Game Day는 20-500명까지 수용 가능하므로 200명 이상의 그룹에 가장 적합합니다. 정답은 (A)입니다."
            },
            {
                id: "p7-t2-q198",
                questionNo: 198,
                text: "What is suggested about Ms. Peterson?",
                options: {
                    "A": "She has joined the Building Robots event in the past.",
                    "B": "She works for a technology company.",
                    "C": "She recently started a job at Whitten Tech.",
                    "D": "She used to be an event planner."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                explanation: "요청 양식에서 Ms. Peterson의 회사 이름은 Whitten Tech이며, 이는 이름상 기술 회사로 추론됩니다. 정답은 (B)입니다."
            },
            {
                id: "p7-t2-q199",
                questionNo: 199,
                text: "What can be concluded about Whitten Tech?",
                options: {
                    "A": "It changed its number of event participants.",
                    "B": "It provided its staff with free passes to museums.",
                    "C": "It saved money by scheduling its event in October.",
                    "D": "It was not able to hold its event outside."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                explanation: "10월 예약 시 15% 할인을 제공한다는 공지가 있고, 실제 10월 15일에 행사를 진행했으므로 할인을 받았음을 알 수 있습니다. 정답은 (C)입니다."
            },
            {
                id: "p7-t2-q200",
                questionNo: 200,
                text: "According to the review, what was the only problem with the event?",
                options: {
                    "A": "The lack of information about walking distances",
                    "B": "The difficulty in keeping the group together",
                    "C": "The poor weather conditions",
                    "D": "The uninteresting facilitator"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                explanation: "리뷰에서 날씨가 춥고 흐렸음을 언급하며 다음에는 날씨가 좋은 여름에 하고 싶다고 했습니다. 정답은 (C)입니다."
            }
        ]
    }
];
