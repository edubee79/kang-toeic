import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 23 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 23) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 23 Part 1: Conferences & Employment)
# Focus: "Hyper-TOEIC" (Business Events, HR, Work Conditions)
toeic_examples_d23p1 = {
    1: ("The city will host the international trade fair.", "그 도시는 국제 무역 박람회를 주최할 것입니다."),
    2: ("We published our annual report.", "우리는 연례 보고서를 출판했습니다."),
    3: ("The purpose of the meeting is to elect a new chairman.", "회의의 목적은 새 의장을 선출하는 것입니다."),
    4: ("Please enroll in the training course by Friday.", "금요일까지 훈련 과정에 등록해 주십시오."),
    5: ("Professor Smith gave a lecture on economics.", "스미스 교수는 경제학에 관해 강의를 했습니다."),
    6: ("Every participant received a certificate.", "모든 참가자는 수료증을 받았습니다."),
    7: ("I will attend the board meeting tomorrow.", "저는 내일 이사회 회의에 참석할 것입니다."),
    8: ("The manager encouraged the staff to work hard.", "관리자는 직원들에게 열심히 일하도록 장려했습니다."),
    9: ("She is on maternity leave.", "그녀는 출산 휴가 중입니다."),
    10: ("I followed the consultant's recommendation.", "저는 컨설턴트의 추천(권고)을 따랐습니다."),
    11: ("The press conference was held at the hotel.", "기자 회견은 호텔에서 열렸습니다."),
    12: ("The meeting is scheduled for 2 PM.", "회의는 오후 2시로 예정되어 있습니다."),
    13: ("The price includes tax and service charge.", "가격은 세금과 봉사료를 포함합니다."),
    14: ("The negotiation resulted in a new contract.", "협상은 새 계약이라는 결과를 낳았습니다(새 계약이 되었습니다)."),
    15: ("You must register for the conference online.", "당신은 회의에 온라인으로 등록해야 합니다."),
    16: ("The job requires fluency in English.", "그 일은 영어 유창함을 요구합니다."),
    17: ("We are grateful for your support.", "우리는 당신의 지지에 감사합니다."),
    18: ("Employees will remain paid for overtime.", "직원들은 초과 근무(야근)에 대해 급여를 받을 것입니다."),
    19: ("It is your responsibility to finish the project.", "프로젝트를 끝내는 것은 당신의 책임입니다."),
    20: ("The director gave his assent to the proposal.", "이사는 그 제안에 찬성했습니다(승인했습니다)."),
    21: ("We regard him as the best candidate.", "우리는 그를 최고의 후보자로 간주합니다."),
    22: ("We have reached a tentative agreement.", "우리는 잠정적인 합의에 도달했습니다."),
    23: ("Always greet customers with a welcome smile.", "항상 환영하는 미소로 고객을 맞이하십시오."),
    24: ("The company held a function to celebrate the merger.", "회사는 합병을 축하하기 위해 행사를 열었습니다."),
    25: ("The construction will commence next month.", "건설은 다음 달에 시작될 것입니다."),
    26: ("Our main objective is to increase sales.", "우리의 주된 목표는 매출을 늘리는 것입니다."),
    27: ("We are excited about the new product launch.", "우리는 새 제품 출시에 대해 들떠 있습니다."),
    28: ("You can claim reimbursement for travel expenses.", "당신은 출장 경비에 대해 상환을 청구할 수 있습니다."),
    29: ("Employees execute fair treatment.", "직원들은 공정한 대우를 기대합니다."),
    30: ("It is an honor to receive this award.", "이 상을 받게 되어 영광(명예)입니다."),
    31: ("The CEO emphasized the need for innovation.", "CEO는 혁신의 필요성을 강조했습니다."),
    32: ("The competition attracted many entries.", "그 대회는 많은 참가자(참가작)를 끌어들였습니다."),
    33: ("Employees received a year-end bonus.", "직원들은 연말 보너스를 받았습니다."),
    34: ("The salary is commensurate with experience.", "급여는 경력에 비례합니다."),
    35: ("He earns a high income.", "그는 높은 수입을 벌어들입니다."),
    36: ("Problems may arise during the installation.", "설치 중에 문제들이 발생할 수 있습니다."),
    37: ("The factory relies on manual labor.", "그 공장은 육체노동에 의존합니다."),
    38: ("The labor union demanded higher wages.", "노동조합은 더 높은 임금을 요구했습니다."),
    39: ("We must improve existing equipment.", "우리는 기존 장비를 개선해야 합니다."),
    40: ("The company was accused of exploiting workers.", "그 회사는 노동자들을 착취한다는 비난을 받았습니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d23p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day23_part1.json
with open('day23_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 23 Part 1 Created (Conferences & Employment).")
