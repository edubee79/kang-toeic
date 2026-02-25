import { Part6TestSet } from './types';

export const test8Data: Part6TestSet = {
        "testId": 8,
        "vol": 3,
        "title": "Test 8",
        "passages": [
            {
                "setId": "v3-p6-t8-p1",
                "contextType": "P8",
                "docType": "information",
                "guidance": "Questions 131-134 refer to the following information.",
                "content": "Welcome to Dining-Ticket, the online service that delivers high-quality, delicious meals to your ___131___. To start ___132___ Dining-Ticket, simply enter your location to view your local delivery options. Next, filter the information by your desired price range, cuisine type, or by the restaurant name. Then, track your order as it is transported by a Dining-Ticket delivery person. ___133___. To enjoy your favorite restaurant fare from the ___134___ of your own home, try Dining-Ticket today!",
                "translation": "고품질의 맛있는 식사를 집 앞까지 배달해 드리는 온라인 서비스 Dining-Ticket에 오신 것을 환영합니다. Dining-Ticket 이용을 시작하려면 위치를 입력하여 지역 배달 옵션을 확인하세요. 다음으로 원하는 가격대, 요리 유형 또는 레스토랑 이름별로 정보를 필터링하세요. 그런 다음 Dining-Ticket 배달원이 음식을 운송하는 동안 주문한 음식을 추적하세요. 아주 간단합니다. 집에서 편안하게 좋아하는 레스토랑의 음식을 즐기시려면 지금 바로 Dining-Ticket을 이용해 보세요!",
                "questions": [
                    {
                        "id": "v3-p6-t8-q131",
                        "questionNo": 131,
                        "text": "Select the best answer.",
                        "options": { "A": "doorstep", "B": "station", "C": "program", "D": "market" },
                        "correctAnswer": "A",
                        "explanation": "식사가 배달되는 장소이므로 '문 앞, 집 앞'을 뜻하는 (A) doorstep이 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t8-q132",
                        "questionNo": 132,
                        "text": "Select the best answer.",
                        "options": { "A": "usage", "B": "using", "C": "usable", "D": "users" },
                        "correctAnswer": "B",
                        "explanation": "start의 목적어 자리에 오는 동명사 (B) using이 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t8-q133",
                        "questionNo": 133,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "Additional delivery staff are being recruited now.",
                            "B": "Your order will be ready for in-store pickup within one hour.",
                            "C": "Our training is thorough and fast.",
                            "D": "It's as easy as that."
                        },
                        "correctAnswer": "D",
                        "explanation": "앞서 설명한 이용 방법이 매우 간단함을 요약하는 (D)가 가장 적절합니다.",
                        "classification": "p6s"
                    },
                    {
                        "id": "v3-p6-t8-q134",
                        "questionNo": 134,
                        "text": "Select the best answer.",
                        "options": { "A": "comforted", "B": "comforting", "C": "comfortable", "D": "comfort" },
                        "correctAnswer": "D",
                        "explanation": "from the comfort of one's home(집에서 편안하게)이라는 관용 표현을 구성하는 명사 (D) comfort가 정답입니다.",
                        "classification": "p6v"
                    }
                ]
            },
            {
                "setId": "v3-p6-t8-p2",
                "contextType": "P2",
                "docType": "email",
                "guidance": "Questions 135-138 refer to the following e-mail.",
                "content": "To: Rashida Willis <rwillis@pintaur.net>\nFrom: Customer Accounts <accounts@stauntonnaturalgas.com>\nDate: August 4\nSubject: Paperless billing\n\nDear Ms. Willis,\n\nThank you for selecting the paperless billing ___135___ for your Staunton Natural Gas account. ___136___ on August 20, you will receive your monthly statement electronically. To ensure receipt of your bill, please add our e-mail address to your list of contacts. At any time you may ___137___ to traditional paper billing by selecting it in your account settings.\n\n___138___. Your bill will still be due on the first of each month.\n\nSincerely,\n\nStaunton Natural Gas",
                "translation": "수신: Rashida Willis <rwillis@pintaur.net>\n발신: 고객 계정 담당 <accounts@stauntonnaturalgas.com>\n날짜: 8월 4일\n제목: 종이 없는 청구서 발행\n\nWillis 씨에게,\n\nStaunton Natural Gas 계정에 대해 종이 없는 청구서 옵션을 선택해 주셔서 감사합니다. 8월 20일을 시작으로 매월 명세서를 전자 방식으로 받게 됩니다. 청구서를 확실히 수신할 수 있도록 저희 이메일 주소를 연락처 목록에 추가해 주십시오. 계정 설정에서 선택하면 언제든지 기존의 종이 청구서 방식으로 되돌릴 수 있습니다.\n\n그 외 청구 프로세스에 변경된 사항은 없습니다. 청구 금액은 여전히 매월 1일에 납부하셔야 합니다.\n\nStaunton Natural Gas 드림",
                "questions": [
                    {
                        "id": "v3-p6-t8-q135",
                        "questionNo": 135,
                        "text": "Select the best answer.",
                        "options": { "A": "value", "B": "degree", "C": "project", "D": "option" },
                        "correctAnswer": "D",
                        "explanation": "서비스 방식의 '선택지(옵션)'를 뜻하므로 (D) option이 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t8-q136",
                        "questionNo": 136,
                        "text": "Select the best answer.",
                        "options": { "A": "Until", "B": "Only", "C": "Beginning", "D": "Even" },
                        "correctAnswer": "C",
                        "explanation": "특정 시점부터 시작됨을 나타내는 분사구문 (C) Beginning이 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t8-q137",
                        "questionNo": 137,
                        "text": "Select the best answer.",
                        "options": { "A": "return", "B": "returnable", "C": "to return", "D": "returning" },
                        "correctAnswer": "A",
                        "explanation": "조동사 may 뒤에 오는 동사원형 (A) return이 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t8-q138",
                        "questionNo": 138,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "The account balance is now overdue.",
                            "B": "Nothing else about your billing process has changed.",
                            "C": "A company representative will contact you soon.",
                            "D": "The account will be closed on the final day of the month."
                        },
                        "correctAnswer": "B",
                        "explanation": "새로운 방식 도입 외에 다른 사항은 변함없음을 알리는 (B)가 가장 적절합니다.",
                        "classification": "p6s"
                    }
                ]
            },
            {
                "setId": "v3-p6-t8-p3",
                "contextType": "P4",
                "docType": "memo",
                "guidance": "Questions 139-142 refer to the following memo.",
                "content": "To: Red Division Sales Team Members\nFrom: Matias Gama, Director\nSubject: Information\nDate: 22 November\nAttachment: Third-quarter results\n\nLet me commend all of you on your outstanding work this past quarter! See for yourselves in the attached report, which provides all the details. ___139___, there's always room for growth. That's why we're launching a new ___140___ program. It will be provided by an outside agency that has carefully ___141___ our needs. Although the learning modules will be offered across the organization, they are scheduled to begin in our division. ___142___. In the meantime, please carry on with your good work.",
                "translation": "수신: Red 부서 영업팀원들\n발신: 부장 Matias Gama\n제목: 정보\n날짜: 11월 22일\n첨부: 3분기 실적\n\n지난 분기 동안 여러분의 뛰어난 노고에 대해 칭찬하고 싶습니다! 첨부된 보고서에서 모든 세부 사항을 직접 확인해 보세요. 그럼에도 불구하고 항상 성장할 여지는 있습니다. 그래서 우리는 새로운 교육 프로그램을 시작하려고 합니다. 이 프로그램은 우리의 요구 사항을 주의 깊게 분석한 외부 전문 기관에 의해 제공될 것입니다. 학습 모듈은 조직 전체에서 제공되겠지만, 우리 부서에서 먼저 시작될 예정입니다. 곧 구체적인 날짜를 알려드리겠습니다. 그동안 여러분의 훌륭한 업무를 계속해 주시기 바랍니다.",
                "questions": [
                    {
                        "id": "v3-p6-t8-q139",
                        "questionNo": 139,
                        "text": "Select the best answer.",
                        "options": { "A": "Similarly", "B": "In that case", "C": "Nevertheless", "D": "Even if" },
                        "correctAnswer": "C",
                        "explanation": "앞의 칭찬 내용과 뒤의 개선 필요성을 연결하는 역접의 접속부사 (C) Nevertheless가 정답입니다.",
                        "classification": "p6c"
                    },
                    {
                        "id": "v3-p6-t8-q140",
                        "questionNo": 140,
                        "text": "Select the best answer.",
                        "options": { "A": "radio", "B": "exercise", "C": "training", "D": "benefits" },
                        "correctAnswer": "C",
                        "explanation": "뒤에 언급된 '학습 모듈'과 맥락상 어울리는 (C) training이 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t8-q141",
                        "questionNo": 141,
                        "text": "Select the best answer.",
                        "options": { "A": "analyzed", "B": "analyzing", "C": "to analyze", "D": "been analyzed" },
                        "correctAnswer": "A",
                        "explanation": "has 뒤에 오는 현재완료 시제의 능동형 (A) analyzed가 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t8-q142",
                        "questionNo": 142,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "This was our best quarter ever!",
                            "B": "I will let you know the dates soon.",
                            "C": "Our clients are very pleased as well.",
                            "D": "Registration is now full."
                        },
                        "correctAnswer": "B",
                        "explanation": "부서에서 먼저 시작될 예정인 교육 프로그램의 일정을 안내하겠다는 (B)가 가장 적절합니다.",
                        "classification": "p6s"
                    }
                ]
            },
            {
                "setId": "v3-p6-t8-p4",
                "contextType": "P2",
                "docType": "email",
                "guidance": "Questions 143-146 refer to the following e-mail.",
                "content": "From: Joanna Markian\nTo: All management staff\nSubject: Meeting with Adacorp leadership\nDate: 11 January\n\nDear Credulux colleagues,\n\nPlease be advised that our Wednesday Board of Directors meeting will focus on the ___143___ company merger with Adacorp Ltd. We will be joined by Adacorp's CEO and several managers as well as members of both companies' legal teams. ___144___.\n\nThe purpose of this meeting is to clarify the timeline of the merger process. ___145___ with questions for our Board of Directors will be given ample time to ask them. ___146___, I would like to request that all nonurgent agenda items be saved for our management team meeting in early February.\n\nSincerely,\n\nJoanna Markian",
                "translation": "발신: Joanna Markian\n수신: 모든 경영진\n제목: Adacorp 리더십과의 회의\n날짜: 1월 11일\n\nCredulux 동료 여러분께,\n\n수요일에 열리는 이사회가 곧 있을 Adacorp Ltd.와의 기업 합병에 초점을 맞출 예정임을 알려드립니다. Adacorp의 CEO와 여러 관리자들, 그리고 양사 법무팀원들이 함께 참여할 것입니다. 이 회의에 직접 참석할 계획을 세워 주시기 바랍니다.\n\n본 회의의 목적은 합병 과정의 타임라인을 명확히 하는 것입니다. 이사회에 질문이 있는 분은 누구에게나 충분한 질문 시간이 주어질 것입니다. 이러한 이유로, 긴급하지 않은 다른 의제들은 2월 초 경영팀 회의를 위해 남겨두시기를 요청합니다.",
                "questions": [
                    {
                        "id": "v3-p6-t8-q143",
                        "questionNo": 143,
                        "text": "Select the best answer.",
                        "options": { "A": "selected", "B": "upcoming", "C": "occasional", "D": "assorted" },
                        "correctAnswer": "B",
                        "explanation": "곧 있을 합병을 뜻하므로 '다가오는'이라는 의미의 (B) upcoming이 정답입니다.",
                        "classification": "p6v"
                    },
                    {
                        "id": "v3-p6-t8-q144",
                        "questionNo": 144,
                        "text": "Select the best sentence to complete the text.",
                        "options": {
                            "A": "Please plan to attend this meeting in person.",
                            "B": "Interns will report on their experience at Adacorp.",
                            "C": "Instead, we will extend the meeting by one hour.",
                            "D": "You will soon be notified of the new law."
                        },
                        "correctAnswer": "A",
                        "explanation": "주요 인사들이 참석하는 회의에 직접 참석할 것을 독려하는 (A)가 가장 적절합니다.",
                        "classification": "p6s"
                    },
                    {
                        "id": "v3-p6-t8-q145",
                        "questionNo": 145,
                        "text": "Select the best answer.",
                        "options": { "A": "Each other", "B": "Yours", "C": "Anyone", "D": "Whoever" },
                        "correctAnswer": "C",
                        "explanation": "뒤에서 수식을 받는 부정대명사 (C) Anyone이 정답입니다.",
                        "classification": "p6g"
                    },
                    {
                        "id": "v3-p6-t8-q146",
                        "questionNo": 146,
                        "text": "Select the best answer.",
                        "options": { "A": "On the contrary", "B": "For this reason", "C": "Soon after", "D": "For example" },
                        "correctAnswer": "B",
                        "explanation": "질문 시간을 충분히 확보해야 한다는 앞의 내용이 원인이 되어 다른 안건을 미루자는 제안을 하므로 (B) For this reason이 정답입니다.",
                        "classification": "p6c"
                    }
                ]
            }
        ]
    };
