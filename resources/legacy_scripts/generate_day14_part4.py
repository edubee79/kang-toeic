import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 14 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 14) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 14 Part 4: Advanced - Travel Regulations & Maritime)
# Focus: "Hyper-TOEIC" (Formal Business, Part 7 Regulations & Announcements)
toeic_examples_d14p4 = {
    137: ("Flying gives me a strange sensation.", "비행은 제게 이상한 느낌을 줍니다."),
    138: ("The suburban train line is under construction.", "교외로 나가는 열차선이 공사 중입니다."),
    139: ("The voyage took three weeks.", "그 항해는 3주가 걸렸습니다."),
    140: ("Do not feed the wildlife.", "야생 동물에게 먹이를 주지 마십시오."),
    141: ("The machine dispenses tickets.", "그 기계는 표를 나누어 줍니다(발급합니다)."),
    142: ("The delay is presumable due to weather.", "지연은 날씨 때문으로 추정할 수 있습니다(있음직합니다)."),
    143: ("Pick up your bags at the carousel.", "회전식 수화물 컨베이어에서 가방을 찾으십시오."),
    144: ("We found affordable lodging near the station.", "우리는 역 근처에 저렴한 임시 숙소(하숙)를 찾았습니다."),
    145: ("Passengers must wait to disembark.", "승객들은 내리기(하차하기) 위해 기다려야 합니다."),
    146: ("Please send the remittance by Friday.", "금요일까지 송금을 보내주십시오."),
    147: ("Please buckle up for safety.", "안전을 위해 안전벨트를 매십시오."),
    148: ("A barge is carrying goods down the river.", "짐배(바지선)가 강을 따라 화물을 운반하고 있습니다."),
    149: ("I need to confer with my colleagues.", "저는 동료들과 의논해야 합니다."),
    150: ("Meet me in the main concourse.", "중앙 홀(광장)에서 만납시다."),
    151: ("Farmers sell produce at a stall.", "농부들은 가판대(진열대)에서 농산물을 팝니다."),
    152: ("He took medicine to prevent airsickness.", "그는 비행기 멀미를 예방하기 위해 약을 먹었습니다."),
    153: ("Baggage must not be left unattended.", "수하물은 방치되어서는 안 됩니다."),
    154: ("We stayed at a prestigious hotel.", "우리는 명성 있는(일류의) 호텔에 묵었습니다."),
    155: ("The ship navigated the narrow channel.", "그 배는 좁은 해협을 항해했습니다."),
    156: ("Passengers relaxed on the deck.", "승객들은 갑판에서 휴식을 취했습니다."),
    157: ("The group rented a charter plane.", "그 단체는 전세 비행기를 빌렸습니다."),
    158: ("Pets must go to the quarantine desk.", "애완동물은 검역대로 가야 합니다."),
    159: ("He works in the aviation industry.", "그는 항공 산업(비행)에 종사합니다."),
    160: ("The baggage allowance is 20kg.", "수하물 허용치는 20kg입니다."),
    161: ("Police impounded the vehicle.", "경찰이 그 차량을 압수했습니다."),
    162: ("Many boats are docked in the harbor.", "많은 배들이 항구에 정박해 있습니다."),
    163: ("I get motion sickness on boats.", "저는 배를 타면 멀미를 합니다."),
    164: ("Can we swap seats?", "자리를 맞바꿀(교환할) 수 있습니까?"),
    165: ("Tie the boat to the dock.", "배를 부두에 묶으십시오(정박시키십시오)."),
    166: ("Wear a life preserver on the boat.", "배에서는 구명 기구(조끼)를 착용하십시오."),
    167: ("The ship is waiting at the dock.", "배가 선창(부두)에서 기다리고 있습니다."),
    168: ("My missing bag turned up yesterday.", "제 분실된 가방이 어제 나타났습니다(찾게 되었습니다).")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d14p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day14_part4.json
with open('day14_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 14 Part 4 Created (Advanced Travel Regulations).")
