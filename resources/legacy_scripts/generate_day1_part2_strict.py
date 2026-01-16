import pandas as pd
import json

# CSV 파일 읽기
df = pd.read_csv('hackers_vocab_final.csv')

# Day 1, Part 2 데이터 (41-68번)
day1_part2 = df[(df['Day'] == 1) & (df['No'] >= 41) & (df['No'] <= 68)].copy()

# TOEIC Premium Examples (기출 수준)
toeic_examples = {
    41: ("Please attach the completed application form to your email.", "작성된 신청서를 이메일에 첨부해 주십시오."),
    42: ("She has built a successful career in finance over the last decade.", "그녀는 지난 10년 동안 금융 분야에서 성공적인 경력을 쌓았습니다."),
    43: ("Upon completion of the training, you will receive a certificate.", "교육 완료 시, 귀하는 수료증을 받게 됩니다."),
    44: ("The selection process must be fair and transparent.", "선발 과정은 공정하고 투명해야 합니다."),
    45: ("Recent college graduates are encouraged to apply.", "최근 대학 졸업생들의 지원을 권장합니다."),
    46: ("In fact, sales have increased by 20% this quarter.", "사실, 이번 분기 매출은 20% 증가했습니다."),
    47: ("The annual job fair attracts hundreds of employers.", "연례 취업 박람회는 수백 명의 고용주를 끌어들입니다."),
    48: ("Mr. Chen declined the job offer due to the relocation requirement.", "Chen 씨는 재배치 요건 때문에 일자리 제안을 거절했습니다."),
    49: ("Please make a list of supplies needed for the workshop.", "워크숍에 필요한 물품 목록을 작성해 주세요."),
    50: ("The manager introduced the newcomer to the team.", "매니저는 신입 사원을 팀에 소개했습니다."),
    51: ("There are several part-time positions available at the store.", "상점에는 몇 개의 파트타임 자리가 있습니다."),
    52: ("She mentioned her achievements in her previous job.", "그녀는 이전 직장에서의 성취를 언급했습니다."),
    53: ("The executive secretary manages the CEO's schedule.", "임원 비서는 CEO의 일정을 관리합니다."),
    54: ("Candidates must send in their applications before the deadline.", "지원자는 마감 기한 전에 지원서를 제출해야 합니다."),
    55: ("Please keep your workspace tidy and organized.", "업무 공간을 단정하고 정돈된 상태로 유지해 주세요."),
    56: ("Each trainee is assigned a mentor for the first month.", "각 훈련생은 첫 달 동안 멘토를 배정받습니다."),
    57: ("You can apply for the position online.", "온라인으로 그 직책에 지원할 수 있습니다."),
    58: ("The test measures the candidate's aptitude for programming.", "그 테스트는 지원자의 프로그래밍 적성을 측정합니다."),
    59: ("Only authorized personnel will be admitted to the secure area.", "허가된 인원만 보안 구역에 입장이 허용됩니다."),
    60: ("Passengers are advised to arrive at the airport early.", "승객들은 공항에 일찍 도착할 것을 권유받습니다."),
    61: ("The candidate meets all the criteria for the scholarship.", "그 지원자는 장학금에 대한 모든 기준을 충족합니다."),
    62: ("The company has grown significantly over the past decade.", "그 회사는 지난 10년 동안 크게 성장했습니다."),
    63: ("The factory employs over 500 workers.", "그 공장은 500명 이상의 근로자를 고용합니다."),
    64: ("Funding for the project was insufficient.", "프로젝트를 위한 자금이 불충분했습니다."),
    65: ("A minimum of three years experience is required.", "최소 3년의 경력이 요구됩니다."),
    66: ("Both parties agreed to the terms of the contract.", "양 당사자는 계약 조건에 동의했습니다."),
    67: ("Fresh produce is plentiful during the summer season.", "여름철에는 신선한 농산물이 풍부합니다."),
    68: ("Doctors and lawyers are in the legal and medical professions.", "의사와 변호사는 법률 및 의료 직종에 종사합니다.")
}

part2_data = []
for idx, row in day1_part2.iterrows():
    no = int(row['No'])
    ex_en, ex_ko = toeic_examples.get(no, (f"Example sentence for {row['Word']}.", f"{row['Meaning']} 예문."))
    
    word_data = {
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': str(row['Meaning']),
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    }
    part2_data.append(word_data)

with open('day1_part2.json', 'w', encoding='utf-8') as f:
    json.dump(part2_data, f, ensure_ascii=False, indent=2)

print(f"✅ day1_part2.json 생성 완료 ({len(part2_data)} words)")
