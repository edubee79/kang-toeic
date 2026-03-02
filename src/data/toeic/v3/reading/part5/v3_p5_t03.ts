import { Part5TestSet } from '../../v4/reading/part5/types';

export const test3Data: Part5TestSet = {
    testId: 3,
    vol: 3,
    title: "Part 5 Real Test 3",
    questions: [
        {
            id: "v3-p5-t3-q101",
            questionNo: 101,
            text: "Vantage Automotive Design has recently ------- with the Pallax Company.",
            options: {
                A: "merge",
                B: "merger",
                C: "merged",
                D: "merging"
            },
            classification: "v4",
            testId: 3,
            vol: 3,
            correctAnswer: "C",
            translation: "밴티지 오토모티브 디자인은 최근 팔랙스 사와 합병했다.",
            explanation: "빈칸은 has와 함께 현재완료 동사를 이루는 과거분사 자리이다. 따라서 (C) merged가 정답이다. 부사 recently가 현재완료와 자주 쓰인다는 점을 알아두면 좋다. (A) merge는 동사원형, (B) merger는 가산명사, (D) merging은 동명사/현재분사로 구조상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t3-q102",
            questionNo: 102,
            text: "Rain is predicted this weekend, ------- the office picnic will have to be postponed.",
            options: {
                A: "so",
                B: "for",
                C: "but",
                D: "nor"
            },
            classification: "c1",
            testId: 3,
            vol: 3,
            correctAnswer: "A",
            translation: "이번 주말에 비가 올 것으로 예보되고 있어서, 회사 야유회는 연기되어야 할 것이다.",
            explanation: "빈칸 앞에서 주말에 비가 올 것으로 예보되고 있다(Rain is predicted this weekend)고 했고, 뒤에서 이를 근거로 회사 야유회를 미뤄야 한다(the office picnic will have to be postponed)고 판단하고 있다. 따라서 '그래서'라는 의미의 (A) so가 정답이다. 참고로, (B) for가 등위접속사로 쓰일 경우, for 뒤에 원인을 설명하는 절이 와야 한다. (D) nor는 앞에 부정문이 와야 하고, 뒤에는 주어와 동사가 도치된 절이 와야 한다."
        },
        {
            id: "v3-p5-t3-q103",
            questionNo: 103,
            text: "Use an alternative shipping firm if Greer Freight is unable to expedite delivery of ------- order.",
            options: {
                A: "you",
                B: "your",
                C: "yours",
                D: "your-selves"
            },
            classification: "p1",
            testId: 3,
            vol: 3,
            correctAnswer: "B",
            translation: "그리어 화물이 귀하의 주문 배송을 신속히 처리할 수 없다면, 대체 가능한 다른 배송업체를 이용하십시오.",
            explanation: "전치사 of의 목적어 역할을 하는 명사 order를 한정 수식하는 자리이다. 따라서 소유격 인칭대명사 (B) your가 정답이다."
        },
        {
            id: "v3-p5-t3-q104",
            questionNo: 104,
            text: "The cafeteria is featuring dishes ------- different regions of the world this week.",
            options: {
                A: "over",
                B: "through",
                C: "into",
                D: "from"
            },
            classification: "pr1",
            testId: 3,
            vol: 3,
            correctAnswer: "D",
            translation: "이번 주에 카페테리아에서 전 세계 다양한 지역의 요리들을 특별히 선보인다.",
            explanation: "명사구 different regions를 목적어로 취해 dishes를 수식하는 전치사 자리이다. '다양한 지역'은 요리들(dishes)의 출처라고 볼 수 있으므로, '~로부터, ~출신의'라는 의미의 (D) from이 정답이다."
        },
        {
            id: "v3-p5-t3-q105",
            questionNo: 105,
            text: "Ms. Patel is coming to Delhi today to visit possible ------- for her company's new warehouse.",
            options: {
                A: "locating",
                B: "locations",
                C: "located",
                D: "locate"
            },
            classification: "n1",
            testId: 3,
            vol: 3,
            correctAnswer: "B",
            translation: "파텔 씨는 회사의 새 창고로 쓰일 수 있는 장소들을 방문하기 위해 오늘 델리에 올 것이다.",
            explanation: "형용사 possible의 수식을 받으며 to visit의 목적어 역할을 하는 명사 자리이다. 따라서 방문할 곳을 나타내는 (B) locations(장소)가 정답이다. (A) locating은 동명사/현재분사, (C) located는 동사/과거분사, (D) locate는 동사로 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t3-q106",
            questionNo: 106,
            text: "Clydeway, Inc., has grown dramatically ------- its beginnings as a small corner grocery store.",
            options: {
                A: "since",
                B: "such",
                C: "except",
                D: "however"
            },
            classification: "v4",
            testId: 3,
            vol: 3,
            correctAnswer: "A",
            translation: "클라이드웨이 주식회사는 작고 구석진 식료품점으로 시작한 이래로 급속히 성장해 왔다.",
            explanation: "명사구 its beginnings를 목적어로 취하는 전치사 자리이다. 앞에 현재완료 동사(has grown)가 있으므로, 과거 시점(its beginnings)부터 현재까지의 시간을 나타내는 단어가 들어가야 자연스럽다. 따라서 '~이래로'라는 의미의 (A) since가 정답이다. 참고로, since는 부사절 접속사나 부사로도 쓰일 수 있다. (C) except는 '~을 제외하고'라는 뜻으로 문맥상 어색하며, (B) such는 한정사/대명사/부사, (D) however는 부사/부사절 접속사로 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t3-q107",
            questionNo: 107,
            text: "When booking a flight, it is wise to ------- the guidelines for luggage size on the airline's Web site.",
            options: {
                A: "check",
                B: "close",
                C: "approve",
                D: "list"
            },
            classification: "voc1",
            testId: 3,
            vol: 3,
            correctAnswer: "A",
            translation: "항공권을 예약할 때 해당 항공사 웹사이트에서 수하물 크기 지침을 확인하는 것이 현명하다.",
            explanation: "가주어 it의 진주어 역할을 하는 to부정사의 동사원형 자리로, 목적어인 the guidelines for luggage size와 어울리는 타동사를 선택해야 한다. 항공편 예약 시(When booking a flight) 수하물 크기 지침은 확인해 보는 게 좋다는 내용이 되어야 자연스럽다. 따라서 '확인하다, 알아보다'라는 의미의 (A) check가 정답이다."
        },
        {
            id: "v3-p5-t3-q108",
            questionNo: 108,
            text: "The melody is so ------- that the composer has simplified parts of it for live performances.",
            options: {
                A: "direct",
                B: "complex",
                C: "favorable",
                D: "helpful"
            },
            classification: "voc1",
            testId: 3,
            vol: 3,
            correctAnswer: "B",
            translation: "곡이 너무 복잡해서 작곡가는 라이브 공연을 위해 일부를 간단하게 만들었다.",
            explanation: "'너무 ~해서 ~하다'라는 의미의 「so+형용사+that+주어 동사」 구문으로, 곡의 일부를 단순화한(has simplified) 이유를 나타내는 형용사가 빈칸에 들어가야 한다. 따라서 '복잡한'이라는 의미의 (B) complex가 정답이다."
        },
        {
            id: "v3-p5-t3-q109",
            questionNo: 109,
            text: "The test group found the illustrations in the appliance users' guide to be highly -------.",
            options: {
                A: "inform",
                B: "information",
                C: "informatively",
                D: "informative"
            },
            classification: "a2",
            testId: 3,
            vol: 3,
            correctAnswer: "D",
            translation: "체험단은 기기 사용설명서에 나오는 삽화들이 매우 유익하다고 여겼다.",
            explanation: "「주어(The test group)+동사(found)+목적어(the illustrations in the appliance users' guide)+목적격 보어(to be highly -------)」 구조의 5형식 문장이다. 따라서 빈칸에는 to be의 보어 역할을 하며 부사 highly의 수식을 받는 형용사가 들어가야 하므로, (D) informative(유익한, 유용한)가 정답이다. (A) inform은 동사, (B) information은 명사, (C) informatively는 부사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t3-q110",
            questionNo: 110,
            text: "The directions for Masuda's do-it-yourself projects are comprehensive enough for ------- a novice builder.",
            options: {
                A: "right",
                B: "soon",
                C: "how",
                D: "even"
            },
            classification: "voc1",
            testId: 3,
            vol: 3,
            correctAnswer: "D",
            translation: "마스다의 DIY 작업에 대한 설명서는 초보 건축가에게도 충분히 포괄적이고 상세하다.",
            explanation: "a novice builder를 적절히 강조하는 부사를 선택해야 한다. DIY(셀프) 작업에 대한 설명서(directions)가 초보자도 보고 따라할 수 있을 만큼 충분히 포괄적이다(comprehensive enough)는 내용이 되어야 자연스럽다. 따라서 '~조차, ~도'라는 의미의 (D) even이 정답이다."
        },
        {
            id: "v3-p5-t3-q111",
            questionNo: 111,
            text: "------- of the two candidates for the position had the necessary qualifications.",
            options: {
                A: "Neither",
                B: "Nobody",
                C: "None",
                D: "Nothing"
            },
            classification: "p2",
            testId: 3,
            vol: 3,
            correctAnswer: "A",
            translation: "그 직책 지원자 두 명 중 어느 누구도 필요한 자격을 갖추지 못했다.",
            explanation: "동사 had의 주어 역할을 하는 자리로, 전치사구 of the two candidates의 수식을 받는다. 숫자 two와 어울리며 사람을 대신하는 대명사가 필요하므로, '둘 중 어느 누구도 아니다'라는 의미의 (A) Neither가 정답이다. (B) Nobody는 no one과 같은 뜻으로 뒤에 of 없이 단독으로 쓰이고, (C) None은 of와 쓰일 경우 셋 이상의 복수명사나 불가산명사, 혹은 대명사가 와야 한다."
        },
        {
            id: "v3-p5-t3-q112",
            questionNo: 112,
            text: "The need for highly trained electricians in the construction ------- has grown rapidly in recent years.",
            options: {
                A: "employment",
                B: "activity",
                C: "knowledge",
                D: "industry"
            },
            classification: "voc1",
            testId: 3,
            vol: 3,
            correctAnswer: "D",
            translation: "최근 몇 년간 건설업계에서는 고도로 훈련된 전기 기사에 대한 수요가 빠르게 증가했다.",
            explanation: "빈칸에는 construction과 함께 복합명사를 이루어 전치사 in의 목적어 역할을 하는 단어가 들어가야 한다. 인력에 대한 수요(need)가 증가(has grown)할 만한 곳은 분야나 업계이므로, (D) industry가 정답이다."
        },
        {
            id: "v3-p5-t3-q113",
            questionNo: 113,
            text: "Ms. Daly will prepare a marketing budget and propose ------- during the client meeting.",
            options: {
                A: "those",
                B: "its",
                C: "it",
                D: "her"
            },
            classification: "p1",
            testId: 3,
            vol: 3,
            correctAnswer: "C",
            translation: "데일리 씨는 마케팅 예산을 준비해서 이를 고객 회의에서 제안할 예정이다.",
            explanation: "동사원형 propose의 목적어 역할을 하는 자리이다. 제안의 대상은 앞서 언급된 마케팅 예산(a marketing budget)이므로, 3인칭 단수 대명사 (C) it이 정답이다."
        },
        {
            id: "v3-p5-t3-q114",
            questionNo: 114,
            text: "Mr. Silva asked sales staff to ------- travel expenditures to help cut costs.",
            options: {
                A: "convince",
                B: "require",
                C: "decide",
                D: "limit"
            },
            classification: "voc1",
            testId: 3,
            vol: 3,
            correctAnswer: "D",
            translation: "실바 씨는 영업사원들에게 비용 절감에 일조하는 차원에서 출장 경비를 제한하라고 요청했다.",
            explanation: "「asked + 목적어(sales staff) + 목적격 보어(to ------- travel expenditures)」 구조에서 목적격 보어에 해당하는 동사로, 출장 경비와 관련하여 영업사원들에게 요구되는 행위를 나타낸다. 비용 절감에 일조하기(to help cut costs) 위해서는 출장 경비를 줄여야 하므로, '제한하다, 한정하다'라는 의미의 (D) limit이 정답이다."
        },
        {
            id: "v3-p5-t3-q115",
            questionNo: 115,
            text: "The city council will discuss certain policies, particularly those made ------- the previous administration.",
            options: {
                A: "any",
                B: "by",
                C: "to",
                D: "and"
            },
            classification: "pr1",
            testId: 3,
            vol: 3,
            correctAnswer: "B",
            translation: "시 의회는 특정 정책들, 특히 이전 행정부가 만든 것들을 논의할 것이다.",
            explanation: "명사구 the previous administration을 목적어로 취하는 전치사 자리이다. 빈칸 앞 과거분사 made가 수식하는 those는 policies를 대신하며, 이전 행정부(the previous administration)는 해당 정책을 만든 주체라고 보는 것이 타당하다. 따라서 '~에 의하여'라는 의미의 (B) by가 정답이다. (A) any는 대명사/한정사, (D) and는 등위접속사로 구조상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t3-q116",
            questionNo: 116,
            text: "Servers' tips are pooled at the end of each shift and divided evenly ------- the entire waitstaff.",
            options: {
                A: "onto",
                B: "among",
                C: "beside",
                D: "about"
            },
            classification: "pr1",
            testId: 3,
            vol: 3,
            correctAnswer: "B",
            translation: "서빙 직원들의 팁은 매 교대 근무가 끝나갈 때 모아서 전 종업원들 사이에 똑같이 나눈다.",
            explanation: "동사구 (are) divided evenly와 명사구 the entire waitstaff를 적절히 연결하는 전치사를 선택해야 한다. 팁은 식당 종업원 전체를 대상으로 분배되는 것이므로, '(셋 이상의) 사이에서, ~의 사이에서 분배하여'라는 의미의 (B) among이 정답이다. 「among + 복수명사」와 「among + 집합명사(eg. staff, crowd)」는 빈출 표현이므로 암기해 두자."
        },
        {
            id: "v3-p5-t3-q117",
            questionNo: 117,
            text: "Costpa Analytics Ltd. has made successful ------- in two emerging data companies.",
            options: {
                A: "investments",
                B: "invested",
                C: "invest",
                D: "investor"
            },
            classification: "n1",
            testId: 3,
            vol: 3,
            correctAnswer: "A",
            translation: "코스트파 애널리틱스 주식회사는 신흥 데이터 업체 두 곳에 성공적으로 투자했다.",
            explanation: "형용사 successful의 수식을 받으면서 동사 has made의 목적어 역할을 하는 명사 자리로, 보기에서 (A) investments(투자)와 (D) investor(투자자) 중 하나를 선택해야 한다. 빈칸 뒤 전치사 in과 함께 '~에 성공적인 투자를 했다'라는 내용을 완성해야 하므로, (A) investments가 정답이 된다. 가산명사 (D) investor는 앞에 한정사가 붙거나 복수형으로 쓰여야 하며, (B) invested는 동사/과거분사, (C) invest는 동사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t3-q118",
            questionNo: 118,
            text: "Vallentrade manages clients' accounts more ------- than most other brokerage firms.",
            options: {
                A: "conserves",
                B: "conservative",
                C: "conservatively",
                D: "conserving"
            },
            classification: "av1",
            testId: 3,
            vol: 3,
            correctAnswer: "C",
            translation: "밸런트레이드는 대부분의 다른 종합 증권회사보다 더 보수적으로 고객들의 계좌를 관리한다.",
            explanation: "비교급 표현을 없애고 보면 「주어(Vallentrade)+동사(manages)+목적어(clients' accounts)」 구조의 완전한 절이 남는다. 즉, 빈칸에는 동사 manages를 수식하는 부사가 들어가야 하므로, (C) conservatively(보수적으로)가 정답이다. (A) conserves는 동사, (B) conservative는 형용사, (D) conserving은 동명사/현재분사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t3-q119",
            questionNo: 119,
            text: "The ideal operating temperature for the tablet computer is ------- 10 and 30 degrees Celsius.",
            options: {
                A: "between",
                B: "above",
                C: "in",
                D: "off"
            },
            classification: "pr1",
            testId: 3,
            vol: 3,
            correctAnswer: "A",
            translation: "태블릿 컴퓨터가 작동하기에 이상적인 온도는 섭씨 10~30도 사이다.",
            explanation: "빈칸에는 and와 어울려 쓰여 범위(10 and 30 degrees Celsius)를 나타내는 전치사가 들어가야 하므로, '~ 사이'라는 의미의 (A) between이 정답이다."
        },
        {
            id: "v3-p5-t3-q120",
            questionNo: 120,
            text: "Of the people who have publicly introduced ------- at the Carpentry Club meetings, about half are commercial contractors.",
            options: {
                A: "their",
                B: "their own",
                C: "they",
                D: "themselves"
            },
            classification: "p4",
            testId: 3,
            vol: 3,
            correctAnswer: "D",
            translation: "목공 클럽 회의에서 공개적으로 자신을 소개한 사람들 중에서 절반 정도가 상업시설 도급업자다.",
            explanation: "who가 이끄는 관계사절에서 동사 have introduced의 목적어 역할을 하는 자리이다. 관계사절의 주어인 who는 선행사 people을 대신하고, 소개의 대상은 사람들 자신이 되어야 문맥상 자연스럽다. 따라서 재귀대명사 (D) themselves가 정답이다."
        },
        {
            id: "v3-p5-t3-q121",
            questionNo: 121,
            text: "On Thursday, the technician will be on Sratus Road ------- two gas stoves.",
            options: {
                A: "serviced",
                B: "service",
                C: "to service",
                D: "is servicing"
            },
            classification: "i3",
            testId: 3,
            vol: 3,
            correctAnswer: "C",
            translation: "목요일에 기술자가 두 대의 가스 난로를 점검해 주러 스라투스 로에 올 것이다.",
            explanation: "앞에 완전한 절(the technician will be on Status Road)이 왔고 뒤에는 명사구(two gas stoves)가 있으므로 빈칸에 또 다른 동사가 들어갈 수는 없다. 따라서 two gas stoves를 목적어로 취하면서 앞의 절을 수식하는 to부정사 (C) to service가 정답이다. 여기서 to service는 부사적 용법으로 쓰여 목적을 나타낸다. (A) serviced는 동사/과거분사, (B) service는 동사/명사, (D) is servicing은 현재 진행 동사 형태로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t3-q122",
            questionNo: 122,
            text: "The spreadsheet ------- data on retail sales during the fourth quarter is attached.",
            options: {
                A: "contains",
                B: "contained",
                C: "containing",
                D: "containable"
            },
            classification: "pa2",
            testId: 3,
            vol: 3,
            correctAnswer: "C",
            translation: "4분기 소매 판매에 관한 데이터를 포함하는 스프레드시트가 첨부되어 있다.",
            explanation: "The spreadsheet부터 quarter까지가 주어, is attached가 동사인 문장이다. 따라서 빈칸에는 명사 data를 목적어로 취하면서 앞의 명사 spreadsheet을 수식하는 준동사가 들어가야 하므로, 능동의 의미를 내포한 현재분사 (C) containing이 정답이다. (A) contains는 본동사, (B) contained는 본동사/과거분사로 빈칸에 들어갈 수 없다. (D) containable은 형용사로 두 명사 spreadsheet와 data를 연결해주지 못한다."
        },
        {
            id: "v3-p5-t3-q123",
            questionNo: 123,
            text: "See our weekly promotional flyer for complete ------- of the discounted items.",
            options: {
                A: "exchange",
                B: "support",
                C: "receipts",
                D: "descriptions"
            },
            classification: "voc1",
            testId: 3,
            vol: 3,
            correctAnswer: "D",
            translation: "할인 품목에 관한 모든 설명은 저희 주간 홍보 전단을 확인하세요.",
            explanation: "빈칸에는 홍보 전단(promotional flyer)에 나올만한 것이 들어가야 한다. 따라서 '할인 품목(the discounted items)에 관한 설명'이라는 내용을 완성하는 (D) descriptions(설명, 기술)가 정답이다. description이 전치사 of와 자주 쓰인다는 것을 알아두면 좋다."
        },
        {
            id: "v3-p5-t3-q124",
            questionNo: 124,
            text: "New salespeople are instructed to research the businesses of ------- customers before contacting them for the first time.",
            options: {
                A: "total",
                B: "potential",
                C: "equal",
                D: "factual"
            },
            classification: "voc3",
            testId: 3,
            vol: 3,
            correctAnswer: "B",
            translation: "신입 영업사원들은 잠재 고객에게 처음 연락하기 전에 그들의 업체에 대해 알아보라는 지시를 받는다.",
            explanation: "고객들(customers)의 특성을 적절히 묘사하는 형용사를 선택해야 한다. 처음 연락하기 전에(before contacting them for the first time) 조사를 해봐야 할 고객은 앞으로 거래할 가능성이 있는 잠재 고객이라고 볼 수 있다. 따라서 '잠재적인, 가능성이 있는'이라는 의미의 (B) potential이 정답이다. potential customer/buyer/client는 빈출 표현으로 암기해 두는 것이 좋다."
        },
        {
            id: "v3-p5-t3-q125",
            questionNo: 125,
            text: "If you use online banking, bills can be paid ------- it is most convenient.",
            options: {
                A: "whenever",
                B: "simply",
                C: "accordingly",
                D: "quite"
            },
            classification: "c3",
            testId: 3,
            vol: 3,
            correctAnswer: "A",
            translation: "온라인 뱅킹을 이용하신다면 가장 편리한 때 요금을 납부할 수 있습니다.",
            explanation: "두 개의 완전한 절을 이어주는 접속사 자리이다. 따라서 '~할 때마다, ~할 때는 언제든지'라는 의미의 부사절 접속사 (A) whenever가 정답이다. (B) simply, (C) accordingly, (D) quite는 모두 부사로 절을 이끌 수 없다."
        },
        {
            id: "v3-p5-t3-q126",
            questionNo: 126,
            text: "Our internship combines lectures with real-world projects to provide formal instruction ------- professional experience.",
            options: {
                A: "above all",
                B: "as well as",
                C: "now that",
                D: "in order to"
            },
            classification: "c2",
            testId: 3,
            vol: 3,
            correctAnswer: "B",
            translation: "저희 인턴십에서는 정식 교육과 직무 경험을 모두 제공하기 위해 강의를 실제 프로젝트와 결합합니다.",
            explanation: "정식 교육(formal instruction)과 직무 경험(professional experience)은 모두 인턴십을 통해 제공되어야 할(to provide) 사항이다. 따라서 빈칸에는 이 둘을 연결할 등위/상관접속사가 들어가야 하므로, '~뿐만 아니라 ~도'라는 의미의 (B) as well as가 정답이다. (A) above all은 부사로 품사상 빈칸에 들어갈 수 없고, 부사절 접속사 (C) now that 뒤에는 절이, to부정사 관용표현 (D) in order to 뒤에는 동사원형이 와야 한다."
        },
        {
            id: "v3-p5-t3-q127",
            questionNo: 127,
            text: "Employee ------- at Medmile Ventures include share options and scheduled raises.",
            options: {
                A: "beneficial",
                B: "beneficially",
                C: "benefits",
                D: "benefited"
            },
            classification: "n3",
            testId: 3,
            vol: 3,
            correctAnswer: "C",
            translation: "메드마일 벤처의 직원 혜택에는 스톡옵션과 예정된 급여 인상이 포함된다.",
            explanation: "문두에 온 명사 Employee가 동사 include와 수가 일치하지 않으므로, 빈칸에는 Employee와 함께 복합명사를 이루어 include의 주어 역할을 하는 복수명사가 들어가야 한다. 따라서 (C) benefits(혜택들)가 정답이다. (A) beneficial은 형용사, (B) beneficially는 부사, (D) benefited는 동사/과거분사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t3-q128",
            questionNo: 128,
            text: "City ------- hope to get the necessary permits to build a twenty-story office building on Minerva Street.",
            options: {
                A: "agendas",
                B: "developers",
                C: "avenues",
                D: "boundaries"
            },
            classification: "voc1",
            testId: 3,
            vol: 3,
            correctAnswer: "B",
            translation: "도시 개발업자들은 미네르바 가에 20층짜리 사무실 건물올 짓기 위해 필요한 허가서를 받기를 바란다.",
            explanation: "필요한 허가서를 받고자(hope to get necessary permits) 하는 주체는 사람 또는 단체가 되어야 한다. 따라서 '개발업자, 개발업체'라는 의미의 (B) developers가 정답이다."
        },
        {
            id: "v3-p5-t3-q129",
            questionNo: 129,
            text: "Compliance Department officers regularly monitor changes in the ------- framework.",
            options: {
                A: "regulate",
                B: "regulates",
                C: "regulator",
                D: "regulatory"
            },
            classification: "a1",
            testId: 3,
            vol: 3,
            correctAnswer: "D",
            translation: "감사부 담당자들은 정기적으로 규제 제도의 변동사항을 감시한다.",
            explanation: "'체계, 제도'라는 의미의 명사 framework를 수식하는 형용사 자리이다. 따라서 (D) regulatory(규제의, 규제력을 지닌)가 정답이다. (C) regulator는 '규제 기관[담당자]'이라는 뜻으로 framework와 복합명사를 이루기엔 어색하고, (A) regulate와 (B) regulates는 동사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t3-q130",
            questionNo: 130,
            text: "The X250 portable heater achieves the desirable ------- without reaching especially high temperatures.",
            options: {
                A: "practices",
                B: "factors",
                C: "outcomes",
                D: "dimensions"
            },
            classification: "voc2",
            testId: 3,
            vol: 3,
            correctAnswer: "C",
            translation: "X250 휴대용 히터는 특별히 고온에 도달하지 않고도 바람직한 결과를 낸다.",
            explanation: "동사 achieves의 목적어 역할을 하는 명사 자리로, 성취의 대상을 나타내는 단어가 들어가야 한다. 따라서 desirable과 함께 '바람직한 결과[성과]'라는 의미를 완성하는 (C) outcomes가 정답이다. desirable outcome/result는 빈출 표현으로 암기해 두는 것이 좋다."
        }
    ]
};
