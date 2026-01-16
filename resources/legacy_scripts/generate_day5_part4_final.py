import pandas as pd
import json
import re

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 5 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 5) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 5 Part 4)
toeic_examples_d5p4 = {
    137: ("He is an astute observer of the current market trends.", "그는 현재 시장 동향의 기민한 관찰자입니다."),
    138: ("You may bring along a guest to the company dinner.", "회사 저녁 식사에 손님을 데리고 가셔도 됩니다."),
    139: ("Please place your luggage in the overhead compartment.", "짐을 머리 위 짐칸(구획)에 넣어 주십시오."),
    140: ("Traditional methods are giving way to digital solutions.", "전통적인 방식들이 디지털 솔루션에 자리를 내어주고(양보하고) 있습니다."),
    141: ("Stress from overwork can lead to health problems.", "과로로 인한 스트레스는 건강 문제로 이어질 수 있습니다."),
    142: ("He put down his pen and looked up at the audience.", "그는 펜을 내려놓고 청중을 올려다보았습니다."),
    143: ("We hope to reach the solution by the end of the week.", "우리는 주말까지 해결책에 도달하기를(해결하기를) 희망합니다."),
    144: ("Take a break to recharge your energy.", "에너지를 재충전하기 위해 휴식을 취하십시오."),
    145: ("Artists often wear a smock to protect their clothes.", "예술가들은 옷을 보호하기 위해 종종 작업복(기다란 셔츠)을 입습니다."),
    146: ("The building was renovated to improve accessibility for the disabled.", "그 건물은 장애인들의 접근 가능성을 개선하기 위해 개조되었습니다."),
    147: ("The event coordinator is responsible for logistics.", "이벤트 조정자가 물류를 책임지고 있습니다."),
    148: ("It is customary to exchange business cards at the beginning of a meeting.", "회의 시작 시 명함을 교환하는 것은 통상적인 일입니다."),
    149: ("The protest disrupted traffic in the city center.", "시위가 도심의 교통을 방해했습니다(중단시켰습니다)."),
    150: ("We aim to elevate our brand image through this campaign.", "우리는 이 캠페인을 통해 브랜드 이미지를 높이는(승격시키는) 것을 목표로 합니다."),
    151: ("The interview was just a formality; he had already been chosen.", "면접은 단지 형식상의 절차였습니다; 그는 이미 선택되었습니다."),
    152: ("We must exercise restraint in our spending.", "우리는 지출에 있어 억제(자제)를 발휘해야 합니다."),
    153: ("Please sign out at the front desk before leaving.", "떠나기 전에 프런트 데스크에서 서명하여 외출을 기록해 주십시오."),
    154: ("The success of the product is undeniable.", "그 제품의 성공은 부인할 수 없습니다."),
    155: ("This action is a clear violation of company policy.", "이 행동은 회사 정책의 명백한 위반입니다."),
    156: ("Scratching the wound will only aggravate it.", "상처를 긁는 것은 그것을 악화시킬 뿐입니다."),
    157: ("We have a contingency plan in case of emergency.", "우리는 비상사태를 대비한 비상 대책(불의의 사태 계획)을 가지고 있습니다."),
    158: ("I draw the line at working on weekends.", "저는 주말에 일하는 것에는 선을 긋습니다(그 이상은 하지 않습니다)."),
    159: ("The lawyers will draw up a new contract.", "변호사들이 새로운 계약서를 작성할 것입니다."),
    160: ("Residents were ordered to evacuate the building immediately.", "주민들은 즉시 건물에서 대피하라는 명령을 받았습니다."),
    161: ("A ceremony was held in commemoration of the founder.", "설립자를 기념하여 식전이 열렸습니다."),
    162: ("New employees are placed on probation for three months.", "신입 사원들은 3개월 동안 수습(견습) 기간에 놓입니다."),
    163: ("Do not overestimate your ability to finish the task alone.", "혼자서 업무를 끝낼 수 있는 당신의 능력을 과대평가하지 마십시오."),
    164: ("Access to the executive lounge is a privilege for VIP members.", "임원 라운지 이용은 VIP 회원들을 위한 특권입니다."),
    165: ("The company plans to restructure its organization to cut costs.", "그 회사는 비용 절감을 위해 조직을 구조조정할 계획입니다."),
    166: ("We need to segregate recyclable waste from trash.", "우리는 재활용 쓰레기를 일반 쓰레기로부터 분리해야 합니다."),
    167: ("Smoke can trigger the fire alarm.", "연기는 화재 경보기를 작동시킬(유발할) 수 있습니다."),
    168: ("Investors are wary of the volatile market conditions.", "투자자들은 변동성이 큰 시장 상황을 조심하고 있습니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d5p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    # Remove Note from word if exists (though csv might be clean, standard check)
    word_cleaned = str(row['Word']).split('(=')[0].strip()
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': word_cleaned,
        'meaning': cleaned_meaning,
        'targetScore': 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day5_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 5 Part 4 Created.")
