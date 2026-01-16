import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 6 Part 4 : No. 137 ~ 168 (32 words) ---
# Strict Range: 137-168
# Target Score: 900 (Advanced)
part4_df = df[(df['Day'] == 6) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 6 Part 4: Advanced)
# Themes: Lease/Property, Professional Attitude, Arts & Culture Reviews
toeic_examples_d6p4 = {
    137: ("Please ensure you show up on time for the interview.", "인터뷰 시간에 맞춰 나타나도록(도착하도록) 해 주십시오."),
    138: ("Visitors can take a tour of the manufacturing facility.", "방문객들은 제조 시설을 둘러볼(견학할) 수 있습니다."),
    139: ("Patients must be in line to receive the vaccination.", "환자들은 예방 접종을 받기 위해 줄을 서 있어야 합니다."),
    140: ("I want to try something different for a change.", "기분 전환으로 뭔가 다른 것을 시도해 보고 싶습니다."),
    141: ("Passengers read magazines to pass the time while waiting.", "승객들은 기다리는 동안 시간을 보내기 위해 잡지를 읽습니다."),
    142: ("The models were asked to pose for the fashion shoot.", "모델들은 패션 촬영을 위해 자세를 취해 달라는 요청을 받았습니다."),
    143: ("Stay tuned for more updates on the weather forecast.", "일기 예보에 대한 더 많은 소식을 위해 채널을 고정해 주십시오."),
    144: ("Tenants must vacate the premises by the end of the month.", "세입자들은 이번 달 말까지 구내를 비워야 합니다. (Part 7 임대차 계약 빈출)"),
    145: ("The audience was very appreciative of the performance.", "청중은 그 공연에 대해 매우 감사해했습니다(감상했습니다)."),
    146: ("Employees are allowed to dress casually on Fridays.", "직원들은 금요일에 캐주얼하게(약식으로) 입는 것이 허용됩니다."),
    147: ("The professor's lecture on economics was enlightening.", "경제학에 대한 교수의 강의는 깨우침을 주었습니다."),
    148: ("The team worked enthusiastically to meet the deadline.", "팀은 마감 기한을 맞추기 위해 열광적으로(매우 열심히) 일했습니다."),
    149: ("The award recognizes excellence in customer service.", "그 상은 고객 서비스에서의 탁월함을 인정합니다."),
    150: ("The tour includes a day excursion to the island.", "투어에는 섬으로의 당일 소풍(여행)이 포함되어 있습니다."),
    151: ("The city is planning festivities for the holidays.", "시는 연휴를 위한 축제 행사를 계획하고 있습니다."),
    152: ("Tourists flocked to the museum to see the new exhibit.", "관광객들이 새로운 전시를 보기 위해 박물관으로 떼 지어 모였습니다."),
    153: ("The plot of the novel develops intriguingly.", "그 소설의 줄거리는 흥미롭게 전개됩니다."),
    154: ("First-class seats offer more leg room for comfort.", "일등석 좌석은 편안함을 위해 더 넓은 다리 공간을 제공합니다."),
    155: ("A large mural was painted on the side of the building.", "건물 측면에 큰 벽화가 그려졌습니다."),
    156: ("The artist was commissioned to paint a portrait of the CEO.", "그 예술가는 CEO의 초상화를 그리도록 의뢰받았습니다."),
    157: ("His latest publication has received critical acclaim.", "그의 최신 출판물은 비평가들의 찬사를 받았습니다."),
    158: ("The sculpture garden features works by modern artists.", "조각 공원은 현대 예술가들의 작품을 특징으로 합니다."),
    159: ("The warranty is transferable to the new owner.", "보증서는 새 소유주에게 양도 가능합니다."),
    160: ("The health inspector closed the restaurant due to unsanitary conditions.", "보건 조사관은 비위생적인 상태 때문에 식당을 폐쇄했습니다."),
    161: ("I'm not in the mood for going out tonight.", "저는 오늘 밤에 외출하고 싶은 기분이 아닙니다."),
    162: ("Many rare plants are grown in the botanical garden.", "많은 희귀 식물들이 식물원에서 재배됩니다."),
    163: ("The article was edited to comply with censorship rules.", "그 기사는 검열 규정을 준수하기 위해 편집되었습니다."),
    164: ("They have yet to determine the cause of the accident.", "그들은 아직 사고의 원인을 밝혀내지 못했습니다."),
    165: ("There will be a 15-minute intermission between acts.", "막 사이에 15분의 휴식 시간이 있을 것입니다."),
    166: ("The former president published his memoirs last year.", "전직 대통령은 작년에 회고록을 출간했습니다."),
    167: ("This exhibition is a must-see for art lovers.", "이 전시회는 예술 애호가들이 꼭 보아야 할 것입니다."),
    168: ("The stock market staged a rally late in the day.", "주식 시장은 장 후반에 반등(랠리)을 보였습니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d6p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day6_part4.json
with open('day6_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 6 Part 4 Created.")
