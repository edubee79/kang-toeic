import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 12 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 12) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 12 Part 4: Advanced - Production Management & Operations)
# Focus: "Hyper-TOEIC" (Formal Business, Part 6/7 Contracts & Policies)
toeic_examples_d12p4 = {
    137: ("Regular maintenance reduces wear and tear on the machine.", "정기적인 유지 보수는 기계의 마모(손상)를 줄여줍니다."),
    138: ("Unmet demand led to price increases.", "충족되지 않은 수요가 가격 상승을 초래했습니다."),
    139: ("Do not obfuscate the truth with technical jargon.", "기술적인 전문 용어로 진실을 흐리게 하지 마십시오."),
    140: ("The device started to come apart after a week.", "그 장치는 일주일 후에 분해되기(부서지기) 시작했습니다."),
    141: ("The new regulations precede existing ones.", "새로운 규정들이 기존 규정들보다 우선합니다(앞섭니다)."),
    142: ("We must ensure business continuity during the crisis.", "우리는 위기 동안 사업의 연속성을 보장해야 합니다."),
    143: ("The flow chart illustrates the production process.", "그 흐름도(플로 차트)는 생산 공정을 설명합니다."),
    144: ("The machine is built to very precise tolerance.", "그 기계는 매우 정밀한 공차(오차 허용 범위)에 맞춰 제작되었습니다."),
    145: ("The excavation for the new factory has begun.", "새 공장을 위한 굴착이 시작되었습니다."),
    146: ("He is skilled in welding metal.", "그는 금속 용접에 숙련되어 있습니다."),
    147: ("The manager seemed perturbed by the news.", "관리자는 그 소식에 동요하는(불안해하는) 것 같았습니다."),
    148: ("Here are the documents pertinent to the case.", "여기에 그 사건과 관련된(적절한) 문서들이 있습니다."),
    149: ("The land is arable and suitable for farming.", "그 땅은 경작 가능하며 농사에 적합합니다."),
    150: ("The operating costs have increased significantly.", "운영 비용이 상당히 증가했습니다."),
    151: ("We decided to discontinue the product line.", "우리는 그 제품 라인을 중단하기로 결정했습니다."),
    152: ("Such an occurrence is rare in this industry.", "그러한 발생(사건)은 이 업계에서는 드뭅니다."),
    153: ("The floodwaters began to recede.", "홍수가 물러가기(빠지기) 시작했습니다."),
    154: ("Technicians had to disassemble the engine.", "기술자들은 엔진을 분해해야 했습니다."),
    155: ("The term is broadly defined in the contract.", "그 용어는 계약서에서 광범위하게(대략적으로) 정의되어 있습니다."),
    156: ("She involuntarily stepped back.", "그녀는 무의식적으로(본의 아니게) 뒤로 물러났습니다."),
    157: ("We aim to tie up the deal by Friday.", "우리는 금요일까지 거래를 마무리 짓는 것을 목표로 합니다."),
    158: ("Production came to a halt due to the strike.", "파업으로 인해 생산이 중단되었습니다."),
    159: ("The company needs to improve its liquidity.", "그 회사는 유동성(환금성)을 개선해야 합니다."),
    160: ("We met our production quota for the month.", "우리는 이번 달 생산 할당량(목표량)을 달성했습니다."),
    161: ("The decision provoked a strong reaction.", "그 결정은 강한 반응을 유발했습니다."),
    162: ("We need a pragmatic approach to the problem.", "우리는 그 문제에 대한 실용적인 접근 방식이 필요합니다."),
    163: ("The sales were lower than predicted.", "매출이 예상보다(예측된 것보다) 낮았습니다."),
    164: ("The contract is null and void.", "그 계약은 무효입니다."),
    165: ("He is unfailingly polite to customers.", "그는 고객들에게 언제나(변함없이) 공손합니다."),
    166: ("Do not fabricate evidence.", "증거를 조작하지 마십시오."),
    167: ("She is responsible for the procurement of supplies.", "그녀는 물품 조달을 담당하고 있습니다."),
    168: ("Common sense should prevail.", "상식이 우세해야(이겨야) 합니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d12p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day12_part4.json
with open('day12_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 12 Part 4 Created (Advanced Production - Full).")
