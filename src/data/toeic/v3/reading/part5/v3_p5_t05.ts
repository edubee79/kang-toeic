import { Part5TestSet } from '../../v4/reading/part5/types';

export const test5Data: Part5TestSet = {
    testId: 5,
    vol: 3,
    title: "Part 5 Real Test 5",
    questions: [
        {
            id: "v3-p5-t5-q101",
            questionNo: 101,
            text: "Ms. Abe will order supplies tomorrow, ------- tell her right away if you need anything.",
            options: {
                A: "than",
                B: "wait",
                C: "so",
                D: "about"
            },
            classification: "c1",
            testId: 5,
            vol: 3,
            correctAnswer: "C",
            translation: "아베 씨가 내일 물품을 주문할 예정이니, 필요한 것이 있으시면 바로 그녀에게 얘기하세요.",
            explanation: "빈칸이 완전한 절과 주어 you가 생략된 명령문 사이에 있으므로, 빈칸에는 등위접속사가 들어가야 한다. 따라서 '그래서'라는 뜻의 (C) so가 정답이다. 상관접속사로 쓰이는 (A) than은 콤마 바로 뒤에 올 수 없고, (B) wait은 동사, (D) about은 전치사로 절과 절을 이어 줄 수 없다."
        },
        {
            id: "v3-p5-t5-q102",
            questionNo: 102,
            text: "The Knysya Theater requests that all electronic devices be silenced ------- the play begins.",
            options: {
                A: "also",
                B: "but",
                C: "unless",
                D: "before"
            },
            classification: "c3",
            testId: 5,
            vol: 3,
            correctAnswer: "D",
            translation: "크니샤 극장은 연극이 시작되기 전 모든 전자기기를 무음으로 해 달라고 요청한다.",
            explanation: "두 개의 완전한 절을 이어주는 접속사 자리이다. 따라서 보기에서 등위접속사인 (B) but, 부사절 접속사인 (C) unless와 (D) before 중 하나를 선택해야 한다. 모든 전자기기를 무음으로 설정하는 것(all electronic devices (should) be silenced)은 연극이 시작하기(the play begins) 전에 행해져야 하므로, '~ 전에'라는 의미의 (D) before가 정답이다. 참고로, 요청(requests)의 동사 뒤에 오는 that절에는 「(should) + 동사원형」을 쓴다."
        },
        {
            id: "v3-p5-t5-q103",
            questionNo: 103,
            text: "------- Human Resources if you have questions about taking time off from work.",
            options: {
                A: "Contacting",
                B: "Contacted",
                C: "Contacts",
                D: "Contact"
            },
            classification: "v1",
            testId: 5,
            vol: 3,
            correctAnswer: "D",
            translation: "휴가 사용에 관한 문의사항이 있으면 인사부로 연락하십시오.",
            explanation: "주어 You가 생략된 명령문에서 Human Resources를 목적어로 취하는 타동사 자리이다. 따라서 동사원형 (D) Contact가 정답이다."
        },
        {
            id: "v3-p5-t5-q104",
            questionNo: 104,
            text: "------- eighty thousand people attended yesterday's soccer match.",
            options: {
                A: "Almost",
                B: "More",
                C: "Often",
                D: "Enough"
            },
            classification: "voc1",
            testId: 5,
            vol: 3,
            correctAnswer: "A",
            translation: "거의 8만 명이 어제 축구 경기에 참석했다.",
            explanation: "숫자 표현 eighty thousand를 적절히 수식하는 부사를 선택해야 한다. 따라서 '거의'라는 의미의 (A) Almost가 정답이다. 참고로, (B) More는 than과 함께 '~이상'이라는 뜻으로 쓰일 경우 빈칸에 들어갈 수 있다."
        },
        {
            id: "v3-p5-t5-q105",
            questionNo: 105,
            text: "Online visitors report that our company's Web site is somewhat -------.",
            options: {
                A: "confuse",
                B: "confuses",
                C: "confusing",
                D: "confusion"
            },
            classification: "pa1",
            testId: 5,
            vol: 3,
            correctAnswer: "C",
            translation: "온라인 방문자들은 우리 회사 웹사이트가 다소 혼동을 준다고 전합니다.",
            explanation: "부사 somewhat의 수식을 받으면서, 주어 our company's Web site를 보충 설명하는 주격 보어 자리이다. 따라서 빈칸에는 형용사가 들어가야 하므로, (C) confusing(혼란스럽게 하는, 헷갈리게 하는)이 정답이다. (A) confuse와 (B) confuses는 동사, (D) confusion은 명사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t5-q106",
            questionNo: 106,
            text: "Traffic ------- are expected next week along Reimers Road.",
            options: {
                A: "drivers",
                B: "crowds",
                C: "delays",
                D: "needs"
            },
            classification: "voc1",
            testId: 5,
            vol: 3,
            correctAnswer: "C",
            translation: "다음 주 레이머스 로드를 따라 교통 정체가 예상된다.",
            explanation: "traffic과 복합명사를 이루어 문장의 주어 역할을 하는 명사를 선택해야 한다. 도로에서 예상되는 교통 상황을 나타내는 단어가 들어가야 하므로, '정체, 지연'이라는 의미의 (C) delays가 정답이다. traffic/flight/travel delays 등의 빈출 표현은 암기해 두는 것이 좋다."
        },
        {
            id: "v3-p5-t5-q107",
            questionNo: 107,
            text: "Shaloub Hospital wants to hire several more ------- qualified laboratory workers.",
            options: {
                A: "higher",
                B: "highest",
                C: "high",
                D: "highly"
            },
            classification: "av1",
            testId: 5,
            vol: 3,
            correctAnswer: "D",
            translation: "샬로브 병원은 우수한 자격을 갖춘 실험실 직원을 몇 명 더 채용하고자 한다.",
            explanation: "빈칸에는 형용사 qualified를 수식하는 부사가 필요하므로, '고도로(=높은/우수한 수준으로)'라는 의미의 (D) highly가 정답이다. high는 부사로 쓰일 경우 물리적 높이/비용/양을 나타내며, 분사를 수식해 하나의 형용사가 될 때는 하이픈을 동반한다. 예를 들어 highly paid 및 high-paid는 둘 다 가능하지만, qualified는 '자격을 갖춘'이라는 뜻이므로 high의 수식을 받을 수 없다. qualified가 well/suitably/fully 등의 부사와도 어울려 쓰인다는 것을 알아두자."
        },
        {
            id: "v3-p5-t5-q108",
            questionNo: 108,
            text: "Whenever you are the ------- person to exit a room, please turn off the lights.",
            options: {
                A: "last",
                B: "inside",
                C: "finish",
                D: "near"
            },
            classification: "voc1",
            testId: 5,
            vol: 3,
            correctAnswer: "A",
            translation: "본인이 방에서 마지막으로 나갈 때는 항상 불을 끄십시오.",
            explanation: "빈칸에는 person을 수식하는 형용사 또는 person과 복합명사를 이루는 명사가 들어갈 수 있다. 소등해야(turn off the lights) 하는 사람을 명시하는 부분이므로, '방을 나가는 마지막 사람'이라는 표현을 완성하는 (A) last가 정답이다. (C) finish는 '종결, 끝손질'이라는 의미의 명사로 쓰일 수 있지만, person과 복합명사를 이루기엔 어색하다."
        },
        {
            id: "v3-p5-t5-q109",
            questionNo: 109,
            text: "Following a brief ------- with the chief technician, Mr. Moore agreed to update the operations manual.",
            options: {
                A: "converses",
                B: "conversation",
                C: "conversational",
                D: "conversationally"
            },
            classification: "n1",
            testId: 5,
            vol: 3,
            correctAnswer: "B",
            translation: "무어 씨는 선임 기술자와 간단히 대화한 후 사용 설명서를 업데이트하는 데 동의했다.",
            explanation: "분사형 전치사 Following의 목적어 역할을 하는 명사 자리로, 형용사 brief의 수식을 받는다. 따라서 (B) conversation(대화)이 정답이다. (A) converses는 동사, (C) conversational은 형용사, (D) conversationally는 부사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t5-q110",
            questionNo: 110,
            text: "After record profits, Golden Shamrock Jewelry's stock price increased ------- our expectations.",
            options: {
                A: "beside",
                B: "beyond",
                C: "behind",
                D: "between"
            },
            classification: "pr2",
            testId: 5,
            vol: 3,
            correctAnswer: "B",
            translation: "골든 샴록 쥬얼리는 기록적인 수익을 낸 후 주가가 기대 이상으로 상승했다.",
            explanation: "자동사 increased와 명사구 our expectations를 적절히 연결해 주는 전치사를 선택해야 한다. 문맥을 살펴보면, 기대치(expectations)를 기준점으로 잡아 주가 상승 정도를 표현하고 있다. 따라서 '~ 이상으로, ~를 넘어서는'이라는 의미의 (B) beyond가 정답이다. beyond(기대 이상)/below(기대 이하) expectations는 필수 표현으로 암기해 두자."
        },
        {
            id: "v3-p5-t5-q111",
            questionNo: 111,
            text: "We cannot ------- the filming of our documentary, Morning after Night, without sufficient funding.",
            options: {
                A: "completely",
                B: "completion",
                C: "complete",
                D: "completing"
            },
            classification: "v1",
            testId: 5,
            vol: 3,
            correctAnswer: "C",
            translation: "충분한 자금 없이는 우리의 다큐멘터리 '밤이 지나간 후의 아침' 촬영을 완료하지 못한다.",
            explanation: "조동사 cannot 뒤에 오는 동사원형 자리로, the filming을 목적어로 취한다. 따라서 (C) complete가 정답이다. (A) completely는 부사, (B) completion은 명사, (D) completing은 동명사/현재분사로 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t5-q112",
            questionNo: 112,
            text: "Get to the station a few minutes early because Mr. Xu's train will arrive ------- at 7:00 P.M.",
            options: {
                A: "carefully",
                B: "unexpectedly",
                C: "promptly",
                D: "clearly"
            },
            classification: "voc1",
            testId: 5,
            vol: 3,
            correctAnswer: "C",
            translation: "쉬 씨가 탄 기차가 정확히 오후 7시에 도착할 테니 몇 분 일찍 역에 도착하십시오.",
            explanation: "문맥상 도착 예정(will arrive) 시간(at 7:00 P.M.)을 강조하는 부사가 들어가야 자연스러우므로, '정확히, 시간을 엄수하여'라는 의미의 (C) promptly가 정답이다."
        },
        {
            id: "v3-p5-t5-q113",
            questionNo: 113,
            text: "------- can be done to revise your order, since the merchandise has already shipped.",
            options: {
                A: "Ours",
                B: "Nobody",
                C: "Others",
                D: "Nothing"
            },
            classification: "p1",
            testId: 5,
            vol: 3,
            correctAnswer: "D",
            translation: "상품이 이미 배송됐기 때문에 귀하의 주문을 변경하기 위해 할 수 있는 것은 아무것도 없습니다.",
            explanation: "빈칸은 동사 can be done의 주어 역할을 하는 자리로, 주문 변경을 위해(to revise your order) 할 수 있는 것을 나타낸다. 물건이 이미 배송된 상태(the merchandise has already shipped)이므로 주문을 변경하기 위해 할 수 있는 일은 없다고 보는 것이 타당하다. 따라서 사물을 대신하며 부정의 의미를 지닌 (D) Nothing이 정답이다. (A) Ours는 '우리 것', (B) Nobody는 '아무도 ~않다, 무명인', (C) Others는 '다른 것들'을 의미하므로 빈칸에는 적절하지 않다."
        },
        {
            id: "v3-p5-t5-q114",
            questionNo: 114,
            text: "Recent graduates tend to ------- workplaces where teamwork and collaboration are encouraged.",
            options: {
                A: "think",
                B: "apply",
                C: "extend",
                D: "prefer"
            },
            classification: "voc1",
            testId: 5,
            vol: 3,
            correctAnswer: "D",
            translation: "최근 졸업자들은 팀워크와 협력이 장려되는 직장을 선호하는 경향이 있다.",
            explanation: "명사 workplaces를 목적어로 취하는 타동사 자리로, 팀워크와 협력이 장려되는 직장에 대해 졸업생들이 어떤 경향을 보이는지 설명하는 단어가 들어가야 한다. 따라서 '선호하다'라는 의미의 (D) prefer가 정답이다. 참고로, 'A를 B라고 생각하는 경향이 있다'라고 말하려면 「think A (to be) B」 구조로 해야 하고, apply를 '~에 지원하다'라는 뜻으로 쓰려면 전치사 for나 to가 필요하다."
        },
        {
            id: "v3-p5-t5-q115",
            questionNo: 115,
            text: "Zhang Cleaning takes great care to ensure that all its employees follow specific cleaning -------.",
            options: {
                A: "proceeds",
                B: "procedures",
                C: "procedural",
                D: "proceeding"
            },
            classification: "n1",
            testId: 5,
            vol: 3,
            correctAnswer: "B",
            translation: "장 클리닝은 모든 직원들이 특정한 청소 절차를 따르도록 대단히 신경을 쓴다.",
            explanation: "cleaning과 함께 복합명사를 이루어 동사 follow의 목적어 역할을 하는 명사 자리이다. 의미상 따라야 하는 대상을 나타내야 하며, 형용사 specific 앞에 한정사가 없으므로 복수명사 또는 불가산명사가 되어야 한다. 따라서 '절차'라는 뜻의 복수명사 (B) procedures가 정답이다. (A) proceeds는 명사로 쓰일 경우 '수익금'이라는 의미로 문맥상 빈칸에 어색하고, (D) proceeding도 '소송 절차, 일련의 행위'라는 뜻의 가산명사로 쓰일 수 있지만, cleaning과 어울리지 않으며 단수 형태이므로 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t5-q116",
            questionNo: 116,
            text: "Mumbai Jewel is a widely acclaimed restaurant, mainly ------- its delicious buffet dinners.",
            options: {
                A: "such as",
                B: "not only",
                C: "because of",
                D: "together with"
            },
            classification: "pr1",
            testId: 5,
            vol: 3,
            correctAnswer: "C",
            translation: "뭄바이 쥬얼은 주로 맛있는 뷔페 저녁 식사 덕분에 널리 호평을 받고 있는 음식점이다.",
            explanation: "명사구 its delicious buffet dinners를 목적어로 취하는 전치사 자리로, 보기에서 전치사가 있는 (A) such as, (C) because of, (D) together with 중 하나를 선택해야 한다. 맛있는 뷔페 저녁 식사는 레스토랑이 호평 받는(acclaimed) 주된 이유이므로, '~ 때문에'라는 의미의 (C) because of가 정답이 된다. 참고로, (B) not only는 but (also)와 함께 '~뿐만 아니라 ~도'라는 뜻의 상관접속사로 쓰인다."
        },
        {
            id: "v3-p5-t5-q117",
            questionNo: 117,
            text: "Before a job interview, it is critical to prepare ------- for answering the most commonly asked questions.",
            options: {
                A: "whose",
                B: "whichever",
                C: "theirs",
                D: "oneself"
            },
            classification: "p4",
            testId: 5,
            vol: 3,
            correctAnswer: "D",
            translation: "면접 전, 가장 많이 묻는 질문들에 답변하는 연습을 하는 것이 매우 중요하다.",
            explanation: "진주어 to prepare의 목적어 자리이다. prepare의 의미상 주어는 일반적인 사람(one)이며, 질문에 답하도록 준비시켜야 하는 대상은 면접을 보는 사람 자신이다. 따라서 one의 재귀대명사 (D) oneself가 정답이다. (A) whose와 (B) whichever는 접속사 역할을 하므로 바로 뒤에 전치사구가 올 수 없다."
        },
        {
            id: "v3-p5-t5-q118",
            questionNo: 118,
            text: "While it is not -------, staff are encouraged to read Joan Frantz's book Balancing Work and Life.",
            options: {
                A: "required",
                B: "published",
                C: "limited",
                D: "guaranteed"
            },
            classification: "pa2",
            testId: 5,
            vol: 3,
            correctAnswer: "A",
            translation: "필수는 아니지만, 직원들은 조안 프란츠의 책 <일과 삶의 균형 맞추기>를 읽어보는 게 좋겠습니다.",
            explanation: "빈칸의 주어 it은 뒤에 나온 to read Joan Frantz's book Balancing Work and Life를 가리킨다. 주절에서 이 책을 읽는 것이 권장된다(are encouraged)고 했으므로, 양보의 접속사 While이 이끄는 절은 '그것이 필수는 아니지만'이라는 내용이 되어야 자연스럽다. 따라서 '요구되는, 필수인'이라는 뜻의 (A) required가 정답이다."
        },
        {
            id: "v3-p5-t5-q119",
            questionNo: 119,
            text: "It is ------- to bring sturdy boots to wear on the hike.",
            options: {
                A: "advise",
                B: "advisor",
                C: "advisable",
                D: "advises"
            },
            classification: "a2",
            testId: 5,
            vol: 3,
            correctAnswer: "C",
            translation: "등반 시에는 튼튼한 부츠를 가져와 신는 것이 바람직하다.",
            explanation: "가주어 it(=to bring sturdy boots to wear on the hike)의 주격 보어 자리이다. 문맥상 부츠를 가져와 신는 행위에 대해 설명하는 형용사가 들어가야 자연스러우므로, (C) advisable(바람직한)이 정답이다. (B) advisor는 사람을 나타내는 가산명사로, 한정사가 없으며 주어와 동격 관계를 이루지 않으므로 빈칸에 들어갈 수 없다. (A) advise와 (D) advises는 동사로 품사상 오답이다."
        },
        {
            id: "v3-p5-t5-q120",
            questionNo: 120,
            text: "Nordel Park will open for the season once average daytime temperatures reach ------- 15 degrees.",
            options: {
                A: "at least",
                B: "as of",
                C: "along with",
                D: "ahead of"
            },
            classification: "voc1",
            testId: 5,
            vol: 3,
            correctAnswer: "A",
            translation: "노덜 파크는 낮 평균 기온이 최소 15도에 이르면 시즌 개장을 할 것이다.",
            explanation: "빈칸 앞 reach는 '도달하다, 이르다'라는 뜻으로 15 degrees를 목적어로 취한다. 따라서 빈칸에는 수치와 어울리는 부사가 들어가야 하므로, '적어도, 최소'라는 의미의 (A) at least가 정답이다. 참고로, reach가 자동사로 쓰일 경우, '(손이) 닿다, (손을) 뻗다'라는 뜻을 나타내며 주로 전치사 for나 (in)to를 동반한다."
        },
        {
            id: "v3-p5-t5-q121",
            questionNo: 121,
            text: "Before investing, Mr. Hwang will wait for greater ------- that Briomer Tech is fully committed to the project.",
            options: {
                A: "assure",
                B: "assured",
                C: "assuredly",
                D: "assurance"
            },
            classification: "n1",
            testId: 5,
            vol: 3,
            correctAnswer: "D",
            translation: "황 씨는 투자하기 전, 브라이오머 테크가 프로젝트에 전념할 것이라는 더 강력한 확약을 기다릴 것이다.",
            explanation: "비교급 형용사 greater의 수식을 받으면서 전치사 for의 목적어 역할을 하는 명사 자리이므로, (D) assurance(확약, 확언)가 정답이다. (A) assure는 동사, (B) assured는 동사/과거분사, (C) assuredly는 부사로 품사상 빈칸에 들어갈 수 없다. 참고로, assurance와 that절은 동격 관계(~라는 확약)를 이루고 있다."
        },
        {
            id: "v3-p5-t5-q122",
            questionNo: 122,
            text: "Tralim Consulting's annual profits are expected to ------- exceed €5 million.",
            options: {
                A: "exactly",
                B: "extremely",
                C: "eventually",
                D: "evenly"
            },
            classification: "voc1",
            testId: 5,
            vol: 3,
            correctAnswer: "C",
            translation: "트라림 컨설팅의 연 수익은 결국 5백만 유로를 넘길 것으로 예상된다.",
            explanation: "빈칸을 포함한 to부정사구는 연간 수익(annual profits)이 5백만 유로를 넘을 거라는 예상(expected)을 나타내고 있다. 따라서 빈칸에는 이 결과를 강조하는 부사가 들어가야 자연스러우므로, '결국, 마침내'라는 의미의 (C) eventually가 정답이다. 참고로, (A) exactly(정확히)는 €5 million를 강조하는 자리에는 더 어울리고, (B) extremely(극도로)는 주로 정도를 묘사하는 형용사/부사를 수식하므로 빈칸에 적절하지 않다."
        },
        {
            id: "v3-p5-t5-q123",
            questionNo: 123,
            text: "Although many factors contribute to a successful business, Mr. Lee thinks that keeping customers satisfied is the -------.",
            options: {
                A: "essential",
                B: "most essential",
                C: "essentially",
                D: "more essentially"
            },
            classification: "com3",
            testId: 5,
            vol: 3,
            correctAnswer: "B",
            translation: "많은 요인들이 사업의 성공에 기여하고 있기는 하지만, 이 씨는 고객을 만족시키는 것이 가장 필수적이라고 생각한다.",
            explanation: "정관사 the와 함께 최상급을 이루어 주어인 keeping customers satisfied를 보충 설명하는 주격 보어 자리이다. 따라서 최상급 형용사가 들어가야 하므로, (B) most essential(가장 필수적인)이 정답이다. (A) essential은 원급 형용사, (C) essentially와 (D) more essentially는 부사로 구조상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t5-q124",
            questionNo: 124,
            text: "Ms. Alshammari took a full hour to ------- each of the budget changes during the staff meeting.",
            options: {
                A: "detail",
                B: "attend",
                C: "respond",
                D: "comply"
            },
            classification: "voc1",
            testId: 5,
            vol: 3,
            correctAnswer: "A",
            translation: "알샴마리 씨는 직원 회의 중 예산 변동사항 각각을 상세히 알려주느라 한 시간을 꼬박 채웠다.",
            explanation: "명사구 each of the budget changes를 목적어로 취하는 타동사 자리이다. 예산 변동사항은 하나 하나 설명할 대상이라고 볼 수 있으므로, '상세히 알리다'라는 의미의 (A) detail이 정답이다. (B) attend는 참석하는 행사를 목적어로 취하므로 문맥상 적절하지 않다. (C) respond(응답하다)는 주로 자동사로 쓰이며, 타동사로 쓰일 경우 that절을 목적어로 취한다. (D) comply(따르다)는 자동사로서 단독으로 쓰이거나 전치사 with를 동반한다."
        },
        {
            id: "v3-p5-t5-q125",
            questionNo: 125,
            text: "It is recommended that clients book the Desert Rose Ballroom for their event more than four months -------.",
            options: {
                A: "over time",
                B: "in advance",
                C: "up to now",
                D: "far ahead"
            },
            classification: "voc1",
            testId: 5,
            vol: 3,
            correctAnswer: "B",
            translation: "고객들은 행사를 위해 4개월 이상 전에 미리 데저트 로즈 볼룸을 예약하는 것이 권장된다.",
            explanation: "more than four months는 고객에게 권장하는 예약 시점을 정하는 기준이다. 즉, 이 기간 전에 예약하기를 권장한다는 내용이 되어야 하므로, '미리'라는 의미의 (B) in advance가 정답이다. 참고로, (D) far ahead는 '~보다 훨씬 앞서'라는 뜻을 나타낼 경우에는 주로 「far ahead of + 명사」의 구조로 쓰이며, far 앞에 기간을 나타내는 표현이 올 수 없다. far 없이 ahead만 있을 경우에는 가능하다 (eg. four months ahead)."
        },
        {
            id: "v3-p5-t5-q126",
            questionNo: 126,
            text: "For a true understanding of our production levels, data from oil-drilling sites must be as ------- as possible.",
            options: {
                A: "accurate",
                B: "optimistic",
                C: "exclusive",
                D: "competitive"
            },
            classification: "voc1",
            testId: 5,
            vol: 3,
            correctAnswer: "A",
            translation: "우리의 생산 수준을 제대로 이해하려면 유정 굴착 현장 데이터가 최대한 정확해야 한다.",
            explanation: "as와 as possible 사이에서 주어인 data from oil-drilling sites를 보충 설명하는 형용사 자리이다. 생산 수준을 제대로 이해하는데(For a true understanding of our production levels) 필요한 데이터(data)의 특징을 나타내는 단어가 필요하므로, '정확한, 정밀한'이라는 의미의 (A) accurate가 정답이다."
        },
        {
            id: "v3-p5-t5-q127",
            questionNo: 127,
            text: "Adopting advanced billing software would improve Narrin Group's fiscal-management process -------.",
            options: {
                A: "substantial",
                B: "substantially",
                C: "more substantial",
                D: "substances"
            },
            classification: "av2",
            testId: 5,
            vol: 3,
            correctAnswer: "B",
            translation: "고급 계산서 청구 소프트웨어를 채택하면 나린 그룹의 회계 관리 절차가 상당히 개선될 것이다.",
            explanation: "Adopting ~ software가 주어, would improve가 동사, Narrin Group's ~ process가 목적어인 완전한 절 뒤에서 개선될(would improve) 정도를 강조하는 부사 자리이다. 따라서 (B) substantially(상당히, 많이)가 정답이다. (A) substantial과 (C) more substantial은 형용사, (D) substances는 명사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t5-q128",
            questionNo: 128,
            text: "Thanks to the effective ------- of Drinkever's first beverage, last month's product launch was a success.",
            options: {
                A: "service",
                B: "promotion",
                C: "response",
                D: "information"
            },
            classification: "n1",
            testId: 5,
            vol: 3,
            correctAnswer: "B",
            translation: "드링크에버 첫 음료의 효과적인 홍보 덕분에 지난달 제품 출시가 성공을 거뒀다.",
            explanation: "형용사 effective의 수식을 받으면서 전치사 Thanks to의 목적어 역할을 하는 명사 자리이다. 빈칸을 포함한 부분이 제품 출시(product launch) 성공(a success)에 기여한 요인을 설명하고 있다. 따라서 effective와 함께 '효과적인 홍보'라는 의미를 완성하는 (B) promotion이 정답이다."
        },
        {
            id: "v3-p5-t5-q129",
            questionNo: 129,
            text: "By this time next year, Grasswell Industries ------- two new plants in eastern Europe.",
            options: {
                A: "opens",
                B: "will have opened",
                C: "is opening",
                D: "had opened"
            },
            classification: "v8",
            testId: 5,
            vol: 3,
            correctAnswer: "B",
            translation: "그라스웰 인더스트리즈는 내년 이맘때까지 동유럽에 새 공장 두 곳을 열 것이다.",
            explanation: "'내년 이맘때까지'라는 의미의 By this time next year가 빈칸이 포함된 절을 수식하고 있다. 따라서 미래의 특정 시점까지 완료될 일을 나타내는 미래완료시제 동사가 쓰여야 하므로, (B) will have opened가 정답이다."
        },
        {
            id: "v3-p5-t5-q130",
            questionNo: 130,
            text: "Please put an ------- supply of premium snack items on the carts for the next flight.",
            options: {
                A: "absolute",
                B: "earned",
                C: "adequate",
                D: "energetic"
            },
            classification: "voc1",
            testId: 5,
            vol: 3,
            correctAnswer: "C",
            translation: "다음 항공편을 위해 카트에 충분한 양의 고급 간식 제품들을 구비해 두십시오.",
            explanation: "명사 supply를 수식하는 형용사 자리로, 카트에 비축해야 할 제품의 공급량을 나타내는 단어가 들어가야 한다. 따라서 '충분한, 적절한'이라는 의미의 (C) adequate이 정답이다."
        }
    ]
};
