import json

questions_data = [
    {"id": 101, "ans": "D", "cls": "voc4", "text": "All Benoit employees must follow the policies and procedures set------in the new-hire orientation manual.", "opts": ["over", "away", "along", "forth"]},
    {"id": 102, "ans": "C", "cls": "voc1", "text": "Renovations on the top floor of the Melaka Building are set to- ------after the elevators are installed in early August.", "opts": ["expire", "construct", "commence", "arrange"]},
    {"id": 103, "ans": "C", "cls": "voc1", "text": "Amulet Media’s writing workshop was concluded with a........- dinner attended by the participants, guest speakers, and organizers of the event.", "opts": ["durable", "definite", "casual", "grateful"]},
    {"id": 104, "ans": "A", "cls": "a5", "text": "After Dr. Scott’s talk on pain management, participants were encouraged to ask questions--------to the topic.", "opts": ["relevant", "relevantly", "relevance", "relevancy"]},
    {"id": 105, "ans": "A", "cls": "g1", "text": "Last year, Entertainment Azusa, Inc., and Sohn Multimedia decided that-------their expertise and resources would increase profits for both organizations.", "opts": ["combining", "combined", "combines", "combine"]},
    {"id": 106, "ans": "C", "cls": "voc2", "text": "Nuts from Quintana Orchards can be a------- source of vitamins and minerals for a nutritious diet.", "opts": ["long", "various", "rich", "careful"]},
    {"id": 107, "ans": "A", "cls": "av1", "text": "The local government of Philadelphia will provide scholarships--------for qualified immigrants in the city.", "opts": ["exclusively", "exclusive", "exclusion", "exclude"]},
    {"id": 108, "ans": "A", "cls": "av3", "text": "For the duration of Ms. Dernal's leave, her corporate and private accounts will be overseen by Jian Wu and David Dembo --- ---.", "opts": ["respectively", "almost", "likewise", "even"]},
    {"id": 109, "ans": "C", "cls": "voc1", "text": "Before the laboratory carts can be used to transport------- materials, technicians must wipe all exposed surfaces with a disinfectant cloth.", "opts": ["vague", "passive", "sensitive", "demonstrative"]},
    {"id": 110, "ans": "A", "cls": "av3", "text": "All visitors must enter the arena through Gate 3 unless instructed--------by the receiving marshals.", "opts": ["otherwise", "furthermore", "consequently", "indeed"]},
    {"id": 111, "ans": "B", "cls": "i1", "text": "Hotel Adriatico offers plenty of information for guests eager--- -----the ancient city of Machu Picchu in Peru.", "opts": ["will explore", "to explore", "exploring", "to be explored"]},
    {"id": 112, "ans": "B", "cls": "voc1", "text": "Kitchenware producers can--------key markets in Asia directly by participating in this year’s TCB International Trade Show.", "opts": ["proceed", "access", "march", "emphasize"]},
    {"id": 113, "ans": "C", "cls": "g1", "text": "------for fuel products is determined mainly based on oil production costs and the level of demand in the global market.", "opts": ["Having priced", "To price", "Pricing", "Priced"]},
    {"id": 114, "ans": "C", "cls": "voc1", "text": "Cars may park along Main St. as long as their engines are turned off, but municipal by-laws don’t allow them to--------even for short periods of time.", "opts": ["abolish", "signify", "idle", "void"]},
    {"id": 115, "ans": "D", "cls": "a5", "text": "Mr. Brightman regularly plays golf at a country club--------to Hans Corporate Center, where he works.", "opts": ["closed", "closing", "closely", "close"]},
    {"id": 116, "ans": "D", "cls": "voc2", "text": "The Economy Channel invites financial analysts to its business programs to provide market-------for television viewers.", "opts": ["shares", "reforms", "earnings", "forecasts"]},
    {"id": 117, "ans": "C", "cls": "a4", "text": "Even though most young professionals in the country have stable jobs, ——— get married because of the high cost of raising a family.", "opts": ["many", "more", "few", "whose"]},
    {"id": 118, "ans": "C", "cls": "voc4", "text": "Please inform Mr. Maxwell that he has been shortlisted for the senior copywriter position he--------last week.", "opts": ["interviewed", "took over", "applied for", "accepted"]},
    {"id": 119, "ans": "D", "cls": "voc4", "text": "The disclosure that Jefferson Industries will be closing-------- no surprise to employees who have been suffering from layoffs and budget cuts.", "opts": ["makes of", "reaches for", "turns away", "comes as"]},
    {"id": 120, "ans": "B", "cls": "n3", "text": "Because of the strong competition in the airline industry, most passenger carriers now offer--------flights to various destinations around the world.", "opts": ["budgeting", "budget", "to budget", "budgetary"]},
    {"id": 121, "ans": "C", "cls": "n4", "text": "SOC Publishing Technologies has appointed Stockholm Enterprises as the main ......... of its latest line of heavy printing machines.", "opts": ["distribution", "distributing", "distributor", "distributed"]},
    {"id": 122, "ans": "D", "cls": "voc1", "text": "After the success of the “Tweet for a Ticket” program, the Azdec Theater continues to develop creative--------to encourage youth to attend the theater.", "opts": ["explanations", "limitations", "analyses", "initiatives"]},
    {"id": 123, "ans": "A", "cls": "pa1", "text": "Glam & Fab Cosmetics will release new beauty products comprising additions to its --------collection of mineral makeup.", "opts": ["existing", "exist", "existed", "existence"]},
    {"id": 124, "ans": "D", "cls": "a1", "text": "Ms. Kennedy has a successful track record of developing------ --marketing strategies for pharmaceutical companies.", "opts": ["effected", "effecting", "effectively", "effective"]},
    {"id": 125, "ans": "D", "cls": "voc2", "text": "Glideline Technologies-------in archiving records and retrieving lost data.", "opts": ["consists", "interests", "inspects", "specializes"]},
    {"id": 126, "ans": "D", "cls": "voc1", "text": "The Italian art film Seashore has been --------by several award-giving bodies in Europe for its unique plot and unpredictable ending.", "opts": ["detected", "proposed", "intended", "commended"]},
    {"id": 127, "ans": "B", "cls": "voc2", "text": "Germany’s most popular home furniture store, Bolkia, is finally expanding into Asia after conducting a year-long-------- study on the market.", "opts": ["visibility", "feasibility", "ability", "durability"]},
    {"id": 128, "ans": "C", "cls": "p3", "text": "------desiring to book time off during August must contact HR with their anticipated vacation days prior to June 30.", "opts": ["Whoever", "Much", "Anyone", "Another"]},
    {"id": 129, "ans": "B", "cls": "nc3", "text": "Tomorrow’s session will train participants on -------to prepare containers for overseas shipments.", "opts": ["what", "how", "that", "then"]},
    {"id": 130, "ans": "D", "cls": "av1", "text": "Aside from being a popular tourist spot, Jamaica is also,------- -, the home of excellent cooks and delectable cuisine.", "opts": ["remarkable", "remarked", "remark", "remarkably"]}
]

