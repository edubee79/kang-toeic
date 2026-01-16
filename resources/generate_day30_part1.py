import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 30 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 30) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 30 Part 1: Health & Medical - REFINED)
# Context: Corporate Wellness, Insurance Policies, Workplace Safety
toeic_examples_d30p1 = {
    1: ("Chronic fatigue affecting employees can reduce overall productivity.", "직원들에게 영향을 미치는 만성 피로는 전반적인 생산성을 감소시킬 수 있습니다."),
    2: ("All new employees are required to undergo a mandatory health checkup.", "모든 신입 사원들은 의무적인 건강 진단을 받아야 합니다."),
    3: ("Please report any symptoms of illness to the infirmary immediately.", "질병의 증상이 있으면 즉시 양호실에 보고해 주십시오."),
    4: ("Consult a physician before starting any strenuous exercise program.", "격렬한 운동 프로그램을 시작하기 전에 내과 의사와 상담하십시오."),
    5: ("The precise diagnosis allowed for a more effective treatment plan.", "정확한 진단은 더 효과적인 치료 계획을 가능하게 했습니다."),
    6: ("The doctor prescribed medication to alleviate the patient's pain.", "의사는 환자의 통증을 완화하기 위해 약을 처방했습니다."),
    7: ("The manager wished him a speedy recovery and return to work.", "관리자는 그의 빠른 회복(쾌유)과 직장 복귀를 기원했습니다."),
    8: ("The hospital is recognized as a leader in medical research.", "그 병원은 의학 연구 분야의 선두 주자로 인정받고 있습니다."),
    9: ("Employees are encouraged to join the company's fitness club.", "직원들은 회사의 피트니스 클럽에 가입하도록 권장됩니다."),
    10: ("The updated policy offers comprehensive coverage for dental care.", "개정된 정책은 치과 진료에 대한 포괄적인 보장 범위를 제공합니다."),
    11: ("Staff members are invited to participate in the blood drive.", "직원들은 헌혈 운동에 참여하도록 초대됩니다."),
    12: ("Health experts recommend taking regular breaks to avoid eye strain.", "건강 전문가들은 눈의 피로를 피하기 위해 규칙적인 휴식을 취할 것을 권고합니다."),
    13: ("Immediate surgery may be necessary to correct the structural defect.", "구조적 결함을 교정하기 위해 즉각적인 수술이 필요할 수 있습니다."),
    14: ("The candidate demonstrated the ability to work under high pressure.", "그 지원자는 높은 압박 속에서도 일할 수 있는 능력을 보여주었습니다."),
    15: ("The surgical operation was performed by a team of specialists.", "그 외과 수술은 전문의 팀에 의해 수행되었습니다."),
    16: ("Restaurants must maintain strict standards of cleanliness and hygiene.", "식당들은 엄격한 청결 및 위생 기준을 유지해야 합니다."),
    17: ("Benefits will be suspended for the duration of the leave of absence.", "휴직 지속 기간 동안 혜택은 중단될 것입니다."),
    18: ("A thorough physical examination is part of the hiring process.", "철저한 신체 검사(진찰)는 채용 과정의 일부입니다."),
    19: ("The new safety measures aim to eliminate workplace hazards.", "새로운 안전 조치는 직장 내 위험 요소를 제거하는 것을 목표로 합니다."),
    20: ("Infections can spread easily in poorly ventilated offices.", "감염은 환기가 잘 되지 않는 사무실에서 쉽게 퍼질 수 있습니다."),
    21: ("The company insurance plan includes full dental benefits.", "회사 보험 계획에는 완전한 치과 혜택이 포함됩니다."),
    22: ("The cafeteria offers options for those with special dietary needs.", "구내식당은 특별한 식이 요법 요구 사항이 있는 사람들을 위한 선택 사항을 제공합니다."),
    23: ("Absenteeism due to stress-related illnesses has decreased.", "스트레스와 관련된 질병으로 인한 결근이 감소했습니다."),
    24: ("Certain diseases are transmitted through direct contact.", "특정 질병들은 직접적인 접촉을 통해 전염됩니다."),
    25: ("Safety equipment must be inspected periodically to ensure compliance.", "안전 장비는 규정 준수를 보장하기 위해 주기적으로 점검되어야 합니다."),
    26: ("The patient experienced a severe allergic reaction to the drug.", "환자는 그 약물에 심각한 알레르기 반응을 겪었습니다."),
    27: ("The application process for medical leave is relatively simple.", "병가 신청 절차는 비교적 단순합니다."),
    28: ("Please review the details of your insurance coverage carefully.", "귀하의 보험 보장 범위에 대한 세부 사항을 주의 깊게 검토하십시오."),
    29: ("Limit your exposure to hazardous chemicals by wearing protective gear.", "보호 장비를 착용하여 위험한 화학 물질에 대한 노출을 제한하십시오."),
    30: ("The pharmaceutical firm announced a merger with a global rival.", "그 제약 회사는 글로벌 경쟁사와의 합병을 발표했습니다."),
    31: ("Insurance premiums are expected to rise by 5% next year.", "보험료가 내년에 5% 인상될 것으로 예상됩니다."),
    32: ("Ergonomic chairs help relieve back pain for office workers.", "인체공학적 의자는 사무실 근로자들의 요통을 완화하는 데 도움을 줍니다."),
    33: ("Success requires a combination of technical skill and leadership.", "성공은 기술적 숙련도와 리더십의 결합을 필요로 합니다."),
    34: ("Management is conscious of the need for better work-life balance.", "경영진은 더 나은 일과 삶의 균형에 대한 필요성을 자각하고 있습니다."),
    35: ("Chronic sleep deprivation can negatively impact decision-making.", "만성적인 수면 박탈(부족)은 의사 결정에 부정적인 영향을 미칠 수 있습니다."),
    36: ("The ministry issued a new directive regarding public health safety.", "부처는 공중 보건 안전에 관한 새로운 지시를 내렸습니다."),
    37: ("Loud noise in the factory can induce hearing loss over time.", "공장 내의 시끄러운 소음은 시간이 지남에 따라 청력 손실을 유발할 수 있습니다."),
    38: ("Full-time employees are eligible for health insurance benefits.", "정규직 직원들은 건강 보험 혜택을 받을 자격이 있습니다."),
    39: ("The seminar focused on the importance of proper nutrition.", "그 세미나는 적절한 영양의 중요성에 초점을 맞추었습니다."),
    40: ("Prevention of accidents is the primary goal of the safety committee.", "사고의 예방은 안전 위원회의 주된 목표입니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d30p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    # Ensure correct target score (default to 650 for Part 1 if missing)
    t_score = int(row['Target_Score']) if 'Target_Score' in row and pd.notna(row['Target_Score']) else 650

    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': t_score,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day30_part1.json
with open('day30_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 30 Part 1 Refined (Corporate Health).")
