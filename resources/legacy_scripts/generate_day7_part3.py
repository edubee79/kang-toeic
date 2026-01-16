import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 7 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 7) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def clean_word(word):
    # Fix known CSV typos
    if word == "over the lnternet":
        return "over the Internet"
    return word

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 7 Part 3: Intermediate - STRICT BUSINESS CONTEXT)
toeic_examples_d7p3 = {
    69: ("The new packaging design is visually appealing to consumers.", "새로운 포장 디자인은 소비자들에게 시각적으로 매력적입니다."),
    70: ("Please submit all required documents at once to expedite processing.", "처리를 신속하게 하기 위해 모든 필수 서류를 즉시(한꺼번에) 제출해 주십시오."),
    71: ("We cannot give a definite answer until the budget is approved.", "예산이 승인될 때까지는 확답을 드릴 수 없습니다."),
    72: ("It is difficult to distinguish the original from the copy.", "원본과 사본을 구별하기 어렵습니다."),
    73: ("The chef showed extraordinary culinary skills at the banquet.", "그 쉐프는 연회에서 이례적으로 훌륭한 요리 솜씨를 보여주었습니다."),
    74: ("This voucher is good for one complimentary meal at the cafeteria.", "이 상품권은 구내식당에서 무료 식사 1회에 유효합니다."),
    75: ("The landscaping is beautiful when the flowers are in bloom.", "꽃이 만개했을 때 조경이 아름답습니다. (Part 7 시설 묘사)"),
    76: ("I am writing in reference to the job opening posted on your website.", "귀하의 웹사이트에 게시된 채용 공고와 관련하여 이 글을 씁니다."),
    77: ("Local vendors sell fresh produce at the market stall.", "지역 상인들이 시장 가판대에서 신선한 농산물을 팝니다."),
    78: ("The printer's paper feed mechanism needs repair.", "프린터의 종이 급지 장치(메커니즘)에 수리가 필요합니다."),
    79: ("We provide delivery services throughout the metropolitan area.", "우리는 대도시 지역 전역에 배송 서비스를 제공합니다."),
    80: ("The office will be closed on Monday in observance of a national holiday.", "국경일을 준수하여 월요일에 사무실 문을 닫을 것입니다."),
    81: ("Everything is proceeding on schedule for the product launch.", "제품 출시를 위해 모든 것이 예정대로 진행되고 있습니다."),
    82: ("Customers can conveniently pay bills over the Internet.", "고객들은 인터넷을 통해 편리하게 요금을 납부할 수 있습니다."),
    83: ("Journalists were invited to a preview of the new exhibition.", "기자들이 새 전시회의 시사회에 초대되었습니다."),
    84: ("The architectural model is on public display in the lobby.", "건축 모형이 로비에 공개 전시되어 있습니다."),
    85: ("We will run a campaign to promote energy conservation.", "우리는 에너지 절약을 장려하기 위한 캠페인을 벌일 것입니다."),
    86: ("All clerks are currently busy serving customers.", "모든 점원이 현재 손님을 응대하느라 바쁩니다."),
    87: ("The invitation extends to employees and their spouses.", "초대는 직원들과 그 배우자들에게까지 확대됩니다."),
    88: ("Please ensure the shipping crate is not placed upside down.", "배송 상자가 거꾸로 놓이지 않도록 해 주십시오."),
    89: ("Beverages are available from the vending machine in the hallway.", "음료는 복도에 있는 자동판매기에서 이용 가능합니다."),
    90: ("ID badges must be clearly visible at all times.", "ID 배지는 항상 명확하게 보여야 합니다."),
    91: ("We focused on quality as opposed to quantity.", "우리는 양과는 대조적으로 질에 집중했습니다."),
    92: ("The CEO boldly announced a plan to acquire the competitor.", "CEO는 경쟁사를 인수할 계획을 대담하게 발표했습니다."),
    93: ("We may call on external consultants for specialized advice.", "우리는 전문적인 조언을 위해 외부 컨설턴트를 부를(요청할) 수도 있습니다."),
    94: ("The quoted price is $200, excluding shipping charges.", "견적가는 배송비를 제외하고 200달러입니다."),
    95: ("Improvements in healthcare have raised life expectancy.", "의료 서비스의 개선이 기대 수명을 높였습니다."),
    96: ("He forgetfully omitted the attachment from the email.", "그는 깜빡 잊고 이메일에서 첨부 파일을 빠뜨렸습니다."),
    97: ("There has been a noteworthy increase in online sales.", "온라인 판매에 있어 주목할 만한 증가가 있었습니다."),
    98: ("We want to change the public perception of our brand.", "우리는 우리 브랜드에 대한 대중의 인식을 바꾸고 싶습니다."),
    99: ("The new regulations are potentially damaging to small businesses.", "새로운 규정은 소기업들에게 잠재적으로 해로울 수 있습니다."),
    100: ("We stock a complete line of office supplies.", "우리는 사무용품 전 제품 라인을 갖추고 있습니다."),
    101: ("Ms. Lee was happy to accept the job offer.", "이 씨는 일자리 제안을 수락하게 되어 기뻐했습니다."),
    102: ("The technology has advanced astonishingly fast.", "기술은 놀라울 정도로 빠르게 발전했습니다."),
    103: ("The hotel is noted for its exceptional service.", "그 호텔은 탁월한 서비스로 유명합니다."),
    104: ("You must submit a claim for reimbursement within 30 days.", "30일 이내에 상환 청구서를 제출해야 합니다."),
    105: ("We placed a classified ad to hire part-time staff.", "우리는 아르바이트 직원을 고용하기 위해 짧은 신문 광고(분류 광고)를 냈습니다."),
    106: ("The report is a compilation of data from various sources.", "그 보고서는 다양한 출처의 데이터 편집물입니다."),
    107: ("The legal terms should be made comprehensible to laypeople.", "법률 용어는 비전문가도 이해할 수 있게 만들어져야 합니다."),
    108: ("Industry experts criticized the hasty decision.", "업계 전문가들은 그 성급한 결정을 비판했습니다."),
    109: ("The company was accused of illegal dumping of waste.", "그 회사는 불법 폐기물 투기(덤핑)로 고발당했습니다."),
    110: ("Customer satisfaction is our first priority.", "고객 만족은 우리의 최우선 사항입니다."),
    111: ("The contract offers services at a fixed price.", "그 계약은 정가(고정 가격)로 서비스를 제공합니다."),
    112: ("Managers have control over the department budget.", "관리자들은 부서 예산에 대한 통제권을 가집니다."),
    113: ("There is little chance of recovering the lost data.", "손실된 데이터를 복구할 확률은 거의 없습니다."),
    114: (" The board voted in favor of the merger proposal.", "이사회는 합병 제안에 찬성하여 투표했습니다."),
    115: ("Please keep us informed of the project's status.", "프로젝트 현황에 대해 계속 알려주십시오."),
    116: ("The auditor will make an assessment of the financial records.", "감사관이 재무 기록에 대한 평가를 내릴 것입니다."),
    117: ("The negotiator attempted to mediate the labor dispute.", "협상가는 노사 분쟁을 중재하려고 시도했습니다."),
    118: ("We use secure servers to minimize the risk of data theft.", "우리는 데이터 도난 위험을 최소화하기 위해 보안 서버를 사용합니다."),
    119: ("Profits increased modestly in the third quarter.", "3분기에 수익이 겸손하게(소폭) 증가했습니다."),
    120: ("We faced persistent technical problems with the server.", "우리는 서버와 관련된 끊임없는 기술적 문제에 직면했습니다."),
    121: ("The charity event generated a lot of positive publicity.", "그 자선 행사는 많은 긍정적인 선전(홍보) 효과를 냈습니다."),
    122: ("The official release date has been postponed.", "공식 발표 일시가 연기되었습니다."),
    123: ("Companies must upgrade technology to stay competitive.", "기업들은 경쟁력을 유지하기 위해 기술을 업그레이드해야 합니다."),
    124: ("There is a striking difference in their management styles.", "그들의 경영 스타일에는 두드러지는 차이점이 있습니다."),
    125: ("Customizing the software may take a long time.", "소프트웨어를 커스터마이징하는 것은 오래 걸릴 수 있습니다."),
    126: ("Management agreed to take action on the complaints.", "경영진은 불만 사항에 대해 조치를 취하기로 동의했습니다."),
    127: ("Please do not infringe on our registered trademark.", "우리의 등록 상표를 침해하지 마십시오."),
    128: ("Small businesses often turn to banks for financing.", "소기업들은 자금 조달을 위해 종종 은행에 의지합니다."),
    129: ("Such delays are unacceptable to our clients.", "그러한 지연은 우리 고객들이 받아들일 수 없습니다."),
    130: ("Please verify the shipment details before signing.", "서명하기 전에 배송 세부 사항을 확인(증명)해 주십시오."),
    131: ("The store is open daily with the exception of Sunday.", "그 가게는 일요일을 제외하고 매일 엽니다."),
    132: ("Rates are subject to change without notice.", "요금은 예고 없이 변경될 수 있습니다. (빈출 고지 문구)"),
    133: ("Protective gear is an essential piece of equipment.", "보호 장구는 필수적인 장비 하나입니다."),
    134: ("Winners will be selected randomly from all entries.", "당첨자는 모든 참가작 중에서 무작위로 선정될 것입니다."),
    135: ("The candidate is suitable for the managerial position.", "그 후보자는 관리직에 적합합니다."),
    136: ("The company made an all-out effort to meet the deadline.", "회사는 마감 기한을 맞추기 위해 총력을 다했습니다.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    word_cleaned = clean_word(str(row['Word']))
    ex_en, ex_ko = toeic_examples_d7p3.get(no, (f"Example for {word_cleaned}", f"{row['Meaning']} 예문"))
    
    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': word_cleaned,
        'meaning': cleaned_meaning,
        'targetScore': 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day7_part3.json
with open('day7_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 7 Part 3 Created (Corrected).")
