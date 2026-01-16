import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 11 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 11) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 11 Part 4: Advanced - Corporate Technology & Strategy)
# Focus: "Hyper-TOEIC" (Formal Business, Part 7 Regulations, Part 5 Collocations)
toeic_examples_d11p4 = {
    137: ("The new software will streamline the production process.", "새로운 소프트웨어는 생산 과정을 합리화할(능률적으로 할) 것입니다."),
    138: ("The facility is equipped with state-of-the-art technology.", "그 시설은 최첨단 기술을 갖추고 있습니다."),
    139: ("We are known for our cutting-edge designs.", "우리는 최첨단 디자인으로 알려져 있습니다."),
    140: ("The report distills complex data into simple charts.", "그 보고서는 복잡한 데이터를 간단한 차트로 추출(요약)합니다."),
    141: ("The new rules are bewildering to many employees.", "새로운 규칙들은 많은 직원들에게 당혹스럽습니다."),
    142: ("Rice is a staple food in many countries.", "쌀은 많은 나라에서 주식(주요 산물)입니다."),
    143: ("The old computer system is now obsolete.", "구형 컴퓨터 시스템은 이제 쓸모없게 되었습니다(구식입니다)."),
    144: ("He steered the company through the crisis.", "그는 위기 속에서 회사를 이끌었습니다(조종했습니다)."),
    145: ("The advertisement is geared to a younger audience.", "그 광고는 젊은 층에 맞추어져 있습니다."),
    146: ("We believe in transparent business practices.", "우리는 투명한 사업 관행을 믿습니다."),
    147: ("The software allows for various system configurations.", "그 소프트웨어는 다양한 시스템 구성을 허용합니다."),
    148: ("The garden is full of ornamental plants.", "그 정원은 장식용 식물들로 가득합니다."),
    149: ("We appreciate customers who patronize our store.", "우리는 우리 가게를 애용하는 고객들에게 감사드립니다."),
    150: ("All products must meet strict quality control standards.", "모든 제품은 엄격한 품질 관리 기준을 충족해야 합니다."),
    151: ("The sensor is embedded in the device.", "센서가 장치에 내장되어 있습니다."),
    152: ("She has a hectic schedule today.", "그녀는 오늘 몹시 바쁜 일정을 가지고 있습니다."),
    153: ("The desk is sturdily built.", "그 책상은 튼튼하게 만들어졌습니다."),
    154: ("Students listened intently to the lecture.", "학생들은 강의를 열심히(골몰하여) 들었습니다."),
    155: ("This is our top-of-the-line model.", "이것은 우리의 최고급 모델입니다."),
    156: ("The device was implanted surgically.", "그 장치는 수술로 이식되었습니다."),
    157: ("The breakdown was due to a system dysfunction.", "고장은 시스템 기능 장애 때문이었습니다."),
    158: ("The new lighting brings out the colors of the painting.", "새 조명은 그림의 색채를 드러내 줍니다."),
    159: ("The manager decided to reassign the task.", "관리자는 그 업무를 재배정하기로 결정했습니다."),
    160: ("The laboratory apparatus is very expensive.", "그 실험실 기구(장치)는 매우 비쌉니다."),
    161: ("The two workshops will be held concurrently.", "두 워크숍은 동시에 개최될 것입니다."),
    162: ("This material is highly flammable.", "이 재료는 인화성이 매우 높습니다."),
    163: ("The company has evolved into a global corporation.", "그 회사는 글로벌 기업으로 발전(진화)했습니다."),
    164: ("They made a concession during the negotiation.", "그들은 협상 중에 양보를 했습니다."),
    165: ("The gas is not detectable by smell.", "그 가스는 냄새로 탐지할 수 없습니다."),
    166: ("Please provide a urine specimen for analysis.", "분석을 위해 소변 견본을 제출해 주십시오."),
    167: ("The sales goals are ambitious but achievable.", "판매 목표는 야심 차지만 달성 가능합니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d11p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day11_part4.json
with open('day11_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 11 Part 4 Created (Advanced Tech & Strategy).")
