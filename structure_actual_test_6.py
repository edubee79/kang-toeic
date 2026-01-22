import json

questions_data = [
    {"id": 101, "ans": "B", "cls": "a5", "text": "After a six-month probationary period, city employees are-------------- to take vacation days.", "opts": ["beneficial", "eligible", "convenient", "relevant"]},
    {"id": 102, "ans": "B", "cls": "p1", "text": "Many people at the company have industry experience, but only a handful of-------------- can see the future importance of current trends.", "opts": ["we", "us", "our", "ourselves"]},
    {"id": 103, "ans": "B", "cls": "voc1", "text": "After working in Canada for ten years, Cha Joon has--------- -to Seoul to plan the opening of an upscale restaurant.", "opts": ["visited", "returned", "occurred", "related"]},
    {"id": 104, "ans": "B", "cls": "ac1", "text": "The Neighborhood Involvement Program honors residents--- -------- volunteer their time to help Egin City.", "opts": ["for", "who", "those", "as"]},
    {"id": 105, "ans": "B", "cls": "v4", "text": "Mr. Koizumi must complete the cost estimate before he----- -------for the conference.", "opts": ["will leave", "leaves", "leaving", "left"]},
    {"id": 106, "ans": "A", "cls": "a5", "text": "Although the new X150 printer is-------------- to other models, it costs only half as much.", "opts": ["similar", "likable", "reflected", "considerate"]},
    {"id": 107, "ans": "C", "cls": "av3", "text": "Finley Plant Nursery implements the--------------- latest agricultural techniques.", "opts": ["so", "more", "very", "much"]},
    {"id": 108, "ans": "D", "cls": "pr5", "text": "The LPN auto company has issued a special report to address concerns-------------- the fuel efficiency of its vehicles.", "opts": ["excluding", "during", "following", "regarding"]},
    {"id": 109, "ans": "A", "cls": "c3", "text": "------- the Nolan Credit Union parking area is now open to the public, a section has been reserved for credit union employees.", "opts": ["While", "When", "For", "But"]},
    {"id": 110, "ans": "B", "cls": "c3", "text": "Pharmacy technicians are responsible for verifying and processing prescriptions--------------- they are requested by a physician.", "opts": ["as well as", "as soon as", "in regard to", "in addition to"]},
    {"id": 111, "ans": "A", "cls": "pr1", "text": "The purchase of The New Lagos Reporter will not lead to changes-------------editorial staff.", "opts": ["in", "again", "positions", "ultimately"]},
    {"id": 112, "ans": "C", "cls": "voc1", "text": "All laboratory personnel must attend the clinical safety workshop to ensure-------------- with new regulations.", "opts": ["activation", "fulfillment", "compliance", "indication"]},
    {"id": 113, "ans": "D", "cls": "n1", "text": "Wearing lab coats and safety goggles is a ------ for all laboratory workers.", "opts": ["training", "fulfillment", "specialization", "requirement"]},
    {"id": 114, "ans": "D", "cls": "av1", "text": "Ms. Yi of Lakesview Catering says that five trays of appetizers are more than-------------- for fifty guests.", "opts": ["able", "numerous", "sure", "enough"]},
    {"id": 115, "ans": "C", "cls": "voc1", "text": "When picking up identification badges, employees need to show-------------of employment at Ekmekci Associates.", "opts": ["process", "analysis", "proof", "basis"]},
    {"id": 116, "ans": "D", "cls": "pr5", "text": "Prospective tenants must provide at least two references--- -------- their application.", "opts": ["too", "in addition", "moreover", "along with"]},
    {"id": 117, "ans": "C", "cls": "voc1", "text": "Please refer to the attached flowchart, which describes the---- ----- of responsibilities among the various leadership positions.", "opts": ["support", "attention", "division", "statemen"]},
    {"id": 118, "ans": "B", "cls": "av3", "text": "Same-day appointments can usually be scheduled, although not-------------with your usual doctor.", "opts": ["expectedly", "necessarily", "preventively", "permanently"]},
    {"id": 119, "ans": "A", "cls": "v2", "text": "Mr. Vieira is----------with introducing several changes that have helped Stacatti Stationery increase business.", "opts": ["credited", "scored", "agreed", "relied"]},
    {"id": 120, "ans": "C", "cls": "pr1", "text": "In the photograph, President lang can be seen standing-----------Dr. Dervishi.", "opts": ["from", "reverse", "opposite", "distant"]},
    {"id": 121, "ans": "C", "cls": "ac1", "text": "A rise in energy prices will mostly affect businesses---------- energy consumption is high.", "opts": ["its", "which", "whose", "more"]},
    {"id": 122, "ans": "A", "cls": "voc1", "text": "City officials have----------- Harmon Avenue businesses that street repairs will be completed within 48 hours.", "opts": ["assured", "arranged", "disclosed", "committed"]},
    {"id": 123, "ans": "D", "cls": "v7", "text": "Our department----------- the policy meeting last Monday, but we had a scheduling conflict.", "opts": ["can attend", "must have attended", "should attend", "would have attended"]},
    {"id": 124, "ans": "B", "cls": "pr5", "text": "------- the effectiveness of Maisey Stanton’s leadership on the town council, she will likely win next week’s mayoral election.", "opts": ["Since", "Given", "Among", "Upon"]},
    {"id": 125, "ans": "A", "cls": "n1", "text": "------- to the exercise room is included with your stay at the Bayland Hotel.", "opts": ["Access", "Accessed", "Accessing", "Accessible"]},
    {"id": 126, "ans": "B", "cls": "pr1", "text": "The Valletta Visitor Centre offers daily boat rides--------- the city’s historic waterfront.", "opts": ["between", "along", "below", "apart"]},
    {"id": 127, "ans": "C", "cls": "p6", "text": "Ultrora Action’s T-Pro tennis shoe is the lightest--------- on the market right now.", "opts": ["that", "any", "one", "either"]},
    {"id": 128, "ans": "A", "cls": "a4", "text": "At Razani Marketing, there are-------------- opportunities for professional advancement.", "opts": ["plenty", "each", "very", "many"]},
    {"id": 129, "ans": "A", "cls": "voc1", "text": "Orvale School's business mentors are retired executives with a-------------of expertise across a wide range of industries.", "opts": ["wealth", "height", "labor", "fame"]},
    {"id": 130, "ans": "C", "cls": "c3", "text": "The judges may begin to review the entries ---------- the deadline for submitting slogans has passed.", "opts": ["how", "nor", "now that", "whether"]}
]

