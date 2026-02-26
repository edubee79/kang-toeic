import { Part6TestSet } from './types';

export const test03Data: Part6TestSet = {
    testId: 3,
    vol: 4,
    title: "Test 3",
    passages: [
        {
            setId: "v4-p6-t03-p1",
            contextType: "P1",
            docType: "email",
            guidance: "Questions 131-134 refer to the following e-mail.",
            content: "To: All Staff\nFrom: Yoreli Costa\nDate: February 15\nSubject: Florence Shawn\n\nHi Everyone,\n\nI have news to share about a ___131___ in the human resources department. After nearly twenty years with Cometti Creative, Florence Shawn has decided to retire from the position of director of human resources.\n\nOur current senior manager of human resources, Makoto Ichise, will replace Ms. Shawn when she retires. Ms. Shawn ___132___ Mr. Ichise since he joined the company five years ago.\n\nMs. Shawn's ___133___ day will be February 22. A retirement party will be held for her on that day at 4:00 P.M. in the Terey Lobby. ___134___.\n\nBest,\n\nYoreli Costa\nDirector of Operations, Cometti Creative",
            translation: "수신: 전 직원\n발신: 요렐리 코스타\n날짜: 2월 15일\n제목: 플로렌스 숀\n\n안녕하세요, 여러분.\n\n인사부의 131 변화에 대해 공유할 소식이 있습니다. 코메티 크리에이티브에서 거의 20년을 근무한 끝에 플로렌스 숀이 인사부 이사직에서 은퇴하기로 결정했습니다.\n\n숀 씨가 은퇴하면 현재 인사부의 선임 관리자인 마코토 이치세가 그녀의 후임이 될 예정입니다. 숀 씨는 이치세 씨가 5년 전 입사한 이래로 그를 132 지도해 왔습니다.\n\n숀 씨의 133 마지막 날은 2월 22일입니다. 그날 오후 4시에 테리 로비에서 그녀를 위한 은퇴 파티가 열릴 것입니다. 134 여러분 모두 참석해 그녀의 안녕을 기원할 수 있기를 바랍니다.\n\n요렐리 코스타\n코메티 크리에이티브 운영 이사",
            questions: [
                {
                    id: "v4-p6-t03-q131",
                    questionNo: 131,
                    text: "Select the best answer.",
                    options: {
                        A: "difference",
                        B: "strategy",
                        C: "change",
                        D: "practice"
                    },
                    correctAnswer: "C",
                    explanation: "빈칸이 있는 문장의 다음 문장에서 회사에서 거의 20년을 근무한 플로렌스 숀이 인사부 이사직에서 은퇴하기로 했다고 했으므로, 인사부에 관해 공유할 소식은 바로 인사부 구성원에 있어서의 변화라는 것을 알 수 있습니다. 따라서 '변화'라는 뜻의 (C) change가 정답입니다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t03-q132",
                    questionNo: 132,
                    text: "Select the best answer.",
                    options: {
                        A: "mentors",
                        B: "is mentoring",
                        C: "will mentor",
                        D: "has been mentoring"
                    },
                    correctAnswer: "D",
                    explanation: "빈칸 뒤의 since와 과거동사 joined가 문제 해결의 단서로, 과거 시제 동사가 있는 since 절은 '~한 이래로'라는 뜻으로 쓰일 수 있고, 이때 주절에는 현재완료나 현재완료진행 시제가 옵니다. 문맥상, '이치세 씨가 5년 전 입사한 이래로 현재까지 숀 씨가 그를 지도해 왔다'는 의미가 되어야 하므로, 과거부터 현재까지 계속된 행위를 나타내는 시제인 현재완료진행 (D) has been mentoring이 정답입니다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t03-q133",
                    questionNo: 133,
                    text: "Select the best answer.",
                    options: {
                        A: "last",
                        B: "original",
                        C: "flexible",
                        D: "alternate"
                    },
                    correctAnswer: "A",
                    explanation: "뒤 문장에서 그날(on that day) 오후 4시에 그녀를 위한 은퇴 파티가 열린다고 한 것으로 보아 2월 22일은 숀 씨가 은퇴하는 날, 즉 회사에서 근무하는 마지막 날임을 알 수 있습니다. 따라서 '마지막의'라는 의미의 (A) last가 정답입니다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t03-q134",
                    questionNo: 134,
                    text: "Select the best answer.",
                    options: {
                        A: "Cometti Creative will hire a replacement soon.",
                        B: "We hope that you can all attend to wish her well.",
                        C: "Ms. Shawn was the first director of human resources at Cometti Creative.",
                        D: "The first project will be the creation of a talent development program."
                    },
                    correctAnswer: "B",
                    explanation: "앞 문장에서 2월 22일 오후 4시에 로비에서 그녀(Ms. Shawn)를 위한 은퇴 파티가 열린다고 했으므로, 파티 참석을 권하는 내용이 이어져야 자연스럽습니다. 따라서 모두 참석해 그녀의 안녕을 기원하자고 언급하는 (B)가 정답입니다.",
                    classification: "p6s"
                }
            ]
        },
        {
            setId: "v4-p6-t03-p2",
            contextType: "P2",
            docType: "advertisement",
            guidance: "Questions 135-138 refer to the following advertisement.",
            content: "Lovitt Real Estate\nHelping Manitoba Families Find their Dream Homes\n\nManuel Lovitt, ___135___ of Lovitt Real Estate, has been selling real estate for over 17 years. Mr. Lovitt and his award-winning team ___136___ in homes for families in the Winnipeg, Brandon, and Dauphin areas. They know about the schools, parks, services, transportation, and activities that enhance family life in the area where you want to reside. ___137___.\n\nContact Lovitt Real Estate today and let the team guide you ___138___ the home of your dreams. They will listen to your needs, negotiate on your behalf, and get you the best home for your hard-earned money.\n\nCall 431-555-0168 to speak to an agent or visit www.lovittrealestate.ca for more information.",
            translation: "러빗 부동산\n매니토바 가족들이 꿈꾸는 집을 찾도록 도와드립니다.\n\n러빗 부동산의 135 소유주인 마누엘 러빗은 17년 넘게 부동산을 매매해 왔습니다. 러빗 씨와 수상 경력이 있는 그의 팀은 위니펙, 브랜든, 도핀 지역에서 가족을 위한 집을 136 전문으로 합니다. 그들은 고객이 거주하기를 원하는 지역의 학교, 공원, 서비스, 교통, 그리고 가족의 삶을 향상시켜 주는 활동에 대해 잘 알고 있습니다. 137 그것은 그들이 서비스를 제공하는 지역에 살고 있기 때문입니다.\n\n지금 러빗 부동산에 연락하시면 저희 팀이 고객님을 꿈의 집 138 으로 안내해 드리겠습니다. 저희 팀은 고객님의 요구에 귀를 기울이고 고객님을 대신해 협상하고 고객님이 애써 번 돈에 맞춰 최고의 집을 구해 드릴 것입니다.\n\n자세한 정보는 431-555-0168로 전화해 직원에게 말씀하시거나 www.lovittrealestate.ca를 방문하세요.",
            questions: [
                {
                    id: "v4-p6-t03-q135",
                    questionNo: 135,
                    text: "Select the best answer.",
                    options: {
                        A: "own",
                        B: "owned",
                        C: "owner",
                        D: "owning"
                    },
                    correctAnswer: "C",
                    explanation: "빈칸 앞에 문장의 주어인 Manuel Lovitt과 콤마가 있고, 뒤에 동사 has been selling이 있는 것으로 보아 빈칸은 Manuel Lovitt의 동격 자리임을 알 수 있다. 따라서 '소유자'라는 뜻의 명사 (C) owner가 정답이다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t03-q136",
                    questionNo: 136,
                    text: "Select the best answer.",
                    options: {
                        A: "practice",
                        B: "specialize",
                        C: "report",
                        D: "purchase"
                    },
                    correctAnswer: "B",
                    explanation: "빈칸 뒤에 목적어가 없고 전치사 in이 있으므로 전치사 in과 어울릴 수 있는 자동사가 들어가야 한다. 문맥상으로도 '가족을 위한 집을 전문으로 다룬다'는 의미가 되어야 자연스러우므로 전치사 in과 함께 '~을 전문으로 다루다'라는 의미를 만드는 (B) specialize가 정답이다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t03-q137",
                    questionNo: 137,
                    text: "Select the best answer.",
                    options: {
                        A: "They can arrange transportation for your local elementary school.",
                        B: "That is because they live in the communities they serve.",
                        C: "They will be closed for the summer but will be back soon.",
                        D: "Therefore, they can help you with all your banking needs."
                    },
                    correctAnswer: "B",
                    explanation: "앞 문장에서 그들(Mr. Lovitt and his award-winning team)이 고객의 거주 희망 지역의 학교, 공원, 서비스, 교통 및 활동 등을 파악하고 있으며 지역 관련 정보를 잘 안다는 점을 강조하고 있으므로, 이를 뒷받침할 수 있는 근거가 이어져야 자연스럽다. 따라서 그들이 서비스를 제공하는 지역에 살고 있기 때문이라고 언급하는 (B)가 정답이다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t03-q138",
                    questionNo: 138,
                    text: "Select the best answer.",
                    options: {
                        A: "toward",
                        B: "fixing",
                        C: "because",
                        D: "along"
                    },
                    correctAnswer: "A",
                    explanation: "빈칸 앞 완전한 절과 뒤의 명사구 the home (of your dreams)를 연결하는 구조로, 전치사 (A) toward(~쪽으로, ~을 향하여)와 (D) along(~을 따라), 현재분사 (B) fixing(고치는)이 가능하다. 문맥상 '꿈의 집으로 안내하겠다'가 되어야 자연스러우므로 '~쪽으로, ~을 향하여'를 뜻하는 (A) toward가 정답이다. (C) because는 부사절 접속사이므로 구조상 빈칸에 들어갈 수 없다.",
                    classification: "p6g"
                }
            ]
        },
        {
            setId: "v4-p6-t03-p3",
            contextType: "P3",
            docType: "introduction",
            guidance: "Questions 139-142 refer to the following introduction.",
            content: "Welcome to \"Distributing Your Savings.\" This slide ___139___ is the third of a twelve-segment educational series called \"Preparing for Retirement.\" ___140___.\n\nThis series provides only ___141___ advice. It should not replace the guidance of your investment planner. The series has been developed as background material to help you ask key questions when ___142___ with your investment planner. We hope you find this information helpful.\n\nSwainson-Gray Investments",
            translation: "'저축 분산하기'에 오신 것을 환영합니다. 이 슬라이드 139 발표는 '은퇴 준비'라는 열두 개의 부분으로 구성된 교육 시리즈 중 세 번째입니다. 140 본 시리즈는 정보에 근거한 재무 의사 결정을 내리는 데 도움이 되도록 고안되었습니다.\n\n본 시리즈는 141 보충적인 조언만 제공합니다. 이것이 여러분의 투자 설계사가 제공하는 안내를 대체해서는 안 됩니다. 이 시리즈는 여러분이 투자 설계사와 142 상담할 때 중요한 질문을 할 수 있도록 돕기 위한 배경 자료로 개발되었습니다. 이 정보가 도움이 되기를 바랍니다.\n\n스웨인슨-그레이 인베스트먼츠",
            questions: [
                {
                    id: "v4-p6-t03-q139",
                    questionNo: 139,
                    text: "Select the best answer.",
                    options: {
                        A: "presenting",
                        B: "presents",
                        C: "presentation",
                        D: "presented"
                    },
                    correctAnswer: "C",
                    explanation: "동사 is의 주어 역할을 하는 명사 자리로, 빈칸 앞의 명사 slide와 함께 쓰여 '슬라이드 발표'라는 의미의 복합명사를 만들 수 있는 (C) presentation이 정답이다. (B) presents는 명사로 쓰일 경우 '선물'이라는 의미로 slide와 복합명사를 이루기에 적절하지 않고 동사 is와 수 일치도 되지 않아 오답이다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t03-q140",
                    questionNo: 140,
                    text: "Select the best answer.",
                    options: {
                        A: "You are encouraged to visit our office for a free portfolio review.",
                        B: "The series is designed to help you make informed financial decisions.",
                        C: "Please fill out the paperwork before your appointment.",
                        D: "Your responses will help us serve you better in the future."
                    },
                    correctAnswer: "B",
                    explanation: "빈칸 앞에서 이 슬라이드 발표는 '은퇴 준비'라는 열두 개의 부분으로 구성된 교육 시리즈 중 세 번째 발표(This slide presentation is ~ educational series called \"Preparing for Retirement\")라고 했고, 뒤에 이어지는 단락에서 본 시리즈는 보충적인 조언만 제공한다고 했으므로, 빈칸에는 본 시리즈에 대한 내용이 언급되어야 자연스럽다. 따라서 본 시리즈는 정보에 근거한 재무 의사 결정을 내리는 데 도움이 되는 것이라고 설명한 (B)가 정답이다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t03-q141",
                    questionNo: 141,
                    text: "Select the best answer.",
                    options: {
                        A: "regional",
                        B: "expensive",
                        C: "supplemental",
                        D: "playful"
                    },
                    correctAnswer: "C",
                    explanation: "뒤 문장에서 이것이 투자 설계사가 제공하는 안내를 대체해서는 안 된다고 한 것으로 보아 재무 계획에 대해 보완이 될 수 있는, 즉 '보충적인 조언만을 제공한다'는 내용이 되어야 하므로 '보충의'라는 뜻의 (C) supplemental이 정답이다. (A) regional은 '지역의', (B) expensive는 '비싼', (D) playful은 '장난스러운'이라는 의미로 문맥상 적절하지 않다.",
                    classification: "p6v"
                },
                {
                    id: "v4-p6-t03-q142",
                    questionNo: 142,
                    text: "Select the best answer.",
                    options: {
                        A: "consulting",
                        B: "prescribing",
                        C: "listing",
                        D: "following"
                    },
                    correctAnswer: "A",
                    explanation: "부사절 접속사 when 뒤의 분사 자리에 들어갈 동사 어휘를 고르는 문제로 빈칸 뒤에 목적어가 없고 전치사 with가 있으므로 전치사 with와 어울릴 수 있는 자동사가 들어가야 한다. '투자 설계사와 상담할 때'라는 의미가 되어야 자연스러우므로 전치사 with와 함께 '~와 상담하다'라는 의미의 (A) consulting이 정답이다. (B)의 prescribe는 '처방하다', (C)의 list는 '목록을 작성하다', (D)의 follow는 '뒤를 잇다'라는 의미이다.",
                    classification: "p6v"
                }
            ]
        },
        {
            setId: "v4-p6-t03-p4",
            contextType: "P1",
            docType: "email",
            guidance: "Questions 143-146 refer to the following e-mail.",
            content: "To: Dana Paulwell\nFrom: Silas Laveau\nDate: August 22\nSubject: My input\nAttachment: Article\n\nDear Dr. Paulwell,\n\nThis message is in response to yesterday's staff meeting, particularly the discussion on how certain aspects of the clinic may affect our work and mission. ___143___.\n\nCurrently, the vending machines in the hall outside our waiting room are stocked with sugary and salty products such as soft drinks and chips. As a health care provider, we ___144___ beverages and snacks that show our commitment to wellness. ___145___, our mission is focused on good health.\n\nI have attached an article about actions that medical centers like ours are taking to improve their hospitality stations. I hope you find it ___146___. It details some easy and cost-effective changes we could consider.\n\nKind regards,\n\nSilas Laveau",
            translation: "수신: 데이나 폴웰\n발신: 사일러스 라보\n날짜: 8월 22일\n제목: 저의 의견\n첨부: 기사글\n\n폴웰 박사님께,\n\n이 메시지는 어제 있었던 직원 회의, 특히 병원의 특정 측면이 우리의 업무 및 사명에 어떤 영향을 미칠 수 있는지에 대한 논의에 관한 것입니다. 143 저는 이 주제에 대해 제안을 하고 싶습니다.\n\n현재, 대기실 밖 복도에 있는 자판기에는 청량음료와 감자칩 같은 달고 짠 제품들이 구비되어 있습니다. 의료 서비스 제공자로서, 우리는 건강을 위해 헌신하고 있음을 보여 주는 음료와 간식을 144 제공해야 합니다. 145 결국, 우리의 사명은 건강에 초점을 맞추고 있습니다.\n\n우리와 같은 의료 기관들이 접대 구역 개선을 위해 취하고 있는 조치들에 대한 기사를 첨부했습니다. 기사가 146 도움이 되기를 바랍니다. 여기에는 우리가 고려해 볼 수 있는 쉽고 비용 효율적인 변화 몇 가지가 자세히 나와 있습니다.\n\n사일러스 라보",
            questions: [
                {
                    id: "v4-p6-t03-q143",
                    questionNo: 143,
                    text: "Select the best answer.",
                    options: {
                        A: "I thought it went on longer than was necessary.",
                        B: "I wish we had been informed about it sooner.",
                        C: "I would like to make a suggestion on this topic.",
                        D: "I would be honored to lead a follow-up session."
                    },
                    correctAnswer: "C",
                    explanation: "앞 문장에서 이 메시지는 어제 직원 회의에서 있었던 논의에 관한 것이라고 한 뒤, 뒤 문단에서 의료 서비스 제공자로서 건강을 위해 헌신하고 있음을 보여 주는 음료 및 간식을 제공해야 한다고 제안하고 있다. 따라서 회의 내용과 관련된 제안사항을 건의하고 싶다는 내용이 이어져야 자연스러우므로 (C)가 정답이다.",
                    classification: "p6s"
                },
                {
                    id: "v4-p6-t03-q144",
                    questionNo: 144,
                    text: "Select the best answer.",
                    options: {
                        A: "will offer",
                        B: "have offered",
                        C: "were offering",
                        D: "should be offering"
                    },
                    correctAnswer: "D",
                    explanation: "앞 문장에서 현재 자판기에 달고 짠 제품들이 구비되어 있다고 상황을 설명했고, 뒤 문장에서는 우리의 사명은 건강에 초점을 맞추고 있다(our mission is focused on good health)고 했다. 따라서 빈칸에는 건강을 염두에 둔 음료와 간식을 '제공해야 한다'라는 사명에 근거한 의무 및 당위성을 나타내는 내용이 되어야 적합하므로 (D) should be offering이 정답이다.",
                    classification: "p6g"
                },
                {
                    id: "v4-p6-t03-q145",
                    questionNo: 145,
                    text: "Select the best answer.",
                    options: {
                        A: "After all",
                        B: "By the way",
                        C: "In the meantime",
                        D: "On the other hand"
                    },
                    correctAnswer: "A",
                    explanation: "앞 문장에는 의료 서비스 제공자로서 건강을 위해 헌신하고 있음을 보여 주는 음료와 간식을 제공해야 한다고 했고, 뒤 문장에는 우리의 사명은 건강에 초점을 맞추고 있다고 했다. 뒤 문장의 내용이 앞 문장에 서 펼친 주장에 대한 이유를 설명한 것이므로 '결국, 어쨌든'이라는 뜻으로 설명이나 이유를 덧붙일 때 사용하는 (A) After all이 정답이다. (B) By the way는 '그런데', (C) In the meantime은 '그동안에', (D) On the other hand는 '다른 한편으로는, 반면에'라는 의미로 문맥에 어울리지 않는다.",
                    classification: "p6c"
                },
                {
                    id: "v4-p6-t03-q146",
                    questionNo: 146,
                    text: "Select the best answer.",
                    options: {
                        A: "useful",
                        B: "eventful",
                        C: "profitable",
                        D: "comfortable"
                    },
                    correctAnswer: "A",
                    explanation: "앞 문장에서 관련 기사를 첨부했다고 했고, 뒤 문장에서 우리가 고려할 수 있는 쉽고 비용 효율적인 변화가 설명되어 있다고 했다. 따라서 빈칸이 있는 문장은 '기사가 도움이 되기를 바란다'는 내용이 되어야 자연스러우므로 '도움이 되는, 유용한'이라는 뜻의 (A) useful이 정답이다. (B) eventful는 '다사다난한', (C) profitable은 '수익성이 있는', (D) comfortable은 '편안한'의 의미로 문맥상 적절하지 않다.",
                    classification: "p6v"
                }
            ]
        }
    ]
};
