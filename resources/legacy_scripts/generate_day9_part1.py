import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 9 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 9) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 9 Part 1: Economy & Market Trends)
toeic_examples_d9p1 = {
    1: ("The economy has remained stagnant for the past year.", "경제는 지난 1년 동안 침체된 상태로 유지되었습니다."),
    2: ("Sales increased dramatically after the advertisement aired.", "광고가 방송된 후 판매량이 극적으로 증가했습니다."),
    3: ("Business has been brisk this holiday season.", "이번 연휴 시즌에는 사업이 활발했습니다."),
    4: ("The political situation makes the market unstable.", "정치적 상황은 시장을 불안정하게 만듭니다."),
    5: ("The technology is rapidly evolving.", "기술은 급속히 발전하고 있습니다."),
    6: ("Oil prices are expected to soar next month.", "유가가 다음 달에 치솟을(급등할) 것으로 예상됩니다."),
    7: ("The report asserts that the economy is recovering.", "그 보고서는 경제가 회복되고 있다고 주장합니다(단언합니다)."),
    8: ("The government plans to boost the economy.", "정부는 경기를 부양할(변화시킬) 계획입니다."),
    9: ("Financial analysts predict a downturn.", "금융 분석가들은 경기 침체를 예측합니다."),
    10: ("The region has great potential for investment.", "그 지역은 투자를 위한 큰 잠재력을 가지고 있습니다."),
    11: ("We are pleased to announce our new partnership.", "우리는 새로운 파트너십을 발표하게 되어 기쁩니다."),
    12: ("Interest rates remained unchanged this month.", "이번 달 금리는 변동 없이 유지되었습니다."),
    13: ("This offer is available for a limited time only.", "이 제안은 한정된 시간 동안만 유효합니다."),
    14: ("Repairing the damage would be too costly.", "피해를 복구하는 것은 비용이 너무 많이 들 것입니다."),
    15: ("Are you looking for any particular item?", "특별히 찾으시는 물건이 있습니까?"),
    16: ("Drastic measures are needed to reduce debt.", "부채를 줄이기 위해 과감한(급격한) 조치가 필요합니다."),
    17: ("The funds should be distributed evenly.", "자금은 골고루(공평하게) 분배되어야 합니다."),
    18: ("There is no evidence of fraud.", "사기의 증거가 없습니다."),
    19: ("The job offers excellent prospects for promotion.", "그 일자리는 승진에 대한 훌륭한 전망을 제공합니다."),
    20: ("Excessive spending can lead to bankruptcy.", "과도한 지출은 파산으로 이어질 수 있습니다."),
    21: ("Prices tend to fall after the holiday season.", "가격은 연휴 시즌이 지나면 떨어지는 경향이 있습니다."),
    22: ("The warranty covers a period of two years.", "보증 기간은 2년입니다."),
    23: ("Consumer spending is a key indicator of economic health.", "소비자 지출은 경제 건전성의 주요 지표입니다."),
    24: ("The tourism industry has suffered due to the pandemic.", "관광 산업은 팬데믹으로 인해 고통받았습니다."),
    25: ("It is likely to rain later today.", "오늘 늦게 비가 올 것 같습니다."),
    26: ("The housing market is experiencing a boom.", "주택 시장은 호황을 겪고 있습니다."),
    27: ("The board of directors approved the merger.", "이사회는 합병을 승인했습니다."),
    28: ("You can substitute margarine for butter.", "버터 대신 마가린을 사용할(대체할) 수 있습니다."),
    29: ("She had to face the consequences of her actions.", "그녀는 자신의 행동에 대한 결과(대가)를 직면해야 했습니다."),
    30: ("The hotel is fairly close to the airport.", "그 호텔은 공항에서 꽤 가깝습니다."),
    31: ("It is more economical to buy in bulk.", "대량으로 구매하는 것이 더 경제적입니다."),
    32: ("The business continues to thrive despite the recession.", "그 사업은 경기 침체에도 불구하고 계속 번창하고 있습니다."),
    33: ("The decision will have serious implications for the company.", "그 결정은 회사에 심각한 영향(함축)을 미칠 것입니다."),
    34: ("Interest in the product is beginning to wane.", "제품에 대한 관심이 시들해지기(약해지기) 시작했습니다."),
    35: ("Peace and prosperity are our goals.", "평화와 번영이 우리의 목표입니다."),
    36: ("The country is going through a deep depression.", "그 나라는 깊은 불황을 겪고 있습니다."),
    37: ("Our supplies are dwindling rapidly.", "우리의 보급품이 급격히 줄어들고 있습니다."),
    38: ("Bad weather impeded the construction work.", "악천후가 공사 작업을 지연시켰습니다(방해했습니다)."),
    39: ("He is a promising young engineer.", "그는 유망한 젊은 엔지니어입니다."),
    40: ("We successfully overcame adversity.", "우리는 역경을 성공적으로 극복했습니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d9p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day9_part1.json
with open('day9_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 9 Part 1 Created (Economy & Market Trends).")
