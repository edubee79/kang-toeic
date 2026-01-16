import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 12 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 12) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 12 Part 2: Basic Manufacturing & Supply Chain - CORRECTED)
# Focus: "Hyper-TOEIC" (Strict Headword Match)
toeic_examples_d12p2 = {
    41: ("We must minimize the risk of injury.", "우리는 부상 위험을 최소화해야 합니다."),
    42: ("The company launched a new clothing line.", "그 회사는 새로운 의류 상품(라인)을 출시했습니다."),
    43: ("He spent years perfecting his craft.", "그는 자신의 기술을 완벽하게 하는 데 수년을 보냈습니다."),
    44: ("The farmer expects a good crop this year.", "그 농부는 올해 좋은 수확(농작물)을 기대합니다."),
    45: ("The monitor has a curved screen.", "그 모니터는 곡선 모양의 화면을 가지고 있습니다."),
    46: ("Cyclists should wear helmets for safety.", "자전거 타는 사람들은 안전을 위해 헬멧을 착용해야 합니다."),
    47: ("We gathered firewood for the campfire.", "우리는 캠프파이어를 위해 장작을 모았습니다."),
    48: ("The bridge is made of iron.", "그 다리는 철로 만들어졌습니다."),
    49: ("Please look up the word in the dictionary.", "사전에서 그 단어를 찾아보십시오."),
    50: ("You should be careful when operating machinery.", "기계류를 작동할 때는 조심해야 합니다."),
    51: ("'Do you mind if I sit here?' 'Not at all.'", "'여기 앉아도 될까요?' '전혀 문제없습니다(천만에요).'"),
    52: ("The hotel is not far from the airport.", "그 호텔은 공항에서 멀지 않습니다."),
    53: ("The automobile plant employs 500 workers.", "그 자동차 공장은 500명의 근로자를 고용합니다."),
    54: ("She works for a major publication company.", "그녀는 주요 출판 회사에서 일합니다."),
    55: ("There is a scratch on the surface.", "표면에 긁힌 자국이 있습니다."),
    56: ("The carpenter wore a tool belt.", "목수는 공구 벨트를 찼습니다."),
    57: ("She watered the flowers with a watering can.", "그녀는 물뿌리개로 꽃에 물을 주었습니다."),
    58: ("A number of employees attended the meeting.", "많은 직원들이 회의에 참석했습니다."),
    59: ("The team is composed of experts.", "그 팀은 전문가들로 구성되어 있습니다."),
    60: ("The room was filled with smoke.", "방은 연기로 가득 차 있었습니다."),
    61: ("The committee is made up of volunteers.", "위원회는 자원봉사자들로 구성되어 있습니다."),
    62: ("The sports facility is open to the public.", "그 스포츠 시설은 대중에게 개방되어 있습니다."),
    63: ("Please fasten your seatbelts.", "안전벨트를 매 주십시오."),
    64: ("They did an incredible job.", "그들은 놀라운 일을 해냈습니다."),
    65: ("We made a slight modification to the design.", "우리는 디자인에 약간의 수정을 가했습니다."),
    66: ("He ranks first in the sales department.", "그는 영업부에서 1위를 차지합니다(순위가 매겨집니다)."),
    67: ("The cost of raw materials has risen.", "원자재 비용이 상승했습니다."),
    68: ("There is a shortage of skilled labor.", "숙련된 노동력이 부족합니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d12p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day12_part2.json
with open('day12_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 12 Part 2 Created (Basic Supply Chain - Fixed).")
