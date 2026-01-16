import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 29 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 29) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 29 Part 1: Environment & Conservation)
# Focus: "Hyper-TOEIC" (Sustainability, Regulations, Environmental Impact)
toeic_examples_d29p1 = {
    1: ("We must conserve energy to reduce costs.", "우리는 비용을 줄이기 위해 에너지를 보존해야(아껴야) 합니다."),
    2: ("There is a good chance of rain tomorrow.", "내일 비가 올 가능성이 높습니다."),
    3: ("The weather forecast predicts heavy snow.", "일기 예보는 폭설을 예측합니다."),
    4: ("The factory produces a lot of industrial waste.", "그 공장은 많은 산업 폐기물(쓰레기)을 배출합니다."),
    5: ("Please dispose of hazardous materials properly.", "위험 물질을 적절하게 처분해 주십시오."),
    6: ("Recycling is mandatory in this city.", "이 도시에서는 재활용이 의무적입니다."),
    7: ("The sky is clear today.", "오늘 하늘이 맑습니다."),
    8: ("The storm caused significant damage to the building.", "폭풍은 건물에 상당한 피해를 입혔습니다."),
    9: ("There has been a significant increase in sales.", "매출에 상당한(중대한) 증가가 있었습니다."),
    10: ("We are looking for a solution to the pollution problem.", "우리는 오염 문제에 대한 해결책을 찾고 있습니다."),
    11: ("The accident occurred at the intersection.", "사고는 교차로에서 발생했습니다."),
    12: ("The park is an ideal place for a picnic.", "그 공원은 소풍 가기에 이상적인 장소입니다."),
    13: ("We must preserve our natural resources.", "우리는 천연 자원을 보존해야 합니다."),
    14: ("The organization provides aid to disaster victims.", "그 단체는 재난 피해자들에게 원조를 제공합니다."),
    15: ("Excessive noise is prohibited.", "지나친 소음은 금지되어 있습니다."),
    16: ("The team worked intensively on the project.", "팀은 그 프로젝트에 집중적으로 임했습니다."),
    17: ("Prices vary depending on the season.", "가격은 계절에 따라 다릅니다."),
    18: ("The results were pleasing to the investors.", "결과는 투자자들에게 만족스러웠습니다."),
    19: ("This year marks our 10th anniversary.", "올해는 우리의 10주년을 기념합니다(표시합니다)."),
    20: ("The remote village is inaccessible by car.", "그 외딴 마을은 차로 접근이 불가능합니다."),
    21: ("Do not disturb the wildlife.", "야생 동물을 방해하지 마십시오."),
    22: ("Factories emit harmful pollutants.", "공장들은 해로운 오염 물질을 배출합니다."),
    23: ("The government plans to reduce carbon emissions.", "정부는 탄소 배출을 줄일 계획입니다."),
    24: ("The forest is dense with trees.", "숲은 나무로 빽빽합니다."),
    25: ("We must consider the environmental impact.", "우리는 환경적인 영향을 고려해야 합니다."),
    26: ("His performance has been consistent.", "그의 성과는 한결같았습니다(지속적이었습니다)."),
    27: ("Oil leaked from the tank.", "기름이 탱크에서 샜습니다(누출되었습니다)."),
    28: ("She works for a non-profit organization.", "그녀는 비영리 단체에서 일합니다."),
    29: ("Technology is continually evolving.", "기술은 계속해서 발전하고 있습니다."),
    30: ("The river was contaminated by chemicals.", "강은 화학 물질로 오염되었습니다."),
    31: ("The earthquake was a major disaster.", "지진은 대재난이었습니다."),
    32: ("Factories must not discharge waste into the river.", "공장은 강으로 폐기물을 방출해서는 안 됩니다."),
    33: ("Water is a precious resource.", "물은 귀중한 자원입니다."),
    34: ("He is a prominent figure in the industry.", "그는 그 업계에서 저명한(두드러진) 인물입니다."),
    35: ("We are depleting our natural reserves.", "우리는 천연 매장량을 고갈시키고 있습니다."),
    36: ("Plants help purify the air.", "식물은 공기를 정화하는 데 도움을 줍니다."),
    37: ("The panda is an endangered species.", "판다는 멸종 위기에 처한 종입니다."),
    38: ("Many species face extinction.", "많은 종들이 멸종에 직면해 있습니다."),
    39: ("The drought damaged the crops.", "가뭄이 농작물에 피해를 주었습니다."),
    40: ("The storm inflicted severe damage on the coast.", "폭풍은 해안에 심각한 피해를 입혔습니다(가했습니다).")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d29p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day29_part1.json
with open('day29_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 29 Part 1 Created (Environment Start).")
