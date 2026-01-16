import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 20 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 20) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 20 Part 1: Financial Records & Budgets)
# Focus: "Hyper-TOEIC" (Formal Business, Accounting, Auditing)
toeic_examples_d20p1 = {
    1: ("The government appointed an independent firm to conduct the audit.", "정부는 회계 감사를 수행하기 위해 독립적인 회사를 임명했습니다."),
    2: ("Correct accounting practices are essential for business success.", "올바른 회계 관행은 사업 성공에 필수적입니다."),
    3: ("We have a limited budget for marketing this quarter.", "우리는 이번 분기 마케팅 예산이 한정되어 있습니다."),
    4: ("The company is facing severe financial difficulties.", "그 회사는 심각한 재정적 어려움에 직면해 있습니다."),
    5: ("We must curtail spending to meet the new budget guidelines.", "우리는 새 예산 지침을 맞추기 위해 지출을 줄여야 합니다."),
    6: ("The trade deficit has narrowed significantly this year.", "올해 무역 적자가 상당히 줄어들었습니다."),
    7: ("The regulations have recently been updated.", "규정이 최근에 갱신되었습니다."),
    8: ("Profits have increased substantially over the last year.", "지난해 이익이 상당히 증가했습니다."),
    9: ("The steering committee will meet tomorrow to discuss the issue.", "운영 위원회는 그 문제를 논의하기 위해 내일 모일 것입니다."),
    10: ("Customers frequently ask about our return policy.", "고객들은 자주 우리의 반품 정책에 대해 묻습니다."),
    11: ("The new software has the capability to process data faster.", "새 소프트웨어는 데이터를 더 빠르게 처리할 수 있는 능력이 있습니다."),
    12: ("All proceeds from the auction will go to charity.", "경매의 모든 수익금은 자선 단체에 기부될 것입니다."),
    13: ("The company will reimburse you for travel expenses.", "회사는 당신에게 출장 경비를 변제해(상환해) 줄 것입니다."),
    14: ("The market has changed considerably since then.", "그 이후로 시장은 상당히 변했습니다."),
    15: ("The funds are not adequate to cover the costs.", "자금이 비용을 충당하기에 충분하지(적절하지) 않습니다."),
    16: ("The total cost of the project is estimated at $1 million.", "그 프로젝트의 총 비용은 100만 달러로 추정됩니다."),
    17: ("We need to allocate more resources to the R&D department.", "우리는 연구 개발 부서에 더 많은 자원을 할당해야 합니다."),
    18: ("A safety inspector will visit the factory next week.", "안전 조사관이 다음 주에 공장을 방문할 것입니다."),
    19: ("Email is our preferred method of communication.", "이메일은 우리가 선호하는 의사소통 방식입니다."),
    20: ("Sales figures for the first quarter were disappointing.", "1분기 매출 수치는 실망스러웠습니다."),
    21: ("Please do not interrupt the speaker during the presentation.", "발표 중에 연설을 중단시키지(방해하지) 마십시오."),
    22: ("Feel free to browse our collection of books.", "자유롭게 우리의 책 컬렉션을 훑어보십시오."),
    23: ("The prompt response from customer service was impressive.", "고객 서비스의 신속한(즉각적인) 응답은 인상적이었습니다."),
    24: ("The tax will be deducted automatically from your salary.", "세금은 당신의 급여에서 자동으로 공제될 것입니다."),
    25: ("Accurate measurement is crucial in engineering.", "정확한 측정은 공학에서 매우 중요합니다."),
    26: ("We plan to shorten the meeting to one hour.", "우리는 회의를 1시간으로 단축할 계획입니다."),
    27: ("The contract was amended to include the new clauses.", "계약서는 새로운 조항을 포함하도록 수정되었습니다."),
    28: ("We need to calculate the total cost before proceeding.", "우리는 진행하기 전에 총 비용을 계산해야 합니다."),
    29: ("Non-profit organizations are exempt from taxes.", "비영리 단체는 세금을 면제받습니다."),
    30: ("The current system is deficient in many respects.", "현재 시스템은 여러 면에서 부족합니다(결함이 있습니다)."),
    31: ("You cannot compare apples with oranges.", "사과와 오렌지를 비교할 수는 없습니다."),
    32: ("We are fortunate to have such a dedicated team.", "우리는 그렇게 헌신적인 팀을 갖게 되어 운이 좋습니다."),
    33: ("We successfully reduced unnecessary expenditure.", "우리는 불필요한 지출을 성공적으로 줄였습니다."),
    34: ("The report accurately reflects the current situation.", "그 보고서는 현재 상황을 정확하게 반영합니다."),
    35: ("The contract is worth millions of dollars.", "그 계약은 수백만 달러의 가치가 있습니다."),
    36: ("Any excess materials should be returned to the warehouse.", "초과 자재는 창고로 반납되어야 합니다."),
    37: ("The fiscal year ends on December 31st.", "회계 연도는 12월 31일에 끝납니다."),
    38: ("You will be reimbursed for incidental expenses.", "당신은 부수적인 경비에 대해 변제받을 것입니다."),
    39: ("High inflation affects consumer spending habits.", "높은 인플레이션(물가 상승)은 소비자의 지출 습관에 영향을 미칩니다."),
    40: ("The company is liable for any damages caused.", "회사는 발생한 모든 손해에 대해 책임이 있습니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d20p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day20_part1.json
with open('day20_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 20 Part 1 Created (Financial Records).")
