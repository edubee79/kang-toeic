import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 21 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 21) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 21 Part 1: Company News & Management)
# Focus: "Hyper-TOEIC" (Business Strategy, Mergers, Corporate Actions)
toeic_examples_d21p1 = {
    1: ("The company announced its quarterly earnings yesterday.", "회사는 어제 분기별 실적을 발표했습니다."),
    2: ("We are interested in forming a partnership with you.", "우리는 귀하와 파트너십을 맺는 데 관심이 있습니다(관련이 있습니다)."),
    3: ("She is an active member of the committee.", "그녀는 위원회의 적극적인 회원입니다."),
    4: ("He decided to accept the job offer.", "그는 일자리 제안을 수락하기로 결정했습니다."),
    5: ("Experts foresee a bright future for the industry.", "전문가들은 그 산업의 밝은 미래를 예견합니다."),
    6: ("The expansion of the factory created many jobs.", "공장의 확장은 많은 일자리를 창출했습니다."),
    7: ("The company plans to relocate to a larger office.", "그 회사는 더 큰 사무실로 이전할 계획입니다."),
    8: ("We must stay ahead of our competitors.", "우리는 경쟁업체들보다 앞서 있어야 합니다."),
    9: ("Our employees are our most valuable asset.", "우리 직원들은 우리의 가장 소중한 자산입니다."),
    10: ("Everyone should contribute to the discussion.", "모두가 토론에 기여해야 합니다."),
    11: ("The team is dedicated to customer satisfaction.", "그 팀은 고객 만족에 전념하고 있습니다(헌신적입니다)."),
    12: ("I seem to have misplaced my keys.", "제가 열쇠를 잃어버린(위치를 잘못 잡은) 것 같습니다."),
    13: ("The project required a considerable amount of time.", "그 프로젝트는 상당한 양의 시간을 필요로 했습니다."),
    14: ("The meeting is expected to last for two hours.", "회의는 2시간 동안 지속될 것으로 예상됩니다."),
    15: ("New markets are emerging in Asia.", "아시아에서 새로운 시장이 부상하고 있습니다."),
    16: ("The business continues to grow rapidly.", "사업은 계속해서 빠르게 성장하고 있습니다."),
    17: ("A panel of judges will select the winner.", "심사위원단이 우승자를 선발할 것입니다."),
    18: ("The two banks agreed to merge next month.", "두 은행은 다음 달에 합병하기로 합의했습니다."),
    19: ("High prices imply that demand is strong.", "높은 가격은 수요가 강하다는 것을 암시합니다(의미합니다)."),
    20: ("Trust is vital for a healthy relationship.", "신뢰는 건강한 관계에 필수적입니다."),
    21: ("If symptoms persist, consult a doctor.", "증상이 (계속) 지속되면 의사와 상담하십시오."),
    22: ("The audit was conducted by an independent firm.", "감사는 독립적인 회사에 의해 수행되었습니다."),
    23: ("They joined forces to launch the new product.", "그들은 새 제품을 출시하기 위해 세력(힘)을 합쳤습니다."),
    24: ("The company was established in 1990.", "그 회사는 1990년에 설립되었습니다."),
    25: ("We initiated a new project to reduce waste.", "우리는 낭비를 줄이기 위해 새 프로젝트를 착수했습니다(시작했습니다)."),
    26: ("This software will enhance your productivity.", "이 소프트웨어는 당신의 생산성을 향상시킬 것입니다."),
    27: ("He is a renowned expert in his field.", "그는 자신의 분야에서 저명한 전문가입니다."),
    28: ("Please keep me informed of any changes.", "변경 사항이 있으면 저에게 (정보를) 알려주십시오."),
    29: ("The secretary took the minutes of the meeting.", "비서가 회의의 회의록을 작성했습니다."),
    30: ("The bank agreed to waive the processing fee.", "은행은 처리 수수료를 면제해 주기로(포기하기로) 동의했습니다."),
    31: ("We hope to reach an agreement soon.", "우리는 곧 합의에 도달하기를 희망합니다."),
    32: ("She has the authority to sign contracts.", "그녀는 계약서에 서명할 권한이 있습니다."),
    33: ("The company acquired a smaller rival.", "그 회사는 더 작은 경쟁사를 매입했습니다(인수했습니다)."),
    34: ("Sales this year surpassed our expectations.", "올해 매출은 우리의 예상을 능가했습니다."),
    35: ("She runs her own consulting business.", "그녀는 자신의 컨설팅 사업을 운영합니다."),
    36: ("It is improbable that the price will drop soon.", "가격이 곧 떨어질 것이라는 것은 사실이라고 생각할 수 없습니다(일어날 것 같지 않습니다)."),
    37: ("We have a competitive edge over our rivals.", "우리는 경쟁사들보다 경쟁 우위(유리함)를 가지고 있습니다."),
    38: ("The two events happened simultaneously.", "두 사건은 동시에 일어났습니다."),
    39: ("The report revealed serious errors in the accounts.", "그 보고서는 계좌에 심각한 오류가 있음을 밝혔습니다."),
    40: ("We are looking for ways to boost productivity.", "우리는 생산성을 높일 방법을 찾고 있습니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d21p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day21_part1.json
with open('day21_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 21 Part 1 Created (Company News).")
