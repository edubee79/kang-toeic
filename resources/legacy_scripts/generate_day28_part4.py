import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 28 Part 4 : No. 137 ~ 167 (31 words) ---
part4_df = df[(df['Day'] == 28) & (df['No'] >= 137) & (df['No'] <= 167)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 28 Part 4: Advanced Construction & Property Maintenance)
# Focus: "Hyper-TOEIC" (Site Management, Complex Repairs, Legal/Structural Terms)
toeic_examples_d28p4 = {
    137: ("Please tighten the screw.", "나사를 조여 주십시오."),
    138: ("The film was shot in an exotic locale.", "그 영화는 이국적인 현장(무대)에서 촬영되었습니다."),
    139: ("We need to drain the pool for cleaning.", "우리는 청소를 위해 수영장 물을 배수해야 합니다."),
    140: ("The landlord is responsible for repairs.", "집주인은 수리에 대한 책임이 있습니다."),
    141: ("He sat on the porch and watched the rain.", "그는 현관(포치)에 앉아 비를 지켜봤습니다."),
    142: ("The watch is shockproof and waterproof.", "그 시계는 충격에 견디게 만들어졌고(내충격성이고) 방수입니다."),
    143: ("Smoking is prohibited on the premises.", "구내(건물 내)에서는 흡연이 금지되어 있습니다."),
    144: ("Guests enter through a stone archway.", "손님들은 돌로 된 아치길을 통해 들어옵니다."),
    145: ("The loud noise startled me.", "시끄러운 소리가 저를 깜짝 놀라게 했습니다."),
    146: ("Good insulation reduces energy costs.", "좋은 단열재는 에너지 비용을 줄여줍니다."),
    147: ("The library built a new annex.", "도서관은 새로운 별관을 지었습니다."),
    148: ("The island remains uninhabited.", "그 섬은 사람이 살지 않는 상태로 남아 있습니다."),
    149: ("The sports complex includes a gym and pool.", "그 스포츠 단지(집합체)는 체육관과 수영장을 포함합니다."),
    150: ("The windows are arranged symmetrically.", "창문들은 대칭적으로 배열되어 있습니다."),
    151: ("The house features intricate woodwork.", "그 집은 복잡한 목조 부분(목공예)을 특징으로 합니다."),
    152: ("Workers are climbing on the scaffolding.", "노동자들이 비계(발판) 위를 오르고 있습니다."),
    153: ("There is a bird's nest on the ledge.", "절벽에서 튀어나온 바위(선반) 위에 새 둥지가 있습니다."),
    154: ("He dug a hole with a shovel.", "그는 삽으로 구멍을 팠습니다."),
    155: ("Use a saw to cut the wood.", "나무를 자르기 위해 톱을 사용하십시오."),
    156: ("Place the equipment on the rack.", "장비를 선반(랙) 위에 놓으십시오."),
    157: ("The building is currently for lease.", "그 건물은 현재 임대용으로(집을 내놓은 상태로) 나와 있습니다."),
    158: ("The demolition of the old factory is scheduled.", "오래된 공장의 파괴(철거)가 예정되어 있습니다."),
    159: ("We need to think constructively about the problem.", "우리는 그 문제에 대해 건설적으로 생각해야 합니다."),
    160: ("A hedge separates the two gardens.", "생울타리(담)가 두 정원을 분리합니다."),
    161: ("The office requires a reconfiguration of space.", "사무실은 공간의 구조 변경을 필요로 합니다."),
    162: ("Call a plumber to fix the leak.", "누수를 고치기 위해 배관공을 부르십시오."),
    163: ("The camera is mounted on the wall.", "카메라는 벽에 설치(고정)되어 있습니다."),
    164: ("They plan to tear down the old building.", "그들은 오래된 건물을 헐(철거할) 계획입니다."),
    165: ("Don't let the tap run while brushing teeth.", "양치질하는 동안 수도꼭지를 틀어놓지 마십시오."),
    166: ("Regular maintenance extends the life of the car.", "정기적인 유지(보수)는 차의 수명을 연장합니다."),
    167: ("The city decided to demolish the stadium.", "시는 경기장을 파괴(철거)하기로 결정했습니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d28p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day28_part4.json
with open('day28_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 28 Part 4 Created (Advanced Construction).")