def get_explanation(id, ans, cls):
    exps = {
        101: "[해설] 'be eligible to'는 '~할 자격이 있다'라는 의미의 관용 표현입니다.",
        102: "[해설] 전치사 of의 목적어 자리이므로 목적격 대명사인 us가 정답입니다. 'a handful of us'는 '우리 중 소수'를 의미합니다.",
        103: "[해설] 'returned to Seoul'은 '서울로 돌아왔다'라는 의미로 문맥상 가장 적절합니다.",
        104: "[해설] 선행사 'residents'를 수식하며 주어 역할을 하는 주격 관계대명사 who가 정답입니다.",
        105: "[해설] 시간의 부사절(before)에서는 미래의 일을 현재 시제로 나타냅니다. 따라서 leaves가 정답입니다.",
        106: "[해설] 'be similar to'는 '~와 유사하다'라는 의미입니다.",
        107: "[해설] 최상급(latest)을 강조하는 부사 very가 정답입니다. 'the very latest'는 '정말 최신의'라는 의미입니다.",
        108: "[해설] 'regarding'은 '~에 관한'이라는 의미의 전치사로 concerns를 수식합니다.",
        109: "[해설] 주절과 부사절의 상반된 상황(전체 공개 vs 일부 예약)을 연결하는 양보/대조의 접속사 While이 적절합니다.",
        110: "[해설] 'as soon as'는 '~하자마자'라는 의미의 접속사입니다.",
        111: "[해설] 'changes in ~'은 '~에서의 변화'를 의미하는 전치사 구문입니다.",
        112: "[해설] 'compliance with rules/regulations'는 '규정 준수'를 뜻하는 빈출 표현입니다.",
        113: "[해설] 문장의 보어 자리이며 '가운 착용은 필수사항(requirement)이다'라는 의미가 적절합니다.",
        114: "[해설] 'more than enough'는 '충분하고도 남는'이라는 의미의 관용구입니다.",
        115: "[해설] 'proof of employment'는 '재직 증명(고용 증명)'을 의미합니다.",
        116: "[해설] 'along with'는 '~와 함께, ~을 첨부하여'라는 의미의 복합 전치사입니다.",
        117: "[해설] 'division of responsibilities'는 '책임의 분담/구분'을 의미합니다.",
        118: "[해설] 'not necessarily'는 '반드시 ~인 것은 아니다'라는 부분 부정의 의미를 가집니다.",
        119: "[해설] 'be credited with'는 '~에 대한 공로를 인정받다'라는 의미의 수동태 관용구입니다.",
        120: "[해설] 'standing opposite'는 '~의 맞은편에 서 있는'이라는 의미입니다.",
        121: "[해설] 선행사 'businesses'의 소유 관계를 나타내는 소유격 관계대명사 whose가 정답입니다. (그들의 에너지 소비량)",
        122: "[해설] 'assure A that절'은 'A에게 ~임을 보장하다/확신시키다'라는 4형식 구조 동사입니다.",
        123: "[해설] 과거의 사실(참석하지 못함)에 대한 반대 가정을 나타낼 때 조동사 과거형 + have + p.p.를 사용합니다. '참석했을 텐데 (그러지 못했다)'는 의미입니다.",
        124: "[해설] 'Given'은 '~을 고려하면'이라는 의미의 전치사로 쓰입니다.",
        125: "[해설] 주어 자리이므로 명사인 Access가 정답입니다. 'Access to ~'는 '~에 대한 접근/이용 권한'을 뜻합니다.",
        126: "[해설] 'along the waterfront'는 '해안가/강변을 따라'라는 의미입니다.",
        127: "[해설] 앞에 나온 명사(shoe)를 반복을 피해 대신하는 부정 대명사 one이 정답입니다.",
        128: "[해설] 'plenty of (+ 가산 복수/불가산)'는 '많은'을 의미합니다.",
        129: "[해설] 'a wealth of ~'는 '풍부한 ~'를 뜻하는 관용적 표현입니다.",
        130: "[해설] 'now that'은 '이제 ~이므로(때문에)'라는 이유의 접속사입니다."
    }
    return exps.get(id, "[AI 분석] 본 문제는 " + cls + " 유형을 측정합니다.")

final_pool = []
for q in questions_data:
    final_pool.append({
        "part": 5,
        "text": q["text"],
        "options": [{"label": l, "text": t} for l, t in zip(["A", "B", "C", "D"], q["opts"])],
        "correctAnswer": q["ans"],
        "classification": q["cls"],
        "difficulty": 700 if q["id"] < 120 else 850,
        "translation": "", 
        "explanation": get_explanation(q["id"], q["ans"], q["cls"]),
        "source": "actual-test-06",
        "createdAt": "2026-01-21T19:28:00.000Z"
    })

with open('actual_test_6_pool.json', 'w', encoding='utf-8') as f:
    json.dump(final_pool, f, ensure_ascii=False, indent=2)

print(f"Successfully processed {len(final_pool)} questions for Actual Test 6.")
