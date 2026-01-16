import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 21 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 21) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 21 Part 2: General Business & Associations)
# Focus: "Hyper-TOEIC" (Business Basics, Office Life, Partnerships)
toeic_examples_d21p2 = {
    41: ("The economic outlook remains uncertain.", "경제 전망은 여전히 불확실합니다."),
    42: ("We are the premier provider of legal services.", "우리는 으뜸가는(최고의) 법률 서비스 제공업체입니다."),
    43: ("The bank plans to open a new branch.", "은행은 새 지점을 열 계획입니다."),
    44: ("The movie received praise from critics.", "그 영화는 비평가들로부터 찬사를 받았습니다."),
    45: ("If you are late, you might end up missing the train.", "늦으면 결국 기차를 놓치게 될지도 모릅니다."),
    46: ("In the past, we relied on manual labor.", "과거에, 우리는 육체노동에 의존했습니다."),
    47: ("The event will be held indoors due to rain.", "비 때문에 행사는 실내에서 열릴 것입니다."),
    48: ("The door opens inward.", "문은 안으로 열립니다."),
    49: ("Please do not lean against the glass wall.", "유리 벽에 기대지 마십시오."),
    50: ("He is too weak to lift the heavy box.", "그는 너무 약해서 무거운 상자를 들어 올릴 수 없습니다."),
    51: ("We entered into a partnership with a local firm.", "우리는 지역 회사와 제휴(협력) 관계를 맺었습니다."),
    52: ("Meet me at the central plaza at noon.", "정오에 중앙 광장에서 만납시다."),
    53: ("Please relax and enjoy the flight.", "긴장을 풀고 비행을 즐기십시오."),
    54: ("We need to hire more staff for the project.", "우리는 프로젝트를 위해 더 많은 직원을 고용해야 합니다."),
    55: ("It is important to stretch before exercising.", "운동하기 전에 몸을 펴는(스트레칭하는) 것이 중요합니다."),
    56: ("Let's switch seats so you can see better.", "더 잘 볼 수 있도록 자리를 바꿉시다."),
    57: ("You can stay as long as you like.", "원하는 만큼(하는 한) 머물러도 좋습니다."),
    58: ("Please ensure the form is filled out correctly.", "양식이 바르게(정확하게) 작성되었는지 확인하십시오."),
    59: ("The rules are expressly stated in the contract.", "규칙들은 계약서에 분명히 명시되어 있습니다."),
    60: ("He missed work because of a high fever.", "그는 고열 때문에 결근했습니다."),
    61: ("The founder of the company retired last year.", "회사의 창립자는 작년에 은퇴했습니다."),
    62: ("We went out in spite of the bad weather.", "우리는 나쁜 날씨에도 불구하고 외출했습니다."),
    63: ("Each individual is responsible for their own work.", "각 개인은 자신의 업무에 책임이 있습니다."),
    64: ("I need to do some ironing tonight.", "저는 오늘 밤에 다림질을 좀 해야 합니다."),
    65: ("It was only a minor error.", "그것은 단지 사소한 실수였습니다."),
    66: ("The team performed poorly in the last quarter.", "팀은 지난 분기에 저조하게(형편없이) 실적을 냈습니다."),
    67: ("Sales in the southern region have increased.", "남부 지역의 매출이 증가했습니다."),
    68: ("Prices have risen sharply in recent months.", "최근 몇 달 동안 가격이 날카롭게(급격히) 올랐습니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d21p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day21_part2.json
with open('day21_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 21 Part 2 Created (General Business).")
