import { Part5TestSet } from '../../v4/reading/part5/types';

export const test6Data: Part5TestSet = {
    testId: 6,
    vol: 3,
    title: "Part 5 Real Test 6",
    questions: [
        {
            id: "v3-p5-t6-q101",
            questionNo: 101,
            text: "Chef Daniels impresses customers with ------- sophisticated entrées.",
            options: {
                A: "his",
                B: "him",
                C: "himself",
                D: "he"
            },
            classification: "p1",
            testId: 6,
            vol: 3,
            correctAnswer: "A",
            translation: "다니엘스 주방장은 그의 세련된 메인 요리로 고객들에게 깊은 인상을 준다.",
            explanation: "전치사 with의 목적어 역할을 하는 sophisticated entrées를 한정 수식하는 자리이므로, 소유격 인칭대명사 (A) his가 정답이다."
        },
        {
            id: "v3-p5-t6-q102",
            questionNo: 102,
            text: "Oil production ------- 5 percent from January to February.",
            options: {
                A: "drop",
                B: "to drop",
                C: "dropping",
                D: "dropped"
            },
            classification: "v1",
            testId: 6,
            vol: 3,
            correctAnswer: "D",
            translation: "석유 생산은 1월부터 2월까지 5퍼센트 감소했다.",
            explanation: "주어 Oil production의 동사 자리이므로, 빈칸에는 불가산명사 production과 수가 일치하는 동사가 들어가야 한다. 따라서 수의 영향을 받지 않는 과거 동사 (D) dropped가 정답이다. (A) drop은 production과 수가 일치하지 않고, (B) to drop과 (C) dropping은 준동사이므로 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t6-q103",
            questionNo: 103,
            text: "Ms. Ito has ------- suggestions to resolve the computer problems.",
            options: {
                A: "help",
                B: "helper",
                C: "helped",
                D: "helpful"
            },
            classification: "a1",
            testId: 6,
            vol: 3,
            correctAnswer: "D",
            translation: "이토 씨는 컴퓨터 문제를 해결할 유용한 제안을 가지고 있다.",
            explanation: "문제를 해결할 제안을 가지고 있다는 내용이므로, 제안의 성격을 나타내는 형용사가 빈칸에 들어가야 자연스럽다. 따라서 (D) helpful(유용한, 도움이 되는)이 정답이다. (C) helped는 has와 함께 현재완료를 이룰 수 있지만, 이 경우 helped 뒤에 도움을 받는 대상이 와야 하므로 빈칸에는 적절하지 않다."
        },
        {
            id: "v3-p5-t6-q104",
            questionNo: 104,
            text: "The Vidorn Hotel ------- to construct a fountain in the front entryway.",
            options: {
                A: "matches",
                B: "plans",
                C: "tells",
                D: "praises"
            },
            classification: "voc1",
            testId: 6,
            vol: 3,
            correctAnswer: "B",
            translation: "비도른 호텔은 전면 출입로에 분수를 건설할 계획이다.",
            explanation: "보기에서 to부정사구 to construct a fountain in the front entryway를 목적어로 취할 수 있는 타동사를 선택해야 한다. 따라서 '~하려고 계획하다'라는 의미의 (B) plans가 정답이다."
        },
        {
            id: "v3-p5-t6-q105",
            questionNo: 105,
            text: "The schedule of events for the music ------- will be posted on Friday.",
            options: {
                A: "festival",
                B: "situation",
                C: "instrument",
                D: "issue"
            },
            classification: "voc1",
            testId: 6,
            vol: 3,
            correctAnswer: "A",
            translation: "음악 축제 행사 일정은 금요일에 게시될 것이다.",
            explanation: "music과 함께 복합명사를 이루어 전치사 for의 목적어 역할을 하는 자리로, 빈칸을 포함한 전치사구가 명사 events를 수식한다. 따라서 빈칸에는 세부 행사(events)를 포괄하는 단어가 들어가야 하므로, '축제'라는 의미의 (A) festival이 정답이다."
        },
        {
            id: "v3-p5-t6-q106",
            questionNo: 106,
            text: "When processing a medical leave request, the attending physician must fill out a form -------.",
            options: {
                A: "completes",
                B: "completed",
                C: "completely",
                D: "completeness"
            },
            classification: "av1",
            testId: 6,
            vol: 3,
            correctAnswer: "C",
            translation: "병가 신청을 처리할 때 주치의가 전적으로 양식을 작성해야 한다.",
            explanation: "주어가 the attending physician, 동사가 must fill out, 목적어가 a form인 완전한 절 뒤에서 동사를 수식하는 부사 자리이므로, (C) completely(완전하게, 전적으로)가 정답이다. 과거분사 (B) completed가 form 뒤에 올 수도 있지만(eg. get a form completed), 이 문장에서는 '완성된 양식을 작성해야 한다'는 뜻이 되므로 문맥상 적절하지 않다. (A) completes는 동사, (D) completeness는 명사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t6-q107",
            questionNo: 107,
            text: "Many fashion stylists ------- their online portfolios on a regular basis.",
            options: {
                A: "dress",
                B: "invite",
                C: "range",
                D: "update"
            },
            classification: "voc1",
            testId: 6,
            vol: 3,
            correctAnswer: "D",
            translation: "많은 패션 스타일리스트들이 온라인 포트폴리오를 정기적으로 업데이트한다.",
            explanation: "명사구 their online portfolios를 목적어로 취하는 동사 자리로, 패션 스타일리스트(fashion stylists)가 온라인 포트폴리오와 관련해 정기적으로(on a regular basis) 하는 일을 나타낸다. 따라서 '업데이트하다, 갱신하다'라는 의미의 (D) update가 정답이다."
        },
        {
            id: "v3-p5-t6-q108",
            questionNo: 108,
            text: "All flights were delayed three hours because of a heavy blanket of -------.",
            options: {
                A: "fog",
                B: "fogger",
                C: "foggy",
                D: "fogged"
            },
            classification: "voc1",
            testId: 6,
            vol: 3,
            correctAnswer: "A",
            translation: "짙게 드리운 안개 때문에 모든 항공편이 3시간 연착됐다.",
            explanation: "전치사 of의 목적어 역할을 하는 명사 자리로, a ~ blanket of(짙게 드리운)와 어울리는 불가산명사가 들어가야 한다. 따라서 '안개'라는 의미의 명사로 쓰일 수 있는 (A) fog가 정답이다. (B) fogger는 '분무기'라는 뜻의 가산명사, (C) foggy는 형용사, (D) fogged는 동사/과거분사로 구조상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t6-q109",
            questionNo: 109,
            text: "The Northwick Orchestra will perform later this month ------- Reverbury Hall.",
            options: {
                A: "at",
                B: "up",
                C: "on",
                D: "of"
            },
            classification: "pr1",
            testId: 6,
            vol: 3,
            correctAnswer: "A",
            translation: "노스윅 오케스트라는 이번 달 중에 리버버리홀에서 공연할 예정이다.",
            explanation: "동사 will perform과 장소 명사 Reverbury Hall을 자연스럽게 연결해주는 전치사를 선택해야 한다. Reverbury Hall은 오케스트라가 공연하는 장소이므로, '~에서'라는 의미의 (A) at이 정답이다."
        },
        {
            id: "v3-p5-t6-q110",
            questionNo: 110,
            text: "Only staff ------- based in the Toronto office may reserve the conference room.",
            options: {
                A: "possibly",
                B: "currently",
                C: "immediately",
                D: "exactly"
            },
            classification: "voc1",
            testId: 6,
            vol: 3,
            correctAnswer: "B",
            translation: "현재 토론토 사무실에 근거지를 둔 직원들만 회의실을 예약할 수 있다.",
            explanation: "과거분사 based를 수식하는 부사 자리로, 빈칸을 포함한 수식어구(------- based in the Toronto office)는 직원들의 자격을 나타낸다. 현재 토론토 사무실에 근거지를 둔 직원만 가능하다는 내용이 되어야 자연스러우므로, '현재'라는 의미의 (B) currently가 정답이다."
        },
        {
            id: "v3-p5-t6-q111",
            questionNo: 111,
            text: "------- of the employees have placed their order for a new standing desk.",
            options: {
                A: "Any",
                B: "Several",
                C: "Another",
                D: "Either"
            },
            classification: "p2",
            testId: 6,
            vol: 3,
            correctAnswer: "B",
            translation: "직원들 중 몇몇이 새 스탠딩 책상을 주문했다.",
            explanation: "복수동사 have placed의 주어 역할을 하는 명사 자리로, 보기에서 (A) Any와 (B) Several 중 하나를 선택해야 한다. 문맥상 직원들 몇 명이 주문했다는 내용이 되어야 자연스러우므로, '몇몇, 여러 명'이라는 의미의 (B) Several이 정답이다. (A) Any는 부정문, 조건문, 의문문에서 '아무도, 누군가'라는 뜻으로 쓰이거나, 긍정문에서 '누구라도'라는 의미를 나타내므로 빈칸에 적절하지 않다. (C) Another(또 다른 것)과 (D) Either(둘 중 하나)는 단수로 have placed 및 their와 수가 일치하지 않는다."
        },
        {
            id: "v3-p5-t6-q112",
            questionNo: 112,
            text: "Betsy Riley will seek support from ------- volunteers for our revised museum tours.",
            options: {
                A: "former",
                B: "following",
                C: "entire",
                D: "gradual"
            },
            classification: "voc1",
            testId: 6,
            vol: 3,
            correctAnswer: "A",
            translation: "벳시 라일리는 변경된 박물관 견학에 이전 자원봉사자들의 지원을 구할 것이다.",
            explanation: "명사 volunteers를 수식하는 형용사 자리로, 박물관 견학에 지원(support)을 해줄 만한 자원봉사자들의 특성을 나타내는 단어가 들어가야 한다. 따라서 예전에 유사한 업무를 해 본 경험이 있다는 것을 암시하는 (A) former(이전의)가 정답이다. 참고로, (C) entire는 '하나로서의 전체'를 강조하는 형용사이므로, the entire group of volunteers와 같은 형태로 쓰일 수는 있으나 volunteers만을 수식할 수는 없다."
        },
        {
            id: "v3-p5-t6-q113",
            questionNo: 113,
            text: "Casorama customers receive store ------- instead of a cash refund upon returning an item.",
            options: {
                A: "acceptance",
                B: "training",
                C: "preference",
                D: "credit"
            },
            classification: "voc1",
            testId: 6,
            vol: 3,
            correctAnswer: "D",
            translation: "카소라마 고객은 제품 반품 시 현금 환불 대신 상점 포인트를 받는다.",
            explanation: "store와 함께 복합명사를 이루어 동사 receive의 목적어 역할을 하는 자리로, 반품 시 현금 환불 대신(instead of a cash refund) 받을 수 있는 것이 들어가야 한다. 따라서 '상점 포인트'라는 의미를 완성하는 (D) credit이 정답이다."
        },
        {
            id: "v3-p5-t6-q114",
            questionNo: 114,
            text: "Our factory in Mannheim was upgraded last year, but the loading dock ------- needs work.",
            options: {
                A: "such",
                B: "very",
                C: "still",
                D: "even"
            },
            classification: "voc1",
            testId: 6,
            vol: 3,
            correctAnswer: "C",
            translation: "만하임에 있는 우리 공장은 작년에 개선됐지만 하역장은 여전히 작업이 필요하다.",
            explanation: "동사 needs를 수식하는 부사 자리이므로, 보기에서 동사를 수식할 수 있는 (C) still과 (D) even 중 하나를 선택해야 한다. 접속사 but이 두 절을 연결하고 있으므로, 작년에 공장이 개선된(was upgraded) 것과는 대조적으로 현재 하역장에 작업이 필요한(needs work) 상황을 강조하는 부사가 필요하다. 따라서 '아직도, 여전히'라는 의미의 (C) still이 정답이다. (D) even은 '심지어'라는 의미로 문맥상 빈칸에 적절하지 않다. (A) such는 한정사/대명사인데, 비격식체에서 부사처럼 쓰일 경우 형용사를 수식하고, (B) very는 형용사/부사를 수식하므로 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t6-q115",
            questionNo: 115,
            text: "The recently ------- mayor said she plans to address the town's traffic problems soon.",
            options: {
                A: "electing",
                B: "election",
                C: "elected",
                D: "elects"
            },
            classification: "pa2",
            testId: 6,
            vol: 3,
            correctAnswer: "C",
            translation: "최근 선출된 시장은 시의 교통 문제를 곧 해결할 계획이라고 말했다.",
            explanation: "빈칸은 부사 recently의 수식을 받으며 명사 mayor를 꾸며주는 형용사 자리이다. 따라서 보기에서 형용사 역할을 하는 분사 (A) electing과 (C) elected 중 하나를 선택해야 한다. 시장은 선출되는 대상이므로, 수동의 의미를 내포한 과거분사 (C) elected가 정답이 된다. (B) election은 명사, (D) elects는 동사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t6-q116",
            questionNo: 116,
            text: "Mr. Kim's research reveals that types of hay differ ------- in their nutritional content.",
            options: {
                A: "significant",
                B: "signify",
                C: "significance",
                D: "significantly"
            },
            classification: "av1",
            testId: 6,
            vol: 3,
            correctAnswer: "D",
            translation: "김 씨의 연구는 건초의 유형이 영양 성분에 따라 상당히 다르다는 사실을 밝혔다.",
            explanation: "전치사구 in their nutritional content와 함께 자동사 differ를 수식하는 부사 자리이므로, (D) significantly(상당히)가 정답이다. (A) significant는 형용사, (B) signify는 동사, (C) significance는 명사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t6-q117",
            questionNo: 117,
            text: "Let us extend our warmest welcome ------- Mr. Lam Keong Wu, our new vice president of marketing.",
            options: {
                A: "to",
                B: "under",
                C: "against",
                D: "in"
            },
            classification: "pr1",
            testId: 6,
            vol: 3,
            correctAnswer: "A",
            translation: "신임 마케팅 부사장이신 람 케옹 우 씨를 따뜻하게 맞이합시다.",
            explanation: "보기에서 extend our warmest welcome과 Mr. Lam Keong Wu, our new vice president of marketing을 적절히 연결해 주는 전치사를 선택해야 한다. 신임 마케팅 부사장에게 따뜻한 환영을 베풀자(extend)라는 내용이므로, '~에게'라는 의미의 (A) to가 정답이다."
        },
        {
            id: "v3-p5-t6-q118",
            questionNo: 118,
            text: "The latest polling shows increased public ------- for the stadium renovation project.",
            options: {
                A: "approve",
                B: "approval",
                C: "approving",
                D: "approvingly"
            },
            classification: "n1",
            testId: 6,
            vol: 3,
            correctAnswer: "B",
            translation: "최근 여론 조사는 경기장 보수 프로젝트에 대한 대중의 지지가 높아졌음을 보여준다.",
            explanation: "「과거분사(increased) + 형용사(public)」의 수식을 받으면서 동사 shows의 목적어 역할을 하는 명사 자리이므로, (B) approval(승인, 인정)이 정답이다. (A) approve는 동사, (C) approving은 형용사/동명사/현재분사, (D) approvingly는 부사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t6-q119",
            questionNo: 119,
            text: "Oshka Landscape Supply revenue is highly ------- on seasonal sales.",
            options: {
                A: "extensive",
                B: "dependent",
                C: "accessible",
                D: "insightful"
            },
            classification: "a2",
            testId: 6,
            vol: 3,
            correctAnswer: "B",
            translation: "오쉬카 조경용품점의 수익은 계절별 매출에 크게 의존한다.",
            explanation: "주어인 Oshka Landscape Supply revenue를 보충 설명하는 자리로, 빈칸 뒤 전치사 on과 어울려 쓰이는 형용사를 선택해야 한다. 계절별 매출(seasonal sales)에 대한 수익(revenue) 의존도가 높다는 내용이므로, on과 함께 '~에 의존하는'이라는 의미를 완성하는 (B) dependent가 정답이다. be dependent on은 빈출 표현이니 반드시 암기해 두도록 하자. 참고로, (C) accessible은 전치사 to(~에 접근하기 쉬운)나 from(~로부터 접근하기 쉬운)과 자주 쓰인다."
        },
        {
            id: "v3-p5-t6-q120",
            questionNo: 120,
            text: "Tourism in Cork has slowed in recent weeks ------- the unseasonably cold weather.",
            options: {
                A: "as long as",
                B: "in case of",
                C: "because of",
                D: "except for"
            },
            classification: "pr1",
            testId: 6,
            vol: 3,
            correctAnswer: "C",
            translation: "때아닌 추운 날씨 때문에 코크의 관광업은 최근 몇 주간 둔화됐다.",
            explanation: "빈칸이 목적어로 취하는 the unseasonably cold weather(때아닌 추운 날씨)는 관광업이 둔화된(Tourism ~ has slowed) 원인이라고 볼 수 있다. 따라서 '~ 때문에'라는 의미의 (C) because of가 정답이다."
        },
        {
            id: "v3-p5-t6-q121",
            questionNo: 121,
            text: "The Aznet Foundation is offering three $5,000 grants to entrepreneurs with the most ------- business ideas.",
            options: {
                A: "imagine",
                B: "imagining",
                C: "imaginative",
                D: "imagination"
            },
            classification: "a1",
            testId: 6,
            vol: 3,
            correctAnswer: "C",
            translation: "아즈넷 재단은 가장 창의적인 사업 아이디어가 있는 기업가 세 명에게 각각 5천 달러의 보조금을 제공한다.",
            explanation: "최상급 표현 the most와 함께 복합명사 business ideas를 수식하는 형용사 자리로, '창의적인 사업 아이디어'라는 내용이 되어야 자연스럽다. 따라서 '창의적인, 상상력이 풍부한'이라는 의미의 (C) imaginative가 정답이다. (B) imagining은 동명사/현재분사로 서 빈칸에는 이 결과를 강조하는 부사가 들어가야 하며, (A) imagine은 동사, (D) imagination은 명사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t6-q122",
            questionNo: 122,
            text: "Based on her ------- performance, Ms. Soares is likely to do quite well in the 50-meter race.",
            options: {
                A: "neither",
                B: "past",
                C: "apart",
                D: "twice"
            },
            classification: "voc1",
            testId: 6,
            vol: 3,
            correctAnswer: "B",
            translation: "소아레스 씨의 지난 성과로 볼 때, 50미터 경주에서 잘 해 낼 것 같다.",
            explanation: "소유격 인칭대명사 her와 함께 명사 performance를 수식하는 형용사 자리이므로, '지난'이라는 의미의 (B) past가 정답이다. 참고로, past는 명사, 전치사, 부사로도 쓰일 수 있다. (C) apart는 형용사로 쓰일 수 있지만 명사 앞에 올 수 없고, (A) neither는 한정사/대명사/부사, (D) twice는 부사로 구조상으로도 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t6-q123",
            questionNo: 123,
            text: "The manual provides a basic ------- of the R25100 camera's primary features.",
            options: {
                A: "overview",
                B: "adviser",
                C: "challenge",
                D: "instance"
            },
            classification: "n1",
            testId: 6,
            vol: 3,
            correctAnswer: "A",
            translation: "설명서는 R25100 카메라의 주요 기능에 대해 기본 개요를 제공한다.",
            explanation: "동사 provides의 목적어 자리로, 설명서(manual)가 카메라의 주요 기능(primary features)에 관해 제공하는 것을 나타낸다. 따라서 '개요, 개관'이라는 의미의 (A) overview가 정답이다."
        },
        {
            id: "v3-p5-t6-q124",
            questionNo: 124,
            text: "Be sure to ------- the wireless Internet option on your company mobile phone to avoid additional data fees.",
            options: {
                A: "return",
                B: "pull",
                C: "enable",
                D: "inflate"
            },
            classification: "voc1",
            testId: 6,
            vol: 3,
            correctAnswer: "C",
            translation: "추가 데이터 요금을 피하려면 회사 휴대전화의 무선 인터넷 옵션을 켜십시오.",
            explanation: "빈칸은 명사구 the wireless Internet option을 목적어로 취하는 자리로, 추가 데이터 요금을 피하기 위해(to avoid additional data fees) 휴대전화에 해야 하는 일을 나타낸다. 따라서 '(기능 등을) 활성화시키다, ~할 수 있게 하다'라는 의미의 (C) enable이 정답이다."
        },
        {
            id: "v3-p5-t6-q125",
            questionNo: 125,
            text: "The CEO of True Home Estates ------- hires agents who have overcome obstacles in their lives.",
            options: {
                A: "soon",
                B: "most",
                C: "enough",
                D: "always"
            },
            classification: "voc1",
            testId: 6,
            vol: 3,
            correctAnswer: "D",
            translation: "트루홈 에스테이트의 최고경영자는 항상 자신의 삶에서 장애물을 극복한 중개인을 채용한다.",
            explanation: "현재시제 동사 hires(채용하다)를 수식하는 자리이므로, 중개인 채용이라는 반복적인 행위와 어울리는 부사가 들어가야 문맥상 자연스럽다. 따라서 '항상, 늘'이라는 의미의 (D) always가 정답이다. (A) soon은 '곧, 이내'라는 뜻으로 문맥상 어울리지 않고, (B) most와 (C) enough는 동사를 뒤에서 수식하므로 구조상으로도 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t6-q126",
            questionNo: 126,
            text: "To receive payment, vendors must submit an invoice online ------- twenty business days of finishing a project.",
            options: {
                A: "whether",
                B: "whose",
                C: "within",
                D: "while"
            },
            classification: "pr1",
            testId: 6,
            vol: 3,
            correctAnswer: "C",
            translation: "대금을 받으려면, 판매업체들은 프로젝트 완료로부터 영업일 기준 20일 이내에 온라인으로 청구서를 제출해야 한다.",
            explanation: "명사구 twenty business days (of finishing a project)를 목적어로 취하는 전치사 자리이므로, (C) within(~ 이내에)이 정답이다. (A) whether, (B) whose, (D) while은 모두 명사를 목적어로 취할 수 없으며 주로 절을 이끈다."
        },
        {
            id: "v3-p5-t6-q127",
            questionNo: 127,
            text: "------- opening a bakery, Mr. Laxalt had worked in the food industry for fifteen years.",
            options: {
                A: "Prior to",
                B: "Although",
                C: "Then",
                D: "If"
            },
            classification: "pr2",
            testId: 6,
            vol: 3,
            correctAnswer: "A",
            translation: "락살트 씨는 제과점을 열기 전 식품업계에서 15년간 일해왔었다.",
            explanation: "opening을 동명사로 볼 경우 전치사가, 분사로 볼 경우 부사절에서 축약된 분사구문을 이끄는 일부 접속사(eg. When)가 들어갈 수 있다. 콤마 뒤 절에서 과거완료 시제(had worked)를 사용해 락살트 씨의 이전 경력을 설명하고 있으므로, '~ 전에'라는 의미의 전치사 (A) Prior to가 정답이 된다. 접속사인 (B) Although와 (D) If는 현재분사 구문과는 쓰이지 않고, 부사인 (C) Then은 구조상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t6-q128",
            questionNo: 128,
            text: "Investors' initial fears were calmed by the ------- sales report issued this week.",
            options: {
                A: "remote",
                B: "attentive",
                C: "reassuring",
                D: "restful"
            },
            classification: "pa1",
            testId: 6,
            vol: 3,
            correctAnswer: "C",
            translation: "투자자들이 초기에 느꼈던 두려움은 이번 주 발행된 고무적인 판매 실적 보고서에 의해 잠잠해졌다.",
            explanation: "빈칸은 복합명사 sales report를 수식하는 형용사 자리로, 투자자들의 초기 두려움(Investors' initial fears)을 가라앉힌 판매 실적 보고서의 성격을 나타낸다. 따라서 '안심시키는, 고무적인'이라는 의미의 (C) reassuring이 정답이다."
        },
        {
            id: "v3-p5-t6-q129",
            questionNo: 129,
            text: "One distinctive aspect of the painter Chapin Kurek's portrait style is her almost comic ------- of facial features.",
            options: {
                A: "exaggerate",
                B: "exaggerated",
                C: "exaggeratedly",
                D: "exaggeration"
            },
            classification: "n1",
            testId: 6,
            vol: 3,
            correctAnswer: "D",
            translation: "화가 채핀 쿠렉의 초상화 방식에서 독특한 점 하나는 얼굴의 특징을 우스꽝스러울 정도로 과장하는 것이다.",
            explanation: "her almost comic의 수식을 받는 명사 자리로, 주어인 One distinctive aspect의 보어이다. 따라서 (D) exaggeration(과장)이 정답이다. (A) exaggerate는 동사, (B) exaggerated는 동사/과거분사, (C) exaggeratedly는 부사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t6-q130",
            questionNo: 130,
            text: "Ramirez Instruments ------- high-quality acoustic guitars for over a century.",
            options: {
                A: "to be designed",
                B: "has been designing",
                C: "was designed",
                D: "is designing"
            },
            classification: "v8",
            testId: 6,
            vol: 3,
            correctAnswer: "B",
            translation: "라미레즈 악기는 100년 이상 품질이 우수한 어쿠스틱 기타를 디자인해오고 있다.",
            explanation: "주어인 Ramirez Instruments의 동사 자리로, 명사구 high-quality acoustic guitars를 목적어로 취한다. 따라서 능동태 동사 중 하나를 선택해야 하는데, 뒤에 과거부터 현재까지의 기간을 나타내는 표현(for over a century)이 있으므로, 능동태 현재완료진행 동사인 (B) has been designing이 정답이 된다."
        }
    ]
};
