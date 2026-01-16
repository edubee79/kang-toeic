import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 11 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 11) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 11 Part 3: Intermediate - R&D & Technical Operations)
# Focus: Strict Headword Match & Single Example Policy
toeic_examples_d11p3 = {
    69: ("Please repeat the instructions.", "지시 사항을 반복해 주십시오."),
    70: ("Please fill out the request form.", "요청 양식을 작성해 주십시오."),
    71: ("The sensor detects motion.", "그 센서(감지 장치)는 움직임을 감지합니다."),
    72: ("We use a new manufacturing technique.", "우리는 새로운 제조 기술을 사용합니다."),
    73: ("Engineers will test the new engine.", "엔지니어들이 새 엔진을 검사(시험)할 것입니다."),
    74: ("Please go straight to the conference room.", "회의실로 직행해 주십시오."),
    75: ("Samples are analyzed in the laboratory.", "샘플들은 실험실에서 분석됩니다."),
    76: ("This is the author's latest work.", "이것은 그 작가의 최신 작품입니다."),
    77: ("The new laptop is very lightweight.", "새 노트북은 매우 가볍습니다."),
    78: ("This information is out-of-date.", "이 정보는 구식입니다(최신이 아닙니다)."),
    79: ("He works as a product designer.", "그는 제품 디자이너로 일합니다."),
    80: ("The product display attracts customers.", "제품 진열(전시)이 고객들을 끌어들입니다."),
    81: ("We need to redesign the packaging.", "우리는 포장을 다시 디자인해야 합니다."),
    82: ("The software has a 30-day trial period.", "그 소프트웨어에는 30일의 시험 사용 기간이 있습니다."),
    83: ("You can try out the equipment before buying.", "구매하기 전에 장비를 시험해 볼 수 있습니다."),
    84: ("Please unplug the equipment after use.", "사용 후에는 장비의 플러그를 뽑아 주십시오."),
    85: ("Keep the records up-to-date.", "기록을 최신 상태로 유지하십시오."),
    86: ("Please read the user's guide carefully.", "사용 설명서를 주의 깊게 읽어 주십시오."),
    87: ("This watch is waterproof.", "이 시계는 방수가 됩니다."),
    88: ("The team was well-prepared for the presentation.", "그 팀은 발표를 위해 준비가 잘 되어 있었습니다."),
    89: ("Do not leave the room with the lights on.", "전등을 켜 둔 채로 방을 비우지 마십시오."),
    90: ("Technological advancement has changed our lives.", "기술적 진보는 우리의 삶을 변화시켰습니다."),
    91: ("The store sells household appliances.", "그 가게는 가전제품(기구)을 판매합니다."),
    92: ("Aside from the cost, the plan is good.", "비용을 제외하고는, 그 계획은 좋습니다."),
    93: ("He is a certified accountant.", "그는 공인 회계사입니다."),
    94: ("The two companies have complementary skills.", "그 두 회사는 상호 보완적인 기술을 가지고 있습니다."),
    95: ("Analyze the chemical composition of the material.", "그 재료의 화학적 구성을 분석하십시오."),
    96: ("The committee consists of ten members.", "위원회는 10명의 회원으로 구성됩니다."),
    97: ("We appreciate your cooperative attitude.", "우리는 귀하의 협조적인 태도에 감사드립니다."),
    98: ("We are delighted to announce the winner.", "우리는 우승자를 발표하게 되어 기쁩니다."),
    99: ("The program is designed to help students.", "그 프로그램은 학생들을 돕기 위해 설계되었습니다."),
    100: ("This material is very durable.", "이 재료는 매우 내구성이 있습니다."),
    101: ("We sell consumer electronics.", "우리는 소비자 가전제품을 판매합니다."),
    102: ("Everyone was present except for Mr. Kim.", "김 선생님을 제외하고는 모두가 참석했습니다."),
    103: ("Space exploration is expensive.", "우주 탐사는 비용이 많이 듭니다."),
    104: ("It offers every service imaginable.", "그것은 상상할 수 있는 모든 서비스를 제공합니다."),
    105: ("Companies must innovate to survive.", "기업들은 살아남기 위해 혁신해야 합니다."),
    106: ("His interpretation of the data was correct.", "그의 데이터 해석은 정확했습니다."),
    107: ("The restaurant is licensed to sell alcohol.", "그 식당은 주류 판매 허가를 받았습니다."),
    108: ("The car had a mechanical problem.", "그 차는 기계적인 문제가 있었습니다."),
    109: ("The weather prediction was accurate.", "날씨 예측은 정확했습니다."),
    110: ("They built a prototype of the device.", "그들은 그 장치의 시제품(프로토타입)을 만들었습니다."),
    111: ("We ordered a large quantity of paper.", "우리는 다량의 종이를 주문했습니다."),
    112: ("Remnants of the old building remain.", "그 오래된 건물의 잔재가 남아 있습니다."),
    113: ("The computer screen is frozen.", "컴퓨터 화면이 멈췄습니다."),
    114: ("Production was suspended temporarily.", "생산이 일시적으로 중단되었습니다."),
    115: ("They offer technical support.", "그들은 기술 지원을 제공합니다."),
    116: ("The weather conditions were unfavorable.", "날씨 조건이 좋지 않았습니다(불리했습니다)."),
    117: ("The system is vulnerable to hackers.", "그 시스템은 해커들에게 취약합니다."),
    118: ("The inspection will be carried out tomorrow.", "검사는 내일 실시될 것입니다."),
    119: ("The bridge is designed to withstand earthquakes.", "그 다리는 지진을 견디도록 설계되었습니다."),
    120: ("Scientists made a major breakthrough.", "과학자들은 중대한 비약적 발전(돌파구)을 이루었습니다."),
    121: ("By the time you arrive, we will be finished.", "당신이 도착할 때쯤이면, 우리는 끝났을 것입니다."),
    122: ("The project was a collaboration between two firms.", "그 프로젝트는 두 회사 간의 공동 작업(협력)이었습니다."),
    123: ("The book is protected by copyright.", "그 책은 저작권의 보호를 받습니다."),
    124: ("Everything in the kitchen is custom-built.", "부엌에 있는 모든 것은 주문 제작된 것입니다."),
    125: ("You can customize the settings.", "설정을 사용자 정의할(주문 제작할) 수 있습니다."),
    126: ("The strike caused a disruption in service.", "파업은 서비스의 중단을 야기했습니다."),
    127: ("We are focusing on energy efficiency.", "우리는 에너지 효율성에 집중하고 있습니다."),
    128: ("Solar power is a renewable energy source.", "태양력은 재생 가능한 에너지원입니다."),
    129: ("We plan to expand into new markets.", "우리는 새로운 시장으로 확장할 계획입니다."),
    130: ("The car has low fuel consumption.", "그 차는 연료 소비량이 적습니다."),
    131: ("I need your guidance on this matter.", "이 문제에 대해 당신의 지도(조언)가 필요합니다."),
    132: ("Keep your eye on the road.", "도로를 주시하십시오(눈을 떼지 마십시오)."),
    133: ("This is a limited edition watch.", "이것은 한정판 시계입니다."),
    134: ("We need a long-lasting solution.", "우리는 오래 지속되는 해결책이 필요합니다."),
    135: ("There is plenty of food.", "음식이 많습니다(충분합니다)."),
    136: ("The smoke detector went off.", "화재 탐지기가 울렸습니다.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d11p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day11_part3.json
with open('day11_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 11 Part 3 Created (Intermediate Tech).")
