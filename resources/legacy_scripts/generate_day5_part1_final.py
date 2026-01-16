import pandas as pd
import json
import re

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 5 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 5) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 5 Part 1)
toeic_examples_d5p1 = {
    1: ("The new surveillance system is highly sophisticated.", "새로운 감시 시스템은 매우 정교합니다."),
    2: ("We expect a timely response to our inquiry.", "우리는 문의에 대한 시기적절한 응답을 기대합니다."),
    3: ("Realistically, we cannot finish the project by Friday.", "현실적으로, 우리는 금요일까지 프로젝트를 끝낼 수 없습니다."),
    4: ("All customer inquiries must be answered promptly.", "모든 고객 문의는 즉시(지체 없이) 답변되어야 합니다."),
    5: ("The conference room is accessible only to authorized personnel.", "회의실은 인가된 직원들만 출입할 수 있습니다."),
    6: ("The company plans to implement the new policy next month.", "회사는 다음 달에 새로운 정책을 시행할 계획입니다."),
    7: ("We welcome feedback from our customers to improve service.", "우리는 서비스 개선을 위해 고객들의 의견(피드백)을 환영합니다."),
    8: ("You must pay the outstanding balance immediately.", "귀하는 미지불 잔액을 즉시 지불해야 합니다."),
    9: ("We regret to inform you that your application was rejected.", "귀하의 지원서가 거절되었음을 알리게 되어 유감입니다."),
    10: ("We are looking for a suitable replacement for Mr. Smith.", "우리는 스미스 씨의 적절한 후임자를 찾고 있습니다."),
    11: ("The CEO made an important announcement regarding the merger.", "CEO는 합병에 관한 중요한 발표를 했습니다."),
    12: ("Please direct your questions to the marketing department.", "질문이 있으시면 마케팅 부서로 해주십시오."),
    13: ("The files were permanently deleted from the server.", "파일들이 서버에서 영구적으로 삭제되었습니다."),
    14: ("The company failed to fulfill its contractual obligations.", "그 회사는 계약 의무를 이행하는 데 실패했습니다."),
    15: ("The proposal outlines the steps for the new project.", "그 제안서는 새 프로젝트를 위한 단계들을 개요를 서술하고 있습니다."),
    16: ("The technician explained how to operate the machine.", "기술자는 기계를 작동하는 방법을 설명했습니다."),
    17: ("The report contains confidential financial data.", "그 보고서는 기밀 재무 데이터를 포함하고 있습니다."),
    18: ("She was asked to compile a list of potential clients.", "그녀는 잠재 고객 목록을 편집(수집)하도록 요청받았습니다."),
    19: ("Subsequent events proved that his decision was correct.", "차후의(그 다음의) 사건들은 그의 결정이 옳았음을 증명했습니다."),
    20: ("The manager provided a brief overview of the project.", "매니저는 프로젝트에 대한 간략한 개요를 제공했습니다."),
    21: ("We are the leading provider of internet services in the region.", "우리는 그 지역의 선도적인 인터넷 서비스 제공업체입니다."),
    22: ("We need to discuss an urgent matter regarding the budget.", "우리는 예산에 관한 긴급한 문제를 논의해야 합니다."),
    23: ("He has extensive expertise in software development.", "그는 소프트웨어 개발에 광범위한 전문 지식을 가지고 있습니다."),
    24: ("The salesperson demonstrated how the new product works.", "영업 사원은 신제품이 어떻게 작동하는지 시연했습니다(설명했습니다)."),
    25: ("You can pay the remainder of the fee upon arrival.", "도착 시 요금의 나머지를 지불하시면 됩니다."),
    26: ("Good communication is essential for teamwork.", "원활한 의사소통은 팀워크에 필수적입니다."),
    27: ("The team was divided into three smaller groups.", "팀은 3개의 더 작은 그룹으로 나누어졌습니다."),
    28: ("The company is playing a major role in the industry.", "그 회사는 업계에서 주요한 역할을 하고 있습니다."),
    29: ("All employees must act in compliance with safety regulations.", "모든 직원은 안전 규정을 준수하여 행동해야 합니다."),
    30: ("I would like to clarify a few points in the contract.", "계약서의 몇 가지 요점을 명확히 하고 싶습니다."),
    31: ("The company is facing severe financial difficulties.", "그 회사는 심각한 재정적 어려움에 직면해 있습니다."),
    32: ("Please follow the instructions on the screen carefully.", "화면의 지시 사항을 주의 깊게 따라 주십시오."),
    33: ("We considered every aspect of the problem.", "우리는 문제의 모든 측면(관점)을 고려했습니다."),
    34: ("Apparently, the meeting has been canceled.", "보기에(듣자 하니), 회의가 취소된 것 같습니다."),
    35: ("Please be aware that the schedule is subject to change.", "일정이 변경될 수 있음을 인지해 주십시오."),
    36: ("The store has extended its business hours for the holidays.", "그 상점은 연휴를 위해 영업시간을 연장했습니다."),
    37: ("I accidentally deleted the wrong file.", "제가 실수로(뜻하지 않게) 엉뚱한 파일을 삭제했습니다."),
    38: ("It is advisable to book your flight well in advance.", "비행편을 충분히 미리 예약하는 것이 바람직합니다."),
    39: ("We are concerned about the rising cost of materials.", "우리는 자재 비용 상승에 대해 염려하고 있습니다."),
    40: ("I need to speak with the manager regarding my order.", "제 주문에 관해 매니저와 이야기하고 싶습니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d5p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day5_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 5 Part 1 Created.")
