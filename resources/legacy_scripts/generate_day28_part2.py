import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 28 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 28) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 28 Part 2: Housing Interior & Daily Living)
# Focus: "Hyper-TOEIC" (Real Estate details, Home appliances, Living Environment)
toeic_examples_d28p2 = {
    41: ("He sat in the armchair and read a book.", "그는 안락의자에 앉아 책을 읽었습니다."),
    42: ("The ceiling needs to be repainted.", "천장은 다시 페인트칠 되어야 합니다."),
    43: ("The cleanup after the storm took three days.", "폭풍 후의 대청소는 3일이 걸렸습니다."),
    44: ("The interior decorations are very modern.", "실내 장식(장식물)은 매우 현대적입니다."),
    45: ("A wooden fence surrounds the property.", "나무 울타리가 그 부동산을 둘러싸고 있습니다."),
    46: ("Please be careful, the floor is wet.", "조심하십시오, 바닥이 젖어 있습니다."),
    47: ("I need a frame for this picture.", "저는 이 사진을 위한 액자(틀)가 필요합니다."),
    48: ("The apartment comes with new furniture.", "그 아파트는 새 가구가 딸려 있습니다."),
    49: ("The house has a two-car garage.", "그 집에는 차 2대를 댈 수 있는 차고가 있습니다."),
    50: ("The heating system is very efficient.", "난방 시스템은 매우 효율적입니다."),
    51: ("I will meet you in the hotel lobby.", "호텔 로비에서 뵙겠습니다."),
    52: ("We are planning a remodeling of the office.", "우리는 사무실의 개조(리모델링)를 계획하고 있습니다."),
    53: ("There is a garden on the rooftop.", "옥상(지붕)에 정원이 있습니다."),
    54: ("Use a rope to secure the box.", "상자를 고정하기 위해 밧줄을 사용하십시오."),
    55: ("The dog was playing with a stick.", "개는 막대기를 가지고 놀고 있었습니다."),
    56: ("The water tank needs to be cleaned.", "물 탱크는 청소되어야 합니다."),
    57: ("We enjoyed tea on the veranda.", "우리는 베란다에서 차를 즐겼습니다."),
    58: ("I prefer using a desktop computer for work.", "저는 업무용으로 데스크톱 컴퓨터를 사용하는 것을 선호합니다."),
    59: ("They dwell in a small apartment in the city.", "그들은 도시의 작은 아파트에 거주합니다."),
    60: ("We gathered around the fireplace.", "우리는 난로(벽난로) 주위에 모였습니다."),
    61: ("The engine generates a lot of heat.", "엔진은 많은 열기를 발생시킵니다."),
    62: ("She brought some homemade cookies.", "그녀는 집에서 만든 쿠키를 좀 가져왔습니다."),
    63: ("Every homeowner should have insurance.", "모든 주택 소유자는 보험을 들어야 합니다."),
    64: ("Several species of birds inhabit the island.", "여러 종의 새들이 그 섬에 거주합니다(서식합니다)."),
    65: ("White paint will lighten the room.", "흰색 페인트는 방을 밝게 할 것입니다."),
    66: ("We have very friendly neighbors.", "우리는 매우 친절한 이웃을 두고 있습니다."),
    67: ("Urban development is increasing rapidly.", "도시 발달이 빠르게 증가하고 있습니다."), # Corrected typo in thought, assuming source typo
    68: ("The washing machine is broken.", "세탁기가 고장 났습니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    word = str(row['Word'])
    
    # Correction for known typo in source if matched
    if word.startswith("unban"):
        word = "urban"
    
    ex_en, ex_ko = toeic_examples_d28p2.get(no, (f"Example for {word}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': word,
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day28_part2.json
with open('day28_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 28 Part 2 Created (Housing Basic).")
