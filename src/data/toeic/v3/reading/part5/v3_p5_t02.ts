import { Part5TestSet } from '../../v4/reading/part5/types';

export const test2Data: Part5TestSet = {
    testId: 2,
    vol: 3,
    title: "Part 5 Real Test 2",
    questions: [
        {
            id: "v3-p5-t2-q101",
            questionNo: 101,
            text: "Ms. Budrow was promoted after ------- group recorded the highest revenue growth for the year.",
            options: {
                A: "her",
                B: "hers",
                C: "herself",
                D: "she"
            },
            classification: "p1",
            testId: 2,
            vol: 3,
            correctAnswer: "A",
            translation: "버드로우 씨는 자신의 그룹이 그 해 가장 높은 수익 성장을 기록한 이후 승진됐다.",
            explanation: "after가 이끄는 절의 주어인 group을 한정 수식하는 자리이다. 따라서 소유격 인칭대명사 (A) her가 정답이다."
        },
        {
            id: "v3-p5-t2-q102",
            questionNo: 102,
            text: "The community program features classes in photography, drawing, ------- other arts.",
            options: {
                A: "yet",
                B: "but",
                C: "and",
                D: "thus"
            },
            classification: "c1",
            testId: 2,
            vol: 3,
            correctAnswer: "C",
            translation: "지역 공동체 프로그램에는 사진 촬영, 그림 및 기타 미술 강좌가 포함된다.",
            explanation: "빈칸은 세 개의 명사구(photography, drawing, other arts)를 연결해주는 등위접속사 자리이다. '사진 촬영', '그림', '기타 예술'은 강좌(classes)의 내용을 순서대로 나열한 것이므로, (C) and가 정답이다. (D) thus는 '따라서, 이와 같이'라는 의미의 부사로, 구조상으로도 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t2-q103",
            questionNo: 103,
            text: "Glass containers must be ------- secured during transport.",
            options: {
                A: "safely",
                B: "safe",
                C: "safety",
                D: "safer"
            },
            classification: "av1",
            testId: 2,
            vol: 3,
            correctAnswer: "A",
            translation: "유리 용기는 운송 중에 안전하게 보관해야 한다.",
            explanation: "be동사와 과거분사 secured 사이에서 동사를 수식하는 부사 자리이므로, (A) safely(안전하게)가 정답이다. (B) safe와 (D) safer는 형용사, (C) safety는 명사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t2-q104",
            questionNo: 104,
            text: "This month's ------- figures have increased five percent over the last month.",
            options: {
                A: "selling",
                B: "sold",
                C: "to sell",
                D: "sales"
            },
            classification: "n3",
            testId: 2,
            vol: 3,
            correctAnswer: "D",
            translation: "이번 달 판매 수치는 지난달보다 5퍼센트 상승했다.",
            explanation: "빈칸이 소유격 This month's와 명사 figures 사이에 있으므로, 빈칸에는 figures를 수식하는 형용사 또는 figures와 복합명사를 이루는 명사가 들어갈 수 있다. 5퍼센트 증가한(have increased) 것은 '판매 수치'라고 보아야 자연스러우므로, (D) sales가 정답이다. 참고로, sale은 복수형으로 쓰여 복합 명사를 이루는 경우가 많다. sales figures(판매 수치), sales target(판매 목표치), sales representative(영업 직원), sales performance(매출 실적) 등의 빈출 표현은 암기해 두는 것이 좋다."
        },
        {
            id: "v3-p5-t2-q105",
            questionNo: 105,
            text: "Summer interns may ------- either free company housing or a stipend of $2,000.",
            options: {
                A: "choose",
                B: "wonder",
                C: "apply",
                D: "rent"
            },
            classification: "voc1",
            testId: 2,
            vol: 3,
            correctAnswer: "A",
            translation: "하계 인턴은 무료 사택이나 2,000달러의 급여 중 하나를 선택할 수 있다.",
            explanation: "빈칸의 목적어인 either free company housing or a stipend of $2,000(무료 사택 혹은 2,000달러의 급여)는 인턴이 고를 수 있는 선택 사항을 나타낸다. 따라서 '선택하다, 고르다'라는 의미의 (A) choose가 정답이다. 참고로, (C) apply가 '~를 신청하다'라는 뜻으로 쓰이려면 전치사 for가 있어야 한다."
        },
        {
            id: "v3-p5-t2-q106",
            questionNo: 106,
            text: "If a client leaves a voice message, we will return the ------- promptly within one business day.",
            options: {
                A: "extra",
                B: "effort",
                C: "signal",
                D: "call"
            },
            classification: "voc1",
            testId: 2,
            vol: 3,
            correctAnswer: "D",
            translation: "고객이 음성 메시지를 남길 경우, 영업일 기준 1일 이내에 신속하게 회신 전화를 드립니다.",
            explanation: "빈칸을 포함한 절은 고객이 음성 메시지를 남긴 경우(If a client leaves a voice message)에 하는 후속 조치를 나타내고 있다. 따라서 return과 어울려 쓰여 '회신 전화를 주다'라는 의미를 나타내는 (D) call이 정답이다."
        },
        {
            id: "v3-p5-t2-q107",
            questionNo: 107,
            text: "The department's most ------- production unit will receive a bonus at the end of the quarter.",
            options: {
                A: "effective",
                B: "effect",
                C: "effectively",
                D: "effecting"
            },
            classification: "a1",
            testId: 2,
            vol: 3,
            correctAnswer: "A",
            translation: "부서에서 가장 좋은 결과를 낸 생산팀은 분기 말에 보너스를 받을 예정이다.",
            explanation: "최상급 표현 most와 결합하여 복합명사 production unit을 수식하는 형용사 자리이므로, (A) effective가 정답이다. 여기서 The department's most effective production unit은 '부서에서 가장 좋은 결과를 낸 생산팀'이라는 의미를 나타낸다. (B) effect는 명사/동사, (C) effectively는 부사로 품사상 빈칸에 들어갈 수 없다. (D) effecting은 현재분사로 '~을 초래하는'이라는 뜻을 나타내므로 빈칸에는 적절하지 않다."
        },
        {
            id: "v3_p5_t2_q108",
            questionNo: 108,
            text: "Al's Café will now be open on Sundays ------- the hours of 9 A.M. and 5 P.M.",
            options: {
                A: "for",
                B: "between",
                C: "inside",
                D: "from"
            },
            classification: "pr1",
            testId: 2,
            vol: 3,
            correctAnswer: "B",
            translation: "알 카페는 이제 매주 일요일 오전 9시부터 오후 5시까지 문을 열 것이다.",
            explanation: "빈칸 뒤에 오는 the hours of 9 A.M. and 5 P.M.은 특정 시간 사이의 범위를 나타낸다. 따라서 '~ 사이'라는 의미의 (B) between이 정답이다. 참고로, (A) for 뒤에는 범위가 아닌 하나의 기간(eg. for (숫자) hours, for the hours they work)을 명시하는 명사구가 와야 한다."
        },
        {
            id: "v3-p5-t2-q109",
            questionNo: 109,
            text: "Mr. Liu will not be in the office this morning ------- he has a dentist appointment.",
            options: {
                A: "following",
                B: "because",
                C: "including",
                D: "likewise"
            },
            classification: "c3",
            testId: 2,
            vol: 3,
            correctAnswer: "B",
            translation: "리우 씨는 오늘 아침 치과 예약이 있어서 사무실에 없을 것이다.",
            explanation: "빈칸 뒤 완전한 절(he has a dentist appointment)을 이끄는 접속사 자리로, 해당 절은 리우 씨가 사무실을 비울 이유를 나타낸다. 따라서 '~ 때문에'라는 의미의 부사절 접속사 (B) because가 정답이다. (A) following과 (C) including은 분사형 전치사, (D) likewise는 부사로 절을 이끄는 자리에 들어갈 수 없다."
        },
        {
            id: "v3_p5_t2_q110",
            questionNo: 110,
            text: "Ms. Trinacria's team is developing a kitchen faucet that can ------- respond to voice commands.",
            options: {
                A: "reliably",
                B: "rely",
                C: "reliability",
                D: "reliable"
            },
            classification: "av1",
            testId: 2,
            vol: 3,
            correctAnswer: "A",
            translation: "트리나크리아 씨의 팀은 음성 명령에 제대로 반응할 수 있는 주방 수전을 개발하고 있다.",
            explanation: "조동사 can과 동사원형 respond 사이에서 동사를 수식하는 부사 자리이므로, (A) reliably(믿음직하게, 제대로)가 정답이다. (B) rely는 동사, (C) reliability는 명사, (D) reliable은 형용사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t2-q111",
            questionNo: 111,
            text: "So far this year, the Richmond City Orchestra has sold out ------- one of its concerts.",
            options: {
                A: "complete",
                B: "total",
                C: "every",
                D: "entire"
            },
            classification: "a4",
            testId: 2,
            vol: 3,
            correctAnswer: "C",
            translation: "리치먼드 시립 교향악단은 올해 들어 지금까지 모든 음악회 입장권을 매진시켰다.",
            explanation: "모든 콘서트를 매진시켰다(sold out)는 내용의 문장인데, 단수 대명사 one 뒤에 'of + 한정사 + 복수명사(of its concerts)'가 왔으므로 '한 묶음으로 보는 전체'가 아닌 '~의 하나하나 다/각각 다'의 개념이 되어야 한다. 따라서 (C) every가 정답이다. 참고로, 이때 every와 one은 반드시 띄어 써야 한다. (A) complete는 '완전한, 완료된', (B) total은 '전체의, 완전한', (D) entire는 '전체의, 온'이라는 의미로 모두 '전체'를 나타내므로, one of its concerts와 쓰일 수 없다."
        },
        {
            id: "v3-p5-t2-q112",
            questionNo: 112,
            text: "You must close the application before ------- the installation of the software update.",
            options: {
                A: "to begin",
                B: "beginning",
                C: "must begin",
                D: "begins"
            },
            classification: "g1",
            testId: 2,
            vol: 3,
            correctAnswer: "B",
            translation: "소프트웨어 업데이트 설치를 시작하기 전에 애플리케이션을 종료해야 합니다.",
            explanation: "전치사 before의 목적어 역할을 하는 동시에, 명사구 the installation of the software update를 목적어로 취하는 자리이다. 따라서 빈칸에는 동명사가 들어가야 하므로, (B) beginning이 정답이다."
        },
        {
            id: "v3-p5-t2-q113",
            questionNo: 113,
            text: "The town's traffic committee urges motorists to drive ------- on Main Street.",
            options: {
                A: "abundantly",
                B: "obviously",
                C: "rightfully",
                D: "cautiously"
            },
            classification: "voc1",
            testId: 2,
            vol: 3,
            correctAnswer: "D",
            translation: "시 교통위원회는 운전자들에게 메인 가에서 조심스럽게 운전할 것을 권고한다.",
            explanation: "빈칸에는 권장(urges)되는 운전(to drive) 방식을 적절히 묘사하는 부사가 들어가야 한다. 따라서 '조심스럽게, 주의하여'라는 의미의 (D) cautiously가 정답이다."
        },
        {
            id: "v3-p5-t2-q114",
            questionNo: 114,
            text: "Eastington University just announced the ------- of all foods containing artificial preservatives from its cafeteria menu.",
            options: {
                A: "eliminate",
                B: "eliminated",
                C: "elimination",
                D: "eliminates"
            },
            classification: "n1",
            testId: 2,
            vol: 3,
            correctAnswer: "C",
            translation: "이스팅턴 대학교는 구내 식당 메뉴에서 인공 방부제를 함유한 모든 음식을 없애겠다고 발표했다.",
            explanation: "동사 announced의 목적어 역할을 하는 자리로, 정관사 the의 한정 수식을 받는다. 따라서 보기 중 명사인 (C) elimination(제거, 배제)이 정답이다. (A) eliminate와 (D) eliminates는 동사, (B) eliminated는 동사/과거분사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t2-q115",
            questionNo: 115,
            text: "Some commuters were late because of the weather, but the road closures affected an even ------- number.",
            options: {
                A: "great",
                B: "greater",
                C: "greatest",
                D: "greatly"
            },
            classification: "com1",
            testId: 2,
            vol: 3,
            correctAnswer: "B",
            translation: "날씨로 인해 일부 통근자들이 지각했지만, 도로 폐쇄는 훨씬 더 많은 수의 사람들에게 영향을 주었다.",
            explanation: "빈칸에는 비교급 강조 부사 even의 수식을 받는 동시에 명사 number를 수식하는 비교급 형용사가 들어가야 한다. 따라서 (B) greater가 정답이다."
        },
        {
            id: "v3-p5-t2-q116",
            questionNo: 116,
            text: "At each performance, dancer Clay Hastings displays a remarkable ------- to connect with his audience.",
            options: {
                A: "degree",
                B: "function",
                C: "totality",
                D: "ability"
            },
            classification: "voc1",
            testId: 2,
            vol: 3,
            correctAnswer: "D",
            translation: "무용수인 클레이 헤이스팅스는 매 공연마다 관객과 소통하는 놀라운 능력을 보여준다.",
            explanation: "빈칸은 동사 displays의 목적어 역할을 하는 명사 자리로, remarkable과 to connect with his audience의 수식을 받는다. '관객과 공감대를 형성하는 것은 무용수가 보여주는 뛰어난 능력이라고 볼 수 있으므로, (D) ability(능력, 재능)가 정답이다. 참고로, ability는 to부정사의 수식을 받는 경우가 많다."
        },
        {
            id: "v3-p5-t2-q117",
            questionNo: 117,
            text: "Amand Corp.'s flexible work policy is ------- beneficial to the company as employee turnover is minimal.",
            options: {
                A: "financially",
                B: "finances",
                C: "financial",
                D: "to finance"
            },
            classification: "av2",
            testId: 2,
            vol: 3,
            correctAnswer: "A",
            translation: "아만드 사의 탄력 근무 정책은 직원 이직률을 최소화하므로 회사에 재무상 이익이 된다.",
            explanation: "빈칸 없이도 「주어(Amand Corp.'s flexible work policy) + 동사(is) + 보어(beneficial to the company)」 구조를 이루는 완전한 문장이다. 따라서 빈칸에는 형용사 beneficial을 수식하는 부사가 들어가야 하므로, (A) financially(재정적으로, 재무상)가 정답이다. (B) finances는 명사/동사, (C) financial은 형용사, (D) to finance는 to부정사로 구조상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t2-q118",
            questionNo: 118,
            text: "Ragini Kumari has published a book about the history of agricultural ------- in the region.",
            options: {
                A: "practical",
                B: "practices",
                C: "practiced",
                D: "is practicing"
            },
            classification: "voc1",
            testId: 2,
            vol: 3,
            correctAnswer: "B",
            translation: "라기니 쿠마리는 지역의 농업 관행 역사에 관한 책을 출판했다.",
            explanation: "빈칸은 전치사 of의 목적어 역할을 하는 명사 자리로, 형용사 agricultural의 수식을 받는다. 따라서 명사인 (B) practices(관행, 관례)가 정답이다. 참고로 practice는 '연습하다, 실습하다'라는 의미의 동사로도 쓰일 수 있다. (A) practical은 형용사, (C) practiced는 동사/과거분사, (D) is practicing은 동사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t2-q119",
            questionNo: 119,
            text: "Ms. Sanchez has ------- been promoted to office manager at Delbay Tech.",
            options: {
                A: "anywhere",
                B: "soon",
                C: "recently",
                D: "when"
            },
            classification: "voc1",
            testId: 2,
            vol: 3,
            correctAnswer: "C",
            translation: "산체스 씨는 최근 델베이 테크에서 사무실 관리자로 승진했다.",
            explanation: "빈칸이 has와 been promoted 사이에 있으므로, 현재완료 시제와 어울려 쓰이는 부사가 들어가야 한다. 따라서 '최근에'라는 의미의 (C) recently가 정답이다. 참고로, (B) soon은 '(현재 시점을 기준으로) 곧, (과거 특정 시점을 기준으로) 얼마 지나지 않아'라는 뜻으로 현재완료와 어울려 쓰이지 않는다."
        },
        {
            id: "v3-p5-t2-q120",
            questionNo: 120,
            text: "Please reserve room 200 for Monday afternoon, since the workshop is expected to ------- several hours.",
            options: {
                A: "occur",
                B: "start",
                C: "hold",
                D: "last"
            },
            classification: "voc1",
            testId: 2,
            vol: 3,
            correctAnswer: "D",
            translation: "워크숍이 몇 시간 동안 계속될 것으로 예상되니, 월요일 오후로 200호실을 예약해 주세요.",
            explanation: "기간을 나타내는 several hours와 어울리는 동사를 선택해야 하므로, '계속되다, 지속하다'라는 의미의 (D) last가 정답이다. 참고로, last와 several hours 사이에 for가 생략되었다고 볼 수 있으며, last가 타동사로 쓰일 경우 「last+사람 목적어+기간」의 구조로 쓰이기도 한다."
        },
        {
            id: "v3-p5-t2-q121",
            questionNo: 121,
            text: "Zachary Cho, president of the Canadian Florist Association, introduced the ------- speaker at the convention.",
            options: {
                A: "opening",
                B: "expanded",
                C: "careful",
                D: "powered"
            },
            classification: "voc1",
            testId: 2,
            vol: 3,
            correctAnswer: "A",
            translation: "캐나다 플로리스트 협회 회장인 재커리 조는 대회에서 개회 연사를 소개했다.",
            explanation: "speaker를 적절히 수식하는 형용사를 선택해야 한다. 문맥상 소개(introduced)의 대상은 '개회 연사'이므로, '시작의, 첫 부분의'라는 뜻의 (A) opening이 정답이다."
        },
        {
            id: "v3-p5-t2-q122",
            questionNo: 122,
            text: "The team ------- completes the online training first will receive a catered lunch.",
            options: {
                A: "whichever",
                B: "it",
                C: "that",
                D: "either"
            },
            classification: "ac1",
            testId: 2,
            vol: 3,
            correctAnswer: "C",
            translation: "온라인 교육을 가장 먼저 완료한 팀은 출장 요리 점심 식사를 제공받을 것이다.",
            explanation: "The team이 주어, will receive가 동사인 문장으로, 빈칸에는 불완전한 절(completes the online training first)을 이끌어 The team을 수식하는 관계대명사가 들어가야 한다. 따라서 주격 관계대명사로 쓰일 수 있는 (C) that이 정답이다. (A) whichever는 대명사로 쓰일 경우 '어느 쪽이든 ~한 것(anything which/that), 누구든 ~한 사람(anyone who/that)'이라는 뜻을 나타내며 자체적으로 명사를 내포하고 있어 앞에 나온 명사를 수식하는 자리에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t2-q123",
            questionNo: 123,
            text: "Industry news and upcoming social events are ------- the items featured in the company newsletter.",
            options: {
                A: "during",
                B: "among",
                C: "toward",
                D: "except"
            },
            classification: "pr1",
            testId: 2,
            vol: 3,
            correctAnswer: "B",
            translation: "회사 소식지에 특집으로 포함될 내용 중에는 업계 뉴스와 앞으로 있을 사교 행사가 있다.",
            explanation: "'업계 뉴스와 앞으로 있을 사교 행사(Industry news and upcoming social events)'는 소식지에 포함될 내용들(the items)이라고 할 수 있으므로, '(셋 이상의 대상) 중에서'라는 의미의 전치사 (B) among이 정답이다. 「among + 복수명사」는 빈출 표현이므로 암기해 두는 것이 좋다."
        },
        {
            id: "v3-p5-t2-q124",
            questionNo: 124,
            text: "Many customers have remained faithful to Kristiansen Electronics ------- the years because of our excellent customer service.",
            options: {
                A: "through",
                B: "even if",
                C: "prior to",
                D: "while"
            },
            classification: "pr1",
            testId: 2,
            vol: 3,
            correctAnswer: "A",
            translation: "크리스티안센 일렉트로닉스는 뛰어남 고객 서비스 덕분에 수년간 많은 고객들이 충성 고객으로 남아 있다.",
            explanation: "명사구 the years를 목적어로 취하는 전치사 자리로, 보기에서 (A) through와 (C) prior to 중 하나를 선택해야 한다. the years가 기간을 나타내며 앞에 현재완료 시제(have remained)가 쓰였으므로, '(기간) 동안 내내'라는 의미의 (A) through가 정답이 된다. (C) prior to는 '~전에'라는 뜻으로 뒤에 특정 시점을 나타내는 명사가 와야 한다. (B) even if와 (D) while은 부사절 접속사이므로 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t2-q125",
            questionNo: 125,
            text: "The release of the earnings report will ------- until the latest company figures are ready.",
            options: {
                A: "delay",
                B: "have delayed",
                C: "be delayed",
                D: "be delaying"
            },
            classification: "v2",
            testId: 2,
            vol: 3,
            correctAnswer: "C",
            translation: "수익 보고서 발표는 회사의 최근 수치가 준비될 때까지 연기될 예정이다.",
            explanation: "주어 The release of the earnings report(수익 보고서의 발표)는 연기되는 대상이므로, delay가 수동태로 쓰여야 한다. 따라서 (C) be delayed가 정답이다. (A) delay, (B) have delayed, (D) be delaying은 모두 능동태 동사 형태이므로 빈칸에 들어갈 수 없다. 참고로, delay는 주어가 사람일 경우 자동사로 쓰일 수도 있다."
        },
        {
            id: "v3-p5-t2-q126",
            questionNo: 126,
            text: "Assistant Director Melissa Arun works ------- the interns to monitor the quality of their work.",
            options: {
                A: "across",
                B: "alongside",
                C: "against",
                D: "about"
            },
            classification: "pr1",
            testId: 2,
            vol: 3,
            correctAnswer: "B",
            translation: "멜리사 에이런 부팀장은 인턴들이 하는 업무의 질을 감독하기 위해 그들 곁에서 함께 일한다.",
            explanation: "동사 works와 명사 the interns를 적절히 이어주는 전치사를 선택해야 한다. 업무의 질을 감독하기 위해(to monitor the quality of their work) 인턴 곁에서 함께 일한다는 내용이 되어야 자연스러우므로, '~ 곁에서, ~와 함께'라는 의미의 전치사 (B) alongside가 정답이다. 참고로, alongside는 부사로도 쓰일 수 있다."
        },
        {
            id: "v3-p5-t2-q127",
            questionNo: 127,
            text: "Ms. Fujita has postponed the team meeting until next week because everyone already has ------- to do this week.",
            options: {
                A: "most",
                B: "enough",
                C: "neither",
                D: "which"
            },
            classification: "p2",
            testId: 2,
            vol: 3,
            correctAnswer: "B",
            translation: "모두에게 이번 주에 할 일이 이미 충분히 있었기 때문에 후지타 씨는 팀 회의를 다음 주까지 연기했다.",
            explanation: "빈칸을 포함한 부사절(because ~ this week)이 팀 회의를 연기한 이유를 설명하고 있으므로, 모두가 이미(already) 해야 할 일이 있다는 내용이 되어야 자연스럽다. 따라서 '충분한 양'이라는 의미의 (B) enough가 정답이다. 참고로, enough는 형용사와 부사로도 쓰일 수 있다. (A) most는 '대부분의 것'이나 '가장 많은 것'을 나타내므로 문맥상 어색하다."
        },
        {
            id: "v3-p5-t2-q128",
            questionNo: 128,
            text: "Call Gislason Insurance today to speak to a ------- agent for a free quote.",
            options: {
                A: "licensed",
                B: "maximum",
                C: "required",
                D: "former"
            },
            classification: "voc1",
            testId: 2,
            vol: 3,
            correctAnswer: "A",
            translation: "오늘 기슬라손 보험사에 전화해서 면허를 소지한 상담원에게 무료 견적을 달라고 말하세요.",
            explanation: "보험료에 관해 상담해 줄 직원(agent)을 적절히 묘사하는 형용사를 선택해야 한다. 따라서 '면허를 소지한, 허가를 받은'이라는 의미의 (A) licensed가 정답이다."
        },
        {
            id: "v3-p5-t2-q129",
            questionNo: 129,
            text: "Motorbike Unlimited's marketing campaign will begin ------- the terms of the contract are finalized.",
            options: {
                A: "as well as",
                B: "other than",
                C: "rather than",
                D: "as soon as"
            },
            classification: "c3",
            testId: 2,
            vol: 3,
            correctAnswer: "D",
            translation: "모터바이크 언리미티드의 마케팅 캠페인은 계약 조건이 마무리되면 바로 시작될 것이다.",
            explanation: "두 개의 완전한 절을 이어주는 접속사 자리이다. 계약 조건 마무리(the terms of the contract are finalized)는 마케팅 캠페인 시작의 전제 조건이므로, '~하자마자, ~하는 대로'라는 의미의 부사절 접속사 (D) as soon as가 정답이다. 참고로, 시간 부사절의 현재 동사 are finalized는 미래를 나타낸다. (A) as well as(~뿐만 아니라 ~도), (B) other than(~를 제외하고), (C) rather than(~라기 보다는)은 상관접속사로 쓰일 수 있지만 두 개의 완전한 절을 이어주는 역할을 할 수 없다."
        },
        {
            id: "v3-p5-t2-q130",
            questionNo: 130,
            text: "------- of planet Jupiter may provide scientists with long-awaited answers.",
            options: {
                A: "Acceleration",
                B: "Intention",
                C: "Observation",
                D: "Provision"
            },
            classification: "voc1",
            testId: 2,
            vol: 3,
            correctAnswer: "C",
            translation: "목성 관찰은 과학자들에게 오래 기다려 온 해답을 제공할 것이다.",
            explanation: "빈칸을 포함한 주어는 과학자들이 해답을 얻을 수 있는 방법을 나타내며, 빈칸에는 행성(planet Jupiter)에 할 만한 행위를 나타내는 단어가 들어가야 한다. 따라서 '관찰'이라는 의미의 (C) Observation이 정답이다."
        }
    ]
};
