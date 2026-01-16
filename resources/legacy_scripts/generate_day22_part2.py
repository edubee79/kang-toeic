import pandas as pd
import json
import re

# Load Data
df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 22 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 22) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 22 Part 2: Business Meetings & Events)
# Focus: "Hyper-TOEIC" (Conferences, Speeches, Networking)
toeic_examples_d22p2 = {
    41: ("The vice president will preside over the meeting.", "부사장이 회의의 사회를 볼(의장을 맡을) 것입니다."),
    42: ("His comments were irrelevant to the topic.", "그의 논평은 주제와 무관했습니다."),
    43: ("Budget constraints limited our options.", "예산 제한이 우리의 선택지를 제한했습니다."),
    44: ("This is a condensed version of the report.", "이것은 보고서의 요약된(압축된) 버전입니다."),
    45: ("The CEO endorsed the new marketing plan.", "CEO는 새 마케팅 계획을 (공개적으로) 지지했습니다."),
    46: ("The meeting started punctually at 9 AM.", "회의는 오전 9시에 제시간에 시작되었습니다."),
    47: ("Directors are elected at the annual meeting.", "이사들은 연례 회의에서 선출됩니다."),
    48: ("The presentation will be in the main conference room.", "발표는 주 회의실에서 있을 것입니다."),
    49: ("We have invited a famous author as a guest speaker.", "우리는 유명한 작가를 초청 연사로 초대했습니다."),
    50: ("Please hand out these brochures to the audience.", "이 브로셔들을 청중에게 나누어 주십시오."),
    51: ("The office will be closed for the holiday.", "사무실은 휴가(공휴일) 동안 닫을 것입니다."),
    52: ("Let's end the meeting here for today.", "오늘 회의는 여기서 끝냅시다."),
    53: ("Please confirm the meeting time.", "회의 시간을 확인해 주십시오."),
    54: ("She scanned the document for errors.", "그녀는 문서에 오류가 있는지 자세히 조사했습니다(살폈습니다)."),
    55: ("The two leaders shook hands after the deal.", "두 지도자는 거래 후 악수를 했습니다."),
    56: ("The president gave a moving speech.", "대통령은 감동적인 연설을 했습니다."),
    57: ("He is a valuable teammate.", "그는 소중한 팀 동료입니다."),
    58: ("Please water the plants in the lobby.", "로비에 있는 식물들에게 물을 주십시오."),
    59: ("Write down your questions before the Q&A session.", "질의응답 시간 전에 질문을 적어 두십시오."),
    60: ("Please advise us of any changes to the schedule.", "일정에 변경 사항이 있으면 우리에게 알려 주십시오."),
    61: ("The conference will be held in Paris.", "회의는 파리에서 열릴 것입니다."),
    62: ("The launch is scheduled for next Monday.", "출시는 다음 주 월요일로 예정되어 있습니다."),
    63: ("We engaged in serious business talk.", "우리는 진지한 사업 이야기를 나누었습니다."),
    64: ("I had a long conversation with the client.", "저는 고객과 긴 대화를 나누었습니다."),
    65: ("The board debated the issue for hours.", "이사회는 그 문제를 몇 시간 동안 토론했습니다."),
    66: ("He expressed his gratitude for the opportunity.", "그는 기회를 준 것에 대해 감사를 표현했습니다."),
    67: ("It was a small gathering of friends.", "그것은 친구들의 작은 모임이었습니다."),
    68: ("You should not judge a book by its cover.", "겉모습만 보고 판단해서는 안 됩니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d22p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': int(row['Target_Score']) if 'Target_Score' in row else 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

# STRICT OUTPUT: day22_part2.json
with open('day22_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 22 Part 2 Created (Meetings & Events).")
