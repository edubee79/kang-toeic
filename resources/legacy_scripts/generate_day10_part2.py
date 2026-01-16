import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 10 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 10) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 10 Part 2: Basic Shopping & Daily Life)
# Focus: Part 1/2 Actions & Part 3/4 Retail Scenarios
toeic_examples_d10p2 = {
    41: ("The bakery is famous for its fresh bread.", "그 빵집은 신선한 빵으로 유명합니다."),
    42: ("He is a best-selling author.", "그는 베스트셀러 작가입니다."),
    43: ("Please pay the cashier at the front counter.", "앞 카운터에 있는 계산원에게 지불해 주십시오."),
    44: ("We sell a wide range of men's clothing.", "우리는 다양한 남성 의류를 판매합니다."),
    45: ("The shop is located around the corner.", "그 가게는 모퉁이 돌면 위치해 있습니다."),
    46: ("They are wearing traditional costumes.", "그들은 전통 의상을 입고 있습니다."),
    47: ("Delivery is free for orders over $50.", "50달러 이상 주문 시 배송은 무료입니다."),
    48: ("Please read the label carefully before washing.", "세탁 전에 라벨을 주의 깊게 읽어 주십시오."),
    49: ("She is trying on a necklace.", "그녀는 목걸이를 착용해 보고 있습니다 (Part 1 빈출)."),
    50: ("Photography equipment is not allowed in the museum.", "박물관 내에서는 촬영 장비 반입이 허용되지 않습니다."),
    51: ("The books are arranged on the shelf.", "책들이 선반에 정돈되어 있습니다 (Part 1 빈출)."),
    52: ("I need to shop for some groceries.", "저는 식료품을 좀 사야(쇼핑해야) 합니다."),
    53: ("The store was crowded with shoppers.", "그 가게는 쇼핑객들로 붐볐습니다."),
    54: ("What size do you wear?", "어떤 치수를 입으십니까?"),
    55: ("She is wearing sunglasses.", "그녀는 선글라스를 착용하고 있습니다 (Part 1 상태 묘사)."),
    56: ("The supermarket is open 24 hours a day.", "그 슈퍼마켓은 하루 24시간 엽니다."),
    57: ("Please return any unwanted items within 7 days.", "원하지 않는 물품은 7일 이내에 반품해 주십시오."),
    58: ("We assess performance on a weekly basis.", "우리는 성과를 매주(주 단위로) 평가합니다."),
    59: ("This is our most popular brand.", "이것이 우리의 가장 인기 있는 브랜드입니다."),
    60: ("The department store is holding a sale.", "그 백화점은 세일 중입니다."),
    61: ("You can find cheap items at the discount store.", "할인점에서 저렴한 물건을 찾을 수 있습니다."),
    62: ("Merchandise is on display in the window.", "상품이 진열장에 전시되어 있습니다 (Part 1 빈출)."),
    63: ("This coat fits you perfectly.", "이 코트는 당신에게 딱 맞습니다."),
    64: ("The battery is fully charged.", "배터리가 완전히 충전되었습니다."),
    65: ("I'm going to the grocery store.", "저는 식료품점에 갑니다."),
    66: ("Please keep the change.", "잔돈은 가지세요(됐습니다)."),
    67: ("We store the goods in a warehouse.", "우리는 상품을 창고에 저장합니다."),
    68: ("The price includes tax.", "가격에는 세금이 포함되어 있습니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d10p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day10_part2.json
with open('day10_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 10 Part 2 Created (Basic Shopping) - Double Examples Removed.")
