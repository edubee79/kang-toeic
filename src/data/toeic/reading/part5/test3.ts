import { Part5TestSet } from './types';

export const test3Data: Part5TestSet = {
    "testId": 3,
    "title": "Part 5 Real Test 3",
    "questions": [
        {
            "id": "p5-t3-q101",
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
            "correctAnswer": "C",
            "translation": "주문이 처리되는 동안 문의사항이 있으면 고객 서비스로 전화 주십시오.",
            "explanation": "주어(your order)와 동사(is being processed)를 갖춘 완전한 절을 콤마 뒤 주절에 연결하는 자리이므로, 빈칸에는 부사절 접속사가 들어가야 한다. 따라서 '~하는 동안'이라는 의미의 접속사 (C) While이 정답이다. (A) Still, (D) Also는 부사, (B) Either는 or와 함께 쓰이는 상관접속사로 빈칸에 들어갈 수 없다."
        },
        {
            "id": "p5-t3-q102",
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
            "correctAnswer": "B",
            "translation": "ABC 트럭 서플라이즈는 주 전역에서 가장 다양한 소음기를 보유하고 있다.",
            "explanation": "'다양한, 엄선된'이라는 의미의 a selection of는 형용사 wide와 함께 '매우 다양한'의 뜻으로 자주 쓰인다. 따라서 빈칸 앞 정관사 the와 함께 wide의 최상급으로 '가장 다양한 소음기'라는 의미가 자연스러운 (B) widest가 정답이다. (A) natural은 '자연의', (C) overall은 '전반적인', (D) positive는 '긍정적인'이라는 의미로 문맥상 적절하지 않다."
        },
        {
            "id": "p5-t3-q103",
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
            "correctAnswer": "A",
            "translation": "샤스우드 조경은 작업에 대해 별 다섯 개짜리 평가 수십 개를 받았다.",
            "explanation": "전치사 of의 목적어 자리로 형용사 five-star(별 다섯 개짜리의)의 수식을 받아 '별 다섯 개짜리 평가'라는 의미가 되어야 하므로 '후기, 평가'라는 뜻의 명사 (A) reviews가 정답이다. 참고로, 빈칸 앞 dozens of는 '수십 개의'라는 의미으로 뒤에 복수명사를 수식하기 때문에 명사 (B) reviewer(비평가, 검열자)는 문맥상 어울리지 않을 뿐 아니라 dozens of와 수 일치도 되지 않는다. (C) reviewed는 동사/과거분사, (D) reviewing은 동명사/현재분사로 구조상 빈칸에 적절하지 않다."
        },
        {
            "id": "p5-t3-q104",
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
            "correctAnswer": "B",
            "translation": "조 박사는 텔레데어 연구소를 볼 기회가 다시없을 수도 있기 때문에 일 년에 한번 있는 공개일 동안 연구소를 방문할 예정이다.",
            "explanation": "빈칸은 접속사 since가 이끄는 부사절의 주어 자리이므로 주격 인칭대명사 (B) she가 정답이다. 소유대명사인 (A) hers도 주어 자리에 들어갈 수 있지만, '그녀의 것'이라는 뜻으로 문맥상 적절하지 않고, (C) her는 목적격/소유격, (D) herself는 재귀대명사로 주어 자리에 들어갈 수 없으므로 오답이다."
        },
        {
            "id": "p5-t3-q105",
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
            "correctAnswer": "D",
            "translation": "돈 백화점은 이미 다양한 가정용품을 확대하기로 결정했다.",
            "explanation": "동사 decided의 목적어 역할을 하는 to부정사에 들어갈 적절한 동사 어휘를 고르는 문제이다. 문맥상 '이미 다양한 제품군을 확대하기로 결정했다'라는 내용이 되어야 적절하므로 '확대하다, 확장하다'라는 뜻의 (D) expand가 정답이다. (A) create는 '만들다', (B) enforce는 '시행하다', (C) apply는 '적용하다'라는 의미이다."
        },
        {
            "id": "p5-t3-q106",
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
            "correctAnswer": "C",
            "translation": "면접에 작업 샘플 포트폴리오를 지참해 주시기 바랍니다.",
            "explanation": "We가 주어, 빈칸 뒤 that절이 목적어인 문장에 동사가 필요하므로 빈칸은 동사 자리이다. 복수주어 We와 수 일치하는 복수동사가 와야 하므로 (C) ask가 정답이다. (A) was asking과 (D) asks는 3인칭 단수동사로 We와 수 일치되지 않고, (B) having asked는 동명사/현재분사로 문장의 동사 역할을 할 수 없다."
        },
        {
            "id": "p5-t3-q107",
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
            "correctAnswer": "C",
            "translation": "볼드스톤팜 스토어 회원은 모든 구매에 대해 큰 할인을 받는다.",
            "explanation": "빈칸은 동사 receive의 목적어 역할을 하는 명사 discounts를 수식하는 형용사 자리이다. 따라서 깊은'이라는 의미의 형용사 (C) deep이 정답이다. (A) depth는 명사, (B) deepen은 동사, (D) deeply는 부사이므로 답이 될 수 없다."
        },
        {
            "id": "p5-t3-q108",
            "questionNo": 108,
            "text": "If your plans change, please contact us at least 24 hours _____ the time of your reservation.",
            "options": {
                "A": "behind",
                "B": "before",
                "C": "below",
                "D": "above"
            },
            "classification": "pr1",
            "testId": 3,
            "correctAnswer": "B",
            "translation": "계획이 변경될 경우, 적어도 예약 시간 24시간 전에 연락 주십시오.",
            "explanation": "빈칸 뒤 명사구 the time of your reservation과 함께 '예약 시간 24시간 전에'라는 의미가 되어야 자연스럽다. 따라서 '~ 전에'를 뜻하는 전치사 (B) before가 정답이다. (A) behind는 '~ 뒤에', (C) below는 '~ 아래에', (D) above는 '~ 위에'를 뜻하므로 문맥상 어울리지 않는다."
        },
        {
            "id": "p5-t3-q109",
            "questionNo": 109,
            "text": "The latest edition of our employee benefit handbook is now _____ at the human resources office.",
            "options": {
                "A": "available",
                "B": "aware",
                "C": "general",
                "D": "practical"
            },
            "classification": "a2",
            "testId": 3,
            "correctAnswer": "A",
            "translation": "우리 직원 복지 안내서의 최신판은 이제 인사과에서 이용 가능합니다.",
            "explanation": "be동사 is 뒤에서 주어(The latest edition ~ handbook)를 보충 설명하는 주격 보어 자리이므로 '이용 가능한'이라는 뜻의 형용사 (A) available이 정답이다."
        },
        {
            "id": "p5-t3-q110",
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
            "correctAnswer": "D",
            "translation": "회의에 입장하기 전에 등록 테이블에서 반드시 이름표를 수령하세요.",
            "explanation": "빈칸은 뒤에 오는 entering the conference와 함께 앞에 있는 완전한 절(be sure to collect your name tag)을 수식하는 자리이다. entering과 함께 쓰여 '들어가기 전에'라는 의미를 나타내는 것이 적절하므로 (D) before가 정답이다. 부사인 (A) very, (B) often, (C) always 또한 구조상으로 가능해 보일 수 있으나, (A) very는 동사를 수식하지 않고, (B) often과 (C) always는 의미상 어색하므로 정답이 될 수 없다."
        },
        {
            "id": "p5-t3-q111",
            "questionNo": 111,
            "text": "The finance director mentioned _____ the recent increase in shipping costs during the board meeting.",
            "options": {
                "A": "each",
                "B": "with",
                "C": "briefly",
                "D": "across"
            },
            "classification": "av1",
            "testId": 3,
            "correctAnswer": "C",
            "translation": "재무 이사는 이사회 동안 최근의 배송비 증가에 대해 짧게 언급했다.",
            "explanation": "동사 mentioned를 수식하여 '짧게 언급했다'라는 의미가 되어야 적절하므로 부사인 (C) briefly가 정답이다."
        },
        {
            "id": "p5-t3-q112",
            "questionNo": 112,
            "text": "The hotel's new Web site features an _____ collection of high-quality images.",
            "options": {
                "A": "absolute",
                "B": "efficient",
                "C": "impressive",
                "D": "undefeated"
            },
            "classification": "voc1",
            "testId": 3,
            "correctAnswer": "C",
            "translation": "호텔의 새로운 웹사이트는 인상적인 고품질 이미지 컬렉션이 특징이다.",
            "explanation": "명사 collection을 수식하기에 적절한 형용사를 고르는 문제이다. collection이 고품질 이미지들로 구성되었다는 수식어구(of high-quality images)로 보아 문맥상 '고품질 이미지를 인상적으로 모아놓은 것'이라는 내용이 되어야 적절하므로 '인상적인'이라는 뜻의 (C) impressive가 정답이다. (A) absolute는 '절대적인', (B) efficient는 '효율적인', (D) undefeated는 '무패의'라는 의미이다."
        },
        {
            "id": "p5-t3-q113",
            "questionNo": 113,
            "text": "On behalf of everyone at Uniontown Bank, we _____ thank you for your continued patronage.",
            "options": {
                "A": "deservedly",
                "B": "commonly",
                "C": "sincerely",
                "D": "perfectly"
            },
            "classification": "voc1",
            "testId": 3,
            "correctAnswer": "C",
            "translation": "유니언타운 은행의 모든 임직원을 대표하여, 귀하의 지속적인 이용에 진심으로 감사드립니다.",
            "explanation": "동사 thank를 수식하여 적절한 문맥을 완성하는 부사를 고르는 문제이다. '지속적인 이용에 진심으로 감사드린다'는 내용이 되어야 자연스러우므로 '진심으로'라는 뜻의 (C) sincerely가 정답이다. (A) deservedly는 '마땅히', (B) commonly는 '흔히', (D) perfectly는 '완벽하게'라는 의미로 문맥상 어울리지 않는다."
        },
        {
            "id": "p5-t3-q114",
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
            "correctAnswer": "D",
            "translation": "깨지기 쉬운 장비는 실수로 손상되지 않도록 안전한 장소에 보관되어야 한다.",
            "explanation": "빈칸은 be동사 is와 과거분사 damaged 사이에서 동사를 수식하는 부사 자리이다. 따라서 '우연히, 실수로'라는 뜻의 부사 (D) accidentally가 정답이다. (A) accident와 (B) accidents는 명사, (C) accidental은 형용사이므로 품사상 오답이다."
        },
        {
            "id": "p5-t3-q115",
            "questionNo": 115,
            "text": "Bancroft Publishing is _____ seeking a skilled web developer for its main office in Chicago.",
            "options": {
                "A": "currently",
                "B": "exactly",
                "C": "briefly",
                "D": "nearly"
            },
            "classification": "av1",
            "testId": 3,
            "correctAnswer": "A",
            "translation": "밴크로프트 출판사는 현재 시카고 본사에서 근무할 숙련된 웹 개발자를 찾고 있습니다.",
            "explanation": "현재 진행형 동사인 is seeking 사이에 위치하여 '현재 찾고 있다'라는 의미를 완성하는 부사 (A) currently가 정답이다."
        },
        {
            "id": "p5-t3-q116",
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
            "correctAnswer": "A",
            "translation": "지역 사회 피크닉은 셀처 공공 도서관 뒤에 있는 공원에서 열릴 예정이다.",
            "explanation": "명사구 the park를 목적어로 취하는 전치사 자리로, 보기에서 (A) in과 (C) for 중 하나를 선택해야 한다. the park가 장소를 나타내는 명사이고, 문맥상 '공원에서 열릴 것이다'라는 내용이 되어야 자연스럽라 장소 명사와 함께 쓰여 '~에서'를 뜻하는 전치사 (A) in이 정답이다. (C) for(~을 위한)는 문맥상 어색하고, (B) all은 한정사/부사, (D) here는 부사이므로 빈칸에 적절하지 않다."
        },
        {
            "id": "p5-t3-q117",
            "questionNo": 117,
            "text": "The new hires _____ for an orientation on May 10 at 9:00 Α.Μ.",
            "options": {
                "A": "to be gathering",
                "B": "will gather",
                "C": "gathering",
                "D": "to gather"
            },
            "classification": "v4",
            "testId": 3,
            "correctAnswer": "B",
            "translation": "신입 사원들은 5월 10일 오전 9시에 오리엔테이션을 위해 모일 예정이다.",
            "explanation": "빈칸은 주어 The new hires의 동사 자리이다. 따라서 문장에서 본동사 역할을 할 수 있는 (B) will gather가 정답이다. (A) to be gathering과 (D) to gather는 to부정사, (C) gathering은 명사/동명사/현재분사이므로 품사상 답이 될 수 없다."
        },
        {
            "id": "p5-t3-q118",
            "questionNo": 118,
            "text": "Mr. Grant was _____ when he was chosen as the company's employee of the year.",
            "options": {
                "A": "surprise",
                "B": "surprised",
                "C": "surprising",
                "D": "surprisingly"
            },
            "classification": "a2",
            "testId": 3,
            "correctAnswer": "B",
            "translation": "그랜트 씨는 자신이 올해의 직원으로 뽑혔을 때 깜짝 놀랐다.",
            "explanation": "be동사 was 뒤의 보어 자리로, 주어인  Mr. Grant가 느끼는 감정을 나타내야 하므로 과거분사 (B) surprised가 정답이다."
        },
        {
            "id": "p5-t3-q119",
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
            "correctAnswer": "C",
            "translation": "마베일의 마케팅 팀원들은 그들의 것이 새로운 회사 로고를 위한 최고의 디자인이라고 주장했다.",
            "explanation": "빈칸은 주절의 동사 claimed의 목적어 역할을 하는 that절의 주어 자리이다. was는 단수동사이므로 복수주어인 (A) they는 답이 될 수 없고, 문맥상 '그들(Members of the Marvale marketing team)의 것'이라는 의미를 나타내는 소유대명사 (C) theirs가 정답이다."
        },
        {
            "id": "p5-t3-q120",
            "questionNo": 120,
            "text": "The new Kitsuna video camera is currently on sale for $375, not _____ tax.",
            "options": {
                "A": "excepting",
                "B": "alongside",
                "C": "within",
                "D": "including"
            },
            "classification": "pa5",
            "testId": 3,
            "correctAnswer": "D",
            "translation": "신형 키츠나 비디오카메라는 현재 세금을 포함하지 않고 375달러에 판매되고 있다.",
            "explanation": "문맥상 '세금을 포함하지 않고'라는 의미가 되어야 하는데 앞에 not이 있으므로 '~을 포함하여'라는 뜻의 전치사 (D) including이 정답이다. '~을 제외하고'라는 뜻의 (A) excepting은 not과 함께 '~도 예외 없이'를 의미하므로 문맥에 맞지 않다. (B) alongside는 '~와 나란히', (C) within은 '~ 이내에'라는 의미이다."
        },
        {
            "id": "p5-t3-q121",
            "questionNo": 121,
            "text": "All associates are _____ to follow the standard operating procedures outlined in the handbook.",
            "options": {
                "A": "concerned",
                "B": "tended",
                "C": "maintained",
                "D": "expected"
            },
            "classification": "v2",
            "testId": 3,
            "correctAnswer": "D",
            "translation": "모든 직원들은 안내서에 기술된 표준 운영 절차를 따라야 한다.",
            "explanation": "be동사 are와 to부정사 to follow 사이에서 과거분사 형태로 적절한 문맥을 완성하는 동사를 골라야 한다. '절차를 따라야 한다', 즉 '절차를 따를 것으로 기대된다'라는 의미가 되어야 하므로 'be expected to'의 형태로 쓰여 '~할 것으로 기대[예상]되다'를 의미하는 (D) expected가 정답이다. (A) concerned는 '우려하는'이라는 의미로 뒤에 주로 전치사 about이나 that절을 취하므로 빈칸에 적절하지 않고, (B)의 tend는 '경향이 있다'라는 뜻의 자동사로 수동태로 쓰이지 않으며, (C)의 maintain은 '유지하다'라는 뜻으로 문맥상 오답이다."
        },
        {
            "id": "p5-t3-q122",
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
            "correctAnswer": "D",
            "translation": "이번 달 프램리 출판사는 지금까지 했던 것 중 가장 야심 찬 확장 사업을 착수할 것이다.",
            "explanation": "빈칸 앞에 소유격, 뒤에 명사 expansion이 있으므로 빈칸에는 명사를 수식하는 형용사나 복합명사를 이루는 명사가 들어갈 수 있다. 문맥상으로 '가장 야심 찬 확장 사업'이라는 의미가 되어야 자연스러우므로 '야심 찬'이라는 뜻의 형용사 ambitious의 최상급 (D) most ambitious가 정답이다. 명사인 (C) ambition은 '야심'이라는 뜻으로 expansion과 복합명사를 이루지 않고, (A) ambitiously와 (B) most ambitiously는 부사이므로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            "id": "p5-t3-q123",
            "questionNo": 123,
            "text": "After months of collaboration, Matricks Technology's software developers _____ released a top-quality product.",
            "options": {
                "A": "profoundly",
                "B": "overly",
                "C": "finally",
                "D": "intensely"
            },
            "classification": "voc1",
            "testId": 3,
            "correctAnswer": "C",
            "translation": "몇 달간의 협업 끝에 매트릭스 테크놀로지의 소프트웨어 개발자들은 마침내 최고 품질의 제품을 출시했다.",
            "explanation": "빈칸 뒤의 동사 released를 수식하여 '마침내 출시했다'는 의미가 되어야 적절하므로 '마침내'라는 뜻의 (C) finally가 정답이다. (A) profoundly는 '깊이', (B) overly는 '지나치게', (D) intensely '몹시'라는 의미이다."
        },
        {
            "id": "p5-t3-q124",
            "questionNo": 124,
            "text": "Tickets are valid for one-time access and do not allow for _____ into the venue.",
            "options": {
                "A": "duplication",
                "B": "reentry",
                "C": "permission",
                "D": "turnover"
            },
            "classification": "voc1",
            "testId": 3,
            "correctAnswer": "B",
            "translation": "티켓으로는 1회 입장만 유효하며 행사장에는 재입장할 수 없습니다.",
            "explanation": "빈칸 뒤 장소를 나타내는 전치사구 into the venue가 있고 앞에서 티켓은 1회 입장에만 유효하다(Tickets are valid for one-time access)고 했으므로, '행사장에 재입장할 수 없다'라는 내용으로 연결되어야 자연스럽다. 따라서 '재입장'을 뜻하는 (B) reentry가 정답이다. (A) duplication은 '이중, 중복', (C) permission은 '허락', (D) turnover는 '(상품의) 회전율'이라는 의미로 문맥에 어울리지 않는다."
        },
        {
            "id": "p5-t3-q125",
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
            "correctAnswer": "D",
            "translation": "우리는 오카포 건설이 프로젝트의 최저 입찰자가 아님에도 불구하고 보수 공사 담당 업체로 고용했다.",
            "explanation": "빈칸 뒤 완전한 절(it was not the lowest bidder on the project)을 이끄는 부사절 접속사 자리로 (A) if only, (C) whereas, (D) even though가 가능하다. 문맥상 '최저 입찰자가 아님에도 불구하고'라는 의미가 되어야 자연스러우므로 '~에도 불구하고, ~일지라도'를 뜻하는 (D) even though가 정답이다. (A) if only는 '~하면(좋을 텐데)'의 의미로 주로 가정법 시제와 쓰이고, (C) whereas는 '반면에'라는 뜻으로 의미상 적절하지 않으며, (B) alternatively는 부사이므로 품사상 오답이다."
        },
        {
            "id": "p5-t3-q126",
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
            "correctAnswer": "A",
            "translation": "교육의 첫 부분은 특정한 직장에서의 책무를 직원들에게 소개할 것이다.",
            "explanation": "빈칸은 동사 will introduce의 주어 자리으로, 빈칸 앞에 관사 The와 형용사 first가 있으므로 명사가 와야 한다. 따라서 명사인 (A) part가 정답이다. (B) parted는 동사/과거분사, (D) partial은 형용사이므로 품사상 빈칸에 들어갈 수 없다. (C) parting은 동명사로 쓰일 경우 주어 자리에 들어갈 수 있지만 '갈라짐'을 의미하므로 답이 될 수 없다."
        },
        {
            "id": "p5-t3-q127",
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
            "correctAnswer": "D",
            "translation": "업계 보고서에 따르면, 기라 컴퍼니는 본사를 오스트레일리아로 이전할 계획이다.",
            "explanation": "빈칸은 According to 뒤의 전치사의 목적어 자리로 industry와 함께 복합명사를 이루는 명사가 필요하다. '업계 보고서'라는 의미의 (D) reports가 정답이다."
        },
        {
            "id": "p5-t3-q128",
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
            "correctAnswer": "A",
            "translation": "다음 달, 니어스 하우스는 18세기 진품 가구와 의류 전시회를 개최할 예정입니다.",
            "explanation": "명사구(furniture and clothing)를 수식하는 형용사 자리이므로 '진품의'라는 뜻의 (A) authentic이 정답이다."
        },
        {
            "id": "p5-t3-q129",
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
            "correctAnswer": "B",
            "translation": "PKTM의 지역 관리자들은 부사장의 지휘하에 근무한다.",
            "explanation": "빈칸 뒤의 명사구 the direction과 함께 '지휘[감독]하에'라는 의미를 나타내는 (B) under가 정답이다. (A) among은 '(셋 이상의) ~ 사이에'라는 의미로 복수명사가 뒤따라야 하므로 적절하지 않고, (C) behind는 '~ 뒤에', (D) opposite는 '~ 맞은편에'를 뜻하므로 문맥에 어울리지 않는다."
        },
        {
            "id": "p5-t3-q130",
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
            "correctAnswer": "D",
            "translation": "최근 수요 급증으로 인해 바니타 케이터링은 네 명의 서빙 종업원을 추가로 채용 중이다.",
            "explanation": "빈칸은 명사구 a recent surge in demand와 함께 콤마 뒤 완전한 절(Vanita's Catering is hiring ~ servers)을 수식하는 자리이므로 전치사가 들어가야 한다. 따라서 '~ 때문에'라는 의미의 전치사 (D) Owing to가 정답이다. (A) Everywhere는 대명사/부사, (B) Possibly와 (C) In total은 부사이므로 품사상 빈칸에 들어갈 수 없다."
        }
    ]
};
