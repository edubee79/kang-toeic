import { Part5TestSet } from './types';

export const test3Data: Part5TestSet = {
    "testId": 3,
    "vol": 4,
    "title": "Part 5 Real Test 3",
    "questions": [
        {
            "id": "v4-p5-t3-q101",
            "questionNo": 101,
            "text": "_____ your order is being processed, please call customer service with any questions.",
            "options": {
                "A": "Still",
                "B": "Either",
                "C": "While",
                "D": "Also"
            },
            "classification": "c3",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "C",
            "translation": "주문이 처리되는 동안 문의사항이 있으면 고객 서비스로 전화 주십시오.",
            "explanation": "주어(your order)와 동사(is being processed)를 갖춘 완전한 절을 콤마 뒤 주절에 연결하는 자리이므로, 빈칸에는 부사절 접속사가 들어가야 한다. 따라서 '~하는 동안'이라는 의미의 접속사 (C) While이 정답이다. (A) Still, (D) Also는 부사, (B) Either는 or와 함께 쓰이는 상관접속사로 빈칸에 들어갈 수 없다."
        },
        {
            "id": "v4-p5-t3-q102",
            "questionNo": 102,
            "text": "ABC Truck Supplies has the _____ selection of mufflers in the state.",
            "options": {
                "A": "natural",
                "B": "widest",
                "C": "overall",
                "D": "positive"
            },
            "classification": "com1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "B",
            "translation": "ABC 트럭 서플라이즈는 주 전역에서 가장 다양한 소음기를 보유하고 있다.",
            "explanation": "'다양한, 엄선된'이라는 의미의 a selection of는 형용사 wide와 함께 '매우 다양한'의 뜻으로 자주 쓰인다. 따라서 빈칸 앞 정관사 the와 함께 wide의 최상급으로 '가장 다양한 소음기'라는 의미가 자연스러운 (B) widest가 정답이다. (A) natural은 '자연의', (C) overall은 '전반적인', (D) positive는 '긍정적인'이라는 의미로 문맥상 적절하지 않다."
        },
        {
            "id": "v4-p5-t3-q103",
            "questionNo": 103,
            "text": "Sharswood Landscaping has received dozens of five-star _____ for its work.",
            "options": {
                "A": "reviews",
                "B": "reviewer",
                "C": "reviewed",
                "D": "reviewing"
            },
            "classification": "n1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "A",
            "translation": "샤스우드 조경은 작업에 대해 별 다섯 개짜리 평가 수십 개를 받았다.",
            "explanation": "전치사 of의 목적어 자리로 형용사 five-star(별 다섯 개짜리의)의 수식을 받아 '별 다섯 개짜리 평가'라는 의미가 되어야 하므로 '후기, 평가'라는 뜻의 명사 (A) reviews가 정답이다. 참고로, 빈칸 앞 dozens of는 '수십 개의'라는 의미로 뒤에 복수명사를 수식하기 때문에 명사 (B) reviewer(비평가, 검열자)는 문맥상 어울리지 않을 뿐 아니라 dozens of와 수 일치도 되지 않는다. (C) reviewed는 동사/과거분사, (D) reviewing은 동명사/현재분사로 구조상 빈칸에 적절하지 않다."
        },
        {
            "id": "v4-p5-t3-q104",
            "questionNo": 104,
            "text": "Dr. Cho will visit the Teledarr Lab during the annual open house, since _____ may not have another chance to see it.",
            "options": {
                "A": "hers",
                "B": "she",
                "C": "her",
                "D": "herself"
            },
            "classification": "p1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "B",
            "translation": "조 박사는 텔레데어 연구소를 볼 기회가 다시없을 수도 있기 때문에 일 년에 한번 있는 공개일 동안 연구소를 방문할 예정이다.",
            "explanation": "빈칸은 접속사 since가 이끄는 부사절의 주어 자리이므로 주격 인칭대명사 (B) she가 정답이다. 소유대명사인 (A) hers도 주어 자리에 들어갈 수 있지만, '그녀의 것'이라는 뜻으로 문맥상 적절하지 않고, (C) her는 목적격/소유격, (D) herself는 재귀대명사로 주어 자리에 들어갈 수 없으므로 오답이다."
        },
        {
            "id": "v4-p5-t3-q105",
            "questionNo": 105,
            "text": "Dorn Department Store decided to _____ its already large selection of housewares.",
            "options": {
                "A": "create",
                "B": "enforce",
                "C": "apply",
                "D": "expand"
            },
            "classification": "voc1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "D",
            "translation": "돈 백화점은 이미 다양한 가정용품을 확대하기로 결정했다.",
            "explanation": "동사 decided의 목적어 역할을 하는 to부정사에 들어갈 적절한 동사 어휘를 고르는 문제이다. 문맥상 '이미 다양한 제품군을 확대하기로 결정했다'라는 내용이 되어야 적절하므로 '확대하다, 확장하다'라는 뜻의 (D) expand가 정답이다. (A) create는 '만들다', (B) enforce는 '시행하다', (C) apply는 '적용하다'라는 의미이다."
        },
        {
            "id": "v4-p5-t3-q106",
            "questionNo": 106,
            "text": "We _____ that you bring a portfolio of work samples to the interview.",
            "options": {
                "A": "was asking",
                "B": "having asked",
                "C": "ask",
                "D": "asks"
            },
            "classification": "v1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "C",
            "translation": "면접에 작업 샘플 포트폴리오를 지참해 주시기 바랍니다.",
            "explanation": "We가 주어, 빈칸 뒤 that절이 목적어인 문장에 동사가 필요하므로 빈칸은 동사 자리이다. 복수주어 We와 수 일치하는 복수동사가 와야 하므로 (C) ask가 정답이다. (A) was asking과 (D) asks는 3인칭 단수동사로 We와 수 일치되지 않고, (B) having asked는 동명사/현재분사로 문장의 동사 역할을 할 수 없다."
        },
        {
            "id": "v4-p5-t3-q107",
            "questionNo": 107,
            "text": "Members of the Bold Stone Farm Store receive _____ discounts on all purchases.",
            "options": {
                "A": "depth",
                "B": "deepen",
                "C": "deep",
                "D": "deeply"
            },
            "classification": "a1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "C",
            "translation": "볼드스톤팜 스토어 회원은 모든 구매에 대해 큰 할인을 받는다.",
            "explanation": "빈칸은 동사 receive의 목적어 역할을 하는 명사 discounts를 수식하는 형용사 자리이다. 따라서 깊은'이라는 의미의 형용사 (C) deep이 정답이다. (A) depth는 명사, (B) deepen은 동사, (D) deeply는 부사이므로 답이 될 수 없다."
        },
        {
            "id": "v4-p5-t3-q108",
            "questionNo": 108,
            "text": "If your plans change, please contact us at least 24 hours before the time of your _____.",
            "options": {
                "A": "reserved",
                "B": "reservation",
                "C": "reservable",
                "D": "reserve"
            },
            "classification": "n1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "B",
            "translation": "계획이 변경될 경우, 늦어도 예약 시간 24시간 전에는 연락 주시기 바랍니다.",
            "explanation": "전치사 of의 목적어로 소유격(your) 뒤에 올 명사 자리이다. 문맥상 '예약 시간'이라는 의미가 되어야 자연스러우므로 명사 (B) reservation이 정답이다."
        },
        {
            "id": "v4-p5-t3-q109",
            "questionNo": 109,
            "text": "Hold the tomato seedling gently by the stem in order to avoid harming ------- roots.",
            "options": {
                "A": "its",
                "B": "at",
                "C": "that",
                "D": "in"
            },
            "classification": "p1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "A",
            "translation": "뿌리가 다치지 않게 토마토 묘목을 줄기 쪽으로 살며시 잡으세요.",
            "explanation": "빈칸은 명사 roots를 수식하는 한정사 자리이다. 앞의 단수 명사 tomato seedling을 가리키는 소유격 인칭대명사가 필요하므로 (A) its가 정답이다."
        },
        {
            "id": "v4-p5-t3-q110",
            "questionNo": 110,
            "text": "At the registration table, be sure to collect your name tag _____ entering the conference.",
            "options": {
                "A": "very",
                "B": "often",
                "C": "always",
                "D": "before"
            },
            "classification": "pr1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "D",
            "translation": "회의에 입장하기 전에 등록 테이블에서 반드시 이름표를 수령하세요.",
            "explanation": "entering과 함께 쓰여 '~하기 전에'라는 의미를 나타내는 것이 적절하므로 전치사 (D) before가 정답이다."
        },
        {
            "id": "v4-p5-t3-q111",
            "questionNo": 111,
            "text": "Maihama vehicles include an extended ------- to cover engine repairs.",
            "options": {
                "A": "record",
                "B": "operation",
                "C": "budget",
                "D": "warranty"
            },
            "classification": "n1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "D",
            "translation": "마이하마 차량에는 엔진 수리를 보장하는 연장된 보증이 포함되어 있다.",
            "explanation": "문맥상 엔진 수리 등을 보장하는 서비스는 '보증'이 적절하므로 (D) warranty가 정답이다."
        },
        {
            "id": "v4-p5-t3-q112",
            "questionNo": 112,
            "text": "The hotel's new Web site features an _____ collection of high-quality images.",
            "options": {
                "A": "absolute",
                "B": "efficient",
                "C": "impressive",
                "D": "undefeated"
            },
            "classification": "a1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "C",
            "translation": "호텔의 새로운 웹사이트는 인상적인 고품질 이미지 컬렉션이 특징이다.",
            "explanation": "명사 collection을 꾸며주는 형용사 자리로 '인상적인'이라는 뜻의 (C) impressive가 정답이다."
        },
        {
            "id": "v4-p5-t3-q113",
            "questionNo": 113,
            "text": "On behalf of everyone at Uniontown Bank, we _____ thank you for your continued patronage.",
            "options": {
                "A": "deservedly",
                "B": "commonly",
                "C": "sincerely",
                "D": "perfectly"
            },
            "classification": "av1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "C",
            "translation": "유니언타운 은행의 모든 임직원을 대표하여, 귀하의 지속적인 이용에 진심으로 감사드립니다.",
            "explanation": "동사 thank를 수식하는 부사 자리로 '진심으로'라는 뜻의 (C) sincerely가 정답이다."
        },
        {
            "id": "v4-p5-t3-q114",
            "questionNo": 114,
            "text": "Fragile equipment must be stored in a secure location so that nothing is _____ damaged.",
            "options": {
                "A": "accident",
                "B": "accidents",
                "C": "accidental",
                "D": "accidentally"
            },
            "classification": "av1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "D",
            "translation": "깨지기 쉬운 장비는 실수로 손상되지 않도록 안전한 장소에 보관되어야 한다.",
            "explanation": "be동사와 과거분사 사이에서 동사를 수식하는 부사 자리이므로 (D) accidentally가 정답이다."
        },
        {
            "id": "v4-p5-t3-q115",
            "questionNo": 115,
            "text": "Ms. Sampson will not arrive at the convention ------- after our team's presentation.",
            "options": {
                "A": "until",
                "B": "lately",
                "C": "from",
                "D": "when"
            },
            "classification": "pr1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "A",
            "translation": "샘슨 씨는 우리 팀의 발표가 끝난 이후에야 컨벤션에 도착할 것이다.",
            "explanation": "문맥상 '발표 이후에야 도착할 것이다'라는 의미가 되어야 하므로 not과 함께 쓰여 '~할 때까지는 ...하지 않다'를 뜻하는 (A) until이 정답이다."
        },
        {
            "id": "v4-p5-t3-q116",
            "questionNo": 116,
            "text": "The community picnic will be held _____ the park behind the Seltzer Public Library.",
            "options": {
                "A": "in",
                "B": "all",
                "C": "for",
                "D": "here"
            },
            "classification": "pr1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "A",
            "translation": "지역 사회 피크닉은 셀처 공공 도서관 뒤에 있는 공원에서 열릴 예정이다.",
            "explanation": "장소 명사 the park와 어울리는 전치사 (A) in이 정답이다."
        },
        {
            "id": "v4-p5-t3-q117",
            "questionNo": 117,
            "text": "The new hires _____ for an orientation on May 10 at 9:00 A.M.",
            "options": {
                "A": "to be gathering",
                "B": "will gather",
                "C": "gathering",
                "D": "to gather"
            },
            "classification": "v1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "B",
            "translation": "신입 사원들은 5월 10일 오전 9시에 오리엔테이션을 위해 모일 예정이다.",
            "explanation": "주어의 본동사 자리이므로 미래 시제를 나타내는 (B) will gather가 정답이다."
        },
        {
            "id": "v4-p5-t3-q118",
            "questionNo": 118,
            "text": "When Mr. Young approached the desk, the receptionist ------- offered him a seat in the waiting room.",
            "options": {
                "A": "politely",
                "B": "polite",
                "C": "politeness",
                "D": "politest"
            },
            "classification": "av1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "A",
            "translation": "영 씨가 데스크로 다가가자 접수 담당자는 정중하게 대기실 자리를 권했다.",
            "explanation": "동사 offered를 수식하는 부사 자리이므로 (A) politely가 정답이다."
        },
        {
            "id": "v4-p5-t3-q119",
            "questionNo": 119,
            "text": "Members of the Marvale marketing team claimed that _____ was the best design for the new corporate logo.",
            "options": {
                "A": "they",
                "B": "them",
                "C": "theirs",
                "D": "their"
            },
            "classification": "p1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "C",
            "translation": "마베일의 마케팅 팀원들은 그들의 것이 새로운 회사 로고를 위한 최고의 디자인이라고 주장했다.",
            "explanation": "that절의 주어 자리이며 문맥상 '그들의 것'을 뜻하는 소유대명사 (C) theirs가 정답이다."
        },
        {
            "id": "v4-p5-t3-q120",
            "questionNo": 120,
            "text": "The new Kitsuna video camera is currently on sale for $375, not _____ tax.",
            "options": {
                "A": "excepting",
                "B": "alongside",
                "C": "within",
                "D": "including"
            },
            "classification": "pr1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "D",
            "translation": "신형 키츠나 비디오카메라는 현재 세금을 포함하지 않고 375달러에 판매되고 있다.",
            "explanation": "'세금을 포함하여'라는 뜻인 (D) including이 정답이며, 앞에 not이 있어 '포함하지 않고'가 된다."
        },
        {
            "id": "v4-p5-t3-q121",
            "questionNo": 121,
            "text": "All associates are _____ to follow the standard operating procedures outlined in the handbook.",
            "options": {
                "A": "concerned",
                "B": "tended",
                "C": "maintained",
                "D": "expected"
            },
            "classification": "v1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "D",
            "translation": "모든 직원들은 안내서에 기술된 표준 운영 절차를 따라야 한다.",
            "explanation": "'be expected to' 구문으로 '~할 것으로 예상(기대)되다'는 의미의 (D) expected가 정답이다."
        },
        {
            "id": "v4-p5-t3-q122",
            "questionNo": 122,
            "text": "This month Framley Publishing House is embarking on its _____ expansion so far.",
            "options": {
                "A": "ambitiously",
                "B": "most ambitiously",
                "C": "ambition",
                "D": "most ambitious"
            },
            "classification": "com1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "D",
            "translation": "이번 달 프램리 출판사는 지금까지 했던 것 중 가장 야심 찬 확장 사업을 착수할 것이다.",
            "explanation": "명사 expansion을 꾸며주는 형용사의 최상급인 (D) most ambitious가 정답이다."
        },
        {
            "id": "v4-p5-t3-q123",
            "questionNo": 123,
            "text": "After months of collaboration, Matricks Technology's software developers _____ released a top-quality product.",
            "options": {
                "A": "profoundly",
                "B": "overly",
                "C": "finally",
                "D": "intensely"
            },
            "classification": "av1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "C",
            "translation": "몇 달간의 협업 끝에 매트릭스 테크놀로지의 소프트웨어 개발자들은 마침내 최고 품질의 제품을 출시했다.",
            "explanation": "동사 released를 수식하는 부사로 '마침내'라는 뜻의 (C) finally가 정답이다."
        },
        {
            "id": "v4-p5-t3-q124",
            "questionNo": 124,
            "text": "Tickets are valid for one-time access and do not allow for _____ into the venue.",
            "options": {
                "A": "duplication",
                "B": "reentry",
                "C": "permission",
                "D": "turnover"
            },
            "classification": "n1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "B",
            "translation": "티켓으로는 1회 입장만 유효하며 행사장에는 재입장할 수 없습니다.",
            "explanation": "문맥상 '재입장'을 나타내는 명사 (B) reentry가 정답이다."
        },
        {
            "id": "v4-p5-t3-q125",
            "questionNo": 125,
            "text": "We hired Okafor Construction to do the renovation _____ it was not the lowest bidder on the project.",
            "options": {
                "A": "if only",
                "B": "alternatively",
                "C": "whereas",
                "D": "even though"
            },
            "classification": "c3",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "D",
            "translation": "우리는 오카포 건설이 프로젝트의 최저 입찰자가 아님에도 불구하고 보수 공사 담당 업체로 고용했다.",
            "explanation": "양보의 부사절을 이끄는 접속사 (D) even though(~에도 불구하고)가 정답이다."
        },
        {
            "id": "v4-p5-t3-q126",
            "questionNo": 126,
            "text": "The first _____ of the training will introduce staff to certain workplace responsibilities.",
            "options": {
                "A": "part",
                "B": "parted",
                "C": "parting",
                "D": "partial"
            },
            "classification": "n1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "A",
            "translation": "교육의 첫 부분은 특정한 직장에서의 책무를 직원들에게 소개할 것이다.",
            "explanation": "정관사와 형용사 뒤의 주어 명사 자리이므로 (A) part가 정답이다."
        },
        {
            "id": "v4-p5-t3-q127",
            "questionNo": 127,
            "text": "According to industry _____, Ghira Company plans to relocate its headquarters to Australia.",
            "options": {
                "A": "reported",
                "B": "reportedly",
                "C": "reporter",
                "D": "reports"
            },
            "classification": "n3",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "D",
            "translation": "업계 보고에 따르면, 기라 컴퍼니는 본사를 호주로 이전할 계획입니다.",
            "explanation": "industry와 결합하여 '업계 보고'라는 뜻을 완성하는 명사 (D) reports가 정답이다."
        },
        {
            "id": "v4-p5-t3-q128",
            "questionNo": 128,
            "text": "Next month, the Kneath House will host an exhibition of _____ furniture and clothing from the eighteenth century.",
            "options": {
                "A": "authentic",
                "B": "authentically",
                "C": "authenticate",
                "D": "authenticity"
            },
            "classification": "a1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "A",
            "translation": "다음 달 니쓰 하우스는 18세기의 진품 가구 및 의류 전시회를 개최할 예정입니다.",
            "explanation": "명사구를 수식하는 형용사 자리로 '진품의'라는 의미인 (A) authentic이 정답이다."
        },
        {
            "id": "v4-p5-t3-q129",
            "questionNo": 129,
            "text": "PKTM's regional managers serve _____ the direction of the vice president.",
            "options": {
                "A": "among",
                "B": "under",
                "C": "behind",
                "D": "opposite"
            },
            "classification": "pr1",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "B",
            "translation": "PKTM의 지역 관리자들은 부사장의 지휘하에 근무한다.",
            "explanation": "'~의 지휘하에'를 뜻하는 전치사 (B) under가 정답이다."
        },
        {
            "id": "v4-p5-t3-q130",
            "questionNo": 130,
            "text": "_____ a recent surge in demand, Vanita's Catering is hiring four additional servers.",
            "options": {
                "A": "Everywhere",
                "B": "Possibly",
                "C": "In total",
                "D": "Owing to"
            },
            "classification": "pr5",
            "testId": 3,
            "vol": 4,
            "correctAnswer": "D",
            "translation": "최근 수요 급증으로 인해 바니타 케이터링은 네 명의 서빙 종업원을 추가로 채용 중이다.",
            "explanation": "'~ 때문에(이유)'를 뜻하는 전치사 구 (D) Owing to가 정답이다."
        }
    ]
};
