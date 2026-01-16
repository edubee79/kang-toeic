import pandas as pd
import json
import re

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 3 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 3) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

# Function to clean meaning text
def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# High-quality TOEIC examples mapped to verified No. 1-40 words (Day 3)
toeic_examples_d3p1 = {
    1: ("I have become accustomed to the new system.", "저는 새로운 시스템에 익숙해졌습니다."),
    2: ("She works for a multinational corporation.", "그녀는 다국적 기업에서 일합니다."),
    3: ("The new project is very demanding.", "새 프로젝트는 매우 힘듭니다(요구가 많습니다)."),
    4: ("I discussed the issue with my colleague.", "저는 그 문제에 대해 동료와 상의했습니다."),
    5: ("The sales division exceeded its targets.", "영업 부서는 목표를 초과 달성했습니다."),
    6: ("He requested a leave of absence.", "그는 휴가를 요청했습니다."),
    7: ("We need to manage our time efficiently.", "우리는 시간을 효율적으로 관리해야 합니다."),
    8: ("The CEO manages the company effectively.", "CEO는 회사를 효과적으로 경영합니다."),
    9: ("Please submit your report by Friday.", "금요일까지 보고서를 제출해 주십시오."),
    10: ("Please report directly to the manager.", "매니저에게 곧바로 보고해 주십시오."),
    11: ("Please remind me to call the client.", "고객에게 전화하라고 제게 상기시켜 주세요."),
    12: ("The supervisor instructed the staff to update the files.", "감독관은 직원들에게 파일을 업데이트하라고 지시했습니다."),
    13: ("We must meet the deadline by 5 PM.", "우리는 오후 5시까지 마감 기한을 맞춰야 합니다."),
    14: ("We analyzed a sample of the product.", "우리는 제품의 견본을 분석했습니다."),
    15: ("We will notify you of any changes.", "변경 사항이 있으면 알려드리겠습니다."),
    16: ("The team performed the task successfully.", "팀은 그 과제를 성공적으로 수행했습니다."),
    17: ("The manager monitors the progress of the project.", "매니저는 프로젝트의 진행 상황을 감독합니다."),
    18: ("She deserves a promotion for her hard work.", "그녀는 열심히 일한 대가로 승진할 자격이 있습니다."),
    19: ("The assignment must be completed by tomorrow.", "과제는 내일까지 완료되어야 합니다."),
    20: ("The entire staff attended the meeting.", "전체 직원이 회의에 참석했습니다."),
    21: ("The company will release a new product next week.", "회사는 다음 주에 신제품을 출시할 것입니다."),
    22: ("You can reach me at extension 101.", "내선 번호 101번으로 저에게 연락하실 수 있습니다."),
    23: ("Applications must be submitted electronically.", "지원서는 컴퓨터 통신망으로(온라인으로) 제출되어야 합니다."),
    24: ("Attendance at the seminar is mandatory.", "세미나 출석은 의무입니다."),
    25: ("You are absolutely right.", "당신 말이 전적으로 옳습니다."),
    26: ("Managers should delegate tasks to their team members.", "관리자들은 팀원들에게 업무를 위임해야 합니다."),
    27: ("The audience listened attentively to the speaker.", "청중은 연사의 말을 주의 깊게 경청했습니다."),
    28: ("New employees work under the supervision of a mentor.", "신입 사원들은 멘토의 감독하에 일합니다."),
    29: ("We attended a workshop on leadership skills.", "우리는 리더십 스킬에 관한 워크숍에 참석했습니다."),
    30: ("The event drew a large crowd.", "그 행사는 많은 관중을 끌어모았습니다."),
    31: ("The manuscript requires some revision.", "원고는 약간의 수정이 필요합니다."),
    32: ("He reluctantly accepted the offer.", "그는 마지못해 제안을 수락했습니다."),
    33: ("Please acquaint yourself with the safety procedures.", "안전 절차를 숙지해 주십시오."),
    34: ("Please convey my message to the director.", "제 메시지를 이사님께 전달해 주세요."),
    35: ("Please check your email regularly.", "이메일을 정기적으로 확인해 주십시오."),
    36: ("The company headquarters is located in New York.", "회사 본부는 뉴욕에 위치해 있습니다."),
    37: ("Please file these documents in the cabinet.", "이 서류들을 캐비닛에 정리해 주십시오."),
    38: ("The manager oversees daily operations.", "매니저는 일일 운영을 감독합니다."),
    39: ("He was involved in the decision-making process.", "그는 의사 결정 과정에 관여했습니다."),
    40: ("I need to concentrate on my work.", "저는 제 업무에 집중해야 합니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d3p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day3_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 3 Part 1 Created.")
