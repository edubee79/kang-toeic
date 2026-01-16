import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 22 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 22) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 22 Part 1: Business Meetings)
# Focus: "Hyper-TOEIC" (Agendas, Discussions, Decisions)
toeic_examples_d22p1 = {
    1: ("The board discussed the items on the agenda.", "이사회는 의제에 있는 항목들을 논의했습니다."),
    2: ("The committee will convene next Tuesday.", "위원회는 다음 화요일에 모일(개최될) 것입니다."),
    3: ("He refuted the allegations against him.", "그는 자신에 대한 혐의를 부인했습니다(반박했습니다)."),
    4: ("The project requires coordination between departments.", "그 프로젝트는 부서들 간의 조정을 필요로 합니다."),
    5: ("The decision was unanimous.", "결정은 만장일치였습니다."),
    6: ("I tried to convince him to stay.", "저는 그에게 머물라고 설득하려고(확신시키려고) 노력했습니다."),
    7: ("We reached a consensus on the budget.", "우리는 예산에 대해 합의(일치된 의견)에 도달했습니다."),
    8: ("The decision was deferred until the next meeting.", "결정은 다음 회의까지 연기되었습니다(미루어졌습니다)."),
    9: ("We usually hold meetings on Mondays.", "우리는 보통 월요일에 회의를 엽니다."),
    10: ("We had to reschedule the appointment.", "우리는 약속 일정을 바꿔야 했습니다."),
    11: ("The annual general meeting is held in March.", "연례 총회는 3월에 열립니다."),
    12: ("We need to determine the cause of the problem.", "우리는 문제의 원인을 알아내야(결정해야) 합니다."),
    13: ("Please report to the main office immediately.", "즉시 본사로 출두해(보고해) 주십시오."),
    14: ("He declined to comment on the rumors.", "그는 소문에 대해 논평하기를 거부했습니다."),
    15: ("We are in the final phase of the project.", "우리는 프로젝트의 마지막 단계에 있습니다."),
    16: ("The board approved the new policy.", "이사회는 새 정책을 승인했습니다."),
    17: ("Please find the enclosed documents.", "동봉된 문서들을 확인해 주십시오."),
    18: ("The software is easy to use.", "그 소프트웨어는 사용하기 쉽습니다."),
    19: ("The meeting was recorded for training purposes.", "회의는 교육 목적으로 녹음(기록)되었습니다."),
    20: ("We welcome any suggestions for improvement.", "우리는 개선을 위한 어떤 제안이든 환영합니다."),
    21: ("Thank you for your attention to this matter.", "이 문제에 관심을 가져 주셔서 감사합니다."),
    22: ("No one objected to the proposal.", "아무도 그 제안에 반대하지 않았습니다."),
    23: ("Coincidentally, we arrived at the same time.", "우연히도, 우리는 동시에 도착했습니다."),
    24: ("The room was crowded with reporters.", "방은 기자들로 붐볐습니다."),
    25: ("The company is undergoing major changes.", "그 회사는 주요 변화들을 겪고 있습니다."),
    26: ("We await the outcome of the negotiations.", "우리는 협상의 결과를 기다리고 있습니다."),
    27: ("The proposal was narrowly approved.", "그 제안은 가까스로 승인되었습니다."),
    28: ("Opinions differ on the best approach.", "최고의 접근 방식에 대해 의견이 다릅니다."),
    29: ("We need to discuss the marketing strategy.", "우리는 마케팅 전략을 논의해야 합니다."),
    30: ("The CEO gave a speech at the conference.", "CEO는 회의에서 연설을 했습니다."),
    31: ("The manager briefed the team on the new project.", "관리자는 팀에게 새 프로젝트에 대해 간단히 설명했습니다(브리핑했습니다)."),
    32: ("Don't let noise distract you from your work.", "소음이 당신의 주의를 일에서 산만하게 하지 못하게 하십시오."),
    33: ("The school places great emphasis on discipline.", "그 학교는 규율에 큰 중점(강조)을 둡니다."),
    34: ("The press was invited to the product launch.", "언론이 제품 출시 행사에 초대되었습니다."),
    35: ("She organized the files alphabetically.", "그녀는 파일들을 알파벳순으로 정리했습니다."),
    36: ("He failed to mention the deadline.", "그는 마감 기한을 언급하지 않았습니다."),
    37: ("She made a persuasive argument.", "그녀는 설득력 있는 주장을 했습니다."),
    38: ("Thank you for being so understanding.", "그렇게 이해심을 보여 주셔서 감사합니다."),
    39: ("The meeting was adjourned for lunch.", "회의는 점심 식사를 위해 휴회되었습니다."),
    40: ("We appreciate your constructive feedback.", "우리는 당신의 건설적인 피드백에 감사드립니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d22p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day22_part1.json
with open('day22_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 22 Part 1 Created (Meetings).")
