import { Part6TestSet } from './types';

export const test4Data: Part6TestSet = {
        "testId": 4,
        "vol": 3,
        "title": "Test 4",
        "passages": [
            {
                "setId": "v3-p6-t4-p1",
                "contextType": "P1",
                "docType": "email",
                "guidance": "Questions 131-134 refer to the following e-mail.",
                "content": "To: Multiple Recipients\nFrom: Gold Star Bank <information@goldstarbank.co.in>\nSubject: Gold Star Bank App\nDate: 15 July\n\nDear Customer:\n\nHere at Gold Star Bank, we take our customers and their needs seriously. As some of you know, we ___131___ technical difficulties with our mobile app. ___132___. The trouble started on 14 July when our system went down because of a software bug. We expect the app to be up and running ___133___ the next twenty-four hours. ___134___ banking transactions can be done at any of our branch locations, and our automated cash machines are also working.\n\nWe apologize for any inconvenience.\n\nSincerely,\n\nRavi Chadda\nVice President of Customer Relations",
                "translation": "고객님께:\n\nGold Star Bank는 고객님과 고객님의 필요를 소중히 여깁니다. 아시다시피, 현재 저희 모바일 앱에 기술적인 문제가 발생했습니다. 저희 엔지니어들이 현재 이 문제를 해결하기 위해 노력하고 있습니다. 문제는 7월 14일 소프트웨어 오류로 인해 시스템이 중단되면서 시작되었습니다. 앞으로 24시간 이내에 앱이 정상화될 것으로 예상합니다. 그동안 은행 거래는 모든 지점에서 가능하며, 자동 입출금기도 정상 작동하고 있습니다.\n\n불편을 드려 사과드립니다.\n\nRavi Chadda 드림\n고객 관계 부사장",
                "questions": [
                    {
                        "id": "v3-p6-t4-q131",
                        "questionNo": 131,
                        "text": "Select the best answer.",
                        "options": { "A": "to experience", "B": "experiencing", "C": "had experienced", "D": "are experiencing" },
                        "correctAnswer": "D",
                        "explanation": "현재 진행 중인 기술적 문제를 설명하고 있으므로 현재진행형 (D) are experiencing이 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t4-q132",
                        "questionNo": 132,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "Our engineers are working on this problem now.",
                            "B": "The new app is easy to use, and it is available for free.",
                            "C": "We have several openings for customer service representatives.",
                            "D": "We are announcing the opening of a new Gold Star Bank location."
                        },
                        "correctAnswer": "A",
                        "explanation": "앞에서 언급한 기술적 문제에 대한 대응 상황을 설명하는 (A)가 가장 적절합니다.",
                        "classification": "p6s"
                    },
                    {
                        "id": "v3-p6-t4-q133",
                        "questionNo": 133,
                        "text": "Select the best answer.",
                        "options": { "A": "if", "B": "within", "C": "as long as", "D": "above all" },
                        "correctAnswer": "B",
                        "explanation": "향후 24시간 '이내에'라는 의미를 나타내는 전치사 (B) within이 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t4-q134",
                        "questionNo": 134,
                        "text": "Select the best answer.",
                        "options": { "A": "Unusually", "B": "Eventually", "C": "In the meantime", "D": "As an example" },
                        "correctAnswer": "C",
                        "explanation": "앱이 복구되기 전까지의 상황을 설명하고 있으므로 '그동안에'라는 뜻의 접속부사 (C) In the meantime이 정답입니다.",
                        "classification": "p6c"
                    }
                ]
            },
            {
                "setId": "v3-p6-t4-p2",
                "contextType": "P6",
                "docType": "information",
                "guidance": "Questions 135-138 refer to the following information.",
                "content": "Bethenie Industries guarantees that its products will function as ___135___ for at least one year from date of purchase. ___136___. This ___137___ applies only to products sold at Bethenie Industries stores and other licensed distributors. Products that are found to be defective may be shipped to our address for repair or exchange. Please note that products that are being returned because of damage should be shipped back to us, whenever possible, in their ___138___ packaging.",
                "translation": "Bethenie Industries는 당사 제품이 구입일로부터 최소 1년 동안 광고된 대로 기능할 것을 보장합니다. 일부 제품의 경우 이 기간이 연장될 수 있습니다. 이 품질 보증은 Bethenie Industries 매장 및 기타 공식 대리점에서 판매된 제품에만 적용됩니다. 결함이 발견된 제품은 수리 또는 교환을 위해 당사 주소로 배송될 수 있습니다. 손상으로 인해 반품되는 제품은 가능한 한 원래의 포장 상태로 보내주시기 바랍니다.",
                "questions": [
                    {
                        "id": "v3-p6-t4-q135",
                        "questionNo": 135,
                        "text": "Select the best answer.",
                        "options": { "A": "advertising", "B": "advertised", "C": "advertisement", "D": "advertises" },
                        "correctAnswer": "B",
                        "explanation": "'광고된 대로'라는 의미를 위해 as 뒤에서 분사구문 형태로 쓰인 (B) advertised가 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t4-q136",
                        "questionNo": 136,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "For certain products this period may be extended.",
                            "B": "Bethenie Industries stores are located in three countries.",
                            "C": "An electronic receipt was generated at that time.",
                            "D": "Product samples are available in stores."
                        },
                        "correctAnswer": "A",
                        "explanation": "보증 기간에 대한 예외적인 연장 가능성을 언급한 (A)가 가장 적절합니다.",
                        "classification": "p6s"
                    },
                    {
                        "id": "v3-p6-t4-q137",
                        "questionNo": 137,
                        "text": "Select the best answer.",
                        "options": { "A": "agenda", "B": "sale", "C": "requirement", "D": "warranty" },
                        "correctAnswer": "D",
                        "explanation": "앞에서 언급된 품질 보증 기간을 가리키는 명사 (D) warranty(품질 보증)가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t4-q138",
                        "questionNo": 138,
                        "text": "Select the best answer.",
                        "options": { "A": "originally", "B": "original", "C": "origin", "D": "originality" },
                        "correctAnswer": "B",
                        "explanation": "명사 packaging을 수식하는 형용사 (B) original(원래의)이 정답입니다.",
                        "classification": "p6g"
                    }
                ]
            },
            {
                "setId": "v3-p6-t4-p3",
                "contextType": "P2",
                "docType": "notice",
                "guidance": "Questions 139-142 refer to the following notice.",
                "content": "Healthy Foods Market has planned some exciting renovations in the coming weeks. During this time the store will remain open, but certain departments will be temporarily unavailable. Beginning on August 3, the refrigerated and frozen-food sections of the store ___139___ to be under construction. ___140___ food from these areas will be unavailable while work is being completed. Remodeling should be finished by August 9. Store managers are confident that the ___141___ days of inconvenience will be well worth it.\n\n___142___. At this event, there will be complimentary samples of some new food choices, including an expanded selection of nutritious, ready-to-eat lunch and dinner meals.",
                "translation": "Healthy Foods Market은 향후 몇 주 동안 흥미로운 리모델링을 계획하고 있습니다. 이 기간 동안 매장은 계속 열려 있지만, 특정 부서는 일시적으로 이용할 수 없습니다. 8월 3일부터 냉장 및 냉동 식품 코너가 공사에 들어갈 예정입니다. 따라서 공사가 완료되는 동안 이 구역의 식품은 이용이 불가능합니다. 개보수 작업은 8월 9일까지 완료될 예정입니다. 점장들은 며칠간의 불편함이 충분히 가치 있는 일이 될 것이라고 확신합니다. 8월 12일에 특별 기념 행사가 열릴 예정입니다. 이 행사에서는 영양가 있는 즉석 점심 및 저녁 식사 구성을 포함하여 새로운 식품들을 무료로 시식해 보실 수 있습니다.",
                "questions": [
                    {
                        "id": "v3-p6-t4-q139",
                        "questionNo": 139,
                        "text": "Select the best answer.",
                        "options": { "A": "schedules", "B": "to be scheduled", "C": "scheduling", "D": "are scheduled" },
                        "correctAnswer": "D",
                        "explanation": "주어인 식품 코너가 공사에 들어갈 '예정'임을 나타내는 수동태 (D) are scheduled가 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t4-q140",
                        "questionNo": 140,
                        "text": "Select the best answer.",
                        "options": { "A": "However", "B": "Therefore", "C": "Besides", "D": "Likewise" },
                        "correctAnswer": "B",
                        "explanation": "공사로 인해 식품 이용이 불가능하다는 인과관계를 나타내는 접속부사 (B) Therefore가 정답입니다.",
                        "classification": "p6c"
                    },
                    {
                        "id": "v3-p6-t4-q141",
                        "questionNo": 141,
                        "text": "Select the best answer.",
                        "options": { "A": "few", "B": "no", "C": "less", "D": "small" },
                        "correctAnswer": "A",
                        "explanation": "가산 복수 명사인 days와 어울려 '며칠간'이라는 의미를 만드는 (A) few가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t4-q142",
                        "questionNo": 142,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "The store must close for three days.",
                            "B": "Customers must park in the recently added parking area.",
                            "C": "Ice-cream products will be available during the remodeling.",
                            "D": "A special celebration will take place on August 12."
                        },
                        "correctAnswer": "D",
                        "explanation": "뒤 문장에서 언급된 '이 행사(this event)'를 소개하는 (D)가 가장 적절합니다.",
                        "classification": "p6s"
                    }
                ]
            },
            {
                "setId": "v3-p6-t4-p4",
                "contextType": "P3",
                "docType": "article",
                "guidance": "Questions 143-146 refer to the following article.",
                "content": "VANCOUVER (3 February)—Poalesco unveiled its annual Plant Showcase today. According to Poalesco spokesman Nacio Roja, this ___143___ offering highlights the company's latest efforts in botanical research. Many of these efforts result from customer surveys designed to gain an understanding of common challenges. ___144___. This year, the company's specialized nurseries have turned out drought-hardy breeds, such as the Goldtone Apple Tree. These varietals can withstand extended dry conditions without sustaining damage. \"Gardeners in desert ___145___ will appreciate the Goldtones in particular,\" noted Roja. \"And ___146___ might also be interested in our new Q7 rose bushes, which thrive in a similar climate.\"",
                "translation": "밴쿠버 (2월 3일)—Poalesco는 오늘 연례 식물 전시회(Plant Showcase)를 공개했습니다. Poalesco의 대변인 Nacio Roja에 따르면, 이 연례 행사는 식물 연구 부문에 대한 회사의 최신 노력을 강조합니다. 이러한 노력 중 다수는 공통적인 문제점들을 파악하기 위해 고안된 고객 설문조사 결과에서 비롯되었습니다. 그 후 연구 개발 팀은 이러한 문제들을 해결하는 품종을 개발하기 위해 노력합니다. 올해 회사의 전문 묘목장에서는 Goldtone 사과나무와 같은 가뭄에 강한 품종을 생산해 냈습니다. 이 품종들은 손상 없이 장기간의 건조한 환경을 견딜 수 있습니다. Roja는 \"사막 지역의 정원사들이 특히 Goldtone 품종을 반길 것입니다\"라고 말했습니다. \"또한 그들은 비슷한 기후에서 잘 자라는 당사의 신제품 Q7 장미 덤불에도 관심을 가질 수 있습니다.\"",
                "questions": [
                    {
                        "id": "v3-p6-t4-q143",
                        "questionNo": 143,
                        "text": "Select the best answer.",
                        "options": { "A": "daily", "B": "weekly", "C": "monthly", "D": "yearly" },
                        "correctAnswer": "D",
                        "explanation": "앞에서 언급된 'annual'과 같은 의미를 나타내는 (D) yearly가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t4-q144",
                        "questionNo": 144,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "The company seeks out the most profitable sectors in agriculture.",
                            "B": "The company interviews researchers from across the world.",
                            "C": "The research and development team then works to develop varietals that address these difficulties.",
                            "D": "Their extensive research produces some of the most flavorful plants on the market."
                        },
                        "correctAnswer": "C",
                        "explanation": "설문조사를 통해 파악된 문제점들을 해결하기 위한 다음 단계의 연구 노력을 설명하는 (C)가 가장 적절합니다.",
                        "classification": "p6s"
                    },
                    {
                        "id": "v3-p6-t4-q145",
                        "questionNo": 145,
                        "text": "Select the best answer.",
                        "options": { "A": "region", "B": "regions", "C": "regional", "D": "regionally" },
                        "correctAnswer": "B",
                        "explanation": "전치사 in의 목적어 역할을 하는 명사 자리이며, 한정사 없이 쓰였으므로 복수형인 (B) regions가 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t4-q146",
                        "questionNo": 146,
                        "text": "Select the best answer.",
                        "options": { "A": "he", "B": "she", "C": "we", "D": "they" },
                        "correctAnswer": "D",
                        "explanation": "앞서 언급된 '정원사들(Gardeners)'을 지칭하는 대명사 (D) they가 정답입니다.",
                        "classification": "p6v"
                    }
                ]
            }
        ]
    };
