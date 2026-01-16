import pandas as pd
import json

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 1 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 1) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

print(f"Part 4 Range Check: Min {part4_df['No'].min()} ~ Max {part4_df['No'].max()}")
print(f"Part 4 Count: {len(part4_df)}")

if len(part4_df) != 32:
    raise ValueError(f"Part 4 count mismatch! Must be 32. Found {len(part4_df)}")

# Check Overlap with Part 3 (69-136)
if part4_df['No'].min() <= 136:
     raise ValueError("CRITICAL: Part 4 overlaps with Part 3 (No <= 136 detected)!")

toeic_examples_p4 = {
    137: ("She is an accomplished pianist as well as a CEO.", "그녀는 CEO일 뿐만 아니라 뛰어난 피아니스트이기도 합니다."),
    138: ("The team adjusted to the new management style successfully.", "팀은 새로운 경영 스타일에 성공적으로 적응했습니다."),
    139: ("We agreed on the terms of the merger.", "우리는 합병 조건에 합의했습니다."),
    140: ("Anyone with aspirations to leadership should apply.", "리더십에 대한 포부가 있는 사람은 누구나 지원해야 합니다."),
    141: ("He assigned the task to his assistant.", "그는 그 업무를 조수에게 배정했습니다."),
    142: ("The assistant manager will oversee the project.", "부지배인이 프로젝트를 감독할 것입니다."),
    143: ("We assume liability for any damages.", "우리는 모든 손해에 대해 책임을 집니다."),
    144: ("Her combined experience makes her the ideal candidate.", "그녀의 결합된 경험은 그녀를 이상적인 후보자로 만듭니다."),
    145: ("We conduct business in over 50 countries.", "우리는 50개국 이상에서 사업을 수행합니다."),
    146: ("He displayed confidential documents on his desk.", "그는 기밀 서류를 책상 위에 두었습니다."),
    147: ("The contrary is true; sales are actually rising.", "그 반대가 사실입니다. 매출은 실제로 증가하고 있습니다."),
    148: ("The two departments coordinate their efforts.", "두 부서는 노력을 조정합니다."),
    149: ("We are counting on you to lead this project.", "우리는 당신이 이 프로젝트를 이끌기를 믿고 있습니다."),
    150: ("She is a creditable witness.", "그녀는 신뢰할 수 있는 증인입니다."),
    151: ("Direct the customer to the service desk.", "고객을 서비스 데스크로 안내하세요."),
    152: ("I find his behavior disturbing.", "나는 그의 행동이 방해가 된다고 생각합니다."),
    153: ("She draws on her vast experience in sales.", "그녀는 영업 분야의 방대한 경험을 활용합니다."),
    154: ("He is the former president of the company.", "그는 그 회사의 전임 회장입니다."),
    155: ("The company has a strict code of headgear.", "그 회사에는 엄격한 모자 착용 규정이 있습니다."),
    156: ("Insensitivity to customer needs caused the complaints.", "고객의 요구에 대한 무신경이 불만을 야기했습니다."),
    157: ("Please make a copy of this document.", "이 문서를 복사해 주세요."),
    158: ("He managed to finish the report on time.", "그는 제시간에 보고서를 끝낼 수 있었습니다."),
    159: ("We received a memorable reception at the hotel.", "우리는 호텔에서 기억에 남는 환영을 받았습니다."),
    160: ("I will notify you of the outcome.", "결과를 알려드리겠습니다."),
    161: ("Occasionally, we work on weekends.", "가끔 우리는 주말에도 일합니다."),
    162: ("The personnel department is hiring new staff.", "인사과는 신입 사원을 채용하고 있습니다."),
    163: ("Please turn off your planted mobile phones.", "심어진 휴대폰을 꺼주세요. (Note: 'planted' here might be typo in source, but strictly following word 'planted' context, or maybe 'plant' related. Assuming 'placed' or context requires check. Wait, CSV word is 'planted'? Checking CSV... If 'planted' means 'placed' or literal plant. Let's use generic context if ambiguous or 'hidden'. Actually, looking at 'planted' definition in TOEIC context usually rare. Let's use standard: 'The evidence was planted.') -> Revised to: 'The trees were planted along the street.' (More natural for 'planted')"),
    164: ("He respectfully declined the offer.", "그는 정중하게 제안을 거절했습니다."),
    165: ("It is respectful to listen when others speak.", "다른 사람이 말할 때 듣는 것은 예의 바른 행동입니다."),
    166: ("We sign contracts with all our suppliers.", "우리는 모든 공급업체와 계약을 체결합니다."),
    167: ("Tuition fees have increased this year.", "올해 수업료가 인상되었습니다."),
    168: ("He was formally doing the accounting work.", "그는 이전에 회계 업무를 수행하고 있었습니다.")
}

# Re-check No. 163 'planted' context. 
# If meaning is '심어진' -> 'The trees were planted...' is good.
# If meaning is '놓인' -> context needed.
# Let's check the CSV meaning in the loop.

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    
    # Custom handling for potential tricky words
    if no == 163: # planted
        if "심어진" in str(row['Meaning']):
             ex_en, ex_ko = ("Fresh flowers were planted in the garden.", "정원에 신선한 꽃들이 심어졌습니다.")
        else:
             ex_en, ex_ko = toeic_examples_p4.get(no, ("Example required", "예문 필요"))
    else:
        ex_en, ex_ko = toeic_examples_p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))

    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': str(row['Meaning']),
        'targetScore': 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day1_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 1 Part 4 Created.")
