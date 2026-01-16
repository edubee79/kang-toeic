import pandas as pd
import json

df = pd.read_csv('hackers_vocab_final.csv')
day1_part3 = df[(df['Day'] == 1) & (df['No'] >= 69) & (df['No'] <= 136)].copy()

toeic_examples = {
    69: ("With hard work and dedication, you can achieve your goals.", "노력과 헌신이 있다면 목표를 달성할 수 있습니다."),
    70: ("He started his career as an apprentice carpenter.", "그는 목수 견습생으로 경력을 시작했습니다."),
    71: ("Employees are expected to dress formally for client meetings.", "직원들은 고객 회의 시 정장을 입어야 합니다."),
    72: ("All attendees were dressed in suits for the gala.", "모든 참석자들은 갈라 행사를 위해 정장을 입었습니다."),
    73: ("We need to figure out a solution to this problem.", "우리는 이 문제에 대한 해결책을 알아내야 합니다."),
    74: ("She is looking for full-time work with benefits.", "그녀는 혜택이 포함된 정규직 일자리를 찾고 있습니다."),
    75: ("The new manager will gain more responsibility over time.", "새 매니저는 시간이 지남에 따라 더 많은 책임을 얻게 될 것입니다."),
    76: ("He gained recognition for his innovative ideas.", "그는 혁신적인 아이디어로 인정을 받았습니다."),
    77: ("This job will give you a chance to travel.", "이 직업은 당신에게 여행할 기회를 줄 것입니다."),
    78: ("The manager gave him a raise for his excellent performance.", "매니저는 그의 훌륭한 성과에 대해 인상을 해주었습니다."),
    79: ("The CEO gave a presentation on the company's future.", "CEO는 회사의 미래에 대해 발표했습니다."),
    80: ("Please give my regards to your team.", "당신의 팀에게 안부 전해주세요."),
    81: ("The company has a strict dress code.", "그 회사는 엄격한 복장 규정을 가지고 있습니다."),
    82: ("He has a good track record in sales.", "그는 영업 분야에서 좋은 실적을 가지고 있습니다."),
    83: ("She decided to hire a new assistant.", "그녀는 새 조수를 고용하기로 결정했습니다."),
    84: ("Please hold the line while I transfer your call.", "전화를 연결하는 동안 잠시만 기다려 주세요."),
    85: ("The candidate holds a degree in marketing.", "그 지원자는 마케팅 학위를 가지고 있습니다."),
    86: ("The hotel holds up to 500 guests.", "그 호텔은 최대 500명의 손님을 수용합니다."),
    87: ("We hope to see an increase in profits next year.", "우리는 내년에 이익이 증가하기를 희망합니다."),
    88: ("The job involves a lot of travel.", "그 직업은 많은 여행을 포함합니다."),
    89: ("He is involved in several community projects.", "그는 여러 지역 사회 프로젝트에 참여하고 있습니다."),
    90: ("Please keep this information confidential.", "이 정보를 기밀로 유지해 주세요."),
    91: ("We need to keep up with the latest trends.", "우리는 최신 트렌드를 따라잡아야 합니다."),
    92: ("He lacks the necessary experience for the job.", "그는 그 직업에 필요한 경험이 부족합니다."),
    93: ("The team is led by a senior engineer.", "그 팀은 수석 엔지니어가 이끕니다."),
    94: ("Poor management led to the company's downfall.", "부실한 경영이 회사의 몰락을 초래했습니다."),
    95: ("Please leave a message after the tone.", "삐 소리 후에 메시지를 남겨 주세요."),
    96: ("She is currently on maternity leave.", "그녀는 현재 출산 휴가 중입니다."),
    97: ("Let me know if you have any questions.", "질문이 있으면 알려주세요."),
    98: ("We are looking for a new office manager.", "우리는 새로운 사무실 관리자를 찾고 있습니다."),
    99: ("She looks forward to meeting you.", "그녀는 당신을 만나기를 고대하고 있습니다."),
    100: ("Please look into this matter immediately.", "이 문제를 즉시 조사해 주세요."),
    101: ("He made a mistake in the report.", "그는 보고서에서 실수를 저질렀습니다."),
    102: ("The CEO made a decision to expand the business.", "CEO는 사업을 확장하기로 결정했습니다."),
    103: ("Please make sure to lock the door.", "반드시 문을 잠그세요."),
    104: ("He managed to finish the project on time.", "그는 제시간에 프로젝트를 끝낼 수 있었습니다."),
    105: ("The company manufactures electronic components.", "그 회사는 전자 부품을 제조합니다."),
    106: ("We need to meet the customer's expectations.", "우리는 고객의 기대를 충족시켜야 합니다."),
    107: ("The meeting was held in the conference room.", "회의는 회의실에서 열렸습니다."),
    108: ("He mentioned that he would be late.", "그는 늦을 것이라고 언급했습니다."),
    109: ("Please notify us of any changes to your address.", "주소 변경 사항이 있으면 우리에게 알려주세요."),
    110: ("The office is open from 9 AM to 5 PM.", "사무실은 오전 9시부터 오후 5시까지 엽니다."),
    111: ("Hiring decisions should not be influenced by appearance.", "채용 결정은 외모에 영향을 받아서는 안 됩니다."),
    112: ("The price excludes tax and shipping charges.", "가격에는 세금과 배송료가 제외되어 있습니다."),
    113: ("Please submit a detailed curriculum vitae highlighting your research experience.", "귀하의 연구 경험을 강조한 상세한 이력서를 제출해 주십시오."),
    114: ("Candidates must present a high school diploma or equivalent.", "지원자는 고등학교 졸업 증서 또는 동등한 학력을 제시해야 합니다."),
    115: ("Running a business requires great mental endurance.", "사업을 운영하는 것은 엄청난 정신적 인내력을 요구합니다."),
    116: ("Fluency in Mandarin is considered a significant asset for this role.", "중국어 유창성은 이 역할에 있어 중요한 자산으로 간주됩니다."),
    117: ("She is fluent in three languages, including French.", "그녀는 프랑스어를 포함해 3개 국어에 유창합니다."),
    118: ("Applicants must be able to speak and write English fluently.", "지원자는 영어를 유창하게 말하고 쓸 수 있어야 합니다."),
    119: ("Improper use of company funds will result in immediate termination.", "회사 자금의 부적절한 사용은 즉시 해고로 이어질 것입니다."),
    120: ("The equipment malfunctioned because it was installed improperly.", "그 장비는 부적절하게 설치되었기 때문에 오작동했습니다."),
    121: ("He handled the customer complaint in a positive manner.", "그는 고객의 불만을 긍정적으로 처리했습니다."),
    122: ("Dr. Smith is a leading expert in the field of renewable energy.", "스미스 박사는 재생 에너지 분야의 선도적인 전문가입니다."),
    123: ("His inexperience caused some minor errors in the initial phase.", "그의 미숙함은 초기 단계에서 몇 가지 사소한 오류를 야기했습니다."),
    124: ("Some applicants lack confidence during the interview process.", "일부 지원자들은 면접 과정 중에 자신감이 부족합니다."),
    125: ("It is important to make double-checking checks a regular habit.", "수표를 다시 확인하는 습관을 들이는 것이 중요합니다."),
    126: ("The previous occupant left the office in excellent condition.", "이전 입주자는 사무실을 훌륭한 상태로 남겨두었습니다."),
    127: ("The hotel has reached full occupancy for the holiday weekend.", "그 호텔은 휴일 주말 동안 만실이 되었습니다."),
    128: ("Police questioned several witnesses regarding the incident.", "경찰은 그 사건과 관련하여 몇 명의 목격자를 심문했습니다."),
    129: ("Please fill out the attached questionnaire regarding employee satisfaction.", "직원 만족도에 관한 첨부된 설문지를 작성해 주세요."),
    130: ("You must register for the conference by March 1st.", "3월 1일까지 회의에 등록해야 합니다."),
    131: ("Registration for the workshop begins next Monday.", "워크숍 등록은 다음 주 월요일에 시작됩니다."),
    132: ("Equipment inspections are conducted with regularity.", "장비 점검은 정기적으로 수행됩니다."),
    133: ("The government aims to regularize the status of undocumented workers.", "정부는 미등록 근로자의 지위를 합법화하는 것을 목표로 합니다."),
    134: ("We are seeking a highly motivated individual to join our team.", "우리는 우리 팀에 합류할 의욕 넘치는 인재를 찾고 있습니다."),
    135: ("Employees are encouraged to sign up for the pension plan.", "직원들은 연금 계획에 가입하도록 장려됩니다."),
    136: ("Please submit your full work history along with your resume.", "이력서와 함께 전체 경력 사항을 제출해 주세요.")
}

part3_data = []
for idx, row in day1_part3.iterrows():
    no = int(row['No'])
    ex_en, ex_ko = toeic_examples.get(no, (f"Example sentence for {row['Word']}.", f"{row['Meaning']} 예문."))
    
    word_data = {
        'day': int(row['Day']),
        'no': no,
        'word': str(row['Word']),
        'meaning': str(row['Meaning']),
        'targetScore': 800,
        'exampleEn': ex_en,
        'exampleKo': ex_ko
    }
    part3_data.append(word_data)

with open('day1_part3.json', 'w', encoding='utf-8') as f:
    json.dump(part3_data, f, ensure_ascii=False, indent=2)

print(f"✅ day1_part3.json 생성 완료 ({len(part3_data)} words)")
