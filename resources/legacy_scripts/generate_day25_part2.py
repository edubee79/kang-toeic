import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 25 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 25) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 25 Part 2: Traffic & Basic Business)
# Focus: "Hyper-TOEIC" (Driving, Commuting, Basic Infrastructure)
toeic_examples_d25p2 = {
    41: ("The bus stopped at the bus stop.", "버스가 버스 정류장에 멈췄습니다."),
    42: ("Be careful when crossing the busy street.", "붐비는 거리를 건널 때 조심하십시오."),
    43: ("I took a cab to the airport.", "저는 공항까지 택시를 탔습니다."),
    44: ("We need to make a car rental reservation.", "우리는 자동차 대여 예약을 해야 합니다."),
    45: ("Pedestrians should use the crosswalk.", "보행자들은 횡단보도를 이용해야 합니다."),
    46: ("The hotel offers free parking for guests.", "그 호텔은 투숙객들에게 무료 주차를 제공합니다."),
    47: ("I need to stop at the gas station to refuel.", "주유하기 위해 주유소에 들러야 합니다."),
    48: ("We will get off at the next station.", "우리는 다음 역에서 내릴 것입니다."),
    49: ("A beautiful painting hangs on the wall.", "아름다운 그림이 벽에 걸려 있습니다."),
    50: ("I was late due to heavy traffic.", "저는 교통 혼잡 때문에 늦었습니다."),
    51: ("Drivers should obey the speed limit on the highway.", "운전자들은 고속도로에서 속도 제한을 준수해야 합니다."),
    52: ("It takes ten minutes on foot.", "걸어서 10분 걸립니다."),
    53: ("Please do not park in front of the entrance.", "입구 앞에 주차하지 마십시오."),
    54: ("Bicycles are not allowed on this path.", "이 통행로에는 자전거가 허용되지 않습니다."),
    55: ("The subway station is just around the corner.", "지하철역은 바로 모퉁이 돌면 있습니다."),
    56: ("The tour bus will depart at 9 AM.", "관광버스는 오전 9시에 출발할 것입니다."),
    57: ("Stop when the traffic light turns red.", "교통 신호가 빨간색으로 바뀌면 멈추십시오."),
    58: ("Don't lean against the wall.", "벽에 기대지 마십시오."),
    59: ("I am going to wash the car this weekend.", "저는 이번 주말에 세차를 할 것입니다."),
    60: ("The wheel of the car was damaged.", "자동차 바퀴가 손상되었습니다."),
    61: ("Employees have access to the gym.", "직원들은 체육관에 접근할(이용할) 수 있습니다."),
    62: ("The report cites several sources.", "그 보고서는 몇 가지 출처를 언급합니다."),
    63: ("Open the hood to check the engine.", "엔진을 점검하기 위해 보닛을 여십시오."),
    64: ("Please wait inside the building.", "건물 안에서 기다려 주십시오."),
    65: ("Which route is the fastest?", "어느 노선(경로)이 가장 빠릅니까?"),
    66: ("There was a sharp increase in sales.", "매출이 급격히 증가했습니다."),
    67: ("We need to solve this problem immediately.", "우리는 이 문제를 즉시 해결해야 합니다."),
    68: ("He stood in line for tickets.", "그는 티켓을 사기 위해 줄을 섰습니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d25p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day25_part2.json
with open('day25_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 25 Part 2 Created (Basic Traffic).")
