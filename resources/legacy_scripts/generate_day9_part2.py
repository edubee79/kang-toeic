import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 9 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 9) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def clean_word(row):
    word = str(row['Word']).strip()
    no = row['No']
    # Detect and fix typos in CSV based on 'Meaning' or known issues
    if no == 42 and word == 'case' and '던지다' in str(row['Meaning']):
        return 'cast'
    return word

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 9 Part 2: Business Operations & General)
toeic_examples_d9p2 = {
    41: ("Our business hours are from 9:00 AM to 6:00 PM.", "우리의 영업 시간은 오전 9시부터 오후 6시까지입니다."),
    42: ("The building casts a shadow over the park.", "그 건물은 공원에 그림자를 드리웁니다. (Typos fixed: case -> cast)"),
    43: ("The CEO announced his retirement.", "최고 경영자(CEO)는 은퇴를 발표했습니다."),
    44: ("He manages a successful commercial enterprise.", "그는 성공적인 상업 기업을 경영합니다."),
    45: ("She works for a prestigious law firm.", "그녀는 명망 있는 법률 회사에서 일합니다."),
    46: ("They plan to open a new franchise branch.", "그들은 새로운 가맹점(프랜차이즈) 지점을 열 계획입니다."),
    47: ("The new office has a nice-looking interior.", "새 사무실은 멋진 인테리어를 갖추고 있습니다."),
    48: ("We have plenty of supplies in the stockroom.", "우리는 비품실에 충분한 비품을 가지고 있습니다."),
    49: ("The training session will last for two hours.", "교육 시간(세션)은 2시간 동안 계속될 것입니다."),
    50: ("We need to speed up the production process.", "우리는 생산 공정을 가속화해야 합니다."),
    51: ("Online trading has become very popular.", "온라인 거래가 매우 인기를 끌고 있습니다."),
    52: ("At the beginning of the project, we set clear goals.", "프로젝트 시작(초기)에 우리는 명확한 목표를 세웠습니다."),
    53: ("He made a significant contribution to the company.", "그는 회사에 상당한 기여를 했습니다."),
    54: ("The hotel is located in a convenient area.", "그 호텔은 편리한 지역에 위치해 있습니다."),
    55: ("We need to approach this problem differently.", "우리는 이 문제에 다르게(별도로) 접근해야 합니다."),
    56: ("The global economy is recovering slowly.", "세계 경제가 서서히 회복되고 있습니다."),
    57: ("The agreement was formally signed yesterday.", "그 합의는 어제 정식으로 서명되었습니다."),
    58: ("The city has a large industrial complex.", "그 도시에는 대규모 산업 단지가 있습니다."),
    59: ("Please pack lightly for the business trip.", "출장을 위해 짐을 가볍게 싸십시오."),
    60: ("The goal is not quantity but quality.", "목표는 양이 아니라 질입니다(A가 아니라 B다)."),
    61: ("We are optimistic about meeting the deadline.", "우리는 마감 기한 준수에 대해 낙관적입니다."),
    62: ("The overall performance of the team was excellent.", "팀의 전반적인 성과는 훌륭했습니다."),
    63: ("There is a strong possibility of a merger.", "합병의 강력한 가능성이 있습니다."),
    64: ("They held a private meeting to discuss the issue.", "그들은 그 문제를 논의하기 위해 개인적인(비공개) 회의를 열었습니다."),
    65: ("Unemployment rates continue to rise.", "실업률이 계속해서 오르고 있습니다."),
    66: ("We are monitoring the market situation clearly.", "우리는 시장 상황을 명확히 모니터링하고 있습니다."),
    67: ("The partnership will strengthen our competitive edge.", "파트너십은 우리의 경쟁 우위를 강화할 것입니다."),
    68: ("The stock market has been up-and-down lately.", "주식 시장은 최근에 기복이 심했습니다(오르내렸습니다).")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_word = clean_word(row)
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d9p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': cleaned_word,
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day9_part2.json
with open('day9_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 9 Part 2 Created (Basic Business).")
