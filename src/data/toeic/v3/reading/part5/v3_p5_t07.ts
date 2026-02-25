import { Part5TestSet } from '../../v4/reading/part5/types';

export const test7Data: Part5TestSet = {
    testId: 7,
    vol: 3,
    title: "Part 5 Real Test 7",
    questions: [
        {
            id: "v3-p5-t7-q101",
            questionNo: 101,
            text: "Please direct all questions about ------- recent order to the customer care center.",
            options: {
                A: "yours",
                B: "your",
                C: "yourself",
                D: "you"
            },
            classification: "p1",
            testId: 7,
            vol: 3,
            correctAnswer: "B",
            translation: "귀하의 최근 주문에 대한 모든 질문은 고객관리센터로 보내주십시오.",
            explanation: "전치사 about의 목적어인 명사구 recent order를 한정 수식해 주는 자리이다. 따라서 소유격 인칭대명사 (B) your가 정답이다."
        },
        {
            id: "v3-p5-t7-q102",
            questionNo: 102,
            text: "Ms. Wu was the ------- of the contest, and she may collect her prize next week.",
            options: {
                A: "partner",
                B: "member",
                C: "player",
                D: "winner"
            },
            classification: "voc1",
            testId: 7,
            vol: 3,
            correctAnswer: "D",
            translation: "우 씨는 대회 우승자였고 다음 주에 상을 받을 것이다.",
            explanation: "Ms. Wu에 대해 설명하는 주격 보어 자리로, of the contest의 수식을 받는다. 뒤에서 우 씨가 상을 받는다(collect her prize)고 했으므로 '대회의 우승자'라는 내용이 되어야 자연스럽다. 따라서 (D) winner가 정답이다."
        },
        {
            id: "v3-p5-t7-q103",
            questionNo: 103,
            text: "For a ------- time, Marco Bank is offering first-time customers a $100 bonus when they open an account.",
            options: {
                A: "limits",
                B: "limiting",
                C: "limit",
                D: "limited"
            },
            classification: "pa2",
            testId: 7,
            vol: 3,
            correctAnswer: "D",
            translation: "마르코 은행은 한시적으로 처음 거래하는 고객이 계좌를 개설할 때 100달러의 보너스를 지급한다.",
            explanation: "명사 time을 수식하는 자리로, 보기에서 형용사로도 쓰이는 현재분사 (B) limiting(제한하는, 극단적인)과 과거분사 (D) limited(제한된, 한정된) 중 하나를 선택해야 한다. 보너스를 지급하는 기간은 한시적으로 제한되는 것이므로, 수동의 의미를 내포한 (D) limited가 정답이다. 참고로, limit은 동사/명사로 time 뒤에 붙어서 '시간 제한'이라는 뜻의 복합명사가 될 수는 있지만 빈칸의 위치에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t7-q104",
            questionNo: 104,
            text: "A ------- greenhouse donated several potted plants to beautify the lobby of the city hall.",
            options: {
                A: "potential",
                B: "local",
                C: "main",
                D: "future"
            },
            classification: "voc1",
            testId: 7,
            vol: 3,
            correctAnswer: "B",
            translation: "한 지역 온실 화원에서 시청 로비를 아름답게 꾸미기 위해 화분에 심은 식물 여러 개를 기증했다.",
            explanation: "'온실 화원'이라는 뜻의 greenhouse를 적절히 수식하는 형용사를 선택해야 한다. 시청의 로비에 화분을 기증할 만한 곳은 해당 지역에 있는 온실 화원이므로, '지역의, 현지의'라는 의미의 (B) local이 정답이다."
        },
        {
            id: "v3-p5-t7-q105",
            questionNo: 105,
            text: "The attached document shows how to report any ------- incurred during business travel.",
            options: {
                A: "expenses",
                B: "expensed",
                C: "expensively",
                D: "expensive"
            },
            classification: "n1",
            testId: 7,
            vol: 3,
            correctAnswer: "A",
            translation: "첨부된 문서는 출장 중 발생된 일체의 비용을 보고하는 방법을 알려준다.",
            explanation: "to report의 목적어 역할을 하는 명사 자리로, 한정사 any 및 과거분사구 incurred during business travel의 수식을 받는 명사여야 한다. 따라서 (A) expenses(비용, 지출)가 정답이다. (B) expensed는 과거동사/과거분사, (C) expensively는 부사, (D) expensive는 형용사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t7-q106",
            questionNo: 106,
            text: "Nonmembers may use the gym if they pay a daily admission ------- and sign a guest waiver.",
            options: {
                A: "fee",
                B: "income",
                C: "salary",
                D: "money"
            },
            classification: "voc1",
            testId: 7,
            vol: 3,
            correctAnswer: "A",
            translation: "비회원은 일일 입장료를 지불하고 배상책임 면책서약서에 서명했다면 체육관을 이용해도 된다.",
            explanation: "admission과 복합명사를 이루어 동사 pay의 목적어 역할을 하는 자리이다. 비회원이 체육관을 이용하기 위해 지불해야 하는 것은 '입장료'이므로, '요금, 수수료'라는 뜻의 (A) fee가 정답이다. admission fee는 고정된 표현으로 암기해 두는 것이 좋다."
        },
        {
            id: "v3-p5-t7-q107",
            questionNo: 107,
            text: "Sharik Pharmaceuticals will host a company picnic for ------- employees at Hain Park.",
            options: {
                A: "them",
                B: "its",
                C: "itself",
                D: "themselves"
            },
            classification: "p1",
            testId: 7,
            vol: 3,
            correctAnswer: "B",
            translation: "샤리크 제약회사는 헤인 파크에서 자사의 직원들을 위한 야유회를 개최할 예정이다.",
            explanation: "전치사 for의 목적어인 명사 employees를 한정 수식하는 자리이다. 따라서 소유격 인칭대명사 (B) its가 정답이다."
        },
        {
            id: "v3-p5-t7-q108",
            questionNo: 108,
            text: "Call Bowton Chimney for a complete inspection and cleaning ------- winter starts.",
            options: {
                A: "now that",
                B: "even though",
                C: "before",
                D: "since"
            },
            classification: "c3",
            testId: 7,
            vol: 3,
            correctAnswer: "C",
            translation: "겨울이 시작되기 전, 완벽한 점검과 청소를 위해 바우튼 침니에 전화하세요.",
            explanation: "굴뚝(Chimney) 점검 및 청소(inspection and cleaning)는 겨울이 시작되기 전에 의뢰해야 할 작업이라고 볼 수 있으므로, '~ 전에'라는 의미의 (C) before가 정답이다."
        },
        {
            id: "v3-p5-t7-q109",
            questionNo: 109,
            text: "Ikeda Real Estate Group now ------- text messages to update clients about properties of interest.",
            options: {
                A: "uses",
                B: "users",
                C: "useful",
                D: "using"
            },
            classification: "v1",
            testId: 7,
            vol: 3,
            correctAnswer: "A",
            translation: "이케다 부동산 그룹은 이제 고객들에게 관심 부동산에 대한 새로운 정보를 주기 위해 문자 메시지를 이용한다.",
            explanation: "빈칸은 주어 Ikeda Real Estate Group의 동사 자리로, text messages를 목적어로 취한다. 따라서 (A) uses(이용하다)가 정답이다. (B) users는 복수명사, (C) useful은 형용사, (D) using은 동명사/현재분사로 구조상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t7-q110",
            questionNo: 110,
            text: "According to our records, you are ------- for your annual checkup at Dr. Barell's office.",
            options: {
                A: "willing",
                B: "helpful",
                C: "concerned",
                D: "overdue"
            },
            classification: "a2",
            testId: 7,
            vol: 3,
            correctAnswer: "D",
            translation: "저희 기록에 따르면, 귀하는 배럴 박사 병원에서의 연례 건강 검진 시기를 놓쳤습니다.",
            explanation: "병원 기록을 바탕으로(According to our records) 상대방이 어떤 상태인지 알려주는 주격 보어 자리로, '검진 시기를 놓친'이라는 의미를 완성하는 (D) overdue(기한이 지난, 시기를 놓친)가 정답이다. 참고로, (A) willing은 to부정사와 어울려 쓰인다. (B) helpful과 (C) concerned는 뒤에 각각 도움을 받는 대상, 걱정하는 대상이 와야 한다."
        },
        {
            id: "v3-p5-t7-q111",
            questionNo: 111,
            text: "The employee help desk will be moved to room 530 ------- the Human Resources offices are being renovated.",
            options: {
                A: "opposite",
                B: "that",
                C: "while",
                D: "anywhere"
            },
            classification: "c3",
            testId: 7,
            vol: 3,
            correctAnswer: "C",
            translation: "인사부서 사무실이 개조되는 동안 직원 업무 지원 데스크는 530호로 옮겨질 예정이다.",
            explanation: "빈칸은 완전한 절(the Human Resources offices are being renovated)을 이끄는 접속사 자리로, 빈칸이 이끄는 절이 앞에 있는 주절을 수식하고 있다. 직원 업무 지원 데스크가 530호로 옮겨지는 일은 인사부서 사무실이 개조되는 동안 일어날 일이므로, '~하는 동안'이라는 의미의 부사절 접속사 (C) while이 정답이다. (A) opposite은 형용사/부사/명사/전치사, (B) that은 대명사/한정사/명사절 접속사/형용사절 접속사(관계대명사), (D) anywhere는 대명사/부사로 구조상으로도 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t7-q112",
            questionNo: 112,
            text: "Bray Farm Mart is located ------- Elm Road, near its intersection with Wye Lane.",
            options: {
                A: "about",
                B: "inside",
                C: "beneath",
                D: "along"
            },
            classification: "pr1",
            testId: 7,
            vol: 3,
            correctAnswer: "D",
            translation: "브레이 팜 마트는 엘름 로를 따라가다 보면 와이 길과의 교차로 근처에 있다.",
            explanation: "동사 is located와 Elm Road를 연결하는 자리로, 도로와 어울리는 전치사를 선택해야 한다. 따라서 '~를 따라가는 길 어디에, (기다란 길, 강 등의) 옆에'라는 의미로 쓰일 수 있는 (D) along이 정답이다."
        },
        {
            id: "v3-p5-t7-q113",
            questionNo: 113,
            text: "Our office offers ------- hours to provide our customers with additional flexibility.",
            options: {
                A: "extending",
                B: "extends",
                C: "extend",
                D: "extended"
            },
            classification: "pa2",
            testId: 7,
            vol: 3,
            correctAnswer: "D",
            translation: "우리 사무실은 고객에게 더 많은 유연성을 부여하기 위해 연장 영업 시간을 제공한다.",
            explanation: "동사 offers의 목적어인 명사 hours를 수식하는 형용사 자리이다. 보기에서 형용사 역할을 할 수 있는 현재분사 (A) extending(연장하는)과 과거분사 (D) extended(연장된) 중 하나를 선택해야 한다. 영업 시간은 연장되는 것이므로, 수동의 의미를 내포한 과거분사 (D) extended가 정답이 된다. (B) extends와 (C) extend는 동사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t7-q114",
            questionNo: 114,
            text: "The Arraneo Group has created an online ------- specifically to encourage sales among young people.",
            options: {
                A: "promotion",
                B: "price",
                C: "contact",
                D: "volume"
            },
            classification: "voc1",
            testId: 7,
            vol: 3,
            correctAnswer: "A",
            translation: "아레네오 그룹은 특히 젊은 층에서의 판매를 촉진하기 위해 온라인 판촉 광고를 만들었다.",
            explanation: "동사 has created의 목적어 자리로, 판매를 촉진하기 위해(to encourage sales) 만든 것을 나타내는 명사가 들어가야 한다. 따라서 '판촉 (광고)'라는 의미의 (A) promotion이 정답이다."
        },
        {
            id: "v3-p5-t7-q115",
            questionNo: 115,
            text: "Corracar Ltd. is ------- looking for new ways to expand its transportation network.",
            options: {
                A: "continued",
                B: "continuation",
                C: "continual",
                D: "continually"
            },
            classification: "av1",
            testId: 7,
            vol: 3,
            correctAnswer: "D",
            translation: "코라카 주식회사는 운송망을 확장할 새로운 방법들을 계속해서 찾고 있다.",
            explanation: "be동사 is와 현재분사 looking 사이에서 동사를 수식하는 부사 자리이므로, (D) continually(계속해서)가 정답이다. (A) continued는 과거동사/형용사/과거분사, (B) continuation은 명사, (C) continual은 형용사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t7-q116",
            questionNo: 116,
            text: "Employees may bring their lunch to the meeting and enjoy it ------- the presentation.",
            options: {
                A: "in case",
                B: "during",
                C: "into",
                D: "although"
            },
            classification: "pr1",
            testId: 7,
            vol: 3,
            correctAnswer: "B",
            translation: "직원들은 회의 때 각자 점심 식사를 가져와서 발표 도중 먹어도 된다.",
            explanation: "명사 the presentation을 목적어로 취하는 전치사 자리이다. 발표가 진행되는 중에 식사를 해도 된다는 내용이므로, '~도중에, ~동안'이라는 의미의 (B) during이 정답이다. (C) into는 '~안으로'라는 뜻으로 문맥상 어색하고, (A) in case와 (D) although는 부사절 접속사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t7-q117",
            questionNo: 117,
            text: "The merchandise at Logan's Clothing requires ------- at the beginning of each season.",
            options: {
                A: "reorganize",
                B: "reorganization",
                C: "reorganizes",
                D: "reorganized"
            },
            classification: "n1",
            testId: 7,
            vol: 3,
            correctAnswer: "B",
            translation: "로건 클로딩의 상품은 매 시즌 초반에 재편성을 해야 한다.",
            explanation: "빈칸은 타동사 requires의 목적어 역할을 하는 명사 자리이므로, (B) reorganization(재편성)이 정답이다. (A) reorganize와 (C) reorganizes는 동사, (D) reorganized는 과거동사/과거분사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t7-q118",
            questionNo: 118,
            text: "Interns must complete and return the new hire ------- by their first day of work.",
            options: {
                A: "background",
                B: "management",
                C: "publication",
                D: "paperwork"
            },
            classification: "voc1",
            testId: 7,
            vol: 3,
            correctAnswer: "D",
            translation: "인턴들은 근무 첫날까지 신규 채용자 서류 작성을 완료해 반송해야 한다.",
            explanation: "빈칸은 new hire(신규 채용자)와 복합명사를 이루어 동사 complete and return의 목적어 역할을 하는 자리이다. 따라서 작성해서 다시 보낼 수 있는 대상이 들어가야 하므로, '서류'라는 의미의 (D) paperwork가 정답이다."
        },
        {
            id: "v3-p5-t7-q119",
            questionNo: 119,
            text: "Weekday dining at Jake's Downtown Bistro is by reservation only ------- the high volume of customers.",
            options: {
                A: "regarding",
                B: "as",
                C: "in",
                D: "due to"
            },
            classification: "pr1",
            testId: 7,
            vol: 3,
            correctAnswer: "D",
            translation: "제이크 다운타운 비스트로에서의 평일 식사는 많은 수의 고객 때문에 예약으로만 가능하다.",
            explanation: "빈칸 앞에 온 완전한 절과 명사구 the high volume of customers를 적절히 이어주는 전치사를 선택해야 한다. '많은 수의 고객'은 식사 예약이 필수(by reservation only)가 된 원인이므로, '~때문에'라는 의미의 (D) due to가 정답이다."
        },
        {
            id: "v3-p5-t7-q120",
            questionNo: 120,
            text: "Should anyone need to ------- with Ms. De Sola, be sure to do so prior to today's meeting.",
            options: {
                A: "reflect",
                B: "arrange",
                C: "regard",
                D: "consult"
            },
            classification: "voc1",
            testId: 7,
            vol: 3,
            correctAnswer: "D",
            translation: "누구든 데 솔라 씨와 상의할 필요가 있다면, 반드시 오늘 회의 이전에 하세요.",
            explanation: "전치사 with와 어울려 쓰이는 자동사 자리로, 데 솔라 씨와 함께하는 행위를 나타내야 한다. 따라서 '상의하다, 의논하다'라는 의미의 (D) consult가 정답이다. 참고로, consult는 '(의사, 변호사 등에게) 상담하다, 조언을 구하다'라는 뜻의 타동사로도 쓰인다."
        },
        {
            id: "v3-p5-t7-q121",
            questionNo: 121,
            text: "Mr. Lau looks forward to meeting the ------- students at the Career Day event.",
            options: {
                A: "ambitious",
                B: "ambition",
                C: "ambitiously",
                D: "ambitions"
            },
            classification: "a1",
            testId: 7,
            vol: 3,
            correctAnswer: "A",
            translation: "라우 씨는 직업의 날 행사에서 포부 넘치는 학생들을 만나기를 고대한다.",
            explanation: "빈칸에는 명사 students를 수식하는 형용사나 students와 복합명사를 이루는 명사가 들어갈 수 있다. 문맥상 직업의 날(Career Day) 행사에 오는 학생들(students)의 특성을 묘사하는 형용사가 필요하므로, (A) ambitious(포부 넘치는, 야심찬)가 정답이다. 명사인 ambition은 '야심, 야망'이라는 뜻으로 students와 복합명사를 이룰 수 없으며, (C) ambitiously는 부사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t7-q122",
            questionNo: 122,
            text: "Please ------- daily spending records, since online balance statements may not reflect recent account activity.",
            options: {
                A: "kept",
                B: "keep",
                C: "keeps",
                D: "keeping"
            },
            classification: "v1",
            testId: 7,
            vol: 3,
            correctAnswer: "B",
            translation: "온라인 잔액 명세서가 최근 계좌 활동을 반영하지 않을 수 있으니, 일일 지출 기록을 해두세요.",
            explanation: "Please로 시작하는 명령문의 동사 자리로, 명사구 daily spending records를 목적어로 취한다. 따라서 동사원형인 (B) keep이 정답이다. (A) kept는 과거동사/과거분사, (C) keeps는 현재동사, (D) keeping은 동명사/현재분사로 구조상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t7-q123",
            questionNo: 123,
            text: "Mr. Bhatt ------- promotes people within the company, but he recently went outside of the organization to replace the Facilities Director.",
            options: {
                A: "later",
                B: "forgetfully",
                C: "together",
                D: "normally"
            },
            classification: "voc1",
            testId: 7,
            vol: 3,
            correctAnswer: "D",
            translation: "바트 씨는 보통 회사 내부 사람들을 승진시키지만, 최근에는 시설 책임자를 교체하기 위해 조직 외부로 나가서 구했다.",
            explanation: "접속사 but이 두 절을 연결하고 있으므로, 빈칸이 포함된 절은 바트 씨가 '최근에(recently)' 시설 책임자를 교체하기 위해 '조직 외부로(outside of the organization)' 나가서 사람을 영입해 온 것과 상반되는 내용이 되어야 한다. 따라서 '보통은 회사 내부 사람들(people within the company)'을 책임자로 승진시킨다는 의미를 완성하는 (D) normally(보통, 일반적으로)가 정답이다."
        },
        {
            id: "v3-p5-t7-q124",
            questionNo: 124,
            text: "The National Health Agency's latest report ------- that recently adopted health-care regulations have been successful.",
            options: {
                A: "concludes",
                B: "concluding",
                C: "conclusion",
                D: "to conclude"
            },
            classification: "v1",
            testId: 7,
            vol: 3,
            correctAnswer: "A",
            translation: "국립보건청의 최근 보고서는 근래에 채택된 보건 규정이 성공적이었다는 결론을 내렸다.",
            explanation: "주어 The National Health Agency's latest report의 동사 자리로, that절을 목적어로 취한다. 따라서 (A) concludes(결론을 내리다)가 정답이다. 동명사/현재분사인 (B) concluding과 to부정사인 (D) to conclude는 본동사 역할을 할 수 없으며, (C) conclusion은 명사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t7-q125",
            questionNo: 125,
            text: "------- who wants to attend the luncheon next week must tell Ms. Hasegawa by noon tomorrow.",
            options: {
                A: "Anyone",
                B: "Some",
                C: "Those",
                D: "Other"
            },
            classification: "p2",
            testId: 7,
            vol: 3,
            correctAnswer: "A",
            translation: "다음 주 오찬에 참석하고 싶은 사람은 내일 정오까지 하세가와 씨에게 이야기해야 한다.",
            explanation: "관계대명사 who의 선행사 자리로, 관계사절의 단수동사 wants와 수가 일치하는 대명사가 들어가야 한다. 따라서 (A) Anyone이 정답이다. (C) Those는 복수형 대명사이므로 빈칸에 들어가려면 관계사절에 want가 쓰여야 한다. (B) Some(몇몇의 사람)은 수가 일치하지 않으며 문맥상으로도 어색하고, (D) Other는 the 없이 단독으로 대명사 역할을 할 수 없다."
        },
        {
            id: "v3-p5-t7-q126",
            questionNo: 126,
            text: "Once orders are processed by the sales office, they are ------- within 48 hours.",
            options: {
                A: "committed",
                B: "positioned",
                C: "filled",
                D: "occurred"
            },
            classification: "pa2",
            testId: 7,
            vol: 3,
            correctAnswer: "C",
            translation: "영업소에서 주문을 처리하면 48시간 이내에 이행된다.",
            explanation: "주어 they가 앞에 나온 orders를 가리키므로, 빈칸에는 주문이 처리되고 나서(Once orders are processed) 48시간 내에 이루어지는 일을 나타내는 동사가 들어가야 한다. 따라서 '이행되다'라는 의미를 완성하는 (C) filled가 정답이다. 여기서 fill은 '(요청 받은 것을) 제공하다'라는 뜻을 나타내며, fill an order는 고정된 표현으로 알아두는 것이 좋다."
        },
        {
            id: "v3-p5-t7-q127",
            questionNo: 127,
            text: "Profits at Talhee Beverage Co. rose about 4 percent last year, according to new figures ------- by the company.",
            options: {
                A: "to release",
                B: "releasing",
                C: "released",
                D: "have released"
            },
            classification: "pa2",
            testId: 7,
            vol: 3,
            correctAnswer: "C",
            translation: "사측에서 발표한 새 수치에 따르면, 탈희 베버리지 사의 수익은 작년에 약 4퍼센트 올랐다.",
            explanation: "빈칸은 명사구 new figures를 뒤에서 수식하는 자리이다. 수치는 회사에 의해(by the company) 발표되는 것이므로, 수동의 의미를 내포한 과거분사 (C) released가 정답이다. to부정사 (A) to release와 현재분사 (B) releasing은 능동의 의미를 나타내며 타동사로서 목적어가 필요하므로 오답이다. 또한 according to가 전치사이기 때문에 본동사 형태인 (D) have released도 구조상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t7-q128",
            questionNo: 128,
            text: "------- the CEO and the CFO are authorized to sign checks over $10,000.",
            options: {
                A: "Each",
                B: "Either",
                C: "Both",
                D: "Whoever"
            },
            classification: "c5",
            testId: 7,
            vol: 3,
            correctAnswer: "C",
            translation: "최고 경영자와 최고 재무 책임자 둘 다 10,000달러 이상의 수표에 서명할 권한이 있다.",
            explanation: "빈칸은 and와 함께 상관접속사를 이루어 최고 경영자(the CEO)와 최고 재무 책임자(the CFO)를 연결해주고 있다. 따라서 'A와 B 둘 다'라는 뜻을 완성하는 (C) Both가 정답이다. 참고로, (A) Each는 한정사로 쓰일 경우 뒤에 관사 없이 단수명사가 와야 하고, (B) Either는 and가 아닌 or와 함께 상관접속사를 이룬다. (D) Whoever는 명사절/부사절 접속사 역할을 하므로 구조상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t7-q129",
            questionNo: 129,
            text: "There are multiple reasons ------- cost to negotiate a new agreement.",
            options: {
                A: "also",
                B: "besides",
                C: "indeed",
                D: "yet"
            },
            classification: "pr1",
            testId: 7,
            vol: 3,
            correctAnswer: "B",
            translation: "비용 이외에도 신규 계약을 협상할 이유는 많다.",
            explanation: "빈칸 앞에 '여러 가지 이유가 있다'라는 완전한 절이 왔으므로, 빈칸 뒤 cost는 명사, to negotiate a new agreement는 reasons를 수식하는 to부정사구로 보아야 한다. 따라서 빈칸에는 cost를 목적어로 취해 수식어구를 이루는 전치사가 들어가야 하므로, '~이외에도'라는 의미의 (B) besides가 정답이다. (A) also, (C) indeed는 부사, (D) yet은 부사/접속사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t7-q130",
            questionNo: 130,
            text: "Editors at Benchley Press are skilled at reading texts ------- to correct errors and polish the prose.",
            options: {
                A: "sensibly",
                B: "perfectly",
                C: "tightly",
                D: "closely"
            },
            classification: "av1",
            testId: 7,
            vol: 3,
            correctAnswer: "D",
            translation: "벤칠리 프레스의 편집자들은 오류를 고치고 글을 다듬기 위해 지문을 면밀히 읽는 것에 능숙하다.",
            explanation: "동명사구 reading texts를 적절히 수식하는 부사를 선택해야 한다. 편집자들이 오류를 고치고 글을 다듬기 위해 지문을 읽는 방식을 묘사하는 단어가 들어가야 하므로, '면밀하게, 주의 깊게'라는 의미의 (D) closely가 정답이다."
        }
    ]
};
