import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 15 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 15) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 15 Part 4: Advanced - Legal, Mediation & Investigations)
# Focus: "Hyper-TOEIC" (Formal Business, Part 7 Legal Documents & Articles)
toeic_examples_d15p4 = {
    137: ("We must take the client's complaint seriously.", "우리는 고객의 불만 사항을 진지하게 받아들여야 합니다."),
    138: ("A moderator will facilitate the panel discussion.", "사회자(중재자)가 패널 토론을 진행할 것입니다."),
    139: ("The organization prohibits soliciting donations.", "그 단체는 기부 금을 요청하는 것(간청하는 것)을 금지합니다."),
    140: ("We maintain strong commercial relations with them.", "우리는 그들과 강력한 통상 관계를 유지하고 있습니다."),
    141: ("It is no wonder that the policy was rejected.", "그 정책이 거부된 것은 당연합니다."),
    142: ("He refused to relinquish his position.", "그는 자신의 직위를 포기하기를 거부했습니다."),
    143: ("Mediation helped resolve the labor dispute.", "중재는 노사 분쟁을 해결하는 데 도움이 되었습니다."),
    144: ("VIP members receive preferential treatment.", "VIP 회원들은 우대를 받습니다."),
    145: ("The report contained a significant omission.", "그 보고서에는 중요한 누락(생략)이 포함되어 있었습니다."),
    146: ("The company had a rocky start this year.", "그 회사는 올해 장애가 많은(불안정한) 출발을 했습니다."),
    147: ("The bank increased my credit limit.", "은행이 제 신용대출 한도액을 늘려주었습니다."),
    148: ("We need a trustworthy partner for this venture.", "이 사업을 위해서는 믿을 수 있는 파트너가 필요합니다."),
    149: ("The investigation ended inconclusively.", "그 조사는 결론 없이(확정적이지 않게) 끝났습니다."),
    150: ("We decided to subcontract the manufacturing.", "우리는 제조를 하청 계약하기로 결정했습니다."),
    151: ("His recollection of the event was vague.", "그 사건에 대한 그의 회상은 희미했습니다."),
    152: ("They are about to embark on a new project.", "그들은 새로운 프로젝트에 착수하려고 합니다."),
    153: ("Security measures foiled the robbery attempt.", "보안 조치들이 강도 시도를 좌절시켰습니다."),
    154: ("A down payment is required to reserve the car.", "차를 예약하려면 계약금(첫 할부금)이 필요합니다."),
    155: ("The article portrays the CEO as a visionary.", "그 기사는 CEO를 선구자로 묘사합니다(그립니다)."),
    156: ("Technicians need to reinstall the software.", "기술자들이 소프트웨어를 재설치해야 합니다."),
    157: ("This is an annotated edition of the contract.", "이것은 주석이 달린 계약서 판본입니다."),
    158: ("Jurors must judge the case impartially.", "배심원들은 사건을 공명정대하게(치우치지 않게) 판단해야 합니다."),
    159: ("Please think over the proposal before deciding.", "결정하기 전에 제안을 심사숙고해 주십시오."),
    160: ("The city will repave the damaged roads.", "시는 파손된 도로를 재포장할 것입니다."),
    161: ("The dispute originated in a misunderstanding.", "그 분쟁은 오해에서 시작되었습니다."),
    162: ("The hospital has an affiliation with the university.", "그 병원은 대학과 제휴(합병/협력) 관계를 맺고 있습니다."),
    163: ("We hired a subcontractor for the electrical work.", "우리는 전기 작업을 위해 하청업자를 고용했습니다."),
    164: ("That argument is beside the point.", "그 주장은 요점을 벗어났습니다."),
    165: ("We cannot afford to run the risk of failure.", "우리는 실패의 위험을 무릅쓸 여유가 없습니다."),
    166: ("A service was held in remembrance of the founder.", "설립자를 추모하여(기억하여) 예배가 열렸습니다."),
    167: ("Binding arbitration is required by the contract.", "구속력 있는 중재가 계약에 의해 요구됩니다."),
    168: ("The provision applies to all employees.", "그 조항은 모든 직원들에게 적용됩니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d15p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day15_part4.json
with open('day15_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 15 Part 4 Created (Advanced Legal).")
