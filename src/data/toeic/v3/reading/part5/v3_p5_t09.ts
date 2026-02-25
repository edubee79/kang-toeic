import { Part5TestSet } from '../../v4/reading/part5/types';

export const test9Data: Part5TestSet = {
    testId: 9,
    vol: 3,
    title: "Part 5 Real Test 9",
    questions: [
        {
            id: "v3-p5-t9-q101",
            questionNo: 101,
            text: "There is coffee in the break room for anyone who ------- a cup before the meeting.",
            options: {
                A: "want",
                B: "wants",
                C: "wanting",
                D: "to want"
            },
            classification: "v1",
            testId: 9,
            vol: 3,
            correctAnswer: "B",
            translation: "회의 전 커피 한 잔을 원하는 모든 사람을 위해 휴게실에 커피가 있습니다.",
            explanation: "주격 관계대명사 who가 이끄는 절의 동사 자리로, 보기에서 (A) want와 (B) wants 중 하나를 선택해야 한다. 관계사절의 동사는 선행사(anyone)와 수가 일치해야 하는데, anyone은 단수로 취급되므로 (B) wants가 정답이 된다. (C) wanting과 (D) to want는 준동사로 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t9-q102",
            questionNo: 102,
            text: "Each Ready Wear suitcase comes ------- a ten-year warranty.",
            options: {
                A: "if",
                B: "with",
                C: "so",
                D: "upon"
            },
            classification: "pr1",
            testId: 9,
            vol: 3,
            correctAnswer: "B",
            translation: "모든 레디 웨어 여행용 가방은 10년짜리 품질보증서와 함께 나온다.",
            explanation: "명사구 a ten-year warranty를 목적어로 취하는 전치사 자리로, 자동사 comes와 어울려 쓰이는 단어가 필요하다. 10년간의 품질보증서(warranty)는 여행용 가방(suitcase)과 함께 제공되는 것이므로, comes와 함께 '~이 딸려 있다, ~와 함께 나오다'라는 의미를 완성하는 (B) with가 정답이다. (A) if와 (C) so는 접속사로 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t9-q103",
            questionNo: 103,
            text: "Mr. O'Sullivan oversaw the electrical work in the new apartment building ------- the river.",
            options: {
                A: "into",
                B: "as",
                C: "to",
                D: "by"
            },
            classification: "pr1",
            testId: 9,
            vol: 3,
            correctAnswer: "D",
            translation: "오설리반 씨는 강가에 있는 새 아파트 건물의 전기 작업을 감독했다.",
            explanation: "장소를 나타내는 두 명사구 the new apartment building과 the river를 연결해주는 전치사 자리이다. 따라서 위치 관계를 나타내는 단어가 들어가야 자연스러우므로, '~ 옆에(가에)'라는 의미의 (D) by가 정답이다."
        },
        {
            id: "v3-p5-t9-q104",
            questionNo: 104,
            text: "For questions about your hotel reservation, please telephone ------- booking department at 555-0109.",
            options: {
                A: "we",
                B: "us",
                C: "our",
                D: "ourselves"
            },
            classification: "p1",
            testId: 9,
            vol: 3,
            correctAnswer: "C",
            translation: "호텔 예약에 관한 문의사항은 저희 예약 부서 555-0109로 전화하십시오.",
            explanation: "동사 telephone의 목적어 역할을 하는 명사구 booking department를 한정 수식하는 자리이므로, 소유격 인칭대명사 (C) our가 정답이다."
        },
        {
            id: "v3-p5-t9-q105",
            questionNo: 105,
            text: "Janet Rhodes was commended for ------- defending the company's reputation.",
            options: {
                A: "assertively",
                B: "assert",
                C: "assertive",
                D: "assertion"
            },
            classification: "av1",
            testId: 9,
            vol: 3,
            correctAnswer: "A",
            translation: "자넷 로즈는 회사의 명성을 적극적으로 지켜내 칭찬을 받았다.",
            explanation: "빈칸 뒤에 오는 defending the company's reputation(회사의 명성을 지킨 것)은 자넷 로즈가 칭찬을 받은 이유(was commended for)를 나타낸다. 따라서 이 동명사구를 수식할 수 있는 부사가 빈칸에 들어가야 하므로, (A) assertively(적극적으로)가 정답이다. defending을 현재분사로 보고 빈칸에 명사를 넣을 수 있다고 가정하더라도, (D) assertion은 '주장, 행사'라는 뜻으로 칭찬을 받는 이유가 되기엔 어색하며 회사의 명성을 지키는 주체가 될 수 없으므로 적절치 않다. (B) assert는 동사, (C) assertive는 형용사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t9-q106",
            questionNo: 106,
            text: "A second order for 500 recycled paper cups ------- last week.",
            options: {
                A: "was placed",
                B: "was placing",
                C: "to place",
                D: "placed"
            },
            classification: "v4",
            testId: 9,
            vol: 3,
            correctAnswer: "A",
            translation: "재활용 종이컵 500개의 두 번째 주문이 지난주에 이뤄졌다.",
            explanation: "주어 A second order for 500 recycled paper cups의 동사 자리로, 보기에서 (A) was placed, (B) was placing, (D) placed 중 하나를 선택해야 한다. 주문(order)은 누군가에 의해 행해지는 대상이므로, 수동태 동사인 (A) was placed가 정답이다. (C) to place는 준동사로 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t9-q107",
            questionNo: 107,
            text: "One of the ------- for the position is three years of customer service experience.",
            options: {
                A: "associates",
                B: "requirements",
                C: "tips",
                D: "assistants"
            },
            classification: "n1",
            testId: 9,
            vol: 3,
            correctAnswer: "B",
            translation: "그 직책의 요건 중 하나는 3년간의 고객 서비스 경력이다.",
            explanation: "One of the ------- for the position이 주어, is가 동사, three years of customer service experience가 주격 보어인 문장이다. 3년간의 고객 서비스 경력은 특정 직책에 요구되는 조건 중 하나라고 볼 수 있으므로, '(자격) 요건, 필요조건'이라는 의미의 (B) requirements가 정답이다."
        },
        {
            id: "v3-p5-t9-q108",
            questionNo: 108,
            text: "------- will receive a weekly e-mail reminding them to approve time sheets.",
            options: {
                A: "Supervises",
                B: "Supervisory",
                C: "Supervisors",
                D: "Supervising"
            },
            classification: "n1",
            testId: 9,
            vol: 3,
            correctAnswer: "C",
            translation: "관리자들은 근무 시간 기록표를 승인하라고 상기시키는 주간 이메일을 받을 것이다.",
            explanation: "동사 will receive의 주어 역할을 하는 명사 자리로, 이메일을 받는(receive a weekly e-mail) 주체가 들어가야 한다. 따라서 (C) Supervisors(관리자)가 정답이다. 동명사인 (D) Supervising도 주어 자리에 들어갈 수 있지만 문맥상 빈칸에는 적절하지 않고, (A) Supervises는 동사, (B) Supervisory는 형용사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t9-q109",
            questionNo: 109,
            text: "As of next week, the hotel chain Contempo Inns will be ------- new management.",
            options: {
                A: "across",
                B: "under",
                C: "beside",
                D: "near"
            },
            classification: "pr1",
            testId: 9,
            vol: 3,
            correctAnswer: "B",
            translation: "다음 주부터 컨템포 인 호텔 체인이 새 경영 체제 하에 들어갈 것이다.",
            explanation: "the hotel chain Contempo Inns와 new management의 관계를 적절히 나타내는 전치사가 들어가야 한다. 호텔은 특정 경영진이나 체제 하에 있는 것이므로, (B) under가 정답이다. 참고로, management, supervision, direction, leadership과 같이 관리나 감독을 의미하는 명사 앞에는 전치사 under가 자주 쓰인다."
        },
        {
            id: "v3-p5-t9-q110",
            questionNo: 110,
            text: "Managers can access information about ------- staff members by contacting Human Resources.",
            options: {
                A: "whose",
                B: "while",
                C: "their",
                D: "much"
            },
            classification: "p1",
            testId: 9,
            vol: 3,
            correctAnswer: "C",
            translation: "관리자는 인사부서에 연락을 취해 직원들에 대한 정보를 얻을 수 있다.",
            explanation: "전치사 about의 목적어 역할을 하는 복수가산명사 staff members를 한정 수식하는 자리이므로, 소유격 인칭대명사 (C) their가 정답이다. (A) whose도 명사를 수식할 수 있지만 문장 중간에 들어갈 경우 접속사 역할을 하므로 뒤에 절이 와야 한다. (B) while은 부사절 접속사로 구조상 빈칸에 들어갈 수 없으며, (D) much는 불가산명사와 쓰여야 하므로 오답이다."
        },
        {
            id: "v3-p5-t9-q111",
            questionNo: 111,
            text: "After eighteen years in business, Chu Home Health Services remains committed to customer -------.",
            options: {
                A: "satisfaction",
                B: "production",
                C: "energy",
                D: "opportunity"
            },
            classification: "n1",
            testId: 9,
            vol: 3,
            correctAnswer: "A",
            translation: "추 홈 헬스 서비스는 18년간 영업한 후에도 고객 만족에 계속 전념하고 있다.",
            explanation: "customer와 복합명사를 이루는 명사 자리로, 회사가 전념할 만한(committed to) 분야를 나타내는 단어가 들어가야 한다. 따라서 customer와 함께 '고객 만족'이라는 의미를 완성하는 (A) satisfaction이 정답이다. customer satisfaction은 빈출 표현이니 암기해 두는 것이 좋다."
        },
        {
            id: "v3-p5-t9-q112",
            questionNo: 112,
            text: "The obstetrics nurses ------- are working under Dorothy Caramella will now be working for Pierre Cocteau.",
            options: {
                A: "they",
                B: "who",
                C: "when",
                D: "these"
            },
            classification: "ac1",
            testId: 9,
            vol: 3,
            correctAnswer: "B",
            translation: "도로시 카라멜라 밑에서 일하는 산과 간호사들은 이제 피에르 콕토를 위해 일할 것이다.",
            explanation: "문장에 동사가 2개(are working, will now be working) 있으므로, The obstetrics nurses부터 Dorothy Caramella까지를 주어, will (now) be working을 본동사로 보는 것이 타당하다. 빈칸이 이끄는 절의 의미를 따져보면, 주어가 빠진 불완전한 절(are working under Dorothy Caramella)임을 알 수 있다. 따라서 빈칸에는 해당 절을 이끌어 The obstetrics nurses를 수식하는 주격 관계대명사가 들어가야 하므로, (B) who가 정답이다. (A) they 및 (D) these는 절을 이끌 수 없으며, (C) when은 관계부사로 쓰일 경우 완전한 절을 이끌게 되므로 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t9-q113",
            questionNo: 113,
            text: "Visitor parking is ------- behind the office complex on Mayfield Avenue.",
            options: {
                A: "adjusted",
                B: "visual",
                C: "available",
                D: "urgent"
            },
            classification: "voc1",
            testId: 9,
            vol: 3,
            correctAnswer: "C",
            translation: "방문객 주차장은 메이필드 가에 있는 사무실 단지 뒤에서 이용할 수 있다.",
            explanation: "주어인 Visitor parking 및 위치를 묘사하는 전치사구 behind the office complex와 가장 잘 어울리는 형용사를 선택해야 한다. 사무실 단지 뒤는 방문객 주차장이 있는 장소라고 볼 수 있으므로, '이용 가능한'이라는 의미의 (C) available이 정답이다."
        },
        {
            id: "v3-p5-t9-q114",
            questionNo: 114,
            text: "Among other -------, purchasing departments negotiate contracts to procure goods at the best possible prices.",
            options: {
                A: "tasks",
                B: "task",
                C: "tasking",
                D: "tasked"
            },
            classification: "n1",
            testId: 9,
            vol: 3,
            correctAnswer: "A",
            translation: "여러 업무 중에서도 구매 부서는 최상의 가격으로 물품을 조달하기 위해 계약을 협상하는 일을 한다.",
            explanation: "빈칸은 전치사 Among의 목적어 역할을 하는 명사 자리로, other의 수식을 받는다. Among이 '(셋 이상) 중에서, 사이애'라는 뜻이므로, 가산명사 task의 복수형태인 (A) tasks가 정답이다. 「Among other + 복수명사」는 여러 대상 중 하나를 언급할 때 쓰이는 표현이다."
        },
        {
            id: "v3-p5-t9-q115",
            questionNo: 115,
            text: "The community swimming pool will be constructed ------- three separate stages.",
            options: {
                A: "for",
                B: "far",
                C: "in",
                D: "at"
            },
            classification: "pr1",
            testId: 9,
            vol: 3,
            correctAnswer: "C",
            translation: "지역사회 수영장은 각기 다른 세 단계에 걸쳐 지어질 것이다.",
            explanation: "동사 will be constructed와 명사구 three separate stages를 적절히 연결해 줄 전치사가 필요하다. 수영장 공사가 각기 다른 세 단계에 걸쳐 진행된다는 내용이므로, stages와 함께 '단계별로, 단계적으로'라는 표현을 완성하는 (C) in이 정답이다. (D) at은 stage와 쓰일 경우 '(특정) 단계에서'라는 시점을 나타내므로 빈칸에는 적절하지 않다."
        },
        {
            id: "v3-p5-t9-q116",
            questionNo: 116,
            text: "The Lanaiya 7 laptop ------- its debut at the annual Delbar Tech Summit.",
            options: {
                A: "made",
                B: "knew",
                C: "heard",
                D: "drew"
            },
            classification: "voc1",
            testId: 9,
            vol: 3,
            correctAnswer: "A",
            translation: "라나야 7 노트북 컴퓨터는 연례 델바 기술 회담에서 첫선을 보였다.",
            explanation: "명사구 its debut를 목적어로 취하는 타동사 자리이다. debut는 '첫 선, 데뷔'라는 뜻으로 make와 어울려 쓰이므로, (A) made가 정답이다. make one's debut(데뷔를 하다, 첫선을 보이다)는 고정된 표현으로 암기해 두는 것이 좋다."
        },
        {
            id: "v3-p5-t9-q117",
            questionNo: 117,
            text: "Enjoy one month free when you start your company on Rooster's e-mail ------- Web hosting service.",
            options: {
                A: "then",
                B: "yet",
                C: "but",
                D: "and"
            },
            classification: "c1",
            testId: 9,
            vol: 3,
            correctAnswer: "D",
            translation: "루스터 이메일 및 웹 호스팅 서비스에서 개업 시 한 달간 무료로 이용하세요.",
            explanation: "루스터에서 제공하는 서비스(service)인 e-mail과 Web hosting을 연결하는 자리이므로, 등위접속사 (D) and가 정답이다. (B) yet과 (C) but은 대조적인 내용을 연결하는 등위접속사로 문맥상 빈칸에 적절하지 않고, (A) then은 부사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t9-q118",
            questionNo: 118,
            text: "The bridge project bids turned out to be ------- higher than expected.",
            options: {
                A: "considering",
                B: "consider",
                C: "consideration",
                D: "considerably"
            },
            classification: "av1",
            testId: 9,
            vol: 3,
            correctAnswer: "D",
            translation: "교량 프로젝트 입찰가는 기대했던 것보다 상당히 높은 것으로 드러났다.",
            explanation: "빈칸 없이도 의미상 완전한 구조를 이루는 문장으로, 비교급 형용사 higher (than expected)가 turned out to be(~인 것으로 드러났다)의 보어 역할을 한다. 따라서 빈칸에는 higher를 강조하는 부사가 들어가야 하므로, (D) considerably(상당히)가 정답이다."
        },
        {
            id: "v3-p5-t9-q119",
            questionNo: 119,
            text: "Contract negotiations are now close ------- to completion to sign the deal by Thursday.",
            options: {
                A: "already",
                B: "quite",
                C: "such",
                D: "enough"
            },
            classification: "av1",
            testId: 9,
            vol: 3,
            correctAnswer: "D",
            translation: "계약 협상은 목요일까지 체결될 수 있을 만큼 완료 상태에 가까워졌다.",
            explanation: "빈칸은 형용사 close와 전치사구 to completion 사이에서 close를 강조하는 역할을 하므로, 형용사를 뒤에서 수식할 수 있는 부사가 들어가야 한다. 따라서 (D) enough(~할 만큼 충분히)가 정답이다. (A) already는 '이미, 벌써'라는 의미로 문맥상 빈칸에 적절하지 않고, (B) quite와 (C) such는 부사처럼 쓰일 경우 형용사 앞에 와야 한다."
        },
        {
            id: "v3-p5-t9-q120",
            questionNo: 120,
            text: "Filber Woodworking reminds customers that direct sunlight will cause ------- damage to furniture.",
            options: {
                A: "lasting",
                B: "lasts",
                C: "last",
                D: "lastly"
            },
            classification: "a1",
            testId: 9,
            vol: 3,
            correctAnswer: "A",
            translation: "필버 목공소는 고객들에게 직사광선이 가구에 영구적인 손상을 입힐 수 있다고 상기시킨다.",
            explanation: "동사 will cause의 목적어인 명사 damage를 수식하는 형용사 자리이므로, 보기에서 (A) lasting(영구적인, 지속적인)과 (C) last(지난, 마지막의) 중 하나를 선택해야 한다. 문맥상 직사광선(direct sunlight)이 가구에 미칠 손상의 정도를 묘사하는 단어가 들어가야 자연스러우므로, (A) lasting이 정답이 된다. (B) lasts는 동사, (D) lastly는 부사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t9-q121",
            questionNo: 121,
            text: "------- employees wishing to take time off must submit the request two weeks in advance.",
            options: {
                A: "Each",
                B: "All",
                C: "Every",
                D: "Total"
            },
            classification: "voc1",
            testId: 9,
            vol: 3,
            correctAnswer: "B",
            translation: "휴가를 쓰고 싶어 하는 모든 직원은 2주 전 미리 요청서를 제출해야 한다.",
            explanation: "복수명사 employees를 수식하는 자리이므로, (B) All이 정답이다. (A) Each와 (C) Every는 단수명사와 쓰여야 하므로 오답이며, (D) Total은 '총계'를 강조하는 형용사이므로 빈칸에 적절치 않다."
        },
        {
            id: "v3-p5-t9-q122",
            questionNo: 122,
            text: "Bronco Building Equipment uses data to make ------- decisions and plot future operations.",
            options: {
                A: "strategized",
                B: "strategic",
                C: "strategize",
                D: "strategically"
            },
            classification: "a1",
            testId: 9,
            vol: 3,
            correctAnswer: "B",
            translation: "브론코 건축 설비는 데이터를 이용해 전략적 결정을 내리고 향후 운영을 계획한다.",
            explanation: "동사 make의 목적어인 명사 decisions를 수식하는 형용사 자리이므로, (B) strategic(전략적인, 전략상 중요한)이 정답이다. (A) strategized와 (C) strategize는 자동사, (D) strategically는 부사로 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t9-q123",
            questionNo: 123,
            text: "In addition to the evening concert series, Centennial Park will ------- be hosting several events for children this summer.",
            options: {
                A: "nevertheless",
                B: "although",
                C: "consequently",
                D: "also"
            },
            classification: "av1",
            testId: 9,
            vol: 3,
            correctAnswer: "D",
            translation: "센테니얼 파크는 올 여름 저녁 음악회 시리즈 외에 어린이를 위한 여러 행사도 개최할 예정이다.",
            explanation: "미래진행 동사를 이루는 will과 be hosting 사이에서 동사를 수식하는 부사 자리이다. 문맥을 살펴보면, 저녁 음악회 시리즈 외에(In addition to the evening concert series) 어린이를 위한 행사(several events for children)도 개최할 예정이라는 내용이 되어야 자연스럽다. 따라서 '또한'이라는 의미의 (D) also가 정답이다. 참고로, (B) although는 접속사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t9-q124",
            questionNo: 124,
            text: "Because ------- spaces in the mall now have tenants, foot traffic has increased greatly.",
            options: {
                A: "that much",
                B: "after which",
                C: "in case",
                D: "so many"
            },
            classification: "p2",
            testId: 9,
            vol: 3,
            correctAnswer: "D",
            translation: "몰의 아주 많은 공간에 임차인이 있어서 유동 인구가 크게 증가했다.",
            explanation: "Because가 이끄는 부사절의 주어인 복수명사 spaces를 수식하는 자리이므로, 복수가산명사와 쓰일 수 있는 (D) so many가 정답이다. (A) that much는 불가산명사와 쓰이고, (B) after which와 (C) in case는 접속사 역할을 하므로 구조상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t9-q125",
            questionNo: 125,
            text: "Complete the form carefully to ensure the ------- processing of your application.",
            options: {
                A: "rapidly",
                B: "more rapidly",
                C: "most rapid",
                D: "rapidity"
            },
            classification: "a4",
            testId: 9,
            vol: 3,
            correctAnswer: "C",
            translation: "신청이 가장 빠르게 처리될 수 있도록 서식을 꼼꼼히 작성해 주십시오.",
            explanation: "빈칸은 ensure(보장하다, ~하게 하다)의 목적어 역할을 하는 명사 processing(처리)을 수식하는 자리로, 정관사 the와 함께 최상급을 이루는 형용사가 들어가야 한다. 따라서 (C) most rapid가 정답이다. (D) rapidity는 '민첩, 속도'라는 뜻으로 processing과 복합명사를 이룰 수 없고, (A) rapidly 및 (B) more rapidly는 부사이므로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t9-q126",
            questionNo: 126,
            text: "Changes to the Top Fizz soft-drink formulation failed to ------- to consumers.",
            options: {
                A: "remain",
                B: "result",
                C: "appreciate",
                D: "appeal"
            },
            classification: "voc1",
            testId: 9,
            vol: 3,
            correctAnswer: "D",
            translation: "톱 피즈 청량음료의 조제법 변경은 고객의 마음을 끄는 데 실패했다.",
            explanation: "음료의 조제법을 변경한 것(Changes to the ~ formulation)이 고객의 마음에 끄는 데 실패했다는 내용이 되어야 자연스러우며, 구조상으로는 전치사 to와 어울려 쓰이는 동사가 들어가야 한다. 따라서 (D) appeal(~에게 매력적이다, ~의 마음을 끌다)이 정답이다. 참고로, (A) remain(남아 있다, 계속 ~이다)은 단독으로 쓰이거나 형용사 혹은 to부정사와 자주 쓰이고, (B) result는 보통 in(~를 초래하다)이나 from(~로부터 유래하다)과 짝을 이룬다. (C) appreciate는 타동사로 쓰일 경우 '가치가 오르다'라는 뜻을 나타낸다."
        },
        {
            id: "v3-p5-t9-q127",
            questionNo: 127,
            text: "The Liu Supermarket ------- that Jennifer Chan will take over as CEO next month came as a surprise.",
            options: {
                A: "announced",
                B: "announcement",
                C: "announcing",
                D: "announcer"
            },
            classification: "n1",
            testId: 9,
            vol: 3,
            correctAnswer: "B",
            translation: "제니퍼 찬이 다음 달 최고경영자 직을 맡는다는 리우 슈퍼마켓의 발표는 놀라움으로 다가왔다.",
            explanation: "문장에 접속사 한 개(that)와 동사 두 개(will take, came)가 있으므로, The부터 next month까지를 주어, came as a surprise를 본동사로 보는 것이 타당하다. 그렇다면 빈칸에는 놀라움으로 다가온 대상을 나타내며 that절(that Jennifer Chan will take over as CEO next month)과 동격을 이루는 명사가 들어가야 한다. 즉, 놀라움을 준 것은 제니퍼 찬이 다음 달에 CEO가 된다는 소식이므로, (B) announcement(발표, 소식)가 정답이 된다."
        },
        {
            id: "v3-p5-t9-q128",
            questionNo: 128,
            text: "------- extensive renovations, Main Vault Bank will temporarily relocate to 1450 Barrister Avenue.",
            options: {
                A: "If only",
                B: "Since",
                C: "Due to",
                D: "Though"
            },
            classification: "pr1",
            testId: 9,
            vol: 3,
            correctAnswer: "C",
            translation: "메인 볼트 은행은 광범위한 보수 작업 때문에 바리스터 가 1450번지로 임시 이전할 예정이다.",
            explanation: "명사구 extensive renovations를 목적어로 취하는 전치사 자리로, 보기에서 (B) Since(~ 이래로)와 (C) Due to(~ 때문에) 중 하나를 선택해야 한다. 광범위한 보수 작업은 임시 이전(temporarily relocate)을 유발한 원인이므로, (C) Due to가 정답이 된다. 참고로, (B) Since는 접속사와 전치사 둘 다 될 수 있는데, '~하기 때문에'라는 의미를 나타내려면 접속사로 쓰여야 한다. (A) If only와 (D) Though는 접속사이므로 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t9-q129",
            questionNo: 129,
            text: "Donell and Franklyn Investments promises incomparable loyalty and ------- to its clients.",
            options: {
                A: "transparent",
                B: "transparency",
                C: "transparencies",
                D: "transparently"
            },
            classification: "n1",
            testId: 9,
            vol: 3,
            correctAnswer: "B",
            translation: "도넬 앤 프랭클린 인베스트먼츠는 고객을 향한 비할 데 없는 충실함과 투명성을 약속한다.",
            explanation: "빈칸은 loyalty(충실함, 충성심)와 함께 동사 promises의 목적어 역할을 하는 명사 자리이다. 따라서 (B) transparency와 (C) transparencies 중 하나를 선택해야 하는데, 고객에게 약속할 만한 것은 충실함과 투명함이므로, (B) transparency가 정답이 된다. 참고로, transparency는 불가산명사로서 '투명(도), 투명함', 가산명사로서 '유리판, 슬라이드'라는 뜻을 나타낸다. (A) transparent는 형용사, (D) transparently는 부사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t9-q130",
            questionNo: 130,
            text: "The ------- who work for ARF Recordings seek out talented but unknown musicians who are hoping to record a first album.",
            options: {
                A: "authors",
                B: "announcers",
                C: "dancers",
                D: "agents"
            },
            classification: "voc1",
            testId: 9,
            vol: 3,
            correctAnswer: "D",
            translation: "ARF 레코딩즈에서 일하는 에이전트들은 첫 앨범을 녹음하고 싶어 하며 재능은 있지만 잘 알려지지 않은 음악가들을 찾아낸다.",
            explanation: "빈칸은 음악가 발굴 작업(seek out ~ musicians)을 하는 회사의 직원(who work for ARF Recordings)을 가리킨다. 따라서 '에이전트, 중개인'이라는 의미의 (D) agents가 정답이다."
        }
    ]
};
