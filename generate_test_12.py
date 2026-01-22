import json
import os

questions = [
    {
        "id": "q1201",
        "text": "Please congratulate Alan Schmit,-------- of the Leadership Award in Nursing at Knoll Hospital.",
        "options": [
            {"label": "A", "text": "won"},
            {"label": "B", "text": "wins"},
            {"label": "C", "text": "winning"},
            {"label": "D", "text": "winner"}
        ],
        "correctAnswer": "D",
        "classification": "n1",
        "testId": 12,
        "translation": "Knoll 병원에서 수여하는 간호 부문 리더십 상의 수상자인 Alan Schmit 씨를 축하해 주십시오.",
        "explanation": "빈칸은 동격의 콤마 뒤에서 Alan Schmit을 설명하는 명사 자리입니다. '수상자'라는 의미의 명사 (D) winner가 정답입니다."
    },
    {
        "id": "q1202",
        "text": "The------- of videos to electronic press releases can help companies showcase their products.",
        "options": [
            {"label": "A", "text": "content"},
            {"label": "B", "text": "addition"},
            {"label": "C", "text": "pictures"},
            {"label": "D", "text": "promotion"}
        ],
        "correctAnswer": "B",
        "classification": "n1",
        "testId": 12,
        "translation": "전자 보도 자료에 비디오를 추가하는 것은 기업들이 제품을 선보이는 데 도움이 될 수 있다.",
        "explanation": "전자 보도 자료에 비디오를 '추가'한다는 의미가 되어야 자연스러우므로 (B) addition이 정답입니다. addition A to B는 'B에 A를 추가함'이라는 의미로 자주 쓰입니다."
    },
    {
        "id": "q1203",
        "text": "When leaving the auditorium, please exit -------- the doors on the lower level.",
        "options": [
            {"label": "A", "text": "except"},
            {"label": "B", "text": "inside"},
            {"label": "C", "text": "without"},
            {"label": "D", "text": "through"}
        ],
        "correctAnswer": "D",
        "classification": "pr1",
        "testId": 12,
        "translation": "강당을 나갈 때, 아래층에 있는 문을 통해서 나가 주시기 바랍니다.",
        "explanation": "문을 '통과하여' 나간다는 의미가 되어야 하므로 장소의 통과를 나타내는 전치사 (D) through가 정답입니다."
    },
    {
        "id": "q1204",
        "text": "The Ford Group’s proposed advertising campaign is by far the most-------- we have seen so far.",
        "options": [
            {"label": "A", "text": "innovate"},
            {"label": "B", "text": "innovative"},
            {"label": "C", "text": "innovations"},
            {"label": "D", "text": "innovatively"}
        ],
        "correctAnswer": "B",
        "classification": "a1",
        "testId": 12,
        "translation": "Ford Group이 제안한 광고 캠페인은 우리가 지금까지 본 것 중 단연코 가장 혁신적이다.",
        "explanation": "비교급/최상급(the most)의 수식을 받아 보어 역할을 할 수 있는 형용사 자리입니다. 따라서 (B) innovative가 정답입니다."
    },
    {
        "id": "q1205",
        "text": "------ receiving the engineering award, Ms. Kwon made a point of thanking longtime mentors.",
        "options": [
            {"label": "A", "text": "Onto"},
            {"label": "B", "text": "Unlike"},
            {"label": "C", "text": "About"},
            {"label": "D", "text": "Upon"}
        ],
        "correctAnswer": "D",
        "classification": "pr5",
        "testId": 12,
        "translation": "공학상을 받자마자, Kwon 씨는 오랜 멘토들에게 반드시 감사를 표했다.",
        "explanation": "Upon/On -ing는 '~하자마자'라는 의미의 관용 표현입니다. 상을 '받자마자' 감사를 표했다는 문맥이 적절하므로 (D) Upon이 정답입니다."
    },
    {
        "id": "q1206",
        "text": "Please read the list of--------qualifications to ensure that you have the necessary education and experience for the position.",
        "options": [
            {"label": "A", "text": "slight"},
            {"label": "B", "text": "equal"},
            {"label": "C", "text": "obliged"},
            {"label": "D", "text": "essential"}
        ],
        "correctAnswer": "D",
        "classification": "a1",
        "testId": 12,
        "translation": "해당 직책에 필요한 교육과 경험을 갖추었는지 확인하기 위해 필수 자격 요건 목록을 읽어 보시기 바랍니다.",
        "explanation": "빈칸은 명사 qualifications를 수식하는 형용사 자리입니다. 문맥상 '필수적인' 자격을 의미하는 (D) essential이 가장 적절합니다."
    },
    {
        "id": "q1207",
        "text": "The actors held an additional rehearsal -------- perfect their performance in the final scene.",
        "options": [
            {"label": "A", "text": "considerably"},
            {"label": "B", "text": "in order to"},
            {"label": "C", "text": "nevertheless"},
            {"label": "D", "text": "as a result of"}
        ],
        "correctAnswer": "B",
        "classification": "c3",
        "testId": 12,
        "translation": "배우들은 마지막 장면의 연기를 완벽하게 하기 위해 추가 리허설을 가졌다.",
        "explanation": "빈칸 뒤의 동사 원형 perfect와 결합하여 목적(~하기 위해서)을 나타낼 수 있는 표현은 (B) in order to입니다."
    },
    {
        "id": "q1208",
        "text": "RZT Technology will double the size of its Toronto laboratory to--------the organization’s rapid growth.",
        "options": [
            {"label": "A", "text": "assign"},
            {"label": "B", "text": "investigate"},
            {"label": "C", "text": "experience"},
            {"label": "D", "text": "accommodate"}
        ],
        "correctAnswer": "D",
        "classification": "v1",
        "testId": 12,
        "translation": "RZT Technology는 조직의 급격한 성장을 수용하기 위해 토론토 실험실의 규모를 두 배로 늘릴 것이다.",
        "explanation": "조직의 성장에 맞추어 공간이나 인원 등을 '수용하다, 맞추다'라는 의미의 (D) accommodate가 정답입니다."
    },
    {
        "id": "q1209",
        "text": "The Williamsport Hotel is an ideal venue for the conference because of its-------- to the airport.",
        "options": [
            {"label": "A", "text": "achievement"},
            {"label": "B", "text": "proximity"},
            {"label": "C", "text": "competence"},
            {"label": "D", "text": "exception"}
        ],
        "correctAnswer": "B",
        "classification": "n1",
        "testId": 12,
        "translation": "Williamsport 호텔은 공항과의 인접성 때문에 컨퍼런스를 위한 이상적인 장소이다.",
        "explanation": "공항과 '가깝다'는 의미의 명사 proximity(인접성)가 정답입니다. 보통 proximity to의 형태로 쓰입니다."
    },
    {
        "id": "q1210",
        "text": "------ poorly the high-speed printer may be functioning, it is still making copies that are adequate for our purposes.",
        "options": [
            {"label": "A", "text": "Rather"},
            {"label": "B", "text": "Seldom"},
            {"label": "C", "text": "However"},
            {"label": "D", "text": "Thoroughly"}
        ],
        "correctAnswer": "C",
        "classification": "c5",
        "testId": 12,
        "translation": "고속 프린터가 아무리 제대로 작동하지 않더라도, 여전히 우리 목적에 충분한 복사본을 만들어내고 있다.",
        "explanation": "복합관계부사 However는 'However + 형용사/부사 + 주어 + 동사'의 어순으로 '아무리 ~할지라도'라는 양보의 의미를 나타냅니다."
    },
    {
        "id": "q1211",
        "text": "Staff at the Bismarck Hotel were-------- helpful to us during our stay.",
        "options": [
            {"label": "A", "text": "quite"},
            {"label": "B", "text": "enough"},
            {"label": "C", "text": "far"},
            {"label": "D", "text": "early"}
        ],
        "correctAnswer": "A",
        "classification": "av1",
        "testId": 12,
        "translation": "Bismarck 호텔 직원들은 우리가 머무는 동안 우리에게 아주 도움이 되었다.",
        "explanation": "형용사 helpful을 수식하여 '매우, 꽤'라는 의미를 더하는 부사 (A) quite가 정답입니다. enough는 형용사 뒤에서 수식합니다."
    },
    {
        "id": "q1212",
        "text": "Management announced that all salespeople would be receiving a bonus this year,------- in time for summer vacations.",
        "options": [
            {"label": "A", "text": "just"},
            {"label": "B", "text": "as"},
            {"label": "C", "text": "only"},
            {"label": "D", "text": "by"}
        ],
        "correctAnswer": "A",
        "classification": "av3",
        "testId": 12,
        "translation": "경영진은 모든 영업 사원들이 올해 보너스를 받을 것이라고 발표했는데, 여름 휴가에 딱 맞춰 지급될 예정이다.",
        "explanation": "특정 시점에 '딱 맞춰'라는 의미를 강조하는 부사 (A) just가 전치사구 in time for를 수식하기에 가장 적절합니다."
    },
    {
        "id": "q1213",
        "text": "All produce transported by Gocargo Trucking is refrigerated ------- upon pickup to prevent spoilage.",
        "options": [
            {"label": "A", "text": "lately"},
            {"label": "B", "text": "promptly"},
            {"label": "C", "text": "potentially"},
            {"label": "D", "text": "clearly"}
        ],
        "correctAnswer": "B",
        "classification": "av1",
        "testId": 12,
        "translation": "Gocargo Trucking에 의해 운송되는 모든 농산물은 부패를 방지하기 위해 픽업 즉시 냉장 보관된다.",
        "explanation": "수동태 동사구 is refrigerated를 수식하며 '즉시, 지체 없이'라는 의미를 가진 (B) promptly가 가장 적절합니다."
    },
    {
        "id": "q1214",
        "text": "Of all the truck models available today, it can be difficult to figure out------- would best suit your company’s needs.",
        "options": [
            {"label": "A", "text": "when"},
            {"label": "B", "text": "why"},
            {"label": "C", "text": "which"},
            {"label": "D", "text": "where"}
        ],
        "correctAnswer": "C",
        "classification": "ac3",
        "testId": 12,
        "translation": "오늘날 이용 가능한 모든 트럭 모델 중에서, 어느 것이 귀사의 필요에 가장 적합한지 파악하는 것은 어려울 수 있다.",
        "explanation": "정해진 범위(Of all the truck models) 내에서 '어느 것'을 선택하는 의미이므로 의문 대명사 (C) which가 정답입니다."
    },
    {
        "id": "q1215",
        "text": "At Derwin Securities, trainees alternate ------ attending information sessions and working closely with assigned mentors.",
        "options": [
            {"label": "A", "text": "along"},
            {"label": "B", "text": "against"},
            {"label": "C", "text": "between"},
            {"label": "D", "text": "near"}
        ],
        "correctAnswer": "C",
        "classification": "pr1",
        "testId": 12,
        "translation": "Derwin Securities에서, 교육생들은 정보 세션 참석과 지정된 멘토와의 긴밀한 업무를 번갈아 가며 수행한다.",
        "explanation": "두 가지 활동(A and B) 사이를 번갈아 한다는 의미이므로 전치사 (C) between이 적절합니다. alternate between A and B는 'A와 B를 번갈아 하다'라는 표현입니다."
    },
    {
        "id": "q1216",
        "text": "Belinda McKay fans who are-------- to the author’s formal writing style will be surprised by her latest biography.",
        "options": [
            {"label": "A", "text": "fortunate"},
            {"label": "B", "text": "readable"},
            {"label": "C", "text": "comparable"},
            {"label": "D", "text": "accustomed"}
        ],
        "correctAnswer": "D",
        "classification": "a5",
        "testId": 12,
        "translation": "Belinda McKay의 격식 있는 집필 스타일에 익숙한 팬들은 그녀의 최신 전기에 놀랄 것이다.",
        "explanation": "be accustomed to(~에 익숙하다)는 숙어 표현입니다. 문맥상 저자의 스타일에 '익숙한' 팬들이 상반된 최신작에 놀랄 것이라는 의미가 자연스럽습니다."
    },
    {
        "id": "q1217",
        "text": "We congratulate all Riverside employees, whose--------effort has resulted in a 20 percent reduction in waste disposal costs.",
        "options": [
            {"label": "A", "text": "collect"},
            {"label": "B", "text": "collective"},
            {"label": "C", "text": "collects"},
            {"label": "D", "text": "collector"}
        ],
        "correctAnswer": "B",
        "classification": "a1",
        "testId": 12,
        "translation": "모든 Riverside 직원들을 축하합니다. 그들의 공동의 노력으로 폐기물 처리 비용이 20% 절감되었습니다.",
        "explanation": "빈칸은 명사 effort를 수식하는 형용사 자리입니다. '단합된, 공동의'라는 뜻의 (B) collective가 정답입니다."
    },
    {
        "id": "q1218",
        "text": "The staff must------- as much market-research data as possible before planning the advertising campaign.",
        "options": [
            {"label": "A", "text": "equip"},
            {"label": "B", "text": "compile"},
            {"label": "C", "text": "endorse"},
            {"label": "D", "text": "compose"}
        ],
        "correctAnswer": "B",
        "classification": "v1",
        "testId": 12,
        "translation": "직원들은 광고 캠페인을 계획하기 전에 가능한 한 많은 시장 조사 자료를 수집해야 한다.",
        "explanation": "여러 곳의 자료를 모아 '수집하다, 편집하다'라는 의미의 (B) compile이 정답입니다."
    },
    {
        "id": "q1219",
        "text": "Customers can wait in the reception area --------our mechanics complete the car repairs.",
        "options": [
            {"label": "A", "text": "whether"},
            {"label": "B", "text": "except"},
            {"label": "C", "text": "while"},
            {"label": "D", "text": "during"}
        ],
        "correctAnswer": "C",
        "classification": "c3",
        "testId": 12,
        "translation": "고객들은 정비사들이 자동차 수리를 완료하는 동안 접수처에서 기다릴 수 있다.",
        "explanation": "뒤에 주어(our mechanics)와 동사(complete)를 갖춘 절이 오므로 접속사가 필요합니다. '~하는 동안'이라는 의미의 접속사는 (C) while입니다. during은 전치사입니다."
    },
    {
        "id": "q1220",
        "text": "To receive an electronic reminder when payment is due, set up an online account ------- Albright Bank.",
        "options": [
            {"label": "A", "text": "of"},
            {"label": "B", "text": "about"},
            {"label": "C", "text": "over"},
            {"label": "D", "text": "with"}
        ],
        "correctAnswer": "D",
        "classification": "pr1",
        "testId": 12,
        "translation": "결제일이 되었을 때 전자 알림을 받으려면, Albright Bank에 온라인 계좌를 개설하십시오.",
        "explanation": "특정 은행에 계좌를 가지고 있거나 개설할 때 전치사 with를 사용하여 an account with a bank라고 표현합니다."
    },
    {
        "id": "q1221",
        "text": "All identifying information has been----------- from this letter of complaint so that it can be used for training purposes.",
        "options": [
            {"label": "A", "text": "produced"},
            {"label": "B", "text": "extended"},
            {"label": "C", "text": "removed"},
            {"label": "D", "text": "resolved"}
        ],
        "correctAnswer": "C",
        "classification": "pa1",
        "testId": 12,
        "translation": "교육용으로 사용할 수 있도록 이 불만 제기 편지에서 모든 신원 정보가 삭제되었습니다.",
        "explanation": "문맥상 신원 정보를 '삭제하다, 제거하다'라는 의미가 되어야 하므로 (C) removed가 정답입니다."
    },
    {
        "id": "q1222",
        "text": "Table reservations for--------- greater than ten must be made at least one day in advance.",
        "options": [
            {"label": "A", "text": "plates"},
            {"label": "B", "text": "meals"},
            {"label": "C", "text": "sizes"},
            {"label": "D", "text": "parties"}
        ],
        "correctAnswer": "D",
        "classification": "n1",
        "testId": 12,
        "translation": "10명 이상의 일행에 대한 테이블 예약은 최소 하루 전에 이루어져야 한다.",
        "explanation": "party는 '정당'이나 '파티' 외에도 '일행, 단체'라는 뜻이 있습니다. 문맥상 10인 이상의 단체를 의미하는 (D) parties가 정답입니다."
    },
    {
        "id": "q1223",
        "text": "Online shoppers who experience long waits for their orders tend--------- the business low ratings.",
        "options": [
            {"label": "A", "text": "have given"},
            {"label": "B", "text": "gave"},
            {"label": "C", "text": "to give"},
            {"label": "D", "text": "giving"}
        ],
        "correctAnswer": "C",
        "classification": "g_inf",
        "testId": 12,
        "translation": "주문 후 오래 기다려야 하는 온라인 쇼핑객들은 해당 업체에 낮은 평점을 주는 경향이 있다.",
        "explanation": "tend는 to 부정사를 목적어로 취하는 동사입니다 (tend to do: ~하는 경향이 있다). 따라서 (C) to give가 정답입니다."
    },
    {
        "id": "q1224",
        "text": "Dr. Yuina Hashimoto recently added another doctor to her practice,---------- allowing more patients to be seen.",
        "options": [
            {"label": "A", "text": "that"},
            {"label": "B", "text": "thus"},
            {"label": "C", "text": "which"},
            {"label": "D", "text": "so that"}
        ],
        "correctAnswer": "B",
        "classification": "av3",
        "testId": 12,
        "translation": "Yuina Hashimoto 박사는 최근 진료소에 의사를 한 명 더 추가했고, 그리하여 더 많은 환자들이 진료를 받을 수 있게 되었다.",
        "explanation": "앞선 상황에 대한 결과로 '그리하여, 따라서'라는 의미를 더하며 현재분사 구문을 이끄는 부사 (B) thus가 가장 적절합니다."
    },
    {
        "id": "q1225",
        "text": "Aki Katsuro’s latest novel is his most exciting-------- and is sure to make Radin Books’ best-seller list.",
        "options": [
            {"label": "A", "text": "just"},
            {"label": "B", "text": "later"},
            {"label": "C", "text": "yet"},
            {"label": "D", "text": "very"}
        ],
        "correctAnswer": "C",
        "classification": "av3",
        "testId": 12,
        "translation": "Aki Katsuro의 최신 소설은 그의 작품 중 지금까지 가장 흥미진진하며, Radin Books의 베스트셀러 리스트에 오를 것이 확실하다.",
        "explanation": "최상급 형용사 뒤에서 '지금까지 중 가장 ~한'이라는 의미를 강조하는 부사 (C) yet이 정답입니다."
    },
    {
        "id": "q1226",
        "text": "This free mobile app provides---------- calendar updates, so salespeople will never miss an appointment.",
        "options": [
            {"label": "A", "text": "casual"},
            {"label": "B", "text": "equal"},
            {"label": "C", "text": "continual"},
            {"label": "D", "text": "eventual"}
        ],
        "correctAnswer": "C",
        "classification": "a1",
        "testId": 12,
        "translation": "이 무료 모바일 앱은 지속적인 캘린더 업데이트를 제공하여, 영업 사원들이 약속을 놓치지 않게 해준다.",
        "explanation": "약속을 놓치지 않으려면 업데이트가 '지속적인, 빈번한' 상태여야 하므로 (C) continual이 가장 적절합니다."
    },
    {
        "id": "q1227",
        "text": "Most senior managers approved the architect's proposal for the office layout, although-------- expressed concerns about the cost.",
        "options": [
            {"label": "A", "text": "one"},
            {"label": "B", "text": "one another"},
            {"label": "C", "text": "each other"},
            {"label": "D", "text": "other"}
        ],
        "correctAnswer": "A",
        "classification": "p3",
        "testId": 12,
        "translation": "비용에 대해 우려를 표한 관리자도 한 명 있었지만, 대부분의 고위급 관리자들은 사무실 배치에 대한 건축가의 제안을 승인했다.",
        "explanation": "앞서 언급된 'senior managers' 중 한 명을 지칭하는 대명사 (A) one이 주어 자리로 적절합니다. although 뒤에 단수 동사 expressed와 호응합니다."
    },
    {
        "id": "q1228",
        "text": "Wrazen Associates--------- a summary with a list of recommendations as a routine part of any audit.",
        "options": [
            {"label": "A", "text": "realizes"},
            {"label": "B", "text": "induces"},
            {"label": "C", "text": "causes"},
            {"label": "D", "text": "issues"}
        ],
        "correctAnswer": "D",
        "classification": "v1",
        "testId": 12,
        "translation": "Wrazen Associates는 모든 회계 감사의 정기적인 절차로서 권고 사항 목록이 포함된 요약본을 발행한다.",
        "explanation": "문서나 보고서 등을 '발행하다, 발급하다'라는 의미의 동사 (D) issues가 정답입니다."
    },
    {
        "id": "q1229",
        "text": "Sinee’s Catering is always-------- to deliver outstanding food to your special events.",
        "options": [
            {"label": "A", "text": "ready"},
            {"label": "B", "text": "skillful"},
            {"label": "C", "text": "complete"},
            {"label": "D", "text": "delicious"}
        ],
        "correctAnswer": "A",
        "classification": "a5",
        "testId": 12,
        "translation": "Sinee’s Catering은 여러분의 특별한 행사에 뛰어난 음식을 제공할 준비가 항상 되어 있습니다.",
        "explanation": "be ready to do(~할 준비가 되어 있다)는 표현입니다. 업체가 서비스를 제공할 준비가 되었다는 문맥이 가장 자연스럽습니다."
    },
    {
        "id": "q1230",
        "text": "At Sloat Publishing, interns are assigned to a------- of positions with increasing responsibility.",
        "options": [
            {"label": "A", "text": "frequency"},
            {"label": "B", "text": "length"},
            {"label": "C", "text": "shortage"},
            {"label": "D", "text": "series"}
        ],
        "correctAnswer": "D",
        "classification": "n1",
        "testId": 12,
        "translation": "Sloat Publishing에서 인턴들은 점차 책임이 막중해지는 일련의 직책들에 배치된다.",
        "explanation": "a series of는 '일련의, 연속적인'이라는 뜻의 표현입니다. 여러 직책을 단계적으로 거친다는 문맥이므로 (D) series가 정답입니다."
    }
]

output = {
    "testId": 12,
    "title": "고급반 실전문제풀이 12회",
    "questions": questions
}

# Write snippet to file
with open('test_12_snippet.ts', 'w', encoding='utf-8') as f:
    f.write(",\n")
    f.write(json.dumps(output, ensure_ascii=False, indent=4))

print("Snippet for Test 12 generated.")
