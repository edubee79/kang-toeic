import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 25 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 25) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 25 Part 1: Traffic & Transportation)
# Focus: "Hyper-TOEIC" (Congestion, Commuting, Public Transit)
toeic_examples_d25p1 = {
    1: ("Traffic congestion is heavy during rush hour.", "출퇴근 시간에는 교통 체증이 심합니다."),
    2: ("The new highway will alleviate traffic congestion.", "새 고속도로는 교통 체증을 완화할 것입니다."),
    3: ("Traffic was diverted to a side road due to the accident.", "사고로 인해 교통이 샛길로 우회되었습니다."),
    4: ("We had to take a detour because of the roadwork.", "우리는 도로 공사 때문에 우회해야 했습니다."),
    5: ("Rising fuel costs are affecting the transportation industry.", "상승하는 연료 비용이 운송 산업에 영향을 미치고 있습니다."),
    6: ("The signal malfunction caused a delay.", "신호 오작동이 지연을 초래했습니다."),
    7: ("You need a parking permit to park here.", "여기에 주차하려면 주차 허가증이 필요합니다."),
    8: ("Public transportation is reliable and affordable.", "대중교통은 믿을 수 있고 가격이 알맞습니다."),
    9: ("This is a great opportunity to expand our business.", "이것은 우리 사업을 확장할 수 있는 좋은 기회입니다."),
    10: ("The instructions clearly state the parking rules.", "지시 사항은 주차 규칙을 명확히 명시하고 있습니다."),
    11: ("There is ongoing construction on the bridge.", "다리 위에서 공사가 계속 진행 중입니다."),
    12: ("Please provide a detailed map of the area.", "그 지역의 상세한 지도를 제공해 주십시오."),
    13: ("We are looking for an alternative route.", "우리는 대체 경로를 찾고 있습니다."),
    14: ("Where can I obtain a subway map?", "지하철 노선도는 어디서 얻을 수 있습니까?"),
    15: ("Please park in the designated area only.", "지정된 구역에만 주차하십시오."),
    16: ("Turn left at the next intersection.", "다음 교차로에서 좌회전하십시오."),
    17: ("The car is equipped with a navigation system.", "그 차는 내비게이션 시스템을 갖추고 있습니다."),
    18: ("He commutes to work by train every day.", "그는 매일 기차로 통근합니다."),
    19: ("I am going downtown to meet a client.", "저는 고객을 만나러 시내에 가는 길입니다."),
    20: ("The automotive industry is facing challenges.", "자동차 산업은 도전 과제들에 직면해 있습니다."),
    21: ("Road closures are expected during the festival.", "축제 기간 동안 도로 폐쇄가 예상됩니다."),
    22: ("Company vehicles must be returned by 5 PM.", "회사 차량은 오후 5시까지 반납되어야 합니다."),
    23: ("Keep clear of the platform edge.", "승강장 가장자리에서 떨어져 있으십시오."),
    24: ("Government officials are inspecting the site.", "정부 관리들이 현장을 점검하고 있습니다."),
    25: ("Mass transit systems reduce pollution.", "대중교통 시스템은 오염을 줄여줍니다."),
    26: ("Bus fares will increase next month.", "버스 요금이 다음 달에 인상될 것입니다."),
    27: ("Travel expenses will be reimbursed.", "출장 비용은 상환될 것입니다."),
    28: ("We trust our drivers to deliver on time.", "우리는 우리 기사들이 정시에 배달할 것이라고 믿습니다."),
    29: ("We are heading towards the airport.", "우리는 공항 쪽으로 향하고 있습니다."),
    30: ("He drives a truck for a living.", "그는 생계를 위해 트럭을 운전합니다."),
    31: ("You will pay a fine for illegal parking.", "불법 주차에 대해서는 벌금을 내게 될 것입니다."),
    32: ("Please let the passengers pass.", "승객들이 지나가도록 비켜 주십시오."),
    33: ("Ensure that the load is securely fastened.", "짐이 단단하게 고정되었는지 확인하십시오."),
    34: ("The sign was prominently displayed at the entrance.", "표지판은 입구에 눈에 잘 띄게 게시되어 있었습니다."),
    35: ("This parking space is reserved for disabled drivers.", "이 주차 공간은 장애인 운전자를 위해 지정(예약)되어 있습니다."),
    36: ("The average commute time is 45 minutes.", "평균 통근 시간은 45분입니다."),
    37: ("There was a collision between a bus and a taxi.", "버스와 택시 간의 충돌이 있었습니다."),
    38: ("The car was towed away for illegal parking.", "그 차는 불법 주차로 견인되었습니다."),
    39: ("Please put the car in reverse.", "차를 후진 기어에 놓으십시오."),
    40: ("A fallen tree obstructed the road.", "쓰러진 나무가 도로를 막았습니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d25p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day25_part1.json
with open('day25_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 25 Part 1 Created (Traffic Start).")
