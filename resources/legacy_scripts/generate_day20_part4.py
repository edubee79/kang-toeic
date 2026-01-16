import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 20 Part 4 : No. 137 ~ 168 (End) ---
part4_df = df[(df['Day'] == 20) & (df['No'] >= 137)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 20 Part 4: Advanced Business Finance)
# Focus: "Hyper-TOEIC" (Accounting, Finance, Advanced Vocabulary)
toeic_examples_d20p4 = {
    137: ("We must book the venue well in advance.", "우리는 장소를 훨씬 앞서서 예약해야 합니다."),
    138: ("The accountant updated the general ledger.", "회계사가 총계정 원장(회계 장부)을 갱신했습니다."),
    139: ("The meeting ended in adjournment until next week.", "회의는 다음 주까지 연기(휴회)되는 것으로 끝났습니다."),
    140: ("The company has significant cash reserves.", "그 회사는 상당한 현금 보유고를 가지고 있습니다."),
    141: ("There is an inconsistency between the reports.", "보고서들 사이에 불일치가 있습니다."),
    142: ("The bad weather precludes outdoor activities.", "나쁜 날씨는 야외 활동을 막습니다."),
    143: ("The pretax profit was higher than expected.", "세금 공제 전 이익은 예상보다 높았습니다."),
    144: ("The price is $50, plus tax.", "가격은 50달러이며, 세금 별도입니다."),
    145: ("We have safety measures in place.", "우리는 안전 조치들이 제자리에 있습니다(마련되어 있습니다)."),
    146: ("Statistics show a decline in unemployment.", "통계학(통계)은 실업률 감소를 보여줍니다."),
    147: ("The item is currently on back order.", "그 물품은 현재 이월 주문 상태입니다(재고가 없어 추후 배송됩니다)."),
    148: ("The company has been in the red for two years.", "그 회사는 2년 동안 적자 상태에 있습니다."),
    149: ("The defective product is a liability for the company.", "결함 있는 제품은 회사에 책임(골칫거리)입니다."),
    150: ("The job classification system needs updating.", "직무 분류(등급) 시스템은 갱신이 필요합니다."),
    151: ("We weighed the pros and cons of the proposal.", "우리는 제안의 찬반양론(이해득실)을 따져보았습니다."),
    152: ("Evidence seemed to implicate him in the fraud.", "증거는 그가 사기에 연루되었음을 시사하는 것 같았습니다."),
    153: ("We will increase the budget incrementally.", "우리는 예산을 점차적으로(증가하여) 늘릴 것입니다."),
    154: ("Safety regulations are stringently enforced.", "안전 규정은 엄격히(엄중하게) 시행됩니다."),
    155: ("We are preparing for the year-end audit.", "우리는 연말 감사를 준비하고 있습니다."),
    156: ("The two plans do not differ substantively.", "두 계획은 실질적으로(사실상) 다르지 않습니다."),
    157: ("The whereabouts of the document are unknown.", "그 문서의 소재(행방)는 알려지지 않았습니다."),
    158: ("There is a discrepancy in the accounts.", "계좌에 불일치(차이)가 있습니다."),
    159: ("The system works reliably under pressure.", "시스템은 압박 속에서도 신뢰할 수 있게(확실하게) 작동합니다."),
    160: ("The evidence amply demonstrates his guilt.", "증거는 그의 유죄를 풍부하게(충분히) 입증합니다."),
    161: ("This decision sets a precedent for future cases.", "이 결정은 미래의 사건들에 대한 전례를 만듭니다."),
    162: ("We hope to be in the black by next year.", "우리는 내년까지 흑자 상태가 되기를 희망합니다."),
    163: ("The operation budget for the department was cut.", "부서의 운영 예산이 삭감되었습니다."),
    164: ("The government imposed a levy on luxury goods.", "정부는 사치품에 부과금을 부과했습니다."),
    165: ("The document has no relevance to the case.", "그 문서는 사건과 관련성(적절성)이 없습니다."),
    166: ("Prices vary from store to store.", "가격은 가게마다 다릅니다(상황에 따라 다릅니다)."),
    167: ("He won the election by a considerable margin.", "그는 큰 차이로 선거에서 이겼습니다."),
    168: ("We need to calculate the break-even point.", "우리는 손익 분기점을 계산해야 합니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d20p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day20_part4.json
with open('day20_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 20 Part 4 Created (Advanced Business - End).")
