import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 27 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 27) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 27 Part 1: Investment & Finance)
# Focus: "Hyper-TOEIC" (Investing, Market Analysis, Business Strategy)
toeic_examples_d27p1 = {
    1: ("Real estate is a safe long-term investment.", "부동산은 안전한 장기 투자입니다."),
    2: ("We secured a lucrative contract with the government.", "우리는 정부와 수익성 있는 계약을 확보했습니다."),
    3: ("Stock market investments are inherently risky.", "주식 시장 투자는 본질적으로 위험합니다."),
    4: ("He managed to secure funding for the project.", "그는 프로젝트 자금을 확보하는 데 성공했습니다."),
    5: ("We do not anticipate any changes in the foreseeable future.", "우리는 가까운(예견할 수 있는) 미래에 어떤 변화도 예상하지 않습니다."),
    6: ("He has an innate ability to sell.", "그는 타고난 판매 능력을 가지고 있습니다."),
    7: ("The company owns several properties in the city.", "그 회사는 도시에 여러 부동산(재산)을 소유하고 있습니다."),
    8: ("I am signing this contract on behalf of my client.", "저는 제 고객을 대신해서 이 계약서에 서명하고 있습니다."),
    9: ("We signed a five-year lease on the office.", "우리는 그 사무실에 대해 5년 임대 계약을 체결했습니다."),
    10: ("The event is sponsored by a local bank.", "그 행사는 지역 은행에 의해 후원됩니다."),
    11: ("The committee proposed a new budget plan.", "위원회는 새로운 예산안을 제안했습니다."),
    12: ("We appreciate your continued support.", "당신의 지속적인 후원(지지)에 감사드립니다."),
    13: ("The distribution of profits was delayed.", "이익 분배가 지연되었습니다."),
    14: ("Please consider all options before deciding.", "결정하기 전에 모든 옵션을 고려해 주십시오."),
    15: ("The project is nearly complete.", "프로젝트가 거의 완료되었습니다."),
    16: ("He gave his consent to the merger.", "그는 합병에 동의(허락)했습니다."),
    17: ("I would like to express my gratitude for your help.", "당신의 도움에 감사를 표하고 싶습니다."),
    18: ("Consult with a financial advisor before investing.", "투자하기 전에 재정 고문과 상의하십시오."),
    19: ("He followed his father's advice.", "그는 아버지의 조언을 따랐습니다."),
    20: ("The loss was partially covered by insurance.", "손실은 보험에 의해 부분적으로 보상되었습니다."),
    21: ("It is evident that the market is recovering.", "시장이 회복되고 있다는 것은 분명합니다."),
    22: ("We improved the reliability of our products.", "우리는 제품의 신뢰도를 향상시켰습니다."),
    23: ("Investors are cautious about the new policy.", "투자자들은 새로운 정책에 대해 조심스러워 합니다."),
    24: ("His speech offered valuable insight into the economy.", "그의 연설은 경제에 대한 귀중한 통찰력을 제공했습니다."),
    25: ("You should diversify your investment portfolio.", "당신은 투자 포트폴리오를 다양화해야 합니다."),
    26: ("We are looking for possible solutions.", "우리는 가능한 해결책을 찾고 있습니다."),
    27: ("There is widespread speculation about a merger.", "합병에 대한 추측이 널리 퍼져 있습니다."),
    28: ("Success depends solely on your effort.", "성공은 전적으로 당신의 노력에 달려 있습니다."),
    29: ("He is a successful entrepreneur in the tech industry.", "그는 기술 산업에서 성공한 사업가입니다."),
    30: ("The stock price will eventually rise.", "주가는 결국 오를 것입니다."),
    31: ("Shareholders approved the acquisition.", "주주들은 인수를 승인했습니다."),
    32: ("The economic outlook for next year is positive.", "내년 경제 전망은 긍정적입니다."),
    33: ("Political stability is essential for growth.", "정치적 안정은 성장에 필수적입니다."),
    34: ("Government bonds are considered safe investments.", "국채는 안전한 투자로 간주됩니다."),
    35: ("The depreciation of the currency affected imports.", "통화 가치 하락은 수입에 영향을 미쳤습니다."),
    36: ("There is an increasing demand for renewable energy.", "재생 에너지에 대한 수요가 증가하고 있습니다."),
    37: ("The disease is prevalent in tropical regions.", "그 질병은 열대 지역에서 유행하고 있습니다."),
    38: ("The country is experiencing rapid economic growth.", "그 나라는 빠른 경제 성장을 겪고 있습니다."),
    39: ("The company achieved unprecedented success.", "그 회사는 전례 없는 성공을 거두었습니다."),
    40: ("The investment yields a high return.", "그 투자는 높은 수익을 가져옵니다(산출합니다).")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d27p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day27_part1.json
with open('day27_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 27 Part 1 Created (Investment Start).")
