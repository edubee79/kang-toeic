import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 7 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 7) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 7 Part 4: Advanced - Business Strategy/Legal/Economic)
toeic_examples_d7p4 = {
    137: ("Our customers come from all walks of life.", "우리의 고객들은 모든 계층(직업)의 사람들입니다."),
    138: ("He worked for ten hours at a stretch.", "그는 계속해서 10시간 동안 일했습니다."),
    139: ("Always back up your important files.", "항상 중요한 파일들을 백업하십시오. (지지하다/입증하다 등 다의어)"),
    140: ("We conducted a focus group to test the product.", "우리는 제품을 테스트하기 위해 포커스 그룹(표적 집단) 조사를 실시했습니다."),
    141: ("The advertisement was considered misleading.", "그 광고는 오기(오해)의 소지가 있는 것으로 간주되었습니다."),
    142: ("The new ad campaign successfully captured the market's attention.", "새 광고 캠페인은 시장의 관심을 성공적으로 사로잡았습니다."),
    143: ("The two companies decided to consolidate.", "두 회사는 합병하기로 결정했습니다. / 빚을 통합하다"),
    144: ("Critics contend that the policy is unfair.", "비평가들은 그 정책이 불공정하다고 주장합니다."),
    145: ("It is difficult to gauge the market's reaction.", "시장의 반응을 측정하는(알아내는) 것은 어렵습니다."),
    146: ("The project is gaining momentum.", "그 프로젝트는 탄력을 받고 있습니다."),
    147: ("The brand is easily recognizable worldwide.", "그 브랜드는 전 세계적으로 쉽게 알아볼 수 있습니다."),
    148: ("We target a specific segment of the market.", "우리는 시장의 특정 부분(부문)을 목표로 합니다."),
    149: ("The statistics are telling evidence of the trend.", "그 통계는 추세에 대한 강력한(효과적인) 증거입니다."),
    150: ("Smuggling can lead to the confiscation of goods.", "밀수는 물품 압수로 이어질 수 있습니다."),
    151: ("Consumer spending constitutes two-thirds of the economy.", "소비자 지출은 경제의 3분의 2를 구성합니다."),
    152: ("High demand tends to drive up prices.", "높은 수요는 가격을 올리는 경향이 있습니다."),
    153: ("The candidate received an endorsement from the mayor.", "그 후보자는 시장으로부터 지지(승인)를 받았습니다. / 유명인 광고 모델"),
    154: ("We need a feasibility study before starting construction.", "공사를 시작하기 전에 타당성 조사가 필요합니다."),
    155: ("Government intervention prevented a crisis.", "정부의 개입이 위기를 막았습니다."),
    156: ("The loss of data was irretrievable.", "데이터 손실은 돌이킬 수 없었습니다."),
    157: ("The scandal could jeopardize the merger deal.", "그 스캔들은 합병 거래를 위태롭게 할 수 있습니다."),
    158: ("The handwriting must be clearly legible.", "글씨는 명확하게 읽을 수 있어야 합니다."),
    159: ("The company is starting to lose ground to its competitors.", "그 회사는 경쟁사들에게 입지를 잃기(뒤처지기) 시작했습니다."),
    160: ("We need to raise our public profile.", "우리는 대중의 관심(인지도)을 높여야 합니다."),
    161: ("The firm is known as a reputable supplier.", "그 회사는 평판이 좋은 공급업체로 알려져 있습니다."),
    162: ("The contract sets forth the terms of agreement.", "그 계약서는 합의 조건을 제시하고(명시하고) 있습니다."),
    163: ("They set out to change the company culture.", "그들은 기업 문화를 바꾸기 시작했습니다(착수했습니다)."),
    164: ("The project suffered a minor setback.", "그 프로젝트는 사소한 차질(방해)을 겪었습니다."),
    165: ("We must take a stand against unfair labor practices.", "우리는 불공정한 노동 관행에 맞서야(반대해야) 합니다."),
    166: ("We analyzed the underlying causes of the problem.", "우리는 문제의 근본적인 원인을 분석했습니다."),
    167: ("The funds seemed to vanish without a trace.", "자금이 흔적 없이 사라진 것 같았습니다."),
    168: ("We went sightseeing in London.", "우리는 런던에서 관광을 했습니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d7p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day7_part4.json
with open('day7_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 7 Part 4 Created (Advanced 900).")
