import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 29 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 29) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 29 Part 4: Advanced Environment & Sustainability)
# Focus: "Hyper-TOEIC" (Sustainability, Industrial Impact, Scientific Ecology)
toeic_examples_d29p4 = {
    137: ("The new office is currently under construction.", "새 사무실은 현재 공사 중입니다."),
    138: ("The instructions were vague and confusing.", "지시 사항이 모호하고 혼란스러웠습니다."),
    139: ("Heavy rain raised the water level.", "폭우가 수위를 높였습니다."),
    140: ("We were drenched by the sudden downpour.", "우리는 갑작스러운 호우에 흠뻑 젖었습니다."),
    141: ("Cattle are grazing in the field.", "소들이 들판에서 풀을 뜯고(방목되고) 있습니다."),
    142: ("We aim to reduce fuel emissions.", "우리는 연료 배기를 줄이는 것을 목표로 합니다."),
    143: ("I enjoy the tranquility of the countryside.", "저는 시골의 평온함을 즐깁니다."),
    144: ("Chemicals can cause toxication.", "화학 물질은 중독을 일으킬 수 있습니다."),
    145: ("We admired the splendor of the palace.", "우리는 궁전의 장엄함에 감탄했습니다."),
    146: ("We got caught in a downpour.", "우리는 호우를 만났습니다."),
    147: ("He pulled up the weeds.", "그는 잡초를 뽑았습니다."), # Also: A car pulled up.
    148: ("The city purchased the vacant site for a park.", "시는 공원을 위해 공터를 매입했습니다."),
    149: ("The factory treats its own sewage.", "그 공장은 자체 하수를 처리합니다."),
    150: ("She keeps potted plants on the balcony.", "그녀는 발코니에 화분에 심은 식물들을 기릅니다."),
    151: ("We visited the botanical garden.", "우리는 식물원을 방문했습니다."),
    152: ("We appreciate your promptness.", "우리는 당신의 신속함에 감사드립니다."),
    153: ("Illegal logging is destroying the forest.", "불법 벌목이 숲을 파괴하고 있습니다."),
    154: ("Our goal is sustainable development.", "우리의 목표는 지속 가능한 개발입니다."),
    155: ("The hedges need trimming.", "생울타리는 정돈(다듬기)이 필요합니다."),
    156: ("Pedestrians should use the overpass.", "보행자들은 육교를 이용해야 합니다."),
    157: ("Timber is a major export of the region.", "목재는 그 지역의 주요 수출품입니다."),
    158: ("The terrain is rugged and steep.", "지형은 울퉁불퉁하고 가파릅니다."),
    159: ("Outwardly, he seemed calm.", "겉으로는, 그는 침착해 보였습니다."),
    160: ("They live on the outskirts of the city.", "그들은 도시의 변두리(교외)에 삽니다."),
    161: ("Terrestrial habitats are being lost.", "지구상(육상)의 서식지들이 유실되고 있습니다."), # 'terrestrial' usually contrasts with aquatic
    162: ("The colors will fade over time.", "색깔은 시간이 지남에 따라 바랠 것입니다."),
    163: ("Proper disposal of waste is essential.", "폐기물의 적절한 처분은 필수적입니다."),
    164: ("The fumes from the car were choking.", "차에서 나오는 가스(연기)는 숨이 막힐 듯했습니다."),
    165: ("The land reverted to its natural state.", "땅은 자연 상태로 되돌아갔습니다."),
    166: ("We are facing a depletion of resources.", "우리는 자원의 고갈에 직면해 있습니다."),
    167: ("Farmers use an irrigation system.", "농부들은 관개 시설을 사용합니다."),
    168: ("Chemical residue was found on the fruit.", "과일에서 화학 잔여물이 발견되었습니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d29p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day29_part4.json
with open('day29_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 29 Part 4 Created (Advanced Sustainability).")
