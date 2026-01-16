import pandas as pd
import json
import re

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 2 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 2) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

# Function to clean meaning text
def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# High-quality TOEIC examples mapped to verified No. 137-168 words
toeic_examples_d2p4 = {
    137: ("Working overtime has become commonplace in this industry.", "이 업계에서는 야근이 흔한 일이 되었습니다."),
    138: ("All lab technicians must wear a protective smock.", "모든 실험실 기술자는 보호 작업복을 착용해야 합니다."),
    139: ("Her testimony was crucial to the case.", "그녀의 증언은 그 사건에 결정적이었습니다."),
    140: ("The project was completed in accordance with the schedule.", "프로젝트는 일정에 따라 완료되었습니다."),
    141: ("It is crucial to follow the safety guidelines.", "안전 지침을 따르는 것은 매우 중요합니다."),
    142: ("Any deviation from the plan must be reported immediately.", "계획에서의 어떠한 일탈도 즉시 보고되어야 합니다."),
    143: ("She effortlessly completed the difficult task.", "그녀는 어려운 업무를 힘들이지 않고 완료했습니다."),
    144: ("The office will be closed in observance of the holiday.", "공휴일을 기념하여 사무실은 휴무할 것입니다."),
    145: ("I inadvertently sent the email to the wrong person.", "저는 실수로(무심코) 엉뚱한 사람에게 이메일을 보냈습니다."),
    146: ("The company is involved in a judicial dispute.", "그 회사는 사법 분쟁에 휘말려 있습니다."),
    147: ("There is no justification for such behavior.", "그런 행동에는 정당한 이유가 없습니다."),
    148: ("The manager is keenly aware of the problems.", "매니저는 문제점들을 날카롭게 인식하고 있습니다."),
    149: ("The employees filed a lawsuit against the company.", "직원들은 회사를 상대로 소송을 제기했습니다."),
    150: ("He wants to escape from his mundane daily routine.", "그는 일상적인 지루한 일과에서 벗어나고 싶어 합니다."),
    151: ("This area is off-limits to unauthorized personnel.", "이 구역은 인가받지 않은 인원에게는 출입 금지입니다."),
    152: ("The city council passed a new ordinance.", "시 의회는 새로운 조례를 통과시켰습니다."),
    153: ("The controversial ad was pulled from the campaign.", "논란이 된 광고는 캠페인에서 철회되었습니다."),
    154: ("He was reprimanded for his poor performance.", "그는 저조한 실적으로 질책을 받았습니다."),
    155: ("The committee adopted a resolution to cut costs.", "위원회는 비용을 절감하기 위한 결의안을 채택했습니다."),
    156: ("Competition in the market is stiff.", "시장에서의 경쟁은 치열합니다(뻣뻣합니다)."),
    157: ("You need evidence to substantiate your claim.", "당신의 주장을 입증하려면 증거가 필요합니다."),
    158: ("Do not trespass on private property.", "사유지에 무단 침입하지 마십시오."),
    159: ("Companies must not violate environmental laws.", "기업들은 환경법을 위반해서는 안 됩니다."),
    160: ("Bonuses are awarded at the discretion of the manager.", "보너스는 매니저의 재량으로 쥐어집니다."),
    161: ("We are legally bound to fulfill the contract.", "우리는 법적으로 계약을 이행할 의무가 있습니다."),
    162: ("The regulations circumscribe the powers of the director.", "그 규정들은 이사의 권한을 제한합니다."),
    163: ("The enactment of the new law was celebrated.", "새 법률의 제정(입법)이 축하받았습니다."),
    164: ("His service record is impeccable.", "그의 복무 기록은 결점이 없습니다."),
    165: ("Copyright infringement is a serious offense.", "저작권 침해는 심각한 위법 행위입니다."),
    166: ("He has a legitimate reason for being absent.", "그는 결석에 대한 정당한 이유가 있습니다."),
    167: ("Residents signed a petition against the construction.", "주민들은 공사 반대 탄원서에 서명했습니다."),
    168: ("She is an expert when it comes to marketing.", "마케팅에 관해서라면 그녀는 전문가입니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d2p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day2_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 2 Part 4 Created.")
