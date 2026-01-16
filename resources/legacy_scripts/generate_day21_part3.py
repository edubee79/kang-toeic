import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 21 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 21) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 21 Part 3: Intermediate Business & Development)
# Focus: "Hyper-TOEIC" (Business Growth, Operations, Corporate Issues)
toeic_examples_d21p3 = {
    69: ("The polished surface reflects light beautifully.", "광택이 나는 표면은 빛을 아름답게 반사합니다."),
    70: ("The apartment has a large storage unit.", "그 아파트에는 큰 창고(저장 단위)가 하나 있습니다."),
    71: ("The company went bankrupt during the recession.", "그 회사는 불황기 동안 파산했습니다."),
    72: ("Many small businesses filed for bankruptcy.", "많은 중소기업들이 파산을 신청했습니다."),
    73: ("I am not in a position to comment on the matter.", "저는 그 문제에 대해 논평할 입장에 있지 않습니다."),
    74: ("We held a celebratory dinner for the team.", "우리는 팀을 위한 축하 저녁 식사를 열었습니다."),
    75: ("They sat and conversed for hours.", "그들은 앉아서 몇 시간 동안 대화했습니다."),
    76: ("There is a crack in the windshield.", "앞유리에 금(틈)이 있습니다."),
    77: ("The lobby serves as a gathering space for guests.", "로비는 손님들을 위한 모임 장소 역할을 합니다."),
    78: ("The hotel room has a good view of the ocean.", "그 호텔 객실은 바다 전망이 좋습니다."),
    79: ("We made a last-minute change to the schedule.", "우리는 막바지에(마지막 순간에) 일정을 변경했습니다."),
    80: ("The committee will look into the complaints.", "위원회는 불만 사항들을 조사할 것입니다."),
    81: ("Look out for cars when crossing the street.", "길을 건널 때 차를 조심하십시오."),
    82: ("The store specializes in imported luxury goods.", "그 가게는 수입 사치품(명품)을 전문으로 합니다."),
    83: ("Subscribe to our newsletter for updates.", "최신 소식을 보려면 우리 회보를 구독하십시오."),
    84: ("Building A occupies the corner lot.", "A동은 코너 부지를 차지하고 있습니다."),
    85: ("We are committed to providing quality service.", "우리는 고급(양질의) 서비스를 제공하는 데 전념하고 있습니다."),
    86: ("He achieved renown as a brilliant architect.", "그는 뛰어난 건축가로서 명성을 얻었습니다."),
    87: ("The company has a reputation for reliability.", "그 회사는 신뢰성으로 평판이 나 있습니다."),
    88: ("The athlete hopes to set a record at the Olympics.", "그 선수는 올림픽에서 기록을 세우기를 희망합니다."),
    89: ("Drowsiness is a common side effect of the medication.", "졸음은 그 약의 흔한 부작용입니다."),
    90: ("The spokesperson briefed the press.", "대변인은 언론에 브리핑했습니다."),
    91: ("Please spread the word about our charity event.", "우리 자선 행사에 대해 말을 퍼뜨려(소문 내) 주십시오."),
    92: ("We need to make an alteration to the design.", "우리는 디자인에 변화(수정)를 주어야 합니다."),
    93: ("The highly anticipated movie will be released tomorrow.", "기대하던(대망의) 영화가 내일 개봉될 것입니다."),
    94: ("He tried to disguise his voice.", "그는 목소리를 가장하려고(숨기려고) 했습니다."),
    95: ("The company is going through a restructuring process.", "그 회사는 구조 조정 과정을 겪고 있습니다."),
    96: ("The road inclines steeply up the hill.", "길이 언덕 위로 가파르게 기울어져 있습니다."),
    97: ("The project has been postponed indefinitely.", "그 프로젝트는 무기한으로 연기되었습니다."),
    98: ("Innovation is key to staying competitive.", "혁신은 경쟁력을 유지하는 열쇠입니다."),
    99: ("The equipment is outdated and needs replacing.", "그 장비는 구식이고 교체가 필요합니다."),
    100: ("From a legal perspective, the contract is valid.", "법적 시각(관점)에서, 그 계약은 유효합니다."),
    101: ("We have a progressive approach to management.", "우리는 경영에 대해 진보적인 접근 방식을 가지고 있습니다."),
    102: ("A public hearing will be held regarding the zoning laws.", "구역 지정 법률에 관한 공청회가 열릴 것입니다."),
    103: ("We should pursue new business opportunities.", "우리는 새로운 사업 기회를 추구해야 합니다."),
    104: ("It was a sensible decision given the circumstances.", "상황을 고려할 때 그것은 분별 있는(합리적인) 결정이었습니다."),
    105: ("We formed a strategic alliance with our partner.", "우리는 파트너와 전략적 제휴를 맺었습니다."),
    106: ("Please turn over the page.", "페이지를 뒤집어 주십시오."),
    107: ("The project required a great deal of effort.", "그 프로젝트는 다량의(많은) 놑력을 필요로 했습니다."),
    108: ("He serves in an advisory capacity.", "그는 자문 자격으로 일합니다."),
    109: ("I happened to bump into an old friend.", "저는 우연히 옛 친구를 만났습니다."),
    110: ("They issued a commemorative coin.", "그들은 기념 주화를 발행했습니다."),
    111: ("There is a correlation between smoking and lung cancer.", "흡연과 폐암 사이에는 상호 관계가 있습니다."),
    112: ("The investigation revealed widespread corruption.", "조사는 만연한 부정 부패를 밝혔습니다."),
    113: ("We are entering a new era of technology.", "우리는 기술의 새로운 시대로 진입하고 있습니다."),
    114: ("Do not exaggerate the importance of this issue.", "이 문제의 중요성을 과장하지 마십시오."),
    115: ("It is one of the fast-growing companies in the region.", "그것은 그 지역에서 급성장하는 회사 중 하나입니다."),
    116: ("High taxes can hinder economic growth.", "높은 세금은 경제 성장을 방해할 수 있습니다."),
    117: ("The city has over 1 million inhabitants.", "그 도시는 100만 명 이상의 거주자가 있습니다."),
    118: ("The house is not fit for inhabitation.", "그 집은 거주에 적합하지 않습니다."),
    119: ("His reaction was purely instinctive.", "그의 반응은 순전히 본능적이었습니다."),
    120: ("The village is isolated from the main road.", "그 마을은 주요 도로에서 고립되어 있습니다."),
    121: ("Electronic waste should not be sent to a landfill.", "전자 폐기물은 쓰레기 매립지로 보내져서는 안 됩니다."),
    122: ("We aim to increase our market share.", "우리는 시장 점유율을 높이는 것을 목표로 합니다."),
    123: ("She meditated on the problem for days.", "그녀는 며칠 동안 그 문제에 대해 숙고했습니다."),
    124: ("The merger created the world's largest airline.", "그 합병은 세계 최대의 항공사를 만들었습니다."),
    125: ("The workers have been on strike for a week.", "노동자들은 일주일 동안 파업 중입니다."),
    126: ("We organize community outreach programs.", "우리는 지역 사회 봉사 활동 프로그램을 조직합니다."),
    127: ("An oversized load requires a special permit.", "너무 큰(규격 초과) 화물은 특별 허가가 필요합니다."),
    128: ("The department is currently overstaffed.", "그 부서는 현재 필요 이상의 직원을 두고 있습니다(인원 과잉입니다)."),
    129: ("Don't act rashly without thinking.", "생각 없이 경솔하게 행동하지 마십시오."),
    130: ("We have regional offices across the country.", "우리는 전국에 지역 사무소들을 가지고 있습니다."),
    131: ("We cannot rule out the possibility of a delay.", "우리는 지연 가능성을 배제할 수 없습니다."),
    132: ("He is a visiting scholar at the university.", "그는 그 대학의 객원 학자입니다."),
    133: ("The hotel room was spotless.", "호텔 방은 아주 깨끗했습니다(흠 잡을 데 없었습니다)."),
    134: ("What does the abbreviation stand for?", "그 약어는 무엇을 상징합니까(의미합니까)?"),
    135: ("The union called for a strike.", "노조는 동맹 파업을 요구했습니다."),
    136: ("Small businesses struggle to survive.", "중소기업들은 생존하기 위해 애를 씁니다(분투합니다).")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d21p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day21_part3.json
with open('day21_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 21 Part 3 Created (Intermediate Business).")
