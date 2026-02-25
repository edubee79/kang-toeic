import { Part5TestSet } from '../../v4/reading/part5/types';

export const test8Data: Part5TestSet = {
    testId: 8,
    vol: 3,
    title: "Part 5 Real Test 8",
    questions: [
        {
            id: "v3-p5-t8-q101",
            questionNo: 101,
            text: "Mr. Pierce requested that all employees meet in ------- office at noon.",
            options: {
                A: "himself",
                B: "his",
                C: "him",
                D: "he"
            },
            classification: "p1",
            testId: 8,
            vol: 3,
            correctAnswer: "B",
            translation: "피어스 씨는 정오에 전 직원이 그의 사무실에서 만날 것을 요청했다.",
            explanation: "전치사 in의 목적어 역할을 하는 명사 office를 한정 수식하는 자리이므로, 소유격 인칭대명사 (B) his가 정답이다."
        },
        {
            id: "v3-p5-t8-q102",
            questionNo: 102,
            text: "We greatly appreciate your ------- in preparing your office for the upcoming move.",
            options: {
                A: "cooperates",
                B: "cooperated",
                C: "cooperation",
                D: "cooperate"
            },
            classification: "n1",
            testId: 8,
            vol: 3,
            correctAnswer: "C",
            translation: "곧 있을 이전을 위한 사무실 준비 작업에 협조해 주셔서 매우 감사합니다.",
            explanation: "소유격 your의 수식을 받으면서 동사 appreciate의 목적어 역할을 하는 명사 자리이므로, (C) cooperation(협조, 협력)이 정답이다. (A) cooperates, (B) cooperated, (D) cooperate는 모두 동사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t8-q103",
            questionNo: 103,
            text: "Employees who ------- to contribute to the company picnic should contact Mr. Liu.",
            options: {
                A: "require",
                B: "supply",
                C: "wish",
                D: "express"
            },
            classification: "voc1",
            testId: 8,
            vol: 3,
            correctAnswer: "C",
            translation: "회사 야유회를 돕고 싶은 직원은 리우 씨에게 연락해야 한다.",
            explanation: "who가 이끄는 관계사절의 동사 자리로, to부정사구 to contribute to the company picnic을 목적어로 취할 수 있는 타동사가 들어가야 한다. 따라서 (C) wish(~하기를 바라다)가 정답이다. 참고로, (A) require는 5형식 동사로 쓰일 경우 「require + 목적어 + 목적격 보어(to부정사)」 구조가 되어야 하며, (B) supply와 (D) express는 to부정사를 목적어로 취하지 않는다."
        },
        {
            id: "v3-p5-t8-q104",
            questionNo: 104,
            text: "Ms. Ngo will make the awards announcement ------- the luncheon next week.",
            options: {
                A: "up",
                B: "onto",
                C: "off",
                D: "at"
            },
            classification: "pr1",
            testId: 8,
            vol: 3,
            correctAnswer: "D",
            translation: "응고 씨는 다음 주 오찬에서 시상 발표를 할 것이다.",
            explanation: "명사 the luncheon을 목적어로 취하는 전치사 자리이다. 여기서 오찬(luncheon)은 수상 발표(the awards announcement)가 있을 행사이므로, '~에서'라는 의미의 (D) at이 정답이다."
        },
        {
            id: "v3-p5-t8-q105",
            questionNo: 105,
            text: "As of October 1, Ms. Givens will be planning our department's travel -------.",
            options: {
                A: "budgeted",
                B: "budget",
                C: "budgetary",
                D: "budgeter"
            },
            classification: "n1",
            testId: 8,
            vol: 3,
            correctAnswer: "B",
            translation: "기븐스 씨는 10월 1일자로 우리 부서의 출장 예산을 기획할 것이다.",
            explanation: "travel과 함께 복합명사를 이루어 동사 will be planning의 목적어 역할을 하는 자리로, 보기에서 명사인 (B) budget(예산)과 (D) budgeter(예산 담당자) 중 하나를 선택해야 한다. 기획할만한 대상은 예산이므로, (B) budget이 정답이다. (A) budgeted가 과거분사로서 travel을 수식한다고 가정하더라도, '짜여진 여행'이라는 의미가 되므로 어색하다. (C) budgetary는 명사 앞에 오는 형용사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t8-q106",
            questionNo: 106,
            text: "Job applicants are ------- encouraged to submit a work portfolio and a résumé.",
            options: {
                A: "rapidly",
                B: "strongly",
                C: "nearly",
                D: "tightly"
            },
            classification: "voc1",
            testId: 8,
            vol: 3,
            correctAnswer: "B",
            translation: "지원자는 업무 포트폴리오 및 이력서 제출이 적극 권장된다.",
            explanation: "be동사 are와 과거분사 encouraged 사이에서 동사를 수식하는 부사 자리로, 빈칸에는 권장되는(encouraged) 정도를 나타내는 단어가 들어가야 자연스럽다. 따라서 '강하게, 적극'이라는 의미의 (B) strongly가 정답이다. strongly encouraged/recommended/advised 등은 빈출 표현이니 암기해 두는 것이 좋다."
        },
        {
            id: "v3-p5-t8-q107",
            questionNo: 107,
            text: "Join us for dinner on Friday ------- Mr. Yi's promotion to Vice President of Marketing.",
            options: {
                A: "to celebrate",
                B: "celebrates",
                C: "will celebrate",
                D: "celebrated"
            },
            classification: "i1",
            testId: 8,
            vol: 3,
            correctAnswer: "A",
            translation: "이 씨의 마케팅 부사장 승진을 축하하기 위한 금요일 저녁 식사 자리에 저희와 함께해 주십시오.",
            explanation: "앞에는 명령문 형태의 절(Join us for dinner on Friday)이 왔고, 뒤에는 명사구(Mr. Yi's promotion to Vice President of Marketing)가 있으므로, 빈칸에는 Mr. Yi's promotion 이하를 목적어로 취하여 앞에 온 절을 수식하는 준동사가 들어가야 한다. 따라서 '승진을 축하하기 위해서'라는 목적을 나타내면서 부사적인 역할을 하는 to부정사 (A) to celebrate가 정답이다. (B) celebrates, (C) will celebrate, (D) celebrated는 본동사 형태로 구조상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t8-q108",
            questionNo: 108,
            text: "The ------- of 21 tools ordered will be delivered to the Abby Street warehouse this afternoon.",
            options: {
                A: "set",
                B: "room",
                C: "fit",
                D: "power"
            },
            classification: "voc1",
            testId: 8,
            vol: 3,
            correctAnswer: "A",
            translation: "주문된 21개 도구 세트는 오늘 오후 애비 스트리트 창고로 배송될 예정이다.",
            explanation: "빈칸에는 배달(will be delivered)의 대상인 21개의 도구(21 tools)와 어울리는 명사가 들어가야 하므로, '세트, 한 조'라는 의미의 (A) set이 정답이다."
        },
        {
            id: "v3-p5-t8-q109",
            questionNo: 109,
            text: "Galaxy Health Club offers a 20 percent discount for all classes ------- November.",
            options: {
                A: "entire",
                B: "during",
                C: "while",
                D: "ever"
            },
            classification: "pr1",
            testId: 8,
            vol: 3,
            correctAnswer: "B",
            translation: "갤럭시 헬스 클럽은 11월 동안 모든 강좌에 20퍼센트 할인을 제공한다.",
            explanation: "명사 November를 목적어로 취해 앞에 온 절을 수식하는 전치사 자리이므로, '~동안'이라는 의미의 전치사 (B) during이 정답이다. (A) entire는 형용사, (D) ever는 부사, (C) while은 접속사/명사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t8-q110",
            questionNo: 110,
            text: "------- the printer cartridge was installed correctly, it leaked some ink.",
            options: {
                A: "Although",
                B: "So",
                C: "If",
                D: "However"
            },
            classification: "c3",
            testId: 8,
            vol: 3,
            correctAnswer: "A",
            translation: "프린터 카트리지는 바르게 설치되었지만 잉크가 좀 샜다.",
            explanation: "완전한 절(the printer cartridge was installed correctly)을 이끄는 접속사 자리로, 빈칸이 이끄는 절이 콤마 뒤 주절을 수식하고 있다. 카트리지가 바르게 설치된 것(the printer cartridge was installed correctly)과 잉크가 약간 새는 것(it leaked some ink)은 상충되는 상황이므로, 대조/양보의 접속사 (A) Although(비록 ~ 이지만)가 정답이다. 참고로, (B) So는 등위접속사로 절이나 문장 사이에 주로 위치한다. (D) However는 접속부사로 쓰일 경우 '아무리 ~해도'라는 의미로 바로 뒤에 형용사나 부사가 온다."
        },
        {
            id: "v3-p5-t8-q111",
            questionNo: 111,
            text: "Ms. Chu will explain how the factory workers can protect ------- equipment from damage.",
            options: {
                A: "theirs",
                B: "them",
                C: "themselves",
                D: "their"
            },
            classification: "p1",
            testId: 8,
            vol: 3,
            correctAnswer: "D",
            translation: "추 씨는 공장 인부들이 손상으로부터 그들의 장비를 보호할 수 있는 방법을 설명할 것이다.",
            explanation: "동사 can protect의 목적어 역할인 명사 equipment를 한정 수식하는 자리이므로, 소유격 인칭대명사인 (D) their가 정답이다."
        },
        {
            id: "v3-p5-t8-q112",
            questionNo: 112,
            text: "Promotional ideas for violinist Zelina Ortiz will be ------- by the publicity team next month.",
            options: {
                A: "escorted",
                B: "tutored",
                C: "discussed",
                D: "subscribed"
            },
            classification: "pa2",
            testId: 8,
            vol: 3,
            correctAnswer: "C",
            translation: "다음 달 홍보팀에 의해 바이올리니스트 젤리나 오티즈의 홍보를 위한 아이디어가 논의될 것이다.",
            explanation: "주어인 Promotional ideas 및 행위의 주체(by)인 the publicity team과 어울리는 동사를 선택해야 한다. 홍보를 위한 아이디어는 홍보팀에 의해 논의되는 대상이므로, '논의되는, 검토되는'이라는 의미의 (C) discussed가 정답이다."
        },
        {
            id: "v3-p5-t8-q113",
            questionNo: 113,
            text: "Giffords Global Investors Magazine experienced its highest numbers in ------- sales in the last quarter.",
            options: {
                A: "digits",
                B: "digital",
                C: "digit",
                D: "digitize"
            },
            classification: "a1",
            testId: 8,
            vol: 3,
            correctAnswer: "B",
            translation: "기퍼즈 글로벌 인베스터 잡지는 지난 분기에 디지털 매출 부문에서 최고치를 경험했다.",
            explanation: "빈칸이 전치사 in과 명사 sales 사이에 있으므로, sales를 수식하는 형용사 또는 sales와 복합명사를 이루는 명사가 들어갈 수 있다. 해당 부분이 최고의 수치를 기록한 부문을 나타내고 있으므로, '디지털의'라는 의미의 형용사인 (B) digital이 정답이다. 참고로, digit은 '숫자'라는 뜻으로 sales와 복합명사를 이루기엔 어색하다. (D) digitize는 동사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t8-q114",
            questionNo: 114,
            text: "A new barbershop is opening ------- the neighborhood already has three others.",
            options: {
                A: "among",
                B: "that",
                C: "prior to",
                D: "even though"
            },
            classification: "c3",
            testId: 8,
            vol: 3,
            correctAnswer: "D",
            translation: "인근에 이미 3개의 다른 이발소가 있는데도 새 이발소가 문을 연다.",
            explanation: "빈칸은 완전한 두 절을 연결해 주는 접속사 자리이다. 따라서 '~일지라도'라는 의미의 부사절 접속사인 (D) even though가 정답이다. 해당 문장에서 opening이 that절을 목적어로 취하는 타동사나 that절의 수식을 받는 명사로 쓰인 것이 아니므로, (B) that은 빈칸에 들어갈 수 없다. (A) among과 (C) prior to는 전치사로 절을 이끌 수 없다."
        },
        {
            id: "v3-p5-t8-q115",
            questionNo: 115,
            text: "Now that Rocker Guitar School is a ------- enterprise, it can afford to hire additional teachers.",
            options: {
                A: "musical",
                B: "profitable",
                C: "compact",
                D: "long"
            },
            classification: "voc1",
            testId: 8,
            vol: 3,
            correctAnswer: "B",
            translation: "로커 기타 스쿨은 수익성이 있는 업체라서 추가로 강사들을 채용할 여력이 있다.",
            explanation: "빈칸을 포함한 절은 로커 기타 스쿨이 추가 강사를 채용할 여력(it can afford to hire additional teachers)이 되는 이유(Now that)를 나타낸다. 따라서 '수익성이 있는, 벌이가 많은'이라는 의미의 (B) profitable이 빈칸에 들어가야 자연스럽다."
        },
        {
            id: "v3-p5-t8-q116",
            questionNo: 116,
            text: "The renovated office building did not look the way Ms. Garcia ------- it would.",
            options: {
                A: "imagine",
                B: "imagining",
                C: "imagined",
                D: "imagination"
            },
            classification: "v1",
            testId: 8,
            vol: 3,
            correctAnswer: "C",
            translation: "개조된 사무실 건물은 가르시아 씨가 상상했던 것처럼 보이지 않았다.",
            explanation: "명사 the way를 수식하는 절(Ms. Garcia ~ it would)의 동사 자리이다. (A) imagine은 3인칭 단수 주어(Ms. Garcia)와 쓰일 수 없으므로, 주어의 수에 영향을 받지 않으며 시제상 앞뒤에 나온 과거동사(did not look, would)와도 어울리는 (C) imagined가 정답이다. (B) imagining은 동명사/현재분사, (D) imagination은 명사로 구조상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t8-q117",
            questionNo: 117,
            text: "Arsov Consulting advised us to wait until the ------- to ship the new line of sweaters.",
            options: {
                A: "summer",
                B: "year",
                C: "hours",
                D: "weather"
            },
            classification: "voc1",
            testId: 8,
            vol: 3,
            correctAnswer: "A",
            translation: "아소브 컨설팅은 우리에게 신상품 스웨터 수송을 하려면 여름까지 기다리라고 조언했다.",
            explanation: "전치사 until(~까지)의 목적어 역할을 하는 명사 자리로, 특정 시점을 나타내는 명사가 들어가야 한다. 따라서 '여름'이라는 의미의 (A) summer가 정답이다. 참고로, (B) year가 until the와 쓰이려면 year 다음에 숫자가(eg. until the year 2031) 와야 한다. (C) hours는 기간을 나타내므로 until과 어울리지 않는다."
        },
        {
            id: "v3-p5-t8-q118",
            questionNo: 118,
            text: "The heads of ------- department in the company must attend the training session in Kolkata.",
            options: {
                A: "its",
                B: "each",
                C: "most",
                D: "several"
            },
            classification: "p2",
            testId: 8,
            vol: 3,
            correctAnswer: "B",
            translation: "회사의 각 부서장은 콜카타에서 열리는 교육에 참석해야 한다.",
            explanation: "단수가산명사 department를 수식하는 한정사 자리로, 보기에서 단수명사와 쓰일 수 있는 (A) its 또는 (B) each 중 하나를 선택해야 한다. 빈칸을 포함한 전치사구가 복수명사 heads를 수식하므로, 부서장과 부서가 여럿임을 알 수 있다. 따라서 빈칸에는 '각각의'라는 의미의 (B) each가 정답이다. (C) most는 복수명사와 불가산명사를, (D) several은 복수명사를 수식한다."
        },
        {
            id: "v3-p5-t8-q119",
            questionNo: 119,
            text: "Vurk Ltd., manufacturer of industrial sewing machines, is ------- to introduce a line of home products soon.",
            options: {
                A: "applied",
                B: "expected",
                C: "inquired",
                D: "objected"
            },
            classification: "pa2",
            testId: 8,
            vol: 3,
            correctAnswer: "B",
            translation: "산업용 재봉틀 제조업체인 버크 주식회사는 곧 가정용 제품을 내놓을 것으로 예상된다.",
            explanation: "be동사 is와 함께 수동태를 이루는 과거분사 자리로, to부정사구와 어울려 쓰이는 동사가 들어가야 한다. 또한 문맥상 soon과 어울려 곧 일어날 일을 묘사하는 단어가 필요하므로, '(~할 것으로) 예상되는'이라는 뜻의 (B) expected가 정답이다. 참고로, expect는 타동사로서 「expect + 목적어 + 목적격 보어(to부정사)」의 5형식 구조로 쓰일 수 있으며, 수동태로 쓰일 경우 해당 문장 구조가 된다. be expected to는 빈출 표현이니 암기해 두는 것이 좋다."
        },
        {
            id: "v3-p5-t8-q120",
            questionNo: 120,
            text: "Reception desk personnel are thoroughly trained to answer any ------- that hotel guests may have.",
            options: {
                A: "questioner",
                B: "questioned",
                C: "questions",
                D: "questionable"
            },
            classification: "n1",
            testId: 8,
            vol: 3,
            correctAnswer: "C",
            translation: "프런트 데스크 직원은 호텔 투숙객이 할 수 있는 모든 질문에 대답할 수 있도록 철저히 교육을 받는다.",
            explanation: "빈칸은 to부정사 to answer의 목적어 역할을 하는 명사 자리로, 관계사절 that hotel guests may have의 수식을 받는다. 프런트 데스크 직원이 답해야 하는 것은 호텔 투숙객들이 할 질문이므로, (C) questions가 정답이다. (A) questioner는 '질문자'라는 뜻으로 문맥상 어색하며, (B) questioned는 과거 동사/과거분사, (D) questionable은 형용사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t8-q121",
            questionNo: 121,
            text: "Wyckshire Mobile's unlimited talk, text, and data plan is priced ------- at £50.00 per month.",
            options: {
                A: "promptly",
                B: "reasonably",
                C: "partially",
                D: "loyally"
            },
            classification: "voc1",
            testId: 8,
            vol: 3,
            correctAnswer: "B",
            translation: "워크셔 모바일의 통화, 문자, 데이터 무제한 요금제는 월별 50파운드로 가격이 합리적으로 책정됐다.",
            explanation: "빈칸에는 월 50파운드로 가격이 책정된(is priced) 상황을 평가하는 부사가 들어가야 하므로, '합리적으로, 타당하게'라는 의미의 (B) reasonably가 정답이다. 참고로, highly(높게) / realistically(현실적으로) / sensibly(합리적으로) 등의 부사도 priced와 어울려 쓰인다."
        },
        {
            id: "v3-p5-t8-q122",
            questionNo: 122,
            text: "Khaab Staffers announced its acquisition of an international database of ------- 5,000 companies sorted by location or industry.",
            options: {
                A: "many",
                B: "beside",
                C: "wide",
                D: "over"
            },
            classification: "pr1",
            testId: 8,
            vol: 3,
            correctAnswer: "D",
            translation: "캅 스태퍼는 지역 또는 업계별로 분류한 5천 개 이상 회사들의 국제 데이터베이스 인수를 발표했다.",
            explanation: "빈칸 없이도 완전한 문장으로, 바로 뒤에 오는 5,000과 어울려 쓰이는 단어가 빈칸에 들어가야 한다. 따라서 '~ 이상'이라는 뜻으로 숫자 를 수식할 수 있는 (D) over가 정답이다. 참고로, (A) many는 의미 상 5,000과 같은 특정 숫자를 수식할 수 없다."
        },
        {
            id: "v3-p5-t8-q123",
            questionNo: 123,
            text: "The presence of several eagle nests makes Hilltop Grove a favorite site for ------- bird watchers.",
            options: {
                A: "enthusiastic",
                B: "affordable",
                C: "elaborate",
                D: "comparable"
            },
            classification: "voc1",
            testId: 8,
            vol: 3,
            correctAnswer: "A",
            translation: "힐탑 그로브는 여러 개의 독수리 둥지가 있어서 열광적인 새 관찰자들이 가장 좋아하는 장소다.",
            explanation: "독수리 둥지를 보기 위해 특정 장소를 방문하는 새 관찰자(bird watchers)의 성향을 묘사하는 형용사 자리이다. 따라서 '열렬한, 열광적인'이라는 의미의 (A) enthusiastic이 정답이다."
        },
        {
            id: "v3-p5-t8-q124",
            questionNo: 124,
            text: "The general manager has implemented a system to fill online orders of costume jewelry lines more -------.",
            options: {
                A: "quick",
                B: "quickest",
                C: "quicker",
                D: "quickly"
            },
            classification: "av1",
            testId: 8,
            vol: 3,
            correctAnswer: "D",
            translation: "총괄 관리자는 모조 보석류 온라인 주문에 더 빠르게 응대할 시스템을 시행했다.",
            explanation: "비교급 more와 함께 to부정사 to fill을 수식하는 부사 자리이므로, (D) quickly(빠르게)가 정답이다. 참고로, quick은 비격식체에서 부사로서 동사를 뒤에서 수식할 수 있는데, 그렇다 하더라도 (A) quick은 원급, (B) quickest는 최상급, (C) quicker는 비교급으로 more와 함께 쓰일 수 없으므로 오답이다."
        },
        {
            id: "v3-p5-t8-q125",
            questionNo: 125,
            text: "Quillet Motors has been working ------- the goal of reducing its factory emissions by 25 percent since last year.",
            options: {
                A: "after",
                B: "across",
                C: "opposite",
                D: "toward"
            },
            classification: "pr1",
            testId: 8,
            vol: 3,
            correctAnswer: "D",
            translation: "퀼렛 모터스는 작년부터 공장 배기가스를 25퍼센트 줄인다는 목표로 나아가고 있다.",
            explanation: "공장 배기가스를 줄이려는 목표(the goal of reducing its factory emissions)는 퀼렛 모터스가 지향하는 바이므로, '~를 향해'라는 의미의 (D) toward가 정답이다. work toward(s)는 고정된 표현으로 암기해 두면 시간을 단축할 수 있다."
        },
        {
            id: "v3-p5-t8-q126",
            questionNo: 126,
            text: "Gribson & Kim's ------- brand identity accurately conveys the company's image and values.",
            options: {
                A: "powers",
                B: "powered",
                C: "powerful",
                D: "powerfully"
            },
            classification: "a1",
            testId: 8,
            vol: 3,
            correctAnswer: "C",
            translation: "그립슨 앤 킴의 강력한 브랜드 정체성은 회사의 이미지와 가치를 정확하게 전달한다.",
            explanation: "소유격 Gribson & Kim's와 함께 주어인 brand identity를 수식하는 형용사 자리로, 브랜드 정체성의 특징을 나타내는 단어가 들어가야 한다. 따라서 '강력한'이라는 의미의 (C) powerful이 정답이다. 과거분사형 형용사인 (B) powered는 '전동의, 동력을 이용하는'이라는 뜻으로 문맥상 어색하며, (A) powers는 명사/동사, (D) powerfully는 부사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t8-q127",
            questionNo: 127,
            text: "The city council approved Remco's application to build a shopping center ------- opposition from local residents.",
            options: {
                A: "in spite of",
                B: "in order that",
                C: "even so",
                D: "on the contrary"
            },
            classification: "pr2",
            testId: 8,
            vol: 3,
            correctAnswer: "A",
            translation: "시 의회는 지역 주민들의 반대에도 불구하고 쇼핑센터 건립을 위한 렘코의 신청을 승인했다.",
            explanation: "명사 opposition을 목적어로 취하는 전치사 자리이므로, (A) in spite of(~에도 불구하고)가 정답이다. (B) in order that은 부사절 접속사로 뒤에 완전한 절이 와야 하고, (C) even so와 (D) on the contrary는 부사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t8-q128",
            questionNo: 128,
            text: "Marliet Marketing can help any business ------- its products through multimedia advertising packages.",
            options: {
                A: "promote",
                B: "promoted",
                C: "promotable",
                D: "promoter"
            },
            classification: "v2",
            testId: 8,
            vol: 3,
            correctAnswer: "A",
            translation: "말리엣 마케팅은 어떤 업체든 멀티미디어 광고 패키지를 통해 제품을 홍보하도록 도울 수 있다.",
            explanation: "「help + 목적어(any business) + 목적격 보어」 구조에서 목적격 보어에 해당하는 자리로, 뒤에 오는 명사구 its products를 목적어로 취한다. help의 목적격 보어로는 to부정사나 동사원형이 쓰이므로, (A) promote가 정답이다. (B) promoted는 동사/과거분사, (C) promotable은 형용사, (D) promoter는 명사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t8-q129",
            questionNo: 129,
            text: "Local reporters sought ------- with the department manager who found old property records in the city hall basement.",
            options: {
                A: "permits",
                B: "materials",
                C: "conditions",
                D: "interviews"
            },
            classification: "voc1",
            testId: 8,
            vol: 3,
            correctAnswer: "D",
            translation: "지역 기자들은 시청 지하실에서 오래된 부동산 기록을 찾아낸 부서장과의 인터뷰를 요청했다.",
            explanation: "빈칸은 sought의 목적어 자리로, 전치사구 with the department manager의 수식을 받는다. 따라서 지역 기자(Local reporters)가 부서장(the department manager)을 대상으로 요청할 수 있는 일을 나타내는 명사가 들어가야 하므로, '인터뷰'라는 의미의 (D) interviews가 정답이다."
        },
        {
            id: "v3-p5-t8-q130",
            questionNo: 130,
            text: "To appeal to younger consumers throughout Asia, the sportswear company is shifting its marketing tactics -------.",
            options: {
                A: "drama",
                B: "drastic",
                C: "drastically",
                D: "more drastic"
            },
            classification: "av1",
            testId: 8,
            vol: 3,
            correctAnswer: "C",
            translation: "그 스포츠웨어 업체는 아시아 전역의 젊은 소비자들을 매료시키기 위해 마케팅 전략을 크게 바꾸고 있다.",
            explanation: "the sportswear company가 주어, is shifting이 동사, its marketing tactics가 목적어인 완전한 절 뒤에서 변화(shift)의 정도를 강조하는 부사 자리이다. 따라서 (C) drastically(극적으로, 크게)가 정답이다. (A) drama는 명사, (B) drastic과 (D) more drastic은 형용사로 품사상 빈칸에 들어갈 수 없다."
        }
    ]
};
