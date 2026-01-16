import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 27 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 27) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 27 Part 2: Basic Business & General Life)
# Focus: "Hyper-TOEIC" (Common Business Phrases, Office Context)
toeic_examples_d27p2 = {
    41: ("The new project presents a significant challenge.", "새로운 프로젝트는 중대한 도전을 제시합니다."),
    42: ("We strive to ensure the comfort of our guests.", "우리는 손님들의 편안함(위로)을 보장하기 위해 노력합니다."),
    43: ("The camera is compact and easy to carry.", "그 카메라는 소형이고 휴대하기 쉽습니다."),
    44: ("Please analyze the sales data carefully.", "판매 자료를 주의 깊게 분석해 주십시오."),
    45: ("The hotel is within walking distance of the station.", "그 호텔은 역에서 걸어갈 수 있는 거리에 있습니다."),
    46: ("He has only an elementary knowledge of accounting.", "그는 회계에 대한 초보적인(기본이 되는) 지식만 가지고 있습니다."),
    47: ("We charge extra for express delivery.", "우리는 특급 배송에 대해 추가 요금을 청구합니다."),
    48: ("The painting turned out to be a fake.", "그 그림은 위조품(가짜)으로 판명되었습니다."),
    49: ("The companies announced a joint venture.", "그 회사들은 공동 투자를 발표했습니다."),
    50: ("Please listen to the instructions carefully.", "지시 사항을 주의 깊게 들어주십시오."),
    51: ("Every new employee is assigned a mentor.", "모든 신입 사원에게는 조언자(멘토)가 배정됩니다."),
    52: ("We need to expand our distribution network.", "우리는 유통망을 확장해야 합니다."),
    53: ("The resort offers a relaxing atmosphere.", "그 리조트는 긴장을 풀어 주는 분위기를 제공합니다."),
    54: ("I booked a rental car for the trip.", "저는 여행을 위해 임대 자동차를 예약했습니다."),
    55: ("Not a single error was found in the report.", "보고서에서 단 하나의 오류도 발견되지 않았습니다."),
    56: ("The meeting will start soon.", "회의가 곧 시작될 것입니다."),
    57: ("The accuracy of the data is questionable.", "데이터의 정확도가 의심스럽습니다."),
    58: ("The article was biased against the company.", "그 기사는 회사에 대해 편향되었습니다."),
    59: ("Our primary goal is customer satisfaction.", "우리의 주요 목표는 고객 만족입니다."),
    60: ("Please be careful not to lose your ID badge.", "신분증을 분실하지 않도록 주의하십시오."),
    61: ("The owner of the building plans to renovate it.", "건물의 주인(소유주)은 그것을 개조할 계획입니다."),
    62: ("Investing in startups can be risky.", "스타트업에 투자하는 것은 위험할 수 있습니다."),
    63: ("Sales have improved somewhat since last month.", "지난달 이후로 매출이 다소(얼마간) 개선되었습니다."),
    64: ("The schedule for the strict is very tight.", "그 지구의 일정은 매우 빠듯합니다(꽉 조여있습니다)."),
    65: ("I am truly grateful for your support.", "당신의 지원에 진심으로(정말로) 감사드립니다."),
    66: ("Business is continuing as usual.", "사업은 평소와 같이(흔히 있는 대로) 계속되고 있습니다."),
    67: ("We apologize for the long wait.", "긴 기다림에 대해 사과드립니다."),
    68: ("There is no need to worry about the cost.", "비용에 대해 걱정할 필요는 없습니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d27p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day27_part2.json
with open('day27_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 27 Part 2 Created (Basic Business).")
