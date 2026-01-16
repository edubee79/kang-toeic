import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 22 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 22) & (df['No'] >= 137)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 22 Part 4: Advanced Communication)
# Focus: "Hyper-TOEIC" (Diplomacy, Negotiations, Formal Agreements)
toeic_examples_d22p4 = {
    137: ("I called to reassure him about the deadline.", "저는 마감 기한에 대해 그를 안심시키기 위해 전화했습니다."),
    138: ("The senate went into recess.", "상원은 휴회에 들어갔습니다."),
    139: ("We have a slot open for an interview.", "우리는 인터뷰를 위한 시간(틈)이 비어 있습니다."),
    140: ("His presentation was brief and to the point.", "그의 발표는 간결하고 핵심을 찔렀습니다(적절했습니다)."),
    141: ("The rumor turned out to be false.", "그 소문은 거짓으로 판명되었습니다."),
    142: ("You cannot act without the consent of the director.", "당신은 이사의 동의 없이 행동할 수 없습니다."),
    143: ("He resigned due to a conflict of interest.", "그는 이해관계의 충돌 때문에 사임했습니다."),
    144: ("The party was divided into rival factions.", "그 당은 라이벌 파벌들로 나뉘었습니다."),
    145: ("We stand on the principle of equality.", "우리는 평등의 원칙에 기초하고(의거하고) 있습니다."),
    146: ("Please keep your report succinct.", "보고서를 간결하게 유지해 주십시오."),
    147: ("The meeting is running late.", "회의가 늦어지고 있습니다(늦게 하고 있습니다)."),
    148: ("He enthused about the new project.", "그는 새 프로젝트에 대해 열변을 토했습니다."),
    149: ("You must stand up for your rights.", "당신은 자신의 권리를 옹호해야 합니다."),
    150: ("Presumably, he will arrive tomorrow.", "아마(생각건대), 그는 내일 도착할 것입니다."),
    151: ("This is an abridgment of the original text.", "이것은 원문의 요약본입니다."),
    152: ("We made a counteroffer to the seller.", "우리는 판매자에게 수정 제안(대안)을 했습니다."),
    153: ("She was chosen to moderate a meeting.", "그녀는 회의의 사회를 보도록 선택되었습니다."),
    154: ("I had to sit through a boring lecture.", "저는 지루한 강의를 끝까지 자리를 지켜야 했습니다."),
    155: ("I applied on the off chance of getting the job.", "저는 그 일자리를 얻을지도 모른다는 희박한 가능성(요행)을 보고 지원했습니다."),
    156: ("His handwriting is illegible.", "그의 필체는 읽기 어렵습니다."),
    157: ("The book is written conversationally.", "그 책은 회화체로(담화로) 쓰여 있습니다."),
    158: ("Who is the presiding officer?", "(회의를) 주재하는 임원은 누구입니까?"),
    159: ("Read the following excerpt carefully.", "다음 발췌를 주의 깊게 읽으십시오."),
    160: ("The court upheld the decision.", "법원은 그 결정을 지지했습니다."),
    161: ("We need consenting adults for this study.", "우리는 이 연구를 위해 동의하는 성인들이 필요합니다."),
    162: ("He was summoned to the court.", "그는 법원으로 소환되었습니다."),
    163: ("Please confine your remarks to the topic.", "당신의 발언을 주제에 한정시켜 주십시오(제한해 주십시오)."),
    164: ("The two leaders met at the summit meeting.", "두 지도자는 정상회담에서 만났습니다."),
    165: ("She will chair the committee.", "그녀는 위원회의 의장을 맡을 것입니다."),
    166: ("He gave an eloquent speech.", "그는 감명을 주는 웅변적인 연설을 했습니다."),
    167: ("Don't put off until tomorrow what you can do today.", "오늘 할 수 있는 일을 내일까지 미루지 마십시오."),
    168: ("The witness gave a coherent account of the accident.", "목격자는 사고에 대해 조리 있는(일관성 있는) 설명을 했습니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d22p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day22_part4.json
with open('day22_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 22 Part 4 Created (Advanced Communication).")
