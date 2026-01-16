import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 8 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 8) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 8 Part 2: Basic LC/RC - Daily Life & Operations)
toeic_examples_d8p2 = {
    41: ("We held a celebration for the store opening.", "우리는 개점을 위한 축하 행사를 열었습니다."),
    42: ("I am curious about the new product features.", "저는 새 제품의 기능에 대해 궁금합니다."),
    43: ("Please drop by my office later.", "나중에 제 사무실에 잠깐 들르십시오."),
    44: ("Research is the first step in product development.", "조사는 제품 개발의 첫 단계입니다."),
    45: ("That will be all for now.", "우선은(당분간은) 그것으로 충분합니다."),
    46: ("Employees gathered in the conference room.", "직원들이 회의실에 모였습니다."),
    47: ("Let's get together for a meeting next week.", "다음 주에 회의를 위해 모입시다."),
    48: ("There is a hole in the fence.", "울타리에 구멍이 있습니다. (Part 1 묘사)"),
    49: ("We have 50 participants in total.", "참가자는 총 50명입니다."),
    50: ("The conference room is currently in use.", "회의실은 현재 사용 중입니다."),
    51: ("We need a practical solution to the problem.", "우리는 그 문제에 대한 실용적인 해결책이 필요합니다."),
    52: ("He is shoveling snow from the driveway.", "그는 진입로에서 눈을 치우고(삽질하고) 있습니다. (Part 1 빈출)"),
    53: ("The chart shows our sales performance.", "그 차트는 우리의 판매 실적을 보여줍니다."),
    54: ("There is not enough space for the new desk.", "새 책상을 놓을 공간이 충분하지 않습니다."),
    55: ("We advertise our products on social media.", "우리는 소셜 미디어에 제품을 광고합니다."),
    56: ("It is my belief that quality is most important.", "품질이 가장 중요하다는 것이 저의 신념입니다."),
    57: ("Does this bag belong to you?", "이 가방은 당신의 것입니까? (Part 2 빈출)"),
    58: ("The store is open for business on weekends.", "그 가게는 주말에도 영업을 합니다."),
    59: ("He is a best-selling author of business books.", "그는 비즈니스 서적의 베스트셀러 작가입니다."),
    60: ("We value consumer feedback.", "우리는 소비자 피드백을 소중히 여깁니다."),
    61: ("The entry fee includes lunch.", "참가비에는 점심 식사가 포함되어 있습니다."),
    62: ("We conducted an experiment to test the hypothesis.", "우리는 가설을 검증하기 위해 실험을 했습니다."),
    63: ("The findings of the study were published.", "그 연구의 결과(발견)가 발표되었습니다."),
    64: ("The schedule is full for today.", "오늘 일정이 가득 찼습니다."),
    65: ("Obviously, we need to cut costs.", "명백하게, 우리는 비용을 절감해야 합니다."),
    66: ("The photographer is taking pictures of the model.", "사진가가 모델의 사진을 찍고 있습니다. (Part 1)"),
    67: ("The audience consisted primarily of students.", "청중은 주로 학생들로 구성되었습니다."),
    68: ("We met our monthly sales target.", "우리는 월간 판매 목표를 달성했습니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d8p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day8_part2.json
with open('day8_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 8 Part 2 Created (Basic LC/RC).")
