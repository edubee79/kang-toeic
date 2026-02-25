import { PracticeSet } from './types';

export const test2MultiData: PracticeSet[] = [
    // Questions 176-180 (Double Passage)
    {
        id: "v4-p7-t2-set11",
        vol: 4,
        questionRange: "176-180",
        setType: "Double",
        passages: [
            {
                id: "v4-p7-t2-s11-p1",
                contextType: "P1", // E-MAIL
                docType: "email",
                content: `From: Madalyn Kerluke <mkerluke@karabel.ca>
To: Omar Niklaus <oniklaus@karabel.ca>, Jay Toncic <jtoncic@karabel.ca>
Date: Friday, 3 February 2:16 P.M.
Subject: Taste-test results
Attachment: Fatior Labs survey results

Hi, Team,

I just received the 24–26 January survey results from Fatior Labs for our new ice-cream taste test. As you can see from the attached document, the results are very disappointing. We sent the four flavours that we considered to be the best, but none of them received high enough ratings to advance to the next stage of development. Most of the reviews were consistent among the 92 taste-test participants in our target market of consumers ages 25 through 40. It’s not a big problem if a product gets low scores in colour in the testing phase, since we can easily adjust that in the laboratory. But we should never be sending out samples that are getting scores lower than 3 in the taste category.

I would like to meet at 9 A.M. on Monday (6 February) to figure out how to proceed. There is one flavour we may be able to work with if we make a few adjustments, as suggested by most of our taste testers. We will also need to get some new flavours to Fatior Labs no later than 1 March if we are going to get a new ice cream on the Preston Grocers freezer shelves by the beginning of June.

Madalyn Kerluke`
            },
            {
                id: "v4-p7-t2-s11-p2",
                contextType: "P5",
                docType: "table",
                title: "Fatior Labs Consumer Taste-Testing Survey",
                content: `Date: 24 January
Company: Karabel Industries
Participant number: 54

Directions: You will be given a 45 g sample of 4 different ice creams. Please rate the taste, texture, sweetness, and colour of each ice cream on a scale of 1 (very unpleasant) to 5 (very pleasant). Please write any additional comments below.

| Flavour | Taste | Texture | Sweetness | Colour |
| :--- | :--- | :--- | :--- | :--- |
| Lemon | 2 | 3 | 2 | 4 |
| Mango | 3 | 3 | 2 | 1 |
| Salted Caramel | 2 | 1 | 1 | 5 |
| Peanut Brittle | 3 | 4 | 2 | 2 |

Comments: The fruit-flavoured ice creams were surprisingly sour. I did not care for them at all. I think the Peanut Brittle has the most potential, but it's missing something. I bet that adding chocolate swirls or brownie bits would make it a winner.`
            }
        ],
        questions: [
            {
                id: "v4-p7-t2-q176",
                questionNo: 176,
                text: "What does the e-mail indicate about Karabel Industries ice cream?",
                options: {
                    "A": "It is currently sold in four flavors.",
                    "B": "Its coloring can be changed easily.",
                    "C": "Its popularity has declined recently.",
                    "D": "It is sold in Karabel Industries stores."
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                translation: "이메일에서 Karabel Industries의 아이스크림에 대해 무엇을 알 수 있는가?",
                explanation: "이메일에서 '테스트 단계에서 색상 점수가 낮은 것은 큰 문제가 아니다, 실험실에서 쉽게 조정할 수 있기 때문이다'라고 언급했습니다."
            },
            {
                id: "v4-p7-t2-q177",
                questionNo: 177,
                text: "What does Ms. Kerluke state that she wants to do?",
                options: {
                    "A": "Visit a laboratory",
                    "B": "Hold a team meeting",
                    "C": "Contact a grocery store",
                    "D": "Write new survey questions"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                translation: "Kerluke 씨가 하고 싶어하는 일은 무엇인가?",
                explanation: "이메일에서 '월요일 오전 9시에 만나서 어떻게 진행할지 상의하고 싶다'고 말했습니다."
            },
            {
                id: "v4-p7-t2-q178",
                questionNo: 178,
                text: "What is suggested about Fatior Labs?",
                options: {
                    "A": "It has 92 employees.",
                    "B": "It manufactures food colorings.",
                    "C": "It will perform another taste test for Karabel Industries.",
                    "D": "It supplies ice cream to Preston Grocers."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                translation: "Fatior Labs에 대해 유추할 수 있는 것은?",
                explanation: "이메일에서 '3월 1일까지 새로운 맛들을 Fatior Labs에 보내야 한다'는 내용을 통해 추가 테스트를 진행할 것임을 유추할 수 있습니다."
            },
            {
                id: "v4-p7-t2-q179",
                questionNo: 179,
                text: "Based on the survey form, what flavor will Karabel Industries most likely make adjustments to?",
                options: {
                    "A": "Lemon",
                    "B": "Mango",
                    "C": "Salted Caramel",
                    "D": "Peanut Brittle"
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                translation: "설문 양식을 토대로, Karabel Industries가 조정을 가할 가능성이 가장 높은 맛은?",
                explanation: "이메일에서 '맛 점수가 3점 미만인 샘플은 보내지 말아야 한다'고 했고, '작업해볼 만한 맛이 하나 있다'고 했습니다. 설문 코멘트에서 'Peanut Brittle이 가장 가능성이 있다'고 했으므로 Peanut Brittle에 조정을 가할 것입니다."
            },
            {
                id: "v4-p7-t2-q180",
                questionNo: 180,
                text: "What can be concluded about participant number 54?",
                options: {
                    "A": "The participant purchased several containers of ice cream.",
                    "B": "The participant is between the ages of 25 and 40.",
                    "C": "The participant regularly takes consumer surveys.",
                    "D": "The participant prefers fruit-flavored ice cream."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                translation: "54번 참가자에 대해 내릴 수 있는 결론은?",
                explanation: "이메일에서 테스트 참가자들이 기업의 타겟 시장인 25세에서 40세 사이의 소비자라고 언급했습니다."
            }
        ]
    },
    // Questions 181-185 (Double Passage)
    {
        id: "v4-p7-t2-set12",
        vol: 4,
        questionRange: "181-185",
        setType: "Double",
        passages: [
            {
                id: "v4-p7-t2-s12-p1",
                contextType: "P3",
                docType: "web_page",
                content: `https://www.creategreat.ca/openings

Create Great, an Ontario-based creative agency with a diverse range of global clients in the fashion industry, is seeking a copywriter who is passionate about fashion, understands market trends, and handles digital tools with ease.

The ideal candidate will be someone who works well in a fast-paced environment with team members from international backgrounds. The copywriter will collaborate with the creative team to develop brand strategies that suit customer needs and with the marketing team to ensure the success of brand-based publicity campaigns for current and prospective clients. As remote work is permitted for copywriters, residence in Canada is not required.

To apply, send your cover letter and résumé to the director of our creative team, Fran Benjamin, Create Great, 838 Colbert Street, London, ON N6B 3P5. Application deadline: August 5.`
            },
            {
                id: "v4-p7-t2-s12-p2",
                contextType: "P1",
                docType: "letter",
                content: `Annie Smith
4810 South Bryant Street
Portland, OR 97206

August 6

Fran Benjamin
Create Great
838 Colbert Street
London, ON N6B 3P5

Dear Ms. Benjamin,

I am writing to apply for the copywriter position at Create Great. As an expert fashion designer who also has writing experience, I believe I would be a valuable addition to your team. Enclosed please find my résumé.

I have a decade of experience as the lead designer for women's collections at MODA, a clothing line in Portland. I oversee the design production process from initial market research to finished product. In my role, I work in close partnership with the marketing and production teams.

In addition, for the last five years, I have been maintaining my own blog. My posts focus on trends in women's fashion and how to make clothing and cosmetics more sustainable. What started as a hobby has now attracted paying advertisers and over 15,000 followers. Visit www.medesheen.com for examples of my writing.

Thank you for considering my application.

Sincerely,
Annie Smith
Enclosure`
            }
        ],
        questions: [
            {
                id: "v4-p7-t2-q181",
                questionNo: 181,
                text: "According to the Web page, what will the job recipient be able to do?",
                options: {
                    "A": "Work remotely",
                    "B": "Manage a team",
                    "C": "Travel internationally",
                    "D": "Relocate to Canada"
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                translation: "웹 페이지에 따르면, 직무 수행자가 할 수 있는 것은?",
                explanation: "웹 페이지에서 '원격 근무가 가능하므로 캐나다 거주는 요구되지 않는다'고 명시했습니다."
            },
            {
                id: "v4-p7-t2-q182",
                questionNo: 182,
                text: "On the Web page, the word \"suit\" in paragraph 2, line 4, is closest in meaning to",
                options: {
                    "A": "adapt",
                    "B": "determine",
                    "C": "invest",
                    "D": "satisfy"
                },
                correctAnswer: "D",
                classification: "P7_VOCABULARY",
                translation: "웹 페이지의 'suit'라는 단어의 의미와 가장 가까운 것은?",
                explanation: "'고객 요구에 적합한(suit) 브랜드 전략'에서 suit는 '충족시키다(satisfy)'의 의미입니다."
            },
            {
                id: "v4-p7-t2-q183",
                questionNo: 183,
                text: "What is indicated about Ms. Smith?",
                options: {
                    "A": "She has already met Ms. Benjamin.",
                    "B": "She has worked as a copywriter.",
                    "C": "She missed an application deadline.",
                    "D": "She forgot to submit a required document."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                translation: "Smith 씨에 대해 알 수 있는 것은?",
                explanation: "지원 마감일은 8월 5일인데 편지 날짜는 8월 6일이므로 마감일을 놓쳤음을 알 수 있습니다."
            },
            {
                id: "v4-p7-t2-q184",
                questionNo: 184,
                text: "According to the letter, what is one of Ms. Smith's responsibilities at MODA?",
                options: {
                    "A": "Hiring fashion designers",
                    "B": "Writing drafts of advertisements",
                    "C": "Managing a production process",
                    "D": "Researching sustainable clothing options"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                translation: "편지에 따르면, Smith 씨의 MODA에서의 업무 중 하나는?",
                explanation: "편지에서 '초기 시장 조사부터 완제품까지 디자인 생산 과정을 감독한다(oversee the design production process)'고 명시했습니다."
            },
            {
                id: "v4-p7-t2-q185",
                questionNo: 185,
                text: "What most likely is Medesheen?",
                options: {
                    "A": "A brand of cosmetics",
                    "B": "A fashion blog",
                    "C": "An online magazine",
                    "D": "An advertising agency"
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                translation: "Medesheen은 무엇일 가능성이 높은가?",
                explanation: "자신의 블로그를 5년째 운영하고 있으며, www.medesheen.com을 방문해 보라고 언급한 내용을 통해 개인 블로그임을 알 수 있습니다."
            }
        ]
    },
    // Questions 186-190 (Triple Passage)
    {
        id: "v4-p7-t2-set13",
        vol: 4,
        questionRange: "186-190",
        setType: "Triple",
        passages: [
            {
                id: "v4-p7-t2-s13-p1",
                contextType: "P1",
                docType: "email",
                content: `From: Akihito Nakashima <a.nakashima@gilchristshipping.com>
To: Fowler Office Supplies <support@fowlerofficesupplies.com>
Subject: Order B19849
Date: August 19

To Whom It May Concern,

Yesterday, I purchased some office supplies on your Web site. I received an e-mail receipt, but the costs are not itemized on it. To satisfy a new company policy, I must give my supervisor a receipt with the charges for each item listed separately. Could you e-mail me such a receipt? If not, is it possible for me to get this information myself from your Web site? Finally, can confirmations for future orders possibly be sent to more than one e-mail address? It would be ideal for my supervisor to automatically receive one.

Thank you,

Akihito Nakashima, Executive Assistant
Gilchrist Shipping`
            },
            {
                id: "v4-p7-t2-s13-p2",
                contextType: "P1",
                docType: "email",
                content: `From: Fowler Office Supplies <support@fowlerofficesupplies.com>
To: Akihito Nakashima <a.nakashima@gilchristshipping.com>
Subject: RE: Order B19849
Date: August 19
Attachment: B19849

Dear Mr. Nakashima,

Attached is the receipt you requested. In apology for the inconvenience, we will provide you with 10 percent off the total price of your next order. To view a full description of any previous order, first log in to your account on our Web site, go to the "My Orders" tab, and then click on any order number.

I noticed that included in each of your last few orders was an identical order for ten of a particular item. You should know that we will reduce the price for that item by 5 percent if you mark this as a recurring order. To do this, simply check the "Recurring Order" box on the online order form.

As for your final query, this is not possible right now. However, I will share the idea with our technical team.

All the best,

Cameron Higgins, Customer Relations
Fowler Office Supplies`
            },
            {
                id: "v4-p7-t2-s13-p3",
                contextType: "P5",
                docType: "receipt",
                title: "Fowler Office Supplies",
                content: `Receipt for Order: B19849
Order Date: August 18

| Item | Price | Quantity | Total |
| :--- | :--- | :--- | :--- |
| Printer paper | $8.00/500 sheets | 10 | $ 80.00 |
| Toner (black) | $50.00/cartridge | 1 | $ 50.00 |
| Gel pens (blue) | $5.00/8-pack | 3 | $ 15.00 |
| Staples | $3.50/box | 2 | $ 7.00 |
| **GRAND TOTAL** | | | **$152.00** |

Return Policy: Unopened merchandise may be returned by mail or in one of our stores within 60 days of purchase. For returns by mail, log in to your www.fowlerofficesupplies.com account to print a shipping label. For in-store returns, bring the item and the order number to any Fowler Office Supplies location.`
            }
        ],
        questions: [
            {
                id: "v4-p7-t2-q186",
                questionNo: 186,
                text: "Why did Mr. Nakashima send the e-mail?",
                options: {
                    "A": "He did not receive an item he ordered.",
                    "B": "He was mistakenly charged twice for an item.",
                    "C": "He received a receipt that was not detailed enough.",
                    "D": "He did not get a confirmation e-mail for a purchase he made."
                },
                correctAnswer: "C",
                classification: "P7_PURPOSE",
                translation: "Nakashima 씨가 이메일을 보낸 이유는 무엇인가?",
                explanation: "첫 번째 이메일에서 '영수증을 받았지만 비용이 항목별로 나열되지 않았다(not itemized)'고 언급했습니다."
            },
            {
                id: "v4-p7-t2-q187",
                questionNo: 187,
                text: "According to the second e-mail, what will Mr. Nakashima receive with his next order?",
                options: {
                    "A": "A catalog",
                    "B": "A free pen",
                    "C": "A printed receipt",
                    "D": "A price discount"
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                translation: "두 번째 이메일에 따르면, Nakashima 씨는 다음 주문 시 무엇을 받게 되는가?",
                explanation: "두 번째 이메일에서 '불편을 사과하며 다음 주문 총액의 10% 할인을 제공하겠다'고 했습니다."
            },
            {
                id: "v4-p7-t2-q188",
                questionNo: 188,
                text: "For what item does Mr. Higgins suggest that Mr. Nakashima select \"Recurring Order\"?",
                options: {
                    "A": "Printer paper",
                    "B": "Toner",
                    "C": "Gel pens",
                    "D": "Staples"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                translation: "Higgins 씨는 어떤 품목에 대해 '정기 주문'을 선택하라고 제안하는가?",
                explanation: "이메일에서 '최근 몇 번의 주문에서 특정 품목 10개를 동일하게 주문했다'고 했고, 영수증에서 10개가 주문된 품목은 Printer paper입니다."
            },
            {
                id: "v4-p7-t2-q189",
                questionNo: 189,
                text: "What will Mr. Higgins ask the technical team to look into?",
                options: {
                    "A": "Improving the Web site's response rate",
                    "B": "Providing an option to send receipts to multiple e-mail addresses",
                    "C": "Placing a link to customers' order history on the home page",
                    "D": "Making return labels printable from any device"
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                translation: "Higgins 씨가 기술팀에 검토를 요청할 내용은 무엇인가?",
                explanation: "Nakashima 씨가 '확인 메일을 하나 이상의 주소로 보낼 수 있는지' 물었고, Higgins 씨는 이에 대해 '기술팀과 아이디어를 공유하겠다'고 답했습니다."
            },
            {
                id: "v4-p7-t2-q190",
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
                translation: "Fowler Office Supplies 매장에서 물품을 반품하려면 무엇이 필요한가?",
                explanation: "영수증의 반품 정책(Return Policy) 마지막 문장에서 '매장 반품 시 물품과 주문 번호(order number)를 가져와야 한다'고 명시했습니다."
            }
        ]
    },
    // Questions 191-195 (Triple Passage)
    {
        id: "v4-p7-t2-set14",
        vol: 4,
        questionRange: "191-195",
        setType: "Triple",
        passages: [
            {
                id: "v4-p7-t2-s14-p1",
                contextType: "P3",
                docType: "article",
                header: {
                    headline: "Crawford and Duval Opens Brick-and-Mortar Stores",
                    date: "HONG KONG (18 February)"
                },
                content: [
                    "Crawford and Duval, the online retailer known for its handcrafted blankets, decorative pillows, and other household goods, has established four brick-and-mortar stores in Hong Kong. Last Monday, the company celebrated the grand opening of boutique stores in Causeway Bay, Discovery Bay, and Sheung Wan in addition to a large department store in Central District. While the boutique stores carry the most popular of the small household goods for which Crawford and Duval is famous, the Central District location also boasts an indoor plant department and an on-site café that features specialty coffees, teas, and light snacks. Moreover, it has a much more extensive selection of the merchandise than what is available through the company's Web site."
                ]
            },
            {
                id: "v4-p7-t2-s14-p2",
                contextType: "P4",
                docType: "web_page",
                content: `https://www.crawfordandduval.com.hk

Home | Best Sellers | Full Catalogue | Shopping Cart

Crawford and Duval comes to our loyal shoppers in Hong Kong!

Crawford and Duval is pleased to announce the opening of its first brick-and-mortar stores in the following locations: Causeway Bay, Discovery Bay, Sheung Wan, and Central District.

Since the launch of our online store five years ago, we have helped you to create the living space of your dreams. Now we make it even easier to decorate your home. Each location has an interior designer on staff, so you can consult with an expert in person while you browse our popular items.

All locations are convenient to public transportation. Our Central District location offers free parking in its attached car park.

As part of our grand-opening celebration, shoppers who visit one of our stores before 1 March will receive a gift card for HK$70 to use during their visit.

Members of our online Frequent Purchase Club will receive the same benefits in our stores, including a 10 percent discount on purchases of HK$500 or more.`
            },
            {
                id: "v4-p7-t2-s14-p3",
                contextType: "P5",
                docType: "receipt",
                title: "Crawford and Duval",
                content: `Customer Receipt
Date: 23 February

| Item | Price |
| :--- | :--- |
| Bamboo table lamp | HK$1,450.00 |
| Decorative cushions, set of two | HK$750.00 |
| Aloe plant in a 7.5-litre planter | HK$300.00 |
| Machine-washable wool blanket | HK$2,000.00 |
| **Sub Total** | **HK$4,500.00** |
| Less 10% | -HK$450.00 |
| **TOTAL** | **HK$4,050.00** |

☐ Cash
☐ Gift card number:
☑ Credit card number: **************5598
Name on the credit card: Mei-Lin Fong

Stop at our in-store café for a treat!`
            }
        ],
        questions: [
            {
                id: "v4-p7-t2-q191",
                questionNo: 191,
                text: "What is the purpose of the article?",
                options: {
                    "A": "To compare locally made products",
                    "B": "To announce store openings",
                    "C": "To list changes to a Web site",
                    "D": "To review a café"
                },
                correctAnswer: "B",
                classification: "P7_PURPOSE",
                translation: "기사의 목적은 무엇인가?",
                explanation: "기사는 Crawford and Duval이 홍콩에 첫 오프라인 매장들을 열었다는 소식을 전하고 있습니다."
            },
            {
                id: "v4-p7-t2-q192",
                questionNo: 192,
                text: "What does the Web site indicate about Crawford and Duval?",
                options: {
                    "A": "It has store locations around the world.",
                    "B": "It has been in business for ten years.",
                    "C": "It employs interior designers.",
                    "D": "It offers free parking at all of its stores."
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                translation: "웹사이트에서 Crawford and Duval에 대해 알 수 있는 것은?",
                explanation: "웹사이트에서 '각 매장에는 인테리어 디자이너가 상주하고 있다(Each location has an interior designer on staff)'고 명시했습니다."
            },
            {
                id: "v4-p7-t2-q193",
                questionNo: 193,
                text: "According to the receipt, what is indicated about the blanket?",
                options: {
                    "A": "It can be washed by machine.",
                    "B": "It is made of cotton.",
                    "C": "It is queen-sized.",
                    "D": "It comes in a set with pillows."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                translation: "영수증에 따르면, 담요(blanket)에 대해 알 수 있는 것은?",
                explanation: "영수증에 '물세탁 가능 울 담요(Machine-washable wool blanket)'라고 기재되어 있습니다."
            },
            {
                id: "v4-p7-t2-q194",
                questionNo: 194,
                text: "Where most likely did Ms. Fong make her purchase?",
                options: {
                    "A": "On a Web site",
                    "B": "In a boutique shop",
                    "C": "At a café",
                    "D": "In a department store"
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                translation: "Fong 씨는 어디에서 구매를 했을 가능성이 높은가?",
                explanation: "Fong 씨는 알로에 식물(Aloe plant)을 구매했는데, 기사에 따르면 Central District 지점(대형 백화점)에만 식물 부서(indoor plant department)가 있다고 언급되어 있습니다."
            },
            {
                id: "v4-p7-t2-q195",
                questionNo: 195,
                text: "What is suggested about Ms. Fong?",
                options: {
                    "A": "She often buys food from Crawford and Duval.",
                    "B": "She is a member of the Frequent Purchase Club.",
                    "C": "She applied a gift card to her purchase.",
                    "D": "She shopped during a grand-opening event."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                translation: "Fong 씨에 대해 유추할 수 있는 것은?",
                explanation: "영수증에서 10% 할인을 받았는데, 웹사이트에서 '온라인 우수 고객 클럽(Frequent Purchase Club) 회원에게 10% 할인을 제공한다'고 했으므로 회원임을 알 수 있습니다."
            }
        ]
    },
    // Questions 196-200 (Triple Passage)
    {
        id: "v4-p7-t2-set15",
        vol: 4,
        questionRange: "196-200",
        setType: "Triple",
        passages: [
            {
                id: "v4-p7-t2-s15-p1",
                contextType: "P4",
                docType: "web_page",
                content: `https://www.osawacorporateteambuilding.com/home

Osawa Corporate Team Building

Bring your team together to promote cooperation while having fun! Our activities increase job satisfaction and engagement. We do all the planning so you can relax. Simply choose the event that is right for your team.

Scavenger Hunt—An outdoor game in which teams are given a list of objects to find and photograph with their phone or camera. Group size: 10–50 people. Time: 3 hours.

Game Day—This is a high-energy game day with fun team activities. This event builds team strength, communication, and problem-solving skills. Group size: 20–500 people. Time: 2 hours.

Team Painting—Each team member creates a painting outdoors based on a predetermined theme. The paintings are linked together at the end. Group size: 6–30 people. Time: 1–2 hours.

Robot Building—Your group will be broken into teams. Each team builds a robot to be used in challenges against the others. Group size: 10–30 people. Time: 2–3 hours.

All Chocolate—Your group will have the chance to use engineering skills to build a tower of chocolate. Then you learn how to make chocolate from a local chocolatier. Group size: 8–150 people. Time: 2 hours.

Book an event in October and receive 15 percent off.`
            },
            {
                id: "v4-p7-t2-s15-p2",
                contextType: "P5",
                docType: "web_page",
                content: `https://www.osawacorporateteambuilding.com/requests

Name: Alexandra Peterson
Company name: Whitten Tech
E-mail address: apeterson@whittentech.com
Phone: 617-555-0123

Location and date of event: Downtown Boston, October 15

What events are you interested in? Choose your top three.
1. Game Day  2. Scavenger Hunt  3. Team Painting

Number of participants: 28 people

Additional information:
We are interested in a fun activity for our sales team before the busy selling season begins. We spend a lot of time in the office, so we want an outdoor event.
We will contact you within three business days with a quote and confirmation.`
            },
            {
                id: "v4-p7-t2-s15-p3",
                contextType: "P4",
                docType: "review",
                title: "What Our Customers Are Saying",
                content: `https://www.osawacorporateteambuilding.com/reviews

Posted by Whitten Tech on October 20

Our team hired Osawa Corporate Team Building to lead an activity for the sales staff at Whitten Tech. The facilitator of the Scavenger Hunt, Lorenzo Benford, was excellent. The 28 members of our sales team all had positive feedback. They reported that they loved exploring the city, learning about its history, and finding new local attractions, even on a cold and cloudy day. I highly recommend this activity. The only downside was that we did not realize how far we would be walking. It would have been helpful to have an idea of the walking distances so we could have been fully prepared.`
            }
        ],
        questions: [
            {
                id: "v4-p7-t2-q196",
                questionNo: 196,
                text: "What does the first Web page indicate about the Scavenger Hunt?",
                options: {
                    "A": "It requires participants to rent a camera.",
                    "B": "It concludes with prizes for participants.",
                    "C": "It is a suitable activity for indoors.",
                    "D": "It takes three hours to complete."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                translation: "첫 번째 웹 페이지에서 Scavenger Hunt에 대해 무엇을 알 수 있는가?",
                explanation: "웹 페이지 설명에서 Scavenger Hunt의 소요 시간(Time)이 3시간(3 hours)이라고 명시되어 있습니다."
            },
            {
                id: "v4-p7-t2-q197",
                questionNo: 197,
                text: "What event is best for a group of more than 200 people?",
                options: {
                    "A": "Game Day",
                    "B": "Team Painting",
                    "C": "Robot Building",
                    "D": "All Chocolate"
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                translation: "200명 이상의 그룹에 가장 적합한 이벤트는?",
                explanation: "Game Day의 그룹 규모(Group size)가 20-500명으로 가장 넓은 범위를 수용합니다."
            },
            {
                id: "v4-p7-t2-q198",
                questionNo: 198,
                text: "What is suggested about Ms. Peterson?",
                options: {
                    "A": "She has joined the Building Robots event in the past.",
                    "B": "She will receive a discount on an event.",
                    "C": "She recently started a job at Whitten Tech.",
                    "D": "She used to be an event planner."
                },
                correctAnswer: "B",
                classification: "P7_INFERENCE",
                translation: "Peterson 씨에 대해 유추할 수 있는 것은?",
                explanation: "첫 번째 웹 페이지에서 '10월에 예약하면 15% 할인'을 해준다고 했고, 요청 양식에서 행사 날짜가 '10월 15일'이므로 할인을 받을 것임을 알 수 있습니다."
            },
            {
                id: "v4-p7-t2-q199",
                questionNo: 199,
                text: "What can be concluded about Whitten Tech?",
                options: {
                    "A": "It changed its number of event participants.",
                    "B": "It provided its staff with free passes to museums.",
                    "C": "It was unable to schedule its first-choice activity.",
                    "D": "It was not able to hold its event outside."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                translation: "Whitten Tech에 대해 내릴 수 있는 결론은?",
                explanation: "요청 양식에서 선호 이벤트 1순위로 'Game Day'를 적었으나, 실제 후기(Review)에서는 'Scavenger Hunt'에 참여했다고 언급했습니다."
            },
            {
                id: "v4-p7-t2-q200",
                questionNo: 200,
                text: "According to the review, what was disappointing about the event?",
                options: {
                    "A": "The focus on local history",
                    "B": "The lack of information about walking distances",
                    "C": "The difficulty in keeping the group together",
                    "D": "The uninteresting facilitator"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                translation: "리뷰에 따르면, 이벤트에서 실망스러웠던(disappointing) 점은 무엇인가?",
                explanation: "리뷰 마지막 부분에서 '유일한 단점(downside)은 우리가 얼마나 멀리 걷게 될지 몰랐다는 것'이며 '보행 거리에 대한 안내가 있었더라면 도움이 되었을 것'이라고 했습니다."
            }
        ]
    }
];
