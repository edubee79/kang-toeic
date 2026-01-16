import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 23 Part 4 : No. 137 ~ 167 (31 words) ---
part4_df = df[(df['Day'] == 23) & (df['No'] >= 137) & (df['No'] <= 167)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 23 Part 4: Advanced Business & Office)
# Focus: "Hyper-TOEIC" (HR, Disputes, Benefits, Advanced Vocabulary)
toeic_examples_d23p4 = {
    137: ("The package includes competitive salary and fringe benefits.", "그 패키지는 경쟁력 있는 급여와 부가 혜택을 포함합니다."),
    138: ("Management refused to give in to the union's demands.", "경영진은 노조의 요구에 굴복하기를 거부했습니다."),
    139: ("The instructions are simple and straightforward.", "지시 사항은 간단하고 솔직합니다(알기 쉽습니다)."),
    140: ("She is considering a career in nursing.", "그녀는 간호 분야에서의 경력을 고려하고 있습니다."),
    141: ("The company had to cut benefits due to budget constraints.", "회사는 예산 제약 때문에 혜택을 줄여야 했습니다."),
    142: ("He was flattered by the offer.", "그는 그 제안에 우쭐해졌습니다(기뻐했습니다)."),
    143: ("Disgruntled employees tried to sabotage the project.", "불만 품은 직원들이 프로젝트를 방해하려 했습니다."),
    144: ("We received a hearty welcome from the host.", "우리는 주최측으로부터 진심 어린 환영을 받았습니다."),
    145: ("He is remarkably spry for his age.", "그는 나이에 비해 놀라울 정도로 정정합니다."),
    146: ("Many employees prefer working on flextime.", "많은 직원들이 탄력 근무제로 일하는 것을 선호합니다."),
    147: ("They yearn for a better work-life balance.", "그들은 더 나은 일과 삶의 균형을 갈망합니다."),
    148: ("Please arrange the files in chronological order.", "파일들을 시간 순서대로 정리해 주십시오."),
    149: ("He received a generous severance pay upon retirement.", "그는 은퇴 시 넉넉한 퇴직금을 받았습니다."),
    150: ("A plaque was placed to commemorate the founder.", "창립자를 기념하기 위해 현판이 설치되었습니다."),
    151: ("She is currently on maternity leave.", "그녀는 현재 출산 휴가 중입니다."),
    152: ("The company runs an on-site nursery.", "그 회사는 사내 보육 시설을 운영합니다."),
    153: ("The strange noise piqued my curiosity.", "이상한 소리가 제 호기심을 자극했습니다."),
    154: ("You will get reimbursed for travel expenses.", "당신은 출장 경비를 상환(변제)받을 것입니다."),
    155: ("The event is held in conjunction with the trade fair.", "그 행사는 무역 박람회와 함께(연계하여) 열립니다."),
    156: ("Any misuse of company funds will result in dismissal.", "회사 자금의 오남용은 해고를 초래할 것입니다."),
    157: ("What time do you usually knock off work?", "당신은 보통 몇 시에 일을 마치십니까? (토익에서는 드물지만 구어체) -> We decided to knock off early today. (우리는 오늘 일찍 일을 마치기로 결정했습니다.)"),
    158: ("More than 500 exhibitors participated in the expo.", "500개 이상의 전시 업체가 엑스포에 참가했습니다."),
    159: ("We need to cut labor costs to remain competitive.", "우리는 경쟁력을 유지하기 위해 인건비를 절감해야 합니다."),
    160: ("Travel expenses are lower during off-peak seasons.", "비수기에는 여행 경비가 더 저렴합니다."),
    161: ("It is illegal to discriminate against employees based on age.", "나이에 근거하여 직원을 차별하는 것은 불법입니다."),
    162: ("She is known as a kindhearted manager.", "그녀는 마음씨 고운 매니저로 알려져 있습니다."),
    163: ("Annual salary reviews will be held in March.", "연례 연봉 심사가 3월에 열릴 것입니다."),
    164: ("I second the motion to adjourn the meeting.", "저는 회의를 휴회하자는 동의에 재청합니다."),
    165: ("He received a citation for his outstanding service.", "그는 뛰어난 복무로 표창장을 받았습니다."),
    166: ("The labor dispute was resolved peacefully.", "노사 분규는 평화롭게 해결되었습니다."),
    167: ("We aim to build goodwill with our local community.", "우리는 지역 사회와 우호 관계를 구축하는 것을 목표로 합니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d23p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    # Correction for 'knock off' typical usage
    if no == 157: 
        ex_en = "We decided to knock off early today."
        ex_ko = "우리는 오늘 일찍 일을 마치기로 결정했습니다."

    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day23_part4.json
with open('day23_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 23 Part 4 Created (Advanced Business End).")
