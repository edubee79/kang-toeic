import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 24 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 24) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 24 Part 2: Basic Business & General)
# Focus: "Hyper-TOEIC" (Office Life, Basic Actions)
toeic_examples_d24p2 = {
    41: ("Smoking is strictly prohibited in the building.", "건물 내 흡연은 엄격히 금지되어 있습니다."),
    42: ("He was honored to accept an award for his service.", "그는 봉사에 대한 상을 받게 되어 영광이었습니다."),
    43: ("We are planning the company's 10th anniversary celebration.", "우리는 창립 10주년 기념 행사를 계획하고 있습니다."),
    44: ("He was fired for repeated tardiness.", "그는 반복되는 지각으로 해고되었습니다."),
    45: ("The camera flash blinded me for a moment.", "카메라 플래시가 잠시 내 눈을 안 보이게 했습니다."),
    46: ("Please go downstairs to the lobby.", "로비로 가려면 아래층으로 내려가십시오."),
    47: ("They grow organic vegetables in a greenhouse.", "그들은 온실에서 유기농 채소를 재배합니다."),
    48: ("The school has a new gymnasium for sports.", "학교에는 스포츠를 위한 새로운 체육관이 있습니다."),
    49: ("His official job title is Senior Manager.", "그의 공식 직함은 수석 매니저입니다."),
    50: ("Turn the door knob to open the door.", "문을 열려면 문 손잡이를 돌리십시오."),
    51: ("He climbed the ladder to fix the light.", "그는 전등을 고치기 위해 사다리에 올라갔습니다."),
    52: ("It was a lengthy process to get approval.", "승인을 받는 것은 긴 과정이었습니다."),
    53: ("We moved around the furniture to make space.", "우리는 공간을 만들기 위해 가구를 이리저리 옮겼습니다."),
    54: ("We need a comprehensive plan to increase sales.", "우리는 매출을 늘리기 위한 포괄적인 계획이 필요합니다."),
    55: ("It is rude to point at people.", "사람들을 손가락으로 가리키는 것은 무례합니다."),
    56: ("The project is large in scale.", "그 프로젝트는 규모가 큽니다."),
    57: ("The strong wind scattered the papers everywhere.", "강한 바람이 서류들을 사방으로 흩뿌렸습니다."),
    58: ("We sent out the invitations yesterday.", "우리는 어제 초대장을 발송했습니다."),
    59: ("Please don't yell in the office.", "사무실에서 소리치지 마십시오."),
    60: ("I have a doctor's appointment at 3 PM.", "저는 오후 3시에 병원 예약이 있습니다."),
    61: ("Generosity is his main characteristic.", "관대함이 그의 주된 특징입니다."),
    62: ("Thank you for your helping hand.", "도와주셔서(당신의 도움의 손길에) 감사합니다."),
    63: ("I am hopeful about the future of our company.", "저는 우리 회사의 미래에 대해 희망을 가지고 있습니다."),
    64: ("He reached a high level in the organization.", "그는 조직에서 높은 지위에 올랐습니다."),
    65: ("He decided to resign from his post.", "그는 직위에서 사임하기로 결정했습니다."),
    66: ("She plays a key role in the team.", "그녀는 팀에서 핵심적인 역할을 합니다."),
    67: ("We need safeguards against fraud.", "우리는 사기에 대한 예방 수단이 필요합니다."),
    68: ("The shop is open throughout the day.", "그 가게는 하루 종일 문을 엽니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d24p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day24_part2.json
with open('day24_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 24 Part 2 Created (Basic Business).")
