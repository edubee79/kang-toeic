import pandas as pd
import json
import re

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 2 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 2) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

# Function to clean meaning text
def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# High-quality TOEIC examples mapped to verified No. 41-68 words
toeic_examples_d2p2 = {
    41: ("Please do not bend over the railing for your safety.", "안전을 위해 난간 너머로 몸을 숙이지 마십시오."),
    42: ("He completed the entire project by himself.", "그는 혼자 힘으로 전체 프로젝트를 완료했습니다."),
    43: ("Please check the date of the meeting on your calendar.", "달력에서 회의 날짜를 확인해 주십시오."),
    44: ("It takes time to get used to the new software.", "새로운 소프트웨어에 익숙해지는 데는 시간이 걸립니다."),
    45: ("We can reschedule the meeting if it's okay with you.", "당신만 괜찮다면 회의 일정을 변경할 수 있습니다."),
    46: ("In case of fire, use the emergency exit immediately.", "화재 발생 시, 즉시 비상구를 사용하십시오."),
    47: ("The chairs were arranged in rows for the seminar.", "세미나를 위해 의자들은 여러 줄로 배치되었습니다."),
    48: ("Please review each item on the invoice carefully.", "청구서의 각 항목을 주의 깊게 검토해 주십시오."),
    49: ("The company seeks legal advice before signing contracts.", "회사는 계약을 체결하기 전에 법률 자문을 구합니다."),
    50: ("The manager decided to let go of the incompetent employee.", "매니저는 무능한 직원을 해고하기로(놓아주기로) 결정했습니다."),
    51: ("Use a ruler to measure the dimensions precisely.", "치수를 정확하게 측정하기 위해 자를 사용하십시오."),
    52: ("Production will stop during the holiday season.", "생산은 휴가 시즌 동안 중단될 것입니다."),
    53: ("The manager is too busy to meet with us right now.", "매니저는 지금 너무 바빠서 우리를 만날 수 없습니다."),
    54: ("The school has introduced a new science curriculum.", "그 학교는 새로운 과학 교과 과정을 도입했습니다."),
    55: ("Formal dress is required for the awards ceremony.", "시상식에는 정장이 요구됩니다."),
    56: ("We have enough inventory to meet the demand.", "우리는 수요를 충족시킬 충분한 재고를 가지고 있습니다."),
    57: ("Please finish the report by the end of the day.", "오늘 일과가 끝날 때까지 보고서를 끝내주세요."),
    58: ("Please let us know if you have a problem accessing the file.", "파일에 접근하는 데 문제가 있으면 저희에게 알려주세요."),
    59: ("The conference will be held in a large hall.", "컨퍼런스는 큰 홀에서 열릴 것입니다."),
    60: ("She works for a prestigious international law firm.", "그녀는 명망 있는 국제 법률 회사에서 일합니다."),
    61: ("Please do not speak loudly in the library.", "도서관에서는 큰 소리로 말하지 마십시오."),
    62: ("The salary is competitive, plus there are great benefits.", "급여는 경쟁력이 있으며, 게다가 훌륭한 혜택이 있습니다."),
    63: ("We must take measures to protect confidential data.", "우리는 기밀 데이터를 보호하기 위해 조치를 취해야 합니다."),
    64: ("The CEO handles urgent matters but seldom visits the branch.", "CEO는 긴급한 문제를 처리하지만 지사를 방문하는 일은 드뭅니다."),
    65: ("The store installed cameras to prevent theft.", "그 가게는 절도를 방지하기 위해 카메라를 설치했습니다."),
    66: ("We will try to implement the changes by next week.", "우리는 다음 주까지 변경 사항을 이행하려고 노력할 것입니다."),
    67: ("He was the only witness to the accident.", "그는 그 사고의 유일한 목격자였습니다."),
    68: ("Please write your name and signature at the bottom.", "하단에 이름과 서명을 써 주십시오.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d2p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day2_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 2 Part 2 Created.")
