import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 7 Part 2 : No. 41 ~ 68 (28 words) ---
# Strict Range: 41-68
# Target Score: 650 (Basic LC/RC)
part2_df = df[(df['Day'] == 7) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 7 Part 2: Basic Business & Marketing)
# Theme: Office Daily Life, Basic Marketing/Sales Expressions
toeic_examples_d7p2 = {
    41: ("The receptionist is busy answering the phone.", "접수원은 전화를 받느라 바쁩니다."),
    42: ("The item is sold as is, with no warranty.", "그 품목은 보증 없이 있는 그대로 판매됩니다."),
    43: ("Salary is based on experience and performance.", "급여는 경력과 성과에 근거합니다."),
    44: ("I am familiar with the new software program.", "저는 새 소프트웨어 프로그램에 익숙합니다(잘 알고 있습니다)."),
    45: ("We need concrete evidence to support the claim.", "주장을 뒷받침할 구체적인 증거가 필요합니다."),
    46: ("The meeting time conflicts with my schedule.", "회의 시간이 제 일정과 겹칩니다(충돌합니다)."),
    47: ("New products are on display in the showroom.", "신제품들이 쇼룸에 전시되어(진열되어) 있습니다."),
    48: ("The tree cast a long shadow on the ground.", "나무가 땅에 긴 그림자를 드리웠습니다. (Part 1 빈출)"),
    49: ("Our products are sold throughout the world.", "우리 제품은 전 세계에서 판매됩니다."),
    50: ("The store offers a wide array of electronic goods.", "그 가게는 다양한 종류의 전자 제품을 제공합니다."),
    51: ("He made an attempt to finish the report on time.", "그는 보고서를 제시간에 끝내기 위해 시도했습니다."),
    52: ("We need audiovisual equipment for the presentation.", "프레젠테이션을 위해 시청각 장비가 필요합니다."),
    53: ("Regular maintenance helps avoid costly repairs.", "정기적인 유지 보수는 비용이 많이 드는 수리를 방지하는 데 도움이 됩니다."),
    54: ("The company is based in New York.", "그 회사는 뉴욕에 기반을 두고 있습니다."),
    55: ("We went to the cinema to watch a movie.", "우리는 영화를 보러 극장에 갔습니다."),
    56: ("The company offers competitive salaries and benefits.", "그 회사는 경쟁력 있는 급여와 복리후생을 제공합니다."),
    57: ("We can conclude that the marketing strategy was successful.", "우리는 마케팅 전략이 성공적이었다고 결론 내릴 수 있습니다."),
    58: ("He drank an energy drink to stay awake.", "그는 깨어 있기 위해 에너지 음료를 마셨습니다."),
    59: ("Please find out when the next train leaves.", "다음 기차가 언제 떠나는지 알아봐(찾아봐) 주십시오."),
    60: ("The dress code for the party is informal.", "파티의 복장 규정은 격식에 얽매이지 않는(캐주얼한) 편안한 차림입니다."),
    61: ("We are targeting the overseas market.", "우리는 해외 시장을 목표로 하고 있습니다."),
    62: ("Analysts noticed a changing pattern in consumer behavior.", "분석가들은 소비자 행동의 변화하는 경향(패턴)을 알아차렸습니다."),
    63: ("Contact the public relations department for press inquiries.", "언론 문의는 홍보부에 연락하십시오."),
    64: ("The sales department achieved its monthly target.", "영업부(판매부)는 월간 목표를 달성했습니다."),
    65: ("We follow strict safety guidelines in the factory.", "우리는 공장에서 엄격한 안전 지침을 따릅니다."),
    66: ("A hammer is a useful tool for this job.", "망치는 이 작업에 유용한 도구입니다."),
    67: ("This is a typical example of poor customer service.", "이것은 형편없는 고객 서비스의 전형적인 예입니다."),
    68: ("The museum is open throughout the year.", "박물관은 연중내내 개관합니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d7p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day7_part2.json
with open('day7_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 7 Part 2 Created.")
