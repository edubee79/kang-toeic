export interface ClassificationRule {
    tag: string;
    majorCategory: string;
    optionsConstraint: string;    // 보기에 대한 제한 상항
    contextConstraint: string;    // 주변 구조 및 단서 제한
    logicConstraint: string;      // 핵심 판별 로직
    exclusionConstraint: string;  // 제외 및 주의 사항
    priority: number;             // 판별 우선순위
}

/**
 * 📊 TOEIC Part 5 Expert Classification Rules (Verified 80 Tags)
 * This is the machine-enforced version of docs/TOEIC_P5_CLASSIFICATION_CRITERIA.md
 */
export const P5_RULES: Record<string, ClassificationRule> = {
    // --- Nouns (n1~n5) ---
    "n1": {
        tag: "n1", majorCategory: "Noun",
        optionsConstraint: "동일 어근의 품사 변형 (명/동/형/부)",
        contextConstraint: "한정사(the/a), 소유격, 혹은 형용사 직후 빈칸",
        logicConstraint: "문장 내 필수 성분인 명사 자리가 비어 있는지 판별",
        exclusionConstraint: "뒤에 명사가 오는 복합명사(n3)나 수량 일치(n2) 단서가 있으면 제외",
        priority: 1
    },
    "n2": {
        tag: "n2", majorCategory: "Noun",
        optionsConstraint: "동일 명사의 단수 vs 복수 대조 (e.g., sample vs samples)",
        contextConstraint: "수량 단서 (Each/Every/All/Most/Few/Several) 존재",
        logicConstraint: "가산 명사의 단복수와 한정사의 숫자 개념을 일치시킴",
        exclusionConstraint: "수량 표현이 없는 단순 품사 문제는 n1로 처리",
        priority: 2
    },
    "n3": {
        tag: "n3", majorCategory: "Noun",
        optionsConstraint: "명사 형태의 옵션",
        contextConstraint: "앞 명사와 결합하여 하나의 전문 용어를 형성하는 [Noun + ____]",
        logicConstraint: "registration fee, safety standards 등 비즈니스 관용 조합 확인",
        exclusionConstraint: "단순히 형용사 역할을 하는 명사와 구분 (명사 중첩성 확인)",
        priority: 3
    },
    "n4": {
        tag: "n4", majorCategory: "Noun",
        optionsConstraint: "사람 명사(-er/ant) vs 사물/행위 명사(-tion/ment) 대조",
        contextConstraint: "동사의 주체(주어) 혹은 객체가 인격체여야 하는 문맥 (hire, attend)",
        logicConstraint: "의미상 주체성 판별을 통한 사람/사물 명사 선택",
        exclusionConstraint: "수 일치(n2)로 풀 수 있는 문법적 오류가 보기에 있으면 n2 우선",
        priority: 2
    },
    "n5": {
        tag: "n5", majorCategory: "Noun",
        optionsConstraint: "접미사가 -ive, -al 등으로 끝나 형용사처럼 보이는 명사",
        contextConstraint: "명사 전용 자리이나 형태적 함정이 있는 경우",
        logicConstraint: "objective, alternative, proposal 등 형태적 예외 명사 매칭",
        exclusionConstraint: "일반 명사와 섞여 있을 때 용법적 우선순위 확인",
        priority: 1
    },

    // --- Pronouns (p1~p6) ---
    "p1": {
        tag: "p1", majorCategory: "Pronoun",
        optionsConstraint: "동일 인칭의 격 변화 (I/my/me/mine)",
        contextConstraint: "[____ + N] 소유격, [V/Prep + ____] 목적격, [____ + V] 주격",
        logicConstraint: "대명사의 문장 성분(주/목/관) 역할 판별",
        exclusionConstraint: "주어와 목적어가 동일인일 경우 p4(재귀) 우선",
        priority: 2
    },
    "p2": {
        tag: "p2", majorCategory: "Pronoun",
        optionsConstraint: "부정 대명사(each, others, another 등) 혼합",
        contextConstraint: "[____ of the 복수명사] 등 범위 한정",
        logicConstraint: "부정 대명사 고유의 숫자 일치 (Each: 단수 동사 등)",
        exclusionConstraint: "명사 앞 수식 형용사 기능인 경우 a4",
        priority: 2
    },
    "p3": {
        tag: "p3", majorCategory: "Pronoun",
        optionsConstraint: "this/that/those/these",
        contextConstraint: "those who(사람들), that of(지칭 대상) 패턴",
        logicConstraint: "지칭 대상의 단복수 수치 매칭",
        exclusionConstraint: "단순 지시 형용사 기능",
        priority: 3
    },
    "p4": {
        tag: "p4", majorCategory: "Pronoun",
        optionsConstraint: "재귀대명사 (-self) 포함",
        contextConstraint: "S=O, 문장 끝 강조, 혹은 [by + ____]",
        logicConstraint: "자기 자신을 가리키거나 강조하는 용법 판별",
        exclusionConstraint: "own을 사용한 소유격 강조(p6)와 구분",
        priority: 3
    },
    "p5": {
        tag: "p5", majorCategory: "Pronoun",
        optionsConstraint: "own, alone",
        contextConstraint: "[on one's own], [by oneself] 관용구",
        logicConstraint: "스스로/혼자서의 의미를 갖는 대명사적 관용구",
        exclusionConstraint: "p6와 구조적(N 유무) 차이 확인",
        priority: 4
    },
    "p6": {
        tag: "p6", majorCategory: "Pronoun",
        optionsConstraint: "own",
        contextConstraint: "[Possessive + ____ + N]",
        logicConstraint: "소유격을 형용사적으로 보강하여 강조",
        exclusionConstraint: "명사 없이 단독 사용 시 p5",
        priority: 3
    },

    // --- Adjective (a1~a6) ---
    "a1": {
        tag: "a1", majorCategory: "Adjective",
        optionsConstraint: "POS 변형 (형/부/명)",
        contextConstraint: "[Det + ____ + N] 전형적 형용사 자리",
        logicConstraint: "명사의 성질을 수식하는 형용사 선택",
        exclusionConstraint: "분사형(-ing/ed)인 경우 a3",
        priority: 1
    },
    "a2": {
        tag: "a2", majorCategory: "Adjective",
        optionsConstraint: "Adj vs Adv",
        contextConstraint: "2형식(be/remain) 뒤 혹은 5형식(make O) 뒤 보어 자리",
        logicConstraint: "동사가 필수적으로 요구하는 보어 성분 판별",
        exclusionConstraint: "단순 문장 수식 부사(av1)",
        priority: 2
    },
    "a3": {
        tag: "a3", majorCategory: "Adjective",
        optionsConstraint: "-ing vs -ed 형태 대조",
        contextConstraint: "감정 형용사 혹은 수동/능동 상태 수식",
        logicConstraint: "사물 수식(ing) vs 사람 감정(ed) 논리 체크",
        exclusionConstraint: "V시제/태 실전 동사 자리(v2)",
        priority: 3
    },
    "a4": {
        tag: "a4", majorCategory: "Adjective",
        optionsConstraint: "many/much/few/little",
        contextConstraint: "빈칸 뒤 명사의 가산/불가산 여부 확인",
        logicConstraint: "수량 형용사와 명사의 종류 일치",
        exclusionConstraint: "대명사 단독 사용(p2)",
        priority: 2
    },
    "a5": {
        tag: "a5", majorCategory: "Adjective",
        optionsConstraint: "eligible, aware, representative 등 전용 어휘",
        contextConstraint: "[be ____ for/of/with] 숙어적 결합",
        logicConstraint: "특정 전치사와 짝꿍인 형용사 매칭",
        exclusionConstraint: "순수 어휘 의미 문제",
        priority: 3
    },
    "a6": {
        tag: "a6", majorCategory: "Adjective",
        optionsConstraint: "available, possible, necessary",
        contextConstraint: "[N + ____] 후치 수식 구조",
        logicConstraint: "명사 뒤에서 의미를 한정하는 형용사 판단",
        exclusionConstraint: "전치 수식이 더 빈번한 경우 a1",
        priority: 3
    },

    // --- Adverb (av1~av3) ---
    "av1": {
        tag: "av1", majorCategory: "Adverb",
        optionsConstraint: "POS 변형 (-ly 부사 포함)",
        contextConstraint: "be [____] pp, have [____] pp, S [____] V 등 거품 자리",
        logicConstraint: "완결된 문장 구조 내에 삽입되는 부사 위치 판별",
        exclusionConstraint: "형용사/부사 수식(av2) 또는 접속 기능(av3)",
        priority: 1
    },
    "av2": {
        tag: "av2", majorCategory: "Adverb",
        optionsConstraint: "highly, extremely, fairly 등 정도 부사",
        contextConstraint: "[____ + Adj/Adv]",
        logicConstraint: "다른 수식어를 앞에서 강조하는 부사 판단",
        exclusionConstraint: "동사 수식(av1)",
        priority: 2
    },
    "av3": {
        tag: "av3", majorCategory: "Adverb",
        optionsConstraint: "however, therefore, always, often",
        contextConstraint: "[문두 + 콤마] 혹은 [일반동사 앞]",
        logicConstraint: "접속부사의 논리 연결 또는 빈도 부사 위치",
        exclusionConstraint: "부사절 접속사(c3)",
        priority: 3
    },

    // --- Verb (v1~v8) ---
    "v1": {
        tag: "v1", majorCategory: "Verb",
        optionsConstraint: "V vs V-s, is vs are",
        contextConstraint: "주어 핵 명사와의 단복수 대조",
        logicConstraint: "순수하게 주어와 동사의 숫자를 맞추는 로직",
        exclusionConstraint: "시제(v4)나 태(v2)가 더 강력한 정답 근거인 경우",
        priority: 2
    },
    "v2": {
        tag: "v2", majorCategory: "Verb",
        optionsConstraint: "Active vs Passive (be+pp)",
        contextConstraint: "뒤에 목적어 명사 유무 확인",
        logicConstraint: "동사가 타동사일 때 목적어 부재 시 수동태 확정",
        exclusionConstraint: "자동사(occur, remain)는 절대 수동태 후보에서 배제",
        priority: 3
    },
    "v3": {
        tag: "v3", majorCategory: "Verb",
        optionsConstraint: "be pp 고정 형태",
        contextConstraint: "[be pp + with/of/in/at]",
        logicConstraint: "be filled with 등 전치사 짝꿍형 수동태 숙어",
        exclusionConstraint: "일반 목적어 유무 판별 문제(v2)",
        priority: 4
    },
    "v4": {
        tag: "v4", majorCategory: "Verb",
        optionsConstraint: "시제 변형 (has pp, will, played)",
        contextConstraint: "since, next week, previously 등 명확한 시간 부사",
        logicConstraint: "시간 단어와 시제 형태의 1:1 기계적 매칭",
        exclusionConstraint: "가정법 시제(s1)",
        priority: 5
    },
    "v5": {
        tag: "v5", majorCategory: "Verb",
        optionsConstraint: "동사 원형",
        contextConstraint: "Suggest/Recommend/Insist + that + S + [____]",
        logicConstraint: "당위성 should 생략에 따른 원형 동사 판단",
        exclusionConstraint: "단순 현재 시제와 구분",
        priority: 5
    },
    "v6": {
        tag: "v6", majorCategory: "Verb",
        optionsConstraint: "can/must/should/may",
        contextConstraint: "[Modal + ____]",
        logicConstraint: "조동사의 의미 결합과 뒤에 원형 사용",
        exclusionConstraint: "준동사와의 결합",
        priority: 2
    },
    "v7": {
        tag: "v7", majorCategory: "Verb",
        optionsConstraint: "유사 의미 자/타동사 (e.g., account for vs explain)",
        contextConstraint: "직후 전치사가 있는지 목적어가 있는지 확인",
        logicConstraint: "동사가 가진 자/타동사적 문법 기초 성질",
        exclusionConstraint: "순수 의미 어휘 문제",
        priority: 3
    },
    "v8": {
        tag: "v8", majorCategory: "Verb",
        optionsConstraint: "Adj/Part/N/To-v",
        contextConstraint: "[Keep/Make/Find/Consider + O + ____]",
        logicConstraint: "목적어의 상태/동작을 설명하는 목적격 보어 형태",
        exclusionConstraint: "2형식 주격 보어(a2)",
        priority: 4
    },

    // --- Verbals (i, g, pa) ---
    "i1": {
        tag: "i1", majorCategory: "Verbal",
        optionsConstraint: "동사 원형과 To-v의 형태적 대립",
        contextConstraint: "decide, plan, want, agree, offer, fail 등 특정 타동사의 목적어 자리",
        logicConstraint: "미래 지향적 의지나 결정을 나타내는 명사적 용법 판별",
        exclusionConstraint: "동명사를 목적어로 취하는 동사(enjoy, consider)와 엄격 구분",
        priority: 2
    },
    "i2": {
        tag: "i2", majorCategory: "Verbal",
        optionsConstraint: "To-v 포함 형태",
        contextConstraint: "ability, chance, right, opportunity, plan, time 등 추상 명사 직후",
        logicConstraint: "명사의 구체적 내용을 보충 설명하는 형용사적 용법 확인",
        exclusionConstraint: "단순 문장 수식 부사적 용법(i3)과 위치적 차이 확인",
        priority: 2
    },
    "i3": {
        tag: "i3", majorCategory: "Verbal",
        optionsConstraint: "To-v",
        contextConstraint: "완결된 절 앞/뒤 콤마 삽입 또는 문장 끝 군더더기 자리",
        logicConstraint: "'~하기 위하여'라는 목적의 의미가 해석상 100% 성립해야 함",
        exclusionConstraint: "명사적/형용사적 용법으로 문장 필수 성분인 경우 제외",
        priority: 3
    },
    "i4": {
        tag: "i4", majorCategory: "Verbal",
        optionsConstraint: "To-v vs -ing 혼합 옵션",
        contextConstraint: "동사가 준동사 목적어의 형태를 결정하는 선택적 상황",
        logicConstraint: "본동사의 성질(to-v vs ing)에 따른 기계적 암기 패턴 매칭",
        exclusionConstraint: "둘 다 가능하지만 뜻이 변하는 경우(g4) 우선순위 확인",
        priority: 4
    },
    "i5": {
        tag: "i5", majorCategory: "Verbal",
        optionsConstraint: "의문사(how/what/where/when) + To-v",
        contextConstraint: "know, explain, tell 등 인지 동사의 목적어 절 압축 형태",
        logicConstraint: "의문사의 의미와 준동사의 결합 구조 판별",
        exclusionConstraint: "전체 절 형태인 명사절(nc5)과 비교",
        priority: 3
    },
    "i6": {
        tag: "i6", majorCategory: "Verbal",
        optionsConstraint: "for [목적격] + To-v",
        contextConstraint: "[It is Adj + ____ + to do], [Noun + ____ + to do] 구조",
        logicConstraint: "to부정사의 동작 주체를 명시하는 의미상 주어 구문 완성",
        exclusionConstraint: "of [성품형용사] 가 쓰이는 예외 상황 주의",
        priority: 3
    },

    "g1": {
        tag: "g1", majorCategory: "Verbal",
        optionsConstraint: "동사 원형, -ing, 명사 혼합",
        contextConstraint: "전치사(in, at, on, through, without, by) 바로 뒷자리",
        logicConstraint: "전치사의 대상으로서 행위 명사적 기능을 수행하는지 판별",
        exclusionConstraint: "뒤에 목적어가 있는 경우 g2 룰 우선 적용",
        priority: 2
    },
    "g2": {
        tag: "g2", majorCategory: "Verbal",
        optionsConstraint: "순수 명사 vs -ing 형태의 배타적 선택",
        contextConstraint: "빈칸 뒤 명사(목적어)가 문맥상 확실히 존재할 때",
        logicConstraint: "뒤에 목적어를 수반하여 '행위'를 나타내는 동명사의 동사적 성질 이용",
        exclusionConstraint: "목적어(명사)가 없으면 n1(명사)로 강제 분류",
        priority: 4
    },
    "g3": {
        tag: "g3", majorCategory: "Verbal",
        optionsConstraint: "marketing, seating, pricing, staffing 등 -ing형 명사",
        contextConstraint: "관사나 형용사의 수식을 받는 순수 명사 자리",
        logicConstraint: "전문 비즈니스 어휘로서 굳어진 명사 표현 암기 여부 확인",
        exclusionConstraint: "뒤에 목적어를 취하는 활성 동명사(g2)와 구분",
        priority: 3
    },
    "g4": {
        tag: "g4", majorCategory: "Verbal",
        optionsConstraint: "To-v vs -ing",
        contextConstraint: "stop, remember, forget, regret, try 등 특정 동사 뒷자리",
        logicConstraint: "과거 행위(-ing) vs 미래 행위(to-v)의 시간적/의미적 대조 분석",
        exclusionConstraint: "단순 형태 매칭 문제(i4)",
        priority: 5
    },
    "g5": {
        tag: "g5", majorCategory: "Verbal",
        optionsConstraint: "-ing 포함 옵션",
        contextConstraint: "look forward to, contribute to, object to, be used to 등",
        logicConstraint: "to가 전치사인 관용구 뒤에 명사/동명사가 와야 하는 패턴 매칭",
        exclusionConstraint: "to부정사의 to(i1)로 오판하는 함정 제거",
        priority: 4
    },

    "pa1": {
        tag: "pa1", majorCategory: "Verbal",
        optionsConstraint: "-ing vs -ed 형태의 대칭성",
        contextConstraint: "[관/형 + ____ + N] 명사 전치 수식 위치",
        logicConstraint: "수식받는 명사와의 능동/진행(ing) vs 수동/완료(ed) 관계 판별",
        exclusionConstraint: "interested/interesting 같은 감정 형용사(a3)와 구분",
        priority: 2
    },
    "pa2": {
        tag: "pa2", majorCategory: "Verbal",
        optionsConstraint: "-ing vs -ed",
        contextConstraint: "[Noun + ____ + (by Agent/Prep)]",
        logicConstraint: "명사 뒤에서 주격관계사+be생략된 형용사 역할 분사절 확인",
        exclusionConstraint: "동사 자리(v2)와 오인하지 않도록 본동사 선확인",
        priority: 2
    },
    "pa3": {
        tag: "pa3", majorCategory: "Verbal",
        optionsConstraint: "Participle",
        contextConstraint: "[keep, find, leave, get + O + ____]",
        logicConstraint: "목적어의 상태가 '결과적으로 어떠한가'를 설명하는 보어 판별",
        exclusionConstraint: "형용사 보어(a2)",
        priority: 3
    },
    "pa4": {
        tag: "pa4", majorCategory: "Verbal",
        optionsConstraint: "V-ing / p.p. Clause",
        contextConstraint: "[____ ... (콤마) + S + V] 또는 [S + V ... (콤마) + ____]",
        logicConstraint: "부사절이 축약된 분사구문으로, 주어와의 능동/수동 관계 판단",
        exclusionConstraint: "전치사구(g1)와 구별 (Based on, Following 등)",
        priority: 4
    },
    "pa5": {
        tag: "pa5", majorCategory: "Verbal",
        optionsConstraint: "including, regarding, concerning, following, excluding",
        contextConstraint: "문장 내에서 전치사 기능을 수행하는 위치",
        logicConstraint: "분사에서 파생되어 전치사화 된 특수 어휘 판단",
        exclusionConstraint: "활성 분사구문(pa4)",
        priority: 4
    },

    // --- Clauses (nc, ac) ---
    "nc1": {
        tag: "nc1", majorCategory: "Clause",
        optionsConstraint: "that vs what",
        contextConstraint: "인지/전달 동사(say, think, know)의 목적어 자리",
        logicConstraint: "뒷문장이 1~5형식으로 완전(that)한지 성분 누락(what)인지 대조",
        exclusionConstraint: "선행사를 수식하는 관계사(ac1)와 자리 구분",
        priority: 4
    },
    "nc2": {
        tag: "nc2", majorCategory: "Clause",
        optionsConstraint: "whether, if",
        contextConstraint: "ask, wondering, not sure 등 뒤의 목적어절",
        logicConstraint: "'~인지 아닌지'라는 의미적 불확실성 여부 확인",
        exclusionConstraint: "부사절 접속사 if(c3)",
        priority: 3
    },
    "nc3": {
        tag: "nc3", majorCategory: "Clause",
        optionsConstraint: "Who, which, how, when 등 의문사",
        contextConstraint: "문장 중간에 삽입된 목적어/주어 역할 의문사절",
        logicConstraint: "간접 의문문의 정치 어순(의+주+동) 준수 여부 판별",
        exclusionConstraint: "의문사 + to v (nc5)",
        priority: 3
    },
    "nc4": {
        tag: "nc4", majorCategory: "Clause",
        optionsConstraint: "whoever, whichever, whatever",
        contextConstraint: "복합 관계사 절 (주어/목적어 자리)",
        logicConstraint: "대상 확인 없이 '누구든/어느 것이든'의 선택 의미 판별",
        exclusionConstraint: "단순 명사절(nc1)",
        priority: 5
    },
    "nc5": {
        tag: "nc5", majorCategory: "Clause",
        optionsConstraint: "Wh + to v",
        contextConstraint: "know/explain + [____]",
        logicConstraint: "절을 압축한 고비용 명사구 구조 인지 (i5와 교차 검증)",
        exclusionConstraint: "완전한 절(nc1)",
        priority: 3
    },
    "ac1": {
        tag: "ac1", majorCategory: "Clause",
        optionsConstraint: "who, whom, whose, which",
        contextConstraint: "선행사(N) + [____ + (S) + V]",
        logicConstraint: "선행사 종류에 맞춘 격(주/목/소유)과 품사 매칭",
        exclusionConstraint: "명사절(nc1)",
        priority: 4
    },
    "ac2": {
        tag: "ac2", majorCategory: "Clause",
        optionsConstraint: "that, which",
        contextConstraint: "콤마가 있는 계속적 용법 vs 제한적 용법",
        logicConstraint: "that은 콤마 뒤 사용 불가 등 문법적 제약 확인",
        exclusionConstraint: "ac4",
        priority: 4
    },
    "ac3": {
        tag: "ac3", majorCategory: "Clause",
        optionsConstraint: "some/all/most + of + Rel",
        contextConstraint: "[Noun + (콤마) + some of ____]",
        logicConstraint: "전체 집합 중 일부를 수식하는 수량사 결합 관계사 판별",
        exclusionConstraint: "ac1",
        priority: 5
    },
    "ac4": {
        tag: "ac4", majorCategory: "Clause",
        optionsConstraint: "in which, for whom",
        contextConstraint: "[Prep + Rel-Pro]",
        logicConstraint: "관계절 끝의 전치사가 관계사 앞으로 이동한 구조 판별",
        exclusionConstraint: "관계부사(ac6)와의 비교",
        priority: 5
    },
    "ac5": {
        tag: "ac5", majorCategory: "Clause",
        optionsConstraint: "Gap 존재 (S+V가 N 바로 뒤에 옴)",
        contextConstraint: "[Noun + S + V]",
        logicConstraint: "목적격 관계사가 생략된 상태임을 문장 성분 차이로 인지",
        exclusionConstraint: "ac1",
        priority: 3
    },
    "ac6": {
        tag: "ac6", majorCategory: "Clause",
        optionsConstraint: "where, when, why vs which",
        contextConstraint: "선행사가 장소/시간이고 뒷문장이 완전한지 확인",
        logicConstraint: "완전절(부사) vs 불완전절(대명사) 판별 알고리즘 기계적 적용",
        exclusionConstraint: "ac4",
        priority: 5
    }

    // --- Connectors (c, pr) ---
    "c1": {
        tag: "c1", majorCategory: "Connector",
        optionsConstraint: "and, but, or",
        contextConstraint: "[A, B, and C] 또는 [Adj and Adj] 등 대칭 구조",
        logicConstraint: "품사, 구, 절의 품질이 동일하게 연결되는 병렬 구조 판별",
        exclusionConstraint: "상관 접속사(c2)",
        priority: 2
    },
    "c2": {
        tag: "c2", majorCategory: "Connector",
        optionsConstraint: "both...and, neither...nor, either...or, not only...but also",
        contextConstraint: "문장 내에 짝이 되는 단어가 이미 존재함",
        logicConstraint: "상관 접속사의 고정된 짝꿍을 찾아 기계적으로 매칭",
        exclusionConstraint: "단순 등위 접속사(c1)",
        priority: 3
    },
    "c3": {
        tag: "c3", majorCategory: "Connector",
        optionsConstraint: "Although, Because, While, Unless, If, Once",
        contextConstraint: "[____ + S + V + (콤마) + S + V]",
        logicConstraint: "두 개의 완전한 절을 논리적으로 잇는 부사절 접속사 의미 판별",
        exclusionConstraint: "접속사 vs 전치사(c4) 판별 필수",
        priority: 3
    },
    "c4": {
        tag: "c4", majorCategory: "Connector",
        optionsConstraint: "Because vs Because of, While vs During 등 접/전 혼합",
        contextConstraint: "빈칸 뒤가 [S + V] 인가 아니면 [Noun] 인가",
        logicConstraint: "구조적 성분(절 vs 구)에 따른 문법적 제약 강제 적용",
        exclusionConstraint: "순수 의미 문제",
        priority: 5
    },
    "c5": {
        tag: "c5", majorCategory: "Connector",
        optionsConstraint: "Conj + V-ing / p.p.",
        contextConstraint: "While/When/Although + ____",
        logicConstraint: "주어가 생략되고 동사가 분사로 변한 축약 부사절 구조 인지",
        exclusionConstraint: "순수 분사구문(pa4)",
        priority: 4
    },

    "pr1": {
        tag: "pr1", majorCategory: "Connector",
        optionsConstraint: "at, in, on, for, during, through",
        contextConstraint: "[____ + N]",
        logicConstraint: "장소, 시간, 수단 등 전치사 본연의 의미와 명사의 결합 적절성",
        exclusionConstraint: "자동사+전치사 숙어(pr4)",
        priority: 1
    },
    "pr2": {
        tag: "pr2", majorCategory: "Connector",
        optionsConstraint: "Despite(전) vs However(부), Instead of(전) vs Instead(부)",
        contextConstraint: "단독 사용(부사) 인지 명사를 수반(전치사) 하는지 위치 확인",
        logicConstraint: "문법적 기능(품사)에 따른 선택 제약 적용",
        exclusionConstraint: "c4",
        priority: 4
    },
    "pr3": {
        tag: "pr3", majorCategory: "Connector",
        optionsConstraint: "instead of, in spite of, as a result of + -ing",
        contextConstraint: "전치사구 뒤에 행위를 나타내는 동명사가 옴",
        logicConstraint: "전치사의 목적어로 동명사구를 취하는 특정 패턴 판별",
        exclusionConstraint: "g1",
        priority: 3
    },
    "pr4": {
        tag: "pr4", majorCategory: "Connector",
        optionsConstraint: "comply with, refer to, account for, specialize in",
        contextConstraint: "[Vi + ____]",
        logicConstraint: "자동사와 짝을 이루어 타동사처럼 기능을 수행하는 고정 전치사 매칭",
        exclusionConstraint: "pr1",
        priority: 4
    },
    "pr5": {
        tag: "pr5", majorCategory: "Connector",
        optionsConstraint: "due to, prior to, regardless of, in addition to",
        contextConstraint: "두 단어 이상이 모여 하나의 전치사 역할을 하는 구조",
        logicConstraint: "다어절 전치사의 의미와 문법적 일체성 인지",
        exclusionConstraint: "pr1",
        priority: 3
    },

    // --- Special (com, s, inv) ---
    "com1": {
        tag: "com1", majorCategory: "Comparison",
        optionsConstraint: "as...as, more/-er...than, the most/-est",
        contextConstraint: "문장 내 than/as 등의 비교 기준점 존재 확인",
        logicConstraint: "동일 비교 대상을 전제로 한 급(급)의 일치성 판별",
        exclusionConstraint: "비교급 강조(com2)",
        priority: 3
    },
    "com2": {
        tag: "com2", majorCategory: "Comparison",
        optionsConstraint: "much, still, even, far, a lot",
        contextConstraint: "[____ + 비교급(-er/more)]",
        logicConstraint: "비교급의 정도를 강화하는 특정 부사 리스트 (very 불가) 매칭",
        exclusionConstraint: "일반 부사 수식(av2)",
        priority: 4
    },
    "com3": {
        tag: "com3", majorCategory: "Comparison",
        optionsConstraint: "by far, the very",
        contextConstraint: "[____ + 최상급]",
        logicConstraint: "최상급의 의미를 극대화하는 강조 표현 판별",
        exclusionConstraint: "av2",
        priority: 4
    },
    "com4": {
        tag: "com4", majorCategory: "Comparison",
        optionsConstraint: "The + 비교급 ..., the + 비교급 ...",
        contextConstraint: "두 개의 절이 비례 관계로 연결됨",
        logicConstraint: "상관 비교 구문의 특수 어순 및 급 일치 확인",
        exclusionConstraint: "c1",
        priority: 5
    },

    "s1": {
        tag: "s1", majorCategory: "Special",
        optionsConstraint: "Mood Tense (e.g., would have p.p.)",
        contextConstraint: "If Clause의 시제(과거/과완) 확인",
        logicConstraint: "현실과 반대되는 가정을 나타내는 시제 짝꿍 법칙 강제",
        exclusionConstraint: "단순 조건절(v4)",
        priority: 5
    },
    "s2": {
        tag: "s2", majorCategory: "Special",
        optionsConstraint: "Should, Had, Were",
        contextConstraint: "If가 생략되고 조동사가 문두로 나온 구조",
        logicConstraint: "가정법 도치 구문의 구조적 특이성 인지",
        exclusionConstraint: "inv1",
        priority: 5
    },

    "inv1": {
        tag: "inv1", majorCategory: "Special",
        optionsConstraint: "Should, Had",
        contextConstraint: "문두 조동사 도치",
        logicConstraint: "s2와 동일 로직 적용",
        exclusionConstraint: "s2",
        priority: 5
    },
    "inv2": {
        tag: "inv2", majorCategory: "Special",
        optionsConstraint: "Never, Rarely, Seldom, Hardly, Scarcely",
        contextConstraint: "부정어가 문두에 놓임",
        logicConstraint: "강조를 위한 [부정어 + 의문문 어순] 도치 법칙 확인",
        exclusionConstraint: "av3",
        priority: 5
    },
    "inv3": {
        tag: "inv3", majorCategory: "Special",
        optionsConstraint: "Place/Direction adverbs",
        contextConstraint: "장소 부사구(In the box 등)가 문두에 옴",
        logicConstraint: "자동사가 포함된 문장에서 [V + S]로 바뀌는 전체 도치 인지",
        exclusionConstraint: "av1",
        priority: 5
    },
    "inv4": {
        tag: "inv4", majorCategory: "Special",
        optionsConstraint: "Only after, Only then, Only when",
        contextConstraint: "Only로 시작하는 한정 어구의 문두 위치",
        logicConstraint: "제약적 강조 시 발생하는 주어-조동사 도치 판별",
        exclusionConstraint: "inv2",
        priority: 5
    },
    "inv5": {
        tag: "inv5", majorCategory: "Special",
        optionsConstraint: "So, Neither, Nor",
        contextConstraint: "앞 문장에 대한 동의/부정의 맞장구 표현",
        logicConstraint: "[So/Neither + V + S] 구조의 문법적 일치 확인",
        exclusionConstraint: "c1",
        priority: 5
    },

    // --- Vocab (voc1~voc4) ---
    "voc1": {
        tag: "voc1", majorCategory: "Vocab",
        optionsConstraint: "서로 다른 의미의 단어들 (동일 품사)",
        contextConstraint: "문법적 단서가 없는 순수 맥락",
        logicConstraint: "문장 전체의 논리적 흐름에 가장 적합한 개별 어휘 선택",
        exclusionConstraint: "voc2(연어)",
        priority: 0
    },
    "voc2": {
        tag: "voc2", majorCategory: "Vocab",
        optionsConstraint: "deliver, conduct, highly, widely 등",
        contextConstraint: "speech, survey, successful, available 등 강력한 짝꿍 단어 존재",
        logicConstraint: "비즈니스 영어의 빈번한 결합 관계(Collocation) 우선 적용",
        exclusionConstraint: "voc1",
        priority: 1
    },
    "voc3": {
        tag: "voc3", majorCategory: "Vocab",
        optionsConstraint: "expand vs extend, broad vs wide 등 유의어",
        contextConstraint: "미세한 용법 차이가 필요한 문맥",
        logicConstraint: "비슷한 뜻 중 뉘앙스나 결합 명사의 범위에 따른 선별",
        exclusionConstraint: "voc4",
        priority: 2
    },
    "voc4": {
        tag: "voc4", majorCategory: "Vocab",
        optionsConstraint: "Take, keep, come, get 등이 포함된 구동사/숙어",
        contextConstraint: "take advantage of, keep track of 등 전체가 하나의 뜻",
        logicConstraint: "개별 단어의 뜻보다 관용구 전체의 의미 인지 여부 판별",
        exclusionConstraint: "voc1",
        priority: 3
    }
};
