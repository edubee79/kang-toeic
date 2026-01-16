import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 11 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 11) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 11 Part 1: Product Development & Research)
# Focus: Strict Headword Match & Single Example Policy
toeic_examples_d11p1 = {
    1: ("The team will research the market trends.", "그 팀은 시장 동향을 연구할 것입니다."),
    2: ("Engineers devised a new method.", "엔지니어들은 새로운 방법을 고안했습니다."),
    3: ("It is a revolutionary product.", "그것은 혁명적인 제품입니다."),
    4: ("The company launched an innovative device.", "그 회사는 혁신적인 장치를 출시했습니다."),
    5: ("The new model features a larger screen.", "새 모델은 더 큰 화면을 특징으로 합니다."),
    6: ("He draws inspiration from nature.", "그는 자연에서 영감을 얻습니다."),
    7: ("The evidence was not sufficiently convincing.", "증거는 충분히 설득력이 있지 않았습니다."),
    8: ("The company applied for a patent.", "그 회사는 특허를 출원했습니다."),
    9: ("She envisions a bright future for the company.", "그녀는 회사의 밝은 미래를 구상합니다(마음속에 그립니다)."),
    10: ("We plan to extend the deadline.", "우리는 마감 기한을 연장할 계획입니다."),
    11: ("The following information is important.", "다음의 정보는 중요합니다."),
    12: ("We intend to expand our business.", "우리는 사업을 확장할 작정입니다(의도입니다)."),
    13: ("The government granted the request.", "정부는 그 요청을 승인했습니다(수여했습니다)."),
    14: ("Smoking is not allowed in the building.", "건물 내에서는 흡연이 허용되지 않습니다."),
    15: ("Inspectors will inspect the factory.", "조사관들이 공장을 점검할 것입니다."),
    16: ("We aim to improve customer satisfaction.", "우리는 고객 만족도를 향상시키는 것을 목표로 합니다."),
    17: ("Online shopping is becoming increasingly popular.", "온라인 쇼핑은 점점 더 인기가 많아지고 있습니다."),
    18: ("They decided to invest in real estate.", "그들은 부동산에 투자하기로 결정했습니다."),
    19: ("We offer various kinds of services.", "우리는 다양한 종류의 서비스를 제공합니다."),
    20: ("Please upgrade your software.", "소프트웨어를 업그레이드해 주십시오."),
    21: ("Please refer to the instruction manual.", "사용 설명서를 참조해 주십시오."),
    22: ("We need to explore new markets.", "우리는 새로운 시장을 탐구해야(조사해야) 합니다."),
    23: ("I received a quick response to my email.", "저는 이메일에 대한 빠른 응답을 받았습니다."),
    24: ("The appearance of the product is important.", "제품의 외관은 중요합니다."),
    25: ("The marketing campaign was successful.", "마케팅 캠페인은 성공적이었습니다."),
    26: ("The conference will be held in Seoul.", "회의는 서울에서 개최될 것입니다."),
    27: ("Technology continues to advance rapidly.", "기술은 계속해서 빠르게 진보합니다."),
    28: ("He is a reliable employee.", "그는 믿을 수 있는 직원입니다."),
    29: ("We are committed to quality control.", "우리는 품질 관리에 전념하고 있습니다."),
    30: ("Domestic sales have increased.", "국내 판매가 증가했습니다."),
    31: ("The project is in the development stage.", "그 프로젝트는 개발 단계에 있습니다."),
    32: ("Please check the availability of the item.", "물품의 재고 유무(이용 가능성)를 확인해 주십시오."),
    33: ("We need to update our website.", "우리는 웹사이트를 갱신해야 합니다."),
    34: ("The data must be accurate.", "데이터는 정확해야 합니다."),
    35: ("The process is too complicated.", "그 과정은 너무 복잡합니다."),
    36: ("He is an accomplished pianist.", "그는 기량이 뛰어난(성취한) 피아니스트입니다."),
    37: ("For further inquiry, please contact us.", "추가 질문이 있으시면 저희에게 연락해 주십시오."),
    38: ("There is no indication of economic recovery.", "경제 회복의 징후가 없습니다."),
    39: ("The manufacturer offers a one-year warranty.", "제조업체는 1년 보증을 제공합니다."),
    40: ("This software is compatible with your computer.", "이 소프트웨어는 귀하의 컴퓨터와 호환됩니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d11p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day11_part1.json
with open('day11_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 11 Part 1 Created (Product Dev & Research).")
