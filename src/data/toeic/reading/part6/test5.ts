import { Part6TestSet } from './types';

export const test5Data: Part6TestSet = {
        "testId": 5,
        "title": "Test 5",
        "passages": [
            {
                "setId": "p6-t5-p1",
                "contextType": "P3",
                "docType": "article",
                "guidance": "Questions 131-134 refer to the following article.",
                "content": "COPENHAGEN (25 May)—Odense Media announced today that initial sales of the latest version of its tablet, Virtusonic, have ___131___ the company's expectations. Company spokesperson Kerstin Vestergaard attributes the ___132___ sales to a number of factors. First, there is the tablet's high-quality case. ___133___. In addition, the Virtusonic has an adaptive screen brightness feature. This allows it to adjust automatically to less-than-ideal ___134___ conditions. Vestergaard believes that these characteristics make the Virtusonic a must-have for consumers.",
                "translation": "코펜하겐 (5월 25일)—Odense Media는 오늘 당사 태블릿의 최신 버전인 Virtusonic의 초기 판매량이 회사의 예상을 뛰어넘었다고 발표했습니다. 회사 대변인 Kerstin Vestergaard는 인상적인 매출의 원인을 몇 가지 요인으로 꼽았습니다. 첫째, 태블릿의 고품질 케이스입니다. 보호용 쉘은 기기의 내구성을 보장합니다. 또한 Virtusonic에는 밝기 자동 조정 기능이 있습니다. 이를 통해 열악한 조명 조건에서도 자동으로 화면 밝기를 조정할 수 있습니다. Vestergaard는 이러한 특징들이 Virtusonic을 소비자들의 필수 아이템으로 만든다고 믿습니다.",
                "questions": [
                    {
                        "id": "p6-t5-q131",
                        "questionNo": 131,
                        "text": "Select the best answer.",
                        "options": { "A": "based", "B": "surpassed", "C": "invested", "D": "progressed" },
                        "correctAnswer": "B",
                        "explanation": "판매량이 기대를 '뛰어넘었다'는 의미이므로 타동사 (B) surpassed가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "p6-t5-q132",
                        "questionNo": 132,
                        "text": "Select the best answer.",
                        "options": { "A": "progress", "B": "impressing", "C": "impressive", "D": "impressed" },
                        "correctAnswer": "C",
                        "explanation": "명사 sales를 수식하여 '인상적인' 매출을 뜻하는 형용사 (C) impressive가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "p6-t5-q133",
                        "questionNo": 133,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "Customers must consider what the tablet will be used for.",
                            "B": "The Virtusonic will be available in other colors next month.",
                            "C": "Check stores for the best deals on the new device.",
                            "D": "The protective shell ensures the durability of the device."
                        },
                        "correctAnswer": "D",
                        "explanation": "앞 문장에서 언급된 고품질 케이스의 장점을 설명하는 (D)가 가장 적절합니다.",
                        "classification": "p6s"
                    },
                    {
                        "id": "p6-t5-q134",
                        "questionNo": 134,
                        "text": "Select the best answer.",
                        "options": { "A": "lighting", "B": "noise", "C": "temperature", "D": "wind" },
                        "correctAnswer": "A",
                        "explanation": "화면 밝기 자동 조정 기능과 관련된 조건이므로 (A) lighting(조명)이 정답입니다.",
                        "classification": "p6v"
                    }
                ]
            },
            {
                "setId": "p6-t5-p2",
                "contextType": "P2",
                "docType": "memo",
                "guidance": "Questions 135-138 refer to the following memo.",
                "content": "To: All employees\nFrom: Marcus Sindhu, IT Director\nDate: June 1\nSubject: Web site maintenance\n\nPlease note that routine maintenance of the server will be performed this weekend, affecting the content of our company Web site. The server ___135___ down for approximately eight hours from 11 P.M. on Saturday, June 6, to 7 A.M. on Sunday, June 7. ___136___ this time, access to the Web site will be restricted, and e-mail delivery will be paused. ___137___. Once the server is back up, please take some time to explore the ___138___ features on the Web site. These include a new scheduler and a more user-friendly search tool.\n\nYour patience is greatly appreciated. Please direct any questions to me.",
                "translation": "모든 직원들에게:\n\n이번 주말에 서버 정기 점검이 실시될 예정이며, 이로 인해 회사 웹사이트 이용에 영향이 있을 것입니다. 서버는 6월 6일 토요일 오후 11시부터 6월 7일 일요일 오전 7시까지 약 8시간 동안 중단됩니다. 이 시간 동안 웹사이트 접속이 제한되고 이메일 전송이 일시 중지됩니다. 모든 웹사이트 운영은 일요일 아침에 재개될 것입니다. 서버가 다시 가동되면 웹사이트의 업데이트된 기능들을 확인해 보시기 바랍니다. 여기에는 새로운 스케줄러와 더 사용자 친화적인 검색 도구가 포함됩니다.\n\n여러분의 양해에 감사드립니다. 문의 사항이 있으시면 저에게 연락해 주십시오.",
                "questions": [
                    {
                        "id": "p6-t5-q135",
                        "questionNo": 135,
                        "text": "Select the best answer.",
                        "options": { "A": "is", "B": "was", "C": "will be", "D": "had been" },
                        "correctAnswer": "C",
                        "explanation": "미래의 점검 계획을 설명하고 있으므로 미래 시제인 (C) will be가 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "p6-t5-q136",
                        "questionNo": 136,
                        "text": "Select the best answer.",
                        "options": { "A": "During", "B": "Despite", "C": "Following", "D": "Prior to" },
                        "correctAnswer": "A",
                        "explanation": "서버가 중단되는 기간 '동안'이라는 의미이므로 전치사 (A) During이 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "p6-t5-q137",
                        "questionNo": 137,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "The work will be done during business hours.",
                            "B": "A team of seven programmers will be hard at work.",
                            "C": "All Web site operations will resume on Sunday morning.",
                            "D": "Feel free to check your e-mail as needed."
                        },
                        "correctAnswer": "C",
                        "explanation": "점검 종료 후 웹사이트 재개 시점을 안내하는 (C)가 가장 적절합니다.",
                        "classification": "p6s"
                    },
                    {
                        "id": "p6-t5-q138",
                        "questionNo": 138,
                        "text": "Select the best answer.",
                        "options": { "A": "safety", "B": "updated", "C": "portable", "D": "temporary" },
                        "correctAnswer": "B",
                        "explanation": "점검 후 새롭게 추가된 기능을 설명하므로 '업데이트된'이라는 뜻의 (B) updated가 정답입니다.",
                        "classification": "p6v"
                    }
                ]
            },
            {
                "setId": "p6-t5-p3",
                "contextType": "P3",
                "docType": "article",
                "guidance": "Questions 139-142 refer to the following article.",
                "content": "Small Business Costs: An Overview for Beginners\n\nThere are two main kinds of costs. Variable costs are one kind; they include staff wages or the cost of supplies. ___139___ costs are considered fixed. These include such things as rent payments and property taxes.\n\nA third kind of cost is called an opportunity cost. You incur an opportunity cost whenever you make a decision to do one specific thing ___140___ choosing some alternative option. This cost refers to the lost opportunities you could have benefited from had you made a different choice. Careful consideration of potential opportunity costs is important. Ideally this should ___141___ decision making.\n\n___142___. You should consult a licensed accountant for a more complete understanding.",
                "translation": "소규모 비즈니스 비용: 초보자를 위한 개요\n\n비용에는 크게 두 가지 종류가 있습니다. 하나는 변동 비용으로, 직원 임금이나 소모품 비용이 포함됩니다. 다른 비용들은 고정된 것으로 간주됩니다. 여기에는 임대료나 재산세와 같은 것들이 포함됩니다.\n\n세 번째 종류의 비용은 기회 비용이라고 불립니다. 귀하는 대안을 선택하는 대신 특정한 일을 하기로 결정할 때마다 기회 비용을 발생시키게 됩니다. 이 비용은 다른 선택을 했을 경우 얻을 수 있었던 손실된 기회들을 의미합니다. 잠재적 기회 비용을 신중하게 고려하는 것이 중요합니다. 이상적으로는 이것이 의사 결정에 영향을 미쳐야 합니다. 또한 다른 형태의 사업 비용들도 존재합니다. 더 완전한 이해를 위해 공인 회계사와 상담하시기 바랍니다.",
                "questions": [
                    {
                        "id": "p6-t5-q139",
                        "questionNo": 139,
                        "text": "Select the best answer.",
                        "options": { "A": "Any", "B": "Both", "C": "Other", "D": "Those" },
                        "correctAnswer": "C",
                        "explanation": "변동 비용 외에 '다른' 비용(고정 비용)을 언급하므로 (C) Other가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "p6-t5-q140",
                        "questionNo": 140,
                        "text": "Select the best answer.",
                        "options": { "A": "except for", "B": "just as", "C": "rather than", "D": "only if" },
                        "correctAnswer": "C",
                        "explanation": "대안을 선택하는 것 '대신에'라는 의미이므로 (C) rather than이 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "p6-t5-q141",
                        "questionNo": 141,
                        "text": "Select the best answer.",
                        "options": { "A": "eliminate", "B": "influence", "C": "replace", "D": "automate" },
                        "correctAnswer": "B",
                        "explanation": "기회 비용 고려가 의사 결정에 '영향을 주어야 한다'는 의미이므로 (B) influence가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "p6-t5-q142",
                        "questionNo": 142,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "The number of employees is continuing to fluctuate.",
                            "B": "A sales manager controls employee commissions.",
                            "C": "The business used to have a larger inventory.",
                            "D": "There are other types of business costs as well."
                        },
                        "correctAnswer": "D",
                        "explanation": "앞서 언급된 세 가지 비용 외에 다른 비용들도 있음을 시사하는 (D)가 가장 적절합니다.",
                        "classification": "p6s"
                    }
                ]
            },
            {
                "setId": "p6-t5-p4",
                "contextType": "P3",
                "docType": "article",
                "guidance": "Questions 143-146 refer to the following article.",
                "content": "Morlon Home Goods Set to Open\n\nTISDALE (2 April)—Morlon Home Goods will open this Friday in a 130 square meter space on Waverly Road that was formerly ___143___ by Binkley's Market. The store features home décor items, such as lamps, wall art, and small furniture from around the globe, all at affordable prices. \"Morlon has a great variety of attractive items for the modern home. Our inventory changes ___144___. Patrons like to stop in often to see what is new,\" said Naoko Sasaki, the chain's marketing director. This is the first Morlon in the local area. ___145___. A grand opening ___146___ featuring free food, giveaways, and discount coupons will be held on Saturday, 13 April from 10:00 A.M. to 6:00 P.M.",
                "translation": "Morlon Home Goods 개장 예정\n\nTISDALE (4월 2일)—Morlon Home Goods가 이번 주 금요일 Waverly Road에 있는 130제곱미터 규모의 공간에 문을 엽니다. 이곳은 예전에 Binkley's Market이 차지하고 있던 곳입니다. 이 매장은 전 세계의 램프, 벽면 장식품, 소형 가구와 같은 홈 데코 아이템을 저렴한 가격에 선보입니다. \"Morlon은 현대적인 가정을 위한 매우 다양하고 매력적인 아이템을 갖추고 있습니다. 저희 재고는 자주 바뀝니다. 고객님들은 어떤 신상품이 있는지 보기 위해 자주 들르시는 것을 좋아합니다\"라고 체인의 마케팅 이사인 Naoko Sasaki가 전했습니다. 이곳은 이 지역의 첫 번째 Morlon 매장입니다. 이 회사는 전국에 14개의 다른 매장을 보유하고 있습니다. 4월 13일 토요일 오전 10시부터 오후 6시까지 무료 음식, 경품 시정, 할인 쿠폰을 제공하는 개업 축하 행사가 열릴 예정입니다.",
                "questions": [
                    {
                        "id": "p6-t5-q143",
                        "questionNo": 143,
                        "text": "Select the best answer.",
                        "options": { "A": "occupation", "B": "occupied", "C": "occupy", "D": "occupying" },
                        "correctAnswer": "B",
                        "explanation": "과거에 Binkley's Market에 의해 '점유되었던' 공간임을 뜻하므로 수동태 (B) occupied가 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "p6-t5-q144",
                        "questionNo": 144,
                        "text": "Select the best answer.",
                        "options": { "A": "elsewhere", "B": "afterward", "C": "properly", "D": "frequently" },
                        "correctAnswer": "D",
                        "explanation": "고객들이 자주 들른다는 뒷문장과 어울려 재고가 '자주' 바뀐다는 뜻의 (D) frequently가 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "p6-t5-q145",
                        "questionNo": 145,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "The company has fourteen other stores around the country.",
                            "B": "Profits increased 25 percent since last quarter.",
                            "C": "Morlon's biggest competitor is Country Home.",
                            "D": "Binkley's Market went out of business earlier this year."
                        },
                        "correctAnswer": "A",
                        "explanation": "신규 매장 소개와 더불어 회사의 규모를 설명하는 (A)가 가장 적절합니다.",
                        "classification": "p6s"
                    },
                    {
                        "id": "p6-t5-q146",
                        "questionNo": 146,
                        "text": "Select the best answer.",
                        "options": { "A": "celebrates", "B": "celebrating", "C": "celebrate", "D": "celebration" },
                        "correctAnswer": "D",
                        "explanation": "A grand opening 뒤에 와서 복합명사를 구성하는 명사 (D) celebration(기념 행사)이 정답입니다.",
                        "classification": "p6g"
                    }
                ]
            }
        ]
    };
