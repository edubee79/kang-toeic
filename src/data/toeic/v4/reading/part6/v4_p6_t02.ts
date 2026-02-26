import { Part6TestSet } from './types';

export const test02Data: Part6TestSet = {
    testId: 2,
    vol: 4,
    title: "Test 2",
    passages: [
        {
            setId: "v4-p6-t02-p1",
            contextType: "P1",
            docType: "email",
            guidance: "Questions 131-134 refer to the following e-mail.",
            content: "To: Myung-Hee Hahn\nFrom: Dellwyn Home Store\nDate: January 15\nSubject: Order update\n\nDear Ms. Hahn,\n\nYour ___131___ order of a red oak dining table and six matching chairs arrived at our store this morning. ___131___.\nWe would now like to arrange for the delivery of the ___132___. Please call us at 517-555-0188 and ask ___133___ to Coleman Cobb, our delivery manager. ___134___.\n\nCustomer Service, Dellwyn Home Store",
            translation: "수신: 한명희\n발신: 델윈 홈 스토어\n날짜: 1월 15일\n제목: 주문 업데이트\n\n한 씨께,\n\n귀하가 131 특별 주문하신 레드 오크 식탁과 여섯 개의 의자 세트가 오늘 오전 저희 매장에 도착했습니다. 이제 132 가구 배송을 준비하고자 합니다. 517-555-0188로 전화하셔서 저희 배송 관리자인 콜먼 콥에게 133 통화를 요청해 주십시오. 134 그가 편리한 시간을 잡아드릴 수 있습니다.\n\n고객 서비스, 델윈 홈 스토어",
            questions: [
                {
                    id: "v4-p6-t02-q131",
                    questionNo: 131,
                    text: "Select the best answer.",
                    options: {
                        A: "specially",
                        B: "specialize",
                        C: "special",
                        D: "specializing"
                    },
                    correctAnswer: "C",
                    explanation: "빈칸 앞에 소유격 Your, 뒤에 명사 order가 있으므로 명사를 수식하는 형용사 자리입니다. '특별한'이라는 의미의 형용사 (C) special이 정답입니다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t02-q132",
                    questionNo: 132,
                    text: "Select the best answer.",
                    options: {
                        A: "furniture",
                        B: "appliances",
                        C: "refund",
                        D: "tools"
                    },
                    correctAnswer: "A",
                    explanation: "앞 문장에서 언급한 식탁과 의자 세트를 대신할 수 있는 명사인 (A) furniture(가구)가 문맥상 정답입니다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t02-q133",
                    questionNo: 133,
                    text: "Select the best answer.",
                    options: {
                        A: "speak",
                        B: "spoken",
                        C: "is speaking",
                        D: "to speak"
                    },
                    correctAnswer: "D",
                    explanation: "동사 ask 뒤에 목적어(Coleman Cobb)와 함께 쓰이며 '~에게 통화하도록 요청하다'라는 의미를 완성하는 to부정사 자리입니다. (D) to speak가 정답입니다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t02-q134",
                    questionNo: 134,
                    text: "Select the best answer.",
                    options: {
                        A: "He can schedule a convenient time.",
                        B: "He began working here yesterday.",
                        C: "He can meet you at 11:00 A.M.",
                        D: "He recently moved to Dellwyn."
                    },
                    correctAnswer: "A",
                    explanation: "배송 준비를 위해 관리자와 통화하라는 앞 문장의 내용과 연결되어, 배송 시간을 잡는 내용인 (A)가 가장 자연스럽습니다.",
                    classification: "p6s"
                }
            ]
        },
        {
            setId: "v4-p6-t02-p2",
            contextType: "P4",
            docType: "advertisement",
            guidance: "Questions 135-138 refer to the following advertisement.",
            content: "Keep Cool Service Contractors:\n67 Main Road, Edinburgh Village\nChaguanas, Trinidad and Tobago\n\nKeep Cool Service Contractors can bring you peace of mind. As part of an annual contract, we will service your air-conditioning system, ensuring your ___135___ and comfort. This includes inspecting the system, making repairs as needed, and professionally cleaning your air ducts. ___136___, if necessary, we can replace your old air-conditioning system with a new, cost-efficient one.\n\nOur workers are highly qualified licensed technicians who stay up-to-date with ongoing training.\n___137___. We promise you fair prices and professional work, ___138___ by our Keep Cool guarantee.\nCall 1-868-555-0129 for a free quote today.",
            translation: "킵 쿨 서비스 컨트랙터스:\n메인 로 67, 에든버러 빌리지\n차구아나스, 트리니다드토바고\n\n킵 쿨 서비스 컨트랙터스는 고객님께 마음의 평화를 가져다드릴 수 있습니다. 연간 계약의 일환으로 에어컨 시스템을 점검하여 고객님의 135 안전과 편안함을 보장해 드립니다. 여기에는 시스템 점검, 필요시 수리, 전문적인 송풍구 청소가 포함됩니다. 136 게다가, 필요한 경우 고객님의 노후한 에어컨 시스템을 비용 효율적인 새것으로 교체해 드릴 수도 있습니다.\n\n저희 직원들은 고도의 자격을 갖춘 공인 기술자들로 지속적인 교육을 통해 최신 기술을 보유하고 있습니다. 137 또한, 그들은 친절하고 청결하며 박식합니다. 킵 쿨 품질 보증으로 138 보장되는 공정한 가격과 전문적인 작업을 약속드립니다. 오늘 무료 견적을 받으려면 1-868-555-0129로 전화 주십시오.",
            questions: [
                {
                    id: "v4-p6-t02-q135",
                    questionNo: 135,
                    text: "Select the best answer.",
                    options: {
                        A: "safe",
                        B: "safely",
                        C: "safest",
                        D: "safety"
                    },
                    correctAnswer: "D",
                    explanation: "소유격(your) 뒤에서 명사 comfort와 병렬 연결되는 명사 자리입니다. (D) safety가 정답입니다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t02-q136",
                    questionNo: 136,
                    text: "Select the best answer.",
                    options: {
                        A: "On one hand",
                        B: "Nonetheless",
                        C: "Furthermore",
                        D: "And yet"
                    },
                    correctAnswer: "C",
                    explanation: "앞에서 언급한 일반적인 서비스(점검, 수리 등)에 더해 시스템 교체 서비스까지 추가로 설명하고 있으므로 '게다가'라는 뜻의 (C) Furthermore가 적절합니다.",
                    classification: "p6c"
                },
                {
                    id: "v4-p6-t02-q137",
                    questionNo: 137,
                    text: "Select the best answer.",
                    options: {
                        A: "Take advantage of dozens of useful online tools.",
                        B: "Moreover, the air conditioner you chose is very popular.",
                        C: "Plus, they are friendly, clean, and knowledgeable.",
                        D: "Thank you for visiting our contractor showroom."
                    },
                    correctAnswer: "C",
                    explanation: "앞 문장에서 직원들의 기술적 자격을 언급했고, 빈칸 뒤에서 전문적인 작업을 약속하고 있으므로 직원들에 대한 추가적인 긍정적 묘사인 (C)가 정답입니다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t02-q138",
                    questionNo: 138,
                    text: "Select the best answer.",
                    options: {
                        A: "backed",
                        B: "backs",
                        C: "backing",
                        D: "back"
                    },
                    correctAnswer: "A",
                    explanation: "앞의 명사(prices and professional work)를 수식하는 분사 자리로, 품질 보증에 의해 '보장되는/뒷받침되는'이라는 수동의 의미이므로 과거분사 (A) backed가 정답입니다.",
                    classification: "p6g"
                }
            ]
        },
        {
            setId: "v4-p6-t02-p3",
            contextType: "P1",
            docType: "email",
            guidance: "Questions 139-142 refer to the following e-mail.",
            content: "To: All Customers\nFrom: asquires@lightidea.com\nDate: March 6\nSubject: Information\n\nDear Light Idea Customers,\n\nLight Idea is enacting a price increase on select energy-efficient products, effective April 17.\nSpecific product pricing will ___139___. Please contact your sales representative for details and questions.\n\nThe last date for ordering at current prices is April 16. All orders ___140___ after this date will follow the new price list. ___141___. Customers will be able to find this on our Web site.\n\nWe will continue to provide quality products and ___142___ service to our valued customers. Thank you for your business.\n\nSincerely,\n\nArvin Squires\nHead of Sales, Light Idea",
            translation: "수신: 전 고객\n발신: asquires@lightidea.com\n날짜: 3월 6일\n제목: 정보\n\n라이트 아이디어 고객분들께,\n\n라이트 아이디어는 4월 17일부터 일부 에너지 효율 제품에 가격 인상을 시행합니다. 구체적인 제품 가격은 139 다양할 것입니다. 자세한 내용과 질문은 영업 담당자에게 문의해 주십시오.\n\n현재 가격으로 주문할 수 있는 마지막 날짜는 4월 16일입니다. 이 날짜 이후에 140 접수되는 모든 주문은 새로운 가격표를 따를 예정입니다. 141 업데이트된 가격표는 3월 20일에 확인하실 수 있습니다. 고객분들은 저희 웹사이트에서 이 표를 확인하실 수 있습니다.\n\n저희는 계속해서 소중한 고객분들께 양질의 제품과 142 탁월한 서비스를 제공할 것입니다. 거래해 주셔서 감사합니다.\n\n아빈 스콰이어스\n영업 책임자, 라이트 아이디어",
            questions: [
                {
                    id: "v4-p6-t02-q139",
                    questionNo: 139,
                    text: "Select the best answer.",
                    options: {
                        A: "agree",
                        B: "vary",
                        C: "wait",
                        D: "decline"
                    },
                    correctAnswer: "B",
                    explanation: "가격 인상이 전 제품이 아닌 선택된 제품에 적용된다는 앞 문장의 맥락상, 제품별로 가격이 '다르다/다양하다'는 의미의 (B) vary가 적절합니다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t02-q140",
                    questionNo: 140,
                    text: "Select the best answer.",
                    options: {
                        A: "receiving",
                        B: "having received",
                        C: "received",
                        D: "will be received"
                    },
                    correctAnswer: "C",
                    explanation: "명사 All orders를 수식하는 분사 자리로, 특정 날짜 이후에 '접수된' 주문이라는 수동의 의미이므로 과거분사 (C) received가 정답입니다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t02-q141",
                    questionNo: 141,
                    text: "Select the best answer.",
                    options: {
                        A: "The updated price list will be available on March 20.",
                        B: "We apologize for this inconvenience.",
                        C: "Your orders will be shipped after April 17.",
                        D: "We are increasing prices because of rising costs."
                    },
                    correctAnswer: "A",
                    explanation: "빈칸 뒤 문장에서 '고객들이 이것(this)을 웹사이트에서 찾을 수 있을 것'이라고 했으므로, this가 지칭하는 대상인 '업데이트된 가격표'의 공개 시점을 안내하는 (A)가 적절합니다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t02-q142",
                    questionNo: 142,
                    text: "Select the best answer.",
                    options: {
                        A: "exceptionally",
                        B: "exception",
                        C: "exceptional",
                        D: "exceptionalism"
                    },
                    correctAnswer: "C",
                    explanation: "명사 service를 수식하는 형용사 자리입니다. '탁월한, 예외적인'이라는 뜻의 형용사 (C) exceptional이 정답입니다.",
                    classification: "p6g"
                }
            ]
        },
        {
            setId: "v4-p6-t02-p4",
            contextType: "P1",
            docType: "email",
            guidance: "Questions 143-146 refer to the following e-mail.",
            content: "To: Jang-Ho Kwon <jkwon@newart.nz>\nFrom: Kenneth Okim <k.okim@okimjewelry.nz>\nSubject: Good news\nDate: 30 August\n\nDear Jang-Ho,\n\nThank you for the shipment last month of 80 units of your jewelry pieces. I am happy to report that they have been selling very well in my shop. My ___143___ love the colourful designs as well as the quality of your workmanship. ___144___.\n\nI would like to increase the number of units I order from you. Would you be able to ___145___ my order for the September shipment?\n\nFinally, I would like to discuss the possibility of featuring your work exclusively in my store. I believe that I could reach your target audience best and that the agreement would serve ___146___ both very well. I look forward to hearing from you.\n\nBest regards,\n\nKenneth Okim\nOkim Jewelry",
            translation: "수신: 권장호 <jkwon@newart.nz>\n발신: 케네스 오킴 <k.okim@okimjewelry.nz>\n제목: 좋은 소식\n날짜: 8월 30일\n\n장호 씨께,\n\n지난달에 보석 제품 80개를 보내 주셔서 감사합니다. 제 매장에서 그 제품들이 매우 잘 팔리고 있다는 말씀을 전하게 되어 기쁩니다. 저희 143 고객들은 귀하의 우수한 세공 품질뿐 아니라 다채로운 디자인을 정말 좋아합니다. 144 합리적인 가격 또한 당신의 작품에 큰 가치를 부여합니다.\n\n귀하로부터 주문하는 상품의 수를 늘리고 싶습니다. 9월 배송에 제 주문을 145 두 배로 늘릴 수 있을까요?\n\n마지막으로, 당신의 작품을 제 매장에서 독점 취급할 수 있는 가능성에 대해 논의하고 싶습니다. 저는 제가 당신의 목표 고객층에 가장 잘 다가갈 수 있으며 이 협약이 146 우리 두 사람 모두에게 아주 도움이 될 것이라고 믿습니다. 연락 기다리겠습니다.\n\n케네스 오킴\n오킴 주얼리",
            questions: [
                {
                    id: "v4-p6-t02-q143",
                    questionNo: 143,
                    text: "Select the best answer.",
                    options: {
                        A: "patients",
                        B: "students",
                        C: "customers",
                        D: "teammates"
                    },
                    correctAnswer: "C",
                    explanation: "매장에서 물건을 구매하는 사람들을 지칭하므로 (C) customers(고객들)가 정답입니다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t02-q144",
                    questionNo: 144,
                    text: "Select the best answer.",
                    options: {
                        A: "If you need more time, please let me know.",
                        B: "Unfortunately, I do not have adequate shelf space at this time.",
                        C: "I would like to show you some of my own designs.",
                        D: "The reasonable prices also make your pieces a great value."
                    },
                    correctAnswer: "D",
                    explanation: "앞 문장에서 언급한 디자인과 품질에 이어 제품의 매력을 더해주는 추가적인 장점인 '합리적인 가격'과 '가치'를 언급하는 (D)가 적절합니다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t02-q145",
                    questionNo: 145,
                    text: "Select the best answer.",
                    options: {
                        A: "include",
                        B: "double",
                        C: "repeat",
                        D: "insure"
                    },
                    correctAnswer: "B",
                    explanation: "주문 수량을 늘리고 싶다는 앞 문장의 맥락에서 구체적인 수량 조절 방식을 나타내며, 보석 제품의 주문량을 '두 배로 하다'라는 뜻의 (B) double이 가장 적절합니다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t02-q146",
                    questionNo: 146,
                    text: "Select the best answer.",
                    options: {
                        A: "us",
                        B: "you",
                        C: "we",
                        D: "these"
                    },
                    correctAnswer: "A",
                    explanation: "동사 serve의 목적어 자리이며, 앞뒤 문맥상 '우리 두 사람 모두'를 의미해야 하므로 1인칭 복수 대명사의 목적격인 (A) us가 정답입니다.",
                    classification: "p6g"
                }
            ]
        }
    ]
};
