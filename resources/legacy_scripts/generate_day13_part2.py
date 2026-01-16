import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 13 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 13) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 13 Part 2: Basic LC/RC - Service & Daily Life)
# Focus: "Hyper-TOEIC" (Strict Headword Match, Part 1/2/3 Scenarios)
toeic_examples_d13p2 = {
    41: ("I have a couple of questions.", "제게 몇 가지 질문이 있습니다."),
    42: ("The athlete is training for the competition.", "그 운동선수는 시합을 위해 훈련하고 있습니다."),
    43: ("This situation does not call for panic.", "이 상황은 공포를 요구하지 않습니다(공포에 떨 필요가 없습니다)."),
    44: ("Please put the items in the shopping cart.", "물품들을 쇼핑 카트에 넣어 주십시오."),
    45: ("Please speak to a customer service representative.", "고객 서비스 담당 직원에게 이야기하십시오."),
    46: ("Did you get a phone call from him?", "그에게서 전화를 받았습니까?"),
    47: ("I will give a call to the manager.", "제가 관리자에게 전화를 하겠습니다."),
    48: ("He went to the salon to have his hair cut.", "그는 머리카락을 자르기 위해 미용실에 갔습니다."),
    49: ("Could you hold on just for a minute?", "잠시만 기다려 주시겠습니까?"),
    50: ("The hotel offers laundry service.", "그 호텔은 세탁 서비스를 제공합니다."),
    51: ("Please leave a message after the tone.", "신호음 후에 메시지를 남겨 주십시오."),
    52: ("Read the label on the product.", "제품 상표(라벨)를 읽어보십시오."),
    53: ("Rinse the dishes with warm water.", "따뜻한 물로 접시를 헹구십시오."),
    54: ("You have one new voice mail.", "새로운 음성 메일이 한 건 있습니다."),
    55: ("Please reply as soon as possible.", "가능한 빨리 답장해 주십시오."),
    56: ("Customers often complain about the price.", "고객들은 종종 가격에 대해 불평합니다."),
    57: ("A counselor is available to help you.", "상담원이 당신을 도울 수 있습니다."),
    58: ("The samples are provided free of charge.", "샘플은 무료로 제공됩니다."),
    59: ("I am going to the grocery store.", "저는 식품점(슈퍼마켓)에 가는 길입니다."),
    60: ("They decided to invite him to the party.", "그들은 그를 파티에 초대하기로 결정했습니다."),
    61: ("We meet frequently to discuss progress.", "우리는 진척 상황을 논의하기 위해 자주 만납니다."),
    62: ("I am positive about the outcome.", "저는 결과에 대해 확신합니다(긍정적입니다)."),
    63: ("We want to build a long-term relationship.", "우리는 장기적인 관계를 구축하고 싶습니다."),
    64: ("The factory is located on a large site.", "공장은 넓은 부지에 위치해 있습니다."),
    65: ("The project was completed successfully.", "프로젝트가 성공적으로 완료되었습니다."),
    66: ("Unlike his brother, he is very shy.", "그의 형과는 달리, 그는 매우 수줍음이 많습니다."),
    67: ("We plan to visit the client next week.", "우리는 다음 주에 고객을 방문할 계획입니다."),
    68: ("She has vivid memories of the trip.", "그녀는 그 여행에 대한 생생한 기억을 가지고 있습니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d13p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day13_part2.json
with open('day13_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 13 Part 2 Created (Basic LC/RC).")
