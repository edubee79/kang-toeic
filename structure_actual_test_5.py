import json

questions_data = [
    {"id": 101, "ans": "D", "cls": "com1", "text": "Jennro Inc. has released an innovative Sureshot 456D camera that is a much------ version to use than earlier models.", "opts": ["simple", "simplest", "simplicity", "simpler"]},
    {"id": 102, "ans": "C", "cls": "c3", "text": "......stock runs out during the sale, a customer will be issued a rain check for the item that has sold out.", "opts": ["Except that", "In exchange for", "In the event that", "By means of"]},
    {"id": 103, "ans": "D", "cls": "av3", "text": "Thanks to Komtex Company’s skillful mechanics,------any factory machine problem remains unresolved for more than a couple of days.", "opts": ["quite", "nearly", "rather", "scarcely"]},
    {"id": 104, "ans": "B", "cls": "pr5", "text": "Documentary filmmaker Ryan Potter, ------the Beauplace Historical Society, will produce and direct a series about the town’s origins.", "opts": ["on the occasion of", "in collaboration with", "by process of", "on the part of"]},
    {"id": 105, "ans": "A", "cls": "voc4", "text": "Ms. Johnson........a feasible solution to the customer’s network problem.", "opts": ["came up with", "dropped by", "looked in on", "ran out of"]},
    {"id": 106, "ans": "C", "cls": "pr5", "text": "The human resources department is........ pressure to find a replacement for the senior accountant.", "opts": ["within", "through", "under", "among"]},
    {"id": 107, "ans": "B", "cls": "v4", "text": "Mansfield Chemical built an extension that ........additional space for the newly purchased machinery.", "opts": ["will have furnished", "would furnish", "had furnished", "to furnish"]},
    {"id": 108, "ans": "B", "cls": "p3", "text": "-------who still wish to submit applications after the deadline must pay a $45 late fee in order to be considered.", "opts": ["Anyone", "Those", "Though", "Seldom"]},
    {"id": 109, "ans": "D", "cls": "n1", "text": "........at the Latipa Film Festival increased by nearly 30 percent this year thanks to an online marketing campaign.", "opts": ["Attend", "Attendee", "Attendant", "Attendance"]},
    {"id": 110, "ans": "D", "cls": "pr3", "text": "During the summer, rooms at the Marigold Hotel are always fully booked........the large size of the facility.", "opts": ["thereby", "even though", "aside from", "notwithstanding"]},
    {"id": 111, "ans": "A", "cls": "voc1", "text": "Ms. Nissim, the founder of Hartwell Industries, will........a talk on effective sales strategies at the marketing convention.", "opts": ["deliver", "register", "showcase", "imply"]},
    {"id": 112, "ans": "D", "cls": "voc2", "text": "Many people have succeeded in reducing household waste by buying fewer........ products.", "opts": ["basic", "decisive", "effective", "disposable"]},
    {"id": 113, "ans": "B", "cls": "v2", "text": "The next work of art for sale........one of the finest paintings ever exhibited at the Cole Morton Museum.", "opts": ["has considered", "is considered", "is considering", "considered"]},
    {"id": 114, "ans": "D", "cls": "voc1", "text": "The tenor received widespread........for his superb performances at the annual opera festival.", "opts": ["criticism", "persuasion", "deliberation", "recognition"]},
    {"id": 115, "ans": "C", "cls": "pa1", "text": "Delegates from the industry’s most widely ........social media marketing firms will speak at next week’s summit.", "opts": ["respectful", "respecting", "respected", "respective"]},
    {"id": 116, "ans": "B", "cls": "av3", "text": "TNP Tech will allow users to download its new software for free until September 1 but will start charging for it.........", "opts": ["since", "thereafter", "consequently", "now"]},
    {"id": 117, "ans": "D", "cls": "g1", "text": "After........to build a new home in Victoria, Mr. Redmond hired an interior designer to assist him with decorating the house.", "opts": ["decide", "decides", "decided", "deciding"]},
    {"id": 118, "ans": "B", "cls": "av3", "text": "With the financial crisis over and banks eager to provide loans, it has never been ........easy for the average person to own a home.", "opts": ["which", "this", "some", "who"]},
    {"id": 119, "ans": "D", "cls": "v2", "text": "Hector Calma........project leader for all Axos activities based in South Africa and is busy preparing to move there for an extended period.", "opts": ["appoint", "appointed", "will appoint", "has been appointed"]},
    {"id": 120, "ans": "C", "cls": "voc1", "text": "Even though subscriptions to the The Marinberg Herald’s print edition have steadily declined, its online........ continues to grow.", "opts": ["definition", "policy", "readership", "broadcast"]},
    {"id": 121, "ans": "B", "cls": "voc1", "text": "The mayor was able to........her plans for improving job creation through the help of local businesses.", "opts": ["operate", "solidify", "depart", "prevent"]},
    {"id": 122, "ans": "B", "cls": "voc1", "text": "The job comes with several significant ........including health insurance and three weeks of paid leave.", "opts": ["figures", "benefits", "profits", "values"]},
    {"id": 123, "ans": "B", "cls": "com4", "text": "According to the study, the........a marketing campaign is among young people, the better a product is likely to sell.", "opts": ["popular", "more popular", "popularity", "most popular"]},
    {"id": 124, "ans": "C", "cls": "voc1", "text": "New cycling safety regulations have just been........by the Ministry of Transportation.", "opts": ["constructed", "engaged", "enacted", "measured"]},
    {"id": 125, "ans": "C", "cls": "ac3", "text": "A banquet was held to honor five employees, all of........have worked at the company for more than 20 years.", "opts": ["them", "us", "whom", "which"]},
    {"id": 126, "ans": "C", "cls": "voc2", "text": "Tremont Airlines is offering-------rates to passengers willing to travel late at night.", "opts": ["shortened", "fragile", "reduced", "preserved"]},
    {"id": 127, "ans": "C", "cls": "av3", "text": "Employee assessments are........carried out in December but may be delayed until January.", "opts": ["visibly", "casually", "typically", "slightly"]},
    {"id": 128, "ans": "B", "cls": "voc1", "text": "The public’s reactions to the monument in Penn Park reveal a difference in........ regarding how they feel tax money should be spent.", "opts": ["imagination", "perspective", "overview", "reflection"]},
    {"id": 129, "ans": "C", "cls": "voc1", "text": "The bank officer........that it would take Mr. Gordon two more years to settle his remaining debt if he continued to repay it in small amounts.", "opts": ["divided", "deducted", "calculated", "prolonged"]},
    {"id": 130, "ans": "A", "cls": "pr1", "text": "The purchasing manager can only order parts from companies that are found........ the company’s list of approved suppliers.", "opts": ["on", "by", "with", "around"]}
]

