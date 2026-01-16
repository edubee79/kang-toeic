import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 23 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 23) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 23 Part 2: Corporate Events & Office Life)
# Focus: "Hyper-TOEIC" (Ceremonies, Facilities, Daily Operations)
toeic_examples_d23p2 = {
    41: ("Please submit your application by the deadline.", "마감 기한까지 지원서를 제출해 주십시오."),
    42: ("The award ceremony will be held tonight.", "시상식이 오늘 밤에 열릴 것입니다."),
    43: ("We had a quick chat about the project.", "우리는 프로젝트에 관해 짧은 담소를 나누었습니다."),
    44: ("The audience began to clap.", "청중이 박수를 치기 시작했습니다."),
    45: ("Interns also get paid for their work.", "인턴들도 자신의 일에 대해 급여를 받습니다."),
    46: ("He grabbed a sandwich for lunch.", "그는 점심으로 샌드위치를 집어 들었습니다(잡았습니다)."),
    47: ("The students were grouped by age.", "학생들은 나이별로 그룹이 나뉘었습니다."),
    48: ("Please hang your coat on the hook.", "코트를 걸이에 걸어 주십시오."),
    49: ("The introduction of the new system caused confusion.", "새 시스템의 도입은 혼란을 야기했습니다."),
    50: ("The learning center offers various courses.", "교육 센터는 다양한 과정을 제공합니다."),
    51: ("An announcement was made over the loudspeaker.", "확성기를 통해 안내 방송이 나왔습니다."),
    52: ("Guests can wait in the lounge.", "손님들은 대합실(라운지)에서 기다릴 수 있습니다."),
    53: ("The management seminar focuses on leadership.", "경영 세미나는 리더십에 초점을 맞춥니다."),
    54: ("Smoking is only allowed in the smoking section.", "흡연은 오직 흡연 구역에서만 허용됩니다."),
    55: ("I plan to take a vacation next month.", "저는 다음 달에 휴가를 낼 계획입니다."),
    56: ("We chose a neutral color for the wallpaper.", "우리는 벽지로 중립적인 색상을 선택했습니다."),
    57: ("He made a bold decision.", "그는 대담한 결정을 내렸습니다."),
    58: ("The vegetables were chopped finely.", "채소들은 곱게 다져졌습니다."),
    59: ("The staff are very friendly.", "직원들은 매우 친절합니다."),
    60: ("He is a gentle and kind person.", "그는 온화하고 친절한 사람입니다."),
    61: ("Who is in charge of this department?", "누가 이 부서를 맡고 있습니까(담당입니까)?"),
    62: ("We had a lively discussion.", "우리는 활기찬 토론을 했습니다."),
    63: ("Please pick up your medicine at the pharmacy.", "약국에서 약을 가져가십시오."),
    64: ("We need precise measurements.", "우리는 정밀한(정확한) 치수가 필요합니다."),
    65: ("She won the first prize.", "그녀는 1등 상(상품)을 받았습니다."),
    66: ("Registration begins at 9 AM.", "등록은 오전 9시에 시작합니다."),
    67: ("Where did you go for your vacation?", "휴가 때 어디를 가셨습니까?"),
    68: ("He sent a letter of gratitude to the donor.", "그는 기부자에게 감사 편지를 보냈습니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d23p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day23_part2.json
with open('day23_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 23 Part 2 Created (Corporate Events).")
