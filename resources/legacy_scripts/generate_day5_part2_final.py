import pandas as pd
import json
import re

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 5 Part 2 : No. 41 ~ 68 (28 words) ---
part2_df = df[(df['Day'] == 5) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

def clean_meaning(text):
    if not isinstance(text, str):
        return str(text)
    text = text.replace('\n', ', ')
    text = text.replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

# INSTRUCTOR-GRADE TOEIC EXAMPLES (Day 5 Part 2)
toeic_examples_d5p2 = {
    41: ("A man is setting a briefcase on the desk.", "한 남자가 책상 위에 서류 가방을 놓고 있습니다."),
    42: ("Mr. Kim is currently on a business trip in London.", "김 씨는 현재 런던으로 출장 중입니다."),
    43: ("Why don't you come over to my office later?", "나중에 제 사무실로 오시지 그러세요?"),
    44: ("Please proceed to the counter to pay for your items.", "물품 대금을 지불하려면 계산대로 가십시오."),
    45: ("I will e-mail you the details of the meeting.", "회의 세부사항을 이메일로 보내드리겠습니다."),
    46: ("She is looking into a filing cabinet.", "그녀는 서류 정리 캐비닛을 들여다보고 있습니다."),
    47: ("Please put these documents in a blue folder.", "이 서류들을 파란색 폴더에 넣어 주십시오."),
    48: ("I have a terrible headache, so I need to leave early.", "제가 심한 두통이 있어서 일찍 퇴근해야겠습니다."),
    49: ("Internship opportunities are available for college students.", "대학생들을 위해 인턴십 기회가 제공됩니다."),
    50: ("I have to redo the report from scratch.", "저는 보고서를 처음부터 다시 해야 합니다."),
    51: ("Checking e-mails is part of my daily routine.", "이메일을 확인하는 것은 제 일상의(판에 박힌) 일과 중 일부입니다."),
    52: ("He turned on the table lamp to read the document.", "그는 서류를 읽기 위해 탁상 전기스탠드를 켰습니다."),
    53: ("Thanks to your help, we finished the project on time.", "당신의 도움 덕택에, 우리는 프로젝트를 제시간에 끝냈습니다."),
    54: ("The train timetable has been changed effectively immediately.", "기차 시간표가 즉시 변경되었습니다."),
    55: ("The window display is being set up by the staff.", "쇼윈도의 상품 진열이 직원에 의해 설치되고 있습니다."),
    56: ("The editor-in-chief approved the final draft.", "편집장(최고위자)이 최종 초안을 승인했습니다."),
    57: ("He tried to conceal the mistake from his boss.", "그는 상사에게 실수를 감추려고 노력했습니다."),
    58: ("Please correct the errors in the document.", "문서의 오류를 정정해 주십시오."),
    59: ("The country is facing an economic crisis.", "그 나라는 경제 위기에 직면해 있습니다."),
    60: ("We must embrace new technologies to stay competitive.", "우리는 경쟁력을 유지하기 위해 새로운 기술을 받아들여야(포용해야) 합니다."),
    61: ("The results were better than expected.", "결과는 예상보다 좋았습니다."),
    62: ("The company hosted a public forum on environmental issues.", "그 회사는 환경 문제에 대한 공개 토론회를 주최했습니다."),
    63: ("We should use video conferencing instead of traveling.", "우리는 이동하는 대신 화상 회의를 사용해야 합니다."),
    64: ("Our mission is to provide high-quality services.", "우리의 임무는 고품질 서비스를 제공하는 것입니다."),
    65: ("The channel has changed its programming schedule.", "그 채널은 방송 편성 일정을 변경했습니다."),
    66: ("Please complete the remaining tasks by tomorrow.", "내일까지 남아 있는 업무들을 완료해 주십시오."),
    67: ("There is no need to rush; we have plenty of time.", "서두를 필요가 없습니다; 우리는 시간이 충분합니다."),
    68: ("Unfortunately, the item you requested is out of stock.", "불행하게도(유감스럽게도), 요청하신 상품은 재고가 없습니다.")
}

part2_data = []
for idx, row in part2_df.iterrows():
    no = int(row['No'])
    cleaned_meaning = clean_meaning(row['Meaning'])
    ex_en, ex_ko = toeic_examples_d5p2.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part2_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': cleaned_meaning,
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day5_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print("✅ Day 5 Part 2 Created.")
