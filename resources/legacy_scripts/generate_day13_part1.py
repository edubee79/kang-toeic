import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 13 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 13) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 13 Part 1: Customer Service & Satisfaction)
# Focus: "Hyper-TOEIC" (Strict Headword Match, Business Context, Politeness)
toeic_examples_d13p1 = {
    1: ("We received a complaint about the service.", "우리는 서비스에 대한 불평(항의)을 접수했습니다."),
    2: ("We deal with customer inquiries daily.", "우리는 매일 고객 문의를 처리합니다."),
    3: ("The customer became argumentative.", "그 고객은 논쟁적으로 변했습니다."),
    4: ("Staff should dress appropriately for work.", "직원들은 업무에 적절하게 옷을 입어야 합니다."),
    5: ("Please respond to the email promptly.", "이메일에 신속하게 응답해 주십시오."),
    6: ("The delay infuriated the passengers.", "지연이 승객들을 격분시켰습니다."),
    7: ("The staff was courteous and helpful.", "직원은 예의 바르고 도움이 되었습니다."),
    8: ("Customer satisfaction is our top priority.", "고객 만족은 우리의 최우선 사항입니다."),
    9: ("We apologize for the inconvenience.", "불편을 드려 죄송합니다."),
    10: ("Please complete the survey form.", "설문지 작성을 완료해 주십시오."),
    11: ("Can you be more specific about the problem?", "문제에 대해 좀 더 구체적으로 말씀해 주시겠습니까?"),
    12: ("Please return the defective item.", "결함이 있는 물품을 반품해 주십시오."),
    13: ("We will replace the damaged product.", "우리는 손상된 제품을 교체해 드릴 것입니다."),
    14: ("I enjoyed your presentation on sales.", "영업에 대한 당신의 발표를 잘 들었습니다."),
    15: ("The performance evaluation is next week.", "직무 수행 평가가 다음 주에 있습니다."),
    16: ("I am confident in our team's ability.", "저는 우리 팀의 능력을 확신합니다."),
    17: ("The storm caused extensive damage.", "폭풍이 광범위한 피해를 야기했습니다(일으켰습니다)."),
    18: ("The DVD includes a director's commentary.", "DVD에는 감독의 해설이 포함되어 있습니다."),
    19: ("You will receive notification by email.", "당신은 이메일로 통지(알림)를 받을 것입니다."),
    20: ("I apologize for the mistake.", "실수에 대해 사과드립니다."),
    21: ("Staff interact with customers daily.", "직원들은 매일 고객들과 상호 작용합니다(소통합니다)."),
    22: ("I am certain that we will succeed.", "저는 우리가 성공할 것이라고 확신합니다."),
    23: ("We appreciate your commitment to the project.", "프로젝트에 대한 당신의 헌신에 감사드립니다."),
    24: ("We applaud your efforts.", "우리는 당신의 노력에 박수를 보냅니다(칭찬합니다)."),
    25: ("The book is a biography of the CEO.", "그 책은 CEO의 전기입니다."),
    26: ("Customer feedback is critical to us.", "고객 피드백은 우리에게 매우 중요합니다(비판적입니다)."),
    27: ("Our success depends on your support.", "우리의 성공은 당신의 지지에 달려 있습니다."),
    28: ("We combine innovation with tradition.", "우리는 혁신과 전통을 결합합니다."),
    29: ("Safety is our top priority.", "안전이 우리의 최우선 사항입니다."),
    30: ("Please observe the safety regulations.", "안전 규정을 준수해 주십시오(지켜 주십시오)."),
    31: ("The product was found to be defective.", "그 제품은 결함이 있는 것으로 밝혀졌습니다."),
    32: ("The price reflects the quality.", "가격은 품질을 반영합니다."),
    33: ("He has a positive attitude toward work.", "그는 일에 대해 긍정적인 태도를 가지고 있습니다."),
    34: ("We do not want to disappoint our clients.", "우리는 고객들을 실망시키고 싶지 않습니다."),
    35: ("I would like to inquire about the job.", "그 일자리에 대해 문의하고 싶습니다."),
    36: ("Please insert your card into the slot.", "슬롯에 카드를 삽입해 주십시오."),
    37: ("Do not disclose confidential information.", "기밀 정보를 공개하지(누설하지) 마십시오."),
    38: ("We guarantee satisfaction with our service.", "우리는 우리 서비스에 대한 만족을 보장합니다."),
    39: ("Ask politely for assistance.", "도움을 정중하게 요청하십시오."),
    40: ("We take customer complaints seriously.", "우리는 고객 불만 사항을 진지하게 받아들입니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d13p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day13_part1.json
with open('day13_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 13 Part 1 Created (Customer Service).")