def get_explanation(id, ans, cls):
    exps = {
        101: "[해설] 'set forth'는 '(규칙 등을) 제시하다, 발표하다'라는 의미의 구동사입니다.",
        102: "[해설] 주어인 리모델링 공사(Renovations)가 8월 초에 '시작될(commence)' 것이라는 문맥이 적절합니다.",
        103: "[해설] 'casual dinner'는 '격식을 차리지 않는 저녁 식사'를 의미합니다.",
        104: "[해설] 'relevant to'는 '~와 관련된'이라는 의미의 형용사 구문입니다.",
        105: "[해설] 접속사 that절 내에서 주어 역할을 하는 동명사 combining이 정답입니다. 전문성과 자원을 '결합하는 것'이 이익을 증가시킨다는 문맥입니다.",
        106: "[해설] 'rich source of ~'는 '~의 풍부한 원천'이라는 의미의 연어(Collocation) 표현입니다.",
        107: "[해설] 타동사(provide)와 전치사(for) 사이에서 부충 설명을 하는 부사 exclusively(독점적으로, 오로지)가 적절합니다.",
        108: "[해설] 두 명의 담당자가 각각의 계좌를 관리한다는 의미이므로 '각각'을 뜻하는 respectively가 정답입니다.",
        109: "[해설] 'sensitive materials'는 '(취급에 주의가 필요한) 민감한 물질'을 의미합니다.",
        110: "[해설] 'unless instructed otherwise'는 '달리 지시받지 않는 한'이라는 의미의 관용적 표현입니다.",
        111: "[해설] 'be eager to-inf'는 '~하기를 갈망하다'라는 의미로, 형용사 eager를 수식하는 to explore가 정답입니다.",
        112: "[해설] 'access key markets'는 '주요 시장에 진출하다/접근하다'라는 의미입니다.",
        113: "[해설] 문장의 주어 자리이며 '가격을 책정하는 것'이라는 의미의 동명사 Pricing이 정답입니다.",
        114: "[해설] 'idle'은 '(엔진 등이) 공전하다, 빈둥거리다'라는 의미로, 정차 중 엔진을 켜두는 행위를 금지한다는 문맥입니다.",
        115: "[해설] 'close to'는 '~에 가까운'이라는 의미의 형용사 구문입니다.",
        116: "[해설] 'market forecasts'는 '시장 전망'이라는 의미의 복합 명사입니다.",
        117: "[해설] 문맥상 '직장은 안정적이지만 (결혼 비용 때문에) 결혼하는 사람은 거의 없다'는 부정적 의미가 와야 하므로 few가 정답입니다.",
        118: "[해설] 'apply for'는 '~에 지원하다'라는 의미의 구동사입니다.",
        119: "[해설] 'come as a surprise'는 '놀라움으로 다가오다, 놀라운 일이다'라는 의미의 표현입니다.",
        120: "[해설] 'budget flights'는 '저가 항공편'을 뜻하는 복합 명사입니다.",
        121: "[해설] 관사(the)와 형용사(main)의 수식을 받는 명사 자리이며, 문맥상 '유통업자(사람)'를 뜻하는 distributor가 정답입니다.",
        122: "[해설] 'creative initiatives'는 '창의적인 계획/주도권'이라는 의미입니다.",
        123: "[해설] 명사(collection)를 수식하는 형용사 역할의 현재분사 existing(기존의)이 정답입니다.",
        124: "[해설] 'effective marketing strategies'는 '효과적인 마케팅 전략'이라는 의미입니다.",
        125: "[해설] 'specialize in'은 '~을 전문으로 하다'라는 의미의 자동사 구문입니다.",
        126: "[해설] 'be commended for'는 '~로 칭찬받다, 추천받다'라는 의미입니다.",
        127: "[해설] 'feasibility study'는 '타당성 조사'라는 의미의 비즈니스 용어입니다.",
        128: "[해설] 'Anyone desiring to ~'는 '~하기를 원하는 누구든지'라는 의미로, 분사구의 수식을 받는 대명사 Anyone이 적절합니다.",
        129: "[해설] 'how to-inf'는 '~하는 방법'이라는 의미의 명사구 구조입니다.",
        130: "[해설] 문장 중간에서 '놀랍게도'라는 의미로 삽입된 부사 remarkably가 정답입니다."
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
        "source": "actual-test-03",
        "createdAt": "2026-01-21T19:23:00.000Z"
    })

with open('actual_test_3_pool.json', 'w', encoding='utf-8') as f:
    json.dump(final_pool, f, ensure_ascii=False, indent=2)

print(f"Successfully processed {len(final_pool)} questions for Actual Test 3.")
