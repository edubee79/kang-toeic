import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 14 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 14) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 14 Part 3: Intermediate - Travel, Transit & Sightseeing)
# Focus: "Hyper-TOEIC" (Strict Headword Match, Part 1/2/3 Contexts)
toeic_examples_d14p3 = {
    69: ("Travel is a great way to learn.", "여행은 무언가를 배우는 훌륭한 방법입니다."),
    70: ("We explored the underwater caves.", "우리는 수중 동굴을 탐험했습니다."),
    71: ("The hotel has a unique design.", "그 호텔은 독특한 디자인을 가지고 있습니다."),
    72: ("Each visitor must sign in at the front desk.", "각 방문객은 프런트 데스크에서 서명(등록)해야 합니다."),
    73: ("Welcome aboard Flight 101.", "101편에 탑승하신 것을 환영합니다."),
    74: ("The aircraft is ready for takeoff.", "항공기가 이륙 준비가 되었습니다."),
    75: ("The airfare is quite expensive.", "항공 요금이 꽤 비쌉니다."),
    76: ("I prefer an aisle seat.", "저는 통로 쪽 좌석을 선호합니다."),
    77: ("He is on a trip to Europe.", "그는 유럽으로 여행 중입니다."),
    78: ("Please show your ID to board the flight.", "비행기에 탑승하려면 신분증을 보여주십시오."),
    79: ("Please proceed to the boarding gate.", "탑승구로 이동해 주십시오."),
    80: ("Show your boarding pass to the attendant.", "승무원에게 탑승권을 보여주십시오."),
    81: ("The boarding time is 10:30 AM.", "탑승 시간은 오전 10시 30분입니다."),
    82: ("Sending goods by air is faster.", "항공편으로 상품을 보내는 것이 더 빠릅니다."),
    83: ("You can bring one carry-on baggage.", "기내 반입 수하물은 하나만 가져갈 수 있습니다."),
    84: ("I missed my connecting flight.", "저는 연결편을 놓쳤습니다."),
    85: ("The cabin crew will serve dinner.", "객실 승무원이 저녁 식사를 제공할 것입니다."),
    86: ("We went on a Caribbean cruise.", "우리는 카리브해 크루즈 여행을 갔습니다."),
    87: ("Where is the currency exchange counter?", "환전소는 어디에 있습니까?"),
    88: ("The boat helped us drift downstream.", "그 배는 우리가 하류로 표류하도록 도왔습니다."),
    89: ("We took a ferry across the river.", "우리는 강을 건너기 위해 여객선을 탔습니다."),
    90: ("Ask the flight attendant for water.", "승무원에게 물을 요청하십시오."),
    91: ("Drink plenty of fluid during the flight.", "비행 중에 수분을 충분히 섭취하십시오."),
    92: ("You need a guest pass to enter.", "입장하려면 방문증(게스트 패스)이 필요합니다."),
    93: ("We joined a guided tour of the museum.", "우리는 박물관 가이드 투어에 참여했습니다."),
    94: ("You must go through immigration.", "당신은 출입국 관리소를 통과해야 합니다."),
    95: ("We offer in-flight entertainment.", "우리는 기내 오락(엔터테인먼트)을 제공합니다."),
    96: ("The pilot made a smooth landing.", "조종사는 부드럽게 착륙했습니다."),
    97: ("The tower is a famous landmark.", "그 탑은 유명한 랜드마크입니다."),
    98: ("We had a layover in Dubai.", "우리는 두바이에서 경유(체류)했습니다."),
    99: ("I will leave for London tomorrow.", "저는 내일 런던으로 떠날 것입니다."),
    100: ("Passengers line up at the gate.", "승객들이 게이트 앞에 줄을 섭니다."),
    101: ("Put a luggage tag on your bag.", "가방에 수하물 태그(꼬리표)를 붙이십시오."),
    102: ("We took a ferry to the mainland.", "우리는 본토로 가는 여객선을 탔습니다."),
    103: ("Report any missing luggage immediately.", "분실된 수하물은 즉시 신고하십시오."),
    104: ("He is a native speaker of English.", "그는 영어 원어민입니다."),
    105: ("Visit the observation tower for a view.", "전망을 보려면 전망대에 방문하십시오."),
    106: ("Airlines sometimes overbook flights.", "항공사들은 때때로 항공편을 초과 예약받습니다."),
    107: ("Place your bag in the overhead rack.", "가방을 머리 위 선반에 넣으십시오."),
    108: ("The ship arrived at the port.", "배가 항구에 도착했습니다."),
    109: ("The porter carried our bags.", "짐꾼(포터)이 우리 가방을 날랐습니다."),
    110: ("You can reclaim your bags downstairs.", "아래층에서 가방을 되찾을 수 있습니다."),
    111: ("We row the boat across the lake.", "우리는 호수를 가로질러 배를 저었습니다."),
    112: ("We decided to stop over in Paris.", "우리는 파리에 잠시 들르기로(경유하기로) 결정했습니다."),
    113: ("The plane will take off soon.", "비행기가 곧 이륙할 것입니다."),
    114: ("He helped take one's bag off the rack.", "그는 선반에서 가방을 내리는 것을 도와주었습니다."),
    115: ("The train conductor checked the tickets.", "기차 차장이 표를 확인했습니다."),
    116: ("Contact the travel agency for bookings.", "예약을 위해 여행사에 연락하십시오."),
    117: ("Workers unload the cargo from the ship.", "인부들이 배에서 화물을 내립니다."),
    118: ("Please unlock the door.", "문을 열어 주십시오(잠금을 해제해 주십시오)."),
    119: ("We went on a walking tour of the city.", "우리는 도시 도보 여행을 갔습니다."),
    120: ("She traveled to a distant country.", "그녀는 먼 나라로 여행했습니다."),
    121: ("Can you do me a favor?", "제 부탁을 하나 들어주실 수 있습니까?"),
    122: ("Store luggage in the overhead bin.", "수하물을 머리 위 짐칸에 보관하십시오."),
    123: ("The remains of the castle are visible.", "그 성의 유적(잔해)이 보입니다."),
    124: ("He was rightly blamed for the error.", "그가 그 오류에 대해 비난받은 것은 마땅했습니다."),
    125: ("The room is tastefully decorated.", "그 방은 고상하게(세련되게) 장식되어 있습니다."),
    126: ("I made travel arrangement for the trip.", "저는 여행을 위해 여행 준비(수배)를 했습니다."),
    127: ("Miles accumulate with every flight.", "비행할 때마다 마일리지가 축적됩니다."),
    128: ("The map shows geographic features.", "그 지도는 지리적 특징을 보여줍니다."),
    129: ("Passengers must go through customs.", "승객들은 세관을 통과해야 합니다."),
    130: ("I am suffering from jet lag.", "저는 시차증(비행기 여행의 피로)으로 고생하고 있습니다."),
    131: ("It was a memorable trip.", "그것은 기억에 남는 여행이었습니다."),
    132: ("The statue is a war memorial.", "그 동상은 전쟁 기념비입니다."),
    133: ("The train arrived precisely on time.", "기차는 정확히 제시간에 도착했습니다."),
    134: ("I bought a round trip ticket.", "저는 왕복 티켓을 샀습니다."),
    135: ("The plane is on the runway.", "비행기가 활주로에 있습니다."),
    136: ("She took medicine for seasickness.", "그녀는 뱃멀미 약을 먹었습니다.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d14p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day14_part3.json
with open('day14_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 14 Part 3 Created (Intermediate Travel).")
