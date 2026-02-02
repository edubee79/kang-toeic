import { Part6TestSet } from './types';

export const test2Data: Part6TestSet = {
    "testId": 2,
    "title": "Test 2",
    "passages": [
        {
            "setId": "p6-t2-p1",
            "contextType": "P2",
            "docType": "memo",
            "guidance": "Questions 131-134 refer to the following memo.",
            "content": "To: All staff\nFrom: Bernard Villalobos, Vice President of Product Development\nDate: August 27\nSubject: Alzeret game (Product #DS8192)\n\nDue to the results from our trial customer testing, we have decided to postpone the launch of the Alzeret video game. Customer surveys indicated that the game was less ___131___ than we anticipated. Over the next few months, the game development team will introduce several ___132___ to make the product more attractive. ___133___. If the changes are successful, we hope to launch the game by next January ___134___ February.",
            "translation": "수신: 전 직원\n발신: Bernard Villalobos, 제품 개발 부사장\n날짜: 8월 27일\n제목: Alzeret 게임 (제품 번호 #DS8192)\n\n고객 시범 테스트 결과에 따라, 당사는 Alzeret 비디오 게임 출시를 연기하기로 결정했습니다. 고객 설문 조사 결과, 게임이 예상보다 덜 매력적인 것으로 나타났습니다. 향후 몇 달 동안 게임 개발팀은 제품을 더욱 매력적으로 만들기 위해 몇 가지 수정을 시도할 것입니다. 그 시점에 추가 테스트가 진행될 예정입니다. 변경 사항이 성공적이라면, 내년 1월 또는 2월까지 게임을 출시할 수 있기를 희망합니다.",
            "questions": [
                {
                    "id": "p6-t2-q131",
                    "questionNo": 131,
                    "text": "Select the best answer.",
                    "options": { "A": "expensive", "B": "repetitive", "C": "appealing", "D": "surprising" },
                    "correctAnswer": "C",
                    "explanation": "게임 출시를 연기하게 된 부정적인 이유를 설명하고 있습니다. less와 어울려 '덜 매력적인'이라는 뜻을 만드는 (C) appealing이 정답입니다.",
                    "classification": "p6v"
                },
                {
                    "id": "p6-t2-q132",
                    "questionNo": 132,
                    "text": "Select the best answer.",
                    "options": { "A": "modification", "B": "modifies", "C": "modifying", "D": "modifications" },
                    "correctAnswer": "D",
                    "explanation": "동사 will introduce의 목적어 자리이며, several의 수식을 받는 복수 명사 (D) modifications가 정답입니다.",
                    "classification": "p6g"
                },
                {
                    "id": "p6-t2-q133",
                    "questionNo": 133,
                    "text": "Select the best sentence to complete the text.",
                    "options": {
                        "A": "At that point, more tests will be conducted.",
                        "B": "The launch will be our biggest of the year.",
                        "C": "However, the surveys are not reliable.",
                        "D": "Team members must each sign the form."
                    },
                    "correctAnswer": "A",
                    "explanation": "앞에서 언급한 수정 작업(modifications) 이후에 이어질 절차인 추가 테스트를 언급한 (A)가 가장 적절합니다.",
                    "classification": "p6s"
                },
                {
                    "id": "p6-t2-q134",
                    "questionNo": 134,
                    "text": "Select the best answer.",
                    "options": { "A": "since", "B": "or", "C": "if", "D": "later" },
                    "correctAnswer": "B",
                    "explanation": "1월 또는 2월이라는 선택지를 나열하고 있으므로 등위접속사 (B) or가 정답입니다.",
                    "classification": "p6g"
                }
            ]
        },
        {
            "setId": "p6-t2-p2",
            "contextType": "P1",
            "docType": "email",
            "guidance": "Questions 135-138 refer to the following e-mail.",
            "content": "To: Eva Linn, Lunchtalk Industries\nFrom: Technical Services\nDate: January 15\nSubject: Technical query\n\nDear Ms. Linn,\n\nThank you for contacting our technical department ___135___ your query. ___136___, our call got disconnected when we were trying to reboot your system from our remote location. ___137___. Therefore, please call us at your earliest convenience and refer to conversation ID #TECH12-2020A to complete the system repair. We have prioritized your inquiry and look forward to helping you ___138___ your computer to its full capabilities.\n\nSincerely,\n\nArthur Feldt\nTechnical Service Facilitator",
            "translation": "Eva Linn 씨께,\n\n귀하의 문의 사항과 관련하여 저희 기술 부서에 연락해 주셔서 감사합니다. 아시다시피, 원격으로 시스템을 재부팅하려던 중에 전화가 끊어졌습니다. 아쉽게도 저희에게는 귀하에게 연락드릴 수 있는 전화번호가 없습니다. 따라서 가급적 빨리 저희에게 다시 전화해 주시고, 시스템 복구를 완료하기 위해 상담 ID #TECH12-2020A를 말씀해 주시기 바랍니다. 귀하의 문의를 우선적으로 처리하고 있으며, 귀하의 컴퓨터 성능이 완전히 회복될 수 있도록 돕기를 기대합니다.",
            "questions": [
                {
                    "id": "p6-t2-q135",
                    "questionNo": 135,
                    "text": "Select the best answer.",
                    "options": { "A": "until", "B": "besides", "C": "into", "D": "with" },
                    "correctAnswer": "D",
                    "explanation": "문의 사항(query)을 '가지고' 연락했다는 의미가 적절하므로 전치사 (D) with가 정답입니다.",
                    "classification": "p6g"
                },
                {
                    "id": "p6-t2-q136",
                    "questionNo": 136,
                    "text": "Select the best answer.",
                    "options": { "A": "In other words", "B": "For this reason", "C": "For example", "D": "As you know" },
                    "correctAnswer": "D",
                    "explanation": "화자와 청자가 모두 알고 있는 상황(전화가 끊긴 상황)을 언급하고 있으므로 '아시다시피'라는 뜻의 (D) As you know가 적절합니다.",
                    "classification": "p6c"
                },
                {
                    "id": "p6-t2-q137",
                    "questionNo": 137,
                    "text": "Select the best sentence to complete the text.",
                    "options": {
                        "A": "We invite you to visit one of our computer repair centers in your area.",
                        "B": "Unfortunately, we do not have a phone number at which we can reach you.",
                        "C": "Thank you again for being one of our priority customers.",
                        "D": "Please submit your check for the service fee promptly."
                    },
                    "correctAnswer": "B",
                    "explanation": "뒤에서 고객에게 전화를 달라고 요청하는 이유가 되는 문장입니다. 연락처가 없어서 전화를 할 수 없다는 (B)가 가장 적절합니다.",
                    "classification": "p6s"
                },
                {
                    "id": "p6-t2-q138",
                    "questionNo": 138,
                    "text": "Select the best answer.",
                    "options": { "A": "restore", "B": "restoring", "C": "restored", "D": "restoration" },
                    "correctAnswer": "A",
                    "explanation": "help + 목적어 + 목적격 보어(동사원형/to부정사) 구조입니다. 따라서 동사원형 (A) restore가 정답입니다.",
                    "classification": "p6g"
                }
            ]
        },
        {
            "setId": "p6-t2-p3",
            "contextType": "P4",
            "docType": "web page",
            "guidance": "Questions 139-142 refer to the following Web page.",
            "content": "For a limited time, the Uppercut Clothing Hanger Company is selling its highest quality hangers at huge discounts on wholesale orders. This special ___139___ is perfect for hotels, retailers, or anywhere hangers are used extensively. ___140___ of lacquered walnut wood, these hangers are not only durable, but also safe for the environment. ___141___ are strong enough to hold up to ten pounds. To order, visit www.uppercuthangerco.ca. Note that all orders require a 20 percent deposit. ___142___, Uppercut will cover all shipping and insurance costs.",
            "translation": "한정된 기간 동안, Uppercut 옷걸이 회사는 도매 주문에 대해 최고 품질의 옷걸이를 파격적인 할인가로 판매하고 있습니다. 이 특별한 행사는 호텔, 소매점 또는 옷걸이를 많이 사용하는 곳 어디에나 완벽합니다. 래커 칠을 한 호두나무로 제작된 이 옷걸이들은 내구성이 뛰어날 뿐만 아니라 환경에도 안전합니다. 이것들은 최대 10파운드까지 견딜 수 있을 만큼 튼튼합니다. 주문하시려면 www.uppercuthangerco.ca를 방문하십시오. 모든 주문에는 20%의 보증금이 필요합니다. 잔금은 배송품을 받을 때 지불하시면 되며, Uppercut에서 모든 배송비와 보험료를 부담합니다.",
            "questions": [
                {
                    "id": "p6-t2-q139",
                    "questionNo": 139,
                    "text": "Select the best answer.",
                    "options": { "A": "clothing", "B": "offer", "C": "decoration", "D": "performance" },
                    "correctAnswer": "B",
                    "explanation": "할인 판매 행사를 지칭하는 명사 (B) offer가 정답입니다.",
                    "classification": "p6v"
                },
                {
                    "id": "p6-t2-q140",
                    "questionNo": 140,
                    "text": "Select the best answer.",
                    "options": { "A": "Made", "B": "Making", "C": "To make", "D": "They made" },
                    "correctAnswer": "A",
                    "explanation": "옷걸이가 나무로 '만들어진' 것이므로 수동 의미의 과거분사 (A) Made가 정답입니다.",
                    "classification": "p6g"
                },
                {
                    "id": "p6-t2-q141",
                    "questionNo": 141,
                    "text": "Select the best answer.",
                    "options": { "A": "Both", "B": "They", "C": "Fewer", "D": "Theirs" },
                    "correctAnswer": "B",
                    "explanation": "앞서 언급된 옷걸이들을 대신하는 주격 대명사 (B) They가 정답입니다.",
                    "classification": "p6g"
                },
                {
                    "id": "p6-t2-q142",
                    "questionNo": 142,
                    "text": "Select the best sentence to complete the text.",
                    "options": {
                        "A": "Our products make great gifts.",
                        "B": "While sturdy, wooden hangers are also heavy.",
                        "C": "Quality hangers are a great investment.",
                        "D": "The balance is due when the shipment is received."
                    },
                    "correctAnswer": "D",
                    "explanation": "보증금(deposit)과 연관되어 잔금(balance) 지불 시점을 안내하는 (D)가 정답입니다.",
                    "classification": "p6s"
                }
            ]
        },
        {
            "setId": "p6-t2-p4",
            "contextType": "P1",
            "docType": "email",
            "guidance": "Questions 143-146 refer to the following e-mail.",
            "content": "From: mcrane@doodlemail.com\nTo: jkumar@baxterartsupplies.com\nDate: October 14\nSubject: Application\nAttachment: Résumé\n\nDear Ms. Kumar,\n\nI am writing in response to the advertisement posted in the window of Baxter Art Supplies. As a frequent visitor to your ___143___, I have found it an invaluable source of inspiration over the years. I would be ___144___ to display my artwork. I would also enjoy running workshops to help inspire your customers.\n\nI believe I would be well suited for this role because I am both enthusiastic and friendly. ___145___, I have led successful workshops at various locations in the area. I have attached a copy of my résumé, which includes more details about these workshops. ___146___. I look forward to hearing from you after you have reviewed my application and work.\n\nKind regards,\n\nMelania Crane",
            "translation": "Kumar 씨께,\n\n미술 용품점 광고를 보고 연락드립니다. 귀하의 매장을 자주 방문하는 사람으로서, 저는 이곳이 수년간 귀중한 영감의 원천임을 깨달았습니다. 제 예술 작품을 전시할 수 있게 된다면 매우 기쁠 것입니다. 또한 귀하의 고객들에게 영감을 주기 위한 워크숍도 운영하고 싶습니다.\n\n저는 열정적이고 친절하기 때문에 이 역할에 잘 맞을 것이라고 믿습니다. 게다가 저는 이 지역 여러 곳에서 성공적으로 워크숍을 이끈 경험이 있습니다. 이러한 워크숍에 대한 자세한 내용이 포함된 제 이력서 사본을 첨부했습니다. 제 작품 견본은 온라인에서 확인하실 수 있습니다. 제 지원서와 작품을 검토하신 후 연락을 주시기를 기대합니다.",
            "questions": [
                {
                    "id": "p6-t2-q143",
                    "questionNo": 143,
                    "text": "Select the best answer.",
                    "options": { "A": "school", "B": "house", "C": "store", "D": "museum" },
                    "correctAnswer": "C",
                    "explanation": "미술 용품점을 가리키는 명사 (C) store가 정답입니다.",
                    "classification": "p6v"
                },
                {
                    "id": "p6-t2-q144",
                    "questionNo": 144,
                    "text": "Select the best answer.",
                    "options": { "A": "thrilling", "B": "thrill", "C": "thrilled", "D": "thrills" },
                    "correctAnswer": "C",
                    "explanation": "화자가 느끼는 감정을 표현하므로 과거분사 (C) thrilled가 정답입니다.",
                    "classification": "p6g"
                },
                {
                    "id": "p6-t2-q145",
                    "questionNo": 145,
                    "text": "Select the best answer.",
                    "options": { "A": "In addition", "B": "However", "C": "In general", "D": "Similarly" },
                    "correctAnswer": "A",
                    "explanation": "장점 외에 경력 사항을 추가하고 있으므로 첨가의 접속부사 (A) In addition이 정답입니다.",
                    "classification": "p6c"
                },
                {
                    "id": "p6-t2-q146",
                    "questionNo": 146,
                    "text": "Select the best sentence to complete the text.",
                    "options": {
                        "A": "I enjoyed the painting workshop last week.",
                        "B": "Samples of my art can be found at www.mcrane.com.",
                        "C": "I just started working with watercolors.",
                        "D": "For a price list, please contact me at 347-555-0101."
                    },
                    "correctAnswer": "B",
                    "explanation": "작품(work) 검토를 요청하는 뒤 문장과 연결되어 작품 견본을 볼 수 있는 곳을 안내하는 (B)가 정답입니다.",
                    "classification": "p6s"
                }
            ]
        }
    ]
};
