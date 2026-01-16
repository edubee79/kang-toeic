import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 7 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 7) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 7 Part 1: Marketing CORRECTED)
toeic_examples_d7p1 = {
    1: ("We conducted a survey to gather customer feedback.", "우리는 고객 의견을 수집하기 위해 설문 조사를 실시했습니다."),
    2: ("The market analysis shows a growing demand for eco-friendly products.", "시장 분석은 친환경 제품에 대한 수요가 증가하고 있음을 보여줍니다."),
    3: ("Over 500 respondents participated in the study.", "500명 이상의 응답자가 그 연구에 참여했습니다."),
    4: ("The company has a monopoly on the software market.", "그 회사는 소프트웨어 시장에서 독점권을 가지고 있습니다."),
    5: ("Competition in the electronics industry is fierce.", "전자 산업에서의 경쟁은 치열합니다."),
    6: ("We consistently strive to improve our service quality.", "우리는 서비스 품질을 향상시키기 위해 항상(일관되게) 노력합니다."),
    7: ("There is a high demand for skilled engineers.", "숙련된 엔지니어에 대한 높은 수요가 있습니다."),
    8: ("The team did its utmost to meet the sales target.", "팀은 판매 목표를 달성하기 위해 전력을 다했습니다."),
    9: ("We need to expand our customer base.", "우리는 고객 기반을 확장해야 합니다."),
    10: ("The latest model includes advanced features.", "최신 모델은 고급 기능들을 포함합니다."),
    11: ("The meeting was postponed due to a scheduling conflict.", "회의는 일정 겹침 때문에 연기되었습니다."),
    12: ("Please provide additional information about the product.", "제품에 대한 추가 정보를 제공해 주십시오."),
    13: ("We appreciate your interest in our company.", "우리 회사에 대한 귀하의 관심에 감사드립니다(높이 평가합니다)."),
    14: ("The salesperson gave a demonstration of the new vacuum cleaner.", "영업 사원은 새 진공청소기의 시연을 보여주었습니다."),
    15: ("It is cheaper to buy office supplies in bulk.", "사무용품을 대량으로 사는 것이 더 저렴합니다."),
    16: ("Please examine the contract carefully before signing.", "서명하기 전에 계약서를 주의 깊게 검토(조사)하십시오."),
    17: ("The new policy will become effective next month.", "새 정책은 다음 달에 발효될(시행될) 것입니다."),
    18: ("Consumers like products that are easy to use.", "소비자들은 사용하기 쉬운 제품을 좋아합니다."),
    19: ("This offer is especially designed for new members.", "이 제안은 특히 신규 회원을 위해 설계되었습니다."),
    20: ("We monitor our competitors closely.", "우리는 경쟁사들을 면밀히 모니터링합니다."),
    21: ("I would like to reserve a table for two.", "2인용 테이블을 예약하고 싶습니다."),
    22: ("We need to cooperate with our partners to succeed.", "우리는 성공하기 위해 파트너들과 협력해야 합니다."),
    23: ("The results were very encouraging.", "결과는 매우 고무적이었습니다."),
    24: ("The company posted profits for three consecutive years.", "그 회사는 3년 연속 흑자를 기록했습니다."),
    25: ("The profit exceeded our expectation.", "이익은 우리의 예상을 초과했습니다."),
    26: ("We need to publicize the event to attract more people.", "우리는 더 많은 사람들을 끌어모으기 위해 그 행사를 선전해야 합니다."),
    27: ("They plan to raise the price of the product.", "그들은 제품 가격을 올릴 계획입니다."),
    28: ("The weather was extremely hot for the outdoor event.", "야외 행사를 하기에 날씨가 극도로 더웠습니다."),
    29: ("The new tax law will affect small businesses.", "새 세법은 소기업들에 영향을 미칠 것입니다."),
    30: ("Our main target is the teenage demographic.", "우리의 주요 목표는 10대 인구층입니다."),
    31: ("The advertising campaign was a huge success.", "그 광고 캠페인은 큰 성공이었습니다."),
    32: ("It is probable that sales will increase next quarter.", "다음 분기에 판매가 증가할 개연성이 높습니다."),
    33: ("The presentation will focus on marketing strategies.", "프레젠테이션은 마케팅 전략에 집중할 것입니다."),
    34: ("Sales of ice cream are highly seasonal.", "아이스크림 판매는 매우 계절적입니다."),
    35: ("The recession had a negative impact on sales.", "경기 침체는 판매에 부정적인 충격을 주었습니다."),
    36: ("A comparison of the two products reveals some differences.", "두 제품의 비교는 몇 가지 차이점을 드러냅니다."),
    37: ("There is a wide gap between the rich and the poor.", "빈부 격차가 큽니다."),
    38: ("We are facing mounting pressure to cut costs.", "우리는 비용 삭감에 대한 증가하는 압력에 직면해 있습니다."),
    39: ("The survey results are reflective of public opinion.", "설문 조사 결과는 여론을 반영합니다."),
    40: ("Determined efforts will eventually lead to success after all.", "단호한 노력은 결국 성공으로 이어질 것입니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d7p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day7_part1.json
with open('day7_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 7 Part 1 Created (Corrected).")
