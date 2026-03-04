import { PracticeSet } from '../../v4/reading/part7/multi/types';

export const test3MultiData: PracticeSet[] = [
    // Questions 176-180 (Double Passage)
    {
        id: "v3-p7-t3-set11",
        vol: 3,
        questionRange: "176-180",
        setType: "Double",
        passages: [
            {
                id: "v3-p7-t3-s11-p1",
                contextType: "P5",
                docType: "TABLE",
                header: {
                    title: "Ready Barn",
                    subtitle: "Order #13565",
                    date: "June 3"
                },
                content: [
                    "Delivery: 24-hour Express Shipping",
                    "Shipping Address: Helen Kang, 45 Skyrise Road, Newten, NY 12039",
                    "Payment Method: Credit Card—Jay Shim"
                ],
                table_data: {
                    headers: ["Item Number", "Description", "Price"],
                    rows: [
                        ["7563", "Countertop Electric Grill", "$49"],
                        ["7564", "Egg Beater", "$14"],
                        ["7565", "Tea Kettle", "$27"],
                        ["7566", "Toaster", "$56"],
                        ["7567", "Cheese Grater", "$16"]
                    ],
                    summary: "24-hour Express Shipping: $20 / TOTAL: $182"
                },
                translation: "Ready Barn 주문서\n주문 번호: #13565 / 날짜: 6월 3일\n배송 방식: 24시간 특급 배송\n배송지: Helen Kang, 45 Skyrise Road, Newten, NY 12039\n결제 수단: 신용카드—Jay Shim\n\n품목 번호 | 설명 | 가격\n7563 | 카운터탑 전기 그릴 | $49\n7564 | 거품기 | $14\n7565 | 차 주전자 | $27\n7566 | 토스터 | $56\n7567 | 치즈 강판 | $16\n24시간 특급 배송비: $20 / 총계: $182"
            },
            {
                id: "v3-p7-t3-s11-p2",
                contextType: "P1",
                docType: "EMAIL",
                header: {
                    to: "customerservice@readybarn.com",
                    from: "jayshim@silyex.com",
                    date: "June 6",
                    subject: "Order #13565"
                },
                content: [
                    "Hello,",
                    "I recently placed an order (#13565) with Ready Barn. The items I purchased are housewarming gifts for my niece, Helen Kang, who recently purchased a new home. Therefore, her address was provided as the delivery destination. I paid higher shipping fees for 24-hour delivery, as I wanted the items to arrive well ahead of the housewarming party being held tomorrow evening. Several days have passed, and my niece has yet to receive these items. I would appreciate it if you could find out what has happened and let me know when my niece can expect delivery. Also, I would like to ask you to return the money I paid for expedited shipping.",
                    "Additionally, I do not recognize item number 7564 that I was charged $14 for on my receipt. Please let me know how to send it back.",
                    "I am a longtime customer of Ready Barn, and I am usually very satisfied with your products and services. Please reply as soon as possible.",
                    "Sincerely,",
                    "Jay Shim"
                ],
                translation: "수신: customerservice@readybarn.com\n발신: jayshim@silyex.com\n날짜: 6월 6일\n제목: 주문 번호 #13565\n\n안녕하세요,\n\n최근에 Ready Barn에서 주문(#13565)을 했습니다. 구입한 물건들은 최근에 새 집을 산 제 조카 Helen Kang을 위한 집들이 선물입니다. 그래서 그녀의 주소가 배송지로 제공되었습니다. 저는 내일 저녁에 열리는 집들이 파티에 훨씬 앞서 물건들이 도착하기를 원했기 때문에 24시간 배송을 위해 더 높은 배송비를 지불했습니다. 며칠이 지났지만 제 조카는 아직 이 물건들을 받지 못했습니다. 무슨 일이 일어났는지 알아봐 주시고 제 조카가 언제 배송을 받을 수 있을지 알려주시면 감사하겠습니다. 또한, 빠른 배송을 위해 지불한 금액을 환불해 주시기를 요청합니다.\n\n추가로, 제 영수증에 14달러가 청구된 품목 번호 7564를 알지 못하겠습니다. 어떻게 반품해야 하는지 알려주세요.\n\n저는 Ready Barn의 오랜 고객이며 보통 귀사의 제품과 서비스에 매우 만족하고 있습니다. 가능하면 빨리 답변해 주십시오.\n\nJay Shim 드림"
            }
        ],
        questions: [
            {
                id: "v3-p7-t3-q176",
                questionNo: 176,
                text: "What most likely does Ready Barn specialize in?",
                options: {
                    "A": "Kitchen equipment",
                    "B": "Party invitations",
                    "C": "Shipping supplies",
                    "D": "Large appliances"
                },
                correctAnswer: "A",
                classification: "P7_PURPOSE",
                translation: "Ready Barn은 무엇을 전문으로 할 가능성이 높은가?\n(A) 주방 설비\n(B) 파티 초대장\n(C) 배송 용품\n(D) 대형 가전제품",
                explanation: "주문서에 기재된 전기 그릴, 거품기, 주전자, 토스터, 강판 등의 품목들은 모두 주방 설비에 해당합니다."
            },
            {
                id: "v3-p7-t3-q177",
                questionNo: 177,
                text: "What is indicated about 45 Skyrise Road?",
                options: {
                    "A": "It is Ready Barn's address.",
                    "B": "It is Mr. Shim's billing address.",
                    "C": "It is Ms. Kang's new address.",
                    "D": "It is Mr. Shim's former address."
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                translation: "45 Skyrise Road에 대해 알 수 있는 것은?\n(A) Ready Barn의 주소이다.\n(B) Shim 씨의 청구지 주소이다.\n(C) Kang 씨의 새 주소이다.\n(D) Shim 씨의 이전 주소이다.",
                explanation: "이메일에서 Shim 씨는 그의 조카 Helen Kang이 최근에 새 집을 샀으며, 그녀의 주소가 배송지로 제공되었다고 언급했습니다."
            },
            {
                id: "v3-p7-t3-q178",
                questionNo: 178,
                text: "What does Mr. Shim request in his e-mail?",
                options: {
                    "A": "A discount",
                    "B": "A refund",
                    "C": "A receipt",
                    "D": "A gift list"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                translation: "Shim 씨가 이메일에서 요청하는 것은?\n(A) 할인\n(B) 환급\n(C) 영수증\n(D) 선물 목록",
                explanation: "이메일에서 Shim 씨는 빠른 배송을 위해 지불한 금액을 돌려달라고 요청(return the money I paid for expedited shipping)하고 있습니다."
            },
            {
                id: "v3-p7-t3-q179",
                questionNo: 179,
                text: "What item did Mr. Shim not intend to buy?",
                options: {
                    "A": "The cheese grater",
                    "B": "The grill",
                    "C": "The toaster",
                    "D": "The egg beater"
                },
                correctAnswer: "D",
                classification: "P7_INFERENCE",
                translation: "Shim 씨가 구매하려고 의도하지 않았던 물목은 무엇인가?\n(A) 치즈 강판\n(B) 그릴\n(C) 토스터\n(D) 거품기",
                explanation: "Shim 씨는 영수증에 14달러가 청구된 품목 번호 7564(거품기)를 알지 못한다고 언급하며 반품 방법을 묻고 있습니다."
            },
            {
                id: "v3-p7-t3-q180",
                questionNo: 180,
                text: "According to the e-mail, what is true about Mr. Shim?",
                options: {
                    "A": "He is satisfied with the items he purchased.",
                    "B": "He has shopped with Ready Barn before.",
                    "C": "He received his order on schedule.",
                    "D": "He prefers to shop through a catalog."
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                translation: "이메일에 따르면 Shim 씨에 대해 사실인 것은?\n(A) 그는 그가 구매한 물목들에 만족한다.\n(B) 그는 이전에 Ready Barn에서 쇼핑한 적이 있다.\n(C) 그는 예정대로 주문품을 받았다.\n(D) 그는 카탈로그를 통해 쇼핑하는 것을 선호한다.",
                explanation: "Shim 씨는 자신이 Ready Barn의 오랜 고객(longtime customer)이라고 언급했습니다."
            }
        ]
    },
    // Questions 181-185 (Double Passage)
    {
        id: "v3-p7-t3-set12",
        vol: 3,
        questionRange: "181-185",
        setType: "Double",
        passages: [
            {
                id: "v3-p7-t3-s12-p1",
                contextType: "P1",
                docType: "EMAIL",
                header: {
                    to: "Yong-Sun Che <ysche@buztech.com>",
                    from: "Ginny Redman <gredman@silvervaleair.com>",
                    subject: "RE: Seat problem",
                    date: "February 12",
                    attachment: "Voucher"
                },
                content: [
                    "Dear Mr. Che,",
                    "Thank you for contacting us regarding your recent flight. We apologize for the discomfort you experienced during your flight because of the nonfunctioning air-conditioning vent above your seat.",
                    "We value you as a customer and want to make sure your experience with Silvervale Air is positive, so we have attached Voucher 789798 in the amount of $200. This may be applied to a future domestic flight with us. The voucher expires after twelve months.",
                    "Thank you for choosing Silvervale Air.",
                    "Sincerely,",
                    "Ginny Redman, Silvervale Air Customer Service"
                ],
                translation: "수신: Yong-Sun Che <ysche@buztech.com>\n발신: Ginny Redman <gredman@silvervaleair.com>\n날짜: 2월 12일\n제목: 회신: 좌석 문제\n첨부: 바우처\n\nChe 씨께,\n\n최근 이용하신 항공편과 관련하여 연락 주셔서 감사합니다. 좌석 위 에어컨 송풍구 고장으로 인해 비행 중 겪으신 불편에 대해 사과드립니다.\n\n저희는 고객님을 소중히 여기며 Silvervale Air와 함께하는 경험이 긍정적이기를 바라기에, 200달러 상당의 바우처 789798를 첨부했습니다. 이는 향후 저희 항공사의 국내선 항공편에 사용될 수 있습니다. 이 바우처의 유효 기간은 12개월입니다.\n\nSilvervale Air를 선택해 주셔서 감사합니다.\n\nGinny Redman 드림\nSilvervale Air 고객 서비스부"
            },
            {
                id: "v3-p7-t3-s12-p2",
                contextType: "P5",
                docType: "TABLE",
                header: {
                    title: "Boarding Pass"
                },
                content: [
                    "Passenger: Mr. Yong-Sun Che",
                    "Ticket number: 0272125899649",
                    "Confirmation code: CMOAAB",
                    "Flight: Silvervale Air 29",
                    "Departs: Atlanta, GA (ATL), Mon., May 6, 11:43 A.M.",
                    "Arrives: Los Angeles, CA (LAX), Mon., May 6, 1:35 P.M.",
                    "Seat: 36D",
                    "All passengers are entitled to travel with one complimentary carry-on and one checked bag."
                ],
                table_data: {
                    headers: ["Summary of airfare charges", ""],
                    rows: [
                        ["Base fare", "$259.54"],
                        ["Taxes and fees", "$33.76"],
                        ["Voucher 789798", "-$200.00"],
                        ["Total", "$93.30"]
                    ]
                },
                translation: "탑승권\n\n승객: Mr. Yong-Sun Che\n티켓 번호: 0272125899649\n확인 코드: CMOAAB\n항공편: Silvervale Air 29\n출발: 애틀랜타, GA (ATL), 5월 6일 월요일, 오전 11:43\n도착: 로스앤젤레스, CA (LAX), 5월 6일 월요일, 오후 1:35\n좌석: 36D\n\n항공 요금 상세 내역\n기본 요금: $259.54\n세금 및 수수료: $33.76\n바우처 789798: -$200.00\n총계: $93.30\n\n모든 승객은 기내 휴대 수하물 1개와 위탁 수하물 1개를 무료로 소지하고 여행할 수 있습니다."
            }
        ],
        questions: [
            {
                id: "v3-p7-t3-q181",
                questionNo: 181,
                text: "Why did Ms. Redman e-mail Mr. Che?",
                options: {
                    "A": "To update him on the repair of some equipment",
                    "B": "To announce changes to airfare pricing",
                    "C": "To assign him a new seat",
                    "D": "To offer him compensation"
                },
                correctAnswer: "D",
                classification: "P7_PURPOSE",
                translation: "Redman 씨가 Che 씨에게 이메일을 보낸 이유는 무엇인가?\n(A) 장비 수리에 대한 최신 정보를 주기 위해\n(B) 항공 요금 가격 변경을 알리기 위해\n(C) 그에게 새 좌석을 배정하기 위해\n(D) 그에게 보상을 제안하기 위해",
                explanation: "이메일에서 지난 비행 중 발생한 불편함(에어컨 고장)에 대해 사과하며 200달러 상당의 보상 바우처를 제공하고 있습니다."
            },
            {
                id: "v3-p7-t3-q182",
                questionNo: 182,
                text: "In the e-mail, the phrase \"applied to\" in paragraph 2, line 3, is closest in meaning to",
                options: {
                    "A": "asked for",
                    "B": "used for",
                    "C": "dealt with",
                    "D": "kept with"
                },
                correctAnswer: "B",
                classification: "P7_VOCAB",
                translation: "이메일의 두 번째 단락 3행에 있는 'applied to'와 의미상 가장 가까운 것은?\n(A) ~을 요청한\n(B) ~에 사용된\n(C) ~을 처리한\n(D) ~와 함께 보관된",
                explanation: "문맥상 바우처가 향후 국내선 항공편 구매에 '사용될' 수 있다는 의미이므로 'used for'가 가장 적합합니다."
            },
            {
                id: "v3-p7-t3-q183",
                questionNo: 183,
                text: "What does Ms. Redman mention about Voucher 789798?",
                options: {
                    "A": "It is valid for twelve months.",
                    "B": "It has not been mailed yet.",
                    "C": "It may be used for international flights.",
                    "D": "It cannot be transferred to another passenger."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                translation: "Redman 씨는 바우처 789798에 대해 무엇을 언급하는가?\n(A) 12개월 동안 유효하다.\n(B) 아직 우편으로 발송되지 않았다.\n(C) 국제선 항공편에 사용될 수 있다.\n(D) 다른 승객에게 양도될 수 없다.",
                explanation: "이메일 하단에 'The voucher expires after twelve months(바우처는 12개월 후에 만료됩니다)'라고 명시되어 있습니다."
            },
            {
                id: "v3-p7-t3-q184",
                questionNo: 184,
                text: "What can be inferred from the boarding pass about Mr. Che?",
                options: {
                    "A": "He redeemed the full value of a voucher.",
                    "B": "He paid an additional fee for an upgrade.",
                    "C": "He booked a round-trip flight.",
                    "D": "He is a frequent flyer on Silvervale Air."
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                translation: "Che 씨에 대해 탑승권에서 추론할 수 있는 것은?\n(A) 그는 바우처의 가전 전체를 상환(사용)했다.\n(B) 그는 업그레이드를 위해 추가 요금을 지불했다.\n(C) 그는 왕복 항공편을 예약했다.\n(D) 그는 Silvervale Air의 상용 고객이다.",
                explanation: "이메일에서 받은 바우처가 200달러였는데, 탑승권의 요금 내역(Summary of airfare charges)을 보면 'Voucher 789798 -$200.00'로 전액이 사용되었음을 알 수 있습니다."
            },
            {
                id: "v3-p7-t3-q185",
                questionNo: 185,
                text: "What is indicated about Silvervale Air flight 29?",
                options: {
                    "A": "It departs from Los Angeles.",
                    "B": "It arrives in the afternoon.",
                    "C": "Its passengers do not have assigned seats.",
                    "D": "Its passengers are allowed two free checked bags."
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                translation: "Silvervale Air 29편에 대해 나타난 것은?\n(A) 로스앤젤레스에서 출발한다.\n(B) 오후에 도착한다.\n(C) 승객들은 지정된 좌석이 없다.\n(D) 승객들은 두 개의 위탁 수하물이 무료로 허용된다.",
                explanation: "탑승권에 도착 시간(Arrives)이 '1:35 P.M.'으로 표시되어 있으므로 오후에 도착함을 알 수 있습니다."
            }
        ]
    },
    // Questions 186-190 (Triple Passage)
    {
        id: "v3-p7-t3-set13",
        vol: 3,
        questionRange: "186-190",
        setType: "Triple",
        passages: [
            {
                id: "v3-p7-t3-s13-p1",
                contextType: "P2",
                docType: "MINUTES",
                header: {
                    title: "Coffer Digital Management Steering Committee",
                    subtitle: "Meeting Minutes",
                    date: "November 12"
                },
                content: [
                    "1. Re-pitch is ready to be pilot tested.",
                    "2. The pilot test will be carried out during the first quarter of the fiscal year, January 3—March 31.",
                    "3. Five existing clients will use the experimental version of Re-pitch during the pilot test. They will then take a survey to rate the software's effectiveness, ease of use, and affordability.",
                    "4. If the Re-pitch pilot is successful, a large dollar investment will be needed to design and run an extensive marketing campaign.",
                    "5. Our company president will explore potential funding sources for this campaign."
                ],
                translation: "Coffer Digital 경영 운영 위원회\n회의록 / 11월 12일\n\n1. Re-pitch가 파일럿 테스트(시험 운용) 준비가 되었습니다.\n2. 파일럿 테스트는 회계 연도 1분기인 1월 3일부터 3월 31일 사이에 실시될 예정입니다.\n3. 5곳의 기존 고객사가 파일럿 테스트 기간 동안 Re-pitch의 실험 버전을 사용할 것입니다. 이후 소프트웨어의 효과성, 사용 편의성 및 가격 적절성을 평가하는 설문 조사를 실시할 것입니다.\n4. Re-pitch 파일럿이 성공하면, 광범위한 마케팅 캠페인을 설계하고 실행하기 위해 거액의 투자가 필요할 것입니다.\n5. 당사 사장은 이 캠페인을 위한 잠재적인 자금원을 탐색할 것입니다."
            },
            {
                id: "v3-p7-t3-s13-p2",
                contextType: "P1",
                docType: "EMAIL",
                header: {
                    to: "sales@coffer.com",
                    from: "tcao@ewest-taipei.com.tw",
                    date: "13 April",
                    subject: "Pilot test"
                },
                content: [
                    "Dear Coffer Digital,",
                    "I wanted to follow up after having just submitted our thoughts regarding your Re-pitch marketing software. You will find that our pilot-test feedback is overwhelmingly positive, which is why we would like to be notified immediately upon the rollout of this product. We are very eager to add Re-pitch to our permanent digital marketing efforts.",
                    "Sincerely,",
                    "Ting Cao, Director of Global Internet Marketing",
                    "Ewest Clothing Ltd., Taipei"
                ],
                translation: "수신: sales@coffer.com\n발신: tcao@ewest-taipei.com.tw\n날짜: 4월 13일\n제목: 파일럿 테스트\n\nCoffer Digital 귀중,\n\n귀사의 Re-pitch 마케팅 소프트웨어에 대한 저희의 의견을 방금 제출한 후 후속 연락을 드립니다. 저희의 파일럿 테스트 피드백이 압도적으로 긍정적이라는 것을 알게 되실 것이며, 이것이 저희가 이 제품이 출시되는 즉시 알림을 받고 싶은 이유입니다. 저희는 Re-pitch를 저희의 상시 디지털 마케팅 활동에 추가하기를 매우 간절히 원합니다.\n\nSincerely,\nTing Cao, 글로벌 인터넷 마케팅 이사\nEwest Clothing Ltd., 타이베이"
            },
            {
                id: "v3-p7-t3-s13-p3",
                contextType: "P3",
                docType: "ARTICLE",
                header: {
                    headline: "Business Briefs"
                },
                content: [
                    "Coffer Digital closed a deal yesterday with GPZ Capital. GPZ will make a significant investment in Coffer Digital, enabling the funding of a new online marketing application called Re-pitch. This sales-boosting software works by generating a pop-up window that reminds online shoppers of products they have already viewed, after they have navigated away from the product page.",
                    "GPZ's knowledge of data and marketing has enabled them to make successful investments in three other software development firms in the past five years. Coffer Digital's strong company reputation and top-notch employees easily support GPZ's decision to invest. \"Coffer Digital has a solid plan for distributing Re-pitch, so it was an easy decision to invest with them,\" said Jessica Gould, spokesperson for GPZ."
                ],
                translation: "비즈니스 브리프(Business Briefs)\n\nCoffer Digital은 어제 GPZ Capital과 계약을 체결했습니다. GPZ는 Coffer Digital에 상당한 투자를 할 예정이며, 이를 통해 Re-pitch라고 불리는 새로운 온라인 마케팅 애플리케이션의 자금 조달이 가능해질 것입니다. 이 판매 증진 소프트웨어는 온라인 쇼핑객이 제품 페이지를 벗어난 후, 이전에 이미 조회했던 제품을 상기시켜 주는 팝업 창을 생성하는 방식으로 작동합니다.\n\nGPZ의 데이터 및 마케팅 지식은 지난 5년 동안 다른 3개의 소프트웨어 개발 회사에 성공적인 투자를 할 수 있게 해주었습니다. Coffer Digital의 강력한 기업 평판과 일류 직원들은 GPZ의 투자 결정을 쉽게 뒷받침합니다. GPZ의 대변인 Jessica Gould는 \"Coffer Digital은 Re-pitch를 배포하기 위한 견고한 계획을 가지고 있어 투자를 결정하기 쉬웠습니다\"라고 말했습니다."
            }
        ],
        questions: [
            {
                id: "v3-p7-t3-q186",
                questionNo: 186,
                text: "According to the meeting minutes, what is indicated about the pilot test?",
                options: {
                    "A": "The testing period will last about three months.",
                    "B": "Problems identified during testing must be immediately reported.",
                    "C": "Running the test will be costly.",
                    "D": "The testing plan still needs the president's approval."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                translation: "회의록에 따르면 파일럿 테스트에 대해 나타난 것은?\n(A) 테스트 기간은 약 3개월 동안 지속될 것이다.\n(B) 테스트 중 발견된 문제점은 즉시 보고되어야 한다.\n(C) 테스트를 실행하는 데 비용이 많이 들 것이다.\n(D) 테스트 계획은 여전히 사장의 승인이 필요하다.",
                explanation: "회의록 2번 항목에서 파일럿 테스트가 1월 3일부터 3월 31일까지 실시될 예정이라고 했으므로 약 3개월간 지속됨을 알 수 있습니다."
            },
            {
                id: "v3-p7-t3-q187",
                questionNo: 187,
                text: "What did Mr. Cao do?",
                options: {
                    "A": "He redesigned a Web site.",
                    "B": "He submitted an annual report.",
                    "C": "He completed a survey.",
                    "D": "He started a new business."
                },
                correctAnswer: "C",
                classification: "P7_LINK",
                translation: "Cao 씨는 무엇을 했는가?\n(A) 웹사이트를 재설계했다.\n(B) 연례 보고서를 제출했다.\n(C) 설문 조사를 완료했다.\n(D) 새로운 사업을 시작했다.",
                explanation: "회의록 3번에서 테스트 참여 업체들이 설문 조사(take a survey)를 할 것이라고 했고, 이메일에서 Cao 씨는 소프트웨어에 대한 의견(thoughts / feedback)을 방금 제출했다고 했으므로 설문 조사를 완료했음을 알 수 있습니다."
            },
            {
                id: "v3-p7-t3-q188",
                questionNo: 188,
                text: "What does Mr. Cao request?",
                options: {
                    "A": "To view the results of a test",
                    "B": "To participate in future testing",
                    "C": "To be notified when software is available for purchase",
                    "D": "To set up a marketing consultation appointment"
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                translation: "Cao 씨가 요청하는 것은?\n(A) 테스트 결과 확인\n(B) 향후 테스트에 참여\n(C) 소프트웨어 구매가 가능해질 때 알림을 받는 것\n(D) 마케팅 상담 예약 설정",
                explanation: "이메일에서 'we would like to be notified immediately upon the rollout of this product(이 제품이 출시되는 즉시 알림을 받고 싶다)'라고 요청했습니다."
            },
            {
                id: "v3-p7-t3-q189",
                questionNo: 189,
                text: "According to the article, what does Re-pitch do?",
                options: {
                    "A": "It tracks the sales of online retailers.",
                    "B": "It prevents pop-up windows in Internet browsers.",
                    "C": "It offers customers discounts on products.",
                    "D": "It displays products for online shoppers to consider buying."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                translation: "기사에 따르면 Re-pitch는 무엇을 하는가?\n(A) 온라인 소매업체의 판매를 추적한다.\n(B) 인터넷 브라우저의 팝업 창을 방지한다.\n(C) 고객에게 제품 할인을 제안한다.\n(D) 온라인 쇼핑객이 구매를 고려할 제품을 표시한다.",
                explanation: "기사에서 이 소프트웨어가 온라인 쇼핑객이 이미 조회했던 제품을 상기시켜 주는 팝업 창을 생성(reminds online shoppers of products they have already viewed)한다고 설명하고 있습니다."
            },
            {
                id: "v3-p7-t3-q190",
                questionNo: 190,
                text: "How will Coffer Digital most likely use the funds from GPZ Capital?",
                options: {
                    "A": "To purchase a smaller company",
                    "B": "To advertise a product",
                    "C": "To hire new employees",
                    "D": "To invest in new equipment"
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                translation: "Coffer Digital은 GPZ Capital로부터 받은 자금을 어떻게 사용할 가능성이 높은가?\n(A) 더 작은 회사를 인수하기 위해\n(B) 제품을 광고하기 위해\n(C) 신입 사원을 채용하기 위해\n(D) 새로운 장비에 투자하기 위해",
                explanation: "회의록 4번에서 테스트가 성공하면 마케팅 캠페인(marketing campaign)을 위해 거액의 투자가 필요할 것이라고 했고, 기사에서 GPZ의 투자가 이 소프트웨어의 자금 조달을 가능하게 할 것이라고 했으므로 광고(B)에 사용될 것임을 알 수 있습니다."
            }
        ]
    },
    {
        id: "v3-p7-t3-set14",
        vol: 3,
        questionRange: "191-195",
        setType: "Triple",
        passages: [
            {
                id: "v3-p7-t3-s14-p1",
                contextType: "P3",
                docType: "ARTICLE",
                header: {
                    headline: "TERMINAL C TO REOPEN",
                    date: "May 23"
                },
                content: [
                    "Harrison City Airport's Terminal C will reopen to the public on June 1 following a two-year renovation project.",
                    "The project added eleven new gates, allowing the terminal to accommodate more flights. The three major airlines that used Terminal C before the renovation will now be back in operation there. Also at Terminal C will be newcomer Paik Airways, a regional carrier that is expanding its routes.",
                    "The terminal's new lobby features an efficient check-in process and a state-of-the-art baggage-handling system. Passengers will enjoy free Wi-Fi in the waiting area, which also contains shops and restaurants.",
                    "At one point during the renovations, it looked as if the construction team would miss its deadline. An environmental impact review conducted by the city questioned the placement of a parking lot. The planners solved the problem by moving the parking lot to the other side of the airport and instituting a shuttle bus service.",
                    "\"Thanks to the cooperative efforts of all stakeholders, the project was completed by the deadline with no budget overage,\" said Arturo Benetti, the airport's chief operating officer. \"The improvements to Terminal C will enable us to continue providing Harrison City with safe, comfortable air travel.\""
                ],
                translation: "해리슨 시 공항 터미널 C 재개장\n5월 23일\n\n해리슨 시 공항의 터미널 C가 2년간의 보수 공사를 마치고 6월 1일에 일반에 재개장할 예정입니다.\n\n이번 프로젝트를 통해 11개의 새로운 게이트가 증설되어 터미널이 더 많은 항공편을 수용할 수 있게 되었습니다. 보수 공사 전에 터미널 C를 이용했던 3개의 주요 항공사가 그곳에서 다시 운항을 시작할 것입니다. 또한, 노선을 확장 중인 지역 항공사인 Paik Airways가 터미널 C에 새롭게 합류할 예정입니다.\n\n터미널의 새로운 로비는 효율적인 체크인 프로세스와 최첨단 수하물 처리 시스템을 갖추고 있습니다. 승객들은 상점과 레스토랑이 있는 대기 구역에서 무료 Wi-Fi를 즐길 수 있습니다.\n\n보수 공사 중 한때 건축 팀이 마감 기한을 넘길 것처럼 보인 적도 있었습니다. 시에서 실시한 환경 영향 평가에서 주차장 위치에 의문을 제기했기 때문입니다. 설계자들은 주차장을 공항 반대편으로 옮기고 셔틀버스 서비스를 도입함으로써 이 문제를 해결했습니다.\n\n공항의 최고 운영 책임자인 Arturo Benetti는 \"모든 이해관계자의 협력 덕분에 예산 초과 없이 마감 기한 내에 프로젝트를 완료했습니다. 터미널 C의 개선을 통해 해리슨 시에 안전하고 편안한 항공 여행을 계속 제공할 수 있게 될 것입니다\"라고 말했습니다."
            },
            {
                id: "v3-p7-t3-s14-p2",
                contextType: "P1",
                docType: "EMAIL",
                header: {
                    from: "Thomasina Yee <thomasina.yee@cooverbrothers.com>",
                    to: "Sven Paulsen <sven.paulsen@cooverbrothers.com>",
                    date: "July 6",
                    subject: "Meeting with Slonim Company buyers"
                },
                content: [
                    "Hello, Sven,",
                    "I'm at the Harrison City Airport to catch the 3:30 flight home, but I want to give you a quick update. The meeting at Slonim went well. They are very pleased with Coover Brothers products and expect to double their orders next year. In fact, they offered to feature our bedroom and dining room sets at the upcoming Home and Garden Exposition. I'll give you all the details tomorrow.",
                    "Regards,",
                    "Thomasina"
                ],
                translation: "발신: Thomasina Yee <thomasina.yee@cooverbrothers.com>\n수신: Sven Paulsen <sven.paulsen@cooverbrothers.com>\n날짜: 7월 6일\n제목: Slonim 사 바이어들과의 회의\n\n안녕하세요 Sven,\n\n집으로 가는 3시 30분 비행기를 타기 위해 해리슨 시 공항에 와 있습니다. 그전에 짧은 업데이트를 드리고자 합니다. Slonim에서의 회의는 잘 끝났습니다. 그들은 Coover Brothers의 제품에 매우 만족하고 있으며 내년에 주문량을 두 배로 늘릴 것으로 예상합니다. 사실, 그들은 다가오는 홈 앤 가든 박람회에서 저희의 침실 및 식당 세트를 주요 품목으로 전시하겠다고 제안했습니다. 내일 자세한 내용을 말씀드리겠습니다.\n\nThomasina 드림"
            },
            {
                id: "v3-p7-t3-s14-p3",
                contextType: "P5",
                docType: "TABLE",
                header: {
                    title: "HARRISON CITY AIRPORT—TERMINAL C",
                    subtitle: "DEPARTURES"
                },
                content: [],
                table_data: {
                    headers: ["Airline", "Flight", "Gate", "Time", "Destination", "Status"],
                    rows: [
                        ["Brightway", "BR417", "11", "1:25", "Detroit", "ON TIME"],
                        ["Planet Z", "PL700", "3", "2:06", "Omaha", "CANCELED"],
                        ["Paik", "PA069", "24", "3:00", "Cleveland", "ON TIME"],
                        ["Windrover", "WI645", "6", "3:30", "Chicago", "DELAYED"]
                    ]
                },
                translation: "해리슨 시 공항 - 터미널 C 출발 안내\n\n항공사 | 항공편 | 게이트 | 시간 | 목적지 | 상태\nBrightway | BR417 | 11 | 1:25 | 디트로이트 | 정시\nPlanet Z | PL700 | 3 | 2:06 | 오마하 | 취소\nPaik | PA069 | 24 | 3:00 | 클리브랜드 | 정시\nWindrover | WI645 | 6 | 3:30 | 시카고 | 지연"
            }
        ],
        questions: [
            {
                id: "v3-p7-t3-q191",
                questionNo: 191,
                text: "Why was it necessary to change the location of a parking lot?",
                options: {
                    "A": "To reduce construction costs",
                    "B": "To protect the environment",
                    "C": "To make travel easier for passengers",
                    "D": "To provide spaces for large vehicles"
                },
                correctAnswer: "B",
                classification: "P7_DETAIL",
                translation: "주차장의 위치를 변경해야 했던 이유는 무엇인가?\n(A) 건설 비용을 줄이기 위해\n(B) 환경을 보호하기 위해\n(C) 승객들의 여행을 더 편리하게 만들기 위해\n(D) 대형 차량을 위한 공간을 제공하기 위해",
                explanation: "기사에서 시에서 실시한 환경 영향 평가(environmental impact review)가 주차장 위치에 의문을 제기하여 위치를 변경했다고 언급되어 있습니다."
            },
            {
                id: "v3-p7-t3-q192",
                questionNo: 192,
                text: "What does Mr. Benetti emphasize about Terminal C?",
                options: {
                    "A": "It is the only terminal with free Wi-Fi.",
                    "B": "It was designed by a famous architect.",
                    "C": "Its renovation was funded by the city.",
                    "D": "Its renovation was completed on time."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                translation: "Mr. Benetti는 터미널 C에 대해 무엇을 강조하는가?\n(A) 무료 Wi-Fi가 있는 유일한 터미널이다.\n(B) 유명한 건축가에 의해 설계되었다.\n(C) 보수 공사 자금은 시에서 지원했다.\n(D) 보수 공사가 제시간에 완료되었다.",
                explanation: "Benetti 씨는 인터뷰에서 프로젝트가 마감 기한 내에 완료되었다(project was completed by the deadline)는 점을 강조했습니다."
            },
            {
                id: "v3-p7-t3-q193",
                questionNo: 193,
                text: "What products does Coover Brothers most likely manufacture?",
                options: {
                    "A": "Furniture",
                    "B": "Clothing",
                    "C": "Kitchen appliances",
                    "D": "Gardening tools"
                },
                correctAnswer: "A",
                classification: "P7_INFERENCE",
                translation: "Coover Brothers는 어떤 제품을 제조할 가능성이 높은가?\n(A) 가구\n(B) 의류\n(C) 주방 가전\n(D) 정원 가꾸기 도구",
                explanation: "이메일에서 Thomasina Yee는 Slonim 사가 자신들의 침실 및 식당 세트(bedroom and dining room sets)를 전시하기로 했다고 언급했는데, 이는 가구 제조사임을 시사합니다."
            },
            {
                id: "v3-p7-t3-q194",
                questionNo: 194,
                text: "What is implied about Brightway Airlines?",
                options: {
                    "A": "It is an international carrier.",
                    "B": "It offers flights to Omaha.",
                    "C": "It used Terminal C before the renovation.",
                    "D": "It has a private waiting area for passengers."
                },
                correctAnswer: "C",
                classification: "P7_INFERENCE",
                translation: "Brightway Airlines에 대해 암시된 것은?\n(A) 국제선 항공사이다.\n(B) 오마하행 항공편을 제공한다.\n(C) 보수 공사 전에 터미널 C를 이용했다.\n(D) 승객들을 위한 전용 대기 공간이 있다.",
                explanation: "기사에서 보수 공사 전에 터미널 C를 이용했던 3개의 주요 항공사가 다시 운항할 것이라고 했고, 출발 안내판에 Brightway가 첫 번째로 기재되어 있으므로 해당 항공사가 기존 이용객 중 하나임을 알 수 있습니다."
            },
            {
                id: "v3-p7-t3-q195",
                questionNo: 195,
                text: "What is suggested about Ms. Yee?",
                options: {
                    "A": "She works in Omaha.",
                    "B": "She met with Mr. Benetti.",
                    "C": "Her flight departed late.",
                    "D": "Her luggage was lost."
                },
                correctAnswer: "C",
                classification: "P7_LINK",
                translation: "Ms. Yee에 대해 알 수 있는 것은?\n(A) 오마하에서 근무한다.\n(B) Mr. Benetti와 만났다.\n(C) 그녀의 항공편은 늦게 출발했다.\n(D) 그녀의 수하물이 분실되었다.",
                explanation: "Ms. Yee는 이메일에서 3시 30분 비행기를 타러 왔다고 했는데, 출발 안내판을 보면 3시 30분 항공편(Windrover)은 지연(DELAYED) 상태입니다."
            }
        ]
    },
    {
        id: "v3-p7-t3-set15",
        vol: 3,
        questionRange: "196-200",
        setType: "Triple",
        passages: [
            {
                id: "v3-p7-t3-s15-p1",
                contextType: "P2",
                docType: "BROCHURE",
                header: {
                    title: "ZELL Exteriors"
                },
                content: [
                    "Zell Exteriors' metal roofing products offer many advantages over traditional roofing materials.",
                    "Benefit 1—Weather resistance: Technology that provides greater protection from hail, wind, and rain",
                    "Benefit 2—Wide selection: Large selection of panel types, trim options, and paint colors to choose from",
                    "Benefit 3—Satisfaction guarantee: 30-year warranty for added peace of mind",
                    "Benefit 4—Established reputation: Quality roofing from a trusted company",
                    "For questions about specific products or to request a quote from our sales staff, complete our online contact form. All our roofing panels are fabricated at one of our regional manufacturing facilities, precut to the necessary dimensions for your roof, and shipped to a branch near you. Our professional installers will then take it from there."
                ],
                translation: "ZELL Exteriors 브로슈어\n\nZell Exteriors의 금속 지붕 제품은 전통적인 지붕 재료보다 많은 장점을 제공합니다.\n\n장점 1—내후성: 우박, 바람, 비로부터 더 큰 보호를 제공하는 기술\n장점 2—다양한 선택: 선택할 수 있는 다양한 패널 유형, 트림 옵션, 페인트 색상\n장점 3—만족 보장: 마음의 평안을 더해주는 30년 보증\n장점 4—확고한 명성: 신뢰할 수 있는 기업의 고품질 지붕\n\n특정 제품에 대한 문의나 영업 직원의 견적을 요청하려면 온라인 문의 양식을 작성하십시오. 모든 지붕 패널은 당사의 지역 제조 시설 중 한 곳에서 제작되며, 귀하의 지붕에 필요한 치수에 맞게 미리 절단되어 인근 지점으로 배송됩니다. 그런 다음 당사의 전문 설치 기사가 그곳에서 작업을 진행할 것입니다."
            },
            {
                id: "v3-p7-t3-s15-p2",
                contextType: "P5",
                docType: "TABLE",
                header: {
                    title: "Zell Exteriors Contact Form"
                },
                content: [
                    "Name: Gus Keenan",
                    "E-mail: g.keenan@autowrite.net",
                    "Phone: 555-0188",
                    "Comments: I have been looking at various roofing materials, and the wide range of paint options makes your company my top choice. My shed building is an odd shade of purple, and I want to find a color that complements it. But I have a question. I would like the new metal roof to be placed on top of the old shingle roof I have. This would save money on time, labor, and disposal. Is that something you recommend? I have spent a lot of time reading online forums for professional contractors, and there are mixed opinions about this."
                ],
                translation: "Zell Exteriors 문의 양식\n성함: Gus Keenan\n이메일: g.keenan@autowrite.net\n전화번호: 555-0188\n\n의견: 다양한 지붕 자재를 살펴보고 있는데, 폭넓은 페인트 옵션 덕분에 귀사가 제 첫 번째 선택지가 되었습니다. 제 창고 건물이 특이한 보라색 톤인데, 그것과 어울리는 색상을 찾고 싶습니다. 그런데 질문이 하나 있습니다. 제가 가진 오래된 판자 지붕 위에 새로운 금속 지붕을 설치하고 싶습니다. 이렇게 하면 시간, 노동력, 폐기 비용을 아낄 수 있을 것 같습니다. 이를 권장하시나요? 전문 계약업체들을 위한 온라인 포럼을 읽는 데 많은 시간을 보냈는데, 이에 대해 엇갈린 의견들이 있더군요."
            },
            {
                id: "v3-p7-t3-s15-p3",
                contextType: "P1",
                docType: "EMAIL",
                header: {
                    to: "g.keenan@autowrite.net",
                    from: "nshertz@zellexteriors.com",
                    date: "May 20",
                    subject: "Roofing Inquiry",
                    attachment: "Zell Exteriors catalog"
                },
                content: [
                    "Dear Mr. Keenan,",
                    "A sales representative will contact you by phone within 48 hours, but first please look over the attached product catalog. Here are the four basic roofing types that we offer:",
                    "SLP Snap Lock – Steel panels with a locking feature that enables rapid installation.",
                    "XM Panel – Aluminum panels with superior corrosion resistance. Ideal for wet climates.",
                    "QR Rigid – Low-cost panels that can be installed directly on top of an existing roof.",
                    "WT Panel – Our most durable commercial-grade steel. Available only in white and gray.",
                    "Thank you,",
                    "Nicola Shertz, Administrative Assistant, Zell Exteriors"
                ],
                translation: "수신: g.keenan@autowrite.net\n발신: nshertz@zellexteriors.com\n날짜: 5월 20일\n제목: 지붕 문의\n첨부: Zell Exteriors 카탈로그\n\nKeenan 씨께,\n\n48시간 이내에 영업 대표가 전화로 연락을 드릴 예정입니다만, 먼저 첨부된 제품 카탈로그를 살펴봐 주십시오. 저희가 제공하는 네 가지 기본 지붕 유형은 다음과 같습니다.\n\nSLP Snap Lock – 빠른 설치를 가능하게 하는 잠금 기능이 있는 강철 패널.\nXM Panel – 우수한 부식 방지 기능을 갖춘 알루미늄 패널. 습한 기후에 이상적임.\nQR Rigid – 기존 지붕 위에 직접 설치할 수 있는 저비용 패널.\nWT Panel – 당사의 가장 내구성이 뛰어난 상업용 강철. 흰색과 회색으로만 제공됨.\n\n감사합니다,\nNicola Shertz 드림"
            }
        ],
        questions: [
            {
                id: "v3-p7-t3-q196",
                questionNo: 196,
                text: "What does the brochure mention about Zell Exteriors?",
                options: {
                    "A": "It encourages people to visit a showroom.",
                    "B": "It schedules projects several months in advance.",
                    "C": "It requires an on-site inspection before installation.",
                    "D": "It custom cuts products prior to delivery."
                },
                correctAnswer: "D",
                classification: "P7_DETAIL",
                translation: "브로슈어에서 Zell Exteriors에 대해 무엇을 언급하는가?\n(A) 사람들에게 전시장을 방문하라고 권장한다.\n(B) 몇 달 전에 미리 프로젝트 일정을 잡는다.\n(C) 설치 전에 현장 검사를 요구한다.\n(D) 배송 전에 제품을 맞춤 절단한다.",
                explanation: "브로슈어 마지막 부분에서 패널이 지붕에 필요한 치수에 맞게 미리 절단된다(precut to the necessary dimensions)고 언급되어 있습니다."
            },
            {
                id: "v3-p7-t3-q197",
                questionNo: 197,
                text: "Considering Mr. Keenan's comments, what listed benefit is probably most attractive to him?",
                options: {
                    "A": "Benefit 1",
                    "B": "Benefit 2",
                    "C": "Benefit 3",
                    "D": "Benefit 4"
                },
                correctAnswer: "B",
                classification: "P7_LINK",
                translation: "Keenan 씨의 의견을 고려할 때, 나열된 혜택 중 그에게 가장 매력적인 것은 무엇인가?\n(A) 장점 1\n(B) 장점 2\n(C) 장점 3\n(D) 장점 4",
                explanation: "Keenan 씨는 문의 양식에서 다양한 페인트 옵션(wide range of paint options) 때문에 이 회사를 선택했다고 했으므로, 장점 2(Wide selection)가 가장 매력적일 것입니다."
            },
            {
                id: "v3-p7-t3-q198",
                questionNo: 198,
                text: "What does the form indicate about Mr. Keenan?",
                options: {
                    "A": "He has researched about roofing options.",
                    "B": "He made a mistake when installing some materials.",
                    "C": "He wants his project completed quickly.",
                    "D": "He is unhappy with a previous contractor."
                },
                correctAnswer: "A",
                classification: "P7_DETAIL",
                translation: "문의 양식에서 Mr. Keenan에 대해 알 수 있는 것은?\n(A) 그는 지붕 옵션에 대해 조사했다.\n(B) 그는 일부 자재를 설치할 때 실수를 저질렀다.\n(C) 그는 프로젝트가 빨리 완료되기를 원한다.\n(D) 그는 이전 계약업체에 불만이 있다.",
                explanation: "Keenan 씨는 전문가 포럼을 읽는 데 많은 시간을 보냈다(spent a lot of time reading online forums)고 언급했습니다."
            },
            {
                id: "v3-p7-t3-q199",
                questionNo: 199,
                text: "What kind of roofing product will Mr. Keenan most likely select?",
                options: {
                    "A": "SLP Snap Lock",
                    "B": "XM Panel",
                    "C": "QR Rigid",
                    "D": "WT Panel"
                },
                correctAnswer: "C",
                classification: "P7_LINK",
                translation: "Mr. Keenan은 어떤 종류의 지붕 제품을 선택할 가능성이 가장 높은가?\n(A) SLP Snap Lock\n(B) XM Panel\n(C) QR Rigid\n(D) WT Panel",
                explanation: "Keenan 씨는 기존 지붕 위에 설치하기를 원했는데, 이메일에서 QR Rigid가 기존 지붕 위에 직접 설치할 수 있는(installed directly on top of an existing roof) 제품으로 설명되어 있습니다."
            },
            {
                id: "v3-p7-t3-q200",
                questionNo: 200,
                text: "What does Ms. Shertz tell Mr. Keenan?",
                options: {
                    "A": "He can save money by not delaying a decision.",
                    "B": "He should look over a proposed contract.",
                    "C": "He will be called by a Zell representative.",
                    "D": "He ordered the wrong materials in the past."
                },
                correctAnswer: "C",
                classification: "P7_DETAIL",
                translation: "Ms. Shertz는 Mr. Keenan에게 무엇을 말하는가?\n(A) 결정을 미루지 않음으로써 돈을 절약할 수 있다.\n(B) 제안된 계약서를 살펴봐야 한다.\n(C) Zell의 대표자로부터 전화를 받게 될 것이다.\n(D) 과거에 잘못된 자재를 주문했다.",
                explanation: "이메일 첫 문장에서 영업 대표가 48시간 이내에 전화로 연락할 것(sales representative will contact you by phone)이라고 안내하고 있습니다."
            }
        ]
    }
];
