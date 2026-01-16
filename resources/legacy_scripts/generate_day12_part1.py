import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 12 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 12) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 12 Part 1: Manufacturing & Production)
# Focus: "Hyper-TOEIC" (Strict Headword, Business Context, Safety/Efficiency)
toeic_examples_d12p1 = {
    1: ("The new equipment was installed yesterday.", "새 장비가 어제 설치되었습니다."),
    2: ("The factory decided to automate the assembly line.", "공장은 조립 라인을 자동화하기로 결정했습니다."),
    3: ("Please review the technical specifications.", "기술 사양서를 검토해 주십시오."),
    4: ("The machine is not working properly.", "기계가 제대로 작동하지 않고 있습니다."),
    5: ("Safety creates a productive work environment.", "안전은 생산적인 업무 환경을 만듭니다."),
    6: ("Take every precaution to avoid accidents.", "사고를 피하기 위해 모든 예방 조치를 취하십시오."),
    7: ("Trained staff will operate the machinery.", "숙련된 직원이 기계를 작동할 것입니다."),
    8: ("The processing of orders takes two days.", "주문 처리는 이틀이 걸립니다."),
    9: ("The plant is operating at full capacity.", "공장이 최대 용량으로 가동되고 있습니다."),
    10: ("Workers assemble the parts by hand.", "직원들은 부품을 손으로 조립합니다."),
    11: ("We utilize advanced technology in production.", "우리는 생산에 선진 기술을 활용합니다."),
    12: ("Please place the order before Friday.", "금요일 전에 주문을 해 주십시오(넣어 주십시오)."),
    13: ("Staff must fill the order immediately.", "직원들은 주문을 즉시 처리해야(채워야) 합니다."),
    14: ("The manufacturing cost is too high.", "제조 비용이 너무 높습니다."),
    15: ("We plan to renovate the old factory.", "우리는 오래된 공장을 개조할(보수할) 계획입니다."),
    16: ("The management made a difficult decision.", "경영진은 어려운 결정을 내렸습니다."),
    17: ("Raw material costs have increased.", "원자재 비용이 증가했습니다."),
    18: ("The product launch was a huge success.", "제품 출시는 큰 성공이었습니다."),
    19: ("They attribute the success to teamwork.", "그들은 성공을 팀워크 덕분으로 돌립니다(탓으로 합니다)."),
    20: ("We aim to improve production efficiency.", "우리는 생산 효율성을 높이는 것을 목표로 합니다."),
    21: ("There is a limit to our resources.", "우리의 자원에는 한계가 있습니다."),
    22: ("The service is tailored to your needs.", "그 서비스는 귀하의 요구에 맞추어져 있습니다."),
    23: ("Each component is tested individually.", "각 부품은 개별적으로 테스트됩니다."),
    24: ("She is capable of handling the task.", "그녀는 그 업무를 처리할 능력이 있습니다."),
    25: ("We must economize on fuel.", "우리는 연료를 절약해야 합니다."),
    26: ("We need a flexible production schedule.", "우리는 유연한 생산 일정이 필요합니다."),
    27: ("The quality is comparable to expensive brands.", "품질은 비싼 브랜드들과 필적합니다(비슷합니다)."),
    28: ("The factory produces 1000 units per day.", "그 공장은 하루에 1000개를 생산합니다."),
    29: ("Tom and Ann are 30 and 25, respectively.", "팀과 앤은 각각 30세와 25세입니다."),
    30: ("This device is used for measuring heat.", "이 장치는 열을 측정하는 데 사용됩니다."),
    31: ("We need to trim the budget.", "우리는 예산을 삭감해야(다듬어야) 합니다."),
    32: ("The company will launch a new product.", "그 회사는 신제품을 출시할 것입니다."),
    33: ("Items are sold separately.", "물품들은 따로(별도로) 판매됩니다."),
    34: ("Check the expiration date on the package.", "포장의 유효 기간(만료일)을 확인하십시오."),
    35: ("The driver maneuvered the truck carefully.", "운전자는 트럭을 조심스럽게 조종했습니다."),
    36: ("The coming year will be challenging.", "다가오는 해는 힘들 것(도전적일 것)입니다."),
    37: ("The package arrived damaged.", "소포가 손상된 채로 도착했습니다."),
    38: ("Regular maintenance prevents breakdowns.", "정기적인 유지 보수는 고장을 예방합니다."),
    39: ("The plant supplies power to the city.", "그 발전소(공장)는 도시에 전력을 공급합니다."),
    40: ("Handle the chemical substances with care.", "화학 물질을 주의해서 다루십시오.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d12p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day12_part1.json
with open('day12_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 12 Part 1 Created (Manufacturing).")
