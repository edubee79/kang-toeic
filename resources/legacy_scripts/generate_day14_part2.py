import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 14 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 14) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 14 Part 2: Basic LC/RC - Travel & Transportation)
# Focus: "Hyper-TOEIC" (Strict Headword Match, Part 1/2 Scenarios)
toeic_examples_d14p2 = {
    41: ("We offer unlimited mileage on car rentals.", "저희는 렌터카에 대해 무제한 주행 거리를 제공합니다."),
    42: ("Simply fill out this form.", "간단히 이 양식을 작성해 주십시오."),
    43: ("Besides English, he speaks Spanish.", "영어 외에도(영어 게다가), 그는 스페인어를 구사합니다."),
    44: ("The festival is traditionally held in May.", "그 축제는 전통적으로 5월에 열립니다."),
    45: ("Please contact your travel agent.", "여행사 직원(대리인)에게 연락하십시오."),
    46: ("We arrived at the airport early.", "우리는 공항에 일찍 도착했습니다."),
    47: ("The hotel is located near the beach.", "그 호텔은 해변 근처에 위치해 있습니다."),
    48: ("We took a boat to the island.", "우리는 섬으로 가기 위해 배를 탔습니다."),
    49: ("I prefer to fly business class.", "저는 비즈니스석(비즈니스 클래스)으로 비행하는 것을 선호합니다."),
    50: ("This flight connects to New York.", "이 항공편은 뉴욕으로 연결됩니다."),
    51: ("Check the departure time on your ticket.", "티켓에 있는 출발 시간을 확인하십시오."),
    52: ("I bought some perfume at the duty-free shop.", "저는 면세점에서 향수를 좀 샀습니다."),
    53: ("She traveled first class.", "그녀는 일등석으로 여행했습니다."),
    54: ("The flight was canceled due to weather.", "비행편이 날씨 때문에 취소되었습니다."),
    55: ("I plan to go on vacation next week.", "저는 다음 주에 휴가를 갈 계획입니다."),
    56: ("The guidebook lists local attractions.", "가이드북(여행 안내서)에는 지역 명소들이 나열되어 있습니다."),
    57: ("We wish you a safe journey.", "안전한 여행(여정)이 되시기를 바랍니다."),
    58: ("There is a nonstop flight to London.", "런던으로 가는 직항편이 있습니다."),
    59: ("I need to pack my bags.", "저는 가방을 싸야 합니다."),
    60: ("Please show your passport at the border.", "국경에서 여권을 보여 주십시오."),
    61: ("The pilot announced a delay.", "조종사는 지연을 알렸습니다(발표했습니다)."),
    62: ("She visited the beauty salon.", "그녀는 미용실을 방문했습니다."),
    63: ("The project spanned five years.", "그 프로젝트는 5년에 걸쳐 이어졌습니다."),
    64: ("How was your trip to Japan?", "일본 여행은 어땠습니까?"),
    65: ("They crossed the border into Canada.", "그들은 국경을 넘어 캐나다로 들어갔습니다."),
    66: ("The hotel is in a central location.", "그 호텔은 중심가에(중심 위치에) 있습니다."),
    67: ("Keep your passport in a safe place.", "여권을 안전한 장소에 보관하십시오."),
    68: ("There was a sudden change in plans.", "계획에 갑작스러운 변경이 있었습니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d14p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day14_part2.json
with open('day14_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 14 Part 2 Created (Basic Travel).")
