import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 9 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 9) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 9 Part 3: Intermediate - Business Economy & Practice)
toeic_examples_d9p3 = {
    69: ("The architect presented the blueprint for the new building.", "건축가는 새 건물의 청사진(설계도)을 제시했습니다."),
    70: ("They closed a major business deal yesterday.", "그들은 어제 주요 사업 거래를 성사시켰습니다."),
    71: ("It is a small, family-run business.", "그것은 가족이 운영하는 소규모 사업체입니다."),
    72: ("Market fluctuation is normal.", "시장의 변동은 정상입니다."),
    73: ("He is traveling to Tokyo for business.", "그는 사업차 도쿄로 여행 중입니다."),
    74: ("Foreign trade is essential for the economy.", "해외 무역은 경제에 필수적입니다."),
    75: ("She decided to go into business for herself.", "그녀는 자신의 사업을 시작하기로 결심했습니다."),
    76: ("Many shops went out of business during the recession.", "불황기에 많은 가게들이 폐업했습니다."),
    77: ("The agreement was beneficial to mutual interests.", "그 합의는 상호 이익에 도움이 되었습니다."),
    78: ("The company has a nationwide network of branches.", "그 회사는 전국적인 지점 망을 가지고 있습니다."),
    79: ("The patient's condition need monitoring.", "환자의 상태는 관찰이 필요합니다."),
    80: ("We should cooperate with neighboring countries.", "우리는 인접한(이웃) 국가들과 협력해야 합니다."),
    81: ("Real estate sales have dropped significantly.", "부동산 매매가 상당히 감소했습니다."),
    82: ("The country is entering a deep recession.", "그 나라는 깊은 경기 후퇴(불황)에 들어서고 있습니다."),
    83: ("This medicine will relieve pain quickly.", "이 약은 고통을 빨리 덜어줄 것입니다."),
    84: ("He is a role model for young entrepreneurs.", "그는 젊은 기업가들의 역할 모델입니다."),
    85: ("Don't forget to unplug the printer.", "프린터 플러그를 뽑는 것을 잊지 마십시오."),
    86: ("The weather conditions worsened overnight.", "기상 조건이 밤새 악화되었습니다."),
    87: ("The accumulation of debt is a serious problem.", "부채의 축적(누적)은 심각한 문제입니다."),
    88: ("Smoke ascended from the chimney.", "연기가 굴뚝에서 올라갔습니다."),
    89: ("E-commerce has revolutionized retail.", "전자 상거래는 소매업에 혁명을 일으켰습니다."),
    90: ("He seemed indifferent to the news.", "그는 그 소식에 무관심한 듯 보였습니다."),
    91: ("The meeting was prolonged by an hour.", "회의가 한 시간 연장되었습니다."),
    92: ("The documents are filed relevnatly.", "문서들은 관련성 있게 철해져 있습니다. (문법적으로 조금 어색하지만 의미 전달 위주) -> Please attach any documents relevantly connected to your case. (더 자연스러운 예문으로 수정)"),
    93: ("Tax cuts can stimulate the economy.", "감세는 경제를 자극할 수 있습니다."),
    94: ("Vitamins supplement a healthy diet.", "비타민은 건강한 식단을 보완합니다."),
    95: ("The data entry work was tedious.", "데이터 입력 작업은 지루했습니다."),
    96: ("Delays are sometimes unavoidable.", "지연은 때때로 불가피합니다."),
    97: ("Changes in policy are related to the new law.", "정책의 변화는 새로운 법과 관련이 있습니다."),
    98: ("The new product will bring in substantial revenue.", "새 제품은 상당한 수익을 가져올(벌어들일) 것입니다."),
    99: ("She works for a stock brokerage firm.", "그녀는 주식 중개 회사에서 일합니다."),
    100: ("He has a degree in business management.", "그는 경영학 학위를 가지고 있습니다."),
    101: ("Ethical business practice is important.", "윤리적인 사업 관행은 중요합니다."),
    102: ("The building collapsed during the earthquake.", "그 건물은 지진 중에 붕괴되었습니다."),
    103: ("We must cope with the changing market.", "우리는 변화하는 시장에 대처해야 합니다."),
    104: ("We need a cost-effective solution.", "우리는 비용 효율적인 해결책이 필요합니다."),
    105: ("The prices are listed in descending order.", "가격은 내림차순으로 나열되어 있습니다."),
    106: ("The company dominates the software market.", "그 회사는 소프트웨어 시장을 지배합니다."),
    107: ("The industry is facing a downturn.", "그 산업은 침체(하락세)를 겪고 있습니다."),
    108: ("The job entails a lot of travel.", "그 일은 많은 여행을 수반합니다."),
    109: ("The exchange rate fluctuates daily.", "환율은 매일 변동합니다."),
    110: ("His business continued to flourish.", "그의 사업은 계속해서 번창했습니다."),
    111: ("Discounts are available for large purchases.", "대량 구매에 대해서는 할인이 가능합니다."),
    112: ("The charity event was held for the benefit of orphans.", "그 자선 행사는 고아들의 이익을 위해 열렸습니다."),
    113: ("He is the foremost expert in this field.", "그는 이 분야에서 으뜸가는 전문가입니다."),
    114: ("That company was a forerunner in digital technology.", "그 회사는 디지털 기술의 선구자였습니다."),
    115: ("Participants came from around the globe.", "참가자들은 전 세계에서 왔습니다."),
    116: ("Investment in infrastructure is necessary.", "사회 기반 시설에 대한 투자가 필요합니다."),
    117: ("The product is highly marketable.", "그 제품은 시장성이 매우 높습니다."),
    118: ("The pain was only momentary.", "고통은 순간적이었습니다."),
    119: ("It is a large multinational corporation.", "그것은 대규모 다국적 기업입니다."),
    120: ("We have a multi-regional marketing strategy.", "우리는 다지역 마케팅 전략을 가지고 있습니다."),
    121: ("Applicants of any nationality may apply.", "어떤 국적의 지원자라도 지원 가능합니다."),
    122: ("Net income increased by 10% this quarter.", "이번 분기 순수입은 10% 증가했습니다."),
    123: ("Drivers are penalized for speeding.", "운전자들은 과속으로 처벌받습니다."),
    124: ("The team put forth a new proposal.", "그 팀은 새로운 제안을 내놓았습니다."),
    125: ("The ratio of men to women is 2 to 1.", "남녀 비율은 2 대 1입니다."),
    126: ("He set up his own company.", "그는 자신의 회사를 세웠습니다(시작했습니다)."),
    127: ("Housing prices have skyrocketed.", "주택 가격이 치솟았습니다."),
    128: ("So far, everything is going according to plan.", "지금까지는 모든 것이 계획대로 진행되고 있습니다."),
    129: ("There was a sudden surge in demand.", "수요가 급등했습니다."),
    130: ("The merger created a positive synergy.", "합병은 긍정적인 시너지(상승효과)를 창출했습니다."),
    131: ("The report is a synthesis of several studies.", "그 보고서는 여러 연구의 종합입니다."),
    132: ("They used aggressive marketing tactics.", "그들은 공격적인 마케팅 전략(전술)을 사용했습니다."),
    133: ("Unemployment is a major economic issue.", "실업은 주요 경제 문제입니다."),
    134: ("The weather is variable at this time of year.", "이맘때의 날씨는 변덕스럽습니다."),
    135: ("Poverty creates a vicious cycle.", "빈곤은 악순환을 만듭니다."),
    136: ("He is without a doubt the best candidate.", "그는 의심할 여지 없이 최고의 후보자입니다.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d9p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    # Special correction for 92
    if no == 92:
         ex_en = "Please provide documents relevantly connected to the case."
         ex_ko = "사건과 관련이 있는 문서를 제공해 주십시오."

    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day9_part3.json
with open('day9_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 9 Part 3 Created (Intermediate).")
