import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 9 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 9) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 9 Part 4: Advanced - Finance & Economic Trends)
# REFLECTING USER FEEDBACK: "Make examples more TOEIC-like (Formal, Business Context)"
toeic_examples_d9p4 = {
    137: ("Please ensure that the billing address matches the credit card statement.", "청구서 주소가 신용카드 명세서와 일치하는지 확인해 주십시오."),
    138: ("The research project was funded by a government grant.", "그 연구 프로젝트는 정부 보조금으로 자금을 조달받았습니다."),
    139: ("The market value of the property has increased significantly.", "그 부동산의 시가(시장 가치)가 상당히 상승했습니다."),
    140: ("Oversupply tends to pull down market prices.", "공급 과잉은 시장 가격을 끌어내리는 경향이 있습니다."),
    141: ("The inflation rate has remained stationary for three months.", "인플레이션율은 3개월 동안 정지된(변동 없는) 상태를 유지했습니다."),
    142: ("The storm shows no signs of abating.", "폭풍은 누그러질 기미를 보이지 않습니다. / Tax benefits did not abate the financial crisis. (세제 혜택도 금융 위기를 완화시키지 못했다.)"),
    143: ("The factory will cease operations next month.", "공장은 다음 달에 운영을 중단할 것입니다."),
    144: ("The warning sign was conspicuously displayed.", "경고 표지판은 눈에 띄게 게시되었습니다."),
    145: ("Economic conditions continued to deteriorate.", "경제 상황은 계속해서 악화되었습니다."),
    146: ("The contract implicitly assumes compliance with local laws.", "그 계약은 암암리에(내재적으로) 현지 법률 준수를 가정합니다."),
    147: ("They enjoyed a leisurely lunch discussion.", "그들은 느긋한 점심 토론을 즐겼습니다."),
    148: ("Pollution poses a menace to public health.", "오염은 공중 보건에 위협을 가합니다."),
    149: ("There was a perceptible change in consumer confidence.", "소비자 신뢰도에 인지할 수 있는 변화가 있었습니다."),
    150: ("The agency specializes in job placement for graduates.", "그 에이전시는 졸업생들을 위한 취업 알선을 전문으로 합니다."),
    151: ("Mr. Jones remarked that sales were better than expected.", "Jones 씨는 매출이 예상보다 좋았다고 말했습니다(언급했습니다)."),
    152: ("The system allows for easy data retrieval.", "그 시스템은 쉬운 데이터 복구(검색)를 가능하게 합니다."),
    153: ("There has been a slowdown in manufacturing activity.", "제조업 활동에 둔화(경기 후퇴)가 있었습니다."),
    154: ("He manages the department's solitary satellite office.", "그는 부서의 유일한(외딴) 위성 사무소를 관리합니다."),
    155: ("The government announced a bailout for the ailing industry.", "정부는 병든(경영난을 겪는) 산업을 위한 구제 금융을 발표했습니다."),
    156: ("Please review the attached financial statement.", "첨부된 재무제표를 검토해 주십시오."),
    157: ("The company has a monopoly on the local market.", "그 회사는 지역 시장에 대한 독점권을 가지고 있습니다."),
    158: ("Experienced programmers are in high demand.", "경력 있는 프로그래머들은 수요가 많습니다."),
    159: ("The leaders signed a multilateral trade agreement.", "지도자들은 다국간 무역 협정에 서명했습니다."),
    160: ("The tickets are non-refundable and nontransferable.", "티켓은 환불 불가이며 양도할 수 없습니다."),
    161: ("The subsidiary reports directly to the parent company.", "자회사는 모회사에 직접 보고합니다."),
    162: ("The privatization of the railway system remains controversial.", "철도 시스템의 민영화는 여전히 논란의 여지가 있습니다."),
    163: ("The economy is expected to rebound next quarter.", "경제는 다음 분기에 회복될(반등할) 것으로 예상됩니다."),
    164: ("The runner-up in the competition received a silver trophy.", "대회의 2위(차점자)는 은 트로피를 받았습니다."),
    165: ("Unemployment is a secondary effect of the recession.", "실업은 불황의 부차적 영향입니다."),
    166: ("Sales have been sluggish due to the weak economy.", "약한 경제 때문에 판매가 부진했습니다(느릿했습니다)."),
    167: ("The policy marks a departure from economic stagnation.", "그 정책은 경제 침체로부터의 탈피를 나타냅니다."),
    168: ("Stock prices have been extremely volatile this week.", "주가는 이번 주에 극심하게 변동했습니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d9p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day9_part4.json
with open('day9_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 9 Part 4 Created (Advanced 900).")
