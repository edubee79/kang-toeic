import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 22 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 22) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 22 Part 3: Meetings & Agreements)
# Focus: "Hyper-TOEIC" (Conferences, Negotiations, Presentations)
toeic_examples_d22p3 = {
    69: ("The meeting is set for 2 PM local time.", "회의는 현지 시간으로 오후 2시에 잡혀 있습니다."),
    70: ("The error resulted in a delay.", "그 오류는 지연을 야기했습니다."),
    71: ("Please check the seating chart.", "좌석 배치도를 확인해 주십시오."),
    72: ("The seminar will cover new marketing trends.", "그 세미나는 새로운 마케팅 트렌드를 다룰 것입니다."),
    73: ("Employees will vote on the new policy.", "직원들은 새 정책에 대해 투표할 것입니다."),
    74: ("We hold weekly meetings.", "우리는 매주 회의를 엽니다."),
    75: ("There was a large attendance at the conference.", "회의에 많은 참석자들이 있었습니다."),
    76: ("I will attend a conference in Berlin.", "저는 베를린에서 열리는 학술 발표회에 참석할 것입니다."),
    77: ("Business attire is required for the event.", "그 행사를 위해서는 비즈니스 정장이 요구됩니다."),
    78: ("We have a conference call at 10 AM.", "우리는 오전 10시에 전화회담이 있습니다."),
    79: ("The annual convention is held in Las Vegas.", "연례 회의가 라스베이거스에서 열립니다."),
    80: ("It is better to discuss this face to face.", "이것은 서로 얼굴을 맞대고 논의하는 것이 낫습니다."),
    81: ("The documentary includes rare film footage.", "그 다큐멘터리에는 희귀한 자료 화면이 포함되어 있습니다."),
    82: ("I need to get an appointment with the dentist.", "저는 치과 의사와 약속을 잡아야 합니다."),
    83: ("Let's get back in touch next week.", "다음 주에 다시 연락합시다(연락이 되게 합시다)."),
    84: ("Please get in touch with the sales department.", "영업 부서와 연락을 취하십시오."),
    85: ("He will give a presentation on the budget.", "그는 예산에 관해 발표를 할 것입니다."),
    86: ("We need to have a discussion about the project.", "우리는 프로젝트에 관해 토론을 해야 합니다."),
    87: ("The CEO gave an inspiring keynote address.", "CEO는 영감을 주는 기조연설을 했습니다."),
    88: ("She is the keynote speaker for the event.", "그녀는 그 행사의 기조연설자입니다."),
    89: ("He was asked to make a speech.", "그는 연설을 하도록 요청받았습니다."),
    90: ("We need to make adjustments to the plan.", "우리는 계획을 조정해야(조정을 만들어야) 합니다."),
    91: ("Please pass around the sign-up sheet.", "참가 신청서를 차례로 돌려주십시오."),
    92: ("They passed out flyers to pedestrians.", "그들은 보행자들에게 전단지를 나누어 주었습니다."),
    93: ("We decided to put in an offer on the house.", "우리는 그 집에 제안(오퍼)을 하기로 결정했습니다."),
    94: ("She knows how to run a meeting efficiently.", "그녀는 회의를 효율적으로 진행하는 법을 압니다."),
    95: ("I'd like to schedule an appointment for Monday.", "월요일로 약속을 잡고 싶습니다."),
    96: ("Please speak up so everyone can hear you.", "모두가 들을 수 있도록 크게 말해 주십시오."),
    97: ("He stared into the distance.", "그는 먼 곳을 응시했습니다."),
    98: ("Please take down these instructions.", "이 지시 사항들을 적어 두십시오."),
    99: ("It is important to take notes during the lecture.", "강의 중에 기록하는(노트를 하는) 것은 중요합니다."),
    100: ("Many employees took part in the survey.", "많은 직원들이 설문조사에 참가했습니다."),
    101: ("The speaker used visual aids to explain the data.", "연사는 데이터를 설명하기 위해 시각 보조자료를 사용했습니다."),
    102: ("We need a less conventional approach.", "우리는 덜 전통적인(관습적인) 접근 방식이 필요합니다."),
    103: ("It is a local custom to remove shoes.", "신발을 벗는 것은 지역 관습입니다."),
    104: ("He could barely hold back his anger.", "그는 화를 거의 자제할(억제할) 수 없었습니다."),
    105: ("The competition for the contract was intense.", "계약을 위한 경쟁은 극심했습니다(치열했습니다)."),
    106: ("There is a misprint in the brochure.", "브로셔에 오식이 있습니다."),
    107: ("The line is currently occupied.", "통화 연결이 현재 사용 중입니다(통화 중입니다)."),
    108: ("All staff are encouraged to participate in the event.", "모든 직원이 행사에 참가하도록 장려됩니다."),
    109: ("To start with, let's review the minutes.", "우선(첫째로), 회의록을 검토합시다."),
    110: ("She arranged a conference with the client.", "그녀는 고객과의 회의를 준비했습니다."),
    111: ("The meeting is supposed to start at 9.", "회의는 9시에 시작하기로 되어 있습니다."),
    112: ("We have biweekly progress meetings.", "우리는 격주로 진행 상황 회의를 합니다."),
    113: ("Why did you bring up that topic?", "왜 그 문제를 제기했습니까(꺼냈습니까)?"),
    114: ("There was a clash of opinions.", "의견의 충돌이 있었습니다."),
    115: ("They finally came to a decision.", "그들은 마침내 결정을 내렸습니다."),
    116: ("We hope to come to an agreement soon.", "우리는 곧 합의에 도달하기를 바랍니다."),
    117: ("The new policy is quite controversial.", "새 정책은 꽤 논쟁의 여지가 있습니다."),
    118: ("Small issues can develop into big problems.", "작은 문제들이 큰 문제들로 발전할 수 있습니다."),
    119: ("I don't think you get the point.", "저는 당신이 요점을 이해한다고 생각하지 않습니다."),
    120: ("In conclusion, we need to cut costs.", "결론적으로, 우리는 비용을 절감해야 합니다."),
    121: ("He spoke in support of the proposal.", "그는 제안을 지지하여 발언했습니다."),
    122: ("I am in the middle of a meeting.", "저는 회의 도중입니다."),
    123: ("He insisted on paying for the dinner.", "그는 저녁 식사 비용을 지불하겠다고 주장했습니다(우겼습니다)."),
    124: ("His comments were intended to insult us.", "그의 논평은 우리를 모욕하려는 의도였습니다."),
    125: ("The offer is very inviting.", "그 제안은 매우 매력적입니다(솔깃합니다)."),
    126: ("The award ceremony will be followed by a luncheon.", "시상식 후에 오찬이 이어질 것입니다."),
    127: ("It is too early to make a conclusion.", "결론을 내리기에는 너무 이릅니다."),
    128: ("You need to make a decision by tomorrow.", "당신은 내일까지 결정해야(결정을 내려야) 합니다."),
    129: ("He offered an apology to the customer.", "그는 고객에게 사과했습니다(사과를 제공했습니다)."),
    130: ("We made an official arrangement.", "우리는 공식적인 합의를 했습니다."),
    131: ("New hires receive on-the-job training.", "신입 사원들은 현장 직무 교육(OJT)을 받습니다."),
    132: ("He respected his opponent in the debate.", "그는 토론에서 자신의 반대자(적수)를 존중했습니다."),
    133: ("The meeting was postponed until Friday.", "회의는 금요일까지 연기되었습니다."),
    134: ("She is an expert in public speaking.", "그녀는 대중 연설(강연) 전문가입니다."),
    135: ("We have reached a conclusion.", "우리는 결론에 이르렀습니다."),
    136: ("They reached unanimous agreement.", "그들은 만장일치로 합의했습니다."),
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d22p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day22_part3.json
with open('day22_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 22 Part 3 Created (Meetings & Agreements).")
