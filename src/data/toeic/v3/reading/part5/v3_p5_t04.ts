import { Part5TestSet } from '../../v4/reading/part5/types';

export const test4Data: Part5TestSet = {
    testId: 4,
    vol: 3,
    title: "Part 5 Real Test 4",
    questions: [
        {
            id: "v3-p5-t4-q101",
            questionNo: 101,
            text: "Mr. Akagi was unable to buy tickets for the concert because ------- was sold out.",
            options: {
                A: "it",
                B: "others",
                C: "any",
                D: "they"
            },
            classification: "p1",
            testId: 4,
            vol: 3,
            correctAnswer: "A",
            translation: "콘서트가 매진되어 아카기 씨는 입장권을 구입할 수 없었다.",
            explanation: "빈칸에는 매진이 된(sold out) 대상을 가리키며 단수동사 was와 수가 일치하는 대명사가 들어가야 한다. 따라서 (A) it이 정답이다. 참고로, 여기서 it은 the concert를 가리키며, 표(tickets)가 매진되었다고 하려면 it was 대신에 they were가 쓰여야 한다."
        },
        {
            id: "v3-p5-t4-q102",
            questionNo: 102,
            text: "Classes ------- using the new employee scheduling software will begin in December.",
            options: {
                A: "at",
                B: "to",
                C: "by",
                D: "on"
            },
            classification: "pr1",
            testId: 4,
            vol: 3,
            correctAnswer: "D",
            translation: "신입 직원 일정 관리 소프트웨어 활용에 관한 강좌들은 12월에 시작될 것이다.",
            explanation: "빈칸은 동명사구 using the new employee scheduling software를 목적어로 취하는 전치사 자리이다. '신입 직원 일정 관리 소프트웨어 활용'은 강좌(Classes)의 주제를 나타내므로, '~에 관한'이라는 의미로 쓰일 수 있는 (D) on이 정답이다."
        },
        {
            id: "v3-p5-t4-q103",
            questionNo: 103,
            text: "Hillsdale Fabrics' ------- collection of leathers was imported from Italy.",
            options: {
                A: "diversity",
                B: "diversely",
                C: "diversify",
                D: "diverse"
            },
            classification: "a1",
            testId: 4,
            vol: 3,
            correctAnswer: "D",
            translation: "힐스데일 패브릭의 다양한 가죽 제품들은 이탈리아에서 수입되었다.",
            explanation: "소유격 Hillsdale Fabrics'와 함께 명사 collection을 수식하는 형용사 자리이므로, (D) diverse(다양한)가 정답이다. (A) diversity는 명사, (B) diversely는 부사, (C) diversify는 동사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t4-q104",
            questionNo: 104,
            text: "A ------- of four dental hygienists spoke about careers in their field.",
            options: {
                A: "plan",
                B: "panel",
                C: "support",
                D: "version"
            },
            classification: "voc1",
            testId: 4,
            vol: 3,
            correctAnswer: "B",
            translation: "네 명의 치과위생사들은 자신들의 분야에서의 경력에 대해 이야기했다.",
            explanation: "빈칸은 동사 spoke의 주어 역할을 하는 명사구를 이루는 부분으로, 전문가 그룹(four dental hygienists)을 나타내는 명사가 들어가야 자연스럽다. 따라서 '패널, 전문가 집단'이라는 의미의 (B) panel이 정답이다. A group/team/panel of는 빈출 표현이니 암기해 두는 것이 좋다."
        },
        {
            id: "v3-p5-t4-q105",
            questionNo: 105,
            text: "Ardentine Realty is ------- seeking new rental properties for its portfolio.",
            options: {
                A: "actively",
                B: "activate",
                C: "activity",
                D: "active"
            },
            classification: "av1",
            testId: 4,
            vol: 3,
            correctAnswer: "A",
            translation: "아덴틴 부동산은 보유 상품 목록에 넣을 새 임대 매물을 열심히 찾고 있다.",
            explanation: "be동사 is와 현재분사 seeking 사이에서 동사를 수식하는 부사 자리이므로, (A) actively(적극적으로, 열심히)가 정답이다. (B) activate는 동사, (C) activity는 명사, (D) active는 형용사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t4-q106",
            questionNo: 106,
            text: "This Friday, Zone Fly Cameras invites the public to a free aerial photography -------.",
            options: {
                A: "picture",
                B: "ticket",
                C: "action",
                D: "workshop"
            },
            classification: "voc1",
            testId: 4,
            vol: 3,
            correctAnswer: "D",
            translation: "이번 주 금요일, 존 플라이 카메라는 무료 항공사진 워크숍에 일반인들을 초청한다.",
            explanation: "빈칸은 형용사 free의 수식을 받는 명사 자리로, 일반인들을 초청할 만한(invites the public to) 행사를 나타내는 명사가 들어가야 한다. 따라서 '워크숍, 연수회'라는 의미의 (D) workshop이 정답이다."
        },
        {
            id: "v3-p5-t4-q107",
            questionNo: 107,
            text: "The Ambury Prize recognizes research that is notable for its ------- and innovation.",
            options: {
                A: "creative",
                B: "creatively",
                C: "creativity",
                D: "creates"
            },
            classification: "n1",
            testId: 4,
            vol: 3,
            correctAnswer: "C",
            translation: "앰버리 상은 창의성과 혁신성으로 주목할 만한 연구를 표창한다.",
            explanation: "빈칸은 뒤에 오는 명사 innovation과 함께 병렬 구조를 이루어 전치사 for의 목적어 역할을 하는 자리이므로, 명사인 (C) creativity(창의성)가 정답이다. (A) creative는 형용사, (B) creatively는 부사, (D) creates는 동사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t4-q108",
            questionNo: 108,
            text: "This year the harvest parade will ------- the village, beginning and ending at the town square.",
            options: {
                A: "spin",
                B: "circle",
                C: "roll",
                D: "loosen"
            },
            classification: "voc1",
            testId: 4,
            vol: 3,
            correctAnswer: "B",
            translation: "올해 추수 행렬은 마을을 도는데, 마을 광장에서 시작하고 마무리될 것이다.",
            explanation: "빈칸은 주어 the harvest parade의 동사 자리로, 문맥상 행렬이 마을을 도는 행위를 나타내는 단어가 들어가야 한다. 따라서 '(원을 그리며 ~ 주위를) 순회하다'라는 의미의 (B) circle이 정답이다. 참고로, (A) spin은 제자리에서 회전시키는 행위를, (C) roll은 굴리는 행위를 나타내므로 빈칸에 적절하지 않다."
        },
        {
            id: "v3-p5-t4-q109",
            questionNo: 109,
            text: "Questwiz, the library's newest database, ------- a wide range of resource materials.",
            options: {
                A: "to contain",
                B: "contains",
                C: "container",
                D: "containing"
            },
            classification: "v1",
            testId: 4,
            vol: 3,
            correctAnswer: "B",
            translation: "도서관의 최신 데이터베이스인 퀘스트위즈에는 광범위한 자료가 들어 있다.",
            explanation: "빈칸은 주어 Questwiz의 동사 자리로, a wide range of resource materials를 목적어로 취한다. 따라서 문장의 동사 역할을 할 수 있는 (B) contains(포함하다)가 정답이다. to부정사인 (A) to contain과 동명사/현재분사인 (D) containing은 본동사 역할을 할 수 없으며, (C) container는 명사이므로 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t4-q110",
            questionNo: 110,
            text: "After more than three years, the application for the new patent was ------- approved.",
            options: {
                A: "already",
                B: "finally",
                C: "constantly",
                D: "exactly"
            },
            classification: "voc1",
            testId: 4,
            vol: 3,
            correctAnswer: "B",
            translation: "새 특허권 신청은 3년도 더 걸린 후에야 마침내 승인됐다.",
            explanation: "'3년도 더 걸린 후에야(After more than three years)'라는 시간 표현에 상응하는 부사가 들어가야 하므로, '마침내'라는 의미의 (B) finally가 정답이다."
        },
        {
            id: "v3-p5-t4-q111",
            questionNo: 111,
            text: "The First Street Hotel has almost always been fully booked since it ------- last year.",
            options: {
                A: "had renovated",
                B: "renovated",
                C: "was renovating",
                D: "was renovated"
            },
            classification: "v2",
            testId: 4,
            vol: 3,
            correctAnswer: "D",
            translation: "퍼스트 스트리트 호텔은 작년에 개조된 이래 거의 항상 만실이다.",
            explanation: "빈칸의 주어인 it은 The First Street Hotel을 가리키는데, 빈칸 뒤에 목적어가 없으므로 문맥상 호텔이 개조되었다는 내용이 되어야 한다. 따라서 수동태인 (D) was renovated가 정답이다. (A) had renovated, (B) renovated, (C) was renovating은 모두 능동태 동사로 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t4-q112",
            questionNo: 112,
            text: "Departments should not spend an ------- amount of their budgets on office supplies.",
            options: {
                A: "equal",
                B: "exciting",
                C: "excessive",
                D: "unknown"
            },
            classification: "voc1",
            testId: 4,
            vol: 3,
            correctAnswer: "C",
            translation: "부서들은 예산에서 과도한 금액을 사무용품에 지출해서는 안 된다.",
            explanation: "빈칸은 명사 amount를 수식하는 형용사 자리로, '지출해서는 안 된다(should not spend)'라는 동사구와 상응하는 단어가 들어가야 한다. 즉, 예산에서 너무 많은 금액을 지출하면 안 된다는 내용이 되어야 자연스러우므로, '과도한, 지나친'이라는 의미의 (C) excessive가 정답이다."
        },
        {
            id: "v3-p5-t4-q113",
            questionNo: 113,
            text: "Maxwell Copies prints brochures on thick, glossy paper that was ------- selected for its quality and durability.",
            options: {
                A: "caring",
                B: "careful",
                C: "carefully",
                D: "cares"
            },
            classification: "av1",
            testId: 4,
            vol: 3,
            correctAnswer: "C",
            translation: "맥스웰 카피스는 품질과 내구성을 고려해 신중하게 선정한 두껍고 광택 나는 종이에 안내책자를 인쇄한다.",
            explanation: "be동사 was와 과거분사 selected 사이에서 동사를 수식하는 부사 자리이므로, (C) carefully(신중하게)가 정답이다. (A) caring은 형용사/현재분사, (B) careful은 형용사, (D) cares는 동사/명사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t4-q114",
            questionNo: 114,
            text: "------- Mr. Kamau has worked for Mombasa Communications for two years, he has never taken time off.",
            options: {
                A: "Although",
                B: "But",
                C: "Neither",
                D: "Yet"
            },
            classification: "c3",
            testId: 4,
            vol: 3,
            correctAnswer: "A",
            translation: "카마우 씨는 몸바사 커뮤니케이션즈에서 2년 동안 일했지만 한 번도 휴가를 쓴 적이 없다.",
            explanation: "빈칸은 뒤에 오는 절(Mr. Kamau has worked ~ two years)을 이끌어 주절(he has never taken time off)을 수식하는 자리이다. 따라서 '비록 ~이긴 하지만'이라는 의미의 부사절 접속사 (A) Although가 정답이다. 참고로, (B) But과 (D) Yet은 등위접속사로 해당 문장에서 콤마 뒤에 올 수는 있으나 빈칸에 들어갈 수는 없다."
        },
        {
            id: "v3-p5-t4-q115",
            questionNo: 115,
            text: "At the Morrighan Hotel, addressing customer feedback is of ------- importance.",
            options: {
                A: "critique",
                B: "critic",
                C: "critically",
                D: "critical"
            },
            classification: "a2",
            testId: 4,
            vol: 3,
            correctAnswer: "D",
            translation: "모리건 호텔에서는 고객 의견에 대처하는 일을 매우 중시한다.",
            explanation: "빈칸은 명사 importance를 수식하는 형용사 자리이므로, (D) critical(대단히 중요한, 중대한)이 정답이다. 참고로, 「of + 추상명사」는 의미상 형용사와 같은 역할을 하며, be of great/critical/vital importance 등은 '매우 중요하다'라는 뜻을 나타낸다. (A) critique는 명사/동사, (B) critic은 명사, (C) critically는 부사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t4-q116",
            questionNo: 116,
            text: "Axofare's new computer program enables users to ------- organize and retrieve data.",
            options: {
                A: "efficiently",
                B: "irreversibly",
                C: "vaguely",
                D: "especially"
            },
            classification: "voc1",
            testId: 4,
            vol: 3,
            correctAnswer: "A",
            translation: "액소페어의 새로운 컴퓨터 프로그램은 사용자가 데이터를 효율적으로 정리하고 검색할 수 있도록 해 준다.",
            explanation: "새로운 컴퓨터 프로그램(new computer program)이 데이터를 정리하고 검색하는(organize and retrieve data) 방식을 적절히 묘사하는 부사가 빈칸에 들어가야 한다. 따라서 '효율적으로'라는 의미의 (A) efficiently가 정답이다."
        },
        {
            id: "v3-p5-t4-q117",
            questionNo: 117,
            text: "Trelmoni Corporation has just released its ------- of the global stock market.",
            options: {
                A: "analysis",
                B: "analytical",
                C: "analyze",
                D: "analyzed"
            },
            classification: "n1",
            testId: 4,
            vol: 3,
            correctAnswer: "A",
            translation: "트렐모니 사는 세계 주식 시장 분석을 방금 발표했다.",
            explanation: "빈칸은 동사 has just released의 목적어 역할을 하며 소유격 대명사 its의 수식을 받는 자리이다. 따라서 명사인 (A) analysis(분석)가 정답이다. (B) analytical은 형용사, (C) analyze는 동사, (D) analyzed는 동사/과거분사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t4-q118",
            questionNo: 118,
            text: "Liu's Foods is pleased to reveal the ------- product in its famous soup line: pumpkin soup.",
            options: {
                A: "popularity of",
                B: "as popular as",
                C: "most popular",
                D: "popular than"
            },
            classification: "com3",
            testId: 4,
            vol: 3,
            correctAnswer: "C",
            translation: "리우 푸즈는 자사의 유명한 수프 제품군에서 가장 인기 있는 제품인 호박 수프를 알리게 되어 기쁘게 생각한다.",
            explanation: "빈칸은 to reveal(알리다, 공개하다)의 목적어인 product를 수식하는 형용사 자리이다. '수프 제품군에서 가장 인기 있는 제품인 호박 수프'라는 내용이 되어야 자연스러우므로, the와 함께 최상급 표현을 완성하는 (C) most popular가 정답이다. (A) popularity of의 경우 구조상으로 빈칸에 들어갈 수 있으나, '인기'라는 뜻으로 앞뒤 문맥상 적절하지 않다."
        },
        {
            id: "v3-p5-t4-q119",
            questionNo: 119,
            text: "The proposed city budget outlines various projects, ------- renovations of the Fessler Road fire station.",
            options: {
                A: "these",
                B: "including",
                C: "even though",
                D: "always"
            },
            classification: "pr2",
            testId: 4,
            vol: 3,
            correctAnswer: "B",
            translation: "제안된 시 예산은 페슬러 로드 소방서 개조를 비롯해 다양한 프로젝트를 설명하고 있다.",
            explanation: "빈칸은 명사구 renovations of the Fessler Road fire station을 목적어로 취해 앞에 온 절을 수식해 주는 전치사 자리이다. 따라서 분사형 전치사 (B) including(~을 포함하여)이 정답이다. (A) these는 형용사/지시대명사, (C) even though는 접속사, (D) always는 부사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t4-q120",
            questionNo: 120,
            text: "The ------- opening of the new bakery had to be postponed when a pipe burst in the kitchen.",
            options: {
                A: "scheduled",
                B: "maintained",
                C: "motivated",
                D: "experienced"
            },
            classification: "voc1",
            testId: 4,
            vol: 3,
            correctAnswer: "A",
            translation: "예정되었던 새 제과점 개업식은 주방에서 배관이 터지자 연기되어야 했다.",
            explanation: "명사 opening을 수식하는 자리로, 개업식이 연기된(opening ~ had to be postponed) 상황과 어울리는 일정 관련 형용사가 들어가야 자연스럽다. 따라서 '예정된'이라는 의미의 (A) scheduled가 정답이다."
        },
        {
            id: "v3-p5-t4-q121",
            questionNo: 121,
            text: "Two associates in the accounting department are being ------- for promotions.",
            options: {
                A: "consider",
                B: "considerable",
                C: "considered",
                D: "consideration"
            },
            classification: "v2",
            testId: 4,
            vol: 3,
            correctAnswer: "C",
            translation: "회계 부서에 있는 두 명의 직원들이 승진 대상으로 고려되고 있다.",
            explanation: "주어인 Two associates가 승진(for promotions) 고려되는 대상이므로, 동사 consider가 수동태로 쓰여야 한다. 따라서 are being과 결합해 현재진행 수동태를 이루는 과거분사 (C) considered가 정답이다. (A) consider는 능동태 동사원형, (B) considerable은 형용사, (D) consideration은 명사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t4-q122",
            questionNo: 122,
            text: "------- the rock band Captain Zino decided to offer free tickets to their concert, sales of their album have reached record numbers.",
            options: {
                A: "Since",
                B: "Besides",
                C: "As much as",
                D: "Not only"
            },
            classification: "v4",
            testId: 4,
            vol: 3,
            correctAnswer: "A",
            translation: "록밴드 캡틴 지노가 콘서트 무료 입장권을 제공하기로 결정한 이후, 앨범 판매량이 기록적인 수치에 달했다.",
            explanation: "빈칸은 완전한 절(the rock band Captain Zino decided to ~ concert)을 이끌어 주절을 수식하는 부사절 접속사 자리이다. 록밴드가 무료 입장권을 제공하기로 결정한 과거(decided) 시점 이후 기록적인 수치에 달했다(have reached)는 내용이므로, '~한 이래로, ~한 이후'라는 뜻의 (A) Since가 정답이다. (B) Besides는 전치사/부사로 완전한 절을 이끌 수 없다. (C) As much as는 접속사로 쓰일 수 있으나 '~한 만큼, ~일지라도'라는 뜻으로 문맥상 어색하다. (D) Not only는 문두에 올 경우 뒤따르는 주어와 동사가 도치되어야 하므로 구조상으로도 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t4-q123",
            questionNo: 123,
            text: "------- her interview, the committee agreed that Ms. Han was the best candidate for the supervisor job.",
            options: {
                A: "As in",
                B: "Just as",
                C: "Almost",
                D: "After"
            },
            classification: "pr1",
            testId: 4,
            vol: 3,
            correctAnswer: "D",
            translation: "한 씨의 면접 후, 위원회는 그녀가 관리직에 가장 맞는 지원자라는 데 동의했다.",
            explanation: "명사구 her interview를 목적어로 취하는 전치사 자리로, 문맥상 '면접 후 최고의 지원자로 평가되었다'라는 내용이 되어야 자연스럽다. 따라서 (D) After가 정답이다. (A) As in은 '~의 경우와 같이, ~와 마찬가지로', (B) Just as는 '딱 ~만큼'이라는 뜻으로 적절하지 않다. 부사 (C) Almost는 구조상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t4-q124",
            questionNo: 124,
            text: "After monitoring the Hasher Corporation's inventory control process ------- several days, the consultant identified the problem.",
            options: {
                A: "among",
                B: "except",
                C: "off",
                D: "for"
            },
            classification: "pr1",
            testId: 4,
            vol: 3,
            correctAnswer: "D",
            translation: "자문 위원은 해서 사의 재고 목록 관리 과정을 며칠 동안 지켜본 후 문제점을 찾아냈다.",
            explanation: "빈칸은 명사구 several days를 목적어로 취하는 자리이므로, 기간을 나타내는 전치사가 들어가야 자연스럽다. 따라서 '~ 동안'이라는 의미로 쓰일 수 있는 (D) for가 정답이다."
        },
        {
            id: "v3-p5-t4-q125",
            questionNo: 125,
            text: "Crane operators must check that all moving parts of the machine are fastened ------- before use.",
            options: {
                A: "security",
                B: "securely",
                C: "secures",
                D: "securing"
            },
            classification: "av1",
            testId: 4,
            vol: 3,
            correctAnswer: "B",
            translation: "크레인 기사는 기계 사용 전 모든 가동부가 단단히 고정되어 있는지 확인해야 한다.",
            explanation: "빈칸은 앞에 온 동사 are fastened를 수식하는 부사 자리이므로, (B) securely(단단히)가 정답이다. (A) security는 명사, (C) secures는 동사, (D) securing은 현재분사/동명사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t4-q126",
            questionNo: 126,
            text: "Use this coupon to ------- a free quote for cloud storage services.",
            options: {
                A: "advertise",
                B: "discount",
                C: "develop",
                D: "obtain"
            },
            classification: "voc1",
            testId: 4,
            vol: 3,
            correctAnswer: "D",
            translation: "이 쿠폰을 이용해 클라우드 저장 서비스의 무료 견적을 받아보세요.",
            explanation: "빈칸은 명사구 a free quote for cloud storage services를 목적어로 취하는 to부정사구의 동사 자리이다. 문맥상 무료 견적과 관계가 있는 행위가 들어가야 하므로, '받다, 획득하다'라는 의미의 (D) obtain이 정답이다."
        },
        {
            id: "v3-p5-t4-q127",
            questionNo: 127,
            text: "By testing the ------- of the vehicle in desert terrain, the designers proved that it works perfectly in harsh conditions.",
            options: {
                A: "enduring",
                B: "endurance",
                C: "endures",
                D: "endure"
            },
            classification: "n1",
            testId: 4,
            vol: 3,
            correctAnswer: "B",
            translation: "설계자들은 사막 지역에서 차량의 내구성을 시험함으로써 혹독한 환경에서도 완벽하게 작동한다는 것을 입증했다.",
            explanation: "빈칸은 동명사 testing의 목적어 역할을 하며 전치사구 of the vehicle의 수식을 받는 자리이다. 따라서 명사인 (B) endurance(내구성)가 정답이다. (A) enduring은 형용사/현재분사, (C) endures와 (D) endure는 동사로 품사상 빈칸에 들어갈 수 없다. 참고로, the와 of 사이에 동명사가 들어갈 경우 of 뒤에 오는 명사가 동명사의 의미상 목적어 역할을 하게 되는데(eg. the supplying of equipment), 이 문장에서는 앞뒤 문맥상 어울리지 않으므로 enduring을 동명사로 보더라도 (A)는 정답이 될 수 없다."
        },
        {
            id: "v3-p5-t4-q128",
            questionNo: 128,
            text: "The flashing yellow light serves as an ------- that the camera's battery needs to be charged.",
            options: {
                A: "example",
                B: "allowance",
                C: "alert",
                D: "administration"
            },
            classification: "voc1",
            testId: 4,
            vol: 3,
            correctAnswer: "C",
            translation: "노란 불빛이 깜빡이는 것은 카메라 배터리를 충전해야 한다는 경보 역할을 한다.",
            explanation: "빈칸은 that절과 동격을 이루는 명사 자리로, 카메라 배터리를 충전해야 할 때 깜빡이는 노란 불빛(The flashing yellow light)의 역할(serves as)을 나타내는 단어가 들어가야 한다. 따라서 '경보, 알림'이라는 의미의 (C) alert가 정답이다."
        },
        {
            id: "v3-p5-t4-q129",
            questionNo: 129,
            text: "Ms. Rosen did not say ------- about the plans for a new employee break room.",
            options: {
                A: "several",
                B: "anything",
                C: "each",
                D: "someone"
            },
            classification: "p1",
            testId: 4,
            vol: 3,
            correctAnswer: "B",
            translation: "로젠 씨는 새 직원휴게실 계획에 대해 아무 말도 하지 않았다.",
            explanation: "빈칸은 동사 did not say의 직접 목적어 역할을 하는 대명사 자리이다. 부정어 not과 어울려 쓰여 '계획에 대해 아무 말도 하지 않았다'라는 내용을 완성해야 하므로, (B) anything이 정답이다."
        },
        {
            id: "v3-p5-t4-q130",
            questionNo: 130,
            text: "Revenue growth exceeding 2 percent was seen ------- all business segments this quarter.",
            options: {
                A: "across",
                B: "into",
                C: "prior to",
                D: "above"
            },
            classification: "pr1",
            testId: 4,
            vol: 3,
            correctAnswer: "A",
            translation: "이번 분기에는 모든 사업부에서 2퍼센트가 넘는 수익 증가를 보였다.",
            explanation: "빈칸은 명사구 all business segments를 목적어로 취하는 전치사 자리로, 문맥상 '모든 사업부에 걸쳐서'라는 내용이 되어야 자연스럽다. 따라서 '전체에 걸쳐, 온 ~에'라는 의미의 (A) across가 정답이다. 참고로, across는 areas, regions, sectors, country, world와 같이 부문, 범위, 지역을 나타내는 명사와 자주 쓰인다."
        }
    ]
};
