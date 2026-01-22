import json
import re

raw_text = r"""
실전문제  2.
101. _______ newspapers reported the bankruptcy of Needleman Corp., the company’s accountants were trying to find a way to stay in business.
(A) Given that
109. The chairman arrived in time -......- the opening ceremony of the new furniture showroom in Sacramento.
(A) still (B) here
(B) As a result of
(C) As for
(D) Even as
102. Most applicants to Shim Accounting Services have completed a-------internship at the company headquarters.
(A) clear
(B) present
(C) taken
(C) for
(D) while
110. Burger Factory’s menu items may vary --------due to the availability of ingredients and necessary supplies.
(A) regional
(B) regionally
(D) paid
103. Hoffmann’s modular homes are fully -......-before being shipped from the manufacturing plant to ensure the accuracy of their fabrication.
(A) established
(B) ordered
(C) satisfied
(C) region
(D) regionalize
111. Replacement keys for your automobile may be ordered directly from our dealership --------you can demonstrate proof of ownership.
(A) provided that
(D) assembled
104. The tablet computer shuts off--------it has a fully charged battery, so the computer should be returned to the dealer.
(A) so that
(B) as though
(B) as though
(C) in fact
(D) owing to
112. The elevator that is--------the fire exit will be unavailable tomorrow between 1 RM. and 4 P.M.
(A) close
(B) next
(C) from
(C) even if
(D) near
(D) at least
105. -------a small festival celebrating the town's heritage, the Clarytown Celebration has become one of the biggest annual events in the area.
(A) Origin
(B) Originate
(C) Originated
(D) Originally
113. Tachibana Pharmaceuticals’ new method of -------chemical solutions will increase efficiency in the laboratory.
(A) combine
(B) combinations
(C) combining
(D) combines
114. It is nearly impossible for people with severe hip problems to carry heavy objects ------ injuring themselves.
106. The building inspection has been postponed until next week-- -----that the electrical work can be completed.
(A) also
(B) when
(C) than
(A) without
(D) so
107. The cafeteria in Morris Hall offers------- breakfast and lunch for Arai and Ramos associates.
(B) because
(C) except
(D) unless
115. Chae Media, Inc. plans to-------the renovation of its publishing house in Seoul.
(A) send away for
(B) move forward with
(A) complimentary
(B) accountable
(C) replaced
(D) secured
108. Based on our records, your furniture and personal belongings were--------to your new home address three days ago.
(A) arrived
(B) exchanged
(C) stored
(C) take back from
(D) watch out for
116. Your Viral Buster antivirus program will --------on May 20, so please renew your subscription to protect your computer from threats.
(A) expire
(B) install
(C) combine
(D) implement
(D) shipped
1실전문제  2.
117. -------Ms. Park appreciated the job offer from Seon Advisory Group, she declined the opportunity because she would have to relocate.
(A) Now that (B) Only if
125. It took some time for the manager to choose--------office space to rent, as he had to consult his head office first.
(A) where
(B) which
(C) While
(D) Whether
118. Although the project was Ms. Darwin’s idea, the credit belongs--------to her staff members because of their considerable efforts.
(C) how
(D) when
126. The training seminar with Mr. Davidson will begin on time, so everyone is advised to be ------
(A) sudden
(B) punctual
(A) mostly
(B) nearly
(C) swiftly
(D) intently
119. The marketing team at Bescura Cars has created a series of-- -----humorous commercials, designed to appeal to younger consumers.
(A) economically (B) exactly
(C) superior
(D) immediate
127. All the reference books and novels that Alicia plans to sell at the book fair are ____
(A) himself
(B) his
(C) deliberately
(D) patiently
120. The new non-fat yogurt made by Nutri Plus received positive reviews--------sampled by a group of consumers.
(C) he
(D) him
128. Passengers are reminded to follow travel safety guidelines while--------the cruise ship to avoid accidents.
(A) across (B) into
(C) aboard
(A) when
(B) who
(C) only
(D) which
121. Bilto miniature model planes contain hundreds of small parts and must be assembled with-------.
(A) contact
(B) level
(D) through
129. Terre Haute’s L50 washing machine works more--------than other brands, making it suitable for nighttime laundry.
(A) quieter
(B) quietest
(C) quietly
(C) care
(D) amount
122. Our summer trip to Mt. Everest last year was quite exhausting, but it was-------- worth it.
(A) whatever
(B) furthermore
(D) quietness
130. The financial figures released by Tsai and Wu International---- ---only to expenses from the month of July.
(A) organize
(B) ponder
(C) correspond
(D) subscribe
(C) nevertheless
(D) likewise
123. Participation this year was the largest------- in the history of the Securitas conference.
(A) totally
(B) ever
(C) soon
(D) hardly
124. Strong strategic-thinking-------and sharp marketing instincts are important qualities for a successful product manager.
(A) skills
(B) findings
(C) realities
(D) approximations
"""

