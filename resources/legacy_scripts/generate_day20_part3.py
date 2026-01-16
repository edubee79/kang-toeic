import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 20 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 20) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 20 Part 3: Intermediate Business & Office)
# Focus: "Hyper-TOEIC" (Business Communication, Procedures, General Office)
toeic_examples_d20p3 = {
    69: ("The conference theme is 'Innovation in Business'.", "회의 주제는 '비즈니스 혁신'입니다."),
    70: ("We use traditional methods of production.", "우리는 전통적인 생산 방식을 사용합니다."),
    71: ("Please send me a copy of the report.", "보고서 한 부를 저에게 보내주십시오."),
    72: ("Technology is changing at a fast pace.", "기술은 빠른 속도로 변하고 있습니다."),
    73: ("She was assigned to the marketing department.", "그녀는 마케팅 부서로 배정되었습니다."),
    74: ("Your new design is similar to the old one.", "당신의 새 디자인은 예전 것과 유사합니다."),
    75: ("The event aims to bring together industry leaders.", "그 행사는 업계 리더들을 불러 모으는 것을 목표로 합니다."),
    76: ("I will certainly look into the matter.", "제가 확실히 그 문제를 조사해 보겠습니다."),
    77: ("We do not charge for delivery.", "우리는 배송에 대해 요금을 청구하지 않습니다."),
    78: ("We need to cut down on paper usage.", "우리는 종이 사용을 줄여야 합니다."),
    79: ("Have you decided on a venue for the party?", "파티 장소는 결정했습니까?"),
    80: ("The market has remained flat for the past month.", "시장은 지난달 동안 변동이 없었습니다(일률적이었습니다)."),
    81: ("The diamond is flawless and very valuable.", "그 다이아몬드는 결점이 없고 매우 가치가 있습니다."),
    82: ("Please refer to the employee handbook for more information.", "더 많은 정보를 원하시면 직원 안내서를참조하십시오."),
    83: ("We received a handwritten note of thanks.", "우리는 손으로 쓴 감사 메모를 받았습니다."),
    84: ("This phenomenon is common in the tech industry.", "이러한 현상은 기술 업계에서 흔합니다."),
    85: ("Sales reached a record high this quarter.", "이번 분기에 매출이 최고 기록을 달성했습니다."),
    86: ("Try to reset the machine if it stops working.", "기계가 멈추면 다시 맞추어(리셋해) 보십시오."),
    87: ("Please check to see if the package has arrived.", "소포가 도착했는지 여부를 확인해(알아봐) 주십시오."),
    88: ("The studio announced a sequel to the popular movie.", "스튜디오는 인기 영화의 속편을 발표했습니다."),
    89: ("We need to set up a date for the meeting.", "우리는 회의 날짜를 잡아야 합니다."),
    90: ("We need to sharpen our competitive edge.", "우리는 경쟁력을 날카롭게 만들어야(향상시켜야) 합니다."),
    91: ("The two companies worked side by side on the project.", "두 회사는 그 프로젝트에서 나란히 일했습니다."),
    92: ("The policy applies to managers and staff alike.", "그 정책은 관리자와 직원 모두에게 마찬가지로 적용됩니다."),
    93: ("You should consult an accountant about your taxes.", "세금 문제에 대해서는 회계사와 상담해야 합니다."),
    94: ("Revenue increased; by contrast, expenses decreased.", "수익은 증가했습니다. 그와 대조적으로 비용은 감소했습니다."),
    95: ("The Chief Financial Officer (CFO) presented the annual report.", "최고 재무 책임자(CFO)가 연례 보고서를 발표했습니다."),
    96: ("We need to take corrective action immediately.", "우리는 즉시 시정(바로잡는) 조치를 취해야 합니다."),
    97: ("Many workers were displaced by the automation.", "많은 노동자들이 자동화로 인해 일자리를 잃었습니다(대신되었습니다)."),
    98: ("The project is far from complete.", "그 프로젝트는 완료되려면 결코 멀었습니다(아직 멀었습니다)."),
    99: ("The frequency of accidents has decreased.", "사고 빈도가 감소했습니다."),
    100: ("She performed impressively during her internship.", "그녀는 인턴십 기간 동안 인상적으로 업무를 수행했습니다."),
    101: ("He tends to keep to himself at work.", "그는 직장에서 혼자 지내는(비밀로 하는) 경향이 있습니다."),
    102: ("The manager was overly critical of the report.", "관리자는 그 보고서에 대해 지나치게 비판적이었습니다."),
    103: ("The price is quite reasonable for this quality.", "이 품질에 비해 가격은 꽤 적당합니다."),
    104: ("He takes after his father in many ways.", "그는 여러 면에서 아버지를 닮았습니다."),
    105: ("I am unfamiliar with the new software.", "저는 새 소프트웨어에 익숙하지 않습니다(낯섭니다)."),
    106: ("The presentation will be followed by a Q&A session.", "발표 다음에 질의응답 시간이 있을 것입니다."),
    107: ("We faced a string of technical problems.", "우리는 일련의 기술적인 문제들에 직면했습니다."),
    108: ("Please activate your account by clicking the link.", "링크를 클릭하여 계정을 활성화(작동)해 주십시오."),
    109: ("The expenses add up to a significant amount.", "비용 합계가 상당한 액수에 달합니다(합계가 ~이다)."),
    110: ("The annual budget has been approved.", "연간 예산이 승인되었습니다."),
    111: ("The annual report summarizes the company's performance.", "연례 보고서는 회사의 실적을 요약합니다."),
    112: ("The company badly needs new investment.", "그 회사는 새로운 투자가 몹시(절실히) 필요합니다."),
    113: ("The building is owned by a private investment firm.", "그 건물은 사모 펀드 회사의 소유입니다."),
    114: ("She is well suited for the position.", "그녀는 그 직책에 적합합니다."),
    115: ("The bookkeeper records all financial transactions.", "경리가 모든 재무 거래를 기록합니다."),
    116: ("The train is bound for New York.", "그 기차는 뉴욕행입니다."),
    117: ("There was an error in the calculation.", "계산에 오류가 있었습니다."),
    118: ("We regret the late cancellation of the event.", "우리는 행사의 늦은 취소를 유감스럽게 생각합니다."),
    119: ("We need to raise capital for expansion.", "우리는 확장을 위해 자본을 조달해야 합니다."),
    120: ("The product falls into the luxury category.", "그 제품은 명품 범주(부문)에 속합니다."),
    121: ("Customers can claim a refund within 30 days.", "고객은 30일 이내에 환불을 요구할 수 있습니다."),
    122: ("The team is collectively responsible for the outcome.", "팀은 결과에 대해 집합적으로(총괄하여) 책임이 있습니다."),
    123: ("We combine innovation with tradition.", "우리는 혁신을 전통과 결합시킵니다."),
    124: ("The software is for commercial use only.", "이 소프트웨어는 상업적 이용만을 위한 것입니다."),
    125: ("We have a common interest in environmental protection.", "우리는 환경 보호에 공동의 이익(관심사)을 가지고 있습니다."),
    126: ("Please allow time to compose a thoughtful response.", "신중한 답변을 작성(구성)할 시간을 주십시오."),
    127: ("We hired a consulting firm to analyze the market.", "우리는 시장을 분석하기 위해 자문회사를 고용했습니다."),
    128: ("The conversion of the file format was successful.", "파일 형식의 전환이 성공적이었습니다."),
    129: ("The code consists of a four-digit number.", "그 코드는 4자리 숫자로 구성되어 있습니다."),
    130: ("The monetary policy has stabilized the economy.", "통화(금전) 정책이 경제를 안정시켰습니다."),
    131: ("The initial outlay for the project was high.", "그 프로젝트의 초기 지출(경비)은 높았습니다."),
    132: ("Please verify the place of origin on the label.", "라벨에서 원산지를 확인하십시오."),
    133: ("Please send us a purchase order number.", "구입 주문(서) 번호를 우리에게 보내주십시오."),
    134: ("The products are rigorously tested before shipping.", "제품들은 배송 전에 엄격히 테스트됩니다."),
    135: ("A shipping and handling fee will be added.", "배송 및 취급 요금이 추가될 것입니다."),
    136: ("Always unplug the device before cleaning.", "청소하기 전에 항상 기계의 플러그를 뽑으십시오.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d20p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day20_part3.json
with open('day20_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 20 Part 3 Created (Intermediate Business - Words 69-136).")
