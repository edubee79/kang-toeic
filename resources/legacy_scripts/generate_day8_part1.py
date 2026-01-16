import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 8 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 8) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 8 Part 1: Marketing & Strategy)
toeic_examples_d8p1 = {
    1: ("The company placed an advertisement in the newspaper.", "그 회사는 신문에 광고를 실었습니다."),
    2: ("There was only a marginal difference in cost.", "비용에는 아주 약간의(미미한) 차이만 있었습니다."),
    3: ("We strive to improve customer satisfaction.", "우리는 고객 만족을 높이기 위해 노력합니다."),
    4: ("Consumer behavior is influenced by social media.", "소비자 행동은 소셜 미디어의 영향을 받습니다."),
    5: ("The request was approved instantly.", "요청은 즉시 승인되었습니다."),
    6: ("The marketing team came up with a creative idea.", "마케팅 팀은 창의적인 아이디어를 생각해 냈습니다."),
    7: ("We aggressively marketed the new product line.", "우리는 새로운 제품 라인을 공격적으로(적극적으로) 마케팅했습니다."),
    8: ("The campaign aims to reach a younger audience.", "그 캠페인은 더 젊은 층에 도달하는 것을 목표로 합니다."),
    9: ("We need a long-term strategy for growth.", "우리는 성장을 위한 장기적인 전략이 필요합니다."),
    10: ("Recent surveys indicate a rise in consumer confidence.", "최근 설문 조사는 소비자 신뢰도의 상승을 나타냅니다."),
    11: ("The special offer will attract more customers.", "특별 제안은 더 많은 고객을 끌어들일 것입니다."),
    12: ("The candidate has extensive experience in sales.", "그 후보자는 영업 분야에 광범위한 경험을 가지고 있습니다."),
    13: ("We analyze the data to identify trends.", "우리는 추세를 파악하기 위해 데이터를 분석합니다."),
    14: ("The company plans to introduce a new model next year.", "그 회사는 내년에 새 모델을 도입할(소개할) 계획입니다."),
    15: ("We advise clients on financial matters.", "우리는 고객들에게 재정 문제에 대해 조언합니다."),
    16: ("You can subscribe to our newsletter for updates.", "업데이트를 위해 뉴스레터를 구독할 수 있습니다."),
    17: ("In the absence of the manager, please contact me.", "매니저의 부재 시에는 저에게 연락해 주십시오."),
    18: ("Email is a convenient means of communication.", "이메일은 편리한 의사소통 수단입니다."),
    19: ("Customers prefer online shopping to visiting stores.", "고객들은 매장 방문보다 온라인 쇼핑을 선호합니다."),
    20: ("The main advantage of this system is its speed.", "이 시스템의 주요 이점은 속도입니다."),
    21: ("Please forward this email to the accounting department.", "이 이메일을 회계 부서로 전달해 주십시오."),
    22: ("The gallery features contemporary art.", "그 갤러리는 현대 미술을 특징으로 합니다."),
    23: ("The proposal is still under discussion.", "그 제안은 아직 논의 중입니다."),
    24: ("The initial response to the product was positive.", "제품에 대한 초기 반응은 긍정적이었습니다."),
    25: ("Sales have increased steadily over the past year.", "판매량은 지난 1년 동안 꾸준히 증가했습니다."),
    26: ("Expensive items are not necessarily better.", "비싼 물건이 반드시 더 좋은 것은 아닙니다."),
    27: ("We must resolve this issue before the deadline.", "우리는 마감 기한 전에 이 문제를 해결해야 합니다."),
    28: ("The scanner can detect errors in the document.", "스캐너는 문서의 오류를 감지할 수 있습니다."),
    29: ("Competition will intensify in the coming months.", "경쟁은 다가오는 몇 달 동안 심화될 것입니다."),
    30: ("The committee reacted favorably to the suggestion.", "위원회는 그 제안에 호의적으로 반응했습니다."),
    31: ("The insurance policy covers water damage.", "그 보험 증권은 수해를 보장합니다(포함합니다)."),
    32: ("The new model uses less energy than the old one.", "새 모델은 구형보다 에너지를 덜 사용합니다."),
    33: ("The majority of employees voted for the change.", "대다수의 직원들이 변경에 찬성표를 던졌습니다."),
    34: ("The company decided to adopt a new policy.", "회사는 새로운 정책을 채택하기로 결정했습니다."),
    35: ("The success was largely due to his efforts.", "성공은 주로(대부분) 그의 노력 덕분이었습니다."),
    36: ("Please disregard the previous notice.", "이전 공지 사항은 무시해 주십시오."),
    37: ("We appreciate your effort in completing the project.", "프로젝트를 완료하는 데 쏟은 귀하의 노력에 감사드립니다."),
    38: ("The company offers incentives to high-performing staff.", "회사는 성과가 우수한 직원들에게 인센티브(장려금)를 제공합니다."),
    39: ("There is a growing need for renewable energy.", "재생 에너지에 대한 필요성이 커지고 있습니다."),
    40: ("He was the mastermind behind the successful campaign.", "그는 성공적인 캠페인의 배후에 있는 입안자(지휘자)였습니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d8p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day8_part1.json
with open('day8_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 8 Part 1 Created (Marketing & Strategy).")
