import { Part5TestSet } from '../../v4/reading/part5/types';

export const test10Data: Part5TestSet = {
    testId: 10,
    vol: 3,
    title: "Part 5 Real Test 10",
    questions: [
        {
            id: "v3-p5-t10-q101",
            questionNo: 101,
            text: "A ------- salesperson assisted Ms. Han with choosing a new computer.",
            options: {
                A: "help",
                B: "helpfully",
                C: "helpful",
                D: "helped"
            },
            classification: "a1",
            testId: 10,
            vol: 3,
            correctAnswer: "C",
            translation: "도움이 되는 판매원이 한 씨가 새 컴퓨터를 고르는 것을 도왔다.",
            explanation: "부정관사 A와 명사 salesperson 사이에서 salesperson을 수식하는 형용사 자리로, 판매원의 특성을 나타내는 단어가 들어가야 한다. 따라서 (C) helpful(도움을 주는, 유용한)이 정답이다."
        },
        {
            id: "v3-p5-t10-q102",
            questionNo: 102,
            text: "Author Daniel Aiduk ------- gives talks at national writing conferences.",
            options: {
                A: "gradually",
                B: "longer",
                C: "together",
                D: "regularly"
            },
            classification: "av1",
            testId: 10,
            vol: 3,
            correctAnswer: "D",
            translation: "작가 다니엘 아이덕은 전국 글쓰기 회의에서 정기적으로 강연을 한다.",
            explanation: "반복되는 일을 나타내는 현재시제 동사 gives와 어울리는 부사를 선택해야 한다. 따라서 '정기적으로, 규칙적으로'라는 의미의 (D) regularly가 정답이다."
        },
        {
            id: "v3-p5-t10-q103",
            questionNo: 103,
            text: "Mr. Kohl has a great deal of ------- performing cost analysis tasks.",
            options: {
                A: "experience",
                B: "experienced",
                C: "experiencing",
                D: "experiencer"
            },
            classification: "n1",
            testId: 10,
            vol: 3,
            correctAnswer: "A",
            translation: "콜 씨는 비용 분석 업무 수행에 경험이 많다.",
            explanation: "동사 has의 목적어 역할을 하는 자리로, 양을 나타내는 표현인 a great deal of의 수식을 받을 수 있는 명사가 들어가야 한다. 따라서 보기 중 불가산명사인 (A) experience(경험)가 정답이다. 참고로, 빈칸과 performing 사이에는 전치사 in이 생략되어 있는데, 이는 experience, difficulty, problem 등의 일부 명사만 가능하다."
        },
        {
            id: "v3-p5-t10-q104",
            questionNo: 104,
            text: "To make an -------, clients can click on \"Schedule\" at the top right corner of the home page.",
            options: {
                A: "example",
                B: "option",
                C: "individual",
                D: "appointment"
            },
            classification: "voc1",
            testId: 10,
            vol: 3,
            correctAnswer: "D",
            translation: "고객은 예약을 하려면 홈페이지의 오른쪽 상단에 있는 \"일정\"을 클릭하면 된다.",
            explanation: "빈칸을 포함한 to부정사구는 고객이 \"일정(Schedule)\"을 클릭해야 하는 목적을 나타낸다. 따라서 make와 함께 '예약하다'라는 의미를 완성하는 (D) appointment가 정답이다."
        },
        {
            id: "v3-p5-t10-q105",
            questionNo: 105,
            text: "The used coffee grounds should be disposed of at the end of ------- business day.",
            options: {
                A: "now",
                B: "each",
                C: "whose",
                D: "and"
            },
            classification: "p2",
            testId: 10,
            vol: 3,
            correctAnswer: "B",
            translation: "사용한 커피 찌꺼기는 매 영업일 종료 시 처리해야 한다.",
            explanation: "전치사 of의 목적어 역할을 하는 복합명사 business day를 수식하는 자리이다. 매 영업일이 끝날 때마다 커피 찌꺼기를 처리해야 한다는 내용이므로, '각각'이라는 의미의 (B) each가 정답이다. 나머지 보기는 구조상으로도 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t10-q106",
            questionNo: 106,
            text: "Our company's efforts to hire new workers have intensified ------- so many employees have recently retired.",
            options: {
                A: "because",
                B: "although",
                C: "instead",
                D: "unless"
            },
            classification: "c1",
            testId: 10,
            vol: 3,
            correctAnswer: "A",
            translation: "최근 아주 많은 직원들이 퇴직했기 때문에 새 직원을 채용하려는 우리 회사의 노력이 강화됐다.",
            explanation: "완전한 두 절을 이어주는 접속사 자리이므로, 보기에서 접속사인 (A) because, (B) although, (D) unless 중 하나를 선택해야 한다. 최근 많은 직원들이 퇴직한 것(so many employees have recently retired)은 새 직원을 채용하기 위한(to hire new workers) 노력이 강화된 원인이라고 볼 수 있다. 따라서 '~ 때문에'라는 의미의 (A) because가 정답이다. (C) instead는 부사로 절을 이끌 수 없다."
        },
        {
            id: "v3-p5-t10-q107",
            questionNo: 107,
            text: "The occurrence of heavy rains during the month of May is fairly -------.",
            options: {
                A: "predict",
                B: "predicts",
                C: "predicting",
                D: "predictable"
            },
            classification: "a1",
            testId: 10,
            vol: 3,
            correctAnswer: "D",
            translation: "5월 중 폭우 발생은 상당히 예측이 가능하다.",
            explanation: "빈칸은 be동사 is의 주격 보어 자리로, 부사 fairly의 수식을 받는다. 따라서 빈칸에는 형용사가 들어가야 하므로, '예측 가능한'이라는 의미의 (D) predictable이 정답이다. (A) predict와 (B) predicts는 동사로서 주격 보어 역할을 할 수 없으며, (C) predicting은 타동사의 현재분사/동명사이므로 구조상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t10-q108",
            questionNo: 108,
            text: "Remind customers to return their rental car ------- a full tank of fuel.",
            options: {
                A: "with",
                B: "from",
                C: "except",
                D: "toward"
            },
            classification: "pr1",
            testId: 10,
            vol: 3,
            correctAnswer: "A",
            translation: "고객에게 렌터카 연료 탱크를 가득 채워서 반납해 달라고 상기시키십시오.",
            explanation: "return their rental car와 a full tank of fuel을 적절히 연결해주는 전치사를 선택해야 한다. 연료 탱크는 렌터카에 있는 것인데, 이를 가득 채워서 반납해 달라는 내용이므로, '~와 함께, ~한 채'라는 의미의 (A) with가 정답이다."
        },
        {
            id: "v3-p5-t10-q109",
            questionNo: 109,
            text: "------- the winter season, Serina Builders will once again offer roof installations and repairs.",
            options: {
                A: "Such as",
                B: "Moreover",
                C: "After",
                D: "Whereas"
            },
            classification: "pr1",
            testId: 10,
            vol: 3,
            correctAnswer: "C",
            translation: "세리나 빌더스는 겨울 이후 지붕 설치 및 수리를 한번 더 제공할 것이다.",
            explanation: "명사구 the winter season을 목적어로 취하는 전치사 자리로, 문맥상 시기를 나타내는 단어가 들어가야 자연스럽다. 따라서 '~ 후에'라는 의미의 (C) After가 정답이다. (A) Such as는 '~와 같이'라는 뜻으로 어색하며, (B) Moreover는 부사, (D) Whereas는 부사절 접속사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t10-q110",
            questionNo: 110,
            text: "The lights in the cinema ------- before a movie begins.",
            options: {
                A: "dim",
                B: "dimming",
                C: "dimmer",
                D: "dims"
            },
            classification: "v1",
            testId: 10,
            vol: 3,
            correctAnswer: "A",
            translation: "영화가 시작되기 전, 극장 조명이 어두워진다.",
            explanation: "복수주어인 The lights의 동사 자리이므로, 복수동사인 (A) dim이 정답이다. (D) dims는 3인칭 단수동사로 lights와 수가 일치하지 않고, (B) dimming은 현재분사/동명사, (C) dimmer는 비교급 형용사로 구조상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t10-q111",
            questionNo: 111,
            text: "When scheduling a meeting, please be ------- of colleagues in other time zones.",
            options: {
                A: "significant",
                B: "mindful",
                C: "exclusive",
                D: "serious"
            },
            classification: "a2",
            testId: 10,
            vol: 3,
            correctAnswer: "B",
            translation: "회의 일정을 잡을 때 다른 표준 시간대의 동료들을 염두에 두십시오.",
            explanation: "회의 일정을 잡을 때(When scheduling a meeting) 주의해야 할 것을 당부하는 문장이므로, 다른 표준 시간대에 있는 동료(colleagues in other time zones)를 고려하라는 내용이 되어야 자연스럽다. 따라서 '~를 염두에 두는, 유념하는'이라는 의미의 (B) mindful이 정답이다. 참고로, mindful은 「전치사 of+명사」, 혹은 that절과 자주 쓰인다."
        },
        {
            id: "v3-p5-t10-q112",
            questionNo: 112,
            text: "Greentrim's product sales rose ------- following the introduction of its new shipping policy.",
            options: {
                A: "sharp",
                B: "sharper",
                C: "sharply",
                D: "sharpest"
            },
            classification: "av1",
            testId: 10,
            vol: 3,
            correctAnswer: "C",
            translation: "새로운 배송 정책을 도입한 후 그린트림의 제품 판매량은 급격히 증가했다.",
            explanation: "자동사 rose를 수식하는 부사 자리이므로, (C) sharply(급격히)가 정답이다. 참고로, (A) sharp도 부사로 쓰일 수 있는데, 시간 표현 뒤에서 '정각에'(eg. ten o'clock sharp), 방향 표현과 쓰여 '급히'(eg. turn sharp left), 음악과 관련된 표현 뒤에서 '원래 음보다 높이'(eg. sing sharp)라는 뜻을 나타내므로 빈칸에는 적절하지 않다."
        },
        {
            id: "v3-p5-t10-q113",
            questionNo: 113,
            text: "Please ------- Hearnshaw for all your home appliance needs.",
            options: {
                A: "assemble",
                B: "balance",
                C: "share",
                D: "consider"
            },
            classification: "voc1",
            testId: 10,
            vol: 3,
            correctAnswer: "D",
            translation: "가정용 전자제품 일체가 필요할 때 헌쇼를 고려해 주십시오.",
            explanation: "가정용 전자제품이 필요하면(for all your home appliance needs) Hearnshaw에서 구매하라고 독려하는 내용이므로, '고려하다'라는 의미의 (D) consider가 정답이다."
        },
        {
            id: "v3-p5-t10-q114",
            questionNo: 114,
            text: "Monday will be the best day for ------- to clean the carpet in the lobby.",
            options: {
                A: "we",
                B: "us",
                C: "ours",
                D: "ourselves"
            },
            classification: "p1",
            testId: 10,
            vol: 3,
            correctAnswer: "B",
            translation: "월요일은 우리가 로비 카펫 청소를 하기에 가장 좋은 요일일 것이다.",
            explanation: "전치사 for의 목적어 역할을 하는 자리로, (B) us, (C) ours, (D) ourselves 중 하나를 선택해야 한다. 빈칸은 to부정사구 to clean the carpet in the lobby의 \"의미상\" 주어 역할을 하는데, 카펫 청소의 주체가 될만한 대상은 '우리'이므로 (B) us가 정답이 된다. (C) ours는 '우리의 것(사람)'을 뜻하는 소유대명사, (D) ourselves는 '우리 자신'을 뜻하는 재귀대명사로 앞에 가리키는 대상이 있어야 하므로 빈칸에는 적절치 않다."
        },
        {
            id: "v3-p5-t10-q115",
            questionNo: 115,
            text: "Hikers, ------- to explore the newly opened trails, have been visiting Millar Nature Reserve in record numbers.",
            options: {
                A: "tender",
                B: "bright",
                C: "vast",
                D: "eager"
            },
            classification: "a2",
            testId: 10,
            vol: 3,
            correctAnswer: "D",
            translation: "새로 연 산길을 탐방하고 싶어 하는 등산객들이 기록적인 수치로 밀라 자연보호구역을 방문하고 있다.",
            explanation: "사람 명사 Hikers를 보충 설명하는 형용사 자리로, 새로 연 산길을 탐방하려고 하는(to explore the newly opened trails) 등산객들의 성향을 적절히 묘사하는 형용사가 들어가야 한다. 따라서 '간절히 바라는, 열심인'이라는 의미의 (D) eager가 정답이다. 참고로, 빈칸 앞에는 「관계대명사(who) + be동사(are)」가 생략된 것으로 볼 수 있으며, eager는 to부정사와 자주 어울려 쓰인다."
        },
        {
            id: "v3-p5-t10-q116",
            questionNo: 116,
            text: "KOHW ------- Jenae Johnson will be promoted to news anchor when Dana Wagner retires.",
            options: {
                A: "reporter",
                B: "reporting",
                C: "to report",
                D: "will report"
            },
            classification: "n1",
            testId: 10,
            vol: 3,
            correctAnswer: "A",
            translation: "KOHW 기자인 지나 존슨은 다나 와그너가 은퇴하면 뉴스 앵커로 승진할 것이다.",
            explanation: "KOHW부터 Jenae Johnson까지가 주어, will be promoted to news anchor가 본동사구인 문장이다. 따라서 빈칸에는 뉴스 앵커로 승진할 만한 직책이 들어가서 주어인 Jenae Johnson을 수식해주어야 하므로, '기자'라는 뜻의 (A) reporter가 정답이다. 참고로, 조직 내 직책을 나타내는 명사는 사람 이름 앞에 자주 쓰여 이처럼 수식어 역할을 하기도 하며(reporter), 관사가 생략되기도 한다(news anchor). (B) reporting과 (C) to report의 경우 구조상으로는 빈칸에 들어갈 수 있지만, '지나 존슨을 보고하는 KOHW는 승진할 것이다'라는 내용이 되므로 적절하지 않다."
        },
        {
            id: "v3-p5-t10-q117",
            questionNo: 117,
            text: "Residents ------- raised concerns about the project's impact on traffic congestion.",
            options: {
                A: "extremely",
                B: "unlikely",
                C: "densely",
                D: "primarily"
            },
            classification: "av1",
            testId: 10,
            vol: 3,
            correctAnswer: "D",
            translation: "주민들은 프로젝트가 교통 혼잡에 미치는 영향에 대한 우려를 주로 제기했다.",
            explanation: "동사구 raised concerns를 수식하는 부사 자리로, 보기에서 (C) densely와 (D) primarily 중 하나를 선택해야 한다. 주민들(Residents)이 특정 문제(the project's impact on traffic congestion)에 대한 우려를 제기했다는 내용이므로, '주로'라는 의미의 (D) primarily가 빈칸에 들어가야 자연스럽다. 참고로, (A) extremely는 형용사/부사를 강조하는 부사이고, (B) unlikely는 형용사로 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t10-q118",
            questionNo: 118,
            text: "------- your Fromo grocery order is placed before 10:00 A.M., it will be delivered the same day.",
            options: {
                A: "That",
                B: "Such",
                C: "As long as",
                D: "In spite of"
            },
            classification: "c1",
            testId: 10,
            vol: 3,
            correctAnswer: "C",
            translation: "프로모에서 오전 10시 전에 식료품 주문이 완료되기만 하면, 당일에 배송됩니다.",
            explanation: "완전한 절(your Fromo grocery order is placed before 10:00 A.M.)을 이끄는 접속사 자리로, 빈칸이 이끄는 절이 콤마 뒤 주절을 수식하는 역할을 한다. 따라서 부사절 접속사인 (C) As long as(~하기만 하면)가 정답이다. (A) That은 완전한 절을 이끄는 경우 명사절 접속사로 쓰이므로 빈칸에 들어갈 수 없고, (B) Such는 한정사/대명사/부사, (D) In spite of는 전치사로 절을 이끌 수 없다."
        },
        {
            id: "v3-p5-t10-q119",
            questionNo: 119,
            text: "The finance department will be ------- a lunch-and-learn session on Wednesday.",
            options: {
                A: "contacting",
                B: "collecting",
                C: "meeting",
                D: "holding"
            },
            classification: "v1",
            testId: 10,
            vol: 3,
            correctAnswer: "D",
            translation: "재무 부서는 수요일에 점심 식사 강의 세션을 열 예정이다.",
            explanation: "a lunch-and-learn session을 목적어로 취하는 동사의 현재분사 자리이다. 점심 식사 강의 세션은 일종의 행사이므로, '개최하다'라는 의미의 (D) holding이 빈칸에 들어가야 자연스럽다."
        },
        {
            id: "v3-p5-t10-q120",
            questionNo: 120,
            text: "------- clothing must be worn by all personnel entering the construction zone.",
            options: {
                A: "Protective",
                B: "Protecting",
                C: "Protect",
                D: "Protects"
            },
            classification: "a1",
            testId: 10,
            vol: 3,
            correctAnswer: "A",
            translation: "공사구역에 들어가는 모든 직원은 방호복을 착용해야 한다.",
            explanation: "주어인 명사 clothing을 수식하는 형용사 자리로, 의복의 특성을 나타내는 단어가 들어가야 한다. 따라서 '보호용의'라는 의미의 (A) Protective가 정답이다. (B) Protecting을 동명사로 볼 경우 구조상으로는 빈칸에 들어갈 수 있으나, '의류를 보호하는 것은 입혀져야 한다'라는 의미가 되므로 적절하지 않다. (C) Protect와 (D) Protects는 동사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t10-q121",
            questionNo: 121,
            text: "At the Star Elite membership level, most flight changes can be made ------- incurring a rebooking fee.",
            options: {
                A: "along",
                B: "without",
                C: "until",
                D: "inside"
            },
            classification: "pr1",
            testId: 10,
            vol: 3,
            correctAnswer: "B",
            translation: "스타 엘리트 회원 등급에서는 대다수의 항공편 변경이 재예약 수수료 발생 없이 이뤄질 수 있다.",
            explanation: "동명사구 incurring a rebooking fee를 목적어로 취하는 전치사 자리로, 항공편 변경 시 재예약 수수료의 발생 여부를 나타내는 단어가 들어가야 자연스럽다. 따라서 '~ 없이'라는 의미의 (B) without이 정답이다."
        },
        {
            id: "v3-p5-t10-q122",
            questionNo: 122,
            text: "Any letter ------- sensitive information should be sent using a courier service.",
            options: {
                A: "contains",
                B: "containing",
                C: "will contain",
                D: "has contained"
            },
            classification: "pa4",
            testId: 10,
            vol: 3,
            correctAnswer: "B",
            translation: "민감한 정보를 담고 있는 모든 편지는 택배업체 서비스를 이용해 발송되어야 한다.",
            explanation: "Any부터 information까지가 주어, should be sent가 동사인 문장이다. 빈칸에는 명사구 sensitive information을 목적어로 취하면서 letter를 수식하는 준동사가 들어가야 하므로, 현재분사인 (B) containing이 정답이다. (A) contains, (C) will contain, (D) has contained는 모두 본동사이므로 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t10-q123",
            questionNo: 123,
            text: "Abelos Café sources its vegetables and fruit from local farms ------- possible.",
            options: {
                A: "anyhow",
                B: "whenever",
                C: "once",
                D: "very"
            },
            classification: "av1",
            testId: 10,
            vol: 3,
            correctAnswer: "B",
            translation: "아벨로스 카페는 가능할 때마다 지역 농장들로부터 채소와 과일을 구한다.",
            explanation: "빈칸이 완전한 절과 형용사 possible 사이에 있으므로, 이 둘을 연결해 줄 수 있는 요소가 들어가야 한다. 따라서 접속사인 (B) whenever와 (C) once 중 하나를 선택해야 하는데, 주절의 현재 시제 동사 sources가 반복되는 상황을 나타내므로, '~ 할 때마다'라는 뜻의 (B) whenever가 빈칸에 들어가야 자연스럽다. 참고로, 일부 부사절 접속사 뒤에는 「주어+be동사」가 생략된 채 형용사나 분사구가 올 수 있다."
        },
        {
            id: "v3-p5-t10-q124",
            questionNo: 124,
            text: "Demand for the Waterlace running shoes was so high that the store owner set a ------- of two pairs per customer.",
            options: {
                A: "limit",
                B: "price",
                C: "supply",
                D: "procedure"
            },
            classification: "voc1",
            testId: 10,
            vol: 3,
            correctAnswer: "A",
            translation: "워터레이스 운동화에 대한 수요가 매우 높아서 매장 주인은 고객 1인당 2켤레로 제한을 두었다.",
            explanation: "「so + 형용사(high) + that절」 구조의 문장으로, 빈칸이 포함된 부분은 운동화에 대한 수요가 너무 높아져(Demand for the ~ running shoes was so high) 생긴 결과, 즉 가게 주인이 취한 조치를 나타낸다. 고객 1인당 2켤레씩만 사게 하는 것은 구매에 제한을 두는 것이므로, (A) limit가 정답이다. 참고로, limit은 set 이외에 put, impose와 같은 동사와도 자주 쓰인다."
        },
        {
            id: "v3-p5-t10-q125",
            questionNo: 125,
            text: "The new security camera adjusts ------- in such a way that it can record quality video at night.",
            options: {
                A: "himself",
                B: "oneself",
                C: "itself",
                D: "herself"
            },
            classification: "p1",
            testId: 10,
            vol: 3,
            correctAnswer: "C",
            translation: "새로 설치된 보안 카메라는 밤에 고화질 영상을 녹화할 수 있도록 스스로 조정된다.",
            explanation: "주어인 The new security camera를 가리키는 재귀대명사를 선택해야 한다. 따라서 (C) itself가 정답이다."
        },
        {
            id: "v3-p5-t10-q126",
            questionNo: 126,
            text: "Contact Ms. Meyer if you would like a hard copy of the budget analysis ------- during the president's presentation.",
            options: {
                A: "occurred",
                B: "mentioned",
                C: "learned",
                D: "served"
            },
            classification: "pa4",
            testId: 10,
            vol: 3,
            correctAnswer: "B",
            translation: "회장님의 발표 중 언급된 예산 분석을 출력본으로 원하시면 마이어 씨에게 연락하세요.",
            explanation: "명사구 the budget analysis를 뒤에서 수식하는 과거분사 자리이다. 예산 분석은 발표 도중(during the president's presentation) 다뤄지는 내용이라고 볼 수 있으므로, '언급된'이라는 의미의 (B) mentioned가 정답이다. 참고로, (A) occurred는 자동사의 과거분사로 수동의 의미를 나타내지 않으므로 구조상으로도 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t10-q127",
            questionNo: 127,
            text: "Saul's Pizzeria changed its menu options after receiving ------- negative customer feedback.",
            options: {
                A: "increase",
                B: "increases",
                C: "to increase",
                D: "increasingly"
            },
            classification: "av1",
            testId: 10,
            vol: 3,
            correctAnswer: "D",
            translation: "술 피자리아는 점점 더 부정적인 고객 의견을 받게 된 후 메뉴를 변경했다.",
            explanation: "동명사 receiving의 목적어 역할을 하는 「형용사(negative)+복합명사(customer feedback)」 앞에서 negative를 수식하는 부사 자리이다. 따라서 (D) increasingly(점점, 더욱더)가 정답이다. (A) increase와 (B) increases는 명사/동사, (C) to increase는 준동사로 구조상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t10-q128",
            questionNo: 128,
            text: "Topticolor produces devices intended for use by ------- photographers.",
            options: {
                A: "visible",
                B: "eventual",
                C: "amateur",
                D: "necessary"
            },
            classification: "voc1",
            testId: 10,
            vol: 3,
            correctAnswer: "C",
            translation: "탑티컬러는 아마추어 사진가들이 사용할 만한 기기를 생산한다.",
            explanation: "빈칸에는 기기 생산(produces devices) 시 고려할 만한 사진가(photographers)의 능력이나 수준을 묘사하는 단어가 들어가야 자연스럽다. 따라서 '아마추어의, 취미로 하는'이라는 의미의 (C) amateur가 정답이다."
        },
        {
            id: "v3-p5-t10-q129",
            questionNo: 129,
            text: "The study of consumer behavior will be repeated in order to ensure the ------- of the results.",
            options: {
                A: "rely",
                B: "relies",
                C: "reliable",
                D: "reliability"
            },
            classification: "n1",
            testId: 10,
            vol: 3,
            correctAnswer: "D",
            translation: "결과의 신뢰성을 보장하기 위해 소비자 행동 연구가 반복될 예정이다.",
            explanation: "to부정사 to ensure의 목적어 역할을 하는 명사 자리로, 정관사 the 및 전치사구 of the results의 수식을 받는다. 따라서 (D) reliability(신뢰성, 믿음직함)가 정답이다. (A) rely와 (B) relies는 동사, (C) reliable은 형용사로 품사상 빈칸에 들어갈 수 없다."
        },
        {
            id: "v3-p5-t10-q130",
            questionNo: 130,
            text: "Check e-mail ------- throughout the day to make sure important client communications are not overlooked.",
            options: {
                A: "artificially",
                B: "periodically",
                C: "reluctantly",
                D: "simultaneously"
            },
            classification: "av1",
            testId: 10,
            vol: 3,
            correctAnswer: "B",
            translation: "고객과의 중요한 커뮤니케이션을 놓치지 않도록 종일 주기적으로 이메일을 확인하세요.",
            explanation: "고객과의 중요한 커뮤니케이션을 놓치지 말라고 당부하는 내용으로, 하루 종일(throughout the day) 이메일을 확인하는(Check e-mail) 빈도를 나타내는 부사가 빈칸에 들어가야 자연스럽다. 따라서 '주기적으로'라는 의미의 (B) periodically가 정답이다. 참고로, check는 빈도(always, daily, regularly, periodically)를 나타내거나 방식(carefully, thoroughly)을 나타내는 부사와 자주 쓰인다."
        }
    ]
};
