import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 26 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 26) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 26 Part 1: Banking & Finance)
# Focus: "Hyper-TOEIC" (Accounts, Transactions, Loans)
toeic_examples_d26p1 = {
    1: ("The company has a delinquent account with the supplier.", "그 회사는 공급업체에 연체된 계좌를 가지고 있습니다."),
    2: ("Your payment is now five days overdue.", "귀하의 지불 기한이 현재 5일 지났습니다."),
    3: ("Regrettably, we cannot approve your loan application.", "유감스럽게도, 우리는 귀하의 대출 신청을 승인할 수 없습니다."),
    4: ("Please check your account balance before making a withdrawal.", "인출하기 전에 계좌 잔고를 확인하십시오."),
    5: ("I would like to deposit this check into my savings account.", "이 수표를 제 저축 예금 계좌에 입금하고 싶습니다."),
    6: ("The bank launched an investigation into the error.", "은행은 그 오류에 대한 조사를 착수했습니다."),
    7: ("Rent accounts for 50 percent of his monthly expenses.", "임대료는 그의 월 지출의 50퍼센트를 차지합니다."),
    8: ("Please review your monthly credit card statement.", "월별 신용카드 명세서를 검토해 주십시오."),
    9: ("The total amount due is $500.", "지불해야 할 총액수는 500달러입니다."),
    10: ("You can make a withdrawal at any ATM.", "어느 ATM에서나 인출을 할 수 있습니다."),
    11: ("She previously worked as a bank teller.", "그녀는 이전에 은행 창구 직원으로 일했습니다."),
    12: ("The payment is due on the 25th of the month.", "지불 기일은 매월 25일입니다."),
    13: ("Did you receive the invoice I sent yesterday?", "어제 제가 보낸 송장을 받으셨습니까?"),
    14: ("We expect interest rates to rise next quarter.", "우리는 다음 분기에 금리가 오를 것으로 예상합니다."),
    15: ("You will receive a certificate of deposit upon maturity.", "귀하는 만기 시 예금 증서를 받을 것입니다."),
    16: ("Please sign the document to open a new account.", "새 계좌를 개설하려면 서류에 서명해 주십시오."),
    17: ("Consumer spending has decreased significantly.", "소비자 지출이 상당히 감소했습니다."),
    18: ("The merger was successfully completed.", "합병이 성공적으로 완료되었습니다."),
    19: ("We will bill you for the service at the end of the month.", "우리는 월말에 서비스에 대한 청구서를 보낼 것입니다."),
    20: ("It is a pleasure to do business with you.", "당신과 사업을 하게 되어 기쁩니다(영광입니다)."),
    21: ("The study analyzes recent market trends.", "그 연구는 최근 시장 동향을 분석합니다."),
    22: ("Here is a summary of your investment portfolio.", "여기 당신의 투자 포트폴리오에 대한 요약(개요)이 있습니다."),
    23: ("This is just a temporary measure to cut costs.", "이것은 비용을 절감하기 위한 임시 조치일 뿐입니다."),
    24: ("The central bank decided to lower interest rates.", "중앙은행은 금리를 낮추기로 결정했습니다."),
    25: ("The transaction was processed securely.", "그 거래는 안전하게 처리되었습니다."),
    26: ("We aim to double our profits within two years.", "우리는 2년 이내에 수익을 두 배로 만드는 것을 목표로 합니다."),
    27: ("Please present valid identification.", "유효한 신분증을 제시해 주십시오."),
    28: ("Customers expressed dissatisfaction with the new fees.", "고객들은 새로운 수수료에 대해 불만을 표했습니다."),
    29: ("The two banks have a lot in common.", "두 은행은 공통점이 많습니다."),
    30: ("The account earns 5% annual interest.", "그 계좌는 연 5%의 이자를 받습니다."),
    31: ("The bank rejected his application for a mortgage.", "은행은 그의 주택 담보 대출 신청을 거절했습니다."),
    32: ("We maintain good relations with our investors.", "우리는 투자자들과 좋은 관계를 유지하고 있습니다."),
    33: ("The meeting is tentatively scheduled for Friday.", "회의는 금요일로 잠정적으로(시험적으로) 예정되어 있습니다."),
    34: ("You can pay by check, or alternatively, by wire transfer.", "수표로 지불하거나, 그렇지 않으면(그 대신에) 계좌 이체로 지불할 수 있습니다."),
    35: ("The staff was very attentive to our needs.", "직원들은 우리의 필요에 매우 주의를 기울였습니다(세심했습니다)."),
    36: ("We need to convert our assets into cash.", "우리는 자산을 현금으로 전환해야 합니다."),
    37: ("The company borrowed heavily to finance the project.", "회사는 프로젝트 자금을 조달하기 위해 몹시(많은 돈을) 빌렸습니다."),
    38: ("He applied for a small business loan.", "그는 소상공인 대출을 신청했습니다."),
    39: ("We faced unexpected expenses this month.", "우리는 이번 달에 예기치 않은 지출에 직면했습니다."),
    40: ("It is difficult to cash a check without ID.", "신분증 없이 수표를 현금으로 바꾸기는 어렵습니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d26p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day26_part1.json
with open('day26_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 26 Part 1 Created (Banking Start).")
