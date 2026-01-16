import pandas as pd
import json
import re

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 4 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 4) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 4 Part 1)
toeic_examples_d4p1 = {
    1: ("The manager was criticized for being lax in enforcing safety regulations.", "그 매니저는 안전 규정을 시행하는 데 있어 느슨하다는 비판을 받았습니다."),
    2: ("It is unwise to procrastinate when dealing with urgent client requests.", "긴급한 고객 요청을 처리할 때 꾸물거리는 것은 현명하지 못합니다."),
    3: ("The two companies combined their resources to develop the new technology.", "두 회사는 신기술을 개발하기 위해 자원을 결합했습니다."),
    4: ("She worked hard to accomplish her goals within the deadline.", "그녀는 마감 기한 내에 목표를 성취하기 위해 열심히 일했습니다."),
    5: ("Several employees voluntarily offered to work overtime.", "몇몇 직원들이 자발적으로 야근을 하겠다고 제안했습니다."),
    6: ("Ms. Garcia agreed to undertake the challenging new project.", "가르시아 씨는 그 도전적인 새 프로젝트를 떠맡기로 동의했습니다."),
    7: ("The new director will assume full responsibility for the marketing strategy.", "신임 이사가 마케팅 전략에 대한 전적인 책임을 맡게 될 것입니다."),
    8: ("The network system occasionally experiences technical glitches.", "네트워크 시스템은 가끔 기술적인 결함을 겪습니다."),
    9: ("Every employee is expected to adhere to the company's code of conduct.", "모든 직원은 회사의 행동 강령을 준수할 것으로 기대됩니다."),
    10: ("My assistant will assist you with the installation process.", "제 조수가 설치 과정을 도와드릴 것입니다."),
    11: ("We are satisfied with the results of the customer survey.", "우리는 고객 설문 조사 결과에 만족합니다."),
    12: ("All inquiries should be handled in a professional manner.", "모든 문의는 전문적인 방식으로 처리되어야 합니다."),
    13: ("The marketing team is responsible for promoting the new product.", "마케팅 팀은 신제품 홍보에 대한 책임이 있습니다."),
    14: ("The researchers plan to conduct a survey to gather data.", "연구원들은 데이터를 수집하기 위해 설문 조사를 수행할 계획입니다."),
    15: ("It took some time to adjust to the new office environment.", "새로운 사무실 환경에 적응하는 데 시간이 좀 걸렸습니다."),
    16: ("All personnel must wear identification badges at all times.", "모든 직원은 항상 신분증(ID 배지)을 착용해야 합니다."),
    17: ("Both parties agreed to the terms and conditions of the contract.", "양측은 계약 약관에 동의했습니다."),
    18: ("Mr. Kim supervises a team of twenty engineers.", "김 씨는 20명의 엔지니어로 구성된 팀을 감독합니다."),
    19: ("She gets along well with her coworkers.", "그녀는 동료들과 잘 지냅니다."),
    20: ("Please direct any questions to the human resources department.", "질문이 있으시면 인사과로 해주십시오(안내해 주십시오)."),
    21: ("All employee records must be kept strictly confidential.", "모든 직원 기록은 엄격하게 기밀로 유지되어야 합니다."),
    22: ("The manager assigned a specific task to each team member.", "매니저는 각 팀원에게 특정 업무를 배정했습니다."),
    23: ("Our company is a leading provider of software solutions.", "우리 회사는 소프트웨어 솔루션의 선도적인 공급업체입니다."),
    24: ("The dinner will be a formal event, so please dress accordingly.", "그 저녁 식사는 격식을 갖춘 행사가 될 것이니 그에 맞춰 옷을 입어 주십시오."),
    25: ("The board voted to remove the CEO from his position.", "이사회는 CEO를 직위에서 해임하기로 투표했습니다."),
    26: ("We collect feedback from customers to improve our service.", "우리는 서비스를 개선하기 위해 고객들로부터 피드백을 수집합니다."),
    27: ("The project manager coordinates the efforts of various departments.", "프로젝트 매니저는 다양한 부서의 노력을 조정합니다."),
    28: ("I could hardly hear the speaker due to the background noise.", "배경 소음 때문에 연사의 말을 거의 들을 수 없었습니다."),
    29: ("The concept of the new ad campaign is too abstract.", "새 광고 캠페인의 컨셉은 너무 추상적입니다."),
    30: ("You can find his contact information in the employee directory.", "직원 주소록에서 그의 연락처 정보를 찾을 수 있습니다."),
    31: ("All team leaders are held accountable for their department's performance.", "모든 팀 리더들은 부서 실적에 대해 책임을 집니다."),
    32: ("She skillfully negotiated a better deal for the company.", "그녀는 회사를 위해 더 나은 거래를 능숙하게 협상했습니다."),
    33: ("Members have exclusive access to the VIP lounge.", "회원들은 VIP 라운지에 대한 독점적인 접근 권한을 가집니다."),
    34: ("He has no intention of resigning from his post.", "그는 직위에서 사임할 의사가 전혀 없습니다."),
    35: ("The renovation will transform the old warehouse into a modern office.", "리모델링은 낡은 창고를 현대적인 사무실로 변모시킬 것입니다."),
    36: ("Employees should be respectful of their colleagues' opinions.", "직원들은 동료들의 의견을 존중해야 합니다."),
    37: ("Please make a duplicate of this key.", "이 열쇠의 사본을 만들어 주십시오."),
    38: ("Contrary to expectations, the product sold very well.", "예상과는 반대로, 그 제품은 매우 잘 팔렸습니다."),
    39: ("The news of the merger was disturbing to many employees.", "합병 소식은 많은 직원들에게 불안감을 주었습니다."),
    40: ("We need to engage an expert to solve this technical issue.", "우리는 이 기술적 문제를 해결하기 위해 전문가를 고용해야(관여시켜야) 합니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d4p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day4_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 4 Part 1 Created.")
