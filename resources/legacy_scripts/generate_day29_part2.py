import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 29 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 29) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 29 Part 2: Ecology & Weather)
# Focus: "Hyper-TOEIC" (Weather forecasts, Environmental contexts, General Nature)
toeic_examples_d29p2 = {
    41: ("Bird migration patterns are changing.", "새들의 이동(이주) 패턴이 바뀌고 있습니다."),
    42: ("The ecology of the lake is fragile.", "그 호수의 생태는 취약합니다."),
    43: ("We must protect the natural habitat of these animals.", "우리는 이 동물들의 자연 서식지를 보호해야 합니다."),
    44: ("They explored a cave in the mountains.", "그들은 산에 있는 동굴을 탐험했습니다."),
    45: ("Water boils at 100 degrees Celsius.", "물은 섭씨 100도에서 끓습니다."),
    46: ("It is a bit chilly outside.", "밖은 약간 쌀쌀합니다."),
    47: ("Please clean up the mess.", "지저분한 것을 치워 주십시오."), # 'mess' added for context
    48: ("We need to buy more cleaning supplies.", "우리는 청소 용품을 더 사야 합니다."),
    49: ("Camels are well adapted to the desert.", "낙타는 사막에 잘 적응해 있습니다."),
    50: ("There was dirt on his shoes.", "그의 신발에 먼지가 묻어 있었습니다."),
    51: ("Someone needs to empty the trash can.", "누군가가 휴지통을 비워야 합니다."),
    52: ("smoke from the factory", "공장에서 나오는 연기"), # Phrase kept simple as per context often found
    53: ("Farmers harvest their crops in the fall.", "농부들은 가을에 농작물을 수확합니다."),
    54: ("The climate here is hot and humid.", "이곳의 기후는 덥고 습합니다."),
    55: ("The landscape has changed over the years.", "풍경은 수년에 걸쳐 변했습니다."),
    56: ("I see your point about the cost.", "비용에 대한 당신의 의견(요점)을 알겠습니다."),
    57: ("Farmers sow seeds in the spring.", "농부들은 봄에 씨를 뿌립니다."),
    58: ("Let's sit in the shade.", "그늘에 앉읍시다."),
    59: ("It was a sunny day.", "화창한 날이었습니다."),
    60: ("We watched the sunset on the beach.", "우리는 해변에서 일몰을 지켜봤습니다."),
    61: ("Be careful, the paint is still wet.", "조심하십시오, 페인트가 아직 젖어 있습니다(마르지 않았습니다)."),
    62: ("It is too windy to play golf.", "골프를 치기에는 바람이 너무 많이 붑니다."),
    63: ("The table is made of solid wood.", "그 탁자는 견고한 나무(원목)로 만들어졌습니다."),
    64: ("He wiped the dust off the shelf.", "그는 선반에서 먼지를 닦아냈습니다."),
    65: ("Heavy rain caused a flood in the city.", "폭우가 도시에 홍수를 일으켰습니다."),
    66: ("In general, I agree with you.", "일반적으로, 저는 당신에게 동의합니다."),
    67: ("Air pollution is a serious problem.", "대기 오염은 심각한 문제입니다."),
    68: ("We expect a sudden shower this afternoon.", "우리는 오늘 오후에 갑작스러운 소나기를 예상합니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d29p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day29_part2.json
with open('day29_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 29 Part 2 Created (Nature Basic).")
