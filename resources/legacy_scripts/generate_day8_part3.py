import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 8 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 8) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 8 Part 3: Intermediate - Business Idioms & Expressions)
toeic_examples_d8p3 = {
    69: ("The advertising campaign resulted in increased sales.", "광고 캠페인은 판매 증가라는 결과를 낳았습니다."),
    70: ("We are anxious to finalize the deal.", "우리는 거래를 마무리하고 싶어 몹시 안달하고 있습니다(몹시 ~하고 싶어합니다)."),
    71: ("Stress can bring on health problems.", "스트레스는 건강 문제를 초래할 수 있습니다."),
    72: ("Too many companies chase the same few customers.", "너무 많은 회사들이 소수의 같은 고객들을 뒤쫓습니다(추구합니다)."),
    73: ("Please come along with us to the conference.", "우리와 함께 컨퍼런스에 가시죠(함께 오시죠)."),
    74: ("The screw has come loose.", "나사가 풀렸습니다."),
    75: ("The offer is conditional on approval from the board.", "그 제안은 이사회의 승인을 조건으로 합니다."),
    76: ("We conducted a customer survey to gather feedback.", "우리는 피드백을 수집하기 위해 고객 설문 조사를 실시했습니다."),
    77: ("The tradition dates back to the 19th century.", "그 전통은 19세기까지 거슬러 올라갑니다."),
    78: ("The chart depicts the growth in revenue.", "그 차트는 수익 증가를 묘사합니다(보여줍니다)."),
    79: ("The hurricane caused widespread destruction.", "허리케인은 광범위한 파괴를 일으켰습니다."),
    80: ("The companies entered into a partnership.", "그 회사들은 파트너십에 들어갔습니다(맺었습니다)."),
    81: ("I will get back to you with an answer shortly.", "곧 답변을 가지고 연락드리겠습니다(돌아가겠습니다)."),
    82: ("There has been a gradual improvement in sales.", "판매에 있어 점진적인 개선이 있었습니다."),
    83: ("The account has been inactive for six months.", "그 계정은 6개월 동안 비활동 상태였습니다."),
    84: ("The doctor will arrive soon; in the meantime, please wait here.", "의사가 곧 도착할 것입니다; 그 동안 여기 기다려 주십시오."),
    85: ("This coupon is invalid after December 31st.", "이 쿠폰은 12월 31일 이후에는 무효입니다."),
    86: ("Please look over the contract before signing.", "서명하기 전에 계약서를 훑어보십시오(검토하십시오)."),
    87: ("He made up his mind to resign.", "그는 사임하기로 마음을 정했습니다(결심했습니다)."),
    88: ("We need to engage in meaningful dialogue.", "우리는 의미 있는 대화에 참여해야 합니다."),
    89: ("Please put a rush on this order.", "이 주문을 서둘러 주십시오."),
    90: ("The expansion put a strain on our finances.", "확장은 우리 재정에 부담을 주었습니다."),
    91: ("I cannot put up with this noise any longer.", "저는 이 소음을 더 이상 참을 수 없습니다."),
    92: ("He reached for the phone to answer the call.", "그는 전화를 받기 위해 전화기를 향해 손을 뻗었습니다."),
    93: ("We must innovate to stay ahead of the competition.", "우리는 경쟁에서 앞서 나가기 위해 혁신해야 합니다."),
    94: ("We sell software as well as hardware.", "우리는 하드웨어뿐만 아니라 소프트웨어도 팝니다."),
    95: ("There is ample parking space available.", "이용 가능한 충분한 주차 공간이 있습니다."),
    96: ("We offer a range of services.", "우리는 다양한(일련의) 서비스를 제공합니다."),
    97: ("She is busy attending to a client.", "그녀는 고객을 응대하느라(돌보느라) 바쁩니다."),
    98: ("We must confront the problem directly.", "우리는 문제에 직접 맞서야 합니다."),
    99: ("The statement must be understood in context.", "그 진술은 문맥 속에서 이해되어야 합니다."),
    100: ("Do not despair; there is still hope.", "절망하지 마십시오; 아직 희망은 있습니다."),
    101: ("The phone line was disconnected.", "전화선이 끊겼습니다."),
    102: ("Customers were dissatisfied with the service.", "고객들은 서비스에 불만족했습니다."),
    103: ("He is a driven and ambitious employee.", "그는 의욕이 넘치고(주도적인) 야심 찬 직원입니다."),
    104: ("The market is dynamic and constantly changing.", "시장은 역동적이며 끊임없이 변합니다."),
    105: ("We eagerly await the results of the test.", "우리는 테스트 결과를 간절히 기다립니다."),
    106: ("The project required an enormous amount of work.", "그 프로젝트는 엄청난 양의 작업을 필요로 했습니다."),
    107: ("Do not let the project fall behind schedule.", "프로젝트가 일정보다 뒤처지게 하지 마십시오."),
    108: ("It is not feasible to complete the task by tomorrow.", "내일까지 그 작업을 완료하는 것은 실행 불가능합니다(타당하지 않습니다)."),
    109: ("Please provide a forwarding address.", "우편물을 전달받을 주소를 제공해 주십시오."),
    110: ("It took him a long time to get over the failure.", "그가 실패를 극복하는 데 오랜 시간이 걸렸습니다."),
    111: ("I was impressed by his presentation.", "저는 그의 프레젠테이션에 감명을 받았습니다."),
    112: ("The current resources are inadequate for the demand.", "현재 자원은 수요에 비해 불충분합니다."),
    113: ("Current orders must be processed in a timely fashion.", "현재 주문들은 시기적절한 방식으로(제때에) 처리되어야 합니다."),
    114: ("Ms. Kim is an irreplaceable member of the team.", "김 씨는 팀의 대체 불가능한 구성원입니다."),
    115: ("There is a limitation on the number of attendees.", "참석자 수에 제한이 있습니다."),
    116: ("The company suffered a massive loss.", "그 회사는 거대한 손실을 입었습니다."),
    117: ("The auditor pointed out several errors.", "감사관은 몇 가지 오류를 지적했습니다."),
    118: ("The movie received rave reviews from critics.", "그 영화는 비평가들로부터 극찬(호평)을 받았습니다."),
    119: ("The machine broke down repeatedly.", "그 기계는 반복적으로 고장 났습니다."),
    120: ("The store is strategically located near the station.", "그 가게는 역 근처에 전략적으로 위치해 있습니다."),
    121: ("The company unveiled its new logo.", "회사는 새 로고를 공개했습니다(베일을 벗겼습니다)."),
    122: ("We spent a great deal of time on this project.", "우리는 이 프로젝트에 많은(엄청난 양의) 시간을 썼습니다."),
    123: ("Companies must be sensitive to consumer needs.", "기업들은 소비자 요구에 민감해야 합니다."),
    124: ("Don't bother to reply to spam emails.", "스팸 메일에 굳이 답장하려고 애쓰지 마십시오(귀찮게 ~하지 마십시오)."),
    125: ("The meeting was called off due to the storm.", "폭풍 때문에 회의가 취소되었습니다."),
    126: ("We carry out market studies regularly.", "우리는 정기적으로 시장 조사를 수행합니다."),
    127: ("I came across an interesting article.", "저는 우연히 흥미로운 기사를 발견했습니다(마주쳤습니다)."),
    128: ("He contrived to meet the CEO.", "그는 CEO를 만나려고 용케 일을 꾸몄습니다(고안해 냈습니다)."),
    129: ("The jury began to deliberate.", "배심원단은 심의(숙고)하기 시작했습니다."),
    130: ("Employees can stay at the hotel at a discounted rate.", "직원들은 할인된 요금으로 호텔에 묵을 수 있습니다."),
    131: ("Prices have a tendency to rise in the summer.", "가격은 여름에 오르는 경향이 있습니다."),
    132: ("You will have an opportunity to ask questions.", "질문할 기회가 있을 것입니다."),
    133: ("Cost has something to do with the decision.", "비용은 그 결정과 관련이 있습니다."),
    134: ("Increased production, in turn, leads into lower prices.", "생산 증가는 결과적으로(차례로) 가격 인하로 이어집니다."),
    135: ("We can make no exception to this rule.", "우리는 이 규칙에 예외를 둘 수 없습니다."),
    136: ("The event will be televised live.", "그 행사는 생중계로 방송될 것입니다.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d8p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day8_part3.json
with open('day8_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 8 Part 3 Created (Intermediate).")
