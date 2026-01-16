import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 25 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 25) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 25 Part 3: Intermediate Traffic & Logistics)
# Focus: "Hyper-TOEIC" (Details of Commuting, Vehicles, Roads)
toeic_examples_d25p3 = {
    69: ("The bank is just across the street.", "은행은 바로 길 건너편에 있습니다."),
    70: ("The bakery is just around the corner.", "빵집은 바로 모퉁이를 돌면 있습니다."),
    71: ("The road will be closed to traffic for the parade.", "퍼레이드를 위해 도로의 왕래가 금지될 것입니다."),
    72: ("I was held up in traffic for an hour.", "저는 한 시간 동안 교통 체증에 갇혀 있었습니다."),
    73: ("The street is lined with trees.", "그 거리에는 나무들이 줄지어 있습니다."),
    74: ("The traffic report is broadcast every hour.", "교통 방송은 매시간 방송됩니다."),
    75: ("Take the bypass to avoid the city center.", "도심을 피하기 위해 우회로를 이용하십시오."),
    76: ("Employees are encouraged to carpool.", "직원들은 승용차 함께 타기(카풀)를 하도록 장려됩니다."),
    77: ("Traffic came to a standstill during the storm.", "폭풍우 동안 교통이 멈추었습니다."),
    78: ("The train is crowded with commuters.", "기차는 통근자들로 붐빕니다."),
    79: ("Look both ways before you cross the street.", "길을 건너기 전에 양쪽을 다 살피십시오."),
    80: ("Police officers were directing traffic at the intersection.", "경찰관들이 교차로에서 교통 정리를 하고 있었습니다."),
    81: ("You must show your driver's license.", "운전 면허증을 제시해야 합니다."),
    82: ("Don't block the driveway.", "진입로를 막지 마십시오."),
    83: ("Follow the driving directions on the map.", "지도의 주행 방향을 따르십시오."),
    84: ("This chair comes with a footrest.", "이 의자에는 발받침이 딸려 있습니다."),
    85: ("Can I get a ride to the station?", "역까지 차를 얻어 탈 수 있을까요?"),
    86: ("It is easy to get lost in a new city.", "새로운 도시에서는 길을 잃기 쉽습니다."),
    87: ("How long does it take to get to the airport?", "공항에 도착하는 데 얼마나 걸립니까?"),
    88: ("I can give you a ride home.", "제가 집까지 태워다 드릴 수 있습니다."),
    89: ("We had a flat tire on the way here.", "여기로 오는 길에 타이어에 바람이 빠졌습니다(펑크가 났습니다)."),
    90: ("Please turn on your headlights.", "전조등을 켜십시오."),
    91: ("The ship landed at the dock safely.", "배는 부두에 안전하게 정박했습니다."),
    92: ("Stay in the right lane.", "오른쪽 차선을 유지하십시오."),
    93: ("Do not lean over the railing.", "난간 위로 몸을 기대지 마십시오."),
    94: ("I wrote down the license plate number.", "저는 차량 번호를 적어 두었습니다."),
    95: ("I accidentally locked the key in the car.", "실수로 열쇠를 차에 두고 잠갔습니다."),
    96: ("The bus makes a stop at the library.", "버스는 도서관에서 정지합니다."),
    97: ("You need to make a transfer at Central Station.", "중앙역에서 갈아타야 합니다."),
    98: ("Protesters marched through the streets.", "시위대가 거리를 행진했습니다."),
    99: ("The car has low gas mileage.", "그 차는 연비(마일리지)가 낮습니다."),
    100: ("The navigation system is very accurate.", "내비게이션 시스템은 매우 정확합니다."),
    101: ("I bought a one-way ticket to London.", "저는 런던행 편도 차표를 샀습니다."),
    102: ("Park your car in the parking garage.", "주차 차고(주차장)에 차를 주차하십시오."),
    103: ("Keep the pathway clear of obstacles.", "통행로에 장애물이 없게 하십시오."),
    104: ("He pushed his way through the crowd.", "그는 군중을 뚫고 지나갔습니다."),
    105: ("She rode away on her bicycle.", "그녀는 자전거를 타고 떠났습니다."),
    106: ("Pay attention to the road signs.", "도로 표지판에 주의를 기울이십시오."),
    107: ("Expect delays due to roadwork.", "도로 공사로 인한 지연을 예상하십시오."),
    108: ("Is there a shortcut to the station?", "역으로 가는 지름길이 있습니까?"),
    109: ("We had to stop at a light.", "우리는 신호등에서 정지해야 했습니다."),
    110: ("We need to stop for fuel immediately.", "우리는 즉시 주유소에 들러야 합니다."),
    111: ("Place your bags in the overhead storage compartment.", "가방을 머리 위 짐 싣는 곳에 넣으십시오."),
    112: ("The street sign was damaged.", "도로 표지판이 손상되었습니다."),
    113: ("The toll price has increased.", "통행료가 인상되었습니다."),
    114: ("We were stuck in a heavy traffic jam.", "우리는 심한 교통 정체에 갇혔습니다."),
    115: ("We walked through the park.", "우리는 공원을 통과해 걸었습니다."),
    116: ("The hotel is within walking distance of the beach.", "호텔은 해변에서 걸어서 갈 수 있는 거리에 있습니다."),
    117: ("The walkway connects the two buildings.", "통로는 두 건물을 연결합니다."),
    118: ("The windshield was cracked.", "자동차 앞유리(바람막이 창)에 금이 갔습니다."),
    119: ("The creation of new jobs is a priority.", "새로운 일자리의 창조가 우선순위입니다."),
    120: ("Bonuses motivate employees to work harder.", "보너스는 직원들이 더 열심히 일하도록 동기를 부여합니다."),
    121: ("Traffic is heavier than normal today.", "오늘은 평소(정상)보다 교통이 더 혼잡합니다."),
    122: ("The water was perfectly still.", "물은 완전히 고요했습니다(정지해 있었습니다)."),
    123: ("Wait for the traffic signal to change.", "교통 신호가 바뀌기를 기다리십시오."),
    124: ("Your feedback is valuable to us.", "당신의 피드백은 우리에게 소중합니다."),
    125: ("Volunteers helped direct traffic.", "자원봉사자들이 교통 정리를 도왔습니다."),
    126: ("The train was moving at full speed.", "기차는 전속력으로 달리고 있었습니다."),
    127: ("Please clear the snow from the driveway.", "진입로에서 눈을 치워 주십시오."),
    128: ("Two cars collided at the intersection.", "두 대의 차가 교차로에서 충돌했습니다."),
    129: ("The roads are congested during the holiday season.", "연휴 기간에는 도로가 붐빕니다."),
    130: ("We encountered some unexpected problems.", "우리는 몇 가지 예상치 못한 문제에 부닥쳤습니다."),
    131: ("The project is moving forward as planned.", "프로젝트는 계획대로 앞으로 나아가고 있습니다."),
    132: ("Our principal concern is safety.", "우리의 주된 관심사는 안전입니다."),
    133: ("Many people rely on public transportation.", "많은 사람들이 대중교통에 의존합니다."),
    134: ("The concert was standing room only.", "그 콘서트는 입석뿐이었습니다(매진이었습니다)."),
    135: ("Keep both hands on the steering wheel.", "양손을 핸들(운전대)에 두십시오."),
    136: ("Traffic congestion is a major issue in the city.", "교통 체증은 도시의 주요 문제입니다.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d25p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day25_part3.json
with open('day25_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 25 Part 3 Created (Intermediate Traffic).")
