# 🧠 TOEIC Part 5 Expert Classification Engine (Batch 1/2: Tags 1-40)

본 문서는 AI 분류 엔진이 Part 5 문항을 판별할 때 사용하는 **최상위 전문가 시스템 프롬프트 및 초정밀 로직 설계도**이다. "일관되게 적용함"과 같은 생략 없이, 모든 태그의 상세 제한 조건을 명시한다.

---

## ⚖️ Common Reasoning Algorithm
1. **Initial Filter**: 보기가 동일 어근 변형(Grammar)인지, 서로 다른 단어(Vocab)인지 확인.
2. **Category Selection**: Grammar일 경우 명사/대명사/형용사/부사/동사 중 전문가 로직 선택.
3. **Strict Restriction Matching**: 아래 명시된 [Structure]와 [Exclusion] 조건을 1:1 대칭 확인.
4. **Final Decision**: Priority와 제한 사항을 모두 통과한 단 하나의 ID 부여.

---

## 📂 [Expert 1] Noun (n1~n5)

### n1: Noun Position/Form (명사 기본 자리)
- **Option Constraints**: 동일 어근 품사 변형 (e.g., preference, prefer, preferential).
- **Structure Restrictions**: `[a/an/the + ____]`, `[Possessive + ____]`, `[Adjective + ____]`, `[Preposition + ____]`.
- **Logic**: 문장의 주어, 목적어, 전치사의 목적어 자리에 명사가 비어 있어야 함.
- **Exclusion**: 빈칸 뒤에 다른 명사가 있어 복합명사(`n3`)가 가능하거나, 수량어(`n2`)가 핵심 단서면 제외.
- **Example**: "Provided the ______ of the manager." (A) approval.

### n2: Noun Countability/Agreement (가산/수 일치)
- **Option Constraints**: 명사 단수 vs 복수 (e.g., report vs reports).
- **Structure Restrictions**: 
  - 단수: `Each, Every, Another, Either, One` + `____`.
  - 복수: `All, Most, Several, Few, Many, Various, Numerous` + `____`.
- **Tested Concept**: 한정사와 명사 수량의 기계적 일치.
- **Example**: "Every ______ must be submitted." (A) application.

### n3: Compound Noun (복합명사)
- **Option Constraints**: 명사 형태 고정.
- **Structure Restrictions**: `[Noun + ____]`. 비즈니스에서 상용되는 명사 쌍.
- **Keyword Set**: `registration fee, safety standards, security measures, performance evaluation, expiration date, maintenance cost`.
- **Logic**: 앞의 명사가 뒤의 명사와 결합하여 하나의 개념을 이룰 때 n1보다 우선함.

### n4: Person vs. Object (사람 vs 사물)
- **Option Constraints**: `-er, -ant, -ist, -ee` (사람) vs `-tion, -ment, -ance, -al` (사물/행위).
- **Structure Restrictions**: 주어 자리에서 동사가 `participate, hire, recruit, promote` 등 인격적 주체가 필요.
- **Logic**: 의미적으로 문맥에 적합한 추체/객체 판별.
- **Example**: "The ______ managed the project." (A) director.

### n5: Special Noun Forms (특수 형태 명사)
- **Option Constraints**: `-ive, -al, -ness, -ing` 등으로 끝나 형용사처럼 보이나 명사인 것.
- **Keyword Set**: `objective, alternative, characteristic, professional, proposal, renewal, representative, response, potential`.
- **Logic**: 형태적 함정을 극복해야 하는 고득점 명사 유형.

---

## 📂 [Expert 2] Pronoun (p1~p6)

### p1: Pronoun Case (인칭대명사 격 선택)
- **Option Constraints**: 동일 인칭의 주/소유/목적/소유대명사 변화 (e.g., our, us, we, ours).
- **Structure Restrictions**: 
  - `[____ + N]` → 소유격.
  - `[____ + V]` → 주격.
  - `[V/Prep + ____]` (No Object) → 목적격.
- **Logic**: 문장 내 성분 역할에 따른 격 판단.

### p2: Indefinite Pronoun (부정대명사 수 일치)
- **Option Constraints**: `each, one, another, others, any, all, none`.
- **Structure Restrictions**: `[____ of the + 복수명사]`. 
- **Logic**: 각 부정대명사가 주어일 때 요구하는 동사 단복수(Each/One/Another: 단수) 일치.

