import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 24 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 24) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 24 Part 3: Intermediate Personnel)
# Focus: "Hyper-TOEIC" (Management, Staffing, Corporate Actions)
toeic_examples_d24p3 = {
    69: ("My view is that we should proceed with the merger.", "제 견해는 우리가 합병을 진행해야 한다는 것입니다."),
    70: ("The two companies worked arm in arm to develop the product.", "두 회사는 제품을 개발하기 위해 제휴하여 일했습니다."),
    71: ("We prefer to hire experienced employees for this role.", "우리는 이 직무에 경력직 직원을 고용하는 것을 선호합니다."),
    72: ("Please arrange the seats to face away from the window.", "좌석이 창문을 등지도록(창문으로부터 고개를 돌리도록) 배치해 주십시오."),
    73: ("I will fill in for him while he is on vacation.", "그가 휴가 중인 동안 제가 그를 대신할 것입니다."),
    74: ("She got a promotion to senior manager last week.", "그녀는 지난주에 수석 매니저로 승진했습니다."),
    75: ("The company gave him an advance on his salary.", "회사는 그에게 급여를 가불해 주었습니다."),
    76: ("He knelt down to inspect the damage.", "그는 손상을 검사하기 위해 무릎을 꿇었습니다."),
    77: ("Early childhood is the best time for language acquisition.", "유아기는 언어 습득을 위한 가장 좋은 시기입니다."),
    78: ("Could you move over one seat so we can sit together?", "우리가 같이 앉을 수 있게 자리를 한 칸 옮겨 주시겠습니까?"),
    79: ("He moved up the corporate ladder very quickly.", "그는 기업의 계층 사다리를 매우 빠르게 승진해 올라갔습니다."),
    80: ("The newly arrived director implemented strict rules.", "새로 부임한 이사는 엄격한 규칙을 시행했습니다."),
    81: ("She is obviously qualified for the position.", "그녀는 명백히 그 직위에 자격이 있습니다."),
    82: ("Our company has a booth in the main pavilion.", "우리 회사는 메인 전시관에 부스를 가지고 있습니다."),
    83: ("Personnel management is a key function of HR.", "인사 관리는 인사팀의 핵심 기능입니다."),
    84: ("The delivery entrance is at the rear of the building.", "배송 출입구는 건물 뒤쪽에 있습니다."),
    85: ("The regional director visits the branch quarterly.", "지사장은 분기별로 지점을 방문합니다."),
    86: ("We need to reposition our brand in the market.", "우리는 시장에서 우리 브랜드의 위치를 바꿀 필요가 있습니다."),
    87: ("Retirees are eligible for a company pension.", "퇴직자들은 회사 연금을 받을 자격이 있습니다."),
    88: ("He is saving money for his retirement.", "그는 은퇴를 위해 돈을 저축하고 있습니다."),
    89: ("Senior executives met to discuss the strategy.", "고위 간부들이 전략을 논의하기 위해 만났습니다."),
    90: ("I keep a spare key in the manager's office.", "저는 매니저 사무실에 여분의 열쇠를 보관합니다."),
    91: ("Many employees accepted the offer to take early retirement.", "많은 직원들이 조기 퇴직 제안을 수락했습니다."),
    92: ("Please take note of the changes in the schedule.", "일정 변경 사항에 주목해 주십시오."),
    93: ("He will take his father's place as CEO.", "그는 아버지의 자리를 대신하여 CEO가 될 것입니다."),
    94: ("The corporation plans to take over a smaller rival.", "그 기업은 더 작은 경쟁사를 인수할 계획입니다."),
    95: ("He is a high achiever in the sales department.", "그는 영업부에서 크게 성공한 사람(높은 성과자)입니다."),
    96: ("She is an admired leader in the industry.", "그녀는 업계에서 존경받는 리더입니다."),
    97: ("Profits increased as a result of the marketing campaign.", "마케팅 캠페인의 결과로서 수익이 증가했습니다."),
    98: ("The board member elected a new chairperson.", "이사들은 새로운 의장을 선출했습니다."),
    99: ("Incompetent employees can damage the company's reputation.", "무능한 직원들은 회사의 평판을 해칠 수 있습니다."),
    100: ("He is very knowledgeable about international tax laws.", "그는 국제 세법에 대해 아는 것이 매우 많습니다."),
    101: ("Two countries, namely France and Germany, signed the treaty.", "두 나라, 즉 프랑스와 독일이 조약에 서명했습니다."),
    102: ("There is a post office located nearby.", "인근에 우체국이 위치해 있습니다."),
    103: ("I would like to nominate Ms. Jones for the award.", "저는 존스 씨를 수상 후보로 지명하고 싶습니다."),
    104: ("Congratulations on your promotion to vice president.", "부사장 승진을 축하합니다."),
    105: ("He put in for a transfer to the New York office.", "그는 뉴욕 사무소로의 전근을 신청했습니다."),
    106: ("It is recommendable to book your flight in advance.", "항공편을 미리 예약하는 것이 추천할 만합니다."),
    107: ("This software is specially designed for architects.", "이 소프트웨어는 특별히 건축가들을 위해 설계되었습니다."),
    108: ("Who will stand in for the manager while she is away?", "매니저가 부재중인 동안 누가 대리를 맡습니까?"),
    109: ("Please state your name and position for the record.", "기록을 위해 당신의 이름과 직위를 진술해 주십시오."),
    110: ("We need tech-savvy staff for the digital transformation.", "우리는 디지털 전환을 위해 최신 기술을 잘 아는 직원이 필요합니다."),
    111: ("This is undoubtedly the best solution to the problem.", "이것이 틀림없이 그 문제에 대한 최고의 해결책입니다."),
    112: ("He aspires to become a CEO one day.", "그는 언젠가 CEO가 되기를 갈망합니다."),
    113: ("Unfair dismissal is a violation of labor laws.", "부당 해고는 노동법 위반입니다."),
    114: ("We empower employees to make their own decisions.", "우리는 직원들에게 스스로 결정을 내릴 권한을 부여합니다."),
    115: ("We are ready to go forward with the expansion plan.", "우리는 확장 계획을 앞으로 추진할(나아갈) 준비가 되었습니다."),
    116: ("The news heightened our concerns about the economy.", "그 뉴스는 경제에 대한 우리의 우려를 높였습니다."),
    117: ("The company hires skilled immigrants for technical roles.", "그 회사는 기술직에 숙련된 이민자들을 고용합니다."),
    118: ("She showed great initiative in solving the customer's problem.", "그녀는 고객의 문제를 해결하는 데 있어 큰 진취성을 보여주었습니다."),
    119: ("Inter-department communication is crucial for success.", "부서 간의 의사소통은 성공에 결정적입니다."),
    120: ("The recession led to job cutbacks across the industry.", "경기 침체는 업계 전반에 걸친 인력 감축으로 이어졌습니다."),
    121: ("The factory had to lay off workers due to low demand.", "공장은 수요 저조로 인해 노동자들을 해고해야 했습니다."),
    122: ("He is the named representative of the negotiating team.", "그는 협상팀의 지명된 대표자입니다."),
    123: ("The company announced a new appointment to the board.", "회사는 이사회에 새로운 임명을 발표했습니다."),
    124: ("What is your official title in the organization?", "조직 내에서 당신의 공식 직함은 무엇입니까?"),
    125: ("I applied for the job on the recommendation of my professor.", "저는 교수의 추천으로 그 일자리에 지원했습니다."),
    126: ("I couldn't pass up such a good opportunity.", "저는 그렇게 좋은 기회를 거절할(포기할) 수 없었습니다."),
    127: ("He always preaches about the importance of efficiency.", "그는 항상 효율성의 중요성에 대해 설교합니다."),
    128: ("He took over the role from his predecessor last month.", "그는 지난달에 전임자로부터 역할을 인계받았습니다."),
    129: ("The provincial government approved the budget.", "지방 정부는 예산을 승인했습니다."),
    130: ("Can we push back the meeting to 3 PM?", "회의를 오후 3시로 연기할 수 있습니까?"),
    131: ("Checking emails is a morning ritual for many employees.", "이메일 확인은 많은 직원들에게 아침의 의례적인 일(행사)입니다."),
    132: ("She plans to run for office in the next election.", "그녀는 다음 선거에서 공직에 입후보할 계획입니다."),
    133: ("There is not a speck of dust in the laboratory.", "실험실에는 먼지 한 점 없습니다."),
    134: ("She holds a supervisory position in the department.", "그녀는 부서에서 관리직(감독 직위)을 맡고 있습니다."),
    135: ("The restaurant had to turn away customers because it was full.", "식당은 만석이라 손님들을 돌려보내야 했습니다."),
    136: ("Do not underestimate the competition.", "경쟁사를 과소평가하지 마십시오.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d24p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day24_part3.json
with open('day24_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 24 Part 3 Created (Personnel Intermediate).")
