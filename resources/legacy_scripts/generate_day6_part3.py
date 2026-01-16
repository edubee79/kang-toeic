import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 6 Part 3 : No. 69 ~ 136 (68 words) ---
# Strict Range: 69-136
# Target Score: 800 (Intermediate)
part3_df = df[(df['Day'] == 6) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 6 Part 3: Intermediate Business & Leisure)
# Themes: Business Operations, Office Life, Events, Travel, Facilities
toeic_examples_d6p3 = {
    69: ("The restaurant offers a varied menu to suit all tastes.", "그 식당은 모든 취향에 맞는 다양한 메뉴를 제공합니다."),
    70: ("We went sightseeing around the historic city center.", "우리는 역사적인 도심 주변을 관광하러 갔습니다."),
    71: ("The company picnic will be held at a local amusement park.", "회사 야유회는 지역 놀이공원에서 열릴 것입니다."),
    72: ("The museum specializes in artifacts from ancient history.", "그 박물관은 고대 역사의 공예품을 전문으로 합니다."),
    73: ("This pottery is a rare artifact from the Joseon Dynasty.", "이 도자기는 조선 시대의 희귀한 공예품입니다."),
    74: ("The quarterly meeting will take place in the main auditorium.", "분기별 회의는 대강당에서 열릴 것입니다. (Part 7 빈출)"),
    75: ("I'm afraid the flights for that weekend are completely booked up.", "유감스럽게도 그 주말 항공편은 완전히 매진되었습니다. (Part 3 빈출)"),
    76: ("Tickets can be purchased at the box office or online.", "티켓은 매표소나 온라인에서 구매할 수 있습니다."),
    77: ("She always greets customers with a cheerful smile.", "그녀는 항상 쾌활한 미소로 고객들을 맞이합니다."),
    78: ("The choir will perform at the charity event.", "합창단이 자선 행사에서 공연할 것입니다."),
    79: ("We need to entertain the visiting clients tonight.", "우리는 오늘 밤 방문한 고객들을 접대해야 합니다."),
    80: ("The flower arrangement in the lobby is beautiful.", "로비의 꽃꽂이가 아름답습니다."),
    81: ("Gardener is planting tulips in the flower bed.", "정원사가 화단에 튤립을 심고 있습니다. (Part 1 빈출)"),
    82: ("Would you like to go to a film with me this Friday?", "이번 주 금요일에 저와 함께 영화 보러 가시겠습니까?"),
    83: ("Please keep a firm grip on the handrail for safety.", "안전을 위해 난간을 꽉 잡으십시오. (Part 1 빈출)"),
    84: ("The cyclists will have a race tomorrow morning.", "사이클 선수들은 내일 아침에 경주를 할 것입니다."),
    85: ("Residents often jog along the street near the river.", "주민들은 종종 강 근처 길을 따라 조깅합니다."),
    86: ("Learning a musical instrument can boost creativity.", "악기를 배우는 것은 창의성을 높일 수 있습니다."),
    87: ("He is holding an oar to row the boat.", "그는 배를 젓기 위해 노를 잡고 있습니다. (Part 1 빈출)"),
    88: ("An oil painting was stolen from the gallery.", "유화 한 점이 갤러리에서 도난당했습니다."),
    89: ("The hotel has a heated outdoor swimming pool.", "그 호텔에는 온수 야외 수영장이 있습니다."),
    90: ("They are using paddles to move the canoe.", "그들은 카누를 움직이기 위해 노를 사용하고 있습니다. (Part 1 빈출)"),
    91: ("The movie premiere will be attended by the director.", "영화 시사회에는 감독이 참석할 것입니다."),
    92: ("We need to rake leaves in the garden this weekend.", "우리는 이번 주말에 정원에서 낙엽을 긁어모아야 합니다."),
    93: ("The community center offers various recreational activities.", "커뮤니티 센터는 다양한 오락 활동을 제공합니다."),
    94: ("Consumers have the right to return defective products.", "소비자는 결함이 있는 제품을 반품할 권리가 있습니다."),
    95: ("The running time of the documentary is 90 minutes.", "그 다큐멘터리의 상영 시간은 90분입니다."),
    96: ("They plan to sail a boat across the Atlantic.", "그들은 보트를 타고 대서양을 횡단할 계획입니다."),
    97: ("Children slide down the slide in the playground.", "아이들이 놀이터에서 미끄럼틀을 타고 내려옵니다."),
    98: ("Cars splashed water on the pedestrians.", "자동차들이 보행자들에게 물을 튀겼습니다."),
    99: ("The city will host a tennis sport tournament next month.", "시는 다음 달에 테니스 대회를 주최할 것입니다."),
    100: ("The new baseball stadium has a seating capacity of 50,000.", "새 야구 경기장은 5만 명의 좌석 수용 능력을 갖추고 있습니다."),
    101: ("I had to stay up all night to finish the report.", "저는 보고서를 끝내기 위해 밤을 새워야 했습니다."),
    102: ("Couple is strolling along the beach.", "커플이 해변을 따라 거닐고 있습니다. (Part 1 빈출)"),
    103: ("Let's take a break and resume the meeting in 10 minutes.", "잠시 휴식을 취하고 10분 후에 회의를 재개합시다."),
    104: ("I usually take my dog for a walk in the evening.", "저는 보통 저녁에 개를 산책시킵니다."),
    105: ("May I take a photograph of this exhibit?", "이 전시품의 사진을 찍어도 되겠습니까?"),
    106: ("She decided to take a walk to clear her mind.", "그녀는 머리를 식히기 위해 산책하기로 했습니다."),
    107: ("He takes great pleasure in mentoring young employees.", "그는 젊은 직원들을 멘토링하는 것에서 큰 즐거움을 찾습니다."),
    108: ("The photographer will touch up the photograph digitally.", "사진작가는 사진을 디지털 방식으로 수정할 것입니다."),
    109: ("The travel agency offers an all-inclusive vacation package.", "그 여행사는 포괄적인 휴가 패키지를 제공합니다."),
    110: ("Customers are waiting for seats in the reception area.", "고객들이 접수처에서 자리를 기다리고 있습니다."),
    111: ("Some people are waiting in line to buy tickets.", "몇몇 사람들이 표를 사기 위해 줄을 서서 기다리고 있습니다. (Part 1 빈출)"),
    112: ("Please water the plants while I am on vacation.", "제가 휴가 중인 동안 화초에 물을 주십시오."),
    113: ("The clown tried to amuse the children.", "광대는 아이들을 즐겁게 해주려고 노력했습니다."),
    114: ("The building has great artistic value.", "그 건물은 큰 예술적 가치를 지니고 있습니다."),
    115: ("The company plans to donate a portion of profits to charity.", "회사는 이익의 일부를 자선 단체에 기부할 계획입니다."),
    116: ("He attended the meeting even though he was sick.", "그는 아팠음에도 불구하고 회의에 참석했습니다."),
    117: ("New products will be on exhibit at the trade fair.", "신제품들이 무역 박람회에 전시될 것입니다."),
    118: ("We offer free admission to children under 12.", "12세 미만 어린이에게는 무료입장을 제공합니다."),
    119: ("Please make yourself at home while you wait.", "기다리시는 동안 편히 계십시오."),
    120: ("The municipal government approved the new construction project.", "시 정부는 새 건설 프로젝트를 승인했습니다."),
    121: ("The balance owed must be paid by the end of the month.", "잔액은 이달 말까지 지불되어야 합니다."),
    122: ("Several employees have complained about the noise.", "몇몇 직원들이 소음에 대해 불평했습니다."),
    123: ("Thousands of spectators gathered to watch the game.", "수천 명의 관중이 경기를 보기 위해 모였습니다."),
    124: ("The usher guided the guests to their seats.", "좌석 안내원이 손님들을 자리로 안내했습니다."),
    125: ("Our team aims to win the contest this year.", "우리 팀은 올해 대회에서 우승하는 것을 목표로 합니다."),
    126: ("Admission to the museum regarding students is free.", "학생들의 박물관 입장은 무료입니다."),
    127: ("Each contestant must perform for five minutes.", "각 경쟁자는 5분 동안 공연해야 합니다."),
    128: ("It is a delight to welcome you to our headquarters.", "저희 본사에 여러분을 모시게 되어 기쁩니다."),
    129: ("She is doing her hair in front of the mirror.", "그녀는 거울 앞에서 머리를 손질하고 있습니다."),
    130: ("We hope you have an enjoyable stay at our hotel.", "저희 호텔에서 즐거운 체류 되시기를 바랍니다."),
    131: ("We offer a special group rate for parties of ten or more.", "10인 이상의 단체에는 특별 단체 요금을 제공합니다."),
    132: ("After the meeting, we will head for the restaurant.", "회의 후에 우리는 식당으로 향할 것입니다."),
    133: ("The elevator is currently out of order.", "엘리베이터는 현재 고장 중입니다. (Part 7 빈출)"),
    134: ("The library subscribes to various periodicals.", "그 도서관은 다양한 정기 간행물을 구독합니다."),
    135: ("The school has a large playing field for sports.", "그 학교에는 스포츠를 위한 넓은 운동장이 있습니다."),
    136: ("You must register for the seminar by Friday.", "금요일까지 세미나에 등록해야 합니다.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d6p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day6_part3.json
with open('day6_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 6 Part 3 Created.")