### p3: Demonstrative Pronoun (지시대명사)
- **Option Constraints**: `that, those, this, these`.
- **Structure Restrictions**: `[those who]`, `[that of]`, `[those of]`.
- **Logic**: 앞의 명사를 지칭하는 대명사의 수 일치(that vs those).

### p4: Reflexive Pronoun (재귀대명사)
- **Option Constraints**: `-self, -selves`.
- **Structure Restrictions**: S=O 일치, 문장 완결 후 강조 삽입, `[by + ____]`.
- **Exclusion**: Own을 사용한 강조는 p5/p6로 분류.

### p5: Own with Reflexive (on one's own)
- **Option Constraints**: `own`.
- **Structure Restrictions**: `[on + 소유격 + own]`, `[by + oneself]`.
- **Logic**: '혼자서, 스스로'의 의미를 갖는 관용 대명사구.

### p6: Own with Possessive (소유격 강조)
- **Option Constraints**: `own`.
- **Structure Restrictions**: `[Possessive + ____ + N]`.
- **Logic**: 소유의 의미를 형용사적으로 극대화(자신의 직접적인).

---

## 📂 [Expert 3] Adjective & Adverb (a, av)

### a1~a6 (Adjectives): 
- **a1 [Attr]**: [관/소 + ____ + N] (순수 형용사 수식).
- **a2 [Comp]**: [be/remain/stay/make O + ____] (보어 자리).
- **a3 [Part]**: [interesting/interested] (감정/상태 분사형 수식).
- **a4 [Quant]**: [many/few vs much/little] (수량 형용사 일치).
- **a5 [Idiom]**: [be eligible for, be representative of] (전치사 숙어).
- **a6 [Post]**: [anything possible, available] (후치 수식).

### av1~av3 (Adverbs): 
- **av1 [Pos]**: [be ____ pp], [have ____ pp], [S ____ V] (품사 자리).
- **av2 [Mod]**: [____ + Adj/Adv] (highly, extremely 정도 수식).
- **av3 [Conj/Freq]**: [However, Therefore (문두)], [always, often (빈도)].

---

## 📂 [Expert 4] Verb (v1~v8)

### v1: S-V Agreement (수 일치)
- **Restrictions**: 보기가 `V` vs `V-s`. 주어 핵 파악 최우선. 시제 단서 없을 때.

### v2: Voice: Active/Passive (태)
- **Exclusion**: **[stay, occur, remain, expire, happen, arrive, last]** 같은 자동사는 보기에 be pp가 있어도 무조건 오답 처리.
- **Logic**: 빈칸 뒤 직접 목적어(명사) 유무 + 해석상 주어가 당하는지 확인.

### v4: Tense (시제)
- **Structure**: `since` -> `has pp`, `next` -> `will`, `last` -> `past`, `currently` -> `is ing`.

### v5: Subjunctive That-clause (당위성 원형)
- **ID**: `v5`
- **Option Constraints**: 동사 원형 (Present Subjunctive).
- **Structure Restrictions**: `[Suggest, recommend, insist, require, request, specify + that + S + ____]`.
- **Logic**: 당위성을 나타내는 동사 뒤의 that절에서 (should)가 생략된 원형 동사 판별.
- **Example**: "Mr. Lee suggested that we ______ the report." (B) finalize.

### v6: Modal Verbs (조동사)
- **ID**: `v6`
- **Option Constraints**: `can, must, should, may, will` 등.
- **Structure Restrictions**: `[Modal + 원형 동사]`.
- **Tested Concept**: 조동사의 의미적 적절성 및 조동사 뒤 동사 원형 사용 원칙.

### v7: Intransitive vs Transitive (자/타동사 선택)
- **ID**: `v7`
- **Option Constraints**: 의미가 유사한 자/타동사 대칭 (e.g., `speak` vs `say`, `object` vs `oppose`).
- **Structure Restrictions**: 뒤에 전치사가 바로 오는지(`Vi`), 목적어가 바로 오는지(`Vt`) 확인.
- **Example**: "Please ______ to the email promptly." (A) reply [reply to vs answer (목)].

