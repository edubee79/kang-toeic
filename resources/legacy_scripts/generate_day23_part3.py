import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 23 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 23) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 23 Part 3: Work Environment & Pay)
# Focus: "Hyper-TOEIC" (Salaries, Benefits, Office Atmosphere)
toeic_examples_d23p3 = {
    69: ("I need to check out a book from the library.", "도서관에서 책을 대여해야 합니다."),
    70: ("The company provides child care services.", "그 회사는 육아 서비스를 제공합니다."),
    71: ("I don't have the nerve to tell him the truth.", "저는 그에게 진실을 말할 용기가 없습니다."),
    72: ("The boss decided to give him a raise.", "상사는 그에게 임금을 인상해 주기로 결정했습니다."),
    73: ("We are throwing a going away party for Sarah.", "우리는 사라를 위해 송별회를 열 것입니다."),
    74: ("It's about time we upgraded our system.", "우리 시스템을 업그레이드할 때입니다."),
    75: ("It's no use complaining about it now.", "이제 와서 그것에 대해 불평해 봤자 소용없습니다."),
    76: ("Employee job satisfaction is high.", "직원들의 업무 만족도가 높습니다."),
    77: ("Take an umbrella just in case it rains.", "비가 올 경우를 대비해 우산을 가져가십시오."),
    78: ("Please keep me up to date on the progress.", "진행 상황에 대해 제게 계속 알려 주십시오."),
    79: ("He knows the city like the back of his hand.", "그는 그 도시를 아주 잘 알고 있습니다."),
    80: ("He felt miserable after the failure.", "그는 실패 후에 비참함을 느꼈습니다."),
    81: ("Employees are entitled to 10 days of paid leave.", "직원들은 10일의 유급 휴가를 받을 자격이 있습니다."),
    82: ("You can pick up your paycheck on Friday.", "금요일에 급여를 수령할 수 있습니다."),
    83: ("It's a pity that she couldn't come.", "그녀가 올 수 없었다니 유감입니다."),
    84: ("May I speak to you privately?", "개인적으로 말씀 좀 드릴 수 있을까요?"),
    85: ("Stress can cause psychological problems.", "스트레스는 정신적인 문제들을 야기할 수 있습니다."),
    86: ("I had to put in some overtime last week.", "저는 지난주에 초과근무를 좀 해야 했습니다."),
    87: ("We conducted a safety drill yesterday.", "우리는 어제 안전 훈련을 실시했습니다."),
    88: ("The job requires sensitivity to customer needs.", "그 일은 고객의 요구에 대한 감수성을 필요로 합니다."),
    89: ("He offered to show the visitors around.", "그는 방문객들을 안내하겠다고(관광시켜 주겠다고) 제안했습니다."),
    90: ("There are stacks of books in his office.", "그의 사무실에는 책이 산더미처럼 쌓여(서가가) 있습니다."),
    91: ("Surprisingly, the plan worked well.", "놀랍게도, 그 계획은 잘 작동했습니다."),
    92: ("The event will take place in the main hall.", "행사는 대강당에서 열릴 것입니다."),
    93: ("You look tired; take some time off.", "피곤해 보입니다; 좀 쉬십시오."),
    94: ("I am terribly sorry for the mistake.", "실수에 대해 몹시 죄송합니다."),
    95: ("She did a terrific job on the presentation.", "그녀는 발표를 훌륭하게 해냈습니다."),
    96: ("This is the next best option.", "이것이 차선책입니다."),
    97: ("The roller coaster ride was thrilling.", "롤러코스터 타기는 짜릿했습니다."),
    98: ("They credit him with the success.", "그들은 성공을 그의 공으로 믿습니다."),
    99: ("I didn't do it intentionally.", "저는 그것을 고의로 하지 않았습니다."),
    100: ("The doctor will be here soon; meanwhile, relax.", "의사가 곧 올 것입니다; 그동안에 편히 계십시오."),
    101: ("He respectfully declined the offer.", "그는 제안을 정중하게 거절했습니다."),
    102: ("Please sign up for the newsletter.", "뉴스레터에 등록하십시오."),
    103: ("Return any unused items for a refund.", "사용하지 않은 물품은 환불을 위해 반품하십시오."),
    104: ("I am tired of his complaints.", "저는 그의 불평에 싫증이 납니다."),
    105: ("The biannual meeting is held in June and December.", "연 2회의 회의는 6월과 12월에 열립니다."),
    106: ("She donates to charitable organizations.", "그녀는 자선 단체에 기부합니다."),
    107: ("The course of study includes practical training.", "교육 과정은 실습을 포함합니다."),
    108: ("He felt depressed after losing his job.", "그는 직장을 잃은 후 낙담했습니다."),
    109: ("Employees receive extra pay for holiday work.", "직원들은 휴일 근무에 대해 추가 급여를 받습니다."),
    110: ("He is the featured speaker at the conference.", "그는 회의의 특별 연사입니다."),
    111: ("The company is known for its generous benefits.", "그 회사는 관대한 혜택으로 알려져 있습니다."),
    112: ("He tried to laugh away his embarrassment.", "그는 당황스러움을 웃음으로 넘기려 했습니다."),
    113: ("Each plan has its own merits.", "각 계획은 저마다의 장점이 있습니다."),
    114: ("I dislike working the night shift.", "저는 야간 근무를 하는 것을 싫어합니다."),
    115: ("We follow occupational safety and health regulations.", "우리는 직장 안전 및 건강 규정을 따릅니다."),
    116: ("The overtime allowance is calculated hourly.", "초과근무수당은 시간당 계산됩니다."),
    117: ("What is the overtime rate?", "초과근무수당 요율은 얼마입니까?"),
    118: ("Employees get two weeks of paid vacation.", "직원들은 2주의 유급 휴가를 받습니다."),
    119: ("The union demanded a pay increase.", "노조는 임금 인상을 요구했습니다."),
    120: ("The government provides a state pension.", "정부는 국가 연금을 제공합니다."),
    121: ("The workers felt they were poorly paid.", "노동자들은 자신들이 박봉이라고 느꼈습니다."),
    122: ("This area is a wildlife preservation area.", "이 구역은 야생동물 보호구역입니다."),
    123: ("Please quote the reference number.", "조회 번호를 인용해(말해) 주십시오."),
    124: ("Employees in remote areas receive a regional allowance.", "오지(원격지)의 직원들은 특별 근무지 수당을 받습니다."),
    125: ("Our regular working hours are 9 to 5.", "우리의 정규 근무 시간은 9시부터 5시까지입니다."),
    126: ("We are planning a retirement party for him.", "우리는 그를 위해 은퇴 기념 파티를 계획하고 있습니다."),
    127: ("Does the company offer a retirement plan?", "회사는 퇴직 연금 제도를 제공합니까?"),
    128: ("The package includes competitive salary and benefits.", "패키지는 경쟁력 있는 급여와 복리후생을 포함합니다."),
    129: ("Volunteers visit the sheltered housing weekly.", "자원봉사자들은 매주 보호 시설을 방문합니다."),
    130: ("He is on sick leave today.", "그는 오늘 병가 중입니다."),
    131: ("She is a strong-willed leader.", "그녀는 의지가 강한 리더입니다."),
    132: ("Employees requested more time-off.", "직원들은 더 많은 휴가를 요청했습니다."),
    133: ("We are concerned about the welfare of our staff.", "우리는 직원들의 복지에 대해 염려합니다."),
    134: ("We strive for a positive work environment.", "우리는 긍정적인 근무 환경을 위해 노력합니다."),
    135: ("The working conditions need to be improved.", "근무 조건이 개선될 필요가 있습니다."),
    136: ("The media distorted the politician's remarks.", "언론은 정치인의 발언을 왜곡했습니다.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d23p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day23_part3.json
with open('day23_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 23 Part 3 Created (Work Environment & Pay).")