# Hardcoded metadata for correct reconstruction
questions_data = [
    {"id": 101, "ans": "D", "cls": "c3", "text": "_______ newspapers reported the bankruptcy of Needleman Corp., the company’s accountants were trying to find a way to stay in business.", "opts": ["Given that", "As a result of", "As for", "Even as"]},
    {"id": 102, "ans": "D", "cls": "a1", "text": "Most applicants to Shim Accounting Services have completed a-------internship at the company headquarters.", "opts": ["clear", "present", "taken", "paid"]},
    {"id": 103, "ans": "D", "cls": "v2", "text": "Hoffmann’s modular homes are fully -......-before being shipped from the manufacturing plant to ensure the accuracy of their fabrication.", "opts": ["established", "ordered", "satisfied", "assembled"]},
    {"id": 104, "ans": "C", "cls": "c3", "text": "The tablet computer shuts off--------it has a fully charged battery, so the computer should be returned to the dealer.", "opts": ["so that", "as though", "even if", "at least"]},
    {"id": 105, "ans": "D", "cls": "av3", "text": "-------a small festival celebrating the town's heritage, the Clarytown Celebration has become one of the biggest annual events in the area.", "opts": ["Origin", "Originate", "Originated", "Originally"]},
    {"id": 106, "ans": "D", "cls": "c3", "text": "The building inspection has been postponed until next week-- -----that the electrical work can be completed.", "opts": ["also", "when", "than", "so"]},
    {"id": 107, "ans": "A", "cls": "a1", "text": "The cafeteria in Morris Hall offers------- breakfast and lunch for Arai and Ramos associates.", "opts": ["complimentary", "accountable", "replaced", "secured"]},
    {"id": 108, "ans": "D", "cls": "v2", "text": "Based on our records, your furniture and personal belongings were--------to your new home address three days ago.", "opts": ["arrived", "exchanged", "stored", "shipped"]},
    {"id": 109, "ans": "C", "cls": "pr1", "text": "The chairman arrived in time -......- the opening ceremony of the new furniture showroom in Sacramento.", "opts": ["still", "here", "for", "while"]},
    {"id": 110, "ans": "B", "cls": "av1", "text": "Burger Factory’s menu items may vary --------due to the availability of ingredients and necessary supplies.", "opts": ["regional", "regionally", "region", "regionalize"]},
    {"id": 111, "ans": "A", "cls": "c3", "text": "Replacement keys for your automobile may be ordered directly from our dealership --------you can demonstrate proof of ownership.", "opts": ["provided that", "as though", "in fact", "owing to"]},
    {"id": 112, "ans": "D", "cls": "pr1", "text": "The elevator that is--------the fire exit will be unavailable tomorrow between 1 P.M. and 4 P.M.", "opts": ["close", "next", "from", "near"]},
    {"id": 113, "ans": "C", "cls": "g1", "text": "Tachibana Pharmaceuticals’ new method of -------chemical solutions will increase efficiency in the laboratory.", "opts": ["combine", "combinations", "combining", "combines"]},
    {"id": 114, "ans": "A", "cls": "pr3", "text": "It is nearly impossible for people with severe hip problems to carry heavy objects ------ injuring themselves.", "opts": ["without", "because", "except", "unless"]},
    {"id": 115, "ans": "B", "cls": "voc4", "text": "Chae Media, Inc. plans to-------the renovation of its publishing house in Seoul.", "opts": ["send away for", "move forward with", "take back from", "watch out for"]},
    {"id": 116, "ans": "A", "cls": "voc1", "text": "Your Viral Buster antivirus program will --------on May 20, so please renew your subscription to protect your computer from threats.", "opts": ["expire", "install", "combine", "implement"]},
    {"id": 117, "ans": "C", "cls": "c3", "text": "-------Ms. Park appreciated the job offer from Seon Advisory Group, she declined the opportunity because she would have to relocate.", "opts": ["Now that", "Only if", "While", "Whether"]},
    {"id": 118, "ans": "A", "cls": "av2", "text": "Although the project was Ms. Darwin’s idea, the credit belongs--------to her staff members because of their considerable efforts.", "opts": ["mostly", "nearly", "swiftly", "intently"]},
    {"id": 119, "ans": "C", "cls": "av2", "text": "The marketing team at Bescura Cars has created a series of-- -----humorous commercials, designed to appeal to younger consumers.", "opts": ["economically", "exactly", "deliberately", "patiently"]},
    {"id": 120, "ans": "A", "cls": "c5", "text": "The new non-fat yogurt made by Nutri Plus received positive reviews--------sampled by a group of consumers.", "opts": ["when", "who", "only", "which"]},
    {"id": 121, "ans": "C", "cls": "voc2", "text": "Bilto miniature model planes contain hundreds of small parts and must be assembled with-------.", "opts": ["contact", "level", "care", "amount"]},
    {"id": 122, "ans": "C", "cls": "av3", "text": "Our summer trip to Mt. Everest last year was quite exhausting, but it was-------- worth it.", "opts": ["whatever", "furthermore", "nevertheless", "likewise"]},
    {"id": 123, "ans": "B", "cls": "av3", "text": "Participation this year was the largest------- in the history of the Securitas conference.", "opts": ["totally", "ever", "soon", "hardly"]},
    {"id": 124, "ans": "A", "cls": "n1", "text": "Strong strategic-thinking-------and sharp marketing instincts are important qualities for a successful product manager.", "opts": ["skills", "findings", "realities", "approximations"]},
    {"id": 125, "ans": "B", "cls": "ac1", "text": "It took some time for the manager to choose--------office space to rent, as he had to consult his head office first.", "opts": ["where", "which", "how", "when"]},
    {"id": 126, "ans": "B", "cls": "a2", "text": "The training seminar with Mr. Davidson will begin on time, so everyone is advised to be ------", "opts": ["sudden", "punctual", "superior", "immediate"]},
    {"id": 127, "ans": "B", "cls": "p1", "text": "All the reference books and novels that Alicia plans to sell at the book fair are ____", "opts": ["himself", "his", "he", "him"]},
    {"id": 128, "ans": "C", "cls": "pr1", "text": "Passengers are reminded to follow travel safety guidelines while--------the cruise ship to avoid accidents.", "opts": ["across", "into", "aboard", "through"]},
    {"id": 129, "ans": "C", "cls": "av1", "text": "Terre Haute’s L50 washing machine works more--------than other brands, making it suitable for nighttime laundry.", "opts": ["quieter", "quietest", "quietly", "quietness"]},
    {"id": 130, "ans": "C", "cls": "voc1", "text": "The financial figures released by Tsai and Wu International---- ---only to expenses from the month of July.", "opts": ["organize", "ponder", "correspond", "subscribe"]}
]

