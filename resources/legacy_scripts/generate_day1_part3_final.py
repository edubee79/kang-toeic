import pandas as pd
import json

df = pd.read_csv('hackers_vocab_final.csv')

# --- Day 1 Part 3 : No. 69 ~ 136 (68 words) ---
part3_df = df[(df['Day'] == 1) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

print(f"Part 3 Range Check: Min {part3_df['No'].min()} ~ Max {part3_df['No'].max()}")
print(f"Part 3 Count: {len(part3_df)}")

if len(part3_df) != 68:
    raise ValueError(f"Part 3 count mismatch! Must be 68. Found {len(part3_df)}")

# Check Overlap with Part 2 (41-68)
if part3_df['No'].min() <= 68:
     raise ValueError("CRITICAL: Part 3 overlaps with Part 2 (No <= 68 detected)!")

toeic_examples_p3 = {
    69: ("With dedication, you can achieve your goal of becoming a manager.", "헌신한다면 매니저가 되려는 당신의 목표를 달성할 수 있습니다."),
    70: ("He worked as an apprentice to learn the trade.", "그는 그 일을 배우기 위해 견습생으로 일했습니다."),
    71: ("All staff members are required to dress formally for the event.", "모든 직원은 행사를 위해 정장을 입어야 합니다."),
    72: ("The CEO arrived, dressed in a sharp suit.", "CEO는 멋진 정장을 입고 도착했습니다."),
    73: ("We need to figure out why sales dropped last month.", "우리는 지난달 매출이 왜 떨어졌는지 알아내야 합니다."),
    74: ("She is seeking full-time work in the marketing sector.", "그녀는 마케팅 분야에서 정규직 일자리를 찾고 있습니다."),
    75: ("This position offers an excellent job opportunity for graduates.", "이 직책은 졸업생들에게 훌륭한 취업 기회를 제공합니다."),
    76: ("His job search lasted for three months before he was hired.", "그의 구직 활동은 고용되기 전 3개월 동안 지속되었습니다."),
    77: ("As a job seeker, you should network as much as possible.", "구직자로서, 당신은 가능한 한 많이 인맥을 쌓아야 합니다."),
    78: ("Please lay out the tools on the table.", "탁자 위에 도구들을 펼쳐 놓으세요."),
    79: ("Can you write a letter of recommendation for me?", "저를 위해 추천서를 써 주실 수 있나요?"),
    80: ("Employees will receive a 5% pay raise this year.", "직원들은 올해 5%의 임금 인상을 받을 것입니다."),
    81: ("Practical experience is just as important as academic qualifications.", "실무 경험은 학력만큼이나 중요합니다."),
    82: ("Please provide proof of employment from your previous company.", "이전 회사의 재직 증명서를 제출해 주세요."),
    83: ("If rejected, you can reapply after six months.", "거절당할 경우, 6개월 후에 재지원할 수 있습니다."),
    84: ("A recommendation letter is required for this application.", "이 지원에는 추천서가 필요합니다."),
    85: ("Please attach a reference letter to your resume.", "이력서에 추천서를 첨부해 주세요."),
    86: ("The package was sent off to the headquarters yesterday.", "그 소포는 어제 본사로 발송되었습니다."),
    87: ("The recruiter called to set up an interview.", "채용 담당자가 면접 일정을 잡기 위해 전화했습니다."),
    88: ("All applicants must take an examination.", "모든 지원자는 시험을 치러야 합니다."),
    89: ("New employees are sent to the training center for a week.", "신입 사원들은 일주일 동안 훈련소로 보내집니다."),
    90: ("Please have a seat in the waiting room.", "대기실에 앉아 계세요."),
    91: ("He is a well-educated professional with two degrees.", "그는 두 개의 학위를 가진 잘 교육받은 전문가입니다."),
    92: ("Keep your workstation clean and organized.", "작업대를 깨끗하고 정돈된 상태로 유지하세요."),
    93: ("She is a zealous worker who always exceeds expectations.", "그녀는 항상 기대를 뛰어넘는 열성적인 직원입니다."),
    94: ("Submit your cover letter along with your CV.", "이력서와 함께 자기소개서를 제출하세요."),
    95: ("He is devoted to his work and rarely takes time off.", "그는 자신의 일에 헌신적이며 좀처럼 휴가를 내지 않습니다."),
    96: ("We are looking for an energetic salesperson.", "우리는 활동적인 영업 사원을 찾고 있습니다."),
    97: ("The team is enthusiastic about the new project.", "팀은 새 프로젝트에 대해 열광적입니다."),
    98: ("She excels in customer service.", "그녀는 고객 서비스에서 뛰어납니다."),
    99: ("The price excludes shipping costs.", "가격은 배송료를 제외합니다."),
    100: ("He speaks Spanish fluently.", "그는 스페인어를 유창하게 구사합니다."),
    101: ("I'm not sure if I can get through the final exam.", "기말 시험에 합격할 수 있을지 확신이 서지 않습니다."),
    102: ("This candidate matches our requirements perfectly.", "이 후보자는 우리의 요구 사항과 완벽하게 일치합니다."),
    103: ("A car is a necessity in this city.", "이 도시에서 자동차는 필수품입니다."),
    104: ("What qualifications do you have for this role?", "이 역할에 대해 어떤 자격을 갖추고 있습니까?"),
    105: ("Please include all relevant experience in your application.", "지원서에 모든 관련 경험을 포함시켜 주세요."),
    106: ("Employees can sign up for the workshop online.", "직원들은 온라인으로 워크숍에 등록할 수 있습니다."),
    107: ("We hired a talented graphic designer.", "우리는 유능한 그래픽 디자이너를 고용했습니다."),
    108: ("He is a visiting professor at the university.", "그는 그 대학의 객원 교수입니다."),
    109: ("The company has a diverse workforce.", "그 회사는 다양한 인력을 보유하고 있습니다."),
    110: ("The CEO will address the audience at the conference.", "CEO가 컨퍼런스에서 청중에게 연설할 것입니다."),
    111: ("Decisions should not be influenced by appearance.", "결정은 외모에 영향을 받아서는 안 됩니다."),
    112: ("We are seeking a bilingual secretary who speaks English and Japanese.", "우리는 영어와 일본어를 구사하는 2개 국어 비서를 찾고 있습니다."),
    113: ("Please send your curriculum vitae to the HR department.", "인사과로 이력서를 보내주세요."),
    114: ("He received his diploma in engineering.", "그는 공학 졸업 증서를 받았습니다."),
    115: ("Marathon runners need great physical endurance.", "마라톤 주자들은 엄청난 신체적 인내력을 필요로 합니다."),
    116: ("Fluency in English is essential for this job.", "이 직업에는 영어 유창성이 필수적입니다."),
    117: ("She is fluent in three languages.", "그녀는 3개 국어에 유창합니다."),
    118: ("I decided to go with your suggestion.", "당신의 제안을 받아들이기로 결정했습니다."),
    119: ("The human resources department handles hiring.", "인사부는 채용을 담당합니다."),
    120: ("The machine was operating improperly.", "기계가 부적절하게 작동하고 있었습니다."),
    121: ("Always respond to customers in a positive manner.", "항상 긍정적인 태도로 고객에게 응대하세요."),
    122: ("He is an expert in the field of artificial intelligence.", "그는 인공지능 분야의 전문가입니다."),
    123: ("His inexperience led to some mistakes.", "그의 미숙함이 몇 가지 실수로 이어졌습니다."),
    124: ("She seems to lack confidence in her abilities.", "그녀는 자신의 능력에 자신감이 부족해 보입니다."),
    125: ("Make checking your email a regular habit.", "이메일을 확인하는 것을 규칙적인 습관으로 만드세요."),
    126: ("We want to make a commitment to sustainability.", "우리는 지속 가능성에 헌신하고 싶습니다."),
    127: ("I make a point of arriving early.", "나는 반드시 일찍 도착하려고 노력합니다."),
    128: ("We need more manpower to finish the project.", "프로젝트를 끝내려면 더 많은 인력이 필요합니다."),
    129: ("She earned a master's degree in business administration.", "그녀는 경영학 석사 학위를 취득했습니다."),
    130: ("He is a novice at programming.", "그는 프로그래밍 초보자입니다."),
    131: ("Employees receive their paycheck every two weeks.", "직원들은 2주마다 급료를 받습니다."),
    132: ("Self-motivation is key to working from home.", "자기 동기부여는 재택근무의 핵심입니다."),
    133: ("The system will send a notification when the task is done.", "작업이 완료되면 시스템이 알림을 보낼 것입니다."),
    134: ("There is a vacancy in the sales department.", "영업부에 공석이 생겼습니다."),
    135: ("Help wanted: Experienced chef.", "구인: 경력직 셰프 모집."),
    136: ("The interviewer asked about my work history.", "면접관은 나의 경력 사항에 대해 물었습니다.")
}

part3_data = []
for idx, row in part3_df.iterrows():
    no = int(row['No'])
    ex_en, ex_ko = toeic_examples_p3.get(no, (f"Example for {row['Word']}", f"{row['Meaning']} 예문"))
    
    # Validation for specific error case
    if no == 118 and "suggestion" not in ex_en:
        raise ValueError("Critical Error: 'go with' example mismatch detected!")

    part3_data.append({
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': str(row['Meaning']),
        'targetScore': 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    })

with open('day1_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print("✅ Day 1 Part 3 Created.")
