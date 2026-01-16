import pandas as pd
import json
import re

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 5 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 5) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 5 Part 3)
toeic_examples_d5p3 = {
    69: ("Old documents are stored in the archive.", "오래된 문서들은 기록보관소에 저장됩니다."),
    70: ("The manager is unwilling to approve the budget increase.", "매니저는 예산 증액을 승인하기를 꺼립니다."),
    71: ("I was up late preparing for the presentation.", "저는 프레젠테이션을 준비하느라 늦게까지 깨어 있었습니다."),
    72: ("The storm caused a power blackout in the city.", "폭풍이 도시에 정전을 일으켰습니다."),
    73: ("The quarterly board meeting will be held next Monday.", "분기별 임원 회의가 다음 주 월요일에 열릴 것입니다."),
    74: ("The board of directors approved the merger proposal.", "이사회가 합병 제안을 승인했습니다."),
    75: ("He stood there with his arms crossed.", "그는 팔짱을 낀 채 거기에 서 있었습니다."),
    76: ("The sales figures for this quarter are quite depressing.", "이번 분기 판매 수치는 꽤 우울합니다(저조합니다)."),
    77: ("Don't drag the table across the floor.", "바닥에 테이블을 끌지 마십시오."),
    78: ("Please fold the paper in half before putting it in the envelope.", "봉투에 넣기 전에 종이를 반으로 접으십시오."),
    79: ("She folded up the letter and put it in her pocket.", "그녀는 편지를 접어 개서 주머니에 넣었습니다."),
    80: ("The sudden noise frightened the employees.", "갑작스러운 소음이 직원들을 놀라게 했습니다."),
    81: ("Despite the difficulties, we must keep going.", "어려움에도 불구하고, 우리는 계속 나아가야 합니다."),
    82: ("We are looking for long-term investment opportunities.", "우리는 장기 투자 기회를 찾고 있습니다."),
    83: ("Many employees look up to him as a mentor.", "많은 직원들이 그를 멘토로서 존경합니다."),
    84: ("He will make a presentation on the new marketing strategy.", "그는 새로운 마케팅 전략에 대해 발표할 것입니다."),
    85: ("Please make a revision to the contract as discussed.", "논의된 대로 계약서를 수정해 주십시오."),
    86: ("If you make an error, please correct it immediately.", "만약 실수를 범하면, 즉시 정정해 주십시오."),
    87: ("We are working hard to meet the deadline.", "우리는 마감일을 맞추기 위해 열심히 일하고 있습니다."),
    88: ("This product meets the requirements for safety certification.", "이 제품은 안전 인증을 위한 요구조건을 충족시킵니다."),
    89: ("I don't want to mess up this important project.", "저는 이 중요한 프로젝트를 망치고 싶지 않습니다."),
    90: ("I'd love to join you, but my schedule doesn't permit it.", "함께하고 싶지만, 제 일정상 불가능합니다."),
    91: ("It is obvious that we need more staff.", "우리가 더 많은 직원이 필요하다는 것은 명백합니다."),
    92: ("We need to order more office supplies.", "우리는 더 많은 사무용품을 주문해야 합니다."),
    93: ("Please do not overlook any details in the report.", "보고서의 어떤 세부 사항도 간과하지 마십시오."),
    94: ("The package will be delivered overnight.", "소포는 밤새(익일 배송으로) 배달될 것입니다."),
    95: ("He organized the papers on his desk.", "그는 책상 위의 서류들을 정리했습니다."),
    96: ("Please proofread your report before submitting it.", "제출하기 전에 보고서를 교정 보십시오."),
    97: ("We had to rearrange the meeting schedule due to the weather.", "우리는 날씨 때문에 회의 일정을 조정해야 했습니다."),
    98: ("The mechanic will recondition the engine.", "정비사가 엔진을 수리할 것입니다."),
    99: ("She listened to the lecture, resting her chin on her hand.", "그녀는 손으로 턱을 괸 채 강의를 들었습니다."),
    100: ("Please sit on the stool while waiting.", "기다리는 동안 의자에 앉으십시오."),
    101: ("Don't forget to punch your timecard when you arrive.", "도착하면 근무 시간 기록표를 찍는 것을 잊지 마십시오."),
    102: ("Please wipe the table after you finish eating.", "식사를 마친 후에 테이블을 닦아 주십시오."),
    103: ("Employees may be asked to work additional hours during the busy season.", "직원들은 바쁜 시즌 동안 추가 근무를 하도록 요청받을 수 있습니다."),
    104: ("Can you cover my work shift tomorrow?", "내일 제 근무 교대를 대신해 주실 수 있나요?"),
    105: ("New regulations can be burdensome for small businesses.", "새로운 규정은 소규모 기업들에게 부담스러울 수 있습니다."),
    106: ("Please circulate this memo to all staff members.", "이 메모를 모든 직원들에게 회람(순환)시켜 주십시오."),
    107: ("He was commended for his exceptional customer service.", "그는 뛰어난 고객 서비스로 칭찬받았습니다."),
    108: ("He enjoys the company of his colleagues.", "그는 동료들과 함께 있는 것(동료, 일행)을 즐깁니다."),
    109: ("High prices may discourage customers from buying.", "높은 가격은 고객들이 구매하는 것을 낙담시킬(막을) 수 있습니다."),
    110: ("Noise from the construction site is a major distraction.", "공사장 소음은 주요한 집중 방해 요소입니다."),
    111: ("Engine failure caused the flight delay.", "엔진 고장이 항공편 지연을 일으켰습니다."),
    112: ("The keynote speech will be followed by a reception.", "기조연설에 이어(뒤이어) 리셉션이 있을 것입니다."),
    113: ("We apologize for the interruption of service.", "서비스 중단에 대해 사과드립니다."),
    114: ("Please make sure that all doors are locked.", "모든 문이 잠겨 있는지 확인해 주십시오."),
    115: ("The package was mislabeled and sent to the wrong address.", "소포는 라벨이 잘못 붙여져서 엉뚱한 주소로 보내졌습니다."),
    116: ("Security guards must be observant at all times.", "보안 요원들은 항상 관찰력이 있어야(주의 깊어야) 합니다."),
    117: ("I tried to persuade him to change his mind.", "저는 그가 마음을 바꾸도록 설득하려고 노력했습니다."),
    118: ("The proposed changes will take effect next month.", "제안된 변경 사항들은 다음 달에 발효될 것입니다."),
    119: ("Could you rephrase your question?", "질문을 다시(바꾸어) 말씀해 주시겠습니까?"),
    120: ("I could scarcely believe the news.", "저는 그 소식을 거의 믿을 수 없었습니다."),
    121: ("Please state your specific requirements concisely.", "귀하의 구체적인 요구 사항을 간결하게 명시해 주십시오."),
    122: ("The plan was met with strong disapproval.", "그 계획은 강한 반대에 부딪혔습니다."),
    123: ("The committee disapproved the budget request.", "위원회는 예산 요청을 반대했습니다."),
    124: ("Could you do me a favor?", "저를 좀 도와주시겠습니까? (부탁 하나 들어주시겠습니까?)"),
    125: ("You did a good job on the presentation.", "프레젠테이션을 아주 잘 해냈습니다."),
    126: ("It is difficult to draw a distinction between the two products.", "두 제품 사이의 구별을 짓기는 어렵습니다."),
    127: ("Do not leave confidential documents exposed on your desk.", "기밀 문서를 책상 위에 노출된 채로 두지 마십시오."),
    128: ("The course offers intensive training in business English.", "그 과정은 비즈니스 영어에 대한 집중적인 훈련을 제공합니다."),
    129: ("The lack of funding is problematic for the project.", "자금 부족은 프로젝트에 있어 문제가 됩니다."),
    130: ("The project coordinator will oversee the timeline.", "프로젝트 책임자가 일정을 감독할 것입니다."),
    131: ("Good project management requires strong leadership.", "좋은 프로젝트 관리는 강력한 리더십을 요구합니다."),
    132: ("The stadium has a seating capacity of 50,000.", "그 경기장은 5만 명의 좌석 수용 능력을 가지고 있습니다."),
    133: ("I will take care of the travel arrangements.", "제가 출장 준비를 책임지겠습니다(처리하겠습니다)."),
    134: ("He agreed to take on the role of team leader.", "그는 팀장 역할을 떠맡기로 동의했습니다."),
    135: ("The project was a tremendous success.", "그 프로젝트는 거대한 성공이었습니다."),
    136: ("The hotel has improved under the new management.", "그 호텔은 새 경영진 하에서 개선되었습니다.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d5p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day5_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 5 Part 3 Created.")
