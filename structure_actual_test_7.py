import json

questions_data = [
    {"id": 101, "ans": "A", "cls": "a5", "text": "Caridell Science Museum trustees are expected to be--------- --of all the museum’s operations.", "opts": ["aware", "current", "serious", "alert"]},
    {"id": 102, "ans": "D", "cls": "n1", "text": "With the completion of its airport, Honokai Island’s tourism-- ---------has improved dramatically.", "opts": ["economical", "economic", "economize", "economy"]},
    {"id": 103, "ans": "D", "cls": "av1", "text": "The software for tracking orders has been ------------ successful as it has greatly decreased time spent on the task.", "opts": ["haltingly", "intimately", "permissibly", "markedly"]},
    {"id": 104, "ans": "D", "cls": "ac3", "text": "Lately the community sports program has had a surplus of volunteers,-------------are students.", "opts": ["inasmuch as", "the reason being", "because of them", "most of whom"]},
    {"id": 105, "ans": "A", "cls": "a1", "text": "The use of high-quality yet---------- machine parts led to a decrease in costs for Mr. Kim’s factory.", "opts": ["inexpensive", "unhappy", "incomplete", "undecided"]},
    {"id": 106, "ans": "B", "cls": "av3", "text": "Ms. Ling is not here today, but she---------- attends every library board meeting.", "opts": ["previously", "typically", "almost", "well"]},
    {"id": 107, "ans": "B", "cls": "com1", "text": "Investing in---------properties as possible can be risky but is often lucrative.", "opts": ["as much", "as many", "so much", "so many"]},
    {"id": 108, "ans": "C", "cls": "n1", "text": "Please inform Ms. Montgomery of any _______ to your office supplies order before 2:00 p.m.", "opts": ["announcements", "conversions", "adjustments", "commitments"]},
    {"id": 109, "ans": "C", "cls": "pr1", "text": "The songs on Sophia Vestra’s new album are-------- the most innovative musical arrangements of her career.", "opts": ["beside", "over", "among", "upon"]},
    {"id": 110, "ans": "C", "cls": "pa1", "text": "Panjan Air, an airline--------- in Singapore, is offering budget flights to Bangkok and Jakarta.", "opts": ["stored", "stayed", "based", "moved"]},
    {"id": 111, "ans": "B", "cls": "a1", "text": "The-------- meadowlands surrounding the museum are designated as wildlife habitat.", "opts": ["ethical", "vast", "absolute", "economic"]},
    {"id": 112, "ans": "D", "cls": "p3", "text": "-------of Mitesh Sandu’s international performances was filmed for the documentary.", "opts": ["All", "Others", "Their own", "Each one"]},
    {"id": 113, "ans": "B", "cls": "av1", "text": "Based on new data, Min-Soo Trucking’s proposal to expand its business to Southeast Asia would be only---------- successful.", "opts": ["conspicuously", "marginally", "regrettably", "intriguingly"]},
    {"id": 114, "ans": "D", "cls": "pr1", "text": "The project meeting has been rescheduled ------- tomorrow because of the bad weather.", "opts": ["in", "by", "out", "for"]},
    {"id": 115, "ans": "C", "cls": "com1", "text": "Smooth Tek’s newest software makes it much--------- for business owners to create newsletters.", "opts": ["easy", "easily", "easier", "ease"]},
    {"id": 116, "ans": "C", "cls": "com3", "text": "The National Overview is the fourth-------------- distributed newspaper in the northeastern region.", "opts": ["wide", "widen", "most widely", "more widely"]},
    {"id": 117, "ans": "B", "cls": "a5", "text": "The employee satisfaction survey results are---------to differ among departments.", "opts": ["important", "likely", "probable", "recent"]},
    {"id": 118, "ans": "D", "cls": "c3", "text": "Please review the repair estimate carefully ------- it has been received from the maintenance department.", "opts": ["then", "while", "ever since", "as soon as"]},
    {"id": 119, "ans": "D", "cls": "n1", "text": "------- of the marketing assistant include coordinating focus groups and writing detailed reports.", "opts": ["Promotions", "Offerings", "Productions", "Responsibilities"]},
    {"id": 120, "ans": "C", "cls": "pr2", "text": "The lawyers report that the merger was successfully concluded------------ last-minute negotiations.", "opts": ["as well as", "overall", "thanks to", "even if"]},
    {"id": 121, "ans": "D", "cls": "inv1", "text": "------- in the news, the Honorable Cynthia Rengle is now making headlines with her proposal to drastically reduce local taxes.", "opts": ["Less", "Enough", "Apart", "Seldom"]},
    {"id": 122, "ans": "C", "cls": "av3", "text": "Despite being the audience’s least favorite film at the Star Film Festival, Lost Dog --------won the critics’ award for best animation.", "opts": ["furthermore", "without", "nevertheless", "neither"]},
    {"id": 123, "ans": "D", "cls": "av1", "text": "Ms. Mills has correctly predicted that sales would increase-- --------- as the company's radio advertisement continues to air.", "opts": ["arguably", "reportedly", "productively", "incrementally"]},
    {"id": 124, "ans": "A", "cls": "a1", "text": "The Physical Therapy Association is committed to keeping costs-------- for its certification programs.", "opts": ["affordable", "permitted", "cutting", "necessary"]},
    {"id": 125, "ans": "C", "cls": "n1", "text": "To remain on schedule, editors must submit all------- to the book to the authors by Friday.", "opts": ["ideas", "essays", "revisions", "suggestions"]},
    {"id": 126, "ans": "A", "cls": "pr5", "text": "The award-winning film Underwater Secrets promotes awareness--------ocean pollution and its effects on our planet.", "opts": ["of", "to", "from", "with"]},
    {"id": 127, "ans": "B", "cls": "pa1", "text": "BYF Company specializes in-------- promotional items to help companies advertise their brand.", "opts": ["personally", "personalized", "personality", "personalizes"]},
    {"id": 128, "ans": "D", "cls": "p3", "text": "Mr. Singh took notes on--------the focus group discussed during the morning session.", "opts": ["each", "several", "another", "everything"]},
    {"id": 129, "ans": "B", "cls": "av3", "text": "Last year, Tadaka Computer Solutions ranked third------- in regional earnings.", "opts": ["together", "overall", "consecutively", "generally"]},
    {"id": 130, "ans": "D", "cls": "voc4", "text": "The timeline for the pathway lighting project was extended to--------input from the environmental commission.", "opts": ["use up", "believe in", "make into", "allow for"]}
]

