import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 24 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 24) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 24 Part 1: Personnel & Management)
# Focus: "Hyper-TOEIC" (Promotions, Hiring, Performance Reviews)
toeic_examples_d24p1 = {
    1: ("The board appointed him as the new CEO.", "이사회는 그를 새로운 CEO로 임명했습니다."),
    2: ("Employees receive a performance appraisal annually.", "직원들은 매년 업무 평가를 받습니다."),
    3: ("She was promoted to division manager last month.", "그녀는 지난달에 부서장으로 승진했습니다."),
    4: ("We are looking for skilled technicians.", "우리는 숙련된 기술자들을 찾고 있습니다."),
    5: ("The new policy radically changed the workflow.", "새로운 정책은 업무 절차를 완전히 바꾸어 놓았습니다."),
    6: ("He showed exceptional leadership skills.", "그는 뛰어난 리더십 기술을 보여주었습니다."),
    7: ("In appreciation of your hard work, we offer this bonus.", "당신의 노고에 대한 감사의 표시로, 이 보너스를 드립니다."),
    8: ("Supervisors evaluate staff performance every six months.", "관리자들은 6개월마다 직원들의 실적을 평가합니다."),
    9: ("I suggest that we postpone the meeting until Friday.", "저는 회의를 금요일까지 연기할 것을 제안합니다."),
    10: ("Candidates with experience are given preference.", "경력이 있는 지원자들에게 우선권이 주어집니다."),
    11: ("The management is discussing the proposed merger.", "경영진은 제안된 합병에 대해 논의하고 있습니다."),
    12: ("Economists predict a slow economic recovery.", "경제학자들은 더딘 경기 회복을 예측합니다."),
    13: ("He was transferred to the London branch.", "그는 런던 지사로 전근되었습니다."),
    14: ("The company awarded him the Employee of the Year title.", "회사는 그에게 올해의 사원 상을 수여했습니다."),
    15: ("Attendance at the safety training is mandatory.", "안전 교육 참석은 의무적입니다."),
    16: ("She is a very competent administrative assistant.", "그녀는 매우 유능한 행정 보조원입니다."),
    17: ("The company's financial performance has improved significantly.", "회사의 재무 실적이 상당히 개선되었습니다."),
    18: ("The firm rewards employees for valid suggestions.", "그 회사는 타당한 제안을 한 직원들에게 보상합니다."),
    19: ("We are conducting a search for a new marketing director.", "우리는 새로운 마케팅 이사를 찾고 있습니다."),
    20: ("He is inexperienced but eager to learn.", "그는 경험은 없지만 배우고자 하는 열의가 있습니다."),
    21: ("The company offers an early retirement package.", "그 회사는 조기 퇴직 패키지를 제공합니다."),
    22: ("The area is designated as a non-smoking zone.", "그 구역은 금연 구역으로 지정되어 있습니다."),
    23: ("He holds an executive position in the firm.", "그는 회사에서 간부직을 맡고 있습니다."),
    24: ("We admire his dedication to the job.", "우리는 일에 대한 그의 헌신에 감탄합니다."),
    25: ("The proposal was approved unanimously by the board.", "그 안건은 이사회에서 만장일치로 승인되었습니다."),
    26: ("We are making steady progress on the construction project.", "우리는 건설 프로젝트에서 꾸준한 진척을 보이고 있습니다."),
    27: ("I congratulated him on his promotion to vice president.", "저는 그의 부사장 승진을 축하했습니다."),
    28: ("The manager was dismissed for misconduct.", "그 매니저는 위법 행위로 해고되었습니다."),
    29: ("The division needs more independence in decision-making.", "그 부서는 의사 결정에 있어 더 많은 독립성이 필요합니다."),
    30: ("Participation in the survey is voluntary.", "설문 조사 참여는 자발적입니다."),
    31: ("The boss praised her for her initiative.", "상사는 그녀의 진취성을 칭찬했습니다."),
    32: ("We celebrated the accomplishment of our quarterly goals.", "우리는 분기 목표 달성을 축하했습니다."),
    33: ("After much deliberation, they selected a vendor.", "심사숙고 끝에, 그들은 공급업체를 선정했습니다."),
    34: ("Strong leadership is essential for business success.", "강력한 리더십은 사업 성공에 필수적입니다."),
    35: ("He plans to retire after 30 years of service.", "그는 30년 근무 후 은퇴할 계획입니다."),
    36: ("The deadline for nominations is this Friday.", "후보 지명 마감기한은 이번주 금요일입니다."),
    37: ("The company plans to reorganize its marketing division.", "회사는 마케팅 부서를 개편할 계획입니다."),
    38: ("He served as vice president for ten years.", "그는 10년 동안 부사장으로 재직했습니다."),
    39: ("Your encouragement means a lot to the team.", "당신의 격려는 팀에게 큰 힘이 됩니다."),
    40: ("He handed in his letter of resignation yesterday.", "그는 어제 사직서를 제출했습니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d24p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day24_part1.json
with open('day24_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 24 Part 1 Created (Personnel Start).")
