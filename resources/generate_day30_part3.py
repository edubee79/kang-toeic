import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 30 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 30) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 30 Part 3: Intermediate Medical & Treatment - REFINED)
# Context: Employee Benefits, Insurance Claims, Public Health Policy
toeic_examples_d30p3 = {
    69: ("The company wellness program is designed to promote the well-being of all staff.", "회사 웰니스 프로그램은 모든 직원의 웰빙을 증진하기 위해 만들어졌습니다."),
    70: ("The report addresses the challenges of providing healthcare for an aging population.", "그 보고서는 고령화 인구에게 의료 서비스를 제공하는 것의 과제를 다룹니다."),
    71: ("He filed an accident report after suffering an ankle sprain on the factory floor.", "그는 공장 바닥에서 발목 접질림을 겪은 후 사고 보고서를 제출했습니다."),
    72: ("Improper lifting techniques can result in serious back injury.", "부적절한 들어올리기 기술은 심각한 허리 부상을 초래할 수 있습니다."),
    73: ("The patient is on a special diet prescribed by the nutritionist.", "그 환자는 영양사가 처방한 특수 식이 요법 중입니다."),
    74: ("Regular monitoring of blood pressure is essential for hypertension management.", "혈압의 규칙적인 모니터링은 고혈압 관리에 필수적입니다."),
    75: ("The Red Cross is concerned about the low blood supply in the local bank.", "적십자는 지역 혈액 은행의 낮은 혈액 공급량에 대해 우려하고 있습니다."),
    76: ("There was a buzzing of excitement in the lobby before the CEO's arrival.", "CEO가 도착하기 전 로비에는 흥분의 웅성거림(윙윙거리는 소리)이 있었습니다."),
    77: ("I need to reschedule my doctor's appointment due to a conflicting meeting.", "겹치는 회의 때문에 진료 예약을 변경해야 합니다."),
    78: ("Patients with life-threatening conditions are treated first in the emergency room.", "생명을 위협하는 상태의 환자들은 응급실에서 우선적으로 치료받습니다."),
    79: ("Employees are encouraged to get some exercise during their lunch break.", "직원들은 점심시간 동안 운동을 좀 하도록 권장됩니다."),
    80: ("He retired early due to a chronic heart ailment.", "그는 만성 심장병 때문에 조기 은퇴했습니다."),
    81: ("Stress management is crucial for preventing a heart attack.", "스트레스 관리는 심장 마비를 예방하는 데 중요합니다."),
    82: ("Heart disease remains the leading cause of death in developed nations.", "심장 질환은 선진국에서 여전히 주요 사망 원인으로 남아 있습니다."),
    83: ("The vaccine is administered via a single injection.", "그 백신은 1회 주사를 통해 투여됩니다."),
    84: ("Shift workers often suffer from insomnia due to irregular hours.", "교대 근무자들은 불규칙한 근무 시간 때문에 종종 불면증을 겪습니다."),
    85: ("The ergonomic chair allows users to lean back comfortably.", "인체공학적 의자는 사용자가 편안하게 뒤로 기댈 수 있게 해줍니다."),
    86: ("The wellness challenge encourages employees to lose weight together.", "웰니스 챌린지는 직원들이 함께 살을 빼도록 장려합니다."),
    87: ("The new hospital wing includes a state-of-the-art maternity ward.", "새로운 병원 별관은 최첨단 산부인과 병동을 포함합니다."),
    88: ("Strict privacy laws protect the confidentiality of every patient's record.", "엄격한 개인정보 보호법은 모든 환자의 의료 기록의 기밀성을 보호합니다."),
    89: ("Candidates must undergo a physical examination before employment.", "지원자들은 고용 전에 신체 검사를 받아야 합니다."),
    90: ("Recovery from the injury required months of intensive physical therapy.", "부상 회복은 수개월간의 집중적인 물리 치료를 필요로 했습니다."),
    91: ("The company must resist pressure to lower safety standards.", "회사는 안전 기준을 낮추라는 압력에 저항해야 합니다."),
    92: ("Cover your mouth when you sneeze to prevent spreading germs.", "세균 확산을 막기 위해 재채기를 할 때는 입을 가리십시오."),
    93: ("The sterilization of surgical instruments is strictly monitored.", "수술 도구의 소독은 엄격하게 모니터링됩니다."),
    94: ("Take one tablet with water after every meal.", "매 식사 후 물과 함께 알약 한 개를 복용하십시오."),
    95: ("The new regulations will take effect on the first of next month.", "새로운 규정은 다음 달 1일에 발효될(효과가 나타날) 것입니다."),
    96: ("Employees should not operate heavy machinery while taking medication.", "직원들은 약을 복용하는 동안 중장비를 조작해서는 안 됩니다."),
    97: ("If symptoms persist, you should take some medicine.", "증상이 지속되면, 약을 좀 먹어야 합니다."),
    98: ("The insurance policy covers terminal illness care.", "그 보험 증권은 말기 질환(불치병) 치료를 보장합니다."),
    99: ("Proof of vaccination is required for international travel.", "국제 여행을 위해서는 예방 접종 증명서가 필요합니다."),
    100: ("Security personnel watch over the facility 24 hours a day.", "보안 요원들이 하루 24시간 시설을 보호합니다(지킵니다)."),
    101: ("The funding was cut; consequently, the research project was halted.", "자금 지원이 삭감되었습니다; 그 결과, 연구 프로젝트는 중단되었습니다."),
    102: ("The chemicals were found to be harmful to the environment.", "그 화학 물질들은 환경에 해로운 것으로 밝혀졌습니다."),
    103: ("We aim to maximize the efficiency of our production line.", "우리는 생산 라인의 효율성을 극대화하는 것을 목표로 합니다."),
    104: ("The botanical garden cultivates plants with medicinal value.", "그 식물원은 약용 가치가 있는 식물들을 재배합니다."),
    105: ("The customer service representative listened patiently to the complaint.", "고객 서비스 담당자는 불만 사항을 끈기 있게 경청했습니다."),
    106: ("The market is expected to recover from the downturn slowly.", "시장은 침체기에서 천천히 회복될 것으로 예상됩니다."),
    107: ("The proposed logo resembles that of a competitor.", "제안된 로고는 경쟁사의 것과 닮았습니다."),
    108: ("Ultimately, the success of the merger depends on cultural integration.", "마침내(결국), 합병의 성공은 문화적 통합에 달려 있습니다."),
    109: ("We are urgently seeking a qualified safety inspector.", "우리는 자격 있는 안전 검사관을 급히 찾고 있습니다."),
    110: ("Architects use software to visualize the building design.", "건축가들은 건물 설계를 시각화하기 위해 소프트웨어를 사용합니다."),
    111: ("Overuse of antibiotics helps create resistant bacteria.", "항생제의 과용은 내성 박테리아를 만드는 데 일조합니다."),
    112: ("Employees with asthma should avoid exposure to dust and fumes.", "천식이 있는 직원들은 먼지와 가스에 노출되는 것을 피해야 합니다."),
    113: ("The scholarship is awarded based on academic and athletic skill.", "장학금은 학업 및 운동 능력을 바탕으로 수여됩니다."),
    114: ("Chronic absenteeism is grounds for disciplinary action.", "만성적인 결근은 징계 조치의 사유가 됩니다."),
    115: ("Staff with contagious illnesses must stay home until recovered.", "전염성 질환이 있는 직원은 회복될 때까지 집에 머물러야 합니다."),
    116: ("Diabetes management is covered under the employee health plan.", "당뇨병 관리는 직원 건강 보험 계획에 따라 보장됩니다."),
    117: ("The charity is seeking a generous donor for the new wing.", "자선 단체는 새로운 별관을 위한 관대한 기부자(기증자)를 찾고 있습니다."),
    118: ("Strict adherence to the prescribed dosage is required.", "처방된 1회분 복용량에 대한 엄격한 준수가 요구됩니다."),
    119: ("A single dose of the vaccine provides lifelong immunity.", "백신의 단 1회 복용량으로 평생 면역을 제공합니다."),
    120: ("The global initiative aims to eradicate polio worldwide.", "글로벌 이니셔티브는 전 세계적으로 소아마비를 근절하는 것을 목표로 합니다."),
    121: ("Ventilation systems ensure that stale air is exhaled from the building.", "환기 시스템은 탁한 공기가 건물 밖으로 배출되도록(내쉬어지도록) 보장합니다."), # Metaphorical use
    122: ("All supervisors are trained in basic first aid and CPR.", "모든 감독관들은 기본적인 응급 처치와 심폐소생술 훈련을 받습니다."),
    123: ("The cafeteria was closed following reports of food poisoning.", "구내식당은 식중독 보고가 있은 후 폐쇄되었습니다."),
    124: ("Company policies forbid the use of personal devices in secure areas.", "회사 정책은 보안 구역 내 개인 기기 사용을 금지합니다."),
    125: ("Advances in genetic research are transforming personalized medicine.", "유전학 연구의 발전은 맞춤형 의학을 변화시키고 있습니다."),
    126: ("Hand sanitizers are provided to reduce the spread of germs.", "세균 확산을 줄이기 위해 손 소독제가 제공됩니다."),
    127: ("Frequent hiccups in the supply chain delayed production.", "공급망의 잦은 문제들(딸꾹질들)이 생산을 지연시켰습니다."), # Metaphorical use
    128: ("Restaurants must comply with strict food hygiene regulations.", "식당들은 엄격한 식품 위생 규정을 준수해야 합니다."),
    129: ("No industry is immune to economic fluctuations.", "어떤 산업도 경제 변동에 면역이 되어 있지 않습니다."), # Business metaphor
    130: ("Computer infection by malware can result in data loss.", "멀웨어에 의한 컴퓨터 감염은 데이터 손실을 초래할 수 있습니다."),
    131: ("The CDC monitors outbreaks of infectious diseases.", "질병통제예방센터(CDC)는 전염병의 발병을 모니터링합니다."),
    132: ("Workers must wear masks so they do not inhale toxic fumes.", "근로자들은 유독 가스를 들이마시지 않도록 마스크를 착용해야 합니다."),
    133: ("Accidental overdose is a risk with potent medications.", "강력한 약물의 경우 우발적인 과다 복용이 위험 요소입니다."),
    134: ("The market acted as a painkiller for the struggling economy.", "시장은 고전하는 경제에 진통제 역할을 했습니다."), # Metaphor
    135: ("The strike caused a paralysis of the transportation network.", "파업은 교통망의 마비를 초래했습니다."),
    136: ("Investors check the pulse of the market before trading.", "투자자들은 거래 전에 시장의 맥박(흐름)을 확인합니다.") # Metaphor
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d30p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    t_score = int(row['Target_Score']) if 'Target_Score' in row and pd.notna(row['Target_Score']) else 800

    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': t_score,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day30_part3.json
with open('day30_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 30 Part 3 Refined (Business Process & Public Health).")