### v8: 5-Form Verb (5형식 구조 및 보어)
- **ID**: `v8`
- **Option Constraints**: 목적격 보어 형태 (형용사, 분사, 명사, to-v).
- **Structure Restrictions**: `[Keep, make, find, consider, call, leave, elect + O + ____]`.
- **Logic**: 목적어의 상태나 성질을 보충하는 목적격 보어의 적합성 판별.

---

## 📂 [Expert 5] Verbals (준동사: i, g, pa)

### i1~i6: To-Infinitive (To부정사)
- **i1 [Noun-Role]**: 타동사의 목적어 (e.g., `decide, plan, want, agree, offer + to v`).
- **i2 [Adj-Role]**: 명사 후치 수식 (e.g., `ability, chance, right, opportunity, time + to v`).
- **i3 [Adv-Role]**: '~하기 위해서(목적)'. 문장 완결 후 부가 성분 또는 문두 삽입.
- **i4 [i vs g Select]**: 특정 타동사가 목적어로 `to-v`를 취하는지 `-ing`를 취하는지 구분(`decide to` vs `enjoy -ing`).
- **i5 [Wh-to]**: 명사 역할을 하는 `How to, what to, where to` 구조.
- **i6 [Subj]**: `for + 목적격 + to v` 형태의 의미상 주어 구문.

### g1~g5: Gerund (동명사)
- **g1 [Prep-Obj]**: 전치사의 목적어 자리 (e.g., `after, before, instead of, without + -ing`).
- **g2 [g vs n Case]**: **[가장 중요]** 빈칸 뒤에 **'목적어(명사)'**가 있으면 100% 동명사(`g2`). 목적어가 없고 전치사구/콤마가 오면 명사(`n1`).
- **g3 [Lexicalized]**: `-ing` 형태의 관용적 명사 (`marketing, seating, pricing, staffing, advertising`).
- **g4 [Meaning-Change]**: `stop, remember, forget` 등 뒤에 `to-v`와 `-ing`가 올 때의 의미 차이 판별.
- **g5 [Idiom]**: `look forward to -ing, have difficulty -ing, feel like -ing, spend time -ing`.

### pa1~pa5: Participles (분사)
- **pa1 [Pre-Modifier]**: 명사를 앞에서 수식하는 형용사 역할 (`updated report, existing customers`).
- **pa2 [Post-Modifier]**: 명사를 뒤에서 수식하는 분사구 (`The items (being) displayed...`).
- **pa3 [OC-Participle]**: 5형식 목적격 보어 자리의 분사 (`keep him informed, find it interesting`).
- **pa4 [Participle-Clause]**: 문두 부사절을 축약한 분사구문 (`Based on the results, Following the meeting`).
- **pa5 [Prepositional Participles]**: 전치사처럼 쓰이는 분사 (`including, regarding, concerning, following`).

---

## 🔗 [Expert 6] Clauses & Connectors (nc, ac, c, pr)

### nc1~nc5: Noun Clauses (명사절)
- **nc1 [That/What]**: 뒤가 완전하면 `that`, 불완전(주/목 누락)하면 `what`.
- **nc2 [Whether/If]**: '~인지 아닌지'의 불확실한 목적어절.
- **nc3 [Indirect-Q]**: 의문사절의 어순 (`의문사 + 주어 + 동사`).
- **nc4 [Ever-Relative]**: `whoever, whichever, whatever` 복합 관계 대명사.
- **nc5 [Wh-to Clause]**: 절의 기능과 압축(i5와 논리 공유).

### ac1~ac6: Adjective Clauses (관계대명사/부사)
- **ac1 [Case]**: 주격(`who/which`), 목적격(`whom/which`), 소유격(`whose`) 판별.
- **ac2 [That/Which]**: 선행사에 따른 선택 및 비제한적 용법(콤마) 여부.
- **ac3 [Quantifier+Wh]**: `all of which, most of whom, some of which` 등 부분 표현 관계사.
- **ac4 [Prep+Wh]**: `in which, for whom, to which` 등 전치사를 동반한 관계사.
- **ac5 [Omission]**: 목적격 관계대명사 생략 후 `S + V`가 뒤따르는 구조 분석.
- **ac6 [Adv vs Pron]**: 뒷문장이 완전하면 관계부사(`where, when`), 불완전하면 관계대명사.

