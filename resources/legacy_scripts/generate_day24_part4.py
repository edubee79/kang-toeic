import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 24 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 24) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 24 Part 4: Advanced Business & General)
# Focus: "Hyper-TOEIC" (Management, Legal, Strategy)
toeic_examples_d24p4 = {
    137: ("The department is chronically understaffed.", "그 부서는 만성적으로 인원이 부족합니다."),
    138: ("Success is finally in our grasp.", "성공이 드디어 우리의 수중(손 닿을 거리)에 있습니다."),
    139: ("Refreshments are provided gratis to all attendees.", "다과가 모든 참석자들에게 무료로 제공됩니다."),
    140: ("She declared her intent to run for mayor.", "그녀는 시장에 출마하겠다는 의지를 밝혔습니다."),
    141: ("Please shred these confidential documents immediately.", "이 기밀 문서들을 즉시 파쇄해(갈기갈기 찢어) 주십시오."),
    142: ("The negotiations are at a delicate stage.", "협상은 민감한 단계에 있습니다."),
    143: ("They devised a scheme to increase profits.", "그들은 수익을 늘리기 위한 계획을 고안했습니다."),
    144: ("The floor was scuffed by heavy boots.", "바닥이 무거운 부츠에 의해 마모되었습니다(흠집이 났습니다)."),
    145: ("The immensity of the task was overwhelming.", "과제의 방대함(엄청난 크기)은 압도적이었습니다."),
    146: ("Use the pedestrian underpass to cross the road.", "길을 건너려면 보행자용 지하도를 이용하십시오."),
    147: ("The box contains miscellaneous office supplies.", "상자에는 다양한 사무용품이 들어 있습니다."),
    148: ("We are in a state of perpetual change.", "우리는 끊임없는 변화의 상태에 있습니다."),
    149: ("There are lingering doubts about the proposal.", "제안에 대해 오래가는 의구심이 있습니다."),
    150: ("The manager is tolerant of minor mistakes.", "그 매니저는 사소한 실수에 대해 관대합니다."),
    151: ("He was demoted due to poor performance.", "그는 실적 저조로 인해 강등되었습니다."),
    152: ("Stock prices plunged after the announcement.", "발표 후 주가가 급락했습니다(떨어졌습니다)."),
    153: ("The complex layout of the building disoriented the visitors.", "건물의 복잡한 구조가 방문객들을 혼란스럽게 했습니다."),
    154: ("He was reinstated after the internal investigation.", "그는 내부 조사 후 복직되었습니다."),
    155: ("Rumors can degrade a professional's reputation.", "소문은 전문가의 평판을 떨어뜨릴 수 있습니다."),
    156: ("You are cordially invited to the annual gala.", "연례 갈라 행사에 당신을 진심으로 초대합니다."),
    157: ("He often loses himself in his work.", "그는 종종 자신의 일에 몰두합니다."),
    158: ("The soldiers saluted the general.", "군인들은 장군에게 경례했습니다."),
    159: ("The mood in the meeting was generally upbeat.", "회의 분위기는 대체로 낙관적이었습니다."),
    160: ("He acted in defiance of the company rules.", "그는 회사 규칙에 반항하여 행동했습니다."),
    161: ("Birds forage for food in the winter.", "새들은 겨울에 먹이를 찾아다닙니다."),
    162: ("We will deploy more resources to the project.", "우리는 프로젝트에 더 많은 자원을 배치할 것입니다."),
    163: ("We faced several hurdles during the merger process.", "우리는 합병 과정에서 몇 가지 장애물에 직면했습니다."),
    164: ("Foreign dignitaries visited the manufacturing plant.", "외국 고위 인사들이 제조 공장을 방문했습니다."),
    165: ("The area received designation as a protected site.", "그 지역은 보호 구역으로 지정을 받았습니다."),
    166: ("The incumbent mayor is running for re-election.", "현직 시장은 재선에 도전하고 있습니다."),
    167: ("Building the bridge was an extraordinary feat of engineering.", "그 다리를 건설한 것은 공학의 놀랄만한 업적이었습니다."),
    168: ("The damage to the brand's reputation is irreversible.", "브랜드 평판에 대한 손상은 되돌릴 수 없습니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d24p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day24_part4.json
with open('day24_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 24 Part 4 Created (Advanced Business End).")
