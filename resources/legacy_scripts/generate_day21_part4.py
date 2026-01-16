import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 21 Part 4 : No. 137 ~ 168 (End) ---
part4_df = df[(df['Day'] == 21) & (df['No'] >= 137)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 21 Part 4: Advanced Business Strategy)
# Focus: "Hyper-TOEIC" (Strategic Planning, Economic Trends, Negotiations)
toeic_examples_d21p4 = {
    137: ("He has won three titles in succession.", "그는 3회 연속으로 타이틀(우승)을 획득했습니다."),
    138: ("The board approved the takeover of the rival firm.", "이사회는 경쟁 회사의 인수를 승인했습니다."),
    139: ("We are an established player in the market.", "우리는 시장에서 확고한(정평이 있는) 입지를 굳힌 기업입니다."),
    140: ("The market for these goods is shrinking.", "이 상품들에 대한 시장이 줄어들고 있습니다."),
    141: ("The mediator remained neutral throughout the discussion.", "중재자는 토론 내내 중립적인 태도를 유지했습니다."),
    142: ("She is the front-runner for the CEO position.", "그녀는 CEO 직책에 대한 가장 유력한 후보입니다."),
    143: ("This building exemplifies modern architecture.", "이 건물은 현대 건축을 예증합니다(좋은 예가 됩니다)."),
    144: ("The door hinge is squeaky.", "문 경첩이 삐걱거립니다."),
    145: ("Our marketing strategy is oriented to young adults.", "우리의 마케팅 전략은 젊은 성인들에게 중점을 두고(맞춰져) 있습니다."),
    146: ("The economy took a turn for the better.", "경제가 호전되었습니다(더 나은 방향으로 바뀌었습니다)."),
    147: ("She gave a lucid explanation of the complex issue.", "그녀는 복잡한 문제에 대해 명쾌한 설명을 했습니다."),
    148: ("Beware of phishing emails.", "피싱 이메일을 조심하십시오."),
    149: ("The company adopted a tough stance on negotiations.", "회사는 협상에 대해 강경한 태도(입장)를 취했습니다."),
    150: ("He has considerable political clout.", "그는 상당한 정치적 영향력을 가지고 있습니다."),
    151: ("I will serve you momentarily.", "잠시 후에 모시겠습니다(도와드리겠습니다)."),
    152: ("We decided to make the first move.", "우리는 먼저 행동을 개시하기로(발단을 만들기로) 결정했습니다."),
    153: ("The test revealed a latent defect in the product.", "테스트는 제품의 잠재된 결함을 밝혔습니다."),
    154: ("The investors retreated from the risky market.", "투자자들은 위험한 시장에서 물러났습니다(후퇴했습니다)."),
    155: ("The warm-up exercise helps prevent injury.", "준비 운동은 부상을 예방하는 데 도움이 됩니다."),
    156: ("We plan to roll out the new software next month.", "우리는 다음 달에 새 소프트웨어를 출시할 계획입니다."),
    157: ("Noise can interfere with your concentration.", "소음은 당신의 집중을 방해할 수 있습니다."),
    158: ("The bonus is contingent upon the company's performance.", "보너스는 회사의 실적에 따라 결정됩니다(달려 있습니다)."),
    159: ("We must keep on top of industry trends.", "우리는 업계 트렌드의 선두를 유지해야(잘 파악하고 있어야) 합니다."),
    160: ("The report provides a detailed narrative of the events.", "그 보고서는 사건들에 대한 상세한 기술(묘사)을 제공합니다."),
    161: ("The conditions are favorable for investment.", "조건들이 투자에 호의적입니다(유리합니다)."),
    162: ("The government subsidizes public transportation.", "정부는 대중교통에 보조금을 지급합니다."),
    163: ("Don't succumb to pressure.", "압력에 굴복하지 마십시오."),
    164: ("We used a box as a makeshift table.", "우리는 상자를 임시방편의 테이블로 사용했습니다."),
    165: ("The partners decided to liquidate the business.", "파트너들은 사업을 정리하기로(청산하기로) 결정했습니다."),
    166: ("He was allegedly involved in the scandal.", "주장하는 바에 따르면 그는 스캔들에 연루되었습니다."),
    167: ("The furniture shows exquisite craftsmanship.", "그 가구는 정교한 솜씨를 보여줍니다."),
    168: ("Do not exert pressure on the staff.", "직원들에게 압력을 행사하지 마십시오.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d21p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day21_part4.json
with open('day21_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 21 Part 4 Created (Advanced Business Strategy - End).")
