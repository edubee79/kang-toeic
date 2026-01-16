import pandas as pd
import json

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 1 Part 1 : No. 1 ~ 40 (40 words) ---
part1_df = df[(df['Day'] == 1) & (df['No'] >= 1) & (df['No'] <= 40)].copy()

print(f"Part 1 Range Check: Min {part1_df['No'].min()} ~ Max {part1_df['No'].max()}")
print(f"Part 1 Count: {len(part1_df)}")

if len(part1_df) != 40:
    raise ValueError("Part 1 count mismatch! Must be 40.")

toeic_examples_p1 = {
    1: ("Please submit your resume by Friday.", "금요일까지 이력서를 제출해 주세요."),
    2: ("There are several openings in the marketing department.", "마케팅 부서에 몇 개의 공석이 있습니다."),
    3: ("All applicants must have at least two years of experience.", "모든 지원자는 최소 2년의 경력이 있어야 합니다."),
    4: ("Fluency in English is a requirement for this job.", "영어 유창성은 이 직업의 필수 요건입니다."),
    5: ("We are working hard to meet the deadline.", "우리는 마감 기한을 맞추기 위해 열심히 일하고 있습니다."),
    6: ("She is highly qualified for the position.", "그녀는 그 직책에 매우 적합한 자격을 갖추고 있습니다."),
    7: ("We will interview three candidates this afternoon.", "오늘 오후에 세 명의 후보자를 인터뷰할 것입니다."),
    8: ("The CEO expressed confidence in the new strategy.", "CEO는 새로운 전략에 대해 확신을 표명했습니다."),
    9: ("Mr. Kim is a highly recommended consultant.", "김 씨는 매우 추천받는 컨설턴트입니다."),
    10: ("You should seek professional advice on this matter.", "이 문제에 대해 전문적인 조언을 구해야 합니다."),
    11: ("The job interview will be held via video conference.", "취업 면접은 화상 회의를 통해 진행될 것입니다."),
    12: ("The company plans to hire ten new employees.", "그 회사는 10명의 신입 사원을 고용할 계획입니다."),
    13: ("New staff must attend a training session.", "신입 직원은 교육 세션에 참석해야 합니다."),
    14: ("Please provide three professional references.", "세 명의 직업적 추천인을 제공해 주세요."),
    15: ("He accepted a management position at the bank.", "그는 은행의 관리직 제안을 수락했습니다."),
    16: ("Winning the award was a major achievement.", "상을 받은 것은 큰 성취였습니다."),
    17: ("I was impressed by his presentation skills.", "나는 그의 발표 능력에 감명받았습니다."),
    18: ("She did an excellent job on the project.", "그녀는 그 프로젝트에서 훌륭한 성과를 냈습니다."),
    19: ("Only full-time employees are eligible for benefits.", "정규직 직원만 혜택을 받을 자격이 있습니다."),
    20: ("Badges are used to identify employees.", "배지는 직원을 식별하는 데 사용됩니다."),
    21: ("Many people associate the brand with quality.", "많은 사람들이 그 브랜드를 품질과 연관 짓습니다."),
    22: ("One of the conditions of employment is a background check.", "고용 조건 중 하나는 신원 조회입니다."),
    23: ("The factory provides employment for local residents.", "그 공장은 지역 주민들에게 일자리를 제공합니다."),
    24: ("The team failed due to a lack of communication.", "그 팀은 의사소통 부족으로 인해 실패했습니다."),
    25: ("He is seeking a managerial role.", "그는 관리직 역할을 찾고 있습니다."),
    26: ("A diligent worker receives good evaluations.", "성실한 직원은 좋은 평가를 받습니다."),
    27: ("Are you familiar with this software?", "이 소프트웨어에 익숙한가요?"),
    28: ("The job requires proficiency in Spanish.", "그 직업은 스페인어 능숙함을 요구합니다."),
    29: ("We sent brochures to prospective clients.", "우리는 잠재 고객들에게 브로셔를 보냈습니다."),
    30: ("The design must appeal to young consumers.", "그 디자인은 젊은 소비자들의 관심을 끌어야 합니다."),
    31: ("We specialize in web development.", "우리는 웹 개발을 전문으로 합니다."),
    32: ("Employees are apprehensive about the merger.", "직원들은 합병에 대해 걱정하고 있습니다."),
    33: ("They hired a safety consultant.", "그들은 안전 컨설턴트를 고용했습니다."),
    34: ("This coupon entitles you to a discount.", "이 쿠폰은 당신에게 할인을 받을 자격을 줍니다."),
    35: ("She holds a master's degree in economics.", "그녀는 경제학 석사 학위를 가지고 있습니다."),
    36: ("The payroll department processes salaries.", "급여 부서는 급여를 처리합니다."),
    37: ("We are recruiting for the sales team.", "우리는 영업팀 인원을 모집하고 있습니다."),
    38: ("You need professional certification to practice.", "개업하려면 전문 자격증이 필요합니다."),
    39: ("Please state your name and occupation.", "이름과 직업을 말씀해 주세요."),
    40: ("The minimum wage has increased.", "최저 임금이 인상되었습니다.")
}

part1_data = []
for idx, row in part1_df.iterrows():
    no = int(row['No'])
    ex_en, ex_ko = toeic_examples_p1.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    part1_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': str(row['Meaning']),
        'targetScore': 650,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day1_part1.json', 'w', encoding='utf-8') as f:
    json.dump(part1_data, f, ensure_ascii=False, indent=2)

print("✅ Day 1 Part 1 Created.")
