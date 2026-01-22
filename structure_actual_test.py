import json

questions = [
    {
        "id": "ACT_01_101",
        "text": "Mr. Baron was forced to search for a new office space ______ because his assistant had already resigned.",
        "options": [{"label": "A", "text": "him"}, {"label": "B", "text": "himself"}, {"label": "C", "text": "his"}, {"label": "D", "text": "he"}],
        "correctAnswer": "B",
        "classification": "p4",
        "difficulty": 700,
        "translation": "비서가 이미 사임했기 때문에 바론 씨는 스스로 새로운 사무실 공간을 찾아야 했습니다.",
        "explanation": "[해설] 주어(Mr. Baron)를 강조하거나 동작을 주어 스스로 수행했음을 나타내는 재귀대명사 강조 용법입니다. 타동사나 전치사의 목적어가 아닌 완전한 절 뒤에서 부사처럼 쓰였습니다."
    },
    {
        "id": "ACT_01_102",
        "text": "Dentists at Smile Clinic are available ______ consultation from Monday to Sunday between 9 A.M. and 6 P.M.",
        "options": [{"label": "A", "text": "on"}, {"label": "B", "text": "for"}, {"label": "C", "text": "as"}, {"label": "D", "text": "within"}],
        "correctAnswer": "B",
        "classification": "a5",
        "difficulty": 700,
        "translation": "스마일 클리닉의 치과의사들은 월요일부터 일요일 오전 9시에서 오후 6시 사이에 상담이 가능합니다.",
        "explanation": "[해설] 형용사 available은 '~을 위해 시간이 되다, 가능하다'는 의미로 전치사 for와 주로 결합합니다."
    },
    {
        "id": "ACT_01_103",
        "text": "______ those who present their admission tickets at the main entrance will be allowed to enter the theme park.",
        "options": [{"label": "A", "text": "Only"}, {"label": "B", "text": "While"}, {"label": "C", "text": "If"}, {"label": "D", "text": "Even"}],
        "correctAnswer": "A",
        "classification": "av3",
        "difficulty": 750,
        "translation": "정문에서 입장권을 제시하는 분들만 테마파크 입장이 허용됩니다.",
        "explanation": "[해설] 문맥상 '~뿐만, 오직 ~만이'라는 제한의 의미를 가진 부사 Only가 적절합니다. those who(~하는 사람들)를 수식하고 있습니다."
    },
    {
        "id": "ACT_01_104",
        "text": "The streets ______ Hilton University were not passable to light vehicles yesterday due to a flood brought by heavy rains.",
        "options": [{"label": "A", "text": "surrounds"}, {"label": "B", "text": "surrounded"}, {"label": "C", "text": "surrounding"}, {"label": "D", "text": "surround"}],
        "correctAnswer": "C",
        "classification": "pa2",
        "difficulty": 800,
        "translation": "힐튼 대학교를 둘러싸고 있는 거리는 어제 폭우로 인한 침수로 인해 경차의 통행이 불가능했습니다.",
        "explanation": "[해설] 명사(The streets)를 뒤에서 수식하는 분사 자리입니다. 거리 자체가 대학을 둘러싸고 있는 능동의 관계이므로 현재분사인 surrounding이 정답입니다."
    },
    {
        "id": "ACT_01_105",
        "text": "Although rumors about West Telecom’s bankruptcy have spread throughout the business sector, the company has ______ to give confirmation.",
        "options": [{"label": "A", "text": "previously"}, {"label": "B", "text": "yet"}, {"label": "C", "text": "fairly"}, {"label": "D", "text": "anymore"}],
        "correctAnswer": "B",
        "classification": "voc4",
        "difficulty": 850,
        "translation": "웨스트 텔레콤의 파산 루머가 비즈니스 업계 전반에 퍼졌음에도 불구하고, 회사는 아직 이에 대한 확인을 해주지 않고 있습니다.",
        "explanation": "[해설] 'have yet to + 동사원형'은 '아직 ~하지 않았다'라는 의미의 관용 표현입니다."
    },
    {
        "id": "ACT_01_106",
        "text": "Coolduct air conditioning units are sold ______ more than thirty countries across Asia and Latin America.",
        "options": [{"label": "A", "text": "with"}, {"label": "B", "text": "in"}, {"label": "C", "text": "over"}, {"label": "D", "text": "up to"}],
        "correctAnswer": "B",
        "classification": "pr1",
        "difficulty": 700,
        "translation": "Coolduct 에어컨 장치들은 아시아와 라틴 아메리카 전역의 30개국 이상에서 판매됩니다.",
        "explanation": "[해설] '국가/지역에서'라는 장소의 범위를 나타내는 전치사 in이 적절합니다."
    },
    {
        "id": "ACT_01_107",
        "text": "______ renovation work on the sixth floor has been completed, the employees of the accounting department may go back to their workspaces.",
        "options": [{"label": "A", "text": "Now that"}, {"label": "B", "text": "Even though"}, {"label": "C", "text": "In particular"}, {"label": "D", "text": "Because of"}],
        "correctAnswer": "A",
        "classification": "c3",
        "difficulty": 750,
        "translation": "6층의 리모델링 공사가 완료되었으므로, 회계 부서 직원들은 자신들의 업무 공간으로 돌아가도 좋습니다.",
        "explanation": "[해설] '이제 ~이므로, ~이기 때문에'라는 이유를 나타내는 접속사가 필요한 자리입니다. Now that은 문장과 문장을 연결하며 원인을 나타냅니다."
    },
    {
        "id": "ACT_01_108",
        "text": "Some members of the board suggested that the acquisition of JMG Foods ______ due to the company’s financial problems.",
        "options": [{"label": "A", "text": "were postponed"}, {"label": "B", "text": "be postponed"}, {"label": "C", "text": "should postpone"}, {"label": "D", "text": "has been postponing"}],
        "correctAnswer": "B",
        "classification": "v5",
        "difficulty": 850,
        "translation": "이사회의 몇몇 위원들은 JMG 푸드의 재정적 문제 때문에 인수를 연기해야 한다고 제안했습니다.",
        "explanation": "[해설] 제안/요청의 동사(suggested) 뒤의 that절에는 '주어 + (should) + 동사원형'을 사용합니다. 인수는 연기되는 수동의 관계이므로 be postponed가 정답입니다."
    },
    {
        "id": "ACT_01_109",
        "text": "______ pastry chef applying for a job at Silver Spoon should have at least five years of professional experience in the culinary industry.",
        "options": [{"label": "A", "text": "Several"}, {"label": "B", "text": "Little"}, {"label": "C", "text": "Any"}, {"label": "D", "text": "All"}],
        "correctAnswer": "C",
        "classification": "a4",
        "difficulty": 800,
        "translation": "실버 스푼의 구직에 지원하는 어떠한 제과 주방장이라도 요리 업계에서 최소 5년의 전문 경력을 갖추어야 합니다.",
        "explanation": "[해설] 단수 가산명사(pastry chef)를 수식하면서 '어떠한 ~라도'라는 의미를 가진 수량 형용사 Any가 적절합니다. Several과 All은 복수 명사를 수식합니다."
    },
    {
        "id": "ACT_01_110",
        "text": "Some tailors working with a limited budget go to Silk House because of the ______ of its sewing supplies.",
        "options": [{"label": "A", "text": "accountability"}, {"label": "B", "text": "probability"}, {"label": "C", "text": "affordability"}, {"label": "D", "text": "liability"}],
        "correctAnswer": "C",
        "classification": "voc1",
        "difficulty": 750,
        "translation": "제한된 예산으로 작업하는 일부 재단사들은 봉제 용품의 저렴한 가격 때문에 실크 하우스에 갑니다.",
        "explanation": "[해설] '예산(budget)'과 관련된 문맥에서 '(가격의) 저렴함, 감당 가능함'을 뜻하는 affordability가 정답입니다."
    },
    {
        "id": "ACT_01_111",
        "text": "Consumers must carefully read the nutritional facts indicated ______ the labels of food products they purchase.",
        "options": [{"label": "A", "text": "of"}, {"label": "B", "text": "as"}, {"label": "C", "text": "next"}, {"label": "D", "text": "on"}],
        "correctAnswer": "D",
        "classification": "pr1",
        "difficulty": 700,
        "translation": "소비자들은 구매하는 식품의 라벨에 표시된 영양 정보를 주의 깊게 읽어야 합니다.",
        "explanation": "[해설] 표면이나 라벨에 정보가 붙어 있음을 나타낼 때 전치사 on을 사용합니다."
    },
    {
        "id": "ACT_01_112",
        "text": "Before Mr. Mosby became a supervisor, he was ______ a front desk receptionist at a hotel in Bali, Indonesia.",
        "options": [{"label": "A", "text": "formerly"}, {"label": "B", "text": "yet"}, {"label": "C", "text": "fairly"}, {"label": "D", "text": "anymore"}],
        "correctAnswer": "A",
        "classification": "av3",
        "difficulty": 700,
        "translation": "모즈비 씨는 관리자가 되기 전, 인도네시아 발리의 한 호텔에서 예전에 프런트 데스크 안내원이었습니다.",
        "explanation": "[해설] '과거에, 이전에'라는 의미로 과거의 직함이나 상태를 설명하는 부사 formerly가 적절합니다."
    },
    {
        "id": "ACT_01_113",
        "text": "All Deskman Shipping staff must always ______ phone-in orders of office supplies to clients without delay.",
        "options": [{"label": "A", "text": "respect"}, {"label": "B", "text": "deliver"}, {"label": "C", "text": "travel"}, {"label": "D", "text": "surpass"}],
        "correctAnswer": "B",
        "classification": "voc1",
        "difficulty": 700,
        "translation": "모든 Deskman Shipping 직원들은 지체 없이 고객들에게 사무용품의 전화 주문 건을 항상 배달해야 합니다.",
        "explanation": "[해설] '주문 건(orders)'을 고객에게 전달하는 문맥이므로 deliver가 정답입니다."
    },
    {
        "id": "ACT_01_114",
        "text": "Only the candidates who meet the ______ standards for the scholarship application from the Foundation will be given grants.",
        "options": [{"label": "A", "text": "anxious"}, {"label": "B", "text": "cautious"}, {"label": "C", "text": "rigorous"}, {"label": "D", "text": "spacious"}],
        "correctAnswer": "C",
        "classification": "voc2",
        "difficulty": 800,
        "translation": "재단의 장학금 신청을 위한 엄격한 기준을 충족하는 후보자들에게만 보조금이 지급될 것입니다.",
        "explanation": "[해설] '기준(standards)'을 수식하여 '엄격한 기준'이라는 연어(Collocation)를 형성하는 rigorous가 정답입니다."
    },
    {
        "id": "ACT_01_115",
        "text": "The city created several bike lanes in order to encourage citizens to decline driving to work ______ biking instead.",
        "options": [{"label": "A", "text": "in regard to"}, {"label": "B", "text": "in favor of"}, {"label": "C", "text": "in particular"}, {"label": "D", "text": "in spite of"}],
        "correctAnswer": "B",
        "classification": "pr5",
        "difficulty": 850,
        "translation": "시 당국은 시민들이 출근 시 운전을 자제하고 대신 자전거 타기를 선호하도록 장려하기 위해 여러 자전거 도로를 만들었습니다.",
        "explanation": "[해설] '~에 찬성하여, ~을 선호하여, ~을 위해'라는 의미의 복합 전치사 in favor of가 정답입니다."
    },
    {
        "id": "ACT_01_116",
        "text": "Supervisors are required to submit progress reports to the senior project manager on a monthly ______.",
        "options": [{"label": "A", "text": "basing"}, {"label": "B", "text": "based"}, {"label": "C", "text": "base"}, {"label": "D", "text": "basis"}],
        "correctAnswer": "D",
        "classification": "voc4",
        "difficulty": 700,
        "translation": "관리자들은 매달 상급 프로젝트 매니저에게 진행 보고서를 제출해야 합니다.",
        "explanation": "[해설] 'on a monthly basis'는 '매달, 월 단위로'라는 의미의 관용구입니다."
    },
    {
        "id": "ACT_01_117",
        "text": "The local government has conducted an investigation to ______ the cause of the fire in Charlton Residences.",
        "options": [{"label": "A", "text": "progress"}, {"label": "B", "text": "determine"}, {"label": "C", "text": "elevate"}, {"label": "D", "text": "decide"}],
        "correctAnswer": "B",
        "classification": "voc1",
        "difficulty": 750,
        "translation": "지방 정부는 Charlton Residences의 화재 원인을 파악하기 위해 조사를 벌였습니다.",
        "explanation": "[해설] '원인(cause) 등을 밝혀내다, 규명하다'라는 의미의 동사 determine이 가장 적절합니다."
    },
    {
        "id": "ACT_01_118",
        "text": "We have received ______ from Eton Daily about a new advertising package it wants to offer us.",
        "options": [{"label": "A", "text": "corresponds"}, {"label": "B", "text": "correspondence"}, {"label": "C", "text": "correspondent"}, {"label": "D", "text": "corresponded"}],
        "correctAnswer": "B",
        "classification": "n1",
        "difficulty": 800,
        "translation": "우리는 Eton Daily로부터 그들이 우리에게 제안하고 싶어 하는 새로운 광고 패키지에 관한 서신을 받았습니다.",
        "explanation": "[해설] 타동사(received)의 목적어인 명사 자리입니다. correspondence는 '서신, 편지'를 뜻하는 불가산 명사입니다. correspondent는 '특파원'이라는 사람 명사로 문맥상 어울리지 않습니다."
    },
    {
        "id": "ACT_01_119",
        "text": "Mr. Homer Crawford ______ chairman of Northern Energy Corporation at the company’s shareholders meeting today.",
        "options": [{"label": "A", "text": "has named"}, {"label": "B", "text": "named"}, {"label": "C", "text": "is named"}, {"label": "D", "text": "was named"}],
        "correctAnswer": "D",
        "classification": "v2",
        "difficulty": 750,
        "translation": "호머 크로포드 씨는 오늘 열린 북부 에너지 공사의 주주 총회에서 회장으로 임명되었습니다.",
        "explanation": "[해설] 크로포드 씨가 회장으로 '명명된(임명된)' 것이므로 수동태가 필요합니다. 또한 오늘 총회에서 일어난 일이므로 과거 시제인 was named가 적절합니다."
    },
    {
        "id": "ACT_01_120",
        "text": "______ the increasing popularity of the Irish rock band Cornerstone, many concert promoters have invited the group to perform in cities across the U.K.",
        "options": [{"label": "A", "text": "Regardless of"}, {"label": "B", "text": "On account of"}, {"label": "C", "text": "Aside from"}, {"label": "D", "text": "As well as"}],
        "correctAnswer": "B",
        "classification": "pr2",
        "difficulty": 800,
        "translation": "아일랜드 록 밴드 Cornerstone의 인기 상승 때문에, 많은 콘서트 기획자들이 이 그룹을 영국 전역의 도시에서 공연하도록 초대했습니다.",
        "explanation": "[해설] 뒤에 명사구(increasing popularity)가 오고, 그것이 뒤따르는 주절의 원인이 되므로 '~ 때문에'라는 뜻의 전치사 On account of가 정답입니다."
    },
    {
        "id": "ACT_01_121",
        "text": "Axer Automotive’s recent recall of the M2400-model motorcycle was the result of customer complaints ______ to malfunctioning brake lights.",
        "options": [{"label": "A", "text": "pertaining"}, {"label": "B", "text": "attempting"}, {"label": "C", "text": "subscribing"}, {"label": "D", "text": "concurring"}],
        "correctAnswer": "A",
        "classification": "pa5",
        "difficulty": 900,
        "translation": "Axer Automotive의 최근 M2400 모델 오토바이 리콜은 브레이크 등 고장과 관련된 고객 불만의 결과였습니다.",
        "explanation": "[해설] 'pertaining to'는 '~와 관련된'이라는 뜻의 분사 기반 관용구입니다."
    },
    {
        "id": "ACT_01_122",
        "text": "Many types of alternative fuels have been invented over the years, ______ of which have permanently replaced conventional energy sources.",
        "options": [{"label": "A", "text": "nothing"}, {"label": "B", "text": "none"}, {"label": "C", "text": "nobody"}, {"label": "D", "text": "neither"}],
        "correctAnswer": "B",
        "classification": "ac3",
        "difficulty": 900,
        "translation": "수년간 많은 유형의 대체 연료들이 발명되었지만, 그중 어느 것도 기존 에너지원을 영구적으로 대체하지는 못했습니다.",
        "explanation": "[해설] '부분 수량 표현 + of which' 구조입니다. '아무것도 ~않다'는 전체 부정을 나타내며 사물 명사를 받는 none이 적절합니다."
    },
    {
        "id": "ACT_01_123",
        "text": "The outstanding balance on your previous billing statement must be paid ______ the last week of December to avoid penalties.",
        "options": [{"label": "A", "text": "onto"}, {"label": "B", "text": "until"}, {"label": "C", "text": "at"}, {"label": "D", "text": "by"}],
        "correctAnswer": "D",
        "classification": "pr1",
        "difficulty": 700,
        "translation": "연체료를 피하려면 이전 고지서의 미결제 잔액을 12월 마지막 주까지 지불해야 합니다.",
        "explanation": "[해설] '지불(paid)'처럼 일회성으로 끝나는 동작의 마감 기한을 나타낼 때는 전치사 by를 사용합니다. until은 지속되는 상태에 사용합니다."
    },
    {
        "id": "ACT_01_124",
        "text": "The Transportation Department strives ______ motorists with accurate traffic updates in partnership with radio and television stations in the country.",
        "options": [{"label": "A", "text": "of providing"}, {"label": "B", "text": "to provide"}, {"label": "C", "text": "having provided"}, {"label": "D", "text": "to be provided"}],
        "correctAnswer": "B",
        "classification": "v8",
        "difficulty": 750,
        "translation": "교통부는 국내 라디오 및 텔레비전 방송국과 협력하여 운전자들에게 정확한 교통 정보를 제공하기 위해 노력하고 있습니다.",
        "explanation": "[해설] 동사 strive는 to부정사를 목적어로 취하여 '~하려고 노력하다'라는 의미를 가집니다."
    },
    {
        "id": "ACT_01_125",
        "text": "The auditorium on the sixth floor is the most ______ used venue for large company activities and business conferences.",
        "options": [{"label": "A", "text": "eligibly"}, {"label": "B", "text": "evenly"}, {"label": "C", "text": "commonly"}, {"label": "D", "text": "sharply"}],
        "correctAnswer": "C",
        "classification": "av2",
        "difficulty": 700,
        "translation": "6층의 대강당은 대규모 회사 행사와 비즈니스 컨퍼런스를 위해 가장 흔하게 사용되는 장소입니다.",
        "explanation": "[해설] '가장 흔하게(most commonly)'라는 의미로 과거분사(used)를 수식하는 부사 자리입니다."
    },
    {
        "id": "ACT_01_126",
        "text": "In business terms, a company’s furniture, equipment, and real estate properties ______ to as fixed assets.",
        "options": [{"label": "A", "text": "refer"}, {"label": "B", "text": "referred"}, {"label": "C", "text": "are referred"}, {"label": "D", "text": "have referred"}],
        "correctAnswer": "C",
        "classification": "v2",
        "difficulty": 850,
        "translation": "비즈니스 용어로, 회사의 가구, 장비, 그리고 부동산 자산들은 고정 자산이라고 불립니다.",
        "explanation": "[해설] 'refer to A as B (A를 B라고 부르다/언급하다)' 구문의 수동태인 'A be referred to as B' 구조입니다. 주어가 복수이므로 are referred가 정답입니다."
    },
    {
        "id": "ACT_01_127",
        "text": "As a newly licensed realtor, Mr. McNabbney felt ______ after the sale of his first million-dollar property.",
        "options": [{"label": "A", "text": "invigorated"}, {"label": "B", "text": "simple"}, {"label": "C", "text": "ordinary"}, {"label": "D", "text": "elaborate"}],
        "correctAnswer": "A",
        "classification": "a2",
        "difficulty": 850,
        "translation": "갓 면허를 딴 부동산 중개인으로서, 맥냅니 씨는 자신의 첫 백만 달러짜리 매물을 매각한 후 활기를 얻었습니다(기운이 났습니다).",
        "explanation": "[해설] 2형식 동사 felt 뒤의 주격 보어 자리입니다. 맥냅니 씨가 활력을 '느낀' 것이므로 과거분사 형태의 형용사인 invigorated가 정답입니다."
    },
    {
        "id": "ACT_01_128",
        "text": "Matrix Mobility conducted a thorough financial audit of each of its regional offices, most of ______ recorded significant deficits within the last six months.",
        "options": [{"label": "A", "text": "they"}, {"label": "B", "text": "all"}, {"label": "C", "text": "what"}, {"label": "D", "text": "which"}],
        "correctAnswer": "D",
        "classification": "ac3",
        "difficulty": 900,
        "translation": "매트릭스 모빌리티는 각 지역 사무소에 대해 철저한 재무 감사를 실시했으며, 그중 대부분은 지난 6개월 동안 상당한 적자를 기록했습니다.",
        "explanation": "[해설] 선행사(regional offices)를 수식하면서 문장과 문장을 연결하는 관계대명사가 필요한 자리입니다. 수량 표현(most) 뒤에 전치사 of와 함께 쓰이는 관계대명사는 which입니다."
    },
    {
        "id": "ACT_01_129",
        "text": "Most people forget to consider the cost of car insurance ______ purchasing a vehicle for the first time.",
        "options": [{"label": "A", "text": "in addition"}, {"label": "B", "text": "when"}, {"label": "C", "text": "instead"}, {"label": "D", "text": "even though"}],
        "correctAnswer": "B",
        "classification": "c5",
        "difficulty": 750,
        "translation": "대부분의 사람들은 처음 차량을 구매할 때 차량 보험료를 고려하는 것을 잊곤 합니다.",
        "explanation": "[해설] 접속사(when) 뒤에 주어+be동사가 생략된 분사구문 형태입니다. '~할 때'라는 문맥이 가장 자연스럽습니다."
    },
    {
        "id": "ACT_01_130",
        "text": "Ms. Loraine Evans will ______ the role of head chef in Mr. Robinson’s absence while he is on vacation with his family.",
        "options": [{"label": "A", "text": "back up"}, {"label": "B", "text": "take over"}, {"label": "C", "text": "look after"}, {"label": "D", "text": "take in"}],
        "correctAnswer": "B",
        "classification": "voc4",
        "difficulty": 750,
        "translation": "로레인 에반스 씨는 로빈슨 씨가 가족과 휴가를 떠나 자리를 비운 동안 수석 주방장의 역할을 인계받을 것입니다.",
        "explanation": "[해설] '역할이나 직책을 인계받다, 떠맡다'라는 의미의 구동사 take over가 정답입니다."
    }
]

with open('actual_test_1_pool.json', 'w', encoding='utf-8') as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

print(f"Successfully structured {len(questions)} actual test questions.")
