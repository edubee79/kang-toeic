import pandas as pd
import json
import re

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 2 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 2) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

# Function to clean meaning text
def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# High-quality TOEIC examples mapped to verified No. 69-136 words
toeic_examples_d2p3 = {
    69: ("Driving without a license is against the law.", "면허 없이 운전하는 것은 법에 위반됩니다."),
    70: ("We must finish this project by all means.", "우리는 무슨 일이 있어도 이 프로젝트를 끝내야 합니다."),
    71: ("I deleted the file by mistake.", "저는 실수로 그 파일을 삭제했습니다."),
    72: ("The contract will come to an end next month.", "계약은 다음 달에 끝날 것입니다."),
    73: ("Please familiarize yourself with the company regulations.", "회사 규정을 숙지해 주십시오."),
    74: ("The manager gave directions on how to proceed.", "매니저는 진행 방법에 대해 지시를 내렸습니다."),
    75: ("The pillars hold up the roof.", "기둥들이 지붕을 떠받치고 있습니다."),
    76: ("If I'm not mistaken, the meeting is at 2 PM.", "제 기억이 옳다면, 회의는 오후 2시입니다."),
    77: ("Construction is currently in progress.", "공사가 현재 진행 중입니다."),
    78: ("Please keep in mind that the deadline is tomorrow.", "마감일이 내일이라는 것을 명심하십시오."),
    79: ("The company sought legal counsel regarding the lawsuit.", "그 회사는 소송에 관해 법률 상담을 구했습니다."),
    80: ("He acted in self-defense.", "그는 정당방위로 행동했습니다."),
    81: ("The police questioned the suspect.", "경찰은 용의자를 심문했습니다."),
    82: ("You should take his advice seriously.", "당신은 그의 충고를 진지하게 받아들이는 것이 좋습니다."),
    83: ("The new tax law works to our advantage.", "새로운 세법은 우리에게 유리하게 작용합니다."),
    84: ("The situation is now under control.", "상황은 이제 통제되고 있습니다."),
    85: ("The project was completed under the supervision of the director.", "그 프로젝트는 이사의 감독하에 완료되었습니다."),
    86: ("The abuse of power will not be tolerated.", "권력 남용은 용납되지 않을 것입니다."),
    87: ("Security guards must remain alert at all times.", "보안 요원들은 항상 주의를 기울여야 합니다."),
    88: ("The committee conducted an assessment of the risks.", "위원회는 위험 평가를 수행했습니다."),
    89: ("Badges must be worn at all times.", "배지는 항상 착용해야 합니다."),
    90: ("You need authorization to access this area.", "이 구역에 접근하려면 권한 부여가 필요합니다."),
    91: ("I have some questions concerning the new policy.", "새로운 정책에 관해 몇 가지 질문이 있습니다."),
    92: ("Please take my proposal into consideration.", "제 제안을 고려해 주십시오."),
    93: ("He became defensive when asked about the mistake.", "그는 실수에 대해 질문을 받자 방어적인 태도를 보였습니다."),
    94: ("The book provides a realistic depiction of office life.", "그 책은 직장 생활에 대한 현실적인 묘사를 제공합니다."),
    95: ("The disobedient employee was given a warning.", "반항적인 직원에게 경고가 주어졌습니다."),
    96: ("We cannot endure these difficult conditions any longer.", "우리는 더 이상 이런 어려운 상황을 견딜 수 없습니다."),
    97: ("She received an award for her exemplary service.", "그녀는 모범적인 복무로 상을 받았습니다."),
    98: ("Do not ignore the safety warnings.", "안전 경고를 무시하지 마십시오."),
    99: ("It is illegal to park here.", "여기에 주차하는 것은 불법입니다."),
    100: ("The product was manufactured in accordance with safety standards.", "그 제품은 안전 기준에 따라 제조되었습니다."),
    101: ("The manager was indecisive about the hiring.", "매니저는 채용에 대해 우유부단했습니다."),
    102: ("He was justly punished for his crimes.", "그는 자신의 범죄에 대해 정당하게 처벌받았습니다."),
    103: ("Soldiers must obey orders.", "군인은 명령에 복종해야 합니다."),
    104: ("The observance of these rules is mandatory.", "이 규칙들의 준수는 의무적입니다."),
    105: ("We provide on-site training for new employees.", "우리는 신입 사원을 위해 현장 교육을 제공합니다."),
    106: ("There is a severe penalty for late payments.", "연체 시 엄격한 벌금이 부과됩니다."),
    107: ("He made some pointed remarks about the management.", "그는 경영진에 대해 몇 가지 날카로운 지적을 했습니다."),
    108: ("Time is a precious resource.", "시간은 귀중한 자원입니다."),
    109: ("We adhere to the principle of equal opportunity.", "우리는 기회균등의 원칙을 고수합니다."),
    110: ("The punishment should fit the crime.", "처벌은 범죄에 상응해야 합니다."),
    111: ("The government creates laws to regulate the market.", "정부는 시장을 규제하기 위해 법을 만듭니다."),
    112: ("This is a restricted area.", "이곳은 제한 구역입니다."),
    113: ("There are strict restrictions on imports.", "수입에 대한 엄격한 제한이 있습니다."),
    114: ("The factory passed the safety inspection.", "그 공장은 안전 점검을 통과했습니다."),
    115: ("The government tried to suppress the news.", "정부는 그 뉴스를 억압하려고 시도했습니다."),
    116: ("The employees waited tensely for the announcement.", "직원들은 발표를 긴장하며 기다렸습니다."),
    117: ("Unauthorized access is prohibited.", "인가받지 않은 접근은 금지되어 있습니다."),
    118: ("With respect to your request, we are still reviewing it.", "귀하의 요청에 관해서는, 저희가 아직 검토 중입니다."),
    119: ("He was accused of theft.", "그는 절도 혐의로 고소당했습니다."),
    120: ("We need to assess the value of the property.", "우리는 그 부동산의 가치를 평가해야 합니다."),
    121: ("You should consult an attorney before signing.", "서명하기 전에 변호사와 상의해야 합니다."),
    122: ("He will be absent from the meeting today.", "그는 오늘 회의에 결석할 것입니다."),
    123: ("Guests are not allowed to smoke in the rooms.", "투숙객은 객실 내에서 흡연이 허용되지 않습니다."),
    124: ("We solved the problem by way of negotiation.", "우리는 협상을 통해 문제를 해결했습니다." ),
    125: ("His inconsistent behavior caused distrust among the team.", "그의 일관성 없는 행동은 팀 내 불신을 야기했습니다."),
    126: ("From this day onward, the new rules apply.", "오늘부터 새로운 규칙이 적용됩니다."),
    127: ("Do I have permission to leave early?", "제가 일찍 떠나도 될까요(허가를 받았나요)?"),
    128: ("The rules are enforced in a strict way.", "규칙은 엄격하게 시행됩니다."),
    129: ("Please make clear what you expect from us.", "우리에게 무엇을 기대하는지 분명히 해 주세요."),
    130: ("The Ministry of Finance announced the new budget.", "재무부는 새로운 예산을 발표했습니다."),
    131: ("The newly established branch will open next month.", "신설된 지점은 다음 달에 문을 열 것입니다."),
    132: ("The changes will be put into effect immediately.", "변경 사항은 즉시 시행될 것입니다."),
    133: ("Please bring your registration confirmation.", "등록 확인서를 지참해 주십시오."),
    134: ("Don't stand over me while I'm working.", "내가 일하는 동안 옆에서 지켜보지 마세요."),
    135: ("I must warn you about the risks.", "당신에게 위험에 대해 경고해야 합니다."),
    136: ("We hire candidates without respect to their background.", "우리는 배경을 고려하지 않고 지원자를 채용합니다.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d2p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    # Custom post-processing for better readability if needed
    if no == 129 and "clear" in row['Word']: # make clear case
         pass

    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day2_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 2 Part 3 Created.")
