import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 10 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 10) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 10 Part 1: Shopping & Retail)
# Focus: Part 5/7 Style, Business & Consumer Context
toeic_examples_d10p1 = {
    1: ("Tickets can be purchased online or at the box office.", "티켓은 온라인이나 매표소에서 구매할(구입할) 수 있습니다."),
    2: ("We offer quality products at a reasonable price.", "우리는 합리적인 가격에 양질의 제품을 제공합니다."),
    3: ("The hotel provides affordable accommodation for travelers.", "그 호텔은 여행객들에게 감당할 수 있는(저렴한) 숙박 시설을 제공합니다."),
    4: ("The package arrived not exactly as described.", "소포는 설명된 것과 정확히 같지는 않게 도착했습니다."),
    5: ("You can pay for the item in monthly installments.", "물품 대금은 월 할부로 지불하실 수 있습니다."),
    6: ("Please give us two weeks' notice before moving out.", "이사 나가기 전에 2주 전에 통지해 주십시오."),
    7: ("There is an extra charge for shipping.", "배송에는 추가 요금(비용)이 있습니다."),
    8: ("We are looking for an experienced sales manager.", "우리는 경험이 풍부한(노련한) 영업 매니저를 찾고 있습니다."),
    9: ("Please read the instructions carefully before use.", "사용 전에 설명서(지시 사항)를 주의 깊게 읽어 주십시오."),
    10: ("She is an expert in digital marketing.", "그녀는 디지털 마케팅 분야의 전문가입니다."),
    11: ("The product comes with a two-year warranty.", "그 제품은 2년 보증이 따라옵니다."),
    12: ("Customers may request a full refund within 30 days.", "고객은 30일 이내에 전액 환불을 요청할 수 있습니다."),
    13: ("The magazine offers a discount to new subscribers.", "그 잡지는 신규 구독자들에게 할인을 제공합니다."),
    14: ("We guarantee free delivery on all orders.", "우리는 모든 주문에 대해 무료 배송을 보장합니다."),
    15: ("Please keep the receipt as proof of purchase.", "구매 증빙으로 영수증을 보관해 주십시오."),
    16: ("The documents must be examined carefully.", "문서는 주의 깊게 검토되어야 합니다."),
    17: ("The company offers a competitive salary package.", "그 회사는 경쟁력 있는 급여 패키지를 제공(제안)합니다."),
    18: ("Employees receive a wide range of benefits.", "직원들은 다양한 혜택(이익)을 받습니다."),
    19: ("This club is exclusively for members.", "이 클럽은 오직(독점적으로) 회원들만을 위한 곳입니다."),
    20: ("Please provide a detailed description of the item.", "물품에 대한 상세한 설명을 제공해 주십시오."),
    21: ("The process is relatively simple.", "그 과정은 비교적 간단합니다."),
    22: ("Preparation for the conference is underway.", "회의 준비가 진행 중입니다."),
    23: ("Do you have any spare time this afternoon?", "오늘 오후에 남는(여분의) 시간이 있으십니까?"),
    24: ("Smoking is prohibited in this area.", "이 구역(지역)에서는 흡연이 금지되어 있습니다."),
    25: ("All winter items are on clearance sale.", "모든 겨울 용품이 재고 정리(땡처리) 세일 중입니다."),
    26: ("We can alter the suit to fit you perfectly.", "우리는 양복이 귀하에게 딱 맞도록 수선(변경)할 수 있습니다."),
    27: ("You can apply for the membership online.", "온라인으로 멤버십을 신청할 수 있습니다."),
    28: ("The agreement was mutually beneficial.", "그 합의는 상호 이익이 되었습니다."),
    29: ("We need to find a more efficient method.", "우리는 더 효율적인 방법(방식)을 찾아야 합니다."),
    30: ("The delay is not acceptable to our clients.", "지연은 우리 고객들에게 받아들여질 수 없습니다(용인될 수 없습니다)."),
    31: ("He has a strong desire to succeed.", "그는 성공에 대한 강한 욕구(소망)를 가지고 있습니다."),
    32: ("This voucher is redeemable at any of our branches.", "이 상품권은 우리 지점 어디에서나 교환 가능합니다."),
    33: ("The store will officially open next Monday.", "그 가게는 다음 주 월요일에 공식적으로 문을 열 것입니다."),
    34: ("Energy consumption has increased significantly.", "에너지 소비량이 상당히 증가했습니다."),
    35: ("She qualifies for the senior discount.", "그녀는 경로 할인 자격이 됩니다."),
    36: ("This fabric is made of 100% cotton.", "이 직물(천)은 100% 면으로 만들어졌습니다."),
    37: ("The painting was sold at an auction.", "그 그림은 경매에서 팔렸습니다."),
    38: ("The restaurant serves authentic Italian cuisine.", "그 식당은 정통 이탈리아 요리를 제공합니다 (진품의)."),
    39: ("Your ticket is valid for one year.", "귀하의 티켓은 1년 동안 유효합니다."),
    40: ("We deal with several reliable software vendors.", "우리는 몇몇 신뢰할 수 있는 소프트웨어 판매업체(공급업체)와 거래합니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d10p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day10_part1.json
with open('day10_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 10 Part 1 Created (Shopping & Retail) - Double Examples Removed.")
