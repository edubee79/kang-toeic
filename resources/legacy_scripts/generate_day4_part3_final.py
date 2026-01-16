import pandas as pd
import json
import re

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 4 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 4) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 4 Part 3)
toeic_examples_d4p3 = {
    69: ("Please press the button to call for assistance.", "도움을 요청하려면 버튼을 눌러 주십시오."),
    70: ("The network server is currently undergoing maintenance.", "네트워크 서버는 현재 유지 보수 중입니다."),
    71: ("We have invited several VIPs to the store opening ceremony.", "우리는 상점 개점 식에 몇몇 귀빈들을 초대했습니다."),
    72: ("Dealing with customer complaints is a difficult task.", "고객 불만을 처리하는 것은 어려운 일입니다."),
    73: ("Most employees are satisfied with the new benefit package.", "대부분의 직원들은 새로운 복지 혜택 패키지에 만족합니다."),
    74: ("Please remain seated until the plane comes to a complete stop.", "비행기가 완전히 멈출 때까지 자리에 앉아 계십시오."),
    75: ("The new office building is surrounded by trees and parks.", "새로운 사무실 건물은 나무와 공원으로 둘러싸여 있습니다."),
    76: ("He has extensive business contacts in the Asian market.", "그는 아시아 시장에 광범위한 사업상 인맥(아는 사람)을 가지고 있습니다."),
    77: ("The chairperson opened the meeting with a welcoming speech.", "의장이 환영사로 회의를 시작했습니다."),
    78: ("The copy editor reviewed the manuscript for grammatical errors.", "원고 정리 편집자가 원고의 문법적 오류를 검토했습니다."),
    79: ("He was thrown in at the deep end with this challenging project.", "그는 이 도전적인 프로젝트로 힘든 상황에 처했습니다(수심이 깊은 쪽에 던져졌습니다)."),
    80: ("Please submit a double-sided copy of your resume.", "이력서의 양면 복사본을 제출해 주십시오."),
    81: ("You can find the stapler in the top drawer of my desk.", "제 책상 맨 위 서랍에서 스테이플러를 찾을 수 있습니다."),
    82: ("You must get your supervisor's approval before booking travel.", "출장 예약을 하기 전에 상사의 승인을 받아야 합니다."),
    83: ("We met halfway to discuss the terms of the contract.", "우리는 계약 조건을 논의하기 위해 중간 지점에서 만났습니다."),
    84: ("He handed over his resignation letter to the manager.", "그는 매니저에게 사직서를 건네주었습니다."),
    85: ("Documents were stacked in a pile on the floor.", "서류들이 바닥에 수북이(더미로) 쌓여 있었습니다."),
    86: ("The sales figures were low, but it could have been worse.", "판매 수치가 낮았지만, 이만하기 다행입니다(더 나쁠 수도 있었습니다)."),
    87: ("The package arrived just in time for the presentation.", "소포가 프레젠테이션 시간에 맞춰 도착했습니다."),
    88: ("Computer literacy is a requirement for this position.", "컴퓨터 활용 능력(읽고 쓰는 능력)은 이 직책의 필수 조건입니다."),
    89: ("Please do not litter in the park.", "공원에 쓰레기를 버리지 마십시오."),
    90: ("Please make a selection from the menu.", "메뉴에서 하나를 선정해 주십시오."),
    91: ("We need to make room for the new equipment.", "우리는 새 장비를 위한 공간을 마련해야 합니다."),
    92: ("The printer is out of paper, so please refill it.", "프린터에 종이가 다 떨어졌으니, 리필해 주십시오."),
    93: ("Please raise your hand if you have any questions.", "질문이 있으시면 손을 들어 주십시오."),
    94: ("You should report a problem immediately to the IT department.", "문제점을 즉시 IT 부서에 보고해야 합니다."),
    95: ("This software can sort data by date or name.", "이 소프트웨어는 데이터를 날짜나 이름별로 분류할 수 있습니다."),
    96: ("The company provides complimentary stationery to all employees.", "회사는 모든 직원에게 무료 문구류를 제공합니다."),
    97: ("Let's take another look at the budget proposal.", "예산 제안서를 다시 한번 봅시다."),
    98: ("Please take the files out of the box.", "상자에서 파일들을 꺼내 주십시오."),
    99: ("The antique typewriter is displayed in the lobby.", "그 골동품 타자기는 로비에 전시되어 있습니다."),
    100: ("Students were asked to work in groups on the assignment.", "학생들은 과제에 대해 여러 명이(그룹으로) 작업하도록 요청받았습니다."),
    101: ("He took notes on a yellow writing pad during the meeting.", "그는 회의 중에 노란색 노트(패드)에 필기를 했습니다."),
    102: ("In anticipation of high demand, we increased production.", "높은 수요를 예상하고, 우리는 생산량을 늘렸습니다."),
    103: ("The automobile industry is facing a major downturn.", "자동차 산업은 큰 침체기를 겪고 있습니다."),
    104: ("Employees are asked to complete the survey by Friday.", "직원들은 금요일까지 설문 조사를 완료하도록 요청받습니다."),
    105: ("Interns will be paid for their work this summer.", "인턴들은 이번 여름 근무에 대해 보수를 받을 것입니다."),
    106: ("She is highly qualified for the management position.", "그녀는 관리직에 대해 자격을 매우 잘 갖추고 있습니다."),
    107: ("Casual attire is allowed on Fridays.", "금요일에는 편안한 복장(격식을 차리지 않은 복장)이 허용됩니다."),
    108: ("I will send you a draft of the report for review.", "검토를 위해 보고서의 초안을 보내드리겠습니다."),
    109: ("He drew on his years of experience to solve the problem.", "그는 문제를 해결하기 위해 그의 수년간의 경험을 이용했습니다."),
    110: ("There is no excuse for missing the deadline.", "마감 기한을 놓친 것에 대해서는 변명의 여지가 없습니다."),
    111: ("The head office is located in downtown Seoul.", "본사는 서울 시내에 위치해 있습니다."),
    112: ("We stocked up on inventory in anticipation of the holiday season.", "우리는 연휴 시즌을 예상하고 재고를 비축했습니다."),
    113: ("In light of recent events, we have updated our security policy.", "최근 사건들을 고려하여, 우리는 보안 정책을 업데이트했습니다."),
    114: ("The surgeon used a precision instrument during the operation.", "외과 의사는 수술 중에 정밀 기계(도구)를 사용했습니다."),
    115: ("This product is popularly known as the 'magic cleaner'.", "이 제품은 일반적으로 '매직 클리너'로 알려져 있습니다."),
    116: ("I am writing regarding your inquiry about the product.", "귀하의 제품 문의에 관하여 편지를 씁니다."),
    117: ("The equipment is routinely checked for safety standards.", "그 장비는 안전 기준을 위해 정기적으로(일상적으로) 점검됩니다."),
    118: ("He has a standing invitation to visit our headquarters.", "그는 우리 본사를 방문할 수 있는 고정적인(상설의) 초대를 받았습니다."),
    119: ("Please refer to the supplementary materials for more details.", "더 자세한 내용은 보충 자료를 참조하십시오."),
    120: ("Employees who work overtime will be compensated.", "초과 근무를 하는 직원들은 보상을 받을 것입니다."),
    121: ("Safety in the workplace is our top priority.", "작업장의 안전은 우리의 최우선 순위입니다."),
    122: ("Ms. Johnson is the acting director while the CEO is away.", "존슨 씨는 CEO가 부재중인 동안 대리 이사(직무대행)입니다."),
    123: ("The report is full of grammatical errors.", "그 보고서는 문법적 오류로 가득합니다."),
    124: ("We plan to convert the warehouse to a modern office space.", "우리는 창고를 현대적인 사무 공간으로 바꿀 계획입니다."),
    125: ("We can count on Mr. Lee to deliver the project on time.", "우리는 이 씨가 프로젝트를 제시간에 완수할 것이라고 믿을(의지할) 수 있습니다."),
    126: ("The room was filled with the smell of fresh coffee.", "방은 신선한 커피 냄새로 가득 찼습니다."),
    127: ("It is important to get along with your colleagues.", "동료들과 사이좋게 지내는 것은 중요합니다."),
    128: ("Be careful when you go down the steps.", "계단을 내려갈 때 조심하십시오."),
    129: ("Persistence is the key to success in this business.", "끈기는 이 사업에서 성공의 열쇠(길)입니다."),
    130: ("He rarely loses his temper during meetings.", "그는 회의 중에 좀처럼 화를 내지 않습니다."),
    131: ("Could you make a copy of this invoice?", "이 송장을 복사해 주시겠습니까?"),
    132: ("He tends to obsess about minor details.", "그는 사소한 세부 사항에 대해 강박 관념을 갖는 경향이 있습니다."),
    133: ("Please record your overtime hours on the timesheet.", "초과 근무 시간을 타임시트에 기록해 주십시오."),
    134: ("Please remove all personal effects from your desk by Friday.", "금요일까지 책상에서 모든 개인 소지품을 치워 주십시오."),
    135: ("We are planning a reunion for former employees.", "우리는 전 직원들을 위한 친목회를 계획하고 있습니다."),
    136: ("A sales representative will contact you shortly.", "영업 담당자가 곧 연락드릴 것입니다.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d4p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day4_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 4 Part 3 Created.")
