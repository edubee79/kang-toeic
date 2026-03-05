import { PracticeSet } from '../types';

export const test8MultiData: PracticeSet[] = [
    {
        id: 'v3-p7-t08-multi-set11',
        setType: 'Double',
        vol: 3,
        questionRange: '176-180',
        passages: [
            {
                id: 'v3-p7-t08-multi-set11-p1',
                contextType: 'P5_FORM',
                docType: 'SCHEDULE',
                header: {
                    title: 'Monthly Reading Series at the Spotted Cat Bookstore',
                    subtitle: 'June Schedule'
                },
                content: [
                    'Saturday, June 2\tBrian Stenick, author of Into the Sea: Collected Poems\nSunday, June 3\tDavid Callander, author of The Mastery of Comfort\nMonday, June 11\tNina Brown, author of Family Threads\nWednesday, June 13\tBernice Sandene, author of Retroactive: A History of Athletic Wear',
                    'Readings begin at 7:00 P.M., and there is a reception with light refreshments afterward.',
                    'If you are a published writer interested in reading for our series this July, please submit a five-page example of your work as an attachment to readings@spottedcatbooks.com. With your writing sample, send a one-paragraph biography. Your bio should mention your education and artist residencies, publications, readings, and lectures, if applicable. The series welcomes both well-established and emerging writers.'
                ]
            },
            {
                id: 'v3-p7-t08-multi-set11-p2',
                contextType: 'P1_CORR',
                docType: 'EMAIL',
                header: {
                    from: 'Jo Ann Rodcliff <jrodcliff@weeklycourier.com>',
                    to: 'David Callander <dcallander@elwyn.edu>',
                    date: 'May 16',
                    subject: 'Reading'
                },
                content: [
                    'Dear Professor Callander,',
                    'I heard that you and Professor Sandene are reading at the Spotted Cat in a few weeks. How exciting! I am hoping to attend both readings and am looking forward to seeing you both again.',
                    'Since graduating from Elwyn University last year, I\'ve been working for the Weekly Courier as an arts and culture columnist. Mostly, I write reviews on art shows, concerts, and other cultural events around the city. I also write profiles and book reviews. I would like to ask whether I may feature you and your book in my next column. The column will be published the day before your reading.',
                    'I was fascinated by your book, and it would be my pleasure to review it in the Weekly Courier. Are you available for a phone call tomorrow? Of course, I would prefer to interview you in person, but I\'m out of town on assignment until next week. Please let me know if you are interested.',
                    'Sincerely,',
                    'Jo Ann Rodcliff'
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t08-multi-set11-q1',
                questionNo: 176,
                text: 'What is stated about the reading series?',
                options: {
                    A: 'It is held once a month.',
                    B: 'It features both new and well-known writers.',
                    C: 'It requires a ticket to attend.',
                    D: 'It highlights recently published books.'
                },
                correctAnswer: 'B',
                classification: 'P7_DETAIL',
                translation: '낭독회 시리즈에 대해 명시된 것은?\n(A) 한 달에 한 번 열린다.\n(B) 신진 작가와 유명 작가가 모두 출연한다.\n(C) 참석하려면 입장권이 필요하다.\n(D) 최근 출판된 책들을 강조한다.',
                explanation: '일정표의 마지막 단락에서 낭독회 시리즈에서는 확실히 자리를 잡은 작가와 신진 작가 모두를 환영한다(The series welcomes both well-established and emerging writers)고 했으므로, (B)가 정답이다. 6월 일정표(June Schedule)에 4번의 낭독회가 예정되어 있으므로 (A)는 명백한 오답이다.'
            },
            {
                id: 'v3-p7-t08-multi-set11-q2',
                questionNo: 177,
                text: 'What should writers send to the bookstore?',
                options: {
                    A: 'Information about their background',
                    B: 'A book they would like to read to customers',
                    C: 'The location at which they prefer to lecture',
                    D: 'A signed contract'
                },
                correctAnswer: 'A',
                classification: 'P7_DETAIL',
                translation: '작가들은 서점에 무엇을 보내야 하는가?\n(A) 자신의 배경에 대한 정보\n(B) 고객들에게 읽어주고 싶은 책\n(C) 강의하기에 선호하는 장소\n(D) 서명한 계약서',
                explanation: '일정표의 마지막 단락에서 낭독회에 참여하고 싶다면 작품 견본과 함께 한 단락의 자기소개를 보내달라(send a one-paragraph biography)고 했으므로, (A)가 정답이다.'
            },
            {
                id: 'v3-p7-t08-multi-set11-q3',
                questionNo: 178,
                text: 'Why did Ms. Rodcliff write the e-mail?',
                options: {
                    A: 'To introduce herself to a new client',
                    B: 'To describe her experience to a potential employer',
                    C: 'To arrange an interview as part of her work',
                    D: 'To schedule a visit to a university'
                },
                correctAnswer: 'C',
                classification: 'P7_PURPOSE',
                translation: '로드클리프 씨가 이메일을 쓴 이유는?\n(A) 자신을 새 고객에게 소개하려고\n(B) 자신의 경험을 잠재 고용주에게 설명하려고\n(C) 업무의 일부로 인터뷰를 잡으려고\n(D) 대학교 방문 일정을 잡으려고',
                explanation: '이메일의 세 번째 단락에서 로드클리프 씨는 칼랜더 교수의 저서를 〈위클리 쿠리어〉에서 논평하고 싶다(it would be my pleasure to review it in the Weekly Courier)고 한 후, 내일 통화할 시간이 되는지(Are you available for a phone call tomorrow?) 물었다. 따라서 칼랜더 교수에게 전화 인터뷰를 요청하기 위해 쓴 이메일임을 알 수 있으므로, (C)가 정답이다.'
            },
            {
                id: 'v3-p7-t08-multi-set11-q4',
                questionNo: 179,
                text: 'On what date does Ms. Rodcliff hope to hear Professor Sandene read?',
                options: {
                    A: 'June 2',
                    B: 'June 3',
                    C: 'June 11',
                    D: 'June 13'
                },
                correctAnswer: 'D',
                classification: 'P7_LINK',
                translation: '로드클리프 씨는 샌딘 교수의 낭독을 며칠에 듣고 싶어하는가?\n(A) 6월 2일\n(B) 6월 3일\n(C) 6월 11일\n(D) 6월 13일',
                explanation: '이메일의 첫 번째 단락에서 로드클리프 씨는 칼랜더 교수와 샌딘 교수가 스포티드 캣에서 낭독할 예정(you and Professor Sandene are reading at the Spotted Cat)이라고 들었으며 두 낭독회 모두 참석하고 싶다(I am hoping to attend both readings)고 했다. 일정표를 보면, 샌딘 교수의 낭독회는 6월 13일에 있을 예정이므로, (D)가 정답이다.'
            },
            {
                id: 'v3-p7-t08-multi-set11-q5',
                questionNo: 180,
                text: 'What book does Ms. Rodcliff want to review in her column?',
                options: {
                    A: 'Into the Sea: Collected Poems',
                    B: 'The Mastery of Comfort',
                    C: 'Family Threads',
                    D: 'Retroactive: A History of Athletic Wear'
                },
                correctAnswer: 'B',
                classification: 'P7_LINK',
                translation: '로드클리프 씨는 자신의 칼럼에서 어떤 책을 논평하고 싶어하는가?\n(A) 〈바다 속으로: 시 모음집〉\n(B) 〈위로의 기술〉\n(C) 〈가족이라는 연대〉\n(D) 〈복고풍: 운동복의 역사〉',
                explanation: '이메일의 두 번째 단락에서 로드클리프 씨는 다음 칼럼에서 칼랜더 교수와 그의 저서를 다루고 싶다(whether I may feature you and your book in my next column)는 의사를 표현했다. 일정표를 보면, 칼랜더 교수가 〈위로의 기술〉의 저자(author of The Mastery of Comfort)라고 나와 있으므로, (B)가 정답이다.'
            }
        ]
    },
    {
        id: 'v3-p7-t08-multi-set12',
        setType: 'Double',
        vol: 3,
        questionRange: '181-185',
        passages: [
            {
                id: 'v3-p7-t08-multi-set12-p1',
                contextType: 'P4_MARK',
                docType: 'WEB_PAGE',
                header: {
                    title: 'Kerilyn Fashions—Exceptional Apparel for Your Company\'s Brand'
                },
                content: [
                    'Are you an apparel retailer seeking products that you can rebrand as your own? We offer shirts, pants, shoes, and fashion accessories as a business-to-business wholesaler. Shop our extensive catalog and choose products for your customer base. We will badge the products in your order with sewn-in labels carrying your company\'s branded logo. Your order will arrive in three to four weeks. Kerilyn Fashions saves you time in product production so that your merchandise gets to market quickly. And we offer fresh, new designs every season; sample items can be sent to you upon request.',
                    'We extend discounts on large orders. We ship anywhere in the world, with charges that are based on the weight of the order.',
                    'Merchandise is nonrefundable, and a credit will be issued for any items that arrive damaged. To get started with your first order, you are invited to set up an online account. You will be assigned an account manager who will contact you within 24 hours and facilitate your first and future orders.'
                ]
            },
            {
                id: 'v3-p7-t08-multi-set12-p2',
                contextType: 'P1_CORR',
                docType: 'EMAIL',
                header: {
                    to: 'Terrence Anderson <tanderson@kerilynfashions.com>',
                    from: 'Sandeep Baliga <sbaliga@baligadesigns.in>',
                    date: '15 August',
                    subject: 'Enquiry for new order'
                },
                content: [
                    'Dear Mr. Anderson,',
                    'Thank you very kindly for so effectively facilitating our very first order last month from Kerilyn Fashions—the cotton blend T-shirts. They were well made, and our customers liked them so much that we sold out in two weeks. We would like to request the same items, but we anticipate needing a larger quantity. What order amount is required for us to receive discount pricing? Thank you in advance for a speedy response.',
                    'Kind regards,',
                    'Mr. Sandeep Baliga'
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t08-multi-set12-q1',
                questionNo: 181,
                text: 'What is indicated about Kerilyn Fashions?',
                options: {
                    A: 'It is a family-run company.',
                    B: 'It offers overnight shipping.',
                    C: 'Its prices are competitive.',
                    D: 'Its product selection is updated regularly.'
                },
                correctAnswer: 'D',
                classification: 'P7_DETAIL',
                translation: '케릴린 패션에 대해 알 수 있는 것은?\n(A) 가족이 경영하는 업체이다.\n(B) 익일 배송을 제공한다.\n(C) 가격이 경쟁력 있다.\n(D) 제품군이 정기적으로 업데이트된다.',
                explanation: '웹페이지의 첫 번째 단락 후반부에서 시즌마다 산뜻한 새 디자인을 제공한다(we offer fresh, new designs every season)고 했으므로, 정기적으로 제품군을 업데이트한다는 것을 알 수 있다. 따라서 (D)가 정답이다.'
            },
            {
                id: 'v3-p7-t08-multi-set12-q2',
                questionNo: 182,
                text: 'What is NOT a stated advantage of Kerilyn Fashions\' service?',
                options: {
                    A: 'It can provide sample products to examine in advance of ordering.',
                    B: 'Shipping charges are waived on large orders.',
                    C: 'Merchandise arrives at a client\'s business prelabeled.',
                    D: 'It assigns special managers to assist new clients.'
                },
                correctAnswer: 'B',
                classification: 'P7_NEGATIVE',
                translation: '케릴린 패션의 서비스에 대한 장점으로 명시되지 않은 것은?\n(A) 주문 전 검토할 수 있도록 견본 제품을 제공할 수 있다.\n(B) 대량 주문의 경우 배송비가 면제된다.\n(C) 상품은 고객의 업체명으로 미리 라벨이 붙여져 도착한다.\n(D) 특별 관리자를 배정해 신규 고객을 도울 수 있도록 한다.',
                explanation: '케릴린 패션의 서비스에 대한 장점은 웹페이지에서 확인 가능하다. 첫 번째 단락의 \'요청 시 견본 제품을 발송한다(sample items can be sent to you upon request)\'에서 (A)를, \'브랜드 로고가 있는 라벨을 주문한 제품에 박음질해 준다(We will badge the products in your order with sewn-in labels carrying your company\'s branded logo)\'에서 (C)를, 마지막 단락의 \'계정 관리자가 첫 주문 및 향후 주문을 용이하게 도와준다(You will be assigned an account manager who will ~ facilitate your first and future orders)\'에서 (D)를 서비스의 장점으로 확인할 수 있다. 하지만 대량 주문에 제공되는 것은 할인(We extend discounts on large orders)이며, 전 세계 어디든 주문 물품의 무게에 기반한 요금으로 배송한다(We ship ~ with charges that are based on the weight of the order)고 했으므로, 사실이 아닌 (B)가 정답이다.'
            },
            {
                id: 'v3-p7-t08-multi-set12-q3',
                questionNo: 183,
                text: 'Who most likely is Mr. Anderson?',
                options: {
                    A: 'A fashion model',
                    B: 'A fashion designer',
                    C: 'An account manager',
                    D: 'An office supervisor'
                },
                correctAnswer: 'C',
                classification: 'P7_INFERENCE',
                translation: '앤더슨 씨는 누구이겠는가?\n(A) 패션 모델\n(B) 패션 디자이너\n(C) 계정 관리자\n(D) 사무실 관리자',
                explanation: '이메일의 초반부에서 발리가 씨는 지난달 케릴린 패션에서 첫 주문을 할 수 있도록 효과적으로 도와준 것(so effectively facilitating our very first order last month from Kerilyn Fashions)에 대해 앤더슨 씨에게 감사를 전했다. 웹페이지의 마지막 단락을 보면, 계정 관리자가 첫 주문 및 향후 주문을 가능하게 도와준다(You will be assigned an account manager who ~ facilitate your first and future orders)고 했으므로, 앤더슨 씨가 발리가 씨에게 배정된 계정 관리자라고 추론할 수 있다. 따라서 (C)가 정답이다.'
            },
            {
                id: 'v3-p7-t08-multi-set12-q4',
                questionNo: 184,
                text: 'In the e-mail, the word "anticipate" in paragraph 1, line 4, is closest in meaning to',
                options: {
                    A: 'expect',
                    B: 'prevent',
                    C: 'look forward to',
                    D: 'depend on'
                },
                correctAnswer: 'A',
                classification: 'P7_VOCABULARY',
                translation: '이메일의 첫 번째 단락, 네 번째 줄에 쓰인 "anticipate"와 의미가 가장 가까운 단어는?\n(A) 예상하다\n(B) 막다\n(C) 고대하다\n(D) 의존하다',
                explanation: '\'anticipate\'를 포함한 부분은 \'더 많은 수량이 필요할 것으로 예상한다(we anticipate needing a larger quantity)\'라는 의미로 해석되는데, 여기서 anticipate는 \'예상하다, 예측하다\'라는 뜻으로 쓰였다. 따라서 \'예상하다, 기대하다\'라는 의미의 (A) expect가 정답이다.'
            },
            {
                id: 'v3-p7-t08-multi-set12-q5',
                questionNo: 185,
                text: 'What is mentioned by Mr. Baliga?',
                options: {
                    A: 'His firm is planning to open branch locations.',
                    B: 'His stock of T-shirts was too large.',
                    C: 'He ordered T-shirts in several colors.',
                    D: 'He believes Kerilyn Fashions\' goods are of high quality.'
                },
                correctAnswer: 'D',
                classification: 'P7_DETAIL',
                translation: '발리가 씨가 언급한 것은?\n(A) 그의 업체는 지점들을 열 계획이다.\n(B) 그의 티셔츠 재고가 너무 많다.\n(C) 티셔츠를 여러 색으로 주문했다.\n(D) 케릴린 패션 제품의 품질이 좋다고 확신한다.',
                explanation: '이메일의 초반부에서 발리가 씨는 처음 주문한 티셔츠가 잘 만들어진 제품이라 고객들이 아주 좋아했고 덕분에 2주만에 품절됐다(They were well made, and our customers liked them so much that we sold out in two weeks)고 했다. 따라서 그가 케릴린 패션 제품의 품질에 대한 확신을 갖고 있음을 알 수 있으므로, (D)가 정답이다.'
            }
        ]
    },
    {
        id: 'v3-p7-t08-multi-set13',
        setType: 'Triple',
        vol: 3,
        questionRange: '186-190',
        passages: [
            {
                id: 'v3-p7-t08-multi-set13-p1',
                contextType: 'P6_RULE',
                docType: 'NOTICE',
                header: {
                    title: 'Beth\'s Secondhand Furniture',
                    subtitle: 'Hold Rules'
                },
                content: [
                    '1. Purchased merchandise can be held for 7 days.',
                    '2. Merchandise unclaimed after 7 days will be returned to inventory and resold.',
                    '3. We are not responsible for damage to items that are awaiting collection.',
                    '4. We will provide delivery services for large furniture on request. Large furniture is considered 25 kg or heavier.',
                    '5. All sales are final.'
                ]
            },
            {
                id: 'v3-p7-t08-multi-set13-p2',
                contextType: 'P5_FORM',
                docType: 'RECEIPT',
                header: {
                    title: 'RECEIPT',
                    subtitle: 'Beth\'s Secondhand Furniture'
                },
                content: [
                    'Item Number: 39235\nReceipt Number: 47712\nWeight: 18 kg\nDate of Purchase: 8 August\nCustomer Name: Edward Hasegawa\nTotal: $135.00\nPayment Method: Credit Card\nNote: Please hold for pickup.'
                ]
            },
            {
                id: 'v3-p7-t08-multi-set13-p3',
                contextType: 'P1_CORR',
                docType: 'EMAIL',
                header: {
                    to: 'Customer Service <customerservice@bethssecondhand.ca>',
                    from: 'Edward Hasegawa <e.hasegawa@abodemail.com>',
                    subject: 'Furniture pickup',
                    date: '10 August'
                },
                content: [
                    'My name is Edward Hasegawa. On Tuesday, 8 August, I bought a desk from your store. I planned to borrow my coworker\'s truck to pick up the desk, but today I learned that his truck will be in the repair shop for the next two weeks. I\'d like to ask whether the hold time can be extended because of these unforeseen circumstances. I have been a long-time customer of your store and have purchased sofas, shelving, a kitchen table, and other items.',
                    'Sincerely,',
                    'Edward'
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t08-multi-set13-q1',
                questionNo: 186,
                text: 'According to the sign, what happens to unclaimed furniture?',
                options: {
                    A: 'It is made available for sale again.',
                    B: 'It is donated to a local charity.',
                    C: 'It is promptly disposed of.',
                    D: 'It is moved to long-term storage.'
                },
                correctAnswer: 'A',
                classification: 'P7_DETAIL',
                translation: '표지판에 따르면, 찾아가지 않은 가구는 어떻게 되는가?\n(A) 다시 판매용으로 내놓아진다.\n(B) 지역 자선단체에 기부된다.\n(C) 즉시 폐기된다.\n(D) 정기 보관소로 옮겨진다.',
                explanation: '보관 규정(Hold Rules) 2번 항목에서 7일 이후까지 찾아가지 않은 상품은 재고로 반환되어 재판매된다(Merchandise unclaimed after 7 days will be returned to inventory and resold)고 했으므로, (A)가 정답이다.'
            },
            {
                id: 'v3-p7-t08-multi-set13-q2',
                questionNo: 187,
                text: 'What is suggested about Beth\'s Secondhand Furniture?',
                options: {
                    A: 'It is under new management.',
                    B: 'It does not accept returns.',
                    C: 'It is a nonprofit business.',
                    D: 'It is opening another location.'
                },
                correctAnswer: 'B',
                classification: 'P7_INFERENCE',
                translation: '베스 중고 가구에 대해 암시된 것은?\n(A) 새 경영진 하에 있다.\n(B) 반품을 받지 않는다.\n(C) 비영리 업체이다.\n(D) 다른 매장을 연다.',
                explanation: '표지판의 보관 규정(Hold Rules) 5번 항목에서 판매 후 교환 및 반품 불가하다(All sales are final)고 했으므로, (B)가 정답이다. 참고로, \'All sales are final\'은 \'교환 및 반품 불가\'라는 고정 표현으로, 여기서 final은 변경되거나 다시 할 수 없음을 의미한다.'
            },
            {
                id: 'v3-p7-t08-multi-set13-q3',
                questionNo: 188,
                text: 'What is indicated about Mr. Hasegawa\'s purchase?',
                options: {
                    A: 'It cost less than $100.',
                    B: 'It must be picked up within two days.',
                    C: 'It had a reduced price because of damage.',
                    D: 'It is not considered large furniture.'
                },
                correctAnswer: 'D',
                classification: 'P7_LINK',
                translation: '하세가와 씨의 구입품에 대해 알 수 있는 것은?\n(A) 100달러 이하이다.\n(B) 이틀 안에 찾으러 가야 한다.\n(C) 손상으로 인해 가격이 낮아졌다.\n(D) 대형 가구로 분류되지 않는다.',
                explanation: '영수증을 보면 하세가와 씨가 구입한 제품의 무게(Weight)가 18kg임을 확인할 수 있다. 표지판의 보관 규정(Hold Rules) 4번 항목을 보면 무게 25kg 이상이 대형 가구로 간주된다(Large furniture is considered 25kg or heavier)고 나와 있으므로, 하세가와 씨의 구입품은 대형 가구로 분류되지 않는다는 것을 알 수 있다. 따라서 (D)가 정답이다.'
            },
            {
                id: 'v3-p7-t08-multi-set13-q4',
                questionNo: 189,
                text: 'What most likely is item number 39235?',
                options: {
                    A: 'A couch',
                    B: 'A desk',
                    C: 'A shelving unit',
                    D: 'A table'
                },
                correctAnswer: 'B',
                classification: 'P7_LINK',
                translation: '물품 번호 39235는 무엇이겠는가?\n(A) 소파\n(B) 책상\n(C) 선반\n(D) 탁자',
                explanation: '영수증에서 하세가와 씨가 구입한 제품(Item Number: 39235)임을 확인할 수 있다. 이메일의 초반부에서 하세가와 씨가 베스 중고 가구에서 8월 8일에 책상을 구입했다(On Tuesday, 8 August, I bought a desk from your store)고 했으므로, 물품 번호 39235가 책상이라고 추론할 수 있다. 따라서 (B)가 정답이다.'
            },
            {
                id: 'v3-p7-t08-multi-set13-q5',
                questionNo: 190,
                text: 'What is the purpose of the e-mail?',
                options: {
                    A: 'To schedule a delivery time',
                    B: 'To confirm a purchase amount',
                    C: 'To request an extension for a hold',
                    D: 'To ask about making an item exchange'
                },
                correctAnswer: 'C',
                classification: 'P7_PURPOSE',
                translation: '이메일을 쓴 목적은?\n(A) 배송 시간을 잡으려고\n(B) 구입 금액을 확인하려고\n(C) 보관 기간 연장을 요청하려고\n(D) 물품 교환에 대해 문의하려고',
                explanation: '이메일의 중반부에서 예기치 못한 사정 때문에 제품을 찾아갈 수 없게 되어 보관 기간을 연장할 수 있는지를 문의하고 싶다(I\'d like to ask whether the hold time can be extended because of these unforeseen circumstances)고 했으므로, (C)가 정답이다.'
            }
        ]
    },
    {
        id: 'v3-p7-t08-multi-set14',
        setType: 'Triple',
        vol: 3,
        questionRange: '191-195',
        passages: [
            {
                id: 'v3-p7-t08-multi-set14-p1',
                contextType: 'P4_MARK',
                docType: 'WEB_PAGE',
                header: {
                    url: 'http://www.lelandskilledstaffing.com'
                },
                content: [
                    'Do you need skilled residential or commercial plumbers for your next job? Many businesses are having difficulty finding the licensed plumbers they need. According to a recent survey, the demand for licensed plumbers will increase by 20 percent in the next ten years.',
                    'Leland Skilled Staffing can help you find a certified plumber, saving you time and money in recruitment. Whether your project is long-term or you need workers to handle an emergency plumbing situation, we provide on-demand skilled workers with a range of expertise. We confirm the background and experience of the workers, so you can focus on your business.',
                    'Contact us today so we can help meet your staffing needs.'
                ]
            },
            {
                id: 'v3-p7-t08-multi-set14-p2',
                contextType: 'P4_MARK',
                docType: 'ADVERTISEMENT',
                header: {
                    title: 'LICENSED PLUMBER',
                    subtitle: 'Huang Services\nJob Title: Residential Plumber'
                },
                content: [
                    'Position Summary: Full-time position available at newest location in Springfield. Perform work in both new construction and existing homes, which includes servicing, repairing, and replacing plumbing, fixtures, and gas pipes.',
                    'Position Requirements: Plumbing license; 3 years\' experience; driver\'s license; ability to use modern technology.',
                    'Pay Scale: $50,000–$90,000, depending on experience. Paid time off.',
                    'Work Hours: Vary according to seasonal needs. Some evening work required.',
                    'Send résumé to s.huang@huangservices.com. We will contact those who pass a thorough background check to schedule an interview.'
                ]
            },
            {
                id: 'v3-p7-t08-multi-set14-p3',
                contextType: 'P1_CORR',
                docType: 'EMAIL',
                header: {
                    to: 'info@lelandskilledstaffing.com',
                    from: 's.huang@huangservices.com',
                    date: 'April 15',
                    subject: 'Staff needed'
                },
                content: [
                    'To Whom It May Concern,',
                    'I am writing because I am seeking a residential plumber for my business. I have had a job advertisement posted for a while now but have not had success in finding the right candidate. We require that the candidate have a plumbing license and will accept two years of experience. The candidate will also need a driver\'s license and be available to occasionally work evening hours. Could you please send me a list of people who would be able to start on Monday, May 5? My business will begin installing the plumbing in a new housing development in the area on that day.',
                    'Regards,',
                    'Stephanie Huang'
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t08-multi-set14-q1',
                questionNo: 191,
                text: 'According to the Web page, what is expected to increase?',
                options: {
                    A: 'The time for training',
                    B: 'The price of equipment',
                    C: 'The cost of labor',
                    D: 'The need for skilled plumbers'
                },
                correctAnswer: 'D',
                classification: 'P7_DETAIL',
                translation: '웹페이지에 따르면, 무엇이 증가할 것으로 예상되는가?\n(A) 교육 기간\n(B) 장비 가격\n(C) 인건비\n(D) 숙련된 배관공 수요',
                explanation: '웹페이지의 첫 번째 단락에서 자격증을 소지한 배관공에 대한 수요가 향후 10년간 20퍼센트 증가할 것(the demand for licensed plumbers will increase by 20 percent in the next ten years)이라고 했다. 따라서 (D)가 정답이다.'
            },
            {
                id: 'v3-p7-t08-multi-set14-q2',
                questionNo: 192,
                text: 'What does the advertisement suggest about Huang Services?',
                options: {
                    A: 'It has been in business for three years.',
                    B: 'It is closed during certain seasons.',
                    C: 'It has only part-time work available.',
                    D: 'It has more than one location.'
                },
                correctAnswer: 'D',
                classification: 'P7_INFERENCE',
                translation: '광고에서 황 서비스에 대해 암시된 것은?\n(A) 3년간 영업해 왔다.\n(B) 특정 계절에 문을 닫는다.\n(C) 시간제 근무만 이용 가능하다.\n(D) 지점이 한 곳 이상 있다.',
                explanation: '구인 광고의 직책 요약(Position Summary) 부분에서 스프링필드 최신 지점에서 일할 정규직 직원(Full-time position available at newest location in Springfield)을 찾고 있다는데, \'최신 지점\'이라는 것은 해당 지점 이외에 다른 지점도 있음을 의미한다. 따라서 (D)가 정답이다.'
            },
            {
                id: 'v3-p7-t08-multi-set14-q3',
                questionNo: 193,
                text: 'What do Leland Skilled Staffing and Huang Services have in common?',
                options: {
                    A: 'They were both founded by Ms. Huang.',
                    B: 'They are located in Springfield.',
                    C: 'They verify workers\' qualifications.',
                    D: 'They specialize in commercial plumbing.'
                },
                correctAnswer: 'C',
                classification: 'P7_LINK',
                translation: '릴랜드 스킬드 스태핑과 황 서비스의 공통점은?\n(A) 모두 황 씨가 설립했다.\n(B) 스프링필드에 있다.\n(C) 작업자의 자격을 확인한다.\n(D) 상업시설 전문이다.',
                explanation: '웹페이지의 두 번째 단락 후반부를 보면, 릴랜드 스킬드 스태핑에서 채용 대행 시 작업자의 배경 및 경력을 확인한다(We confirm the background and experience of the workers)고 했고, 황 서비스에서 게시한 채용 공고 하단에서도 철저한 신원 조사를 통과한 지원자(those who pass a thorough background check)만 면접을 볼 수 있다고 했으므로, 두 회사 모두 작업자의 자격을 확인한다는 것을 알 수 있다. 따라서 (C)가 정답이다.'
            },
            {
                id: 'v3-p7-t08-multi-set14-q4',
                questionNo: 194,
                text: 'What does Ms. Huang mention about a job posting?',
                options: {
                    A: 'It was not successful.',
                    B: 'It will soon be deleted.',
                    C: 'It did not contain the correct information.',
                    D: 'It was posted on a popular Web site.'
                },
                correctAnswer: 'A',
                classification: 'P7_DETAIL',
                translation: '황 씨가 구인 공고에 대해 언급한 것은?\n(A) 성공적이지 않았다.\n(B) 곧 삭제될 것이다.\n(C) 올바른 정보가 들어 있지 않다.\n(D) 인기 있는 웹사이트에 게시되었다.',
                explanation: '이메일의 초반부에서 황 씨는 구인 공고를 게시했지만 적합한 지원자를 찾는 데 성공하지 못했다(I have had a job advertisement posted ~ but have not had success in finding the right candidate)고 했으므로, (A)가 정답이다.'
            },
            {
                id: 'v3-p7-t08-multi-set14-q5',
                questionNo: 195,
                text: 'What has changed about the position at Huang Services?',
                options: {
                    A: 'The starting salary',
                    B: 'The number of licenses needed',
                    C: 'The work hours',
                    D: 'The required years of experience'
                },
                correctAnswer: 'D',
                classification: 'P7_LINK',
                translation: '황 서비스에서 해당 직책에 대해 변경한 것은?\n(A) 초봉\n(B) 필요한 자격증의 수\n(C) 근무시간\n(D) 요구하는 경력 연수',
                explanation: '구인 광고의 직책 요건(Position Requirements)을 보면, 황 서비스는 지원자에게 3년 이상의 경력(3 years\' experience)을 요구했다. 하지만 이메일의 중반부에서 황 씨는 2년 이상의 경력이면 수용하겠다(We ~ will accept two years of experience)고 했으므로, 요구하는 경력 연수가 변경되었음을 알 수 있다. 따라서 (D)가 정답이다.'
            }
        ]
    },
    {
        id: 'v3-p7-t08-multi-set15',
        setType: 'Triple',
        vol: 3,
        questionRange: '196-200',
        passages: [
            {
                id: 'v3-p7-t08-multi-set15-p1',
                contextType: 'P3_MEDI',
                docType: 'ARTICLE',
                header: {
                    headline: 'New Conference Scholarships from Wenford Technologies',
                    date: '(Jan. 2)'
                },
                content: [
                    'Wenford Technologies, an industry leader in Internet services, has announced that it will offer six scholarships to qualified candidates to attend the Breakthroughs in Computer Science Conference in Newark, New Jersey, from April 21 to 23. To encourage a greater global perspective among conference participants, two individuals each from Latin America, Africa, and Asia will be selected as scholarship recipients.',
                    '"We believe that a variety of perspectives is what helps our industry grow and thrive," explained Wenford Technologies\' CEO Dale Kelvin. "To this end, we would like to extend this opportunity to professionals from certain geographic regions."',
                    'Applicants must be employed full-time in computer science for a period of between one and five years in order to be eligible. For more information about the scholarships, visit wenfordtech.com/scholarships.'
                ]
            },
            {
                id: 'v3-p7-t08-multi-set15-p2',
                contextType: 'P5_FORM',
                docType: 'SCHEDULE',
                header: {
                    title: 'Breakthroughs in Computer Science Conference',
                    subtitle: 'Preliminary Schedule, April 21–23'
                },
                content: [
                    'Below is an outline of activities for the conference. Each day will follow the same format. A final schedule with speakers\' names and their affiliations will be available two months prior to the event.'
                ],
                table_data: {
                    headers: ['', ''],
                    rows: [
                        ['8:30 A.M.–9:00 A.M.', 'Continental breakfast—Food will be available in the reception hall.'],
                        ['9:00 A.M.–9:30 A.M.', 'Announcements'],
                        ['9:40 A.M.–Noon', 'Presentations'],
                        ['Noon–1:00 P.M.', 'Lunch break—Conference attendees will be on their own. There are many reasonably priced dining establishments within walking distance of the conference venue.'],
                        ['1:00 P.M.–4:00 P.M.', 'Workshops'],
                        ['4:00 P.M.–5:15 P.M.', 'Panel discussions and session evaluations']
                    ]
                }
            },
            {
                id: 'v3-p7-t08-multi-set15-p3',
                contextType: 'P1_CORR',
                docType: 'EMAIL',
                header: {
                    to: 'Cindy Connelly <cconnelly@wenfordtech.com>',
                    from: 'Adamu Adebayo <aadebayo@spmail.co.za>',
                    date: '3 February',
                    subject: 'Scholarship thanks'
                },
                content: [
                    'Dear Ms. Connelly,',
                    'Sincere thanks to Wenford Technologies for supporting my attendance at the Breakthroughs conference. It is an exciting opportunity for me, and I am really looking forward to learning from others in the same field who work in different parts of the world.',
                    'I would like to mention that I lead a daily client conference call at 2:30 P.M. (the time in Johannesburg) that I am unable to cancel. This task would start at 9:30 A.M. in Newark, and it will require my attention for 30 minutes or so. Otherwise, I hope to participate fully in all conference proceedings. Please let me know if there is any information you might still need from me.',
                    'Best regards,',
                    'Adamu Adebayo'
                ]
            }
        ],
        questions: [
            {
                id: 'v3-p7-t08-multi-set15-q1',
                questionNo: 196,
                text: 'What does Wenford Technologies want to promote with the scholarships?',
                options: {
                    A: 'Rapid growth',
                    B: 'Collaborative work',
                    C: 'Diverse perspectives',
                    D: 'Innovative problem-solving'
                },
                correctAnswer: 'C',
                classification: 'P7_DETAIL',
                translation: '웬포드 테크놀로지스는 장학금으로 무엇을 촉진하고자 하는가?\n(A) 빠른 성장\n(B) 공동 작업\n(C) 다양한 관점\n(D) 혁신적인 문제 해결',
                explanation: '기사의 첫 번째 단락에서 회의 참가자들에게 더 넓은 세계적 관점을 독려하기 위해(To encourage a greater global perspective among conference participants) 남미에리카, 아프리카, 아시아에서 각각 2인이 장학금 수혜자로 선발될 예정이라고 했으므로, 장학금이 다양한 관점을 촉진하고자 지급됨을 알 수 있으므로, (C)가 정답이다.'
            },
            {
                id: 'v3-p7-t08-multi-set15-q2',
                questionNo: 197,
                text: 'According to the article, what is expected of scholarship applicants?',
                options: {
                    A: 'They must respond to an online survey.',
                    B: 'They should propose workshop topics.',
                    C: 'They must select conference sessions in advance.',
                    D: 'They should be at an early stage of their careers.'
                },
                correctAnswer: 'D',
                classification: 'P7_DETAIL',
                translation: '기사에 따르면, 장학금 지원자에게 무엇이 요구되는가?\n(A) 온라인 설문 조사에 응해야 한다.\n(B) 워크숍 주제를 제안해야 한다.\n(C) 회의 시간을 미리 선택해야 한다.\n(D) 경력 초기 단계에 있어야 한다.',
                explanation: '기사의 마지막 단락에서 장학금 지원자는 1-5년의 기간 동안 상근직으로 고용된 상태이어야 한다(Applicants must be employed full-time ~ for a period of between one and five years in order to be eligible)고 했다. 따라서 경력의 초기 단계에 있는 사람들에게 장학금 지원 자격이 주어진다는 것을 알 수 있으므로, (D)가 정답이다.'
            },
            {
                id: 'v3-p7-t08-multi-set15-q3',
                questionNo: 198,
                text: 'What does the schedule suggest about the conference?',
                options: {
                    A: 'It will provide a catered lunch each day.',
                    B: 'It is still finalizing some details.',
                    C: 'It relies on volunteers to lead discussions.',
                    D: 'It will vary in format each day.'
                },
                correctAnswer: 'B',
                classification: 'P7_INFERENCE',
                translation: '일정표에서 회의에 대해 암시된 것은?\n(A) 매일 출장 요리로 점심 식사를 제공한다.\n(B) 일부 세부사항을 마무리하고 있다.\n(C) 토론 진행은 자원봉사자에게 의존한다.\n(D) 매일 구성 방식이 달라진다.',
                explanation: '일정표의 상단을 보면, 연사 이름 및 소속이 표시된 최종 일정표는 행사 2개월 전에 볼 수 있다(A final schedule with speakers\' names and their affiliations will be available two months prior to the event)고 되어 있다. 따라서 일부 세부 사항이 아직 마무리 중임을 추론할 수 있으므로, (B)가 정답이다.'
            },
            {
                id: 'v3-p7-t08-multi-set15-q4',
                questionNo: 199,
                text: 'What can be concluded about Mr. Adebayo?',
                options: {
                    A: 'He works in the field of computer science.',
                    B: 'He received a job offer from Wenford Technologies.',
                    C: 'He hopes to acquire some international clients.',
                    D: 'He completed his professional training in Newark.'
                },
                correctAnswer: 'A',
                classification: 'P7_INFERENCE',
                translation: '아데바요 씨에 대해 어떤 결론을 내릴 수 있겠는가?\n(A) 컴퓨터 과학 분야에 종사한다.\n(B) 웬포드 테크놀로지스로부터 일자리 제의를 받았다.\n(C) 해외 고객을 얻고 싶어 한다.\n(D) 뉴어크에서 직업 교육을 완수했다.',
                explanation: '이메일의 첫 번째 단락에서 아데바요 씨는 자신의 회의 참석을 지원해 준 것(supporting my attendance at the Breakthroughs conference)에 대해 웬포드 테크놀로지스에 감사를 전했다. 기사의 마지막 단락을 보면, 지원자는 컴퓨터 과학 분야에서 상근직으로 고용된 상태이어야 한다(Applicants must be employed full-time in computer science ~ in order to be eligible)고 했으므로, 아데바요 씨도 컴퓨터 과학 분야에 종사한다고 볼 수 있다. 따라서 (A)가 정답이다.'
            },
            {
                id: 'v3-p7-t08-multi-set15-q5',
                questionNo: 200,
                text: 'During which part of the conference will Mr. Adebayo be absent each day?',
                options: {
                    A: 'Breakfast',
                    B: 'Announcements',
                    C: 'Presentations',
                    D: 'Panel discussions'
                },
                correctAnswer: 'C',
                classification: 'P7_LINK',
                translation: '아데바요 씨는 회의의 어떤 행사 도중에 매번 자리를 비울 것인가?\n(A) 아침 식사\n(B) 공표\n(C) 발표\n(D) 패널 토론',
                explanation: '이메일의 두 번째 단락에서 아데바요 씨는 자신이 매일 오후 2시 30분(요하네스버그 시간)에 고객과 전화 회의를 진행하며 이는 취소가 불가능하다고 한 후, 뉴어크 시간으로 오전 9시 30분에 시작해서 30분 정도 주의를 기울여야 한다(This task would start at 9:30 A.M. in Newark, and it will require my attention for 30 minutes or so)고 덧붙였다. 기사의 첫 번째 단락에서 회의가 뉴어크에서 개최된다고 했고, 일정표를 보면 해당 시간과 겹치는 일정은 오전 9시 40분에 시작하는 발표(Presentations)이므로, (C)가 정답이다.'
            }
        ]
    }
];
