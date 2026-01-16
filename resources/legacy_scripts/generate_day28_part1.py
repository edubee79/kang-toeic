import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 28 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 28) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 28 Part 1: Housing, Real Estate & Renovation)
# Focus: "Hyper-TOEIC" (Property Management, Construction, Urban Planning)
toeic_examples_d28p1 = {
    1: ("The apartment comes fully furnished.", "그 아파트는 가구가 완비되어 나옵니다."),
    2: ("He maintains a permanent residence in London.", "그는 런던에 영구 거주지(주택)를 유지하고 있습니다."),
    3: ("The conference room is spacious enough for 50 people.", "회의실은 50명을 수용할 수 있을 만큼 넓습니다."),
    4: ("The windows were draped with heavy curtains.", "창문들은 무거운 커튼으로 장식되어 있었습니다."),
    5: ("The building has been unoccupied for a year.", "그 건물은 1년 동안 비어 있었습니다."),
    6: ("The hotel is undergoing extensive renovation.", "그 호텔은 대대적인 수리(개조)를 겪고 있습니다."),
    7: ("Please wear appropriate clothing for the site visit.", "현장 방문을 위해 적당한(적합한) 복장을 착용하십시오."),
    8: ("Construction was delayed due to bad weather.", "나쁜 날씨 때문에 건설이 지연되었습니다."),
    9: ("We are committed to serving the local community.", "우리는 지역 사회에 봉사하는 데 전념하고 있습니다."),
    10: ("The construction of the new bridge will begin soon.", "새 다리의 건설이 곧 시작될 것입니다."),
    11: ("The landlord promised to repair the roof.", "집주인은 지붕을 수리하겠다고 약속했습니다."),
    12: ("The item is currently out of stock.", "그 물품은 현재 재고가 없습니다."),
    13: ("Fire alarms should be tested regularly.", "화재 경보기는 정기적으로 테스트되어야 합니다."),
    14: ("Please arrange the chairs in a circle.", "의자들을 원형으로 배열해 주십시오."),
    15: ("The store is in a prime location.", "그 가게는 주요 장소(위치)에 있습니다."),
    16: ("They are working to restore the historic building.", "그들은 역사적인 건물을 복구하기 위해 일하고 있습니다."),
    17: ("The manager is presently in a meeting.", "매니저는 현재 회의 중입니다."),
    18: ("We have received numerous complaints.", "우리는 많은 불만을 접수했습니다."),
    19: ("The project was abandoned due to lack of funds.", "자금 부족으로 그 프로젝트는 버려졌습니다(중단되었습니다)."),
    20: ("We hired a contractor to renovate the kitchen.", "우리는 부엌을 개조하기 위해 도급업자(계약자)를 고용했습니다."),
    21: ("The company plans to develop the land.", "회사는 그 땅을 개발할 계획입니다."),
    22: ("It is expensive to maintain a large house.", "큰 집을 유지하는 것은 비쌉니다."),
    23: ("The area is densely populated.", "그 지역은 인구가 밀집되어 있습니다(빽빽합니다)."),
    24: ("We need to prepare for the upcoming inspection.", "우리는 다가오는 점검을 준비해야 합니다."),
    25: ("The deal was finally closed yesterday.", "그 거래는 마침내 어제 체결되었습니다."),
    26: ("The financial district is located downtown.", "금융 지구는 시내에 위치해 있습니다."),
    27: ("The urban renewal project is underway.", "도시 재개발 프로젝트가 진행 중입니다."),
    28: ("Attendance at the meeting is compulsory.", "회의 참석은 의무적입니다."),
    29: ("Noise from the construction interfered with our work.", "공사 소음이 우리 일을 방해했습니다."),
    30: ("The company announced its relocation to a new office.", "회사는 새 사무실로의 이전을 발표했습니다."),
    31: ("I totally agree with your proposal.", "저는 당신의 제안에 전적으로(완전히) 동의합니다."),
    32: ("The situation is actually worse than we thought.", "상황은 실제로 우리가 생각했던 것보다 나쁩니다."),
    33: ("The architect designed a modern building.", "그 건축가는 현대적인 건물을 설계했습니다."),
    34: ("We plan to enlarge the parking lot.", "우리는 주차장을 확장할 계획입니다."),
    35: ("Technicians will install the new software.", "기술자들이 새 소프트웨어를 설치할 것입니다."),
    36: ("I suppose you are right.", "당신이 옳다고 생각합니다(추측합니다)."),
    37: ("We are looking for a permanent solution.", "우리는 영구적인 해결책을 찾고 있습니다."),
    38: ("The cafe is adjacent to the library.", "그 카페는 도서관에 인접해 있습니다."),
    39: ("The committee consists of ten members.", "위원회는 10명의 위원으로 구성됩니다."),
    40: ("Utility bills are included in the rent.", "공공요금은 임대료에 포함되어 있습니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d28p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day28_part1.json
with open('day28_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 28 Part 1 Created (Housing Start).")
