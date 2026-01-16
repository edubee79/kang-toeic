import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 30 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 30) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 30 Part 2: Basic Health & Facilities - REFINED)
# Context: Office Environment, Facility Issues, Employee Notices
toeic_examples_d30p2 = {
    41: ("The outdated software is susceptible to security breaches and viruses.", "구식 소프트웨어는 보안 침해와 바이러스에 영향 받기 쉽습니다(취약합니다)."),
    42: ("The meeting room was uncomfortably warm due to the broken air conditioner.", "회의실은 고장 난 에어컨 때문에 불쾌할 정도로(불편하게) 더웠습니다."),
    43: ("Please inform the organizer if you are allergic to any specific foods.", "특정 음식에 알레르기가 있다면 주최자에게 알려주십시오."),
    44: ("The study was conducted as a double-blind trial to ensure objectivity.", "그 연구는 객관성을 보장하기 위해 이중맹검 실험으로 진행되었습니다."), # 'blind test' context
    45: ("The renovation revealed a cavity behind the wall that needed filling.", "개보수 공사는 벽 뒤에 메워야 할 빈 공간(구멍)을 드러냈습니다."), # expanding 'cavity' beyond teeth to structural
    46: ("Employees should dress warmly as the office can get cold in the evenings.", "사무실은 저녁에 추울 수 있으므로 직원들은 따뜻하게 입어야 합니다."),
    47: ("The product underwent a cosmetic redesign to appeal to younger consumers.", "그 제품은 젊은 소비자들에게 어필하기 위해 외관상의(미용의) 재설계를 거쳤습니다."),
    48: ("Employees who feel sick are advised to work from home to protect others.", "몸이 좋지 않은(아픈) 직원들은 타인을 보호하기 위해 재택근무를 하도록 권고됩니다."),
    49: ("The candidate's fitness for the role was assessed during the interview.", "그 역할에 대한 지원자의 적합성(건강 상태/적임성)은 인터뷰 중에 평가되었습니다."),
    50: ("The company provides subsidized memberships to a local gym.", "회사는 지역 체육관에 대한 보조금 지원 멤버십을 제공합니다."),
    51: ("Capital injection is needed to revitalize the struggling project.", "고전하는 프로젝트를 활성화하기 위해 자본 주입이 필요합니다."), # Business metaphor for injection
    52: ("The new medical facility is equipped with state-of-the-art technology.", "새로운 의료 시설은 최첨단 기술을 갖추고 있습니다."),
    53: ("Construction workers must wear a raincoat during inclement weather.", "건설 근로자들은 궂은 날씨 동안 비옷을 착용해야 합니다."),
    54: ("The restructuring plan requires major surgery to save the company.", "구조 조정 계획은 회사를 구하기 위해 대수술(대대적인 개혁)을 필요로 합니다."), # Metaphor
    55: ("He missed the presentation due to a severe toothache requiring emergency care.", "그는 응급 치료를 요하는 심한 치통으로 인해 프레젠테이션을 놓쳤습니다."),
    56: ("The hotel aims to treat every guest as a VIP.", "그 호텔은 모든 투숙객을 VIP로 대우하는(대접하는) 것을 목표로 합니다."),
    57: ("The CEO outlined his vision for the company's expansion into Asia.", "CEO는 회사의 아시아 확장에 대한 그의 비전(시력)을 개요 설명했습니다."),
    58: ("The team scheduled a brainstorming workout to generate new ideas.", "팀은 새로운 아이디어를 창출하기 위해 브레인스토밍 연습(워크아웃)을 일정을 잡았습니다."),
    59: ("We need to beat the competitor's price to win the contract.", "우리는 계약을 따내기 위해 경쟁사의 가격을 이겨야(능가해야) 합니다."),
    60: ("The stock market update appeared in the blink of an eye.", "주식 시장 업데이트는 눈 깜짝할 사이에 나타났습니다."),
    61: ("There is no easy cure for the economic recession.", "경기 침체에 대한 쉬운 해결책(치료법)은 없습니다."),
    62: ("Absenteeism is often a symptom of poor morale, a organizational disease.", "결근은 종종 조직의 병폐인 낮은 사기의 증상입니다."), # Metaphorical disease
    63: ("The rift between the two departments is slowly healing.", "두 부서 간의 균열이 천천히 치유되고 있습니다."),
    64: ("The audit revealed no internal irregularities in the accounting.", "감사는 회계에서 아무런 내부 부정행위를 드러내지 않았습니다."),
    65: ("Green spaces act as the lungs of the city, improving air quality.", "녹지 공간은 도시의 폐 역할을 하여 공기 질을 개선합니다."),
    66: ("Effective communication is a vital organ of any successful business.", "효과적인 의사소통은 모든 성공적인 비즈니스의 필수적인 기관입니다."),
    67: ("The court sought a legal remedy for the breach of contract.", "법원은 계약 위반에 대한 법적 구제책(치료법)을 모색했습니다."),
    68: ("Stress is a common cause of stomachache among call center staff.", "스트레스는 콜센터 직원들 사이에서 복통의 흔한 원인입니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d30p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    t_score = int(row['Target_Score']) if 'Target_Score' in row and pd.notna(row['Target_Score']) else 650

    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': t_score,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day30_part2.json
with open('day30_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 30 Part 2 Refined (Business Metaphors & Facilities).")
