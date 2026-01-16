import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 14 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 14) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 14 Part 1: Travel, Airlines & Tourism)
# Focus: "Hyper-TOEIC" (Strict Headword Match, Business Travel Context)
toeic_examples_d14p1 = {
    1: ("She has international business experience.", "그녀는 국제적인 사업 경험을 가지고 있습니다."),
    2: ("The museum is a popular tourist attraction.", "그 박물관은 인기 있는 관광 명소입니다."),
    3: ("Please check your travel itinerary.", "여행 일정을 확인해 주십시오."),
    4: ("The island is known for its exotic plants.", "그 섬은 이국적인 식물들로 알려져 있습니다."),
    5: ("The city has a diverse culture.", "그 도시는 다양한 문화를 가지고 있습니다."),
    6: ("The hotel offers superb service.", "그 호텔은 최고의 서비스를 제공합니다."),
    7: ("Passengers must claim their baggage.", "승객들은 수하물을 찾아야 합니다."),
    8: ("Our final destination is Paris.", "우리의 최종 목적지는 파리입니다."),
    9: ("We are looking for the missing file.", "우리는 분실된(없어진) 파일을 찾고 있습니다."),
    10: ("We need to locate the nearest station.", "우리는 가장 가까운 역의 위치를 찾아야 합니다."),
    11: ("The flight takes approximately three hours.", "비행은 대략 3시간이 걸립니다."),
    12: ("It is my duty to help customers.", "고객을 돕는 것은 제 의무입니다."),
    13: ("We use a new process for checking in.", "우리는 체크인을 위해 새로운 절차(공정)를 사용합니다."),
    14: ("Passengers are now ready to board.", "승객들은 이제 탑승할 준비가 되었습니다."),
    15: ("Please wear comfortable shoes for the tour.", "투어를 위해 편안한 신발을 신으십시오."),
    16: ("You must declare all valuable items.", "당신은 모든 귀중품을 신고해야 합니다."),
    17: ("Please specify your meal preference.", "식사 선호 사항을 명시해 주십시오."),
    18: ("The train will depart at 5 PM.", "기차는 오후 5시에 출발할 것입니다."),
    19: ("In case of emergency, call this number.", "비상시에는 이 번호로 전화하십시오."),
    20: ("Every passenger must have a ticket.", "모든 승객은 표를 소지해야 합니다."),
    21: ("All outgoing flights are delayed.", "모든 출발(나가는) 항공편이 지연되고 있습니다."),
    22: ("The lid must be sealed tightly.", "뚜껑은 단단히 밀봉되어야 합니다."),
    23: ("We went on a guided tour of the city.", "우리는 도시 가이드 투어를 갔습니다."),
    24: ("The airline is a major carrier in the region.", "그 항공사는 그 지역의 주요 운송 업체(항공사)입니다."),
    25: ("The office is customarily closed on Sundays.", "그 사무실은 관례적으로 일요일에 문을 닫습니다."),
    26: ("Do not confuse the two products.", "두 제품을 혼동하지 마십시오."),
    27: ("The flight is scheduled to arrive at noon.", "비행기는 정오에 도착할 예정입니다."),
    28: ("Please read the travel brochure.", "여행 안내 책자를 읽어보십시오."),
    29: ("The project will involve many people.", "그 프로젝트는 많은 사람들을 수반할(관련시킬) 것입니다."),
    30: ("We ship orders within 24 hours.", "우리는 24시간 이내에 주문품을 배송합니다(배로 보냅니다)."),
    31: ("I packed my clothes in a suitcase.", "저는 옷을 여행 가방에 챙겼습니다."),
    32: ("The manager is currently unavailable.", "관리자는 현재 자리에 없습니다(이용할 수 없습니다)."),
    33: ("Please fill out the customs declaration form.", "세관 신고서를 작성해 주십시오."),
    34: ("You must clear customs upon arrival.", "도착 즉시 세관을 통과해야 합니다."),
    35: ("The office is five miles away.", "사무실은 5마일 떨어져 있습니다."),
    36: ("There was a dramatic increase in sales.", "매출에 급격한(극적인) 증가가 있었습니다."),
    37: ("Thank you for your warm hospitality.", "따뜻한 환대(접대)에 감사드립니다."),
    38: ("Guests can indulge in spa treatments.", "손님들은 스파 트리트먼트를 마음껏 즐길 수 있습니다."),
    39: ("The hotel is in close proximity to the airport.", "그 호텔은 공항에 아주 근접해 있습니다(가까운 근접성에 있습니다)."),
    40: ("The airline offers comfortable seating.", "그 항공사는 편안한 좌석(좌석 설비)을 제공합니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d14p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day14_part1.json
with open('day14_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 14 Part 1 Created (Travel & Tourism).")
