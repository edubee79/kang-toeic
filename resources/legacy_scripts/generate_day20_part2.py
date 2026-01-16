import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 20 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 20) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 20 Part 2: General Business & Offices)
# Focus: "Hyper-TOEIC" (Office Life, General Business, Basic Descriptions)
toeic_examples_d20p2 = {
    41: ("We need to spend more time on this project.", "우리는 이 프로젝트에 더 많은 시간을 써야 합니다."),
    42: ("High staff turnover can affect productivity.", "높은 직원 이직률은 생산성에 영향을 줄 수 있습니다."),
    43: ("There is an abundant supply of fresh water.", "신선한 물의 공급이 풍부합니다."),
    44: ("She won first prize in the writing contest.", "그녀는 글쓰기 대회에서 1등 상을 받았습니다."),
    45: ("The awards are displayed in a glass cabinet.", "상들은 유리 장식장에 전시되어 있습니다."),
    46: ("Please take a picture of the damaged goods.", "파손된 상품의 사진을 찍어 주십시오."),
    47: ("The CEO gave a powerful speech at the conference.", "CEO는 회의에서 강력한(영향력 있는) 연설을 했습니다."),
    48: ("We walked along the shore of the lake.", "우리는 호수의 물가를 따라 걸었습니다."),
    49: ("Please tie the documents together with a rubber band.", "서류들을 고무줄로 묶어 주십시오."),
    50: ("The new gym is a welcome addition to the hotel.", "새 체육관은 호텔에 환영받는 추가물입니다."),
    51: ("He works as a financial advisor for a large bank.", "그는 대형 은행에서 재정 조언자(고문)로 일합니다."),
    52: ("Hackers tried to attack the company's network.", "해커들이 회사의 네트워크를 공격하려고 시도했습니다."),
    53: ("Her face is very expressive.", "그녀의 얼굴은 매우 표정이 풍부합니다(감정을 잘 나타냅니다)."),
    54: ("We have a fund set up for employee training.", "우리는 직원 교육을 위해 마련된 자금이 있습니다."),
    55: ("We are seeking funding for the new research center.", "우리는 새 연구 센터를 위한 자금 제공을 모색하고 있습니다."),
    56: ("The new campaign is expected to generate more sales.", "새 캠페인은 더 많은 매출을 창출할 것으로 예상됩니다."),
    57: ("Sales are up; however, profits have decreased.", "매출은 올랐습니다. 하지만 이익은 감소했습니다."),
    58: ("We expect significant growth in the coming year.", "우리는 다가오는 해에 상당한 성장을 기대합니다."),
    59: ("Please move in the direction of the exit.", "출구 방향으로 이동해 주십시오."),
    60: ("Please provide the model number of your device.", "기기의 모델 번호를 알려 주십시오."),
    61: ("We must overcome these obstacles to succeed.", "우리가 성공하려면 이 장애물들을 극복해야 합니다."),
    62: ("Proper training is essential for this job.", "이 직업에는 적절한 훈련이 필수적입니다."),
    63: ("Please feel free to ask any questions.", "자유롭게 질문해 주십시오."),
    64: ("It is rare to find such high quality at this price.", "이 가격에 이렇게 높은 품질을 찾는 것은 드문 일입니다."),
    65: ("He achieved a high score on the proficiency test.", "그는 숙달도 시험에서 높은 점수를 받았습니다."),
    66: ("She is a senior executive at the firm.", "그녀는 그 회사의 고위(상급) 임원입니다."),
    67: ("The main shortcoming of the plan is the cost.", "그 계획의 주요 단점(결점)은 비용입니다."),
    68: ("We hired temporary staff for the holiday season.", "우리는 연휴 기간 동안 임시 직원을 고용했습니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d20p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day20_part2.json
with open('day20_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 20 Part 2 Created (General Business - Corrected Range 41-68).")
