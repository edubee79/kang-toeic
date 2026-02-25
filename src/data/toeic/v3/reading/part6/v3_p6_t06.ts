import { Part6TestSet } from './types';

export const test6Data: Part6TestSet = {
        "testId": 6,
        "vol": 3,
        "title": "Test 6",
        "passages": [
            {
                "setId": "v3-p6-t6-p1",
                "contextType": "P1",
                "docType": "letter",
                "guidance": "Questions 131-134 refer to the following letter.",
                "content": "9 October\n\nEva Archer, Owner\nArcher Café\n40 Thorpe Street\nPort Fairy VIC 3284\n\nDear Ms. Archer:\n\nAn inspection of your restaurant was conducted on 16 September by ___131___ of the Department of Health and Safety. ___132___. The purpose of the inspection was to confirm that your business is in compliance with all local regulations and that all ___133___ permits are up-to-date. The Department has determined that all regulations are being followed ___134___. Therefore, no further action is required on your part.\n\nSincerely,\n\nOliver Wu\nDepartment of Health and Safety",
                "translation": "10월 9일\n\nArcher Café 대표 Eva Archer 귀하\n40 Thorpe Street\nPort Fairy VIC 3284\n\nArcher 씨에게:\n\n귀하의 식당에 대한 점검이 9월 16일 보건안전부의 대표자들에 의해 실시되었습니다. 이러한 방문 점검은 1년에 한 번 실시됩니다. 점검의 목적은 귀하의 사업체가 모든 지역 규정을 준수하고 있으며 모든 필수 허가증이 최신 상태임을 확인하는 것이었습니다. 본 부서는 모든 규정이 만족스럽게 준수되고 있다고 판단하였습니다. 따라서 귀하가 취해야 할 추가 조치는 없습니다.\n\nOliver Wu 드림\n보건안전부",
                "questions": [
                    {
                        "id": "v3-p6-t6-q131",
                        "questionNo": 131,
                        "text": "Select the best answer.",
                        "options": { "A": "represents", "B": "representative", "C": "representatives", "D": "representations" },
                        "correctAnswer": "C",
                        "explanation": "보건안전부의 '직원들(대표자들)'에 의해 점검이 수행되었다는 의미이므로 복수 명사 (C) representatives가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t6-q132",
                        "questionNo": 132,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "Such visits are conducted once a year.",
                            "B": "The restaurant will be closed for inspection.",
                            "C": "Regulations are posted on our Web site.",
                            "D": "The department opens at 9:00 A.M."
                        },
                        "correctAnswer": "A",
                        "explanation": "점검 방문의 주기나 성격을 설명하는 (A)가 가장 적절합니다.",
                        "classification": "p6s"
                    },
                    {
                        "id": "v3-p6-t6-q133",
                        "questionNo": 133,
                        "text": "Select the best answer.",
                        "options": { "A": "meaningful", "B": "fortunate", "C": "persistent", "D": "necessary" },
                        "correctAnswer": "D",
                        "explanation": "사업 운영에 '필요한(필수적인)' 허가증을 뜻하므로 (D) necessary가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t6-q134",
                        "questionNo": 134,
                        "text": "Select the best answer.",
                        "options": { "A": "potentially", "B": "satisfactorily", "C": "inconsistently", "D": "temporarily" },
                        "correctAnswer": "B",
                        "explanation": "추가 조치가 필요 없을 정도로 규정이 '만족스럽게' 준수되고 있다는 의미이므로 (B) satisfactorily가 정답입니다.",
                        "classification": "p6v"
                    }
                ]
            },
            {
                "setId": "v3-p6-t6-p2",
                "contextType": "P2",
                "docType": "email",
                "guidance": "Questions 135-138 refer to the following e-mail.",
                "content": "To: Certain Boutique <info@certainboutique.co.uk>\nFrom: Premium Thai Candles <orders@prethaican.com>\nDate: October 28\nSubject: Order status\n\nDear Customer,\n\nWe are delighted ___135___ you as a customer of Premium Thai Candles. Your wholesale order for 40 boxes of candles is being processed. ___136___.\n\nMost of your order is currently in stock and will arrive in the United Kingdom within ten days.\n\n___137___, please be advised that the rose-scented candles are on back order. They will be available three weeks from now, and we will ship them as soon as possible.\n\nWe sincerely hope that you are happy with your ___138___ order as a new customer of Premium Thai Candles.\n\nBest,\n\nSamaraya Sharma",
                "translation": "수신: Certain Boutique <info@certainboutique.co.uk>\n발신: Premium Thai Candles <orders@prethaican.com>\n날짜: 10월 28일\n제목: 주문 상태\n\n고객님께,\n\n귀하를 Premium Thai Candles의 고객으로 맞이하게 되어 매우 기쁩니다. 귀하께서 주문하신 양초 40박스의 도매 주문이 처리 중입니다. 구매해 주셔서 감사합니다.\n\n주문하신 상품 대부분은 현재 재고가 있으며 열흘 이내에 영국에 도착할 예정입니다. \n\n하지만, 장미 향 양초는 현재 이월 주문 상태임을 알려드립니다. 3주 후에 입고될 예정이며, 가능한 한 빨리 배송해 드리겠습니다.\n\nPremium Thai Candles의 신규 고객으로서 귀하의 첫 주문에 만족하시기를 진심으로 바랍니다.\n\nSamaraya Sharma 드림",
                "questions": [
                    {
                        "id": "v3-p6-t6-q135",
                        "questionNo": 135,
                        "text": "Select the best answer.",
                        "options": { "A": "welcome", "B": "welcomed", "C": "will welcome", "D": "to welcome" },
                        "correctAnswer": "D",
                        "explanation": "감정의 형용사 delighted 뒤에서 이유를 나타내는 to부정사 (D) to welcome이 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t6-q136",
                        "questionNo": 136,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "Save now on this limited-time offer.",
                            "B": "Thank you for the purchase.",
                            "C": "We have other boxes, too.",
                            "D": "Our Web site is now available."
                        },
                        "correctAnswer": "B",
                        "explanation": "주문 처리를 안내하며 구매에 대해 감사를 표하는 (B)가 가장 적절합니다.",
                        "classification": "p6s"
                    },
                    {
                        "id": "v3-p6-t6-q137",
                        "questionNo": 137,
                        "text": "Select the best answer.",
                        "options": { "A": "However", "B": "Given that", "C": "As you can imagine", "D": "At that point" },
                        "correctAnswer": "A",
                        "explanation": "대부분 입고된다는 앞 문장과 달리 특정 품목이 지연된다는 내용을 연결하므로 역접의 접속부사 (A) However가 정답입니다.",
                        "classification": "p6c"
                    },
                    {
                        "id": "v3-p6-t6-q138",
                        "questionNo": 138,
                        "text": "Select the best answer.",
                        "options": { "A": "proper", "B": "usual", "C": "initial", "D": "rapid" },
                        "correctAnswer": "C",
                        "explanation": "신규 고객으로서 한 '첫(초기의)' 주문을 뜻하므로 (C) initial이 정답입니다.",
                        "classification": "p6v"
                    }
                ]
            },
            {
                "setId": "v3-p6-t6-p3",
                "contextType": "P3",
                "docType": "article",
                "guidance": "Questions 139-142 refer to the following article.",
                "content": "GREENWAY (December 15)—The country's employment rose by over 40,000 jobs during October and November, ___139___ government statistics just released. The biggest increase was in the retail sector, with 9,000 new jobs created. The service sector came in ___140___ in overall activity with 8,400 added jobs. Professional and business services gained jobs as well. Health services and education each saw strong gains with 4,200 jobs. ___141___. By company size, medium-sized businesses of 50 to 499 employees hired the most workers. Large businesses of 500 or more employees hired 12,000 workers. \"The job market remains robust, and we ___142___ it to continue,\" said economist Keisha Hou.",
                "translation": "GREENWAY (12월 15일)—오늘 발표된 정부 통계에 따르면, 지난 10월과 11월 동안 국가 고용이 40,000건 이상 증가했습니다. 가장 큰 증가는 소매 부문으로 9,000개의 일자리가 새로 창출되었습니다. 서비스 부문은 8,400개의 일자리가 추가되어 전체 활동에서 2위를 차지했습니다. 전문 및 비즈니스 서비스 부문도 일자리가 늘어났습니다. 보건 서비스와 교육 부문도 각각 4,200개의 일자리로 강한 증가세를 보였습니다. 성장이 전혀 없는 유일한 분야는 농업이었습니다. 회사 규모별로는 직원 50~499명의 중소기업이 가장 많은 인력을 고용했습니다. 직원 500명 이상의 대기업은 12,000명을 고용했습니다. \"고용 시장은 여전히 견고하며, 저희는 이러한 추세가 계속될 것으로 예상합니다\"라고 경제학자 Keisha Hou가 전했습니다.",
                "questions": [
                    {
                        "id": "v3-p6-t6-q139",
                        "questionNo": 139,
                        "text": "Select the best answer.",
                        "options": { "A": "because", "B": "whereas", "C": "according to", "D": "instead of" },
                        "correctAnswer": "C",
                        "explanation": "정부 통계 '에 따르면'이라는 의미의 전치사구 (C) according to가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t6-q140",
                        "questionNo": 140,
                        "text": "Select the best answer.",
                        "options": { "A": "last", "B": "second", "C": "primary", "D": "best" },
                        "correctAnswer": "B",
                        "explanation": "앞서 언급된 소매 부문(9,000개) 다음으로 많은 8,400개이므로 '2위'를 뜻하는 (B) second가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t6-q141",
                        "questionNo": 141,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "Utilities stocks rose about 5 percent on average.",
                            "B": "However, a new car manufacturing plant will open next month.",
                            "C": "The only sector with zero growth was agriculture.",
                            "D": "College enrollment increased by only 4 percent."
                        },
                        "correctAnswer": "C",
                        "explanation": "여러 부문의 고용 실적을 나열하는 흐름에서 또 다른 부문의 정보를 제공하는 (C)가 적절합니다.",
                        "classification": "p6s"
                    },
                    {
                        "id": "v3-p6-t6-q142",
                        "questionNo": 142,
                        "text": "Select the best answer.",
                        "options": { "A": "expect", "B": "expecting", "C": "expected", "D": "expectant" },
                        "correctAnswer": "A",
                        "explanation": "주어 we 뒤에 오는 본동사 자리이며, 현재의 상황(remains robust)에 대한 예측이므로 현재 시제 (A) expect가 정답입니다.",
                        "classification": "p6g"
                    }
                ]
            },
            {
                "setId": "v3-p6-t6-p4",
                "contextType": "P8",
                "docType": "notice",
                "guidance": "Questions 143-146 refer to the following notice.",
                "content": "Loffler Mobile Banking\n\nIn the coming weeks, Loffler Bank will be making upgrades to its mobile application to provide a more secure and user-friendly experience. Customers will now be able to view all their Loffler accounts simultaneously and enjoy ___143___ security through a fingerprint identification scan. ___144___, users may now customize their online dashboard to track their expenses and budgets.\n\nChanges can prove to be challenging for individuals, particularly in light of rapid technological advancement. ___145___. Therefore, should you ever need assistance ___146___ any of the features of our app, call us at 555-0133 or visit us online at www.lofflerbank.com/faq.",
                "translation": "Loffler 모바일 뱅킹\n\n앞으로 몇 주 동안 Loffler Bank는 더욱 안전하고 사용자 친화적인 환경을 제공하기 위해 모바일 애플리케이션을 업그레이드할 예정입니다. 이제 고객님들은 모든 Loffler 계좌를 동시에 조회할 수 있으며, 지문 인식 스캔을 통해 향상된 보안을 누릴 수 있습니다. 또한, 사용자는 비용과 예산을 추적하기 위해 온라인 대시보드를 맞춤 설정할 수 있습니다.\n\n급격한 기술 발전의 관점에서 볼 때, 변화는 개인에게 어려울 수 있습니다. 저희 팀원들은 이러한 사실을 잘 알고 있습니다. 따라서 저희 앱의 기능에 대해 도움이 필요하시면 555-0133으로 전화하거나 www.lofflerbank.com/faq를 방문해 주시기 바랍니다.",
                "questions": [
                    {
                        "id": "v3-p6-t6-q143",
                        "questionNo": 143,
                        "text": "Select the best answer.",
                        "options": { "A": "enhance", "B": "enhanced", "C": "enhancing", "D": "enhancement" },
                        "correctAnswer": "B",
                        "explanation": "security를 수식하여 '향상된' 보안을 뜻하는 과거분사 (B) enhanced가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t6-q144",
                        "questionNo": 144,
                        "text": "Select the best answer.",
                        "options": { "A": "Additionally", "B": "Consequently", "C": "Ultimately", "D": "Conversely" },
                        "correctAnswer": "A",
                        "explanation": "앞서 언급된 기능에 이어 추가 기능을 소개하므로 (A) Additionally가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t6-q145",
                        "questionNo": 145,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "The new security measures aim to fix this problem.",
                            "B": "We will be monitoring this development closely.",
                            "C": "Our team members are well aware of this fact.",
                            "D": "We sincerely apologize for this mistake."
                        },
                        "correctAnswer": "C",
                        "explanation": "기술적 변화가 어려울 수 있다는 점에 공감을 표하는 (C)가 가장 적절합니다.",
                        "classification": "p6s"
                    },
                    {
                        "id": "v3-p6-t6-q146",
                        "questionNo": 146,
                        "text": "Select the best answer.",
                        "options": { "A": "over", "B": "for", "C": "by", "D": "with" },
                        "correctAnswer": "D",
                        "explanation": "assistance와 어울려 '~에 관한 도움'을 뜻하는 전치사 (D) with가 정답입니다.",
                        "classification": "p6v"
                    }
                ]
            }
        ]
    };
