import pandas as pd
import json
import re

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 2 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 2) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

# Function to clean meaning text
def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    # Remove newlines, replace with comma-space
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    # Remove multiple spaces
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# UPGRADED HIGH-QUALITY TOEIC EXAMPLES
toeic_examples_d2p1_v2 = {
    1: ("All employees are expected to wear professional attire during client meetings.", "모든 직원은 고객 회의 중에 전문적인 복장을 착용할 것으로 예상됩니다."),
    2: ("The company has implemented a new dress code for all staff members.", "회사는 모든 직원을 위해 새로운 복장 규정을 시행했습니다."),
    3: ("Safety is a primary concern for the manufacturing department.", "안전은 제조 부서의 주된 관심사입니다."),
    4: ("Employees must adhere to the company's strict privacy policy.", "직원들은 회사의 엄격한 개인정보 처리방침을 준수해야 합니다."),
    5: ("Failure to comply with the regulations may result in penalties.", "규정을 준수하지 않을 경우 처벌을 받을 수 있습니다."),
    6: ("We must follow the safety regulations set by the government.", "우리는 정부가 정한 안전 규정을 따라야 합니다."),
    7: ("There is an exception to the rule for employees with disabilities.", "장애가 있는 직원에게는 규칙에 대한 예외가 있습니다."),
    8: ("Please adhere to the guidelines when using the laboratory equipment.", "실험실 장비를 사용할 때는 지침을 준수해 주십시오."),
    9: ("Those who violate the policy will be severely reprimanded.", "정책을 위반하는 사람은 엄격하게 질책을 받을 것입니다."),
    10: ("Please refrain from using mobile phones during the performance.", "공연 중에는 휴대전화 사용을 삼가 주십시오."),
    11: ("You must obtain written permission from your supervisor.", "상사로부터 서면 허가를 받아야 합니다."),
    12: ("Only authorized personnel have access to the confidential files.", "허가된 인원만 기밀 파일에 접근할 수 있습니다."),
    13: ("Please read the user manual thoroughly before operating the machine.", "기계를 작동하기 전에 사용자 설명서를 철저히 읽으십시오."),
    14: ("The editor asked the writer to revise the manuscript.", "편집자는 작가에게 원고를 수정해 달라고 요청했습니다."),
    15: ("We accepted a new approach to marketing our products.", "우리는 제품 마케팅에 대한 새로운 접근 방식을 받아들였습니다."),
    16: ("The budget requires final approval from the finance director.", "예산은 재무 이사의 최종 승인이 필요합니다."),
    17: ("Please present a valid form of identification at the reception.", "프런트에서 유효한 신분증을 제시해 주십시오."),
    18: ("The technical support team responded to the issue immediately.", "기술 지원 팀은 문제에 즉시 대응했습니다."),
    19: ("The facility passed the annual safety inspection with flying colors.", "그 시설은 연례 안전 점검을 우수한 성적으로 통과했습니다."),
    20: ("Travel arrangements have been made for the visiting delegation.", "방문 대표단을 위한 여행 준비가 완료되었습니다."),
    21: ("Please describe the procedure for filing a complaint.", "불만 제기 절차를 설명해 주십시오."),
    22: ("The proposal received a negative response from the stakeholders.", "그 제안은 이해관계자들로부터 부정적인 반응을 얻었습니다."),
    23: ("The government issued a mandate to reduce carbon emissions.", "정부는 탄소 배출량을 줄이라는 명령을 내렸습니다."),
    24: ("The new tax law will go into effect starting next month.", "새로운 세법은 다음 달부터 효력을 발생합니다."),
    25: ("The cost of living has increased drastically in the last year.", "지난해 생활비가 급격히 상승했습니다."),
    26: ("The project proceeded according to the original schedule.", "프로젝트는 원래 일정에 따라 진행되었습니다."),
    27: ("Cloud technology enables employees to work from anywhere.", "클라우드 기술은 직원들이 어디서나 일할 수 있게 해줍니다."),
    28: ("Our customer service meets the highest international standards.", "우리의 고객 서비스는 가장 높은 국제 기준을 충족합니다."),
    29: ("The demand for renewable energy is constant and growing.", "재생 에너지에 대한 수요는 지속적이며 증가하고 있습니다."),
    30: ("The committee voted to pass the new environmental act.", "위원회는 새로운 환경 법안을 통과시키기로 투표했습니다."),
    31: ("The company offers a competitive compensation package.", "그 회사는 경쟁력 있는 보상 패키지를 제공합니다."),
    32: ("The city decided to ban plastic bags in supermarkets.", "시는 슈퍼마켓에서 비닐봉지 사용을 금지하기로 결정했습니다."),
    33: ("We have a moral obligation to help those in need.", "우리는 어려움에 처한 사람들을 도울 도덕적 의무가 있습니다."),
    34: ("The manager authorized the purchase of new computers.", "매니저는 새 컴퓨터 구매를 승인했습니다."),
    35: ("Photography is strictly prohibited in the museum.", "박물관 내에서의 사진 촬영은 엄격히 금지되어 있습니다."),
    36: ("The outdated regulation was abolished last year.", "시대에 뒤떨어진 그 규정은 작년에 폐지되었습니다."),
    37: ("It is difficult to enforce the law in remote areas.", "외딴 지역에서는 법을 집행하기가 어렵습니다."),
    38: ("Punctuality is a habit that is valued in the workplace.", "시간 엄수는 직장에서 소중히 여겨지는 습관입니다."),
    39: ("New legislation aims to improve workplace safety.", "새로운 법률은 직장 안전을 개선하는 것을 목표로 합니다."),
    40: ("Access to the executive lounge is restricted to members.", "임원 라운지 출입은 회원들에게만 제한됩니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d2p1_v2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day2_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 2 Part 1 UPGRADED & REGENERATED.")
