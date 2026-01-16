import pandas as pd
import json
import re

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 3 Part 4 : No. 137 ~ 168 (32 words) ---
part4_df = df[(df['Day'] == 3) & (df['No'] >= 137) & (df['No'] <= 168)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# PREMIUM BUSINESS TOEIC EXAMPLES (Day 3 Part 4)
toeic_examples_d3p4 = {
    137: ("Please arrange the new items on the shelf according to size.", "크기에 따라 선반에 신상품들을 배열해 주십시오."),
    138: ("She had to call in sick because she had a high fever.", "그녀는 고열이 나서 전화로 병결을 알려야 했습니다."),
    139: ("I need someone to cover my shift tomorrow because I have a doctor's appointment.", "병원 진료 예약이 있어서 내일 제 근무를 대신해 줄 사람이 필요합니다."),
    140: ("The manager oversees the day-to-day operation of the branch.", "매니저는 지점의 일상 업무를 감독합니다."),
    141: ("This policy is in line with strict government regulations.", "이 정책은 엄격한 정부 규제와 일치합니다(따릅니다)."),
    142: ("The mayor will officiate at the opening ceremony.", "시장이 개막식을 진행할 것입니다."),
    143: ("Please stay on the line; I will put you on hold for a moment.", "전화를 끊지 말고 기다려 주십시오; 잠시 통화 대기 상태로 두겠습니다."),
    144: ("After the meeting, we immediately set down to work on the project.", "회의가 끝난 후, 우리는 즉시 프로젝트 업무에 착수했습니다."),
    145: ("Security guards must stay awake during their night shift.", "경비원들은 야간 근무 중에 깨어 있어야 합니다."),
    146: ("Confidential documents were strewn all over the desk.", "기밀 서류들이 책상 위에 흩뿌려져 있었습니다."),
    147: ("Robots can never fully take the place of human workers.", "로봇은 결코 인간 노동자를 완전히 대신할 수 없습니다."),
    148: ("We take turns answering the customer service hotline.", "우리는 교대로 고객 서비스 직통 전화를 받습니다."),
    149: ("The construction project is currently three weeks behind schedule.", "그 건설 프로젝트는 현재 일정보다 3주 늦어졌습니다."),
    150: ("Can you condense this ten-page report into a one-page summary?", "이 10페이지짜리 보고서를 1페이지 요약본으로 간추려 줄 수 있습니까?"),
    151: ("I will follow up on your request and get back to you shortly.", "귀하의 요청에 대해 후속 조치를 취하고 곧 다시 연락드리겠습니다."),
    152: ("All formal complaints must be submitted in writing to the HR department.", "모든 공식적인 불만 사항은 인사부에 서면으로 제출되어야 합니다."),
    153: ("The company aims to popularize electric vehicles in the mass market.", "그 회사는 대중 시장에서 전기 자동차를 대중화하는 것을 목표로 합니다."),
    154: ("We need to use our resources more productively.", "우리는 자원을 더 생산적으로 사용해야 합니다."),
    155: ("I appreciate his sincerity in acknowledging the mistake.", "실수를 인정한 그의 정직함(성실함)에 감사합니다."),
    156: ("Efficient utilization of office space is essential.", "사무 공간의 효율적인 활용은 필수적입니다."),
    157: ("She handles administrative tasks such as filing and scheduling.", "그녀는 서류 정리 및 일정 관리와 같은 관리(행정) 업무를 처리합니다."),
    158: ("Make sure the hospital is affiliated with your insurance provider.", "병원이 귀하의 보험 제공업체와 제휴되어 있는지 확인하십시오."),
    159: ("The multinational conglomerate announced plans to acquire a local startup.", "그 다국적 거대 복합 기업은 지역 스타트업을 인수할 계획을 발표했습니다."),
    160: ("The borrower defaulted on the loan repayment.", "대출자는 대출금 상환을 불이행했습니다(태만했습니다)."),
    161: ("The company is preparing for the impending merger.", "그 회사는 임박한 합병을 준비하고 있습니다."),
    162: ("He is a strong proponent of renewable energy.", "그는 재생 에너지의 강력한 지지자입니다."),
    163: ("The proprietor of the shop decided to retire next year.", "그 상점의 소유자는 내년에 은퇴하기로 결정했습니다."),
    164: ("The architects conducted a site inspection before starting the design.", "건축가들은 설계를 시작하기 전에 현지 시찰을 수행했습니다."),
    165: ("Managers should encourage their subordinates to share ideas.", "관리자들은 부하 직원들이 아이디어를 공유하도록 장려해야 합니다."),
    166: ("The company established a new subsidiary in Asia.", "그 회사는 아시아에 새로운 자회사를 설립했습니다."),
    167: ("Employees are encouraged to take initiative in solving problems.", "직원들은 문제 해결에 있어 주도권을 잡도록(솔선하도록) 장려됩니다."),
    168: ("The company allows employees to telecommute two days a week.", "그 회사는 직원들이 일주일에 이틀 재택근무하는 것을 허용합니다.")
}

part4_data = []
for idx, row in part4_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d3p4.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part4_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 900,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day3_part4.json', 'w', encoding='utf-8') as f:
    json.dump(part4_data, f, ensure_ascii=False, indent=2)

print("✅ Day 3 Part 4 Created.")
