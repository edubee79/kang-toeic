import { Part7Test } from './types';

export const test5Data: Part7Test = {
    testId: 5,
    title: "Test 5",
    sets: [
        // Questions 147-148: Advertisement
        {
            id: "p7-t5-set1",
            questionRange: "147-148",
            passages: [
                {
                    id: "p7-t5-s1-p1",
                    contextType: "P4",
                    docType: "ADVERTISEMENT",
                    title: "Advertisement",
                    content: `Owl and Moon\n\nBuy one mattress, and choose one of our beautiful rugs for free!\n\nUse the following coupon code when you check out at owlandmoon.co.uk: ESSZRS4T.\n\nOur mattresses are shipped directly to your home and usually arrive within one week. Try out a mattress for 90 days, and if you are not happy with it, send it back for a full refund. We also offer low-interest financing for two years on all our furniture.`,
                    translation: `아울앤문(Owl and Moon)\n\n매트리스 하나를 구매하시고 멋진 러그 하나를 무료로 선택하세요!\n\nowlandmoon.co.uk에서 결제하실 때 다음 쿠폰 코드를 사용하세요: ESSZRS4T.\n\n우리 매트리스는 고객님 댁으로 바로 배송되며 보통 일주일 내에 도착합니다. 매트리스를 90일 동안 사용해 보고 만족스럽지 못하면 전액 환불을 위해 반송하세요. 또한 모든 가구에 대해 2년간 저금리 할부 금융 서비스를 제공합니다.`
                }
            ],
            questions: [
                {
                    id: "p7-t5-q147",
                    questionNo: 147,
                    text: "What types of products are being advertised?",
                    options: {
                        "A": "Camping gear",
                        "B": "Household items",
                        "C": "Office equipment",
                        "D": "Automobile accessories"
                    },
                    correctAnswer: "B",
                    classification: "P7_DETAIL",
                    translation: "광고되고 있는 제품의 종류는?",
                    explanation: `첫 문장에서 매트리스 하나를 구매하고 멋진 러그 하나를 무료로 선택하라고 했으며, 마지막에 '모든 가구(all our furniture)'를 언급했습니다. 매트리스와 러그는 가정용품(Household items)에 속하므로 (B)가 정답입니다.`
                },
                {
                    id: "p7-t5-q148",
                    questionNo: 148,
                    text: "What is indicated about the company?",
                    options: {
                        "A": "It has been in business for two years.",
                        "B": "It accepts product returns.",
                        "C": "It has same-day delivery.",
                        "D": "It has a yearly sale."
                    },
                    correctAnswer: "B",
                    classification: "P7_INFERENCE",
                    translation: "회사에 대해 명시된 것은?",
                    explanation: `지문에 '매트리스를 90일 동안 사용해 보고 만족스럽지 못하면 전액 환불을 위해 반송하라(Try out a mattress for 90 days... send it back for a full refund)'고 명시되어 있으므로 (B) 제품 반품을 허용한다는 사실을 알 수 있습니다.`
                }
            ]
        },
        // Questions 149-150: E-mail
        {
            id: "p7-t5-set2",
            questionRange: "149-150",
            passages: [
                {
                    id: "p7-t5-s2-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    title: "Email",
                    content: `To: Demarco Hines <d.hines@worldmail.com>\nFrom: Soon Yi Park <customerservice@thebestbags.co.kr>\nSubject: Item F208 (canvas overnight bag)\nDate: 19 June\n\nDear Mr. Hines,\n\nThe Best Bags canvas overnight bag you ordered is not currently available in the colour you requested. There are several options available to you.\n\n1. Cancel your order, and we will gladly refund your money in full.\n\n2. Select a different colour. That item is currently available in light blue, dark green, and dark gray.\n\n3. Choose an item of equal value from our Web site or catalogue.\n\n4. Wait until the item you ordered is back in stock in light gray. Allow three to five weeks.\n\nPlease let us know which option you prefer. We apologize for any inconvenience.\n\nThank you,\n\nSoon Yi Park, Customer Service Agent`,
                    translation: `수신: 데마코 하인즈 (d.hines@worldmail.com)\n발신: 박순이 (customerservice@thebestbags.co.kr)\n날짜: 6월 19일\n제목: 품목 F208 (캔버스 여행 가방)\n\n하인즈 고객님,\n\n주문하신 베스트 백스 캔버스 여행 가방이 현재 요청하신 색상으로 구입이 불가능합니다. 고객님께 제공되는 옵션이 몇 가지 있습니다.\n\n1. 주문을 취소하시면 기꺼이 전액 환불해 드리겠습니다.\n\n2. 다른 색상을 선택해 주세요. 해당 품목은 현재 하늘색, 진녹색, 진회색으로 구매 가능합니다.\n\n3. 저희 웹사이트나 카탈로그에서 동일한 가격의 제품을 선택해 주십시오.\n\n4. 주문하신 연회색 품목이 재입고될 때까지 기다려 주십시오. 3주에서 5주 정도 소요됩니다.\n\n어떤 옵션이 마음에 드는지 알려 주십시오. 불편을 드려 죄송합니다.\n\n감사합니다.\n박순이, 고객 서비스 담당자`
                }
            ],
            questions: [
                {
                    id: "p7-t5-q149",
                    questionNo: 149,
                    text: "What is the purpose of the e-mail?",
                    options: {
                        "A": "To confirm shipment of an order",
                        "B": "To acknowledge the return of an order",
                        "C": "To provide alternatives for an order",
                        "D": "To thank a customer for placing an order"
                    },
                    correctAnswer: "C",
                    classification: "P7_PURPOSE",
                    translation: "이메일의 목적은?",
                    explanation: `고객이 주문한 가방이 요청한 색상으로 구입이 불가능하다고 알리면서, 주문 취소, 다른 색상 선택 등 몇 가지 대안(options)을 제시하고 있으므로 (C)가 정답입니다.`
                },
                {
                    id: "p7-t5-q150",
                    questionNo: 150,
                    text: "What color bag is currently NOT available?",
                    options: {
                        "A": "The light blue one",
                        "B": "The dark green one",
                        "C": "The dark gray one",
                        "D": "The light gray one"
                    },
                    correctAnswer: "D",
                    classification: "P7_DETAIL",
                    translation: "현재 구매가 불가능한 가방 색상은?",
                    explanation: `옵션 4번에서 '주문하신 연회색(light gray) 품목이 재입고될 때까지 기다려 달라'고 한 것으로 보아, 현재 재고가 없어 구입이 불가능한 색상은 연회색임을 알 수 있습니다.`
                }
            ]
        },
        // Questions 151-152: Text Message Chain
        {
            id: "p7-t5-set3",
            questionRange: "151-152",
            passages: [
                {
                    id: "p7-t5-s3-p1",
                    contextType: "P7",
                    docType: "CHAT_MESSAGE",
                    title: "Text Message Chain",
                    content: `Christie Moroff [9:47 A.M.]\nGood morning, Ren. I just stopped by your office.\n\nRen Nomura [9:48 A.M.]\nThen you already know that I am not there today.\n\nChristie Moroff [9:48 A.M.]\nYes, your new office mate—I can't remember her name—told me that you just started working remotely on Tuesdays. I was looking for some empty binders.\n\nRen Nomura [9:49 A.M.]\nThat's Cheryl. I thought you had already met her. Are there any binders in the supply closet?\n\nChristie Moroff [9:50 A.M.]\nNo, I just looked. Frank has ordered some more, but they won't be in until next week. I need two or three of them now.\n\nRen Nomura [9:51 A.M.]\nCheck with Cheryl. She is really helpful.\n\nChristie Moroff [9:52 A.M.]\nOK. I will.`,
                    translation: `크리스티 모로프 [오전 9:47]\n좋은 아침입니다, 렌. 방금 당신 사무실에 들렀어요.\n\n렌 노무라 [오전 9:48]\n그럼 오늘 제가 사무실에 없는 것을 벌써 알고 계시겠네요.\n\n크리스티 모로프 [오전 9:48]\n네, 당신의 새로운 사무실 동료가—이름은 기억나지 않지만—당신이 방금 화요일마다 원격 근무를 시작했다고 알려 주었어요. 저는 빈 바인더를 몇 개 찾고 있었어요.\n\n렌 노무라 [오전 9:49]\n그녀는 셰릴이에요. 이미 만난 줄 알았어요. 물품 보관함에 바인더가 있나요?\n\n크리스티 모로프 [오전 9:50]\n아니요, 방금 확인했어요. 프랭크가 좀 더 주문했는데 다음 주나 되어서야 올 거예요. 저는 지금 두세 개 정도 필요해요.\n\n렌 노무라 [오전 9:51]\n셰릴에게 문의해 보세요. 그녀는 정말 도움이 될 거예요.\n\n크리스티 모로프 [오전 9:52]\n알겠습니다. 그럴게요.`
                }
            ],
            questions: [
                {
                    id: "p7-t5-q151",
                    questionNo: 151,
                    text: "What is suggested about Mr. Nomura?",
                    options: {
                        "A": "He does not usually work on Tuesdays.",
                        "B": "He shares an office with Ms. Moroff.",
                        "C": "He recently purchased office supplies.",
                        "D": "He works off-site one day a week."
                    },
                    correctAnswer: "D",
                    classification: "P7_INFERENCE",
                    translation: "노무라 씨에 대해 암시된 것은?",
                    explanation: `모로프 씨가 노무라 씨에게 '화요일마다 원격 근무를 시작했다고 알려 주었다(told me that you just started working remotely on Tuesdays)'고 했으므로 노무라 씨는 화요일마다 사무실 밖에서 근무한다는 것을 알 수 있습니다. 따라서 (D)가 정답입니다.`
                },
                {
                    id: "p7-t5-q152",
                    questionNo: 152,
                    text: "At 9:51 A.M., what does Mr. Nomura most likely mean when he writes, \"Check with Cheryl\"?",
                    options: {
                        "A": "Cheryl may have extra binders.",
                        "B": "Cheryl must approve a purchase.",
                        "C": "Cheryl will be able to locate Frank.",
                        "D": "Cheryl knows when a delivery will arrive."
                    },
                    correctAnswer: "A",
                    classification: "P7_INFERENCE",
                    translation: "오전 9시 51분에 노무라 씨가 '셰릴에게 문의해 보세요'라고 한 의미는?",
                    explanation: `모로프 씨가 빈 바인더를 찾고 있는데 보관함에 재고가 없다고 하자, 노무라 씨가 셰릴에게 문의하라고 권합니다. 이는 셰릴에게 바인더가 몇 개 있을 수 있으니 물어보라는 의도이므로 (A)가 정답입니다.`
                }
            ]
        },
        // Questions 153-154: Form
        {
            id: "p7-t5-set4",
            questionRange: "153-154",
            passages: [
                {
                    id: "p7-t5-s4-p1",
                    contextType: "P5",
                    docType: "FORM",
                    title: "Form",
                    content: `Cortica Bank\n\nPlease fill out the following form to open a new bank account.\n\nIs this your first account with Cortica Bank? __ Yes  X No\n\nExisting account number (if applicable): 190-37580\n\nNew account type: __ Chequing  X Savings  __ Investment\n\nName: Frances Wilkes\n\nMailing address: 17 Jones Street\n                 North Sydney NSW 2060\n\nPhone number: (02) 7010 8624\n\nE-mail address: fwilkes@myemail.com.au\n\nInitial deposit amount (minimum $500): $1,500\n\nWould you like to sign up for electronic communications? __ Yes  X No\n\nIf you select "Yes," we will contact you via voice mail, e-mail, or text.\nIf you select "No," you will receive monthly paper statements in the mail.\n\nPlease note that accounts take up to two business days to be established. Your funds will be available after this period. You will receive your debit card in the mail in up to five business days.`,
                    translation: `코르티카 은행\n\n은행 신규 계좌를 개설하시려면 다음 양식을 작성하십시오.\n\n코르티카 은행에 이번 계좌가 처음이십니까? __ 예  X 아니요\n\n기존 계좌번호(해당되는 경우): 190-37580\n\n신규 계좌 유형: __ 당좌 예금  X 보통 예금  __ 투자\n\n이름: 프랜시스 윌크스\n\n우편 주소: 존스 로 17\n           노스 시드니 NSW 2060\n\n전화번호: (02) 7010 8624\n\n이메일 주소: fwilkes@myemail.com.au\n\n초기 예치 금액(최소 500달러): 1,500달러\n\n전자 통신을 신청하시겠습니까? __ 예  X 아니요\n\n'예'를 선택하실 경우, 음성 메일, 이메일 또는 문자를 통해 연락드립니다.\n'아니요'를 선택하실 경우, 매월 종이 명세서를 우편으로 받으시게 됩니다.\n\n계좌는 개설되는 데 영업일 기준 최대 2일이 소요된다는 점을 유의해 주십시오. 이 기간 이후에 예금을 사용하실 수 있습니다. 영업일 기준 최대 5일 이내에 직불 카드를 우편으로 받으실 수 있습니다.`
                }
            ],
            questions: [
                {
                    id: "p7-t5-q153",
                    questionNo: 153,
                    text: "What is indicated about Ms. Wilkes?",
                    options: {
                        "A": "She has another account with Cortica Bank.",
                        "B": "She plans to open an investment account.",
                        "C": "She has lost a debit card.",
                        "D": "She placed an order for checks."
                    },
                    correctAnswer: "A",
                    classification: "P7_INFERENCE",
                    translation: "윌크스 씨에 대해 명시된 것은?",
                    explanation: `양식 첫 번째 항목에서 코르티카 은행에 이번 계좌가 처음인지(Is this your first account with Cortica Bank?) 묻는 문항에 아니요(No)에 체크했으므로 윌크스 씨는 코르티카 은행에 계좌를 이미 가지고 있는 고객임을 알 수 있습니다.`
                },
                {
                    id: "p7-t5-q154",
                    questionNo: 154,
                    text: "How will the bank most likely contact Ms. Wilkes?",
                    options: {
                        "A": "By e-mail",
                        "B": "By text message",
                        "C": "By telephone",
                        "D": "By letter"
                    },
                    correctAnswer: "D",
                    classification: "P7_INFERENCE",
                    translation: "은행은 윌크스 씨에게 어떻게 연락할 것 같은가?",
                    explanation: `양식 마지막 질문에서 전자 통신을 신청하겠는지 묻자 윌크스 씨가 아니요(No)에 체크했고, 그 아래에 '아니요를 선택할 경우 매월 종이 명세서를 우편으로 받게 된다(you will receive monthly paper statements in the mail)'고 했으므로 우편(By letter)으로 연락하게 됨을 알 수 있습니다.`
                }
            ]
        },
        // Questions 155-157: Job Advertisement
        {
            id: "p7-t5-set5",
            questionRange: "155-157",
            passages: [
                {
                    id: "p7-t5-s5-p1",
                    contextType: "P4",
                    docType: "ADVERTISEMENT",
                    title: "Job Advertisement",
                    content: `Construction Superintendent\nJones-Richmond Construction (JRC)\n\nFounded 25 years ago, JRC is a full-service general contractor serving clients throughout Winnipeg and the surrounding area.\n\nResponsibilities:\n• Report to senior project manager\n• Manage on-site construction activities\n• Ensure compliance with safety regulations\n• Negotiate purchases and contracts\n• Establish construction schedules\n\nQualifications:\n• Minimum five years of commercial construction experience\n• Willingness to travel to job sites daily (usually within a 50-kilometre radius)\n• Strong written communication skills\n\nTo apply, submit a résumé and cover letter through www.jrc.ca/apply.`,
                    translation: `건설 현장 감독관\n존스-리치먼드 건설(JRC)\n\n25년 전에 설립된 JRC는 위니펙과 주변 지역의 고객에게 서비스를 제공하는 종합 서비스 시공사입니다.\n\n업무:\n• 프로젝트 상급 관리자에게 보고\n• 현장 공사 상황 관리\n• 안전 규정 준수 보증\n• 구매 및 계약 협상\n• 공사 일정 수립\n\n자격:\n• 최소 5년 이상의 상업 건물 건설 경력\n• 작업 현장을 매일 다닐 의향(보통 반경 50km 이내)\n• 뛰어난 서면 소통 능력\n\n지원하려면 www.jrc.ca/apply를 통해 이력서와 자기소개서를 제출하십시오.`
                }
            ],
            questions: [
                {
                    id: "p7-t5-q155",
                    questionNo: 155,
                    text: "What is suggested about Jones-Richmond Construction?",
                    options: {
                        "A": "It is a new company.",
                        "B": "It has won industry awards for its work.",
                        "C": "It is based in Winnipeg.",
                        "D": "It specializes in home construction projects."
                    },
                    correctAnswer: "C",
                    classification: "P7_INFERENCE",
                    translation: "존스-리치먼드 건설에 대해 암시된 것은?",
                    explanation: `첫 문장에서 25년 전에 설립된 JRC는 위니펙과 주변 지역의 고객에게 서비스를 제공한다고 소개하고 있으므로 존스-리치먼드 건설은 위니펙 지역을 기반으로 하는 회사임을 알 수 있습니다. 따라서 (C)가 정답입니다.`
                },
                {
                    id: "p7-t5-q156",
                    questionNo: 156,
                    text: "What is NOT listed as a responsibility of the construction superintendent?",
                    options: {
                        "A": "Setting schedules",
                        "B": "Training inexperienced workers",
                        "C": "Participating in contract discussions",
                        "D": "Ensuring worker safety"
                    },
                    correctAnswer: "B",
                    classification: "P7_NOT_MENTIONED",
                    translation: "건설 현장 감독관의 업무로 열거되지 않은 것은?",
                    explanation: `업무 내용 중 일정 수립(A), 안전 규정 준수 보증(D), 구매 및 계약 협상(C)은 언급되어 있으나, 경험이 부족한 작업자의 교육(B)에 대한 언급은 없으므로 (B)가 정답입니다.`
                },
                {
                    id: "p7-t5-q157",
                    questionNo: 157,
                    text: "According to the advertisement, what must a successful job applicant have?",
                    options: {
                        "A": "A technical certification",
                        "B": "A reference letter from a former employer",
                        "C": "Senior management experience",
                        "D": "The ability to visit construction sites each workday"
                    },
                    correctAnswer: "D",
                    classification: "P7_DETAIL",
                    translation: "광고에 따르면 성공적인 지원자가 가져야 하는 것은?",
                    explanation: `자격 요건 중 하나로 '작업 현장을 매일 다닐 의향(Willingness to travel to job sites daily)'을 명시했으므로 매일 건설 현장을 방문할 수 있어야 함을 알 수 있습니다.`
                }
            ]
        },
        // Questions 158-160: E-mail
        {
            id: "p7-t5-set6",
            questionRange: "158-160",
            passages: [
                {
                    id: "p7-t5-s6-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    title: "Email",
                    content: `To: All Sledgehammer Gym Staff\nFrom: Lucas Sledge\nDate: September 15\nSubject: Payroll changes\nAttachment: Form\n\nDear Staff,\n\nThanks to your dedicated work, word of our little gym has spread. Over the past twelve months, enrollment has significantly increased and so has our teaching staff. Although this growth is wonderful, having to process the payroll by myself has become rather burdensome. Therefore, I have contracted Trumball and Company to provide direct deposit of your wages into your bank accounts. — [1] —. Consequently, you no longer need to deposit your paycheck yourself. Also, you will now be able to get your pay stubs and tax information online. — [2] —.\n\nTo allow for these changes, I am asking everyone to provide me with the necessary banking details. Please complete the attached form and bring it to the office with a voided check no later than September 25. — [3] —. The new process will take effect in October. — [4] —. Please let me know if you have any questions.\n\nTake care,\n\nLucas`,
                    translation: `수신: 슬레지해머 체육관 전 직원\n발신: 루카스 슬레지\n날짜: 9월 15일\n제목: 급여 지급 변경\n첨부파일: 공식양식\n\n직원들께,\n\n여러분들의 헌신적인 근무 덕분에 우리 작은 체육관에 대한 소문이 퍼졌습니다. 지난 12개월 동안 등록 인원이 상당히 증가했고 강사진도 마찬가지로 늘었습니다. 이러한 성장은 멋진 일이지만 저 혼자 급여를 처리해야 하는 것이 꽤 부담스러워졌습니다. 그래서 저는 트럼불 앤 컴퍼니와 계약하여 여러분의 은행 계좌로 급여를 바로 입금하기로 했습니다. — [1] —. 따라서 여러분은 더 이상 직접 급여 지불 수표를 입금할 필요가 없습니다. 또한 급여 명세서 및 세금 정보를 이제 온라인으로 받으실 수 있습니다. — [2] —.\n\n이러한 변경을 감안하여 여러분 모두 필요한 은행 정보를 저에게 제공해 줄 것을 요청합니다. 첨부된 양식을 작성하여 9월 25일까지 보이드 체크와 함께 사무실로 가져오세요. — [3] —. 새로운 절차는 10월에 시행될 것입니다. — [4] —. 문의사항이 있으면 알려 주세요.\n\n루카스`
                }
            ],
            questions: [
                {
                    id: "p7-t5-q158",
                    questionNo: 158,
                    text: "What is mentioned as a benefit of the new payment system?",
                    options: {
                        "A": "It will reduce Mr. Sledge's workload.",
                        "B": "It will include more staff involvement.",
                        "C": "It will simplify tax collection.",
                        "D": "It will result in fewer payment errors."
                    },
                    correctAnswer: "A",
                    classification: "P7_INFERENCE",
                    translation: "새로운 결제 시스템의 이점으로 언급된 것은?",
                    explanation: `첫 번째 단락에서 슬레지 씨가 성장에 따라 급여 처리 업무가 부담스러워졌다고 했고, 이를 위해 외부 업체와 계약하여 자동 입금 시스템을 도입했다고 했으므로 본인의 급여 처리 업무 업무 부하를 줄이기 위한 것임을 알 수 있습니다.`
                },
                {
                    id: "p7-t5-q159",
                    questionNo: 159,
                    text: "What does Mr. Sledge ask employees to do?",
                    options: {
                        "A": "Update their contact information",
                        "B": "Submit ideas on how to improve the gym",
                        "C": "Provide information about their bank account",
                        "D": "Sign up for a professional development class"
                    },
                    correctAnswer: "C",
                    classification: "P7_DETAIL",
                    translation: "슬레지 씨가 직원들에게 요청하는 것은?",
                    explanation: `두 번째 단락 첫 문장에서 슬레지 씨가 직원들 모두 필요한 은행 정보(banking details)를 본인에게 제공해 줄 것을 요청하고 있으므로 (C)가 정답입니다.`
                },
                {
                    id: "p7-t5-q160",
                    questionNo: 160,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"If I am not around, please see my assistant.\"",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "C",
                    classification: "P7_INSERTION",
                    translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"제가 자리에 없을 경우 저의 비서에게 전달하세요.\"",
                    explanation: `주어진 문장은 본인이 없을 때 서류 등을 전달할 대상을 안내하고 있습니다. [3] 앞에서 서류를 작성하여 사무실로 가져오라고 했으므로, 그 뒤에 본인이 없으면 비서에게 전달하라는 내용이 오는 것이 자연스럽습니다.`
                }
            ]
        },
        // Questions 161-163: Article
        {
            id: "p7-t5-set7",
            questionRange: "161-163",
            passages: [
                {
                    id: "p7-t5-s7-p1",
                    contextType: "P3",
                    docType: "ARTICLE",
                    title: "Article",
                    content: `SYDNEY (4 June)—Coffee will be the main attraction this weekend at the Aussie Coffee Fair hosted by Homewares, the country's top kitchen appliance manufacturer. The event will be held at the Harbour Expo Centre.\n\nThe two-day event will feature a variety of coffee-oriented presentations by coffee growers and roasters, food writers, makers of kitchen equipment, and chefs. Foods and beverages will be available to view, taste, and buy at booths throughout the centre.\n\nSessions will feature demonstrations on cooking with coffee and tips for brewing the best cup of coffee, as well as information on nonfood uses for coffee. In addition, culinary experts will be on hand to meet with coffee enthusiasts for discussions designed to help them create a true coffeehouse experience in their own homes.\n\nEntry to the Aussie Coffee Fair is free. However, registration is required as space is limited. For information and to register online, go to www.aussiecoffeefair.com.`,
                    translation: `시드니(6월 4일)—이번 주말 국내 최고의 주방용품 제조업체인 홈웨어가 주최하는 호주 커피 박람회에서 커피가 주요 관심사가 될 것입니다. 이 행사는 하버 엑스포 센터에서 열릴 예정입니다.\n\n이틀간의 행사는 커피 재배자와 로스터, 음식 전문 작가, 주방 장비 제조업체, 그리고 요리사가 커피를 중심으로 진행하는 다양한 프레젠테이션으로 구성될 것입니다. 센터 곳곳의 부스에서 음식과 음료가 제공되어 보고, 맛보고, 구입할 수 있을 예정입니다.\n\n세션에서는 커피를 이용한 요리 시연과 최고의 커피를 내리는 팁뿐만 아니라 커피의 비식품 부문 활용에 대한 정보도 포함될 것입니다. 또한 요리 전문가들이 커피 애호가들과 만나 가정에서 진정한 커피하우스 경험을 할 수 있도록 돕기 위한 토론을 벌일 예정입니다.\n\n호주 커피 박람회 입장은 무료입니다. 그러나 공간이 한정되어 있어 등록은 필수입니다. 정보 확인 및 온라인 등록을 원하시면 www.aussiecoffeefair.com을 방문하십시오.`
                }
            ],
            questions: [
                {
                    id: "p7-t5-q161",
                    questionNo: 161,
                    text: "The word \"top\" in paragraph 1, line 3, is closest in meaning to",
                    options: {
                        "A": "only",
                        "B": "leading",
                        "C": "highest",
                        "D": "modern"
                    },
                    correctAnswer: "B",
                    classification: "P7_VOCABULARY",
                    translation: "첫 번째 단락 3행의 'top'과 의미가 가장 가까운 단어는?",
                    explanation: `의미상 국내 '최고의' 주방용품 제조업체라는 뜻으로 쓰였으므로, '선두의, 일류의'를 뜻하는 (B) leading이 정답입니다.`
                },
                {
                    id: "p7-t5-q162",
                    questionNo: 162,
                    text: "Who will NOT be conducting informational presentations at the fair?",
                    options: {
                        "A": "Chefs",
                        "B": "Coffee growers",
                        "C": "Equipment makers",
                        "D": "Coffeehouse owners"
                    },
                    correctAnswer: "D",
                    classification: "P7_NEGATIVE",
                    translation: "박람회에서 정보 제공 프레젠테이션을 하지 않을 사람은?",
                    explanation: `두 번째 단락에서 이틀간의 행사는 커피 재배자와 로스터, 음식 전문 작가, 주방 장비 제조업체, 그리고 요리사가 진행하는 프레젠테이션으로 구성될 것이라고 했지만, 커피 하우스 주인에 대한 언급은 없으므로 (D)가 정답입니다.`
                },
                {
                    id: "p7-t5-q163",
                    questionNo: 163,
                    text: "What must people do to attend the fair?",
                    options: {
                        "A": "Sign up on a Web site",
                        "B": "Call to make a reservation",
                        "C": "Buy a ticket at the event location",
                        "D": "Present a Homewares product receipt"
                    },
                    correctAnswer: "A",
                    classification: "P7_DETAIL",
                    translation: "박람회에 참석하기 위해 사람들이 해야 할 일은?",
                    explanation: `마지막 단락의 두 번째 문장에서 '공간이 한정되어 있어 등록은 필수(registration is required as space is limited)'라고 했고, 온라인 등록을 안내하고 있으므로 (A)가 정답입니다.`
                }
            ]
        },
        // Questions 164-167: E-mail
        {
            id: "p7-t5-set8",
            questionRange: "164-167",
            passages: [
                {
                    id: "p7-t5-s8-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    title: "Email",
                    content: `From: melissa@grandgrainsbakery.com\nTo: elinaorero@webmail.com\nDate: October 28\nRe: Desserts\n\nDear Ms. Otero,\n\nI just followed up with our baker about your request to have an assortment of desserts instead of one large cake for the party you are hosting at your home on November 7. We suggest ordering from a new menu. The cost for three desserts is between $10 and $12 per person. Our most popular desserts are the mini cheesecakes, the berry tartlets, and the fudge brownies.\n\nI know you are using a separate caterer for the lunch, and they will help serve and clean up after the party. You also mentioned that you were considering whether to put the dessert table in your backyard or inside your house. Just keep in mind that if you order the cheesecakes, they should be left out for no more than two hours. If you give us very specific instructions about where to set up the desserts, our staff can leave them in the appropriate place without disturbing the party.\n\nOnce you make your dessert choices, simply let us know how many guests you expect, and we can take care of the rest.\n\nMelissa Luhya\nGrand Grains Bakery`,
                    translation: `발신: melissa@grandgrainsbakery.com\n수신: elinaorero@webmail.com\n날짜: 10월 28일\n제목: 디저트\n\n오테로 씨께,\n\n11월 7일 자택에서 주최하시는 파티를 위해 큰 케이크 한 개 대신 다양한 디저트 모둠으로 하고 싶다는 요청과 관련해 방금 저희 제빵사에게 확인을 마쳤습니다. 저희는 새로운 메뉴에서 주문하실 것을 제안합니다. 세 가지 디저트 비용은 1인당 10달러에서 12달러 사이입니다. 가장 인기 있는 디저트는 미니 치즈케이크, 베리 타틀릿, 그리고 퍼지 브라우니입니다.\n\n점심 식사를 위해 별도의 출장 요리 업체를 이용하시는 것으로 알고 있으며, 그들이 파티 후에 서빙과 청소를 도와줄 것입니다. 또한 디저트 테이블을 뒷마당에 둘지 집 안에 둘지 고민 중이라고 말씀하셨습니다. 치즈케이크를 주문하실 경우, 실온에 2시간 이상 두어서는 안 된다는 점을 유의해 주시기 바랍니다. 디저트를 어디에 설치할지에 대해 구체적인 지시를 주시면, 저희 직원이 파티를 방해하지 않고 적절한 장소에 디저트를 두고 갈 수 있습니다.\n\n디저트를 선택하고 나면 예상 손님이 몇 분인지 알려주세요. 나머지는 저희가 알아서 처리하겠습니다.\n\n멜리사 루히야\n그랜드 그레인스 베이커리`
                }
            ],
            questions: [
                {
                    id: "p7-t5-q164",
                    questionNo: 164,
                    text: "What is the purpose of the e-mail?",
                    options: {
                        "A": "To advertise some new pastries",
                        "B": "To present options for an event",
                        "C": "To recommend signing a caterer contract",
                        "D": "To request payment on an order"
                    },
                    correctAnswer: "B",
                    classification: "P7_PURPOSE",
                    translation: "이메일의 목적은?",
                    explanation: `첫 문장에서 11월 7일 파티를 위해 큰 케이크 대신 디저트 모둠을 원했다는 요청을 언급하며, 새로운 메뉴에서 1인당 3개씩 주문하는 대안과 인기 품목들을 제시하고 있으므로 (B)가 정답입니다.`
                },
                {
                    id: "p7-t5-q165",
                    questionNo: 165,
                    text: "What does Ms. Luhya indicate about the mini cheesecakes?",
                    options: {
                        "A": "They are the most expensive dessert.",
                        "B": "They are available in several flavors.",
                        "C": "They should not be unrefrigerated for a long time.",
                        "D": "They cannot be ordered in larger sizes."
                    },
                    correctAnswer: "C",
                    classification: "P7_INFERENCE",
                    translation: "루히야 씨가 미니 치즈케이크에 대해 언급한 것은?",
                    explanation: `두 번째 단락 세 번째 문장에서 '치즈케이크를 주문할 경우 2시간 이상 밖에 두어서는 안 된다(should not be left out for no more than two hours)'고 했으므로, 오랫동안 상온에 두면 안 된다는 뜻인 (C)가 정답입니다.`
                },
                {
                    id: "p7-t5-q166",
                    questionNo: 166,
                    text: "The word \"disturbing\" in paragraph 2, line 6, is closest in meaning to",
                    options: {
                        "A": "interrupting",
                        "B": "frightening",
                        "C": "rearranging",
                        "D": "moving"
                    },
                    correctAnswer: "A",
                    classification: "P7_VOCABULARY",
                    translation: "두 번째 단락 6행의 'disturbing'과 의미가 가장 가까운 단어는?",
                    explanation: `의미상 파티의 흐름을 '방해하지' 않고 적절한 곳에 둔다는 맥락이므로, '방해하다'라는 뜻의 (A) interrupting이 가장 적절합니다.`
                },
                {
                    id: "p7-t5-q167",
                    questionNo: 167,
                    text: "What information does Ms. Luhya request from Ms. Otero?",
                    options: {
                        "A": "A street address",
                        "B": "An approximate budget",
                        "C": "The name of a caterer",
                        "D": "The number of guests"
                    },
                    correctAnswer: "D",
                    classification: "P7_DETAIL",
                    translation: "루히야 씨가 오테로 씨에게 요청하는 정보는?",
                    explanation: `마지막 단락에서 '예상 손님이 몇 명인지 알려달라(let us know how many guests you expect)'고 했으므로 정답은 (D)입니다.`
                }
            ]
        },
        // Questions 168-171: E-mail
        {
            id: "p7-t5-set9",
            questionRange: "168-171",
            passages: [
                {
                    id: "p7-t5-s9-p1",
                    contextType: "P1",
                    docType: "EMAIL",
                    title: "Email",
                    content: `To: Cheryl Futrel <cfutrel@zephyrmail.com>\nFrom: Lydia Matsuda <service@candella.com>\nDate: June 9\nSubject: Home decorating\n\nDear Ms. Futrel,\n\nThank you for your interest in Candella Interior Design. — [1] —. We are proud to claim that we are the oldest and most successful online design consulting company in the region. We welcome you as a new client. — [2] —. From modest country homes to urban apartments, we do it all.\n\nWe understand from your original inquiry that you intend to sell your apartment soon and are primarily interested in how best to present it to prospective buyers. Here's how our online services work. After completing an online questionnaire, — [3] —. Next, you will be matched with an online professional interior designer who can help you with wall choices and paint colors, window treatments, and floor coverings. You will receive a room layout plan and a personalized list of ideas for furniture and accessories, with all products available for purchase online. — [4] —. As a special bonus, from now until July 1 our online retail partners have agreed to offer a 10 percent discount on products purchased through our links.\n\nFinally, you will be glad to learn that we charge not by the hour but by the room for our design ideas, with the average price being about $275 per room.\n\nWe look forward to hearing from you and working with you soon.\n\nSincerely,\n\nLydia Matsuda`,
                    translation: `푸트렐 씨께,\n\nCandella 인테리어 디자인에 관심을 주셔서 감사합니다. — [1] —. 저희는 이 지역에서 가장 오래되고 가장 성공한 온라인 디자인 컨설팅 회사라고 자북합니다. 저희는 귀하를 새로운 고객으로 환영합니다. — [2] —. 소박한 시골집에서 도심의 아파트까지 저희는 모든 것을 다룹니다.\n\n고객님이 처음 보낸 문의를 통해 고객님께서 곧 아파트를 매도할 계획이며 어떻게 하면 잠재 구매자에게 아파트를 최상으로 보여 줄 수 있을지에 관심이 있으시다는 것을 알고 있습니다. 저희의 디자인 서비스가 진행되는 방식은 다음과 같습니다. 온라인 설문기를 작성하신 후에는 — [3] —. 다음으로, 페인트 색상, 창문 처리, 바닥재에 대한 모든 선택을 도와드릴 온라인 전문 인테리어 디자이너를 소개해 드립니다. 방 배치 계획과 가구 및 장식품에 대한 맞춤형 아이디어 목록을 받으시게 되며, 전 제품은 온라인으로 구매 가능합니다. — [4] —. 특별 보너스로 지금부터 7월 1일까지 저희 온라인 소매 협력사들은 당사 링크를 통해 구매한 제품에 10퍼센트 할인을 제공하기로 합의했습니다.\n\n마지막으로 저희가 디자인 아이디어에 대해 시간당이 아닌 방에 따라서 청구한다는 점을 아시면 기뻐하실 것이며 평균 가격은 방당 약 275달러입니다.\n\n고객님의 답변을 기다리며 곧 함께 작업하게 되기를 고대합니다.\n\n리디아 마츠다`
                }
            ],
            questions: [
                {
                    id: "p7-t5-q168",
                    questionNo: 168,
                    text: "What is indicated about Candella Interior Design?",
                    options: {
                        "A": "Its main office is located in a major city.",
                        "B": "Its staff members visit clients' houses.",
                        "C": "It has been in business longer than its competitors have been.",
                        "D": "It is a family-run business."
                    },
                    correctAnswer: "C",
                    classification: "P7_INFERENCE",
                    translation: "Candella Interior Design에 대해 명시된 것은?",
                    explanation: `첫 단락의 두 번째 문장에서 자신들(칸델라 인테리어 디자인)은 이 지역에서 가장 오래되고 가장 성공한 온라인 디자인 컨설팅 회사라고 자부한다(We are proud to claim that we are the oldest and most successful online design consulting company in the region)고 했으므로 지역에서 누구보다 이 사업을 오래 한 업체라는 점을 알 수 있습니다.`
                },
                {
                    id: "p7-t5-q169",
                    questionNo: 169,
                    text: "Why does Ms. Futrel want to redecorate her apartment?",
                    options: {
                        "A": "To prepare for a visit from relatives",
                        "B": "To make it attractive to potential buyers",
                        "C": "To replace furniture that she dislikes",
                        "D": "To use it as an example for her clients"
                    },
                    correctAnswer: "B",
                    classification: "P7_DETAIL",
                    translation: "푸트렐 씨가 자신의 아파트를 다시 꾸미고 싶어 하는 이유는?",
                    explanation: `두 번째 단락의 첫 문장에서 마츠다 씨가 고객인 푸트렐 씨에게 곧 아파트를 매도할 계획이며 어떻게 하면 잠재 구매자에게 아파트를 최상으로 보여 줄 수 있을지에 관심이 많다는 것을 알고 있다(We understand from your original inquiry that you intend to sell your apartment ~ interested in how best to present it to prospective buyers)고 했으므로 (B)가 정답입니다.`
                },
                {
                    id: "p7-t5-q170",
                    questionNo: 170,
                    text: "What will happen on July 1?",
                    options: {
                        "A": "Room accessories will be distributed.",
                        "B": "Work will begin on a new project.",
                        "C": "The client list will be expanded.",
                        "D": "A special offer will end."
                    },
                    correctAnswer: "D",
                    classification: "P7_INFERENCE",
                    translation: "7월 1일에 일어날 일은?",
                    explanation: `두 번째 단락의 마지막 문장에서 특별 보너스로 지금부터 7월 1일까지 온라인 소매 협력사들이 당사 링크를 통해 구매한 제품에 10퍼센트 할인을 제공하기로 합의했다(As a special bonus, from now until July 1 our online retail partners have agreed to offer a 10 percent discount)고 했습니다. 따라서 7월 1일은 할인 혜택이 종료되는 날이므로 (D)가 정답입니다.`
                },
                {
                    id: "p7-t5-q171",
                    questionNo: 171,
                    text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"The answers will give us a sense of your taste and requirements.\"",
                    options: {
                        "A": "[1]",
                        "B": "[2]",
                        "C": "[3]",
                        "D": "[4]"
                    },
                    correctAnswer: "C",
                    classification: "P7_INSERTION",
                    translation: "다음 문장이 들어가기에 가장 적절한 위치는?\n\"답변을 통해 저희는 고객님의 취향과 요구사항을 파악하게 됩니다.\"",
                    explanation: `주어진 문장에서 '답변을 통해 고객의 취향과 요구사항을 파악한다'고 했으므로, 주어진 문장 앞에는 고객이 온라인 설문지 등을 통해 질문에 답변하는 내용(After completing an online questionnaire)이 와야 흐름상 자연스럽습니다.`
                }
            ]
        },
        // Questions 172-175: Text Message Chain
        {
            id: "p7-t5-set10",
            questionRange: "172-175",
            passages: [
                {
                    id: "p7-t5-s10-p1",
                    contextType: "P7",
                    docType: "CHAT_MESSAGE",
                    title: "Text Message Chain",
                    content: `Darius Wilkins [11:09 A.M.]\nHi, Ms. Clarke. This is Darius from Roto Bicycle. I promised to check with you before servicing your bicycle.\n\nLauren Clarke [11:14 A.M.]\nThanks. So, what do you think?\n\nDarius Wilkins [11:15 A.M.]\nIn addition to the regular maintenance service, I suggest a drivetrain cleaning and new brake mechanisms.\n\nLauren Clarke [11:16 A.M.]\nOK. What does that come to?\n\nDarius Wilkins [11:18 A.M.]\nOur comprehensive maintenance service, which includes the same gear and brake adjustments as a regular maintenance service, plus the drivetrain cleaning, is $140. Add $70 for two new brake mechanisms and pads and another $30 for labor charges. So it should come to around $240 altogether. Shall I move forward?\n\nLauren Clarke [11:21 A.M.]\nWow! That much?\n\nDarius Wilkins [11:22 A.M.]\nEspecially with that major bicycle race you have ahead of you.\n\nLauren Clarke [11:24 A.M.]\nI know. I guess we have to do it. Please let me know when it's ready.`,
                    translation: `다리우스 윌킨스 [오전 11:09] 안녕하세요, 클라크 씨. 로토 자전거의 다리우스입니다. 자전거를 정비하기 전에 고객님과 상의하기로 약속했어요.\n\n로렌 클라크 [오전 11:14] 감사합니다. 어떻게 생각하세요?\n\n다리우스 윌킨스 [오전 11:15] 정기 정비 서비스 외에 구동계 청소와 새 브레이크 장치를 제안 드립니다.\n\n로렌 클라크 [오전 11:16] 알겠습니다. 그러면 어떻게 되죠?\n\n다리우스 윌킨스 [오전 11:18] 정기 정비 서비스와 동일한 기어 및 브레이크 조정에 구동계 청소를 추가한 포괄 정비 서비스는 140달러입니다. 두 개의 새 브레이크 장치와 패드에 70달러, 그리고 인건비로 30달러가 추가됩니다. 그러면 총 240달러 정도가 될 것입니다. 진행할까요?\n\n로렌 클라크 [오전 11:21] 와! 그렇게 많이요?\n\n다리우스 윌킨스 [오전 11:22] 특히 고객님은 중요한 자전거 경주를 앞두고 있으니까요.\n\n로렌 클라크 [오전 11:24] 맞아요. 해야 할 것 같네요. 준비되면 알려 주세요.`
                }
            ],
            questions: [
                {
                    id: "p7-t5-q172",
                    questionNo: 172,
                    text: "Why does Mr. Wilkins contact Ms. Clarke?",
                    options: {
                        "A": "To recommend a new product",
                        "B": "To discuss a scheduling issue",
                        "C": "To confirm that bicycle parts have been ordered",
                        "D": "To ask for permission to perform some work"
                    },
                    correctAnswer: "D",
                    classification: "P7_PURPOSE",
                    translation: "윌킨스 씨가 클라크 씨에게 연락한 이유는?",
                    explanation: `오전 11시 9분에 윌킨스 씨가 정비 시작 전에 상의하기로 했다고 말하며 추가적인 작업을 제안하고 있으므로, 작업을 수행하기 위한 허락을 구하는 (D)가 정답입니다.`
                },
                {
                    id: "p7-t5-q173",
                    questionNo: 173,
                    text: "Which service costs about $30?",
                    options: {
                        "A": "New brake mechanisms",
                        "B": "Labor charges",
                        "C": "Regular maintenance service",
                        "D": "Drivetrain cleaning"
                    },
                    correctAnswer: "B",
                    classification: "P7_DETAIL",
                    translation: "비용이 약 30달러인 것은?",
                    explanation: `오전 11시 18분 메시지에서 인건비로 30달러가 추가된다(another $30 for labor charges)고 명시되어 있습니다.`
                },
                {
                    id: "p7-t5-q174",
                    questionNo: 174,
                    text: "At 11:21 A.M., what does Ms. Clarke most likely mean when she writes, \"That much?\"",
                    options: {
                        "A": "She is not aware of how busy Mr. Wilkins is.",
                        "B": "Her bicycle tire pressure was surprisingly low.",
                        "C": "The repair costs seem high.",
                        "D": "The bicycle repair will take longer than expected."
                    },
                    correctAnswer: "C",
                    classification: "P7_INFERENCE",
                    translation: "오전 11시 21분에 클라크 씨가 'That much?'라고 쓴 의도는?",
                    explanation: `총 수리비가 240달러라는 말을 들은 직후에 놀라움을 표현하고 있으므로, 수리비가 비싸다고 생각하는 (C)가 정답입니다.`
                },
                {
                    id: "p7-t5-q175",
                    questionNo: 175,
                    text: "What is suggested about Ms. Clarke?",
                    options: {
                        "A": "She prefers to pay in cash.",
                        "B": "She is planning to buy a new bicycle.",
                        "C": "She is dissatisfied with the quality of a repair.",
                        "D": "She will soon enter a bicycle race."
                    },
                    correctAnswer: "D",
                    classification: "P7_INFERENCE",
                    translation: "클라크 씨에 대해 암시된 것은?",
                    explanation: `윌킨스 씨가 중요한 자전거 경주를 앞두고 있다(major bicycle race you have ahead of you)고 언급한 점을 통해 알 수 있습니다.`
                }
            ]
        },
    ]
};
