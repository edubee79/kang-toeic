import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 11 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 11) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 11 Part 2: Basic Technology & Product Details)
# Focus: Strict Headword Match & Functional Contexts
toeic_examples_d11p2 = {
    41: ("This computer is superior to the old model.", "이 컴퓨터는 구형 모델보다 우수합니다."),
    42: ("He has absolute confidence in the product.", "그는 제품에 절대적인 확신을 가지고 있습니다."),
    43: ("We plan to broaden our research.", "우리는 연구 범위를 넓힐 계획입니다."),
    44: ("Corrosion can damage the metal pipes.", "부식은 금속 파이프를 손상시킬 수 있습니다."),
    45: ("The device can be operated remotely.", "그 장치는 원격으로 작동될 수 있습니다."),
    46: ("We use up-to-date technology.", "우리는 최신 기술을 사용합니다."),
    47: ("The printer broke down yesterday.", "프린터가 어제 고장 났습니다."),
    48: ("He is a software developer.", "그는 소프트웨어 개발자입니다."),
    49: ("These shoes are handmade.", "이 신발은 수공으로 만들어졌습니다."),
    50: ("People stood in a row.", "사람들이 한 줄로(연이어) 서 있었습니다."),
    51: ("The train arrived late.", "기차가 늦게 도착했습니다."),
    52: ("Please close the lid tightly.", "뚜껑을 꽉 닫아 주십시오."),
    53: ("The cookies are in the shape of a star.", "쿠키는 별 모양입니다."),
    54: ("The artist made a sketch of the building.", "그 예술가는 건물의 스케치를 그렸습니다."),
    55: ("Please switch off the lights when leaving.", "나갈 때는 전등 스위치를 꺼 주십시오."),
    56: ("Turn off the machine after use.", "사용 후에는 기계를 꺼 주십시오."),
    57: ("He is known for his innovative ideas.", "그는 혁신적인 아이디어로 알려져 있습니다."),
    58: ("This table is made of wood.", "이 테이블은 나무로 만들어졌습니다."),
    59: ("Please check our product catalog.", "저희 제품 목록(카탈로그)을 확인해 주십시오."),
    60: ("She works as a chemist in the laboratory.", "그녀는 실험실에서 화학자로 일합니다."),
    61: ("The store will close down next month.", "그 가게는 다음 달에 폐업할(문을 닫을) 것입니다."),
    62: ("He is in control of the project.", "그는 그 프로젝트를 관리(통제)하고 있습니다."),
    63: ("They designed a new logo for the company.", "그들은 회사를 위해 새로운 로고를 디자인했습니다."),
    64: ("The discovery of new oil fields is important.", "새로운 유전의 발견은 중요합니다."),
    65: ("This is a historic building.", "이것은 역사적으로 중요한 건물입니다."),
    66: ("The telephone is a useful invention.", "전화기는 유용한 발명품입니다."),
    67: ("This is the original document.", "이것은 원본 문서입니다."),
    68: ("The ring is made of pure gold.", "그 반지는 순금으로 만들어졌습니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d11p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day11_part2.json
with open('day11_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 11 Part 2 Created (Basic Tech & Products).")
