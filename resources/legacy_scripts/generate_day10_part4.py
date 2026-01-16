import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 10 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 10) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 10 Part 4: Advanced - Luxury & Retail Operations)
# Focus: Strict Headword Usage & High-Context Business Scenarios
toeic_examples_d10p4 = {
    137: ("He works at an automotive repair shop.", "그는 자동차 수리점에서 일합니다."),
    138: ("The shop installed a new awning over the entrance.", "그 가게는 입구 위에 새로운 차양을 설치했습니다."),
    139: ("The cashier opened the cash register.", "계산원이 금전 등록기(계산대)를 열었습니다."),
    140: ("We sell a variety of cooking utensils.", "우리는 다양한 조리 기구를 판매합니다."),
    141: ("The jewelry is in the display case.", "보석이 진열 상자(진열함)에 들어 있습니다."),
    142: ("This garment must be dry-cleaned.", "이 의류는 드라이클리닝해야 합니다."),
    143: ("The room looks different with the new furniture.", "새 가구를 들여놓으니 방이 다르게 보입니다."),
    144: ("The tailor altered the suit to fit him.", "재단사가 그에게 맞도록 양복을 수선했습니다."),
    145: ("He forgot to wind a watch.", "그는 시계 태엽을 감는 것을 잊어버렸습니다."),
    146: ("This is a rare collectable item.", "이것은 희귀한 수집 가치가 있는 물품입니다."),
    147: ("Sales increased; conversely, profits decreased.", "매출은 증가했지만, 반대로 이익은 감소했습니다."),
    148: ("Please dilute the juice with water.", "주스를 물로 희석해 주십시오."),
    149: ("The city is hosting an art exposition.", "그 도시는 예술 박람회(전시회)를 개최하고 있습니다."),
    150: ("Generic brands are cheaper than name brands.", "일반 브랜드(노브랜드)가 유명 브랜드보다 저렴합니다."),
    151: ("We specialize in high-end electronics.", "우리는 최고급(고가) 전자제품을 전문으로 합니다."),
    152: ("The merchant sells goods at the market.", "그 상인은 시장에서 물건을 팝니다."),
    153: ("The quality has improved observably.", "품질이 눈에 띄게 향상되었습니다."),
    154: ("Predictably, the store was crowded on Black Friday.", "예상대로, 블랙 프라이데이에 그 가게는 붐볐습니다."),
    155: ("I bought a secondhand car.", "저는 중고차를 샀습니다."),
    156: ("She dressed stylishly for the party.", "그녀는 파티를 위해 유행에 맞게(현대식으로) 옷을 입었습니다."),
    157: ("We bought it at a substantial discount.", "우리는 그것을 엄청난 할인가에 구입했습니다."),
    158: ("Do not bargain over prices in this store.", "이 가게에서는 가격을 흥정하지 마십시오."),
    159: ("They embellished the room with flowers.", "그들은 꽃으로 방을 장식했습니다."),
    160: ("She embroidered her name on the handkerchief.", "그녀는 손수건에 자신의 이름을 수놓았습니다."),
    161: ("This amount is equivalent to two months' salary.", "이 금액은 두 달치 급여에 상당합니다(맞먹습니다)."),
    162: ("The ride was an exhilarating experience.", "그 놀이기구는 아주 신나는 경험이었습니다."),
    163: ("They charge an exorbitant price for coffee.", "그들은 커피에 터무니없이 비싼 가격을 청구합니다."),
    164: ("The necklace has an exquisite design.", "그 목걸이는 정교한(우아한) 디자인을 가지고 있습니다."),
    165: ("Buying a yacht is an extravagance.", "요트를 사는 것은 사치(낭비)입니다."),
    166: ("They held a lavish banquet.", "그들은 사치스러운(호화로운) 연회를 열었습니다."),
    167: ("You can redeem this coupon for a free gift.", "당신은 이 쿠폰을 무료 선물로 교환할(바꿀) 수 있습니다."),
    168: ("The clerk undercharged the customer by mistake.", "점원이 실수로 고객에게 너무 낮은 가격을 청구했습니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d10p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day10_part4.json
with open('day10_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 10 Part 4 Created (Advanced 900).")
