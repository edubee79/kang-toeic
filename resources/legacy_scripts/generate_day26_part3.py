import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 26 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 26) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 26 Part 3: Intermediate Banking & Finance)
# Focus: "Hyper-TOEIC" (Credit, Currency, Debt Management)
toeic_examples_d26p3 = {
    69: ("We are thankful for your continued support.", "우리는 당신의 지속적인 지지에 대해 고맙게 생각합니다."),
    70: ("We should avoid unnecessary expenses.", "우리는 불필요한 지출을 피해야 합니다."),
    71: ("This guide contains useful information for investors.", "이 안내서는 투자자들을 위한 유용한 정보를 담고 있습니다."),
    72: ("I am awfully sorry for the mistake.", "실수에 대해 대단히(정말) 죄송합니다."),
    73: ("He took out a bank loan to start a business.", "그는 사업을 시작하기 위해 은행 대출금을 받았습니다."),
    74: ("The bank teller processed the deposit.", "은행 출납원이 입금을 처리했습니다."),
    75: ("I was amazed at the rapid growth of the company.", "저는 그 회사의 빠른 성장에 놀랐습니다."),
    76: ("He was caught in a financial scandal.", "그는 금융 스캔들에 붙잡혔습니다(휘말렸습니다)."),
    77: ("The branches are spread out across the city.", "지점들이 도시에 펼쳐져 있습니다(퍼져 있습니다)."),
    78: ("The board meets every other day.", "이사회는 격일로 모입니다."),
    79: ("The proposed plan was flawed from the beginning.", "제안된 계획은 처음부터 결함이 있었습니다."),
    80: ("The bank exchanges foreign currency.", "그 은행은 외화를 교환해 줍니다."),
    81: ("He gazed into the future of the market.", "그는 시장의 미래를 뚫어지게 보았습니다(응시했습니다)."),
    82: ("It is difficult to get a loan with bad credit.", "신용이 나쁘면 대출을 받기 어렵습니다."),
    83: ("The bank is giving out free calendars.", "은행에서 무료 달력을 나눠주고 있습니다."),
    84: ("She glanced at the financial report.", "그녀는 재무 보고서를 힐끗 봤습니다."),
    85: ("Something went wrong with the transaction.", "거래에 뭔가 잘못되었습니다."),
    86: ("They often hang out at the cafe after work.", "그들은 종종 퇴근 후 카페에서 시간을 보냅니다."),
    87: ("I always have my checkbook around.", "저는 항상 수표책을 가지고 다닙니다."),
    88: ("Please settle the account if possible.", "가능하다면 계좌를 정리(결제)해 주십시오."),
    89: ("I will check again if you insist.", "굳이 원하신다면 다시 확인해 보겠습니다."),
    90: ("I'll bet that stocks will rise tomorrow.", "내일 주식이 오를 것이라고 장담합니다."),
    91: ("The business is owned locally.", "그 사업체는 지역에서(장소상으로) 소유되고 있습니다."),
    92: ("Hard work will eventually pay off.", "열심히 일하는 것은 결국 이익이 될(보상받을) 것입니다."),
    93: ("Perhaps we should invest in real estate.", "아마 우리도 부동산에 투자해야 할 것입니다."),
    94: ("He put in a lot of money into the fund.", "그는 펀드에 많은 돈을 투자했습니다(넣었습니다)."),
    95: ("Retirement savings are tax-deductible.", "은퇴 저축은 세금이 공제됩니다."),
    96: ("The interest rate on short-term deposits is low.", "단기 예금의 이자율은 낮습니다."),
    97: ("The funds will be available the following day.", "자금은 그 다음 날 이용 가능할 것입니다."),
    98: ("Please delay the payment until the first next month.", "지불을 다음 달 1일까지 미뤄 주십시오."),
    99: ("The bank is across from the supermarket.", "은행은 슈퍼마켓 바로 맞은편에 있습니다."),
    100: ("investors react with alarming speed.", "투자자들은 걱정스러운(놀라운) 속도로 반응합니다."),
    101: ("We do not accept checks anymore.", "우리는 이제는(더 이상은) 수표를 받지 않습니다."),
    102: ("Pay off one debt at a time.", "한 번에 하나의 빚을 갚으십시오."),
    103: ("It was indeed a profitable year.", "정말(실로) 수익이 나는 해였습니다."),
    104: ("Unless stated otherwise, the fee applies.", "달리 명시되지 않으면, 수수료가 적용됩니다."),
    105: ("Profits fell owing to the recession.", "불경기(침체)로 인하여 수익이 떨어졌습니다."),
    106: ("We received a partial refund.", "우리는 부분적인 환불을 받았습니다."),
    107: ("The insurance company will pay out the claim.", "보험 회사는 청구액을 지불할 것입니다."),
    108: ("Management is receptive to new ideas.", "경영진은 새로운 아이디어를 수용합니다."),
    109: ("We need to simplify the application process.", "우리는 신청 절차를 간소화해야 합니다."),
    110: ("Someday, I hope to own my own business.", "언젠가, 제 사업을 소유하기를 희망합니다."),
    111: ("The bank turned down his loan request.", "은행(은) 그의 대출 요청을 거절했습니다."),
    112: ("Our profits increased twofold.", "우리의 수익이 두 배로 증가했습니다."),
    113: ("Accounts payable lists money owed to suppliers.", "지급 계정은 공급업체에 빚진 돈을 나열합니다."),
    114: ("I would like to open a bank account.", "은행 계좌를 개설하고 싶습니다."),
    115: ("He is highly regarded in the financial sector.", "그는 금융 분야에서 높이 평가됩니다."),
    116: ("This offer will be of particular interest to retirees.", "이 제안은 은퇴자들에게 특별히 관심을 가질 만할 것입니다."),
    117: ("Update your billing information online.", "당신의 청구서 정보를 온라인으로 업데이트하십시오."),
    118: ("She has an excellent credit score.", "그녀는 훌륭한 신용 점수를 가지고 있습니다."),
    119: ("The company is negotiating with its creditors.", "그 회사는 채권자들과 협상하고 있습니다."),
    120: ("The local currency has lost value.", "현지 통화 가치가 떨어졌습니다."),
    121: ("You can pay with a debit card.", "직불 카드로 지불할 수 있습니다."),
    122: ("He is struggling to pay off his debt.", "그는 빚을 갚기 위해 고군분투하고 있습니다."),
    123: ("What is the expiration date of your card?", "카드 만기일(유효기간)이 언제입니까?"),
    124: ("The bank checked his financial history.", "은행은 그의 신용 거래 실적(재정 기록)을 확인했습니다."),
    125: ("We compromised for the sake of the agreement.", "우리는 합의를 위하여 타협했습니다."),
    126: ("A signature can be easily forged.", "서명은 쉽게 위조될 수 있습니다."),
    127: ("He was arrested for forgery.", "그는 위조죄로 체포되었습니다."),
    128: ("Information about the forthcoming merger is confidential.", "다가오는 합병에 대한 정보는 기밀입니다."),
    129: ("Our headquarters is located in midtown.", "우리 본사는 도심과 외곽 중간 지대(중심가)에 위치해 있습니다."),
    130: ("I owe the bank $5,000.", "저는 은행에 5,000달러를 빚지고 있습니다."),
    131: ("The bill was paid with a credit card.", "청구서는 신용 카드로 지불되었습니다."),
    132: ("Please enter your personal identification number (PIN).", "개인 식별 번호(PIN)를 입력해 주십시오."),
    133: ("Unexpected costs can pop up at any time.", "예기치 않은 비용이 언제든 불쑥 나타날 수 있습니다."),
    134: ("Banks are closed on public holidays.", "은행은 공휴일에 문을 닫습니다."),
    135: ("Lenders are reluctant to extend credit.", "대출 기관들은 신용 확대를 주저합니다(마음이 내키지 않아 합니다)."),
    136: ("Please submit a requisition for office supplies.", "사무용품에 대한 요구서(청구서)를 제출해 주십시오.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d26p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day26_part3.json
with open('day26_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 26 Part 3 Created (Intermediate Banking).")
