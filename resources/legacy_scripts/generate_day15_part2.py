import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 15 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 15) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 15 Part 2: Basic LC/RC - Daily Life & Operations)
# Focus: "Hyper-TOEIC" (Strict Headword Match, Part 1/2/3 Scenarios)
toeic_examples_d15p2 = {
    41: ("The decision is still pending.", "그 결정은 아직 보류 중(미결)입니다."),
    42: ("Please put the bag in the backseat.", "가방을 뒷좌석에 놓아주십시오."),
    43: ("Can I borrow your pen for a moment?", "잠시 당신의 펜을 빌릴 수 있습니까?"),
    44: ("I am sorry to bother you.", "방해해서(귀찮게 해서) 죄송합니다."),
    45: ("The meeting room is currently empty.", "회의실은 현재 비어 있습니다."),
    46: ("Where is the nearest emergency exit?", "가장 가까운 비상구는 어디입니까?"),
    47: ("He works as a fashion photographer.", "그는 패션 사진작가로 일합니다."),
    48: ("Who will look after the children?", "누가 아이들을 돌볼 것입니까?"),
    49: ("I bought a pair of shoes.", "저는 신발 한 켤레를 샀습니다."),
    50: ("The rate is fifty dollars per day.", "요금은 하루에 50달러입니다."),
    51: ("The professor gave a lecture on economics.", "그 교수는 경제학에 대해 강의를 했습니다."),
    52: ("Do you have proof of purchase?", "구매 증거(영수증)가 있습니까?"),
    53: ("She put on her coat and left.", "그녀는 코트를 입고 떠났습니다."),
    54: ("Do not spray water on the machine.", "기계에 물을 뿌리지 마십시오."),
    55: ("I can't think of a better solution.", "더 좋은 해결책이 생각나지 않습니다."),
    56: ("You must wear a helmet for safety.", "안전을 위해 헬멧을 착용해야 합니다."),
    57: ("We climbed the mountain yesterday.", "우리는 어제 산에 올랐습니다."),
    58: ("He denied the allegations against him.", "그는 자신에 대한 혐의를 부인했습니다."),
    59: ("The prisoner tried to escape.", "그 죄수는 탈출하려고 시도했습니다."),
    60: ("The final decision rests with the manager.", "최종 결정은 관리자에게 달려 있습니다."),
    61: ("Stores are generally closed on holidays.", "상점들은 일반적으로 휴일에 문을 닫습니다."),
    62: ("The handle on the door is loose.", "문 손잡이가 헐겁습니다."),
    63: ("What is the meaning of this word?", "이 단어의 의미는 무엇입니까?"),
    64: ("Hotels are cheaper during the off-season.", "호텔은 비수기에 더 저렴합니다."),
    65: ("I met him once at a conference.", "저는 컨퍼런스에서 그를 한 번 만났습니다."),
    66: ("We launched a new product this year.", "우리는 올해 신제품을 출시했습니다."),
    67: ("He decided to quit his job.", "그는 직장을 그만두기로 결정했습니다."),
    68: ("The sight from the top was amazing.", "정상에서의 풍경(광경)은 놀라웠습니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d15p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day15_part2.json
with open('day15_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 15 Part 2 Created (Basic LC/RC).")
