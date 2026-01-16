import pandas as pd
import json
import re

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 4 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 4) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 4 Part 2)
toeic_examples_d4p2 = {
    41: ("The workshop aims to foster a positive work environment.", "그 워크숍은 긍정적인 업무 환경을 조성하는(육성하는) 것을 목표로 합니다."),
    42: ("The mediator maintained neutrality throughout the negotiation.", "중재자는 협상 내내 중립성을 유지했습니다."),
    43: ("The new software is widely used by graphic designers.", "그 새 소프트웨어는 그래픽 디자이너들에 의해 널리 사용됩니다."),
    44: ("The position will be advertised externally as well as internally.", "그 직책은 내부뿐만 아니라 외부적으로도 광고될 것입니다."),
    45: ("Please organize the binders on the bookcase.", "바인더들을 책장에 정리해 주십시오."),
    46: ("There is no more space on the bookshelf for these manuals.", "이 매뉴얼들을 꽂을 공간이 책꽂이에 더 이상 없습니다."),
    47: ("In case of emergency, please press the alarm button.", "비상 상황(경우)에는 알람 버튼을 눌러 주십시오."),
    48: ("All reports must be submitted to the central office by Friday.", "모든 보고서는 금요일까지 중앙 사무실로 제출되어야 합니다."),
    49: ("The copy machine is out of toner again.", "복사기에 또 토너가 떨어졌습니다."),
    50: ("Can you fax this document to the legal department?", "이 문서를 법무팀에 팩스로 보내 주시겠습니까?"),
    51: ("Please put these contracts in the blue file folder.", "이 계약서들을 파란색 서류철에 넣어 주십시오."),
    52: ("The receptionist greets visitors with a warm smile.", "접수원은 따뜻한 미소로 방문객들을 맞이합니다(인사합니다)."),
    53: ("His handwriting is legible and easy to read.", "그의 글씨는 알아보기 쉽고 읽기 편합니다."),
    54: ("Please enter your pin number on the keypad.", "키패드에 귀하의 비밀번호를 입력해 주십시오."),
    55: ("Use a utility knife to open the box carefully.", "상자를 조심스럽게 열기 위해 커터 칼을 사용하십시오."),
    56: ("You need a secure password to log on to the server.", "서버에 로그인하려면 보안 비밀번호가 필요합니다."),
    57: ("You can access your bank account online 24/7.", "귀하는 연중무휴 24시간 온라인으로 은행 계좌에 접속할 수 있습니다."),
    58: ("The photocopier is currently under repair.", "복사기는 현재 수리 중입니다."),
    59: ("Could you make a photocopy of this passport for me?", "이 여권 복사본을 하나 만들어 주시겠습니까?"),
    60: ("I will print out the agenda for the meeting.", "회의 안건을 출력하겠습니다."),
    61: ("I will handle that request right away.", "제가 그 요청을 지금 당장(즉시) 처리하겠습니다."),
    62: ("Could you spell your last name for me?", "귀하의 성의 철자를 말씀해 주시겠습니까?"),
    63: ("Please wrap the fragile items in bubble wrap.", "파손되기 쉬운 물품은 뽁뽁이로 감싸 주십시오."),
    64: ("Please fold the brochures and place them in envelopes.", "브로슈어를 접어서 봉투에 넣어 주십시오."),
    65: ("That is the least we can do for you.", "그것이 우리가 당신을 위해 할 수 있는 최소한의 것입니다."),
    66: ("Do you have any scrap paper I can write on?", "제가 쓸 수 있는 이면지(종이)가 좀 있습니까?"),
    67: ("Strategic planning is essential for long-term success.", "전략적 기획은 장기적인 성공을 위해 필수적입니다."),
    68: ("The job opening has been posted on the company website.", "채용 공고가 회사 웹사이트에 게시되었습니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d4p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day4_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 4 Part 2 Created.")
