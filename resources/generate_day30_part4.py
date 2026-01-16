import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 30 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 30) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 30 Part 4: Advanced Health & Medical - REFINED)
# Context: Research & Development, Strategic Planning, Public Policy
toeic_examples_d30p4 = {
    137: ("The company has implemented a robust data security system.", "회사는 튼튼한(강건한) 데이터 보안 시스템을 구현했습니다."),
    138: ("Patients can request to refill their prescriptions online.", "환자들은 온라인으로 처방전 재조제를 요청할 수 있습니다."),
    139: ("Experienced managers intuitively understand market trends.", "경험 많은 관리자들은 직관적으로 시장 동향을 이해합니다."),
    140: ("Athletes must stay hydrated to avoid severe dehydration during the match.", "선수들은 경기 중 심각한 탈수(증)를 피하기 위해 수분을 유지해야 합니다."),
    141: ("She found her true vocation in medical research.", "그녀는 의학 연구에서 그녀의 진정한 천직(사명감)을 찾았습니다."),
    142: ("Imported animals are held in quarantine to prevent disease spread.", "수입된 동물들은 질병 확산을 막기 위해 격리되어 있습니다."),
    143: ("The outpatient clinic handles minor surgeries and consultations.", "외래 환자 진료소는 가벼운 수술과 상담을 처리합니다."),
    144: ("The economy is facing an acute shortage of skilled labor.", "경제는 숙련된 노동력의 심각한(급성) 부족에 직면해 있습니다."),
    145: ("Advances in technology have extended the life span of electronic devices.", "기술의 발전은 전자 기기의 수명을 연장시켰습니다."),
    146: ("Please wait here while the pharmacist gets your prescription filled.", "약사가 처방전을 조제하는 동안 여기서 기다려 주십시오."),
    147: ("The sudden drop in sales reached epidemic levels across the industry.", "갑작스러운 매출 하락은 업계 전반에 걸쳐 유행병 수준에 도달했습니다."), # Metaphor
    148: ("Consult a doctor before mixing prescription and over-the-counter medicine.", "처방약과 처방전 없이 살 수 있는 약을 섞기 전에 의사와 상담하십시오."),
    149: ("The details of the contract remain blurry and need clarification.", "계약의 세부 사항들은 여전히 흐릿하며 명확화가 필요합니다."), # Metaphor
    150: ("Rising life expectancy is reshaping pension fund strategies.", "증가하는 평균 수명은 연금 기금 전략을 재편하고 있습니다."),
    151: ("He is a renowned practitioner in the field of corporate law.", "그는 기업법 분야에서 저명한 전문의(실무자)입니다."), # Extended meaning to lawyer/professional
    152: ("The client was insistent on approving the final design personally.", "그 고객은 최종 디자인을 직접 승인하겠다고 끈질기게 요구했습니다."),
    153: ("News of the merger caused palpitations on Wall Street.", "합병 소식은 월가에 두근거림(동요)을 일으켰습니다."), # Metaphor
    154: ("The ventilation system allows the building to 'respire' efficiently.", "환기 시스템은 건물이 효율적으로 '호흡'할 수 있게 해줍니다."), # Metaphor
    155: ("The report provides a compressed overview of the fiscal year.", "그 보고서는 회계 연도에 대한 압축된(간결한) 개요를 제공합니다."),
    156: ("Laboratories must sterilize equipment to maintain a sterile environment.", "실험실들은 무균 환경을 유지하기 위해 장비를 살균해야 합니다."),
    157: ("Listing on the stock exchange was a major milestone for the startup.", "증권 거래소 상장은 그 스타트업에게 주요한 획기적인 사건이었습니다."),
    158: ("Strict penalties are intended to deter fraudulent activities.", "엄격한 처벌은 사기 행위를 단념시키기(막기) 위해 의도되었습니다."),
    159: ("The tourism industry is beginning to recuperate from the crisis.", "관광 산업은 위기에서 회복하기 시작하고 있습니다."),
    160: ("The executive offices are located in the west wing of the building.", "임원 사무실들은 건물의 서관(별관)에 위치해 있습니다."),
    161: ("Important decisions should not be made on an empty stomach.", "중요한 결정들은 공복에 내려져서는 안 됩니다."), # Idiomatic advice
    162: ("Employees on medication should notify their supervisors if side effects occur.", "약물 치료 중인 직원들은 부작용이 발생하면 감독관에게 알려야 합니다."),
    163: ("The proposed budget cuts seem plausible given the current revenue.", "제안된 예산 삭감은 현재 수익을 고려할 때 그럴듯해 보입니다."),
    164: ("Prolonged negotiations delayed the signing of the trade agreement.", "장기적인(오래 끄는) 협상은 무역 협정 체결을 지연시켰습니다."),
    165: ("The new product line helps the elderly maintain their independence.", "새로운 제품 라인은 노인들이 독립성을 유지하도록 돕습니다."),
    166: ("The lengthy interrogation made the suspect perspire nervously.", "긴 심문은 용의자가 초조하게 땀을 흘리게 만들었습니다."),
    167: ("Air pollution poses a threat to the respiratory system.", "대기 오염은 호흡 기관에 위협을 가합니다."),
    168: ("Budget deficits are a recurring theme in the annual report.", "예산 적자는 연례 보고서에서 되풀이하여 반복하는 주제입니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d30p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    t_score = int(row['Target_Score']) if 'Target_Score' in row and pd.notna(row['Target_Score']) else 900

    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': t_score,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day30_part4.json
with open('day30_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 30 Part 4 Refined (Corporate Strategy & Policy).")
