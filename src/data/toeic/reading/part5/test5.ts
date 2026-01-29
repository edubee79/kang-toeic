import { Part5TestSet } from './types';

export const test5Data: Part5TestSet = {
        "testId": 5,
        "title": "Part 5 Real Test 5",
        "questions": [
            {
                "id": "p5-t5-q101",
                "questionNo": 101,
                "text": "After upgrading to Pro Data Whiz, our clients began _____ problems with spreadsheets.",
                "options": {
                    "A": "has",
                    "B": "had",
                    "C": "have",
                    "D": "having"
                },
                "classification": "g1",
                "testId": 5,
                "correctAnswer": "D",
                "translation": "프로 데이터 위즈로 업그레이드한 뒤, 고객들은 스프레드시트에 문제를 겪기 시작했다.",
                "explanation": "빈칸은 동사 began의 목적어 자리이므로 동명사인 (D) having이 정답이다. (A) has와 (C) have는 동사, (B) had는 동사/과거분사이므로 목적어 자리에 들어갈 수 없다."
            },
            {
                "id": "p5-t5-q102",
                "questionNo": 102,
                "text": "Requests for additional days off are _____ by Ms. Chung in Human Resources.",
                "options": {
                    "A": "approved",
                    "B": "dropped",
                    "C": "reached",
                    "D": "reminded"
                },
                "classification": "v2",
                "testId": 5,
                "correctAnswer": "A",
                "translation": "추가적인 휴가 요청은 인사부의 정 씨에 의해 승인된다.",
                "explanation": "해설 be동사 are와 함께 수동태를 이루는 과거분사 자리로, 문맥상 '요청이 정 씨에 의해 승인된다'라는 의미가 되어야 자연스러우므로 '승인하다'라는 뜻의 (A) approved가 정답이다. (B)의 drop은 '떨어뜨리다', (C)의 reach는 '도달하다', (D)의 remind는 '상기시키다'라는 뜻으로 문맥상 적절하지 않다."
            },
            {
                "id": "p5-t5-q103",
                "questionNo": 103,
                "text": "The programmers have a list of changes _____ the next software update.",
                "options": {
                    "A": "between",
                    "B": "of",
                    "C": "for",
                    "D": "above"
                },
                "classification": "pr1",
                "testId": 5,
                "correctAnswer": "C",
                "translation": "프로그래머들은 다음 소프트웨어 업데이트를 위한 변경사항 목록을 가지고 있다.",
                "explanation": "문맥상 '다음 소프트웨어 업데이트를 위한 변경사항 목록'이라는 의미가 되어야 적절하므로 '~을 위한'이라는 뜻으로 목적을 나타내는 (C) for가 정답이다. 참고로, (A) between은 '~ 사이에'라는 뜻으로 뒤에 'A and B' 또는 둘을 나타내는 복수명사가 와야 한다."
            },
            {
                "id": "p5-t5-q104",
                "questionNo": 104,
                "text": "Let Farida Banquet Service _____ professional catering for your important corporate events.",
                "options": {
                    "A": "providing",
                    "B": "provide",
                    "C": "provides",
                    "D": "to provide"
                },
                "classification": "v1",
                "testId": 5,
                "correctAnswer": "B",
                "translation": "파리다 연회 서비스가 귀사의 중요한 기업 행사에 전문적인 출장 요리를 제공하도록 해 주십시오.",
                "explanation": "해설 「let+목적어(Farida Banquet Service) + 목적격 보어」 구조에서 목적격 보어에 해당하는 자리로, 사역동사 let은 동사원형이나 과거분사를 목적격 보어로 취한다. 따라서 동사원형인 (B) provide가 정답이다. (A) providing은 동명사/현재분사, (C) provides는 동사, (D) to provide는 to부정사로 빈칸에 들어갈 수 없다."
            },
            {
                "id": "p5-t5-q105",
                "questionNo": 105,
                "text": "Using various innovative techniques, Boyd Industries has improved the _____ of its tiles.",
                "options": {
                    "A": "closure",
                    "B": "product",
                    "C": "quality",
                    "D": "method"
                },
                "classification": "voc1",
                "testId": 5,
                "correctAnswer": "C",
                "translation": "다양한 혁신 기술을 이용하여 보이드 인더스트리스는 타일의 품질을 개선해 왔다.",
                "explanation": "해설 동사 has improved의 목적어 자리로, 문맥상 '타일의 품질을 개선해 왔다'라는 내용이 되어야 적절하다. 따라서 '품질'을 뜻하는 (C) quality가 정답이다. (A) closure는 '종료; 폐쇄', (B) product는 제품, (D) method는 '방법'이라는 의미이다."
            },
            {
                "id": "p5-t5-q106",
                "questionNo": 106,
                "text": "_____ of all cosmetics are final, and refunds will not be given under any circumstances.",
                "options": {
                    "A": "Sale",
                    "B": "Sales",
                    "C": "Sells",
                    "D": "Selling"
                },
                "classification": "n1",
                "testId": 5,
                "correctAnswer": "B",
                "translation": "모든 화장품의 판매는 최종 판매이며, 어떠한 경우에도 환불되지 않습니다.",
                "explanation": "빈칸은 복수동사 are의 주어 자리이므로 복수명사가 들어가야 한다. 따라서 '판매'라는 뜻의 (B) Sales가 정답이다. (A) Sale은 단수명사이므로 단수동사와 쓰이고, (C) Sells는 동사이므로 품사상 빈칸에 들어갈 수 없다. (D) Selling은 동명사일 경우 주어 자리에 들어갈 수는 있지만 단수 취급되므로 복수동사 are의 주어가 될 수 없다."
            },
            {
                "id": "p5-t5-q107",
                "questionNo": 107,
                "text": "If you have already submitted your response, no _____ action is required.",
                "options": {
                    "A": "bright",
                    "B": "further",
                    "C": "previous",
                    "D": "average"
                },
                "classification": "voc1",
                "testId": 5,
                "correctAnswer": "B",
                "translation": "답변을 이미 제출한 경우 추가적인 조치는 필요하지 않습니다.",
                "explanation": "부정을 나타내는 한정사 no와 명사 action 사이에서 action을 수식하는 형용사 자리이다. 앞에 '이미 답변을 제출한 경우'라는 내용이 온 것으로 보아 '추가적인 조치는 필요 없다'라는 의미가 되어야 적절하므로 '추가의, 더 이상의'를 뜻하는 (B) further가 정답이다. (A) bright는 '밝은', (C) previous는 '이전의', (D) average는 '평균의'라는 의미로 문맥상 어울리지 않는다."
            },
            {
                "id": "p5-t5-q108",
                "questionNo": 108,
                "text": "Ms. Sieglak stated that the app design was based on _____ own research.",
                "options": {
                    "A": "she",
                    "B": "hers",
                    "C": "her",
                    "D": "herself"
                },
                "classification": "p1",
                "testId": 5,
                "correctAnswer": "C",
                "translation": "시글락 씨는 앱 설계가 자신의 연구를 토대로 한 것이라고 말했다.",
                "explanation": "빈칸에는 뒤에 온 명사구 own research를 수식하는 말이 들어가야 한다. 따라서 명사 앞에 쓰여 한정사 역할을 하고, 형용사 own과 함께 소유 관계를 강조하는 소유격 인칭대명사인 (C) her가 정답이다."
            },
            {
                "id": "p5-t5-q109",
                "questionNo": 109,
                "text": "_____ the organization has doubled its outreach efforts, it has yet to see an increase in new clients.",
                "options": {
                    "A": "Until",
                    "B": "Because",
                    "C": "Although",
                    "D": "Therefore"
                },
                "classification": "c3",
                "testId": 5,
                "correctAnswer": "C",
                "translation": "그 조직은 지원 활동을 두 배로 늘렸지만 아직 신규 고객의 증가는 보지 못했다.",
                "explanation": "뒤에 the organization이 주어, has doubled가 동사, its outreach efforts가 목적어인 완전한 절이 왔으므로, 빈칸에는 부사절 접속사가 들어가야 한다. 문맥상 '지원 활동을 두 배로 늘렸지만'이라는 내용이 되어야 자연스러우므로 '~이기는 하지만'이라는 뜻의 접속사 (C) Although가 정답이다. 부사절 접속사 (A) Until은 '~까지', (B) Because는 '~ 때문에'라는 뜻으로 문맥상 적절하지 않고, (D) Therefore는 '그러므로'라는 접속부사로 절을 연결할 수 없다."
            },
            {
                "id": "p5-t5-q110",
                "questionNo": 110,
                "text": "Starting on October 8, _____ board of education meetings will be streamed live on the school district's Web site.",
                "options": {
                    "A": "all",
                    "B": "so",
                    "C": "that",
                    "D": "to"
                },
                "classification": "n5",
                "testId": 5,
                "correctAnswer": "A",
                "translation": "10월 8일부터 모든 교육 위원회 회의는 학군 웹사이트에서 생중계될 예정이다.",
                "explanation": "빈칸은 주어 역할을 하는 복합명사 board of education meetings를 수식하는 형용사 자리이다. meetings가 복수이므로 '모든'이라는 뜻으로 복수명사를 수식할 수 있는 (A) all이 정답이다. (B) so는 접속사/부사, (D) to는 전치사/to부정사이므로 품사상 답이 될 수 없고, (C) that은 형용사로 쓰일 경우 뒤에 단수명사가 와야 한다."
            },
            {
                "id": "p5-t5-q111",
                "questionNo": 111,
                "text": "The hairstylists at Urbanite Salon have _____ experience working with a variety of hair products.",
                "options": {
                    "A": "considers",
                    "B": "considerable",
                    "C": "considerate",
                    "D": "considering"
                },
                "classification": "voc1",
                "testId": 5,
                "correctAnswer": "B",
                "translation": "어바나이트 살롱의 미용사들은 다양한 헤어 제품을 다루는 데 많은 경험을 가지고 있다.",
                "explanation": "빈칸은 명사 experience를 수식하는 형용사 자리이다. '다양한 헤어 제품을 가지고 일한 많은 경험'이라는 의미가 되어야 하므로 '많은, 상당한'이라는 뜻의 (B) considerable이 정답이다. (A) considers는 동사이므로 품사상 답이 될 수 없고, (C) considerate은 '사려 깊은'을 뜻하는 형용사로 명사 experience와 어울리지 않으며, (D) considering은 현재분사일 경우 '고려하는'을 뜻하므로 문맥상 적절하지 않다."
            },
            {
                "id": "p5-t5-q112",
                "questionNo": 112,
                "text": "Both candidates are _____ suitable for the assistant manager position.",
                "options": {
                    "A": "permanently",
                    "B": "promptly",
                    "C": "equally",
                    "D": "gradually"
                },
                "classification": "voc1",
                "testId": 5,
                "correctAnswer": "C",
                "translation": "두 후보자 모두 대리 직책에 동등하게 적합하다.",
                "explanation": "해설 형용사 suitable을 수식하여 적절한 문맥을 완성하는 부사를 고르는 문제이다. '후보자 둘 다 동등하게 적합하다'라는 내용이 되어야 자연스러우므로 '동등하게, 똑같이'를 뜻하는 (C) equally가 정답이다. (A) permanently는 '영구적으로', (B) promptly는 '즉시', (D) gradually는 '점차적으로'라는 의미이다."
            },
            {
                "id": "p5-t5-q113",
                "questionNo": 113,
                "text": "With the acquisition of Bloom Circuit, Wellstrom Hardware has _____ expanded its offerings and services.",
                "options": {
                    "A": "greater",
                    "B": "greatness",
                    "C": "great",
                    "D": "greatly"
                },
                "classification": "av1",
                "testId": 5,
                "correctAnswer": "D",
                "translation": "블룸 서킷 인수를 통해 웰스트롬 하드웨어는 제품 및 서비스를 크게 확장했다.",
                "explanation": "빈칸은 동사구 has expanded를 수식하는 부사 자리로, 문맥상 '크게 확장했다'라는 의미가 되어야 하므로 '크게'를 뜻하는 부사 (D) greatly가 정답이다. (B) greatness는 명사로 품사상 빈칸에 들어갈 수 없고, 주로 형용사로 쓰이는 (A) greater와 (C) great는 부사로 쓰이기도 하지만 '아주 잘'이라는 뜻으로 보통 동사 뒤에 온다."
            },
            {
                "id": "p5-t5-q114",
                "questionNo": 114,
                "text": "Please note that file names should not _____ capital letters or spaces.",
                "options": {
                    "A": "differ",
                    "B": "contain",
                    "C": "match",
                    "D": "pick"
                },
                "classification": "voc1",
                "testId": 5,
                "correctAnswer": "B",
                "translation": "파일 이름에는 대문자나 공백이 들어 있으면 안 된다는 점에 유의하십시오.",
                "explanation": "빈칸 뒤의 명사구 capital letters or spaces를 목적어로 취해 적절한 문맥을 만드는 동사를 골라야 한다. '대문자나 공백이 들어 있으면 안 된다'라는 내용이 되어야 하므로 '~이 들어 있다'라는 뜻의 (B) contain이 정답이다. (A) differ는 '다르다'라는 뜻의 자동사로 목적어를 취할 수 없으므로 빈칸에 들어갈 수 없고, (C) match는 '맞추다', (D) pick은 '고르다'라는 의미로 문맥상 적합하지 않다."
            },
            {
                "id": "p5-t5-q115",
                "questionNo": 115,
                "text": "The Sun-Tech ceiling fan has received more than 15,000 five-star reviews from _____ customers.",
                "options": {
                    "A": "satisfied",
                    "B": "checked",
                    "C": "adjusted",
                    "D": "allowed"
                },
                "classification": "pa2",
                "testId": 5,
                "correctAnswer": "A",
                "translation": "선-테크 천장 선풍기는 만족한 고객으로부터 별 5개 평가를 15,000개 이상 받았다.",
                "explanation": "빈칸 뒤의 명사 customers를 수식하여 적절한 문맥을 완성하는 형용사를 골라야 한다. 별 5개 평가를 15,000개 이상 받았다고 했으므로 '만족한 고객'이라는 의미가 되어야 적절하다. 따라서 '만족한'을 뜻하는 (A) satisfied가 정답이다. (B) checked는 '확인된', (C) adjusted는 '조정된', (D) allowed는 '허용된'이라는 의미이다."
            },
            {
                "id": "p5-t5-q116",
                "questionNo": 116,
                "text": "Please _____ the Returns section of our Web site if you are unhappy with any part of your order.",
                "options": {
                    "A": "visit",
                    "B": "visits",
                    "C": "visited",
                    "D": "visiting"
                },
                "classification": "v1",
                "testId": 5,
                "correctAnswer": "A",
                "translation": "주문 제품에 조금이라도 불만이 있으시면 당사 웹사이트의 반품 섹션을 방문하십시오.",
                "explanation": "Please로 시작하는 명령문의 동사 자리로 동사원형이 들어가야 한다. 따라서 (A) visit가 정답이다. (B) visits는 3인칭 단수주어와 쓰이는 동사의 현재형, (C) visited는 동사의 과거형/과거분사, (D) visiting은 동명사/현재분사이므로 답이 될 수 없다."
            },
            {
                "id": "p5-t5-q117",
                "questionNo": 117,
                "text": "Ito Auto Group is offering excellent _____ on pre-owned vehicles this month.",
                "options": {
                    "A": "trips",
                    "B": "reasons",
                    "C": "customs",
                    "D": "deals"
                },
                "classification": "voc1",
                "testId": 5,
                "correctAnswer": "D",
                "translation": "이토 자동차 그룹은 이번 달에 중고 차량에 대해 훌륭한 할인 혜택을 제공합니다.",
                "explanation": "빈칸에 들어갈 명사는 자동차 회사에서 중고 차량에 대해 제공하는 것이어야 하므로 앞의 형용사 excellent와 함께 '훌륭한 할인 혜택, 특가'라는 의미가 되어야 적합하다. 따라서 '할인 혜택, 특가'라는 뜻을 지닌 (D) deals가 정답이다. (A)의 trip은 '여행', (B)의 reason은 '이유', (C) customs는 '세관'이라는 의미로 자동차 회사가 중고 차량과 관련해 제공하는 것이 되기에는 부적절하다."
            },
            {
                "id": "p5-t5-q118",
                "questionNo": 118,
                "text": "Product prices are influenced _____ such factors as consumer demand and retail competition.",
                "options": {
                    "A": "by",
                    "B": "under",
                    "C": "those",
                    "D": "nearly"
                },
                "classification": "v2",
                "testId": 5,
                "correctAnswer": "A",
                "translation": "제품 가격은 소비자 수요와 소매 경쟁과 같은 요인에 의해 영향을 받는다.",
                "explanation": "빈칸은 수동태로 쓰인 완전한 절(Product prices are influenced) 뒤에 명사구 such factors를 연결하는 전치사 자리이다. 문맥상 '그러한 요소들에 의해 영향을 받는다'는 의미가 되어야 하므로 '~에 의하여'라는 의미인 (A) by가 정답이다. (B) under는 '~ 아래'를 뜻하는 전치사/부사로 문맥상 어울리지 않고, (C) those는 지시대명사/지시형용사, (D) nearly는 '거의'라는 뜻의 부사이므로 품사상 답이 될 수 없다."
            },
            {
                "id": "p5-t5-q119",
                "questionNo": 119,
                "text": "Monmouth Enterprises will be _____ prefabricated houses online starting on April 1.",
                "options": {
                    "A": "predicting",
                    "B": "passing",
                    "C": "retaining",
                    "D": "marketing"
                },
                "classification": "voc1",
                "testId": 5,
                "correctAnswer": "D",
                "translation": "몬머스 엔터프라이시스는 4월 1일부터 온라인으로 조립식 주택을 상품으로 판촉할 예정이다.",
                "explanation": "해설 be동사 뒤에 현재분사 형태로 들어가 빈칸 뒤의 명사구 prefabricated houses를 목적어로 취해 적절한 문맥을 완성하는 동사를 고르는 문제이다. '조립식 주택을 상품으로 판촉할 것이다'라는 내용이 되어야 자연스러우므로 ‘(상품을) 판촉하다, 마케팅하다'라는 뜻의 (D) marketing이 정답이다. (A)의 predict는 '예측하다', (B)의 pass는 '지나가다', (C)의 retain은 '유지하다'라는 뜻으로 문맥상 어울리지 않는다."
            },
            {
                "id": "p5-t5-q120",
                "questionNo": 120,
                "text": "All employees should familiarize _____ with the company's policies and procedures.",
                "options": {
                    "A": "their",
                    "B": "them",
                    "C": "theirs",
                    "D": "themselves"
                },
                "classification": "p3",
                "testId": 5,
                "correctAnswer": "D",
                "translation": "모든 직원은 회사의 정책 및 절차를 익혀야 한다.",
                "explanation": "빈칸은 동사 should familiarize의 목적어 자리로, 목적어 자리에 들어갈 수 있는 목적격 인칭대명사 (B) them, 소유대명사 (C) theirs, 재귀대명사 (D) themselves 중 하나를 선택해야 한다. 모든 직원이 회사 정책 및 절차에 익숙하게 만들어야 하는 대상은 그들 자신이므로 주어 All employees를 가리키며 주어와 목적어가 동일할 경우 쓰이는 재귀대명사 (D) themselves가 정답이다."
            },
            {
                "id": "p5-t5-q121",
                "questionNo": 121,
                "text": "Custom furniture orders require a 50 percent deposit _____ the time of the order.",
                "options": {
                    "A": "as",
                    "B": "off",
                    "C": "into",
                    "D": "at"
                },
                "classification": "pr1",
                "testId": 5,
                "correctAnswer": "D",
                "translation": "맞춤 가구 주문에는 주문 시 50퍼센트의 보증금이 필요하다.",
                "explanation": "빈칸 뒤 시간을 나타내는 명사구 the time이 있고, 문맥상 '주문 시에'라는 의미가 되어야 하므로 '~에'를 뜻하는 시간의 전치사 (D) at이 정답이다. (A) as는 '~로서, ~같이', (B) off는 '~에서 떨어져서', (C) into는 '~ 속으로'를 뜻하므로 문맥상 적절하지 않다."
            },
            {
                "id": "p5-t5-q122",
                "questionNo": 122,
                "text": "We are planning a _____ for the Klemner Corporation's twentieth anniversary.",
                "options": {
                    "A": "celebration",
                    "B": "celebrated",
                    "C": "celebrity",
                    "D": "celebrate"
                },
                "classification": "voc1",
                "testId": 5,
                "correctAnswer": "A",
                "translation": "우리는 클렘너 사의 20주년 기념행사를 기획하고 있다.",
                "explanation": "해설 부정관사 a와 함께 동사 are planning의 목적어 역할을 하는 명사 자리로, 문맥상 '20주년 기념행사'라는 의미가 되어야 하므로 '기념행사'를 뜻하는 (A) celebration이 정답이다. (B) celebrated는 동사/과거분사, (D) celebrate는 동사로 품사상 빈칸에 들어갈 수 없고, 명사 (C) celebrity는 '유명 인사'라는 뜻으로 문맥상 적절하지 않다."
            },
            {
                "id": "p5-t5-q123",
                "questionNo": 123,
                "text": "Though she lacks political experience, Ms. Diaz has been _____ impressive in her first term as mayor.",
                "options": {
                    "A": "quite",
                    "B": "soon",
                    "C": "ever",
                    "D": "next"
                },
                "classification": "voc1",
                "testId": 5,
                "correctAnswer": "A",
                "translation": "디아즈 씨는 비록 정치적 경험은 부족하지만 시장으로서의 첫 임기 중에는 꽤 강한 인상을 주었다.",
                "explanation": "해설 형용사 impressive를 수식하여 적절한 문맥을 만드는 부사를 고르는 문제이다. '꽤 강한 인상을 주었다'는 내용이 되어야 자연스러우므로 '꽤, 상당히'라는 의미의 (A) quite가 정답이다. (B) soon은 주로 미래 시제에서 사용되고, (C) ever는 '지금까지'라는 의미로 비교급, 최상급을 강조하는 데 쓰이며, (D) next는 '다음에'라는 의미이다."
            },
            {
                "id": "p5-t5-q124",
                "questionNo": 124,
                "text": "The university library usually acquires _____ copies of best-selling books to meet students' demand.",
                "options": {
                    "A": "multiply",
                    "B": "multiple",
                    "C": "multiples",
                    "D": "multiplicity"
                },
                "classification": "voc1",
                "testId": 5,
                "correctAnswer": "B",
                "translation": "대학 도서관은 보통 학생들의 수요를 맞추기 위해 베스트셀러 책을 여러 권 구입한다.",
                "explanation": "해설 빈칸에는 동사 acquires의 목적어인 명사 copies를 수식하는 형용사 또는 복합명사를 이루는 명사가 들어갈 수 있다. '베스트셀러 책 여러 권'이라는 의미가 되어야 하므로 '여러, 다수의'를 뜻하는 형용사 (B) multiple이 정답이다. (A) multiply는 '곱하다'라는 뜻의 동사이므로 품사상 답이 될 수 없고, (C) multiples는 '배수', (D) multiplicity는 '다양성'이라는 뜻의 명사로 copies와 복합명사를 만들지 않으므로 오답이다."
            },
            {
                "id": "p5-t5-q125",
                "questionNo": 125,
                "text": "This year's conference tote bags were _____ donated by Etani Designs.",
                "options": {
                    "A": "generous",
                    "B": "generosity",
                    "C": "generously",
                    "D": "generosities"
                },
                "classification": "av1",
                "testId": 5,
                "correctAnswer": "C",
                "translation": "올해 학회의 토트백은 에타니 디자인스가 후하게 기부해 주었다.",
                "explanation": "해설 동사구 were donated를 수식하는 부사 자리이므로 '후하게'라는 뜻의 부사 (C) generously가 정답이다. (A) generous는 형용사, (B) generosity와 (D) generosities는 명사이므로 품사상 빈칸에 들어갈 수 없다."
            },
            {
                "id": "p5-t5-q126",
                "questionNo": 126,
                "text": "We will be holding a _____ on Friday to honor the 30-year engineering career of Mr. Kuan.",
                "options": {
                    "A": "record",
                    "B": "share",
                    "C": "reception",
                    "D": "place"
                },
                "classification": "voc1",
                "testId": 5,
                "correctAnswer": "C",
                "translation": "콴 씨의 30년간의 엔지니어링 경력을 기리기 위해 금요일에 축하연을 열 예정입니다.",
                "explanation": "해설 콴 씨의 30년 경력을 기리기 위한 것이라는 내용으로 보아 '축하연을 연다'라는 의미가 되어야 적절하다. 따라서 '축하연'을 뜻하는 (C) reception이 정답이다. (A) record는 '기록', (B) share는 '몫', (D) place는 '장소'를 뜻하므로 문맥상 어울리지 않는다."
            },
            {
                "id": "p5-t5-q127",
                "questionNo": 127,
                "text": "Groove Background creates soothing playlists of instrumental music, _____ classical and jazz.",
                "options": {
                    "A": "instead",
                    "B": "including",
                    "C": "in addition",
                    "D": "indeed"
                },
                "classification": "pa5",
                "testId": 5,
                "correctAnswer": "B",
                "translation": "그루브 백그라운드는 클래식과 재즈를 포함하는 편안한 기악곡 재생 목록을 만들어 준다.",
                "explanation": "해설 앞에 완전한 절(Groove Background creates ~ music)이 있으므로 빈칸 뒤 명사구 classical and jazz와 함께 수식어구를 이끄는 전치사 자리이다. 따라서 '~을 포함하여'라는 의미의 전치사 (B) including이 정답이다. (A) instead(대신에), (C) in addition (게다가), (D) indeed(사실)는 모두 부사로 품사상 답이 될 수 없다."
            },
            {
                "id": "p5-t5-q128",
                "questionNo": 128,
                "text": "Members of the finance department _____ to Mr. Chua's lecture on risk avoidance.",
                "options": {
                    "A": "to be invited",
                    "B": "inviting",
                    "C": "invite",
                    "D": "are invited"
                },
                "classification": "v2",
                "testId": 5,
                "correctAnswer": "D",
                "translation": "재무부서 직원들은 추아 씨의 리스크 방지에 대한 강의에 초대되었습니다.",
                "explanation": "해설 주어 Members of the finance department의 동사 자리로, 타동사인 invite(초대하다) 뒤에 목적어가 없고 전치사 to가 있으므로 수동태가 와야 한다. 따라서 (D) are invited가 정답이다. (A) to be invited는 to부정사, (B) inviting은 동명사/현재분사이므로 품사상 답이 될 수 없고, (C) invite는 능동형 동사이므로 뒤에 목적어가 필요하다."
            },
            {
                "id": "p5-t5-q129",
                "questionNo": 129,
                "text": "The board of trustees debated for hours _____ the revised hiring policies.",
                "options": {
                    "A": "during",
                    "B": "above",
                    "C": "over",
                    "D": "across"
                },
                "classification": "pr1",
                "testId": 5,
                "correctAnswer": "C",
                "translation": "이사회는 개정된 고용 정책을 놓고 몇 시간 동안 논의했다.",
                "explanation": "해설 빈칸 앞의 몇 시간 동안 논의했다는 내용으로 보아 빈칸 뒤의 the revised hiring policies는 토론의 주제로 연결되어야 자연스럽다. 따라서 '~에 대한, ~을 두고'라는 뜻의 전치사 (C) over가 정답이다. (A) during은 '~ 동안', (B) above는 '~보다 위에', (D) across는 '~을 가로질러'라는 의미로 문맥상 적절하지 않다."
            },
            {
                "id": "p5-t5-q130",
                "questionNo": 130,
                "text": "The participants closely _____ the fitness instructor's movements tend to learn the proper technique more quickly.",
                "options": {
                    "A": "imitate",
                    "B": "imitations",
                    "C": "imitative",
                    "D": "imitating"
                },
                "classification": "pa1",
                "testId": 5,
                "correctAnswer": "D",
                "translation": "피트니스 강사의 동작을 유심히 따라 하는 참가자들은 적절한 기술을 더 빨리 익히는 경향이 있다.",
                "explanation": "The participants가 주어, tend가 동사인 문장이다. 따라서 빈칸에는 명사구 the fitness instructor's movements를 목적어로 취하면서 주어 The participants를 수식하는 준동사가 들어가야 하므로, '따라 하는, 모방하는'이라는 뜻의 현재분사 (D) imitating이 정답이다. (A) imitate는 동사, (B) imitations는 명사, (C) imitative는 형용사로 빈칸에 들어갈 수 없다."
            }
        ]
    };
