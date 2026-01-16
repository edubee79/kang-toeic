import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 27 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 27) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 27 Part 4: Advanced Finance & Strategy)
# Focus: "Hyper-TOEIC" (Strategic Management, Economic Factors, Legal)
toeic_examples_d27p4 = {
    137: ("Shareholders received a quarterly dividend.", "주주들은 분기별 배당금을 받았습니다."),
    138: ("The hurricane devastated the local economy.", "허리케인은 지역 경제를 황폐화시켰습니다."),
    139: ("He deliberately withheld information.", "그는 고의로 정보를 숨겼습니다."),
    140: ("The policy is intended to deflate prices.", "그 정책은 물가를 끌어내리도록 의도되었습니다."),
    141: ("The photograph evokes memories of the past.", "그 사진은 과거의 기억을 일깨웁니다."),
    142: ("Analysts speculate that the market will crash.", "분석가들은 시장이 붕괴할 것이라고 추측합니다."),
    143: ("The program is accredited by the agency.", "그 프로그램은 에이전시에 의해 승인되었습니다."),
    144: ("Start-up costs are higher than anticipated.", "착수 비용이 예상보다 높습니다."),
    145: ("Please provide a cost estimate for the repairs.", "수리 비용에 대한 원가 견적을 제공해 주십시오."),
    146: ("Lack of sleep can impair your judgment.", "수면 부족은 판단력을 손상시킬 수 있습니다."),
    147: ("The characters in the book are fictitious.", "책의 등장인물들은 허구입니다."),
    148: ("We need an unbiased opinion.", "우리는 선입견 없는 의견이 필요합니다."),
    149: ("The fence marks the property line.", "울타리는 토지 경계선을 표시합니다."),
    150: ("The currency was devalued by 10%.", "통화가 10% 평가 절하되었습니다."),
    151: ("He was accused of stock market manipulation.", "그는 주식 시장 조작으로 기소되었습니다."),
    152: ("She faithfully served the company for 20 years.", "그녀는 20년 동안 회사에 충실하게 봉사했습니다."),
    153: ("The engine needs a complete overhaul.", "엔진은 전면적인 점검(정비)이 필요합니다."),
    154: ("Our prices are unbeatable.", "우리의 가격은 더 이상 좋을 수 없습니다(타의 추종을 불허합니다)."),
    155: ("This figure is just an approximation.", "이 수치는 단지 근사치일 뿐입니다."),
    156: ("The sales target is attainable.", "판매 목표는 달성 가능합니다(이룰 수 있습니다)."),
    157: ("A well-balanced diet is important for health.", "균형 잡힌 식단은 건강에 중요합니다."),
    158: ("The debt was wiped off.", "빚이 탕감되었습니다(없어졌습니다)."),
    159: ("He is known for his courteousness to customers.", "그는 고객들에 대한 예의 바름으로 알려져 있습니다."),
    160: ("There are several hotels in the vicinity of the airport.", "공항 부근에 여러 호텔이 있습니다."),
    161: ("Please set aside some money for savings.", "저축을 위해 돈을 좀 챙겨두십시오."),
    162: ("The two cases were treated disparately.", "두 사건은 본질적으로 다르게 취급되었습니다."),
    163: ("The benefits outweigh the costs.", "혜택이 비용보다 큽니다(중요합니다)."),
    164: ("Technology plays a huge role in modern business.", "기술은 현대 비즈니스에서 큰 몫을 합니다."),
    165: ("We deliver to outlying areas.", "우리는 외진(변두리) 지역으로 배달합니다."),
    166: ("Technicians were dispatched to fix the problem.", "문제를 해결하기 위해 기술자들이 발송되었습니다(파견되었습니다)."),
    167: ("His untimely death shocked the community.", "그의 때 이른 죽음은 지역 사회에 충격을 주었습니다."),
    168: ("We must take steps to reduce pollution.", "우리는 오염을 줄이기 위해 조치를 취해야 합니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d27p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day27_part4.json
with open('day27_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 27 Part 4 Created (Advanced Finance End).")
