import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 26 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 26) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 26 Part 2: Basic Banking & Common Phrases)
# Focus: "Hyper-TOEIC" (Personal Finance, Routine Banking)
toeic_examples_d26p2 = {
    41: ("He took out a mortgage to buy the house.", "그는 집을 사기 위해 담보 대출을 받았습니다."),
    42: ("Accounts payable should be settled within 30 days.", "외상 매입금(지불해야 하는 계정)은 30일 이내에 해결되어야 합니다."),
    43: ("Please do not use company computers for personal use.", "회사 컴퓨터를 개인적인 용도로 사용하지 마십시오."),
    44: ("It is common practice to check credit scores.", "신용 점수를 확인하는 것은 일반적인 관행입니다."),
    45: ("The results will be available at the earliest on Monday.", "결과는 아무리 빨라도 월요일에 나올 것입니다."),
    46: ("We cannot process two requests at the same time.", "우리는 동시에 두 개의 요청을 처리할 수 없습니다."),
    47: ("At this point, we cannot offer a refund.", "이 시점에서는 환불을 제공할 수 없습니다."),
    48: ("He passed the first round of the audition.", "그는 오디션의 1차 심사를 통과했습니다."),
    49: ("Sign up for automatic payment to avoid late fees.", "연체료를 피하기 위해 자동 납부를 신청하십시오."),
    50: ("She met with a banker to discuss investment options.", "그녀는 투자 옵션을 논의하기 위해 은행원을 만났습니다."),
    51: ("Online banking has made managing money easier.", "온라인 뱅킹은 돈 관리를 더 쉽게 만들었습니다."),
    52: ("I am used to working with international clients.", "저는 해외 고객들과 일하는 것에 익숙합니다."),
    53: ("We expect to finish the project by the end of the year.", "우리는 연말까지 프로젝트를 끝낼 것으로 예상합니다."),
    54: ("You should have received the package by this time.", "지금쯤이면 소포를 받으셨을 것입니다."),
    55: ("Ask the clerk for assistance.", "점원(사원)에게 도움을 요청하십시오."),
    56: ("The café has a cozy atmosphere.", "그 카페는 아늑한 분위기를 가지고 있습니다."),
    57: ("Please enter your credit card number.", "신용 카드 번호를 입력해 주십시오."),
    58: ("The company decided to float shares on the market.", "그 회사는 시장에 주식을 상장하기로(띄우기로) 결정했습니다."),
    59: ("Can I talk to you for a short time?", "잠깐 동안 이야기할 수 있을까요?"),
    60: ("He made a gesture of agreement.", "그는 동의의 몸짓을 했습니다."),
    61: ("The bank is located next to the post office.", "은행은 우체국 옆에 위치해 있습니다."),
    62: ("Do not share your password with anyone.", "비밀번호를 누구와도 공유하지 마십시오."),
    63: ("He inserted a coin into the vending machine.", "그는 자판기에 동전을 넣었습니다."),
    64: ("I watched the report on the evening news.", "저는 저녁 뉴스에서 그 보도를 봤습니다."),
    65: ("The company donated generously to charity.", "그 회사는 자선 단체에 관대하게 기부했습니다."),
    66: ("In addition, we offer a free consultation.", "게다가, 우리는 무료 상담을 제공합니다."),
    67: ("In addition to his salary, he receives a bonus.", "그는 월급에 더하여 보너스를 받습니다."),
    68: ("In short, the proposal was rejected.", "요컨대, 그 제안은 거절되었습니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d26p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day26_part2.json
with open('day26_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 26 Part 2 Created (Basic Banking).")