def get_explanation(id, ans, cls):
    exps = {
        101: "[해설] 'be aware of' (~을 알고 있다) 형용사 숙어 문제입니다. trustees가 박물관 운영 전반을 '알고 있어야' 한다는 의미가 자연스럽습니다.",
        102: "[해설] 'Honokai Island’s tourism economy' (관광 경제) 복합 명사 문제입니다. (B) economic은 형용사로 뒤에 명사가 필요합니다.",
        103: "[해설] 동사(has been successful)를 수식하는 부사 자리로, '현저하게, 눈에 띄게'라는 의미의 markedly가 정답입니다.",
        104: "[해설] '수량 표현 + of whom' 관계대명사 문제입니다. 앞의 volunteers를 선행사로 받아 '그들 중 대부분'이라는 의미를 만듭니다.",
        105: "[해설] 명사(machine parts)를 수식하는 형용사 자리로, yet(그러나 여전히)과 연결되어 '고품질이지만 저렴한'이라는 대조적 의미의 inexpensive가 정답입니다.",
        106: "[해설] '보통, 전형적으로'라는 의미의 부사 typically가 매 회의에 참석한다는 반복적 습관과 잘 어울립니다.",
        107: "[해설] 'as many + 복수명사 + as possible' 구문입니다. properties가 복수이므로 many를 사용합니다.",
        108: "[해설] 주문에 대한 '조정, 수정'이라는 의미의 adjustments가 문맥상 정답입니다.",
        109: "[해설] 'among + 최상급 + 복수명사' (가장 ~한 것들 중 하나) 구문입니다.",
        110: "[해설] 'airline based in Singapore' (싱가포르에 본사를 둔 항공사) 형태로 명사를 뒤에서 수식하는 과거분사 문제입니다.",
        111: "[해설] 명사(meadowlands)를 수식하는 형용사 자리로 '광활한'이라는 의미의 vast가 어울립니다.",
        112: "[해설] 단수 취급하는 'Each one of ~' 구문으로, 동사(was filmed)와 수 일치가 일치하는 형태입니다.",
        113: "[해설] 'marginally successful' (미미하게/약간 성공적인)이라는 의미로 쓰였습니다. (B) marginally가 정답입니다.",
        114: "[해설] 'reschedule A for B' (A를 B로 일정을 변경하다)의 수동태 형태입니다.",
        115: "[해설] 비교급 강조 부사 'much'와 함께 쓰여 '훨씬 더 쉬운'이라는 의미의 easier가 정답입니다.",
        116: "[해설] 'fourth most widely distributed' (네 번째로 가장 널리 배포되는) 최상급 구조 부사 문제입니다.",
        117: "[해설] 'be likely to' (~할 가능성이 있다) 구문으로 설문 결과가 부서마다 다를 가능성이 있다는 문맥입니다.",
        118: "[해설] 'as soon as' (~하자마자) 시간 접속사 문제입니다. 감수 부서에서 도착하자마자 확인하라는 지시입니다.",
        119: "[해설] 동사(include)의 주어 자리이며 '책임, 업무'를 뜻하는 Responsibilities가 정답입니다.",
        120: "[해설] '~ 덕분에'라는 의미의 전치사구 thanks to가 문맥상 합병이 성공적으로 마무리된 이유를 설명합니다.",
        121: "[해설] 부정 부사 Seldom이 문두로 나와 강조된 형태입니다. '뉴스에 좀처럼 나오지 않던 ~가 헤드라인을 장식하고 있다'는 문맥입니다.",
        122: "[해설] '그럼에도 불구하고'라는 의미의 nevertheless가 최악의 평가와 평론가상 수상이라는 대조적 상황을 연결합니다.",
        123: "[해설] 동사(increase)를 수식하여 '점진적으로'라는 의미를 나타내는 부사 incrementally가 정답입니다.",
        124: "[해설] 'keep + 목적어 + 목적격 보어(형용사)' 구조입니다. 비용을 '저렴하게(affordable)' 유지한다는 의미입니다.",
        125: "[해설] 책에 대한 '수정, 개정'을 의미하는 revisions가 정답입니다.",
        126: "[해설] 'awareness of' (~에 대한 인식) 명사+전치사 연어 문제입니다.",
        127: "[해설] 'personalized promotional items' (개인 맞춤형 홍보물) 형태로 명사를 수식하는 분사 형용사 문제입니다.",
        128: "[해설] 'everything the focus group discussed' (포커스 그룹이 논의한 모든 것)로 everything 뒤에 목적격 관계대명사가 생략된 구조입니다.",
        129: "[해설] 'ranked third overall' (종합 3위)이라는 의미로 쓰이는 부사 overall이 정답입니다.",
        130: "[해설] 'allow for' (~을 감안하다, 고려하다) 구동사 문제입니다. 환경 위원회의 의견을 반영하기 위해 일정을 연장했다는 문맥입니다."
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
        "source": "actual-test-07",
        "createdAt": "2026-01-21T19:30:00.000Z"
    })

with open('actual_test_7_pool.json', 'w', encoding='utf-8') as f:
    json.dump(final_pool, f, ensure_ascii=False, indent=2)

print(f"Successfully processed {len(final_pool)} questions for Actual Test 7.")
