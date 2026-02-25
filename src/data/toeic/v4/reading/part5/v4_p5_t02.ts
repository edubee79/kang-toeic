import { Part5TestSet } from './types';

export const test2Data: Part5TestSet = {
    "testId": 2,
    "vol": 4,
    "title": "Part 5 Real Test 2",
    "questions": [
        {
            "id": "v4-p5-t2-q101",
            "questionNo": 101,
            "text": "Before operating your handheld device, please _____ the enclosed cable to charge it.",
            "options": {
                "A": "plan",
                "B": "remain",
                "C": "use",
                "D": "finish"
            },
            "classification": "voc1",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "C",
            "translation": "휴대용 장치를 작동하기 전에 동봉된 케이블을 사용하여 충전하십시오.",
            "explanation": "빈칸은 주어가 없는 명령문에서 the enclosed cable을 목적어로 취하는 타동사 자리로, 그것(=your handheld device)을 충전하기 위해 '동봉된 케이블을 사용하라'는 내용이 되어야 하므로 '사용하다'라는 의미의 동사 (C) use가 정답이다. (A) plan은 '계획하다', (D) finish는 '끝내다'라는 의미로 문맥상 어울리지 않고, (B) remain은 '~인 채로 있다'라는 의미의 자동사로 목적어를 취하지 않는다."
        },
        {
            "id": "v4-p5-t2-q102",
            "questionNo": 102,
            "text": "Safile's new external hard drive can _____ store up to one terabyte of data.",
            "options": {
                "A": "secure",
                "B": "security",
                "C": "securely",
                "D": "secured"
            },
            "classification": "av1",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "C",
            "translation": "사파일의 새로운 외장 하드 드라이브는 최대 1테라바이트의 데이터를 안전하게 저장할 수 있다.",
            "explanation": "조동사 can과 동사원형 store 사이에서 동사를 수식하는 부사 자리이므로, '안전하게'라는 의미의 부사 (C) securely가 정답이다. (A) secure는 형용사/동사, (B) security는 명사, (D) secured는 과거분사이므로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            "id": "v4-p5-t2-q103",
            "questionNo": 103,
            "text": "Mr. Peterson will travel _____ the Tokyo office for the annual meeting.",
            "options": {
                "A": "to",
                "B": "through",
                "C": "in",
                "D": "over"
            },
            "classification": "pr1",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "A",
            "translation": "피터슨 씨는 연례 회의를 위해 도쿄 사무소로 출장을 갈 예정이다.",
            "explanation": "빈칸 앞에 이동을 의미하는 동사 travel이, 뒤에 장소를 나타내는 명사 the Tokyo office가 있다. '도쿄 사무소로 출장을 간다'는 내용이 되어야 적절하므로, 이동 방향을 나타내어 '~로[에]'를 뜻하는 전치사 (A) to가 정답이다."
        },
        {
            "id": "v4-p5-t2-q104",
            "questionNo": 104,
            "text": "Yong-Soo Cosmetics will not charge for items on back order until _____ have left our warehouse.",
            "options": {
                "A": "them",
                "B": "they",
                "C": "themselves",
                "D": "their"
            },
            "classification": "p1",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "B",
            "translation": "용수 화장품은 이월 주문품에 대해 상품이 창고에서 출고될 때까지 대금을 청구하지 않을 것입니다.",
            "explanation": "빈칸은 접속사 until이 이끄는 부사절에서 동사 have left의 주어 역할을 하는 자리이므로, 주격 대명사인 (B) they가 정답이다. (A) them과 (C) themselves는 목적어 역할을 하고, (D) their는 소유격으로 뒤에 명사가 있어야 하므로 답이 되지 않는다."
        },
        {
            "id": "v4-p5-t2-q105",
            "questionNo": 105,
            "text": "Our premium day tour takes visitors to historic sites _____ the Aprico River.",
            "options": {
                "A": "onto",
                "B": "since",
                "C": "inside",
                "D": "along"
            },
            "classification": "pr1",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "D",
            "translation": "자사의 프리미엄 데이 투어는 방문객들을 아프리코 강변을 따라 있는 유적지로 안내합니다.",
            "explanation": "빈칸 뒤 명사구 the Aprico River와 함께 historic sites를 수식하는 적절한 전치사를 고르는 문제이다. '아프리코 강변을 따라 있는 유적지'라는 문맥이므로 '~을 따라'라는 의미의 전치사 (D) along이 정답이다. (A) onto는 '~ (위)로', (B) since는 '~ 이후로', (C) inside는 '~ 안에'라는 의미로 문맥상 부적절하다."
        },
        {
            "id": "v4-p5-t2-q106",
            "questionNo": 106,
            "text": "Eighty percent of drivers surveyed said they would consider buying a vehicle that runs on _____.",
            "options": {
                "A": "electricity",
                "B": "electrically",
                "C": "electricians",
                "D": "electrify"
            },
            "classification": "n4",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "A",
            "translation": "설문에 응한 운전자의 80퍼센트가 전기로 움직이는 차량 구입을 고려하겠다고 말했다.",
            "explanation": "빈칸은 수단을 나타내는 전치사 on의 목적어 자리이므로 명사가 들어가야 한다. 명사 보기인 (A) electricity(전기)와 (C) electricians (전기 기사) 중에서 자동차를 움직이게 하는 동력이 될 수 있는 단어가 필요하므로 (A) electricity가 정답이다. (B) electrically는 부사, (D) electrify는 동사로 빈칸에 들어갈 수 없다."
        },
        {
            "id": "v4-p5-t2-q107",
            "questionNo": 107,
            "text": "Xinzhe Zu has _____ Petrin Engineering as the vice president of operations.",
            "options": {
                "A": "attached",
                "B": "resigned",
                "C": "joined",
                "D": "combined"
            },
            "classification": "voc1",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "C",
            "translation": "신저 주는 페트린 엔지니어링에 운영 부사장으로 입사했다.",
            "explanation": "Petrin Engineering을 목적어로 취하는 타동사 자리로, 빈칸 앞 조동사 has와 함께 '부사장으로 회사에 입사했다'는 내용이 되어야 자연스러우므로 동사 join (입사[가입]하다)의 과거분사형 (C) joined가 정답이다. (A)의 attach는 '첨부하다', (B)의 resign은 '(직·지위를) 사직하다', (D) combine은 '결합하다'라는 의미이다."
        },
        {
            "id": "v4-p5-t2-q108",
            "questionNo": 108,
            "text": "Next month, Barder House Books will be holding _____ third author's hour in Cleveland.",
            "options": {
                "A": "it",
                "B": "itself",
                "C": "its own",
                "D": "its"
            },
            "classification": "p1",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "D",
            "translation": "다음 달에 바더 하우스 북스는 클리블랜드에서 세 번째 작가의 시간을 주최할 예정이다.",
            "explanation": "명사구 third author's hour를 한정 수식하는 자리이다. 앞에서 명사구를 수식할 수 있는 인칭대명사는 소유격이고, 문맥상 '그것(=Barder House Books)의 세 번째 작가의 시간'이 적절하므로 (D) its가 정답이다. (C) its own에서 own은 소유격 뒤에서 소유 관계를 강조하는 형용사이므로 문맥상 답이 되기에 부적절하다."
        },
        {
            "id": "v4-p5-t2-q109",
            "questionNo": 109,
            "text": "Chester's Tiles _____ expanded to a second location in Turnington.",
            "options": {
                "A": "severely",
                "B": "usually",
                "C": "recently",
                "D": "exactly"
            },
            "classification": "voc1",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "C",
            "translation": "체스터스 타일스는 최근 터닝턴에 두 번째 지점으로 확장했다.",
            "explanation": "동사 expanded를 수식하여 '최근 두 번째 지점으로 확장했다'는 내용이 되어야 자연스러우므로 '최근에'를 뜻하는 (C) recently가 정답이다. (A) severely는 '혹독하게', (B) usually는 '보통', (D) exactly는 '정확하게'의 의미이다."
        },
        {
            "id": "v4-p5-t2-q110",
            "questionNo": 110,
            "text": "Tabrino's has _____ increased the number of almonds in the Nut Medley snack pack.",
            "options": {
                "A": "significant",
                "B": "significance",
                "C": "signifies",
                "D": "significantly"
            },
            "classification": "av1",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "D",
            "translation": "타브리노스는 넛 메들리 스낵팩의 아몬드 수를 크게 늘렸다.",
            "explanation": "빈칸은 동사구 has increased를 수식하는 부사 자리이므로 '크게, 상당히'를 의미하는 (D) significantly가 정답이다. (A) significant는 형용사, (B) significance는 명사, (C) signifies는 동사이므로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            "id": "v4-p5-t2-q111",
            "questionNo": 111,
            "text": "_____ she travels, Jacintha Flores collects samples of local fabrics and patterns.",
            "options": {
                "A": "Wherever",
                "B": "In addition to",
                "C": "Either",
                "D": "In contrast to"
            },
            "classification": "c3",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "A",
            "translation": "저신다 플로레스는 여행하는 곳 어디에서나 현지 직물과 패턴 견본을 수집한다.",
            "explanation": "빈칸 뒤에 주어 she와 동사 travels를 갖춘 완전한 절이 왔으므로 부사절 접속사가 들어가야 한다. 따라서 '어디에서나, 어디든지'를 뜻하는 부사절 접속사 (A) Wherever가 정답이다. (B) In addition to와 (D) In contrast to는 전치사로 뒤에 명사(구)가 나와야 하고, (C) Either는 or와 함께 쓰이는 상관접속사로 답이 되지 않는다."
        },
        {
            "id": "v4-p5-t2-q112",
            "questionNo": 112,
            "text": "Most picture _____ at Glowing Photo Lab go on sale at 3:00 P.M. today.",
            "options": {
                "A": "framer",
                "B": "framing",
                "C": "framed",
                "D": "frames"
            },
            "classification": "n3",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "D",
            "translation": "글로잉 포토 랩의 사진 액자 대부분이 오늘 오후 3시에 할인 판매된다.",
            "explanation": "문장의 동사가 복수동사 go이므로, 빈칸에는 picture와 복합명사를 이루어 주어 역할을 하는 복수명사가 들어가야 한다. 따라서 정답은 '액자, 틀'을 뜻하는 복수명사인 (D) frames이다. (A) framer(액자 세공사)와 (B) framing(구성)은 단수명사, (C) framed는 동사/과거분사이므로 답이 될 수 없다."
        },
        {
            "id": "v4-p5-t2-q113",
            "questionNo": 113,
            "text": "All students in the business management class hold _____ college degrees.",
            "options": {
                "A": "late",
                "B": "developed",
                "C": "advanced",
                "D": "elated"
            },
            "classification": "voc1",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "C",
            "translation": "경영학 수업의 학생들은 모두 고급 대학 학위를 소지하고 있다.",
            "explanation": "경영학 수업 학생들의 학위(college degrees) 수준을 나타내는 형용사가 필요하다. 따라서 일반 학사보다 높은 석박사 등의 고급 학위를 나타내도록 '고급의, 상급의'라는 뜻의 형용사 (C) advanced가 정답이다. (A) late는 '늦은', (B) developed는 '발달한', (D) elated는 '의기양양한'이라는 의미로 문맥상 어울리지 않는다."
        },
        {
            "id": "v4-p5-t2-q114",
            "questionNo": 114,
            "text": "We hired Noah Wan of Shengyao Accounting Ltd. _____ our company's financial assets.",
            "options": {
                "A": "to evaluate",
                "B": "to be evaluated",
                "C": "will be evaluated",
                "D": "evaluate"
            },
            "classification": "i3",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "A",
            "translation": "우리는 우리 회사의 금융 자산을 평가하기 위해 성야오 회계법인의 노아 완을 고용했다.",
            "explanation": "빈칸 앞에 완전한 절(We hired Noah Wan of Shengyao Accounting Ltd.)이 있고 뒤에 명사구가 있으므로, 빈칸에는 뒤에 나온 명사구 our company's financial assets를 목적어로 취하면서 앞에 나온 완전한 절을 수식할 수 있는 준동사가 들어가야 한다. 따라서 능동형 to부정사 (A) to evaluate가 정답이다. 수동형 (B) to be evaluated는 목적어를 취할 수 없고, (C) will be evaluated와 (D) evaluate는 동사이므로 빈칸에 들어갈 수 없다."
        },
        {
            "id": "v4-p5-t2-q115",
            "questionNo": 115,
            "text": "Ms. Charisse is taking on a new account _____ she finishes the Morrison project.",
            "options": {
                "A": "with",
                "B": "going",
                "C": "after",
                "D": "between"
            },
            "classification": "c3",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "C",
            "translation": "차리스 씨는 모리슨 프로젝트를 마무리한 뒤 새로운 고객을 맡을 예정이다.",
            "explanation": "빈칸은 두 개의 완전한 절을 이어주는 접속사 자리이다. 따라서 보기 중에 유일한 접속사로 '~한 뒤에'라는 의미를 나타내는 (C) after가 정답이다. (A) with와 (D) between은 전치사, (B) going은 현재분사이므로 절을 연결할 수 없다."
        },
        {
            "id": "v4-p5-t2-q116",
            "questionNo": 116,
            "text": "Cormet Motors' profits are _____ this year than last year.",
            "options": {
                "A": "higher",
                "B": "high",
                "C": "highly",
                "D": "highest"
            },
            "classification": "com1",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "A",
            "translation": "올해 코멧 모터스의 수익은 작년보다 높다.",
            "explanation": "빈칸은 주어 Cormet Motors' profits를 보충 설명하는 주격 보어 자리이고, 뒤에 than과 함께 this year와 last year가 비교되고 있으므로 비교급 형용사 (A) higher가 정답이다. (B) high는 원급 형용사, (C) highly는 부사, (D) highest는 최상급 형용사이므로 빈칸에 들어갈 수 없다."
        },
        {
            "id": "v4-p5-t2-q117",
            "questionNo": 117,
            "text": "In its _____ advertising campaign, Jaymor Tools demonstrates how reliable its products are.",
            "options": {
                "A": "current",
                "B": "relative",
                "C": "spacious",
                "D": "collected"
            },
            "classification": "voc1",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "A",
            "translation": "현재 광고 캠페인에서 제이머 툴스는 자사 제품이 얼마나 믿을 만한지를 보여 준다.",
            "explanation": "빈칸 뒤의 명사구 advertising campaign을 수식하기에 적절한 형용사를 고르는 문제이다, 빈칸 뒤 절에서 현재 시제로 광고 내용을 설명하고 있으므로 '현재 (진행 중인) 광고 캠페인에서'라는 의미가 되어야 가장 적절하므로, '현재의'라는 뜻의 형용사 (A) current가 정답이다. (B) relative는 '상대적인', (C) spacious는 '널찍한', (D) collected는 '수집된'이라는 의미이다."
        },
        {
            "id": "v4-p5-t2-q118",
            "questionNo": 118,
            "text": "Remember to submit receipts for reimbursement _____ returning from a business trip.",
            "options": {
                "A": "such as",
                "B": "when",
                "C": "then",
                "D": "within"
            },
            "classification": "c5",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "B",
            "translation": "출장에서 돌아오면 환급을 위해 잊지 말고 영수증을 제출하십시오.",
            "explanation": "빈칸 앞에 동사 Remember와 목적어 to submit receipts for reimbursement를 갖춘 명령문 형태의 완전한 절이 있으므로, returning from a business trip은 분사구문 또는 동명사구로 볼 수 있다. 문맥상 '출장에서 돌아오면 영수증을 제출하라'는 내용이 적절하므로 분사구문을 이끄는 부사절 접속사 (B) when(~하면, ~할 때)이 정답이다. returning을 동명사로 볼 경우, 전치사도 빈칸에 들어갈 수 있지만 (A) such as(~와 같은)와 (D) within(~ 이내에)은 문맥상 적절하지 않다. 부사 (C) then(그리고 나서) 또한 분사 returning을 수식하기에 적절하지 않다."
        },
        {
            "id": "v4-p5-t2-q119",
            "questionNo": 119,
            "text": "Patrons will be able to access Westside Library's _____ acquired collection of books on Tuesday.",
            "options": {
                "A": "instantly",
                "B": "newly",
                "C": "early",
                "D": "naturally"
            },
            "classification": "voc1",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "B",
            "translation": "이용객들은 화요일에 웨스트사이드 도서관에 새로 입수된 장서를 이용할 수 있을 것입니다.",
            "explanation": "빈칸 뒤 형용사 acquired를 수식하기에 적절한 부사를 고르는 문제이다. 앞으로 이용할 수 있게 될 도서관 장서에 관한 내용이므로 '새로 입수된 도서'라는 의미가 되어야 적절하다. 따라서 '새로, 최근에'라는 뜻의 (B) newly가 정답이다. (A) instantly는 '즉시', (C) early는 '일찍', (D) naturally는 '자연스럽게'라는 의미로 문맥상 적절하지 않다."
        },
        {
            "id": "v4-p5-t2-q120",
            "questionNo": 120,
            "text": "Please _____ any questions about time sheets to Tabitha Jones in the payroll department.",
            "options": {
                "A": "direction",
                "B": "directive",
                "C": "directed",
                "D": "direct"
            },
            "classification": "v9",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "D",
            "translation": "근무 시간 기록표에 관한 모든 질문은 급여 지급 부서의 타비사 존스에게 보내 주십시오.",
            "explanation": "주어가 생략된 채 Please로 시작하는 명령문에서 동사가 보이지 않으므로 빈칸은 동사 자리이다. 따라서 동사원형 (D) direct(보내다)가 정답이다. 과거형 (C) directed는 명령문의 동사로 쓰일 수 없다."
        },
        {
            "id": "v4-p5-t2-q121",
            "questionNo": 121,
            "text": "Before signing a delivery _____, be sure to double-check that all the items ordered are in the shipment.",
            "options": {
                "A": "decision",
                "B": "announcement",
                "C": "receipt",
                "D": "limit"
            },
            "classification": "n3",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "C",
            "translation": "배송 영수증에 서명하기 전에, 주문한 모든 상품이 배송품에 포함되어 있는지 다시 확인해 주십시오.",
            "explanation": "동명사 signing의 목적어 역할을 하는 명사 자리로, 서명할(sign) 수 있는 대상인 동시에 빈칸 앞의 명사 delivery와 함께 자연스러운 복합명사를 만들 수 있어야 한다. '배송 영수증에 서명하기 전에 배송품을 다시 확인하라'는 내용이 적절하므로 '영수증'을 뜻하는 (C) receipt가 정답이다. (A) decision은 '결정', (B) announcement는 '발표, 고지', (D) limit는 '제한'의 의미이다."
        },
        {
            "id": "v4-p5-t2-q122",
            "questionNo": 122,
            "text": "Funds have been added to the budget for expenses _____ with the new building.",
            "options": {
                "A": "associated",
                "B": "association",
                "C": "associate",
                "D": "associates"
            },
            "classification": "pa2",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "A",
            "translation": "신축 건물과 관련된 비용을 위해 자금이 예산에 추가되었다.",
            "explanation": "빈칸 앞에 완전한 절(Funds have been added for expenses)이 있으므로 빈칸에는 전치사구 with the new building과 함께 명사 expenses를 수식하는 말이 들어가야 한다. 비용은 신축 건물과 관련된 것이므로, 전치사 with와 함께 쓰여 '~와 관련된'이라는 수동의 의미를 나타내는 과거분사 (A) associated가 정답이다. '협회, 제휴'를 뜻하는 명사 (B) association은 빈칸 앞의 expenses와 복합명사를 이루기에 적절하지 않고, 문장에 이미 동사 have been added가 있으므로 동사 (C) associate와 (D) associates도 답이 되지 않는다. 참고로, associate는 형용사(제휴한)와 명사(동료)로도 쓰인다."
        },
        {
            "id": "v4-p5-t2-q123",
            "questionNo": 123,
            "text": "Ms. Bernard _____ that a deadline was approaching, so she requested some assistance.",
            "options": {
                "A": "noticed",
                "B": "obscured",
                "C": "withdrew",
                "D": "appeared"
            },
            "classification": "voc1",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "A",
            "translation": "버나드 씨는 마감일이 다가오고 있다는 것을 알고서 지원을 요청했다.",
            "explanation": "빈칸 뒤 that절을 목적어로 취하는 동사 자리로, '마감일이 다가오고 있다는 것을 알았다'는 의미가 되어야 뒤에 이어지는 '그래서 도움을 요청했다'는 내용과 자연스럽게 연결된다. 따라서 동사 notice(알아차리다, 인지하다)의 과거형 (A) noticed가 정답이다. (B)의 obscure는 '모호하게 하다', (C)의 withdraw는 '철회하다', (D)의 appear는 '나타나다'라는 의미이다."
        },
        {
            "id": "v4-p5-t2-q124",
            "questionNo": 124,
            "text": "Mr. Moscowitz is _____ that Dr. Tanaka will agree to present the keynote speech at this year's conference.",
            "options": {
                "A": "hopes",
                "B": "hoped",
                "C": "hopeful",
                "D": "hopefully"
            },
            "classification": "a2",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "C",
            "translation": "모스코비츠 씨는 타나카 박사가 올해 콘퍼런스에서 기조연설을 하는 데에 동의할 것으로 기대하고 있다.",
            "explanation": "빈칸은 be동사의 보어 자리로, 빈칸 뒤에 온 that절과 함께 쓸 수 있는 형용사가 와야 한다. 따라서 'that절의 내용을 기대한다'는 의미를 나타내는 형용사 (C) hopeful(기대하는)이 정답이다. (A) hopes는 동사, (D) hopefully는 부사이므로 품사상 빈칸에 들어갈 수 없다. 과거분사 (B) hoped는 be동사 뒤에 들어가면 수동태가 되므로 that절을 연결할 수 없고, 의미상으로도 적절하지 않다."
        },
        {
            "id": "v4-p5-t2-q125",
            "questionNo": 125,
            "text": "Two Australian companies are developing new smartphones, but it is unclear _____ phone will become available first.",
            "options": {
                "A": "if",
                "B": "which",
                "C": "before",
                "D": "because"
            },
            "classification": "nc3",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "B",
            "translation": "오스트레일리아의 두 회사가 새로운 스마트폰을 개발하고 있지만, 어느 스마트폰이 먼저 출시될지는 불확실하다.",
            "explanation": "빈칸에는 가주어 it의 진주어 역할을 하는 명사절을 이끌 수 있는 단어가 들어가야 한다. 빈칸 뒤의 명사 phone을 수식하면서 명사절을 이끌어 '어느 스마트폰이 먼저 출시될지'라는 의미를 나타내는 의문형용사 (B) which가 정답이다. (A) if도 명사절 접속사로서 진주어 자리에 쓰일 수 있지만 명사 phone을 수식할 수 없으며, (C) before와 (D) because는 부사절 접속사이므로 답이 될 수 없다."
        },
        {
            "id": "v4-p5-t2-q126",
            "questionNo": 126,
            "text": "Corners Gym offers its members a free lesson in how to use _____ properly.",
            "options": {
                "A": "weighs",
                "B": "weights",
                "C": "weighty",
                "D": "weighed"
            },
            "classification": "n1",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "B",
            "translation": "코너스 짐은 회원들에게 웨이트를 제대로 사용하는 법에 대한 무료 수업을 제공한다.",
            "explanation": "전치사 in의 목적어 역할을 하는 「how+to부정사」구문으로, 빈칸은 to부정사 to use의 목적어 역할을 하는 명사 자리이다. 따라서 '웨이트, 역기'를 뜻하는 명사 (B) weights가 정답이다. (A) weighs는 동사, (C) weighty는 형용사, (D) weighed는 동사/과거분사이므로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            "id": "v4-p5-t2-q127",
            "questionNo": 127,
            "text": "_____ the rules, overnight parking is not permitted at the clubhouse facility.",
            "options": {
                "A": "Prior to",
                "B": "Except for",
                "C": "Instead of",
                "D": "According to"
            },
            "classification": "pr5",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "D",
            "translation": "규정에 따라 클럽하우스 시설에서는 야간 주차가 허용되지 않습니다.",
            "explanation": "뒤의 명사 the rules를 목적어로 취해 '규정에 따라 야간 주차가 허용되지 않는다'는 의미가 되어야 자연스러우므로 '~에 따라'를 뜻하는 (D) According to가 정답이다. (A) Prior to는 '~에 앞서', (B) Except for는 '~을 제외하고', (C) Instead of는 '~ 대신에'라는 의미이다."
        },
        {
            "id": "v4-p5-t2-q128",
            "questionNo": 128,
            "text": "Once everyone _____, we can begin the conference call.",
            "options": {
                "A": "arrived",
                "B": "is arriving",
                "C": "to arrive",
                "D": "has arrived"
            },
            "classification": "v4",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "D",
            "translation": "모두 도착하면 전화 회의를 시작할 수 있습니다.",
            "explanation": "Once가 이끄는 부사절의 주어 everyone 뒤에 동사가 없으므로 빈칸은 동사 자리이다. 주절에서 전화 회의를 시작할 수 있다(can begin)는 것으로 보아 미래의 일이고, 회의를 시작하는 미래의 특정 시점까지 완료될 일을 나타내야 하므로 미래완료 시제 will have arrived가 들어가야 하지만, Once가 '~하자마자, 일단 ~하면'이라는 뜻으로 시간 부사절을 이끌고 있으므로 미래완료 대신 현재완료 시제를 쓴다. 따라서 (D) has arrived가 정답이다. (B) is arriving도 시간 부사절에서 미래를 나타낼 수 있지만 완료의 의미가 아니므로 오답이다."
        },
        {
            "id": "v4-p5-t2-q129",
            "questionNo": 129,
            "text": "Each summer a motivational video that highlights the past year's _____ is shown to all company employees.",
            "options": {
                "A": "preferences",
                "B": "accomplishments",
                "C": "communications",
                "D": "uncertainties"
            },
            "classification": "voc1",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "B",
            "translation": "매년 여름 지난 한 해의 성과를 강조하는 동기부여 영상이 회사의 전 직원에게 공개된다.",
            "explanation": "빈칸은 주어 a motivational video와 동사 is shown 사이에서 주어를 수식하는 관계사절의 동사 highlights의 목적어 자리이다. 동기부여 영상을 수식하는 내용이 되어야 하므로 '지난해의 성과를 강조한다'는 의미가 되어야 적절하다. 따라서 '성과, 업적'을 뜻하는 (B) accomplishments가 정답이다. (A)의 preference는 '선호(도)', (C)의 communication은 '의사소통', (D)의 uncertainty는 '불확실성'이라는 의미이다."
        },
        {
            "id": "v4-p5-t2-q130",
            "questionNo": 130,
            "text": "Employees who wish to attend the retirement dinner _____ Ms. Howell's 30 years of service should contact Mr. Lee.",
            "options": {
                "A": "honor",
                "B": "to honor",
                "C": "will honor",
                "D": "will be honored"
            },
            "classification": "i2",
            "testId": 2,
            "vol": 4,
            "correctAnswer": "B",
            "translation": "하월 씨의 30년 근무를 기념하는 퇴직 만찬에 참석을 희망하는 직원은 이 씨에게 연락해 주시기 바랍니다.",
            "explanation": "주어 Employees와 동사 should contact 사이에서 주어를 수식하는 관계사절에 빈칸이 있다. 빈칸 앞에 완전한 절(who wish to attend the retirement dinner)이 있고 뒤에 명사구(Ms. Howell's 30 years of service)가 있으므로 빈칸에는 또 다른 동사가 들어갈 수 없다. 따라서 Ms. Howell's 30 years of service를 목적어로 취하면서 the retirement dinner를 수식하는 형용사적 역할의 to부정사 (B) to honor가 정답이다."
        }
    ]
};
