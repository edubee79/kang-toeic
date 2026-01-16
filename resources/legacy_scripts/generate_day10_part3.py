import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 10 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 10) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 10 Part 3: Intermediate - Shopping & Lifestyle)
# Focus: Single, Context-Rich Sentences (Part 3/4 Dialogue & Part 7 Email)
toeic_examples_d10p3 = {
    69: ("I am busy at the moment.", "저는 지금 바쁩니다."),
    70: ("We gathered to celebrate his promotion.", "우리는 그의 승진을 축하하기 위해 모였습니다."),
    71: ("The shop sells decorative items for the home.", "그 가게는 가정용 장식품을 판매합니다."),
    72: ("This discounted coupon expires next week.", "이 할인권(쿠폰)은 다음 주에 만료됩니다."),
    73: ("This house is not for sale.", "이 집은 팔려고 내놓은 것이 아닙니다."),
    74: ("Everything is half price today.", "오늘 모든 것이 반값입니다."),
    75: ("She had a bag strapped to her shoulder.", "그녀는 가방을 어깨에 메고 있었습니다."),
    76: ("We decided to walk instead of taking a taxi.", "우리는 택시를 타는 대신에 걷기로 결정했습니다."),
    77: ("You can make a purchase online.", "온라인으로 구입할 수 있습니다."),
    78: ("It makes no difference to me.", "그것은 저에게 아무런 상관이 없습니다(차이가 없습니다)."),
    79: ("Please pay for your items at the counter.", "카운터에서 물품 값을 지불해 주십시오."),
    80: ("Not that I know of.", "내가 아는 한 아닙니다."),
    81: ("Mr. Kim is out of town on business.", "김 선생님은 사업차 시내에 안 계십니다(다른 곳으로 떠나셨습니다)."),
    82: ("Please hang your overcoat in the closet.", "외투를 옷장에 걸어 주십시오."),
    83: ("We prefer customers to pay in cash.", "우리는 고객들이 현찰로 지불하는 것을 선호합니다."),
    84: ("New arrivals are put on display.", "신상품들이 진열(전시)되어 있습니다."),
    85: ("Your shoelace is untied.", "당신의 신발 끈이 풀렸습니다."),
    86: ("The shopkeeper was very friendly.", "가게 주인이 매우 친절했습니다."),
    87: ("The cars are displayed in the showroom.", "자동차들이 전시장(진열실)에 전시되어 있습니다."),
    88: ("The sleeves of this shirt are too long.", "이 셔츠의 소매가 너무 깁니다."),
    89: ("I bought a souvenir to remember the trip.", "저는 여행을 기념하기 위해 기념품을 샀습니다."),
    90: ("Papers were stacked in a pile.", "서류들이 더미로 쌓여 있었습니다."),
    91: ("People stood in line for tickets.", "사람들이 티켓을 사기 위해 줄을 섰습니다."),
    92: ("We met at the storefront.", "우리는 가게 앞 공간에서 만났습니다."),
    93: ("She is a stylish dresser.", "그녀는 패션 감각이 있는(멋진) 옷차림을 하는 사람입니다."),
    94: ("The price tag is missing.", "가격표(꼬리표)가 없습니다."),
    95: ("The waiter came to take an order.", "웨이터가 주문을 받으러 왔습니다."),
    96: ("Can I try this on?", "이것을 입어 봐도 될까요?"),
    97: ("The report underlines the importance of safety.", "그 보고서는 안전의 중요성을 강조합니다(밑줄을 긋습니다)."),
    98: ("I need to replace my watchband.", "저는 시곗줄을 교체해야 합니다."),
    99: ("We went window shopping at the mall.", "우리는 쇼핑몰에서 아이쇼핑을 했습니다."),
    100: ("We cannot afford to buy a new car.", "우리는 새 차를 살 여유가 없습니다."),
    101: ("The store sells apparel for men and women.", "그 가게는 남성 및 여성용 의류를 판매합니다."),
    102: ("This section sells dairy products.", "이 구역은 유제품을 판매합니다."),
    103: ("It must be elsewhere.", "그것은 다른 장소에(다른 경우에는) 있음에 틀림없습니다."),
    104: ("I received a gift certificate for my birthday.", "저는 생일 선물로 상품권을 받았습니다."),
    105: ("Handle the glassware with care.", "유리 제품을 조심해서 다루십시오."),
    106: ("This restaurant is inexpensive but good.", "이 식당은 비싸지 않지만 훌륭합니다."),
    107: ("Have you seen him lately?", "최근에 그를 본 적이 있습니까?"),
    108: ("This is the latest model.", "이것은 최신 모델입니다."),
    109: ("We stayed at a luxury hotel.", "우리는 호화로운(사치스러운) 호텔에 묵었습니다."),
    110: ("She wore a warm outerwear.", "그녀는 따뜻한 겉옷(외투)을 입었습니다."),
    111: ("There is a power outlet near the desk.", "책상 근처에 콘센트가 있습니다."),
    112: ("This device is lightweight and portable.", "이 장치는 가볍고 휴대용입니다."),
    113: ("The magazine has a large readership.", "그 잡지는 많은 독자 수를 보유하고 있습니다."),
    114: ("Information is readily available online.", "정보는 온라인에서 손쉽게(즉시) 얻을 수 있습니다."),
    115: ("This ticket is fully refundable.", "이 티켓은 전액 환불 가능합니다."),
    116: ("The value of the dollar has risen.", "달러의 가치(가격)가 올랐습니다."),
    117: ("She has a large collection of stamps.", "그녀는 많은 우표 수집품(모음)을 가지고 있습니다."),
    118: ("We offer a variety of services.", "우리는 다양한 서비스를 제공합니다."),
    119: ("Tickets are available at a discount.", "티켓은 할인가로 이용 가능합니다."),
    120: ("Can I pay by check?", "수표로 지불해도 될까요?"),
    121: ("We accept payment by credit card.", "우리는 신용카드 결제를 받습니다."),
    122: ("It is by no means certain.", "그것은 결코 확실하지 않습니다."),
    123: ("There is no extra charge for delivery.", "배송에 대한 추가 비용은 없습니다."),
    124: ("Please get in line.", "줄에 들어가 서 주십시오."),
    125: ("The store gave a discount on the shoes.", "가게는 신발을 할인해 주었습니다."),
    126: ("I would like to pay in cash.", "저는 현금으로 지불하고 싶습니다."),
    127: ("They displayed the merchandise in the window.", "그들은 쇼윈도에 상품(제품)을 진열했습니다."),
    128: ("Please submit the report by Friday at the latest.", "늦어도 금요일까지는 보고서를 제출해 주십시오."),
    129: ("The new products are in the showcase.", "신제품들이 유리 진열장에 있습니다."),
    130: ("This textile is used for clothing.", "이 직물(섬유)은 의류용으로 사용됩니다."),
    131: ("He lives a thrifty life.", "그는 검소한(검약하는) 삶을 삽니다."),
    132: ("The car is still under warranty.", "그 차는 아직 보증 기간 중입니다."),
    133: ("This coupon is valid for one month.", "이 쿠폰은 한 달 동안 유효합니다."),
    134: ("I used a voucher to pay for the meal.", "저는 식사비를 지불하기 위해 상품권을 사용했습니다."),
    135: ("We buy materials wholesale.", "우리는 재료를 도매로(다량으로) 구입합니다."),
    136: ("Would you like me to wrap the gift?", "선물을 포장해 드릴까요?")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d10p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day10_part3.json
with open('day10_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 10 Part 3 Created (Intermediate).")
