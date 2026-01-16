import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 13 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 13) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# Meaning Overrides
meaning_overrides = {
    139: "추천장, 감사장, 후기"
}

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 13 Part 4: Advanced - Customer Relations & Corporate Image)
# Focus: "Hyper-TOEIC" (Formal Business, Part 6/7 Complaints & Policies)
toeic_examples_d13p4 = {
    137: ("The deputy manager will handle the complaint.", "부지배인이 불만 사항을 처리할 것입니다."),
    138: ("You can claim a rebate on your purchase.", "구매에 대해 환급(리베이트)을 받으실 수 있습니다."),
    139: ("We received a positive testimonial from a satisfied customer.", "우리는 만족한 고객으로부터 긍정적인 추천서(후기)를 받았습니다."),
    140: ("I wonder if the item is in stock.", "그 물품이 재고가 있는지 궁금합니다."),
    141: ("The report is factually correct.", "그 보고서는 사실적으로 정확합니다."),
    142: ("He gave a compelling reason for his resignation.", "그는 사임에 대해 설득력 있는(강력한) 이유를 제시했습니다."),
    143: ("Frankly, I am disappointed with the service.", "솔직히 말해서, 저는 서비스에 실망했습니다."),
    144: ("New software will facilitate data processing.", "새로운 소프트웨어는 데이터 처리를 용이하게 할(촉진할) 것입니다."),
    145: ("The staff reacted swiftly to the emergency.", "직원들은 비상 상황에 신속하게 반응했습니다."),
    146: ("Security guards intercepted the intruder.", "보안 요원들이 침입자를 가로막았습니다(차단했습니다)."),
    147: ("The delay caused distress to the passengers.", "지연은 승객들에게 고통(괴로움)을 주었습니다."),
    148: ("This is a genuine leather product.", "이것은 진짜 가죽 제품입니다."),
    149: ("I saw him fleetingly in the hallway.", "저는 복도에서 그를 잠깐(순식간에) 보았습니다."),
    150: ("The fruit has a small blemish on the skin.", "그 과일은 껍질에 작은 흠집이 있습니다."),
    151: ("Good food is needed to nourish the body.", "몸에 영양분을 공급하기 위해 좋은 음식이 필요합니다."),
    152: ("Slippery floors are a safety hazard.", "미끄러운 바닥은 안전 위험 요소입니다."),
    153: ("She has unwavering loyalty to the company.", "그녀는 회사에 대해 변함없는(확고한) 충성심을 가지고 있습니다."),
    154: ("The city has a vibrant economy.", "그 도시는 활기찬 경제를 가지고 있습니다."),
    155: ("Adaptability is essential in this job.", "이 직업에서는 적응력(융통성)이 필수적입니다."),
    156: ("The area is sparsely populated.", "그 지역은 인구가 희박합니다."),
    157: ("There was no casualty in the accident.", "그 사고에서 사상자는 없었습니다."),
    158: ("Use a towel to soak up the water.", "물을 흡수하기 위해 수건을 사용하십시오."),
    159: ("A decisive action is needed now.", "지금은 결정적인 조치가 필요합니다."),
    160: ("The exhibition is a retrospective of his work.", "그 전시회는 그의 작품에 대한 회고전입니다."),
    161: ("Please button up your shirt.", "셔츠 단추를 채우십시오."),
    162: ("Aggression toward customers is not tolerated.", "고객에 대한 공격성은 용인되지 않습니다."),
    163: ("The bridge needs reinforcement.", "그 다리는 보강이 필요합니다."),
    164: ("Contact the claims department for refunds.", "환불을 원하시면 보상 청구 부서(클레임 부서)에 연락하십시오."),
    165: ("The manager faced censure for his actions.", "관리자는 그의 행동에 대해 비난(견책)을 받았습니다."),
    166: ("The room was completely bare.", "그 방은 완전히 비어 있었습니다(벌거벗었습니다)."),
    167: ("It helps to mend the relationship.", "그것은 관계를 회복하는(고치는) 데 도움이 됩니다."),
    168: ("The flight encountered severe turbulence.", "그 비행편은 심한 난기류를 만났습니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = meaning_overrides.get(no, clean_meaning(row['Meaning']))
    ex_en, ex_ko = toeic_examples_d13p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day13_part4.json
with open('day13_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 13 Part 4 Created (Advanced Customer Relations).")
