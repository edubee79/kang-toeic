import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 27 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 27) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 27 Part 3: Intermediate Business & Daily Life)
# Focus: "Hyper-TOEIC" (Business Operations, Employment, Finance)
toeic_examples_d27p3 = {
    69: ("The car is at your disposal for the weekend.", "그 차는 주말 동안 당신 마음대로 쓸 수 있습니다."),
    70: ("Investors are reluctant to invest in the current market.", "투자자들은 현재 시장에 투자하기를 꺼립니다."),
    71: ("Believe it or not, I finished the project in one day.", "믿거나 말거나, 저는 하루 만에 프로젝트를 끝냈습니다."),
    72: ("Don't blame your mistakes on others.", "당신의 실수를 다른 사람들 탓으로 돌리지 마십시오."),
    73: ("The manager called on an urgent meeting.", "매니저는 비상 회의를 소집했습니다."),
    74: ("We called for some assistance from the head office.", "우리는 본사에 도움을 청했습니다."),
    75: ("Under the circumstances, we had no choice.", "상황(환경)을 고려할 때, 우리는 선택의 여지가 없었습니다."),
    76: ("The company announced a cutback in spending.", "회사는 지출 삭감을 발표했습니다."),
    77: ("We practiced an emergency evacuation drill.", "우리는 비상 대피 훈련을 실시했습니다."),
    78: ("The street was filled with a festive atmosphere.", "거리는 축제의 분위기로 가득 찼습니다."),
    79: ("The lack of progress frustrated the team.", "진전의 부족은 팀을 좌절시켰습니다."),
    80: ("We need to get rid of outdated equipment.", "우리는 구식 장비를 제거해야(처분해야) 합니다."),
    81: ("Why don't you give it a try?", "시도해 보는 게 어때요?"),
    82: ("We have reason to believe he is innocent.", "우리는 그가 결백하다고 믿을 이유가 있습니다."),
    83: ("The chemicals are hazardous to health.", "그 화학 물질들은 건강에 위험합니다."),
    84: ("Can we speak in private?", "비밀리에(사적으로) 이야기할 수 있을까요?"),
    85: ("It happened in the distant past.", "그것은 훨씬 이전에 일어났습니다."),
    86: ("Limit your intake of caffeine.", "카페인 섭취를 제한하십시오."),
    87: ("The pipe is leaky and needs repair.", "파이프가 새고 있어 수리가 필요합니다."),
    88: ("I am looking for a new job.", "저는 새 직장을 찾고 있습니다."),
    89: ("We organized a picnic for the employees.", "우리는 직원들을 위해 소풍을 준비했습니다."),
    90: ("Please pair up with a partner for the exercise.", "연습을 위해 파트너와 짝이 되십시오."),
    91: ("The reflection in the mirror was distorted.", "거울에 비친 상(반영)은 왜곡되었습니다."),
    92: ("Positive feedback boosts self-esteem.", "긍정적인 피드백은 자부심을 높여줍니다."),
    93: ("He likes to show off his new car.", "그는 자신의 새 차를 과시하기를 좋아합니다."),
    94: ("The event is sponsored by a major corporation.", "그 행사는 대기업의 후원을 받습니다."),
    95: ("The stock market is volatile today.", "오늘 주식 시장은 변동성이 큽니다."),
    96: ("Thank you for your supporting documents.", "당신의 지지하는(뒷받침하는) 서류들에 감사드립니다."),
    97: ("Be careful not to tear the paper.", "종이를 찢지 않도록 조심하십시오."),
    98: ("They loved their children unconditionally.", "그들은 아이들을 무조건적으로 사랑했습니다."),
    99: ("The evidence made it abundantly clear.", "증거는 그것을 아주 분명하게(풍부하게) 만들었습니다."),
    100: ("Additionally, we offer a warranty.", "게다가, 우리는 보증을 제공합니다."),
    101: ("He has ambitious plans for the company.", "그는 회사에 대해 야심 있는 계획을 가지고 있습니다."),
    102: ("She cautiously approached the dog.", "그녀는 조심스럽게 개에게 다가갔습니다."),
    103: ("It was very considerate of you to help.", "당신이 도와준 것은 매우 사려 깊었습니다."),
    104: ("The consultation fee is $100.", "상담료는 100달러입니다."),
    105: ("The new policy works effectively.", "새로운 정책은 효과적으로 작동합니다."),
    106: ("He is the favored candidate for the job.", "그는 그 일자리에 대해 호의를 사고 있는(유력한) 후보입니다."),
    107: ("The plan is impractical due to high costs.", "그 계획은 높은 비용 때문에 비현실적입니다."),
    108: ("Improper conduct will not be tolerated.", "부당한(부적절한) 행동은 용납되지 않을 것입니다."),
    109: ("He feels insecure about his future.", "그는 자신의 미래에 대해 불안해합니다."),
    110: ("The ladder was placed insecurely.", "사다리가 불안하게 놓여 있었습니다."),
    111: ("Can you justify the expense?", "그 비용을 정당화할 수 있습니까?"),
    112: ("We offered the product at a reduced price.", "우리는 그 제품을 할인된(감소한) 가격에 제공했습니다."),
    113: ("He showed reluctance to sign the contract.", "그는 계약서에 서명하는 것에 마지못해 함(꺼림)을 보였습니다."),
    114: ("The book reviewer praised the novel.", "서평가(논평가)는 그 소설을 칭찬했습니다."),
    115: ("We take pride in our quality service.", "우리는 우리의 양질의 서비스를 자랑합니다."),
    116: ("The strike threatens to delay production.", "파업은 생산을 지연시킬 우려가 있습니다(위협합니다)."),
    117: ("They embarked on a new business venture.", "그들은 새로운 사업 모험에 착수했습니다."),
    118: ("We are opening a branch office in Tokyo.", "우리는 도쿄에 지점(지사)을 열 예정입니다."),
    119: ("There was some confusion about the schedule.", "일정에 대해 약간의 혼란이 있었습니다."),
    120: ("The decision caused a lot of controversy.", "그 결정은 많은 논란을 야기했습니다."),
    121: ("Please submit a cost analysis for the project.", "프로젝트에 대한 비용 분석을 제출해 주십시오."),
    122: ("I can faintly hear the music.", "음악 소리가 희미하게 들립니다."),
    123: ("We value your input on this matter.", "우리는 이 문제에 대한 당신의 투입(의견)을 소중하게 생각합니다."),
    124: ("The investor is looking for opportunities.", "그 투자가는 기회를 찾고 있습니다."),
    125: ("The founder left a lasting legacy.", "설립자는 지속적인 유산을 남겼습니다."),
    126: ("We need funding to meet the expenses.", "우리는 경비를 대기 위해 자금이 필요합니다."),
    127: ("Meetings are held on a regular basis.", "회의는 정기적으로 열립니다."),
    128: ("He started the business on his own account.", "그는 자신의 이익을 위해서(혼자서) 사업을 시작했습니다."),
    129: ("She is a pioneer in the field of medicine.", "그녀는 의학 분야의 개척자입니다."),
    130: ("Projected sales are higher than expected.", "예상된 매출이 기대보다 높습니다."),
    131: ("We need to reexamine the data.", "우리는 데이터를 재검사해야 합니다."),
    132: ("The task was boring and repetitive.", "그 업무는 지루하고 반복적이었습니다."),
    133: ("He wants to set up a business in New York.", "그는 뉴욕에서 사업을 시작하고 싶어합니다."),
    134: ("Identify your strengths and weaknesses.", "당신의 강점(장점)과 약점을 파악하십시오."),
    135: ("Take precautions to avoid injury.", "부상을 막기 위해 조심하십시오(예방 조치를 취하십시오)."),
    136: ("Do not throw out important documents.", "중요한 서류를 버리지 마십시오.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d27p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day27_part3.json
with open('day27_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 27 Part 3 Created (Intermediate Business).")