def get_explanation(id, ans, cls):
    exps = {
        101: "[해설] 'Even as'는 '~하는 바로 그 때에'라는 의미로 두 동작이 동시에 일어남을 나타내는 접속사입니다.",
        102: "[해설] 'paid internship'은 '유급 인턴십'이라는 의미의 관용적 표현입니다.",
        103: "[해설] 조립식 주택(modular homes)은 배송되기 전에 '조립(assembled)'된다는 문맥이 적절합니다.",
        104: "[해설] 배터리가 완충된 상태 '일지라도(even if)' 컴퓨터가 꺼진다는 양보의 문맥이 적절합니다.",
        105: "[해설] 문장 맨 앞에서 분사구문처럼 쓰여 '원래는 ~였지만'이라는 의미를 나타내는 부사 Originally가 정답입니다.",
        106: "[해설] 'so that' (~하기 위해서) 구문에서 so만 빈칸으로 나온 형태입니다.",
        107: "[해설] 'complimentary breakfast'는 '무료 조식'을 뜻하는 토익 빈출 표현입니다.",
        108: "[해설] 가구와 개인 소지품이 새로운 주소로 '배송되었다(shipped)'는 문맥이 적절합니다.",
        109: "[해설] 'in time for'는 '~에 시간 맞춰 제때에'라는 의미의 전치사 구문입니다.",
        110: "[해설] 동사 vary를 수식하여 '지역적으로 다양하다'라는 의미를 만드는 부사 regionally가 정답입니다.",
        111: "[해설] 'provided that'은 '만약 ~라면(=if)'의 의미를 가진 접속사입니다.",
        112: "[해설] 'near the fire exit'은 '비상구 근처에'라는 의미로 장소의 전치사 near가 적절합니다.",
        113: "[해설] 전치사 of의 목적어 자리이며 뒤에 목적어(chemical solutions)를 취하므로 동명사 combining이 정답입니다.",
        114: "[해설] 'without -ing'는 '~하지 않고'라는 의미로, 부상 없이 무거운 물건을 드는 것이 불가능하다는 문맥입니다.",
        115: "[해설] 'move forward with'는 '~을 진행시키다'라는 의미의 구동사입니다.",
        116: "[해설] 프로그램의 구독 등이 '만료되다'라는 의미의 expire가 정답입니다.",
        117: "[해설] 'While' (~이지만, ~인 반면에)은 양보의 의미를 나타내는 접속사로 제안은 고맙지만 거절했다는 문맥에 적절합니다.",
        118: "[해설] 'mostly' (주로, 대부분)는 부사로서 공로가 주로 직원들에게 돌아간다는 의미를 만듭니다.",
        119: "[해설] 'deliberately humorous'는 '의도적으로 유머러스한'이라는 의미의 부사+형용사 조합입니다.",
        120: "[해설] 'when sampled' (샘플링되었을 때)는 접속사 when 뒤에 '주어+be동사'가 생략된 분사구문입니다.",
        121: "[해설] 'with care'는 '조심스럽게, 주의 깊게'라는 의미의 전치사구입니다.",
        122: "[해설] 'nevertheless' (그럼에도 불구하고)는 앞의 힘든 상황과 뒤의 가치 있는 상황을 연결하는 부사입니다.",
        123: "[해설] 'largest ever'는 '역대 최대 규모'를 뜻하는 관용적 표현입니다.",
        124: "[해설] 'strategic-thinking skills'는 '전략적 사고 기술'이라는 복합 명사입니다.",
        125: "[해설] 'choose which office space' (어떤 사무실 공간을 고를지)로 의문 형용사 which가 명사구를 이끕니다.",
        126: "[해설] 정해진 시간에 시작하므로 '시간을 엄수하는(punctual)' 상태여야 한다는 문맥입니다.",
        127: "[해설] 'are his' (그의 것이다)로 소유 대명사 his가 보어 자리에 쓰였습니다.",
        128: "[해설] 'while aboard' (탑승 중에)는 전치사 aboard가 cruise ship과 결합하여 장소 상태를 나타냅니다.",
        129: "[해설] 동사 works를 수식하며 비교급 more와 함께 쓰인 부사 quietly가 정답입니다.",
        130: "[해설] 'correspond to'는 '~에 부합하다, ~에 해당하다'라는 의미의 동사 구문입니다."
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
        "translation": "", # Leaving for now as it's generated during upload or handled via AI
        "explanation": get_explanation(q["id"], q["ans"], q["cls"]),
        "source": "actual-test-02",
        "createdAt": "2026-01-21T19:21:00.000Z"
    })

with open('actual_test_2_pool.json', 'w', encoding='utf-8') as f:
    json.dump(final_pool, f, ensure_ascii=False, indent=2)

print(f"Successfully processed {len(final_pool)} questions for Actual Test 2.")
