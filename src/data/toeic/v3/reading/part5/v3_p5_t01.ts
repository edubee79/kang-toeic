import { Part5TestSet } from '../../v4/reading/part5/types'; // Using existing types

export const test1Data: Part5TestSet = {
    testId: 1,
    vol: 3,
    title: "Part 5 Real Test 1",
    questions: [
        {
            id: "v3-p5-t1-q101",
            questionNo: 101,
            text: "Mougey Fine Gifts is known for its large range of ------- goods.",
            options: {
                A: "regional",
                B: "regionally",
                C: "region",
                D: "regions"
            },
            classification: "a1",
            testId: 1,
            vol: 3,
            correctAnswer: "A",
            translation: "모우기 파인 기프트는 폭넓은 지역 특산 제품으로 잘 알려져 있다.",
            explanation: "빈칸에는 명사 goods를 수식하는 형용사 또는 goods와 복합명사를 이루는 명사가 들어갈 수 있다. 문맥상 '지역의 제품, 지역산 제품'이라는 내용이 되어야 하므로, 형용사인 (A) regional(지역의)이 정답이다. (C) region과 (D) regions는 '지역'을 의미하기 때문에 goods와 복합명사를 이룰 수 없고, (B) regionally는 부사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t1-q102",
            questionNo: 102,
            text: "Income levels are rising in the ------- and surrounding areas.",
            options: {
                A: "family",
                B: "world",
                C: "company",
                D: "city"
            },
            classification: "voc1",
            testId: 1,
            vol: 3,
            correctAnswer: "D",
            translation: "그 도시 및 인근 지역에서 소득 수준이 증가하고 있다.",
            explanation: "등위접속사 and가 빈칸과 인근 지역(surrounding areas)을 연결하고 있으므로, 빈칸에도 지역을 나타내는 단어가 들어가야 한다. 따라서 area와 성격 및 규모가 비슷한 (D) city(도시)가 정답이다."
        },
        {
            id: "v3-p5-t1-q103",
            questionNo: 103,
            text: "Since we had a recent rate change, expect ------- next electricity bill to be slightly lower.",
            options: {
                A: "you",
                B: "yours",
                C: "yourself",
                D: "your"
            },
            classification: "p1",
            testId: 1,
            vol: 3,
            correctAnswer: "D",
            translation: "최근 요금 변동이 있었으니 귀하의 다음 번 전기 요금이 약간 감소할 것으로 예상하세요.",
            explanation: "명사구 next electricity bill을 한정 수식하는 자리이다. 형용사적 역할을 하며 명사구 앞에 올 수 있는 소유격 인칭대명사가 필요하므로, (D) your가 정답이다."
        },
        {
            id: "v3-p5-t1-q104",
            questionNo: 104,
            text: "Hotel guests have a lovely view of the ocean ------- the south-facing windows.",
            options: {
                A: "up",
                B: "except",
                C: "onto",
                D: "through"
            },
            classification: "pr1",
            testId: 1,
            vol: 3,
            correctAnswer: "D",
            translation: "호텔 투숙객들은 남향 창문을 통해 멋진 바다 풍경을 볼 수 있다.",
            explanation: "the south-facing windows와 어울리는 전치사를 선택해야 한다. 남향 창문을 통해 전망을 즐길 수 있다는 내용이 되어야 하므로, '~을 통해'라는 의미의 (D) through가 정답이다."
        },
        {
            id: "v3-p5-t1-q105",
            questionNo: 105,
            text: "Mr. Kim would like ------- a meeting about the Jasper account as soon as possible.",
            options: {
                A: "to arrange",
                B: "arranging",
                C: "having arranged",
                D: "arrangement"
            },
            classification: "i1",
            testId: 1,
            vol: 3,
            correctAnswer: "A",
            translation: "김 씨는 가능한 한 빨리 재스퍼 사 거래에 관한 회의를 잡고 싶어 한다.",
            explanation: "동사 would like 다음에는 to부정사나 명사가 올 수 있는데, 빈칸 뒤에 명사 a meeting이 있으므로 이를 목적어로 취할 수 있는 to부정사가 들어가야 한다. 따라서 (A) to arrange가 정답이다. (B) arranging과 (C) having arranged는 동명사, (D) arrangement는 명사로 구조상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t1-q106",
            questionNo: 106,
            text: "The factory is ------- located near the train station.",
            options: {
                A: "regularly",
                B: "conveniently",
                C: "brightly",
                D: "collectively"
            },
            classification: "voc1",
            testId: 1,
            vol: 3,
            correctAnswer: "B",
            translation: "공장은 기차역 근처의 편리한 위치에 있다.",
            explanation: "공장의 입지 조건(located near the train station)을 적절히 묘사하는 부사를 선택해야 한다. 따라서 '편리하게'라는 의미의 (B) conveniently가 정답이다. conveniently(편리한 위치에)/ideally(이상적인 위치에)/strategically(전략적인 위치에) located는 빈출 표현이므로 암기해 두자."
        },
        {
            id: "v3-p5-t1-q107",
            questionNo: 107,
            text: "Because of transportation ------- due to winter weather, some conference participants may arrive late.",
            options: {
                A: "are delayed",
                B: "to delay",
                C: "delays",
                D: "had delayed"
            },
            classification: "n3",
            testId: 1,
            vol: 3,
            correctAnswer: "C",
            translation: "겨울 날씨로 인한 교통편 지연으로 회의 참가자들 중 일부가 늦게 도착할지도 모른다.",
            explanation: "transportation과 함께 복합명사를 이루어 전치사 Because of의 목적어 역할을 하는 명사 자리이다. 따라서 보기 중 명사로 쓰일 수 있는 (C) delays(지연, 연착)가 정답이다. (B) to delay는 앞에 온 명사를 수식할 수는 있지만, 빈칸 뒤에 목적어가 없으며 의미상으로도 어색하므로 오답이다. (A) are delayed와 (D) had delayed는 본동사이므로 구조상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t1-q108",
            questionNo: 108,
            text: "Proper maintenance of your heating equipment ensures that small issues can be fixed ------- they become big ones.",
            options: {
                A: "as a result",
                B: "in addition",
                C: "although",
                D: "before"
            },
            classification: "voc1",
            testId: 1,
            vol: 3,
            correctAnswer: "D",
            translation: "난방기기를 적절하게 유지 관리하면 작은 문제들은 커지기 전에 분명 해결될 수 있다.",
            explanation: "두 개의 완전한 절을 이어주는 접속사 자리로, 보기에서 부사절 접속사인 (C) although와 (D) before 중 하나를 선택해야 한다. 문맥상 '시점을 나타내는 접속사가 빈칸에 들어가서 '작은 문제들(small issues)이 커지기 전에 해결되게끔 해준다'는 내용이 되어야 자연스럽다. 따라서 (D) before가 정답이 된다. (A) as a result와 (B) in addition은 부사로 절과 절을 연결할 수 없다."
        },
        {
            id: "v3-p5-t1-q109",
            questionNo: 109,
            text: "The information on the Web site of Croyell Decorators is ------- organized.",
            options: {
                A: "clear",
                B: "clearing",
                C: "clearest",
                D: "clearly"
            },
            classification: "av1",
            testId: 1,
            vol: 3,
            correctAnswer: "D",
            translation: "크로옐 데코레이터즈의 웹사이트에 있는 정보는 명확하게 정리되어 있다.",
            explanation: "be동사 is와 과거분사 organized 사이에서 동사를 수식하는 부사 자리이므로, (D) clearly(명확하게)가 정답이다. (A) clear는 형용사/동사, (B) clearing은 동명사/현재분사, (C) clearest는 형용사의 최상급으로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t1-q110",
            questionNo: 110,
            text: "The Copley Corporation is frequently ------- as a company that employs workers from all over the world.",
            options: {
                A: "recognized",
                B: "permitted",
                C: "prepared",
                D: "controlled"
            },
            classification: "voc1",
            testId: 1,
            vol: 3,
            correctAnswer: "A",
            translation: "코플리 사는 전 세계에서 직원들을 고용하는 회사로 흔히 알려져 있다.",
            explanation: "전치사 as와 어울려 쓰이는 과거분사를 선택해야 한다. 주어인 The Copley Corporation이 회사로서 받는 평가를 설명하는 문장이므로, be동사 및 as와 함께 '~로 알려져 있다, ~로 인정받다'라는 의미를 완성하는 (A) recognized가 정답이다."
        },
        {
            id: "v3-p5-t1-q111",
            questionNo: 111,
            text: "Payments made ------- 4:00 P.M. will be processed on the following business day.",
            options: {
                A: "later",
                B: "after",
                C: "than",
                D: "often"
            },
            classification: "pr1",
            testId: 1,
            vol: 3,
            correctAnswer: "B",
            translation: "오후 4시 이후 이뤄진 결제 건은 다음 영업일에 처리될 것이다.",
            explanation: "Payments부터 4:00 P.M.까지가 주어, will be processed가 동사인 문장이다. 따라서 빈칸에는 과거분사 made와 시간 표현을 적절히 연결해주는 전치사가 들어가야 하므로, (B) after가 정답이다. 참고로, (A) later가 비교급 부사로 쓰일 경우 전치사 (C) than과 결합하여 '오후 4시보다 더 늦게'라는 의미로 쓰일 수 있으나, 각자 단독으로 빈칸에 들어갈 수는 없다."
        },
        {
            id: "v3-p5-t1-q112",
            questionNo: 112,
            text: "Greenfiddle Water Treatment hires engineers who have ------- mathematics skills.",
            options: {
                A: "adjusted",
                B: "advanced",
                C: "eager",
                D: "faithful"
            },
            classification: "voc1",
            testId: 1,
            vol: 3,
            correctAnswer: "B",
            translation: "그린피들 워터 트리트먼트는 고급 수학 실력을 갖춘 기술자를 채용한다.",
            explanation: "고용(hires)의 대상이 되는 기술자들(engineers)이 갖추어야 할 수학 실력(mathematics skills) 수준을 나타내는 형용사가 필요하다. 따라서 '고급의, 상급의'라는 의미의 (B) advanced가 정답이다."
        },
        {
            id: "v3-p5-t1-q113",
            questionNo: 113,
            text: "After ------- the neighborhood, Mr. Park decided not to move his café to Thomasville.",
            options: {
                A: "evaluation",
                B: "evaluate",
                C: "evaluating",
                D: "evaluated"
            },
            classification: "g1",
            testId: 1,
            vol: 3,
            correctAnswer: "C",
            translation: "박 씨는 인근 지역을 평가한 후 자신의 카페를 토마스빌로 옮기지 않기로 결정했다.",
            explanation: "명사 the neighborhood를 목적어로 취하는 동시에 전치사 After의 목적어 역할을 하는 자리이다. 따라서 빈칸에는 동명사가 들어가야 하므로, (C) evaluating이 정답이다. (A) evaluation은 명사로 After의 목적어 역할을 할 수는 있지만, the neighborhood를 목적어로 취할 수 없으므로 오답이다. (B) evaluate는 동사, (D) evaluated는 동사/과거분사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t1-q114",
            questionNo: 114,
            text: "The average precipitation in Campos ------- the past three years has been 22.7 centimeters.",
            options: {
                A: "on",
                B: "for",
                C: "to",
                D: "under"
            },
            classification: "pr1",
            testId: 1,
            vol: 3,
            correctAnswer: "B",
            translation: "지난 3년간 캄포스의 평균 강수량은 22.7센티미터였다.",
            explanation: "기간을 나타내는 명사구 the past three years를 목적어로 취하는 전치사 자리이다. 따라서 '~동안'이라는 뜻으로 현재완료 시제(has been)와 어울려 쓰이는 (B) for가 정답이다."
        },
        {
            id: "v3-p5-t1-q115",
            questionNo: 115,
            text: "Improving efficiency at Perwon Manufacturing will require a ------- revision of existing processes.",
            options: {
                A: "create",
                B: "creativity",
                C: "creation",
                D: "creative"
            },
            classification: "a1",
            testId: 1,
            vol: 3,
            correctAnswer: "D",
            translation: "퍼원 매뉴팩처링에서 효율성을 제고하려면 기존 절차를 창의적으로 바꾸는 일이 필요하다.",
            explanation: "빈칸에는 명사 revision을 수식하는 형용사 또는 revision과 복합명사를 이루는 명사가 들어갈 수 있다. 문맥상 효율성 제고(Improving efficiency)에 필요한 revision 절차 수정 방식을 묘사하는 형용사가 필요하므로, (D) creative(창의적인)가 정답이다. (A) create는 동사로 품사상 빈칸에 들어갈 수 없고, (B) creativity는 '창의력', (C) creation은 '창작'이라는 뜻으로 revision과 복합명사를 이루기엔 어색하다."
        },
        {
            id: "v3-p5-t1-q116",
            questionNo: 116,
            text: "Conference attendees will share accommodations ------- they submit a special request for a single room.",
            options: {
                A: "even",
                B: "unless",
                C: "similarly",
                D: "also"
            },
            classification: "voc1",
            testId: 1,
            vol: 3,
            correctAnswer: "B",
            translation: "회의 참석자들은 1인실 특별 요청서를 제출하지 않는 한 숙소를 공유하게 될 것이다.",
            explanation: "빈칸은 두 개의 완전한 절을 이어주는 접속사 자리이다. 따라서 보기 중 부사절 접속사인 (B) unless(~하지 않는 한)가 정답이다. (A) even은 형용사/부사/동사, (C) similarly와 (D) also는 부사로 절과 절을 연결할 수 없다."
        },
        {
            id: "v3-p5-t1-q117",
            questionNo: 117,
            text: "To receive -------, please be sure the appropriate box is checked on the magazine order form.",
            options: {
                A: "renew",
                B: "renewed",
                C: "renewals",
                D: "to renew"
            },
            classification: "n1",
            testId: 1,
            vol: 3,
            correctAnswer: "C",
            translation: "갱신을 하시려면 잡지 주문서의 알맞은 칸에 표시해 주십시오.",
            explanation: "to부정사 To receive의 목적어 역할을 하는 명사 자리이다. 따라서 (C) renewals(갱신, 기한 연장)가 정답이다. (A) renew는 동사, (B) renewed는 동사/과거분사, (D) to renew는 to부정사로 구조상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t1-q118",
            questionNo: 118,
            text: "Donations to the Natusi Wildlife Reserve rise when consumers feel ------- about the economy.",
            options: {
                A: "careful",
                B: "helpful",
                C: "confident",
                D: "durable"
            },
            classification: "voc3",
            testId: 1,
            vol: 3,
            correctAnswer: "C",
            translation: "소비자들이 경제상황에 대해 확신하게 되면 나투시 야생동물 보호구역으로 가는 기부금이 증가한다.",
            explanation: "빈칸을 포함한 절은 기부금이 증가하는(Donations ~ rise) 경우를 나타낸다. 따라서 빈칸에는 경제(economy)에 대한 소비자의 긍정적인 판단을 나타내는 형용사가 들어가야 자연스러우므로, '신뢰하는, 좋을 거라 확신하는'이라는 의미의 (C) confident가 정답이다."
        },
        {
            id: "v3-p5-t1-q119",
            questionNo: 119,
            text: "When ------- applied, Tilda's Restorative Cream reduces the appearance of fine lines and wrinkles.",
            options: {
                A: "consistent",
                B: "consist",
                C: "consistently",
                D: "consisting"
            },
            classification: "av1",
            testId: 1,
            vol: 3,
            correctAnswer: "C",
            translation: "틸다 재생크림은 지속적으로 바르면 잔주름 생성을 감소시켜 준다.",
            explanation: "부사절 접속사 When 뒤에는 완전한 절 또는 분사구문이 올 수 있는데, 주절의 주어 틸다's Restorative Cream과 동사 apply(~을 바르다, 도포하다)의 의미로 보아 applied(도포되는)가 과거분사로 쓰였음을 알 수 있다. 따라서 빈칸에는 applied를 수식하는 부사가 들어가야 하므로, (C) consistently(지속적으로)가 정답이다. (A) consistent는 형용사, (B) consist는 동사, (D) consisting은 동명사/현재분사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3_p5_t1_q120",
            questionNo: 120,
            text: "The marketing director confirmed that the new software program would be ready to ------- by November 1.",
            options: {
                A: "launch",
                B: "facilitate",
                C: "arise",
                D: "exert"
            },
            classification: "voc1",
            testId: 1,
            vol: 3,
            correctAnswer: "A",
            translation: "마케팅 담당자는 새 소프트웨어 프로그램이 11월 1일까지 출시 준비가 될 것이라고 확인해 주었다.",
            explanation: "새 소프트웨어 프로그램(new software program)이 무엇을 할 준비가 된 것인지 설명하는 동사가 필요하다. 따라서 '출시하다'라는 뜻의 (A) launch가 정답이다. 참고로, launch는 타동사이지만 앞의 형용사 ready가 쓰였기 때문에 to be launched로 쓰일 필요가 없다. 주어인 소프트웨어 프로그램이 launch의 '의미상' 목적어이다. 이와 같은 구조가 가능한 형용사로는 ready, easy, difficult, impossible 등이 있다."
        },
        {
            id: "v3-p5-t1-q121",
            questionNo: 121,
            text: "Satinesse Seat Covers will refund your order ------- you are not completely satisfied.",
            options: {
                A: "if",
                B: "yet",
                C: "until",
                D: "neither"
            },
            classification: "c3",
            testId: 1,
            vol: 3,
            correctAnswer: "A",
            translation: "새티니스 시트 커버는 귀하가 전적으로 만족하지 못하실 경우 주문 제품을 환불해 드립니다.",
            explanation: "두 개의 완전한 절을 연결해 주는 접속사 자리로, 보기에서 (A) if, (B) yet, (C) until 중 하나를 선택해야 한다. 주문품에 완전히 만족하지 못하는 것(you are not completely satisfied)은 환불(refund)을 해주는 경우에 해당하므로, '만일 ~하면'이라는 의미의 (A) if가 정답이다."
        },
        {
            id: "v3-p5-t1-q122",
            questionNo: 122,
            text: "In the last five years, production at the Harris facility has almost doubled in -------.",
            options: {
                A: "majority",
                B: "edition",
                C: "volume",
                D: "economy"
            },
            classification: "voc1",
            testId: 1,
            vol: 3,
            correctAnswer: "C",
            translation: "지난 5년 간, 해리스 시설의 생산 물량은 거의 두 배가 됐다.",
            explanation: "빈칸에는 생산(production)이 두 배로 늘어날 수 있는(has doubled) 부분이나 측면을 나타내는 명사가 들어가야 한다. 따라서 '양, 용량'이라는 의미의 (C) volume이 정답이다. double in size/number/price 등의 표현도 알아두는 것이 좋다."
        },
        {
            id: "v3-p5-t1-q123",
            questionNo: 123,
            text: "Ms. Tsai will ------- the installation of the new workstations with the vendor.",
            options: {
                A: "coordinated",
                B: "to coordinate",
                C: "coordination",
                D: "be coordinating"
            },
            classification: "v6",
            testId: 1,
            vol: 3,
            correctAnswer: "D",
            translation: "차이 씨는 판매업체와 새 워크스테이션 설치 작업을 조율할 것이다.",
            explanation: "조동사 will과 결합해 명사 the installation을 목적어로 취하는 자리로, 능동태 동사원형이 들어가야 한다. 따라서 동사원형 be로 시작하는 (D) be coordinating이 정답이다."
        },
        {
            id: "v3-p5-t1-q124",
            questionNo: 124,
            text: "An upgrade in software would ------- increase the productivity of our administrative staff.",
            options: {
                A: "significantly",
                B: "persuasively",
                C: "proficiently",
                D: "gladly"
            },
            classification: "av1",
            testId: 1,
            vol: 3,
            correctAnswer: "A",
            translation: "소프트웨어 업그레이드는 우리 행정 직원들의 생산성을 크게 높일 것이다.",
            explanation: "동사 increase를 수식하는 부사 자리이므로, 증가의 폭이나 속도를 나타내는 단어가 들어가야 자연스럽다. 따라서 '상당히, 크게'라는 의미의 (A) significantly가 정답이다. increase와 같은 증감동사와 잘 어울리는 부사로는 considerably/dramatically(상당히/크게), slightly(약간), rapidly(빠르게), steadily(꾸준히) 등이 있다."
        },
        {
            id: "v3-p5-t1-q125",
            questionNo: 125,
            text: "The Rustic Diner's chef does allow patrons to make menu -------.",
            options: {
                A: "substituted",
                B: "substituting",
                C: "substitutions",
                D: "substitute"
            },
            classification: "n3",
            testId: 1,
            vol: 3,
            correctAnswer: "C",
            translation: "러스틱 다이너의 주방장은 고객이 메뉴 대체를 하게끔 허용한다.",
            explanation: "가산명사 menu 앞에 한정사가 없으므로, 빈칸에는 menu와 함께 복합명사를 이루어 to make의 목적어 역할을 하는 복수명사 또는 불가산명사가 들어가야 한다. 주방장이 고객의 메뉴 대체 요청(특정 재료 변경 등의 요구)을 들어준다는 내용이 되어야 자연스러우므로, '대체'라는 뜻의 복수 가산명사 (C) substitutions가 정답이다. menu substitution은 고정 표현이므로 암기해 두는 것이 좋다. (D) substitute는 가산명사로 '대리자, 대체물'을 뜻하며, 동사로 쓰일 경우 '대체하다'를 의미하므로 의미상 정답이 될 수 없다."
        },
        {
            id: "v3-p5-t1-q126",
            questionNo: 126,
            text: "Ms. Rodriguez noted that it is important to ------- explicit policies regarding the use of company computers.",
            options: {
                A: "inform",
                B: "succeed",
                C: "estimate",
                D: "establish"
            },
            classification: "voc1",
            testId: 1,
            vol: 3,
            correctAnswer: "D",
            translation: "로드리게스 씨는 회사 컴퓨터 서용에 관해 명확한 정책을 수립하는 것이 중요하다고 말했다.",
            explanation: "가주어 it의 진주어 역할을 하는 to부정사의 동사원형 자리로, 명사구 explicit policies를 목적어로 취한다. 따라서 '명확한 정책'과 어울리는 단어를 선택해야 하므로, '수립하다, 제정하다'라는 의미의 (D) establish가 정답이다. 참고로, policy는 implement(시행하다), introduce(도입하다) 등의 동사와도 자주 쓰인다. (A) inform이 '알리다'라는 의미로 쓰일 경우, 정보를 제공받는 대상을 목적어로 취하므로 빈칸에는 들어갈 수 없다."
        },
        {
            id: "v3-p5-t1-q127",
            questionNo: 127,
            text: "------- Peura Insurance has located a larger office space, it will begin negotiating the rental agreement.",
            options: {
                A: "Happily",
                B: "Now that",
                C: "Despite",
                D: "In fact"
            },
            classification: "c3",
            testId: 1,
            vol: 3,
            correctAnswer: "B",
            translation: "프라 보험사는 더 큰 사무 공간을 찾았기 때문에 임대 계약을 협상하기 시작할 것이다.",
            explanation: "빈칸 뒤 완전한 절(Peura Insurance has located a larger office space)을 이끄는 접속사 자리이므로, 부사절 접속사 (B) Now that(~이기 때문에)이 정답이다. (A) Happily와 (D) In fact는 부사, (C) Despite는 전치사로 절을 이끌 수 없다."
        },
        {
            id: "v3-p5-t1-q128",
            questionNo: 128,
            text: "Mr. Tanaka's team worked ------- for months to secure a lucrative government contract.",
            options: {
                A: "readily",
                B: "diligently",
                C: "curiously",
                D: "extremely"
            },
            classification: "voc1",
            testId: 1,
            vol: 3,
            correctAnswer: "B",
            translation: "다나카 씨의 팀은 수익성 높은 정부 계약을 따기 위해 몇 달 간 열심히 일했다.",
            explanation: "자동사 worked를 수식하는 부사 자리로, 수익성 높은 정부 계약을 따기 위해(to secure a lucrative government contract) 어떻게 일했는지 묘사하는 단어가 필요하다. 따라서 '열심히, 부지런히'라는 의미의 (B) diligently가 정답이다."
        },
        {
            id: "v3-p5-t1-q129",
            questionNo: 129,
            text: "Though Sendark Agency's travel insurance can be purchased over the phone, most of ------- plans are bought online.",
            options: {
                A: "whose",
                B: "his",
                C: "its",
                D: "this"
            },
            classification: "p1",
            testId: 1,
            vol: 3,
            correctAnswer: "C",
            translation: "센다크 에이전시의 여행 보험은 전화로 구입 가능하지만, 대부분의 상품이 온라인으로 구매된다.",
            explanation: "전치사 of의 목적어 역할을 하는 명사 plans를 한정 수식하는 자리이다. 여행 보험 상품은 센다크 에이전시가 제공하는 것이므로, Sendark Agency's를 대신하는 (C) its가 정답이다. 문두에 부사절 접속사 Though가 이미 있기 때문에, 접속사 역할을 하는 소유격 관계대명사 (A) whose는 구조상 빈칸에 들어갈 수 없다. (B) his는 가리킬만한 대상이 앞에 언급되지 않았고, (D) this는 plans와 수가 일치하지 않으므로 오답이다."
        },
        {
            id: "v3-p5-t1-q130",
            questionNo: 130,
            text: "Garstein Furniture specializes in functional products that are inexpensive ------- beautifully crafted.",
            options: {
                A: "thus",
                B: "as well as",
                C: "at last",
                D: "accordingly"
            },
            classification: "c2",
            testId: 1,
            vol: 3,
            correctAnswer: "B",
            translation: "가스테인 가구는 비싸지 않을 뿐만 아니라 아름답게 제작된 기능성 제품을 전문으로 한다.",
            explanation: "빈칸이 관계사절의 보어(functional products)를 보충 설명하는 inexpensive와 beautifully crafted 사이에 있으므로, 빈칸에는 이 둘을 연결하는 등위/상관접속사가 들어가야 한다. 따라서 (B) as well as(~뿐만 아니라)가 정답이다. (A) thus, (C) at last, (D) accordingly는 부사로 품사상 빈칸에 들어갈 수 없다."
        }
    ]
};
