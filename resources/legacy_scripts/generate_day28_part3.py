import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 28 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 28) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 28 Part 3: Architecture & Housing Details)
# Focus: "Hyper-TOEIC" (Building Design, Construction details, Prop Management)
toeic_examples_d28p3 = {
    69: ("He studied modern architecture in college.", "그는 대학에서 현대 건축학을 공부했습니다."),
    70: ("A canopy covers the entrance to the hotel.", "덮개(차양)가 호텔 입구를 덮고 있습니다."),
    71: ("The tree cast a shadow on the wall.", "나무가 벽에 그림자를 드리웠습니다."),
    72: ("The roof is supported by stone columns.", "지붕은 돌기둥(원주)들에 의해 지탱됩니다."),
    73: ("The hotel has a beautiful courtyard.", "그 호텔은 아름다운 안뜰을 가지고 있습니다."),
    74: ("The dishes are in the cupboard.", "접시들은 찬장에 있습니다."),
    75: ("We need to cut the grass in the backyard.", "우리는 뒷마당의 잔디를 깎아야 합니다."),
    76: ("The dedication ceremony will be held tomorrow.", "준공식(헌당식)은 내일 열릴 것입니다."),
    77: ("Please stand in the doorway.", "문간에 서 주십시오."),
    78: ("She put her clothes in the dresser.", "그녀는 옷을 서랍장(화장대)에 넣었습니다."),
    79: ("In case of fire, use the emergency exit.", "화재 시에는 비상구를 이용하십시오."),
    80: ("They erected a monument in the park.", "그들은 공원에 기념비를 세웠습니다."),
    81: ("Buses run every hour on the hour.", "버스는 매 정시마다 운행합니다."),
    82: ("The faucet is leaking.", "수도꼭지가 새고 있습니다."),
    83: ("Please review the floor plan for the new office.", "새 사무실을 위한 평면도를 검토해 주십시오."),
    84: ("We installed wood flooring in the living room.", "우리는 거실에 나무 바닥재를 설치했습니다."),
    85: ("Someone is knocking at the front door.", "누군가가 정문을 두드리고 있습니다."),
    86: ("The restroom is at the end of the hallway.", "화장실은 복도 끝에 있습니다."),
    87: ("I heard hammering coming from next door.", "저는 옆집에서 쿵쾅거리는 소리를 들었습니다."),
    88: ("Please hold the handrail when shaking the stairs.", "계단을 이용할 때 난간을 잡으십시오."),
    89: ("We sell a variety of home improvement products.", "우리는 다양한 주거 개선용 제품을 판매합니다."),
    90: ("He leaned against the lamppost.", "그는 가로등 기둥에 기대었습니다."),
    91: ("Do not lean against the fence.", "울타리에 기대지 마십시오."),
    92: ("The light bulb needs to be changed.", "백열전구를 교체해야 합니다."),
    93: ("The landlord promised to make repairs.", "집주인은 수리를 하겠다고 약속했습니다."),
    94: ("I always make the bed in the morning.", "저는 항상 아침에 잠자리를 정돈합니다(준비합니다)."),
    95: ("They live in a multistory apartment building.", "그들은 다층(고층) 아파트 건물에 살고 있습니다."),
    96: ("The outdoor wall is covered in ivy.", "외벽(바깥벽)은 담쟁이덩굴로 덮여 있습니다."),
    97: ("Please plug in the vacuum cleaner.", "진공청소기의 플러그를 꽂아 주십시오."),
    98: ("A flag hangs from the pole.", "깃발이 기둥(폴)에 걸려 있습니다."),
    99: ("The event will be held at a private residence.", "그 행사는 개인 주택에서 열릴 것입니다."),
    100: ("Please put away your toys.", "장난감을 치우십시오(집어 넣으십시오)."),
    101: ("They plan to rebuild the damaged bridge.", "그들은 손상된 다리를 재건할 계획입니다."),
    102: ("Call a repairperson to fix the sink.", "싱크대를 고치기 위해 수리공을 부르십시오."),
    103: ("Spread the glue on the surface.", "표면에 접착제를 펴 바르십시오."),
    104: ("Assuming the staircase is safe.", "계단이 안전하다고 가정하면."), # Context: Often used in descriptions
    105: ("Walk up the stairway to the second floor.", "계단을 걸어 2층으로 올라가십시오."),
    106: ("Files are kept in the storage cabinet.", "파일들은 보관용 수납장에 보관됩니다."),
    107: ("Please switch on the lights.", "불(스위치)을 켜 주십시오."),
    108: ("Turn the box on its side.", "상자를 옆으로 돌리십시오(뒤집으십시오)."),
    109: ("The museum is undergoing renovation.", "박물관은 개조(보수) 중입니다."),
    110: ("She placed a flower pot on the windowsill.", "그녀는 창턱에 화분을 놓았습니다."),
    111: ("They plan to construct a new factory.", "그들은 새 공장을 건설할 계획입니다."),
    112: ("Can you describe the suspect?", "용의자를 묘사할 수 있습니까?"), # 'describe' is general but often used in housing context too "describe the house"
    113: ("A quiet neighborhood is desirable for families.", "조용한 동네는 가족들에게 바람직합니다(이상적입니다)."),
    114: ("The bridge is a massive structure.", "그 다리는 거대한 구조물입니다."),
    115: ("The access road to the site is blocked.", "현장으로 가는 진입로가 막혀 있습니다."),
    116: ("Help me arrange the furniture.", "가구 배치하는 것을 도와주십시오."),
    117: ("Chairs are arranged on the patio.", "의자들은 테라스에 정돈되어 있습니다."),
    118: ("The kitchen has built-in cabinets.", "그 부엌에는 붙박이 장이 있습니다."),
    119: ("He is skilled in carpentry.", "그는 목수일에 능숙합니다."),
    120: ("The fire alarm went off accidentally.", "화재 경보기가 실수로 울렸습니다."),
    121: ("Every floor must have a fire extinguisher.", "모든 층에는 소화기가 있어야 합니다."),
    122: ("Where is the fitting room?", "탈의실이 어디입니까?"),
    123: ("The price includes all fixtures.", "가격에는 모든 붙박이 가구(설비)가 포함되어 있습니다."),
    124: ("The homebuilder offers a warranty.", "그 주택 건설업자는 보증을 제공합니다."),
    125: ("Housekeeping services are available daily.", "가사(객실 청소) 서비스는 매일 이용 가능합니다."),
    126: ("We sell kitchenware and housewares.", "우리는 주방용품과 가정용품을 판매합니다."),
    127: ("It is a new housing development project.", "그것은 새로운 주택 개발 프로젝트입니다."),
    128: ("The bill was sent in error.", "청구서가 실수로(잘못하여) 발송되었습니다."),
    129: ("The house is overpriced.", "그 집은 가격이 과하게 매겨졌습니다."), # verb 'overprice' used as adj usually
    130: ("We need to reinforce the foundation.", "우리는 기초를 보강해야 합니다."),
    131: ("Residents are complaining about the noise.", "거주자(주민)들이 소음에 대해 불평하고 있습니다."),
    132: ("The restoration of the painting took years.", "그 그림의 복원(복구)은 수년이 걸렸습니다."),
    133: ("Scrubbing the floor requires effort.", "바닥 문지르기는 노력을 요합니다."),
    134: ("The city is famous for its skyscrapers.", "그 도시는 고층 빌딩들로 유명합니다."),
    135: ("This sofa has a space-saving design.", "이 소파는 공간 절약형 디자인을 가지고 있습니다."),
    136: ("The tenant signed a one-year lease.", "임차인은 1년 임대 계약에 서명했습니다.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d28p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day28_part3.json
with open('day28_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 28 Part 3 Created (Intermediate Housing).")
