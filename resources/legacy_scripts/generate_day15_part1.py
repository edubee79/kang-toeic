import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 15 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 15) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 15 Part 1: Business Agreements & Negotiations)
# Focus: "Hyper-TOEIC" (Formal Business, Contract Terms, Negotiations)
toeic_examples_d15p1 = {
    1: ("The committee reviewed the proposal for the new building.", "위원회는 신축 건물에 대한 제안서를 검토했습니다."),
    2: ("The two companies formed a strategic alliance.", "두 회사는 전략적 제휴(동맹)를 맺었습니다."),
    3: ("One stipulation of the contract is strict secrecy.", "계약의 한 가지 조항(조건)은 철저한 비밀 유지입니다."),
    4: ("We must discuss the terms and conditions of the deal.", "우리는 거래의 조건(약관)들을 논의해야 합니다."),
    5: ("Management and the union reached a compromise.", "경영진과 노조는 타협에 도달했습니다."),
    6: ("Negotiations for the merger are currently underway.", "합병에 대한 협상이 현재 진행 중입니다."),
    7: ("Both parties signed a mutual agreement.", "양측은 상호 합의서(계약서)에 서명했습니다."),
    8: ("Negotiations reached a deadlock over the salary issue.", "급여 문제로 협상이 교착 상태에 도달했습니다."),
    9: ("The legal team will review the draft contract.", "법무팀이 계약서 초안을 검토할 것입니다."),
    10: ("The firm won a lucrative government contract.", "그 회사는 수익성 좋은 정부 계약을 따냈습니다."),
    11: ("Please put your signature at the bottom of the page.", "페이지 하단에 서명을 해주십시오."),
    12: ("The policy was originally intended to reduce costs.", "그 정책은 원래 비용 절감을 위해 의도되었습니다."),
    13: ("The board gave direction on the new strategy.", "이사회는 새로운 전략에 대한 지침(방향)을 주었습니다."),
    14: ("Initially, the project faced some resistance.", "처음에, 그 프로젝트는 약간의 저항에 직면했습니다."),
    15: ("The warranty is set to expire next month.", "보증 기간이 다음 달에 만료될 예정입니다."),
    16: ("We collaborate closely with our business partners.", "우리는 비즈니스 파트너들과 긴밀히 협력합니다."),
    17: ("The team is dedicated to providing quality service.", "그 팀은 양질의 서비스를 제공하는 데 헌신합니다."),
    18: ("Please approve the revised budget proposal.", "수정된 예산 제안서를 승인해 주십시오."),
    19: ("It is imperative that we meet the deadline.", "우리가 마감 기한을 맞추는 것은 필수적입니다."),
    20: ("Departments must work cooperatively to succeed.", "성공하기 위해서는 부서들이 협력적으로 일해야 합니다."),
    21: ("Sales representatives receive a 10% commission.", "영업 사원들은 10%의 수수료를 받습니다."),
    22: ("Please do not omit important details from the report.", "보고서에서 중요한 세부 사항을 빠뜨리지 마십시오."),
    23: ("Employees should avoid any conflict of interest.", "직원들은 어떠한 이해 상충(충돌)도 피해야 합니다."),
    24: ("Tenants decided to renew their lease for another year.", "임차인들은 임대차 계약을 1년 더 갱신하기로 결정했습니다."),
    25: ("She is highly proficient in contract law.", "그녀는 계약법에 매우 능통합니다."),
    26: ("Strict confidentiality is maintained at all times.", "철저한 기밀(비밀)이 항상 유지됩니다."),
    27: ("The labor dispute was resolved peacefully.", "그 노사 분쟁은 평화롭게 해결되었습니다."),
    28: ("No one raised an objection to the proposal.", "아무도 그 제안에 대해 이의를 제기하지 않았습니다."),
    29: ("The document clearly defines the responsibilities.", "그 문서는 책임 소재를 명확히 규정합니다."),
    30: ("Dress professionally to make a good impression.", "좋은 인상을 주기 위해 전문적으로(단정하게) 옷을 입으십시오."),
    31: ("Security personnel check all visitors.", "보안 요원이 모든 방문객을 확인합니다."),
    32: ("Employees have the option to buy company stock.", "직원들은 자사주를 매입할 수 있는 선택권이 있습니다."),
    33: ("We can proceed with the signing of the contract.", "우리는 계약 체결을 진행할 수 있습니다."),
    34: ("We need to modify the terms of the agreement.", "우리는 합의 조건을 수정해야 합니다."),
    35: ("We narrowed down the list of candidates.", "우리는 후보자 명단을 좁혔습니다."),
    36: ("Construction firms submitted a bid for the project.", "건설 회사들이 그 프로젝트에 입찰했습니다."),
    37: ("They hope to settle the legal dispute quickly.", "그들은 법적 분쟁을 빨리 해결하기를 희망합니다."),
    38: ("The company has the right to terminate the contract.", "회사는 계약을 해지할(종료할) 권리가 있습니다."),
    39: ("Implementing the new system was challenging.", "새로운 시스템을 도입하는 것은 힘든(도전적인) 일이었습니다."),
    40: ("Good communication is the foundation of teamwork.", "좋은 의사소통은 팀워크의 토대(기초)입니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d15p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day15_part1.json
with open('day15_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 15 Part 1 Created (Business Agreements).")