def get_explanation(id, ans, cls):
    exps = {
        101: "[해설] 'than'이 있으므로 비교급 형태인 simpler가 정답입니다. much는 비교급을 강조합니다.",
        102: "[해설] 'In the event that'은 '~할 경우에는, 만약 ~라면(=if)'의 의미를 가진 접속사구입니다.",
        103: "[해설] 'scarcely'는 '거의 ~않다'라는 의미의 부정 부사로, 문제가 거의 해결되지 않은 상태로 남지 않는다는 문맥을 완성합니다.",
        104: "[해설] 'in collaboration with'는 '~와 협력하여'라는 의미의 복합 전치사입니다.",
        105: "[해설] 'come up with'는 '(해결책 등을) 생각해내다, 제시하다'라는 의미의 구동사입니다.",
        106: "[해설] 'under pressure'는 '압박을 받는'이라는 의미의 관용구입니다.",
        107: "[해설] 주절의 시제가 과거(built)이며, 시제 일치 또는 목적/결과를 나타내는 가정법 과거의 보수적 쓰임으로 would furnish가 정답입니다.",
        108: "[해설] '~하는 사람들'이라는 의미로 관계대명사절의 수식을 받는 대명사 Those가 적절합니다. Anyone은 단수 취급하므로 wish에 s가 붙어야 합니다.",
        109: "[해설] 문장의 주어 자리이며 '참석자 수'를 의미하는 불가산 명사인 Attendance가 정답입니다.",
        110: "[해설] 'notwithstanding'은 '~에도 불구하고'라는 의미의 전치사입니다. 시설의 규모에도 불구하고 예약이 가득 찼다는 문맥은 어색하므로, '시설의 규모에도 불구하고'가 아닌 '그럼에도 불구하고' 혹은 다른 의미를 고려해야 하나, 여기서는 '양보'의 전치사로 쓰였습니다.",
        111: "[해설] 'deliver a talk/speech'는 '연설하다, 강연하다'를 뜻하는 연어(Collocation)입니다.",
        112: "[해설] 'disposable products'는 '일회용품'을 의미합니다.",
        113: "[해설] 예술 작품이 ~로 '여겨지는' 것이므로 수동태인 is considered가 정답입니다.",
        114: "[해설] 'receive recognition'은 '인정을 받다'라는 의미입니다.",
        115: "[해설] 'widely respected'는 '널리 존경받는(명망 있는)'이라는 의미의 수동 형태 분사 형용사입니다.",
        116: "[해설] 'thereafter'는 '그 이후에'라는 의미의 시간 부사입니다.",
        117: "[해설] 전치사 After 뒤에서 목적어(to build ~)를 취하는 동명사 deciding이 정답입니다.",
        118: "[해설] 'never been this easy'에서 this는 '이렇게나, 이 정도로'라는 의미의 지시 부사로 쓰였습니다.",
        119: "[해설] 헥터 칼마가 프로젝트 리더로 '학정된(임명된)' 것이므로 수동태가 필요하며, 현재의 상태를 나타내는 현재완료 수동태 has been appointed가 적절합니다.",
        120: "[해설] 신문이나 잡지의 '독자 수'를 의미하는 readership이 정답입니다.",
        121: "[해설] 계획을 '공고히 하다, 구체화하다'라는 의미의 solidify가 문맥상 정답입니다.",
        122: "[해설] 보험이나 휴가 등 직업과 관련된 '혜택, 복리후생'을 뜻하는 benefits가 정답입니다.",
        123: "[해설] 'The + 비교급, the + 비교급' 구문입니다. (The more popular ..., the better ...)",
        124: "[해설] 법규 등을 '제정하다'라는 의미의 enact가 정답입니다.",
        125: "[해설] 'all of whom' 구조입니다. 선행사(five employees)를 받는 관계대명사 목적격 whom이 필요합니다.",
        126: "[해설] 'reduced rates'는 '할인된 요금'을 의미합니다.",
        127: "[해설] 'typically'는 '보통, 전형적으로'라는 의미로 일상적인 업무 주기를 나타냅니다.",
        128: "[해설] 'difference in perspective'는 '관점의 차이'라는 의미입니다.",
        129: "[해설] 빚을 갚는 데 걸리는 시간을 '계산했다'는 의미의 calculated가 문맥상 정답입니다.",
        130: "[해설] 'on the list'는 '리스트에 있는'이라는 표현으로 전치사 on과 함께 쓰입니다."
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
        "source": "actual-test-05",
        "createdAt": "2026-01-21T19:26:00.000Z"
    })

with open('actual_test_5_pool.json', 'w', encoding='utf-8') as f:
    json.dump(final_pool, f, ensure_ascii=False, indent=2)

print(f"Successfully processed {len(final_pool)} questions for Actual Test 5.")
