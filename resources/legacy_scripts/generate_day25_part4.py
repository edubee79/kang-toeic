import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 25 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 25) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 25 Part 4: Advanced Traffic & Infrastructure)
# Focus: "Hyper-TOEIC" (Urban Planning, Logistics, Regulations)
toeic_examples_d25p4 = {
    137: ("Compact cars are popular in crowded cities.", "소형차는 붐비는 도시에서 인기가 있습니다."),
    138: ("The insurance company offers a 24-hour towing service.", "그 보험 회사는 24시간 견인 서비스를 제공합니다."),
    139: ("We watched the parade pass by.", "우리는 퍼레이드가 지나가는 것을 지켜보았습니다."),
    140: ("The city plans to pave the dirt road.", "시 당국은 흙길을 포장할 계획입니다."),
    141: ("The increase in traffic necessitated the road expansion.", "교통량 증가는 도로 확장을 필요하게 만들었습니다."),
    142: ("All vehicles must conform to safety standards.", "모든 차량은 안전 기준에 부합해야 합니다."),
    143: ("Consumers prefer fuel-efficient hybrids.", "소비자들은 연료 효율이 높은 하이브리드 차량을 선호합니다."),
    144: ("The train was pulling several wagons filled with coal.", "기차는 석탄이 가득 찬 화물 기차(화차) 여러 대를 끌고 있었습니다."),
    145: ("Public transit ridership has increased by 10%.", "대중교통 이용자 수가 10% 증가했습니다."),
    146: ("The ferry pulled into the harbor on time.", "여객선은 정시에 항구에 섰습니다(들어왔습니다)."),
    147: ("He is a specialist in urban transportation planning.", "그는 도시 교통 계획 전문가입니다."),
    148: ("It is difficult to navigate through the narrow streets.", "좁은 거리를 뚫고 길을 찾는 것은 어렵습니다."),
    149: ("There was strong opposition to the new highway project.", "새 고속도로 프로젝트에 대한 강한 반대가 있었습니다."),
    150: ("The city is restoring its historic streetcar line.", "도시는 역사적인 전차 노선을 복원하고 있습니다."),
    151: ("This area is reserved for pedestrians only.", "이 구역은 보행자 전용입니다."),
    152: ("Drivers must bear a valid license at all times.", "운전자들은 항상 유효한 면허증을 몸에 지녀야(소지해야) 합니다."),
    153: ("The mayor was emphatic about the need for better roads.", "시장은 더 나은 도로의 필요성에 대해 단호했습니다."),
    154: ("Old cars give off harmful emissions.", "오래된 차들은 해로운 배기가스를 방출합니다."),
    155: ("A passerby witnessed the accident.", "한 행인이 그 사고를 목격했습니다."),
    156: ("The bicycle wheel has a broken spoke.", "자전거 바퀴에 부러진 바퀴살이 하나 있습니다."),
    157: ("Illegally parked cars will be towed away.", "불법 주차된 차들은 견인될 것입니다."),
    158: ("Please keep the sidewalk clear for pedestrians.", "보행자를 위해 보도를 비워 두십시오."),
    159: ("There is a wheelchair ramp at the entrance.", "입구에 휠체어용 경사로가 있습니다."),
    160: ("You can lock your bike at the bicycle rack.", "자전거 보관대에 자전거를 잠가 둘 수 있습니다."),
    161: ("I took the overnight express bus to Seoul.", "저는 서울행 심야 고속버스를 탔습니다."),
    162: ("The drawbridge opens to let ships pass.", "도개교는 배들이 지나가도록 열립니다."),
    163: ("Taxi drivers often expect a gratuity.", "택시 기사들은 종종 팁을 기대합니다."),
    164: ("The hotel is inconveniently located far from the station.", "그 호텔은 역에서 멀리 떨어져 있어 불편하게 위치해 있습니다."),
    165: ("The train carriage was full of passengers.", "기차 객차(차량)는 승객들로 가득 찼습니다."),
    166: ("The city is surrounded by mountains.", "그 도시는 산으로 둘러싸여 있습니다."),
    167: ("He hastily packed his bags and left.", "그는 급히 가방을 싸서 떠났습니다."),
    168: ("The station was refurbished last year.", "그 역은 작년에 개조되었습니다(새로 꾸며졌습니다).")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d25p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day25_part4.json
with open('day25_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 25 Part 4 Created (Advanced Traffic End).")