### c1~c5: Conjunctions (접속사)
- **c1 [Coordinate]**: `and, but, or` (동일 품사/구조 병렬).
- **c2 [Correlative]**: `both A and B, neither A nor B, either A or B, not only A but also B`.
- **c3 [Subordinate]**: `Although, Because, While, Unless, If` 등의 부사절 접속사.
- **c4 [Conj vs Prep]**: **[핵심 제약]** `Because vs Because of`, `While vs During` 등 뒤에 '절'이 오는지 '명사구'가 오는지로 판별.
- **c5 [Reduced-Conj]**: 접속사가 생략되지 않은 분사구문 (`While waiting, Although tired`).

### pr1~pr5: Prepositions (전치사)
- **pr1 [Semantic]**: 장소, 시간, 방향 등 기본 전치사의 의미 선택.
- **pr2 [Prep vs Adv]**: `Despite(전)` vs `However(부)`, `In spite of(전)` vs `Instead(부)`.
- **pr3 [Prep+Gerund]**: 특정 전치사 뒤에 행위를 나타내는 동명사를 취하는 패턴.
- **pr4 [Vi+Prep]**: `reply to, depend on, refer to, apologize for` 등 고정 자동사+전치사 쌍.
- **pr5 [Compound-Prep]**: `due to, according to, regardless of, in addition to` 등 다어절 전치사.

---

## 💎 [Expert 7] Special Structures (com, s, inv)

### com1~com4: Comparison (비교/최상급)
- **com1 [Basic]**: 원급(`as...as`), 비교급(`more...than`), 최상급(`the most/-est`).
- **com2 [Mod-Comp]**: 비교급을 수식하는 부사 (`much, still, even, far, a lot`).
- **com3 [Mod-Super]**: 최상급을 수식하는 표현 (`by far, the very`).
- **com4 [The-The]**: `The + 비교급, the + 비교급` 특수 구문.

### s1~s2: Subjunctive (가정법)
- **s1 [Mood-Tense]**: 가정법 과거/과거완료의 시제 짝꿍 일치.
- **s2 [If-Omission]**: If 생략에 따른 `Should, Had` 문두 도치.

### inv1~inv5: Inversion (도치)
- **inv1 [Conditional]**: s2와 동일한 조건절 도치.
- **inv2 [Negative]**: `Never, Rarely, Seldom, Hardly` 등 부정어가 문두에 올 때 의문문 어순 도치.
- **inv3 [Place]**: 장소/방향 부사구가 문두에 올 때 `V + S` (Full inversion).
- **inv4 [Only-Restriction]**: `Only after, Only then` 등으로 시작할 때 조동사 도치.
- **inv5 [So/Neither]**: `So do I, Neither have I` 등의 동의 표현 도치.

---

## 📂 [Expert 8] Vocabulary (voc1~voc4)

### voc1: [Pure Semantics] - 순수 어휘
- **ID**: `voc1`
- **Logic**: 문법적 제약(수/태/품사)이 전혀 없으며, 4개의 보기가 모두 동일 품사/구조일 때 오직 문맥 해석만으로 판별.

### voc2: [Collocation] - 연어
- **ID**: `voc2`
- **Keyword Sets**: `deliver a speech, conduct a survey, highly recommended, extensive experience`.
- **Logic**: 단어 간의 강력한 결합 빈도가 정답의 근거인 경우.

### voc3: [Nuance/Synonym] - 유의어 변별
- **ID**: `voc3`
- **Logic**: 비슷한 의미 중 특정 상황에 더 적합한 뉘앙스나 용법 차이 판별 (e.g., `expand` vs `extend`).

### voc4: [Business Idioms] - 비즈니스 관용구
- **ID**: `voc4`
- **Keyword Sets**: `take advantage of, keep track of, comply with, as a result of`.
- **Logic**: 숙어적 표현을 통째로 알고 있는지 묻는 어휘 문제.

---
**최종 확정일: 2026-01-25**
**판별 엔진 가동 준비 완료 (80 Tags Full Coverage)**
