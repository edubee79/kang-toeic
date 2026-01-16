import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 26 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 26) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 26 Part 4: Advanced Banking & Finance)
# Focus: "Hyper-TOEIC" (High-Level Finance, Legal Aspects)
toeic_examples_d26p4 = {
    137: ("Regulators scrutinize bank mergers closely.", "규제 당국은 은행 합병을 세밀히 조사합니다."),
    138: ("Can the company sustain this growth rate?", "회사가 이 성장률을 지속할 수 있을까요?"),
    139: ("I need to wire money to my supplier overseas.", "저는 해외에 있는 공급업체에게 돈을 송금해야 합니다."),
    140: ("Wire transfers are the fastest way to send money.", "전신 송금은 돈을 보내는 가장 빠른 방법입니다."),
    141: ("The company drew a check for the amount.", "회사는 그 액수에 대해 수표를 발행했습니다."),
    142: ("Employees receive their salary via direct deposit.", "직원들은 은행 자동 이체를 통해 급여를 받습니다."),
    143: ("Please remit payment to the address below.", "아래 주소로 지불액을 송금해 주십시오."),
    144: ("He used his house as collateral for the loan.", "그는 대출을 위해 집을 담보로 사용했습니다."),
    145: ("The loan is secured by government bonds.", "그 대출은 국채에 의해 보증됩니다."),
    146: ("Customs officials may confiscate illegal goods.", "세관원들은 불법 물품을 압수할 수 있습니다."),
    147: ("Detecting counterfeit currency is difficult.", "위조 지폐(가짜 통화)를 감지하는 것은 어렵습니다."),
    148: ("The assets are managed by a trust company.", "그 자산은 신탁 회사에 의해 관리됩니다."),
    149: ("The refund was credited to your account.", "환불액이 귀하의 계좌에 입금되었습니다."),
    150: ("We have a backup generator on standby.", "우리는 대기 중인 비상 발전기를 가지고 있습니다."),
    151: ("High interest rates act as a deterrent to borrowing.", "높은 이자율은 차입(대출)에 대한 제지(방해물) 역할을 합니다."),
    152: ("The check bounced due to insufficient funds.", "그 수표는 자금 부족으로 부도가 나서 되돌아왔습니다."),
    153: ("We meet once every fortnight.", "우리는 2주마다 한 번씩 만납니다."),
    154: ("Our company is a leading contender in the market.", "우리 회사는 시장의 주요 경쟁자(도전자)입니다."),
    155: ("Your account is currently overdrawn.", "귀하의 계좌는 현재 잔액이 부족합니다(초과 인출되었습니다)."),
    156: ("Fill out a deposit slip to add funds.", "자금을 추가하려면 예금 전표를 작성하십시오."),
    157: ("We had to take out a loan to cover the costs.", "우리는 비용을 충당하기 위해 융자를 받아야 했습니다."),
    158: ("He is a credible witness in the case.", "그는 그 사건의 신용할 수 있는(확실한) 증인입니다."),
    159: ("The company belatedly realized the error.", "회사는 뒤늦게 그 오류를 깨달았습니다."),
    160: ("He made spurious claims about the product.", "그는 제품에 대해 허위의 주장을 했습니다."),
    161: ("I need to make a withdrawal from the ATM.", "저는 ATM에서 돈을 인출해야 합니다."),
    162: ("The coupon is valid for redemption until June.", "그 쿠폰은 6월까지 상환(구원/사용)이 유효합니다."),
    163: ("The stock market crash caused panic.", "주식 시장 붕괴(폭락)는 공황을 야기했습니다."),
    164: ("You should take out insurance on your valuable items.", "당신의 귀중품에 보험을 들어야 합니다."),
    165: ("The government is trying to curb inflation.", "정부는 인플레이션을 억제하려고 노력하고 있습니다."),
    166: ("The robbery was held up by a security guard.", "강도 사건은 경비원에 의해 저지되었습니다(잡혔습니다)."),
    167: ("A cluster of banks is located in the financial district.", "은행들의 무리가 금융 지구에 위치해 있습니다."),
    168: ("Interest will accrue on the unpaid balance.", "미지급 잔액에 대해 이자가 축적될 것입니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d26p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day26_part4.json
with open('day26_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 26 Part 4 Created (Advanced Banking End).")
