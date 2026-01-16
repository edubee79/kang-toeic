import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 8 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 8) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 8 Part 4: Advanced - Corporate Strategy & Dynamics)
toeic_examples_d8p4 = {
    137: ("Employees must maintain discipline in the workplace.", "직원들은 직장에서 규율을 유지해야 합니다."),
    138: ("The catchy jingle helped sell the product.", "기억하기 쉬운 시엠송(CM송)이 제품 판매를 도왔습니다."),
    139: ("The new device offers greater mobility.", "새 장치는 더 큰 이동성을 제공합니다."),
    140: ("The negotiations ended abruptly.", "협상이 갑자기 끝났습니다."),
    141: ("The novel was completely absorbing.", "그 소설은 완전히 빠져들게 만들었습니다(재미있었습니다)."),
    142: ("She looked admiringly at the painting.", "그녀는 그림을 감탄하며 바라보았습니다."),
    143: ("The criminal is still at large.", "범인이 아직 잡히지 않았습니다(도주 중입니다). / 전체로서의 사회(society at large)"),
    144: ("He likes to boast about his achievements.", "그는 자신의 성취에 대해 자랑하는 것을 좋아합니다."),
    145: ("Our foreign correspondent reported from London.", "우리의 해외 특파원이 런던에서 보도했습니다."),
    146: ("He met with his counterpart from the other company.", "그는 상대 회사의 대응 관계자(상대방)와 만났습니다."),
    147: ("We must not accept defeat.", "우리는 패배를 받아들여서는 안 됩니다."),
    148: ("The company plans to diversify its product line.", "그 회사는 제품 라인을 다각화할 계획입니다."),
    149: ("The company holds a dominant position in the market.", "그 회사는 시장에서 우세한(지배적인) 위치를 차지하고 있습니다."),
    150: ("The hotel offers fabulous views of the ocean.", "그 호텔은 멋진 바다 전망을 제공합니다."),
    151: ("We need to fortify our market position.", "우리는 시장 위치를 강화해야 합니다."),
    152: ("Trust is fundamental to a good relationship.", "신뢰는 좋은 관계에 필수적입니다(근본적입니다)."),
    153: ("Guests were encouraged to mingle at the party.", "손님들은 파티에서 어울리도록 장려되었습니다."),
    154: ("Time is preciously short.", "시간이 매우(소중하게) 부족합니다."),
    155: ("There is a stark contrast between the two reports.", "두 보고서 사이에는 극명한(황량한) 대조가 있습니다."),
    156: ("The steadiness of the economy is encouraging.", "경제의 안정성은 고무적입니다."),
    157: ("The offer was too alluring to refuse.", "그 제안은 거절하기에는 너무 매혹적이었습니다."),
    158: ("It takes time to assimilate into a new culture.", "새로운 문화에 동화되는(적응하는) 데는 시간이 걸립니다."),
    159: ("We must avoid delays at all costs.", "우리는 무슨 수를 써서라도 지연을 피해야 합니다."),
    160: ("We await your prompt reply.", "우리는 귀하의 신속한 답변을 기다립니다."),
    161: ("The speaker captivated the audience.", "연사는 청중을 사로잡았습니다(매혹시켰습니다)."),
    162: ("The project culminated in a grand opening ceremony.", "그 프로젝트는 성대한 개막식으로 막을 내렸습니다(절정에 달했습니다)."),
    163: ("He acted in defiance of the rules.", "그는 규칙을 무시하고(반항하여) 행동했습니다."),
    164: ("The fog began to dissipate.", "안개가 걷히기(흩어지기) 시작했습니다. / 우려를 불식시키다"),
    165: ("Innovation is the driving force behind our success.", "혁신은 우리 성공의 원동력(추진력)입니다."),
    166: ("The survey aimed to elicit honest feedback.", "그 설문 조사는 솔직한 피드백을 끌어내는 것을 목표로 했습니다."),
    167: ("The response to the ad was overwhelming.", "광고에 대한 반응은 압도적이었습니다."),
    168: ("Employees voiced their concerns about the merger.", "직원들은 합병에 대한 우려를 표명했습니다(목소리를 냈습니다).")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d8p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day8_part4.json
with open('day8_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 8 Part 4 Created (Advanced 900).")
